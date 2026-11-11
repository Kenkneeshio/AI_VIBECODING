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
"use strict";(()=>{var kf=Object.create;var Kc=Object.defineProperty;var Vf=Object.getOwnPropertyDescriptor;var Gf=Object.getOwnPropertyNames;var Hf=Object.getPrototypeOf,Wf=Object.prototype.hasOwnProperty;var Xf=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var qf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Gf(t))!Wf.call(i,s)&&s!==e&&Kc(i,s,{get:()=>t[s],enumerable:!(n=Vf(t,s))||n.enumerable});return i};var Yf=(i,t,e)=>(e=i!=null?kf(Hf(i)):{},qf(t||!i||!i.__esModule?Kc(e,"default",{value:i,enumerable:!0}):e,i));var af=Xf((Bc,zc)=>{(function(i,t){typeof Bc=="object"&&typeof zc<"u"?zc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Bc,(function(){"use strict";/**
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
    ***************************************************************************** */function i(U,x){var _={label:0,sent:function(){if(P[0]&1)throw P[1];return P[1]},trys:[],ops:[]},M,I,P,V;return V={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function B(j){return function(yt){return tt([j,yt])}}function tt(j){if(M)throw new TypeError("Generator is already executing.");for(;_;)try{if(M=1,I&&(P=j[0]&2?I.return:j[0]?I.throw||((P=I.return)&&P.call(I),0):I.next)&&!(P=P.call(I,j[1])).done)return P;switch(I=0,P&&(j=[j[0]&2,P.value]),j[0]){case 0:case 1:P=j;break;case 4:return _.label++,{value:j[1],done:!1};case 5:_.label++,I=j[1],j=[0];continue;case 7:j=_.ops.pop(),_.trys.pop();continue;default:if(P=_.trys,!(P=P.length>0&&P[P.length-1])&&(j[0]===6||j[0]===2)){_=0;continue}if(j[0]===3&&(!P||j[1]>P[0]&&j[1]<P[3])){_.label=j[1];break}if(j[0]===6&&_.label<P[1]){_.label=P[1],P=j;break}if(P&&_.label<P[2]){_.label=P[2],_.ops.push(j);break}P[2]&&_.ops.pop(),_.trys.pop();continue}j=x.call(U,_)}catch(yt){j=[6,yt],I=0}finally{M=P=0}if(j[0]&5)throw j[1];return{value:j[0]?j[1]:void 0,done:!0}}}var t=(function(){function U(x,_){this.next=null,this.key=x,this.data=_,this.left=null,this.right=null}return U})();function e(U,x){return U>x?1:U<x?-1:0}function n(U,x,_){for(var M=new t(null,null),I=M,P=M;;){var V=_(U,x.key);if(V<0){if(x.left===null)break;if(_(U,x.left.key)<0){var B=x.left;if(x.left=B.right,B.right=x,x=B,x.left===null)break}P.left=x,P=x,x=x.left}else if(V>0){if(x.right===null)break;if(_(U,x.right.key)>0){var B=x.right;if(x.right=B.left,B.left=x,x=B,x.right===null)break}I.right=x,I=x,x=x.right}else break}return I.right=x.left,P.left=x.right,x.left=M.right,x.right=M.left,x}function s(U,x,_,M){var I=new t(U,x);if(_===null)return I.left=I.right=null,I;_=n(U,_,M);var P=M(U,_.key);return P<0?(I.left=_.left,I.right=_,_.left=null):P>=0&&(I.right=_.right,I.left=_,_.right=null),I}function r(U,x,_){var M=null,I=null;if(x){x=n(U,x,_);var P=_(x.key,U);P===0?(M=x.left,I=x.right):P<0?(I=x.right,x.right=null,M=x):(M=x.left,x.left=null,I=x)}return{left:M,right:I}}function o(U,x,_){return x===null?U:(U===null||(x=n(U.key,x,_),x.left=U),x)}function a(U,x,_,M,I){if(U){M(""+x+(_?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+I(U)+`
`);var P=x+(_?"    ":"\u2502   ");U.left&&a(U.left,P,!1,M,I),U.right&&a(U.right,P,!0,M,I)}}var l=(function(){function U(x){x===void 0&&(x=e),this._root=null,this._size=0,this._comparator=x}return U.prototype.insert=function(x,_){return this._size++,this._root=s(x,_,this._root,this._comparator)},U.prototype.add=function(x,_){var M=new t(x,_);this._root===null&&(M.left=M.right=null,this._size++,this._root=M);var I=this._comparator,P=n(x,this._root,I),V=I(x,P.key);return V===0?this._root=P:(V<0?(M.left=P.left,M.right=P,P.left=null):V>0&&(M.right=P.right,M.left=P,P.right=null),this._size++,this._root=M),this._root},U.prototype.remove=function(x){this._root=this._remove(x,this._root,this._comparator)},U.prototype._remove=function(x,_,M){var I;if(_===null)return null;_=n(x,_,M);var P=M(x,_.key);return P===0?(_.left===null?I=_.right:(I=n(x,_.left,M),I.right=_.right),this._size--,I):_},U.prototype.pop=function(){var x=this._root;if(x){for(;x.left;)x=x.left;return this._root=n(x.key,this._root,this._comparator),this._root=this._remove(x.key,this._root,this._comparator),{key:x.key,data:x.data}}return null},U.prototype.findStatic=function(x){for(var _=this._root,M=this._comparator;_;){var I=M(x,_.key);if(I===0)return _;I<0?_=_.left:_=_.right}return null},U.prototype.find=function(x){return this._root&&(this._root=n(x,this._root,this._comparator),this._comparator(x,this._root.key)!==0)?null:this._root},U.prototype.contains=function(x){for(var _=this._root,M=this._comparator;_;){var I=M(x,_.key);if(I===0)return!0;I<0?_=_.left:_=_.right}return!1},U.prototype.forEach=function(x,_){for(var M=this._root,I=[],P=!1;!P;)M!==null?(I.push(M),M=M.left):I.length!==0?(M=I.pop(),x.call(_,M),M=M.right):P=!0;return this},U.prototype.range=function(x,_,M,I){for(var P=[],V=this._comparator,B=this._root,tt;P.length!==0||B;)if(B)P.push(B),B=B.left;else{if(B=P.pop(),tt=V(B.key,_),tt>0)break;if(V(B.key,x)>=0&&M.call(I,B))return this;B=B.right}return this},U.prototype.keys=function(){var x=[];return this.forEach(function(_){var M=_.key;return x.push(M)}),x},U.prototype.values=function(){var x=[];return this.forEach(function(_){var M=_.data;return x.push(M)}),x},U.prototype.min=function(){return this._root?this.minNode(this._root).key:null},U.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},U.prototype.minNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.left;)x=x.left;return x},U.prototype.maxNode=function(x){if(x===void 0&&(x=this._root),x)for(;x.right;)x=x.right;return x},U.prototype.at=function(x){for(var _=this._root,M=!1,I=0,P=[];!M;)if(_)P.push(_),_=_.left;else if(P.length>0){if(_=P.pop(),I===x)return _;I++,_=_.right}else M=!0;return null},U.prototype.next=function(x){var _=this._root,M=null;if(x.right){for(M=x.right;M.left;)M=M.left;return M}for(var I=this._comparator;_;){var P=I(x.key,_.key);if(P===0)break;P<0?(M=_,_=_.left):_=_.right}return M},U.prototype.prev=function(x){var _=this._root,M=null;if(x.left!==null){for(M=x.left;M.right;)M=M.right;return M}for(var I=this._comparator;_;){var P=I(x.key,_.key);if(P===0)break;P<0?_=_.left:(M=_,_=_.right)}return M},U.prototype.clear=function(){return this._root=null,this._size=0,this},U.prototype.toList=function(){return f(this._root)},U.prototype.load=function(x,_,M){_===void 0&&(_=[]),M===void 0&&(M=!1);var I=x.length,P=this._comparator;if(M&&p(x,_,0,I-1,P),this._root===null)this._root=c(x,_,0,I),this._size=I;else{var V=d(this.toList(),h(x,_),P);I=this._size+I,this._root=u({head:V},0,I)}return this},U.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(U.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(U.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),U.prototype.toString=function(x){x===void 0&&(x=function(M){return String(M.key)});var _=[];return a(this._root,"",!0,function(M){return _.push(M)},x),_.join("")},U.prototype.update=function(x,_,M){var I=this._comparator,P=r(x,this._root,I),V=P.left,B=P.right;I(x,_)<0?B=s(_,M,B,I):V=s(_,M,V,I),this._root=o(V,B,I)},U.prototype.split=function(x){return r(x,this._root,this._comparator)},U.prototype[Symbol.iterator]=function(){var x,_,M;return i(this,function(I){switch(I.label){case 0:x=this._root,_=[],M=!1,I.label=1;case 1:return M?[3,6]:x===null?[3,2]:(_.push(x),x=x.left,[3,5]);case 2:return _.length===0?[3,4]:(x=_.pop(),[4,x]);case 3:return I.sent(),x=x.right,[3,5];case 4:M=!0,I.label=5;case 5:return[3,1];case 6:return[2]}})},U})();function c(U,x,_,M){var I=M-_;if(I>0){var P=_+Math.floor(I/2),V=U[P],B=x[P],tt=new t(V,B);return tt.left=c(U,x,_,P),tt.right=c(U,x,P+1,M),tt}return null}function h(U,x){for(var _=new t(null,null),M=_,I=0;I<U.length;I++)M=M.next=new t(U[I],x[I]);return M.next=null,_.next}function f(U){for(var x=U,_=[],M=!1,I=new t(null,null),P=I;!M;)x?(_.push(x),x=x.left):_.length>0?(x=P=P.next=_.pop(),x=x.right):M=!0;return P.next=null,I.next}function u(U,x,_){var M=_-x;if(M>0){var I=x+Math.floor(M/2),P=u(U,x,I),V=U.head;return V.left=P,U.head=U.head.next,V.right=u(U,I+1,_),V}return null}function d(U,x,_){for(var M=new t(null,null),I=M,P=U,V=x;P!==null&&V!==null;)_(P.key,V.key)<0?(I.next=P,P=P.next):(I.next=V,V=V.next),I=I.next;return P!==null?I.next=P:V!==null&&(I.next=V),M.next}function p(U,x,_,M,I){if(!(_>=M)){for(var P=U[_+M>>1],V=_-1,B=M+1;;){do V++;while(I(U[V],P)<0);do B--;while(I(U[B],P)>0);if(V>=B)break;var tt=U[V];U[V]=U[B],U[B]=tt,tt=x[V],x[V]=x[B],x[B]=tt}p(U,x,_,B,I),p(U,x,B+1,M,I)}}let y=(U,x)=>U.ll.x<=x.x&&x.x<=U.ur.x&&U.ll.y<=x.y&&x.y<=U.ur.y,g=(U,x)=>{if(x.ur.x<U.ll.x||U.ur.x<x.ll.x||x.ur.y<U.ll.y||U.ur.y<x.ll.y)return null;let _=U.ll.x<x.ll.x?x.ll.x:U.ll.x,M=U.ur.x<x.ur.x?U.ur.x:x.ur.x,I=U.ll.y<x.ll.y?x.ll.y:U.ll.y,P=U.ur.y<x.ur.y?U.ur.y:x.ur.y;return{ll:{x:_,y:I},ur:{x:M,y:P}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let E=m*m,R=(U,x)=>{if(-m<U&&U<m&&-m<x&&x<m)return 0;let _=U-x;return _*_<E*U*x?0:U<x?-1:1};class b{constructor(){this.reset()}reset(){this.xRounder=new A,this.yRounder=new A}round(x,_){return{x:this.xRounder.round(x),y:this.yRounder.round(_)}}}class A{constructor(){this.tree=new l,this.round(0)}round(x){let _=this.tree.add(x),M=this.tree.prev(_);if(M!==null&&R(_.key,M.key)===0)return this.tree.remove(x),M.key;let I=this.tree.next(_);return I!==null&&R(_.key,I.key)===0?(this.tree.remove(x),I.key):x}}let w=new b,D=11102230246251565e-32,v=134217729,L=(3+8*D)*D;function F(U,x,_,M,I){let P,V,B,tt,j=x[0],yt=M[0],C=0,$=0;yt>j==yt>-j?(P=j,j=x[++C]):(P=yt,yt=M[++$]);let H=0;if(C<U&&$<_)for(yt>j==yt>-j?(V=j+P,B=P-(V-j),j=x[++C]):(V=yt+P,B=P-(V-yt),yt=M[++$]),P=V,B!==0&&(I[H++]=B);C<U&&$<_;)yt>j==yt>-j?(V=P+j,tt=V-P,B=P-(V-tt)+(j-tt),j=x[++C]):(V=P+yt,tt=V-P,B=P-(V-tt)+(yt-tt),yt=M[++$]),P=V,B!==0&&(I[H++]=B);for(;C<U;)V=P+j,tt=V-P,B=P-(V-tt)+(j-tt),j=x[++C],P=V,B!==0&&(I[H++]=B);for(;$<_;)V=P+yt,tt=V-P,B=P-(V-tt)+(yt-tt),yt=M[++$],P=V,B!==0&&(I[H++]=B);return(P!==0||H===0)&&(I[H++]=P),H}function z(U,x){let _=x[0];for(let M=1;M<U;M++)_+=x[M];return _}function W(U){return new Float64Array(U)}let Y=(3+16*D)*D,O=(2+12*D)*D,J=(9+64*D)*D*D,nt=W(4),Q=W(8),at=W(12),rt=W(16),et=W(4);function ut(U,x,_,M,I,P,V){let B,tt,j,yt,C,$,H,pt,mt,ht,vt,Mt,jt,qt,fe,pe,je,Le,Qe=U-I,Xe=_-I,sn=x-P,tn=M-P;qt=Qe*tn,$=v*Qe,H=$-($-Qe),pt=Qe-H,$=v*tn,mt=$-($-tn),ht=tn-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=sn*Xe,$=v*sn,H=$-($-sn),pt=sn-H,$=v*Xe,mt=$-($-Xe),ht=Xe-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,C=fe-vt,nt[0]=fe-(vt+C)+(C-je),Mt=qt+vt,C=Mt-qt,jt=qt-(Mt-C)+(vt-C),vt=jt-pe,C=jt-vt,nt[1]=jt-(vt+C)+(C-pe),Le=Mt+vt,C=Le-Mt,nt[2]=Mt-(Le-C)+(vt-C),nt[3]=Le;let dn=z(4,nt),rn=O*V;if(dn>=rn||-dn>=rn||(C=U-Qe,B=U-(Qe+C)+(C-I),C=_-Xe,j=_-(Xe+C)+(C-I),C=x-sn,tt=x-(sn+C)+(C-P),C=M-tn,yt=M-(tn+C)+(C-P),B===0&&tt===0&&j===0&&yt===0)||(rn=J*V+L*Math.abs(dn),dn+=Qe*yt+tn*B-(sn*j+Xe*tt),dn>=rn||-dn>=rn))return dn;qt=B*tn,$=v*B,H=$-($-B),pt=B-H,$=v*tn,mt=$-($-tn),ht=tn-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=tt*Xe,$=v*tt,H=$-($-tt),pt=tt-H,$=v*Xe,mt=$-($-Xe),ht=Xe-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,C=fe-vt,et[0]=fe-(vt+C)+(C-je),Mt=qt+vt,C=Mt-qt,jt=qt-(Mt-C)+(vt-C),vt=jt-pe,C=jt-vt,et[1]=jt-(vt+C)+(C-pe),Le=Mt+vt,C=Le-Mt,et[2]=Mt-(Le-C)+(vt-C),et[3]=Le;let Bs=F(4,nt,4,et,Q);qt=Qe*yt,$=v*Qe,H=$-($-Qe),pt=Qe-H,$=v*yt,mt=$-($-yt),ht=yt-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=sn*j,$=v*sn,H=$-($-sn),pt=sn-H,$=v*j,mt=$-($-j),ht=j-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,C=fe-vt,et[0]=fe-(vt+C)+(C-je),Mt=qt+vt,C=Mt-qt,jt=qt-(Mt-C)+(vt-C),vt=jt-pe,C=jt-vt,et[1]=jt-(vt+C)+(C-pe),Le=Mt+vt,C=Le-Mt,et[2]=Mt-(Le-C)+(vt-C),et[3]=Le;let kr=F(Bs,Q,4,et,at);qt=B*yt,$=v*B,H=$-($-B),pt=B-H,$=v*yt,mt=$-($-yt),ht=yt-mt,fe=pt*ht-(qt-H*mt-pt*mt-H*ht),pe=tt*j,$=v*tt,H=$-($-tt),pt=tt-H,$=v*j,mt=$-($-j),ht=j-mt,je=pt*ht-(pe-H*mt-pt*mt-H*ht),vt=fe-je,C=fe-vt,et[0]=fe-(vt+C)+(C-je),Mt=qt+vt,C=Mt-qt,jt=qt-(Mt-C)+(vt-C),vt=jt-pe,C=jt-vt,et[1]=jt-(vt+C)+(C-pe),Le=Mt+vt,C=Le-Mt,et[2]=Mt-(Le-C)+(vt-C),et[3]=Le;let Vr=F(kr,at,4,et,rt);return rt[Vr-1]}function At(U,x,_,M,I,P){let V=(x-P)*(_-I),B=(U-I)*(M-P),tt=V-B,j=Math.abs(V+B);return Math.abs(tt)>=Y*j?tt:-ut(U,x,_,M,I,P,j)}let Et=(U,x)=>U.x*x.y-U.y*x.x,Kt=(U,x)=>U.x*x.x+U.y*x.y,Xt=(U,x,_)=>{let M=At(U.x,U.y,x.x,x.y,_.x,_.y);return M>0?-1:M<0?1:0},Zt=U=>Math.sqrt(Kt(U,U)),ft=(U,x,_)=>{let M={x:x.x-U.x,y:x.y-U.y},I={x:_.x-U.x,y:_.y-U.y};return Et(I,M)/Zt(I)/Zt(M)},gt=(U,x,_)=>{let M={x:x.x-U.x,y:x.y-U.y},I={x:_.x-U.x,y:_.y-U.y};return Kt(I,M)/Zt(I)/Zt(M)},wt=(U,x,_)=>x.y===0?null:{x:U.x+x.x/x.y*(_-U.y),y:_},Ht=(U,x,_)=>x.x===0?null:{x:_,y:U.y+x.y/x.x*(_-U.x)},Ct=(U,x,_,M)=>{if(x.x===0)return Ht(_,M,U.x);if(M.x===0)return Ht(U,x,_.x);if(x.y===0)return wt(_,M,U.y);if(M.y===0)return wt(U,x,_.y);let I=Et(x,M);if(I==0)return null;let P={x:_.x-U.x,y:_.y-U.y},V=Et(P,x)/I,B=Et(P,M)/I,tt=U.x+B*x.x,j=_.x+V*M.x,yt=U.y+B*x.y,C=_.y+V*M.y,$=(tt+j)/2,H=(yt+C)/2;return{x:$,y:H}};class Nt{static compare(x,_){let M=Nt.comparePoints(x.point,_.point);return M!==0?M:(x.point!==_.point&&x.link(_),x.isLeft!==_.isLeft?x.isLeft?1:-1:Z.compare(x.segment,_.segment))}static comparePoints(x,_){return x.x<_.x?-1:x.x>_.x?1:x.y<_.y?-1:x.y>_.y?1:0}constructor(x,_){x.events===void 0?x.events=[this]:x.events.push(this),this.point=x,this.isLeft=_}link(x){if(x.point===this.point)throw new Error("Tried to link already linked events");let _=x.point.events;for(let M=0,I=_.length;M<I;M++){let P=_[M];this.point.events.push(P),P.point=this.point}this.checkForConsuming()}checkForConsuming(){let x=this.point.events.length;for(let _=0;_<x;_++){let M=this.point.events[_];if(M.segment.consumedBy===void 0)for(let I=_+1;I<x;I++){let P=this.point.events[I];P.consumedBy===void 0&&M.otherSE.point.events===P.otherSE.point.events&&M.segment.consume(P.segment)}}}getAvailableLinkedEvents(){let x=[];for(let _=0,M=this.point.events.length;_<M;_++){let I=this.point.events[_];I!==this&&!I.segment.ringOut&&I.segment.isInResult()&&x.push(I)}return x}getLeftmostComparator(x){let _=new Map,M=I=>{let P=I.otherSE;_.set(I,{sine:ft(this.point,x.point,P.point),cosine:gt(this.point,x.point,P.point)})};return(I,P)=>{_.has(I)||M(I),_.has(P)||M(P);let{sine:V,cosine:B}=_.get(I),{sine:tt,cosine:j}=_.get(P);return V>=0&&tt>=0?B<j?1:B>j?-1:0:V<0&&tt<0?B<j?-1:B>j?1:0:tt<V?-1:tt>V?1:0}}}let ae=0;class Z{static compare(x,_){let M=x.leftSE.point.x,I=_.leftSE.point.x,P=x.rightSE.point.x,V=_.rightSE.point.x;if(V<M)return 1;if(P<I)return-1;let B=x.leftSE.point.y,tt=_.leftSE.point.y,j=x.rightSE.point.y,yt=_.rightSE.point.y;if(M<I){if(tt<B&&tt<j)return 1;if(tt>B&&tt>j)return-1;let C=x.comparePoint(_.leftSE.point);if(C<0)return 1;if(C>0)return-1;let $=_.comparePoint(x.rightSE.point);return $!==0?$:-1}if(M>I){if(B<tt&&B<yt)return-1;if(B>tt&&B>yt)return 1;let C=_.comparePoint(x.leftSE.point);if(C!==0)return C;let $=x.comparePoint(_.rightSE.point);return $<0?1:$>0?-1:1}if(B<tt)return-1;if(B>tt)return 1;if(P<V){let C=_.comparePoint(x.rightSE.point);if(C!==0)return C}if(P>V){let C=x.comparePoint(_.rightSE.point);if(C<0)return 1;if(C>0)return-1}if(P!==V){let C=j-B,$=P-M,H=yt-tt,pt=V-I;if(C>$&&H<pt)return 1;if(C<$&&H>pt)return-1}return P>V?1:P<V||j<yt?-1:j>yt?1:x.id<_.id?-1:x.id>_.id?1:0}constructor(x,_,M,I){this.id=++ae,this.leftSE=x,x.segment=this,x.otherSE=_,this.rightSE=_,_.segment=this,_.otherSE=x,this.rings=M,this.windings=I}static fromRing(x,_,M){let I,P,V,B=Nt.comparePoints(x,_);if(B<0)I=x,P=_,V=1;else if(B>0)I=_,P=x,V=-1;else throw new Error(`Tried to create degenerate segment at [${x.x}, ${x.y}]`);let tt=new Nt(I,!0),j=new Nt(P,!1);return new Z(tt,j,[M],[V])}replaceRightSE(x){this.rightSE=x,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let x=this.leftSE.point.y,_=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:x<_?x:_},ur:{x:this.rightSE.point.x,y:x>_?x:_}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(x){return x.x===this.leftSE.point.x&&x.y===this.leftSE.point.y||x.x===this.rightSE.point.x&&x.y===this.rightSE.point.y}comparePoint(x){if(this.isAnEndpoint(x))return 0;let _=this.leftSE.point,M=this.rightSE.point,I=this.vector();if(_.x===M.x)return x.x===_.x?0:x.x<_.x?1:-1;let P=(x.y-_.y)/I.y,V=_.x+P*I.x;if(x.x===V)return 0;let B=(x.x-_.x)/I.x,tt=_.y+B*I.y;return x.y===tt?0:x.y<tt?-1:1}getIntersection(x){let _=this.bbox(),M=x.bbox(),I=g(_,M);if(I===null)return null;let P=this.leftSE.point,V=this.rightSE.point,B=x.leftSE.point,tt=x.rightSE.point,j=y(_,B)&&this.comparePoint(B)===0,yt=y(M,P)&&x.comparePoint(P)===0,C=y(_,tt)&&this.comparePoint(tt)===0,$=y(M,V)&&x.comparePoint(V)===0;if(yt&&j)return $&&!C?V:!$&&C?tt:null;if(yt)return C&&P.x===tt.x&&P.y===tt.y?null:P;if(j)return $&&V.x===B.x&&V.y===B.y?null:B;if($&&C)return null;if($)return V;if(C)return tt;let H=Ct(P,this.vector(),B,x.vector());return H===null||!y(I,H)?null:w.round(H.x,H.y)}split(x){let _=[],M=x.events!==void 0,I=new Nt(x,!0),P=new Nt(x,!1),V=this.rightSE;this.replaceRightSE(P),_.push(P),_.push(I);let B=new Z(I,V,this.rings.slice(),this.windings.slice());return Nt.comparePoints(B.leftSE.point,B.rightSE.point)>0&&B.swapEvents(),Nt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),M&&(I.checkForConsuming(),P.checkForConsuming()),_}swapEvents(){let x=this.rightSE;this.rightSE=this.leftSE,this.leftSE=x,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let _=0,M=this.windings.length;_<M;_++)this.windings[_]*=-1}consume(x){let _=this,M=x;for(;_.consumedBy;)_=_.consumedBy;for(;M.consumedBy;)M=M.consumedBy;let I=Z.compare(_,M);if(I!==0){if(I>0){let P=_;_=M,M=P}if(_.prev===M){let P=_;_=M,M=P}for(let P=0,V=M.rings.length;P<V;P++){let B=M.rings[P],tt=M.windings[P],j=_.rings.indexOf(B);j===-1?(_.rings.push(B),_.windings.push(tt)):_.windings[j]+=tt}M.rings=null,M.windings=null,M.consumedBy=_,M.leftSE.consumedBy=_.leftSE,M.rightSE.consumedBy=_.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let x=this.prev.consumedBy||this.prev;this._beforeState=x.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let x=this.beforeState();this._afterState={rings:x.rings.slice(0),windings:x.windings.slice(0),multiPolys:[]};let _=this._afterState.rings,M=this._afterState.windings,I=this._afterState.multiPolys;for(let B=0,tt=this.rings.length;B<tt;B++){let j=this.rings[B],yt=this.windings[B],C=_.indexOf(j);C===-1?(_.push(j),M.push(yt)):M[C]+=yt}let P=[],V=[];for(let B=0,tt=_.length;B<tt;B++){if(M[B]===0)continue;let j=_[B],yt=j.poly;if(V.indexOf(yt)===-1)if(j.isExterior)P.push(yt);else{V.indexOf(yt)===-1&&V.push(yt);let C=P.indexOf(j.poly);C!==-1&&P.splice(C,1)}}for(let B=0,tt=P.length;B<tt;B++){let j=P[B].multiPoly;I.indexOf(j)===-1&&I.push(j)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let x=this.beforeState().multiPolys,_=this.afterState().multiPolys;switch(kt.type){case"union":{let M=x.length===0,I=_.length===0;this._isInResult=M!==I;break}case"intersection":{let M,I;x.length<_.length?(M=x.length,I=_.length):(M=_.length,I=x.length),this._isInResult=I===kt.numMultiPolys&&M<I;break}case"xor":{let M=Math.abs(x.length-_.length);this._isInResult=M%2===1;break}case"difference":{let M=I=>I.length===1&&I[0].isSubject;this._isInResult=M(x)!==M(_);break}default:throw new Error(`Unrecognized operation type found ${kt.type}`)}return this._isInResult}}class dt{constructor(x,_,M){if(!Array.isArray(x)||x.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=_,this.isExterior=M,this.segments=[],typeof x[0][0]!="number"||typeof x[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let I=w.round(x[0][0],x[0][1]);this.bbox={ll:{x:I.x,y:I.y},ur:{x:I.x,y:I.y}};let P=I;for(let V=1,B=x.length;V<B;V++){if(typeof x[V][0]!="number"||typeof x[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let tt=w.round(x[V][0],x[V][1]);tt.x===P.x&&tt.y===P.y||(this.segments.push(Z.fromRing(P,tt,this)),tt.x<this.bbox.ll.x&&(this.bbox.ll.x=tt.x),tt.y<this.bbox.ll.y&&(this.bbox.ll.y=tt.y),tt.x>this.bbox.ur.x&&(this.bbox.ur.x=tt.x),tt.y>this.bbox.ur.y&&(this.bbox.ur.y=tt.y),P=tt)}(I.x!==P.x||I.y!==P.y)&&this.segments.push(Z.fromRing(P,I,this))}getSweepEvents(){let x=[];for(let _=0,M=this.segments.length;_<M;_++){let I=this.segments[_];x.push(I.leftSE),x.push(I.rightSE)}return x}}class _t{constructor(x,_){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new dt(x[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let M=1,I=x.length;M<I;M++){let P=new dt(x[M],this,!1);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.interiorRings.push(P)}this.multiPoly=_}getSweepEvents(){let x=this.exteriorRing.getSweepEvents();for(let _=0,M=this.interiorRings.length;_<M;_++){let I=this.interiorRings[_].getSweepEvents();for(let P=0,V=I.length;P<V;P++)x.push(I[P])}return x}}class xt{constructor(x,_){if(!Array.isArray(x))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof x[0][0][0]=="number"&&(x=[x])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let M=0,I=x.length;M<I;M++){let P=new _t(x[M],this);P.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=P.bbox.ll.x),P.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=P.bbox.ll.y),P.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=P.bbox.ur.x),P.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=P.bbox.ur.y),this.polys.push(P)}this.isSubject=_}getSweepEvents(){let x=[];for(let _=0,M=this.polys.length;_<M;_++){let I=this.polys[_].getSweepEvents();for(let P=0,V=I.length;P<V;P++)x.push(I[P])}return x}}class St{static factory(x){let _=[];for(let M=0,I=x.length;M<I;M++){let P=x[M];if(!P.isInResult()||P.ringOut)continue;let V=null,B=P.leftSE,tt=P.rightSE,j=[B],yt=B.point,C=[];for(;V=B,B=tt,j.push(B),B.point!==yt;)for(;;){let $=B.getAvailableLinkedEvents();if($.length===0){let mt=j[0].point,ht=j[j.length-1].point;throw new Error(`Unable to complete output ring starting at [${mt.x}, ${mt.y}]. Last matching segment found ends at [${ht.x}, ${ht.y}].`)}if($.length===1){tt=$[0].otherSE;break}let H=null;for(let mt=0,ht=C.length;mt<ht;mt++)if(C[mt].point===B.point){H=mt;break}if(H!==null){let mt=C.splice(H)[0],ht=j.splice(mt.index);ht.unshift(ht[0].otherSE),_.push(new St(ht.reverse()));continue}C.push({index:j.length,point:B.point});let pt=B.getLeftmostComparator(V);tt=$.sort(pt)[0].otherSE;break}_.push(new St(j))}return _}constructor(x){this.events=x;for(let _=0,M=x.length;_<M;_++)x[_].segment.ringOut=this;this.poly=null}getGeom(){let x=this.events[0].point,_=[x];for(let j=1,yt=this.events.length-1;j<yt;j++){let C=this.events[j].point,$=this.events[j+1].point;Xt(C,x,$)!==0&&(_.push(C),x=C)}if(_.length===1)return null;let M=_[0],I=_[1];Xt(M,x,I)===0&&_.shift(),_.push(_[0]);let P=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:_.length-1,B=this.isExteriorRing()?_.length:-1,tt=[];for(let j=V;j!=B;j+=P)tt.push([_[j].x,_[j].y]);return tt}isExteriorRing(){if(this._isExteriorRing===void 0){let x=this.enclosingRing();this._isExteriorRing=x?!x.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let x=this.events[0];for(let I=1,P=this.events.length;I<P;I++){let V=this.events[I];Nt.compare(x,V)>0&&(x=V)}let _=x.segment.prevInResult(),M=_?_.prevInResult():null;for(;;){if(!_)return null;if(!M)return _.ringOut;if(M.ringOut!==_.ringOut)return M.ringOut.enclosingRing()!==_.ringOut?_.ringOut:_.ringOut.enclosingRing();_=M.prevInResult(),M=_?_.prevInResult():null}}}class zt{constructor(x){this.exteriorRing=x,x.poly=this,this.interiorRings=[]}addInterior(x){this.interiorRings.push(x),x.poly=this}getGeom(){let x=[this.exteriorRing.getGeom()];if(x[0]===null)return null;for(let _=0,M=this.interiorRings.length;_<M;_++){let I=this.interiorRings[_].getGeom();I!==null&&x.push(I)}return x}}class Ot{constructor(x){this.rings=x,this.polys=this._composePolys(x)}getGeom(){let x=[];for(let _=0,M=this.polys.length;_<M;_++){let I=this.polys[_].getGeom();I!==null&&x.push(I)}return x}_composePolys(x){let _=[];for(let M=0,I=x.length;M<I;M++){let P=x[M];if(!P.poly)if(P.isExteriorRing())_.push(new zt(P));else{let V=P.enclosingRing();V.poly||_.push(new zt(V)),V.poly.addInterior(P)}}return _}}class Vt{constructor(x){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z.compare;this.queue=x,this.tree=new l(_),this.segments=[]}process(x){let _=x.segment,M=[];if(x.consumedBy)return x.isLeft?this.queue.remove(x.otherSE):this.tree.remove(_),M;let I=x.isLeft?this.tree.add(_):this.tree.find(_);if(!I)throw new Error(`Unable to find segment #${_.id} [${_.leftSE.point.x}, ${_.leftSE.point.y}] -> [${_.rightSE.point.x}, ${_.rightSE.point.y}] in SweepLine tree.`);let P=I,V=I,B,tt;for(;B===void 0;)P=this.tree.prev(P),P===null?B=null:P.key.consumedBy===void 0&&(B=P.key);for(;tt===void 0;)V=this.tree.next(V),V===null?tt=null:V.key.consumedBy===void 0&&(tt=V.key);if(x.isLeft){let j=null;if(B){let C=B.getIntersection(_);if(C!==null&&(_.isAnEndpoint(C)||(j=C),!B.isAnEndpoint(C))){let $=this._splitSafely(B,C);for(let H=0,pt=$.length;H<pt;H++)M.push($[H])}}let yt=null;if(tt){let C=tt.getIntersection(_);if(C!==null&&(_.isAnEndpoint(C)||(yt=C),!tt.isAnEndpoint(C))){let $=this._splitSafely(tt,C);for(let H=0,pt=$.length;H<pt;H++)M.push($[H])}}if(j!==null||yt!==null){let C=null;j===null?C=yt:yt===null?C=j:C=Nt.comparePoints(j,yt)<=0?j:yt,this.queue.remove(_.rightSE),M.push(_.rightSE);let $=_.split(C);for(let H=0,pt=$.length;H<pt;H++)M.push($[H])}M.length>0?(this.tree.remove(_),M.push(x)):(this.segments.push(_),_.prev=B)}else{if(B&&tt){let j=B.getIntersection(tt);if(j!==null){if(!B.isAnEndpoint(j)){let yt=this._splitSafely(B,j);for(let C=0,$=yt.length;C<$;C++)M.push(yt[C])}if(!tt.isAnEndpoint(j)){let yt=this._splitSafely(tt,j);for(let C=0,$=yt.length;C<$;C++)M.push(yt[C])}}}this.tree.remove(_)}return M}_splitSafely(x,_){this.tree.remove(x);let M=x.rightSE;this.queue.remove(M);let I=x.split(_);return I.push(M),x.consumedBy===void 0&&this.tree.add(x),I}}let Gt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,k=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class ne{run(x,_,M){kt.type=x,w.reset();let I=[new xt(_,!0)];for(let C=0,$=M.length;C<$;C++)I.push(new xt(M[C],!1));if(kt.numMultiPolys=I.length,kt.type==="difference"){let C=I[0],$=1;for(;$<I.length;)g(I[$].bbox,C.bbox)!==null?$++:I.splice($,1)}if(kt.type==="intersection")for(let C=0,$=I.length;C<$;C++){let H=I[C];for(let pt=C+1,mt=I.length;pt<mt;pt++)if(g(H.bbox,I[pt].bbox)===null)return[]}let P=new l(Nt.compare);for(let C=0,$=I.length;C<$;C++){let H=I[C].getSweepEvents();for(let pt=0,mt=H.length;pt<mt;pt++)if(P.insert(H[pt]),P.size>Gt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new Vt(P),B=P.size,tt=P.pop();for(;tt;){let C=tt.key;if(P.size===B){let H=C.segment;throw new Error(`Unable to pop() ${C.isLeft?"left":"right"} SweepEvent [${C.point.x}, ${C.point.y}] from segment #${H.id} [${H.leftSE.point.x}, ${H.leftSE.point.y}] -> [${H.rightSE.point.x}, ${H.rightSE.point.y}] from queue.`)}if(P.size>Gt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>k)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let $=V.process(C);for(let H=0,pt=$.length;H<pt;H++){let mt=$[H];mt.consumedBy===void 0&&P.insert(mt)}B=P.size,tt=P.pop()}w.reset();let j=St.factory(V.segments);return new Ot(j).getGeom()}}let kt=new ne;var ct={union:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),M=1;M<x;M++)_[M-1]=arguments[M];return kt.run("union",U,_)},intersection:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),M=1;M<x;M++)_[M-1]=arguments[M];return kt.run("intersection",U,_)},xor:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),M=1;M<x;M++)_[M-1]=arguments[M];return kt.run("xor",U,_)},difference:function(U){for(var x=arguments.length,_=new Array(x>1?x-1:0),M=1;M<x;M++)_[M-1]=arguments[M];return kt.run("difference",U,_)}};return ct}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Dh=0,Xl=1,Uh=2;var Vi=1,Fh=2,As=3,Mi=0,Ke=1,kn=2,Vn=0,Rs=1,Sr=2,ql=3,Yl=4,Oh=5;var Gi=100,Bh=101,zh=102,kh=103,Vh=104,Gh=200,Hh=201,Wh=202,Xh=203,Zl=204,Jl=205,qh=206,Yh=207,Zh=208,Jh=209,$h=210,Kh=211,jh=212,Qh=213,tu=214,_o=0,yo=1,vo=2,fs=3,So=4,bo=5,Mo=6,Eo=7,na=0,eu=1,nu=2,wn=0,$l=1,Kl=2,jl=3,br=4,Ql=5,tc=6,ec=7;var nc=300,Ei=301,Hi=302,ia=303,sa=304,Mr=306,Di=1e3,Dn=1001,wo=1002,Ue=1003,iu=1004;var Er=1005;var Be=1006,ra=1007;var wi=1008;var nn=1009,ic=1010,sc=1011,Cs=1012,oa=1013,Tn=1014,An=1015,Rn=1016,aa=1017,la=1018,Is=1020,rc=35902,oc=35899,ac=1021,lc=1022,xn=1023,Fn=1026,Ti=1027,cc=1028,ca=1029,Ai=1030,ha=1031;var ua=1033,wr=33776,Tr=33777,Ar=33778,Rr=33779,fa=35840,da=35841,pa=35842,ma=35843,ga=36196,xa=37492,_a=37496,ya=37488,va=37489,Cr=37490,Sa=37491,ba=37808,Ma=37809,Ea=37810,wa=37811,Ta=37812,Aa=37813,Ra=37814,Ca=37815,Ia=37816,Pa=37817,La=37818,Na=37819,Da=37820,Ua=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,Ir=36285,Va=36286;var Js=2300,To=2301,go=2302,Pl=2303,Ll=2400,Nl=2401,Dl=2402;var su=3200;var Pr=0,ru=1,ni="",Re="srgb",$s="srgb-linear",Ks="linear",he="srgb";var xo=7680;var ou=519,au=512,lu=513,cu=514,Ga=515,hu=516,uu=517,Ha=518,fu=519,du=35044,Wa=35048;var hc="300 es",bn=2e3,ds=2001;function Zf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pu(){let i=js("canvas");return i.style.display="block",i}var jc={},ps=null;function uc(...i){let t="THREE."+i.shift();ps?ps("log",t,...i):console.log(t,...i)}function mu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=mu(i);let t="THREE."+i.shift();if(ps)ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=mu(i);let t="THREE."+i.shift();if(ps)ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ni(...i){let t=i.join(" ");t in jc||(jc[t]=!0,Wt(...i))}function gu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xu={[_o]:yo,[vo]:Mo,[So]:Eo,[fs]:bo,[yo]:_o,[Mo]:vo,[Eo]:So,[bo]:fs},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=1234567,Xs=Math.PI/180,ms=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function fc(i,t){return(i%t+t)%t}function $f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kf(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function jf(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function Qf(i,t=1){return t-Math.abs(fc(i,t*2)-t)}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function id(i,t){return i+Math.random()*(t-i)}function sd(i){return i*(.5-Math.random())}function rd(i){i!==void 0&&(Qc=i);let t=Qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(i){return i*Xs}function ad(i){return i*ms}function ld(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ud(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),u=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ii={DEG2RAD:Xs,RAD2DEG:ms,generateUUID:Wi,clamp:ie,euclideanModulo:fc,mapLinear:$f,inverseLerp:Kf,lerp:qs,damp:jf,pingpong:Qf,smoothstep:td,smootherstep:ed,randInt:nd,randFloat:id,randFloatSpread:sd,seededRandom:rd,degToRad:od,radToDeg:ad,isPowerOfTwo:ld,ceilPowerOfTwo:cd,floorPowerOfTwo:hd,setQuaternionFromProperEuler:ud,normalize:Ye,denormalize:hs},bt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],p=r[o+2],y=r[o+3];if(f!==y||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*y;g<0&&(u=-u,d=-d,p=-p,y=-y,g=-g);let m=1-a;if(g<.9995){let E=Math.acos(g),R=Math.sin(E);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R,l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+y*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+y*a;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new G,th=new gn,$t=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],y=s[0],g=s[3],m=s[6],E=s[1],R=s[4],b=s[7],A=s[2],w=s[5],D=s[8];return r[0]=o*y+a*E+l*A,r[3]=o*g+a*R+l*w,r[6]=o*m+a*b+l*D,r[1]=c*y+h*E+f*A,r[4]=c*g+h*R+f*w,r[7]=c*m+h*b+f*D,r[2]=u*y+d*E+p*A,r[5]=u*g+d*R+p*w,r[8]=u*m+d*b+p*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=e*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(t,e)),this}rotate(t){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-t)),this}translate(t,e){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},al=new $t,eh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fd(){let i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:t,whitePoint:n,transfer:Ks,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:he,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var re=fd();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ki,Ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ki===void 0&&(Ki=js("canvas")),Ki.width=t.width,Ki.height=t.height;let s=Ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dd=0,gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var pd=0,cl=new G,Je=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=Be,o=wi,a=xn,l=nn,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Wi(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=nc;Je.DEFAULT_ANISOTROPY=1;var be=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,b=(d+1)/2,A=(m+1)/2,w=(h+u)/4,D=(f+y)/4,v=(p+g)/4;return R>b&&R>A?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=D/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=v/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=D/r,s=v/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-p)*(g-p)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(g-p)/E,this.y=(f-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ro=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Ro{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qs=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,f,u,d,p,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,d,p,y,g)}set(t,e,n,s,r,o,a,l,c,h,f,u,d,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,p=a*h,y=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,y=c*f;e[0]=u+y*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,y=c*f;e[0]=u-y*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,p=a*h,y=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,y=a*c;e[0]=l*h,e[4]=y-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-y*f}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,y=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(n,on),hi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(n,on)),hi.normalize(),Wr.crossVectors(on,hi),s[0]=hi.x,s[4]=Wr.x,s[8]=on.x,s[1]=hi.y,s[5]=Wr.y,s[9]=on.y,s[2]=hi.z,s[6]=Wr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],y=n[6],g=n[10],m=n[14],E=n[3],R=n[7],b=n[11],A=n[15],w=s[0],D=s[4],v=s[8],L=s[12],F=s[1],z=s[5],W=s[9],Y=s[13],O=s[2],J=s[6],nt=s[10],Q=s[14],at=s[3],rt=s[7],et=s[11],ut=s[15];return r[0]=o*w+a*F+l*O+c*at,r[4]=o*D+a*z+l*J+c*rt,r[8]=o*v+a*W+l*nt+c*et,r[12]=o*L+a*Y+l*Q+c*ut,r[1]=h*w+f*F+u*O+d*at,r[5]=h*D+f*z+u*J+d*rt,r[9]=h*v+f*W+u*nt+d*et,r[13]=h*L+f*Y+u*Q+d*ut,r[2]=p*w+y*F+g*O+m*at,r[6]=p*D+y*z+g*J+m*rt,r[10]=p*v+y*W+g*nt+m*et,r[14]=p*L+y*Y+g*Q+m*ut,r[3]=E*w+R*F+b*O+A*at,r[7]=E*D+R*z+b*J+A*rt,r[11]=E*v+R*W+b*nt+A*et,r[15]=E*L+R*Y+b*Q+A*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],y=t[7],g=t[11],m=t[15],E=l*d-c*u,R=a*d-c*f,b=a*u-l*f,A=o*d-c*h,w=o*u-l*h,D=o*f-a*h;return e*(y*E-g*R+m*b)-n*(p*E-g*A+m*w)+s*(p*R-y*A+m*D)-r*(p*b-y*w+g*D)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],y=t[13],g=t[14],m=t[15],E=e*a-n*o,R=e*l-s*o,b=e*c-r*o,A=n*l-s*a,w=n*c-r*a,D=s*c-r*l,v=h*y-f*p,L=h*g-u*p,F=h*m-d*p,z=f*g-u*y,W=f*m-d*y,Y=u*m-d*g,O=E*Y-R*W+b*z+A*F-w*L+D*v;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/O;return t[0]=(a*Y-l*W+c*z)*J,t[1]=(s*W-n*Y-r*z)*J,t[2]=(y*D-g*w+m*A)*J,t[3]=(u*w-f*D-d*A)*J,t[4]=(l*F-o*Y-c*L)*J,t[5]=(e*Y-s*F+r*L)*J,t[6]=(g*b-p*D-m*R)*J,t[7]=(h*D-u*b+d*R)*J,t[8]=(o*W-a*F+c*v)*J,t[9]=(n*F-e*W-r*v)*J,t[10]=(p*w-y*b+m*E)*J,t[11]=(f*b-h*w-d*E)*J,t[12]=(a*L-o*z-l*v)*J,t[13]=(e*z-n*L+s*v)*J,t[14]=(y*R-p*A-g*E)*J,t[15]=(h*A-f*R+u*E)*J,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,y=o*h,g=o*f,m=a*f,E=l*c,R=l*h,b=l*f,A=n.x,w=n.y,D=n.z;return s[0]=(1-(y+m))*A,s[1]=(d+b)*A,s[2]=(p-R)*A,s[3]=0,s[4]=(d-b)*w,s[5]=(1-(u+m))*w,s[6]=(g+E)*w,s[7]=0,s[8]=(p+R)*D,s[9]=(g-E)*D,s[10]=(1-(u+y))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ji.set(s[0],s[1],s[2]).length(),a=ji.set(s[4],s[5],s[6]).length(),l=ji.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);let c=1/o,h=1/a,f=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=bn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,y;if(l)p=r/(o-r),y=o*r/(o-r);else if(a===bn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ds)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),p,y;if(l)p=1/(o-r),y=o/(o-r);else if(a===bn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===ds)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new G,yn=new ue,md=new G(0,0,0),gd=new G(1,1,1),hi=new G,Wr=new G,on=new G,ih=new ue,sh=new gn,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xd=0,rh=new G,Qi=new gn,qn=new ue,Xr=new G,zs=new G,_d=new G,yd=new gn,oh=new G(1,0,0),ah=new G(0,1,0),lh=new G(0,0,1),ch={type:"added"},vd={type:"removed"},ts={type:"childadded",child:null},hl={type:"childremoved",child:null},Fe=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Bn,n=new gn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new $t}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(zs,Xr,this.up):qn.lookAt(Xr,zs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),ts.child=t,this.dispatchEvent(ts),ts.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),hl.child=t,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fe.DEFAULT_UP=new G(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Se=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},qr={h:0,s:0,l:0};function ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=fc(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ul(o,r,t+1/3),this.g=ul(o,r,t),this.b=ul(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return re.workingToColorSpace(Ve.copy(this),t),Math.round(ie(Ve.r*255,0,255))*65536+Math.round(ie(Ve.g*255,0,255))*256+Math.round(ie(Ve.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Re){re.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(qr);let n=qs(ui.h,qr.h,e),s=qs(ui.s,qr.s,e),r=qs(ui.l,qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Jt;Jt.NAMES=_u;var tr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new G,Yn=new G,fl=new G,Zn=new G,es=new G,ns=new G,hh=new G,dl=new G,pl=new G,ml=new G,gl=new be,xl=new be,_l=new be,mi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Yn.subVectors(n,e),fl.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Yn),l=vn.dot(fl),c=Yn.dot(Yn),h=Yn.dot(fl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return gl.setScalar(0),xl.setScalar(0),_l.setScalar(0),gl.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(gl,r.x),o.addScaledVector(xl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Yn.subVectors(t,e),vn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),vn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;es.subVectors(s,n),ns.subVectors(r,n),dl.subVectors(t,n);let l=es.dot(dl),c=ns.dot(dl);if(l<=0&&c<=0)return e.copy(n);pl.subVectors(t,s);let h=es.dot(pl),f=ns.dot(pl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(es,o);ml.subVectors(t,r);let d=es.dot(ml),p=ns.dot(ml);if(p>=0&&d<=p)return e.copy(r);let y=d*c-l*p;if(y<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(ns,a);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return hh.subVectors(r,s),a=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(hh,a);let m=1/(g+y+u);return o=y*m,a=u*m,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Zr.subVectors(this.max,ks),is.subVectors(t.a,ks),ss.subVectors(t.b,ks),rs.subVectors(t.c,ks),fi.subVectors(ss,is),di.subVectors(rs,ss),Ci.subVectors(is,rs);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ci.z,Ci.y,fi.z,0,-fi.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!yl(e,is,ss,rs,Zr)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,is,ss,rs,Zr))?!1:(Jr.crossVectors(fi,di),e=[Jr.x,Jr.y,Jr.z],yl(e,is,ss,rs,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new G,new G,new G,new G,new G,new G,new G,new G],Sn=new G,Yr=new zn,is=new G,ss=new G,rs=new G,fi=new G,di=new G,Ci=new G,ks=new G,Zr=new G,Jr=new G,Ii=new G;function yl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ii.fromArray(i,r);let a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ae=new G,$r=new bt,bd=0,De=class extends On{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=du,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var nr=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Md=new zn,Vs=new G,vl=new G,gi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Md.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(vl)),this.expandByPoint(Vs.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ed=0,mn=new ue,Sl=new Fe,os=new G,an=new zn,Gs=new zn,Ne=new G,Me=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?nr:er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(an.min,Gs.min),an.expandByPoint(Ne),Ne.addVectors(an.max,Gs.max),an.expandByPoint(Ne)):(an.expandByPoint(Gs.min),an.expandByPoint(Gs.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),Ne.add(os)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new G,l[v]=new G;let c=new G,h=new G,f=new G,u=new bt,d=new bt,p=new bt,y=new G,g=new G;function m(v,L,F){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,F),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,F),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let z=1/(d.x*p.y-p.x*d.y);isFinite(z)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(z),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(z),a[v].add(y),a[L].add(y),a[F].add(y),l[v].add(g),l[L].add(g),l[F].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,L=E.length;v<L;++v){let F=E[v],z=F.start,W=F.count;for(let Y=z,O=z+W;Y<O;Y+=3)m(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let R=new G,b=new G,A=new G,w=new G;function D(v){A.fromBufferAttribute(s,v),w.copy(A);let L=a[v];R.copy(L),R.sub(A.multiplyScalar(A.dot(L))).normalize(),b.crossVectors(w,L);let z=b.dot(l[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,z)}for(let v=0,L=E.length;v<L;++v){let F=E[v],z=F.start,W=F.count;for(let Y=z,O=z+W;Y<O;Y+=3)D(t.getX(Y+0)),D(t.getX(Y+1)),D(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,f=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new De(u,h,f)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bl=new G,wd=new G,Td=new $t,ln=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bl.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Td.getNormalMatrix(t),s=this.coplanarPoint(bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ad=0,Mn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Rs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var $n=new G,Ml=new G,Kr=new G,jr=new G,Ui=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ml.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),jr.copy(this.origin).sub(Ml);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=jr.dot(this.direction),l=-jr.dot(Kr),c=jr.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let y=1/h;f*=y,u*=y,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ml).addScaledVector(Kr,u),d}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,y=e.y-o.y,g=e.z-o.z,m=n.x-o.x,E=n.y-o.y,R=n.z-o.z,b=Math.abs(l),A=Math.abs(c),w=Math.abs(h),D,v,L,F,z,W,Y,O,J,nt,Q,at;if(b>=A&&b>=w?(L=l,W=f,J=p,at=m,l>=0?(D=c,v=h,F=u,z=d,Y=y,O=g,nt=E,Q=R):(D=h,v=c,F=d,z=u,Y=g,O=y,nt=R,Q=E)):A>=w?(L=c,W=u,J=y,at=E,c>=0?(D=h,v=l,F=d,z=f,Y=g,O=p,nt=R,Q=m):(D=l,v=h,F=f,z=d,Y=p,O=g,nt=m,Q=R)):(L=h,W=d,J=g,at=R,h>=0?(D=l,v=c,F=f,z=u,Y=p,O=y,nt=m,Q=E):(D=c,v=l,F=u,z=f,Y=y,O=p,nt=E,Q=m)),L===0)return null;let rt=D/L,et=v/L,ut=1/L,At=F-rt*W,Et=z-et*W,Kt=Y-rt*J,Xt=O-et*J,Zt=nt-rt*at,ft=Q-et*at,gt=Zt*Xt-ft*Kt,wt=At*ft-Et*Zt,Ht=Kt*Et-Xt*At;if(s){if(gt<0||wt<0||Ht<0)return null}else if((gt<0||wt<0||Ht<0)&&(gt>0||wt>0||Ht>0))return null;let Ct=gt+wt+Ht;if(Ct===0)return null;let Nt=ut*(gt*W+wt*J+Ht*at);return(Ct>0?Nt<0:Nt>0)?null:this.at(Nt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jn=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},uh=new ue,Pi=new Ui,Qr=new gi,fh=new G,to=new G,eo=new G,no=new G,El=new G,io=new G,dh=new G,so=new G,xe=class extends Fe{constructor(t=new Me,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(El.fromBufferAttribute(f,t),o?io.addScaledVector(El,h):io.addScaledVector(El.sub(e),h))}e.add(io)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Qr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Qr,fh)===null||Pi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=o[g.materialIndex],E=Math.max(g.start,d.start),R=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=E,A=R;b<A;b+=3){let w=a.getX(b),D=a.getX(b+1),v=a.getX(b+2);s=ro(this,m,t,n,c,h,f,w,D,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=p,m=y;g<m;g+=3){let E=a.getX(g),R=a.getX(g+1),b=a.getX(g+2);s=ro(this,o,t,n,c,h,f,E,R,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,y=u.length;p<y;p++){let g=u[p],m=o[g.materialIndex],E=Math.max(g.start,d.start),R=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=E,A=R;b<A;b+=3){let w=b,D=b+1,v=b+2;s=ro(this,m,t,n,c,h,f,w,D,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=p,m=y;g<m;g+=3){let E=g,R=g+1,b=g+2;s=ro(this,o,t,n,c,h,f,E,R,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Rd(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:i}}function ro(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,to),i.getVertexPosition(l,eo),i.getVertexPosition(c,no);let h=Rd(i,t,e,n,to,eo,no,dh);if(h){let f=new G;mi.getBarycoord(dh,to,eo,no,f),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,f,new bt)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,f,new bt)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};mi.getNormal(to,eo,no,u.normal),h.face=u,h.barycoord=f}return h}var Io=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ue,h=Ue,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=new gi,Cd=new bt(.5,.5),oo=new G,ys=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],y=r[9],g=r[10],m=r[11],E=r[12],R=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-o,d-h,m-p,A-E).normalize(),s[1].setComponents(c+o,d+h,m+p,A+E).normalize(),s[2].setComponents(c+a,d+f,m+y,A+R).normalize(),s[3].setComponents(c-a,d-f,m-y,A-R).normalize(),n)s[4].setComponents(l,u,g,b).normalize(),s[5].setComponents(c-l,d-u,m-g,A-b).normalize();else if(s[4].setComponents(c-l,d-u,m-g,A-b).normalize(),e===bn)s[5].setComponents(c+l,d+u,m+g,A+b).normalize();else if(e===ds)s[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=Cd.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vs=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Po=new G,Lo=new G,ph=new ue,Hs=new Ui,ao=new gi,wl=new G,mh=new G,No=class extends Fe{constructor(t=new Me,e=new vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Po.fromBufferAttribute(e,s-1),Lo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Lo);t.setAttribute("lineDistance",new oe(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,t.ray.intersectsSphere(ao)===!1)return;ph.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(ph);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=d,g=p-1;y<g;y+=c){let m=h.getX(y),E=h.getX(y+1),R=lo(this,t,Hs,l,m,E,y);R&&e.push(R)}if(this.isLineLoop){let y=h.getX(p-1),g=h.getX(d),m=lo(this,t,Hs,l,y,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let y=d,g=p-1;y<g;y+=c){let m=lo(this,t,Hs,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=lo(this,t,Hs,l,p-1,d,p-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Po.fromBufferAttribute(a,s),Lo.fromBufferAttribute(a,r),e.distanceSqToSegment(Po,Lo,wl,mh)>n)return;wl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wl);if(!(c<t.near||c>t.far))return{distance:c,point:mh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var gh=new G,xh=new G,ir=class extends No{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gh.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gh.distanceTo(xh);t.setAttribute("lineDistance",new oe(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ss=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_h=new ue,Ul=new Ui,co=new gi,ho=new G,sr=class extends Fe{constructor(t=new Me,e=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;_h.copy(s).invert(),Ul.copy(t.ray).applyMatrix4(_h);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,y=d;p<y;p++){let g=c.getX(p);ho.fromBufferAttribute(f,g),yh(ho,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,y=d;p<y;p++)ho.fromBufferAttribute(f,p),yh(ho,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yh(i,t,e,n,s,r,o){let a=Ul.distanceSqToPoint(i);if(a<e){let l=new G;Ul.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var rr=class extends Je{constructor(t=[],e=Ei,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bs=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends Je{constructor(t,e,n=Tn,s,r,o,a=Ue,l=Ue,c,h=Fn,f=1){if(h!==Fn&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Do=class extends xi{constructor(t,e=Tn,n=Ei,s,r,o=Ue,a=Ue,l,c=Fn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},or=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ge=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function p(y,g,m,E,R,b,A,w,D,v,L){let F=b/D,z=A/v,W=b/2,Y=A/2,O=w/2,J=D+1,nt=v+1,Q=0,at=0,rt=new G;for(let et=0;et<nt;et++){let ut=et*z-Y;for(let At=0;At<J;At++){let Et=At*F-W;rt[y]=Et*E,rt[g]=ut*R,rt[m]=O,c.push(rt.x,rt.y,rt.z),rt[y]=0,rt[g]=0,rt[m]=w>0?1:-1,h.push(rt.x,rt.y,rt.z),f.push(At/D),f.push(1-et/v),Q+=1}}for(let et=0;et<v;et++)for(let ut=0;ut<D;ut++){let At=u+ut+J*et,Et=u+ut+J*(et+1),Kt=u+(ut+1)+J*(et+1),Xt=u+(ut+1)+J*et;l.push(At,Et,Xt),l.push(Et,Kt,Xt),at+=6}a.addGroup(d,at,L),d+=at,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fi=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,y=[],g=n/2,m=0;E(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function E(){let b=new G,A=new G,w=0,D=(e-t)/n;for(let v=0;v<=r;v++){let L=[],F=v/r,z=F*(e-t)+t;for(let W=0;W<=s;W++){let Y=W/s,O=Y*l+a,J=Math.sin(O),nt=Math.cos(O);A.x=z*J,A.y=-F*n+g,A.z=z*nt,f.push(A.x,A.y,A.z),b.set(J,D,nt).normalize(),u.push(b.x,b.y,b.z),d.push(Y,1-F),L.push(p++)}y.push(L)}for(let v=0;v<s;v++)for(let L=0;L<r;L++){let F=y[L][v],z=y[L+1][v],W=y[L+1][v+1],Y=y[L][v+1];(t>0||L!==0)&&(h.push(F,z,Y),w+=3),(e>0||L!==r-1)&&(h.push(z,W,Y),w+=3)}c.addGroup(m,w,0),m+=w}function R(b){let A=p,w=new bt,D=new G,v=0,L=b===!0?t:e,F=b===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,g*F,0),u.push(0,F,0),d.push(.5,.5),p++;let z=p;for(let W=0;W<=s;W++){let O=W/s*l+a,J=Math.cos(O),nt=Math.sin(O);D.x=L*nt,D.y=g*F,D.z=L*J,f.push(D.x,D.y,D.z),u.push(0,F,0),w.x=J*.5+.5,w.y=nt*.5*F+.5,d.push(w.x,w.y),p++}for(let W=0;W<s;W++){let Y=A+W,O=z+W;b===!0?h.push(O,O+1,Y):h.push(O+1,O,Y),v+=3}c.addGroup(m,v,b===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new bt:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,l=new ue;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ms=class extends cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uo=class extends Ms{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var vh=new G,Sh=new G,Tl=new dc,Al=new dc,Rl=new dc,Fo=class extends cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Sh.subVectors(s[0],s[1]).add(s[0]),c=Sh);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Tl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,y,g),Al.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,y,g),Rl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Al.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Rl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Tl.calc(l),Al.calc(l),Rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Id(i,t){let e=1-i;return e*e*t}function Pd(i,t){return 2*(1-i)*i*t}function Ld(i,t){return i*i*t}function Ys(i,t,e,n){return Id(i,t)+Pd(i,e)+Ld(i,n)}function Nd(i,t){let e=1-i;return e*e*e*t}function Dd(i,t){let e=1-i;return 3*e*e*i*t}function Ud(i,t){return 3*(1-i)*i*i*t}function Fd(i,t){return i*i*i*t}function Zs(i,t,e,n,s){return Nd(i,t)+Dd(i,e)+Ud(i,n)+Fd(i,s)}var ar=class extends cn{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends cn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y),Zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lr=class extends cn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends cn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cr=class extends cn{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends cn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y),Ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(bh(a,l.x,c.x,h.x,f.x),bh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new bt().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Uo,CatmullRomCurve3:Fo,CubicBezierCurve:ar,CubicBezierCurve3:Oo,EllipseCurve:Ms,LineCurve:lr,LineCurve3:Bo,QuadraticBezierCurve:cr,QuadraticBezierCurve3:zo,SplineCurve:hr}),ko=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Fl[s.type]().fromJSON(s))}return this}},Oi=class extends ko{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lr(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new cr(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ar(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new hr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ms(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hn=class extends Oi{constructor(t){super(t),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Oi().fromJSON(s))}return this}};function Od(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=yu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Gd(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){let d=i[u],p=i[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return ur(r,o,e,a,l,c,0),o}function yu(i,t,e,n,s){let r;if(s===Qd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mh(o/n|0,i[o],i[o+1],r);return r&&Es(r,r.next)&&(dr(r),r=r.next),r}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Es(e,e.next)||Ee(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Yd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zd(i,n,s,r):Bd(i)){t.push(l.i,i.i,c.i),dr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kd(Bi(i),t),ur(i,t,e,n,s,r,2)):o===2&&Vd(i,t,e,n,s,r):ur(Bi(i),t,e,n,s,r,1);break}}}function Bd(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Ws(s,a,r,l,o,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zd(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),y=Math.max(a,l,c),g=Math.max(h,f,u),m=Ol(d,p,t,e,n),E=Ol(y,g,t,e,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=m&&b&&b.z<=E;){if(R.x>=d&&R.x<=y&&R.y>=p&&R.y<=g&&R!==s&&R!==o&&Ws(a,h,l,f,c,u,R.x,R.y)&&Ee(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=d&&b.x<=y&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Ws(a,h,l,f,c,u,b.x,b.y)&&Ee(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=m;){if(R.x>=d&&R.x<=y&&R.y>=p&&R.y<=g&&R!==s&&R!==o&&Ws(a,h,l,f,c,u,R.x,R.y)&&Ee(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=E;){if(b.x>=d&&b.x<=y&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Ws(a,h,l,f,c,u,b.x,b.y)&&Ee(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function kd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Es(n,s)&&Su(n,e,e.next,s)&&fr(n,s)&&fr(s,n)&&(t.push(n.i,e.i,s.i),dr(e),dr(e.next),e=i=s),e=e.next}while(e!==i);return Bi(e)}function Vd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$d(o,a)){let l=bu(o,a);o=Bi(o,o.next),l=Bi(l,l.next),ur(o,t,e,n,s,r,0),ur(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Gd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=yu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jd(c))}s.sort(Hd);for(let r=0;r<s.length;r++)e=Wd(s[r],e);return e}function Hd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Wd(i,t){let e=Xd(i,t);if(!e)return t;let n=bu(e,i);return Bi(n,n.next),Bi(e,e.next)}function Xd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Es(i,e))return e;do{if(Es(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&vu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);fr(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&qd(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function qd(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Yd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zd(s)}function Zd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function vu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ws(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&vu(i,t,e,n,s,r,o,a)}function $d(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Kd(i,t)&&(fr(i,t)&&fr(t,i)&&jd(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Es(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Es(i,t){return i.x===t.x&&i.y===t.y}function Su(i,t,e,n){let s=fo(Ee(i,t,e)),r=fo(Ee(i,t,n)),o=fo(Ee(e,n,i)),a=fo(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&uo(i,e,t)||r===0&&uo(i,n,t)||o===0&&uo(e,i,n)||a===0&&uo(e,t,n))}function uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fo(i){return i>0?1:i<0?-1:0}function Kd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function jd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bu(i,t){let e=Bl(i.i,i.x,i.y),n=Bl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mh(i,t,e,n){let s=Bl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var zl=class{static triangulate(t,e,n=2){return Od(t,e,n)}},Un=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eh(t),wh(n,t);let o=t.length;e.forEach(Eh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wh(n,e[l]);let a=zl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Eh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qn=class i extends Me{constructor(t=new hn([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:tp,R,b=!1,A,w,D,v;if(m){R=m.getSpacedPoints(h),b=!0,u=!1;let Z=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,Z),w=new G,D=new G,v=new G}u||(g=0,d=0,p=0,y=0);let L=a.extractPoints(c),F=L.shape,z=L.holes;if(!Un.isClockWise(F)){F=F.reverse();for(let Z=0,dt=z.length;Z<dt;Z++){let _t=z[Z];Un.isClockWise(_t)&&(z[Z]=_t.reverse())}}function Y(Z){let _t=10000000000000001e-36,xt=Z[0];for(let St=1;St<=Z.length;St++){let zt=St%Z.length,Ot=Z[zt],Vt=Ot.x-xt.x,Gt=Ot.y-xt.y,k=Vt*Vt+Gt*Gt,ne=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(xt.x),Math.abs(xt.y)),kt=_t*ne*ne;if(k<=kt){Z.splice(zt,1),St--;continue}xt=Ot}}Y(F),z.forEach(Y);let O=z.length,J=F;for(let Z=0;Z<O;Z++){let dt=z[Z];F=F.concat(dt)}function nt(Z,dt,_t){return dt||Yt("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(dt,_t)}let Q=F.length;function at(Z,dt,_t){let xt,St,zt,Ot=Z.x-dt.x,Vt=Z.y-dt.y,Gt=_t.x-Z.x,k=_t.y-Z.y,ne=Ot*Ot+Vt*Vt,kt=Ot*k-Vt*Gt;if(Math.abs(kt)>Number.EPSILON){let N=Math.sqrt(ne),S=Math.sqrt(Gt*Gt+k*k),K=dt.x-Vt/N,ot=dt.y+Ot/N,ct=_t.x-k/S,U=_t.y+Gt/S,x=((ct-K)*k-(U-ot)*Gt)/(Ot*k-Vt*Gt);xt=K+Ot*x-Z.x,St=ot+Vt*x-Z.y;let _=xt*xt+St*St;if(_<=2)return new bt(xt,St);zt=Math.sqrt(_/2)}else{let N=!1;Ot>Number.EPSILON?Gt>Number.EPSILON&&(N=!0):Ot<-Number.EPSILON?Gt<-Number.EPSILON&&(N=!0):Math.sign(Vt)===Math.sign(k)&&(N=!0),N?(xt=-Vt,St=Ot,zt=Math.sqrt(ne)):(xt=Ot,St=Vt,zt=Math.sqrt(ne/2))}return new bt(xt/zt,St/zt)}let rt=[];for(let Z=0,dt=J.length,_t=dt-1,xt=Z+1;Z<dt;Z++,_t++,xt++)_t===dt&&(_t=0),xt===dt&&(xt=0),rt[Z]=at(J[Z],J[_t],J[xt]);let et=[],ut,At=rt.concat();for(let Z=0,dt=O;Z<dt;Z++){let _t=z[Z];ut=[];for(let xt=0,St=_t.length,zt=St-1,Ot=xt+1;xt<St;xt++,zt++,Ot++)zt===St&&(zt=0),Ot===St&&(Ot=0),ut[xt]=at(_t[xt],_t[zt],_t[Ot]);et.push(ut),At=At.concat(ut)}let Et;if(g===0)Et=Un.triangulateShape(J,z);else{let Z=[],dt=[];for(let _t=0;_t<g;_t++){let xt=_t/g,St=d*Math.cos(xt*Math.PI/2),zt=p*Math.sin(xt*Math.PI/2)+y;for(let Ot=0,Vt=J.length;Ot<Vt;Ot++){let Gt=nt(J[Ot],rt[Ot],zt);wt(Gt.x,Gt.y,-St),xt===0&&Z.push(Gt)}for(let Ot=0,Vt=O;Ot<Vt;Ot++){let Gt=z[Ot];ut=et[Ot];let k=[];for(let ne=0,kt=Gt.length;ne<kt;ne++){let N=nt(Gt[ne],ut[ne],zt);wt(N.x,N.y,-St),xt===0&&k.push(N)}xt===0&&dt.push(k)}}Et=Un.triangulateShape(Z,dt)}let Kt=Et.length,Xt=p+y;for(let Z=0;Z<Q;Z++){let dt=u?nt(F[Z],At[Z],Xt):F[Z];b?(D.copy(A.normals[0]).multiplyScalar(dt.x),w.copy(A.binormals[0]).multiplyScalar(dt.y),v.copy(R[0]).add(D).add(w),wt(v.x,v.y,v.z)):wt(dt.x,dt.y,0)}for(let Z=1;Z<=h;Z++)for(let dt=0;dt<Q;dt++){let _t=u?nt(F[dt],At[dt],Xt):F[dt];b?(D.copy(A.normals[Z]).multiplyScalar(_t.x),w.copy(A.binormals[Z]).multiplyScalar(_t.y),v.copy(R[Z]).add(D).add(w),wt(v.x,v.y,v.z)):wt(_t.x,_t.y,f/h*Z)}for(let Z=g-1;Z>=0;Z--){let dt=Z/g,_t=d*Math.cos(dt*Math.PI/2),xt=p*Math.sin(dt*Math.PI/2)+y;for(let St=0,zt=J.length;St<zt;St++){let Ot=nt(J[St],rt[St],xt);wt(Ot.x,Ot.y,f+_t)}for(let St=0,zt=z.length;St<zt;St++){let Ot=z[St];ut=et[St];for(let Vt=0,Gt=Ot.length;Vt<Gt;Vt++){let k=nt(Ot[Vt],ut[Vt],xt);b?wt(k.x,k.y+R[h-1].y,R[h-1].x+_t):wt(k.x,k.y,f+_t)}}}Zt(),ft();function Zt(){let Z=s.length/3;if(u){let dt=0,_t=Q*dt;for(let xt=0;xt<Kt;xt++){let St=Et[xt];Ht(St[2]+_t,St[1]+_t,St[0]+_t)}dt=h+g*2,_t=Q*dt;for(let xt=0;xt<Kt;xt++){let St=Et[xt];Ht(St[0]+_t,St[1]+_t,St[2]+_t)}}else{for(let dt=0;dt<Kt;dt++){let _t=Et[dt];Ht(_t[2],_t[1],_t[0])}for(let dt=0;dt<Kt;dt++){let _t=Et[dt];Ht(_t[0]+Q*h,_t[1]+Q*h,_t[2]+Q*h)}}n.addGroup(Z,s.length/3-Z,0)}function ft(){let Z=s.length/3,dt=0;gt(J,dt),dt+=J.length;for(let _t=0,xt=z.length;_t<xt;_t++){let St=z[_t];gt(St,dt),dt+=St.length}n.addGroup(Z,s.length/3-Z,1)}function gt(Z,dt){let _t=Z.length;for(;--_t>=0;){let xt=_t,St=_t-1;St<0&&(St=Z.length-1);for(let zt=0,Ot=h+g*2;zt<Ot;zt++){let Vt=Q*zt,Gt=Q*(zt+1),k=dt+xt+Vt,ne=dt+St+Vt,kt=dt+St+Gt,N=dt+xt+Gt;Ct(k,ne,kt,N)}}}function wt(Z,dt,_t){l.push(Z),l.push(dt),l.push(_t)}function Ht(Z,dt,_t){Nt(Z),Nt(dt),Nt(_t);let xt=s.length/3,St=E.generateTopUV(n,s,xt-3,xt-2,xt-1);ae(St[0]),ae(St[1]),ae(St[2])}function Ct(Z,dt,_t,xt){Nt(Z),Nt(dt),Nt(xt),Nt(dt),Nt(_t),Nt(xt);let St=s.length/3,zt=E.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);ae(zt[0]),ae(zt[1]),ae(zt[3]),ae(zt[1]),ae(zt[2]),ae(zt[3])}function Nt(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function ae(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ep(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Fl[s.type]().fromJSON(s)),new i(n,t.options)}},tp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new bt(r,o),new bt(a,l),new bt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],p=t[s*3+2],y=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new bt(o,1-l),new bt(c,1-f),new bt(u,1-p),new bt(y,1-m)]:[new bt(a,1-l),new bt(h,1-f),new bt(d,1-p),new bt(g,1-m)]}};function ep(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pr=class i extends Me{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ie(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,f=new G,u=new bt,d=new G,p=new G,y=new G,g=0,m=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,d.x=m*1,d.y=-g,d.z=m*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(p)}for(let E=0;E<=e;E++){let R=n+E*h*s,b=Math.sin(R),A=Math.cos(R);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*b,f.y=t[w].y,f.z=t[w].x*A,o.push(f.x,f.y,f.z),u.x=E/e,u.y=w/(t.length-1),a.push(u.x,u.y);let D=l[3*w+0]*b,v=l[3*w+1],L=l[3*w+0]*A;c.push(D,v,L)}}for(let E=0;E<e;E++)for(let R=0;R<t.length-1;R++){let b=R+E*t.length,A=b,w=b+t.length,D=b+t.length+1,v=b+1;r.push(A,w,v),r.push(D,v,w)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ti=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let E=m*u-o;for(let R=0;R<c;R++){let b=R*f-r;p.push(b,-E,0),y.push(0,0,1),g.push(R/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){let R=E+c*m,b=E+c*(m+1),A=E+1+c*(m+1),w=E+1+c*m;d.push(R,b,w),d.push(b,A,w)}this.setIndex(d),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var _i=class i extends Me{constructor(t=new hn([new bt(0,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function c(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,p=u.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let E=p[g];Un.isClockWise(E)===!0&&(p[g]=E.reverse())}let y=Un.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let E=p[g];d=d.concat(E)}for(let g=0,m=d.length;g<m;g++){let E=d[g];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let g=0,m=y.length;g<m;g++){let E=y[g],R=E[0]+f,b=E[1]+f,A=E[2]+f;n.push(R,b,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return np(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function np(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var En=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new G,u=new G,d=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let E=[],R=m/n,b=o+R*a,A=t*Math.cos(b),w=Math.sqrt(t*t-A*A),D=0;m===0&&o===0?D=.5/e:m===n&&l===Math.PI&&(D=-.5/e);for(let v=0;v<=e;v++){let L=v/e,F=s+L*r;f.x=-w*Math.cos(F),f.y=A,f.z=w*Math.sin(F),p.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),g.push(L+D,1-R),E.push(c++)}h.push(E)}for(let m=0;m<n;m++)for(let E=0;E<e;E++){let R=h[m][E+1],b=h[m][E],A=h[m+1][E],w=h[m+1][E+1];(m!==0||o>0)&&d.push(R,b,w),(m!==n-1||l<Math.PI)&&d.push(b,A,w)}this.setIndex(d),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(y,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zi=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new G,d=new G,p=new G;for(let y=0;y<=n;y++){let g=o+y/n*a;for(let m=0;m<=s;m++){let E=m/s*r;d.x=(t+e*Math.cos(g))*Math.cos(E),d.y=(t+e*Math.cos(g))*Math.sin(E),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let m=(s+1)*y+g-1,E=(s+1)*(y-1)+g-1,R=(s+1)*(y-1)+g,b=(s+1)*y+g;l.push(m,E,b),l.push(E,R,b)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Th(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Th(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function Th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ip(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Mu={clone:Xi,merge:He},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[n].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vo=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ei=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ki=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pr,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=na,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Go=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ho=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function as(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wo=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,a=2*e-n;break;case Dl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:o=t,l=2*n-e;break;case Dl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),y=p*p,g=y*p,m=-u*g+2*u*y-u*p,E=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*p+1,R=(-1-d)*g+(1.5+d)*y+.5*p,b=d*g-d*y;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+E*o[c+A]+R*o[l+A]+b*o[f+A];return r}},Xo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},qo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Yo=class extends yi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(s-e),y=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*p;return r}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let y=o[c+p],g=o[l+p],m=d*u+p*2,E=f[m],R=f[m+1],b=t*u+p*2,A=h[b],w=h[b+1],D=ap(n,e,E,A,s);r[p]=Eu(D,y,R,w,g)}return r}};function Eu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function op(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ap(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Eu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=op(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Cl(t.settings)&&(n.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Yo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Js:e=this.InterpolantFactoryMethodDiscrete;break;case To:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break;case Pl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Cl(this.settings)&&(Ah(this.settings.inTangents,t),Ah(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Jf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===go,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let y=e[f+p];if(y!==e[u+p]||y!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Cl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ah(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=To;var vi=class extends un{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Js;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};Zo.prototype.ValueTypeName="color";var Jo=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};Jo.prototype.ValueTypeName="number";var $o=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},mr=class extends un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new $o(this.times,this.values,this.getValueSize(),t)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends un{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Js;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};Ko.prototype.ValueTypeName="vector";var jo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wu=new jo,Qo=class{constructor(t){this.manager=t!==void 0?t:wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gr=class extends ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Il=new ue,Rh=new G,Ch=new G,xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ch),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Il,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},po=new G,mo=new gn,Nn=new G,_r=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(po,mo,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(po,mo,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pi=new G,Ih=new bt,Ph=new bt,Ze=class extends _r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Ih,Ph),e.subVectors(Ph,Ih)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kl=class extends xr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}},yr=class extends ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},bi=class extends _r{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vl=class extends xr{constructor(){super(new bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Vl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ls=-90,cs=1,ta=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new Ze(ls,cs,t,e);r.layers=this.layers,this.add(r);let o=new Ze(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new Ze(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new Ze(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Ze(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ea=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var mc="\\[\\]\\.:\\/",lp=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",cp="[^"+mc.replace("\\.","")+"]",hp=/((?:WC+[\/:])*)/.source.replace("WC",gc),up=/(WCOD+)?/.source.replace("WCOD",cp),fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),pp=new RegExp("^"+hp+up+fp+dp+"$"),mp=["material","materials","bones","map"],Gl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(t){let e=pp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Gl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var Lh=new ue,vr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ui(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hl(t[s],this,n,e);return n.sort(Nh),n}};function Nh(i,t){return i.distance-t.distance}function Hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Hl(r[o],t,e,!0)}}var Wl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function xc(i,t,e,n){let s=gp(n);switch(e){case ac:return i*t;case cc:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case Ai:return i*t*2/s.components*s.byteLength;case ha:return i*t*2/s.components*s.byteLength;case lc:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case ua:return i*t*4/s.components*s.byteLength;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case ma:return Math.max(i,16)*Math.max(t,8)/4;case fa:case pa:return Math.max(i,8)*Math.max(t,8)/2;case ga:case xa:case ya:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case Cr:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ir:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gp(i){switch(i){case nn:case ic:return{byteLength:1,components:1};case Cs:case sc:case Rn:return{byteLength:2,components:1};case aa:case la:return{byteLength:2,components:4};case Tn:case oa:case An:return{byteLength:4,components:1};case rc:case oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ep(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],y=f[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,Mm=`uniform sampler2D dfgLUT;
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
}`,Em=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Ng=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,kg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Hg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Ip,aomap_fragment:Pp,aomap_pars_fragment:Lp,batching_pars_vertex:Np,batching_vertex:Dp,begin_vertex:Up,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Hp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:Zp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Kp,displacementmap_vertex:jp,emissivemap_fragment:Qp,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:om,envmap_physical_pars_fragment:xm,envmap_vertex:am,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:fm,lightmap_pars_fragment:dm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:_m,lights_toon_pars_fragment:ym,lights_phong_fragment:vm,lights_phong_pars_fragment:Sm,lights_physical_fragment:bm,lights_physical_pars_fragment:Mm,lights_fragment_begin:Em,lights_fragment_maps:wm,lights_fragment_end:Tm,lightprobes_pars_fragment:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Pm,map_fragment:Lm,map_pars_fragment:Nm,map_particle_fragment:Dm,map_particle_pars_fragment:Um,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Hm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Km,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:fg,skinning_vertex:dg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:_g,transmission_fragment:yg,transmission_pars_fragment:vg,uv_pars_fragment:Sg,uv_pars_vertex:bg,uv_vertex:Mg,worldpos_vertex:Eg,background_vert:wg,background_frag:Tg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Ig,depth_vert:Pg,depth_frag:Lg,distance_vert:Ng,distance_frag:Dg,equirect_vert:Ug,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:kg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Hg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:$g,meshtoon_vert:Kg,meshtoon_frag:jg,points_vert:Qg,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},Tt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Hn={basic:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:He([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:He([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:He([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:He([Tt.points,Tt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:He([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:He([Tt.common,Tt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:He([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:He([Tt.sprite,Tt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:He([Tt.common,Tt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:He([Tt.lights,Tt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Hn.physical={uniforms:He([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Xa={r:0,b:0,g:0},r0=new ue,Zu=new $t;Zu.set(-1,0,0,0,1,0,0,0,1);function o0(i,t,e,n,s,r){let o=new Jt(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let b=E.backgroundBlurriness>0;R=t.get(R,b)}return R}function p(E){let R=!1,b=d(E);b===null?g(o,a):b&&b.isColor&&(g(b,1),R=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,R){let b=d(R);b&&(b.isCubeTexture||b.mapping===Mr)?(c===void 0&&(c=new xe(new Ge(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Xi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zu),c.material.toneMapped=re.getTransfer(b.colorSpace)!==he,(h!==b||f!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new xe(new ti(2,2),new $e({name:"BackgroundMaterial",uniforms:Xi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=re.getTransfer(b.colorSpace)!==he,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,R){E.getRGB(Xa,pc(i)),e.buffers.color.setClear(Xa.r,Xa.g,Xa.b,R,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(o,a)},render:p,addToRenderList:y,dispose:m}}function a0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(z,W,Y,O,J){let nt=!1,Q=f(z,O,Y,W);r!==Q&&(r=Q,c(r.object)),nt=d(z,O,Y,J),nt&&p(z,O,Y,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,b(z,W,Y,O),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function f(z,W,Y,O){let J=O.wireframe===!0,nt=n[W.id];nt===void 0&&(nt={},n[W.id]=nt);let Q=z.isInstancedMesh===!0?z.id:0,at=nt[Q];at===void 0&&(at={},nt[Q]=at);let rt=at[Y.id];rt===void 0&&(rt={},at[Y.id]=rt);let et=rt[J];return et===void 0&&(et=u(l()),rt[J]=et),et}function u(z){let W=[],Y=[],O=[];for(let J=0;J<e;J++)W[J]=0,Y[J]=0,O[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:O,object:z,attributes:{},index:null}}function d(z,W,Y,O){let J=r.attributes,nt=W.attributes,Q=0,at=Y.getAttributes();for(let rt in at)if(at[rt].location>=0){let ut=J[rt],At=nt[rt];if(At===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(At=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(At=z.instanceColor)),ut===void 0||ut.attribute!==At||At&&ut.data!==At.data)return!0;Q++}return r.attributesNum!==Q||r.index!==O}function p(z,W,Y,O){let J={},nt=W.attributes,Q=0,at=Y.getAttributes();for(let rt in at)if(at[rt].location>=0){let ut=nt[rt];ut===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(ut=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(ut=z.instanceColor));let At={};At.attribute=ut,ut&&ut.data&&(At.data=ut.data),J[rt]=At,Q++}r.attributes=J,r.attributesNum=Q,r.index=O}function y(){let z=r.newAttributes;for(let W=0,Y=z.length;W<Y;W++)z[W]=0}function g(z){m(z,0)}function m(z,W){let Y=r.newAttributes,O=r.enabledAttributes,J=r.attributeDivisors;Y[z]=1,O[z]===0&&(i.enableVertexAttribArray(z),O[z]=1),J[z]!==W&&(i.vertexAttribDivisor(z,W),J[z]=W)}function E(){let z=r.newAttributes,W=r.enabledAttributes;for(let Y=0,O=W.length;Y<O;Y++)W[Y]!==z[Y]&&(i.disableVertexAttribArray(Y),W[Y]=0)}function R(z,W,Y,O,J,nt,Q){Q===!0?i.vertexAttribIPointer(z,W,Y,J,nt):i.vertexAttribPointer(z,W,Y,O,J,nt)}function b(z,W,Y,O){y();let J=O.attributes,nt=Y.getAttributes(),Q=W.defaultAttributeValues;for(let at in nt){let rt=nt[at];if(rt.location>=0){let et=J[at];if(et===void 0&&(at==="instanceMatrix"&&z.instanceMatrix&&(et=z.instanceMatrix),at==="instanceColor"&&z.instanceColor&&(et=z.instanceColor)),et!==void 0){let ut=et.normalized,At=et.itemSize,Et=t.get(et);if(Et===void 0)continue;let Kt=Et.buffer,Xt=Et.type,Zt=Et.bytesPerElement,ft=Xt===i.INT||Xt===i.UNSIGNED_INT||et.gpuType===oa;if(et.isInterleavedBufferAttribute){let gt=et.data,wt=gt.stride,Ht=et.offset;if(gt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<rt.locationSize;Ct++)m(rt.location+Ct,gt.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Ct=0;Ct<rt.locationSize;Ct++)g(rt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Ct=0;Ct<rt.locationSize;Ct++)R(rt.location+Ct,At/rt.locationSize,Xt,ut,wt*Zt,(Ht+At/rt.locationSize*Ct)*Zt,ft)}else{if(et.isInstancedBufferAttribute){for(let gt=0;gt<rt.locationSize;gt++)m(rt.location+gt,et.meshPerAttribute);z.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<rt.locationSize;gt++)g(rt.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let gt=0;gt<rt.locationSize;gt++)R(rt.location+gt,At/rt.locationSize,Xt,ut,At*Zt,At/rt.locationSize*gt*Zt,ft)}}else if(Q!==void 0){let ut=Q[at];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(rt.location,ut);break;case 3:i.vertexAttrib3fv(rt.location,ut);break;case 4:i.vertexAttrib4fv(rt.location,ut);break;default:i.vertexAttrib1fv(rt.location,ut)}}}}E()}function A(){L();for(let z in n){let W=n[z];for(let Y in W){let O=W[Y];for(let J in O){let nt=O[J];for(let Q in nt)h(nt[Q].object),delete nt[Q];delete O[J]}}delete n[z]}}function w(z){if(n[z.id]===void 0)return;let W=n[z.id];for(let Y in W){let O=W[Y];for(let J in O){let nt=O[J];for(let Q in nt)h(nt[Q].object),delete nt[Q];delete O[J]}}delete n[z.id]}function D(z){for(let W in n){let Y=n[W];for(let O in Y){let J=Y[O];if(J[z.id]===void 0)continue;let nt=J[z.id];for(let Q in nt)h(nt[Q].object),delete nt[Q];delete J[z.id]}}}function v(z){for(let W in n){let Y=n[W],O=z.isInstancedMesh===!0?z.id:0,J=Y[O];if(J!==void 0){for(let nt in J){let Q=J[nt];for(let at in Q)h(Q[at].object),delete Q[at];delete J[nt]}delete Y[O],Object.keys(Y).length===0&&delete n[W]}}}function L(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function l0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function c0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==xn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let v=D===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==nn&&D!==An&&!v&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:b,maxSamples:A,samples:w}}function h0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ln,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let E=r?0:n,R=E*4,b=m.clippingState||null;l.value=b,b=h(p,u,R,d);for(let A=0;A!==R;++A)b[A]=e[A];m.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=d+y*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,b=d;R!==y;++R,b+=4)o.copy(f[R]).applyMatrix4(E,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Ls=4,u0=6,f0=20,d0=256,Lr=new bi,Tu=new Jt,_c=null,yc=0,vc=0,Sc=!1,p0=new G,qi=new G,Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=p0}=r;_c=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,yc,vc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Rn,format:xn,colorSpace:$s,depthBuffer:!1},s=Au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=m0(r)),this._blurMaterial=x0(r,t,e),this._ggxMaterial=g0(r,t,e)}return s}_compileMaterial(t){let e=new xe(new Me,t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Tu),f.toneMapping=wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Ge,new jn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,m=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,m=!0):(g.color.copy(Tu),m=!0);for(let R=0;R<6;R++){let b=R%3;b===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):b===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let A=this._cubeSize;Ps(s,b*A,R>2?A:0,A,A),f.setRenderTarget(s),m&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Lr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,y=this._sizeLods[n],g=3*y*(n>p-Ls?n-p+Ls:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Ps(r,g,m,3*y,2*y),s.setRenderTarget(r),s.render(a,Lr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ps(t,g,m,3*y,2*y),s.setRenderTarget(t),s.render(a,Lr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),u=4*(this._cubeSize-h);Ps(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Lr)}};function m0(i){let t=[],e=[],n=i,s=i-Ls+1+u0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),y=new Float32Array(d*u*f);for(let m=0;m<f;m++){let E=m%3*2/3-1,R=m>2?0:-1,b=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];p.set(b,d*u*m);for(let A=0;A<u;A++){let w=h[A*2]*2-1,D=h[A*2+1]*2-1;m===0?qi.set(1,D,w):m===1?qi.set(-w,1,-D):m===2?qi.set(-w,D,1):m===3?qi.set(-1,D,-w):m===4?qi.set(-w,-1,D):qi.set(w,D,-1),qi.toArray(y,(m*u+A)*d)}}let g=new Me;g.setAttribute("position",new De(p,d)),g.setAttribute("outputDirection",new De(y,d)),e.push(new xe(g,null)),n>Ls&&n--}return{lodMeshes:e,sizeLods:t}}function Au(i,t,e){let n=new en(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g0(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function x0(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:f0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ru(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Cu(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Za=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Vn});r.uniforms.tEquirect.value=e;let o=new xe(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Be),new ta(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function _0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ia||d===sa)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new Za(p.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===ia||d===sa,y=d===Ei||d===Hi;if(p||y){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ya(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let E=u.image;return p&&E&&E.height>0||y&&E&&l(E)?(n===null&&(n=new Ya(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===ia?u.mapping=Ei:d===sa&&(u.mapping=Hi),u}function l(u){let d=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function y0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ni("WebGLRenderer: "+n+" extension not supported."),s}}}function v0(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,y=0;if(p===void 0)return;if(d!==null){let E=d.array;y=d.version;for(let R=0,b=E.length;R<b;R+=3){let A=E[R+0],w=E[R+1],D=E[R+2];u.push(A,w,w,D,D,A)}}else{let E=p.array;y=p.version;for(let R=0,b=E.length/3-1;R<b;R+=3){let A=R+0,w=R+1,D=R+2;u.push(A,w,w,D,D,A)}}let g=new(p.count>=65535?nr:er)(u,1);g.version=y;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function S0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let y=0;for(let g=0;g<d;g++)y+=u[g];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function b0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M0(i,t,e){let n=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let L=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],R=0;d===!0&&(R=1),p===!0&&(R=2),y===!0&&(R=3);let b=a.attributes.position.count*R,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*A*4*f),D=new Qs(w,b,A,f);D.type=An,D.needsUpdate=!0;let v=R*4;for(let F=0;F<f;F++){let z=g[F],W=m[F],Y=E[F],O=b*A*4*F;for(let J=0;J<z.count;J++){let nt=J*v;d===!0&&(s.fromBufferAttribute(z,J),w[O+nt+0]=s.x,w[O+nt+1]=s.y,w[O+nt+2]=s.z,w[O+nt+3]=0),p===!0&&(s.fromBufferAttribute(W,J),w[O+nt+4]=s.x,w[O+nt+5]=s.y,w[O+nt+6]=s.z,w[O+nt+7]=0),y===!0&&(s.fromBufferAttribute(Y,J),w[O+nt+8]=s.x,w[O+nt+9]=s.y,w[O+nt+10]=s.z,w[O+nt+11]=Y.itemSize===4?s.w:1)}}u={count:f,texture:D,size:new bt(b,A)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function E0(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var w0={[$l]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[br]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[ec]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function T0(i,t,e,n,s,r){let o=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Me;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let h=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xe(c,h),u=new bi(-1,1,1,-1,0,1),d=null,p=null,y=!1,g,m=null,E=[],R=!1;this.setSize=function(b,A){o.setSize(b,A),a!==null&&a.setSize(b,A),l!==null&&l.setSize(b,A);for(let w=0;w<E.length;w++){let D=E[w];D.setSize&&D.setSize(b,A)}},this.setEffects=function(b){E=b,R=E.length>0&&E[0].isRenderPass===!0;let A=o.width,w=o.height;E.length>0&&a===null&&(a=new en(A,w,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new en(A,w,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<E.length;D++){let v=E[D];v.setSize&&v.setSize(A,w)}},this.begin=function(b,A){if(y||b.toneMapping===wn&&E.length===0)return!1;if(m=A,A!==null){let w=A.width,D=A.height;(o.width!==w||o.height!==D)&&this.setSize(w,D)}return R===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=wn,!0},this.hasRenderPass=function(){return R},this.end=function(b,A){b.toneMapping=g,y=!0;let w=o,D=a;for(let v=0;v<E.length;v++){let L=E[v];L.enabled!==!1&&(L.render(b,D,w,A),L.needsSwap!==!1&&(w=D,D=D===a?l:a))}if(d!==b.outputColorSpace||p!==b.toneMapping){d=b.outputColorSpace,p=b.toneMapping,h.defines={},re.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");let v=w0[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(m),b.render(f,u),m=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ju=new Je,Ec=new xi(1,1),$u=new Qs,Ku=new Co,ju=new rr,Iu=[],Pu=[],Lu=new Float32Array(16),Nu=new Float32Array(9),Du=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ka(i,t){let e=Pu[t];e===void 0&&(e=new Int32Array(t),Pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function A0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),Ie(e,n)}}function L0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Nu.set(n),i.uniformMatrix3fv(this.addr,!1,Nu),Ie(e,n)}}function N0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ce(e,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),Ie(e,n)}}function D0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function B0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=e.isReversedDepthBuffer()?Ha:Ga,r=Ec):r=Ju,e.setTexture2D(t||r,s)}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ku,s)}function W0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ju,s)}function X0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$u,s)}function q0(i){switch(i){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return I0;case 35674:return P0;case 35675:return L0;case 35676:return N0;case 5124:case 35670:return D0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function J0(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function $0(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function K0(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function j0(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Q0(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tx(i,t){i.uniform1iv(this.addr,t)}function ex(i,t){i.uniform2iv(this.addr,t)}function nx(i,t){i.uniform3iv(this.addr,t)}function ix(i,t){i.uniform4iv(this.addr,t)}function sx(i,t){i.uniform1uiv(this.addr,t)}function rx(i,t){i.uniform2uiv(this.addr,t)}function ox(i,t){i.uniform3uiv(this.addr,t)}function ax(i,t){i.uniform4uiv(this.addr,t)}function lx(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ec:o=Ju;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function cx(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ku,r[o])}function hx(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ju,r[o])}function ux(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$u,r[o])}function fx(i){switch(i){case 5126:return Y0;case 35664:return Z0;case 35665:return J0;case 35666:return $0;case 35674:return K0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}var wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}},Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fx(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function Uu(i,t){i.seq.push(t),i.map[t.id]=t}function dx(i,t,e){let n=i.name,s=n.length;for(bc.lastIndex=0;;){let r=bc.exec(n),o=bc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uu(e,c===void 0?new wc(a,i,t):new Tc(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ac(a),Uu(e,f)),e=f}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);dx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var px=37297,mx=0;function gx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ou=new $t;function xx(i){re._getMatrix(Ou,re.workingColorSpace,i);let t=`mat3( ${Ou.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Ks:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gx(i.getShaderSource(t),a)}else return r}function _x(i,t){let e=xx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var yx={[$l]:"Linear",[Kl]:"Reinhard",[jl]:"Cineon",[br]:"ACESFilmic",[tc]:"AgX",[ec]:"Neutral",[Ql]:"Custom"};function vx(i,t){let e=yx[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qa=new G;function Sx(){re.getLuminanceCoefficients(qa);let i=qa.x.toFixed(4),t=qa.y.toFixed(4),e=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ex(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Dr(i){return i!==""}function zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(wx,Ax)}var Tx=new Map;function Ax(i,t){let e=te[t];if(e===void 0){let n=Tx.get(t);if(n!==void 0)e=te[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rc(e)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(Rx,Cx)}function Cx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ix={[Vi]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Px(i){return Ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lx={[Ei]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE_UV"};function Nx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Dx={[Hi]:"ENVMAP_MODE_REFRACTION"};function Ux(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Dx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fx={[na]:"ENVMAP_BLENDING_MULTIPLY",[eu]:"ENVMAP_BLENDING_MIX",[nu]:"ENVMAP_BLENDING_ADD"};function Ox(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fx[i.combine]||"ENVMAP_BLENDING_NONE"}function Bx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Px(e),c=Nx(e),h=Ux(e),f=Ox(e),u=Bx(e),d=bx(e),p=Mx(r),y=s.createProgram(),g,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Dr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(g=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?te.tonemapping_pars_fragment:"",e.toneMapping!==wn?vx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,_x("linearToOutputTexel",e.outputColorSpace),Sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Rc(o),o=zu(o,e),o=ku(o,e),a=Rc(a),a=zu(a,e),a=ku(a,e),o=Vu(o),a=Vu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=E+g+o,b=E+m+a,A=Fu(s,s.VERTEX_SHADER,R),w=Fu(s,s.FRAGMENT_SHADER,b);s.attachShader(y,A),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(z){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(y)||"",Y=s.getShaderInfoLog(A)||"",O=s.getShaderInfoLog(w)||"",J=W.trim(),nt=Y.trim(),Q=O.trim(),at=!0,rt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,w);else{let et=Bu(s,A,"vertex"),ut=Bu(s,w,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+et+`
`+ut)}else J!==""?Wt("WebGLProgram: Program Info Log:",J):(nt===""||Q==="")&&(rt=!1);rt&&(z.diagnostics={runnable:at,programLog:J,vertexShader:{log:nt,prefix:g},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(A),s.deleteShader(w),v=new Ns(s,y),L=Ex(s,y)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(y,px)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=w,this}var kx=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ic(t),e.set(t,n)),n}},Ic=class{constructor(t){this.id=kx++,this.code=t,this.usedTimes=0}};function Vx(i){return i===Ai||i===Cr||i===Ir}function Gx(i,t,e,n,s,r){let o=new xs,a=new Cc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,L,F,z,W,Y){let O=z.fog,J=W.geometry,nt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?z.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||nt,Q),rt=at&&at.mapping===Mr?at.image.height:null,et=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,At=ut!==void 0?ut.length:0,Et=0;J.morphAttributes.position!==void 0&&(Et=1),J.morphAttributes.normal!==void 0&&(Et=2),J.morphAttributes.color!==void 0&&(Et=3);let Kt,Xt,Zt,ft;if(et){let jt=Hn[et];Kt=jt.vertexShader,Xt=jt.fragmentShader}else{Kt=v.vertexShader,Xt=v.fragmentShader;let jt=a.getVertexShaderStage(v),qt=a.getFragmentShaderStage(v);a.update(v,jt,qt),Zt=jt.id,ft=qt.id}let gt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Ht=W.isInstancedMesh===!0,Ct=W.isBatchedMesh===!0,Nt=!!v.map,ae=!!v.matcap,Z=!!at,dt=!!v.aoMap,_t=!!v.lightMap,xt=!!v.bumpMap&&v.wireframe===!1,St=!!v.normalMap,zt=!!v.displacementMap,Ot=!!v.emissiveMap,Vt=!!v.metalnessMap,Gt=!!v.roughnessMap,k=v.anisotropy>0,ne=v.clearcoat>0,kt=v.dispersion>0,N=v.retroreflectivity>0,S=v.iridescence>0,K=v.sheen>0,ot=v.transmission>0,ct=k&&!!v.anisotropyMap,U=ne&&!!v.clearcoatMap,x=ne&&!!v.clearcoatNormalMap,_=ne&&!!v.clearcoatRoughnessMap,M=S&&!!v.iridescenceMap,I=S&&!!v.iridescenceThicknessMap,P=K&&!!v.sheenColorMap,V=K&&!!v.sheenRoughnessMap,B=!!v.specularMap,tt=!!v.specularColorMap,j=!!v.specularIntensityMap,yt=ot&&!!v.transmissionMap,C=ot&&!!v.thicknessMap,$=!!v.gradientMap,H=!!v.alphaMap,pt=v.alphaTest>0,mt=!!v.alphaHash,ht=!!v.extensions,vt=wn;v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(vt=i.toneMapping);let Mt={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Kt,fragmentShader:Xt,defines:v.defines,customVertexShaderID:Zt,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&W._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&W.instanceColor!==null,instancingMorph:Ht&&W.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Nt,matcap:ae,envMap:Z,envMapMode:Z&&at.mapping,envMapCubeUVHeight:rt,aoMap:dt,lightMap:_t,bumpMap:xt,normalMap:St,displacementMap:zt,emissiveMap:Ot,normalMapObjectSpace:St&&v.normalMapType===ru,normalMapTangentSpace:St&&v.normalMapType===Pr,packedNormalMap:St&&v.normalMapType===Pr&&Vx(v.normalMap.format),metalnessMap:Vt,roughnessMap:Gt,anisotropy:k,anisotropyMap:ct,clearcoat:ne,clearcoatMap:U,clearcoatNormalMap:x,clearcoatRoughnessMap:_,dispersion:kt,retroreflection:N,iridescence:S,iridescenceMap:M,iridescenceThicknessMap:I,sheen:K,sheenColorMap:P,sheenRoughnessMap:V,specularMap:B,specularColorMap:tt,specularIntensityMap:j,transmission:ot,transmissionMap:yt,thicknessMap:C,gradientMap:$,opaque:v.transparent===!1&&v.blending===Rs&&v.alphaToCoverage===!1,alphaMap:H,alphaTest:pt,alphaHash:mt,combine:v.combine,mapUv:Nt&&p(v.map.channel),aoMapUv:dt&&p(v.aoMap.channel),lightMapUv:_t&&p(v.lightMap.channel),bumpMapUv:xt&&p(v.bumpMap.channel),normalMapUv:St&&p(v.normalMap.channel),displacementMapUv:zt&&p(v.displacementMap.channel),emissiveMapUv:Ot&&p(v.emissiveMap.channel),metalnessMapUv:Vt&&p(v.metalnessMap.channel),roughnessMapUv:Gt&&p(v.roughnessMap.channel),anisotropyMapUv:ct&&p(v.anisotropyMap.channel),clearcoatMapUv:U&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:M&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:I&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:P&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:V&&p(v.sheenRoughnessMap.channel),specularMapUv:B&&p(v.specularMap.channel),specularColorMapUv:tt&&p(v.specularColorMap.channel),specularIntensityMapUv:j&&p(v.specularIntensityMap.channel),transmissionMapUv:yt&&p(v.transmissionMap.channel),thicknessMapUv:C&&p(v.thicknessMap.channel),alphaMapUv:H&&p(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(St||k),vertexNormals:!!J.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(Nt||H),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||J.attributes.normal===void 0&&St===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Et,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Nt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:Ot&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===kn,flipSided:v.side===Ke,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ht&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&v.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function g(v){let L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)L.push(F),L.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(m(L,v),E(L,v),L.push(i.outputColorSpace)),L.push(v.customProgramCacheKey),L.join()}function m(v,L){v.push(L.precision),v.push(L.outputColorSpace),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.mapUv),v.push(L.alphaMapUv),v.push(L.lightMapUv),v.push(L.aoMapUv),v.push(L.bumpMapUv),v.push(L.normalMapUv),v.push(L.displacementMapUv),v.push(L.emissiveMapUv),v.push(L.metalnessMapUv),v.push(L.roughnessMapUv),v.push(L.anisotropyMapUv),v.push(L.clearcoatMapUv),v.push(L.clearcoatNormalMapUv),v.push(L.clearcoatRoughnessMapUv),v.push(L.iridescenceMapUv),v.push(L.iridescenceThicknessMapUv),v.push(L.sheenColorMapUv),v.push(L.sheenRoughnessMapUv),v.push(L.specularMapUv),v.push(L.specularColorMapUv),v.push(L.specularIntensityMapUv),v.push(L.transmissionMapUv),v.push(L.thicknessMapUv),v.push(L.combine),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numSunLights),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numSpotLightMaps),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numSunLightShadows),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.numSpotLightShadowsWithMaps),v.push(L.numLightProbes),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function E(v,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){let L=d[v.type],F;if(L){let z=Hn[L];F=Mu.clone(z.uniforms)}else F=v.uniforms;return F}function b(v,L){let F=h.get(L);return F!==void 0?++F.usedTimes:(F=new zx(i,L,v,s),c.push(F),h.set(L,F)),F}function A(v){if(--v.usedTimes===0){let L=c.indexOf(v);c[L]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function D(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:D}}function Hx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,y,g,m){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:m},i[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=p,E.materialVariant=o(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=g,E.group=m),t++,E}function l(u,d,p,y,g,m,E){E.reversedDepth===!0&&(g=-g);let R=a(u,d,p,y,g,m);p.transmission>0?n.push(R):p.transparent===!0?s.push(R):e.push(R)}function c(u,d,p,y,g,m){let E=a(u,d,p,y,g,m);p.transmission>0?n.unshift(E):p.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,d){e.length>1&&e.sort(u||Wx),n.length>1&&n.sort(d||Hu),s.length>1&&s.sort(d||Hu)}function f(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Xx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Wu,i.set(n,[o])):s>=r.length?(o=new Wu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Jt};break;case"SpotLight":e={position:new G,direction:new G,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Zx=0;function Jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $x(i){let t=new qx,e=Yx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new ue,o=new ue;function a(c){let h=0,f=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let d=0,p=0,y=0,g=0,m=0,E=0,R=0,b=0,A=0,w=0,D=0,v=0,L=0,F=0;c.sort(Jx);for(let W=0,Y=c.length;W<Y;W++){let O=c[W],J=O.color,nt=O.intensity,Q=O.distance,at=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ai?at=O.shadow.map.texture:at=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=J.r*nt,f+=J.g*nt,u+=J.b*nt;else if(O.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(O.sh.coefficients[rt],nt);F++}else if(O.isSunLight){let rt=t.get(O);if(rt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[p]=ut,n.sunShadowMap[p]=at;let At=et.getViewportCount();for(let Et=0;Et<At;Et++)n.sunShadowMatrix[y+Et]=et.getMatrix(Et),n.sunShadowCascade[y+Et]=et._cascadeData[Et];y+=At,p++}n.sun[d]=rt,d++}else if(O.isDirectionalLight){let rt=t.get(O);if(rt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let et=O.shadow,ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,n.directionalShadow[g]=ut,n.directionalShadowMap[g]=at,n.directionalShadowMatrix[g]=O.shadow.matrix,A++}n.directional[g]=rt,g++}else if(O.isSpotLight){let rt=t.get(O);rt.position.setFromMatrixPosition(O.matrixWorld),rt.color.copy(J).multiplyScalar(nt),rt.distance=Q,rt.coneCos=Math.cos(O.angle),rt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),rt.decay=O.decay,n.spot[E]=rt;let et=O.shadow;if(O.map&&(n.spotLightMap[v]=O.map,v++,et.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[E]=et.matrix,O.castShadow){let ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,n.spotShadow[E]=ut,n.spotShadowMap[E]=at,D++}E++}else if(O.isRectAreaLight){let rt=t.get(O);rt.color.copy(J).multiplyScalar(nt),rt.halfWidth.set(O.width*.5,0,0),rt.halfHeight.set(0,O.height*.5,0),n.rectArea[R]=rt,R++}else if(O.isPointLight){let rt=t.get(O);if(rt.color.copy(O.color).multiplyScalar(O.intensity),rt.distance=O.distance,rt.decay=O.decay,O.castShadow){let et=O.shadow,ut=e.get(O);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,ut.shadowCameraNear=et.camera.near,ut.shadowCameraFar=et.camera.far,n.pointShadow[m]=ut,n.pointShadowMap[m]=at,n.pointShadowMatrix[m]=O.shadow.matrix,w++}n.point[m]=rt,m++}else if(O.isHemisphereLight){let rt=t.get(O);rt.skyColor.copy(O.color).multiplyScalar(nt),rt.groundColor.copy(O.groundColor).multiplyScalar(nt),n.hemi[b]=rt,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let z=n.hash;(z.sunLength!==d||z.directionalLength!==g||z.pointLength!==m||z.spotLength!==E||z.rectAreaLength!==R||z.hemiLength!==b||z.numSunShadows!==p||z.numDirectionalShadows!==A||z.numPointShadows!==w||z.numSpotShadows!==D||z.numSpotMaps!==v||z.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=g,n.spot.length=E,n.rectArea.length=R,n.point.length=m,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=F,z.sunLength=d,z.directionalLength=g,z.pointLength=m,z.spotLength=E,z.rectAreaLength=R,z.hemiLength=b,z.numSunShadows=p,z.numDirectionalShadows=A,z.numPointShadows=w,z.numSpotShadows=D,z.numSpotMaps=v,z.numLightProbes=F,n.version=Zx++)}function l(c,h){let f=0,u=0,d=0,p=0,y=0,g=0,m=h.matrixWorldInverse;for(let E=0,R=c.length;E<R;E++){let b=c[E];if(b.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),f++}else if(b.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(b.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Xu(i){let t=new $x(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Kx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xu(i),t.set(s,[a])):r>=o.length?(a=new Xu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
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
}`,t_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],e_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],qu=new ue,Nr=new G,Mc=new G;function n_(i,t,e){let n=new ys,s=new bt,r=new bt,o=new be,a=new Go,l=new Ho,c={},h=e.maxTextureSize,f={[Mi]:Ke,[Ke]:Mi,[kn]:kn},u=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:jx,fragmentShader:Qx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Me;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xe(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vi;let m=this.type;this.render=function(w,D,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Fh&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vi);let L=i.getRenderTarget(),F=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Vn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Y=m!==this.type;Y&&D.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(J=>J.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,J=w.length;O<J;O++){let nt=w[O],Q=nt.shadow;if(Q===void 0){Wt("WebGLShadowMap:",nt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let at=Q.getFrameExtents();s.multiply(at),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,Q.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=rt,Q.map===null||Y===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===As){if(nt.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new en(s.x,s.y,{format:Ai,type:Rn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),Q.map.texture.name=nt.name+".shadowMap",Q.map.depthTexture=new xi(s.x,s.y,An),Q.map.depthTexture.name=nt.name+".shadowMapDepth",Q.map.depthTexture.format=Fn,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ue,Q.map.depthTexture.magFilter=Ue}else nt.isPointLight?(Q.map=new Za(s.x),Q.map.depthTexture=new Do(s.x,Tn)):(Q.map=new en(s.x,s.y),Q.map.depthTexture=new xi(s.x,s.y,Tn)),Q.map.depthTexture.name=nt.name+".shadowMap",Q.map.depthTexture.format=Fn,this.type===Vi?(Q.map.depthTexture.compareFunction=rt?Ha:Ga,Q.map.depthTexture.minFilter=Be,Q.map.depthTexture.magFilter=Be):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ue,Q.map.depthTexture.magFilter=Ue);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let et=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();nt.isPointLight!==!0&&Q.updateMatrices(nt,v);for(let ut=0;ut<et;ut++){let At=Q.getCamera(ut);if(nt.isPointLight){let Et=Q.camera,Kt=Q.matrix,Xt=nt.distance||Et.far;Xt!==Et.far&&(Et.far=Xt,Et.updateProjectionMatrix()),Nr.setFromMatrixPosition(nt.matrixWorld),Et.position.copy(Nr),Mc.copy(Et.position),Mc.add(t_[ut]),Et.up.copy(e_[ut]),Et.lookAt(Mc),Et.updateMatrixWorld(),Kt.makeTranslation(-Nr.x,-Nr.y,-Nr.z),qu.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(qu,Et.coordinateSystem,Et.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,ut),i.clear();else{ut===0&&(i.setRenderTarget(Q.map),i.clear());let Et=Q.getViewport(ut);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),W.viewport(o)}n=Q.getFrustum(ut),b(D,v,At,nt,this.type)}Q.isPointLightShadow!==!0&&this.type===As&&E(Q,v),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(L,F,z)};function E(w,D){let v=t.update(y);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new en(s.x,s.y,{format:Ai,type:Rn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(D,null,v,u,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(D,null,v,d,y,null)}function R(w,D,v,L){let F=null,z=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)F=z;else if(F=v.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let W=F.uuid,Y=D.uuid,O=c[W];O===void 0&&(O={},c[W]=O);let J=O[Y];J===void 0&&(J=F.clone(),O[Y]=J,D.addEventListener("dispose",A)),F=J}if(F.visible=D.visible,F.wireframe=D.wireframe,L===As?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:f[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,v.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=i.properties.get(F);W.light=v}return F}function b(w,D,v,L,F){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===As)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let Y=t.update(w),O=w.material;if(Array.isArray(O)){let J=Y.groups;for(let nt=0,Q=J.length;nt<Q;nt++){let at=J[nt],rt=O[at.materialIndex];if(rt&&rt.visible){let et=R(w,rt,L,F);w.onBeforeShadow(i,w,D,v,Y,et,at),i.renderBufferDirect(v,null,Y,et,w,at),w.onAfterShadow(i,w,D,v,Y,et,at)}}}else if(O.visible){let J=R(w,O,L,F);w.onBeforeShadow(i,w,D,v,Y,J,null),i.renderBufferDirect(v,null,Y,J,w,null),w.onAfterShadow(i,w,D,v,Y,J,null)}}let W=w.children;for(let Y=0,O=W.length;Y<O;Y++)b(W[Y],D,v,L,F)}function A(w){w.target.removeEventListener("dispose",A);for(let v in c){let L=c[v],F=w.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function i_(i,t){function e(){let C=!1,$=new be,H=null,pt=new be(0,0,0,0);return{setMask:function(mt){H!==mt&&!C&&(i.colorMask(mt,mt,mt,mt),H=mt)},setLocked:function(mt){C=mt},setClear:function(mt,ht,vt,Mt,jt){jt===!0&&(mt*=Mt,ht*=Mt,vt*=Mt),$.set(mt,ht,vt,Mt),pt.equals($)===!1&&(i.clearColor(mt,ht,vt,Mt),pt.copy($))},reset:function(){C=!1,H=null,pt.set(-1,0,0,0)}}}function n(){let C=!1,$=!1,H=null,pt=null,mt=null;return{setReversed:function(ht){if($!==ht){let vt=t.get("EXT_clip_control");ht?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),$=ht;let Mt=mt;mt=null,this.setClear(Mt)}},getReversed:function(){return $},setTest:function(ht){ht?gt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ht){H!==ht&&!C&&(i.depthMask(ht),H=ht)},setFunc:function(ht){if($&&(ht=xu[ht]),pt!==ht){switch(ht){case _o:i.depthFunc(i.NEVER);break;case yo:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case Mo:i.depthFunc(i.GREATER);break;case Eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ht}},setLocked:function(ht){C=ht},setClear:function(ht){mt!==ht&&(mt=ht,$&&(ht=1-ht),i.clearDepth(ht))},reset:function(){C=!1,H=null,pt=null,mt=null,$=!1}}}function s(){let C=!1,$=null,H=null,pt=null,mt=null,ht=null,vt=null,Mt=null,jt=null;return{setTest:function(qt){C||(qt?gt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(qt){$!==qt&&!C&&(i.stencilMask(qt),$=qt)},setFunc:function(qt,fe,pe){(H!==qt||pt!==fe||mt!==pe)&&(i.stencilFunc(qt,fe,pe),H=qt,pt=fe,mt=pe)},setOp:function(qt,fe,pe){(ht!==qt||vt!==fe||Mt!==pe)&&(i.stencilOp(qt,fe,pe),ht=qt,vt=fe,Mt=pe)},setLocked:function(qt){C=qt},setClear:function(qt){jt!==qt&&(i.clearStencil(qt),jt=qt)},reset:function(){C=!1,$=null,H=null,pt=null,mt=null,ht=null,vt=null,Mt=null,jt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],y=null,g=!1,m=null,E=null,R=null,b=null,A=null,w=null,D=null,v=new Jt(0,0,0),L=0,F=!1,z=null,W=null,Y=null,O=null,J=null,nt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,at=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Q=at>=1):rt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Q=at>=2);let et=null,ut={},At=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Kt=new be().fromArray(At),Xt=new be().fromArray(Et);function Zt(C,$,H,pt){let mt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(C,ht),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<H;vt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D($+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ht}let ft={};ft[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(fs),xt(!1),St(Xl),gt(i.CULL_FACE),dt(Vn);function gt(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function wt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Ht(C,$){return u[C]!==$?(i.bindFramebuffer(C,$),u[C]=$,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ct(C,$){let H=p,pt=!1;if(C){H=d.get($),H===void 0&&(H=[],d.set($,H));let mt=C.textures;if(H.length!==mt.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,vt=mt.length;ht<vt;ht++)H[ht]=i.COLOR_ATTACHMENT0+ht;H.length=mt.length,pt=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,pt=!0);pt&&i.drawBuffers(H)}function Nt(C){return y!==C?(i.useProgram(C),y=C,!0):!1}let ae={[Gi]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};ae[kh]=i.MIN,ae[Vh]=i.MAX;let Z={[Gh]:i.ZERO,[Hh]:i.ONE,[Wh]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Zh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[Jl]:i.ONE_MINUS_SRC_ALPHA,[Jh]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[jh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(C,$,H,pt,mt,ht,vt,Mt,jt,qt){if(C===Vn){g===!0&&(wt(i.BLEND),g=!1);return}if(g===!1&&(gt(i.BLEND),g=!0),C!==Oh){if(C!==m||qt!==F){if((E!==Gi||A!==Gi)&&(i.blendEquation(i.FUNC_ADD),E=Gi,A=Gi),qt)switch(C){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",C);break}else switch(C){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ql:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",C);break}R=null,b=null,w=null,D=null,v.set(0,0,0),L=0,m=C,F=qt}return}mt=mt||$,ht=ht||H,vt=vt||pt,($!==E||mt!==A)&&(i.blendEquationSeparate(ae[$],ae[mt]),E=$,A=mt),(H!==R||pt!==b||ht!==w||vt!==D)&&(i.blendFuncSeparate(Z[H],Z[pt],Z[ht],Z[vt]),R=H,b=pt,w=ht,D=vt),(Mt.equals(v)===!1||jt!==L)&&(i.blendColor(Mt.r,Mt.g,Mt.b,jt),v.copy(Mt),L=jt),m=C,F=!1}function _t(C,$){C.side===kn?wt(i.CULL_FACE):gt(i.CULL_FACE);let H=C.side===Ke;$&&(H=!H),xt(H),C.blending===Rs&&C.transparent===!1?dt(Vn):dt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let pt=C.stencilWrite;a.setTest(pt),pt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ot(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(C){z!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),z=C)}function St(C){C!==Dh?(gt(i.CULL_FACE),C!==W&&(C===Xl?i.cullFace(i.BACK):C===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),W=C}function zt(C){C!==Y&&(Q&&i.lineWidth(C),Y=C)}function Ot(C,$,H){C?(gt(i.POLYGON_OFFSET_FILL),(O!==$||J!==H)&&(O=$,J=H,o.getReversed()&&($=-$),i.polygonOffset($,H))):wt(i.POLYGON_OFFSET_FILL)}function Vt(C){C?gt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function Gt(C){C===void 0&&(C=i.TEXTURE0+nt-1),et!==C&&(i.activeTexture(C),et=C)}function k(C,$,H){H===void 0&&(et===null?H=i.TEXTURE0+nt-1:H=et);let pt=ut[H];pt===void 0&&(pt={type:void 0,texture:void 0},ut[H]=pt),(pt.type!==C||pt.texture!==$)&&(et!==H&&(i.activeTexture(H),et=H),i.bindTexture(C,$||ft[C]),pt.type=C,pt.texture=$)}function ne(){let C=ut[et];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function kt(){try{i.compressedTexImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function S(){try{i.texSubImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function K(){try{i.texSubImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function U(){try{i.texStorage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function x(){try{i.texStorage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function _(){try{i.texImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function M(){try{i.texImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function I(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function P(C,$){f[C]!==$&&(i.pixelStorei(C,$),f[C]=$)}function V(C){Kt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Kt.copy(C))}function B(C){Xt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Xt.copy(C))}function tt(C,$){let H=c.get($);H===void 0&&(H=new WeakMap,c.set($,H));let pt=H.get(C);pt===void 0&&(pt=i.getUniformBlockIndex($,C.name),H.set(C,pt))}function j(C,$){let pt=c.get($).get(C);l.get($)!==pt&&(i.uniformBlockBinding($,pt,C.__bindingPointIndex),l.set($,pt))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},et=null,ut={},u={},d=new WeakMap,p=[],y=null,g=!1,m=null,E=null,R=null,b=null,A=null,w=null,D=null,v=new Jt(0,0,0),L=0,F=!1,z=null,W=null,Y=null,O=null,J=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:wt,bindFramebuffer:Ht,drawBuffers:Ct,useProgram:Nt,setBlending:dt,setMaterial:_t,setFlipSided:xt,setCullFace:St,setLineWidth:zt,setPolygonOffset:Ot,setScissorTest:Vt,activeTexture:Gt,bindTexture:k,unbindTexture:ne,compressedTexImage2D:kt,compressedTexImage3D:N,texImage2D:_,texImage3D:M,pixelStorei:P,getParameter:I,updateUBOMapping:tt,uniformBlockBinding:j,texStorage2D:U,texStorage3D:x,texSubImage2D:S,texSubImage3D:K,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:V,viewport:B,reset:yt}}function s_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(N,S){return p?new OffscreenCanvas(N,S):js("canvas")}function g(N,S,K){let ot=1,ct=kt(N);if((ct.width>K||ct.height>K)&&(ot=K/Math.max(ct.width,ct.height)),ot<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let U=Math.floor(ot*ct.width),x=Math.floor(ot*ct.height);u===void 0&&(u=y(U,x));let _=S?y(U,x):u;return _.width=U,_.height=x,_.getContext("2d").drawImage(N,0,0,U,x),Wt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+U+"x"+x+")."),_}else return"data"in N&&Wt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),N;return N}function m(N){return N.generateMipmaps}function E(N){i.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,S,K,ot,ct,U=!1){if(N!==null){if(i[N]!==void 0)return i[N];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let x;ot&&(x=t.get("EXT_texture_norm16"),x||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _=S;if(S===i.RED&&(K===i.FLOAT&&(_=i.R32F),K===i.HALF_FLOAT&&(_=i.R16F),K===i.UNSIGNED_BYTE&&(_=i.R8),K===i.UNSIGNED_SHORT&&x&&(_=x.R16_EXT),K===i.SHORT&&x&&(_=x.R16_SNORM_EXT)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.R8UI),K===i.UNSIGNED_SHORT&&(_=i.R16UI),K===i.UNSIGNED_INT&&(_=i.R32UI),K===i.BYTE&&(_=i.R8I),K===i.SHORT&&(_=i.R16I),K===i.INT&&(_=i.R32I)),S===i.RG&&(K===i.FLOAT&&(_=i.RG32F),K===i.HALF_FLOAT&&(_=i.RG16F),K===i.UNSIGNED_BYTE&&(_=i.RG8),K===i.UNSIGNED_SHORT&&x&&(_=x.RG16_EXT),K===i.SHORT&&x&&(_=x.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.RG8UI),K===i.UNSIGNED_SHORT&&(_=i.RG16UI),K===i.UNSIGNED_INT&&(_=i.RG32UI),K===i.BYTE&&(_=i.RG8I),K===i.SHORT&&(_=i.RG16I),K===i.INT&&(_=i.RG32I)),S===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.RGB8UI),K===i.UNSIGNED_SHORT&&(_=i.RGB16UI),K===i.UNSIGNED_INT&&(_=i.RGB32UI),K===i.BYTE&&(_=i.RGB8I),K===i.SHORT&&(_=i.RGB16I),K===i.INT&&(_=i.RGB32I)),S===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),K===i.UNSIGNED_INT&&(_=i.RGBA32UI),K===i.BYTE&&(_=i.RGBA8I),K===i.SHORT&&(_=i.RGBA16I),K===i.INT&&(_=i.RGBA32I)),S===i.RGB&&(K===i.UNSIGNED_SHORT&&x&&(_=x.RGB16_EXT),K===i.SHORT&&x&&(_=x.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(_=i.R11F_G11F_B10F)),S===i.RGBA){let M=U?Ks:re.getTransfer(ct);K===i.FLOAT&&(_=i.RGBA32F),K===i.HALF_FLOAT&&(_=i.RGBA16F),K===i.UNSIGNED_BYTE&&(_=M===he?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&x&&(_=x.RGBA16_EXT),K===i.SHORT&&x&&(_=x.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_}function A(N,S){let K;return N?S===null||S===Tn||S===Is?K=i.DEPTH24_STENCIL8:S===An?K=i.DEPTH32F_STENCIL8:S===Cs&&(K=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Tn||S===Is?K=i.DEPTH_COMPONENT24:S===An?K=i.DEPTH_COMPONENT32F:S===Cs&&(K=i.DEPTH_COMPONENT16),K}function w(N,S){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ue&&N.minFilter!==Be?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function D(N){let S=N.target;S.removeEventListener("dispose",D),L(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function v(N){let S=N.target;S.removeEventListener("dispose",v),z(S)}function L(N){let S=n.get(N);if(S.__webglInit===void 0)return;let K=N.source,ot=d.get(K);if(ot){let ct=ot[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&F(N),Object.keys(ot).length===0&&d.delete(K)}n.remove(N)}function F(N){let S=n.get(N);i.deleteTexture(S.__webglTexture);let K=N.source,ot=d.get(K);delete ot[S.__cacheKey],o.memory.textures--}function z(N){let S=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(S.__webglFramebuffer[ot]))for(let ct=0;ct<S.__webglFramebuffer[ot].length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[ot][ct]);else i.deleteFramebuffer(S.__webglFramebuffer[ot]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ot])}else{if(Array.isArray(S.__webglFramebuffer))for(let ot=0;ot<S.__webglFramebuffer.length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[ot]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ot=0;ot<S.__webglColorRenderbuffer.length;ot++)S.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ot]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let K=N.textures;for(let ot=0,ct=K.length;ot<ct;ot++){let U=n.get(K[ot]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove(K[ot])}n.remove(N)}let W=0;function Y(){W=0}function O(){return W}function J(N){W=N}function nt(){let N=W;return N>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,N}function Q(N){let S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function at(N,S){let K=n.get(N);if(N.isVideoTexture&&k(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){let ot=N.image;if(ot===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(K,N,S);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function rt(N,S){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){wt(K,N,S);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function et(N,S){let K=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){wt(K,N,S);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function ut(N,S){let K=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&K.__version!==N.version){Ht(K,N,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let At={[Di]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},Et={[Ue]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},Kt={[au]:i.NEVER,[fu]:i.ALWAYS,[lu]:i.LESS,[Ga]:i.LEQUAL,[cu]:i.EQUAL,[Ha]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function Xt(N,S){if(S.type===An&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Be||S.magFilter===ra||S.magFilter===Er||S.magFilter===wi||S.minFilter===Be||S.minFilter===ra||S.minFilter===Er||S.minFilter===wi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,At[S.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,At[S.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,At[S.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Et[S.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Kt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ue||S.minFilter!==Er&&S.minFilter!==wi||S.type===An&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(N,S){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",D));let ot=S.source,ct=d.get(ot);ct===void 0&&(ct={},d.set(ot,ct));let U=Q(S);if(U!==N.__cacheKey){ct[U]===void 0&&(ct[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ct[U].usedTimes++;let x=ct[N.__cacheKey];x!==void 0&&(ct[N.__cacheKey].usedTimes--,x.usedTimes===0&&F(S)),N.__cacheKey=U,N.__webglTexture=ct[U].texture}return K}function ft(N,S,K){return Math.floor(Math.floor(N/K)/S)}function gt(N,S,K,ot){let U=N.updateRanges;if(U.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,K,ot,S.data);else{U.sort((P,V)=>P.start-V.start);let x=0;for(let P=1;P<U.length;P++){let V=U[x],B=U[P],tt=V.start+V.count,j=ft(B.start,S.width,4),yt=ft(V.start,S.width,4);B.start<=tt+1&&j===yt&&ft(B.start+B.count-1,S.width,4)===j?V.count=Math.max(V.count,B.start+B.count-V.start):(++x,U[x]=B)}U.length=x+1;let _=e.getParameter(i.UNPACK_ROW_LENGTH),M=e.getParameter(i.UNPACK_SKIP_PIXELS),I=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let P=0,V=U.length;P<V;P++){let B=U[P],tt=Math.floor(B.start/4),j=Math.ceil(B.count/4),yt=tt%S.width,C=Math.floor(tt/S.width),$=j,H=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,yt,C,$,H,K,ot,S.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,_),e.pixelStorei(i.UNPACK_SKIP_PIXELS,M),e.pixelStorei(i.UNPACK_SKIP_ROWS,I)}}function wt(N,S,K){let ot=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=i.TEXTURE_3D);let ct=Zt(N,S),U=S.source;e.bindTexture(ot,N.__webglTexture,i.TEXTURE0+K);let x=n.get(U);if(U.version!==x.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let H=re.getPrimaries(re.workingColorSpace),pt=S.colorSpace===ni?null:re.getPrimaries(S.colorSpace),mt=S.colorSpace===ni||H===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let M=g(S.image,!1,s.maxTextureSize);M=ne(S,M);let I=r.convert(S.format,S.colorSpace),P=r.convert(S.type),V=b(S.internalFormat,I,P,S.normalized,S.colorSpace,S.isVideoTexture);Xt(ot,S);let B,tt=S.mipmaps,j=S.isVideoTexture!==!0,yt=x.__version===void 0||ct===!0,C=U.dataReady,$=w(S,M);if(S.isDepthTexture)V=A(S.format===Ti,S.type),yt&&(j?e.texStorage2D(i.TEXTURE_2D,1,V,M.width,M.height):e.texImage2D(i.TEXTURE_2D,0,V,M.width,M.height,0,I,P,null));else if(S.isDataTexture)if(tt.length>0){j&&yt&&e.texStorage2D(i.TEXTURE_2D,$,V,tt[0].width,tt[0].height);for(let H=0,pt=tt.length;H<pt;H++)B=tt[H],j?C&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,P,B.data):e.texImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,I,P,B.data);S.generateMipmaps=!1}else j?(yt&&e.texStorage2D(i.TEXTURE_2D,$,V,M.width,M.height),C&&gt(S,M,I,P)):e.texImage2D(i.TEXTURE_2D,0,V,M.width,M.height,0,I,P,M.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){j&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,V,tt[0].width,tt[0].height,M.depth);for(let H=0,pt=tt.length;H<pt;H++)if(B=tt[H],S.format!==xn)if(I!==null)if(j){if(C)if(S.layerUpdates.size>0){let mt=xc(B.width,B.height,S.format,S.type);for(let ht of S.layerUpdates){let vt=B.data.subarray(ht*mt/B.data.BYTES_PER_ELEMENT,(ht+1)*mt/B.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ht,B.width,B.height,1,I,vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,B.width,B.height,M.depth,I,B.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,V,B.width,B.height,M.depth,0,B.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,B.width,B.height,M.depth,I,P,B.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,V,B.width,B.height,M.depth,0,I,P,B.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{j&&yt&&e.texStorage2D(i.TEXTURE_2D,$,V,tt[0].width,tt[0].height);for(let H=0,pt=tt.length;H<pt;H++)B=tt[H],S.format!==xn?I!==null?j?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,B.data):e.compressedTexImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,B.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?C&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,B.width,B.height,I,P,B.data):e.texImage2D(i.TEXTURE_2D,H,V,B.width,B.height,0,I,P,B.data)}else if(S.isDataArrayTexture)if(j){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,V,M.width,M.height,M.depth),C)if(S.layerUpdates.size>0){let H=xc(M.width,M.height,S.format,S.type);for(let pt of S.layerUpdates){let mt=M.data.subarray(pt*H/M.data.BYTES_PER_ELEMENT,(pt+1)*H/M.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,M.width,M.height,1,I,P,mt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,I,P,M.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,V,M.width,M.height,M.depth,0,I,P,M.data);else if(S.isData3DTexture)j?(yt&&e.texStorage3D(i.TEXTURE_3D,$,V,M.width,M.height,M.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,I,P,M.data)):e.texImage3D(i.TEXTURE_3D,0,V,M.width,M.height,M.depth,0,I,P,M.data);else if(S.isFramebufferTexture){if(yt)if(j)e.texStorage2D(i.TEXTURE_2D,$,V,M.width,M.height);else{let H=M.width,pt=M.height;for(let mt=0;mt<$;mt++)e.texImage2D(i.TEXTURE_2D,mt,V,H,pt,0,I,P,null),H>>=1,pt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let H=i.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),M.parentNode!==H){H.appendChild(M),f.add(S),H.onpaint=pt=>{let mt=pt.changedElements;for(let ht of f)mt.includes(ht.image)&&(ht.needsUpdate=!0)},H.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,M);else{let mt=i.RGBA,ht=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,ht,vt,M)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(j&&yt){let H=kt(tt[0]);e.texStorage2D(i.TEXTURE_2D,$,V,H.width,H.height)}for(let H=0,pt=tt.length;H<pt;H++)B=tt[H],j?C&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,I,P,B):e.texImage2D(i.TEXTURE_2D,H,V,I,P,B);S.generateMipmaps=!1}else if(j){if(yt){let H=kt(M);e.texStorage2D(i.TEXTURE_2D,$,V,H.width,H.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,I,P,M)}else e.texImage2D(i.TEXTURE_2D,0,V,I,P,M);m(S)&&E(ot),x.__version=U.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Ht(N,S,K){if(S.image.length!==6)return;let ot=Zt(N,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+K);let U=n.get(ct);if(ct.version!==U.__version||ot===!0){e.activeTexture(i.TEXTURE0+K);let x=re.getPrimaries(re.workingColorSpace),_=S.colorSpace===ni?null:re.getPrimaries(S.colorSpace),M=S.colorSpace===ni||x===_?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let I=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,V=[];for(let ht=0;ht<6;ht++)!I&&!P?V[ht]=g(S.image[ht],!0,s.maxCubemapSize):V[ht]=P?S.image[ht].image:S.image[ht],V[ht]=ne(S,V[ht]);let B=V[0],tt=r.convert(S.format,S.colorSpace),j=r.convert(S.type),yt=b(S.internalFormat,tt,j,S.normalized,S.colorSpace),C=S.isVideoTexture!==!0,$=U.__version===void 0||ot===!0,H=ct.dataReady,pt=w(S,B);Xt(i.TEXTURE_CUBE_MAP,S);let mt;if(I){C&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,yt,B.width,B.height);for(let ht=0;ht<6;ht++){mt=V[ht].mipmaps;for(let vt=0;vt<mt.length;vt++){let Mt=mt[vt];S.format!==xn?tt!==null?C?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,0,0,Mt.width,Mt.height,tt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,yt,Mt.width,Mt.height,0,Mt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,0,0,Mt.width,Mt.height,tt,j,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,yt,Mt.width,Mt.height,0,tt,j,Mt.data)}}}else{if(mt=S.mipmaps,C&&$){mt.length>0&&pt++;let ht=kt(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,yt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(P){C?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,V[ht].width,V[ht].height,tt,j,V[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,yt,V[ht].width,V[ht].height,0,tt,j,V[ht].data);for(let vt=0;vt<mt.length;vt++){let jt=mt[vt].image[ht].image;C?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,0,0,jt.width,jt.height,tt,j,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,yt,jt.width,jt.height,0,tt,j,jt.data)}}else{C?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,tt,j,V[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,yt,tt,j,V[ht]);for(let vt=0;vt<mt.length;vt++){let Mt=mt[vt];C?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,0,0,tt,j,Mt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,yt,tt,j,Mt.image[ht])}}}m(S)&&E(i.TEXTURE_CUBE_MAP),U.__version=ct.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Ct(N,S,K,ot,ct,U){let x=r.convert(K.format,K.colorSpace),_=r.convert(K.type),M=b(K.internalFormat,x,_,K.normalized,K.colorSpace),I=n.get(S),P=n.get(K);if(P.__renderTarget=S,!I.__hasExternalTextures){let V=Math.max(1,S.width>>U),B=Math.max(1,S.height>>U);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,U,M,V,B,S.depth,0,x,_,null):e.texImage2D(ct,U,M,V,B,0,x,_,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,ct,P.__webglTexture,0,Vt(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,ct,P.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(N,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,N),S.depthBuffer){let ot=S.depthTexture,ct=ot&&ot.isDepthTexture?ot.type:null,U=A(S.stencilBuffer,ct),x=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(S),U,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(S),U,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,U,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,N)}else{let ot=S.textures;for(let ct=0;ct<ot.length;ct++){let U=ot[ct],x=r.convert(U.format,U.colorSpace),_=r.convert(U.type),M=b(U.internalFormat,x,_,U.normalized,U.colorSpace);Gt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(S),M,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(S),M,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,M,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(N,S,K){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(S.depthTexture);if(ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ot){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,S.depthTexture.addEventListener("dispose",D)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,S.depthTexture);let I=r.convert(S.depthTexture.format),P=r.convert(S.depthTexture.type),V;S.depthTexture.format===Fn?V=i.DEPTH_COMPONENT24:S.depthTexture.format===Ti&&(V=i.DEPTH24_STENCIL8);for(let B=0;B<6;B++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,V,S.width,S.height,0,I,P,null)}}else at(S.depthTexture,0);let U=ct.__webglTexture,x=Vt(S),_=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,M=S.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Fn)Gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,_,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,M,_,U,0);else if(S.depthTexture.format===Ti)Gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,M,_,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,M,_,U,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(N){let S=n.get(N),K=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){let ot=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",ct)};ot.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=ot}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(K)for(let ot=0;ot<6;ot++)ae(S.__webglFramebuffer[ot],N,ot);else{let ot=N.texture.mipmaps;ot&&ot.length>0?ae(S.__webglFramebuffer[0],N,0):ae(S.__webglFramebuffer,N,0)}else if(K){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=i.createRenderbuffer(),Nt(S.__webglDepthbuffer[ot],N,!1);else{let ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=S.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,U)}}else{let ot=N.texture.mipmaps;if(ot&&ot.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Nt(S.__webglDepthbuffer,N,!1);else{let ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,U)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(N,S,K){let ot=n.get(N);S!==void 0&&Ct(ot.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Z(N)}function _t(N){let S=N.texture,K=n.get(N),ot=n.get(S);N.addEventListener("dispose",v);let ct=N.textures,U=N.isWebGLCubeRenderTarget===!0,x=ct.length>1;if(x||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=S.version,o.memory.textures++),U){K.__webglFramebuffer=[];for(let _=0;_<6;_++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[_]=[];for(let M=0;M<S.mipmaps.length;M++)K.__webglFramebuffer[_][M]=i.createFramebuffer()}else K.__webglFramebuffer[_]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let _=0;_<S.mipmaps.length;_++)K.__webglFramebuffer[_]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(x)for(let _=0,M=ct.length;_<M;_++){let I=n.get(ct[_]);I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Gt(N)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let _=0;_<ct.length;_++){let M=ct[_];K.__webglColorRenderbuffer[_]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[_]);let I=r.convert(M.format,M.colorSpace),P=r.convert(M.type),V=b(M.internalFormat,I,P,M.normalized,M.colorSpace,N.isXRRenderTarget===!0),B=Vt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,B,V,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_,i.RENDERBUFFER,K.__webglColorRenderbuffer[_])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(K.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,S);for(let _=0;_<6;_++)if(S.mipmaps&&S.mipmaps.length>0)for(let M=0;M<S.mipmaps.length;M++)Ct(K.__webglFramebuffer[_][M],N,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,M);else Ct(K.__webglFramebuffer[_],N,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,0);m(S)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(x){for(let _=0,M=ct.length;_<M;_++){let I=ct[_],P=n.get(I),V=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(V=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,P.__webglTexture),Xt(V,I),Ct(K.__webglFramebuffer,N,I,i.COLOR_ATTACHMENT0+_,V,0),m(I)&&E(V)}e.unbindTexture()}else{let _=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_,ot.__webglTexture),Xt(_,S),S.mipmaps&&S.mipmaps.length>0)for(let M=0;M<S.mipmaps.length;M++)Ct(K.__webglFramebuffer[M],N,S,i.COLOR_ATTACHMENT0,_,M);else Ct(K.__webglFramebuffer,N,S,i.COLOR_ATTACHMENT0,_,0);m(S)&&E(_),e.unbindTexture()}N.depthBuffer&&Z(N)}function xt(N){let S=N.textures;for(let K=0,ot=S.length;K<ot;K++){let ct=S[K];if(m(ct)){let U=R(N),x=n.get(ct).__webglTexture;e.bindTexture(U,x),E(U),e.unbindTexture()}}}let St=[],zt=[];function Ot(N){if(N.samples>0){if(Gt(N)===!1){let S=N.textures,K=N.width,ot=N.height,ct=i.COLOR_BUFFER_BIT,U=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=n.get(N),_=S.length>1;if(_)for(let I=0;I<S.length;I++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,x.__webglMultisampledFramebuffer);let M=N.texture.mipmaps;M&&M.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglFramebuffer);for(let I=0;I<S.length;I++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,x.__webglColorRenderbuffer[I]);let P=n.get(S[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,K,ot,0,0,K,ot,ct,i.NEAREST),l===!0&&(St.length=0,zt.length=0,St.push(i.COLOR_ATTACHMENT0+I),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(St.push(U),zt.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_)for(let I=0;I<S.length;I++){e.bindFramebuffer(i.FRAMEBUFFER,x.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,x.__webglColorRenderbuffer[I]);let P=n.get(S[I]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,x.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let S=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Vt(N){return Math.min(s.maxSamples,N.samples)}function Gt(N){let S=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(N){let S=o.render.frame;h.get(N)!==S&&(h.set(N,S),N.update())}function ne(N,S){let K=N.colorSpace,ot=N.format,ct=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==$s&&K!==ni&&(re.getTransfer(K)===he?(ot!==xn||ct!==nn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",K)),S}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=Y,this.getTextureUnits=O,this.setTextureUnits=J,this.setTexture2D=at,this.setTexture2DArray=rt,this.setTexture3D=et,this.setTextureCube=ut,this.rebindTextures=dt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function r_(i,t){function e(n,s=ni){let r,o=re.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ic)return i.BYTE;if(n===sc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===lc)return i.RGB;if(n===xn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===wr||n===Tr||n===Ar||n===Rr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===da||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===xa||n===_a||n===ya||n===va||n===Cr||n===Sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===xa)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return r.COMPRESSED_RG11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ba||n===Ma||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Na||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Ir||n===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:o_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,y=typeof XRWebGLBinding<"u",g=new Pc,m={},E=e.getContextAttributes(),R=null,b=null,A=[],w=[],D=new bt,v=null,L=null,F=new Ze;F.viewport=new be;let z=new Ze;z.viewport=new be;let W=[F,z],Y=new ea,O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let gt=A[ft];return gt===void 0&&(gt=new _s,A[ft]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(ft){let gt=A[ft];return gt===void 0&&(gt=new _s,A[ft]=gt),gt.getGripSpace()},this.getHand=function(ft){let gt=A[ft];return gt===void 0&&(gt=new _s,A[ft]=gt),gt.getHandSpace()};function nt(ft){let gt=w.indexOf(ft.inputSource);if(gt===-1)return;let wt=A[gt];wt!==void 0&&(wt.update(ft.inputSource,ft.frame,c||o),wt.dispatchEvent({type:ft.type,data:ft.inputSource}))}function Q(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",at);for(let ft=0;ft<A.length;ft++){let gt=w[ft];gt!==null&&(w[ft]=null,A[ft].disconnect(gt))}O=null,J=null,g.reset();for(let ft in m)delete m[ft];if(t.setRenderTarget(R),d=null,u=null,f=null,s=null,b=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(D.width,D.height,!1),L!==null){let ft=L.camera;ft.fov=L.fov,ft.zoom=L.zoom,ft.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){a=ft,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Ct=null;E.depth&&(Ct=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=E.stencil?Ti:Fn,Ht=E.stencil?Is:Tn);let Nt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Nt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new en(u.textureWidth,u.textureHeight,{format:xn,type:nn,depthTexture:new xi(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let wt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new en(d.framebufferWidth,d.framebufferHeight,{format:xn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function at(ft){for(let gt=0;gt<ft.removed.length;gt++){let wt=ft.removed[gt],Ht=w.indexOf(wt);Ht>=0&&(w[Ht]=null,A[Ht].disconnect(wt))}for(let gt=0;gt<ft.added.length;gt++){let wt=ft.added[gt],Ht=w.indexOf(wt);if(Ht===-1){for(let Nt=0;Nt<A.length;Nt++)if(Nt>=w.length){w.push(wt),Ht=Nt;break}else if(w[Nt]===null){w[Nt]=wt,Ht=Nt;break}if(Ht===-1)break}let Ct=A[Ht];Ct&&Ct.connect(wt)}}let rt=new G,et=new G;function ut(ft,gt,wt){rt.setFromMatrixPosition(gt.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);let Ht=rt.distanceTo(et),Ct=gt.projectionMatrix.elements,Nt=wt.projectionMatrix.elements,ae=Ct[14]/(Ct[10]-1),Z=Ct[14]/(Ct[10]+1),dt=(Ct[9]+1)/Ct[5],_t=(Ct[9]-1)/Ct[5],xt=(Ct[8]-1)/Ct[0],St=(Nt[8]+1)/Nt[0],zt=ae*xt,Ot=ae*St,Vt=Ht/(-xt+St),Gt=Vt*-xt;if(gt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(Gt),ft.translateZ(Vt),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),Ct[10]===-1)ft.projectionMatrix.copy(gt.projectionMatrix),ft.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let k=ae+Vt,ne=Z+Vt,kt=zt-Gt,N=Ot+(Ht-Gt),S=dt*Z/ne*k,K=_t*Z/ne*k;ft.projectionMatrix.makePerspective(kt,N,S,K,k,ne),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function At(ft,gt){gt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(gt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let gt=ft.near,wt=ft.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),Y.near=z.near=F.near=gt,Y.far=z.far=F.far=wt,(O!==Y.near||J!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),O=Y.near,J=Y.far),Y.layers.mask=ft.layers.mask|6,F.layers.mask=Y.layers.mask&-5,z.layers.mask=Y.layers.mask&-3;let Ht=ft.parent,Ct=Y.cameras;At(Y,Ht);for(let Nt=0;Nt<Ct.length;Nt++)At(Ct[Nt],Ht);Ct.length===2?ut(Y,F,z):Y.projectionMatrix.copy(F.projectionMatrix),L===null&&ft.isPerspectiveCamera&&(L={camera:ft,fov:ft.fov,zoom:ft.zoom}),Et(ft,Y,Ht)};function Et(ft,gt,wt){wt===null?ft.matrix.copy(gt.matrixWorld):(ft.matrix.copy(wt.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(gt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(gt.projectionMatrix),ft.projectionMatrixInverse.copy(gt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=ms*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(ft){l=ft,u!==null&&(u.fixedFoveation=ft),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ft)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(Y)},this.getCameraTexture=function(ft){return m[ft]};let Kt=null;function Xt(ft,gt){if(h=gt.getViewerPose(c||o),p=gt,h!==null){let wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Ht=!1;wt.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let Z=0;Z<wt.length;Z++){let dt=wt[Z],_t=null;if(d!==null)_t=d.getViewport(dt);else{let St=f.getViewSubImage(u,dt);_t=St.viewport,Z===0&&(t.setRenderTargetTextures(b,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(b))}let xt=W[Z];xt===void 0&&(xt=new Ze,xt.layers.enable(Z),xt.viewport=new be,W[Z]=xt),xt.matrix.fromArray(dt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(dt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(_t.x,_t.y,_t.width,_t.height),Z===0&&(Y.matrix.copy(xt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(xt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Z=f.getDepthInformation(wt[0]);Z&&Z.isValid&&Z.texture&&g.init(Z,s.renderState)}if(Ct&&Ct.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Z=0;Z<wt.length;Z++){let dt=wt[Z].camera;if(dt){let _t=m[dt];_t||(_t=new or,m[dt]=_t);let xt=f.getCameraImage(dt);_t.sourceTexture=xt}}}}for(let wt=0;wt<A.length;wt++){let Ht=w[wt],Ct=A[wt];Ht!==null&&Ct!==void 0&&Ct.update(Ht,gt,c||o)}Kt&&Kt(ft,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),p=null}let Zt=new Yu;Zt.setAnimationLoop(Xt),this.setAnimationLoop=function(ft){Kt=ft},this.dispose=function(){}}},l_=new ue,Qu=new $t;Qu.set(-1,0,0,0,1,0,0,0,1);function c_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,pc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,E,R,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,E,R):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let E=t.get(m),R=E.envMap,b=E.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(l_.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Qu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,E,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=R*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let E=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){let w=A.program;n.uniformBlockBinding(b,w)}function c(b,A){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",E));let D=A.program;n.updateUBOMapping(b,D);let v=t.render.frame;r[b.id]!==v&&(u(b),r[b.id]=v)}function h(b){let A=f();b.__bindingPointIndex=A;let w=i.createBuffer(),D=b.__size,v=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let A=s[b.id],w=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let v=0,L=w.length;v<L;v++){let F=w[v];if(Array.isArray(F))for(let z=0,W=F.length;z<W;z++)d(F[z],v,z,D);else d(F,v,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,A,w,D){if(y(b,A,w,D)===!0){let v=b.__offset,L=b.value;if(Array.isArray(L)){let F=0;for(let z=0;z<L.length;z++){let W=L[z],Y=m(W);p(W,b.__data,F),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(L,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,b.__data)}}function p(b,A,w){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,w)}function y(b,A,w,D){let v=b.value,L=A+"_"+w;if(D[L]===void 0)return typeof v=="number"||typeof v=="boolean"?D[L]=v:ArrayBuffer.isView(v)?D[L]=v.slice():D[L]=v.clone(),!0;{let F=D[L];if(typeof v=="number"||typeof v=="boolean"){if(F!==v)return D[L]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(F.equals(v)===!1)return F.copy(v),!0}}return!1}function g(b){let A=b.uniforms,w=0,D=16;for(let L=0,F=A.length;L<F;L++){let z=Array.isArray(A[L])?A[L]:[A[L]];for(let W=0,Y=z.length;W<Y;W++){let O=z[W],J=Array.isArray(O.value)?O.value:[O.value];for(let nt=0,Q=J.length;nt<Q;nt++){let at=J[nt],rt=m(at),et=w%D,ut=et%rt.boundary,At=et+ut;w+=ut,At!==0&&D-At<rt.storage&&(w+=D-At),O.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=rt.storage}}}let v=w%D;return v>0&&(w+=D-v),b.__size=w,b.__cache={},this}function m(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",b),A}function E(b){let A=b.target;A.removeEventListener("dispose",E);let w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function R(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function f_(){return Gn===null&&(Gn=new Io(u_,16,16,Ai,Rn),Gn.name="DFG_LUT",Gn.minFilter=Be,Gn.magFilter=Be,Gn.wrapS=Dn,Gn.wrapT=Dn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var Ja=class{constructor(t={}){let{canvas:e=pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=nn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=d,g=new Set([ua,ha,ca]),m=new Set([nn,Tn,Cs,Is,aa,la]),E=new Uint32Array(4),R=new Int32Array(4),b=new G,A=null,w=null,D=[],v=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,z=!1,W=null,Y=null,O=null,J=null;this._outputColorSpace=Re;let nt=0,Q=0,at=null,rt=-1,et=null,ut=new be,At=new be,Et=null,Kt=new Jt(0),Xt=0,Zt=e.width,ft=e.height,gt=1,wt=null,Ht=null,Ct=new be(0,0,Zt,ft),Nt=new be(0,0,Zt,ft),ae=!1,Z=new ys,dt=!1,_t=!1,xt=new ue,St=new G,zt=new be,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Gt(){return at===null?gt:1}let k=n;function ne(T,X){return e.getContext(T,X)}let kt,N,S,K,ot,ct,U,x,_,M,I,P,V,B,tt,j,yt,C,$,H,pt,mt,ht;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),k===null){let X="webgl2";if(k=ne(X,T),k===null)throw ne(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}vt()}catch(T){throw e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Yt("WebGLRenderer: "+T.message),T}function vt(){kt=new y0(k),kt.init(),pt=new r_(k,kt),N=new c0(k,kt,t,pt),S=new i_(k,kt),N.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),Y=k.createFramebuffer(),O=k.createFramebuffer(),J=k.createFramebuffer(),K=new b0(k),ot=new Hx,ct=new s_(k,kt,S,ot,N,pt,K),U=new _0(F),x=new Ep(k),mt=new a0(k,x),_=new v0(k,x,K,mt),M=new E0(k,_,x,mt,K),C=new M0(k,N,ct),tt=new h0(ot),I=new Gx(F,U,kt,N,mt,tt),P=new c_(F,ot),V=new Xx,B=new Kx(kt),yt=new o0(F,U,S,M,p,l),j=new n_(F,M,N),ht=new h_(k,K,N,S),$=new l0(k,kt,K),H=new S0(k,kt,K),K.programs=I.programs,F.capabilities=N,F.extensions=kt,F.properties=ot,F.renderLists=V,F.shadowMap=j,F.state=S,F.info=K}y!==nn&&(L=new T0(y,e.width,e.height,a,s,r));let Mt=new Lc(F,k);this.xr=Mt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=kt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=kt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(T){T!==void 0&&(gt=T,this.setSize(Zt,ft,!1))},this.getSize=function(T){return T.set(Zt,ft)},this.setSize=function(T,X,lt=!0){if(Mt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=T,ft=X,e.width=Math.floor(T*gt),e.height=Math.floor(X*gt),lt===!0&&(e.style.width=T+"px",e.style.height=X+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Zt*gt,ft*gt).floor()},this.setDrawingBufferSize=function(T,X,lt){Zt=T,ft=X,gt=lt,e.width=Math.floor(T*lt),e.height=Math.floor(X*lt),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(y===nn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ut)},this.getViewport=function(T){return T.copy(Ct)},this.setViewport=function(T,X,lt,it){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,X,lt,it),S.viewport(ut.copy(Ct).multiplyScalar(gt).round())},this.getScissor=function(T){return T.copy(Nt)},this.setScissor=function(T,X,lt,it){T.isVector4?Nt.set(T.x,T.y,T.z,T.w):Nt.set(T,X,lt,it),S.scissor(At.copy(Nt).multiplyScalar(gt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){S.setScissorTest(ae=T)},this.setOpaqueSort=function(T){wt=T},this.setTransparentSort=function(T){Ht=T},this.getClearColor=function(T){return T.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,lt=!0){let it=0;if(T){let st=!1;if(at!==null){let It=at.texture.format;st=g.has(It)}if(st){let It=at.texture.type,Lt=m.has(It),Rt=yt.getClearColor(),Ut=yt.getClearAlpha(),Bt=Rt.r,Qt=Rt.g,se=Rt.b;Lt?(E[0]=Bt,E[1]=Qt,E[2]=se,E[3]=Ut,k.clearBufferuiv(k.COLOR,0,E)):(R[0]=Bt,R[1]=Qt,R[2]=se,R[3]=Ut,k.clearBufferiv(k.COLOR,0,R))}else it|=k.COLOR_BUFFER_BIT}X&&(it|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(it|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&k.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),W=T},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),yt.dispose(),V.dispose(),B.dispose(),ot.dispose(),U.dispose(),M.dispose(),mt.dispose(),ht.dispose(),I.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",tn),Mt.removeEventListener("sessionend",dn),rn.stop()};function jt(T){T.preventDefault(),uc("WebGLRenderer: Context Lost."),z=!0}function qt(){uc("WebGLRenderer: Context Restored."),z=!1;let T=K.autoReset,X=j.enabled,lt=j.autoUpdate,it=j.needsUpdate,st=j.type;vt(),K.autoReset=T,j.enabled=X,j.autoUpdate=lt,j.needsUpdate=it,j.type=st}function fe(T){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){let X=T.target;X.removeEventListener("dispose",pe),je(X)}function je(T){Le(T),ot.remove(T)}function Le(T){let X=ot.get(T).programs;X!==void 0&&(X.forEach(function(lt){I.releaseProgram(lt)}),T.isShaderMaterial&&I.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,lt,it,st,It){X===null&&(X=Ot);let Lt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Rt=Of(T,X,lt,it,st);S.setMaterial(it,Lt);let Ut=lt.index,Bt=1;if(it.wireframe===!0){if(Ut=_.getWireframeAttribute(lt),Ut===void 0)return;Bt=2}let Qt=lt.drawRange,se=lt.attributes.position,Ft=Qt.start*Bt,ce=(Qt.start+Qt.count)*Bt;It!==null&&(Ft=Math.max(Ft,It.start*Bt),ce=Math.min(ce,(It.start+It.count)*Bt)),Ut!==null?(Ft=Math.max(Ft,0),ce=Math.min(ce,Ut.count)):se!=null&&(Ft=Math.max(Ft,0),ce=Math.min(ce,se.count));let Te=ce-Ft;if(Te<0||Te===1/0)return;mt.setup(st,it,Rt,lt,Ut);let ye,me=$;if(Ut!==null&&(ye=x.get(Ut),me=H,me.setIndex(ye)),st.isMesh)it.wireframe===!0?(S.setLineWidth(it.wireframeLinewidth*Gt()),me.setMode(k.LINES)):me.setMode(k.TRIANGLES);else if(st.isLine){let ze=it.linewidth;ze===void 0&&(ze=1),S.setLineWidth(ze*Gt()),st.isLineSegments?me.setMode(k.LINES):st.isLineLoop?me.setMode(k.LINE_LOOP):me.setMode(k.LINE_STRIP)}else st.isPoints?me.setMode(k.POINTS):st.isSprite&&me.setMode(k.TRIANGLES);if(st.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))me.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let ze=st._multiDrawStarts,Pt=st._multiDrawCounts,qe=st._multiDrawCount,le=Ut?x.get(Ut).bytesPerElement:1,pn=ot.get(it).currentProgram.getUniforms();for(let Ln=0;Ln<qe;Ln++)pn.setValue(k,"_gl_DrawID",Ln),me.render(ze[Ln]/le,Pt[Ln])}else if(st.isInstancedMesh)me.renderInstances(Ft,Te,st.count);else if(lt.isInstancedBufferGeometry){let ze=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Pt=Math.min(lt.instanceCount,ze);me.renderInstances(Ft,Te,Pt)}else me.render(Ft,Te)};function Qe(T,X,lt,it){W!==null&&T.isNodeMaterial&&W.setObject(it,T),dt===!0&&tt.setState(T,lt,!1),T.transparent===!0&&T.side===kn&&T.forceSinglePass===!1?(T.side=Ke,T.needsUpdate=!0,Hr(T,X,it),T.side=Mi,T.needsUpdate=!0,Hr(T,X,it),T.side=kn):Hr(T,X,it)}this.compile=function(T,X,lt=null){lt===null&&(lt=T),W!==null&&W.renderStart(T,X,lt),w=B.get(lt),w.init(X),v.push(w),lt.traverseVisible(function(st){st.isLight&&st.layers.test(X.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),T!==lt&&T.traverseVisible(function(st){st.isLight&&st.layers.test(X.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),w.setupLights(),W!==null&&W.updateLights(w.state.lightsArray),_t=this.localClippingEnabled,dt=tt.init(this.clippingPlanes,_t),dt===!0&&tt.setGlobalState(this.clippingPlanes,X),W!==null&&j.render(w.state.shadowsArray,lt,X);let it=new Set;return T.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let It=st.material;if(It)if(Array.isArray(It))for(let Lt=0;Lt<It.length;Lt++){let Rt=It[Lt];Qe(Rt,lt,X,st),it.add(Rt)}else Qe(It,lt,X,st),it.add(It)}),w=v.pop(),W!==null&&W.renderEnd(),it},this.compileAsync=function(T,X,lt=null){let it=this.compile(T,X,lt);return new Promise(st=>{function It(){if(it.forEach(function(Lt){let Ut=ot.get(Lt).currentProgram;(Ut===void 0||Ut.isReady())&&it.delete(Lt)}),it.size===0){st(T);return}setTimeout(It,10)}kt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Xe=null;function sn(T){Xe&&Xe(T)}function tn(){rn.stop()}function dn(){rn.start()}let rn=new Yu;rn.setAnimationLoop(sn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(T){Xe=T,Mt.setAnimationLoop(T),T===null?rn.stop():rn.start()},Mt.addEventListener("sessionstart",tn),Mt.addEventListener("sessionend",dn),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(T,X);let lt=Mt.enabled===!0&&Mt.isPresenting===!0,it=L!==null&&(at===null||lt)&&L.begin(F,at);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(X),X=Mt.getCamera()),T.isScene===!0&&T.onBeforeRender(F,T,X,at),w=B.get(T,v.length),w.init(X),w.state.textureUnits=ct.getTextureUnits(),v.push(w),xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(xt,bn,X.reversedDepth),_t=this.localClippingEnabled,dt=tt.init(this.clippingPlanes,_t),A=V.get(T,D.length),A.init(),D.push(A),Mt.enabled===!0&&Mt.isPresenting===!0){let Lt=F.xr.getDepthSensingMesh();Lt!==null&&Bs(Lt,X,-1/0,F.sortObjects)}Bs(T,X,0,F.sortObjects),A.finish(),W!==null&&W.updateLights(w.state.lightsArray),F.sortObjects===!0&&A.sort(wt,Ht),Vt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Vt&&yt.addToRenderList(A,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&tt.beginShadows();let st=w.state.shadowsArray;if(j.render(st,T,X),dt===!0&&tt.endShadows(),(it&&L.hasRenderPass())===!1){let Lt=A.opaque,Rt=A.transmissive;if(w.setupLights(),X.isArrayCamera){let Ut=X.cameras;if(Rt.length>0)for(let Bt=0,Qt=Ut.length;Bt<Qt;Bt++){let se=Ut[Bt];Vr(Lt,Rt,T,se)}Vt&&yt.render(T);for(let Bt=0,Qt=Ut.length;Bt<Qt;Bt++){let se=Ut[Bt];kr(A,T,se,se.viewport)}}else Rt.length>0&&Vr(Lt,Rt,T,X),Vt&&yt.render(T),kr(A,T,X)}at!==null&&Q===0&&(ct.updateMultisampleRenderTarget(at),ct.updateRenderTargetMipmap(at)),it&&L.end(F),T.isScene===!0&&T.onAfterRender(F,T,X),mt.resetDefaultState(),rt=-1,et=null,v.pop(),v.length>0?(w=v[v.length-1],ct.setTextureUnits(w.state.textureUnits),dt===!0&&tt.setGlobalState(F.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?A=D[D.length-1]:A=null,W!==null&&W.renderEnd()};function Bs(T,X,lt,it){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)lt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Z)){it&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xt);let Lt=M.update(T),Rt=T.material;Rt.visible&&A.push(T,Lt,Rt,lt,zt.z,null,X)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Z))){let Lt=M.update(T),Rt=T.material;if(it&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),zt.copy(Lt.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4(xt)),Array.isArray(Rt)){let Ut=Lt.groups;for(let Bt=0,Qt=Ut.length;Bt<Qt;Bt++){let se=Ut[Bt],Ft=Rt[se.materialIndex];Ft&&Ft.visible&&A.push(T,Lt,Ft,lt,zt.z,se,X)}}else Rt.visible&&A.push(T,Lt,Rt,lt,zt.z,null,X)}}let It=T.children;for(let Lt=0,Rt=It.length;Lt<Rt;Lt++)Bs(It[Lt],X,lt,it)}function kr(T,X,lt,it){let{opaque:st,transmissive:It,transparent:Lt}=T;w.setupLightsView(lt),dt===!0&&tt.setGlobalState(F.clippingPlanes,lt),it&&S.viewport(ut.copy(it)),st.length>0&&Gr(st,X,lt),It.length>0&&Gr(It,X,lt),Lt.length>0&&Gr(Lt,X,lt),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Vr(T,X,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[it.id]===void 0){let Ft=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[it.id]=new en(1,1,{generateMipmaps:!0,type:Ft?Rn:nn,minFilter:wi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let It=w.state.transmissionRenderTarget[it.id],Lt=it.viewport||ut;It.setSize(Lt.z*F.transmissionResolutionScale,Lt.w*F.transmissionResolutionScale);let Rt=F.getRenderTarget(),Ut=F.getActiveCubeFace(),Bt=F.getActiveMipmapLevel();F.setRenderTarget(It),F.getClearColor(Kt),Xt=F.getClearAlpha(),Xt<1&&F.setClearColor(16777215,.5),F.clear(),Vt&&yt.render(lt);let Qt=F.toneMapping;F.toneMapping=wn;let se=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),w.setupLightsView(it),dt===!0&&tt.setGlobalState(F.clippingPlanes,it),Gr(T,lt,it),ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ce=0,Te=X.length;ce<Te;ce++){let ye=X[ce],{object:me,geometry:ze,material:Pt,group:qe}=ye;if(Pt.side===kn&&me.layers.test(it.layers)){let le=Pt.side;Pt.side=Ke,Pt.needsUpdate=!0,qc(me,lt,it,ze,Pt,qe),Pt.side=le,Pt.needsUpdate=!0,Ft=!0}}Ft===!0&&(ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It))}F.setRenderTarget(Rt,Ut,Bt),F.setClearColor(Kt,Xt),se!==void 0&&(it.viewport=se),F.toneMapping=Qt}function Gr(T,X,lt){let it=X.isScene===!0?X.overrideMaterial:null;for(let st=0,It=T.length;st<It;st++){let Lt=T[st],{object:Rt,geometry:Ut,group:Bt}=Lt,Qt=Lt.material;Qt.allowOverride===!0&&it!==null&&(Qt=it),Rt.layers.test(lt.layers)&&qc(Rt,X,lt,Ut,Qt,Bt)}}function qc(T,X,lt,it,st,It){W!==null&&st.isNodeMaterial&&W.setObject(T,st),T.onBeforeRender(F,X,lt,it,st,It),T.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),st.onBeforeRender(F,X,lt,it,T,It),st.transparent===!0&&st.side===kn&&st.forceSinglePass===!1?(st.side=Ke,st.needsUpdate=!0,F.renderBufferDirect(lt,X,it,st,T,It),st.side=Mi,st.needsUpdate=!0,F.renderBufferDirect(lt,X,it,st,T,It),st.side=kn):F.renderBufferDirect(lt,X,it,st,T,It),T.onAfterRender(F,X,lt,it,st,It)}function Hr(T,X,lt){X.isScene!==!0&&(X=Ot);let it=ot.get(T),st=w.state.lights,It=w.state.shadowsArray,Lt=st.state.version,Rt=I.getParameters(T,st.state,It,X,lt,w.state.lightProbeGridArray),Ut=I.getProgramCacheKey(Rt),Bt=it.programs;it.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,it.fog=X.fog;let Qt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;it.envMap=U.get(T.envMap||it.environment,Qt),it.envMapRotation=it.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Bt===void 0&&(T.addEventListener("dispose",pe),Bt=new Map,it.programs=Bt);let se=Bt.get(Ut);if(se!==void 0){if(it.currentProgram===se&&it.lightsStateVersion===Lt)return Zc(T,Rt),se}else Rt.uniforms=I.getUniforms(T),W!==null&&T.isNodeMaterial&&W.build(T,lt,Rt),T.onBeforeCompile(Rt,F),se=I.acquireProgram(Rt,Ut),Bt.set(Ut,se),it.uniforms=Rt.uniforms;let Ft=it.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=tt.uniform),Zc(T,Rt),it.needsLights=zf(T),it.lightsStateVersion=Lt,it.needsLights&&(Ft.ambientLightColor.value=st.state.ambient,Ft.lightProbe.value=st.state.probe,Ft.sunLights.value=st.state.sun,Ft.sunLightShadows.value=st.state.sunShadow,Ft.directionalLights.value=st.state.directional,Ft.directionalLightShadows.value=st.state.directionalShadow,Ft.spotLights.value=st.state.spot,Ft.spotLightShadows.value=st.state.spotShadow,Ft.rectAreaLights.value=st.state.rectArea,Ft.ltc_1.value=st.state.rectAreaLTC1,Ft.ltc_2.value=st.state.rectAreaLTC2,Ft.pointLights.value=st.state.point,Ft.pointLightShadows.value=st.state.pointShadow,Ft.hemisphereLights.value=st.state.hemi,Ft.sunShadowMatrix.value=st.state.sunShadowMatrix,Ft.sunShadowCascade.value=st.state.sunShadowCascade,Ft.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Ft.spotLightMatrix.value=st.state.spotLightMatrix,Ft.spotLightMap.value=st.state.spotLightMap,Ft.pointShadowMatrix.value=st.state.pointShadowMatrix),it.lightProbeGrid=w.state.lightProbeGridArray.length>0,it.currentProgram=se,it.uniformsList=null,se}function Yc(T){if(T.uniformsList===null){let X=T.currentProgram.getUniforms();T.uniformsList=Ns.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Zc(T,X){let lt=ot.get(T);lt.outputColorSpace=X.outputColorSpace,lt.batching=X.batching,lt.batchingColor=X.batchingColor,lt.instancing=X.instancing,lt.instancingColor=X.instancingColor,lt.instancingMorph=X.instancingMorph,lt.skinning=X.skinning,lt.morphTargets=X.morphTargets,lt.morphNormals=X.morphNormals,lt.morphColors=X.morphColors,lt.morphTargetsCount=X.morphTargetsCount,lt.numClippingPlanes=X.numClippingPlanes,lt.numIntersection=X.numClipIntersection,lt.vertexAlphas=X.vertexAlphas,lt.vertexTangents=X.vertexTangents,lt.toneMapping=X.toneMapping}function Ff(T,X){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;b.setFromMatrixPosition(X.matrixWorld);for(let lt=0,it=T.length;lt<it;lt++){let st=T[lt];if(st.texture!==null&&st.boundingBox.containsPoint(b))return st}return null}function Of(T,X,lt,it,st){X.isScene!==!0&&(X=Ot),ct.resetTextureUnits();let It=X.fog,Lt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?X.environment:null,Rt=at===null?F.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:re.workingColorSpace,Ut=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Bt=U.get(it.envMap||Lt,Ut),Qt=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,se=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ft=!!lt.morphAttributes.position,ce=!!lt.morphAttributes.normal,Te=!!lt.morphAttributes.color,ye=wn;it.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ye=F.toneMapping);let me=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ze=me!==void 0?me.length:0,Pt=ot.get(it),qe=w.state.lights;if(dt===!0&&(_t===!0||T!==et)){let ge=T===et&&it.id===rt;tt.setState(it,T,ge)}let le=!1;it.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==qe.state.version||Pt.outputColorSpace!==Rt||st.isBatchedMesh&&Pt.batching===!1||!st.isBatchedMesh&&Pt.batching===!0||st.isBatchedMesh&&Pt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Pt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Pt.instancing===!1||!st.isInstancedMesh&&Pt.instancing===!0||st.isSkinnedMesh&&Pt.skinning===!1||!st.isSkinnedMesh&&Pt.skinning===!0||st.isInstancedMesh&&Pt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Pt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Pt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Pt.instancingMorph===!1&&st.morphTexture!==null||Pt.envMap!==Bt||it.fog===!0&&Pt.fog!==It||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==tt.numPlanes||Pt.numIntersection!==tt.numIntersection)||Pt.vertexAlphas!==Qt||Pt.vertexTangents!==se||Pt.morphTargets!==Ft||Pt.morphNormals!==ce||Pt.morphColors!==Te||Pt.toneMapping!==ye||Pt.morphTargetsCount!==ze||!!Pt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Pt.__version=it.version);let pn=Pt.currentProgram;le===!0&&(pn=Hr(it,X,st),W&&it.isNodeMaterial&&W.onUpdateProgram(it,pn,Pt));let Ln=!1,ai=!1,Ji=!1,de=pn.getUniforms(),we=Pt.uniforms;if(S.useProgram(pn.program)&&(Ln=!0,ai=!0,Ji=!0),it.id!==rt&&(rt=it.id,ai=!0),Pt.needsLights){let ge=Ff(w.state.lightProbeGridArray,st);Pt.lightProbeGrid!==ge&&(Pt.lightProbeGrid=ge,ai=!0)}if(Ln||et!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),de.setValue(k,"projectionMatrix",T.projectionMatrix),de.setValue(k,"viewMatrix",T.matrixWorldInverse);let ci=de.map.cameraPosition;ci!==void 0&&ci.setValue(k,St.setFromMatrixPosition(T.matrixWorld)),N.logarithmicDepthBuffer&&de.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&de.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),et!==T&&(et=T,ai=!0,Ji=!0)}if(Pt.needsLights&&(qe.state.sunShadowMap.length>0&&de.setValue(k,"sunShadowMap",qe.state.sunShadowMap,ct),qe.state.directionalShadowMap.length>0&&de.setValue(k,"directionalShadowMap",qe.state.directionalShadowMap,ct),qe.state.spotShadowMap.length>0&&de.setValue(k,"spotShadowMap",qe.state.spotShadowMap,ct),qe.state.pointShadowMap.length>0&&de.setValue(k,"pointShadowMap",qe.state.pointShadowMap,ct)),st.isSkinnedMesh){de.setOptional(k,st,"bindMatrix"),de.setOptional(k,st,"bindMatrixInverse");let ge=st.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(k,"boneTexture",ge.boneTexture,ct))}st.isBatchedMesh&&(de.setOptional(k,st,"batchingTexture"),de.setValue(k,"batchingTexture",st._matricesTexture,ct),de.setOptional(k,st,"batchingIdTexture"),de.setValue(k,"batchingIdTexture",st._indirectTexture,ct),de.setOptional(k,st,"batchingColorTexture"),st._colorsTexture!==null&&de.setValue(k,"batchingColorTexture",st._colorsTexture,ct));let li=lt.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&C.update(st,lt,pn),(ai||Pt.receiveShadow!==st.receiveShadow)&&(Pt.receiveShadow=st.receiveShadow,de.setValue(k,"receiveShadow",st.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&X.environment!==null&&(we.envMapIntensity.value=X.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=f_()),ai){if(de.setValue(k,"toneMappingExposure",F.toneMappingExposure),Pt.needsLights&&Bf(we,Ji),It&&it.fog===!0&&P.refreshFogUniforms(we,It),P.refreshMaterialUniforms(we,it,gt,ft,w.state.transmissionRenderTarget[T.id]),Pt.needsLights&&Pt.lightProbeGrid){let ge=Pt.lightProbeGrid;we.probesSH.value=ge.texture,we.probesMin.value.copy(ge.boundingBox.min),we.probesMax.value.copy(ge.boundingBox.max),we.probesResolution.value.copy(ge.resolution)}Ns.upload(k,Yc(Pt),we,ct)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Ns.upload(k,Yc(Pt),we,ct),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&de.setValue(k,"center",st.center),de.setValue(k,"modelViewMatrix",st.modelViewMatrix),de.setValue(k,"normalMatrix",st.normalMatrix),de.setValue(k,"modelMatrix",st.matrixWorld),it.uniformsGroups!==void 0){let ge=it.uniformsGroups;for(let ci=0,$i=ge.length;ci<$i;ci++){let $c=ge[ci];ht.update($c,pn),ht.bind($c,pn)}}return pn}function Bf(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.sunLights.needsUpdate=X,T.sunLightShadows.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function zf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(T,X,lt){let it=ot.get(T);it.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),ot.get(T.texture).__webglTexture=X,ot.get(T.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){let lt=ot.get(T);lt.__webglFramebuffer=X,lt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,lt=0){at=T,nt=X,Q=lt;let it=null,st=!1,It=!1;if(T){let Rt=ot.get(T);if(Rt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(k.FRAMEBUFFER,Rt.__webglFramebuffer),ut.copy(T.viewport),At.copy(T.scissor),Et=T.scissorTest,S.viewport(ut),S.scissor(At),S.setScissorTest(Et),rt=-1;return}else if(Rt.__webglFramebuffer===void 0)ct.setupRenderTarget(T);else if(Rt.__hasExternalTextures)ct.rebindTextures(T,ot.get(T.texture).__webglTexture,ot.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Qt=T.depthTexture;if(Rt.__boundDepthTexture!==Qt){if(Qt!==null&&ot.has(Qt)&&(T.width!==Qt.image.width||T.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(T)}}let Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(It=!0);let Bt=ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[X])?it=Bt[X][lt]:it=Bt[X],st=!0):T.samples>0&&ct.useMultisampledRTT(T)===!1?it=ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?it=Bt[lt]:it=Bt,ut.copy(T.viewport),At.copy(T.scissor),Et=T.scissorTest}else ut.copy(Ct).multiplyScalar(gt).floor(),At.copy(Nt).multiplyScalar(gt).floor(),Et=ae;if(lt!==0&&(it=Y),S.bindFramebuffer(k.FRAMEBUFFER,it)&&S.drawBuffers(T,it),S.viewport(ut),S.scissor(At),S.setScissorTest(Et),st){let Rt=ot.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+X,Rt.__webglTexture,lt)}else if(It){let Rt=X;for(let Ut=0;Ut<T.textures.length;Ut++){let Bt=ot.get(T.textures[Ut]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,lt,Rt)}}else if(T!==null&&lt!==0){let Rt=ot.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Rt.__webglTexture,lt)}rt=-1};function Jc(T){let X=ot.get(T);return(X.__readFormat!==T.format||X.__readType!==T.type)&&(X.__readFormat=T.format,X.__readType=T.type,X.__formatReadable=N.textureFormatReadable(T.format),X.__typeReadable=N.textureTypeReadable(T.type)),X}this.readRenderTargetPixels=function(T,X,lt,it,st,It,Lt,Rt=0){if(!(T&&T.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){S.bindFramebuffer(k.FRAMEBUFFER,Ut);try{let Bt=T.textures[Rt],Qt=Bt.format,se=Bt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Rt);let Ft=Jc(Bt);if(Ft.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-it&&lt>=0&&lt<=T.height-st&&k.readPixels(X,lt,it,st,pt.convert(Qt),pt.convert(se),It)}finally{let Bt=at!==null?ot.get(at).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,X,lt,it,st,It,Lt,Rt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut)if(X>=0&&X<=T.width-it&&lt>=0&&lt<=T.height-st){S.bindFramebuffer(k.FRAMEBUFFER,Ut);let Bt=T.textures[Rt],Qt=Bt.format,se=Bt.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Rt);let Ft=Jc(Bt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.bufferData(k.PIXEL_PACK_BUFFER,It.byteLength,k.STREAM_READ),k.readPixels(X,lt,it,st,pt.convert(Qt),pt.convert(se),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Te=at!==null?ot.get(at).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Te);let ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await gu(k,ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ce),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,It),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ce),k.deleteSync(ye),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,lt=0){let it=Math.pow(2,-lt),st=Math.floor(T.image.width*it),It=Math.floor(T.image.height*it),Lt=X!==null?X.x:0,Rt=X!==null?X.y:0;ct.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,Lt,Rt,st,It),S.unbindTexture()},this.copyTextureToTexture=function(T,X,lt=null,it=null,st=0,It=0){let Lt,Rt,Ut,Bt,Qt,se,Ft,ce,Te,ye=T.isCompressedTexture?T.mipmaps[It]:T.image;if(lt!==null)Lt=lt.max.x-lt.min.x,Rt=lt.max.y-lt.min.y,Ut=lt.isBox3?lt.max.z-lt.min.z:1,Bt=lt.min.x,Qt=lt.min.y,se=lt.isBox3?lt.min.z:0;else{let we=Math.pow(2,-st);Lt=Math.floor(ye.width*we),Rt=Math.floor(ye.height*we),T.isDataArrayTexture?Ut=ye.depth:T.isData3DTexture?Ut=Math.floor(ye.depth*we):Ut=1,Bt=0,Qt=0,se=0}it!==null?(Ft=it.x,ce=it.y,Te=it.z):(Ft=0,ce=0,Te=0);let me=pt.convert(X.format),ze=pt.convert(X.type),Pt;X.isData3DTexture?(ct.setTexture3D(X,0),Pt=k.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ct.setTexture2DArray(X,0),Pt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(X,0),Pt=k.TEXTURE_2D),S.activeTexture(k.TEXTURE0),S.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);let qe=S.getParameter(k.UNPACK_ROW_LENGTH),le=S.getParameter(k.UNPACK_IMAGE_HEIGHT),pn=S.getParameter(k.UNPACK_SKIP_PIXELS),Ln=S.getParameter(k.UNPACK_SKIP_ROWS),ai=S.getParameter(k.UNPACK_SKIP_IMAGES);S.pixelStorei(k.UNPACK_ROW_LENGTH,ye.width),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye.height),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Bt),S.pixelStorei(k.UNPACK_SKIP_ROWS,Qt),S.pixelStorei(k.UNPACK_SKIP_IMAGES,se);let Ji=T.isDataArrayTexture||T.isData3DTexture,de=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){let we=ot.get(T),li=ot.get(X),ge=ot.get(we.__renderTarget),ci=ot.get(li.__renderTarget);S.bindFramebuffer(k.READ_FRAMEBUFFER,ge.__webglFramebuffer),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let $i=0;$i<Ut;$i++)Ji&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(T).__webglTexture,st,se+$i),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ot.get(X).__webglTexture,It,Te+$i)),k.blitFramebuffer(Bt,Qt,Lt,Rt,Ft,ce,Lt,Rt,k.DEPTH_BUFFER_BIT,k.NEAREST);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(st!==0||T.isRenderTargetTexture||ot.has(T)){let we=ot.get(T),li=ot.get(X);S.bindFramebuffer(k.READ_FRAMEBUFFER,O),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,J);for(let ge=0;ge<Ut;ge++)Ji?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,we.__webglTexture,st,se+ge):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,st),de?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,li.__webglTexture,It,Te+ge):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,li.__webglTexture,It),st!==0?k.blitFramebuffer(Bt,Qt,Lt,Rt,Ft,ce,Lt,Rt,k.COLOR_BUFFER_BIT,k.NEAREST):de?k.copyTexSubImage3D(Pt,It,Ft,ce,Te+ge,Bt,Qt,Lt,Rt):k.copyTexSubImage2D(Pt,It,Ft,ce,Bt,Qt,Lt,Rt);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else de?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Pt,It,Ft,ce,Te,Lt,Rt,Ut,me,ze,ye.data):X.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,It,Ft,ce,Te,Lt,Rt,Ut,me,ye.data):k.texSubImage3D(Pt,It,Ft,ce,Te,Lt,Rt,Ut,me,ze,ye):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,It,Ft,ce,Lt,Rt,me,ze,ye.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,It,Ft,ce,ye.width,ye.height,me,ye.data):k.texSubImage2D(k.TEXTURE_2D,It,Ft,ce,Lt,Rt,me,ze,ye);S.pixelStorei(k.UNPACK_ROW_LENGTH,qe),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,le),S.pixelStorei(k.UNPACK_SKIP_PIXELS,pn),S.pixelStorei(k.UNPACK_SKIP_ROWS,Ln),S.pixelStorei(k.UNPACK_SKIP_IMAGES,ai),It===0&&X.generateMipmaps&&k.generateMipmap(Pt),S.unbindTexture()},this.initRenderTarget=function(T){ot.get(T).__webglFramebuffer===void 0&&ct.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ct.setTextureCube(T,0):T.isData3DTexture?ct.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ct.setTexture2DArray(T,0):ct.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){nt=0,Q=0,at=null,S.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function Us(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Me,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=tf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][u]);let p=tf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function tf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new De(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){let y=h.getComponent(u,p);a.setComponent(u+f,p,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var Fr=new G;function _n(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Fr.copy(t),Fr[n]=0,Fr.normalize();let c=.5*o/(o+a),h=1-Fr.angleTo(i)/l;return Math.sign(Fr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ja=class i extends Ge{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new G,c=new G,h=new G(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,y=new G,g=.5/o;for(let m=0,E=0;m<f.length;m+=3,E+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:y.set(1,0,0),d[E+0]=_n(y,c,"z","y",r,n),d[E+1]=1-_n(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[E+0]=1-_n(y,c,"z","y",r,n),d[E+1]=1-_n(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[E+0]=1-_n(y,c,"x","z",r,t),d[E+1]=_n(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[E+0]=1-_n(y,c,"x","z",r,t),d[E+1]=1-_n(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[E+0]=1-_n(y,c,"x","y",r,t),d[E+1]=1-_n(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[E+0]=_n(y,c,"x","y",r,t),d[E+1]=1-_n(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var q=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),d_=Object.freeze({sage:q.sage,mint:q.aqua,sky:q.blue,peach:q.peach,coral:"#cf8979",lavender:q.lilac,butter:q.honey,cream:q.linen,white:q.cream,oak:q.oakLight,walnut:q.walnut,charcoal:"#505b68",brass:q.brass,terracotta:"#b97d63",forest:q.moss,blush:q.blush,teddy:"#aa8063",slate:"#9b9b9d"}),p_=new Set([q.oak,q.oakLight,q.walnut]),m_=new Set([q.sage,q.moss,q.linen,q.lilac,q.lilacLight,q.blush,q.peach,q.oatmeal,q.upholsteryShadow,q.denim]);function g_(i,t){let e=p_.has(i)?1:m_.has(i)?2:0,n=i===q.glass||i===q.darkGlass||i===q.blueWater,s=i===q.brass,r=i===q.steel||i===q.basinSteel,o=new ei({color:i,roughness:s||r?.37:n?.33:i===q.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Nc=class{constructor(t,e){this.root=new Se,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,g_(e,this.grainDirection));let a=new xe(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,l=0,c=0){s=Math.max(.1,s),o=Math.max(.1,o);let h=Math.min(l,s*.42,r*.42,o*.42),f=h>.2?new ja(s,r,o,2,h):new Ge(s,r,o);return this.part(f,a,t,e+r/2,n,c)}disc(t,e,n,s,r,o,a,l=1){let c=new Fi(1,l,r,20);return c.scale(s,1,o),this.part(c,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let l=new En(1,12,8);return l.scale(s,r,o),this.part(l,a,t,e,n)}ring(t,e,n,s,r,o,a){let l=new zi(1,o/Math.min(s,r),6,24);return l.rotateX(-Math.PI/2),l.scale(s,1.5,r),this.part(l,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([c,h])=>new bt(c,h)),l=new pr(a,24);return l.scale(s,r,o),this.part(l,q.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Us(s);s.length>1&&s.forEach(a=>a.dispose());let o=new xe(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function si(i,t,e,n,s,r,o=q.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let l of[-.36,.36])for(let c of[-.36,.36])i.disc(t+n*l,0,e+s*c,a,r,a,o,.68)}function Or(i,t,e,n,s,r,o,a){let l=o===q.linen?q.binding:q.blush;i.box(t,e,n,s,8,r,l,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function x_(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",l=a?1:-1,c=a?q.upholsteryShadow:q.moss,h=a?q.oatmeal:q.sage,f=o?t*.5:t,u=r&&!o?e*.57:e,d=o?-t*.25:0,p=r&&!o?-e*.215:0,y=Math.min(t,e)*.1;if(si(i,d,p,f,u,5),i.box(d,5,p,f*.97,22,u*.98,c,8),r){let A=o?t*.52:t*.34,w=o?e*.38:e*.46,D=o?t*.22:-t*.32,v=o?l*e*.3:e*.25;si(i,D,v,A,w,5),i.box(D,5,v,A,22,w,c,8),i.box(D,25,v,A*.96,12,w*.9,n,5),o&&i.box(D,29,l*e*.464,A,26,y,h,6)}let g=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let A=e*.88/g;for(let w=0;w<g;w++){let D=-e*.44+A*(w+.5);i.box(d+y*.18,25,D,f*.76,12,A-3,n,5),i.box(d-f*.39,27,D,f*.22,31,A-1,h,8)}i.box(d,29,-l*e*.445,f*.88,20,y,h,6),Or(i,d+f*.13,35,-e*.31,f*.42,A*.49,a?q.sage:q.peach,-.18),Or(i,d+f*.12,35,e*.28,f*.4,A*.45,q.linen,.2)}else{let A=t*.8/g;for(let w=0;w<g;w++){let D=-t*.4+A*(w+.5);i.box(D,25,p+u*.08,A-3,12,u*.7,n,6),i.box(D,27,p-u*.39,A-1,31,u*.24,h,7)}for(let w of[-t*.442,t*.442])i.box(w,26,p,y,22,u*.89,h,6);Or(i,-t*.27,35,p-u*.15,t*.18,u*.34,q.peach,-.18),Or(i,t*.27,35,p-u*.12,t*.17,u*.33,q.linen,.2)}let m=o?f*.67:f*.19,E=o?e*.14:u*.58,R=o?d+f*.06:f*.32,b=o?e*.13:p+u*.1;i.box(R,37.1,b,m,1.7,E,q.lilacLight,.65);for(let A of[-1,1])i.box(R,38.82,b+A*E*.36,m*.9,.25,1.2,q.lilac);return 58}function Cn(i,t,e,n,s,r,o,a=!1){let l=a?19:28;si(i,t,e,n,s,l,q.walnut),i.box(t,l,e,n*.9,7,s*.92,q.walnut,2),i.box(t,l+5,e,n*.83,8,s*.83,o,3);let c=Math.abs(r)===Math.PI/2,h=t-Math.sin(r)*(c?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(h,l+9,f,c?s*.2:n*.84,22,c?s*.82:s*.22,o,4)}function __(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return Cn(i,0,-e*.39,t*.2,e*.23,0,q.denim),Cn(i,0,e*.39,t*.2,e*.23,Math.PI,q.denim),Cn(i,-t*.415,0,t*.17,e*.27,Math.PI/2,q.denim),Cn(i,t*.415,0,t*.17,e*.27,-Math.PI/2,q.denim),si(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,q.walnut,3),i.box(0,37,0,t*.79,8,e*.57,q.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,q.linen,.6),46.4;if(r)Cn(i,0,-e*.37,t*.2,e*.2,0,q.sage),Cn(i,0,e*.37,t*.2,e*.2,Math.PI,q.blush),Cn(i,-t*.38,0,t*.2,e*.2,Math.PI/2,q.lilac),Cn(i,t*.38,0,t*.2,e*.2,-Math.PI/2,q.honey),i.disc(0,0,0,t*.13,5,e*.13,q.walnut),i.disc(0,4,0,t*.045,31,e*.045,q.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let l=a?[-.28,.28]:[-.32,0,.32],c=[q.sage,q.blush,q.lilac,q.honey];for(let h=0;h<l.length;h++)for(let f of[-1,1])Cn(i,t*l[h],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,c[(h+(f<0?0:2))%c.length]);si(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,q.linen,.5)}return 42}function y_(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,q.ink,.5),i.box(t,e+1,n,s*.1,14,4,q.ink,1),i.box(t,e+12,n,s,25,6,q.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,q.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,q.blue,.2)}function v_(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let l of[-1,1]){let c=l*(t-a)/2,h=s?e-r:e*.58,f=s?r/2:0;s&&i.box(c,37,f+.8,a,7,h-1.6,n,2.4),i.box(c,4,f,a*.81,34,h*.81,q.walnut,2.8);for(let u=0;u<3;u++){let d=6+u*9.7;i.box(c,d,f+h*.41,a*.74,8.4,2,q.oak,.7),i.box(c,d+3,f+h*.43,a*.26,2,2,q.brass,.5)}}return y_(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,q.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,q.peach),81}function ef(i,t,e,n,s,r){let o=new hn;for(let l=0;l<10;l++){let c=l*Math.PI/5-Math.PI/2,h=l%2?s*.46:s,f=[Math.cos(c)*h,Math.sin(c)*h];l===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new _i(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function S_(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");si(i,0,0,t,e,6,q.walnut);let l=r?[6,55]:[6];for(let h of l){i.box(0,h,0,t*.97,15,e*.98,q.walnut,5),i.box(0,h+12,0,t*.9,11,e*.92,q.linen,4),i.box(0,h+21.6,e*.15,t*.89,5,e*.62,q.lilac,2.5),i.box(0,h+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,h+28,-e*.11,t*.88,3,e*.071,q.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Or(i,d,h+22,-e*.275,t*(f.length===2?.34:.49),e*.2,q.linen,d<0?-.04:.04);let u=Math.min(t,e)*.045;for(let[d,p,y,g]of[[-.24,.12,1,q.cream],[.23,.27,.79,q.honey],[.08,.04,.57,q.cream],[-.1,.34,.62,q.honey]])ef(i,t*d,h+30.8,e*p,u*y,g);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,h+30.71,e*.24,.85,.24,e*.33,q.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,h+30.72,e*d,t*.71,.24,.9,q.lilacLight,0)}let c=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,c-4,e*.083,q.walnut,6),i.box(0,18,-e*.417,t*.89,c-23,e*.055,n,4),o||r||a)for(let h of[-1,1]){for(let f of[-1,1])i.box(t*.45*h,4,e*.46*f,5,c,6,q.walnut,2);if(i.box(t*.45*h,c-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*h,c-29,e*f*.105,3,20,3,n,.8)}return c}function b_(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;si(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,q.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,q.oak,.6);let l=r?2:3,c=t>=95?2:1;for(let h=0;h<l;h++)for(let f=0;f<c;f++){let u=t*.89/c,d=(a-8)/l,p=u*(f-(c-1)/2),y=5+h*d;i.box(p,y,e*.46,u-2,d-1.5,2.9,n,1),i.oval(p,y+d*.45,e*.51,2.2,1.7,2.2,q.brass)}return a+2}function M_(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,q.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,q.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,q.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?q.lilac:q.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,q.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?q.lilacLight:q.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,q.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,q.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,q.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])ef(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,q.cream);return 5}function E_(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,l=o+r/2,c=(t-s)/2;for(let u of[-1,1])i.box(u*(t+s)/4,n-5,0,c,5,e,q.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,q.linen),i.box(0,n-5,(l+e/2)/2,s,5,e/2-l,q.linen);let h=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,q.basinSteel);for(let u of[-1,1])i.box(u*s/2,n-4.5,o,h,5.25,r+h,q.steel,.4),i.box(0,n-4.5,o+u*r/2,s,5.25,h,q.steel,.4),i.disc(0,n-4.1,o+u*r/4,h,.6,h,q.darkGlass);i.box(0,n-4.5,o,s,4.85,h,q.steel,.4);let f=-s/2-h*1.15;i.disc(f,n,o,h*.8,h*2.9,h*.8,q.steel),i.box(f+h,n+h*2.5,o,h*2.8,h*.7,h,q.steel,.6)}function w_(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?q.sage:q.walnut,2.3),s?E_(i,t,e,r+2):i.box(0,r-3,0,t,5,e,q.linen,1.8);let l=e>t;for(let c of[-1,1])for(let h=-1;h<=1;h++){let f=l?2.2:t*.29,u=l?e*.29:2.2,d=l?t*.46*c:t*.3*h,p=l?e*.3*h:e*.47*c;i.box(d,6,p,f,r*.67,u,a?q.moss:q.oak,.8),i.box(d,r*.63,p,l?3.2:t*.08,2.6,l?e*.05:3.2,q.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,q.darkGlass,.8);for(let c of[-.2,.2])for(let h of[-.19,.19]){let f=Math.min(t,e)*(c<0?.12:.092);i.ring(t*c,r+4.8,e*h,f,f,1,q.glass)}}if(a)for(let c of[-t*.24,t*.24])i.basin(c,r+1.9,0,t*.16,5.5,e*.36),i.oval(c,r+3.48,0,2.1,.52,2.1,q.brass),i.disc(c,r+2,-e*.32,2.6,8,2.6,q.brass),i.box(c,r+8.4,-e*.22,4,3,e*.2,q.brass,1);return r+3}function T_(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,q.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,q.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,q.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,q.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,q.glass),i.disc(0,22,-e*.44,3.5,9,3.5,q.brass),i.box(0,30,-e*.4,5,3.7,e*.1,q.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,q.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,q.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,q.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,q.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,q.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,q.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,q.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,q.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,q.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,q.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,q.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,q.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,q.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,q.blush,1.7),36)}function A_(i,t,e,n,s){let r=n?q.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),l=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,l,-e*.13,t*.3,o*.23,e*.27,r);for(let c of[-1,1])i.oval(t*.27*c,l+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*c,l+o*.04,e*.105,o*.026,o*.034,o*.022,q.ink),i.oval(t*.26*c,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*c,l-o*.06,e*.094,o*.043,o*.023,o*.023,q.blush);return i.oval(0,l-o*.044,e*.12,o*.033,o*.022,o*.023,q.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,q.linen,3.8),l+o*(n?.37:.28)}function R_(i,t,e){let s=[q.sage,q.peach,q.honey,q.lilac,q.blue,q.blush];si(i,0,0,t*.96,e*.96,22,q.sage),i.box(0,20,0,t*.94,7,e*.93,q.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function C_(i,t,e,n){let s=[q.linen,n,q.sand,q.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),l=e*((r+.5)/4-.5);i.box(a,1.1,l,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function I_(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,q.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,q.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,l=Math.cos(a)*s*.21,c=Math.sin(a)*s*.21,h=s*(n?.55:.44)+o%2*s*.08,f=i.oval(l*.5,h*.69,c*.5,s*.035,h*.32,s*.035,q.moss);f.rotation.z=-l/h,f.rotation.x=c/h;let u=n?q.sage:[q.blush,q.linen,q.honey][o%3];i.oval(l,h,c,s*.13,s*(n?.18:.085),s*.11,u)}return s*(n?.82:.65)}function nf(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;let s=d_[t.split("-").at(-1)],r=new Nc(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=x_(r,e,n,s||(t==="sofa"?q.linen:q.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,q.walnut,3.5),r.box(0,24,0,e,4,n,q.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,q.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,q.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,q.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,q.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,q.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=__(r,e,n,s||q.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=v_(r,e,n,s||q.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))Cn(r,0,0,e,n,0,s||q.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){Cn(r,0,0,e,n,0,s||q.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,q.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=S_(r,e,n,s||q.lilac,t);else if(t==="rug")o=M_(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=w_(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=T_(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=I_(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,q.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,q.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,q.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=b_(r,e,n,s||q.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;si(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||q.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,q.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=A_(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=C_(r,e,n,s||q.sage);else if(t.startsWith("baby-activities-"))o=R_(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||q.peach),r.ring(0,a,0,a*.95,a*.95,1.2,q.linen),o=a*2}else return null;return r.finish(o)}var Dt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Br=Math.PI,Dc=2*Br,P_=new Set(["unknown","unavailable"]),Pn=(i,t,e)=>Math.max(t,Math.min(e,i)),Uc=(i,t)=>Number.isFinite(i)?Pn(i,12,480):t,ee=(i,t={})=>new ei({color:i,roughness:.83,...t}),Fc=i=>String(i?.state??"unknown"),Yi=i=>!P_.has(Fc(i)),Os=i=>Yi(i)&&(i.active===!0||i.state==="on"),L_=i=>Os(i)?Number.isFinite(i.attributes?.brightness)?Pn(i.attributes.brightness/255,0,1):1:0;function ri(i,t,e,n=0,s=0,r=0){let o=new xe(t,e);return o.position.set(n,s,r),i.add(o),o}function Oe(i,t,e,n,s,r=0,o=0,a=0){return ri(i,new Ge(t,e,n),s,r,o,a)}function We(i,t,e,n,s,r=0,o=0,a=0,l=3){let c=Math.min(l,t/3,e/3,n/3),h=c-t/2,f=c-e/2,u=new hn;u.moveTo(h,f),u.lineTo(-h,f),u.lineTo(-h,-f),u.lineTo(h,-f),u.closePath();let d=new Qn(u,{depth:n-2*c,bevelThickness:c,bevelSize:c,bevelSegments:2});return d.translate(0,0,c-n/2),ri(i,d,s,r,o,a)}function Pe(i,t,e,n,s,r=0,o=0,a=0,l=16){return ri(i,new Fi(t,e,n,l),s,r,o,a)}function In(i,t,e,n,s,r){return ri(i,new En(t,10,7),e,n,s,r)}function Fs(i,t=0,e=0,n=0){let s=new Se;return s.position.set(t,e,n),i.add(s),s}function N_(i,t){let e=new $e({transparent:!0,depthWrite:!1,blending:Sr,uniforms:{strength:{value:0},tint:{value:new Jt(Dt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=ri(i,new ti(2*t,2*t),e,0,2.8,0);return n.rotation.x=-Br/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function D_(i,t,e){let n=new Se,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",l=s==="floorLamp"||r==="cloud_floor_lamp",c=s==="wallSconce"||r==="acorn_sconce",h=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),u=ee(Dt.honey),d=ee(Dt.ink),p=ee(Dt.brass,{roughness:.36,metalness:.42}),y=ee(Dt.cream,{emissive:Dt.warm,emissiveIntensity:0}),g=new Jt(Dt.warm),m=h?46:o?50:a?56:c?40:l?56:36,E=N_(n,Pn(f*(a?1.72:1.35),38,110));if(a){let R=f*(h?.19:.29);Pe(n,R,R*1.02,3,d,0,m+2),o&&Pe(n,1.7,1.7,13,u,0,m+9),Pe(n,R*.82,R,5,u,0,m-1.5),Pe(n,R*.92,R*.96,1.15,p,0,m+1.1);let b=In(n,R*.83,y,0,m,0);b.scale.y=o?.88:.52}else if(c)We(n,f*.34,18,4,d,0,35,-4),Pe(n,f*.12,f*.11,14,u,0,37,3),In(n,f*.21,y,0,m+3,3);else{let R=m-7,b=l?3:16,A=f*(l?.25:.3);if(Pe(n,A*.57,A*.67,4,d,0,b),Pe(n,2,2.9,R-b,u,0,(b+R)/2),l)In(n,A*.81,y,0,m,0);else{let w=r==="bud_lamp"?12:9;Pe(n,A*.56,A,14,y,0,m,0,w),Pe(n,A,A*.99,1.2,p,0,m-6.7,0,w),Pe(n,A*.55,A*.58,1.1,p,0,m+7.1,0,w)}}return{root:n,anchorY:m+2,animate(R){let b=L_(R),A=R?.attributes?.rgb_color;if(Array.isArray(A)&&A.length===3&&A.every(Number.isFinite)){let[w,D,v]=A.map(L=>Pn(L/255,0,1));g.setRGB(w,D,v,Re)}else g.setHex(Dt.warm);E(b,g),y.emissiveIntensity=b*.88,y.emissive.copy(g),b>0?y.color.copy(g):y.color.setHex(Dt.cream)}}}function U_(i){let t=new hn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Qn(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Br/2)}function sf(i,t,e,n){let s=new Se,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Fs(s,0,o,0);n&&(a.rotation.x=Br/2);let l=Fs(a,0,-1,0),c=ee(Dt.cream),h=ee(Dt.ink),f=/(?:white|cream)$/.test(i.type)?Dt.oat:/(?:forest|sage)$/.test(i.type)?Dt.sage:Dt.honey,u=ee(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Pe(a,r*.18,r*.2,6,h),Pe(a,r*.174,r*.176,1.4,ee(Dt.brass,{roughness:.36,metalness:.42}),0,3.4),Pe(a,r*.15,r*.17,2.6,c,0,4.9);let p=U_(r);for(let y=0;y<d;y++){let g=Fs(l);g.rotation.y=y/d*Dc,ri(g,p,u)}if(n){We(s,r*1.66,6,r*1.02,h,0,3),Oe(s,r*.3,11,6,c,0,10);let y=ri(s,new zi(r,2.6,6,24),c,0,o,3);y.rotation.z=.04;for(let g=-1;g<=1;g++){let m=g*r*.5;Pe(s,.68,.68,2*Math.sqrt(r*r-m*m),h,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(y,g=0){let m=Number.isFinite(y?.attributes?.percentage)?Pn(y.attributes.percentage/100,.12,1):.64;l.rotation.y=Os(y)?g*Dc*m%Dc:0}}}function F_(i,t){let e=new Se,n=t.mountY??39,s=Fs(e,0,n),r=Pn(i*.72,17,27);We(s,r,31,5,ee(Dt.ink),0,0,-.5),We(s,r-1.9,29,4.4,ee(Dt.cream),0,.3,1);let o=ee(Dt.oat,{emissive:Dt.warm,emissiveIntensity:0}),a=We(s,r*.55,17.5,3.2,o,0,3.2,3.5),l=Array.from({length:3},(c,h)=>{let f=ee(Dt.teal,{emissive:Dt.mint,emissiveIntensity:0});return In(s,1.85,f,(h-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(c,h=0){a.rotation.x=Yi(c)?Os(c)?-.16:.16:0,o.emissiveIntensity=Os(c)?.42:0;let f=c?.presence==="on";for(let u=0;u<l.length;u++){let d=f?.5+.5*Math.cos(h*5-u*1.23):0;l[u].material.color.setHex(f?Dt.mint:Dt.teal),l[u].material.emissiveIntensity=f?.75+d*1.9:0,l[u].scale.setScalar(f?1+d*.18:1)}}}}function rf(i,t,e,n=31){let s=new Se,r=36.5,o=Math.max(12,i-6),a=ee(Dt.oat);if(t){let u=ee(Dt.glass,{roughness:.32});Oe(s,o,n,3.2,u,0,r,0);for(let p of[-o/2+1.6,0,o/2-1.6])Oe(s,3.2,n+2,7.5,a,p,r);let d=r+n/2;Oe(s,o,1.8,7,u,0,d+.35);for(let p of[-4.25,4.25])Oe(s,o+2,3.2,1.5,a,0,d,p);Oe(s,o+3,3.8,11,a,0,r-n/2,1.4),Oe(s,o,1.35,.5,ee(Dt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let l=ee(Dt.cream),c=r+n/2-1;We(s,o+2,4.6,7,a,0,c+.75,6.7,1.6);let h=Array.from({length:8},(u,d)=>Oe(s,o-5,n/8-.45,3,l,0,c-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(u){let d=Oc(u);d!==null&&(f=1-d);let p=Number.isFinite(u?.attributes?.current_tilt_position)?Pn(u.attributes.current_tilt_position/100,0,1):0;for(let y=0;y<h.length;y++){let g=Pn(f*h.length-y,0,1);h[y].visible=g>.02,h[y].scale.y=g,h[y].rotation.x=p*.9}}}}function Oc(i){return Yi(i)?Number.isFinite(i.attributes?.current_position)?Pn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function O_(i,t){let e=new Se,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),l=ee(Dt.oat),c=ee(Dt.cream),h=ee(Dt.plum),f=[ee(Dt.tile),ee(Dt.paleTile)],u=ee(Dt.dark);Oe(e,i,5,n+t*.24,c,0,2.5,t*.09),Oe(e,i*.88,o+4,5,l,0,(o+4)/2,-r+2);for(let z of[-i*.42,i*.42])Oe(e,i*.09,o+4,n,l,z,(o+4)/2),We(e,i*.1,o+4,5,c,z,(o+4)/2,r+1,1.5);let d=new hn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let p=new Qn(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});p.translate(0,0,-r-5.5),ri(e,p,h,0,o+4);let y=i*.49,g=Math.atan2(a,y),m=Math.hypot(a,y),E=(n+11)/8,R=[[],[]];for(let z of[-1,1])for(let W=0;W<8;W++){let Y=-r-5.5+(W+.5)*E,O=new Ge(m*.97,2.2,E-.62);O.rotateZ(-z*g),O.translate(z*y*.5,o+5.65+a*.5,Y),R[W%2].push(O)}R.forEach((z,W)=>{ri(e,Us(z),f[W]),z.forEach(Y=>Y.dispose())}),We(e,4,4.5,n+12,h,0,o+a+5.6,0,1.5),Oe(e,i*.95,3.5,3.5,c,0,o+4,r+5.5),Oe(e,s,o,1.5,u,0,o/2+4,r-4);let b=ee(Dt.mint),A=ee(Dt.sage),D=(o-3)/6,v=Array.from({length:6},(z,W)=>{let Y=Fs(e,0,o-(W+.5)*D+2,r+.5);return We(Y,s-2,D-.7,3.4,b,0,0,0,1.2),Oe(Y,s*.91,.68,.7,A,0,D*.23,1.8),W===5&&We(Y,s*.13,2,2.2,c,0,0,2.3,.55),Y}),L=ee(Dt.gold,{emissive:Dt.ember,emissiveIntensity:0});In(e,3.7,L,i*.422,o*.73,r+4.5);let F=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(z,W=0){let Y=Oc(z);Y!==null&&(F=Y),b.color.setHex(Yi(z)?Dt.mint:Dt.muted),A.color.setHex(Yi(z)?Dt.sage:Dt.muted);let O=(1-F)*v.length;v.forEach((nt,Q)=>{let at=Pn(O-Q,0,1);nt.visible=at>.02,nt.scale.y=at,nt.position.y=o-(Q+at/2)*D+2});let J=["opening","closing"].includes(Fc(z));L.emissiveIntensity=J?.55+(.5+.5*Math.cos(W*6)):0}}}function B_(i){let t=new Se,e=46,n=ee(Dt.cream),s=ee(Dt.honey),r=Math.min(i*.86,88),o=Fs(t,-r/2,0,0);for(let a of[-r/2-1,r/2+1])Oe(t,3.4,e,5,n,a,e/2);return Oe(t,r+4,3,5,n,0,e),We(o,r-2,e-4,4,s,r/2,e/2,0,2),In(o,2.2,ee(Dt.gold),r-6,e*.47,2.8),{root:t,anchorY:e/2,animate(a){let l=Oc(a);l!==null&&(o.rotation.y=-1.32*l),s.color.setHex(Yi(a)?Dt.honey:Dt.muted)}}}function z_(i,t,e){let n=new Se,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=Pn(t*.85,23,126),a=ee(Dt.dark,{emissive:Dt.mint,emissiveIntensity:0});if(We(n,o,s?25:18,8,ee(Dt.cream),0,r,0),s){We(n,o*.7,11,1.9,a,0,r+2,4.1);for(let l of[-.22,0,.22])In(n,1.35,ee(Dt.oat),o*l,r-7,4.3)}else Oe(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(l){let c=l?.attributes?.hvac_action,h=c==="heating",f=Yi(l)&&["cooling","heating","drying","fan"].includes(c);a.emissive.setHex(h?Dt.warm:Dt.glass),a.emissiveIntensity=f?1.15:Os(l)?.25:0}}}function k_(i,t,e){let n=new Se,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=ee(Dt.cream),l=ee(r?Dt.glass:Dt.sage),c=ee(Dt.teal,{emissive:Dt.mint,emissiveIntensity:0}),h=o-1;if(Pe(n,s*.46,s*.5,4,ee(Dt.ink),0,2),r){let d=In(n,s/2,l,0,12,0);d.scale.y=.78,Pe(n,s*.19,s*.22,3.5,a,0,h)}else{We(n,s,24,s*.82,l,0,15,0,5),We(n,s*.91,3.8,s*.71,a,0,h);for(let d=-1;d<=1;d++)Oe(n,s*.66,1.2,1.1,c,0,h+2,d*3.5)}In(n,1.6,c,s*.18,h-2,s*.31);let f=ee(Dt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),u=Array.from({length:3},(d,p)=>In(n,2.1+p*.6,f,0,h+3,0));return{root:n,anchorY:h,animate(d,p=0){let y=Os(d);c.emissiveIntensity=y?1.6:0;for(let g=0;g<u.length;g++){u[g].visible=y;let m=(p*.68+g/u.length)%1;u[g].position.set(Math.sin(m*Br)*3.1,h+4+m*14,0),u[g].scale.setScalar(.7+m*.62)}}}}function V_(i,t){let e=new Se,n=Math.min(i,t)*.42,s=ee(Dt.sage,{emissive:Dt.mint,emissiveIntensity:0}),r=ee(Dt.ink);Pe(e,n,n*.95,7,r,0,4.6),Pe(e,n*.96,n,5.5,ee(Dt.cream),0,10.2),Pe(e,n*.28,n*.33,4,ee(Dt.oat),0,14,-n*.23);for(let a of[-.27,.27])In(e,n*.105,r,n*a,10,n*.88);let o=We(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,animate(a,l=0){let c=["cleaning","returning"].includes(Fc(a));o.material.emissiveIntensity=c?.6+.5*Math.cos(l*6):0}}}function of(i,t={}){let e=Uc(i.w,42),n=Uc(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?F_(e,t):s==="garageDoor"?O_(e,n):s==="door"||r==="door"?B_(e):s==="window"?rf(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?rf(Uc(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?z_(i,e,t):s==="airPurifier"||s==="humidifier"?k_(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?V_(e,n):s==="windowFan"?sf(i,e,n,!0):r==="fan"||/^fans-/.test(s)?sf(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?D_(i,e,n):null}var df=Yf(af(),1),{difference:pf,union:mf}=df.default,el=18,fn=.001,Wn=(i,t)=>i[0]*t[0]+i[1]*t[1],Zi=(i,t)=>i[0]*t[1]-i[1]*t[0],Xn=(i,t)=>[i[0]-t[0],i[1]-t[1]],_e=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],il=([i,t])=>[-t,i],lf=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Qa=i=>i.map(({x:t,y:e})=>[t,e]),oi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],gf=i=>i.length?mf(...i):[];function nl(i,t,e,n=0){let s=Xn(t,i),r=Math.hypot(...s);if(r<fn)return null;let o=s.map(h=>h/r),a=il(o),l=_e(i,o,-n),c=_e(t,o,n);return oi([_e(l,a,e),_e(c,a,e),_e(c,a,-e),_e(l,a,-e)])}function tl(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,l]=i[r],[c,h]=i[o];l>n!=h>n&&e<(c-a)*(n-l)/(h-l)+a&&(s=!s)}return s}function cf(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Xn(n,t),r=Math.hypot(...s);return r>fn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function G_(i,t,e,n){if(Math.abs(Wn(i.tangent,t.tangent))<.9999)return null;let s=il(i.tangent),[r,o]=[t.start,t.end].map(y=>Xn(y,i.start)),a=Wn(r,s);if(Math.abs(a)<.1||Math.abs(a)>el||Math.abs(a-Wn(o,s))>.1)return null;let l=[Wn(r,i.tangent),Wn(o,i.tangent)].sort((y,g)=>y-g),c=Math.max(0,l[0]),h=Math.min(i.length,l[1]);if(h-c<8)return null;let f=_e(i.start,i.tangent,(c+h)/2),u=Math.sign(a);if(!tl(e,_e(f,s,-u))||!tl(n,_e(f,s,a+u))||tl(e,_e(f,s,a/2))||tl(n,_e(f,s,a/2)))return null;let d=_e(i.start,i.tangent,c),p=_e(i.start,i.tangent,h);return oi([_e(d,s,-u*.05),_e(p,s,-u*.05),_e(p,s,a+u*.05),_e(d,s,a+u*.05)])}function xf(i){let t=[],e=[];for(let n of[...i].reverse()){let s=gf(n.polygons);if(!s.length)continue;let r=t.length?pf(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?mf(t,s):s}return{footprint:t,regions:e.reverse()}}function _f(i,t){let e=i.map(c=>({surface:c.surface,points:Qa(c.points),polygons:[oi(Qa(c.points))]})),n=[];for(let[c,h]of e.entries())for(let f of e.slice(c+1))for(let u of cf(h.points))for(let d of cf(f.points)){let p=G_(u,d,h.points,f.points);p&&n.push({surface:h.surface,polygons:[p]})}let s=[],r=[];if(t){let{left:c,deckEdge:h,stepBottom:f,deckBottom:u,northDeck:d,southDeck:p,recess:y}=t;s.push({surface:"patio",polygons:[oi(Qa(d)),oi(Qa(p)),oi(lf(c,f,h+1,u))]}),y.x2>y.x1&&y.z2>y.z1&&r.push({surface:"oak",polygons:[oi(lf(y.x1,y.z1,y.x2,y.z2))]})}let o=[...r,...n,...e],a=xf([...s,...o]),l=t?gf(o.flatMap(c=>c.polygons)):[];return{...a,foundation:l}}function H_(i,t,e,n){let s=Zi(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=_e(i,il(t),r),a=_e(i,il(e),-r),l=Zi(Xn(a,o),e)/s,c=_e(o,t,l);return Math.hypot(...Xn(c,i))>n*2.5?oi([i,o,a]):oi([i,o,c,a])}function hf(i,t){let e=Zi(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=Xn(t.point,i.point);return[Zi(n,t.tangent)/e,Zi(n,i.tangent)/e]}function W_(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=Xn(r.point,s.point);if(Math.hypot(...o)>el)continue;let a=hf(s,r);a&&a.every(l=>l>=-el&&l<=fn)?e.push({a:s,b:r,center:_e(s.point,s.tangent,a[0])}):!a&&Wn(s.tangent,r.tangent)<0&&Wn(o,s.tangent)<=fn&&Wn(o,r.tangent)>=-fn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=hf(s,o);if(!a)continue;let[l,c]=a;l<-el||l>=-fn||c<=fn||c>=r.length-fn||r.openings.some(({start:h,end:f})=>c>=h&&c<=f)||e.push({a:s,center:_e(s.point,s.tangent,l)})}}return e}function uf({a:i,b:t,center:e},n){return e?[nl(i.point,e,n,.1),t&&nl(t.point,e,n,.1),t&&H_(e,i.tangent,t.tangent,n)].filter(Boolean):[nl(i.point,t.point,n,.1)].filter(Boolean)}function yf(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function X_(i,t){return yf(i).flatMap(([e,n])=>{let s=Xn(n,e),r=Math.hypot(...s);if(r<fn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,l])=>{let c=Xn(a,e),h=Xn(l,e);if(Math.abs(Zi(c,o))>fn||Math.abs(Zi(h,o))>fn)return[];let[f,u]=[Wn(c,o),Wn(h,o)].sort((y,g)=>y-g),d=Math.max(0,f),p=Math.min(r,u);return p-d>fn?[[_e(e,o,d),_e(e,o,p)]]:[]})})}function ff(i,t){return t?.length?pf(i,t):i}function vf(i,t,e,n){let s=[],r=(l,c,h,f,u=0)=>{l&&h>c&&s.push({shape:l,from:c,to:h,surface:f,priority:u})};for(let l of i){let{palette:[c,h,f]}=l,u=[l.x1,l.y1],d=[l.dx,l.dz],p=(E,R,b,A,w,D,v)=>{R-E>fn&&r(nl(_e(u,d,E),_e(u,d,R),w/2),b,A,D,v)},y=l.openings.length?n:0,g=(E,R)=>{p(E,R,y,e,t,c,2),p(E,R,e-1,e+2,t+3,h,1)};y&&p(0,l.length,0,y,t,c,2);let m=0;for(let E of l.openings)g(m,E.start),m=Math.max(m,E.end);g(m,l.length),p(0,l.length,0,3,t+3,f,1)}for(let l of W_(i)){let[c,h,f]=l.a.wall.palette;for(let u of uf(l,t/2))r(u,0,e,c,2);for(let u of uf(l,(t+3)/2))r(u,e-1,e+2,h,1),r(u,0,3,f,1)}let o=[...new Set(s.flatMap(({from:l,to:c})=>[l,c]))].sort((l,c)=>l-c),a=o.slice(1).map((l,c)=>{let h=o[c],f=new Map,u=s.filter(d=>d.from<=h&&d.to>=l);for(let{surface:d,shape:p}of u.sort((y,g)=>y.priority-g.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(p);return{...xf([...f.values()]),bottom:h,top:l}});return a.flatMap(({regions:l,footprint:c,bottom:h,top:f},u)=>{let d=yf(c);return l.map(p=>({...p,bottom:h,top:f,faces:{top:ff(p.polygons,a[u+1]?.footprint),bottom:h===0?[]:ff(p.polygons,a[u-1]?.footprint),sides:X_(p.polygons,d)}}))})}var q_=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Y_=3;function Sf(i,t,e){i.toneMapping=br,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Vi,i.shadowMap.autoUpdate=!1;let n=new gr("#fff4e5","#897e91",1.13),s=new Ts("#fff0d4",2.15),r=new Ts("#dbeaff",.24),{minX:o,maxX:a,minZ:l,maxZ:c}=e,h=(o+a)/2,f=(l+c)/2;s.position.set(h-610,1150,f-490),s.target.position.set(h,0,f),r.position.set(h+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let u=Math.hypot(a-o,c-l)/2+175;Object.assign(s.shadow.camera,{left:-u,right:u,top:u,bottom:-u,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:Y_},()=>new yr("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let p=[],y,g,m=!0,E=new Jt;function R(){for(let w of t.children)w.isMesh&&(w.receiveShadow=!0,w.geometry.computeBoundingBox(),w.castShadow=w.geometry.boundingBox.max.y+w.position.y>-99)}function b(w,D){let v=/(light|lamp|sconce)/i.test(w.type),L=!D.animate||v;D.root.traverse(F=>{!F.isMesh||F.material.transparent||F.material.isShaderMaterial||(F.receiveShadow=!0,F.castShadow=L)}),v&&w.entityId&&p.push({item:w,object:D})}function A(w,D,v){let L=w.night===!0,F=q_.has(w.condition),z=L?"night":F?"cloud":"day";if(z!==y&&(n.color.set(L?"#a8b8f5":F?"#dce6f1":"#fff4e5"),n.groundColor.set(L?"#5b536e":"#998291"),n.intensity=L?.75:F?1.33:1.12,s.color.set(L?"#a7b8ed":F?"#e9eff9":"#fff0d4"),s.intensity=L?.28:F?.86:2.14,r.intensity=L?.12:.23,s.shadow.intensity=L?.65:F?.39:.84,v.color.set(L?"#97a5c5":F?"#ccd6c6":"#f4f1d8"),t.background.set(L?"#343951":"#c0cbb4"),y=z,g=void 0),g!==D){let W=p.flatMap(({item:Y,object:O})=>{let J=D[Y.id];if(J?.state!=="on")return[];let nt=Number.isFinite(J.attributes?.brightness)?ii.clamp(J.attributes.brightness/255,0,1):1;return nt>0?[{object:O,power:nt,color:J.attributes?.rgb_color}]:[]}).sort((Y,O)=>O.power-Y.power);for(let[Y,O]of d.entries()){let J=W[Y];if(!J){O.intensity=0;continue}let{object:nt,power:Q,color:at}=J;Array.isArray(at)&&at.length===3&&at.every(Number.isFinite)?(E.setRGB(...at.map(et=>ii.clamp(et/255,0,1)),Re),O.color.copy(E)):O.color.set("#ffd5a2"),O.position.copy(nt.root.position),O.position.y+=Math.max(18,nt.anchorY-9),O.intensity=Q*(L?2350:1250)}g=D}m&&(i.shadowMap.needsUpdate=!0,m=!1)}return{markStructure:R,register:b,update:A,dispose:()=>s.shadow.dispose()}}var Ri=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),zr=Object.freeze({top:Ri("Top down",0,0),high:Ri("High angle",0,15),dollhouse:Ri("Dollhouse",2,30),corner:Ri("Corner",45,40),north:Ri("From north",180,42),east:Ri("From east",90,42),south:Ri("From south",0,42),west:Ri("From west",270,42)});function bf(i,t=!1){let e=Object.entries(zr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="top",i.disabled=!1}function sl(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(zr,t.preset)?t.preset:"top",n=zr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?ii.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?ii.clamp(t.zoom,.6,2.5):n.zoom}}function kc(i,t,e,n,s="top"){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let r=sl(s),o=ii.degToRad(r.azimuth),a=ii.degToRad(r.tilt),l=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),c=new G(Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a));i.up.set(-Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)),i.position.copy(l).addScaledVector(c,1900),i.lookAt(l),i.updateMatrixWorld(!0);let h=new zn,f=new G;for(let m of[t.minX-37,t.maxX+37])for(let E of[t.minZ-53,t.maxZ+36])for(let R of[-111,92])h.expandByPoint(f.set(m,R,E).applyMatrix4(i.matrixWorldInverse));let u=e/n,d=Math.max((h.max.x-h.min.x)/2,(h.max.y-h.min.y)/2*u),p=d/u,y=(h.min.x+h.max.x)/2,g=(h.min.y+h.max.y)/2;return i.left=y-d,i.right=y+d,i.bottom=g-p,i.top=g+p,i.zoom=r.zoom,i.updateProjectionMatrix(),r}var Vc=Math.PI/180,Cf=14,If=56,Z_=21,Pf=-111,Gc={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Hc={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},J_=new Set(["cloudy","partlycloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),$_=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),K_=new Set(["snowy","snowy-rainy","hail"]),Mf={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42},j_=new Set(["waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]);function rl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Wc(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function Lf(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,l=r.y1+o*r.dz,c=Math.hypot(a-t,l-e);c<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:l,distance:c})}return s}function Nf(i,t,e,n){let s=i.some(o=>Wc(o,e-t.dz*23,n+t.dx*23));return i.some(o=>Wc(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function Q_(i,t,e){if(!Object.hasOwn(Mf,e.type))return null;let n=Lf(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,l=Math.abs(a)>4?Math.sign(a):Nf(i,s,r,o),c=(Cf/2+4)*l;return{x:r-s.dz*c,z:o+s.dx*c,angle:s.angle+(l<0?Math.PI:0),mountY:Math.min(Mf[e.type],If-8)}}function Ef(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function wf(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function ty(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function ey(i){if(i?.version!==2||!Array.isArray(i.rooms)||!i.rooms.length||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let t=i.rooms.filter(p=>p?.points?.length>=3&&p.points.every(y=>Number.isFinite(y?.x)&&Number.isFinite(y?.y)));if(!t.length)throw new Error("Storybook could not find a valid room polygon.");let e=i.walls.map(Ef).filter(Boolean),n=i.items.filter(p=>typeof p?.id=="string"&&typeof p.type=="string"&&[p.x,p.y,p.w,p.h].every(Number.isFinite)&&p.w>0&&p.h>0),s={minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0},r=(p,y)=>{s.minX=Math.min(s.minX,p),s.maxX=Math.max(s.maxX,p),s.minZ=Math.min(s.minZ,y),s.maxZ=Math.max(s.maxZ,y)};for(let p of t)for(let y of p.points)r(y.x,y.y);for(let p of e)r(p.x1,p.y1),r(p.x2,p.y2);let o={...s},a=new Map(e.map(p=>[p.id,p])),l=["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(p=>a.has(p))?{left:o.minX-108,deckEdge:o.minX-10,stepTop:o.minZ+14,stepBottom:o.maxZ+25,deckBottom:o.maxZ+82,northDeck:[[o.minX-10,a.get("w1").y1+57],[a.get("w2").x1,a.get("w1").y1+57],[a.get("w3").x1,a.get("w3").y1],[a.get("w3").x2,a.get("w3").y2],[o.minX-10,a.get("w4").y2]].map(([p,y])=>({x:p,y})),southDeck:[[o.minX-10,a.get("w6").y1],[a.get("w7").x1,a.get("w7").y1],[a.get("w7").x2,a.get("w7").y2],[a.get("w8").x1,o.maxZ+82],[o.minX-10,o.maxZ+82]].map(([p,y])=>({x:p,y})),recess:{x1:a.get("w12").x2,x2:a.get("w18").x1,z1:Math.min(a.get("w11").y2,a.get("w12").y2),z2:a.get("w13").y2}}:null,c=e.filter(p=>l?!(p.id==="w3"&&wf(p,[400,408,342,468]))&&!(p.id==="w7"&&wf(p,[248,590,302,651])):!0);if(l){r(l.left,l.stepTop),r(l.deckEdge,l.deckBottom);let{x1:p,x2:y,z1:g}=l.recess;if(y>p){let m=[[p,a.get("w12").y2,p,g],[p,g,y,g]];for(let[E,R]of m.entries()){if(c.some(L=>ty(L,R)))continue;let[b,A,w,D]=R,v=Ef({id:`reference-recess-${E}`,x1:b,y1:A,x2:w,y2:D});v&&c.push(v)}}}let h=new Map;for(let p of n.filter(y=>y.type==="window")){let y=Lf(c,p.x,p.y,(p.rotation||0)*Vc);if(!y||y.distance>27)continue;let{wall:g,t:m,centerX:E,centerZ:R}=y,b=Math.max(1,m-p.w/2+1),A=Math.min(g.length-1,m+p.w/2-1);if(A-b<14)continue;g.openings.push({start:b,end:A});let w=Nf(t,g,E,R),D=g.angle+(w<0?Math.PI:0),v=(b+A)/2;h.set(p.id,{x:g.x1+v*g.dx,z:g.y1+v*g.dz,angle:D,window:{...p,w:A-b+2,rotation:D/Vc}})}let f=n.map(p=>{let y=p.type==="controlZone"&&(p.visualKind==="window"||p.entityId?.startsWith("cover.")),g=h.get(p.id)??Q_(t,c,p);if(y){let w=52;for(let D of h.values()){let v=Math.hypot(D.x-p.x,D.z-p.y);v<w&&(g=D,w=v)}}let m=g?.x??p.x,E=g?.z??p.y,R=g?.angle??(Number.isFinite(p.rotation)?p.rotation*Vc:0),b=Math.min(300,(Math.abs(Math.cos(R))*p.w+Math.abs(Math.sin(R))*p.h)/2),A=Math.min(300,(Math.abs(Math.sin(R))*p.w+Math.abs(Math.cos(R))*p.h)/2);return r(m-b,E-A),r(m+b,E+A),{item:p,x:m,z:E,angle:R,window:g?.window,mountY:g?.mountY,isBlind:y}});for(let p of c)p.openings.sort((y,g)=>y.start-g.start||y.end-g.end);let u=_f(t,l),d=vf(c.map(p=>({...p,palette:Object.hasOwn(Hc,p.finish)?Hc[p.finish]:Hc.graphite})),Cf,If,Z_);return{rooms:t,walls:c,placements:f,bounds:s,houseBounds:o,reference:l,floorStructure:u,wallStructure:d}}function Tf(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Xc([i,...t]){let e=Tf(new hn,i);return e.holes=t.map(n=>Tf(new Oi,n)),e}function ny(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,l=rl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let h=0;h<8;h++){let f=h*32;s.globalAlpha=.04+l()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let u=30+h*47%181;s.fillRect(u,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let p=l()*256,y=f+3+l()*27,g=12+l()*46;s.beginPath(),s.moveTo(p,y),s.quadraticCurveTo(p+g/2,y+l()*2-1,p+g,y),s.stroke()}}else if(a==="tile")for(let h=0;h<8;h++)for(let f=0;f<8;f++)s.globalAlpha=l()*.14,s.fillRect(f*32,h*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,h*32+.5,31,31);else for(let h=0;h<160;h++)s.globalAlpha=.12+l()*.24,s.fillRect(l()*256,l()*256,1+l()*4,1+l()*3);let c=new bs(n);return c.colorSpace=Re,c.wrapS=c.wrapT=Di,c}function iy(i){let t=new Map,e=new ue,n=new gn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,l=d=>(a.has(d)||a.set(d,new ki({color:d})),a.get(d));function c(d,p,y,g,m,E=0){n.setFromAxisAngle(r,E),e.compose(s.set(y,g,m),n,o),d.applyMatrix4(e);let R=l(p);t.has(R)||t.set(R,[]),t.get(R).push(d)}function h(d,p,y,g,m,E,R,b=0){d>0&&p>0&&y>0&&c(new Ge(d,p,y),g,m,E,R,b)}function f(d,p,y,g,m,E,R){let b=new En(1,9,6);b.scale(d,p,y),c(b,g,m,E,R)}function u(){for(let[d,p]of t){let y=Us(p);if(!y){for(let g of p)i.add(new xe(g,d));continue}i.add(new xe(y,d));for(let g of p)g.dispose()}t.clear()}return{add:c,ball:f,box:h,material:l,finish:u}}function sy(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Gc,r)?r:"oak";if(!s.has(a)){let l=Gc[a],c=ny(n,l,141+Object.keys(Gc).indexOf(a)*977);s.set(a,new ki({color:c?"#fffdf8":l[0],map:c}))}for(let l of o){let c=new _i(Xc(l));c.rotateX(-Math.PI/2);let h=c.getAttribute("position"),f=c.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,h.getX(d)/248,h.getZ(d)/248);let u=new xe(c,s.get(a));u.receiveShadow=!0,i.add(u)}}for(let r of e.floorStructure.footprint)Af(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)Af(t,r,Pf-1,-22,"#a18e84",!0)}function ry(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new De(e,1))}return i}function Af(i,t,e,n,s,r=!1){let o=new Qn(Xc(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),l=[];for(let c=0;c<a.count;c+=3)[c,c+1,c+2].some(h=>a.getZ(h)<n-e-.001)&&l.push(c,c+1,c+2);o.setIndex(l)}o.rotateX(-Math.PI/2),i.add(ry(o),s,0,e,0)}function oy(i,t){let e=[],n=[],s=[];for(let[[o,a],[l,c]]of i){let h=e.length/3,f=Math.hypot(l-o,c-a);e.push(o,0,a,o,t,a,l,t,c,l,0,c),n.push(h,h+1,h+2,h,h+2,h+3),s.push(0,0,0,t,f,t,f,0)}let r=new Me;return r.setAttribute("position",new oe(e,3)),r.setAttribute("uv",new oe(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function Rf(i,t){let e=new _i(Xc(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function ay(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(Rf(o,!1),r,0,s,0);for(let o of e.bottom)i.add(Rf(o,!0),r,0,n,0);e.sides.length&&i.add(oy(e.sides,s-n),r,0,n,0)}}function ly(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,l=(n+e)/2,c=14,h=(r-s)/c,f=-108,u=-f/c;for(let R=0;R<c;R++){let b=s+h*(R+.5),A=f+(R+1)*u,w=A-3;i.box(a,w-f,h,"#a98075",l,(f+w)/2,b),i.box(a,3,h,R%2?"#e2c2a6":"#d5b198",l,A-1.5,b),i.box(a+1,2.4,3,"#b68e82",l,A-1.8,b-h/2+.4),i.box(5,24,5,"#9f8183",e+4,A+12,b)}let d=h*(c-1),p=u*(c-1),y=new Ge(7,5,Math.hypot(d,p)+5);y.rotateX(-Math.atan2(p,d)),i.add(y,"#896e79",e+4,24-p/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",l,f-1.5,s-40);let[g,m]=o,E=Math.max(2,Math.ceil((m.x-g.x)/28));i.box(m.x-g.x,5,7,"#896e79",(m.x+g.x)/2,28,g.y);for(let R=0;R<=E;R++)i.box(5,28,5,"#9f8183",g.x+(m.x-g.x)*R/E,14,g.y)}function cy(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=rl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,l=20+n()*56;for(let c of[-512,0,512])for(let h of[-512,0,512]){let f=e.createRadialGradient(o+c,a+h,0,o+c,a+h,l);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+c-l,a+h-l,l*2,l*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new bs(t);return s.wrapS=s.wrapT=Di,s.repeat.set(15,10),s.colorSpace=Re,s.anisotropy=4,s}function hy(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,l=rl(150741),c=Math.min(90,o*.18),h=t.reference?t.reference.left+c/2:e+c/2;i.box(c,4,115,"#c7baa4",h,-109,s-88);for(let u=0;u<5;u++)i.box(c*.85,1.8,13,"#dbceba",h,-106,s-137+u*20);let f=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,d]of f){let p=e+u*o,y=s+d*a,g=21+l()*24;i.ball(g*.94,9,g*.67,"#6d886a",p,-104,y),i.ball(g*.82,g*.57,g*.69,"#819b76",p+3,-98,y);for(let m=0;m<8;m++){let E=m*2.39996,R=(.2+l()*.5)*g,b=g*(.28+l()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][m%4];i.ball(b*1.15,b*.8,b,A,p+Math.cos(E)*R,-93+12*l(),y+Math.sin(E)*R*.75)}for(let m=0;m<5;m++){let E=m%2?"#e6c4b1":"#fae6a4",R=p+(l()-.5)*g*1.14,b=y+g*(.62+l()*.43);i.ball(2.3,4.6,2.3,"#819765",R,-106,b),i.ball(3.9,1.8,3.3,E,R,-101.5,b),i.ball(1.2,.9,1.2,"#cb9c57",R,-100.3,b)}}}function uy(i,t){let{minX:e,maxX:n,minZ:s}=t.houseBounds,r=rl(2912),o=t.bounds,a=new Se,l=new ki({color:"#f8ebdf",transparent:!0,opacity:.9}),c=new En(1,12,8),h=n-e;for(let[L,F]of[.19,.53,.82].entries()){let z=e+h*F,W=s-55-L%2*34;for(let Y=0;Y<3;Y++){let O=new xe(c,l);O.scale.set(32+r()*21,15+r()*10,25+r()*10),O.position.set(z+Y*31,27+5*(Y===1),W),a.add(O)}}i.add(a);let f=new Se;f.position.set(e+h*.77,21,s-70);let u=new xe(new En(17,16,10),new jn({color:"#ffe2a1"}));f.add(u);let d=new Se,p=new xe(u.geometry,new jn({color:"#f9e5c6"}));d.add(p);let y=new xe(u.geometry,new jn({color:"#7d7c97"}));y.position.set(4,4,1),y.scale.setScalar(.96),d.add(y),f.add(d),i.add(f);let g=[],m=t.reference?.recess,E=(L,F)=>!(m&&L>=m.x1&&L<=m.x2&&F>=m.z1&&F<=m.z2)&&!t.rooms.some(z=>Wc(z,L,F));for(let L=0;L<190;L++){let F=o.minX-70+(o.maxX-o.minX+140)*r(),z=o.minZ-70+(o.maxZ-o.minZ+140)*r();E(F,z)&&g.push({x:F,z,phase:r()*180})}let R=new Float32Array(g.length*6),b=new Float32Array(g.length*3),A=new Me,w=new Me;A.setAttribute("position",new De(R,3).setUsage(Wa)),w.setAttribute("position",new De(b,3).setUsage(Wa));let D=new ir(A,new vs({color:"#cce5ef",transparent:!0,opacity:.66})),v=new sr(w,new Ss({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return D.frustumCulled=v.frustumCulled=!1,i.add(D,v),(L,F,z)=>{let{night:W=!1,condition:Y="",moonPhase:O="",daylightKnown:J=!0}=F,nt=z?0:L;a.visible=J_.has(Y),a.position.x=Math.sin(nt*.16)*(Y.includes("windy")?48:23),u.visible=J&&!W,d.visible=J&&W&&j_.has(O),y.visible=O!=="full_moon";let Q=O.startsWith("waxing")||O==="first_quarter",at=O.endsWith("quarter");if(y.position.x=(Q?-1:1)*(at?8:O.endsWith("gibbous")?14:5),D.visible=$_.has(Y),v.visible=K_.has(Y),D.visible||v.visible){for(let[rt,et]of g.entries()){let ut=65-(et.phase+nt*150)%170,At=65-(et.phase+nt*20)%170,Et=rt*6;R.set([et.x,ut,et.z,et.x-4,ut+22,et.z+3],Et),b.set([et.x+Math.sin(nt+rt)*6,At,et.z],rt*3)}A.attributes.position.needsUpdate=D.visible,w.attributes.position.needsUpdate=v.visible}}}function fy(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35)return e.get(n.item.id)?.anchorY??0}return 0}function Df(i,t){let e=ey(t),n=new Ja({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"}),s=new tr;s.background=new Jt("#d7dfcd");let r=new bi(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:l,maxZ:c}=e.bounds,h=new ei({color:"#e8e8d2",map:cy(i.ownerDocument),roughness:.95}),f=new xe(new ti(6200,4200),h);f.rotation.x=-Math.PI/2,f.position.set((o+a)/2,Pf,(l+c)/2),s.add(f);let u=iy(s);hy(u,e),ly(u,e),sy(s,u,e,i.ownerDocument),ay(u,e),u.finish();let d=Sf(n,s,e.bounds);d.markStructure();let p=uy(s,e),y=new Map,g=new Map;for(let Q of e.placements){let{item:at,x:rt,z:et,angle:ut,window:At,mountY:Et,isBlind:Kt}=Q,Xt=at.type==="window"&&At?At:at,Zt=of(Xt,{window:Kt?At:void 0,mountY:Et})??nf(Xt);Zt&&(Zt.root.position.set(rt,0,et),Zt.root.rotation.y=-ut,s.add(Zt.root),g.set(at.id,Zt),d.register(at,Zt)),y.set(at.id,{x:rt,z:et,object:Zt})}for(let Q of e.placements){let at=g.get(Q.item.id);at&&(at.root.position.y=fy(e,Q,g))}let m=new G,E=!1,R=0,b=0,A=sl(),w=new vr,D=new ln(new G(0,1,0),0),v=new G,L=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function F(Q,at){if(E||Q<1||at<1||Q===R&&at===b)return;R=Q,b=at;let rt=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(rt,1.5,Math.sqrt(27e5/(Q*at)))),n.setSize(Q,at,!1),A=kc(r,e.bounds,Q,at,A)}function z(Q){return A=sl(Q),!E&&R>0&&b>0&&(A=kc(r,e.bounds,R,b,A)),W()}function W(){return{...A}}function Y(Q,at){return E||!Number.isFinite(Q)||!Number.isFinite(at)||R<=0||b<=0?null:(w.setFromCamera(new bt(Q/R*2-1,1-at/b*2),r),w.ray.intersectPlane(D,v)?{x:v.x,y:v.z}:null)}function O(Q=0,at={},rt={}){if(E||R<1||b<1)return;d.update(rt,at,h);let et=rt.reduceMotion===!0,ut=Number.isFinite(Q)?Q:0;p(ut,rt,et);for(let[At,Et]of g){let Kt=at[At]??L,Xt=Kt.position;Xt&&Number.isFinite(Xt.x)&&Number.isFinite(Xt.y)&&(Et.root.position.x=Xt.x,Et.root.position.z=Xt.y),Et.animate?.(Kt,et?0:ut)}n.render(s,r)}function J(Q){let at=y.get(Q);if(!at||R<1||b<1)return null;let{x:rt,z:et,object:ut}=at;return ut?(m.set(ut.anchorOffset?.x||0,ut.anchorY||0,ut.anchorOffset?.z||0),ut.root.localToWorld(m)):m.set(rt,6,et),m.project(r),{x:(m.x+1)/2,y:(1-m.y)/2}}function nt(){if(E)return;E=!0;let Q=new Set,at=new Set,rt=new Set;s.traverse(et=>{et.geometry&&Q.add(et.geometry);for(let ut of Array.isArray(et.material)?et.material:[et.material])if(ut){at.add(ut);for(let At of Object.values(ut))At?.isTexture&&rt.add(At)}});for(let et of rt)et.dispose();for(let et of Q)et.dispose();for(let et of at)et.dispose();d.dispose(),n.dispose()}return{resize:F,render:O,anchor:J,setView:z,getView:W,projectToPlan:Y,dispose:nt}}function Uf(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,l)=>(a.priority??0)-(l.priority??0)),o=(a,l,c)=>Math.min(Math.max(a,l),c);for(let a of r){let l=Math.min(a.w,t),c=Math.min(a.h,e),h;for(let f=0;f<=3&&!h;f++)for(let[u,d]of f===0?s.slice(0,1):s.slice(1)){let p=o(a.x+u*f*34,l/2,t-l/2),y=o(a.y+d*f*34,c/2,e-c/2);if(n.every(g=>Math.abs(p-g.x)>=(l+g.w)/2+2||Math.abs(y-g.y)>=(c+g.h)/2+2)){h={...a,x:p,y,w:l,h:c};break}}h&&n.push(h)}return n}var dy=22,py=5;function my(i,t,e){let n=Uf(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),l=[];for(let h=o/2;h<=t-o/2;h+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)l.push({...r,x:h,y:f,w:o,h:a});l.sort((h,f)=>Math.hypot(h.x-r.x,h.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let c=l.find(h=>n.every(f=>Math.abs(h.x-f.x)>=(h.w+f.w)/2+2||Math.abs(h.y-f.y)>=(h.h+f.h)/2+2));c&&n.push(c)}return n}function gy(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function xy(i,t,e,n,s,r){let o=i.flatMap((a,l)=>{let c=n.get(a.id);if(!c)return[];let h=Math.hypot(c.x*s-t.x,c.y*r-t.y),f=h<=dy;return!f&&!gy(a,e)?[]:[{item:a,index:l,distance:h,near:f,area:a.w*a.h}]});return o.sort((a,l)=>Number(l.near)-Number(a.near)||(a.near?a.distance-l.distance:a.area-l.area)||l.index-a.index),o[0]?.item??null}function _y(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;bf(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneReset"),l=i.createElement("div");l.className="scene-selection",l.setAttribute("aria-hidden","true"),Object.assign(l.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(l);let c=i.createElement("div");c.className="scene-placeholders",Object.assign(c.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(c);let h=i.createElementNS("http://www.w3.org/2000/svg","svg");h.classList.add("scene-placeholder-leaders"),h.setAttribute("aria-hidden","true"),Object.assign(h.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(h,c);let f=new Map,u=i.getElementById("miniHelp"),d=u?.textContent,p,y,g,m={preset:"top"},E=r.value,R,b,A=!1,w=()=>E!=="plan",D=()=>n.getBoundingClientRect(),v=Z=>{let dt=D();return{x:Z.clientX-dt.left,y:Z.clientY-dt.top}};function L(Z){e.showStatus?.(Z)}function F(Z){if(!p||!w())return;let{width:dt,height:_t}=D();if(!dt||!_t)return;p.resize(dt,_t),p.render(0,Z??{},{night:!1,condition:"sunny",daylightKnown:!0,reduceMotion:!0});let xt=[];for(let[k,ne]of f){let kt=p.anchor(k);ne.hidden=!kt,kt&&xt.push({id:k,marker:ne,x:kt.x*dt,y:kt.y*_t,w:96,h:44})}let St=my(xt,dt,_t),zt=new Set(St.map(k=>k.id)),Ot=[];for(let k of St){let{marker:ne,x:kt,y:N,w:S,h:K,id:ot}=k;Object.assign(ne.style,{left:`${kt}px`,top:`${N}px`,width:`${S}px`,height:`${K}px`});let ct=xt.find(U=>U.id===ot);if(Math.hypot(ct.x-kt,ct.y-N)>8){let U=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[x,_]of Object.entries({x1:ct.x,y1:ct.y,x2:kt,y2:N}))U.setAttribute(x,_);U.setAttribute("stroke","#6f816b"),U.setAttribute("stroke-width","1"),U.setAttribute("stroke-dasharray","3 3"),Ot.push(U)}}for(let[k,ne]of f)ne.hidden=!zt.has(k);h.replaceChildren(...Ot);let Vt=e.getSelection(),Gt=Vt?.kind==="item"?p.anchor(Vt.id):null;l.style.display=Gt?"block":"none",Gt&&(l.style.left=`${Gt.x*dt}px`,l.style.top=`${Gt.y*_t}px`)}function z(){if(!R)return;let Z=R;R=void 0;try{n.releasePointerCapture(Z.pointerId)}catch{}Z.item&&F({[Z.item.id]:{position:{x:Z.item.x,y:Z.item.y}}})}function W(){for(let Z of Object.values(o))Z&&(Z.disabled=!w())}function Y(Z){if(z(),E=Object.hasOwn(zr,Z)?Z:"plan",r.value=E,n.hidden=!w(),c.style.display=w()?"block":"none",h.style.display=w()?"block":"none",u&&(u.textContent=w()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":d),s.classList.toggle("scene-3d",w()),W(),!w()){l.style.display="none",L("Plan view \xB7 edit rooms, walls, floors and objects");return}e.useSelectTool?.();let dt={preset:E};J(),p&&(p.setView(dt),m=p.getView(),F(),L("3D view \xB7 select and drag objects, or place an object from the catalog"))}function O(){p?.dispose(),p=void 0,g=void 0,E="plan",r.value=E,n.hidden=!0,c.style.display="none",h.style.display="none",u&&(u.textContent=d),s.classList.remove("scene-3d"),l.style.display="none",W(),L("3D view is unavailable on this screen. Plan view is ready.")}function J(){if(A||!w())return;let Z=e.getProject(),dt=JSON.stringify(Z);try{if(!p||dt!==g){z(),p&&(m=p.getView()),p?.dispose(),p=void 0,y=Z,p=Df(n,y),p.setView(m),g=dt,f.clear(),c.replaceChildren();for(let _t of y.items.filter(xt=>xt.type==="cameraThumbnail"||xt.type.startsWith("ui"))){let xt=i.createElement("button");xt.type="button",xt.className="scene-placeholder",xt.textContent=_t.name||(_t.type==="cameraThumbnail"?"Camera":"Interface"),xt.setAttribute("aria-label",`Select ${xt.textContent}`),Object.assign(xt.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),xt.addEventListener("pointerdown",St=>ut(St,_t.id)),xt.addEventListener("click",St=>{St.detail===0&&(e.selectItem(_t.id),F())}),f.set(_t.id,xt),c.append(xt)}}F()}catch{O()}}function nt(Z){!p||!w()||(z(),p.setView(Z(p.getView())),m=p.getView(),F())}let Q=()=>J(),at=()=>{let Z=e.getTool();w()&&Z!=="select"?Y("plan"):w()&&F()},rt=()=>Y(r.value),et=()=>{t.cancelAnimationFrame(b),b=t.requestAnimationFrame(()=>F())},ut=(Z,dt=null)=>{if(!w()||!p||Z.button!==0||R)return;Z.preventDefault(),Z.stopPropagation();let _t=v(Z),xt=p.projectToPlan(_t.x,_t.y);if(!xt)return;if(e.hasPlacement()){e.placeAt(xt.x,xt.y),J();return}let{width:St,height:zt}=D(),Ot=new Map(y.items.map(Gt=>[Gt.id,p.anchor(Gt.id)])),Vt=dt?y.items.find(Gt=>Gt.id===dt):xy(y.items,_t,xt,Ot,St,zt);if(e.selectItem(Vt?.id??null),!Vt){F();return}R={item:{...Vt},startScreen:_t,startPlan:xt,pointerId:Z.pointerId},n.setPointerCapture(Z.pointerId),F()},At=Z=>{if(!w()||(Z.stopPropagation(),!R||R.pointerId!==Z.pointerId||!p))return;let dt=v(Z);if(!R.moved&&Math.hypot(dt.x-R.startScreen.x,dt.y-R.startScreen.y)<py)return;let _t=p.projectToPlan(dt.x,dt.y);_t&&(R.moved=!0,R.position={x:R.item.x+_t.x-R.startPlan.x,y:R.item.y+_t.y-R.startPlan.y},F({[R.item.id]:{position:R.position}}))},Et=Z=>{if(!w()||(Z.stopPropagation(),!R||R.pointerId!==Z.pointerId))return;let dt=R;R=void 0;try{n.releasePointerCapture(Z.pointerId)}catch{}dt.moved&&dt.position?(e.moveItem(dt.item.id,dt.position.x,dt.position.y),J()):F()},Kt=Z=>{R?.pointerId===Z.pointerId&&z(),Z.stopPropagation()},Xt=Z=>{w()&&(Z.preventDefault(),Z.stopPropagation(),nt(dt=>({...dt,zoom:dt.zoom*(Z.deltaY<0?1.1:1/1.1)})))},Zt=Z=>{Z.key==="Escape"&&R&&(Z.preventDefault(),Z.stopImmediatePropagation(),z())},ft=Z=>{Z.preventDefault(),O()},gt=()=>nt(Z=>({...Z,azimuth:Z.azimuth-15})),wt=()=>nt(Z=>({...Z,azimuth:Z.azimuth+15})),Ht=()=>nt(Z=>({...Z,zoom:Z.zoom/1.2})),Ct=()=>nt(Z=>({...Z,zoom:Z.zoom*1.2})),Nt=()=>Y("top");o.left?.addEventListener("click",gt),o.right?.addEventListener("click",wt),o.out?.addEventListener("click",Ht),o.in?.addEventListener("click",Ct),a?.addEventListener("click",Nt),r.addEventListener("change",rt),n.addEventListener("pointerdown",ut),n.addEventListener("pointermove",At),n.addEventListener("pointerup",Et),n.addEventListener("pointercancel",Kt),n.addEventListener("lostpointercapture",Kt),n.addEventListener("wheel",Xt,{passive:!1}),n.addEventListener("webglcontextlost",ft),t.addEventListener("keydown",Zt,!0),t.addEventListener("roomcraft-editor-change",Q),t.addEventListener("roomcraft-editor-tool",at);let ae=new t.ResizeObserver(et);return ae.observe(s),Y(E),{getView:()=>p?.getView()??{...m},setView:Y,dispose(){A=!0,z(),ae.disconnect(),t.cancelAnimationFrame(b),p?.dispose(),p=void 0,l.remove(),c.remove(),h.remove(),u&&(u.textContent=d),o.left?.removeEventListener("click",gt),o.right?.removeEventListener("click",wt),o.out?.removeEventListener("click",Ht),o.in?.removeEventListener("click",Ct),a?.removeEventListener("click",Nt),r.removeEventListener("change",rt),n.removeEventListener("pointerdown",ut),n.removeEventListener("pointermove",At),n.removeEventListener("pointerup",Et),n.removeEventListener("pointercancel",Kt),n.removeEventListener("lostpointercapture",Kt),n.removeEventListener("wheel",Xt),n.removeEventListener("webglcontextlost",ft),t.removeEventListener("keydown",Zt,!0),t.removeEventListener("roomcraft-editor-change",Q),t.removeEventListener("roomcraft-editor-tool",at)}}}typeof window<"u"&&typeof document<"u"&&_y(document,window);})();
