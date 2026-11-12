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
"use strict";(()=>{var j0=Object.create;var Gf=Object.defineProperty;var K0=Object.getOwnPropertyDescriptor;var J0=Object.getOwnPropertyNames;var Q0=Object.getPrototypeOf,ty=Object.prototype.hasOwnProperty;var ey=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var ny=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of J0(t))!ty.call(n,s)&&s!==e&&Gf(n,s,{get:()=>t[s],enumerable:!(i=K0(t,s))||i.enumerable});return n};var Pa=(n,t,e)=>(e=n!=null?j0(Q0(n)):{},ny(t||!n||!n.__esModule?Gf(e,"default",{value:n,enumerable:!0}):e,n));var xa=ey((Qh,tf)=>{(function(n,t){typeof Qh=="object"&&typeof tf<"u"?tf.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n.polygonClipping=t())})(Qh,(function(){"use strict";/**
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
    ***************************************************************************** */function n(G,w){var E={label:0,sent:function(){if(O[0]&1)throw O[1];return O[1]},trys:[],ops:[]},A,U,O,K;return K={next:$(0),throw:$(1),return:$(2)},typeof Symbol=="function"&&(K[Symbol.iterator]=function(){return this}),K;function $(ct){return function(At){return ut([ct,At])}}function ut(ct){if(A)throw new TypeError("Generator is already executing.");for(;E;)try{if(A=1,U&&(O=ct[0]&2?U.return:ct[0]?U.throw||((O=U.return)&&O.call(U),0):U.next)&&!(O=O.call(U,ct[1])).done)return O;switch(U=0,O&&(ct=[ct[0]&2,O.value]),ct[0]){case 0:case 1:O=ct;break;case 4:return E.label++,{value:ct[1],done:!1};case 5:E.label++,U=ct[1],ct=[0];continue;case 7:ct=E.ops.pop(),E.trys.pop();continue;default:if(O=E.trys,!(O=O.length>0&&O[O.length-1])&&(ct[0]===6||ct[0]===2)){E=0;continue}if(ct[0]===3&&(!O||ct[1]>O[0]&&ct[1]<O[3])){E.label=ct[1];break}if(ct[0]===6&&E.label<O[1]){E.label=O[1],O=ct;break}if(O&&E.label<O[2]){E.label=O[2],E.ops.push(ct);break}O[2]&&E.ops.pop(),E.trys.pop();continue}ct=w.call(G,E)}catch(At){ct=[6,At],U=0}finally{A=O=0}if(ct[0]&5)throw ct[1];return{value:ct[0]?ct[1]:void 0,done:!0}}}var t=(function(){function G(w,E){this.next=null,this.key=w,this.data=E,this.left=null,this.right=null}return G})();function e(G,w){return G>w?1:G<w?-1:0}function i(G,w,E){for(var A=new t(null,null),U=A,O=A;;){var K=E(G,w.key);if(K<0){if(w.left===null)break;if(E(G,w.left.key)<0){var $=w.left;if(w.left=$.right,$.right=w,w=$,w.left===null)break}O.left=w,O=w,w=w.left}else if(K>0){if(w.right===null)break;if(E(G,w.right.key)>0){var $=w.right;if(w.right=$.left,$.left=w,w=$,w.right===null)break}U.right=w,U=w,w=w.right}else break}return U.right=w.left,O.left=w.right,w.left=A.right,w.right=A.left,w}function s(G,w,E,A){var U=new t(G,w);if(E===null)return U.left=U.right=null,U;E=i(G,E,A);var O=A(G,E.key);return O<0?(U.left=E.left,U.right=E,E.left=null):O>=0&&(U.right=E.right,U.left=E,E.right=null),U}function r(G,w,E){var A=null,U=null;if(w){w=i(G,w,E);var O=E(w.key,G);O===0?(A=w.left,U=w.right):O<0?(U=w.right,w.right=null,A=w):(A=w.left,w.left=null,U=w)}return{left:A,right:U}}function o(G,w,E){return w===null?G:(G===null||(w=i(G.key,w,E),w.left=G),w)}function a(G,w,E,A,U){if(G){A(""+w+(E?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+U(G)+`
`);var O=w+(E?"    ":"\u2502   ");G.left&&a(G.left,O,!1,A,U),G.right&&a(G.right,O,!0,A,U)}}var c=(function(){function G(w){w===void 0&&(w=e),this._root=null,this._size=0,this._comparator=w}return G.prototype.insert=function(w,E){return this._size++,this._root=s(w,E,this._root,this._comparator)},G.prototype.add=function(w,E){var A=new t(w,E);this._root===null&&(A.left=A.right=null,this._size++,this._root=A);var U=this._comparator,O=i(w,this._root,U),K=U(w,O.key);return K===0?this._root=O:(K<0?(A.left=O.left,A.right=O,O.left=null):K>0&&(A.right=O.right,A.left=O,O.right=null),this._size++,this._root=A),this._root},G.prototype.remove=function(w){this._root=this._remove(w,this._root,this._comparator)},G.prototype._remove=function(w,E,A){var U;if(E===null)return null;E=i(w,E,A);var O=A(w,E.key);return O===0?(E.left===null?U=E.right:(U=i(w,E.left,A),U.right=E.right),this._size--,U):E},G.prototype.pop=function(){var w=this._root;if(w){for(;w.left;)w=w.left;return this._root=i(w.key,this._root,this._comparator),this._root=this._remove(w.key,this._root,this._comparator),{key:w.key,data:w.data}}return null},G.prototype.findStatic=function(w){for(var E=this._root,A=this._comparator;E;){var U=A(w,E.key);if(U===0)return E;U<0?E=E.left:E=E.right}return null},G.prototype.find=function(w){return this._root&&(this._root=i(w,this._root,this._comparator),this._comparator(w,this._root.key)!==0)?null:this._root},G.prototype.contains=function(w){for(var E=this._root,A=this._comparator;E;){var U=A(w,E.key);if(U===0)return!0;U<0?E=E.left:E=E.right}return!1},G.prototype.forEach=function(w,E){for(var A=this._root,U=[],O=!1;!O;)A!==null?(U.push(A),A=A.left):U.length!==0?(A=U.pop(),w.call(E,A),A=A.right):O=!0;return this},G.prototype.range=function(w,E,A,U){for(var O=[],K=this._comparator,$=this._root,ut;O.length!==0||$;)if($)O.push($),$=$.left;else{if($=O.pop(),ut=K($.key,E),ut>0)break;if(K($.key,w)>=0&&A.call(U,$))return this;$=$.right}return this},G.prototype.keys=function(){var w=[];return this.forEach(function(E){var A=E.key;return w.push(A)}),w},G.prototype.values=function(){var w=[];return this.forEach(function(E){var A=E.data;return w.push(A)}),w},G.prototype.min=function(){return this._root?this.minNode(this._root).key:null},G.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},G.prototype.minNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.left;)w=w.left;return w},G.prototype.maxNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.right;)w=w.right;return w},G.prototype.at=function(w){for(var E=this._root,A=!1,U=0,O=[];!A;)if(E)O.push(E),E=E.left;else if(O.length>0){if(E=O.pop(),U===w)return E;U++,E=E.right}else A=!0;return null},G.prototype.next=function(w){var E=this._root,A=null;if(w.right){for(A=w.right;A.left;)A=A.left;return A}for(var U=this._comparator;E;){var O=U(w.key,E.key);if(O===0)break;O<0?(A=E,E=E.left):E=E.right}return A},G.prototype.prev=function(w){var E=this._root,A=null;if(w.left!==null){for(A=w.left;A.right;)A=A.right;return A}for(var U=this._comparator;E;){var O=U(w.key,E.key);if(O===0)break;O<0?E=E.left:(A=E,E=E.right)}return A},G.prototype.clear=function(){return this._root=null,this._size=0,this},G.prototype.toList=function(){return h(this._root)},G.prototype.load=function(w,E,A){E===void 0&&(E=[]),A===void 0&&(A=!1);var U=w.length,O=this._comparator;if(A&&g(w,E,0,U-1,O),this._root===null)this._root=l(w,E,0,U),this._size=U;else{var K=d(this.toList(),u(w,E),O);U=this._size+U,this._root=f({head:K},0,U)}return this},G.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(G.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(G.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),G.prototype.toString=function(w){w===void 0&&(w=function(A){return String(A.key)});var E=[];return a(this._root,"",!0,function(A){return E.push(A)},w),E.join("")},G.prototype.update=function(w,E,A){var U=this._comparator,O=r(w,this._root,U),K=O.left,$=O.right;U(w,E)<0?$=s(E,A,$,U):K=s(E,A,K,U),this._root=o(K,$,U)},G.prototype.split=function(w){return r(w,this._root,this._comparator)},G.prototype[Symbol.iterator]=function(){var w,E,A;return n(this,function(U){switch(U.label){case 0:w=this._root,E=[],A=!1,U.label=1;case 1:return A?[3,6]:w===null?[3,2]:(E.push(w),w=w.left,[3,5]);case 2:return E.length===0?[3,4]:(w=E.pop(),[4,w]);case 3:return U.sent(),w=w.right,[3,5];case 4:A=!0,U.label=5;case 5:return[3,1];case 6:return[2]}})},G})();function l(G,w,E,A){var U=A-E;if(U>0){var O=E+Math.floor(U/2),K=G[O],$=w[O],ut=new t(K,$);return ut.left=l(G,w,E,O),ut.right=l(G,w,O+1,A),ut}return null}function u(G,w){for(var E=new t(null,null),A=E,U=0;U<G.length;U++)A=A.next=new t(G[U],w[U]);return A.next=null,E.next}function h(G){for(var w=G,E=[],A=!1,U=new t(null,null),O=U;!A;)w?(E.push(w),w=w.left):E.length>0?(w=O=O.next=E.pop(),w=w.right):A=!0;return O.next=null,U.next}function f(G,w,E){var A=E-w;if(A>0){var U=w+Math.floor(A/2),O=f(G,w,U),K=G.head;return K.left=O,G.head=G.head.next,K.right=f(G,U+1,E),K}return null}function d(G,w,E){for(var A=new t(null,null),U=A,O=G,K=w;O!==null&&K!==null;)E(O.key,K.key)<0?(U.next=O,O=O.next):(U.next=K,K=K.next),U=U.next;return O!==null?U.next=O:K!==null&&(U.next=K),A.next}function g(G,w,E,A,U){if(!(E>=A)){for(var O=G[E+A>>1],K=E-1,$=A+1;;){do K++;while(U(G[K],O)<0);do $--;while(U(G[$],O)>0);if(K>=$)break;var ut=G[K];G[K]=G[$],G[$]=ut,ut=w[K],w[K]=w[$],w[$]=ut}g(G,w,E,$,U),g(G,w,$+1,A,U)}}let y=(G,w)=>G.ll.x<=w.x&&w.x<=G.ur.x&&G.ll.y<=w.y&&w.y<=G.ur.y,p=(G,w)=>{if(w.ur.x<G.ll.x||G.ur.x<w.ll.x||w.ur.y<G.ll.y||G.ur.y<w.ll.y)return null;let E=G.ll.x<w.ll.x?w.ll.x:G.ll.x,A=G.ur.x<w.ur.x?G.ur.x:w.ur.x,U=G.ll.y<w.ll.y?w.ll.y:G.ll.y,O=G.ur.y<w.ur.y?G.ur.y:w.ur.y;return{ll:{x:E,y:U},ur:{x:A,y:O}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let x=m*m,v=(G,w)=>{if(-m<G&&G<m&&-m<w&&w<m)return 0;let E=G-w;return E*E<x*G*w?0:G<w?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new _,this.yRounder=new _}round(w,E){return{x:this.xRounder.round(w),y:this.yRounder.round(E)}}}class _{constructor(){this.tree=new c,this.round(0)}round(w){let E=this.tree.add(w),A=this.tree.prev(E);if(A!==null&&v(E.key,A.key)===0)return this.tree.remove(w),A.key;let U=this.tree.next(E);return U!==null&&v(E.key,U.key)===0?(this.tree.remove(w),U.key):w}}let S=new b,R=11102230246251565e-32,M=134217729,C=(3+8*R)*R;function F(G,w,E,A,U){let O,K,$,ut,ct=w[0],At=A[0],P=0,Z=0;At>ct==At>-ct?(O=ct,ct=w[++P]):(O=At,At=A[++Z]);let tt=0;if(P<G&&Z<E)for(At>ct==At>-ct?(K=ct+O,$=O-(K-ct),ct=w[++P]):(K=At+O,$=O-(K-At),At=A[++Z]),O=K,$!==0&&(U[tt++]=$);P<G&&Z<E;)At>ct==At>-ct?(K=O+ct,ut=K-O,$=O-(K-ut)+(ct-ut),ct=w[++P]):(K=O+At,ut=K-O,$=O-(K-ut)+(At-ut),At=A[++Z]),O=K,$!==0&&(U[tt++]=$);for(;P<G;)K=O+ct,ut=K-O,$=O-(K-ut)+(ct-ut),ct=w[++P],O=K,$!==0&&(U[tt++]=$);for(;Z<E;)K=O+At,ut=K-O,$=O-(K-ut)+(At-ut),At=A[++Z],O=K,$!==0&&(U[tt++]=$);return(O!==0||tt===0)&&(U[tt++]=O),tt}function I(G,w){let E=w[0];for(let A=1;A<G;A++)E+=w[A];return E}function D(G){return new Float64Array(G)}let H=(3+16*R)*R,N=(2+12*R)*R,k=(9+64*R)*R*R,B=D(4),W=D(8),it=D(12),j=D(16),et=D(4);function at(G,w,E,A,U,O,K){let $,ut,ct,At,P,Z,tt,Mt,wt,bt,Ft,Ot,le,re,Se,Ee,un,Ke,It=G-U,kt=E-U,$t=w-O,vt=A-O;re=It*vt,Z=M*It,tt=Z-(Z-It),Mt=It-tt,Z=M*vt,wt=Z-(Z-vt),bt=vt-wt,Se=Mt*bt-(re-tt*wt-Mt*wt-tt*bt),Ee=$t*kt,Z=M*$t,tt=Z-(Z-$t),Mt=$t-tt,Z=M*kt,wt=Z-(Z-kt),bt=kt-wt,un=Mt*bt-(Ee-tt*wt-Mt*wt-tt*bt),Ft=Se-un,P=Se-Ft,B[0]=Se-(Ft+P)+(P-un),Ot=re+Ft,P=Ot-re,le=re-(Ot-P)+(Ft-P),Ft=le-Ee,P=le-Ft,B[1]=le-(Ft+P)+(P-Ee),Ke=Ot+Ft,P=Ke-Ot,B[2]=Ot-(Ke-P)+(Ft-P),B[3]=Ke;let Bt=I(4,B),Ht=N*K;if(Bt>=Ht||-Bt>=Ht||(P=G-It,$=G-(It+P)+(P-U),P=E-kt,ct=E-(kt+P)+(P-U),P=w-$t,ut=w-($t+P)+(P-O),P=A-vt,At=A-(vt+P)+(P-O),$===0&&ut===0&&ct===0&&At===0)||(Ht=k*K+C*Math.abs(Bt),Bt+=It*At+vt*$-($t*ct+kt*ut),Bt>=Ht||-Bt>=Ht))return Bt;re=$*vt,Z=M*$,tt=Z-(Z-$),Mt=$-tt,Z=M*vt,wt=Z-(Z-vt),bt=vt-wt,Se=Mt*bt-(re-tt*wt-Mt*wt-tt*bt),Ee=ut*kt,Z=M*ut,tt=Z-(Z-ut),Mt=ut-tt,Z=M*kt,wt=Z-(Z-kt),bt=kt-wt,un=Mt*bt-(Ee-tt*wt-Mt*wt-tt*bt),Ft=Se-un,P=Se-Ft,et[0]=Se-(Ft+P)+(P-un),Ot=re+Ft,P=Ot-re,le=re-(Ot-P)+(Ft-P),Ft=le-Ee,P=le-Ft,et[1]=le-(Ft+P)+(P-Ee),Ke=Ot+Ft,P=Ke-Ot,et[2]=Ot-(Ke-P)+(Ft-P),et[3]=Ke;let Qt=F(4,B,4,et,W);re=It*At,Z=M*It,tt=Z-(Z-It),Mt=It-tt,Z=M*At,wt=Z-(Z-At),bt=At-wt,Se=Mt*bt-(re-tt*wt-Mt*wt-tt*bt),Ee=$t*ct,Z=M*$t,tt=Z-(Z-$t),Mt=$t-tt,Z=M*ct,wt=Z-(Z-ct),bt=ct-wt,un=Mt*bt-(Ee-tt*wt-Mt*wt-tt*bt),Ft=Se-un,P=Se-Ft,et[0]=Se-(Ft+P)+(P-un),Ot=re+Ft,P=Ot-re,le=re-(Ot-P)+(Ft-P),Ft=le-Ee,P=le-Ft,et[1]=le-(Ft+P)+(P-Ee),Ke=Ot+Ft,P=Ke-Ot,et[2]=Ot-(Ke-P)+(Ft-P),et[3]=Ke;let be=F(Qt,W,4,et,it);re=$*At,Z=M*$,tt=Z-(Z-$),Mt=$-tt,Z=M*At,wt=Z-(Z-At),bt=At-wt,Se=Mt*bt-(re-tt*wt-Mt*wt-tt*bt),Ee=ut*ct,Z=M*ut,tt=Z-(Z-ut),Mt=ut-tt,Z=M*ct,wt=Z-(Z-ct),bt=ct-wt,un=Mt*bt-(Ee-tt*wt-Mt*wt-tt*bt),Ft=Se-un,P=Se-Ft,et[0]=Se-(Ft+P)+(P-un),Ot=re+Ft,P=Ot-re,le=re-(Ot-P)+(Ft-P),Ft=le-Ee,P=le-Ft,et[1]=le-(Ft+P)+(P-Ee),Ke=Ot+Ft,P=Ke-Ot,et[2]=Ot-(Ke-P)+(Ft-P),et[3]=Ke;let hn=F(be,it,4,et,j);return j[hn-1]}function Et(G,w,E,A,U,O){let K=(w-O)*(E-U),$=(G-U)*(A-O),ut=K-$,ct=Math.abs(K+$);return Math.abs(ut)>=H*ct?ut:-at(G,w,E,A,U,O,ct)}let _t=(G,w)=>G.x*w.y-G.y*w.x,St=(G,w)=>G.x*w.x+G.y*w.y,Pt=(G,w,E)=>{let A=Et(G.x,G.y,w.x,w.y,E.x,E.y);return A>0?-1:A<0?1:0},Lt=G=>Math.sqrt(St(G,G)),J=(G,w,E)=>{let A={x:w.x-G.x,y:w.y-G.y},U={x:E.x-G.x,y:E.y-G.y};return _t(U,A)/Lt(U)/Lt(A)},ft=(G,w,E)=>{let A={x:w.x-G.x,y:w.y-G.y},U={x:E.x-G.x,y:E.y-G.y};return St(U,A)/Lt(U)/Lt(A)},Ct=(G,w,E)=>w.y===0?null:{x:G.x+w.x/w.y*(E-G.y),y:E},Xt=(G,w,E)=>w.x===0?null:{x:E,y:G.y+w.y/w.x*(E-G.x)},Dt=(G,w,E,A)=>{if(w.x===0)return Xt(E,A,G.x);if(A.x===0)return Xt(G,w,E.x);if(w.y===0)return Ct(E,A,G.y);if(A.y===0)return Ct(G,w,E.y);let U=_t(w,A);if(U==0)return null;let O={x:E.x-G.x,y:E.y-G.y},K=_t(O,w)/U,$=_t(O,A)/U,ut=G.x+$*w.x,ct=E.x+K*A.x,At=G.y+$*w.y,P=E.y+K*A.y,Z=(ut+ct)/2,tt=(At+P)/2;return{x:Z,y:tt}};class X{static compare(w,E){let A=X.comparePoints(w.point,E.point);return A!==0?A:(w.point!==E.point&&w.link(E),w.isLeft!==E.isLeft?w.isLeft?1:-1:q.compare(w.segment,E.segment))}static comparePoints(w,E){return w.x<E.x?-1:w.x>E.x?1:w.y<E.y?-1:w.y>E.y?1:0}constructor(w,E){w.events===void 0?w.events=[this]:w.events.push(this),this.point=w,this.isLeft=E}link(w){if(w.point===this.point)throw new Error("Tried to link already linked events");let E=w.point.events;for(let A=0,U=E.length;A<U;A++){let O=E[A];this.point.events.push(O),O.point=this.point}this.checkForConsuming()}checkForConsuming(){let w=this.point.events.length;for(let E=0;E<w;E++){let A=this.point.events[E];if(A.segment.consumedBy===void 0)for(let U=E+1;U<w;U++){let O=this.point.events[U];O.consumedBy===void 0&&A.otherSE.point.events===O.otherSE.point.events&&A.segment.consume(O.segment)}}}getAvailableLinkedEvents(){let w=[];for(let E=0,A=this.point.events.length;E<A;E++){let U=this.point.events[E];U!==this&&!U.segment.ringOut&&U.segment.isInResult()&&w.push(U)}return w}getLeftmostComparator(w){let E=new Map,A=U=>{let O=U.otherSE;E.set(U,{sine:J(this.point,w.point,O.point),cosine:ft(this.point,w.point,O.point)})};return(U,O)=>{E.has(U)||A(U),E.has(O)||A(O);let{sine:K,cosine:$}=E.get(U),{sine:ut,cosine:ct}=E.get(O);return K>=0&&ut>=0?$<ct?1:$>ct?-1:0:K<0&&ut<0?$<ct?-1:$>ct?1:0:ut<K?-1:ut>K?1:0}}}let lt=0;class q{static compare(w,E){let A=w.leftSE.point.x,U=E.leftSE.point.x,O=w.rightSE.point.x,K=E.rightSE.point.x;if(K<A)return 1;if(O<U)return-1;let $=w.leftSE.point.y,ut=E.leftSE.point.y,ct=w.rightSE.point.y,At=E.rightSE.point.y;if(A<U){if(ut<$&&ut<ct)return 1;if(ut>$&&ut>ct)return-1;let P=w.comparePoint(E.leftSE.point);if(P<0)return 1;if(P>0)return-1;let Z=E.comparePoint(w.rightSE.point);return Z!==0?Z:-1}if(A>U){if($<ut&&$<At)return-1;if($>ut&&$>At)return 1;let P=E.comparePoint(w.leftSE.point);if(P!==0)return P;let Z=w.comparePoint(E.rightSE.point);return Z<0?1:Z>0?-1:1}if($<ut)return-1;if($>ut)return 1;if(O<K){let P=E.comparePoint(w.rightSE.point);if(P!==0)return P}if(O>K){let P=w.comparePoint(E.rightSE.point);if(P<0)return 1;if(P>0)return-1}if(O!==K){let P=ct-$,Z=O-A,tt=At-ut,Mt=K-U;if(P>Z&&tt<Mt)return 1;if(P<Z&&tt>Mt)return-1}return O>K?1:O<K||ct<At?-1:ct>At?1:w.id<E.id?-1:w.id>E.id?1:0}constructor(w,E,A,U){this.id=++lt,this.leftSE=w,w.segment=this,w.otherSE=E,this.rightSE=E,E.segment=this,E.otherSE=w,this.rings=A,this.windings=U}static fromRing(w,E,A){let U,O,K,$=X.comparePoints(w,E);if($<0)U=w,O=E,K=1;else if($>0)U=E,O=w,K=-1;else throw new Error(`Tried to create degenerate segment at [${w.x}, ${w.y}]`);let ut=new X(U,!0),ct=new X(O,!1);return new q(ut,ct,[A],[K])}replaceRightSE(w){this.rightSE=w,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let w=this.leftSE.point.y,E=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:w<E?w:E},ur:{x:this.rightSE.point.x,y:w>E?w:E}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(w){return w.x===this.leftSE.point.x&&w.y===this.leftSE.point.y||w.x===this.rightSE.point.x&&w.y===this.rightSE.point.y}comparePoint(w){if(this.isAnEndpoint(w))return 0;let E=this.leftSE.point,A=this.rightSE.point,U=this.vector();if(E.x===A.x)return w.x===E.x?0:w.x<E.x?1:-1;let O=(w.y-E.y)/U.y,K=E.x+O*U.x;if(w.x===K)return 0;let $=(w.x-E.x)/U.x,ut=E.y+$*U.y;return w.y===ut?0:w.y<ut?-1:1}getIntersection(w){let E=this.bbox(),A=w.bbox(),U=p(E,A);if(U===null)return null;let O=this.leftSE.point,K=this.rightSE.point,$=w.leftSE.point,ut=w.rightSE.point,ct=y(E,$)&&this.comparePoint($)===0,At=y(A,O)&&w.comparePoint(O)===0,P=y(E,ut)&&this.comparePoint(ut)===0,Z=y(A,K)&&w.comparePoint(K)===0;if(At&&ct)return Z&&!P?K:!Z&&P?ut:null;if(At)return P&&O.x===ut.x&&O.y===ut.y?null:O;if(ct)return Z&&K.x===$.x&&K.y===$.y?null:$;if(Z&&P)return null;if(Z)return K;if(P)return ut;let tt=Dt(O,this.vector(),$,w.vector());return tt===null||!y(U,tt)?null:S.round(tt.x,tt.y)}split(w){let E=[],A=w.events!==void 0,U=new X(w,!0),O=new X(w,!1),K=this.rightSE;this.replaceRightSE(O),E.push(O),E.push(U);let $=new q(U,K,this.rings.slice(),this.windings.slice());return X.comparePoints($.leftSE.point,$.rightSE.point)>0&&$.swapEvents(),X.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),A&&(U.checkForConsuming(),O.checkForConsuming()),E}swapEvents(){let w=this.rightSE;this.rightSE=this.leftSE,this.leftSE=w,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let E=0,A=this.windings.length;E<A;E++)this.windings[E]*=-1}consume(w){let E=this,A=w;for(;E.consumedBy;)E=E.consumedBy;for(;A.consumedBy;)A=A.consumedBy;let U=q.compare(E,A);if(U!==0){if(U>0){let O=E;E=A,A=O}if(E.prev===A){let O=E;E=A,A=O}for(let O=0,K=A.rings.length;O<K;O++){let $=A.rings[O],ut=A.windings[O],ct=E.rings.indexOf($);ct===-1?(E.rings.push($),E.windings.push(ut)):E.windings[ct]+=ut}A.rings=null,A.windings=null,A.consumedBy=E,A.leftSE.consumedBy=E.leftSE,A.rightSE.consumedBy=E.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let w=this.prev.consumedBy||this.prev;this._beforeState=w.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let w=this.beforeState();this._afterState={rings:w.rings.slice(0),windings:w.windings.slice(0),multiPolys:[]};let E=this._afterState.rings,A=this._afterState.windings,U=this._afterState.multiPolys;for(let $=0,ut=this.rings.length;$<ut;$++){let ct=this.rings[$],At=this.windings[$],P=E.indexOf(ct);P===-1?(E.push(ct),A.push(At)):A[P]+=At}let O=[],K=[];for(let $=0,ut=E.length;$<ut;$++){if(A[$]===0)continue;let ct=E[$],At=ct.poly;if(K.indexOf(At)===-1)if(ct.isExterior)O.push(At);else{K.indexOf(At)===-1&&K.push(At);let P=O.indexOf(ct.poly);P!==-1&&O.splice(P,1)}}for(let $=0,ut=O.length;$<ut;$++){let ct=O[$].multiPoly;U.indexOf(ct)===-1&&U.push(ct)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let w=this.beforeState().multiPolys,E=this.afterState().multiPolys;switch(Gt.type){case"union":{let A=w.length===0,U=E.length===0;this._isInResult=A!==U;break}case"intersection":{let A,U;w.length<E.length?(A=w.length,U=E.length):(A=E.length,U=w.length),this._isInResult=U===Gt.numMultiPolys&&A<U;break}case"xor":{let A=Math.abs(w.length-E.length);this._isInResult=A%2===1;break}case"difference":{let A=U=>U.length===1&&U[0].isSubject;this._isInResult=A(w)!==A(E);break}default:throw new Error(`Unrecognized operation type found ${Gt.type}`)}return this._isInResult}}class Q{constructor(w,E,A){if(!Array.isArray(w)||w.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=E,this.isExterior=A,this.segments=[],typeof w[0][0]!="number"||typeof w[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let U=S.round(w[0][0],w[0][1]);this.bbox={ll:{x:U.x,y:U.y},ur:{x:U.x,y:U.y}};let O=U;for(let K=1,$=w.length;K<$;K++){if(typeof w[K][0]!="number"||typeof w[K][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let ut=S.round(w[K][0],w[K][1]);ut.x===O.x&&ut.y===O.y||(this.segments.push(q.fromRing(O,ut,this)),ut.x<this.bbox.ll.x&&(this.bbox.ll.x=ut.x),ut.y<this.bbox.ll.y&&(this.bbox.ll.y=ut.y),ut.x>this.bbox.ur.x&&(this.bbox.ur.x=ut.x),ut.y>this.bbox.ur.y&&(this.bbox.ur.y=ut.y),O=ut)}(U.x!==O.x||U.y!==O.y)&&this.segments.push(q.fromRing(O,U,this))}getSweepEvents(){let w=[];for(let E=0,A=this.segments.length;E<A;E++){let U=this.segments[E];w.push(U.leftSE),w.push(U.rightSE)}return w}}class rt{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Q(w[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let A=1,U=w.length;A<U;A++){let O=new Q(w[A],this,!1);O.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=O.bbox.ll.x),O.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=O.bbox.ll.y),O.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=O.bbox.ur.x),O.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=O.bbox.ur.y),this.interiorRings.push(O)}this.multiPoly=E}getSweepEvents(){let w=this.exteriorRing.getSweepEvents();for(let E=0,A=this.interiorRings.length;E<A;E++){let U=this.interiorRings[E].getSweepEvents();for(let O=0,K=U.length;O<K;O++)w.push(U[O])}return w}}class ht{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof w[0][0][0]=="number"&&(w=[w])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let A=0,U=w.length;A<U;A++){let O=new rt(w[A],this);O.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=O.bbox.ll.x),O.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=O.bbox.ll.y),O.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=O.bbox.ur.x),O.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=O.bbox.ur.y),this.polys.push(O)}this.isSubject=E}getSweepEvents(){let w=[];for(let E=0,A=this.polys.length;E<A;E++){let U=this.polys[E].getSweepEvents();for(let O=0,K=U.length;O<K;O++)w.push(U[O])}return w}}class mt{static factory(w){let E=[];for(let A=0,U=w.length;A<U;A++){let O=w[A];if(!O.isInResult()||O.ringOut)continue;let K=null,$=O.leftSE,ut=O.rightSE,ct=[$],At=$.point,P=[];for(;K=$,$=ut,ct.push($),$.point!==At;)for(;;){let Z=$.getAvailableLinkedEvents();if(Z.length===0){let wt=ct[0].point,bt=ct[ct.length-1].point;throw new Error(`Unable to complete output ring starting at [${wt.x}, ${wt.y}]. Last matching segment found ends at [${bt.x}, ${bt.y}].`)}if(Z.length===1){ut=Z[0].otherSE;break}let tt=null;for(let wt=0,bt=P.length;wt<bt;wt++)if(P[wt].point===$.point){tt=wt;break}if(tt!==null){let wt=P.splice(tt)[0],bt=ct.splice(wt.index);bt.unshift(bt[0].otherSE),E.push(new mt(bt.reverse()));continue}P.push({index:ct.length,point:$.point});let Mt=$.getLeftmostComparator(K);ut=Z.sort(Mt)[0].otherSE;break}E.push(new mt(ct))}return E}constructor(w){this.events=w;for(let E=0,A=w.length;E<A;E++)w[E].segment.ringOut=this;this.poly=null}getGeom(){let w=this.events[0].point,E=[w];for(let ct=1,At=this.events.length-1;ct<At;ct++){let P=this.events[ct].point,Z=this.events[ct+1].point;Pt(P,w,Z)!==0&&(E.push(P),w=P)}if(E.length===1)return null;let A=E[0],U=E[1];Pt(A,w,U)===0&&E.shift(),E.push(E[0]);let O=this.isExteriorRing()?1:-1,K=this.isExteriorRing()?0:E.length-1,$=this.isExteriorRing()?E.length:-1,ut=[];for(let ct=K;ct!=$;ct+=O)ut.push([E[ct].x,E[ct].y]);return ut}isExteriorRing(){if(this._isExteriorRing===void 0){let w=this.enclosingRing();this._isExteriorRing=w?!w.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let w=this.events[0];for(let U=1,O=this.events.length;U<O;U++){let K=this.events[U];X.compare(w,K)>0&&(w=K)}let E=w.segment.prevInResult(),A=E?E.prevInResult():null;for(;;){if(!E)return null;if(!A)return E.ringOut;if(A.ringOut!==E.ringOut)return A.ringOut.enclosingRing()!==E.ringOut?E.ringOut:E.ringOut.enclosingRing();E=A.prevInResult(),A=E?E.prevInResult():null}}}class Tt{constructor(w){this.exteriorRing=w,w.poly=this,this.interiorRings=[]}addInterior(w){this.interiorRings.push(w),w.poly=this}getGeom(){let w=[this.exteriorRing.getGeom()];if(w[0]===null)return null;for(let E=0,A=this.interiorRings.length;E<A;E++){let U=this.interiorRings[E].getGeom();U!==null&&w.push(U)}return w}}class Rt{constructor(w){this.rings=w,this.polys=this._composePolys(w)}getGeom(){let w=[];for(let E=0,A=this.polys.length;E<A;E++){let U=this.polys[E].getGeom();U!==null&&w.push(U)}return w}_composePolys(w){let E=[];for(let A=0,U=w.length;A<U;A++){let O=w[A];if(!O.poly)if(O.isExteriorRing())E.push(new Tt(O));else{let K=O.enclosingRing();K.poly||E.push(new Tt(K)),K.poly.addInterior(O)}}return E}}class Ut{constructor(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:q.compare;this.queue=w,this.tree=new c(E),this.segments=[]}process(w){let E=w.segment,A=[];if(w.consumedBy)return w.isLeft?this.queue.remove(w.otherSE):this.tree.remove(E),A;let U=w.isLeft?this.tree.add(E):this.tree.find(E);if(!U)throw new Error(`Unable to find segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] in SweepLine tree.`);let O=U,K=U,$,ut;for(;$===void 0;)O=this.tree.prev(O),O===null?$=null:O.key.consumedBy===void 0&&($=O.key);for(;ut===void 0;)K=this.tree.next(K),K===null?ut=null:K.key.consumedBy===void 0&&(ut=K.key);if(w.isLeft){let ct=null;if($){let P=$.getIntersection(E);if(P!==null&&(E.isAnEndpoint(P)||(ct=P),!$.isAnEndpoint(P))){let Z=this._splitSafely($,P);for(let tt=0,Mt=Z.length;tt<Mt;tt++)A.push(Z[tt])}}let At=null;if(ut){let P=ut.getIntersection(E);if(P!==null&&(E.isAnEndpoint(P)||(At=P),!ut.isAnEndpoint(P))){let Z=this._splitSafely(ut,P);for(let tt=0,Mt=Z.length;tt<Mt;tt++)A.push(Z[tt])}}if(ct!==null||At!==null){let P=null;ct===null?P=At:At===null?P=ct:P=X.comparePoints(ct,At)<=0?ct:At,this.queue.remove(E.rightSE),A.push(E.rightSE);let Z=E.split(P);for(let tt=0,Mt=Z.length;tt<Mt;tt++)A.push(Z[tt])}A.length>0?(this.tree.remove(E),A.push(w)):(this.segments.push(E),E.prev=$)}else{if($&&ut){let ct=$.getIntersection(ut);if(ct!==null){if(!$.isAnEndpoint(ct)){let At=this._splitSafely($,ct);for(let P=0,Z=At.length;P<Z;P++)A.push(At[P])}if(!ut.isAnEndpoint(ct)){let At=this._splitSafely(ut,ct);for(let P=0,Z=At.length;P<Z;P++)A.push(At[P])}}}this.tree.remove(E)}return A}_splitSafely(w,E){this.tree.remove(w);let A=w.rightSE;this.queue.remove(A);let U=w.split(E);return U.push(A),w.consumedBy===void 0&&this.tree.add(w),U}}let zt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,Y=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class ae{run(w,E,A){Gt.type=w,S.reset();let U=[new ht(E,!0)];for(let P=0,Z=A.length;P<Z;P++)U.push(new ht(A[P],!1));if(Gt.numMultiPolys=U.length,Gt.type==="difference"){let P=U[0],Z=1;for(;Z<U.length;)p(U[Z].bbox,P.bbox)!==null?Z++:U.splice(Z,1)}if(Gt.type==="intersection")for(let P=0,Z=U.length;P<Z;P++){let tt=U[P];for(let Mt=P+1,wt=U.length;Mt<wt;Mt++)if(p(tt.bbox,U[Mt].bbox)===null)return[]}let O=new c(X.compare);for(let P=0,Z=U.length;P<Z;P++){let tt=U[P].getSweepEvents();for(let Mt=0,wt=tt.length;Mt<wt;Mt++)if(O.insert(tt[Mt]),O.size>zt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let K=new Ut(O),$=O.size,ut=O.pop();for(;ut;){let P=ut.key;if(O.size===$){let tt=P.segment;throw new Error(`Unable to pop() ${P.isLeft?"left":"right"} SweepEvent [${P.point.x}, ${P.point.y}] from segment #${tt.id} [${tt.leftSE.point.x}, ${tt.leftSE.point.y}] -> [${tt.rightSE.point.x}, ${tt.rightSE.point.y}] from queue.`)}if(O.size>zt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(K.segments.length>Y)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let Z=K.process(P);for(let tt=0,Mt=Z.length;tt<Mt;tt++){let wt=Z[tt];wt.consumedBy===void 0&&O.insert(wt)}$=O.size,ut=O.pop()}S.reset();let ct=mt.factory(K.segments);return new Rt(ct).getGeom()}}let Gt=new ae;var yt={union:function(G){for(var w=arguments.length,E=new Array(w>1?w-1:0),A=1;A<w;A++)E[A-1]=arguments[A];return Gt.run("union",G,E)},intersection:function(G){for(var w=arguments.length,E=new Array(w>1?w-1:0),A=1;A<w;A++)E[A-1]=arguments[A];return Gt.run("intersection",G,E)},xor:function(G){for(var w=arguments.length,E=new Array(w>1?w-1:0),A=1;A<w;A++)E[A-1]=arguments[A];return Gt.run("xor",G,E)},difference:function(G){for(var w=arguments.length,E=new Array(w>1?w-1:0),A=1;A<w;A++)E[A-1]=arguments[A];return Gt.run("difference",G,E)}};return yt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Cd=0,rh=1,Id=2;var Vs=1,Pd=2,Or=3,vs=0,kn=1,tn=2,Li=0,kr=1,Yi=2,oh=3,ah=4,Ld=5;var Ws=100,Nd=101,Dd=102,Fd=103,Ud=104,Od=200,kd=201,Bd=202,zd=203,ch=204,lh=205,Hd=206,Gd=207,Vd=208,Wd=209,Xd=210,qd=211,Yd=212,$d=213,Zd=214,ac=0,cc=1,lc=2,vr=3,uc=4,hc=5,fc=6,dc=7,Vc=0,jd=1,Kd=2,gi=0,uh=1,hh=2,fh=3,Qo=4,dh=5,ph=6,mh=7;var gh=300,_s=301,Xs=302,Wc=303,Xc=304,ta=306,Us=1e3,Ai=1001,pc=1002,pn=1003,Jd=1004;var ea=1005;var xn=1006,qc=1007;var Ms=1008;var Xn=1009,yh=1010,xh=1011,Br=1012,Yc=1013,yi=1014,si=1015,xi=1016,$c=1017,Zc=1018,zr=1020,bh=35902,vh=35899,_h=1021,Mh=1022,ri=1023,Ci=1026,Ss=1027,jc=1028,Kc=1029,ws=1030,Jc=1031;var Qc=1033,na=33776,ia=33777,sa=33778,ra=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37488,cl=37489,oa=37490,ll=37491,ul=37808,hl=37809,fl=37810,dl=37811,pl=37812,ml=37813,gl=37814,yl=37815,xl=37816,bl=37817,vl=37818,_l=37819,Ml=37820,Sl=37821,wl=36492,El=36494,Tl=36495,Al=36283,Rl=36284,aa=36285,Cl=36286;var xo=2300,mc=2301,rc=2302,qu=2303,Yu=2400,$u=2401,Zu=2402;var Qd=3200;var ca=0,tp=1,$i="",rn="srgb",bo="srgb-linear",vo="linear",Pe="srgb";var oc=7680;var ep=519,np=512,ip=513,sp=514,Il=515,rp=516,op=517,Pl=518,ap=519,Sh=35044,Bn=35048;var wh="300 es",di=2e3,_r=2001;function iy(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cp(){let n=_o("canvas");return n.style.display="block",n}var Vf={},Mr=null;function Mo(...n){let t="THREE."+n.shift();Mr?Mr("log",t,...n):console.log(t,...n)}function lp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ce(...n){n=lp(n);let t="THREE."+n.shift();if(Mr)Mr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=lp(n);let t="THREE."+n.shift();if(Mr)Mr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fs(...n){let t=n.join(" ");t in Vf||(Vf[t]=!0,ce(...n))}function up(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var hp={[ac]:cc,[lc]:fc,[uc]:dc,[vr]:hc,[cc]:ac,[fc]:lc,[dc]:uc,[hc]:vr},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=1234567,po=Math.PI/180,Sr=180/Math.PI;function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function Eh(n,t){return(n%t+t)%t}function ry(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function oy(n,t,e){return n!==t?(e-n)/(t-n):0}function mo(n,t,e){return(1-e)*n+e*t}function ay(n,t,e,i){return mo(n,t,1-Math.exp(-e*i))}function cy(n,t=1){return t-Math.abs(Eh(n,t*2)-t)}function ly(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function uy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function fy(n,t){return n+Math.random()*(t-n)}function dy(n){return n*(.5-Math.random())}function py(n){n!==void 0&&(Wf=n);let t=Wf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function my(n){return n*po}function gy(n){return n*Sr}function yy(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function xy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function by(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vy(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*h,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*u,a*l);break;default:ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oe={DEG2RAD:po,RAD2DEG:Sr,generateUUID:Ri,clamp:de,euclideanModulo:Eh,mapLinear:ry,inverseLerp:oy,lerp:mo,damp:ay,pingpong:cy,smoothstep:ly,smootherstep:uy,randInt:hy,randFloat:fy,randFloatSpread:dy,seededRandom:py,degToRad:my,radToDeg:gy,isPowerOfTwo:yy,ceilPowerOfTwo:xy,floorPowerOfTwo:by,setQuaternionFromProperEuler:vy,normalize:Ne,denormalize:fi},Nt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(h!==y||c!==f||l!==d||u!==g){let p=c*f+l*d+u*g+h*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let x=Math.acos(p),v=Math.sin(x);m=Math.sin(m*x)/v,a=Math.sin(a*x)/v,c=c*m+f*a,l=l*m+d*a,u=u*m+g*a,h=h*m+y*a}else{c=c*m+f*a,l=l*m+d*a,u=u*m+g*a,h=h*m+y*a;let x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vu.copy(this).projectOnVector(t),this.sub(vu)}reflect(t){return this.sub(vu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vu=new V,Xf=new mn,pe=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],x=s[1],v=s[4],b=s[7],_=s[2],S=s[5],R=s[8];return r[0]=o*y+a*x+c*_,r[3]=o*p+a*v+c*S,r[6]=o*m+a*b+c*R,r[1]=l*y+u*x+h*_,r[4]=l*p+u*v+h*S,r[7]=l*m+u*b+h*R,r[2]=f*y+d*x+g*_,r[5]=f*p+d*v+g*S,r[8]=f*m+d*b+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(s*l-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_u.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_u.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_u.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_u=new pe,qf=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _y(){let n={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pe&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pe&&(s.r=br(s.r),s.g=br(s.g),s.b=br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bo]:{primaries:t,whitePoint:i,transfer:vo,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:Pe,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}var _e=_y();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ir,gc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ir===void 0&&(ir=_o("canvas")),ir.width=t.width,ir.height=t.height;let s=ir.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ir}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qi(e[i]/255)*255):e[i]=qi(e[i]);return{data:e,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},My=0,wr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mu(s[o].image)):r.push(Mu(s[o]))}else r=Mu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Mu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}var Sy=0,Su=new V,On=class n extends Ii{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ai,s=Ai,r=xn,o=Ms,a=ri,c=Xn,l=n.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Ri(),this.name="",this.source=new wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ce(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=gh;On.DEFAULT_ANISOTROPY=1;var Le=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,b=(d+1)/2,_=(m+1)/2,S=(u+f)/4,R=(h+y)/4,M=(g+p)/4;return v>b&&v>_?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=S/i,r=R/i):b>_?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=S/s,r=M/s):_<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),i=R/r,s=M/r),this.set(i,s,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-y)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends Ii{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new On(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new wr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends yc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},So=class extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xc=class extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Me=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,c,l,u,h,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,d,g,y,p)}set(t,e,i,s,r,o,a,c,l,u,h,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/sr.setFromMatrixColumn(t,0).length(),r=1/sr.setFromMatrixColumn(t,1).length(),o=1/sr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,y=l*h;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,y=l*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*h,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wy,t,Ey)}lookAt(t,e,i){let s=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ss.crossVectors(i,Yn),ss.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ss.crossVectors(i,Yn)),ss.normalize(),La.crossVectors(Yn,ss),s[0]=ss.x,s[4]=La.x,s[8]=Yn.x,s[1]=ss.y,s[5]=La.y,s[9]=Yn.y,s[2]=ss.z,s[6]=La.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],x=i[3],v=i[7],b=i[11],_=i[15],S=s[0],R=s[4],M=s[8],C=s[12],F=s[1],I=s[5],D=s[9],H=s[13],N=s[2],k=s[6],B=s[10],W=s[14],it=s[3],j=s[7],et=s[11],at=s[15];return r[0]=o*S+a*F+c*N+l*it,r[4]=o*R+a*I+c*k+l*j,r[8]=o*M+a*D+c*B+l*et,r[12]=o*C+a*H+c*W+l*at,r[1]=u*S+h*F+f*N+d*it,r[5]=u*R+h*I+f*k+d*j,r[9]=u*M+h*D+f*B+d*et,r[13]=u*C+h*H+f*W+d*at,r[2]=g*S+y*F+p*N+m*it,r[6]=g*R+y*I+p*k+m*j,r[10]=g*M+y*D+p*B+m*et,r[14]=g*C+y*H+p*W+m*at,r[3]=x*S+v*F+b*N+_*it,r[7]=x*R+v*I+b*k+_*j,r[11]=x*M+v*D+b*B+_*et,r[15]=x*C+v*H+b*W+_*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],x=c*d-l*f,v=a*d-l*h,b=a*f-c*h,_=o*d-l*u,S=o*f-c*u,R=o*h-a*u;return e*(y*x-p*v+m*b)-i*(g*x-p*_+m*S)+s*(g*v-y*_+m*R)-r*(g*b-y*S+p*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],x=e*a-i*o,v=e*c-s*o,b=e*l-r*o,_=i*c-s*a,S=i*l-r*a,R=s*l-r*c,M=u*y-h*g,C=u*p-f*g,F=u*m-d*g,I=h*p-f*y,D=h*m-d*y,H=f*m-d*p,N=x*H-v*D+b*I+_*F-S*C+R*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(a*H-c*D+l*I)*k,t[1]=(s*D-i*H-r*I)*k,t[2]=(y*R-p*S+m*_)*k,t[3]=(f*S-h*R-d*_)*k,t[4]=(c*F-o*H-l*C)*k,t[5]=(e*H-s*F+r*C)*k,t[6]=(p*b-g*R-m*v)*k,t[7]=(u*R-f*b+d*v)*k,t[8]=(o*D-a*F+l*M)*k,t[9]=(i*F-e*D-r*M)*k,t[10]=(g*S-y*b+m*x)*k,t[11]=(h*b-u*S-d*x)*k,t[12]=(a*C-o*I-c*M)*k,t[13]=(e*I-i*C+s*M)*k,t[14]=(y*v-g*_-p*x)*k,t[15]=(u*_-h*v+f*x)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,y=o*u,p=o*h,m=a*h,x=c*l,v=c*u,b=c*h,_=i.x,S=i.y,R=i.z;return s[0]=(1-(y+m))*_,s[1]=(d+b)*_,s[2]=(g-v)*_,s[3]=0,s[4]=(d-b)*S,s[5]=(1-(f+m))*S,s[6]=(p+x)*S,s[7]=0,s[8]=(g+v)*R,s[9]=(p-x)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=sr.set(s[0],s[1],s[2]).length(),a=sr.set(s[4],s[5],s[6]).length(),c=sr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);let l=1/o,u=1/a,h=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,e.setFromRotationMatrix(li),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=di,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===di)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===_r)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=di,c=!1){let l=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===di)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===_r)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},sr=new V,li=new Me,wy=new V(0,0,0),Ey=new V(1,1,1),ss=new V,La=new V,Yn=new V,$f=new Me,Zf=new mn,Pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $f.makeRotationFromQuaternion(t),this.setFromRotationMatrix($f,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ty=0,jf=new V,rr=new mn,Hi=new Me,Na=new V,ro=new V,Ay=new V,Ry=new mn,Kf=new V(1,0,0),Jf=new V(0,1,0),Qf=new V(0,0,1),td={type:"added"},Cy={type:"removed"},or={type:"childadded",child:null},wu={type:"childremoved",child:null},Xe=class n extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new Pi,i=new mn,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new pe}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.multiply(rr),this}rotateOnWorldAxis(t,e){return rr.setFromAxisAngle(t,e),this.quaternion.premultiply(rr),this}rotateX(t){return this.rotateOnAxis(Kf,t)}rotateY(t){return this.rotateOnAxis(Jf,t)}rotateZ(t){return this.rotateOnAxis(Qf,t)}translateOnAxis(t,e){return jf.copy(t).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kf,t)}translateY(t){return this.translateOnAxis(Jf,t)}translateZ(t){return this.translateOnAxis(Qf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Na.copy(t):Na.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ro,Na,this.up):Hi.lookAt(Na,ro,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Hi),this.quaternion.premultiply(rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(td),or.child=t,this.dispatchEvent(or),or.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cy),wu.child=t,this.dispatchEvent(wu),wu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(td),or.child=t,this.dispatchEvent(or),or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,Ay),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Ry,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new V(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Iy={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Eu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=_e.workingColorSpace){if(t=Eh(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Eu(o,r,t+1/3),this.g=Eu(o,r,t),this.b=Eu(o,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ce("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let i=fp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return _e.workingToColorSpace(An.copy(this),t),Math.round(de(An.r*255,0,255))*65536+Math.round(de(An.g*255,0,255))*256+Math.round(de(An.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(An.copy(this),e);let i=An.r,s=An.g,r=An.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=rn){_e.workingToColorSpace(An.copy(this),t);let e=An.r,i=An.g,s=An.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(Da);let i=mo(rs.h,Da.h,e),s=mo(rs.s,Da.s,e),r=mo(rs.l,Da.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new Yt;Yt.NAMES=fp;var wo=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},us=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new V,Gi=new V,Tu=new V,Vi=new V,ar=new V,cr=new V,ed=new V,Au=new V,Ru=new V,Cu=new V,Iu=new Le,Pu=new Le,Lu=new Le,ls=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ui.subVectors(s,e),Gi.subVectors(i,e),Tu.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(Gi),c=ui.dot(Tu),l=Gi.dot(Gi),u=Gi.dot(Tu),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Iu.setScalar(0),Pu.setScalar(0),Lu.setScalar(0),Iu.fromBufferAttribute(t,e),Pu.fromBufferAttribute(t,i),Lu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Iu,r.x),o.addScaledVector(Pu,r.y),o.addScaledVector(Lu,r.z),o}static isFrontFacing(t,e,i,s){return ui.subVectors(i,e),Gi.subVectors(t,e),ui.cross(Gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ui.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,i),cr.subVectors(r,i),Au.subVectors(t,i);let c=ar.dot(Au),l=cr.dot(Au);if(c<=0&&l<=0)return e.copy(i);Ru.subVectors(t,s);let u=ar.dot(Ru),h=cr.dot(Ru);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ar,o);Cu.subVectors(t,r);let d=ar.dot(Cu),g=cr.dot(Cu);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(cr,a);let p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return ed.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(ed,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(i).addScaledVector(ar,o).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ue=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(t.matrixWorld),this.union(Fa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),Ua.subVectors(this.max,oo),lr.subVectors(t.a,oo),ur.subVectors(t.b,oo),hr.subVectors(t.c,oo),os.subVectors(ur,lr),as.subVectors(hr,ur),Ps.subVectors(lr,hr);let e=[0,-os.z,os.y,0,-as.z,as.y,0,-Ps.z,Ps.y,os.z,0,-os.x,as.z,0,-as.x,Ps.z,0,-Ps.x,-os.y,os.x,0,-as.y,as.x,0,-Ps.y,Ps.x,0];return!Nu(e,lr,ur,hr,Ua)||(e=[1,0,0,0,1,0,0,0,1],!Nu(e,lr,ur,hr,Ua))?!1:(Oa.crossVectors(os,as),e=[Oa.x,Oa.y,Oa.z],Nu(e,lr,ur,hr,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wi=[new V,new V,new V,new V,new V,new V,new V,new V],hi=new V,Fa=new Ue,lr=new V,ur=new V,hr=new V,os=new V,as=new V,Ps=new V,oo=new V,Ua=new V,Oa=new V,Ls=new V;function Nu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ls.fromArray(n,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=t.dot(Ls),l=e.dot(Ls),u=i.dot(Ls);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var sn=new V,ka=new Nt,Py=0,Te=class extends Ii{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Py++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ka.fromBufferAttribute(this,e),ka.applyMatrix3(t),this.setXY(e,ka.x,ka.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Eo=class extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var To=class extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var jt=class extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}},Ly=new Ue,ao=new V,Du=new V,Wn=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Ly.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);let e=ao.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ao,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Du.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(Du)),this.expandByPoint(ao.copy(t.center).sub(Du))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ny=0,ei=new Me,Fu=new Xe,fr=new V,$n=new Ue,co=new Ue,dn=new V,fe=class n extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iy(t)?To:Eo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return Fu.lookAt(t),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors($n.min,co.min),$n.expandByPoint(dn),dn.addVectors($n.max,co.max),$n.expandByPoint(dn)):($n.expandByPoint(co.min),$n.expandByPoint(co.max))}$n.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)dn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(dn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)dn.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(t,l),dn.add(fr)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Te(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<i.count;M++)a[M]=new V,c[M]=new V;let l=new V,u=new V,h=new V,f=new Nt,d=new Nt,g=new Nt,y=new V,p=new V;function m(M,C,F){l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,F),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,F),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[M].add(y),a[C].add(y),a[F].add(y),c[M].add(p),c[C].add(p),c[F].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let M=0,C=x.length;M<C;++M){let F=x[M],I=F.start,D=F.count;for(let H=I,N=I+D;H<N;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let v=new V,b=new V,_=new V,S=new V;function R(M){_.fromBufferAttribute(s,M),S.copy(_);let C=a[M];v.copy(C),v.sub(_.multiplyScalar(_.dot(C))).normalize(),b.crossVectors(S,C);let I=b.dot(c[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,I)}for(let M=0,C=x.length;M<C;++M){let F=x[M],I=F.start,D=F.count;for(let H=I,N=I+D;H<N;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,c=new V,l=new V,u=new V,h=new V;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)dn.fromBufferAttribute(t,e),dn.normalize(),t.setXYZ(e,dn.x,dn.y,dn.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let m=0;m<u;m++)f[g++]=l[d++]}return new Te(f,u,h)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Fn=new V,ni=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uu=new V,Dy=new V,Fy=new pe,Zn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Uu.subVectors(i,e).cross(Dy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Uu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Fy.getNormalMatrix(t),s=this.coplanarPoint(Uu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Uy=0,pi=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=kr,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=lh,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ce(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Zn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xi=new V,Ou=new V,Ba=new V,za=new V,Os=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ou.copy(t).add(e).multiplyScalar(.5),Ba.copy(e).sub(t).normalize(),za.copy(this.origin).sub(Ou);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ba),a=za.dot(this.direction),c=-za.dot(Ba),l=za.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ou).addScaledVector(Ba,f),d}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);let i=Xi.dot(this.direction),s=Xi.dot(Xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,y=e.y-o.y,p=e.z-o.z,m=i.x-o.x,x=i.y-o.y,v=i.z-o.z,b=Math.abs(c),_=Math.abs(l),S=Math.abs(u),R,M,C,F,I,D,H,N,k,B,W,it;if(b>=_&&b>=S?(C=c,D=h,k=g,it=m,c>=0?(R=l,M=u,F=f,I=d,H=y,N=p,B=x,W=v):(R=u,M=l,F=d,I=f,H=p,N=y,B=v,W=x)):_>=S?(C=l,D=f,k=y,it=x,l>=0?(R=u,M=c,F=d,I=h,H=p,N=g,B=v,W=m):(R=c,M=u,F=h,I=d,H=g,N=p,B=m,W=v)):(C=u,D=d,k=p,it=v,u>=0?(R=c,M=l,F=h,I=f,H=g,N=y,B=m,W=x):(R=l,M=c,F=f,I=h,H=y,N=g,B=x,W=m)),C===0)return null;let j=R/C,et=M/C,at=1/C,Et=F-j*D,_t=I-et*D,St=H-j*k,Pt=N-et*k,Lt=B-j*it,J=W-et*it,ft=Lt*Pt-J*St,Ct=Et*J-_t*Lt,Xt=St*_t-Pt*Et;if(s){if(ft<0||Ct<0||Xt<0)return null}else if((ft<0||Ct<0||Xt<0)&&(ft>0||Ct>0||Xt>0))return null;let Dt=ft+Ct+Xt;if(Dt===0)return null;let X=at*(ft*D+Ct*k+Xt*it);return(Dt>0?X<0:X>0)?null:this.at(X/Dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nd=new Me,Ns=new Os,Ha=new Wn,id=new V,Ga=new V,Va=new V,Wa=new V,ku=new V,Xa=new V,sd=new V,qa=new V,ue=class extends Xe{constructor(t=new fe,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(ku.fromBufferAttribute(h,t),o?Xa.addScaledVector(ku,u):Xa.addScaledVector(ku.sub(e),u))}e.add(Xa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ns.copy(t.ray).recast(t.near),!(Ha.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Ha,id)===null||Ns.origin.distanceToSquared(id)>(t.far-t.near)**2))&&(nd.copy(r).invert(),Ns.copy(t.ray).applyMatrix4(nd),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ns)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,_=v;b<_;b+=3){let S=a.getX(b),R=a.getX(b+1),M=a.getX(b+2);s=Ya(this,m,t,i,l,u,h,S,R,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let x=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);s=Ya(this,o,t,i,l,u,h,x,v,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],x=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,_=v;b<_;b+=3){let S=b,R=b+1,M=b+2;s=Ya(this,m,t,i,l,u,h,S,R,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let x=p,v=p+1,b=p+2;s=Ya(this,o,t,i,l,u,h,x,v,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Oy(n,t,e,i,s,r,o,a){let c;if(t.side===kn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===vs,a),c===null)return null;qa.copy(a),qa.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(qa);return l<e.near||l>e.far?null:{distance:l,point:qa.clone(),object:n}}function Ya(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ga),n.getVertexPosition(c,Va),n.getVertexPosition(l,Wa);let u=Oy(n,t,e,i,Ga,Va,Wa,sd);if(u){let h=new V;ls.getBarycoord(sd,Ga,Va,Wa,h),s&&(u.uv=ls.getInterpolatedAttribute(s,a,c,l,h,new Nt)),r&&(u.uv1=ls.getInterpolatedAttribute(r,a,c,l,h,new Nt)),o&&(u.normal=ls.getInterpolatedAttribute(o,a,c,l,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new V,materialIndex:0};ls.getNormal(Ga,Va,Wa,f.normal),u.face=f,u.barycoord=h}return u}var Ro=class extends On{constructor(t=null,e=1,i=1,s,r,o,a,c,l=pn,u=pn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ar=class extends Te{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},dr=new Me,rd=new Me,$a=[],od=new Ue,ky=new Me,lo=new ue,uo=new Wn,ii=class extends ue{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ky)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,dr),od.copy(t.boundingBox).applyMatrix4(dr),this.boundingBox.union(od)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,dr),uo.copy(t.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(i),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),rd.multiplyMatrices(i,dr),lo.matrixWorld=rd,lo.raycast(t,$a);for(let o=0,a=$a.length;o<a;o++){let c=$a[o];c.instanceId=r,c.object=this,e.push(c)}$a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,jc,si));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new Wn,By=new Nt(.5,.5),Za=new V,Rr=class{constructor(t=new Zn,e=new Zn,i=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],x=r[12],v=r[13],b=r[14],_=r[15];if(s[0].setComponents(l-o,d-u,m-g,_-x).normalize(),s[1].setComponents(l+o,d+u,m+g,_+x).normalize(),s[2].setComponents(l+a,d+h,m+y,_+v).normalize(),s[3].setComponents(l-a,d-h,m-y,_-v).normalize(),i)s[4].setComponents(c,f,p,b).normalize(),s[5].setComponents(l-c,d-f,m-p,_-b).normalize();else if(s[4].setComponents(l-c,d-f,m-p,_-b).normalize(),e===di)s[5].setComponents(l+c,d+f,m+p,_+b).normalize();else if(e===_r)s[5].setComponents(c,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);let e=By.distanceTo(t.center);return Ds.radius=.7071067811865476+e,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Za.x=s.normal.x>0?t.max.x:t.min.x,Za.y=s.normal.y>0?t.max.y:t.min.y,Za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cr=class extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},bc=new V,vc=new V,ad=new Me,ho=new Os,ja=new Wn,Bu=new V,cd=new V,_c=class extends Xe{constructor(t=new fe,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)bc.fromBufferAttribute(e,s-1),vc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=bc.distanceTo(vc);t.setAttribute("lineDistance",new jt(i,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,t.ray.intersectsSphere(ja)===!1)return;ad.copy(s).invert(),ho.copy(t.ray).applyMatrix4(ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=u.getX(y),x=u.getX(y+1),v=Ka(this,t,ho,c,m,x,y);v&&e.push(v)}if(this.isLineLoop){let y=u.getX(g-1),p=u.getX(d),m=Ka(this,t,ho,c,y,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=l){let m=Ka(this,t,ho,c,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=Ka(this,t,ho,c,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ka(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(bc.fromBufferAttribute(a,s),vc.fromBufferAttribute(a,r),e.distanceSqToSegment(bc,vc,Bu,cd)>i)return;Bu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Bu);if(!(l<t.near||l>t.far))return{distance:l,point:cd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ld=new V,ud=new V,Co=class extends _c{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ld.fromBufferAttribute(e,s),ud.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ld.distanceTo(ud);t.setAttribute("lineDistance",new jt(i,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ks=class extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hd=new Me,ju=new Os,Ja=new Wn,Qa=new V,Ir=class extends Xe{constructor(t=new fe,e=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,t.ray.intersectsSphere(Ja)===!1)return;hd.copy(s).invert(),ju.copy(t.ray).applyMatrix4(hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let p=l.getX(g);Qa.fromBufferAttribute(h,p),fd(Qa,p,c,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Qa.fromBufferAttribute(h,g),fd(Qa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fd(n,t,e,i,s,r,o){let a=ju.distanceSqToPoint(n);if(a<e){let c=new V;ju.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Io=class extends On{constructor(t=[],e=_s,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pr=class extends On{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends On{constructor(t,e,i=yi,s,r,o,a=pn,c=pn,l,u=Ci,h=1){if(u!==Ci&&u!==Ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Mc=class extends hs{constructor(t,e=yi,i=_s,s,r,o=pn,a=pn,c,l=Ci){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Po=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ae=class n extends fe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function g(y,p,m,x,v,b,_,S,R,M,C){let F=b/R,I=_/M,D=b/2,H=_/2,N=S/2,k=R+1,B=M+1,W=0,it=0,j=new V;for(let et=0;et<B;et++){let at=et*I-H;for(let Et=0;Et<k;Et++){let _t=Et*F-D;j[y]=_t*x,j[p]=at*v,j[m]=N,l.push(j.x,j.y,j.z),j[y]=0,j[p]=0,j[m]=S>0?1:-1,u.push(j.x,j.y,j.z),h.push(Et/R),h.push(1-et/M),W+=1}}for(let et=0;et<M;et++)for(let at=0;at<R;at++){let Et=f+at+k*et,_t=f+at+k*(et+1),St=f+(at+1)+k*(et+1),Pt=f+(at+1)+k*et;c.push(Et,_t,Pt),c.push(_t,St,Pt),it+=6}a.addGroup(d,it,C),d+=it,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Rn=class n extends fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new V,u=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=i+h/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class n extends fe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,y=[],p=i/2,m=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function x(){let b=new V,_=new V,S=0,R=(e-t)/i;for(let M=0;M<=r;M++){let C=[],F=M/r,I=F*(e-t)+t;for(let D=0;D<=s;D++){let H=D/s,N=H*c+a,k=Math.sin(N),B=Math.cos(N);_.x=I*k,_.y=-F*i+p,_.z=I*B,h.push(_.x,_.y,_.z),b.set(k,R,B).normalize(),f.push(b.x,b.y,b.z),d.push(H,1-F),C.push(g++)}y.push(C)}for(let M=0;M<s;M++)for(let C=0;C<r;C++){let F=y[C][M],I=y[C+1][M],D=y[C+1][M+1],H=y[C][M+1];(t>0||C!==0)&&(u.push(F,I,H),S+=3),(e>0||C!==r-1)&&(u.push(I,D,H),S+=3)}l.addGroup(m,S,0),m+=S}function v(b){let _=g,S=new Nt,R=new V,M=0,C=b===!0?t:e,F=b===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,p*F,0),f.push(0,F,0),d.push(.5,.5),g++;let I=g;for(let D=0;D<=s;D++){let N=D/s*c+a,k=Math.cos(N),B=Math.sin(N);R.x=C*B,R.y=p*F,R.z=C*k,h.push(R.x,R.y,R.z),f.push(0,F,0),S.x=k*.5+.5,S.y=B*.5*F+.5,d.push(S.x,S.y),g++}for(let D=0;D<s;D++){let H=_+D,N=I+D;b===!0?u.push(N,N+1,H):u.push(N+1,N,H),M+=3}l.addGroup(m,M,b===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lo=class n extends qe{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},No=class n extends fe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new V,b=new V,_=new V;for(let S=0;S<e.length;S+=3)d(e[S+0],v),d(e[S+1],b),d(e[S+2],_),c(v,b,_,x)}function c(x,v,b,_){let S=_+1,R=[];for(let M=0;M<=S;M++){R[M]=[];let C=x.clone().lerp(b,M/S),F=v.clone().lerp(b,M/S),I=S-M;for(let D=0;D<=I;D++)D===0&&M===S?R[M][D]=C:R[M][D]=C.clone().lerp(F,D/I)}for(let M=0;M<S;M++)for(let C=0;C<2*(S-M)-1;C++){let F=Math.floor(C/2);C%2===0?(f(R[M][F+1]),f(R[M+1][F]),f(R[M][F])):(f(R[M][F+1]),f(R[M+1][F+1]),f(R[M+1][F]))}}function l(x){let v=new V;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(x),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function u(){let x=new V;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let b=p(x)/2/Math.PI+.5,_=m(x)/Math.PI+.5;o.push(b,1-_)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){let v=o[x+0],b=o[x+2],_=o[x+4],S=Math.max(v,b,_),R=Math.min(v,b,_);S>.9&&R<.1&&(v<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),_<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){let b=x*3;v.x=t[b+0],v.y=t[b+1],v.z=t[b+2]}function g(){let x=new V,v=new V,b=new V,_=new V,S=new Nt,R=new Nt,M=new Nt;for(let C=0,F=0;C<r.length;C+=9,F+=6){x.set(r[C+0],r[C+1],r[C+2]),v.set(r[C+3],r[C+4],r[C+5]),b.set(r[C+6],r[C+7],r[C+8]),S.set(o[F+0],o[F+1]),R.set(o[F+2],o[F+3]),M.set(o[F+4],o[F+5]),_.copy(x).add(v).add(b).divideScalar(3);let I=p(_);y(S,F+0,x,I),y(R,F+2,v,I),y(M,F+4,b,I)}}function y(x,v,b,_){_<0&&x.x===1&&(o[v]=x.x-1),b.x===0&&b.z===0&&(o[v]=_/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Do=class n extends No{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ce("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Nt:new V);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new V,s=[],r=[],o=[],a=new V,c=new Me;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Lr=class extends jn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sc=class extends Lr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Th(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var dd=new V,pd=new V,zu=new Th,Hu=new Th,Gu=new Th,Bs=class extends jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new V){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(pd.subVectors(s[0],s[1]).add(s[0]),l=pd);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(dd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=dd),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),zu.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,y,p),Hu.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,y,p),Gu.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(zu.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Hu.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Gu.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(zu.calc(c),Hu.calc(c),Gu.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function md(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function zy(n,t){let e=1-n;return e*e*t}function Hy(n,t){return 2*(1-n)*n*t}function Gy(n,t){return n*n*t}function go(n,t,e,i){return zy(n,t)+Hy(n,e)+Gy(n,i)}function Vy(n,t){let e=1-n;return e*e*e*t}function Wy(n,t){let e=1-n;return 3*e*e*n*t}function Xy(n,t){return 3*(1-n)*n*n*t}function qy(n,t){return n*n*n*t}function yo(n,t,e,i,s){return Vy(n,t)+Wy(n,e)+Xy(n,i)+qy(n,s)}var Fo=class extends jn{constructor(t=new Nt,e=new Nt,i=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Nt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yo(t,s.x,r.x,o.x,a.x),yo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wc=class extends jn{constructor(t=new V,e=new V,i=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new V){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(yo(t,s.x,r.x,o.x,a.x),yo(t,s.y,r.y,o.y,a.y),yo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Uo=class extends jn{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ec=class extends jn{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends jn{constructor(t=new Nt,e=new Nt,i=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Nt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends jn{constructor(t=new V,e=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new V){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(go(t,s.x,r.x,o.x),go(t,s.y,r.y,o.y),go(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(md(a,c.x,l.x,u.x,h.x),md(a,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},Tc=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:Bs,CubicBezierCurve:Fo,CubicBezierCurve3:wc,EllipseCurve:Lr,LineCurve:Uo,LineCurve3:Ec,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:ko,SplineCurve:Bo}),Ac=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Tc[s.type]().fromJSON(s))}return this}},zs=class extends Ac{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Uo(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Oo(this.currentPoint.clone(),new Nt(t,e),new Nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Fo(this.currentPoint.clone(),new Nt(t,e),new Nt(i,s),new Nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Bo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new Lr(t,e,i,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cn=class extends zs{constructor(t){super(t),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new zs().fromJSON(s))}return this}};function Yy(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=dp(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Jy(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,h=c;for(let f=e;f<s;f+=e){let d=n[f],g=n[f+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return zo(r,o,e,a,c,l,0),o}function dp(n,t,e,i,s){let r;if(s===lx(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=gd(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=gd(o/i|0,n[o],n[o+1],r);return r&&Nr(r,r.next)&&(Go(r),r=r.next),r}function Hs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Nr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Go(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function zo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&ix(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Zy(n,i,s,r):$y(n)){t.push(c.i,n.i,l.i),Go(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=jy(Hs(n),t),zo(n,t,e,i,s,r,2)):o===2&&Ky(n,t,e,i,s,r):zo(Hs(n),t,e,i,s,r,1);break}}}function $y(n){let t=n.prev,e=n,i=n.next;if(Ze(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&fo(s,a,r,c,o,l,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zy(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(u,h,f),y=Math.max(a,c,l),p=Math.max(u,h,f),m=Ku(d,g,t,e,i),x=Ku(y,p,t,e,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=m&&b&&b.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&fo(a,u,c,h,l,f,v.x,v.y)&&Ze(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=y&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&fo(a,u,c,h,l,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&fo(a,u,c,h,l,f,v.x,v.y)&&Ze(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=y&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&fo(a,u,c,h,l,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function jy(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Nr(i,s)&&mp(i,e,e.next,s)&&Ho(i,s)&&Ho(s,i)&&(t.push(i.i,e.i,s.i),Go(e),Go(e.next),e=n=s),e=e.next}while(e!==n);return Hs(e)}function Ky(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ox(o,a)){let c=gp(o,a);o=Hs(o,o.next),c=Hs(c,c.next),zo(o,t,e,i,s,r,0),zo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Jy(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=dp(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(rx(l))}s.sort(Qy);for(let r=0;r<s.length;r++)e=tx(s[r],e);return e}function Qy(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function tx(n,t){let e=ex(n,t);if(!e)return t;let i=gp(e,n);return Hs(i,i.next),Hs(e,e.next)}function ex(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Nr(n,e))return e;do{if(Nr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&pp(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let h=Math.abs(s-e.y)/(i-e.x);Ho(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&nx(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function nx(n,t){return Ze(n.prev,n,t.prev)<0&&Ze(t.next,n,n.next)<0}function ix(n,t,e,i){let s=n;do s.z===0&&(s.z=Ku(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sx(s)}function sx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Ku(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function rx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function pp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function fo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&pp(n,t,e,i,s,r,o,a)}function ox(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ax(n,t)&&(Ho(n,t)&&Ho(t,n)&&cx(n,t)&&(Ze(n.prev,n,t.prev)||Ze(n,t.prev,t))||Nr(n,t)&&Ze(n.prev,n,n.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Nr(n,t){return n.x===t.x&&n.y===t.y}function mp(n,t,e,i){let s=ec(Ze(n,t,e)),r=ec(Ze(n,t,i)),o=ec(Ze(e,i,n)),a=ec(Ze(e,i,t));return!!(s!==r&&o!==a||s===0&&tc(n,e,t)||r===0&&tc(n,i,t)||o===0&&tc(e,n,i)||a===0&&tc(e,t,i))}function tc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ec(n){return n>0?1:n<0?-1:0}function ax(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&mp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ho(n,t){return Ze(n.prev,n,n.next)<0?Ze(n,t,n.next)>=0&&Ze(n,n.prev,t)>=0:Ze(n,t,n.prev)<0||Ze(n,n.next,t)<0}function cx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function gp(n,t){let e=Ju(n.i,n.x,n.y),i=Ju(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function gd(n,t,e,i){let s=Ju(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Go(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ju(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Qu=class{static triangulate(t,e,i=2){return Yy(t,e,i)}},Gn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];yd(t),xd(i,t);let o=t.length;e.forEach(yd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,xd(i,e[c]);let a=Qu.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function yd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function xd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var mi=class n extends fe{constructor(t=new Cn([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:ux,v,b=!1,_,S,R,M;if(m){v=m.getSpacedPoints(u),b=!0,f=!1;let q=m.isCatmullRomCurve3?m.closed:!1;_=m.computeFrenetFrames(u,q),S=new V,R=new V,M=new V}f||(p=0,d=0,g=0,y=0);let C=a.extractPoints(l),F=C.shape,I=C.holes;if(!Gn.isClockWise(F)){F=F.reverse();for(let q=0,Q=I.length;q<Q;q++){let rt=I[q];Gn.isClockWise(rt)&&(I[q]=rt.reverse())}}function H(q){let rt=10000000000000001e-36,ht=q[0];for(let mt=1;mt<=q.length;mt++){let Tt=mt%q.length,Rt=q[Tt],Ut=Rt.x-ht.x,zt=Rt.y-ht.y,Y=Ut*Ut+zt*zt,ae=Math.max(Math.abs(Rt.x),Math.abs(Rt.y),Math.abs(ht.x),Math.abs(ht.y)),Gt=rt*ae*ae;if(Y<=Gt){q.splice(Tt,1),mt--;continue}ht=Rt}}H(F),I.forEach(H);let N=I.length,k=F;for(let q=0;q<N;q++){let Q=I[q];F=F.concat(Q)}function B(q,Q,rt){return Q||he("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(Q,rt)}let W=F.length;function it(q,Q,rt){let ht,mt,Tt,Rt=q.x-Q.x,Ut=q.y-Q.y,zt=rt.x-q.x,Y=rt.y-q.y,ae=Rt*Rt+Ut*Ut,Gt=Rt*Y-Ut*zt;if(Math.abs(Gt)>Number.EPSILON){let z=Math.sqrt(ae),T=Math.sqrt(zt*zt+Y*Y),nt=Q.x-Ut/z,dt=Q.y+Rt/z,yt=rt.x-Y/T,G=rt.y+zt/T,w=((yt-nt)*Y-(G-dt)*zt)/(Rt*Y-Ut*zt);ht=nt+Rt*w-q.x,mt=dt+Ut*w-q.y;let E=ht*ht+mt*mt;if(E<=2)return new Nt(ht,mt);Tt=Math.sqrt(E/2)}else{let z=!1;Rt>Number.EPSILON?zt>Number.EPSILON&&(z=!0):Rt<-Number.EPSILON?zt<-Number.EPSILON&&(z=!0):Math.sign(Ut)===Math.sign(Y)&&(z=!0),z?(ht=-Ut,mt=Rt,Tt=Math.sqrt(ae)):(ht=Rt,mt=Ut,Tt=Math.sqrt(ae/2))}return new Nt(ht/Tt,mt/Tt)}let j=[];for(let q=0,Q=k.length,rt=Q-1,ht=q+1;q<Q;q++,rt++,ht++)rt===Q&&(rt=0),ht===Q&&(ht=0),j[q]=it(k[q],k[rt],k[ht]);let et=[],at,Et=j.concat();for(let q=0,Q=N;q<Q;q++){let rt=I[q];at=[];for(let ht=0,mt=rt.length,Tt=mt-1,Rt=ht+1;ht<mt;ht++,Tt++,Rt++)Tt===mt&&(Tt=0),Rt===mt&&(Rt=0),at[ht]=it(rt[ht],rt[Tt],rt[Rt]);et.push(at),Et=Et.concat(at)}let _t;if(p===0)_t=Gn.triangulateShape(k,I);else{let q=[],Q=[];for(let rt=0;rt<p;rt++){let ht=rt/p,mt=d*Math.cos(ht*Math.PI/2),Tt=g*Math.sin(ht*Math.PI/2)+y;for(let Rt=0,Ut=k.length;Rt<Ut;Rt++){let zt=B(k[Rt],j[Rt],Tt);Ct(zt.x,zt.y,-mt),ht===0&&q.push(zt)}for(let Rt=0,Ut=N;Rt<Ut;Rt++){let zt=I[Rt];at=et[Rt];let Y=[];for(let ae=0,Gt=zt.length;ae<Gt;ae++){let z=B(zt[ae],at[ae],Tt);Ct(z.x,z.y,-mt),ht===0&&Y.push(z)}ht===0&&Q.push(Y)}}_t=Gn.triangulateShape(q,Q)}let St=_t.length,Pt=g+y;for(let q=0;q<W;q++){let Q=f?B(F[q],Et[q],Pt):F[q];b?(R.copy(_.normals[0]).multiplyScalar(Q.x),S.copy(_.binormals[0]).multiplyScalar(Q.y),M.copy(v[0]).add(R).add(S),Ct(M.x,M.y,M.z)):Ct(Q.x,Q.y,0)}for(let q=1;q<=u;q++)for(let Q=0;Q<W;Q++){let rt=f?B(F[Q],Et[Q],Pt):F[Q];b?(R.copy(_.normals[q]).multiplyScalar(rt.x),S.copy(_.binormals[q]).multiplyScalar(rt.y),M.copy(v[q]).add(R).add(S),Ct(M.x,M.y,M.z)):Ct(rt.x,rt.y,h/u*q)}for(let q=p-1;q>=0;q--){let Q=q/p,rt=d*Math.cos(Q*Math.PI/2),ht=g*Math.sin(Q*Math.PI/2)+y;for(let mt=0,Tt=k.length;mt<Tt;mt++){let Rt=B(k[mt],j[mt],ht);Ct(Rt.x,Rt.y,h+rt)}for(let mt=0,Tt=I.length;mt<Tt;mt++){let Rt=I[mt];at=et[mt];for(let Ut=0,zt=Rt.length;Ut<zt;Ut++){let Y=B(Rt[Ut],at[Ut],ht);b?Ct(Y.x,Y.y+v[u-1].y,v[u-1].x+rt):Ct(Y.x,Y.y,h+rt)}}}Lt(),J();function Lt(){let q=s.length/3;if(f){let Q=0,rt=W*Q;for(let ht=0;ht<St;ht++){let mt=_t[ht];Xt(mt[2]+rt,mt[1]+rt,mt[0]+rt)}Q=u+p*2,rt=W*Q;for(let ht=0;ht<St;ht++){let mt=_t[ht];Xt(mt[0]+rt,mt[1]+rt,mt[2]+rt)}}else{for(let Q=0;Q<St;Q++){let rt=_t[Q];Xt(rt[2],rt[1],rt[0])}for(let Q=0;Q<St;Q++){let rt=_t[Q];Xt(rt[0]+W*u,rt[1]+W*u,rt[2]+W*u)}}i.addGroup(q,s.length/3-q,0)}function J(){let q=s.length/3,Q=0;ft(k,Q),Q+=k.length;for(let rt=0,ht=I.length;rt<ht;rt++){let mt=I[rt];ft(mt,Q),Q+=mt.length}i.addGroup(q,s.length/3-q,1)}function ft(q,Q){let rt=q.length;for(;--rt>=0;){let ht=rt,mt=rt-1;mt<0&&(mt=q.length-1);for(let Tt=0,Rt=u+p*2;Tt<Rt;Tt++){let Ut=W*Tt,zt=W*(Tt+1),Y=Q+ht+Ut,ae=Q+mt+Ut,Gt=Q+mt+zt,z=Q+ht+zt;Dt(Y,ae,Gt,z)}}}function Ct(q,Q,rt){c.push(q),c.push(Q),c.push(rt)}function Xt(q,Q,rt){X(q),X(Q),X(rt);let ht=s.length/3,mt=x.generateTopUV(i,s,ht-3,ht-2,ht-1);lt(mt[0]),lt(mt[1]),lt(mt[2])}function Dt(q,Q,rt,ht){X(q),X(Q),X(ht),X(Q),X(rt),X(ht);let mt=s.length/3,Tt=x.generateSideWallUV(i,s,mt-6,mt-3,mt-2,mt-1);lt(Tt[0]),lt(Tt[1]),lt(Tt[3]),lt(Tt[1]),lt(Tt[2]),lt(Tt[3])}function X(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function lt(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return hx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Tc[s.type]().fromJSON(s)),new n(i,t.options)}},ux={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new Nt(r,o),new Nt(a,c),new Nt(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Nt(o,1-c),new Nt(l,1-h),new Nt(f,1-g),new Nt(y,1-m)]:[new Nt(a,1-c),new Nt(u,1-h),new Nt(d,1-g),new Nt(p,1-m)]}};function hx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vo=class n extends No{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Wo=class n extends fe{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new V,f=new Nt,d=new V,g=new V,y=new V,p=0,m=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,m=t[x+1].y-t[x].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let x=0;x<=e;x++){let v=i+x*u*s,b=Math.sin(v),_=Math.cos(v);for(let S=0;S<=t.length-1;S++){h.x=t[S].x*b,h.y=t[S].y,h.z=t[S].x*_,o.push(h.x,h.y,h.z),f.x=x/e,f.y=S/(t.length-1),a.push(f.x,f.y);let R=c[3*S+0]*b,M=c[3*S+1],C=c[3*S+0]*_;l.push(R,M,C)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let b=v+x*t.length,_=b,S=b+t.length,R=b+t.length+1,M=b+1;r.push(_,S,M),r.push(R,M,S)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var In=class n extends fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],y=[],p=[];for(let m=0;m<u;m++){let x=m*f-o;for(let v=0;v<l;v++){let b=v*h-r;g.push(b,-x,0),y.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){let v=x+l*m,b=x+l*(m+1),_=x+1+l*(m+1),S=x+1+l*m;d.push(v,b,S),d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Xo=class n extends fe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=t,f=(e-t)/s,d=new V,g=new Nt;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let m=r+p/i*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let y=0;y<s;y++){let p=y*(i+1);for(let m=0;m<i;m++){let x=m+p,v=x,b=x+i+1,_=x+i+2,S=x+1;a.push(v,b,S),a.push(b,_,S)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},fs=class n extends fe{constructor(t=new Cn([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(o,2));function l(u){let h=s.length/3,f=u.extractPoints(e),d=f.shape,g=f.holes;Gn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let x=g[p];Gn.isClockWise(x)===!0&&(g[p]=x.reverse())}let y=Gn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let x=g[p];d=d.concat(x)}for(let p=0,m=d.length;p<m;p++){let x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=y.length;p<m;p++){let x=y[p],v=x[0]+h,b=x[1]+h,_=x[2]+h;i.push(v,b,_),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fx(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function fx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Re=class n extends fe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new V,f=new V,d=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){let x=[],v=m/i,b=o+v*a,_=t*Math.cos(b),S=Math.sqrt(t*t-_*_),R=0;m===0&&o===0?R=.5/e:m===i&&c===Math.PI&&(R=-.5/e);for(let M=0;M<=e;M++){let C=M/e,F=s+C*r;h.x=-S*Math.cos(F),h.y=_,h.z=S*Math.sin(F),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(C+R,1-v),x.push(l++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<e;x++){let v=u[m][x+1],b=u[m][x],_=u[m+1][x],S=u[m+1][x+1];(m!==0||o>0)&&d.push(v,b,S),(m!==i-1||c<Math.PI)&&d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pn=class n extends fe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],h=[],f=new V,d=new V,g=new V;for(let y=0;y<=i;y++){let p=o+y/i*a;for(let m=0;m<=s;m++){let x=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(m/s),h.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,x=(s+1)*(y-1)+p-1,v=(s+1)*(y-1)+p,b=(s+1)*y+p;c.push(m,x,b),c.push(x,v,b)}this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Dr=class n extends fe{constructor(t=new ko(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new V,c=new V,l=new Nt,u=new V,h=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function y(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),x(),m()}function p(v){u=t.getPointAt(v/e,u);let b=o.normals[v],_=o.binormals[v];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,M=Math.sin(R),C=-Math.cos(R);c.x=C*b.x+M*_.x,c.y=C*b.y+M*_.y,c.z=C*b.z+M*_.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let b=1;b<=s;b++){let _=(s+1)*(v-1)+(b-1),S=(s+1)*v+(b-1),R=(s+1)*v+b,M=(s+1)*(v-1)+b;g.push(_,S,M),g.push(S,R,M)}}function x(){for(let v=0;v<=e;v++)for(let b=0;b<=s;b++)l.x=v/e,l.y=b/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Tc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},qo=class extends fe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new V,r=new V;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let h=c[l],f=h.start,d=h.count;for(let g=f,y=f+d;g<y;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),x=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,x),bd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,h=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),bd(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function bd(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function qs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(vd(s))s.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(vd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ln(n){let t={};for(let e=0;e<n.length;e++){let i=qs(n[e]);for(let s in i)t[s]=i[s]}return t}function vd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function dx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ah(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Zi={clone:qs,merge:Ln},px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Rc=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ye=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Fr=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Vc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cc=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ic=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function pr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Vu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ds=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pc=class extends ds{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yu,endingEnd:Yu}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $u:r=t,a=2*e-i;break;case Zu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $u:o=t,c=2*i-e;break;case Zu:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,x=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*y+.5*g,b=d*p-d*y;for(let _=0;_!==a;++_)r[_]=m*o[u+_]+x*o[l+_]+v*o[c+_]+b*o[h+_];return r}},Lc=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Nc=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dc=class extends ds{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let y=o[l+g],p=o[c+g],m=d*f+g*2,x=h[m],v=h[m+1],b=t*f+g*2,_=u[b],S=u[b+1],R=yx(i,e,x,_,s);r[g]=yp(R,y,v,S,p)}return r}};function yp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function gx(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function yx(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=yp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=gx(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Kn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Vu(t.settings)&&(i.settings={inTangents:pr(t.settings.inTangents,Array),outTangents:pr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Dc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xo:e=this.InterpolantFactoryMethodDiscrete;break;case mc:e=this.InterpolantFactoryMethodLinear;break;case rc:e=this.InterpolantFactoryMethodSmooth;break;case qu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ce("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xo;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return rc;case this.InterpolantFactoryMethodBezier:return qu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Vu(this.settings)&&(_d(this.settings.inTangents,t),_d(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(he("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(he("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){he("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){he("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&sy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){he("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _d(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=mc;var ps=class extends Kn{constructor(t,e,i){super(t,e,i)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=xo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}};Fc.prototype.ValueTypeName="color";var Uc=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}};Uc.prototype.ValueTypeName="number";var Oc=class extends ds{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)mn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Yo=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Oc(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Kn{constructor(t,e,i){super(t,e,i)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=xo;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Kn{constructor(t,e,i,s){super(t,e,i,s)}};kc.prototype.ValueTypeName="vector";var Bc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new Bc,zc=class{constructor(t){this.manager=t!==void 0?t:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Gs=class extends Ur{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wu=new Me,Md=new V,Sd=new V,$o=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Md.setFromMatrixPosition(t.matrixWorld),e.position.copy(Md),Sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Wu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===_r||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Wu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nc=new V,ic=new mn,Ti=new V,Zo=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nc,ic,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(nc,ic,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new V,wd=new Nt,Ed=new Nt,Un=class extends Zo{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,wd,Ed),e.subVectors(Ed,wd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var th=class extends $o{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0}},jo=class extends Ur{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},gs=class extends Zo{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eh=class extends $o{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new eh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ko=class extends fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var mr=-90,gr=1,Hc=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(mr,gr,t,e);s.layers=this.layers,this.add(s);let r=new Un(mr,gr,t,e);r.layers=this.layers,this.add(r);let o=new Un(mr,gr,t,e);o.layers=this.layers,this.add(o);let a=new Un(mr,gr,t,e);a.layers=this.layers,this.add(a);let c=new Un(mr,gr,t,e);c.layers=this.layers,this.add(c);let l=new Un(mr,gr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Gc=class extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Rh="\\[\\]\\.:\\/",xx=new RegExp("["+Rh+"]","g"),Ch="[^"+Rh+"]",bx="[^"+Rh.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",Ch),_x=/(WCOD+)?/.source.replace("WCOD",bx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),wx=new RegExp("^"+vx+_x+Mx+Sx+"$"),Ex=["material","materials","bones","map"],nh=class{constructor(t,e,i){let s=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){let e=wx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ex.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){he("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){he("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){he("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){he("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){he("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;he("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=nh;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $E=new Float32Array(1);var xs=class extends Ao{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Td=new Me,bs=class{constructor(t,e,i=0,s=1/0){this.ray=new Os(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):he("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Td),this}intersectObject(t,e=!0,i=[]){return ih(t,this,i,e),i.sort(Ad),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ih(t[s],this,i,e);return i.sort(Ad),i}};function Ad(n,t){return n.distance-t.distance}function ih(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ih(r[o],t,e,!0)}}var sh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var Rd=new V,sc=new V,yr=new V,xr=new V,Xu=new V,Tx=new V,Ax=new V,Jo=class{constructor(t=new V,e=new V){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Rd.subVectors(t,this.start),sc.subVectors(this.end,this.start);let i=sc.dot(sc);if(i===0)return 0;let r=sc.dot(Rd)/i;return e&&(r=de(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Tx,i=Ax){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;yr.subVectors(l,a),xr.subVectors(u,c),Xu.subVectors(a,c);let h=yr.dot(yr),f=xr.dot(xr),d=xr.dot(Xu);if(h<=s&&f<=s)return e.copy(a),i.copy(c),e.sub(i),e.dot(e);if(h<=s)r=0,o=d/f,o=de(o,0,1);else{let g=yr.dot(Xu);if(f<=s)o=0,r=de(-g/h,0,1);else{let y=yr.dot(xr),p=h*f-y*y;p!==0?r=de((y*d-g*f)/p,0,1):r=0,o=(y*r+d)/f,o<0?(o=0,r=de(-g/h,0,1)):o>1&&(o=1,r=de((y-g)/h,0,1))}}return e.copy(a).addScaledVector(yr,r),i.copy(c).addScaledVector(xr,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ih(n,t,e,i){let s=Rx(i);switch(e){case _h:return n*t;case jc:return n*t/s.components*s.byteLength;case Kc:return n*t/s.components*s.byteLength;case ws:return n*t*2/s.components*s.byteLength;case Jc:return n*t*2/s.components*s.byteLength;case Mh:return n*t*3/s.components*s.byteLength;case ri:return n*t*4/s.components*s.byteLength;case Qc:return n*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(n,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(n,8)*Math.max(t,8)/2;case sl:case rl:case al:case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ol:case oa:case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case wl:case El:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Al:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case aa:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rx(n){switch(n){case Xn:case yh:return{byteLength:1,components:1};case Br:case xh:case xi:return{byteLength:2,components:1};case $c:case Zc:return{byteLength:2,components:4};case yi:case Yc:case si:return{byteLength:4,components:1};case bh:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zp(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Nx(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],y=h[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let y=h[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
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
#endif`,Hx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
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
#endif`,Vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yx=`#ifdef USE_IRIDESCENCE
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
#endif`,$x=`#ifdef USE_BUMPMAP
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ib=`#define PI 3.141592653589793
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
} // validated`,sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rb=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_b=`#ifdef USE_GRADIENTMAP
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
}`,Mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
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
#endif`,Lb=`uniform sampler2D dfgLUT;
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
}`,Nb=`
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wb=`#if defined( USE_POINTS_UV )
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
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
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
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b1=`float getShadowMask() {
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S1=`#ifdef USE_SKINNING
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
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#ifdef USE_TRANSMISSION
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
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
}`,H1=`#if DEPTH_PACKING == 3200
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
}`,G1=`#define DISTANCE
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
}`,V1=`#define DISTANCE
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,Z1=`uniform vec3 diffuse;
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
}`,j1=`#define LAMBERT
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
}`,K1=`#define LAMBERT
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
}`,J1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,tv=`#define NORMAL
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
}`,ev=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,av=`#define TOON
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
}`,cv=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,hv=`uniform vec3 color;
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
}`,fv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Dx,alphahash_pars_fragment:Fx,alphamap_fragment:Ux,alphamap_pars_fragment:Ox,alphatest_fragment:kx,alphatest_pars_fragment:Bx,aomap_fragment:zx,aomap_pars_fragment:Hx,batching_pars_vertex:Gx,batching_vertex:Vx,begin_vertex:Wx,beginnormal_vertex:Xx,bsdfs:qx,iridescence_fragment:Yx,bumpmap_pars_fragment:$x,clipping_planes_fragment:Zx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Jx,color_fragment:Qx,color_pars_fragment:tb,color_pars_vertex:eb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:sb,defaultnormal_vertex:rb,displacementmap_pars_vertex:ob,displacementmap_vertex:ab,emissivemap_fragment:cb,emissivemap_pars_fragment:lb,colorspace_fragment:ub,colorspace_pars_fragment:hb,envmap_fragment:fb,envmap_common_pars_fragment:db,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Tb,envmap_vertex:gb,fog_vertex:yb,fog_pars_vertex:xb,fog_fragment:bb,fog_pars_fragment:vb,gradientmap_pars_fragment:_b,lightmap_pars_fragment:Mb,lights_lambert_fragment:Sb,lights_lambert_pars_fragment:wb,lights_pars_begin:Eb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Rb,lights_phong_fragment:Cb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Pb,lights_physical_pars_fragment:Lb,lights_fragment_begin:Nb,lights_fragment_maps:Db,lights_fragment_end:Fb,lightprobes_pars_fragment:Ub,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:zb,map_fragment:Hb,map_pars_fragment:Gb,map_particle_fragment:Vb,map_particle_pars_fragment:Wb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:qb,morphinstance_vertex:Yb,morphcolor_vertex:$b,morphnormal_vertex:Zb,morphtarget_pars_vertex:jb,morphtarget_vertex:Kb,normal_fragment_begin:Jb,normal_fragment_maps:Qb,normal_pars_fragment:t1,normal_pars_vertex:e1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:a1,opaque_fragment:c1,packing:l1,premultiplied_alpha_fragment:u1,project_vertex:h1,dithering_fragment:f1,dithering_pars_fragment:d1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:y1,shadowmap_vertex:x1,shadowmask_pars_fragment:b1,skinbase_vertex:v1,skinning_pars_vertex:_1,skinning_vertex:M1,skinnormal_vertex:S1,specularmap_fragment:w1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:A1,transmission_fragment:R1,transmission_pars_fragment:C1,uv_pars_fragment:I1,uv_pars_vertex:P1,uv_vertex:L1,worldpos_vertex:N1,background_vert:D1,background_frag:F1,backgroundCube_vert:U1,backgroundCube_frag:O1,cube_vert:k1,cube_frag:B1,depth_vert:z1,depth_frag:H1,distance_vert:G1,distance_frag:V1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:q1,linedashed_frag:Y1,meshbasic_vert:$1,meshbasic_frag:Z1,meshlambert_vert:j1,meshlambert_frag:K1,meshmatcap_vert:J1,meshmatcap_frag:Q1,meshnormal_vert:tv,meshnormal_frag:ev,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:cv,points_frag:lv,shadow_vert:uv,shadow_frag:hv,sprite_vert:fv,sprite_frag:dv},Wt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},zn={basic:{uniforms:Ln([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Ln([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Ln([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Ln([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Ln([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Ln([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Ln([Wt.points,Wt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Ln([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Ln([Wt.common,Wt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Ln([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Ln([Wt.sprite,Wt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Ln([Wt.common,Wt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Ln([Wt.lights,Wt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};zn.physical={uniforms:Ln([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Ll={r:0,b:0,g:0},pv=new Me,Hp=new pe;Hp.set(-1,0,0,0,1,0,0,0,1);function mv(n,t,e,i,s,r){let o=new Yt(0),a=s===!0?0:1,c,l,u=null,h=0,f=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let b=x.backgroundBlurriness>0;v=t.get(v,b)}return v}function g(x){let v=!1,b=d(x);b===null?p(o,a):b&&b.isColor&&(p(b,1),v=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?e.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,v){let b=d(v);b&&(b.isCubeTexture||b.mapping===ta)?(l===void 0&&(l=new ue(new Ae(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:qs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(v.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hp),l.material.toneMapped=_e.getTransfer(b.colorSpace)!==Pe,(u!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ue(new In(2,2),new ze({name:"BackgroundMaterial",uniforms:qs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_e.getTransfer(b.colorSpace)!==Pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Ll,Ah(n)),e.buffers.color.setClear(Ll.r,Ll.g,Ll.b,v,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),a=v,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:y,dispose:m}}function gv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(I,D,H,N,k){let B=!1,W=h(I,N,H,D);r!==W&&(r=W,l(r.object)),B=d(I,N,H,k),B&&g(I,N,H,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(I,D,H,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function h(I,D,H,N){let k=N.wireframe===!0,B=i[D.id];B===void 0&&(B={},i[D.id]=B);let W=I.isInstancedMesh===!0?I.id:0,it=B[W];it===void 0&&(it={},B[W]=it);let j=it[H.id];j===void 0&&(j={},it[H.id]=j);let et=j[k];return et===void 0&&(et=f(c()),j[k]=et),et}function f(I){let D=[],H=[],N=[];for(let k=0;k<e;k++)D[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,D,H,N){let k=r.attributes,B=D.attributes,W=0,it=H.getAttributes();for(let j in it)if(it[j].location>=0){let at=k[j],Et=B[j];if(Et===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Et=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Et=I.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(I,D,H,N){let k={},B=D.attributes,W=0,it=H.getAttributes();for(let j in it)if(it[j].location>=0){let at=B[j];at===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(at=I.instanceColor));let Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),k[j]=Et,W++}r.attributes=k,r.attributesNum=W,r.index=N}function y(){let I=r.newAttributes;for(let D=0,H=I.length;D<H;D++)I[D]=0}function p(I){m(I,0)}function m(I,D){let H=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;H[I]=1,N[I]===0&&(n.enableVertexAttribArray(I),N[I]=1),k[I]!==D&&(n.vertexAttribDivisor(I,D),k[I]=D)}function x(){let I=r.newAttributes,D=r.enabledAttributes;for(let H=0,N=D.length;H<N;H++)D[H]!==I[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function v(I,D,H,N,k,B,W){W===!0?n.vertexAttribIPointer(I,D,H,k,B):n.vertexAttribPointer(I,D,H,N,k,B)}function b(I,D,H,N){y();let k=N.attributes,B=H.getAttributes(),W=D.defaultAttributeValues;for(let it in B){let j=B[it];if(j.location>=0){let et=k[it];if(et===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(et=I.instanceColor)),et!==void 0){let at=et.normalized,Et=et.itemSize,_t=t.get(et);if(_t===void 0)continue;let St=_t.buffer,Pt=_t.type,Lt=_t.bytesPerElement,J=Pt===n.INT||Pt===n.UNSIGNED_INT||et.gpuType===Yc;if(et.isInterleavedBufferAttribute){let ft=et.data,Ct=ft.stride,Xt=et.offset;if(ft.isInstancedInterleavedBuffer){for(let Dt=0;Dt<j.locationSize;Dt++)m(j.location+Dt,ft.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Dt=0;Dt<j.locationSize;Dt++)p(j.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let Dt=0;Dt<j.locationSize;Dt++)v(j.location+Dt,Et/j.locationSize,Pt,at,Ct*Lt,(Xt+Et/j.locationSize*Dt)*Lt,J)}else{if(et.isInstancedBufferAttribute){for(let ft=0;ft<j.locationSize;ft++)m(j.location+ft,et.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<j.locationSize;ft++)p(j.location+ft);n.bindBuffer(n.ARRAY_BUFFER,St);for(let ft=0;ft<j.locationSize;ft++)v(j.location+ft,Et/j.locationSize,Pt,at,Et*Lt,Et/j.locationSize*ft*Lt,J)}}else if(W!==void 0){let at=W[it];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(j.location,at);break;case 3:n.vertexAttrib3fv(j.location,at);break;case 4:n.vertexAttrib4fv(j.location,at);break;default:n.vertexAttrib1fv(j.location,at)}}}}x()}function _(){C();for(let I in i){let D=i[I];for(let H in D){let N=D[H];for(let k in N){let B=N[k];for(let W in B)u(B[W].object),delete B[W];delete N[k]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let D=i[I.id];for(let H in D){let N=D[H];for(let k in N){let B=N[k];for(let W in B)u(B[W].object),delete B[W];delete N[k]}}delete i[I.id]}function R(I){for(let D in i){let H=i[D];for(let N in H){let k=H[N];if(k[I.id]===void 0)continue;let B=k[I.id];for(let W in B)u(B[W].object),delete B[W];delete k[I.id]}}}function M(I){for(let D in i){let H=i[D],N=I.isInstancedMesh===!0?I.id:0,k=H[N];if(k!==void 0){for(let B in k){let W=k[B];for(let it in W)u(W[it].object),delete W[it];delete k[B]}delete H[N],Object.keys(H).length===0&&delete i[D]}}}function C(){F(),o=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:F,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function yv(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function xv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let M=R===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Xn&&R!==si&&!M&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ce("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,maxSamples:_,samples:S}}function bv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Zn,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let x=r?0:i,v=x*4,b=m.clippingState||null;c.value=b,b=u(g,f,v,d);for(let _=0;_!==v;++_)b[_]=e[_];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){let y=h!==null?h.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let m=d+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,b=d;v!==y;++v,b+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Gr=4,vv=6,_v=20,Mv=256,la=new gs,bp=new Yt,Ph=null,Lh=0,Nh=0,Dh=!1,Sv=new V,Ys=new V,Dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Sv}=r;Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,Lh,Nh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:xi,format:ri,colorSpace:bo,depthBuffer:!1},s=vp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wv(r)),this._blurMaterial=Tv(r,t,e),this._ggxMaterial=Ev(r,t,e)}return s}_compileMaterial(t){let e=new ue(new fe,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,i,s,r){let c=new Un(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(bp),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new Ae,new Oe({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,m=!0):(p.color.copy(bp),m=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):b===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));let _=this._cubeSize;Hr(s,b*_,v>2?_:0,_,_),h.setRenderTarget(s),m&&h.render(y,c),h.render(t,c)}h.toneMapping=d,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_s||t.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Hr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,la)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-Gr?i-g+Gr:0),m=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Hr(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,la),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Hr(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,la)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Gr?s-this._lodMax+Gr:0),f=4*(this._cubeSize-u);Hr(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(c,la)}};function wv(n){let t=[],e=[],i=n,s=n-Gr+1+vv;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,g=new Float32Array(d*f*h),y=new Float32Array(d*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,v=m>2?0:-1,b=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];g.set(b,d*f*m);for(let _=0;_<f;_++){let S=u[_*2]*2-1,R=u[_*2+1]*2-1;m===0?Ys.set(1,R,S):m===1?Ys.set(-S,1,-R):m===2?Ys.set(-S,R,1):m===3?Ys.set(-1,R,-S):m===4?Ys.set(-S,-1,R):Ys.set(S,R,-1),Ys.toArray(y,(m*f+_)*d)}}let p=new fe;p.setAttribute("position",new Te(g,d)),p.setAttribute("outputDirection",new Te(y,d)),e.push(new ue(p,null)),i>Gr&&i--}return{lodMeshes:e,sizeLods:t}}function vp(n,t,e){let i=new Vn(n,t,e);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ev(n,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Tv(n,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function _p(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Mp(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fl=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Io(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:Li});r.uniforms.tEquirect.value=e;let o=new ue(s,r),a=e.minFilter;return e.minFilter===Ms&&(e.minFilter=xn),new Hc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Av(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Wc||d===Xc)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Fl(g.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",l),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Wc||d===Xc,y=d===_s||d===Xs;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Dl(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let x=f.image;return g&&x&&x.height>0||y&&x&&c(x)?(i===null&&(i=new Dl(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===Wc?f.mapping=_s:d===Xc&&(f.mapping=Xs),f}function c(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Rv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Fs("WebGLRenderer: "+i+" extension not supported."),s}}}function Cv(n,t,e,i){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,g=h.attributes.position,y=0;if(g===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let v=0,b=x.length;v<b;v+=3){let _=x[v+0],S=x[v+1],R=x[v+2];f.push(_,S,S,R,R,_)}}else{let x=g.array;y=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){let _=v+0,S=v+1,R=v+2;f.push(_,S,S,R,R,_)}}let p=new(g.count>=65535?To:Eo)(f,1);p.version=y;let m=r.get(h);m&&t.remove(m),r.set(h,p)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Iv(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,r,h*o),e.update(f,i,1)}function l(h,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,h*o,d),e.update(f,i,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Pv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:he("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Lv(n,t,e){let i=new WeakMap,s=new Le;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let C=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let b=a.attributes.position.count*v,_=1;b>t.maxTextureSize&&(_=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let S=new Float32Array(b*_*4*h),R=new So(S,b,_,h);R.type=si,R.needsUpdate=!0;let M=v*4;for(let F=0;F<h;F++){let I=p[F],D=m[F],H=x[F],N=b*_*4*F;for(let k=0;k<I.count;k++){let B=k*M;d===!0&&(s.fromBufferAttribute(I,k),S[N+B+0]=s.x,S[N+B+1]=s.y,S[N+B+2]=s.z,S[N+B+3]=0),g===!0&&(s.fromBufferAttribute(D,k),S[N+B+4]=s.x,S[N+B+5]=s.y,S[N+B+6]=s.z,S[N+B+7]=0),y===!0&&(s.fromBufferAttribute(H,k),S[N+B+8]=s.x,S[N+B+9]=s.y,S[N+B+10]=s.z,S[N+B+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Nt(b,_)},i.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Nv(n,t,e,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Dv={[uh]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[fh]:"CINEON_TONE_MAPPING",[Qo]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[dh]:"CUSTOM_TONE_MAPPING"};function Fv(n,t,e,i,s,r){let o=new Vn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new fe;l.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jt([0,2,0,0,2,0],2));let u=new Rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ue(l,u),f=new gs(-1,1,1,-1,0,1),d=null,g=null,y=!1,p,m=null,x=[],v=!1;this.setSize=function(b,_){o.setSize(b,_),a!==null&&a.setSize(b,_),c!==null&&c.setSize(b,_);for(let S=0;S<x.length;S++){let R=x[S];R.setSize&&R.setSize(b,_)}},this.setEffects=function(b){x=b,v=x.length>0&&x[0].isRenderPass===!0;let _=o.width,S=o.height;x.length>0&&a===null&&(a=new Vn(_,S,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new Vn(_,S,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let M=x[R];M.setSize&&M.setSize(_,S)}},this.begin=function(b,_){if(y||b.toneMapping===gi&&x.length===0)return!1;if(m=_,_!==null){let S=_.width,R=_.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return v===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return v},this.end=function(b,_){b.toneMapping=p,y=!0;let S=o,R=a;for(let M=0;M<x.length;M++){let C=x[M];C.enabled!==!1&&(C.render(b,R,S,_),C.needsSwap!==!1&&(S=R,R=R===a?c:a))}if(d!==b.outputColorSpace||g!==b.toneMapping){d=b.outputColorSpace,g=b.toneMapping,u.defines={},_e.getTransfer(d)===Pe&&(u.defines.SRGB_TRANSFER="");let M=Dv[g];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(m),b.render(h,f),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Gp=new On,Oh=new hs(1,1),Vp=new So,Wp=new xc,Xp=new Io,Sp=[],wp=[],Ep=new Float32Array(16),Tp=new Float32Array(9),Ap=new Float32Array(4);function Wr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function an(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function cn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function kl(n,t){let e=wp[t];e===void 0&&(e=new Int32Array(t),wp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Uv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ov(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2fv(this.addr,t),cn(e,t)}}function kv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;n.uniform3fv(this.addr,t),cn(e,t)}}function Bv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4fv(this.addr,t),cn(e,t)}}function zv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;Ap.set(i),n.uniformMatrix2fv(this.addr,!1,Ap),cn(e,i)}}function Hv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;Tp.set(i),n.uniformMatrix3fv(this.addr,!1,Tp),cn(e,i)}}function Gv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(an(e,i))return;Ep.set(i),n.uniformMatrix4fv(this.addr,!1,Ep),cn(e,i)}}function Vv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Wv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2iv(this.addr,t),cn(e,t)}}function Xv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3iv(this.addr,t),cn(e,t)}}function qv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4iv(this.addr,t),cn(e,t)}}function Yv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function $v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;n.uniform2uiv(this.addr,t),cn(e,t)}}function Zv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;n.uniform3uiv(this.addr,t),cn(e,t)}}function jv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;n.uniform4uiv(this.addr,t),cn(e,t)}}function Kv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Oh.compareFunction=e.isReversedDepthBuffer()?Pl:Il,r=Oh):r=Gp,e.setTexture2D(t||r,s)}function Jv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wp,s)}function Qv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xp,s)}function t_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vp,s)}function e_(n){switch(n){case 5126:return Uv;case 35664:return Ov;case 35665:return kv;case 35666:return Bv;case 35674:return zv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Vv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return $v;case 36295:return Zv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return t_}}function n_(n,t){n.uniform1fv(this.addr,t)}function i_(n,t){let e=Wr(t,this.size,2);n.uniform2fv(this.addr,e)}function s_(n,t){let e=Wr(t,this.size,3);n.uniform3fv(this.addr,e)}function r_(n,t){let e=Wr(t,this.size,4);n.uniform4fv(this.addr,e)}function o_(n,t){let e=Wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function a_(n,t){let e=Wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function c_(n,t){let e=Wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function l_(n,t){n.uniform1iv(this.addr,t)}function u_(n,t){n.uniform2iv(this.addr,t)}function h_(n,t){n.uniform3iv(this.addr,t)}function f_(n,t){n.uniform4iv(this.addr,t)}function d_(n,t){n.uniform1uiv(this.addr,t)}function p_(n,t){n.uniform2uiv(this.addr,t)}function m_(n,t){n.uniform3uiv(this.addr,t)}function g_(n,t){n.uniform4uiv(this.addr,t)}function y_(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Oh:o=Gp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function x_(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wp,r[o])}function b_(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xp,r[o])}function v_(n,t,e){let i=this.cache,s=t.length,r=kl(e,s);an(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function __(n){switch(n){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return f_;case 5125:return d_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return v_}}var kh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=e_(e.type)}},Bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=__(e.type)}},zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function Rp(n,t){n.seq.push(t),n.map[t.id]=t}function M_(n,t,e){let i=n.name,s=i.length;for(Fh.lastIndex=0;;){let r=Fh.exec(i),o=Fh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rp(e,l===void 0?new kh(a,n,t):new Bh(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new zh(a),Rp(e,h)),e=h}}}var Vr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);M_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Cp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var S_=37297,w_=0;function E_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Ip=new pe;function T_(n){_e._getMatrix(Ip,_e.workingColorSpace,n);let t=`mat3( ${Ip.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(n)){case vo:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Pp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+E_(n.getShaderSource(t),a)}else return r}function A_(n,t){let e=T_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var R_={[uh]:"Linear",[hh]:"Reinhard",[fh]:"Cineon",[Qo]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[dh]:"Custom"};function C_(n,t){let e=R_[t];return e===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nl=new V;function I_(){_e.getLuminanceCoefficients(Nl);let n=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function L_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function N_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ha(n){return n!==""}function Lp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Np(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(n){return n.replace(D_,U_)}var F_=new Map;function U_(n,t){let e=ye[t];if(e===void 0){let i=F_.get(t);if(i!==void 0)e=ye[i],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hh(e)}var O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dp(n){return n.replace(O_,k_)}function k_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var B_={[Vs]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function z_(n){return B_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[_s]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function G_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":H_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var V_={[Xs]:"ENVMAP_MODE_REFRACTION"};function W_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":V_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X_={[Vc]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Kd]:"ENVMAP_BLENDING_ADD"};function q_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":X_[n.combine]||"ENVMAP_BLENDING_NONE"}function Y_(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $_(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=z_(e),l=G_(e),u=W_(e),h=q_(e),f=Y_(e),d=P_(e),g=L_(r),y=s.createProgram(),p,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ha).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(p=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ye.tonemapping_pars_fragment:"",e.toneMapping!==gi?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,A_("linearToOutputTexel",e.outputColorSpace),I_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),o=Hh(o),o=Lp(o,e),o=Np(o,e),a=Hh(a),a=Lp(a,e),a=Np(a,e),o=Dp(o),a=Dp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+p+o,b=x+m+a,_=Cp(s,s.VERTEX_SHADER,v),S=Cp(s,s.FRAGMENT_SHADER,b);s.attachShader(y,_),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(I){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(_)||"",N=s.getShaderInfoLog(S)||"",k=D.trim(),B=H.trim(),W=N.trim(),it=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(it=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,_,S);else{let et=Pp(s,_,"vertex"),at=Pp(s,S,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+et+`
`+at)}else k!==""?ce("WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(j=!1);j&&(I.diagnostics={runnable:it,programLog:k,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:m}})}s.deleteShader(_),s.deleteShader(S),M=new Vr(s,y),C=N_(s,y)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(y,S_)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=_,this.fragmentShader=S,this}var Z_=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Vh(t),e.set(t,i)),i}},Vh=class{constructor(t){this.id=Z_++,this.code=t,this.usedTimes=0}};function j_(n){return n===ws||n===oa||n===aa}function K_(n,t,e,i,s,r){let o=new Er,a=new Gh,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function y(M,C,F,I,D,H){let N=I.fog,k=D.geometry,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,it=t.get(M.envMap||B,W),j=it&&it.mapping===ta?it.image.height:null,et=d[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&ce("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let at=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Et=at!==void 0?at.length:0,_t=0;k.morphAttributes.position!==void 0&&(_t=1),k.morphAttributes.normal!==void 0&&(_t=2),k.morphAttributes.color!==void 0&&(_t=3);let St,Pt,Lt,J;if(et){let le=zn[et];St=le.vertexShader,Pt=le.fragmentShader}else{St=M.vertexShader,Pt=M.fragmentShader;let le=a.getVertexShaderStage(M),re=a.getFragmentShaderStage(M);a.update(M,le,re),Lt=le.id,J=re.id}let ft=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Xt=D.isInstancedMesh===!0,Dt=D.isBatchedMesh===!0,X=!!M.map,lt=!!M.matcap,q=!!it,Q=!!M.aoMap,rt=!!M.lightMap,ht=!!M.bumpMap&&M.wireframe===!1,mt=!!M.normalMap,Tt=!!M.displacementMap,Rt=!!M.emissiveMap,Ut=!!M.metalnessMap,zt=!!M.roughnessMap,Y=M.anisotropy>0,ae=M.clearcoat>0,Gt=M.dispersion>0,z=M.retroreflectivity>0,T=M.iridescence>0,nt=M.sheen>0,dt=M.transmission>0,yt=Y&&!!M.anisotropyMap,G=ae&&!!M.clearcoatMap,w=ae&&!!M.clearcoatNormalMap,E=ae&&!!M.clearcoatRoughnessMap,A=T&&!!M.iridescenceMap,U=T&&!!M.iridescenceThicknessMap,O=nt&&!!M.sheenColorMap,K=nt&&!!M.sheenRoughnessMap,$=!!M.specularMap,ut=!!M.specularColorMap,ct=!!M.specularIntensityMap,At=dt&&!!M.transmissionMap,P=dt&&!!M.thicknessMap,Z=!!M.gradientMap,tt=!!M.alphaMap,Mt=M.alphaTest>0,wt=!!M.alphaHash,bt=!!M.extensions,Ft=gi;M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let Ot={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:St,fragmentShader:Pt,defines:M.defines,customVertexShaderID:Lt,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&D._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&D.instanceColor!==null,instancingMorph:Xt&&D.morphTexture!==null,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:X,matcap:lt,envMap:q,envMapMode:q&&it.mapping,envMapCubeUVHeight:j,aoMap:Q,lightMap:rt,bumpMap:ht,normalMap:mt,displacementMap:Tt,emissiveMap:Rt,normalMapObjectSpace:mt&&M.normalMapType===tp,normalMapTangentSpace:mt&&M.normalMapType===ca,packedNormalMap:mt&&M.normalMapType===ca&&j_(M.normalMap.format),metalnessMap:Ut,roughnessMap:zt,anisotropy:Y,anisotropyMap:yt,clearcoat:ae,clearcoatMap:G,clearcoatNormalMap:w,clearcoatRoughnessMap:E,dispersion:Gt,retroreflection:z,iridescence:T,iridescenceMap:A,iridescenceThicknessMap:U,sheen:nt,sheenColorMap:O,sheenRoughnessMap:K,specularMap:$,specularColorMap:ut,specularIntensityMap:ct,transmission:dt,transmissionMap:At,thicknessMap:P,gradientMap:Z,opaque:M.transparent===!1&&M.blending===kr&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:Mt,alphaHash:wt,combine:M.combine,mapUv:X&&g(M.map.channel),aoMapUv:Q&&g(M.aoMap.channel),lightMapUv:rt&&g(M.lightMap.channel),bumpMapUv:ht&&g(M.bumpMap.channel),normalMapUv:mt&&g(M.normalMap.channel),displacementMapUv:Tt&&g(M.displacementMap.channel),emissiveMapUv:Rt&&g(M.emissiveMap.channel),metalnessMapUv:Ut&&g(M.metalnessMap.channel),roughnessMapUv:zt&&g(M.roughnessMap.channel),anisotropyMapUv:yt&&g(M.anisotropyMap.channel),clearcoatMapUv:G&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:A&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:U&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:O&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:K&&g(M.sheenRoughnessMap.channel),specularMapUv:$&&g(M.specularMap.channel),specularColorMapUv:ut&&g(M.specularColorMap.channel),specularIntensityMapUv:ct&&g(M.specularIntensityMap.channel),transmissionMapUv:At&&g(M.transmissionMap.channel),thicknessMapUv:P&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(mt||Y),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(X||tt),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&mt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:_t,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:X&&M.map.isVideoTexture===!0&&_e.getTransfer(M.map.colorSpace)===Pe,decodeVideoTextureEmissive:Rt&&M.emissiveMap.isVideoTexture===!0&&_e.getTransfer(M.emissiveMap.colorSpace)===Pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===kn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:bt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&M.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(M){let C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)C.push(F),C.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(m(C,M),x(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function m(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function x(M,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let C=d[M.type],F;if(C){let I=zn[C];F=Zi.clone(I.uniforms)}else F=M.uniforms;return F}function b(M,C){let F=u.get(C);return F!==void 0?++F.usedTimes:(F=new $_(n,C,M,s),l.push(F),u.set(C,F)),F}function _(M){if(--M.usedTimes===0){let C=l.indexOf(M);l[C]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:l,dispose:R}}function J_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Q_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Up(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Op(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,y,p,m){let x=n[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},n[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=g,x.materialVariant=o(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=p,x.group=m),t++,x}function c(f,d,g,y,p,m,x){x.reversedDepth===!0&&(p=-p);let v=a(f,d,g,y,p,m);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):e.push(v)}function l(f,d,g,y,p,m){let x=a(f,d,g,y,p,m);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||Q_),i.length>1&&i.sort(d||Up),s.length>1&&s.sort(d||Up)}function h(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function tM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Op,n.set(i,[o])):s>=r.length?(o=new Op,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function eM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Yt};break;case"SpotLight":e={position:new V,direction:new V,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function nM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var iM=0;function sM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function rM(n){let t=new eM,e=nM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new V);let s=new V,r=new Me,o=new Me;function a(l){let u=0,h=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,x=0,v=0,b=0,_=0,S=0,R=0,M=0,C=0,F=0;l.sort(sM);for(let D=0,H=l.length;D<H;D++){let N=l[D],k=N.color,B=N.intensity,W=N.distance,it=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ws?it=N.shadow.map.texture:it=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*B,h+=k.g*B,f+=k.b*B;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],B);F++}else if(N.isSunLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let et=N.shadow,at=e.get(N);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[g]=at,i.sunShadowMap[g]=it;let Et=et.getViewportCount();for(let _t=0;_t<Et;_t++)i.sunShadowMatrix[y+_t]=et.getMatrix(_t),i.sunShadowCascade[y+_t]=et._cascadeData[_t];y+=Et,g++}i.sun[d]=j,d++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let et=N.shadow,at=e.get(N);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,i.directionalShadow[p]=at,i.directionalShadowMap[p]=it,i.directionalShadowMatrix[p]=N.shadow.matrix,_++}i.directional[p]=j,p++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(B),j.distance=W,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[x]=j;let et=N.shadow;if(N.map&&(i.spotLightMap[M]=N.map,M++,et.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[x]=et.matrix,N.castShadow){let at=e.get(N);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,i.spotShadow[x]=at,i.spotShadowMap[x]=it,R++}x++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(k).multiplyScalar(B),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=j,v++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let et=N.shadow,at=e.get(N);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,at.shadowCameraNear=et.camera.near,at.shadowCameraFar=et.camera.far,i.pointShadow[m]=at,i.pointShadowMap[m]=it,i.pointShadowMatrix[m]=N.shadow.matrix,S++}i.point[m]=j,m++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(B),j.groundColor.copy(N.groundColor).multiplyScalar(B),i.hemi[b]=j,b++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let I=i.hash;(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==v||I.hemiLength!==b||I.numSunShadows!==g||I.numDirectionalShadows!==_||I.numPointShadows!==S||I.numSpotShadows!==R||I.numSpotMaps!==M||I.numLightProbes!==F)&&(i.sun.length=d,i.directional.length=p,i.spot.length=x,i.rectArea.length=v,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+M-C,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=F,I.sunLength=d,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=v,I.hemiLength=b,I.numSunShadows=g,I.numDirectionalShadows=_,I.numPointShadows=S,I.numSpotShadows=R,I.numSpotMaps=M,I.numLightProbes=F,i.version=iM++)}function c(l,u){let h=0,f=0,d=0,g=0,y=0,p=0,m=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let b=l[x];if(b.isSunLight){let _=i.sun[h];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),h++}else if(b.isDirectionalLight){let _=i.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(b.isSpotLight){let _=i.spot[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let _=i.rectArea[y];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:i}}function kp(n){let t=new rM(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function oM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new kp(n),t.set(s,[a])):r>=o.length?(a=new kp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
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
}`,lM=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],uM=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Bp=new Me,ua=new V,Uh=new V;function hM(n,t,e){let i=new Rr,s=new Nt,r=new Nt,o=new Le,a=new Cc,c=new Ic,l={},u=e.maxTextureSize,h={[vs]:kn,[kn]:vs,[tn]:tn},f=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:aM,fragmentShader:cM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ue(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let m=this.type;this.render=function(S,R,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Pd&&(ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);let C=n.getRenderTarget(),F=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Li),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=m!==this.type;H&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=S.length;N<k;N++){let B=S[N],W=B.shadow;if(W===void 0){ce("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();s.multiply(it),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,W.mapSize.y=r.y));let j=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=j,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Or){if(B.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Vn(s.x,s.y,{format:ws,type:xi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new hs(s.x,s.y,si),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=Ci,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=pn,W.map.depthTexture.magFilter=pn}else B.isPointLight?(W.map=new Fl(s.x),W.map.depthTexture=new Mc(s.x,yi)):(W.map=new Vn(s.x,s.y),W.map.depthTexture=new hs(s.x,s.y,yi)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=Ci,this.type===Vs?(W.map.depthTexture.compareFunction=j?Pl:Il,W.map.depthTexture.minFilter=xn,W.map.depthTexture.magFilter=xn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=pn,W.map.depthTexture.magFilter=pn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let et=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,M);for(let at=0;at<et;at++){let Et=W.getCamera(at);if(B.isPointLight){let _t=W.camera,St=W.matrix,Pt=B.distance||_t.far;Pt!==_t.far&&(_t.far=Pt,_t.updateProjectionMatrix()),ua.setFromMatrixPosition(B.matrixWorld),_t.position.copy(ua),Uh.copy(_t.position),Uh.add(lM[at]),_t.up.copy(uM[at]),_t.lookAt(Uh),_t.updateMatrixWorld(),St.makeTranslation(-ua.x,-ua.y,-ua.z),Bp.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Bp,_t.coordinateSystem,_t.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,at),n.clear();else{at===0&&(n.setRenderTarget(W.map),n.clear());let _t=W.getViewport(at);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),D.viewport(o)}i=W.getFrustum(at),b(R,M,Et,B,this.type)}W.isPointLightShadow!==!0&&this.type===Or&&x(W,M),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(C,F,I)};function x(S,R){let M=t.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new Vn(s.x,s.y,{format:ws,type:xi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,M,f,y,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,M,d,y,null)}function v(S,R,M,C){let F=null,I=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)F=I;else if(F=M.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=F.uuid,H=R.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let k=N[H];k===void 0&&(k=F.clone(),N[H]=k,R.addEventListener("dispose",_)),F=k}if(F.visible=R.visible,F.wireframe=R.wireframe,C===Or?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:h[R.side],F.alphaMap=R.alphaMap,F.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,F.map=R.map,F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.displacementMap=R.displacementMap,F.displacementScale=R.displacementScale,F.displacementBias=R.displacementBias,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,M.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let D=n.properties.get(F);D.light=M}return F}function b(S,R,M,C,F){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&F===Or)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let H=t.update(S),N=S.material;if(Array.isArray(N)){let k=H.groups;for(let B=0,W=k.length;B<W;B++){let it=k[B],j=N[it.materialIndex];if(j&&j.visible){let et=v(S,j,C,F);S.onBeforeShadow(n,S,R,M,H,et,it),n.renderBufferDirect(M,null,H,et,S,it),S.onAfterShadow(n,S,R,M,H,et,it)}}}else if(N.visible){let k=v(S,N,C,F);S.onBeforeShadow(n,S,R,M,H,k,null),n.renderBufferDirect(M,null,H,k,S,null),S.onAfterShadow(n,S,R,M,H,k,null)}}let D=S.children;for(let H=0,N=D.length;H<N;H++)b(D[H],R,M,C,F)}function _(S){S.target.removeEventListener("dispose",_);for(let M in l){let C=l[M],F=S.target.uuid;F in C&&(C[F].dispose(),delete C[F])}}}function fM(n,t){function e(){let P=!1,Z=new Le,tt=null,Mt=new Le(0,0,0,0);return{setMask:function(wt){tt!==wt&&!P&&(n.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){P=wt},setClear:function(wt,bt,Ft,Ot,le){le===!0&&(wt*=Ot,bt*=Ot,Ft*=Ot),Z.set(wt,bt,Ft,Ot),Mt.equals(Z)===!1&&(n.clearColor(wt,bt,Ft,Ot),Mt.copy(Z))},reset:function(){P=!1,tt=null,Mt.set(-1,0,0,0)}}}function i(){let P=!1,Z=!1,tt=null,Mt=null,wt=null;return{setReversed:function(bt){if(Z!==bt){let Ft=t.get("EXT_clip_control");bt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Z=bt;let Ot=wt;wt=null,this.setClear(Ot)}},getReversed:function(){return Z},setTest:function(bt){bt?ft(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(bt){tt!==bt&&!P&&(n.depthMask(bt),tt=bt)},setFunc:function(bt){if(Z&&(bt=hp[bt]),Mt!==bt){switch(bt){case ac:n.depthFunc(n.NEVER);break;case cc:n.depthFunc(n.ALWAYS);break;case lc:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case uc:n.depthFunc(n.EQUAL);break;case hc:n.depthFunc(n.GEQUAL);break;case fc:n.depthFunc(n.GREATER);break;case dc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=bt}},setLocked:function(bt){P=bt},setClear:function(bt){wt!==bt&&(wt=bt,Z&&(bt=1-bt),n.clearDepth(bt))},reset:function(){P=!1,tt=null,Mt=null,wt=null,Z=!1}}}function s(){let P=!1,Z=null,tt=null,Mt=null,wt=null,bt=null,Ft=null,Ot=null,le=null;return{setTest:function(re){P||(re?ft(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(re){Z!==re&&!P&&(n.stencilMask(re),Z=re)},setFunc:function(re,Se,Ee){(tt!==re||Mt!==Se||wt!==Ee)&&(n.stencilFunc(re,Se,Ee),tt=re,Mt=Se,wt=Ee)},setOp:function(re,Se,Ee){(bt!==re||Ft!==Se||Ot!==Ee)&&(n.stencilOp(re,Se,Ee),bt=re,Ft=Se,Ot=Ee)},setLocked:function(re){P=re},setClear:function(re){le!==re&&(n.clearStencil(re),le=re)},reset:function(){P=!1,Z=null,tt=null,Mt=null,wt=null,bt=null,Ft=null,Ot=null,le=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,x=null,v=null,b=null,_=null,S=null,R=null,M=new Yt(0,0,0),C=0,F=!1,I=null,D=null,H=null,N=null,k=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=it>=1):j.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=it>=2);let et=null,at={},Et=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),St=new Le().fromArray(Et),Pt=new Le().fromArray(_t);function Lt(P,Z,tt,Mt){let wt=new Uint8Array(4),bt=n.createTexture();n.bindTexture(P,bt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<tt;Ft++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(Z+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return bt}let J={};J[n.TEXTURE_2D]=Lt(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(n.DEPTH_TEST),o.setFunc(vr),ht(!1),mt(rh),ft(n.CULL_FACE),Q(Li);function ft(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Ct(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Xt(P,Z){return f[P]!==Z?(n.bindFramebuffer(P,Z),f[P]=Z,P===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Z),P===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Dt(P,Z){let tt=g,Mt=!1;if(P){tt=d.get(Z),tt===void 0&&(tt=[],d.set(Z,tt));let wt=P.textures;if(tt.length!==wt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Ft=wt.length;bt<Ft;bt++)tt[bt]=n.COLOR_ATTACHMENT0+bt;tt.length=wt.length,Mt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(tt)}function X(P){return y!==P?(n.useProgram(P),y=P,!0):!1}let lt={[Ws]:n.FUNC_ADD,[Nd]:n.FUNC_SUBTRACT,[Dd]:n.FUNC_REVERSE_SUBTRACT};lt[Fd]=n.MIN,lt[Ud]=n.MAX;let q={[Od]:n.ZERO,[kd]:n.ONE,[Bd]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Xd]:n.SRC_ALPHA_SATURATE,[Vd]:n.DST_COLOR,[Hd]:n.DST_ALPHA,[zd]:n.ONE_MINUS_SRC_COLOR,[lh]:n.ONE_MINUS_SRC_ALPHA,[Wd]:n.ONE_MINUS_DST_COLOR,[Gd]:n.ONE_MINUS_DST_ALPHA,[qd]:n.CONSTANT_COLOR,[Yd]:n.ONE_MINUS_CONSTANT_COLOR,[$d]:n.CONSTANT_ALPHA,[Zd]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(P,Z,tt,Mt,wt,bt,Ft,Ot,le,re){if(P===Li){p===!0&&(Ct(n.BLEND),p=!1);return}if(p===!1&&(ft(n.BLEND),p=!0),P!==Ld){if(P!==m||re!==F){if((x!==Ws||_!==Ws)&&(n.blendEquation(n.FUNC_ADD),x=Ws,_=Ws),re)switch(P){case kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yi:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ah:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",P);break}else switch(P){case kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oh:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",P);break}v=null,b=null,S=null,R=null,M.set(0,0,0),C=0,m=P,F=re}return}wt=wt||Z,bt=bt||tt,Ft=Ft||Mt,(Z!==x||wt!==_)&&(n.blendEquationSeparate(lt[Z],lt[wt]),x=Z,_=wt),(tt!==v||Mt!==b||bt!==S||Ft!==R)&&(n.blendFuncSeparate(q[tt],q[Mt],q[bt],q[Ft]),v=tt,b=Mt,S=bt,R=Ft),(Ot.equals(M)===!1||le!==C)&&(n.blendColor(Ot.r,Ot.g,Ot.b,le),M.copy(Ot),C=le),m=P,F=!1}function rt(P,Z){P.side===tn?Ct(n.CULL_FACE):ft(n.CULL_FACE);let tt=P.side===kn;Z&&(tt=!tt),ht(tt),P.blending===kr&&P.transparent===!1?Q(Li):Q(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let Mt=P.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Rt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(P){I!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),I=P)}function mt(P){P!==Cd?(ft(n.CULL_FACE),P!==D&&(P===rh?n.cullFace(n.BACK):P===Id?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),D=P}function Tt(P){P!==H&&(W&&n.lineWidth(P),H=P)}function Rt(P,Z,tt){P?(ft(n.POLYGON_OFFSET_FILL),(N!==Z||k!==tt)&&(N=Z,k=tt,o.getReversed()&&(Z=-Z),n.polygonOffset(Z,tt))):Ct(n.POLYGON_OFFSET_FILL)}function Ut(P){P?ft(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function zt(P){P===void 0&&(P=n.TEXTURE0+B-1),et!==P&&(n.activeTexture(P),et=P)}function Y(P,Z,tt){tt===void 0&&(et===null?tt=n.TEXTURE0+B-1:tt=et);let Mt=at[tt];Mt===void 0&&(Mt={type:void 0,texture:void 0},at[tt]=Mt),(Mt.type!==P||Mt.texture!==Z)&&(et!==tt&&(n.activeTexture(tt),et=tt),n.bindTexture(P,Z||J[P]),Mt.type=P,Mt.texture=Z)}function ae(){let P=at[et];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Gt(){try{n.compressedTexImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function T(){try{n.texSubImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function nt(){try{n.texSubImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function dt(){try{n.compressedTexSubImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function yt(){try{n.compressedTexSubImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function G(){try{n.texStorage2D(...arguments)}catch(P){he("WebGLState:",P)}}function w(){try{n.texStorage3D(...arguments)}catch(P){he("WebGLState:",P)}}function E(){try{n.texImage2D(...arguments)}catch(P){he("WebGLState:",P)}}function A(){try{n.texImage3D(...arguments)}catch(P){he("WebGLState:",P)}}function U(P){return h[P]!==void 0?h[P]:n.getParameter(P)}function O(P,Z){h[P]!==Z&&(n.pixelStorei(P,Z),h[P]=Z)}function K(P){St.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),St.copy(P))}function $(P){Pt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Pt.copy(P))}function ut(P,Z){let tt=l.get(Z);tt===void 0&&(tt=new WeakMap,l.set(Z,tt));let Mt=tt.get(P);Mt===void 0&&(Mt=n.getUniformBlockIndex(Z,P.name),tt.set(P,Mt))}function ct(P,Z){let Mt=l.get(Z).get(P);c.get(Z)!==Mt&&(n.uniformBlockBinding(Z,Mt,P.__bindingPointIndex),c.set(Z,Mt))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},et=null,at={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,x=null,v=null,b=null,_=null,S=null,R=null,M=new Yt(0,0,0),C=0,F=!1,I=null,D=null,H=null,N=null,k=null,St.set(0,0,n.canvas.width,n.canvas.height),Pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Ct,bindFramebuffer:Xt,drawBuffers:Dt,useProgram:X,setBlending:Q,setMaterial:rt,setFlipSided:ht,setCullFace:mt,setLineWidth:Tt,setPolygonOffset:Rt,setScissorTest:Ut,activeTexture:zt,bindTexture:Y,unbindTexture:ae,compressedTexImage2D:Gt,compressedTexImage3D:z,texImage2D:E,texImage3D:A,pixelStorei:O,getParameter:U,updateUBOMapping:ut,uniformBlockBinding:ct,texStorage2D:G,texStorage3D:w,texSubImage2D:T,texSubImage3D:nt,compressedTexSubImage2D:dt,compressedTexSubImage3D:yt,scissor:K,viewport:$,reset:At}}function dM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,u=new WeakMap,h=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(z,T){return g?new OffscreenCanvas(z,T):_o("canvas")}function p(z,T,nt){let dt=1,yt=Gt(z);if((yt.width>nt||yt.height>nt)&&(dt=nt/Math.max(yt.width,yt.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let G=Math.floor(dt*yt.width),w=Math.floor(dt*yt.height);f===void 0&&(f=y(G,w));let E=T?y(G,w):f;return E.width=G,E.height=w,E.getContext("2d").drawImage(z,0,0,G,w),ce("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+G+"x"+w+")."),E}else return"data"in z&&ce("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),z;return z}function m(z){return z.generateMipmaps}function x(z){n.generateMipmap(z)}function v(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(z,T,nt,dt,yt,G=!1){if(z!==null){if(n[z]!==void 0)return n[z];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let w;dt&&(w=t.get("EXT_texture_norm16"),w||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=T;if(T===n.RED&&(nt===n.FLOAT&&(E=n.R32F),nt===n.HALF_FLOAT&&(E=n.R16F),nt===n.UNSIGNED_BYTE&&(E=n.R8),nt===n.UNSIGNED_SHORT&&w&&(E=w.R16_EXT),nt===n.SHORT&&w&&(E=w.R16_SNORM_EXT)),T===n.RED_INTEGER&&(nt===n.UNSIGNED_BYTE&&(E=n.R8UI),nt===n.UNSIGNED_SHORT&&(E=n.R16UI),nt===n.UNSIGNED_INT&&(E=n.R32UI),nt===n.BYTE&&(E=n.R8I),nt===n.SHORT&&(E=n.R16I),nt===n.INT&&(E=n.R32I)),T===n.RG&&(nt===n.FLOAT&&(E=n.RG32F),nt===n.HALF_FLOAT&&(E=n.RG16F),nt===n.UNSIGNED_BYTE&&(E=n.RG8),nt===n.UNSIGNED_SHORT&&w&&(E=w.RG16_EXT),nt===n.SHORT&&w&&(E=w.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(nt===n.UNSIGNED_BYTE&&(E=n.RG8UI),nt===n.UNSIGNED_SHORT&&(E=n.RG16UI),nt===n.UNSIGNED_INT&&(E=n.RG32UI),nt===n.BYTE&&(E=n.RG8I),nt===n.SHORT&&(E=n.RG16I),nt===n.INT&&(E=n.RG32I)),T===n.RGB_INTEGER&&(nt===n.UNSIGNED_BYTE&&(E=n.RGB8UI),nt===n.UNSIGNED_SHORT&&(E=n.RGB16UI),nt===n.UNSIGNED_INT&&(E=n.RGB32UI),nt===n.BYTE&&(E=n.RGB8I),nt===n.SHORT&&(E=n.RGB16I),nt===n.INT&&(E=n.RGB32I)),T===n.RGBA_INTEGER&&(nt===n.UNSIGNED_BYTE&&(E=n.RGBA8UI),nt===n.UNSIGNED_SHORT&&(E=n.RGBA16UI),nt===n.UNSIGNED_INT&&(E=n.RGBA32UI),nt===n.BYTE&&(E=n.RGBA8I),nt===n.SHORT&&(E=n.RGBA16I),nt===n.INT&&(E=n.RGBA32I)),T===n.RGB&&(nt===n.UNSIGNED_SHORT&&w&&(E=w.RGB16_EXT),nt===n.SHORT&&w&&(E=w.RGB16_SNORM_EXT),nt===n.UNSIGNED_INT_5_9_9_9_REV&&(E=n.RGB9_E5),nt===n.UNSIGNED_INT_10F_11F_11F_REV&&(E=n.R11F_G11F_B10F)),T===n.RGBA){let A=G?vo:_e.getTransfer(yt);nt===n.FLOAT&&(E=n.RGBA32F),nt===n.HALF_FLOAT&&(E=n.RGBA16F),nt===n.UNSIGNED_BYTE&&(E=A===Pe?n.SRGB8_ALPHA8:n.RGBA8),nt===n.UNSIGNED_SHORT&&w&&(E=w.RGBA16_EXT),nt===n.SHORT&&w&&(E=w.RGBA16_SNORM_EXT),nt===n.UNSIGNED_SHORT_4_4_4_4&&(E=n.RGBA4),nt===n.UNSIGNED_SHORT_5_5_5_1&&(E=n.RGB5_A1)}return(E===n.R16F||E===n.R32F||E===n.RG16F||E===n.RG32F||E===n.RGBA16F||E===n.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function _(z,T){let nt;return z?T===null||T===yi||T===zr?nt=n.DEPTH24_STENCIL8:T===si?nt=n.DEPTH32F_STENCIL8:T===Br&&(nt=n.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yi||T===zr?nt=n.DEPTH_COMPONENT24:T===si?nt=n.DEPTH_COMPONENT32F:T===Br&&(nt=n.DEPTH_COMPONENT16),nt}function S(z,T){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==pn&&z.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function R(z){let T=z.target;T.removeEventListener("dispose",R),C(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function M(z){let T=z.target;T.removeEventListener("dispose",M),I(T)}function C(z){let T=i.get(z);if(T.__webglInit===void 0)return;let nt=z.source,dt=d.get(nt);if(dt){let yt=dt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&F(z),Object.keys(dt).length===0&&d.delete(nt)}i.remove(z)}function F(z){let T=i.get(z);n.deleteTexture(T.__webglTexture);let nt=z.source,dt=d.get(nt);delete dt[T.__cacheKey],o.memory.textures--}function I(z){let T=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let yt=0;yt<T.__webglFramebuffer[dt].length;yt++)n.deleteFramebuffer(T.__webglFramebuffer[dt][yt]);else n.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)n.deleteFramebuffer(T.__webglFramebuffer[dt]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let nt=z.textures;for(let dt=0,yt=nt.length;dt<yt;dt++){let G=i.get(nt[dt]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(nt[dt])}i.remove(z)}let D=0;function H(){D=0}function N(){return D}function k(z){D=z}function B(){let z=D;return z>=s.maxTextures&&ce("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,z}function W(z){let T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function it(z,T){let nt=i.get(z);if(z.isVideoTexture&&Y(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&nt.__version!==z.version){let dt=z.image;if(dt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(nt,z,T);return}}else z.isExternalTexture&&(nt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture,n.TEXTURE0+T)}function j(z,T){let nt=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){Ct(nt,z,T);return}else z.isExternalTexture&&(nt.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,nt.__webglTexture,n.TEXTURE0+T)}function et(z,T){let nt=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&nt.__version!==z.version){Ct(nt,z,T);return}e.bindTexture(n.TEXTURE_3D,nt.__webglTexture,n.TEXTURE0+T)}function at(z,T){let nt=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&nt.__version!==z.version){Xt(nt,z,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture,n.TEXTURE0+T)}let Et={[Us]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},_t={[pn]:n.NEAREST,[Jd]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[xn]:n.LINEAR,[qc]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},St={[np]:n.NEVER,[ap]:n.ALWAYS,[ip]:n.LESS,[Il]:n.LEQUAL,[sp]:n.EQUAL,[Pl]:n.GEQUAL,[rp]:n.GREATER,[op]:n.NOTEQUAL};function Pt(z,T){if(T.type===si&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===qc||T.magFilter===ea||T.magFilter===Ms||T.minFilter===xn||T.minFilter===qc||T.minFilter===ea||T.minFilter===Ms)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,Et[T.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,Et[T.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,Et[T.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,_t[T.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,St[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pn||T.minFilter!==ea&&T.minFilter!==Ms||T.type===si&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Lt(z,T){let nt=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",R));let dt=T.source,yt=d.get(dt);yt===void 0&&(yt={},d.set(dt,yt));let G=W(T);if(G!==z.__cacheKey){yt[G]===void 0&&(yt[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),yt[G].usedTimes++;let w=yt[z.__cacheKey];w!==void 0&&(yt[z.__cacheKey].usedTimes--,w.usedTimes===0&&F(T)),z.__cacheKey=G,z.__webglTexture=yt[G].texture}return nt}function J(z,T,nt){return Math.floor(Math.floor(z/nt)/T)}function ft(z,T,nt,dt){let G=z.updateRanges;if(G.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,nt,dt,T.data);else{G.sort((O,K)=>O.start-K.start);let w=0;for(let O=1;O<G.length;O++){let K=G[w],$=G[O],ut=K.start+K.count,ct=J($.start,T.width,4),At=J(K.start,T.width,4);$.start<=ut+1&&ct===At&&J($.start+$.count-1,T.width,4)===ct?K.count=Math.max(K.count,$.start+$.count-K.start):(++w,G[w]=$)}G.length=w+1;let E=e.getParameter(n.UNPACK_ROW_LENGTH),A=e.getParameter(n.UNPACK_SKIP_PIXELS),U=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let O=0,K=G.length;O<K;O++){let $=G[O],ut=Math.floor($.start/4),ct=Math.ceil($.count/4),At=ut%T.width,P=Math.floor(ut/T.width),Z=ct,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,At),e.pixelStorei(n.UNPACK_SKIP_ROWS,P),e.texSubImage2D(n.TEXTURE_2D,0,At,P,Z,tt,nt,dt,T.data)}z.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,E),e.pixelStorei(n.UNPACK_SKIP_PIXELS,A),e.pixelStorei(n.UNPACK_SKIP_ROWS,U)}}function Ct(z,T,nt){let dt=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=n.TEXTURE_3D);let yt=Lt(z,T),G=T.source;e.bindTexture(dt,z.__webglTexture,n.TEXTURE0+nt);let w=i.get(G);if(G.version!==w.__version||yt===!0){if(e.activeTexture(n.TEXTURE0+nt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let tt=_e.getPrimaries(_e.workingColorSpace),Mt=T.colorSpace===$i?null:_e.getPrimaries(T.colorSpace),wt=T.colorSpace===$i||tt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let A=p(T.image,!1,s.maxTextureSize);A=ae(T,A);let U=r.convert(T.format,T.colorSpace),O=r.convert(T.type),K=b(T.internalFormat,U,O,T.normalized,T.colorSpace,T.isVideoTexture);Pt(dt,T);let $,ut=T.mipmaps,ct=T.isVideoTexture!==!0,At=w.__version===void 0||yt===!0,P=G.dataReady,Z=S(T,A);if(T.isDepthTexture)K=_(T.format===Ss,T.type),At&&(ct?e.texStorage2D(n.TEXTURE_2D,1,K,A.width,A.height):e.texImage2D(n.TEXTURE_2D,0,K,A.width,A.height,0,U,O,null));else if(T.isDataTexture)if(ut.length>0){ct&&At&&e.texStorage2D(n.TEXTURE_2D,Z,K,ut[0].width,ut[0].height);for(let tt=0,Mt=ut.length;tt<Mt;tt++)$=ut[tt],ct?P&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,$.width,$.height,U,O,$.data):e.texImage2D(n.TEXTURE_2D,tt,K,$.width,$.height,0,U,O,$.data);T.generateMipmaps=!1}else ct?(At&&e.texStorage2D(n.TEXTURE_2D,Z,K,A.width,A.height),P&&ft(T,A,U,O)):e.texImage2D(n.TEXTURE_2D,0,K,A.width,A.height,0,U,O,A.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ct&&At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Z,K,ut[0].width,ut[0].height,A.depth);for(let tt=0,Mt=ut.length;tt<Mt;tt++)if($=ut[tt],T.format!==ri)if(U!==null)if(ct){if(P)if(T.layerUpdates.size>0){let wt=Ih($.width,$.height,T.format,T.type);for(let bt of T.layerUpdates){let Ft=$.data.subarray(bt*wt/$.data.BYTES_PER_ELEMENT,(bt+1)*wt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,bt,$.width,$.height,1,U,Ft)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,$.width,$.height,A.depth,U,$.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,K,$.width,$.height,A.depth,0,$.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,$.width,$.height,A.depth,U,O,$.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,K,$.width,$.height,A.depth,0,U,O,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ct&&At&&e.texStorage2D(n.TEXTURE_2D,Z,K,ut[0].width,ut[0].height);for(let tt=0,Mt=ut.length;tt<Mt;tt++)$=ut[tt],T.format!==ri?U!==null?ct?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,$.width,$.height,U,$.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,K,$.width,$.height,0,$.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?P&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,$.width,$.height,U,O,$.data):e.texImage2D(n.TEXTURE_2D,tt,K,$.width,$.height,0,U,O,$.data)}else if(T.isDataArrayTexture)if(ct){if(At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Z,K,A.width,A.height,A.depth),P)if(T.layerUpdates.size>0){let tt=Ih(A.width,A.height,T.format,T.type);for(let Mt of T.layerUpdates){let wt=A.data.subarray(Mt*tt/A.data.BYTES_PER_ELEMENT,(Mt+1)*tt/A.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,A.width,A.height,1,U,O,wt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,U,O,A.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,K,A.width,A.height,A.depth,0,U,O,A.data);else if(T.isData3DTexture)ct?(At&&e.texStorage3D(n.TEXTURE_3D,Z,K,A.width,A.height,A.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,U,O,A.data)):e.texImage3D(n.TEXTURE_3D,0,K,A.width,A.height,A.depth,0,U,O,A.data);else if(T.isFramebufferTexture){if(At)if(ct)e.texStorage2D(n.TEXTURE_2D,Z,K,A.width,A.height);else{let tt=A.width,Mt=A.height;for(let wt=0;wt<Z;wt++)e.texImage2D(n.TEXTURE_2D,wt,K,tt,Mt,0,U,O,null),tt>>=1,Mt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),A.parentNode!==tt){tt.appendChild(A),h.add(T),tt.onpaint=Mt=>{let wt=Mt.changedElements;for(let bt of h)wt.includes(bt.image)&&(bt.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,A);else{let wt=n.RGBA,bt=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,wt,bt,Ft,A)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ct&&At){let tt=Gt(ut[0]);e.texStorage2D(n.TEXTURE_2D,Z,K,tt.width,tt.height)}for(let tt=0,Mt=ut.length;tt<Mt;tt++)$=ut[tt],ct?P&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,U,O,$):e.texImage2D(n.TEXTURE_2D,tt,K,U,O,$);T.generateMipmaps=!1}else if(ct){if(At){let tt=Gt(A);e.texStorage2D(n.TEXTURE_2D,Z,K,tt.width,tt.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,U,O,A)}else e.texImage2D(n.TEXTURE_2D,0,K,U,O,A);m(T)&&x(dt),w.__version=G.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function Xt(z,T,nt){if(T.image.length!==6)return;let dt=Lt(z,T),yt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+nt);let G=i.get(yt);if(yt.version!==G.__version||dt===!0){e.activeTexture(n.TEXTURE0+nt);let w=_e.getPrimaries(_e.workingColorSpace),E=T.colorSpace===$i?null:_e.getPrimaries(T.colorSpace),A=T.colorSpace===$i||w===E?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let U=T.isCompressedTexture||T.image[0].isCompressedTexture,O=T.image[0]&&T.image[0].isDataTexture,K=[];for(let bt=0;bt<6;bt++)!U&&!O?K[bt]=p(T.image[bt],!0,s.maxCubemapSize):K[bt]=O?T.image[bt].image:T.image[bt],K[bt]=ae(T,K[bt]);let $=K[0],ut=r.convert(T.format,T.colorSpace),ct=r.convert(T.type),At=b(T.internalFormat,ut,ct,T.normalized,T.colorSpace),P=T.isVideoTexture!==!0,Z=G.__version===void 0||dt===!0,tt=yt.dataReady,Mt=S(T,$);Pt(n.TEXTURE_CUBE_MAP,T);let wt;if(U){P&&Z&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,At,$.width,$.height);for(let bt=0;bt<6;bt++){wt=K[bt].mipmaps;for(let Ft=0;Ft<wt.length;Ft++){let Ot=wt[Ft];T.format!==ri?ut!==null?P?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,0,0,Ot.width,Ot.height,ut,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,At,Ot.width,Ot.height,0,Ot.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,0,0,Ot.width,Ot.height,ut,ct,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft,At,Ot.width,Ot.height,0,ut,ct,Ot.data)}}}else{if(wt=T.mipmaps,P&&Z){wt.length>0&&Mt++;let bt=Gt(K[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,At,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(O){P?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,K[bt].width,K[bt].height,ut,ct,K[bt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,At,K[bt].width,K[bt].height,0,ut,ct,K[bt].data);for(let Ft=0;Ft<wt.length;Ft++){let le=wt[Ft].image[bt].image;P?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,0,0,le.width,le.height,ut,ct,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,At,le.width,le.height,0,ut,ct,le.data)}}else{P?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ut,ct,K[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,At,ut,ct,K[bt]);for(let Ft=0;Ft<wt.length;Ft++){let Ot=wt[Ft];P?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,0,0,ut,ct,Ot.image[bt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Ft+1,At,ut,ct,Ot.image[bt])}}}m(T)&&x(n.TEXTURE_CUBE_MAP),G.__version=yt.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function Dt(z,T,nt,dt,yt,G){let w=r.convert(nt.format,nt.colorSpace),E=r.convert(nt.type),A=b(nt.internalFormat,w,E,nt.normalized,nt.colorSpace),U=i.get(T),O=i.get(nt);if(O.__renderTarget=T,!U.__hasExternalTextures){let K=Math.max(1,T.width>>G),$=Math.max(1,T.height>>G);yt===n.TEXTURE_3D||yt===n.TEXTURE_2D_ARRAY?e.texImage3D(yt,G,A,K,$,T.depth,0,w,E,null):e.texImage2D(yt,G,A,K,$,0,w,E,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),zt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,yt,O.__webglTexture,0,Ut(T)):(yt===n.TEXTURE_2D||yt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,dt,yt,O.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function X(z,T,nt){if(n.bindRenderbuffer(n.RENDERBUFFER,z),T.depthBuffer){let dt=T.depthTexture,yt=dt&&dt.isDepthTexture?dt.type:null,G=_(T.stencilBuffer,yt),w=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;zt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(T),G,T.width,T.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(T),G,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,G,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,z)}else{let dt=T.textures;for(let yt=0;yt<dt.length;yt++){let G=dt[yt],w=r.convert(G.format,G.colorSpace),E=r.convert(G.type),A=b(G.internalFormat,w,E,G.normalized,G.colorSpace);zt(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut(T),A,T.width,T.height):nt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut(T),A,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,A,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(z,T,nt){let dt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let yt=i.get(T.depthTexture);if(yt.__renderTarget=T,(!yt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),dt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),yt.__webglTexture===void 0){yt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,yt.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,T.depthTexture);let U=r.convert(T.depthTexture.format),O=r.convert(T.depthTexture.type),K;T.depthTexture.format===Ci?K=n.DEPTH_COMPONENT24:T.depthTexture.format===Ss&&(K=n.DEPTH24_STENCIL8);for(let $=0;$<6;$++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,K,T.width,T.height,0,U,O,null)}}else it(T.depthTexture,0);let G=yt.__webglTexture,w=Ut(T),E=dt?n.TEXTURE_CUBE_MAP_POSITIVE_X+nt:n.TEXTURE_2D,A=T.depthTexture.format===Ss?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ci)zt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,A,E,G,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,A,E,G,0);else if(T.depthTexture.format===Ss)zt(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,A,E,G,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,A,E,G,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(z){let T=i.get(z),nt=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){let dt=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){let yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",yt)};dt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=dt}if(z.depthTexture&&!T.__autoAllocateDepthBuffer)if(nt)for(let dt=0;dt<6;dt++)lt(T.__webglFramebuffer[dt],z,dt);else{let dt=z.texture.mipmaps;dt&&dt.length>0?lt(T.__webglFramebuffer[0],z,0):lt(T.__webglFramebuffer,z,0)}else if(nt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=n.createRenderbuffer(),X(T.__webglDepthbuffer[dt],z,!1);else{let yt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer[dt];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,G)}}else{let dt=z.texture.mipmaps;if(dt&&dt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),X(T.__webglDepthbuffer,z,!1);else{let yt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,G)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(z,T,nt){let dt=i.get(z);T!==void 0&&Dt(dt.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),nt!==void 0&&q(z)}function rt(z){let T=z.texture,nt=i.get(z),dt=i.get(T);z.addEventListener("dispose",M);let yt=z.textures,G=z.isWebGLCubeRenderTarget===!0,w=yt.length>1;if(w||(dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture()),dt.__version=T.version,o.memory.textures++),G){nt.__webglFramebuffer=[];for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[E]=[];for(let A=0;A<T.mipmaps.length;A++)nt.__webglFramebuffer[E][A]=n.createFramebuffer()}else nt.__webglFramebuffer[E]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let E=0;E<T.mipmaps.length;E++)nt.__webglFramebuffer[E]=n.createFramebuffer()}else nt.__webglFramebuffer=n.createFramebuffer();if(w)for(let E=0,A=yt.length;E<A;E++){let U=i.get(yt[E]);U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture(),o.memory.textures++)}if(z.samples>0&&zt(z)===!1){nt.__webglMultisampledFramebuffer=n.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let E=0;E<yt.length;E++){let A=yt[E];nt.__webglColorRenderbuffer[E]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,nt.__webglColorRenderbuffer[E]);let U=r.convert(A.format,A.colorSpace),O=r.convert(A.type),K=b(A.internalFormat,U,O,A.normalized,A.colorSpace,z.isXRRenderTarget===!0),$=Ut(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,K,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+E,n.RENDERBUFFER,nt.__webglColorRenderbuffer[E])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(nt.__webglDepthRenderbuffer=n.createRenderbuffer(),X(nt.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,T);for(let E=0;E<6;E++)if(T.mipmaps&&T.mipmaps.length>0)for(let A=0;A<T.mipmaps.length;A++)Dt(nt.__webglFramebuffer[E][A],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,A);else Dt(nt.__webglFramebuffer[E],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);m(T)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(w){for(let E=0,A=yt.length;E<A;E++){let U=yt[E],O=i.get(U),K=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(K=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,O.__webglTexture),Pt(K,U),Dt(nt.__webglFramebuffer,z,U,n.COLOR_ATTACHMENT0+E,K,0),m(U)&&x(K)}e.unbindTexture()}else{let E=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(E=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(E,dt.__webglTexture),Pt(E,T),T.mipmaps&&T.mipmaps.length>0)for(let A=0;A<T.mipmaps.length;A++)Dt(nt.__webglFramebuffer[A],z,T,n.COLOR_ATTACHMENT0,E,A);else Dt(nt.__webglFramebuffer,z,T,n.COLOR_ATTACHMENT0,E,0);m(T)&&x(E),e.unbindTexture()}z.depthBuffer&&q(z)}function ht(z){let T=z.textures;for(let nt=0,dt=T.length;nt<dt;nt++){let yt=T[nt];if(m(yt)){let G=v(z),w=i.get(yt).__webglTexture;e.bindTexture(G,w),x(G),e.unbindTexture()}}}let mt=[],Tt=[];function Rt(z){if(z.samples>0){if(zt(z)===!1){let T=z.textures,nt=z.width,dt=z.height,yt=n.COLOR_BUFFER_BIT,G=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,w=i.get(z),E=T.length>1;if(E)for(let U=0;U<T.length;U++)e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer);let A=z.texture.mipmaps;A&&A.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let U=0;U<T.length;U++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(yt|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(yt|=n.STENCIL_BUFFER_BIT)),E){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,w.__webglColorRenderbuffer[U]);let O=i.get(T[U]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,yt,n.NEAREST),c===!0&&(mt.length=0,Tt.length=0,mt.push(n.COLOR_ATTACHMENT0+U),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(mt.push(G),Tt.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),E)for(let U=0;U<T.length;U++){e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,w.__webglColorRenderbuffer[U]);let O=i.get(T[U]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,O,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&c){let T=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ut(z){return Math.min(s.maxSamples,z.samples)}function zt(z){let T=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(z){let T=o.render.frame;u.get(z)!==T&&(u.set(z,T),z.update())}function ae(z,T){let nt=z.colorSpace,dt=z.format,yt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||nt!==bo&&nt!==$i&&(_e.getTransfer(nt)===Pe?(dt!==ri||yt!==Xn)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",nt)),T}function Gt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(l.width=z.naturalWidth||z.width,l.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(l.width=z.displayWidth,l.height=z.displayHeight):(l.width=z.width,l.height=z.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=j,this.setTexture3D=et,this.setTextureCube=at,this.rebindTextures=Q,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function pM(n,t){function e(i,s=$i){let r,o=_e.getTransfer(s);if(i===Xn)return n.UNSIGNED_BYTE;if(i===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yh)return n.BYTE;if(i===xh)return n.SHORT;if(i===Br)return n.UNSIGNED_SHORT;if(i===Yc)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===_h)return n.ALPHA;if(i===Mh)return n.RGB;if(i===ri)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===jc)return n.RED;if(i===Kc)return n.RED_INTEGER;if(i===ws)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===Qc)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(o===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===el||i===nl||i===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sl||i===rl||i===ol||i===al||i===cl||i===oa||i===ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sl||i===rl)return o===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ol)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===al)return r.COMPRESSED_R11_EAC;if(i===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return r.COMPRESSED_RG11_EAC;if(i===ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ul||i===hl||i===fl||i===dl||i===pl||i===ml||i===gl||i===yl||i===xl||i===bl||i===vl||i===_l||i===Ml||i===Sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ul)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ml)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===El||i===Tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wl)return o===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Al||i===Rl||i===aa||i===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var mM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gM=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Po(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ze({vertexShader:mM,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new In(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends Ii{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Wh,m={},x=e.getContextAttributes(),v=null,b=null,_=[],S=[],R=new Nt,M=null,C=null,F=new Un;F.viewport=new Le;let I=new Un;I.viewport=new Le;let D=[F,I],H=new Gc,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=_[J];return ft===void 0&&(ft=new Tr,_[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=_[J];return ft===void 0&&(ft=new Tr,_[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=_[J];return ft===void 0&&(ft=new Tr,_[J]=ft),ft.getHandSpace()};function B(J){let ft=S.indexOf(J.inputSource);if(ft===-1)return;let Ct=_[ft];Ct!==void 0&&(Ct.update(J.inputSource,J.frame,l||o),Ct.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let J=0;J<_.length;J++){let ft=S[J];ft!==null&&(S[J]=null,_[J].disconnect(ft))}N=null,k=null,p.reset();for(let J in m)delete m[J];if(t.setRenderTarget(v),d=null,f=null,h=null,s=null,b=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(R.width,R.height,!1),C!==null){let J=C.camera;J.fov=C.fov,J.zoom=C.zoom,J.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),x.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Xt=null,Dt=null;x.depth&&(Dt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=x.stencil?Ss:Ci,Xt=x.stencil?zr:yi);let X={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(X),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Vn(f.textureWidth,f.textureHeight,{format:ri,type:Xn,depthTexture:new hs(f.textureWidth,f.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ct={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Vn(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function it(J){for(let ft=0;ft<J.removed.length;ft++){let Ct=J.removed[ft],Xt=S.indexOf(Ct);Xt>=0&&(S[Xt]=null,_[Xt].disconnect(Ct))}for(let ft=0;ft<J.added.length;ft++){let Ct=J.added[ft],Xt=S.indexOf(Ct);if(Xt===-1){for(let X=0;X<_.length;X++)if(X>=S.length){S.push(Ct),Xt=X;break}else if(S[X]===null){S[X]=Ct,Xt=X;break}if(Xt===-1)break}let Dt=_[Xt];Dt&&Dt.connect(Ct)}}let j=new V,et=new V;function at(J,ft,Ct){j.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(Ct.matrixWorld);let Xt=j.distanceTo(et),Dt=ft.projectionMatrix.elements,X=Ct.projectionMatrix.elements,lt=Dt[14]/(Dt[10]-1),q=Dt[14]/(Dt[10]+1),Q=(Dt[9]+1)/Dt[5],rt=(Dt[9]-1)/Dt[5],ht=(Dt[8]-1)/Dt[0],mt=(X[8]+1)/X[0],Tt=lt*ht,Rt=lt*mt,Ut=Xt/(-ht+mt),zt=Ut*-ht;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(Ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Y=lt+Ut,ae=q+Ut,Gt=Tt-zt,z=Rt+(Xt-zt),T=Q*q/ae*Y,nt=rt*q/ae*Y;J.projectionMatrix.makePerspective(Gt,z,T,nt,Y,ae),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ft=J.near,Ct=J.far;p.texture!==null&&(p.depthNear>0&&(ft=p.depthNear),p.depthFar>0&&(Ct=p.depthFar)),H.near=I.near=F.near=ft,H.far=I.far=F.far=Ct,(N!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=J.layers.mask|6,F.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let Xt=J.parent,Dt=H.cameras;Et(H,Xt);for(let X=0;X<Dt.length;X++)Et(Dt[X],Xt);Dt.length===2?at(H,F,I):H.projectionMatrix.copy(F.projectionMatrix),C===null&&J.isPerspectiveCamera&&(C={camera:J,fov:J.fov,zoom:J.zoom}),_t(J,H,Xt)};function _t(J,ft,Ct){Ct===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(Ct.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(J){return m[J]};let St=null;function Pt(J,ft){if(u=ft.getViewerPose(l||o),g=ft,u!==null){let Ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Xt=!1;Ct.length!==H.cameras.length&&(H.cameras.length=0,Xt=!0);for(let q=0;q<Ct.length;q++){let Q=Ct[q],rt=null;if(d!==null)rt=d.getViewport(Q);else{let mt=h.getViewSubImage(f,Q);rt=mt.viewport,q===0&&(t.setRenderTargetTextures(b,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(b))}let ht=D[q];ht===void 0&&(ht=new Un,ht.layers.enable(q),ht.viewport=new Le,D[q]=ht),ht.matrix.fromArray(Q.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Q.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(rt.x,rt.y,rt.width,rt.height),q===0&&(H.matrix.copy(ht.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Xt===!0&&H.cameras.push(ht)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let q=h.getDepthInformation(Ct[0]);q&&q.isValid&&q.texture&&p.init(q,s.renderState)}if(Dt&&Dt.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let q=0;q<Ct.length;q++){let Q=Ct[q].camera;if(Q){let rt=m[Q];rt||(rt=new Po,m[Q]=rt);let ht=h.getCameraImage(Q);rt.sourceTexture=ht}}}}for(let Ct=0;Ct<_.length;Ct++){let Xt=S[Ct],Dt=_[Ct];Xt!==null&&Dt!==void 0&&Dt.update(Xt,ft,l||o)}St&&St(J,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),g=null}let Lt=new zp;Lt.setAnimationLoop(Pt),this.setAnimationLoop=function(J){St=J},this.dispose=function(){}}},yM=new Me,qp=new pe;qp.set(-1,0,0,0,1,0,0,0,1);function xM(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Ah(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,v,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===kn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===kn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),v=x.envMap,b=x.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(b)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(qp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let S=_.program;i.uniformBlockBinding(b,S)}function l(b,_){let S=s[b.id];S===void 0&&(p(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",x));let R=_.program;i.updateUBOMapping(b,R);let M=t.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function u(b){let _=h();b.__bindingPointIndex=_;let S=n.createBuffer(),R=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=s[b.id],S=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,C=S.length;M<C;M++){let F=S[M];if(Array.isArray(F))for(let I=0,D=F.length;I<D;I++)d(F[I],M,I,R);else d(F,M,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,_,S,R){if(y(b,_,S,R)===!0){let M=b.__offset,C=b.value;if(Array.isArray(C)){let F=0;for(let I=0;I<C.length;I++){let D=C[I],H=m(D);g(D,b.__data,F),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(F+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,b.__data)}}function g(b,_,S){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,S)}function y(b,_,S,R){let M=b.value,C=_+"_"+S;if(R[C]===void 0)return typeof M=="number"||typeof M=="boolean"?R[C]=M:ArrayBuffer.isView(M)?R[C]=M.slice():R[C]=M.clone(),!0;{let F=R[C];if(typeof M=="number"||typeof M=="boolean"){if(F!==M)return R[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(F.equals(M)===!1)return F.copy(M),!0}}return!1}function p(b){let _=b.uniforms,S=0,R=16;for(let C=0,F=_.length;C<F;C++){let I=Array.isArray(_[C])?_[C]:[_[C]];for(let D=0,H=I.length;D<H;D++){let N=I[D],k=Array.isArray(N.value)?N.value:[N.value];for(let B=0,W=k.length;B<W;B++){let it=k[B],j=m(it),et=S%R,at=et%j.boundary,Et=et+at;S+=at,Et!==0&&R-Et<j.storage&&(S+=R-Et),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=j.storage}}}let M=S%R;return M>0&&(S+=R-M),b.__size=S,b.__cache={},this}function m(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",b),_}function x(b){let _=b.target;_.removeEventListener("dispose",x);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function v(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:v}}var vM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function _M(){return Ni===null&&(Ni=new Ro(vM,16,16,ws,xi),Ni.name="DFG_LUT",Ni.minFilter=xn,Ni.magFilter=xn,Ni.wrapS=Ai,Ni.wrapT=Ai,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Ul=class{constructor(t={}){let{canvas:e=cp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Xn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=d,p=new Set([Qc,Jc,Kc]),m=new Set([Xn,yi,Br,zr,$c,Zc]),x=new Uint32Array(4),v=new Int32Array(4),b=new V,_=null,S=null,R=[],M=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,I=!1,D=null,H=null,N=null,k=null;this._outputColorSpace=rn;let B=0,W=0,it=null,j=-1,et=null,at=new Le,Et=new Le,_t=null,St=new Yt(0),Pt=0,Lt=e.width,J=e.height,ft=1,Ct=null,Xt=null,Dt=new Le(0,0,Lt,J),X=new Le(0,0,Lt,J),lt=!1,q=new Rr,Q=!1,rt=!1,ht=new Me,mt=new V,Tt=new Le,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function zt(){return it===null?ft:1}let Y=i;function ae(L,st){return e.getContext(L,st)}let Gt,z,T,nt,dt,yt,G,w,E,A,U,O,K,$,ut,ct,At,P,Z,tt,Mt,wt,bt;try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Se,!1),Y===null){let st="webgl2";if(Y=ae(st,L),Y===null)throw ae(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(L){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),he("WebGLRenderer: "+L.message),L}function Ft(){Gt=new Rv(Y),Gt.init(),Mt=new pM(Y,Gt),z=new xv(Y,Gt,t,Mt),T=new fM(Y,Gt),z.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),H=Y.createFramebuffer(),N=Y.createFramebuffer(),k=Y.createFramebuffer(),nt=new Pv(Y),dt=new J_,yt=new dM(Y,Gt,T,dt,z,Mt,nt),G=new Av(F),w=new Nx(Y),wt=new gv(Y,w),E=new Cv(Y,w,nt,wt),A=new Nv(Y,E,w,wt,nt),P=new Lv(Y,z,yt),ut=new bv(dt),U=new K_(F,G,Gt,z,wt,ut),O=new xM(F,dt),K=new tM,$=new oM(Gt),At=new mv(F,G,T,A,g,c),ct=new hM(F,A,z),bt=new bM(Y,nt,z,T),Z=new yv(Y,Gt,nt),tt=new Iv(Y,Gt,nt),nt.programs=U.programs,F.capabilities=z,F.extensions=Gt,F.properties=dt,F.renderLists=K,F.shadowMap=ct,F.state=T,F.info=nt}y!==Xn&&(C=new Fv(y,e.width,e.height,a,s,r));let Ot=new Xh(F,Y);this.xr=Ot,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let L=Gt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Gt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(L){L!==void 0&&(ft=L,this.setSize(Lt,J,!1))},this.getSize=function(L){return L.set(Lt,J)},this.setSize=function(L,st,xt=!0){if(Ot.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=L,J=st,e.width=Math.floor(L*ft),e.height=Math.floor(st*ft),xt===!0&&(e.style.width=L+"px",e.style.height=st+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,L,st)},this.getDrawingBufferSize=function(L){return L.set(Lt*ft,J*ft).floor()},this.setDrawingBufferSize=function(L,st,xt){Lt=L,J=st,ft=xt,e.width=Math.floor(L*xt),e.height=Math.floor(st*xt),this.setViewport(0,0,L,st)},this.setEffects=function(L){if(y===Xn){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let st=0;st<L.length;st++)if(L[st].isOutputPass===!0){ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(at)},this.getViewport=function(L){return L.copy(Dt)},this.setViewport=function(L,st,xt,gt){L.isVector4?Dt.set(L.x,L.y,L.z,L.w):Dt.set(L,st,xt,gt),T.viewport(at.copy(Dt).multiplyScalar(ft).round())},this.getScissor=function(L){return L.copy(X)},this.setScissor=function(L,st,xt,gt){L.isVector4?X.set(L.x,L.y,L.z,L.w):X.set(L,st,xt,gt),T.scissor(Et.copy(X).multiplyScalar(ft).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(L){T.setScissorTest(lt=L)},this.setOpaqueSort=function(L){Ct=L},this.setTransparentSort=function(L){Xt=L},this.getClearColor=function(L){return L.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(L=!0,st=!0,xt=!0){let gt=0;if(L){let pt=!1;if(it!==null){let Vt=it.texture.format;pt=p.has(Vt)}if(pt){let Vt=it.texture.type,Zt=m.has(Vt),qt=At.getClearColor(),Jt=At.getClearAlpha(),ie=qt.r,ge=qt.g,xe=qt.b;Zt?(x[0]=ie,x[1]=ge,x[2]=xe,x[3]=Jt,Y.clearBufferuiv(Y.COLOR,0,x)):(v[0]=ie,v[1]=ge,v[2]=xe,v[3]=Jt,Y.clearBufferiv(Y.COLOR,0,v))}else gt|=Y.COLOR_BUFFER_BIT}st&&(gt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xt&&(gt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),gt!==0&&Y.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),D=L},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),At.dispose(),K.dispose(),$.dispose(),dt.dispose(),G.dispose(),A.dispose(),wt.dispose(),bt.dispose(),U.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",vt),Ot.removeEventListener("sessionend",Bt),Ht.stop()};function le(L){L.preventDefault(),Mo("WebGLRenderer: Context Lost."),I=!0}function re(){Mo("WebGLRenderer: Context Restored."),I=!1;let L=nt.autoReset,st=ct.enabled,xt=ct.autoUpdate,gt=ct.needsUpdate,pt=ct.type;Ft(),nt.autoReset=L,ct.enabled=st,ct.autoUpdate=xt,ct.needsUpdate=gt,ct.type=pt}function Se(L){he("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ee(L){let st=L.target;st.removeEventListener("dispose",Ee),un(st)}function un(L){Ke(L),dt.remove(L)}function Ke(L){let st=dt.get(L).programs;st!==void 0&&(st.forEach(function(xt){U.releaseProgram(xt)}),L.isShaderMaterial&&U.releaseShaderCache(L))}this.renderBufferDirect=function(L,st,xt,gt,pt,Vt){st===null&&(st=Rt);let Zt=pt.isMesh&&pt.matrixWorld.determinantAffine()<0,qt=Ce(L,st,xt,gt,pt);T.setMaterial(gt,Zt);let Jt=xt.index,ie=1;if(gt.wireframe===!0){if(Jt=E.getWireframeAttribute(xt),Jt===void 0)return;ie=2}let ge=xt.drawRange,xe=xt.attributes.position,ee=ge.start*ie,Ie=(ge.start+ge.count)*ie;Vt!==null&&(ee=Math.max(ee,Vt.start*ie),Ie=Math.min(Ie,(Vt.start+Vt.count)*ie)),Jt!==null?(ee=Math.max(ee,0),Ie=Math.min(Ie,Jt.count)):xe!=null&&(ee=Math.max(ee,0),Ie=Math.min(Ie,xe.count));let nn=Ie-ee;if(nn<0||nn===1/0)return;wt.setup(pt,gt,qt,xt,Jt);let Ve,Fe=Z;if(Jt!==null&&(Ve=w.get(Jt),Fe=tt,Fe.setIndex(Ve)),pt.isMesh)gt.wireframe===!0?(T.setLineWidth(gt.wireframeLinewidth*zt()),Fe.setMode(Y.LINES)):Fe.setMode(Y.TRIANGLES);else if(pt.isLine){let En=gt.linewidth;En===void 0&&(En=1),T.setLineWidth(En*zt()),pt.isLineSegments?Fe.setMode(Y.LINES):pt.isLineLoop?Fe.setMode(Y.LINE_LOOP):Fe.setMode(Y.LINE_STRIP)}else pt.isPoints?Fe.setMode(Y.POINTS):pt.isSprite&&Fe.setMode(Y.TRIANGLES);if(pt.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(pt._multiDrawStarts,pt._multiDrawCounts,pt._multiDrawCount);else{let En=pt._multiDrawStarts,Kt=pt._multiDrawCounts,Dn=pt._multiDrawCount,we=Jt?w.get(Jt).bytesPerElement:1,ti=dt.get(gt).currentProgram.getUniforms();for(let Ei=0;Ei<Dn;Ei++)ti.setValue(Y,"_gl_DrawID",Ei),Fe.render(En[Ei]/we,Kt[Ei])}else if(pt.isInstancedMesh)Fe.renderInstances(ee,nn,pt.count);else if(xt.isInstancedBufferGeometry){let En=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,Kt=Math.min(xt.instanceCount,En);Fe.renderInstances(ee,nn,Kt)}else Fe.render(ee,nn)};function It(L,st,xt,gt){D!==null&&L.isNodeMaterial&&D.setObject(gt,L),Q===!0&&ut.setState(L,xt,!1),L.transparent===!0&&L.side===tn&&L.forceSinglePass===!1?(L.side=kn,L.needsUpdate=!0,ve(L,st,gt),L.side=vs,L.needsUpdate=!0,ve(L,st,gt),L.side=tn):ve(L,st,gt)}this.compile=function(L,st,xt=null){xt===null&&(xt=L),D!==null&&D.renderStart(L,st,xt),S=$.get(xt),S.init(st),M.push(S),xt.traverseVisible(function(pt){pt.isLight&&pt.layers.test(st.layers)&&(S.pushLight(pt),pt.castShadow&&S.pushShadow(pt))}),L!==xt&&L.traverseVisible(function(pt){pt.isLight&&pt.layers.test(st.layers)&&(S.pushLight(pt),pt.castShadow&&S.pushShadow(pt))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),rt=this.localClippingEnabled,Q=ut.init(this.clippingPlanes,rt),Q===!0&&ut.setGlobalState(this.clippingPlanes,st),D!==null&&ct.render(S.state.shadowsArray,xt,st);let gt=new Set;return L.traverse(function(pt){if(!(pt.isMesh||pt.isPoints||pt.isLine||pt.isSprite))return;let Vt=pt.material;if(Vt)if(Array.isArray(Vt))for(let Zt=0;Zt<Vt.length;Zt++){let qt=Vt[Zt];It(qt,xt,st,pt),gt.add(qt)}else It(Vt,xt,st,pt),gt.add(Vt)}),S=M.pop(),D!==null&&D.renderEnd(),gt},this.compileAsync=function(L,st,xt=null){let gt=this.compile(L,st,xt);return new Promise(pt=>{function Vt(){if(gt.forEach(function(Zt){let Jt=dt.get(Zt).currentProgram;(Jt===void 0||Jt.isReady())&&gt.delete(Zt)}),gt.size===0){pt(L);return}setTimeout(Vt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let kt=null;function $t(L){kt&&kt(L)}function vt(){Ht.stop()}function Bt(){Ht.start()}let Ht=new zp;Ht.setAnimationLoop($t),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(L){kt=L,Ot.setAnimationLoop(L),L===null?Ht.stop():Ht.start()},Ot.addEventListener("sessionstart",vt),Ot.addEventListener("sessionend",Bt),this.render=function(L,st){if(st!==void 0&&st.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(L,st);let xt=Ot.enabled===!0&&Ot.isPresenting===!0,gt=C!==null&&(it===null||xt)&&C.begin(F,it);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(st),st=Ot.getCamera()),L.isScene===!0&&L.onBeforeRender(F,L,st,it),S=$.get(L,M.length),S.init(st),S.state.textureUnits=yt.getTextureUnits(),M.push(S),ht.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),q.setFromProjectionMatrix(ht,di,st.reversedDepth),rt=this.localClippingEnabled,Q=ut.init(this.clippingPlanes,rt),_=K.get(L,R.length),_.init(),R.push(_),Ot.enabled===!0&&Ot.isPresenting===!0){let Zt=F.xr.getDepthSensingMesh();Zt!==null&&Qt(Zt,st,-1/0,F.sortObjects)}Qt(L,st,0,F.sortObjects),_.finish(),D!==null&&D.updateLights(S.state.lightsArray),F.sortObjects===!0&&_.sort(Ct,Xt),Ut=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Ut&&At.addToRenderList(_,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&ut.beginShadows();let pt=S.state.shadowsArray;if(ct.render(pt,L,st),Q===!0&&ut.endShadows(),(gt&&C.hasRenderPass())===!1){let Zt=_.opaque,qt=_.transmissive;if(S.setupLights(),st.isArrayCamera){let Jt=st.cameras;if(qt.length>0)for(let ie=0,ge=Jt.length;ie<ge;ie++){let xe=Jt[ie];hn(Zt,qt,L,xe)}Ut&&At.render(L);for(let ie=0,ge=Jt.length;ie<ge;ie++){let xe=Jt[ie];be(_,L,xe,xe.viewport)}}else qt.length>0&&hn(Zt,qt,L,st),Ut&&At.render(L),be(_,L,st)}it!==null&&W===0&&(yt.updateMultisampleRenderTarget(it),yt.updateRenderTargetMipmap(it)),gt&&C.end(F),L.isScene===!0&&L.onAfterRender(F,L,st),wt.resetDefaultState(),j=-1,et=null,M.pop(),M.length>0?(S=M[M.length-1],yt.setTextureUnits(S.state.textureUnits),Q===!0&&ut.setGlobalState(F.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?_=R[R.length-1]:_=null,D!==null&&D.renderEnd()};function Qt(L,st,xt,gt){if(L.visible===!1)return;if(L.layers.test(st.layers)){if(L.isGroup)xt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(st);else if(L.isLightProbeGrid)S.pushLightProbeGrid(L);else if(L.isLight)S.pushLight(L),L.castShadow&&S.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(q)){gt&&Tt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ht);let Zt=A.update(L),qt=L.material;qt.visible&&_.push(L,Zt,qt,xt,Tt.z,null,st)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(q))){let Zt=A.update(L),qt=L.material;if(gt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Tt.copy(L.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),Tt.copy(Zt.boundingSphere.center)),Tt.applyMatrix4(L.matrixWorld).applyMatrix4(ht)),Array.isArray(qt)){let Jt=Zt.groups;for(let ie=0,ge=Jt.length;ie<ge;ie++){let xe=Jt[ie],ee=qt[xe.materialIndex];ee&&ee.visible&&_.push(L,Zt,ee,xt,Tt.z,xe,st)}}else qt.visible&&_.push(L,Zt,qt,xt,Tt.z,null,st)}}let Vt=L.children;for(let Zt=0,qt=Vt.length;Zt<qt;Zt++)Qt(Vt[Zt],st,xt,gt)}function be(L,st,xt,gt){let{opaque:pt,transmissive:Vt,transparent:Zt}=L;S.setupLightsView(xt),Q===!0&&ut.setGlobalState(F.clippingPlanes,xt),gt&&T.viewport(at.copy(gt)),pt.length>0&&Sn(pt,st,xt),Vt.length>0&&Sn(Vt,st,xt),Zt.length>0&&Sn(Zt,st,xt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function hn(L,st,xt,gt){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[gt.id]===void 0){let ee=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[gt.id]=new Vn(1,1,{generateMipmaps:!0,type:ee?xi:Xn,minFilter:Ms,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Vt=S.state.transmissionRenderTarget[gt.id],Zt=gt.viewport||at;Vt.setSize(Zt.z*F.transmissionResolutionScale,Zt.w*F.transmissionResolutionScale);let qt=F.getRenderTarget(),Jt=F.getActiveCubeFace(),ie=F.getActiveMipmapLevel();F.setRenderTarget(Vt),F.getClearColor(St),Pt=F.getClearAlpha(),Pt<1&&F.setClearColor(16777215,.5),F.clear(),Ut&&At.render(xt);let ge=F.toneMapping;F.toneMapping=gi;let xe=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),S.setupLightsView(gt),Q===!0&&ut.setGlobalState(F.clippingPlanes,gt),Sn(L,xt,gt),yt.updateMultisampleRenderTarget(Vt),yt.updateRenderTargetMipmap(Vt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ie=0,nn=st.length;Ie<nn;Ie++){let Ve=st[Ie],{object:Fe,geometry:En,material:Kt,group:Dn}=Ve;if(Kt.side===tn&&Fe.layers.test(gt.layers)){let we=Kt.side;Kt.side=kn,Kt.needsUpdate=!0,wn(Fe,xt,gt,En,Kt,Dn),Kt.side=we,Kt.needsUpdate=!0,ee=!0}}ee===!0&&(yt.updateMultisampleRenderTarget(Vt),yt.updateRenderTargetMipmap(Vt))}F.setRenderTarget(qt,Jt,ie),F.setClearColor(St,Pt),xe!==void 0&&(gt.viewport=xe),F.toneMapping=ge}function Sn(L,st,xt){let gt=st.isScene===!0?st.overrideMaterial:null;for(let pt=0,Vt=L.length;pt<Vt;pt++){let Zt=L[pt],{object:qt,geometry:Jt,group:ie}=Zt,ge=Zt.material;ge.allowOverride===!0&&gt!==null&&(ge=gt),qt.layers.test(xt.layers)&&wn(qt,st,xt,Jt,ge,ie)}}function wn(L,st,xt,gt,pt,Vt){D!==null&&pt.isNodeMaterial&&D.setObject(L,pt),L.onBeforeRender(F,st,xt,gt,pt,Vt),L.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),pt.onBeforeRender(F,st,xt,gt,L,Vt),pt.transparent===!0&&pt.side===tn&&pt.forceSinglePass===!1?(pt.side=kn,pt.needsUpdate=!0,F.renderBufferDirect(xt,st,gt,pt,L,Vt),pt.side=vs,pt.needsUpdate=!0,F.renderBufferDirect(xt,st,gt,pt,L,Vt),pt.side=tn):F.renderBufferDirect(xt,st,gt,pt,L,Vt),L.onAfterRender(F,st,xt,gt,pt,Vt)}function ve(L,st,xt){st.isScene!==!0&&(st=Rt);let gt=dt.get(L),pt=S.state.lights,Vt=S.state.shadowsArray,Zt=pt.state.version,qt=U.getParameters(L,pt.state,Vt,st,xt,S.state.lightProbeGridArray),Jt=U.getProgramCacheKey(qt),ie=gt.programs;gt.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?st.environment:null,gt.fog=st.fog;let ge=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;gt.envMap=G.get(L.envMap||gt.environment,ge),gt.envMapRotation=gt.environment!==null&&L.envMap===null?st.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",Ee),ie=new Map,gt.programs=ie);let xe=ie.get(Jt);if(xe!==void 0){if(gt.currentProgram===xe&&gt.lightsStateVersion===Zt)return wi(L,qt),xe}else qt.uniforms=U.getUniforms(L),D!==null&&L.isNodeMaterial&&D.build(L,xt,qt),L.onBeforeCompile(qt,F),xe=U.acquireProgram(qt,Jt),ie.set(Jt,xe),gt.uniforms=qt.uniforms;let ee=gt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ee.clippingPlanes=ut.uniform),wi(L,qt),gt.needsLights=$e(L),gt.lightsStateVersion=Zt,gt.needsLights&&(ee.ambientLightColor.value=pt.state.ambient,ee.lightProbe.value=pt.state.probe,ee.sunLights.value=pt.state.sun,ee.sunLightShadows.value=pt.state.sunShadow,ee.directionalLights.value=pt.state.directional,ee.directionalLightShadows.value=pt.state.directionalShadow,ee.spotLights.value=pt.state.spot,ee.spotLightShadows.value=pt.state.spotShadow,ee.rectAreaLights.value=pt.state.rectArea,ee.ltc_1.value=pt.state.rectAreaLTC1,ee.ltc_2.value=pt.state.rectAreaLTC2,ee.pointLights.value=pt.state.point,ee.pointLightShadows.value=pt.state.pointShadow,ee.hemisphereLights.value=pt.state.hemi,ee.sunShadowMatrix.value=pt.state.sunShadowMatrix,ee.sunShadowCascade.value=pt.state.sunShadowCascade,ee.directionalShadowMatrix.value=pt.state.directionalShadowMatrix,ee.spotLightMatrix.value=pt.state.spotLightMatrix,ee.spotLightMap.value=pt.state.spotLightMap,ee.pointShadowMatrix.value=pt.state.pointShadowMatrix),gt.lightProbeGrid=S.state.lightProbeGridArray.length>0,gt.currentProgram=xe,gt.uniformsList=null,xe}function on(L){if(L.uniformsList===null){let st=L.currentProgram.getUniforms();L.uniformsList=Vr.seqWithValue(st.seq,L.uniforms)}return L.uniformsList}function wi(L,st){let xt=dt.get(L);xt.outputColorSpace=st.outputColorSpace,xt.batching=st.batching,xt.batchingColor=st.batchingColor,xt.instancing=st.instancing,xt.instancingColor=st.instancingColor,xt.instancingMorph=st.instancingMorph,xt.skinning=st.skinning,xt.morphTargets=st.morphTargets,xt.morphNormals=st.morphNormals,xt.morphColors=st.morphColors,xt.morphTargetsCount=st.morphTargetsCount,xt.numClippingPlanes=st.numClippingPlanes,xt.numIntersection=st.numClipIntersection,xt.vertexAlphas=st.vertexAlphas,xt.vertexTangents=st.vertexTangents,xt.toneMapping=st.toneMapping}function fn(L,st){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;b.setFromMatrixPosition(st.matrixWorld);for(let xt=0,gt=L.length;xt<gt;xt++){let pt=L[xt];if(pt.texture!==null&&pt.boundingBox.containsPoint(b))return pt}return null}function Ce(L,st,xt,gt,pt){st.isScene!==!0&&(st=Rt),yt.resetTextureUnits();let Vt=st.fog,Zt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial?st.environment:null,qt=it===null?F.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:_e.workingColorSpace,Jt=gt.isMeshStandardMaterial||gt.isMeshLambertMaterial&&!gt.envMap||gt.isMeshPhongMaterial&&!gt.envMap,ie=G.get(gt.envMap||Zt,Jt),ge=gt.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,xe=!!xt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),ee=!!xt.morphAttributes.position,Ie=!!xt.morphAttributes.normal,nn=!!xt.morphAttributes.color,Ve=gi;gt.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ve=F.toneMapping);let Fe=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,En=Fe!==void 0?Fe.length:0,Kt=dt.get(gt),Dn=S.state.lights;if(Q===!0&&(rt===!0||L!==et)){let Be=L===et&&gt.id===j;ut.setState(gt,L,Be)}let we=!1;gt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Dn.state.version||Kt.outputColorSpace!==qt||pt.isBatchedMesh&&Kt.batching===!1||!pt.isBatchedMesh&&Kt.batching===!0||pt.isBatchedMesh&&Kt.batchingColor===!0&&pt._colorsTexture===null||pt.isBatchedMesh&&Kt.batchingColor===!1&&pt._colorsTexture!==null||pt.isInstancedMesh&&Kt.instancing===!1||!pt.isInstancedMesh&&Kt.instancing===!0||pt.isSkinnedMesh&&Kt.skinning===!1||!pt.isSkinnedMesh&&Kt.skinning===!0||pt.isInstancedMesh&&Kt.instancingColor===!0&&pt.instanceColor===null||pt.isInstancedMesh&&Kt.instancingColor===!1&&pt.instanceColor!==null||pt.isInstancedMesh&&Kt.instancingMorph===!0&&pt.morphTexture===null||pt.isInstancedMesh&&Kt.instancingMorph===!1&&pt.morphTexture!==null||Kt.envMap!==ie||gt.fog===!0&&Kt.fog!==Vt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ut.numPlanes||Kt.numIntersection!==ut.numIntersection)||Kt.vertexAlphas!==ge||Kt.vertexTangents!==xe||Kt.morphTargets!==ee||Kt.morphNormals!==Ie||Kt.morphColors!==nn||Kt.toneMapping!==Ve||Kt.morphTargetsCount!==En||!!Kt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Kt.__version=gt.version);let ti=Kt.currentProgram;we===!0&&(ti=ve(gt,st,pt),D&&gt.isNodeMaterial&&D.onUpdateProgram(gt,ti,Kt));let Ei=!1,es=!1,er=!1,De=ti.getUniforms(),Qe=Kt.uniforms;if(T.useProgram(ti.program)&&(Ei=!0,es=!0,er=!0),gt.id!==j&&(j=gt.id,es=!0),Kt.needsLights){let Be=fn(S.state.lightProbeGridArray,pt);Kt.lightProbeGrid!==Be&&(Kt.lightProbeGrid=Be,es=!0)}if(Ei||et!==L){T.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),De.setValue(Y,"projectionMatrix",L.projectionMatrix),De.setValue(Y,"viewMatrix",L.matrixWorldInverse);let is=De.map.cameraPosition;is!==void 0&&is.setValue(Y,mt.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&De.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&De.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),et!==L&&(et=L,es=!0,er=!0)}if(Kt.needsLights&&(Dn.state.sunShadowMap.length>0&&De.setValue(Y,"sunShadowMap",Dn.state.sunShadowMap,yt),Dn.state.directionalShadowMap.length>0&&De.setValue(Y,"directionalShadowMap",Dn.state.directionalShadowMap,yt),Dn.state.spotShadowMap.length>0&&De.setValue(Y,"spotShadowMap",Dn.state.spotShadowMap,yt),Dn.state.pointShadowMap.length>0&&De.setValue(Y,"pointShadowMap",Dn.state.pointShadowMap,yt)),pt.isSkinnedMesh){De.setOptional(Y,pt,"bindMatrix"),De.setOptional(Y,pt,"bindMatrixInverse");let Be=pt.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),De.setValue(Y,"boneTexture",Be.boneTexture,yt))}pt.isBatchedMesh&&(De.setOptional(Y,pt,"batchingTexture"),De.setValue(Y,"batchingTexture",pt._matricesTexture,yt),De.setOptional(Y,pt,"batchingIdTexture"),De.setValue(Y,"batchingIdTexture",pt._indirectTexture,yt),De.setOptional(Y,pt,"batchingColorTexture"),pt._colorsTexture!==null&&De.setValue(Y,"batchingColorTexture",pt._colorsTexture,yt));let ns=xt.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&P.update(pt,xt,ti),(es||Kt.receiveShadow!==pt.receiveShadow)&&(Kt.receiveShadow=pt.receiveShadow,De.setValue(Y,"receiveShadow",pt.receiveShadow)),(gt.isMeshStandardMaterial||gt.isMeshLambertMaterial||gt.isMeshPhongMaterial)&&gt.envMap===null&&st.environment!==null&&(Qe.envMapIntensity.value=st.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=_M()),es){if(De.setValue(Y,"toneMappingExposure",F.toneMappingExposure),Kt.needsLights&&Ge(Qe,er),Vt&&gt.fog===!0&&O.refreshFogUniforms(Qe,Vt),O.refreshMaterialUniforms(Qe,gt,ft,J,S.state.transmissionRenderTarget[L.id]),Kt.needsLights&&Kt.lightProbeGrid){let Be=Kt.lightProbeGrid;Qe.probesSH.value=Be.texture,Qe.probesMin.value.copy(Be.boundingBox.min),Qe.probesMax.value.copy(Be.boundingBox.max),Qe.probesResolution.value.copy(Be.resolution)}Vr.upload(Y,on(Kt),Qe,yt)}if(gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(Vr.upload(Y,on(Kt),Qe,yt),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&De.setValue(Y,"center",pt.center),De.setValue(Y,"modelViewMatrix",pt.modelViewMatrix),De.setValue(Y,"normalMatrix",pt.normalMatrix),De.setValue(Y,"modelMatrix",pt.matrixWorld),gt.uniformsGroups!==void 0){let Be=gt.uniformsGroups;for(let is=0,nr=Be.length;is<nr;is++){let Hf=Be[is];bt.update(Hf,ti),bt.bind(Hf,ti)}}return ti}function Ge(L,st){L.ambientLightColor.needsUpdate=st,L.lightProbe.needsUpdate=st,L.sunLights.needsUpdate=st,L.sunLightShadows.needsUpdate=st,L.directionalLights.needsUpdate=st,L.directionalLightShadows.needsUpdate=st,L.pointLights.needsUpdate=st,L.pointLightShadows.needsUpdate=st,L.spotLights.needsUpdate=st,L.spotLightShadows.needsUpdate=st,L.rectAreaLights.needsUpdate=st,L.hemisphereLights.needsUpdate=st}function $e(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(L,st,xt){let gt=dt.get(L);gt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),dt.get(L.texture).__webglTexture=st,dt.get(L.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:xt,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,st){let xt=dt.get(L);xt.__webglFramebuffer=st,xt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(L,st=0,xt=0){it=L,B=st,W=xt;let gt=null,pt=!1,Vt=!1;if(L){let qt=dt.get(L);if(qt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(Y.FRAMEBUFFER,qt.__webglFramebuffer),at.copy(L.viewport),Et.copy(L.scissor),_t=L.scissorTest,T.viewport(at),T.scissor(Et),T.setScissorTest(_t),j=-1;return}else if(qt.__webglFramebuffer===void 0)yt.setupRenderTarget(L);else if(qt.__hasExternalTextures)yt.rebindTextures(L,dt.get(L.texture).__webglTexture,dt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let ge=L.depthTexture;if(qt.__boundDepthTexture!==ge){if(ge!==null&&dt.has(ge)&&(L.width!==ge.image.width||L.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(L)}}let Jt=L.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Vt=!0);let ie=dt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[st])?gt=ie[st][xt]:gt=ie[st],pt=!0):L.samples>0&&yt.useMultisampledRTT(L)===!1?gt=dt.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?gt=ie[xt]:gt=ie,at.copy(L.viewport),Et.copy(L.scissor),_t=L.scissorTest}else at.copy(Dt).multiplyScalar(ft).floor(),Et.copy(X).multiplyScalar(ft).floor(),_t=lt;if(xt!==0&&(gt=H),T.bindFramebuffer(Y.FRAMEBUFFER,gt)&&T.drawBuffers(L,gt),T.viewport(at),T.scissor(Et),T.setScissorTest(_t),pt){let qt=dt.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+st,qt.__webglTexture,xt)}else if(Vt){let qt=st;for(let Jt=0;Jt<L.textures.length;Jt++){let ie=dt.get(L.textures[Jt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Jt,ie.__webglTexture,xt,qt)}}else if(L!==null&&xt!==0){let qt=dt.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,qt.__webglTexture,xt)}j=-1};function Nn(L){let st=dt.get(L);return(st.__readFormat!==L.format||st.__readType!==L.type)&&(st.__readFormat=L.format,st.__readType=L.type,st.__formatReadable=z.textureFormatReadable(L.format),st.__typeReadable=z.textureTypeReadable(L.type)),st}this.readRenderTargetPixels=function(L,st,xt,gt,pt,Vt,Zt,qt=0){if(!(L&&L.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt){T.bindFramebuffer(Y.FRAMEBUFFER,Jt);try{let ie=L.textures[qt],ge=ie.format,xe=ie.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+qt);let ee=Nn(ie);if(ee.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=L.width-gt&&xt>=0&&xt<=L.height-pt&&Y.readPixels(st,xt,gt,pt,Mt.convert(ge),Mt.convert(xe),Vt)}finally{let ie=it!==null?dt.get(it).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,st,xt,gt,pt,Vt,Zt,qt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt)if(st>=0&&st<=L.width-gt&&xt>=0&&xt<=L.height-pt){T.bindFramebuffer(Y.FRAMEBUFFER,Jt);let ie=L.textures[qt],ge=ie.format,xe=ie.type;L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+qt);let ee=Nn(ie);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ie),Y.bufferData(Y.PIXEL_PACK_BUFFER,Vt.byteLength,Y.STREAM_READ),Y.readPixels(st,xt,gt,pt,Mt.convert(ge),Mt.convert(xe),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let nn=it!==null?dt.get(it).__webglFramebuffer:null;T.bindFramebuffer(Y.FRAMEBUFFER,nn);let Ve=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await up(Y,Ve,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ie),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Vt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ie),Y.deleteSync(Ve),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,st=null,xt=0){let gt=Math.pow(2,-xt),pt=Math.floor(L.image.width*gt),Vt=Math.floor(L.image.height*gt),Zt=st!==null?st.x:0,qt=st!==null?st.y:0;yt.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,xt,0,0,Zt,qt,pt,Vt),T.unbindTexture()},this.copyTextureToTexture=function(L,st,xt=null,gt=null,pt=0,Vt=0){let Zt,qt,Jt,ie,ge,xe,ee,Ie,nn,Ve=L.isCompressedTexture?L.mipmaps[Vt]:L.image;if(xt!==null)Zt=xt.max.x-xt.min.x,qt=xt.max.y-xt.min.y,Jt=xt.isBox3?xt.max.z-xt.min.z:1,ie=xt.min.x,ge=xt.min.y,xe=xt.isBox3?xt.min.z:0;else{let Qe=Math.pow(2,-pt);Zt=Math.floor(Ve.width*Qe),qt=Math.floor(Ve.height*Qe),L.isDataArrayTexture?Jt=Ve.depth:L.isData3DTexture?Jt=Math.floor(Ve.depth*Qe):Jt=1,ie=0,ge=0,xe=0}gt!==null?(ee=gt.x,Ie=gt.y,nn=gt.z):(ee=0,Ie=0,nn=0);let Fe=Mt.convert(st.format),En=Mt.convert(st.type),Kt;st.isData3DTexture?(yt.setTexture3D(st,0),Kt=Y.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(yt.setTexture2DArray(st,0),Kt=Y.TEXTURE_2D_ARRAY):(yt.setTexture2D(st,0),Kt=Y.TEXTURE_2D),T.activeTexture(Y.TEXTURE0),T.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,st.flipY),T.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),T.pixelStorei(Y.UNPACK_ALIGNMENT,st.unpackAlignment);let Dn=T.getParameter(Y.UNPACK_ROW_LENGTH),we=T.getParameter(Y.UNPACK_IMAGE_HEIGHT),ti=T.getParameter(Y.UNPACK_SKIP_PIXELS),Ei=T.getParameter(Y.UNPACK_SKIP_ROWS),es=T.getParameter(Y.UNPACK_SKIP_IMAGES);T.pixelStorei(Y.UNPACK_ROW_LENGTH,Ve.width),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ve.height),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,ie),T.pixelStorei(Y.UNPACK_SKIP_ROWS,ge),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,xe);let er=L.isDataArrayTexture||L.isData3DTexture,De=st.isDataArrayTexture||st.isData3DTexture;if(L.isDepthTexture){let Qe=dt.get(L),ns=dt.get(st),Be=dt.get(Qe.__renderTarget),is=dt.get(ns.__renderTarget);T.bindFramebuffer(Y.READ_FRAMEBUFFER,Be.__webglFramebuffer),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let nr=0;nr<Jt;nr++)er&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,dt.get(L).__webglTexture,pt,xe+nr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,dt.get(st).__webglTexture,Vt,nn+nr)),Y.blitFramebuffer(ie,ge,Zt,qt,ee,Ie,Zt,qt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(pt!==0||L.isRenderTargetTexture||dt.has(L)){let Qe=dt.get(L),ns=dt.get(st);T.bindFramebuffer(Y.READ_FRAMEBUFFER,N),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,k);for(let Be=0;Be<Jt;Be++)er?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qe.__webglTexture,pt,xe+Be):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Qe.__webglTexture,pt),De?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ns.__webglTexture,Vt,nn+Be):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ns.__webglTexture,Vt),pt!==0?Y.blitFramebuffer(ie,ge,Zt,qt,ee,Ie,Zt,qt,Y.COLOR_BUFFER_BIT,Y.NEAREST):De?Y.copyTexSubImage3D(Kt,Vt,ee,Ie,nn+Be,ie,ge,Zt,qt):Y.copyTexSubImage2D(Kt,Vt,ee,Ie,ie,ge,Zt,qt);T.bindFramebuffer(Y.READ_FRAMEBUFFER,null),T.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else De?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(Kt,Vt,ee,Ie,nn,Zt,qt,Jt,Fe,En,Ve.data):st.isCompressedArrayTexture?Y.compressedTexSubImage3D(Kt,Vt,ee,Ie,nn,Zt,qt,Jt,Fe,Ve.data):Y.texSubImage3D(Kt,Vt,ee,Ie,nn,Zt,qt,Jt,Fe,En,Ve):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Vt,ee,Ie,Zt,qt,Fe,En,Ve.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Vt,ee,Ie,Ve.width,Ve.height,Fe,Ve.data):Y.texSubImage2D(Y.TEXTURE_2D,Vt,ee,Ie,Zt,qt,Fe,En,Ve);T.pixelStorei(Y.UNPACK_ROW_LENGTH,Dn),T.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,we),T.pixelStorei(Y.UNPACK_SKIP_PIXELS,ti),T.pixelStorei(Y.UNPACK_SKIP_ROWS,Ei),T.pixelStorei(Y.UNPACK_SKIP_IMAGES,es),Vt===0&&st.generateMipmaps&&Y.generateMipmap(Kt),T.unbindTexture()},this.initRenderTarget=function(L){dt.get(L).__webglFramebuffer===void 0&&yt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?yt.setTextureCube(L,0):L.isData3DTexture?yt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?yt.setTexture2DArray(L,0):yt.setTexture2D(L,0),T.unbindTexture()},this.resetState=function(){B=0,W=0,it=null,T.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};(function(n){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),i=new Set(["left","center","right"]),s=(u,h)=>u==="dockAlignment"?i.has(h):e.has(u)&&typeof h=="boolean",r=u=>i.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([h,f])=>s(h,f)))}function a(u,h){return u?.[h]!==!1}function c(u,h,f){if(!s(h,f)||f===(h==="dockAlignment"?r(u):a(u,h)))return u;let d={...u};return f===(h==="dockAlignment"?"right":!0)?delete d[h]:d[h]=f,Object.keys(d).length?d:void 0}function l(u,h){return a(h,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}n.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var fa=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,Yp=fa.features,kA=fa.valid,bi=fa.enabled,Bl=fa.wind,$p=fa.dockAlignment;function qn(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new fe,l=0;for(let u=0;u<n.length;++u){let h=n[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=n[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Zp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][f]);let g=Zp(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Zp(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Te(o,e,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let h=c/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let y=u.getComponent(f,g);a.setComponent(f+h,g,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var da=new V;function oi(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;da.copy(t),da[i]=0,da.normalize();let l=.5*o/(o+a),u=1-da.angleTo(n)/c;return Math.sign(da[e])===1?u*l:a/(o+a)+l+l*(1-u)}var zl=class n extends Ae{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new V,l=new V,u=new V(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,y=new V,p=.5/o;for(let m=0,x=0;m<h.length;m+=3,x+=2)switch(c.fromArray(h,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),h[m+0]=u.x*Math.sign(c.x)+l.x*r,h[m+1]=u.y*Math.sign(c.y)+l.y*r,h[m+2]=u.z*Math.sign(c.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:y.set(1,0,0),d[x+0]=oi(y,l,"z","y",r,i),d[x+1]=1-oi(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[x+0]=1-oi(y,l,"z","y",r,i),d[x+1]=1-oi(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[x+0]=1-oi(y,l,"x","z",r,t),d[x+1]=oi(y,l,"z","x",r,i);break;case 3:y.set(0,-1,0),d[x+0]=1-oi(y,l,"x","z",r,t),d[x+1]=1-oi(y,l,"z","x",r,i);break;case 4:y.set(0,0,1),d[x+0]=1-oi(y,l,"x","y",r,t),d[x+1]=1-oi(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[x+0]=oi(y,l,"x","y",r,t),d[x+1]=1-oi(y,l,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var jp=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),MM=Math.PI*2;function SM(){let n=new se,t=new Ae(1,1,1),e=new Re(1,12,8),i=new Map;function s(a){return i.has(a)||i.set(a,new Ye({color:a,roughness:.83})),i.get(a)}function r(a,c,l,u,h,f,d,g,y){let p=new ue(c,typeof l=="string"?s(l):l);return p.position.set(u,h,f),p.scale.set(d,g,y),a.add(p),p}function o(){let a=new Map;for(let l of n.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let h=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),f=new ue(qn(h),l);f.castShadow=u.some(d=>d.castShadow),h.forEach(d=>d.dispose()),n.remove(...u),n.add(f)}let c=new Set;n.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:n,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function wM({root:n,box:t},e,i,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,i*.065),u=new Oe({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:tn});t(n,o,0,1.8,0,e*.91,3.6,i*.88),t(n,r,0,14,0,e*.95,21,i*.93).castShadow=!0;for(let d of[-1,1])t(n,s?"#deb181":"#aa785d",d*e*.232,14,i*.469,e*.448,17,i*.021),t(n,"#c8a378",d*e*.072,14.5,i*.492,e*.047,1.25,i*.016);t(n,o,0,a,0,e,3,i).castShadow=!0;let h=(a+c)/2,f=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(n,o,d,c,0,l,1.8,i),t(n,u,d,h,0,l*.17,f,i-l*2);for(let g of[-i/2+l/2,i/2-l/2])t(n,o,d,h,g,l,f,l)}for(let d of[-i/2+l/2,i/2-l/2])t(n,o,0,c,d,e-l*2,1.8,l),t(n,u,0,h,d,e-l*2,f,l*.17);return t(n,o,0,c+1.5,-i*.325,e*.77,2.7,i*.105),t(n,s?"#cde8d3":"#eed59e",0,c+.42,-i*.265,e*.72,.7,i*.016),{base:a,top:c}}function EM({box:n,oval:t,root:e},i,s,r){let o=new se;o.name="fish-"+i,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new se;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),n(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function TM(n,t,e,i,s,r){let{root:o,box:a,oval:c}=n,l=s-4,u=new Oe({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),h=new Oe({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,i+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let y=(g*7%19/19-.5)*t*.83,p=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],y,i+3,p,r*(1+g%4*.34),.85,r*1.15)}for(let[g,y]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let m=p-1.5,x=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],g*t+m*r,i+3+(2+p*1.6)*Math.min(1.15,r),y*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);x.rotation.z=m*.22}let f=["#e99660","#ecc56d","#bc92b8"].map((g,y)=>EM(n,y,r*(1.72-y*.17),g)),d=Array.from({length:5},(g,y)=>{let p=r*(.45+y%3*.18),m=c(o,h,0,0,0,p,p,p);return m.name="bubble-"+y,m});return g=>{for(let[y,{fish:p,tail:m}]of f.entries()){let x=g*(.43+y*.06)+y*2.07+.5,v=t*(.24+y*.036),b=e*(.17+y*.038);p.position.set(Math.cos(x)*v,i+10+y*3.65+Math.sin(x*1.7)*2.15,Math.sin(x)*b),p.rotation.y=-Math.atan2(Math.cos(x)*b,-Math.sin(x)*v),m.rotation.y=Math.sin(g*8.6+y)*.39}for(let[y,p]of d.entries()){let m=(g*.3+y/d.length)%1;p.position.set(t*.33+Math.sin(m*MM+y)*r,i+5+m*20,e*.23),p.visible=m>.08&&m<.94}}}function AM({root:n,box:t,oval:e},i,s,r,o,a){t(n,"#d4a675",0,r+2.15,0,i*.93,1.6,s*.9);for(let f=0;f<16;f++)e(n,f%2?"#a98467":"#e1c491",(f*11%17/17-.5)*i*.81,r+3,(f*5%17/17-.5)*s*.76,a*1.5,.66,a);e(n,"#a07c66",-i*.29,r+4.5,-s*.13,i*.15,4.7,s*.19),e(n,"#c8a17c",-i*.29,r+7.1,-s*.17,i*.135,4.8,s*.154),e(n,"#624b45",-i*.29,r+4,-s*.011,i*.069,2.5,s*.063),e(n,"#e8c99b",i*.29,r+3.6,-s*.16,i*.1,2.2,s*.16),e(n,"#89ad9e",i*.29,r+5.1,-s*.16,i*.075,.9,s*.115);let c=t(n,"#936b52",i*.11,r+4,-s*.24,i*.27,2.6,s*.083);c.rotation.y=.25;for(let f=0;f<5;f++){let d=e(n,f%2?"#829468":"#a7ad78",-i*.37+f*a,r+6+f%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(f-2)*.24}for(let f=0;f<7;f++)t(n,"#746462",(f/6-.5)*i*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new se;l.name="gecko",n.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(f,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),h=[];for(let f of[-1,1]){e(l,"#463946",5.15*a,1.34*a,f*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new se;g.position.set(d*a*2.1,-.7*a,f*a*1.42),l.add(g);let y=e(g,"#d29861",-.48*d*a,-.13*a,f*1.12*a,.66*a,.54*a,1.43*a);y.rotation.y=f*d*.28;for(let p of[-1,0,1])e(g,"#ecc297",(p*.42+.5)*a,-.55*a,f*2.28*a,.55*a,.22*a,.23*a);h.push({leg:g,side:f,front:d})}}for(let f=0;f<6;f++)e(l,"#96664f",(f%3-1)*2.2*a,1.88*a,(f<3?-.66:.66)*a,.66*a,.25*a,.46*a);return f=>{let d=f*.35+.7,g=Math.cos(d)*i*.13,y=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(f*3.6)*.25,y),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*i*.13);for(let[p,m]of u.entries()){let x=p+1;m.position.set(-(3.55+x*1.24)*a,-.19*x*a,Math.sin(f*1.75-x*.55)*x*a*.32)}for(let{leg:p,side:m,front:x}of h)p.rotation.y=Math.sin(f*3.6)*m*x*.31}}function Kp(n,t,e){if(!Object.hasOwn(jp,n))return null;let i=jp[n],s=SM(),r=i==="aquarium",{base:o,top:a}=wM(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?TM(s,t,e,o,a,c):AM(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,h){l(Math.max(0,h))}}}var Jp=`
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,RM=`
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    vec2 uv = panelUv;
    float time = screenTime;
    vec3 sky = mix(vec3(0.95, 0.36, 0.32), vec3(0.20, 0.42, 0.73), smoothstep(0.37, 1.0, uv.y));
    vec2 sunCenter = vec2(0.65 + sin(time * 0.17) * 0.10, 0.68 + sin(time * 0.21) * 0.035);
    float sun = 1.0 - smoothstep(0.083, 0.108, length((uv - sunCenter) * vec2(1.62, 1.0)));
    vec3 art = mix(sky, vec3(0.99, 0.80, 0.38), sun);
    float ridge = 0.37 + 0.11 * (1.0 - abs(sin(uv.x * 8.0 + time * 0.20)))
      + 0.15 * (1.0 - abs(sin(uv.x * 15.0 - time * 0.14)));
    art = mix(art, vec3(0.23, 0.29, 0.50), 1.0 - smoothstep(ridge, ridge + 0.018, uv.y));
    float ripple = smoothstep(0.67, 0.97, sin(uv.y * 125.0 + uv.x * 20.0 - time * 2.8));
    vec3 water = mix(vec3(0.09, 0.39, 0.56), vec3(0.28, 0.76, 0.81), uv.y * 1.5);
    water = mix(water, vec3(0.68, 0.88, 0.85), ripple * 0.37);
    art = mix(water, art, smoothstep(0.30, 0.33, uv.y));
    float edge = 1.0 - smoothstep(0.45, 0.69, length(uv - 0.5));
    gl_FragColor = vec4(art * (0.58 + 0.42 * edge), 1.0);
    #include <colorspace_fragment>
  }
`,CM=`
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    float along = smoothstep(0.0, 0.22, panelUv.y) * (1.0 - smoothstep(0.78, 1.0, panelUv.y));
    float across = smoothstep(0.0, 0.84, panelUv.x) * (1.0 - smoothstep(0.92, 1.0, panelUv.x));
    float shimmer = 0.74 + 0.26 * sin(panelUv.y * 8.0 - screenTime * 0.7);
    vec3 tint = mix(vec3(0.20, 0.71, 0.81), vec3(0.66, 0.42, 0.78), shimmer * 0.65);
    gl_FragColor = vec4(tint, along * across * (0.32 + 0.17 * shimmer));
    #include <colorspace_fragment>
  }
`;function Qp(n,t,e){let i={value:0},s=new ue(new In(e*.78,43),new ze({uniforms:{screenTime:i},vertexShader:Jp,fragmentShader:RM}));s.name="storybook-tv-screen",s.position.set(-t*.155-.84,59,0),s.rotation.y=-Math.PI/2;let r=new ue(new In(t*.27,e*.79),new ze({uniforms:{screenTime:i},vertexShader:Jp,fragmentShader:CM,transparent:!0,depthWrite:!1,blending:Yi}));return r.name="storybook-tv-spill",r.position.set(-t*.325,28.08,0),r.rotation.x=-Math.PI/2,s.visible=r.visible=!1,n.root.add(s,r),n.animate=(o,a)=>{let c=o?.active===!0;s.visible=r.visible=c,c&&(i.value=Number.isFinite(a)?Math.max(0,Math.floor(a*12)/12):0)},n}(()=>{"use strict";let n=[["baby-toys","Baby toys"],["baby-activities","Baby activities"],["baby-mats","Play mats"],["baby-safety","Colorful safety walls & gates"],["climbing","Soft climbing blocks"],["fireplace","Fireplace & shelves"],["balcony","Balcony plant sets"],["fans","Ceiling fans"],["cleaning","Robot vacuums"],["toy-storage","Toy storage"],["play-furniture","Play furniture"],["pets","Pets"]],t={sage:["Sage","#9bb599","#dce8cc","#f5edcf","#5b755e"],mint:["Mint","#95c8b5","#d6eee0","#f5f9e9","#4f8b7c"],sky:["Sky blue","#98c5d7","#d5ebf0","#f5f8f2","#557e91"],peach:["Peach","#e4ac94","#f6d5ba","#fff2dc","#ad7569"],coral:["Coral","#d58e7e","#f5c5ad","#ffe5d0","#9a5d55"],lavender:["Lavender","#b6a8cf","#e4ddf0","#f6eff6","#756b9b"],butter:["Butter yellow","#e2c681","#f4e3af","#fff6dc","#a58a4e"],cream:["Cream","#e2d5bd","#f5eada","#fff9ec","#998972"],white:["Warm white","#e8e9de","#f8f8ee","#ffffff","#929990"],oak:["Oak","#bd8b62","#e2b786","#f5dfb7","#74523c"],walnut:["Walnut","#906347","#bb865c","#ebc69a","#513a2d"],charcoal:["Charcoal","#39464d","#657680","#d6e0d6","#1d292f"],brass:["Brass","#c9a872","#e9d3a2","#fff2d0","#7f6744"],terracotta:["Terracotta","#b87859","#dba27b","#f1d3af","#744b3a"],forest:["Forest green","#668a63","#a3bb80","#e5e7bc","#355d45"],blush:["Blush","#dbb2a9","#f1d6cc","#fff1e4","#a67b79"],rainbow:["Multicolor","#e7ab9d","#9cc8bd","#edd18b","#6d7591"],teddy:["Teddy brown","#a98263","#cfab84","#ead5ae","#654c3d"],slate:["Soft gray","#929491","#bdc0bd","#f1f0e9","#55595b"]},e=[],i={"baby-toys":"\u25C9","baby-activities":"\u2726","baby-mats":"\u25A6","baby-safety":"\u25A5",climbing:"\u25B0",fireplace:"\u25A4",balcony:"\u2740",fans:"\u2733",cleaning:"\u25C9","toy-storage":"\u25A5","play-furniture":"\u25A3",pets:"\u25C7",living:"\u273F",bedroom:"\u263E",lighting:"\u2726"},s={"baby-safety":"safety wall",fireplace:"fireplace shelfs",fans:"seiling fan",cleaning:"robot vaccum"};function r(l,u,h,f,d,g,y,p,m={}){for(let x=0;x<p.length;x++){let v=p[x],b=t[v];if(!b)throw new Error("Unknown inventory color: "+v);let _=`${l}-${f}-${v}`;e.push({type:_,label:`${d} \xB7 ${b[0]}`,icon:i[l],w:g,h:y,group:l,artFamily:u,form:h,palette:{base:b[1],accent:b[2],detail:b[3],dark:b[4]},tags:`${m.tags||""} ${s[l]||""}`.trim(),...m.collectionId?{collectionId:m.collectionId}:{},...m.seriesId?{seriesId:m.seriesId}:{},...m.designId?{designId:m.designId}:{},...m.designLabel?{designLabel:m.designLabel}:{},...m.sizeId?{sizeId:m.sizeId}:{},...m.sizeLabel?{sizeLabel:m.sizeLabel}:{},...m.material?{material:m.material}:{},...m.seriesId?{finishId:v,finishLabel:b[0]}:{},...m.legacy?{legacy:!0}:{},...m.atlas&&x===0?{atlas:m.atlas}:{},...m.mount?{mount:m.mount}:{},...m.visualKind?{visualKind:m.visualKind}:{},...m.lightForm?{lightForm:m.lightForm}:{},...m.renderLayer?{renderLayer:m.renderLayer}:{}})}}r("baby-toys","softToy","ball","soft-ball","Soft play ball",48,48,["sage","peach","sky","butter"],{tags:"8 month baby roll"}),r("baby-toys","softToy","texturedBall","sensory-ball","Textured sensory ball",48,48,["sky","mint","lavender","coral"],{atlas:"sensoryBall",tags:"8 month baby sensory"}),r("baby-toys","softToy","book","cloth-book","Cloth crinkle book",61,48,["sage","peach","sky"],{tags:"baby fabric book"}),r("baby-toys","softToy","book","board-book","Chunky board book",59,45,["butter","mint"],{tags:"baby books"}),r("baby-toys","softToy","cups","stacking-cups","Large stacking cups",70,56,["peach","sage","sky","lavender"],{tags:"baby nesting cups"}),r("baby-toys","softToy","rings","stacking-rings","Large stacking rings",68,68,["rainbow","butter","mint","coral"],{atlas:"stackRings",tags:"baby stacker"}),r("baby-toys","softToy","blocks","soft-blocks","Soft fabric blocks",88,70,["sage","sky","peach","lavender"],{tags:"large baby blocks"}),r("baby-toys","softToy","plush","plush-bear","Plush bear",58,65,["teddy","cream","blush"],{atlas:"plushBear",tags:"baby stuffed animal"}),r("baby-toys","softToy","photoBunnyPlush","bunny-plush","Soft bunny plush",58,70,["cream"],{tags:"photo 1977 living room baby stuffed animal rabbit"}),r("baby-toys","softToy","teether","teething-ring","Large teething ring",48,48,["mint","butter"],{tags:"baby silicone"}),r("baby-activities","activityToy","playGym","play-gym","Floor play gym",160,126,["sage","peach","sky"],{atlas:"playGym",tags:"baby activity arch"}),r("baby-activities","activityToy","photoWoodArch","wooden-play-arch","Wooden hanging-toy play arch",140,100,["oak"],{tags:"photo 1977 living room baby gym natural wood dangling toys"}),r("baby-activities","activityToy","photoActivityTable","colorful-activity-table","Colorful activity table",118,90,["rainbow"],{tags:"photo 1977 living room baby sensory music table"}),r("baby-activities","activityToy","activityCube","activity-cube","Activity cube",74,74,["oak","sky","mint"],{atlas:"activityCube",tags:"baby activity"}),r("baby-activities","activityToy","activityBoard","activity-board","Large activity board",124,60,["oak","sage","sky"],{atlas:"activityBoard",tags:"baby sensory board"}),r("baby-activities","activityToy","mirror","floor-mirror","Unbreakable play mirror",98,70,["cream","sage"],{tags:"baby floor mirror"}),r("baby-activities","activityToy","tunnel","fabric-tunnel","Soft fabric crawl tunnel",130,74,["sky","butter"],{tags:"baby crawl"}),r("baby-activities","activityToy","sensoryBasket","sensory-basket","Sensory play basket",73,65,["oak","mint"],{tags:"baby toys basket"}),r("baby-activities","activityToy","largeRattle","large-rattle","Large handled rattle",56,42,["peach","sage"],{tags:"baby grasp"}),r("baby-mats","playMat","tummy","tummy-mat","Tummy-time mat",182,130,["sage","peach","sky","butter"],{tags:"baby soft floor mat"}),r("baby-mats","playMat","foam","foam-mat","Large foam play mat",215,155,["rainbow","cream","mint","lavender","coral"],{atlas:"mat",tags:"baby floor padded"}),r("baby-mats","playMat","photoLeafMat","leaf-play-mat","Gray leaf play mat",240,170,["slate"],{tags:"photo 1977 living room baby quilted patterned padded mat"}),r("baby-mats","playMat","photoCheckerMat","checker-puzzle-mat","Brown checker puzzle mat",210,140,["cream"],{tags:"photo 1977 living room baby foam tile checkerboard"}),r("baby-mats","playMat","puzzle","puzzle-mat","Interlocking play mat",205,155,["sage","sky","butter","peach"],{tags:"baby padded puzzle"}),r("baby-mats","playMat","round","round-mat","Round quilted play mat",160,160,["cream","blush","mint"],{tags:"baby floor rug"}),r("baby-safety","paddedPanel","wall","padded-wall","Padded safety wall",156,29,["sage","mint","sky","peach","lavender","butter"],{atlas:"wallPanels",mount:"wall",tags:"color padded wall panel"}),r("baby-safety","paddedPanel","quilted","quilted-wall","Quilted wall panel",146,30,["cream","sky","blush","sage"],{mount:"wall",tags:"color soft wall"}),r("baby-safety","paddedPanel","folding","folding-wall","Folding play barrier",174,34,["sage","peach","lavender"],{tags:"baby color safety wall"}),r("baby-safety","paddedPanel","playpen","playpen","Panel playpen",182,143,["cream","sage","sky"],{tags:"baby enclosure"}),r("baby-safety","paddedPanel","photoPlayYard","rainbow-play-yard","Multicolor bear-panel play yard",320,225,["rainbow"],{tags:"photo 1977 living room baby safety enclosure playpen fence"}),r("baby-safety","paddedPanel","photoBearPanel","bear-panel","Bear-face play yard panel",94,34,["blush","white","mint","butter","sky","lavender"],{tags:"photo 1977 living room baby colorful modular safety gate fence panel"}),r("baby-safety","paddedPanel","gate","stair-gate","Hardware-mounted stair gate",112,29,["white","oak","charcoal"],{atlas:"babyGate",tags:"top of stairs second floor baby gate"}),r("baby-safety","paddedPanel","guard","fireplace-guard","Fireplace barrier",158,35,["charcoal","cream"],{tags:"fireplace baby screen guard"}),r("climbing","foamBlock","cube","foam-cube","Large foam cube",76,76,["sage","sky","peach","butter"],{tags:"soft climbing baby"}),r("climbing","foamBlock","wedge","foam-wedge","Foam climbing wedge",122,81,["rainbow","peach","sage","sky","lavender"],{atlas:"foamWedge",tags:"soft climbing ramp"}),r("climbing","foamBlock","steps","foam-steps","Foam step set",130,102,["rainbow","sage","butter","sky","peach"],{atlas:"foamSteps",tags:"soft climbing blocks"}),r("climbing","foamBlock","ramp","foam-ramp","Gentle foam ramp",157,91,["mint","peach","lavender"],{tags:"soft climbing"}),r("climbing","foamBlock","arch","foam-arch","Foam crawling arch",126,105,["rainbow","sky","sage","butter"],{atlas:"foamArch",tags:"soft climbing"}),r("climbing","foamBlock","tunnel","foam-tunnel","Foam crawl tunnel",155,112,["sage","peach","lavender"],{tags:"soft play climbing"}),r("fireplace","fireplace","mantel","fireplace-mantel","Fireplace mantel",180,64,["oak","walnut","white"],{atlas:"fireplace",tags:"hearth fireplace shelf"}),r("fireplace","fireplace","photoTiledMantel","white-tile-mantel","White mantel with dark tile hearth",180,95,["white"],{tags:"photo 1977 living room fireplace stone tile surround"}),r("fireplace","fireplace","hearth","fireplace-hearth","Stone fireplace hearth",169,87,["cream","charcoal","terracotta"],{tags:"fireplace insert"}),r("fireplace","fireplace","screen","fireplace-screen","Fireplace screen",172,31,["charcoal","brass"],{tags:"fireplace guard"}),r("fireplace","shelf","floating","floating-shelf","Floating mantel shelf",162,40,["oak","walnut","white","charcoal"],{tags:"fireplace wall shelf"}),r("fireplace","shelf","corner","corner-shelf","Corner display shelf",108,108,["oak","white"],{tags:"fireplace shelves"}),r("fireplace","shelf","anchored","anchored-bookcase","Anchored book display shelf",87,152,["oak","white"],{tags:"anchored shelves bookcase"}),r("fireplace","shelf","photoToyShelf","toy-side-shelf","Fireplace side toy shelf",85,130,["oak"],{tags:"photo 1977 living room toy display shelving"}),r("balcony","planterSet","rail","rail-planters","Balcony rail planter set",179,53,["forest","terracotta","white","charcoal"],{atlas:"balconyPlants",tags:"balcony flowers plant set"}),r("balcony","planterSet","cluster","pot-cluster","Balcony pot cluster",137,100,["terracotta","cream","sage","charcoal"],{tags:"balcony plant set"}),r("balcony","planterSet","herbs","herb-trio","Balcony herb trio",133,60,["sage","terracotta","white"],{tags:"balcony plant set herbs"}),r("balcony","planterSet","hanging","hanging-plants","Hanging basket pair",113,77,["forest","terracotta","cream"],{tags:"balcony plant set"}),r("balcony","planterSet","vertical","vertical-garden","Vertical balcony garden",83,160,["forest","sage","walnut"],{tags:"balcony plant set"}),r("balcony","planterSet","tall","tall-planters","Tall balcony planter set",138,119,["forest","terracotta","charcoal"],{tags:"balcony plant set"}),r("fans","ceilingFan","three","three-blade-fan","Three-blade ceiling fan",150,150,["oak","white","charcoal"],{atlas:"ceilingFan",tags:"ceiling fan"}),r("fans","ceilingFan","four","four-blade-fan","Four-blade ceiling fan",155,155,["white","walnut","brass"],{tags:"ceiling fan"}),r("fans","ceilingFan","five","five-blade-fan","Five-blade ceiling fan",160,160,["oak","white","charcoal"],{tags:"ceiling fan"}),r("fans","ceilingFan","light","fan-light","Ceiling fan with light",158,158,["white","brass"],{tags:"ceiling fan light"}),r("fans","ceilingFan","palm","palm-fan","Palm-leaf ceiling fan",168,168,["forest"],{tags:"ceiling fan"}),r("cleaning","robotVacuum","round","round-robot-vac","Round robot vacuum",58,58,["white","charcoal","sage","brass"],{atlas:"robotVacuum",tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","docked","docked-robot-vac","Robot vacuum with dock",76,58,["white","charcoal"],{tags:"robot vacuum cleaner charging compact"}),r("cleaning","robotVacuum","mop","robot-mop","Robot vacuum mop",60,60,["white","charcoal"],{tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","slim","slim-robot-vac","Slim robot vacuum",66,50,["white","charcoal"],{tags:"robot vacuum cleaner compact"}),r("toy-storage","storage","basket","toy-basket","Woven toy basket",85,76,["oak","cream","sage"],{tags:"baby toy storage"}),r("toy-storage","storage","bin","soft-toy-bin","Soft toy bin",84,74,["sage","peach","sky"],{tags:"baby toy storage"}),r("toy-storage","storage","cubby","low-cubby","Low toy cubby",136,67,["oak","white"],{tags:"baby toy storage shelf"}),r("play-furniture","playFurniture","softPouf","soft-pouf","Soft play pouf",79,79,["sage","peach","lavender"],{tags:"baby soft seat"}),r("play-furniture","playFurniture","photoBearChair","bear-floor-chair","Teddy bear toddler floor chair",86,85,["teddy"],{tags:"photo 1977 living room baby bear armchair"}),r("play-furniture","playFurniture","photoBolster","gray-bolster","Long gray floor bolster",126,43,["slate"],{tags:"photo 1977 living room baby soft support pillow"}),r("play-furniture","playFurniture","lowTable","low-play-table","Low play table",127,79,["oak","white"],{tags:"baby play furniture"}),r("play-furniture","playFurniture","lowShelf","low-play-shelf","Low play shelf",129,52,["oak","white"],{tags:"baby play furniture"}),r("pets","habitat","aquarium","fish-aquarium","Fish aquarium",122,66,["oak"],{tags:"fish tank pet habitat swimming bubbles animated freshwater planted glass"}),r("pets","habitat","terrarium","lizard-terrarium","Lizard terrarium",116,72,["walnut"],{tags:"lizard tank pet habitat gecko vivarium desert sand glass animated"});let o="detailed realistic crafted miniature dollhouse warm original material-rich",a=(l,u,h,f,d,g)=>({collectionId:"crafted-miniature-v1",seriesId:l,designId:u,designLabel:h,sizeId:f,sizeLabel:d,material:g});r("living","cuteFurniture","cloudSofa","cloud-sofa","Tailored sectional sofa",175,120,["blush","mint"],{...a("sofa","sectional","Sectional","three-seat","3 seat","upholstery"),tags:`${o} sofa couch sectional stitched piping`}),r("living","cuteFurniture","tailoredSofa","tailored-sofa","Tailored three-seat sofa",170,88,["sage","cream","charcoal"],{...a("sofa","tailored","Tailored sofa","three-seat","3 seat","upholstery"),tags:`${o} sofa couch three seat stitched upholstery`}),r("living","cuteFurniture","tailoredLoveseat","tailored-loveseat","Tailored loveseat",126,86,["blush","sage"],{...a("sofa","tailored","Tailored sofa","loveseat","Loveseat","upholstery"),tags:`${o} sofa couch loveseat two seat stitched upholstery`}),r("living","cuteFurniture","chaiseSofa","upholstered-chaise","Upholstered chaise",88,148,["cream","lavender"],{...a("sofa","chaise","Chaise lounge","chaise","Chaise","upholstery"),tags:`${o} sofa chaise lounge stitched upholstery`}),r("living","cuteFurniture","petalDining","petal-dining-set","Oval four-seat dining set",168,112,["oak","cream"],{...a("dining","oval","Oval dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs upholstered beveled wood`}),r("living","cuteFurniture","roundDining","round-dining-set","Round four-seat dining set",142,142,["oak","walnut"],{...a("dining","round","Round dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs round pedestal wood`}),r("living","cuteFurniture","rectDining","rectangular-dining-set","Rectangular six-seat dining set",205,122,["oak","white"],{...a("dining","rectangular","Rectangular dining","six-seat","6 seat","wood"),legacy:!0,tags:`${o} dining table six chairs rectangular wood`}),r("living","cuteFurniture","petalDiningTable","petal-dining-table","Petal dining table",132.72,62.72,["oak","cream"],{...a("dining-table","oval","Rounded dining table","four-seat","4 seats fit","wood"),tags:`${o} dining table beveled wood tabletop`}),r("living","cuteFurniture","roundDiningTable","round-dining-table","Round pedestal dining table",82.36,82.36,["oak","walnut"],{...a("dining-table","round","Round pedestal","four-seat","4 seats fit","wood"),tags:`${o} dining table round pedestal wood tabletop`}),r("living","cuteFurniture","rectDiningTable","rectangular-dining-table","Rectangular dining table",161.95,68.32,["oak","white"],{...a("dining-table","rectangular","Rectangular dining table","six-seat","6 seats fit","wood"),tags:`${o} dining table rectangular wood tabletop`}),r("living","cuteFurniture","diningChair","dining-chair","Upholstered dining chair",34,26,["sage","blush","lavender","butter"],{...a("dining-chair","upholstered","Upholstered chair","standard","Standard","upholstery"),tags:`${o} dining chair seat upholstered wood`}),r("living","cuteFurniture","acornChair","acorn-armchair","Piped reading armchair",88,88,["teddy","sage","blush"],{...a("armchair","piped","Piped armchair","standard","Standard","upholstery"),tags:`${o} armchair reading seat upholstered piping`}),r("living","cuteFurniture","lilyCoffee","lily-coffee-table","Beveled oval coffee table",110,70,["oak","white"],{...a("coffee-table","oval","Oval top","standard","Standard","wood"),tags:`${o} coffee table beveled wood joinery`}),r("living","cuteFurniture","bubbleSide","bubble-side-table","Stone-top side table",58,58,["mint","butter"],{...a("side-table","stone","Stone top","standard","Standard","stone"),tags:`${o} round side table stone pedestal`}),r("bedroom","cuteFurniture","moonBed","moon-bed","Moon-quilt queen bed",210,185,["lavender","sky","cream"],{...a("bed","moon-quilt","Moon quilt","queen","Queen","upholstery"),tags:`${o} bedroom bed queen quilted upholstered moon embroidery`}),r("bedroom","cuteFurniture","cribBed","crafted-crib","Slatted crib",92,142,["cream","sage"],{...a("bed","crib","Slatted crib","crib","Crib","wood"),tags:`${o} bedroom baby crib slatted fitted mattress`}),r("bedroom","cuteFurniture","toddlerBed","crafted-toddler-bed","Low toddler bed",105,158,["sky","blush"],{...a("bed","toddler","Low toddler","toddler","Toddler","upholstery"),tags:`${o} bedroom toddler bed low guard rail`}),r("bedroom","cuteFurniture","platformBed","platform-bed-twin","Low platform twin bed",120,196,["oak","walnut","white"],{...a("bed","platform","Low platform","twin","Twin","wood"),tags:`${o} bedroom bed twin low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-full","Low platform full bed",158,198,["oak","walnut","white"],{...a("bed","platform","Low platform","full","Full","wood"),tags:`${o} bedroom bed full double low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-queen","Low platform queen bed",188,205,["oak","walnut","white"],{...a("bed","platform","Low platform","queen","Queen","wood"),tags:`${o} bedroom bed queen low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-king","Low platform king bed",226,205,["oak","walnut","white"],{...a("bed","platform","Low platform","king","King","wood"),tags:`${o} bedroom bed king low platform wood`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-full","Arched upholstered full bed",158,198,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","full","Full","upholstery"),tags:`${o} bedroom bed full double arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-queen","Arched upholstered queen bed",188,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","queen","Queen","upholstery"),tags:`${o} bedroom bed queen arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-king","Arched upholstered king bed",226,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","king","King","upholstery"),tags:`${o} bedroom bed king arched headboard tufted`}),r("bedroom","cuteFurniture","storageBed","storage-bed-full","Drawer storage full bed",158,198,["oak","walnut"],{...a("bed","storage","Drawer storage","full","Full","wood"),tags:`${o} bedroom bed full double storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-queen","Drawer storage queen bed",188,205,["oak","walnut"],{...a("bed","storage","Drawer storage","queen","Queen","wood"),tags:`${o} bedroom bed queen storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-king","Drawer storage king bed",226,205,["oak","walnut"],{...a("bed","storage","Drawer storage","king","King","wood"),tags:`${o} bedroom bed king storage drawers wood`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-queen","Four-poster canopy queen bed",188,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","queen","Queen","wood metal"),tags:`${o} bedroom bed queen four poster canopy`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-king","Four-poster canopy king bed",226,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","king","King","wood metal"),tags:`${o} bedroom bed king four poster canopy`}),r("bedroom","cuteFurniture","daybed","upholstered-daybed","Upholstered twin daybed",196,105,["sage","cream"],{...a("bed","daybed","Upholstered daybed","twin","Twin","upholstery"),tags:`${o} bedroom bed twin daybed sofa bolsters`}),r("bedroom","cuteFurniture","bunkBed","slatted-bunk-bed","Slatted twin bunk bed",120,196,["oak","white"],{...a("bed","bunk","Slatted bunk","twin","Twin bunk","wood"),tags:`${o} bedroom bed twin bunk ladder rails`}),r("bedroom","cuteFurniture","sproutDesk","sprout-desk","Crafted writing desk",180,84,["sage","oak"],{...a("desk","writing","Writing desk","compact","Compact","wood"),tags:`${o} office study desk writing wood drawers`}),r("bedroom","cuteFurniture","cornerDesk","corner-desk","Corner workstation",190,146,["sage","oak"],{...a("desk","corner","Corner workstation","large","Large","wood"),tags:`${o} office study desk corner return drawers`}),r("bedroom","cuteFurniture","secretaryDesk","secretary-desk","Secretary writing desk",110,78,["oak","walnut"],{...a("desk","secretary","Secretary desk","compact","Compact","wood"),tags:`${o} office study desk secretary cubbies wood`}),r("bedroom","cuteFurniture","starNightstand","star-nightstand","Brass-knob nightstand",58,56,["butter","lavender"],{...a("nightstand","two-drawer","Two drawer","standard","Standard","wood"),tags:`${o} bedside table brass knob drawer`}),r("bedroom","cuteFurniture","honeyDresser","honey-dresser","Six-drawer dresser",125,60,["oak","peach"],{...a("dresser","six-drawer","Six drawer","wide","Wide","wood"),tags:`${o} bedroom storage dresser drawers joinery`}),r("bedroom","cuteFurniture","storyBookcase","story-bookcase","Framed bookcase",64,156,["oak","mint"],{...a("bookcase","framed","Framed bookcase","tall","Tall","wood"),tags:`${o} book shelf storage joinery`}),r("lighting","cuteLight","budLamp","bud-table-lamp","Pleated ceramic table lamp",48,52,["mint","blush","butter"],{...a("table-light","pleated-ceramic","Pleated ceramic","table","Table","ceramic brass fabric"),tags:`${o} lamp desk bedside pleated shade ceramic`,visualKind:"light",lightForm:"bud_lamp"}),r("lighting","cuteLight","cloudFloorLamp","cloud-floor-lamp","Linen globe floor lamp",58,94,["cream","sky"],{...a("floor-light","linen-globe","Linen globe","floor","Floor","brass linen"),tags:`${o} standing floor lamp linen globe`,visualKind:"light",lightForm:"cloud_floor_lamp"}),r("lighting","cuteLight","bloomCeiling","bloom-ceiling-light","Faceted glass ceiling light",60,60,["white","butter","mint"],{...a("ceiling-light","faceted-flush","Faceted flush mount","ceiling","Ceiling","glass brass"),tags:`${o} ceiling lamp faceted frosted glass flush mount`,visualKind:"light",lightForm:"bloom_ceiling",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","starPendant","star-pendant","Faceted glass pendant",72,72,["lavender","butter"],{...a("pendant-light","faceted-glass","Faceted glass","ceiling","Ceiling","glass brass"),tags:`${o} ceiling pendant faceted glass`,visualKind:"light",lightForm:"star_pendant",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","acornSconce","acorn-wall-sconce","Fluted brass wall sconce",38,50,["oak","cream"],{...a("wall-light","fluted-brass","Fluted brass","wall","Wall","brass glass"),tags:`${o} wall light fluted brass glass`,visualKind:"light",lightForm:"acorn_sconce",mount:"wall"});let c=Object.fromEntries(e.map(l=>[l.type,l]));(typeof window>"u"?globalThis:window).RoomcraftInventory={groups:n,templates:e,byType:c}})();var pa="#f7efdc",IM="#cfa373",tm="#625145",PM="#b9dbe1",qh=["#5a815f","#779d69","#a4b379"],ai=["#dc9f9d","#a9baa2","#e3c076","#9db7cf","#bba6cd"];function em(n,t,e,i,s,r){let o=r?t*.4:e*.39,a=(l,u)=>r?new V(l*o,u,0):new V(0,u,l*o),c=new Bs([a(-1,3),a(-.66,i*.75),a(0,i),a(.66,i*.75),a(1,3)]);n.part(new Dr(c,16,Math.max(.15,Math.min(t,e)*.021),6,!1),s,0,0,0)}function LM(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=o*.29;if(s==="ball"||s==="texturedBall"){if(n.oval(0,a,0,a,a,a,r.base),s==="ball"){n.ring(0,a,0,a*.99,a*.99,a*.044,r.accent);let c=n.ring(0,a,0,a*.99,a*.99,a*.037,r.detail);c.rotation.z=Math.PI/2}else for(let c=0;c<22;c++){let l=(c+.5)/22,u=Math.sqrt(1-l**2)*a*.97,h=c*2.39996;n.oval(Math.sin(h)*u,a*(1+l),Math.cos(h)*u,a*.105,a*.105,a*.105,r.accent)}return a*2.2}if(s==="book"){let c=i.includes("board-book");for(let l of[-1,1]){let u=l*t*.224;n.box(u,1,0,t*.42,3.1,e*.77,r.dark,c?.8:1.5),n.box(u,3.8,0,t*.385,2.1,e*.73,pa,.8),n.oval(u,6.05,-e*.1,t*.1,.45,e*.14,l<0?r.base:r.accent);for(let h of[0,1])n.box(u,6,e*(.1+.075*h),t*(.23-h*.04),.45,.65,r.dark,.18);if(!c)for(let h of[-1,1])n.oval(u+l*t*.19,2.8,h*e*.3,t*.055,1.6,e*.06,r.accent)}return n.box(0,1.9,0,t*.035,4,e*.78,r.base,.8),7}if(s==="cups"||s==="rings"){let c=s==="cups",l=o*(c?.088:.066);n.disc(0,0,0,a*1.14,l*.55,a*1.14,r.dark,.9);for(let u=0;u<5;u++){let h=a*(1-u*.15),f=l*(u+.55),d=[r.base,r.accent,r.detail,ai[2],ai[3]][u];c?(n.disc(0,f-.6,0,h*.91,l,h*.91,d,.91),n.ring(0,f+l*.9,0,h*.88,h*.88,l*.12,u%2?pa:d)):n.ring(0,f+l*.36,0,h,h,l*.39,d)}return n.oval(0,l*5.46,0,a*.18,l*.55,a*.18,c?r.accent:r.dark),l*6.1}if(s==="blocks"){for(let c=0;c<3;c++){let l=(c-1)*t*.25,u=(c%2-.5)*e*.29,h=(c-1)*.17;n.box(l,0,u,t*.23,o*.24,e*.31,[r.base,r.accent,ai[2]][c],o*.038,h),n.box(l,o*.239,u,t*.14,.7,e*.19,pa,.35,h)}return o*.26}n.ring(0,a*.32,0,a,a*.88,a*.27,r.base);for(let c=0;c<9;c++){let l=c*Math.PI*2/9;n.oval(Math.cos(l)*a,a*.66,Math.sin(l)*a*.88,a*.12,a*.095,a*.12,r.accent)}return a*.8}function NM(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=r*.32;if(i==="tunnel"){let u=Math.min(t*.37,e*.42),h=new qe(u,u,e*.83,18,1,!0,-Math.PI/2,Math.PI);h.rotateX(-Math.PI/2);let f=n.part(h,s.base,0,2.2,0);f.material.side=tn;for(let d=0;d<5;d++){let g=Array.from({length:9},(y,p)=>{let m=Math.PI*p/8;return new V(Math.cos(m)*u,2.2+Math.sin(m)*u,(d-2)*e*.2)});n.part(new Dr(new Bs(g),15,Math.max(.15,r*.017),6,!1),s.accent,0,0,0)}return n.box(0,0,0,u*2,2.3,e*.85,s.dark,1.1),u+r*.017+2.2}if(i==="playGym"||i==="photoWoodArch"){i==="playGym"&&(n.box(0,.5,0,t*.95,2.5,e*.88,s.accent,4),em(n,t,e,o,s.base,!1)),em(n,t,e,o,i==="photoWoodArch"?IM:s.base,!0);for(let u of[-1,1])n.box(t*.38*u,0,0,t*.11,4,e*.4,s.dark,1.6);for(let u=-1;u<=1;u++){let h=u*t*.16,f=o*(u?.94:.99),d=o*(.59+u*.045);n.box(h,d,0,1,f-d,1,pa),n.oval(h,d,0,r*.053,r*.057,r*.049,ai[u+2])}return o+2}if(i==="mirror"){n.box(0,0,0,t*.86,4,e*.71,s.dark,2.4);let u=n.box(0,3,-e*.06,t*.75,o*.7,e*.2,s.base,3),h=n.box(0,5.1,e*.035,t*.64,o*.53,2.2,PM,.8);return u.rotation.x=h.rotation.x=-.21,o*.75+3}if(i==="largeRattle")return n.ring(-t*.19,3,0,r*.25,r*.24,r*.055,s.accent),n.box(t*.06,2,0,t*.26,2.9,e*.16,s.dark,1.2),n.oval(t*.26,r*.14,0,r*.25,r*.14,r*.24,s.base),r*.29;if(i==="sensoryBasket"){n.disc(0,0,0,t*.39,o*.55,e*.38,s.base,.74),n.disc(0,o*.52,0,t*.35,1.2,e*.34,s.dark);for(let u=1;u<=3;u++)n.ring(0,o*u*.17,0,t*(.29+u*.034),e*(.28+u*.035),.8,s.accent);for(let u=0;u<4;u++)n.oval(t*(u%2?.16:-.15),o*.67,e*(u<2?-.14:.14),r*.12,r*.12,r*.12,ai[u]);return o+3}let a=i==="photoActivityTable",l=a?o:i==="activityBoard"?o*.2:o*.72;if(a)for(let u of[-.32,.32])for(let h of[-.29,.29])n.box(t*u,0,e*h,t*.105,l,e*.125,ai[h<0?3:1],2.6);else n.box(0,0,0,t*.83,l+1,e*.83,s.base,2.8);n.box(0,l,0,t*.94,Math.max(2.5,r*.057),e*.91,s.accent,2.6);for(let u=0;u<6;u++){let h=t*(.25*(u%3)-.25),f=e*(u<3?-.2:.2),d=l+r*.056;u%3===1?n.box(h,d,f,t*.105,r*.05,e*.15,ai[u%ai.length],1.4,.24):n.disc(h,d,f,r*.081,r*(.044+u*.007),r*.072,ai[u%ai.length],.87)}return l+r*.14}function DM(n,t,e,{form:i,palette:s}){if(i==="round"){n.disc(0,.35,0,t*.48,2.1,e*.48,s.base);for(let u of[.32,.43])n.ring(0,2.53,0,t*u,e*u,.37,s.accent);return 3}if(["tummy","photoLeafMat"].includes(i)){n.box(0,.5,0,t*.97,2.3,e*.95,s.dark,1),n.box(0,1.5,0,t*.95,1.75,e*.93,s.base,.7);for(let u of[-.29,0,.29])for(let h of[-.34,-.12,.12,.34]){let f=n.oval(t*h,3.3,e*u,t*.041,.22,e*.095,s.accent);f.rotation.y=h<0?-.49:.49}return 3.6}let o=i==="photoCheckerMat",a=o?["#e3d3bc","#776056","#c0a083","#776056"]:[s.base,s.accent,s.detail,s.base],c=Math.min(t,e)*.008,l=i==="foam"?4:5;n.box(0,.25,0,t*.99,1,e*.99,s.dark,.5);for(let u=0;u<4;u++)for(let h=0;h<l;h++){let f=t*((h+.5)/l-.5),d=e*((u+.5)/4-.5),g=a[(u+(o?h:h*3))%4];n.box(f,.9,d,t/l-c,2.2,e/4-c,g,.6),i==="puzzle"&&u<3&&n.disc(f,2.6,d+e/8,t*.026,.49,e*.026,g)}return 3.4}function FM(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="tall",a=i==="rail",c=i==="vertical",l=i==="hanging";if(a&&(n.box(0,1,0,t*.92,r*.22,e*.53,s.base,2),n.box(0,r*.22,0,t*.85,2,e*.45,tm,.8)),c){for(let f of[-1,1])n.box(t*.37*f,0,-e*.29,t*.065,r*.79,e*.07,s.dark,1.2);for(let f=0;f<3;f++)n.box(0,r*(.16+.26*f),-e*.11,t*.84,2.8,e*.41,s.accent,1.2)}let u=o||l?[-.25,.25]:[-.3,0,.3],h=0;return u.forEach((f,d)=>{let g=t*f,y=c?-e*.1:e*(i==="cluster"?d===1?.21:-.11:0),p=Math.min(t*.142,e*.265,r*(o?.22:.18)),m=c?r*(.19+.26*d):l?r*.41:0,x=a?r*.25:p*(o?1.7:.87);a||(n.disc(g,m,y,p,x,p,s.base,.68),n.ring(g,m+x,y,p*.95,p*.95,.8,s.accent),n.disc(g,m+x-.72,y,p*.86,1,p*.86,tm));for(let v=0;v<7;v++){let b=v*2.39996+d,_=p*(.41+v%3*.24),S=p*((o?1.9:1.04)+v%3*.26),R=Math.cos(b)*_,M=Math.sin(b)*_,C=n.oval(g+R*.47,m+x+S*.46,y+M*.47,.7,S*.48,.7,qh[0]);C.rotation.z=-Math.atan2(R,S),C.rotation.x=Math.atan2(M,S);let F=n.oval(g+R,m+x+S,y+M,p*.39,p*.13,p*.6,qh[v%qh.length]);F.rotation.y=b,a&&v%3===0&&n.oval(g+R,m+x+S+1.1,y+M,p*.18,p*.13,p*.19,ai[(v+d)%ai.length]),h=Math.max(h,m+x+S+p*.2)}if(l){for(let v of[-1,1]){let b=n.box(g+v*p*.48,m+x+r*.24,y,.72,r*.53,.72,pa);b.rotation.z=v*.36}h=Math.max(h,m+x+r*.53)}}),h}var UM={softToy:LM,activityToy:NM,playMat:DM,planterSet:FM};function nm(n,t,e,i){let s=UM[i.artFamily];return s?.(n,t,e,i)}(n=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor",mount:"wall"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor",mount:"wall"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],i="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=X=>typeof X=="string"&&X.startsWith("ui"),o=X=>String(X??"").toLowerCase(),a=X=>o(X).split(".")[0],c=X=>typeof X=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(X),l=X=>X.type==="window"?"wall":X.mount||"floor",u=X=>X?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(X?.type),h=X=>X?.type==="diningChair"||/^living-dining-chair-/.test(X?.type),f=X=>h(X)||["chair","armchair","stool"].includes(X?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(X?.type),d=X=>Number(X.toFixed(6)),g=X=>(X%360+360)%360;function y(X){let lt=X.type==="table",q=/^living-(petal|round|rectangular)-dining-set-/.exec(X.type);if(!lt&&!q)return;let Q=q?.[1],rt=lt?"diningTable":X.type.replace("-dining-set-","-dining-table-"),ht=Y=>lt?"diningChair":`living-dining-chair-${Y}`,{w:mt,h:Tt}=X;if(lt||Q==="round"){let[Y,ae,Gt,z,T]=lt?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:rt,w:(lt?.79:.58)*mt,h:(lt?.57:.58)*Tt,tableHeight:lt?46.4:41,chairs:[[0,-Tt*Y,mt*Gt,Tt*z,0,ht("sage")],[mt*ae,0,Tt*T,mt*(lt?.17:Gt),90,ht("butter")],[0,Tt*Y,mt*Gt,Tt*z,180,ht("blush")],[-mt*ae,0,Tt*T,mt*(lt?.17:Gt),270,ht("lavender")]]}}let Rt=Q==="rectangular",Ut=Rt?[-.32,0,.32]:[-.28,.28],zt=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:rt,w:.79*mt,h:.56*Tt,tableHeight:42.3,chairs:[-1,1].flatMap((Y,ae)=>Ut.map((Gt,z)=>[mt*Gt,Tt*.37*Y,mt*(Rt?.15:.19),Tt*.23,ae*180,ht(zt[ae][z])]))}}function p(X){if(!Array.isArray(X?.items))return X;let lt=new Set(X.items.map(ht=>ht.id)),q=X.items.filter(f),Q=!1,rt=X.items.flatMap(ht=>{let mt=y(ht);if(!mt||![ht.x,ht.y,ht.w,ht.h,ht.rotation].every(Number.isFinite)||ht.w<=0||ht.h<=0)return[ht];Q=!0;let Tt=ht.rotation*Math.PI/180,Rt=Math.cos(Tt),Ut=Math.sin(Tt),zt=Number.isFinite(ht.modelHeight)?ht.modelHeight:void 0,Y={...ht,type:mt.tableType,w:d(mt.w),h:d(mt.h),...zt===void 0?{}:{modelHeight:Math.max(6,d(zt*mt.tableHeight/59))}};return[...mt.chairs.flatMap(([Gt,z,T,nt,dt,yt],G)=>{let w=d(ht.x+Gt*Rt-z*Ut),E=d(ht.y+Gt*Ut+z*Rt),A=Math.max(8,Math.min(T,nt)*.52);if(q.some(ut=>Math.hypot(ut.x-w,ut.y-E)<=A))return[];let U=`${ht.id}-chair-${G+1}`,O=U,K=2;for(;lt.has(O);)O=`${U}-${K++}`;lt.add(O);let $={id:O,type:yt,name:`Dining chair ${G+1}`,x:w,y:E,w:d(T),h:d(nt),rotation:g(ht.rotation+dt),entityId:"",...zt===void 0?{}:{modelHeight:zt},...Number.isFinite(ht.zIndex)?{zIndex:ht.zIndex}:{}};return q.push($),[$]}),Y]});return Q?{...X,items:rt}:X}function m(){return{templates:[...t,...n.RoomcraftInventory?.templates||[]],paletteGroups:[...n.RoomcraftInventory?.groups||[],...e]}}function x(X,lt,q){return!(!X||!lt||!q||X.type===q.type||q.legacy||s.has(X.type)||r(X.type)||s.has(q.type)||r(q.type)||l(lt)!==l(q)||X.entityId&&!v(X.entityId,q))}function v(X,lt){return!c(X)||typeof lt?.type!="string"||lt.legacy||r(lt.type)||lt.type==="stairs"?!1:lt.type==="cameraThumbnail"?a(X)==="camera":lt.type==="garageDoor"||lt.type==="window"?["cover","binary_sensor","switch"].includes(a(X)):a(X)!=="camera"}function b(X,lt,q){if(!X||X.entityId||!v(lt,q))return!1;let Q=X.type==="cameraThumbnail"?40:12,{x:rt,y:ht,w:mt,h:Tt}=X;return rt>=0&&rt<=1536&&ht>=0&&ht<=1024&&mt>=Q&&mt<=1536&&Tt>=Q&&Tt<=1024}function _(X,lt){let q=a(X.entity_id),Q=o(X.name+" "+X.entity_id),rt=Q.replaceAll("_"," "),ht={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},mt=Rt=>{if(Rt.type==="controlZone")return!0;if(q==="camera")return Rt.type==="cameraThumbnail";if(q==="cover")return Rt.type===(/garage/.test(Q)?"garageDoor":"window");if(q==="climate")return Rt.type==="thermostat";if(q==="media_player"&&/\btv\b|television/.test(rt))return Rt.type==="tv";if(q==="binary_sensor"){if(/presence|occupancy/.test(Q))return Rt.type==="presenceSwitch";if(/garage/.test(Q))return Rt.type==="garageDoor";if(/window|blind|shade/.test(Q))return Rt.type==="window"}if(ht[q]?.includes(Rt.group)||/humidifier/.test(Q)&&Rt.type==="humidifier"||/purifier/.test(Q)&&Rt.type==="airPurifier")return!0;if(q==="switch"){if(/light|lamp/.test(Q))return Rt.group==="lighting";if(/fan/.test(Q))return Rt.group==="fans"||Rt.type==="windowFan"}return!1},Tt=lt.filter(Rt=>v(X.entity_id,Rt));return{recommended:Tt.filter(mt),available:Tt}}function S(X){let lt=new Map;for(let q of X){let Q=[[q.entityId,"primary"],[q.tapEntityId,"Tap target"],[q.holdEntityId,"Hold target"],[q.presenceEntityId,"Presence sensor"],[q.presenceTrackEntityId,"Radar targets"],[q.vacuumMapEntityId,"Map camera"],[q.imageEntityId,"Event image"],...Array.isArray(q.eventEntityIds)?q.eventEntityIds.map(rt=>[rt,"Camera event"]):[]];for(let[rt,ht]of Q)c(rt)&&(lt.has(rt)||lt.set(rt,[]),lt.get(rt).push({item:q,role:ht}))}return lt}function R(X){return X&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(X.type)&&!r(X.type)}function M(X,lt,q,Q){if(!["w","h"].includes(lt)||!Number.isFinite(q))return null;let rt=X.type==="cameraThumbnail"?40:12,ht=X.type==="cameraThumbnail"||c(X.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!Q)return{[lt]:Math.min(ht[lt],Math.max(rt,q))};let mt=Math.min(ht.w/X.w,ht.h/X.h),Tt=Math.min(mt,Math.max(rt/X.w,rt/X.h)),Rt=Math.min(mt,Math.max(Tt,q/X[lt]));return{w:Math.round(X.w*Rt*10)/10,h:Math.round(X.h*Rt*10)/10}}function C(X,lt,q,Q){if(![lt,q,X?.w,X?.h].every(Number.isFinite)||X.w<=0||X.h<=0)return null;if(!Q)return{...M(X,"w",lt,!1),...M(X,"h",q,!1)};let rt=(lt*X.w+q*X.h)/(X.w**2+X.h**2);return M(X,"w",rt*X.w,!0)}let F=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),I=new Set(["lamp","tableLamp","humidifier","plant"]),D=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),H=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,N=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,k=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function B(X,lt,q){if(X==="playpen"||X==="photoPlayYard"){let Ut=Math.min(lt,q)*.055;return[[0,-(q-Ut)/2,lt-Ut,Ut,0],[0,(q-Ut)/2,lt-Ut,Ut,0],[-(lt-Ut)/2,0,q-Ut,Ut,Math.PI/2],[(lt-Ut)/2,0,q-Ut,Ut,Math.PI/2]]}let Q=X==="folding",rt=Q?4:3,ht=Math.min(Q?39:29,lt*.28),mt=lt/rt,Tt=Math.min(q*(Q?.5:.73),ht*.6),Rt=Q?Math.min(.18,Tt/mt*.85):0;return Array.from({length:rt},(Ut,zt)=>[-lt/2+mt*(zt+.5),0,mt,Tt,zt%2?-Rt:Rt])}function W(X){let{w:lt,h:q}=X,Q=n.RoomcraftInventory?.byType?.[X.type];if(Q?.artFamily==="foamBlock"){let mt=Math.min(1.4,Math.min(lt,q)*.021);if(["arch","tunnel","wedge","ramp"].includes(Q.form)){let Tt=q*(Q.form==="tunnel"?.83:.73);return[[0,0,lt*.91+2*mt,Tt+2.08*mt]]}return[[0,0,lt*(Q.form==="steps"?.99:.96),q*.96]]}if(Q?.form==="softPouf")return[[0,0,lt*.97,q*.97]];if(Q?.form==="photoBolster")return[[0,0,lt*.96,q*.94]];if(Q?.artFamily!=="paddedPanel")return null;let rt=Q.form;if(rt==="photoBearPanel")return[[0,0,lt,q*.49]];if(rt==="gate"||rt==="guard"){let mt=Math.min(q*.55,Math.min(37,lt*.32)*.28);return[[0,0,lt*.99,mt],[-lt*.46,0,lt*.08,q*.73],[lt*.46,0,lt*.08,q*.73]]}let ht=rt==="playpen"||rt==="photoPlayYard";return B(rt,lt,q).map(([mt,Tt,Rt,Ut,zt])=>[mt,Tt,Rt*(ht?1:.955),Ut*(ht?.5:1.28),zt])}function it(X){let lt=X?.type??"";return u(X)||F.has(lt)||H.test(lt)?"surface":I.has(lt)||X?.lightForm==="bud_lamp"||lt.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function j(X){let lt=X.type==="humidifier"?.37:X.type==="plant"?.23:.2;return Math.min(X.w,X.h)*lt}function et(X,lt=!1){let{type:q,w:Q,h:rt}=X;if(u(X))return[[0,0,Q,rt]];if(q==="desk"||q.startsWith("bedroom-corner-desk-"))return[[0,-.33*rt,Q,.34*rt],[-.41*Q,.17*rt,.18*Q,.66*rt],[.41*Q,.17*rt,.18*Q,.66*rt]];if(!lt&&(q==="sofa"||q.startsWith("living-cloud-sofa-")))return rt>Q?[[-.25*Q,0,.5*Q,rt],[.22*Q,(q==="sofa"?.3:-.3)*rt,.52*Q,.38*rt]]:[[0,-.215*rt,Q,.57*rt],[-.32*Q,.25*rt,.34*Q,.46*rt]];if(lt){if(q.startsWith("living-round-dining-"))return[[0,0,.58*Q,.58*rt]];if(q==="table"||/-dining-set-/.test(q))return[[0,0,.79*Q,.56*rt]];if(q.includes("-desk-"))return[[0,0,Q,.85*rt]]}if(!lt&&it(X)==="tabletop"){let ht=2*j(X);return[[0,0,ht,ht]]}return[[0,0,Q*.95,rt*.95]]}function at(X,lt,q){if(![X?.x,X?.y,X?.w,X?.h].every(Number.isFinite)||X.w<=0||X.h<=0)return[];let Q=(Number.isFinite(X.rotation)?X.rotation:0)*Math.PI/180,rt=Math.cos(Q),ht=Math.sin(Q);return(q??et(X,lt)).map(([mt,Tt,Rt,Ut,zt=0])=>{let Y=[Math.cos(Q+zt),Math.sin(Q+zt)];return{x:X.x+mt*rt-Tt*ht,y:X.y+mt*ht+Tt*rt,u:Y,v:[-Y[1],Y[0]],width:Rt/2,height:Ut/2}})}let Et=(X,lt,q)=>X*q[0]+lt*q[1];function _t(X,lt){let q=lt.type.startsWith("living-round-dining-"),Q=at(lt,!0),rt=j(X)*.9;return k.every(([ht,mt])=>Q.some(Tt=>{let Rt=X.x+ht*rt-Tt.x,Ut=X.y+mt*rt-Tt.y,zt=Math.abs(Et(Rt,Ut,Tt.u))/Tt.width,Y=Math.abs(Et(Rt,Ut,Tt.v))/Tt.height;return q?Math.hypot(zt,Y)<=1:zt<=1&&Y<=1}))}function St(X){let lt=W(X);return lt?at(X,!1,lt):h(X)||it(X)!=="floor"||D.has(X.type)||N.test(X.type)?at(X,!1):[]}function Pt(X){return it(X)==="tabletop"||X.type==="rug"||X.type.startsWith("baby-mats-")?[]:["chair","stool","tv"].includes(X.type)||/(?:desk-chair|toy-storage|fireplace|floor-chair)/.test(X.type)||X.type.startsWith("pets-")?at(X,!1):St(X)}function Lt(X,lt){let q=(Q,rt)=>Q.width*Math.abs(Et(...Q.u,rt))+Q.height*Math.abs(Et(...Q.v,rt));return Math.min(...[X.u,X.v,lt.u,lt.v].map(Q=>q(X,Q)+q(lt,Q)-Math.abs(Et(X.x-lt.x,X.y-lt.y,Q))))}function J(X,lt){let[q]=at(X,!1),[Q]=at(lt,!0);if(!q||!Q||Lt(q,Q)<=0)return!1;let rt=[q.x-Q.x,q.y-Q.y],ht=Et(...rt,Q.u)/Q.width,mt=Et(...rt,Q.v)/Q.height,Tt=lt.type.startsWith("living-round-dining-"),Rt;if(Tt){if(Math.hypot(ht,mt)<1)return!1;Rt=-Et(...rt,q.v)/Math.hypot(...rt)}else{let Gt=Math.abs(ht)>=1,z=Math.abs(mt)>=1;if(Gt===z)return!1;Rt=-Math.sign(Gt?ht:mt)*Et(...q.v,Gt?Q.u:Q.v)}if(Rt<.8)return!1;let Ut=lt.type==="diningTable",zt=Ut?46.4:Tt?41:42.3,Y=(lt.modelHeight??zt)*(Ut?32:33)/zt;return(X.modelHeight??59)*30/59<Y}function ft(X,lt,q,Q){let rt=0;for(let Tt of q)for(let Rt of Q)rt=Math.max(rt,Lt(Tt,Rt));if(rt<=2)return rt;let ht=it(X),mt=it(lt);return ht==="tabletop"&&mt==="surface"&&_t(X,lt)||ht==="surface"&&mt==="tabletop"&&_t(lt,X)||h(X)&&u(lt)&&J(X,lt)||u(X)&&h(lt)&&J(lt,X)?0:rt}function Ct(X,lt,q){let Q=St(X);if(!Q.length)return;let rt=q?St(q):[],ht,mt=2;for(let Tt of lt){if(Tt.id===X.id)continue;let Rt=St(Tt),Ut=ft(X,Tt,Q,Rt);Ut<=mt||rt.length&&Ut<=ft(q,Tt,rt,Rt)+.02||(ht=Tt,mt=Ut)}return ht}function Xt(X){let lt=X.filter(mt=>it(mt)==="surface"),q=lt.filter(u),Q=new Set,rt=new Map,ht=new Map;for(let mt of X){let Tt=h(mt);if(!Tt&&it(mt)!=="tabletop")continue;let Rt=Tt?q.find(zt=>J(mt,zt)):lt.find(zt=>_t(mt,zt));if(!Rt)continue;Q.add(mt.id);let Ut=Tt?ht:rt;Ut.has(Rt.id)||Ut.set(Rt.id,[]),Ut.get(Rt.id).push(mt)}return Q.size?X.flatMap(mt=>Q.has(mt.id)?[]:[...ht.get(mt.id)??[],mt,...rt.get(mt.id)??[]]):X}function Dt(X,lt,q){let Q=X.ownerDocument,rt=(E,A,U={})=>{let O=Q.createElement(E);A&&(O.textContent=A);for(let[K,$]of Object.entries(U))O.setAttribute(K,$);return O},ht=rt("dialog","",{class:"model-library","aria-label":"Objects and models"}),mt=rt("header"),Tt=rt("h2","Objects & models"),Rt=rt("button","Close",{type:"button"});mt.append(Tt,Rt);let Ut=rt("div","",{class:"model-library-filters"}),zt=rt("select","",{"aria-label":"Object library section"});for(let[E,A]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])zt.append(rt("option",A,{value:E}));let Y=rt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});Ut.append(zt,Y);let ae=rt("div","",{class:"model-library-context"}),Gt=rt("p","",{role:"status",class:"model-library-status"}),z=rt("div","",{class:"model-library-list"});ht.append(mt,Ut,ae,Gt,z);let T=rt("style");T.textContent=`
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
    `,X.append(T,ht);let nt,dt=!1,yt=(E,A)=>{let U=rt("button",E,{type:"button"});return U.addEventListener("click",A),U};function G(E){nt=E,dt=!1,zt.value=E.existing?"placed":"catalog",Y.value="",w(),Y.focus()}function w(){let{templates:E,paletteGroups:A}=m(),U=new Map(E.map(P=>[P.type,P])),O=new Map(A),{items:K,entities:$}=lt(),ut=o(Y.value).trim(),ct=(...P)=>ut.split(/\s+/).every(Z=>o(P.join(" ")).includes(Z)),At=[];if(ae.replaceChildren(),nt&&(ae.append(rt("strong",nt.item?.name||nt.entity?.name||nt.entity?.entity_id)),nt.entity&&(ae.append(yt(nt.existing?"Choose a new model":"Bind existing object",()=>{G({entity:nt.entity,existing:!nt.existing})})),nt.existing||ae.append(yt(dt?"Suggested models":"All compatible models",()=>{dt=!dt,w()}))),ae.append(yt("Cancel mapping",()=>{zt.value=nt.entity?"devices":"placed",nt=void 0,Y.value="",w()}))),zt.value==="placed")for(let P of K){let Z=U.get(P.type);if(!ct(P.name,Z?.label,P.type,P.entityId))continue;let tt=[P.w,P.h,P.modelHeight].filter(Number.isFinite).join(" \xD7 "),Mt=[Z?.label||P.type,tt&&tt+" plan px",P.entityId].filter(Boolean).join(" \xB7 "),wt;if(nt?.existing){if(!b(P,nt.entity.entity_id,Z))continue;wt=[yt("Bind to this object",()=>q({kind:"bind",itemId:P.id,entityId:nt.entity.entity_id}))]}else wt=[yt("Edit",()=>q({kind:"edit",itemId:P.id}))],E.some(bt=>x(P,Z,bt))&&wt.push(yt("Change model",()=>G({item:P})));At.push([P.name||Z?.label||P.type,Mt,wt])}else if(zt.value==="devices"){let P=S(K);for(let Z of $){if(!c(Z.entity_id)||!ct(Z.name,Z.entity_id,Z.area))continue;let tt=P.get(Z.entity_id)||[],Mt=tt.find(Ot=>Ot.role==="primary"),wt=tt.map(({item:Ot,role:le})=>le==="primary"?Ot.name:le+" for "+Ot.name),bt=[Z.entity_id,Z.area,...wt].filter(Boolean).join(" \xB7 "),Ft=tt.length?[yt(Mt?"Edit mapped object":"Edit linked object",()=>q({kind:"edit",itemId:(Mt||tt[0]).item.id}))]:[];E.some(Ot=>v(Z.entity_id,Ot))&&Ft.push(yt(Mt?"Map again":"Map to object",()=>G({entity:Z,existing:K.some(Ot=>b(Ot,Z.entity_id,U.get(Ot.type)))}))),At.push([Z.name||Z.entity_id,bt,Ft])}}else{let P=E.filter(Z=>!Z.legacy);if(nt?.item&&(P=E.filter(Z=>x(nt.item,U.get(nt.item.type),Z))),nt?.entity){let Z=_(nt.entity,E);P=dt?Z.available:Z.recommended}for(let Z of P){let tt=O.get(Z.group)||Z.group;if(!ct(Z.label,Z.type,Z.tags,tt))continue;let Mt=nt?.item?{kind:"replace",itemId:nt.item.id,modelId:Z.type}:{kind:"place",modelId:Z.type,...nt?.entity?{entityId:nt.entity.entity_id}:{}};At.push([Z.label,tt+" \xB7 "+Z.w+" \xD7 "+Z.h+" plan px",[yt(nt?"Use model":"Place",()=>q(Mt))]])}}z.replaceChildren();for(let[P,Z,tt]of At.slice(0,48)){let Mt=rt("div","",{class:"model-library-row"}),wt=rt("div");wt.append(rt("strong",P),rt("small",Z));let bt=rt("div","",{class:"model-library-actions"});bt.append(...tt),Mt.append(wt,bt),z.append(Mt)}Gt.textContent=At.length>48?"Showing 48 of "+At.length+". Search to narrow the list.":At.length?At.length+(At.length===1?" result":" results"):zt.value==="devices"&&!$.length?"Connect to Home Assistant to list devices.":nt?.existing&&!ut?"No compatible unbound objects. Choose a new model instead.":"No matches."}return zt.addEventListener("change",()=>{nt=void 0,Y.value="",w()}),Y.addEventListener("input",w),Rt.addEventListener("click",()=>ht.close()),{open(E="placed"){nt=void 0,dt=!1,zt.value=E,Y.value="",w(),ht.open||ht.showModal()},get isOpen(){return ht.open},close(){ht.open&&ht.close()}}}n.RoomcraftModels=Object.freeze({catalog:m,canMap:v,canBind:b,canReplace:x,suggestions:_,supportsHeight:R,resizeFootprint:M,resizeCornerFootprint:C,splitDiningFurniture:p,placementRole:it,specialtyBarrierSections:B,walkingObstacleBoxes:Pt,blockingPlacement:Ct,orderMountedObjects:Xt,mount:Dt,handoffKey:i})})(typeof window>"u"?globalThis:window);var im=["#e9a1ad","#f4eee0","#b7cf84","#e8d081","#80b7ce","#b993c7"],OM=["#e9ad9c","#e2cb87","#9db9a3"],sm=["#725746","#8d6b55","#65534b","#91755f"],kM=new Set(["wedge","ramp","arch","tunnel"]);function Yh(n,t,e,i,s,r,o,a=0){let c=new mi(t,{depth:e,curveSegments:10,steps:1,bevelEnabled:a>0,bevelSize:a,bevelThickness:a,bevelSegments:2});return c.translate(0,0,-e/2),n.part(c,i,s,r,o)}function rm(n,t,e,i){let s=Math.cos(i),r=Math.sin(i),o=(a,c)=>[t+a*s+c*r,e-a*r+c*s];return{box(a,c,l,u,h,f,d,g=0){let[y,p]=o(a,l);n.box(y,c,p,u,h,f,d,g,i)},bead(a,c,l,u,h){let[f,d]=o(a,l);n.oval(f,c,d,u,u,u,h)}}}function om(n,t,e,i,s,r,o,a,c){let l=rm(n,t,e,i),u=o*.43,h=r*.1,f=s*.4;l.box(0,r-h,0,s*.98,h,u,a,h*.43),l.box(0,0,0,s*.99,h,u,a,h*.34);for(let d of[-1,1])l.box(d*f,h*.65,0,s*.17,r*.83,u,a,3),l.box(d*s*.475,r*.3,0,s*.055,r*.17,u*1.14,c,1.4),l.box(d*s*.23,r*.17,0,s*.1,r*.55,u*.84,a,2.1),l.bead(d*s*.088,r*.61,u*.33,Math.min(r,s)*.05,a),l.bead(d*s*.043,r*.53,u*.49,Math.min(r,s)*.018,c);l.box(0,r*.27,0,s*.2,r*.46,u*.96,a,3.4),l.box(0,r*.43,u*.52,s*.088,r*.066,u*.15,c,1.3)}function BM(n,t,e,i,s){let r=Math.min(38,Math.min(t,e)*.3),{specialtyBarrierSections:o}=(typeof window>"u"?globalThis:window).RoomcraftModels;for(let[a,[c,l,u,h,f]]of o("playpen",t,e).entries()){let d=a>=2?3:4,g=u/d;for(let y=0;y<d;y++){let p=-g*(d-1)/2+y*g,m=s?im[(y+a*2)%im.length]:y%2?i.accent:i.base;om(n,c+p*Math.cos(f),l+p*Math.sin(f),-f,g,r,h,m,"#c1b9b0")}}return r}function zM(n,t,e,{form:i,palette:s}){if(i==="photoPlayYard"||i==="playpen")return BM(n,t,e,s,i==="photoPlayYard");if(i==="photoBearPanel"){let u=Math.min(37,t*.42);return om(n,0,0,0,t,u,e,s.base,s.dark),u}if(i==="gate"||i==="guard"){let u=Math.min(37,t*.32),h=Math.min(e*.55,u*.28);for(let d of[-1,1])n.box(d*t*.46,0,0,t*.07,u,h,s.dark,1.5),n.box(d*t*.46,u*.08,0,t*.08,u*.08,e*.73,s.base,1.4);for(let d of[u*.11,u*.88])n.box(0,d,0,t*.88,u*.085,h*.74,s.accent,1.2);let f=i==="guard"?13:8;for(let d=0;d<f;d++){let g=t*(.79*d/(f-1)-.395);n.box(g,u*.16,0,t*.027,u*.77,h*.47,s.base,.8)}return n.box(t*.39,u*.74,h*.3,t*.09,u*.11,h*.53,s.detail,1.7),u}let r=i==="folding",o=Math.min(r?39:29,t*.28),a=[s.base,s.accent,s.detail],{specialtyBarrierSections:c}=(typeof window>"u"?globalThis:window).RoomcraftModels,l=c(i,t,e);for(let[u,[h,f,d,g,y]]of l.entries()){let p=rm(n,h,f,-y);if(p.box(0,0,0,d*.955,o,g,s.dark,3.7),p.box(0,o*.07,g*.14,d*.87,o*.86,g*.87,a[u%3],3.4),i==="quilted")for(let m of[-.26,0,.26])p.box(m*d,o*.16,g*.59,d*.22,o*.67,g*.09,s.base,2.6);r&&u<l.length-1&&p.box(d*.48,o*.38,0,d*.09,o*.24,g*.92,s.dark,1.2)}return o}function HM(n,t,e,i){let s=new Cn;return e?(s.moveTo(-n/2,0),s.lineTo(-n/2,t*.34),s.bezierCurveTo(-n/2,t*1.18,n/2,t*1.18,n/2,t*.34),s.lineTo(n/2,0),s.lineTo(n*.29,0),s.lineTo(n*.29,t*.32),s.bezierCurveTo(n*.29,t*.83,-n*.29,t*.83,-n*.29,t*.32),s.lineTo(-n*.29,0)):(s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(n/2,t),s.lineTo(-n/2,t*(i?.18:.08))),s.closePath(),s}function GM(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=i.endsWith("-rainbow")?OM:[r.accent,r.base,r.dark];if(s==="steps"){let l=Math.min(44,o*.48),u=t/3;for(let h=0;h<3;h++){let f=u*(h-1),d=l*(h+1)/3;n.box(f,0,0,u*.98,d,e*.94,a[h],3.7),n.box(f,d*.86,0,u*.96,d*.055,e*.945,r.detail,1.1)}return l}if(kM.has(s)){let l=s==="arch"||s==="tunnel",u=s==="ramp",h=Math.min(l?53:u?28:44,o*(l?.65:u?.32:.49)),f=HM(t*.91,h,l,u),d=Math.min(1.4,o*.021),g=s==="tunnel"?e*.83:e*.73;Yh(n,f,g,a[1],0,d,0,d);for(let y of[-1,1])Yh(n,f,d,a[y<0?0:2],0,d,y*g*.5,d*.54);return h+d*2}let c=Math.min(46,o*.62);return n.box(0,0,0,t*.95,c,e*.95,r.base,5),n.box(0,c*.08,0,t*.959,c*.07,e*.959,r.dark,1.8),n.box(0,c*.87,0,t*.955,c*.055,e*.955,r.accent,1.5),c}function VM(n,t,e,i){let s=Math.min(38,t*.35),r=Math.min(e*.31,t*.065);n.box(0,2,0,t*.95,s*.92,r*.35,"#33343a",2);for(let o of[-.47,.47])n.box(t*o,0,0,t*.035,s,r,i.dark,1.8),n.box(t*o,0,0,t*.068,s*.08,e*.74,i.dark,1.3);for(let o=-5;o<=5;o++)n.box(t*o*.077,2,r*.25,t*.008,s*.85,r*.15,i.accent,.42);for(let o of[.06,.28,.51,.74,.96])n.box(0,s*o,r*.3,t*.93,s*(o===.96?.06:.027),r*.21,i.base,.55);return s}function WM(n,t,e,{form:i,palette:s}){if(i==="screen")return VM(n,t,e,s);let r=i==="photoTiledMantel",o=i!=="hearth",a=Math.min(o?54:39,t*.37),c=e*.16,l=r?"#e6ded0":s.base,u=o?s.accent:s.dark,h=t*.59,f=a*.57;n.box(0,0,e*.05,t*.96,a*.09,e*.83,l,2.6),n.box(0,a*.08,-e*.28,t*.87,a*.81,e*.27,s.dark,2.2),n.box(0,a*.09,-e*.12,h,f,e*.12,"#29272b",1.7);for(let d of[-1,1])n.box(d*t*.383,a*.08,-c,t*.135,a*.78,e*.35,l,2.7),n.box(d*t*.3,a*.11,-c*.03,t*.014,f,e*.04,"#bc925f",.75);if(n.box(0,a*.65,-c,t*.78,a*.2,e*.35,l,2.6),r||!o){let d=t*.095;for(let g=-4;g<=4;g++)n.box(g*d,a*.68,-e*.014,d*.94,a*.146,e*.077,r?sm[(g+4)%sm.length]:s.accent,1)}n.box(0,a*.84,-e*.14,t*.9,a*.09,e*.43,u,2.1),n.box(0,a*.93,-e*.12,t*.99,a*.075,e*.51,r?"#f3ece3":s.detail,1.8);for(let d=-1;d<=1;d++)n.box(d*t*.11,a*(.13+Math.abs(d)*.02),e*.03,t*.25,a*.065,e*.1,d?"#785141":"#ad7e5b",1.7,d*.36);return a}function XM(n,t,e,{form:i,palette:s}){let r=Math.min(t,e);if(i==="photoBolster"){let a=Math.min(25,r*.62);n.box(0,0,0,t*.96,a,e*.91,s.base,a*.37);for(let c of[-1,1])n.box(c*t*.39,a*.12,0,t*.017,a*.78,e*.94,s.accent,2.3);return a}let o=Math.min(31,r*.41);return n.disc(0,0,0,t*.43,o*.17,e*.43,s.dark,.94),n.oval(0,o*.48,0,t*.48,o*.47,e*.48,s.base),n.ring(0,o*.4,0,t*.477,e*.477,Math.min(1.1,r*.025),s.accent),n.oval(0,o*.82,0,t*.26,o*.1,e*.26,s.accent),o}function qM(n,t,e,i,s){let r=i==="mirror",o=Math.min(r?45:39,Math.max(6,e*.66)),a=Number.isFinite(s)?Math.max(0,s-o/2):0,c=Math.min(5.5,e*.27),l=c*.56;n.box(0,a,0,t*.95,o,c,r?"#8b6b54":"#694e3e",2.7),n.box(0,a+o*.065,l,t*.89,o*.87,c*.26,r?"#d8b88e":"#ead8b8",1.4);let u=t*.81,h=o*.73,f=a+o*.14;n.box(0,f,l*1.31,u,h,c*.16,r?"#a7c4ce":"#c4d3b6",1.15);let d=new Cn;return r?(d.moveTo(-u*.45,0),d.lineTo(-u*.19,0),d.lineTo(u*.14,h),d.lineTo(-u*.02,h)):(d.moveTo(-u/2,0),d.lineTo(-u/2,h*.19),d.quadraticCurveTo(-u*.28,h*.86,-u*.07,h*.4),d.quadraticCurveTo(u*.24,h*.18,u/2,h*.48),d.lineTo(u/2,0)),d.closePath(),Yh(n,d,c*.035,r?"#e5eff0":"#759899",0,f,l*1.49),r||n.oval(u*.28,f+h*.76,l*1.51,h*.1,h*.1,c*.045,"#f0cb8c"),a+o}function am(n,t,e,i,{mountY:s}={}){switch(i?.artFamily){case"paddedPanel":return zM(n,t,e,i);case"foamBlock":return GM(n,t,e,i);case"fireplace":return WM(n,t,e,i);case"playFurniture":if(i.form==="softPouf"||i.form==="photoBolster")return XM(n,t,e,i);break;default:if(i?.type==="artwork"||i?.type==="mirror")return qM(n,t,e,i.type,s)}}var ot=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),YM=Object.freeze({sage:ot.sage,mint:ot.aqua,sky:ot.blue,peach:ot.peach,coral:"#cf8979",lavender:ot.lilac,butter:ot.honey,cream:ot.linen,white:ot.cream,oak:ot.oakLight,walnut:ot.walnut,charcoal:"#505b68",brass:ot.brass,terracotta:"#b97d63",forest:ot.moss,blush:ot.blush,teddy:"#aa8063",slate:"#9b9b9d"}),$M=new Set([ot.oak,ot.oakLight,ot.walnut]),ZM=new Set([ot.sage,ot.moss,ot.linen,ot.lilac,ot.lilacLight,ot.blush,ot.peach,ot.oatmeal,ot.upholsteryShadow,ot.denim]);function jM(n,t){let e=$M.has(n)?1:ZM.has(n)?2:0,i=n===ot.glass||n===ot.darkGlass||n===ot.blueWater,s=n===ot.brass,r=n===ot.steel||n===ot.basinSteel,o=new Ye({color:n,roughness:s||r?.37:i?.33:n===ot.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var $h=class{constructor(t,e){this.root=new se,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,i,s,r,o=0){this.materials.has(e)||this.materials.set(e,jM(e,this.grainDirection));let a=new ue(t,this.materials.get(e));return a.position.set(i,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,i,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),h=u>.2?new zl(s,r,o,2,u):new Ae(s,r,o);return this.part(h,a,t,e+r/2,i,l)}disc(t,e,i,s,r,o,a,c=1){let l=new qe(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,i)}oval(t,e,i,s,r,o,a){let c=new Re(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,i)}ring(t,e,i,s,r,o,a){let c=new Pn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,i)}basin(t,e,i,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Nt(l,u)),c=new Wo(a,24);return c.scale(s,r,o),this.part(c,ot.ceramic,t,e,i)}finish(t){let e=new Map;for(let i of[...this.root.children]){let s=i.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),i.updateMatrix(),r.applyMatrix4(i.matrix),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(r),this.root.remove(i)}for(let[i,s]of e){let r=s.length===1?s[0]:qn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ue(r,i);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function ji(n,t,e,i,s,r,o=ot.walnut){let a=Math.min(4.5,i*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])n.disc(t+i*c,0,e+s*l,a,r,a,o,.68)}function ma(n,t,e,i,s,r,o,a){let c=o===ot.linen?ot.binding:ot.blush;n.box(t,e,i,s,8,r,c,3.2,a),n.box(t,e+2.1,i,s-2.6,7.4,r-2.6,o,3.2,a)}function KM(n,t,e,i,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?ot.upholsteryShadow:ot.moss,u=a?ot.oatmeal:ot.sage,h=o?t*.5:t,f=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(ji(n,d,g,h,f,5),n.box(d,5,g,h*.97,22,f*.98,l,8),r){let _=o?t*.52:t*.34,S=o?e*.38:e*.46,R=o?t*.22:-t*.32,M=o?c*e*.3:e*.25;ji(n,R,M,_,S,5),n.box(R,5,M,_,22,S,l,8),n.box(R,25,M,_*.96,12,S*.9,i,5),o&&n.box(R,29,c*e*.464,_,26,y,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let _=e*.88/p;for(let S=0;S<p;S++){let R=-e*.44+_*(S+.5);n.box(d+y*.18,25,R,h*.76,12,_-3,i,5),n.box(d-h*.39,27,R,h*.22,31,_-1,u,8)}n.box(d,29,-c*e*.445,h*.88,20,y,u,6),ma(n,d+h*.13,35,-e*.31,h*.42,_*.49,a?ot.sage:ot.peach,-.18),ma(n,d+h*.12,35,e*.28,h*.4,_*.45,ot.linen,.2)}else{let _=t*.8/p;for(let S=0;S<p;S++){let R=-t*.4+_*(S+.5);n.box(R,25,g+f*.08,_-3,12,f*.7,i,6),n.box(R,27,g-f*.39,_-1,31,f*.24,u,7)}for(let S of[-t*.442,t*.442])n.box(S,26,g,y,22,f*.89,u,6);ma(n,-t*.27,35,g-f*.15,t*.18,f*.34,ot.peach,-.18),ma(n,t*.27,35,g-f*.12,t*.17,f*.33,ot.linen,.2)}let m=o?h*.67:h*.19,x=o?e*.14:f*.58,v=o?d+h*.06:h*.32,b=o?e*.13:g+f*.1;n.box(v,37.1,b,m,1.7,x,ot.lilacLight,.65);for(let _ of[-1,1])n.box(v,38.82,b+_*x*.36,m*.9,.25,1.2,ot.lilac);return 58}function vi(n,t,e,i,s,r,o,a=!1){let c=a?19:28;ji(n,t,e,i,s,c,ot.walnut),n.box(t,c,e,i*.9,7,s*.92,ot.walnut,2),n.box(t,c+5,e,i*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?i:s)*.39,h=e-Math.cos(r)*s*.39;n.box(u,c+9,h,l?s*.2:i*.84,22,l?s*.82:s*.22,o,4)}function JM(n,t,e,i){let s=-e*.39;ji(n,0,0,t,e,20,ot.walnut),n.box(0,20,0,t*.9,6,e*.92,ot.walnut,2),n.box(0,24,0,t*.83,6,e*.83,i,2.5);for(let r of[-1,1])n.box(t*.34*r,23,s,t*.075,18,e*.12,ot.walnut,1.1);return n.box(0,37,s,t*.84,22,e*.22,i,4),59}function Hl(n,t,e,i,s){return s==="round"?(n.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),ot.walnut),n.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),ot.walnut,1.5),n.disc(0,33,0,t/2,8,e/2,i,.96),41):s==="classic"?(ji(n,0,0,t*(.69/.79),e*(.49/.57),35),n.box(0,32,0,t*(.72/.79),6,e*(.5/.57),ot.walnut,3),n.box(0,37,0,t,8,e,i,4),n.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),ot.linen,.6),46.4):(ji(n,0,0,t*(.69/.79),e*(.47/.56),34),n.box(0,33,0,t,8,e,i,3),n.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),ot.linen,.5),42.3)}function QM(n,t,e,i,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return vi(n,0,-e*.39,t*.2,e*.23,0,ot.denim),vi(n,0,e*.39,t*.2,e*.23,Math.PI,ot.denim),vi(n,-t*.415,0,t*.17,e*.27,Math.PI/2,ot.denim),vi(n,t*.415,0,t*.17,e*.27,-Math.PI/2,ot.denim),Hl(n,t*.79,e*.57,ot.oak,"classic");if(r)vi(n,0,-e*.37,t*.2,e*.2,0,ot.sage),vi(n,0,e*.37,t*.2,e*.2,Math.PI,ot.blush),vi(n,-t*.38,0,t*.2,e*.2,Math.PI/2,ot.lilac),vi(n,t*.38,0,t*.2,e*.2,-Math.PI/2,ot.honey),Hl(n,t*.58,e*.58,i,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[ot.sage,ot.blush,ot.lilac,ot.honey];for(let u=0;u<c.length;u++)for(let h of[-1,1])vi(n,t*c[u],e*.37*h,t*(a?.19:.15),e*.23,h<0?0:Math.PI,l[(u+(h<0?0:2))%l.length]);Hl(n,t*.79,e*.56,i,"styled")}return 42}function tS(n,t,e,i,s,r){n.box(t,e,i,s*.31,2,r*.5,ot.ink,.5),n.box(t,e+1,i,s*.1,14,4,ot.ink,1),n.box(t,e+12,i,s,25,6,ot.ink,2),n.box(t,e+14,i+3.1,s*.91,21,1,ot.glass,.4),n.box(t-s*.25,e+28,i+3.7,s*.28,2,.5,ot.blue,.2)}function eS(n,t,e,i,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;n.box(0,37,o,t,7,r,i,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,h=s?r/2:0;s&&n.box(l,37,h+.8,a,7,u-1.6,i,2.4),n.box(l,4,h,a*.81,34,u*.81,ot.walnut,2.8);for(let f=0;f<3;f++){let d=6+f*9.7;n.box(l,d,h+u*.41,a*.74,8.4,2,ot.oak,.7),n.box(l,d+3,h+u*.43,a*.26,2,2,ot.brass,.5)}}return tS(n,-t*.02,44,o-r*.22,t*.28,r*.43),n.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,ot.linen,.6),n.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,ot.peach),81}function cm(n,t,e,i,s,r){let o=new Cn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,h=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...h):o.lineTo(...h)}o.closePath();let a=new fs(o);a.rotateX(-Math.PI/2),n.part(a,r,t,e,i)}function nS(n,t,e,i,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");ji(n,0,0,t,e,6,ot.walnut);let c=r?[6,55]:[6];for(let u of c){n.box(0,u,0,t*.97,15,e*.98,ot.walnut,5),n.box(0,u+12,0,t*.9,11,e*.92,ot.linen,4),n.box(0,u+21.6,e*.15,t*.89,5,e*.62,ot.lilac,2.5),n.box(0,u+23.7,e*.15,t*.877,7,e*.605,i,3.4),n.box(0,u+28,-e*.11,t*.88,3,e*.071,ot.lilacLight,1);let h=t>=145?[-t*.2,t*.2]:[0];for(let d of h)ma(n,d,u+22,-e*.275,t*(h.length===2?.34:.49),e*.2,ot.linen,d<0?-.04:.04);let f=Math.min(t,e)*.045;for(let[d,g,y,p]of[[-.24,.12,1,ot.cream],[.23,.27,.79,ot.honey],[.08,.04,.57,ot.cream],[-.1,.34,.62,ot.honey]])cm(n,t*d,u+30.8,e*g,f*y,p);for(let d of[-.32,-.17,0,.17,.32])n.box(t*d,u+30.71,e*.24,.85,.24,e*.33,ot.lilacLight,0);for(let d of[.09,.195,.3,.405])n.box(0,u+30.72,e*d,t*.71,.24,.9,ot.lilacLight,0)}let l=r||a?93:52;if(n.box(0,4,-e*.46,t*.95,l-4,e*.083,ot.walnut,6),n.box(0,18,-e*.417,t*.89,l-23,e*.055,i,4),o||r||a)for(let u of[-1,1]){for(let h of[-1,1])n.box(t*.45*u,4,e*.46*h,5,l,6,ot.walnut,2);if(n.box(t*.45*u,l-9,0,5,5,e*.89,i,1.5),o||r)for(let h=-3;h<=3;h++)n.box(t*.45*u,l-29,e*h*.105,3,20,3,i,.8)}return l}function iS(n,t,e,i,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;ji(n,0,0,t,e,5),n.box(0,5,0,t*.96,a-6,e*.9,ot.walnut,3),n.box(0,a-2,0,t,4,e,i,1.7),n.box(0,a-3.7,0,t*.985,1.5,e*.967,ot.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let h=0;h<l;h++){let f=t*.89/l,d=(a-8)/c,g=f*(h-(l-1)/2),y=5+u*d;n.box(g,y,e*.46,f-2,d-1.5,2.9,i,1),n.oval(g,y+d*.45,e*.51,2.2,1.7,2.2,ot.brass)}return a+2}function sS(n,t,e,i){if(i==="office-round")return n.disc(0,1,0,t*.5,2.2,e*.5,ot.moss),n.disc(0,3.2,0,t*.46,.7,e*.46,ot.sage),n.ring(0,3.9,0,t*.4,e*.4,.6,ot.linen),4;let s=i==="bedroom-floral";n.box(0,1,0,t,2.4,e,s?ot.lilac:ot.blush,1),n.box(0,3.5,0,t*.91,.8,e*.91,ot.linen),n.box(0,4.3,0,t*.86,.5,e*.86,s?ot.lilacLight:ot.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)n.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,ot.linen);for(let r of[-1,1])n.box(r*t*.398,4.84,0,.6,.32,e*.797,ot.linen),n.box(0,4.84,r*e*.398,t*.797,.32,.6,ot.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])cm(n,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,ot.cream);return 5}function rS(n,t,e,i){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let f of[-1,1])n.box(f*(t+s)/4,i-5,0,l,5,e,ot.linen);n.box(0,i-5,(a-e/2)/2,s,5,a+e/2,ot.linen),n.box(0,i-5,(c+e/2)/2,s,5,e/2-c,ot.linen);let u=Math.min(2.6,s*.1);n.box(0,i-4.88,o,s,.72,r,ot.basinSteel);for(let f of[-1,1])n.box(f*s/2,i-4.5,o,u,5.25,r+u,ot.steel,.4),n.box(0,i-4.5,o+f*r/2,s,5.25,u,ot.steel,.4),n.disc(0,i-4.1,o+f*r/4,u,.6,u,ot.darkGlass);n.box(0,i-4.5,o,s,4.85,u,ot.steel,.4);let h=-s/2-u*1.15;n.disc(h,i,o,u*.8,u*2.9,u*.8,ot.steel),n.box(h+u,i+u*2.5,o,u*2.8,u*.7,u,ot.steel,.6)}function oS(n,t,e,i,s=!1){let r=i==="doubleVanity"?32:35,o=i==="kitchenWorktop",a=i==="doubleVanity";n.box(0,1,0,t*.91,r-4,e*.93,a?ot.sage:ot.walnut,2.3),s?rS(n,t,e,r+2):n.box(0,r-3,0,t,5,e,ot.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let h=c?2.2:t*.29,f=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;n.box(d,6,g,h,r*.67,f,a?ot.moss:ot.oak,.8),n.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,ot.honey,.7)}if(o){n.box(0,r+2,0,t*.84,2.5,e*.72,ot.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let h=Math.min(t,e)*(l<0?.12:.092);n.ring(t*l,r+4.8,e*u,h,h,1,ot.glass)}}if(a)for(let l of[-t*.24,t*.24])n.basin(l,r+1.9,0,t*.16,5.5,e*.36),n.oval(l,r+3.48,0,2.1,.52,2.1,ot.brass),n.disc(l,r+2,-e*.32,2.6,8,2.6,ot.brass),n.box(l,r+8.4,-e*.22,4,3,e*.2,ot.brass,1);return r+3}function aS(n,t,e,i){if(i==="tub"){n.box(0,0,0,t*.95,19,e*.95,ot.ceramic,6),n.box(0,18,0,t*.85,3,e*.86,ot.blueWater,1.3);for(let s of[-1,1])n.box(s*t*.44,17,0,t*.11,7,e*.94,ot.cream,2.6),n.box(0,17,s*e*.43,t*.82,7,e*.12,ot.cream,2.6);return n.disc(0,21,-e*.31,2.4,.9,2.4,ot.glass),n.disc(0,22,-e*.44,3.5,9,3.5,ot.brass),n.box(0,30,-e*.4,5,3.7,e*.1,ot.brass,1.3),n.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,ot.aqua,.08),34}return i==="toilet"?(n.disc(0,0,e*.12,t*.28,11,e*.29,ot.ceramic,.65),n.disc(0,10,e*.12,t*.43,5,e*.34,ot.cream,.81),n.disc(0,15,e*.12,t*.34,1,e*.27,ot.linen),n.box(0,4,-e*.32,t*.92,22,e*.31,ot.ceramic,4.2),n.box(0,25,-e*.32,t*.93,3,e*.32,ot.cream,1.3),n.disc(t*.25,28,-e*.32,2.1,1.1,2.1,ot.honey),29):(n.box(-t*.15,0,-e*.14,t*.65,24,e*.58,ot.sage,3.8),n.box(-t*.15,23,-e*.14,t*.76,4,e*.68,ot.cream,1.6),n.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),n.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,ot.brass),n.disc(-t*.15,27,-e*.34,2.5,8,2.5,ot.brass),n.box(-t*.15,33,-e*.31,4.7,3,e*.1,ot.brass,1.1),n.box(t*.34,2,e*.12,t*.22,17,e*.73,ot.walnut,2.1),n.box(t*.34,19,e*.18,t*.24,4.7,e*.34,ot.blush,1.7),36)}function cS(n,t,e,i,s){let r=i?ot.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);n.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),n.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])n.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(i?.19:.1),e*.093,r),n.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,ot.ink),n.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),n.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,ot.blush);return n.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,ot.ink),s&&n.box(0,8,e*.17,t*.57,9,e*.49,ot.linen,3.8),c+o*(i?.37:.28)}function lS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="bin",a=r*(o?.31:.35);if(o||i==="basket"){if(o)n.box(0,0,0,t*.81,a,e*.81,s.base,r*.07),n.box(0,a-.8,0,t*.83,2.5,e*.83,s.accent,r*.075),n.box(0,a+1.2,0,t*.74,1,e*.73,s.dark,r*.06),n.box(0,a*.63,e*.409,t*.26,a*.2,1.1,s.detail,1.2);else{n.disc(0,0,0,t*.43,a,e*.42,s.base,.79),n.disc(0,a-.35,0,t*.393,.8,e*.38,s.dark);for(let y=0;y<=5;y++)n.ring(0,a*(.13+y*.16),0,t*(.35+y*.016),e*(.34+y*.016),.74,y%2?s.accent:s.base)}for(let y=0;y<3;y++){let p=(y-1)*t*.22,m=[ot.sage,ot.honey,ot.lilac][y];n.box(p,a+.95,(y%2-.5)*e*.16,t*.16,r*(.13+.03*y),e*.21,m,2,y*.27)}return a+r*.22}let c=i==="cubby"||i==="lowShelf",l=Math.max(13,Math.min(54,r*(c?.49:.72))),u=Math.max(2,e*.75),h=s.base;if(i==="floating"){n.box(0,l,0,t*.94,3.4,u,h,1.2);for(let y of[-1,1])n.box(y*t*.3,l-7,-u*.38,4,7,u*.2,s.dark,.8);return l+4}let f=c?2:3,d=c?3:2,g=l/(f-1);for(let y of[-1,1])n.box(t*.45*y,0,0,t*.065,l+3.3,u,h,1);n.box(0,0,-u*.44,t*.88,l,e*.08,s.dark,.65);for(let y=0;y<f;y++)if(n.box(0,y*g,0,t*.94,3.1,u,h,1),y!==f-1)for(let p=0;p<d;p++){let m=t*((p+.5)/d-.5)*.84;if(c)n.box(m,y*g+3.2,e*.05,t*.205,g*.45,e*.52,[ot.sage,ot.blush,ot.linen][p],1.7);else for(let x=0;x<4;x++)n.box(m+t*(.047*x-.07),y*g+3.15,e*.11,t*.038,g*(.41+x%3*.085),e*.31,[ot.lilac,ot.sage,ot.honey,ot.blush][x],.65)}return l+3.2}function uS(n,t,e,i){let s=Math.min(t,e),r=s*(i?.33:.25);n.disc(0,0,0,r,r*.85,r,ot.peach,.72),n.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,ot.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(i?.55:.44)+o%2*s*.08,h=n.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,ot.moss);h.rotation.z=-c/u,h.rotation.x=l/u;let f=i?ot.sage:[ot.blush,ot.linen,ot.honey][o%3];n.oval(c,u,l,s*.13,s*(i?.18:.085),s*.11,f)}return s*(i?.82:.65)}function lm(n,t={}){let{type:e,w:i,h:s}=n||{};if(typeof e!="string"||!Number.isFinite(i)||!Number.isFinite(s)||i<1||s<1)return null;if(e.startsWith("pets-"))return Kp(e,i,s);let r=YM[e.split("-").at(-1)],o=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e]??{type:e},a=new $h(i,s),c=am(a,i,s,o,t);if(c===void 0&&!["plush","photoBunnyPlush"].includes(o.form)&&(c=nm(a,i,s,o)),c!==void 0)return a.finish(c);if(e==="sofa"||/(?:sofa|loveseat|chaise)-/.test(e))c=KM(a,i,s,r||(e==="sofa"?ot.linen:ot.sage),e);else{if(e==="tv")return a.box(0,2,0,i*.94,23,s*.98,ot.walnut,3.5),a.box(0,24,0,i,4,s,ot.oakLight,1.5),a.box(0,28,0,i*.4,6,s*.32,ot.ink,1.4),a.box(0,33,0,i*.29,52,s*.89,ot.ink,2.5),a.box(-i*.155,36,0,1.6,46,s*.84,ot.darkGlass,.6),a.oval(-i*.173,35,s*.34,1.2,1.2,1.2,ot.honey),Qp(a.finish(85),i,s);if(e==="table"||e.includes("dining-set"))c=QM(a,i,s,r||ot.oakLight,e);else if(e==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(e)){let l=e==="diningTable"?"classic":e.includes("round-dining")?"round":"styled";c=Hl(a,i,s,r||(l==="classic"?ot.oak:ot.oakLight),l)}else if(e==="diningChair"||e.startsWith("living-dining-chair-"))c=JM(a,i,s,r||ot.denim);else if(e==="desk"||e.includes("-desk-"))c=eS(a,i,s,r||ot.oakLight,e==="desk"||e.includes("corner-desk"));else if(e==="chair"||e==="stool"||e.includes("desk-chair"))vi(a,0,0,i,s,0,r||ot.lilac,e==="stool"),c=e==="stool"?50:60;else if(e==="armchair"||e.includes("acorn-armchair")){vi(a,0,0,i,s,0,r||ot.lilac,!0);for(let l of[-1,1])a.box(l*i*.37,16,0,i*.19,25,s*.83,ot.lilac,6.5);c=51}else if(e==="bed"||/(?:bed|crib)-/.test(e))c=nS(a,i,s,r||ot.lilac,e);else if(e==="rug")c=sS(a,i,s,n.rugStyle);else if(e==="counter"||e==="kitchenWorktop"||e==="doubleVanity")c=oS(a,i,s,e,e==="counter"&&n.id==="i7");else if(e==="tub"||e==="toilet"||e==="bathFixtures")c=aS(a,i,s,e);else if(e==="plant"||e==="floorPlant")c=uS(a,i,s,e!=="plant");else if(e==="wallUnit")a.box(0,48,0,i,17,s*.62,ot.linen,4),a.box(0,51,s*.32,i*.89,4,1.8,ot.ink,.6),a.box(-i*.34,56,s*.32,i*.11,2.1,2.1,ot.blue,.7),c=65;else if(["storage","shelf"].includes(o.artFamily)||o.form==="lowShelf")c=lS(a,i,s,o);else if(/dresser|nightstand|bookcase|storageCabinet/.test(e))c=iS(a,i,s,r||ot.oakLight,e);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(e)){let l=e==="bedroomBench"?26:30;ji(a,0,0,i,s,l-4),a.box(0,l-5,0,i,8,s,r||ot.oakLight,3.4),e==="bedroomBench"&&a.box(0,l+2,0,i*.87,6.2,s*.91,ot.lilacLight,2.6),c=l+8}else if(e.includes("bunny-plush")||e.includes("plush-bear")||e.includes("bear-floor-chair"))c=cS(a,i,s,e.includes("bunny"),e.includes("floor-chair"));else return null}return a.finish(c)}var te={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},ya=Math.PI,Zh=2*ya,hS=new Set(["unknown","unavailable"]),ci=(n,t,e)=>Math.max(t,Math.min(e,n)),ga=(n,t)=>Number.isFinite(n)?ci(n,12,480):t,fm=.96,dm=.09;function pm(n,t,e){let i=ga(n.w,42),s=ga(n.h,42);return Math.abs(t)<=i/2&&Math.abs(e-s*dm)<=s*fm/2}var me=(n,t={})=>new Ye({color:n,roughness:.83,...t}),jh=n=>String(n?.state??"unknown"),$s=n=>!hS.has(jh(n)),qr=n=>$s(n)&&(n.active===!0||n.state==="on"),fS=n=>qr(n)?Number.isFinite(n.attributes?.brightness)?ci(n.attributes.brightness/255,0,1):1:0,Gl=n=>(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[n];function Mi(n,t,e,i=0,s=0,r=0){let o=new ue(t,e);return o.position.set(i,s,r),n.add(o),o}function en(n,t,e,i,s,r=0,o=0,a=0){return Mi(n,new Ae(t,e,i),s,r,o,a)}function yn(n,t,e,i,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,i/3),u=l-t/2,h=l-e/2,f=new Cn;f.moveTo(u,h),f.lineTo(-u,h),f.lineTo(-u,-h),f.lineTo(u,-h),f.closePath();let d=new mi(f,{depth:i-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-i/2),Mi(n,d,s,r,o,a)}function Je(n,t,e,i,s,r=0,o=0,a=0,c=16){return Mi(n,new qe(t,e,i,c),s,r,o,a)}function _i(n,t,e,i,s,r){return Mi(n,new Re(t,10,7),e,i,s,r)}function Xr(n,t=0,e=0,i=0){let s=new se;return s.position.set(t,e,i),n.add(s),s}function dS(n,t,e=2.8){let i=new ze({transparent:!0,depthWrite:!1,blending:Yi,uniforms:{strength:{value:0},tint:{value:new Yt(te.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=Mi(n,new In(2*t,2*t),i,0,e,0);return s.rotation.x=-ya/2,s.visible=!1,(r,o)=>{s.visible=r>0,i.uniforms.strength.value=r*.29,i.uniforms.tint.value.copy(o)}}function pS(n,t,e,i){let s=new se,r=n.type,o=Gl(r),a=String(n.lightForm??o?.lightForm??""),c=r==="pendantLight"||a==="star_pendant",l=r==="ceilingLight"||c||a==="bloom_ceiling",u=r==="floorLamp"||a==="cloud_floor_lamp",h=r==="wallSconce"||a==="acorn_sconce",f=l&&/fan light/i.test(n.name??""),d=Math.min(t,e),g=o?.palette,y=new Yt(g?.detail??te.cream),p=me(g?.base??te.honey,{roughness:.53}),m=me(g?.dark??te.ink),x=me(te.brass,{roughness:.36,metalness:.42}),v=me(y,{emissive:te.warm,emissiveIntensity:0}),b=new Yt(te.warm),_=f?46:c?50:l?56:h?i.mountY??40:u?56:36,S=!l&&!u&&!h,R=S?ci(d*.68,15,46):ci(d*(l?1.72:1.35),38,110),M=dS(s,R,S?16.8:2.8);if(l){let C=d*(f?.19:.29);if(Je(s,C,C*1.02,3,m,0,_+2),c&&Je(s,1.7,1.7,13,p,0,_+9),Je(s,C*.82,C,5,p,0,_-1.5),Je(s,C*.92,C*.96,1.15,x,0,_+1.1),a==="star_pendant"||a==="bloom_ceiling"){let F=Mi(s,new Vo(C*.96,0),v,0,_,0);F.scale.y=c?1.03:.56}else{let F=_i(s,C*.83,v,0,_,0);F.scale.y=c?.88:.52}}else if(h)yn(s,d*.34,18,4,m,0,_-5,-4),Je(s,d*.12,d*.11,14,p,0,_-3,3),a==="acorn_sconce"?(Je(s,d*.15,d*.22,13,v,0,_+4,3,10),Je(s,d*.22,d*.218,1.2,x,0,_-2.3,3,10)):_i(s,d*.21,v,0,_+3,3);else{let C=_-7,F=u?3:16,I=d*(u?.25:.3);if(Je(s,I*.57,I*.67,4,m,0,F),Je(s,2,2.9,C-F,p,0,(F+C)/2),u)_i(s,I*.81,v,0,_,0);else{let D=a==="bud_lamp"?12:9;if(a==="bud_lamp"){let H=new qe(I*.56,I,14,D*2),N=H.attributes.position;for(let k=0;k<N.count;k++){let B=N.getX(k),W=N.getZ(k);Math.round(Math.atan2(B,W)*D/Math.PI)%2&&N.setXYZ(k,B*.92,N.getY(k),W*.92)}H.computeVertexNormals(),Mi(s,H,v,0,_,0)}else Je(s,I*.56,I,14,v,0,_,0,D);Je(s,I,I*.99,1.2,x,0,_-6.7,0,D),Je(s,I*.55,I*.58,1.1,x,0,_+7.1,0,D)}}return{root:s,anchorY:_+2,animate(C){let F=fS(C),I=C?.attributes?.rgb_color;if(Array.isArray(I)&&I.length===3&&I.every(Number.isFinite)){let[D,H,N]=I.map(k=>ci(k/255,0,1));b.setRGB(D,H,N,rn)}else b.setHex(te.warm);M(F,b),v.emissiveIntensity=F*.88,v.emissive.copy(b),F>0?v.color.copy(b):v.color.copy(y)}}}function mS(n,t){let e=new Cn;e.moveTo(n*.1,-n*.061),t?(e.bezierCurveTo(n*.42,-n*.15,n*.76,-n*.42,n,-.024*n),e.bezierCurveTo(n*.87,n*.25,n*.49,n*.28,n*.1,n*.063)):(e.bezierCurveTo(n*.39,-n*.094,n*.62,-n*.16,n*.88,-n*.14),e.bezierCurveTo(n*1.01,-n*.11,n*1.03,n*.07,n*.88,n*.13),e.bezierCurveTo(n*.62,n*.2,n*.42,n*.13,n*.1,n*.063)),e.closePath();let i=new mi(e,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return i.translate(0,0,-.9),i.rotateX(-ya/2)}function um(n,t,e,i){let s=new se,r=Math.min(t,e)*(i?.37:.46),o=i?r+11:59,a=Xr(s,0,o,0);i&&(a.rotation.x=ya/2);let c=Xr(a,0,-1,0);c.name="Fan blades";let l=Gl(n.type),u=l?.form==="palm",h=me(l?.palette.accent??te.cream),f=me(l?.palette.dark??te.ink),d=l?.palette.base??(/(?:white|cream)$/.test(n.type)?te.oat:/(?:forest|sage)$/.test(n.type)?te.sage:te.honey),g=me(d),y=u?me(l.palette.accent):null,p=i||/three-blade/.test(n.type)?3:/four-blade/.test(n.type)?4:5;Je(a,r*.18,r*.2,6,f),Je(a,r*.174,r*.176,1.4,me(te.brass,{roughness:.36,metalness:.42}),0,3.4),Je(a,r*.15,r*.17,2.6,h,0,4.9);let m=mS(r,u);for(let x=0;x<p;x++){let v=Xr(c);if(v.rotation.y=x/p*Zh,Mi(v,m,g),y){en(v,r*.72,.5,.55,y,r*.52,1.45);for(let b=0;b<4;b++)for(let _ of[-1,1]){let S=en(v,r*(.1+.025*b),.46,.48,y,r*(.45+.11*b),1.39,_*r*.043);S.rotation.y=_*.68}}}if(i){yn(s,r*1.66,6,r*1.02,f,0,3),en(s,r*.3,11,6,h,0,10);let x=Mi(s,new Pn(r,2.6,6,24),h,0,o,3);x.rotation.z=.04;for(let v=-1;v<=1;v++){let b=v*r*.5;Je(s,.68,.68,2*Math.sqrt(r*r-b*b),f,b,o,5,6)}}return{root:s,anchorY:o,...i?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,v=0){let b=Number.isFinite(x?.attributes?.percentage)?ci(x.attributes.percentage/100,.12,1):.64;c.rotation.y=qr(x)?v*Zh*b%Zh:0}}}function gS(n,t){let e=new se,i=t.mountY??39,s=Xr(e,0,i),r=ci(n*.72,17,27);yn(s,r,31,5,me(te.ink),0,0,-.5),yn(s,r-1.9,29,4.4,me(te.cream),0,.3,1);let o=me(te.oat,{emissive:te.warm,emissiveIntensity:0}),a=yn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let h=me(te.teal,{emissive:te.mint,emissiveIntensity:0});return _i(s,1.85,h,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:i,animate(l,u=0){a.rotation.x=$s(l)?qr(l)?-.16:.16:0,o.emissiveIntensity=qr(l)?.42:0;let h=l?.presence==="on";for(let f=0;f<c.length;f++){let d=h?.5+.5*Math.cos(u*5-f*1.23):0;c[f].material.color.setHex(h?te.mint:te.teal),c[f].material.emissiveIntensity=h?.75+d*1.9:0,c[f].scale.setScalar(h?1+d*.18:1)}}}}function hm(n,t,e,i=31){let s=new se,r=36.5,o=Math.max(12,n-6),a=me(te.oat);if(t){let f=me(te.glass,{roughness:.32});en(s,o,i,3.2,f,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])en(s,3.2,i+2,7.5,a,g,r);let d=r+i/2;en(s,o,1.8,7,f,0,d+.35);for(let g of[-4.25,4.25])en(s,o+2,3.2,1.5,a,0,d,g);en(s,o+3,3.8,11,a,0,r-i/2,1.4),en(s,o,1.35,.5,me(te.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=me(te.cream),l=r+i/2-1;yn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(f,d)=>en(s,o-5,i/8-.45,3,c,0,l-d*(i/8),6.9)),h=0;return{root:s,anchorY:r+1.5,animate(f,d,g,y=!1){let p=Kh(f),m=p===null?y?0:h:1-p;y||(h=m);let x=Number.isFinite(f?.attributes?.current_tilt_position)?ci(f.attributes.current_tilt_position/100,0,1):0;for(let v=0;v<u.length;v++){let b=ci(m*u.length-v,0,1);u[v].visible=b>.02,u[v].scale.y=b,u[v].rotation.x=x*.9}}}}function Kh(n){return $s(n)?Number.isFinite(n.attributes?.current_position)?ci(n.attributes.current_position/100,0,1):["open","on"].includes(n.state)?1:["closed","off"].includes(n.state)?0:null:null}function yS(n,t){let e=new se,i=t*.72,s=n*.74,r=i/2,o=Math.min(48,n*.38),a=Math.min(23,n*.19),c=me(te.oat),l=me(te.cream),u=me(te.plum),h=[me(te.tile),me(te.paleTile)],f=me(te.dark);en(e,n,5,t*fm,l,0,2.5,t*dm),en(e,n*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let I of[-n*.42,n*.42])en(e,n*.09,o+4,i,c,I,(o+4)/2),yn(e,n*.1,o+4,5,l,I,(o+4)/2,r+1,1.5);let d=new Cn;d.moveTo(-n*.49,0),d.lineTo(n*.49,0),d.lineTo(0,a),d.closePath();let g=new mi(d,{depth:i+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Mi(e,g,u,0,o+4);let y=n*.49,p=Math.atan2(a,y),m=Math.hypot(a,y),x=(i+11)/8,v=[[],[]];for(let I of[-1,1])for(let D=0;D<8;D++){let H=-r-5.5+(D+.5)*x,N=new Ae(m*.97,2.2,x-.62);N.rotateZ(-I*p),N.translate(I*y*.5,o+5.65+a*.5,H),v[D%2].push(N)}v.forEach((I,D)=>{Mi(e,qn(I),h[D]),I.forEach(H=>H.dispose())}),yn(e,4,4.5,i+12,u,0,o+a+5.6,0,1.5),en(e,n*.95,3.5,3.5,l,0,o+4,r+5.5),en(e,s,o,1.5,f,0,o/2+4,r-4);for(let I of e.children)I.isMesh&&(I.castShadow=!0);let b=me(te.mint),_=me(te.sage),R=(o-3)/6,M=Array.from({length:6},(I,D)=>{let H=Xr(e,0,o-(D+.5)*R+2,r+.5);return yn(H,s-2,R-.7,3.4,b,0,0,0,1.2),en(H,s*.91,.68,.7,_,0,R*.23,1.8),D===5&&yn(H,s*.13,2,2.2,l,0,0,2.3,.55),H}),C=me(te.gold,{emissive:te.ember,emissiveIntensity:0});_i(e,3.7,C,n*.422,o*.73,r+4.5);let F=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(I,D=0,H,N=!1){let B=Kh(I)??(N?0:F);N||(F=B),b.color.setHex($s(I)?te.mint:te.muted),_.color.setHex($s(I)?te.sage:te.muted);let W=(1-B)*M.length;M.forEach((j,et)=>{let at=ci(W-et,0,1);j.visible=at>.02,j.scale.y=at,j.position.y=o-(et+at/2)*R+2});let it=["opening","closing"].includes(jh(I));C.emissiveIntensity=it?.55+(.5+.5*Math.cos(D*6)):0}}}function xS(n){let t=new se,e=46,i=me(te.cream),s=me(te.honey),r=Math.min(n*.86,88),o=Xr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])en(t,3.4,e,5,i,c,e/2);en(t,r+4,3,5,i,0,e),yn(o,r-2,e-4,4,s,r/2,e/2,0,2),_i(o,2.2,me(te.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,h=!1){let d=Kh(c)??(h?0:a);h||(a=d),o.rotation.y=-1.32*d,s.color.setHex($s(c)?te.honey:te.muted)}}}function bS(n,t,e){let i=new se,s=n.type!=="wallUnit",r=e.mountY??(s?42:48),o=ci(t*.85,23,126),a=me(te.dark,{emissive:te.mint,emissiveIntensity:0});if(yn(i,o,s?25:18,8,me(te.cream),0,r,0),s){yn(i,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])_i(i,1.35,me(te.oat),o*c,r-7,4.3)}else en(i,o*.89,2.2,.7,a,0,r-4,4.2);return{root:i,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",h=$s(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?te.warm:te.glass),a.emissiveIntensity=h?1.15:qr(c)?.25:0}}}function vS(n,t,e){let i=new se,s=Math.min(t,e)*.74,r=n.type==="humidifier",o=r?25:30,a=me(te.cream),c=me(r?te.glass:te.sage),l=me(te.teal,{emissive:te.mint,emissiveIntensity:0}),u=o-1;if(Je(i,s*.46,s*.5,4,me(te.ink),0,2),r){let d=_i(i,s/2,c,0,13,0);d.scale.y=22/s,Je(i,s*.19,s*.22,3.5,a,0,u)}else{yn(i,s,24,s*.82,c,0,15,0,5),yn(i,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)en(i,s*.66,1.2,1.1,l,0,u+2,d*3.5)}_i(i,1.6,l,s*.18,u-2,s*.31);let h=me(te.glass,{transparent:!0,opacity:.54,depthWrite:!1}),f=Array.from({length:3},(d,g)=>_i(i,2.1+g*.6,h,0,u+3,0));return{root:i,anchorY:u,animate(d,g=0){let y=qr(d);l.emissiveIntensity=y?1.6:0;for(let p=0;p<f.length;p++){f[p].visible=y;let m=(g*.68+p/f.length)%1;f[p].position.set(Math.sin(m*ya)*3.1,u+4+m*14,0),f[p].scale.setScalar(.7+m*.62)}}}}function _S(n,t,e){let i=new se,s=Gl(n.type),r=s?.form,o=Math.min(t,e)*.42,a=.72;i.scale.setScalar(a);let c=me(te.sage,{emissive:te.mint,emissiveIntensity:0}),l=me(s?.palette.dark??te.ink),u=me(s?.palette.base??te.cream,{roughness:.46}),h=r==="slim"?1.22:1,f=Je(i,o,o*.95,r==="slim"?4.8:7,l,0,4.6),d=Je(i,o*.96,o,r==="slim"?3.6:5.5,u,0,r==="slim"?8.4:10.2);f.scale.x=d.scale.x=h,Je(i,o*.28,o*.33,4,me(te.oat),0,14,-o*.23);for(let p of[-.27,.27])_i(i,o*.105,l,o*p,10,o*.88);let g=yn(i,o*.68,1.2,2.5,c,0,13.2,o*.36);if(r==="mop"){let p=me(s.palette.accent);for(let m of[-1,1])Je(i,o*.39,o*.4,2.1,p,m*o*.45,1.8,o*.51)}let y;if(r==="docked"){y=new se,y.name="Vacuum charging dock";let p=me(s.palette.accent);yn(y,o*1.36,1.8,o*.95,l,0,1.2,-o*.59,.4),yn(y,o*1.36,o*.53,o*.35,p,0,o*.3,-o*.94,1.4),en(y,o*.5,.9,.9,l,0,o*.41,-o*.75)}return{root:i,dock:y,anchorY:12,floorRadius:o*1.03*a*h,animate(p,m=0,x=!1){let v=["cleaning","returning"].includes(jh(p));g.material.emissiveIntensity=v?x?.6+.5*Math.cos(m*6):.3:0}}}function Jh(n){return n.type==="controlZone"&&(n.visualKind==="window"||(!n.visualKind||n.visualKind==="auto")&&typeof n.entityId=="string"&&n.entityId.startsWith("cover."))}function mm(n,t={}){let e=ga(n.w,42),i=ga(n.h,42),s=String(n.type??""),r=n.visualKind;return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?gS(e,t):s==="garageDoor"?yS(e,i):s==="door"||r==="door"?xS(e):s==="window"?hm(e,!0,!!n.entityId):s==="controlZone"?Jh(n)?hm(ga(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?bS(n,e,t):s==="airPurifier"||s==="humidifier"?vS(n,e,i):r==="vacuum"||/^cleaning-.*robot/.test(s)?_S(n,e,i):s==="windowFan"?um(n,e,i,!0):r==="fan"||/^fans-/.test(s)?um(n,e,i,!1):r==="light"||n.lightForm||Gl(s)?.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?pS(n,e,i,t):null}var _m=Pa(xa(),1),{difference:Mm,union:Sm}=_m.default,Xl=18,Jn=.001,Di=(n,t)=>n[0]*t[0]+n[1]*t[1],Zs=(n,t)=>n[0]*t[1]-n[1]*t[0],Fi=(n,t)=>[n[0]-t[0],n[1]-t[1]],He=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e],Yl=([n,t])=>[-t,n],gm=(n,t,e,i)=>[[n,t],[e,t],[e,i],[n,i]],Vl=n=>n.map(({x:t,y:e})=>[t,e]),Ki=n=>[n.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],wm=n=>n.length?Sm(...n):[];function ql(n,t,e,i=0){let s=Fi(t,n),r=Math.hypot(...s);if(r<Jn)return null;let o=s.map(u=>u/r),a=Yl(o),c=He(n,o,-i),l=He(t,o,i);return Ki([He(c,a,e),He(l,a,e),He(l,a,-e),He(c,a,-e)])}function Wl(n,t){let[e,i]=t,s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){let[a,c]=n[r],[l,u]=n[o];c>i!=u>i&&e<(l-a)*(i-c)/(u-c)+a&&(s=!s)}return s}function ym(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=Fi(i,t),r=Math.hypot(...s);return r>Jn?[{start:t,end:i,length:r,tangent:s.map(o=>o/r)}]:[]})}function MS(n,t,e,i){if(Math.abs(Di(n.tangent,t.tangent))<.9999)return null;let s=Yl(n.tangent),[r,o]=[t.start,t.end].map(y=>Fi(y,n.start)),a=Di(r,s);if(Math.abs(a)<.1||Math.abs(a)>Xl||Math.abs(a-Di(o,s))>.1)return null;let c=[Di(r,n.tangent),Di(o,n.tangent)].sort((y,p)=>y-p),l=Math.max(0,c[0]),u=Math.min(n.length,c[1]);if(u-l<8)return null;let h=He(n.start,n.tangent,(l+u)/2),f=Math.sign(a);if(!Wl(e,He(h,s,-f))||!Wl(i,He(h,s,a+f))||Wl(e,He(h,s,a/2))||Wl(i,He(h,s,a/2)))return null;let d=He(n.start,n.tangent,l),g=He(n.start,n.tangent,u);return Ki([He(d,s,-f*.05),He(g,s,-f*.05),He(g,s,a+f*.05),He(d,s,a+f*.05)])}function Em(n){let t=[],e=[];for(let i of[...n].reverse()){let s=wm(i.polygons);if(!s.length)continue;let r=t.length?Mm(s,t):s;r.length&&e.push({surface:i.surface,polygons:r}),t=t.length?Sm(t,s):s}return{footprint:t,regions:e.reverse()}}function Yr(n){return n.outdoor===!0||n.outdoor!==!1&&n.surface==="patio"}function ef(n,t,e=!1){let i=n.map(f=>({surface:f.surface,points:Vl(f.points),polygons:[Ki(Vl(f.points))],outdoor:e&&Yr(f)})),s=[];for(let[f,d]of i.entries())for(let g of i.slice(f+1))for(let y of ym(d.points))for(let p of ym(g.points)){let m=MS(y,p,d.points,g.points);m&&s.push({surface:d.surface,polygons:[m],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:f,deckEdge:d,stepBottom:g,deckBottom:y,northDeck:p,southDeck:m,recess:x}=t;r.push({surface:"patio",polygons:[Ki(Vl(p)),Ki(Vl(m)),Ki(gm(f,g,d+1,y))]}),x.x2>x.x1&&x.z2>x.z1&&o.push({surface:"oak",polygons:[Ki(gm(x.x1,x.z1,x.x2,x.z2))]})}let a=[...s,...i],c=[...o,...a.filter(f=>!f.outdoor)],l=[...r,...a.filter(f=>f.outdoor)],u=Em([...l,...c]),h=t||e?wm(c.flatMap(f=>f.polygons)):[];return{...u,foundation:h}}function SS(n,t,e,i){let s=Zs(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-i,o=He(n,Yl(t),r),a=He(n,Yl(e),-r),c=Zs(Fi(a,o),e)/s,l=He(o,t,c);return Math.hypot(...Fi(l,n))>i*2.5?Ki([n,o,a]):Ki([n,o,l,a])}function xm(n,t){let e=Zs(n.tangent,t.tangent);if(Math.abs(e)<.13)return null;let i=Fi(t.point,n.point);return[Zs(i,t.tangent)/e,Zs(i,n.tangent)/e]}function wS(n){let t=n.flatMap(i=>[{wall:i,point:[i.x1,i.y1],tangent:[i.dx,i.dz]},{wall:i,point:[i.x2,i.y2],tangent:[-i.dx,-i.dz]}]),e=[];for(let[i,s]of t.entries()){for(let r of t.slice(i+1)){if(s.wall===r.wall)continue;let o=Fi(r.point,s.point);if(Math.hypot(...o)>Xl)continue;let a=xm(s,r);a&&a.every(c=>c>=-Xl&&c<=Jn)?e.push({a:s,b:r,center:He(s.point,s.tangent,a[0])}):!a&&Di(s.tangent,r.tangent)<0&&Di(o,s.tangent)<=Jn&&Di(o,r.tangent)>=-Jn&&e.push({a:s,b:r})}for(let r of n){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=xm(s,o);if(!a)continue;let[c,l]=a;c<-Xl||c>=-Jn||l<=Jn||l>=r.length-Jn||r.openings.some(({start:u,end:h})=>l>=u&&l<=h)||e.push({a:s,center:He(s.point,s.tangent,c)})}}return e}function bm({a:n,b:t,center:e},i){return e?[ql(n.point,e,i,.1),t&&ql(t.point,e,i,.1),t&&SS(e,n.tangent,t.tangent,i)].filter(Boolean):[ql(n.point,t.point,i,.1)].filter(Boolean)}function Tm(n){return n.flatMap(t=>t.flatMap(e=>e.slice(1).map((i,s)=>[e[s],i])))}function ES(n,t){return Tm(n).flatMap(([e,i])=>{let s=Fi(i,e),r=Math.hypot(...s);if(r<Jn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Fi(a,e),u=Fi(c,e);if(Math.abs(Zs(l,o))>Jn||Math.abs(Zs(u,o))>Jn)return[];let[h,f]=[Di(l,o),Di(u,o)].sort((y,p)=>y-p),d=Math.max(0,h),g=Math.min(r,f);return g-d>Jn?[[He(e,o,d),He(e,o,g)]]:[]})})}function vm(n,t){return t?.length?Mm(n,t):n}function Am(n,t,e,i){let s=[],r=(c,l,u,h,f=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:h,priority:f})};for(let c of n){let{palette:[l,u,h]}=c,f=[c.x1,c.y1],d=[c.dx,c.dz],g=(x,v,b,_,S,R,M)=>{v-x>Jn&&r(ql(He(f,d,x),He(f,d,v),S/2),b,_,R,M)},y=c.openings.length?i:0,p=(x,v)=>{g(x,v,y,e,t,l,2),g(x,v,e-1,e+2,t+3,u,1)};y&&g(0,c.length,0,y,t,l,2);let m=0;for(let x of c.openings)p(m,x.start),m=Math.max(m,x.end);p(m,c.length),g(0,c.length,0,3,t+3,h,1)}for(let c of wS(n)){let[l,u,h]=c.a.wall.palette;for(let f of bm(c,t/2))r(f,0,e,l,2);for(let f of bm(c,(t+3)/2))r(f,e-1,e+2,u,1),r(f,0,3,h,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],h=new Map,f=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of f.sort((y,p)=>y.priority-p.priority))h.has(d)||h.set(d,{surface:d,polygons:[]}),h.get(d).polygons.push(g);return{...Em([...h.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:h},f)=>{let d=Tm(l);return c.map(g=>({...g,bottom:u,top:h,faces:{top:vm(g.polygons,a[f+1]?.footprint),bottom:u===0?[]:vm(g.polygons,a[f-1]?.footprint),sides:ES(g.polygons,d)}}))})}var TS=new Map([["partlycloudy",.32],["cloudy",.84],["windy-variant",.7],["fog",.95],["snowy",.82],["snowy-rainy",.92],["hail",.94],["rainy",.88],["pouring",.97],["lightning",.91],["lightning-rainy",.98]]),AS=(n,t,e)=>Math.min(e,Math.max(t,n)),Rm=n=>n*Math.PI/180;function js(n,t,e){let i=AS((n-t)/(e-t),0,1);return i*i*(3-2*i)}function Ji(n={}){let{sunElevation:t,sunAzimuth:e,sunRising:i,condition:s,night:r,cloudCoverage:o}=n,a=Number.isFinite(t)&&Math.abs(t)<=90?t:r||s==="clear-night"?-18:38,c=Number.isFinite(e)&&e>=0&&e<=360?e%360:void 0,l=typeof i=="boolean"?i:c!==void 0&&c<180,u=a<19&&a>-12,h=c??(u?l?90:270:150),f=Math.max(TS.get(s)??0,Number.isFinite(o)&&o>=0&&o<=100?o/100:0);return{elevation:a,azimuth:h,rising:l,cloud:f,phase:u?l?"sunrise":"sunset":a<=-12?"night":"day",daylight:js(a,-10,18),twilight:js(a,-12,-3)*(1-js(a,3,19)),lowSun:js(a,-1,4)*(1-js(a,9,33)),disc:js(a,-.9,.8),east:Math.sin(Rm(h)),north:Math.cos(Rm(h))}}function Cm(){let n,t,e=0;function i(s){let r=js(s-e,0,.8);if(!n||r>=1)return t;let o=(t.azimuth-n.azimuth+540)%360-180;return Ji({sunElevation:n.elevation+(t.elevation-n.elevation)*r,sunAzimuth:(n.azimuth+o*r+360)%360,sunRising:t.rising,cloudCoverage:(n.cloud+(t.cloud-n.cloud)*r)*100})}return(s,r,o=!1)=>!t||o||!Number.isFinite(r)||r<e?(n=void 0,t=s,e=Number.isFinite(r)?r:0,t):((s.elevation!==t.elevation||s.azimuth!==t.azimuth||s.rising!==t.rising||s.cloud!==t.cloud)&&(n=i(r),t=s,e=r),i(r))}var RS=3,CS={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},nf=Object.fromEntries(Object.entries(CS).map(([n,t])=>[n,t.map(e=>new Yt(e))])),IS={sunrise:["#f6bfc2","#947b96","#ffd29d","#f0c7b7","#767d9c"],sunset:["#f1ad90","#8d647a","#ffaf71","#eab290","#80677f"]},PS=Object.fromEntries(Object.entries(IS).map(([n,t])=>[n,t.map(e=>new Yt(e))])),{clamp:LS,lerp:$r,smoothstep:NS}=oe;function Im(n,t,e){n.toneMapping=Qo,n.toneMappingExposure=1.07,n.shadowMap.enabled=!0,n.shadowMap.type=Vs,n.shadowMap.autoUpdate=!1;let i=new Gs("#fff4e5","#897e91",1.13),s=new ys("#fff0d4",2.15),r=new ys("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,h=(c+l)/2;s.position.set(u-610,1150,h-490),s.target.position.set(u,0,h),r.position.set(u+290,410,h+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,n.capabilities.maxTextureSize));let f=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-f,right:f,top:f,bottom:-f,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:RS},()=>new jo("#ffd7a5",0,145,2));t.add(i,s,s.target,r,...d);let g=[],y,p,m,x=!0,v=new Yt,b=new Yt;function _(){for(let M of t.children)M.isMesh&&(M.receiveShadow=!0,M.geometry.computeBoundingBox(),M.castShadow=M.geometry.boundingBox.max.y+M.position.y>-99)}function S(M,C){let F=/(light|lamp|sconce)/i.test(M.type),I=!C.animate||F;C.root.traverse(D=>{!D.isMesh||D.material.transparent||D.material.isShaderMaterial||(D.receiveShadow=!0,D.castShadow||=I)}),F&&M.entityId&&M.visualKind!=="none"&&g.push({item:M,object:C})}function R(M,C,F,I=!1){let{elevation:D,azimuth:H,rising:N,daylight:k,twilight:B,lowSun:W,cloud:it}=M.solar??Ji(M),j=LS(D,-12,35),et=`${N}:${Math.round(j*4)}:${Math.round(it*32)}`,at=NS(D,-.85,9);if(et!==y){let Pt=[i.color,i.groundColor,s.color,F.color,t.background],Lt=PS[N?"sunrise":"sunset"];for(let[J,ft]of Pt.entries()){b.lerpColors(nf.clear[J],nf.overcast[J],it),ft.lerpColors(nf.night[J],b,k);let Ct=J===2?W*.76:B*(J===4?.55:.43);ft.lerp(Lt[J],Ct*(1-it*.73))}i.intensity=$r(.63,1.13+it*.17,k)+B*.17,s.intensity=.23+at*$r(1.91,.48,it)*$r(.46,1,k),r.intensity=$r(.17,.23,k)+B*.08,s.shadow.intensity=at*$r(.83,.21,it),y=et,m=void 0}let Et=Math.round(H/2)*2,_t=Math.max(10,Math.round(D)),St=`${Et}:${_t}`;if(at>0&&St!==p){let Pt=oe.degToRad(Et),Lt=oe.degToRad(_t),J=Math.cos(Lt)*1600;s.position.set(u+Math.sin(Pt)*J,Math.sin(Lt)*1600,h-Math.cos(Pt)*J),p=St,x=!0}if(m!==C||I){let Pt=g.flatMap(({item:Lt,object:J})=>{let ft=C[Lt.id];if(ft?.state!=="on")return[];let Ct=Number.isFinite(ft.attributes?.brightness)?oe.clamp(ft.attributes.brightness/255,0,1):1;return Ct>0?[{object:J,power:Ct,color:ft.attributes?.rgb_color}]:[]}).sort((Lt,J)=>J.power-Lt.power);for(let[Lt,J]of d.entries()){let ft=Pt[Lt];if(!ft){J.intensity=0;continue}let{object:Ct,power:Xt,color:Dt}=ft;Array.isArray(Dt)&&Dt.length===3&&Dt.every(Number.isFinite)?(v.setRGB(...Dt.map(lt=>oe.clamp(lt/255,0,1)),rn),J.color.copy(v)):J.color.set("#ffd5a2"),J.position.copy(Ct.root.position),J.position.y+=Math.max(18,(Ct.anchorY-9)*Ct.root.scale.y),J.intensity=Xt*$r(2350,1250,k)}m=C}(x||I&&at>0)&&(n.shadowMap.needsUpdate=!0,x=!1)}return{markStructure:_,register:S,update:R,dispose:()=>s.shadow.dispose()}}var Si=(n,t,e)=>Object.freeze({label:n,azimuth:t,tilt:e,zoom:1}),$l=65,DS=88,Zl=4400,FS=1900,Pm=-111,Zr=Object.freeze({default:Si("Default",0,0),top:Si("Top down",0,0),high:Si("High angle",0,15),dollhouse:Si("Dollhouse",2,30),corner:Si("Corner",45,40),north:Si("From north",180,42),east:Si("From east",90,42),south:Si("From south",0,42),west:Si("From west",270,42),waterfront:Si("Waterfront",0,15),free:Si("Free view",0,25)});function Lm(n,t=!1){let e=Object.entries(Zr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let i=e.map(([s,r])=>{let o=n.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});n.replaceChildren(...i),n.value="default",n.disabled=!1}function Qi(n="top"){let t=typeof n=="string"?{preset:n}:n??{},e=Object.hasOwn(Zr,t.preset)?t.preset:"top",i=Zr[e],s=Number.isFinite(t.azimuth)?t.azimuth:i.azimuth,r=e==="free"||e==="default"?DS:$l;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?oe.clamp(t.tilt,0,r):i.tilt,zoom:Number.isFinite(t.zoom)?oe.clamp(t.zoom,.6,2.5):i.zoom}}function Nm(n){let t=Qi(n);return{...t,preset:"free",tilt:t.tilt||Zr.free.tilt}}function sf(n){return n?.preset!=="free"||![n.azimuth,n.tilt,n.zoom].every(Number.isFinite)?null:Qi(n)}function rf(n){return Qi({...sf(n),preset:"default"})}function Dm(n){if(n<=$l)return null;let t=oe.smoothstep(n,$l,84);return{near:oe.lerp(3530,2680,t),far:oe.lerp(4260,3690,t)}}function Fm(n,t){let e=Math.max(.4,t/1536*.68),i=oe.clamp;return{w:Math.round(i((n?.w||170)*e,58,216)),h:Math.round(i((n?.h||110)*e,44,152))}}function Um(n){let t=n.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>sf(await t.request("CAMERA_GET")),write:i=>t.request("CAMERA_SET",i)};let e="roomcraft.default-camera.v1";return{async read(){return sf(JSON.parse(n.localStorage.getItem(e)))},async write(i){i?n.localStorage.setItem(e,JSON.stringify(i)):n.localStorage.removeItem(e)}}}function Om(n,t,e,i,s="top",{focus:r,demoZoom:o}={}){let a=Qi(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,i].every(Number.isFinite)||e<=0||i<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=oe.degToRad(a.azimuth),l=oe.degToRad(a.tilt),u=new V((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),h=new V(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));n.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),n.position.copy(u).addScaledVector(h,FS),n.lookAt(u),n.updateMatrixWorld(!0);let f=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Ue,g=new V;for(let S of[t.minX-37,t.maxX+37]){for(let R of[t.minZ-53,t.maxZ+36])for(let M of[Pm,f])d.expandByPoint(g.set(S,M,R).applyMatrix4(n.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(g.set(S,-106,t.sceneryMinZ-8).applyMatrix4(n.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let S=(d.max.y-d.min.y)*.025;d.min.y-=S,d.max.y+=S}let y=e/i,p=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*y),m=p/y,x=(d.min.x+d.max.x)/2,v=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:S,y:R}=g.set(r.x,r.y,r.z).applyMatrix4(n.matrixWorldInverse),M=Number.isFinite(r.weight)?oe.clamp(r.weight,0,1):1;x=oe.lerp(x,S,M),v=oe.lerp(v,R,M)}n.left=x-p,n.right=x+p,n.bottom=v-m,n.top=v+m,n.zoom=Number.isFinite(o)?oe.clamp(o,.6,4.5):a.zoom;let b=n.position.y+(v-m/n.zoom)*n.up.y,_=a.tilt>$l?Math.max(0,(Pm+24-b)/h.y):0;return _>0&&(n.position.addScaledVector(h,_),n.updateMatrixWorld(!0)),n.far=Zl+_,n.updateProjectionMatrix(),a}function km(n,t){let e=n.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(n)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Ue().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var US=n=>Math.max(0,Math.min(1,n)),of=(n,t)=>n?.x===t?.x&&n?.y===t?.y;function ba({allowsPoint:n,allowsRoute:t,duration:e=.32,maximumDistance:i=125}){let s,r,o=0,a=0,c=0,l=0,u=0,h,f,d;function g(x,v){s=r=x,o=v,a=0}function y(x,v=!1){if(l=x,!s||x<c)return null;v&&(a=0);let b=a>0?US((x-o)/a):1,_=r.x+(s.x-r.x)*b,S=r.y+(s.y-r.y)*b;return n(_,S)?{x:_,y:S,progress:b,heading:u,current:of(h,s),walking:!v&&b<1&&Math.hypot(s.x-r.x,s.y-r.y)>2}:(g(s,x),c=x+.24,null)}function p(x,v,{observation:b,reduceMotion:_=!1}={}){if(!Number.isFinite(x?.x)||!Number.isFinite(x?.y)||!n(x.x,x.y))return!1;if(of(x,h)&&b===f)return!0;if(h=x,f=b,!s)return g(x,v),!0;let S=y(v,_)??s,R=Math.hypot(x.x-S.x,x.y-S.y);return of(x,s)?d=null:R<=i&&t(S.x,S.y,x.x,x.y)?(d=null,r=S,s=x,o=v,a=_?0:e,R>1&&(u=Math.atan2(x.x-r.x,x.y-r.y))):d&&Math.hypot(x.x-d.x,x.y-d.y)<=48&&t(d.x,d.y,x.x,x.y)?(g(x,v),c=v+.24,d=null):d=x,!0}function m(){s=r=h=d=void 0,f=void 0,c=u=0}return{observe:p,sample:y,clear:m,get hasPosition(){return!!s},get pendingReacquisition(){return!!s&&c>l}}}var OS=/(?:sofa|loveseat|chaise)-/,kS=/-desk-/;function Es(n,t,e,i,s,r,o){return{x:n,z:t,surface:e,yaw:i,width:s,depth:r,pose:o}}function BS(n,t,e){let i=n==="sofa"||n.includes("cloud-sofa"),s=i&&e>t,r=n.includes("loveseat")||n.includes("chaise")?2:3,o=[];if(s){let a=e*.88/r,c=t*.38;for(let u=0;u<r;u++){let h=-.44*e+a*(u+.5);o.push(Es(-.25*t+.018*Math.min(t,e),h,37,Math.PI/2,a-3,c,"lounge"))}let l=n==="sofa"?1:-1;o.push(Es(.22*t,l*.3*e,37,l>0?Math.PI:0,.48*t,.34*e,"lounge"))}else{let a=i?.57*e:e,c=i?-.215*e:0,l=.8*t/r;for(let u=0;u<r;u++)o.push(Es(-.4*t+l*(u+.5),c+a*.08,37,0,l-3,a*.7,"lounge"));i&&o.push(Es(-.32*t,.25*e,37,0,.33*t,.42*e,"lounge"))}return o}function zS(n,t){let{x:e,z:i,angle:s}=n,r=-Math.sin(s),o=Math.cos(s);return t.some(({x:a,z:c,item:l})=>{let u=a-e,h=c-i,f=Math.min(104,Math.max(50,Math.min(l.w,l.h)*.58));return Math.hypot(u,h)<=f&&u*r+h*o>=-8})}function HS(n,t){let{type:e,w:i,h:s}=n.item;if(e==="sofa"||OS.test(e))return BS(e,i,s);if(e==="diningChair"||e.startsWith("living-dining-chair-"))return[Es(0,0,30,0,i*.83,s*.83,"dining")];if(e==="chair"||e==="stool"||e.includes("desk-chair")){let r=e.includes("desk-chair")||zS(n,t)?"desk":"idle";return[Es(0,0,e==="stool"?32:41,0,i*.83,s*.83,r)]}if(e==="armchair"||e.includes("acorn-armchair"))return[Es(0,0,32,0,i*.65,s*.76,"lounge")];if(e==="bedroomBench"){let r=i>=58?2:1;return Array.from({length:r},(o,a)=>Es((a-(r-1)/2)*i*.44,0,34.2,0,i*.87/r,s*.91,"bench"))}return[]}function Bm(n,t,e){let i=n.filter(({item:r})=>r.type==="desk"||kS.test(r.type)),s=[];for(let r of n){let{item:o,x:a,z:c,baseY:l,angle:u}=r,h=t.get(o.id)?.root;if(!h||l!==0)continue;let f=Math.sin(u),d=Math.cos(u);for(let[g,y]of HS(r,i).entries()){if(y.width<12||y.depth<11)continue;let p=a+y.x*d-y.z*f,m=c+y.x*f+y.z*d;if(e(p,m)<7)continue;let v=y.yaw-u,b=h.position.y+y.surface*h.scale.y;b<10||b>84||s.push({id:`${o.id}:${g}`,itemId:o.id,x:p,z:m,y:b,heading:v,forwardX:Math.sin(v),forwardZ:Math.cos(v),pose:y.pose,reach:Math.min(42,Math.max(18,y.depth*.48+8)),behind:Math.max(7,y.depth*.32),width:y.width,depth:y.depth})}}return s}function zm(n,t,e,i,s=1){let r=t-n.x,o=e-n.z;return Math.hypot(r,o)>n.reach*s||r*n.forwardX+o*n.forwardZ<-n.behind?!1:!i||i(t,e,n.x,n.z)}function Hm(){let n,t,e,i;function s(o,a){let c=o.expiresAt;!Number.isFinite(c)||c<=e||((!n||c-e>3100||Math.hypot(o.x-n.x,o.y-n.y)>10)&&(n=o,t=c),e=c,i=a)}function r(o,a,c){return!!(n&&e-t>=1200&&c-i<=3100/1e3&&Math.hypot(o-n.x,a-n.y)<=10)}return{observe:s,ready:r}}var GS=24,af=17.5,VS=.42,WS=8.9,va=[{role:"papa",scale:[1.26,1.25,1.22],radius:20,sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],radius:18,sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],radius:16,sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}],XS={idle:{lean:.03,tilt:0,thighs:-1.3,shins:1.16,hands:[-.43,-.4],fidget:.1,pace:2.1},lounge:{lean:-.13,tilt:.07,thighs:-1.16,shins:.92,hands:[-.22,-.14],fidget:.13,pace:1.8},dining:{lean:.06,tilt:.02,thighs:-1.34,shins:1.26,hands:[-.61,-.51],fidget:.14,pace:2.8},desk:{lean:.16,tilt:0,thighs:-1.26,shins:1.18,hands:[-.98,-.92],fidget:.12,pace:6.3},bench:{lean:.04,tilt:-.09,thighs:-1.28,shins:1.1,hands:[-.35,-.56],fidget:.22,pace:3.3}},jl=(n,t,e)=>n+(t-n)*e,qS=n=>Math.min(1,Math.max(0,n)),YS=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t));function _a(n,t=.12){return new Ye({color:n,roughness:.78,emissive:n,emissiveIntensity:t})}function $S(n,t,e,i=0,s=0){let r=!e&&t%4.8<.13;n.head.rotation.x=-.62+i+(e?0:Math.sin(t*1.5)*.047),n.head.rotation.y=s,n.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let o of n.eyes)o.scale.y=r?.15:.87}function cf(n,t=()=>0,{supportsRoute:e,floorClearance:i,allowsBodyPoint:s,allowsBodyRoute:r,seats:o=[]}={}){let a=new se;a.name="tracked-people",n.add(a);let c,l=new Map,u=va.map(()=>[]),h=!1,f=!1,d=0,g=!1;function y(){return{sphere:new Re(1,12,8),disc:new Rn(1,24).rotateX(-Math.PI/2),groundRing:new Xo(13.8,af,32).rotateX(-Math.PI/2),glasses:new Pn(1,.14,6,16),palette:va.map(({sweater:I,trim:D,skin:H,hair:N})=>Object.fromEntries(Object.entries({sweater:I,trim:D,skin:H,hair:N}).map(([k,B])=>[k,_a(B)]))),ink:_a("#423c50",.09),cheek:_a("#d78383"),shoes:_a("#514656"),white:_a("#fff1dc"),shadow:new Oe({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new Oe({color:"#fff1cd",depthTest:!1,depthWrite:!1,toneMapped:!1})}}function p(I){c??=y();let{role:D,scale:H,radius:N}=va[I],{sweater:k,trim:B,skin:W,hair:it}=c.palette[I],j=D==="baby",et=new se;et.name=`radar-avatar-${D}`;let at=new se;at.name="radar-avatar-pose";let Et=new se,_t=new se,St=[],Pt=[],Lt=[];a.add(et),et.add(at),at.add(Et),Et.scale.set(...H);let J=(Dt,X,lt,q,Q,rt,ht,mt)=>{let Tt=new ue(c.sphere,X);return Tt.position.set(lt,q,Q),Tt.scale.set(rt,ht,mt),Dt.add(Tt),Tt},ft=new ue(c.disc,c.shadow);ft.position.y=.13,ft.scale.set(19,1,19),et.add(ft);let Ct=new ue(c.groundRing,c.groundMark);Ct.name="radar-track-mark",Ct.renderOrder=-1,a.add(Ct),J(Et,k,0,15,0,j?8.2:7.1,8.3,5.4),j?(J(Et,B,0,17.5,4.8,4.9,4.1,1.15),J(Et,c.white,0,17.4,5.9,1.5,1.5,.35)):(J(Et,B,0,20.7,2.4,5.8,2.2,4),J(Et,B,D==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let Dt of[-1,1]){let X=new se;X.position.set(Dt*3.4,10.3,.1),Et.add(X);let lt=new se;lt.position.y=-4.65,X.add(lt);let q=j?k:c.ink;J(X,q,0,-2.35,0,2.65,3.25,2.6),J(lt,q,0,-1.6,0,2.4,3.1,2.4),J(lt,j?B:c.shoes,0,-3.5,1.25,3.1,2.1,4),J(lt,c.white,0,-4.15,3.25,2.75,1.1,2),Lt.push({thigh:X,shin:lt});let Q=new se;Q.position.set(Dt*6.25,19.1,0),Et.add(Q),J(Q,k,Dt*.9,-3.7,.15,2.75,5.3,2.7),J(Q,W,Dt*1.3,-7.8,.5,2.3,2.6,2.2),Pt.push(Q)}_t.position.set(0,j?26:27.2,0),j&&_t.scale.set(1.16,1.17,1.12),Et.add(_t),J(_t,it,0,1.3,-1.65,9.2,9.65,8.6),J(_t,W,0,0,1.9,8.65,8.45,7.5);let Xt=J(_t,it,-2.1,7.3,4.25,6.4,3.4,4.35);if(Xt.rotation.z=D==="papa"?-.27:.22,D==="mama"&&(J(_t,it,-6.7,-1.9,-3.8,3.6,8.1,5.2),J(_t,it,6.2,-1.7,-3.9,3.3,7.6,5.4),J(_t,it,2.8,10.4,-2.5,5.1,5.1,5.1),J(_t,B,4.4,8.7,2.2,2.8,1.1,1.1)),j){J(_t,it,-7.3,6.7,-2,3.35,3.7,3.5),J(_t,it,7.3,6.7,-2,3.35,3.7,3.5);let Dt=J(_t,B,.9,10,4.2,2.5,1.45,1.25),X=J(_t,B,4.1,10,4.2,2.5,1.45,1.25);Dt.rotation.z=-.4,X.rotation.z=.4,J(_t,c.white,2.5,9.8,5.1,1.15,1.2,1)}for(let Dt of[-1,1])if(J(_t,W,Dt*8.2,-.15,1.1,1.85,2.4,1.75),St.push(J(_t,c.ink,Dt*3,1.2,8.95,.85,.87,.52)),J(_t,c.cheek,Dt*5.05,-1.25,7.95,1.18,.62,.52),D==="papa"){let X=new ue(c.glasses,c.ink);X.position.set(Dt*3.1,1.25,9.15),X.scale.set(2.5,2.15,1.55),_t.add(X)}return D==="papa"&&J(_t,c.ink,0,1.6,9.35,1.1,.28,.35),J(_t,c.ink,0,-1.95,9.15,1.38,.45,.38),{root:et,groundMark:Ct,poseRoot:at,body:Et,head:_t,arms:Pt,legs:Lt,eyes:St,radius:N,styleIndex:I,baby:j}}let m=(I,D)=>Number.isFinite(t(I,D))&&(!i||i(I,D)>0),x=(I,D,H,N)=>m(I,D)&&(!i||i(I,D)>=H)&&(s?.(I,D,H,N)??!0),v=(I,D,H,N,k,B)=>(e?.(I,D,H,N,k)??!0)&&(r?.(I,D,H,N,k,B)??!0);function b(I,D,H,N,k=1){return I.width>=N*1.35&&I.depth>=N*.82&&x(I.x,I.z,N,I.itemId)&&zm(I,D,H,(B,W,it,j)=>v(B,W,it,j,N,I.itemId),k)}function _(I,D,H,N){let k,B=1/0;for(let W of o){let it=Math.hypot(I-W.x,D-W.z);it>=B||N.has(W.id)||!b(W,I,D,H)||(k=W,B=it)}return k}function S(I,D,H,N){if(I.seat!==D&&(I.seat=D,I.poseAt=d),!D)return 0;if(f||!x(H,N,I.character.radius)||!x(D.x,D.z,I.character.radius)||!v(H,N,D.x,D.z,I.character.radius))return 1;let k=qS((d-I.poseAt)/VS);return k*k*(3-2*k)}function R(I,D,H){let{character:N,seat:k}=I,{x:B,y:W,heading:it,walking:j,progress:et}=D,at=t(B,W),Et=Math.cos(it),_t=Math.sin(it),St=(k?k.x-B:0)*H,Pt=(k?k.z-W:0)*H,Lt=XS[k?.pose??"idle"],J=k?k.y-at-WS*va[N.styleIndex].scale[1]:0;N.root.position.set(B,at,W),N.root.rotation.y=it,N.poseRoot.position.set(St*Et-Pt*_t,J*H,St*_t+Pt*Et),N.poseRoot.rotation.y=k?YS(k.heading,it)*H:0,N.poseRoot.userData.pose=H>0?k.pose:"standing";let ft=Math.floor(Math.max(0,d-I.born)*16)/16+.7+N.styleIndex*.62,Ct=Math.floor(et*12)/12*Math.PI*4,Xt=j?Math.sin(Ct)*.56:0,Dt=j?Math.abs(Math.sin(Ct))*1.9:(1+Math.sin(ft*4.7))*.47,X=.19*(1+Math.sin(ft*2.6));N.body.position.y=f?0:jl(Dt*(N.baby?1.5:1),X,H),N.body.rotation.x=Lt.lean*H;let lt=f?0:j?Xt*.15:Math.sin(ft*2.8)*.045;N.body.rotation.z=jl(lt,Lt.tilt,H);for(let Q=0;Q<2;Q++){let rt=Q===0?-1:1,ht=j?-Xt*rt:f?0:Math.sin(ft*3.1+Q)*.09,mt=f?0:Math.sin(ft*Lt.pace+Q*2.6)*Lt.fidget,Tt=f?0:Math.sin(ft*2.7+Q)*.035;N.arms[Q].rotation.x=jl(ht,Lt.hands[Q]+mt,H),N.legs[Q].thigh.rotation.x=jl(Xt*rt,Lt.thighs+Tt,H),N.legs[Q].shin.rotation.x=(Lt.shins+Tt*2)*H}let q=f||k?.pose==="desk"?0:Math.sin(ft*1.08)*.13*H;$S(N,ft,f,Lt.lean*.45*H,q)}function M(I,D=h,H=!0){d=Number.isFinite(I)?I:d,f=D||h,g=!1;let N=[],k=new Set;for(let B of l.values()){let{character:W}=B,{x:it,y:j}=B.point,et=t(it,j),at=i?.(it,j)??af;W.groundMark.visible=Number.isFinite(et)&&at>0,W.groundMark.visible&&(W.groundMark.position.set(it,et+.26,j),W.groundMark.scale.setScalar(Math.min(1,at/af)));let Et=B.motion.sample(d,f);B.bodyReported&&Et?.current&&(B.bodySuppressed=!1);let _t=B.bodyReported&&!B.bodySuppressed?Et:null,St=H&&(!B.bodyReported||_t?.current&&!_t.walking)&&B.dwell.ready(it,j,d);B.seat&&(St&&b(B.seat,it,j,W.radius,1.18)?k.add(B.seat.id):B.seat=void 0),N.push({track:B,standing:_t,ready:St})}for(let{track:B,standing:W,ready:it}of N){let{character:j,point:et}=B,at=it?B.seat??_(et.x,et.y,j.radius,k):void 0;at&&k.add(at.id);let Et=S(B,at,et.x,et.y),_t=at?{x:et.x,y:et.y,heading:W?.heading??at.heading,walking:!1,progress:1}:W;j.root.visible=!!_t,_t&&R(B,_t,Et),g||=j.root.visible||j.groundMark.visible}}function C(I,D,{reduceMotion:H=!1}={}){h=H;let N=Number.isFinite(D)?D:d,k=new Map;for(let W of Array.isArray(I)?I:[])if(!(typeof W?.id!="string"||!W.id||W.id.length>256||!Number.isFinite(W.x)||!Number.isFinite(W.y)||k.has(W.id)||!m(W.x,W.y))&&(k.set(W.id,W),k.size===GS))break;for(let[W,it]of l)k.has(W)||(it.character.root.visible=!1,it.character.groundMark.visible=!1,u[it.character.styleIndex].push(it.character),l.delete(W));let B=va.map(()=>0);for(let{character:W}of l.values())B[W.styleIndex]++;for(let W of[...k.keys()].filter(it=>!l.has(it)).sort()){let it=B.indexOf(Math.min(...B));B[it]++;let j=u[it].pop()??p(it),et=ba({allowsPoint:(at,Et)=>x(at,Et,j.radius),allowsRoute:(at,Et,_t,St)=>v(at,Et,_t,St,j.radius)});l.set(W,{character:j,motion:et,dwell:Hm(),born:N,poseAt:N})}for(let[W,it]of k){let j=l.get(W);j.point=it,j.bodyReported=j.motion.observe(it,N,{observation:it.expiresAt,reduceMotion:H}),j.bodyReported||(j.bodySuppressed=!0),o.length&&j.dwell.observe(it,N)}M(N,H)}function F(){if(a.removeFromParent(),!!c){for(let I of[c.ink,c.cheek,c.shoes,c.white,c.shadow,c.groundMark])I.dispose();for(let I of c.palette)for(let D of Object.values(I))D.dispose();c.sphere.dispose(),c.disc.dispose(),c.groundRing.dispose(),c.glasses.dispose(),a.clear();for(let I of u)I.length=0;l.clear(),c=void 0}}return{setTracks:C,render:M,dispose:F,setVisible(I){a.visible=I},get hasMotion(){return!f&&l.size>0},get hasVisibleTracks(){return g},get hasPendingReacquisition(){return[...l.values()].some(({motion:I})=>I.pendingReacquisition)}}}var Vm=Pa(xa(),1);var Ks=1e-7;function Gm(n,t,e){let i=!1;for(let s=1;s<n.length;s++){let[r,o]=n[s-1],[a,c]=n[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(i=!i)}return i}var Kl=(n,t,e,i,s,r)=>(e-n)*(r-t)-(i-t)*(s-n),Ts=(n,t,e)=>e>=Math.min(n,t)-Ks&&e<=Math.max(n,t)+Ks;function ZS([n,t,e,i],s,r,o,a){let c=Kl(n,t,e,i,s,r),l=Kl(n,t,e,i,o,a),u=Kl(s,r,o,a,n,t),h=Kl(s,r,o,a,e,i);return Math.abs(c)<Ks&&Ts(n,e,s)&&Ts(t,i,r)||Math.abs(l)<Ks&&Ts(n,e,o)&&Ts(t,i,a)||Math.abs(u)<Ks&&Ts(s,o,n)&&Ts(r,a,t)||Math.abs(h)<Ks&&Ts(s,o,e)&&Ts(r,a,i)?!0:c>0!=l>0&&u>0!=h>0}function Ma(n,t,e,i,s,r){let o=s-e,a=r-i,c=o*o+a*a,l=c?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0;return(n-e-l*o)**2+(t-i-l*a)**2}function Wm(n,t,e,i,s,r){if(ZS(n,t,e,i,s))return!0;if(!r)return!1;let[o,a,c,l]=n;return Math.min(Ma(t,e,...n),Ma(i,s,...n),Ma(o,a,t,e,i,s),Ma(c,l,t,e,i,s))<r}function lf(n,t){let e=t.filter(i=>i.bottom===0).flatMap(i=>i.polygons);return n.length&&e.length?Vm.default.difference(n,e):n}function uf(n){let t=typeof window>"u"?globalThis:window,e=n.flatMap(({item:r,x:o,z:a,angle:c})=>t.RoomcraftModels.walkingObstacleBoxes({...r,x:o,y:a,rotation:c*180/Math.PI}).map(l=>{let{width:u,height:h,u:f,v:d}=l;return{...l,id:r.id,extentX:Math.abs(f[0])*u+Math.abs(d[0])*h,extentZ:Math.abs(f[1])*u+Math.abs(d[1])*h,edges:[[-u,-h,u,-h],[u,-h,u,h],[u,h,-u,h],[-u,h,-u,-h]]}}));function i(r,o,a,c,l=0,u){let h=Math.max(0,l)**2;return e.some(f=>{if(f.id===u||Math.min(r,a)>f.x+f.extentX+l||Math.max(r,a)<f.x-f.extentX-l||Math.min(o,c)>f.y+f.extentZ+l||Math.max(o,c)<f.y-f.extentZ-l)return!1;let d=r-f.x,g=o-f.y,y=a-f.x,p=c-f.y,m=d*f.u[0]+g*f.u[1],x=d*f.v[0]+g*f.v[1],v=y*f.u[0]+p*f.u[1],b=y*f.v[0]+p*f.v[1],_=(S,R)=>Math.abs(S)<=f.width&&Math.abs(R)<=f.height;return _(m,x)||_(v,b)||f.edges.some(S=>Wm(S,m,x,v,b,h))})}return{blocksPoint:(r,o,a,c)=>i(r,o,r,o,a,c),blocksRoute:i}}function Sa(n){let t=n.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return n.some(([a,...c])=>Gm(a,r,o)&&!c.some(l=>Gm(l,r,o)))}function i(r,o){if(!e(r,o))return 0;let a=1/0;for(let c of t)a=Math.min(a,Ma(r,o,...c));return Math.sqrt(a)}function s(r,o,a,c,l=0){let u=Math.max(0,l-Ks)**2;return e(r,o)&&e(a,c)&&!t.some(h=>Wm(h,r,o,a,c,u))}return{contains:e,clearance:i,supportsRoute:s}}var Xm=new Ue,Jl=new V,jr=class extends Ko{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new jt(t,3)),this.setAttribute("uv",new jt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new xs(e,6,1);return this.setAttribute("instanceStart",new ni(i,3,0)),this.setAttribute("instanceEnd",new ni(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new xs(e,6,1);return this.setAttribute("instanceColorStart",new ni(i,3,0)),this.setAttribute("instanceColorEnd",new ni(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new qo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Xm.setFromBufferAttribute(e),this.boundingBox.union(Xm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Jl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Jl)),Jl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Wt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};zn.line={uniforms:Zi.merge([Wt.common,Wt.fog,Wt.line]),vertexShader:`
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
		`};var As=class extends ze{constructor(t){super({type:"LineMaterial",uniforms:Zi.clone(zn.line.uniforms),vertexShader:zn.line.vertexShader,fragmentShader:zn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var hf=new Le,qm=new V,Ym=new V,bn=new Le,vn=new Le,Ui=new Le,ff=new V,df=new Me,_n=new Jo,$m=new V,Ql=new Ue,tu=new Wn,Oi=new Le,ki,Js;function Zm(n,t,e){return Oi.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),Oi.multiplyScalar(1/Oi.w),Oi.x=Js/e.width,Oi.y=Js/e.height,Oi.applyMatrix4(n.projectionMatrixInverse),Oi.multiplyScalar(1/Oi.w),Math.abs(Math.max(Oi.x,Oi.y))}function jS(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,c=o;a<c;a++){_n.start.fromBufferAttribute(s,a),_n.end.fromBufferAttribute(r,a),_n.applyMatrix4(e);let l=new V,u=new V;ki.distanceSqToSegment(_n.start,_n.end,u,l),u.distanceTo(l)<Js*.5&&t.push({point:u,pointOnLine:l,distance:ki.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function KS(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),h=-t.near;ki.at(1,Ui),Ui.w=1,Ui.applyMatrix4(t.matrixWorldInverse),Ui.applyMatrix4(i),Ui.multiplyScalar(1/Ui.w),Ui.x*=r.x/2,Ui.y*=r.y/2,Ui.z=0,ff.copy(Ui),df.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,d=u;f<d;f++){if(bn.fromBufferAttribute(c,f),vn.fromBufferAttribute(l,f),bn.w=1,vn.w=1,bn.applyMatrix4(df),vn.applyMatrix4(df),bn.z>h&&vn.z>h)continue;if(bn.z>h){let v=bn.z-vn.z,b=(bn.z-h)/v;bn.lerp(vn,b)}else if(vn.z>h){let v=vn.z-bn.z,b=(vn.z-h)/v;vn.lerp(bn,b)}bn.applyMatrix4(i),vn.applyMatrix4(i),bn.multiplyScalar(1/bn.w),vn.multiplyScalar(1/vn.w),bn.x*=r.x/2,bn.y*=r.y/2,vn.x*=r.x/2,vn.y*=r.y/2,_n.start.copy(bn),_n.start.z=0,_n.end.copy(vn),_n.end.z=0;let y=_n.closestPointToPointParameter(ff,!0);_n.at(y,$m);let p=oe.lerp(bn.z,vn.z,y),m=p>=-1&&p<=1,x=ff.distanceTo($m)<Js*.5;if(m&&x){_n.start.fromBufferAttribute(c,f),_n.end.fromBufferAttribute(l,f),_n.start.applyMatrix4(o),_n.end.applyMatrix4(o);let v=new V,b=new V;ki.distanceSqToSegment(_n.start,_n.end,b,v),e.push({point:b,pointOnLine:v,distance:ki.origin.distanceTo(b),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var eu=class extends ue{constructor(t=new jr,e=new As({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)qm.fromBufferAttribute(e,o),Ym.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+qm.distanceTo(Ym);let r=new xs(s,2,1);return t.setAttribute("instanceDistanceStart",new ni(r,1,0)),t.setAttribute("instanceDistanceEnd",new ni(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ki=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Js=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),tu.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=Js*.5;else{let h=Math.max(s.near,tu.distanceToPoint(ki.origin));l=Zm(s,h,c.resolution)}if(tu.radius+=l,ki.intersectsSphere(tu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ql.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=Js*.5;else{let h=Math.max(s.near,Ql.distanceToPoint(ki.origin));u=Zm(s,h,c.resolution)}Ql.expandByScalar(u),ki.intersectsBox(Ql)!==!1&&(i?jS(this,e):KS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(hf),this.material.uniforms.resolution.value.set(hf.z,hf.w))}};var Kr=class extends jr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){let e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var nu=class extends eu{constructor(t=new Kr,e=new As({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var jm="#ffce84",JS="#a8f5ff",pf="#10242e";function iu(n,t,e){return new As({color:n,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function su(n,t,e,i){let s=new Kr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new nu(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=i+r,n.add(a)}}function Km(n,t,e,i){let s=new fe().setFromPoints(t.map(({x:o,y:a})=>new V(o,.5,a)));s.setIndex(Gn.triangulateShape(t.map(({x:o,y:a})=>new Nt(o,a)),[]).flat());let r=new ue(s,e);r.renderOrder=i,n.add(r)}function Jm(){let n=new us,t={side:tn,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new Oe({...t,color:jm,opacity:.13}),i=new Oe({...t,color:pf,opacity:.95}),s=iu(pf,4.6,{opacity:.8}),r=iu(jm,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=iu(pf,3.5,{...o,opacity:.65}),c=iu(JS,1.7,{...o,opacity:.9});function l({origin:f,forward:d}){let g=(p,m=0)=>({x:f.x+d.x*p-d.y*m,y:f.y+d.y*p+d.x*m}),y=Array.from({length:28},(p,m)=>{let x=m/28*Math.PI*2;return g(10*Math.cos(x),10*Math.sin(x))});su(n,[g(10),g(56)],[s,r],5),su(n,[g(45,-7),g(56),g(45,7)],[s,r],5),Km(n,y,i,7),su(n,[...y,y[0]],[s,r],8)}function u(f){for(let g of new Set(n.children.map(y=>y.geometry)))g.dispose();n.clear();let d=new Map;for(let g of f){let{points:y,kind:p,id:m,origin:x,forward:v}=g;if(y.length<3)continue;let b=p==="nominal";b&&Km(n,y,e,0),su(n,[...y,y[0]],b?[s,r]:[a,c],b?3:1),x&&v&&d.set(m,g)}for(let g of d.values())l(g)}function h(){u([]);for(let f of[e,i,s,r,a,c])f.dispose()}return{scene:n,setZones:u,dispose:h}}var tg=Pa(xa(),1);var QS=4096,tw=.18,ew=new Yt("#465fc4"),Qm=new Yt("#cc548d"),nw=new Yt("#ffd572");function iw(n,t,e){let i=e*.48,s=i*.83;return[[n-s,t-i],[n+s,t-i],[n+i,t-s],[n+i,t+s],[n+s,t+i],[n-s,t+i],[n-i,t+s],[n-i,t-s],[n-s,t-i]]}function sw({x:n,y:t,corners:e},i){return!Array.isArray(e)||e.length!==4||!e.every(s=>Array.isArray(s)&&s.length===2&&s.every(Number.isFinite))?iw(n,t,i):[...e,e[0]]}function rw(n,t,e,i,s){let[r,...o]=e.map(l=>l.slice(0,-1).map(([u,h])=>new Nt(u,h))),a=Gn.triangulateShape(r,o),c=[r,...o].flat();for(let l of a)for(let u of l){let{x:h,y:f}=c[u];n.push(h,tw,f),t.push(i.r,i.g,i.b,s)}return a.length>0}function ow(n,t,e){let{cells:i,cellSize:s}=e??{};if(!Array.isArray(i)||!Number.isFinite(s)||s<=0||s>200)return null;let r=i.slice(0,QS).filter(h=>[h?.x,h?.y,h?.hits].every(Number.isFinite)&&h.hits>0&&t.contains(h.x,h.y));if(!r.length)return null;let o=r.reduce((h,{hits:f})=>Math.max(h,f),0),a=[],c=[],l=0;for(let h of r){let f=Math.sqrt(h.hits/o),d=f<.55?ew.clone().lerp(Qm,f/.55):Qm.clone().lerp(nw,(f-.55)/.45),g=!1;for(let y of tg.default.intersection([sw(h,s)],n))g=rw(a,c,y,d,.36+f*.42)||g;g&&l++}if(!l)return null;let u=new fe;return u.setAttribute("position",new jt(a,3)),u.setAttribute("color",new jt(c,4)),{geometry:u,drawn:l}}function eg(n){let t=new se;t.name="Roomcraft radar heat map";let e=Sa(n),i=new Oe({vertexColors:!0,side:tn,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s;function r(c){s&&(t.remove(s),s.geometry.dispose(),s=void 0);let l=ow(n,e,c);return l?(s=new ue(l.geometry,i),t.add(s),l.drawn):0}function o(){r(null),i.dispose()}function a(c){i.opacity=Number.isFinite(c)?oe.clamp(c,.25,1):1}return{root:t,setHistory:r,setOpacity:a,dispose:o}}var aw=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),cw=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),ng={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},Jr=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"],sunrise:["#a9aa9e","#71aaa8","#536f9b","#d9dce8","#e5b7bc","#ffe0ae"],sunset:["#b3a08f","#7296a1","#635879","#f0cbc4","#d39a9b","#ffae80"]}).map(([n,t])=>[n,t.map(e=>new Yt(e))])),mf={sunrise:["#efad92","#8baac6"].map(n=>new Yt(n)),sunset:["#e58968","#907fa6"].map(n=>new Yt(n))},ig=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:wa,smoothstep:lw}=oe;function uw({shoreline:n,farZ:t,focusX:e}){let i=[],s=[],r=[];for(let[a,{x:c,z:l}]of n.entries()){let u=a*2;i.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new fe;return o.setAttribute("position",new jt(i,3)),o.setAttribute("uv",new jt(s,2)),o.setIndex(r),o}var hw=`
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
`,fw=`
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
`;function sg({y:n,farZ:t,shoreline:e,focusX:i}){let s={...Zi.clone(Wt.fog),waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},solarBand:{value:0},moon:{value:0},moonLight:{value:new Nt(0,1)},bodyPosition:{value:new Nt},solarPosition:{value:new Nt},solarWarmTint:{value:mf.sunrise[0]},solarCoolTint:{value:mf.sunrise[1]}};for(let[c,l]of ig.entries())s[l]={value:Jr.clear[c].clone()};let r=new ze({uniforms:s,vertexShader:hw,fragmentShader:fw,toneMapped:!1,fog:!0}),o=new ue(uw({shoreline:e,farZ:t,focusX:i}),r);o.name="Ocean and shore wash",o.position.set(i,n,t);function a(c,l={}){let{night:u,daylightKnown:h,condition:f,moonPhase:d,moonAzimuth:g,moonElevation:y,skyProgress:p,windSpeed:m,windBearing:x,reduceMotion:v,reflections:b=!0}=l,_=l.solar??Ji(l),S=aw.has(f),R=Jr[S?"overcast":"clear"],M=_.phase==="sunset"||_.rising===!1?"sunset":"sunrise",C=Math.max(_.twilight,_.lowSun);for(let[Et,_t]of ig.entries())s[_t].value.lerpColors(Jr.night[Et],R[Et],_.daylight).lerp(Jr[M][Et],C*(S?.24:.46));let F=Object.hasOwn(ng,d)?ng[d]:void 0,I=h||Number.isFinite(l.sunElevation)||f==="sunny",D=I?_.disc*(.97-_.cloud*.42):0,H=(u||_.phase==="night")&&F!==void 0?.93*(1-lw(_.elevation,-12,-3)):0,N=H>D;N?s.bodyTint.value.copy(Jr.night[5]):s.bodyTint.value.lerp(Jr[M][5],C*.52);let k=cw.has(f),B=Number.isFinite(c)&&!v?c:0;s.waterTime.value=B,s.rain.value=k?1:0,s.fog.value=f==="fog"?1:0;let W=Number.isFinite(m)?wa(m/18,0,1):0,it=Number.isFinite(x)?-Math.sin(oe.degToRad(x)):1;s.reflectedWind.value=Math.sin(B*.09)*it*W*24;let j=k||f==="windy"||f==="windy-variant";s.roughness.value=1+Math.max(j?.65:0,W*.65),s.cloudCover.value=b?S?.94:f==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!b||S?0:Math.max(H,D),s.solarBand.value=b&&I?C*(S?.3:1-_.cloud*.48):0,[s.solarWarmTint.value,s.solarCoolTint.value]=mf[M],s.moon.value=N?1:0,s.solarPosition.value.set(_.east*154,38+wa(_.elevation/75,0,1)*20);let et=Number.isFinite(p)?wa(p,0,1):void 0,at=et===void 0?void 0:oe.lerp(-145,145,et);if(N){s.moonLight.value.set(Math.sin(F),Math.cos(F));let Et=at??(Number.isFinite(g)?wa((g-180)*1.08,-180,180):46+Math.sin(B*.014)*27),_t=Number.isFinite(y)?32+wa(y/75,0,1)*24:42;s.bodyPosition.value.set(Et,_t)}else s.bodyPosition.value.copy(s.solarPosition.value)}return{mesh:o,update:a}}var ru=26,dw=92,Qr=4,pw=18,mw=188;function og(n){let{minZ:t,maxZ:e}=n.houseBounds,i=t-(e-t)*.11-46,s=n.editableStructure?1/0:t-146,r=Math.min(n.bounds.minZ,i,s)-pw,o=r-2*ru-dw;return{nearZ:r,farZ:o,sceneryMinZ:o-mw}}function ag(n,{nearZ:t,farZ:e},i,s,r){let o=e+ru,a=t-ru,c=(o+a)/2,l=r-s/2,u=r+s/2,h=(f,d,g,y)=>n.box(s,g,d-f,y,r,i+g/2,(f+d)/2);h(o,a,1.2,"#73767c"),h(o,o+3.4,1.4,"#656b71"),h(a-3.4,a,1.4,"#656b71");for(let[f,d,g,y]of[[e,o,o-Qr,e],[a,t,a,a+Qr]]){h(f,d,5,"#c0b6a7"),h(g,g+Qr,6.2,"#d0c3b0");let p=ru-Qr;for(let m=l+36;m<u;m+=72)n.box(1.15,.18,p,"#a69c91",m,i+5.04,y+p/2)}for(let f=l+36;f+17<u;f+=72)n.box(34,.2,2.8,"#e9ce91",f,i+1.24,c);return{centerX:r,width:s,surfaceY:i+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+Qr,maxZ:t,surfaceY:i+5},{minZ:e,maxZ:o-Qr,surfaceY:i+5}]}}function gf(n,t,e,i){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new fe;o.setAttribute("position",new jt(s,3)),o.setIndex(r),o.computeVertexNormals(),n.add(o,i,0,0,0)}function gw(n,t,e,i,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new Lo(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,h=Math.sin(r+c*1.62)*s*.21;n.add(l,c%2?a:o,t+u,i+s*.46,e+h)}}function yw(n,t,e,i,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*i,u=e+o,h=s+.1;n.ball(a,c,13,"#d7bd94",l,h,u),n.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,h+.5,u+4);for(let[f,d,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])gw(n,l+a*f,u+d,h+c*.75,g,f*7)}}function xw(n,t,e,i){let o=e-13.5+.6;n.box(19,2.5,27,"#ac987e",t,i+1.28,o);for(let a=0;a<7;a++)n.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,i+2.6,e-1.25-a*3.8);for(let a of[-1,1])n.box(.9,.8,27+.6,"#b4a086",t+a*19/2,i+2.8,o)}function bw(n,t,e,i,s,r,o){n.box(1.4,16.6,1.4,"#b5a08a",t,i+16.6/2,e),n.ball(1.6,.95,1.6,r,t,i+16.6+3.6,e);for(let u=0;u<8;u++){let h=(p,m,x)=>[Math.cos(p)*m,x,Math.sin(p)*m],f=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],h(f,16*.54,16.6+2.1),h(d,16*.54,16.6+2.1),h(f,16,16.6-.55),h(d,16,16.6-.55),h(f,16,16.6-2),h(d,16,16.6-2)],y=new fe;y.setAttribute("position",new jt(g.flat(),3)),y.setAttribute("uv",new jt(g.flatMap(([p,,m])=>[p/32+.5,m/32+.5]),2)),y.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),y.computeVertexNormals(),n.add(y,u%2?r:s,t,i,e)}}function rg(n,t,e,i,s,r){let o=(h,f)=>[t+h*Math.cos(r)+f*Math.sin(r),e-h*Math.sin(r)+f*Math.cos(r)],a=(h,f,d,g,y,p,m)=>{let[x,v]=o(y,m);n.box(h,f,d,g,x,i+p,v,r)};for(let h of[-1,1])a(1.1,1.2,18,"#988679",h*4.5,2.15,0),a(1,2.1,1.2,"#988679",h*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Ae(8.4,.85,8);u.rotateX(-Math.PI/6),n.add(u,s,c,i+4.4,l,r)}function vw(n,t,e,i,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*i,h=e+o;bw(n,u,h,s,a,c,l),rg(n,u-13,h-15,s,c,l-.17),rg(n,u+14,h-14,s,a,l+.12),n.box(8.6,.22,15,"#e9cda5",u+23,s+.99,h+7,l*2)}}function cg(n,{farZ:t},e,{minX:i,maxX:s},r=6200,o=(i+s)/2){let a=(i+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,m)=>{let x=l+r*m/c,v=x-a,b=t-108+14*Math.cos((v+110)*.006)+7*Math.sin((v-90)*.013);return{x,z:b}}),h=u.map(({x:p})=>[p,e+.28,t+.4]),f=u.map(({x:p,z:m})=>[p,e+.71,m+22]),d=u.map(({x:p,z:m})=>[p,e+.44,m+6]),g=u.map(({x:p,z:m})=>[p,e+.17,m-31]);gf(n,h,f,"#e3cba0"),gf(n,f,d,"#dbbd92"),gf(n,d,g,"#c8a47e");let y=Math.max(940,s-i);yw(n,a,t,y,e);for(let p of[-1,1])xw(n,a+p*y*.245,t,e);return vw(n,a,t,y,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Bi}=oe,ne={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},lg=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],_w=new Map(lg.map(n=>[n.id,n])),ug=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],Mw=new Map(ug.map(n=>[n.id,n])),hg=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],fg=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],Sw=new Map(hg.map(n=>[n.id,n])),ww=new Map(fg.map(n=>[n.id,n])),dg=({id:n,label:t,length:e,width:i,detail:s})=>Object.freeze({id:n,label:t,length:e,width:s==="food"?i+2:i}),ou=Object.freeze([...lg,...ug,...hg].map(dg)),au=Object.freeze(fg.map(dg));function Ew(n){let t=new fe;return t.setAttribute("position",new jt(n.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function cu(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Yt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r}),e=qn(t);for(let i of t)i.dispose();return e.computeBoundingBox(),e}function Ea(n,t){let e=n.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),i=[],s=(n.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;i.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)i.push(0,o,o+1,s,s+o+1,s+o);let r=new fe;return r.setAttribute("position",new jt(e,3)),r.setIndex(i),r.computeVertexNormals(),r}function Tw(n){let t=[],e=(B,W)=>t.push([B,W]),i=(B,W,it,j,et,at,Et)=>e(new Ae(j,et,at).translate(B,W,it),Et),s=(B,W)=>e(Ew(B),W),r=(B,W,it,j,et,at,Et)=>{let _t=[[W,j,at],[it,j,at],[it,et,at],[W,et,at]];s(B>0?_t:_t.reverse(),Et)},{width:o,tire:a,body:c,roof:l,detail:u}=n,h=n.length-2.8,f=h*.5,d=o*.435,g=a*.78,y=8.25+a*.52,p=y-(u==="sports"||u==="convertible"?1.8:.75);e(Ea([[-f,d*.76,y-1.6],[-f+2.4,d*.93,y-.2],[-f+6.2,d,y],[f-6.2,d,y-.24],[f-2.4,d*.92,p+.35],[f,d*.75,p]],g),c);let m=g+.95;for(let B of[-1,1])i(B*(f-.22),m,0,1.42,1.58,d*1.57,ne.bumper),i(B*(f+.05),m+.82,0,1.08,.95,4.5,ne.plate);i(f+.1,p-2.8,0,.65,1.2,d*.64,ne.grille),i(f+.38,p-2.62,0,.24,.35,d*.55,ne.rim);for(let B of[-1,1]){i(0,g+1.3,B*(d+.04),h*.53,.9,.34,ne.bumper);for(let W of[-.323,.323]){let it=h*W,j=B*(d+.05);e(new qe(a,a,2.9,10).rotateX(Math.PI/2).translate(it,a,j),ne.tire),e(new Rn(a*.57,8).rotateY(B<0?Math.PI:0).translate(it,a,j+B*1.46),ne.rim),e(new Rn(a*.28,6).rotateY(B<0?Math.PI:0).translate(it,a,j+B*1.48),ne.hub)}}let[x,v,b,_]=n.cabin.map(B=>h*B),S=y-.35,R=n.height-1.25,M=d*.88,C=M*(n.windows>2||u==="camper"||u==="delivery"?.94:.79),F=B=>Bi(M,C,B),I=B=>Bi(S,R,B),D=(B,W,it,j=0)=>[Bi(Bi(x,v,W),Bi(_,b,W),B),I(W),it*(F(W)+j)];function H(B,W,it,j,et=.2,at=.85,Et=.08){let _t=[D(W,et,B,Et),D(it,et,B,Et),D(it,at,B,Et),D(W,at,B,Et)];s(B>0?_t:_t.reverse(),j)}function N(B,W,it,j,et,at,Et=0){let[_t,St]=B>0?[_,b]:[x,v],Pt=(J,ft)=>[Bi(_t,St,ft)+B*Et,I(ft),J*F(ft)],Lt=[Pt(it,j),Pt(W,j),Pt(W,et),Pt(it,et)];s(B>0?Lt:Lt.reverse(),at)}function k(B){N(B,-.81,.81,.16,.88,ne.window,.08),N(B,-.72,.73,.23,.82,ne.glass,.13),N(B,-.67,.64,.67,.75,ne.glassGlow,.18)}if(u==="convertible"){N(1,-.88,.88,0,1,l,.08),k(1),i((x+b)/2,S+.2,0,(b-x)*.96,1.05,M*1.92,ne.window);for(let B of[-1,1])i(x+5.7,S+2.35,B*M*.43,7.7,2.5,5.6,ne.upholstery),i(x+2.2,S+3.7,B*M*.43,2,5.2,6,ne.tan)}else{for(let et of[-1,1])H(et,0,1,c,0,1,0);N(1,-1,1,0,1,c),N(-1,-1,1,0,1,c),k(1),["delivery","cargo","food"].includes(u)||k(-1);let B=(b+v)/2,W=b-v+.38;i(B,R+.34,0,W,.84,C*2.05,l),u==="bubble"&&i(B,R+.79,0,W*.88,.52,C*1.67,l),u==="sunroof"&&(i(B,R+.82,0,W*.48,.24,C*1.12,ne.window),i(B-W*.12,R+.98,0,.65,.18,C,ne.glassGlow));let it=n.windows??2,j=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:it},(et,at)=>[(at+.16)/it,(at+.86)/it]);for(let et of[-1,1])for(let[at,Et]of j)H(et,at,Et,ne.window),H(et,at+.011,Et-.009,ne.glass,.29,.79,.13),H(et,at+.023,Et-.025,ne.glassGlow,.64,.72,.18)}for(let B of[-1,1])i(_-3,S+1.05,B*(d+.2),3.2,1.8,1.75,l),i(Bi(x,_,.36),y-1.45,B*(d+.1),2.8,.46,.24,ne.rim);return{add:e,box:i,sideFace:r,glazingSide:H,bodyParts:t,recipe:n,length:h,outer:d,shoulder:y,nose:f,frontY:p}}function Aw(n,t){let{length:e,outer:i,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=n,l=-e*.454,u=e*.105,h=r.height-.4,f=u-l;o(Ea([[l,i*.93,h-.7],[l+1.6,i,h],[u-1.6,i,h],[u,i*.93,h-.7]],s-.8),t),a((l+u)/2,h+.1,0,f-3.5,.28,i*1.6,r.roof);for(let d of[-1,1]){let g=d*(i+.1);c(d,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+h)/2,i*d,.26,h-s-3.1,.4,ne.rim);return{rear:l,front:u,top:h}}function Rw(n){let{recipe:t,box:e,sideFace:i,glazingSide:s,length:r,outer:o,shoulder:a}=n,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let h=l+.5;for(let f of[-1,1])e(r*-.18,h,f*o*.51,r*.3,.85,.83,ne.roofRail);if(c==="trail"){for(let f of[-.29,-.07])e(r*f,h+.55,0,1.05,.75,o*1.18,ne.roofRail);e(r*-.18,h+1.1,0,r*.17,1.65,o*.78,ne.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,ne.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let h=r*-.25;e(h,a+.22,0,r*.35,.42,o*1.43,ne.wood);for(let f of[-1,1])e(h,a+.93,f*o*.84,r*.34,2.28,1.72,u),e(h,a+.48,f*o*.38,r*.33,.25,.4,ne.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,ne.tan)}else if(c==="cargo"||c==="food"){let{rear:h,front:f}=Aw(n,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;i(1,h+5.5,f-4.5,d,d+8.4,o+.19,ne.window),e((h+f)/2,d,o+.75,f-h-9.5,.75,2.65,ne.wood);for(let g=0;g<7;g++)e(Bi(h+6,f-4.5,g/6),d+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let h of[-1,1])c==="delivery"?(s(h,.1,.61,"#e5d6e4",.28,.65,.12),s(h,.18,.54,"#b39cc2",.43,.49,.18)):(s(h,.09,.61,"#456575",.29,.68,.12),s(h,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,h*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let h of[-1,1])e(0,a-1.05,h*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,ne.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function yf(n,t,e){return[{role:"body",geometry:cu(n),material:new Ye({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Ye({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Ye({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function Cw({length:n,width:t,paint:e,roof:i,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(p,m)=>a.push([p,m]),l=(p,m,x,v,b,_,S)=>c(new Ae(v,b,_).translate(p,m,x),S),u=-n/2+1.3,h=n/2-1.3,f=14,d=t/2-1.15,g=d-.7;c(Ea([[u,d-1.2,32],[u+2,d,34],[f-2,d,34],[f,d-1,32]],10.2),s),c(Ea([[17,g-1,18],[21,g,22],[45,g,22],[h-4,g-1,16],[h,g-2,14]],7),e),c(Ea([[27,g-1,28],[31,g-.7,32],[42,g-.7,31],[47,g-1.6,26]],16),i),l(48,23.6,0,.9,6.8,g*1.5,ne.window),l(48.55,25.8,0,.22,.8,g*1.4,ne.glassGlow),l(h+.27,11,0,.56,5.9,9,ne.grille),l(h+.61,8.6,0,.55,1.12,g*1.55,ne.rim),l(u-.32,10.6,0,.62,1.2,2*d-3,ne.bumper),l(f+2.8,9.1,0,10,1.5,12,ne.bumper);for(let p of[-1,1]){l((u+f)/2,15,p*d,f-u-5,2.1,.39,r),l((u+f)/2,26,p*(d+.06),f-u-10,.32,.3,"#f6edd3"),l(40,25,p*(g-.5),7.8,5.25,.32,ne.window),l(47,21,p*(g+.2),2.1,2.1,1.5,e),l(35,9.5,p*(g+.25),7.2,.85,1.12,ne.rim),l(u-.1,22,p*d*.41,.48,13.2,.51,ne.rim);for(let m of[u+9,u+19,23,32,h-8.2]){let x=p*(d-1.42);c(new qe(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(m,4.35,x),ne.tire),c(new Rn(2.47,6).rotateY(p<0?Math.PI:0).translate(m,4.35,x+p*1.41),ne.hub)}}o&&(l(f+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(f+2.55,27.8,0,.2,3.9,6.4,r));let y=(p,m)=>cu([-1,1].map(x=>[new Ae(.42,1.3,3.1).translate(p,m,x*(d-3.7)),"#ffffff"]));return yf(a,y(h+.38,12.25),y(u-.54,12.4))}function pg(n,t){let{style:e,length:i,paint:s,trim:r,jacket:o,helmet:a}=n,c=[],l=(St,Pt)=>c.push([St,Pt]),u=(St,Pt,Lt)=>l(new Ae(...Lt).translate(...Pt),St),h=(St,Pt,Lt,J=0)=>l(new Re(1,8,5).scale(...Lt).rotateZ(J).translate(...Pt),St);function f(St,Pt,Lt,J){let ft=new V(...Pt),Ct=new V(...Lt),Xt=new V().subVectors(Ct,ft),Dt=new mn().setFromUnitVectors(new V(0,1,0),Xt.clone().normalize());l(new qe(J,J,Xt.length(),5,1,!0).applyQuaternion(Dt).translate(...ft.lerp(Ct,.5).toArray()),St)}let d=t?1:.75,g=i*(t?.132:.15),y=-i*(e==="longtail"?.309:.326),p=i*.326,m=[i*-.024,g+d*1.25,0],x=[i*(e==="cruiser"?-.16:-.115),i*(e==="trail"?.4:e==="cruiser"?.327:.369),0],v=e==="road"||e==="racer",b=[i*(v?.234:.204),x[1]+(v?.5:3.7)*d,0],_=d*(t?2.2:1.36),S=d*(t?1.04:.65),R=d*(t?.9:.65),M=e!=="road";for(let St of[y,p]){l(new Pn(g-S,S,4,12).translate(St,g,0),ne.tire),M&&l(new Pn(g+d*.37,d*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(St,g,0),s);for(let Pt of[0,Math.PI/3,Math.PI*2/3]){let Lt=g-S*1.35,J=Math.cos(Pt)*Lt,ft=Math.sin(Pt)*Lt;f(ne.rim,[St-J,g-ft,0],[St+J,g+ft,0],d*.23)}l(new qe(d*1.05,d*1.05,_,8).rotateX(Math.PI/2).translate(St,g,0),ne.hub)}let C=[y,g,0];f(s,C,x,R),f(s,C,m,R),f(s,x,m,R),f(s,m,b,R);let F=e==="basket"||e==="scooter"?[b[0]*.7,m[1]+d*2.65,0]:b;f(s,x,F,R),F!==b&&f(s,F,b,R);for(let St of[-1,1])f(ne.rim,[b[0],b[1]-d*2.3,St*_*.38],[p,g,St*_*.45],R*.7);u(ne.bumper,[x[0]-.25,x[1]+d*.4,0],[d*(t?7.1:4.8),d*1.08,d*3.15]);let I=d*(t?5.05:4.75),D=b[0]+(v?d*1.85:-d*.8),H=b[1]+(v?-d*.6:d*.25);for(let St of[-1,1]){let Pt=[D,H,St*I];f(ne.rim,b,Pt,d*.47),f(ne.tire,[D+d*.6,H,St*I*.82],Pt,d*.63)}if(t){u(ne.bumper,[m[0]+.4,m[1]+1.05,0],[6.4,4.9,5.4]);let St=e==="scooter"?[b[0]+2.1,x[1]-2.3,0]:[x[0]+5.5,x[1]+.7,0],Pt=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(h(s,St,Pt,e==="scooter"?.34:-.18),u(r,[St[0]+.8,St[1]+.15,Pt[2]*.87],[Pt[0]*1.18,1,.8]),u(r,[St[0]+.8,St[1]+.15,-Pt[2]*.87],[Pt[0]*1.18,1,.8]),e==="racer")h(ne.window,[b[0]+2,b[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[y+1.75,x[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,g*2.1+1.05,0],[7.25,.82,3.65]),u(ne.rim,[y+1.55,x[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")h(s,[y+3.7,x[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[m[0],g+1.1,0],[8.2,1.22,6.2]);else for(let Lt of[-1,1])f(ne.rim,[y-2.2,g+2.1,Lt*2.8],[m[0]+4.5,g+.45,Lt*3.25],.79)}else{let St=e==="longtail"?[y+1.1,g*2.05+1.8,0]:[p-.98,b[1]-1.55,0];e==="basket"||e==="longtail"?(u(ne.wood,St,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[St[0],St[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(ne.tan,[St[0],St[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[y+1.65,g+1.05,2],[4.2,3.4,1.85]),u(ne.roofRail,[y+1.6,g*2.05+.45,0],[5.3,.66,4.3]))}let N=[x[0]-d*.38,x[1]+d*2.05,0],k=[N[0]+(v?3.05:1.05)*d,N[1]+d*3.75,0],B=[k[0]+(v?3.35:.95)*d,k[1]+(v?3.1:4.85)*d,0],W=v?-.57:-.22;h(o,k,[d*2.6,d*4.15,d*3],W),h(a,B,[d*2.94,d*2.68,d*2.62]),h(ne.window,[B[0]+d*2.1,B[1]-d*.4,0],[d*1.08,d*1.05,d*2.2]),(e==="commuter"||e==="trail")&&u(r,[k[0]-d*2.1,k[1]+d*.6,0],[d*1.9,d*3.3,d*3.5]);let it="#4b4e63",j="#e2b491";for(let St of[-1,1]){let Pt=[k[0]+d*1.1,k[1]+d*1.65,St*d*2.43],Lt=[Bi(Pt[0],D,.48),Bi(Pt[1],H,.52)-d,St*d*3.48],J=[D,H,St*I*.93];f(o,Pt,Lt,d*.95),f(o,Lt,J,d*.76),u(j,J,[d*1.5,d*1.11,d*1.09]);let ft=t?0:St*d*1.35,Ct=[N[0]+d*(t?4.3:4.9)+ft,N[1]-d*3.5,St*d*2.64],Xt=[m[0]+d*(e==="scooter"?2.65:.35)+ft,m[1]+d*.27-ft,St*d*2.5];f(it,[N[0],N[1],St*d*1.86],Ct,d*1.12),f(it,Ct,Xt,d*.88),u(ne.tire,[Xt[0]+d*.25,Xt[1],Xt[2]],[d*2.15,d*.95,d*1.42])}let et=d*(t?1.34:.84),at=[p+d*.58,g*(t?2.3:2.18),0],Et=[y-d*.56,g*(t?2.18:2.02),0];f(ne.bumper,[p,g+d*1.5,0],at,d*.58),f(ne.bumper,[y,g*1.6,0],Et,d*.46);let _t=St=>cu([[new Re(et,6,4).scale(.53,.78,1).translate(...St),"#ffffff"]]);return yf(c,_t(at),_t(Et))}function mg(n){let t=Sw.get(n);if(t)return pg(t,!0);let e=Mw.get(n);if(e)return Cw(e);let i=_w.get(n);if(!i)return null;let s=Tw(i);Rw(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(h,f)=>cu([-1,1].map(d=>[new Ae(1.48,1.8,r*.35).translate(h*(o+.19),f,d*r*.63),"#ffffff"]));return yf(l,u(1,a-1.75),u(-1,c-2.65))}function gg(n){let t=ww.get(n);return t?pg(t,!1):null}var yg=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),ts={stride:4,crossingSeconds:3.2},Iw=242,xg=12,bg=.38,Sg=new Map(ou.map(n=>[n.id,n])),vg=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(n=>Sg.get(n)),Pw=new Yt("#fff1cf"),Lw=new Yt("#db514c");function Nw(n){n.computeBoundingBox();let t=n.boundingBox;if(t.max.z-t.min.z<5)return[t.getCenter(new V)];let e=(t.min.z+t.max.z)/2,i=[new Ue,new Ue],s=new V,r=n.attributes.position;for(let o=0;o<r.count;o++)s.fromBufferAttribute(r,o),i[+(s.z>=e)].expandByPoint(s);return i.map(o=>o.getCenter(new V))}var Dw=`
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      opacity *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      opacity *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
`;function _g(n){let t={...Zi.clone(Wt.fog),lightStrength:{value:1}};return new ze({fog:!0,uniforms:t,transparent:!0,depthWrite:!1,blending:Yi,toneMapped:!1,vertexShader:`
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
        ${Dw}
        gl_FragColor = vec4(color, clamp(opacity * lightStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `})}function Fw({index:n,lane:t}){let e=Math.floor(n/ts.stride),i=n%ts.stride;return vg[(2*(e+i)+t)%vg.length]}function Mg({centerX:n,width:t,lanes:e}){let i=t-60,s=n-i/2,r=Math.max(1,xg*Math.round(i/(xg*Iw))),o=i/r,a=e.map((y,p)=>Array.from({length:r},(m,x)=>({z:y,lane:p,index:x,x:s,offset:o*(x+.25+(r===1&&p?.5:0))}))),c=0,l,u,h,f=!1,d=[];function g(y,p,m,x=!1){let v=p?.severity==="ambient"?ts:yg.get(p?.severity),b=Number.isFinite(l)&&Number.isFinite(y)?oe.clamp(y-l,0,.25):0;if(l=y,v!==u){f=!!(u&&v&&(v===ts||u===ts));let R=Math.min(r,v?.stride??1),M=v===ts?Math.floor(R/2):1;d=v?a.flatMap((C,F)=>C.filter(({index:I})=>I%R===F*M%R)):[],u=v}if(!v)return h=void 0,d;let _=p.speedFactor,S=v===ts?o*Math.min(r,ts.stride)/(2*ts.crossingSeconds):Number.isFinite(_)&&_>0?yg.get("clear").speed*oe.clamp(_,.22,1):v.speed;if(x)c=!m&&Number.isFinite(y)?Math.max(0,y)*S:0;else if(!m)if(f&&h!==void 0){let R=Math.exp(-b/bg),M=h-S;c+=b*S+M*bg*(1-R),h=S+M*R,f=Math.abs(h-S)>.1}else c+=b*S,h=S;c%=i;for(let R of d){let M=(R.offset+c)%i;R.x=s+(R.lane?i-M:M)}return d}return{capacity:r*e.length,update:g}}function wg(n){let t=new se,e=Mg(n),i,s=new Map;function r(x,v,b=e.capacity){let _=new ii(x,v,b);return _.count=0,_.frustumCulled=!1,_.instanceMatrix.setUsage(Bn),_}let o=r(new Rn(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new Oe({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1})),a=r(new In(1,2).rotateX(-Math.PI/2).translate(.5,.16,0),_g(!1),e.capacity*2);a.name="road-headlight-beams";let c=r(new In(1,1),_g(!0),e.capacity*4);c.name="road-lamp-halos",a.visible=c.visible=!1,t.add(o,a,c);let l=new Xe,u=Math.abs(n.lanes[0]-n.lanes[1])/2,h,f=1;t.visible=!1;function d(x,v){for(let{mesh:b,role:_}of x.layers)_==="headlamp"&&(b.material.emissiveIntensity=v?2.45*f:.26),_==="taillamp"&&(b.material.emissiveIntensity=v?1.13*f:.28)}function g(x){if(s.has(x.id))return s.get(x.id);let v=new se;v.name=`vehicle-${x.id}`;let b=mg(x.id).map(({geometry:R,material:M,role:C})=>({mesh:r(R,M),role:C}));v.add(...b.map(({mesh:R})=>R)),t.add(v);let _=R=>Nw(b.find(M=>M.role===R).mesh.geometry),S={group:v,layers:b,headlamps:_("headlamp"),taillamps:_("taillamp"),count:0};return d(S,h),s.set(x.id,S),S}function y(x,v,b,_,S){let R=S?12.4:8.6;l.position.set(v.x+b*(_.x+(S?1.1:-1)),n.surfaceY+_.y+.8,v.z+b*_.z),l.scale.set(R,R,1),l.updateMatrix(),c.setMatrixAt(x,l.matrix),c.setColorAt(x,S?Pw:Lw)}function p(x,v,{reduceMotion:b=!1,night:_=!1,transientTelemetry:S=!1,headlightBrightness:R=1}={}){S&&(i??=Mg(n));let C=(S?i:e).update(x,v,b,S);if(t.visible=C.length>0,a.visible=c.visible=_&&t.visible,a.count=c.count=0,!t.visible)return;let F=Number.isFinite(R)?oe.clamp(R,.35,1.6):1;if(_!==h||F!==f){h=_,f=F,a.material.uniforms.lightStrength.value=F,c.material.uniforms.lightStrength.value=F;for(let N of s.values())d(N,_)}for(let N of s.values())N.count=0;let I=Sg.get(v?.vehicleStyle),D=0,H=0;for(let[N,k]of C.entries()){let B=I??Fw(k),W=g(B);l.position.set(k.x,n.surfaceY,k.z),l.rotation.y=k.lane?Math.PI:0,l.scale.set(1,1,1),l.updateMatrix();for(let{mesh:et}of W.layers)et.setMatrixAt(W.count,l.matrix);if(W.count++,l.scale.set(B.length*.55,1,B.width*.62),l.updateMatrix(),o.setMatrixAt(N,l.matrix),!_)continue;let it=k.lane?-1:1,j=oe.clamp(B.length*1.1,53,86);for(let et of W.headlamps){let at=Math.max(5,Math.min(16,u-Math.abs(et.z)-1));l.position.set(k.x+it*(et.x+1),n.surfaceY,k.z+it*et.z),l.scale.set(j,1,at),l.updateMatrix(),a.setMatrixAt(D++,l.matrix),y(H++,k,it,et,!0)}for(let et of W.taillamps)y(H++,k,it,et,!1)}_&&(a.count=D,c.count=H,a.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0),o.count=C.length,o.instanceMatrix.needsUpdate=!0;for(let{group:N,layers:k,count:B}of s.values()){N.visible=B>0;for(let{mesh:W}of k)W.count=B,B&&(W.instanceMatrix.needsUpdate=!0)}}function m(){t.traverse(x=>{x.isInstancedMesh&&(x.dispose(),x.geometry.dispose(),x.material.dispose())}),t.clear()}return{root:t,update:p,dispose:m}}var Eg=22,Tg=63,Uw=525,Ow=1100,kw=22,Bw=75,xf=75,zw=105,Hw=54,Gw=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],Ag=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],Vw=(n,t)=>(n%t+t)%t;function Ww(n){let t=n.width-Bw*2,e=[],i=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(n.centerX))return{walkers:e,cyclists:i,sample:()=>({walkers:e,cyclists:i})};let s=n.centerX-t/2,r=Math.max(1,Math.round(t/Uw)),o=Math.max(1,Math.round(t/Ow)),a=t/r,c=t/o;for(let[p,m]of(n.sidewalks??[]).entries()){let{minZ:x,maxZ:v,surfaceY:b}=m,_=v-x;if(![x,v,b].every(Number.isFinite)||_<=0)continue;let S=p%2?-1:1,R=Math.min(1,_/kw),M=x+_*(S>0?.25:.75),C=x+_*(S>0?.76:.24);for(let F=0;F<r;F++){let I=Ag[(F+p*2)%Ag.length],D=t/2+(F+p*.42)*a-35,H=`sidewalk-walk-${p}-${F}`;for(let[N,[k,B]]of I.entries())e.push({id:`${H}-${N}`,groupId:H,style:k,child:B<.8,offset:D-S*13.2*N,scale:R*B,direction:S,y:b,z:M+S*.62*(N%2),phase:F*.91+p*.8+N*2.1})}for(let F=0;F<o;F++)i.push({id:`sidewalk-bike-${p}-${F}`,style:au[(F+p*2)%au.length],offset:t/2+(F+p*.65)*c,scale:R,direction:S,y:b,z:C,phase:F*1.7+p})}let l=t/Eg,u=t/Tg,h=l+xf+u+zw,f=Math.max(0,l/2-Hw),d=[-1,1].map(p=>e.find(m=>m.direction===p&&!m.child)).filter(Boolean),g=[-1,1].map(p=>i.find(m=>m.direction===p)).filter(Boolean);function y(p=0,m=!1,{night:x=!1,activity:v}={}){let b=Number.isFinite(p)?Math.max(0,p):0;if(v==="overnight")return{walkers:[],cyclists:[]};if(x||v==="evening"){if(m)return{walkers:[],cyclists:[]};let S=Math.floor((b+f)/h),R=(b+f)%h,M=R>=l+xf,C=M?R-l-xf:R,F=M?g:d,I=M?u:l;if(C>=I||!F.length)return{walkers:[],cyclists:[]};let D=F[(S+1)%F.length],H=C/I*t,N=s+(D.direction>0?H:t-H),k={...D,x:N,gait:C*(M?7:10)+D.phase};return M?{walkers:[],cyclists:[k]}:{walkers:[k],cyclists:[]}}let _=(S,R,M)=>S.map(C=>({...C,x:s+Vw(C.offset+C.direction*R*b,t),gait:m?0:b*M+C.phase}));return{walkers:_(e,Eg,10),cyclists:_(i,Tg,7)}}return{walkers:e,cyclists:i,sample:y}}var lu={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function Rg(n,t,e){let{shirt:i,trim:s,pants:r,skin:o,hair:a,accessory:c}=Gw[n.style],l=t?0:Math.sin(n.gait),u=Math.abs(l)*.69,h=f=>f+u;e(i,0,h(10.45),0,2.95,4.3,3.4),e(r,-.1,h(7.25),0,2.6,1.7,3.04),e(s,1.1,h(13.35),0,2.14,.69,2.55),e(s,2.68,h(10.4),-.7,.41,.86,1);for(let f of[-1,1]){let d=l*f,g=d*3,y=Math.max(0,d)*1.35;e(r,g*.45,4.5+y*.42+u*.32,f*1.51,1.19,3.2,1.25,-.48*d),e(lu.shoe,.77+g,1.11+y,f*1.52,2.17,.99,1.34),e(lu.sole,1.38+g,.49+y,f*1.52,1.64,.43,1.32),e(i,-d*1.07,h(10.16),f*3.15,1.23,2.87,1.15,.38*d),e(o,-d*2.16,h(7.7),f*3.31,.98,1.1,.95)}e(a,-.67,h(17.25),0,4.17,4.32,3.82),e(o,1.05,h(16.63),0,3.76,3.75,3.41),e(a,1.12,h(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,h(16.54),0,.64,.63,.66);for(let f of[-1,1])e(o,.36,h(16.69),f*3.47,1.02,1.07,.64),e(lu.ink,4.18,h(17.25),f*1.35,.34,.47,.43),e(lu.blush,3.76,h(16.21),f*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,h(19.68),.72,1.98,1.89,1.89),e(s,-3.51,h(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(i,-.5,h(20.2),0,3.72,1.97,3.45),e(s,2.72,h(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,h(10.2),0,1.48,2.89,2.63),e(i,-4.01,h(10.65),0,.46,1.28,1.77)),c==="curls")for(let f of[-1,1])e(a,-.9,h(18.52),f*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,h(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,h(21.05),2.67,1.51,.92,.65,-.47))}function Cg(n){let t=Ww(n),e=new se;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let i=new Xe;function s(m,x,v,b){let _=new ii(x,v,b);return _.name=m,_.frustumCulled=!1,_.instanceMatrix.setUsage(Bn),e.add(_),_}let r=new Map,o=0;for(let m of t.walkers)Rg(m,!0,x=>{o++,r.has(x)||r.set(x,new Yt(x))});let a=s("sidewalk-walkers",new Re(1,9,6),new Ye({color:"#fff",roughness:.81}),o),c=s("sidewalk-contact-shadows",new Rn(1,16).rotateX(-Math.PI/2),new Oe({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),l=new Map(au.map(m=>{let x=t.cyclists.filter(v=>v.style.id===m.id).length;return[m.id,x?gg(m.id).map(({geometry:v,material:b,role:_})=>({role:_,mesh:s(`sidewalk-bicycle-${m.id}-${_}`,v,b,x)})):[]]})),u,h=0,f,d,g;function y(m,{reduceMotion:x=!1,night:v=!1,transientTelemetry:b=!1,activity:_}={}){let S=v||_==="evening"||_==="overnight";if(S!==u){for(let k of l.values())for(let{role:B,mesh:W}of k)B==="headlamp"&&(W.material.emissiveIntensity=S?1.05:.16),B==="taillamp"&&(W.material.emissiveIntensity=S?.75:.18);u=S}if(!b){let k=Number.isFinite(f)&&Number.isFinite(m)?oe.clamp(m-f,0,.25):0;x||(h+=k),f=m}let R=b?x?0:m:h;if(d?.time===R&&d?.reduceMotion===x&&d?.transientTelemetry===b&&d?.night===v&&d?.activity===_)return;d={time:R,reduceMotion:x,transientTelemetry:b,night:v,activity:_};let M=t.sample(R,x,{night:v,activity:_}),C=M.walkers.length===t.walkers.length?"day":M.walkers[0]?.id,F=C!==g;g=C;let I=0,D=0;function H(k,B,W){i.position.set(k.x,k.y+.065,k.z),i.rotation.set(0,0,0),i.scale.set(B*k.scale,1,W*k.scale),i.updateMatrix(),c.setMatrixAt(D++,i.matrix)}for(let k of M.walkers){let{direction:B,scale:W}=k,it=B>0?0:Math.PI;Rg(k,x,(j,et,at,Et,_t,St,Pt,Lt=0)=>{i.position.set(k.x+et*W*B,k.y+at*W,k.z+Et*W*B),i.rotation.set(0,it,Lt),i.scale.set(_t*W,St*W,Pt*W),i.updateMatrix(),F&&a.setColorAt(I,r.get(j)),a.setMatrixAt(I++,i.matrix)}),H(k,5.32,4.1)}let N=new Map;for(let k of M.cyclists){let B=N.get(k.style.id)??0;i.position.set(k.x,k.y,k.z),i.rotation.set(0,k.direction>0?0:Math.PI,0),x||i.rotateX(Math.sin(k.gait)*.028),i.scale.setScalar(k.scale),i.updateMatrix();for(let{mesh:W}of l.get(k.style.id))W.setMatrixAt(B,i.matrix);N.set(k.style.id,B+1),H(k,k.style.length*.52,k.style.width*.58)}for(let[k,B]of l)for(let{mesh:W}of B)W.count=N.get(k)??0,W.instanceMatrix.needsUpdate=!0;a.count=I,c.count=D,F&&a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0}function p(){for(let m of e.children)m.dispose(),m.geometry.dispose(),m.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:p}}var Aa=Math.PI*2,{clamp:uu,lerp:Cs}=oe,Xw=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),qw=188,Yw=490,$w=175,Ta=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],Zw=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function to(n,t){let e=0,i=n.length-1;for(;i-e>1;){let o=e+i>>1;t<n[o].x?i=o:e=o}let s=n[e],r=n[i];return Cs(s.z,r.z,uu((t-s.x)/(r.x-s.x),0,1))}function Pg(n){if(!Array.isArray(n?.shoreline)||n.shoreline.length<2||![n.y,n.farZ,n.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:i}=n,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:Zw.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=uu(i+o.center,s+c,r-c);function u(h){let f=l+Math.cos(h)*a,d=Math.max(e+65,to(t,f)-o.offshore-Math.sin(h)*o.drift);return{x:f,z:d}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*Aa/12);if(to(t,c)-l<o.length/2+8)return!1}return!0})}function jw(n,t=Pg(n)){if(!t.length)return()=>null;let{shoreline:e,farZ:i}=n,s=e[0].x+120,r=e.at(-1).x-120,o=r-s;if(o<120)return()=>null;function a(u,h,f,d){let g=o/h,y=g+f,p=u.flatMap(x=>{let v=t.find(_=>_.id===x);if(!v)return[];let b=[1,-1].map(_=>({...v,start:0,period:g,point(S){let R=v.length*.55,M=uu((_>0?s:r)+_*o*S/Aa,e[0].x+R+8,e.at(-1).x-R-8),C=Math.min(to(e,M),to(e,M-R),to(e,M+R)),F=Math.max(i+65,C-v.offshore-Math.sin(S*2)*v.drift*.55);return{x:M,z:F}}}));for(let _=0;_<=20;_++){let{x:S,z:R}=b[0].point(_*Aa/20);if(to(e,S)-R<v.length/2+8)return[]}return[b]});if(!p.length)return()=>null;let m=d(g,y);return x=>{let v=(Number.isFinite(x)?Math.max(0,x):0)+m,b=v%y;if(b>=g)return null;let _=Math.floor(v/y);return{route:p[_%p.length][_%2],elapsed:b}}}let c=a(["cabin","fishing"],37,qw,u=>Math.max(0,u/2-42)),l=a(["fishing"],29,Yw,(u,h)=>h-$w);return(u,h)=>(h==="overnight"?l:c)(u)}function Lg(n,t,e=.003){let i=n.point(t-e),s=n.point(t+e);return Math.atan2(i.z-s.z,s.x-i.x)}function Kw(n,t,{condition:e}={}){let i=Number.isFinite(t)?t:0,s=n.start+i*Aa/n.period,{x:r,z:o}=n.point(s),a=i*1.24+n.start*3,c=n.id==="jet-ski"?1.9:n.id==="cruise-ship"?.55:1,l=(Xw.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:Lg(n,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function Ng(n,t){let e=new fe;return e.setAttribute("position",new jt(n.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function Dg(n){return Ng(n,n.length===3?[0,1,2]:[0,1,2,0,2,3])}function eo(n,t,e,i,s=1){let r=Ta.flatMap(([l,u])=>{let h=l*n,f=t*u*s/2;return[[h,i,-f*.58],[h,i,f*.58],[h,e-.9,f],[h,e,f*.88],[h,e,-f*.88],[h,e-.9,-f]]}),o=[],a=6,c=(Ta.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let h=(u+1)%a;o.push(l+u,l+u+a,l+h+a,l+u,l+h+a,l+h)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return Ng(r,o)}function Jw(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Yt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Te(c,3)),r}),e=qn(t);for(let i of t)i.dispose();return e}function ke(n,t,e,i,s,r){return new Ae(n,t,e).translate(i,s,r)}function je(n,t,e,i,s,r,o=0){return new Re(1,12,7).scale(n/2,t/2,e/2).rotateZ(o).translate(i,s,r)}function ln(n,t,e){let i=new V(...n),s=new V(...t).sub(i),r=new mn().setFromUnitVectors(new V(0,1,0),s.clone().normalize());return new qe(e,e,s.length(),6).applyQuaternion(r).translate(...i.addScaledVector(s,.5).toArray())}function Ig(n,t,e,i,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let h=Cs(Cs(t[0],e[0],l),i[0],u),f=Cs(Cs(t[1],e[1],l),i[1],u),d=Cs(Cs(t[2],e[2],l),i[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[h,f,d]};for(let l=0;l<o.length-1;l++){let u=o[l],h=o[l+1];for(let f=0;f<a;f++){let d=f/a,g=(f+1)/a,y=[c(d,u),c(g,u),c(g,h)];h<1&&y.push(c(d,h)),n.push([Dg(y),r[l]])}}}function Qw(n){let t=[3,43,0];n.push([ln([3,4,0],t,.9),"#c6a983"],[ln([3,11,0],[-25,10,-13],.6),"#c6a983"],[ln([28,5,0],t,.33),"#d7c5a8"],[ln([-25,5,0],t,.28),"#d7c5a8"],[ke(15,1.9,10,-13,5.4,0),"#a8886e"],[ke(9,1.5,7.5,-13,6.35,0),"#62797b"]),Ig(n,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),Ig(n,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function t2(n){n.push([ke(28,8.5,17,-7,9.1,0),"#f1e5cc"],[ke(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[ke(9,.75,7,-9,15.5,0),"#8aa5a5"],[ke(9,2.2,11,-24,5.9,0),"#bc9472"],[Dg([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[ln([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])n.push([ke(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);n.push([ln([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[ln([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function e2(n){n.push([ke(15,6.1,13,6,7.9,0),"#e4d7ad"],[ke(17,1.4,14,6,11.65,0),"#71968e"],[ke(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[ke(9,3.4,7,-8,6.8,2.6),"#d7a674"],[ke(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[ln([-19,5,-5],[-28,16,-7],.45),"#907459"],[ln([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])n.push([ke(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new Pn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function n2(n){n.push([je(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[je(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[je(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[je(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[je(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[ke(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[ln([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[ln([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[je(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[je(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[je(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[je(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[je(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[je(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;n.push([je(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[je(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[je(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[je(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[ln([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[je(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function i2(n,{length:t,beam:e}){let i="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";n.push([ke(109,6.6,29.1,-4,10.27,0),i],[ke(110.2,1.15,31.3,-4,13.75,0),s],[ke(92,5.1,26.2,-3.5,16.7,0),i],[ke(94.7,1.02,28.1,-3.8,19.42,0),s],[ke(66.2,4.5,21.8,2.8,21.9,0),i],[ke(69.7,.91,24.7,2.9,24.44,0),s],[eo(29,24,26.77,20.72,.86).translate(31,0,0),i],[eo(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[eo(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[ke(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[ke(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[ke(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[ke(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[je(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[ln([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[ln([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[je(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[je(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])n.push([ln([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[ln([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[je(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,h]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let f=-c/2;f<=c/2;f+=h)n.push([ke(3.61,2.05,.26,f,l,a*u),r],[ke(3.6,.33,.3,f,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])n.push([ke(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[je(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[je(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=Ta.findIndex(([p])=>p>=l),[h,f]=Ta[u-1],[d,g]=Ta[u],y=Cs(f,g,(l-h)/(d-h))*e/2;n.push([je(2.1,1.74,.62,c,5,a*(y-.08)),"#78969e"])}n.push([ln([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[ln([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[ln([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function s2(n,t){let{id:e,length:i,beam:s,paint:r,deck:o}=n,a=new se;a.name=n.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[eo(i,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[eo(i,s,c+.82,c-.15,1.018),"#f4e4c9"],[eo(i*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?Qw(u):e==="cabin"?t2(u):e==="jet-ski"?n2(u):e==="cruise-ship"?i2(u,n):e2(u),a.add(new ue(Jw(u),t)),a}var Rs=12,r2=new Yt("#def5e9");function o2(n,t){let i=Rs*3*2,s=new fe,r=new Te(new Float32Array(i*3),3).setUsage(Bn),o=new Float32Array(i*4),a=[];for(let h=0;h<3;h++)for(let f=0;f<Rs;f++){let d=(h*Rs+f)*2,g=f/(Rs-1),y=Math.pow(Math.sin((.1+.9*g)*Math.PI),1.15)*(1-.4*g);for(let p=0;p<2;p++)r2.toArray(o,(d+p)*4),o[(d+p)*4+3]=n.wake*y*(h===1?.22:.76);f<Rs-1&&a.push(d,d+2,d+1,d+1,d+2,d+3)}s.setAttribute("position",r),s.setAttribute("color",new Te(o,4)),s.setIndex(a);let c=new Oe({vertexColors:!0,side:tn,transparent:!0,depthWrite:!1,opacity:.82}),l=new ue(s,c);l.name=n.name+" wake",l.frustumCulled=!1;function u({angle:h},f,d=n){let y=(n.wakeSeconds??(n.id==="cabin"?4.1:6))*Aa/d.period;for(let p=0;p<Rs;p++){let m=p/(Rs-1),x=h-y*m,v=Lg(d,x),{x:b,z:_}=d.point(x),S=Math.cos(v),R=Math.sin(v),M=n.length*.48,C=b-S*M,F=_+R*M;for(let I=0;I<3;I++){let D=(I-1)*n.beam*(.19+m*.62),H=(I===1?1.85:.62)*(1+m*.55);for(let N=0;N<2;N++){let k=D+(N?H:-H);r.setXYZ((I*Rs+p)*2+N,C+R*k,t+.14,F+S*k)}}}r.needsUpdate=!0,c.opacity=f?.44:.82}return{mesh:l,update:u}}function Fg(n){let t=new se;t.name="Coastal boats";let e=new Ye({vertexColors:!0,side:tn,roughness:.73}),i=Pg(n),s=jw(n,i),r=new Re(1.35,8,6),o=["#ff896b","#8bf0b4","#fff1c4"].map(d=>new Oe({color:d,toneMapped:!1})),a=i.map(d=>{let g=s2(d,e),y=o2(d,n.y),p;if(d.id==="cabin"||d.id==="fishing"){p=new se,p.name=`${d.name} running lights`;for(let[m,x]of[[.33,6.5,-.27],[.33,6.5,.27],[-.36,6.7,0]].entries()){let v=new ue(r,o[m]);v.position.set(x[0]*d.length,x[1],x[2]*d.beam),p.add(v)}g.add(p)}return t.add(y.mesh,g),{route:d,hull:g,wake:y,lights:p}}),c=0,l,u=!1;function h(d,{reduceMotion:g=!1,night:y=!1,condition:p,transientTelemetry:m=!1,activity:x}={}){if(u)return;let v=Number.isFinite(d)?d:void 0;!m&&!g&&v!==void 0&&l!==void 0&&(c+=uu(v-l,0,.25)),l=m?void 0:v;let b=m?g?0:v??0:c,_=y||x==="evening"||x==="overnight",S=_&&!g?s(b,x):null;for(let{route:R,hull:M,wake:C,lights:F}of a){let I=!_||S?.route.id===R.id;if(M.visible=I,C.mesh.visible=I,F&&(F.visible=_&&I),!I)continue;let D=S?.route??R,H=Kw(D,S?.elapsed??b,{condition:p});M.position.set(H.x,n.y+H.heave,H.z),M.rotation.set(H.roll,H.yaw,H.pitch,"YXZ"),C.update(H,_,D)}}function f(){if(!u){u=!0;for(let{hull:d,wake:g}of a)d.children[0].geometry.dispose(),g.mesh.geometry.dispose(),g.mesh.material.dispose();e.dispose(),r.dispose();for(let d of o)d.dispose();t.clear()}}return h(0),{root:t,update:h,dispose:f}}var a2=26,c2=39,l2=2.25,hu=2*Math.PI,u2=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function no(n,t){let e=n.findIndex(r=>r.x>=t);if(e<1)return n[e===0?0:n.length-1].z;let i=n[e-1],s=n[e];return oe.lerp(i.z,s.z,(t-i.x)/(s.x-i.x))}function h2(n,t){let{shoreline:e,focusX:i,y:s}=n??{},r=t?.farZ;if(![i,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,h){let f=l-u,d=l+u,g=e.filter(S=>S.x>f&&S.x<d).map(S=>S.z),y=Math.max(no(e,f),no(e,d),...g)+a2,p=r-c2;if(p-y<19)return null;let m=Math.min(h,(p-y)/2),x=(p+y)/2,v=no(e,l)+22,b=oe.clamp((r+.4-x)/(r+.4-v),0,1),_=s-.77+b*.43;return{x:l,y:_,z:x,halfWidth:u,halfDepth:m}}let a=o(i-72,46,18),c=o(i+68,27,15);return a||c?{court:a,castle:c}:null}function Ug(n,t=0,e=!1){let i=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(n.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=n.court,h=i/l2,f=h%1,d=Math.floor(h)%2?1:-1,g=Math.sin(Math.PI*f),y=u-16,p=Math.min(3.3,l*.22);r={x:o+d*y*(1-2*f),y:a+20.9+g*15.7,z:c+Math.sin(hu*f)*p,rotation:i*2.6,ground:a};for(let m of[-1,1]){let v=1-Math.min(1,(m!==d?1-f:f)/.24),b=e?.32:v*v;s.push({kind:"player",style:m<0?0:1,scale:1,yaw:-m*Math.PI/2,x:o+m*(y+6-b*2),y:a+b*1.65,ground:a,z:c+m*p*(.65+g*.35),reach:b,swing:Math.sin(i*3.15+m*.9)*.42})}}if(n.castle){let{x:o,y:a,z:c}=n.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(i*4.8),swing:e?0:Math.cos(i*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(i*2.5+.9),swing:e?0:Math.cos(i*2.5+.9)*.35})}return{actors:s,ball:r}}function f2(n,t,e,i,s){let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Yt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r.translate(e,i,s)}function fu(n,t){let e=[],i=(c,l,u,h,f)=>e.push(f2(c,l,u,h,f));t({add:i,box:(c,l,u,h,f,d,g)=>i(new Ae(c,l,u),h,f,d,g),cylinder:(c,l,u,h,f,d,g)=>i(new qe(c,l,u,12),h,f,d,g)});let o=qn(e);for(let c of e)c.dispose();let a=new Ye({vertexColors:!0,roughness:.86});n.add(new ue(o,a))}function d2({x:n,y:t,z:e,halfWidth:i,halfDepth:s}){let r=new se;r.name="beach-volleyball-court",r.position.set(n,t,e);let o=s-1;return fu(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",h="#f4e4bb";for(let f of[-1,1])a(i*2,.1,.56,l,0,.14,f*s),a(.56,.1,s*2,l,f*i,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,f*o),c(.93,.93,1.1,l,0,18.9,f*o),c(.85,.85,.76,h,0,20.48,f*o),a(.76,.54,o*2,h,0,f<0?10.1:19.5,0);for(let f=1;f<5;f++)a(.23,.23,o*2,u,0,10.2+f*1.83,0);for(let f=1;f<12;f++)a(.22,9.25,.24,u,0,14.8,o*(f/6-1))}),r}function p2({x:n,y:t,z:e}){let i=new se;return i.name="beach-sandcastle",i.position.set(n,t,e),fu(i,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Re(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Re(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let h of[-1,1]){let f=h*6.15;o(2.44,3.35,7.9,a,f,4.05,-.8),o(2.66,2.52,1.03,c,f,8.03,-.8);for(let[d,g]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,f+d,8.99,-.8+g);r(1.07,.94,.3,l,f,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new fe;u.setAttribute("position",new jt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new Pn(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Ae(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Re(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),i}function m2(){let n=new Re(3.25,24,12),t=n.toNonIndexed();n.dispose();let e=t.attributes.position,i=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new Yt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=h=>(e[h](o)+e[h](o+1)+e[h](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/hu*i.length)%i.length,u=Math.abs(a("getY"))>2.85?i[1]:i[l];for(let h=0;h<3;h++)u.toArray(s,(o+h)*3)}t.setAttribute("color",new Te(s,3));let r=new ue(t,new Ye({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function bf(n,t){let{skin:e,hair:i,shirt:s,shorts:r,trim:o,style:a}=u2[n.style],c=n.kind==="beachgoer",l=n.kind==="surfer",u=n.kind==="builder"||c,h=c?9.25:u?7.8:l?10.7:12.2,f=h+(c?5.9:u?5.8:6.1),d=l?n.swing*.95:u?n.reach*1.15+.65:0,g=l?n.swing*.22:c?.11:u?.24:0;t(s,0,h,d*.43,3.72,4.1,2.85,g),t(r,0,h-3.4,0,3.34,1.65,2.8),t(o,0,h-1.95,2.45,3.03,.48,.59);for(let y of[-1,1]){if(l){t(r,y*2.45,5.35,1.26,1.58,2.66,1.49,.67,y*.4),t(e,y*3.76,2.93,.86,1.25,2.45,1.16,-.31,y*.17),t(e,y*4.13,1.01,.5,1.64,.73,1.27,0,y*.07);let p=h+1.2+y*n.swing*1.65;t(e,y*5.26,p,-.1,1.05,3.35,1.06,.22,-y*(1.08+y*n.swing*.28)),t(e,y*8.07,p+.43,.29,1.36,.96,1.02)}else if(c){let p=y<0?n.reach:.23;t(r,y*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,y*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,y*1.93,.92,5.06,1.25,.72,1.74),t(e,y*3.98,h-.3+p,1.15,1.02,2.45,1.05,-.62-p*.37),t(e,y*3.5,h-1.2+p*1.8,3.17,1.11,1.14,1.13),y<0&&t("#e7c8a1",-3.5,h-.18+p*1.8,3.82,.86,1.19,.86)}else{let p=u?.8:y*n.swing;t(r,y*1.65,u?3.5:6.4,p,1.55,2.3,1.49,u?.8:0),t(e,y*1.68,u?1.72:3.1,u?2.08:p,1.16,2.13,1.16),t(e,y*1.75,1.02,.88+p,1.28,.76,2.08);let m=u?h+.45:h+1.5+n.reach*2.1,x=u?2.4+n.reach*1.72:n.reach*.8,v=u?-.78-n.reach*.27:.12+n.reach*.62;t(e,y*(4.13-n.reach*.46),m,x,1.04,3.7,1.05,v,y*(u?.1:.24+n.reach*.55)),t(e,y*(4.1-n.reach*.53),m+(u?-1.65:n.reach*5.55-2.92),x+(u?2.7:n.reach*1.9),1.14,1.15,1.13)}t(e,y*3.48,f,d+.4,.84,.99,.78),t("#493a41",y*1.46,f+.38,d+3.41,.43,.47,.34),t("#c98878",y*2.22,f-.45,d+3.05,.54,.27,.26)}t(i,0,f+.64,d-.53,3.81,4.12,3.64),t(e,0,f,d+.72,3.25,3.29,2.89),t(e,0,f-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,f-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,f+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,f+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(i,-.99,f+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?i:o,2,f+3.23,d-1.66,1.41,1.43,1.39))}function vf(n,t,e,i,s=!1){let r=0;for(let h of t)bf(h,()=>r++);let o=new ii(new Re(1,10,7),new Ye({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(Bn),n.add(o);let a=i?new ii(new Rn(1,20).rotateX(-Math.PI/2),new Oe({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=i,a.frustumCulled=!1,a.instanceMatrix.setUsage(Bn),n.add(a));let c=0,l=new Map;for(let h of t)bf(h,f=>{l.has(f)||l.set(f,new Yt(f)),o.setColorAt(c++,l.get(f))});let u=new Xe;return function(f,d){let g=0,y=0,p=(m,x,v,b,_)=>{a&&(u.position.set(m,x+.16,v),u.rotation.set(0,0,0),u.scale.set(b,1,_),u.updateMatrix(),a.setMatrixAt(y++,u.matrix))};for(let m of f){let{scale:x,yaw:v}=m,b=Math.cos(v),_=Math.sin(v);bf(m,(S,R,M,C,F,I,D,H=0,N=0)=>{u.position.set(m.x+x*(R*b+C*_),m.y+M*x,m.z+x*(-R*_+C*b)),u.rotation.set(0,v,0),u.rotateX(H),u.rotateZ(N),u.scale.set(x*F,x*I,x*D),u.updateMatrix(),o.setMatrixAt(g++,u.matrix)}),p(m.x,m.ground,m.z,5.25*x,4.47*x)}d&&p(d.x,d.ground,d.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function g2(n){let t=new se;t.name="beach-day-activities";let e=n.court?d2(n.court):null,i=n.castle?p2(n.castle):null,s=e?m2():null;e&&t.add(e,s),i&&t.add(i);let r=vf(t,Ug(n).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=Ug(n,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:h,rotation:f}=c.ball;s.position.set(l,u,h),s.rotation.set(.25,f*.59,f)}}}function y2(n){let t=new se;t.name=`beach-surfboard-${n+1}`;let e=n?"#e5ac55":"#d57565",i=n?"#4d8f92":"#f3e5be";return fu(t,({add:s})=>{let r=(o,a,c,l,u,h,f)=>s(new Re(1,16,8).scale(l,u,h),f,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,i),r(-4.51,1.17,0,2.67,.14,2.47,n?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function x2(n){let t=new se;t.name="beach-morning-surfers";let{shoreline:e,focusX:i,y:s,farZ:r}=n,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:h,depth:f,drift:d})=>{let g=i+u,y=g-h-26,p=g+h+26;return y>=e[0].x&&p<=e.at(-1).x&&Math.min(no(e,y),no(e,p),...e.filter(m=>m.x>y&&m.x<p).map(m=>m.z))-f-d-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,h)=>y2(h));t.add(...a);function c(u){return o.map(({offset:h,radius:f,depth:d,drift:g,period:y,phase:p,style:m,scale:x})=>{let v=u%y/y*hu+p,b=i+h+f*Math.sin(v),_=no(e,b)-d+g*Math.cos(v),S=Math.atan2(g*Math.sin(v),f*Math.cos(v)),R=Math.sin(v*2+p);return{kind:"surfer",style:m,scale:x,yaw:S,x:b,z:_,y:s+1.7+R*.3,swing:Math.cos(v*2+p)*.5,swell:R}})}let l=vf(t,c(0),"beach-surfers");return{group:t,render(u){let h=c(u);for(let[f,{x:d,y:g,z:y,yaw:p,swell:m}]of h.entries())a[f].position.set(d,g-1.24,y),a[f].rotation.set(0,p,0),a[f].rotateX(m*.075),a[f].rotateZ(-m*.027);l(h)}}}var Ra=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function b2(n,t){let e=new se;return e.name=`beach-firepit-${t+1}`,e.position.set(n.x,n.y,n.z),fu(e,({add:i,box:s})=>{i(new Re(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*hu/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];i(new Do(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])i(new qe(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])i(new qe(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),i(new qe(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function v2(n){let t=new se;t.name="beach-evening-bonfires";let e=[n.court??n.castle];t.add(...e.map(b2));function i(l){let{x:u,y:h,z:f}=e[0];return[{kind:"beachgoer",style:0,scale:.95,yaw:Math.PI/2,x:u-16.23,y:h,ground:h,z:f+1.25,reach:.36+Math.sin(l*1.42-1.35)*.27}]}let s=vf(t,i(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new ii(new Re(1,9,7),new Oe({toneMapped:!1}),e.length*Ra.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(Bn);for(let l=0;l<r.count;l++)r.setColorAt(l,new Yt(Ra[l%Ra.length]));let o=new ze({uniforms:{warmth:{value:.86},tint:{value:new Yt("#ffad5f")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),a=new ii(new Rn(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new Xe;for(let[l,{x:u,y:h,z:f,halfDepth:d}]of e.entries())c.position.set(u,h+.19,f),c.scale.set(23,1,Math.min(19,d+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(i(l));for(let[u,{x:h,y:f,z:d}]of e.entries()){let g=u*1.71;for(let y=0;y<Ra.length;y++){let p=l*4.5+y*2.39+g,m=Math.sin(p)*.5+.5,x=y*2.39+g;if(y<7){let v=y<5?2.05:.78,b=y<5?3.18+m*1.58:2.78+m*1.09;c.position.set(h+Math.cos(x)*v,f+b+1.05,d+Math.sin(x)*v),c.rotation.set(Math.sin(x)*.2,x,Math.cos(x)*.24),c.scale.set(1.21+m*.54,b,1.18+m*.46)}else{let v=(l*(.32+y*.019)+y*.234+g)%1,b=.79*(1-v)+.13;c.position.set(h+Math.cos(x+v)*(2.45+v*6.2),f+8.8+v*15,d+Math.sin(x+v)*(1.74+v*4.4)),c.rotation.set(0,0,.2),c.scale.set(b,b*1.33,b)}c.updateMatrix(),r.setMatrixAt(u*Ra.length+y,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function Og(n,t){let e=new se;e.name="beach-play";let i=h2(n,t);if(!i)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:x2(n),day:g2(i),evening:v2(i)};e.add(...Object.values(s).map(({group:f})=>f));let r,o=0,a,c,l;function u(f,{reduceMotion:d=!1,transientTelemetry:g=!1,activity:y="day",night:p=!1}={}){let m=y==="overnight"?y:p?"evening":Object.hasOwn(s,y)?y:"day";if(!g){let v=Number.isFinite(r)&&Number.isFinite(f)?oe.clamp(f-r,0,.25):0;d||(o+=v),r=f}let x=d?.96:g?Number.isFinite(f)?Math.max(0,f):0:o;if(!(x===a&&d===c&&m===l)){if(a=x,c=d,m!==l){for(let[v,{group:b}]of Object.entries(s))b.visible=m===v;l=m}s[m]?.render(x,d)}}u(0);function h(){e.traverse(f=>{f.isMesh&&(f.isInstancedMesh&&f.dispose(),f.geometry.dispose(),f.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:h}}var _2=new V(0,-1,0),M2=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],_f=.01;function kg(n){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(n)}function zg(n){return!n.isMesh||!n.geometry?!1:(Array.isArray(n.material)?n.material:[n.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function S2(n){n.updateWorldMatrix(!0,!0);let t=[];n.traverseVisible(a=>{if(!zg(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let i=new Ue;for(let a of t)a.min.y<=e+_f&&i.union(a);let s=i.getCenter(new V),r=i.getSize(new V),o=e-n.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-n.position.x,centerZ:s.z-n.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function w2(n,t){let{type:e}=n;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function E2(n,t){let[e,i]=w2(n.item,t);if(![e,i,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Ue().setFromObject(s);return r.isEmpty()?null:{placement:n,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:i*s.scale.y}}function Bg(n,t){let e=t?.[n.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:n}function Hg(n,t){return n.intersectObject(t,!0).find(e=>zg(e.object))}function Gg(n,{low:t,high:e}){return n?.face?.normal.y>=.92&&n.point.y>=t&&n.point.y<=e}function T2(n,t,e,i,s,r){let o=t.x+e.centerX-i.x,a=t.z+e.centerZ-i.z,{bounds:c,probe:l,rootY:u}=n;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let h=-1/0;for(let[f,d]of M2){r.set(o+f*e.radiusX,c.max.y+1,a+d*e.radiusZ),s.set(r,_2);let g=Hg(s,l);if(!Gg(g,n))return null;h=Math.max(h,g.point.y)}return u+h}function Vg(n,t){let e=[],i=[];for(let c of n){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=kg(c.item);if(u==="surface"){let h=E2(c,l);h&&e.push(h)}else if(u==="tabletop"){let h=S2(l.root);h&&i.push({placement:c,foot:h})}}let s=new bs,r=new V;function o(c){let l=new Map;for(let{placement:u,foot:h}of i){let f=Bg(u,c),d=null,g=u.baseY,y=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let m=Bg(p.placement,c),x=T2(p,f,h,m,s,r);if(x===null||x<=u.baseY||x<g-_f)continue;let v=p.placement.item.id,b=Math.hypot(f.x-m.x,f.z-m.z);Math.abs(x-g)<_f&&(b>y||b===y&&v>d)||(d=v,g=x,y=b)}l.set(u.item.id,{y:g-h.bottom,supportId:d})}return l}function a(c,l){if(kg({type:c})!=="tabletop")return null;let u=new bs(void 0,void 0,l.near,l.far),h=new V,f;for(let d of e){let{x:g,z:y}=d.placement;h.copy(l.ray.origin).sub(r.set(g,d.rootY,y)),u.set(h,l.ray.direction);let p=Hg(u,d.probe);p&&(!f||p.distance<f.hit.distance||p.distance===f.hit.distance&&d.placement.item.id<f.surface.placement.item.id)&&(f={hit:p,surface:d,x:g,z:y})}return!f||!Gg(f.hit,f.surface)?null:{x:f.x+f.hit.point.x,y:f.z+f.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:du,sin:tr,cos:pu}=Math,zi=du*2,A2=new V(0,1,0),Qs=["#86684f","#9a7c5b","#735844"],Mf=["#92745a","#ac8f69","#785c49"],Sf=["#537759","#6b8a55","#849a58","#a0ab63"],wf=["#3e6251","#4d7056","#61815d","#789365"],Ef=["#4a6653","#567552","#6b8659","#819863"],R2=["#517553","#64845a","#799660","#98a869"],C2=["#617d69","#72917a","#8ea17e","#a7b08a"],I2=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],Wg=240,P2=new Set(["windy","windy-variant"]),Ca=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function Xg(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Hn(n,t,e){return[pu(n)*t,e,tr(n)*t]}function Mn(n,[t,e,i]){return[n[0]+t,n[1]+e,n[2]+i]}function L2(n,t,e,i,s){let r=(c,l)=>n.add(c,l,t,e,i);function o(c,l,u,h,f,d=7){let g=new V(...l),y=new V(...u),p=y.clone().sub(g),m=new mn().setFromUnitVectors(A2,p.clone().normalize()),x=new qe(f,h,p.length(),d),v=g.lerp(y,.5);r(x.applyQuaternion(m).translate(v.x,v.y,v.z),c)}function a(c,l,u,h=.13,f=6){let d=new Re(1,9,f),g=d.getAttribute("position"),y=s()*zi;for(let p=0;p<g.count;p++){let m=g.getX(p),x=g.getY(p),v=g.getZ(p),b=1+h*(tr(m*5.8+x*3.2+v*2.1+y)*.7+pu(v*7.8-x*2.2+y)*.3);g.setXYZ(p,m*b*u[0],x*b*u[1],v*b*u[2])}d.computeVertexNormals(),r(d.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function Tf(n,t,e,i,s,r,o){let a=[pu(e),tr(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=n.positions.length/3;for(let[h,[f,d]]of l.entries()){let g=s*d,y=t[0]+f*i*a[0],p=t[1]+tr(f*du)*r-o*f*f,m=t[2]+f*i*a[1];for(let v of[-1,0,1])n.positions.push(y+v*g*c[0],p+(v===0?g*.29:0),m+v*g*c[1]),n.uvs.push((v+1)*.5,f);if(h===0)continue;let x=u+(h-1)*3;for(let v of[0,1]){let b=x+v;n.indices.push(b,b+1,b+3,b+1,b+4,b+3)}}}function N2(n,t,e){let i=new fe;i.setAttribute("position",new jt(e.positions,3)),i.setAttribute("uv",new jt(e.uvs,2)),i.setIndex(e.indices),i.computeVertexNormals(),n(i,t)}function D2(n,t,e,i){let{draw:s,branch:r,crown:o,random:a}=n,c=t*(i?.063:.125),l=y=>Hn(e,c*y*y,t*y*(i?.85:.86)),u=y=>t*(i?.029:.024)*(1-.53*y),h=i?5:6;for(let y=0;y<h;y++){let p=y/h,m=(y+1)/h;r(Mf[0],l(p),l(m),u(p),u(m),9)}for(let y=1;y<=13;y++){let p=y*.067;r(Mf[y%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let f=l(1);o(Sf[0],f,[t*.045,t*.036,t*.048],.08,5);for(let y=0;y<4;y++)o(Mf[2],Mn(f,Hn(e+y*zi/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let d=Sf.map(()=>({positions:[],uvs:[],indices:[]})),g=i?9:10;for(let y=0;y<g;y++){let p=e+y*zi/g+(a()-.5)*.18,m=y%3===0,x=t*((m?.35:.29)+(a()-.5)*.07),v=t*(m?.026:.077),b=t*(m?.072:.025);if(Tf(d[(y+1)%4],f,p,x,t*.012,v,b),i){let _=Mn(f,Hn(p,x*.43,v*.7));for(let S=-3;S<=3;S++)Tf(d[(y+S+4)%4],_,p+S*.19,x*(.58-Math.abs(S)*.055),t*(.016-Math.abs(S)*.0018),v*.32,b*.84)}else for(let _=0;_<7;_++){let S=.19+_*.104,R=Mn(f,Hn(p,x*S,tr(S*du)*v-b*S*S));for(let M of[-1,1])Tf(d[(y+_+(M>0?1:0))%4],R,p+M*(.83-S*.37),t*(.095-S*.048),t*(.0095-S*.003),t*.014,t*.025)}}for(let[y,p]of d.entries())N2(s,Sf[y],p)}function Af(n,t,e,i,s=.84){let{branch:r}=n,o=a=>Hn(e,t*i*(a*a+.16*tr(du*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(Qs[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*zi/4;r(Qs[2],Hn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(Qs[1],Hn(c,t*.039,t*.025),Mn(o(.36),Hn(c,t*.031,0)),t*.004,t*.002,4)}return o}function F2(n,t,e){let{crown:i,random:s}=n,r=Af(n,t,e,.018,.94);i(wf[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let h=0;h<u;h++){let f=e+h*zi/u+o*2.5,d=Mn(r(o),Hn(f,t*a,t*((s()-.5)*.035)));i(wf[(h+u)%4],d,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}i(wf[2],Mn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function U2(n,t,e){let{branch:i,crown:s,random:r}=n,o=Af(n,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let h=e+u*zi/l+a*7+(r()-.5)*.22,f=o(a),d=Mn(f,Hn(h,t*c,t*(.02+r()*.028)));i(Qs[1],f,d,t*.017,t*.0037,6);let g=Mn(d,[0,t*.029,0]);s(Ef[u%3],g,[t*c*.46,t*.054,t*c*.45],.21,5),s(Ef[(u+2)%4],Mn(g,Hn(h-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(Ef[3],Mn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function O2(n,t,e,i){let{branch:s,crown:r,random:o}=n,a=i==="olive",c=i==="jacaranda",l=a?C2:c?I2:R2,u=Af(n,t,e,a?.1:.034,a?.78:.84),h=a?5:6;for(let d=0;d<h;d++){let g=e+d*zi/h+(o()-.5)*.33,y=u(.46+o()*.12),p=t*(.16+o()*.07),m=Mn(y,Hn(g,t*.12,p*.58)),x=Mn(y,Hn(g+.16,t*(.19+o()*.052),p));s(Qs[1],y,m,t*.026,t*.016,7),s(Qs[0],m,x,t*.0165,t*.0045,6);let v=t*(.092+o()*.03);r(l[d%2],Mn(x,[0,t*.024,0]),[v,t*(a?.064:.104),v*.87],.21,5);for(let b of[-1,1]){let _=Mn(x,Hn(g+b*1.18,t*.055,t*.05));s(Qs[0],m,_,t*.012,t*.003,5);let S=t*(.063+o()*.027);r(l[c?2+(d+(b>0?1:0))%3:1+d%3],Mn(_,[0,t*.022,0]),[S,S*(a?.63:.88),S*.91],.21,5)}}let f=Mn(u(1),[0,t*.023,0]);r(l[2],f,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),Mn(f,Hn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function qg(n,t,e){let i=Math.imul(Math.round(n*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:i}function Yg(n,t){return Number.isFinite(t)?oe.clamp(t,32,200):Ca[n].height}function k2(n,{kind:t,x:e,z:i,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(Ca,t)||![e,i,s].every(Number.isFinite))return!1;let a=Yg(t,r),c=Xg(qg(e,i,o)),l=c()*zi,u=L2(n,e,s,i,c);return t==="fan-palm"||t==="date-palm"?D2(u,a,l,t==="fan-palm"):t==="cypress"?F2(u,a,l):t==="shore-pine"?U2(u,a,l):O2(u,a,l,t),!0}function B2(n=0,t={}){let{windSpeed:e,windBearing:i,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?oe.clamp(e,0,22):P2.has(r)?6:0,a=Number.isFinite(i)?(i%360+360)%360:270,c=oe.degToRad(a),l=Number.isFinite(n)?Math.max(0,n)%Wg:0;return{x:-tr(c),z:pu(c),phase:zi*l/Wg,strength:s?0:o*.0048}}var z2=`
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
`;function $g(n){let t=new Set,e={roomcraftTreeDirection:{value:new Nt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function i(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${z2}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:h}=o;if(!Object.hasOwn(Ca,a))return!1;let f=Yg(a,c),d=Xg(qg(l,u,h))()*zi;return k2({add(g,y,...p){let m=g.getAttribute("position"),x=new Float32Array(m.count*3);for(let v=0;v<m.count;v++)x[v*3]=m.getY(v)/f,x[v*3+1]=f,x[v*3+2]=d;g.setAttribute("roomcraftTreeWind",new Te(x,3)),i(n.material(y)),n.add(g,y,...p)}},o)}function r(o,a){let c=B2(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var io=Math.PI/180,Pf=14,s0=56,H2=21,Qn=-111,Is=-108,r0=14,G2=28,Ia=28,Zg={minX:0,maxX:1536,minZ:0,maxZ:1024},Rf={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Cf={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},V2=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),W2=new Set(["snowy","snowy-rainy"]),jg={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42,artwork:38,mirror:39};function xu(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function yu(n,t,e){let i=!1;for(let s=0,r=n.points.length-1;s<n.points.length;r=s++){let o=n.points[s],a=n.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function o0(n,t,e,i=null){let s=null;for(let r of n){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||i!==null&&Math.abs(Math.cos(i-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function a0(n,t,e,i){let s=n.some(o=>yu(o,e-t.dz*23,i+t.dx*23));return n.some(o=>yu(o,e+t.dz*23,i-t.dx*23))&&!s?-1:1}function X2(n,t,e){let i=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e.type],s=i?.artFamily==="paddedPanel",r=jg[e.type]??(i?.mount==="wall"?s?0:jg.wallSconce:void 0);if(r===void 0)return null;let o=o0(t,e.x,e.y);if(!o||o.distance>38)return null;let{wall:a,centerX:c,centerZ:l}=o,u=(e.x-c)*-a.dz+(e.y-l)*a.dx,h=Math.abs(u)>4?Math.sign(u):a0(n,a,c,l),f=(Pf/2+4+(s?e.h*.3:0))*h;return{x:c-a.dz*f,z:l+a.dx*f,angle:a.angle+(h<0?Math.PI:0),mountY:Math.min(r,s0-8)}}function Kg(n){if(![n?.x1,n?.y1,n?.x2,n?.y2].every(Number.isFinite))return null;let t=n.x2-n.x1,e=n.y2-n.y1,i=Math.hypot(t,e);return i<1?null:{...n,dx:t/i,dz:e/i,length:i,angle:Math.atan2(e,t),openings:[]}}function Jg(n,[t,e,i,s]){return n.x1===t&&n.y1===e&&n.x2===i&&n.y2===s||n.x1===i&&n.y1===s&&n.x2===t&&n.y2===e}function q2(n,[t,e,i,s]){return t===i&&n.x1===t&&n.x2===t?Math.min(n.y1,n.y2)<=Math.min(e,s)&&Math.max(n.y1,n.y2)>=Math.max(e,s):e===s&&n.y1===e&&n.y2===e?Math.min(n.x1,n.x2)<=Math.min(t,i)&&Math.max(n.x1,n.x2)>=Math.max(t,i):!1}function Qg(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function mu(n,t,e){n.minX=Math.min(n.minX,t),n.maxX=Math.max(n.maxX,t),n.minZ=Math.min(n.minZ,e),n.maxZ=Math.max(n.maxZ,e)}function c0(n){return Object.hasOwn(Cf,n.finish)?Cf[n.finish]:Cf.graphite}function Y2(n,t,e){let i=t-n.x,s=e-n.z,r=Math.cos(n.angle),o=Math.sin(n.angle);return[i*r+s*o,-i*o+s*r]}function t0(n,t,e){let[i,s]=Y2(n,t,e);if(Math.abs(i)>n.item.w/2+5||Math.abs(s)>n.item.h/2+5)return null;let r=oe.clamp(s/n.item.h+.5,0,1);return Is-Is*r}function gu(n,t,e){return yu(n,t,e)?!0:n.points.some((i,s)=>{let r=n.points[(s+1)%n.points.length],o=r.x-i.x,a=r.y-i.y,c=o*o+a*a,l=c?oe.clamp(((t-i.x)*o+(e-i.y)*a)/c,0,1):0;return Math.hypot(t-i.x-l*o,e-i.y-l*a)<=Pf/2})}function $2(n,t,e){let i=(n.x1+n.x2)/2,s=(n.y1+n.y2)/2,r=t.some(h=>gu(h,i,s)),o=t.some(h=>Yr(h)&&gu(h,i,s)&&gu(h,n.x1,n.y1)&&gu(h,n.x2,n.y2)),a=r?0:Qn,c=a;if(!o)for(let h of e){let f=t0(h,n.x1,n.y1),d=t0(h,n.x2,n.y2);if(f!==null&&d!==null){a=f,c=d;break}}let[,l,u]=c0(n);return{...n,base1:a,base2:c,color:n.finish?l:"#896e79",postColor:n.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(n.length/G2)))}}function Lf(n){let t=n?.editableReferenceVersion>=8;if(n?.version!==2||!Array.isArray(n.rooms)||!Array.isArray(n.walls)||!Array.isArray(n.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=n.rooms.filter(_=>_?.points?.length>=3&&_.points.every(S=>Number.isFinite(S?.x)&&Number.isFinite(S?.y)));if(!e.length&&(!t||n.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let i=t?e.filter(_=>!Yr(_)):e,s=n.walls.map(Kg).filter(Boolean),r=s.filter(_=>_.kind!=="fence"),o=n.items.filter(_=>typeof _?.id=="string"&&typeof _.type=="string"&&[_.x,_.y,_.w,_.h].every(Number.isFinite)&&_.w>0&&_.h>0),a=Qg(),c=Qg(),l=(_,S)=>mu(a,_,S);for(let _ of e)for(let S of _.points)l(S.x,S.y);for(let _ of s)l(_.x1,_.y1),l(_.x2,_.y2);for(let _ of i)for(let S of _.points)mu(c,S.x,S.y);for(let _ of r)mu(c,_.x1,_.y1),mu(c,_.x2,_.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:Zg},h=new Map(r.map(_=>[_.id,_])),f=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(_=>h.has(_))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,h.get("w1").y1+57],[h.get("w2").x1,h.get("w1").y1+57],[h.get("w3").x1,h.get("w3").y1],[h.get("w3").x2,h.get("w3").y2],[u.minX-10,h.get("w4").y2]].map(([_,S])=>({x:_,y:S})),southDeck:[[u.minX-10,h.get("w6").y1],[h.get("w7").x1,h.get("w7").y1],[h.get("w7").x2,h.get("w7").y2],[h.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([_,S])=>({x:_,y:S})),recess:{x1:h.get("w12").x2,x2:h.get("w18").x1,z1:Math.min(h.get("w11").y2,h.get("w12").y2),z2:h.get("w13").y2}}:null,d=r.filter(_=>f?!(_.id==="w3"&&Jg(_,[400,408,342,468]))&&!(_.id==="w7"&&Jg(_,[248,590,302,651])):!0);if(f){l(f.left,f.stepTop),l(f.deckEdge,f.deckBottom);let{x1:_,x2:S,z1:R}=f.recess;if(S>_){let M=[[_,h.get("w12").y2,_,R],[_,R,S,R]];for(let[C,F]of M.entries()){if(d.some(B=>q2(B,F)))continue;let[I,D,H,N]=F,k=Kg({id:`reference-recess-${C}`,x1:I,y1:D,x2:H,y2:N});k&&d.push(k)}}}let g=new Map;for(let _ of o.filter(S=>S.type==="window")){let S=o0(d,_.x,_.y,(_.rotation||0)*io);if(!S||S.distance>27)continue;let{wall:R,t:M,centerX:C,centerZ:F}=S,I=Math.max(1,M-_.w/2+1),D=Math.min(R.length-1,M+_.w/2-1);if(D-I<14)continue;R.openings.push({start:I,end:D});let H=a0(i,R,C,F),N=R.angle+(H<0?Math.PI:0),k=(I+D)/2;g.set(_.id,{x:R.x1+k*R.dx,z:R.y1+k*R.dz,angle:N,window:{..._,w:D-I+2,rotation:N/io}})}let y=o.filter(_=>_.type==="garageDoor"),p=o.map(_=>{let S=_.type==="cameraThumbnail"&&y.some(k=>oE(_,k))?Qn:u0(_.type),R=Jh(_),M=g.get(_.id)??X2(i,d,_);if(R){let k=52;for(let B of g.values()){let W=Math.hypot(B.x-_.x,B.z-_.y);W<k&&(M=B,k=W)}}let C=M?.x??_.x,F=M?.z??_.y,I=M?.angle??(Number.isFinite(_.rotation)?_.rotation*io:0),D=_.type==="stairs"?1536:300,H=Math.min(D,(Math.abs(Math.cos(I))*_.w+Math.abs(Math.sin(I))*_.h)/2),N=Math.min(D,(Math.abs(Math.sin(I))*_.w+Math.abs(Math.cos(I))*_.h)/2);return l(C-H,F-N),l(C+H,F+N),{item:_,x:C,z:F,baseY:S,angle:I,window:M?.window,mountY:M?.mountY,isBlind:R}});for(let _ of d)_.openings.sort((S,R)=>S.start-R.start||S.end-R.end);let m=p.filter(({item:_})=>_.type==="stairs").map(_=>{let{item:S,x:R,z:M,angle:C}=_,F=Number.isInteger(S.steps)&&S.steps>=2&&S.steps<=40?S.steps:r0,I=Math.min(46,Math.max(12,S.w*.47)),D=-S.h/2-I;for(let H of[-S.w/2,S.w/2])l(R+H*Math.cos(C)-D*Math.sin(C),M+H*Math.sin(C)+D*Math.cos(C));return{..._,steps:F,apronDepth:I}}),x=s.filter(_=>_.kind==="fence").map(_=>$2(_,e,m)),v=ef(e,f,t),b=Am(d.map(_=>({..._,palette:c0(_)})),Pf,s0,H2);return Number.isFinite(a.minX)||Object.assign(a,Zg),{rooms:e,walls:d,fences:x,stairs:m,placements:p,bounds:a,houseBounds:u,reference:f,floorStructure:v,wallStructure:b,editableStructure:t}}function e0(n,t){for(let[e,[i,s]]of t.slice(0,-1).entries())e===0?n.moveTo(i,-s):n.lineTo(i,-s);return n.closePath(),n}function Nf([n,...t]){let e=e0(new Cn,n);return e.holes=t.map(i=>e0(new zs,i)),e}function Z2(n,t,e){let i=n.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d");if(!s)return null;let[r,o,a]=t,c=xu(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let h=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,h,256,32),s.globalAlpha=.48,s.fillRect(0,h,256,1.2);let f=30+u*47%181;s.fillRect(f,h,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,y=h+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(g,y),s.quadraticCurveTo(g+p/2,y+c()*2-1,g+p,y),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let h=0;h<8;h++)s.globalAlpha=c()*.14,s.fillRect(h*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(h*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new Pr(i);return l.colorSpace=rn,l.wrapS=l.wrapT=Us,l}function If(n){let t=new Map,e=new Me,i=new mn,s=new V,r=new V(0,1,0),o=new V(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Fr({color:d})),a.get(d));function l(d,g,y,p,m,x=0){i.setFromAxisAngle(r,x),e.compose(s.set(y,p,m),i,o),d.applyMatrix4(e);let v=c(g);t.has(v)||t.set(v,[]),t.get(v).push(d)}function u(d,g,y,p,m,x,v,b=0){d>0&&g>0&&y>0&&l(new Ae(d,g,y),p,m,x,v,b)}function h(d,g,y,p,m,x,v){let b=new Re(1,9,6);b.scale(d,g,y),l(b,p,m,x,v)}function f(){for(let[d,g]of t){let y=qn(g);if(!y){for(let p of g)n.add(new ue(p,d));continue}n.add(new ue(y,d));for(let p of g)p.dispose()}t.clear()}return{add:l,ball:h,box:u,material:c,finish:f}}function j2(n,t,e,i){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Rf,r)?r:"oak";if(!s.has(a)){let c=Rf[a],l=Z2(i,c,141+Object.keys(Rf).indexOf(a)*977);s.set(a,new Fr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new fs(Nf(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),h=l.getAttribute("uv");for(let d=0;d<h.count;d++)h.setXY(d,u.getX(d)/248,u.getZ(d)/248);let f=new ue(l,s.get(a));f.receiveShadow=!0,n.add(f)}}for(let r of e.floorStructure.footprint)n0(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)n0(t,r,Qn-1,-22,"#a18e84",!0)}function K2(n){if(!n.index){let t=n.getAttribute("position").count,e=new Uint32Array(t);for(let i=0;i<t;i++)e[i]=i;n.setIndex(new Te(e,1))}return n}function n0(n,t,e,i,s,r=!1){let o=new mi(Nf(t),{depth:i-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<i-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),n.add(K2(o),s,0,e,0)}function J2(n,t){let e=[],i=[],s=[];for(let[[o,a],[c,l]]of n){let u=e.length/3,h=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),i.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,h,t,h,0)}let r=new fe;return r.setAttribute("position",new jt(e,3)),r.setAttribute("uv",new jt(s,2)),r.setIndex(i),r.computeVertexNormals(),r}function i0(n,t){let e=new fs(Nf(n));if(e.rotateX(-Math.PI/2),t){let i=e.index.array;for(let s=0;s<i.length;s+=3)[i[s+1],i[s+2]]=[i[s+2],i[s+1]];e.computeVertexNormals()}return e}function Q2(n,t){for(let{faces:e,bottom:i,top:s,surface:r}of t.wallStructure){for(let o of e.top)n.add(i0(o,!1),r,0,s,0);for(let o of e.bottom)n.add(i0(o,!0),r,0,i,0);e.sides.length&&n.add(J2(e.sides,s-i),r,0,i,0)}}function tE(n,t){let e=new Set;for(let i of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:h,posts:f,color:d,postColor:g}=i,y=l-c,p=new Ae(Math.hypot(u,y),5,7);p.rotateZ(Math.atan2(y,u)),n.add(p,d,(s+o)/2,(c+l)/2+Ia,(r+a)/2,-h);for(let m=0;m<=f;m++){let x=m/f,v=oe.lerp(s,o,x),b=oe.lerp(r,a,x),_=oe.lerp(c,l,x),S=[v,_,b].map(R=>Math.round(R*1e3)).join(",");e.has(S)||(e.add(S),n.box(5,Ia,5,g,v,_+Ia/2,b,-h))}}}function l0(n,t,e,i,s=0,r=0){let o=e/i,a=-Is/i,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<i;u++){let h=r-e/2+o*u,f=u===i-1?0:Is+(u+1)*a,d=f-3;n.box(t,d-Qn,o,"#a98075",s,(Qn+d)/2,h+o/2),n.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,f-1.5,h+(o+c)/2),n.box(t,3.35,c-l,"#896254",s,d+3.35/2,h+(c+l)/2),n.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,h+l/2)}}function eE({item:n,steps:t,apronDepth:e}){let i=new se,s=If(i);l0(s,n.w,n.h,t);let r=Is-Qn;return s.box(n.w,r,e,"#c8b79e",0,Qn+r/2,-n.h/2-e/2),s.finish(),{root:i,anchorY:Is/2}}function nE(n,t){if(!t.reference)return;let{left:e,deckEdge:i,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=i-e,c=(i+e)/2,l=r0,u=r-s,h=u/l,f=Is,d=-f/l;l0(n,a,u,l,c,(s+r)/2);for(let b=0;b<l;b++){let _=s+h*(b+.5),S=f+(b+1)*d;n.box(5,24,5,"#9f8183",e+4,S+12,_)}let g=h*(l-1),y=d*(l-1),p=new Ae(7,5,Math.hypot(g,y)+5);p.rotateX(-Math.atan2(y,g)),n.add(p,"#896e79",e+4,24-y/2,(s+r)/2),n.box(a+2,3,80,"#cbbda6",c,f-1.5,s-40);let[m,x]=o,v=Math.max(2,Math.ceil((x.x-m.x)/28));n.box(x.x-m.x,5,7,"#896e79",(x.x+m.x)/2,28,m.y);for(let b=0;b<=v;b++)n.box(5,28,5,"#9f8183",m.x+(x.x-m.x)*b/v,14,m.y)}function iE(n){let t=n.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let i=xu(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=i()*512,a=i()*512,c=20+i()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let h=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);h.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),h.addColorStop(1,"#b1c3a000"),e.fillStyle=h,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=i()*512,a=i()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+i()*3,1.2+i()*2.8)}let s=new Pr(t);return s.wrapS=s.wrapT=Us,s.repeat.set(15,10),s.colorSpace=rn,s.anisotropy=4,s}function sE(n,t,e,i){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=xu(150741);if(!t.editableStructure){let g=Math.min(90,c*.18),y=t.reference?t.reference.left+g/2:s+g/2;n.box(g,4,115,"#c7baa4",y,-109,o-88);for(let p=0;p<5;p++)n.box(g*.85,1.8,13,"#dbceba",y,-106,o-137+p*20)}let h=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[g,y]of h){let p=s+g*c,m=o+y*l,x=21+u()*24;n.ball(x*.94,9,x*.67,"#6d886a",p,-104,m),n.ball(x*.82,x*.57,x*.69,"#819b76",p+3,-98,m);for(let v=0;v<8;v++){let b=v*2.39996,_=(.2+u()*.5)*x,S=x*(.28+u()*.2),R=["#94ad7f","#a6ba88","#8da878","#bad09c"][v%4];n.ball(S*1.15,S*.8,S,R,p+Math.cos(b)*_,-93+12*u(),m+Math.sin(b)*_*.75)}for(let v=0;v<5;v++){let b=v%2?"#e6c4b1":"#fae6a4",_=p+(u()-.5)*x*1.14,S=m+x*(.62+u()*.43);n.ball(2.3,4.6,2.3,"#819765",_,-106,S),n.ball(3.9,1.8,3.3,b,_,-101.5,S),n.ball(1.2,.9,1.2,"#cb9c57",_,-100.3,S)}}let f=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],d=t.placements.filter(({item:g})=>g.type==="garageDoor"||g.type==="stairs");for(let[g,[y,p,m,x]]of f.entries()){let v=x*Ca[y].radius+7,b=s+p*c,_=o+m*l,S=_<o?-1:1,R=b<(s+r)/2?-1:1;for(let[M,C]of[[0,0],[R*(v+20),0],[0,S*(v+20)]]){let F=b+M,I=_+C;if(!(I-v<=e.nearZ||F+v>s&&F-v<r&&I+v>o&&I-v<a||d.some(H=>{let N=F-H.x,k=I-H.z,B=N*Math.cos(H.angle)+k*Math.sin(H.angle),W=-N*Math.sin(H.angle)+k*Math.cos(H.angle);return Math.abs(B)<H.item.w/2+v&&Math.abs(W)<H.item.h*.6+v}))){i.add({kind:y,x:F,z:I,groundY:Qn,height:x,seed:7229+g*101});break}}}for(let[g,y,p,m]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])i.add({kind:y,x:s+p*c,z:e.farZ-m,groundY:Qn+.68,seed:g})}function rE(n,t,e){let i=xu(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(v,b)=>!(o&&v>=o.x1&&v<=o.x2&&b>=o.z1&&b<=o.z2)&&!t.rooms.some(_=>(!t.editableStructure||!Yr(_))&&yu(_,v,b)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let v=0;v<210;v++){let b=s.minX-70+(s.maxX-s.minX+140)*i(),_=c+l*i(),S=i()*180,R=8+i()*8,M=112+i()*34;a(b,_)&&r.push({x:b,z:_,phase:S,length:R,speed:M})}let u=new Float32Array(r.length*6),h=new Float32Array(r.length*3),f=new Float32Array(r.length*3),d=new fe,g=new fe,y=new fe;d.setAttribute("position",new Te(u,3).setUsage(Bn)),g.setAttribute("position",new Te(h,3).setUsage(Bn)),y.setAttribute("position",new Te(f,3).setUsage(Bn));let p=new Co(d,new Cr({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),m=new Ir(g,new ks({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),x=new Ir(y,new ks({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=m.frustumCulled=x.frustumCulled=!1,n.add(p,m,x),(v,{condition:b,windSpeed:_,windBearing:S})=>{p.visible=V2.has(b);let R=b==="pouring"||b==="lightning-rainy";if(p.material.opacity=R?.5:.34,m.visible=W2.has(b),x.visible=b==="hail",p.visible||m.visible||x.visible){let M=Number.isFinite(S)?S*io:285*io,C=oe.clamp(_??6,0,22)*.028;for(let[F,I]of r.entries()){let D=65-(I.phase+v*I.speed*(R?1.3:1))%170,H=65-(I.phase+v*20)%170,N=65-(I.phase+v*I.speed*1.55)%170,k=F*6;u.set([I.x,D,I.z,I.x+I.length*C*Math.sin(M),D+I.length,I.z-I.length*C*Math.cos(M)],k),h.set([I.x+Math.sin(v+F)*6,H,I.z],F*3),f.set([I.x,N,I.z],F*3)}d.attributes.position.needsUpdate=p.visible,g.attributes.position.needsUpdate=m.visible,y.attributes.position.needsUpdate=x.visible}}}function u0(n){return n==="garageDoor"?Qn:0}function oE(n,t){let e=n.x-t.x,i=n.y-t.y,s=(t.rotation??0)*io,r=Math.cos(s),o=Math.sin(s);return pm(t,e*r+i*o,-e*o+i*r)}function aE(n,t,e,i){let s=new V,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let h of l){s.set(...h).project(t);let f=(s.x+1)*e/2,d=(1-s.y)*i/2;u.left=Math.min(u.left,f-r),u.right=Math.max(u.right,f+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=n.fences.map(({x1:l,y1:u,x2:h,y2:f,base1:d,base2:g})=>o([[l,d,u],[l,d+Ia,u],[h,g,f],[h,g+Ia,f]])),c=n.stairs.map(({x:l,z:u,angle:h,item:f,apronDepth:d})=>{let g=Math.cos(h),y=Math.sin(h),p=[];for(let m of[-f.w/2,f.w/2])for(let[x,v]of[[-f.h/2-d,Is],[f.h/2,0]])p.push([l+m*g-x*y,v,u+m*y+x*g]);return o(p)});return[...a,...c]}function cE(n){let{floorStructure:t,wallStructure:e}=n,i=n.editableStructure?t.foundation:ef(n.rooms.filter(s=>!Yr(s)),n.reference,!0).foundation;return{home:Sa(lf(i,e)),vacuum:Sa(lf(t.footprint,e))}}function h0(n,t){let e=Lf(t),i=new Ul({canvas:n,antialias:!0,alpha:!1,powerPreference:"low-power"});try{return i.resetState(),lE(n,t,e,i)}catch(s){throw f0(i),s}}function f0(n){try{n.getContext().isContextLost()||n.resetState()}finally{n.dispose()}}function lE(n,t,e,i){let s=t.sceneSettings,r={},o=new us;o.background=new Yt("#d7dfcd");let a=new wo(o.background),c=new gs(-800,800,450,-450,1,Zl),{minX:l,maxX:u,minZ:h,maxZ:f}=e.bounds,d=new Ye({color:"#e8e8d2",map:iE(n.ownerDocument),roughness:.95}),g;d.onBeforeCompile=({uniforms:It})=>{g=It.dfgLUT};let y=new ue(new In(6200,4200),d);y.rotation.x=-Math.PI/2,y.position.set((l+u)/2,Qn,(h+f)/2),o.add(y);let p=If(o),m=If(o),x=$g(m),v=og(e),b=ag(p,v,Qn,y.geometry.parameters.width,y.position.x),_,{water:S}=cg(p,v,Qn,e.houseBounds,y.geometry.parameters.width,y.position.x),R=S.shoreline.reduce((It,kt)=>Math.abs(kt.x-S.focusX)<Math.abs(It.x-S.focusX)?kt:It),M={road:{x:b.centerX,y:b.surfaceY+8,z:(b.lanes[0]+b.lanes[1])/2},coast:{x:S.focusX+16,y:S.y,z:R.z-36},beach:{x:S.focusX,y:S.y+8,z:R.z+37}};sE(p,e,v,x),nE(p,e),j2(o,p,e,n.ownerDocument),Q2(p,e),tE(p,e.fences),p.finish();let C=o.children.length;m.finish();let F=o.children.slice(C),I=o.children.filter(It=>It.isMesh),D=Im(i,o,e.bounds),H=Cm();D.markStructure();let N=new In(16e4,16e4),{position:k,uv:B}=N.attributes;for(let It=0;It<B.count;It++)B.setXY(It,k.getX(It)/y.geometry.parameters.width+.5,k.getY(It)/y.geometry.parameters.height+.5);let W=new ue(N,d);W.name="Horizon foreground",W.rotation.copy(y.rotation),W.position.copy(y.position),W.position.y-=.12,W.receiveShadow=!0,W.visible=!1,o.add(W);let it=sg(S),j=Cg(b),et=Fg(S),at=Og(S,v);o.add(it.mesh,j.root,et.root,at.root);let Et=rE(o,e,v.sceneryMinZ),_t=e.floorStructure.footprint,{home:St,vacuum:Pt}=cE(e),Lt=(It,kt)=>St.contains(It,kt)?0:null,J=new us,ft=Jm(),Ct=eg(_t);o.add(Ct.root);let Xt=new Gs("#fff5e1","#c9bfd7",1.8),Dt=new ys("#fff1d8",1.65);Dt.position.set(-4,9,6),J.add(Xt,Dt);let X=new Map,lt=new Map,q=new Set(e.placements.filter(({item:It})=>It.visualKind==="none").map(({item:It})=>It.id)),Q=new Map,rt=new Map(e.stairs.map(It=>[It.item.id,It]));for(let It of e.placements){let{item:kt,x:$t,z:vt,baseY:Bt,angle:Ht,window:Qt,mountY:be,isBlind:hn}=It,Sn=kt.type==="window"&&Qt?Qt:kt,wn=rt.get(kt.id),ve=wn?eE(wn):mm(Sn,{window:hn?Qt:void 0,mountY:be})??lm(Sn,{mountY:be});if(ve){let on=km(kt,ve.root);if(ve.root.position.set($t,Bt+on,vt),ve.root.rotation.y=-Ht,ve.dock&&(ve.dock.position.set($t,Bt,vt),ve.dock.rotation.y=-Ht,o.add(ve.dock)),ve.floorRadius){let wi=ve.floorRadius,fn=(Ge,$e)=>Pt.clearance(Ge,$e)>=wi,Ce=(Ge,$e,Nn,L)=>Pt.supportsRoute(Ge,$e,Nn,L,wi);ve.dockFits=fn($t,vt),ve.root.name=kt.id,ve.liveMotion=ba({allowsPoint:fn,allowsRoute:Ce,duration:.42}),ve.demoMotion=ba({allowsPoint:fn,allowsRoute:Ce,duration:0})}o.add(ve.root),lt.set(kt.id,ve),kt.type==="garageDoor"&&Q.set(ve.root,kt.id),D.register(kt,ve)}X.set(kt.id,{x:$t,z:vt,baseY:Bt,rootY:ve?.root.position.y,object:ve})}let ht=e.placements.filter(({item:It,baseY:kt})=>kt===0&&lt.has(It.id)),mt=uf(ht),Tt=mt,Rt={supportsRoute:(It,kt,$t,vt,Bt=Math.min(11,St.clearance(It,kt),St.clearance($t,vt)))=>St.supportsRoute(It,kt,$t,vt,Bt),floorClearance:St.clearance,allowsBodyPoint:(It,kt,$t,vt)=>!Tt.blocksPoint(It,kt,$t,vt),allowsBodyRoute:(It,kt,$t,vt,Bt,Ht)=>!Tt.blocksRoute(It,kt,$t,vt,Bt,Ht)},Ut=cf(J,Lt,{...Rt,seats:Bm(e.placements,lt,St.clearance)}),zt,Y=Ut,ae=Vg(e.placements,lt),Gt=ae.resolve(),z=Gt,T,nt=!1,dt={...e.bounds,sceneryMinZ:v.sceneryMinZ,waterfront:{minX:S.focusX-475,maxX:S.focusX+605,minZ:R.z-352,maxZ:R.z+88}};for(let It of e.placements){let kt=lt.get(It.item.id);if(!kt)continue;let $t=Gt.get(It.item.id);if($t&&(kt.root.position.y=$t.y),kt.root.scale.y!==1||$t?.supportId){let{max:vt}=new Ue().setFromObject(kt.root);Number.isFinite(vt.y)&&(dt.maxY=Math.max(dt.maxY??92,vt.y))}}let yt=new V,G=!1,w=0,E=0,A=Qi(),U,O=new bs,K=new Zn(new V(0,1,0),0),$=new V,ut=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function ct(){Om(c,dt,w,E,A,U);let It=Dm(A.tilt);if(o.fog=It?a:null,W.visible=!!It,It){let kt=c.far-Zl;a.near=It.near+kt,a.far=It.far+kt}}function At(It,kt){if(G||It<1||kt<1||It===w&&kt===E)return;w=It,E=kt;let $t=n.ownerDocument.defaultView?.devicePixelRatio||1;i.setPixelRatio(Math.min($t,1.5,Math.sqrt(27e5/(It*kt)))),i.setSize(It,kt,!1),ct()}function P(It,kt){return A=Qi(It),U=kt,!G&&w>0&&E>0&&ct(),Z()}function Z(){return{...A}}function tt(It){if(typeof It=="string"){if(Object.hasOwn(M,It))return{...M[It]};let kt=X.get(It);if(!kt)return null;let{x:$t,z:vt,baseY:Bt,object:Ht}=kt;return Ht?{x:$t,y:Ht.root.position.y+(Ht.anchorY??0)*Ht.root.scale.y,z:vt}:{x:$t,y:Bt+6,z:vt}}return[It?.x,It?.y].every(Number.isFinite)?{x:It.x,y:(Lt(It.x,It.y)??0)+22,z:It.y}:null}function Mt(It,kt){return G||!Number.isFinite(It)||!Number.isFinite(kt)||w<=0||E<=0?!1:(O.setFromCamera(new Nt(It/w*2-1,1-kt/E*2),c),!0)}function wt(It,kt,$t,{preferTabletop:vt=!1}={}){if(!Mt(It,kt))return null;if(vt){let Bt=ae.projectTabletop($t,O);if(Bt)return Bt}return K.constant=-u0($t),O.ray.intersectPlane(K,$)?{x:$.x,y:$.z}:null}function bt(It,kt){if(!Q.size||!Mt(It,kt))return null;let $t=[];for(let Bt of Q.keys())Bt.traverseVisible(Ht=>{Ht.isMesh&&$t.push(Ht)});let vt=O.intersectObjects($t,!1)[0];if(!vt||O.intersectObjects(I,!1).some(Bt=>Bt.distance<vt.distance-.01))return null;for(let Bt=vt.object;Bt;Bt=Bt.parent)if(Q.has(Bt))return Q.get(Bt);return null}function Ft(It=!1){Ct.root.visible=!It&&A.preset!=="waterfront",i.render(o,c);let kt=(It||r.showAvatars!==!1)&&A.preset!=="waterfront"&&Y?.hasVisibleTracks,$t=!It&&A.preset!=="waterfront"&&ft.scene.children.length>0;if(!(!kt&&!$t)){i.autoClear=!1;try{kt&&i.render(J,c),$t&&(i.clearDepth(),i.render(ft.scene,c))}finally{i.autoClear=!0}}}function Ot(It={}){r=It,s={...t.sceneSettings,...It.features},Ct.setOpacity(It.heatMapOpacity)}function le(It,kt,$t=!1){let vt=kt.beachActivity??(kt.night?"overnight":"day"),Bt={reduceMotion:kt.reduceMotion===!0,night:kt.night===!0,condition:kt.condition,transientTelemetry:$t,activity:vt};j.root.visible=vt!=="overnight"&&($t||bi(s,"sidewalk")),et.root.visible=$t||bi(s,"boats"),at.root.visible=$t||bi(s,"beachPlay"),j.root.visible&&j.update(It,Bt),et.root.visible&&et.update(It,Bt),at.root.visible&&at.update(It,Bt);let Ht=$t||bi(s,"trees");for(let Qt of F)Qt.visible=Ht;Ht&&x.update(It,kt),it.update(It,$t||bi(s,"reflections")?kt:{...kt,reflections:!1})}function re(It=0,kt={},$t={},{animateTelemetry:vt=!0,showTelemetryPosition:Bt=!0,draftPositions:Ht,transientTelemetry:Qt=!1}={}){if(G||w<1||E<1)return;Qt||($t=Bl($t,s));let be=$t.reduceMotion===!0,hn=!be&&Number.isFinite(It)?It:0,Sn=Ji($t);$t={...$t,solar:Qt?Sn:H(Sn,hn,be)};let wn=vt?hn:0,ve=Qt||bi(s,"traffic");ve&&!_&&$t.traffic&&(_=wg(b),o.add(_.root)),_&&(_.root.visible=ve,ve&&_.update(It,$t.traffic,{reduceMotion:be,night:$t.night===!0,transientTelemetry:Qt,headlightBrightness:Qt?1:r.headlightBrightness})),Et(wn,Qt||bi(s,"precipitation")?$t:{}),le(It,$t,Qt);let on=T!==Ht;on&&(T=Ht,z=Ht?ae.resolve(Ht):Gt,Tt=Ht?uf(ht.map(fn=>{let Ce=Ht[fn.item.id]?.position;return Ce?{...fn,x:Ce.x,z:Ce.y}:fn})):mt),nt=!1;for(let[fn,Ce]of lt){let Ge=q.has(fn),$e=Ge?ut:kt[fn]??ut,{visible:Nn,position:L}=Ce.root,st=Ht?.[fn]?.position,xt=!1;if(Ce.floorRadius&&!Ge&&Bt&&!st){let Zt=Qt?Ce.demoMotion:Ce.liveMotion;!Qt&&Ce.demoMotion.hasPosition&&Ce.demoMotion.clear();let qt=Zt.observe($e.position,It,{observation:$e.positionObservedAt,reduceMotion:be});!qt&&$e.state==="docked"&&Zt.clear();let Jt=Zt.sample(It,be);st=Jt,xt=qt&&Jt?.current===!0,Ce.root.visible=!!(Jt||!Zt.hasPosition&&Ce.dockFits)}else Ce.floorRadius&&(Ce.root.visible=!0);let gt=X.get(fn),pt=st?.x??gt.x,Vt=st?.y??gt.z;nt||=!!(Ce.floorRadius&&(Nn!==Ce.root.visible||L.x!==pt||L.z!==Vt)),Ce.root.position.x=pt,Ce.root.position.y=z.get(fn)?.y??gt.rootY,Ce.root.position.z=Vt,Ce.animate?.($e,Ce.ambientMotion?hn:wn,xt,Qt)}D.update($t,kt,d,on),o.fog&&a.color.copy(o.background);let wi=Qt?zt:Ut;Y!==wi&&(Y?.setVisible(!1),Qt||zt?.setTracks([],0),Y=wi,Y?.setVisible(!0)),Y?.render(It,be,!Ht&&(Qt||r.seatedPoses!==!1)),Ft(Qt)}function Se(It,kt,$t={}){G||($t.transientTelemetry?(!zt&&It?.length&&(zt=cf(J,Lt,Rt),zt.setVisible(!1)),zt?.setTracks(It,kt,$t)):Ut.setTracks(It,kt,$t))}function Ee(It){if(A.preset==="waterfront")return null;let kt=X.get(It);if(!kt||w<1||E<1)return null;let{x:$t,z:vt,baseY:Bt,object:Ht}=kt;if(Ht){if(!Ht.root.visible)return null;yt.set(Ht.anchorOffset?.x||0,Ht.anchorY||0,Ht.anchorOffset?.z||0),Ht.root.localToWorld(yt)}else yt.set($t,Bt+6,vt);return yt.project(c),{x:(yt.x+1)/2,y:(1-yt.y)/2}}function un(){if(G)return;G=!0,Ut.dispose(),zt?.dispose(),ft.dispose(),Ct.dispose(),_?.dispose(),j.dispose(),et.dispose(),at.dispose();let It=new Set,kt=new Set,$t=new Set;o.traverse(vt=>{vt.geometry&&It.add(vt.geometry);for(let Bt of Array.isArray(vt.material)?vt.material:[vt.material])if(Bt){kt.add(Bt);for(let Ht of Object.values(Bt))Ht?.isTexture&&$t.add(Ht)}});for(let vt of $t)vt.dispose();for(let vt of It)vt.dispose();for(let vt of kt)vt.dispose();D.dispose(),g?.value?.dispose(),f0(i)}return{resize:At,render:re,anchor:Ee,setView:P,getView:Z,getDemoFocus:tt,projectToPlan:wt,pickGarage:bt,exteriorClearance:()=>aE(e,c,w,E),dispose:un,hasAmbientMotion:!0,setPeople:Se,setDisplaySettings:Ot,setDetectionZones:ft.setZones,setHeatMap:Ct.setHistory,get trackedControlChanged(){return nt},get hasPendingReacquisition(){return Ut.hasPendingReacquisition||[...lt.values()].some(It=>It.liveMotion?.pendingReacquisition)},canPlacePerson:(It,kt)=>St.clearance(It,kt)>0,get hasPeopleMotion(){return Y?.hasMotion??!1}}}var d0=.35,bu=7.5,uE=8;function p0(n,{getView:t,onChange:e,canStart:i=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let x=Qi({...p,...m});(x.azimuth!==p.azimuth||x.tilt!==p.tilt||x.zoom!==p.zoom)&&e(x)}function c(p){n.hasPointerCapture(p)&&n.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!i(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{n.setPointerCapture(p.pointerId)}catch{return}s.size||n.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function h(p){let m=s.get(p.pointerId);if(!m)return;let x=r();if(!x){l();return}let v=s.size===2,b=v?o():0,_={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,_),p.preventDefault(),v){let S=o();Math.min(b,S)>=uE&&a(x,{zoom:x.zoom*S/b});return}a(x,{azimuth:x.azimuth-(_.x-m.x)*d0,tilt:x.tilt+(_.y-m.y)*d0})}function f(p){s.delete(p.pointerId)&&c(p.pointerId)}function d(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let x=p.deltaMode===1?16:p.deltaMode===2?n.clientHeight:1,v=Math.max(-350,Math.min(350,p.deltaY*x));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-v*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let x;switch(p.key){case"ArrowLeft":x={azimuth:m.azimuth-bu};break;case"ArrowRight":x={azimuth:m.azimuth+bu};break;case"ArrowUp":x={tilt:m.tilt-bu};break;case"ArrowDown":x={tilt:m.tilt+bu};break;case"+":case"=":x={zoom:m.zoom*1.1};break;case"-":x={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,x)}let y=[["pointerdown",u],["pointermove",h],["pointerup",f],["pointercancel",f],["lostpointercapture",f],["wheel",d,{passive:!1}],["keydown",g]];for(let[p,m,x]of y)n.addEventListener(p,m,x);return{cancel:l,dispose(){l();for(let[p,m,x]of y)n.removeEventListener(p,m,x)}}}var kC=1200*1e3,BC=new Map([["s",1/60],["min",1],["h",60]]);var hE="roomcraft.traffic-vehicle-style.v1";function m0(n){try{let t=n.localStorage.getItem(hE);return ou.some(({id:e})=>e===t)?t:""}catch{return""}}(n=>{"use strict";let t=new Set(["hs","xy","rgb","rgbw","rgbww"]),e=new Set(["brightness","color_temp","white",...t]),i=r=>typeof r=="number"&&Number.isFinite(r);function s(r={}){r??={};let o=Array.isArray(r.supported_color_modes)?r.supported_color_modes:[],a=o.some(v=>e.has(v))||i(r.brightness),c=o.some(v=>t.has(v)),l=o.includes("white")&&c,u=Number.isInteger(r.supported_features)?r.supported_features:0,h=!!(u&32),f=!!(u&8),d=!!(u&4),g=Array.isArray(r.effect_list)?[...new Set(r.effect_list.filter(v=>typeof v=="string"&&v.trim()))]:[],y=r.min_color_temp_kelvin,p=r.max_color_temp_kelvin,m=o.includes("color_temp")?i(y)&&i(p)&&y>0&&p>y?{min:Math.round(y),max:Math.round(p)}:{min:2e3,max:6535}:null,x=["On/off"];return a&&x.push("Brightness"),m&&x.push("White temperature"),c&&x.push("Color"),l&&x.push("White mode"),(d||g.length)&&x.push("Effects"),h&&x.push("Fade duration"),f&&x.push("Flash"),{brightness:a,temperature:m,color:c,white:l,effects:g,transition:h,flash:f,labels:x}}n.RoomcraftLightCapabilities=Object.freeze({describe:s})})(typeof window>"u"?globalThis:window);var qC=1200*1e3,YC=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function g0(n,t,e){let i=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...n].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],h=u.length>0,f=h?5:3,d,g,y=1/0;for(let m=0;m<=f&&(h||!d);m++)for(let[x,v]of m===0?s.slice(0,1):s.slice(1)){let b=o(a.x+x*m*34,c/2,t-c/2),_=o(a.y+v*m*34,l/2,e-l/2);if(i.some(M=>Math.abs(b-M.x)<(c+M.w)/2+2&&Math.abs(_-M.y)<(l+M.h)/2+2))continue;if(m<=3&&!d&&(d={...a,x:b,y:_,w:c,h:l}),!h)break;if(u.some(M=>b+c/2>M.left&&b-c/2<M.right&&_+l/2>M.top&&_-l/2<M.bottom))continue;let R=Math.hypot(b-a.x,_-a.y);R<y&&(g={...a,x:b,y:_,w:c,h:l},y=R)}let p=g??d;p&&i.push(p)}return i}var v0=Pa(xa(),1),y0="roomcraft-presence-v1",x0=4500,_0=/^sensor\.[a-z0-9_]+$/,fE=4,Df=1536,Ff=1024,dE=[[[0,0],[Df,0],[Df,Ff],[0,Ff],[0,0]]],b0=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],pE=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...b0.map(([n,t])=>[t,n]),...b0.slice(1,-1).reverse().map(([n,,t])=>[t,n])]}]]);function M0(n,t){return n>=0&&n<=Df&&t>=0&&t<=Ff}function S0([n,t,e,i,s,r],o,a){return{x:n*o+t*a+e,y:i*o+s*a+r}}function w0(n){return Array.isArray(n)&&n.length===6&&n.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(n[0]*n[4]-n[1]*n[3])>1e-5}function mE(n){if(!Array.isArray(n)||n.length!==4||!n.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,i,s]=n;return t>=e||i>=s?null:[[t,i],[e,i],[e,s],[t,s]]}function E0(n){let t=[],e=0;for(let i of n){let s=i.presenceTrackTransform;if(i.type!=="presenceSwitch"||!w0(s))continue;let[,r,o,,a,c]=s,l=pE.get(i.presenceTrackProfile),u=Math.hypot(r,a),h=M0(o,c)?{origin:{x:o,y:c},forward:{x:r/u,y:a/u}}:{},f=t.length;for(let[d,g]of[["configured",mE(i.presenceTrackZone)],["nominal",l?.ring]]){if(!g)continue;let y=g.map(([p,m])=>{let x=S0(s,p,m);return[x.x,x.y]});for(let[p]of v0.default.intersection([y],dE))t.push({id:i.id,kind:d,points:p.slice(0,-1).map(([m,x])=>({x:m,y:x})),...h,...d==="nominal"?{rangeMeters:l.rangeMeters}:{}})}if(t.length>f&&++e===12)break}return t}function gE(n={},t=[]){let e={};for(let i of new Set(t)){if(!_0.test(i))continue;let s=n[i],r=s?.attributes;if(r?.tracking_schema!==y0)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,fE):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[i]={state:s.state,attributes:{tracking_schema:y0,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function T0(n,t,e=Date.now()){let i=[],s=new Set;for(let r of n){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!_0.test(o||"")||s.has(o)||!w0(a))continue;s.add(o);let c=gE(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!(!Number.isFinite(l)||l>e+1e3||e-l>=x0))for(let h of u){let{x:f,y:d}=S0(a,h.x,h.y);M0(f,d)&&i.push({id:o+":"+h.id,x:f,y:d,expiresAt:l+x0})}}return i}var Uf=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),R0=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),C0=Object.freeze([...Uf].map(([n,[t]])=>Object.freeze({id:n,label:n==="lightning-rainy"?"Thunderstorms with rain":t}))),I0=Object.freeze([...R0]),A0=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function P0(n={},t=!1){let{condition:e,daylightKnown:i,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:h,moonElevation:f,windSpeed:d,windBearing:g,cloudCoverage:y}=n;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,m,x]=Uf.get(e)||["Weather unavailable","unknown","none"],v=i?s:e==="clear-night",b=i?!s:e==="sunny",_=Number.isFinite(d)&&d>=0?d:void 0,S=Number.isFinite(g)?(g%360+360)%360:void 0,R=S===void 0?"":A0[Math.round(S/22.5)%A0.length],M=_===void 0?"":_===0?"Calm wind":`Wind ${R?`from ${R} at `:""}${Math.round(_*10)/10} m/s`;return{label:p,sky:v?"night":b?"day":"unknown",effect:m,cloud:x,moon:v&&R0.has(r)?r:"",reading:Uf.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:_,windBearing:S,windReading:M,cloudCoverage:Number.isFinite(y)&&y>=0&&y<=100?y:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:h,moonElevation:f}}var yE=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],xE=yE.map(([n,t,e])=>`
  <svg class="coastal-constellation coastal-${n}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([i,s],r)=>`<circle cx="${i}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),bE=["#c2d7ed","#e4edff","#fff0d2"];function L0(n,t){let e=t?11939:30391,i=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:n},(s,r)=>{let o=1+(r+i())*98/n,a=5+i()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${bE[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var U0=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-twilight"></span>
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${xE}
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
  </div>`,so=(n,t,e)=>Math.max(t,Math.min(e,n)),N0=n=>Number.isFinite(n)&&Math.abs(n)<=90,Of=n=>Number.isFinite(n)&&n>=0&&n<=360,kf=75,D0=n=>76-58*so(n/kf,0,1),O0=n=>50+38*n,vE=n=>O0(Math.sin(n*Math.PI/180)),_E=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function ME(n,t){let e=[];for(let[i,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+n*50*Math.sin(a)*i,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var SE=new Map([..._E].map(([n,t])=>[n,ME(...t)])),wE=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function EE(n,t,e,i,s,r,o){let c=(n==="night"&&!t?wE.get(e)??0:0)*so(1-(i??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=so(l,0,1),h=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:h}}function TE(n={},t=!1){let e=P0(n,t),{sky:i,effect:s,cloud:r,moon:o,sunElevation:a,sunAzimuth:c,moonElevation:l,moonAzimuth:u,windSpeed:h,windBearing:f,cloudCoverage:d}=e,g=Ji(t?{}:n),{phase:y}=g,{skyTimeSeconds:p,skyProgress:m,reduceMotion:x=!1}=t?{}:n,v=N0(a),b=y==="sunrise"||y==="sunset",_=Number.isFinite(p)&&!x?Math.max(0,p):void 0,S=Number.isFinite(m)&&!x?so(m,0,1):void 0,R=S===void 0?void 0:Math.sin(S*Math.PI)*kf,M=S??(_===void 0?void 0:.5-.5*Math.cos(_*Math.PI/480)),C=v?g.elevation:R??g.elevation,F=Of(c)||S===void 0?O0(g.east):83-66*S,I=Of(u)?vE(u):M===void 0?55:18+64*M,D=M===void 0?38:Math.sin(M*Math.PI)*kf,H=D0(N0(l)?l:D),N=!t&&!x&&!Of(u)&&S===void 0&&_===void 0?"ambient":"fixed",k=f===void 0?void 0:f*Math.PI/180,B=k===void 0?9:-Math.sin(k)*12,W=k===void 0?-2:Math.cos(k)*4,it=h===void 0?s==="wind"||s==="wind-clouds"?2.5:1:h===0?0:so(h*.25,.32,4.8),j=d===void 0?1:so(d/52,0,1);return{sky:i,effect:s,cloud:r,moon:o,light:b?"twilight":"regular",clock:_,reduceMotion:x,moonMotion:N,sunX:F,sunY:D0(C),moonX:I,moonY:H,solarPhase:i==="unknown"?"unknown":y,solarDaylight:g.daylight,solarDisc:g.disc,solarCloud:g.cloud,twilightGlow:g.twilight*(1-.42*g.cloud),horizonHaze:g.twilight*(.34+.2*g.cloud),moonOutline:SE.get(o)||"circle(50%)",windX:B,windY:W,cloudSpeed:it,cloudOpacity:j,...EE(i,b,s,d,_,S,x)}}function k0(n,t,e=!1){let i=TE(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:h,cloudSpeed:f,cloudOpacity:d,solarPhase:g,solarDaylight:y,solarDisc:p,solarCloud:m,twilightGlow:x,horizonHaze:v,starOpacity:b,meteor:_,meteorProgress:S,meteorOpacity:R}=i,M={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(f===0),skyReduced:String(h),solarPhase:g,stars:b>0?"visible":"hidden",meteor:_};for(let[F,I]of Object.entries(M))n.dataset[F]!==I&&(n.dataset[F]=I);let C={"--coastal-sun-x":`${i.sunX.toFixed(2)}%`,"--coastal-sun-y":`${i.sunY.toFixed(2)}%`,"--coastal-solar-x":`${i.sunX.toFixed(2)}%`,"--coastal-daylight":`${(y*100).toFixed(2)}%`,"--coastal-solar-disc":p.toFixed(3),"--coastal-solar-cloud":m.toFixed(3),"--coastal-twilight-glow":x.toFixed(3),"--coastal-twilight-color":`${(x*100).toFixed(2)}%`,"--coastal-horizon-haze":v.toFixed(3),"--coastal-moon-x":`${i.moonX.toFixed(2)}%`,"--coastal-moon-y":`${i.moonY.toFixed(2)}%`,"--coastal-moon-outline":i.moonOutline,"--coastal-wind-x":`${i.windX.toFixed(3)}vw`,"--coastal-wind-y":`${i.windY.toFixed(3)}px`,"--coastal-wind-speed":String(f||1),"--coastal-cloud-cover":String(d),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":b.toFixed(3),"--coastal-meteor-progress":S.toFixed(3),"--coastal-meteor-opacity":R.toFixed(3)};for(let[F,I]of Object.entries(C))n.style.getPropertyValue(F)!==I&&n.style.setProperty(F,I)}var F0=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,B0=`
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
    background:${L0(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${L0(13,!0)};
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
  @keyframes coastal-drift ${F0}
  @keyframes coastal-sampled-drift ${F0}
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
`;var AE=2500,Bf=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),z0={dawn:[-6,92,!0,"overnight"],sunrise:[2,99,!0,"morning"],morning:[19,114,!0,"morning"],day:[40,160,!0,"day"],sunset:[2,253,!1,"day"],dusk:[-6,265,!1,"evening"],night:[-16,290,!1,"evening"],overnight:[-30,290,!1,"overnight"]},RE=n=>n.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function CE({condition:n,daylight:t,moonPhase:e,windSpeed:i,windBearing:s}){let r=n==="clear-night"&&(t==="morning"||t==="day")?"night":t,[o,a,c,l]=z0[r]??z0.day,u=o<-.83;return{...Bf,condition:n,night:u,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:i,windBearing:s,sunRising:c,beachActivity:l}}function H0(n,t,{api:e,viewport:i,bridge:s,onChange:r}){let o=n.getElementById("sceneSettingsDialog"),a=n.getElementById("sceneSettingsButton"),c=n.getElementById("sceneFeatures"),l=n.getElementById("sceneDockAlignment"),u=n.getElementById("scenePreviewMode"),h=n.getElementById("scenePreviewMotion"),f=n.getElementById("scenePreviewSource"),d=n.getElementById("scenePreviewWeather"),g=n.createElement("style");g.textContent=B0,n.head.append(g);let y=n.createElement("template");y.innerHTML=U0.trim();let p=y.content.firstElementChild;p.hidden=!0,i.before(p);try{h.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let m=Yp.map(({key:St,label:Pt})=>{let Lt=n.createElement("label");Lt.className="scene-feature";let J=n.createElement("input");return J.type="checkbox",J.addEventListener("change",()=>e.setSceneSetting(St,J.checked)),Lt.append(J,Pt),c.append(Lt),{key:St,input:J}});function x(St,Pt){let Lt=n.createElement("label");return Lt.textContent=St,Lt.append(Pt),d.append(Lt),Pt.addEventListener("change",r),Pt}function v(St,Pt,Lt){let J=n.createElement("select");return J.replaceChildren(...Pt.map(([ft,Ct])=>new t.Option(Ct,ft))),J.value=Lt,x(St,J)}function b(St,Pt,Lt,J,ft){let Ct=n.createElement("input");return Object.assign(Ct,{type:"number",min:Pt,max:Lt,step:J,value:ft}),x(St,Ct)}let _=v("Weather",C0.map(({id:St,label:Pt})=>[St,Pt]),"sunny"),S=v("Time of day",[["dawn","Dawn"],["sunrise","Sunrise"],["morning","Morning"],["day","Day"],["sunset","Sunset"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),R=v("Moon phase",I0.map(St=>[St,RE(St)]),"full_moon"),M=b("Wind speed (m/s)",0,30,1,4),C=b("Wind from (degrees)",0,360,1,270),F,I,D=!1,H=!1,N=!1,k,B=!1,W=()=>{o.open||o.showModal()},it=()=>e.setSceneSetting("dockAlignment",l.value),j=()=>{d.hidden=u.value!=="custom",_t(),r()};a.addEventListener("click",W),l.addEventListener("change",it),u.addEventListener("change",j),h.addEventListener("change",r);function et(){return u.value!=="custom"}function at(){let St=H?et()?B?"Live appearance from Home Assistant.":F||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";f.textContent!==St&&(f.textContent=St)}async function Et(){if(!H||!et()||!s||D||N)return;D=!0;let St=!1;try{let Pt=await s.request("LOOK_GET");if(N)return;if(St=B!==!!Pt?.environment,B=!!Pt?.environment,B){let Lt=JSON.stringify(Pt);Lt!==I&&(F=Pt,I=Lt,St=!0)}}catch{St=B,B=!1}finally{D=!1,!N&&H&&et()&&St&&r()}}function _t(){H&&et()&&s&&!n.hidden?k===void 0&&(k=t.setInterval(Et,AE),Et()):k!==void 0&&(t.clearInterval(k),k=void 0)}return n.addEventListener("visibilitychange",_t),{open:W,motionEnabled:()=>h.checked,sync(St,Pt,Lt=!1){H=St,_t();for(let{key:Xt,input:Dt}of m)Dt.checked=bi(Pt,Xt);l.value=$p(Pt),at();let J=F??e.getPreview?.(),ft=et()?J?.environment??Bf:CE({condition:_.value,daylight:S.value,moonPhase:R.value,windSpeed:Math.min(30,Math.max(0,M.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,C.valueAsNumber||0))}),Ct={...ft,traffic:{...ft.traffic??Bf.traffic,vehicleStyle:m0(t)}};return p.hidden=!H||!bi(Pt,"sky"),p.hidden||k0(p,{...Bl(Ct,Pt),reduceMotion:Lt}),{states:J?.states??{},environment:Ct}},dispose(){N=!0,H=!1,_t(),n.removeEventListener("visibilitychange",_t),a.removeEventListener("click",W),l.removeEventListener("change",it),u.removeEventListener("change",j),h.removeEventListener("change",r),o.close();for(let{input:St}of m)St.parentElement.remove();d.replaceChildren(),p.remove(),g.remove()}}}var IE={radar:[32,12],plan:[20,8]};function zf(n){return n.reduce((e,i)=>[e[0]+i.x,e[1]+i.y],[0,0]).map(e=>e/n.length)}function PE(n,[t,e]){let[i,s]=zf(n),r=0,o=0,a=0;for(let{x:h,y:f}of n){let d=h-i,g=f-s;r+=d*d,o+=g*g,a+=d*g}let c=Math.hypot(r-o,2*a),l=Math.sqrt((r+o+c)/(2*n.length)),u=Math.sqrt(Math.max(0,(r+o-c)/(2*n.length)));return l>=t&&u>=e&&u>=l*.1}function X0([n,t,e,i,s,r],{radar:o,plan:a}){return Math.hypot(n*o.x+t*o.y+e-a.x,i*o.x+s*o.y+r-a.y)}function G0(n,t){let e=t?-1:1,[i,s]=zf(n.map(({radar:p})=>p)),[r,o]=zf(n.map(({plan:p})=>p)),a=0,c=0,l=0;for(let{radar:p,plan:m}of n){let x=e*(p.x-i),v=p.y-s,b=m.x-r,_=m.y-o;a+=b*x+_*v,c+=_*x-b*v,l+=x*x+v*v}let u=a/l,h=c/l,f=r-e*u*i+h*s,d=o-e*h*i-u*s,g=[e*u,-h,f,e*h,u,d],y=n.map(p=>X0(g,p));return{transform:g,errors:y,flipped:t,scale:Math.hypot(u,h),squared:y.reduce((p,m)=>p+m*m,0)}}function V0(n){let t=G0(n,!1),e=G0(n,!0);return e.squared<t.squared?e:t}function LE({radar:n,plan:t}={}){return[n?.x,n?.y,t?.x,t?.y].every(Number.isFinite)&&Math.abs(n.x)<=600&&Math.abs(n.y)<=600&&t.x>=0&&t.x<=1536&&t.y>=0&&t.y<=1024}function W0(n){return Object.entries(IE).every(([t,e])=>PE(n.map(i=>i[t]),e))}function q0(n){if(!Array.isArray(n)||n.length<3||n.length>12||!n.every(l=>l&&LE(l)))return{error:"Use 3\u201312 valid pairs of radar centimetres and plan coordinates."};if(!W0(n))return{error:"Choose survey points spread across the area, including one well off the line between the others."};let t=V0(n),e=t.scale*100;if(e<8||e>600)return{error:"The fitted scale is outside the supported range. Check the radar units and matched plan points."};let i;if(n.length>3){i=0;for(let[l,u]of n.entries()){let h=n.filter((d,g)=>l!==g);if(!W0(h))return{error:"Spread the survey points so that three or more still cover the area when any one point is removed."};let f=V0(h);if(f.scale*100<8||f.scale*100>600)return{error:"The fitted scale changes too much when a point is withheld. Check which radar report matches each point."};i=Math.max(i,X0(f.transform,u)/f.scale)}}let{transform:s,errors:r,flipped:o,scale:a,squared:c}=t;return{transform:s,pixelsPerMetre:e,flipped:o,origin:{x:s[2],y:s[5]},rmsCm:Math.sqrt(c/n.length)/a,maxErrorCm:Math.max(...r)/a,...i===void 0?{}:{validationCm:i}}}var NE=3,DE=11,FE=12,Y0=/^sensor\.[a-z0-9_]+$/,$0=n=>n.slice().sort((t,e)=>t-e)[Math.floor(n.length/2)];async function UE(n,t,e=Date.now,i=()=>!0){let s=e(),r=[],o=new Set,a;for(let c=0;c<DE&&i();c++){if(c&&await t(700),!i())return{error:"Capture canceled."};let l=await n(),{observed_at:u,tracks:h}=l?.attributes??{};if(!Number.isFinite(u)||u<s-500||u>e()+1e3||o.has(u))continue;if(o.add(u),h?.length>1)return{error:"More than one radar target was detected. Clear the room and try again."};if(l.state!=="1"||h?.length!==1)continue;let{id:f,x:d,y:g}=h[0];if(![d,g].every(p=>Number.isFinite(p)&&Math.abs(p)<=800))continue;if(a!==void 0&&f!==a)return{error:"The radar switched targets. Stay still and try again."};if(a=f,r.push({x:d,y:g}),r.length<NE)continue;let y={x:$0(r.map(p=>p.x)),y:$0(r.map(p=>p.y))};return r.some(p=>Math.hypot(p.x-y.x,p.y-y.y)>40)?{error:"These readings moved too far apart. Hold still on the marked spot and try again."}:{point:y}}return{error:"Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch."}}function OE(n,t,e,i,s,r){let o=n.getContext("2d");if(!o||!t)return;o.fillStyle="#e8eddf",o.fillRect(0,0,n.width,n.height);for(let c of t.rooms)o.beginPath(),c.points.forEach(({x:l,y:u},h)=>h?o.lineTo(l,u):o.moveTo(l,u)),o.closePath(),o.fillStyle=c.outdoor||c.surface==="patio"?"#d8dfca":"#f6e7cc",o.strokeStyle="#c9b496",o.lineWidth=4,o.fill(),o.stroke();for(let c of t.items)/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(c.type)&&(o.save(),o.translate(c.x,c.y),o.rotate(c.rotation*Math.PI/180),o.fillStyle="#c8b095",o.fillRect(-c.w/2,-c.h/2,c.w,c.h),o.restore());o.lineWidth=9,o.strokeStyle="#4f6159";for(let c of t.walls)o.beginPath(),o.moveTo(c.x1,c.y1),o.lineTo(c.x2,c.y2),o.stroke();o.textAlign="center",o.font="bold 25px sans-serif",o.fillStyle="#40473a";for(let c of t.rooms)c.label&&o.fillText(c.name,c.label.x,c.label.y,250);let a=(c,l,u)=>{c&&(o.beginPath(),o.arc(c.x,c.y,19,0,2*Math.PI),o.fillStyle=l,o.fill(),o.fillStyle="#fff",o.fillText(u,c.x,c.y+8))};a(e,"#714985","R"),s.forEach(({plan:c,radar:l},u)=>{if(r?.transform){let[h,f,d,g,y,p]=r.transform,m=h*l.x+f*l.y+d,x=g*l.x+y*l.y+p;o.strokeStyle="#ae5339",o.lineWidth=5,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(m,x),o.stroke(),o.beginPath(),o.arc(m,x,9,0,2*Math.PI),o.stroke()}a(c,"#376555",String(u+1))}),a(i,"#855f2f","+")}function Z0(n,t,{api:e,bridge:i}){let s=n.getElementById("radarCalibrationDialog");if(!s)return null;let r=n.getElementById("radarCalibrationPlan"),o=I=>s.querySelector(`[data-survey="${I}"]`),a=o("x"),c=o("y"),l=o("distance"),u=o("status"),h=o("quality"),f=o("points"),d=o("capture"),g=o("undo"),y=o("apply"),p=I=>new Promise(D=>t.setTimeout(D,I)),m,x,v,b,_=[],S=0,R=!1;function M(){b=_.length>=3?q0(_):void 0,d.disabled=R||!v||!i?.request||!Y0.test(x?.presenceTrackEntityId??"")||_.length>=FE,g.disabled=R||!_.length,y.disabled=R||!b?.transform;let I=_.map(({plan:H},N)=>{let k=n.createElement("li");return k.textContent=`Point ${N+1} \xB7 ${H.x}, ${H.y}`,k});f.replaceChildren(...I);let D=b?.error??"";if(b?.transform){let{pixelsPerMetre:H,rmsCm:N,maxErrorCm:k,validationCm:B,origin:W}=b;D=`${H.toFixed(1)} plan px/m \xB7 ${Math.round(N)} cm fit error \xB7 ${Math.round(k)} cm worst point.`,Number.isFinite(B)?D+=` Independent check ${Math.round(B)} cm.`:D+=" Add a fourth point to check the result.";let it=Math.hypot(W.x-x.x,W.y-x.y)*100/H;if(it>40&&(D+=` Fitted sensor origin is ${Math.round(it)} cm from its map marker.`),l.valueAsNumber>0){let[j,et]=_,at=Math.hypot(j.plan.x-et.plan.x,j.plan.y-et.plan.y)/l.valueAsNumber;D+=` Tape measure gives ${at.toFixed(1)} plan px/m between points 1 and 2.`}}h.textContent=D,OE(r,m,x,v,_,b)}function C(){let I=a.valueAsNumber,D=c.valueAsNumber;v=Number.isFinite(I)&&Number.isFinite(D)&&I>=0&&I<=r.width&&D>=0&&D<=r.height?{x:Math.round(I),y:Math.round(D)}:void 0,M()}function F(I){if(!I.target.closest?.("[data-radar-calibration]"))return;let D=e.getSelection();m=e.getProject(),x=D?.kind==="item"?m.items.find(H=>H.id===D.id&&H.type==="presenceSwitch"):null,x&&(S++,_=[],v=void 0,R=!1,a.value=c.value=l.value="",u.textContent=i?.request?Y0.test(x.presenceTrackEntityId??"")?"Choose a location to begin.":"Link a radar targets entity first.":"Open Studio from Home Assistant to capture live radar points.",s.showModal(),M())}return n.addEventListener("click",F),r.addEventListener("click",I=>{if(R)return;let D=r.getBoundingClientRect();a.value=Math.round((I.clientX-D.left)*r.width/D.width),c.value=Math.round((I.clientY-D.top)*r.height/D.height),C()}),a.addEventListener("input",C),c.addEventListener("input",C),l.addEventListener("input",M),d.addEventListener("click",async()=>{if(d.disabled)return;R=!0;let I=S,D=x.presenceTrackEntityId,H=v;u.textContent="Waiting for three fresh reports. Hold still on the chosen point.",M();let N;try{N=await UE(async()=>(await i.request("TRACK_GET",[D]))?.[D],p,Date.now,()=>I===S&&s.open)}catch{N={error:"Home Assistant could not read the radar. Check the connection and retry."}}I!==S||!s.open||(R=!1,N.point&&(_.push({plan:H,radar:N.point}),a.value=c.value="",v=void 0),u.textContent=N.error??`Captured point ${_.length}. Choose another location.`,M())}),g.addEventListener("click",()=>{_.pop(),M()}),y.addEventListener("click",()=>{b?.transform&&(e.setRadarCalibration(x.id,x.presenceTrackEntityId,b.transform)?s.close():u.textContent="The radar source changed. Reopen calibration for the current sensor.")}),s.addEventListener("close",()=>{S++}),{dispose(){S++,n.removeEventListener("click",F),s.open&&s.close()}}}var kE=22,BE=5,zE=1e3/12,HE=1e3,GE=12;function VE(n,t,e){let i=g0(n,t,e),s=new Set(i.map(r=>r.id));for(let r of n.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let h=a/2;h<=e-a/2;h+=a+4)c.push({...r,x:u,y:h,w:o,h:a});c.sort((u,h)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(h.x-r.x,h.y-r.y));let l=c.find(u=>i.every(h=>Math.abs(u.x-h.x)>=(u.w+h.w)/2+2||Math.abs(u.y-h.y)>=(u.h+h.h)/2+2));l&&i.push(l)}return i}function WE(n,t){if(!t)return!1;let e=(Number(n.rotation)||0)*Math.PI/180,i=t.x-n.x,s=t.y-n.y,r=i*Math.cos(e)+s*Math.sin(e),o=-i*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=n.w/2&&Math.abs(o)<=n.h/2}function XE(n,t,e,i,s,r){let o=n.flatMap((a,c)=>{let l=i.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),h=u<=kE;return!h&&(a.type==="garageDoor"||!WE(a,e))?[]:[{item:a,index:c,distance:u,near:h,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function qE(n,t){let e=t.RoomcraftEditorViewport,i=n.getElementById("sceneCanvas"),s=n.getElementById("viewport"),r=n.getElementById("sceneView");if(!e||!i||!s||!r)return null;Lm(r,!0);let o={left:n.getElementById("sceneRotateLeft"),right:n.getElementById("sceneRotateRight"),out:n.getElementById("sceneZoomOut"),in:n.getElementById("sceneZoomIn")},a=n.getElementById("sceneCameraOptions"),c=n.getElementById("sceneReset"),l=n.getElementById("sceneSaveDefault"),u=n.getElementById("sceneClearDefault"),h=n.getElementById("sceneDefaultStatus"),f=Um(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,y=Z0(n,t,{api:e,bridge:g}),p=H0(n,t,{api:e,viewport:s,bridge:g,onChange:()=>{Gt(N?.item&&N.position?{[N.item.id]:{position:N.position}}:void 0)}}),m=n.createElement("div");m.className="scene-selection",m.setAttribute("aria-hidden","true"),Object.assign(m.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(m);let x=n.createElement("div");x.className="scene-placeholders",Object.assign(x.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(x);let v=n.createElementNS("http://www.w3.org/2000/svg","svg");v.classList.add("scene-placeholder-leaders"),v.setAttribute("aria-hidden","true"),Object.assign(v.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(v,x);let b=new Map,_=n.getElementById("miniHelp"),S=_?.textContent,R=i.getAttribute("aria-label")??"Editable three-dimensional home view",M,C,F,I=rf(null),D=r.value,H="default",N,k,B,W=-1/0,it=0,j,et=!1,at=!1,Et=null,_t=!1,St=[],Pt=[],Lt="",J=0,ft,Ct=!1,Xt={},Dt={key:"",scene:null,reduceMotion:!1},X={id:null,scene:null},lt=()=>D!=="plan",q=()=>D==="free",Q=()=>d?.matches===!0||!p.motionEnabled(),rt=()=>i.getBoundingClientRect(),ht=vt=>{let Bt=rt();return{x:vt.clientX-Bt.left,y:vt.clientY-Bt.top}};function mt(vt){e.showStatus?.(vt)}function Tt(){if(!(!et&&(M?.hasAmbientMotion||M?.hasPeopleMotion)&&lt()&&!n.hidden&&!Q())){t.cancelAnimationFrame(B),B=void 0;return}B===void 0&&(B=t.requestAnimationFrame(Bt=>{if(B=void 0,Bt-W>=zE-1){W=Bt,it=Bt/1e3;try{j&&M.render(it,...j)}catch{w()}}Tt()}))}function Rt(vt=!0){let Bt=lt()?M:null,Ht=Q(),Qt=Ut()?T0(St,Xt):[],be=JSON.stringify(Qt);be===Dt.key&&Bt===Dt.scene&&Ht===Dt.reduceMotion||(Dt={key:be,scene:Bt,reduceMotion:Ht},Bt&&(Bt.setPeople(Qt,(t.performance?.now()??0)/1e3,{reduceMotion:Ht}),vt&&Gt()),e.setPersonPreview?.(Bt?[]:Qt))}function Ut(){return!!(g?.request&&Pt.length&&!et&&!n.hidden)}async function zt(vt=!0){if(vt&&Rt(),Ct||!Ut())return;Ct=!0;let Bt=J;try{let Ht=await g.request("TRACK_GET",Pt);Bt===J&&Ut()&&(Xt=Ht&&typeof Ht=="object"?Ht:{},Rt())}catch{Bt===J&&(Xt={},Rt())}finally{Ct=!1}}function Y(){Ut()?ft===void 0&&(ft=t.setInterval(zt,HE),zt(!1)):ft!==void 0&&(t.clearInterval(ft),ft=void 0,J++,Xt={})}function ae(vt){St=vt.filter(Qt=>Qt.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(Qt.presenceTrackEntityId)&&Array.isArray(Qt.presenceTrackTransform));let Bt=[...new Set(St.map(Qt=>Qt.presenceTrackEntityId))].slice(0,GE),Ht=Bt.join(",");Ht!==Lt&&(Lt=Ht,Pt=Bt,J++,Xt={}),Y()}function Gt(vt){if(Tt(),!M||!lt())return;let{width:Bt,height:Ht}=rt();if(!Bt||!Ht)return;M.resize(Bt,Ht);let Qt=e.getSelection(),be=Qt?.kind==="item"?Qt.id:null;if(X.scene!==M||X.id!==be){let Ge=C.items.find($e=>$e.id===be);M.setDetectionZones(Ge?E0([Ge]):[]),X={id:be,scene:M}}let hn=Q(),Sn=p.sync(!0,C.sceneSettings,hn),wn=Object.create(null);for(let Ge of C.items){let $e=Sn.states[Ge.id];$e&&$e.entityId===Ge.entityId&&(wn[Ge.id]=$e)}if(j=[wn,{...Sn.environment,reduceMotion:hn},{showTelemetryPosition:!1,draftPositions:vt}],M.render(it,...j),q())return;let ve=[];for(let[Ge,$e]of b){let Nn=M.anchor(Ge);if($e.hidden=!Nn,Nn){let L=C.items.find(xt=>xt.id===Ge),st=L?.type==="cameraThumbnail"?Fm(L,Bt):{w:96,h:44};ve.push({id:Ge,marker:$e,x:Nn.x*Bt,y:Nn.y*Ht,...st})}}let on=VE(ve,Bt,Ht),wi=new Set(on.map(Ge=>Ge.id)),fn=[];for(let Ge of on){let{marker:$e,x:Nn,y:L,w:st,h:xt,id:gt}=Ge;Object.assign($e.style,{left:`${Nn}px`,top:`${L}px`,width:`${st}px`,height:`${xt}px`});let pt=ve.find(Vt=>Vt.id===gt);if(Math.hypot(pt.x-Nn,pt.y-L)>8){let Vt=n.createElementNS("http://www.w3.org/2000/svg","line");for(let[Zt,qt]of Object.entries({x1:pt.x,y1:pt.y,x2:Nn,y2:L}))Vt.setAttribute(Zt,qt);Vt.setAttribute("stroke","#6f816b"),Vt.setAttribute("stroke-width","1"),Vt.setAttribute("stroke-dasharray","3 3"),fn.push(Vt)}}for(let[Ge,$e]of b)$e.hidden=!wi.has(Ge);v.replaceChildren(...fn);let Ce=Qt?.kind==="item"?M.anchor(Qt.id):null;m.style.display=Ce?"block":"none",Ce&&(m.style.left=`${Ce.x*Bt}px`,m.style.top=`${Ce.y*Ht}px`)}function z(){if(!N)return;let vt=N;N=void 0;try{i.releasePointerCapture(vt.pointerId)}catch{}vt.item&&Gt({[vt.item.id]:{position:{x:vt.item.x,y:vt.item.y}}})}function T(){a&&(a.hidden=!lt());for(let vt of Object.values(o))vt&&(vt.disabled=!lt());l&&(l.hidden=!M||!q(),l.disabled=_t),u&&(u.hidden=!M||!lt()||!Et,u.disabled=_t)}function nt(vt){h&&(h.textContent=vt)}function dt(){at=!0,nt("")}function yt(){i.tabIndex=q()?0:-1,i.style.cursor=q()?"grab":"",i.setAttribute("aria-label",q()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":R)}function G(vt,{initial:Bt=!1}={}){Bt||(dt(),vt==="default"&&(at=!1)),ut.cancel(),z();let Ht=M?.getView()??I,Qt=Object.hasOwn(Zr,vt)?vt:"plan";Qt!=="plan"&&e.useSelectTool?.(),D=Qt,lt()&&!q()&&(H=D),r.value=D,i.hidden=!lt(),yt();let be=lt()&&!q();if(x.style.display=be?"block":"none",v.style.display=be?"block":"none",be||(m.style.display="none"),_&&(q()?_.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":_.textContent=lt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":S),s.classList.toggle("scene-3d",lt()),T(),!lt()){E(),Tt(),p.sync(!1,e.getProject().sceneSettings),mt("Plan view \xB7 edit rooms, walls, floors and objects");return}let hn=D==="default"?rf(Et):q()?Nm(Ht):{preset:D};I=M?M.setView(hn):hn,E(),M&&mt(q()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function w(){ut.cancel(),M?.dispose(),M=void 0,F=void 0,D="plan",Tt(),r.value=D,i.hidden=!0,p.sync(!1,e.getProject().sceneSettings),yt(),x.style.display="none",v.style.display="none",_&&(_.textContent=S),s.classList.remove("scene-3d"),m.style.display="none",T(),Rt(!1),mt("3D view is unavailable on this screen. Plan view is ready.")}function E(){if(et)return;let vt=e.getProject();if(ae(vt.items),!lt()){p.sync(!1,vt.sceneSettings),Rt();return}let Bt=JSON.stringify(vt);try{if(!M||Bt!==F){z(),M&&(I=M.getView()),M?.dispose(),M=void 0,C=vt,M=h0(i,C),M.setView(I),F=Bt,b.clear(),x.replaceChildren();for(let Ht of C.items.filter(Qt=>Qt.type==="cameraThumbnail"||Qt.type.startsWith("ui"))){let Qt=n.createElement("button");Qt.type="button",Qt.className="scene-placeholder",Qt.textContent=Ht.name||(Ht.type==="cameraThumbnail"?"Camera":"Interface"),Qt.setAttribute("aria-label",`Select ${Qt.textContent}`),Object.assign(Qt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),Qt.addEventListener("pointerdown",be=>ct(be,Ht.id)),Qt.addEventListener("click",be=>{!q()&&be.detail===0&&(e.selectItem(Ht.id),Gt())}),b.set(Ht.id,Qt),x.append(Qt)}}T(),Rt(!1),Gt()}catch{w()}}function A(vt){!M||!lt()||(dt(),z(),M.setView(vt(M.getView())),I=M.getView(),Gt())}let U=()=>E(),O=()=>{let vt=e.getTool();lt()&&vt!=="select"?G("plan"):q()&&e.hasPlacement()?G(H):lt()&&Gt()},K=()=>G(r.value),$=()=>{t.cancelAnimationFrame(k),k=t.requestAnimationFrame(()=>Gt())},ut=p0(i,{getView:()=>q()?M?.getView():null,onChange:vt=>{!M||!q()||(dt(),I=M.setView(vt),$())}}),ct=(vt,Bt=null)=>{if(!lt()||q()||!M||vt.button!==0||N)return;vt.preventDefault(),vt.stopPropagation();let Ht=ht(vt);if(e.hasPlacement()){let on=M.projectToPlan(Ht.x,Ht.y,e.getPlacementType(),{preferTabletop:!0});on&&e.placeAt(on.x,on.y),E();return}let{width:Qt,height:be}=rt(),hn=new Map(C.items.map(on=>[on.id,M.anchor(on.id)])),Sn=Bt??M.pickGarage(Ht.x,Ht.y),wn=Sn?C.items.find(on=>on.id===Sn):XE(C.items,Ht,M.projectToPlan(Ht.x,Ht.y),hn,Qt,be);if(e.selectItem(wn?.id??null),!wn){Gt();return}let ve=M.projectToPlan(Ht.x,Ht.y,wn.type);ve&&(N={item:{...wn},startScreen:Ht,startPlan:ve,pointerId:vt.pointerId},i.setPointerCapture(vt.pointerId),Gt())},At=vt=>{if(!lt()||q()||(vt.stopPropagation(),!N||N.pointerId!==vt.pointerId||!M))return;let Bt=ht(vt);if(!N.moved&&Math.hypot(Bt.x-N.startScreen.x,Bt.y-N.startScreen.y)<BE)return;let Ht=M.projectToPlan(Bt.x,Bt.y,N.item.type);if(!Ht)return;N.moved=!0;let Qt={x:N.item.x+Ht.x-N.startPlan.x,y:N.item.y+Ht.y-N.startPlan.y},be=e.moveItemWarning?.(N.item.id,Qt.x,Qt.y);if(be){be!==N.warning&&mt(be),N.warning=be;return}N.warning&&mt(`Moving ${N.item.name||"object"}`),N.warning=void 0,N.position=Qt,Gt({[N.item.id]:{position:N.position}})},P=vt=>{if(!lt()||q()||(vt.stopPropagation(),!N||N.pointerId!==vt.pointerId))return;let Bt=N;N=void 0;try{i.releasePointerCapture(vt.pointerId)}catch{}Bt.moved&&Bt.position?(e.moveItem(Bt.item.id,Bt.position.x,Bt.position.y),E()):Gt()},Z=vt=>{q()||(N?.pointerId===vt.pointerId&&z(),vt.stopPropagation())},tt=vt=>{!lt()||q()||(vt.preventDefault(),vt.stopPropagation(),A(Bt=>({...Bt,zoom:Bt.zoom*(vt.deltaY<0?1.1:1/1.1)})))},Mt=vt=>{q()&&vt.target===i&&(vt.key==="Delete"||vt.key==="Backspace")&&(vt.preventDefault(),vt.stopImmediatePropagation()),vt.key==="Escape"&&N&&(vt.preventDefault(),vt.stopImmediatePropagation(),z())},wt=vt=>{vt.preventDefault(),w()},bt=()=>A(vt=>({...vt,azimuth:vt.azimuth-15})),Ft=()=>A(vt=>({...vt,azimuth:vt.azimuth+15})),Ot=()=>A(vt=>({...vt,zoom:vt.zoom/1.2})),le=()=>A(vt=>({...vt,zoom:vt.zoom*1.2})),re=()=>G("top"),Se=()=>{Rt(!1),Gt()},Ee=()=>{Y(),Rt(),Tt()};n.addEventListener("visibilitychange",Ee),d?.addEventListener("change",Se);async function un(){_t=!0,T();try{Et=await f.read(),!et&&!at&&G("default",{initial:!0})}catch{et||nt("Saved view unavailable")}finally{_t=!1,et||T()}}async function Ke(vt){if(!(!M||!lt()||_t)){_t=!0,nt("Saving view\u2026"),T();try{if(await f.write(vt),et)return;Et=vt,vt||G("default"),nt(vt?"Default view saved":"Top down is the default")}catch{et||nt("Could not save default view")}finally{_t=!1,et||T()}}}let It=()=>{q()&&M&&Ke(M.getView())},kt=()=>Ke(null);o.left?.addEventListener("click",bt),o.right?.addEventListener("click",Ft),o.out?.addEventListener("click",Ot),o.in?.addEventListener("click",le),c?.addEventListener("click",re),l?.addEventListener("click",It),u?.addEventListener("click",kt),r.addEventListener("change",K),i.addEventListener("pointerdown",ct),i.addEventListener("pointermove",At),i.addEventListener("pointerup",P),i.addEventListener("pointercancel",Z),i.addEventListener("lostpointercapture",Z),i.addEventListener("wheel",tt,{passive:!1}),i.addEventListener("webglcontextlost",wt),t.addEventListener("keydown",Mt,!0),t.addEventListener("roomcraft-editor-change",U),t.addEventListener("roomcraft-editor-tool",O);let $t=new t.ResizeObserver($);$t.observe(s),G(D,{initial:!0});try{(t.location.hash==="#scene-settings"||g&&t.parent.location.hash==="#scene-settings")&&p.open()}catch{}return un(),{getView:()=>M?.getView()??{...I},setView:G,dispose(){et=!0,Tt(),Y(),n.removeEventListener("visibilitychange",Ee),d?.removeEventListener("change",Se),z(),ut.dispose(),D="plan",yt(),$t.disconnect(),t.cancelAnimationFrame(k),M?.dispose(),M=void 0,m.remove(),x.remove(),v.remove(),p.dispose(),y?.dispose(),_&&(_.textContent=S),o.left?.removeEventListener("click",bt),o.right?.removeEventListener("click",Ft),o.out?.removeEventListener("click",Ot),o.in?.removeEventListener("click",le),c?.removeEventListener("click",re),l?.removeEventListener("click",It),u?.removeEventListener("click",kt),r.removeEventListener("change",K),i.removeEventListener("pointerdown",ct),i.removeEventListener("pointermove",At),i.removeEventListener("pointerup",P),i.removeEventListener("pointercancel",Z),i.removeEventListener("lostpointercapture",Z),i.removeEventListener("wheel",tt),i.removeEventListener("webglcontextlost",wt),t.removeEventListener("keydown",Mt,!0),t.removeEventListener("roomcraft-editor-change",U),t.removeEventListener("roomcraft-editor-tool",O)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=Lf,qE(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
