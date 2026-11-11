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
"use strict";(()=>{var Wf=Object.create;var jc=Object.defineProperty;var Xf=Object.getOwnPropertyDescriptor;var qf=Object.getOwnPropertyNames;var Yf=Object.getPrototypeOf,Zf=Object.prototype.hasOwnProperty;var Jf=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var $f=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of qf(t))!Zf.call(i,s)&&s!==e&&jc(i,s,{get:()=>t[s],enumerable:!(n=Xf(t,s))||n.enumerable});return i};var Kf=(i,t,e)=>(e=i!=null?Wf(Yf(i)):{},$f(t||!i||!i.__esModule?jc(e,"default",{value:i,enumerable:!0}):e,i));var lf=Jf((zc,kc)=>{(function(i,t){typeof zc=="object"&&typeof kc<"u"?kc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(zc,(function(){"use strict";/**
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
    ***************************************************************************** */function i(U,x){var y={label:0,sent:function(){if(P[0]&1)throw P[1];return P[1]},trys:[],ops:[]},M,I,P,V;return V={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function B(j){return function(xt){return Q([j,xt])}}function Q(j){if(M)throw new TypeError("Generator is already executing.");for(;y;)try{if(M=1,I&&(P=j[0]&2?I.return:j[0]?I.throw||((P=I.return)&&P.call(I),0):I.next)&&!(P=P.call(I,j[1])).done)return P;switch(I=0,P&&(j=[j[0]&2,P.value]),j[0]){case 0:case 1:P=j;break;case 4:return y.label++,{value:j[1],done:!1};case 5:y.label++,I=j[1],j=[0];continue;case 7:j=y.ops.pop(),y.trys.pop();continue;default:if(P=y.trys,!(P=P.length>0&&P[P.length-1])&&(j[0]===6||j[0]===2)){y=0;continue}if(j[0]===3&&(!P||j[1]>P[0]&&j[1]<P[3])){y.label=j[1];break}if(j[0]===6&&y.label<P[1]){y.label=P[1],P=j;break}if(P&&y.label<P[2]){y.label=P[2],y.ops.push(j);break}P[2]&&y.ops.pop(),y.trys.pop();continue}j=x.call(U,y)}catch(xt){j=[6,xt],I=0}finally{M=P=0}if(j[0]&5)throw j[1];return{value:j[0]?j[1]:void 0,done:!0}}}var t=(function(){function U(x,y){this.next=null,this.key=x,this.data=y,this.left=null,this.right=null}return U})();function e(U,x){return U>x?1:U<x?-1:0}function n(U,x,y){for(var M=new t(null,null),I=M,P=M;;){var V=y(U,x.key);if(V<0){if(x.left===null)break;if(y(U,x.left.key)<0){var B=x.left;if(x.left=B.right,B.right=x,x=B,x.left===null)break}P.left=x,P=x,x=x.left}else if(V>0){if(x.right===null)break;if(y(U,x.right.key)>0){var B=x.right;if(x.right=B.left,B.left=x,x=B,x.right===null)break}I.right=x,I=x,x=x.right}else break}return I.right=x.left,P.left=x.right,x.left=M.right,x.right=M.left,x}function s(U,x,y,M){var I=new t(U,x);if(y===null)return I.left=I.right=null,I;y=n(U,y,M);var P=M(U,y.key);return P<0?(I.left=y.left,I.right=y,y.left=null):P>=0&&(I.right=y.right,I.left=y,y.right=null),I}function r(U,x,y){var M=null,I=null;if(x){x=n(U,x,y);var P=y(x.key,U);P===0?(M=x.left,I=x.right):P<0?(I=x.right,x.right=null,M=x):(M=x.left,x.left=null,I=x)}return{left:M,right:I}}function o(U,x,y){return x===null?U:(U===null||(x=n(U.key,x,y),x.left=U),x)}function a(U,x,y,M,I){if(U){M(""+x+(y?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+I(U)+`
`);var P=x+(y?"    ":"\u2502   ");U.left&&a(U.left,P,!1,M,I),U.right&&a(U.right,P,!0,M,I)}}var l=(function(){function U(x){x===void 0&&(x=e),this._root=null,this._size=0,this._comparator=x}return U.prototype.insert=function(x,y){return this._size++,this._root=s(x,y,this._root,this._comparator)},U.prototype.add=function(x,y){var M=new t(x,y);this._root===null&&(M.left=M.right=null,this._size++,this._root=M);var I=this._comparator,P=n(x,this._root,I),V=I(x,P.key);return V===0?this._root=P:(V<0?(M.left=P.left,M.right=P,P.left=null):V>0&&(M.right=P.right,M.left=P,P.right=null),this._size++,this._root=M),this._root},U.prototype.remove=function(x){this._root=this._remove(x,this._root,this._comparator)},U.prototype._remove=function(x,y,M){var I;if(y===null)return null;y=n(x,y,M);var P=M(x,y.key);return P===0?(y.left===null?I=y.right:(I=n(x,y.left,M),I.right=y.right),this._size--,I):y},U.prototype.pop=function(){var x=this._root;if(x){for(;x.left;)x=x.left;return this._root=n(x.key,this._root,this._comparator),this._root=this._remove(x.key,this._root,this._comparator),{key:x.key,data:x.data}}return null},U.prototype.findStatic=function(x){for(var y=this._root,M=this._comparator;y;){var I=M(x,y.key);if(I===0)return y;I<0?y=y.left:y=y.right}return null},U.prototype.find=function(x){return this._root&&(this._root=n(x,this._root,this._comparator),this._comparator(x,this._root.key)!==0)?null:this._root},U.prototype.contains=function(x){for(var y=this._root,M=this._comparator;y;){var I=M(x,y.key);if(I===0)return!0;I<0?y=y.left:y=y.right}return!1},U.prototype.forEach=function(x,y){for(var M=this._root,I=[],P=!1;!P;)M!==null?(I.push(M),M=M.left):I.length!==0?(M=I.pop(),x.call(y,M),M=M.right):P=!0;return this},U.prototype.range=function(x,y,M,I){for(var P=[],V=this._comparator,B=this._root,Q;P.length!==0||B;)if(B)P.push(B),B=B.left;else{if(B=P.pop(),Q=V(B.key,y),Q>0)break;if(V(B.key,x)>=0&&M.call(I,B))return this;B=B.right}return this},U.prototype.keys=function(){var x=[];return this.forEach(function(y){var M=y.key;return x.push(M)}),x},U.prototype.values=function(){var x=[];return this.forEach(function(y){var M=y.data;return x.push(M)}),x},U.prototype.min=function(){return this._root?this.minNode(this._root).key:null},U.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},U.prototype.minNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.left;)x=x.left;return x},U.prototype.maxNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.right;)x=x.right;return x},U.prototype.at=function(x){for(var y=this._root,M=!1,I=0,P=[];!M;)if(y)P.push(y),y=y.left;else if(P.length>0){if(y=P.pop(),I===x)return y;I++,y=y.right}else M=!0;return null},U.prototype.next=function(x){var y=this._root,M=null;if(x.right){for(M=x.right;M.left;)M=M.left;return M}for(var I=this._comparator;y;){var P=I(x.key,y.key);if(P===0)break;P<0?(M=y,y=y.left):y=y.right}return M},U.prototype.prev=function(x){var y=this._root,M=null;if(x.left!==null){for(M=x.left;M.right;)M=M.right;return M}for(var I=this._comparator;y;){var P=I(x.key,y.key);if(P===0)break;P<0?y=y.left:(M=y,y=y.right)}return M},U.prototype.clear=function(){return this._root=null,this._size=0,this},U.prototype.toList=function(){return f(this._root)},U.prototype.load=function(x,y,M){y===void 0&&(y=[]),M===void 0&&(M=!1);var I=x.length,P=this._comparator;if(M&&g(x,y,0,I-1,P),this._root===null)this._root=c(x,y,0,I),this._size=I;else{var V=d(this.toList(),h(x,y),P);I=this._size+I,this._root=u({head:V},0,I)}return this},U.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(U.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(U.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),U.prototype.toString=function(x){x===void 0&&(x=function(M){return String(M.key)});var y=[];return a(this._root,"",!0,function(M){return y.push(M)},x),y.join("")},U.prototype.update=function(x,y,M){var I=this._comparator,P=r(x,this._root,I),V=P.left,B=P.right;I(x,y)<0?B=s(y,M,B,I):V=s(y,M,V,I),this._root=o(V,B,I)},U.prototype.split=function(x){return r(x,this._root,this._comparator)},U.prototype[Symbol.iterator]=function(){var x,y,M;return i(this,function(I){switch(I.label){case 0:x=this._root,y=[],M=!1,I.label=1;case 1:return M?[3,6]:x===null?[3,2]:(y.push(x),x=x.left,[3,5]);case 2:return y.length===0?[3,4]:(x=y.pop(),[4,x]);case 3:return I.sent(),x=x.right,[3,5];case 4:M=!0,I.label=5;case 5:return[3,1];case 6:return[2]}})},U})();function c(U,x,y,M){var I=M-y;if(I>0){var P=y+Math.floor(I/2),V=U[P],B=x[P],Q=new t(V,B);return Q.left=c(U,x,y,P),Q.right=c(U,x,P+1,M),Q}return null}function h(U,x){for(var y=new t(null,null),M=y,I=0;I<U.length;I++)M=M.next=new t(U[I],x[I]);return M.next=null,y.next}function f(U){for(var x=U,y=[],M=!1,I=new t(null,null),P=I;!M;)x?(y.push(x),x=x.left):y.length>0?(x=P=P.next=y.pop(),x=x.right):M=!0;return P.next=null,I.next}function u(U,x,y){var M=y-x;if(M>0){var I=x+Math.floor(M/2),P=u(U,x,I),V=U.head;return V.left=P,U.head=U.head.next,V.right=u(U,I+1,y),V}return null}function d(U,x,y){for(var M=new t(null,null),I=M,P=U,V=x;P!==null&&V!==null;)y(P.key,V.key)<0?(I.next=P,P=P.next):(I.next=V,V=V.next),I=I.next;return P!==null?I.next=P:V!==null&&(I.next=V),M.next}function g(U,x,y,M,I){if(!(y>=M)){for(var P=U[y+M>>1],V=y-1,B=M+1;;){do V++;while(I(U[V],P)<0);do B--;while(I(U[B],P)>0);if(V>=B)break;var Q=U[V];U[V]=U[B],U[B]=Q,Q=x[V],x[V]=x[B],x[B]=Q}g(U,x,y,B,I),g(U,x,B+1,M,I)}}let _=(U,x)=>U.ll.x<=x.x&&x.x<=U.ur.x&&U.ll.y<=x.y&&x.y<=U.ur.y,p=(U,x)=>{if(x.ur.x<U.ll.x||U.ur.x<x.ll.x||x.ur.y<U.ll.y||U.ur.y<x.ll.y)return null;let y=U.ll.x<x.ll.x?x.ll.x:U.ll.x,M=U.ur.x<x.ur.x?U.ur.x:x.ur.x,I=U.ll.y<x.ll.y?x.ll.y:U.ll.y,P=U.ur.y<x.ur.y?U.ur.y:x.ur.y;return{ll:{x:y,y:I},ur:{x:M,y:P}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let E=m*m,C=(U,x)=>{if(-m<U&&U<m&&-m<x&&x<m)return 0;let y=U-x;return y*y<E*U*x?0:U<x?-1:1};class S{constructor(){this.reset()}reset(){this.xRounder=new w,this.yRounder=new w}round(x,y){return{x:this.xRounder.round(x),y:this.yRounder.round(y)}}}class w{constructor(){this.tree=new l,this.round(0)}round(x){let y=this.tree.add(x),M=this.tree.prev(y);if(M!==null&&C(y.key,M.key)===0)return this.tree.remove(x),M.key;let I=this.tree.next(y);return I!==null&&C(y.key,I.key)===0?(this.tree.remove(x),I.key):x}}let A=new S,D=11102230246251565e-32,v=134217729,L=(3+8*D)*D;function F(U,x,y,M,I){let P,V,B,Q,j=x[0],xt=M[0],R=0,Z=0;xt>j==xt>-j?(P=j,j=x[++R]):(P=xt,xt=M[++Z]);let H=0;if(R<U&&Z<y)for(xt>j==xt>-j?(V=j+P,B=P-(V-j),j=x[++R]):(V=xt+P,B=P-(V-xt),xt=M[++Z]),P=V,B!==0&&(I[H++]=B);R<U&&Z<y;)xt>j==xt>-j?(V=P+j,Q=V-P,B=P-(V-Q)+(j-Q),j=x[++R]):(V=P+xt,Q=V-P,B=P-(V-Q)+(xt-Q),xt=M[++Z]),P=V,B!==0&&(I[H++]=B);for(;R<U;)V=P+j,Q=V-P,B=P-(V-Q)+(j-Q),j=x[++R],P=V,B!==0&&(I[H++]=B);for(;Z<y;)V=P+xt,Q=V-P,B=P-(V-Q)+(xt-Q),xt=M[++Z],P=V,B!==0&&(I[H++]=B);return(P!==0||H===0)&&(I[H++]=P),H}function z(U,x){let y=x[0];for(let M=1;M<U;M++)y+=x[M];return y}function W(U){return new Float64Array(U)}let q=(3+16*D)*D,O=(2+12*D)*D,$=(9+64*D)*D*D,nt=W(4),K=W(8),ot=W(12),it=W(16),tt=W(4);function ht(U,x,y,M,I,P,V){let B,Q,j,xt,R,Z,H,pt,mt,ct,yt,wt,Kt,qt,fe,pe,je,Le,Qe=U-I,Xe=y-I,sn=x-P,tn=M-P;qt=Qe*tn,Z=v*Qe,H=Z-(Z-Qe),pt=Qe-H,Z=v*tn,mt=Z-(Z-tn),ct=tn-mt,fe=pt*ct-(qt-H*mt-pt*mt-H*ct),pe=sn*Xe,Z=v*sn,H=Z-(Z-sn),pt=sn-H,Z=v*Xe,mt=Z-(Z-Xe),ct=Xe-mt,je=pt*ct-(pe-H*mt-pt*mt-H*ct),yt=fe-je,R=fe-yt,nt[0]=fe-(yt+R)+(R-je),wt=qt+yt,R=wt-qt,Kt=qt-(wt-R)+(yt-R),yt=Kt-pe,R=Kt-yt,nt[1]=Kt-(yt+R)+(R-pe),Le=wt+yt,R=Le-wt,nt[2]=wt-(Le-R)+(yt-R),nt[3]=Le;let dn=z(4,nt),rn=O*V;if(dn>=rn||-dn>=rn||(R=U-Qe,B=U-(Qe+R)+(R-I),R=y-Xe,j=y-(Xe+R)+(R-I),R=x-sn,Q=x-(sn+R)+(R-P),R=M-tn,xt=M-(tn+R)+(R-P),B===0&&Q===0&&j===0&&xt===0)||(rn=$*V+L*Math.abs(dn),dn+=Qe*xt+tn*B-(sn*j+Xe*Q),dn>=rn||-dn>=rn))return dn;qt=B*tn,Z=v*B,H=Z-(Z-B),pt=B-H,Z=v*tn,mt=Z-(Z-tn),ct=tn-mt,fe=pt*ct-(qt-H*mt-pt*mt-H*ct),pe=Q*Xe,Z=v*Q,H=Z-(Z-Q),pt=Q-H,Z=v*Xe,mt=Z-(Z-Xe),ct=Xe-mt,je=pt*ct-(pe-H*mt-pt*mt-H*ct),yt=fe-je,R=fe-yt,tt[0]=fe-(yt+R)+(R-je),wt=qt+yt,R=wt-qt,Kt=qt-(wt-R)+(yt-R),yt=Kt-pe,R=Kt-yt,tt[1]=Kt-(yt+R)+(R-pe),Le=wt+yt,R=Le-wt,tt[2]=wt-(Le-R)+(yt-R),tt[3]=Le;let ks=F(4,nt,4,tt,K);qt=Qe*xt,Z=v*Qe,H=Z-(Z-Qe),pt=Qe-H,Z=v*xt,mt=Z-(Z-xt),ct=xt-mt,fe=pt*ct-(qt-H*mt-pt*mt-H*ct),pe=sn*j,Z=v*sn,H=Z-(Z-sn),pt=sn-H,Z=v*j,mt=Z-(Z-j),ct=j-mt,je=pt*ct-(pe-H*mt-pt*mt-H*ct),yt=fe-je,R=fe-yt,tt[0]=fe-(yt+R)+(R-je),wt=qt+yt,R=wt-qt,Kt=qt-(wt-R)+(yt-R),yt=Kt-pe,R=Kt-yt,tt[1]=Kt-(yt+R)+(R-pe),Le=wt+yt,R=Le-wt,tt[2]=wt-(Le-R)+(yt-R),tt[3]=Le;let Vr=F(ks,K,4,tt,ot);qt=B*xt,Z=v*B,H=Z-(Z-B),pt=B-H,Z=v*xt,mt=Z-(Z-xt),ct=xt-mt,fe=pt*ct-(qt-H*mt-pt*mt-H*ct),pe=Q*j,Z=v*Q,H=Z-(Z-Q),pt=Q-H,Z=v*j,mt=Z-(Z-j),ct=j-mt,je=pt*ct-(pe-H*mt-pt*mt-H*ct),yt=fe-je,R=fe-yt,tt[0]=fe-(yt+R)+(R-je),wt=qt+yt,R=wt-qt,Kt=qt-(wt-R)+(yt-R),yt=Kt-pe,R=Kt-yt,tt[1]=Kt-(yt+R)+(R-pe),Le=wt+yt,R=Le-wt,tt[2]=wt-(Le-R)+(yt-R),tt[3]=Le;let Gr=F(Vr,ot,4,tt,it);return it[Gr-1]}function It(U,x,y,M,I,P){let V=(x-P)*(y-I),B=(U-I)*(M-P),Q=V-B,j=Math.abs(V+B);return Math.abs(Q)>=q*j?Q:-ht(U,x,y,M,I,P,j)}let At=(U,x)=>U.x*x.y-U.y*x.x,jt=(U,x)=>U.x*x.x+U.y*x.y,Wt=(U,x,y)=>{let M=It(U.x,U.y,x.x,x.y,y.x,y.y);return M>0?-1:M<0?1:0},Yt=U=>Math.sqrt(jt(U,U)),ut=(U,x,y)=>{let M={x:x.x-U.x,y:x.y-U.y},I={x:y.x-U.x,y:y.y-U.y};return At(I,M)/Yt(I)/Yt(M)},gt=(U,x,y)=>{let M={x:x.x-U.x,y:x.y-U.y},I={x:y.x-U.x,y:y.y-U.y};return jt(I,M)/Yt(I)/Yt(M)},Tt=(U,x,y)=>x.y===0?null:{x:U.x+x.x/x.y*(y-U.y),y},Gt=(U,x,y)=>x.x===0?null:{x:y,y:U.y+x.y/x.x*(y-U.x)},Nt=(U,x,y,M)=>{if(x.x===0)return Gt(y,M,U.x);if(M.x===0)return Gt(U,x,y.x);if(x.y===0)return Tt(y,M,U.y);if(M.y===0)return Tt(U,x,y.y);let I=At(x,M);if(I==0)return null;let P={x:y.x-U.x,y:y.y-U.y},V=At(P,x)/I,B=At(P,M)/I,Q=U.x+B*x.x,j=y.x+V*M.x,xt=U.y+B*x.y,R=y.y+V*M.y,Z=(Q+j)/2,H=(xt+R)/2;return{x:Z,y:H}};class Ot{static compare(x,y){let M=Ot.comparePoints(x.point,y.point);return M!==0?M:(x.point!==y.point&&x.link(y),x.isLeft!==y.isLeft?x.isLeft?1:-1:ft.compare(x.segment,y.segment))}static comparePoints(x,y){return x.x<y.x?-1:x.x>y.x?1:x.y<y.y?-1:x.y>y.y?1:0}constructor(x,y){x.events===void 0?x.events=[this]:x.events.push(this),this.point=x,this.isLeft=y}link(x){if(x.point===this.point)throw new Error("Tried to link already linked events");let y=x.point.events;for(let M=0,I=y.length;M<I;M++){let P=y[M];this.point.events.push(P),P.point=this.point}this.checkForConsuming()}checkForConsuming(){let x=this.point.events.length;for(let y=0;y<x;y++){let M=this.point.events[y];if(M.segment.consumedBy===void 0)for(let I=y+1;I<x;I++){let P=this.point.events[I];P.consumedBy===void 0&&M.otherSE.point.events===P.otherSE.point.events&&M.segment.consume(P.segment)}}}getAvailableLinkedEvents(){let x=[];for(let y=0,M=this.point.events.length;y<M;y++){let I=this.point.events[y];I!==this&&!I.segment.ringOut&&I.segment.isInResult()&&x.push(I)}return x}getLeftmostComparator(x){let y=new Map,M=I=>{let P=I.otherSE;y.set(I,{sine:ut(this.point,x.point,P.point),cosine:gt(this.point,x.point,P.point)})};return(I,P)=>{y.has(I)||M(I),y.has(P)||M(P);let{sine:V,cosine:B}=y.get(I),{sine:Q,cosine:j}=y.get(P);return V>=0&&Q>=0?B<j?1:B>j?-1:0:V<0&&Q<0?B<j?-1:B>j?1:0:Q<V?-1:Q>V?1:0}}}let ae=0;class ft{static compare(x,y){let M=x.leftSE.point.x,I=y.leftSE.point.x,P=x.rightSE.point.x,V=y.rightSE.point.x;if(V<M)return 1;if(P<I)return-1;let B=x.leftSE.point.y,Q=y.leftSE.point.y,j=x.rightSE.point.y,xt=y.rightSE.point.y;if(M<I){if(Q<B&&Q<j)return 1;if(Q>B&&Q>j)return-1;let R=x.comparePoint(y.leftSE.point);if(R<0)return 1;if(R>0)return-1;let Z=y.comparePoint(x.rightSE.point);return Z!==0?Z:-1}if(M>I){if(B<Q&&B<xt)return-1;if(B>Q&&B>xt)return 1;let R=y.comparePoint(x.leftSE.point);if(R!==0)return R;let Z=x.comparePoint(y.rightSE.point);return Z<0?1:Z>0?-1:1}if(B<Q)return-1;if(B>Q)return 1;if(P<V){let R=y.comparePoint(x.rightSE.point);if(R!==0)return R}if(P>V){let R=x.comparePoint(y.rightSE.point);if(R<0)return 1;if(R>0)return-1}if(P!==V){let R=j-B,Z=P-M,H=xt-Q,pt=V-I;if(R>Z&&H<pt)return 1;if(R<Z&&H>pt)return-1}return P>V?1:P<V||j<xt?-1:j>xt?1:x.id<y.id?-1:x.id>y.id?1:0}constructor(x,y,M,I){this.id=++ae,this.leftSE=x,x.segment=this,x.otherSE=y,this.rightSE=y,y.segment=this,y.otherSE=x,this.rings=M,this.windings=I}static fromRing(x,y,M){let I,P,V,B=Ot.comparePoints(x,y);if(B<0)I=x,P=y,V=1;else if(B>0)I=y,P=x,V=-1;else throw new Error(`Tried to create degenerate segment at [${x.x}, ${x.y}]`);let Q=new Ot(I,!0),j=new Ot(P,!1);return new ft(Q,j,[M],[V])}replaceRightSE(x){this.rightSE=x,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let x=this.leftSE.point.y,y=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:x<y?x:y},ur:{x:this.rightSE.point.x,y:x>y?x:y}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(x){return x.x===this.leftSE.point.x&&x.y===this.leftSE.point.y||x.x===this.rightSE.point.x&&x.y===this.rightSE.point.y}comparePoint(x){if(this.isAnEndpoint(x))return 0;let y=this.leftSE.point,M=this.rightSE.point,I=this.vector();if(y.x===M.x)return x.x===y.x?0:x.x<y.x?1:-1;let P=(x.y-y.y)/I.y,V=y.x+P*I.x;if(x.x===V)return 0;let B=(x.x-y.x)/I.x,Q=y.y+B*I.y;return x.y===Q?0:x.y<Q?-1:1}getIntersection(x){let y=this.bbox(),M=x.bbox(),I=p(y,M);if(I===null)return null;let P=this.leftSE.point,V=this.rightSE.point,B=x.leftSE.point,Q=x.rightSE.point,j=_(y,B)&&this.comparePoint(B)===0,xt=_(M,P)&&x.comparePoint(P)===0,R=_(y,Q)&&this.comparePoint(Q)===0,Z=_(M,V)&&x.comparePoint(V)===0;if(xt&&j)return Z&&!R?V:!Z&&R?Q:null;if(xt)return R&&P.x===Q.x&&P.y===Q.y?null:P;if(j)return Z&&V.x===B.x&&V.y===B.y?null:B;if(Z&&R)return null;if(Z)return V;if(R)return Q;let H=Nt(P,this.vector(),B,x.vector());return H===null||!_(I,H)?null:A.round(H.x,H.y)}split(x){let y=[],M=x.events!==void 0,I=new Ot(x,!0),P=new Ot(x,!1),V=this.rightSE;this.replaceRightSE(P),y.push(P),y.push(I);let B=new ft(I,V,this.rings.slice(),this.windings.slice());return Ot.comparePoints(B.leftSE.point,B.rightSE.point)>0&&B.swapEvents(),Ot.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),M&&(I.checkForConsuming(),P.checkForConsuming()),y}swapEvents(){let x=this.rightSE;this.rightSE=this.leftSE,this.leftSE=x,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let y=0,M=this.windings.length;y<M;y++)this.windings[y]*=-1}consume(x){let y=this,M=x;for(;y.consumedBy;)y=y.consumedBy;for(;M.consumedBy;)M=M.consumedBy;let I=ft.compare(y,M);if(I!==0){if(I>0){let P=y;y=M,M=P}if(y.prev===M){let P=y;y=M,M=P}for(let P=0,V=M.rings.length;P<V;P++){let B=M.rings[P],Q=M.windings[P],j=y.rings.indexOf(B);j===-1?(y.rings.push(B),y.windings.push(Q)):y.windings[j]+=Q}M.rings=null,M.windings=null,M.consumedBy=y,M.leftSE.consumedBy=y.leftSE,M.rightSE.consumedBy=y.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let x=this.prev.consumedBy||this.prev;this._beforeState=x.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let x=this.beforeState();this._afterState={rings:x.rings.slice(0),windings:x.windings.slice(0),multiPolys:[]};let y=this._afterState.rings,M=this._afterState.windings,I=this._afterState.multiPolys;for(let B=0,Q=this.rings.length;B<Q;B++){let j=this.rings[B],xt=this.windings[B],R=y.indexOf(j);R===-1?(y.push(j),M.push(xt)):M[R]+=xt}let P=[],V=[];for(let B=0,Q=y.length;B<Q;B++){if(M[B]===0)continue;let j=y[B],xt=j.poly;if(V.indexOf(xt)===-1)if(j.isExterior)P.push(xt);else{V.indexOf(xt)===-1&&V.push(xt);let R=P.indexOf(j.poly);R!==-1&&P.splice(R,1)}}for(let B=0,Q=P.length;B<Q;B++){let j=P[B].multiPoly;I.indexOf(j)===-1&&I.push(j)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let x=this.beforeState().multiPolys,y=this.afterState().multiPolys;switch(Ht.type){case"union":{let M=x.length===0,I=y.length===0;this._isInResult=M!==I;break}case"intersection":{let M,I;x.length<y.length?(M=x.length,I=y.length):(M=y.length,I=x.length),this._isInResult=I===Ht.numMultiPolys&&M<I;break}case"xor":{let M=Math.abs(x.length-y.length);this._isInResult=M%2===1;break}case"difference":{let M=I=>I.length===1&&I[0].isSubject;this._isInResult=M(x)!==M(y);break}default:throw new Error(`Unrecognized operation type found ${Ht.type}`)}return this._isInResult}}class _t{constructor(x,y,M){if(!Array.isArray(x)||x.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=y,this.isExterior=M,this.segments=[],typeof x[0][0]!="number"||typeof x[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let I=A.round(x[0][0],x[0][1]);this.bbox={ll:{x:I.x,y:I.y},ur:{x:I.x,y:I.y}};let P=I;for(let V=1,B=x.length;V<B;V++){if(typeof x[V][0]!="number"||typeof x[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let Q=A.round(x[V][0],x[V][1]);Q.x===P.x&&Q.y===P.y||(this.segments.push(ft.fromRing(P,Q,this)),Q.x<this.bbox.ll.x&&(this.bbox.ll.x=Q.x),Q.y<this.bbox.ll.y&&(this.bbox.ll.y=Q.y),Q.x>this.bbox.ur.x&&(this.bbox.ur.x=Q.x),Q.y>this.bbox.ur.y&&(this.bbox.ur.y=Q.y),P=Q)}(I.x!==P.x||I.y!==P.y)&&this.segments.push(ft.fromRing(P,I,this))}getSweepEvents(){let x=[];for(let y=0,M=this.segments.length;y<M;y++){let I=this.segments[y];x.push(I.leftSE),x.push(I.rightSE)}return x}}class vt{constructor(x,y){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new _t(x[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let M=1,I=x.length;M<I;M++){let P=new _t(x[M],this,!1);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.interiorRings.push(P)}this.multiPoly=y}getSweepEvents(){let x=this.exteriorRing.getSweepEvents();for(let y=0,M=this.interiorRings.length;y<M;y++){let I=this.interiorRings[y].getSweepEvents();for(let P=0,V=I.length;P<V;P++)x.push(I[P])}return x}}class bt{constructor(x,y){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof x[0][0][0]=="number"&&(x=[x])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let M=0,I=x.length;M<I;M++){let P=new vt(x[M],this);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.polys.push(P)}this.isSubject=y}getSweepEvents(){let x=[];for(let y=0,M=this.polys.length;y<M;y++){let I=this.polys[y].getSweepEvents();for(let P=0,V=I.length;P<V;P++)x.push(I[P])}return x}}class Mt{static factory(x){let y=[];for(let M=0,I=x.length;M<I;M++){let P=x[M];if(!P.isInResult()||P.ringOut)continue;let V=null,B=P.leftSE,Q=P.rightSE,j=[B],xt=B.point,R=[];for(;V=B,B=Q,j.push(B),B.point!==xt;)for(;;){let Z=B.getAvailableLinkedEvents();if(Z.length===0){let mt=j[0].point,ct=j[j.length-1].point;throw new Error(`Unable to complete output ring starting at [${mt.x}, ${mt.y}]. Last matching segment found ends at [${ct.x}, ${ct.y}].`)}if(Z.length===1){Q=Z[0].otherSE;break}let H=null;for(let mt=0,ct=R.length;mt<ct;mt++)if(R[mt].point===B.point){H=mt;break}if(H!==null){let mt=R.splice(H)[0],ct=j.splice(mt.index);ct.unshift(ct[0].otherSE),y.push(new Mt(ct.reverse()));continue}R.push({index:j.length,point:B.point});let pt=B.getLeftmostComparator(V);Q=Z.sort(pt)[0].otherSE;break}y.push(new Mt(j))}return y}constructor(x){this.events=x;for(let y=0,M=x.length;y<M;y++)x[y].segment.ringOut=this;this.poly=null}getGeom(){let x=this.events[0].point,y=[x];for(let j=1,xt=this.events.length-1;j<xt;j++){let R=this.events[j].point,Z=this.events[j+1].point;Wt(R,x,Z)!==0&&(y.push(R),x=R)}if(y.length===1)return null;let M=y[0],I=y[1];Wt(M,x,I)===0&&y.shift(),y.push(y[0]);let P=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:y.length-1,B=this.isExteriorRing()?y.length:-1,Q=[];for(let j=V;j!=B;j+=P)Q.push([y[j].x,y[j].y]);return Q}isExteriorRing(){if(this._isExteriorRing===void 0){let x=this.enclosingRing();this._isExteriorRing=x?!x.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let x=this.events[0];for(let I=1,P=this.events.length;I<P;I++){let V=this.events[I];Ot.compare(x,V)>0&&(x=V)}let y=x.segment.prevInResult(),M=y?y.prevInResult():null;for(;;){if(!y)return null;if(!M)return y.ringOut;if(M.ringOut!==y.ringOut)return M.ringOut.enclosingRing()!==y.ringOut?y.ringOut:y.ringOut.enclosingRing();y=M.prevInResult(),M=y?y.prevInResult():null}}}class dt{constructor(x){this.exteriorRing=x,x.poly=this,this.interiorRings=[]}addInterior(x){this.interiorRings.push(x),x.poly=this}getGeom(){let x=[this.exteriorRing.getGeom()];if(x[0]===null)return null;for(let y=0,M=this.interiorRings.length;y<M;y++){let I=this.interiorRings[y].getGeom();I!==null&&x.push(I)}return x}}class Et{constructor(x){this.rings=x,this.polys=this._composePolys(x)}getGeom(){let x=[];for(let y=0,M=this.polys.length;y<M;y++){let I=this.polys[y].getGeom();I!==null&&x.push(I)}return x}_composePolys(x){let y=[];for(let M=0,I=x.length;M<I;M++){let P=x[M];if(!P.poly)if(P.isExteriorRing())y.push(new dt(P));else{let V=P.enclosingRing();V.poly||y.push(new dt(V)),V.poly.addInterior(P)}}return y}}class Pt{constructor(x){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ft.compare;this.queue=x,this.tree=new l(y),this.segments=[]}process(x){let y=x.segment,M=[];if(x.consumedBy)return x.isLeft?this.queue.remove(x.otherSE):this.tree.remove(y),M;let I=x.isLeft?this.tree.add(y):this.tree.find(y);if(!I)throw new Error(`Unable to find segment #${y.id} [${y.leftSE.point.x}, ${y.leftSE.point.y}] -> [${y.rightSE.point.x}, ${y.rightSE.point.y}] in SweepLine tree.`);let P=I,V=I,B,Q;for(;B===void 0;)P=this.tree.prev(P),P===null?B=null:P.key.consumedBy===void 0&&(B=P.key);for(;Q===void 0;)V=this.tree.next(V),V===null?Q=null:V.key.consumedBy===void 0&&(Q=V.key);if(x.isLeft){let j=null;if(B){let R=B.getIntersection(y);if(R!==null&&(y.isAnEndpoint(R)||(j=R),!B.isAnEndpoint(R))){let Z=this._splitSafely(B,R);for(let H=0,pt=Z.length;H<pt;H++)M.push(Z[H])}}let xt=null;if(Q){let R=Q.getIntersection(y);if(R!==null&&(y.isAnEndpoint(R)||(xt=R),!Q.isAnEndpoint(R))){let Z=this._splitSafely(Q,R);for(let H=0,pt=Z.length;H<pt;H++)M.push(Z[H])}}if(j!==null||xt!==null){let R=null;j===null?R=xt:xt===null?R=j:R=Ot.comparePoints(j,xt)<=0?j:xt,this.queue.remove(y.rightSE),M.push(y.rightSE);let Z=y.split(R);for(let H=0,pt=Z.length;H<pt;H++)M.push(Z[H])}M.length>0?(this.tree.remove(y),M.push(x)):(this.segments.push(y),y.prev=B)}else{if(B&&Q){let j=B.getIntersection(Q);if(j!==null){if(!B.isAnEndpoint(j)){let xt=this._splitSafely(B,j);for(let R=0,Z=xt.length;R<Z;R++)M.push(xt[R])}if(!Q.isAnEndpoint(j)){let xt=this._splitSafely(Q,j);for(let R=0,Z=xt.length;R<Z;R++)M.push(xt[R])}}}this.tree.remove(y)}return M}_splitSafely(x,y){this.tree.remove(x);let M=x.rightSE;this.queue.remove(M);let I=x.split(y);return I.push(M),x.consumedBy===void 0&&this.tree.add(x),I}}let Rt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,k=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class se{run(x,y,M){Ht.type=x,A.reset();let I=[new bt(y,!0)];for(let R=0,Z=M.length;R<Z;R++)I.push(new bt(M[R],!1));if(Ht.numMultiPolys=I.length,Ht.type==="difference"){let R=I[0],Z=1;for(;Z<I.length;)p(I[Z].bbox,R.bbox)!==null?Z++:I.splice(Z,1)}if(Ht.type==="intersection")for(let R=0,Z=I.length;R<Z;R++){let H=I[R];for(let pt=R+1,mt=I.length;pt<mt;pt++)if(p(H.bbox,I[pt].bbox)===null)return[]}let P=new l(Ot.compare);for(let R=0,Z=I.length;R<Z;R++){let H=I[R].getSweepEvents();for(let pt=0,mt=H.length;pt<mt;pt++)if(P.insert(H[pt]),P.size>Rt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new Pt(P),B=P.size,Q=P.pop();for(;Q;){let R=Q.key;if(P.size===B){let H=R.segment;throw new Error(`Unable to pop() ${R.isLeft?"left":"right"} SweepEvent [${R.point.x}, ${R.point.y}] from segment #${H.id} [${H.leftSE.point.x}, ${H.leftSE.point.y}] -> [${H.rightSE.point.x}, ${H.rightSE.point.y}] from queue.`)}if(P.size>Rt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>k)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let Z=V.process(R);for(let H=0,pt=Z.length;H<pt;H++){let mt=Z[H];mt.consumedBy===void 0&&P.insert(mt)}B=P.size,Q=P.pop()}A.reset();let j=Mt.factory(V.segments);return new Et(j).getGeom()}}let Ht=new se;var lt={union:function(U){for(var x=arguments.length,y=new Array(x>1?x-1:0),M=1;M<x;M++)y[M-1]=arguments[M];return Ht.run("union",U,y)},intersection:function(U){for(var x=arguments.length,y=new Array(x>1?x-1:0),M=1;M<x;M++)y[M-1]=arguments[M];return Ht.run("intersection",U,y)},xor:function(U){for(var x=arguments.length,y=new Array(x>1?x-1:0),M=1;M<x;M++)y[M-1]=arguments[M];return Ht.run("xor",U,y)},difference:function(U){for(var x=arguments.length,y=new Array(x>1?x-1:0),M=1;M<x;M++)y[M-1]=arguments[M];return Ht.run("difference",U,y)}};return lt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Uh=0,ql=1,Fh=2;var Vi=1,Oh=2,Rs=3,Ei=0,Ke=1,kn=2,Vn=0,Cs=1,Mr=2,Yl=3,Zl=4,Bh=5;var Gi=100,zh=101,kh=102,Vh=103,Gh=104,Hh=200,Wh=201,Xh=202,qh=203,Jl=204,$l=205,Yh=206,Zh=207,Jh=208,$h=209,Kh=210,jh=211,Qh=212,tu=213,eu=214,yo=0,vo=1,bo=2,ds=3,So=4,Mo=5,Eo=6,wo=7,ia=0,nu=1,iu=2,wn=0,Kl=1,jl=2,Ql=3,Er=4,tc=5,ec=6,nc=7;var ic=300,wi=301,Hi=302,sa=303,ra=304,wr=306,Di=1e3,Dn=1001,To=1002,Ue=1003,su=1004;var Tr=1005;var Be=1006,oa=1007;var Ti=1008;var nn=1009,sc=1010,rc=1011,Is=1012,aa=1013,Tn=1014,An=1015,Rn=1016,la=1017,ca=1018,Ps=1020,oc=35902,ac=35899,lc=1021,cc=1022,xn=1023,Fn=1026,Ai=1027,hc=1028,ha=1029,Ri=1030,ua=1031;var fa=1033,Ar=33776,Rr=33777,Cr=33778,Ir=33779,da=35840,pa=35841,ma=35842,ga=35843,xa=36196,_a=37492,ya=37496,va=37488,ba=37489,Pr=37490,Sa=37491,Ma=37808,Ea=37809,wa=37810,Ta=37811,Aa=37812,Ra=37813,Ca=37814,Ia=37815,Pa=37816,La=37817,Na=37818,Da=37819,Ua=37820,Fa=37821,Oa=36492,Ba=36494,za=36495,ka=36283,Va=36284,Lr=36285,Ga=36286;var Ks=2300,Ao=2301,xo=2302,Ll=2303,Nl=2400,Dl=2401,Ul=2402;var ru=3200;var Nr=0,ou=1,ni="",Re="srgb",js="srgb-linear",Qs="linear",he="srgb";var _o=7680;var au=519,lu=512,cu=513,hu=514,Ha=515,uu=516,fu=517,Wa=518,du=519,pu=35044,Xa=35048;var uc="300 es",Sn=2e3,ps=2001;function jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mu(){let i=tr("canvas");return i.style.display="block",i}var Qc={},ms=null;function fc(...i){let t="THREE."+i.shift();ms?ms("log",t,...i):console.log(t,...i)}function gu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=gu(i);let t="THREE."+i.shift();if(ms)ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=gu(i);let t="THREE."+i.shift();if(ms)ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ni(...i){let t=i.join(" ");t in Qc||(Qc[t]=!0,Xt(...i))}function xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _u={[yo]:vo,[bo]:Eo,[So]:wo,[ds]:Mo,[vo]:yo,[Eo]:bo,[wo]:So,[Mo]:ds},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=1234567,Ys=Math.PI/180,gs=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function dc(i,t){return(i%t+t)%t}function td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ed(i,t,e){return i!==t?(e-i)/(t-i):0}function Zs(i,t,e){return(1-e)*i+e*t}function nd(i,t,e,n){return Zs(i,t,1-Math.exp(-e*n))}function id(i,t=1){return t-Math.abs(dc(i,t*2)-t)}function sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ad(i,t){return i+Math.random()*(t-i)}function ld(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(th=i);let t=th+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hd(i){return i*Ys}function ud(i){return i*gs}function fd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ii={DEG2RAD:Ys,RAD2DEG:gs,generateUUID:Wi,clamp:ne,euclideanModulo:dc,mapLinear:td,inverseLerp:ed,lerp:Zs,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:od,randFloat:ad,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:fd,ceilPowerOfTwo:dd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:Ye,denormalize:us},St=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(f!==_||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*_;p<0&&(u=-u,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let E=Math.acos(p),C=Math.sin(E);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C,l=l*m+u*a,c=c*m+d*a,h=h*m+g*a,f=f*m+_*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+g*a,f=f*m+_*a;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new G,eh=new gn,$t=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],E=s[1],C=s[4],S=s[7],w=s[2],A=s[5],D=s[8];return r[0]=o*_+a*E+l*w,r[3]=o*p+a*C+l*A,r[6]=o*m+a*S+l*D,r[1]=c*_+h*E+f*w,r[4]=c*p+h*C+f*A,r[7]=c*m+h*S+f*D,r[2]=u*_+d*E+g*w,r[5]=u*p+d*C+g*A,r[8]=u*m+d*S+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(t,e)),this}rotate(t){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ll=new $t,nh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){let i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:t,whitePoint:n,transfer:Qs,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:he,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var re=gd();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ji,Ro=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=tr("canvas")),ji.width=t.width,ji.height=t.height;let s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xd=0,xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var _d=0,hl=new G,Je=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=Be,o=Ti,a=xn,l=nn,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Wi(),this.name="",this.source=new xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=ic;Je.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,S=(d+1)/2,w=(m+1)/2,A=(h+u)/4,D=(f+_)/4,v=(g+p)/4;return C>S&&C>w?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=A/n,r=D/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=D/r,s=v/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Co=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Co{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},er=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,vd)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ui.crossVectors(n,on),ui.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ui.crossVectors(n,on)),ui.normalize(),Xr.crossVectors(on,ui),s[0]=ui.x,s[4]=Xr.x,s[8]=on.x,s[1]=ui.y,s[5]=Xr.y,s[9]=on.y,s[2]=ui.z,s[6]=Xr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],C=n[7],S=n[11],w=n[15],A=s[0],D=s[4],v=s[8],L=s[12],F=s[1],z=s[5],W=s[9],q=s[13],O=s[2],$=s[6],nt=s[10],K=s[14],ot=s[3],it=s[7],tt=s[11],ht=s[15];return r[0]=o*A+a*F+l*O+c*ot,r[4]=o*D+a*z+l*$+c*it,r[8]=o*v+a*W+l*nt+c*tt,r[12]=o*L+a*q+l*K+c*ht,r[1]=h*A+f*F+u*O+d*ot,r[5]=h*D+f*z+u*$+d*it,r[9]=h*v+f*W+u*nt+d*tt,r[13]=h*L+f*q+u*K+d*ht,r[2]=g*A+_*F+p*O+m*ot,r[6]=g*D+_*z+p*$+m*it,r[10]=g*v+_*W+p*nt+m*tt,r[14]=g*L+_*q+p*K+m*ht,r[3]=E*A+C*F+S*O+w*ot,r[7]=E*D+C*z+S*$+w*it,r[11]=E*v+C*W+S*nt+w*tt,r[15]=E*L+C*q+S*K+w*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15],E=l*d-c*u,C=a*d-c*f,S=a*u-l*f,w=o*d-c*h,A=o*u-l*h,D=o*f-a*h;return e*(_*E-p*C+m*S)-n*(g*E-p*w+m*A)+s*(g*C-_*w+m*D)-r*(g*S-_*A+p*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],E=e*a-n*o,C=e*l-s*o,S=e*c-r*o,w=n*l-s*a,A=n*c-r*a,D=s*c-r*l,v=h*_-f*g,L=h*p-u*g,F=h*m-d*g,z=f*p-u*_,W=f*m-d*_,q=u*m-d*p,O=E*q-C*W+S*z+w*F-A*L+D*v;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/O;return t[0]=(a*q-l*W+c*z)*$,t[1]=(s*W-n*q-r*z)*$,t[2]=(_*D-p*A+m*w)*$,t[3]=(u*A-f*D-d*w)*$,t[4]=(l*F-o*q-c*L)*$,t[5]=(e*q-s*F+r*L)*$,t[6]=(p*S-g*D-m*C)*$,t[7]=(h*D-u*S+d*C)*$,t[8]=(o*W-a*F+c*v)*$,t[9]=(n*F-e*W-r*v)*$,t[10]=(g*A-_*S+m*E)*$,t[11]=(f*S-h*A-d*E)*$,t[12]=(a*L-o*z-l*v)*$,t[13]=(e*z-n*L+s*v)*$,t[14]=(_*C-g*w-p*E)*$,t[15]=(h*w-f*C+u*E)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,_=o*h,p=o*f,m=a*f,E=l*c,C=l*h,S=l*f,w=n.x,A=n.y,D=n.z;return s[0]=(1-(_+m))*w,s[1]=(d+S)*w,s[2]=(g-C)*w,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(u+m))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(g+C)*D,s[9]=(p-E)*D,s[10]=(1-(u+_))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Qi.set(s[0],s[1],s[2]).length(),a=Qi.set(s[4],s[5],s[6]).length(),l=Qi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);let c=1/o,h=1/a,f=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ps)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Sn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ps)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new G,yn=new ue,yd=new G(0,0,0),vd=new G(1,1,1),ui=new G,Xr=new G,on=new G,sh=new ue,rh=new gn,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bd=0,oh=new G,ts=new gn,qn=new ue,qr=new G,Vs=new G,Sd=new G,Md=new gn,ah=new G(1,0,0),lh=new G(0,1,0),ch=new G(0,0,1),hh={type:"added"},Ed={type:"removed"},es={type:"childadded",child:null},ul={type:"childremoved",child:null},Fe=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Bn,n=new gn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new $t}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Vs,qr,this.up):qn.lookAt(qr,Vs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(qn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hh),es.child=t,this.dispatchEvent(es),es.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new G(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},wd={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=dc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return re.workingToColorSpace(Ve.copy(this),t),Math.round(ne(Ve.r*255,0,255))*65536+Math.round(ne(Ve.g*255,0,255))*256+Math.round(ne(Ve.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Re){re.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Yr);let n=Zs(fi.h,Yr.h,e),s=Zs(fi.s,Yr.s,e),r=Zs(fi.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Jt;Jt.NAMES=yu;var nr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new G,Yn=new G,dl=new G,Zn=new G,ns=new G,is=new G,uh=new G,pl=new G,ml=new G,gl=new G,xl=new Se,_l=new Se,yl=new Se,gi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Yn.subVectors(n,e),dl.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Yn),l=vn.dot(dl),c=Yn.dot(Yn),h=Yn.dot(dl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xl.setScalar(0),_l.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),yl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Yn.subVectors(t,e),vn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),vn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ns.subVectors(s,n),is.subVectors(r,n),pl.subVectors(t,n);let l=ns.dot(pl),c=is.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,s);let h=ns.dot(ml),f=is.dot(ml);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ns,o);gl.subVectors(t,r);let d=ns.dot(gl),g=is.dot(gl);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(is,a);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return uh.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(uh,a);let m=1/(p+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Jr.subVectors(this.max,Gs),ss.subVectors(t.a,Gs),rs.subVectors(t.b,Gs),os.subVectors(t.c,Gs),di.subVectors(rs,ss),pi.subVectors(os,rs),Ci.subVectors(ss,os);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ci.z,Ci.y,di.z,0,-di.x,pi.z,0,-pi.x,Ci.z,0,-Ci.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ci.y,Ci.x,0];return!vl(e,ss,rs,os,Jr)||(e=[1,0,0,0,1,0,0,0,1],!vl(e,ss,rs,os,Jr))?!1:($r.crossVectors(di,pi),e=[$r.x,$r.y,$r.z],vl(e,ss,rs,os,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new G,new G,new G,new G,new G,new G,new G,new G],bn=new G,Zr=new zn,ss=new G,rs=new G,os=new G,di=new G,pi=new G,Ci=new G,Gs=new G,Jr=new G,$r=new G,Ii=new G;function vl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ae=new G,Kr=new St,Td=0,De=class extends On{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pu,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sr=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ad=new zn,Hs=new G,bl=new G,xi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ad.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);let e=Hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(bl)),this.expandByPoint(Hs.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rd=0,mn=new ue,Sl=new Fe,as=new G,an=new zn,Ws=new zn,Ne=new G,Me=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?sr:ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(an.min,Ws.min),an.expandByPoint(Ne),Ne.addVectors(an.max,Ws.max),an.expandByPoint(Ne)):(an.expandByPoint(Ws.min),an.expandByPoint(Ws.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Ne.add(as)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new G,l[v]=new G;let c=new G,h=new G,f=new G,u=new St,d=new St,g=new St,_=new G,p=new G;function m(v,L,F){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,L),g.fromBufferAttribute(r,F),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let z=1/(d.x*g.y-g.x*d.y);isFinite(z)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(z),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(z),a[v].add(_),a[L].add(_),a[F].add(_),l[v].add(p),l[L].add(p),l[F].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,L=E.length;v<L;++v){let F=E[v],z=F.start,W=F.count;for(let q=z,O=z+W;q<O;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let C=new G,S=new G,w=new G,A=new G;function D(v){w.fromBufferAttribute(s,v),A.copy(w);let L=a[v];C.copy(L),C.sub(w.multiplyScalar(w.dot(L))).normalize(),S.crossVectors(A,L);let z=S.dot(l[v])<0?-1:1;o.setXYZW(v,C.x,C.y,C.z,z)}for(let v=0,L=E.length;v<L;++v){let F=E[v],z=F.start,W=F.count;for(let q=z,O=z+W;q<O;q+=3)D(t.getX(q+0)),D(t.getX(q+1)),D(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,f=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new De(u,h,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=new G,Cd=new G,Id=new $t,ln=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Id.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pd=0,Mn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Cs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=$l,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var $n=new G,El=new G,jr=new G,Qr=new G,Ui=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){El.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Qr.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Qr.dot(this.direction),l=-Qr.dot(jr),c=Qr.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(El).addScaledVector(jr,u),d}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,g=e.x-o.x,_=e.y-o.y,p=e.z-o.z,m=n.x-o.x,E=n.y-o.y,C=n.z-o.z,S=Math.abs(l),w=Math.abs(c),A=Math.abs(h),D,v,L,F,z,W,q,O,$,nt,K,ot;if(S>=w&&S>=A?(L=l,W=f,$=g,ot=m,l>=0?(D=c,v=h,F=u,z=d,q=_,O=p,nt=E,K=C):(D=h,v=c,F=d,z=u,q=p,O=_,nt=C,K=E)):w>=A?(L=c,W=u,$=_,ot=E,c>=0?(D=h,v=l,F=d,z=f,q=p,O=g,nt=C,K=m):(D=l,v=h,F=f,z=d,q=g,O=p,nt=m,K=C)):(L=h,W=d,$=p,ot=C,h>=0?(D=l,v=c,F=f,z=u,q=g,O=_,nt=m,K=E):(D=c,v=l,F=u,z=f,q=_,O=g,nt=E,K=m)),L===0)return null;let it=D/L,tt=v/L,ht=1/L,It=F-it*W,At=z-tt*W,jt=q-it*$,Wt=O-tt*$,Yt=nt-it*ot,ut=K-tt*ot,gt=Yt*Wt-ut*jt,Tt=It*ut-At*Yt,Gt=jt*At-Wt*It;if(s){if(gt<0||Tt<0||Gt<0)return null}else if((gt<0||Tt<0||Gt<0)&&(gt>0||Tt>0||Gt>0))return null;let Nt=gt+Tt+Gt;if(Nt===0)return null;let Ot=ht*(gt*W+Tt*$+Gt*ot);return(Nt>0?Ot<0:Ot>0)?null:this.at(Ot/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jn=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fh=new ue,Pi=new Ui,to=new xi,dh=new G,eo=new G,no=new G,io=new G,wl=new G,so=new G,ph=new G,ro=new G,xe=class extends Fe{constructor(t=new Me,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(wl.fromBufferAttribute(f,t),o?so.addScaledVector(wl,h):so.addScaledVector(wl.sub(e),h))}e.add(so)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(to.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(to,dh)===null||Pi.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(fh.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(fh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],E=Math.max(p.start,d.start),C=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=E,w=C;S<w;S+=3){let A=a.getX(S),D=a.getX(S+1),v=a.getX(S+2);s=oo(this,m,t,n,c,h,f,A,D,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let E=a.getX(p),C=a.getX(p+1),S=a.getX(p+2);s=oo(this,o,t,n,c,h,f,E,C,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],E=Math.max(p.start,d.start),C=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=E,w=C;S<w;S+=3){let A=S,D=S+1,v=S+2;s=oo(this,m,t,n,c,h,f,A,D,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){let E=p,C=p+1,S=p+2;s=oo(this,o,t,n,c,h,f,E,C,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ld(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ei,a),l===null)return null;ro.copy(a),ro.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ro);return c<e.near||c>e.far?null:{distance:c,point:ro.clone(),object:i}}function oo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,eo),i.getVertexPosition(l,no),i.getVertexPosition(c,io);let h=Ld(i,t,e,n,eo,no,io,ph);if(h){let f=new G;gi.getBarycoord(ph,eo,no,io,f),s&&(h.uv=gi.getInterpolatedAttribute(s,a,l,c,f,new St)),r&&(h.uv1=gi.getInterpolatedAttribute(r,a,l,c,f,new St)),o&&(h.normal=gi.getInterpolatedAttribute(o,a,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};gi.getNormal(eo,no,io,u.normal),h.face=u,h.barycoord=f}return h}var Po=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ue,h=Ue,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=new xi,Nd=new St(.5,.5),ao=new G,vs=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],_=r[9],p=r[10],m=r[11],E=r[12],C=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-o,d-h,m-g,w-E).normalize(),s[1].setComponents(c+o,d+h,m+g,w+E).normalize(),s[2].setComponents(c+a,d+f,m+_,w+C).normalize(),s[3].setComponents(c-a,d-f,m-_,w-C).normalize(),n)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,d-u,m-p,w-S).normalize();else if(s[4].setComponents(c-l,d-u,m-p,w-S).normalize(),e===Sn)s[5].setComponents(c+l,d+u,m+p,w+S).normalize();else if(e===ps)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=Nd.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ao.x=s.normal.x>0?t.max.x:t.min.x,ao.y=s.normal.y>0?t.max.y:t.min.y,ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bs=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lo=new G,No=new G,mh=new ue,Xs=new Ui,lo=new xi,Tl=new G,gh=new G,Do=class extends Fe{constructor(t=new Me,e=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lo.fromBufferAttribute(e,s-1),No.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lo.distanceTo(No);t.setAttribute("lineDistance",new oe(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,t.ray.intersectsSphere(lo)===!1)return;mh.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(mh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){let m=h.getX(_),E=h.getX(_+1),C=co(this,t,Xs,l,m,E,_);C&&e.push(C)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(d),m=co(this,t,Xs,l,_,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=c){let m=co(this,t,Xs,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=co(this,t,Xs,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function co(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Lo.fromBufferAttribute(a,s),No.fromBufferAttribute(a,r),e.distanceSqToSegment(Lo,No,Tl,gh)>n)return;Tl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Tl);if(!(c<t.near||c>t.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var xh=new G,_h=new G,rr=class extends Do{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xh.fromBufferAttribute(e,s),_h.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xh.distanceTo(_h);t.setAttribute("lineDistance",new oe(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ss=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yh=new ue,Fl=new Ui,ho=new xi,uo=new G,or=class extends Fe{constructor(t=new Me,e=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;yh.copy(s).invert(),Fl.copy(t.ray).applyMatrix4(yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=u,_=d;g<_;g++){let p=c.getX(g);uo.fromBufferAttribute(f,p),vh(uo,p,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,_=d;g<_;g++)uo.fromBufferAttribute(f,g),vh(uo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vh(i,t,e,n,s,r,o){let a=Fl.distanceSqToPoint(i);if(a<e){let l=new G;Fl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ar=class extends Je{constructor(t=[],e=wi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ms=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends Je{constructor(t,e,n=Tn,s,r,o,a=Ue,l=Ue,c,h=Fn,f=1){if(h!==Fn&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Uo=class extends _i{constructor(t,e=Tn,n=wi,s,r,o=Ue,a=Ue,l,c=Fn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},lr=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ge=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function g(_,p,m,E,C,S,w,A,D,v,L){let F=S/D,z=w/v,W=S/2,q=w/2,O=A/2,$=D+1,nt=v+1,K=0,ot=0,it=new G;for(let tt=0;tt<nt;tt++){let ht=tt*z-q;for(let It=0;It<$;It++){let At=It*F-W;it[_]=At*E,it[p]=ht*C,it[m]=O,c.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[m]=A>0?1:-1,h.push(it.x,it.y,it.z),f.push(It/D),f.push(1-tt/v),K+=1}}for(let tt=0;tt<v;tt++)for(let ht=0;ht<D;ht++){let It=u+ht+$*tt,At=u+ht+$*(tt+1),jt=u+(ht+1)+$*(tt+1),Wt=u+(ht+1)+$*tt;l.push(It,At,Wt),l.push(At,jt,Wt),ot+=6}a.addGroup(d,ot,L),d+=ot,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fi=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,_=[],p=n/2,m=0;E(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function E(){let S=new G,w=new G,A=0,D=(e-t)/n;for(let v=0;v<=r;v++){let L=[],F=v/r,z=F*(e-t)+t;for(let W=0;W<=s;W++){let q=W/s,O=q*l+a,$=Math.sin(O),nt=Math.cos(O);w.x=z*$,w.y=-F*n+p,w.z=z*nt,f.push(w.x,w.y,w.z),S.set($,D,nt).normalize(),u.push(S.x,S.y,S.z),d.push(q,1-F),L.push(g++)}_.push(L)}for(let v=0;v<s;v++)for(let L=0;L<r;L++){let F=_[L][v],z=_[L+1][v],W=_[L+1][v+1],q=_[L][v+1];(t>0||L!==0)&&(h.push(F,z,q),A+=3),(e>0||L!==r-1)&&(h.push(z,W,q),A+=3)}c.addGroup(m,A,0),m+=A}function C(S){let w=g,A=new St,D=new G,v=0,L=S===!0?t:e,F=S===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,p*F,0),u.push(0,F,0),d.push(.5,.5),g++;let z=g;for(let W=0;W<=s;W++){let O=W/s*l+a,$=Math.cos(O),nt=Math.sin(O);D.x=L*nt,D.y=p*F,D.z=L*$,f.push(D.x,D.y,D.z),u.push(0,F,0),A.x=$*.5+.5,A.y=nt*.5*F+.5,d.push(A.x,A.y),g++}for(let W=0;W<s;W++){let q=w+W,O=z+W;S===!0?h.push(O,O+1,q):h.push(O+1,O,q),v+=3}c.addGroup(m,v,S===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new St:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,l=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Es=class extends cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fo=class extends Es{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var bh=new G,Sh=new G,Al=new pc,Rl=new pc,Cl=new pc,Oo=class extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Sh.subVectors(s[0],s[1]).add(s[0]),c=Sh);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(bh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Al.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),Rl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),Cl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Rl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Cl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Al.calc(l),Rl.calc(l),Cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Dd(i,t){let e=1-i;return e*e*t}function Ud(i,t){return 2*(1-i)*i*t}function Fd(i,t){return i*i*t}function Js(i,t,e,n){return Dd(i,t)+Ud(i,e)+Fd(i,n)}function Od(i,t){let e=1-i;return e*e*e*t}function Bd(i,t){let e=1-i;return 3*e*e*i*t}function zd(i,t){return 3*(1-i)*i*i*t}function kd(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Od(i,t)+Bd(i,e)+zd(i,n)+kd(i,s)}var cr=class extends cn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends cn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hr=class extends cn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends cn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ur=class extends cn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends cn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y),Js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fr=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Mh(a,l.x,c.x,h.x,f.x),Mh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},Ol=Object.freeze({__proto__:null,ArcCurve:Fo,CatmullRomCurve3:Oo,CubicBezierCurve:cr,CubicBezierCurve3:Bo,EllipseCurve:Es,LineCurve:hr,LineCurve3:zo,QuadraticBezierCurve:ur,QuadraticBezierCurve3:ko,SplineCurve:fr}),Vo=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ol[s.type]().fromJSON(s))}return this}},Oi=class extends Vo{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new hr(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ur(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new cr(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new fr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Es(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hn=class extends Oi{constructor(t){super(t),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Oi().fromJSON(s))}return this}};function Vd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=qd(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return dr(r,o,e,a,l,c,0),o}function vu(i,t,e,n,s){let r;if(s===ip(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Eh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Eh(o/n|0,i[o],i[o+1],r);return r&&ws(r,r.next)&&(mr(r),r=r.next),r}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||Ee(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Kd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Hd(i,n,s,r):Gd(i)){t.push(l.i,i.i,c.i),mr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Wd(Bi(i),t),dr(i,t,e,n,s,r,2)):o===2&&Xd(i,t,e,n,s,r):dr(Bi(i),t,e,n,s,r,1);break}}}function Gd(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&qs(s,a,r,l,o,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hd(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),g=Math.min(h,f,u),_=Math.max(a,l,c),p=Math.max(h,f,u),m=Bl(d,g,t,e,n),E=Bl(_,p,t,e,n),C=i.prevZ,S=i.nextZ;for(;C&&C.z>=m&&S&&S.z<=E;){if(C.x>=d&&C.x<=_&&C.y>=g&&C.y<=p&&C!==s&&C!==o&&qs(a,h,l,f,c,u,C.x,C.y)&&Ee(C.prev,C,C.next)>=0||(C=C.prevZ,S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&qs(a,h,l,f,c,u,S.x,S.y)&&Ee(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;C&&C.z>=m;){if(C.x>=d&&C.x<=_&&C.y>=g&&C.y<=p&&C!==s&&C!==o&&qs(a,h,l,f,c,u,C.x,C.y)&&Ee(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;S&&S.z<=E;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&qs(a,h,l,f,c,u,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Wd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ws(n,s)&&Su(n,e,e.next,s)&&pr(n,s)&&pr(s,n)&&(t.push(n.i,e.i,s.i),mr(e),mr(e.next),e=i=s),e=e.next}while(e!==i);return Bi(e)}function Xd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tp(o,a)){let l=Mu(o,a);o=Bi(o,o.next),l=Bi(l,l.next),dr(o,t,e,n,s,r,0),dr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=vu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Qd(c))}s.sort(Yd);for(let r=0;r<s.length;r++)e=Zd(s[r],e);return e}function Yd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Zd(i,t){let e=Jd(i,t);if(!e)return t;let n=Mu(e,i);return Bi(n,n.next),Bi(e,e.next)}function Jd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ws(i,e))return e;do{if(ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&bu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);pr(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&$d(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function $d(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Kd(i,t,e,n){let s=i;do s.z===0&&(s.z=Bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jd(s)}function jd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Qd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function qs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&bu(i,t,e,n,s,r,o,a)}function tp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ep(i,t)&&(pr(i,t)&&pr(t,i)&&np(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||ws(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function Su(i,t,e,n){let s=po(Ee(i,t,e)),r=po(Ee(i,t,n)),o=po(Ee(e,n,i)),a=po(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&fo(i,e,t)||r===0&&fo(i,n,t)||o===0&&fo(e,i,n)||a===0&&fo(e,t,n))}function fo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function po(i){return i>0?1:i<0?-1:0}function ep(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function pr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function np(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mu(i,t){let e=zl(i.i,i.x,i.y),n=zl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eh(i,t,e,n){let s=zl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ip(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var kl=class{static triangulate(t,e,n=2){return Vd(t,e,n)}},Un=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wh(t),Th(n,t);let o=t.length;e.forEach(wh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Th(n,e[l]);let a=kl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function wh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Th(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qn=class i extends Me{constructor(t=new hn([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:sp,C,S=!1,w,A,D,v;if(m){C=m.getSpacedPoints(h),S=!0,u=!1;let ft=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,ft),A=new G,D=new G,v=new G}u||(p=0,d=0,g=0,_=0);let L=a.extractPoints(c),F=L.shape,z=L.holes;if(!Un.isClockWise(F)){F=F.reverse();for(let ft=0,_t=z.length;ft<_t;ft++){let vt=z[ft];Un.isClockWise(vt)&&(z[ft]=vt.reverse())}}function q(ft){let vt=10000000000000001e-36,bt=ft[0];for(let Mt=1;Mt<=ft.length;Mt++){let dt=Mt%ft.length,Et=ft[dt],Pt=Et.x-bt.x,Rt=Et.y-bt.y,k=Pt*Pt+Rt*Rt,se=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(bt.x),Math.abs(bt.y)),Ht=vt*se*se;if(k<=Ht){ft.splice(dt,1),Mt--;continue}bt=Et}}q(F),z.forEach(q);let O=z.length,$=F;for(let ft=0;ft<O;ft++){let _t=z[ft];F=F.concat(_t)}function nt(ft,_t,vt){return _t||Zt("ExtrudeGeometry: vec does not exist"),ft.clone().addScaledVector(_t,vt)}let K=F.length;function ot(ft,_t,vt){let bt,Mt,dt,Et=ft.x-_t.x,Pt=ft.y-_t.y,Rt=vt.x-ft.x,k=vt.y-ft.y,se=Et*Et+Pt*Pt,Ht=Et*k-Pt*Rt;if(Math.abs(Ht)>Number.EPSILON){let N=Math.sqrt(se),b=Math.sqrt(Rt*Rt+k*k),J=_t.x-Pt/N,et=_t.y+Et/N,lt=vt.x-k/b,U=vt.y+Rt/b,x=((lt-J)*k-(U-et)*Rt)/(Et*k-Pt*Rt);bt=J+Et*x-ft.x,Mt=et+Pt*x-ft.y;let y=bt*bt+Mt*Mt;if(y<=2)return new St(bt,Mt);dt=Math.sqrt(y/2)}else{let N=!1;Et>Number.EPSILON?Rt>Number.EPSILON&&(N=!0):Et<-Number.EPSILON?Rt<-Number.EPSILON&&(N=!0):Math.sign(Pt)===Math.sign(k)&&(N=!0),N?(bt=-Pt,Mt=Et,dt=Math.sqrt(se)):(bt=Et,Mt=Pt,dt=Math.sqrt(se/2))}return new St(bt/dt,Mt/dt)}let it=[];for(let ft=0,_t=$.length,vt=_t-1,bt=ft+1;ft<_t;ft++,vt++,bt++)vt===_t&&(vt=0),bt===_t&&(bt=0),it[ft]=ot($[ft],$[vt],$[bt]);let tt=[],ht,It=it.concat();for(let ft=0,_t=O;ft<_t;ft++){let vt=z[ft];ht=[];for(let bt=0,Mt=vt.length,dt=Mt-1,Et=bt+1;bt<Mt;bt++,dt++,Et++)dt===Mt&&(dt=0),Et===Mt&&(Et=0),ht[bt]=ot(vt[bt],vt[dt],vt[Et]);tt.push(ht),It=It.concat(ht)}let At;if(p===0)At=Un.triangulateShape($,z);else{let ft=[],_t=[];for(let vt=0;vt<p;vt++){let bt=vt/p,Mt=d*Math.cos(bt*Math.PI/2),dt=g*Math.sin(bt*Math.PI/2)+_;for(let Et=0,Pt=$.length;Et<Pt;Et++){let Rt=nt($[Et],it[Et],dt);Tt(Rt.x,Rt.y,-Mt),bt===0&&ft.push(Rt)}for(let Et=0,Pt=O;Et<Pt;Et++){let Rt=z[Et];ht=tt[Et];let k=[];for(let se=0,Ht=Rt.length;se<Ht;se++){let N=nt(Rt[se],ht[se],dt);Tt(N.x,N.y,-Mt),bt===0&&k.push(N)}bt===0&&_t.push(k)}}At=Un.triangulateShape(ft,_t)}let jt=At.length,Wt=g+_;for(let ft=0;ft<K;ft++){let _t=u?nt(F[ft],It[ft],Wt):F[ft];S?(D.copy(w.normals[0]).multiplyScalar(_t.x),A.copy(w.binormals[0]).multiplyScalar(_t.y),v.copy(C[0]).add(D).add(A),Tt(v.x,v.y,v.z)):Tt(_t.x,_t.y,0)}for(let ft=1;ft<=h;ft++)for(let _t=0;_t<K;_t++){let vt=u?nt(F[_t],It[_t],Wt):F[_t];S?(D.copy(w.normals[ft]).multiplyScalar(vt.x),A.copy(w.binormals[ft]).multiplyScalar(vt.y),v.copy(C[ft]).add(D).add(A),Tt(v.x,v.y,v.z)):Tt(vt.x,vt.y,f/h*ft)}for(let ft=p-1;ft>=0;ft--){let _t=ft/p,vt=d*Math.cos(_t*Math.PI/2),bt=g*Math.sin(_t*Math.PI/2)+_;for(let Mt=0,dt=$.length;Mt<dt;Mt++){let Et=nt($[Mt],it[Mt],bt);Tt(Et.x,Et.y,f+vt)}for(let Mt=0,dt=z.length;Mt<dt;Mt++){let Et=z[Mt];ht=tt[Mt];for(let Pt=0,Rt=Et.length;Pt<Rt;Pt++){let k=nt(Et[Pt],ht[Pt],bt);S?Tt(k.x,k.y+C[h-1].y,C[h-1].x+vt):Tt(k.x,k.y,f+vt)}}}Yt(),ut();function Yt(){let ft=s.length/3;if(u){let _t=0,vt=K*_t;for(let bt=0;bt<jt;bt++){let Mt=At[bt];Gt(Mt[2]+vt,Mt[1]+vt,Mt[0]+vt)}_t=h+p*2,vt=K*_t;for(let bt=0;bt<jt;bt++){let Mt=At[bt];Gt(Mt[0]+vt,Mt[1]+vt,Mt[2]+vt)}}else{for(let _t=0;_t<jt;_t++){let vt=At[_t];Gt(vt[2],vt[1],vt[0])}for(let _t=0;_t<jt;_t++){let vt=At[_t];Gt(vt[0]+K*h,vt[1]+K*h,vt[2]+K*h)}}n.addGroup(ft,s.length/3-ft,0)}function ut(){let ft=s.length/3,_t=0;gt($,_t),_t+=$.length;for(let vt=0,bt=z.length;vt<bt;vt++){let Mt=z[vt];gt(Mt,_t),_t+=Mt.length}n.addGroup(ft,s.length/3-ft,1)}function gt(ft,_t){let vt=ft.length;for(;--vt>=0;){let bt=vt,Mt=vt-1;Mt<0&&(Mt=ft.length-1);for(let dt=0,Et=h+p*2;dt<Et;dt++){let Pt=K*dt,Rt=K*(dt+1),k=_t+bt+Pt,se=_t+Mt+Pt,Ht=_t+Mt+Rt,N=_t+bt+Rt;Nt(k,se,Ht,N)}}}function Tt(ft,_t,vt){l.push(ft),l.push(_t),l.push(vt)}function Gt(ft,_t,vt){Ot(ft),Ot(_t),Ot(vt);let bt=s.length/3,Mt=E.generateTopUV(n,s,bt-3,bt-2,bt-1);ae(Mt[0]),ae(Mt[1]),ae(Mt[2])}function Nt(ft,_t,vt,bt){Ot(ft),Ot(_t),Ot(bt),Ot(_t),Ot(vt),Ot(bt);let Mt=s.length/3,dt=E.generateSideWallUV(n,s,Mt-6,Mt-3,Mt-2,Mt-1);ae(dt[0]),ae(dt[1]),ae(dt[3]),ae(dt[1]),ae(dt[2]),ae(dt[3])}function Ot(ft){s.push(l[ft*3+0]),s.push(l[ft*3+1]),s.push(l[ft*3+2])}function ae(ft){r.push(ft.x),r.push(ft.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return rp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ol[s.type]().fromJSON(s)),new i(n,t.options)}},sp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new St(r,o),new St(a,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new St(o,1-l),new St(c,1-f),new St(u,1-g),new St(_,1-m)]:[new St(a,1-l),new St(h,1-f),new St(d,1-g),new St(p,1-m)]}};function rp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gr=class i extends Me{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ne(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new G,u=new St,d=new G,g=new G,_=new G,p=0,m=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:p=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let E=0;E<=e;E++){let C=n+E*h*s,S=Math.sin(C),w=Math.cos(C);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*S,f.y=t[A].y,f.z=t[A].x*w,o.push(f.x,f.y,f.z),u.x=E/e,u.y=A/(t.length-1),a.push(u.x,u.y);let D=l[3*A+0]*S,v=l[3*A+1],L=l[3*A+0]*w;c.push(D,v,L)}}for(let E=0;E<e;E++)for(let C=0;C<t.length-1;C++){let S=C+E*t.length,w=S,A=S+t.length,D=S+t.length+1,v=S+1;r.push(w,A,v),r.push(D,v,A)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ti=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let E=m*u-o;for(let C=0;C<c;C++){let S=C*f-r;g.push(S,-E,0),_.push(0,0,1),p.push(C/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){let C=E+c*m,S=E+c*(m+1),w=E+1+c*(m+1),A=E+1+c*m;d.push(C,S,A),d.push(S,w,A)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var yi=class i extends Me{constructor(t=new hn([new St(0,.5),new St(-.5,-.5),new St(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function c(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,g=u.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let E=g[p];Un.isClockWise(E)===!0&&(g[p]=E.reverse())}let _=Un.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let E=g[p];d=d.concat(E)}for(let p=0,m=d.length;p<m;p++){let E=d[p];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let p=0,m=_.length;p<m;p++){let E=_[p],C=E[0]+f,S=E[1]+f,w=E[2]+f;n.push(C,S,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return op(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function op(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var En=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new G,u=new G,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let E=[],C=m/n,S=o+C*a,w=t*Math.cos(S),A=Math.sqrt(t*t-w*w),D=0;m===0&&o===0?D=.5/e:m===n&&l===Math.PI&&(D=-.5/e);for(let v=0;v<=e;v++){let L=v/e,F=s+L*r;f.x=-A*Math.cos(F),f.y=w,f.z=A*Math.sin(F),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(L+D,1-C),E.push(c++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){let C=h[m][E+1],S=h[m][E],w=h[m+1][E],A=h[m+1][E+1];(m!==0||o>0)&&d.push(C,S,A),(m!==n-1||l<Math.PI)&&d.push(S,w,A)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zi=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new G,d=new G,g=new G;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let m=0;m<=s;m++){let E=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(E),d.y=(t+e*Math.cos(p))*Math.sin(E),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,E=(s+1)*(_-1)+p-1,C=(s+1)*(_-1)+p,S=(s+1)*_+p;l.push(m,E,S),l.push(E,C,S)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ah(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ah(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function Ah(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ap(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Eu={clone:Xi,merge:He},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new St().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Go=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ei=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ki=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ho=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wo=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ls(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Il(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xo=class extends vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:r=t,a=2*e-n;break;case Ul:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dl:o=t,l=2*n-e;break;case Ul:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,E=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,C=(-1-d)*p+(1.5+d)*_+.5*g,S=d*p-d*_;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+E*o[c+w]+C*o[l+w]+S*o[f+w];return r}},qo=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Yo=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zo=class extends vi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),_=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*g;return r}let u=a*2,d=t-1;for(let g=0;g!==a;++g){let _=o[c+g],p=o[l+g],m=d*u+g*2,E=f[m],C=f[m+1],S=t*u+g*2,w=h[S],A=h[S+1],D=up(n,e,E,w,s);r[g]=wu(D,_,C,A,p)}return r}};function wu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function hp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function up(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=wu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=hp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Il(t.settings)&&(n.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Ao:e=this.InterpolantFactoryMethodLinear;break;case xo:e=this.InterpolantFactoryMethodSmooth;break;case Ll:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return xo;case this.InterpolantFactoryMethodBezier:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Il(this.settings)&&(Rh(this.settings.inTangents,t),Rh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Qf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[u+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Ao;var bi=class extends un{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Ks;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};Jo.prototype.ValueTypeName="color";var $o=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};$o.prototype.ValueTypeName="number";var Ko=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},xr=class extends un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ko(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends un{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Ks;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};jo.prototype.ValueTypeName="vector";var Qo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tu=new Qo,ta=class{constructor(t){this.manager=t!==void 0?t:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_r=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pl=new ue,Ch=new G,Ih=new G,yr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Pl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ps||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},mo=new G,go=new gn,Nn=new G,vr=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mo,go,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(mo,go,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new G,Ph=new St,Lh=new St,Ze=class extends vr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Ph,Lh),e.subVectors(Lh,Ph)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Vl=class extends yr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}},br=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Mi=class extends vr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gl=class extends yr{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cs=-90,hs=1,ea=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Ze(cs,hs,t,e);r.layers=this.layers,this.add(r);let o=new Ze(cs,hs,t,e);o.layers=this.layers,this.add(o);let a=new Ze(cs,hs,t,e);a.layers=this.layers,this.add(a);let l=new Ze(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Ze(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},na=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gc="\\[\\]\\.:\\/",fp=new RegExp("["+gc+"]","g"),xc="[^"+gc+"]",dp="[^"+gc.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",xc),mp=/(WCOD+)?/.source.replace("WCOD",dp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),_p=new RegExp("^"+pp+mp+gp+xp+"$"),yp=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fp,"")}static parseTrackName(t){let e=_p.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Hl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wy=new Float32Array(1);var Nh=new ue,Sr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ui(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nh),this}intersectObject(t,e=!0,n=[]){return Wl(t,this,n,e),n.sort(Dh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wl(t[s],this,n,e);return n.sort(Dh),n}};function Dh(i,t){return i.distance-t.distance}function Wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Wl(r[o],t,e,!0)}}var Xl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function _c(i,t,e,n){let s=vp(n);switch(e){case lc:return i*t;case hc:return i*t/s.components*s.byteLength;case ha:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case ua:return i*t*2/s.components*s.byteLength;case cc:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case fa:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(t,8)/4;case da:case ma:return Math.max(i,8)*Math.max(t,8)/2;case xa:case _a:case va:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:case Pr:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ka:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lr:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vp(i){switch(i){case nn:case sc:return{byteLength:1,components:1};case Is:case rc:case Rn:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case Tn:case aa:case An:return{byteLength:4,components:1};case oc:case ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
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
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`uniform sampler2D dfgLUT;
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,Og=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,$g=`#define NORMAL
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
}`,Kg=`#define PHONG
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
}`,jg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,n0=`#define TOON
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
}`,i0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,a0=`uniform float rotation;
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
}`,l0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Cp,alphahash_pars_fragment:Ip,alphamap_fragment:Pp,alphamap_pars_fragment:Lp,alphatest_fragment:Np,alphatest_pars_fragment:Dp,aomap_fragment:Up,aomap_pars_fragment:Fp,batching_pars_vertex:Op,batching_vertex:Bp,begin_vertex:zp,beginnormal_vertex:kp,bsdfs:Vp,iridescence_fragment:Gp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:Zp,color_pars_fragment:Jp,color_pars_vertex:$p,color_vertex:Kp,common:jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:bm,envmap_vertex:um,fog_vertex:fm,fog_pars_vertex:dm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:xm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:ym,lights_pars_begin:vm,lights_toon_fragment:Sm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Em,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Im,lightprobes_pars_fragment:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Nm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Um,map_fragment:Fm,map_pars_fragment:Om,map_particle_fragment:Bm,map_particle_pars_fragment:zm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Gm,morphcolor_vertex:Hm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Zm,normal_pars_fragment:Jm,normal_pars_vertex:$m,normal_vertex:Km,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:eg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:fg,shadowmap_vertex:dg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:xg,skinnormal_vertex:_g,specularmap_fragment:yg,specularmap_pars_fragment:vg,tonemapping_fragment:bg,tonemapping_pars_fragment:Sg,transmission_fragment:Mg,transmission_pars_fragment:Eg,uv_pars_fragment:wg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:Rg,background_vert:Cg,background_frag:Ig,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Ng,cube_frag:Dg,depth_vert:Ug,depth_frag:Fg,distance_vert:Og,distance_frag:Bg,equirect_vert:zg,equirect_frag:kg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Hg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:$g,meshphong_vert:Kg,meshphong_frag:jg,meshphysical_vert:Qg,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:o0,sprite_vert:a0,sprite_frag:l0},Ct={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Hn={basic:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:He([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:He([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:He([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:He([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:He([Ct.points,Ct.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:He([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:He([Ct.common,Ct.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:He([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:He([Ct.sprite,Ct.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:He([Ct.common,Ct.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:He([Ct.lights,Ct.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Hn.physical={uniforms:He([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var qa={r:0,b:0,g:0},c0=new ue,Ju=new $t;Ju.set(-1,0,0,0,1,0,0,0,1);function h0(i,t,e,n,s,r){let o=new Jt(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(E){let C=E.isScene===!0?E.background:null;if(C&&C.isTexture){let S=E.backgroundBlurriness>0;C=t.get(C,S)}return C}function g(E){let C=!1,S=d(E);S===null?p(o,a):S&&S.isColor&&(p(S,1),C=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,C){let S=d(C);S&&(S.isCubeTexture||S.mapping===wr)?(c===void 0&&(c=new xe(new Ge(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Xi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ju),c.material.toneMapped=re.getTransfer(S.colorSpace)!==he,(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new xe(new ti(2,2),new $e({name:"BackgroundMaterial",uniforms:Xi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=re.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,C){E.getRGB(qa,mc(i)),e.buffers.color.setClear(qa.r,qa.g,qa.b,C,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,C=1){o.set(E),a=C,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,p(o,a)},render:g,addToRenderList:_,dispose:m}}function u0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(z,W,q,O,$){let nt=!1,K=f(z,O,q,W);r!==K&&(r=K,c(r.object)),nt=d(z,O,q,$),nt&&g(z,O,q,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,S(z,W,q,O),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function f(z,W,q,O){let $=O.wireframe===!0,nt=n[W.id];nt===void 0&&(nt={},n[W.id]=nt);let K=z.isInstancedMesh===!0?z.id:0,ot=nt[K];ot===void 0&&(ot={},nt[K]=ot);let it=ot[q.id];it===void 0&&(it={},ot[q.id]=it);let tt=it[$];return tt===void 0&&(tt=u(l()),it[$]=tt),tt}function u(z){let W=[],q=[],O=[];for(let $=0;$<e;$++)W[$]=0,q[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:O,object:z,attributes:{},index:null}}function d(z,W,q,O){let $=r.attributes,nt=W.attributes,K=0,ot=q.getAttributes();for(let it in ot)if(ot[it].location>=0){let ht=$[it],It=nt[it];if(It===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(It=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(It=z.instanceColor)),ht===void 0||ht.attribute!==It||It&&ht.data!==It.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function g(z,W,q,O){let $={},nt=W.attributes,K=0,ot=q.getAttributes();for(let it in ot)if(ot[it].location>=0){let ht=nt[it];ht===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(ht=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(ht=z.instanceColor));let It={};It.attribute=ht,ht&&ht.data&&(It.data=ht.data),$[it]=It,K++}r.attributes=$,r.attributesNum=K,r.index=O}function _(){let z=r.newAttributes;for(let W=0,q=z.length;W<q;W++)z[W]=0}function p(z){m(z,0)}function m(z,W){let q=r.newAttributes,O=r.enabledAttributes,$=r.attributeDivisors;q[z]=1,O[z]===0&&(i.enableVertexAttribArray(z),O[z]=1),$[z]!==W&&(i.vertexAttribDivisor(z,W),$[z]=W)}function E(){let z=r.newAttributes,W=r.enabledAttributes;for(let q=0,O=W.length;q<O;q++)W[q]!==z[q]&&(i.disableVertexAttribArray(q),W[q]=0)}function C(z,W,q,O,$,nt,K){K===!0?i.vertexAttribIPointer(z,W,q,$,nt):i.vertexAttribPointer(z,W,q,O,$,nt)}function S(z,W,q,O){_();let $=O.attributes,nt=q.getAttributes(),K=W.defaultAttributeValues;for(let ot in nt){let it=nt[ot];if(it.location>=0){let tt=$[ot];if(tt===void 0&&(ot==="instanceMatrix"&&z.instanceMatrix&&(tt=z.instanceMatrix),ot==="instanceColor"&&z.instanceColor&&(tt=z.instanceColor)),tt!==void 0){let ht=tt.normalized,It=tt.itemSize,At=t.get(tt);if(At===void 0)continue;let jt=At.buffer,Wt=At.type,Yt=At.bytesPerElement,ut=Wt===i.INT||Wt===i.UNSIGNED_INT||tt.gpuType===aa;if(tt.isInterleavedBufferAttribute){let gt=tt.data,Tt=gt.stride,Gt=tt.offset;if(gt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<it.locationSize;Nt++)m(it.location+Nt,gt.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Nt=0;Nt<it.locationSize;Nt++)p(it.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Nt=0;Nt<it.locationSize;Nt++)C(it.location+Nt,It/it.locationSize,Wt,ht,Tt*Yt,(Gt+It/it.locationSize*Nt)*Yt,ut)}else{if(tt.isInstancedBufferAttribute){for(let gt=0;gt<it.locationSize;gt++)m(it.location+gt,tt.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<it.locationSize;gt++)p(it.location+gt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let gt=0;gt<it.locationSize;gt++)C(it.location+gt,It/it.locationSize,Wt,ht,It*Yt,It/it.locationSize*gt*Yt,ut)}}else if(K!==void 0){let ht=K[ot];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(it.location,ht);break;case 3:i.vertexAttrib3fv(it.location,ht);break;case 4:i.vertexAttrib4fv(it.location,ht);break;default:i.vertexAttrib1fv(it.location,ht)}}}}E()}function w(){L();for(let z in n){let W=n[z];for(let q in W){let O=W[q];for(let $ in O){let nt=O[$];for(let K in nt)h(nt[K].object),delete nt[K];delete O[$]}}delete n[z]}}function A(z){if(n[z.id]===void 0)return;let W=n[z.id];for(let q in W){let O=W[q];for(let $ in O){let nt=O[$];for(let K in nt)h(nt[K].object),delete nt[K];delete O[$]}}delete n[z.id]}function D(z){for(let W in n){let q=n[W];for(let O in q){let $=q[O];if($[z.id]===void 0)continue;let nt=$[z.id];for(let K in nt)h(nt[K].object),delete nt[K];delete $[z.id]}}}function v(z){for(let W in n){let q=n[W],O=z.isInstancedMesh===!0?z.id:0,$=q[O];if($!==void 0){for(let nt in $){let K=$[nt];for(let ot in K)h(K[ot].object),delete K[ot];delete $[nt]}delete q[O],Object.keys(q).length===0&&delete n[W]}}}function L(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function f0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function d0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==xn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let v=D===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==nn&&D!==An&&!v&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:C,maxFragmentUniforms:S,maxSamples:w,samples:A}}function p0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ln,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,C=E*4,S=m.clippingState||null;l.value=S,S=h(g,u,C,d);for(let w=0;w!==C;++w)S[w]=e[w];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=d+_*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let C=0,S=d;C!==_;++C,S+=4)o.copy(f[C]).applyMatrix4(E,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ns=4,m0=6,g0=20,x0=256,Dr=new Mi,Au=new Jt,yc=null,vc=0,bc=0,Sc=!1,_0=new G,qi=new G,Za=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=_0}=r;yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,vc,bc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Rn,format:xn,colorSpace:js,depthBuffer:!1},s=Ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=y0(r)),this._blurMaterial=b0(r,t,e),this._ggxMaterial=v0(r,t,e)}return s}_compileMaterial(t){let e=new xe(new Me,t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Au),f.toneMapping=wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Ge,new jn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,E=t.background;E?E.isColor&&(p.color.copy(E),t.background=null,m=!0):(p.color.copy(Au),m=!0);for(let C=0;C<6;C++){let S=C%3;S===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):S===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let w=this._cubeSize;Ls(s,S*w,C>2?w:0,w,w),f.setRenderTarget(s),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ns?n-g+Ns:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ls(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ls(t,p,m,3*_,2*_),s.setRenderTarget(t),s.render(a,Dr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ns?s-this._lodMax+Ns:0),u=4*(this._cubeSize-h);Ls(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Dr)}};function y0(i){let t=[],e=[],n=i,s=i-Ns+1+m0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){let E=m%3*2/3-1,C=m>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];g.set(S,d*u*m);for(let w=0;w<u;w++){let A=h[w*2]*2-1,D=h[w*2+1]*2-1;m===0?qi.set(1,D,A):m===1?qi.set(-A,1,-D):m===2?qi.set(-A,D,1):m===3?qi.set(-1,D,-A):m===4?qi.set(-A,-1,D):qi.set(A,D,-1),qi.toArray(_,(m*u+w)*d)}}let p=new Me;p.setAttribute("position",new De(g,d)),p.setAttribute("outputDirection",new De(_,d)),e.push(new xe(p,null)),n>Ns&&n--}return{lodMeshes:e,sizeLods:t}}function Ru(i,t,e){let n=new en(i,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function v0(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function b0(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:g0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Cu(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Iu(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ja=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ar(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Vn});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Be),new ea(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function S0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===sa||d===ra)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Ja(g.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,g=d===sa||d===ra,_=d===wi||d===Hi;if(g||_){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Za(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let E=u.image;return g&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new Za(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===sa?u.mapping=wi:d===ra&&(u.mapping=Hi),u}function l(u){let d=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function M0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ni("WebGLRenderer: "+n+" extension not supported."),s}}}function E0(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let E=d.array;_=d.version;for(let C=0,S=E.length;C<S;C+=3){let w=E[C+0],A=E[C+1],D=E[C+2];u.push(w,A,A,D,D,w)}}else{let E=g.array;_=g.version;for(let C=0,S=E.length/3-1;C<S;C+=3){let w=C+0,A=C+1,D=C+2;u.push(w,A,A,D,D,w)}}let p=new(g.count>=65535?sr:ir)(u,1);p.version=_;let m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function w0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function T0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function A0(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let L=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],C=0;d===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let S=a.attributes.position.count*C,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*w*4*f),D=new er(A,S,w,f);D.type=An,D.needsUpdate=!0;let v=C*4;for(let F=0;F<f;F++){let z=p[F],W=m[F],q=E[F],O=S*w*4*F;for(let $=0;$<z.count;$++){let nt=$*v;d===!0&&(s.fromBufferAttribute(z,$),A[O+nt+0]=s.x,A[O+nt+1]=s.y,A[O+nt+2]=s.z,A[O+nt+3]=0),g===!0&&(s.fromBufferAttribute(W,$),A[O+nt+4]=s.x,A[O+nt+5]=s.y,A[O+nt+6]=s.z,A[O+nt+7]=0),_===!0&&(s.fromBufferAttribute(q,$),A[O+nt+8]=s.x,A[O+nt+9]=s.y,A[O+nt+10]=s.z,A[O+nt+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new St(S,w)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function R0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var C0={[Kl]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[Er]:"ACES_FILMIC_TONE_MAPPING",[ec]:"AGX_TONE_MAPPING",[nc]:"NEUTRAL_TONE_MAPPING",[tc]:"CUSTOM_TONE_MAPPING"};function I0(i,t,e,n,s,r){let o=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Me;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let h=new Go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xe(c,h),u=new Mi(-1,1,1,-1,0,1),d=null,g=null,_=!1,p,m=null,E=[],C=!1;this.setSize=function(S,w){o.setSize(S,w),a!==null&&a.setSize(S,w),l!==null&&l.setSize(S,w);for(let A=0;A<E.length;A++){let D=E[A];D.setSize&&D.setSize(S,w)}},this.setEffects=function(S){E=S,C=E.length>0&&E[0].isRenderPass===!0;let w=o.width,A=o.height;E.length>0&&a===null&&(a=new en(w,A,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new en(w,A,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<E.length;D++){let v=E[D];v.setSize&&v.setSize(w,A)}},this.begin=function(S,w){if(_||S.toneMapping===wn&&E.length===0)return!1;if(m=w,w!==null){let A=w.width,D=w.height;(o.width!==A||o.height!==D)&&this.setSize(A,D)}return C===!1&&S.setRenderTarget(o),p=S.toneMapping,S.toneMapping=wn,!0},this.hasRenderPass=function(){return C},this.end=function(S,w){S.toneMapping=p,_=!0;let A=o,D=a;for(let v=0;v<E.length;v++){let L=E[v];L.enabled!==!1&&(L.render(S,D,A,w),L.needsSwap!==!1&&(A=D,D=D===a?l:a))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,h.defines={},re.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");let v=C0[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(m),S.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var $u=new Je,wc=new _i(1,1),Ku=new er,ju=new Io,Qu=new ar,Pu=[],Lu=[],Nu=new Float32Array(16),Du=new Float32Array(9),Uu=new Float32Array(4);function Us(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ja(i,t){let e=Lu[t];e===void 0&&(e=new Int32Array(t),Lu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function P0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function U0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),Ie(e,n)}}function F0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Du.set(n),i.uniformMatrix3fv(this.addr,!1,Du),Ie(e,n)}}function O0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),Ie(e,n)}}function B0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function G0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=e.isReversedDepthBuffer()?Wa:Ha,r=wc):r=$u,e.setTexture2D(t||r,s)}function Y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function Z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function J0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ku,s)}function $0(i){switch(i){case 5126:return P0;case 35664:return L0;case 35665:return N0;case 35666:return D0;case 35674:return U0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return k0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return H0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}function K0(i,t){i.uniform1fv(this.addr,t)}function j0(i,t){let e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function Q0(i,t){let e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function tx(i,t){let e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function ex(i,t){let e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nx(i,t){let e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ix(i,t){let e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sx(i,t){i.uniform1iv(this.addr,t)}function rx(i,t){i.uniform2iv(this.addr,t)}function ox(i,t){i.uniform3iv(this.addr,t)}function ax(i,t){i.uniform4iv(this.addr,t)}function lx(i,t){i.uniform1uiv(this.addr,t)}function cx(i,t){i.uniform2uiv(this.addr,t)}function hx(i,t){i.uniform3uiv(this.addr,t)}function ux(i,t){i.uniform4uiv(this.addr,t)}function fx(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=wc:o=$u;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function dx(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ju,r[o])}function px(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qu,r[o])}function mx(i,t,e){let n=this.cache,s=t.length,r=ja(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ku,r[o])}function gx(i){switch(i){case 5126:return K0;case 35664:return j0;case 35665:return Q0;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}var Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}},Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gx(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Fu(i,t){i.seq.push(t),i.map[t.id]=t}function xx(i,t,e){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fu(e,c===void 0?new Tc(a,i,t):new Ac(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Rc(a),Fu(e,f)),e=f}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _x=37297,yx=0;function vx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bu=new $t;function bx(i){re._getMatrix(Bu,re.workingColorSpace,i);let t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Qs:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+vx(i.getShaderSource(t),a)}else return r}function Sx(i,t){let e=bx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Mx={[Kl]:"Linear",[jl]:"Reinhard",[Ql]:"Cineon",[Er]:"ACESFilmic",[ec]:"AgX",[nc]:"Neutral",[tc]:"Custom"};function Ex(i,t){let e=Mx[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ya=new G;function wx(){re.getLuminanceCoefficients(Ya);let i=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Ax(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fr(i){return i!==""}function ku(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(Cx,Px)}var Ix=new Map;function Px(i,t){let e=te[t];if(e===void 0){let n=Ix.get(t);if(n!==void 0)e=te[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Cc(e)}var Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(Lx,Nx)}function Nx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Dx={[Vi]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function Ux(i){return Dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fx={[wi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE_UV"};function Ox(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bx={[Hi]:"ENVMAP_MODE_REFRACTION"};function zx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kx={[ia]:"ENVMAP_BLENDING_MULTIPLY",[nu]:"ENVMAP_BLENDING_MIX",[iu]:"ENVMAP_BLENDING_ADD"};function Vx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kx[i.combine]||"ENVMAP_BLENDING_NONE"}function Gx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ux(e),c=Ox(e),h=zx(e),f=Vx(e),u=Gx(e),d=Tx(e),g=Ax(r),_=s.createProgram(),p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(p=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?te.tonemapping_pars_fragment:"",e.toneMapping!==wn?Ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Sx("linearToOutputTexel",e.outputColorSpace),wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Cc(o),o=ku(o,e),o=Vu(o,e),a=Cc(a),a=ku(a,e),a=Vu(a,e),o=Gu(o),a=Gu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=E+p+o,S=E+m+a,w=Ou(s,s.VERTEX_SHADER,C),A=Ou(s,s.FRAGMENT_SHADER,S);s.attachShader(_,w),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(z){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(w)||"",O=s.getShaderInfoLog(A)||"",$=W.trim(),nt=q.trim(),K=O.trim(),ot=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,A);else{let tt=zu(s,w,"vertex"),ht=zu(s,A,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+$+`
`+tt+`
`+ht)}else $!==""?Xt("WebGLProgram: Program Info Log:",$):(nt===""||K==="")&&(it=!1);it&&(z.diagnostics={runnable:ot,programLog:$,vertexShader:{log:nt,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(w),s.deleteShader(A),v=new Ds(s,_),L=Rx(s,_)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(_,_x)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var Wx=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pc(t),e.set(t,n)),n}},Pc=class{constructor(t){this.id=Wx++,this.code=t,this.usedTimes=0}};function Xx(i){return i===Ri||i===Pr||i===Lr}function qx(i,t,e,n,s,r){let o=new _s,a=new Ic,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,L,F,z,W,q){let O=z.fog,$=W.geometry,nt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?z.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ot=t.get(v.envMap||nt,K),it=ot&&ot.mapping===wr?ot.image.height:null,tt=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Xt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,It=ht!==void 0?ht.length:0,At=0;$.morphAttributes.position!==void 0&&(At=1),$.morphAttributes.normal!==void 0&&(At=2),$.morphAttributes.color!==void 0&&(At=3);let jt,Wt,Yt,ut;if(tt){let Kt=Hn[tt];jt=Kt.vertexShader,Wt=Kt.fragmentShader}else{jt=v.vertexShader,Wt=v.fragmentShader;let Kt=a.getVertexShaderStage(v),qt=a.getFragmentShaderStage(v);a.update(v,Kt,qt),Yt=Kt.id,ut=qt.id}let gt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Gt=W.isInstancedMesh===!0,Nt=W.isBatchedMesh===!0,Ot=!!v.map,ae=!!v.matcap,ft=!!ot,_t=!!v.aoMap,vt=!!v.lightMap,bt=!!v.bumpMap&&v.wireframe===!1,Mt=!!v.normalMap,dt=!!v.displacementMap,Et=!!v.emissiveMap,Pt=!!v.metalnessMap,Rt=!!v.roughnessMap,k=v.anisotropy>0,se=v.clearcoat>0,Ht=v.dispersion>0,N=v.retroreflectivity>0,b=v.iridescence>0,J=v.sheen>0,et=v.transmission>0,lt=k&&!!v.anisotropyMap,U=se&&!!v.clearcoatMap,x=se&&!!v.clearcoatNormalMap,y=se&&!!v.clearcoatRoughnessMap,M=b&&!!v.iridescenceMap,I=b&&!!v.iridescenceThicknessMap,P=J&&!!v.sheenColorMap,V=J&&!!v.sheenRoughnessMap,B=!!v.specularMap,Q=!!v.specularColorMap,j=!!v.specularIntensityMap,xt=et&&!!v.transmissionMap,R=et&&!!v.thicknessMap,Z=!!v.gradientMap,H=!!v.alphaMap,pt=v.alphaTest>0,mt=!!v.alphaHash,ct=!!v.extensions,yt=wn;v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(yt=i.toneMapping);let wt={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:jt,fragmentShader:Wt,defines:v.defines,customVertexShaderID:Yt,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Nt,batchingColor:Nt&&W._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&W.instanceColor!==null,instancingMorph:Gt&&W.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ot,matcap:ae,envMap:ft,envMapMode:ft&&ot.mapping,envMapCubeUVHeight:it,aoMap:_t,lightMap:vt,bumpMap:bt,normalMap:Mt,displacementMap:dt,emissiveMap:Et,normalMapObjectSpace:Mt&&v.normalMapType===ou,normalMapTangentSpace:Mt&&v.normalMapType===Nr,packedNormalMap:Mt&&v.normalMapType===Nr&&Xx(v.normalMap.format),metalnessMap:Pt,roughnessMap:Rt,anisotropy:k,anisotropyMap:lt,clearcoat:se,clearcoatMap:U,clearcoatNormalMap:x,clearcoatRoughnessMap:y,dispersion:Ht,retroreflection:N,iridescence:b,iridescenceMap:M,iridescenceThicknessMap:I,sheen:J,sheenColorMap:P,sheenRoughnessMap:V,specularMap:B,specularColorMap:Q,specularIntensityMap:j,transmission:et,transmissionMap:xt,thicknessMap:R,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Cs&&v.alphaToCoverage===!1,alphaMap:H,alphaTest:pt,alphaHash:mt,combine:v.combine,mapUv:Ot&&g(v.map.channel),aoMapUv:_t&&g(v.aoMap.channel),lightMapUv:vt&&g(v.lightMap.channel),bumpMapUv:bt&&g(v.bumpMap.channel),normalMapUv:Mt&&g(v.normalMap.channel),displacementMapUv:dt&&g(v.displacementMap.channel),emissiveMapUv:Et&&g(v.emissiveMap.channel),metalnessMapUv:Pt&&g(v.metalnessMap.channel),roughnessMapUv:Rt&&g(v.roughnessMap.channel),anisotropyMapUv:lt&&g(v.anisotropyMap.channel),clearcoatMapUv:U&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:x&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:y&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:M&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:I&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:P&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(v.sheenRoughnessMap.channel),specularMapUv:B&&g(v.specularMap.channel),specularColorMapUv:Q&&g(v.specularColorMap.channel),specularIntensityMapUv:j&&g(v.specularIntensityMap.channel),transmissionMapUv:xt&&g(v.transmissionMap.channel),thicknessMapUv:R&&g(v.thicknessMap.channel),alphaMapUv:H&&g(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Mt||k),vertexNormals:!!$.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(Ot||H),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||$.attributes.normal===void 0&&Mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Tt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:At,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:Ot&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:Et&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kn,flipSided:v.side===Ke,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&v.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function p(v){let L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)L.push(F),L.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(m(L,v),E(L,v),L.push(i.outputColorSpace)),L.push(v.customProgramCacheKey),L.join()}function m(v,L){v.push(L.precision),v.push(L.outputColorSpace),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.mapUv),v.push(L.alphaMapUv),v.push(L.lightMapUv),v.push(L.aoMapUv),v.push(L.bumpMapUv),v.push(L.normalMapUv),v.push(L.displacementMapUv),v.push(L.emissiveMapUv),v.push(L.metalnessMapUv),v.push(L.roughnessMapUv),v.push(L.anisotropyMapUv),v.push(L.clearcoatMapUv),v.push(L.clearcoatNormalMapUv),v.push(L.clearcoatRoughnessMapUv),v.push(L.iridescenceMapUv),v.push(L.iridescenceThicknessMapUv),v.push(L.sheenColorMapUv),v.push(L.sheenRoughnessMapUv),v.push(L.specularMapUv),v.push(L.specularColorMapUv),v.push(L.specularIntensityMapUv),v.push(L.transmissionMapUv),v.push(L.thicknessMapUv),v.push(L.combine),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numSunLights),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numSpotLightMaps),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numSunLightShadows),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.numSpotLightShadowsWithMaps),v.push(L.numLightProbes),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function E(v,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function C(v){let L=d[v.type],F;if(L){let z=Hn[L];F=Eu.clone(z.uniforms)}else F=v.uniforms;return F}function S(v,L){let F=h.get(L);return F!==void 0?++F.usedTimes:(F=new Hx(i,L,v,s),c.push(F),h.set(L,F)),F}function w(v){if(--v.usedTimes===0){let L=c.indexOf(v);c[L]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:C,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:D}}function Yx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,_,p,m){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=g,E.materialVariant=o(u),E.groupOrder=_,E.renderOrder=u.renderOrder,E.z=p,E.group=m),t++,E}function l(u,d,g,_,p,m,E){E.reversedDepth===!0&&(p=-p);let C=a(u,d,g,_,p,m);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(u,d,g,_,p,m){let E=a(u,d,g,_,p,m);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,d){e.length>1&&e.sort(u||Zx),n.length>1&&n.sort(d||Wu),s.length>1&&s.sort(d||Wu)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Jx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xu,i.set(n,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Jt};break;case"SpotLight":e={position:new G,direction:new G,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Kx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jx=0;function Qx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t_(i){let t=new $x,e=Kx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new ue,o=new ue;function a(c){let h=0,f=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,E=0,C=0,S=0,w=0,A=0,D=0,v=0,L=0,F=0;c.sort(Qx);for(let W=0,q=c.length;W<q;W++){let O=c[W],$=O.color,nt=O.intensity,K=O.distance,ot=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ri?ot=O.shadow.map.texture:ot=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=$.r*nt,f+=$.g*nt,u+=$.b*nt;else if(O.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(O.sh.coefficients[it],nt);F++}else if(O.isSunLight){let it=t.get(O);if(it.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let tt=O.shadow,ht=e.get(O);ht.shadowIntensity=tt.intensity,ht.shadowBias=tt.bias,ht.shadowNormalBias=tt.normalBias,ht.shadowRadius=tt.radius,ht.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=ht,n.sunShadowMap[g]=ot;let It=tt.getViewportCount();for(let At=0;At<It;At++)n.sunShadowMatrix[_+At]=tt.getMatrix(At),n.sunShadowCascade[_+At]=tt._cascadeData[At];_+=It,g++}n.sun[d]=it,d++}else if(O.isDirectionalLight){let it=t.get(O);if(it.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let tt=O.shadow,ht=e.get(O);ht.shadowIntensity=tt.intensity,ht.shadowBias=tt.bias,ht.shadowNormalBias=tt.normalBias,ht.shadowRadius=tt.radius,ht.shadowMapSize=tt.mapSize,n.directionalShadow[p]=ht,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=O.shadow.matrix,w++}n.directional[p]=it,p++}else if(O.isSpotLight){let it=t.get(O);it.position.setFromMatrixPosition(O.matrixWorld),it.color.copy($).multiplyScalar(nt),it.distance=K,it.coneCos=Math.cos(O.angle),it.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),it.decay=O.decay,n.spot[E]=it;let tt=O.shadow;if(O.map&&(n.spotLightMap[v]=O.map,v++,tt.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[E]=tt.matrix,O.castShadow){let ht=e.get(O);ht.shadowIntensity=tt.intensity,ht.shadowBias=tt.bias,ht.shadowNormalBias=tt.normalBias,ht.shadowRadius=tt.radius,ht.shadowMapSize=tt.mapSize,n.spotShadow[E]=ht,n.spotShadowMap[E]=ot,D++}E++}else if(O.isRectAreaLight){let it=t.get(O);it.color.copy($).multiplyScalar(nt),it.halfWidth.set(O.width*.5,0,0),it.halfHeight.set(0,O.height*.5,0),n.rectArea[C]=it,C++}else if(O.isPointLight){let it=t.get(O);if(it.color.copy(O.color).multiplyScalar(O.intensity),it.distance=O.distance,it.decay=O.decay,O.castShadow){let tt=O.shadow,ht=e.get(O);ht.shadowIntensity=tt.intensity,ht.shadowBias=tt.bias,ht.shadowNormalBias=tt.normalBias,ht.shadowRadius=tt.radius,ht.shadowMapSize=tt.mapSize,ht.shadowCameraNear=tt.camera.near,ht.shadowCameraFar=tt.camera.far,n.pointShadow[m]=ht,n.pointShadowMap[m]=ot,n.pointShadowMatrix[m]=O.shadow.matrix,A++}n.point[m]=it,m++}else if(O.isHemisphereLight){let it=t.get(O);it.skyColor.copy(O.color).multiplyScalar(nt),it.groundColor.copy(O.groundColor).multiplyScalar(nt),n.hemi[S]=it,S++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let z=n.hash;(z.sunLength!==d||z.directionalLength!==p||z.pointLength!==m||z.spotLength!==E||z.rectAreaLength!==C||z.hemiLength!==S||z.numSunShadows!==g||z.numDirectionalShadows!==w||z.numPointShadows!==A||z.numSpotShadows!==D||z.numSpotMaps!==v||z.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=p,n.spot.length=E,n.rectArea.length=C,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,z.sunLength=d,z.directionalLength=p,z.pointLength=m,z.spotLength=E,z.rectAreaLength=C,z.hemiLength=S,z.numSunShadows=g,z.numDirectionalShadows=w,z.numPointShadows=A,z.numSpotShadows=D,z.numSpotMaps=v,z.numLightProbes=F,n.version=jx++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let E=0,C=c.length;E<C;E++){let S=c[E];if(S.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),f++}else if(S.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(S.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function qu(i){let t=new t_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function e_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qu(i),t.set(s,[a])):r>=o.length?(a=new qu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`,s_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],r_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Yu=new ue,Ur=new G,Ec=new G;function o_(i,t,e){let n=new vs,s=new St,r=new St,o=new Se,a=new Ho,l=new Wo,c={},h=e.maxTextureSize,f={[Ei]:Ke,[Ke]:Ei,[kn]:kn},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vi;let m=this.type;this.render=function(A,D,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Oh&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vi);let L=i.getRenderTarget(),F=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Vn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let q=m!==this.type;q&&D.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach($=>$.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,$=A.length;O<$;O++){let nt=A[O],K=nt.shadow;if(K===void 0){Xt("WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ot=K.getFrameExtents();s.multiply(ot),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,K.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=it,K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Rs){if(nt.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new en(s.x,s.y,{format:Ri,type:Rn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),K.map.texture.name=nt.name+".shadowMap",K.map.depthTexture=new _i(s.x,s.y,An),K.map.depthTexture.name=nt.name+".shadowMapDepth",K.map.depthTexture.format=Fn,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ue,K.map.depthTexture.magFilter=Ue}else nt.isPointLight?(K.map=new Ja(s.x),K.map.depthTexture=new Uo(s.x,Tn)):(K.map=new en(s.x,s.y),K.map.depthTexture=new _i(s.x,s.y,Tn)),K.map.depthTexture.name=nt.name+".shadowMap",K.map.depthTexture.format=Fn,this.type===Vi?(K.map.depthTexture.compareFunction=it?Wa:Ha,K.map.depthTexture.minFilter=Be,K.map.depthTexture.magFilter=Be):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ue,K.map.depthTexture.magFilter=Ue);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let tt=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();nt.isPointLight!==!0&&K.updateMatrices(nt,v);for(let ht=0;ht<tt;ht++){let It=K.getCamera(ht);if(nt.isPointLight){let At=K.camera,jt=K.matrix,Wt=nt.distance||At.far;Wt!==At.far&&(At.far=Wt,At.updateProjectionMatrix()),Ur.setFromMatrixPosition(nt.matrixWorld),At.position.copy(Ur),Ec.copy(At.position),Ec.add(s_[ht]),At.up.copy(r_[ht]),At.lookAt(Ec),At.updateMatrixWorld(),jt.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Yu.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Yu,At.coordinateSystem,At.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,ht),i.clear();else{ht===0&&(i.setRenderTarget(K.map),i.clear());let At=K.getViewport(ht);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),W.viewport(o)}n=K.getFrustum(ht),S(D,v,It,nt,this.type)}K.isPointLightShadow!==!0&&this.type===Rs&&E(K,v),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,F,z)};function E(A,D){let v=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new en(s.x,s.y,{format:Ri,type:Rn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,v,u,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,v,d,_,null)}function C(A,D,v,L){let F=null,z=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)F=z;else if(F=v.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let W=F.uuid,q=D.uuid,O=c[W];O===void 0&&(O={},c[W]=O);let $=O[q];$===void 0&&($=F.clone(),O[q]=$,D.addEventListener("dispose",w)),F=$}if(F.visible=D.visible,F.wireframe=D.wireframe,L===Rs?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:f[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,v.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=i.properties.get(F);W.light=v}return F}function S(A,D,v,L,F){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Rs)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let q=t.update(A),O=A.material;if(Array.isArray(O)){let $=q.groups;for(let nt=0,K=$.length;nt<K;nt++){let ot=$[nt],it=O[ot.materialIndex];if(it&&it.visible){let tt=C(A,it,L,F);A.onBeforeShadow(i,A,D,v,q,tt,ot),i.renderBufferDirect(v,null,q,tt,A,ot),A.onAfterShadow(i,A,D,v,q,tt,ot)}}}else if(O.visible){let $=C(A,O,L,F);A.onBeforeShadow(i,A,D,v,q,$,null),i.renderBufferDirect(v,null,q,$,A,null),A.onAfterShadow(i,A,D,v,q,$,null)}}let W=A.children;for(let q=0,O=W.length;q<O;q++)S(W[q],D,v,L,F)}function w(A){A.target.removeEventListener("dispose",w);for(let v in c){let L=c[v],F=A.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function a_(i,t){function e(){let R=!1,Z=new Se,H=null,pt=new Se(0,0,0,0);return{setMask:function(mt){H!==mt&&!R&&(i.colorMask(mt,mt,mt,mt),H=mt)},setLocked:function(mt){R=mt},setClear:function(mt,ct,yt,wt,Kt){Kt===!0&&(mt*=wt,ct*=wt,yt*=wt),Z.set(mt,ct,yt,wt),pt.equals(Z)===!1&&(i.clearColor(mt,ct,yt,wt),pt.copy(Z))},reset:function(){R=!1,H=null,pt.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,H=null,pt=null,mt=null;return{setReversed:function(ct){if(Z!==ct){let yt=t.get("EXT_clip_control");ct?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),Z=ct;let wt=mt;mt=null,this.setClear(wt)}},getReversed:function(){return Z},setTest:function(ct){ct?gt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ct){H!==ct&&!R&&(i.depthMask(ct),H=ct)},setFunc:function(ct){if(Z&&(ct=_u[ct]),pt!==ct){switch(ct){case yo:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ct}},setLocked:function(ct){R=ct},setClear:function(ct){mt!==ct&&(mt=ct,Z&&(ct=1-ct),i.clearDepth(ct))},reset:function(){R=!1,H=null,pt=null,mt=null,Z=!1}}}function s(){let R=!1,Z=null,H=null,pt=null,mt=null,ct=null,yt=null,wt=null,Kt=null;return{setTest:function(qt){R||(qt?gt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(qt){Z!==qt&&!R&&(i.stencilMask(qt),Z=qt)},setFunc:function(qt,fe,pe){(H!==qt||pt!==fe||mt!==pe)&&(i.stencilFunc(qt,fe,pe),H=qt,pt=fe,mt=pe)},setOp:function(qt,fe,pe){(ct!==qt||yt!==fe||wt!==pe)&&(i.stencilOp(qt,fe,pe),ct=qt,yt=fe,wt=pe)},setLocked:function(qt){R=qt},setClear:function(qt){Kt!==qt&&(i.clearStencil(qt),Kt=qt)},reset:function(){R=!1,Z=null,H=null,pt=null,mt=null,ct=null,yt=null,wt=null,Kt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,E=null,C=null,S=null,w=null,A=null,D=null,v=new Jt(0,0,0),L=0,F=!1,z=null,W=null,q=null,O=null,$=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ot=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(it)[1]),K=ot>=1):it.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),K=ot>=2);let tt=null,ht={},It=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),jt=new Se().fromArray(It),Wt=new Se().fromArray(At);function Yt(R,Z,H,pt){let mt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(R,ct),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<H;yt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(Z+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ct}let ut={};ut[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(ds),bt(!1),Mt(ql),gt(i.CULL_FACE),_t(Vn);function gt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Tt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Gt(R,Z){return u[R]!==Z?(i.bindFramebuffer(R,Z),u[R]=Z,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Nt(R,Z){let H=g,pt=!1;if(R){H=d.get(Z),H===void 0&&(H=[],d.set(Z,H));let mt=R.textures;if(H.length!==mt.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,yt=mt.length;ct<yt;ct++)H[ct]=i.COLOR_ATTACHMENT0+ct;H.length=mt.length,pt=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,pt=!0);pt&&i.drawBuffers(H)}function Ot(R){return _!==R?(i.useProgram(R),_=R,!0):!1}let ae={[Gi]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[kh]:i.FUNC_REVERSE_SUBTRACT};ae[Vh]=i.MIN,ae[Gh]=i.MAX;let ft={[Hh]:i.ZERO,[Wh]:i.ONE,[Xh]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[Kh]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[Yh]:i.DST_ALPHA,[qh]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[$h]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[tu]:i.CONSTANT_ALPHA,[eu]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(R,Z,H,pt,mt,ct,yt,wt,Kt,qt){if(R===Vn){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(gt(i.BLEND),p=!0),R!==Bh){if(R!==m||qt!==F){if((E!==Gi||w!==Gi)&&(i.blendEquation(i.FUNC_ADD),E=Gi,w=Gi),qt)switch(R){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",R);break}else switch(R){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",R);break}C=null,S=null,A=null,D=null,v.set(0,0,0),L=0,m=R,F=qt}return}mt=mt||Z,ct=ct||H,yt=yt||pt,(Z!==E||mt!==w)&&(i.blendEquationSeparate(ae[Z],ae[mt]),E=Z,w=mt),(H!==C||pt!==S||ct!==A||yt!==D)&&(i.blendFuncSeparate(ft[H],ft[pt],ft[ct],ft[yt]),C=H,S=pt,A=ct,D=yt),(wt.equals(v)===!1||Kt!==L)&&(i.blendColor(wt.r,wt.g,wt.b,Kt),v.copy(wt),L=Kt),m=R,F=!1}function vt(R,Z){R.side===kn?Tt(i.CULL_FACE):gt(i.CULL_FACE);let H=R.side===Ke;Z&&(H=!H),bt(H),R.blending===Cs&&R.transparent===!1?_t(Vn):_t(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let pt=R.stencilWrite;a.setTest(pt),pt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(R){z!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),z=R)}function Mt(R){R!==Uh?(gt(i.CULL_FACE),R!==W&&(R===ql?i.cullFace(i.BACK):R===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),W=R}function dt(R){R!==q&&(K&&i.lineWidth(R),q=R)}function Et(R,Z,H){R?(gt(i.POLYGON_OFFSET_FILL),(O!==Z||$!==H)&&(O=Z,$=H,o.getReversed()&&(Z=-Z),i.polygonOffset(Z,H))):Tt(i.POLYGON_OFFSET_FILL)}function Pt(R){R?gt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function Rt(R){R===void 0&&(R=i.TEXTURE0+nt-1),tt!==R&&(i.activeTexture(R),tt=R)}function k(R,Z,H){H===void 0&&(tt===null?H=i.TEXTURE0+nt-1:H=tt);let pt=ht[H];pt===void 0&&(pt={type:void 0,texture:void 0},ht[H]=pt),(pt.type!==R||pt.texture!==Z)&&(tt!==H&&(i.activeTexture(H),tt=H),i.bindTexture(R,Z||ut[R]),pt.type=R,pt.texture=Z)}function se(){let R=ht[tt];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function b(){try{i.texSubImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function J(){try{i.texSubImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function U(){try{i.texStorage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function x(){try{i.texStorage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function y(){try{i.texImage2D(...arguments)}catch(R){Zt("WebGLState:",R)}}function M(){try{i.texImage3D(...arguments)}catch(R){Zt("WebGLState:",R)}}function I(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function P(R,Z){f[R]!==Z&&(i.pixelStorei(R,Z),f[R]=Z)}function V(R){jt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),jt.copy(R))}function B(R){Wt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Wt.copy(R))}function Q(R,Z){let H=c.get(Z);H===void 0&&(H=new WeakMap,c.set(Z,H));let pt=H.get(R);pt===void 0&&(pt=i.getUniformBlockIndex(Z,R.name),H.set(R,pt))}function j(R,Z){let pt=c.get(Z).get(R);l.get(Z)!==pt&&(i.uniformBlockBinding(Z,pt,R.__bindingPointIndex),l.set(Z,pt))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},tt=null,ht={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,E=null,C=null,S=null,w=null,A=null,D=null,v=new Jt(0,0,0),L=0,F=!1,z=null,W=null,q=null,O=null,$=null,jt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Tt,bindFramebuffer:Gt,drawBuffers:Nt,useProgram:Ot,setBlending:_t,setMaterial:vt,setFlipSided:bt,setCullFace:Mt,setLineWidth:dt,setPolygonOffset:Et,setScissorTest:Pt,activeTexture:Rt,bindTexture:k,unbindTexture:se,compressedTexImage2D:Ht,compressedTexImage3D:N,texImage2D:y,texImage3D:M,pixelStorei:P,getParameter:I,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:U,texStorage3D:x,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:et,compressedTexSubImage3D:lt,scissor:V,viewport:B,reset:xt}}function l_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,b){return g?new OffscreenCanvas(N,b):tr("canvas")}function p(N,b,J){let et=1,lt=Ht(N);if((lt.width>J||lt.height>J)&&(et=J/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let U=Math.floor(et*lt.width),x=Math.floor(et*lt.height);u===void 0&&(u=_(U,x));let y=b?_(U,x):u;return y.width=U,y.height=x,y.getContext("2d").drawImage(N,0,0,U,x),Xt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+U+"x"+x+")."),y}else return"data"in N&&Xt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),N;return N}function m(N){return N.generateMipmaps}function E(N){i.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(N,b,J,et,lt,U=!1){if(N!==null){if(i[N]!==void 0)return i[N];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let x;et&&(x=t.get("EXT_texture_norm16"),x||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let y=b;if(b===i.RED&&(J===i.FLOAT&&(y=i.R32F),J===i.HALF_FLOAT&&(y=i.R16F),J===i.UNSIGNED_BYTE&&(y=i.R8),J===i.UNSIGNED_SHORT&&x&&(y=x.R16_EXT),J===i.SHORT&&x&&(y=x.R16_SNORM_EXT)),b===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(y=i.R8UI),J===i.UNSIGNED_SHORT&&(y=i.R16UI),J===i.UNSIGNED_INT&&(y=i.R32UI),J===i.BYTE&&(y=i.R8I),J===i.SHORT&&(y=i.R16I),J===i.INT&&(y=i.R32I)),b===i.RG&&(J===i.FLOAT&&(y=i.RG32F),J===i.HALF_FLOAT&&(y=i.RG16F),J===i.UNSIGNED_BYTE&&(y=i.RG8),J===i.UNSIGNED_SHORT&&x&&(y=x.RG16_EXT),J===i.SHORT&&x&&(y=x.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(y=i.RG8UI),J===i.UNSIGNED_SHORT&&(y=i.RG16UI),J===i.UNSIGNED_INT&&(y=i.RG32UI),J===i.BYTE&&(y=i.RG8I),J===i.SHORT&&(y=i.RG16I),J===i.INT&&(y=i.RG32I)),b===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(y=i.RGB8UI),J===i.UNSIGNED_SHORT&&(y=i.RGB16UI),J===i.UNSIGNED_INT&&(y=i.RGB32UI),J===i.BYTE&&(y=i.RGB8I),J===i.SHORT&&(y=i.RGB16I),J===i.INT&&(y=i.RGB32I)),b===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(y=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(y=i.RGBA16UI),J===i.UNSIGNED_INT&&(y=i.RGBA32UI),J===i.BYTE&&(y=i.RGBA8I),J===i.SHORT&&(y=i.RGBA16I),J===i.INT&&(y=i.RGBA32I)),b===i.RGB&&(J===i.UNSIGNED_SHORT&&x&&(y=x.RGB16_EXT),J===i.SHORT&&x&&(y=x.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(y=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(y=i.R11F_G11F_B10F)),b===i.RGBA){let M=U?Qs:re.getTransfer(lt);J===i.FLOAT&&(y=i.RGBA32F),J===i.HALF_FLOAT&&(y=i.RGBA16F),J===i.UNSIGNED_BYTE&&(y=M===he?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&x&&(y=x.RGBA16_EXT),J===i.SHORT&&x&&(y=x.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(y=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(y=i.RGB5_A1)}return(y===i.R16F||y===i.R32F||y===i.RG16F||y===i.RG32F||y===i.RGBA16F||y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),y}function w(N,b){let J;return N?b===null||b===Tn||b===Ps?J=i.DEPTH24_STENCIL8:b===An?J=i.DEPTH32F_STENCIL8:b===Is&&(J=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Tn||b===Ps?J=i.DEPTH_COMPONENT24:b===An?J=i.DEPTH_COMPONENT32F:b===Is&&(J=i.DEPTH_COMPONENT16),J}function A(N,b){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ue&&N.minFilter!==Be?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function D(N){let b=N.target;b.removeEventListener("dispose",D),L(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function v(N){let b=N.target;b.removeEventListener("dispose",v),z(b)}function L(N){let b=n.get(N);if(b.__webglInit===void 0)return;let J=N.source,et=d.get(J);if(et){let lt=et[b.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&F(N),Object.keys(et).length===0&&d.delete(J)}n.remove(N)}function F(N){let b=n.get(N);i.deleteTexture(b.__webglTexture);let J=N.source,et=d.get(J);delete et[b.__cacheKey],o.memory.textures--}function z(N){let b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let lt=0;lt<b.__webglFramebuffer[et].length;lt++)i.deleteFramebuffer(b.__webglFramebuffer[et][lt]);else i.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)i.deleteFramebuffer(b.__webglFramebuffer[et]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let J=N.textures;for(let et=0,lt=J.length;et<lt;et++){let U=n.get(J[et]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove(J[et])}n.remove(N)}let W=0;function q(){W=0}function O(){return W}function $(N){W=N}function nt(){let N=W;return N>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,N}function K(N){let b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ot(N,b){let J=n.get(N);if(N.isVideoTexture&&k(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&J.__version!==N.version){let et=N.image;if(et===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(J,N,b);return}}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+b)}function it(N,b){let J=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Tt(J,N,b);return}else N.isExternalTexture&&(J.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+b)}function tt(N,b){let J=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){Tt(J,N,b);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+b)}function ht(N,b){let J=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&J.__version!==N.version){Gt(J,N,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+b)}let It={[Di]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},At={[Ue]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},jt={[lu]:i.NEVER,[du]:i.ALWAYS,[cu]:i.LESS,[Ha]:i.LEQUAL,[hu]:i.EQUAL,[Wa]:i.GEQUAL,[uu]:i.GREATER,[fu]:i.NOTEQUAL};function Wt(N,b){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Be||b.magFilter===oa||b.magFilter===Tr||b.magFilter===Ti||b.minFilter===Be||b.minFilter===oa||b.minFilter===Tr||b.minFilter===Ti)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,It[b.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,It[b.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,It[b.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,At[b.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,jt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ue||b.minFilter!==Tr&&b.minFilter!==Ti||b.type===An&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Yt(N,b){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",D));let et=b.source,lt=d.get(et);lt===void 0&&(lt={},d.set(et,lt));let U=K(b);if(U!==N.__cacheKey){lt[U]===void 0&&(lt[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),lt[U].usedTimes++;let x=lt[N.__cacheKey];x!==void 0&&(lt[N.__cacheKey].usedTimes--,x.usedTimes===0&&F(b)),N.__cacheKey=U,N.__webglTexture=lt[U].texture}return J}function ut(N,b,J){return Math.floor(Math.floor(N/J)/b)}function gt(N,b,J,et){let U=N.updateRanges;if(U.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,J,et,b.data);else{U.sort((P,V)=>P.start-V.start);let x=0;for(let P=1;P<U.length;P++){let V=U[x],B=U[P],Q=V.start+V.count,j=ut(B.start,b.width,4),xt=ut(V.start,b.width,4);B.start<=Q+1&&j===xt&&ut(B.start+B.count-1,b.width,4)===j?V.count=Math.max(V.count,B.start+B.count-V.start):(++x,U[x]=B)}U.length=x+1;let y=e.getParameter(i.UNPACK_ROW_LENGTH),M=e.getParameter(i.UNPACK_SKIP_PIXELS),I=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let P=0,V=U.length;P<V;P++){let B=U[P],Q=Math.floor(B.start/4),j=Math.ceil(B.count/4),xt=Q%b.width,R=Math.floor(Q/b.width),Z=j,H=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,xt,R,Z,H,J,et,b.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,M),e.pixelStorei(i.UNPACK_SKIP_ROWS,I)}}function Tt(N,b,J){let et=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=i.TEXTURE_3D);let lt=Yt(N,b),U=b.source;e.bindTexture(et,N.__webglTexture,i.TEXTURE0+J);let x=n.get(U);if(U.version!==x.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let H=re.getPrimaries(re.workingColorSpace),pt=b.colorSpace===ni?null:re.getPrimaries(b.colorSpace),mt=b.colorSpace===ni||H===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let M=p(b.image,!1,s.maxTextureSize);M=se(b,M);let I=r.convert(b.format,b.colorSpace),P=r.convert(b.type),V=S(b.internalFormat,I,P,b.normalized,b.colorSpace,b.isVideoTexture);Wt(et,b);let B,Q=b.mipmaps,j=b.isVideoTexture!==!0,xt=x.__version===void 0||lt===!0,R=U.dataReady,Z=A(b,M);if(b.isDepthTexture)V=w(b.format===Ai,b.type),xt&&(j?e.texStorage2D(i.TEXTURE_2D,1,V,M.width,M.height):e.texImage2D(i.TEXTURE_2D,0,V,M.width,M.height,0,I,P,null));else if(b.isDataTexture)if(Q.length>0){j&&xt&&e.texStorage2D(i.TEXTURE_2D,Z,V,Q[0].width,Q[0].height);for(let H=0,pt=Q.length;H<pt;H++)B=Q[H],j?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,P,B.data):e.texImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,I,P,B.data);b.generateMipmaps=!1}else j?(xt&&e.texStorage2D(i.TEXTURE_2D,Z,V,M.width,M.height),R&&gt(b,M,I,P)):e.texImage2D(i.TEXTURE_2D,0,V,M.width,M.height,0,I,P,M.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){j&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Z,V,Q[0].width,Q[0].height,M.depth);for(let H=0,pt=Q.length;H<pt;H++)if(B=Q[H],b.format!==xn)if(I!==null)if(j){if(R)if(b.layerUpdates.size>0){let mt=_c(B.width,B.height,b.format,b.type);for(let ct of b.layerUpdates){let yt=B.data.subarray(ct*mt/B.data.BYTES_PER_ELEMENT,(ct+1)*mt/B.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ct,B.width,B.height,1,I,yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,B.width,B.height,M.depth,I,B.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,V,B.width,B.height,M.depth,0,B.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,B.width,B.height,M.depth,I,P,B.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,V,B.width,B.height,M.depth,0,I,P,B.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{j&&xt&&e.texStorage2D(i.TEXTURE_2D,Z,V,Q[0].width,Q[0].height);for(let H=0,pt=Q.length;H<pt;H++)B=Q[H],b.format!==xn?I!==null?j?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,B.data):e.compressedTexImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,B.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,P,B.data):e.texImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,I,P,B.data)}else if(b.isDataArrayTexture)if(j){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Z,V,M.width,M.height,M.depth),R)if(b.layerUpdates.size>0){let H=_c(M.width,M.height,b.format,b.type);for(let pt of b.layerUpdates){let mt=M.data.subarray(pt*H/M.data.BYTES_PER_ELEMENT,(pt+1)*H/M.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,M.width,M.height,1,I,P,mt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,I,P,M.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,V,M.width,M.height,M.depth,0,I,P,M.data);else if(b.isData3DTexture)j?(xt&&e.texStorage3D(i.TEXTURE_3D,Z,V,M.width,M.height,M.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,I,P,M.data)):e.texImage3D(i.TEXTURE_3D,0,V,M.width,M.height,M.depth,0,I,P,M.data);else if(b.isFramebufferTexture){if(xt)if(j)e.texStorage2D(i.TEXTURE_2D,Z,V,M.width,M.height);else{let H=M.width,pt=M.height;for(let mt=0;mt<Z;mt++)e.texImage2D(i.TEXTURE_2D,mt,V,H,pt,0,I,P,null),H>>=1,pt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let H=i.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),M.parentNode!==H){H.appendChild(M),f.add(b),H.onpaint=pt=>{let mt=pt.changedElements;for(let ct of f)mt.includes(ct.image)&&(ct.needsUpdate=!0)},H.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,M);else{let mt=i.RGBA,ct=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,ct,yt,M)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Q.length>0){if(j&&xt){let H=Ht(Q[0]);e.texStorage2D(i.TEXTURE_2D,Z,V,H.width,H.height)}for(let H=0,pt=Q.length;H<pt;H++)B=Q[H],j?R&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,I,P,B):e.texImage2D(i.TEXTURE_2D,H,V,I,P,B);b.generateMipmaps=!1}else if(j){if(xt){let H=Ht(M);e.texStorage2D(i.TEXTURE_2D,Z,V,H.width,H.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,I,P,M)}else e.texImage2D(i.TEXTURE_2D,0,V,I,P,M);m(b)&&E(et),x.__version=U.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Gt(N,b,J){if(b.image.length!==6)return;let et=Yt(N,b),lt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+J);let U=n.get(lt);if(lt.version!==U.__version||et===!0){e.activeTexture(i.TEXTURE0+J);let x=re.getPrimaries(re.workingColorSpace),y=b.colorSpace===ni?null:re.getPrimaries(b.colorSpace),M=b.colorSpace===ni||x===y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let I=b.isCompressedTexture||b.image[0].isCompressedTexture,P=b.image[0]&&b.image[0].isDataTexture,V=[];for(let ct=0;ct<6;ct++)!I&&!P?V[ct]=p(b.image[ct],!0,s.maxCubemapSize):V[ct]=P?b.image[ct].image:b.image[ct],V[ct]=se(b,V[ct]);let B=V[0],Q=r.convert(b.format,b.colorSpace),j=r.convert(b.type),xt=S(b.internalFormat,Q,j,b.normalized,b.colorSpace),R=b.isVideoTexture!==!0,Z=U.__version===void 0||et===!0,H=lt.dataReady,pt=A(b,B);Wt(i.TEXTURE_CUBE_MAP,b);let mt;if(I){R&&Z&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,xt,B.width,B.height);for(let ct=0;ct<6;ct++){mt=V[ct].mipmaps;for(let yt=0;yt<mt.length;yt++){let wt=mt[yt];b.format!==xn?Q!==null?R?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,0,0,wt.width,wt.height,Q,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,xt,wt.width,wt.height,0,wt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,0,0,wt.width,wt.height,Q,j,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt,xt,wt.width,wt.height,0,Q,j,wt.data)}}}else{if(mt=b.mipmaps,R&&Z){mt.length>0&&pt++;let ct=Ht(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,xt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(P){R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,V[ct].width,V[ct].height,Q,j,V[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,V[ct].width,V[ct].height,0,Q,j,V[ct].data);for(let yt=0;yt<mt.length;yt++){let Kt=mt[yt].image[ct].image;R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,0,0,Kt.width,Kt.height,Q,j,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,xt,Kt.width,Kt.height,0,Q,j,Kt.data)}}else{R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Q,j,V[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,Q,j,V[ct]);for(let yt=0;yt<mt.length;yt++){let wt=mt[yt];R?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,0,0,Q,j,wt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt+1,xt,Q,j,wt.image[ct])}}}m(b)&&E(i.TEXTURE_CUBE_MAP),U.__version=lt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Nt(N,b,J,et,lt,U){let x=r.convert(J.format,J.colorSpace),y=r.convert(J.type),M=S(J.internalFormat,x,y,J.normalized,J.colorSpace),I=n.get(b),P=n.get(J);if(P.__renderTarget=b,!I.__hasExternalTextures){let V=Math.max(1,b.width>>U),B=Math.max(1,b.height>>U);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,U,M,V,B,b.depth,0,x,y,null):e.texImage2D(lt,U,M,V,B,0,x,y,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Rt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,lt,P.__webglTexture,0,Pt(b)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,lt,P.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(N,b,J){if(i.bindRenderbuffer(i.RENDERBUFFER,N),b.depthBuffer){let et=b.depthTexture,lt=et&&et.isDepthTexture?et.type:null,U=w(b.stencilBuffer,lt),x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt(b),U,b.width,b.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt(b),U,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,U,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,N)}else{let et=b.textures;for(let lt=0;lt<et.length;lt++){let U=et[lt],x=r.convert(U.format,U.colorSpace),y=r.convert(U.type),M=S(U.internalFormat,x,y,U.normalized,U.colorSpace);Rt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt(b),M,b.width,b.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt(b),M,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,M,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(N,b,J){let et=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(b.depthTexture);if(lt.__renderTarget=b,(!lt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),et){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,b.depthTexture.addEventListener("dispose",D)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,b.depthTexture);let I=r.convert(b.depthTexture.format),P=r.convert(b.depthTexture.type),V;b.depthTexture.format===Fn?V=i.DEPTH_COMPONENT24:b.depthTexture.format===Ai&&(V=i.DEPTH24_STENCIL8);for(let B=0;B<6;B++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,V,b.width,b.height,0,I,P,null)}}else ot(b.depthTexture,0);let U=lt.__webglTexture,x=Pt(b),y=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,M=b.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Fn)Rt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,y,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,M,y,U,0);else if(b.depthTexture.format===Ai)Rt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,y,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,M,y,U,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(N){let b=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){let et=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),et){let lt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),b.__depthDisposeCallback=lt}b.__boundDepthTexture=et}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let et=0;et<6;et++)ae(b.__webglFramebuffer[et],N,et);else{let et=N.texture.mipmaps;et&&et.length>0?ae(b.__webglFramebuffer[0],N,0):ae(b.__webglFramebuffer,N,0)}else if(J){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]===void 0)b.__webglDepthbuffer[et]=i.createRenderbuffer(),Ot(b.__webglDepthbuffer[et],N,!1);else{let lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=b.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,U)}}else{let et=N.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ot(b.__webglDepthbuffer,N,!1);else{let lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,U)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(N,b,J){let et=n.get(N);b!==void 0&&Nt(et.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ft(N)}function vt(N){let b=N.texture,J=n.get(N),et=n.get(b);N.addEventListener("dispose",v);let lt=N.textures,U=N.isWebGLCubeRenderTarget===!0,x=lt.length>1;if(x||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=b.version,o.memory.textures++),U){J.__webglFramebuffer=[];for(let y=0;y<6;y++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[y]=[];for(let M=0;M<b.mipmaps.length;M++)J.__webglFramebuffer[y][M]=i.createFramebuffer()}else J.__webglFramebuffer[y]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let y=0;y<b.mipmaps.length;y++)J.__webglFramebuffer[y]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(x)for(let y=0,M=lt.length;y<M;y++){let I=n.get(lt[y]);I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Rt(N)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let y=0;y<lt.length;y++){let M=lt[y];J.__webglColorRenderbuffer[y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[y]);let I=r.convert(M.format,M.colorSpace),P=r.convert(M.type),V=S(M.internalFormat,I,P,M.normalized,M.colorSpace,N.isXRRenderTarget===!0),B=Pt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,B,V,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+y,i.RENDERBUFFER,J.__webglColorRenderbuffer[y])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(J.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,b);for(let y=0;y<6;y++)if(b.mipmaps&&b.mipmaps.length>0)for(let M=0;M<b.mipmaps.length;M++)Nt(J.__webglFramebuffer[y][M],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+y,M);else Nt(J.__webglFramebuffer[y],N,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0);m(b)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(x){for(let y=0,M=lt.length;y<M;y++){let I=lt[y],P=n.get(I),V=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(V=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,P.__webglTexture),Wt(V,I),Nt(J.__webglFramebuffer,N,I,i.COLOR_ATTACHMENT0+y,V,0),m(I)&&E(V)}e.unbindTexture()}else{let y=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(y=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(y,et.__webglTexture),Wt(y,b),b.mipmaps&&b.mipmaps.length>0)for(let M=0;M<b.mipmaps.length;M++)Nt(J.__webglFramebuffer[M],N,b,i.COLOR_ATTACHMENT0,y,M);else Nt(J.__webglFramebuffer,N,b,i.COLOR_ATTACHMENT0,y,0);m(b)&&E(y),e.unbindTexture()}N.depthBuffer&&ft(N)}function bt(N){let b=N.textures;for(let J=0,et=b.length;J<et;J++){let lt=b[J];if(m(lt)){let U=C(N),x=n.get(lt).__webglTexture;e.bindTexture(U,x),E(U),e.unbindTexture()}}}let Mt=[],dt=[];function Et(N){if(N.samples>0){if(Rt(N)===!1){let b=N.textures,J=N.width,et=N.height,lt=i.COLOR_BUFFER_BIT,U=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=n.get(N),y=b.length>1;if(y)for(let I=0;I<b.length;I++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,x.__webglMultisampledFramebuffer);let M=N.texture.mipmaps;M&&M.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer);for(let I=0;I<b.length;I++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,x.__webglColorRenderbuffer[I]);let P=n.get(b[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,J,et,0,0,J,et,lt,i.NEAREST),l===!0&&(Mt.length=0,dt.length=0,Mt.push(i.COLOR_ATTACHMENT0+I),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Mt.push(U),dt.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),y)for(let I=0;I<b.length;I++){e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,x.__webglColorRenderbuffer[I]);let P=n.get(b[I]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let b=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Pt(N){return Math.min(s.maxSamples,N.samples)}function Rt(N){let b=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function k(N){let b=o.render.frame;h.get(N)!==b&&(h.set(N,b),N.update())}function se(N,b){let J=N.colorSpace,et=N.format,lt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==js&&J!==ni&&(re.getTransfer(J)===he?(et!==xn||lt!==nn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",J)),b}function Ht(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=q,this.getTextureUnits=O,this.setTextureUnits=$,this.setTexture2D=ot,this.setTexture2DArray=it,this.setTexture3D=tt,this.setTextureCube=ht,this.rebindTextures=_t,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function c_(i,t){function e(n,s=ni){let r,o=re.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===la)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ca)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===lc)return i.ALPHA;if(n===cc)return i.RGB;if(n===xn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===ua)return i.RG_INTEGER;if(n===fa)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Ir)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===_a||n===ya||n===va||n===ba||n===Pr||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===_a)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===va)return r.COMPRESSED_R11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pr)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ma||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Na||n===Da||n===Ua||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Va||n===Lr||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:h_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=typeof XRWebGLBinding<"u",p=new Lc,m={},E=e.getContextAttributes(),C=null,S=null,w=[],A=[],D=new St,v=null,L=null,F=new Ze;F.viewport=new Se;let z=new Ze;z.viewport=new Se;let W=[F,z],q=new na,O=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let gt=w[ut];return gt===void 0&&(gt=new ys,w[ut]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(ut){let gt=w[ut];return gt===void 0&&(gt=new ys,w[ut]=gt),gt.getGripSpace()},this.getHand=function(ut){let gt=w[ut];return gt===void 0&&(gt=new ys,w[ut]=gt),gt.getHandSpace()};function nt(ut){let gt=A.indexOf(ut.inputSource);if(gt===-1)return;let Tt=w[gt];Tt!==void 0&&(Tt.update(ut.inputSource,ut.frame,c||o),Tt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function K(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ot);for(let ut=0;ut<w.length;ut++){let gt=A[ut];gt!==null&&(A[ut]=null,w[ut].disconnect(gt))}O=null,$=null,p.reset();for(let ut in m)delete m[ut];if(t.setRenderTarget(C),d=null,u=null,f=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(D.width,D.height,!1),L!==null){let ut=L.camera;ut.fov=L.fov,ut.zoom=L.zoom,ut.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){r=ut,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){a=ut,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ut){c=ut},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ot),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Gt=null,Nt=null;E.depth&&(Nt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=E.stencil?Ai:Fn,Gt=E.stencil?Ps:Tn);let Ot={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new en(u.textureWidth,u.textureHeight,{format:xn,type:nn,depthTexture:new _i(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new en(d.framebufferWidth,d.framebufferHeight,{format:xn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ot(ut){for(let gt=0;gt<ut.removed.length;gt++){let Tt=ut.removed[gt],Gt=A.indexOf(Tt);Gt>=0&&(A[Gt]=null,w[Gt].disconnect(Tt))}for(let gt=0;gt<ut.added.length;gt++){let Tt=ut.added[gt],Gt=A.indexOf(Tt);if(Gt===-1){for(let Ot=0;Ot<w.length;Ot++)if(Ot>=A.length){A.push(Tt),Gt=Ot;break}else if(A[Ot]===null){A[Ot]=Tt,Gt=Ot;break}if(Gt===-1)break}let Nt=w[Gt];Nt&&Nt.connect(Tt)}}let it=new G,tt=new G;function ht(ut,gt,Tt){it.setFromMatrixPosition(gt.matrixWorld),tt.setFromMatrixPosition(Tt.matrixWorld);let Gt=it.distanceTo(tt),Nt=gt.projectionMatrix.elements,Ot=Tt.projectionMatrix.elements,ae=Nt[14]/(Nt[10]-1),ft=Nt[14]/(Nt[10]+1),_t=(Nt[9]+1)/Nt[5],vt=(Nt[9]-1)/Nt[5],bt=(Nt[8]-1)/Nt[0],Mt=(Ot[8]+1)/Ot[0],dt=ae*bt,Et=ae*Mt,Pt=Gt/(-bt+Mt),Rt=Pt*-bt;if(gt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Rt),ut.translateZ(Pt),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Nt[10]===-1)ut.projectionMatrix.copy(gt.projectionMatrix),ut.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let k=ae+Pt,se=ft+Pt,Ht=dt-Rt,N=Et+(Gt-Rt),b=_t*ft/se*k,J=vt*ft/se*k;ut.projectionMatrix.makePerspective(Ht,N,b,J,k,se),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function It(ut,gt){gt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(gt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let gt=ut.near,Tt=ut.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),q.near=z.near=F.near=gt,q.far=z.far=F.far=Tt,(O!==q.near||$!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),O=q.near,$=q.far),q.layers.mask=ut.layers.mask|6,F.layers.mask=q.layers.mask&-5,z.layers.mask=q.layers.mask&-3;let Gt=ut.parent,Nt=q.cameras;It(q,Gt);for(let Ot=0;Ot<Nt.length;Ot++)It(Nt[Ot],Gt);Nt.length===2?ht(q,F,z):q.projectionMatrix.copy(F.projectionMatrix),L===null&&ut.isPerspectiveCamera&&(L={camera:ut,fov:ut.fov,zoom:ut.zoom}),At(ut,q,Gt)};function At(ut,gt,Tt){Tt===null?ut.matrix.copy(gt.matrixWorld):(ut.matrix.copy(Tt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(gt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(gt.projectionMatrix),ut.projectionMatrixInverse.copy(gt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=gs*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(ut){l=ut,u!==null&&(u.fixedFoveation=ut),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ut)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(ut){return m[ut]};let jt=null;function Wt(ut,gt){if(h=gt.getViewerPose(c||o),g=gt,h!==null){let Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Gt=!1;Tt.length!==q.cameras.length&&(q.cameras.length=0,Gt=!0);for(let ft=0;ft<Tt.length;ft++){let _t=Tt[ft],vt=null;if(d!==null)vt=d.getViewport(_t);else{let Mt=f.getViewSubImage(u,_t);vt=Mt.viewport,ft===0&&(t.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(S))}let bt=W[ft];bt===void 0&&(bt=new Ze,bt.layers.enable(ft),bt.viewport=new Se,W[ft]=bt),bt.matrix.fromArray(_t.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(_t.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(vt.x,vt.y,vt.width,vt.height),ft===0&&(q.matrix.copy(bt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Gt===!0&&q.cameras.push(bt)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let ft=f.getDepthInformation(Tt[0]);ft&&ft.isValid&&ft.texture&&p.init(ft,s.renderState)}if(Nt&&Nt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let ft=0;ft<Tt.length;ft++){let _t=Tt[ft].camera;if(_t){let vt=m[_t];vt||(vt=new lr,m[_t]=vt);let bt=f.getCameraImage(_t);vt.sourceTexture=bt}}}}for(let Tt=0;Tt<w.length;Tt++){let Gt=A[Tt],Nt=w[Tt];Gt!==null&&Nt!==void 0&&Nt.update(Gt,gt,c||o)}jt&&jt(ut,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}let Yt=new Zu;Yt.setAnimationLoop(Wt),this.setAnimationLoop=function(ut){jt=ut},this.dispose=function(){}}},f_=new ue,tf=new $t;tf.set(-1,0,0,0,1,0,0,0,1);function d_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,C,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,E,C):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let E=t.get(m),C=E.envMap,S=E.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,C){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=C*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let A=w.program;n.uniformBlockBinding(S,A)}function c(S,w){let A=s[S.id];A===void 0&&(p(S),A=h(S),s[S.id]=A,S.addEventListener("dispose",E));let D=w.program;n.updateUBOMapping(S,D);let v=t.render.frame;r[S.id]!==v&&(u(S),r[S.id]=v)}function h(S){let w=f();S.__bindingPointIndex=w;let A=i.createBuffer(),D=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let w=s[S.id],A=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,L=A.length;v<L;v++){let F=A[v];if(Array.isArray(F))for(let z=0,W=F.length;z<W;z++)d(F[z],v,z,D);else d(F,v,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,w,A,D){if(_(S,w,A,D)===!0){let v=S.__offset,L=S.value;if(Array.isArray(L)){let F=0;for(let z=0;z<L.length;z++){let W=L[z],q=m(W);g(W,S.__data,F),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(L,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,w,A){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,A)}function _(S,w,A,D){let v=S.value,L=w+"_"+A;if(D[L]===void 0)return typeof v=="number"||typeof v=="boolean"?D[L]=v:ArrayBuffer.isView(v)?D[L]=v.slice():D[L]=v.clone(),!0;{let F=D[L];if(typeof v=="number"||typeof v=="boolean"){if(F!==v)return D[L]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(F.equals(v)===!1)return F.copy(v),!0}}return!1}function p(S){let w=S.uniforms,A=0,D=16;for(let L=0,F=w.length;L<F;L++){let z=Array.isArray(w[L])?w[L]:[w[L]];for(let W=0,q=z.length;W<q;W++){let O=z[W],$=Array.isArray(O.value)?O.value:[O.value];for(let nt=0,K=$.length;nt<K;nt++){let ot=$[nt],it=m(ot),tt=A%D,ht=tt%it.boundary,It=tt+ht;A+=ht,It!==0&&D-It<it.storage&&(A+=D-It),O.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=it.storage}}}let v=A%D;return v>0&&(A+=D-v),S.__size=A,S.__cache={},this}function m(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",S),w}function E(S){let w=S.target;w.removeEventListener("dispose",E);let A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function C(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:C}}var m_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function g_(){return Gn===null&&(Gn=new Po(m_,16,16,Ri,Rn),Gn.name="DFG_LUT",Gn.minFilter=Be,Gn.magFilter=Be,Gn.wrapS=Dn,Gn.wrapT=Dn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var $a=class{constructor(t={}){let{canvas:e=mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=d,p=new Set([fa,ua,ha]),m=new Set([nn,Tn,Is,Ps,la,ca]),E=new Uint32Array(4),C=new Int32Array(4),S=new G,w=null,A=null,D=[],v=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,z=!1,W=null,q=null,O=null,$=null;this._outputColorSpace=Re;let nt=0,K=0,ot=null,it=-1,tt=null,ht=new Se,It=new Se,At=null,jt=new Jt(0),Wt=0,Yt=e.width,ut=e.height,gt=1,Tt=null,Gt=null,Nt=new Se(0,0,Yt,ut),Ot=new Se(0,0,Yt,ut),ae=!1,ft=new vs,_t=!1,vt=!1,bt=new ue,Mt=new G,dt=new Se,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Rt(){return ot===null?gt:1}let k=n;function se(T,X){return e.getContext(T,X)}let Ht,N,b,J,et,lt,U,x,y,M,I,P,V,B,Q,j,xt,R,Z,H,pt,mt,ct;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),k===null){let X="webgl2";if(k=se(X,T),k===null)throw se(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}yt()}catch(T){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Zt("WebGLRenderer: "+T.message),T}function yt(){Ht=new M0(k),Ht.init(),pt=new c_(k,Ht),N=new d0(k,Ht,t,pt),b=new a_(k,Ht),N.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),q=k.createFramebuffer(),O=k.createFramebuffer(),$=k.createFramebuffer(),J=new T0(k),et=new Yx,lt=new l_(k,Ht,b,et,N,pt,J),U=new S0(F),x=new Rp(k),mt=new u0(k,x),y=new E0(k,x,J,mt),M=new R0(k,y,x,mt,J),R=new A0(k,N,lt),Q=new p0(et),I=new qx(F,U,Ht,N,mt,Q),P=new d_(F,et),V=new Jx,B=new e_(Ht),xt=new h0(F,U,b,M,g,l),j=new o_(F,M,N),ct=new p_(k,J,N,b),Z=new f0(k,Ht,J),H=new w0(k,Ht,J),J.programs=I.programs,F.capabilities=N,F.extensions=Ht,F.properties=et,F.renderLists=V,F.shadowMap=j,F.state=b,F.info=J}_!==nn&&(L=new I0(_,e.width,e.height,a,s,r));let wt=new Nc(F,k);this.xr=wt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=Ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(T){T!==void 0&&(gt=T,this.setSize(Yt,ut,!1))},this.getSize=function(T){return T.set(Yt,ut)},this.setSize=function(T,X,at=!0){if(wt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=T,ut=X,e.width=Math.floor(T*gt),e.height=Math.floor(X*gt),at===!0&&(e.style.width=T+"px",e.style.height=X+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Yt*gt,ut*gt).floor()},this.setDrawingBufferSize=function(T,X,at){Yt=T,ut=X,gt=at,e.width=Math.floor(T*at),e.height=Math.floor(X*at),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(_===nn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ht)},this.getViewport=function(T){return T.copy(Nt)},this.setViewport=function(T,X,at,st){T.isVector4?Nt.set(T.x,T.y,T.z,T.w):Nt.set(T,X,at,st),b.viewport(ht.copy(Nt).multiplyScalar(gt).round())},this.getScissor=function(T){return T.copy(Ot)},this.setScissor=function(T,X,at,st){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,X,at,st),b.scissor(It.copy(Ot).multiplyScalar(gt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){b.setScissorTest(ae=T)},this.setOpaqueSort=function(T){Tt=T},this.setTransparentSort=function(T){Gt=T},this.getClearColor=function(T){return T.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,at=!0){let st=0;if(T){let rt=!1;if(ot!==null){let Dt=ot.texture.format;rt=p.has(Dt)}if(rt){let Dt=ot.texture.type,Ft=m.has(Dt),Lt=xt.getClearColor(),zt=xt.getClearAlpha(),Vt=Lt.r,Qt=Lt.g,ie=Lt.b;Ft?(E[0]=Vt,E[1]=Qt,E[2]=ie,E[3]=zt,k.clearBufferuiv(k.COLOR,0,E)):(C[0]=Vt,C[1]=Qt,C[2]=ie,C[3]=zt,k.clearBufferiv(k.COLOR,0,C))}else st|=k.COLOR_BUFFER_BIT}X&&(st|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(st|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&k.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),W=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),xt.dispose(),V.dispose(),B.dispose(),et.dispose(),U.dispose(),M.dispose(),mt.dispose(),ct.dispose(),I.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",tn),wt.removeEventListener("sessionend",dn),rn.stop()};function Kt(T){T.preventDefault(),fc("WebGLRenderer: Context Lost."),z=!0}function qt(){fc("WebGLRenderer: Context Restored."),z=!1;let T=J.autoReset,X=j.enabled,at=j.autoUpdate,st=j.needsUpdate,rt=j.type;yt(),J.autoReset=T,j.enabled=X,j.autoUpdate=at,j.needsUpdate=st,j.type=rt}function fe(T){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){let X=T.target;X.removeEventListener("dispose",pe),je(X)}function je(T){Le(T),et.remove(T)}function Le(T){let X=et.get(T).programs;X!==void 0&&(X.forEach(function(at){I.releaseProgram(at)}),T.isShaderMaterial&&I.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,at,st,rt,Dt){X===null&&(X=Et);let Ft=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Lt=Vf(T,X,at,st,rt);b.setMaterial(st,Ft);let zt=at.index,Vt=1;if(st.wireframe===!0){if(zt=y.getWireframeAttribute(at),zt===void 0)return;Vt=2}let Qt=at.drawRange,ie=at.attributes.position,kt=Qt.start*Vt,ce=(Qt.start+Qt.count)*Vt;Dt!==null&&(kt=Math.max(kt,Dt.start*Vt),ce=Math.min(ce,(Dt.start+Dt.count)*Vt)),zt!==null?(kt=Math.max(kt,0),ce=Math.min(ce,zt.count)):ie!=null&&(kt=Math.max(kt,0),ce=Math.min(ce,ie.count));let Te=ce-kt;if(Te<0||Te===1/0)return;mt.setup(rt,st,Lt,at,zt);let ye,me=Z;if(zt!==null&&(ye=x.get(zt),me=H,me.setIndex(ye)),rt.isMesh)st.wireframe===!0?(b.setLineWidth(st.wireframeLinewidth*Rt()),me.setMode(k.LINES)):me.setMode(k.TRIANGLES);else if(rt.isLine){let ze=st.linewidth;ze===void 0&&(ze=1),b.setLineWidth(ze*Rt()),rt.isLineSegments?me.setMode(k.LINES):rt.isLineLoop?me.setMode(k.LINE_LOOP):me.setMode(k.LINE_STRIP)}else rt.isPoints?me.setMode(k.POINTS):rt.isSprite&&me.setMode(k.TRIANGLES);if(rt.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))me.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let ze=rt._multiDrawStarts,Ut=rt._multiDrawCounts,qe=rt._multiDrawCount,le=zt?x.get(zt).bytesPerElement:1,pn=et.get(st).currentProgram.getUniforms();for(let Ln=0;Ln<qe;Ln++)pn.setValue(k,"_gl_DrawID",Ln),me.render(ze[Ln]/le,Ut[Ln])}else if(rt.isInstancedMesh)me.renderInstances(kt,Te,rt.count);else if(at.isInstancedBufferGeometry){let ze=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ut=Math.min(at.instanceCount,ze);me.renderInstances(kt,Te,Ut)}else me.render(kt,Te)};function Qe(T,X,at,st){W!==null&&T.isNodeMaterial&&W.setObject(st,T),_t===!0&&Q.setState(T,at,!1),T.transparent===!0&&T.side===kn&&T.forceSinglePass===!1?(T.side=Ke,T.needsUpdate=!0,Wr(T,X,st),T.side=Ei,T.needsUpdate=!0,Wr(T,X,st),T.side=kn):Wr(T,X,st)}this.compile=function(T,X,at=null){at===null&&(at=T),W!==null&&W.renderStart(T,X,at),A=B.get(at),A.init(X),v.push(A),at.traverseVisible(function(rt){rt.isLight&&rt.layers.test(X.layers)&&(A.pushLight(rt),rt.castShadow&&A.pushShadow(rt))}),T!==at&&T.traverseVisible(function(rt){rt.isLight&&rt.layers.test(X.layers)&&(A.pushLight(rt),rt.castShadow&&A.pushShadow(rt))}),A.setupLights(),W!==null&&W.updateLights(A.state.lightsArray),vt=this.localClippingEnabled,_t=Q.init(this.clippingPlanes,vt),_t===!0&&Q.setGlobalState(this.clippingPlanes,X),W!==null&&j.render(A.state.shadowsArray,at,X);let st=new Set;return T.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Dt=rt.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){let Lt=Dt[Ft];Qe(Lt,at,X,rt),st.add(Lt)}else Qe(Dt,at,X,rt),st.add(Dt)}),A=v.pop(),W!==null&&W.renderEnd(),st},this.compileAsync=function(T,X,at=null){let st=this.compile(T,X,at);return new Promise(rt=>{function Dt(){if(st.forEach(function(Ft){let zt=et.get(Ft).currentProgram;(zt===void 0||zt.isReady())&&st.delete(Ft)}),st.size===0){rt(T);return}setTimeout(Dt,10)}Ht.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Xe=null;function sn(T){Xe&&Xe(T)}function tn(){rn.stop()}function dn(){rn.start()}let rn=new Zu;rn.setAnimationLoop(sn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(T){Xe=T,wt.setAnimationLoop(T),T===null?rn.stop():rn.start()},wt.addEventListener("sessionstart",tn),wt.addEventListener("sessionend",dn),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(T,X);let at=wt.enabled===!0&&wt.isPresenting===!0,st=L!==null&&(ot===null||at)&&L.begin(F,ot);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(X),X=wt.getCamera()),T.isScene===!0&&T.onBeforeRender(F,T,X,ot),A=B.get(T,v.length),A.init(X),A.state.textureUnits=lt.getTextureUnits(),v.push(A),bt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ft.setFromProjectionMatrix(bt,Sn,X.reversedDepth),vt=this.localClippingEnabled,_t=Q.init(this.clippingPlanes,vt),w=V.get(T,D.length),w.init(),D.push(w),wt.enabled===!0&&wt.isPresenting===!0){let Ft=F.xr.getDepthSensingMesh();Ft!==null&&ks(Ft,X,-1/0,F.sortObjects)}ks(T,X,0,F.sortObjects),w.finish(),W!==null&&W.updateLights(A.state.lightsArray),F.sortObjects===!0&&w.sort(Tt,Gt),Pt=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Pt&&xt.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Q.beginShadows();let rt=A.state.shadowsArray;if(j.render(rt,T,X),_t===!0&&Q.endShadows(),(st&&L.hasRenderPass())===!1){let Ft=w.opaque,Lt=w.transmissive;if(A.setupLights(),X.isArrayCamera){let zt=X.cameras;if(Lt.length>0)for(let Vt=0,Qt=zt.length;Vt<Qt;Vt++){let ie=zt[Vt];Gr(Ft,Lt,T,ie)}Pt&&xt.render(T);for(let Vt=0,Qt=zt.length;Vt<Qt;Vt++){let ie=zt[Vt];Vr(w,T,ie,ie.viewport)}}else Lt.length>0&&Gr(Ft,Lt,T,X),Pt&&xt.render(T),Vr(w,T,X)}ot!==null&&K===0&&(lt.updateMultisampleRenderTarget(ot),lt.updateRenderTargetMipmap(ot)),st&&L.end(F),T.isScene===!0&&T.onAfterRender(F,T,X),mt.resetDefaultState(),it=-1,tt=null,v.pop(),v.length>0?(A=v[v.length-1],lt.setTextureUnits(A.state.textureUnits),_t===!0&&Q.setGlobalState(F.clippingPlanes,A.state.camera)):A=null,D.pop(),D.length>0?w=D[D.length-1]:w=null,W!==null&&W.renderEnd()};function ks(T,X,at,st){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)at=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLightProbeGrid)A.pushLightProbeGrid(T);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ft)){st&&dt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);let Ft=M.update(T),Lt=T.material;Lt.visible&&w.push(T,Ft,Lt,at,dt.z,null,X)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ft))){let Ft=M.update(T),Lt=T.material;if(st&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),dt.copy(T.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),dt.copy(Ft.boundingSphere.center)),dt.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(Lt)){let zt=Ft.groups;for(let Vt=0,Qt=zt.length;Vt<Qt;Vt++){let ie=zt[Vt],kt=Lt[ie.materialIndex];kt&&kt.visible&&w.push(T,Ft,kt,at,dt.z,ie,X)}}else Lt.visible&&w.push(T,Ft,Lt,at,dt.z,null,X)}}let Dt=T.children;for(let Ft=0,Lt=Dt.length;Ft<Lt;Ft++)ks(Dt[Ft],X,at,st)}function Vr(T,X,at,st){let{opaque:rt,transmissive:Dt,transparent:Ft}=T;A.setupLightsView(at),_t===!0&&Q.setGlobalState(F.clippingPlanes,at),st&&b.viewport(ht.copy(st)),rt.length>0&&Hr(rt,X,at),Dt.length>0&&Hr(Dt,X,at),Ft.length>0&&Hr(Ft,X,at),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Gr(T,X,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[st.id]===void 0){let kt=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[st.id]=new en(1,1,{generateMipmaps:!0,type:kt?Rn:nn,minFilter:Ti,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let Dt=A.state.transmissionRenderTarget[st.id],Ft=st.viewport||ht;Dt.setSize(Ft.z*F.transmissionResolutionScale,Ft.w*F.transmissionResolutionScale);let Lt=F.getRenderTarget(),zt=F.getActiveCubeFace(),Vt=F.getActiveMipmapLevel();F.setRenderTarget(Dt),F.getClearColor(jt),Wt=F.getClearAlpha(),Wt<1&&F.setClearColor(16777215,.5),F.clear(),Pt&&xt.render(at);let Qt=F.toneMapping;F.toneMapping=wn;let ie=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),A.setupLightsView(st),_t===!0&&Q.setGlobalState(F.clippingPlanes,st),Hr(T,at,st),lt.updateMultisampleRenderTarget(Dt),lt.updateRenderTargetMipmap(Dt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ce=0,Te=X.length;ce<Te;ce++){let ye=X[ce],{object:me,geometry:ze,material:Ut,group:qe}=ye;if(Ut.side===kn&&me.layers.test(st.layers)){let le=Ut.side;Ut.side=Ke,Ut.needsUpdate=!0,Yc(me,at,st,ze,Ut,qe),Ut.side=le,Ut.needsUpdate=!0,kt=!0}}kt===!0&&(lt.updateMultisampleRenderTarget(Dt),lt.updateRenderTargetMipmap(Dt))}F.setRenderTarget(Lt,zt,Vt),F.setClearColor(jt,Wt),ie!==void 0&&(st.viewport=ie),F.toneMapping=Qt}function Hr(T,X,at){let st=X.isScene===!0?X.overrideMaterial:null;for(let rt=0,Dt=T.length;rt<Dt;rt++){let Ft=T[rt],{object:Lt,geometry:zt,group:Vt}=Ft,Qt=Ft.material;Qt.allowOverride===!0&&st!==null&&(Qt=st),Lt.layers.test(at.layers)&&Yc(Lt,X,at,zt,Qt,Vt)}}function Yc(T,X,at,st,rt,Dt){W!==null&&rt.isNodeMaterial&&W.setObject(T,rt),T.onBeforeRender(F,X,at,st,rt,Dt),T.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),rt.onBeforeRender(F,X,at,st,T,Dt),rt.transparent===!0&&rt.side===kn&&rt.forceSinglePass===!1?(rt.side=Ke,rt.needsUpdate=!0,F.renderBufferDirect(at,X,st,rt,T,Dt),rt.side=Ei,rt.needsUpdate=!0,F.renderBufferDirect(at,X,st,rt,T,Dt),rt.side=kn):F.renderBufferDirect(at,X,st,rt,T,Dt),T.onAfterRender(F,X,at,st,rt,Dt)}function Wr(T,X,at){X.isScene!==!0&&(X=Et);let st=et.get(T),rt=A.state.lights,Dt=A.state.shadowsArray,Ft=rt.state.version,Lt=I.getParameters(T,rt.state,Dt,X,at,A.state.lightProbeGridArray),zt=I.getProgramCacheKey(Lt),Vt=st.programs;st.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,st.fog=X.fog;let Qt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;st.envMap=U.get(T.envMap||st.environment,Qt),st.envMapRotation=st.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",pe),Vt=new Map,st.programs=Vt);let ie=Vt.get(zt);if(ie!==void 0){if(st.currentProgram===ie&&st.lightsStateVersion===Ft)return Jc(T,Lt),ie}else Lt.uniforms=I.getUniforms(T),W!==null&&T.isNodeMaterial&&W.build(T,at,Lt),T.onBeforeCompile(Lt,F),ie=I.acquireProgram(Lt,zt),Vt.set(zt,ie),st.uniforms=Lt.uniforms;let kt=st.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=Q.uniform),Jc(T,Lt),st.needsLights=Hf(T),st.lightsStateVersion=Ft,st.needsLights&&(kt.ambientLightColor.value=rt.state.ambient,kt.lightProbe.value=rt.state.probe,kt.sunLights.value=rt.state.sun,kt.sunLightShadows.value=rt.state.sunShadow,kt.directionalLights.value=rt.state.directional,kt.directionalLightShadows.value=rt.state.directionalShadow,kt.spotLights.value=rt.state.spot,kt.spotLightShadows.value=rt.state.spotShadow,kt.rectAreaLights.value=rt.state.rectArea,kt.ltc_1.value=rt.state.rectAreaLTC1,kt.ltc_2.value=rt.state.rectAreaLTC2,kt.pointLights.value=rt.state.point,kt.pointLightShadows.value=rt.state.pointShadow,kt.hemisphereLights.value=rt.state.hemi,kt.sunShadowMatrix.value=rt.state.sunShadowMatrix,kt.sunShadowCascade.value=rt.state.sunShadowCascade,kt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,kt.spotLightMatrix.value=rt.state.spotLightMatrix,kt.spotLightMap.value=rt.state.spotLightMap,kt.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.lightProbeGrid=A.state.lightProbeGridArray.length>0,st.currentProgram=ie,st.uniformsList=null,ie}function Zc(T){if(T.uniformsList===null){let X=T.currentProgram.getUniforms();T.uniformsList=Ds.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Jc(T,X){let at=et.get(T);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function kf(T,X){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(X.matrixWorld);for(let at=0,st=T.length;at<st;at++){let rt=T[at];if(rt.texture!==null&&rt.boundingBox.containsPoint(S))return rt}return null}function Vf(T,X,at,st,rt){X.isScene!==!0&&(X=Et),lt.resetTextureUnits();let Dt=X.fog,Ft=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?X.environment:null,Lt=ot===null?F.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:re.workingColorSpace,zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Vt=U.get(st.envMap||Ft,zt),Qt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ie=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),kt=!!at.morphAttributes.position,ce=!!at.morphAttributes.normal,Te=!!at.morphAttributes.color,ye=wn;st.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ye=F.toneMapping);let me=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ze=me!==void 0?me.length:0,Ut=et.get(st),qe=A.state.lights;if(_t===!0&&(vt===!0||T!==tt)){let ge=T===tt&&st.id===it;Q.setState(st,T,ge)}let le=!1;st.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==qe.state.version||Ut.outputColorSpace!==Lt||rt.isBatchedMesh&&Ut.batching===!1||!rt.isBatchedMesh&&Ut.batching===!0||rt.isBatchedMesh&&Ut.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Ut.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Ut.instancing===!1||!rt.isInstancedMesh&&Ut.instancing===!0||rt.isSkinnedMesh&&Ut.skinning===!1||!rt.isSkinnedMesh&&Ut.skinning===!0||rt.isInstancedMesh&&Ut.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Ut.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Ut.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Ut.instancingMorph===!1&&rt.morphTexture!==null||Ut.envMap!==Vt||st.fog===!0&&Ut.fog!==Dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Q.numPlanes||Ut.numIntersection!==Q.numIntersection)||Ut.vertexAlphas!==Qt||Ut.vertexTangents!==ie||Ut.morphTargets!==kt||Ut.morphNormals!==ce||Ut.morphColors!==Te||Ut.toneMapping!==ye||Ut.morphTargetsCount!==ze||!!Ut.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Ut.__version=st.version);let pn=Ut.currentProgram;le===!0&&(pn=Wr(st,X,rt),W&&st.isNodeMaterial&&W.onUpdateProgram(st,pn,Ut));let Ln=!1,li=!1,$i=!1,de=pn.getUniforms(),we=Ut.uniforms;if(b.useProgram(pn.program)&&(Ln=!0,li=!0,$i=!0),st.id!==it&&(it=st.id,li=!0),Ut.needsLights){let ge=kf(A.state.lightProbeGridArray,rt);Ut.lightProbeGrid!==ge&&(Ut.lightProbeGrid=ge,li=!0)}if(Ln||tt!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),de.setValue(k,"projectionMatrix",T.projectionMatrix),de.setValue(k,"viewMatrix",T.matrixWorldInverse);let hi=de.map.cameraPosition;hi!==void 0&&hi.setValue(k,Mt.setFromMatrixPosition(T.matrixWorld)),N.logarithmicDepthBuffer&&de.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&de.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,li=!0,$i=!0)}if(Ut.needsLights&&(qe.state.sunShadowMap.length>0&&de.setValue(k,"sunShadowMap",qe.state.sunShadowMap,lt),qe.state.directionalShadowMap.length>0&&de.setValue(k,"directionalShadowMap",qe.state.directionalShadowMap,lt),qe.state.spotShadowMap.length>0&&de.setValue(k,"spotShadowMap",qe.state.spotShadowMap,lt),qe.state.pointShadowMap.length>0&&de.setValue(k,"pointShadowMap",qe.state.pointShadowMap,lt)),rt.isSkinnedMesh){de.setOptional(k,rt,"bindMatrix"),de.setOptional(k,rt,"bindMatrixInverse");let ge=rt.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(k,"boneTexture",ge.boneTexture,lt))}rt.isBatchedMesh&&(de.setOptional(k,rt,"batchingTexture"),de.setValue(k,"batchingTexture",rt._matricesTexture,lt),de.setOptional(k,rt,"batchingIdTexture"),de.setValue(k,"batchingIdTexture",rt._indirectTexture,lt),de.setOptional(k,rt,"batchingColorTexture"),rt._colorsTexture!==null&&de.setValue(k,"batchingColorTexture",rt._colorsTexture,lt));let ci=at.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&R.update(rt,at,pn),(li||Ut.receiveShadow!==rt.receiveShadow)&&(Ut.receiveShadow=rt.receiveShadow,de.setValue(k,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&X.environment!==null&&(we.envMapIntensity.value=X.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=g_()),li){if(de.setValue(k,"toneMappingExposure",F.toneMappingExposure),Ut.needsLights&&Gf(we,$i),Dt&&st.fog===!0&&P.refreshFogUniforms(we,Dt),P.refreshMaterialUniforms(we,st,gt,ut,A.state.transmissionRenderTarget[T.id]),Ut.needsLights&&Ut.lightProbeGrid){let ge=Ut.lightProbeGrid;we.probesSH.value=ge.texture,we.probesMin.value.copy(ge.boundingBox.min),we.probesMax.value.copy(ge.boundingBox.max),we.probesResolution.value.copy(ge.resolution)}Ds.upload(k,Zc(Ut),we,lt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Ds.upload(k,Zc(Ut),we,lt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&de.setValue(k,"center",rt.center),de.setValue(k,"modelViewMatrix",rt.modelViewMatrix),de.setValue(k,"normalMatrix",rt.normalMatrix),de.setValue(k,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){let ge=st.uniformsGroups;for(let hi=0,Ki=ge.length;hi<Ki;hi++){let Kc=ge[hi];ct.update(Kc,pn),ct.bind(Kc,pn)}}return pn}function Gf(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.sunLights.needsUpdate=X,T.sunLightShadows.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Hf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(T,X,at){let st=et.get(T);st.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),et.get(T.texture).__webglTexture=X,et.get(T.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){let at=et.get(T);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,at=0){ot=T,nt=X,K=at;let st=null,rt=!1,Dt=!1;if(T){let Lt=et.get(T);if(Lt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(k.FRAMEBUFFER,Lt.__webglFramebuffer),ht.copy(T.viewport),It.copy(T.scissor),At=T.scissorTest,b.viewport(ht),b.scissor(It),b.setScissorTest(At),it=-1;return}else if(Lt.__webglFramebuffer===void 0)lt.setupRenderTarget(T);else if(Lt.__hasExternalTextures)lt.rebindTextures(T,et.get(T.texture).__webglTexture,et.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Qt=T.depthTexture;if(Lt.__boundDepthTexture!==Qt){if(Qt!==null&&et.has(Qt)&&(T.width!==Qt.image.width||T.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(T)}}let zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Dt=!0);let Vt=et.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[X])?st=Vt[X][at]:st=Vt[X],rt=!0):T.samples>0&&lt.useMultisampledRTT(T)===!1?st=et.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?st=Vt[at]:st=Vt,ht.copy(T.viewport),It.copy(T.scissor),At=T.scissorTest}else ht.copy(Nt).multiplyScalar(gt).floor(),It.copy(Ot).multiplyScalar(gt).floor(),At=ae;if(at!==0&&(st=q),b.bindFramebuffer(k.FRAMEBUFFER,st)&&b.drawBuffers(T,st),b.viewport(ht),b.scissor(It),b.setScissorTest(At),rt){let Lt=et.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,at)}else if(Dt){let Lt=X;for(let zt=0;zt<T.textures.length;zt++){let Vt=et.get(T.textures[zt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+zt,Vt.__webglTexture,at,Lt)}}else if(T!==null&&at!==0){let Lt=et.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Lt.__webglTexture,at)}it=-1};function $c(T){let X=et.get(T);return(X.__readFormat!==T.format||X.__readType!==T.type)&&(X.__readFormat=T.format,X.__readType=T.type,X.__formatReadable=N.textureFormatReadable(T.format),X.__typeReadable=N.textureTypeReadable(T.type)),X}this.readRenderTargetPixels=function(T,X,at,st,rt,Dt,Ft,Lt=0){if(!(T&&T.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt){b.bindFramebuffer(k.FRAMEBUFFER,zt);try{let Vt=T.textures[Lt],Qt=Vt.format,ie=Vt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Lt);let kt=$c(Vt);if(kt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-st&&at>=0&&at<=T.height-rt&&k.readPixels(X,at,st,rt,pt.convert(Qt),pt.convert(ie),Dt)}finally{let Vt=ot!==null?et.get(ot).__webglFramebuffer:null;b.bindFramebuffer(k.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,X,at,st,rt,Dt,Ft,Lt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=et.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(zt=zt[Ft]),zt)if(X>=0&&X<=T.width-st&&at>=0&&at<=T.height-rt){b.bindFramebuffer(k.FRAMEBUFFER,zt);let Vt=T.textures[Lt],Qt=Vt.format,ie=Vt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Lt);let kt=$c(Vt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.bufferData(k.PIXEL_PACK_BUFFER,Dt.byteLength,k.STREAM_READ),k.readPixels(X,at,st,rt,pt.convert(Qt),pt.convert(ie),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Te=ot!==null?et.get(ot).__webglFramebuffer:null;b.bindFramebuffer(k.FRAMEBUFFER,Te);let ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await xu(k,ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Dt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ce),k.deleteSync(ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,at=0){let st=Math.pow(2,-at),rt=Math.floor(T.image.width*st),Dt=Math.floor(T.image.height*st),Ft=X!==null?X.x:0,Lt=X!==null?X.y:0;lt.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,at,0,0,Ft,Lt,rt,Dt),b.unbindTexture()},this.copyTextureToTexture=function(T,X,at=null,st=null,rt=0,Dt=0){let Ft,Lt,zt,Vt,Qt,ie,kt,ce,Te,ye=T.isCompressedTexture?T.mipmaps[Dt]:T.image;if(at!==null)Ft=at.max.x-at.min.x,Lt=at.max.y-at.min.y,zt=at.isBox3?at.max.z-at.min.z:1,Vt=at.min.x,Qt=at.min.y,ie=at.isBox3?at.min.z:0;else{let we=Math.pow(2,-rt);Ft=Math.floor(ye.width*we),Lt=Math.floor(ye.height*we),T.isDataArrayTexture?zt=ye.depth:T.isData3DTexture?zt=Math.floor(ye.depth*we):zt=1,Vt=0,Qt=0,ie=0}st!==null?(kt=st.x,ce=st.y,Te=st.z):(kt=0,ce=0,Te=0);let me=pt.convert(X.format),ze=pt.convert(X.type),Ut;X.isData3DTexture?(lt.setTexture3D(X,0),Ut=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(lt.setTexture2DArray(X,0),Ut=k.TEXTURE_2D_ARRAY):(lt.setTexture2D(X,0),Ut=k.TEXTURE_2D),b.activeTexture(k.TEXTURE0),b.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),b.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),b.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let qe=b.getParameter(k.UNPACK_ROW_LENGTH),le=b.getParameter(k.UNPACK_IMAGE_HEIGHT),pn=b.getParameter(k.UNPACK_SKIP_PIXELS),Ln=b.getParameter(k.UNPACK_SKIP_ROWS),li=b.getParameter(k.UNPACK_SKIP_IMAGES);b.pixelStorei(k.UNPACK_ROW_LENGTH,ye.width),b.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye.height),b.pixelStorei(k.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(k.UNPACK_SKIP_ROWS,Qt),b.pixelStorei(k.UNPACK_SKIP_IMAGES,ie);let $i=T.isDataArrayTexture||T.isData3DTexture,de=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){let we=et.get(T),ci=et.get(X),ge=et.get(we.__renderTarget),hi=et.get(ci.__renderTarget);b.bindFramebuffer(k.READ_FRAMEBUFFER,ge.__webglFramebuffer),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ki=0;Ki<zt;Ki++)$i&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.get(T).__webglTexture,rt,ie+Ki),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,et.get(X).__webglTexture,Dt,Te+Ki)),k.blitFramebuffer(Vt,Qt,Ft,Lt,kt,ce,Ft,Lt,k.DEPTH_BUFFER_BIT,k.NEAREST);b.bindFramebuffer(k.READ_FRAMEBUFFER,null),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(rt!==0||T.isRenderTargetTexture||et.has(T)){let we=et.get(T),ci=et.get(X);b.bindFramebuffer(k.READ_FRAMEBUFFER,O),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,$);for(let ge=0;ge<zt;ge++)$i?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,rt,ie+ge):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,rt),de?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ci.__webglTexture,Dt,Te+ge):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ci.__webglTexture,Dt),rt!==0?k.blitFramebuffer(Vt,Qt,Ft,Lt,kt,ce,Ft,Lt,k.COLOR_BUFFER_BIT,k.NEAREST):de?k.copyTexSubImage3D(Ut,Dt,kt,ce,Te+ge,Vt,Qt,Ft,Lt):k.copyTexSubImage2D(Ut,Dt,kt,ce,Vt,Qt,Ft,Lt);b.bindFramebuffer(k.READ_FRAMEBUFFER,null),b.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else de?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ut,Dt,kt,ce,Te,Ft,Lt,zt,me,ze,ye.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,Dt,kt,ce,Te,Ft,Lt,zt,me,ye.data):k.texSubImage3D(Ut,Dt,kt,ce,Te,Ft,Lt,zt,me,ze,ye):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Dt,kt,ce,Ft,Lt,me,ze,ye.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Dt,kt,ce,ye.width,ye.height,me,ye.data):k.texSubImage2D(k.TEXTURE_2D,Dt,kt,ce,Ft,Lt,me,ze,ye);b.pixelStorei(k.UNPACK_ROW_LENGTH,qe),b.pixelStorei(k.UNPACK_IMAGE_HEIGHT,le),b.pixelStorei(k.UNPACK_SKIP_PIXELS,pn),b.pixelStorei(k.UNPACK_SKIP_ROWS,Ln),b.pixelStorei(k.UNPACK_SKIP_IMAGES,li),Dt===0&&X.generateMipmaps&&k.generateMipmap(Ut),b.unbindTexture()},this.initRenderTarget=function(T){et.get(T).__webglFramebuffer===void 0&&lt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?lt.setTextureCube(T,0):T.isData3DTexture?lt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?lt.setTexture2DArray(T,0):lt.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){nt=0,K=0,ot=null,b.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function Fs(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=ef(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][u]);let g=ef(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function ef(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new De(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){let _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Br=new G;function _n(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Br.copy(t),Br[n]=0,Br.normalize();let c=.5*o/(o+a),h=1-Br.angleTo(i)/l;return Math.sign(Br[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Qa=class i extends Ge{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new G,c=new G,h=new G(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,_=new G,p=.5/o;for(let m=0,E=0;m<f.length;m+=3,E+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),d[E+0]=_n(_,c,"z","y",r,n),d[E+1]=1-_n(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[E+0]=1-_n(_,c,"z","y",r,n),d[E+1]=1-_n(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[E+0]=1-_n(_,c,"x","z",r,t),d[E+1]=_n(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[E+0]=1-_n(_,c,"x","z",r,t),d[E+1]=1-_n(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[E+0]=1-_n(_,c,"x","y",r,t),d[E+1]=1-_n(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[E+0]=_n(_,c,"x","y",r,t),d[E+1]=1-_n(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Y=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),x_=Object.freeze({sage:Y.sage,mint:Y.aqua,sky:Y.blue,peach:Y.peach,coral:"#cf8979",lavender:Y.lilac,butter:Y.honey,cream:Y.linen,white:Y.cream,oak:Y.oakLight,walnut:Y.walnut,charcoal:"#505b68",brass:Y.brass,terracotta:"#b97d63",forest:Y.moss,blush:Y.blush,teddy:"#aa8063",slate:"#9b9b9d"}),__=new Set([Y.oak,Y.oakLight,Y.walnut]),y_=new Set([Y.sage,Y.moss,Y.linen,Y.lilac,Y.lilacLight,Y.blush,Y.peach,Y.oatmeal,Y.upholsteryShadow,Y.denim]);function v_(i,t){let e=__.has(i)?1:y_.has(i)?2:0,n=i===Y.glass||i===Y.darkGlass||i===Y.blueWater,s=i===Y.brass,r=i===Y.steel||i===Y.basinSteel,o=new ei({color:i,roughness:s||r?.37:n?.33:i===Y.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Dc=class{constructor(t,e){this.root=new be,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,v_(e,this.grainDirection));let a=new xe(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,l=0,c=0){s=Math.max(.1,s),o=Math.max(.1,o);let h=Math.min(l,s*.42,r*.42,o*.42),f=h>.2?new Qa(s,r,o,2,h):new Ge(s,r,o);return this.part(f,a,t,e+r/2,n,c)}disc(t,e,n,s,r,o,a,l=1){let c=new Fi(1,l,r,20);return c.scale(s,1,o),this.part(c,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let l=new En(1,12,8);return l.scale(s,r,o),this.part(l,a,t,e,n)}ring(t,e,n,s,r,o,a){let l=new zi(1,o/Math.min(s,r),6,24);return l.rotateX(-Math.PI/2),l.scale(s,1.5,r),this.part(l,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([c,h])=>new St(c,h)),l=new gr(a,24);return l.scale(s,r,o),this.part(l,Y.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Fs(s);s.length>1&&s.forEach(a=>a.dispose());let o=new xe(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function si(i,t,e,n,s,r,o=Y.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let l of[-.36,.36])for(let c of[-.36,.36])i.disc(t+n*l,0,e+s*c,a,r,a,o,.68)}function zr(i,t,e,n,s,r,o,a){let l=o===Y.linen?Y.binding:Y.blush;i.box(t,e,n,s,8,r,l,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function b_(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",l=a?1:-1,c=a?Y.upholsteryShadow:Y.moss,h=a?Y.oatmeal:Y.sage,f=o?t*.5:t,u=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,_=Math.min(t,e)*.1;if(si(i,d,g,f,u,5),i.box(d,5,g,f*.97,22,u*.98,c,8),r){let w=o?t*.52:t*.34,A=o?e*.38:e*.46,D=o?t*.22:-t*.32,v=o?l*e*.3:e*.25;si(i,D,v,w,A,5),i.box(D,5,v,w,22,A,c,8),i.box(D,25,v,w*.96,12,A*.9,n,5),o&&i.box(D,29,l*e*.464,w,26,_,h,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let w=e*.88/p;for(let A=0;A<p;A++){let D=-e*.44+w*(A+.5);i.box(d+_*.18,25,D,f*.76,12,w-3,n,5),i.box(d-f*.39,27,D,f*.22,31,w-1,h,8)}i.box(d,29,-l*e*.445,f*.88,20,_,h,6),zr(i,d+f*.13,35,-e*.31,f*.42,w*.49,a?Y.sage:Y.peach,-.18),zr(i,d+f*.12,35,e*.28,f*.4,w*.45,Y.linen,.2)}else{let w=t*.8/p;for(let A=0;A<p;A++){let D=-t*.4+w*(A+.5);i.box(D,25,g+u*.08,w-3,12,u*.7,n,6),i.box(D,27,g-u*.39,w-1,31,u*.24,h,7)}for(let A of[-t*.442,t*.442])i.box(A,26,g,_,22,u*.89,h,6);zr(i,-t*.27,35,g-u*.15,t*.18,u*.34,Y.peach,-.18),zr(i,t*.27,35,g-u*.12,t*.17,u*.33,Y.linen,.2)}let m=o?f*.67:f*.19,E=o?e*.14:u*.58,C=o?d+f*.06:f*.32,S=o?e*.13:g+u*.1;i.box(C,37.1,S,m,1.7,E,Y.lilacLight,.65);for(let w of[-1,1])i.box(C,38.82,S+w*E*.36,m*.9,.25,1.2,Y.lilac);return 58}function Cn(i,t,e,n,s,r,o,a=!1){let l=a?19:28;si(i,t,e,n,s,l,Y.walnut),i.box(t,l,e,n*.9,7,s*.92,Y.walnut,2),i.box(t,l+5,e,n*.83,8,s*.83,o,3);let c=Math.abs(r)===Math.PI/2,h=t-Math.sin(r)*(c?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(h,l+9,f,c?s*.2:n*.84,22,c?s*.82:s*.22,o,4)}function S_(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return Cn(i,0,-e*.39,t*.2,e*.23,0,Y.denim),Cn(i,0,e*.39,t*.2,e*.23,Math.PI,Y.denim),Cn(i,-t*.415,0,t*.17,e*.27,Math.PI/2,Y.denim),Cn(i,t*.415,0,t*.17,e*.27,-Math.PI/2,Y.denim),si(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,Y.walnut,3),i.box(0,37,0,t*.79,8,e*.57,Y.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,Y.linen,.6),46.4;if(r)Cn(i,0,-e*.37,t*.2,e*.2,0,Y.sage),Cn(i,0,e*.37,t*.2,e*.2,Math.PI,Y.blush),Cn(i,-t*.38,0,t*.2,e*.2,Math.PI/2,Y.lilac),Cn(i,t*.38,0,t*.2,e*.2,-Math.PI/2,Y.honey),i.disc(0,0,0,t*.13,5,e*.13,Y.walnut),i.disc(0,4,0,t*.045,31,e*.045,Y.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let l=a?[-.28,.28]:[-.32,0,.32],c=[Y.sage,Y.blush,Y.lilac,Y.honey];for(let h=0;h<l.length;h++)for(let f of[-1,1])Cn(i,t*l[h],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,c[(h+(f<0?0:2))%c.length]);si(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,Y.linen,.5)}return 42}function M_(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,Y.ink,.5),i.box(t,e+1,n,s*.1,14,4,Y.ink,1),i.box(t,e+12,n,s,25,6,Y.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,Y.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,Y.blue,.2)}function E_(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let l of[-1,1]){let c=l*(t-a)/2,h=s?e-r:e*.58,f=s?r/2:0;s&&i.box(c,37,f+.8,a,7,h-1.6,n,2.4),i.box(c,4,f,a*.81,34,h*.81,Y.walnut,2.8);for(let u=0;u<3;u++){let d=6+u*9.7;i.box(c,d,f+h*.41,a*.74,8.4,2,Y.oak,.7),i.box(c,d+3,f+h*.43,a*.26,2,2,Y.brass,.5)}}return M_(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,Y.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,Y.peach),81}function nf(i,t,e,n,s,r){let o=new hn;for(let l=0;l<10;l++){let c=l*Math.PI/5-Math.PI/2,h=l%2?s*.46:s,f=[Math.cos(c)*h,Math.sin(c)*h];l===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new yi(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function w_(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");si(i,0,0,t,e,6,Y.walnut);let l=r?[6,55]:[6];for(let h of l){i.box(0,h,0,t*.97,15,e*.98,Y.walnut,5),i.box(0,h+12,0,t*.9,11,e*.92,Y.linen,4),i.box(0,h+21.6,e*.15,t*.89,5,e*.62,Y.lilac,2.5),i.box(0,h+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,h+28,-e*.11,t*.88,3,e*.071,Y.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)zr(i,d,h+22,-e*.275,t*(f.length===2?.34:.49),e*.2,Y.linen,d<0?-.04:.04);let u=Math.min(t,e)*.045;for(let[d,g,_,p]of[[-.24,.12,1,Y.cream],[.23,.27,.79,Y.honey],[.08,.04,.57,Y.cream],[-.1,.34,.62,Y.honey]])nf(i,t*d,h+30.8,e*g,u*_,p);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,h+30.71,e*.24,.85,.24,e*.33,Y.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,h+30.72,e*d,t*.71,.24,.9,Y.lilacLight,0)}let c=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,c-4,e*.083,Y.walnut,6),i.box(0,18,-e*.417,t*.89,c-23,e*.055,n,4),o||r||a)for(let h of[-1,1]){for(let f of[-1,1])i.box(t*.45*h,4,e*.46*f,5,c,6,Y.walnut,2);if(i.box(t*.45*h,c-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*h,c-29,e*f*.105,3,20,3,n,.8)}return c}function T_(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;si(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,Y.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,Y.oak,.6);let l=r?2:3,c=t>=95?2:1;for(let h=0;h<l;h++)for(let f=0;f<c;f++){let u=t*.89/c,d=(a-8)/l,g=u*(f-(c-1)/2),_=5+h*d;i.box(g,_,e*.46,u-2,d-1.5,2.9,n,1),i.oval(g,_+d*.45,e*.51,2.2,1.7,2.2,Y.brass)}return a+2}function A_(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,Y.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,Y.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,Y.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?Y.lilac:Y.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,Y.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?Y.lilacLight:Y.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,Y.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,Y.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,Y.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])nf(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,Y.cream);return 5}function R_(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,l=o+r/2,c=(t-s)/2;for(let u of[-1,1])i.box(u*(t+s)/4,n-5,0,c,5,e,Y.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,Y.linen),i.box(0,n-5,(l+e/2)/2,s,5,e/2-l,Y.linen);let h=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,Y.basinSteel);for(let u of[-1,1])i.box(u*s/2,n-4.5,o,h,5.25,r+h,Y.steel,.4),i.box(0,n-4.5,o+u*r/2,s,5.25,h,Y.steel,.4),i.disc(0,n-4.1,o+u*r/4,h,.6,h,Y.darkGlass);i.box(0,n-4.5,o,s,4.85,h,Y.steel,.4);let f=-s/2-h*1.15;i.disc(f,n,o,h*.8,h*2.9,h*.8,Y.steel),i.box(f+h,n+h*2.5,o,h*2.8,h*.7,h,Y.steel,.6)}function C_(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?Y.sage:Y.walnut,2.3),s?R_(i,t,e,r+2):i.box(0,r-3,0,t,5,e,Y.linen,1.8);let l=e>t;for(let c of[-1,1])for(let h=-1;h<=1;h++){let f=l?2.2:t*.29,u=l?e*.29:2.2,d=l?t*.46*c:t*.3*h,g=l?e*.3*h:e*.47*c;i.box(d,6,g,f,r*.67,u,a?Y.moss:Y.oak,.8),i.box(d,r*.63,g,l?3.2:t*.08,2.6,l?e*.05:3.2,Y.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,Y.darkGlass,.8);for(let c of[-.2,.2])for(let h of[-.19,.19]){let f=Math.min(t,e)*(c<0?.12:.092);i.ring(t*c,r+4.8,e*h,f,f,1,Y.glass)}}if(a)for(let c of[-t*.24,t*.24])i.basin(c,r+1.9,0,t*.16,5.5,e*.36),i.oval(c,r+3.48,0,2.1,.52,2.1,Y.brass),i.disc(c,r+2,-e*.32,2.6,8,2.6,Y.brass),i.box(c,r+8.4,-e*.22,4,3,e*.2,Y.brass,1);return r+3}function I_(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,Y.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,Y.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,Y.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,Y.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,Y.glass),i.disc(0,22,-e*.44,3.5,9,3.5,Y.brass),i.box(0,30,-e*.4,5,3.7,e*.1,Y.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,Y.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,Y.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,Y.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,Y.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,Y.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,Y.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,Y.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,Y.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,Y.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,Y.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,Y.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,Y.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,Y.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,Y.blush,1.7),36)}function P_(i,t,e,n,s){let r=n?Y.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),l=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,l,-e*.13,t*.3,o*.23,e*.27,r);for(let c of[-1,1])i.oval(t*.27*c,l+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*c,l+o*.04,e*.105,o*.026,o*.034,o*.022,Y.ink),i.oval(t*.26*c,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*c,l-o*.06,e*.094,o*.043,o*.023,o*.023,Y.blush);return i.oval(0,l-o*.044,e*.12,o*.033,o*.022,o*.023,Y.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,Y.linen,3.8),l+o*(n?.37:.28)}function L_(i,t,e){let s=[Y.sage,Y.peach,Y.honey,Y.lilac,Y.blue,Y.blush];si(i,0,0,t*.96,e*.96,22,Y.sage),i.box(0,20,0,t*.94,7,e*.93,Y.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function N_(i,t,e,n){let s=[Y.linen,n,Y.sand,Y.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),l=e*((r+.5)/4-.5);i.box(a,1.1,l,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function D_(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,Y.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,Y.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,l=Math.cos(a)*s*.21,c=Math.sin(a)*s*.21,h=s*(n?.55:.44)+o%2*s*.08,f=i.oval(l*.5,h*.69,c*.5,s*.035,h*.32,s*.035,Y.moss);f.rotation.z=-l/h,f.rotation.x=c/h;let u=n?Y.sage:[Y.blush,Y.linen,Y.honey][o%3];i.oval(l,h,c,s*.13,s*(n?.18:.085),s*.11,u)}return s*(n?.82:.65)}function sf(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;let s=x_[t.split("-").at(-1)],r=new Dc(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=b_(r,e,n,s||(t==="sofa"?Y.linen:Y.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,Y.walnut,3.5),r.box(0,24,0,e,4,n,Y.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,Y.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,Y.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,Y.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,Y.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,Y.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=S_(r,e,n,s||Y.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=E_(r,e,n,s||Y.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))Cn(r,0,0,e,n,0,s||Y.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){Cn(r,0,0,e,n,0,s||Y.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,Y.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=w_(r,e,n,s||Y.lilac,t);else if(t==="rug")o=A_(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=C_(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=I_(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=D_(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,Y.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,Y.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,Y.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=T_(r,e,n,s||Y.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;si(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||Y.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,Y.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=P_(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=N_(r,e,n,s||Y.sage);else if(t.startsWith("baby-activities-"))o=L_(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||Y.peach),r.ring(0,a,0,a*.95,a*.95,1.2,Y.linen),o=a*2}else return null;return r.finish(o)}var Bt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},kr=Math.PI,Uc=2*kr,U_=new Set(["unknown","unavailable"]),Pn=(i,t,e)=>Math.max(t,Math.min(e,i)),Fc=(i,t)=>Number.isFinite(i)?Pn(i,12,480):t,ee=(i,t={})=>new ei({color:i,roughness:.83,...t}),Oc=i=>String(i?.state??"unknown"),Yi=i=>!U_.has(Oc(i)),Bs=i=>Yi(i)&&(i.active===!0||i.state==="on"),F_=i=>Bs(i)?Number.isFinite(i.attributes?.brightness)?Pn(i.attributes.brightness/255,0,1):1:0;function ri(i,t,e,n=0,s=0,r=0){let o=new xe(t,e);return o.position.set(n,s,r),i.add(o),o}function Oe(i,t,e,n,s,r=0,o=0,a=0){return ri(i,new Ge(t,e,n),s,r,o,a)}function We(i,t,e,n,s,r=0,o=0,a=0,l=3){let c=Math.min(l,t/3,e/3,n/3),h=c-t/2,f=c-e/2,u=new hn;u.moveTo(h,f),u.lineTo(-h,f),u.lineTo(-h,-f),u.lineTo(h,-f),u.closePath();let d=new Qn(u,{depth:n-2*c,bevelThickness:c,bevelSize:c,bevelSegments:2});return d.translate(0,0,c-n/2),ri(i,d,s,r,o,a)}function Pe(i,t,e,n,s,r=0,o=0,a=0,l=16){return ri(i,new Fi(t,e,n,l),s,r,o,a)}function In(i,t,e,n,s,r){return ri(i,new En(t,10,7),e,n,s,r)}function Os(i,t=0,e=0,n=0){let s=new be;return s.position.set(t,e,n),i.add(s),s}function O_(i,t){let e=new $e({transparent:!0,depthWrite:!1,blending:Mr,uniforms:{strength:{value:0},tint:{value:new Jt(Bt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=ri(i,new ti(2*t,2*t),e,0,2.8,0);return n.rotation.x=-kr/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function B_(i,t,e){let n=new be,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",l=s==="floorLamp"||r==="cloud_floor_lamp",c=s==="wallSconce"||r==="acorn_sconce",h=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),u=ee(Bt.honey),d=ee(Bt.ink),g=ee(Bt.brass,{roughness:.36,metalness:.42}),_=ee(Bt.cream,{emissive:Bt.warm,emissiveIntensity:0}),p=new Jt(Bt.warm),m=h?46:o?50:a?56:c?40:l?56:36,E=O_(n,Pn(f*(a?1.72:1.35),38,110));if(a){let C=f*(h?.19:.29);Pe(n,C,C*1.02,3,d,0,m+2),o&&Pe(n,1.7,1.7,13,u,0,m+9),Pe(n,C*.82,C,5,u,0,m-1.5),Pe(n,C*.92,C*.96,1.15,g,0,m+1.1);let S=In(n,C*.83,_,0,m,0);S.scale.y=o?.88:.52}else if(c)We(n,f*.34,18,4,d,0,35,-4),Pe(n,f*.12,f*.11,14,u,0,37,3),In(n,f*.21,_,0,m+3,3);else{let C=m-7,S=l?3:16,w=f*(l?.25:.3);if(Pe(n,w*.57,w*.67,4,d,0,S),Pe(n,2,2.9,C-S,u,0,(S+C)/2),l)In(n,w*.81,_,0,m,0);else{let A=r==="bud_lamp"?12:9;Pe(n,w*.56,w,14,_,0,m,0,A),Pe(n,w,w*.99,1.2,g,0,m-6.7,0,A),Pe(n,w*.55,w*.58,1.1,g,0,m+7.1,0,A)}}return{root:n,anchorY:m+2,animate(C){let S=F_(C),w=C?.attributes?.rgb_color;if(Array.isArray(w)&&w.length===3&&w.every(Number.isFinite)){let[A,D,v]=w.map(L=>Pn(L/255,0,1));p.setRGB(A,D,v,Re)}else p.setHex(Bt.warm);E(S,p),_.emissiveIntensity=S*.88,_.emissive.copy(p),S>0?_.color.copy(p):_.color.setHex(Bt.cream)}}}function z_(i){let t=new hn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Qn(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-kr/2)}function rf(i,t,e,n){let s=new be,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Os(s,0,o,0);n&&(a.rotation.x=kr/2);let l=Os(a,0,-1,0),c=ee(Bt.cream),h=ee(Bt.ink),f=/(?:white|cream)$/.test(i.type)?Bt.oat:/(?:forest|sage)$/.test(i.type)?Bt.sage:Bt.honey,u=ee(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Pe(a,r*.18,r*.2,6,h),Pe(a,r*.174,r*.176,1.4,ee(Bt.brass,{roughness:.36,metalness:.42}),0,3.4),Pe(a,r*.15,r*.17,2.6,c,0,4.9);let g=z_(r);for(let _=0;_<d;_++){let p=Os(l);p.rotation.y=_/d*Uc,ri(p,g,u)}if(n){We(s,r*1.66,6,r*1.02,h,0,3),Oe(s,r*.3,11,6,c,0,10);let _=ri(s,new zi(r,2.6,6,24),c,0,o,3);_.rotation.z=.04;for(let p=-1;p<=1;p++){let m=p*r*.5;Pe(s,.68,.68,2*Math.sqrt(r*r-m*m),h,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(_,p=0){let m=Number.isFinite(_?.attributes?.percentage)?Pn(_.attributes.percentage/100,.12,1):.64;l.rotation.y=Bs(_)?p*Uc*m%Uc:0}}}function k_(i,t){let e=new be,n=t.mountY??39,s=Os(e,0,n),r=Pn(i*.72,17,27);We(s,r,31,5,ee(Bt.ink),0,0,-.5),We(s,r-1.9,29,4.4,ee(Bt.cream),0,.3,1);let o=ee(Bt.oat,{emissive:Bt.warm,emissiveIntensity:0}),a=We(s,r*.55,17.5,3.2,o,0,3.2,3.5),l=Array.from({length:3},(c,h)=>{let f=ee(Bt.teal,{emissive:Bt.mint,emissiveIntensity:0});return In(s,1.85,f,(h-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(c,h=0){a.rotation.x=Yi(c)?Bs(c)?-.16:.16:0,o.emissiveIntensity=Bs(c)?.42:0;let f=c?.presence==="on";for(let u=0;u<l.length;u++){let d=f?.5+.5*Math.cos(h*5-u*1.23):0;l[u].material.color.setHex(f?Bt.mint:Bt.teal),l[u].material.emissiveIntensity=f?.75+d*1.9:0,l[u].scale.setScalar(f?1+d*.18:1)}}}}function of(i,t,e,n=31){let s=new be,r=36.5,o=Math.max(12,i-6),a=ee(Bt.oat);if(t){let u=ee(Bt.glass,{roughness:.32});Oe(s,o,n,3.2,u,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])Oe(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;Oe(s,o,1.8,7,u,0,d+.35);for(let g of[-4.25,4.25])Oe(s,o+2,3.2,1.5,a,0,d,g);Oe(s,o+3,3.8,11,a,0,r-n/2,1.4),Oe(s,o,1.35,.5,ee(Bt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let l=ee(Bt.cream),c=r+n/2-1;We(s,o+2,4.6,7,a,0,c+.75,6.7,1.6);let h=Array.from({length:8},(u,d)=>Oe(s,o-5,n/8-.45,3,l,0,c-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(u){let d=Bc(u);d!==null&&(f=1-d);let g=Number.isFinite(u?.attributes?.current_tilt_position)?Pn(u.attributes.current_tilt_position/100,0,1):0;for(let _=0;_<h.length;_++){let p=Pn(f*h.length-_,0,1);h[_].visible=p>.02,h[_].scale.y=p,h[_].rotation.x=g*.9}}}}function Bc(i){return Yi(i)?Number.isFinite(i.attributes?.current_position)?Pn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function V_(i,t){let e=new be,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),l=ee(Bt.oat),c=ee(Bt.cream),h=ee(Bt.plum),f=[ee(Bt.tile),ee(Bt.paleTile)],u=ee(Bt.dark);Oe(e,i,5,n+t*.24,c,0,2.5,t*.09),Oe(e,i*.88,o+4,5,l,0,(o+4)/2,-r+2);for(let z of[-i*.42,i*.42])Oe(e,i*.09,o+4,n,l,z,(o+4)/2),We(e,i*.1,o+4,5,c,z,(o+4)/2,r+1,1.5);let d=new hn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new Qn(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),ri(e,g,h,0,o+4);let _=i*.49,p=Math.atan2(a,_),m=Math.hypot(a,_),E=(n+11)/8,C=[[],[]];for(let z of[-1,1])for(let W=0;W<8;W++){let q=-r-5.5+(W+.5)*E,O=new Ge(m*.97,2.2,E-.62);O.rotateZ(-z*p),O.translate(z*_*.5,o+5.65+a*.5,q),C[W%2].push(O)}C.forEach((z,W)=>{ri(e,Fs(z),f[W]),z.forEach(q=>q.dispose())}),We(e,4,4.5,n+12,h,0,o+a+5.6,0,1.5),Oe(e,i*.95,3.5,3.5,c,0,o+4,r+5.5),Oe(e,s,o,1.5,u,0,o/2+4,r-4);let S=ee(Bt.mint),w=ee(Bt.sage),D=(o-3)/6,v=Array.from({length:6},(z,W)=>{let q=Os(e,0,o-(W+.5)*D+2,r+.5);return We(q,s-2,D-.7,3.4,S,0,0,0,1.2),Oe(q,s*.91,.68,.7,w,0,D*.23,1.8),W===5&&We(q,s*.13,2,2.2,c,0,0,2.3,.55),q}),L=ee(Bt.gold,{emissive:Bt.ember,emissiveIntensity:0});In(e,3.7,L,i*.422,o*.73,r+4.5);let F=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(z,W=0){let q=Bc(z);q!==null&&(F=q),S.color.setHex(Yi(z)?Bt.mint:Bt.muted),w.color.setHex(Yi(z)?Bt.sage:Bt.muted);let O=(1-F)*v.length;v.forEach((nt,K)=>{let ot=Pn(O-K,0,1);nt.visible=ot>.02,nt.scale.y=ot,nt.position.y=o-(K+ot/2)*D+2});let $=["opening","closing"].includes(Oc(z));L.emissiveIntensity=$?.55+(.5+.5*Math.cos(W*6)):0}}}function G_(i){let t=new be,e=46,n=ee(Bt.cream),s=ee(Bt.honey),r=Math.min(i*.86,88),o=Os(t,-r/2,0,0);for(let a of[-r/2-1,r/2+1])Oe(t,3.4,e,5,n,a,e/2);return Oe(t,r+4,3,5,n,0,e),We(o,r-2,e-4,4,s,r/2,e/2,0,2),In(o,2.2,ee(Bt.gold),r-6,e*.47,2.8),{root:t,anchorY:e/2,animate(a){let l=Bc(a);l!==null&&(o.rotation.y=-1.32*l),s.color.setHex(Yi(a)?Bt.honey:Bt.muted)}}}function H_(i,t,e){let n=new be,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=Pn(t*.85,23,126),a=ee(Bt.dark,{emissive:Bt.mint,emissiveIntensity:0});if(We(n,o,s?25:18,8,ee(Bt.cream),0,r,0),s){We(n,o*.7,11,1.9,a,0,r+2,4.1);for(let l of[-.22,0,.22])In(n,1.35,ee(Bt.oat),o*l,r-7,4.3)}else Oe(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(l){let c=l?.attributes?.hvac_action,h=c==="heating",f=Yi(l)&&["cooling","heating","drying","fan"].includes(c);a.emissive.setHex(h?Bt.warm:Bt.glass),a.emissiveIntensity=f?1.15:Bs(l)?.25:0}}}function W_(i,t,e){let n=new be,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=ee(Bt.cream),l=ee(r?Bt.glass:Bt.sage),c=ee(Bt.teal,{emissive:Bt.mint,emissiveIntensity:0}),h=o-1;if(Pe(n,s*.46,s*.5,4,ee(Bt.ink),0,2),r){let d=In(n,s/2,l,0,12,0);d.scale.y=.78,Pe(n,s*.19,s*.22,3.5,a,0,h)}else{We(n,s,24,s*.82,l,0,15,0,5),We(n,s*.91,3.8,s*.71,a,0,h);for(let d=-1;d<=1;d++)Oe(n,s*.66,1.2,1.1,c,0,h+2,d*3.5)}In(n,1.6,c,s*.18,h-2,s*.31);let f=ee(Bt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),u=Array.from({length:3},(d,g)=>In(n,2.1+g*.6,f,0,h+3,0));return{root:n,anchorY:h,animate(d,g=0){let _=Bs(d);c.emissiveIntensity=_?1.6:0;for(let p=0;p<u.length;p++){u[p].visible=_;let m=(g*.68+p/u.length)%1;u[p].position.set(Math.sin(m*kr)*3.1,h+4+m*14,0),u[p].scale.setScalar(.7+m*.62)}}}}function X_(i,t){let e=new be,n=Math.min(i,t)*.42,s=ee(Bt.sage,{emissive:Bt.mint,emissiveIntensity:0}),r=ee(Bt.ink);Pe(e,n,n*.95,7,r,0,4.6),Pe(e,n*.96,n,5.5,ee(Bt.cream),0,10.2),Pe(e,n*.28,n*.33,4,ee(Bt.oat),0,14,-n*.23);for(let a of[-.27,.27])In(e,n*.105,r,n*a,10,n*.88);let o=We(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,animate(a,l=0){let c=["cleaning","returning"].includes(Oc(a));o.material.emissiveIntensity=c?.6+.5*Math.cos(l*6):0}}}function af(i,t={}){let e=Fc(i.w,42),n=Fc(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?k_(e,t):s==="garageDoor"?V_(e,n):s==="door"||r==="door"?G_(e):s==="window"?of(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?of(Fc(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?H_(i,e,t):s==="airPurifier"||s==="humidifier"?W_(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?X_(e,n):s==="windowFan"?rf(i,e,n,!0):r==="fan"||/^fans-/.test(s)?rf(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?B_(i,e,n):null}var pf=Kf(lf(),1),{difference:mf,union:gf}=pf.default,nl=18,fn=.001,Wn=(i,t)=>i[0]*t[0]+i[1]*t[1],Zi=(i,t)=>i[0]*t[1]-i[1]*t[0],Xn=(i,t)=>[i[0]-t[0],i[1]-t[1]],_e=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],sl=([i,t])=>[-t,i],cf=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],tl=i=>i.map(({x:t,y:e})=>[t,e]),oi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],xf=i=>i.length?gf(...i):[];function il(i,t,e,n=0){let s=Xn(t,i),r=Math.hypot(...s);if(r<fn)return null;let o=s.map(h=>h/r),a=sl(o),l=_e(i,o,-n),c=_e(t,o,n);return oi([_e(l,a,e),_e(c,a,e),_e(c,a,-e),_e(l,a,-e)])}function el(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,l]=i[r],[c,h]=i[o];l>n!=h>n&&e<(c-a)*(n-l)/(h-l)+a&&(s=!s)}return s}function hf(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Xn(n,t),r=Math.hypot(...s);return r>fn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function q_(i,t,e,n){if(Math.abs(Wn(i.tangent,t.tangent))<.9999)return null;let s=sl(i.tangent),[r,o]=[t.start,t.end].map(_=>Xn(_,i.start)),a=Wn(r,s);if(Math.abs(a)<.1||Math.abs(a)>nl||Math.abs(a-Wn(o,s))>.1)return null;let l=[Wn(r,i.tangent),Wn(o,i.tangent)].sort((_,p)=>_-p),c=Math.max(0,l[0]),h=Math.min(i.length,l[1]);if(h-c<8)return null;let f=_e(i.start,i.tangent,(c+h)/2),u=Math.sign(a);if(!el(e,_e(f,s,-u))||!el(n,_e(f,s,a+u))||el(e,_e(f,s,a/2))||el(n,_e(f,s,a/2)))return null;let d=_e(i.start,i.tangent,c),g=_e(i.start,i.tangent,h);return oi([_e(d,s,-u*.05),_e(g,s,-u*.05),_e(g,s,a+u*.05),_e(d,s,a+u*.05)])}function _f(i){let t=[],e=[];for(let n of[...i].reverse()){let s=xf(n.polygons);if(!s.length)continue;let r=t.length?mf(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?gf(t,s):s}return{footprint:t,regions:e.reverse()}}function yf(i,t){let e=i.map(c=>({surface:c.surface,points:tl(c.points),polygons:[oi(tl(c.points))]})),n=[];for(let[c,h]of e.entries())for(let f of e.slice(c+1))for(let u of hf(h.points))for(let d of hf(f.points)){let g=q_(u,d,h.points,f.points);g&&n.push({surface:h.surface,polygons:[g]})}let s=[],r=[];if(t){let{left:c,deckEdge:h,stepBottom:f,deckBottom:u,northDeck:d,southDeck:g,recess:_}=t;s.push({surface:"patio",polygons:[oi(tl(d)),oi(tl(g)),oi(cf(c,f,h+1,u))]}),_.x2>_.x1&&_.z2>_.z1&&r.push({surface:"oak",polygons:[oi(cf(_.x1,_.z1,_.x2,_.z2))]})}let o=[...r,...n,...e],a=_f([...s,...o]),l=t?xf(o.flatMap(c=>c.polygons)):[];return{...a,foundation:l}}function Y_(i,t,e,n){let s=Zi(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=_e(i,sl(t),r),a=_e(i,sl(e),-r),l=Zi(Xn(a,o),e)/s,c=_e(o,t,l);return Math.hypot(...Xn(c,i))>n*2.5?oi([i,o,a]):oi([i,o,c,a])}function uf(i,t){let e=Zi(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=Xn(t.point,i.point);return[Zi(n,t.tangent)/e,Zi(n,i.tangent)/e]}function Z_(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=Xn(r.point,s.point);if(Math.hypot(...o)>nl)continue;let a=uf(s,r);a&&a.every(l=>l>=-nl&&l<=fn)?e.push({a:s,b:r,center:_e(s.point,s.tangent,a[0])}):!a&&Wn(s.tangent,r.tangent)<0&&Wn(o,s.tangent)<=fn&&Wn(o,r.tangent)>=-fn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=uf(s,o);if(!a)continue;let[l,c]=a;l<-nl||l>=-fn||c<=fn||c>=r.length-fn||r.openings.some(({start:h,end:f})=>c>=h&&c<=f)||e.push({a:s,center:_e(s.point,s.tangent,l)})}}return e}function ff({a:i,b:t,center:e},n){return e?[il(i.point,e,n,.1),t&&il(t.point,e,n,.1),t&&Y_(e,i.tangent,t.tangent,n)].filter(Boolean):[il(i.point,t.point,n,.1)].filter(Boolean)}function vf(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function J_(i,t){return vf(i).flatMap(([e,n])=>{let s=Xn(n,e),r=Math.hypot(...s);if(r<fn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,l])=>{let c=Xn(a,e),h=Xn(l,e);if(Math.abs(Zi(c,o))>fn||Math.abs(Zi(h,o))>fn)return[];let[f,u]=[Wn(c,o),Wn(h,o)].sort((_,p)=>_-p),d=Math.max(0,f),g=Math.min(r,u);return g-d>fn?[[_e(e,o,d),_e(e,o,g)]]:[]})})}function df(i,t){return t?.length?mf(i,t):i}function bf(i,t,e,n){let s=[],r=(l,c,h,f,u=0)=>{l&&h>c&&s.push({shape:l,from:c,to:h,surface:f,priority:u})};for(let l of i){let{palette:[c,h,f]}=l,u=[l.x1,l.y1],d=[l.dx,l.dz],g=(E,C,S,w,A,D,v)=>{C-E>fn&&r(il(_e(u,d,E),_e(u,d,C),A/2),S,w,D,v)},_=l.openings.length?n:0,p=(E,C)=>{g(E,C,_,e,t,c,2),g(E,C,e-1,e+2,t+3,h,1)};_&&g(0,l.length,0,_,t,c,2);let m=0;for(let E of l.openings)p(m,E.start),m=Math.max(m,E.end);p(m,l.length),g(0,l.length,0,3,t+3,f,1)}for(let l of Z_(i)){let[c,h,f]=l.a.wall.palette;for(let u of ff(l,t/2))r(u,0,e,c,2);for(let u of ff(l,(t+3)/2))r(u,e-1,e+2,h,1),r(u,0,3,f,1)}let o=[...new Set(s.flatMap(({from:l,to:c})=>[l,c]))].sort((l,c)=>l-c),a=o.slice(1).map((l,c)=>{let h=o[c],f=new Map,u=s.filter(d=>d.from<=h&&d.to>=l);for(let{surface:d,shape:g}of u.sort((_,p)=>_.priority-p.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{..._f([...f.values()]),bottom:h,top:l}});return a.flatMap(({regions:l,footprint:c,bottom:h,top:f},u)=>{let d=vf(c);return l.map(g=>({...g,bottom:h,top:f,faces:{top:df(g.polygons,a[u+1]?.footprint),bottom:h===0?[]:df(g.polygons,a[u-1]?.footprint),sides:J_(g.polygons,d)}}))})}var $_=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),K_=3;function Sf(i,t,e){i.toneMapping=Er,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Vi,i.shadowMap.autoUpdate=!1;let n=new _r("#fff4e5","#897e91",1.13),s=new As("#fff0d4",2.15),r=new As("#dbeaff",.24),{minX:o,maxX:a,minZ:l,maxZ:c}=e,h=(o+a)/2,f=(l+c)/2;s.position.set(h-610,1150,f-490),s.target.position.set(h,0,f),r.position.set(h+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let u=Math.hypot(a-o,c-l)/2+175;Object.assign(s.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:K_},()=>new br("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],_,p,m=!0,E=new Jt;function C(){for(let A of t.children)A.isMesh&&(A.receiveShadow=!0,A.geometry.computeBoundingBox(),A.castShadow=A.geometry.boundingBox.max.y+A.position.y>-99)}function S(A,D){let v=/(light|lamp|sconce)/i.test(A.type),L=!D.animate||v;D.root.traverse(F=>{!F.isMesh||F.material.transparent||F.material.isShaderMaterial||(F.receiveShadow=!0,F.castShadow=L)}),v&&A.entityId&&g.push({item:A,object:D})}function w(A,D,v){let L=A.night===!0,F=$_.has(A.condition),z=L?"night":F?"cloud":"day";if(z!==_&&(n.color.set(L?"#a8b8f5":F?"#dce6f1":"#fff4e5"),n.groundColor.set(L?"#5b536e":"#998291"),n.intensity=L?.75:F?1.33:1.12,s.color.set(L?"#a7b8ed":F?"#e9eff9":"#fff0d4"),s.intensity=L?.28:F?.86:2.14,r.intensity=L?.12:.23,s.shadow.intensity=L?.65:F?.39:.84,v.color.set(L?"#97a5c5":F?"#ccd6c6":"#f4f1d8"),t.background.set(L?"#343951":"#c0cbb4"),_=z,p=void 0),p!==D){let W=g.flatMap(({item:q,object:O})=>{let $=D[q.id];if($?.state!=="on")return[];let nt=Number.isFinite($.attributes?.brightness)?ii.clamp($.attributes.brightness/255,0,1):1;return nt>0?[{object:O,power:nt,color:$.attributes?.rgb_color}]:[]}).sort((q,O)=>O.power-q.power);for(let[q,O]of d.entries()){let $=W[q];if(!$){O.intensity=0;continue}let{object:nt,power:K,color:ot}=$;Array.isArray(ot)&&ot.length===3&&ot.every(Number.isFinite)?(E.setRGB(...ot.map(tt=>ii.clamp(tt/255,0,1)),Re),O.color.copy(E)):O.color.set("#ffd5a2"),O.position.copy(nt.root.position),O.position.y+=Math.max(18,nt.anchorY-9),O.intensity=K*(L?2350:1250)}p=D}m&&(i.shadowMap.needsUpdate=!0,m=!1)}return{markStructure:C,register:S,update:w,dispose:()=>s.shadow.dispose()}}var ai=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),zs=Object.freeze({top:ai("Top down",0,0),high:ai("High angle",0,15),dollhouse:ai("Dollhouse",2,30),corner:ai("Corner",45,40),north:ai("From north",180,42),east:ai("From east",90,42),south:ai("From south",0,42),west:ai("From west",270,42),free:ai("Free view",0,25)});function Mf(i,t=!1){let e=Object.entries(zs).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="top",i.disabled=!1}function Ji(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(zs,t.preset)?t.preset:"top",n=zs[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?ii.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?ii.clamp(t.zoom,.6,2.5):n.zoom}}function Ef(i){let t=Ji(i);return{...t,preset:"free",tilt:t.tilt||zs.free.tilt}}function Vc(i,t,e,n,s="top"){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let r=Ji(s),o=ii.degToRad(r.azimuth),a=ii.degToRad(r.tilt),l=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),c=new G(Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a));i.up.set(-Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)),i.position.copy(l).addScaledVector(c,1900),i.lookAt(l),i.updateMatrixWorld(!0);let h=new zn,f=new G;for(let m of[t.minX-37,t.maxX+37])for(let E of[t.minZ-53,t.maxZ+36])for(let C of[-111,92])h.expandByPoint(f.set(m,C,E).applyMatrix4(i.matrixWorldInverse));let u=e/n,d=Math.max((h.max.x-h.min.x)/2,(h.max.y-h.min.y)/2*u),g=d/u,_=(h.min.x+h.max.x)/2,p=(h.min.y+h.max.y)/2;return i.left=_-d,i.right=_+d,i.bottom=p-g,i.top=p+g,i.zoom=r.zoom,i.updateProjectionMatrix(),r}var Gc=Math.PI/180,Pf=14,Lf=56,j_=21,Nf=-111,Hc={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Wc={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},Q_=new Set(["cloudy","partlycloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),ty=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),ey=new Set(["snowy","snowy-rainy","hail"]),wf={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42},ny=new Set(["waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]);function rl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Xc(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function Df(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,l=r.y1+o*r.dz,c=Math.hypot(a-t,l-e);c<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:l,distance:c})}return s}function Uf(i,t,e,n){let s=i.some(o=>Xc(o,e-t.dz*23,n+t.dx*23));return i.some(o=>Xc(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function iy(i,t,e){if(!Object.hasOwn(wf,e.type))return null;let n=Df(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,l=Math.abs(a)>4?Math.sign(a):Uf(i,s,r,o),c=(Pf/2+4)*l;return{x:r-s.dz*c,z:o+s.dx*c,angle:s.angle+(l<0?Math.PI:0),mountY:Math.min(wf[e.type],Lf-8)}}function Tf(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Af(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function sy(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function ry(i){if(i?.version!==2||!Array.isArray(i.rooms)||!i.rooms.length||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let t=i.rooms.filter(g=>g?.points?.length>=3&&g.points.every(_=>Number.isFinite(_?.x)&&Number.isFinite(_?.y)));if(!t.length)throw new Error("Storybook could not find a valid room polygon.");let e=i.walls.map(Tf).filter(Boolean),n=i.items.filter(g=>typeof g?.id=="string"&&typeof g.type=="string"&&[g.x,g.y,g.w,g.h].every(Number.isFinite)&&g.w>0&&g.h>0),s={minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0},r=(g,_)=>{s.minX=Math.min(s.minX,g),s.maxX=Math.max(s.maxX,g),s.minZ=Math.min(s.minZ,_),s.maxZ=Math.max(s.maxZ,_)};for(let g of t)for(let _ of g.points)r(_.x,_.y);for(let g of e)r(g.x1,g.y1),r(g.x2,g.y2);let o={...s},a=new Map(e.map(g=>[g.id,g])),l=["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(g=>a.has(g))?{left:o.minX-108,deckEdge:o.minX-10,stepTop:o.minZ+14,stepBottom:o.maxZ+25,deckBottom:o.maxZ+82,northDeck:[[o.minX-10,a.get("w1").y1+57],[a.get("w2").x1,a.get("w1").y1+57],[a.get("w3").x1,a.get("w3").y1],[a.get("w3").x2,a.get("w3").y2],[o.minX-10,a.get("w4").y2]].map(([g,_])=>({x:g,y:_})),southDeck:[[o.minX-10,a.get("w6").y1],[a.get("w7").x1,a.get("w7").y1],[a.get("w7").x2,a.get("w7").y2],[a.get("w8").x1,o.maxZ+82],[o.minX-10,o.maxZ+82]].map(([g,_])=>({x:g,y:_})),recess:{x1:a.get("w12").x2,x2:a.get("w18").x1,z1:Math.min(a.get("w11").y2,a.get("w12").y2),z2:a.get("w13").y2}}:null,c=e.filter(g=>l?!(g.id==="w3"&&Af(g,[400,408,342,468]))&&!(g.id==="w7"&&Af(g,[248,590,302,651])):!0);if(l){r(l.left,l.stepTop),r(l.deckEdge,l.deckBottom);let{x1:g,x2:_,z1:p}=l.recess;if(_>g){let m=[[g,a.get("w12").y2,g,p],[g,p,_,p]];for(let[E,C]of m.entries()){if(c.some(L=>sy(L,C)))continue;let[S,w,A,D]=C,v=Tf({id:`reference-recess-${E}`,x1:S,y1:w,x2:A,y2:D});v&&c.push(v)}}}let h=new Map;for(let g of n.filter(_=>_.type==="window")){let _=Df(c,g.x,g.y,(g.rotation||0)*Gc);if(!_||_.distance>27)continue;let{wall:p,t:m,centerX:E,centerZ:C}=_,S=Math.max(1,m-g.w/2+1),w=Math.min(p.length-1,m+g.w/2-1);if(w-S<14)continue;p.openings.push({start:S,end:w});let A=Uf(t,p,E,C),D=p.angle+(A<0?Math.PI:0),v=(S+w)/2;h.set(g.id,{x:p.x1+v*p.dx,z:p.y1+v*p.dz,angle:D,window:{...g,w:w-S+2,rotation:D/Gc}})}let f=n.map(g=>{let _=g.type==="controlZone"&&(g.visualKind==="window"||g.entityId?.startsWith("cover.")),p=h.get(g.id)??iy(t,c,g);if(_){let A=52;for(let D of h.values()){let v=Math.hypot(D.x-g.x,D.z-g.y);v<A&&(p=D,A=v)}}let m=p?.x??g.x,E=p?.z??g.y,C=p?.angle??(Number.isFinite(g.rotation)?g.rotation*Gc:0),S=Math.min(300,(Math.abs(Math.cos(C))*g.w+Math.abs(Math.sin(C))*g.h)/2),w=Math.min(300,(Math.abs(Math.sin(C))*g.w+Math.abs(Math.cos(C))*g.h)/2);return r(m-S,E-w),r(m+S,E+w),{item:g,x:m,z:E,angle:C,window:p?.window,mountY:p?.mountY,isBlind:_}});for(let g of c)g.openings.sort((_,p)=>_.start-p.start||_.end-p.end);let u=yf(t,l),d=bf(c.map(g=>({...g,palette:Object.hasOwn(Wc,g.finish)?Wc[g.finish]:Wc.graphite})),Pf,Lf,j_);return{rooms:t,walls:c,placements:f,bounds:s,houseBounds:o,reference:l,floorStructure:u,wallStructure:d}}function Rf(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function qc([i,...t]){let e=Rf(new hn,i);return e.holes=t.map(n=>Rf(new Oi,n)),e}function oy(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,l=rl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let h=0;h<8;h++){let f=h*32;s.globalAlpha=.04+l()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let u=30+h*47%181;s.fillRect(u,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=l()*256,_=f+3+l()*27,p=12+l()*46;s.beginPath(),s.moveTo(g,_),s.quadraticCurveTo(g+p/2,_+l()*2-1,g+p,_),s.stroke()}}else if(a==="tile")for(let h=0;h<8;h++)for(let f=0;f<8;f++)s.globalAlpha=l()*.14,s.fillRect(f*32,h*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,h*32+.5,31,31);else for(let h=0;h<160;h++)s.globalAlpha=.12+l()*.24,s.fillRect(l()*256,l()*256,1+l()*4,1+l()*3);let c=new Ms(n);return c.colorSpace=Re,c.wrapS=c.wrapT=Di,c}function ay(i){let t=new Map,e=new ue,n=new gn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,l=d=>(a.has(d)||a.set(d,new ki({color:d})),a.get(d));function c(d,g,_,p,m,E=0){n.setFromAxisAngle(r,E),e.compose(s.set(_,p,m),n,o),d.applyMatrix4(e);let C=l(g);t.has(C)||t.set(C,[]),t.get(C).push(d)}function h(d,g,_,p,m,E,C,S=0){d>0&&g>0&&_>0&&c(new Ge(d,g,_),p,m,E,C,S)}function f(d,g,_,p,m,E,C){let S=new En(1,9,6);S.scale(d,g,_),c(S,p,m,E,C)}function u(){for(let[d,g]of t){let _=Fs(g);if(!_){for(let p of g)i.add(new xe(p,d));continue}i.add(new xe(_,d));for(let p of g)p.dispose()}t.clear()}return{add:c,ball:f,box:h,material:l,finish:u}}function ly(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Hc,r)?r:"oak";if(!s.has(a)){let l=Hc[a],c=oy(n,l,141+Object.keys(Hc).indexOf(a)*977);s.set(a,new ki({color:c?"#fffdf8":l[0],map:c}))}for(let l of o){let c=new yi(qc(l));c.rotateX(-Math.PI/2);let h=c.getAttribute("position"),f=c.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,h.getX(d)/248,h.getZ(d)/248);let u=new xe(c,s.get(a));u.receiveShadow=!0,i.add(u)}}for(let r of e.floorStructure.footprint)Cf(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)Cf(t,r,Nf-1,-22,"#a18e84",!0)}function cy(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new De(e,1))}return i}function Cf(i,t,e,n,s,r=!1){let o=new Qn(qc(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),l=[];for(let c=0;c<a.count;c+=3)[c,c+1,c+2].some(h=>a.getZ(h)<n-e-.001)&&l.push(c,c+1,c+2);o.setIndex(l)}o.rotateX(-Math.PI/2),i.add(cy(o),s,0,e,0)}function hy(i,t){let e=[],n=[],s=[];for(let[[o,a],[l,c]]of i){let h=e.length/3,f=Math.hypot(l-o,c-a);e.push(o,0,a,o,t,a,l,t,c,l,0,c),n.push(h,h+1,h+2,h,h+2,h+3),s.push(0,0,0,t,f,t,f,0)}let r=new Me;return r.setAttribute("position",new oe(e,3)),r.setAttribute("uv",new oe(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function If(i,t){let e=new yi(qc(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function uy(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(If(o,!1),r,0,s,0);for(let o of e.bottom)i.add(If(o,!0),r,0,n,0);e.sides.length&&i.add(hy(e.sides,s-n),r,0,n,0)}}function fy(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,l=(n+e)/2,c=14,h=(r-s)/c,f=-108,u=-f/c;for(let C=0;C<c;C++){let S=s+h*(C+.5),w=f+(C+1)*u,A=w-3;i.box(a,A-f,h,"#a98075",l,(f+A)/2,S),i.box(a,3,h,C%2?"#e2c2a6":"#d5b198",l,w-1.5,S),i.box(a+1,2.4,3,"#b68e82",l,w-1.8,S-h/2+.4),i.box(5,24,5,"#9f8183",e+4,w+12,S)}let d=h*(c-1),g=u*(c-1),_=new Ge(7,5,Math.hypot(d,g)+5);_.rotateX(-Math.atan2(g,d)),i.add(_,"#896e79",e+4,24-g/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",l,f-1.5,s-40);let[p,m]=o,E=Math.max(2,Math.ceil((m.x-p.x)/28));i.box(m.x-p.x,5,7,"#896e79",(m.x+p.x)/2,28,p.y);for(let C=0;C<=E;C++)i.box(5,28,5,"#9f8183",p.x+(m.x-p.x)*C/E,14,p.y)}function dy(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=rl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,l=20+n()*56;for(let c of[-512,0,512])for(let h of[-512,0,512]){let f=e.createRadialGradient(o+c,a+h,0,o+c,a+h,l);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+c-l,a+h-l,l*2,l*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new Ms(t);return s.wrapS=s.wrapT=Di,s.repeat.set(15,10),s.colorSpace=Re,s.anisotropy=4,s}function py(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,l=rl(150741),c=Math.min(90,o*.18),h=t.reference?t.reference.left+c/2:e+c/2;i.box(c,4,115,"#c7baa4",h,-109,s-88);for(let u=0;u<5;u++)i.box(c*.85,1.8,13,"#dbceba",h,-106,s-137+u*20);let f=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,d]of f){let g=e+u*o,_=s+d*a,p=21+l()*24;i.ball(p*.94,9,p*.67,"#6d886a",g,-104,_),i.ball(p*.82,p*.57,p*.69,"#819b76",g+3,-98,_);for(let m=0;m<8;m++){let E=m*2.39996,C=(.2+l()*.5)*p,S=p*(.28+l()*.2),w=["#94ad7f","#a6ba88","#8da878","#bad09c"][m%4];i.ball(S*1.15,S*.8,S,w,g+Math.cos(E)*C,-93+12*l(),_+Math.sin(E)*C*.75)}for(let m=0;m<5;m++){let E=m%2?"#e6c4b1":"#fae6a4",C=g+(l()-.5)*p*1.14,S=_+p*(.62+l()*.43);i.ball(2.3,4.6,2.3,"#819765",C,-106,S),i.ball(3.9,1.8,3.3,E,C,-101.5,S),i.ball(1.2,.9,1.2,"#cb9c57",C,-100.3,S)}}}function my(i,t){let{minX:e,maxX:n,minZ:s}=t.houseBounds,r=rl(2912),o=t.bounds,a=new be,l=new ki({color:"#f8ebdf",transparent:!0,opacity:.9}),c=new En(1,12,8),h=n-e;for(let[L,F]of[.19,.53,.82].entries()){let z=e+h*F,W=s-55-L%2*34;for(let q=0;q<3;q++){let O=new xe(c,l);O.scale.set(32+r()*21,15+r()*10,25+r()*10),O.position.set(z+q*31,27+5*(q===1),W),a.add(O)}}i.add(a);let f=new be;f.position.set(e+h*.77,21,s-70);let u=new xe(new En(17,16,10),new jn({color:"#ffe2a1"}));f.add(u);let d=new be,g=new xe(u.geometry,new jn({color:"#f9e5c6"}));d.add(g);let _=new xe(u.geometry,new jn({color:"#7d7c97"}));_.position.set(4,4,1),_.scale.setScalar(.96),d.add(_),f.add(d),i.add(f);let p=[],m=t.reference?.recess,E=(L,F)=>!(m&&L>=m.x1&&L<=m.x2&&F>=m.z1&&F<=m.z2)&&!t.rooms.some(z=>Xc(z,L,F));for(let L=0;L<190;L++){let F=o.minX-70+(o.maxX-o.minX+140)*r(),z=o.minZ-70+(o.maxZ-o.minZ+140)*r();E(F,z)&&p.push({x:F,z,phase:r()*180})}let C=new Float32Array(p.length*6),S=new Float32Array(p.length*3),w=new Me,A=new Me;w.setAttribute("position",new De(C,3).setUsage(Xa)),A.setAttribute("position",new De(S,3).setUsage(Xa));let D=new rr(w,new bs({color:"#cce5ef",transparent:!0,opacity:.66})),v=new or(A,new Ss({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return D.frustumCulled=v.frustumCulled=!1,i.add(D,v),(L,F,z)=>{let{night:W=!1,condition:q="",moonPhase:O="",daylightKnown:$=!0}=F,nt=z?0:L;a.visible=Q_.has(q),a.position.x=Math.sin(nt*.16)*(q.includes("windy")?48:23),u.visible=$&&!W,d.visible=$&&W&&ny.has(O),_.visible=O!=="full_moon";let K=O.startsWith("waxing")||O==="first_quarter",ot=O.endsWith("quarter");if(_.position.x=(K?-1:1)*(ot?8:O.endsWith("gibbous")?14:5),D.visible=ty.has(q),v.visible=ey.has(q),D.visible||v.visible){for(let[it,tt]of p.entries()){let ht=65-(tt.phase+nt*150)%170,It=65-(tt.phase+nt*20)%170,At=it*6;C.set([tt.x,ht,tt.z,tt.x-4,ht+22,tt.z+3],At),S.set([tt.x+Math.sin(nt+it)*6,It,tt.z],it*3)}w.attributes.position.needsUpdate=D.visible,A.attributes.position.needsUpdate=v.visible}}}function gy(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35)return e.get(n.item.id)?.anchorY??0}return 0}function Ff(i,t){let e=ry(t),n=new $a({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"}),s=new nr;s.background=new Jt("#d7dfcd");let r=new Mi(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:l,maxZ:c}=e.bounds,h=new ei({color:"#e8e8d2",map:dy(i.ownerDocument),roughness:.95}),f=new xe(new ti(6200,4200),h);f.rotation.x=-Math.PI/2,f.position.set((o+a)/2,Nf,(l+c)/2),s.add(f);let u=ay(s);py(u,e),fy(u,e),ly(s,u,e,i.ownerDocument),uy(u,e),u.finish();let d=Sf(n,s,e.bounds);d.markStructure();let g=my(s,e),_=new Map,p=new Map;for(let K of e.placements){let{item:ot,x:it,z:tt,angle:ht,window:It,mountY:At,isBlind:jt}=K,Wt=ot.type==="window"&&It?It:ot,Yt=af(Wt,{window:jt?It:void 0,mountY:At})??sf(Wt);Yt&&(Yt.root.position.set(it,0,tt),Yt.root.rotation.y=-ht,s.add(Yt.root),p.set(ot.id,Yt),d.register(ot,Yt)),_.set(ot.id,{x:it,z:tt,object:Yt})}for(let K of e.placements){let ot=p.get(K.item.id);ot&&(ot.root.position.y=gy(e,K,p))}let m=new G,E=!1,C=0,S=0,w=Ji(),A=new Sr,D=new ln(new G(0,1,0),0),v=new G,L=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function F(K,ot){if(E||K<1||ot<1||K===C&&ot===S)return;C=K,S=ot;let it=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(it,1.5,Math.sqrt(27e5/(K*ot)))),n.setSize(K,ot,!1),w=Vc(r,e.bounds,K,ot,w)}function z(K){return w=Ji(K),!E&&C>0&&S>0&&(w=Vc(r,e.bounds,C,S,w)),W()}function W(){return{...w}}function q(K,ot){return E||!Number.isFinite(K)||!Number.isFinite(ot)||C<=0||S<=0?null:(A.setFromCamera(new St(K/C*2-1,1-ot/S*2),r),A.ray.intersectPlane(D,v)?{x:v.x,y:v.z}:null)}function O(K=0,ot={},it={}){if(E||C<1||S<1)return;d.update(it,ot,h);let tt=it.reduceMotion===!0,ht=Number.isFinite(K)?K:0;g(ht,it,tt);for(let[It,At]of p){let jt=ot[It]??L,Wt=jt.position;Wt&&Number.isFinite(Wt.x)&&Number.isFinite(Wt.y)&&(At.root.position.x=Wt.x,At.root.position.z=Wt.y),At.animate?.(jt,tt?0:ht)}n.render(s,r)}function $(K){let ot=_.get(K);if(!ot||C<1||S<1)return null;let{x:it,z:tt,object:ht}=ot;return ht?(m.set(ht.anchorOffset?.x||0,ht.anchorY||0,ht.anchorOffset?.z||0),ht.root.localToWorld(m)):m.set(it,6,tt),m.project(r),{x:(m.x+1)/2,y:(1-m.y)/2}}function nt(){if(E)return;E=!0;let K=new Set,ot=new Set,it=new Set;s.traverse(tt=>{tt.geometry&&K.add(tt.geometry);for(let ht of Array.isArray(tt.material)?tt.material:[tt.material])if(ht){ot.add(ht);for(let It of Object.values(ht))It?.isTexture&&it.add(It)}});for(let tt of it)tt.dispose();for(let tt of K)tt.dispose();for(let tt of ot)tt.dispose();d.dispose(),n.dispose()}return{resize:F,render:O,anchor:$,setView:z,getView:W,projectToPlan:q,dispose:nt}}var Of=.35,ol=7.5,xy=8;function Bf(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let E=Ji({...p,...m});(E.azimuth!==p.azimuth||E.tilt!==p.tilt||E.zoom!==p.zoom)&&e(E)}function l(p){i.hasPointerCapture(p)&&i.releasePointerCapture(p)}function c(){for(let p of[...s.keys()])s.delete(p),l(p)}function h(p){if(!r()||p.defaultPrevented||p.button!==0||!n(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{i.setPointerCapture(p.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function f(p){let m=s.get(p.pointerId);if(!m)return;let E=r();if(!E){c();return}let C=s.size===2,S=C?o():0,w={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,w),p.preventDefault(),C){let A=o();Math.min(S,A)>=xy&&a(E,{zoom:E.zoom*A/S});return}a(E,{azimuth:E.azimuth-(w.x-m.x)*Of,tilt:E.tilt+(w.y-m.y)*Of})}function u(p){s.delete(p.pointerId)&&l(p.pointerId)}function d(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let E=p.deltaMode===1?16:p.deltaMode===2?i.clientHeight:1,C=Math.max(-350,Math.min(350,p.deltaY*E));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-C*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let E;switch(p.key){case"ArrowLeft":E={azimuth:m.azimuth-ol};break;case"ArrowRight":E={azimuth:m.azimuth+ol};break;case"ArrowUp":E={tilt:m.tilt-ol};break;case"ArrowDown":E={tilt:m.tilt+ol};break;case"+":case"=":E={zoom:m.zoom*1.1};break;case"-":E={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,E)}let _=[["pointerdown",h],["pointermove",f],["pointerup",u],["pointercancel",u],["lostpointercapture",u],["wheel",d,{passive:!1}],["keydown",g]];for(let[p,m,E]of _)i.addEventListener(p,m,E);return{cancel:c,dispose(){c();for(let[p,m,E]of _)i.removeEventListener(p,m,E)}}}function zf(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,l)=>(a.priority??0)-(l.priority??0)),o=(a,l,c)=>Math.min(Math.max(a,l),c);for(let a of r){let l=Math.min(a.w,t),c=Math.min(a.h,e),h;for(let f=0;f<=3&&!h;f++)for(let[u,d]of f===0?s.slice(0,1):s.slice(1)){let g=o(a.x+u*f*34,l/2,t-l/2),_=o(a.y+d*f*34,c/2,e-c/2);if(n.every(p=>Math.abs(g-p.x)>=(l+p.w)/2+2||Math.abs(_-p.y)>=(c+p.h)/2+2)){h={...a,x:g,y:_,w:l,h:c};break}}h&&n.push(h)}return n}var _y=22,yy=5;function vy(i,t,e){let n=zf(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),l=[];for(let h=o/2;h<=t-o/2;h+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)l.push({...r,x:h,y:f,w:o,h:a});l.sort((h,f)=>Math.hypot(h.x-r.x,h.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let c=l.find(h=>n.every(f=>Math.abs(h.x-f.x)>=(h.w+f.w)/2+2||Math.abs(h.y-f.y)>=(h.h+f.h)/2+2));c&&n.push(c)}return n}function by(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function Sy(i,t,e,n,s,r){let o=i.flatMap((a,l)=>{let c=n.get(a.id);if(!c)return[];let h=Math.hypot(c.x*s-t.x,c.y*r-t.y),f=h<=_y;return!f&&!by(a,e)?[]:[{item:a,index:l,distance:h,near:f,area:a.w*a.h}]});return o.sort((a,l)=>Number(l.near)-Number(a.near)||(a.near?a.distance-l.distance:a.area-l.area)||l.index-a.index),o[0]?.item??null}function My(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Mf(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneReset"),l=i.createElement("div");l.className="scene-selection",l.setAttribute("aria-hidden","true"),Object.assign(l.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(l);let c=i.createElement("div");c.className="scene-placeholders",Object.assign(c.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(c);let h=i.createElementNS("http://www.w3.org/2000/svg","svg");h.classList.add("scene-placeholder-leaders"),h.setAttribute("aria-hidden","true"),Object.assign(h.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(h,c);let f=new Map,u=i.getElementById("miniHelp"),d=u?.textContent,g=n.getAttribute("aria-label")??"Editable three-dimensional home view",_,p,m,E={preset:"top"},C=r.value,S="top",w,A,D=!1,v=()=>C!=="plan",L=()=>C==="free",F=()=>n.getBoundingClientRect(),z=dt=>{let Et=F();return{x:dt.clientX-Et.left,y:dt.clientY-Et.top}};function W(dt){e.showStatus?.(dt)}function q(dt){if(!_||!v())return;let{width:Et,height:Pt}=F();if(!Et||!Pt||(_.resize(Et,Pt),_.render(0,dt??{},{night:!1,condition:"sunny",daylightKnown:!0,reduceMotion:!0}),L()))return;let Rt=[];for(let[J,et]of f){let lt=_.anchor(J);et.hidden=!lt,lt&&Rt.push({id:J,marker:et,x:lt.x*Et,y:lt.y*Pt,w:96,h:44})}let k=vy(Rt,Et,Pt),se=new Set(k.map(J=>J.id)),Ht=[];for(let J of k){let{marker:et,x:lt,y:U,w:x,h:y,id:M}=J;Object.assign(et.style,{left:`${lt}px`,top:`${U}px`,width:`${x}px`,height:`${y}px`});let I=Rt.find(P=>P.id===M);if(Math.hypot(I.x-lt,I.y-U)>8){let P=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[V,B]of Object.entries({x1:I.x,y1:I.y,x2:lt,y2:U}))P.setAttribute(V,B);P.setAttribute("stroke","#6f816b"),P.setAttribute("stroke-width","1"),P.setAttribute("stroke-dasharray","3 3"),Ht.push(P)}}for(let[J,et]of f)et.hidden=!se.has(J);h.replaceChildren(...Ht);let N=e.getSelection(),b=N?.kind==="item"?_.anchor(N.id):null;l.style.display=b?"block":"none",b&&(l.style.left=`${b.x*Et}px`,l.style.top=`${b.y*Pt}px`)}function O(){if(!w)return;let dt=w;w=void 0;try{n.releasePointerCapture(dt.pointerId)}catch{}dt.item&&q({[dt.item.id]:{position:{x:dt.item.x,y:dt.item.y}}})}function $(){for(let dt of Object.values(o))dt&&(dt.disabled=!v())}function nt(){n.tabIndex=L()?0:-1,n.style.cursor=L()?"grab":"",n.setAttribute("aria-label",L()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":g)}function K(dt){Wt.cancel(),O();let Et=_?.getView()??E,Pt=Object.hasOwn(zs,dt)?dt:"plan";Pt!=="plan"&&e.useSelectTool?.(),C=Pt,v()&&!L()&&(S=C),r.value=C,n.hidden=!v(),nt();let Rt=v()&&!L();if(c.style.display=Rt?"block":"none",h.style.display=Rt?"block":"none",Rt||(l.style.display="none"),u&&(L()?u.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":u.textContent=v()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":d),s.classList.toggle("scene-3d",v()),$(),!v()){W("Plan view \xB7 edit rooms, walls, floors and objects");return}let k=L()?Ef(Et):{preset:C};E=_?_.setView(k):k,it(),_&&W(L()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function ot(){Wt.cancel(),_?.dispose(),_=void 0,m=void 0,C="plan",r.value=C,n.hidden=!0,nt(),c.style.display="none",h.style.display="none",u&&(u.textContent=d),s.classList.remove("scene-3d"),l.style.display="none",$(),W("3D view is unavailable on this screen. Plan view is ready.")}function it(){if(D||!v())return;let dt=e.getProject(),Et=JSON.stringify(dt);try{if(!_||Et!==m){O(),_&&(E=_.getView()),_?.dispose(),_=void 0,p=dt,_=Ff(n,p),_.setView(E),m=Et,f.clear(),c.replaceChildren();for(let Pt of p.items.filter(Rt=>Rt.type==="cameraThumbnail"||Rt.type.startsWith("ui"))){let Rt=i.createElement("button");Rt.type="button",Rt.className="scene-placeholder",Rt.textContent=Pt.name||(Pt.type==="cameraThumbnail"?"Camera":"Interface"),Rt.setAttribute("aria-label",`Select ${Rt.textContent}`),Object.assign(Rt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),Rt.addEventListener("pointerdown",k=>Yt(k,Pt.id)),Rt.addEventListener("click",k=>{!L()&&k.detail===0&&(e.selectItem(Pt.id),q())}),f.set(Pt.id,Rt),c.append(Rt)}}q()}catch{ot()}}function tt(dt){!_||!v()||(O(),_.setView(dt(_.getView())),E=_.getView(),q())}let ht=()=>it(),It=()=>{let dt=e.getTool();v()&&dt!=="select"?K("plan"):L()&&e.hasPlacement()?K(S):v()&&q()},At=()=>K(r.value),jt=()=>{t.cancelAnimationFrame(A),A=t.requestAnimationFrame(()=>q())},Wt=Bf(n,{getView:()=>L()?_?.getView():null,onChange:dt=>{!_||!L()||(E=_.setView(dt),jt())}}),Yt=(dt,Et=null)=>{if(!v()||L()||!_||dt.button!==0||w)return;dt.preventDefault(),dt.stopPropagation();let Pt=z(dt),Rt=_.projectToPlan(Pt.x,Pt.y);if(!Rt)return;if(e.hasPlacement()){e.placeAt(Rt.x,Rt.y),it();return}let{width:k,height:se}=F(),Ht=new Map(p.items.map(b=>[b.id,_.anchor(b.id)])),N=Et?p.items.find(b=>b.id===Et):Sy(p.items,Pt,Rt,Ht,k,se);if(e.selectItem(N?.id??null),!N){q();return}w={item:{...N},startScreen:Pt,startPlan:Rt,pointerId:dt.pointerId},n.setPointerCapture(dt.pointerId),q()},ut=dt=>{if(!v()||L()||(dt.stopPropagation(),!w||w.pointerId!==dt.pointerId||!_))return;let Et=z(dt);if(!w.moved&&Math.hypot(Et.x-w.startScreen.x,Et.y-w.startScreen.y)<yy)return;let Pt=_.projectToPlan(Et.x,Et.y);Pt&&(w.moved=!0,w.position={x:w.item.x+Pt.x-w.startPlan.x,y:w.item.y+Pt.y-w.startPlan.y},q({[w.item.id]:{position:w.position}}))},gt=dt=>{if(!v()||L()||(dt.stopPropagation(),!w||w.pointerId!==dt.pointerId))return;let Et=w;w=void 0;try{n.releasePointerCapture(dt.pointerId)}catch{}Et.moved&&Et.position?(e.moveItem(Et.item.id,Et.position.x,Et.position.y),it()):q()},Tt=dt=>{L()||(w?.pointerId===dt.pointerId&&O(),dt.stopPropagation())},Gt=dt=>{!v()||L()||(dt.preventDefault(),dt.stopPropagation(),tt(Et=>({...Et,zoom:Et.zoom*(dt.deltaY<0?1.1:1/1.1)})))},Nt=dt=>{L()&&dt.target===n&&(dt.key==="Delete"||dt.key==="Backspace")&&(dt.preventDefault(),dt.stopImmediatePropagation()),dt.key==="Escape"&&w&&(dt.preventDefault(),dt.stopImmediatePropagation(),O())},Ot=dt=>{dt.preventDefault(),ot()},ae=()=>tt(dt=>({...dt,azimuth:dt.azimuth-15})),ft=()=>tt(dt=>({...dt,azimuth:dt.azimuth+15})),_t=()=>tt(dt=>({...dt,zoom:dt.zoom/1.2})),vt=()=>tt(dt=>({...dt,zoom:dt.zoom*1.2})),bt=()=>K("top");o.left?.addEventListener("click",ae),o.right?.addEventListener("click",ft),o.out?.addEventListener("click",_t),o.in?.addEventListener("click",vt),a?.addEventListener("click",bt),r.addEventListener("change",At),n.addEventListener("pointerdown",Yt),n.addEventListener("pointermove",ut),n.addEventListener("pointerup",gt),n.addEventListener("pointercancel",Tt),n.addEventListener("lostpointercapture",Tt),n.addEventListener("wheel",Gt,{passive:!1}),n.addEventListener("webglcontextlost",Ot),t.addEventListener("keydown",Nt,!0),t.addEventListener("roomcraft-editor-change",ht),t.addEventListener("roomcraft-editor-tool",It);let Mt=new t.ResizeObserver(jt);return Mt.observe(s),K(C),{getView:()=>_?.getView()??{...E},setView:K,dispose(){D=!0,O(),Wt.dispose(),C="plan",nt(),Mt.disconnect(),t.cancelAnimationFrame(A),_?.dispose(),_=void 0,l.remove(),c.remove(),h.remove(),u&&(u.textContent=d),o.left?.removeEventListener("click",ae),o.right?.removeEventListener("click",ft),o.out?.removeEventListener("click",_t),o.in?.removeEventListener("click",vt),a?.removeEventListener("click",bt),r.removeEventListener("change",At),n.removeEventListener("pointerdown",Yt),n.removeEventListener("pointermove",ut),n.removeEventListener("pointerup",gt),n.removeEventListener("pointercancel",Tt),n.removeEventListener("lostpointercapture",Tt),n.removeEventListener("wheel",Gt),n.removeEventListener("webglcontextlost",Ot),t.removeEventListener("keydown",Nt,!0),t.removeEventListener("roomcraft-editor-change",ht),t.removeEventListener("roomcraft-editor-tool",It)}}}typeof window<"u"&&typeof document<"u"&&My(document,window);})();
