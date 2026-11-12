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
"use strict";(()=>{var Cy=Object.create;var rd=Object.defineProperty;var Iy=Object.getOwnPropertyDescriptor;var Py=Object.getOwnPropertyNames;var Ly=Object.getPrototypeOf,Ny=Object.prototype.hasOwnProperty;var Dy=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Fy=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Py(t))!Ny.call(n,s)&&s!==e&&rd(n,s,{get:()=>t[s],enumerable:!(i=Iy(t,s))||i.enumerable});return n};var ho=(n,t,e)=>(e=n!=null?Cy(Ly(n)):{},Fy(t||!n||!n.__esModule?rd(e,"default",{value:n,enumerable:!0}):e,n));var Zr=Dy((Qh,tf)=>{(function(n,t){typeof Qh=="object"&&typeof tf<"u"?tf.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n.polygonClipping=t())})(Qh,(function(){"use strict";/**
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
    ***************************************************************************** */function n(V,w){var E={label:0,sent:function(){if(k[0]&1)throw k[1];return k[1]},trys:[],ops:[]},C,U,k,Q;return Q={next:Y(0),throw:Y(1),return:Y(2)},typeof Symbol=="function"&&(Q[Symbol.iterator]=function(){return this}),Q;function Y(lt){return function(Rt){return ut([lt,Rt])}}function ut(lt){if(C)throw new TypeError("Generator is already executing.");for(;E;)try{if(C=1,U&&(k=lt[0]&2?U.return:lt[0]?U.throw||((k=U.return)&&k.call(U),0):U.next)&&!(k=k.call(U,lt[1])).done)return k;switch(U=0,k&&(lt=[lt[0]&2,k.value]),lt[0]){case 0:case 1:k=lt;break;case 4:return E.label++,{value:lt[1],done:!1};case 5:E.label++,U=lt[1],lt=[0];continue;case 7:lt=E.ops.pop(),E.trys.pop();continue;default:if(k=E.trys,!(k=k.length>0&&k[k.length-1])&&(lt[0]===6||lt[0]===2)){E=0;continue}if(lt[0]===3&&(!k||lt[1]>k[0]&&lt[1]<k[3])){E.label=lt[1];break}if(lt[0]===6&&E.label<k[1]){E.label=k[1],k=lt;break}if(k&&E.label<k[2]){E.label=k[2],E.ops.push(lt);break}k[2]&&E.ops.pop(),E.trys.pop();continue}lt=w.call(V,E)}catch(Rt){lt=[6,Rt],U=0}finally{C=k=0}if(lt[0]&5)throw lt[1];return{value:lt[0]?lt[1]:void 0,done:!0}}}var t=(function(){function V(w,E){this.next=null,this.key=w,this.data=E,this.left=null,this.right=null}return V})();function e(V,w){return V>w?1:V<w?-1:0}function i(V,w,E){for(var C=new t(null,null),U=C,k=C;;){var Q=E(V,w.key);if(Q<0){if(w.left===null)break;if(E(V,w.left.key)<0){var Y=w.left;if(w.left=Y.right,Y.right=w,w=Y,w.left===null)break}k.left=w,k=w,w=w.left}else if(Q>0){if(w.right===null)break;if(E(V,w.right.key)>0){var Y=w.right;if(w.right=Y.left,Y.left=w,w=Y,w.right===null)break}U.right=w,U=w,w=w.right}else break}return U.right=w.left,k.left=w.right,w.left=C.right,w.right=C.left,w}function s(V,w,E,C){var U=new t(V,w);if(E===null)return U.left=U.right=null,U;E=i(V,E,C);var k=C(V,E.key);return k<0?(U.left=E.left,U.right=E,E.left=null):k>=0&&(U.right=E.right,U.left=E,E.right=null),U}function r(V,w,E){var C=null,U=null;if(w){w=i(V,w,E);var k=E(w.key,V);k===0?(C=w.left,U=w.right):k<0?(U=w.right,w.right=null,C=w):(C=w.left,w.left=null,U=w)}return{left:C,right:U}}function o(V,w,E){return w===null?V:(V===null||(w=i(V.key,w,E),w.left=V),w)}function a(V,w,E,C,U){if(V){C(""+w+(E?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+U(V)+`
`);var k=w+(E?"    ":"\u2502   ");V.left&&a(V.left,k,!1,C,U),V.right&&a(V.right,k,!0,C,U)}}var c=(function(){function V(w){w===void 0&&(w=e),this._root=null,this._size=0,this._comparator=w}return V.prototype.insert=function(w,E){return this._size++,this._root=s(w,E,this._root,this._comparator)},V.prototype.add=function(w,E){var C=new t(w,E);this._root===null&&(C.left=C.right=null,this._size++,this._root=C);var U=this._comparator,k=i(w,this._root,U),Q=U(w,k.key);return Q===0?this._root=k:(Q<0?(C.left=k.left,C.right=k,k.left=null):Q>0&&(C.right=k.right,C.left=k,k.right=null),this._size++,this._root=C),this._root},V.prototype.remove=function(w){this._root=this._remove(w,this._root,this._comparator)},V.prototype._remove=function(w,E,C){var U;if(E===null)return null;E=i(w,E,C);var k=C(w,E.key);return k===0?(E.left===null?U=E.right:(U=i(w,E.left,C),U.right=E.right),this._size--,U):E},V.prototype.pop=function(){var w=this._root;if(w){for(;w.left;)w=w.left;return this._root=i(w.key,this._root,this._comparator),this._root=this._remove(w.key,this._root,this._comparator),{key:w.key,data:w.data}}return null},V.prototype.findStatic=function(w){for(var E=this._root,C=this._comparator;E;){var U=C(w,E.key);if(U===0)return E;U<0?E=E.left:E=E.right}return null},V.prototype.find=function(w){return this._root&&(this._root=i(w,this._root,this._comparator),this._comparator(w,this._root.key)!==0)?null:this._root},V.prototype.contains=function(w){for(var E=this._root,C=this._comparator;E;){var U=C(w,E.key);if(U===0)return!0;U<0?E=E.left:E=E.right}return!1},V.prototype.forEach=function(w,E){for(var C=this._root,U=[],k=!1;!k;)C!==null?(U.push(C),C=C.left):U.length!==0?(C=U.pop(),w.call(E,C),C=C.right):k=!0;return this},V.prototype.range=function(w,E,C,U){for(var k=[],Q=this._comparator,Y=this._root,ut;k.length!==0||Y;)if(Y)k.push(Y),Y=Y.left;else{if(Y=k.pop(),ut=Q(Y.key,E),ut>0)break;if(Q(Y.key,w)>=0&&C.call(U,Y))return this;Y=Y.right}return this},V.prototype.keys=function(){var w=[];return this.forEach(function(E){var C=E.key;return w.push(C)}),w},V.prototype.values=function(){var w=[];return this.forEach(function(E){var C=E.data;return w.push(C)}),w},V.prototype.min=function(){return this._root?this.minNode(this._root).key:null},V.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},V.prototype.minNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.left;)w=w.left;return w},V.prototype.maxNode=function(w){if(w===void 0&&(w=this._root),w)for(;w.right;)w=w.right;return w},V.prototype.at=function(w){for(var E=this._root,C=!1,U=0,k=[];!C;)if(E)k.push(E),E=E.left;else if(k.length>0){if(E=k.pop(),U===w)return E;U++,E=E.right}else C=!0;return null},V.prototype.next=function(w){var E=this._root,C=null;if(w.right){for(C=w.right;C.left;)C=C.left;return C}for(var U=this._comparator;E;){var k=U(w.key,E.key);if(k===0)break;k<0?(C=E,E=E.left):E=E.right}return C},V.prototype.prev=function(w){var E=this._root,C=null;if(w.left!==null){for(C=w.left;C.right;)C=C.right;return C}for(var U=this._comparator;E;){var k=U(w.key,E.key);if(k===0)break;k<0?E=E.left:(C=E,E=E.right)}return C},V.prototype.clear=function(){return this._root=null,this._size=0,this},V.prototype.toList=function(){return f(this._root)},V.prototype.load=function(w,E,C){E===void 0&&(E=[]),C===void 0&&(C=!1);var U=w.length,k=this._comparator;if(C&&m(w,E,0,U-1,k),this._root===null)this._root=l(w,E,0,U),this._size=U;else{var Q=d(this.toList(),u(w,E),k);U=this._size+U,this._root=h({head:Q},0,U)}return this},V.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(V.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(V.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),V.prototype.toString=function(w){w===void 0&&(w=function(C){return String(C.key)});var E=[];return a(this._root,"",!0,function(C){return E.push(C)},w),E.join("")},V.prototype.update=function(w,E,C){var U=this._comparator,k=r(w,this._root,U),Q=k.left,Y=k.right;U(w,E)<0?Y=s(E,C,Y,U):Q=s(E,C,Q,U),this._root=o(Q,Y,U)},V.prototype.split=function(w){return r(w,this._root,this._comparator)},V.prototype[Symbol.iterator]=function(){var w,E,C;return n(this,function(U){switch(U.label){case 0:w=this._root,E=[],C=!1,U.label=1;case 1:return C?[3,6]:w===null?[3,2]:(E.push(w),w=w.left,[3,5]);case 2:return E.length===0?[3,4]:(w=E.pop(),[4,w]);case 3:return U.sent(),w=w.right,[3,5];case 4:C=!0,U.label=5;case 5:return[3,1];case 6:return[2]}})},V})();function l(V,w,E,C){var U=C-E;if(U>0){var k=E+Math.floor(U/2),Q=V[k],Y=w[k],ut=new t(Q,Y);return ut.left=l(V,w,E,k),ut.right=l(V,w,k+1,C),ut}return null}function u(V,w){for(var E=new t(null,null),C=E,U=0;U<V.length;U++)C=C.next=new t(V[U],w[U]);return C.next=null,E.next}function f(V){for(var w=V,E=[],C=!1,U=new t(null,null),k=U;!C;)w?(E.push(w),w=w.left):E.length>0?(w=k=k.next=E.pop(),w=w.right):C=!0;return k.next=null,U.next}function h(V,w,E){var C=E-w;if(C>0){var U=w+Math.floor(C/2),k=h(V,w,U),Q=V.head;return Q.left=k,V.head=V.head.next,Q.right=h(V,U+1,E),Q}return null}function d(V,w,E){for(var C=new t(null,null),U=C,k=V,Q=w;k!==null&&Q!==null;)E(k.key,Q.key)<0?(U.next=k,k=k.next):(U.next=Q,Q=Q.next),U=U.next;return k!==null?U.next=k:Q!==null&&(U.next=Q),C.next}function m(V,w,E,C,U){if(!(E>=C)){for(var k=V[E+C>>1],Q=E-1,Y=C+1;;){do Q++;while(U(V[Q],k)<0);do Y--;while(U(V[Y],k)>0);if(Q>=Y)break;var ut=V[Q];V[Q]=V[Y],V[Y]=ut,ut=w[Q],w[Q]=w[Y],w[Y]=ut}m(V,w,E,Y,U),m(V,w,Y+1,C,U)}}let y=(V,w)=>V.ll.x<=w.x&&w.x<=V.ur.x&&V.ll.y<=w.y&&w.y<=V.ur.y,p=(V,w)=>{if(w.ur.x<V.ll.x||V.ur.x<w.ll.x||w.ur.y<V.ll.y||V.ur.y<w.ll.y)return null;let E=V.ll.x<w.ll.x?w.ll.x:V.ll.x,C=V.ur.x<w.ur.x?V.ur.x:w.ur.x,U=V.ll.y<w.ll.y?w.ll.y:V.ll.y,k=V.ur.y<w.ur.y?V.ur.y:w.ur.y;return{ll:{x:E,y:U},ur:{x:C,y:k}}},g=Number.EPSILON;g===void 0&&(g=Math.pow(2,-52));let x=g*g,_=(V,w)=>{if(-g<V&&V<g&&-g<w&&w<g)return 0;let E=V-w;return E*E<x*V*w?0:V<w?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new v,this.yRounder=new v}round(w,E){return{x:this.xRounder.round(w),y:this.yRounder.round(E)}}}class v{constructor(){this.tree=new c,this.round(0)}round(w){let E=this.tree.add(w),C=this.tree.prev(E);if(C!==null&&_(E.key,C.key)===0)return this.tree.remove(w),C.key;let U=this.tree.next(E);return U!==null&&_(E.key,U.key)===0?(this.tree.remove(w),U.key):w}}let M=new b,R=11102230246251565e-32,S=134217729,T=(3+8*R)*R;function P(V,w,E,C,U){let k,Q,Y,ut,lt=w[0],Rt=C[0],L=0,et=0;Rt>lt==Rt>-lt?(k=lt,lt=w[++L]):(k=Rt,Rt=C[++et]);let it=0;if(L<V&&et<E)for(Rt>lt==Rt>-lt?(Q=lt+k,Y=k-(Q-lt),lt=w[++L]):(Q=Rt+k,Y=k-(Q-Rt),Rt=C[++et]),k=Q,Y!==0&&(U[it++]=Y);L<V&&et<E;)Rt>lt==Rt>-lt?(Q=k+lt,ut=Q-k,Y=k-(Q-ut)+(lt-ut),lt=w[++L]):(Q=k+Rt,ut=Q-k,Y=k-(Q-ut)+(Rt-ut),Rt=C[++et]),k=Q,Y!==0&&(U[it++]=Y);for(;L<V;)Q=k+lt,ut=Q-k,Y=k-(Q-ut)+(lt-ut),lt=w[++L],k=Q,Y!==0&&(U[it++]=Y);for(;et<E;)Q=k+Rt,ut=Q-k,Y=k-(Q-ut)+(Rt-ut),Rt=C[++et],k=Q,Y!==0&&(U[it++]=Y);return(k!==0||it===0)&&(U[it++]=k),it}function N(V,w){let E=w[0];for(let C=1;C<V;C++)E+=w[C];return E}function B(V){return new Float64Array(V)}let O=(3+16*R)*R,F=(2+12*R)*R,D=(9+64*R)*R*R,z=B(4),W=B(8),tt=B(12),K=B(16),j=B(4);function X(V,w,E,C,U,k,Q){let Y,ut,lt,Rt,L,et,it,Tt,At,wt,Ut,Ot,le,se,_e,Ee,on,Ye,dn=V-U,nn=E-U,pn=w-k,mn=C-k;se=dn*mn,et=S*dn,it=et-(et-dn),Tt=dn-it,et=S*mn,At=et-(et-mn),wt=mn-At,_e=Tt*wt-(se-it*At-Tt*At-it*wt),Ee=pn*nn,et=S*pn,it=et-(et-pn),Tt=pn-it,et=S*nn,At=et-(et-nn),wt=nn-At,on=Tt*wt-(Ee-it*At-Tt*At-it*wt),Ut=_e-on,L=_e-Ut,z[0]=_e-(Ut+L)+(L-on),Ot=se+Ut,L=Ot-se,le=se-(Ot-L)+(Ut-L),Ut=le-Ee,L=le-Ut,z[1]=le-(Ut+L)+(L-Ee),Ye=Ot+Ut,L=Ye-Ot,z[2]=Ot-(Ye-L)+(Ut-L),z[3]=Ye;let Pt=N(4,z),ft=F*Q;if(Pt>=ft||-Pt>=ft||(L=V-dn,Y=V-(dn+L)+(L-U),L=E-nn,lt=E-(nn+L)+(L-U),L=w-pn,ut=w-(pn+L)+(L-k),L=C-mn,Rt=C-(mn+L)+(L-k),Y===0&&ut===0&&lt===0&&Rt===0)||(ft=D*Q+T*Math.abs(Pt),Pt+=dn*Rt+mn*Y-(pn*lt+nn*ut),Pt>=ft||-Pt>=ft))return Pt;se=Y*mn,et=S*Y,it=et-(et-Y),Tt=Y-it,et=S*mn,At=et-(et-mn),wt=mn-At,_e=Tt*wt-(se-it*At-Tt*At-it*wt),Ee=ut*nn,et=S*ut,it=et-(et-ut),Tt=ut-it,et=S*nn,At=et-(et-nn),wt=nn-At,on=Tt*wt-(Ee-it*At-Tt*At-it*wt),Ut=_e-on,L=_e-Ut,j[0]=_e-(Ut+L)+(L-on),Ot=se+Ut,L=Ot-se,le=se-(Ot-L)+(Ut-L),Ut=le-Ee,L=le-Ut,j[1]=le-(Ut+L)+(L-Ee),Ye=Ot+Ut,L=Ye-Ot,j[2]=Ot-(Ye-L)+(Ut-L),j[3]=Ye;let Nt=P(4,z,4,j,W);se=dn*Rt,et=S*dn,it=et-(et-dn),Tt=dn-it,et=S*Rt,At=et-(et-Rt),wt=Rt-At,_e=Tt*wt-(se-it*At-Tt*At-it*wt),Ee=pn*lt,et=S*pn,it=et-(et-pn),Tt=pn-it,et=S*lt,At=et-(et-lt),wt=lt-At,on=Tt*wt-(Ee-it*At-Tt*At-it*wt),Ut=_e-on,L=_e-Ut,j[0]=_e-(Ut+L)+(L-on),Ot=se+Ut,L=Ot-se,le=se-(Ot-L)+(Ut-L),Ut=le-Ee,L=le-Ut,j[1]=le-(Ut+L)+(L-Ee),Ye=Ot+Ut,L=Ye-Ot,j[2]=Ot-(Ye-L)+(Ut-L),j[3]=Ye;let Ht=P(Nt,W,4,j,tt);se=Y*Rt,et=S*Y,it=et-(et-Y),Tt=Y-it,et=S*Rt,At=et-(et-Rt),wt=Rt-At,_e=Tt*wt-(se-it*At-Tt*At-it*wt),Ee=ut*lt,et=S*ut,it=et-(et-ut),Tt=ut-it,et=S*lt,At=et-(et-lt),wt=lt-At,on=Tt*wt-(Ee-it*At-Tt*At-it*wt),Ut=_e-on,L=_e-Ut,j[0]=_e-(Ut+L)+(L-on),Ot=se+Ut,L=Ot-se,le=se-(Ot-L)+(Ut-L),Ut=le-Ee,L=le-Ut,j[1]=le-(Ut+L)+(L-Ee),Ye=Ot+Ut,L=Ye-Ot,j[2]=Ot-(Ye-L)+(Ut-L),j[3]=Ye;let Wt=P(Ht,tt,4,j,K);return K[Wt-1]}function St(V,w,E,C,U,k){let Q=(w-k)*(E-U),Y=(V-U)*(C-k),ut=Q-Y,lt=Math.abs(Q+Y);return Math.abs(ut)>=O*lt?ut:-X(V,w,E,C,U,k,lt)}let Et=(V,w)=>V.x*w.y-V.y*w.x,gt=(V,w)=>V.x*w.x+V.y*w.y,xt=(V,w,E)=>{let C=St(V.x,V.y,w.x,w.y,E.x,E.y);return C>0?-1:C<0?1:0},Ct=V=>Math.sqrt(gt(V,V)),st=(V,w,E)=>{let C={x:w.x-V.x,y:w.y-V.y},U={x:E.x-V.x,y:E.y-V.y};return Et(U,C)/Ct(U)/Ct(C)},ht=(V,w,E)=>{let C={x:w.x-V.x,y:w.y-V.y},U={x:E.x-V.x,y:E.y-V.y};return gt(U,C)/Ct(U)/Ct(C)},Mt=(V,w,E)=>w.y===0?null:{x:V.x+w.x/w.y*(E-V.y),y:E},Bt=(V,w,E)=>w.x===0?null:{x:E,y:V.y+w.y/w.x*(E-V.x)},kt=(V,w,E,C)=>{if(w.x===0)return Bt(E,C,V.x);if(C.x===0)return Bt(V,w,E.x);if(w.y===0)return Mt(E,C,V.y);if(C.y===0)return Mt(V,w,E.y);let U=Et(w,C);if(U==0)return null;let k={x:E.x-V.x,y:E.y-V.y},Q=Et(k,w)/U,Y=Et(k,C)/U,ut=V.x+Y*w.x,lt=E.x+Q*C.x,Rt=V.y+Y*w.y,L=E.y+Q*C.y,et=(ut+lt)/2,it=(Rt+L)/2;return{x:et,y:it}};class q{static compare(w,E){let C=q.comparePoints(w.point,E.point);return C!==0?C:(w.point!==E.point&&w.link(E),w.isLeft!==E.isLeft?w.isLeft?1:-1:Z.compare(w.segment,E.segment))}static comparePoints(w,E){return w.x<E.x?-1:w.x>E.x?1:w.y<E.y?-1:w.y>E.y?1:0}constructor(w,E){w.events===void 0?w.events=[this]:w.events.push(this),this.point=w,this.isLeft=E}link(w){if(w.point===this.point)throw new Error("Tried to link already linked events");let E=w.point.events;for(let C=0,U=E.length;C<U;C++){let k=E[C];this.point.events.push(k),k.point=this.point}this.checkForConsuming()}checkForConsuming(){let w=this.point.events.length;for(let E=0;E<w;E++){let C=this.point.events[E];if(C.segment.consumedBy===void 0)for(let U=E+1;U<w;U++){let k=this.point.events[U];k.consumedBy===void 0&&C.otherSE.point.events===k.otherSE.point.events&&C.segment.consume(k.segment)}}}getAvailableLinkedEvents(){let w=[];for(let E=0,C=this.point.events.length;E<C;E++){let U=this.point.events[E];U!==this&&!U.segment.ringOut&&U.segment.isInResult()&&w.push(U)}return w}getLeftmostComparator(w){let E=new Map,C=U=>{let k=U.otherSE;E.set(U,{sine:st(this.point,w.point,k.point),cosine:ht(this.point,w.point,k.point)})};return(U,k)=>{E.has(U)||C(U),E.has(k)||C(k);let{sine:Q,cosine:Y}=E.get(U),{sine:ut,cosine:lt}=E.get(k);return Q>=0&&ut>=0?Y<lt?1:Y>lt?-1:0:Q<0&&ut<0?Y<lt?-1:Y>lt?1:0:ut<Q?-1:ut>Q?1:0}}}let bt=0;class Z{static compare(w,E){let C=w.leftSE.point.x,U=E.leftSE.point.x,k=w.rightSE.point.x,Q=E.rightSE.point.x;if(Q<C)return 1;if(k<U)return-1;let Y=w.leftSE.point.y,ut=E.leftSE.point.y,lt=w.rightSE.point.y,Rt=E.rightSE.point.y;if(C<U){if(ut<Y&&ut<lt)return 1;if(ut>Y&&ut>lt)return-1;let L=w.comparePoint(E.leftSE.point);if(L<0)return 1;if(L>0)return-1;let et=E.comparePoint(w.rightSE.point);return et!==0?et:-1}if(C>U){if(Y<ut&&Y<Rt)return-1;if(Y>ut&&Y>Rt)return 1;let L=E.comparePoint(w.leftSE.point);if(L!==0)return L;let et=w.comparePoint(E.rightSE.point);return et<0?1:et>0?-1:1}if(Y<ut)return-1;if(Y>ut)return 1;if(k<Q){let L=E.comparePoint(w.rightSE.point);if(L!==0)return L}if(k>Q){let L=w.comparePoint(E.rightSE.point);if(L<0)return 1;if(L>0)return-1}if(k!==Q){let L=lt-Y,et=k-C,it=Rt-ut,Tt=Q-U;if(L>et&&it<Tt)return 1;if(L<et&&it>Tt)return-1}return k>Q?1:k<Q||lt<Rt?-1:lt>Rt?1:w.id<E.id?-1:w.id>E.id?1:0}constructor(w,E,C,U){this.id=++bt,this.leftSE=w,w.segment=this,w.otherSE=E,this.rightSE=E,E.segment=this,E.otherSE=w,this.rings=C,this.windings=U}static fromRing(w,E,C){let U,k,Q,Y=q.comparePoints(w,E);if(Y<0)U=w,k=E,Q=1;else if(Y>0)U=E,k=w,Q=-1;else throw new Error(`Tried to create degenerate segment at [${w.x}, ${w.y}]`);let ut=new q(U,!0),lt=new q(k,!1);return new Z(ut,lt,[C],[Q])}replaceRightSE(w){this.rightSE=w,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let w=this.leftSE.point.y,E=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:w<E?w:E},ur:{x:this.rightSE.point.x,y:w>E?w:E}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(w){return w.x===this.leftSE.point.x&&w.y===this.leftSE.point.y||w.x===this.rightSE.point.x&&w.y===this.rightSE.point.y}comparePoint(w){if(this.isAnEndpoint(w))return 0;let E=this.leftSE.point,C=this.rightSE.point,U=this.vector();if(E.x===C.x)return w.x===E.x?0:w.x<E.x?1:-1;let k=(w.y-E.y)/U.y,Q=E.x+k*U.x;if(w.x===Q)return 0;let Y=(w.x-E.x)/U.x,ut=E.y+Y*U.y;return w.y===ut?0:w.y<ut?-1:1}getIntersection(w){let E=this.bbox(),C=w.bbox(),U=p(E,C);if(U===null)return null;let k=this.leftSE.point,Q=this.rightSE.point,Y=w.leftSE.point,ut=w.rightSE.point,lt=y(E,Y)&&this.comparePoint(Y)===0,Rt=y(C,k)&&w.comparePoint(k)===0,L=y(E,ut)&&this.comparePoint(ut)===0,et=y(C,Q)&&w.comparePoint(Q)===0;if(Rt&&lt)return et&&!L?Q:!et&&L?ut:null;if(Rt)return L&&k.x===ut.x&&k.y===ut.y?null:k;if(lt)return et&&Q.x===Y.x&&Q.y===Y.y?null:Y;if(et&&L)return null;if(et)return Q;if(L)return ut;let it=kt(k,this.vector(),Y,w.vector());return it===null||!y(U,it)?null:M.round(it.x,it.y)}split(w){let E=[],C=w.events!==void 0,U=new q(w,!0),k=new q(w,!1),Q=this.rightSE;this.replaceRightSE(k),E.push(k),E.push(U);let Y=new Z(U,Q,this.rings.slice(),this.windings.slice());return q.comparePoints(Y.leftSE.point,Y.rightSE.point)>0&&Y.swapEvents(),q.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),C&&(U.checkForConsuming(),k.checkForConsuming()),E}swapEvents(){let w=this.rightSE;this.rightSE=this.leftSE,this.leftSE=w,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let E=0,C=this.windings.length;E<C;E++)this.windings[E]*=-1}consume(w){let E=this,C=w;for(;E.consumedBy;)E=E.consumedBy;for(;C.consumedBy;)C=C.consumedBy;let U=Z.compare(E,C);if(U!==0){if(U>0){let k=E;E=C,C=k}if(E.prev===C){let k=E;E=C,C=k}for(let k=0,Q=C.rings.length;k<Q;k++){let Y=C.rings[k],ut=C.windings[k],lt=E.rings.indexOf(Y);lt===-1?(E.rings.push(Y),E.windings.push(ut)):E.windings[lt]+=ut}C.rings=null,C.windings=null,C.consumedBy=E,C.leftSE.consumedBy=E.leftSE,C.rightSE.consumedBy=E.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let w=this.prev.consumedBy||this.prev;this._beforeState=w.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let w=this.beforeState();this._afterState={rings:w.rings.slice(0),windings:w.windings.slice(0),multiPolys:[]};let E=this._afterState.rings,C=this._afterState.windings,U=this._afterState.multiPolys;for(let Y=0,ut=this.rings.length;Y<ut;Y++){let lt=this.rings[Y],Rt=this.windings[Y],L=E.indexOf(lt);L===-1?(E.push(lt),C.push(Rt)):C[L]+=Rt}let k=[],Q=[];for(let Y=0,ut=E.length;Y<ut;Y++){if(C[Y]===0)continue;let lt=E[Y],Rt=lt.poly;if(Q.indexOf(Rt)===-1)if(lt.isExterior)k.push(Rt);else{Q.indexOf(Rt)===-1&&Q.push(Rt);let L=k.indexOf(lt.poly);L!==-1&&k.splice(L,1)}}for(let Y=0,ut=k.length;Y<ut;Y++){let lt=k[Y].multiPoly;U.indexOf(lt)===-1&&U.push(lt)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let w=this.beforeState().multiPolys,E=this.afterState().multiPolys;switch(Yt.type){case"union":{let C=w.length===0,U=E.length===0;this._isInResult=C!==U;break}case"intersection":{let C,U;w.length<E.length?(C=w.length,U=E.length):(C=E.length,U=w.length),this._isInResult=U===Yt.numMultiPolys&&C<U;break}case"xor":{let C=Math.abs(w.length-E.length);this._isInResult=C%2===1;break}case"difference":{let C=U=>U.length===1&&U[0].isSubject;this._isInResult=C(w)!==C(E);break}default:throw new Error(`Unrecognized operation type found ${Yt.type}`)}return this._isInResult}}class J{constructor(w,E,C){if(!Array.isArray(w)||w.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=E,this.isExterior=C,this.segments=[],typeof w[0][0]!="number"||typeof w[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let U=M.round(w[0][0],w[0][1]);this.bbox={ll:{x:U.x,y:U.y},ur:{x:U.x,y:U.y}};let k=U;for(let Q=1,Y=w.length;Q<Y;Q++){if(typeof w[Q][0]!="number"||typeof w[Q][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let ut=M.round(w[Q][0],w[Q][1]);ut.x===k.x&&ut.y===k.y||(this.segments.push(Z.fromRing(k,ut,this)),ut.x<this.bbox.ll.x&&(this.bbox.ll.x=ut.x),ut.y<this.bbox.ll.y&&(this.bbox.ll.y=ut.y),ut.x>this.bbox.ur.x&&(this.bbox.ur.x=ut.x),ut.y>this.bbox.ur.y&&(this.bbox.ur.y=ut.y),k=ut)}(U.x!==k.x||U.y!==k.y)&&this.segments.push(Z.fromRing(k,U,this))}getSweepEvents(){let w=[];for(let E=0,C=this.segments.length;E<C;E++){let U=this.segments[E];w.push(U.leftSE),w.push(U.rightSE)}return w}}class nt{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new J(w[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let C=1,U=w.length;C<U;C++){let k=new J(w[C],this,!1);k.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=k.bbox.ll.x),k.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=k.bbox.ll.y),k.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=k.bbox.ur.x),k.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=k.bbox.ur.y),this.interiorRings.push(k)}this.multiPoly=E}getSweepEvents(){let w=this.exteriorRing.getSweepEvents();for(let E=0,C=this.interiorRings.length;E<C;E++){let U=this.interiorRings[E].getSweepEvents();for(let k=0,Q=U.length;k<Q;k++)w.push(U[k])}return w}}class ct{constructor(w,E){if(!Array.isArray(w))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof w[0][0][0]=="number"&&(w=[w])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let C=0,U=w.length;C<U;C++){let k=new nt(w[C],this);k.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=k.bbox.ll.x),k.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=k.bbox.ll.y),k.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=k.bbox.ur.x),k.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=k.bbox.ur.y),this.polys.push(k)}this.isSubject=E}getSweepEvents(){let w=[];for(let E=0,C=this.polys.length;E<C;E++){let U=this.polys[E].getSweepEvents();for(let k=0,Q=U.length;k<Q;k++)w.push(U[k])}return w}}class pt{static factory(w){let E=[];for(let C=0,U=w.length;C<U;C++){let k=w[C];if(!k.isInResult()||k.ringOut)continue;let Q=null,Y=k.leftSE,ut=k.rightSE,lt=[Y],Rt=Y.point,L=[];for(;Q=Y,Y=ut,lt.push(Y),Y.point!==Rt;)for(;;){let et=Y.getAvailableLinkedEvents();if(et.length===0){let At=lt[0].point,wt=lt[lt.length-1].point;throw new Error(`Unable to complete output ring starting at [${At.x}, ${At.y}]. Last matching segment found ends at [${wt.x}, ${wt.y}].`)}if(et.length===1){ut=et[0].otherSE;break}let it=null;for(let At=0,wt=L.length;At<wt;At++)if(L[At].point===Y.point){it=At;break}if(it!==null){let At=L.splice(it)[0],wt=lt.splice(At.index);wt.unshift(wt[0].otherSE),E.push(new pt(wt.reverse()));continue}L.push({index:lt.length,point:Y.point});let Tt=Y.getLeftmostComparator(Q);ut=et.sort(Tt)[0].otherSE;break}E.push(new pt(lt))}return E}constructor(w){this.events=w;for(let E=0,C=w.length;E<C;E++)w[E].segment.ringOut=this;this.poly=null}getGeom(){let w=this.events[0].point,E=[w];for(let lt=1,Rt=this.events.length-1;lt<Rt;lt++){let L=this.events[lt].point,et=this.events[lt+1].point;xt(L,w,et)!==0&&(E.push(L),w=L)}if(E.length===1)return null;let C=E[0],U=E[1];xt(C,w,U)===0&&E.shift(),E.push(E[0]);let k=this.isExteriorRing()?1:-1,Q=this.isExteriorRing()?0:E.length-1,Y=this.isExteriorRing()?E.length:-1,ut=[];for(let lt=Q;lt!=Y;lt+=k)ut.push([E[lt].x,E[lt].y]);return ut}isExteriorRing(){if(this._isExteriorRing===void 0){let w=this.enclosingRing();this._isExteriorRing=w?!w.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let w=this.events[0];for(let U=1,k=this.events.length;U<k;U++){let Q=this.events[U];q.compare(w,Q)>0&&(w=Q)}let E=w.segment.prevInResult(),C=E?E.prevInResult():null;for(;;){if(!E)return null;if(!C)return E.ringOut;if(C.ringOut!==E.ringOut)return C.ringOut.enclosingRing()!==E.ringOut?E.ringOut:E.ringOut.enclosingRing();E=C.prevInResult(),C=E?E.prevInResult():null}}}class It{constructor(w){this.exteriorRing=w,w.poly=this,this.interiorRings=[]}addInterior(w){this.interiorRings.push(w),w.poly=this}getGeom(){let w=[this.exteriorRing.getGeom()];if(w[0]===null)return null;for(let E=0,C=this.interiorRings.length;E<C;E++){let U=this.interiorRings[E].getGeom();U!==null&&w.push(U)}return w}}class Lt{constructor(w){this.rings=w,this.polys=this._composePolys(w)}getGeom(){let w=[];for(let E=0,C=this.polys.length;E<C;E++){let U=this.polys[E].getGeom();U!==null&&w.push(U)}return w}_composePolys(w){let E=[];for(let C=0,U=w.length;C<U;C++){let k=w[C];if(!k.poly)if(k.isExteriorRing())E.push(new It(k));else{let Q=k.enclosingRing();Q.poly||E.push(new It(Q)),Q.poly.addInterior(k)}}return E}}class Ft{constructor(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z.compare;this.queue=w,this.tree=new c(E),this.segments=[]}process(w){let E=w.segment,C=[];if(w.consumedBy)return w.isLeft?this.queue.remove(w.otherSE):this.tree.remove(E),C;let U=w.isLeft?this.tree.add(E):this.tree.find(E);if(!U)throw new Error(`Unable to find segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] in SweepLine tree.`);let k=U,Q=U,Y,ut;for(;Y===void 0;)k=this.tree.prev(k),k===null?Y=null:k.key.consumedBy===void 0&&(Y=k.key);for(;ut===void 0;)Q=this.tree.next(Q),Q===null?ut=null:Q.key.consumedBy===void 0&&(ut=Q.key);if(w.isLeft){let lt=null;if(Y){let L=Y.getIntersection(E);if(L!==null&&(E.isAnEndpoint(L)||(lt=L),!Y.isAnEndpoint(L))){let et=this._splitSafely(Y,L);for(let it=0,Tt=et.length;it<Tt;it++)C.push(et[it])}}let Rt=null;if(ut){let L=ut.getIntersection(E);if(L!==null&&(E.isAnEndpoint(L)||(Rt=L),!ut.isAnEndpoint(L))){let et=this._splitSafely(ut,L);for(let it=0,Tt=et.length;it<Tt;it++)C.push(et[it])}}if(lt!==null||Rt!==null){let L=null;lt===null?L=Rt:Rt===null?L=lt:L=q.comparePoints(lt,Rt)<=0?lt:Rt,this.queue.remove(E.rightSE),C.push(E.rightSE);let et=E.split(L);for(let it=0,Tt=et.length;it<Tt;it++)C.push(et[it])}C.length>0?(this.tree.remove(E),C.push(w)):(this.segments.push(E),E.prev=Y)}else{if(Y&&ut){let lt=Y.getIntersection(ut);if(lt!==null){if(!Y.isAnEndpoint(lt)){let Rt=this._splitSafely(Y,lt);for(let L=0,et=Rt.length;L<et;L++)C.push(Rt[L])}if(!ut.isAnEndpoint(lt)){let Rt=this._splitSafely(ut,lt);for(let L=0,et=Rt.length;L<et;L++)C.push(Rt[L])}}}this.tree.remove(E)}return C}_splitSafely(w,E){this.tree.remove(w);let C=w.rightSE;this.queue.remove(C);let U=w.split(E);return U.push(C),w.consumedBy===void 0&&this.tree.add(w),U}}let zt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,$=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class oe{run(w,E,C){Yt.type=w,M.reset();let U=[new ct(E,!0)];for(let L=0,et=C.length;L<et;L++)U.push(new ct(C[L],!1));if(Yt.numMultiPolys=U.length,Yt.type==="difference"){let L=U[0],et=1;for(;et<U.length;)p(U[et].bbox,L.bbox)!==null?et++:U.splice(et,1)}if(Yt.type==="intersection")for(let L=0,et=U.length;L<et;L++){let it=U[L];for(let Tt=L+1,At=U.length;Tt<At;Tt++)if(p(it.bbox,U[Tt].bbox)===null)return[]}let k=new c(q.compare);for(let L=0,et=U.length;L<et;L++){let it=U[L].getSweepEvents();for(let Tt=0,At=it.length;Tt<At;Tt++)if(k.insert(it[Tt]),k.size>zt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let Q=new Ft(k),Y=k.size,ut=k.pop();for(;ut;){let L=ut.key;if(k.size===Y){let it=L.segment;throw new Error(`Unable to pop() ${L.isLeft?"left":"right"} SweepEvent [${L.point.x}, ${L.point.y}] from segment #${it.id} [${it.leftSE.point.x}, ${it.leftSE.point.y}] -> [${it.rightSE.point.x}, ${it.rightSE.point.y}] from queue.`)}if(k.size>zt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(Q.segments.length>$)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let et=Q.process(L);for(let it=0,Tt=et.length;it<Tt;it++){let At=et[it];At.consumedBy===void 0&&k.insert(At)}Y=k.size,ut=k.pop()}M.reset();let lt=pt.factory(Q.segments);return new Lt(lt).getGeom()}}let Yt=new oe;var _t={union:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Yt.run("union",V,E)},intersection:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Yt.run("intersection",V,E)},xor:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Yt.run("xor",V,E)},difference:function(V){for(var w=arguments.length,E=new Array(w>1?w-1:0),C=1;C<w;C++)E[C-1]=arguments[C];return Yt.run("difference",V,E)}};return _t}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var qd=0,fh=1,Yd=2;var qs=1,$d=2,Hr=3,ws=0,kn=1,je=2,Li=0,Gr=1,Zi=2,dh=3,ph=4,Zd=5;var Ys=100,jd=101,Kd=102,Jd=103,Qd=104,tp=200,ep=201,np=202,ip=203,mh=204,gh=205,sp=206,rp=207,op=208,ap=209,cp=210,lp=211,up=212,hp=213,fp=214,fc=0,dc=1,pc=2,wr=3,mc=4,gc=5,Er=6,yc=7,Yc=0,dp=1,pp=2,gi=0,yh=1,xh=2,bh=3,oa=4,vh=5,_h=6,Mh=7;var Sh=300,Es=301,$s=302,$c=303,Zc=304,aa=306,Bs=1e3,Ti=1001,xc=1002,yn=1003,mp=1004;var ca=1005;var _n=1006,jc=1007;var Ts=1008;var Wn=1009,wh=1010,Eh=1011,Vr=1012,Kc=1013,yi=1014,si=1015,xi=1016,Jc=1017,Qc=1018,Wr=1020,Th=35902,Ah=35899,Rh=1021,Ch=1022,ri=1023,Ri=1026,As=1027,tl=1028,el=1029,Rs=1030,nl=1031;var il=1033,la=33776,ua=33777,ha=33778,fa=33779,sl=35840,rl=35841,ol=35842,al=35843,cl=36196,ll=37492,ul=37496,hl=37488,fl=37489,da=37490,dl=37491,pl=37808,ml=37809,gl=37810,yl=37811,xl=37812,bl=37813,vl=37814,_l=37815,Ml=37816,Sl=37817,wl=37818,El=37819,Tl=37820,Al=37821,Rl=36492,Cl=36494,Il=36495,Pl=36283,Ll=36284,pa=36285,Nl=36286;var Eo=2300,bc=2301,uc=2302,Qu=2303,th=2400,eh=2401,nh=2402;var gp=3200;var ma=0,yp=1,ji="",$e="srgb",To="srgb-linear",Ao="linear",Ie="srgb";var hc=7680;var xp=519,bp=512,vp=513,_p=514,Dl=515,Mp=516,Sp=517,Fl=518,wp=519,Ih=35044,On=35048;var Ph="300 es",di=2e3,Tr=2001;function Uy(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ky(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ep(){let n=Ro("canvas");return n.style.display="block",n}var od={},Ar=null;function Co(...n){let t="THREE."+n.shift();Ar?Ar("log",t,...n):console.log(t,...n)}function Tp(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ae(...n){n=Tp(n);let t="THREE."+n.shift();if(Ar)Ar("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function he(...n){n=Tp(n);let t="THREE."+n.shift();if(Ar)Ar("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Os(...n){let t=n.join(" ");t in od||(od[t]=!0,ae(...n))}function Ap(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Rp={[fc]:dc,[pc]:Er,[mc]:yc,[wr]:gc,[dc]:fc,[Er]:pc,[yc]:mc,[gc]:wr},Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,_o=Math.PI/180,Rr=180/Math.PI;function Ai(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function de(n,t,e){return Math.max(t,Math.min(e,n))}function Lh(n,t){return(n%t+t)%t}function Oy(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function By(n,t,e){return n!==t?(e-n)/(t-n):0}function Mo(n,t,e){return(1-e)*n+e*t}function zy(n,t,e,i){return Mo(n,t,1-Math.exp(-e*i))}function Hy(n,t=1){return t-Math.abs(Lh(n,t*2)-t)}function Gy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Vy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Wy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Xy(n,t){return n+Math.random()*(t-n)}function qy(n){return n*(.5-Math.random())}function Yy(n){n!==void 0&&(ad=n);let t=ad+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $y(n){return n*_o}function Zy(n){return n*Rr}function jy(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Ky(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jy(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Qy(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),u=o((t+i)/2),f=r((t-i)/2),h=o((t-i)/2),d=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*d,a*l);break;case"YXY":n.set(c*d,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*d,a*u,a*l);break;default:ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var re={DEG2RAD:_o,RAD2DEG:Rr,generateUUID:Ai,clamp:de,euclideanModulo:Lh,mapLinear:Oy,inverseLerp:By,lerp:Mo,damp:zy,pingpong:Hy,smoothstep:Gy,smootherstep:Vy,randInt:Wy,randFloat:Xy,randFloatSpread:qy,seededRandom:Yy,degToRad:$y,radToDeg:Zy,isPowerOfTwo:jy,ceilPowerOfTwo:Ky,floorPowerOfTwo:Jy,setQuaternionFromProperEuler:Qy,normalize:Le,denormalize:fi},Dt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],m=r[o+2],y=r[o+3];if(f!==y||c!==h||l!==d||u!==m){let p=c*h+l*d+u*m+f*y;p<0&&(h=-h,d=-d,m=-m,y=-y,p=-p);let g=1-a;if(p<.9995){let x=Math.acos(p),_=Math.sin(x);g=Math.sin(g*x)/_,a=Math.sin(a*x)/_,c=c*g+h*a,l=l*g+d*a,u=u*g+m*a,f=f*g+y*a}else{c=c*g+h*a,l=l*g+d*a,u=u*g+m*a,f=f*g+y*a;let x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-a*d,t[e+2]=l*m+u*d+a*h-c*f,t[e+3]=u*m-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Au.copy(this).projectOnVector(t),this.sub(Au)}reflect(t){return this.sub(Au.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Au=new G,cd=new xn,pe=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],y=s[0],p=s[3],g=s[6],x=s[1],_=s[4],b=s[7],v=s[2],M=s[5],R=s[8];return r[0]=o*y+a*x+c*v,r[3]=o*p+a*_+c*M,r[6]=o*g+a*b+c*R,r[1]=l*y+u*x+f*v,r[4]=l*p+u*_+f*M,r[7]=l*g+u*b+f*R,r[2]=h*y+d*x+m*v,r[5]=h*p+d*_+m*M,r[8]=h*g+d*b+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,m=e*f+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=f*y,t[1]=(s*l-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ru.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ru.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ru.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ru=new pe,ld=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tx(){let n={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ie&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ie&&(s.r=Sr(s.r),s.g=Sr(s.g),s.b=Sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[To]:{primaries:t,whitePoint:i,transfer:Ao,toXYZ:ld,fromXYZ:ud,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:Ie,toXYZ:ld,fromXYZ:ud,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}var xe=tx();function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ar,vc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ar===void 0&&(ar=Ro("canvas")),ar.width=t.width,ar.height=t.height;let s=ar.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ar}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ro("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yi(e[i]/255)*255):e[i]=Yi(e[i]);return{data:e,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ex=0,Cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cu(s[o].image)):r.push(Cu(s[o]))}else r=Cu(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Cu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}var nx=0,Iu=new G,Mn=class n extends Ci{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ti,s=Ti,r=_n,o=Ts,a=ri,c=Wn,l=n.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ai(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ae(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Sh;Mn.DEFAULT_ANISOTROPY=1;var Pe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],y=c[2],p=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,b=(d+1)/2,v=(g+1)/2,M=(u+h)/4,R=(f+y)/4,S=(m+p)/4;return _>b&&_>v?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=M/i,r=R/i):b>v?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=S/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=R/r,s=S/r),this.set(i,s,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(f-y)/x,this.z=(h-u)/x,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends Ci{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Mn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends _c{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Io=class extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mc=class extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ve=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,c,l,u,f,h,d,m,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,f,h,d,m,y,p)}set(t,e,i,s,r,o,a,c,l,u,f,h,d,m,y,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=y,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/cr.setFromMatrixColumn(t,0).length(),r=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,m=a*u,y=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-y*l,e[9]=-a*c,e[2]=y-h*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,m=l*u,y=l*f;e[0]=h+y*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=y+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,m=l*u,y=l*f;e[0]=h-y*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=y-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,m=a*u,y=a*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+y,e[1]=c*f,e[5]=y*l+h,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=y-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-y*f}else if(t.order==="XZY"){let h=o*c,d=o*l,m=a*c,y=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+y,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=y*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ix,t,sx)}lookAt(t,e,i){let s=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),ls.crossVectors(i,qn),ls.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),ls.crossVectors(i,qn)),ls.normalize(),ka.crossVectors(qn,ls),s[0]=ls.x,s[4]=ka.x,s[8]=qn.x,s[1]=ls.y,s[5]=ka.y,s[9]=qn.y,s[2]=ls.z,s[6]=ka.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],y=i[6],p=i[10],g=i[14],x=i[3],_=i[7],b=i[11],v=i[15],M=s[0],R=s[4],S=s[8],T=s[12],P=s[1],N=s[5],B=s[9],O=s[13],F=s[2],D=s[6],z=s[10],W=s[14],tt=s[3],K=s[7],j=s[11],X=s[15];return r[0]=o*M+a*P+c*F+l*tt,r[4]=o*R+a*N+c*D+l*K,r[8]=o*S+a*B+c*z+l*j,r[12]=o*T+a*O+c*W+l*X,r[1]=u*M+f*P+h*F+d*tt,r[5]=u*R+f*N+h*D+d*K,r[9]=u*S+f*B+h*z+d*j,r[13]=u*T+f*O+h*W+d*X,r[2]=m*M+y*P+p*F+g*tt,r[6]=m*R+y*N+p*D+g*K,r[10]=m*S+y*B+p*z+g*j,r[14]=m*T+y*O+p*W+g*X,r[3]=x*M+_*P+b*F+v*tt,r[7]=x*R+_*N+b*D+v*K,r[11]=x*S+_*B+b*z+v*j,r[15]=x*T+_*O+b*W+v*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],y=t[7],p=t[11],g=t[15],x=c*d-l*h,_=a*d-l*f,b=a*h-c*f,v=o*d-l*u,M=o*h-c*u,R=o*f-a*u;return e*(y*x-p*_+g*b)-i*(m*x-p*v+g*M)+s*(m*_-y*v+g*R)-r*(m*b-y*M+p*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],y=t[13],p=t[14],g=t[15],x=e*a-i*o,_=e*c-s*o,b=e*l-r*o,v=i*c-s*a,M=i*l-r*a,R=s*l-r*c,S=u*y-f*m,T=u*p-h*m,P=u*g-d*m,N=f*p-h*y,B=f*g-d*y,O=h*g-d*p,F=x*O-_*B+b*N+v*P-M*T+R*S;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/F;return t[0]=(a*O-c*B+l*N)*D,t[1]=(s*B-i*O-r*N)*D,t[2]=(y*R-p*M+g*v)*D,t[3]=(h*M-f*R-d*v)*D,t[4]=(c*P-o*O-l*T)*D,t[5]=(e*O-s*P+r*T)*D,t[6]=(p*b-m*R-g*_)*D,t[7]=(u*R-h*b+d*_)*D,t[8]=(o*B-a*P+l*S)*D,t[9]=(i*P-e*B-r*S)*D,t[10]=(m*M-y*b+g*x)*D,t[11]=(f*b-u*M-d*x)*D,t[12]=(a*T-o*N-c*S)*D,t[13]=(e*N-i*T+s*S)*D,t[14]=(y*_-m*v-p*x)*D,t[15]=(u*v-f*_+h*x)*D,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,m=r*f,y=o*u,p=o*f,g=a*f,x=c*l,_=c*u,b=c*f,v=i.x,M=i.y,R=i.z;return s[0]=(1-(y+g))*v,s[1]=(d+b)*v,s[2]=(m-_)*v,s[3]=0,s[4]=(d-b)*M,s[5]=(1-(h+g))*M,s[6]=(p+x)*M,s[7]=0,s[8]=(m+_)*R,s[9]=(p-x)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),c=cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);let l=1/o,u=1/a,f=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,e.setFromRotationMatrix(li),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=di,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s),m,y;if(c)m=r/(o-r),y=o*r/(o-r);else if(a===di)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Tr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=di,c=!1){let l=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),d=-(i+s)/(i-s),m,y;if(c)m=1/(o-r),y=o/(o-r);else if(a===di)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===Tr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},cr=new G,li=new ve,ix=new G(0,0,0),sx=new G(1,1,1),ls=new G,ka=new G,qn=new G,hd=new ve,fd=new xn,Ii=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-de(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fd.setFromEuler(this),this.setFromQuaternion(fd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rx=0,dd=new G,lr=new xn,Gi=new ve,Oa=new G,fo=new G,ox=new G,ax=new xn,pd=new G(1,0,0),md=new G(0,1,0),gd=new G(0,0,1),yd={type:"added"},cx={type:"removed"},ur={type:"childadded",child:null},Pu={type:"childremoved",child:null},Ge=class n extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new G,e=new Ii,i=new xn,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new pe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(pd,t)}rotateY(t){return this.rotateOnAxis(md,t)}rotateZ(t){return this.rotateOnAxis(gd,t)}translateOnAxis(t,e){return dd.copy(t).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pd,t)}translateY(t){return this.translateOnAxis(md,t)}translateZ(t){return this.translateOnAxis(gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oa.copy(t):Oa.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(fo,Oa,this.up):Gi.lookAt(Oa,fo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(Gi),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yd),ur.child=t,this.dispatchEvent(ur),ur.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cx),Pu.child=t,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yd),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,ox),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,ax,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new G(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ie=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},lx={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),g=this._getHandJoint(l,y);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ie;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Lu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=Lh(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Lu(o,r,t+1/3),this.g=Lu(o,r,t),this.b=Lu(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ae("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let i=Cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return xe.workingToColorSpace(Cn.copy(this),t),Math.round(de(Cn.r*255,0,255))*65536+Math.round(de(Cn.g*255,0,255))*256+Math.round(de(Cn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(Cn.copy(this),e);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=$e){xe.workingToColorSpace(Cn.copy(this),t);let e=Cn.r,i=Cn.g,s=Cn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(Ba);let i=Mo(us.h,Ba.h,e),s=Mo(us.s,Ba.s,e),r=Mo(us.l,Ba.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new qt;qt.NAMES=Cp;var Po=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$i=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ui=new G,Vi=new G,Nu=new G,Wi=new G,hr=new G,fr=new G,xd=new G,Du=new G,Fu=new G,Uu=new G,ku=new Pe,Ou=new Pe,Bu=new Pe,ps=class n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ui.subVectors(t,e),s.cross(ui);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ui.subVectors(s,e),Vi.subVectors(i,e),Nu.subVectors(t,e);let o=ui.dot(ui),a=ui.dot(Vi),c=ui.dot(Nu),l=Vi.dot(Vi),u=Vi.dot(Nu),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wi.x),c.addScaledVector(o,Wi.y),c.addScaledVector(a,Wi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return ku.setScalar(0),Ou.setScalar(0),Bu.setScalar(0),ku.fromBufferAttribute(t,e),Ou.fromBufferAttribute(t,i),Bu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ku,r.x),o.addScaledVector(Ou,r.y),o.addScaledVector(Bu,r.z),o}static isFrontFacing(t,e,i,s){return ui.subVectors(i,e),Vi.subVectors(t,e),ui.cross(Vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ui.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;hr.subVectors(s,i),fr.subVectors(r,i),Du.subVectors(t,i);let c=hr.dot(Du),l=fr.dot(Du);if(c<=0&&l<=0)return e.copy(i);Fu.subVectors(t,s);let u=hr.dot(Fu),f=fr.dot(Fu);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(hr,o);Uu.subVectors(t,r);let d=hr.dot(Uu),m=fr.dot(Uu);if(m>=0&&d<=m)return e.copy(r);let y=d*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(fr,a);let p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return xd.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(xd,a);let g=1/(p+y+h);return o=y*g,a=h*g,e.copy(i).addScaledVector(hr,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ue=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),za.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(t.matrixWorld),this.union(za)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),Ha.subVectors(this.max,po),dr.subVectors(t.a,po),pr.subVectors(t.b,po),mr.subVectors(t.c,po),hs.subVectors(pr,dr),fs.subVectors(mr,pr),Ds.subVectors(dr,mr);let e=[0,-hs.z,hs.y,0,-fs.z,fs.y,0,-Ds.z,Ds.y,hs.z,0,-hs.x,fs.z,0,-fs.x,Ds.z,0,-Ds.x,-hs.y,hs.x,0,-fs.y,fs.x,0,-Ds.y,Ds.x,0];return!zu(e,dr,pr,mr,Ha)||(e=[1,0,0,0,1,0,0,0,1],!zu(e,dr,pr,mr,Ha))?!1:(Ga.crossVectors(hs,fs),e=[Ga.x,Ga.y,Ga.z],zu(e,dr,pr,mr,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xi=[new G,new G,new G,new G,new G,new G,new G,new G],hi=new G,za=new Ue,dr=new G,pr=new G,mr=new G,hs=new G,fs=new G,Ds=new G,po=new G,Ha=new G,Ga=new G,Fs=new G;function zu(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fs.fromArray(n,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),c=t.dot(Fs),l=e.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var rn=new G,Va=new Dt,ux=0,Te=class extends Ci{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ux++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=class extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var No=class extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Zt=class extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}},hx=new Ue,mo=new G,Hu=new G,Vn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hx.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);let e=mo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(mo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(Hu)),this.expandByPoint(mo.copy(t.center).sub(Hu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fx=0,ei=new ve,Gu=new Ge,gr=new G,Yn=new Ue,go=new Ue,gn=new G,ue=class n extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uy(t)?No:Lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return Gu.lookAt(t),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Yn.min,go.min),Yn.expandByPoint(gn),gn.addVectors(Yn.max,go.max),Yn.expandByPoint(gn)):(Yn.expandByPoint(go.min),Yn.expandByPoint(go.max))}Yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gn.fromBufferAttribute(a,l),c&&(gr.fromBufferAttribute(t,l),gn.add(gr)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Te(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new G,c[S]=new G;let l=new G,u=new G,f=new G,h=new Dt,d=new Dt,m=new Dt,y=new G,p=new G;function g(S,T,P){l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,P),u.sub(l),f.sub(l),d.sub(h),m.sub(h);let N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(N),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(N),a[S].add(y),a[T].add(y),a[P].add(y),c[S].add(p),c[T].add(p),c[P].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let S=0,T=x.length;S<T;++S){let P=x[S],N=P.start,B=P.count;for(let O=N,F=N+B;O<F;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let _=new G,b=new G,v=new G,M=new G;function R(S){v.fromBufferAttribute(s,S),M.copy(v);let T=a[S];_.copy(T),_.sub(v.multiplyScalar(v.dot(T))).normalize(),b.crossVectors(M,T);let N=b.dot(c[S])<0?-1:1;o.setXYZW(S,_.x,_.y,_.z,N)}for(let S=0,T=x.length;S<T;++S){let P=x[S],N=P.start,B=P.count;for(let O=N,F=N+B;O<F;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,f=new G;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),y=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,m=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let g=0;g<u;g++)h[m++]=l[d++]}return new Te(h,u,f)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Do=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Fn=new G,ni=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vu=new G,dx=new G,px=new pe,$n=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Vu.subVectors(i,e).cross(dx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Vu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||px.getNormalMatrix(t),s=this.coplanarPoint(Vu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},mx=0,pi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Gr,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hc,this.stencilZFail=hc,this.stencilZPass=hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ae(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ae(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new $n().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Dt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qi=new G,Wu=new G,Wa=new G,Xa=new G,zs=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Wu.copy(t).add(e).multiplyScalar(.5),Wa.copy(e).sub(t).normalize(),Xa.copy(this.origin).sub(Wu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wa),a=Xa.dot(this.direction),c=-Xa.dot(Wa),l=Xa.lengthSq(),u=Math.abs(1-o*o),f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=r*u,f>=0)if(h>=-m)if(h<=m){let y=1/u;f*=y,h*=y,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wu).addScaledVector(Wa,h),d}intersectSphere(t,e){if(t.radius<0)return null;qi.subVectors(t.center,this.origin);let i=qi.dot(this.direction),s=qi.dot(qi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,m=e.x-o.x,y=e.y-o.y,p=e.z-o.z,g=i.x-o.x,x=i.y-o.y,_=i.z-o.z,b=Math.abs(c),v=Math.abs(l),M=Math.abs(u),R,S,T,P,N,B,O,F,D,z,W,tt;if(b>=v&&b>=M?(T=c,B=f,D=m,tt=g,c>=0?(R=l,S=u,P=h,N=d,O=y,F=p,z=x,W=_):(R=u,S=l,P=d,N=h,O=p,F=y,z=_,W=x)):v>=M?(T=l,B=h,D=y,tt=x,l>=0?(R=u,S=c,P=d,N=f,O=p,F=m,z=_,W=g):(R=c,S=u,P=f,N=d,O=m,F=p,z=g,W=_)):(T=u,B=d,D=p,tt=_,u>=0?(R=c,S=l,P=f,N=h,O=m,F=y,z=g,W=x):(R=l,S=c,P=h,N=f,O=y,F=m,z=x,W=g)),T===0)return null;let K=R/T,j=S/T,X=1/T,St=P-K*B,Et=N-j*B,gt=O-K*D,xt=F-j*D,Ct=z-K*tt,st=W-j*tt,ht=Ct*xt-st*gt,Mt=St*st-Et*Ct,Bt=gt*Et-xt*St;if(s){if(ht<0||Mt<0||Bt<0)return null}else if((ht<0||Mt<0||Bt<0)&&(ht>0||Mt>0||Bt>0))return null;let kt=ht+Mt+Bt;if(kt===0)return null;let q=X*(ht*B+Mt*D+Bt*tt);return(kt>0?q<0:q>0)?null:this.at(q/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bd=new ve,Us=new zs,qa=new Vn,vd=new G,Ya=new G,$a=new G,Za=new G,Xu=new G,ja=new G,_d=new G,Ka=new G,ce=class extends Ge{constructor(t=new ue,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ja.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Xu.fromBufferAttribute(f,t),o?ja.addScaledVector(Xu,u):ja.addScaledVector(Xu.sub(e),u))}e.add(ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(qa.containsPoint(Us.origin)===!1&&(Us.intersectSphere(qa,vd)===null||Us.origin.distanceToSquared(vd)>(t.far-t.near)**2))&&(bd.copy(r).invert(),Us.copy(t.ray).applyMatrix4(bd),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let p=h[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,v=_;b<v;b+=3){let M=a.getX(b),R=a.getX(b+1),S=a.getX(b+2);s=Ja(this,g,t,i,l,u,f,M,R,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let x=a.getX(p),_=a.getX(p+1),b=a.getX(p+2);s=Ja(this,o,t,i,l,u,f,x,_,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let p=h[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),_=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,v=_;b<v;b+=3){let M=b,R=b+1,S=b+2;s=Ja(this,g,t,i,l,u,f,M,R,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let p=m,g=y;p<g;p+=3){let x=p,_=p+1,b=p+2;s=Ja(this,o,t,i,l,u,f,x,_,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function gx(n,t,e,i,s,r,o,a){let c;if(t.side===kn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ws,a),c===null)return null;Ka.copy(a),Ka.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ka);return l<e.near||l>e.far?null:{distance:l,point:Ka.clone(),object:n}}function Ja(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ya),n.getVertexPosition(c,$a),n.getVertexPosition(l,Za);let u=gx(n,t,e,i,Ya,$a,Za,_d);if(u){let f=new G;ps.getBarycoord(_d,Ya,$a,Za,f),s&&(u.uv=ps.getInterpolatedAttribute(s,a,c,l,f,new Dt)),r&&(u.uv1=ps.getInterpolatedAttribute(r,a,c,l,f,new Dt)),o&&(u.normal=ps.getInterpolatedAttribute(o,a,c,l,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new G,materialIndex:0};ps.getNormal(Ya,$a,Za,h.normal),u.face=h,u.barycoord=f}return u}var Fo=class extends Mn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=yn,u=yn,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lr=class extends Te{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},yr=new ve,Md=new ve,Qa=[],Sd=new Ue,yx=new ve,yo=new ce,xo=new Vn,ii=class extends ce{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yr),Sd.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(Sd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,yr),xo.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(xo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),t.ray.intersectsSphere(xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),Md.multiplyMatrices(i,yr),yo.matrixWorld=Md,yo.raycast(t,Qa);for(let o=0,a=Qa.length;o<a;o++){let c=Qa[o];c.instanceId=r,c.object=this,e.push(c)}Qa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fo(new Float32Array(s*this.count),s,this.count,tl,si));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new Vn,xx=new Dt(.5,.5),tc=new G,Nr=class{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],y=r[9],p=r[10],g=r[11],x=r[12],_=r[13],b=r[14],v=r[15];if(s[0].setComponents(l-o,d-u,g-m,v-x).normalize(),s[1].setComponents(l+o,d+u,g+m,v+x).normalize(),s[2].setComponents(l+a,d+f,g+y,v+_).normalize(),s[3].setComponents(l-a,d-f,g-y,v-_).normalize(),i)s[4].setComponents(c,h,p,b).normalize(),s[5].setComponents(l-c,d-h,g-p,v-b).normalize();else if(s[4].setComponents(l-c,d-h,g-p,v-b).normalize(),e===di)s[5].setComponents(l+c,d+h,g+p,v+b).normalize();else if(e===Tr)s[5].setComponents(c,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);let e=xx.distanceTo(t.center);return ks.radius=.7071067811865476+e,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(tc.x=s.normal.x>0?t.max.x:t.min.x,tc.y=s.normal.y>0?t.max.y:t.min.y,tc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dr=class extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sc=new G,wc=new G,wd=new ve,bo=new zs,ec=new Vn,qu=new G,Ed=new G,Ec=class extends Ge{constructor(t=new ue,e=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Sc.fromBufferAttribute(e,s-1),wc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Sc.distanceTo(wc);t.setAttribute("lineDistance",new Zt(i,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(s),ec.radius+=r,t.ray.intersectsSphere(ec)===!1)return;wd.copy(s).invert(),bo.copy(t.ray).applyMatrix4(wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let g=u.getX(y),x=u.getX(y+1),_=nc(this,t,bo,c,g,x,y);_&&e.push(_)}if(this.isLineLoop){let y=u.getX(m-1),p=u.getX(d),g=nc(this,t,bo,c,y,p,m-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let y=d,p=m-1;y<p;y+=l){let g=nc(this,t,bo,c,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=nc(this,t,bo,c,m-1,d,m-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nc(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Sc.fromBufferAttribute(a,s),wc.fromBufferAttribute(a,r),e.distanceSqToSegment(Sc,wc,qu,Ed)>i)return;qu.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(qu);if(!(l<t.near||l>t.far))return{distance:l,point:Ed.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Td=new G,Ad=new G,Uo=class extends Ec{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Td.fromBufferAttribute(e,s),Ad.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Td.distanceTo(Ad);t.setAttribute("lineDistance",new Zt(i,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hs=class extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rd=new ve,ih=new zs,ic=new Vn,sc=new G,Fr=class extends Ge{constructor(t=new ue,e=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(s),ic.radius+=r,t.ray.intersectsSphere(ic)===!1)return;Rd.copy(s).invert(),ih.copy(t.ray).applyMatrix4(Rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=h,y=d;m<y;m++){let p=l.getX(m);sc.fromBufferAttribute(f,p),Cd(sc,p,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,y=d;m<y;m++)sc.fromBufferAttribute(f,m),Cd(sc,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cd(n,t,e,i,s,r,o){let a=ih.distanceSqToPoint(n);if(a<e){let c=new G;ih.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ko=class extends Mn{constructor(t=[],e=Es,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ms=class extends Mn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gs=class extends Mn{constructor(t,e,i=yi,s,r,o,a=yn,c=yn,l,u=Ri,f=1){if(u!==Ri&&u!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Tc=class extends gs{constructor(t,e=yi,i=Es,s,r,o=yn,a=yn,c,l=Ri){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Oo=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ae=class n extends ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function m(y,p,g,x,_,b,v,M,R,S,T){let P=b/R,N=v/S,B=b/2,O=v/2,F=M/2,D=R+1,z=S+1,W=0,tt=0,K=new G;for(let j=0;j<z;j++){let X=j*N-O;for(let St=0;St<D;St++){let Et=St*P-B;K[y]=Et*x,K[p]=X*_,K[g]=F,l.push(K.x,K.y,K.z),K[y]=0,K[p]=0,K[g]=M>0?1:-1,u.push(K.x,K.y,K.z),f.push(St/R),f.push(1-j/S),W+=1}}for(let j=0;j<S;j++)for(let X=0;X<R;X++){let St=h+X+D*j,Et=h+X+D*(j+1),gt=h+(X+1)+D*(j+1),xt=h+(X+1)+D*j;c.push(St,Et,xt),c.push(Et,gt,xt),tt+=6}a.addGroup(d,tt,T),d+=tt,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var In=class n extends ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new G,u=new Dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=i+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ve=class n extends ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],m=0,y=[],p=i/2,g=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function x(){let b=new G,v=new G,M=0,R=(e-t)/i;for(let S=0;S<=r;S++){let T=[],P=S/r,N=P*(e-t)+t;for(let B=0;B<=s;B++){let O=B/s,F=O*c+a,D=Math.sin(F),z=Math.cos(F);v.x=N*D,v.y=-P*i+p,v.z=N*z,f.push(v.x,v.y,v.z),b.set(D,R,z).normalize(),h.push(b.x,b.y,b.z),d.push(O,1-P),T.push(m++)}y.push(T)}for(let S=0;S<s;S++)for(let T=0;T<r;T++){let P=y[T][S],N=y[T+1][S],B=y[T+1][S+1],O=y[T][S+1];(t>0||T!==0)&&(u.push(P,N,O),M+=3),(e>0||T!==r-1)&&(u.push(N,B,O),M+=3)}l.addGroup(g,M,0),g+=M}function _(b){let v=m,M=new Dt,R=new G,S=0,T=b===!0?t:e,P=b===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*P,0),h.push(0,P,0),d.push(.5,.5),m++;let N=m;for(let B=0;B<=s;B++){let F=B/s*c+a,D=Math.cos(F),z=Math.sin(F);R.x=T*z,R.y=p*P,R.z=T*D,f.push(R.x,R.y,R.z),h.push(0,P,0),M.x=D*.5+.5,M.y=z*.5*P+.5,d.push(M.x,M.y),m++}for(let B=0;B<s;B++){let O=v+B,F=N+B;b===!0?u.push(F,F+1,O):u.push(F+1,F,O),S+=3}l.addGroup(g,S,b===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bo=class n extends Ve{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zo=class n extends ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new G,b=new G,v=new G;for(let M=0;M<e.length;M+=3)d(e[M+0],_),d(e[M+1],b),d(e[M+2],v),c(_,b,v,x)}function c(x,_,b,v){let M=v+1,R=[];for(let S=0;S<=M;S++){R[S]=[];let T=x.clone().lerp(b,S/M),P=_.clone().lerp(b,S/M),N=M-S;for(let B=0;B<=N;B++)B===0&&S===M?R[S][B]=T:R[S][B]=T.clone().lerp(P,B/N)}for(let S=0;S<M;S++)for(let T=0;T<2*(M-S)-1;T++){let P=Math.floor(T/2);T%2===0?(h(R[S][P+1]),h(R[S+1][P]),h(R[S][P])):(h(R[S][P+1]),h(R[S+1][P+1]),h(R[S+1][P]))}}function l(x){let _=new G;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(x),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function u(){let x=new G;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let b=p(x)/2/Math.PI+.5,v=g(x)/Math.PI+.5;o.push(b,1-v)}m(),f()}function f(){for(let x=0;x<o.length;x+=6){let _=o[x+0],b=o[x+2],v=o[x+4],M=Math.max(_,b,v),R=Math.min(_,b,v);M>.9&&R<.1&&(_<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),v<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function d(x,_){let b=x*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function m(){let x=new G,_=new G,b=new G,v=new G,M=new Dt,R=new Dt,S=new Dt;for(let T=0,P=0;T<r.length;T+=9,P+=6){x.set(r[T+0],r[T+1],r[T+2]),_.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),M.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),S.set(o[P+4],o[P+5]),v.copy(x).add(_).add(b).divideScalar(3);let N=p(v);y(M,P+0,x,N),y(R,P+2,_,N),y(S,P+4,b,N)}}function y(x,_,b,v){v<0&&x.x===1&&(o[_]=x.x-1),b.x===0&&b.z===0&&(o[_]=v/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},Ho=class n extends zo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Dt:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new G,s=[],r=[],o=[],a=new G,c=new ve;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(de(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(de(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ur=class extends Zn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Dt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ac=class extends Ur{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Nh(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Id=new G,Pd=new G,Yu=new Nh,$u=new Nh,Zu=new Nh,Gs=class extends Zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new G){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Pd.subVectors(s[0],s[1]).add(s[0]),l=Pd);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Id.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Id),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),m<1e-4&&(m=y),p<1e-4&&(p=y),Yu.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,y,p),$u.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,y,p),Zu.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,y,p)}else this.curveType==="catmullrom"&&(Yu.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),$u.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Zu.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(Yu.calc(c),$u.calc(c),Zu.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ld(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function bx(n,t){let e=1-n;return e*e*t}function vx(n,t){return 2*(1-n)*n*t}function _x(n,t){return n*n*t}function So(n,t,e,i){return bx(n,t)+vx(n,e)+_x(n,i)}function Mx(n,t){let e=1-n;return e*e*e*t}function Sx(n,t){let e=1-n;return 3*e*e*n*t}function wx(n,t){return 3*(1-n)*n*n*t}function Ex(n,t){return n*n*n*t}function wo(n,t,e,i,s){return Mx(n,t)+Sx(n,e)+wx(n,i)+Ex(n,s)}var Go=class extends Zn{constructor(t=new Dt,e=new Dt,i=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Dt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wo(t,s.x,r.x,o.x,a.x),wo(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rc=class extends Zn{constructor(t=new G,e=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wo(t,s.x,r.x,o.x,a.x),wo(t,s.y,r.y,o.y,a.y),wo(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vo=class extends Zn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends Zn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends Zn{constructor(t=new Dt,e=new Dt,i=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Dt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(So(t,s.x,r.x,o.x),So(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends Zn{constructor(t=new G,e=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new G){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(So(t,s.x,r.x,o.x),So(t,s.y,r.y,o.y),So(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Ld(a,c.x,l.x,u.x,f.x),Ld(a,c.y,l.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:Ac,CatmullRomCurve3:Gs,CubicBezierCurve:Go,CubicBezierCurve3:Rc,EllipseCurve:Ur,LineCurve:Vo,LineCurve3:Cc,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:Xo,SplineCurve:qo}),Pc=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}},Vs=class extends Pc{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Vo(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Wo(this.currentPoint.clone(),new Dt(t,e),new Dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Go(this.currentPoint.clone(),new Dt(t,e),new Dt(i,s),new Dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new qo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){let l=new Ur(t,e,i,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ln=class extends Vs{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Vs().fromJSON(s))}return this}};function Tx(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Ip(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Px(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=n[h],m=n[h+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Yo(r,o,e,a,c,l,0),o}function Ip(n,t,e,i,s){let r;if(s===Gx(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Nd(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Nd(o/i|0,n[o],n[o+1],r);return r&&kr(r,r.next)&&(Zo(r),r=r.next),r}function Ws(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(kr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Zo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Yo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Ux(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Rx(n,i,s,r):Ax(n)){t.push(c.i,n.i,l.i),Zo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Cx(Ws(n),t),Yo(n,t,e,i,s,r,2)):o===2&&Ix(n,t,e,i,s,r):Yo(Ws(n),t,e,i,s,r,1);break}}}function Ax(n){let t=n.prev,e=n,i=n.next;if(Ze(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&vo(s,a,r,c,o,l,m.x,m.y)&&Ze(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Rx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ze(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),m=Math.min(u,f,h),y=Math.max(a,c,l),p=Math.max(u,f,h),g=sh(d,m,t,e,i),x=sh(y,p,t,e,i),_=n.prevZ,b=n.nextZ;for(;_&&_.z>=g&&b&&b.z<=x;){if(_.x>=d&&_.x<=y&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&vo(a,u,c,f,l,h,_.x,_.y)&&Ze(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=d&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&vo(a,u,c,f,l,h,b.x,b.y)&&Ze(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=y&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&vo(a,u,c,f,l,h,_.x,_.y)&&Ze(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=x;){if(b.x>=d&&b.x<=y&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&vo(a,u,c,f,l,h,b.x,b.y)&&Ze(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Cx(n,t){let e=n;do{let i=e.prev,s=e.next.next;!kr(i,s)&&Lp(i,e,e.next,s)&&$o(i,s)&&$o(s,i)&&(t.push(i.i,e.i,s.i),Zo(e),Zo(e.next),e=n=s),e=e.next}while(e!==n);return Ws(e)}function Ix(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bx(o,a)){let c=Np(o,a);o=Ws(o,o.next),c=Ws(c,c.next),Yo(o,t,e,i,s,r,0),Yo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Px(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Ip(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Ox(l))}s.sort(Lx);for(let r=0;r<s.length;r++)e=Nx(s[r],e);return e}function Lx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Nx(n,t){let e=Dx(n,t);if(!e)return t;let i=Np(e,n);return Ws(i,i.next),Ws(e,e.next)}function Dx(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(kr(n,e))return e;do{if(kr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Pp(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);$o(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Fx(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Fx(n,t){return Ze(n.prev,n,t.prev)<0&&Ze(t.next,n,n.next)<0}function Ux(n,t,e,i){let s=n;do s.z===0&&(s.z=sh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,kx(s)}function kx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function sh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ox(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Pp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function vo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Pp(n,t,e,i,s,r,o,a)}function Bx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!zx(n,t)&&($o(n,t)&&$o(t,n)&&Hx(n,t)&&(Ze(n.prev,n,t.prev)||Ze(n,t.prev,t))||kr(n,t)&&Ze(n.prev,n,n.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function kr(n,t){return n.x===t.x&&n.y===t.y}function Lp(n,t,e,i){let s=oc(Ze(n,t,e)),r=oc(Ze(n,t,i)),o=oc(Ze(e,i,n)),a=oc(Ze(e,i,t));return!!(s!==r&&o!==a||s===0&&rc(n,e,t)||r===0&&rc(n,i,t)||o===0&&rc(e,n,i)||a===0&&rc(e,t,i))}function rc(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function oc(n){return n>0?1:n<0?-1:0}function zx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Lp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function $o(n,t){return Ze(n.prev,n,n.next)<0?Ze(n,t,n.next)>=0&&Ze(n,n.prev,t)>=0:Ze(n,t,n.prev)<0||Ze(n,n.next,t)<0}function Hx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Np(n,t){let e=rh(n.i,n.x,n.y),i=rh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Nd(n,t,e,i){let s=rh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Zo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var oh=class{static triangulate(t,e,i=2){return Tx(t,e,i)}},Hn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Dd(t),Fd(i,t);let o=t.length;e.forEach(Dd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Fd(i,e[c]);let a=oh.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Dd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Fd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var mi=class n extends ue{constructor(t=new ln([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Vx,_,b=!1,v,M,R,S;if(g){_=g.getSpacedPoints(u),b=!0,h=!1;let Z=g.isCatmullRomCurve3?g.closed:!1;v=g.computeFrenetFrames(u,Z),M=new G,R=new G,S=new G}h||(p=0,d=0,m=0,y=0);let T=a.extractPoints(l),P=T.shape,N=T.holes;if(!Hn.isClockWise(P)){P=P.reverse();for(let Z=0,J=N.length;Z<J;Z++){let nt=N[Z];Hn.isClockWise(nt)&&(N[Z]=nt.reverse())}}function O(Z){let nt=10000000000000001e-36,ct=Z[0];for(let pt=1;pt<=Z.length;pt++){let It=pt%Z.length,Lt=Z[It],Ft=Lt.x-ct.x,zt=Lt.y-ct.y,$=Ft*Ft+zt*zt,oe=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(ct.x),Math.abs(ct.y)),Yt=nt*oe*oe;if($<=Yt){Z.splice(It,1),pt--;continue}ct=Lt}}O(P),N.forEach(O);let F=N.length,D=P;for(let Z=0;Z<F;Z++){let J=N[Z];P=P.concat(J)}function z(Z,J,nt){return J||he("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(J,nt)}let W=P.length;function tt(Z,J,nt){let ct,pt,It,Lt=Z.x-J.x,Ft=Z.y-J.y,zt=nt.x-Z.x,$=nt.y-Z.y,oe=Lt*Lt+Ft*Ft,Yt=Lt*$-Ft*zt;if(Math.abs(Yt)>Number.EPSILON){let H=Math.sqrt(oe),A=Math.sqrt(zt*zt+$*$),rt=J.x-Ft/H,dt=J.y+Lt/H,_t=nt.x-$/A,V=nt.y+zt/A,w=((_t-rt)*$-(V-dt)*zt)/(Lt*$-Ft*zt);ct=rt+Lt*w-Z.x,pt=dt+Ft*w-Z.y;let E=ct*ct+pt*pt;if(E<=2)return new Dt(ct,pt);It=Math.sqrt(E/2)}else{let H=!1;Lt>Number.EPSILON?zt>Number.EPSILON&&(H=!0):Lt<-Number.EPSILON?zt<-Number.EPSILON&&(H=!0):Math.sign(Ft)===Math.sign($)&&(H=!0),H?(ct=-Ft,pt=Lt,It=Math.sqrt(oe)):(ct=Lt,pt=Ft,It=Math.sqrt(oe/2))}return new Dt(ct/It,pt/It)}let K=[];for(let Z=0,J=D.length,nt=J-1,ct=Z+1;Z<J;Z++,nt++,ct++)nt===J&&(nt=0),ct===J&&(ct=0),K[Z]=tt(D[Z],D[nt],D[ct]);let j=[],X,St=K.concat();for(let Z=0,J=F;Z<J;Z++){let nt=N[Z];X=[];for(let ct=0,pt=nt.length,It=pt-1,Lt=ct+1;ct<pt;ct++,It++,Lt++)It===pt&&(It=0),Lt===pt&&(Lt=0),X[ct]=tt(nt[ct],nt[It],nt[Lt]);j.push(X),St=St.concat(X)}let Et;if(p===0)Et=Hn.triangulateShape(D,N);else{let Z=[],J=[];for(let nt=0;nt<p;nt++){let ct=nt/p,pt=d*Math.cos(ct*Math.PI/2),It=m*Math.sin(ct*Math.PI/2)+y;for(let Lt=0,Ft=D.length;Lt<Ft;Lt++){let zt=z(D[Lt],K[Lt],It);Mt(zt.x,zt.y,-pt),ct===0&&Z.push(zt)}for(let Lt=0,Ft=F;Lt<Ft;Lt++){let zt=N[Lt];X=j[Lt];let $=[];for(let oe=0,Yt=zt.length;oe<Yt;oe++){let H=z(zt[oe],X[oe],It);Mt(H.x,H.y,-pt),ct===0&&$.push(H)}ct===0&&J.push($)}}Et=Hn.triangulateShape(Z,J)}let gt=Et.length,xt=m+y;for(let Z=0;Z<W;Z++){let J=h?z(P[Z],St[Z],xt):P[Z];b?(R.copy(v.normals[0]).multiplyScalar(J.x),M.copy(v.binormals[0]).multiplyScalar(J.y),S.copy(_[0]).add(R).add(M),Mt(S.x,S.y,S.z)):Mt(J.x,J.y,0)}for(let Z=1;Z<=u;Z++)for(let J=0;J<W;J++){let nt=h?z(P[J],St[J],xt):P[J];b?(R.copy(v.normals[Z]).multiplyScalar(nt.x),M.copy(v.binormals[Z]).multiplyScalar(nt.y),S.copy(_[Z]).add(R).add(M),Mt(S.x,S.y,S.z)):Mt(nt.x,nt.y,f/u*Z)}for(let Z=p-1;Z>=0;Z--){let J=Z/p,nt=d*Math.cos(J*Math.PI/2),ct=m*Math.sin(J*Math.PI/2)+y;for(let pt=0,It=D.length;pt<It;pt++){let Lt=z(D[pt],K[pt],ct);Mt(Lt.x,Lt.y,f+nt)}for(let pt=0,It=N.length;pt<It;pt++){let Lt=N[pt];X=j[pt];for(let Ft=0,zt=Lt.length;Ft<zt;Ft++){let $=z(Lt[Ft],X[Ft],ct);b?Mt($.x,$.y+_[u-1].y,_[u-1].x+nt):Mt($.x,$.y,f+nt)}}}Ct(),st();function Ct(){let Z=s.length/3;if(h){let J=0,nt=W*J;for(let ct=0;ct<gt;ct++){let pt=Et[ct];Bt(pt[2]+nt,pt[1]+nt,pt[0]+nt)}J=u+p*2,nt=W*J;for(let ct=0;ct<gt;ct++){let pt=Et[ct];Bt(pt[0]+nt,pt[1]+nt,pt[2]+nt)}}else{for(let J=0;J<gt;J++){let nt=Et[J];Bt(nt[2],nt[1],nt[0])}for(let J=0;J<gt;J++){let nt=Et[J];Bt(nt[0]+W*u,nt[1]+W*u,nt[2]+W*u)}}i.addGroup(Z,s.length/3-Z,0)}function st(){let Z=s.length/3,J=0;ht(D,J),J+=D.length;for(let nt=0,ct=N.length;nt<ct;nt++){let pt=N[nt];ht(pt,J),J+=pt.length}i.addGroup(Z,s.length/3-Z,1)}function ht(Z,J){let nt=Z.length;for(;--nt>=0;){let ct=nt,pt=nt-1;pt<0&&(pt=Z.length-1);for(let It=0,Lt=u+p*2;It<Lt;It++){let Ft=W*It,zt=W*(It+1),$=J+ct+Ft,oe=J+pt+Ft,Yt=J+pt+zt,H=J+ct+zt;kt($,oe,Yt,H)}}}function Mt(Z,J,nt){c.push(Z),c.push(J),c.push(nt)}function Bt(Z,J,nt){q(Z),q(J),q(nt);let ct=s.length/3,pt=x.generateTopUV(i,s,ct-3,ct-2,ct-1);bt(pt[0]),bt(pt[1]),bt(pt[2])}function kt(Z,J,nt,ct){q(Z),q(J),q(ct),q(J),q(nt),q(ct);let pt=s.length/3,It=x.generateSideWallUV(i,s,pt-6,pt-3,pt-2,pt-1);bt(It[0]),bt(It[1]),bt(It[3]),bt(It[1]),bt(It[2]),bt(It[3])}function q(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function bt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Wx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ic[s.type]().fromJSON(s)),new n(i,t.options)}},Vx={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new Dt(r,o),new Dt(a,c),new Dt(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],y=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Dt(o,1-c),new Dt(l,1-f),new Dt(h,1-m),new Dt(y,1-g)]:[new Dt(a,1-c),new Dt(u,1-f),new Dt(d,1-m),new Dt(p,1-g)]}};function Wx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var jo=class n extends zo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Ko=class n extends ue{constructor(t=[new Dt(0,-.5),new Dt(.5,0),new Dt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=de(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new G,h=new Dt,d=new G,m=new G,y=new G,p=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:p=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(m)}for(let x=0;x<=e;x++){let _=i+x*u*s,b=Math.sin(_),v=Math.cos(_);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*b,f.y=t[M].y,f.z=t[M].x*v,o.push(f.x,f.y,f.z),h.x=x/e,h.y=M/(t.length-1),a.push(h.x,h.y);let R=c[3*M+0]*b,S=c[3*M+1],T=c[3*M+0]*v;l.push(R,S,T)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){let b=_+x*t.length,v=b,M=b+t.length,R=b+t.length+1,S=b+1;r.push(v,M,S),r.push(R,S,M)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Pn=class n extends ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],m=[],y=[],p=[];for(let g=0;g<u;g++){let x=g*h-o;for(let _=0;_<l;_++){let b=_*f-r;m.push(b,-x,0),y.push(0,0,1),p.push(_/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let x=0;x<a;x++){let _=x+l*g,b=x+l*(g+1),v=x+1+l*(g+1),M=x+1+l*g;d.push(_,b,M),d.push(b,v,M)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Jo=class n extends ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new G,m=new Dt;for(let y=0;y<=s;y++){for(let p=0;p<=i;p++){let g=r+p/i*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}f+=h}for(let y=0;y<s;y++){let p=y*(i+1);for(let g=0;g<i;g++){let x=g+p,_=x,b=x+i+1,v=x+i+2,M=x+1;a.push(_,b,M),a.push(b,v,M)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Pi=class n extends ue{constructor(t=new ln([new Dt(0,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,m=h.holes;Hn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let x=m[p];Hn.isClockWise(x)===!0&&(m[p]=x.reverse())}let y=Hn.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let x=m[p];d=d.concat(x)}for(let p=0,g=d.length;p<g;p++){let x=d[p];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,g=y.length;p<g;p++){let x=y[p],_=x[0]+f,b=x[1]+f,v=x[2]+f;i.push(_,b,v),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Xx(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];i.push(o)}return new n(i,t.curveSegments)}};function Xx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Re=class n extends ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new G,h=new G,d=[],m=[],y=[],p=[];for(let g=0;g<=i;g++){let x=[],_=g/i,b=o+_*a,v=t*Math.cos(b),M=Math.sqrt(t*t-v*v),R=0;g===0&&o===0?R=.5/e:g===i&&c===Math.PI&&(R=-.5/e);for(let S=0;S<=e;S++){let T=S/e,P=s+T*r;f.x=-M*Math.cos(P),f.y=v,f.z=M*Math.sin(P),m.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(T+R,1-_),x.push(l++)}u.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){let _=u[g][x+1],b=u[g][x],v=u[g+1][x],M=u[g+1][x+1];(g!==0||o>0)&&d.push(_,b,M),(g!==i-1||c<Math.PI)&&d.push(b,v,M)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ln=class n extends ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new G,d=new G,m=new G;for(let y=0;y<=i;y++){let p=o+y/i*a;for(let g=0;g<=s;g++){let x=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(x),d.y=(t+e*Math.cos(p))*Math.sin(x),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(g/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=s;p++){let g=(s+1)*y+p-1,x=(s+1)*(y-1)+p-1,_=(s+1)*(y-1)+p,b=(s+1)*y+p;c.push(g,x,b),c.push(x,_,b)}this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Or=class n extends ue{constructor(t=new Xo(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,c=new G,l=new Dt,u=new G,f=[],h=[],d=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function y(){for(let _=0;_<e;_++)p(_);p(r===!1?e:0),x(),g()}function p(_){u=t.getPointAt(_/e,u);let b=o.normals[_],v=o.binormals[_];for(let M=0;M<=s;M++){let R=M/s*Math.PI*2,S=Math.sin(R),T=-Math.cos(R);c.x=T*b.x+S*v.x,c.y=T*b.y+S*v.y,c.z=T*b.z+S*v.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let b=1;b<=s;b++){let v=(s+1)*(_-1)+(b-1),M=(s+1)*_+(b-1),R=(s+1)*_+b,S=(s+1)*(_-1)+b;m.push(v,M,S),m.push(M,R,S)}}function x(){for(let _=0;_<=e;_++)for(let b=0;b<=s;b++)l.x=_/e,l.y=b/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Ic[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Qo=class extends ue{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new G,r=new G;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let m=h,y=h+d;m<y;m+=3)for(let p=0;p<3;p++){let g=a.getX(m+p),x=a.getX(m+(p+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,x),Ud(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Ud(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Zt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Ud(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}function Zs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(kd(s))s.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(kd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Nn(n){let t={};for(let e=0;e<n.length;e++){let i=Zs(n[e]);for(let s in i)t[s]=i[s]}return t}function kd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qx(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Ki={clone:Zs,merge:Nn},Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=qx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Lc=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xe=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Br=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Yc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nc=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dc=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ju(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ys=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fc=class extends ys{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=t,a=2*e-i;break;case nh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case eh:o=t,c=2*i-e;break;case nh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-e)/(s-e),y=m*m,p=y*m,g=-h*p+2*h*y-h*m,x=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*m+1,_=(-1-d)*p+(1.5+d)*y+.5*m,b=d*p-d*y;for(let v=0;v!==a;++v)r[v]=g*o[u+v]+x*o[l+v]+_*o[c+v]+b*o[f+v];return r}},Uc=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(i-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},kc=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oc=class extends ys{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(i-e)/(s-e),y=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*y+o[c+p]*m;return r}let h=a*2,d=t-1;for(let m=0;m!==a;++m){let y=o[l+m],p=o[c+m],g=d*h+m*2,x=f[g],_=f[g+1],b=t*h+m*2,v=u[b],M=u[b+1],R=jx(i,e,x,v,s);r[m]=Dp(R,y,_,M,p)}return r}};function Dp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Zx(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function jx(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=Dp(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Zx(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var jn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ju(t.settings)&&(i.settings={inTangents:xr(t.settings.inTangents,Array),outTangents:xr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Oc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Eo:e=this.InterpolantFactoryMethodDiscrete;break;case bc:e=this.InterpolantFactoryMethodLinear;break;case uc:e=this.InterpolantFactoryMethodSmooth;break;case Qu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ae("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return uc;case this.InterpolantFactoryMethodBezier:return Qu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ju(this.settings)&&(Od(this.settings.inTangents,t),Od(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(he("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(he("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){he("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){he("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ky(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){he("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===uc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*i,h=f-i,d=f+i;for(let m=0;m!==i;++m){let y=e[f+m];if(y!==e[h+m]||y!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,h=o*i;for(let d=0;d!==i;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ju(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Od(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=bc;var xs=class extends jn{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Eo;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}};Bc.prototype.ValueTypeName="color";var zc=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}};zc.prototype.ValueTypeName="number";var Hc=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ta=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends jn{constructor(t,e,i){super(t,e,i)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Eo;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends jn{constructor(t,e,i,s){super(t,e,i,s)}};Gc.prototype.ValueTypeName="vector";var Vc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fp=new Vc,Wc=class{constructor(t){this.manager=t!==void 0?t:Fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xs=class extends zr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ku=new ve,Bd=new G,zd=new G,ea=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bd),zd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ku,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Tr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Ku)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ac=new G,cc=new xn,Ei=new G,na=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ac,cc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ac,cc,Ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ac,cc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ac,cc,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new G,Hd=new Dt,Gd=new Dt,Un=class extends na{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,Hd,Gd),e.subVectors(Gd,Hd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_o*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ah=class extends ea{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0}},ia=class extends zr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},vs=class extends na{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ch=class extends ea{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var sa=class extends ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var br=-90,vr=1,Xc=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(br,vr,t,e);s.layers=this.layers,this.add(s);let r=new Un(br,vr,t,e);r.layers=this.layers,this.add(r);let o=new Un(br,vr,t,e);o.layers=this.layers,this.add(o);let a=new Un(br,vr,t,e);a.layers=this.layers,this.add(a);let c=new Un(br,vr,t,e);c.layers=this.layers,this.add(c);let l=new Un(br,vr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},qc=class extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fh="\\[\\]\\.:\\/",Kx=new RegExp("["+Fh+"]","g"),Uh="[^"+Fh+"]",Jx="[^"+Fh.replace("\\.","")+"]",Qx=/((?:WC+[\/:])*)/.source.replace("WC",Uh),tb=/(WCOD+)?/.source.replace("WCOD",Jx),eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),nb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),ib=new RegExp("^"+Qx+tb+eb+nb+"$"),sb=["material","materials","bones","map"],lh=class{constructor(t,e,i){let s=i||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},He=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(t){let e=ib.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);sb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ae("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){he("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){he("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){he("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){he("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){he("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){he("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;he("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){he("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=lh;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DT=new Float32Array(1);var Ms=class extends Do{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Vd=new ve,Ss=class{constructor(t,e,i=0,s=1/0){this.ray=new zs(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):he("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vd),this}intersectObject(t,e=!0,i=[]){return uh(t,this,i,e),i.sort(Wd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)uh(t[s],this,i,e);return i.sort(Wd),i}};function Wd(n,t){return n.distance-t.distance}function uh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)uh(r[o],t,e,!0)}}var hh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var Xd=new G,lc=new G,_r=new G,Mr=new G,Ju=new G,rb=new G,ob=new G,ra=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Xd.subVectors(t,this.start),lc.subVectors(this.end,this.start);let i=lc.dot(lc);if(i===0)return 0;let r=lc.dot(Xd)/i;return e&&(r=de(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=rb,i=ob){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;_r.subVectors(l,a),Mr.subVectors(u,c),Ju.subVectors(a,c);let f=_r.dot(_r),h=Mr.dot(Mr),d=Mr.dot(Ju);if(f<=s&&h<=s)return e.copy(a),i.copy(c),e.sub(i),e.dot(e);if(f<=s)r=0,o=d/h,o=de(o,0,1);else{let m=_r.dot(Ju);if(h<=s)o=0,r=de(-m/f,0,1);else{let y=_r.dot(Mr),p=f*h-y*y;p!==0?r=de((y*d-m*h)/p,0,1):r=0,o=(y*r+d)/h,o<0?(o=0,r=de(-m/f,0,1)):o>1&&(o=1,r=de((y-m)/f,0,1))}}return e.copy(a).addScaledVector(_r,r),i.copy(c).addScaledVector(Mr,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function kh(n,t,e,i){let s=ab(i);switch(e){case Rh:return n*t;case tl:return n*t/s.components*s.byteLength;case el:return n*t/s.components*s.byteLength;case Rs:return n*t*2/s.components*s.byteLength;case nl:return n*t*2/s.components*s.byteLength;case Ch:return n*t*3/s.components*s.byteLength;case ri:return n*t*4/s.components*s.byteLength;case il:return n*t*4/s.components*s.byteLength;case la:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ha:case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:case al:return Math.max(n,16)*Math.max(t,8)/4;case sl:case ol:return Math.max(n,8)*Math.max(t,8)/2;case cl:case ll:case hl:case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ul:case da:case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*8;case pa:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ab(n){switch(n){case Wn:case wh:return{byteLength:1,components:1};case Vr:case Eh:case xi:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case yi:case Kc:case si:return{byteLength:4,components:1};case Th:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function im(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function fb(n){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],y=f[d];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let y=f[d];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pb=`#ifdef USE_ALPHAHASH
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
#endif`,mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
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
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
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
#endif`,Mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ab=`#ifdef USE_BUMPMAP
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
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ub=`#define PI 3.141592653589793
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
} // validated`,kb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ob=`vec3 transformedNormal = objectNormal;
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
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
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
}`,e1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
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
#endif`,h1=`uniform sampler2D dfgLUT;
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
}`,f1=`
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S1=`#if defined( USE_POINTS_UV )
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
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
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
#endif`,I1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
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
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J1=`float getShadowMask() {
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
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nv=`#ifdef USE_SKINNING
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
#endif`,iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ov=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
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
#endif`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
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
}`,vv=`#if DEPTH_PACKING == 3200
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
}`,_v=`#define DISTANCE
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
}`,Mv=`#define DISTANCE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Cv=`#define LAMBERT
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
}`,Iv=`#define LAMBERT
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
}`,Pv=`#define MATCAP
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
}`,Lv=`#define MATCAP
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
}`,Nv=`#define NORMAL
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
}`,Dv=`#define NORMAL
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
}`,Fv=`#define PHONG
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
}`,Uv=`#define PHONG
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
}`,kv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
}`,Bv=`#define TOON
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
}`,zv=`#define TOON
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
}`,Hv=`uniform float size;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Vv=`#include <common>
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
}`,Wv=`uniform vec3 color;
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
}`,Xv=`uniform float rotation;
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
}`,qv=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:db,alphahash_pars_fragment:pb,alphamap_fragment:mb,alphamap_pars_fragment:gb,alphatest_fragment:yb,alphatest_pars_fragment:xb,aomap_fragment:bb,aomap_pars_fragment:vb,batching_pars_vertex:_b,batching_vertex:Mb,begin_vertex:Sb,beginnormal_vertex:wb,bsdfs:Eb,iridescence_fragment:Tb,bumpmap_pars_fragment:Ab,clipping_planes_fragment:Rb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Pb,color_fragment:Lb,color_pars_fragment:Nb,color_pars_vertex:Db,color_vertex:Fb,common:Ub,cube_uv_reflection_fragment:kb,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Bb,displacementmap_vertex:zb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Gb,colorspace_fragment:Vb,colorspace_pars_fragment:Wb,envmap_fragment:Xb,envmap_common_pars_fragment:qb,envmap_pars_fragment:Yb,envmap_pars_vertex:$b,envmap_physical_pars_fragment:r1,envmap_vertex:Zb,fog_vertex:jb,fog_pars_vertex:Kb,fog_fragment:Jb,fog_pars_fragment:Qb,gradientmap_pars_fragment:t1,lightmap_pars_fragment:e1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:a1,lights_phong_fragment:c1,lights_phong_pars_fragment:l1,lights_physical_fragment:u1,lights_physical_pars_fragment:h1,lights_fragment_begin:f1,lights_fragment_maps:d1,lights_fragment_end:p1,lightprobes_pars_fragment:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:x1,logdepthbuf_vertex:b1,map_fragment:v1,map_pars_fragment:_1,map_particle_fragment:M1,map_particle_pars_fragment:S1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:E1,morphinstance_vertex:T1,morphcolor_vertex:A1,morphnormal_vertex:R1,morphtarget_pars_vertex:C1,morphtarget_vertex:I1,normal_fragment_begin:P1,normal_fragment_maps:L1,normal_pars_fragment:N1,normal_pars_vertex:D1,normal_vertex:F1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:z1,opaque_fragment:H1,packing:G1,premultiplied_alpha_fragment:V1,project_vertex:W1,dithering_fragment:X1,dithering_pars_fragment:q1,roughnessmap_fragment:Y1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:j1,shadowmap_vertex:K1,shadowmask_pars_fragment:J1,skinbase_vertex:Q1,skinning_pars_vertex:tv,skinning_vertex:ev,skinnormal_vertex:nv,specularmap_fragment:iv,specularmap_pars_fragment:sv,tonemapping_fragment:rv,tonemapping_pars_fragment:ov,transmission_fragment:av,transmission_pars_fragment:cv,uv_pars_fragment:lv,uv_pars_vertex:uv,uv_vertex:hv,worldpos_vertex:fv,background_vert:dv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:yv,cube_frag:xv,depth_vert:bv,depth_frag:vv,distance_vert:_v,distance_frag:Mv,equirect_vert:Sv,equirect_frag:wv,linedashed_vert:Ev,linedashed_frag:Tv,meshbasic_vert:Av,meshbasic_frag:Rv,meshlambert_vert:Cv,meshlambert_frag:Iv,meshmatcap_vert:Pv,meshmatcap_frag:Lv,meshnormal_vert:Nv,meshnormal_frag:Dv,meshphong_vert:Fv,meshphong_frag:Uv,meshphysical_vert:kv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:zv,points_vert:Hv,points_frag:Gv,shadow_vert:Vv,shadow_frag:Wv,sprite_vert:Xv,sprite_frag:qv},Vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bn={basic:{uniforms:Nn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Nn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Nn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Nn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Nn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Nn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Nn([Vt.points,Vt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Nn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Nn([Vt.common,Vt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Nn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Nn([Vt.sprite,Vt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Nn([Vt.common,Vt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Nn([Vt.lights,Vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Bn.physical={uniforms:Nn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};var Ul={r:0,b:0,g:0},Yv=new ve,sm=new pe;sm.set(-1,0,0,0,1,0,0,0,1);function $v(n,t,e,i,s,r){let o=new qt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let b=x.backgroundBlurriness>0;_=t.get(_,b)}return _}function m(x){let _=!1,b=d(x);b===null?p(o,a):b&&b.isColor&&(p(b,1),_=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,_){let b=d(_);b&&(b.isCubeTexture||b.mapping===aa)?(l===void 0&&(l=new ce(new Ae(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Zs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sm),l.material.toneMapped=xe.getTransfer(b.colorSpace)!==Ie,(u!==b||f!==b.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ce(new Pn(2,2),new We({name:"BackgroundMaterial",uniforms:Zs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=xe.getTransfer(b.colorSpace)!==Ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Ul,Dh(n)),e.buffers.color.setClear(Ul.r,Ul.g,Ul.b,_,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:y,dispose:g}}function Zv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(N,B,O,F,D){let z=!1,W=f(N,F,O,B);r!==W&&(r=W,l(r.object)),z=d(N,F,O,D),z&&m(N,F,O,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(N,B,O,F),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function f(N,B,O,F){let D=F.wireframe===!0,z=i[B.id];z===void 0&&(z={},i[B.id]=z);let W=N.isInstancedMesh===!0?N.id:0,tt=z[W];tt===void 0&&(tt={},z[W]=tt);let K=tt[O.id];K===void 0&&(K={},tt[O.id]=K);let j=K[D];return j===void 0&&(j=h(c()),K[D]=j),j}function h(N){let B=[],O=[],F=[];for(let D=0;D<e;D++)B[D]=0,O[D]=0,F[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:F,object:N,attributes:{},index:null}}function d(N,B,O,F){let D=r.attributes,z=B.attributes,W=0,tt=O.getAttributes();for(let K in tt)if(tt[K].location>=0){let X=D[K],St=z[K];if(St===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),X===void 0||X.attribute!==St||St&&X.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function m(N,B,O,F){let D={},z=B.attributes,W=0,tt=O.getAttributes();for(let K in tt)if(tt[K].location>=0){let X=z[K];X===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(X=N.instanceColor));let St={};St.attribute=X,X&&X.data&&(St.data=X.data),D[K]=St,W++}r.attributes=D,r.attributesNum=W,r.index=F}function y(){let N=r.newAttributes;for(let B=0,O=N.length;B<O;B++)N[B]=0}function p(N){g(N,0)}function g(N,B){let O=r.newAttributes,F=r.enabledAttributes,D=r.attributeDivisors;O[N]=1,F[N]===0&&(n.enableVertexAttribArray(N),F[N]=1),D[N]!==B&&(n.vertexAttribDivisor(N,B),D[N]=B)}function x(){let N=r.newAttributes,B=r.enabledAttributes;for(let O=0,F=B.length;O<F;O++)B[O]!==N[O]&&(n.disableVertexAttribArray(O),B[O]=0)}function _(N,B,O,F,D,z,W){W===!0?n.vertexAttribIPointer(N,B,O,D,z):n.vertexAttribPointer(N,B,O,F,D,z)}function b(N,B,O,F){y();let D=F.attributes,z=O.getAttributes(),W=B.defaultAttributeValues;for(let tt in z){let K=z[tt];if(K.location>=0){let j=D[tt];if(j===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let X=j.normalized,St=j.itemSize,Et=t.get(j);if(Et===void 0)continue;let gt=Et.buffer,xt=Et.type,Ct=Et.bytesPerElement,st=xt===n.INT||xt===n.UNSIGNED_INT||j.gpuType===Kc;if(j.isInterleavedBufferAttribute){let ht=j.data,Mt=ht.stride,Bt=j.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<K.locationSize;kt++)g(K.location+kt,ht.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<K.locationSize;kt++)p(K.location+kt);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let kt=0;kt<K.locationSize;kt++)_(K.location+kt,St/K.locationSize,xt,X,Mt*Ct,(Bt+St/K.locationSize*kt)*Ct,st)}else{if(j.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)g(K.location+ht,j.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ht=0;ht<K.locationSize;ht++)p(K.location+ht);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let ht=0;ht<K.locationSize;ht++)_(K.location+ht,St/K.locationSize,xt,X,St*Ct,St/K.locationSize*ht*Ct,st)}}else if(W!==void 0){let X=W[tt];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(K.location,X);break;case 3:n.vertexAttrib3fv(K.location,X);break;case 4:n.vertexAttrib4fv(K.location,X);break;default:n.vertexAttrib1fv(K.location,X)}}}}x()}function v(){T();for(let N in i){let B=i[N];for(let O in B){let F=B[O];for(let D in F){let z=F[D];for(let W in z)u(z[W].object),delete z[W];delete F[D]}}delete i[N]}}function M(N){if(i[N.id]===void 0)return;let B=i[N.id];for(let O in B){let F=B[O];for(let D in F){let z=F[D];for(let W in z)u(z[W].object),delete z[W];delete F[D]}}delete i[N.id]}function R(N){for(let B in i){let O=i[B];for(let F in O){let D=O[F];if(D[N.id]===void 0)continue;let z=D[N.id];for(let W in z)u(z[W].object),delete z[W];delete D[N.id]}}}function S(N){for(let B in i){let O=i[B],F=N.isInstancedMesh===!0?N.id:0,D=O[F];if(D!==void 0){for(let z in D){let W=D[z];for(let tt in W)u(W[tt].object),delete W[tt];delete D[z]}delete O[F],Object.keys(O).length===0&&delete i[B]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function jv(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Kv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let S=R===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Wn&&R!==si&&!S&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ae("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ae("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:b,maxSamples:v,samples:M}}function Jv(n){let t=this,e=null,i=0,s=!1,r=!1,o=new $n,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?u(null):l();else{let x=r?0:i,_=x*4,b=g.clippingState||null;c.value=b,b=u(m,h,_,d);for(let v=0;v!==_;++v)b[v]=e[v];g.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,m){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=c.value,m!==!0||p===null){let g=d+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,b=d;_!==y;++_,b+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var qr=4,Qv=6,t_=20,e_=256,ga=new vs,Up=new qt,Oh=null,Bh=0,zh=0,Hh=!1,n_=new G,js=new G,Ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=n_}=r;Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Oh,Bh,zh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oh=this._renderer.getRenderTarget(),Bh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:xi,format:ri,colorSpace:To,depthBuffer:!1},s=kp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=i_(r)),this._blurMaterial=r_(r,t,e),this._ggxMaterial=s_(r,t,e)}return s}_compileMaterial(t){let e=new ce(new ue,t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,i,s,r){let c=new Un(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Up),f.toneMapping=gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Ae,new we({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,g=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,g=!0):(p.color.copy(Up),g=!0);for(let _=0;_<6;_++){let b=_%3;b===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):b===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));let v=this._cubeSize;Xr(s,b*v,_>2?v:0,v,v),f.setRenderTarget(s),g&&f.render(y,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Es||t.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Xr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ga)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,y=this._sizeLods[i],p=3*y*(i>m-qr?i-m+qr:0),g=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Xr(r,p,g,3*y,2*y),s.setRenderTarget(r),s.render(a,ga),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,Xr(t,p,g,3*y,2*y),s.setRenderTarget(t),s.render(a,ga)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-qr?s-this._lodMax+qr:0),h=4*(this._cubeSize-u);Xr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,ga)}};function i_(n){let t=[],e=[],i=n,s=n-qr+1+Qv;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let g=0;g<f;g++){let x=g%3*2/3-1,_=g>2?0:-1,b=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];m.set(b,d*h*g);for(let v=0;v<h;v++){let M=u[v*2]*2-1,R=u[v*2+1]*2-1;g===0?js.set(1,R,M):g===1?js.set(-M,1,-R):g===2?js.set(-M,R,1):g===3?js.set(-1,R,-M):g===4?js.set(-M,-1,R):js.set(M,R,-1),js.toArray(y,(g*h+v)*d)}}let p=new ue;p.setAttribute("position",new Te(m,d)),p.setAttribute("outputDirection",new Te(y,d)),e.push(new ce(p,null)),i>qr&&i--}return{lodMeshes:e,sizeLods:t}}function kp(n,t,e){let i=new Gn(n,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function s_(n,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function r_(n,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Op(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bp(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bl=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ko(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:Li});r.uniforms.tEquirect.value=e;let o=new ce(s,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=_n),new Xc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function o_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===$c||d===Zc)if(t.has(h)){let m=t.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let y=new Bl(m.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,m=d===$c||d===Zc,y=d===Es||d===$s;if(m||y){let p=e.get(h),g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Ol(n)),p=m?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let x=h.image;return m&&x&&x.height>0||y&&x&&c(x)?(i===null&&(i=new Ol(n)),p=m?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,d){return d===$c?h.mapping=Es:d===Zc&&(h.mapping=$s),h}function c(h){let d=0,m=6;for(let y=0;y<m;y++)h[y]!==void 0&&d++;return d===m}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function a_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Os("WebGLRenderer: "+i+" extension not supported."),s}}}function c_(n,t,e,i){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],n.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,m=f.attributes.position,y=0;if(m===void 0)return;if(d!==null){let x=d.array;y=d.version;for(let _=0,b=x.length;_<b;_+=3){let v=x[_+0],M=x[_+1],R=x[_+2];h.push(v,M,M,R,R,v)}}else{let x=m.array;y=m.version;for(let _=0,b=x.length/3-1;_<b;_+=3){let v=_+0,M=_+1,R=_+2;h.push(v,M,M,R,R,v)}}let p=new(m.count>=65535?No:Lo)(h,1);p.version=y;let g=r.get(f);g&&t.remove(g),r.set(f,p)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function l_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function l(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*o,d),e.update(h,i,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=h[p];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function u_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:he("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function h_(n,t,e){let i=new WeakMap,s=new Pe;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),y===!0&&(_=3);let b=a.attributes.position.count*_,v=1;b>t.maxTextureSize&&(v=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let M=new Float32Array(b*v*4*f),R=new Io(M,b,v,f);R.type=si,R.needsUpdate=!0;let S=_*4;for(let P=0;P<f;P++){let N=p[P],B=g[P],O=x[P],F=b*v*4*P;for(let D=0;D<N.count;D++){let z=D*S;d===!0&&(s.fromBufferAttribute(N,D),M[F+z+0]=s.x,M[F+z+1]=s.y,M[F+z+2]=s.z,M[F+z+3]=0),m===!0&&(s.fromBufferAttribute(B,D),M[F+z+4]=s.x,M[F+z+5]=s.y,M[F+z+6]=s.z,M[F+z+7]=0),y===!0&&(s.fromBufferAttribute(O,D),M[F+z+8]=s.x,M[F+z+9]=s.y,M[F+z+10]=s.z,M[F+z+11]=O.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new Dt(b,v)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function f_(n,t,e,i,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var d_={[yh]:"LINEAR_TONE_MAPPING",[xh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[oa]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[Mh]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function p_(n,t,e,i,s,r){let o=new Gn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ue;l.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let u=new Lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ce(l,u),h=new vs(-1,1,1,-1,0,1),d=null,m=null,y=!1,p,g=null,x=[],_=!1;this.setSize=function(b,v){o.setSize(b,v),a!==null&&a.setSize(b,v),c!==null&&c.setSize(b,v);for(let M=0;M<x.length;M++){let R=x[M];R.setSize&&R.setSize(b,v)}},this.setEffects=function(b){x=b,_=x.length>0&&x[0].isRenderPass===!0;let v=o.width,M=o.height;x.length>0&&a===null&&(a=new Gn(v,M,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new Gn(v,M,{type:xi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let S=x[R];S.setSize&&S.setSize(v,M)}},this.begin=function(b,v){if(y||b.toneMapping===gi&&x.length===0)return!1;if(g=v,v!==null){let M=v.width,R=v.height;(o.width!==M||o.height!==R)&&this.setSize(M,R)}return _===!1&&b.setRenderTarget(o),p=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return _},this.end=function(b,v){b.toneMapping=p,y=!0;let M=o,R=a;for(let S=0;S<x.length;S++){let T=x[S];T.enabled!==!1&&(T.render(b,R,M,v),T.needsSwap!==!1&&(M=R,R=R===a?c:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},xe.getTransfer(d)===Ie&&(u.defines.SRGB_TRANSFER="");let S=d_[m];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(g),b.render(f,h),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var rm=new Mn,Wh=new gs(1,1),om=new Io,am=new Mc,cm=new ko,zp=[],Hp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Wp=new Float32Array(4);function $r(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=zp[s];if(r===void 0&&(r=new Float32Array(s),zp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function un(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Gl(n,t){let e=Hp[t];e===void 0&&(e=new Int32Array(t),Hp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function m_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2fv(this.addr,t),hn(e,t)}}function y_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;n.uniform3fv(this.addr,t),hn(e,t)}}function x_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4fv(this.addr,t),hn(e,t)}}function b_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;Wp.set(i),n.uniformMatrix2fv(this.addr,!1,Wp),hn(e,i)}}function v_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;Vp.set(i),n.uniformMatrix3fv(this.addr,!1,Vp),hn(e,i)}}function __(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(un(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(un(e,i))return;Gp.set(i),n.uniformMatrix4fv(this.addr,!1,Gp),hn(e,i)}}function M_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2iv(this.addr,t),hn(e,t)}}function w_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3iv(this.addr,t),hn(e,t)}}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4iv(this.addr,t),hn(e,t)}}function T_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function A_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;n.uniform2uiv(this.addr,t),hn(e,t)}}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;n.uniform3uiv(this.addr,t),hn(e,t)}}function C_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;n.uniform4uiv(this.addr,t),hn(e,t)}}function I_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Wh.compareFunction=e.isReversedDepthBuffer()?Fl:Dl,r=Wh):r=rm,e.setTexture2D(t||r,s)}function P_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||am,s)}function L_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||cm,s)}function N_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||om,s)}function D_(n){switch(n){case 5126:return m_;case 35664:return g_;case 35665:return y_;case 35666:return x_;case 35674:return b_;case 35675:return v_;case 35676:return __;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return w_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(n,t){n.uniform1fv(this.addr,t)}function U_(n,t){let e=$r(t,this.size,2);n.uniform2fv(this.addr,e)}function k_(n,t){let e=$r(t,this.size,3);n.uniform3fv(this.addr,e)}function O_(n,t){let e=$r(t,this.size,4);n.uniform4fv(this.addr,e)}function B_(n,t){let e=$r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function z_(n,t){let e=$r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function H_(n,t){let e=$r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function G_(n,t){n.uniform1iv(this.addr,t)}function V_(n,t){n.uniform2iv(this.addr,t)}function W_(n,t){n.uniform3iv(this.addr,t)}function X_(n,t){n.uniform4iv(this.addr,t)}function q_(n,t){n.uniform1uiv(this.addr,t)}function Y_(n,t){n.uniform2uiv(this.addr,t)}function $_(n,t){n.uniform3uiv(this.addr,t)}function Z_(n,t){n.uniform4uiv(this.addr,t)}function j_(n,t,e){let i=this.cache,s=t.length,r=Gl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Wh:o=rm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function K_(n,t,e){let i=this.cache,s=t.length,r=Gl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||am,r[o])}function J_(n,t,e){let i=this.cache,s=t.length,r=Gl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cm,r[o])}function Q_(n,t,e){let i=this.cache,s=t.length,r=Gl(e,s);un(i,r)||(n.uniform1iv(this.addr,r),hn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||om,r[o])}function tM(n){switch(n){case 5126:return F_;case 35664:return U_;case 35665:return k_;case 35666:return O_;case 35674:return B_;case 35675:return z_;case 35676:return H_;case 5124:case 35670:return G_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return $_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}var Xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=D_(e.type)}},qh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tM(e.type)}},Yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Gh=/(\w+)(\])?(\[|\.)?/g;function Xp(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){let i=n.name,s=i.length;for(Gh.lastIndex=0;;){let r=Gh.exec(i),o=Gh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Xp(e,l===void 0?new Xh(a,n,t):new qh(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Yh(a),Xp(e,f)),e=f}}}var Yr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);eM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function qp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var nM=37297,iM=0;function sM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Yp=new pe;function rM(n){xe._getMatrix(Yp,xe.workingColorSpace,n);let t=`mat3( ${Yp.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case Ao:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $p(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+sM(n.getShaderSource(t),a)}else return r}function oM(n,t){let e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var aM={[yh]:"Linear",[xh]:"Reinhard",[bh]:"Cineon",[oa]:"ACESFilmic",[_h]:"AgX",[Mh]:"Neutral",[vh]:"Custom"};function cM(n,t){let e=aM[t];return e===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kl=new G;function lM(){xe.getLuminanceCoefficients(kl);let n=kl.x.toFixed(4),t=kl.y.toFixed(4),e=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function hM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function xa(n){return n!==""}function Zp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(n){return n.replace(dM,mM)}var pM=new Map;function mM(n,t){let e=ye[t];if(e===void 0){let i=pM.get(t);if(i!==void 0)e=ye[i],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $h(e)}var gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(n){return n.replace(gM,yM)}function yM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var xM={[qs]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function bM(n){return xM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vM={[Es]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE_UV"};function _M(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var MM={[$s]:"ENVMAP_MODE_REFRACTION"};function SM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wM={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[dp]:"ENVMAP_BLENDING_MIX",[pp]:"ENVMAP_BLENDING_ADD"};function EM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":wM[n.combine]||"ENVMAP_BLENDING_NONE"}function TM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function AM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=bM(e),l=_M(e),u=SM(e),f=EM(e),h=TM(e),d=uM(e),m=hM(r),y=s.createProgram(),p,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(xa).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(xa).join(`
`),g.length>0&&(g+=`
`)):(p=[Jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),g=[Jp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ye.tonemapping_pars_fragment:"",e.toneMapping!==gi?cM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xa).join(`
`)),o=$h(o),o=Zp(o,e),o=jp(o,e),a=$h(a),a=Zp(a,e),a=jp(a,e),o=Kp(o),a=Kp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=x+p+o,b=x+g+a,v=qp(s,s.VERTEX_SHADER,_),M=qp(s,s.FRAGMENT_SHADER,b);s.attachShader(y,v),s.attachShader(y,M),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(N){if(n.debug.checkShaderErrors){let B=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(v)||"",F=s.getShaderInfoLog(M)||"",D=B.trim(),z=O.trim(),W=F.trim(),tt=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,v,M);else{let j=$p(s,v,"vertex"),X=$p(s,M,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+j+`
`+X)}else D!==""?ae("WebGLProgram: Program Info Log:",D):(z===""||W==="")&&(K=!1);K&&(N.diagnostics={runnable:tt,programLog:D,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:g}})}s.deleteShader(v),s.deleteShader(M),S=new Yr(s,y),T=fM(s,y)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,nM)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=M,this}var RM=0,Zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jh(t),e.set(t,i)),i}},jh=class{constructor(t){this.id=RM++,this.code=t,this.usedTimes=0}};function CM(n){return n===Rs||n===da||n===pa}function IM(n,t,e,i,s,r){let o=new Ir,a=new Zh,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,T,P,N,B,O){let F=N.fog,D=B.geometry,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,W=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,tt=t.get(S.envMap||z,W),K=tt&&tt.mapping===aa?tt.image.height:null,j=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&ae("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,St=X!==void 0?X.length:0,Et=0;D.morphAttributes.position!==void 0&&(Et=1),D.morphAttributes.normal!==void 0&&(Et=2),D.morphAttributes.color!==void 0&&(Et=3);let gt,xt,Ct,st;if(j){let le=Bn[j];gt=le.vertexShader,xt=le.fragmentShader}else{gt=S.vertexShader,xt=S.fragmentShader;let le=a.getVertexShaderStage(S),se=a.getFragmentShaderStage(S);a.update(S,le,se),Ct=le.id,st=se.id}let ht=n.getRenderTarget(),Mt=n.state.buffers.depth.getReversed(),Bt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,q=!!S.map,bt=!!S.matcap,Z=!!tt,J=!!S.aoMap,nt=!!S.lightMap,ct=!!S.bumpMap&&S.wireframe===!1,pt=!!S.normalMap,It=!!S.displacementMap,Lt=!!S.emissiveMap,Ft=!!S.metalnessMap,zt=!!S.roughnessMap,$=S.anisotropy>0,oe=S.clearcoat>0,Yt=S.dispersion>0,H=S.retroreflectivity>0,A=S.iridescence>0,rt=S.sheen>0,dt=S.transmission>0,_t=$&&!!S.anisotropyMap,V=oe&&!!S.clearcoatMap,w=oe&&!!S.clearcoatNormalMap,E=oe&&!!S.clearcoatRoughnessMap,C=A&&!!S.iridescenceMap,U=A&&!!S.iridescenceThicknessMap,k=rt&&!!S.sheenColorMap,Q=rt&&!!S.sheenRoughnessMap,Y=!!S.specularMap,ut=!!S.specularColorMap,lt=!!S.specularIntensityMap,Rt=dt&&!!S.transmissionMap,L=dt&&!!S.thicknessMap,et=!!S.gradientMap,it=!!S.alphaMap,Tt=S.alphaTest>0,At=!!S.alphaHash,wt=!!S.extensions,Ut=gi;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let Ot={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:gt,fragmentShader:xt,defines:S.defines,customVertexShaderID:Ct,customFragmentShaderID:st,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&B.instanceColor!==null,instancingMorph:Bt&&B.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:q,matcap:bt,envMap:Z,envMapMode:Z&&tt.mapping,envMapCubeUVHeight:K,aoMap:J,lightMap:nt,bumpMap:ct,normalMap:pt,displacementMap:It,emissiveMap:Lt,normalMapObjectSpace:pt&&S.normalMapType===yp,normalMapTangentSpace:pt&&S.normalMapType===ma,packedNormalMap:pt&&S.normalMapType===ma&&CM(S.normalMap.format),metalnessMap:Ft,roughnessMap:zt,anisotropy:$,anisotropyMap:_t,clearcoat:oe,clearcoatMap:V,clearcoatNormalMap:w,clearcoatRoughnessMap:E,dispersion:Yt,retroreflection:H,iridescence:A,iridescenceMap:C,iridescenceThicknessMap:U,sheen:rt,sheenColorMap:k,sheenRoughnessMap:Q,specularMap:Y,specularColorMap:ut,specularIntensityMap:lt,transmission:dt,transmissionMap:Rt,thicknessMap:L,gradientMap:et,opaque:S.transparent===!1&&S.blending===Gr&&S.alphaToCoverage===!1,alphaMap:it,alphaTest:Tt,alphaHash:At,combine:S.combine,mapUv:q&&m(S.map.channel),aoMapUv:J&&m(S.aoMap.channel),lightMapUv:nt&&m(S.lightMap.channel),bumpMapUv:ct&&m(S.bumpMap.channel),normalMapUv:pt&&m(S.normalMap.channel),displacementMapUv:It&&m(S.displacementMap.channel),emissiveMapUv:Lt&&m(S.emissiveMap.channel),metalnessMapUv:Ft&&m(S.metalnessMap.channel),roughnessMapUv:zt&&m(S.roughnessMap.channel),anisotropyMapUv:_t&&m(S.anisotropyMap.channel),clearcoatMapUv:V&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:C&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:U&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:k&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Q&&m(S.sheenRoughnessMap.channel),specularMapUv:Y&&m(S.specularMap.channel),specularColorMapUv:ut&&m(S.specularColorMap.channel),specularIntensityMapUv:lt&&m(S.specularIntensityMap.channel),transmissionMapUv:Rt&&m(S.transmissionMap.channel),thicknessMapUv:L&&m(S.thicknessMap.channel),alphaMapUv:it&&m(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(pt||$),vertexNormals:!!D.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(q||it),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||D.attributes.normal===void 0&&pt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Mt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:q&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===Ie,decodeVideoTextureEmissive:Lt&&S.emissiveMap.isVideoTexture===!0&&xe.getTransfer(S.emissiveMap.colorSpace)===Ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===je,flipSided:S.side===kn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(S){let T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(g(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function g(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numSunLights),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numSunLightShadows),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function _(S){let T=d[S.type],P;if(T){let N=Bn[T];P=Ki.clone(N.uniforms)}else P=S.uniforms;return P}function b(S,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new AM(n,T,S,s),l.push(P),u.set(T,P)),P}function v(S){if(--S.usedTimes===0){let T=l.indexOf(S);l[T]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function M(S){a.remove(S)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:v,releaseShaderCache:M,programs:l,dispose:R}}function PM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function LM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Qp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function tm(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,y,p,g){let x=n[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:p,group:g},n[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.materialVariant=o(h),x.groupOrder=y,x.renderOrder=h.renderOrder,x.z=p,x.group=g),t++,x}function c(h,d,m,y,p,g,x){x.reversedDepth===!0&&(p=-p);let _=a(h,d,m,y,p,g);m.transmission>0?i.push(_):m.transparent===!0?s.push(_):e.push(_)}function l(h,d,m,y,p,g){let x=a(h,d,m,y,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,d){e.length>1&&e.sort(h||LM),i.length>1&&i.sort(d||Qp),s.length>1&&s.sort(d||Qp)}function f(){for(let h=t,d=n.length;h<d;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function NM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new tm,n.set(i,[o])):s>=r.length?(o=new tm,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function DM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new qt};break;case"SpotLight":e={position:new G,direction:new G,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function FM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var UM=0;function kM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function OM(n){let t=new DM,e=FM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);let s=new G,r=new ve,o=new ve;function a(l){let u=0,f=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,m=0,y=0,p=0,g=0,x=0,_=0,b=0,v=0,M=0,R=0,S=0,T=0,P=0;l.sort(kM);for(let B=0,O=l.length;B<O;B++){let F=l[B],D=F.color,z=F.intensity,W=F.distance,tt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Rs?tt=F.shadow.map.texture:tt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=D.r*z,f+=D.g*z,h+=D.b*z;else if(F.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(F.sh.coefficients[K],z);P++}else if(F.isSunLight){let K=t.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let j=F.shadow,X=e.get(F);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[m]=X,i.sunShadowMap[m]=tt;let St=j.getViewportCount();for(let Et=0;Et<St;Et++)i.sunShadowMatrix[y+Et]=j.getMatrix(Et),i.sunShadowCascade[y+Et]=j._cascadeData[Et];y+=St,m++}i.sun[d]=K,d++}else if(F.isDirectionalLight){let K=t.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let j=F.shadow,X=e.get(F);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=F.shadow.matrix,v++}i.directional[p]=K,p++}else if(F.isSpotLight){let K=t.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(D).multiplyScalar(z),K.distance=W,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,i.spot[x]=K;let j=F.shadow;if(F.map&&(i.spotLightMap[S]=F.map,S++,j.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[x]=j.matrix,F.castShadow){let X=e.get(F);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=tt,R++}x++}else if(F.isRectAreaLight){let K=t.get(F);K.color.copy(D).multiplyScalar(z),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),i.rectArea[_]=K,_++}else if(F.isPointLight){let K=t.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){let j=F.shadow,X=e.get(F);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=tt,i.pointShadowMatrix[g]=F.shadow.matrix,M++}i.point[g]=K,g++}else if(F.isHemisphereLight){let K=t.get(F);K.skyColor.copy(F.color).multiplyScalar(z),K.groundColor.copy(F.groundColor).multiplyScalar(z),i.hemi[b]=K,b++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Vt.LTC_FLOAT_1,i.rectAreaLTC2=Vt.LTC_FLOAT_2):(i.rectAreaLTC1=Vt.LTC_HALF_1,i.rectAreaLTC2=Vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let N=i.hash;(N.sunLength!==d||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==_||N.hemiLength!==b||N.numSunShadows!==m||N.numDirectionalShadows!==v||N.numPointShadows!==M||N.numSpotShadows!==R||N.numSpotMaps!==S||N.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=g,i.hemi.length=b,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,N.sunLength=d,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=_,N.hemiLength=b,N.numSunShadows=m,N.numDirectionalShadows=v,N.numPointShadows=M,N.numSpotShadows=R,N.numSpotMaps=S,N.numLightProbes=P,i.version=UM++)}function c(l,u){let f=0,h=0,d=0,m=0,y=0,p=0,g=u.matrixWorldInverse;for(let x=0,_=l.length;x<_;x++){let b=l[x];if(b.isSunLight){let v=i.sun[f];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),f++}else if(b.isDirectionalLight){let v=i.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(b.isSpotLight){let v=i.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let v=i.rectArea[y];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let v=i.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:i}}function em(n){let t=new OM(n),e=[],i=[],s=[];function r(h){f.camera=h,e.length=0,i.length=0,s.length=0}function o(h){e.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function BM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new em(n),t.set(s,[a])):r>=o.length?(a=new em(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`,GM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],VM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],nm=new ve,ya=new G,Vh=new G;function WM(n,t,e){let i=new Nr,s=new Dt,r=new Dt,o=new Pe,a=new Nc,c=new Dc,l={},u=e.maxTextureSize,f={[ws]:kn,[kn]:ws,[je]:je},h=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:zM,fragmentShader:HM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new ue;m.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ce(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let g=this.type;this.render=function(M,R,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===$d&&(ae("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);let T=n.getRenderTarget(),P=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Li),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=g!==this.type;O&&R.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(D=>D.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,D=M.length;F<D;F++){let z=M[F],W=z.shadow;if(W===void 0){ae("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let tt=W.getFrameExtents();s.multiply(tt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,W.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=K,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Hr){if(z.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gn(s.x,s.y,{format:Rs,type:xi,minFilter:_n,magFilter:_n,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new gs(s.x,s.y,si),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=Ri,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yn,W.map.depthTexture.magFilter=yn}else z.isPointLight?(W.map=new Bl(s.x),W.map.depthTexture=new Tc(s.x,yi)):(W.map=new Gn(s.x,s.y),W.map.depthTexture=new gs(s.x,s.y,yi)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=Ri,this.type===qs?(W.map.depthTexture.compareFunction=K?Fl:Dl,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yn,W.map.depthTexture.magFilter=yn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();z.isPointLight!==!0&&W.updateMatrices(z,S);for(let X=0;X<j;X++){let St=W.getCamera(X);if(z.isPointLight){let Et=W.camera,gt=W.matrix,xt=z.distance||Et.far;xt!==Et.far&&(Et.far=xt,Et.updateProjectionMatrix()),ya.setFromMatrixPosition(z.matrixWorld),Et.position.copy(ya),Vh.copy(Et.position),Vh.add(GM[X]),Et.up.copy(VM[X]),Et.lookAt(Vh),Et.updateMatrixWorld(),gt.makeTranslation(-ya.x,-ya.y,-ya.z),nm.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),W._frustum.setFromProjectionMatrix(nm,Et.coordinateSystem,Et.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,X),n.clear();else{X===0&&(n.setRenderTarget(W.map),n.clear());let Et=W.getViewport(X);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),B.viewport(o)}i=W.getFrustum(X),b(R,S,St,z,this.type)}W.isPointLightShadow!==!0&&this.type===Hr&&x(W,S),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(T,P,N)};function x(M,R){let S=t.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Gn(s.x,s.y,{format:Rs,type:xi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,S,h,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,S,d,y,null)}function _(M,R,S,T){let P=null,N=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)P=N;else if(P=S.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=P.uuid,O=R.uuid,F=l[B];F===void 0&&(F={},l[B]=F);let D=F[O];D===void 0&&(D=P.clone(),F[O]=D,R.addEventListener("dispose",v)),P=D}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Hr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=n.properties.get(P);B.light=S}return P}function b(M,R,S,T,P){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Hr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let O=t.update(M),F=M.material;if(Array.isArray(F)){let D=O.groups;for(let z=0,W=D.length;z<W;z++){let tt=D[z],K=F[tt.materialIndex];if(K&&K.visible){let j=_(M,K,T,P);M.onBeforeShadow(n,M,R,S,O,j,tt),n.renderBufferDirect(S,null,O,j,M,tt),M.onAfterShadow(n,M,R,S,O,j,tt)}}}else if(F.visible){let D=_(M,F,T,P);M.onBeforeShadow(n,M,R,S,O,D,null),n.renderBufferDirect(S,null,O,D,M,null),M.onAfterShadow(n,M,R,S,O,D,null)}}let B=M.children;for(let O=0,F=B.length;O<F;O++)b(B[O],R,S,T,P)}function v(M){M.target.removeEventListener("dispose",v);for(let S in l){let T=l[S],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function XM(n,t){function e(){let L=!1,et=new Pe,it=null,Tt=new Pe(0,0,0,0);return{setMask:function(At){it!==At&&!L&&(n.colorMask(At,At,At,At),it=At)},setLocked:function(At){L=At},setClear:function(At,wt,Ut,Ot,le){le===!0&&(At*=Ot,wt*=Ot,Ut*=Ot),et.set(At,wt,Ut,Ot),Tt.equals(et)===!1&&(n.clearColor(At,wt,Ut,Ot),Tt.copy(et))},reset:function(){L=!1,it=null,Tt.set(-1,0,0,0)}}}function i(){let L=!1,et=!1,it=null,Tt=null,At=null;return{setReversed:function(wt){if(et!==wt){let Ut=t.get("EXT_clip_control");wt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),et=wt;let Ot=At;At=null,this.setClear(Ot)}},getReversed:function(){return et},setTest:function(wt){wt?ht(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(wt){it!==wt&&!L&&(n.depthMask(wt),it=wt)},setFunc:function(wt){if(et&&(wt=Rp[wt]),Tt!==wt){switch(wt){case fc:n.depthFunc(n.NEVER);break;case dc:n.depthFunc(n.ALWAYS);break;case pc:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case mc:n.depthFunc(n.EQUAL);break;case gc:n.depthFunc(n.GEQUAL);break;case Er:n.depthFunc(n.GREATER);break;case yc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Tt=wt}},setLocked:function(wt){L=wt},setClear:function(wt){At!==wt&&(At=wt,et&&(wt=1-wt),n.clearDepth(wt))},reset:function(){L=!1,it=null,Tt=null,At=null,et=!1}}}function s(){let L=!1,et=null,it=null,Tt=null,At=null,wt=null,Ut=null,Ot=null,le=null;return{setTest:function(se){L||(se?ht(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(se){et!==se&&!L&&(n.stencilMask(se),et=se)},setFunc:function(se,_e,Ee){(it!==se||Tt!==_e||At!==Ee)&&(n.stencilFunc(se,_e,Ee),it=se,Tt=_e,At=Ee)},setOp:function(se,_e,Ee){(wt!==se||Ut!==_e||Ot!==Ee)&&(n.stencilOp(se,_e,Ee),wt=se,Ut=_e,Ot=Ee)},setLocked:function(se){L=se},setClear:function(se){le!==se&&(n.clearStencil(se),le=se)},reset:function(){L=!1,et=null,it=null,Tt=null,At=null,wt=null,Ut=null,Ot=null,le=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],y=null,p=!1,g=null,x=null,_=null,b=null,v=null,M=null,R=null,S=new qt(0,0,0),T=0,P=!1,N=null,B=null,O=null,F=null,D=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,tt=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=tt>=1):K.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=tt>=2);let j=null,X={},St=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),gt=new Pe().fromArray(St),xt=new Pe().fromArray(Et);function Ct(L,et,it,Tt){let At=new Uint8Array(4),wt=n.createTexture();n.bindTexture(L,wt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<it;Ut++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,Tt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(et+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return wt}let st={};st[n.TEXTURE_2D]=Ct(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=Ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=Ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=Ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(wr),ct(!1),pt(fh),ht(n.CULL_FACE),J(Li);function ht(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Mt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Bt(L,et){return h[L]!==et?(n.bindFramebuffer(L,et),h[L]=et,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=et),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=et),!0):!1}function kt(L,et){let it=m,Tt=!1;if(L){it=d.get(et),it===void 0&&(it=[],d.set(et,it));let At=L.textures;if(it.length!==At.length||it[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Ut=At.length;wt<Ut;wt++)it[wt]=n.COLOR_ATTACHMENT0+wt;it.length=At.length,Tt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,Tt=!0);Tt&&n.drawBuffers(it)}function q(L){return y!==L?(n.useProgram(L),y=L,!0):!1}let bt={[Ys]:n.FUNC_ADD,[jd]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};bt[Jd]=n.MIN,bt[Qd]=n.MAX;let Z={[tp]:n.ZERO,[ep]:n.ONE,[np]:n.SRC_COLOR,[mh]:n.SRC_ALPHA,[cp]:n.SRC_ALPHA_SATURATE,[op]:n.DST_COLOR,[sp]:n.DST_ALPHA,[ip]:n.ONE_MINUS_SRC_COLOR,[gh]:n.ONE_MINUS_SRC_ALPHA,[ap]:n.ONE_MINUS_DST_COLOR,[rp]:n.ONE_MINUS_DST_ALPHA,[lp]:n.CONSTANT_COLOR,[up]:n.ONE_MINUS_CONSTANT_COLOR,[hp]:n.CONSTANT_ALPHA,[fp]:n.ONE_MINUS_CONSTANT_ALPHA};function J(L,et,it,Tt,At,wt,Ut,Ot,le,se){if(L===Li){p===!0&&(Mt(n.BLEND),p=!1);return}if(p===!1&&(ht(n.BLEND),p=!0),L!==Zd){if(L!==g||se!==P){if((x!==Ys||v!==Ys)&&(n.blendEquation(n.FUNC_ADD),x=Ys,v=Ys),se)switch(L){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFunc(n.ONE,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:he("WebGLState: Invalid blending: ",L);break}else switch(L){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dh:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",L);break}_=null,b=null,M=null,R=null,S.set(0,0,0),T=0,g=L,P=se}return}At=At||et,wt=wt||it,Ut=Ut||Tt,(et!==x||At!==v)&&(n.blendEquationSeparate(bt[et],bt[At]),x=et,v=At),(it!==_||Tt!==b||wt!==M||Ut!==R)&&(n.blendFuncSeparate(Z[it],Z[Tt],Z[wt],Z[Ut]),_=it,b=Tt,M=wt,R=Ut),(Ot.equals(S)===!1||le!==T)&&(n.blendColor(Ot.r,Ot.g,Ot.b,le),S.copy(Ot),T=le),g=L,P=!1}function nt(L,et){L.side===je?Mt(n.CULL_FACE):ht(n.CULL_FACE);let it=L.side===kn;et&&(it=!it),ct(it),L.blending===Gr&&L.transparent===!1?J(Li):J(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let Tt=L.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(L){N!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),N=L)}function pt(L){L!==qd?(ht(n.CULL_FACE),L!==B&&(L===fh?n.cullFace(n.BACK):L===Yd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),B=L}function It(L){L!==O&&(W&&n.lineWidth(L),O=L)}function Lt(L,et,it){L?(ht(n.POLYGON_OFFSET_FILL),(F!==et||D!==it)&&(F=et,D=it,o.getReversed()&&(et=-et),n.polygonOffset(et,it))):Mt(n.POLYGON_OFFSET_FILL)}function Ft(L){L?ht(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function zt(L){L===void 0&&(L=n.TEXTURE0+z-1),j!==L&&(n.activeTexture(L),j=L)}function $(L,et,it){it===void 0&&(j===null?it=n.TEXTURE0+z-1:it=j);let Tt=X[it];Tt===void 0&&(Tt={type:void 0,texture:void 0},X[it]=Tt),(Tt.type!==L||Tt.texture!==et)&&(j!==it&&(n.activeTexture(it),j=it),n.bindTexture(L,et||st[L]),Tt.type=L,Tt.texture=et)}function oe(){let L=X[j];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Yt(){try{n.compressedTexImage2D(...arguments)}catch(L){he("WebGLState:",L)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(L){he("WebGLState:",L)}}function A(){try{n.texSubImage2D(...arguments)}catch(L){he("WebGLState:",L)}}function rt(){try{n.texSubImage3D(...arguments)}catch(L){he("WebGLState:",L)}}function dt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){he("WebGLState:",L)}}function _t(){try{n.compressedTexSubImage3D(...arguments)}catch(L){he("WebGLState:",L)}}function V(){try{n.texStorage2D(...arguments)}catch(L){he("WebGLState:",L)}}function w(){try{n.texStorage3D(...arguments)}catch(L){he("WebGLState:",L)}}function E(){try{n.texImage2D(...arguments)}catch(L){he("WebGLState:",L)}}function C(){try{n.texImage3D(...arguments)}catch(L){he("WebGLState:",L)}}function U(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function k(L,et){f[L]!==et&&(n.pixelStorei(L,et),f[L]=et)}function Q(L){gt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),gt.copy(L))}function Y(L){xt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),xt.copy(L))}function ut(L,et){let it=l.get(et);it===void 0&&(it=new WeakMap,l.set(et,it));let Tt=it.get(L);Tt===void 0&&(Tt=n.getUniformBlockIndex(et,L.name),it.set(L,Tt))}function lt(L,et){let Tt=l.get(et).get(L);c.get(et)!==Tt&&(n.uniformBlockBinding(et,Tt,L.__bindingPointIndex),c.set(et,Tt))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,X={},h={},d=new WeakMap,m=[],y=null,p=!1,g=null,x=null,_=null,b=null,v=null,M=null,R=null,S=new qt(0,0,0),T=0,P=!1,N=null,B=null,O=null,F=null,D=null,gt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Mt,bindFramebuffer:Bt,drawBuffers:kt,useProgram:q,setBlending:J,setMaterial:nt,setFlipSided:ct,setCullFace:pt,setLineWidth:It,setPolygonOffset:Lt,setScissorTest:Ft,activeTexture:zt,bindTexture:$,unbindTexture:oe,compressedTexImage2D:Yt,compressedTexImage3D:H,texImage2D:E,texImage3D:C,pixelStorei:k,getParameter:U,updateUBOMapping:ut,uniformBlockBinding:lt,texStorage2D:V,texStorage3D:w,texSubImage2D:A,texSubImage3D:rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Q,viewport:Y,reset:Rt}}function qM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(H,A){return m?new OffscreenCanvas(H,A):Ro("canvas")}function p(H,A,rt){let dt=1,_t=Yt(H);if((_t.width>rt||_t.height>rt)&&(dt=rt/Math.max(_t.width,_t.height)),dt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let V=Math.floor(dt*_t.width),w=Math.floor(dt*_t.height);h===void 0&&(h=y(V,w));let E=A?y(V,w):h;return E.width=V,E.height=w,E.getContext("2d").drawImage(H,0,0,V,w),ae("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+V+"x"+w+")."),E}else return"data"in H&&ae("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),H;return H}function g(H){return H.generateMipmaps}function x(H){n.generateMipmap(H)}function _(H){return H.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?n.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(H,A,rt,dt,_t,V=!1){if(H!==null){if(n[H]!==void 0)return n[H];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let w;dt&&(w=t.get("EXT_texture_norm16"),w||ae("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let E=A;if(A===n.RED&&(rt===n.FLOAT&&(E=n.R32F),rt===n.HALF_FLOAT&&(E=n.R16F),rt===n.UNSIGNED_BYTE&&(E=n.R8),rt===n.UNSIGNED_SHORT&&w&&(E=w.R16_EXT),rt===n.SHORT&&w&&(E=w.R16_SNORM_EXT)),A===n.RED_INTEGER&&(rt===n.UNSIGNED_BYTE&&(E=n.R8UI),rt===n.UNSIGNED_SHORT&&(E=n.R16UI),rt===n.UNSIGNED_INT&&(E=n.R32UI),rt===n.BYTE&&(E=n.R8I),rt===n.SHORT&&(E=n.R16I),rt===n.INT&&(E=n.R32I)),A===n.RG&&(rt===n.FLOAT&&(E=n.RG32F),rt===n.HALF_FLOAT&&(E=n.RG16F),rt===n.UNSIGNED_BYTE&&(E=n.RG8),rt===n.UNSIGNED_SHORT&&w&&(E=w.RG16_EXT),rt===n.SHORT&&w&&(E=w.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(rt===n.UNSIGNED_BYTE&&(E=n.RG8UI),rt===n.UNSIGNED_SHORT&&(E=n.RG16UI),rt===n.UNSIGNED_INT&&(E=n.RG32UI),rt===n.BYTE&&(E=n.RG8I),rt===n.SHORT&&(E=n.RG16I),rt===n.INT&&(E=n.RG32I)),A===n.RGB_INTEGER&&(rt===n.UNSIGNED_BYTE&&(E=n.RGB8UI),rt===n.UNSIGNED_SHORT&&(E=n.RGB16UI),rt===n.UNSIGNED_INT&&(E=n.RGB32UI),rt===n.BYTE&&(E=n.RGB8I),rt===n.SHORT&&(E=n.RGB16I),rt===n.INT&&(E=n.RGB32I)),A===n.RGBA_INTEGER&&(rt===n.UNSIGNED_BYTE&&(E=n.RGBA8UI),rt===n.UNSIGNED_SHORT&&(E=n.RGBA16UI),rt===n.UNSIGNED_INT&&(E=n.RGBA32UI),rt===n.BYTE&&(E=n.RGBA8I),rt===n.SHORT&&(E=n.RGBA16I),rt===n.INT&&(E=n.RGBA32I)),A===n.RGB&&(rt===n.UNSIGNED_SHORT&&w&&(E=w.RGB16_EXT),rt===n.SHORT&&w&&(E=w.RGB16_SNORM_EXT),rt===n.UNSIGNED_INT_5_9_9_9_REV&&(E=n.RGB9_E5),rt===n.UNSIGNED_INT_10F_11F_11F_REV&&(E=n.R11F_G11F_B10F)),A===n.RGBA){let C=V?Ao:xe.getTransfer(_t);rt===n.FLOAT&&(E=n.RGBA32F),rt===n.HALF_FLOAT&&(E=n.RGBA16F),rt===n.UNSIGNED_BYTE&&(E=C===Ie?n.SRGB8_ALPHA8:n.RGBA8),rt===n.UNSIGNED_SHORT&&w&&(E=w.RGBA16_EXT),rt===n.SHORT&&w&&(E=w.RGBA16_SNORM_EXT),rt===n.UNSIGNED_SHORT_4_4_4_4&&(E=n.RGBA4),rt===n.UNSIGNED_SHORT_5_5_5_1&&(E=n.RGB5_A1)}return(E===n.R16F||E===n.R32F||E===n.RG16F||E===n.RG32F||E===n.RGBA16F||E===n.RGBA32F)&&t.get("EXT_color_buffer_float"),E}function v(H,A){let rt;return H?A===null||A===yi||A===Wr?rt=n.DEPTH24_STENCIL8:A===si?rt=n.DEPTH32F_STENCIL8:A===Vr&&(rt=n.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===yi||A===Wr?rt=n.DEPTH_COMPONENT24:A===si?rt=n.DEPTH_COMPONENT32F:A===Vr&&(rt=n.DEPTH_COMPONENT16),rt}function M(H,A){return g(H)===!0||H.isFramebufferTexture&&H.minFilter!==yn&&H.minFilter!==_n?Math.log2(Math.max(A.width,A.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?A.mipmaps.length:1}function R(H){let A=H.target;A.removeEventListener("dispose",R),T(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function S(H){let A=H.target;A.removeEventListener("dispose",S),N(A)}function T(H){let A=i.get(H);if(A.__webglInit===void 0)return;let rt=H.source,dt=d.get(rt);if(dt){let _t=dt[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&P(H),Object.keys(dt).length===0&&d.delete(rt)}i.remove(H)}function P(H){let A=i.get(H);n.deleteTexture(A.__webglTexture);let rt=H.source,dt=d.get(rt);delete dt[A.__cacheKey],o.memory.textures--}function N(H){let A=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let _t=0;_t<A.__webglFramebuffer[dt].length;_t++)n.deleteFramebuffer(A.__webglFramebuffer[dt][_t]);else n.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)n.deleteFramebuffer(A.__webglFramebuffer[dt]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let rt=H.textures;for(let dt=0,_t=rt.length;dt<_t;dt++){let V=i.get(rt[dt]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(rt[dt])}i.remove(H)}let B=0;function O(){B=0}function F(){return B}function D(H){B=H}function z(){let H=B;return H>=s.maxTextures&&ae("WebGLTextures: Trying to use "+(H+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,H}function W(H){let A=[];return A.push(H.wrapS),A.push(H.wrapT),A.push(H.wrapR||0),A.push(H.magFilter),A.push(H.minFilter),A.push(H.anisotropy),A.push(H.internalFormat),A.push(H.format),A.push(H.type),A.push(H.generateMipmaps),A.push(H.premultiplyAlpha),A.push(H.flipY),A.push(H.unpackAlignment),A.push(H.colorSpace),A.join()}function tt(H,A){let rt=i.get(H);if(H.isVideoTexture&&$(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&rt.__version!==H.version){let dt=H.image;if(dt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(rt,H,A);return}}else H.isExternalTexture&&(rt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture,n.TEXTURE0+A)}function K(H,A){let rt=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&rt.__version!==H.version){Mt(rt,H,A);return}else H.isExternalTexture&&(rt.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,rt.__webglTexture,n.TEXTURE0+A)}function j(H,A){let rt=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&rt.__version!==H.version){Mt(rt,H,A);return}e.bindTexture(n.TEXTURE_3D,rt.__webglTexture,n.TEXTURE0+A)}function X(H,A){let rt=i.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&rt.__version!==H.version){Bt(rt,H,A);return}e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture,n.TEXTURE0+A)}let St={[Bs]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[xc]:n.MIRRORED_REPEAT},Et={[yn]:n.NEAREST,[mp]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[jc]:n.LINEAR_MIPMAP_NEAREST,[Ts]:n.LINEAR_MIPMAP_LINEAR},gt={[bp]:n.NEVER,[wp]:n.ALWAYS,[vp]:n.LESS,[Dl]:n.LEQUAL,[_p]:n.EQUAL,[Fl]:n.GEQUAL,[Mp]:n.GREATER,[Sp]:n.NOTEQUAL};function xt(H,A){if(A.type===si&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===_n||A.magFilter===jc||A.magFilter===ca||A.magFilter===Ts||A.minFilter===_n||A.minFilter===jc||A.minFilter===ca||A.minFilter===Ts)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(H,n.TEXTURE_WRAP_S,St[A.wrapS]),n.texParameteri(H,n.TEXTURE_WRAP_T,St[A.wrapT]),(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)&&n.texParameteri(H,n.TEXTURE_WRAP_R,St[A.wrapR]),n.texParameteri(H,n.TEXTURE_MAG_FILTER,Et[A.magFilter]),n.texParameteri(H,n.TEXTURE_MIN_FILTER,Et[A.minFilter]),A.compareFunction&&(n.texParameteri(H,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(H,n.TEXTURE_COMPARE_FUNC,gt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===yn||A.minFilter!==ca&&A.minFilter!==Ts||A.type===si&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let rt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(H,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ct(H,A){let rt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,A.addEventListener("dispose",R));let dt=A.source,_t=d.get(dt);_t===void 0&&(_t={},d.set(dt,_t));let V=W(A);if(V!==H.__cacheKey){_t[V]===void 0&&(_t[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,rt=!0),_t[V].usedTimes++;let w=_t[H.__cacheKey];w!==void 0&&(_t[H.__cacheKey].usedTimes--,w.usedTimes===0&&P(A)),H.__cacheKey=V,H.__webglTexture=_t[V].texture}return rt}function st(H,A,rt){return Math.floor(Math.floor(H/rt)/A)}function ht(H,A,rt,dt){let V=H.updateRanges;if(V.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,rt,dt,A.data);else{V.sort((k,Q)=>k.start-Q.start);let w=0;for(let k=1;k<V.length;k++){let Q=V[w],Y=V[k],ut=Q.start+Q.count,lt=st(Y.start,A.width,4),Rt=st(Q.start,A.width,4);Y.start<=ut+1&&lt===Rt&&st(Y.start+Y.count-1,A.width,4)===lt?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++w,V[w]=Y)}V.length=w+1;let E=e.getParameter(n.UNPACK_ROW_LENGTH),C=e.getParameter(n.UNPACK_SKIP_PIXELS),U=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let k=0,Q=V.length;k<Q;k++){let Y=V[k],ut=Math.floor(Y.start/4),lt=Math.ceil(Y.count/4),Rt=ut%A.width,L=Math.floor(ut/A.width),et=lt,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,Rt,L,et,it,rt,dt,A.data)}H.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,E),e.pixelStorei(n.UNPACK_SKIP_PIXELS,C),e.pixelStorei(n.UNPACK_SKIP_ROWS,U)}}function Mt(H,A,rt){let dt=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=n.TEXTURE_3D);let _t=Ct(H,A),V=A.source;e.bindTexture(dt,H.__webglTexture,n.TEXTURE0+rt);let w=i.get(V);if(V.version!==w.__version||_t===!0){if(e.activeTexture(n.TEXTURE0+rt),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let it=xe.getPrimaries(xe.workingColorSpace),Tt=A.colorSpace===ji?null:xe.getPrimaries(A.colorSpace),At=A.colorSpace===ji||it===Tt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let C=p(A.image,!1,s.maxTextureSize);C=oe(A,C);let U=r.convert(A.format,A.colorSpace),k=r.convert(A.type),Q=b(A.internalFormat,U,k,A.normalized,A.colorSpace,A.isVideoTexture);xt(dt,A);let Y,ut=A.mipmaps,lt=A.isVideoTexture!==!0,Rt=w.__version===void 0||_t===!0,L=V.dataReady,et=M(A,C);if(A.isDepthTexture)Q=v(A.format===As,A.type),Rt&&(lt?e.texStorage2D(n.TEXTURE_2D,1,Q,C.width,C.height):e.texImage2D(n.TEXTURE_2D,0,Q,C.width,C.height,0,U,k,null));else if(A.isDataTexture)if(ut.length>0){lt&&Rt&&e.texStorage2D(n.TEXTURE_2D,et,Q,ut[0].width,ut[0].height);for(let it=0,Tt=ut.length;it<Tt;it++)Y=ut[it],lt?L&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Y.width,Y.height,U,k,Y.data):e.texImage2D(n.TEXTURE_2D,it,Q,Y.width,Y.height,0,U,k,Y.data);A.generateMipmaps=!1}else lt?(Rt&&e.texStorage2D(n.TEXTURE_2D,et,Q,C.width,C.height),L&&ht(A,C,U,k)):e.texImage2D(n.TEXTURE_2D,0,Q,C.width,C.height,0,U,k,C.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&Rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,et,Q,ut[0].width,ut[0].height,C.depth);for(let it=0,Tt=ut.length;it<Tt;it++)if(Y=ut[it],A.format!==ri)if(U!==null)if(lt){if(L)if(A.layerUpdates.size>0){let At=kh(Y.width,Y.height,A.format,A.type);for(let wt of A.layerUpdates){let Ut=Y.data.subarray(wt*At/Y.data.BYTES_PER_ELEMENT,(wt+1)*At/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,wt,Y.width,Y.height,1,U,Ut)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Y.width,Y.height,C.depth,U,Y.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Q,Y.width,Y.height,C.depth,0,Y.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Y.width,Y.height,C.depth,U,k,Y.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Q,Y.width,Y.height,C.depth,0,U,k,Y.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{lt&&Rt&&e.texStorage2D(n.TEXTURE_2D,et,Q,ut[0].width,ut[0].height);for(let it=0,Tt=ut.length;it<Tt;it++)Y=ut[it],A.format!==ri?U!==null?lt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,Y.width,Y.height,U,Y.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Q,Y.width,Y.height,0,Y.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?L&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Y.width,Y.height,U,k,Y.data):e.texImage2D(n.TEXTURE_2D,it,Q,Y.width,Y.height,0,U,k,Y.data)}else if(A.isDataArrayTexture)if(lt){if(Rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,et,Q,C.width,C.height,C.depth),L)if(A.layerUpdates.size>0){let it=kh(C.width,C.height,A.format,A.type);for(let Tt of A.layerUpdates){let At=C.data.subarray(Tt*it/C.data.BYTES_PER_ELEMENT,(Tt+1)*it/C.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Tt,C.width,C.height,1,U,k,At)}A.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,U,k,C.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,C.width,C.height,C.depth,0,U,k,C.data);else if(A.isData3DTexture)lt?(Rt&&e.texStorage3D(n.TEXTURE_3D,et,Q,C.width,C.height,C.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,U,k,C.data)):e.texImage3D(n.TEXTURE_3D,0,Q,C.width,C.height,C.depth,0,U,k,C.data);else if(A.isFramebufferTexture){if(Rt)if(lt)e.texStorage2D(n.TEXTURE_2D,et,Q,C.width,C.height);else{let it=C.width,Tt=C.height;for(let At=0;At<et;At++)e.texImage2D(n.TEXTURE_2D,At,Q,it,Tt,0,U,k,null),it>>=1,Tt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),C.parentNode!==it){it.appendChild(C),f.add(A),it.onpaint=Tt=>{let At=Tt.changedElements;for(let wt of f)At.includes(wt.image)&&(wt.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,C);else{let At=n.RGBA,wt=n.RGBA,Ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,wt,Ut,C)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ut.length>0){if(lt&&Rt){let it=Yt(ut[0]);e.texStorage2D(n.TEXTURE_2D,et,Q,it.width,it.height)}for(let it=0,Tt=ut.length;it<Tt;it++)Y=ut[it],lt?L&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,U,k,Y):e.texImage2D(n.TEXTURE_2D,it,Q,U,k,Y);A.generateMipmaps=!1}else if(lt){if(Rt){let it=Yt(C);e.texStorage2D(n.TEXTURE_2D,et,Q,it.width,it.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,U,k,C)}else e.texImage2D(n.TEXTURE_2D,0,Q,U,k,C);g(A)&&x(dt),w.__version=V.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function Bt(H,A,rt){if(A.image.length!==6)return;let dt=Ct(H,A),_t=A.source;e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+rt);let V=i.get(_t);if(_t.version!==V.__version||dt===!0){e.activeTexture(n.TEXTURE0+rt);let w=xe.getPrimaries(xe.workingColorSpace),E=A.colorSpace===ji?null:xe.getPrimaries(A.colorSpace),C=A.colorSpace===ji||w===E?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);let U=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,Q=[];for(let wt=0;wt<6;wt++)!U&&!k?Q[wt]=p(A.image[wt],!0,s.maxCubemapSize):Q[wt]=k?A.image[wt].image:A.image[wt],Q[wt]=oe(A,Q[wt]);let Y=Q[0],ut=r.convert(A.format,A.colorSpace),lt=r.convert(A.type),Rt=b(A.internalFormat,ut,lt,A.normalized,A.colorSpace),L=A.isVideoTexture!==!0,et=V.__version===void 0||dt===!0,it=_t.dataReady,Tt=M(A,Y);xt(n.TEXTURE_CUBE_MAP,A);let At;if(U){L&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Rt,Y.width,Y.height);for(let wt=0;wt<6;wt++){At=Q[wt].mipmaps;for(let Ut=0;Ut<At.length;Ut++){let Ot=At[Ut];A.format!==ri?ut!==null?L?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,0,0,Ot.width,Ot.height,ut,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,Rt,Ot.width,Ot.height,0,Ot.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,0,0,Ot.width,Ot.height,ut,lt,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut,Rt,Ot.width,Ot.height,0,ut,lt,Ot.data)}}}else{if(At=A.mipmaps,L&&et){At.length>0&&Tt++;let wt=Yt(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Tt,Rt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(k){L?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Q[wt].width,Q[wt].height,ut,lt,Q[wt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Rt,Q[wt].width,Q[wt].height,0,ut,lt,Q[wt].data);for(let Ut=0;Ut<At.length;Ut++){let le=At[Ut].image[wt].image;L?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,0,0,le.width,le.height,ut,lt,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,Rt,le.width,le.height,0,ut,lt,le.data)}}else{L?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,ut,lt,Q[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Rt,ut,lt,Q[wt]);for(let Ut=0;Ut<At.length;Ut++){let Ot=At[Ut];L?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,0,0,ut,lt,Ot.image[wt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ut+1,Rt,ut,lt,Ot.image[wt])}}}g(A)&&x(n.TEXTURE_CUBE_MAP),V.__version=_t.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}function kt(H,A,rt,dt,_t,V){let w=r.convert(rt.format,rt.colorSpace),E=r.convert(rt.type),C=b(rt.internalFormat,w,E,rt.normalized,rt.colorSpace),U=i.get(A),k=i.get(rt);if(k.__renderTarget=A,!U.__hasExternalTextures){let Q=Math.max(1,A.width>>V),Y=Math.max(1,A.height>>V);_t===n.TEXTURE_3D||_t===n.TEXTURE_2D_ARRAY?e.texImage3D(_t,V,C,Q,Y,A.depth,0,w,E,null):e.texImage2D(_t,V,C,Q,Y,0,w,E,null)}e.bindFramebuffer(n.FRAMEBUFFER,H),zt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,dt,_t,k.__webglTexture,0,Ft(A)):(_t===n.TEXTURE_2D||_t>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,dt,_t,k.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function q(H,A,rt){if(n.bindRenderbuffer(n.RENDERBUFFER,H),A.depthBuffer){let dt=A.depthTexture,_t=dt&&dt.isDepthTexture?dt.type:null,V=v(A.stencilBuffer,_t),w=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;zt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(A),V,A.width,A.height):rt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(A),V,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,V,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,H)}else{let dt=A.textures;for(let _t=0;_t<dt.length;_t++){let V=dt[_t],w=r.convert(V.format,V.colorSpace),E=r.convert(V.type),C=b(V.internalFormat,w,E,V.normalized,V.colorSpace);zt(A)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(A),C,A.width,A.height):rt?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(A),C,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,C,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(H,A,rt){let dt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,H),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _t=i.get(A.depthTexture);if(_t.__renderTarget=A,(!_t.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),dt){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,A.depthTexture.addEventListener("dispose",R)),_t.__webglTexture===void 0){_t.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,_t.__webglTexture),xt(n.TEXTURE_CUBE_MAP,A.depthTexture);let U=r.convert(A.depthTexture.format),k=r.convert(A.depthTexture.type),Q;A.depthTexture.format===Ri?Q=n.DEPTH_COMPONENT24:A.depthTexture.format===As&&(Q=n.DEPTH24_STENCIL8);for(let Y=0;Y<6;Y++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Q,A.width,A.height,0,U,k,null)}}else tt(A.depthTexture,0);let V=_t.__webglTexture,w=Ft(A),E=dt?n.TEXTURE_CUBE_MAP_POSITIVE_X+rt:n.TEXTURE_2D,C=A.depthTexture.format===As?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ri)zt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,E,V,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,C,E,V,0);else if(A.depthTexture.format===As)zt(A)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,E,V,0,w):n.framebufferTexture2D(n.FRAMEBUFFER,C,E,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(H){let A=i.get(H),rt=H.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==H.depthTexture){let dt=H.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),dt){let _t=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,dt.removeEventListener("dispose",_t)};dt.addEventListener("dispose",_t),A.__depthDisposeCallback=_t}A.__boundDepthTexture=dt}if(H.depthTexture&&!A.__autoAllocateDepthBuffer)if(rt)for(let dt=0;dt<6;dt++)bt(A.__webglFramebuffer[dt],H,dt);else{let dt=H.texture.mipmaps;dt&&dt.length>0?bt(A.__webglFramebuffer[0],H,0):bt(A.__webglFramebuffer,H,0)}else if(rt){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]===void 0)A.__webglDepthbuffer[dt]=n.createRenderbuffer(),q(A.__webglDepthbuffer[dt],H,!1);else{let _t=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=A.__webglDepthbuffer[dt];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,V)}}else{let dt=H.texture.mipmaps;if(dt&&dt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),q(A.__webglDepthbuffer,H,!1);else{let _t=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,V)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function J(H,A,rt){let dt=i.get(H);A!==void 0&&kt(dt.__webglFramebuffer,H,H.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),rt!==void 0&&Z(H)}function nt(H){let A=H.texture,rt=i.get(H),dt=i.get(A);H.addEventListener("dispose",S);let _t=H.textures,V=H.isWebGLCubeRenderTarget===!0,w=_t.length>1;if(w||(dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture()),dt.__version=A.version,o.memory.textures++),V){rt.__webglFramebuffer=[];for(let E=0;E<6;E++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[E]=[];for(let C=0;C<A.mipmaps.length;C++)rt.__webglFramebuffer[E][C]=n.createFramebuffer()}else rt.__webglFramebuffer[E]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let E=0;E<A.mipmaps.length;E++)rt.__webglFramebuffer[E]=n.createFramebuffer()}else rt.__webglFramebuffer=n.createFramebuffer();if(w)for(let E=0,C=_t.length;E<C;E++){let U=i.get(_t[E]);U.__webglTexture===void 0&&(U.__webglTexture=n.createTexture(),o.memory.textures++)}if(H.samples>0&&zt(H)===!1){rt.__webglMultisampledFramebuffer=n.createFramebuffer(),rt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let E=0;E<_t.length;E++){let C=_t[E];rt.__webglColorRenderbuffer[E]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,rt.__webglColorRenderbuffer[E]);let U=r.convert(C.format,C.colorSpace),k=r.convert(C.type),Q=b(C.internalFormat,U,k,C.normalized,C.colorSpace,H.isXRRenderTarget===!0),Y=Ft(H);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,Q,H.width,H.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+E,n.RENDERBUFFER,rt.__webglColorRenderbuffer[E])}n.bindRenderbuffer(n.RENDERBUFFER,null),H.depthBuffer&&(rt.__webglDepthRenderbuffer=n.createRenderbuffer(),q(rt.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,dt.__webglTexture),xt(n.TEXTURE_CUBE_MAP,A);for(let E=0;E<6;E++)if(A.mipmaps&&A.mipmaps.length>0)for(let C=0;C<A.mipmaps.length;C++)kt(rt.__webglFramebuffer[E][C],H,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,C);else kt(rt.__webglFramebuffer[E],H,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+E,0);g(A)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(w){for(let E=0,C=_t.length;E<C;E++){let U=_t[E],k=i.get(U),Q=n.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Q=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,k.__webglTexture),xt(Q,U),kt(rt.__webglFramebuffer,H,U,n.COLOR_ATTACHMENT0+E,Q,0),g(U)&&x(Q)}e.unbindTexture()}else{let E=n.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(E=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(E,dt.__webglTexture),xt(E,A),A.mipmaps&&A.mipmaps.length>0)for(let C=0;C<A.mipmaps.length;C++)kt(rt.__webglFramebuffer[C],H,A,n.COLOR_ATTACHMENT0,E,C);else kt(rt.__webglFramebuffer,H,A,n.COLOR_ATTACHMENT0,E,0);g(A)&&x(E),e.unbindTexture()}H.depthBuffer&&Z(H)}function ct(H){let A=H.textures;for(let rt=0,dt=A.length;rt<dt;rt++){let _t=A[rt];if(g(_t)){let V=_(H),w=i.get(_t).__webglTexture;e.bindTexture(V,w),x(V),e.unbindTexture()}}}let pt=[],It=[];function Lt(H){if(H.samples>0){if(zt(H)===!1){let A=H.textures,rt=H.width,dt=H.height,_t=n.COLOR_BUFFER_BIT,V=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,w=i.get(H),E=A.length>1;if(E)for(let U=0;U<A.length;U++)e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer);let C=H.texture.mipmaps;C&&C.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let U=0;U<A.length;U++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(_t|=n.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(_t|=n.STENCIL_BUFFER_BIT)),E){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,w.__webglColorRenderbuffer[U]);let k=i.get(A[U]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,k,0)}n.blitFramebuffer(0,0,rt,dt,0,0,rt,dt,_t,n.NEAREST),c===!0&&(pt.length=0,It.length=0,pt.push(n.COLOR_ATTACHMENT0+U),H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&(pt.push(V),It.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),E)for(let U=0;U<A.length;U++){e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,w.__webglColorRenderbuffer[U]);let k=i.get(A[U]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,k,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.storeMultisampledDepthBuffer===!1&&c){let A=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function Ft(H){return Math.min(s.maxSamples,H.samples)}function zt(H){let A=i.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function $(H){let A=o.render.frame;u.get(H)!==A&&(u.set(H,A),H.update())}function oe(H,A){let rt=H.colorSpace,dt=H.format,_t=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||rt!==To&&rt!==ji&&(xe.getTransfer(rt)===Ie?(dt!==ri||_t!==Wn)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",rt)),A}function Yt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(l.width=H.naturalWidth||H.width,l.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(l.width=H.displayWidth,l.height=H.displayHeight):(l.width=H.width,l.height=H.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.getTextureUnits=F,this.setTextureUnits=D,this.setTexture2D=tt,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=J,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function YM(n,t){function e(i,s=ji){let r,o=xe.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ah)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wh)return n.BYTE;if(i===Eh)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===Kc)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===Rh)return n.ALPHA;if(i===Ch)return n.RGB;if(i===ri)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===As)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===el)return n.RED_INTEGER;if(i===Rs)return n.RG;if(i===nl)return n.RG_INTEGER;if(i===il)return n.RGBA_INTEGER;if(i===la||i===ua||i===ha||i===fa)if(o===Ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===rl||i===ol||i===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ll||i===ul||i===hl||i===fl||i===da||i===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===ll)return o===Ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===hl)return r.COMPRESSED_R11_EAC;if(i===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===da)return r.COMPRESSED_RG11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pl||i===ml||i===gl||i===yl||i===xl||i===bl||i===vl||i===_l||i===Ml||i===Sl||i===wl||i===El||i===Tl||i===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ml)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return o===Ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===Cl||i===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Rl)return o===Ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pl||i===Ll||i===pa||i===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var $M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
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

}`,Kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new We({vertexShader:$M,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends Ci{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null,y=typeof XRWebGLBinding<"u",p=new Kh,g={},x=e.getContextAttributes(),_=null,b=null,v=[],M=[],R=new Dt,S=null,T=null,P=new Un;P.viewport=new Pe;let N=new Un;N.viewport=new Pe;let B=[P,N],O=new qc,F=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ht=v[st];return ht===void 0&&(ht=new Pr,v[st]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(st){let ht=v[st];return ht===void 0&&(ht=new Pr,v[st]=ht),ht.getGripSpace()},this.getHand=function(st){let ht=v[st];return ht===void 0&&(ht=new Pr,v[st]=ht),ht.getHandSpace()};function z(st){let ht=M.indexOf(st.inputSource);if(ht===-1)return;let Mt=v[ht];Mt!==void 0&&(Mt.update(st.inputSource,st.frame,l||o),Mt.dispatchEvent({type:st.type,data:st.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let st=0;st<v.length;st++){let ht=M[st];ht!==null&&(M[st]=null,v[st].disconnect(ht))}F=null,D=null,p.reset();for(let st in g)delete g[st];if(t.setRenderTarget(_),d=null,h=null,f=null,s=null,b=null,Ct.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),T!==null){let st=T.camera;st.fov=T.fov,st.zoom=T.zoom,st.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(st){l=st},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Bt=null,kt=null;x.depth&&(kt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?As:Ri,Bt=x.stencil?Wr:yi);let q={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(q),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Gn(h.textureWidth,h.textureHeight,{format:ri,type:Wn,depthTexture:new gs(h.textureWidth,h.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Gn(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(st){for(let ht=0;ht<st.removed.length;ht++){let Mt=st.removed[ht],Bt=M.indexOf(Mt);Bt>=0&&(M[Bt]=null,v[Bt].disconnect(Mt))}for(let ht=0;ht<st.added.length;ht++){let Mt=st.added[ht],Bt=M.indexOf(Mt);if(Bt===-1){for(let q=0;q<v.length;q++)if(q>=M.length){M.push(Mt),Bt=q;break}else if(M[q]===null){M[q]=Mt,Bt=q;break}if(Bt===-1)break}let kt=v[Bt];kt&&kt.connect(Mt)}}let K=new G,j=new G;function X(st,ht,Mt){K.setFromMatrixPosition(ht.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);let Bt=K.distanceTo(j),kt=ht.projectionMatrix.elements,q=Mt.projectionMatrix.elements,bt=kt[14]/(kt[10]-1),Z=kt[14]/(kt[10]+1),J=(kt[9]+1)/kt[5],nt=(kt[9]-1)/kt[5],ct=(kt[8]-1)/kt[0],pt=(q[8]+1)/q[0],It=bt*ct,Lt=bt*pt,Ft=Bt/(-ct+pt),zt=Ft*-ct;if(ht.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(zt),st.translateZ(Ft),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),kt[10]===-1)st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let $=bt+Ft,oe=Z+Ft,Yt=It-zt,H=Lt+(Bt-zt),A=J*Z/oe*$,rt=nt*Z/oe*$;st.projectionMatrix.makePerspective(Yt,H,A,rt,$,oe),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function St(st,ht){ht===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ht.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ht=st.near,Mt=st.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(Mt=p.depthFar)),O.near=N.near=P.near=ht,O.far=N.far=P.far=Mt,(F!==O.near||D!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),F=O.near,D=O.far),O.layers.mask=st.layers.mask|6,P.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let Bt=st.parent,kt=O.cameras;St(O,Bt);for(let q=0;q<kt.length;q++)St(kt[q],Bt);kt.length===2?X(O,P,N):O.projectionMatrix.copy(P.projectionMatrix),T===null&&st.isPerspectiveCamera&&(T={camera:st,fov:st.fov,zoom:st.zoom}),Et(st,O,Bt)};function Et(st,ht,Mt){Mt===null?st.matrix.copy(ht.matrixWorld):(st.matrix.copy(Mt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ht.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Rr*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(st){c=st,h!==null&&(h.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(st){return g[st]};let gt=null;function xt(st,ht){if(u=ht.getViewerPose(l||o),m=ht,u!==null){let Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Bt=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,Bt=!0);for(let Z=0;Z<Mt.length;Z++){let J=Mt[Z],nt=null;if(d!==null)nt=d.getViewport(J);else{let pt=f.getViewSubImage(h,J);nt=pt.viewport,Z===0&&(t.setRenderTargetTextures(b,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(b))}let ct=B[Z];ct===void 0&&(ct=new Un,ct.layers.enable(Z),ct.viewport=new Pe,B[Z]=ct),ct.matrix.fromArray(J.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(J.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(nt.x,nt.y,nt.width,nt.height),Z===0&&(O.matrix.copy(ct.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Bt===!0&&O.cameras.push(ct)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let Z=f.getDepthInformation(Mt[0]);Z&&Z.isValid&&Z.texture&&p.init(Z,s.renderState)}if(kt&&kt.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let Z=0;Z<Mt.length;Z++){let J=Mt[Z].camera;if(J){let nt=g[J];nt||(nt=new Oo,g[J]=nt);let ct=f.getCameraImage(J);nt.sourceTexture=ct}}}}for(let Mt=0;Mt<v.length;Mt++){let Bt=M[Mt],kt=v[Mt];Bt!==null&&kt!==void 0&&kt.update(Bt,ht,l||o)}gt&&gt(st,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),m=null}let Ct=new im;Ct.setAnimationLoop(xt),this.setAnimationLoop=function(st){gt=st},this.dispose=function(){}}},jM=new ve,lm=new pe;lm.set(-1,0,0,0,1,0,0,0,1);function KM(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Dh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,_,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),y(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,x,_):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===kn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===kn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x=t.get(g),_=x.envMap,b=x.envMapRotation;_&&(p.envMap.value=_,p.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(lm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,x,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=_*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function y(p,g){let x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){let M=v.program;i.uniformBlockBinding(b,M)}function l(b,v){let M=s[b.id];M===void 0&&(p(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",x));let R=v.program;i.updateUBOMapping(b,R);let S=t.render.frame;r[b.id]!==S&&(h(b),r[b.id]=S)}function u(b){let v=f();b.__bindingPointIndex=v;let M=n.createBuffer(),R=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let v=s[b.id],M=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,T=M.length;S<T;S++){let P=M[S];if(Array.isArray(P))for(let N=0,B=P.length;N<B;N++)d(P[N],S,N,R);else d(P,S,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,v,M,R){if(y(b,v,M,R)===!0){let S=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){let B=T[N],O=g(B);m(B,b.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,b.__data)}}function m(b,v,M){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,M)}function y(b,v,M,R){let S=b.value,T=v+"_"+M;if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:ArrayBuffer.isView(S)?R[T]=S.slice():R[T]=S.clone(),!0;{let P=R[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return R[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(P.equals(S)===!1)return P.copy(S),!0}}return!1}function p(b){let v=b.uniforms,M=0,R=16;for(let T=0,P=v.length;T<P;T++){let N=Array.isArray(v[T])?v[T]:[v[T]];for(let B=0,O=N.length;B<O;B++){let F=N[B],D=Array.isArray(F.value)?F.value:[F.value];for(let z=0,W=D.length;z<W;z++){let tt=D[z],K=g(tt),j=M%R,X=j%K.boundary,St=j+X;M+=X,St!==0&&R-St<K.storage&&(M+=R-St),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=K.storage}}}let S=M%R;return S>0&&(M+=R-S),b.__size=M,b.__cache={},this}function g(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):ae("WebGLRenderer: Unsupported uniform value type.",b),v}function x(b){let v=b.target;v.removeEventListener("dispose",x);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function _(){for(let b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:_}}var QM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function tS(){return Ni===null&&(Ni=new Fo(QM,16,16,Rs,xi),Ni.name="DFG_LUT",Ni.minFilter=_n,Ni.magFilter=_n,Ni.wrapS=Ti,Ni.wrapT=Ti,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var zl=class{constructor(t={}){let{canvas:e=Ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Wn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=d,p=new Set([il,nl,el]),g=new Set([Wn,yi,Vr,Wr,Jc,Qc]),x=new Uint32Array(4),_=new Int32Array(4),b=new G,v=null,M=null,R=[],S=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,B=null,O=null,F=null,D=null;this._outputColorSpace=$e;let z=0,W=0,tt=null,K=-1,j=null,X=new Pe,St=new Pe,Et=null,gt=new qt(0),xt=0,Ct=e.width,st=e.height,ht=1,Mt=null,Bt=null,kt=new Pe(0,0,Ct,st),q=new Pe(0,0,Ct,st),bt=!1,Z=new Nr,J=!1,nt=!1,ct=new ve,pt=new G,It=new Pe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function zt(){return tt===null?ht:1}let $=i;function oe(I,ot){return e.getContext(I,ot)}let Yt,H,A,rt,dt,_t,V,w,E,C,U,k,Q,Y,ut,lt,Rt,L,et,it,Tt,At,wt;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",_e,!1),$===null){let ot="webgl2";if($=oe(ot,I),$===null)throw oe(ot)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(I){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),he("WebGLRenderer: "+I.message),I}function Ut(){Yt=new a_($),Yt.init(),Tt=new YM($,Yt),H=new Kv($,Yt,t,Tt),A=new XM($,Yt),H.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),O=$.createFramebuffer(),F=$.createFramebuffer(),D=$.createFramebuffer(),rt=new u_($),dt=new PM,_t=new qM($,Yt,A,dt,H,Tt,rt),V=new o_(P),w=new fb($),At=new Zv($,w),E=new c_($,w,rt,At),C=new f_($,E,w,At,rt),L=new h_($,H,_t),ut=new Jv(dt),U=new IM(P,V,Yt,H,At,ut),k=new KM(P,dt),Q=new NM,Y=new BM(Yt),Rt=new $v(P,V,A,C,m,c),lt=new WM(P,C,H),wt=new JM($,rt,H,A),et=new jv($,Yt,rt),it=new l_($,Yt,rt),rt.programs=U.programs,P.capabilities=H,P.extensions=Yt,P.properties=dt,P.renderLists=Q,P.shadowMap=lt,P.state=A,P.info=rt}y!==Wn&&(T=new p_(y,e.width,e.height,a,s,r));let Ot=new Jh(P,$);this.xr=Ot,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let I=Yt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Yt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(I){I!==void 0&&(ht=I,this.setSize(Ct,st,!1))},this.getSize=function(I){return I.set(Ct,st)},this.setSize=function(I,ot,vt=!0){if(Ot.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=I,st=ot,e.width=Math.floor(I*ht),e.height=Math.floor(ot*ht),vt===!0&&(e.style.width=I+"px",e.style.height=ot+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,I,ot)},this.getDrawingBufferSize=function(I){return I.set(Ct*ht,st*ht).floor()},this.setDrawingBufferSize=function(I,ot,vt){Ct=I,st=ot,ht=vt,e.width=Math.floor(I*vt),e.height=Math.floor(ot*vt),this.setViewport(0,0,I,ot)},this.setEffects=function(I){if(y===Wn){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let ot=0;ot<I.length;ot++)if(I[ot].isOutputPass===!0){ae("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(X)},this.getViewport=function(I){return I.copy(kt)},this.setViewport=function(I,ot,vt,yt){I.isVector4?kt.set(I.x,I.y,I.z,I.w):kt.set(I,ot,vt,yt),A.viewport(X.copy(kt).multiplyScalar(ht).round())},this.getScissor=function(I){return I.copy(q)},this.setScissor=function(I,ot,vt,yt){I.isVector4?q.set(I.x,I.y,I.z,I.w):q.set(I,ot,vt,yt),A.scissor(St.copy(q).multiplyScalar(ht).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(I){A.setScissorTest(bt=I)},this.setOpaqueSort=function(I){Mt=I},this.setTransparentSort=function(I){Bt=I},this.getClearColor=function(I){return I.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(I=!0,ot=!0,vt=!0){let yt=0;if(I){let mt=!1;if(tt!==null){let Xt=tt.texture.format;mt=p.has(Xt)}if(mt){let Xt=tt.texture.type,$t=g.has(Xt),Gt=Rt.getClearColor(),jt=Rt.getClearAlpha(),te=Gt.r,fe=Gt.g,ge=Gt.b;$t?(x[0]=te,x[1]=fe,x[2]=ge,x[3]=jt,$.clearBufferuiv($.COLOR,0,x)):(_[0]=te,_[1]=fe,_[2]=ge,_[3]=jt,$.clearBufferiv($.COLOR,0,_))}else yt|=$.COLOR_BUFFER_BIT}ot&&(yt|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),vt&&(yt|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),yt!==0&&$.clear(yt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),B=I},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),Rt.dispose(),Q.dispose(),Y.dispose(),dt.dispose(),V.dispose(),C.dispose(),At.dispose(),wt.dispose(),U.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",mn),Ot.removeEventListener("sessionend",Pt),ft.stop()};function le(I){I.preventDefault(),Co("WebGLRenderer: Context Lost."),N=!0}function se(){Co("WebGLRenderer: Context Restored."),N=!1;let I=rt.autoReset,ot=lt.enabled,vt=lt.autoUpdate,yt=lt.needsUpdate,mt=lt.type;Ut(),rt.autoReset=I,lt.enabled=ot,lt.autoUpdate=vt,lt.needsUpdate=yt,lt.type=mt}function _e(I){he("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ee(I){let ot=I.target;ot.removeEventListener("dispose",Ee),on(ot)}function on(I){Ye(I),dt.remove(I)}function Ye(I){let ot=dt.get(I).programs;ot!==void 0&&(ot.forEach(function(vt){U.releaseProgram(vt)}),I.isShaderMaterial&&U.releaseShaderCache(I))}this.renderBufferDirect=function(I,ot,vt,yt,mt,Xt){ot===null&&(ot=Lt);let $t=mt.isMesh&&mt.matrixWorld.determinantAffine()<0,Gt=Ne(I,ot,vt,yt,mt);A.setMaterial(yt,$t);let jt=vt.index,te=1;if(yt.wireframe===!0){if(jt=E.getWireframeAttribute(vt),jt===void 0)return;te=2}let fe=vt.drawRange,ge=vt.attributes.position,Qt=fe.start*te,Ce=(fe.start+fe.count)*te;Xt!==null&&(Qt=Math.max(Qt,Xt.start*te),Ce=Math.min(Ce,(Xt.start+Xt.count)*te)),jt!==null?(Qt=Math.max(Qt,0),Ce=Math.min(Ce,jt.count)):ge!=null&&(Qt=Math.max(Qt,0),Ce=Math.min(Ce,ge.count));let sn=Ce-Qt;if(sn<0||sn===1/0)return;At.setup(mt,yt,Gt,vt,jt);let ze,Fe=et;if(jt!==null&&(ze=w.get(jt),Fe=it,Fe.setIndex(ze)),mt.isMesh)yt.wireframe===!0?(A.setLineWidth(yt.wireframeLinewidth*zt()),Fe.setMode($.LINES)):Fe.setMode($.TRIANGLES);else if(mt.isLine){let An=yt.linewidth;An===void 0&&(An=1),A.setLineWidth(An*zt()),mt.isLineSegments?Fe.setMode($.LINES):mt.isLineLoop?Fe.setMode($.LINE_LOOP):Fe.setMode($.LINE_STRIP)}else mt.isPoints?Fe.setMode($.POINTS):mt.isSprite&&Fe.setMode($.TRIANGLES);if(mt.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(mt._multiDrawStarts,mt._multiDrawCounts,mt._multiDrawCount);else{let An=mt._multiDrawStarts,Kt=mt._multiDrawCounts,Dn=mt._multiDrawCount,Se=jt?w.get(jt).bytesPerElement:1,ti=dt.get(yt).currentProgram.getUniforms();for(let wi=0;wi<Dn;wi++)ti.setValue($,"_gl_DrawID",wi),Fe.render(An[wi]/Se,Kt[wi])}else if(mt.isInstancedMesh)Fe.renderInstances(Qt,sn,mt.count);else if(vt.isInstancedBufferGeometry){let An=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,Kt=Math.min(vt.instanceCount,An);Fe.renderInstances(Qt,sn,Kt)}else Fe.render(Qt,sn)};function dn(I,ot,vt,yt){B!==null&&I.isNodeMaterial&&B.setObject(yt,I),J===!0&&ut.setState(I,vt,!1),I.transparent===!0&&I.side===je&&I.forceSinglePass===!1?(I.side=kn,I.needsUpdate=!0,Je(I,ot,yt),I.side=ws,I.needsUpdate=!0,Je(I,ot,yt),I.side=je):Je(I,ot,yt)}this.compile=function(I,ot,vt=null){vt===null&&(vt=I),B!==null&&B.renderStart(I,ot,vt),M=Y.get(vt),M.init(ot),S.push(M),vt.traverseVisible(function(mt){mt.isLight&&mt.layers.test(ot.layers)&&(M.pushLight(mt),mt.castShadow&&M.pushShadow(mt))}),I!==vt&&I.traverseVisible(function(mt){mt.isLight&&mt.layers.test(ot.layers)&&(M.pushLight(mt),mt.castShadow&&M.pushShadow(mt))}),M.setupLights(),B!==null&&B.updateLights(M.state.lightsArray),nt=this.localClippingEnabled,J=ut.init(this.clippingPlanes,nt),J===!0&&ut.setGlobalState(this.clippingPlanes,ot),B!==null&&lt.render(M.state.shadowsArray,vt,ot);let yt=new Set;return I.traverse(function(mt){if(!(mt.isMesh||mt.isPoints||mt.isLine||mt.isSprite))return;let Xt=mt.material;if(Xt)if(Array.isArray(Xt))for(let $t=0;$t<Xt.length;$t++){let Gt=Xt[$t];dn(Gt,vt,ot,mt),yt.add(Gt)}else dn(Xt,vt,ot,mt),yt.add(Xt)}),M=S.pop(),B!==null&&B.renderEnd(),yt},this.compileAsync=function(I,ot,vt=null){let yt=this.compile(I,ot,vt);return new Promise(mt=>{function Xt(){if(yt.forEach(function($t){let jt=dt.get($t).currentProgram;(jt===void 0||jt.isReady())&&yt.delete($t)}),yt.size===0){mt(I);return}setTimeout(Xt,10)}Yt.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let nn=null;function pn(I){nn&&nn(I)}function mn(){ft.stop()}function Pt(){ft.start()}let ft=new im;ft.setAnimationLoop(pn),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(I){nn=I,Ot.setAnimationLoop(I),I===null?ft.stop():ft.start()},Ot.addEventListener("sessionstart",mn),Ot.addEventListener("sessionend",Pt),this.render=function(I,ot){if(ot!==void 0&&ot.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(I,ot);let vt=Ot.enabled===!0&&Ot.isPresenting===!0,yt=T!==null&&(tt===null||vt)&&T.begin(P,tt);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(ot),ot=Ot.getCamera()),I.isScene===!0&&I.onBeforeRender(P,I,ot,tt),M=Y.get(I,S.length),M.init(ot),M.state.textureUnits=_t.getTextureUnits(),S.push(M),ct.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),Z.setFromProjectionMatrix(ct,di,ot.reversedDepth),nt=this.localClippingEnabled,J=ut.init(this.clippingPlanes,nt),v=Q.get(I,R.length),v.init(),R.push(v),Ot.enabled===!0&&Ot.isPresenting===!0){let $t=P.xr.getDepthSensingMesh();$t!==null&&Nt($t,ot,-1/0,P.sortObjects)}Nt(I,ot,0,P.sortObjects),v.finish(),B!==null&&B.updateLights(M.state.lightsArray),P.sortObjects===!0&&v.sort(Mt,Bt),Ft=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Ft&&Rt.addToRenderList(v,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&ut.beginShadows();let mt=M.state.shadowsArray;if(lt.render(mt,I,ot),J===!0&&ut.endShadows(),(yt&&T.hasRenderPass())===!1){let $t=v.opaque,Gt=v.transmissive;if(M.setupLights(),ot.isArrayCamera){let jt=ot.cameras;if(Gt.length>0)for(let te=0,fe=jt.length;te<fe;te++){let ge=jt[te];Wt($t,Gt,I,ge)}Ft&&Rt.render(I);for(let te=0,fe=jt.length;te<fe;te++){let ge=jt[te];Ht(v,I,ge,ge.viewport)}}else Gt.length>0&&Wt($t,Gt,I,ot),Ft&&Rt.render(I),Ht(v,I,ot)}tt!==null&&W===0&&(_t.updateMultisampleRenderTarget(tt),_t.updateRenderTargetMipmap(tt)),yt&&T.end(P),I.isScene===!0&&I.onAfterRender(P,I,ot),At.resetDefaultState(),K=-1,j=null,S.pop(),S.length>0?(M=S[S.length-1],_t.setTextureUnits(M.state.textureUnits),J===!0&&ut.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?v=R[R.length-1]:v=null,B!==null&&B.renderEnd()};function Nt(I,ot,vt,yt){if(I.visible===!1)return;if(I.layers.test(ot.layers)){if(I.isGroup)vt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ot);else if(I.isLightProbeGrid)M.pushLightProbeGrid(I);else if(I.isLight)M.pushLight(I),I.castShadow&&M.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(Z)){yt&&It.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ct);let $t=C.update(I),Gt=I.material;Gt.visible&&v.push(I,$t,Gt,vt,It.z,null,ot)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(Z))){let $t=C.update(I),Gt=I.material;if(yt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),It.copy(I.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),It.copy($t.boundingSphere.center)),It.applyMatrix4(I.matrixWorld).applyMatrix4(ct)),Array.isArray(Gt)){let jt=$t.groups;for(let te=0,fe=jt.length;te<fe;te++){let ge=jt[te],Qt=Gt[ge.materialIndex];Qt&&Qt.visible&&v.push(I,$t,Qt,vt,It.z,ge,ot)}}else Gt.visible&&v.push(I,$t,Gt,vt,It.z,null,ot)}}let Xt=I.children;for(let $t=0,Gt=Xt.length;$t<Gt;$t++)Nt(Xt[$t],ot,vt,yt)}function Ht(I,ot,vt,yt){let{opaque:mt,transmissive:Xt,transparent:$t}=I;M.setupLightsView(vt),J===!0&&ut.setGlobalState(P.clippingPlanes,vt),yt&&A.viewport(X.copy(yt)),mt.length>0&&Jt(mt,ot,vt),Xt.length>0&&Jt(Xt,ot,vt),$t.length>0&&Jt($t,ot,vt),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Wt(I,ot,vt,yt){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[yt.id]===void 0){let Qt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[yt.id]=new Gn(1,1,{generateMipmaps:!0,type:Qt?xi:Wn,minFilter:Ts,samples:Math.max(4,H.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Xt=M.state.transmissionRenderTarget[yt.id],$t=yt.viewport||X;Xt.setSize($t.z*P.transmissionResolutionScale,$t.w*P.transmissionResolutionScale);let Gt=P.getRenderTarget(),jt=P.getActiveCubeFace(),te=P.getActiveMipmapLevel();P.setRenderTarget(Xt),P.getClearColor(gt),xt=P.getClearAlpha(),xt<1&&P.setClearColor(16777215,.5),P.clear(),Ft&&Rt.render(vt);let fe=P.toneMapping;P.toneMapping=gi;let ge=yt.viewport;if(yt.viewport!==void 0&&(yt.viewport=void 0),M.setupLightsView(yt),J===!0&&ut.setGlobalState(P.clippingPlanes,yt),Jt(I,vt,yt),_t.updateMultisampleRenderTarget(Xt),_t.updateRenderTargetMipmap(Xt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ce=0,sn=ot.length;Ce<sn;Ce++){let ze=ot[Ce],{object:Fe,geometry:An,material:Kt,group:Dn}=ze;if(Kt.side===je&&Fe.layers.test(yt.layers)){let Se=Kt.side;Kt.side=kn,Kt.needsUpdate=!0,be(Fe,vt,yt,An,Kt,Dn),Kt.side=Se,Kt.needsUpdate=!0,Qt=!0}}Qt===!0&&(_t.updateMultisampleRenderTarget(Xt),_t.updateRenderTargetMipmap(Xt))}P.setRenderTarget(Gt,jt,te),P.setClearColor(gt,xt),ge!==void 0&&(yt.viewport=ge),P.toneMapping=fe}function Jt(I,ot,vt){let yt=ot.isScene===!0?ot.overrideMaterial:null;for(let mt=0,Xt=I.length;mt<Xt;mt++){let $t=I[mt],{object:Gt,geometry:jt,group:te}=$t,fe=$t.material;fe.allowOverride===!0&&yt!==null&&(fe=yt),Gt.layers.test(vt.layers)&&be(Gt,ot,vt,jt,fe,te)}}function be(I,ot,vt,yt,mt,Xt){B!==null&&mt.isNodeMaterial&&B.setObject(I,mt),I.onBeforeRender(P,ot,vt,yt,mt,Xt),I.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),mt.onBeforeRender(P,ot,vt,yt,I,Xt),mt.transparent===!0&&mt.side===je&&mt.forceSinglePass===!1?(mt.side=kn,mt.needsUpdate=!0,P.renderBufferDirect(vt,ot,yt,mt,I,Xt),mt.side=ws,mt.needsUpdate=!0,P.renderBufferDirect(vt,ot,yt,mt,I,Xt),mt.side=je):P.renderBufferDirect(vt,ot,yt,mt,I,Xt),I.onAfterRender(P,ot,vt,yt,mt,Xt)}function Je(I,ot,vt){ot.isScene!==!0&&(ot=Lt);let yt=dt.get(I),mt=M.state.lights,Xt=M.state.shadowsArray,$t=mt.state.version,Gt=U.getParameters(I,mt.state,Xt,ot,vt,M.state.lightProbeGridArray),jt=U.getProgramCacheKey(Gt),te=yt.programs;yt.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?ot.environment:null,yt.fog=ot.fog;let fe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;yt.envMap=V.get(I.envMap||yt.environment,fe),yt.envMapRotation=yt.environment!==null&&I.envMap===null?ot.environmentRotation:I.envMapRotation,te===void 0&&(I.addEventListener("dispose",Ee),te=new Map,yt.programs=te);let ge=te.get(jt);if(ge!==void 0){if(yt.currentProgram===ge&&yt.lightsStateVersion===$t)return an(I,Gt),ge}else Gt.uniforms=U.getUniforms(I),B!==null&&I.isNodeMaterial&&B.build(I,vt,Gt),I.onBeforeCompile(Gt,P),ge=U.acquireProgram(Gt,jt),te.set(jt,ge),yt.uniforms=Gt.uniforms;let Qt=yt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qt.clippingPlanes=ut.uniform),an(I,Gt),yt.needsLights=Qn(I),yt.lightsStateVersion=$t,yt.needsLights&&(Qt.ambientLightColor.value=mt.state.ambient,Qt.lightProbe.value=mt.state.probe,Qt.sunLights.value=mt.state.sun,Qt.sunLightShadows.value=mt.state.sunShadow,Qt.directionalLights.value=mt.state.directional,Qt.directionalLightShadows.value=mt.state.directionalShadow,Qt.spotLights.value=mt.state.spot,Qt.spotLightShadows.value=mt.state.spotShadow,Qt.rectAreaLights.value=mt.state.rectArea,Qt.ltc_1.value=mt.state.rectAreaLTC1,Qt.ltc_2.value=mt.state.rectAreaLTC2,Qt.pointLights.value=mt.state.point,Qt.pointLightShadows.value=mt.state.pointShadow,Qt.hemisphereLights.value=mt.state.hemi,Qt.sunShadowMatrix.value=mt.state.sunShadowMatrix,Qt.sunShadowCascade.value=mt.state.sunShadowCascade,Qt.directionalShadowMatrix.value=mt.state.directionalShadowMatrix,Qt.spotLightMatrix.value=mt.state.spotLightMatrix,Qt.spotLightMap.value=mt.state.spotLightMap,Qt.pointShadowMatrix.value=mt.state.pointShadowMatrix),yt.lightProbeGrid=M.state.lightProbeGridArray.length>0,yt.currentProgram=ge,yt.uniformsList=null,ge}function qe(I){if(I.uniformsList===null){let ot=I.currentProgram.getUniforms();I.uniformsList=Yr.seqWithValue(ot.seq,I.uniforms)}return I.uniformsList}function an(I,ot){let vt=dt.get(I);vt.outputColorSpace=ot.outputColorSpace,vt.batching=ot.batching,vt.batchingColor=ot.batchingColor,vt.instancing=ot.instancing,vt.instancingColor=ot.instancingColor,vt.instancingMorph=ot.instancingMorph,vt.skinning=ot.skinning,vt.morphTargets=ot.morphTargets,vt.morphNormals=ot.morphNormals,vt.morphColors=ot.morphColors,vt.morphTargetsCount=ot.morphTargetsCount,vt.numClippingPlanes=ot.numClippingPlanes,vt.numIntersection=ot.numClipIntersection,vt.vertexAlphas=ot.vertexAlphas,vt.vertexTangents=ot.vertexTangents,vt.toneMapping=ot.toneMapping}function cn(I,ot){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;b.setFromMatrixPosition(ot.matrixWorld);for(let vt=0,yt=I.length;vt<yt;vt++){let mt=I[vt];if(mt.texture!==null&&mt.boundingBox.containsPoint(b))return mt}return null}function Ne(I,ot,vt,yt,mt){ot.isScene!==!0&&(ot=Lt),_t.resetTextureUnits();let Xt=ot.fog,$t=yt.isMeshStandardMaterial||yt.isMeshLambertMaterial||yt.isMeshPhongMaterial?ot.environment:null,Gt=tt===null?P.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:xe.workingColorSpace,jt=yt.isMeshStandardMaterial||yt.isMeshLambertMaterial&&!yt.envMap||yt.isMeshPhongMaterial&&!yt.envMap,te=V.get(yt.envMap||$t,jt),fe=yt.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,ge=!!vt.attributes.tangent&&(!!yt.normalMap||yt.anisotropy>0),Qt=!!vt.morphAttributes.position,Ce=!!vt.morphAttributes.normal,sn=!!vt.morphAttributes.color,ze=gi;yt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ze=P.toneMapping);let Fe=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,An=Fe!==void 0?Fe.length:0,Kt=dt.get(yt),Dn=M.state.lights;if(J===!0&&(nt===!0||I!==j)){let Oe=I===j&&yt.id===K;ut.setState(yt,I,Oe)}let Se=!1;yt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Dn.state.version||Kt.outputColorSpace!==Gt||mt.isBatchedMesh&&Kt.batching===!1||!mt.isBatchedMesh&&Kt.batching===!0||mt.isBatchedMesh&&Kt.batchingColor===!0&&mt._colorsTexture===null||mt.isBatchedMesh&&Kt.batchingColor===!1&&mt._colorsTexture!==null||mt.isInstancedMesh&&Kt.instancing===!1||!mt.isInstancedMesh&&Kt.instancing===!0||mt.isSkinnedMesh&&Kt.skinning===!1||!mt.isSkinnedMesh&&Kt.skinning===!0||mt.isInstancedMesh&&Kt.instancingColor===!0&&mt.instanceColor===null||mt.isInstancedMesh&&Kt.instancingColor===!1&&mt.instanceColor!==null||mt.isInstancedMesh&&Kt.instancingMorph===!0&&mt.morphTexture===null||mt.isInstancedMesh&&Kt.instancingMorph===!1&&mt.morphTexture!==null||Kt.envMap!==te||yt.fog===!0&&Kt.fog!==Xt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ut.numPlanes||Kt.numIntersection!==ut.numIntersection)||Kt.vertexAlphas!==fe||Kt.vertexTangents!==ge||Kt.morphTargets!==Qt||Kt.morphNormals!==Ce||Kt.morphColors!==sn||Kt.toneMapping!==ze||Kt.morphTargetsCount!==An||!!Kt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Kt.__version=yt.version);let ti=Kt.currentProgram;Se===!0&&(ti=Je(yt,ot,mt),B&&yt.isNodeMaterial&&B.onUpdateProgram(yt,ti,Kt));let wi=!1,os=!1,rr=!1,De=ti.getUniforms(),tn=Kt.uniforms;if(A.useProgram(ti.program)&&(wi=!0,os=!0,rr=!0),yt.id!==K&&(K=yt.id,os=!0),Kt.needsLights){let Oe=cn(M.state.lightProbeGridArray,mt);Kt.lightProbeGrid!==Oe&&(Kt.lightProbeGrid=Oe,os=!0)}if(wi||j!==I){A.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),De.setValue($,"projectionMatrix",I.projectionMatrix),De.setValue($,"viewMatrix",I.matrixWorldInverse);let cs=De.map.cameraPosition;cs!==void 0&&cs.setValue($,pt.setFromMatrixPosition(I.matrixWorld)),H.logarithmicDepthBuffer&&De.setValue($,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(yt.isMeshPhongMaterial||yt.isMeshToonMaterial||yt.isMeshLambertMaterial||yt.isMeshBasicMaterial||yt.isMeshStandardMaterial||yt.isShaderMaterial)&&De.setValue($,"isOrthographic",I.isOrthographicCamera===!0),j!==I&&(j=I,os=!0,rr=!0)}if(Kt.needsLights&&(Dn.state.sunShadowMap.length>0&&De.setValue($,"sunShadowMap",Dn.state.sunShadowMap,_t),Dn.state.directionalShadowMap.length>0&&De.setValue($,"directionalShadowMap",Dn.state.directionalShadowMap,_t),Dn.state.spotShadowMap.length>0&&De.setValue($,"spotShadowMap",Dn.state.spotShadowMap,_t),Dn.state.pointShadowMap.length>0&&De.setValue($,"pointShadowMap",Dn.state.pointShadowMap,_t)),mt.isSkinnedMesh){De.setOptional($,mt,"bindMatrix"),De.setOptional($,mt,"bindMatrixInverse");let Oe=mt.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),De.setValue($,"boneTexture",Oe.boneTexture,_t))}mt.isBatchedMesh&&(De.setOptional($,mt,"batchingTexture"),De.setValue($,"batchingTexture",mt._matricesTexture,_t),De.setOptional($,mt,"batchingIdTexture"),De.setValue($,"batchingIdTexture",mt._indirectTexture,_t),De.setOptional($,mt,"batchingColorTexture"),mt._colorsTexture!==null&&De.setValue($,"batchingColorTexture",mt._colorsTexture,_t));let as=vt.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&L.update(mt,vt,ti),(os||Kt.receiveShadow!==mt.receiveShadow)&&(Kt.receiveShadow=mt.receiveShadow,De.setValue($,"receiveShadow",mt.receiveShadow)),(yt.isMeshStandardMaterial||yt.isMeshLambertMaterial||yt.isMeshPhongMaterial)&&yt.envMap===null&&ot.environment!==null&&(tn.envMapIntensity.value=ot.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=tS()),os){if(De.setValue($,"toneMappingExposure",P.toneMappingExposure),Kt.needsLights&&Hi(tn,rr),Xt&&yt.fog===!0&&k.refreshFogUniforms(tn,Xt),k.refreshMaterialUniforms(tn,yt,ht,st,M.state.transmissionRenderTarget[I.id]),Kt.needsLights&&Kt.lightProbeGrid){let Oe=Kt.lightProbeGrid;tn.probesSH.value=Oe.texture,tn.probesMin.value.copy(Oe.boundingBox.min),tn.probesMax.value.copy(Oe.boundingBox.max),tn.probesResolution.value.copy(Oe.resolution)}Yr.upload($,qe(Kt),tn,_t)}if(yt.isShaderMaterial&&yt.uniformsNeedUpdate===!0&&(Yr.upload($,qe(Kt),tn,_t),yt.uniformsNeedUpdate=!1),yt.isSpriteMaterial&&De.setValue($,"center",mt.center),De.setValue($,"modelViewMatrix",mt.modelViewMatrix),De.setValue($,"normalMatrix",mt.normalMatrix),De.setValue($,"modelMatrix",mt.matrixWorld),yt.uniformsGroups!==void 0){let Oe=yt.uniformsGroups;for(let cs=0,or=Oe.length;cs<or;cs++){let sd=Oe[cs];wt.update(sd,ti),wt.bind(sd,ti)}}return ti}function Hi(I,ot){I.ambientLightColor.needsUpdate=ot,I.lightProbe.needsUpdate=ot,I.sunLights.needsUpdate=ot,I.sunLightShadows.needsUpdate=ot,I.directionalLights.needsUpdate=ot,I.directionalLightShadows.needsUpdate=ot,I.pointLights.needsUpdate=ot,I.pointLightShadows.needsUpdate=ot,I.spotLights.needsUpdate=ot,I.spotLightShadows.needsUpdate=ot,I.rectAreaLights.needsUpdate=ot,I.hemisphereLights.needsUpdate=ot}function Qn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(I,ot,vt){let yt=dt.get(I);yt.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,yt.__autoAllocateDepthBuffer===!1&&(yt.__useRenderToTexture=!1),dt.get(I.texture).__webglTexture=ot,dt.get(I.depthTexture).__webglTexture=yt.__autoAllocateDepthBuffer?void 0:vt,yt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,ot){let vt=dt.get(I);vt.__webglFramebuffer=ot,vt.__useDefaultFramebuffer=ot===void 0},this.setRenderTarget=function(I,ot=0,vt=0){tt=I,z=ot,W=vt;let yt=null,mt=!1,Xt=!1;if(I){let Gt=dt.get(I);if(Gt.__useDefaultFramebuffer!==void 0){A.bindFramebuffer($.FRAMEBUFFER,Gt.__webglFramebuffer),X.copy(I.viewport),St.copy(I.scissor),Et=I.scissorTest,A.viewport(X),A.scissor(St),A.setScissorTest(Et),K=-1;return}else if(Gt.__webglFramebuffer===void 0)_t.setupRenderTarget(I);else if(Gt.__hasExternalTextures)_t.rebindTextures(I,dt.get(I.texture).__webglTexture,dt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let fe=I.depthTexture;if(Gt.__boundDepthTexture!==fe){if(fe!==null&&dt.has(fe)&&(I.width!==fe.image.width||I.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(I)}}let jt=I.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Xt=!0);let te=dt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(te[ot])?yt=te[ot][vt]:yt=te[ot],mt=!0):I.samples>0&&_t.useMultisampledRTT(I)===!1?yt=dt.get(I).__webglMultisampledFramebuffer:Array.isArray(te)?yt=te[vt]:yt=te,X.copy(I.viewport),St.copy(I.scissor),Et=I.scissorTest}else X.copy(kt).multiplyScalar(ht).floor(),St.copy(q).multiplyScalar(ht).floor(),Et=bt;if(vt!==0&&(yt=O),A.bindFramebuffer($.FRAMEBUFFER,yt)&&A.drawBuffers(I,yt),A.viewport(X),A.scissor(St),A.setScissorTest(Et),mt){let Gt=dt.get(I.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Gt.__webglTexture,vt)}else if(Xt){let Gt=ot;for(let jt=0;jt<I.textures.length;jt++){let te=dt.get(I.textures[jt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+jt,te.__webglTexture,vt,Gt)}}else if(I!==null&&vt!==0){let Gt=dt.get(I.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Gt.__webglTexture,vt)}K=-1};function Me(I){let ot=dt.get(I);return(ot.__readFormat!==I.format||ot.__readType!==I.type)&&(ot.__readFormat=I.format,ot.__readType=I.type,ot.__formatReadable=H.textureFormatReadable(I.format),ot.__typeReadable=H.textureTypeReadable(I.type)),ot}this.readRenderTargetPixels=function(I,ot,vt,yt,mt,Xt,$t,Gt=0){if(!(I&&I.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=dt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&$t!==void 0&&(jt=jt[$t]),jt){A.bindFramebuffer($.FRAMEBUFFER,jt);try{let te=I.textures[Gt],fe=te.format,ge=te.type;I.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Gt);let Qt=Me(te);if(Qt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=I.width-yt&&vt>=0&&vt<=I.height-mt&&$.readPixels(ot,vt,yt,mt,Tt.convert(fe),Tt.convert(ge),Xt)}finally{let te=tt!==null?dt.get(tt).__webglFramebuffer:null;A.bindFramebuffer($.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(I,ot,vt,yt,mt,Xt,$t,Gt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=dt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&$t!==void 0&&(jt=jt[$t]),jt)if(ot>=0&&ot<=I.width-yt&&vt>=0&&vt<=I.height-mt){A.bindFramebuffer($.FRAMEBUFFER,jt);let te=I.textures[Gt],fe=te.format,ge=te.type;I.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Gt);let Qt=Me(te);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ce),$.bufferData($.PIXEL_PACK_BUFFER,Xt.byteLength,$.STREAM_READ),$.readPixels(ot,vt,yt,mt,Tt.convert(fe),Tt.convert(ge),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let sn=tt!==null?dt.get(tt).__webglFramebuffer:null;A.bindFramebuffer($.FRAMEBUFFER,sn);let ze=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Ap($,ze,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ce),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Xt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Ce),$.deleteSync(ze),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,ot=null,vt=0){let yt=Math.pow(2,-vt),mt=Math.floor(I.image.width*yt),Xt=Math.floor(I.image.height*yt),$t=ot!==null?ot.x:0,Gt=ot!==null?ot.y:0;_t.setTexture2D(I,0),$.copyTexSubImage2D($.TEXTURE_2D,vt,0,0,$t,Gt,mt,Xt),A.unbindTexture()},this.copyTextureToTexture=function(I,ot,vt=null,yt=null,mt=0,Xt=0){let $t,Gt,jt,te,fe,ge,Qt,Ce,sn,ze=I.isCompressedTexture?I.mipmaps[Xt]:I.image;if(vt!==null)$t=vt.max.x-vt.min.x,Gt=vt.max.y-vt.min.y,jt=vt.isBox3?vt.max.z-vt.min.z:1,te=vt.min.x,fe=vt.min.y,ge=vt.isBox3?vt.min.z:0;else{let tn=Math.pow(2,-mt);$t=Math.floor(ze.width*tn),Gt=Math.floor(ze.height*tn),I.isDataArrayTexture?jt=ze.depth:I.isData3DTexture?jt=Math.floor(ze.depth*tn):jt=1,te=0,fe=0,ge=0}yt!==null?(Qt=yt.x,Ce=yt.y,sn=yt.z):(Qt=0,Ce=0,sn=0);let Fe=Tt.convert(ot.format),An=Tt.convert(ot.type),Kt;ot.isData3DTexture?(_t.setTexture3D(ot,0),Kt=$.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(_t.setTexture2DArray(ot,0),Kt=$.TEXTURE_2D_ARRAY):(_t.setTexture2D(ot,0),Kt=$.TEXTURE_2D),A.activeTexture($.TEXTURE0),A.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ot.flipY),A.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),A.pixelStorei($.UNPACK_ALIGNMENT,ot.unpackAlignment);let Dn=A.getParameter($.UNPACK_ROW_LENGTH),Se=A.getParameter($.UNPACK_IMAGE_HEIGHT),ti=A.getParameter($.UNPACK_SKIP_PIXELS),wi=A.getParameter($.UNPACK_SKIP_ROWS),os=A.getParameter($.UNPACK_SKIP_IMAGES);A.pixelStorei($.UNPACK_ROW_LENGTH,ze.width),A.pixelStorei($.UNPACK_IMAGE_HEIGHT,ze.height),A.pixelStorei($.UNPACK_SKIP_PIXELS,te),A.pixelStorei($.UNPACK_SKIP_ROWS,fe),A.pixelStorei($.UNPACK_SKIP_IMAGES,ge);let rr=I.isDataArrayTexture||I.isData3DTexture,De=ot.isDataArrayTexture||ot.isData3DTexture;if(I.isDepthTexture){let tn=dt.get(I),as=dt.get(ot),Oe=dt.get(tn.__renderTarget),cs=dt.get(as.__renderTarget);A.bindFramebuffer($.READ_FRAMEBUFFER,Oe.__webglFramebuffer),A.bindFramebuffer($.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let or=0;or<jt;or++)rr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,dt.get(I).__webglTexture,mt,ge+or),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,dt.get(ot).__webglTexture,Xt,sn+or)),$.blitFramebuffer(te,fe,$t,Gt,Qt,Ce,$t,Gt,$.DEPTH_BUFFER_BIT,$.NEAREST);A.bindFramebuffer($.READ_FRAMEBUFFER,null),A.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(mt!==0||I.isRenderTargetTexture||dt.has(I)){let tn=dt.get(I),as=dt.get(ot);A.bindFramebuffer($.READ_FRAMEBUFFER,F),A.bindFramebuffer($.DRAW_FRAMEBUFFER,D);for(let Oe=0;Oe<jt;Oe++)rr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,tn.__webglTexture,mt,ge+Oe):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,tn.__webglTexture,mt),De?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,as.__webglTexture,Xt,sn+Oe):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,as.__webglTexture,Xt),mt!==0?$.blitFramebuffer(te,fe,$t,Gt,Qt,Ce,$t,Gt,$.COLOR_BUFFER_BIT,$.NEAREST):De?$.copyTexSubImage3D(Kt,Xt,Qt,Ce,sn+Oe,te,fe,$t,Gt):$.copyTexSubImage2D(Kt,Xt,Qt,Ce,te,fe,$t,Gt);A.bindFramebuffer($.READ_FRAMEBUFFER,null),A.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else De?I.isDataTexture||I.isData3DTexture?$.texSubImage3D(Kt,Xt,Qt,Ce,sn,$t,Gt,jt,Fe,An,ze.data):ot.isCompressedArrayTexture?$.compressedTexSubImage3D(Kt,Xt,Qt,Ce,sn,$t,Gt,jt,Fe,ze.data):$.texSubImage3D(Kt,Xt,Qt,Ce,sn,$t,Gt,jt,Fe,An,ze):I.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Xt,Qt,Ce,$t,Gt,Fe,An,ze.data):I.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Xt,Qt,Ce,ze.width,ze.height,Fe,ze.data):$.texSubImage2D($.TEXTURE_2D,Xt,Qt,Ce,$t,Gt,Fe,An,ze);A.pixelStorei($.UNPACK_ROW_LENGTH,Dn),A.pixelStorei($.UNPACK_IMAGE_HEIGHT,Se),A.pixelStorei($.UNPACK_SKIP_PIXELS,ti),A.pixelStorei($.UNPACK_SKIP_ROWS,wi),A.pixelStorei($.UNPACK_SKIP_IMAGES,os),Xt===0&&ot.generateMipmaps&&$.generateMipmap(Kt),A.unbindTexture()},this.initRenderTarget=function(I){dt.get(I).__webglFramebuffer===void 0&&_t.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?_t.setTextureCube(I,0):I.isData3DTexture?_t.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?_t.setTexture2DArray(I,0):_t.setTexture2D(I,0),A.unbindTexture()},this.resetState=function(){z=0,W=0,tt=null,A.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var C0=ho(Zr(),1);(function(n){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),i=new Set(["left","center","right"]),s=(u,f)=>u==="dockAlignment"?i.has(f):e.has(u)&&typeof f=="boolean",r=u=>i.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([f,h])=>s(f,h)))}function a(u,f){return u?.[f]!==!1}function c(u,f,h){if(!s(f,h)||h===(f==="dockAlignment"?r(u):a(u,f)))return u;let d={...u};return h===(f==="dockAlignment"?"right":!0)?delete d[f]:d[f]=h,Object.keys(d).length?d:void 0}function l(u,f){return a(f,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}n.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var ba=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,um=ba.features,wR=ba.valid,bi=ba.enabled,Vl=ba.wind,hm=ba.dockAlignment;function Xn(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new ue,l=0;for(let u=0;u<n.length;++u){let f=n[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<n.length;++h){let d=n[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=n[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=fm(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let y=0;y<o[u].length;++y)d.push(o[u][y][h]);let m=fm(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function fm(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){let u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Te(o,e,i),c=0;for(let l=0;l<n.length;++l){let u=n[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<e;m++){let y=u.getComponent(h,m);a.setComponent(h+f,m,y)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var va=new G;function oi(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;va.copy(t),va[i]=0,va.normalize();let l=.5*o/(o+a),u=1-va.angleTo(n)/c;return Math.sign(va[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Wl=class n extends Ae{constructor(t=1,e=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new G,l=new G,u=new G(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,y=new G,p=.5/o;for(let g=0,x=0;g<f.length;g+=3,x+=2)switch(c.fromArray(f,g),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[g+0]=u.x*Math.sign(c.x)+l.x*r,f[g+1]=u.y*Math.sign(c.y)+l.y*r,f[g+2]=u.z*Math.sign(c.z)+l.z*r,h[g+0]=l.x,h[g+1]=l.y,h[g+2]=l.z,Math.floor(g/m)){case 0:y.set(1,0,0),d[x+0]=oi(y,l,"z","y",r,i),d[x+1]=1-oi(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),d[x+0]=1-oi(y,l,"z","y",r,i),d[x+1]=1-oi(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),d[x+0]=1-oi(y,l,"x","z",r,t),d[x+1]=oi(y,l,"z","x",r,i);break;case 3:y.set(0,-1,0),d[x+0]=1-oi(y,l,"x","z",r,t),d[x+1]=1-oi(y,l,"z","x",r,i);break;case 4:y.set(0,0,1),d[x+0]=1-oi(y,l,"x","y",r,t),d[x+1]=1-oi(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),d[x+0]=oi(y,l,"x","y",r,t),d[x+1]=1-oi(y,l,"y","x",r,e);break}}static fromJSON(t){return new n(t.width,t.height,t.depth,t.segments,t.radius)}};var dm=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),eS=Math.PI*2;function nS(){let n=new ie,t=new Ae(1,1,1),e=new Re(1,12,8),i=new Map;function s(a){return i.has(a)||i.set(a,new Xe({color:a,roughness:.83})),i.get(a)}function r(a,c,l,u,f,h,d,m,y){let p=new ce(c,typeof l=="string"?s(l):l);return p.position.set(u,f,h),p.scale.set(d,m,y),a.add(p),p}function o(){let a=new Map;for(let l of n.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new ce(Xn(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),n.remove(...u),n.add(h)}let c=new Set;n.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:n,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function iS({root:n,box:t},e,i,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,i*.065),u=new we({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:je});t(n,o,0,1.8,0,e*.91,3.6,i*.88),t(n,r,0,14,0,e*.95,21,i*.93).castShadow=!0;for(let d of[-1,1])t(n,s?"#deb181":"#aa785d",d*e*.232,14,i*.469,e*.448,17,i*.021),t(n,"#c8a378",d*e*.072,14.5,i*.492,e*.047,1.25,i*.016);t(n,o,0,a,0,e,3,i).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(n,o,d,c,0,l,1.8,i),t(n,u,d,f,0,l*.17,h,i-l*2);for(let m of[-i/2+l/2,i/2-l/2])t(n,o,d,f,m,l,h,l)}for(let d of[-i/2+l/2,i/2-l/2])t(n,o,0,c,d,e-l*2,1.8,l),t(n,u,0,f,d,e-l*2,h,l*.17);return t(n,o,0,c+1.5,-i*.325,e*.77,2.7,i*.105),t(n,s?"#cde8d3":"#eed59e",0,c+.42,-i*.265,e*.72,.7,i*.016),{base:a,top:c}}function sS({box:n,oval:t,root:e},i,s,r){let o=new ie;o.name="fish-"+i,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ie;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),n(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function rS(n,t,e,i,s,r){let{root:o,box:a,oval:c}=n,l=s-4,u=new we({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new we({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,i+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let m=0;m<18;m++){let y=(m*7%19/19-.5)*t*.83,p=(m*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][m%3],y,i+3,p,r*(1+m%4*.34),.85,r*1.15)}for(let[m,y]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let g=p-1.5,x=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],m*t+g*r,i+3+(2+p*1.6)*Math.min(1.15,r),y*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);x.rotation.z=g*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((m,y)=>sS(n,y,r*(1.72-y*.17),m)),d=Array.from({length:5},(m,y)=>{let p=r*(.45+y%3*.18),g=c(o,f,0,0,0,p,p,p);return g.name="bubble-"+y,g});return m=>{for(let[y,{fish:p,tail:g}]of h.entries()){let x=m*(.43+y*.06)+y*2.07+.5,_=t*(.24+y*.036),b=e*(.17+y*.038);p.position.set(Math.cos(x)*_,i+10+y*3.65+Math.sin(x*1.7)*2.15,Math.sin(x)*b),p.rotation.y=-Math.atan2(Math.cos(x)*b,-Math.sin(x)*_),g.rotation.y=Math.sin(m*8.6+y)*.39}for(let[y,p]of d.entries()){let g=(m*.3+y/d.length)%1;p.position.set(t*.33+Math.sin(g*eS+y)*r,i+5+g*20,e*.23),p.visible=g>.08&&g<.94}}}function oS({root:n,box:t,oval:e},i,s,r,o,a){t(n,"#d4a675",0,r+2.15,0,i*.93,1.6,s*.9);for(let h=0;h<16;h++)e(n,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*i*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(n,"#a07c66",-i*.29,r+4.5,-s*.13,i*.15,4.7,s*.19),e(n,"#c8a17c",-i*.29,r+7.1,-s*.17,i*.135,4.8,s*.154),e(n,"#624b45",-i*.29,r+4,-s*.011,i*.069,2.5,s*.063),e(n,"#e8c99b",i*.29,r+3.6,-s*.16,i*.1,2.2,s*.16),e(n,"#89ad9e",i*.29,r+5.1,-s*.16,i*.075,.9,s*.115);let c=t(n,"#936b52",i*.11,r+4,-s*.24,i*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(n,h%2?"#829468":"#a7ad78",-i*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(n,"#746462",(h/6-.5)*i*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ie;l.name="gecko",n.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let m=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*m,1.13*m,1.3*m)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let m=new ie;m.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(m);let y=e(m,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);y.rotation.y=h*d*.28;for(let p of[-1,0,1])e(m,"#ecc297",(p*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:m,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,m=Math.cos(d)*i*.13,y=Math.sin(d)*s*.09+s*.139;l.position.set(m,r+5.1+Math.sin(h*3.6)*.25,y),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*i*.13);for(let[p,g]of u.entries()){let x=p+1;g.position.set(-(3.55+x*1.24)*a,-.19*x*a,Math.sin(h*1.75-x*.55)*x*a*.32)}for(let{leg:p,side:g,front:x}of f)p.rotation.y=Math.sin(h*3.6)*g*x*.31}}function pm(n,t,e){if(!Object.hasOwn(dm,n))return null;let i=dm[n],s=nS(),r=i==="aquarium",{base:o,top:a}=iS(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?rS(s,t,e,o,a,c):oS(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var aS=`
  varying vec2 panelUv;
  void main() {
    panelUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,cS=`
  uniform float screenTime;
  varying vec2 panelUv;
  void main() {
    float along = smoothstep(0.0, 0.22, panelUv.y) * (1.0 - smoothstep(0.78, 1.0, panelUv.y));
    float across = smoothstep(0.0, 0.84, panelUv.x) * (1.0 - smoothstep(0.92, 1.0, panelUv.x));
    float pulse = 0.23 + 0.025 * sin(screenTime * 1.4);
    gl_FragColor = vec4(vec3(0.91, 0.94, 1.0), along * across * pulse);
    #include <colorspace_fragment>
  }
`;function lS(n={}){return[n.media_title,n.media_series_title,n.app_name,n.source].find(e=>typeof e=="string"&&e.trim())?.replace(/\s+/g," ").trim().slice(0,96)||"TV on"}function uS(){let n=globalThis.document?.createElement("canvas"),t=n?.getContext("2d");if(!t)return null;n.width=640,n.height=240;let e=new ms(n);return e.colorSpace=$e,{context:t,texture:e}}function mm({context:n,texture:t},e){let{width:i,height:s}=n.canvas;n.fillStyle="#fffdf9",n.fillRect(0,0,i,s),n.fillStyle="#211f2c",n.font="600 48px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=e;if(n.measureText(r).width>590){let o=Array.from(r);for(;o.length&&n.measureText(o.join("")+"\u2026").width>590;)o.pop();r=o.join("")+"\u2026"}n.fillText(r,i/2,s/2),t.needsUpdate=!0}function gm(n,t,e){let i={value:0},s=new we({color:"#08090c",toneMapped:!1}),r=new ce(new Pn(e*.78,43),s);r.name="storybook-tv-screen",r.position.set(-t*.155-.84,59,0),r.rotation.y=-Math.PI/2;let o=new ce(new Pn(t*.27,e*.79),new We({uniforms:{screenTime:i},vertexShader:aS,fragmentShader:cS,transparent:!0,depthWrite:!1,blending:Zi}));o.name="storybook-tv-spill",o.position.set(-t*.325,28.08,0),o.rotation.x=-Math.PI/2,o.visible=!1;let a=uS();return s.map=a?.texture??null,a&&mm(a,""),r.userData.title="",n.root.add(r,o),n.animate=(c,l)=>{let u=c?.active===!0,f=u?lS(c.attributes):"";f!==r.userData.title&&(r.userData.title=f,a&&mm(a,f)),o.visible=u,s.color.set(u?"#ffffff":"#08090c"),u&&(i.value=Number.isFinite(l)?Math.max(0,Math.floor(l*12)/12):0)},n}(()=>{"use strict";let n=[["baby-toys","Baby toys"],["baby-activities","Baby activities"],["baby-mats","Play mats"],["baby-safety","Colorful safety walls & gates"],["climbing","Soft climbing blocks"],["fireplace","Fireplace & shelves"],["balcony","Balcony plant sets"],["fans","Ceiling fans"],["cleaning","Robot vacuums"],["toy-storage","Toy storage"],["play-furniture","Play furniture"],["pets","Pets"]],t={sage:["Sage","#9bb599","#dce8cc","#f5edcf","#5b755e"],mint:["Mint","#95c8b5","#d6eee0","#f5f9e9","#4f8b7c"],sky:["Sky blue","#98c5d7","#d5ebf0","#f5f8f2","#557e91"],peach:["Peach","#e4ac94","#f6d5ba","#fff2dc","#ad7569"],coral:["Coral","#d58e7e","#f5c5ad","#ffe5d0","#9a5d55"],lavender:["Lavender","#b6a8cf","#e4ddf0","#f6eff6","#756b9b"],butter:["Butter yellow","#e2c681","#f4e3af","#fff6dc","#a58a4e"],cream:["Cream","#e2d5bd","#f5eada","#fff9ec","#998972"],white:["Warm white","#e8e9de","#f8f8ee","#ffffff","#929990"],oak:["Oak","#bd8b62","#e2b786","#f5dfb7","#74523c"],walnut:["Walnut","#906347","#bb865c","#ebc69a","#513a2d"],charcoal:["Charcoal","#39464d","#657680","#d6e0d6","#1d292f"],brass:["Brass","#c9a872","#e9d3a2","#fff2d0","#7f6744"],terracotta:["Terracotta","#b87859","#dba27b","#f1d3af","#744b3a"],forest:["Forest green","#668a63","#a3bb80","#e5e7bc","#355d45"],blush:["Blush","#dbb2a9","#f1d6cc","#fff1e4","#a67b79"],rainbow:["Multicolor","#e7ab9d","#9cc8bd","#edd18b","#6d7591"],teddy:["Teddy brown","#a98263","#cfab84","#ead5ae","#654c3d"],slate:["Soft gray","#929491","#bdc0bd","#f1f0e9","#55595b"]},e=[],i={"baby-toys":"\u25C9","baby-activities":"\u2726","baby-mats":"\u25A6","baby-safety":"\u25A5",climbing:"\u25B0",fireplace:"\u25A4",balcony:"\u2740",fans:"\u2733",cleaning:"\u25C9","toy-storage":"\u25A5","play-furniture":"\u25A3",pets:"\u25C7",living:"\u273F",bedroom:"\u263E",lighting:"\u2726"},s={"baby-safety":"safety wall",fireplace:"fireplace shelfs",fans:"seiling fan",cleaning:"robot vaccum"};function r(l,u,f,h,d,m,y,p,g={}){for(let x=0;x<p.length;x++){let _=p[x],b=t[_];if(!b)throw new Error("Unknown inventory color: "+_);let v=`${l}-${h}-${_}`;e.push({type:v,label:`${d} \xB7 ${b[0]}`,icon:i[l],w:m,h:y,group:l,artFamily:u,form:f,palette:{base:b[1],accent:b[2],detail:b[3],dark:b[4]},tags:`${g.tags||""} ${s[l]||""}`.trim(),...g.collectionId?{collectionId:g.collectionId}:{},...g.seriesId?{seriesId:g.seriesId}:{},...g.designId?{designId:g.designId}:{},...g.designLabel?{designLabel:g.designLabel}:{},...g.sizeId?{sizeId:g.sizeId}:{},...g.sizeLabel?{sizeLabel:g.sizeLabel}:{},...g.material?{material:g.material}:{},...g.seriesId?{finishId:_,finishLabel:b[0]}:{},...g.legacy?{legacy:!0}:{},...g.atlas&&x===0?{atlas:g.atlas}:{},...g.mount?{mount:g.mount}:{},...g.visualKind?{visualKind:g.visualKind}:{},...g.lightForm?{lightForm:g.lightForm}:{},...g.renderLayer?{renderLayer:g.renderLayer}:{}})}}r("baby-toys","softToy","ball","soft-ball","Soft play ball",48,48,["sage","peach","sky","butter"],{tags:"8 month baby roll"}),r("baby-toys","softToy","texturedBall","sensory-ball","Textured sensory ball",48,48,["sky","mint","lavender","coral"],{atlas:"sensoryBall",tags:"8 month baby sensory"}),r("baby-toys","softToy","book","cloth-book","Cloth crinkle book",61,48,["sage","peach","sky"],{tags:"baby fabric book"}),r("baby-toys","softToy","book","board-book","Chunky board book",59,45,["butter","mint"],{tags:"baby books"}),r("baby-toys","softToy","cups","stacking-cups","Large stacking cups",70,56,["peach","sage","sky","lavender"],{tags:"baby nesting cups"}),r("baby-toys","softToy","rings","stacking-rings","Large stacking rings",68,68,["rainbow","butter","mint","coral"],{atlas:"stackRings",tags:"baby stacker"}),r("baby-toys","softToy","blocks","soft-blocks","Soft fabric blocks",88,70,["sage","sky","peach","lavender"],{tags:"large baby blocks"}),r("baby-toys","softToy","plush","plush-bear","Plush bear",58,65,["teddy","cream","blush"],{atlas:"plushBear",tags:"baby stuffed animal"}),r("baby-toys","softToy","photoBunnyPlush","bunny-plush","Soft bunny plush",58,70,["cream"],{tags:"photo 1977 living room baby stuffed animal rabbit"}),r("baby-toys","softToy","teether","teething-ring","Large teething ring",48,48,["mint","butter"],{tags:"baby silicone"}),r("baby-activities","activityToy","playGym","play-gym","Floor play gym",160,126,["sage","peach","sky"],{atlas:"playGym",tags:"baby activity arch"}),r("baby-activities","activityToy","photoWoodArch","wooden-play-arch","Wooden hanging-toy play arch",140,100,["oak"],{tags:"photo 1977 living room baby gym natural wood dangling toys"}),r("baby-activities","activityToy","photoActivityTable","colorful-activity-table","Colorful activity table",118,90,["rainbow"],{tags:"photo 1977 living room baby sensory music table"}),r("baby-activities","activityToy","activityCube","activity-cube","Activity cube",74,74,["oak","sky","mint"],{atlas:"activityCube",tags:"baby activity"}),r("baby-activities","activityToy","activityBoard","activity-board","Large activity board",124,60,["oak","sage","sky"],{atlas:"activityBoard",tags:"baby sensory board"}),r("baby-activities","activityToy","mirror","floor-mirror","Unbreakable play mirror",98,70,["cream","sage"],{tags:"baby floor mirror"}),r("baby-activities","activityToy","tunnel","fabric-tunnel","Soft fabric crawl tunnel",130,74,["sky","butter"],{tags:"baby crawl"}),r("baby-activities","activityToy","sensoryBasket","sensory-basket","Sensory play basket",73,65,["oak","mint"],{tags:"baby toys basket"}),r("baby-activities","activityToy","largeRattle","large-rattle","Large handled rattle",56,42,["peach","sage"],{tags:"baby grasp"}),r("baby-mats","playMat","tummy","tummy-mat","Tummy-time mat",182,130,["sage","peach","sky","butter"],{tags:"baby soft floor mat"}),r("baby-mats","playMat","foam","foam-mat","Large foam play mat",215,155,["rainbow","cream","mint","lavender","coral"],{atlas:"mat",tags:"baby floor padded"}),r("baby-mats","playMat","photoLeafMat","leaf-play-mat","Gray leaf play mat",240,170,["slate"],{tags:"photo 1977 living room baby quilted patterned padded mat"}),r("baby-mats","playMat","photoCheckerMat","checker-puzzle-mat","Brown checker puzzle mat",210,140,["cream"],{tags:"photo 1977 living room baby foam tile checkerboard"}),r("baby-mats","playMat","puzzle","puzzle-mat","Interlocking play mat",205,155,["sage","sky","butter","peach"],{tags:"baby padded puzzle"}),r("baby-mats","playMat","round","round-mat","Round quilted play mat",160,160,["cream","blush","mint"],{tags:"baby floor rug"}),r("baby-safety","paddedPanel","wall","padded-wall","Padded safety wall",156,29,["sage","mint","sky","peach","lavender","butter"],{atlas:"wallPanels",mount:"wall",tags:"color padded wall panel"}),r("baby-safety","paddedPanel","quilted","quilted-wall","Quilted wall panel",146,30,["cream","sky","blush","sage"],{mount:"wall",tags:"color soft wall"}),r("baby-safety","paddedPanel","folding","folding-wall","Folding play barrier",174,34,["sage","peach","lavender"],{tags:"baby color safety wall"}),r("baby-safety","paddedPanel","playpen","playpen","Panel playpen",182,143,["cream","sage","sky"],{tags:"baby enclosure"}),r("baby-safety","paddedPanel","photoPlayYard","rainbow-play-yard","Multicolor bear-panel play yard",320,225,["rainbow"],{tags:"photo 1977 living room baby safety enclosure playpen fence"}),r("baby-safety","paddedPanel","photoBearPanel","bear-panel","Bear-face play yard panel",94,34,["blush","white","mint","butter","sky","lavender"],{tags:"photo 1977 living room baby colorful modular safety gate fence panel"}),r("baby-safety","paddedPanel","gate","stair-gate","Hardware-mounted stair gate",112,29,["white","oak","charcoal"],{atlas:"babyGate",tags:"top of stairs second floor baby gate"}),r("baby-safety","paddedPanel","guard","fireplace-guard","Fireplace barrier",158,35,["charcoal","cream"],{tags:"fireplace baby screen guard"}),r("climbing","foamBlock","cube","foam-cube","Large foam cube",76,76,["sage","sky","peach","butter"],{tags:"soft climbing baby"}),r("climbing","foamBlock","wedge","foam-wedge","Foam climbing wedge",122,81,["rainbow","peach","sage","sky","lavender"],{atlas:"foamWedge",tags:"soft climbing ramp"}),r("climbing","foamBlock","steps","foam-steps","Foam step set",130,102,["rainbow","sage","butter","sky","peach"],{atlas:"foamSteps",tags:"soft climbing blocks"}),r("climbing","foamBlock","ramp","foam-ramp","Gentle foam ramp",157,91,["mint","peach","lavender"],{tags:"soft climbing"}),r("climbing","foamBlock","arch","foam-arch","Foam crawling arch",126,105,["rainbow","sky","sage","butter"],{atlas:"foamArch",tags:"soft climbing"}),r("climbing","foamBlock","tunnel","foam-tunnel","Foam crawl tunnel",155,112,["sage","peach","lavender"],{tags:"soft play climbing"}),r("fireplace","fireplace","mantel","fireplace-mantel","Fireplace mantel",180,64,["oak","walnut","white"],{atlas:"fireplace",tags:"hearth fireplace shelf"}),r("fireplace","fireplace","photoTiledMantel","white-tile-mantel","White mantel with dark tile hearth",180,95,["white"],{tags:"photo 1977 living room fireplace stone tile surround"}),r("fireplace","fireplace","hearth","fireplace-hearth","Stone fireplace hearth",169,87,["cream","charcoal","terracotta"],{tags:"fireplace insert"}),r("fireplace","fireplace","screen","fireplace-screen","Fireplace screen",172,31,["charcoal","brass"],{tags:"fireplace guard"}),r("fireplace","shelf","floating","floating-shelf","Floating mantel shelf",162,40,["oak","walnut","white","charcoal"],{tags:"fireplace wall shelf"}),r("fireplace","shelf","corner","corner-shelf","Corner display shelf",108,108,["oak","white"],{tags:"fireplace shelves"}),r("fireplace","shelf","anchored","anchored-bookcase","Anchored book display shelf",87,152,["oak","white"],{tags:"anchored shelves bookcase"}),r("fireplace","shelf","photoToyShelf","toy-side-shelf","Fireplace side toy shelf",85,130,["oak"],{tags:"photo 1977 living room toy display shelving"}),r("balcony","planterSet","rail","rail-planters","Balcony rail planter set",179,53,["forest","terracotta","white","charcoal"],{atlas:"balconyPlants",tags:"balcony flowers plant set"}),r("balcony","planterSet","cluster","pot-cluster","Balcony pot cluster",137,100,["terracotta","cream","sage","charcoal"],{tags:"balcony plant set"}),r("balcony","planterSet","herbs","herb-trio","Balcony herb trio",133,60,["sage","terracotta","white"],{tags:"balcony plant set herbs"}),r("balcony","planterSet","hanging","hanging-plants","Hanging basket pair",113,77,["forest","terracotta","cream"],{tags:"balcony plant set"}),r("balcony","planterSet","vertical","vertical-garden","Vertical balcony garden",83,160,["forest","sage","walnut"],{tags:"balcony plant set"}),r("balcony","planterSet","tall","tall-planters","Tall balcony planter set",138,119,["forest","terracotta","charcoal"],{tags:"balcony plant set"}),r("fans","ceilingFan","three","three-blade-fan","Three-blade ceiling fan",150,150,["oak","white","charcoal"],{atlas:"ceilingFan",tags:"ceiling fan"}),r("fans","ceilingFan","four","four-blade-fan","Four-blade ceiling fan",155,155,["white","walnut","brass"],{tags:"ceiling fan"}),r("fans","ceilingFan","five","five-blade-fan","Five-blade ceiling fan",160,160,["oak","white","charcoal"],{tags:"ceiling fan"}),r("fans","ceilingFan","light","fan-light","Ceiling fan with light",158,158,["white","brass"],{tags:"ceiling fan light"}),r("fans","ceilingFan","palm","palm-fan","Palm-leaf ceiling fan",168,168,["forest"],{tags:"ceiling fan"}),r("cleaning","robotVacuum","round","round-robot-vac","Round robot vacuum",58,58,["white","charcoal","sage","brass"],{atlas:"robotVacuum",tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","docked","docked-robot-vac","Robot vacuum with dock",76,58,["white","charcoal"],{tags:"robot vacuum cleaner charging compact"}),r("cleaning","robotVacuum","mop","robot-mop","Robot vacuum mop",60,60,["white","charcoal"],{tags:"robot vacuum cleaner cute compact"}),r("cleaning","robotVacuum","slim","slim-robot-vac","Slim robot vacuum",66,50,["white","charcoal"],{tags:"robot vacuum cleaner compact"}),r("toy-storage","storage","basket","toy-basket","Woven toy basket",85,76,["oak","cream","sage"],{tags:"baby toy storage"}),r("toy-storage","storage","bin","soft-toy-bin","Soft toy bin",84,74,["sage","peach","sky"],{tags:"baby toy storage"}),r("toy-storage","storage","cubby","low-cubby","Low toy cubby",136,67,["oak","white"],{tags:"baby toy storage shelf"}),r("play-furniture","playFurniture","softPouf","soft-pouf","Soft play pouf",79,79,["sage","peach","lavender"],{tags:"baby soft seat"}),r("play-furniture","playFurniture","photoBearChair","bear-floor-chair","Teddy bear toddler floor chair",86,85,["teddy"],{tags:"photo 1977 living room baby bear armchair"}),r("play-furniture","playFurniture","photoBolster","gray-bolster","Long gray floor bolster",126,43,["slate"],{tags:"photo 1977 living room baby soft support pillow"}),r("play-furniture","playFurniture","lowTable","low-play-table","Low play table",127,79,["oak","white"],{tags:"baby play furniture"}),r("play-furniture","playFurniture","lowShelf","low-play-shelf","Low play shelf",129,52,["oak","white"],{tags:"baby play furniture"}),r("pets","habitat","aquarium","fish-aquarium","Fish aquarium",122,66,["oak"],{tags:"fish tank pet habitat swimming bubbles animated freshwater planted glass"}),r("pets","habitat","terrarium","lizard-terrarium","Lizard terrarium",116,72,["walnut"],{tags:"lizard tank pet habitat gecko vivarium desert sand glass animated"});let o="detailed realistic crafted miniature dollhouse warm original material-rich",a=(l,u,f,h,d,m)=>({collectionId:"crafted-miniature-v1",seriesId:l,designId:u,designLabel:f,sizeId:h,sizeLabel:d,material:m});r("living","cuteFurniture","cloudSofa","cloud-sofa","Tailored sectional sofa",175,120,["blush","mint"],{...a("sofa","sectional","Sectional","three-seat","3 seat","upholstery"),tags:`${o} sofa couch sectional stitched piping`}),r("living","cuteFurniture","tailoredSofa","tailored-sofa","Tailored three-seat sofa",170,88,["sage","cream","charcoal"],{...a("sofa","tailored","Tailored sofa","three-seat","3 seat","upholstery"),tags:`${o} sofa couch three seat stitched upholstery`}),r("living","cuteFurniture","tailoredLoveseat","tailored-loveseat","Tailored loveseat",126,86,["blush","sage"],{...a("sofa","tailored","Tailored sofa","loveseat","Loveseat","upholstery"),tags:`${o} sofa couch loveseat two seat stitched upholstery`}),r("living","cuteFurniture","chaiseSofa","upholstered-chaise","Upholstered chaise",88,148,["cream","lavender"],{...a("sofa","chaise","Chaise lounge","chaise","Chaise","upholstery"),tags:`${o} sofa chaise lounge stitched upholstery`}),r("living","cuteFurniture","petalDining","petal-dining-set","Oval four-seat dining set",168,112,["oak","cream"],{...a("dining","oval","Oval dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs upholstered beveled wood`}),r("living","cuteFurniture","roundDining","round-dining-set","Round four-seat dining set",142,142,["oak","walnut"],{...a("dining","round","Round dining","four-seat","4 seat","wood"),legacy:!0,tags:`${o} dining table four chairs round pedestal wood`}),r("living","cuteFurniture","rectDining","rectangular-dining-set","Rectangular six-seat dining set",205,122,["oak","white"],{...a("dining","rectangular","Rectangular dining","six-seat","6 seat","wood"),legacy:!0,tags:`${o} dining table six chairs rectangular wood`}),r("living","cuteFurniture","petalDiningTable","petal-dining-table","Petal dining table",132.72,62.72,["oak","cream"],{...a("dining-table","oval","Rounded dining table","four-seat","4 seats fit","wood"),tags:`${o} dining table beveled wood tabletop`}),r("living","cuteFurniture","roundDiningTable","round-dining-table","Round pedestal dining table",82.36,82.36,["oak","walnut"],{...a("dining-table","round","Round pedestal","four-seat","4 seats fit","wood"),tags:`${o} dining table round pedestal wood tabletop`}),r("living","cuteFurniture","rectDiningTable","rectangular-dining-table","Rectangular dining table",161.95,68.32,["oak","white"],{...a("dining-table","rectangular","Rectangular dining table","six-seat","6 seats fit","wood"),tags:`${o} dining table rectangular wood tabletop`}),r("living","cuteFurniture","diningChair","dining-chair","Upholstered dining chair",34,26,["sage","blush","lavender","butter"],{...a("dining-chair","upholstered","Upholstered chair","standard","Standard","upholstery"),tags:`${o} dining chair seat upholstered wood`}),r("living","cuteFurniture","acornChair","acorn-armchair","Piped reading armchair",88,88,["teddy","sage","blush"],{...a("armchair","piped","Piped armchair","standard","Standard","upholstery"),tags:`${o} armchair reading seat upholstered piping`}),r("living","cuteFurniture","lilyCoffee","lily-coffee-table","Beveled oval coffee table",110,70,["oak","white"],{...a("coffee-table","oval","Oval top","standard","Standard","wood"),tags:`${o} coffee table beveled wood joinery`}),r("living","cuteFurniture","bubbleSide","bubble-side-table","Stone-top side table",58,58,["mint","butter"],{...a("side-table","stone","Stone top","standard","Standard","stone"),tags:`${o} round side table stone pedestal`}),r("bedroom","cuteFurniture","moonBed","moon-bed","Moon-quilt queen bed",210,185,["lavender","sky","cream"],{...a("bed","moon-quilt","Moon quilt","queen","Queen","upholstery"),tags:`${o} bedroom bed queen quilted upholstered moon embroidery`}),r("bedroom","cuteFurniture","cribBed","crafted-crib","Slatted crib",92,142,["cream","sage"],{...a("bed","crib","Slatted crib","crib","Crib","wood"),tags:`${o} bedroom baby crib slatted fitted mattress`}),r("bedroom","cuteFurniture","toddlerBed","crafted-toddler-bed","Low toddler bed",105,158,["sky","blush"],{...a("bed","toddler","Low toddler","toddler","Toddler","upholstery"),tags:`${o} bedroom toddler bed low guard rail`}),r("bedroom","cuteFurniture","platformBed","platform-bed-twin","Low platform twin bed",120,196,["oak","walnut","white"],{...a("bed","platform","Low platform","twin","Twin","wood"),tags:`${o} bedroom bed twin low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-full","Low platform full bed",158,198,["oak","walnut","white"],{...a("bed","platform","Low platform","full","Full","wood"),tags:`${o} bedroom bed full double low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-queen","Low platform queen bed",188,205,["oak","walnut","white"],{...a("bed","platform","Low platform","queen","Queen","wood"),tags:`${o} bedroom bed queen low platform wood`}),r("bedroom","cuteFurniture","platformBed","platform-bed-king","Low platform king bed",226,205,["oak","walnut","white"],{...a("bed","platform","Low platform","king","King","wood"),tags:`${o} bedroom bed king low platform wood`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-full","Arched upholstered full bed",158,198,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","full","Full","upholstery"),tags:`${o} bedroom bed full double arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-queen","Arched upholstered queen bed",188,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","queen","Queen","upholstery"),tags:`${o} bedroom bed queen arched headboard tufted`}),r("bedroom","cuteFurniture","upholsteredBed","upholstered-bed-king","Arched upholstered king bed",226,205,["blush","lavender","cream"],{...a("bed","upholstered","Arched upholstered","king","King","upholstery"),tags:`${o} bedroom bed king arched headboard tufted`}),r("bedroom","cuteFurniture","storageBed","storage-bed-full","Drawer storage full bed",158,198,["oak","walnut"],{...a("bed","storage","Drawer storage","full","Full","wood"),tags:`${o} bedroom bed full double storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-queen","Drawer storage queen bed",188,205,["oak","walnut"],{...a("bed","storage","Drawer storage","queen","Queen","wood"),tags:`${o} bedroom bed queen storage drawers wood`}),r("bedroom","cuteFurniture","storageBed","storage-bed-king","Drawer storage king bed",226,205,["oak","walnut"],{...a("bed","storage","Drawer storage","king","King","wood"),tags:`${o} bedroom bed king storage drawers wood`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-queen","Four-poster canopy queen bed",188,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","queen","Queen","wood metal"),tags:`${o} bedroom bed queen four poster canopy`}),r("bedroom","cuteFurniture","canopyBed","canopy-bed-king","Four-poster canopy king bed",226,205,["white","brass"],{...a("bed","canopy","Four-poster canopy","king","King","wood metal"),tags:`${o} bedroom bed king four poster canopy`}),r("bedroom","cuteFurniture","daybed","upholstered-daybed","Upholstered twin daybed",196,105,["sage","cream"],{...a("bed","daybed","Upholstered daybed","twin","Twin","upholstery"),tags:`${o} bedroom bed twin daybed sofa bolsters`}),r("bedroom","cuteFurniture","bunkBed","slatted-bunk-bed","Slatted twin bunk bed",120,196,["oak","white"],{...a("bed","bunk","Slatted bunk","twin","Twin bunk","wood"),tags:`${o} bedroom bed twin bunk ladder rails`}),r("bedroom","cuteFurniture","sproutDesk","sprout-desk","Crafted writing desk",180,84,["sage","oak"],{...a("desk","writing","Writing desk","compact","Compact","wood"),tags:`${o} office study desk writing wood drawers`}),r("bedroom","cuteFurniture","cornerDesk","corner-desk","Corner workstation",190,146,["sage","oak"],{...a("desk","corner","Corner workstation","large","Large","wood"),tags:`${o} office study desk corner return drawers`}),r("bedroom","cuteFurniture","secretaryDesk","secretary-desk","Secretary writing desk",110,78,["oak","walnut"],{...a("desk","secretary","Secretary desk","compact","Compact","wood"),tags:`${o} office study desk secretary cubbies wood`}),r("bedroom","cuteFurniture","starNightstand","star-nightstand","Brass-knob nightstand",58,56,["butter","lavender"],{...a("nightstand","two-drawer","Two drawer","standard","Standard","wood"),tags:`${o} bedside table brass knob drawer`}),r("bedroom","cuteFurniture","honeyDresser","honey-dresser","Six-drawer dresser",125,60,["oak","peach"],{...a("dresser","six-drawer","Six drawer","wide","Wide","wood"),tags:`${o} bedroom storage dresser drawers joinery`}),r("bedroom","cuteFurniture","storyBookcase","story-bookcase","Framed bookcase",64,156,["oak","mint"],{...a("bookcase","framed","Framed bookcase","tall","Tall","wood"),tags:`${o} book shelf storage joinery`}),r("lighting","cuteLight","budLamp","bud-table-lamp","Pleated ceramic table lamp",48,52,["mint","blush","butter"],{...a("table-light","pleated-ceramic","Pleated ceramic","table","Table","ceramic brass fabric"),tags:`${o} lamp desk bedside pleated shade ceramic`,visualKind:"light",lightForm:"bud_lamp"}),r("lighting","cuteLight","cloudFloorLamp","cloud-floor-lamp","Linen globe floor lamp",58,94,["cream","sky"],{...a("floor-light","linen-globe","Linen globe","floor","Floor","brass linen"),tags:`${o} standing floor lamp linen globe`,visualKind:"light",lightForm:"cloud_floor_lamp"}),r("lighting","cuteLight","bloomCeiling","bloom-ceiling-light","Faceted glass ceiling light",60,60,["white","butter","mint"],{...a("ceiling-light","faceted-flush","Faceted flush mount","ceiling","Ceiling","glass brass"),tags:`${o} ceiling lamp faceted frosted glass flush mount`,visualKind:"light",lightForm:"bloom_ceiling",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","starPendant","star-pendant","Faceted glass pendant",72,72,["lavender","butter"],{...a("pendant-light","faceted-glass","Faceted glass","ceiling","Ceiling","glass brass"),tags:`${o} ceiling pendant faceted glass`,visualKind:"light",lightForm:"star_pendant",renderLayer:"ceiling-devices"}),r("lighting","cuteLight","acornSconce","acorn-wall-sconce","Fluted brass wall sconce",38,50,["oak","cream"],{...a("wall-light","fluted-brass","Fluted brass","wall","Wall","brass glass"),tags:`${o} wall light fluted brass glass`,visualKind:"light",lightForm:"acorn_sconce",mount:"wall"});let c=Object.fromEntries(e.map(l=>[l.type,l]));(typeof window>"u"?globalThis:window).RoomcraftInventory={groups:n,templates:e,byType:c}})();var _a="#f7efdc",hS="#cfa373",ym="#625145",fS="#b9dbe1",ef=["#5a815f","#779d69","#a4b379"],ai=["#dc9f9d","#a9baa2","#e3c076","#9db7cf","#bba6cd"];function xm(n,t,e,i,s,r){let o=r?t*.4:e*.39,a=(l,u)=>r?new G(l*o,u,0):new G(0,u,l*o),c=new Gs([a(-1,3),a(-.66,i*.75),a(0,i),a(.66,i*.75),a(1,3)]);n.part(new Or(c,16,Math.max(.15,Math.min(t,e)*.021),6,!1),s,0,0,0)}function dS(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=o*.29;if(s==="ball"||s==="texturedBall"){if(n.oval(0,a,0,a,a,a,r.base),s==="ball"){n.ring(0,a,0,a*.99,a*.99,a*.044,r.accent);let c=n.ring(0,a,0,a*.99,a*.99,a*.037,r.detail);c.rotation.z=Math.PI/2}else for(let c=0;c<22;c++){let l=(c+.5)/22,u=Math.sqrt(1-l**2)*a*.97,f=c*2.39996;n.oval(Math.sin(f)*u,a*(1+l),Math.cos(f)*u,a*.105,a*.105,a*.105,r.accent)}return a*2.2}if(s==="book"){let c=i.includes("board-book");for(let l of[-1,1]){let u=l*t*.224;n.box(u,1,0,t*.42,3.1,e*.77,r.dark,c?.8:1.5),n.box(u,3.8,0,t*.385,2.1,e*.73,_a,.8),n.oval(u,6.05,-e*.1,t*.1,.45,e*.14,l<0?r.base:r.accent);for(let f of[0,1])n.box(u,6,e*(.1+.075*f),t*(.23-f*.04),.45,.65,r.dark,.18);if(!c)for(let f of[-1,1])n.oval(u+l*t*.19,2.8,f*e*.3,t*.055,1.6,e*.06,r.accent)}return n.box(0,1.9,0,t*.035,4,e*.78,r.base,.8),7}if(s==="cups"||s==="rings"){let c=s==="cups",l=o*(c?.088:.066);n.disc(0,0,0,a*1.14,l*.55,a*1.14,r.dark,.9);for(let u=0;u<5;u++){let f=a*(1-u*.15),h=l*(u+.55),d=[r.base,r.accent,r.detail,ai[2],ai[3]][u];c?(n.disc(0,h-.6,0,f*.91,l,f*.91,d,.91),n.ring(0,h+l*.9,0,f*.88,f*.88,l*.12,u%2?_a:d)):n.ring(0,h+l*.36,0,f,f,l*.39,d)}return n.oval(0,l*5.46,0,a*.18,l*.55,a*.18,c?r.accent:r.dark),l*6.1}if(s==="blocks"){for(let c=0;c<3;c++){let l=(c-1)*t*.25,u=(c%2-.5)*e*.29,f=(c-1)*.17;n.box(l,0,u,t*.23,o*.24,e*.31,[r.base,r.accent,ai[2]][c],o*.038,f),n.box(l,o*.239,u,t*.14,.7,e*.19,_a,.35,f)}return o*.26}n.ring(0,a*.32,0,a,a*.88,a*.27,r.base);for(let c=0;c<9;c++){let l=c*Math.PI*2/9;n.oval(Math.cos(l)*a,a*.66,Math.sin(l)*a*.88,a*.12,a*.095,a*.12,r.accent)}return a*.8}function pS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=r*.32;if(i==="tunnel"){let u=Math.min(t*.37,e*.42),f=new Ve(u,u,e*.83,18,1,!0,-Math.PI/2,Math.PI);f.rotateX(-Math.PI/2);let h=n.part(f,s.base,0,2.2,0);h.material.side=je;for(let d=0;d<5;d++){let m=Array.from({length:9},(y,p)=>{let g=Math.PI*p/8;return new G(Math.cos(g)*u,2.2+Math.sin(g)*u,(d-2)*e*.2)});n.part(new Or(new Gs(m),15,Math.max(.15,r*.017),6,!1),s.accent,0,0,0)}return n.box(0,0,0,u*2,2.3,e*.85,s.dark,1.1),u+r*.017+2.2}if(i==="playGym"||i==="photoWoodArch"){i==="playGym"&&(n.box(0,.5,0,t*.95,2.5,e*.88,s.accent,4),xm(n,t,e,o,s.base,!1)),xm(n,t,e,o,i==="photoWoodArch"?hS:s.base,!0);for(let u of[-1,1])n.box(t*.38*u,0,0,t*.11,4,e*.4,s.dark,1.6);for(let u=-1;u<=1;u++){let f=u*t*.16,h=o*(u?.94:.99),d=o*(.59+u*.045);n.box(f,d,0,1,h-d,1,_a),n.oval(f,d,0,r*.053,r*.057,r*.049,ai[u+2])}return o+2}if(i==="mirror"){n.box(0,0,0,t*.86,4,e*.71,s.dark,2.4);let u=n.box(0,3,-e*.06,t*.75,o*.7,e*.2,s.base,3),f=n.box(0,5.1,e*.035,t*.64,o*.53,2.2,fS,.8);return u.rotation.x=f.rotation.x=-.21,o*.75+3}if(i==="largeRattle")return n.ring(-t*.19,3,0,r*.25,r*.24,r*.055,s.accent),n.box(t*.06,2,0,t*.26,2.9,e*.16,s.dark,1.2),n.oval(t*.26,r*.14,0,r*.25,r*.14,r*.24,s.base),r*.29;if(i==="sensoryBasket"){n.disc(0,0,0,t*.39,o*.55,e*.38,s.base,.74),n.disc(0,o*.52,0,t*.35,1.2,e*.34,s.dark);for(let u=1;u<=3;u++)n.ring(0,o*u*.17,0,t*(.29+u*.034),e*(.28+u*.035),.8,s.accent);for(let u=0;u<4;u++)n.oval(t*(u%2?.16:-.15),o*.67,e*(u<2?-.14:.14),r*.12,r*.12,r*.12,ai[u]);return o+3}let a=i==="photoActivityTable",l=a?o:i==="activityBoard"?o*.2:o*.72;if(a)for(let u of[-.32,.32])for(let f of[-.29,.29])n.box(t*u,0,e*f,t*.105,l,e*.125,ai[f<0?3:1],2.6);else n.box(0,0,0,t*.83,l+1,e*.83,s.base,2.8);n.box(0,l,0,t*.94,Math.max(2.5,r*.057),e*.91,s.accent,2.6);for(let u=0;u<6;u++){let f=t*(.25*(u%3)-.25),h=e*(u<3?-.2:.2),d=l+r*.056;u%3===1?n.box(f,d,h,t*.105,r*.05,e*.15,ai[u%ai.length],1.4,.24):n.disc(f,d,h,r*.081,r*(.044+u*.007),r*.072,ai[u%ai.length],.87)}return l+r*.14}function mS(n,t,e,{form:i,palette:s}){if(i==="round"){n.disc(0,.35,0,t*.48,2.1,e*.48,s.base);for(let u of[.32,.43])n.ring(0,2.53,0,t*u,e*u,.37,s.accent);return 3}if(["tummy","photoLeafMat"].includes(i)){n.box(0,.5,0,t*.97,2.3,e*.95,s.dark,1),n.box(0,1.5,0,t*.95,1.75,e*.93,s.base,.7);for(let u of[-.29,0,.29])for(let f of[-.34,-.12,.12,.34]){let h=n.oval(t*f,3.3,e*u,t*.041,.22,e*.095,s.accent);h.rotation.y=f<0?-.49:.49}return 3.6}let o=i==="photoCheckerMat",a=o?["#e3d3bc","#776056","#c0a083","#776056"]:[s.base,s.accent,s.detail,s.base],c=Math.min(t,e)*.008,l=i==="foam"?4:5;n.box(0,.25,0,t*.99,1,e*.99,s.dark,.5);for(let u=0;u<4;u++)for(let f=0;f<l;f++){let h=t*((f+.5)/l-.5),d=e*((u+.5)/4-.5),m=a[(u+(o?f:f*3))%4];n.box(h,.9,d,t/l-c,2.2,e/4-c,m,.6),i==="puzzle"&&u<3&&n.disc(h,2.6,d+e/8,t*.026,.49,e*.026,m)}return 3.4}function gS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="tall",a=i==="rail",c=i==="vertical",l=i==="hanging";if(a&&(n.box(0,1,0,t*.92,r*.22,e*.53,s.base,2),n.box(0,r*.22,0,t*.85,2,e*.45,ym,.8)),c){for(let h of[-1,1])n.box(t*.37*h,0,-e*.29,t*.065,r*.79,e*.07,s.dark,1.2);for(let h=0;h<3;h++)n.box(0,r*(.16+.26*h),-e*.11,t*.84,2.8,e*.41,s.accent,1.2)}let u=o||l?[-.25,.25]:[-.3,0,.3],f=0;return u.forEach((h,d)=>{let m=t*h,y=c?-e*.1:e*(i==="cluster"?d===1?.21:-.11:0),p=Math.min(t*.142,e*.265,r*(o?.22:.18)),g=c?r*(.19+.26*d):l?r*.41:0,x=a?r*.25:p*(o?1.7:.87);a||(n.disc(m,g,y,p,x,p,s.base,.68),n.ring(m,g+x,y,p*.95,p*.95,.8,s.accent),n.disc(m,g+x-.72,y,p*.86,1,p*.86,ym));for(let _=0;_<7;_++){let b=_*2.39996+d,v=p*(.41+_%3*.24),M=p*((o?1.9:1.04)+_%3*.26),R=Math.cos(b)*v,S=Math.sin(b)*v,T=n.oval(m+R*.47,g+x+M*.46,y+S*.47,.7,M*.48,.7,ef[0]);T.rotation.z=-Math.atan2(R,M),T.rotation.x=Math.atan2(S,M);let P=n.oval(m+R,g+x+M,y+S,p*.39,p*.13,p*.6,ef[_%ef.length]);P.rotation.y=b,a&&_%3===0&&n.oval(m+R,g+x+M+1.1,y+S,p*.18,p*.13,p*.19,ai[(_+d)%ai.length]),f=Math.max(f,g+x+M+p*.2)}if(l){for(let _ of[-1,1]){let b=n.box(m+_*p*.48,g+x+r*.24,y,.72,r*.53,.72,_a);b.rotation.z=_*.36}f=Math.max(f,g+x+r*.53)}}),f}var yS={softToy:dS,activityToy:pS,playMat:mS,planterSet:gS};function bm(n,t,e,i){let s=yS[i.artFamily];return s?.(n,t,e,i)}(n=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor",mount:"wall"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor",mount:"wall"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],i="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=q=>typeof q=="string"&&q.startsWith("ui"),o=q=>String(q??"").toLowerCase(),a=q=>o(q).split(".")[0],c=q=>typeof q=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(q),l=q=>q.type==="window"?"wall":q.mount||"floor",u=q=>q?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(q?.type),f=q=>q?.type==="diningChair"||/^living-dining-chair-/.test(q?.type),h=q=>f(q)||["chair","armchair","stool"].includes(q?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(q?.type),d=q=>Number(q.toFixed(6)),m=q=>(q%360+360)%360;function y(q){let bt=q.type==="table",Z=/^living-(petal|round|rectangular)-dining-set-/.exec(q.type);if(!bt&&!Z)return;let J=Z?.[1],nt=bt?"diningTable":q.type.replace("-dining-set-","-dining-table-"),ct=$=>bt?"diningChair":`living-dining-chair-${$}`,{w:pt,h:It}=q;if(bt||J==="round"){let[$,oe,Yt,H,A]=bt?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:nt,w:(bt?.79:.58)*pt,h:(bt?.57:.58)*It,tableHeight:bt?46.4:41,chairs:[[0,-It*$,pt*Yt,It*H,0,ct("sage")],[pt*oe,0,It*A,pt*(bt?.17:Yt),90,ct("butter")],[0,It*$,pt*Yt,It*H,180,ct("blush")],[-pt*oe,0,It*A,pt*(bt?.17:Yt),270,ct("lavender")]]}}let Lt=J==="rectangular",Ft=Lt?[-.32,0,.32]:[-.28,.28],zt=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:nt,w:.79*pt,h:.56*It,tableHeight:42.3,chairs:[-1,1].flatMap(($,oe)=>Ft.map((Yt,H)=>[pt*Yt,It*.37*$,pt*(Lt?.15:.19),It*.23,oe*180,ct(zt[oe][H])]))}}function p(q){if(!Array.isArray(q?.items))return q;let bt=new Set(q.items.map(ct=>ct.id)),Z=q.items.filter(h),J=!1,nt=q.items.flatMap(ct=>{let pt=y(ct);if(!pt||![ct.x,ct.y,ct.w,ct.h,ct.rotation].every(Number.isFinite)||ct.w<=0||ct.h<=0)return[ct];J=!0;let It=ct.rotation*Math.PI/180,Lt=Math.cos(It),Ft=Math.sin(It),zt=Number.isFinite(ct.modelHeight)?ct.modelHeight:void 0,$={...ct,type:pt.tableType,w:d(pt.w),h:d(pt.h),...zt===void 0?{}:{modelHeight:Math.max(6,d(zt*pt.tableHeight/59))}};return[...pt.chairs.flatMap(([Yt,H,A,rt,dt,_t],V)=>{let w=d(ct.x+Yt*Lt-H*Ft),E=d(ct.y+Yt*Ft+H*Lt),C=Math.max(8,Math.min(A,rt)*.52);if(Z.some(ut=>Math.hypot(ut.x-w,ut.y-E)<=C))return[];let U=`${ct.id}-chair-${V+1}`,k=U,Q=2;for(;bt.has(k);)k=`${U}-${Q++}`;bt.add(k);let Y={id:k,type:_t,name:`Dining chair ${V+1}`,x:w,y:E,w:d(A),h:d(rt),rotation:m(ct.rotation+dt),entityId:"",...zt===void 0?{}:{modelHeight:zt},...Number.isFinite(ct.zIndex)?{zIndex:ct.zIndex}:{}};return Z.push(Y),[Y]}),$]});return J?{...q,items:nt}:q}function g(){return{templates:[...t,...n.RoomcraftInventory?.templates||[]],paletteGroups:[...n.RoomcraftInventory?.groups||[],...e]}}function x(q,bt,Z){return!(!q||!bt||!Z||q.type===Z.type||Z.legacy||s.has(q.type)||r(q.type)||s.has(Z.type)||r(Z.type)||l(bt)!==l(Z)||q.entityId&&!_(q.entityId,Z))}function _(q,bt){return!c(q)||typeof bt?.type!="string"||bt.legacy||r(bt.type)||bt.type==="stairs"?!1:bt.type==="cameraThumbnail"?a(q)==="camera":bt.type==="garageDoor"||bt.type==="window"?["cover","binary_sensor","switch"].includes(a(q)):a(q)!=="camera"}function b(q,bt,Z){if(!q||q.entityId||!_(bt,Z))return!1;let J=q.type==="cameraThumbnail"?40:12,{x:nt,y:ct,w:pt,h:It}=q;return nt>=0&&nt<=1536&&ct>=0&&ct<=1024&&pt>=J&&pt<=1536&&It>=J&&It<=1024}function v(q,bt){let Z=a(q.entity_id),J=o(q.name+" "+q.entity_id),nt=J.replaceAll("_"," "),ct={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},pt=Lt=>{if(Lt.type==="controlZone")return!0;if(Z==="camera")return Lt.type==="cameraThumbnail";if(Z==="cover")return Lt.type===(/garage/.test(J)?"garageDoor":"window");if(Z==="climate")return Lt.type==="thermostat";if(Z==="media_player"&&/\btv\b|television/.test(nt))return Lt.type==="tv";if(Z==="binary_sensor"){if(/presence|occupancy/.test(J))return Lt.type==="presenceSwitch";if(/garage/.test(J))return Lt.type==="garageDoor";if(/window|blind|shade/.test(J))return Lt.type==="window"}if(ct[Z]?.includes(Lt.group)||/humidifier/.test(J)&&Lt.type==="humidifier"||/purifier/.test(J)&&Lt.type==="airPurifier")return!0;if(Z==="switch"){if(/light|lamp/.test(J))return Lt.group==="lighting";if(/fan/.test(J))return Lt.group==="fans"||Lt.type==="windowFan"}return!1},It=bt.filter(Lt=>_(q.entity_id,Lt));return{recommended:It.filter(pt),available:It}}function M(q){let bt=new Map;for(let Z of q){let J=[[Z.entityId,"primary"],[Z.tapEntityId,"Tap target"],[Z.holdEntityId,"Hold target"],[Z.presenceEntityId,"Presence sensor"],[Z.presenceTrackEntityId,"Radar targets"],[Z.vacuumMapEntityId,"Map camera"],[Z.imageEntityId,"Event image"],...Array.isArray(Z.eventEntityIds)?Z.eventEntityIds.map(nt=>[nt,"Camera event"]):[]];for(let[nt,ct]of J)c(nt)&&(bt.has(nt)||bt.set(nt,[]),bt.get(nt).push({item:Z,role:ct}))}return bt}function R(q){return q&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(q.type)&&!r(q.type)}function S(q,bt,Z,J){if(!["w","h"].includes(bt)||!Number.isFinite(Z))return null;let nt=q.type==="cameraThumbnail"?40:12,ct=q.type==="cameraThumbnail"||c(q.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!J)return{[bt]:Math.min(ct[bt],Math.max(nt,Z))};let pt=Math.min(ct.w/q.w,ct.h/q.h),It=Math.min(pt,Math.max(nt/q.w,nt/q.h)),Lt=Math.min(pt,Math.max(It,Z/q[bt]));return{w:Math.round(q.w*Lt*10)/10,h:Math.round(q.h*Lt*10)/10}}function T(q,bt,Z,J){if(![bt,Z,q?.w,q?.h].every(Number.isFinite)||q.w<=0||q.h<=0)return null;if(!J)return{...S(q,"w",bt,!1),...S(q,"h",Z,!1)};let nt=(bt*q.w+Z*q.h)/(q.w**2+q.h**2);return S(q,"w",nt*q.w,!0)}let P=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),N=new Set(["lamp","tableLamp","humidifier","plant"]),B=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),O=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,F=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,D=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function z(q,bt,Z){if(q==="playpen"||q==="photoPlayYard"){let Ft=Math.min(bt,Z)*.055;return[[0,-(Z-Ft)/2,bt-Ft,Ft,0],[0,(Z-Ft)/2,bt-Ft,Ft,0],[-(bt-Ft)/2,0,Z-Ft,Ft,Math.PI/2],[(bt-Ft)/2,0,Z-Ft,Ft,Math.PI/2]]}let J=q==="folding",nt=J?4:3,ct=Math.min(J?39:29,bt*.28),pt=bt/nt,It=Math.min(Z*(J?.5:.73),ct*.6),Lt=J?Math.min(.18,It/pt*.85):0;return Array.from({length:nt},(Ft,zt)=>[-bt/2+pt*(zt+.5),0,pt,It,zt%2?-Lt:Lt])}function W(q){let{w:bt,h:Z}=q,J=n.RoomcraftInventory?.byType?.[q.type];if(J?.artFamily==="foamBlock"){let pt=Math.min(1.4,Math.min(bt,Z)*.021);if(["arch","tunnel","wedge","ramp"].includes(J.form)){let It=Z*(J.form==="tunnel"?.83:.73);return[[0,0,bt*.91+2*pt,It+2.08*pt]]}return[[0,0,bt*(J.form==="steps"?.99:.96),Z*.96]]}if(J?.form==="softPouf")return[[0,0,bt*.97,Z*.97]];if(J?.form==="photoBolster")return[[0,0,bt*.96,Z*.94]];if(J?.artFamily!=="paddedPanel")return null;let nt=J.form;if(nt==="photoBearPanel")return[[0,0,bt,Z*.49]];if(nt==="gate"||nt==="guard"){let pt=Math.min(Z*.55,Math.min(37,bt*.32)*.28);return[[0,0,bt*.99,pt],[-bt*.46,0,bt*.08,Z*.73],[bt*.46,0,bt*.08,Z*.73]]}let ct=nt==="playpen"||nt==="photoPlayYard";return z(nt,bt,Z).map(([pt,It,Lt,Ft,zt])=>[pt,It,Lt*(ct?1:.955),Ft*(ct?.5:1.28),zt])}function tt(q){let bt=q?.type??"";return u(q)||P.has(bt)||O.test(bt)?"surface":N.has(bt)||q?.lightForm==="bud_lamp"||bt.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function K(q){let bt=q.type==="humidifier"?.37:q.type==="plant"?.23:.2;return Math.min(q.w,q.h)*bt}function j(q,bt=!1){let{type:Z,w:J,h:nt}=q;if(u(q))return[[0,0,J,nt]];if(Z==="desk"||Z.startsWith("bedroom-corner-desk-"))return[[0,-.33*nt,J,.34*nt],[-.41*J,.17*nt,.18*J,.66*nt],[.41*J,.17*nt,.18*J,.66*nt]];if(!bt&&(Z==="sofa"||Z.startsWith("living-cloud-sofa-")))return nt>J?[[-.25*J,0,.5*J,nt],[.22*J,(Z==="sofa"?.3:-.3)*nt,.52*J,.38*nt]]:[[0,-.215*nt,J,.57*nt],[-.32*J,.25*nt,.34*J,.46*nt]];if(bt){if(Z.startsWith("living-round-dining-"))return[[0,0,.58*J,.58*nt]];if(Z==="table"||/-dining-set-/.test(Z))return[[0,0,.79*J,.56*nt]];if(Z.includes("-desk-"))return[[0,0,J,.85*nt]]}if(!bt&&tt(q)==="tabletop"){let ct=2*K(q);return[[0,0,ct,ct]]}return[[0,0,J*.95,nt*.95]]}function X(q,bt,Z){if(![q?.x,q?.y,q?.w,q?.h].every(Number.isFinite)||q.w<=0||q.h<=0)return[];let J=(Number.isFinite(q.rotation)?q.rotation:0)*Math.PI/180,nt=Math.cos(J),ct=Math.sin(J);return(Z??j(q,bt)).map(([pt,It,Lt,Ft,zt=0])=>{let $=[Math.cos(J+zt),Math.sin(J+zt)];return{x:q.x+pt*nt-It*ct,y:q.y+pt*ct+It*nt,u:$,v:[-$[1],$[0]],width:Lt/2,height:Ft/2}})}let St=(q,bt,Z)=>q*Z[0]+bt*Z[1];function Et(q,bt){let Z=bt.type.startsWith("living-round-dining-"),J=X(bt,!0),nt=K(q)*.9;return D.every(([ct,pt])=>J.some(It=>{let Lt=q.x+ct*nt-It.x,Ft=q.y+pt*nt-It.y,zt=Math.abs(St(Lt,Ft,It.u))/It.width,$=Math.abs(St(Lt,Ft,It.v))/It.height;return Z?Math.hypot(zt,$)<=1:zt<=1&&$<=1}))}function gt(q){let bt=W(q);return bt?X(q,!1,bt):f(q)||tt(q)!=="floor"||B.has(q.type)||F.test(q.type)?X(q,!1):[]}function xt(q){return tt(q)==="tabletop"||q.type==="rug"||q.type.startsWith("baby-mats-")?[]:["chair","stool","tv"].includes(q.type)||/(?:desk-chair|toy-storage|fireplace|floor-chair)/.test(q.type)||q.type.startsWith("pets-")?X(q,!1):gt(q)}function Ct(q,bt){let Z=(J,nt)=>J.width*Math.abs(St(...J.u,nt))+J.height*Math.abs(St(...J.v,nt));return Math.min(...[q.u,q.v,bt.u,bt.v].map(J=>Z(q,J)+Z(bt,J)-Math.abs(St(q.x-bt.x,q.y-bt.y,J))))}function st(q,bt){let[Z]=X(q,!1),[J]=X(bt,!0);if(!Z||!J||Ct(Z,J)<=0)return!1;let nt=[Z.x-J.x,Z.y-J.y],ct=St(...nt,J.u)/J.width,pt=St(...nt,J.v)/J.height,It=bt.type.startsWith("living-round-dining-"),Lt;if(It){if(Math.hypot(ct,pt)<1)return!1;Lt=-St(...nt,Z.v)/Math.hypot(...nt)}else{let Yt=Math.abs(ct)>=1,H=Math.abs(pt)>=1;if(Yt===H)return!1;Lt=-Math.sign(Yt?ct:pt)*St(...Z.v,Yt?J.u:J.v)}if(Lt<.8)return!1;let Ft=bt.type==="diningTable",zt=Ft?46.4:It?41:42.3,$=(bt.modelHeight??zt)*(Ft?32:33)/zt;return(q.modelHeight??59)*30/59<$}function ht(q,bt,Z,J){let nt=0;for(let It of Z)for(let Lt of J)nt=Math.max(nt,Ct(It,Lt));if(nt<=2)return nt;let ct=tt(q),pt=tt(bt);return ct==="tabletop"&&pt==="surface"&&Et(q,bt)||ct==="surface"&&pt==="tabletop"&&Et(bt,q)||f(q)&&u(bt)&&st(q,bt)||u(q)&&f(bt)&&st(bt,q)?0:nt}function Mt(q,bt,Z){let J=gt(q);if(!J.length)return;let nt=Z?gt(Z):[],ct,pt=2;for(let It of bt){if(It.id===q.id)continue;let Lt=gt(It),Ft=ht(q,It,J,Lt);Ft<=pt||nt.length&&Ft<=ht(Z,It,nt,Lt)+.02||(ct=It,pt=Ft)}return ct}function Bt(q){let bt=q.filter(pt=>tt(pt)==="surface"),Z=bt.filter(u),J=new Set,nt=new Map,ct=new Map;for(let pt of q){let It=f(pt);if(!It&&tt(pt)!=="tabletop")continue;let Lt=It?Z.find(zt=>st(pt,zt)):bt.find(zt=>Et(pt,zt));if(!Lt)continue;J.add(pt.id);let Ft=It?ct:nt;Ft.has(Lt.id)||Ft.set(Lt.id,[]),Ft.get(Lt.id).push(pt)}return J.size?q.flatMap(pt=>J.has(pt.id)?[]:[...ct.get(pt.id)??[],pt,...nt.get(pt.id)??[]]):q}function kt(q,bt,Z){let J=q.ownerDocument,nt=(E,C,U={})=>{let k=J.createElement(E);C&&(k.textContent=C);for(let[Q,Y]of Object.entries(U))k.setAttribute(Q,Y);return k},ct=nt("dialog","",{class:"model-library","aria-label":"Objects and models"}),pt=nt("header"),It=nt("h2","Objects & models"),Lt=nt("button","Close",{type:"button"});pt.append(It,Lt);let Ft=nt("div","",{class:"model-library-filters"}),zt=nt("select","",{"aria-label":"Object library section"});for(let[E,C]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])zt.append(nt("option",C,{value:E}));let $=nt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});Ft.append(zt,$);let oe=nt("div","",{class:"model-library-context"}),Yt=nt("p","",{role:"status",class:"model-library-status"}),H=nt("div","",{class:"model-library-list"});ct.append(pt,Ft,oe,Yt,H);let A=nt("style");A.textContent=`
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
    `,q.append(A,ct);let rt,dt=!1,_t=(E,C)=>{let U=nt("button",E,{type:"button"});return U.addEventListener("click",C),U};function V(E){rt=E,dt=!1,zt.value=E.existing?"placed":"catalog",$.value="",w(),$.focus()}function w(){let{templates:E,paletteGroups:C}=g(),U=new Map(E.map(L=>[L.type,L])),k=new Map(C),{items:Q,entities:Y}=bt(),ut=o($.value).trim(),lt=(...L)=>ut.split(/\s+/).every(et=>o(L.join(" ")).includes(et)),Rt=[];if(oe.replaceChildren(),rt&&(oe.append(nt("strong",rt.item?.name||rt.entity?.name||rt.entity?.entity_id)),rt.entity&&(oe.append(_t(rt.existing?"Choose a new model":"Bind existing object",()=>{V({entity:rt.entity,existing:!rt.existing})})),rt.existing||oe.append(_t(dt?"Suggested models":"All compatible models",()=>{dt=!dt,w()}))),oe.append(_t("Cancel mapping",()=>{zt.value=rt.entity?"devices":"placed",rt=void 0,$.value="",w()}))),zt.value==="placed")for(let L of Q){let et=U.get(L.type);if(!lt(L.name,et?.label,L.type,L.entityId))continue;let it=[L.w,L.h,L.modelHeight].filter(Number.isFinite).join(" \xD7 "),Tt=[et?.label||L.type,it&&it+" plan px",L.entityId].filter(Boolean).join(" \xB7 "),At;if(rt?.existing){if(!b(L,rt.entity.entity_id,et))continue;At=[_t("Bind to this object",()=>Z({kind:"bind",itemId:L.id,entityId:rt.entity.entity_id}))]}else At=[_t("Edit",()=>Z({kind:"edit",itemId:L.id}))],E.some(wt=>x(L,et,wt))&&At.push(_t("Change model",()=>V({item:L})));Rt.push([L.name||et?.label||L.type,Tt,At])}else if(zt.value==="devices"){let L=M(Q);for(let et of Y){if(!c(et.entity_id)||!lt(et.name,et.entity_id,et.area))continue;let it=L.get(et.entity_id)||[],Tt=it.find(Ot=>Ot.role==="primary"),At=it.map(({item:Ot,role:le})=>le==="primary"?Ot.name:le+" for "+Ot.name),wt=[et.entity_id,et.area,...At].filter(Boolean).join(" \xB7 "),Ut=it.length?[_t(Tt?"Edit mapped object":"Edit linked object",()=>Z({kind:"edit",itemId:(Tt||it[0]).item.id}))]:[];E.some(Ot=>_(et.entity_id,Ot))&&Ut.push(_t(Tt?"Map again":"Map to object",()=>V({entity:et,existing:Q.some(Ot=>b(Ot,et.entity_id,U.get(Ot.type)))}))),Rt.push([et.name||et.entity_id,wt,Ut])}}else{let L=E.filter(et=>!et.legacy);if(rt?.item&&(L=E.filter(et=>x(rt.item,U.get(rt.item.type),et))),rt?.entity){let et=v(rt.entity,E);L=dt?et.available:et.recommended}for(let et of L){let it=k.get(et.group)||et.group;if(!lt(et.label,et.type,et.tags,it))continue;let Tt=rt?.item?{kind:"replace",itemId:rt.item.id,modelId:et.type}:{kind:"place",modelId:et.type,...rt?.entity?{entityId:rt.entity.entity_id}:{}};Rt.push([et.label,it+" \xB7 "+et.w+" \xD7 "+et.h+" plan px",[_t(rt?"Use model":"Place",()=>Z(Tt))]])}}H.replaceChildren();for(let[L,et,it]of Rt.slice(0,48)){let Tt=nt("div","",{class:"model-library-row"}),At=nt("div");At.append(nt("strong",L),nt("small",et));let wt=nt("div","",{class:"model-library-actions"});wt.append(...it),Tt.append(At,wt),H.append(Tt)}Yt.textContent=Rt.length>48?"Showing 48 of "+Rt.length+". Search to narrow the list.":Rt.length?Rt.length+(Rt.length===1?" result":" results"):zt.value==="devices"&&!Y.length?"Connect to Home Assistant to list devices.":rt?.existing&&!ut?"No compatible unbound objects. Choose a new model instead.":"No matches."}return zt.addEventListener("change",()=>{rt=void 0,$.value="",w()}),$.addEventListener("input",w),Lt.addEventListener("click",()=>ct.close()),{open(E="placed"){rt=void 0,dt=!1,zt.value=E,$.value="",w(),ct.open||ct.showModal()},get isOpen(){return ct.open},close(){ct.open&&ct.close()}}}n.RoomcraftModels=Object.freeze({catalog:g,canMap:_,canBind:b,canReplace:x,suggestions:v,supportsHeight:R,resizeFootprint:S,resizeCornerFootprint:T,splitDiningFurniture:p,placementRole:tt,specialtyBarrierSections:z,walkingObstacleBoxes:xt,blockingPlacement:Mt,orderMountedObjects:Bt,mount:kt,handoffKey:i})})(typeof window>"u"?globalThis:window);var vm=["#e9a1ad","#f4eee0","#b7cf84","#e8d081","#80b7ce","#b993c7"],xS=["#e9ad9c","#e2cb87","#9db9a3"],_m=["#725746","#8d6b55","#65534b","#91755f"],bS=new Set(["wedge","ramp","arch","tunnel"]);function nf(n,t,e,i,s,r,o,a=0){let c=new mi(t,{depth:e,curveSegments:10,steps:1,bevelEnabled:a>0,bevelSize:a,bevelThickness:a,bevelSegments:2});return c.translate(0,0,-e/2),n.part(c,i,s,r,o)}function Mm(n,t,e,i){let s=Math.cos(i),r=Math.sin(i),o=(a,c)=>[t+a*s+c*r,e-a*r+c*s];return{box(a,c,l,u,f,h,d,m=0){let[y,p]=o(a,l);n.box(y,c,p,u,f,h,d,m,i)},bead(a,c,l,u,f){let[h,d]=o(a,l);n.oval(h,c,d,u,u,u,f)}}}function Sm(n,t,e,i,s,r,o,a,c){let l=Mm(n,t,e,i),u=o*.43,f=r*.1,h=s*.4;l.box(0,r-f,0,s*.98,f,u,a,f*.43),l.box(0,0,0,s*.99,f,u,a,f*.34);for(let d of[-1,1])l.box(d*h,f*.65,0,s*.17,r*.83,u,a,3),l.box(d*s*.475,r*.3,0,s*.055,r*.17,u*1.14,c,1.4),l.box(d*s*.23,r*.17,0,s*.1,r*.55,u*.84,a,2.1),l.bead(d*s*.088,r*.61,u*.33,Math.min(r,s)*.05,a),l.bead(d*s*.043,r*.53,u*.49,Math.min(r,s)*.018,c);l.box(0,r*.27,0,s*.2,r*.46,u*.96,a,3.4),l.box(0,r*.43,u*.52,s*.088,r*.066,u*.15,c,1.3)}function vS(n,t,e,i,s){let r=Math.min(38,Math.min(t,e)*.3),{specialtyBarrierSections:o}=(typeof window>"u"?globalThis:window).RoomcraftModels;for(let[a,[c,l,u,f,h]]of o("playpen",t,e).entries()){let d=a>=2?3:4,m=u/d;for(let y=0;y<d;y++){let p=-m*(d-1)/2+y*m,g=s?vm[(y+a*2)%vm.length]:y%2?i.accent:i.base;Sm(n,c+p*Math.cos(h),l+p*Math.sin(h),-h,m,r,f,g,"#c1b9b0")}}return r}function _S(n,t,e,{form:i,palette:s}){if(i==="photoPlayYard"||i==="playpen")return vS(n,t,e,s,i==="photoPlayYard");if(i==="photoBearPanel"){let u=Math.min(37,t*.42);return Sm(n,0,0,0,t,u,e,s.base,s.dark),u}if(i==="gate"||i==="guard"){let u=Math.min(37,t*.32),f=Math.min(e*.55,u*.28);for(let d of[-1,1])n.box(d*t*.46,0,0,t*.07,u,f,s.dark,1.5),n.box(d*t*.46,u*.08,0,t*.08,u*.08,e*.73,s.base,1.4);for(let d of[u*.11,u*.88])n.box(0,d,0,t*.88,u*.085,f*.74,s.accent,1.2);let h=i==="guard"?13:8;for(let d=0;d<h;d++){let m=t*(.79*d/(h-1)-.395);n.box(m,u*.16,0,t*.027,u*.77,f*.47,s.base,.8)}return n.box(t*.39,u*.74,f*.3,t*.09,u*.11,f*.53,s.detail,1.7),u}let r=i==="folding",o=Math.min(r?39:29,t*.28),a=[s.base,s.accent,s.detail],{specialtyBarrierSections:c}=(typeof window>"u"?globalThis:window).RoomcraftModels,l=c(i,t,e);for(let[u,[f,h,d,m,y]]of l.entries()){let p=Mm(n,f,h,-y);if(p.box(0,0,0,d*.955,o,m,s.dark,3.7),p.box(0,o*.07,m*.14,d*.87,o*.86,m*.87,a[u%3],3.4),i==="quilted")for(let g of[-.26,0,.26])p.box(g*d,o*.16,m*.59,d*.22,o*.67,m*.09,s.base,2.6);r&&u<l.length-1&&p.box(d*.48,o*.38,0,d*.09,o*.24,m*.92,s.dark,1.2)}return o}function MS(n,t,e,i){let s=new ln;return e?(s.moveTo(-n/2,0),s.lineTo(-n/2,t*.34),s.bezierCurveTo(-n/2,t*1.18,n/2,t*1.18,n/2,t*.34),s.lineTo(n/2,0),s.lineTo(n*.29,0),s.lineTo(n*.29,t*.32),s.bezierCurveTo(n*.29,t*.83,-n*.29,t*.83,-n*.29,t*.32),s.lineTo(-n*.29,0)):(s.moveTo(-n/2,0),s.lineTo(n/2,0),s.lineTo(n/2,t),s.lineTo(-n/2,t*(i?.18:.08))),s.closePath(),s}function SS(n,t,e,{type:i,form:s,palette:r}){let o=Math.min(t,e),a=i.endsWith("-rainbow")?xS:[r.accent,r.base,r.dark];if(s==="steps"){let l=Math.min(44,o*.48),u=t/3;for(let f=0;f<3;f++){let h=u*(f-1),d=l*(f+1)/3;n.box(h,0,0,u*.98,d,e*.94,a[f],3.7),n.box(h,d*.86,0,u*.96,d*.055,e*.945,r.detail,1.1)}return l}if(bS.has(s)){let l=s==="arch"||s==="tunnel",u=s==="ramp",f=Math.min(l?53:u?28:44,o*(l?.65:u?.32:.49)),h=MS(t*.91,f,l,u),d=Math.min(1.4,o*.021),m=s==="tunnel"?e*.83:e*.73;nf(n,h,m,a[1],0,d,0,d);for(let y of[-1,1])nf(n,h,d,a[y<0?0:2],0,d,y*m*.5,d*.54);return f+d*2}let c=Math.min(46,o*.62);return n.box(0,0,0,t*.95,c,e*.95,r.base,5),n.box(0,c*.08,0,t*.959,c*.07,e*.959,r.dark,1.8),n.box(0,c*.87,0,t*.955,c*.055,e*.955,r.accent,1.5),c}function wS(n,t,e,i){let s=Math.min(38,t*.35),r=Math.min(e*.31,t*.065);n.box(0,2,0,t*.95,s*.92,r*.35,"#33343a",2);for(let o of[-.47,.47])n.box(t*o,0,0,t*.035,s,r,i.dark,1.8),n.box(t*o,0,0,t*.068,s*.08,e*.74,i.dark,1.3);for(let o=-5;o<=5;o++)n.box(t*o*.077,2,r*.25,t*.008,s*.85,r*.15,i.accent,.42);for(let o of[.06,.28,.51,.74,.96])n.box(0,s*o,r*.3,t*.93,s*(o===.96?.06:.027),r*.21,i.base,.55);return s}function ES(n,t,e,{form:i,palette:s}){if(i==="screen")return wS(n,t,e,s);let r=i==="photoTiledMantel",o=i!=="hearth",a=Math.min(o?54:39,t*.37),c=e*.16,l=r?"#e6ded0":s.base,u=o?s.accent:s.dark,f=t*.59,h=a*.57;n.box(0,0,e*.05,t*.96,a*.09,e*.83,l,2.6),n.box(0,a*.08,-e*.28,t*.87,a*.81,e*.27,s.dark,2.2),n.box(0,a*.09,-e*.12,f,h,e*.12,"#29272b",1.7);for(let d of[-1,1])n.box(d*t*.383,a*.08,-c,t*.135,a*.78,e*.35,l,2.7),n.box(d*t*.3,a*.11,-c*.03,t*.014,h,e*.04,"#bc925f",.75);if(n.box(0,a*.65,-c,t*.78,a*.2,e*.35,l,2.6),r||!o){let d=t*.095;for(let m=-4;m<=4;m++)n.box(m*d,a*.68,-e*.014,d*.94,a*.146,e*.077,r?_m[(m+4)%_m.length]:s.accent,1)}n.box(0,a*.84,-e*.14,t*.9,a*.09,e*.43,u,2.1),n.box(0,a*.93,-e*.12,t*.99,a*.075,e*.51,r?"#f3ece3":s.detail,1.8);for(let d=-1;d<=1;d++)n.box(d*t*.11,a*(.13+Math.abs(d)*.02),e*.03,t*.25,a*.065,e*.1,d?"#785141":"#ad7e5b",1.7,d*.36);return a}function TS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e);if(i==="photoBolster"){let a=Math.min(25,r*.62);n.box(0,0,0,t*.96,a,e*.91,s.base,a*.37);for(let c of[-1,1])n.box(c*t*.39,a*.12,0,t*.017,a*.78,e*.94,s.accent,2.3);return a}let o=Math.min(31,r*.41);return n.disc(0,0,0,t*.43,o*.17,e*.43,s.dark,.94),n.oval(0,o*.48,0,t*.48,o*.47,e*.48,s.base),n.ring(0,o*.4,0,t*.477,e*.477,Math.min(1.1,r*.025),s.accent),n.oval(0,o*.82,0,t*.26,o*.1,e*.26,s.accent),o}function AS(n,t,e,i,s){let r=i==="mirror",o=Math.min(r?45:39,Math.max(6,e*.66)),a=Number.isFinite(s)?Math.max(0,s-o/2):0,c=Math.min(5.5,e*.27),l=c*.56;n.box(0,a,0,t*.95,o,c,r?"#8b6b54":"#694e3e",2.7),n.box(0,a+o*.065,l,t*.89,o*.87,c*.26,r?"#d8b88e":"#ead8b8",1.4);let u=t*.81,f=o*.73,h=a+o*.14;n.box(0,h,l*1.31,u,f,c*.16,r?"#a7c4ce":"#c4d3b6",1.15);let d=new ln;return r?(d.moveTo(-u*.45,0),d.lineTo(-u*.19,0),d.lineTo(u*.14,f),d.lineTo(-u*.02,f)):(d.moveTo(-u/2,0),d.lineTo(-u/2,f*.19),d.quadraticCurveTo(-u*.28,f*.86,-u*.07,f*.4),d.quadraticCurveTo(u*.24,f*.18,u/2,f*.48),d.lineTo(u/2,0)),d.closePath(),nf(n,d,c*.035,r?"#e5eff0":"#759899",0,h,l*1.49),r||n.oval(u*.28,h+f*.76,l*1.51,f*.1,f*.1,c*.045,"#f0cb8c"),a+o}function wm(n,t,e,i,{mountY:s}={}){switch(i?.artFamily){case"paddedPanel":return _S(n,t,e,i);case"foamBlock":return SS(n,t,e,i);case"fireplace":return ES(n,t,e,i);case"playFurniture":if(i.form==="softPouf"||i.form==="photoBolster")return TS(n,t,e,i);break;default:if(i?.type==="artwork"||i?.type==="mirror")return AS(n,t,e,i.type,s)}}var at=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),RS=Object.freeze({sage:at.sage,mint:at.aqua,sky:at.blue,peach:at.peach,coral:"#cf8979",lavender:at.lilac,butter:at.honey,cream:at.linen,white:at.cream,oak:at.oakLight,walnut:at.walnut,charcoal:"#505b68",brass:at.brass,terracotta:"#b97d63",forest:at.moss,blush:at.blush,teddy:"#aa8063",slate:"#9b9b9d"}),CS=new Set([at.oak,at.oakLight,at.walnut]),IS=new Set([at.sage,at.moss,at.linen,at.lilac,at.lilacLight,at.blush,at.peach,at.oatmeal,at.upholsteryShadow,at.denim]);function PS(n,t){let e=CS.has(n)?1:IS.has(n)?2:0,i=n===at.glass||n===at.darkGlass||n===at.blueWater,s=n===at.brass,r=n===at.steel||n===at.basinSteel,o=new Xe({color:n,roughness:s||r?.37:i?.33:n===at.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var sf=class{constructor(t,e){this.root=new ie,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,i,s,r,o=0){this.materials.has(e)||this.materials.set(e,PS(e,this.grainDirection));let a=new ce(t,this.materials.get(e));return a.position.set(i,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,i,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new Wl(s,r,o,2,u):new Ae(s,r,o);return this.part(f,a,t,e+r/2,i,l)}disc(t,e,i,s,r,o,a,c=1){let l=new Ve(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,i)}oval(t,e,i,s,r,o,a){let c=new Re(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,i)}ring(t,e,i,s,r,o,a){let c=new Ln(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,i)}basin(t,e,i,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Dt(l,u)),c=new Ko(a,24);return c.scale(s,r,o),this.part(c,at.ceramic,t,e,i)}finish(t){let e=new Map;for(let i of[...this.root.children]){let s=i.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),i.updateMatrix(),r.applyMatrix4(i.matrix),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(r),this.root.remove(i)}for(let[i,s]of e){let r=s.length===1?s[0]:Xn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ce(r,i);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ji(n,t,e,i,s,r,o=at.walnut){let a=Math.min(4.5,i*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])n.disc(t+i*c,0,e+s*l,a,r,a,o,.68)}function Ma(n,t,e,i,s,r,o,a){let c=o===at.linen?at.binding:at.blush;n.box(t,e,i,s,8,r,c,3.2,a),n.box(t,e+2.1,i,s-2.6,7.4,r-2.6,o,3.2,a)}function LS(n,t,e,i,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?at.upholsteryShadow:at.moss,u=a?at.oatmeal:at.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,m=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(Ji(n,d,m,f,h,5),n.box(d,5,m,f*.97,22,h*.98,l,8),r){let v=o?t*.52:t*.34,M=o?e*.38:e*.46,R=o?t*.22:-t*.32,S=o?c*e*.3:e*.25;Ji(n,R,S,v,M,5),n.box(R,5,S,v,22,M,l,8),n.box(R,25,S,v*.96,12,M*.9,i,5),o&&n.box(R,29,c*e*.464,v,26,y,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let v=e*.88/p;for(let M=0;M<p;M++){let R=-e*.44+v*(M+.5);n.box(d+y*.18,25,R,f*.76,12,v-3,i,5),n.box(d-f*.39,27,R,f*.22,31,v-1,u,8)}n.box(d,29,-c*e*.445,f*.88,20,y,u,6),Ma(n,d+f*.13,35,-e*.31,f*.42,v*.49,a?at.sage:at.peach,-.18),Ma(n,d+f*.12,35,e*.28,f*.4,v*.45,at.linen,.2)}else{let v=t*.8/p;for(let M=0;M<p;M++){let R=-t*.4+v*(M+.5);n.box(R,25,m+h*.08,v-3,12,h*.7,i,6),n.box(R,27,m-h*.39,v-1,31,h*.24,u,7)}for(let M of[-t*.442,t*.442])n.box(M,26,m,y,22,h*.89,u,6);Ma(n,-t*.27,35,m-h*.15,t*.18,h*.34,at.peach,-.18),Ma(n,t*.27,35,m-h*.12,t*.17,h*.33,at.linen,.2)}let g=o?f*.67:f*.19,x=o?e*.14:h*.58,_=o?d+f*.06:f*.32,b=o?e*.13:m+h*.1;n.box(_,37.1,b,g,1.7,x,at.lilacLight,.65);for(let v of[-1,1])n.box(_,38.82,b+v*x*.36,g*.9,.25,1.2,at.lilac);return 58}function vi(n,t,e,i,s,r,o,a=!1){let c=a?19:28;Ji(n,t,e,i,s,c,at.walnut),n.box(t,c,e,i*.9,7,s*.92,at.walnut,2),n.box(t,c+5,e,i*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?i:s)*.39,f=e-Math.cos(r)*s*.39;n.box(u,c+9,f,l?s*.2:i*.84,22,l?s*.82:s*.22,o,4)}function NS(n,t,e,i){let s=-e*.39;Ji(n,0,0,t,e,20,at.walnut),n.box(0,20,0,t*.9,6,e*.92,at.walnut,2),n.box(0,24,0,t*.83,6,e*.83,i,2.5);for(let r of[-1,1])n.box(t*.34*r,23,s,t*.075,18,e*.12,at.walnut,1.1);return n.box(0,37,s,t*.84,22,e*.22,i,4),59}function Xl(n,t,e,i,s){return s==="round"?(n.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),at.walnut),n.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),at.walnut,1.5),n.disc(0,33,0,t/2,8,e/2,i,.96),41):s==="classic"?(Ji(n,0,0,t*(.69/.79),e*(.49/.57),35),n.box(0,32,0,t*(.72/.79),6,e*(.5/.57),at.walnut,3),n.box(0,37,0,t,8,e,i,4),n.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),at.linen,.6),46.4):(Ji(n,0,0,t*(.69/.79),e*(.47/.56),34),n.box(0,33,0,t,8,e,i,3),n.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),at.linen,.5),42.3)}function DS(n,t,e,i,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return vi(n,0,-e*.39,t*.2,e*.23,0,at.denim),vi(n,0,e*.39,t*.2,e*.23,Math.PI,at.denim),vi(n,-t*.415,0,t*.17,e*.27,Math.PI/2,at.denim),vi(n,t*.415,0,t*.17,e*.27,-Math.PI/2,at.denim),Xl(n,t*.79,e*.57,at.oak,"classic");if(r)vi(n,0,-e*.37,t*.2,e*.2,0,at.sage),vi(n,0,e*.37,t*.2,e*.2,Math.PI,at.blush),vi(n,-t*.38,0,t*.2,e*.2,Math.PI/2,at.lilac),vi(n,t*.38,0,t*.2,e*.2,-Math.PI/2,at.honey),Xl(n,t*.58,e*.58,i,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[at.sage,at.blush,at.lilac,at.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])vi(n,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Xl(n,t*.79,e*.56,i,"styled")}return 42}function FS(n,t,e,i,s,r){n.box(t,e,i,s*.31,2,r*.5,at.ink,.5),n.box(t,e+1,i,s*.1,14,4,at.ink,1),n.box(t,e+12,i,s,25,6,at.ink,2),n.box(t,e+14,i+3.1,s*.91,21,1,at.glass,.4),n.box(t-s*.25,e+28,i+3.7,s*.28,2,.5,at.blue,.2)}function US(n,t,e,i,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;n.box(0,37,o,t,7,r,i,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&n.box(l,37,f+.8,a,7,u-1.6,i,2.4),n.box(l,4,f,a*.81,34,u*.81,at.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;n.box(l,d,f+u*.41,a*.74,8.4,2,at.oak,.7),n.box(l,d+3,f+u*.43,a*.26,2,2,at.brass,.5)}}return FS(n,-t*.02,44,o-r*.22,t*.28,r*.43),n.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,at.linen,.6),n.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,at.peach),81}function Em(n,t,e,i,s,r){let o=new ln;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Pi(o);a.rotateX(-Math.PI/2),n.part(a,r,t,e,i)}function kS(n,t,e,i,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ji(n,0,0,t,e,6,at.walnut);let c=r?[6,55]:[6];for(let u of c){n.box(0,u,0,t*.97,15,e*.98,at.walnut,5),n.box(0,u+12,0,t*.9,11,e*.92,at.linen,4),n.box(0,u+21.6,e*.15,t*.89,5,e*.62,at.lilac,2.5),n.box(0,u+23.7,e*.15,t*.877,7,e*.605,i,3.4),n.box(0,u+28,-e*.11,t*.88,3,e*.071,at.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Ma(n,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,at.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,m,y,p]of[[-.24,.12,1,at.cream],[.23,.27,.79,at.honey],[.08,.04,.57,at.cream],[-.1,.34,.62,at.honey]])Em(n,t*d,u+30.8,e*m,h*y,p);for(let d of[-.32,-.17,0,.17,.32])n.box(t*d,u+30.71,e*.24,.85,.24,e*.33,at.lilacLight,0);for(let d of[.09,.195,.3,.405])n.box(0,u+30.72,e*d,t*.71,.24,.9,at.lilacLight,0)}let l=r||a?93:52;if(n.box(0,4,-e*.46,t*.95,l-4,e*.083,at.walnut,6),n.box(0,18,-e*.417,t*.89,l-23,e*.055,i,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])n.box(t*.45*u,4,e*.46*f,5,l,6,at.walnut,2);if(n.box(t*.45*u,l-9,0,5,5,e*.89,i,1.5),o||r)for(let f=-3;f<=3;f++)n.box(t*.45*u,l-29,e*f*.105,3,20,3,i,.8)}return l}function OS(n,t,e,i,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ji(n,0,0,t,e,5),n.box(0,5,0,t*.96,a-6,e*.9,at.walnut,3),n.box(0,a-2,0,t,4,e,i,1.7),n.box(0,a-3.7,0,t*.985,1.5,e*.967,at.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,m=h*(f-(l-1)/2),y=5+u*d;n.box(m,y,e*.46,h-2,d-1.5,2.9,i,1),n.oval(m,y+d*.45,e*.51,2.2,1.7,2.2,at.brass)}return a+2}function BS(n,t,e,i){if(i==="office-round")return n.disc(0,1,0,t*.5,2.2,e*.5,at.moss),n.disc(0,3.2,0,t*.46,.7,e*.46,at.sage),n.ring(0,3.9,0,t*.4,e*.4,.6,at.linen),4;let s=i==="bedroom-floral";n.box(0,1,0,t,2.4,e,s?at.lilac:at.blush,1),n.box(0,3.5,0,t*.91,.8,e*.91,at.linen),n.box(0,4.3,0,t*.86,.5,e*.86,s?at.lilacLight:at.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)n.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,at.linen);for(let r of[-1,1])n.box(r*t*.398,4.84,0,.6,.32,e*.797,at.linen),n.box(0,4.84,r*e*.398,t*.797,.32,.6,at.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Em(n,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,at.cream);return 5}function zS(n,t,e,i){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])n.box(h*(t+s)/4,i-5,0,l,5,e,at.linen);n.box(0,i-5,(a-e/2)/2,s,5,a+e/2,at.linen),n.box(0,i-5,(c+e/2)/2,s,5,e/2-c,at.linen);let u=Math.min(2.6,s*.1);n.box(0,i-4.88,o,s,.72,r,at.basinSteel);for(let h of[-1,1])n.box(h*s/2,i-4.5,o,u,5.25,r+u,at.steel,.4),n.box(0,i-4.5,o+h*r/2,s,5.25,u,at.steel,.4),n.disc(0,i-4.1,o+h*r/4,u,.6,u,at.darkGlass);n.box(0,i-4.5,o,s,4.85,u,at.steel,.4);let f=-s/2-u*1.15;n.disc(f,i,o,u*.8,u*2.9,u*.8,at.steel),n.box(f+u,i+u*2.5,o,u*2.8,u*.7,u,at.steel,.6)}function HS(n,t,e,i,s=!1){let r=i==="doubleVanity"?32:35,o=i==="kitchenWorktop",a=i==="doubleVanity";n.box(0,1,0,t*.91,r-4,e*.93,a?at.sage:at.walnut,2.3),s?zS(n,t,e,r+2):n.box(0,r-3,0,t,5,e,at.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,m=c?e*.3*u:e*.47*l;n.box(d,6,m,f,r*.67,h,a?at.moss:at.oak,.8),n.box(d,r*.63,m,c?3.2:t*.08,2.6,c?e*.05:3.2,at.honey,.7)}if(o){n.box(0,r+2,0,t*.84,2.5,e*.72,at.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);n.ring(t*l,r+4.8,e*u,f,f,1,at.glass)}}if(a)for(let l of[-t*.24,t*.24])n.basin(l,r+1.9,0,t*.16,5.5,e*.36),n.oval(l,r+3.48,0,2.1,.52,2.1,at.brass),n.disc(l,r+2,-e*.32,2.6,8,2.6,at.brass),n.box(l,r+8.4,-e*.22,4,3,e*.2,at.brass,1);return r+3}function GS(n,t,e,i){if(i==="tub"){n.box(0,0,0,t*.95,19,e*.95,at.ceramic,6),n.box(0,18,0,t*.85,3,e*.86,at.blueWater,1.3);for(let s of[-1,1])n.box(s*t*.44,17,0,t*.11,7,e*.94,at.cream,2.6),n.box(0,17,s*e*.43,t*.82,7,e*.12,at.cream,2.6);return n.disc(0,21,-e*.31,2.4,.9,2.4,at.glass),n.disc(0,22,-e*.44,3.5,9,3.5,at.brass),n.box(0,30,-e*.4,5,3.7,e*.1,at.brass,1.3),n.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,at.aqua,.08),34}return i==="toilet"?(n.disc(0,0,e*.12,t*.28,11,e*.29,at.ceramic,.65),n.disc(0,10,e*.12,t*.43,5,e*.34,at.cream,.81),n.disc(0,15,e*.12,t*.34,1,e*.27,at.linen),n.box(0,4,-e*.32,t*.92,22,e*.31,at.ceramic,4.2),n.box(0,25,-e*.32,t*.93,3,e*.32,at.cream,1.3),n.disc(t*.25,28,-e*.32,2.1,1.1,2.1,at.honey),29):(n.box(-t*.15,0,-e*.14,t*.65,24,e*.58,at.sage,3.8),n.box(-t*.15,23,-e*.14,t*.76,4,e*.68,at.cream,1.6),n.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),n.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,at.brass),n.disc(-t*.15,27,-e*.34,2.5,8,2.5,at.brass),n.box(-t*.15,33,-e*.31,4.7,3,e*.1,at.brass,1.1),n.box(t*.34,2,e*.12,t*.22,17,e*.73,at.walnut,2.1),n.box(t*.34,19,e*.18,t*.24,4.7,e*.34,at.blush,1.7),36)}function VS(n,t,e,i,s){let r=i?at.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);n.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),n.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])n.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(i?.19:.1),e*.093,r),n.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,at.ink),n.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),n.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,at.blush);return n.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,at.ink),s&&n.box(0,8,e*.17,t*.57,9,e*.49,at.linen,3.8),c+o*(i?.37:.28)}function WS(n,t,e,{form:i,palette:s}){let r=Math.min(t,e),o=i==="bin",a=r*(o?.31:.35);if(o||i==="basket"){if(o)n.box(0,0,0,t*.81,a,e*.81,s.base,r*.07),n.box(0,a-.8,0,t*.83,2.5,e*.83,s.accent,r*.075),n.box(0,a+1.2,0,t*.74,1,e*.73,s.dark,r*.06),n.box(0,a*.63,e*.409,t*.26,a*.2,1.1,s.detail,1.2);else{n.disc(0,0,0,t*.43,a,e*.42,s.base,.79),n.disc(0,a-.35,0,t*.393,.8,e*.38,s.dark);for(let y=0;y<=5;y++)n.ring(0,a*(.13+y*.16),0,t*(.35+y*.016),e*(.34+y*.016),.74,y%2?s.accent:s.base)}for(let y=0;y<3;y++){let p=(y-1)*t*.22,g=[at.sage,at.honey,at.lilac][y];n.box(p,a+.95,(y%2-.5)*e*.16,t*.16,r*(.13+.03*y),e*.21,g,2,y*.27)}return a+r*.22}let c=i==="cubby"||i==="lowShelf",l=Math.max(13,Math.min(54,r*(c?.49:.72))),u=Math.max(2,e*.75),f=s.base;if(i==="floating"){n.box(0,l,0,t*.94,3.4,u,f,1.2);for(let y of[-1,1])n.box(y*t*.3,l-7,-u*.38,4,7,u*.2,s.dark,.8);return l+4}let h=c?2:3,d=c?3:2,m=l/(h-1);for(let y of[-1,1])n.box(t*.45*y,0,0,t*.065,l+3.3,u,f,1);n.box(0,0,-u*.44,t*.88,l,e*.08,s.dark,.65);for(let y=0;y<h;y++)if(n.box(0,y*m,0,t*.94,3.1,u,f,1),y!==h-1)for(let p=0;p<d;p++){let g=t*((p+.5)/d-.5)*.84;if(c)n.box(g,y*m+3.2,e*.05,t*.205,m*.45,e*.52,[at.sage,at.blush,at.linen][p],1.7);else for(let x=0;x<4;x++)n.box(g+t*(.047*x-.07),y*m+3.15,e*.11,t*.038,m*(.41+x%3*.085),e*.31,[at.lilac,at.sage,at.honey,at.blush][x],.65)}return l+3.2}function XS(n,t,e,i){let s=Math.min(t,e),r=s*(i?.33:.25);n.disc(0,0,0,r,r*.85,r,at.peach,.72),n.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,at.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(i?.55:.44)+o%2*s*.08,f=n.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,at.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=i?at.sage:[at.blush,at.linen,at.honey][o%3];n.oval(c,u,l,s*.13,s*(i?.18:.085),s*.11,h)}return s*(i?.82:.65)}function Tm(n,t={}){let{type:e,w:i,h:s}=n||{};if(typeof e!="string"||!Number.isFinite(i)||!Number.isFinite(s)||i<1||s<1)return null;if(e.startsWith("pets-"))return pm(e,i,s);let r=RS[e.split("-").at(-1)],o=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e]??{type:e},a=new sf(i,s),c=wm(a,i,s,o,t);if(c===void 0&&!["plush","photoBunnyPlush"].includes(o.form)&&(c=bm(a,i,s,o)),c!==void 0)return a.finish(c);if(e==="sofa"||/(?:sofa|loveseat|chaise)-/.test(e))c=LS(a,i,s,r||(e==="sofa"?at.linen:at.sage),e);else{if(e==="tv")return a.box(0,2,0,i*.94,23,s*.98,at.walnut,3.5),a.box(0,24,0,i,4,s,at.oakLight,1.5),a.box(0,28,0,i*.4,6,s*.32,at.ink,1.4),a.box(0,33,0,i*.29,52,s*.89,at.ink,2.5),a.box(-i*.155,36,0,1.6,46,s*.84,at.darkGlass,.6),a.oval(-i*.173,35,s*.34,1.2,1.2,1.2,at.honey),gm(a.finish(85),i,s);if(e==="table"||e.includes("dining-set"))c=DS(a,i,s,r||at.oakLight,e);else if(e==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(e)){let l=e==="diningTable"?"classic":e.includes("round-dining")?"round":"styled";c=Xl(a,i,s,r||(l==="classic"?at.oak:at.oakLight),l)}else if(e==="diningChair"||e.startsWith("living-dining-chair-"))c=NS(a,i,s,r||at.denim);else if(e==="desk"||e.includes("-desk-"))c=US(a,i,s,r||at.oakLight,e==="desk"||e.includes("corner-desk"));else if(e==="chair"||e==="stool"||e.includes("desk-chair"))vi(a,0,0,i,s,0,r||at.lilac,e==="stool"),c=e==="stool"?50:60;else if(e==="armchair"||e.includes("acorn-armchair")){vi(a,0,0,i,s,0,r||at.lilac,!0);for(let l of[-1,1])a.box(l*i*.37,16,0,i*.19,25,s*.83,at.lilac,6.5);c=51}else if(e==="bed"||/(?:bed|crib)-/.test(e))c=kS(a,i,s,r||at.lilac,e);else if(e==="rug")c=BS(a,i,s,n.rugStyle);else if(e==="counter"||e==="kitchenWorktop"||e==="doubleVanity")c=HS(a,i,s,e,e==="counter"&&n.id==="i7");else if(e==="tub"||e==="toilet"||e==="bathFixtures")c=GS(a,i,s,e);else if(e==="plant"||e==="floorPlant")c=XS(a,i,s,e!=="plant");else if(e==="wallUnit")a.box(0,48,0,i,17,s*.62,at.linen,4),a.box(0,51,s*.32,i*.89,4,1.8,at.ink,.6),a.box(-i*.34,56,s*.32,i*.11,2.1,2.1,at.blue,.7),c=65;else if(["storage","shelf"].includes(o.artFamily)||o.form==="lowShelf")c=WS(a,i,s,o);else if(/dresser|nightstand|bookcase|storageCabinet/.test(e))c=OS(a,i,s,r||at.oakLight,e);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(e)){let l=e==="bedroomBench"?26:30;Ji(a,0,0,i,s,l-4),a.box(0,l-5,0,i,8,s,r||at.oakLight,3.4),e==="bedroomBench"&&a.box(0,l+2,0,i*.87,6.2,s*.91,at.lilacLight,2.6),c=l+8}else if(e.includes("bunny-plush")||e.includes("plush-bear")||e.includes("bear-floor-chair"))c=VS(a,i,s,e.includes("bunny"),e.includes("floor-chair"));else return null}return a.finish(c)}var ee={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},wa=Math.PI,rf=2*wa,qS=new Set(["unknown","unavailable"]),ci=(n,t,e)=>Math.max(t,Math.min(e,n)),Sa=(n,t)=>Number.isFinite(n)?ci(n,12,480):t,Cm=.96,Im=.09;function Pm(n,t,e){let i=Sa(n.w,42),s=Sa(n.h,42);return Math.abs(t)<=i/2&&Math.abs(e-s*Im)<=s*Cm/2}var me=(n,t={})=>new Xe({color:n,roughness:.83,...t}),of=n=>String(n?.state??"unknown"),Ks=n=>!qS.has(of(n)),Kr=n=>Ks(n)&&(n.active===!0||n.state==="on"),YS=n=>Kr(n)?Number.isFinite(n.attributes?.brightness)?ci(n.attributes.brightness/255,0,1):1:0,ql=n=>(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[n];function Mi(n,t,e,i=0,s=0,r=0){let o=new ce(t,e);return o.position.set(i,s,r),n.add(o),o}function en(n,t,e,i,s,r=0,o=0,a=0){return Mi(n,new Ae(t,e,i),s,r,o,a)}function vn(n,t,e,i,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,i/3),u=l-t/2,f=l-e/2,h=new ln;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new mi(h,{depth:i-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-i/2),Mi(n,d,s,r,o,a)}function Qe(n,t,e,i,s,r=0,o=0,a=0,c=16){return Mi(n,new Ve(t,e,i,c),s,r,o,a)}function _i(n,t,e,i,s,r){return Mi(n,new Re(t,10,7),e,i,s,r)}function jr(n,t=0,e=0,i=0){let s=new ie;return s.position.set(t,e,i),n.add(s),s}function $S(n,t,e=2.8){let i=new We({transparent:!0,depthWrite:!1,blending:Zi,uniforms:{strength:{value:0},tint:{value:new qt(ee.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=Mi(n,new Pn(2*t,2*t),i,0,e,0);return s.rotation.x=-wa/2,s.visible=!1,(r,o)=>{s.visible=r>0,i.uniforms.strength.value=r*.29,i.uniforms.tint.value.copy(o)}}function ZS(n,t,e,i){let s=new ie,r=n.type,o=ql(r),a=String(n.lightForm??o?.lightForm??""),c=r==="pendantLight"||a==="star_pendant",l=r==="ceilingLight"||c||a==="bloom_ceiling",u=r==="floorLamp"||a==="cloud_floor_lamp",f=r==="wallSconce"||a==="acorn_sconce",h=l&&/fan light/i.test(n.name??""),d=Math.min(t,e),m=o?.palette,y=new qt(m?.detail??ee.cream),p=me(m?.base??ee.honey,{roughness:.53}),g=me(m?.dark??ee.ink),x=me(ee.brass,{roughness:.36,metalness:.42}),_=me(y,{emissive:ee.warm,emissiveIntensity:0}),b=new qt(ee.warm),v=h?46:c?50:l?56:f?i.mountY??40:u?56:36,M=!l&&!u&&!f,R=M?ci(d*.68,15,46):ci(d*(l?1.72:1.35),38,110),S=$S(s,R,M?16.8:2.8);if(l){let T=d*(h?.19:.29);if(Qe(s,T,T*1.02,3,g,0,v+2),c&&Qe(s,1.7,1.7,13,p,0,v+9),Qe(s,T*.82,T,5,p,0,v-1.5),Qe(s,T*.92,T*.96,1.15,x,0,v+1.1),a==="star_pendant"||a==="bloom_ceiling"){let P=Mi(s,new jo(T*.96,0),_,0,v,0);P.scale.y=c?1.03:.56}else{let P=_i(s,T*.83,_,0,v,0);P.scale.y=c?.88:.52}}else if(f)vn(s,d*.34,18,4,g,0,v-5,-4),Qe(s,d*.12,d*.11,14,p,0,v-3,3),a==="acorn_sconce"?(Qe(s,d*.15,d*.22,13,_,0,v+4,3,10),Qe(s,d*.22,d*.218,1.2,x,0,v-2.3,3,10)):_i(s,d*.21,_,0,v+3,3);else{let T=v-7,P=u?3:16,N=d*(u?.25:.3);if(Qe(s,N*.57,N*.67,4,g,0,P),Qe(s,2,2.9,T-P,p,0,(P+T)/2),u)_i(s,N*.81,_,0,v,0);else{let B=a==="bud_lamp"?12:9;if(a==="bud_lamp"){let O=new Ve(N*.56,N,14,B*2),F=O.attributes.position;for(let D=0;D<F.count;D++){let z=F.getX(D),W=F.getZ(D);Math.round(Math.atan2(z,W)*B/Math.PI)%2&&F.setXYZ(D,z*.92,F.getY(D),W*.92)}O.computeVertexNormals(),Mi(s,O,_,0,v,0)}else Qe(s,N*.56,N,14,_,0,v,0,B);Qe(s,N,N*.99,1.2,x,0,v-6.7,0,B),Qe(s,N*.55,N*.58,1.1,x,0,v+7.1,0,B)}}return{root:s,anchorY:v+2,animate(T){let P=YS(T),N=T?.attributes?.rgb_color;if(Array.isArray(N)&&N.length===3&&N.every(Number.isFinite)){let[B,O,F]=N.map(D=>ci(D/255,0,1));b.setRGB(B,O,F,$e)}else b.setHex(ee.warm);S(P,b),_.emissiveIntensity=P*.88,_.emissive.copy(b),P>0?_.color.copy(b):_.color.copy(y)}}}function jS(n,t){let e=new ln;e.moveTo(n*.1,-n*.061),t?(e.bezierCurveTo(n*.42,-n*.15,n*.76,-n*.42,n,-.024*n),e.bezierCurveTo(n*.87,n*.25,n*.49,n*.28,n*.1,n*.063)):(e.bezierCurveTo(n*.39,-n*.094,n*.62,-n*.16,n*.88,-n*.14),e.bezierCurveTo(n*1.01,-n*.11,n*1.03,n*.07,n*.88,n*.13),e.bezierCurveTo(n*.62,n*.2,n*.42,n*.13,n*.1,n*.063)),e.closePath();let i=new mi(e,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return i.translate(0,0,-.9),i.rotateX(-wa/2)}function Am(n,t,e,i){let s=new ie,r=Math.min(t,e)*(i?.37:.46),o=i?r+11:59,a=jr(s,0,o,0);i&&(a.rotation.x=wa/2);let c=jr(a,0,-1,0);c.name="Fan blades";let l=ql(n.type),u=l?.form==="palm",f=me(l?.palette.accent??ee.cream),h=me(l?.palette.dark??ee.ink),d=l?.palette.base??(/(?:white|cream)$/.test(n.type)?ee.oat:/(?:forest|sage)$/.test(n.type)?ee.sage:ee.honey),m=me(d),y=u?me(l.palette.accent):null,p=i||/three-blade/.test(n.type)?3:/four-blade/.test(n.type)?4:5;Qe(a,r*.18,r*.2,6,h),Qe(a,r*.174,r*.176,1.4,me(ee.brass,{roughness:.36,metalness:.42}),0,3.4),Qe(a,r*.15,r*.17,2.6,f,0,4.9);let g=jS(r,u);for(let x=0;x<p;x++){let _=jr(c);if(_.rotation.y=x/p*rf,Mi(_,g,m),y){en(_,r*.72,.5,.55,y,r*.52,1.45);for(let b=0;b<4;b++)for(let v of[-1,1]){let M=en(_,r*(.1+.025*b),.46,.48,y,r*(.45+.11*b),1.39,v*r*.043);M.rotation.y=v*.68}}}if(i){vn(s,r*1.66,6,r*1.02,h,0,3),en(s,r*.3,11,6,f,0,10);let x=Mi(s,new Ln(r,2.6,6,24),f,0,o,3);x.rotation.z=.04;for(let _=-1;_<=1;_++){let b=_*r*.5;Qe(s,.68,.68,2*Math.sqrt(r*r-b*b),h,b,o,5,6)}}return{root:s,anchorY:o,...i?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,_=0){let b=Number.isFinite(x?.attributes?.percentage)?ci(x.attributes.percentage/100,.12,1):.64;c.rotation.y=Kr(x)?_*rf*b%rf:0}}}function KS(n,t){let e=new ie,i=t.mountY??39,s=jr(e,0,i),r=ci(n*.72,17,27);vn(s,r,31,5,me(ee.ink),0,0,-.5),vn(s,r-1.9,29,4.4,me(ee.cream),0,.3,1);let o=me(ee.oat,{emissive:ee.warm,emissiveIntensity:0}),a=vn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=me(ee.teal,{emissive:ee.mint,emissiveIntensity:0});return _i(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:i,animate(l,u=0){a.rotation.x=Ks(l)?Kr(l)?-.16:.16:0,o.emissiveIntensity=Kr(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?ee.mint:ee.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function Rm(n,t,e,i=31){let s=new ie,r=36.5,o=Math.max(12,n-6),a=me(ee.oat);if(t){let h=me(ee.glass,{roughness:.32});en(s,o,i,3.2,h,0,r,0);for(let m of[-o/2+1.6,0,o/2-1.6])en(s,3.2,i+2,7.5,a,m,r);let d=r+i/2;en(s,o,1.8,7,h,0,d+.35);for(let m of[-4.25,4.25])en(s,o+2,3.2,1.5,a,0,d,m);en(s,o+3,3.8,11,a,0,r-i/2,1.4),en(s,o,1.35,.5,me(ee.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=me(ee.cream),l=r+i/2-1;vn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>en(s,o-5,i/8-.45,3,c,0,l-d*(i/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h,d,m,y=!1){let p=af(h),g=p===null?y?0:f:1-p;y||(f=g);let x=Number.isFinite(h?.attributes?.current_tilt_position)?ci(h.attributes.current_tilt_position/100,0,1):0;for(let _=0;_<u.length;_++){let b=ci(g*u.length-_,0,1);u[_].visible=b>.02,u[_].scale.y=b,u[_].rotation.x=x*.9}}}}function af(n){return Ks(n)?Number.isFinite(n.attributes?.current_position)?ci(n.attributes.current_position/100,0,1):["open","on"].includes(n.state)?1:["closed","off"].includes(n.state)?0:null:null}function JS(n,t){let e=new ie,i=t*.72,s=n*.74,r=i/2,o=Math.min(48,n*.38),a=Math.min(23,n*.19),c=me(ee.oat),l=me(ee.cream),u=me(ee.plum),f=[me(ee.tile),me(ee.paleTile)],h=me(ee.dark);en(e,n,5,t*Cm,l,0,2.5,t*Im),en(e,n*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let N of[-n*.42,n*.42])en(e,n*.09,o+4,i,c,N,(o+4)/2),vn(e,n*.1,o+4,5,l,N,(o+4)/2,r+1,1.5);let d=new ln;d.moveTo(-n*.49,0),d.lineTo(n*.49,0),d.lineTo(0,a),d.closePath();let m=new mi(d,{depth:i+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});m.translate(0,0,-r-5.5),Mi(e,m,u,0,o+4);let y=n*.49,p=Math.atan2(a,y),g=Math.hypot(a,y),x=(i+11)/8,_=[[],[]];for(let N of[-1,1])for(let B=0;B<8;B++){let O=-r-5.5+(B+.5)*x,F=new Ae(g*.97,2.2,x-.62);F.rotateZ(-N*p),F.translate(N*y*.5,o+5.65+a*.5,O),_[B%2].push(F)}_.forEach((N,B)=>{Mi(e,Xn(N),f[B]),N.forEach(O=>O.dispose())}),vn(e,4,4.5,i+12,u,0,o+a+5.6,0,1.5),en(e,n*.95,3.5,3.5,l,0,o+4,r+5.5),en(e,s,o,1.5,h,0,o/2+4,r-4);for(let N of e.children)N.isMesh&&(N.castShadow=!0);let b=me(ee.mint),v=me(ee.sage),R=(o-3)/6,S=Array.from({length:6},(N,B)=>{let O=jr(e,0,o-(B+.5)*R+2,r+.5);return vn(O,s-2,R-.7,3.4,b,0,0,0,1.2),en(O,s*.91,.68,.7,v,0,R*.23,1.8),B===5&&vn(O,s*.13,2,2.2,l,0,0,2.3,.55),O}),T=me(ee.gold,{emissive:ee.ember,emissiveIntensity:0});_i(e,3.7,T,n*.422,o*.73,r+4.5);let P=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(N,B=0,O,F=!1){let z=af(N)??(F?0:P);F||(P=z),b.color.setHex(Ks(N)?ee.mint:ee.muted),v.color.setHex(Ks(N)?ee.sage:ee.muted);let W=(1-z)*S.length;S.forEach((K,j)=>{let X=ci(W-j,0,1);K.visible=X>.02,K.scale.y=X,K.position.y=o-(j+X/2)*R+2});let tt=["opening","closing"].includes(of(N));T.emissiveIntensity=tt?.55+(.5+.5*Math.cos(B*6)):0}}}function QS(n){let t=new ie,e=46,i=me(ee.cream),s=me(ee.honey),r=Math.min(n*.86,88),o=jr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])en(t,3.4,e,5,i,c,e/2);en(t,r+4,3,5,i,0,e),vn(o,r-2,e-4,4,s,r/2,e/2,0,2),_i(o,2.2,me(ee.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,f=!1){let d=af(c)??(f?0:a);f||(a=d),o.rotation.y=-1.32*d,s.color.setHex(Ks(c)?ee.honey:ee.muted)}}}function tw(n,t,e){let i=new ie,s=n.type!=="wallUnit",r=e.mountY??(s?42:48),o=ci(t*.85,23,126),a=me(ee.dark,{emissive:ee.mint,emissiveIntensity:0});if(vn(i,o,s?25:18,8,me(ee.cream),0,r,0),s){vn(i,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])_i(i,1.35,me(ee.oat),o*c,r-7,4.3)}else en(i,o*.89,2.2,.7,a,0,r-4,4.2);return{root:i,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=Ks(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?ee.warm:ee.glass),a.emissiveIntensity=f?1.15:Kr(c)?.25:0}}}function ew(n,t,e){let i=new ie,s=Math.min(t,e)*.74,r=n.type==="humidifier",o=r?25:30,a=me(ee.cream),c=me(r?ee.glass:ee.sage),l=me(ee.teal,{emissive:ee.mint,emissiveIntensity:0}),u=o-1;if(Qe(i,s*.46,s*.5,4,me(ee.ink),0,2),r){let d=_i(i,s/2,c,0,13,0);d.scale.y=22/s,Qe(i,s*.19,s*.22,3.5,a,0,u)}else{vn(i,s,24,s*.82,c,0,15,0,5),vn(i,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)en(i,s*.66,1.2,1.1,l,0,u+2,d*3.5)}_i(i,1.6,l,s*.18,u-2,s*.31);let f=me(ee.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,m)=>_i(i,2.1+m*.6,f,0,u+3,0));return{root:i,anchorY:u,animate(d,m=0){let y=Kr(d);l.emissiveIntensity=y?1.6:0;for(let p=0;p<h.length;p++){h[p].visible=y;let g=(m*.68+p/h.length)%1;h[p].position.set(Math.sin(g*wa)*3.1,u+4+g*14,0),h[p].scale.setScalar(.7+g*.62)}}}}function nw(n,t,e){let i=new ie,s=ql(n.type),r=s?.form,o=Math.min(t,e)*.42,a=.72;i.scale.setScalar(a);let c=me(ee.sage,{emissive:ee.mint,emissiveIntensity:0}),l=me(s?.palette.dark??ee.ink),u=me(s?.palette.base??ee.cream,{roughness:.46}),f=r==="slim"?1.22:1,h=Qe(i,o,o*.95,r==="slim"?4.8:7,l,0,4.6),d=Qe(i,o*.96,o,r==="slim"?3.6:5.5,u,0,r==="slim"?8.4:10.2);h.scale.x=d.scale.x=f,Qe(i,o*.28,o*.33,4,me(ee.oat),0,14,-o*.23);for(let p of[-.27,.27])_i(i,o*.105,l,o*p,10,o*.88);let m=vn(i,o*.68,1.2,2.5,c,0,13.2,o*.36);if(r==="mop"){let p=me(s.palette.accent);for(let g of[-1,1])Qe(i,o*.39,o*.4,2.1,p,g*o*.45,1.8,o*.51)}let y;if(r==="docked"){y=new ie,y.name="Vacuum charging dock";let p=me(s.palette.accent);vn(y,o*1.36,1.8,o*.95,l,0,1.2,-o*.59,.4),vn(y,o*1.36,o*.53,o*.35,p,0,o*.3,-o*.94,1.4),en(y,o*.5,.9,.9,l,0,o*.41,-o*.75)}return{root:i,dock:y,anchorY:12,floorRadius:o*1.03*a*f,animate(p,g=0,x=!1){let _=["cleaning","returning"].includes(of(p));m.material.emissiveIntensity=_?x?.6+.5*Math.cos(g*6):.3:0}}}function cf(n){return n.type==="controlZone"&&(n.visualKind==="window"||(!n.visualKind||n.visualKind==="auto")&&typeof n.entityId=="string"&&n.entityId.startsWith("cover."))}function Lm(n,t={}){let e=Sa(n.w,42),i=Sa(n.h,42),s=String(n.type??""),r=n.visualKind;return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?KS(e,t):s==="garageDoor"?JS(e,i):s==="door"||r==="door"?QS(e):s==="window"?Rm(e,!0,!!n.entityId):s==="controlZone"?cf(n)?Rm(Sa(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?tw(n,e,t):s==="airPurifier"||s==="humidifier"?ew(n,e,i):r==="vacuum"||/^cleaning-.*robot/.test(s)?nw(n,e,i):s==="windowFan"?Am(n,e,i,!0):r==="fan"||/^fans-/.test(s)?Am(n,e,i,!1):r==="light"||n.lightForm||ql(s)?.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?ZS(n,e,i,t):null}var Om=ho(Zr(),1),{difference:Bm,union:zm}=Om.default,Zl=18,Kn=.001,Di=(n,t)=>n[0]*t[0]+n[1]*t[1],Js=(n,t)=>n[0]*t[1]-n[1]*t[0],Fi=(n,t)=>[n[0]-t[0],n[1]-t[1]],Be=(n,t,e)=>[n[0]+t[0]*e,n[1]+t[1]*e],Kl=([n,t])=>[-t,n],Nm=(n,t,e,i)=>[[n,t],[e,t],[e,i],[n,i]],Yl=n=>n.map(({x:t,y:e})=>[t,e]),Qi=n=>[n.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Hm=n=>n.length?zm(...n):[];function jl(n,t,e,i=0){let s=Fi(t,n),r=Math.hypot(...s);if(r<Kn)return null;let o=s.map(u=>u/r),a=Kl(o),c=Be(n,o,-i),l=Be(t,o,i);return Qi([Be(c,a,e),Be(l,a,e),Be(l,a,-e),Be(c,a,-e)])}function $l(n,t){let[e,i]=t,s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){let[a,c]=n[r],[l,u]=n[o];c>i!=u>i&&e<(l-a)*(i-c)/(u-c)+a&&(s=!s)}return s}function Dm(n){return n.flatMap((t,e)=>{let i=n[(e+1)%n.length],s=Fi(i,t),r=Math.hypot(...s);return r>Kn?[{start:t,end:i,length:r,tangent:s.map(o=>o/r)}]:[]})}function iw(n,t,e,i){if(Math.abs(Di(n.tangent,t.tangent))<.9999)return null;let s=Kl(n.tangent),[r,o]=[t.start,t.end].map(y=>Fi(y,n.start)),a=Di(r,s);if(Math.abs(a)<.1||Math.abs(a)>Zl||Math.abs(a-Di(o,s))>.1)return null;let c=[Di(r,n.tangent),Di(o,n.tangent)].sort((y,p)=>y-p),l=Math.max(0,c[0]),u=Math.min(n.length,c[1]);if(u-l<8)return null;let f=Be(n.start,n.tangent,(l+u)/2),h=Math.sign(a);if(!$l(e,Be(f,s,-h))||!$l(i,Be(f,s,a+h))||$l(e,Be(f,s,a/2))||$l(i,Be(f,s,a/2)))return null;let d=Be(n.start,n.tangent,l),m=Be(n.start,n.tangent,u);return Qi([Be(d,s,-h*.05),Be(m,s,-h*.05),Be(m,s,a+h*.05),Be(d,s,a+h*.05)])}function Gm(n){let t=[],e=[];for(let i of[...n].reverse()){let s=Hm(i.polygons);if(!s.length)continue;let r=t.length?Bm(s,t):s;r.length&&e.push({surface:i.surface,polygons:r}),t=t.length?zm(t,s):s}return{footprint:t,regions:e.reverse()}}function Jr(n){return n.outdoor===!0||n.outdoor!==!1&&n.surface==="patio"}function lf(n,t,e=!1){let i=n.map(h=>({surface:h.surface,points:Yl(h.points),polygons:[Qi(Yl(h.points))],outdoor:e&&Jr(h)})),s=[];for(let[h,d]of i.entries())for(let m of i.slice(h+1))for(let y of Dm(d.points))for(let p of Dm(m.points)){let g=iw(y,p,d.points,m.points);g&&s.push({surface:d.surface,polygons:[g],outdoor:d.outdoor||m.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:m,deckBottom:y,northDeck:p,southDeck:g,recess:x}=t;r.push({surface:"patio",polygons:[Qi(Yl(p)),Qi(Yl(g)),Qi(Nm(h,m,d+1,y))]}),x.x2>x.x1&&x.z2>x.z1&&o.push({surface:"oak",polygons:[Qi(Nm(x.x1,x.z1,x.x2,x.z2))]})}let a=[...s,...i],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=Gm([...l,...c]),f=t||e?Hm(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function sw(n,t,e,i){let s=Js(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-i,o=Be(n,Kl(t),r),a=Be(n,Kl(e),-r),c=Js(Fi(a,o),e)/s,l=Be(o,t,c);return Math.hypot(...Fi(l,n))>i*2.5?Qi([n,o,a]):Qi([n,o,l,a])}function Fm(n,t){let e=Js(n.tangent,t.tangent);if(Math.abs(e)<.13)return null;let i=Fi(t.point,n.point);return[Js(i,t.tangent)/e,Js(i,n.tangent)/e]}function rw(n){let t=n.flatMap(i=>[{wall:i,point:[i.x1,i.y1],tangent:[i.dx,i.dz]},{wall:i,point:[i.x2,i.y2],tangent:[-i.dx,-i.dz]}]),e=[];for(let[i,s]of t.entries()){for(let r of t.slice(i+1)){if(s.wall===r.wall)continue;let o=Fi(r.point,s.point);if(Math.hypot(...o)>Zl)continue;let a=Fm(s,r);a&&a.every(c=>c>=-Zl&&c<=Kn)?e.push({a:s,b:r,center:Be(s.point,s.tangent,a[0])}):!a&&Di(s.tangent,r.tangent)<0&&Di(o,s.tangent)<=Kn&&Di(o,r.tangent)>=-Kn&&e.push({a:s,b:r})}for(let r of n){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Fm(s,o);if(!a)continue;let[c,l]=a;c<-Zl||c>=-Kn||l<=Kn||l>=r.length-Kn||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:Be(s.point,s.tangent,c)})}}return e}function Um({a:n,b:t,center:e},i){return e?[jl(n.point,e,i,.1),t&&jl(t.point,e,i,.1),t&&sw(e,n.tangent,t.tangent,i)].filter(Boolean):[jl(n.point,t.point,i,.1)].filter(Boolean)}function Vm(n){return n.flatMap(t=>t.flatMap(e=>e.slice(1).map((i,s)=>[e[s],i])))}function ow(n,t){return Vm(n).flatMap(([e,i])=>{let s=Fi(i,e),r=Math.hypot(...s);if(r<Kn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Fi(a,e),u=Fi(c,e);if(Math.abs(Js(l,o))>Kn||Math.abs(Js(u,o))>Kn)return[];let[f,h]=[Di(l,o),Di(u,o)].sort((y,p)=>y-p),d=Math.max(0,f),m=Math.min(r,h);return m-d>Kn?[[Be(e,o,d),Be(e,o,m)]]:[]})})}function km(n,t){return t?.length?Bm(n,t):n}function Wm(n,t,e,i){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of n){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],m=(x,_,b,v,M,R,S)=>{_-x>Kn&&r(jl(Be(h,d,x),Be(h,d,_),M/2),b,v,R,S)},y=c.openings.length?i:0,p=(x,_)=>{m(x,_,y,e,t,l,2),m(x,_,e-1,e+2,t+3,u,1)};y&&m(0,c.length,0,y,t,l,2);let g=0;for(let x of c.openings)p(g,x.start),g=Math.max(g,x.end);p(g,c.length),m(0,c.length,0,3,t+3,f,1)}for(let c of rw(n)){let[l,u,f]=c.a.wall.palette;for(let h of Um(c,t/2))r(h,0,e,l,2);for(let h of Um(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:m}of h.sort((y,p)=>y.priority-p.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(m);return{...Gm([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=Vm(l);return c.map(m=>({...m,bottom:u,top:f,faces:{top:km(m.polygons,a[h+1]?.footprint),bottom:u===0?[]:km(m.polygons,a[h-1]?.footprint),sides:ow(m.polygons,d)}}))})}var aw=new Map([["partlycloudy",.32],["cloudy",.84],["windy-variant",.7],["fog",.95],["snowy",.82],["snowy-rainy",.92],["hail",.94],["rainy",.88],["pouring",.97],["lightning",.91],["lightning-rainy",.98]]),cw=(n,t,e)=>Math.min(e,Math.max(t,n)),Xm=n=>n*Math.PI/180;function Qs(n,t,e){let i=cw((n-t)/(e-t),0,1);return i*i*(3-2*i)}function ts(n={}){let{sunElevation:t,sunAzimuth:e,sunRising:i,condition:s,night:r,cloudCoverage:o}=n,a=Number.isFinite(t)&&Math.abs(t)<=90?t:r||s==="clear-night"?-18:38,c=Number.isFinite(e)&&e>=0&&e<=360?e%360:void 0,l=typeof i=="boolean"?i:c!==void 0&&c<180,u=a<19&&a>-12,f=c??(u?l?90:270:150),h=Math.max(aw.get(s)??0,Number.isFinite(o)&&o>=0&&o<=100?o/100:0);return{elevation:a,azimuth:f,rising:l,cloud:h,phase:u?l?"sunrise":"sunset":a<=-12?"night":"day",daylight:Qs(a,-10,18),twilight:Qs(a,-12,-3)*(1-Qs(a,3,19)),lowSun:Qs(a,-1,4)*(1-Qs(a,9,33)),disc:Qs(a,-.9,.8),east:Math.sin(Xm(f)),north:Math.cos(Xm(f))}}function qm(){let n,t,e=0;function i(s){let r=Qs(s-e,0,.8);if(!n||r>=1)return t;let o=(t.azimuth-n.azimuth+540)%360-180;return ts({sunElevation:n.elevation+(t.elevation-n.elevation)*r,sunAzimuth:(n.azimuth+o*r+360)%360,sunRising:t.rising,cloudCoverage:(n.cloud+(t.cloud-n.cloud)*r)*100})}return(s,r,o=!1)=>!t||o||!Number.isFinite(r)||r<e?(n=void 0,t=s,e=Number.isFinite(r)?r:0,t):((s.elevation!==t.elevation||s.azimuth!==t.azimuth||s.rising!==t.rising||s.cloud!==t.cloud)&&(n=i(r),t=s,e=r),i(r))}var lw=3,uw={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},uf=Object.fromEntries(Object.entries(uw).map(([n,t])=>[n,t.map(e=>new qt(e))])),hw={sunrise:["#f6bfc2","#947b96","#ffd29d","#f0c7b7","#767d9c"],sunset:["#f1ad90","#8d647a","#ffaf71","#eab290","#80677f"]},fw=Object.fromEntries(Object.entries(hw).map(([n,t])=>[n,t.map(e=>new qt(e))])),{clamp:dw,lerp:Qr,smoothstep:pw}=re;function Ym(n,t,e){n.toneMapping=oa,n.toneMappingExposure=1.07,n.shadowMap.enabled=!0,n.shadowMap.type=qs,n.shadowMap.autoUpdate=!1;let i=new Xs("#fff4e5","#897e91",1.13),s=new _s("#fff0d4",2.15),r=new _s("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,n.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:lw},()=>new ia("#ffd7a5",0,145,2));t.add(i,s,s.target,r,...d);let m=[],y,p,g,x=!0,_=new qt,b=new qt;function v(){for(let S of t.children)S.isMesh&&(S.receiveShadow=!0,S.geometry.computeBoundingBox(),S.castShadow=S.geometry.boundingBox.max.y+S.position.y>-99)}function M(S,T){let P=/(light|lamp|sconce)/i.test(S.type),N=!T.animate||P;T.root.traverse(B=>{!B.isMesh||B.material.transparent||B.material.isShaderMaterial||(B.receiveShadow=!0,B.castShadow||=N)}),P&&S.entityId&&S.visualKind!=="none"&&m.push({item:S,object:T})}function R(S,T,P,N=!1){let{elevation:B,azimuth:O,rising:F,daylight:D,twilight:z,lowSun:W,cloud:tt}=S.solar??ts(S),K=dw(B,-12,35),j=`${F}:${Math.round(K*4)}:${Math.round(tt*32)}`,X=pw(B,-.85,9);if(j!==y){let xt=[i.color,i.groundColor,s.color,P.color,t.background],Ct=fw[F?"sunrise":"sunset"];for(let[st,ht]of xt.entries()){b.lerpColors(uf.clear[st],uf.overcast[st],tt),ht.lerpColors(uf.night[st],b,D);let Mt=st===2?W*.76:z*(st===4?.55:.43);ht.lerp(Ct[st],Mt*(1-tt*.73))}i.intensity=Qr(.63,1.13+tt*.17,D)+z*.17,s.intensity=.23+X*Qr(1.91,.48,tt)*Qr(.46,1,D),r.intensity=Qr(.17,.23,D)+z*.08,s.shadow.intensity=X*Qr(.83,.21,tt),y=j,g=void 0}let St=Math.round(O/2)*2,Et=Math.max(10,Math.round(B)),gt=`${St}:${Et}`;if(X>0&&gt!==p){let xt=re.degToRad(St),Ct=re.degToRad(Et),st=Math.cos(Ct)*1600;s.position.set(u+Math.sin(xt)*st,Math.sin(Ct)*1600,f-Math.cos(xt)*st),p=gt,x=!0}if(g!==T||N){let xt=m.flatMap(({item:Ct,object:st})=>{let ht=T[Ct.id];if(ht?.state!=="on")return[];let Mt=Number.isFinite(ht.attributes?.brightness)?re.clamp(ht.attributes.brightness/255,0,1):1;return Mt>0?[{object:st,power:Mt,color:ht.attributes?.rgb_color}]:[]}).sort((Ct,st)=>st.power-Ct.power);for(let[Ct,st]of d.entries()){let ht=xt[Ct];if(!ht){st.intensity=0;continue}let{object:Mt,power:Bt,color:kt}=ht;Array.isArray(kt)&&kt.length===3&&kt.every(Number.isFinite)?(_.setRGB(...kt.map(bt=>re.clamp(bt/255,0,1)),$e),st.color.copy(_)):st.color.set("#ffd5a2"),st.position.copy(Mt.root.position),st.position.y+=Math.max(18,(Mt.anchorY-9)*Mt.root.scale.y),st.intensity=Bt*Qr(2350,1250,D)}g=T}(x||N&&X>0)&&(n.shadowMap.needsUpdate=!0,x=!1)}return{markStructure:v,register:M,update:R,dispose:()=>s.shadow.dispose()}}var Si=(n,t,e)=>Object.freeze({label:n,azimuth:t,tilt:e,zoom:1}),Jl=65,mw=88,Ql=4400,gw=1900,$m=-111,to=Object.freeze({default:Si("Default",0,0),top:Si("Top down",0,0),high:Si("High angle",0,15),dollhouse:Si("Dollhouse",2,30),corner:Si("Corner",45,40),north:Si("From north",180,42),east:Si("From east",90,42),south:Si("From south",0,42),west:Si("From west",270,42),waterfront:Si("Waterfront",0,15),free:Si("Free view",0,25)});function Zm(n,t=!1){let e=Object.entries(to).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let i=e.map(([s,r])=>{let o=n.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});n.replaceChildren(...i),n.value="default",n.disabled=!1}function es(n="top"){let t=typeof n=="string"?{preset:n}:n??{},e=Object.hasOwn(to,t.preset)?t.preset:"top",i=to[e],s=Number.isFinite(t.azimuth)?t.azimuth:i.azimuth,r=e==="free"||e==="default"?mw:Jl;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?re.clamp(t.tilt,0,r):i.tilt,zoom:Number.isFinite(t.zoom)?re.clamp(t.zoom,.6,2.5):i.zoom}}function jm(n){let t=es(n);return{...t,preset:"free",tilt:t.tilt||to.free.tilt}}function hf(n){return n?.preset!=="free"||![n.azimuth,n.tilt,n.zoom].every(Number.isFinite)?null:es(n)}function ff(n){return es({...hf(n),preset:"default"})}function Km(n){if(n<=Jl)return null;let t=re.smoothstep(n,Jl,84);return{near:re.lerp(3530,2680,t),far:re.lerp(4260,3690,t)}}function Jm(n,t){let e=Math.max(.4,t/1536*.68),i=re.clamp;return{w:Math.round(i((n?.w||170)*e,58,216)),h:Math.round(i((n?.h||110)*e,44,152))}}function Qm(n){let t=n.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>hf(await t.request("CAMERA_GET")),write:i=>t.request("CAMERA_SET",i)};let e="roomcraft.default-camera.v1";return{async read(){return hf(JSON.parse(n.localStorage.getItem(e)))},async write(i){i?n.localStorage.setItem(e,JSON.stringify(i)):n.localStorage.removeItem(e)}}}function tg(n,t,e,i,s="top",{focus:r,demoZoom:o}={}){let a=es(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,i].every(Number.isFinite)||e<=0||i<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=re.degToRad(a.azimuth),l=re.degToRad(a.tilt),u=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),f=new G(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));n.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),n.position.copy(u).addScaledVector(f,gw),n.lookAt(u),n.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Ue,m=new G;for(let M of[t.minX-37,t.maxX+37]){for(let R of[t.minZ-53,t.maxZ+36])for(let S of[$m,h])d.expandByPoint(m.set(M,S,R).applyMatrix4(n.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(m.set(M,-106,t.sceneryMinZ-8).applyMatrix4(n.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let M=(d.max.y-d.min.y)*.025;d.min.y-=M,d.max.y+=M}let y=e/i,p=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*y),g=p/y,x=(d.min.x+d.max.x)/2,_=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:M,y:R}=m.set(r.x,r.y,r.z).applyMatrix4(n.matrixWorldInverse),S=Number.isFinite(r.weight)?re.clamp(r.weight,0,1):1;x=re.lerp(x,M,S),_=re.lerp(_,R,S)}n.left=x-p,n.right=x+p,n.bottom=_-g,n.top=_+g,n.zoom=Number.isFinite(o)?re.clamp(o,.6,4.5):a.zoom;let b=n.position.y+(_-g/n.zoom)*n.up.y,v=a.tilt>Jl?Math.max(0,($m+24-b)/f.y):0;return v>0&&(n.position.addScaledVector(f,v),n.updateMatrixWorld(!0)),n.far=Ql+v,n.updateProjectionMatrix(),a}function eg(n,t){let e=n.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(n)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Ue().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var yw=n=>Math.max(0,Math.min(1,n)),df=(n,t)=>n?.x===t?.x&&n?.y===t?.y;function Ea({allowsPoint:n,allowsRoute:t,duration:e=.32,maximumDistance:i=125}){let s,r,o=0,a=0,c=0,l=0,u=0,f,h,d;function m(x,_){s=r=x,o=_,a=0}function y(x,_=!1){if(l=x,!s||x<c)return null;_&&(a=0);let b=a>0?yw((x-o)/a):1,v=r.x+(s.x-r.x)*b,M=r.y+(s.y-r.y)*b;return n(v,M)?{x:v,y:M,progress:b,heading:u,current:df(f,s),walking:!_&&b<1&&Math.hypot(s.x-r.x,s.y-r.y)>2}:(m(s,x),c=x+.24,null)}function p(x,_,{observation:b,reduceMotion:v=!1}={}){if(!Number.isFinite(x?.x)||!Number.isFinite(x?.y)||!n(x.x,x.y))return!1;if(df(x,f)&&b===h)return!0;if(f=x,h=b,!s)return m(x,_),!0;let M=y(_,v)??s,R=Math.hypot(x.x-M.x,x.y-M.y);return df(x,s)?d=null:R<=i&&t(M.x,M.y,x.x,x.y)?(d=null,r=M,s=x,o=_,a=v?0:e,R>1&&(u=Math.atan2(x.x-r.x,x.y-r.y))):d&&Math.hypot(x.x-d.x,x.y-d.y)<=48&&t(d.x,d.y,x.x,x.y)?(m(x,_),c=_+.24,d=null):d=x,!0}function g(){s=r=f=d=void 0,h=void 0,c=u=0}return{observe:p,sample:y,clear:g,get hasPosition(){return!!s},get pendingReacquisition(){return!!s&&c>l}}}var xw=/(?:sofa|loveseat|chaise)-/,bw=/-desk-/;function Cs(n,t,e,i,s,r,o){return{x:n,z:t,surface:e,yaw:i,width:s,depth:r,pose:o}}function vw(n,t,e){let i=n==="sofa"||n.includes("cloud-sofa"),s=i&&e>t,r=n.includes("loveseat")||n.includes("chaise")?2:3,o=[];if(s){let a=e*.88/r,c=t*.38;for(let u=0;u<r;u++){let f=-.44*e+a*(u+.5);o.push(Cs(-.25*t+.018*Math.min(t,e),f,37,Math.PI/2,a-3,c,"lounge"))}let l=n==="sofa"?1:-1;o.push(Cs(.22*t,l*.3*e,37,l>0?Math.PI:0,.48*t,.34*e,"lounge"))}else{let a=i?.57*e:e,c=i?-.215*e:0,l=.8*t/r;for(let u=0;u<r;u++)o.push(Cs(-.4*t+l*(u+.5),c+a*.08,37,0,l-3,a*.7,"lounge"));i&&o.push(Cs(-.32*t,.25*e,37,0,.33*t,.42*e,"lounge"))}return o}function _w(n,t){let{x:e,z:i,angle:s}=n,r=-Math.sin(s),o=Math.cos(s);return t.some(({x:a,z:c,item:l})=>{let u=a-e,f=c-i,h=Math.min(104,Math.max(50,Math.min(l.w,l.h)*.58));return Math.hypot(u,f)<=h&&u*r+f*o>=-8})}function Mw(n,t){let{type:e,w:i,h:s}=n.item;if(e==="sofa"||xw.test(e))return vw(e,i,s);if(e==="diningChair"||e.startsWith("living-dining-chair-"))return[Cs(0,0,30,0,i*.83,s*.83,"dining")];if(e==="chair"||e==="stool"||e.includes("desk-chair")){let r=e.includes("desk-chair")||_w(n,t)?"desk":"idle";return[Cs(0,0,e==="stool"?32:41,0,i*.83,s*.83,r)]}if(e==="armchair"||e.includes("acorn-armchair"))return[Cs(0,0,32,0,i*.65,s*.76,"lounge")];if(e==="bedroomBench"){let r=i>=58?2:1;return Array.from({length:r},(o,a)=>Cs((a-(r-1)/2)*i*.44,0,34.2,0,i*.87/r,s*.91,"bench"))}return[]}function ng(n,t,e){let i=n.filter(({item:r})=>r.type==="desk"||bw.test(r.type)),s=[];for(let r of n){let{item:o,x:a,z:c,baseY:l,angle:u}=r,f=t.get(o.id)?.root;if(!f||l!==0)continue;let h=Math.sin(u),d=Math.cos(u);for(let[m,y]of Mw(r,i).entries()){if(y.width<12||y.depth<11)continue;let p=a+y.x*d-y.z*h,g=c+y.x*h+y.z*d;if(e(p,g)<7)continue;let _=y.yaw-u,b=f.position.y+y.surface*f.scale.y;b<10||b>84||s.push({id:`${o.id}:${m}`,itemId:o.id,x:p,z:g,y:b,heading:_,forwardX:Math.sin(_),forwardZ:Math.cos(_),pose:y.pose,reach:Math.min(42,Math.max(18,y.depth*.48+8)),behind:Math.max(7,y.depth*.32),width:y.width,depth:y.depth})}}return s}function ig(n,t,e,i,s=1){let r=t-n.x,o=e-n.z;return Math.hypot(r,o)>n.reach*s||r*n.forwardX+o*n.forwardZ<-n.behind?!1:!i||i(t,e,n.x,n.z)}function sg(){let n,t,e,i;function s(o,a){let c=o.expiresAt;!Number.isFinite(c)||c<=e||((!n||c-e>3100||Math.hypot(o.x-n.x,o.y-n.y)>10)&&(n=o,t=c),e=c,i=a)}function r(o,a,c){return!!(n&&e-t>=1200&&c-i<=3100/1e3&&Math.hypot(o-n.x,a-n.y)<=10)}return{observe:s,ready:r}}var Sw=24,pf=17.5,ww=.42,Ew=8.9,eu=20,Ta=[{role:"papa",scale:[1.26,1.25,1.22],radius:eu,sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],radius:18,sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],radius:16,sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}],Tw={idle:{lean:.03,tilt:0,thighs:-1.3,shins:1.16,hands:[-.43,-.4],fidget:.1,pace:2.1},lounge:{lean:-.13,tilt:.07,thighs:-1.16,shins:.92,hands:[-.22,-.14],fidget:.13,pace:1.8},dining:{lean:.06,tilt:.02,thighs:-1.34,shins:1.26,hands:[-.61,-.51],fidget:.14,pace:2.8},desk:{lean:.16,tilt:0,thighs:-1.26,shins:1.18,hands:[-.98,-.92],fidget:.12,pace:6.3},bench:{lean:.04,tilt:-.09,thighs:-1.28,shins:1.1,hands:[-.35,-.56],fidget:.22,pace:3.3}},tu=(n,t,e)=>n+(t-n)*e,Aw=n=>Math.min(1,Math.max(0,n)),Rw=(n,t)=>Math.atan2(Math.sin(n-t),Math.cos(n-t));function Aa(n,t=.12){return new Xe({color:n,roughness:.78,emissive:n,emissiveIntensity:t})}function Cw(n,t,e,i=0,s=0){let r=!e&&t%4.8<.13;n.head.rotation.x=-.62+i+(e?0:Math.sin(t*1.5)*.047),n.head.rotation.y=s,n.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let o of n.eyes)o.scale.y=r?.15:.87}function mf(n,t=()=>0,{supportsRoute:e,floorClearance:i,allowsBodyPoint:s,allowsBodyRoute:r,seats:o=[],occlusionScene:a}={}){let c=new ie;c.name="tracked-people",n.add(c);let l=new ie;a?.add(l);let u,f=new Map,h=Ta.map(()=>[]),d=!1,m=!1,y=0,p=!1;function g(){let O=new ln;O.absarc(0,4,3.5,0,2*Math.PI,!1);let F=new ln;return F.moveTo(-6.5,-6.5),F.quadraticCurveTo(-7,-.2,0,-.2),F.quadraticCurveTo(7,-.2,6.5,-6.5),F.closePath(),{sphere:new Re(1,12,8),disc:new In(1,24).rotateX(-Math.PI/2),groundRing:new Jo(13.8,pf,32).rotateX(-Math.PI/2),glasses:new Ln(1,.14,6,16),occlusionGlyph:new Pi([O,F],12),occlusionMaterial:new we({color:"#fff1cd",depthFunc:Er,depthWrite:!1,transparent:!0,opacity:.9,toneMapped:!1}),palette:Ta.map(({sweater:D,trim:z,skin:W,hair:tt})=>Object.fromEntries(Object.entries({sweater:D,trim:z,skin:W,hair:tt}).map(([K,j])=>[K,Aa(j)]))),ink:Aa("#423c50",.09),cheek:Aa("#d78383"),shoes:Aa("#514656"),white:Aa("#fff1dc"),shadow:new we({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new we({color:"#fff1cd",depthTest:!1,depthWrite:!1,toneMapped:!1}),retainedMark:new we({color:"#eeb660",depthTest:!0,depthWrite:!1,toneMapped:!1})}}function x(O){u??=g();let{role:F,scale:D,radius:z}=Ta[O],{sweater:W,trim:tt,skin:K,hair:j}=u.palette[O],X=F==="baby",St=new ie;St.name=`radar-avatar-${F}`;let Et=new ie;Et.name="radar-avatar-pose";let gt=new ie,xt=new ie,Ct=[],st=[],ht=[];c.add(St),St.add(Et),Et.add(gt),gt.scale.set(...D);let Mt=(Z,J,nt,ct,pt,It,Lt,Ft)=>{let zt=new ce(u.sphere,J);return zt.position.set(nt,ct,pt),zt.scale.set(It,Lt,Ft),Z.add(zt),zt},Bt=new ce(u.disc,u.shadow);Bt.position.y=.13,Bt.scale.set(19,1,19),St.add(Bt);let kt=new ce(u.groundRing,u.groundMark);kt.name="radar-track-mark",kt.renderOrder=-1,c.add(kt);let q=a?new ce(u.occlusionGlyph,u.occlusionMaterial):null;q&&(q.name="radar-occlusion-cue",q.visible=!1,l.add(q)),Mt(gt,W,0,15,0,X?8.2:7.1,8.3,5.4),X?(Mt(gt,tt,0,17.5,4.8,4.9,4.1,1.15),Mt(gt,u.white,0,17.4,5.9,1.5,1.5,.35)):(Mt(gt,tt,0,20.7,2.4,5.8,2.2,4),Mt(gt,tt,F==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let Z of[-1,1]){let J=new ie;J.position.set(Z*3.4,10.3,.1),gt.add(J);let nt=new ie;nt.position.y=-4.65,J.add(nt);let ct=X?W:u.ink;Mt(J,ct,0,-2.35,0,2.65,3.25,2.6),Mt(nt,ct,0,-1.6,0,2.4,3.1,2.4),Mt(nt,X?tt:u.shoes,0,-3.5,1.25,3.1,2.1,4),Mt(nt,u.white,0,-4.15,3.25,2.75,1.1,2),ht.push({thigh:J,shin:nt});let pt=new ie;pt.position.set(Z*6.25,19.1,0),gt.add(pt),Mt(pt,W,Z*.9,-3.7,.15,2.75,5.3,2.7),Mt(pt,K,Z*1.3,-7.8,.5,2.3,2.6,2.2),st.push(pt)}xt.position.set(0,X?26:27.2,0),X&&xt.scale.set(1.16,1.17,1.12),gt.add(xt),Mt(xt,j,0,1.3,-1.65,9.2,9.65,8.6),Mt(xt,K,0,0,1.9,8.65,8.45,7.5);let bt=Mt(xt,j,-2.1,7.3,4.25,6.4,3.4,4.35);if(bt.rotation.z=F==="papa"?-.27:.22,F==="mama"&&(Mt(xt,j,-6.7,-1.9,-3.8,3.6,8.1,5.2),Mt(xt,j,6.2,-1.7,-3.9,3.3,7.6,5.4),Mt(xt,j,2.8,10.4,-2.5,5.1,5.1,5.1),Mt(xt,tt,4.4,8.7,2.2,2.8,1.1,1.1)),X){Mt(xt,j,-7.3,6.7,-2,3.35,3.7,3.5),Mt(xt,j,7.3,6.7,-2,3.35,3.7,3.5);let Z=Mt(xt,tt,.9,10,4.2,2.5,1.45,1.25),J=Mt(xt,tt,4.1,10,4.2,2.5,1.45,1.25);Z.rotation.z=-.4,J.rotation.z=.4,Mt(xt,u.white,2.5,9.8,5.1,1.15,1.2,1)}for(let Z of[-1,1])if(Mt(xt,K,Z*8.2,-.15,1.1,1.85,2.4,1.75),Ct.push(Mt(xt,u.ink,Z*3,1.2,8.95,.85,.87,.52)),Mt(xt,u.cheek,Z*5.05,-1.25,7.95,1.18,.62,.52),F==="papa"){let J=new ce(u.glasses,u.ink);J.position.set(Z*3.1,1.25,9.15),J.scale.set(2.5,2.15,1.55),xt.add(J)}return F==="papa"&&Mt(xt,u.ink,0,1.6,9.35,1.1,.28,.35),Mt(xt,u.ink,0,-1.95,9.15,1.38,.45,.38),{root:St,groundMark:kt,poseRoot:Et,body:gt,head:xt,arms:st,legs:ht,eyes:Ct,radius:z,styleIndex:O,baby:X,cue:q}}let _=(O,F)=>Number.isFinite(t(O,F))&&(!i||i(O,F)>0),b=(O,F,D,z)=>_(O,F)&&(!i||i(O,F)>=D)&&(s?.(O,F,D,z)??!0),v=(O,F,D,z,W,tt)=>(e?.(O,F,D,z,W)??!0)&&(r?.(O,F,D,z,W,tt)??!0);function M(O,F,D,z,W=1){return O.width>=z*1.35&&O.depth>=z*.82&&b(O.x,O.z,z,O.itemId)&&ig(O,F,D,(tt,K,j,X)=>v(tt,K,j,X,z,O.itemId),W)}function R(O,F,D,z){let W,tt=1/0;for(let K of o){let j=Math.hypot(O-K.x,F-K.z);j>=tt||z.has(K.id)||!M(K,O,F,D)||(W=K,tt=j)}return W}function S(O,F,D,z){if(O.seat!==F&&(O.seat=F,O.poseAt=y),!F)return 0;if(m||!b(D,z,O.character.radius)||!b(F.x,F.z,O.character.radius)||!v(D,z,F.x,F.z,O.character.radius))return 1;let W=Aw((y-O.poseAt)/ww);return W*W*(3-2*W)}function T(O,F,D){let{character:z,seat:W}=O,{x:tt,y:K,heading:j,walking:X,progress:St}=F,Et=t(tt,K),gt=Math.cos(j),xt=Math.sin(j),Ct=(W?W.x-tt:0)*D,st=(W?W.z-K:0)*D,ht=Tw[W?.pose??"idle"],Mt=W?W.y-Et-Ew*Ta[z.styleIndex].scale[1]:0;z.root.position.set(tt,Et,K),z.root.rotation.y=j,z.poseRoot.position.set(Ct*gt-st*xt,Mt*D,Ct*xt+st*gt),z.poseRoot.rotation.y=W?Rw(W.heading,j)*D:0,z.poseRoot.userData.pose=D>0?W.pose:"standing";let Bt=Math.floor(Math.max(0,y-O.born)*16)/16+.7+z.styleIndex*.62,kt=Math.floor(St*12)/12*Math.PI*4,q=X?Math.sin(kt)*.56:0,bt=X?Math.abs(Math.sin(kt))*1.9:(1+Math.sin(Bt*4.7))*.47,Z=.19*(1+Math.sin(Bt*2.6));z.body.position.y=m?0:tu(bt*(z.baby?1.5:1),Z,D),z.body.rotation.x=ht.lean*D;let J=m?0:X?q*.15:Math.sin(Bt*2.8)*.045;z.body.rotation.z=tu(J,ht.tilt,D);for(let ct=0;ct<2;ct++){let pt=ct===0?-1:1,It=X?-q*pt:m?0:Math.sin(Bt*3.1+ct)*.09,Lt=m?0:Math.sin(Bt*ht.pace+ct*2.6)*ht.fidget,Ft=m?0:Math.sin(Bt*2.7+ct)*.035;z.arms[ct].rotation.x=tu(It,ht.hands[ct]+Lt,D),z.legs[ct].thigh.rotation.x=tu(q*pt,ht.thighs+Ft,D),z.legs[ct].shin.rotation.x=(ht.shins+Ft*2)*D}let nt=m||W?.pose==="desk"?0:Math.sin(Bt*1.08)*.13*D;Cw(z,Bt,m,ht.lean*.45*D,nt)}function P(O,F=d,D=!0){y=Number.isFinite(O)?O:y,m=F||d,p=!1;let z=[],W=new Set;for(let tt of f.values()){let{character:K}=tt,{x:j,y:X}=tt.point,St=t(j,X),Et=i?.(j,X)??pf;K.groundMark.visible=Number.isFinite(St)&&Et>0,K.groundMark.visible&&(K.groundMark.material=tt.point.quality?u.retainedMark:u.groundMark,K.groundMark.position.set(j,St+.26,X),K.groundMark.scale.setScalar(Math.min(1,Et/pf)));let gt=tt.motion.sample(y,m);tt.bodyReported&&gt?.current&&(tt.bodySuppressed=!1);let xt=tt.bodyReported&&!tt.bodySuppressed?gt:null,Ct=D&&tt.point.quality!=="area"&&(!tt.bodyReported||xt?.current&&!xt.walking)&&tt.dwell.ready(j,X,y);tt.seat&&(Ct&&M(tt.seat,j,X,K.radius,1.18)?W.add(tt.seat.id):tt.seat=void 0),z.push({track:tt,standing:xt,ready:Ct})}for(let{track:tt,standing:K,ready:j}of z){let{character:X,point:St}=tt,Et=j?tt.seat??R(St.x,St.y,X.radius,W):void 0;Et&&W.add(Et.id);let gt=S(tt,Et,St.x,St.y),xt=Et?{x:St.x,y:St.y,heading:K?.heading??Et.heading,walking:!1,progress:1}:K;if(!xt&&St.keepVisible){let Ct=[tt.lastStanding,St.fallback].find(st=>st&&b(st.x,st.y,X.radius));Ct&&(xt={...Ct,heading:Ct.heading??0,walking:!1,progress:1})}xt&&!Et&&(tt.lastStanding=xt),X.root.visible=!!xt,X.root.userData.locationQuality=St.quality??"measured",xt&&T(tt,xt,gt),X.cue&&(X.cue.visible=!!(xt&&St.keepVisible),X.cue.visible&&X.head.getWorldPosition(X.cue.position)),p||=X.root.visible||X.groundMark.visible}}function N(O,F,{reduceMotion:D=!1}={}){d=D;let z=Number.isFinite(F)?F:y,W=new Map;for(let K of Array.isArray(O)?O:[])if(!(typeof K?.id!="string"||!K.id||K.id.length>256||!Number.isFinite(K.x)||!Number.isFinite(K.y)||W.has(K.id)||!_(K.x,K.y))&&(W.set(K.id,K),W.size===Sw))break;for(let[K,j]of f)W.has(K)||(j.character.root.visible=!1,j.character.groundMark.visible=!1,j.character.cue&&(j.character.cue.visible=!1),h[j.character.styleIndex].push(j.character),f.delete(K));let tt=Ta.map(()=>0);for(let{character:K}of f.values())tt[K.styleIndex]++;for(let K of[...W.keys()].filter(j=>!f.has(j)).sort()){let j=tt.indexOf(Math.min(...tt));tt[j]++;let X=h[j].pop()??x(j),St=Ea({allowsPoint:(Et,gt)=>b(Et,gt,X.radius),allowsRoute:(Et,gt,xt,Ct)=>v(Et,gt,xt,Ct,X.radius)});f.set(K,{character:X,motion:St,dwell:sg(),born:z,poseAt:z})}for(let[K,j]of W){let X=f.get(K);X.point=j,X.bodyReported=X.motion.observe(j,z,{observation:j.expiresAt,reduceMotion:D}),X.bodyReported||(X.bodySuppressed=!0),o.length&&X.dwell.observe(j,z)}P(z,D)}function B(){if(c.removeFromParent(),l.removeFromParent(),!!u){for(let O of[u.ink,u.cheek,u.shoes,u.white,u.shadow,u.groundMark,u.retainedMark,u.occlusionMaterial])O.dispose();for(let O of u.palette)for(let F of Object.values(O))F.dispose();u.sphere.dispose(),u.disc.dispose(),u.groundRing.dispose(),u.glasses.dispose(),u.occlusionGlyph.dispose(),c.clear(),l.clear();for(let O of h)O.length=0;f.clear(),u=void 0}}return{setTracks:N,render:P,dispose:B,setVisible(O){c.visible=l.visible=O},orientOcclusionCues(O){for(let F of l.children)F.visible&&F.quaternion.copy(O.quaternion)},get hasMotion(){return!m&&f.size>0},get hasVisibleTracks(){return p},get hasPendingReacquisition(){return[...f.values()].some(({motion:O})=>O.pendingReacquisition)}}}function gf(n){return Number.isFinite(n?.x)&&Number.isFinite(n?.y)}function eo(n){return Array.isArray(n)&&n.length===6&&Array.from(n).every(Number.isFinite)}function yf(n){let{map:t,plan:e}=n??{};return gf(t)&&Math.abs(t.x)<=1e9&&Math.abs(t.y)<=1e9&&gf(e)&&e.x>=0&&e.x<=1536&&e.y>=0&&e.y<=1024}function cg(n){return n===null||Number.isFinite(n)&&n>0}function rg(n,t){let e=n.reduce((i,s)=>({x:i.x+s[t].x,y:i.y+s[t].y}),{x:0,y:0});return{x:e.x/n.length,y:e.y/n.length}}function ns(n,t){if(!eo(n)||!gf(t))return;let[e,i,s,r,o,a]=n;return{x:e*t.x+i*t.y+s,y:r*t.x+o*t.y+a}}function lg(n){if(!eo(n))return;let[t,e,i,s,r,o]=n,a=t*r-e*s,c=Math.hypot(t,s)*Math.hypot(e,r);if(!c||Math.abs(a)/c<1e-6)return;let l=[r,-e,e*o-r*i,-s,t,s*i-t*o].map(u=>u/a);return eo(l)?l:void 0}function ug(n,t){if(!eo(n)||!eo(t))return;let[e,i,s,r,o,a]=n,[c,l,u,f,h,d]=t,m=[e*c+i*f,e*l+i*h,e*u+i*d+s,r*c+o*f,r*l+o*h,r*u+o*d+a];return eo(m)?m:void 0}function og(n,{map:t,plan:e}){let i=ns(n,t);return Math.hypot(i.x-e.x,i.y-e.y)}function ag(n,t,e){let i=rg(n,"map"),s=rg(n,"plan"),r=t?-1:1,o=0,a=0,c=0,l=0;for(let{map:g,plan:x}of n){let _=g.x-i.x,b=r*(g.y-i.y),v=x.x-s.x,M=x.y-s.y;o+=_*v+b*M,a+=_*M-b*v,c+=_*_+b*b,l+=v*v+M*M}let u=e===null?1e-6:e*.05;if(Math.sqrt(c/n.length)<u||Math.sqrt(l/n.length)<8)return;let f=o/c,h=a/c,d=Math.hypot(f,h);if(!Number.isFinite(d)||d<=1e-12)return;let m=-r*h,y=r*f,p=[f,m,s.x-f*i.x-m*i.y,h,y,s.y-h*i.x-y*i.y];if(p.every(g=>Number.isFinite(g)&&Math.abs(g)<=1e4))return{transform:p.map(g=>Object.is(g,-0)?0:g),scale:d,rotationDegrees:Math.atan2(h,f)*180/Math.PI}}function xf(n,{flipY:t=!1,mapUnitsPerMetre:e=1e3}={}){if(!Array.isArray(n)||n.length<2||n.length>12||!n.every(yf)||!cg(e))return;let i=ag(n,t,e);if(!i)return;let s=n.map(o=>og(i.transform,o)),r;if(n.length>=3){let o=n.map((a,c)=>{let l=n.filter((f,h)=>c!==h),u=ag(l,t,e);return u&&og(u.transform,a)});o.every(Number.isFinite)&&(r=Math.max(...o))}return{...i,pixelsPerMetre:e===null?void 0:i.scale*e,errors:s,rmse:Math.sqrt(s.reduce((o,a)=>o+a*a,0)/s.length),maxError:Math.max(...s),leaveOneOutError:r}}function hg(n,t,e,i=1e3){if(!yf(n)||!yf(t)||!cg(i))return;let s=ns(e,n.map),r=ns(e,t.map);if(!s||!r)return;let o=Math.hypot(t.map.x-n.map.x,t.map.y-n.map.y),a=Math.hypot(t.plan.x-n.plan.x,t.plan.y-n.plan.y),c=Math.hypot(r.x-s.x,r.y-s.y);if(!o||!c)return;let l=i===null?void 0:o/i,u=l===void 0?void 0:a*l/c;return{mapDistance:o,planDistance:a,mapMetres:l,planMetres:u,deltaMetres:u===void 0?void 0:u-l}}var dg=ho(Zr(),1);var tr=1e-7;function fg(n,t,e){let i=!1;for(let s=1;s<n.length;s++){let[r,o]=n[s-1],[a,c]=n[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(i=!i)}return i}var nu=(n,t,e,i,s,r)=>(e-n)*(r-t)-(i-t)*(s-n),Is=(n,t,e)=>e>=Math.min(n,t)-tr&&e<=Math.max(n,t)+tr;function Iw([n,t,e,i],s,r,o,a){let c=nu(n,t,e,i,s,r),l=nu(n,t,e,i,o,a),u=nu(s,r,o,a,n,t),f=nu(s,r,o,a,e,i);return Math.abs(c)<tr&&Is(n,e,s)&&Is(t,i,r)||Math.abs(l)<tr&&Is(n,e,o)&&Is(t,i,a)||Math.abs(u)<tr&&Is(s,o,n)&&Is(r,a,t)||Math.abs(f)<tr&&Is(s,o,e)&&Is(r,a,i)?!0:c>0!=l>0&&u>0!=f>0}function Ra(n,t,e,i,s,r){let o=s-e,a=r-i,c=o*o+a*a,l=c?Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/c)):0;return(n-e-l*o)**2+(t-i-l*a)**2}function pg(n,t,e,i,s,r){if(Iw(n,t,e,i,s))return!0;if(!r)return!1;let[o,a,c,l]=n;return Math.min(Ra(t,e,...n),Ra(i,s,...n),Ra(o,a,t,e,i,s),Ra(c,l,t,e,i,s))<r}function iu(n,t,e=[]){let i=t.filter(s=>s.bottom===0).flatMap(s=>s.polygons).concat(e);return n.length&&i.length?dg.default.difference(n,i):n}function bf(n){let t=typeof window>"u"?globalThis:window,e=n.flatMap(({item:r,x:o,z:a,angle:c})=>t.RoomcraftModels.walkingObstacleBoxes({...r,x:o,y:a,rotation:c*180/Math.PI}).map(l=>{let{width:u,height:f,u:h,v:d}=l;return{...l,id:r.id,extentX:Math.abs(h[0])*u+Math.abs(d[0])*f,extentZ:Math.abs(h[1])*u+Math.abs(d[1])*f,edges:[[-u,-f,u,-f],[u,-f,u,f],[u,f,-u,f],[-u,f,-u,-f]]}}));function i(r,o,a,c,l=0,u){let f=Math.max(0,l)**2;return e.some(h=>{if(h.id===u||Math.min(r,a)>h.x+h.extentX+l||Math.max(r,a)<h.x-h.extentX-l||Math.min(o,c)>h.y+h.extentZ+l||Math.max(o,c)<h.y-h.extentZ-l)return!1;let d=r-h.x,m=o-h.y,y=a-h.x,p=c-h.y,g=d*h.u[0]+m*h.u[1],x=d*h.v[0]+m*h.v[1],_=y*h.u[0]+p*h.u[1],b=y*h.v[0]+p*h.v[1],v=(M,R)=>Math.abs(M)<=h.width&&Math.abs(R)<=h.height;return v(g,x)||v(_,b)||h.edges.some(M=>pg(M,g,x,_,b,f))})}return{blocksPoint:(r,o,a,c)=>i(r,o,r,o,a,c),blocksRoute:i}}function er(n){let t=n.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return n.some(([a,...c])=>fg(a,r,o)&&!c.some(l=>fg(l,r,o)))}function i(r,o){if(!e(r,o))return 0;let a=1/0;for(let c of t)a=Math.min(a,Ra(r,o,...c));return Math.sqrt(a)}function s(r,o,a,c,l=0){let u=Math.max(0,l-tr)**2;return e(r,o)&&e(a,c)&&!t.some(f=>pg(f,r,o,a,c,u))}return{contains:e,clearance:i,supportsRoute:s}}function mg(n,t,e,i){if(![n,t,e].every(Number.isFinite)||e<0)return null;if(i(n,t))return{x:n,y:t};let s=4,r=Math.ceil(e/s);for(let o=1;o<=r;o++){let a=Math.min(o*s,e),c=Math.ceil(2*Math.PI*a/s);for(let l=0;l<c;l++){let u=l*2*Math.PI/c,f=n+Math.cos(u)*a,h=t+Math.sin(u)*a;if(i(f,h))return{x:f,y:h}}}return null}var gg=new Ue,su=new G,no=class extends sa{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Zt(t,3)),this.setAttribute("uv",new Zt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Ms(e,6,1);return this.setAttribute("instanceStart",new ni(i,3,0)),this.setAttribute("instanceEnd",new ni(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new Ms(e,6,1);return this.setAttribute("instanceColorStart",new ni(i,3,0)),this.setAttribute("instanceColorEnd",new ni(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Qo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),gg.setFromBufferAttribute(e),this.boundingBox.union(gg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)su.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(su)),su.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(su));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Vt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Dt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Bn.line={uniforms:Ki.merge([Vt.common,Vt.fog,Vt.line]),vertexShader:`
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
		`};var Ps=class extends We{constructor(t){super({type:"LineMaterial",uniforms:Ki.clone(Bn.line.uniforms),vertexShader:Bn.line.vertexShader,fragmentShader:Bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var vf=new Pe,yg=new G,xg=new G,Sn=new Pe,wn=new Pe,Ui=new Pe,_f=new G,Mf=new ve,En=new ra,bg=new G,ru=new Ue,ou=new Vn,ki=new Pe,Oi,nr;function vg(n,t,e){return ki.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),ki.multiplyScalar(1/ki.w),ki.x=nr/e.width,ki.y=nr/e.height,ki.applyMatrix4(n.projectionMatrixInverse),ki.multiplyScalar(1/ki.w),Math.abs(Math.max(ki.x,ki.y))}function Pw(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,c=o;a<c;a++){En.start.fromBufferAttribute(s,a),En.end.fromBufferAttribute(r,a),En.applyMatrix4(e);let l=new G,u=new G;Oi.distanceSqToSegment(En.start,En.end,u,l),u.distanceTo(l)<nr*.5&&t.push({point:u,pointOnLine:l,distance:Oi.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function Lw(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;Oi.at(1,Ui),Ui.w=1,Ui.applyMatrix4(t.matrixWorldInverse),Ui.applyMatrix4(i),Ui.multiplyScalar(1/Ui.w),Ui.x*=r.x/2,Ui.y*=r.y/2,Ui.z=0,_f.copy(Ui),Mf.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(Sn.fromBufferAttribute(c,h),wn.fromBufferAttribute(l,h),Sn.w=1,wn.w=1,Sn.applyMatrix4(Mf),wn.applyMatrix4(Mf),Sn.z>f&&wn.z>f)continue;if(Sn.z>f){let _=Sn.z-wn.z,b=(Sn.z-f)/_;Sn.lerp(wn,b)}else if(wn.z>f){let _=wn.z-Sn.z,b=(wn.z-f)/_;wn.lerp(Sn,b)}Sn.applyMatrix4(i),wn.applyMatrix4(i),Sn.multiplyScalar(1/Sn.w),wn.multiplyScalar(1/wn.w),Sn.x*=r.x/2,Sn.y*=r.y/2,wn.x*=r.x/2,wn.y*=r.y/2,En.start.copy(Sn),En.start.z=0,En.end.copy(wn),En.end.z=0;let y=En.closestPointToPointParameter(_f,!0);En.at(y,bg);let p=re.lerp(Sn.z,wn.z,y),g=p>=-1&&p<=1,x=_f.distanceTo(bg)<nr*.5;if(g&&x){En.start.fromBufferAttribute(c,h),En.end.fromBufferAttribute(l,h),En.start.applyMatrix4(o),En.end.applyMatrix4(o);let _=new G,b=new G;Oi.distanceSqToSegment(En.start,En.end,b,_),e.push({point:b,pointOnLine:_,distance:Oi.origin.distanceTo(b),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}var au=class extends ce{constructor(t=new no,e=new Ps({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)yg.fromBufferAttribute(e,o),xg.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+yg.distanceTo(xg);let r=new Ms(s,2,1);return t.setAttribute("instanceDistanceStart",new ni(r,1,0)),t.setAttribute("instanceDistanceEnd",new ni(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;if(s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Oi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;nr=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),ou.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=nr*.5;else{let f=Math.max(s.near,ou.distanceToPoint(Oi.origin));l=vg(s,f,c.resolution)}if(ou.radius+=l,Oi.intersectsSphere(ou)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ru.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=nr*.5;else{let f=Math.max(s.near,ru.distanceToPoint(Oi.origin));u=vg(s,f,c.resolution)}ru.expandByScalar(u),Oi.intersectsBox(ru)!==!1&&(i?Pw(this,e):Lw(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(vf),this.material.uniforms.resolution.value.set(vf.z,vf.w))}};var io=class extends no{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){let e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){let e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var cu=class extends au{constructor(t=new io,e=new Ps({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var _g="#ffce84",Nw="#a8f5ff",Sf="#10242e";function lu(n,t,e){return new Ps({color:n,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function uu(n,t,e,i){let s=new io;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new cu(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=i+r,n.add(a)}}function Mg(n,t,e,i){let s=new ue().setFromPoints(t.map(({x:o,y:a})=>new G(o,.5,a)));s.setIndex(Hn.triangulateShape(t.map(({x:o,y:a})=>new Dt(o,a)),[]).flat());let r=new ce(s,e);r.renderOrder=i,n.add(r)}function Sg(){let n=new $i,t={side:je,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new we({...t,color:_g,opacity:.13}),i=new we({...t,color:Sf,opacity:.95}),s=lu(Sf,4.6,{opacity:.8}),r=lu(_g,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=lu(Sf,3.5,{...o,opacity:.65}),c=lu(Nw,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let m=(p,g=0)=>({x:h.x+d.x*p-d.y*g,y:h.y+d.y*p+d.x*g}),y=Array.from({length:28},(p,g)=>{let x=g/28*Math.PI*2;return m(10*Math.cos(x),10*Math.sin(x))});uu(n,[m(10),m(56)],[s,r],5),uu(n,[m(45,-7),m(56),m(45,7)],[s,r],5),Mg(n,y,i,7),uu(n,[...y,y[0]],[s,r],8)}function u(h){for(let m of new Set(n.children.map(y=>y.geometry)))m.dispose();n.clear();let d=new Map;for(let m of h){let{points:y,kind:p,id:g,origin:x,forward:_}=m;if(y.length<3)continue;let b=p==="nominal";b&&Mg(n,y,e,0),uu(n,[...y,y[0]],b?[s,r]:[a,c],b?3:1),x&&_&&d.set(g,m)}for(let m of d.values())l(m)}function f(){u([]);for(let h of[e,i,s,r,a,c])h.dispose()}return{scene:n,setZones:u,dispose:f}}var Eg=ho(Zr(),1);var Dw=4096,Fw=.18,Uw=new qt("#465fc4"),wg=new qt("#cc548d"),kw=new qt("#ffd572");function Ow(n,t,e){let i=e*.48,s=i*.83;return[[n-s,t-i],[n+s,t-i],[n+i,t-s],[n+i,t+s],[n+s,t+i],[n-s,t+i],[n-i,t+s],[n-i,t-s],[n-s,t-i]]}function Bw({x:n,y:t,corners:e},i){return!Array.isArray(e)||e.length!==4||!e.every(s=>Array.isArray(s)&&s.length===2&&s.every(Number.isFinite))?Ow(n,t,i):[...e,e[0]]}function zw(n,t,e,i,s){let[r,...o]=e.map(l=>l.slice(0,-1).map(([u,f])=>new Dt(u,f))),a=Hn.triangulateShape(r,o),c=[r,...o].flat();for(let l of a)for(let u of l){let{x:f,y:h}=c[u];n.push(f,Fw,h),t.push(i.r,i.g,i.b,s)}return a.length>0}function Hw(n,t,e){let{cells:i,cellSize:s}=e??{};if(!Array.isArray(i)||!Number.isFinite(s)||s<=0||s>200)return null;let r=i.slice(0,Dw).filter(f=>[f?.x,f?.y,f?.hits].every(Number.isFinite)&&f.hits>0&&t.contains(f.x,f.y));if(!r.length)return null;let o=r.reduce((f,{hits:h})=>Math.max(f,h),0),a=[],c=[],l=0;for(let f of r){let h=Math.sqrt(f.hits/o),d=h<.55?Uw.clone().lerp(wg,h/.55):wg.clone().lerp(kw,(h-.55)/.45),m=!1;for(let y of Eg.default.intersection([Bw(f,s)],n))m=zw(a,c,y,d,.36+h*.42)||m;m&&l++}if(!l)return null;let u=new ue;return u.setAttribute("position",new Zt(a,3)),u.setAttribute("color",new Zt(c,4)),{geometry:u,drawn:l}}function Tg(n){let t=new ie;t.name="Roomcraft radar heat map";let e=er(n),i=new we({vertexColors:!0,side:je,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1}),s;function r(c){s&&(t.remove(s),s.geometry.dispose(),s=void 0);let l=Hw(n,e,c);return l?(s=new ce(l.geometry,i),t.add(s),l.drawn):0}function o(){r(null),i.dispose()}function a(c){i.opacity=Number.isFinite(c)?re.clamp(c,.25,1):1}return{root:t,setHistory:r,setOpacity:a,dispose:o}}var Gw=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Vw=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),Ag={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},so=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"],sunrise:["#a9aa9e","#71aaa8","#536f9b","#d9dce8","#e5b7bc","#ffe0ae"],sunset:["#b3a08f","#7296a1","#635879","#f0cbc4","#d39a9b","#ffae80"]}).map(([n,t])=>[n,t.map(e=>new qt(e))])),wf={sunrise:["#efad92","#8baac6"].map(n=>new qt(n)),sunset:["#e58968","#907fa6"].map(n=>new qt(n))},Rg=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Ca,smoothstep:Ww}=re;function Xw({shoreline:n,farZ:t,focusX:e}){let i=[],s=[],r=[];for(let[a,{x:c,z:l}]of n.entries()){let u=a*2;i.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new ue;return o.setAttribute("position",new Zt(i,3)),o.setAttribute("uv",new Zt(s,2)),o.setIndex(r),o}var qw=`
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
`,Yw=`
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
`;function Cg({y:n,farZ:t,shoreline:e,focusX:i}){let s={...Ki.clone(Vt.fog),waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},solarBand:{value:0},moon:{value:0},moonLight:{value:new Dt(0,1)},bodyPosition:{value:new Dt},solarPosition:{value:new Dt},solarWarmTint:{value:wf.sunrise[0]},solarCoolTint:{value:wf.sunrise[1]}};for(let[c,l]of Rg.entries())s[l]={value:so.clear[c].clone()};let r=new We({uniforms:s,vertexShader:qw,fragmentShader:Yw,toneMapped:!1,fog:!0}),o=new ce(Xw({shoreline:e,farZ:t,focusX:i}),r);o.name="Ocean and shore wash",o.position.set(i,n,t);function a(c,l={}){let{night:u,daylightKnown:f,condition:h,moonPhase:d,moonAzimuth:m,moonElevation:y,skyProgress:p,windSpeed:g,windBearing:x,reduceMotion:_,reflections:b=!0}=l,v=l.solar??ts(l),M=Gw.has(h),R=so[M?"overcast":"clear"],S=v.phase==="sunset"||v.rising===!1?"sunset":"sunrise",T=Math.max(v.twilight,v.lowSun);for(let[St,Et]of Rg.entries())s[Et].value.lerpColors(so.night[St],R[St],v.daylight).lerp(so[S][St],T*(M?.24:.46));let P=Object.hasOwn(Ag,d)?Ag[d]:void 0,N=f||Number.isFinite(l.sunElevation)||h==="sunny",B=N?v.disc*(.97-v.cloud*.42):0,O=(u||v.phase==="night")&&P!==void 0?.93*(1-Ww(v.elevation,-12,-3)):0,F=O>B;F?s.bodyTint.value.copy(so.night[5]):s.bodyTint.value.lerp(so[S][5],T*.52);let D=Vw.has(h),z=Number.isFinite(c)&&!_?c:0;s.waterTime.value=z,s.rain.value=D?1:0,s.fog.value=h==="fog"?1:0;let W=Number.isFinite(g)?Ca(g/18,0,1):0,tt=Number.isFinite(x)?-Math.sin(re.degToRad(x)):1;s.reflectedWind.value=Math.sin(z*.09)*tt*W*24;let K=D||h==="windy"||h==="windy-variant";s.roughness.value=1+Math.max(K?.65:0,W*.65),s.cloudCover.value=b?M?.94:h==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!b||M?0:Math.max(O,B),s.solarBand.value=b&&N?T*(M?.3:1-v.cloud*.48):0,[s.solarWarmTint.value,s.solarCoolTint.value]=wf[S],s.moon.value=F?1:0,s.solarPosition.value.set(v.east*154,38+Ca(v.elevation/75,0,1)*20);let j=Number.isFinite(p)?Ca(p,0,1):void 0,X=j===void 0?void 0:re.lerp(-145,145,j);if(F){s.moonLight.value.set(Math.sin(P),Math.cos(P));let St=X??(Number.isFinite(m)?Ca((m-180)*1.08,-180,180):46+Math.sin(z*.014)*27),Et=Number.isFinite(y)?32+Ca(y/75,0,1)*24:42;s.bodyPosition.value.set(St,Et)}else s.bodyPosition.value.copy(s.solarPosition.value)}return{mesh:o,update:a}}var hu=26,$w=92,ro=4,Zw=18,jw=188;function Pg(n){let{minZ:t,maxZ:e}=n.houseBounds,i=t-(e-t)*.11-46,s=n.editableStructure?1/0:t-146,r=Math.min(n.bounds.minZ,i,s)-Zw,o=r-2*hu-$w;return{nearZ:r,farZ:o,sceneryMinZ:o-jw}}function Lg(n,{nearZ:t,farZ:e},i,s,r){let o=e+hu,a=t-hu,c=(o+a)/2,l=r-s/2,u=r+s/2,f=(h,d,m,y)=>n.box(s,m,d-h,y,r,i+m/2,(h+d)/2);f(o,a,1.2,"#73767c"),f(o,o+3.4,1.4,"#656b71"),f(a-3.4,a,1.4,"#656b71");for(let[h,d,m,y]of[[e,o,o-ro,e],[a,t,a,a+ro]]){f(h,d,5,"#c0b6a7"),f(m,m+ro,6.2,"#d0c3b0");let p=hu-ro;for(let g=l+36;g<u;g+=72)n.box(1.15,.18,p,"#a69c91",g,i+5.04,y+p/2)}for(let h=l+36;h+17<u;h+=72)n.box(34,.2,2.8,"#e9ce91",h,i+1.24,c);return{centerX:r,width:s,surfaceY:i+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+ro,maxZ:t,surfaceY:i+5},{minZ:e,maxZ:o-ro,surfaceY:i+5}]}}function Ef(n,t,e,i){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new ue;o.setAttribute("position",new Zt(s,3)),o.setIndex(r),o.computeVertexNormals(),n.add(o,i,0,0,0)}function Kw(n,t,e,i,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new Bo(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,f=Math.sin(r+c*1.62)*s*.21;n.add(l,c%2?a:o,t+u,i+s*.46,e+f)}}function Jw(n,t,e,i,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*i,u=e+o,f=s+.1;n.ball(a,c,13,"#d7bd94",l,f,u),n.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,f+.5,u+4);for(let[h,d,m]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])Kw(n,l+a*h,u+d,f+c*.75,m,h*7)}}function Qw(n,t,e,i){let o=e-13.5+.6;n.box(19,2.5,27,"#ac987e",t,i+1.28,o);for(let a=0;a<7;a++)n.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,i+2.6,e-1.25-a*3.8);for(let a of[-1,1])n.box(.9,.8,27+.6,"#b4a086",t+a*19/2,i+2.8,o)}function t2(n,t,e,i,s,r,o){n.box(1.4,16.6,1.4,"#b5a08a",t,i+16.6/2,e),n.ball(1.6,.95,1.6,r,t,i+16.6+3.6,e);for(let u=0;u<8;u++){let f=(p,g,x)=>[Math.cos(p)*g,x,Math.sin(p)*g],h=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,m=[[0,16.6+3.4,0],f(h,16*.54,16.6+2.1),f(d,16*.54,16.6+2.1),f(h,16,16.6-.55),f(d,16,16.6-.55),f(h,16,16.6-2),f(d,16,16.6-2)],y=new ue;y.setAttribute("position",new Zt(m.flat(),3)),y.setAttribute("uv",new Zt(m.flatMap(([p,,g])=>[p/32+.5,g/32+.5]),2)),y.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),y.computeVertexNormals(),n.add(y,u%2?r:s,t,i,e)}}function Ig(n,t,e,i,s,r){let o=(f,h)=>[t+f*Math.cos(r)+h*Math.sin(r),e-f*Math.sin(r)+h*Math.cos(r)],a=(f,h,d,m,y,p,g)=>{let[x,_]=o(y,g);n.box(f,h,d,m,x,i+p,_,r)};for(let f of[-1,1])a(1.1,1.2,18,"#988679",f*4.5,2.15,0),a(1,2.1,1.2,"#988679",f*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Ae(8.4,.85,8);u.rotateX(-Math.PI/6),n.add(u,s,c,i+4.4,l,r)}function e2(n,t,e,i,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*i,f=e+o;t2(n,u,f,s,a,c,l),Ig(n,u-13,f-15,s,c,l-.17),Ig(n,u+14,f-14,s,a,l+.12),n.box(8.6,.22,15,"#e9cda5",u+23,s+.99,f+7,l*2)}}function Ng(n,{farZ:t},e,{minX:i,maxX:s},r=6200,o=(i+s)/2){let a=(i+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,g)=>{let x=l+r*g/c,_=x-a,b=t-108+14*Math.cos((_+110)*.006)+7*Math.sin((_-90)*.013);return{x,z:b}}),f=u.map(({x:p})=>[p,e+.28,t+.4]),h=u.map(({x:p,z:g})=>[p,e+.71,g+22]),d=u.map(({x:p,z:g})=>[p,e+.44,g+6]),m=u.map(({x:p,z:g})=>[p,e+.17,g-31]);Ef(n,f,h,"#e3cba0"),Ef(n,h,d,"#dbbd92"),Ef(n,d,m,"#c8a47e");let y=Math.max(940,s-i);Jw(n,a,t,y,e);for(let p of[-1,1])Qw(n,a+p*y*.245,t,e);return e2(n,a,t,y,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Bi}=re,ne={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},Dg=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],n2=new Map(Dg.map(n=>[n.id,n])),Fg=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],i2=new Map(Fg.map(n=>[n.id,n])),Ug=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],kg=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],s2=new Map(Ug.map(n=>[n.id,n])),r2=new Map(kg.map(n=>[n.id,n])),Og=({id:n,label:t,length:e,width:i,detail:s})=>Object.freeze({id:n,label:t,length:e,width:s==="food"?i+2:i}),fu=Object.freeze([...Dg,...Fg,...Ug].map(Og)),du=Object.freeze(kg.map(Og));function o2(n){let t=new ue;return t.setAttribute("position",new Zt(n.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function pu(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new qt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r}),e=Xn(t);for(let i of t)i.dispose();return e.computeBoundingBox(),e}function Ia(n,t){let e=n.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),i=[],s=(n.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;i.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)i.push(0,o,o+1,s,s+o+1,s+o);let r=new ue;return r.setAttribute("position",new Zt(e,3)),r.setIndex(i),r.computeVertexNormals(),r}function a2(n){let t=[],e=(z,W)=>t.push([z,W]),i=(z,W,tt,K,j,X,St)=>e(new Ae(K,j,X).translate(z,W,tt),St),s=(z,W)=>e(o2(z),W),r=(z,W,tt,K,j,X,St)=>{let Et=[[W,K,X],[tt,K,X],[tt,j,X],[W,j,X]];s(z>0?Et:Et.reverse(),St)},{width:o,tire:a,body:c,roof:l,detail:u}=n,f=n.length-2.8,h=f*.5,d=o*.435,m=a*.78,y=8.25+a*.52,p=y-(u==="sports"||u==="convertible"?1.8:.75);e(Ia([[-h,d*.76,y-1.6],[-h+2.4,d*.93,y-.2],[-h+6.2,d,y],[h-6.2,d,y-.24],[h-2.4,d*.92,p+.35],[h,d*.75,p]],m),c);let g=m+.95;for(let z of[-1,1])i(z*(h-.22),g,0,1.42,1.58,d*1.57,ne.bumper),i(z*(h+.05),g+.82,0,1.08,.95,4.5,ne.plate);i(h+.1,p-2.8,0,.65,1.2,d*.64,ne.grille),i(h+.38,p-2.62,0,.24,.35,d*.55,ne.rim);for(let z of[-1,1]){i(0,m+1.3,z*(d+.04),f*.53,.9,.34,ne.bumper);for(let W of[-.323,.323]){let tt=f*W,K=z*(d+.05);e(new Ve(a,a,2.9,10).rotateX(Math.PI/2).translate(tt,a,K),ne.tire),e(new In(a*.57,8).rotateY(z<0?Math.PI:0).translate(tt,a,K+z*1.46),ne.rim),e(new In(a*.28,6).rotateY(z<0?Math.PI:0).translate(tt,a,K+z*1.48),ne.hub)}}let[x,_,b,v]=n.cabin.map(z=>f*z),M=y-.35,R=n.height-1.25,S=d*.88,T=S*(n.windows>2||u==="camper"||u==="delivery"?.94:.79),P=z=>Bi(S,T,z),N=z=>Bi(M,R,z),B=(z,W,tt,K=0)=>[Bi(Bi(x,_,W),Bi(v,b,W),z),N(W),tt*(P(W)+K)];function O(z,W,tt,K,j=.2,X=.85,St=.08){let Et=[B(W,j,z,St),B(tt,j,z,St),B(tt,X,z,St),B(W,X,z,St)];s(z>0?Et:Et.reverse(),K)}function F(z,W,tt,K,j,X,St=0){let[Et,gt]=z>0?[v,b]:[x,_],xt=(st,ht)=>[Bi(Et,gt,ht)+z*St,N(ht),st*P(ht)],Ct=[xt(tt,K),xt(W,K),xt(W,j),xt(tt,j)];s(z>0?Ct:Ct.reverse(),X)}function D(z){F(z,-.81,.81,.16,.88,ne.window,.08),F(z,-.72,.73,.23,.82,ne.glass,.13),F(z,-.67,.64,.67,.75,ne.glassGlow,.18)}if(u==="convertible"){F(1,-.88,.88,0,1,l,.08),D(1),i((x+b)/2,M+.2,0,(b-x)*.96,1.05,S*1.92,ne.window);for(let z of[-1,1])i(x+5.7,M+2.35,z*S*.43,7.7,2.5,5.6,ne.upholstery),i(x+2.2,M+3.7,z*S*.43,2,5.2,6,ne.tan)}else{for(let j of[-1,1])O(j,0,1,c,0,1,0);F(1,-1,1,0,1,c),F(-1,-1,1,0,1,c),D(1),["delivery","cargo","food"].includes(u)||D(-1);let z=(b+_)/2,W=b-_+.38;i(z,R+.34,0,W,.84,T*2.05,l),u==="bubble"&&i(z,R+.79,0,W*.88,.52,T*1.67,l),u==="sunroof"&&(i(z,R+.82,0,W*.48,.24,T*1.12,ne.window),i(z-W*.12,R+.98,0,.65,.18,T,ne.glassGlow));let tt=n.windows??2,K=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:tt},(j,X)=>[(X+.16)/tt,(X+.86)/tt]);for(let j of[-1,1])for(let[X,St]of K)O(j,X,St,ne.window),O(j,X+.011,St-.009,ne.glass,.29,.79,.13),O(j,X+.023,St-.025,ne.glassGlow,.64,.72,.18)}for(let z of[-1,1])i(v-3,M+1.05,z*(d+.2),3.2,1.8,1.75,l),i(Bi(x,v,.36),y-1.45,z*(d+.1),2.8,.46,.24,ne.rim);return{add:e,box:i,sideFace:r,glazingSide:O,bodyParts:t,recipe:n,length:f,outer:d,shoulder:y,nose:h,frontY:p}}function c2(n,t){let{length:e,outer:i,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=n,l=-e*.454,u=e*.105,f=r.height-.4,h=u-l;o(Ia([[l,i*.93,f-.7],[l+1.6,i,f],[u-1.6,i,f],[u,i*.93,f-.7]],s-.8),t),a((l+u)/2,f+.1,0,h-3.5,.28,i*1.6,r.roof);for(let d of[-1,1]){let m=d*(i+.1);c(d,l+3,u-3,s+1.6,s+2.45,m,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+f)/2,i*d,.26,f-s-3.1,.4,ne.rim);return{rear:l,front:u,top:f}}function l2(n){let{recipe:t,box:e,sideFace:i,glazingSide:s,length:r,outer:o,shoulder:a}=n,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let f=l+.5;for(let h of[-1,1])e(r*-.18,f,h*o*.51,r*.3,.85,.83,ne.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,f+.55,0,1.05,.75,o*1.18,ne.roofRail);e(r*-.18,f+1.1,0,r*.17,1.65,o*.78,ne.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,ne.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let f=r*-.25;e(f,a+.22,0,r*.35,.42,o*1.43,ne.wood);for(let h of[-1,1])e(f,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(f,a+.48,h*o*.38,r*.33,.25,.4,ne.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,ne.tan)}else if(c==="cargo"||c==="food"){let{rear:f,front:h}=c2(n,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;i(1,f+5.5,h-4.5,d,d+8.4,o+.19,ne.window),e((f+h)/2,d,o+.75,h-f-9.5,.75,2.65,ne.wood);for(let m=0;m<7;m++)e(Bi(f+6,h-4.5,m/6),d+8.6,o+1.4,2.5,1.05,2.75,m%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let f of[-1,1])c==="delivery"?(s(f,.1,.61,"#e5d6e4",.28,.65,.12),s(f,.18,.54,"#b39cc2",.43,.49,.18)):(s(f,.09,.61,"#456575",.29,.68,.12),s(f,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,f*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let f of[-1,1])e(0,a-1.05,f*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,ne.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function Tf(n,t,e){return[{role:"body",geometry:pu(n),material:new Xe({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Xe({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Xe({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function u2({length:n,width:t,paint:e,roof:i,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(p,g)=>a.push([p,g]),l=(p,g,x,_,b,v,M)=>c(new Ae(_,b,v).translate(p,g,x),M),u=-n/2+1.3,f=n/2-1.3,h=14,d=t/2-1.15,m=d-.7;c(Ia([[u,d-1.2,32],[u+2,d,34],[h-2,d,34],[h,d-1,32]],10.2),s),c(Ia([[17,m-1,18],[21,m,22],[45,m,22],[f-4,m-1,16],[f,m-2,14]],7),e),c(Ia([[27,m-1,28],[31,m-.7,32],[42,m-.7,31],[47,m-1.6,26]],16),i),l(48,23.6,0,.9,6.8,m*1.5,ne.window),l(48.55,25.8,0,.22,.8,m*1.4,ne.glassGlow),l(f+.27,11,0,.56,5.9,9,ne.grille),l(f+.61,8.6,0,.55,1.12,m*1.55,ne.rim),l(u-.32,10.6,0,.62,1.2,2*d-3,ne.bumper),l(h+2.8,9.1,0,10,1.5,12,ne.bumper);for(let p of[-1,1]){l((u+h)/2,15,p*d,h-u-5,2.1,.39,r),l((u+h)/2,26,p*(d+.06),h-u-10,.32,.3,"#f6edd3"),l(40,25,p*(m-.5),7.8,5.25,.32,ne.window),l(47,21,p*(m+.2),2.1,2.1,1.5,e),l(35,9.5,p*(m+.25),7.2,.85,1.12,ne.rim),l(u-.1,22,p*d*.41,.48,13.2,.51,ne.rim);for(let g of[u+9,u+19,23,32,f-8.2]){let x=p*(d-1.42);c(new Ve(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(g,4.35,x),ne.tire),c(new In(2.47,6).rotateY(p<0?Math.PI:0).translate(g,4.35,x+p*1.41),ne.hub)}}o&&(l(h+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(h+2.55,27.8,0,.2,3.9,6.4,r));let y=(p,g)=>pu([-1,1].map(x=>[new Ae(.42,1.3,3.1).translate(p,g,x*(d-3.7)),"#ffffff"]));return Tf(a,y(f+.38,12.25),y(u-.54,12.4))}function Bg(n,t){let{style:e,length:i,paint:s,trim:r,jacket:o,helmet:a}=n,c=[],l=(gt,xt)=>c.push([gt,xt]),u=(gt,xt,Ct)=>l(new Ae(...Ct).translate(...xt),gt),f=(gt,xt,Ct,st=0)=>l(new Re(1,8,5).scale(...Ct).rotateZ(st).translate(...xt),gt);function h(gt,xt,Ct,st){let ht=new G(...xt),Mt=new G(...Ct),Bt=new G().subVectors(Mt,ht),kt=new xn().setFromUnitVectors(new G(0,1,0),Bt.clone().normalize());l(new Ve(st,st,Bt.length(),5,1,!0).applyQuaternion(kt).translate(...ht.lerp(Mt,.5).toArray()),gt)}let d=t?1:.75,m=i*(t?.132:.15),y=-i*(e==="longtail"?.309:.326),p=i*.326,g=[i*-.024,m+d*1.25,0],x=[i*(e==="cruiser"?-.16:-.115),i*(e==="trail"?.4:e==="cruiser"?.327:.369),0],_=e==="road"||e==="racer",b=[i*(_?.234:.204),x[1]+(_?.5:3.7)*d,0],v=d*(t?2.2:1.36),M=d*(t?1.04:.65),R=d*(t?.9:.65),S=e!=="road";for(let gt of[y,p]){l(new Ln(m-M,M,4,12).translate(gt,m,0),ne.tire),S&&l(new Ln(m+d*.37,d*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(gt,m,0),s);for(let xt of[0,Math.PI/3,Math.PI*2/3]){let Ct=m-M*1.35,st=Math.cos(xt)*Ct,ht=Math.sin(xt)*Ct;h(ne.rim,[gt-st,m-ht,0],[gt+st,m+ht,0],d*.23)}l(new Ve(d*1.05,d*1.05,v,8).rotateX(Math.PI/2).translate(gt,m,0),ne.hub)}let T=[y,m,0];h(s,T,x,R),h(s,T,g,R),h(s,x,g,R),h(s,g,b,R);let P=e==="basket"||e==="scooter"?[b[0]*.7,g[1]+d*2.65,0]:b;h(s,x,P,R),P!==b&&h(s,P,b,R);for(let gt of[-1,1])h(ne.rim,[b[0],b[1]-d*2.3,gt*v*.38],[p,m,gt*v*.45],R*.7);u(ne.bumper,[x[0]-.25,x[1]+d*.4,0],[d*(t?7.1:4.8),d*1.08,d*3.15]);let N=d*(t?5.05:4.75),B=b[0]+(_?d*1.85:-d*.8),O=b[1]+(_?-d*.6:d*.25);for(let gt of[-1,1]){let xt=[B,O,gt*N];h(ne.rim,b,xt,d*.47),h(ne.tire,[B+d*.6,O,gt*N*.82],xt,d*.63)}if(t){u(ne.bumper,[g[0]+.4,g[1]+1.05,0],[6.4,4.9,5.4]);let gt=e==="scooter"?[b[0]+2.1,x[1]-2.3,0]:[x[0]+5.5,x[1]+.7,0],xt=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(f(s,gt,xt,e==="scooter"?.34:-.18),u(r,[gt[0]+.8,gt[1]+.15,xt[2]*.87],[xt[0]*1.18,1,.8]),u(r,[gt[0]+.8,gt[1]+.15,-xt[2]*.87],[xt[0]*1.18,1,.8]),e==="racer")f(ne.window,[b[0]+2,b[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[y+1.75,x[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,m*2.1+1.05,0],[7.25,.82,3.65]),u(ne.rim,[y+1.55,x[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")f(s,[y+3.7,x[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[g[0],m+1.1,0],[8.2,1.22,6.2]);else for(let Ct of[-1,1])h(ne.rim,[y-2.2,m+2.1,Ct*2.8],[g[0]+4.5,m+.45,Ct*3.25],.79)}else{let gt=e==="longtail"?[y+1.1,m*2.05+1.8,0]:[p-.98,b[1]-1.55,0];e==="basket"||e==="longtail"?(u(ne.wood,gt,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[gt[0],gt[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(ne.tan,[gt[0],gt[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[y+1.65,m+1.05,2],[4.2,3.4,1.85]),u(ne.roofRail,[y+1.6,m*2.05+.45,0],[5.3,.66,4.3]))}let F=[x[0]-d*.38,x[1]+d*2.05,0],D=[F[0]+(_?3.05:1.05)*d,F[1]+d*3.75,0],z=[D[0]+(_?3.35:.95)*d,D[1]+(_?3.1:4.85)*d,0],W=_?-.57:-.22;f(o,D,[d*2.6,d*4.15,d*3],W),f(a,z,[d*2.94,d*2.68,d*2.62]),f(ne.window,[z[0]+d*2.1,z[1]-d*.4,0],[d*1.08,d*1.05,d*2.2]),(e==="commuter"||e==="trail")&&u(r,[D[0]-d*2.1,D[1]+d*.6,0],[d*1.9,d*3.3,d*3.5]);let tt="#4b4e63",K="#e2b491";for(let gt of[-1,1]){let xt=[D[0]+d*1.1,D[1]+d*1.65,gt*d*2.43],Ct=[Bi(xt[0],B,.48),Bi(xt[1],O,.52)-d,gt*d*3.48],st=[B,O,gt*N*.93];h(o,xt,Ct,d*.95),h(o,Ct,st,d*.76),u(K,st,[d*1.5,d*1.11,d*1.09]);let ht=t?0:gt*d*1.35,Mt=[F[0]+d*(t?4.3:4.9)+ht,F[1]-d*3.5,gt*d*2.64],Bt=[g[0]+d*(e==="scooter"?2.65:.35)+ht,g[1]+d*.27-ht,gt*d*2.5];h(tt,[F[0],F[1],gt*d*1.86],Mt,d*1.12),h(tt,Mt,Bt,d*.88),u(ne.tire,[Bt[0]+d*.25,Bt[1],Bt[2]],[d*2.15,d*.95,d*1.42])}let j=d*(t?1.34:.84),X=[p+d*.58,m*(t?2.3:2.18),0],St=[y-d*.56,m*(t?2.18:2.02),0];h(ne.bumper,[p,m+d*1.5,0],X,d*.58),h(ne.bumper,[y,m*1.6,0],St,d*.46);let Et=gt=>pu([[new Re(j,6,4).scale(.53,.78,1).translate(...gt),"#ffffff"]]);return Tf(c,Et(X),Et(St))}function zg(n){let t=s2.get(n);if(t)return Bg(t,!0);let e=i2.get(n);if(e)return u2(e);let i=n2.get(n);if(!i)return null;let s=a2(i);l2(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(f,h)=>pu([-1,1].map(d=>[new Ae(1.48,1.8,r*.35).translate(f*(o+.19),h,d*r*.63),"#ffffff"]));return Tf(l,u(1,a-1.75),u(-1,c-2.65))}function Hg(n){let t=r2.get(n);return t?Bg(t,!1):null}var Gg=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),is={stride:4,crossingSeconds:3.2},h2=242,Vg=12,Wg=.38,$g=new Map(fu.map(n=>[n.id,n])),Xg=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(n=>$g.get(n)),f2=new qt("#fff1cf"),d2=new qt("#db514c");function p2(n){n.computeBoundingBox();let t=n.boundingBox;if(t.max.z-t.min.z<5)return[t.getCenter(new G)];let e=(t.min.z+t.max.z)/2,i=[new Ue,new Ue],s=new G,r=n.attributes.position;for(let o=0;o<r.count;o++)s.fromBufferAttribute(r,o),i[+(s.z>=e)].expandByPoint(s);return i.map(o=>o.getCenter(new G))}var m2=`
  #ifdef USE_FOG
    #ifdef FOG_EXP2
      opacity *= exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      opacity *= 1.0 - smoothstep(fogNear, fogFar, vFogDepth);
    #endif
  #endif
`;function qg(n){let t={...Ki.clone(Vt.fog),lightStrength:{value:1}};return new We({fog:!0,uniforms:t,transparent:!0,depthWrite:!1,blending:Zi,toneMapped:!1,vertexShader:`
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
        ${m2}
        gl_FragColor = vec4(color, clamp(opacity * lightStrength, 0.0, 1.0));
        #include <colorspace_fragment>
      }
    `})}function g2({index:n,lane:t}){let e=Math.floor(n/is.stride),i=n%is.stride;return Xg[(2*(e+i)+t)%Xg.length]}function Yg({centerX:n,width:t,lanes:e}){let i=t-60,s=n-i/2,r=Math.max(1,Vg*Math.round(i/(Vg*h2))),o=i/r,a=e.map((y,p)=>Array.from({length:r},(g,x)=>({z:y,lane:p,index:x,x:s,offset:o*(x+.25+(r===1&&p?.5:0))}))),c=0,l,u,f,h=!1,d=[];function m(y,p,g,x=!1){let _=p?.severity==="ambient"?is:Gg.get(p?.severity),b=Number.isFinite(l)&&Number.isFinite(y)?re.clamp(y-l,0,.25):0;if(l=y,_!==u){h=!!(u&&_&&(_===is||u===is));let R=Math.min(r,_?.stride??1),S=_===is?Math.floor(R/2):1;d=_?a.flatMap((T,P)=>T.filter(({index:N})=>N%R===P*S%R)):[],u=_}if(!_)return f=void 0,d;let v=p.speedFactor,M=_===is?o*Math.min(r,is.stride)/(2*is.crossingSeconds):Number.isFinite(v)&&v>0?Gg.get("clear").speed*re.clamp(v,.22,1):_.speed;if(x)c=!g&&Number.isFinite(y)?Math.max(0,y)*M:0;else if(!g)if(h&&f!==void 0){let R=Math.exp(-b/Wg),S=f-M;c+=b*M+S*Wg*(1-R),f=M+S*R,h=Math.abs(f-M)>.1}else c+=b*M,f=M;c%=i;for(let R of d){let S=(R.offset+c)%i;R.x=s+(R.lane?i-S:S)}return d}return{capacity:r*e.length,update:m}}function Zg(n){let t=new ie,e=Yg(n),i,s=new Map;function r(x,_,b=e.capacity){let v=new ii(x,_,b);return v.count=0,v.frustumCulled=!1,v.instanceMatrix.setUsage(On),v}let o=r(new In(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new we({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1})),a=r(new Pn(1,2).rotateX(-Math.PI/2).translate(.5,.16,0),qg(!1),e.capacity*2);a.name="road-headlight-beams";let c=r(new Pn(1,1),qg(!0),e.capacity*4);c.name="road-lamp-halos",a.visible=c.visible=!1,t.add(o,a,c);let l=new Ge,u=Math.abs(n.lanes[0]-n.lanes[1])/2,f,h=1;t.visible=!1;function d(x,_){for(let{mesh:b,role:v}of x.layers)v==="headlamp"&&(b.material.emissiveIntensity=_?2.45*h:.26),v==="taillamp"&&(b.material.emissiveIntensity=_?1.13*h:.28)}function m(x){if(s.has(x.id))return s.get(x.id);let _=new ie;_.name=`vehicle-${x.id}`;let b=zg(x.id).map(({geometry:R,material:S,role:T})=>({mesh:r(R,S),role:T}));_.add(...b.map(({mesh:R})=>R)),t.add(_);let v=R=>p2(b.find(S=>S.role===R).mesh.geometry),M={group:_,layers:b,headlamps:v("headlamp"),taillamps:v("taillamp"),count:0};return d(M,f),s.set(x.id,M),M}function y(x,_,b,v,M){let R=M?12.4:8.6;l.position.set(_.x+b*(v.x+(M?1.1:-1)),n.surfaceY+v.y+.8,_.z+b*v.z),l.scale.set(R,R,1),l.updateMatrix(),c.setMatrixAt(x,l.matrix),c.setColorAt(x,M?f2:d2)}function p(x,_,{reduceMotion:b=!1,night:v=!1,transientTelemetry:M=!1,headlightBrightness:R=1}={}){M&&(i??=Yg(n));let T=(M?i:e).update(x,_,b,M);if(t.visible=T.length>0,a.visible=c.visible=v&&t.visible,a.count=c.count=0,!t.visible)return;let P=Number.isFinite(R)?re.clamp(R,.35,1.6):1;if(v!==f||P!==h){f=v,h=P,a.material.uniforms.lightStrength.value=P,c.material.uniforms.lightStrength.value=P;for(let F of s.values())d(F,v)}for(let F of s.values())F.count=0;let N=$g.get(_?.vehicleStyle),B=0,O=0;for(let[F,D]of T.entries()){let z=N??g2(D),W=m(z);l.position.set(D.x,n.surfaceY,D.z),l.rotation.y=D.lane?Math.PI:0,l.scale.set(1,1,1),l.updateMatrix();for(let{mesh:j}of W.layers)j.setMatrixAt(W.count,l.matrix);if(W.count++,l.scale.set(z.length*.55,1,z.width*.62),l.updateMatrix(),o.setMatrixAt(F,l.matrix),!v)continue;let tt=D.lane?-1:1,K=re.clamp(z.length*1.1,53,86);for(let j of W.headlamps){let X=Math.max(5,Math.min(16,u-Math.abs(j.z)-1));l.position.set(D.x+tt*(j.x+1),n.surfaceY,D.z+tt*j.z),l.scale.set(K,1,X),l.updateMatrix(),a.setMatrixAt(B++,l.matrix),y(O++,D,tt,j,!0)}for(let j of W.taillamps)y(O++,D,tt,j,!1)}v&&(a.count=B,c.count=O,a.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0),o.count=T.length,o.instanceMatrix.needsUpdate=!0;for(let{group:F,layers:D,count:z}of s.values()){F.visible=z>0;for(let{mesh:W}of D)W.count=z,z&&(W.instanceMatrix.needsUpdate=!0)}}function g(){t.traverse(x=>{x.isInstancedMesh&&(x.dispose(),x.geometry.dispose(),x.material.dispose())}),t.clear()}return{root:t,update:p,dispose:g}}var jg=22,Kg=63,y2=525,x2=1100,b2=22,v2=75,Af=75,_2=105,M2=54,S2=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],Jg=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],w2=(n,t)=>(n%t+t)%t;function E2(n){let t=n.width-v2*2,e=[],i=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(n.centerX))return{walkers:e,cyclists:i,sample:()=>({walkers:e,cyclists:i})};let s=n.centerX-t/2,r=Math.max(1,Math.round(t/y2)),o=Math.max(1,Math.round(t/x2)),a=t/r,c=t/o;for(let[p,g]of(n.sidewalks??[]).entries()){let{minZ:x,maxZ:_,surfaceY:b}=g,v=_-x;if(![x,_,b].every(Number.isFinite)||v<=0)continue;let M=p%2?-1:1,R=Math.min(1,v/b2),S=x+v*(M>0?.25:.75),T=x+v*(M>0?.76:.24);for(let P=0;P<r;P++){let N=Jg[(P+p*2)%Jg.length],B=t/2+(P+p*.42)*a-35,O=`sidewalk-walk-${p}-${P}`;for(let[F,[D,z]]of N.entries())e.push({id:`${O}-${F}`,groupId:O,style:D,child:z<.8,offset:B-M*13.2*F,scale:R*z,direction:M,y:b,z:S+M*.62*(F%2),phase:P*.91+p*.8+F*2.1})}for(let P=0;P<o;P++)i.push({id:`sidewalk-bike-${p}-${P}`,style:du[(P+p*2)%du.length],offset:t/2+(P+p*.65)*c,scale:R,direction:M,y:b,z:T,phase:P*1.7+p})}let l=t/jg,u=t/Kg,f=l+Af+u+_2,h=Math.max(0,l/2-M2),d=[-1,1].map(p=>e.find(g=>g.direction===p&&!g.child)).filter(Boolean),m=[-1,1].map(p=>i.find(g=>g.direction===p)).filter(Boolean);function y(p=0,g=!1,{night:x=!1,activity:_}={}){let b=Number.isFinite(p)?Math.max(0,p):0;if(_==="overnight")return{walkers:[],cyclists:[]};if(x||_==="evening"){if(g)return{walkers:[],cyclists:[]};let M=Math.floor((b+h)/f),R=(b+h)%f,S=R>=l+Af,T=S?R-l-Af:R,P=S?m:d,N=S?u:l;if(T>=N||!P.length)return{walkers:[],cyclists:[]};let B=P[(M+1)%P.length],O=T/N*t,F=s+(B.direction>0?O:t-O),D={...B,x:F,gait:T*(S?7:10)+B.phase};return S?{walkers:[],cyclists:[D]}:{walkers:[D],cyclists:[]}}let v=(M,R,S)=>M.map(T=>({...T,x:s+w2(T.offset+T.direction*R*b,t),gait:g?0:b*S+T.phase}));return{walkers:v(e,jg,10),cyclists:v(i,Kg,7)}}return{walkers:e,cyclists:i,sample:y}}var mu={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function Qg(n,t,e){let{shirt:i,trim:s,pants:r,skin:o,hair:a,accessory:c}=S2[n.style],l=t?0:Math.sin(n.gait),u=Math.abs(l)*.69,f=h=>h+u;e(i,0,f(10.45),0,2.95,4.3,3.4),e(r,-.1,f(7.25),0,2.6,1.7,3.04),e(s,1.1,f(13.35),0,2.14,.69,2.55),e(s,2.68,f(10.4),-.7,.41,.86,1);for(let h of[-1,1]){let d=l*h,m=d*3,y=Math.max(0,d)*1.35;e(r,m*.45,4.5+y*.42+u*.32,h*1.51,1.19,3.2,1.25,-.48*d),e(mu.shoe,.77+m,1.11+y,h*1.52,2.17,.99,1.34),e(mu.sole,1.38+m,.49+y,h*1.52,1.64,.43,1.32),e(i,-d*1.07,f(10.16),h*3.15,1.23,2.87,1.15,.38*d),e(o,-d*2.16,f(7.7),h*3.31,.98,1.1,.95)}e(a,-.67,f(17.25),0,4.17,4.32,3.82),e(o,1.05,f(16.63),0,3.76,3.75,3.41),e(a,1.12,f(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,f(16.54),0,.64,.63,.66);for(let h of[-1,1])e(o,.36,f(16.69),h*3.47,1.02,1.07,.64),e(mu.ink,4.18,f(17.25),h*1.35,.34,.47,.43),e(mu.blush,3.76,f(16.21),h*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,f(19.68),.72,1.98,1.89,1.89),e(s,-3.51,f(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(i,-.5,f(20.2),0,3.72,1.97,3.45),e(s,2.72,f(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,f(10.2),0,1.48,2.89,2.63),e(i,-4.01,f(10.65),0,.46,1.28,1.77)),c==="curls")for(let h of[-1,1])e(a,-.9,f(18.52),h*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,f(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,f(21.05),2.67,1.51,.92,.65,-.47))}function t0(n){let t=E2(n),e=new ie;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let i=new Ge;function s(g,x,_,b){let v=new ii(x,_,b);return v.name=g,v.frustumCulled=!1,v.instanceMatrix.setUsage(On),e.add(v),v}let r=new Map,o=0;for(let g of t.walkers)Qg(g,!0,x=>{o++,r.has(x)||r.set(x,new qt(x))});let a=s("sidewalk-walkers",new Re(1,9,6),new Xe({color:"#fff",roughness:.81}),o),c=s("sidewalk-contact-shadows",new In(1,16).rotateX(-Math.PI/2),new we({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),l=new Map(du.map(g=>{let x=t.cyclists.filter(_=>_.style.id===g.id).length;return[g.id,x?Hg(g.id).map(({geometry:_,material:b,role:v})=>({role:v,mesh:s(`sidewalk-bicycle-${g.id}-${v}`,_,b,x)})):[]]})),u,f=0,h,d,m;function y(g,{reduceMotion:x=!1,night:_=!1,transientTelemetry:b=!1,activity:v}={}){let M=_||v==="evening"||v==="overnight";if(M!==u){for(let D of l.values())for(let{role:z,mesh:W}of D)z==="headlamp"&&(W.material.emissiveIntensity=M?1.05:.16),z==="taillamp"&&(W.material.emissiveIntensity=M?.75:.18);u=M}if(!b){let D=Number.isFinite(h)&&Number.isFinite(g)?re.clamp(g-h,0,.25):0;x||(f+=D),h=g}let R=b?x?0:g:f;if(d?.time===R&&d?.reduceMotion===x&&d?.transientTelemetry===b&&d?.night===_&&d?.activity===v)return;d={time:R,reduceMotion:x,transientTelemetry:b,night:_,activity:v};let S=t.sample(R,x,{night:_,activity:v}),T=S.walkers.length===t.walkers.length?"day":S.walkers[0]?.id,P=T!==m;m=T;let N=0,B=0;function O(D,z,W){i.position.set(D.x,D.y+.065,D.z),i.rotation.set(0,0,0),i.scale.set(z*D.scale,1,W*D.scale),i.updateMatrix(),c.setMatrixAt(B++,i.matrix)}for(let D of S.walkers){let{direction:z,scale:W}=D,tt=z>0?0:Math.PI;Qg(D,x,(K,j,X,St,Et,gt,xt,Ct=0)=>{i.position.set(D.x+j*W*z,D.y+X*W,D.z+St*W*z),i.rotation.set(0,tt,Ct),i.scale.set(Et*W,gt*W,xt*W),i.updateMatrix(),P&&a.setColorAt(N,r.get(K)),a.setMatrixAt(N++,i.matrix)}),O(D,5.32,4.1)}let F=new Map;for(let D of S.cyclists){let z=F.get(D.style.id)??0;i.position.set(D.x,D.y,D.z),i.rotation.set(0,D.direction>0?0:Math.PI,0),x||i.rotateX(Math.sin(D.gait)*.028),i.scale.setScalar(D.scale),i.updateMatrix();for(let{mesh:W}of l.get(D.style.id))W.setMatrixAt(z,i.matrix);F.set(D.style.id,z+1),O(D,D.style.length*.52,D.style.width*.58)}for(let[D,z]of l)for(let{mesh:W}of z)W.count=F.get(D)??0,W.instanceMatrix.needsUpdate=!0;a.count=N,c.count=B,P&&a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0}function p(){for(let g of e.children)g.dispose(),g.geometry.dispose(),g.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:p}}var La=Math.PI*2,{clamp:gu,lerp:Ns}=re,T2=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),A2=188,R2=490,C2=175,Pa=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],I2=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function oo(n,t){let e=0,i=n.length-1;for(;i-e>1;){let o=e+i>>1;t<n[o].x?i=o:e=o}let s=n[e],r=n[i];return Ns(s.z,r.z,gu((t-s.x)/(r.x-s.x),0,1))}function n0(n){if(!Array.isArray(n?.shoreline)||n.shoreline.length<2||![n.y,n.farZ,n.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:i}=n,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:I2.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=gu(i+o.center,s+c,r-c);function u(f){let h=l+Math.cos(f)*a,d=Math.max(e+65,oo(t,h)-o.offshore-Math.sin(f)*o.drift);return{x:h,z:d}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*La/12);if(oo(t,c)-l<o.length/2+8)return!1}return!0})}function P2(n,t=n0(n)){if(!t.length)return()=>null;let{shoreline:e,farZ:i}=n,s=e[0].x+120,r=e.at(-1).x-120,o=r-s;if(o<120)return()=>null;function a(u,f,h,d){let m=o/f,y=m+h,p=u.flatMap(x=>{let _=t.find(v=>v.id===x);if(!_)return[];let b=[1,-1].map(v=>({..._,start:0,period:m,point(M){let R=_.length*.55,S=gu((v>0?s:r)+v*o*M/La,e[0].x+R+8,e.at(-1).x-R-8),T=Math.min(oo(e,S),oo(e,S-R),oo(e,S+R)),P=Math.max(i+65,T-_.offshore-Math.sin(M*2)*_.drift*.55);return{x:S,z:P}}}));for(let v=0;v<=20;v++){let{x:M,z:R}=b[0].point(v*La/20);if(oo(e,M)-R<_.length/2+8)return[]}return[b]});if(!p.length)return()=>null;let g=d(m,y);return x=>{let _=(Number.isFinite(x)?Math.max(0,x):0)+g,b=_%y;if(b>=m)return null;let v=Math.floor(_/y);return{route:p[v%p.length][v%2],elapsed:b}}}let c=a(["cabin","fishing"],37,A2,u=>Math.max(0,u/2-42)),l=a(["fishing"],29,R2,(u,f)=>f-C2);return(u,f)=>(f==="overnight"?l:c)(u)}function i0(n,t,e=.003){let i=n.point(t-e),s=n.point(t+e);return Math.atan2(i.z-s.z,s.x-i.x)}function L2(n,t,{condition:e}={}){let i=Number.isFinite(t)?t:0,s=n.start+i*La/n.period,{x:r,z:o}=n.point(s),a=i*1.24+n.start*3,c=n.id==="jet-ski"?1.9:n.id==="cruise-ship"?.55:1,l=(T2.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:i0(n,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function s0(n,t){let e=new ue;return e.setAttribute("position",new Zt(n.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function r0(n){return s0(n,n.length===3?[0,1,2]:[0,1,2,0,2,3])}function ao(n,t,e,i,s=1){let r=Pa.flatMap(([l,u])=>{let f=l*n,h=t*u*s/2;return[[f,i,-h*.58],[f,i,h*.58],[f,e-.9,h],[f,e,h*.88],[f,e,-h*.88],[f,e-.9,-h]]}),o=[],a=6,c=(Pa.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let f=(u+1)%a;o.push(l+u,l+u+a,l+f+a,l+u,l+f+a,l+f)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return s0(r,o)}function N2(n){let t=n.map(([i,s])=>{let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new qt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Te(c,3)),r}),e=Xn(t);for(let i of t)i.dispose();return e}function ke(n,t,e,i,s,r){return new Ae(n,t,e).translate(i,s,r)}function Ke(n,t,e,i,s,r,o=0){return new Re(1,12,7).scale(n/2,t/2,e/2).rotateZ(o).translate(i,s,r)}function fn(n,t,e){let i=new G(...n),s=new G(...t).sub(i),r=new xn().setFromUnitVectors(new G(0,1,0),s.clone().normalize());return new Ve(e,e,s.length(),6).applyQuaternion(r).translate(...i.addScaledVector(s,.5).toArray())}function e0(n,t,e,i,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let f=Ns(Ns(t[0],e[0],l),i[0],u),h=Ns(Ns(t[1],e[1],l),i[1],u),d=Ns(Ns(t[2],e[2],l),i[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[f,h,d]};for(let l=0;l<o.length-1;l++){let u=o[l],f=o[l+1];for(let h=0;h<a;h++){let d=h/a,m=(h+1)/a,y=[c(d,u),c(m,u),c(m,f)];f<1&&y.push(c(d,f)),n.push([r0(y),r[l]])}}}function D2(n){let t=[3,43,0];n.push([fn([3,4,0],t,.9),"#c6a983"],[fn([3,11,0],[-25,10,-13],.6),"#c6a983"],[fn([28,5,0],t,.33),"#d7c5a8"],[fn([-25,5,0],t,.28),"#d7c5a8"],[ke(15,1.9,10,-13,5.4,0),"#a8886e"],[ke(9,1.5,7.5,-13,6.35,0),"#62797b"]),e0(n,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),e0(n,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function F2(n){n.push([ke(28,8.5,17,-7,9.1,0),"#f1e5cc"],[ke(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[ke(9,.75,7,-9,15.5,0),"#8aa5a5"],[ke(9,2.2,11,-24,5.9,0),"#bc9472"],[r0([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[fn([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])n.push([ke(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);n.push([fn([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[fn([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function U2(n){n.push([ke(15,6.1,13,6,7.9,0),"#e4d7ad"],[ke(17,1.4,14,6,11.65,0),"#71968e"],[ke(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[ke(9,3.4,7,-8,6.8,2.6),"#d7a674"],[ke(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[fn([-19,5,-5],[-28,16,-7],.45),"#907459"],[fn([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])n.push([ke(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new Ln(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function k2(n){n.push([Ke(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[Ke(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[Ke(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[Ke(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[Ke(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[ke(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[fn([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[fn([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[Ke(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[Ke(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[Ke(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[Ke(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[Ke(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[Ke(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;n.push([Ke(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[Ke(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[Ke(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[Ke(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[fn([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[Ke(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function O2(n,{length:t,beam:e}){let i="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";n.push([ke(109,6.6,29.1,-4,10.27,0),i],[ke(110.2,1.15,31.3,-4,13.75,0),s],[ke(92,5.1,26.2,-3.5,16.7,0),i],[ke(94.7,1.02,28.1,-3.8,19.42,0),s],[ke(66.2,4.5,21.8,2.8,21.9,0),i],[ke(69.7,.91,24.7,2.9,24.44,0),s],[ao(29,24,26.77,20.72,.86).translate(31,0,0),i],[ao(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[ao(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[ke(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[ke(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[ke(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[ke(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[Ke(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[fn([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[fn([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[Ke(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[Ke(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])n.push([fn([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[fn([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[Ke(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,f]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let h=-c/2;h<=c/2;h+=f)n.push([ke(3.61,2.05,.26,h,l,a*u),r],[ke(3.6,.33,.3,h,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])n.push([ke(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[Ke(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[Ke(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=Pa.findIndex(([p])=>p>=l),[f,h]=Pa[u-1],[d,m]=Pa[u],y=Ns(h,m,(l-f)/(d-f))*e/2;n.push([Ke(2.1,1.74,.62,c,5,a*(y-.08)),"#78969e"])}n.push([fn([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[fn([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[fn([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function B2(n,t){let{id:e,length:i,beam:s,paint:r,deck:o}=n,a=new ie;a.name=n.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[ao(i,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[ao(i,s,c+.82,c-.15,1.018),"#f4e4c9"],[ao(i*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?D2(u):e==="cabin"?F2(u):e==="jet-ski"?k2(u):e==="cruise-ship"?O2(u,n):U2(u),a.add(new ce(N2(u),t)),a}var Ls=12,z2=new qt("#def5e9");function H2(n,t){let i=Ls*3*2,s=new ue,r=new Te(new Float32Array(i*3),3).setUsage(On),o=new Float32Array(i*4),a=[];for(let f=0;f<3;f++)for(let h=0;h<Ls;h++){let d=(f*Ls+h)*2,m=h/(Ls-1),y=Math.pow(Math.sin((.1+.9*m)*Math.PI),1.15)*(1-.4*m);for(let p=0;p<2;p++)z2.toArray(o,(d+p)*4),o[(d+p)*4+3]=n.wake*y*(f===1?.22:.76);h<Ls-1&&a.push(d,d+2,d+1,d+1,d+2,d+3)}s.setAttribute("position",r),s.setAttribute("color",new Te(o,4)),s.setIndex(a);let c=new we({vertexColors:!0,side:je,transparent:!0,depthWrite:!1,opacity:.82}),l=new ce(s,c);l.name=n.name+" wake",l.frustumCulled=!1;function u({angle:f},h,d=n){let y=(n.wakeSeconds??(n.id==="cabin"?4.1:6))*La/d.period;for(let p=0;p<Ls;p++){let g=p/(Ls-1),x=f-y*g,_=i0(d,x),{x:b,z:v}=d.point(x),M=Math.cos(_),R=Math.sin(_),S=n.length*.48,T=b-M*S,P=v+R*S;for(let N=0;N<3;N++){let B=(N-1)*n.beam*(.19+g*.62),O=(N===1?1.85:.62)*(1+g*.55);for(let F=0;F<2;F++){let D=B+(F?O:-O);r.setXYZ((N*Ls+p)*2+F,T+R*D,t+.14,P+M*D)}}}r.needsUpdate=!0,c.opacity=h?.44:.82}return{mesh:l,update:u}}function o0(n){let t=new ie;t.name="Coastal boats";let e=new Xe({vertexColors:!0,side:je,roughness:.73}),i=n0(n),s=P2(n,i),r=new Re(1.35,8,6),o=["#ff896b","#8bf0b4","#fff1c4"].map(d=>new we({color:d,toneMapped:!1})),a=i.map(d=>{let m=B2(d,e),y=H2(d,n.y),p;if(d.id==="cabin"||d.id==="fishing"){p=new ie,p.name=`${d.name} running lights`;for(let[g,x]of[[.33,6.5,-.27],[.33,6.5,.27],[-.36,6.7,0]].entries()){let _=new ce(r,o[g]);_.position.set(x[0]*d.length,x[1],x[2]*d.beam),p.add(_)}m.add(p)}return t.add(y.mesh,m),{route:d,hull:m,wake:y,lights:p}}),c=0,l,u=!1;function f(d,{reduceMotion:m=!1,night:y=!1,condition:p,transientTelemetry:g=!1,activity:x}={}){if(u)return;let _=Number.isFinite(d)?d:void 0;!g&&!m&&_!==void 0&&l!==void 0&&(c+=gu(_-l,0,.25)),l=g?void 0:_;let b=g?m?0:_??0:c,v=y||x==="evening"||x==="overnight",M=v&&!m?s(b,x):null;for(let{route:R,hull:S,wake:T,lights:P}of a){let N=!v||M?.route.id===R.id;if(S.visible=N,T.mesh.visible=N,P&&(P.visible=v&&N),!N)continue;let B=M?.route??R,O=L2(B,M?.elapsed??b,{condition:p});S.position.set(O.x,n.y+O.heave,O.z),S.rotation.set(O.roll,O.yaw,O.pitch,"YXZ"),T.update(O,v,B)}}function h(){if(!u){u=!0;for(let{hull:d,wake:m}of a)d.children[0].geometry.dispose(),m.mesh.geometry.dispose(),m.mesh.material.dispose();e.dispose(),r.dispose();for(let d of o)d.dispose();t.clear()}}return f(0),{root:t,update:f,dispose:h}}var G2=26,V2=39,W2=2.25,yu=2*Math.PI,X2=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function co(n,t){let e=n.findIndex(r=>r.x>=t);if(e<1)return n[e===0?0:n.length-1].z;let i=n[e-1],s=n[e];return re.lerp(i.z,s.z,(t-i.x)/(s.x-i.x))}function q2(n,t){let{shoreline:e,focusX:i,y:s}=n??{},r=t?.farZ;if(![i,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,f){let h=l-u,d=l+u,m=e.filter(M=>M.x>h&&M.x<d).map(M=>M.z),y=Math.max(co(e,h),co(e,d),...m)+G2,p=r-V2;if(p-y<19)return null;let g=Math.min(f,(p-y)/2),x=(p+y)/2,_=co(e,l)+22,b=re.clamp((r+.4-x)/(r+.4-_),0,1),v=s-.77+b*.43;return{x:l,y:v,z:x,halfWidth:u,halfDepth:g}}let a=o(i-72,46,18),c=o(i+68,27,15);return a||c?{court:a,castle:c}:null}function a0(n,t=0,e=!1){let i=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(n.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=n.court,f=i/W2,h=f%1,d=Math.floor(f)%2?1:-1,m=Math.sin(Math.PI*h),y=u-16,p=Math.min(3.3,l*.22);r={x:o+d*y*(1-2*h),y:a+20.9+m*15.7,z:c+Math.sin(yu*h)*p,rotation:i*2.6,ground:a};for(let g of[-1,1]){let _=1-Math.min(1,(g!==d?1-h:h)/.24),b=e?.32:_*_;s.push({kind:"player",style:g<0?0:1,scale:1,yaw:-g*Math.PI/2,x:o+g*(y+6-b*2),y:a+b*1.65,ground:a,z:c+g*p*(.65+m*.35),reach:b,swing:Math.sin(i*3.15+g*.9)*.42})}}if(n.castle){let{x:o,y:a,z:c}=n.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(i*4.8),swing:e?0:Math.cos(i*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(i*2.5+.9),swing:e?0:Math.cos(i*2.5+.9)*.35})}return{actors:s,ball:r}}function Y2(n,t,e,i,s){let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new qt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Te(a,3)),r.translate(e,i,s)}function xu(n,t){let e=[],i=(c,l,u,f,h)=>e.push(Y2(c,l,u,f,h));t({add:i,box:(c,l,u,f,h,d,m)=>i(new Ae(c,l,u),f,h,d,m),cylinder:(c,l,u,f,h,d,m)=>i(new Ve(c,l,u,12),f,h,d,m)});let o=Xn(e);for(let c of e)c.dispose();let a=new Xe({vertexColors:!0,roughness:.86});n.add(new ce(o,a))}function $2({x:n,y:t,z:e,halfWidth:i,halfDepth:s}){let r=new ie;r.name="beach-volleyball-court",r.position.set(n,t,e);let o=s-1;return xu(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",f="#f4e4bb";for(let h of[-1,1])a(i*2,.1,.56,l,0,.14,h*s),a(.56,.1,s*2,l,h*i,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,h*o),c(.93,.93,1.1,l,0,18.9,h*o),c(.85,.85,.76,f,0,20.48,h*o),a(.76,.54,o*2,f,0,h<0?10.1:19.5,0);for(let h=1;h<5;h++)a(.23,.23,o*2,u,0,10.2+h*1.83,0);for(let h=1;h<12;h++)a(.22,9.25,.24,u,0,14.8,o*(h/6-1))}),r}function Z2({x:n,y:t,z:e}){let i=new ie;return i.name="beach-sandcastle",i.position.set(n,t,e),xu(i,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Re(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Re(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let f of[-1,1]){let h=f*6.15;o(2.44,3.35,7.9,a,h,4.05,-.8),o(2.66,2.52,1.03,c,h,8.03,-.8);for(let[d,m]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,h+d,8.99,-.8+m);r(1.07,.94,.3,l,h,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new ue;u.setAttribute("position",new Zt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new Ln(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Ae(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Re(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),i}function j2(){let n=new Re(3.25,24,12),t=n.toNonIndexed();n.dispose();let e=t.attributes.position,i=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new qt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=f=>(e[f](o)+e[f](o+1)+e[f](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/yu*i.length)%i.length,u=Math.abs(a("getY"))>2.85?i[1]:i[l];for(let f=0;f<3;f++)u.toArray(s,(o+f)*3)}t.setAttribute("color",new Te(s,3));let r=new ce(t,new Xe({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function Rf(n,t){let{skin:e,hair:i,shirt:s,shorts:r,trim:o,style:a}=X2[n.style],c=n.kind==="beachgoer",l=n.kind==="surfer",u=n.kind==="builder"||c,f=c?9.25:u?7.8:l?10.7:12.2,h=f+(c?5.9:u?5.8:6.1),d=l?n.swing*.95:u?n.reach*1.15+.65:0,m=l?n.swing*.22:c?.11:u?.24:0;t(s,0,f,d*.43,3.72,4.1,2.85,m),t(r,0,f-3.4,0,3.34,1.65,2.8),t(o,0,f-1.95,2.45,3.03,.48,.59);for(let y of[-1,1]){if(l){t(r,y*2.45,5.35,1.26,1.58,2.66,1.49,.67,y*.4),t(e,y*3.76,2.93,.86,1.25,2.45,1.16,-.31,y*.17),t(e,y*4.13,1.01,.5,1.64,.73,1.27,0,y*.07);let p=f+1.2+y*n.swing*1.65;t(e,y*5.26,p,-.1,1.05,3.35,1.06,.22,-y*(1.08+y*n.swing*.28)),t(e,y*8.07,p+.43,.29,1.36,.96,1.02)}else if(c){let p=y<0?n.reach:.23;t(r,y*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,y*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,y*1.93,.92,5.06,1.25,.72,1.74),t(e,y*3.98,f-.3+p,1.15,1.02,2.45,1.05,-.62-p*.37),t(e,y*3.5,f-1.2+p*1.8,3.17,1.11,1.14,1.13),y<0&&t("#e7c8a1",-3.5,f-.18+p*1.8,3.82,.86,1.19,.86)}else{let p=u?.8:y*n.swing;t(r,y*1.65,u?3.5:6.4,p,1.55,2.3,1.49,u?.8:0),t(e,y*1.68,u?1.72:3.1,u?2.08:p,1.16,2.13,1.16),t(e,y*1.75,1.02,.88+p,1.28,.76,2.08);let g=u?f+.45:f+1.5+n.reach*2.1,x=u?2.4+n.reach*1.72:n.reach*.8,_=u?-.78-n.reach*.27:.12+n.reach*.62;t(e,y*(4.13-n.reach*.46),g,x,1.04,3.7,1.05,_,y*(u?.1:.24+n.reach*.55)),t(e,y*(4.1-n.reach*.53),g+(u?-1.65:n.reach*5.55-2.92),x+(u?2.7:n.reach*1.9),1.14,1.15,1.13)}t(e,y*3.48,h,d+.4,.84,.99,.78),t("#493a41",y*1.46,h+.38,d+3.41,.43,.47,.34),t("#c98878",y*2.22,h-.45,d+3.05,.54,.27,.26)}t(i,0,h+.64,d-.53,3.81,4.12,3.64),t(e,0,h,d+.72,3.25,3.29,2.89),t(e,0,h-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,h-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,h+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,h+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(i,-.99,h+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?i:o,2,h+3.23,d-1.66,1.41,1.43,1.39))}function Cf(n,t,e,i,s=!1){let r=0;for(let f of t)Rf(f,()=>r++);let o=new ii(new Re(1,10,7),new Xe({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(On),n.add(o);let a=i?new ii(new In(1,20).rotateX(-Math.PI/2),new we({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=i,a.frustumCulled=!1,a.instanceMatrix.setUsage(On),n.add(a));let c=0,l=new Map;for(let f of t)Rf(f,h=>{l.has(h)||l.set(h,new qt(h)),o.setColorAt(c++,l.get(h))});let u=new Ge;return function(h,d){let m=0,y=0,p=(g,x,_,b,v)=>{a&&(u.position.set(g,x+.16,_),u.rotation.set(0,0,0),u.scale.set(b,1,v),u.updateMatrix(),a.setMatrixAt(y++,u.matrix))};for(let g of h){let{scale:x,yaw:_}=g,b=Math.cos(_),v=Math.sin(_);Rf(g,(M,R,S,T,P,N,B,O=0,F=0)=>{u.position.set(g.x+x*(R*b+T*v),g.y+S*x,g.z+x*(-R*v+T*b)),u.rotation.set(0,_,0),u.rotateX(O),u.rotateZ(F),u.scale.set(x*P,x*N,x*B),u.updateMatrix(),o.setMatrixAt(m++,u.matrix)}),p(g.x,g.ground,g.z,5.25*x,4.47*x)}d&&p(d.x,d.ground,d.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function K2(n){let t=new ie;t.name="beach-day-activities";let e=n.court?$2(n.court):null,i=n.castle?Z2(n.castle):null,s=e?j2():null;e&&t.add(e,s),i&&t.add(i);let r=Cf(t,a0(n).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=a0(n,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:f,rotation:h}=c.ball;s.position.set(l,u,f),s.rotation.set(.25,h*.59,h)}}}function J2(n){let t=new ie;t.name=`beach-surfboard-${n+1}`;let e=n?"#e5ac55":"#d57565",i=n?"#4d8f92":"#f3e5be";return xu(t,({add:s})=>{let r=(o,a,c,l,u,f,h)=>s(new Re(1,16,8).scale(l,u,f),h,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,i),r(-4.51,1.17,0,2.67,.14,2.47,n?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function Q2(n){let t=new ie;t.name="beach-morning-surfers";let{shoreline:e,focusX:i,y:s,farZ:r}=n,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:f,depth:h,drift:d})=>{let m=i+u,y=m-f-26,p=m+f+26;return y>=e[0].x&&p<=e.at(-1).x&&Math.min(co(e,y),co(e,p),...e.filter(g=>g.x>y&&g.x<p).map(g=>g.z))-h-d-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,f)=>J2(f));t.add(...a);function c(u){return o.map(({offset:f,radius:h,depth:d,drift:m,period:y,phase:p,style:g,scale:x})=>{let _=u%y/y*yu+p,b=i+f+h*Math.sin(_),v=co(e,b)-d+m*Math.cos(_),M=Math.atan2(m*Math.sin(_),h*Math.cos(_)),R=Math.sin(_*2+p);return{kind:"surfer",style:g,scale:x,yaw:M,x:b,z:v,y:s+1.7+R*.3,swing:Math.cos(_*2+p)*.5,swell:R}})}let l=Cf(t,c(0),"beach-surfers");return{group:t,render(u){let f=c(u);for(let[h,{x:d,y:m,z:y,yaw:p,swell:g}]of f.entries())a[h].position.set(d,m-1.24,y),a[h].rotation.set(0,p,0),a[h].rotateX(g*.075),a[h].rotateZ(-g*.027);l(f)}}}var Na=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function tE(n,t){let e=new ie;return e.name=`beach-firepit-${t+1}`,e.position.set(n.x,n.y,n.z),xu(e,({add:i,box:s})=>{i(new Re(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*yu/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];i(new Ho(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])i(new Ve(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])i(new Ve(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),i(new Ve(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function eE(n){let t=new ie;t.name="beach-evening-bonfires";let e=[n.court??n.castle];t.add(...e.map(tE));function i(l){let{x:u,y:f,z:h}=e[0];return[{kind:"beachgoer",style:0,scale:.95,yaw:Math.PI/2,x:u-16.23,y:f,ground:f,z:h+1.25,reach:.36+Math.sin(l*1.42-1.35)*.27}]}let s=Cf(t,i(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new ii(new Re(1,9,7),new we({toneMapped:!1}),e.length*Na.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(On);for(let l=0;l<r.count;l++)r.setColorAt(l,new qt(Na[l%Na.length]));let o=new We({uniforms:{warmth:{value:.86},tint:{value:new qt("#ffad5f")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),a=new ii(new In(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new Ge;for(let[l,{x:u,y:f,z:h,halfDepth:d}]of e.entries())c.position.set(u,f+.19,h),c.scale.set(23,1,Math.min(19,d+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(i(l));for(let[u,{x:f,y:h,z:d}]of e.entries()){let m=u*1.71;for(let y=0;y<Na.length;y++){let p=l*4.5+y*2.39+m,g=Math.sin(p)*.5+.5,x=y*2.39+m;if(y<7){let _=y<5?2.05:.78,b=y<5?3.18+g*1.58:2.78+g*1.09;c.position.set(f+Math.cos(x)*_,h+b+1.05,d+Math.sin(x)*_),c.rotation.set(Math.sin(x)*.2,x,Math.cos(x)*.24),c.scale.set(1.21+g*.54,b,1.18+g*.46)}else{let _=(l*(.32+y*.019)+y*.234+m)%1,b=.79*(1-_)+.13;c.position.set(f+Math.cos(x+_)*(2.45+_*6.2),h+8.8+_*15,d+Math.sin(x+_)*(1.74+_*4.4)),c.rotation.set(0,0,.2),c.scale.set(b,b*1.33,b)}c.updateMatrix(),r.setMatrixAt(u*Na.length+y,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function c0(n,t){let e=new ie;e.name="beach-play";let i=q2(n,t);if(!i)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:Q2(n),day:K2(i),evening:eE(i)};e.add(...Object.values(s).map(({group:h})=>h));let r,o=0,a,c,l;function u(h,{reduceMotion:d=!1,transientTelemetry:m=!1,activity:y="day",night:p=!1}={}){let g=y==="overnight"?y:p?"evening":Object.hasOwn(s,y)?y:"day";if(!m){let _=Number.isFinite(r)&&Number.isFinite(h)?re.clamp(h-r,0,.25):0;d||(o+=_),r=h}let x=d?.96:m?Number.isFinite(h)?Math.max(0,h):0:o;if(!(x===a&&d===c&&g===l)){if(a=x,c=d,g!==l){for(let[_,{group:b}]of Object.entries(s))b.visible=g===_;l=g}s[g]?.render(x,d)}}u(0);function f(){e.traverse(h=>{h.isMesh&&(h.isInstancedMesh&&h.dispose(),h.geometry.dispose(),h.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:f}}var nE=new G(0,-1,0),iE=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],If=.01;function l0(n){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(n)}function h0(n){return!n.isMesh||!n.geometry?!1:(Array.isArray(n.material)?n.material:[n.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function sE(n){n.updateWorldMatrix(!0,!0);let t=[];n.traverseVisible(a=>{if(!h0(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let i=new Ue;for(let a of t)a.min.y<=e+If&&i.union(a);let s=i.getCenter(new G),r=i.getSize(new G),o=e-n.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-n.position.x,centerZ:s.z-n.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function rE(n,t){let{type:e}=n;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function oE(n,t){let[e,i]=rE(n.item,t);if(![e,i,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Ue().setFromObject(s);return r.isEmpty()?null:{placement:n,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:i*s.scale.y}}function u0(n,t){let e=t?.[n.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:n}function f0(n,t){return n.intersectObject(t,!0).find(e=>h0(e.object))}function d0(n,{low:t,high:e}){return n?.face?.normal.y>=.92&&n.point.y>=t&&n.point.y<=e}function aE(n,t,e,i,s,r){let o=t.x+e.centerX-i.x,a=t.z+e.centerZ-i.z,{bounds:c,probe:l,rootY:u}=n;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let f=-1/0;for(let[h,d]of iE){r.set(o+h*e.radiusX,c.max.y+1,a+d*e.radiusZ),s.set(r,nE);let m=f0(s,l);if(!d0(m,n))return null;f=Math.max(f,m.point.y)}return u+f}function p0(n,t){let e=[],i=[];for(let c of n){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=l0(c.item);if(u==="surface"){let f=oE(c,l);f&&e.push(f)}else if(u==="tabletop"){let f=sE(l.root);f&&i.push({placement:c,foot:f})}}let s=new Ss,r=new G;function o(c){let l=new Map;for(let{placement:u,foot:f}of i){let h=u0(u,c),d=null,m=u.baseY,y=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let g=u0(p.placement,c),x=aE(p,h,f,g,s,r);if(x===null||x<=u.baseY||x<m-If)continue;let _=p.placement.item.id,b=Math.hypot(h.x-g.x,h.z-g.z);Math.abs(x-m)<If&&(b>y||b===y&&_>d)||(d=_,m=x,y=b)}l.set(u.item.id,{y:m-f.bottom,supportId:d})}return l}function a(c,l){if(l0({type:c})!=="tabletop")return null;let u=new Ss(void 0,void 0,l.near,l.far),f=new G,h;for(let d of e){let{x:m,z:y}=d.placement;f.copy(l.ray.origin).sub(r.set(m,d.rootY,y)),u.set(f,l.ray.direction);let p=f0(u,d.probe);p&&(!h||p.distance<h.hit.distance||p.distance===h.hit.distance&&d.placement.item.id<h.surface.placement.item.id)&&(h={hit:p,surface:d,x:m,z:y})}return!h||!d0(h.hit,h.surface)?null:{x:h.x+h.hit.point.x,y:h.z+h.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:bu,sin:sr,cos:vu}=Math,zi=bu*2,cE=new G(0,1,0),ir=["#86684f","#9a7c5b","#735844"],Pf=["#92745a","#ac8f69","#785c49"],Lf=["#537759","#6b8a55","#849a58","#a0ab63"],Nf=["#3e6251","#4d7056","#61815d","#789365"],Df=["#4a6653","#567552","#6b8659","#819863"],lE=["#517553","#64845a","#799660","#98a869"],uE=["#617d69","#72917a","#8ea17e","#a7b08a"],hE=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],m0=240,fE=new Set(["windy","windy-variant"]),Da=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function g0(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function zn(n,t,e){return[vu(n)*t,e,sr(n)*t]}function Tn(n,[t,e,i]){return[n[0]+t,n[1]+e,n[2]+i]}function dE(n,t,e,i,s){let r=(c,l)=>n.add(c,l,t,e,i);function o(c,l,u,f,h,d=7){let m=new G(...l),y=new G(...u),p=y.clone().sub(m),g=new xn().setFromUnitVectors(cE,p.clone().normalize()),x=new Ve(h,f,p.length(),d),_=m.lerp(y,.5);r(x.applyQuaternion(g).translate(_.x,_.y,_.z),c)}function a(c,l,u,f=.13,h=6){let d=new Re(1,9,h),m=d.getAttribute("position"),y=s()*zi;for(let p=0;p<m.count;p++){let g=m.getX(p),x=m.getY(p),_=m.getZ(p),b=1+f*(sr(g*5.8+x*3.2+_*2.1+y)*.7+vu(_*7.8-x*2.2+y)*.3);m.setXYZ(p,g*b*u[0],x*b*u[1],_*b*u[2])}d.computeVertexNormals(),r(d.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function Ff(n,t,e,i,s,r,o){let a=[vu(e),sr(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=n.positions.length/3;for(let[f,[h,d]]of l.entries()){let m=s*d,y=t[0]+h*i*a[0],p=t[1]+sr(h*bu)*r-o*h*h,g=t[2]+h*i*a[1];for(let _ of[-1,0,1])n.positions.push(y+_*m*c[0],p+(_===0?m*.29:0),g+_*m*c[1]),n.uvs.push((_+1)*.5,h);if(f===0)continue;let x=u+(f-1)*3;for(let _ of[0,1]){let b=x+_;n.indices.push(b,b+1,b+3,b+1,b+4,b+3)}}}function pE(n,t,e){let i=new ue;i.setAttribute("position",new Zt(e.positions,3)),i.setAttribute("uv",new Zt(e.uvs,2)),i.setIndex(e.indices),i.computeVertexNormals(),n(i,t)}function mE(n,t,e,i){let{draw:s,branch:r,crown:o,random:a}=n,c=t*(i?.063:.125),l=y=>zn(e,c*y*y,t*y*(i?.85:.86)),u=y=>t*(i?.029:.024)*(1-.53*y),f=i?5:6;for(let y=0;y<f;y++){let p=y/f,g=(y+1)/f;r(Pf[0],l(p),l(g),u(p),u(g),9)}for(let y=1;y<=13;y++){let p=y*.067;r(Pf[y%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let h=l(1);o(Lf[0],h,[t*.045,t*.036,t*.048],.08,5);for(let y=0;y<4;y++)o(Pf[2],Tn(h,zn(e+y*zi/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let d=Lf.map(()=>({positions:[],uvs:[],indices:[]})),m=i?9:10;for(let y=0;y<m;y++){let p=e+y*zi/m+(a()-.5)*.18,g=y%3===0,x=t*((g?.35:.29)+(a()-.5)*.07),_=t*(g?.026:.077),b=t*(g?.072:.025);if(Ff(d[(y+1)%4],h,p,x,t*.012,_,b),i){let v=Tn(h,zn(p,x*.43,_*.7));for(let M=-3;M<=3;M++)Ff(d[(y+M+4)%4],v,p+M*.19,x*(.58-Math.abs(M)*.055),t*(.016-Math.abs(M)*.0018),_*.32,b*.84)}else for(let v=0;v<7;v++){let M=.19+v*.104,R=Tn(h,zn(p,x*M,sr(M*bu)*_-b*M*M));for(let S of[-1,1])Ff(d[(y+v+(S>0?1:0))%4],R,p+S*(.83-M*.37),t*(.095-M*.048),t*(.0095-M*.003),t*.014,t*.025)}}for(let[y,p]of d.entries())pE(s,Lf[y],p)}function Uf(n,t,e,i,s=.84){let{branch:r}=n,o=a=>zn(e,t*i*(a*a+.16*sr(bu*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(ir[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*zi/4;r(ir[2],zn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(ir[1],zn(c,t*.039,t*.025),Tn(o(.36),zn(c,t*.031,0)),t*.004,t*.002,4)}return o}function gE(n,t,e){let{crown:i,random:s}=n,r=Uf(n,t,e,.018,.94);i(Nf[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let f=0;f<u;f++){let h=e+f*zi/u+o*2.5,d=Tn(r(o),zn(h,t*a,t*((s()-.5)*.035)));i(Nf[(f+u)%4],d,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}i(Nf[2],Tn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function yE(n,t,e){let{branch:i,crown:s,random:r}=n,o=Uf(n,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let f=e+u*zi/l+a*7+(r()-.5)*.22,h=o(a),d=Tn(h,zn(f,t*c,t*(.02+r()*.028)));i(ir[1],h,d,t*.017,t*.0037,6);let m=Tn(d,[0,t*.029,0]);s(Df[u%3],m,[t*c*.46,t*.054,t*c*.45],.21,5),s(Df[(u+2)%4],Tn(m,zn(f-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(Df[3],Tn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function xE(n,t,e,i){let{branch:s,crown:r,random:o}=n,a=i==="olive",c=i==="jacaranda",l=a?uE:c?hE:lE,u=Uf(n,t,e,a?.1:.034,a?.78:.84),f=a?5:6;for(let d=0;d<f;d++){let m=e+d*zi/f+(o()-.5)*.33,y=u(.46+o()*.12),p=t*(.16+o()*.07),g=Tn(y,zn(m,t*.12,p*.58)),x=Tn(y,zn(m+.16,t*(.19+o()*.052),p));s(ir[1],y,g,t*.026,t*.016,7),s(ir[0],g,x,t*.0165,t*.0045,6);let _=t*(.092+o()*.03);r(l[d%2],Tn(x,[0,t*.024,0]),[_,t*(a?.064:.104),_*.87],.21,5);for(let b of[-1,1]){let v=Tn(x,zn(m+b*1.18,t*.055,t*.05));s(ir[0],g,v,t*.012,t*.003,5);let M=t*(.063+o()*.027);r(l[c?2+(d+(b>0?1:0))%3:1+d%3],Tn(v,[0,t*.022,0]),[M,M*(a?.63:.88),M*.91],.21,5)}}let h=Tn(u(1),[0,t*.023,0]);r(l[2],h,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),Tn(h,zn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function y0(n,t,e){let i=Math.imul(Math.round(n*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:i}function x0(n,t){return Number.isFinite(t)?re.clamp(t,32,200):Da[n].height}function bE(n,{kind:t,x:e,z:i,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(Da,t)||![e,i,s].every(Number.isFinite))return!1;let a=x0(t,r),c=g0(y0(e,i,o)),l=c()*zi,u=dE(n,e,s,i,c);return t==="fan-palm"||t==="date-palm"?mE(u,a,l,t==="fan-palm"):t==="cypress"?gE(u,a,l):t==="shore-pine"?yE(u,a,l):xE(u,a,l,t),!0}function vE(n=0,t={}){let{windSpeed:e,windBearing:i,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?re.clamp(e,0,22):fE.has(r)?6:0,a=Number.isFinite(i)?(i%360+360)%360:270,c=re.degToRad(a),l=Number.isFinite(n)?Math.max(0,n)%m0:0;return{x:-sr(c),z:vu(c),phase:zi*l/m0,strength:s?0:o*.0048}}var _E=`
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
`;function b0(n){let t=new Set,e={roomcraftTreeDirection:{value:new Dt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function i(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${_E}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:f}=o;if(!Object.hasOwn(Da,a))return!1;let h=x0(a,c),d=g0(y0(l,u,f))()*zi;return bE({add(m,y,...p){let g=m.getAttribute("position"),x=new Float32Array(g.count*3);for(let _=0;_<g.count;_++)x[_*3]=g.getY(_)/h,x[_*3+1]=h,x[_*3+2]=d;m.setAttribute("roomcraftTreeWind",new Te(x,3)),i(n.material(y)),n.add(m,y,...p)}},o)}function r(o,a){let c=vE(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var lo=Math.PI/180,zf=14,I0=56,ME=21,Jn=-111,ss=-108,Hf=14,SE=28,Fa=28,P0=7,v0={minX:0,maxX:1536,minZ:0,maxZ:1024},kf={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Of={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},wE=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),EE=new Set(["snowy","snowy-rainy"]),_0={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42,artwork:38,mirror:39};function wu(n){let t=n>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Su(n,t,e){let i=!1;for(let s=0,r=n.points.length-1;s<n.points.length;r=s++){let o=n.points[s],a=n.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function L0(n,t,e,i=null){let s=null;for(let r of n){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||i!==null&&Math.abs(Math.cos(i-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function N0(n,t,e,i){let s=n.some(o=>Su(o,e-t.dz*23,i+t.dx*23));return n.some(o=>Su(o,e+t.dz*23,i-t.dx*23))&&!s?-1:1}function TE(n,t,e){let i=(typeof window>"u"?globalThis:window).RoomcraftInventory?.byType?.[e.type],s=i?.artFamily==="paddedPanel",r=_0[e.type]??(i?.mount==="wall"?s?0:_0.wallSconce:void 0);if(r===void 0)return null;let o=L0(t,e.x,e.y);if(!o||o.distance>38)return null;let{wall:a,centerX:c,centerZ:l}=o,u=(e.x-c)*-a.dz+(e.y-l)*a.dx,f=Math.abs(u)>4?Math.sign(u):N0(n,a,c,l),h=(zf/2+4+(s?e.h*.3:0))*f;return{x:c-a.dz*h,z:l+a.dx*h,angle:a.angle+(f<0?Math.PI:0),mountY:Math.min(r,I0-8)}}function M0(n){if(![n?.x1,n?.y1,n?.x2,n?.y2].every(Number.isFinite))return null;let t=n.x2-n.x1,e=n.y2-n.y1,i=Math.hypot(t,e);return i<1?null:{...n,dx:t/i,dz:e/i,length:i,angle:Math.atan2(e,t),openings:[]}}function S0(n,[t,e,i,s]){return n.x1===t&&n.y1===e&&n.x2===i&&n.y2===s||n.x1===i&&n.y1===s&&n.x2===t&&n.y2===e}function AE(n,[t,e,i,s]){return t===i&&n.x1===t&&n.x2===t?Math.min(n.y1,n.y2)<=Math.min(e,s)&&Math.max(n.y1,n.y2)>=Math.max(e,s):e===s&&n.y1===e&&n.y2===e?Math.min(n.x1,n.x2)<=Math.min(t,i)&&Math.max(n.x1,n.x2)>=Math.max(t,i):!1}function w0(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function _u(n,t,e){n.minX=Math.min(n.minX,t),n.maxX=Math.max(n.maxX,t),n.minZ=Math.min(n.minZ,e),n.maxZ=Math.max(n.maxZ,e)}function D0(n){return Object.hasOwn(Of,n.finish)?Of[n.finish]:Of.graphite}function F0(n,t,e){let i=t-n.x,s=e-n.z,r=Math.cos(n.angle),o=Math.sin(n.angle);return[i*r+s*o,-i*o+s*r]}function E0(n,t,e){let[i,s]=F0(n,t,e);if(Math.abs(i)>n.item.w/2+5||Math.abs(s)>n.item.h/2+5)return null;let r=re.clamp(s/n.item.h+.5,0,1);return ss-ss*r}function Mu(n,t,e){return Su(n,t,e)?!0:n.points.some((i,s)=>{let r=n.points[(s+1)%n.points.length],o=r.x-i.x,a=r.y-i.y,c=o*o+a*a,l=c?re.clamp(((t-i.x)*o+(e-i.y)*a)/c,0,1):0;return Math.hypot(t-i.x-l*o,e-i.y-l*a)<=zf/2})}function RE(n,t,e){let i=(n.x1+n.x2)/2,s=(n.y1+n.y2)/2,r=t.some(f=>Mu(f,i,s)),o=t.some(f=>Jr(f)&&Mu(f,i,s)&&Mu(f,n.x1,n.y1)&&Mu(f,n.x2,n.y2)),a=r?0:Jn,c=a;if(!o)for(let f of e){let h=E0(f,n.x1,n.y1),d=E0(f,n.x2,n.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=D0(n);return{...n,base1:a,base2:c,color:n.finish?l:"#896e79",postColor:n.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(n.length/SE)))}}function Gf(n){let t=n?.editableReferenceVersion>=8;if(n?.version!==2||!Array.isArray(n.rooms)||!Array.isArray(n.walls)||!Array.isArray(n.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=n.rooms.filter(v=>v?.points?.length>=3&&v.points.every(M=>Number.isFinite(M?.x)&&Number.isFinite(M?.y)));if(!e.length&&(!t||n.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let i=t?e.filter(v=>!Jr(v)):e,s=n.walls.map(M0).filter(Boolean),r=s.filter(v=>v.kind!=="fence"),o=n.items.filter(v=>typeof v?.id=="string"&&typeof v.type=="string"&&[v.x,v.y,v.w,v.h].every(Number.isFinite)&&v.w>0&&v.h>0),a=w0(),c=w0(),l=(v,M)=>_u(a,v,M);for(let v of e)for(let M of v.points)l(M.x,M.y);for(let v of s)l(v.x1,v.y1),l(v.x2,v.y2);for(let v of i)for(let M of v.points)_u(c,M.x,M.y);for(let v of r)_u(c,v.x1,v.y1),_u(c,v.x2,v.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:v0},f=new Map(r.map(v=>[v.id,v])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(v=>f.has(v))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([v,M])=>({x:v,y:M})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([v,M])=>({x:v,y:M})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(v=>h?!(v.id==="w3"&&S0(v,[400,408,342,468]))&&!(v.id==="w7"&&S0(v,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:v,x2:M,z1:R}=h.recess;if(M>v){let S=[[v,f.get("w12").y2,v,R],[v,R,M,R]];for(let[T,P]of S.entries()){if(d.some(z=>AE(z,P)))continue;let[N,B,O,F]=P,D=M0({id:`reference-recess-${T}`,x1:N,y1:B,x2:O,y2:F});D&&d.push(D)}}}let m=new Map;for(let v of o.filter(M=>M.type==="window")){let M=L0(d,v.x,v.y,(v.rotation||0)*lo);if(!M||M.distance>27)continue;let{wall:R,t:S,centerX:T,centerZ:P}=M,N=Math.max(1,S-v.w/2+1),B=Math.min(R.length-1,S+v.w/2-1);if(B-N<14)continue;R.openings.push({start:N,end:B});let O=N0(i,R,T,P),F=R.angle+(O<0?Math.PI:0),D=(N+B)/2;m.set(v.id,{x:R.x1+D*R.dx,z:R.y1+D*R.dz,angle:F,window:{...v,w:B-N+2,rotation:F/lo}})}let y=o.filter(v=>v.type==="garageDoor"),p=o.map(v=>{let M=v.type==="cameraThumbnail"&&y.some(D=>zE(v,D))?Jn:O0(v.type),R=cf(v),S=m.get(v.id)??TE(i,d,v);if(R){let D=52;for(let z of m.values()){let W=Math.hypot(z.x-v.x,z.z-v.y);W<D&&(S=z,D=W)}}let T=S?.x??v.x,P=S?.z??v.y,N=S?.angle??(Number.isFinite(v.rotation)?v.rotation*lo:0),B=v.type==="stairs"?1536:300,O=Math.min(B,(Math.abs(Math.cos(N))*v.w+Math.abs(Math.sin(N))*v.h)/2),F=Math.min(B,(Math.abs(Math.sin(N))*v.w+Math.abs(Math.cos(N))*v.h)/2);return l(T-O,P-F),l(T+O,P+F),{item:v,x:T,z:P,baseY:M,angle:N,window:S?.window,mountY:S?.mountY,isBlind:R}});for(let v of d)v.openings.sort((M,R)=>M.start-R.start||M.end-R.end);let g=p.filter(({item:v})=>v.type==="stairs").map(v=>{let{item:M,x:R,z:S,angle:T}=v,P=Number.isInteger(M.steps)&&M.steps>=2&&M.steps<=40?M.steps:Hf,N=Math.min(46,Math.max(12,M.w*.47)),B=-M.h/2-N;for(let O of[-M.w/2,M.w/2])l(R+O*Math.cos(T)-B*Math.sin(T),S+O*Math.sin(T)+B*Math.cos(T));return{...v,steps:P,apronDepth:N}}),x=s.filter(v=>v.kind==="fence").map(v=>RE(v,e,g)),_=lf(e,h,t),b=Wm(d.map(v=>({...v,palette:D0(v)})),zf,I0,ME);return Number.isFinite(a.minX)||Object.assign(a,v0),{rooms:e,walls:d,fences:x,stairs:g,placements:p,bounds:a,houseBounds:u,reference:h,floorStructure:_,wallStructure:b,editableStructure:t}}function T0(n,t){for(let[e,[i,s]]of t.slice(0,-1).entries())e===0?n.moveTo(i,-s):n.lineTo(i,-s);return n.closePath(),n}function Vf([n,...t]){let e=T0(new ln,n);return e.holes=t.map(i=>T0(new Vs,i)),e}function CE(n,t,e){let i=n.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d");if(!s)return null;let[r,o,a]=t,c=wu(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let m=c()*256,y=f+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(m,y),s.quadraticCurveTo(m+p/2,y+c()*2-1,m+p,y),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new ms(i);return l.colorSpace=$e,l.wrapS=l.wrapT=Bs,l}function Bf(n){let t=new Map,e=new ve,i=new xn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new Br({color:d})),a.get(d));function l(d,m,y,p,g,x=0){i.setFromAxisAngle(r,x),e.compose(s.set(y,p,g),i,o),d.applyMatrix4(e);let _=c(m);t.has(_)||t.set(_,[]),t.get(_).push(d)}function u(d,m,y,p,g,x,_,b=0){d>0&&m>0&&y>0&&l(new Ae(d,m,y),p,g,x,_,b)}function f(d,m,y,p,g,x,_){let b=new Re(1,9,6);b.scale(d,m,y),l(b,p,g,x,_)}function h(){for(let[d,m]of t){let y=Xn(m);if(!y){for(let p of m)n.add(new ce(p,d));continue}n.add(new ce(y,d));for(let p of m)p.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function IE(n,t,e,i){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(kf,r)?r:"oak";if(!s.has(a)){let c=kf[a],l=CE(i,c,141+Object.keys(kf).indexOf(a)*977);s.set(a,new Br({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Pi(Vf(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new ce(l,s.get(a));h.receiveShadow=!0,n.add(h)}}for(let r of e.floorStructure.footprint)A0(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)A0(t,r,Jn-1,-22,"#a18e84",!0)}function PE(n){if(!n.index){let t=n.getAttribute("position").count,e=new Uint32Array(t);for(let i=0;i<t;i++)e[i]=i;n.setIndex(new Te(e,1))}return n}function A0(n,t,e,i,s,r=!1){let o=new mi(Vf(t),{depth:i-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<i-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),n.add(PE(o),s,0,e,0)}function LE(n,t){let e=[],i=[],s=[];for(let[[o,a],[c,l]]of n){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),i.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new ue;return r.setAttribute("position",new Zt(e,3)),r.setAttribute("uv",new Zt(s,2)),r.setIndex(i),r.computeVertexNormals(),r}function R0(n,t){let e=new Pi(Vf(n));if(e.rotateX(-Math.PI/2),t){let i=e.index.array;for(let s=0;s<i.length;s+=3)[i[s+1],i[s+2]]=[i[s+2],i[s+1]];e.computeVertexNormals()}return e}function NE(n,t){for(let{faces:e,bottom:i,top:s,surface:r}of t.wallStructure){for(let o of e.top)n.add(R0(o,!1),r,0,s,0);for(let o of e.bottom)n.add(R0(o,!0),r,0,i,0);e.sides.length&&n.add(LE(e.sides,s-i),r,0,i,0)}}function DE(n,t){let e=new Set;for(let i of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:m}=i,y=l-c,p=new Ae(Math.hypot(u,y),5,P0);p.rotateZ(Math.atan2(y,u)),n.add(p,d,(s+o)/2,(c+l)/2+Fa,(r+a)/2,-f);for(let g=0;g<=h;g++){let x=g/h,_=re.lerp(s,o,x),b=re.lerp(r,a,x),v=re.lerp(c,l,x),M=[_,v,b].map(R=>Math.round(R*1e3)).join(",");e.has(M)||(e.add(M),n.box(5,Fa,5,m,_,v+Fa/2,b,-f))}}}function U0(n,t){let e=n/t,i=-ss/t,s=Math.min(5.5,e*.25),r=Math.min(1.8,s*.38);return{run:e,rise:i,noseDepth:s,lipDepth:r,height:a=>a===t-1?0:ss+(a+1)*i}}function k0(n,t,e,i,s=0,r=0){let{run:o,noseDepth:a,lipDepth:c,height:l}=U0(e,i);for(let u=0;u<i;u++){let f=r-e/2+o*u,h=l(u),d=h-3;n.box(t,d-Jn,o,"#a98075",s,(Jn+d)/2,f+o/2),n.box(t,3,o-a,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+a)/2),n.box(t,3.35,a-c,"#896254",s,d+3.35/2,f+(a+c)/2),n.box(t,3.4,c,"#f5d8b5",s,d+3.4/2,f+c/2)}}function FE({item:n,steps:t,apronDepth:e}){let i=new ie,s=Bf(i);k0(s,n.w,n.h,t);let r=ss-Jn;return s.box(n.w,r,e,"#c8b79e",0,Jn+r/2,-n.h/2-e/2),s.finish(),{root:i,anchorY:ss/2}}function UE(n,t){if(!t.reference)return;let{left:e,deckEdge:i,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=i-e,c=(i+e)/2,l=Hf,u=r-s,f=u/l,h=ss,d=-h/l;k0(n,a,u,l,c,(s+r)/2);for(let b=0;b<l;b++){let v=s+f*(b+.5),M=h+(b+1)*d;n.box(5,24,5,"#9f8183",e+4,M+12,v)}let m=f*(l-1),y=d*(l-1),p=new Ae(7,5,Math.hypot(m,y)+5);p.rotateX(-Math.atan2(y,m)),n.add(p,"#896e79",e+4,24-y/2,(s+r)/2),n.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[g,x]=o,_=Math.max(2,Math.ceil((x.x-g.x)/28));n.box(x.x-g.x,5,7,"#896e79",(x.x+g.x)/2,28,g.y);for(let b=0;b<=_;b++)n.box(5,28,5,"#9f8183",g.x+(x.x-g.x)*b/_,14,g.y)}function kE(n){let t=n.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let i=wu(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=i()*512,a=i()*512,c=20+i()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=i()*512,a=i()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+i()*3,1.2+i()*2.8)}let s=new ms(t);return s.wrapS=s.wrapT=Bs,s.repeat.set(15,10),s.colorSpace=$e,s.anisotropy=4,s}function OE(n,t,e,i){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=wu(150741);if(!t.editableStructure){let m=Math.min(90,c*.18),y=t.reference?t.reference.left+m/2:s+m/2;n.box(m,4,115,"#c7baa4",y,-109,o-88);for(let p=0;p<5;p++)n.box(m*.85,1.8,13,"#dbceba",y,-106,o-137+p*20)}let f=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[m,y]of f){let p=s+m*c,g=o+y*l,x=21+u()*24;n.ball(x*.94,9,x*.67,"#6d886a",p,-104,g),n.ball(x*.82,x*.57,x*.69,"#819b76",p+3,-98,g);for(let _=0;_<8;_++){let b=_*2.39996,v=(.2+u()*.5)*x,M=x*(.28+u()*.2),R=["#94ad7f","#a6ba88","#8da878","#bad09c"][_%4];n.ball(M*1.15,M*.8,M,R,p+Math.cos(b)*v,-93+12*u(),g+Math.sin(b)*v*.75)}for(let _=0;_<5;_++){let b=_%2?"#e6c4b1":"#fae6a4",v=p+(u()-.5)*x*1.14,M=g+x*(.62+u()*.43);n.ball(2.3,4.6,2.3,"#819765",v,-106,M),n.ball(3.9,1.8,3.3,b,v,-101.5,M),n.ball(1.2,.9,1.2,"#cb9c57",v,-100.3,M)}}let h=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],d=t.placements.filter(({item:m})=>m.type==="garageDoor"||m.type==="stairs");for(let[m,[y,p,g,x]]of h.entries()){let _=x*Da[y].radius+7,b=s+p*c,v=o+g*l,M=v<o?-1:1,R=b<(s+r)/2?-1:1;for(let[S,T]of[[0,0],[R*(_+20),0],[0,M*(_+20)]]){let P=b+S,N=v+T;if(!(N-_<=e.nearZ||P+_>s&&P-_<r&&N+_>o&&N-_<a||d.some(O=>{let F=P-O.x,D=N-O.z,z=F*Math.cos(O.angle)+D*Math.sin(O.angle),W=-F*Math.sin(O.angle)+D*Math.cos(O.angle);return Math.abs(z)<O.item.w/2+_&&Math.abs(W)<O.item.h*.6+_}))){i.add({kind:y,x:P,z:N,groundY:Jn,height:x,seed:7229+m*101});break}}}for(let[m,y,p,g]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])i.add({kind:y,x:s+p*c,z:e.farZ-g,groundY:Jn+.68,seed:m})}function BE(n,t,e){let i=wu(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(_,b)=>!(o&&_>=o.x1&&_<=o.x2&&b>=o.z1&&b<=o.z2)&&!t.rooms.some(v=>(!t.editableStructure||!Jr(v))&&Su(v,_,b)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let _=0;_<210;_++){let b=s.minX-70+(s.maxX-s.minX+140)*i(),v=c+l*i(),M=i()*180,R=8+i()*8,S=112+i()*34;a(b,v)&&r.push({x:b,z:v,phase:M,length:R,speed:S})}let u=new Float32Array(r.length*6),f=new Float32Array(r.length*3),h=new Float32Array(r.length*3),d=new ue,m=new ue,y=new ue;d.setAttribute("position",new Te(u,3).setUsage(On)),m.setAttribute("position",new Te(f,3).setUsage(On)),y.setAttribute("position",new Te(h,3).setUsage(On));let p=new Uo(d,new Dr({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),g=new Fr(m,new Hs({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),x=new Fr(y,new Hs({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=g.frustumCulled=x.frustumCulled=!1,n.add(p,g,x),(_,{condition:b,windSpeed:v,windBearing:M})=>{p.visible=wE.has(b);let R=b==="pouring"||b==="lightning-rainy";if(p.material.opacity=R?.5:.34,g.visible=EE.has(b),x.visible=b==="hail",p.visible||g.visible||x.visible){let S=Number.isFinite(M)?M*lo:285*lo,T=re.clamp(v??6,0,22)*.028;for(let[P,N]of r.entries()){let B=65-(N.phase+_*N.speed*(R?1.3:1))%170,O=65-(N.phase+_*20)%170,F=65-(N.phase+_*N.speed*1.55)%170,D=P*6;u.set([N.x,B,N.z,N.x+N.length*T*Math.sin(S),B+N.length,N.z-N.length*T*Math.cos(S)],D),f.set([N.x+Math.sin(_+P)*6,O,N.z],P*3),h.set([N.x,F,N.z],P*3)}d.attributes.position.needsUpdate=p.visible,m.attributes.position.needsUpdate=g.visible,y.attributes.position.needsUpdate=x.visible}}}function O0(n){return n==="garageDoor"?Jn:0}function zE(n,t){let e=n.x-t.x,i=n.y-t.y,s=(t.rotation??0)*lo,r=Math.cos(s),o=Math.sin(s);return Pm(t,e*r+i*o,-e*o+i*r)}function HE(n,t,e,i){let s=new G,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*i/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=n.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:m})=>o([[l,d,u],[l,d+Fa,u],[f,m,h],[f,m+Fa,h]])),c=n.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let m=Math.cos(f),y=Math.sin(f),p=[];for(let g of[-h.w/2,h.w/2])for(let[x,_]of[[-h.h/2-d,ss],[h.h/2,0]])p.push([l+g*m-x*y,_,u+g*y+x*m]);return o(p)});return[...a,...c]}function GE(n){let t=[...n.stairs];if(n.reference){let{left:h,deckEdge:d,stepTop:m,stepBottom:y}=n.reference;t.push({x:(h+d)/2,z:(m+y)/2,angle:0,item:{w:d-h,h:y-m},steps:Hf,apronDepth:80,apronOverhang:1})}let e=h=>Math.round(h*1e5)/1e5,i=t.flatMap(h=>{let{x:d,z:m,angle:y,item:p,apronDepth:g,apronOverhang:x=0}=h,_=(v,M)=>[e(d+v*Math.cos(y)-M*Math.sin(y)),e(m+v*Math.sin(y)+M*Math.cos(y))],b=(v,M,R)=>[[_(-v,M),_(v,M),_(v,R),_(-v,R)]];return[b(p.w/2,-p.h/2,p.h/2),b(p.w/2+x,-p.h/2-g,-p.h/2)]}),s=n.fences.map(({x1:h,y1:d,x2:m,y2:y,dx:p,dz:g})=>{let x=P0/2;return[[[h-g*x,d+p*x],[m-g*x,y+p*x],[m+g*x,y-p*x],[h+g*x,d-p*x]].map(b=>b.map(e))]}),r=er(n.floorStructure.footprint),o=i.length?C0.default.union(n.floorStructure.footprint,...i):n.floorStructure.footprint,a=er(iu(o,n.wallStructure,s)),c=t.map(h=>({stair:h,...U0(h.item.h,h.steps)})),l={height:0,rise:0};function u(h,d){if(r.contains(h,d))return l;let m;for(let{stair:y,run:p,rise:g,height:x}of c){let{item:_,steps:b,apronDepth:v,apronOverhang:M=0}=y,[R,S]=F0(y,h,d),T=S+_.h/2,P=T<0;if(Math.abs(R)>_.w/2+(P?M:0)||T<-v||T>_.h)continue;let N=Math.min(b-1,Math.floor(T/p)),B=P?ss:x(N);(!m||B>m.height)&&(m={height:B,rise:g})}return m}function f(h,d,m,y,p){if(!a.supportsRoute(h,d,m,y,p))return!1;if(!c.length)return!0;let g=Math.max(1,Math.min(8,...c.map(b=>b.run/2))),x=Math.min(256,Math.ceil(Math.hypot(m-h,y-d)/g)),_=u(h,d);for(let b=1;b<=x;b++){let v=b/x,M=u(re.lerp(h,m,v),re.lerp(d,y,v));if(!_||!M||Math.abs(_.height-M.height)>Math.max(_.rise,M.rise)+.01)return!1;_=M}return!0}return{...a,supportsRoute:f,floorAt:(h,d)=>a.contains(h,d)?u(h,d)?.height??null:null}}function VE(n){let{floorStructure:t,wallStructure:e}=n,i=n.editableStructure?t.foundation:lf(n.rooms.filter(s=>!Jr(s)),n.reference,!0).foundation;return{home:er(iu(i,e)),vacuum:er(iu(t.footprint,e)),presence:GE(n)}}function B0(n,t){let e=Gf(t),i=new zl({canvas:n,antialias:!0,alpha:!1,powerPreference:"low-power"});try{return i.resetState(),WE(n,t,e,i)}catch(s){throw z0(i),s}}function z0(n){try{n.getContext().isContextLost()||n.resetState()}finally{n.dispose()}}function WE(n,t,e,i){let s=t.sceneSettings,r={},o=new $i;o.background=new qt("#d7dfcd");let a=new Po(o.background),c=new vs(-800,800,450,-450,1,Ql),{minX:l,maxX:u,minZ:f,maxZ:h}=e.bounds,d=new Xe({color:"#e8e8d2",map:kE(n.ownerDocument),roughness:.95}),m;d.onBeforeCompile=({uniforms:Pt})=>{m=Pt.dfgLUT};let y=new ce(new Pn(6200,4200),d);y.rotation.x=-Math.PI/2,y.position.set((l+u)/2,Jn,(f+h)/2),o.add(y);let p=Bf(o),g=Bf(o),x=b0(g),_=Pg(e),b=Lg(p,_,Jn,y.geometry.parameters.width,y.position.x),v,{water:M}=Ng(p,_,Jn,e.houseBounds,y.geometry.parameters.width,y.position.x),R=M.shoreline.reduce((Pt,ft)=>Math.abs(ft.x-M.focusX)<Math.abs(Pt.x-M.focusX)?ft:Pt),S={road:{x:b.centerX,y:b.surfaceY+8,z:(b.lanes[0]+b.lanes[1])/2},coast:{x:M.focusX+16,y:M.y,z:R.z-36},beach:{x:M.focusX,y:M.y+8,z:R.z+37}};OE(p,e,_,x),UE(p,e),IE(o,p,e,n.ownerDocument),NE(p,e),DE(p,e.fences),p.finish();let T=o.children.length;g.finish();let P=o.children.slice(T),N=o.children.filter(Pt=>Pt.isMesh),B=Ym(i,o,e.bounds),O=qm();B.markStructure();let F=new Pn(16e4,16e4),{position:D,uv:z}=F.attributes;for(let Pt=0;Pt<z.count;Pt++)z.setXY(Pt,D.getX(Pt)/y.geometry.parameters.width+.5,D.getY(Pt)/y.geometry.parameters.height+.5);let W=new ce(F,d);W.name="Horizon foreground",W.rotation.copy(y.rotation),W.position.copy(y.position),W.position.y-=.12,W.receiveShadow=!0,W.visible=!1,o.add(W);let tt=Cg(M),K=t0(b),j=o0(M),X=c0(M,_);o.add(tt.mesh,K.root,j.root,X.root);let St=BE(o,e,_.sceneryMinZ),Et=e.floorStructure.footprint,{home:gt,vacuum:xt,presence:Ct}=VE(e),st=Ct.floorAt,ht=new $i,Mt=new $i,Bt;function kt(Pt,ft){if(Bt&&(Bt.removeFromParent(),Bt.geometry.dispose(),Bt.material.map.dispose(),Bt.material.dispose(),Bt=void 0),!Pt)return!0;let Nt=Pt.naturalWidth,Ht=Pt.naturalHeight;if(!(Nt>0&&Ht>0))return!1;let Wt=[[0,0],[Nt,0],[Nt,Ht],[0,Ht]].map(([qe,an])=>ns(ft,{x:qe,y:an}));if(Wt.some(qe=>!qe||Math.abs(qe.x)>1e4||Math.abs(qe.y)>1e4))return!1;let Jt=new ue;Jt.setAttribute("position",new Zt(Wt.flatMap(({x:qe,y:an})=>[qe,.82,an]),3)),Jt.setAttribute("uv",new Zt([0,1,1,1,1,0,0,0],2)),Jt.setIndex([0,2,1,0,3,2]);let be=new Mn(Pt);be.colorSpace=$e,be.needsUpdate=!0;let Je=new we({map:be,opacity:.48,transparent:!0,side:je,depthWrite:!1,toneMapped:!1});return Bt=new ce(Jt,Je),Bt.name="vacuum-lidar-overlay",o.add(Bt),!0}let q=Sg(),bt=Tg(Et);o.add(bt.root);let Z=new Xs("#fff5e1","#c9bfd7",1.8),J=new _s("#fff1d8",1.65);J.position.set(-4,9,6),ht.add(Z,J);let nt=new Map,ct=new Map,pt=new Set(e.placements.filter(({item:Pt})=>Pt.visualKind==="none").map(({item:Pt})=>Pt.id)),It=new Map,Lt=new Map(e.stairs.map(Pt=>[Pt.item.id,Pt]));for(let Pt of e.placements){let{item:ft,x:Nt,z:Ht,baseY:Wt,angle:Jt,window:be,mountY:Je,isBlind:qe}=Pt,an=ft.type==="window"&&be?be:ft,cn=Lt.get(ft.id),Ne=cn?FE(cn):Lm(an,{window:qe?be:void 0,mountY:Je})??Tm(an,{mountY:Je});if(Ne){let Hi=eg(ft,Ne.root);if(Ne.root.position.set(Nt,Wt+Hi,Ht),Ne.root.rotation.y=-Jt,Ne.dock&&(Ne.dock.position.set(Nt,Wt,Ht),Ne.dock.rotation.y=-Jt,o.add(Ne.dock)),Ne.floorRadius){let Qn=Ne.floorRadius,Me=(ot,vt)=>xt.clearance(ot,vt)>=Qn,I=(ot,vt,yt,mt)=>xt.supportsRoute(ot,vt,yt,mt,Qn);Ne.dockFits=Me(Nt,Ht),Ne.root.name=ft.id,Ne.liveMotion=Ea({allowsPoint:Me,allowsRoute:I,duration:.42}),Ne.demoMotion=Ea({allowsPoint:Me,allowsRoute:I,duration:0})}o.add(Ne.root),ct.set(ft.id,Ne),ft.type==="garageDoor"&&It.set(Ne.root,ft.id),B.register(ft,Ne)}nt.set(ft.id,{x:Nt,z:Ht,baseY:Wt,rootY:Ne?.root.position.y,object:Ne})}let Ft=e.placements.filter(({item:Pt,baseY:ft})=>ft===0&&ct.has(Pt.id)),zt=bf(Ft),$=zt,oe={supportsRoute:Ct.supportsRoute,floorClearance:Ct.clearance,allowsBodyPoint:(Pt,ft,Nt,Ht)=>!$.blocksPoint(Pt,ft,Nt,Ht),allowsBodyRoute:(Pt,ft,Nt,Ht,Wt,Jt)=>!$.blocksRoute(Pt,ft,Nt,Ht,Wt,Jt)},Yt=mf(ht,st,{occlusionScene:Mt,...oe,seats:ng(e.placements,ct,gt.clearance)}),H,A=Yt,rt=p0(e.placements,ct),dt=rt.resolve(),_t=dt,V,w=!1,E={...e.bounds,sceneryMinZ:_.sceneryMinZ,waterfront:{minX:M.focusX-475,maxX:M.focusX+605,minZ:R.z-352,maxZ:R.z+88}};for(let Pt of e.placements){let ft=ct.get(Pt.item.id);if(!ft)continue;let Nt=dt.get(Pt.item.id);if(Nt&&(ft.root.position.y=Nt.y),ft.root.scale.y!==1||Nt?.supportId){let{max:Ht}=new Ue().setFromObject(ft.root);Number.isFinite(Ht.y)&&(E.maxY=Math.max(E.maxY??92,Ht.y))}}let C=new G,U=!1,k=0,Q=0,Y=es(),ut,lt=new Ss,Rt=new $n(new G(0,1,0),0),L=new G,et=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function it(){tg(c,E,k,Q,Y,ut);let Pt=Km(Y.tilt);if(o.fog=Pt?a:null,W.visible=!!Pt,Pt){let ft=c.far-Ql;a.near=Pt.near+ft,a.far=Pt.far+ft}}function Tt(Pt,ft){if(U||Pt<1||ft<1||Pt===k&&ft===Q)return;k=Pt,Q=ft;let Nt=n.ownerDocument.defaultView?.devicePixelRatio||1;i.setPixelRatio(Math.min(Nt,1.5,Math.sqrt(27e5/(Pt*ft)))),i.setSize(Pt,ft,!1),it()}function At(Pt,ft){return Y=es(Pt),ut=ft,!U&&k>0&&Q>0&&it(),wt()}function wt(){return{...Y}}function Ut(Pt){if(typeof Pt=="string"){if(Object.hasOwn(S,Pt))return{...S[Pt]};let ft=nt.get(Pt);if(!ft)return null;let{x:Nt,z:Ht,baseY:Wt,object:Jt}=ft;return Jt?{x:Nt,y:Jt.root.position.y+(Jt.anchorY??0)*Jt.root.scale.y,z:Ht}:{x:Nt,y:Wt+6,z:Ht}}return[Pt?.x,Pt?.y].every(Number.isFinite)?{x:Pt.x,y:(st(Pt.x,Pt.y)??0)+22,z:Pt.y}:null}function Ot(Pt,ft){return U||!Number.isFinite(Pt)||!Number.isFinite(ft)||k<=0||Q<=0?!1:(lt.setFromCamera(new Dt(Pt/k*2-1,1-ft/Q*2),c),!0)}function le(Pt,ft,Nt,{preferTabletop:Ht=!1}={}){if(!Ot(Pt,ft))return null;if(Ht){let Wt=rt.projectTabletop(Nt,lt);if(Wt)return Wt}return Rt.constant=-O0(Nt),lt.ray.intersectPlane(Rt,L)?{x:L.x,y:L.z}:null}function se(Pt,ft){if(!It.size||!Ot(Pt,ft))return null;let Nt=[];for(let Wt of It.keys())Wt.traverseVisible(Jt=>{Jt.isMesh&&Nt.push(Jt)});let Ht=lt.intersectObjects(Nt,!1)[0];if(!Ht||lt.intersectObjects(N,!1).some(Wt=>Wt.distance<Ht.distance-.01))return null;for(let Wt=Ht.object;Wt;Wt=Wt.parent)if(It.has(Wt))return It.get(Wt);return null}function _e(Pt=!1){bt.root.visible=!Pt&&Y.preset!=="waterfront",Bt&&(Bt.visible=!Pt&&Y.preset!=="waterfront"),i.render(o,c);let ft=(Pt||r.showAvatars!==!1)&&Y.preset!=="waterfront"&&A?.hasVisibleTracks,Nt=!Pt&&Y.preset!=="waterfront"&&q.scene.children.length>0;if(!(!ft&&!Nt)){i.autoClear=!1;try{ft&&(Pt||(A.orientOcclusionCues(c),i.render(Mt,c)),i.render(ht,c)),Nt&&(i.clearDepth(),i.render(q.scene,c))}finally{i.autoClear=!0}}}function Ee(Pt={}){r=Pt,s={...t.sceneSettings,...Pt.features},bt.setOpacity(Pt.heatMapOpacity)}function on(Pt,ft,Nt=!1){let Ht=ft.beachActivity??(ft.night?"overnight":"day"),Wt={reduceMotion:ft.reduceMotion===!0,night:ft.night===!0,condition:ft.condition,transientTelemetry:Nt,activity:Ht};K.root.visible=Ht!=="overnight"&&(Nt||bi(s,"sidewalk")),j.root.visible=Nt||bi(s,"boats"),X.root.visible=Nt||bi(s,"beachPlay"),K.root.visible&&K.update(Pt,Wt),j.root.visible&&j.update(Pt,Wt),X.root.visible&&X.update(Pt,Wt);let Jt=Nt||bi(s,"trees");for(let be of P)be.visible=Jt;Jt&&x.update(Pt,ft),tt.update(Pt,Nt||bi(s,"reflections")?ft:{...ft,reflections:!1})}function Ye(Pt=0,ft={},Nt={},{animateTelemetry:Ht=!0,showTelemetryPosition:Wt=!0,draftPositions:Jt,transientTelemetry:be=!1}={}){if(U||k<1||Q<1)return;be||(Nt=Vl(Nt,s));let Je=Nt.reduceMotion===!0,qe=!Je&&Number.isFinite(Pt)?Pt:0,an=ts(Nt);Nt={...Nt,solar:be?an:O(an,qe,Je)};let cn=Ht?qe:0,Ne=be||bi(s,"traffic");Ne&&!v&&Nt.traffic&&(v=Zg(b),o.add(v.root)),v&&(v.root.visible=Ne,Ne&&v.update(Pt,Nt.traffic,{reduceMotion:Je,night:Nt.night===!0,transientTelemetry:be,headlightBrightness:be?1:r.headlightBrightness})),St(cn,be||bi(s,"precipitation")?Nt:{}),on(Pt,Nt,be);let Hi=V!==Jt;Hi&&(V=Jt,_t=Jt?rt.resolve(Jt):dt,$=Jt?bf(Ft.map(Me=>{let I=Jt[Me.item.id]?.position;return I?{...Me,x:I.x,z:I.y}:Me})):zt),w=!1;for(let[Me,I]of ct){let ot=pt.has(Me),vt=ot?et:ft[Me]??et,{visible:yt,position:mt}=I.root,Xt=Jt?.[Me]?.position,$t=!1;if(I.floorRadius&&!ot&&Wt&&!Xt){let fe=be?I.demoMotion:I.liveMotion;!be&&I.demoMotion.hasPosition&&I.demoMotion.clear();let ge=fe.observe(vt.position,Pt,{observation:vt.positionObservedAt,reduceMotion:Je});!ge&&(vt.state==="docked"||vt.wrongMap)&&fe.clear();let Qt=fe.sample(Pt,Je);Xt=Qt,$t=ge&&Qt?.current===!0,I.root.visible=!!(Qt||!fe.hasPosition&&I.dockFits)}else I.floorRadius&&(I.root.visible=!0);let Gt=nt.get(Me),jt=Xt?.x??Gt.x,te=Xt?.y??Gt.z;w||=!!(I.floorRadius&&(yt!==I.root.visible||mt.x!==jt||mt.z!==te)),I.root.position.x=jt,I.root.position.y=_t.get(Me)?.y??Gt.rootY,I.root.position.z=te,I.animate?.(vt,I.ambientMotion?qe:cn,$t,be)}B.update(Nt,ft,d,Hi),o.fog&&a.color.copy(o.background);let Qn=be?H:Yt;A!==Qn&&(A?.setVisible(!1),be||H?.setTracks([],0),A=Qn,A?.setVisible(!0)),A?.render(Pt,Je,!Jt&&(be||r.seatedPoses!==!1)),_e(be)}function dn(Pt,ft,Nt={}){U||(Nt.transientTelemetry?(!H&&Pt?.length&&(H=mf(ht,st,oe),H.setVisible(!1)),H?.setTracks(Pt,ft,Nt)):Yt.setTracks(Pt,ft,Nt))}function nn(Pt){if(Y.preset==="waterfront")return null;let ft=nt.get(Pt);if(!ft||k<1||Q<1)return null;let{x:Nt,z:Ht,baseY:Wt,object:Jt}=ft;if(Jt){if(!Jt.root.visible)return null;C.set(Jt.anchorOffset?.x||0,Jt.anchorY||0,Jt.anchorOffset?.z||0),Jt.root.localToWorld(C)}else C.set(Nt,Wt+6,Ht);return C.project(c),{x:(C.x+1)/2,y:(1-C.y)/2}}function pn(){if(U)return;U=!0,kt(null),Yt.dispose(),H?.dispose(),q.dispose(),bt.dispose(),v?.dispose(),K.dispose(),j.dispose(),X.dispose();let Pt=new Set,ft=new Set,Nt=new Set;o.traverse(Ht=>{Ht.geometry&&Pt.add(Ht.geometry);for(let Wt of Array.isArray(Ht.material)?Ht.material:[Ht.material])if(Wt){ft.add(Wt);for(let Jt of Object.values(Wt))Jt?.isTexture&&Nt.add(Jt)}});for(let Ht of Nt)Ht.dispose();for(let Ht of Pt)Ht.dispose();for(let Ht of ft)Ht.dispose();B.dispose(),m?.value?.dispose(),z0(i)}return{resize:Tt,render:Ye,anchor:nn,setView:At,getView:wt,getDemoFocus:Ut,projectToPlan:le,pickGarage:se,exteriorClearance:()=>HE(e,c,k,Q),dispose:pn,hasAmbientMotion:!0,setPeople:dn,setDisplaySettings:Ee,setVacuumMapOverlay:kt,setDetectionZones:q.setZones,setHeatMap:bt.setHistory,get trackedControlChanged(){return w},get hasPendingReacquisition(){return Yt.hasPendingReacquisition||[...ct.values()].some(Pt=>Pt.liveMotion?.pendingReacquisition)},canPlacePerson:(Pt,ft)=>Number.isFinite(st(Pt,ft)),personFloorAt:st,nearestPersonPoint:(Pt,ft,Nt=128)=>mg(Pt,ft,Nt,(Ht,Wt)=>Number.isFinite(st(Ht,Wt))&&Ct.clearance(Ht,Wt)>=eu&&oe.allowsBodyPoint(Ht,Wt,eu)),get hasPeopleMotion(){return A?.hasMotion??!1}}}var H0=.35,Eu=7.5,XE=8;function G0(n,{getView:t,onChange:e,canStart:i=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,g]=s.values();return Math.hypot(p.x-g.x,p.y-g.y)};function a(p,g){let x=es({...p,...g});(x.azimuth!==p.azimuth||x.tilt!==p.tilt||x.zoom!==p.zoom)&&e(x)}function c(p){n.hasPointerCapture(p)&&n.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!i(p))return;let g=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!g||!s.values().next().value.touch))){try{n.setPointerCapture(p.pointerId)}catch{return}s.size||n.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:g}),p.preventDefault()}}function f(p){let g=s.get(p.pointerId);if(!g)return;let x=r();if(!x){l();return}let _=s.size===2,b=_?o():0,v={x:p.clientX,y:p.clientY,touch:g.touch};if(s.set(p.pointerId,v),p.preventDefault(),_){let M=o();Math.min(b,M)>=XE&&a(x,{zoom:x.zoom*M/b});return}a(x,{azimuth:x.azimuth-(v.x-g.x)*H0,tilt:x.tilt+(v.y-g.y)*H0})}function h(p){s.delete(p.pointerId)&&c(p.pointerId)}function d(p){let g=r();if(!g||!Number.isFinite(p.deltaY)||!p.deltaY)return;let x=p.deltaMode===1?16:p.deltaMode===2?n.clientHeight:1,_=Math.max(-350,Math.min(350,p.deltaY*x));p.preventDefault(),p.stopPropagation(),a(g,{zoom:g.zoom*Math.exp(-_*.002)})}function m(p){let g=r();if(!g||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let x;switch(p.key){case"ArrowLeft":x={azimuth:g.azimuth-Eu};break;case"ArrowRight":x={azimuth:g.azimuth+Eu};break;case"ArrowUp":x={tilt:g.tilt-Eu};break;case"ArrowDown":x={tilt:g.tilt+Eu};break;case"+":case"=":x={zoom:g.zoom*1.1};break;case"-":x={zoom:g.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(g,x)}let y=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",m]];for(let[p,g,x]of y)n.addEventListener(p,g,x);return{cancel:l,dispose(){l();for(let[p,g,x]of y)n.removeEventListener(p,g,x)}}}var TI=1200*1e3,AI=new Map([["s",1/60],["min",1],["h",60]]);var qE="roomcraft.traffic-vehicle-style.v1";function V0(n){try{let t=n.localStorage.getItem(qE);return fu.some(({id:e})=>e===t)?t:""}catch{return""}}(n=>{"use strict";let t=new Set(["hs","xy","rgb","rgbw","rgbww"]),e=new Set(["brightness","color_temp","white",...t]),i=r=>typeof r=="number"&&Number.isFinite(r);function s(r={}){r??={};let o=Array.isArray(r.supported_color_modes)?r.supported_color_modes:[],a=o.some(_=>e.has(_))||i(r.brightness),c=o.some(_=>t.has(_)),l=o.includes("white")&&c,u=Number.isInteger(r.supported_features)?r.supported_features:0,f=!!(u&32),h=!!(u&8),d=!!(u&4),m=Array.isArray(r.effect_list)?[...new Set(r.effect_list.filter(_=>typeof _=="string"&&_.trim()))]:[],y=r.min_color_temp_kelvin,p=r.max_color_temp_kelvin,g=o.includes("color_temp")?i(y)&&i(p)&&y>0&&p>y?{min:Math.round(y),max:Math.round(p)}:{min:2e3,max:6535}:null,x=["On/off"];return a&&x.push("Brightness"),g&&x.push("White temperature"),c&&x.push("Color"),l&&x.push("White mode"),(d||m.length)&&x.push("Effects"),f&&x.push("Fade duration"),h&&x.push("Flash"),{brightness:a,temperature:g,color:c,white:l,effects:m,transition:f,flash:h,labels:x}}n.RoomcraftLightCapabilities=Object.freeze({describe:s})})(typeof window>"u"?globalThis:window);var UI=1200*1e3,kI=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function W0(n,t,e){let i=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...n].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,m,y=1/0;for(let g=0;g<=h&&(f||!d);g++)for(let[x,_]of g===0?s.slice(0,1):s.slice(1)){let b=o(a.x+x*g*34,c/2,t-c/2),v=o(a.y+_*g*34,l/2,e-l/2);if(i.some(S=>Math.abs(b-S.x)<(c+S.w)/2+2&&Math.abs(v-S.y)<(l+S.h)/2+2))continue;if(g<=3&&!d&&(d={...a,x:b,y:v,w:c,h:l}),!f)break;if(u.some(S=>b+c/2>S.left&&b-c/2<S.right&&v+l/2>S.top&&v-l/2<S.bottom))continue;let R=Math.hypot(b-a.x,v-a.y);R<y&&(m={...a,x:b,y:v,w:c,h:l},y=R)}let p=m??d;p&&i.push(p)}return i}var $0=ho(Zr(),1),X0="roomcraft-presence-v1",rs=4500,Yf=/^sensor\.[a-z0-9_]+$/,Z0=/^binary_sensor\.[a-z0-9_]+$/,YE=4,Xf=1536,qf=1024,$E=[[[0,0],[Xf,0],[Xf,qf],[0,qf],[0,0]]],q0=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],ZE=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...q0.map(([n,t])=>[t,n]),...q0.slice(1,-1).reverse().map(([n,,t])=>[t,n])]}]]);function $f(n,t){return n>=0&&n<=Xf&&t>=0&&t<=qf}function Ua([n,t,e,i,s,r],o,a){return{x:n*o+t*a+e,y:i*o+s*a+r}}function Tu(n){return Array.isArray(n)&&n.length===6&&n.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(n[0]*n[4]-n[1]*n[3])>1e-5}function j0(n){if(!Array.isArray(n)||n.length!==4||!n.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,i,s]=n;return t>=e||i>=s?null:[[t,i],[e,i],[e,s],[t,s]]}function K0(n){let t=[],e=0;for(let i of n){let s=i.presenceTrackTransform;if(i.type!=="presenceSwitch"||!Tu(s))continue;let[,r,o,,a,c]=s,l=ZE.get(i.presenceTrackProfile),u=Math.hypot(r,a),f=$f(o,c)?{origin:{x:o,y:c},forward:{x:r/u,y:a/u}}:{},h=t.length;for(let[d,m]of[["configured",j0(i.presenceTrackZone)],["nominal",l?.ring]]){if(!m)continue;let y=m.map(([p,g])=>{let x=Ua(s,p,g);return[x.x,x.y]});for(let[p]of $0.default.intersection([y],$E))t.push({id:i.id,kind:d,points:p.slice(0,-1).map(([g,x])=>({x:g,y:x})),...f,...d==="nominal"?{rangeMeters:l.rangeMeters}:{}})}if(t.length>h&&++e===12)break}return t}function Y0(n){let t=new Set,e=[];for(let i of Array.isArray(n)?n.slice(0,YE):[]){if(!Number.isInteger(i?.id)||i.id<-128||i.id>255||t.has(i.id)||![i.x,i.y].every(r=>Number.isFinite(r)&&Math.abs(r)<=800))continue;t.add(i.id);let s={id:i.id,x:i.x,y:i.y};Number.isFinite(i.z)&&Math.abs(i.z)<=800&&(s.z=i.z),Number.isFinite(i.speed)&&Math.abs(i.speed)<=32768&&(s.speed=i.speed),e.push(s)}return e}function J0(n={},t=[]){let e={};for(let i of new Set(t)){let s=n[i];if(Z0.test(i)&&["on","off","unknown","unavailable"].includes(s?.state)){e[i]={state:s.state};continue}let r=s?.attributes;!Yf.test(i)||r?.tracking_schema!==X0||(e[i]={state:s.state,attributes:{tracking_schema:X0,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(o=>typeof o=="boolean"?o:null):[],tracks:Y0(r.tracks),...Number.isFinite(r.last_observed_at)?{last_observed_at:r.last_observed_at,last_tracks:Y0(r.last_tracks)}:{}}})}return e}function Zf(n,t,e=Date.now()){let i=[],s=new Set;for(let r of n){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!Yf.test(o||"")||s.has(o)||!Tu(a))continue;s.add(o);let c=J0(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!(!Number.isFinite(l)||l>e+1e3||e-l>=rs))for(let f of u){let{x:h,y:d}=Ua(a,f.x,f.y);$f(h,d)&&i.push({id:o+":"+f.id,x:h,y:d,expiresAt:l+rs})}}return i}var jf=n=>n?.type==="presenceSwitch"?Yf.test(n.presenceTrackEntityId??"")?n.presenceTrackEntityId:Z0.test(n.presenceEntityId??"")?n.presenceEntityId:null:null;function Wf(n,t){let e=n.presenceTrackTransform,i=[{x:n.x,y:n.y}];if(Tu(e)){let s=j0(n.presenceTrackZone),r=Ua(e,0,100);if(i.unshift(r),s){let[o,,a]=s;i.unshift(Ua(e,(o[0]+a[0])/2,(o[1]+a[1])/2))}}for(let s of i){if(!Number.isFinite(s.x)||!Number.isFinite(s.y))continue;let r=t(s.x,s.y,128);if(r)return r}return null}function Q0(){let n=new Map;return{read(t,e,i,{contains:s,nearest:r}){let o=new Map;for(let c of t){let l=jf(c);l&&!o.has(l)&&o.set(l,c)}for(let c of n.keys())o.has(c)||n.delete(c);let a=[];for(let[c,l]of o){let u=e[l.presenceEntityId]?.state,f=J0(e,[l.presenceTrackEntityId])[l.presenceTrackEntityId],h=f?.attributes,d=h?.zones_observed_at,y=f?.state!=="unavailable"&&Number.isFinite(d)&&d<=i+1e3&&i-d<rs&&h.zones.some(T=>T===!0);if(u==="off"){n.delete(c);continue}let p=u==="on"||y,g=h?.observed_at,x=!["0","unknown","unavailable",void 0].includes(f?.state)&&Number.isFinite(g)&&g<=i+1e3&&i-g<rs&&h.tracks.length>0,_=u==="on"?void 0:Math.max(y?d+rs:0,x?g+rs:0);if(!p&&f?.state==="0"){n.delete(c);continue}let b=l.presenceTrackTransform,v=JSON.stringify([l.presenceEntityId,b]),M=n.get(c);M?.key!==v&&(n.delete(c),M=void 0);let R=Zf([l],e,i).filter(T=>s(T.x,T.y)),S=R[0];if(!S&&p&&f?.state!=="unavailable"&&Tu(b)){let T=h?.last_observed_at??h?.observed_at,P=h?.last_tracks??h?.tracks??[];if(Number.isFinite(T)&&T<=i+1e3&&(!M||T>M.observedAt))for(let N of P){let B=Ua(b,N.x,N.y);if(!(!$f(B.x,B.y)||!s(B.x,B.y))){S={id:c+":"+N.id,...B,expiresAt:T+rs};break}}}if(S&&(!M||S.expiresAt-rs>=M.observedAt)&&(M={key:v,observedAt:S.expiresAt-rs,point:S},n.set(c,M)),R.length)for(let T of R)a.push({...T,keepVisible:!0,fallback:r(T.x,T.y,52)??Wf(l,r)});else if(p||x&&M){let T=M?.point;if(T&&s(T.x,T.y))a.push({id:T.id,x:T.x,y:T.y,quality:"last-known",keepVisible:!0,expiresAt:_,fallback:r(T.x,T.y,52)??Wf(l,r)});else{let P=Wf(l,r);P&&a.push({id:c+":area",...P,quality:"area",keepVisible:!0,expiresAt:_})}}}return a},clear(){n.clear()}}}var Kf=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),ey=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),ny=Object.freeze([...Kf].map(([n,[t]])=>Object.freeze({id:n,label:n==="lightning-rainy"?"Thunderstorms with rain":t}))),iy=Object.freeze([...ey]),ty=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function sy(n={},t=!1){let{condition:e,daylightKnown:i,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h,windSpeed:d,windBearing:m,cloudCoverage:y}=n;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,g,x]=Kf.get(e)||["Weather unavailable","unknown","none"],_=i?s:e==="clear-night",b=i?!s:e==="sunny",v=Number.isFinite(d)&&d>=0?d:void 0,M=Number.isFinite(m)?(m%360+360)%360:void 0,R=M===void 0?"":ty[Math.round(M/22.5)%ty.length],S=v===void 0?"":v===0?"Calm wind":`Wind ${R?`from ${R} at `:""}${Math.round(v*10)/10} m/s`;return{label:p,sky:_?"night":b?"day":"unknown",effect:g,cloud:x,moon:_&&ey.has(r)?r:"",reading:Kf.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:v,windBearing:M,windReading:S,cloudCoverage:Number.isFinite(y)&&y>=0&&y<=100?y:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:f,moonElevation:h}}var jE=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],KE=jE.map(([n,t,e])=>`
  <svg class="coastal-constellation coastal-${n}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([i,s],r)=>`<circle cx="${i}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),JE=["#c2d7ed","#e4edff","#fff0d2"];function ry(n,t){let e=t?11939:30391,i=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:n},(s,r)=>{let o=1+(r+i())*98/n,a=5+i()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${JE[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var ly=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-twilight"></span>
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${KE}
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
  </div>`,uo=(n,t,e)=>Math.max(t,Math.min(e,n)),oy=n=>Number.isFinite(n)&&Math.abs(n)<=90,Jf=n=>Number.isFinite(n)&&n>=0&&n<=360,Qf=75,ay=n=>76-58*uo(n/Qf,0,1),uy=n=>50+38*n,QE=n=>uy(Math.sin(n*Math.PI/180)),tT=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function eT(n,t){let e=[];for(let[i,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+n*50*Math.sin(a)*i,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var nT=new Map([...tT].map(([n,t])=>[n,eT(...t)])),iT=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function sT(n,t,e,i,s,r,o){let c=(n==="night"&&!t?iT.get(e)??0:0)*uo(1-(i??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=uo(l,0,1),f=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:f}}function rT(n={},t=!1){let e=sy(n,t),{sky:i,effect:s,cloud:r,moon:o,sunElevation:a,sunAzimuth:c,moonElevation:l,moonAzimuth:u,windSpeed:f,windBearing:h,cloudCoverage:d}=e,m=ts(t?{}:n),{phase:y}=m,{skyTimeSeconds:p,skyProgress:g,reduceMotion:x=!1}=t?{}:n,_=oy(a),b=y==="sunrise"||y==="sunset",v=Number.isFinite(p)&&!x?Math.max(0,p):void 0,M=Number.isFinite(g)&&!x?uo(g,0,1):void 0,R=M===void 0?void 0:Math.sin(M*Math.PI)*Qf,S=M??(v===void 0?void 0:.5-.5*Math.cos(v*Math.PI/480)),T=_?m.elevation:R??m.elevation,P=Jf(c)||M===void 0?uy(m.east):83-66*M,N=Jf(u)?QE(u):S===void 0?55:18+64*S,B=S===void 0?38:Math.sin(S*Math.PI)*Qf,O=ay(oy(l)?l:B),F=!t&&!x&&!Jf(u)&&M===void 0&&v===void 0?"ambient":"fixed",D=h===void 0?void 0:h*Math.PI/180,z=D===void 0?9:-Math.sin(D)*12,W=D===void 0?-2:Math.cos(D)*4,tt=f===void 0?s==="wind"||s==="wind-clouds"?2.5:1:f===0?0:uo(f*.25,.32,4.8),K=d===void 0?1:uo(d/52,0,1);return{sky:i,effect:s,cloud:r,moon:o,light:b?"twilight":"regular",clock:v,reduceMotion:x,moonMotion:F,sunX:P,sunY:ay(T),moonX:N,moonY:O,solarPhase:i==="unknown"?"unknown":y,solarDaylight:m.daylight,solarDisc:m.disc,solarCloud:m.cloud,twilightGlow:m.twilight*(1-.42*m.cloud),horizonHaze:m.twilight*(.34+.2*m.cloud),moonOutline:nT.get(o)||"circle(50%)",windX:z,windY:W,cloudSpeed:tt,cloudOpacity:K,...sT(i,b,s,d,v,M,x)}}function hy(n,t,e=!1){let i=rT(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:f,cloudSpeed:h,cloudOpacity:d,solarPhase:m,solarDaylight:y,solarDisc:p,solarCloud:g,twilightGlow:x,horizonHaze:_,starOpacity:b,meteor:v,meteorProgress:M,meteorOpacity:R}=i,S={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(h===0),skyReduced:String(f),solarPhase:m,stars:b>0?"visible":"hidden",meteor:v};for(let[P,N]of Object.entries(S))n.dataset[P]!==N&&(n.dataset[P]=N);let T={"--coastal-sun-x":`${i.sunX.toFixed(2)}%`,"--coastal-sun-y":`${i.sunY.toFixed(2)}%`,"--coastal-solar-x":`${i.sunX.toFixed(2)}%`,"--coastal-daylight":`${(y*100).toFixed(2)}%`,"--coastal-solar-disc":p.toFixed(3),"--coastal-solar-cloud":g.toFixed(3),"--coastal-twilight-glow":x.toFixed(3),"--coastal-twilight-color":`${(x*100).toFixed(2)}%`,"--coastal-horizon-haze":_.toFixed(3),"--coastal-moon-x":`${i.moonX.toFixed(2)}%`,"--coastal-moon-y":`${i.moonY.toFixed(2)}%`,"--coastal-moon-outline":i.moonOutline,"--coastal-wind-x":`${i.windX.toFixed(3)}vw`,"--coastal-wind-y":`${i.windY.toFixed(3)}px`,"--coastal-wind-speed":String(h||1),"--coastal-cloud-cover":String(d),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":b.toFixed(3),"--coastal-meteor-progress":M.toFixed(3),"--coastal-meteor-opacity":R.toFixed(3)};for(let[P,N]of Object.entries(T))n.style.getPropertyValue(P)!==N&&n.style.setProperty(P,N)}var cy=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,fy=`
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
    background:${ry(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${ry(13,!0)};
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
  @keyframes coastal-drift ${cy}
  @keyframes coastal-sampled-drift ${cy}
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
`;var oT=2500,td=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),dy={dawn:[-6,92,!0,"overnight"],sunrise:[2,99,!0,"morning"],morning:[19,114,!0,"morning"],day:[40,160,!0,"day"],sunset:[2,253,!1,"day"],dusk:[-6,265,!1,"evening"],night:[-16,290,!1,"evening"],overnight:[-30,290,!1,"overnight"]},aT=n=>n.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function cT({condition:n,daylight:t,moonPhase:e,windSpeed:i,windBearing:s}){let r=n==="clear-night"&&(t==="morning"||t==="day")?"night":t,[o,a,c,l]=dy[r]??dy.day,u=o<-.83;return{...td,condition:n,night:u,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:i,windBearing:s,sunRising:c,beachActivity:l}}function py(n,t,{api:e,viewport:i,bridge:s,onChange:r}){let o=n.getElementById("sceneSettingsDialog"),a=n.getElementById("sceneSettingsButton"),c=n.getElementById("sceneFeatures"),l=n.getElementById("sceneDockAlignment"),u=n.getElementById("scenePreviewMode"),f=n.getElementById("scenePreviewMotion"),h=n.getElementById("scenePreviewSource"),d=n.getElementById("scenePreviewWeather"),m=n.createElement("style");m.textContent=fy,n.head.append(m);let y=n.createElement("template");y.innerHTML=ly.trim();let p=y.content.firstElementChild;p.hidden=!0,i.before(p);try{f.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let g=um.map(({key:gt,label:xt})=>{let Ct=n.createElement("label");Ct.className="scene-feature";let st=n.createElement("input");return st.type="checkbox",st.addEventListener("change",()=>e.setSceneSetting(gt,st.checked)),Ct.append(st,xt),c.append(Ct),{key:gt,input:st}});function x(gt,xt){let Ct=n.createElement("label");return Ct.textContent=gt,Ct.append(xt),d.append(Ct),xt.addEventListener("change",r),xt}function _(gt,xt,Ct){let st=n.createElement("select");return st.replaceChildren(...xt.map(([ht,Mt])=>new t.Option(Mt,ht))),st.value=Ct,x(gt,st)}function b(gt,xt,Ct,st,ht){let Mt=n.createElement("input");return Object.assign(Mt,{type:"number",min:xt,max:Ct,step:st,value:ht}),x(gt,Mt)}let v=_("Weather",ny.map(({id:gt,label:xt})=>[gt,xt]),"sunny"),M=_("Time of day",[["dawn","Dawn"],["sunrise","Sunrise"],["morning","Morning"],["day","Day"],["sunset","Sunset"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),R=_("Moon phase",iy.map(gt=>[gt,aT(gt)]),"full_moon"),S=b("Wind speed (m/s)",0,30,1,4),T=b("Wind from (degrees)",0,360,1,270),P,N,B=!1,O=!1,F=!1,D,z=!1,W=()=>{o.open||o.showModal()},tt=()=>e.setSceneSetting("dockAlignment",l.value),K=()=>{d.hidden=u.value!=="custom",Et(),r()};a.addEventListener("click",W),l.addEventListener("change",tt),u.addEventListener("change",K),f.addEventListener("change",r);function j(){return u.value!=="custom"}function X(){let gt=O?j()?z?"Live appearance from Home Assistant.":P||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";h.textContent!==gt&&(h.textContent=gt)}async function St(){if(!O||!j()||!s||B||F)return;B=!0;let gt=!1;try{let xt=await s.request("LOOK_GET");if(F)return;if(gt=z!==!!xt?.environment,z=!!xt?.environment,z){let Ct=JSON.stringify(xt);Ct!==N&&(P=xt,N=Ct,gt=!0)}}catch{gt=z,z=!1}finally{B=!1,!F&&O&&j()&&gt&&r()}}function Et(){O&&j()&&s&&!n.hidden?D===void 0&&(D=t.setInterval(St,oT),St()):D!==void 0&&(t.clearInterval(D),D=void 0)}return n.addEventListener("visibilitychange",Et),{open:W,motionEnabled:()=>f.checked,sync(gt,xt,Ct=!1){O=gt,Et();for(let{key:Bt,input:kt}of g)kt.checked=bi(xt,Bt);l.value=hm(xt),X();let st=P??e.getPreview?.(),ht=j()?st?.environment??td:cT({condition:v.value,daylight:M.value,moonPhase:R.value,windSpeed:Math.min(30,Math.max(0,S.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,T.valueAsNumber||0))}),Mt={...ht,traffic:{...ht.traffic??td.traffic,vehicleStyle:V0(t)}};return p.hidden=!O||!bi(xt,"sky"),p.hidden||hy(p,{...Vl(Mt,xt),reduceMotion:Ct}),{states:st?.states??{},environment:Mt}},dispose(){F=!0,O=!1,Et(),n.removeEventListener("visibilitychange",Et),a.removeEventListener("click",W),l.removeEventListener("change",tt),u.removeEventListener("change",K),f.removeEventListener("change",r),o.close();for(let{input:gt}of g)gt.parentElement.remove();d.replaceChildren(),p.remove(),m.remove()}}}var lT={radar:[32,12],plan:[20,8]};function ed(n){return n.reduce((e,i)=>[e[0]+i.x,e[1]+i.y],[0,0]).map(e=>e/n.length)}function uT(n,[t,e]){let[i,s]=ed(n),r=0,o=0,a=0;for(let{x:f,y:h}of n){let d=f-i,m=h-s;r+=d*d,o+=m*m,a+=d*m}let c=Math.hypot(r-o,2*a),l=Math.sqrt((r+o+c)/(2*n.length)),u=Math.sqrt(Math.max(0,(r+o-c)/(2*n.length)));return l>=t&&u>=e&&u>=l*.1}function xy([n,t,e,i,s,r],{radar:o,plan:a}){return Math.hypot(n*o.x+t*o.y+e-a.x,i*o.x+s*o.y+r-a.y)}function my(n,t){let e=t?-1:1,[i,s]=ed(n.map(({radar:p})=>p)),[r,o]=ed(n.map(({plan:p})=>p)),a=0,c=0,l=0;for(let{radar:p,plan:g}of n){let x=e*(p.x-i),_=p.y-s,b=g.x-r,v=g.y-o;a+=b*x+v*_,c+=v*x-b*_,l+=x*x+_*_}let u=a/l,f=c/l,h=r-e*u*i+f*s,d=o-e*f*i-u*s,m=[e*u,-f,h,e*f,u,d],y=n.map(p=>xy(m,p));return{transform:m,errors:y,flipped:t,scale:Math.hypot(u,f),squared:y.reduce((p,g)=>p+g*g,0)}}function gy(n){let t=my(n,!1),e=my(n,!0);return e.squared<t.squared?e:t}function hT({radar:n,plan:t}={}){return[n?.x,n?.y,t?.x,t?.y].every(Number.isFinite)&&Math.abs(n.x)<=600&&Math.abs(n.y)<=600&&t.x>=0&&t.x<=1536&&t.y>=0&&t.y<=1024}function yy(n){return Object.entries(lT).every(([t,e])=>uT(n.map(i=>i[t]),e))}function by(n){if(!Array.isArray(n)||n.length<3||n.length>12||!n.every(l=>l&&hT(l)))return{error:"Use 3\u201312 valid pairs of radar centimetres and plan coordinates."};if(!yy(n))return{error:"Choose survey points spread across the area, including one well off the line between the others."};let t=gy(n),e=t.scale*100;if(e<8||e>600)return{error:"The fitted scale is outside the supported range. Check the radar units and matched plan points."};let i;if(n.length>3){i=0;for(let[l,u]of n.entries()){let f=n.filter((d,m)=>l!==m);if(!yy(f))return{error:"Spread the survey points so that three or more still cover the area when any one point is removed."};let h=gy(f);if(h.scale*100<8||h.scale*100>600)return{error:"The fitted scale changes too much when a point is withheld. Check which radar report matches each point."};i=Math.max(i,xy(h.transform,u)/h.scale)}}let{transform:s,errors:r,flipped:o,scale:a,squared:c}=t;return{transform:s,pixelsPerMetre:e,flipped:o,origin:{x:s[2],y:s[5]},rmsCm:Math.sqrt(c/n.length)/a,maxErrorCm:Math.max(...r)/a,...i===void 0?{}:{validationCm:i}}}var fT=3,dT=11,pT=12,vy=/^sensor\.[a-z0-9_]+$/,_y=n=>n.slice().sort((t,e)=>t-e)[Math.floor(n.length/2)];async function mT(n,t,e=Date.now,i=()=>!0){let s=e(),r=[],o=new Set,a;for(let c=0;c<dT&&i();c++){if(c&&await t(700),!i())return{error:"Capture canceled."};let l=await n(),{observed_at:u,tracks:f}=l?.attributes??{};if(!Number.isFinite(u)||u<s-500||u>e()+1e3||o.has(u))continue;if(o.add(u),f?.length>1)return{error:"More than one radar target was detected. Clear the room and try again."};if(l.state!=="1"||f?.length!==1)continue;let{id:h,x:d,y:m}=f[0];if(![d,m].every(p=>Number.isFinite(p)&&Math.abs(p)<=800))continue;if(a!==void 0&&h!==a)return{error:"The radar switched targets. Stay still and try again."};if(a=h,r.push({x:d,y:m}),r.length<fT)continue;let y={x:_y(r.map(p=>p.x)),y:_y(r.map(p=>p.y))};return r.some(p=>Math.hypot(p.x-y.x,p.y-y.y)>40)?{error:"These readings moved too far apart. Hold still on the marked spot and try again."}:{point:y}}return{error:"Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch."}}function nd(n,t,e){n.fillStyle="#e8eddf",n.fillRect(0,0,t.width,t.height);for(let i of e.rooms)n.beginPath(),i.points.forEach(({x:s,y:r},o)=>o?n.lineTo(s,r):n.moveTo(s,r)),n.closePath(),n.fillStyle=i.outdoor||i.surface==="patio"?"#d8dfca":"#f6e7cc",n.strokeStyle="#c9b496",n.lineWidth=4,n.fill(),n.stroke();for(let i of e.items)/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(i.type)&&(n.save(),n.translate(i.x,i.y),n.rotate(i.rotation*Math.PI/180),n.fillStyle="#c8b095",n.fillRect(-i.w/2,-i.h/2,i.w,i.h),n.restore());n.lineWidth=9,n.strokeStyle="#4f6159";for(let i of e.walls)n.beginPath(),n.moveTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.stroke();n.textAlign="center",n.font="bold 25px sans-serif",n.fillStyle="#40473a";for(let i of e.rooms)i.label&&n.fillText(i.name,i.label.x,i.label.y,250)}function gT(n,t,e,i,s,r){let o=n.getContext("2d");if(!o||!t)return;nd(o,n,t);let a=(c,l,u)=>{c&&(o.beginPath(),o.arc(c.x,c.y,19,0,2*Math.PI),o.fillStyle=l,o.fill(),o.fillStyle="#fff",o.fillText(u,c.x,c.y+8))};a(e,"#714985","R"),s.forEach(({plan:c,radar:l},u)=>{if(r?.transform){let[f,h,d,m,y,p]=r.transform,g=f*l.x+h*l.y+d,x=m*l.x+y*l.y+p;o.strokeStyle="#ae5339",o.lineWidth=5,o.beginPath(),o.moveTo(c.x,c.y),o.lineTo(g,x),o.stroke(),o.beginPath(),o.arc(g,x,9,0,2*Math.PI),o.stroke()}a(c,"#376555",String(u+1))}),a(i,"#855f2f","+")}function My(n,t,{api:e,bridge:i}){let s=n.getElementById("radarCalibrationDialog");if(!s)return null;let r=n.getElementById("radarCalibrationPlan"),o=N=>s.querySelector(`[data-survey="${N}"]`),a=o("x"),c=o("y"),l=o("distance"),u=o("status"),f=o("quality"),h=o("points"),d=o("capture"),m=o("undo"),y=o("apply"),p=N=>new Promise(B=>t.setTimeout(B,N)),g,x,_,b,v=[],M=0,R=!1;function S(){b=v.length>=3?by(v):void 0,d.disabled=R||!_||!i?.request||!vy.test(x?.presenceTrackEntityId??"")||v.length>=pT,m.disabled=R||!v.length,y.disabled=R||!b?.transform;let N=v.map(({plan:O},F)=>{let D=n.createElement("li");return D.textContent=`Point ${F+1} \xB7 ${O.x}, ${O.y}`,D});h.replaceChildren(...N);let B=b?.error??"";if(b?.transform){let{pixelsPerMetre:O,rmsCm:F,maxErrorCm:D,validationCm:z,origin:W}=b;B=`${O.toFixed(1)} plan px/m \xB7 ${Math.round(F)} cm fit error \xB7 ${Math.round(D)} cm worst point.`,Number.isFinite(z)?B+=` Independent check ${Math.round(z)} cm.`:B+=" Add a fourth point to check the result.";let tt=Math.hypot(W.x-x.x,W.y-x.y)*100/O;if(tt>40&&(B+=` Fitted sensor origin is ${Math.round(tt)} cm from its map marker.`),l.valueAsNumber>0){let[K,j]=v,X=Math.hypot(K.plan.x-j.plan.x,K.plan.y-j.plan.y)/l.valueAsNumber;B+=` Tape measure gives ${X.toFixed(1)} plan px/m between points 1 and 2.`}}f.textContent=B,gT(r,g,x,_,v,b)}function T(){let N=a.valueAsNumber,B=c.valueAsNumber;_=Number.isFinite(N)&&Number.isFinite(B)&&N>=0&&N<=r.width&&B>=0&&B<=r.height?{x:Math.round(N),y:Math.round(B)}:void 0,S()}function P(N){if(!N.target.closest?.("[data-radar-calibration]"))return;let B=e.getSelection();g=e.getProject(),x=B?.kind==="item"?g.items.find(O=>O.id===B.id&&O.type==="presenceSwitch"):null,x&&(M++,v=[],_=void 0,R=!1,a.value=c.value=l.value="",u.textContent=i?.request?vy.test(x.presenceTrackEntityId??"")?"Choose a location to begin.":"Link a radar targets entity first.":"Open Studio from Home Assistant to capture live radar points.",s.showModal(),S())}return n.addEventListener("click",P),r.addEventListener("click",N=>{if(R)return;let B=r.getBoundingClientRect();a.value=Math.round((N.clientX-B.left)*r.width/B.width),c.value=Math.round((N.clientY-B.top)*r.height/B.height),T()}),a.addEventListener("input",T),c.addEventListener("input",T),l.addEventListener("input",S),d.addEventListener("click",async()=>{if(d.disabled)return;R=!0;let N=M,B=x.presenceTrackEntityId,O=_;u.textContent="Waiting for three fresh reports. Hold still on the chosen point.",S();let F;try{F=await mT(async()=>(await i.request("TRACK_GET",[B]))?.[B],p,Date.now,()=>N===M&&s.open)}catch{F={error:"Home Assistant could not read the radar. Check the connection and retry."}}N!==M||!s.open||(R=!1,F.point&&(v.push({plan:O,radar:F.point}),a.value=c.value="",_=void 0),u.textContent=F.error??`Captured point ${v.length}. Choose another location.`,S())}),m.addEventListener("click",()=>{v.pop(),S()}),y.addEventListener("click",()=>{b?.transform&&(e.setRadarCalibration(x.id,x.presenceTrackEntityId,b.transform)?s.close():u.textContent="The radar source changed. Reopen calibration for the current sensor.")}),s.addEventListener("close",()=>{M++}),{dispose(){M++,n.removeEventListener("click",P),s.open&&s.close()}}}var yT=12,xT=Math.ceil(8*1024*1024/3)*4+32,Sy=/^camera\.[a-z0-9_]+$/,bT=/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/,wy=n=>Number.isInteger(n)?String(n):n.toFixed(1);function Ey(n,t){let e=n.getBoundingClientRect();return{x:(t.clientX-e.left)*n.width/e.width,y:(t.clientY-e.top)*n.height/e.height}}function Ay(n,t){let e=Math.min(n.width/t.naturalWidth,n.height/t.naturalHeight);return{x:(n.width-t.naturalWidth*e)/2,y:(n.height-t.naturalHeight*e)/2,scale:e}}function vT(n,t){return new Promise((e,i)=>{let s=new n.Image;s.onload=()=>e(s),s.onerror=i,s.src=t})}function id(n,t,e,i,s=17){n.beginPath(),n.arc(t.x,t.y,s,0,2*Math.PI),n.fillStyle=e,n.fill(),n.strokeStyle="#fffefa",n.lineWidth=3,n.stroke(),n.fillStyle="#fff",n.font=`bold ${s*1.22}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(i,t.x,t.y+1)}function _T(n,t,e,i){let s=n.getContext("2d");if(!s||(n.toggleAttribute("data-empty",!t),s.fillStyle="#e8eddf",s.fillRect(0,0,n.width,n.height),!t))return;let{image:r,mapToPixel:o}=t,{x:a,y:c,scale:l}=Ay(n,r);s.drawImage(r,a,c,r.naturalWidth*l,r.naturalHeight*l);function u(f,h,d){let m=ns(o,f);m.x>=0&&m.x<=r.naturalWidth&&m.y>=0&&m.y<=r.naturalHeight&&id(s,{x:a+m.x*l,y:c+m.y*l},h,d,13)}e.forEach(({map:f},h)=>u(f,"#315d55",String(h+1))),i&&u(i,"#8a622e","+")}function MT(n,t,e,i,s,r,o){let a=n.getContext("2d");if(!a)return;a.save(),nd(a,n,t);let c=e&&o?ug(r,e.pixelToMap):void 0;if(c){let[l,u,f,h,d,m]=c;a.save(),a.globalAlpha=.43,a.transform(l,h,u,d,f,m),a.drawImage(e.image,0,0),a.restore()}i.forEach(({map:l,plan:u},f)=>{if(o&&r){let h=ns(r,l);a.strokeStyle="#a14936",a.lineWidth=5,a.beginPath(),a.moveTo(u.x,u.y),a.lineTo(h.x,h.y),a.stroke(),a.beginPath(),a.arc(h.x,h.y,10,0,2*Math.PI),a.stroke()}id(a,u,"#315d55",String(f+1))}),s&&id(a,s,"#8a622e","+"),a.restore()}function Ty(n){if(n.length<3)return!1;let[t,...e]=n,i=e.map(r=>({x:r.x-t.x,y:r.y-t.y})),s=Math.max(...i.map(({x:r,y:o})=>r*r+o*o));return s>0&&i.some((r,o)=>i.slice(o+1).some(a=>Math.abs(r.x*a.y-r.y*a.x)>s*.03))}function ST(n,t,e){let i=xf(n,{mapUnitsPerMetre:t});if(!e)return i;let s=xf(n,{flipY:!0,mapUnitsPerMetre:t});return s&&(!i||s.rmse<i.rmse)?s:i}function Ry(n,t,{api:e,bridge:i}){let s=n.getElementById("vacuumAlignmentDialog");if(!s)return null;let r=X=>s.querySelector(`[data-vacuum-survey="${X}"]`),o=r("map"),a=r("plan"),c=r("map-x"),l=r("map-y"),u=r("plan-x"),f=r("plan-y"),h=r("units"),d=r("distance"),m=r("overlay"),y=r("load"),p=r("add"),g=r("undo-point"),x=r("undo-alignment"),_=r("apply"),b=r("points"),v=r("status"),M=r("quality"),R,S,T,P,N,B,O,F=[],D=0,z=!1;function W(X,St,Et=!1){let gt=X.valueAsNumber,xt=St.valueAsNumber;if([gt,xt].every(Number.isFinite)&&!(Et&&(gt<0||xt<0||gt>a.width||xt>a.height)))return{x:gt,y:xt}}function tt(){let X=W(c,l),St=W(u,f,!0),Et=h.valueAsNumber>0?h.valueAsNumber:null,gt=Ty(F.map(Mt=>Mt.map))&&Ty(F.map(Mt=>Mt.plan));P=ST(F,Et,gt),y.disabled=z||!!T||!i?.request||!Sy.test(S?.vacuumMapEntityId??""),p.disabled=z||!X||!St||F.length>=yT,g.disabled=z||!F.length,x.disabled=z||!N;let xt=P?.transform.join(",");_.disabled=z||!gt||!P||xt===B;let Ct=F.map(Mt=>{let Bt=n.createElement("li"),kt=({x:q,y:bt})=>`${wy(q)}, ${wy(bt)}`;return Bt.textContent=`LiDAR ${kt(Mt.map)} \u2192 plan ${kt(Mt.plan)}`,Bt});b.replaceChildren(...Ct);let st=[];if(P){st.push(Number.isFinite(P.pixelsPerMetre)?`${P.pixelsPerMetre.toFixed(1)} plan px/m`:`${P.scale.toFixed(4)} plan px per map unit`),gt&&(st.push(`${P.rmse.toFixed(1)} px fit error`),Number.isFinite(P.leaveOneOutError)&&st.push(`${P.leaveOneOutError.toFixed(1)} px independent check`));let Mt=hg(F[0],F[1],P.transform,Et);if(Number.isFinite(Mt?.mapMetres)&&(st.push(`Points 1\u20132 measure ${Mt.mapMetres.toFixed(2)} m on LiDAR and ${Mt.planMetres.toFixed(2)} m on the scaled plan.`),d.valueAsNumber>0)){let Bt=Math.abs(Mt.mapMetres-d.valueAsNumber);st.push(`${Math.round(Bt*100)} cm from tape reading`)}}gt?P||st.push("These points are too close together. Choose more widely spaced locations."):st.push("Add three matching points spread in two directions."),M.textContent=st.join(" \xB7 "),_T(o,T,F,X);let ht=S.vacuumMapId===void 0||S.vacuumMapId===T?.mapId?S.vacuumPositionTransform:void 0;MT(a,R,T,F,St,(gt?P?.transform:void 0)??ht,m.checked)}async function K(){if(y.disabled)return;let X=D;z=!0,v.textContent="Reading the selected map from Home Assistant\u2026",tt();try{let St=await i.request("VACUUM_MAP_GET",{entityId:S.vacuumMapEntityId}),{imageDataUrl:Et,pixelToMap:gt,mapUnitsPerMetre:xt,mapId:Ct}=St??{},st=lg(gt);if(typeof Et!="string"||Et.length>xT||!bT.test(Et)||!st)throw new Error("Invalid map");let ht=await vT(t,Et);if(X!==D||!s.open)return;T={image:ht,pixelToMap:gt,mapToPixel:st,mapId:Number.isSafeInteger(Ct)&&Ct>0?Ct:void 0},Number.isFinite(xt)&&xt>0&&(h.value=String(xt),h.readOnly=!0),v.textContent="LiDAR map loaded. Choose the same location on both maps."}catch{if(X!==D||!s.open)return;v.textContent="The selected camera did not return a calibrated map. Retry or enter map coordinates directly."}z=!1,tt()}function j(X){let St=X.target.closest?.("[data-vacuum-alignment]");if(!St||s.open)return;let Et=e.getSelection();if(R=e.getProject(),S=Et?.kind==="item"&&R.items.find(gt=>gt.id===Et.id),!!S){O=St,D++,F=[],T=P=N=B=void 0,z=!1;for(let gt of[c,l,u,f,h,d])gt.value="";h.readOnly=!1,m.checked=!0,v.textContent=i?.request&&!Sy.test(S.vacuumMapEntityId??"")?"Link the vacuum map camera in the Inspector or enter known map coordinates.":"Enter known coordinates here, or open Home Assistant Studio to load the linked map.",s.showModal(),tt(),y.disabled||K()}}n.addEventListener("click",j),y.addEventListener("click",K);for(let X of[c,l,u,f,h,d])X.addEventListener("input",tt);return m.addEventListener("change",tt),o.addEventListener("click",X=>{if(z||!T)return;let St=Ey(o,X),{x:Et,y:gt,scale:xt}=Ay(o,T.image),Ct={x:(St.x-Et)/xt,y:(St.y-gt)/xt};if(Ct.x<0||Ct.y<0||Ct.x>T.image.naturalWidth||Ct.y>T.image.naturalHeight)return;let st=ns(T.pixelToMap,Ct);c.value=String(Math.round(st.x*10)/10),l.value=String(Math.round(st.y*10)/10),tt()}),a.addEventListener("click",X=>{if(z)return;let St=Ey(a,X);u.value=String(Math.round(St.x)),f.value=String(Math.round(St.y)),tt()}),p.addEventListener("click",()=>{if(p.disabled)return;let X=W(c,l),St=W(u,f,!0);if(F.some(Et=>Math.hypot(Et.map.x-X.x,Et.map.y-X.y)<1||Math.hypot(Et.plan.x-St.x,Et.plan.y-St.y)<1)){v.textContent="Choose a different location on each map.";return}F.push({map:X,plan:St});for(let Et of[c,l,u,f])Et.value="";v.textContent=`Pair ${F.length} added.`,tt()}),g.addEventListener("click",()=>{g.disabled||(F.pop(),v.textContent="Removed the last matching pair.",tt())}),_.addEventListener("click",()=>{if(_.disabled)return;let X=e.setVacuumAlignment(S.id,S.entityId,S.vacuumMapEntityId??"",T?.mapId,P.transform);X?(B=P.transform.join(","),X.changed&&(N=X),v.textContent=X.changed?"Applied to the draft. Export to dashboard when ready.":"This alignment is already applied."):v.textContent="The vacuum binding changed or the alignment is out of range. Reopen this survey.",tt()}),x.addEventListener("click",()=>{x.disabled||(v.textContent=N.undo()?"Restored the previous draft alignment.":"The draft changed. Use the Studio history controls.",N=B=void 0,tt())}),s.addEventListener("keydown",X=>X.stopPropagation()),s.addEventListener("close",()=>{D++,T=R=S=N=P=void 0,F=[];for(let X of[c,l,u,f,h,d])X.value="";b.replaceChildren();for(let X of[o,a])X.getContext("2d")?.clearRect(0,0,X.width,X.height);O?.isConnected?O.focus():n.querySelector("[data-vacuum-alignment]")?.focus()}),{dispose(){D++,n.removeEventListener("click",j),s.open&&s.close()}}}var wT=22,ET=5,TT=1e3/12,AT=1e3,RT=12;function CT(n,t,e){let i=W0(n,t,e),s=new Set(i.map(r=>r.id));for(let r of n.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>i.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&i.push(l)}return i}function IT(n,t){if(!t)return!1;let e=(Number(n.rotation)||0)*Math.PI/180,i=t.x-n.x,s=t.y-n.y,r=i*Math.cos(e)+s*Math.sin(e),o=-i*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=n.w/2&&Math.abs(o)<=n.h/2}function PT(n,t,e,i,s,r){let o=n.flatMap((a,c)=>{let l=i.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=wT;return!f&&(a.type==="garageDoor"||!IT(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function LT(n,t){let e=t.RoomcraftEditorViewport,i=n.getElementById("sceneCanvas"),s=n.getElementById("viewport"),r=n.getElementById("sceneView");if(!e||!i||!s||!r)return null;Zm(r,!0);let o={left:n.getElementById("sceneRotateLeft"),right:n.getElementById("sceneRotateRight"),out:n.getElementById("sceneZoomOut"),in:n.getElementById("sceneZoomIn")},a=n.getElementById("sceneCameraOptions"),c=n.getElementById("sceneReset"),l=n.getElementById("sceneSaveDefault"),u=n.getElementById("sceneClearDefault"),f=n.getElementById("sceneDefaultStatus"),h=Qm(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),m=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,y=My(n,t,{api:e,bridge:m}),p=Ry(n,t,{api:e,bridge:m}),g=py(n,t,{api:e,viewport:s,bridge:m,onChange:()=>{A(D?.item&&D.position?{[D.item.id]:{position:D.position}}:void 0)}}),x=n.createElement("div");x.className="scene-selection",x.setAttribute("aria-hidden","true"),Object.assign(x.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(x);let _=n.createElement("div");_.className="scene-placeholders",Object.assign(_.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(_);let b=n.createElementNS("http://www.w3.org/2000/svg","svg");b.classList.add("scene-placeholder-leaders"),b.setAttribute("aria-hidden","true"),Object.assign(b.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(b,_);let v=new Map,M=n.getElementById("miniHelp"),R=M?.textContent,S=i.getAttribute("aria-label")??"Editable three-dimensional home view",T,P,N,B=ff(null),O=r.value,F="default",D,z,W,tt=-1/0,K=0,j,X=!1,St=!1,Et=null,gt=!1,xt=[],Ct=[],st="",ht=0,Mt,Bt=!1,kt={},q=Q0(),bt={key:"",scene:null,reduceMotion:!1},Z={id:null,scene:null},J=()=>O!=="plan",nt=()=>O==="free",ct=()=>d?.matches===!0||!g.motionEnabled(),pt=()=>i.getBoundingClientRect(),It=ft=>{let Nt=pt();return{x:ft.clientX-Nt.left,y:ft.clientY-Nt.top}};function Lt(ft){e.showStatus?.(ft)}function Ft(){if(!(!X&&(T?.hasAmbientMotion||T?.hasPeopleMotion)&&J()&&!n.hidden&&!ct())){t.cancelAnimationFrame(W),W=void 0;return}W===void 0&&(W=t.requestAnimationFrame(Nt=>{if(W=void 0,Nt-tt>=TT-1){tt=Nt,K=Nt/1e3;try{j&&T.render(K,...j)}catch{C()}}Ft()}))}function zt(ft=!0){let Nt=J()?T:null,Ht=ct(),Wt=$()?Nt?q.read(xt,kt,Date.now(),{contains:Nt.canPlacePerson,nearest:Nt.nearestPersonPoint}):Zf(xt,kt):[],Jt=JSON.stringify(Wt);Jt===bt.key&&Nt===bt.scene&&Ht===bt.reduceMotion||(bt={key:Jt,scene:Nt,reduceMotion:Ht},Nt&&(Nt.setPeople(Wt,(t.performance?.now()??0)/1e3,{reduceMotion:Ht}),ft&&A()),e.setPersonPreview?.(Nt?[]:Wt))}function $(){return!!(m?.request&&Ct.length&&!X&&!n.hidden)}async function oe(ft=!0){if(ft&&zt(),Bt||!$())return;Bt=!0;let Nt=ht;try{let Ht=await m.request("TRACK_GET",Ct);Nt===ht&&$()&&(kt=Ht&&typeof Ht=="object"?Ht:{},zt())}catch{Nt===ht&&(kt={},zt())}finally{Bt=!1}}function Yt(){$()?Mt===void 0&&(Mt=t.setInterval(oe,AT),oe(!1)):Mt!==void 0&&(t.clearInterval(Mt),Mt=void 0,ht++,kt={})}function H(ft){xt=ft.filter(jf).slice(0,RT);let Nt=[...new Set(xt.flatMap(Wt=>[Wt.presenceTrackEntityId,Wt.presenceEntityId]).filter(Wt=>/^(?:sensor|binary_sensor)\.[a-z0-9_]+$/.test(Wt??"")))],Ht=Nt.join(",");Ht!==st&&(st=Ht,Ct=Nt,ht++,kt={}),Yt()}function A(ft){if(Ft(),!T||!J())return;let{width:Nt,height:Ht}=pt();if(!Nt||!Ht)return;T.resize(Nt,Ht);let Wt=e.getSelection(),Jt=Wt?.kind==="item"?Wt.id:null;if(Z.scene!==T||Z.id!==Jt){let Me=P.items.find(I=>I.id===Jt);T.setDetectionZones(Me?K0([Me]):[]),Z={id:Jt,scene:T}}let be=ct(),Je=g.sync(!0,P.sceneSettings,be),qe=Object.create(null);for(let Me of P.items){let I=Je.states[Me.id];I&&I.entityId===Me.entityId&&(qe[Me.id]=I)}if(j=[qe,{...Je.environment,reduceMotion:be},{showTelemetryPosition:!1,draftPositions:ft}],T.render(K,...j),nt())return;let an=[];for(let[Me,I]of v){let ot=T.anchor(Me);if(I.hidden=!ot,ot){let vt=P.items.find(mt=>mt.id===Me),yt=vt?.type==="cameraThumbnail"?Jm(vt,Nt):{w:96,h:44};an.push({id:Me,marker:I,x:ot.x*Nt,y:ot.y*Ht,...yt})}}let cn=CT(an,Nt,Ht),Ne=new Set(cn.map(Me=>Me.id)),Hi=[];for(let Me of cn){let{marker:I,x:ot,y:vt,w:yt,h:mt,id:Xt}=Me;Object.assign(I.style,{left:`${ot}px`,top:`${vt}px`,width:`${yt}px`,height:`${mt}px`});let $t=an.find(Gt=>Gt.id===Xt);if(Math.hypot($t.x-ot,$t.y-vt)>8){let Gt=n.createElementNS("http://www.w3.org/2000/svg","line");for(let[jt,te]of Object.entries({x1:$t.x,y1:$t.y,x2:ot,y2:vt}))Gt.setAttribute(jt,te);Gt.setAttribute("stroke","#6f816b"),Gt.setAttribute("stroke-width","1"),Gt.setAttribute("stroke-dasharray","3 3"),Hi.push(Gt)}}for(let[Me,I]of v)I.hidden=!Ne.has(Me);b.replaceChildren(...Hi);let Qn=Wt?.kind==="item"?T.anchor(Wt.id):null;x.style.display=Qn?"block":"none",Qn&&(x.style.left=`${Qn.x*Nt}px`,x.style.top=`${Qn.y*Ht}px`)}function rt(){if(!D)return;let ft=D;D=void 0;try{i.releasePointerCapture(ft.pointerId)}catch{}ft.item&&A({[ft.item.id]:{position:{x:ft.item.x,y:ft.item.y}}})}function dt(){a&&(a.hidden=!J());for(let ft of Object.values(o))ft&&(ft.disabled=!J());l&&(l.hidden=!T||!nt(),l.disabled=gt),u&&(u.hidden=!T||!J()||!Et,u.disabled=gt)}function _t(ft){f&&(f.textContent=ft)}function V(){St=!0,_t("")}function w(){i.tabIndex=nt()?0:-1,i.style.cursor=nt()?"grab":"",i.setAttribute("aria-label",nt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":S)}function E(ft,{initial:Nt=!1}={}){Nt||(V(),ft==="default"&&(St=!1)),Rt.cancel(),rt();let Ht=T?.getView()??B,Wt=Object.hasOwn(to,ft)?ft:"plan";Wt!=="plan"&&e.useSelectTool?.(),O=Wt,J()&&!nt()&&(F=O),r.value=O,i.hidden=!J(),w();let Jt=J()&&!nt();if(_.style.display=Jt?"block":"none",b.style.display=Jt?"block":"none",Jt||(x.style.display="none"),M&&(nt()?M.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":M.textContent=J()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":R),s.classList.toggle("scene-3d",J()),dt(),!J()){U(),Ft(),g.sync(!1,e.getProject().sceneSettings),Lt("Plan view \xB7 edit rooms, walls, floors and objects");return}let be=O==="default"?ff(Et):nt()?jm(Ht):{preset:O};B=T?T.setView(be):be,U(),T&&Lt(nt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function C(){Rt.cancel(),T?.dispose(),T=void 0,N=void 0,O="plan",Ft(),r.value=O,i.hidden=!0,g.sync(!1,e.getProject().sceneSettings),w(),_.style.display="none",b.style.display="none",M&&(M.textContent=R),s.classList.remove("scene-3d"),x.style.display="none",dt(),zt(!1),Lt("3D view is unavailable on this screen. Plan view is ready.")}function U(){if(X)return;let ft=e.getProject();if(H(ft.items),!J()){g.sync(!1,ft.sceneSettings),zt();return}let Nt=JSON.stringify(ft);try{if(!T||Nt!==N){rt(),T&&(B=T.getView()),T?.dispose(),T=void 0,P=ft,T=B0(i,P),T.setView(B),N=Nt,v.clear(),_.replaceChildren();for(let Ht of P.items.filter(Wt=>Wt.type==="cameraThumbnail"||Wt.type.startsWith("ui"))){let Wt=n.createElement("button");Wt.type="button",Wt.className="scene-placeholder",Wt.textContent=Ht.name||(Ht.type==="cameraThumbnail"?"Camera":"Interface"),Wt.setAttribute("aria-label",`Select ${Wt.textContent}`),Object.assign(Wt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),Wt.addEventListener("pointerdown",Jt=>L(Jt,Ht.id)),Wt.addEventListener("click",Jt=>{!nt()&&Jt.detail===0&&(e.selectItem(Ht.id),A())}),v.set(Ht.id,Wt),_.append(Wt)}}dt(),zt(!1),A()}catch{C()}}function k(ft){!T||!J()||(V(),rt(),T.setView(ft(T.getView())),B=T.getView(),A())}let Q=()=>U(),Y=()=>{let ft=e.getTool();J()&&ft!=="select"?E("plan"):nt()&&e.hasPlacement()?E(F):J()&&A()},ut=()=>E(r.value),lt=()=>{t.cancelAnimationFrame(z),z=t.requestAnimationFrame(()=>A())},Rt=G0(i,{getView:()=>nt()?T?.getView():null,onChange:ft=>{!T||!nt()||(V(),B=T.setView(ft),lt())}}),L=(ft,Nt=null)=>{if(!J()||nt()||!T||ft.button!==0||D)return;ft.preventDefault(),ft.stopPropagation();let Ht=It(ft);if(e.hasPlacement()){let cn=T.projectToPlan(Ht.x,Ht.y,e.getPlacementType(),{preferTabletop:!0});cn&&e.placeAt(cn.x,cn.y),U();return}let{width:Wt,height:Jt}=pt(),be=new Map(P.items.map(cn=>[cn.id,T.anchor(cn.id)])),Je=Nt??T.pickGarage(Ht.x,Ht.y),qe=Je?P.items.find(cn=>cn.id===Je):PT(P.items,Ht,T.projectToPlan(Ht.x,Ht.y),be,Wt,Jt);if(e.selectItem(qe?.id??null),!qe){A();return}let an=T.projectToPlan(Ht.x,Ht.y,qe.type);an&&(D={item:{...qe},startScreen:Ht,startPlan:an,pointerId:ft.pointerId},i.setPointerCapture(ft.pointerId),A())},et=ft=>{if(!J()||nt()||(ft.stopPropagation(),!D||D.pointerId!==ft.pointerId||!T))return;let Nt=It(ft);if(!D.moved&&Math.hypot(Nt.x-D.startScreen.x,Nt.y-D.startScreen.y)<ET)return;let Ht=T.projectToPlan(Nt.x,Nt.y,D.item.type);if(!Ht)return;D.moved=!0;let Wt={x:D.item.x+Ht.x-D.startPlan.x,y:D.item.y+Ht.y-D.startPlan.y},Jt=e.moveItemWarning?.(D.item.id,Wt.x,Wt.y);if(Jt){Jt!==D.warning&&Lt(Jt),D.warning=Jt;return}D.warning&&Lt(`Moving ${D.item.name||"object"}`),D.warning=void 0,D.position=Wt,A({[D.item.id]:{position:D.position}})},it=ft=>{if(!J()||nt()||(ft.stopPropagation(),!D||D.pointerId!==ft.pointerId))return;let Nt=D;D=void 0;try{i.releasePointerCapture(ft.pointerId)}catch{}Nt.moved&&Nt.position?(e.moveItem(Nt.item.id,Nt.position.x,Nt.position.y),U()):A()},Tt=ft=>{nt()||(D?.pointerId===ft.pointerId&&rt(),ft.stopPropagation())},At=ft=>{!J()||nt()||(ft.preventDefault(),ft.stopPropagation(),k(Nt=>({...Nt,zoom:Nt.zoom*(ft.deltaY<0?1.1:1/1.1)})))},wt=ft=>{nt()&&ft.target===i&&(ft.key==="Delete"||ft.key==="Backspace")&&(ft.preventDefault(),ft.stopImmediatePropagation()),ft.key==="Escape"&&D&&(ft.preventDefault(),ft.stopImmediatePropagation(),rt())},Ut=ft=>{ft.preventDefault(),C()},Ot=()=>k(ft=>({...ft,azimuth:ft.azimuth-15})),le=()=>k(ft=>({...ft,azimuth:ft.azimuth+15})),se=()=>k(ft=>({...ft,zoom:ft.zoom/1.2})),_e=()=>k(ft=>({...ft,zoom:ft.zoom*1.2})),Ee=()=>E("top"),on=()=>{zt(!1),A()},Ye=()=>{Yt(),zt(),Ft()};n.addEventListener("visibilitychange",Ye),d?.addEventListener("change",on);async function dn(){gt=!0,dt();try{Et=await h.read(),!X&&!St&&E("default",{initial:!0})}catch{X||_t("Saved view unavailable")}finally{gt=!1,X||dt()}}async function nn(ft){if(!(!T||!J()||gt)){gt=!0,_t("Saving view\u2026"),dt();try{if(await h.write(ft),X)return;Et=ft,ft||E("default"),_t(ft?"Default view saved":"Top down is the default")}catch{X||_t("Could not save default view")}finally{gt=!1,X||dt()}}}let pn=()=>{nt()&&T&&nn(T.getView())},mn=()=>nn(null);o.left?.addEventListener("click",Ot),o.right?.addEventListener("click",le),o.out?.addEventListener("click",se),o.in?.addEventListener("click",_e),c?.addEventListener("click",Ee),l?.addEventListener("click",pn),u?.addEventListener("click",mn),r.addEventListener("change",ut),i.addEventListener("pointerdown",L),i.addEventListener("pointermove",et),i.addEventListener("pointerup",it),i.addEventListener("pointercancel",Tt),i.addEventListener("lostpointercapture",Tt),i.addEventListener("wheel",At,{passive:!1}),i.addEventListener("webglcontextlost",Ut),t.addEventListener("keydown",wt,!0),t.addEventListener("roomcraft-editor-change",Q),t.addEventListener("roomcraft-editor-tool",Y);let Pt=new t.ResizeObserver(lt);Pt.observe(s),E(O,{initial:!0});try{(t.location.hash==="#scene-settings"||m&&t.parent.location.hash==="#scene-settings")&&g.open()}catch{}return dn(),{getView:()=>T?.getView()??{...B},setView:E,dispose(){X=!0,Ft(),Yt(),n.removeEventListener("visibilitychange",Ye),d?.removeEventListener("change",on),rt(),Rt.dispose(),O="plan",w(),Pt.disconnect(),t.cancelAnimationFrame(z),T?.dispose(),T=void 0,x.remove(),_.remove(),b.remove(),g.dispose(),y?.dispose(),p?.dispose(),M&&(M.textContent=R),o.left?.removeEventListener("click",Ot),o.right?.removeEventListener("click",le),o.out?.removeEventListener("click",se),o.in?.removeEventListener("click",_e),c?.removeEventListener("click",Ee),l?.removeEventListener("click",pn),u?.removeEventListener("click",mn),r.removeEventListener("change",ut),i.removeEventListener("pointerdown",L),i.removeEventListener("pointermove",et),i.removeEventListener("pointerup",it),i.removeEventListener("pointercancel",Tt),i.removeEventListener("lostpointercapture",Tt),i.removeEventListener("wheel",At),i.removeEventListener("webglcontextlost",Ut),t.removeEventListener("keydown",wt,!0),t.removeEventListener("roomcraft-editor-change",Q),t.removeEventListener("roomcraft-editor-tool",Y)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=Gf,LT(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
