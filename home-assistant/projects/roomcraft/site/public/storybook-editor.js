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
"use strict";(()=>{var bd=Object.create;var gu=Object.defineProperty;var Md=Object.getOwnPropertyDescriptor;var Sd=Object.getOwnPropertyNames;var Ed=Object.getPrototypeOf,wd=Object.prototype.hasOwnProperty;var Td=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Ad=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Sd(t))!wd.call(i,s)&&s!==e&&gu(i,s,{get:()=>t[s],enumerable:!(n=Md(t,s))||n.enumerable});return i};var Rd=(i,t,e)=>(e=i!=null?bd(Ed(i)):{},Ad(t||!i||!i.__esModule?gu(e,"default",{value:i,enumerable:!0}):e,i));var Pf=Td((su,ru)=>{(function(i,t){typeof su=="object"&&typeof ru<"u"?ru.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(su,(function(){"use strict";/**
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
    ***************************************************************************** */function i(B,_){var y={label:0,sent:function(){if(N[0]&1)throw N[1];return N[1]},trys:[],ops:[]},T,P,N,H;return H={next:k(0),throw:k(1),return:k(2)},typeof Symbol=="function"&&(H[Symbol.iterator]=function(){return this}),H;function k(j){return function(yt){return tt([j,yt])}}function tt(j){if(T)throw new TypeError("Generator is already executing.");for(;y;)try{if(T=1,P&&(N=j[0]&2?P.return:j[0]?P.throw||((N=P.return)&&N.call(P),0):P.next)&&!(N=N.call(P,j[1])).done)return N;switch(P=0,N&&(j=[j[0]&2,N.value]),j[0]){case 0:case 1:N=j;break;case 4:return y.label++,{value:j[1],done:!1};case 5:y.label++,P=j[1],j=[0];continue;case 7:j=y.ops.pop(),y.trys.pop();continue;default:if(N=y.trys,!(N=N.length>0&&N[N.length-1])&&(j[0]===6||j[0]===2)){y=0;continue}if(j[0]===3&&(!N||j[1]>N[0]&&j[1]<N[3])){y.label=j[1];break}if(j[0]===6&&y.label<N[1]){y.label=N[1],N=j;break}if(N&&y.label<N[2]){y.label=N[2],y.ops.push(j);break}N[2]&&y.ops.pop(),y.trys.pop();continue}j=_.call(B,y)}catch(yt){j=[6,yt],P=0}finally{T=N=0}if(j[0]&5)throw j[1];return{value:j[0]?j[1]:void 0,done:!0}}}var t=(function(){function B(_,y){this.next=null,this.key=_,this.data=y,this.left=null,this.right=null}return B})();function e(B,_){return B>_?1:B<_?-1:0}function n(B,_,y){for(var T=new t(null,null),P=T,N=T;;){var H=y(B,_.key);if(H<0){if(_.left===null)break;if(y(B,_.left.key)<0){var k=_.left;if(_.left=k.right,k.right=_,_=k,_.left===null)break}N.left=_,N=_,_=_.left}else if(H>0){if(_.right===null)break;if(y(B,_.right.key)>0){var k=_.right;if(_.right=k.left,k.left=_,_=k,_.right===null)break}P.right=_,P=_,_=_.right}else break}return P.right=_.left,N.left=_.right,_.left=T.right,_.right=T.left,_}function s(B,_,y,T){var P=new t(B,_);if(y===null)return P.left=P.right=null,P;y=n(B,y,T);var N=T(B,y.key);return N<0?(P.left=y.left,P.right=y,y.left=null):N>=0&&(P.right=y.right,P.left=y,y.right=null),P}function r(B,_,y){var T=null,P=null;if(_){_=n(B,_,y);var N=y(_.key,B);N===0?(T=_.left,P=_.right):N<0?(P=_.right,_.right=null,T=_):(T=_.left,_.left=null,P=_)}return{left:T,right:P}}function o(B,_,y){return _===null?B:(B===null||(_=n(B.key,_,y),_.left=B),_)}function a(B,_,y,T,P){if(B){T(""+_+(y?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+P(B)+`
`);var N=_+(y?"    ":"\u2502   ");B.left&&a(B.left,N,!1,T,P),B.right&&a(B.right,N,!0,T,P)}}var c=(function(){function B(_){_===void 0&&(_=e),this._root=null,this._size=0,this._comparator=_}return B.prototype.insert=function(_,y){return this._size++,this._root=s(_,y,this._root,this._comparator)},B.prototype.add=function(_,y){var T=new t(_,y);this._root===null&&(T.left=T.right=null,this._size++,this._root=T);var P=this._comparator,N=n(_,this._root,P),H=P(_,N.key);return H===0?this._root=N:(H<0?(T.left=N.left,T.right=N,N.left=null):H>0&&(T.right=N.right,T.left=N,N.right=null),this._size++,this._root=T),this._root},B.prototype.remove=function(_){this._root=this._remove(_,this._root,this._comparator)},B.prototype._remove=function(_,y,T){var P;if(y===null)return null;y=n(_,y,T);var N=T(_,y.key);return N===0?(y.left===null?P=y.right:(P=n(_,y.left,T),P.right=y.right),this._size--,P):y},B.prototype.pop=function(){var _=this._root;if(_){for(;_.left;)_=_.left;return this._root=n(_.key,this._root,this._comparator),this._root=this._remove(_.key,this._root,this._comparator),{key:_.key,data:_.data}}return null},B.prototype.findStatic=function(_){for(var y=this._root,T=this._comparator;y;){var P=T(_,y.key);if(P===0)return y;P<0?y=y.left:y=y.right}return null},B.prototype.find=function(_){return this._root&&(this._root=n(_,this._root,this._comparator),this._comparator(_,this._root.key)!==0)?null:this._root},B.prototype.contains=function(_){for(var y=this._root,T=this._comparator;y;){var P=T(_,y.key);if(P===0)return!0;P<0?y=y.left:y=y.right}return!1},B.prototype.forEach=function(_,y){for(var T=this._root,P=[],N=!1;!N;)T!==null?(P.push(T),T=T.left):P.length!==0?(T=P.pop(),_.call(y,T),T=T.right):N=!0;return this},B.prototype.range=function(_,y,T,P){for(var N=[],H=this._comparator,k=this._root,tt;N.length!==0||k;)if(k)N.push(k),k=k.left;else{if(k=N.pop(),tt=H(k.key,y),tt>0)break;if(H(k.key,_)>=0&&T.call(P,k))return this;k=k.right}return this},B.prototype.keys=function(){var _=[];return this.forEach(function(y){var T=y.key;return _.push(T)}),_},B.prototype.values=function(){var _=[];return this.forEach(function(y){var T=y.data;return _.push(T)}),_},B.prototype.min=function(){return this._root?this.minNode(this._root).key:null},B.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},B.prototype.minNode=function(_){if(_===void 0&&(_=this._root),_)for(;_.left;)_=_.left;return _},B.prototype.maxNode=function(_){if(_===void 0&&(_=this._root),_)for(;_.right;)_=_.right;return _},B.prototype.at=function(_){for(var y=this._root,T=!1,P=0,N=[];!T;)if(y)N.push(y),y=y.left;else if(N.length>0){if(y=N.pop(),P===_)return y;P++,y=y.right}else T=!0;return null},B.prototype.next=function(_){var y=this._root,T=null;if(_.right){for(T=_.right;T.left;)T=T.left;return T}for(var P=this._comparator;y;){var N=P(_.key,y.key);if(N===0)break;N<0?(T=y,y=y.left):y=y.right}return T},B.prototype.prev=function(_){var y=this._root,T=null;if(_.left!==null){for(T=_.left;T.right;)T=T.right;return T}for(var P=this._comparator;y;){var N=P(_.key,y.key);if(N===0)break;N<0?y=y.left:(T=y,y=y.right)}return T},B.prototype.clear=function(){return this._root=null,this._size=0,this},B.prototype.toList=function(){return f(this._root)},B.prototype.load=function(_,y,T){y===void 0&&(y=[]),T===void 0&&(T=!1);var P=_.length,N=this._comparator;if(T&&g(_,y,0,P-1,N),this._root===null)this._root=l(_,y,0,P),this._size=P;else{var H=d(this.toList(),u(_,y),N);P=this._size+P,this._root=h({head:H},0,P)}return this},B.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(B.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(B.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),B.prototype.toString=function(_){_===void 0&&(_=function(T){return String(T.key)});var y=[];return a(this._root,"",!0,function(T){return y.push(T)},_),y.join("")},B.prototype.update=function(_,y,T){var P=this._comparator,N=r(_,this._root,P),H=N.left,k=N.right;P(_,y)<0?k=s(y,T,k,P):H=s(y,T,H,P),this._root=o(H,k,P)},B.prototype.split=function(_){return r(_,this._root,this._comparator)},B.prototype[Symbol.iterator]=function(){var _,y,T;return i(this,function(P){switch(P.label){case 0:_=this._root,y=[],T=!1,P.label=1;case 1:return T?[3,6]:_===null?[3,2]:(y.push(_),_=_.left,[3,5]);case 2:return y.length===0?[3,4]:(_=y.pop(),[4,_]);case 3:return P.sent(),_=_.right,[3,5];case 4:T=!0,P.label=5;case 5:return[3,1];case 6:return[2]}})},B})();function l(B,_,y,T){var P=T-y;if(P>0){var N=y+Math.floor(P/2),H=B[N],k=_[N],tt=new t(H,k);return tt.left=l(B,_,y,N),tt.right=l(B,_,N+1,T),tt}return null}function u(B,_){for(var y=new t(null,null),T=y,P=0;P<B.length;P++)T=T.next=new t(B[P],_[P]);return T.next=null,y.next}function f(B){for(var _=B,y=[],T=!1,P=new t(null,null),N=P;!T;)_?(y.push(_),_=_.left):y.length>0?(_=N=N.next=y.pop(),_=_.right):T=!0;return N.next=null,P.next}function h(B,_,y){var T=y-_;if(T>0){var P=_+Math.floor(T/2),N=h(B,_,P),H=B.head;return H.left=N,B.head=B.head.next,H.right=h(B,P+1,y),H}return null}function d(B,_,y){for(var T=new t(null,null),P=T,N=B,H=_;N!==null&&H!==null;)y(N.key,H.key)<0?(P.next=N,N=N.next):(P.next=H,H=H.next),P=P.next;return N!==null?P.next=N:H!==null&&(P.next=H),T.next}function g(B,_,y,T,P){if(!(y>=T)){for(var N=B[y+T>>1],H=y-1,k=T+1;;){do H++;while(P(B[H],N)<0);do k--;while(P(B[k],N)>0);if(H>=k)break;var tt=B[H];B[H]=B[k],B[k]=tt,tt=_[H],_[H]=_[k],_[k]=tt}g(B,_,y,k,P),g(B,_,k+1,T,P)}}let x=(B,_)=>B.ll.x<=_.x&&_.x<=B.ur.x&&B.ll.y<=_.y&&_.y<=B.ur.y,m=(B,_)=>{if(_.ur.x<B.ll.x||B.ur.x<_.ll.x||_.ur.y<B.ll.y||B.ur.y<_.ll.y)return null;let y=B.ll.x<_.ll.x?_.ll.x:B.ll.x,T=B.ur.x<_.ur.x?B.ur.x:_.ur.x,P=B.ll.y<_.ll.y?_.ll.y:B.ll.y,N=B.ur.y<_.ur.y?B.ur.y:_.ur.y;return{ll:{x:y,y:P},ur:{x:T,y:N}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let M=p*p,R=(B,_)=>{if(-p<B&&B<p&&-p<_&&_<p)return 0;let y=B-_;return y*y<M*B*_?0:B<_?-1:1};class S{constructor(){this.reset()}reset(){this.xRounder=new b,this.yRounder=new b}round(_,y){return{x:this.xRounder.round(_),y:this.yRounder.round(y)}}}class b{constructor(){this.tree=new c,this.round(0)}round(_){let y=this.tree.add(_),T=this.tree.prev(y);if(T!==null&&R(y.key,T.key)===0)return this.tree.remove(_),T.key;let P=this.tree.next(y);return P!==null&&R(y.key,P.key)===0?(this.tree.remove(_),P.key):_}}let w=new S,L=11102230246251565e-32,v=134217729,I=(3+8*L)*L;function D(B,_,y,T,P){let N,H,k,tt,j=_[0],yt=T[0],C=0,$=0;yt>j==yt>-j?(N=j,j=_[++C]):(N=yt,yt=T[++$]);let q=0;if(C<B&&$<y)for(yt>j==yt>-j?(H=j+N,k=N-(H-j),j=_[++C]):(H=yt+N,k=N-(H-yt),yt=T[++$]),N=H,k!==0&&(P[q++]=k);C<B&&$<y;)yt>j==yt>-j?(H=N+j,tt=H-N,k=N-(H-tt)+(j-tt),j=_[++C]):(H=N+yt,tt=H-N,k=N-(H-tt)+(yt-tt),yt=T[++$]),N=H,k!==0&&(P[q++]=k);for(;C<B;)H=N+j,tt=H-N,k=N-(H-tt)+(j-tt),j=_[++C],N=H,k!==0&&(P[q++]=k);for(;$<y;)H=N+yt,tt=H-N,k=N-(H-tt)+(yt-tt),yt=T[++$],N=H,k!==0&&(P[q++]=k);return(N!==0||q===0)&&(P[q++]=N),q}function O(B,_){let y=_[0];for(let T=1;T<B;T++)y+=_[T];return y}function z(B){return new Float64Array(B)}let X=(3+16*L)*L,F=(2+12*L)*L,V=(9+64*L)*L*L,J=z(4),Q=z(8),pt=z(12),it=z(16),ct=z(4);function ft(B,_,y,T,P,N,H){let k,tt,j,yt,C,$,q,gt,_t,ht,Et,Ct,ee,Yt,me,ge,Xe,Ie,qe=B-P,St=y-P,Wt=_-N,Zt=T-N;Yt=qe*Zt,$=v*qe,q=$-($-qe),gt=qe-q,$=v*Zt,_t=$-($-Zt),ht=Zt-_t,me=gt*ht-(Yt-q*_t-gt*_t-q*ht),ge=Wt*St,$=v*Wt,q=$-($-Wt),gt=Wt-q,$=v*St,_t=$-($-St),ht=St-_t,Xe=gt*ht-(ge-q*_t-gt*_t-q*ht),Et=me-Xe,C=me-Et,J[0]=me-(Et+C)+(C-Xe),Ct=Yt+Et,C=Ct-Yt,ee=Yt-(Ct-C)+(Et-C),Et=ee-ge,C=ee-Et,J[1]=ee-(Et+C)+(C-ge),Ie=Ct+Et,C=Ie-Ct,J[2]=Ct-(Ie-C)+(Et-C),J[3]=Ie;let ne=O(4,J),ye=F*H;if(ne>=ye||-ne>=ye||(C=B-qe,k=B-(qe+C)+(C-P),C=y-St,j=y-(St+C)+(C-P),C=_-Wt,tt=_-(Wt+C)+(C-N),C=T-Zt,yt=T-(Zt+C)+(C-N),k===0&&tt===0&&j===0&&yt===0)||(ye=V*H+I*Math.abs(ne),ne+=qe*yt+Zt*k-(Wt*j+St*tt),ne>=ye||-ne>=ye))return ne;Yt=k*Zt,$=v*k,q=$-($-k),gt=k-q,$=v*Zt,_t=$-($-Zt),ht=Zt-_t,me=gt*ht-(Yt-q*_t-gt*_t-q*ht),ge=tt*St,$=v*tt,q=$-($-tt),gt=tt-q,$=v*St,_t=$-($-St),ht=St-_t,Xe=gt*ht-(ge-q*_t-gt*_t-q*ht),Et=me-Xe,C=me-Et,ct[0]=me-(Et+C)+(C-Xe),Ct=Yt+Et,C=Ct-Yt,ee=Yt-(Ct-C)+(Et-C),Et=ee-ge,C=ee-Et,ct[1]=ee-(Et+C)+(C-ge),Ie=Ct+Et,C=Ie-Ct,ct[2]=Ct-(Ie-C)+(Et-C),ct[3]=Ie;let en=D(4,J,4,ct,Q);Yt=qe*yt,$=v*qe,q=$-($-qe),gt=qe-q,$=v*yt,_t=$-($-yt),ht=yt-_t,me=gt*ht-(Yt-q*_t-gt*_t-q*ht),ge=Wt*j,$=v*Wt,q=$-($-Wt),gt=Wt-q,$=v*j,_t=$-($-j),ht=j-_t,Xe=gt*ht-(ge-q*_t-gt*_t-q*ht),Et=me-Xe,C=me-Et,ct[0]=me-(Et+C)+(C-Xe),Ct=Yt+Et,C=Ct-Yt,ee=Yt-(Ct-C)+(Et-C),Et=ee-ge,C=ee-Et,ct[1]=ee-(Et+C)+(C-ge),Ie=Ct+Et,C=Ie-Ct,ct[2]=Ct-(Ie-C)+(Et-C),ct[3]=Ie;let si=D(en,Q,4,ct,pt);Yt=k*yt,$=v*k,q=$-($-k),gt=k-q,$=v*yt,_t=$-($-yt),ht=yt-_t,me=gt*ht-(Yt-q*_t-gt*_t-q*ht),ge=tt*j,$=v*tt,q=$-($-tt),gt=tt-q,$=v*j,_t=$-($-j),ht=j-_t,Xe=gt*ht-(ge-q*_t-gt*_t-q*ht),Et=me-Xe,C=me-Et,ct[0]=me-(Et+C)+(C-Xe),Ct=Yt+Et,C=Ct-Yt,ee=Yt-(Ct-C)+(Et-C),Et=ee-ge,C=ee-Et,ct[1]=ee-(Et+C)+(C-ge),Ie=Ct+Et,C=Ie-Ct,ct[2]=Ct-(Ie-C)+(Et-C),ct[3]=Ie;let pn=D(si,pt,4,ct,it);return it[pn-1]}function Tt(B,_,y,T,P,N){let H=(_-N)*(y-P),k=(B-P)*(T-N),tt=H-k,j=Math.abs(H+k);return Math.abs(tt)>=X*j?tt:-ft(B,_,y,T,P,N,j)}let It=(B,_)=>B.x*_.y-B.y*_.x,jt=(B,_)=>B.x*_.x+B.y*_.y,$t=(B,_,y)=>{let T=Tt(B.x,B.y,_.x,_.y,y.x,y.y);return T>0?-1:T<0?1:0},Kt=B=>Math.sqrt(jt(B,B)),ut=(B,_,y)=>{let T={x:_.x-B.x,y:_.y-B.y},P={x:y.x-B.x,y:y.y-B.y};return It(P,T)/Kt(P)/Kt(T)},xt=(B,_,y)=>{let T={x:_.x-B.x,y:_.y-B.y},P={x:y.x-B.x,y:y.y-B.y};return jt(P,T)/Kt(P)/Kt(T)},Rt=(B,_,y)=>_.y===0?null:{x:B.x+_.x/_.y*(y-B.y),y},bt=(B,_,y)=>_.x===0?null:{x:y,y:B.y+_.y/_.x*(y-B.x)},nt=(B,_,y,T)=>{if(_.x===0)return bt(y,T,B.x);if(T.x===0)return bt(B,_,y.x);if(_.y===0)return Rt(y,T,B.y);if(T.y===0)return Rt(B,_,y.y);let P=It(_,T);if(P==0)return null;let N={x:y.x-B.x,y:y.y-B.y},H=It(N,_)/P,k=It(N,T)/P,tt=B.x+k*_.x,j=y.x+H*T.x,yt=B.y+k*_.y,C=y.y+H*T.y,$=(tt+j)/2,q=(yt+C)/2;return{x:$,y:q}};class lt{static compare(_,y){let T=lt.comparePoints(_.point,y.point);return T!==0?T:(_.point!==y.point&&_.link(y),_.isLeft!==y.isLeft?_.isLeft?1:-1:ot.compare(_.segment,y.segment))}static comparePoints(_,y){return _.x<y.x?-1:_.x>y.x?1:_.y<y.y?-1:_.y>y.y?1:0}constructor(_,y){_.events===void 0?_.events=[this]:_.events.push(this),this.point=_,this.isLeft=y}link(_){if(_.point===this.point)throw new Error("Tried to link already linked events");let y=_.point.events;for(let T=0,P=y.length;T<P;T++){let N=y[T];this.point.events.push(N),N.point=this.point}this.checkForConsuming()}checkForConsuming(){let _=this.point.events.length;for(let y=0;y<_;y++){let T=this.point.events[y];if(T.segment.consumedBy===void 0)for(let P=y+1;P<_;P++){let N=this.point.events[P];N.consumedBy===void 0&&T.otherSE.point.events===N.otherSE.point.events&&T.segment.consume(N.segment)}}}getAvailableLinkedEvents(){let _=[];for(let y=0,T=this.point.events.length;y<T;y++){let P=this.point.events[y];P!==this&&!P.segment.ringOut&&P.segment.isInResult()&&_.push(P)}return _}getLeftmostComparator(_){let y=new Map,T=P=>{let N=P.otherSE;y.set(P,{sine:ut(this.point,_.point,N.point),cosine:xt(this.point,_.point,N.point)})};return(P,N)=>{y.has(P)||T(P),y.has(N)||T(N);let{sine:H,cosine:k}=y.get(P),{sine:tt,cosine:j}=y.get(N);return H>=0&&tt>=0?k<j?1:k>j?-1:0:H<0&&tt<0?k<j?-1:k>j?1:0:tt<H?-1:tt>H?1:0}}}let Dt=0;class ot{static compare(_,y){let T=_.leftSE.point.x,P=y.leftSE.point.x,N=_.rightSE.point.x,H=y.rightSE.point.x;if(H<T)return 1;if(N<P)return-1;let k=_.leftSE.point.y,tt=y.leftSE.point.y,j=_.rightSE.point.y,yt=y.rightSE.point.y;if(T<P){if(tt<k&&tt<j)return 1;if(tt>k&&tt>j)return-1;let C=_.comparePoint(y.leftSE.point);if(C<0)return 1;if(C>0)return-1;let $=y.comparePoint(_.rightSE.point);return $!==0?$:-1}if(T>P){if(k<tt&&k<yt)return-1;if(k>tt&&k>yt)return 1;let C=y.comparePoint(_.leftSE.point);if(C!==0)return C;let $=_.comparePoint(y.rightSE.point);return $<0?1:$>0?-1:1}if(k<tt)return-1;if(k>tt)return 1;if(N<H){let C=y.comparePoint(_.rightSE.point);if(C!==0)return C}if(N>H){let C=_.comparePoint(y.rightSE.point);if(C<0)return 1;if(C>0)return-1}if(N!==H){let C=j-k,$=N-T,q=yt-tt,gt=H-P;if(C>$&&q<gt)return 1;if(C<$&&q>gt)return-1}return N>H?1:N<H||j<yt?-1:j>yt?1:_.id<y.id?-1:_.id>y.id?1:0}constructor(_,y,T,P){this.id=++Dt,this.leftSE=_,_.segment=this,_.otherSE=y,this.rightSE=y,y.segment=this,y.otherSE=_,this.rings=T,this.windings=P}static fromRing(_,y,T){let P,N,H,k=lt.comparePoints(_,y);if(k<0)P=_,N=y,H=1;else if(k>0)P=y,N=_,H=-1;else throw new Error(`Tried to create degenerate segment at [${_.x}, ${_.y}]`);let tt=new lt(P,!0),j=new lt(N,!1);return new ot(tt,j,[T],[H])}replaceRightSE(_){this.rightSE=_,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let _=this.leftSE.point.y,y=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:_<y?_:y},ur:{x:this.rightSE.point.x,y:_>y?_:y}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(_){return _.x===this.leftSE.point.x&&_.y===this.leftSE.point.y||_.x===this.rightSE.point.x&&_.y===this.rightSE.point.y}comparePoint(_){if(this.isAnEndpoint(_))return 0;let y=this.leftSE.point,T=this.rightSE.point,P=this.vector();if(y.x===T.x)return _.x===y.x?0:_.x<y.x?1:-1;let N=(_.y-y.y)/P.y,H=y.x+N*P.x;if(_.x===H)return 0;let k=(_.x-y.x)/P.x,tt=y.y+k*P.y;return _.y===tt?0:_.y<tt?-1:1}getIntersection(_){let y=this.bbox(),T=_.bbox(),P=m(y,T);if(P===null)return null;let N=this.leftSE.point,H=this.rightSE.point,k=_.leftSE.point,tt=_.rightSE.point,j=x(y,k)&&this.comparePoint(k)===0,yt=x(T,N)&&_.comparePoint(N)===0,C=x(y,tt)&&this.comparePoint(tt)===0,$=x(T,H)&&_.comparePoint(H)===0;if(yt&&j)return $&&!C?H:!$&&C?tt:null;if(yt)return C&&N.x===tt.x&&N.y===tt.y?null:N;if(j)return $&&H.x===k.x&&H.y===k.y?null:k;if($&&C)return null;if($)return H;if(C)return tt;let q=nt(N,this.vector(),k,_.vector());return q===null||!x(P,q)?null:w.round(q.x,q.y)}split(_){let y=[],T=_.events!==void 0,P=new lt(_,!0),N=new lt(_,!1),H=this.rightSE;this.replaceRightSE(N),y.push(N),y.push(P);let k=new ot(P,H,this.rings.slice(),this.windings.slice());return lt.comparePoints(k.leftSE.point,k.rightSE.point)>0&&k.swapEvents(),lt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),T&&(P.checkForConsuming(),N.checkForConsuming()),y}swapEvents(){let _=this.rightSE;this.rightSE=this.leftSE,this.leftSE=_,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let y=0,T=this.windings.length;y<T;y++)this.windings[y]*=-1}consume(_){let y=this,T=_;for(;y.consumedBy;)y=y.consumedBy;for(;T.consumedBy;)T=T.consumedBy;let P=ot.compare(y,T);if(P!==0){if(P>0){let N=y;y=T,T=N}if(y.prev===T){let N=y;y=T,T=N}for(let N=0,H=T.rings.length;N<H;N++){let k=T.rings[N],tt=T.windings[N],j=y.rings.indexOf(k);j===-1?(y.rings.push(k),y.windings.push(tt)):y.windings[j]+=tt}T.rings=null,T.windings=null,T.consumedBy=y,T.leftSE.consumedBy=y.leftSE,T.rightSE.consumedBy=y.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let _=this.prev.consumedBy||this.prev;this._beforeState=_.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let _=this.beforeState();this._afterState={rings:_.rings.slice(0),windings:_.windings.slice(0),multiPolys:[]};let y=this._afterState.rings,T=this._afterState.windings,P=this._afterState.multiPolys;for(let k=0,tt=this.rings.length;k<tt;k++){let j=this.rings[k],yt=this.windings[k],C=y.indexOf(j);C===-1?(y.push(j),T.push(yt)):T[C]+=yt}let N=[],H=[];for(let k=0,tt=y.length;k<tt;k++){if(T[k]===0)continue;let j=y[k],yt=j.poly;if(H.indexOf(yt)===-1)if(j.isExterior)N.push(yt);else{H.indexOf(yt)===-1&&H.push(yt);let C=N.indexOf(j.poly);C!==-1&&N.splice(C,1)}}for(let k=0,tt=N.length;k<tt;k++){let j=N[k].multiPoly;P.indexOf(j)===-1&&P.push(j)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let _=this.beforeState().multiPolys,y=this.afterState().multiPolys;switch(qt.type){case"union":{let T=_.length===0,P=y.length===0;this._isInResult=T!==P;break}case"intersection":{let T,P;_.length<y.length?(T=_.length,P=y.length):(T=y.length,P=_.length),this._isInResult=P===qt.numMultiPolys&&T<P;break}case"xor":{let T=Math.abs(_.length-y.length);this._isInResult=T%2===1;break}case"difference":{let T=P=>P.length===1&&P[0].isSubject;this._isInResult=T(_)!==T(y);break}default:throw new Error(`Unrecognized operation type found ${qt.type}`)}return this._isInResult}}class mt{constructor(_,y,T){if(!Array.isArray(_)||_.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=y,this.isExterior=T,this.segments=[],typeof _[0][0]!="number"||typeof _[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let P=w.round(_[0][0],_[0][1]);this.bbox={ll:{x:P.x,y:P.y},ur:{x:P.x,y:P.y}};let N=P;for(let H=1,k=_.length;H<k;H++){if(typeof _[H][0]!="number"||typeof _[H][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let tt=w.round(_[H][0],_[H][1]);tt.x===N.x&&tt.y===N.y||(this.segments.push(ot.fromRing(N,tt,this)),tt.x<this.bbox.ll.x&&(this.bbox.ll.x=tt.x),tt.y<this.bbox.ll.y&&(this.bbox.ll.y=tt.y),tt.x>this.bbox.ur.x&&(this.bbox.ur.x=tt.x),tt.y>this.bbox.ur.y&&(this.bbox.ur.y=tt.y),N=tt)}(P.x!==N.x||P.y!==N.y)&&this.segments.push(ot.fromRing(N,P,this))}getSweepEvents(){let _=[];for(let y=0,T=this.segments.length;y<T;y++){let P=this.segments[y];_.push(P.leftSE),_.push(P.rightSE)}return _}}class vt{constructor(_,y){if(!Array.isArray(_))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new mt(_[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let T=1,P=_.length;T<P;T++){let N=new mt(_[T],this,!1);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.interiorRings.push(N)}this.multiPoly=y}getSweepEvents(){let _=this.exteriorRing.getSweepEvents();for(let y=0,T=this.interiorRings.length;y<T;y++){let P=this.interiorRings[y].getSweepEvents();for(let N=0,H=P.length;N<H;N++)_.push(P[N])}return _}}class Mt{constructor(_,y){if(!Array.isArray(_))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof _[0][0][0]=="number"&&(_=[_])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let T=0,P=_.length;T<P;T++){let N=new vt(_[T],this);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.polys.push(N)}this.isSubject=y}getSweepEvents(){let _=[];for(let y=0,T=this.polys.length;y<T;y++){let P=this.polys[y].getSweepEvents();for(let N=0,H=P.length;N<H;N++)_.push(P[N])}return _}}class wt{static factory(_){let y=[];for(let T=0,P=_.length;T<P;T++){let N=_[T];if(!N.isInResult()||N.ringOut)continue;let H=null,k=N.leftSE,tt=N.rightSE,j=[k],yt=k.point,C=[];for(;H=k,k=tt,j.push(k),k.point!==yt;)for(;;){let $=k.getAvailableLinkedEvents();if($.length===0){let _t=j[0].point,ht=j[j.length-1].point;throw new Error(`Unable to complete output ring starting at [${_t.x}, ${_t.y}]. Last matching segment found ends at [${ht.x}, ${ht.y}].`)}if($.length===1){tt=$[0].otherSE;break}let q=null;for(let _t=0,ht=C.length;_t<ht;_t++)if(C[_t].point===k.point){q=_t;break}if(q!==null){let _t=C.splice(q)[0],ht=j.splice(_t.index);ht.unshift(ht[0].otherSE),y.push(new wt(ht.reverse()));continue}C.push({index:j.length,point:k.point});let gt=k.getLeftmostComparator(H);tt=$.sort(gt)[0].otherSE;break}y.push(new wt(j))}return y}constructor(_){this.events=_;for(let y=0,T=_.length;y<T;y++)_[y].segment.ringOut=this;this.poly=null}getGeom(){let _=this.events[0].point,y=[_];for(let j=1,yt=this.events.length-1;j<yt;j++){let C=this.events[j].point,$=this.events[j+1].point;$t(C,_,$)!==0&&(y.push(C),_=C)}if(y.length===1)return null;let T=y[0],P=y[1];$t(T,_,P)===0&&y.shift(),y.push(y[0]);let N=this.isExteriorRing()?1:-1,H=this.isExteriorRing()?0:y.length-1,k=this.isExteriorRing()?y.length:-1,tt=[];for(let j=H;j!=k;j+=N)tt.push([y[j].x,y[j].y]);return tt}isExteriorRing(){if(this._isExteriorRing===void 0){let _=this.enclosingRing();this._isExteriorRing=_?!_.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let _=this.events[0];for(let P=1,N=this.events.length;P<N;P++){let H=this.events[P];lt.compare(_,H)>0&&(_=H)}let y=_.segment.prevInResult(),T=y?y.prevInResult():null;for(;;){if(!y)return null;if(!T)return y.ringOut;if(T.ringOut!==y.ringOut)return T.ringOut.enclosingRing()!==y.ringOut?y.ringOut:y.ringOut.enclosingRing();y=T.prevInResult(),T=y?y.prevInResult():null}}}class zt{constructor(_){this.exteriorRing=_,_.poly=this,this.interiorRings=[]}addInterior(_){this.interiorRings.push(_),_.poly=this}getGeom(){let _=[this.exteriorRing.getGeom()];if(_[0]===null)return null;for(let y=0,T=this.interiorRings.length;y<T;y++){let P=this.interiorRings[y].getGeom();P!==null&&_.push(P)}return _}}class Ut{constructor(_){this.rings=_,this.polys=this._composePolys(_)}getGeom(){let _=[];for(let y=0,T=this.polys.length;y<T;y++){let P=this.polys[y].getGeom();P!==null&&_.push(P)}return _}_composePolys(_){let y=[];for(let T=0,P=_.length;T<P;T++){let N=_[T];if(!N.poly)if(N.isExteriorRing())y.push(new zt(N));else{let H=N.enclosingRing();H.poly||y.push(new zt(H)),H.poly.addInterior(N)}}return y}}class Vt{constructor(_){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ot.compare;this.queue=_,this.tree=new c(y),this.segments=[]}process(_){let y=_.segment,T=[];if(_.consumedBy)return _.isLeft?this.queue.remove(_.otherSE):this.tree.remove(y),T;let P=_.isLeft?this.tree.add(y):this.tree.find(y);if(!P)throw new Error(`Unable to find segment #${y.id} [${y.leftSE.point.x}, ${y.leftSE.point.y}] -> [${y.rightSE.point.x}, ${y.rightSE.point.y}] in SweepLine tree.`);let N=P,H=P,k,tt;for(;k===void 0;)N=this.tree.prev(N),N===null?k=null:N.key.consumedBy===void 0&&(k=N.key);for(;tt===void 0;)H=this.tree.next(H),H===null?tt=null:H.key.consumedBy===void 0&&(tt=H.key);if(_.isLeft){let j=null;if(k){let C=k.getIntersection(y);if(C!==null&&(y.isAnEndpoint(C)||(j=C),!k.isAnEndpoint(C))){let $=this._splitSafely(k,C);for(let q=0,gt=$.length;q<gt;q++)T.push($[q])}}let yt=null;if(tt){let C=tt.getIntersection(y);if(C!==null&&(y.isAnEndpoint(C)||(yt=C),!tt.isAnEndpoint(C))){let $=this._splitSafely(tt,C);for(let q=0,gt=$.length;q<gt;q++)T.push($[q])}}if(j!==null||yt!==null){let C=null;j===null?C=yt:yt===null?C=j:C=lt.comparePoints(j,yt)<=0?j:yt,this.queue.remove(y.rightSE),T.push(y.rightSE);let $=y.split(C);for(let q=0,gt=$.length;q<gt;q++)T.push($[q])}T.length>0?(this.tree.remove(y),T.push(_)):(this.segments.push(y),y.prev=k)}else{if(k&&tt){let j=k.getIntersection(tt);if(j!==null){if(!k.isAnEndpoint(j)){let yt=this._splitSafely(k,j);for(let C=0,$=yt.length;C<$;C++)T.push(yt[C])}if(!tt.isAnEndpoint(j)){let yt=this._splitSafely(tt,j);for(let C=0,$=yt.length;C<$;C++)T.push(yt[C])}}}this.tree.remove(y)}return T}_splitSafely(_,y){this.tree.remove(_);let T=_.rightSE;this.queue.remove(T);let P=_.split(y);return P.push(T),_.consumedBy===void 0&&this.tree.add(_),P}}let kt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,G=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class re{run(_,y,T){qt.type=_,w.reset();let P=[new Mt(y,!0)];for(let C=0,$=T.length;C<$;C++)P.push(new Mt(T[C],!1));if(qt.numMultiPolys=P.length,qt.type==="difference"){let C=P[0],$=1;for(;$<P.length;)m(P[$].bbox,C.bbox)!==null?$++:P.splice($,1)}if(qt.type==="intersection")for(let C=0,$=P.length;C<$;C++){let q=P[C];for(let gt=C+1,_t=P.length;gt<_t;gt++)if(m(q.bbox,P[gt].bbox)===null)return[]}let N=new c(lt.compare);for(let C=0,$=P.length;C<$;C++){let q=P[C].getSweepEvents();for(let gt=0,_t=q.length;gt<_t;gt++)if(N.insert(q[gt]),N.size>kt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let H=new Vt(N),k=N.size,tt=N.pop();for(;tt;){let C=tt.key;if(N.size===k){let q=C.segment;throw new Error(`Unable to pop() ${C.isLeft?"left":"right"} SweepEvent [${C.point.x}, ${C.point.y}] from segment #${q.id} [${q.leftSE.point.x}, ${q.leftSE.point.y}] -> [${q.rightSE.point.x}, ${q.rightSE.point.y}] from queue.`)}if(N.size>kt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(H.segments.length>G)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let $=H.process(C);for(let q=0,gt=$.length;q<gt;q++){let _t=$[q];_t.consumedBy===void 0&&N.insert(_t)}k=N.size,tt=N.pop()}w.reset();let j=wt.factory(H.segments);return new Ut(j).getGeom()}}let qt=new re;var dt={union:function(B){for(var _=arguments.length,y=new Array(_>1?_-1:0),T=1;T<_;T++)y[T-1]=arguments[T];return qt.run("union",B,y)},intersection:function(B){for(var _=arguments.length,y=new Array(_>1?_-1:0),T=1;T<_;T++)y[T-1]=arguments[T];return qt.run("intersection",B,y)},xor:function(B){for(var _=arguments.length,y=new Array(_>1?_-1:0),T=1;T<_;T++)y[T-1]=arguments[T];return qt.run("xor",B,y)},difference:function(B){for(var _=arguments.length,y=new Array(_>1?_-1:0),T=1;T<_;T++)y[T-1]=arguments[T];return qt.run("difference",B,y)}};return dt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Qu=0,fl=1,th=2;var es=1,eh=2,Gs=3,Ui=0,ln=1,An=2,jn=0,Hs=1,kr=2,dl=3,pl=4,nh=5;var ns=100,ih=101,sh=102,rh=103,oh=104,ah=200,ch=201,lh=202,uh=203,ml=204,gl=205,hh=206,fh=207,dh=208,ph=209,mh=210,gh=211,xh=212,_h=213,yh=214,Fo=0,Oo=1,Bo=2,As=3,zo=4,ko=5,Vo=6,Go=7,va=0,vh=1,bh=2,Fn=0,xl=1,_l=2,yl=3,Vr=4,vl=5,bl=6,Ml=7;var Sl=300,Fi=301,is=302,ba=303,Ma=304,Gr=306,Zi=1e3,Yn=1001,Ho=1002,Ge=1003,Mh=1004;var Hr=1005;var Ze=1006,Sa=1007;var Oi=1008;var dn=1009,El=1010,wl=1011,Ws=1012,Ea=1013,On=1014,Bn=1015,zn=1016,wa=1017,Ta=1018,Xs=1020,Tl=35902,Al=35899,Rl=1021,Cl=1022,Rn=1023,Jn=1026,Bi=1027,Il=1028,Aa=1029,zi=1030,Ra=1031;var Ca=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,Ia=35840,Pa=35841,La=35842,Na=35843,Da=36196,Ua=37492,Fa=37496,Oa=37488,Ba=37489,Zr=37490,za=37491,ka=37808,Va=37809,Ga=37810,Ha=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,Ja=37817,$a=37818,Ka=37819,ja=37820,Qa=37821,tc=36492,ec=36494,nc=36495,ic=36283,sc=36284,Jr=36285,rc=36286;var fr=2300,Wo=2301,Do=2302,jc=2303,Qc=2400,tl=2401,el=2402;var Sh=3200;var $r=0,Eh=1,di="",Ue="srgb",dr="srgb-linear",pr="linear",_e="srgb";var Uo=7680;var wh=519,Th=512,Ah=513,Rh=514,oc=515,Ch=516,Ih=517,ac=518,Ph=519,Lh=35044,cc=35048;var Pl="300 es",Dn=2e3,Rs=2001;function Cd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Id(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){let i=mr("canvas");return i.style.display="block",i}var xu={},Cs=null;function Ll(...i){let t="THREE."+i.shift();Cs?Cs("log",t,...i):console.log(t,...i)}function Dh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=Dh(i);let t="THREE."+i.shift();if(Cs)Cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Dh(i);let t="THREE."+i.shift();if(Cs)Cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Yi(...i){let t=i.join(" ");t in xu||(xu[t]=!0,Jt(...i))}function Uh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fh={[Fo]:Oo,[Bo]:Vo,[zo]:Go,[As]:ko,[Oo]:Fo,[Vo]:Bo,[Go]:zo,[ko]:As},$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=1234567,cr=Math.PI/180,Is=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Nl(i,t){return(i%t+t)%t}function Pd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ld(i,t,e){return i!==t?(e-i)/(t-i):0}function lr(i,t,e){return(1-e)*i+e*t}function Nd(i,t,e,n){return lr(i,t,1-Math.exp(-e*n))}function Dd(i,t=1){return t-Math.abs(Nl(i,t*2)-t)}function Ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bd(i,t){return i+Math.random()*(t-i)}function zd(i){return i*(.5-Math.random())}function kd(i){i!==void 0&&(_u=i);let t=_u+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(i){return i*cr}function Gd(i){return i*Is}function Hd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Le={DEG2RAD:cr,RAD2DEG:Is,generateUUID:ss,clamp:le,euclideanModulo:Nl,mapLinear:Pd,inverseLerp:Ld,lerp:lr,damp:Nd,pingpong:Dd,smoothstep:Ud,smootherstep:Fd,randInt:Od,randFloat:Bd,randFloatSpread:zd,seededRandom:kd,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Hd,ceilPowerOfTwo:Wd,floorPowerOfTwo:Xd,setQuaternionFromProperEuler:qd,normalize:sn,denormalize:ws},At=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),R=Math.sin(M);p=Math.sin(p*M)/R,a=Math.sin(a*M)/R,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a;let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ac.copy(this).projectOnVector(t),this.sub(Ac)}reflect(t){return this.sub(Ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new W,yu=new Tn,ie=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],R=s[4],S=s[7],b=s[2],w=s[5],L=s[8];return r[0]=o*x+a*M+c*b,r[3]=o*m+a*R+c*w,r[6]=o*p+a*S+c*L,r[1]=l*x+u*M+f*b,r[4]=l*m+u*R+f*w,r[7]=l*p+u*S+f*L,r[2]=h*x+d*M+g*b,r[5]=h*m+d*R+g*w,r[8]=h*p+d*S+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rc.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rc.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new ie,vu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){let i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:vu,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:vu,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var fe=Yd();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fs,Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fs===void 0&&(fs=mr("canvas")),fs.width=t.width,fs.height=t.height;let s=fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zd=0,Ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cc(s[o].image)):r.push(Cc(s[o]))}else r=Cc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var Jd=0,Ic=new W,on=class i extends $n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=Ze,o=Oi,a=Rn,c=dn,l=i.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ss(),this.name="",this.source=new Ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Sl;on.DEFAULT_ANISOTROPY=1;var Re=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,S=(d+1)/2,b=(p+1)/2,w=(u+h)/4,L=(f+x)/4,v=(g+m)/4;return R>S&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=L/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new on(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ve=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Kd)}lookAt(t,e,n){let s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Mi.crossVectors(n,gn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Mi.crossVectors(n,gn)),Mi.normalize(),co.crossVectors(gn,Mi),s[0]=Mi.x,s[4]=co.x,s[8]=gn.x,s[1]=Mi.y,s[5]=co.y,s[9]=gn.y,s[2]=Mi.z,s[6]=co.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],R=n[7],S=n[11],b=n[15],w=s[0],L=s[4],v=s[8],I=s[12],D=s[1],O=s[5],z=s[9],X=s[13],F=s[2],V=s[6],J=s[10],Q=s[14],pt=s[3],it=s[7],ct=s[11],ft=s[15];return r[0]=o*w+a*D+c*F+l*pt,r[4]=o*L+a*O+c*V+l*it,r[8]=o*v+a*z+c*J+l*ct,r[12]=o*I+a*X+c*Q+l*ft,r[1]=u*w+f*D+h*F+d*pt,r[5]=u*L+f*O+h*V+d*it,r[9]=u*v+f*z+h*J+d*ct,r[13]=u*I+f*X+h*Q+d*ft,r[2]=g*w+x*D+m*F+p*pt,r[6]=g*L+x*O+m*V+p*it,r[10]=g*v+x*z+m*J+p*ct,r[14]=g*I+x*X+m*Q+p*ft,r[3]=M*w+R*D+S*F+b*pt,r[7]=M*L+R*O+S*V+b*it,r[11]=M*v+R*z+S*J+b*ct,r[15]=M*I+R*X+S*Q+b*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=c*d-l*h,R=a*d-l*f,S=a*h-c*f,b=o*d-l*u,w=o*h-c*u,L=o*f-a*u;return e*(x*M-m*R+p*S)-n*(g*M-m*b+p*w)+s*(g*R-x*b+p*L)-r*(g*S-x*w+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*a-n*o,R=e*c-s*o,S=e*l-r*o,b=n*c-s*a,w=n*l-r*a,L=s*l-r*c,v=u*x-f*g,I=u*m-h*g,D=u*p-d*g,O=f*m-h*x,z=f*p-d*x,X=h*p-d*m,F=M*X-R*z+S*O+b*D-w*I+L*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/F;return t[0]=(a*X-c*z+l*O)*V,t[1]=(s*z-n*X-r*O)*V,t[2]=(x*L-m*w+p*b)*V,t[3]=(h*w-f*L-d*b)*V,t[4]=(c*D-o*X-l*I)*V,t[5]=(e*X-s*D+r*I)*V,t[6]=(m*S-g*L-p*R)*V,t[7]=(u*L-h*S+d*R)*V,t[8]=(o*z-a*D+l*v)*V,t[9]=(n*D-e*z-r*v)*V,t[10]=(g*w-x*S+p*M)*V,t[11]=(f*S-u*w-d*M)*V,t[12]=(a*I-o*O-c*v)*V,t[13]=(e*O-n*I+s*v)*V,t[14]=(x*R-g*b-m*M)*V,t[15]=(u*b-f*R+h*M)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,M=c*l,R=c*u,S=c*f,b=n.x,w=n.y,L=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+S)*b,s[2]=(g-R)*b,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(h+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+R)*L,s[9]=(m-M)*L,s[10]=(1-(h+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ds.set(s[0],s[1],s[2]).length(),a=ds.set(s[4],s[5],s[6]).length(),c=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pn.copy(this);let l=1/o,u=1/a,f=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,e.setFromRotationMatrix(Pn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Dn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Dn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Rs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Dn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Rs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ds=new W,Pn=new ve,$d=new W(0,0,0),Kd=new W(1,1,1),Mi=new W,co=new W,gn=new W,Mu=new ve,Su=new Tn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jd=0,Eu=new W,ps=new Tn,ri=new ve,lo=new W,nr=new W,Qd=new W,tp=new Tn,wu=new W(1,0,0),Tu=new W(0,1,0),Au=new W(0,0,1),Ru={type:"added"},ep={type:"removed"},ms={type:"childadded",child:null},Pc={type:"childremoved",child:null},He=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new Kn,n=new Tn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new ie}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Tu,t)}rotateZ(t){return this.rotateOnAxis(Au,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Tu,t)}translateZ(t){return this.translateOnAxis(Au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(nr,lo,this.up):ri.lookAt(lo,nr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ri),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ru),ms.child=t,this.dispatchEvent(ms),ms.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ep),Pc.child=t,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ru),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new W(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},np={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(np)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Nl(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Lc(o,r,t+1/3),this.g=Lc(o,r,t),this.b=Lc(o,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return fe.workingToColorSpace(Ke.copy(this),t),Math.round(le(Ke.r*255,0,255))*65536+Math.round(le(Ke.g*255,0,255))*256+Math.round(le(Ke.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ue){fe.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(uo);let n=lr(Si.h,uo.h,e),s=lr(Si.s,uo.s,e),r=lr(Si.l,uo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new te;te.NAMES=Oh;var xr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new W,oi=new W,Nc=new W,ai=new W,gs=new W,xs=new W,Cu=new W,Dc=new W,Uc=new W,Fc=new W,Oc=new Re,Bc=new Re,zc=new Re,Ai=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),oi.subVectors(n,e),Nc.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(oi),c=Ln.dot(Nc),l=oi.dot(oi),u=oi.dot(Nc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Oc.setScalar(0),Bc.setScalar(0),zc.setScalar(0),Oc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,n),zc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Oc,r.x),o.addScaledVector(Bc,r.y),o.addScaledVector(zc,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),oi.subVectors(t,e),Ln.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),xs.subVectors(r,n),Dc.subVectors(t,n);let c=gs.dot(Dc),l=xs.dot(Dc);if(c<=0&&l<=0)return e.copy(n);Uc.subVectors(t,s);let u=gs.dot(Uc),f=xs.dot(Uc);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(gs,o);Fc.subVectors(t,r);let d=gs.dot(Fc),g=xs.dot(Fc);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(xs,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Cu.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Cu,a);let p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),fo.subVectors(this.max,ir),_s.subVectors(t.a,ir),ys.subVectors(t.b,ir),vs.subVectors(t.c,ir),Ei.subVectors(ys,_s),wi.subVectors(vs,ys),Hi.subVectors(_s,vs);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Hi.z,Hi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Hi.z,0,-Hi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Hi.y,Hi.x,0];return!kc(e,_s,ys,vs,fo)||(e=[1,0,0,0,1,0,0,0,1],!kc(e,_s,ys,vs,fo))?!1:(po.crossVectors(Ei,wi),e=[po.x,po.y,po.z],kc(e,_s,ys,vs,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new W,new W,new W,new W,new W,new W,new W,new W],Nn=new W,ho=new fn,_s=new W,ys=new W,vs=new W,Ei=new W,wi=new W,Hi=new W,ir=new W,fo=new W,po=new W,Wi=new W;function kc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Wi.fromArray(i,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=t.dot(Wi),l=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var De=new W,mo=new At,ip=0,Ve=class extends $n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lh,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var _r=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},sp=new fn,sr=new W,Vc=new W,Ri=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Vc)),this.expandByPoint(sr.copy(t.center).sub(Vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rp=0,wn=new ve,Gc=new He,bs=new W,xn=new fn,rr=new fn,ke=new W,Ee=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cd(t)?yr:_r)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(xn.min,rr.min),xn.expandByPoint(ke),ke.addVectors(xn.max,rr.max),xn.expandByPoint(ke)):(xn.expandByPoint(rr.min),xn.expandByPoint(rr.max))}xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ke.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(t,l),ke.add(bs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ve(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new W,c[v]=new W;let l=new W,u=new W,f=new W,h=new At,d=new At,g=new At,x=new W,m=new W;function p(v,I,D){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,D),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,D),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let O=1/(d.x*g.y-g.x*d.y);isFinite(O)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(O),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(O),a[v].add(x),a[I].add(x),a[D].add(x),c[v].add(m),c[I].add(m),c[D].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,I=M.length;v<I;++v){let D=M[v],O=D.start,z=D.count;for(let X=O,F=O+z;X<F;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let R=new W,S=new W,b=new W,w=new W;function L(v){b.fromBufferAttribute(s,v),w.copy(b);let I=a[v];R.copy(I),R.sub(b.multiplyScalar(b.dot(I))).normalize(),S.crossVectors(w,I);let O=S.dot(c[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,O)}for(let v=0,I=M.length;v<I;++v){let D=M[v],O=D.start,z=D.count;for(let X=O,F=O+z;X<F;X+=3)L(t.getX(X+0)),L(t.getX(X+1)),L(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new W,r=new W,o=new W,a=new W,c=new W,l=new W,u=new W,f=new W;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Ve(h,u,f)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hc=new W,op=new W,ap=new ie,_n=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hc.subVectors(n,e).cross(op.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ap.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cp=0,Un=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Hs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var li=new W,Wc=new W,go=new W,xo=new W,Ji=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wc.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(Wc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=xo.dot(this.direction),c=-xo.dot(go),l=xo.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wc).addScaledVector(go,h),d}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,M=n.y-o.y,R=n.z-o.z,S=Math.abs(c),b=Math.abs(l),w=Math.abs(u),L,v,I,D,O,z,X,F,V,J,Q,pt;if(S>=b&&S>=w?(I=c,z=f,V=g,pt=p,c>=0?(L=l,v=u,D=h,O=d,X=x,F=m,J=M,Q=R):(L=u,v=l,D=d,O=h,X=m,F=x,J=R,Q=M)):b>=w?(I=l,z=h,V=x,pt=M,l>=0?(L=u,v=c,D=d,O=f,X=m,F=g,J=R,Q=p):(L=c,v=u,D=f,O=d,X=g,F=m,J=p,Q=R)):(I=u,z=d,V=m,pt=R,u>=0?(L=c,v=l,D=f,O=h,X=g,F=x,J=p,Q=M):(L=l,v=c,D=h,O=f,X=x,F=g,J=M,Q=p)),I===0)return null;let it=L/I,ct=v/I,ft=1/I,Tt=D-it*z,It=O-ct*z,jt=X-it*V,$t=F-ct*V,Kt=J-it*pt,ut=Q-ct*pt,xt=Kt*$t-ut*jt,Rt=Tt*ut-It*Kt,bt=jt*It-$t*Tt;if(s){if(xt<0||Rt<0||bt<0)return null}else if((xt<0||Rt<0||bt<0)&&(xt>0||Rt>0||bt>0))return null;let nt=xt+Rt+bt;if(nt===0)return null;let lt=ft*(xt*z+Rt*V+bt*pt);return(nt>0?lt<0:lt>0)?null:this.at(lt/nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Iu=new ve,Xi=new Ji,_o=new Ri,Pu=new W,yo=new W,vo=new W,bo=new W,Xc=new W,Mo=new W,Lu=new W,So=new W,pe=class extends He{constructor(t=new Ee,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Xc.fromBufferAttribute(f,t),o?Mo.addScaledVector(Xc,u):Mo.addScaledVector(Xc.sub(e),u))}e.add(Mo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(_o.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(_o,Pu)===null||Xi.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Iu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(Iu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),R=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=R;S<b;S+=3){let w=a.getX(S),L=a.getX(S+1),v=a.getX(S+2);s=Eo(this,p,t,n,l,u,f,w,L,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),R=a.getX(m+1),S=a.getX(m+2);s=Eo(this,o,t,n,l,u,f,M,R,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),R=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=R;S<b;S+=3){let w=S,L=S+1,v=S+2;s=Eo(this,p,t,n,l,u,f,w,L,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=m,R=m+1,S=m+2;s=Eo(this,o,t,n,l,u,f,M,R,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function lp(i,t,e,n,s,r,o,a){let c;if(t.side===ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ui,a),c===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(So);return l<e.near||l>e.far?null:{distance:l,point:So.clone(),object:i}}function Eo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,yo),i.getVertexPosition(c,vo),i.getVertexPosition(l,bo);let u=lp(i,t,e,n,yo,vo,bo,Lu);if(u){let f=new W;Ai.getBarycoord(Lu,yo,vo,bo,f),s&&(u.uv=Ai.getInterpolatedAttribute(s,a,c,l,f,new At)),r&&(u.uv1=Ai.getInterpolatedAttribute(r,a,c,l,f,new At)),o&&(u.normal=Ai.getInterpolatedAttribute(o,a,c,l,f,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new W,materialIndex:0};Ai.getNormal(yo,vo,bo,h.normal),u.face=h,u.barycoord=f}return u}var Zo=class extends on{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ge,u=Ge,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qi=new Ri,up=new At(.5,.5),wo=new W,Ds=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,o=new _n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],R=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,p-g,b-M).normalize(),s[1].setComponents(l+o,d+u,p+g,b+M).normalize(),s[2].setComponents(l+a,d+f,p+x,b+R).normalize(),s[3].setComponents(l-a,d-f,p-x,b-R).normalize(),n)s[4].setComponents(c,h,m,S).normalize(),s[5].setComponents(l-c,d-h,p-m,b-S).normalize();else if(s[4].setComponents(l-c,d-h,p-m,b-S).normalize(),e===Dn)s[5].setComponents(l+c,d+h,p+m,b+S).normalize();else if(e===Rs)s[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=up.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Us=class extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jo=new W,$o=new W,Nu=new ve,or=new Ji,To=new Ri,qc=new W,Du=new W,Ko=class extends He{constructor(t=new Ee,e=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Jo.fromBufferAttribute(e,s-1),$o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Jo.distanceTo($o);t.setAttribute("lineDistance",new se(n,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Nu.copy(s).invert(),or.copy(t.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=u.getX(x),M=u.getX(x+1),R=Ao(this,t,or,c,p,M,x);R&&e.push(R)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Ao(this,t,or,c,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=Ao(this,t,or,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Ao(this,t,or,c,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ao(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Jo.fromBufferAttribute(a,s),$o.fromBufferAttribute(a,r),e.distanceSqToSegment(Jo,$o,qc,Du)>n)return;qc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(qc);if(!(l<t.near||l>t.far))return{distance:l,point:Du.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Uu=new W,Fu=new W,vr=class extends Ko{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Uu.fromBufferAttribute(e,s),Fu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uu.distanceTo(Fu);t.setAttribute("lineDistance",new se(n,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fs=class extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ou=new ve,nl=new Ji,Ro=new Ri,Co=new W,br=class extends He{constructor(t=new Ee,e=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;Ou.copy(s).invert(),nl.copy(t.ray).applyMatrix4(Ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let m=l.getX(g);Co.fromBufferAttribute(f,m),Bu(Co,m,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)Co.fromBufferAttribute(f,g),Bu(Co,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bu(i,t,e,n,s,r,o){let a=nl.distanceSqToPoint(i);if(a<e){let c=new W;nl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mr=class extends on{constructor(t=[],e=Fi,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Os=class extends on{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends on{constructor(t,e,n=On,s,r,o,a=Ge,c=Ge,l,u=Jn,f=1){if(u!==Jn&&u!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},jo=class extends Ci{constructor(t,e=On,n=Fi,s,r,o=Ge,a=Ge,c,l=Jn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sr=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function g(x,m,p,M,R,S,b,w,L,v,I){let D=S/L,O=b/v,z=S/2,X=b/2,F=w/2,V=L+1,J=v+1,Q=0,pt=0,it=new W;for(let ct=0;ct<J;ct++){let ft=ct*O-X;for(let Tt=0;Tt<V;Tt++){let It=Tt*D-z;it[x]=It*M,it[m]=ft*R,it[p]=F,l.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[p]=w>0?1:-1,u.push(it.x,it.y,it.z),f.push(Tt/L),f.push(1-ct/v),Q+=1}}for(let ct=0;ct<v;ct++)for(let ft=0;ft<L;ft++){let Tt=h+ft+V*ct,It=h+ft+V*(ct+1),jt=h+(ft+1)+V*(ct+1),$t=h+(ft+1)+V*ct;c.push(Tt,It,$t),c.push(It,jt,$t),pt+=6}a.addGroup(d,pt,I),d+=pt,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Er=class i extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new W,u=new At;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$i=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function M(){let S=new W,b=new W,w=0,L=(e-t)/n;for(let v=0;v<=r;v++){let I=[],D=v/r,O=D*(e-t)+t;for(let z=0;z<=s;z++){let X=z/s,F=X*c+a,V=Math.sin(F),J=Math.cos(F);b.x=O*V,b.y=-D*n+m,b.z=O*J,f.push(b.x,b.y,b.z),S.set(V,L,J).normalize(),h.push(S.x,S.y,S.z),d.push(X,1-D),I.push(g++)}x.push(I)}for(let v=0;v<s;v++)for(let I=0;I<r;I++){let D=x[I][v],O=x[I+1][v],z=x[I+1][v+1],X=x[I][v+1];(t>0||I!==0)&&(u.push(D,O,X),w+=3),(e>0||I!==r-1)&&(u.push(O,z,X),w+=3)}l.addGroup(p,w,0),p+=w}function R(S){let b=g,w=new At,L=new W,v=0,I=S===!0?t:e,D=S===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*D,0),h.push(0,D,0),d.push(.5,.5),g++;let O=g;for(let z=0;z<=s;z++){let F=z/s*c+a,V=Math.cos(F),J=Math.sin(F);L.x=I*J,L.y=m*D,L.z=I*V,f.push(L.x,L.y,L.z),h.push(0,D,0),w.x=V*.5+.5,w.y=J*.5*D+.5,d.push(w.x,w.y),g++}for(let z=0;z<s;z++){let X=b+z,F=O+z;S===!0?u.push(F,F+1,X):u.push(F+1,F,X),v+=3}l.addGroup(p,v,S===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new At:new W);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new W,s=[],r=[],o=[],a=new W,c=new ve;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new W)}r[0]=new W,o[0]=new W;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(le(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bs=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qo=class extends Bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var zu=new W,ku=new W,Yc=new Dl,Zc=new Dl,Jc=new Dl,ta=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new W){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ku.subVectors(s[0],s[1]).add(s[0]),l=ku);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(zu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Yc.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),Zc.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Jc.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Yc.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Zc.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Jc.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Yc.calc(c),Zc.calc(c),Jc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function hp(i,t){let e=1-i;return e*e*t}function fp(i,t){return 2*(1-i)*i*t}function dp(i,t){return i*i*t}function ur(i,t,e,n){return hp(i,t)+fp(i,e)+dp(i,n)}function pp(i,t){let e=1-i;return e*e*e*t}function mp(i,t){let e=1-i;return 3*e*e*i*t}function gp(i,t){return 3*(1-i)*i*i*t}function xp(i,t){return i*i*i*t}function hr(i,t,e,n,s){return pp(i,t)+mp(i,e)+gp(i,n)+xp(i,s)}var wr=class extends yn{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ea=class extends yn{constructor(t=new W,e=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,s.x,r.x,o.x,a.x),hr(t,s.y,r.y,o.y,a.y),hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tr=class extends yn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends yn{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends yn{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends yn{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y),ur(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Vu(a,c.x,l.x,u.x,f.x),Vu(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},il=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:ta,CubicBezierCurve:wr,CubicBezierCurve3:ea,EllipseCurve:Bs,LineCurve:Tr,LineCurve3:na,QuadraticBezierCurve:Ar,QuadraticBezierCurve3:ia,SplineCurve:Rr}),sa=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new il[s.type]().fromJSON(s))}return this}},Ki=class extends sa{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tr(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ar(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new wr(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Bs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vn=class extends Ki{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ki().fromJSON(s))}return this}};function _p(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Bh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Sp(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Cr(r,o,e,a,c,l,0),o}function Bh(i,t,e,n,s){let r;if(s===Dp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Gu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Gu(o/n|0,i[o],i[o+1],r);return r&&zs(r,r.next)&&(Pr(r),r=r.next),r}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Rp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?vp(i,n,s,r):yp(i)){t.push(c.i,i.i,l.i),Pr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=bp(ji(i),t),Cr(i,t,e,n,s,r,2)):o===2&&Mp(i,t,e,n,s,r):Cr(ji(i),t,e,n,s,r,1);break}}}function yp(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&ar(s,a,r,c,o,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(u,f,h),x=Math.max(a,c,l),m=Math.max(u,f,h),p=sl(d,g,t,e,n),M=sl(x,m,t,e,n),R=i.prevZ,S=i.nextZ;for(;R&&R.z>=p&&S&&S.z<=M;){if(R.x>=d&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&ar(a,u,c,f,l,h,R.x,R.y)&&Ce(R.prev,R,R.next)>=0||(R=R.prevZ,S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ar(a,u,c,f,l,h,S.x,S.y)&&Ce(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;R&&R.z>=p;){if(R.x>=d&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&ar(a,u,c,f,l,h,R.x,R.y)&&Ce(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;S&&S.z<=M;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&ar(a,u,c,f,l,h,S.x,S.y)&&Ce(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function bp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!zs(n,s)&&kh(n,e,e.next,s)&&Ir(n,s)&&Ir(s,n)&&(t.push(n.i,e.i,s.i),Pr(e),Pr(e.next),e=i=s),e=e.next}while(e!==i);return ji(e)}function Mp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pp(o,a)){let c=Vh(o,a);o=ji(o,o.next),c=ji(c,c.next),Cr(o,t,e,n,s,r,0),Cr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Bh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ip(l))}s.sort(Ep);for(let r=0;r<s.length;r++)e=wp(s[r],e);return e}function Ep(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function wp(i,t){let e=Tp(i,t);if(!e)return t;let n=Vh(e,i);return ji(n,n.next),ji(e,e.next)}function Tp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(zs(i,e))return e;do{if(zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&zh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Ir(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Ap(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Ap(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Rp(i,t,e,n){let s=i;do s.z===0&&(s.z=sl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cp(s)}function Cp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function sl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ip(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ar(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&zh(i,t,e,n,s,r,o,a)}function Pp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lp(i,t)&&(Ir(i,t)&&Ir(t,i)&&Np(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||zs(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zs(i,t){return i.x===t.x&&i.y===t.y}function kh(i,t,e,n){let s=Po(Ce(i,t,e)),r=Po(Ce(i,t,n)),o=Po(Ce(e,n,i)),a=Po(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Io(i,e,t)||r===0&&Io(i,n,t)||o===0&&Io(e,i,n)||a===0&&Io(e,t,n))}function Io(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Po(i){return i>0?1:i<0?-1:0}function Lp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Np(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vh(i,t){let e=rl(i.i,i.x,i.y),n=rl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gu(i,t,e,n){let s=rl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ol=class{static triangulate(t,e,n=2){return _p(t,e,n)}},Zn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Hu(t),Wu(n,t);let o=t.length;e.forEach(Hu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Wu(n,e[c]);let a=ol.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Hu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var hi=class i extends Ee{constructor(t=new vn([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Up,R,S=!1,b,w,L,v;if(p){R=p.getSpacedPoints(u),S=!0,h=!1;let ot=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,ot),w=new W,L=new W,v=new W}h||(m=0,d=0,g=0,x=0);let I=a.extractPoints(l),D=I.shape,O=I.holes;if(!Zn.isClockWise(D)){D=D.reverse();for(let ot=0,mt=O.length;ot<mt;ot++){let vt=O[ot];Zn.isClockWise(vt)&&(O[ot]=vt.reverse())}}function X(ot){let vt=10000000000000001e-36,Mt=ot[0];for(let wt=1;wt<=ot.length;wt++){let zt=wt%ot.length,Ut=ot[zt],Vt=Ut.x-Mt.x,kt=Ut.y-Mt.y,G=Vt*Vt+kt*kt,re=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(Mt.x),Math.abs(Mt.y)),qt=vt*re*re;if(G<=qt){ot.splice(zt,1),wt--;continue}Mt=Ut}}X(D),O.forEach(X);let F=O.length,V=D;for(let ot=0;ot<F;ot++){let mt=O[ot];D=D.concat(mt)}function J(ot,mt,vt){return mt||Qt("ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(mt,vt)}let Q=D.length;function pt(ot,mt,vt){let Mt,wt,zt,Ut=ot.x-mt.x,Vt=ot.y-mt.y,kt=vt.x-ot.x,G=vt.y-ot.y,re=Ut*Ut+Vt*Vt,qt=Ut*G-Vt*kt;if(Math.abs(qt)>Number.EPSILON){let U=Math.sqrt(re),E=Math.sqrt(kt*kt+G*G),K=mt.x-Vt/U,rt=mt.y+Ut/U,dt=vt.x-G/E,B=vt.y+kt/E,_=((dt-K)*G-(B-rt)*kt)/(Ut*G-Vt*kt);Mt=K+Ut*_-ot.x,wt=rt+Vt*_-ot.y;let y=Mt*Mt+wt*wt;if(y<=2)return new At(Mt,wt);zt=Math.sqrt(y/2)}else{let U=!1;Ut>Number.EPSILON?kt>Number.EPSILON&&(U=!0):Ut<-Number.EPSILON?kt<-Number.EPSILON&&(U=!0):Math.sign(Vt)===Math.sign(G)&&(U=!0),U?(Mt=-Vt,wt=Ut,zt=Math.sqrt(re)):(Mt=Ut,wt=Vt,zt=Math.sqrt(re/2))}return new At(Mt/zt,wt/zt)}let it=[];for(let ot=0,mt=V.length,vt=mt-1,Mt=ot+1;ot<mt;ot++,vt++,Mt++)vt===mt&&(vt=0),Mt===mt&&(Mt=0),it[ot]=pt(V[ot],V[vt],V[Mt]);let ct=[],ft,Tt=it.concat();for(let ot=0,mt=F;ot<mt;ot++){let vt=O[ot];ft=[];for(let Mt=0,wt=vt.length,zt=wt-1,Ut=Mt+1;Mt<wt;Mt++,zt++,Ut++)zt===wt&&(zt=0),Ut===wt&&(Ut=0),ft[Mt]=pt(vt[Mt],vt[zt],vt[Ut]);ct.push(ft),Tt=Tt.concat(ft)}let It;if(m===0)It=Zn.triangulateShape(V,O);else{let ot=[],mt=[];for(let vt=0;vt<m;vt++){let Mt=vt/m,wt=d*Math.cos(Mt*Math.PI/2),zt=g*Math.sin(Mt*Math.PI/2)+x;for(let Ut=0,Vt=V.length;Ut<Vt;Ut++){let kt=J(V[Ut],it[Ut],zt);Rt(kt.x,kt.y,-wt),Mt===0&&ot.push(kt)}for(let Ut=0,Vt=F;Ut<Vt;Ut++){let kt=O[Ut];ft=ct[Ut];let G=[];for(let re=0,qt=kt.length;re<qt;re++){let U=J(kt[re],ft[re],zt);Rt(U.x,U.y,-wt),Mt===0&&G.push(U)}Mt===0&&mt.push(G)}}It=Zn.triangulateShape(ot,mt)}let jt=It.length,$t=g+x;for(let ot=0;ot<Q;ot++){let mt=h?J(D[ot],Tt[ot],$t):D[ot];S?(L.copy(b.normals[0]).multiplyScalar(mt.x),w.copy(b.binormals[0]).multiplyScalar(mt.y),v.copy(R[0]).add(L).add(w),Rt(v.x,v.y,v.z)):Rt(mt.x,mt.y,0)}for(let ot=1;ot<=u;ot++)for(let mt=0;mt<Q;mt++){let vt=h?J(D[mt],Tt[mt],$t):D[mt];S?(L.copy(b.normals[ot]).multiplyScalar(vt.x),w.copy(b.binormals[ot]).multiplyScalar(vt.y),v.copy(R[ot]).add(L).add(w),Rt(v.x,v.y,v.z)):Rt(vt.x,vt.y,f/u*ot)}for(let ot=m-1;ot>=0;ot--){let mt=ot/m,vt=d*Math.cos(mt*Math.PI/2),Mt=g*Math.sin(mt*Math.PI/2)+x;for(let wt=0,zt=V.length;wt<zt;wt++){let Ut=J(V[wt],it[wt],Mt);Rt(Ut.x,Ut.y,f+vt)}for(let wt=0,zt=O.length;wt<zt;wt++){let Ut=O[wt];ft=ct[wt];for(let Vt=0,kt=Ut.length;Vt<kt;Vt++){let G=J(Ut[Vt],ft[Vt],Mt);S?Rt(G.x,G.y+R[u-1].y,R[u-1].x+vt):Rt(G.x,G.y,f+vt)}}}Kt(),ut();function Kt(){let ot=s.length/3;if(h){let mt=0,vt=Q*mt;for(let Mt=0;Mt<jt;Mt++){let wt=It[Mt];bt(wt[2]+vt,wt[1]+vt,wt[0]+vt)}mt=u+m*2,vt=Q*mt;for(let Mt=0;Mt<jt;Mt++){let wt=It[Mt];bt(wt[0]+vt,wt[1]+vt,wt[2]+vt)}}else{for(let mt=0;mt<jt;mt++){let vt=It[mt];bt(vt[2],vt[1],vt[0])}for(let mt=0;mt<jt;mt++){let vt=It[mt];bt(vt[0]+Q*u,vt[1]+Q*u,vt[2]+Q*u)}}n.addGroup(ot,s.length/3-ot,0)}function ut(){let ot=s.length/3,mt=0;xt(V,mt),mt+=V.length;for(let vt=0,Mt=O.length;vt<Mt;vt++){let wt=O[vt];xt(wt,mt),mt+=wt.length}n.addGroup(ot,s.length/3-ot,1)}function xt(ot,mt){let vt=ot.length;for(;--vt>=0;){let Mt=vt,wt=vt-1;wt<0&&(wt=ot.length-1);for(let zt=0,Ut=u+m*2;zt<Ut;zt++){let Vt=Q*zt,kt=Q*(zt+1),G=mt+Mt+Vt,re=mt+wt+Vt,qt=mt+wt+kt,U=mt+Mt+kt;nt(G,re,qt,U)}}}function Rt(ot,mt,vt){c.push(ot),c.push(mt),c.push(vt)}function bt(ot,mt,vt){lt(ot),lt(mt),lt(vt);let Mt=s.length/3,wt=M.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);Dt(wt[0]),Dt(wt[1]),Dt(wt[2])}function nt(ot,mt,vt,Mt){lt(ot),lt(mt),lt(Mt),lt(mt),lt(vt),lt(Mt);let wt=s.length/3,zt=M.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);Dt(zt[0]),Dt(zt[1]),Dt(zt[3]),Dt(zt[1]),Dt(zt[2]),Dt(zt[3])}function lt(ot){s.push(c[ot*3+0]),s.push(c[ot*3+1]),s.push(c[ot*3+2])}function Dt(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Fp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new il[s.type]().fromJSON(s)),new i(n,t.options)}},Up={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new At(r,o),new At(a,c),new At(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new At(o,1-c),new At(l,1-f),new At(h,1-g),new At(x,1-p)]:[new At(a,1-c),new At(u,1-f),new At(d,1-g),new At(m,1-p)]}};function Fp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Lr=class i extends Ee{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new W,h=new At,d=new W,g=new W,x=new W,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let M=0;M<=e;M++){let R=n+M*u*s,S=Math.sin(R),b=Math.cos(R);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*S,f.y=t[w].y,f.z=t[w].x*b,o.push(f.x,f.y,f.z),h.x=M/e,h.y=w/(t.length-1),a.push(h.x,h.y);let L=c[3*w+0]*S,v=c[3*w+1],I=c[3*w+0]*b;l.push(L,v,I)}}for(let M=0;M<e;M++)for(let R=0;R<t.length-1;R++){let S=R+M*t.length,b=S,w=S+t.length,L=S+t.length+1,v=S+1;r.push(b,w,v),r.push(L,v,w)}this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var fi=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*h-o;for(let R=0;R<l;R++){let S=R*f-r;g.push(S,-M,0),x.push(0,0,1),m.push(R/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let R=M+l*p,S=M+l*(p+1),b=M+1+l*(p+1),w=M+1+l*p;d.push(R,S,w),d.push(S,b,w)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Nr=class i extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new W,g=new At;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,R=M,S=M+n+1,b=M+n+2,w=M+1;a.push(R,S,w),a.push(S,b,w)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ii=class i extends Ee{constructor(t=new vn([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,g=h.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Zn.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Zn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){let M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],R=M[0]+f,S=M[1]+f,b=M[2]+f;n.push(R,S,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Op(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Op(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var an=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new W,h=new W,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],R=p/n,S=o+R*a,b=t*Math.cos(S),w=Math.sqrt(t*t-b*b),L=0;p===0&&o===0?L=.5/e:p===n&&c===Math.PI&&(L=-.5/e);for(let v=0;v<=e;v++){let I=v/e,D=s+I*r;f.x=-w*Math.cos(D),f.y=b,f.z=w*Math.sin(D),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(I+L,1-R),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let R=u[p][M+1],S=u[p][M],b=u[p+1][M],w=u[p+1][M+1];(p!==0||o>0)&&d.push(R,S,w),(p!==n-1||c<Math.PI)&&d.push(S,b,w)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qi=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new W,d=new W,g=new W;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,R=(s+1)*(x-1)+m,S=(s+1)*x+m;c.push(p,M,S),c.push(M,R,S)}this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xu(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function Xu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ul(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Gh={clone:rs,merge:Qe},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ra=class extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bn=class extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ts=class extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oa=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ms(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $c(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends Pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tl:r=t,a=2*e-n;break;case el:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tl:o=t,c=2*n-e;break;case el:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,M=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,R=(-1-d)*m+(1.5+d)*x+.5*g,S=d*m-d*x;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+M*o[l+b]+R*o[c+b]+S*o[f+b];return r}},la=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},ua=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ha=class extends Pi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=d*h+g*2,M=f[p],R=f[p+1],S=t*h+g*2,b=u[S],w=u[S+1],L=Gp(n,e,M,b,s);r[g]=Hh(L,x,R,w,m)}return r}};function Hh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Vp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Gp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Hh(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Vp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ms(e,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ms(t.times,Array),values:Ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$c(t.settings)&&(n.settings={inTangents:Ms(t.settings.inTangents,Array),outTangents:Ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ha(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case Wo:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break;case jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return Wo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$c(this.settings)&&(qu(this.settings.inTangents,t),qu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Qt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Id(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Do,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$c(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Wo;var Li=class extends Mn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=fr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="color";var da=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};da.prototype.ValueTypeName="number";var pa=class extends Pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Dr=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Mn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=fr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends Mn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="vector";var ga=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wh=new ga,xa=class{constructor(t){this.manager=t!==void 0?t:Wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ur=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kc=new ve,Yu=new W,Zu=new W,Fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Rs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lo=new W,No=new Tn,qn=new W,Or=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lo,No,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lo,No,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,No,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new W,Ju=new At,$u=new At,rn=class extends Or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,$u),e.subVectors($u,Ju)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var al=class extends Fr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Br=class extends ks{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Di=class extends Or{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cl=class extends Fr{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new cl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ss=-90,Es=1,_a=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Ss,Es,t,e);s.layers=this.layers,this.add(s);let r=new rn(Ss,Es,t,e);r.layers=this.layers,this.add(r);let o=new rn(Ss,Es,t,e);o.layers=this.layers,this.add(o);let a=new rn(Ss,Es,t,e);a.layers=this.layers,this.add(a);let c=new rn(Ss,Es,t,e);c.layers=this.layers,this.add(c);let l=new rn(Ss,Es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ya=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Fl="\\[\\]\\.:\\/",Hp=new RegExp("["+Fl+"]","g"),Ol="[^"+Fl+"]",Wp="[^"+Fl.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",Ol),qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),$p=["material","materials","bones","map"],ll=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=ll;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ev=new Float32Array(1);var Ku=new ve,zr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ji(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(t,e=!0,n=[]){return ul(t,this,n,e),n.sort(ju),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ul(t[s],this,n,e);return n.sort(ju),n}};function ju(i,t){return i.distance-t.distance}function ul(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ul(r[o],t,e,!0)}}var hl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Bl(i,t,e,n){let s=Kp(n);switch(e){case Rl:return i*t;case Il:return i*t/s.components*s.byteLength;case Aa:return i*t/s.components*s.byteLength;case zi:return i*t*2/s.components*s.byteLength;case Ra:return i*t*2/s.components*s.byteLength;case Cl:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Ca:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Na:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case La:return Math.max(i,8)*Math.max(t,8)/2;case Da:case Ua:case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:case Zr:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tc:case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kp(i){switch(i){case dn:case El:return{byteLength:1,components:1};case Ws:case wl:case zn:return{byteLength:2,components:1};case wa:case Ta:return{byteLength:2,components:4};case On:case Ea:case Bn:return{byteLength:4,components:1};case Tl:case Al:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function df(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rm(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,vm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ym=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ig=`PhysicalMaterial material;
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
#endif`,sg=`uniform sampler2D dfgLUT;
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
}`,rg=`
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gg=`#if defined( USE_POINTS_UV )
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
#endif`,xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xg=`float getShadowMask() {
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
}`,qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,$g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,T0=`#define NORMAL
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
}`,A0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,C0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,P0=`#define STANDARD
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
}`,L0=`#define TOON
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
}`,N0=`#define TOON
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
}`,D0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:om,alphahash_pars_fragment:am,alphamap_fragment:cm,alphamap_pars_fragment:lm,alphatest_fragment:um,alphatest_pars_fragment:hm,aomap_fragment:fm,aomap_pars_fragment:dm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:xm,bsdfs:_m,iridescence_fragment:ym,bumpmap_pars_fragment:vm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:Em,color_fragment:wm,color_pars_fragment:Tm,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Nm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Um,colorspace_fragment:Fm,colorspace_pars_fragment:Om,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:km,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:jm,envmap_vertex:Gm,fog_vertex:Hm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:qm,gradientmap_pars_fragment:Ym,lightmap_pars_fragment:Zm,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:$m,lights_pars_begin:Km,lights_toon_fragment:Qm,lights_toon_pars_fragment:tg,lights_phong_fragment:eg,lights_phong_pars_fragment:ng,lights_physical_fragment:ig,lights_physical_pars_fragment:sg,lights_fragment_begin:rg,lights_fragment_maps:og,lights_fragment_end:ag,lightprobes_pars_fragment:cg,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:fg,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:mg,map_particle_pars_fragment:gg,metalnessmap_fragment:xg,metalnessmap_pars_fragment:_g,morphinstance_vertex:yg,morphcolor_vertex:vg,morphnormal_vertex:bg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Sg,normal_fragment_begin:Eg,normal_fragment_maps:wg,normal_pars_fragment:Tg,normal_pars_vertex:Ag,normal_vertex:Rg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Pg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Ng,opaque_fragment:Dg,packing:Ug,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:Bg,dithering_pars_fragment:zg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Xg,skinbase_vertex:qg,skinning_pars_vertex:Yg,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:$g,specularmap_pars_fragment:Kg,tonemapping_fragment:jg,tonemapping_pars_fragment:Qg,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:o0,background_frag:a0,backgroundCube_vert:c0,backgroundCube_frag:l0,cube_vert:u0,cube_frag:h0,depth_vert:f0,depth_frag:d0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:x0,linedashed_vert:_0,linedashed_frag:y0,meshbasic_vert:v0,meshbasic_frag:b0,meshlambert_vert:M0,meshlambert_frag:S0,meshmatcap_vert:E0,meshmatcap_frag:w0,meshnormal_vert:T0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:I0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:N0,points_vert:D0,points_frag:U0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:z0},Lt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ti={basic:{uniforms:Qe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Qe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Qe([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Qe([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Qe([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Qe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Qe([Lt.points,Lt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Qe([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Qe([Lt.common,Lt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Qe([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Qe([Lt.sprite,Lt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Qe([Lt.common,Lt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Qe([Lt.lights,Lt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ti.physical={uniforms:Qe([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var lc={r:0,b:0,g:0},k0=new ve,pf=new ie;pf.set(-1,0,0,0,1,0,0,0,1);function V0(i,t,e,n,s,r){let o=new te(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let S=M.backgroundBlurriness>0;R=t.get(R,S)}return R}function g(M){let R=!1,S=d(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),R=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,R){let S=d(R);S&&(S.isCubeTexture||S.mapping===Gr)?(l===void 0&&(l=new pe(new Fe(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:rs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pf),l.material.toneMapped=fe.getTransfer(S.colorSpace)!==_e,(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pe(new fi(2,2),new cn({name:"BackgroundMaterial",uniforms:rs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=fe.getTransfer(S.colorSpace)!==_e,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,R){M.getRGB(lc,Ul(i)),e.buffers.color.setClear(lc.r,lc.g,lc.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function G0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(O,z,X,F,V){let J=!1,Q=f(O,F,X,z);r!==Q&&(r=Q,l(r.object)),J=d(O,F,X,V),J&&g(O,F,X,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(O,z,X,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(O){return i.bindVertexArray(O)}function u(O){return i.deleteVertexArray(O)}function f(O,z,X,F){let V=F.wireframe===!0,J=n[z.id];J===void 0&&(J={},n[z.id]=J);let Q=O.isInstancedMesh===!0?O.id:0,pt=J[Q];pt===void 0&&(pt={},J[Q]=pt);let it=pt[X.id];it===void 0&&(it={},pt[X.id]=it);let ct=it[V];return ct===void 0&&(ct=h(c()),it[V]=ct),ct}function h(O){let z=[],X=[],F=[];for(let V=0;V<e;V++)z[V]=0,X[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:F,object:O,attributes:{},index:null}}function d(O,z,X,F){let V=r.attributes,J=z.attributes,Q=0,pt=X.getAttributes();for(let it in pt)if(pt[it].location>=0){let ft=V[it],Tt=J[it];if(Tt===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&(Tt=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&(Tt=O.instanceColor)),ft===void 0||ft.attribute!==Tt||Tt&&ft.data!==Tt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==F}function g(O,z,X,F){let V={},J=z.attributes,Q=0,pt=X.getAttributes();for(let it in pt)if(pt[it].location>=0){let ft=J[it];ft===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&(ft=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&(ft=O.instanceColor));let Tt={};Tt.attribute=ft,ft&&ft.data&&(Tt.data=ft.data),V[it]=Tt,Q++}r.attributes=V,r.attributesNum=Q,r.index=F}function x(){let O=r.newAttributes;for(let z=0,X=O.length;z<X;z++)O[z]=0}function m(O){p(O,0)}function p(O,z){let X=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;X[O]=1,F[O]===0&&(i.enableVertexAttribArray(O),F[O]=1),V[O]!==z&&(i.vertexAttribDivisor(O,z),V[O]=z)}function M(){let O=r.newAttributes,z=r.enabledAttributes;for(let X=0,F=z.length;X<F;X++)z[X]!==O[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function R(O,z,X,F,V,J,Q){Q===!0?i.vertexAttribIPointer(O,z,X,V,J):i.vertexAttribPointer(O,z,X,F,V,J)}function S(O,z,X,F){x();let V=F.attributes,J=X.getAttributes(),Q=z.defaultAttributeValues;for(let pt in J){let it=J[pt];if(it.location>=0){let ct=V[pt];if(ct===void 0&&(pt==="instanceMatrix"&&O.instanceMatrix&&(ct=O.instanceMatrix),pt==="instanceColor"&&O.instanceColor&&(ct=O.instanceColor)),ct!==void 0){let ft=ct.normalized,Tt=ct.itemSize,It=t.get(ct);if(It===void 0)continue;let jt=It.buffer,$t=It.type,Kt=It.bytesPerElement,ut=$t===i.INT||$t===i.UNSIGNED_INT||ct.gpuType===Ea;if(ct.isInterleavedBufferAttribute){let xt=ct.data,Rt=xt.stride,bt=ct.offset;if(xt.isInstancedInterleavedBuffer){for(let nt=0;nt<it.locationSize;nt++)p(it.location+nt,xt.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let nt=0;nt<it.locationSize;nt++)m(it.location+nt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let nt=0;nt<it.locationSize;nt++)R(it.location+nt,Tt/it.locationSize,$t,ft,Rt*Kt,(bt+Tt/it.locationSize*nt)*Kt,ut)}else{if(ct.isInstancedBufferAttribute){for(let xt=0;xt<it.locationSize;xt++)p(it.location+xt,ct.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let xt=0;xt<it.locationSize;xt++)m(it.location+xt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let xt=0;xt<it.locationSize;xt++)R(it.location+xt,Tt/it.locationSize,$t,ft,Tt*Kt,Tt/it.locationSize*xt*Kt,ut)}}else if(Q!==void 0){let ft=Q[pt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(it.location,ft);break;case 3:i.vertexAttrib3fv(it.location,ft);break;case 4:i.vertexAttrib4fv(it.location,ft);break;default:i.vertexAttrib1fv(it.location,ft)}}}}M()}function b(){I();for(let O in n){let z=n[O];for(let X in z){let F=z[X];for(let V in F){let J=F[V];for(let Q in J)u(J[Q].object),delete J[Q];delete F[V]}}delete n[O]}}function w(O){if(n[O.id]===void 0)return;let z=n[O.id];for(let X in z){let F=z[X];for(let V in F){let J=F[V];for(let Q in J)u(J[Q].object),delete J[Q];delete F[V]}}delete n[O.id]}function L(O){for(let z in n){let X=n[z];for(let F in X){let V=X[F];if(V[O.id]===void 0)continue;let J=V[O.id];for(let Q in J)u(J[Q].object),delete J[Q];delete V[O.id]}}}function v(O){for(let z in n){let X=n[z],F=O.isInstancedMesh===!0?O.id:0,V=X[F];if(V!==void 0){for(let J in V){let Q=V[J];for(let pt in Q)u(Q[pt].object),delete Q[pt];delete V[J]}delete X[F],Object.keys(X).length===0&&delete n[z]}}}function I(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function H0(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function W0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Rn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let v=L===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==dn&&L!==Bn&&!v&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Jt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:S,maxSamples:b,samples:w}}function X0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new _n,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let M=r?0:n,R=M*4,S=p.clippingState||null;c.value=S,S=u(g,h,R,d);for(let b=0;b!==R;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,S=d;R!==x;++R,S+=4)o.copy(f[R]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ys=4,q0=6,Y0=20,Z0=256,Kr=new Di,Xh=new te,zl=null,kl=0,Vl=0,Gl=!1,J0=new W,os=new W,hc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=J0}=r;zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zl,kl,Vl),this._renderer.xr.enabled=Gl,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Vl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:zn,format:Rn,colorSpace:dr,depthBuffer:!1},s=qh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$0(r)),this._blurMaterial=j0(r,t,e),this._ggxMaterial=K0(r,t,e)}return s}_compileMaterial(t){let e=new pe(new Ee,t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,n,s,r){let c=new rn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Xh),f.toneMapping=Fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pe(new Fe,new je({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Xh),p=!0);for(let R=0;R<6;R++){let S=R%3;S===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):S===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));let b=this._cubeSize;qs(s,S*b,R>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fi||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ys?n-g+Ys:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,qs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Kr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,qs(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Kr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Ys?s-this._lodMax+Ys:0),h=4*(this._cubeSize-u);qs(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Kr)}};function $0(i){let t=[],e=[],n=i,s=i-Ys+1+q0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,R=p>2?0:-1,S=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(S,d*h*p);for(let b=0;b<h;b++){let w=u[b*2]*2-1,L=u[b*2+1]*2-1;p===0?os.set(1,L,w):p===1?os.set(-w,1,-L):p===2?os.set(-w,L,1):p===3?os.set(-1,L,-w):p===4?os.set(-w,-1,L):os.set(w,L,-1),os.toArray(x,(p*h+b)*d)}}let m=new Ee;m.setAttribute("position",new Ve(g,d)),m.setAttribute("outputDirection",new Ve(x,d)),e.push(new pe(m,null)),n>Ys&&n--}return{lodMeshes:e,sizeLods:t}}function qh(i,t,e){let n=new hn(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function K0(i,t,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function j0(i,t,e){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Y0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Yh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Zh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fc=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:jn});r.uniforms.tEquirect.value=e;let o=new pe(s,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Ze),new _a(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Q0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===ba||d===Ma)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new fc(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===ba||d===Ma,x=d===Fi||d===is;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new hc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new hc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===ba?h.mapping=Fi:d===Ma&&(h.mapping=is),h}function c(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function tx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Yi("WebGLRenderer: "+n+" extension not supported."),s}}}function ex(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let M=d.array;x=d.version;for(let R=0,S=M.length;R<S;R+=3){let b=M[R+0],w=M[R+1],L=M[R+2];h.push(b,w,w,L,L,b)}}else{let M=g.array;x=g.version;for(let R=0,S=M.length/3-1;R<S;R+=3){let b=R+0,w=R+1,L=R+2;h.push(b,w,w,L,L,b)}}let m=new(g.count>=65535?yr:_r)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function nx(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ix(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sx(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let I=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],R=0;d===!0&&(R=1),g===!0&&(R=2),x===!0&&(R=3);let S=a.attributes.position.count*R,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*b*4*f),L=new gr(w,S,b,f);L.type=Bn,L.needsUpdate=!0;let v=R*4;for(let D=0;D<f;D++){let O=m[D],z=p[D],X=M[D],F=S*b*4*D;for(let V=0;V<O.count;V++){let J=V*v;d===!0&&(s.fromBufferAttribute(O,V),w[F+J+0]=s.x,w[F+J+1]=s.y,w[F+J+2]=s.z,w[F+J+3]=0),g===!0&&(s.fromBufferAttribute(z,V),w[F+J+4]=s.x,w[F+J+5]=s.y,w[F+J+6]=s.z,w[F+J+7]=0),x===!0&&(s.fromBufferAttribute(X,V),w[F+J+8]=s.x,w[F+J+9]=s.y,w[F+J+10]=s.z,w[F+J+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new At(S,b)},n.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function rx(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var ox={[xl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[yl]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function ax(i,t,e,n,s,r){let o=new hn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ee;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));let u=new ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new pe(l,u),h=new Di(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,M=[],R=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),c!==null&&c.setSize(S,b);for(let w=0;w<M.length;w++){let L=M[w];L.setSize&&L.setSize(S,b)}},this.setEffects=function(S){M=S,R=M.length>0&&M[0].isRenderPass===!0;let b=o.width,w=o.height;M.length>0&&a===null&&(a=new hn(b,w,{type:zn,depthBuffer:!1,stencilBuffer:!1}),c=new hn(b,w,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){let v=M[L];v.setSize&&v.setSize(b,w)}},this.begin=function(S,b){if(x||S.toneMapping===Fn&&M.length===0)return!1;if(p=b,b!==null){let w=b.width,L=b.height;(o.width!==w||o.height!==L)&&this.setSize(w,L)}return R===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Fn,!0},this.hasRenderPass=function(){return R},this.end=function(S,b){S.toneMapping=m,x=!0;let w=o,L=a;for(let v=0;v<M.length;v++){let I=M[v];I.enabled!==!1&&(I.render(S,L,w,b),I.needsSwap!==!1&&(w=L,L=L===a?c:a))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},fe.getTransfer(d)===_e&&(u.defines.SRGB_TRANSFER="");let v=ox[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(p),S.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var mf=new on,Xl=new Ci(1,1),gf=new gr,xf=new Yo,_f=new Mr,Jh=[],$h=[],Kh=new Float32Array(16),jh=new Float32Array(9),Qh=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mc(i,t){let e=$h[t];e===void 0&&(e=new Int32Array(t),$h[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Qh.set(n),i.uniformMatrix2fv(this.addr,!1,Qh),Be(e,n)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;jh.set(n),i.uniformMatrix3fv(this.addr,!1,jh),Be(e,n)}}function px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Kh.set(n),i.uniformMatrix4fv(this.addr,!1,Kh),Be(e,n)}}function mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=e.isReversedDepthBuffer()?ac:oc,r=Xl):r=mf,e.setTexture2D(t||r,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xf,s)}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_f,s)}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gf,s)}function Ax(i){switch(i){case 5126:return cx;case 35664:return lx;case 35665:return ux;case 35666:return hx;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return vx;case 36295:return bx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}function Rx(i,t){i.uniform1fv(this.addr,t)}function Cx(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function Ix(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function Px(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function Lx(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nx(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dx(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ux(i,t){i.uniform1iv(this.addr,t)}function Fx(i,t){i.uniform2iv(this.addr,t)}function Ox(i,t){i.uniform3iv(this.addr,t)}function Bx(i,t){i.uniform4iv(this.addr,t)}function zx(i,t){i.uniform1uiv(this.addr,t)}function kx(i,t){i.uniform2uiv(this.addr,t)}function Vx(i,t){i.uniform3uiv(this.addr,t)}function Gx(i,t){i.uniform4uiv(this.addr,t)}function Hx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xl:o=mf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Wx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xf,r[o])}function Xx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_f,r[o])}function qx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gf,r[o])}function Yx(i){switch(i){case 5126:return Rx;case 35664:return Cx;case 35665:return Ix;case 35666:return Px;case 35674:return Lx;case 35675:return Nx;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return kx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}var ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ax(e.type)}},Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function tf(i,t){i.seq.push(t),i.map[t.id]=t}function Zx(i,t,e){let n=i.name,s=n.length;for(Hl.lastIndex=0;;){let r=Hl.exec(n),o=Hl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){tf(e,l===void 0?new ql(a,i,t):new Yl(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Zl(a),tf(e,f)),e=f}}}var Zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Zx(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ef(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jx=37297,$x=0;function Kx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nf=new ie;function jx(i){fe._getMatrix(nf,fe.workingColorSpace,i);let t=`mat3( ${nf.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Kx(i.getShaderSource(t),a)}else return r}function Qx(i,t){let e=jx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var t_={[xl]:"Linear",[_l]:"Reinhard",[yl]:"Cineon",[Vr]:"ACESFilmic",[bl]:"AgX",[Ml]:"Neutral",[vl]:"Custom"};function e_(i,t){let e=t_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uc=new W;function n_(){fe.getLuminanceCoefficients(uc);let i=uc.x.toFixed(4),t=uc.y.toFixed(4),e=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function s_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qr(i){return i!==""}function rf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function of(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(o_,c_)}var a_=new Map;function c_(i,t){let e=ae[t];if(e===void 0){let n=a_.get(t);if(n!==void 0)e=ae[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jl(e)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(l_,u_)}function u_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var h_={[es]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function f_(i){return h_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d_={[Fi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE_UV"};function p_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":d_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var m_={[is]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x_={[va]:"ENVMAP_BLENDING_MULTIPLY",[vh]:"ENVMAP_BLENDING_MIX",[bh]:"ENVMAP_BLENDING_ADD"};function __(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function y_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function v_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=f_(e),l=p_(e),u=g_(e),f=__(e),h=y_(e),d=i_(e),g=s_(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(m=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Fn?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Qx("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Jl(o),o=rf(o,e),o=of(o,e),a=Jl(a),a=rf(a,e),a=of(a,e),o=af(o),a=af(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=M+m+o,S=M+p+a,b=ef(s,s.VERTEX_SHADER,R),w=ef(s,s.FRAGMENT_SHADER,S);s.attachShader(x,b),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(O){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",X=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(w)||"",V=z.trim(),J=X.trim(),Q=F.trim(),pt=!0,it=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,w);else{let ct=sf(s,b,"vertex"),ft=sf(s,w,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+V+`
`+ct+`
`+ft)}else V!==""?Jt("WebGLProgram: Program Info Log:",V):(J===""||Q==="")&&(it=!1);it&&(O.diagnostics={runnable:pt,programLog:V,vertexShader:{log:J,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(b),s.deleteShader(w),v=new Zs(s,x),I=r_(s,x)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let I;this.getAttributes=function(){return I===void 0&&L(this),I};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,Jx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}var b_=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kl(t),e.set(t,n)),n}},Kl=class{constructor(t){this.id=b_++,this.code=t,this.usedTimes=0}};function M_(i){return i===zi||i===Zr||i===Jr}function S_(i,t,e,n,s,r){let o=new Ls,a=new $l,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,I,D,O,z,X){let F=O.fog,V=z.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,pt=t.get(v.envMap||J,Q),it=pt&&pt.mapping===Gr?pt.image.height:null,ct=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Jt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=ft!==void 0?ft.length:0,It=0;V.morphAttributes.position!==void 0&&(It=1),V.morphAttributes.normal!==void 0&&(It=2),V.morphAttributes.color!==void 0&&(It=3);let jt,$t,Kt,ut;if(ct){let ee=ti[ct];jt=ee.vertexShader,$t=ee.fragmentShader}else{jt=v.vertexShader,$t=v.fragmentShader;let ee=a.getVertexShaderStage(v),Yt=a.getFragmentShaderStage(v);a.update(v,ee,Yt),Kt=ee.id,ut=Yt.id}let xt=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),bt=z.isInstancedMesh===!0,nt=z.isBatchedMesh===!0,lt=!!v.map,Dt=!!v.matcap,ot=!!pt,mt=!!v.aoMap,vt=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,wt=!!v.normalMap,zt=!!v.displacementMap,Ut=!!v.emissiveMap,Vt=!!v.metalnessMap,kt=!!v.roughnessMap,G=v.anisotropy>0,re=v.clearcoat>0,qt=v.dispersion>0,U=v.retroreflectivity>0,E=v.iridescence>0,K=v.sheen>0,rt=v.transmission>0,dt=G&&!!v.anisotropyMap,B=re&&!!v.clearcoatMap,_=re&&!!v.clearcoatNormalMap,y=re&&!!v.clearcoatRoughnessMap,T=E&&!!v.iridescenceMap,P=E&&!!v.iridescenceThicknessMap,N=K&&!!v.sheenColorMap,H=K&&!!v.sheenRoughnessMap,k=!!v.specularMap,tt=!!v.specularColorMap,j=!!v.specularIntensityMap,yt=rt&&!!v.transmissionMap,C=rt&&!!v.thicknessMap,$=!!v.gradientMap,q=!!v.alphaMap,gt=v.alphaTest>0,_t=!!v.alphaHash,ht=!!v.extensions,Et=Fn;v.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Et=i.toneMapping);let Ct={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:jt,fragmentShader:$t,defines:v.defines,customVertexShaderID:Kt,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:nt,batchingColor:nt&&z._colorsTexture!==null,instancing:bt,instancingColor:bt&&z.instanceColor!==null,instancingMorph:bt&&z.morphTexture!==null,outputColorSpace:xt===null?i.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:lt,matcap:Dt,envMap:ot,envMapMode:ot&&pt.mapping,envMapCubeUVHeight:it,aoMap:mt,lightMap:vt,bumpMap:Mt,normalMap:wt,displacementMap:zt,emissiveMap:Ut,normalMapObjectSpace:wt&&v.normalMapType===Eh,normalMapTangentSpace:wt&&v.normalMapType===$r,packedNormalMap:wt&&v.normalMapType===$r&&M_(v.normalMap.format),metalnessMap:Vt,roughnessMap:kt,anisotropy:G,anisotropyMap:dt,clearcoat:re,clearcoatMap:B,clearcoatNormalMap:_,clearcoatRoughnessMap:y,dispersion:qt,retroreflection:U,iridescence:E,iridescenceMap:T,iridescenceThicknessMap:P,sheen:K,sheenColorMap:N,sheenRoughnessMap:H,specularMap:k,specularColorMap:tt,specularIntensityMap:j,transmission:rt,transmissionMap:yt,thicknessMap:C,gradientMap:$,opaque:v.transparent===!1&&v.blending===Hs&&v.alphaToCoverage===!1,alphaMap:q,alphaTest:gt,alphaHash:_t,combine:v.combine,mapUv:lt&&g(v.map.channel),aoMapUv:mt&&g(v.aoMap.channel),lightMapUv:vt&&g(v.lightMap.channel),bumpMapUv:Mt&&g(v.bumpMap.channel),normalMapUv:wt&&g(v.normalMap.channel),displacementMapUv:zt&&g(v.displacementMap.channel),emissiveMapUv:Ut&&g(v.emissiveMap.channel),metalnessMapUv:Vt&&g(v.metalnessMap.channel),roughnessMapUv:kt&&g(v.roughnessMap.channel),anisotropyMapUv:dt&&g(v.anisotropyMap.channel),clearcoatMapUv:B&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:y&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:T&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:P&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:N&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:H&&g(v.sheenRoughnessMap.channel),specularMapUv:k&&g(v.specularMap.channel),specularColorMapUv:tt&&g(v.specularColorMap.channel),specularIntensityMapUv:j&&g(v.specularIntensityMap.channel),transmissionMapUv:yt&&g(v.transmissionMap.channel),thicknessMapUv:C&&g(v.thicknessMap.channel),alphaMapUv:q&&g(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(wt||G),vertexNormals:!!V.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(lt||q),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||V.attributes.normal===void 0&&wt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Rt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:It,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:lt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:Ut&&v.emissiveMap.isVideoTexture===!0&&fe.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ht&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&v.extensions.multiDraw===!0||nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function m(v){let I=[];if(v.shaderID?I.push(v.shaderID):(I.push(v.customVertexShaderID),I.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)I.push(D),I.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(I,v),M(I,v),I.push(i.outputColorSpace)),I.push(v.customProgramCacheKey),I.join()}function p(v,I){v.push(I.precision),v.push(I.outputColorSpace),v.push(I.envMapMode),v.push(I.envMapCubeUVHeight),v.push(I.mapUv),v.push(I.alphaMapUv),v.push(I.lightMapUv),v.push(I.aoMapUv),v.push(I.bumpMapUv),v.push(I.normalMapUv),v.push(I.displacementMapUv),v.push(I.emissiveMapUv),v.push(I.metalnessMapUv),v.push(I.roughnessMapUv),v.push(I.anisotropyMapUv),v.push(I.clearcoatMapUv),v.push(I.clearcoatNormalMapUv),v.push(I.clearcoatRoughnessMapUv),v.push(I.iridescenceMapUv),v.push(I.iridescenceThicknessMapUv),v.push(I.sheenColorMapUv),v.push(I.sheenRoughnessMapUv),v.push(I.specularMapUv),v.push(I.specularColorMapUv),v.push(I.specularIntensityMapUv),v.push(I.transmissionMapUv),v.push(I.thicknessMapUv),v.push(I.combine),v.push(I.fogExp2),v.push(I.sizeAttenuation),v.push(I.morphTargetsCount),v.push(I.morphAttributeCount),v.push(I.numSunLights),v.push(I.numDirLights),v.push(I.numPointLights),v.push(I.numSpotLights),v.push(I.numSpotLightMaps),v.push(I.numHemiLights),v.push(I.numRectAreaLights),v.push(I.numSunLightShadows),v.push(I.numDirLightShadows),v.push(I.numPointLightShadows),v.push(I.numSpotLightShadows),v.push(I.numSpotLightShadowsWithMaps),v.push(I.numLightProbes),v.push(I.shadowMapType),v.push(I.toneMapping),v.push(I.numClippingPlanes),v.push(I.numClipIntersection),v.push(I.depthPacking)}function M(v,I){o.disableAll(),I.instancing&&o.enable(0),I.instancingColor&&o.enable(1),I.instancingMorph&&o.enable(2),I.matcap&&o.enable(3),I.envMap&&o.enable(4),I.normalMapObjectSpace&&o.enable(5),I.normalMapTangentSpace&&o.enable(6),I.clearcoat&&o.enable(7),I.iridescence&&o.enable(8),I.alphaTest&&o.enable(9),I.vertexColors&&o.enable(10),I.vertexAlphas&&o.enable(11),I.vertexUv1s&&o.enable(12),I.vertexUv2s&&o.enable(13),I.vertexUv3s&&o.enable(14),I.vertexTangents&&o.enable(15),I.anisotropy&&o.enable(16),I.alphaHash&&o.enable(17),I.batching&&o.enable(18),I.dispersion&&o.enable(19),I.retroreflection&&o.enable(24),I.batchingColor&&o.enable(20),I.gradientMap&&o.enable(21),I.packedNormalMap&&o.enable(22),I.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reversedDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),I.numLightProbeGrids>0&&o.enable(22),I.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){let I=d[v.type],D;if(I){let O=ti[I];D=Gh.clone(O.uniforms)}else D=v.uniforms;return D}function S(v,I){let D=u.get(I);return D!==void 0?++D.usedTimes:(D=new v_(i,I,v,s),l.push(D),u.set(I,D)),D}function b(v){if(--v.usedTimes===0){let I=l.indexOf(v);l[I]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:R,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:L}}function E_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function c(h,d,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let R=a(h,d,g,x,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function l(h,d,g,x,m,p){let M=a(h,d,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,d){e.length>1&&e.sort(h||w_),n.length>1&&n.sort(d||lf),s.length>1&&s.sort(d||lf)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function T_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new uf,i.set(n,[o])):s>=r.length?(o=new uf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new te};break;case"SpotLight":e={position:new W,direction:new W,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function R_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var C_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function P_(i){let t=new A_,e=R_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let s=new W,r=new ve,o=new ve;function a(l){let u=0,f=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,R=0,S=0,b=0,w=0,L=0,v=0,I=0,D=0;l.sort(I_);for(let z=0,X=l.length;z<X;z++){let F=l[z],V=F.color,J=F.intensity,Q=F.distance,pt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===zi?pt=F.shadow.map.texture:pt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=V.r*J,f+=V.g*J,h+=V.b*J;else if(F.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(F.sh.coefficients[it],J);D++}else if(F.isSunLight){let it=t.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ct=F.shadow,ft=e.get(F);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),n.sunShadow[g]=ft,n.sunShadowMap[g]=pt;let Tt=ct.getViewportCount();for(let It=0;It<Tt;It++)n.sunShadowMatrix[x+It]=ct.getMatrix(It),n.sunShadowCascade[x+It]=ct._cascadeData[It];x+=Tt,g++}n.sun[d]=it,d++}else if(F.isDirectionalLight){let it=t.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ct=F.shadow,ft=e.get(F);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.directionalShadow[m]=ft,n.directionalShadowMap[m]=pt,n.directionalShadowMatrix[m]=F.shadow.matrix,b++}n.directional[m]=it,m++}else if(F.isSpotLight){let it=t.get(F);it.position.setFromMatrixPosition(F.matrixWorld),it.color.copy(V).multiplyScalar(J),it.distance=Q,it.coneCos=Math.cos(F.angle),it.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),it.decay=F.decay,n.spot[M]=it;let ct=F.shadow;if(F.map&&(n.spotLightMap[v]=F.map,v++,ct.updateMatrices(F),F.castShadow&&I++),n.spotLightMatrix[M]=ct.matrix,F.castShadow){let ft=e.get(F);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.spotShadow[M]=ft,n.spotShadowMap[M]=pt,L++}M++}else if(F.isRectAreaLight){let it=t.get(F);it.color.copy(V).multiplyScalar(J),it.halfWidth.set(F.width*.5,0,0),it.halfHeight.set(0,F.height*.5,0),n.rectArea[R]=it,R++}else if(F.isPointLight){let it=t.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity),it.distance=F.distance,it.decay=F.decay,F.castShadow){let ct=F.shadow,ft=e.get(F);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,ft.shadowCameraNear=ct.camera.near,ft.shadowCameraFar=ct.camera.far,n.pointShadow[p]=ft,n.pointShadowMap[p]=pt,n.pointShadowMatrix[p]=F.shadow.matrix,w++}n.point[p]=it,p++}else if(F.isHemisphereLight){let it=t.get(F);it.skyColor.copy(F.color).multiplyScalar(J),it.groundColor.copy(F.groundColor).multiplyScalar(J),n.hemi[S]=it,S++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let O=n.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==M||O.rectAreaLength!==R||O.hemiLength!==S||O.numSunShadows!==g||O.numDirectionalShadows!==b||O.numPointShadows!==w||O.numSpotShadows!==L||O.numSpotMaps!==v||O.numLightProbes!==D)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+v-I,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,O.sunLength=d,O.directionalLength=m,O.pointLength=p,O.spotLength=M,O.rectAreaLength=R,O.hemiLength=S,O.numSunShadows=g,O.numDirectionalShadows=b,O.numPointShadows=w,O.numSpotShadows=L,O.numSpotMaps=v,O.numLightProbes=D,n.version=C_++)}function c(l,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let M=0,R=l.length;M<R;M++){let S=l[M];if(S.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),f++}else if(S.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(S.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function hf(i){let t=new P_(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function L_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hf(i),t.set(s,[a])):r>=o.length?(a=new hf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var N_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`,U_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],F_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],ff=new ve,jr=new W,Wl=new W;function O_(i,t,e){let n=new Ds,s=new At,r=new At,o=new Re,a=new oa,c=new aa,l={},u=e.maxTextureSize,f={[Ui]:ln,[ln]:Ui,[An]:An},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:N_,fragmentShader:D_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let p=this.type;this.render=function(w,L,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===eh&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=es);let I=i.getRenderTarget(),D=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),z=i.state;z.setBlending(jn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=p!==this.type;X&&L.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(V=>V.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,V=w.length;F<V;F++){let J=w[F],Q=J.shadow;if(Q===void 0){Jt("WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let pt=Q.getFrameExtents();s.multiply(pt),r.copy(Q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pt.x),s.x=r.x*pt.x,Q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pt.y),s.y=r.y*pt.y,Q.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=it,Q.map===null||X===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Gs){if(J.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new hn(s.x,s.y,{format:zi,type:zn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),Q.map.texture.name=J.name+".shadowMap",Q.map.depthTexture=new Ci(s.x,s.y,Bn),Q.map.depthTexture.name=J.name+".shadowMapDepth",Q.map.depthTexture.format=Jn,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ge,Q.map.depthTexture.magFilter=Ge}else J.isPointLight?(Q.map=new fc(s.x),Q.map.depthTexture=new jo(s.x,On)):(Q.map=new hn(s.x,s.y),Q.map.depthTexture=new Ci(s.x,s.y,On)),Q.map.depthTexture.name=J.name+".shadowMap",Q.map.depthTexture.format=Jn,this.type===es?(Q.map.depthTexture.compareFunction=it?ac:oc,Q.map.depthTexture.minFilter=Ze,Q.map.depthTexture.magFilter=Ze):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ge,Q.map.depthTexture.magFilter=Ge);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let ct=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();J.isPointLight!==!0&&Q.updateMatrices(J,v);for(let ft=0;ft<ct;ft++){let Tt=Q.getCamera(ft);if(J.isPointLight){let It=Q.camera,jt=Q.matrix,$t=J.distance||It.far;$t!==It.far&&(It.far=$t,It.updateProjectionMatrix()),jr.setFromMatrixPosition(J.matrixWorld),It.position.copy(jr),Wl.copy(It.position),Wl.add(U_[ft]),It.up.copy(F_[ft]),It.lookAt(Wl),It.updateMatrixWorld(),jt.makeTranslation(-jr.x,-jr.y,-jr.z),ff.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(ff,It.coordinateSystem,It.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(Q.map),i.clear());let It=Q.getViewport(ft);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),z.viewport(o)}n=Q.getFrustum(ft),S(L,v,Tt,J,this.type)}Q.isPointLightShadow!==!0&&this.type===Gs&&M(Q,v),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,D,O)};function M(w,L){let v=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(s.x,s.y,{format:zi,type:zn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,v,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,v,d,x,null)}function R(w,L,v,I){let D=null,O=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)D=O;else if(D=v.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let z=D.uuid,X=L.uuid,F=l[z];F===void 0&&(F={},l[z]=F);let V=F[X];V===void 0&&(V=D.clone(),F[X]=V,L.addEventListener("dispose",b)),D=V}if(D.visible=L.visible,D.wireframe=L.wireframe,I===Gs?D.side=L.shadowSide!==null?L.shadowSide:L.side:D.side=L.shadowSide!==null?L.shadowSide:f[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,D.map=L.map,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=i.properties.get(D);z.light=v}return D}function S(w,L,v,I,D){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Gs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let X=t.update(w),F=w.material;if(Array.isArray(F)){let V=X.groups;for(let J=0,Q=V.length;J<Q;J++){let pt=V[J],it=F[pt.materialIndex];if(it&&it.visible){let ct=R(w,it,I,D);w.onBeforeShadow(i,w,L,v,X,ct,pt),i.renderBufferDirect(v,null,X,ct,w,pt),w.onAfterShadow(i,w,L,v,X,ct,pt)}}}else if(F.visible){let V=R(w,F,I,D);w.onBeforeShadow(i,w,L,v,X,V,null),i.renderBufferDirect(v,null,X,V,w,null),w.onAfterShadow(i,w,L,v,X,V,null)}}let z=w.children;for(let X=0,F=z.length;X<F;X++)S(z[X],L,v,I,D)}function b(w){w.target.removeEventListener("dispose",b);for(let v in l){let I=l[v],D=w.target.uuid;D in I&&(I[D].dispose(),delete I[D])}}}function B_(i,t){function e(){let C=!1,$=new Re,q=null,gt=new Re(0,0,0,0);return{setMask:function(_t){q!==_t&&!C&&(i.colorMask(_t,_t,_t,_t),q=_t)},setLocked:function(_t){C=_t},setClear:function(_t,ht,Et,Ct,ee){ee===!0&&(_t*=Ct,ht*=Ct,Et*=Ct),$.set(_t,ht,Et,Ct),gt.equals($)===!1&&(i.clearColor(_t,ht,Et,Ct),gt.copy($))},reset:function(){C=!1,q=null,gt.set(-1,0,0,0)}}}function n(){let C=!1,$=!1,q=null,gt=null,_t=null;return{setReversed:function(ht){if($!==ht){let Et=t.get("EXT_clip_control");ht?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),$=ht;let Ct=_t;_t=null,this.setClear(Ct)}},getReversed:function(){return $},setTest:function(ht){ht?xt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!C&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if($&&(ht=Fh[ht]),gt!==ht){switch(ht){case Fo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=ht}},setLocked:function(ht){C=ht},setClear:function(ht){_t!==ht&&(_t=ht,$&&(ht=1-ht),i.clearDepth(ht))},reset:function(){C=!1,q=null,gt=null,_t=null,$=!1}}}function s(){let C=!1,$=null,q=null,gt=null,_t=null,ht=null,Et=null,Ct=null,ee=null;return{setTest:function(Yt){C||(Yt?xt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(Yt){$!==Yt&&!C&&(i.stencilMask(Yt),$=Yt)},setFunc:function(Yt,me,ge){(q!==Yt||gt!==me||_t!==ge)&&(i.stencilFunc(Yt,me,ge),q=Yt,gt=me,_t=ge)},setOp:function(Yt,me,ge){(ht!==Yt||Et!==me||Ct!==ge)&&(i.stencilOp(Yt,me,ge),ht=Yt,Et=me,Ct=ge)},setLocked:function(Yt){C=Yt},setClear:function(Yt){ee!==Yt&&(i.clearStencil(Yt),ee=Yt)},reset:function(){C=!1,$=null,q=null,gt=null,_t=null,ht=null,Et=null,Ct=null,ee=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,R=null,S=null,b=null,w=null,L=null,v=new te(0,0,0),I=0,D=!1,O=null,z=null,X=null,F=null,V=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,pt=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(it)[1]),Q=pt>=1):it.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Q=pt>=2);let ct=null,ft={},Tt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),jt=new Re().fromArray(Tt),$t=new Re().fromArray(It);function Kt(C,$,q,gt){let _t=new Uint8Array(4),ht=i.createTexture();i.bindTexture(C,ht),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<q;Et++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D($+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return ht}let ut={};ut[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),o.setFunc(As),Mt(!1),wt(fl),xt(i.CULL_FACE),mt(jn);function xt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Rt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function bt(C,$){return h[C]!==$?(i.bindFramebuffer(C,$),h[C]=$,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=$),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=$),!0):!1}function nt(C,$){let q=g,gt=!1;if(C){q=d.get($),q===void 0&&(q=[],d.set($,q));let _t=C.textures;if(q.length!==_t.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Et=_t.length;ht<Et;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=_t.length,gt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,gt=!0);gt&&i.drawBuffers(q)}function lt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let Dt={[ns]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};Dt[rh]=i.MIN,Dt[oh]=i.MAX;let ot={[ah]:i.ZERO,[ch]:i.ONE,[lh]:i.SRC_COLOR,[ml]:i.SRC_ALPHA,[mh]:i.SRC_ALPHA_SATURATE,[dh]:i.DST_COLOR,[hh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[gl]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[gh]:i.CONSTANT_COLOR,[xh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(C,$,q,gt,_t,ht,Et,Ct,ee,Yt){if(C===jn){m===!0&&(Rt(i.BLEND),m=!1);return}if(m===!1&&(xt(i.BLEND),m=!0),C!==nh){if(C!==p||Yt!==D){if((M!==ns||b!==ns)&&(i.blendEquation(i.FUNC_ADD),M=ns,b=ns),Yt)switch(C){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kr:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",C);break}else switch(C){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",C);break}R=null,S=null,w=null,L=null,v.set(0,0,0),I=0,p=C,D=Yt}return}_t=_t||$,ht=ht||q,Et=Et||gt,($!==M||_t!==b)&&(i.blendEquationSeparate(Dt[$],Dt[_t]),M=$,b=_t),(q!==R||gt!==S||ht!==w||Et!==L)&&(i.blendFuncSeparate(ot[q],ot[gt],ot[ht],ot[Et]),R=q,S=gt,w=ht,L=Et),(Ct.equals(v)===!1||ee!==I)&&(i.blendColor(Ct.r,Ct.g,Ct.b,ee),v.copy(Ct),I=ee),p=C,D=!1}function vt(C,$){C.side===An?Rt(i.CULL_FACE):xt(i.CULL_FACE);let q=C.side===ln;$&&(q=!q),Mt(q),C.blending===Hs&&C.transparent===!1?mt(jn):mt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let gt=C.stencilWrite;a.setTest(gt),gt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ut(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(C){O!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),O=C)}function wt(C){C!==Qu?(xt(i.CULL_FACE),C!==z&&(C===fl?i.cullFace(i.BACK):C===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),z=C}function zt(C){C!==X&&(Q&&i.lineWidth(C),X=C)}function Ut(C,$,q){C?(xt(i.POLYGON_OFFSET_FILL),(F!==$||V!==q)&&(F=$,V=q,o.getReversed()&&($=-$),i.polygonOffset($,q))):Rt(i.POLYGON_OFFSET_FILL)}function Vt(C){C?xt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function kt(C){C===void 0&&(C=i.TEXTURE0+J-1),ct!==C&&(i.activeTexture(C),ct=C)}function G(C,$,q){q===void 0&&(ct===null?q=i.TEXTURE0+J-1:q=ct);let gt=ft[q];gt===void 0&&(gt={type:void 0,texture:void 0},ft[q]=gt),(gt.type!==C||gt.texture!==$)&&(ct!==q&&(i.activeTexture(q),ct=q),i.bindTexture(C,$||ut[C]),gt.type=C,gt.texture=$)}function re(){let C=ft[ct];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function qt(){try{i.compressedTexImage2D(...arguments)}catch(C){Qt("WebGLState:",C)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(C){Qt("WebGLState:",C)}}function E(){try{i.texSubImage2D(...arguments)}catch(C){Qt("WebGLState:",C)}}function K(){try{i.texSubImage3D(...arguments)}catch(C){Qt("WebGLState:",C)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Qt("WebGLState:",C)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Qt("WebGLState:",C)}}function B(){try{i.texStorage2D(...arguments)}catch(C){Qt("WebGLState:",C)}}function _(){try{i.texStorage3D(...arguments)}catch(C){Qt("WebGLState:",C)}}function y(){try{i.texImage2D(...arguments)}catch(C){Qt("WebGLState:",C)}}function T(){try{i.texImage3D(...arguments)}catch(C){Qt("WebGLState:",C)}}function P(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function N(C,$){f[C]!==$&&(i.pixelStorei(C,$),f[C]=$)}function H(C){jt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),jt.copy(C))}function k(C){$t.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),$t.copy(C))}function tt(C,$){let q=l.get($);q===void 0&&(q=new WeakMap,l.set($,q));let gt=q.get(C);gt===void 0&&(gt=i.getUniformBlockIndex($,C.name),q.set(C,gt))}function j(C,$){let gt=l.get($).get(C);c.get($)!==gt&&(i.uniformBlockBinding($,gt,C.__bindingPointIndex),c.set($,gt))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},ct=null,ft={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,R=null,S=null,b=null,w=null,L=null,v=new te(0,0,0),I=0,D=!1,O=null,z=null,X=null,F=null,V=null,jt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Rt,bindFramebuffer:bt,drawBuffers:nt,useProgram:lt,setBlending:mt,setMaterial:vt,setFlipSided:Mt,setCullFace:wt,setLineWidth:zt,setPolygonOffset:Ut,setScissorTest:Vt,activeTexture:kt,bindTexture:G,unbindTexture:re,compressedTexImage2D:qt,compressedTexImage3D:U,texImage2D:y,texImage3D:T,pixelStorei:N,getParameter:P,updateUBOMapping:tt,uniformBlockBinding:j,texStorage2D:B,texStorage3D:_,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:H,viewport:k,reset:yt}}function z_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,E){return g?new OffscreenCanvas(U,E):mr("canvas")}function m(U,E,K){let rt=1,dt=qt(U);if((dt.width>K||dt.height>K)&&(rt=K/Math.max(dt.width,dt.height)),rt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let B=Math.floor(rt*dt.width),_=Math.floor(rt*dt.height);h===void 0&&(h=x(B,_));let y=E?x(B,_):h;return y.width=B,y.height=_,y.getContext("2d").drawImage(U,0,0,B,_),Jt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+B+"x"+_+")."),y}else return"data"in U&&Jt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),U;return U}function p(U){return U.generateMipmaps}function M(U){i.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,E,K,rt,dt,B=!1){if(U!==null){if(i[U]!==void 0)return i[U];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let _;rt&&(_=t.get("EXT_texture_norm16"),_||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let y=E;if(E===i.RED&&(K===i.FLOAT&&(y=i.R32F),K===i.HALF_FLOAT&&(y=i.R16F),K===i.UNSIGNED_BYTE&&(y=i.R8),K===i.UNSIGNED_SHORT&&_&&(y=_.R16_EXT),K===i.SHORT&&_&&(y=_.R16_SNORM_EXT)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(y=i.R8UI),K===i.UNSIGNED_SHORT&&(y=i.R16UI),K===i.UNSIGNED_INT&&(y=i.R32UI),K===i.BYTE&&(y=i.R8I),K===i.SHORT&&(y=i.R16I),K===i.INT&&(y=i.R32I)),E===i.RG&&(K===i.FLOAT&&(y=i.RG32F),K===i.HALF_FLOAT&&(y=i.RG16F),K===i.UNSIGNED_BYTE&&(y=i.RG8),K===i.UNSIGNED_SHORT&&_&&(y=_.RG16_EXT),K===i.SHORT&&_&&(y=_.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(y=i.RG8UI),K===i.UNSIGNED_SHORT&&(y=i.RG16UI),K===i.UNSIGNED_INT&&(y=i.RG32UI),K===i.BYTE&&(y=i.RG8I),K===i.SHORT&&(y=i.RG16I),K===i.INT&&(y=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(y=i.RGB8UI),K===i.UNSIGNED_SHORT&&(y=i.RGB16UI),K===i.UNSIGNED_INT&&(y=i.RGB32UI),K===i.BYTE&&(y=i.RGB8I),K===i.SHORT&&(y=i.RGB16I),K===i.INT&&(y=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(y=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(y=i.RGBA16UI),K===i.UNSIGNED_INT&&(y=i.RGBA32UI),K===i.BYTE&&(y=i.RGBA8I),K===i.SHORT&&(y=i.RGBA16I),K===i.INT&&(y=i.RGBA32I)),E===i.RGB&&(K===i.UNSIGNED_SHORT&&_&&(y=_.RGB16_EXT),K===i.SHORT&&_&&(y=_.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(y=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(y=i.R11F_G11F_B10F)),E===i.RGBA){let T=B?pr:fe.getTransfer(dt);K===i.FLOAT&&(y=i.RGBA32F),K===i.HALF_FLOAT&&(y=i.RGBA16F),K===i.UNSIGNED_BYTE&&(y=T===_e?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&_&&(y=_.RGBA16_EXT),K===i.SHORT&&_&&(y=_.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(y=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(y=i.RGB5_A1)}return(y===i.R16F||y===i.R32F||y===i.RG16F||y===i.RG32F||y===i.RGBA16F||y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),y}function b(U,E){let K;return U?E===null||E===On||E===Xs?K=i.DEPTH24_STENCIL8:E===Bn?K=i.DEPTH32F_STENCIL8:E===Ws&&(K=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===On||E===Xs?K=i.DEPTH_COMPONENT24:E===Bn?K=i.DEPTH_COMPONENT32F:E===Ws&&(K=i.DEPTH_COMPONENT16),K}function w(U,E){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ge&&U.minFilter!==Ze?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function L(U){let E=U.target;E.removeEventListener("dispose",L),I(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function v(U){let E=U.target;E.removeEventListener("dispose",v),O(E)}function I(U){let E=n.get(U);if(E.__webglInit===void 0)return;let K=U.source,rt=d.get(K);if(rt){let dt=rt[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(U),Object.keys(rt).length===0&&d.delete(K)}n.remove(U)}function D(U){let E=n.get(U);i.deleteTexture(E.__webglTexture);let K=U.source,rt=d.get(K);delete rt[E.__cacheKey],o.memory.textures--}function O(U){let E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let dt=0;dt<E.__webglFramebuffer[rt].length;dt++)i.deleteFramebuffer(E.__webglFramebuffer[rt][dt]);else i.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)i.deleteFramebuffer(E.__webglFramebuffer[rt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let K=U.textures;for(let rt=0,dt=K.length;rt<dt;rt++){let B=n.get(K[rt]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove(K[rt])}n.remove(U)}let z=0;function X(){z=0}function F(){return z}function V(U){z=U}function J(){let U=z;return U>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,U}function Q(U){let E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function pt(U,E){let K=n.get(U);if(U.isVideoTexture&&G(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){let rt=U.image;if(rt===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(K,U,E);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function it(U,E){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Rt(K,U,E);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function ct(U,E){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Rt(K,U,E);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function ft(U,E){let K=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){bt(K,U,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}let Tt={[Zi]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},It={[Ge]:i.NEAREST,[Mh]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},jt={[Th]:i.NEVER,[Ph]:i.ALWAYS,[Ah]:i.LESS,[oc]:i.LEQUAL,[Rh]:i.EQUAL,[ac]:i.GEQUAL,[Ch]:i.GREATER,[Ih]:i.NOTEQUAL};function $t(U,E){if(E.type===Bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ze||E.magFilter===Sa||E.magFilter===Hr||E.magFilter===Oi||E.minFilter===Ze||E.minFilter===Sa||E.minFilter===Hr||E.minFilter===Oi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Tt[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Tt[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Tt[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,It[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,It[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,jt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ge||E.minFilter!==Hr&&E.minFilter!==Oi||E.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Kt(U,E){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",L));let rt=E.source,dt=d.get(rt);dt===void 0&&(dt={},d.set(rt,dt));let B=Q(E);if(B!==U.__cacheKey){dt[B]===void 0&&(dt[B]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),dt[B].usedTimes++;let _=dt[U.__cacheKey];_!==void 0&&(dt[U.__cacheKey].usedTimes--,_.usedTimes===0&&D(E)),U.__cacheKey=B,U.__webglTexture=dt[B].texture}return K}function ut(U,E,K){return Math.floor(Math.floor(U/K)/E)}function xt(U,E,K,rt){let B=U.updateRanges;if(B.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,K,rt,E.data);else{B.sort((N,H)=>N.start-H.start);let _=0;for(let N=1;N<B.length;N++){let H=B[_],k=B[N],tt=H.start+H.count,j=ut(k.start,E.width,4),yt=ut(H.start,E.width,4);k.start<=tt+1&&j===yt&&ut(k.start+k.count-1,E.width,4)===j?H.count=Math.max(H.count,k.start+k.count-H.start):(++_,B[_]=k)}B.length=_+1;let y=e.getParameter(i.UNPACK_ROW_LENGTH),T=e.getParameter(i.UNPACK_SKIP_PIXELS),P=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,H=B.length;N<H;N++){let k=B[N],tt=Math.floor(k.start/4),j=Math.ceil(k.count/4),yt=tt%E.width,C=Math.floor(tt/E.width),$=j,q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,yt,C,$,q,K,rt,E.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,T),e.pixelStorei(i.UNPACK_SKIP_ROWS,P)}}function Rt(U,E,K){let rt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=i.TEXTURE_3D);let dt=Kt(U,E),B=E.source;e.bindTexture(rt,U.__webglTexture,i.TEXTURE0+K);let _=n.get(B);if(B.version!==_.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let q=fe.getPrimaries(fe.workingColorSpace),gt=E.colorSpace===di?null:fe.getPrimaries(E.colorSpace),_t=E.colorSpace===di||q===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let T=m(E.image,!1,s.maxTextureSize);T=re(E,T);let P=r.convert(E.format,E.colorSpace),N=r.convert(E.type),H=S(E.internalFormat,P,N,E.normalized,E.colorSpace,E.isVideoTexture);$t(rt,E);let k,tt=E.mipmaps,j=E.isVideoTexture!==!0,yt=_.__version===void 0||dt===!0,C=B.dataReady,$=w(E,T);if(E.isDepthTexture)H=b(E.format===Bi,E.type),yt&&(j?e.texStorage2D(i.TEXTURE_2D,1,H,T.width,T.height):e.texImage2D(i.TEXTURE_2D,0,H,T.width,T.height,0,P,N,null));else if(E.isDataTexture)if(tt.length>0){j&&yt&&e.texStorage2D(i.TEXTURE_2D,$,H,tt[0].width,tt[0].height);for(let q=0,gt=tt.length;q<gt;q++)k=tt[q],j?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,k.width,k.height,P,N,k.data):e.texImage2D(i.TEXTURE_2D,q,H,k.width,k.height,0,P,N,k.data);E.generateMipmaps=!1}else j?(yt&&e.texStorage2D(i.TEXTURE_2D,$,H,T.width,T.height),C&&xt(E,T,P,N)):e.texImage2D(i.TEXTURE_2D,0,H,T.width,T.height,0,P,N,T.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,H,tt[0].width,tt[0].height,T.depth);for(let q=0,gt=tt.length;q<gt;q++)if(k=tt[q],E.format!==Rn)if(P!==null)if(j){if(C)if(E.layerUpdates.size>0){let _t=Bl(k.width,k.height,E.format,E.type);for(let ht of E.layerUpdates){let Et=k.data.subarray(ht*_t/k.data.BYTES_PER_ELEMENT,(ht+1)*_t/k.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ht,k.width,k.height,1,P,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,k.width,k.height,T.depth,P,k.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,H,k.width,k.height,T.depth,0,k.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,k.width,k.height,T.depth,P,N,k.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,H,k.width,k.height,T.depth,0,P,N,k.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{j&&yt&&e.texStorage2D(i.TEXTURE_2D,$,H,tt[0].width,tt[0].height);for(let q=0,gt=tt.length;q<gt;q++)k=tt[q],E.format!==Rn?P!==null?j?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,k.width,k.height,P,k.data):e.compressedTexImage2D(i.TEXTURE_2D,q,H,k.width,k.height,0,k.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,k.width,k.height,P,N,k.data):e.texImage2D(i.TEXTURE_2D,q,H,k.width,k.height,0,P,N,k.data)}else if(E.isDataArrayTexture)if(j){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$,H,T.width,T.height,T.depth),C)if(E.layerUpdates.size>0){let q=Bl(T.width,T.height,E.format,E.type);for(let gt of E.layerUpdates){let _t=T.data.subarray(gt*q/T.data.BYTES_PER_ELEMENT,(gt+1)*q/T.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,T.width,T.height,1,P,N,_t)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,P,N,T.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,H,T.width,T.height,T.depth,0,P,N,T.data);else if(E.isData3DTexture)j?(yt&&e.texStorage3D(i.TEXTURE_3D,$,H,T.width,T.height,T.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,P,N,T.data)):e.texImage3D(i.TEXTURE_3D,0,H,T.width,T.height,T.depth,0,P,N,T.data);else if(E.isFramebufferTexture){if(yt)if(j)e.texStorage2D(i.TEXTURE_2D,$,H,T.width,T.height);else{let q=T.width,gt=T.height;for(let _t=0;_t<$;_t++)e.texImage2D(i.TEXTURE_2D,_t,H,q,gt,0,P,N,null),q>>=1,gt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),T.parentNode!==q){q.appendChild(T),f.add(E),q.onpaint=gt=>{let _t=gt.changedElements;for(let ht of f)_t.includes(ht.image)&&(ht.needsUpdate=!0)},q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,T);else{let _t=i.RGBA,ht=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,ht,Et,T)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(j&&yt){let q=qt(tt[0]);e.texStorage2D(i.TEXTURE_2D,$,H,q.width,q.height)}for(let q=0,gt=tt.length;q<gt;q++)k=tt[q],j?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,P,N,k):e.texImage2D(i.TEXTURE_2D,q,H,P,N,k);E.generateMipmaps=!1}else if(j){if(yt){let q=qt(T);e.texStorage2D(i.TEXTURE_2D,$,H,q.width,q.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,P,N,T)}else e.texImage2D(i.TEXTURE_2D,0,H,P,N,T);p(E)&&M(rt),_.__version=B.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function bt(U,E,K){if(E.image.length!==6)return;let rt=Kt(U,E),dt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);let B=n.get(dt);if(dt.version!==B.__version||rt===!0){e.activeTexture(i.TEXTURE0+K);let _=fe.getPrimaries(fe.workingColorSpace),y=E.colorSpace===di?null:fe.getPrimaries(E.colorSpace),T=E.colorSpace===di||_===y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,T);let P=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,H=[];for(let ht=0;ht<6;ht++)!P&&!N?H[ht]=m(E.image[ht],!0,s.maxCubemapSize):H[ht]=N?E.image[ht].image:E.image[ht],H[ht]=re(E,H[ht]);let k=H[0],tt=r.convert(E.format,E.colorSpace),j=r.convert(E.type),yt=S(E.internalFormat,tt,j,E.normalized,E.colorSpace),C=E.isVideoTexture!==!0,$=B.__version===void 0||rt===!0,q=dt.dataReady,gt=w(E,k);$t(i.TEXTURE_CUBE_MAP,E);let _t;if(P){C&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,yt,k.width,k.height);for(let ht=0;ht<6;ht++){_t=H[ht].mipmaps;for(let Et=0;Et<_t.length;Et++){let Ct=_t[Et];E.format!==Rn?tt!==null?C?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,0,0,Ct.width,Ct.height,tt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,yt,Ct.width,Ct.height,0,Ct.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,0,0,Ct.width,Ct.height,tt,j,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et,yt,Ct.width,Ct.height,0,tt,j,Ct.data)}}}else{if(_t=E.mipmaps,C&&$){_t.length>0&&gt++;let ht=qt(H[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,yt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(N){C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,H[ht].width,H[ht].height,tt,j,H[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,yt,H[ht].width,H[ht].height,0,tt,j,H[ht].data);for(let Et=0;Et<_t.length;Et++){let ee=_t[Et].image[ht].image;C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,0,0,ee.width,ee.height,tt,j,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,yt,ee.width,ee.height,0,tt,j,ee.data)}}else{C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,tt,j,H[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,yt,tt,j,H[ht]);for(let Et=0;Et<_t.length;Et++){let Ct=_t[Et];C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,0,0,tt,j,Ct.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et+1,yt,tt,j,Ct.image[ht])}}}p(E)&&M(i.TEXTURE_CUBE_MAP),B.__version=dt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function nt(U,E,K,rt,dt,B){let _=r.convert(K.format,K.colorSpace),y=r.convert(K.type),T=S(K.internalFormat,_,y,K.normalized,K.colorSpace),P=n.get(E),N=n.get(K);if(N.__renderTarget=E,!P.__hasExternalTextures){let H=Math.max(1,E.width>>B),k=Math.max(1,E.height>>B);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,B,T,H,k,E.depth,0,_,y,null):e.texImage2D(dt,B,T,H,k,0,_,y,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),kt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,dt,N.__webglTexture,0,Vt(E)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,dt,N.__webglTexture,B),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(U,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){let rt=E.depthTexture,dt=rt&&rt.isDepthTexture?rt.type:null,B=b(E.stencilBuffer,dt),_=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(E),B,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(E),B,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,B,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_,i.RENDERBUFFER,U)}else{let rt=E.textures;for(let dt=0;dt<rt.length;dt++){let B=rt[dt],_=r.convert(B.format,B.colorSpace),y=r.convert(B.type),T=S(B.internalFormat,_,y,B.normalized,B.colorSpace);kt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(E),T,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(E),T,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,T,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(U,E,K){let rt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(E.depthTexture);if(dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),rt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),$t(i.TEXTURE_CUBE_MAP,E.depthTexture);let P=r.convert(E.depthTexture.format),N=r.convert(E.depthTexture.type),H;E.depthTexture.format===Jn?H=i.DEPTH_COMPONENT24:E.depthTexture.format===Bi&&(H=i.DEPTH24_STENCIL8);for(let k=0;k<6;k++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,H,E.width,E.height,0,P,N,null)}}else pt(E.depthTexture,0);let B=dt.__webglTexture,_=Vt(E),y=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,T=E.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Jn)kt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,y,B,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,T,y,B,0);else if(E.depthTexture.format===Bi)kt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,y,B,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,T,y,B,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(U){let E=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){let rt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),rt){let dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,rt.removeEventListener("dispose",dt)};rt.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=rt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let rt=0;rt<6;rt++)Dt(E.__webglFramebuffer[rt],U,rt);else{let rt=U.texture.mipmaps;rt&&rt.length>0?Dt(E.__webglFramebuffer[0],U,0):Dt(E.__webglFramebuffer,U,0)}else if(K){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]===void 0)E.__webglDepthbuffer[rt]=i.createRenderbuffer(),lt(E.__webglDepthbuffer[rt],U,!1);else{let dt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,B)}}else{let rt=U.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),lt(E.__webglDepthbuffer,U,!1);else{let dt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,B)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(U,E,K){let rt=n.get(U);E!==void 0&&nt(rt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ot(U)}function vt(U){let E=U.texture,K=n.get(U),rt=n.get(E);U.addEventListener("dispose",v);let dt=U.textures,B=U.isWebGLCubeRenderTarget===!0,_=dt.length>1;if(_||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=E.version,o.memory.textures++),B){K.__webglFramebuffer=[];for(let y=0;y<6;y++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[y]=[];for(let T=0;T<E.mipmaps.length;T++)K.__webglFramebuffer[y][T]=i.createFramebuffer()}else K.__webglFramebuffer[y]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let y=0;y<E.mipmaps.length;y++)K.__webglFramebuffer[y]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(_)for(let y=0,T=dt.length;y<T;y++){let P=n.get(dt[y]);P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&kt(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let y=0;y<dt.length;y++){let T=dt[y];K.__webglColorRenderbuffer[y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[y]);let P=r.convert(T.format,T.colorSpace),N=r.convert(T.type),H=S(T.internalFormat,P,N,T.normalized,T.colorSpace,U.isXRRenderTarget===!0),k=Vt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,k,H,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+y,i.RENDERBUFFER,K.__webglColorRenderbuffer[y])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(K.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),$t(i.TEXTURE_CUBE_MAP,E);for(let y=0;y<6;y++)if(E.mipmaps&&E.mipmaps.length>0)for(let T=0;T<E.mipmaps.length;T++)nt(K.__webglFramebuffer[y][T],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+y,T);else nt(K.__webglFramebuffer[y],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0);p(E)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_){for(let y=0,T=dt.length;y<T;y++){let P=dt[y],N=n.get(P),H=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(H=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(H,N.__webglTexture),$t(H,P),nt(K.__webglFramebuffer,U,P,i.COLOR_ATTACHMENT0+y,H,0),p(P)&&M(H)}e.unbindTexture()}else{let y=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(y=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(y,rt.__webglTexture),$t(y,E),E.mipmaps&&E.mipmaps.length>0)for(let T=0;T<E.mipmaps.length;T++)nt(K.__webglFramebuffer[T],U,E,i.COLOR_ATTACHMENT0,y,T);else nt(K.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,y,0);p(E)&&M(y),e.unbindTexture()}U.depthBuffer&&ot(U)}function Mt(U){let E=U.textures;for(let K=0,rt=E.length;K<rt;K++){let dt=E[K];if(p(dt)){let B=R(U),_=n.get(dt).__webglTexture;e.bindTexture(B,_),M(B),e.unbindTexture()}}}let wt=[],zt=[];function Ut(U){if(U.samples>0){if(kt(U)===!1){let E=U.textures,K=U.width,rt=U.height,dt=i.COLOR_BUFFER_BIT,B=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_=n.get(U),y=E.length>1;if(y)for(let P=0;P<E.length;P++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_.__webglMultisampledFramebuffer);let T=U.texture.mipmaps;T&&T.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglFramebuffer);for(let P=0;P<E.length;P++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_.__webglColorRenderbuffer[P]);let N=n.get(E[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,K,rt,0,0,K,rt,dt,i.NEAREST),c===!0&&(wt.length=0,zt.length=0,wt.push(i.COLOR_ATTACHMENT0+P),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(wt.push(B),zt.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),y)for(let P=0;P<E.length;P++){e.bindFramebuffer(i.FRAMEBUFFER,_.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,_.__webglColorRenderbuffer[P]);let N=n.get(E[P]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Vt(U){return Math.min(s.maxSamples,U.samples)}function kt(U){let E=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function G(U){let E=o.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function re(U,E){let K=U.colorSpace,rt=U.format,dt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==dr&&K!==di&&(fe.getTransfer(K)===_e?(rt!==Rn||dt!==dn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",K)),E}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.getTextureUnits=F,this.setTextureUnits=V,this.setTexture2D=pt,this.setTexture2DArray=it,this.setTexture3D=ct,this.setTextureCube=ft,this.rebindTextures=mt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function k_(i,t){function e(n,s=di){let r,o=fe.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===wl)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Rl)return i.ALPHA;if(n===Cl)return i.RGB;if(n===Rn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Ca)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Pa||n===La||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Ua||n===Fa||n===Oa||n===Ba||n===Zr||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Ua)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oa)return r.COMPRESSED_R11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zr)return r.COMPRESSED_RG11_EAC;if(n===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ka||n===Va||n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===sc||n===Jr||n===rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
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

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Sr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:V_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends $n{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new jl,p={},M=e.getContextAttributes(),R=null,S=null,b=[],w=[],L=new At,v=null,I=null,D=new rn;D.viewport=new Re;let O=new rn;O.viewport=new Re;let z=[D,O],X=new ya,F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let xt=b[ut];return xt===void 0&&(xt=new Ns,b[ut]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(ut){let xt=b[ut];return xt===void 0&&(xt=new Ns,b[ut]=xt),xt.getGripSpace()},this.getHand=function(ut){let xt=b[ut];return xt===void 0&&(xt=new Ns,b[ut]=xt),xt.getHandSpace()};function J(ut){let xt=w.indexOf(ut.inputSource);if(xt===-1)return;let Rt=b[xt];Rt!==void 0&&(Rt.update(ut.inputSource,ut.frame,l||o),Rt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function Q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",pt);for(let ut=0;ut<b.length;ut++){let xt=w[ut];xt!==null&&(w[ut]=null,b[ut].disconnect(xt))}F=null,V=null,m.reset();for(let ut in p)delete p[ut];if(t.setRenderTarget(R),d=null,h=null,f=null,s=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(L.width,L.height,!1),I!==null){let ut=I.camera;ut.fov=I.fov,ut.zoom=I.zoom,ut.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){r=ut,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){a=ut,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ut){l=ut},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,bt=null,nt=null;M.depth&&(nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=M.stencil?Bi:Jn,bt=M.stencil?Xs:On);let lt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(lt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new hn(h.textureWidth,h.textureHeight,{format:Rn,type:dn,depthTexture:new Ci(h.textureWidth,h.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Rt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new hn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pt(ut){for(let xt=0;xt<ut.removed.length;xt++){let Rt=ut.removed[xt],bt=w.indexOf(Rt);bt>=0&&(w[bt]=null,b[bt].disconnect(Rt))}for(let xt=0;xt<ut.added.length;xt++){let Rt=ut.added[xt],bt=w.indexOf(Rt);if(bt===-1){for(let lt=0;lt<b.length;lt++)if(lt>=w.length){w.push(Rt),bt=lt;break}else if(w[lt]===null){w[lt]=Rt,bt=lt;break}if(bt===-1)break}let nt=b[bt];nt&&nt.connect(Rt)}}let it=new W,ct=new W;function ft(ut,xt,Rt){it.setFromMatrixPosition(xt.matrixWorld),ct.setFromMatrixPosition(Rt.matrixWorld);let bt=it.distanceTo(ct),nt=xt.projectionMatrix.elements,lt=Rt.projectionMatrix.elements,Dt=nt[14]/(nt[10]-1),ot=nt[14]/(nt[10]+1),mt=(nt[9]+1)/nt[5],vt=(nt[9]-1)/nt[5],Mt=(nt[8]-1)/nt[0],wt=(lt[8]+1)/lt[0],zt=Dt*Mt,Ut=Dt*wt,Vt=bt/(-Mt+wt),kt=Vt*-Mt;if(xt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(kt),ut.translateZ(Vt),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),nt[10]===-1)ut.projectionMatrix.copy(xt.projectionMatrix),ut.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{let G=Dt+Vt,re=ot+Vt,qt=zt-kt,U=Ut+(bt-kt),E=mt*ot/re*G,K=vt*ot/re*G;ut.projectionMatrix.makePerspective(qt,U,E,K,G,re),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function Tt(ut,xt){xt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(xt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let xt=ut.near,Rt=ut.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),X.near=O.near=D.near=xt,X.far=O.far=D.far=Rt,(F!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,V=X.far),X.layers.mask=ut.layers.mask|6,D.layers.mask=X.layers.mask&-5,O.layers.mask=X.layers.mask&-3;let bt=ut.parent,nt=X.cameras;Tt(X,bt);for(let lt=0;lt<nt.length;lt++)Tt(nt[lt],bt);nt.length===2?ft(X,D,O):X.projectionMatrix.copy(D.projectionMatrix),I===null&&ut.isPerspectiveCamera&&(I={camera:ut,fov:ut.fov,zoom:ut.zoom}),It(ut,X,bt)};function It(ut,xt,Rt){Rt===null?ut.matrix.copy(xt.matrixWorld):(ut.matrix.copy(Rt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(xt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(xt.projectionMatrix),ut.projectionMatrixInverse.copy(xt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=Is*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(ut){c=ut,h!==null&&(h.fixedFoveation=ut),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ut)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(ut){return p[ut]};let jt=null;function $t(ut,xt){if(u=xt.getViewerPose(l||o),g=xt,u!==null){let Rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let bt=!1;Rt.length!==X.cameras.length&&(X.cameras.length=0,bt=!0);for(let ot=0;ot<Rt.length;ot++){let mt=Rt[ot],vt=null;if(d!==null)vt=d.getViewport(mt);else{let wt=f.getViewSubImage(h,mt);vt=wt.viewport,ot===0&&(t.setRenderTargetTextures(S,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(S))}let Mt=z[ot];Mt===void 0&&(Mt=new rn,Mt.layers.enable(ot),Mt.viewport=new Re,z[ot]=Mt),Mt.matrix.fromArray(mt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(mt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(vt.x,vt.y,vt.width,vt.height),ot===0&&(X.matrix.copy(Mt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),bt===!0&&X.cameras.push(Mt)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ot=f.getDepthInformation(Rt[0]);ot&&ot.isValid&&ot.texture&&m.init(ot,s.renderState)}if(nt&&nt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let ot=0;ot<Rt.length;ot++){let mt=Rt[ot].camera;if(mt){let vt=p[mt];vt||(vt=new Sr,p[mt]=vt);let Mt=f.getCameraImage(mt);vt.sourceTexture=Mt}}}}for(let Rt=0;Rt<b.length;Rt++){let bt=w[Rt],nt=b[Rt];bt!==null&&nt!==void 0&&nt.update(bt,xt,l||o)}jt&&jt(ut,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),g=null}let Kt=new df;Kt.setAnimationLoop($t),this.setAnimationLoop=function(ut){jt=ut},this.dispose=function(){}}},H_=new ve,yf=new ie;yf.set(-1,0,0,0,1,0,0,0,1);function W_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ul(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,R,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,R):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),R=M.envMap,S=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(yf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let w=b.program;n.uniformBlockBinding(S,w)}function l(S,b){let w=s[S.id];w===void 0&&(m(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",M));let L=b.program;n.updateUBOMapping(S,L);let v=t.render.frame;r[S.id]!==v&&(h(S),r[S.id]=v)}function u(S){let b=f();S.__bindingPointIndex=b;let w=i.createBuffer(),L=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let b=s[S.id],w=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,I=w.length;v<I;v++){let D=w[v];if(Array.isArray(D))for(let O=0,z=D.length;O<z;O++)d(D[O],v,O,L);else d(D,v,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,b,w,L){if(x(S,b,w,L)===!0){let v=S.__offset,I=S.value;if(Array.isArray(I)){let D=0;for(let O=0;O<I.length;O++){let z=I[O],X=p(z);g(z,S.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function x(S,b,w,L){let v=S.value,I=b+"_"+w;if(L[I]===void 0)return typeof v=="number"||typeof v=="boolean"?L[I]=v:ArrayBuffer.isView(v)?L[I]=v.slice():L[I]=v.clone(),!0;{let D=L[I];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return L[I]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function m(S){let b=S.uniforms,w=0,L=16;for(let I=0,D=b.length;I<D;I++){let O=Array.isArray(b[I])?b[I]:[b[I]];for(let z=0,X=O.length;z<X;z++){let F=O[z],V=Array.isArray(F.value)?F.value:[F.value];for(let J=0,Q=V.length;J<Q;J++){let pt=V[J],it=p(pt),ct=w%L,ft=ct%it.boundary,Tt=ct+ft;w+=ft,Tt!==0&&L-Tt<it.storage&&(w+=L-Tt),F.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=it.storage}}}let v=w%L;return v>0&&(w+=L-v),S.__size=w,S.__cache={},this}function p(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",S),b}function M(S){let b=S.target;b.removeEventListener("dispose",M);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:R}}var q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function Y_(){return Qn===null&&(Qn=new Zo(q_,16,16,zi,zn),Qn.name="DFG_LUT",Qn.minFilter=Ze,Qn.magFilter=Ze,Qn.wrapS=Yn,Qn.wrapT=Yn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var dc=class{constructor(t={}){let{canvas:e=Nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Ca,Ra,Aa]),p=new Set([dn,On,Ws,Xs,wa,Ta]),M=new Uint32Array(4),R=new Int32Array(4),S=new W,b=null,w=null,L=[],v=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,z=null,X=null,F=null,V=null;this._outputColorSpace=Ue;let J=0,Q=0,pt=null,it=-1,ct=null,ft=new Re,Tt=new Re,It=null,jt=new te(0),$t=0,Kt=e.width,ut=e.height,xt=1,Rt=null,bt=null,nt=new Re(0,0,Kt,ut),lt=new Re(0,0,Kt,ut),Dt=!1,ot=new Ds,mt=!1,vt=!1,Mt=new ve,wt=new W,zt=new Re,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function kt(){return pt===null?xt:1}let G=n;function re(A,Y){return e.getContext(A,Y)}let qt,U,E,K,rt,dt,B,_,y,T,P,N,H,k,tt,j,yt,C,$,q,gt,_t,ht;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",me,!1),G===null){let Y="webgl2";if(G=re(Y,A),G===null)throw re(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(A){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Qt("WebGLRenderer: "+A.message),A}function Et(){qt=new tx(G),qt.init(),gt=new k_(G,qt),U=new W0(G,qt,t,gt),E=new B_(G,qt),U.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),X=G.createFramebuffer(),F=G.createFramebuffer(),V=G.createFramebuffer(),K=new ix(G),rt=new E_,dt=new z_(G,qt,E,rt,U,gt,K),B=new Q0(D),_=new rm(G),_t=new G0(G,_),y=new ex(G,_,K,_t),T=new rx(G,y,_,_t,K),C=new sx(G,U,dt),tt=new X0(rt),P=new S_(D,B,qt,U,_t,tt),N=new W_(D,rt),H=new T_,k=new L_(qt),yt=new V0(D,B,E,T,g,c),j=new O_(D,T,U),ht=new X_(G,K,U,E),$=new H0(G,qt,K),q=new nx(G,qt,K),K.programs=P.programs,D.capabilities=U,D.extensions=qt,D.properties=rt,D.renderLists=H,D.shadowMap=j,D.state=E,D.info=K}x!==dn&&(I=new ax(x,e.width,e.height,a,s,r));let Ct=new Ql(D,G);this.xr=Ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=qt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=qt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(A){A!==void 0&&(xt=A,this.setSize(Kt,ut,!1))},this.getSize=function(A){return A.set(Kt,ut)},this.setSize=function(A,Y,at=!0){if(Ct.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=A,ut=Y,e.width=Math.floor(A*xt),e.height=Math.floor(Y*xt),at===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(Kt*xt,ut*xt).floor()},this.setDrawingBufferSize=function(A,Y,at){Kt=A,ut=Y,xt=at,e.width=Math.floor(A*at),e.height=Math.floor(Y*at),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(x===dn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ft)},this.getViewport=function(A){return A.copy(nt)},this.setViewport=function(A,Y,at,et){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,Y,at,et),E.viewport(ft.copy(nt).multiplyScalar(xt).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,Y,at,et){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,Y,at,et),E.scissor(Tt.copy(lt).multiplyScalar(xt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(A){E.setScissorTest(Dt=A)},this.setOpaqueSort=function(A){Rt=A},this.setTransparentSort=function(A){bt=A},this.getClearColor=function(A){return A.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,at=!0){let et=0;if(A){let st=!1;if(pt!==null){let Pt=pt.texture.format;st=m.has(Pt)}if(st){let Pt=pt.texture.type,Ot=p.has(Pt),Nt=yt.getClearColor(),Gt=yt.getClearAlpha(),Xt=Nt.r,oe=Nt.g,he=Nt.b;Ot?(M[0]=Xt,M[1]=oe,M[2]=he,M[3]=Gt,G.clearBufferuiv(G.COLOR,0,M)):(R[0]=Xt,R[1]=oe,R[2]=he,R[3]=Gt,G.clearBufferiv(G.COLOR,0,R))}else et|=G.COLOR_BUFFER_BIT}Y&&(et|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",me,!1),yt.dispose(),H.dispose(),k.dispose(),rt.dispose(),B.dispose(),T.dispose(),_t.dispose(),ht.dispose(),P.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Zt),Ct.removeEventListener("sessionend",ne),ye.stop()};function ee(A){A.preventDefault(),Ll("WebGLRenderer: Context Lost."),O=!0}function Yt(){Ll("WebGLRenderer: Context Restored."),O=!1;let A=K.autoReset,Y=j.enabled,at=j.autoUpdate,et=j.needsUpdate,st=j.type;Et(),K.autoReset=A,j.enabled=Y,j.autoUpdate=at,j.needsUpdate=et,j.type=st}function me(A){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ge(A){let Y=A.target;Y.removeEventListener("dispose",ge),Xe(Y)}function Xe(A){Ie(A),rt.remove(A)}function Ie(A){let Y=rt.get(A).programs;Y!==void 0&&(Y.forEach(function(at){P.releaseProgram(at)}),A.isShaderMaterial&&P.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,at,et,st,Pt){Y===null&&(Y=Ut);let Ot=st.isMesh&&st.matrixWorld.determinantAffine()<0,Nt=un(A,Y,at,et,st);E.setMaterial(et,Ot);let Gt=at.index,Xt=1;if(et.wireframe===!0){if(Gt=y.getWireframeAttribute(at),Gt===void 0)return;Xt=2}let oe=at.drawRange,he=at.attributes.position,Ht=oe.start*Xt,xe=(oe.start+oe.count)*Xt;Pt!==null&&(Ht=Math.max(Ht,Pt.start*Xt),xe=Math.min(xe,(Pt.start+Pt.count)*Xt)),Gt!==null?(Ht=Math.max(Ht,0),xe=Math.min(xe,Gt.count)):he!=null&&(Ht=Math.max(Ht,0),xe=Math.min(xe,he.count));let Ne=xe-Ht;if(Ne<0||Ne===1/0)return;_t.setup(st,et,Nt,at,Gt);let Te,Me=$;if(Gt!==null&&(Te=_.get(Gt),Me=q,Me.setIndex(Te)),st.isMesh)et.wireframe===!0?(E.setLineWidth(et.wireframeLinewidth*kt()),Me.setMode(G.LINES)):Me.setMode(G.TRIANGLES);else if(st.isLine){let Je=et.linewidth;Je===void 0&&(Je=1),E.setLineWidth(Je*kt()),st.isLineSegments?Me.setMode(G.LINES):st.isLineLoop?Me.setMode(G.LINE_LOOP):Me.setMode(G.LINE_STRIP)}else st.isPoints?Me.setMode(G.POINTS):st.isSprite&&Me.setMode(G.TRIANGLES);if(st.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))Me.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let Je=st._multiDrawStarts,Ft=st._multiDrawCounts,nn=st._multiDrawCount,de=Gt?_.get(Gt).bytesPerElement:1,En=rt.get(et).currentProgram.getUniforms();for(let Xn=0;Xn<nn;Xn++)En.setValue(G,"_gl_DrawID",Xn),Me.render(Je[Xn]/de,Ft[Xn])}else if(st.isInstancedMesh)Me.renderInstances(Ht,Ne,st.count);else if(at.isInstancedBufferGeometry){let Je=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ft=Math.min(at.instanceCount,Je);Me.renderInstances(Ht,Ne,Ft)}else Me.render(Ht,Ne)};function qe(A,Y,at,et){z!==null&&A.isNodeMaterial&&z.setObject(et,A),mt===!0&&tt.setState(A,at,!1),A.transparent===!0&&A.side===An&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,Vi(A,Y,et),A.side=Ui,A.needsUpdate=!0,Vi(A,Y,et),A.side=An):Vi(A,Y,et)}this.compile=function(A,Y,at=null){at===null&&(at=A),z!==null&&z.renderStart(A,Y,at),w=k.get(at),w.init(Y),v.push(w),at.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),A!==at&&A.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),vt=this.localClippingEnabled,mt=tt.init(this.clippingPlanes,vt),mt===!0&&tt.setGlobalState(this.clippingPlanes,Y),z!==null&&j.render(w.state.shadowsArray,at,Y);let et=new Set;return A.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Pt=st.material;if(Pt)if(Array.isArray(Pt))for(let Ot=0;Ot<Pt.length;Ot++){let Nt=Pt[Ot];qe(Nt,at,Y,st),et.add(Nt)}else qe(Pt,at,Y,st),et.add(Pt)}),w=v.pop(),z!==null&&z.renderEnd(),et},this.compileAsync=function(A,Y,at=null){let et=this.compile(A,Y,at);return new Promise(st=>{function Pt(){if(et.forEach(function(Ot){let Gt=rt.get(Ot).currentProgram;(Gt===void 0||Gt.isReady())&&et.delete(Ot)}),et.size===0){st(A);return}setTimeout(Pt,10)}qt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let St=null;function Wt(A){St&&St(A)}function Zt(){ye.stop()}function ne(){ye.start()}let ye=new df;ye.setAnimationLoop(Wt),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(A){St=A,Ct.setAnimationLoop(A),A===null?ye.stop():ye.start()},Ct.addEventListener("sessionstart",Zt),Ct.addEventListener("sessionend",ne),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(A,Y);let at=Ct.enabled===!0&&Ct.isPresenting===!0,et=I!==null&&(pt===null||at)&&I.begin(D,pt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,Y,pt),w=k.get(A,v.length),w.init(Y),w.state.textureUnits=dt.getTextureUnits(),v.push(w),Mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ot.setFromProjectionMatrix(Mt,Dn,Y.reversedDepth),vt=this.localClippingEnabled,mt=tt.init(this.clippingPlanes,vt),b=H.get(A,L.length),b.init(),L.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let Ot=D.xr.getDepthSensingMesh();Ot!==null&&en(Ot,Y,-1/0,D.sortObjects)}en(A,Y,0,D.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),D.sortObjects===!0&&b.sort(Rt,bt),Vt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Vt&&yt.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&tt.beginShadows();let st=w.state.shadowsArray;if(j.render(st,A,Y),mt===!0&&tt.endShadows(),(et&&I.hasRenderPass())===!1){let Ot=b.opaque,Nt=b.transmissive;if(w.setupLights(),Y.isArrayCamera){let Gt=Y.cameras;if(Nt.length>0)for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){let he=Gt[Xt];pn(Ot,Nt,A,he)}Vt&&yt.render(A);for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){let he=Gt[Xt];si(b,A,he,he.viewport)}}else Nt.length>0&&pn(Ot,Nt,A,Y),Vt&&yt.render(A),si(b,A,Y)}pt!==null&&Q===0&&(dt.updateMultisampleRenderTarget(pt),dt.updateRenderTargetMipmap(pt)),et&&I.end(D),A.isScene===!0&&A.onAfterRender(D,A,Y),_t.resetDefaultState(),it=-1,ct=null,v.pop(),v.length>0?(w=v[v.length-1],dt.setTextureUnits(w.state.textureUnits),mt===!0&&tt.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,z!==null&&z.renderEnd()};function en(A,Y,at,et){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ot)){et&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);let Ot=T.update(A),Nt=A.material;Nt.visible&&b.push(A,Ot,Nt,at,zt.z,null,Y)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ot))){let Ot=T.update(A),Nt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),zt.copy(Ot.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Nt)){let Gt=Ot.groups;for(let Xt=0,oe=Gt.length;Xt<oe;Xt++){let he=Gt[Xt],Ht=Nt[he.materialIndex];Ht&&Ht.visible&&b.push(A,Ot,Ht,at,zt.z,he,Y)}}else Nt.visible&&b.push(A,Ot,Nt,at,zt.z,null,Y)}}let Pt=A.children;for(let Ot=0,Nt=Pt.length;Ot<Nt;Ot++)en(Pt[Ot],Y,at,et)}function si(A,Y,at,et){let{opaque:st,transmissive:Pt,transparent:Ot}=A;w.setupLightsView(at),mt===!0&&tt.setGlobalState(D.clippingPlanes,at),et&&E.viewport(ft.copy(et)),st.length>0&&Hn(st,Y,at),Pt.length>0&&Hn(Pt,Y,at),Ot.length>0&&Hn(Ot,Y,at),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function pn(A,Y,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[et.id]===void 0){let Ht=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[et.id]=new hn(1,1,{generateMipmaps:!0,type:Ht?zn:dn,minFilter:Oi,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Pt=w.state.transmissionRenderTarget[et.id],Ot=et.viewport||ft;Pt.setSize(Ot.z*D.transmissionResolutionScale,Ot.w*D.transmissionResolutionScale);let Nt=D.getRenderTarget(),Gt=D.getActiveCubeFace(),Xt=D.getActiveMipmapLevel();D.setRenderTarget(Pt),D.getClearColor(jt),$t=D.getClearAlpha(),$t<1&&D.setClearColor(16777215,.5),D.clear(),Vt&&yt.render(at);let oe=D.toneMapping;D.toneMapping=Fn;let he=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),mt===!0&&tt.setGlobalState(D.clippingPlanes,et),Hn(A,at,et),dt.updateMultisampleRenderTarget(Pt),dt.updateRenderTargetMipmap(Pt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let xe=0,Ne=Y.length;xe<Ne;xe++){let Te=Y[xe],{object:Me,geometry:Je,material:Ft,group:nn}=Te;if(Ft.side===An&&Me.layers.test(et.layers)){let de=Ft.side;Ft.side=ln,Ft.needsUpdate=!0,mn(Me,at,et,Je,Ft,nn),Ft.side=de,Ft.needsUpdate=!0,Ht=!0}}Ht===!0&&(dt.updateMultisampleRenderTarget(Pt),dt.updateRenderTargetMipmap(Pt))}D.setRenderTarget(Nt,Gt,Xt),D.setClearColor(jt,$t),he!==void 0&&(et.viewport=he),D.toneMapping=oe}function Hn(A,Y,at){let et=Y.isScene===!0?Y.overrideMaterial:null;for(let st=0,Pt=A.length;st<Pt;st++){let Ot=A[st],{object:Nt,geometry:Gt,group:Xt}=Ot,oe=Ot.material;oe.allowOverride===!0&&et!==null&&(oe=et),Nt.layers.test(at.layers)&&mn(Nt,Y,at,Gt,oe,Xt)}}function mn(A,Y,at,et,st,Pt){z!==null&&st.isNodeMaterial&&z.setObject(A,st),A.onBeforeRender(D,Y,at,et,st,Pt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),st.onBeforeRender(D,Y,at,et,A,Pt),st.transparent===!0&&st.side===An&&st.forceSinglePass===!1?(st.side=ln,st.needsUpdate=!0,D.renderBufferDirect(at,Y,et,st,A,Pt),st.side=Ui,st.needsUpdate=!0,D.renderBufferDirect(at,Y,et,st,A,Pt),st.side=An):D.renderBufferDirect(at,Y,et,st,A,Pt),A.onAfterRender(D,Y,at,et,st,Pt)}function Vi(A,Y,at){Y.isScene!==!0&&(Y=Ut);let et=rt.get(A),st=w.state.lights,Pt=w.state.shadowsArray,Ot=st.state.version,Nt=P.getParameters(A,st.state,Pt,Y,at,w.state.lightProbeGridArray),Gt=P.getProgramCacheKey(Nt),Xt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,et.fog=Y.fog;let oe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=B.get(A.envMap||et.environment,oe),et.envMapRotation=et.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",ge),Xt=new Map,et.programs=Xt);let he=Xt.get(Gt);if(he!==void 0){if(et.currentProgram===he&&et.lightsStateVersion===Ot)return Gi(A,Nt),he}else Nt.uniforms=P.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,at,Nt),A.onBeforeCompile(Nt,D),he=P.acquireProgram(Nt,Gt),Xt.set(Gt,he),et.uniforms=Nt.uniforms;let Ht=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=tt.uniform),Gi(A,Nt),et.needsLights=er(A),et.lightsStateVersion=Ot,et.needsLights&&(Ht.ambientLightColor.value=st.state.ambient,Ht.lightProbe.value=st.state.probe,Ht.sunLights.value=st.state.sun,Ht.sunLightShadows.value=st.state.sunShadow,Ht.directionalLights.value=st.state.directional,Ht.directionalLightShadows.value=st.state.directionalShadow,Ht.spotLights.value=st.state.spot,Ht.spotLightShadows.value=st.state.spotShadow,Ht.rectAreaLights.value=st.state.rectArea,Ht.ltc_1.value=st.state.rectAreaLTC1,Ht.ltc_2.value=st.state.rectAreaLTC2,Ht.pointLights.value=st.state.point,Ht.pointLightShadows.value=st.state.pointShadow,Ht.hemisphereLights.value=st.state.hemi,Ht.sunShadowMatrix.value=st.state.sunShadowMatrix,Ht.sunShadowCascade.value=st.state.sunShadowCascade,Ht.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Ht.spotLightMatrix.value=st.state.spotLightMatrix,Ht.spotLightMap.value=st.state.spotLightMap,Ht.pointShadowMatrix.value=st.state.pointShadowMatrix),et.lightProbeGrid=w.state.lightProbeGridArray.length>0,et.currentProgram=he,et.uniformsList=null,he}function tr(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=Zs.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Gi(A,Y){let at=rt.get(A);at.outputColorSpace=Y.outputColorSpace,at.batching=Y.batching,at.batchingColor=Y.batchingColor,at.instancing=Y.instancing,at.instancingColor=Y.instancingColor,at.instancingMorph=Y.instancingMorph,at.skinning=Y.skinning,at.morphTargets=Y.morphTargets,at.morphNormals=Y.morphNormals,at.morphColors=Y.morphColors,at.morphTargetsCount=Y.morphTargetsCount,at.numClippingPlanes=Y.numClippingPlanes,at.numIntersection=Y.numClipIntersection,at.vertexAlphas=Y.vertexAlphas,at.vertexTangents=Y.vertexTangents,at.toneMapping=Y.toneMapping}function Ye(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(Y.matrixWorld);for(let at=0,et=A.length;at<et;at++){let st=A[at];if(st.texture!==null&&st.boundingBox.containsPoint(S))return st}return null}function un(A,Y,at,et,st){Y.isScene!==!0&&(Y=Ut),dt.resetTextureUnits();let Pt=Y.fog,Ot=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?Y.environment:null,Nt=pt===null?D.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:fe.workingColorSpace,Gt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Xt=B.get(et.envMap||Ot,Gt),oe=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,he=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ht=!!at.morphAttributes.position,xe=!!at.morphAttributes.normal,Ne=!!at.morphAttributes.color,Te=Fn;et.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Te=D.toneMapping);let Me=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Je=Me!==void 0?Me.length:0,Ft=rt.get(et),nn=w.state.lights;if(mt===!0&&(vt===!0||A!==ct)){let Se=A===ct&&et.id===it;tt.setState(et,A,Se)}let de=!1;et.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==nn.state.version||Ft.outputColorSpace!==Nt||st.isBatchedMesh&&Ft.batching===!1||!st.isBatchedMesh&&Ft.batching===!0||st.isBatchedMesh&&Ft.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Ft.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Ft.instancing===!1||!st.isInstancedMesh&&Ft.instancing===!0||st.isSkinnedMesh&&Ft.skinning===!1||!st.isSkinnedMesh&&Ft.skinning===!0||st.isInstancedMesh&&Ft.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Ft.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Ft.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Ft.instancingMorph===!1&&st.morphTexture!==null||Ft.envMap!==Xt||et.fog===!0&&Ft.fog!==Pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==tt.numPlanes||Ft.numIntersection!==tt.numIntersection)||Ft.vertexAlphas!==oe||Ft.vertexTangents!==he||Ft.morphTargets!==Ht||Ft.morphNormals!==xe||Ft.morphColors!==Ne||Ft.toneMapping!==Te||Ft.morphTargetsCount!==Je||!!Ft.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Ft.__version=et.version);let En=Ft.currentProgram;de===!0&&(En=Vi(et,Y,st),z&&et.isNodeMaterial&&z.onUpdateProgram(et,En,Ft));let Xn=!1,yi=!1,us=!1,be=En.getUniforms(),Pe=Ft.uniforms;if(E.useProgram(En.program)&&(Xn=!0,yi=!0,us=!0),et.id!==it&&(it=et.id,yi=!0),Ft.needsLights){let Se=Ye(w.state.lightProbeGridArray,st);Ft.lightProbeGrid!==Se&&(Ft.lightProbeGrid=Se,yi=!0)}if(Xn||ct!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),be.setValue(G,"projectionMatrix",A.projectionMatrix),be.setValue(G,"viewMatrix",A.matrixWorldInverse);let bi=be.map.cameraPosition;bi!==void 0&&bi.setValue(G,wt.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&be.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&be.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ct!==A&&(ct=A,yi=!0,us=!0)}if(Ft.needsLights&&(nn.state.sunShadowMap.length>0&&be.setValue(G,"sunShadowMap",nn.state.sunShadowMap,dt),nn.state.directionalShadowMap.length>0&&be.setValue(G,"directionalShadowMap",nn.state.directionalShadowMap,dt),nn.state.spotShadowMap.length>0&&be.setValue(G,"spotShadowMap",nn.state.spotShadowMap,dt),nn.state.pointShadowMap.length>0&&be.setValue(G,"pointShadowMap",nn.state.pointShadowMap,dt)),st.isSkinnedMesh){be.setOptional(G,st,"bindMatrix"),be.setOptional(G,st,"bindMatrixInverse");let Se=st.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),be.setValue(G,"boneTexture",Se.boneTexture,dt))}st.isBatchedMesh&&(be.setOptional(G,st,"batchingTexture"),be.setValue(G,"batchingTexture",st._matricesTexture,dt),be.setOptional(G,st,"batchingIdTexture"),be.setValue(G,"batchingIdTexture",st._indirectTexture,dt),be.setOptional(G,st,"batchingColorTexture"),st._colorsTexture!==null&&be.setValue(G,"batchingColorTexture",st._colorsTexture,dt));let vi=at.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&C.update(st,at,En),(yi||Ft.receiveShadow!==st.receiveShadow)&&(Ft.receiveShadow=st.receiveShadow,be.setValue(G,"receiveShadow",st.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&Y.environment!==null&&(Pe.envMapIntensity.value=Y.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=Y_()),yi){if(be.setValue(G,"toneMappingExposure",D.toneMappingExposure),Ft.needsLights&&Wn(Pe,us),Pt&&et.fog===!0&&N.refreshFogUniforms(Pe,Pt),N.refreshMaterialUniforms(Pe,et,xt,ut,w.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){let Se=Ft.lightProbeGrid;Pe.probesSH.value=Se.texture,Pe.probesMin.value.copy(Se.boundingBox.min),Pe.probesMax.value.copy(Se.boundingBox.max),Pe.probesResolution.value.copy(Se.resolution)}Zs.upload(G,tr(Ft),Pe,dt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Zs.upload(G,tr(Ft),Pe,dt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&be.setValue(G,"center",st.center),be.setValue(G,"modelViewMatrix",st.modelViewMatrix),be.setValue(G,"normalMatrix",st.normalMatrix),be.setValue(G,"modelMatrix",st.matrixWorld),et.uniformsGroups!==void 0){let Se=et.uniformsGroups;for(let bi=0,hs=Se.length;bi<hs;bi++){let mu=Se[bi];ht.update(mu,En),ht.bind(mu,En)}}return En}function Wn(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.sunLights.needsUpdate=Y,A.sunLightShadows.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function er(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(A,Y,at){let et=rt.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),rt.get(A.texture).__webglTexture=Y,rt.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){let at=rt.get(A);at.__webglFramebuffer=Y,at.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,at=0){pt=A,J=Y,Q=at;let et=null,st=!1,Pt=!1;if(A){let Nt=rt.get(A);if(Nt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(G.FRAMEBUFFER,Nt.__webglFramebuffer),ft.copy(A.viewport),Tt.copy(A.scissor),It=A.scissorTest,E.viewport(ft),E.scissor(Tt),E.setScissorTest(It),it=-1;return}else if(Nt.__webglFramebuffer===void 0)dt.setupRenderTarget(A);else if(Nt.__hasExternalTextures)dt.rebindTextures(A,rt.get(A.texture).__webglTexture,rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let oe=A.depthTexture;if(Nt.__boundDepthTexture!==oe){if(oe!==null&&rt.has(oe)&&(A.width!==oe.image.width||A.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(A)}}let Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Pt=!0);let Xt=rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[Y])?et=Xt[Y][at]:et=Xt[Y],st=!0):A.samples>0&&dt.useMultisampledRTT(A)===!1?et=rt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[at]:et=Xt,ft.copy(A.viewport),Tt.copy(A.scissor),It=A.scissorTest}else ft.copy(nt).multiplyScalar(xt).floor(),Tt.copy(lt).multiplyScalar(xt).floor(),It=Dt;if(at!==0&&(et=X),E.bindFramebuffer(G.FRAMEBUFFER,et)&&E.drawBuffers(A,et),E.viewport(ft),E.scissor(Tt),E.setScissorTest(It),st){let Nt=rt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,at)}else if(Pt){let Nt=Y;for(let Gt=0;Gt<A.textures.length;Gt++){let Xt=rt.get(A.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,Xt.__webglTexture,at,Nt)}}else if(A!==null&&at!==0){let Nt=rt.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,at)}it=-1};function ao(A){let Y=rt.get(A);return(Y.__readFormat!==A.format||Y.__readType!==A.type)&&(Y.__readFormat=A.format,Y.__readType=A.type,Y.__formatReadable=U.textureFormatReadable(A.format),Y.__typeReadable=U.textureTypeReadable(A.type)),Y}this.readRenderTargetPixels=function(A,Y,at,et,st,Pt,Ot,Nt=0){if(!(A&&A.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt){E.bindFramebuffer(G.FRAMEBUFFER,Gt);try{let Xt=A.textures[Nt],oe=Xt.format,he=Xt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt);let Ht=ao(Xt);if(Ht.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-et&&at>=0&&at<=A.height-st&&G.readPixels(Y,at,et,st,gt.convert(oe),gt.convert(he),Pt)}finally{let Xt=pt!==null?rt.get(pt).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,at,et,st,Pt,Ot,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt)if(Y>=0&&Y<=A.width-et&&at>=0&&at<=A.height-st){E.bindFramebuffer(G.FRAMEBUFFER,Gt);let Xt=A.textures[Nt],oe=Xt.format,he=Xt.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt);let Ht=ao(Xt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,xe),G.bufferData(G.PIXEL_PACK_BUFFER,Pt.byteLength,G.STREAM_READ),G.readPixels(Y,at,et,st,gt.convert(oe),gt.convert(he),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ne=pt!==null?rt.get(pt).__webglFramebuffer:null;E.bindFramebuffer(G.FRAMEBUFFER,Ne);let Te=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Uh(G,Te,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,xe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Pt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(xe),G.deleteSync(Te),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,at=0){let et=Math.pow(2,-at),st=Math.floor(A.image.width*et),Pt=Math.floor(A.image.height*et),Ot=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;dt.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Ot,Nt,st,Pt),E.unbindTexture()},this.copyTextureToTexture=function(A,Y,at=null,et=null,st=0,Pt=0){let Ot,Nt,Gt,Xt,oe,he,Ht,xe,Ne,Te=A.isCompressedTexture?A.mipmaps[Pt]:A.image;if(at!==null)Ot=at.max.x-at.min.x,Nt=at.max.y-at.min.y,Gt=at.isBox3?at.max.z-at.min.z:1,Xt=at.min.x,oe=at.min.y,he=at.isBox3?at.min.z:0;else{let Pe=Math.pow(2,-st);Ot=Math.floor(Te.width*Pe),Nt=Math.floor(Te.height*Pe),A.isDataArrayTexture?Gt=Te.depth:A.isData3DTexture?Gt=Math.floor(Te.depth*Pe):Gt=1,Xt=0,oe=0,he=0}et!==null?(Ht=et.x,xe=et.y,Ne=et.z):(Ht=0,xe=0,Ne=0);let Me=gt.convert(Y.format),Je=gt.convert(Y.type),Ft;Y.isData3DTexture?(dt.setTexture3D(Y,0),Ft=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(dt.setTexture2DArray(Y,0),Ft=G.TEXTURE_2D_ARRAY):(dt.setTexture2D(Y,0),Ft=G.TEXTURE_2D),E.activeTexture(G.TEXTURE0),E.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);let nn=E.getParameter(G.UNPACK_ROW_LENGTH),de=E.getParameter(G.UNPACK_IMAGE_HEIGHT),En=E.getParameter(G.UNPACK_SKIP_PIXELS),Xn=E.getParameter(G.UNPACK_SKIP_ROWS),yi=E.getParameter(G.UNPACK_SKIP_IMAGES);E.pixelStorei(G.UNPACK_ROW_LENGTH,Te.width),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Te.height),E.pixelStorei(G.UNPACK_SKIP_PIXELS,Xt),E.pixelStorei(G.UNPACK_SKIP_ROWS,oe),E.pixelStorei(G.UNPACK_SKIP_IMAGES,he);let us=A.isDataArrayTexture||A.isData3DTexture,be=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){let Pe=rt.get(A),vi=rt.get(Y),Se=rt.get(Pe.__renderTarget),bi=rt.get(vi.__renderTarget);E.bindFramebuffer(G.READ_FRAMEBUFFER,Se.__webglFramebuffer),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let hs=0;hs<Gt;hs++)us&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rt.get(A).__webglTexture,st,he+hs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rt.get(Y).__webglTexture,Pt,Ne+hs)),G.blitFramebuffer(Xt,oe,Ot,Nt,Ht,xe,Ot,Nt,G.DEPTH_BUFFER_BIT,G.NEAREST);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(st!==0||A.isRenderTargetTexture||rt.has(A)){let Pe=rt.get(A),vi=rt.get(Y);E.bindFramebuffer(G.READ_FRAMEBUFFER,F),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,V);for(let Se=0;Se<Gt;Se++)us?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.__webglTexture,st,he+Se):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,st),be?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vi.__webglTexture,Pt,Ne+Se):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vi.__webglTexture,Pt),st!==0?G.blitFramebuffer(Xt,oe,Ot,Nt,Ht,xe,Ot,Nt,G.COLOR_BUFFER_BIT,G.NEAREST):be?G.copyTexSubImage3D(Ft,Pt,Ht,xe,Ne+Se,Xt,oe,Ot,Nt):G.copyTexSubImage2D(Ft,Pt,Ht,xe,Xt,oe,Ot,Nt);E.bindFramebuffer(G.READ_FRAMEBUFFER,null),E.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else be?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ft,Pt,Ht,xe,Ne,Ot,Nt,Gt,Me,Je,Te.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ft,Pt,Ht,xe,Ne,Ot,Nt,Gt,Me,Te.data):G.texSubImage3D(Ft,Pt,Ht,xe,Ne,Ot,Nt,Gt,Me,Je,Te):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Pt,Ht,xe,Ot,Nt,Me,Je,Te.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Pt,Ht,xe,Te.width,Te.height,Me,Te.data):G.texSubImage2D(G.TEXTURE_2D,Pt,Ht,xe,Ot,Nt,Me,Je,Te);E.pixelStorei(G.UNPACK_ROW_LENGTH,nn),E.pixelStorei(G.UNPACK_IMAGE_HEIGHT,de),E.pixelStorei(G.UNPACK_SKIP_PIXELS,En),E.pixelStorei(G.UNPACK_SKIP_ROWS,Xn),E.pixelStorei(G.UNPACK_SKIP_IMAGES,yi),Pt===0&&Y.generateMipmaps&&G.generateMipmap(Ft),E.unbindTexture()},this.initRenderTarget=function(A){rt.get(A).__webglFramebuffer===void 0&&dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?dt.setTextureCube(A,0):A.isData3DTexture?dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?dt.setTexture2DArray(A,0):dt.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){J=0,Q=0,pt=null,E.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function ki(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ee,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=vf(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let g=vf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function vf(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Ve(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+f,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var to=new W;function Cn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;to.copy(t),to[n]=0,to.normalize();let l=.5*o/(o+a),u=1-to.angleTo(i)/c;return Math.sign(to[e])===1?u*l:a/(o+a)+l+l*(1-u)}var gc=class i extends Fe{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new W,l=new W,u=new W(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new W,m=.5/o;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*r,f[p+1]=u.y*Math.sign(c.y)+l.y*r,f[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[M+0]=Cn(x,l,"z","y",r,n),d[M+1]=1-Cn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[M+0]=1-Cn(x,l,"z","y",r,n),d[M+1]=1-Cn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[M+0]=1-Cn(x,l,"x","z",r,t),d[M+1]=Cn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[M+0]=1-Cn(x,l,"x","z",r,t),d[M+1]=1-Cn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[M+0]=1-Cn(x,l,"x","y",r,t),d[M+1]=1-Cn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[M+0]=Cn(x,l,"x","y",r,t),d[M+1]=1-Cn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var bf=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),Z_=Math.PI*2;function J_(){let i=new ue,t=new Fe(1,1,1),e=new an(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new bn({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,f,h,d,g,x){let m=new pe(c,typeof l=="string"?s(l):l);return m.position.set(u,f,h),m.scale.set(d,g,x),a.add(m),m}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new pe(ki(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function $_({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new je({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:An});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let d of[-1,1])t(i,s?"#deb181":"#aa785d",d*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",d*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(i,o,d,c,0,l,1.8,n),t(i,u,d,f,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,d,f,g,l,h,l)}for(let d of[-n/2+l/2,n/2-l/2])t(i,o,0,c,d,e-l*2,1.8,l),t(i,u,0,f,d,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function K_({box:i,oval:t,root:e},n,s,r){let o=new ue;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ue;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function j_(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new je({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new je({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,m=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,m,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let m=0;m<4;m++){let p=m-1.5,M=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][m],g*t+p*r,n+3+(2+m*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+m*1.12)*Math.min(1.15,r),r*1.15);M.rotation.z=p*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>K_(i,x,r*(1.72-x*.17),g)),d=Array.from({length:5},(g,x)=>{let m=r*(.45+x%3*.18),p=c(o,f,0,0,0,m,m,m);return p.name="bubble-"+x,p});return g=>{for(let[x,{fish:m,tail:p}]of h.entries()){let M=g*(.43+x*.06)+x*2.07+.5,R=t*(.24+x*.036),S=e*(.17+x*.038);m.position.set(Math.cos(M)*R,n+10+x*3.65+Math.sin(M*1.7)*2.15,Math.sin(M)*S),m.rotation.y=-Math.atan2(Math.cos(M)*S,-Math.sin(M)*R),p.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,m]of d.entries()){let p=(g*.3+x/d.length)%1;m.position.set(t*.33+Math.sin(p*Z_+x)*r,n+5+p*20,e*.23),m.visible=p>.08&&p<.94}}}function Q_({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ue;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new ue;g.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*d*.28;for(let m of[-1,0,1])e(g,"#ecc297",(m*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:g,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,g=Math.cos(d)*n*.13,x=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*n*.13);for(let[m,p]of u.entries()){let M=m+1;p.position.set(-(3.55+M*1.24)*a,-.19*M*a,Math.sin(h*1.75-M*.55)*M*a*.32)}for(let{leg:m,side:p,front:M}of f)m.rotation.y=Math.sin(h*3.6)*p*M*.31}}function Mf(i,t,e){if(!Object.hasOwn(bf,i))return null;let n=bf[i],s=J_(),r=n==="aquarium",{base:o,top:a}=$_(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?j_(s,t,e,o,a,c):Q_(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var Z=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),ty=Object.freeze({sage:Z.sage,mint:Z.aqua,sky:Z.blue,peach:Z.peach,coral:"#cf8979",lavender:Z.lilac,butter:Z.honey,cream:Z.linen,white:Z.cream,oak:Z.oakLight,walnut:Z.walnut,charcoal:"#505b68",brass:Z.brass,terracotta:"#b97d63",forest:Z.moss,blush:Z.blush,teddy:"#aa8063",slate:"#9b9b9d"}),ey=new Set([Z.oak,Z.oakLight,Z.walnut]),ny=new Set([Z.sage,Z.moss,Z.linen,Z.lilac,Z.lilacLight,Z.blush,Z.peach,Z.oatmeal,Z.upholsteryShadow,Z.denim]);function iy(i,t){let e=ey.has(i)?1:ny.has(i)?2:0,n=i===Z.glass||i===Z.darkGlass||i===Z.blueWater,s=i===Z.brass,r=i===Z.steel||i===Z.basinSteel,o=new bn({color:i,roughness:s||r?.37:n?.33:i===Z.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var tu=class{constructor(t,e){this.root=new ue,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,iy(e,this.grainDirection));let a=new pe(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new gc(s,r,o,2,u):new Fe(s,r,o);return this.part(f,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new $i(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new an(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new Qi(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new At(l,u)),c=new Lr(a,24);return c.scale(s,r,o),this.part(c,Z.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:ki(s);s.length>1&&s.forEach(a=>a.dispose());let o=new pe(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function pi(i,t,e,n,s,r,o=Z.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function eo(i,t,e,n,s,r,o,a){let c=o===Z.linen?Z.binding:Z.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function sy(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?Z.upholsteryShadow:Z.moss,u=a?Z.oatmeal:Z.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(pi(i,d,g,f,h,5),i.box(d,5,g,f*.97,22,h*.98,l,8),r){let b=o?t*.52:t*.34,w=o?e*.38:e*.46,L=o?t*.22:-t*.32,v=o?c*e*.3:e*.25;pi(i,L,v,b,w,5),i.box(L,5,v,b,22,w,l,8),i.box(L,25,v,b*.96,12,w*.9,n,5),o&&i.box(L,29,c*e*.464,b,26,x,u,6)}let m=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let b=e*.88/m;for(let w=0;w<m;w++){let L=-e*.44+b*(w+.5);i.box(d+x*.18,25,L,f*.76,12,b-3,n,5),i.box(d-f*.39,27,L,f*.22,31,b-1,u,8)}i.box(d,29,-c*e*.445,f*.88,20,x,u,6),eo(i,d+f*.13,35,-e*.31,f*.42,b*.49,a?Z.sage:Z.peach,-.18),eo(i,d+f*.12,35,e*.28,f*.4,b*.45,Z.linen,.2)}else{let b=t*.8/m;for(let w=0;w<m;w++){let L=-t*.4+b*(w+.5);i.box(L,25,g+h*.08,b-3,12,h*.7,n,6),i.box(L,27,g-h*.39,b-1,31,h*.24,u,7)}for(let w of[-t*.442,t*.442])i.box(w,26,g,x,22,h*.89,u,6);eo(i,-t*.27,35,g-h*.15,t*.18,h*.34,Z.peach,-.18),eo(i,t*.27,35,g-h*.12,t*.17,h*.33,Z.linen,.2)}let p=o?f*.67:f*.19,M=o?e*.14:h*.58,R=o?d+f*.06:f*.32,S=o?e*.13:g+h*.1;i.box(R,37.1,S,p,1.7,M,Z.lilacLight,.65);for(let b of[-1,1])i.box(R,38.82,S+b*M*.36,p*.9,.25,1.2,Z.lilac);return 58}function kn(i,t,e,n,s,r,o,a=!1){let c=a?19:28;pi(i,t,e,n,s,c,Z.walnut),i.box(t,c,e,n*.9,7,s*.92,Z.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(u,c+9,f,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function ry(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return kn(i,0,-e*.39,t*.2,e*.23,0,Z.denim),kn(i,0,e*.39,t*.2,e*.23,Math.PI,Z.denim),kn(i,-t*.415,0,t*.17,e*.27,Math.PI/2,Z.denim),kn(i,t*.415,0,t*.17,e*.27,-Math.PI/2,Z.denim),pi(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,Z.walnut,3),i.box(0,37,0,t*.79,8,e*.57,Z.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,Z.linen,.6),46.4;if(r)kn(i,0,-e*.37,t*.2,e*.2,0,Z.sage),kn(i,0,e*.37,t*.2,e*.2,Math.PI,Z.blush),kn(i,-t*.38,0,t*.2,e*.2,Math.PI/2,Z.lilac),kn(i,t*.38,0,t*.2,e*.2,-Math.PI/2,Z.honey),i.disc(0,0,0,t*.13,5,e*.13,Z.walnut),i.disc(0,4,0,t*.045,31,e*.045,Z.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[Z.sage,Z.blush,Z.lilac,Z.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])kn(i,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);pi(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,Z.linen,.5)}return 42}function oy(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,Z.ink,.5),i.box(t,e+1,n,s*.1,14,4,Z.ink,1),i.box(t,e+12,n,s,25,6,Z.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,Z.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,Z.blue,.2)}function ay(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&i.box(l,37,f+.8,a,7,u-1.6,n,2.4),i.box(l,4,f,a*.81,34,u*.81,Z.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;i.box(l,d,f+u*.41,a*.74,8.4,2,Z.oak,.7),i.box(l,d+3,f+u*.43,a*.26,2,2,Z.brass,.5)}}return oy(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,Z.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,Z.peach),81}function Sf(i,t,e,n,s,r){let o=new vn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Ii(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function cy(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");pi(i,0,0,t,e,6,Z.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,Z.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,Z.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,Z.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,Z.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)eo(i,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,Z.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,g,x,m]of[[-.24,.12,1,Z.cream],[.23,.27,.79,Z.honey],[.08,.04,.57,Z.cream],[-.1,.34,.62,Z.honey]])Sf(i,t*d,u+30.8,e*g,h*x,m);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,u+30.71,e*.24,.85,.24,e*.33,Z.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,u+30.72,e*d,t*.71,.24,.9,Z.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,Z.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])i.box(t*.45*u,4,e*.46*f,5,l,6,Z.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*u,l-29,e*f*.105,3,20,3,n,.8)}return l}function ly(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;pi(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,Z.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,Z.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,g=h*(f-(l-1)/2),x=5+u*d;i.box(g,x,e*.46,h-2,d-1.5,2.9,n,1),i.oval(g,x+d*.45,e*.51,2.2,1.7,2.2,Z.brass)}return a+2}function uy(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,Z.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,Z.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,Z.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?Z.lilac:Z.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,Z.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?Z.lilacLight:Z.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,Z.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,Z.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,Z.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Sf(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,Z.cream);return 5}function hy(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,Z.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,Z.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,Z.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,Z.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,Z.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,Z.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,Z.darkGlass);i.box(0,n-4.5,o,s,4.85,u,Z.steel,.4);let f=-s/2-u*1.15;i.disc(f,n,o,u*.8,u*2.9,u*.8,Z.steel),i.box(f+u,n+u*2.5,o,u*2.8,u*.7,u,Z.steel,.6)}function fy(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?Z.sage:Z.walnut,2.3),s?hy(i,t,e,r+2):i.box(0,r-3,0,t,5,e,Z.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(d,6,g,f,r*.67,h,a?Z.moss:Z.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,Z.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,Z.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,f,f,1,Z.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,Z.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,Z.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,Z.brass,1);return r+3}function dy(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,Z.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,Z.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,Z.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,Z.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,Z.glass),i.disc(0,22,-e*.44,3.5,9,3.5,Z.brass),i.box(0,30,-e*.4,5,3.7,e*.1,Z.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,Z.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,Z.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,Z.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,Z.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,Z.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,Z.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,Z.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,Z.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,Z.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,Z.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,Z.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,Z.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,Z.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,Z.blush,1.7),36)}function py(i,t,e,n,s){let r=n?Z.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,Z.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,Z.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,Z.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,Z.linen,3.8),c+o*(n?.37:.28)}function my(i,t,e){let s=[Z.sage,Z.peach,Z.honey,Z.lilac,Z.blue,Z.blush];pi(i,0,0,t*.96,e*.96,22,Z.sage),i.box(0,20,0,t*.94,7,e*.93,Z.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function gy(i,t,e,n){let s=[Z.linen,n,Z.sand,Z.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function xy(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,Z.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,Z.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,f=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,Z.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=n?Z.sage:[Z.blush,Z.linen,Z.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function Ef(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return Mf(t,e,n);let s=ty[t.split("-").at(-1)],r=new tu(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=sy(r,e,n,s||(t==="sofa"?Z.linen:Z.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,Z.walnut,3.5),r.box(0,24,0,e,4,n,Z.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,Z.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,Z.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,Z.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,Z.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,Z.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=ry(r,e,n,s||Z.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=ay(r,e,n,s||Z.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))kn(r,0,0,e,n,0,s||Z.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){kn(r,0,0,e,n,0,s||Z.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,Z.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=cy(r,e,n,s||Z.lilac,t);else if(t==="rug")o=uy(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=fy(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=dy(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=xy(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,Z.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,Z.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,Z.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=ly(r,e,n,s||Z.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;pi(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||Z.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,Z.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=py(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=gy(r,e,n,s||Z.sage);else if(t.startsWith("baby-activities-"))o=my(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||Z.peach),r.ring(0,a,0,a*.95,a*.95,1.2,Z.linen),o=a*2}else return null;return r.finish(o)}var Bt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},io=Math.PI,eu=2*io,_y=new Set(["unknown","unavailable"]),Gn=(i,t,e)=>Math.max(t,Math.min(e,i)),no=(i,t)=>Number.isFinite(i)?Gn(i,12,480):t,Af=.96,Rf=.09;function Cf(i,t,e){let n=no(i.w,42),s=no(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*Rf)<=s*Af/2}var ce=(i,t={})=>new bn({color:i,roughness:.83,...t}),nu=i=>String(i?.state??"unknown"),cs=i=>!_y.has(nu(i)),Ks=i=>cs(i)&&(i.active===!0||i.state==="on"),yy=i=>Ks(i)?Number.isFinite(i.attributes?.brightness)?Gn(i.attributes.brightness/255,0,1):1:0;function mi(i,t,e,n=0,s=0,r=0){let o=new pe(t,e);return o.position.set(n,s,r),i.add(o),o}function We(i,t,e,n,s,r=0,o=0,a=0){return mi(i,new Fe(t,e,n),s,r,o,a)}function tn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,f=l-e/2,h=new vn;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new hi(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),mi(i,d,s,r,o,a)}function ze(i,t,e,n,s,r=0,o=0,a=0,c=16){return mi(i,new $i(t,e,n,c),s,r,o,a)}function Vn(i,t,e,n,s,r){return mi(i,new an(t,10,7),e,n,s,r)}function $s(i,t=0,e=0,n=0){let s=new ue;return s.position.set(t,e,n),i.add(s),s}function vy(i,t){let e=new cn({transparent:!0,depthWrite:!1,blending:kr,uniforms:{strength:{value:0},tint:{value:new te(Bt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=mi(i,new fi(2*t,2*t),e,0,2.8,0);return n.rotation.x=-io/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function by(i,t,e){let n=new ue,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),h=ce(Bt.honey),d=ce(Bt.ink),g=ce(Bt.brass,{roughness:.36,metalness:.42}),x=ce(Bt.cream,{emissive:Bt.warm,emissiveIntensity:0}),m=new te(Bt.warm),p=u?46:o?50:a?56:l?40:c?56:36,M=vy(n,Gn(f*(a?1.72:1.35),38,110));if(a){let R=f*(u?.19:.29);ze(n,R,R*1.02,3,d,0,p+2),o&&ze(n,1.7,1.7,13,h,0,p+9),ze(n,R*.82,R,5,h,0,p-1.5),ze(n,R*.92,R*.96,1.15,g,0,p+1.1);let S=Vn(n,R*.83,x,0,p,0);S.scale.y=o?.88:.52}else if(l)tn(n,f*.34,18,4,d,0,35,-4),ze(n,f*.12,f*.11,14,h,0,37,3),Vn(n,f*.21,x,0,p+3,3);else{let R=p-7,S=c?3:16,b=f*(c?.25:.3);if(ze(n,b*.57,b*.67,4,d,0,S),ze(n,2,2.9,R-S,h,0,(S+R)/2),c)Vn(n,b*.81,x,0,p,0);else{let w=r==="bud_lamp"?12:9;ze(n,b*.56,b,14,x,0,p,0,w),ze(n,b,b*.99,1.2,g,0,p-6.7,0,w),ze(n,b*.55,b*.58,1.1,g,0,p+7.1,0,w)}}return{root:n,anchorY:p+2,animate(R){let S=yy(R),b=R?.attributes?.rgb_color;if(Array.isArray(b)&&b.length===3&&b.every(Number.isFinite)){let[w,L,v]=b.map(I=>Gn(I/255,0,1));m.setRGB(w,L,v,Ue)}else m.setHex(Bt.warm);M(S,m),x.emissiveIntensity=S*.88,x.emissive.copy(m),S>0?x.color.copy(m):x.color.setHex(Bt.cream)}}}function My(i){let t=new vn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new hi(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-io/2)}function wf(i,t,e,n){let s=new ue,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=$s(s,0,o,0);n&&(a.rotation.x=io/2);let c=$s(a,0,-1,0),l=ce(Bt.cream),u=ce(Bt.ink),f=/(?:white|cream)$/.test(i.type)?Bt.oat:/(?:forest|sage)$/.test(i.type)?Bt.sage:Bt.honey,h=ce(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;ze(a,r*.18,r*.2,6,u),ze(a,r*.174,r*.176,1.4,ce(Bt.brass,{roughness:.36,metalness:.42}),0,3.4),ze(a,r*.15,r*.17,2.6,l,0,4.9);let g=My(r);for(let x=0;x<d;x++){let m=$s(c);m.rotation.y=x/d*eu,mi(m,g,h)}if(n){tn(s,r*1.66,6,r*1.02,u,0,3),We(s,r*.3,11,6,l,0,10);let x=mi(s,new Qi(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let m=-1;m<=1;m++){let p=m*r*.5;ze(s,.68,.68,2*Math.sqrt(r*r-p*p),u,p,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,m=0){let p=Number.isFinite(x?.attributes?.percentage)?Gn(x.attributes.percentage/100,.12,1):.64;c.rotation.y=Ks(x)?m*eu*p%eu:0}}}function Sy(i,t){let e=new ue,n=t.mountY??39,s=$s(e,0,n),r=Gn(i*.72,17,27);tn(s,r,31,5,ce(Bt.ink),0,0,-.5),tn(s,r-1.9,29,4.4,ce(Bt.cream),0,.3,1);let o=ce(Bt.oat,{emissive:Bt.warm,emissiveIntensity:0}),a=tn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=ce(Bt.teal,{emissive:Bt.mint,emissiveIntensity:0});return Vn(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=cs(l)?Ks(l)?-.16:.16:0,o.emissiveIntensity=Ks(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?Bt.mint:Bt.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function Tf(i,t,e,n=31){let s=new ue,r=36.5,o=Math.max(12,i-6),a=ce(Bt.oat);if(t){let h=ce(Bt.glass,{roughness:.32});We(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])We(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;We(s,o,1.8,7,h,0,d+.35);for(let g of[-4.25,4.25])We(s,o+2,3.2,1.5,a,0,d,g);We(s,o+3,3.8,11,a,0,r-n/2,1.4),We(s,o,1.35,.5,ce(Bt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=ce(Bt.cream),l=r+n/2-1;tn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>We(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h){let d=iu(h);d!==null&&(f=1-d);let g=Number.isFinite(h?.attributes?.current_tilt_position)?Gn(h.attributes.current_tilt_position/100,0,1):0;for(let x=0;x<u.length;x++){let m=Gn(f*u.length-x,0,1);u[x].visible=m>.02,u[x].scale.y=m,u[x].rotation.x=g*.9}}}}function iu(i){return cs(i)?Number.isFinite(i.attributes?.current_position)?Gn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function Ey(i,t){let e=new ue,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=ce(Bt.oat),l=ce(Bt.cream),u=ce(Bt.plum),f=[ce(Bt.tile),ce(Bt.paleTile)],h=ce(Bt.dark);We(e,i,5,t*Af,l,0,2.5,t*Rf),We(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let O of[-i*.42,i*.42])We(e,i*.09,o+4,n,c,O,(o+4)/2),tn(e,i*.1,o+4,5,l,O,(o+4)/2,r+1,1.5);let d=new vn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new hi(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),mi(e,g,u,0,o+4);let x=i*.49,m=Math.atan2(a,x),p=Math.hypot(a,x),M=(n+11)/8,R=[[],[]];for(let O of[-1,1])for(let z=0;z<8;z++){let X=-r-5.5+(z+.5)*M,F=new Fe(p*.97,2.2,M-.62);F.rotateZ(-O*m),F.translate(O*x*.5,o+5.65+a*.5,X),R[z%2].push(F)}R.forEach((O,z)=>{mi(e,ki(O),f[z]),O.forEach(X=>X.dispose())}),tn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),We(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),We(e,s,o,1.5,h,0,o/2+4,r-4);for(let O of e.children)O.isMesh&&(O.castShadow=!0);let S=ce(Bt.mint),b=ce(Bt.sage),L=(o-3)/6,v=Array.from({length:6},(O,z)=>{let X=$s(e,0,o-(z+.5)*L+2,r+.5);return tn(X,s-2,L-.7,3.4,S,0,0,0,1.2),We(X,s*.91,.68,.7,b,0,L*.23,1.8),z===5&&tn(X,s*.13,2,2.2,l,0,0,2.3,.55),X}),I=ce(Bt.gold,{emissive:Bt.ember,emissiveIntensity:0});Vn(e,3.7,I,i*.422,o*.73,r+4.5);let D=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(O,z=0){let X=iu(O);X!==null&&(D=X),S.color.setHex(cs(O)?Bt.mint:Bt.muted),b.color.setHex(cs(O)?Bt.sage:Bt.muted);let F=(1-D)*v.length;v.forEach((J,Q)=>{let pt=Gn(F-Q,0,1);J.visible=pt>.02,J.scale.y=pt,J.position.y=o-(Q+pt/2)*L+2});let V=["opening","closing"].includes(nu(O));I.emissiveIntensity=V?.55+(.5+.5*Math.cos(z*6)):0}}}function wy(i){let t=new ue,e=46,n=ce(Bt.cream),s=ce(Bt.honey),r=Math.min(i*.86,88),o=$s(t,-r/2,0,0);for(let a of[-r/2-1,r/2+1])We(t,3.4,e,5,n,a,e/2);return We(t,r+4,3,5,n,0,e),tn(o,r-2,e-4,4,s,r/2,e/2,0,2),Vn(o,2.2,ce(Bt.gold),r-6,e*.47,2.8),{root:t,anchorY:e/2,animate(a){let c=iu(a);c!==null&&(o.rotation.y=-1.32*c),s.color.setHex(cs(a)?Bt.honey:Bt.muted)}}}function Ty(i,t,e){let n=new ue,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=Gn(t*.85,23,126),a=ce(Bt.dark,{emissive:Bt.mint,emissiveIntensity:0});if(tn(n,o,s?25:18,8,ce(Bt.cream),0,r,0),s){tn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])Vn(n,1.35,ce(Bt.oat),o*c,r-7,4.3)}else We(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=cs(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Bt.warm:Bt.glass),a.emissiveIntensity=f?1.15:Ks(c)?.25:0}}}function Ay(i,t,e){let n=new ue,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=ce(Bt.cream),c=ce(r?Bt.glass:Bt.sage),l=ce(Bt.teal,{emissive:Bt.mint,emissiveIntensity:0}),u=o-1;if(ze(n,s*.46,s*.5,4,ce(Bt.ink),0,2),r){let d=Vn(n,s/2,c,0,12,0);d.scale.y=.78,ze(n,s*.19,s*.22,3.5,a,0,u)}else{tn(n,s,24,s*.82,c,0,15,0,5),tn(n,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)We(n,s*.66,1.2,1.1,l,0,u+2,d*3.5)}Vn(n,1.6,l,s*.18,u-2,s*.31);let f=ce(Bt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,g)=>Vn(n,2.1+g*.6,f,0,u+3,0));return{root:n,anchorY:u,animate(d,g=0){let x=Ks(d);l.emissiveIntensity=x?1.6:0;for(let m=0;m<h.length;m++){h[m].visible=x;let p=(g*.68+m/h.length)%1;h[m].position.set(Math.sin(p*io)*3.1,u+4+p*14,0),h[m].scale.setScalar(.7+p*.62)}}}}function Ry(i,t){let e=new ue,n=Math.min(i,t)*.42,s=ce(Bt.sage,{emissive:Bt.mint,emissiveIntensity:0}),r=ce(Bt.ink);ze(e,n,n*.95,7,r,0,4.6),ze(e,n*.96,n,5.5,ce(Bt.cream),0,10.2),ze(e,n*.28,n*.33,4,ce(Bt.oat),0,14,-n*.23);for(let a of[-.27,.27])Vn(e,n*.105,r,n*a,10,n*.88);let o=tn(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,animate(a,c=0){let l=["cleaning","returning"].includes(nu(a));o.material.emissiveIntensity=l?.6+.5*Math.cos(c*6):0}}}function If(i,t={}){let e=no(i.w,42),n=no(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?Sy(e,t):s==="garageDoor"?Ey(e,n):s==="door"||r==="door"?wy(e):s==="window"?Tf(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?Tf(no(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?Ty(i,e,t):s==="airPurifier"||s==="humidifier"?Ay(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?Ry(e,n):s==="windowFan"?wf(i,e,n,!0):r==="fan"||/^fans-/.test(s)?wf(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?by(i,e,n):null}var Of=Rd(Pf(),1),{difference:Bf,union:zf}=Of.default,yc=18,Sn=.001,ei=(i,t)=>i[0]*t[0]+i[1]*t[1],ls=(i,t)=>i[0]*t[1]-i[1]*t[0],ni=(i,t)=>[i[0]-t[0],i[1]-t[1]],we=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],bc=([i,t])=>[-t,i],Lf=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],xc=i=>i.map(({x:t,y:e})=>[t,e]),gi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],kf=i=>i.length?zf(...i):[];function vc(i,t,e,n=0){let s=ni(t,i),r=Math.hypot(...s);if(r<Sn)return null;let o=s.map(u=>u/r),a=bc(o),c=we(i,o,-n),l=we(t,o,n);return gi([we(c,a,e),we(l,a,e),we(l,a,-e),we(c,a,-e)])}function _c(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function Nf(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=ni(n,t),r=Math.hypot(...s);return r>Sn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function Cy(i,t,e,n){if(Math.abs(ei(i.tangent,t.tangent))<.9999)return null;let s=bc(i.tangent),[r,o]=[t.start,t.end].map(x=>ni(x,i.start)),a=ei(r,s);if(Math.abs(a)<.1||Math.abs(a)>yc||Math.abs(a-ei(o,s))>.1)return null;let c=[ei(r,i.tangent),ei(o,i.tangent)].sort((x,m)=>x-m),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let f=we(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!_c(e,we(f,s,-h))||!_c(n,we(f,s,a+h))||_c(e,we(f,s,a/2))||_c(n,we(f,s,a/2)))return null;let d=we(i.start,i.tangent,l),g=we(i.start,i.tangent,u);return gi([we(d,s,-h*.05),we(g,s,-h*.05),we(g,s,a+h*.05),we(d,s,a+h*.05)])}function Vf(i){let t=[],e=[];for(let n of[...i].reverse()){let s=kf(n.polygons);if(!s.length)continue;let r=t.length?Bf(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?zf(t,s):s}return{footprint:t,regions:e.reverse()}}function so(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Gf(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:xc(h.points),polygons:[gi(xc(h.points))],outdoor:e&&so(h)})),s=[];for(let[h,d]of n.entries())for(let g of n.slice(h+1))for(let x of Nf(d.points))for(let m of Nf(g.points)){let p=Cy(x,m,d.points,g.points);p&&s.push({surface:d.surface,polygons:[p],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:g,deckBottom:x,northDeck:m,southDeck:p,recess:M}=t;r.push({surface:"patio",polygons:[gi(xc(m)),gi(xc(p)),gi(Lf(h,g,d+1,x))]}),M.x2>M.x1&&M.z2>M.z1&&o.push({surface:"oak",polygons:[gi(Lf(M.x1,M.z1,M.x2,M.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=Vf([...l,...c]),f=t||e?kf(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function Iy(i,t,e,n){let s=ls(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=we(i,bc(t),r),a=we(i,bc(e),-r),c=ls(ni(a,o),e)/s,l=we(o,t,c);return Math.hypot(...ni(l,i))>n*2.5?gi([i,o,a]):gi([i,o,l,a])}function Df(i,t){let e=ls(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=ni(t.point,i.point);return[ls(n,t.tangent)/e,ls(n,i.tangent)/e]}function Py(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=ni(r.point,s.point);if(Math.hypot(...o)>yc)continue;let a=Df(s,r);a&&a.every(c=>c>=-yc&&c<=Sn)?e.push({a:s,b:r,center:we(s.point,s.tangent,a[0])}):!a&&ei(s.tangent,r.tangent)<0&&ei(o,s.tangent)<=Sn&&ei(o,r.tangent)>=-Sn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Df(s,o);if(!a)continue;let[c,l]=a;c<-yc||c>=-Sn||l<=Sn||l>=r.length-Sn||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:we(s.point,s.tangent,c)})}}return e}function Uf({a:i,b:t,center:e},n){return e?[vc(i.point,e,n,.1),t&&vc(t.point,e,n,.1),t&&Iy(e,i.tangent,t.tangent,n)].filter(Boolean):[vc(i.point,t.point,n,.1)].filter(Boolean)}function Hf(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function Ly(i,t){return Hf(i).flatMap(([e,n])=>{let s=ni(n,e),r=Math.hypot(...s);if(r<Sn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=ni(a,e),u=ni(c,e);if(Math.abs(ls(l,o))>Sn||Math.abs(ls(u,o))>Sn)return[];let[f,h]=[ei(l,o),ei(u,o)].sort((x,m)=>x-m),d=Math.max(0,f),g=Math.min(r,h);return g-d>Sn?[[we(e,o,d),we(e,o,g)]]:[]})})}function Ff(i,t){return t?.length?Bf(i,t):i}function Wf(i,t,e,n){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of i){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],g=(M,R,S,b,w,L,v)=>{R-M>Sn&&r(vc(we(h,d,M),we(h,d,R),w/2),S,b,L,v)},x=c.openings.length?n:0,m=(M,R)=>{g(M,R,x,e,t,l,2),g(M,R,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let p=0;for(let M of c.openings)m(p,M.start),p=Math.max(p,M.end);m(p,c.length),g(0,c.length,0,3,t+3,f,1)}for(let c of Py(i)){let[l,u,f]=c.a.wall.palette;for(let h of Uf(c,t/2))r(h,0,e,l,2);for(let h of Uf(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of h.sort((x,m)=>x.priority-m.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{...Vf([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=Hf(l);return c.map(g=>({...g,bottom:u,top:f,faces:{top:Ff(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:Ff(g.polygons,a[h-1]?.footprint),sides:Ly(g.polygons,d)}}))})}var Ny=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Dy=3;function Xf(i,t,e){i.toneMapping=Vr,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=es,i.shadowMap.autoUpdate=!1;let n=new Ur("#fff4e5","#897e91",1.13),s=new Vs("#fff0d4",2.15),r=new Vs("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:Dy},()=>new Br("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],x,m,p=!0,M=new te;function R(){for(let w of t.children)w.isMesh&&(w.receiveShadow=!0,w.geometry.computeBoundingBox(),w.castShadow=w.geometry.boundingBox.max.y+w.position.y>-99)}function S(w,L){let v=/(light|lamp|sconce)/i.test(w.type),I=!L.animate||v;L.root.traverse(D=>{!D.isMesh||D.material.transparent||D.material.isShaderMaterial||(D.receiveShadow=!0,D.castShadow||=I)}),v&&w.entityId&&g.push({item:w,object:L})}function b(w,L,v){let I=w.night===!0,D=Ny.has(w.condition),O=I?"night":D?"cloud":"day";if(O!==x&&(n.color.set(I?"#a8b8f5":D?"#dce6f1":"#fff4e5"),n.groundColor.set(I?"#5b536e":"#998291"),n.intensity=I?.75:D?1.33:1.12,s.color.set(I?"#a7b8ed":D?"#e9eff9":"#fff0d4"),s.intensity=I?.28:D?.86:2.14,r.intensity=I?.12:.23,s.shadow.intensity=I?.65:D?.39:.84,v.color.set(I?"#97a5c5":D?"#ccd6c6":"#f4f1d8"),t.background.set(I?"#343951":"#c0cbb4"),x=O,m=void 0),m!==L){let z=g.flatMap(({item:X,object:F})=>{let V=L[X.id];if(V?.state!=="on")return[];let J=Number.isFinite(V.attributes?.brightness)?Le.clamp(V.attributes.brightness/255,0,1):1;return J>0?[{object:F,power:J,color:V.attributes?.rgb_color}]:[]}).sort((X,F)=>F.power-X.power);for(let[X,F]of d.entries()){let V=z[X];if(!V){F.intensity=0;continue}let{object:J,power:Q,color:pt}=V;Array.isArray(pt)&&pt.length===3&&pt.every(Number.isFinite)?(M.setRGB(...pt.map(ct=>Le.clamp(ct/255,0,1)),Ue),F.color.copy(M)):F.color.set("#ffd5a2"),F.position.copy(J.root.position),F.position.y+=Math.max(18,J.anchorY-9),F.intensity=Q*(I?2350:1250)}m=L}p&&(i.shadowMap.needsUpdate=!0,p=!1)}return{markStructure:R,register:S,update:b,dispose:()=>s.shadow.dispose()}}var ii=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),js=Object.freeze({default:ii("Default",0,0),top:ii("Top down",0,0),high:ii("High angle",0,15),dollhouse:ii("Dollhouse",2,30),corner:ii("Corner",45,40),north:ii("From north",180,42),east:ii("From east",90,42),south:ii("From south",0,42),west:ii("From west",270,42),free:ii("Free view",0,25)});function qf(i,t=!1){let e=Object.entries(js).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function xi(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(js,t.preset)?t.preset:"top",n=js[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?Le.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?Le.clamp(t.zoom,.6,2.5):n.zoom}}function Yf(i){let t=xi(i);return{...t,preset:"free",tilt:t.tilt||js.free.tilt}}function ou(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:xi(i)}function au(i){return xi({...ou(i),preset:"default"})}function Zf(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>ou(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return ou(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function cu(i,t,e,n,s="top"){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let r=xi(s),o=Le.degToRad(r.azimuth),a=Le.degToRad(r.tilt),c=new W((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),l=new W(Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a));i.up.set(-Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)),i.position.copy(c).addScaledVector(l,1900),i.lookAt(c),i.updateMatrixWorld(!0);let u=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),f=new fn,h=new W;for(let M of[t.minX-37,t.maxX+37])for(let R of[t.minZ-53,t.maxZ+36])for(let S of[-111,u])f.expandByPoint(h.set(M,S,R).applyMatrix4(i.matrixWorldInverse));let d=e/n,g=Math.max((f.max.x-f.min.x)/2,(f.max.y-f.min.y)/2*d),x=g/d,m=(f.min.x+f.max.x)/2,p=(f.min.y+f.max.y)/2;return i.left=m-g,i.right=m+g,i.bottom=p-x,i.top=p+x,i.zoom=r.zoom,i.updateProjectionMatrix(),r}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Dining table",icon:"\u25B0",w:165,h:108,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=p=>typeof p=="string"&&p.startsWith("ui"),o=p=>String(p??"").toLowerCase(),a=p=>o(p).split(".")[0],c=p=>typeof p=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(p),l=p=>p.type==="window"?"wall":p.mount||"floor";function u(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function f(p,M,R){return!(!p||!M||!R||p.type===R.type||s.has(p.type)||r(p.type)||s.has(R.type)||r(R.type)||l(M)!==l(R)||p.entityId&&!h(p.entityId,R))}function h(p,M){return!c(p)||typeof M?.type!="string"||r(M.type)||M.type==="stairs"||M.type==="window"?!1:M.type==="cameraThumbnail"?a(p)==="camera":M.type==="garageDoor"?a(p)==="cover":a(p)!=="camera"}function d(p,M){let R=a(p.entity_id),S=o(p.name+" "+p.entity_id),b={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},w=v=>{if(v.type==="controlZone")return!0;if(R==="camera")return v.type==="cameraThumbnail";if(R==="cover")return/garage/.test(S)&&v.type==="garageDoor";if(R==="climate")return v.type==="thermostat";if(R==="binary_sensor"&&/presence|occupancy/.test(S))return v.type==="presenceSwitch";if(b[R]?.includes(v.group)||/humidifier/.test(S)&&v.type==="humidifier"||/purifier/.test(S)&&v.type==="airPurifier")return!0;if(R==="switch"){if(/fan/.test(S))return v.group==="fans"||v.type==="windowFan";if(/light|lamp/.test(S))return v.group==="lighting"}return!1},L=M.filter(v=>h(p.entity_id,v));return{recommended:L.filter(w),available:L}}function g(p){return p&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(p.type)&&!r(p.type)}function x(p,M,R,S){if(!["w","h"].includes(M)||!Number.isFinite(R))return null;let b=p.type==="cameraThumbnail"?40:12,w=p.type==="cameraThumbnail"||c(p.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!S)return{[M]:Math.min(w[M],Math.max(b,R))};let L=Math.min(w.w/p.w,w.h/p.h),v=Math.min(L,Math.max(b/p.w,b/p.h)),I=Math.min(L,Math.max(v,R/p[M]));return{w:Math.round(p.w*I*10)/10,h:Math.round(p.h*I*10)/10}}function m(p,M,R){let S=p.ownerDocument,b=(Tt,It,jt={})=>{let $t=S.createElement(Tt);It&&($t.textContent=It);for(let[Kt,ut]of Object.entries(jt))$t.setAttribute(Kt,ut);return $t},w=b("dialog","",{class:"model-library","aria-label":"Objects and models"}),L=b("header"),v=b("h2","Objects & models"),I=b("button","Close",{type:"button"});L.append(v,I);let D=b("div","",{class:"model-library-filters"}),O=b("select","",{"aria-label":"Object library section"});for(let[Tt,It]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])O.append(b("option",It,{value:Tt}));let z=b("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});D.append(O,z);let X=b("div","",{class:"model-library-context"}),F=b("p","",{role:"status",class:"model-library-status"}),V=b("div","",{class:"model-library-list"});w.append(L,D,X,F,V);let J=b("style");J.textContent=`
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
    `,p.append(J,w);let Q,pt=!1,it=(Tt,It)=>{let jt=b("button",Tt,{type:"button"});return jt.addEventListener("click",It),jt};function ct(Tt){Q=Tt,pt=!1,O.value="catalog",z.value="",ft(),z.focus()}function ft(){let{templates:Tt,paletteGroups:It}=u(),jt=new Map(Tt.map(nt=>[nt.type,nt])),$t=new Map(It),{items:Kt,entities:ut}=M(),xt=o(z.value).trim(),Rt=(...nt)=>xt.split(/\s+/).every(lt=>o(nt.join(" ")).includes(lt)),bt=[];if(X.replaceChildren(),Q&&(X.append(b("strong",Q.item?.name||Q.entity?.name||Q.entity?.entity_id)),Q.entity&&X.append(it(pt?"Suggested models":"All compatible models",()=>{pt=!pt,ft()})),X.append(it("Cancel mapping",()=>{O.value=Q.entity?"devices":"placed",Q=void 0,z.value="",ft()}))),O.value==="placed")for(let nt of Kt){let lt=jt.get(nt.type);if(!Rt(nt.name,lt?.label,nt.type,nt.entityId))continue;let Dt=[nt.w,nt.h,nt.modelHeight].filter(Number.isFinite).join(" \xD7 "),ot=[lt?.label||nt.type,Dt&&Dt+" plan px",nt.entityId].filter(Boolean).join(" \xB7 "),mt=[it("Edit",()=>R({kind:"edit",itemId:nt.id}))];Tt.some(vt=>f(nt,lt,vt))&&mt.push(it("Change model",()=>ct({item:nt}))),bt.push([nt.name||lt?.label||nt.type,ot,mt])}else if(O.value==="devices"){let nt=new Map;for(let lt of Kt)lt.entityId&&!nt.has(lt.entityId)&&nt.set(lt.entityId,lt);for(let lt of ut){if(!c(lt.entity_id)||!Rt(lt.name,lt.entity_id,lt.area))continue;let Dt=nt.get(lt.entity_id),ot=[lt.entity_id,lt.area,Dt?"On plan \xB7 "+Dt.name:"Available to map"].filter(Boolean).join(" \xB7 ");bt.push([lt.name||lt.entity_id,ot,[Dt?it("Edit mapped object",()=>R({kind:"edit",itemId:Dt.id})):it("Choose model",()=>ct({entity:lt}))]])}}else{let nt=Tt;if(Q?.item&&(nt=Tt.filter(lt=>f(Q.item,jt.get(Q.item.type),lt))),Q?.entity){let lt=d(Q.entity,Tt);nt=pt?lt.available:lt.recommended}for(let lt of nt){let Dt=$t.get(lt.group)||lt.group;if(!Rt(lt.label,lt.type,lt.tags,Dt))continue;let ot=Q?.item?{kind:"replace",itemId:Q.item.id,modelId:lt.type}:{kind:"place",modelId:lt.type,...Q?.entity?{entityId:Q.entity.entity_id}:{}};bt.push([lt.label,Dt+" \xB7 "+lt.w+" \xD7 "+lt.h+" plan px",[it(Q?"Use model":"Place",()=>R(ot))]])}}V.replaceChildren();for(let[nt,lt,Dt]of bt.slice(0,48)){let ot=b("div","",{class:"model-library-row"}),mt=b("div");mt.append(b("strong",nt),b("small",lt));let vt=b("div","",{class:"model-library-actions"});vt.append(...Dt),ot.append(mt,vt),V.append(ot)}F.textContent=bt.length>48?"Showing 48 of "+bt.length+". Search to narrow the list.":bt.length?bt.length+(bt.length===1?" result":" results"):O.value==="devices"&&!ut.length?"Connect to Home Assistant to list devices.":"No matches."}return O.addEventListener("change",()=>{Q=void 0,z.value="",ft()}),z.addEventListener("input",ft),I.addEventListener("click",()=>w.close()),{open(Tt="placed"){Q=void 0,pt=!1,O.value=Tt,z.value="",ft(),w.open||w.showModal()},get isOpen(){return w.open},close(){w.open&&w.close()}}}i.RoomcraftModels=Object.freeze({catalog:u,canMap:h,canReplace:f,suggestions:d,supportsHeight:g,resizeFootprint:x,mount:m,handoffKey:n})})(typeof window>"u"?globalThis:window);function Jf(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new fn().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var Uy=24,Fy=.32,Oy=125,By=1.17,$f=[{sweater:"#d77465",trim:"#ffe3bb",skin:"#d9a57e",hair:"#63453b"},{sweater:"#67a396",trim:"#d6efe4",skin:"#efbc92",hair:"#7c5544"},{sweater:"#8d80b4",trim:"#f0daf1",skin:"#a96e52",hair:"#4d3940"},{sweater:"#d4a345",trim:"#fff0bc",skin:"#e6ab82",hair:"#856247"},{sweater:"#6198c1",trim:"#def4ef",skin:"#c99065",hair:"#493744"},{sweater:"#bd779b",trim:"#f7dce0",skin:"#f2c5a3",hair:"#9d664e"}];function zy(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return(t>>>0)%$f.length}function ro(i,t=.12){return new bn({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function ky(i,t,e){let n=t+i.palette*1.43,s=!e&&n%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(n*1.5)*.047);for(let r of i.eyes)r.scale.y=s?.15:.87}function Kf(i,t=()=>0){let e=new ue;e.name="tracked-people",i.add(e);let n,s=new Map,r=[],o=!1,a=!1,c=0;function l(){return{sphere:new an(1,12,8),disc:new Er(1,24).rotateX(-Math.PI/2),groundRing:new Nr(14.2,16.5,28).rotateX(-Math.PI/2),palette:$f.map(x=>Object.fromEntries(Object.entries(x).map(([m,p])=>[m,ro(p)]))),ink:ro("#423c50",.09),cheek:ro("#d78383"),shoes:ro("#514656"),white:ro("#fff1dc"),shadow:new je({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new je({color:"#fbe9cc",transparent:!0,opacity:.74,depthWrite:!1})}}function u(){n??=l();let x=new ue,m=new ue,p=new ue,M=[],R=[],S=[],b=[],w=[],L=[],v=[];e.add(x),x.add(m),m.scale.setScalar(By);let I=(F,V,J,Q,pt,it,ct,ft)=>{let Tt=new pe(n.sphere,V);return Tt.position.set(J,Q,pt),Tt.scale.set(it,ct,ft),F.add(Tt),Tt},D=(F,V,...J)=>F.push(I(V,n.white,...J)),O=new pe(n.disc,n.shadow);O.position.y=.13,O.scale.set(16,1,14),x.add(O);let z=new pe(n.groundRing,n.groundMark);z.position.y=.26,x.add(z),D(M,m,0,15,0,7.1,8.3,5.4),D(b,m,0,20.7,2.4,5.8,2.2,4),D(b,m,.8,14.4,5.2,2.4,2,.65);for(let F of[-1,1]){let V=new ue;V.position.set(F*3.4,10.3,.1),m.add(V),I(V,n.ink,0,-3.2,0,2.65,4.6,2.6),I(V,n.shoes,0,-8.15,1.25,3.1,2.1,4),I(V,n.white,0,-8.8,3.25,2.75,1.1,2),v.push(V);let J=new ue;J.position.set(F*6.25,19.1,0),m.add(J),D(M,J,F*.9,-3.7,.15,2.75,5.3,2.7),D(R,J,F*1.3,-7.8,.5,2.3,2.6,2.2),L.push(J)}p.position.set(0,27.2,0),m.add(p),D(S,p,0,1.3,-1.65,9.2,9.65,8.6),D(R,p,0,0,1.9,8.65,8.45,7.5),D(S,p,-3,7,4.25,5.75,3.65,4.35),D(S,p,3.1,8.5,.5,4.7,2.6,5.15);for(let F of[-1,1])D(R,p,F*8.2,-.15,1.1,1.85,2.4,1.75),w.push(I(p,n.ink,F*3,1.2,8.95,.85,.87,.52)),I(p,n.cheek,F*5.05,-1.25,7.95,1.18,.62,.52);I(p,n.ink,0,-1.95,9.15,1.38,.45,.38);let X={root:x,body:m,head:p,arms:L,legs:v,eyes:w};return{character:X,setStyle(F){let V=n.palette[F];X.palette=F;for(let J of M)J.material=V.sweater;for(let J of R)J.material=V.skin;for(let J of S)J.material=V.hair;for(let J of b)J.material=V.trim}}}function f(x,m){return x.duration>0?Le.clamp((m-x.start)/x.duration,0,1):1}function h(x,m=o){c=Number.isFinite(x)?x:c,a=m||o;for(let p of s.values()){let{character:M}=p.model,R=a?1:f(p,c),S=Le.lerp(p.fromX,p.x,R),b=Le.lerp(p.fromZ,p.z,R),w=t(S,b);if(M.root.visible=Number.isFinite(w),!M.root.visible)continue;M.root.position.set(S,w,b),M.root.rotation.y=p.heading;let L=p.walking&&R<1&&!a,v=L?Math.sin(R*Math.PI*2)*.38:0;M.body.position.y=L?Math.sin(R*Math.PI)*.85:0;for(let I=0;I<2;I++){let D=v*(I===0?-1:1);M.arms[I].rotation.x=-D,M.legs[I].rotation.x=D}ky(M,c,a)}}function d(x,m,{reduceMotion:p=!1}={}){o=p;let M=Number.isFinite(m)?m:c,R=new Map;for(let S of Array.isArray(x)?x:[])if(!(typeof S?.id!="string"||!S.id||S.id.length>256||!Number.isFinite(S.x)||!Number.isFinite(S.y)||R.has(S.id)||!Number.isFinite(t(S.x,S.y)))&&(R.set(S.id,S),R.size===Uy))break;for(let[S,b]of s)R.has(S)||(b.model.character.root.visible=!1,r.push(b.model),s.delete(S));for(let[S,{x:b,y:w}]of R){let L=s.get(S);if(L){if(L.x!==b||L.z!==w){let v=p?1:f(L,M),I=Le.lerp(L.fromX,L.x,v),D=Le.lerp(L.fromZ,L.z,v),O=Math.hypot(b-I,w-D),z=O>1?Math.atan2(b-I,w-D):L.heading,X=!p&&O<=Oy?Fy:0;Object.assign(L,{fromX:I,fromZ:D,x:b,z:w,heading:z,start:M,duration:X,walking:O>2})}}else{let v=r.pop()??u();v.setStyle(zy(S)),s.set(S,{model:v,fromX:b,fromZ:w,x:b,z:w,heading:0,start:M,duration:0})}}h(M,p)}function g(){if(e.removeFromParent(),!!n){for(let x of[n.ink,n.cheek,n.shoes,n.white,n.shadow,n.groundMark])x.dispose();for(let x of n.palette)for(let m of Object.values(x))m.dispose();n.sphere.dispose(),n.disc.dispose(),n.groundRing.dispose(),e.clear(),r.length=0,s.clear(),n=void 0}}return{setTracks:d,render:h,dispose:g,get hasMotion(){return!a&&s.size>0}}}var Ec=Math.PI/180,fu=14,od=56,Vy=21,_i=-111,In=-108,ad=14,Gy=28,oo=28,jf={minX:0,maxX:1536,minZ:0,maxZ:1024},lu={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},uu={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},Hy=new Set(["cloudy","partlycloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Wy=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),Xy=new Set(["snowy","snowy-rainy","hail"]),Qf={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42},qy=new Set(["waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]);function wc(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Qs(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function cd(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function ld(i,t,e,n){let s=i.some(o=>Qs(o,e-t.dz*23,n+t.dx*23));return i.some(o=>Qs(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function Yy(i,t,e){if(!Object.hasOwn(Qf,e.type))return null;let n=cd(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):ld(i,s,r,o),l=(fu/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Qf[e.type],od-8)}}function td(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function ed(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function Zy(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function nd(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function Mc(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function ud(i){return Object.hasOwn(uu,i.finish)?uu[i.finish]:uu.graphite}function hu(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle),a=n*r+s*o,c=-n*o+s*r;if(Math.abs(a)>i.item.w/2+5||Math.abs(c)>i.item.h/2+5)return null;let l=Le.clamp(c/i.item.h+.5,0,1);return In-In*l}function Sc(i,t,e){return Qs(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?Le.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=fu/2})}function Jy(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(f=>Sc(f,n,s)),o=t.some(f=>so(f)&&Sc(f,n,s)&&Sc(f,i.x1,i.y1)&&Sc(f,i.x2,i.y2)),a=r?0:_i,c=a;if(!o)for(let f of e){let h=hu(f,i.x1,i.y1),d=hu(f,i.x2,i.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=ud(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/Gy)))}}function du(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(b=>b?.points?.length>=3&&b.points.every(w=>Number.isFinite(w?.x)&&Number.isFinite(w?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(b=>!so(b)):e,s=i.walls.map(td).filter(Boolean),r=s.filter(b=>b.kind!=="fence"),o=i.items.filter(b=>typeof b?.id=="string"&&typeof b.type=="string"&&[b.x,b.y,b.w,b.h].every(Number.isFinite)&&b.w>0&&b.h>0),a=nd(),c=nd(),l=(b,w)=>Mc(a,b,w);for(let b of e)for(let w of b.points)l(w.x,w.y);for(let b of s)l(b.x1,b.y1),l(b.x2,b.y2);for(let b of n)for(let w of b.points)Mc(c,w.x,w.y);for(let b of r)Mc(c,b.x1,b.y1),Mc(c,b.x2,b.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:jf},f=new Map(r.map(b=>[b.id,b])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(b=>f.has(b))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([b,w])=>({x:b,y:w})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([b,w])=>({x:b,y:w})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(b=>h?!(b.id==="w3"&&ed(b,[400,408,342,468]))&&!(b.id==="w7"&&ed(b,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:b,x2:w,z1:L}=h.recess;if(w>b){let v=[[b,f.get("w12").y2,b,L],[b,L,w,L]];for(let[I,D]of v.entries()){if(d.some(J=>Zy(J,D)))continue;let[O,z,X,F]=D,V=td({id:`reference-recess-${I}`,x1:O,y1:z,x2:X,y2:F});V&&d.push(V)}}}let g=new Map;for(let b of o.filter(w=>w.type==="window")){let w=cd(d,b.x,b.y,(b.rotation||0)*Ec);if(!w||w.distance>27)continue;let{wall:L,t:v,centerX:I,centerZ:D}=w,O=Math.max(1,v-b.w/2+1),z=Math.min(L.length-1,v+b.w/2-1);if(z-O<14)continue;L.openings.push({start:O,end:z});let X=ld(n,L,I,D),F=L.angle+(X<0?Math.PI:0),V=(O+z)/2;g.set(b.id,{x:L.x1+V*L.dx,z:L.y1+V*L.dz,angle:F,window:{...b,w:z-O+2,rotation:F/Ec}})}let x=o.filter(b=>b.type==="garageDoor"),m=o.map(b=>{let w=b.type==="cameraThumbnail"&&x.some(V=>av(b,V))?_i:dd(b.type),L=b.type==="controlZone"&&(b.visualKind==="window"||b.entityId?.startsWith("cover.")),v=g.get(b.id)??Yy(n,d,b);if(L){let V=52;for(let J of g.values()){let Q=Math.hypot(J.x-b.x,J.z-b.y);Q<V&&(v=J,V=Q)}}let I=v?.x??b.x,D=v?.z??b.y,O=v?.angle??(Number.isFinite(b.rotation)?b.rotation*Ec:0),z=b.type==="stairs"?1536:300,X=Math.min(z,(Math.abs(Math.cos(O))*b.w+Math.abs(Math.sin(O))*b.h)/2),F=Math.min(z,(Math.abs(Math.sin(O))*b.w+Math.abs(Math.cos(O))*b.h)/2);return l(I-X,D-F),l(I+X,D+F),{item:b,x:I,z:D,baseY:w,angle:O,window:v?.window,mountY:v?.mountY,isBlind:L}});for(let b of d)b.openings.sort((w,L)=>w.start-L.start||w.end-L.end);let p=m.filter(({item:b})=>b.type==="stairs").map(b=>{let{item:w,x:L,z:v,angle:I}=b,D=Number.isInteger(w.steps)&&w.steps>=2&&w.steps<=40?w.steps:ad,O=Math.min(46,Math.max(12,w.w*.47)),z=-w.h/2-O;for(let X of[-w.w/2,w.w/2])l(L+X*Math.cos(I)-z*Math.sin(I),v+X*Math.sin(I)+z*Math.cos(I));return{...b,steps:D,apronDepth:O}}),M=s.filter(b=>b.kind==="fence").map(b=>Jy(b,e,p)),R=Gf(e,h,t),S=Wf(d.map(b=>({...b,palette:ud(b)})),fu,od,Vy);return Number.isFinite(a.minX)||Object.assign(a,jf),{rooms:e,walls:d,fences:M,stairs:p,placements:m,bounds:a,houseBounds:u,reference:h,floorStructure:R,wallStructure:S,editableStructure:t}}function id(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function pu([i,...t]){let e=id(new vn,i);return e.holes=t.map(n=>id(new Ki,n)),e}function $y(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=wc(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,x=f+3+c()*27,m=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+m/2,x+c()*2-1,g+m,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new Os(n);return l.colorSpace=Ue,l.wrapS=l.wrapT=Zi,l}function hd(i){let t=new Map,e=new ve,n=new Tn,s=new W,r=new W(0,1,0),o=new W(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new ts({color:d})),a.get(d));function l(d,g,x,m,p,M=0){n.setFromAxisAngle(r,M),e.compose(s.set(x,m,p),n,o),d.applyMatrix4(e);let R=c(g);t.has(R)||t.set(R,[]),t.get(R).push(d)}function u(d,g,x,m,p,M,R,S=0){d>0&&g>0&&x>0&&l(new Fe(d,g,x),m,p,M,R,S)}function f(d,g,x,m,p,M,R){let S=new an(1,9,6);S.scale(d,g,x),l(S,m,p,M,R)}function h(){for(let[d,g]of t){let x=ki(g);if(!x){for(let m of g)i.add(new pe(m,d));continue}i.add(new pe(x,d));for(let m of g)m.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function Ky(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(lu,r)?r:"oak";if(!s.has(a)){let c=lu[a],l=$y(n,c,141+Object.keys(lu).indexOf(a)*977);s.set(a,new ts({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Ii(pu(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new pe(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)sd(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)sd(t,r,_i-1,-22,"#a18e84",!0)}function jy(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Ve(e,1))}return i}function sd(i,t,e,n,s,r=!1){let o=new hi(pu(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(jy(o),s,0,e,0)}function Qy(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new Ee;return r.setAttribute("position",new se(e,3)),r.setAttribute("uv",new se(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function rd(i,t){let e=new Ii(pu(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function tv(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(rd(o,!1),r,0,s,0);for(let o of e.bottom)i.add(rd(o,!0),r,0,n,0);e.sides.length&&i.add(Qy(e.sides,s-n),r,0,n,0)}}function ev(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:g}=n,x=l-c,m=new Fe(Math.hypot(u,x),5,7);m.rotateZ(Math.atan2(x,u)),i.add(m,d,(s+o)/2,(c+l)/2+oo,(r+a)/2,-f);for(let p=0;p<=h;p++){let M=p/h,R=Le.lerp(s,o,M),S=Le.lerp(r,a,M),b=Le.lerp(c,l,M),w=[R,b,S].map(L=>Math.round(L*1e3)).join(",");e.has(w)||(e.add(w),i.box(5,oo,5,g,R,b+oo/2,S,-f))}}}function fd(i,t,e,n,s=0,r=0){let o=e/n,a=-In/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let f=r-e/2+o*u,h=u===n-1?0:In+(u+1)*a,d=h-3;i.box(t,d-_i,o,"#a98075",s,(_i+d)/2,f+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,f+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,f+l/2)}}function nv({item:i,steps:t,apronDepth:e}){let n=new ue,s=hd(n);fd(s,i.w,i.h,t);let r=In-_i;return s.box(i.w,r,e,"#c8b79e",0,_i+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:In/2}}function iv(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=ad,u=r-s,f=u/l,h=In,d=-h/l;fd(i,a,u,l,c,(s+r)/2);for(let S=0;S<l;S++){let b=s+f*(S+.5),w=h+(S+1)*d;i.box(5,24,5,"#9f8183",e+4,w+12,b)}let g=f*(l-1),x=d*(l-1),m=new Fe(7,5,Math.hypot(g,x)+5);m.rotateX(-Math.atan2(x,g)),i.add(m,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[p,M]=o,R=Math.max(2,Math.ceil((M.x-p.x)/28));i.box(M.x-p.x,5,7,"#896e79",(M.x+p.x)/2,28,p.y);for(let S=0;S<=R;S++)i.box(5,28,5,"#9f8183",p.x+(M.x-p.x)*S/R,14,p.y)}function sv(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=wc(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new Os(t);return s.wrapS=s.wrapT=Zi,s.repeat.set(15,10),s.colorSpace=Ue,s.anisotropy=4,s}function rv(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,c=wc(150741);if(!t.editableStructure){let u=Math.min(90,o*.18),f=t.reference?t.reference.left+u/2:e+u/2;i.box(u,4,115,"#c7baa4",f,-109,s-88);for(let h=0;h<5;h++)i.box(u*.85,1.8,13,"#dbceba",f,-106,s-137+h*20)}let l=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,f]of l){let h=e+u*o,d=s+f*a,g=21+c()*24;i.ball(g*.94,9,g*.67,"#6d886a",h,-104,d),i.ball(g*.82,g*.57,g*.69,"#819b76",h+3,-98,d);for(let x=0;x<8;x++){let m=x*2.39996,p=(.2+c()*.5)*g,M=g*(.28+c()*.2),R=["#94ad7f","#a6ba88","#8da878","#bad09c"][x%4];i.ball(M*1.15,M*.8,M,R,h+Math.cos(m)*p,-93+12*c(),d+Math.sin(m)*p*.75)}for(let x=0;x<5;x++){let m=x%2?"#e6c4b1":"#fae6a4",p=h+(c()-.5)*g*1.14,M=d+g*(.62+c()*.43);i.ball(2.3,4.6,2.3,"#819765",p,-106,M),i.ball(3.9,1.8,3.3,m,p,-101.5,M),i.ball(1.2,.9,1.2,"#cb9c57",p,-100.3,M)}}}function ov(i,t,e){let{minX:n,maxX:s,minZ:r}=t.houseBounds,o=wc(2912),a=t.bounds,c=new ue,l=new ts({color:"#f8ebdf",transparent:!0,opacity:.9}),u=new an(1,12,8),f=s-n;for(let[D,O]of[.19,.53,.82].entries()){let z=n+f*O,X=r-55-D%2*34;for(let F=0;F<3;F++){let V=new pe(u,l);V.scale.set(32+o()*21,15+o()*10,25+o()*10),V.position.set(z+F*31,27+5*(F===1),X),c.add(V)}}i.add(c);let h=new ue;h.position.set(n+f*.77,21,r-70);let d=new pe(new an(17,16,10),new je({color:"#ffe2a1"}));h.add(d);let g=new ue,x=new pe(d.geometry,new je({color:"#f9e5c6"}));g.add(x);let m=new pe(d.geometry,new je({color:"#7d7c97"}));m.position.set(4,4,1),m.scale.setScalar(.96),g.add(m),h.add(g),i.add(h);let p=[],M=t.reference?.recess,R=(D,O)=>!(M&&D>=M.x1&&D<=M.x2&&O>=M.z1&&O<=M.z2)&&!t.rooms.some(z=>(!t.editableStructure||!so(z))&&Qs(z,D,O));for(let D=0;D<190;D++){let O=a.minX-70+(a.maxX-a.minX+140)*o(),z=a.minZ-70+(a.maxZ-a.minZ+140)*o();R(O,z)&&p.push({x:O,z,phase:o()*180})}let S=new Float32Array(p.length*6),b=new Float32Array(p.length*3),w=new Ee,L=new Ee;w.setAttribute("position",new Ve(S,3).setUsage(cc)),L.setAttribute("position",new Ve(b,3).setUsage(cc));let v=new vr(w,new Us({color:"#cce5ef",transparent:!0,opacity:.66})),I=new br(L,new Fs({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return v.frustumCulled=I.frustumCulled=!1,i.add(v,I),(D,O,z)=>{let{night:X=!1,condition:F="",moonPhase:V="",daylightKnown:J=!0}=O,Q=z?0:D;c.visible=e&&Hy.has(F),c.position.x=Math.sin(Q*.16)*(F.includes("windy")?48:23),d.visible=e&&J&&!X,g.visible=e&&J&&X&&qy.has(V),m.visible=V!=="full_moon";let pt=V.startsWith("waxing")||V==="first_quarter",it=V.endsWith("quarter");if(m.position.x=(pt?-1:1)*(it?8:V.endsWith("gibbous")?14:5),v.visible=Wy.has(F),I.visible=Xy.has(F),v.visible||I.visible){for(let[ct,ft]of p.entries()){let Tt=65-(ft.phase+Q*150)%170,It=65-(ft.phase+Q*20)%170,jt=ct*6;S.set([ft.x,Tt,ft.z,ft.x-4,Tt+22,ft.z+3],jt),b.set([ft.x+Math.sin(Q+ct)*6,It,ft.z],ct*3)}w.attributes.position.needsUpdate=v.visible,L.attributes.position.needsUpdate=I.visible}}}function dd(i){return i==="garageDoor"?_i:0}function av(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*Ec,r=Math.cos(s),o=Math.sin(s);return Cf(t,e*r+n*o,-e*o+n*r)}function cv(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35){let c=e.get(n.item.id);return c?c.root.position.y+(c.anchorY??0)*c.root.scale.y:0}}return 0}function lv(i,t,e,n){let s=new W,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:g})=>o([[l,d,u],[l,d+oo,u],[f,g,h],[f,g+oo,h]])),c=i.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let g=Math.cos(f),x=Math.sin(f),m=[];for(let p of[-h.w/2,h.w/2])for(let[M,R]of[[-h.h/2-d,In],[h.h/2,0]])m.push([l+p*g-M*x,R,u+p*x+M*g]);return o(m)});return[...a,...c]}function uv(i){let t=i.floorStructure.footprint.map(e=>e.map(n=>({points:n.map(([s,r])=>({x:s,y:r}))})));return(e,n)=>{if(t.some(([s,...r])=>Qs(s,e,n)&&!r.some(o=>Qs(o,e,n))))return 0;for(let s of i.stairs){let r=hu(s,e,n);if(r===null)continue;let o=Math.min(s.steps,Math.floor(s.steps*(r-In)/-In)+1);return In+-In/s.steps*o}return null}}function pd(i,t,{showSkyArt:e=!0}={}){let n=du(t),s=new dc({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});s.resetState();let r=new xr;r.background=new te("#d7dfcd");let o=new Di(-800,800,450,-450,1,4400),{minX:a,maxX:c,minZ:l,maxZ:u}=n.bounds,f=new bn({color:"#e8e8d2",map:sv(i.ownerDocument),roughness:.95}),h=new pe(new fi(6200,4200),f);h.rotation.x=-Math.PI/2,h.position.set((a+c)/2,_i,(l+u)/2),r.add(h);let d=hd(r);rv(d,n),iv(d,n),Ky(r,d,n,i.ownerDocument),tv(d,n),ev(d,n.fences),d.finish();let g=r.children.filter(bt=>bt.isMesh),x=Xf(s,r,n.bounds);x.markStructure();let m=ov(r,n,e),p=uv(n),M=Kf(r,p),R=new Map,S=new Map,b=new Map,w=new Map(n.stairs.map(bt=>[bt.item.id,bt]));for(let bt of n.placements){let{item:nt,x:lt,z:Dt,baseY:ot,angle:mt,window:vt,mountY:Mt,isBlind:wt}=bt,zt=nt.type==="window"&&vt?vt:nt,Ut=w.get(nt.id),Vt=Ut?nv(Ut):If(zt,{window:wt?vt:void 0,mountY:Mt})??Ef(zt);if(Vt){let kt=Jf(nt,Vt.root);Vt.root.position.set(lt,ot+kt,Dt),Vt.root.rotation.y=-mt,r.add(Vt.root),S.set(nt.id,Vt),nt.type==="garageDoor"&&b.set(Vt.root,nt.id),x.register(nt,Vt)}R.set(nt.id,{x:lt,z:Dt,baseY:ot,object:Vt})}let L={...n.bounds};for(let bt of n.placements){let nt=S.get(bt.item.id);if(nt&&(nt.root.position.y+=cv(n,bt,S),nt.root.scale.y!==1)){let{max:lt}=new fn().setFromObject(nt.root);Number.isFinite(lt.y)&&(L.maxY=Math.max(L.maxY??92,lt.y))}}let v=[...S.values()].filter(bt=>bt.ambientMotion),I=new W,D=!1,O=0,z=0,X=xi(),F=new zr,V=new _n(new W(0,1,0),0),J=new W,Q=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function pt(bt,nt){if(D||bt<1||nt<1||bt===O&&nt===z)return;O=bt,z=nt;let lt=i.ownerDocument.defaultView?.devicePixelRatio||1;s.setPixelRatio(Math.min(lt,1.5,Math.sqrt(27e5/(bt*nt)))),s.setSize(bt,nt,!1),X=cu(o,L,bt,nt,X)}function it(bt){return X=xi(bt),!D&&O>0&&z>0&&(X=cu(o,L,O,z,X)),ct()}function ct(){return{...X}}function ft(bt,nt){return D||!Number.isFinite(bt)||!Number.isFinite(nt)||O<=0||z<=0?!1:(F.setFromCamera(new At(bt/O*2-1,1-nt/z*2),o),!0)}function Tt(bt,nt,lt){return ft(bt,nt)?(V.constant=-dd(lt),F.ray.intersectPlane(V,J)?{x:J.x,y:J.z}:null):null}function It(bt,nt){if(!b.size||!ft(bt,nt))return null;let lt=[];for(let ot of b.keys())ot.traverseVisible(mt=>{mt.isMesh&&lt.push(mt)});let Dt=F.intersectObjects(lt,!1)[0];if(!Dt||F.intersectObjects(g,!1).some(ot=>ot.distance<Dt.distance-.01))return null;for(let ot=Dt.object;ot;ot=ot.parent)if(b.has(ot))return b.get(ot);return null}function jt(bt=0,nt={},lt={},{animateTelemetry:Dt=!0}={}){if(D||O<1||z<1)return;x.update(lt,nt,f);let ot=lt.reduceMotion===!0,mt=!ot&&Number.isFinite(bt)?bt:0,vt=Dt?mt:0;m(vt,lt,ot||!Dt);for(let[Mt,wt]of S){let zt=nt[Mt]??Q,Ut=zt.position;Ut&&Number.isFinite(Ut.x)&&Number.isFinite(Ut.y)&&(wt.root.position.x=Ut.x,wt.root.position.z=Ut.y),wt.animate?.(zt,wt.ambientMotion?mt:vt)}M.render(bt,ot),s.render(r,o)}function $t(bt,nt,lt){D||M.setTracks(bt,nt,lt)}function Kt(bt){if(!(D||O<1||z<1||!v.length&&!M.hasMotion)){for(let nt of v)nt.animate(Q,bt);M.render(bt),s.render(r,o)}}function ut(bt){let nt=R.get(bt);if(!nt||O<1||z<1)return null;let{x:lt,z:Dt,baseY:ot,object:mt}=nt;return mt?(I.set(mt.anchorOffset?.x||0,mt.anchorY||0,mt.anchorOffset?.z||0),mt.root.localToWorld(I)):I.set(lt,ot+6,Dt),I.project(o),{x:(I.x+1)/2,y:(1-I.y)/2}}function xt(){if(D)return;D=!0,M.dispose();let bt=new Set,nt=new Set,lt=new Set;r.traverse(Dt=>{Dt.geometry&&bt.add(Dt.geometry);for(let ot of Array.isArray(Dt.material)?Dt.material:[Dt.material])if(ot){nt.add(ot);for(let mt of Object.values(ot))mt?.isTexture&&lt.add(mt)}});for(let Dt of lt)Dt.dispose();for(let Dt of bt)Dt.dispose();for(let Dt of nt)Dt.dispose();x.dispose(),s.dispose()}return{resize:pt,render:jt,anchor:ut,setView:it,getView:ct,projectToPlan:Tt,pickGarage:It,exteriorClearance:()=>lv(n,o,O,z),dispose:xt,hasAmbientMotion:v.length>0,renderAmbient:Kt,setPeople:$t,canPlacePerson:(bt,nt)=>Number.isFinite(p(bt,nt)),get hasPeopleMotion(){return M.hasMotion}}}var md=.35,Tc=7.5,hv=8;function gd(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let m=t();return m?.preset==="free"?m:null},o=()=>{let[m,p]=s.values();return Math.hypot(m.x-p.x,m.y-p.y)};function a(m,p){let M=xi({...m,...p});(M.azimuth!==m.azimuth||M.tilt!==m.tilt||M.zoom!==m.zoom)&&e(M)}function c(m){i.hasPointerCapture(m)&&i.releasePointerCapture(m)}function l(){for(let m of[...s.keys()])s.delete(m),c(m)}function u(m){if(!r()||m.defaultPrevented||m.button!==0||!n(m))return;let p=m.pointerType==="touch";if(!(s.size>=2||s.size&&(!p||!s.values().next().value.touch))){try{i.setPointerCapture(m.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(m.pointerId,{x:m.clientX,y:m.clientY,touch:p}),m.preventDefault()}}function f(m){let p=s.get(m.pointerId);if(!p)return;let M=r();if(!M){l();return}let R=s.size===2,S=R?o():0,b={x:m.clientX,y:m.clientY,touch:p.touch};if(s.set(m.pointerId,b),m.preventDefault(),R){let w=o();Math.min(S,w)>=hv&&a(M,{zoom:M.zoom*w/S});return}a(M,{azimuth:M.azimuth-(b.x-p.x)*md,tilt:M.tilt+(b.y-p.y)*md})}function h(m){s.delete(m.pointerId)&&c(m.pointerId)}function d(m){let p=r();if(!p||!Number.isFinite(m.deltaY)||!m.deltaY)return;let M=m.deltaMode===1?16:m.deltaMode===2?i.clientHeight:1,R=Math.max(-350,Math.min(350,m.deltaY*M));m.preventDefault(),m.stopPropagation(),a(p,{zoom:p.zoom*Math.exp(-R*.002)})}function g(m){let p=r();if(!p||m.altKey||m.ctrlKey||m.metaKey||m.defaultPrevented)return;let M;switch(m.key){case"ArrowLeft":M={azimuth:p.azimuth-Tc};break;case"ArrowRight":M={azimuth:p.azimuth+Tc};break;case"ArrowUp":M={tilt:p.tilt-Tc};break;case"ArrowDown":M={tilt:p.tilt+Tc};break;case"+":case"=":M={zoom:p.zoom*1.1};break;case"-":M={zoom:p.zoom/1.1};break;default:return}m.preventDefault(),m.stopPropagation(),a(p,M)}let x=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",g]];for(let[m,p,M]of x)i.addEventListener(m,p,M);return{cancel:l,dispose(){l();for(let[m,p,M]of x)i.removeEventListener(m,p,M)}}}function xd(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,g,x=1/0;for(let p=0;p<=h&&(f||!d);p++)for(let[M,R]of p===0?s.slice(0,1):s.slice(1)){let S=o(a.x+M*p*34,c/2,t-c/2),b=o(a.y+R*p*34,l/2,e-l/2);if(n.some(v=>Math.abs(S-v.x)<(c+v.w)/2+2&&Math.abs(b-v.y)<(l+v.h)/2+2))continue;if(p<=3&&!d&&(d={...a,x:S,y:b,w:c,h:l}),!f)break;if(u.some(v=>S+c/2>v.left&&S-c/2<v.right&&b+l/2>v.top&&b-l/2<v.bottom))continue;let L=Math.hypot(S-a.x,b-a.y);L<x&&(g={...a,x:S,y:b,w:c,h:l},x=L)}let m=g??d;m&&n.push(m)}return n}var _d="roomcraft-presence-v1";var yd=/^sensor\.[a-z0-9_]+$/;function fv(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function dv(i={},t=[]){let e={};for(let n of new Set(t)){if(!yd.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==_d)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,4):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:_d,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function vd(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!yd.test(o||"")||s.has(o)||!fv(a))continue;s.add(o);let c=dv(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=4500)continue;let[f,h,d,g,x,m]=a;for(let p of u){let M=f*p.x+h*p.y+d,R=g*p.x+x*p.y+m;M>=0&&M<=1536&&R>=0&&R<=1024&&n.push({id:o+":"+p.id,x:M,y:R,expiresAt:l+4500})}}return n}var pv=22,mv=5,gv=1e3/12,xv=1e3,_v=12;function yv(i,t,e){let n=xd(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>n.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&n.push(l)}return n}function vv(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function bv(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=pv;return!f&&(a.type==="garageDoor"||!vv(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function Mv(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;qf(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),f=i.getElementById("sceneDefaultStatus"),h=Zf(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=i.createElement("label");x.className="scene-dashboard-look",x.hidden=!0,x.title="Lighting and device appearance from the last dashboard import";let m=i.createElement("input");m.type="checkbox",m.checked=!0,x.append(m," Dashboard look"),a?.append(x);let p=i.createElement("div");p.className="scene-selection",p.setAttribute("aria-hidden","true"),Object.assign(p.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(p);let M=i.createElement("div");M.className="scene-placeholders",Object.assign(M.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(M);let R=i.createElementNS("http://www.w3.org/2000/svg","svg");R.classList.add("scene-placeholder-leaders"),R.setAttribute("aria-hidden","true"),Object.assign(R.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(R,M);let S=new Map,b=i.getElementById("miniHelp"),w=b?.textContent,L=n.getAttribute("aria-label")??"Editable three-dimensional home view",v,I,D,O=au(null),z=r.value,X="default",F,V,J,Q=-1/0,pt=0,it=!1,ct=!1,ft=null,Tt=!1,It=[],jt=[],$t="",Kt=0,ut,xt=!1,Rt={},bt={key:"",scene:null,reduceMotion:!1},nt=()=>z!=="plan",lt=()=>z==="free",Dt=()=>n.getBoundingClientRect(),ot=St=>{let Wt=Dt();return{x:St.clientX-Wt.left,y:St.clientY-Wt.top}};function mt(St){e.showStatus?.(St)}function vt(){if(!(!it&&(v?.hasAmbientMotion||v?.hasPeopleMotion)&&nt()&&!i.hidden&&!d?.matches)){t.cancelAnimationFrame(J),J=void 0;return}J===void 0&&(J=t.requestAnimationFrame(Wt=>{if(J=void 0,Wt-Q>=gv-1){Q=Wt,pt=Wt/1e3;try{v.renderAmbient(pt)}catch{rt()}}vt()}))}function Mt(St=!0){let Wt=nt()?v:null,Zt=d?.matches===!0,ne=wt()?vd(It,Rt):[],ye=JSON.stringify(ne);ye===bt.key&&Wt===bt.scene&&Zt===bt.reduceMotion||(bt={key:ye,scene:Wt,reduceMotion:Zt},Wt&&(Wt.setPeople(ne,(t.performance?.now()??0)/1e3,{reduceMotion:Zt}),St&&kt()),e.setPersonPreview?.(Wt?[]:ne))}function wt(){return!!(g?.request&&jt.length&&!it&&!i.hidden)}async function zt(St=!0){if(St&&Mt(),xt||!wt())return;xt=!0;let Wt=Kt;try{let Zt=await g.request("TRACK_GET",jt);Wt===Kt&&wt()&&(Rt=Zt&&typeof Zt=="object"?Zt:{},Mt())}catch{Wt===Kt&&(Rt={},Mt())}finally{xt=!1}}function Ut(){wt()?ut===void 0&&(ut=t.setInterval(zt,xv),zt(!1)):ut!==void 0&&(t.clearInterval(ut),ut=void 0,Kt++,Rt={})}function Vt(St){It=St.filter(ne=>ne.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ne.presenceTrackEntityId)&&Array.isArray(ne.presenceTrackTransform));let Wt=[...new Set(It.map(ne=>ne.presenceTrackEntityId))].slice(0,_v),Zt=Wt.join(",");Zt!==$t&&($t=Zt,jt=Wt,Kt++,Rt={}),Ut()}function kt(St){if(vt(),!v||!nt())return;let{width:Wt,height:Zt}=Dt();if(!Wt||!Zt)return;v.resize(Wt,Zt);let ne=e.getPreview?.();x.hidden=!ne?.environment;let ye=!x.hidden&&m.checked,en=Object.create(null);if(ye)for(let Ye of I.items){let un=ne.states?.[Ye.id];un&&un.entityId===Ye.entityId&&(en[Ye.id]=un)}for(let[Ye,un]of Object.entries(St??{}))en[Ye]={...en[Ye],...un};let si=ye?ne.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(v.render(pt,en,{...si,reduceMotion:d?.matches===!0},{animateTelemetry:!1}),lt())return;let pn=[];for(let[Ye,un]of S){let Wn=v.anchor(Ye);un.hidden=!Wn,Wn&&pn.push({id:Ye,marker:un,x:Wn.x*Wt,y:Wn.y*Zt,w:96,h:44})}let Hn=yv(pn,Wt,Zt),mn=new Set(Hn.map(Ye=>Ye.id)),Vi=[];for(let Ye of Hn){let{marker:un,x:Wn,y:er,w:ao,h:A,id:Y}=Ye;Object.assign(un.style,{left:`${Wn}px`,top:`${er}px`,width:`${ao}px`,height:`${A}px`});let at=pn.find(et=>et.id===Y);if(Math.hypot(at.x-Wn,at.y-er)>8){let et=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[st,Pt]of Object.entries({x1:at.x,y1:at.y,x2:Wn,y2:er}))et.setAttribute(st,Pt);et.setAttribute("stroke","#6f816b"),et.setAttribute("stroke-width","1"),et.setAttribute("stroke-dasharray","3 3"),Vi.push(et)}}for(let[Ye,un]of S)un.hidden=!mn.has(Ye);R.replaceChildren(...Vi);let tr=e.getSelection(),Gi=tr?.kind==="item"?v.anchor(tr.id):null;p.style.display=Gi?"block":"none",Gi&&(p.style.left=`${Gi.x*Wt}px`,p.style.top=`${Gi.y*Zt}px`)}function G(){if(!F)return;let St=F;F=void 0;try{n.releasePointerCapture(St.pointerId)}catch{}St.item&&kt({[St.item.id]:{position:{x:St.item.x,y:St.item.y}}})}function re(){a&&(a.hidden=!nt());for(let St of Object.values(o))St&&(St.disabled=!nt());l&&(l.hidden=!v||!lt(),l.disabled=Tt),u&&(u.hidden=!v||!nt()||!ft,u.disabled=Tt)}function qt(St){f&&(f.textContent=St)}function U(){ct=!0,qt("")}function E(){n.tabIndex=lt()?0:-1,n.style.cursor=lt()?"grab":"",n.setAttribute("aria-label",lt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":L)}function K(St,{initial:Wt=!1}={}){Wt||(U(),St==="default"&&(ct=!1)),N.cancel(),G();let Zt=v?.getView()??O,ne=Object.hasOwn(js,St)?St:"plan";ne!=="plan"&&e.useSelectTool?.(),z=ne,nt()&&!lt()&&(X=z),r.value=z,n.hidden=!nt(),E();let ye=nt()&&!lt();if(M.style.display=ye?"block":"none",R.style.display=ye?"block":"none",ye||(p.style.display="none"),b&&(lt()?b.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":b.textContent=nt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":w),s.classList.toggle("scene-3d",nt()),re(),!nt()){dt(),vt(),x.hidden=!0,mt("Plan view \xB7 edit rooms, walls, floors and objects");return}let en=z==="default"?au(ft):lt()?Yf(Zt):{preset:z};O=v?v.setView(en):en,dt(),v&&mt(lt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function rt(){N.cancel(),v?.dispose(),v=void 0,D=void 0,z="plan",vt(),r.value=z,n.hidden=!0,x.hidden=!0,E(),M.style.display="none",R.style.display="none",b&&(b.textContent=w),s.classList.remove("scene-3d"),p.style.display="none",re(),Mt(!1),mt("3D view is unavailable on this screen. Plan view is ready.")}function dt(){if(it)return;let St=e.getProject();if(Vt(St.items),!nt()){Mt();return}let Wt=JSON.stringify(St);try{if(!v||Wt!==D){G(),v&&(O=v.getView()),v?.dispose(),v=void 0,I=St,v=pd(n,I),v.setView(O),D=Wt,S.clear(),M.replaceChildren();for(let Zt of I.items.filter(ne=>ne.type==="cameraThumbnail"||ne.type.startsWith("ui"))){let ne=i.createElement("button");ne.type="button",ne.className="scene-placeholder",ne.textContent=Zt.name||(Zt.type==="cameraThumbnail"?"Camera":"Interface"),ne.setAttribute("aria-label",`Select ${ne.textContent}`),Object.assign(ne.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ne.addEventListener("pointerdown",ye=>H(ye,Zt.id)),ne.addEventListener("click",ye=>{!lt()&&ye.detail===0&&(e.selectItem(Zt.id),kt())}),S.set(Zt.id,ne),M.append(ne)}}re(),Mt(!1),kt()}catch{rt()}}function B(St){!v||!nt()||(U(),G(),v.setView(St(v.getView())),O=v.getView(),kt())}let _=()=>dt(),y=()=>{let St=e.getTool();nt()&&St!=="select"?K("plan"):lt()&&e.hasPlacement()?K(X):nt()&&kt()},T=()=>K(r.value),P=()=>{t.cancelAnimationFrame(V),V=t.requestAnimationFrame(()=>kt())},N=gd(n,{getView:()=>lt()?v?.getView():null,onChange:St=>{!v||!lt()||(U(),O=v.setView(St),P())}}),H=(St,Wt=null)=>{if(!nt()||lt()||!v||St.button!==0||F)return;St.preventDefault(),St.stopPropagation();let Zt=ot(St);if(e.hasPlacement()){let mn=v.projectToPlan(Zt.x,Zt.y,e.getPlacementType());mn&&e.placeAt(mn.x,mn.y),dt();return}let{width:ne,height:ye}=Dt(),en=new Map(I.items.map(mn=>[mn.id,v.anchor(mn.id)])),si=Wt??v.pickGarage(Zt.x,Zt.y),pn=si?I.items.find(mn=>mn.id===si):bv(I.items,Zt,v.projectToPlan(Zt.x,Zt.y),en,ne,ye);if(e.selectItem(pn?.id??null),!pn){kt();return}let Hn=v.projectToPlan(Zt.x,Zt.y,pn.type);Hn&&(F={item:{...pn},startScreen:Zt,startPlan:Hn,pointerId:St.pointerId},n.setPointerCapture(St.pointerId),kt())},k=St=>{if(!nt()||lt()||(St.stopPropagation(),!F||F.pointerId!==St.pointerId||!v))return;let Wt=ot(St);if(!F.moved&&Math.hypot(Wt.x-F.startScreen.x,Wt.y-F.startScreen.y)<mv)return;let Zt=v.projectToPlan(Wt.x,Wt.y,F.item.type);Zt&&(F.moved=!0,F.position={x:F.item.x+Zt.x-F.startPlan.x,y:F.item.y+Zt.y-F.startPlan.y},kt({[F.item.id]:{position:F.position}}))},tt=St=>{if(!nt()||lt()||(St.stopPropagation(),!F||F.pointerId!==St.pointerId))return;let Wt=F;F=void 0;try{n.releasePointerCapture(St.pointerId)}catch{}Wt.moved&&Wt.position?(e.moveItem(Wt.item.id,Wt.position.x,Wt.position.y),dt()):kt()},j=St=>{lt()||(F?.pointerId===St.pointerId&&G(),St.stopPropagation())},yt=St=>{!nt()||lt()||(St.preventDefault(),St.stopPropagation(),B(Wt=>({...Wt,zoom:Wt.zoom*(St.deltaY<0?1.1:1/1.1)})))},C=St=>{lt()&&St.target===n&&(St.key==="Delete"||St.key==="Backspace")&&(St.preventDefault(),St.stopImmediatePropagation()),St.key==="Escape"&&F&&(St.preventDefault(),St.stopImmediatePropagation(),G())},$=St=>{St.preventDefault(),rt()},q=()=>B(St=>({...St,azimuth:St.azimuth-15})),gt=()=>B(St=>({...St,azimuth:St.azimuth+15})),_t=()=>B(St=>({...St,zoom:St.zoom/1.2})),ht=()=>B(St=>({...St,zoom:St.zoom*1.2})),Et=()=>K("top"),Ct=()=>kt(),ee=()=>{Mt(!1),kt()},Yt=()=>{Ut(),Mt(),vt()};i.addEventListener("visibilitychange",Yt),d?.addEventListener("change",ee);async function me(){Tt=!0,re();try{ft=await h.read(),!it&&!ct&&K("default",{initial:!0})}catch{it||qt("Saved view unavailable")}finally{Tt=!1,it||re()}}async function ge(St){if(!(!v||!nt()||Tt)){Tt=!0,qt("Saving view\u2026"),re();try{if(await h.write(St),it)return;ft=St,St||K("default"),qt(St?"Default view saved":"Top down is the default")}catch{it||qt("Could not save default view")}finally{Tt=!1,it||re()}}}let Xe=()=>{lt()&&v&&ge(v.getView())},Ie=()=>ge(null);o.left?.addEventListener("click",q),o.right?.addEventListener("click",gt),o.out?.addEventListener("click",_t),o.in?.addEventListener("click",ht),c?.addEventListener("click",Et),l?.addEventListener("click",Xe),u?.addEventListener("click",Ie),m.addEventListener("change",Ct),r.addEventListener("change",T),n.addEventListener("pointerdown",H),n.addEventListener("pointermove",k),n.addEventListener("pointerup",tt),n.addEventListener("pointercancel",j),n.addEventListener("lostpointercapture",j),n.addEventListener("wheel",yt,{passive:!1}),n.addEventListener("webglcontextlost",$),t.addEventListener("keydown",C,!0),t.addEventListener("roomcraft-editor-change",_),t.addEventListener("roomcraft-editor-tool",y);let qe=new t.ResizeObserver(P);return qe.observe(s),K(z,{initial:!0}),me(),{getView:()=>v?.getView()??{...O},setView:K,dispose(){it=!0,vt(),Ut(),i.removeEventListener("visibilitychange",Yt),d?.removeEventListener("change",ee),G(),N.dispose(),z="plan",E(),qe.disconnect(),t.cancelAnimationFrame(V),v?.dispose(),v=void 0,p.remove(),M.remove(),R.remove(),x.remove(),m.removeEventListener("change",Ct),b&&(b.textContent=w),o.left?.removeEventListener("click",q),o.right?.removeEventListener("click",gt),o.out?.removeEventListener("click",_t),o.in?.removeEventListener("click",ht),c?.removeEventListener("click",Et),l?.removeEventListener("click",Xe),u?.removeEventListener("click",Ie),r.removeEventListener("change",T),n.removeEventListener("pointerdown",H),n.removeEventListener("pointermove",k),n.removeEventListener("pointerup",tt),n.removeEventListener("pointercancel",j),n.removeEventListener("lostpointercapture",j),n.removeEventListener("wheel",yt),n.removeEventListener("webglcontextlost",$),t.removeEventListener("keydown",C,!0),t.removeEventListener("roomcraft-editor-change",_),t.removeEventListener("roomcraft-editor-tool",y)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=du,Mv(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
