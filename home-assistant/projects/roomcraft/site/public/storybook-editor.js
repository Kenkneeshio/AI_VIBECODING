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
"use strict";(()=>{var em=Object.create;var yh=Object.defineProperty;var nm=Object.getOwnPropertyDescriptor;var im=Object.getOwnPropertyNames;var sm=Object.getPrototypeOf,rm=Object.prototype.hasOwnProperty;var om=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var am=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of im(t))!rm.call(i,s)&&s!==e&&yh(i,s,{get:()=>t[s],enumerable:!(n=nm(t,s))||n.enumerable});return i};var _l=(i,t,e)=>(e=i!=null?em(sm(i)):{},am(t||!i||!i.__esModule?yh(e,"default",{value:i,enumerable:!0}):e,i));var Zc=om((Yu,Zu)=>{(function(i,t){typeof Yu=="object"&&typeof Zu<"u"?Zu.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Yu,(function(){"use strict";/**
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
    ***************************************************************************** */function i(L,y){var _={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},T,I,D,G;return G={next:H(0),throw:H(1),return:H(2)},typeof Symbol=="function"&&(G[Symbol.iterator]=function(){return this}),G;function H(Q){return function(pt){return et([Q,pt])}}function et(Q){if(T)throw new TypeError("Generator is already executing.");for(;_;)try{if(T=1,I&&(D=Q[0]&2?I.return:Q[0]?I.throw||((D=I.return)&&D.call(I),0):I.next)&&!(D=D.call(I,Q[1])).done)return D;switch(I=0,D&&(Q=[Q[0]&2,D.value]),Q[0]){case 0:case 1:D=Q;break;case 4:return _.label++,{value:Q[1],done:!1};case 5:_.label++,I=Q[1],Q=[0];continue;case 7:Q=_.ops.pop(),_.trys.pop();continue;default:if(D=_.trys,!(D=D.length>0&&D[D.length-1])&&(Q[0]===6||Q[0]===2)){_=0;continue}if(Q[0]===3&&(!D||Q[1]>D[0]&&Q[1]<D[3])){_.label=Q[1];break}if(Q[0]===6&&_.label<D[1]){_.label=D[1],D=Q;break}if(D&&_.label<D[2]){_.label=D[2],_.ops.push(Q);break}D[2]&&_.ops.pop(),_.trys.pop();continue}Q=y.call(L,_)}catch(pt){Q=[6,pt],I=0}finally{T=D=0}if(Q[0]&5)throw Q[1];return{value:Q[0]?Q[1]:void 0,done:!0}}}var t=(function(){function L(y,_){this.next=null,this.key=y,this.data=_,this.left=null,this.right=null}return L})();function e(L,y){return L>y?1:L<y?-1:0}function n(L,y,_){for(var T=new t(null,null),I=T,D=T;;){var G=_(L,y.key);if(G<0){if(y.left===null)break;if(_(L,y.left.key)<0){var H=y.left;if(y.left=H.right,H.right=y,y=H,y.left===null)break}D.left=y,D=y,y=y.left}else if(G>0){if(y.right===null)break;if(_(L,y.right.key)>0){var H=y.right;if(y.right=H.left,H.left=y,y=H,y.right===null)break}I.right=y,I=y,y=y.right}else break}return I.right=y.left,D.left=y.right,y.left=T.right,y.right=T.left,y}function s(L,y,_,T){var I=new t(L,y);if(_===null)return I.left=I.right=null,I;_=n(L,_,T);var D=T(L,_.key);return D<0?(I.left=_.left,I.right=_,_.left=null):D>=0&&(I.right=_.right,I.left=_,_.right=null),I}function r(L,y,_){var T=null,I=null;if(y){y=n(L,y,_);var D=_(y.key,L);D===0?(T=y.left,I=y.right):D<0?(I=y.right,y.right=null,T=y):(T=y.left,y.left=null,I=y)}return{left:T,right:I}}function o(L,y,_){return y===null?L:(L===null||(y=n(L.key,y,_),y.left=L),y)}function a(L,y,_,T,I){if(L){T(""+y+(_?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+I(L)+`
`);var D=y+(_?"    ":"\u2502   ");L.left&&a(L.left,D,!1,T,I),L.right&&a(L.right,D,!0,T,I)}}var c=(function(){function L(y){y===void 0&&(y=e),this._root=null,this._size=0,this._comparator=y}return L.prototype.insert=function(y,_){return this._size++,this._root=s(y,_,this._root,this._comparator)},L.prototype.add=function(y,_){var T=new t(y,_);this._root===null&&(T.left=T.right=null,this._size++,this._root=T);var I=this._comparator,D=n(y,this._root,I),G=I(y,D.key);return G===0?this._root=D:(G<0?(T.left=D.left,T.right=D,D.left=null):G>0&&(T.right=D.right,T.left=D,D.right=null),this._size++,this._root=T),this._root},L.prototype.remove=function(y){this._root=this._remove(y,this._root,this._comparator)},L.prototype._remove=function(y,_,T){var I;if(_===null)return null;_=n(y,_,T);var D=T(y,_.key);return D===0?(_.left===null?I=_.right:(I=n(y,_.left,T),I.right=_.right),this._size--,I):_},L.prototype.pop=function(){var y=this._root;if(y){for(;y.left;)y=y.left;return this._root=n(y.key,this._root,this._comparator),this._root=this._remove(y.key,this._root,this._comparator),{key:y.key,data:y.data}}return null},L.prototype.findStatic=function(y){for(var _=this._root,T=this._comparator;_;){var I=T(y,_.key);if(I===0)return _;I<0?_=_.left:_=_.right}return null},L.prototype.find=function(y){return this._root&&(this._root=n(y,this._root,this._comparator),this._comparator(y,this._root.key)!==0)?null:this._root},L.prototype.contains=function(y){for(var _=this._root,T=this._comparator;_;){var I=T(y,_.key);if(I===0)return!0;I<0?_=_.left:_=_.right}return!1},L.prototype.forEach=function(y,_){for(var T=this._root,I=[],D=!1;!D;)T!==null?(I.push(T),T=T.left):I.length!==0?(T=I.pop(),y.call(_,T),T=T.right):D=!0;return this},L.prototype.range=function(y,_,T,I){for(var D=[],G=this._comparator,H=this._root,et;D.length!==0||H;)if(H)D.push(H),H=H.left;else{if(H=D.pop(),et=G(H.key,_),et>0)break;if(G(H.key,y)>=0&&T.call(I,H))return this;H=H.right}return this},L.prototype.keys=function(){var y=[];return this.forEach(function(_){var T=_.key;return y.push(T)}),y},L.prototype.values=function(){var y=[];return this.forEach(function(_){var T=_.data;return y.push(T)}),y},L.prototype.min=function(){return this._root?this.minNode(this._root).key:null},L.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},L.prototype.minNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.left;)y=y.left;return y},L.prototype.maxNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.right;)y=y.right;return y},L.prototype.at=function(y){for(var _=this._root,T=!1,I=0,D=[];!T;)if(_)D.push(_),_=_.left;else if(D.length>0){if(_=D.pop(),I===y)return _;I++,_=_.right}else T=!0;return null},L.prototype.next=function(y){var _=this._root,T=null;if(y.right){for(T=y.right;T.left;)T=T.left;return T}for(var I=this._comparator;_;){var D=I(y.key,_.key);if(D===0)break;D<0?(T=_,_=_.left):_=_.right}return T},L.prototype.prev=function(y){var _=this._root,T=null;if(y.left!==null){for(T=y.left;T.right;)T=T.right;return T}for(var I=this._comparator;_;){var D=I(y.key,_.key);if(D===0)break;D<0?_=_.left:(T=_,_=_.right)}return T},L.prototype.clear=function(){return this._root=null,this._size=0,this},L.prototype.toList=function(){return f(this._root)},L.prototype.load=function(y,_,T){_===void 0&&(_=[]),T===void 0&&(T=!1);var I=y.length,D=this._comparator;if(T&&g(y,_,0,I-1,D),this._root===null)this._root=l(y,_,0,I),this._size=I;else{var G=d(this.toList(),u(y,_),D);I=this._size+I,this._root=h({head:G},0,I)}return this},L.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(L.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(L.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),L.prototype.toString=function(y){y===void 0&&(y=function(T){return String(T.key)});var _=[];return a(this._root,"",!0,function(T){return _.push(T)},y),_.join("")},L.prototype.update=function(y,_,T){var I=this._comparator,D=r(y,this._root,I),G=D.left,H=D.right;I(y,_)<0?H=s(_,T,H,I):G=s(_,T,G,I),this._root=o(G,H,I)},L.prototype.split=function(y){return r(y,this._root,this._comparator)},L.prototype[Symbol.iterator]=function(){var y,_,T;return i(this,function(I){switch(I.label){case 0:y=this._root,_=[],T=!1,I.label=1;case 1:return T?[3,6]:y===null?[3,2]:(_.push(y),y=y.left,[3,5]);case 2:return _.length===0?[3,4]:(y=_.pop(),[4,y]);case 3:return I.sent(),y=y.right,[3,5];case 4:T=!0,I.label=5;case 5:return[3,1];case 6:return[2]}})},L})();function l(L,y,_,T){var I=T-_;if(I>0){var D=_+Math.floor(I/2),G=L[D],H=y[D],et=new t(G,H);return et.left=l(L,y,_,D),et.right=l(L,y,D+1,T),et}return null}function u(L,y){for(var _=new t(null,null),T=_,I=0;I<L.length;I++)T=T.next=new t(L[I],y[I]);return T.next=null,_.next}function f(L){for(var y=L,_=[],T=!1,I=new t(null,null),D=I;!T;)y?(_.push(y),y=y.left):_.length>0?(y=D=D.next=_.pop(),y=y.right):T=!0;return D.next=null,I.next}function h(L,y,_){var T=_-y;if(T>0){var I=y+Math.floor(T/2),D=h(L,y,I),G=L.head;return G.left=D,L.head=L.head.next,G.right=h(L,I+1,_),G}return null}function d(L,y,_){for(var T=new t(null,null),I=T,D=L,G=y;D!==null&&G!==null;)_(D.key,G.key)<0?(I.next=D,D=D.next):(I.next=G,G=G.next),I=I.next;return D!==null?I.next=D:G!==null&&(I.next=G),T.next}function g(L,y,_,T,I){if(!(_>=T)){for(var D=L[_+T>>1],G=_-1,H=T+1;;){do G++;while(I(L[G],D)<0);do H--;while(I(L[H],D)>0);if(G>=H)break;var et=L[G];L[G]=L[H],L[H]=et,et=y[G],y[G]=y[H],y[H]=et}g(L,y,_,H,I),g(L,y,H+1,T,I)}}let x=(L,y)=>L.ll.x<=y.x&&y.x<=L.ur.x&&L.ll.y<=y.y&&y.y<=L.ur.y,m=(L,y)=>{if(y.ur.x<L.ll.x||L.ur.x<y.ll.x||y.ur.y<L.ll.y||L.ur.y<y.ll.y)return null;let _=L.ll.x<y.ll.x?y.ll.x:L.ll.x,T=L.ur.x<y.ur.x?L.ur.x:y.ur.x,I=L.ll.y<y.ll.y?y.ll.y:L.ll.y,D=L.ur.y<y.ur.y?L.ur.y:y.ur.y;return{ll:{x:_,y:I},ur:{x:T,y:D}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let M=p*p,A=(L,y)=>{if(-p<L&&L<p&&-p<y&&y<p)return 0;let _=L-y;return _*_<M*L*y?0:L<y?-1:1};class S{constructor(){this.reset()}reset(){this.xRounder=new b,this.yRounder=new b}round(y,_){return{x:this.xRounder.round(y),y:this.yRounder.round(_)}}}class b{constructor(){this.tree=new c,this.round(0)}round(y){let _=this.tree.add(y),T=this.tree.prev(_);if(T!==null&&A(_.key,T.key)===0)return this.tree.remove(y),T.key;let I=this.tree.next(_);return I!==null&&A(_.key,I.key)===0?(this.tree.remove(y),I.key):y}}let E=new S,N=11102230246251565e-32,v=134217729,P=(3+8*N)*N;function O(L,y,_,T,I){let D,G,H,et,Q=y[0],pt=T[0],C=0,j=0;pt>Q==pt>-Q?(D=Q,Q=y[++C]):(D=pt,pt=T[++j]);let W=0;if(C<L&&j<_)for(pt>Q==pt>-Q?(G=Q+D,H=D-(G-Q),Q=y[++C]):(G=pt+D,H=D-(G-pt),pt=T[++j]),D=G,H!==0&&(I[W++]=H);C<L&&j<_;)pt>Q==pt>-Q?(G=D+Q,et=G-D,H=D-(G-et)+(Q-et),Q=y[++C]):(G=D+pt,et=G-D,H=D-(G-et)+(pt-et),pt=T[++j]),D=G,H!==0&&(I[W++]=H);for(;C<L;)G=D+Q,et=G-D,H=D-(G-et)+(Q-et),Q=y[++C],D=G,H!==0&&(I[W++]=H);for(;j<_;)G=D+pt,et=G-D,H=D-(G-et)+(pt-et),pt=T[++j],D=G,H!==0&&(I[W++]=H);return(D!==0||W===0)&&(I[W++]=D),W}function F(L,y){let _=y[0];for(let T=1;T<L;T++)_+=y[T];return _}function B(L){return new Float64Array(L)}let Y=(3+16*N)*N,z=(2+12*N)*N,q=(9+64*N)*N*N,X=B(4),K=B(8),ft=B(12),nt=B(16),st=B(4);function at(L,y,_,T,I,D,G){let H,et,Q,pt,C,j,W,mt,xt,ut,bt,Rt,ie,Zt,ye,Me,Je,Le,$e=L-I,Xe=_-I,St=y-D,Vt=T-D;Zt=$e*Vt,j=v*$e,W=j-(j-$e),mt=$e-W,j=v*Vt,xt=j-(j-Vt),ut=Vt-xt,ye=mt*ut-(Zt-W*xt-mt*xt-W*ut),Me=St*Xe,j=v*St,W=j-(j-St),mt=St-W,j=v*Xe,xt=j-(j-Xe),ut=Xe-xt,Je=mt*ut-(Me-W*xt-mt*xt-W*ut),bt=ye-Je,C=ye-bt,X[0]=ye-(bt+C)+(C-Je),Rt=Zt+bt,C=Rt-Zt,ie=Zt-(Rt-C)+(bt-C),bt=ie-Me,C=ie-bt,X[1]=ie-(bt+C)+(C-Me),Le=Rt+bt,C=Le-Rt,X[2]=Rt-(Le-C)+(bt-C),X[3]=Le;let jt=F(4,X),ne=z*G;if(jt>=ne||-jt>=ne||(C=L-$e,H=L-($e+C)+(C-I),C=_-Xe,Q=_-(Xe+C)+(C-I),C=y-St,et=y-(St+C)+(C-D),C=T-Vt,pt=T-(Vt+C)+(C-D),H===0&&et===0&&Q===0&&pt===0)||(ne=q*G+P*Math.abs(jt),jt+=$e*pt+Vt*H-(St*Q+Xe*et),jt>=ne||-jt>=ne))return jt;Zt=H*Vt,j=v*H,W=j-(j-H),mt=H-W,j=v*Vt,xt=j-(j-Vt),ut=Vt-xt,ye=mt*ut-(Zt-W*xt-mt*xt-W*ut),Me=et*Xe,j=v*et,W=j-(j-et),mt=et-W,j=v*Xe,xt=j-(j-Xe),ut=Xe-xt,Je=mt*ut-(Me-W*xt-mt*xt-W*ut),bt=ye-Je,C=ye-bt,st[0]=ye-(bt+C)+(C-Je),Rt=Zt+bt,C=Rt-Zt,ie=Zt-(Rt-C)+(bt-C),bt=ie-Me,C=ie-bt,st[1]=ie-(bt+C)+(C-Me),Le=Rt+bt,C=Le-Rt,st[2]=Rt-(Le-C)+(bt-C),st[3]=Le;let Pe=O(4,X,4,st,K);Zt=$e*pt,j=v*$e,W=j-(j-$e),mt=$e-W,j=v*pt,xt=j-(j-pt),ut=pt-xt,ye=mt*ut-(Zt-W*xt-mt*xt-W*ut),Me=St*Q,j=v*St,W=j-(j-St),mt=St-W,j=v*Q,xt=j-(j-Q),ut=Q-xt,Je=mt*ut-(Me-W*xt-mt*xt-W*ut),bt=ye-Je,C=ye-bt,st[0]=ye-(bt+C)+(C-Je),Rt=Zt+bt,C=Rt-Zt,ie=Zt-(Rt-C)+(bt-C),bt=ie-Me,C=ie-bt,st[1]=ie-(bt+C)+(C-Me),Le=Rt+bt,C=Le-Rt,st[2]=Rt-(Le-C)+(bt-C),st[3]=Le;let Sn=O(Pe,K,4,st,ft);Zt=H*pt,j=v*H,W=j-(j-H),mt=H-W,j=v*pt,xt=j-(j-pt),ut=pt-xt,ye=mt*ut-(Zt-W*xt-mt*xt-W*ut),Me=et*Q,j=v*et,W=j-(j-et),mt=et-W,j=v*Q,xt=j-(j-Q),ut=Q-xt,Je=mt*ut-(Me-W*xt-mt*xt-W*ut),bt=ye-Je,C=ye-bt,st[0]=ye-(bt+C)+(C-Je),Rt=Zt+bt,C=Rt-Zt,ie=Zt-(Rt-C)+(bt-C),bt=ie-Me,C=ie-bt,st[1]=ie-(bt+C)+(C-Me),Le=Rt+bt,C=Le-Rt,st[2]=Rt-(Le-C)+(bt-C),st[3]=Le;let kn=O(Sn,ft,4,st,nt);return nt[kn-1]}function Et(L,y,_,T,I,D){let G=(y-D)*(_-I),H=(L-I)*(T-D),et=G-H,Q=Math.abs(G+H);return Math.abs(et)>=Y*Q?et:-at(L,y,_,T,I,D,Q)}let Ct=(L,y)=>L.x*y.y-L.y*y.x,Jt=(L,y)=>L.x*y.x+L.y*y.y,$t=(L,y,_)=>{let T=Et(L.x,L.y,y.x,y.y,_.x,_.y);return T>0?-1:T<0?1:0},Xt=L=>Math.sqrt(Jt(L,L)),ct=(L,y,_)=>{let T={x:y.x-L.x,y:y.y-L.y},I={x:_.x-L.x,y:_.y-L.y};return Ct(I,T)/Xt(I)/Xt(T)},dt=(L,y,_)=>{let T={x:y.x-L.x,y:y.y-L.y},I={x:_.x-L.x,y:_.y-L.y};return Jt(I,T)/Xt(I)/Xt(T)},wt=(L,y,_)=>y.y===0?null:{x:L.x+y.x/y.y*(_-L.y),y:_},Dt=(L,y,_)=>y.x===0?null:{x:_,y:L.y+y.y/y.x*(_-L.x)},_t=(L,y,_,T)=>{if(y.x===0)return Dt(_,T,L.x);if(T.x===0)return Dt(L,y,_.x);if(y.y===0)return wt(_,T,L.y);if(T.y===0)return wt(L,y,_.y);let I=Ct(y,T);if(I==0)return null;let D={x:_.x-L.x,y:_.y-L.y},G=Ct(D,y)/I,H=Ct(D,T)/I,et=L.x+H*y.x,Q=_.x+G*T.x,pt=L.y+H*y.y,C=_.y+G*T.y,j=(et+Q)/2,W=(pt+C)/2;return{x:j,y:W}};class gt{static compare(y,_){let T=gt.comparePoints(y.point,_.point);return T!==0?T:(y.point!==_.point&&y.link(_),y.isLeft!==_.isLeft?y.isLeft?1:-1:ht.compare(y.segment,_.segment))}static comparePoints(y,_){return y.x<_.x?-1:y.x>_.x?1:y.y<_.y?-1:y.y>_.y?1:0}constructor(y,_){y.events===void 0?y.events=[this]:y.events.push(this),this.point=y,this.isLeft=_}link(y){if(y.point===this.point)throw new Error("Tried to link already linked events");let _=y.point.events;for(let T=0,I=_.length;T<I;T++){let D=_[T];this.point.events.push(D),D.point=this.point}this.checkForConsuming()}checkForConsuming(){let y=this.point.events.length;for(let _=0;_<y;_++){let T=this.point.events[_];if(T.segment.consumedBy===void 0)for(let I=_+1;I<y;I++){let D=this.point.events[I];D.consumedBy===void 0&&T.otherSE.point.events===D.otherSE.point.events&&T.segment.consume(D.segment)}}}getAvailableLinkedEvents(){let y=[];for(let _=0,T=this.point.events.length;_<T;_++){let I=this.point.events[_];I!==this&&!I.segment.ringOut&&I.segment.isInResult()&&y.push(I)}return y}getLeftmostComparator(y){let _=new Map,T=I=>{let D=I.otherSE;_.set(I,{sine:ct(this.point,y.point,D.point),cosine:dt(this.point,y.point,D.point)})};return(I,D)=>{_.has(I)||T(I),_.has(D)||T(D);let{sine:G,cosine:H}=_.get(I),{sine:et,cosine:Q}=_.get(D);return G>=0&&et>=0?H<Q?1:H>Q?-1:0:G<0&&et<0?H<Q?-1:H>Q?1:0:et<G?-1:et>G?1:0}}}let Nt=0;class ht{static compare(y,_){let T=y.leftSE.point.x,I=_.leftSE.point.x,D=y.rightSE.point.x,G=_.rightSE.point.x;if(G<T)return 1;if(D<I)return-1;let H=y.leftSE.point.y,et=_.leftSE.point.y,Q=y.rightSE.point.y,pt=_.rightSE.point.y;if(T<I){if(et<H&&et<Q)return 1;if(et>H&&et>Q)return-1;let C=y.comparePoint(_.leftSE.point);if(C<0)return 1;if(C>0)return-1;let j=_.comparePoint(y.rightSE.point);return j!==0?j:-1}if(T>I){if(H<et&&H<pt)return-1;if(H>et&&H>pt)return 1;let C=_.comparePoint(y.leftSE.point);if(C!==0)return C;let j=y.comparePoint(_.rightSE.point);return j<0?1:j>0?-1:1}if(H<et)return-1;if(H>et)return 1;if(D<G){let C=_.comparePoint(y.rightSE.point);if(C!==0)return C}if(D>G){let C=y.comparePoint(_.rightSE.point);if(C<0)return 1;if(C>0)return-1}if(D!==G){let C=Q-H,j=D-T,W=pt-et,mt=G-I;if(C>j&&W<mt)return 1;if(C<j&&W>mt)return-1}return D>G?1:D<G||Q<pt?-1:Q>pt?1:y.id<_.id?-1:y.id>_.id?1:0}constructor(y,_,T,I){this.id=++Nt,this.leftSE=y,y.segment=this,y.otherSE=_,this.rightSE=_,_.segment=this,_.otherSE=y,this.rings=T,this.windings=I}static fromRing(y,_,T){let I,D,G,H=gt.comparePoints(y,_);if(H<0)I=y,D=_,G=1;else if(H>0)I=_,D=y,G=-1;else throw new Error(`Tried to create degenerate segment at [${y.x}, ${y.y}]`);let et=new gt(I,!0),Q=new gt(D,!1);return new ht(et,Q,[T],[G])}replaceRightSE(y){this.rightSE=y,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let y=this.leftSE.point.y,_=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:y<_?y:_},ur:{x:this.rightSE.point.x,y:y>_?y:_}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(y){return y.x===this.leftSE.point.x&&y.y===this.leftSE.point.y||y.x===this.rightSE.point.x&&y.y===this.rightSE.point.y}comparePoint(y){if(this.isAnEndpoint(y))return 0;let _=this.leftSE.point,T=this.rightSE.point,I=this.vector();if(_.x===T.x)return y.x===_.x?0:y.x<_.x?1:-1;let D=(y.y-_.y)/I.y,G=_.x+D*I.x;if(y.x===G)return 0;let H=(y.x-_.x)/I.x,et=_.y+H*I.y;return y.y===et?0:y.y<et?-1:1}getIntersection(y){let _=this.bbox(),T=y.bbox(),I=m(_,T);if(I===null)return null;let D=this.leftSE.point,G=this.rightSE.point,H=y.leftSE.point,et=y.rightSE.point,Q=x(_,H)&&this.comparePoint(H)===0,pt=x(T,D)&&y.comparePoint(D)===0,C=x(_,et)&&this.comparePoint(et)===0,j=x(T,G)&&y.comparePoint(G)===0;if(pt&&Q)return j&&!C?G:!j&&C?et:null;if(pt)return C&&D.x===et.x&&D.y===et.y?null:D;if(Q)return j&&G.x===H.x&&G.y===H.y?null:H;if(j&&C)return null;if(j)return G;if(C)return et;let W=_t(D,this.vector(),H,y.vector());return W===null||!x(I,W)?null:E.round(W.x,W.y)}split(y){let _=[],T=y.events!==void 0,I=new gt(y,!0),D=new gt(y,!1),G=this.rightSE;this.replaceRightSE(D),_.push(D),_.push(I);let H=new ht(I,G,this.rings.slice(),this.windings.slice());return gt.comparePoints(H.leftSE.point,H.rightSE.point)>0&&H.swapEvents(),gt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),T&&(I.checkForConsuming(),D.checkForConsuming()),_}swapEvents(){let y=this.rightSE;this.rightSE=this.leftSE,this.leftSE=y,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let _=0,T=this.windings.length;_<T;_++)this.windings[_]*=-1}consume(y){let _=this,T=y;for(;_.consumedBy;)_=_.consumedBy;for(;T.consumedBy;)T=T.consumedBy;let I=ht.compare(_,T);if(I!==0){if(I>0){let D=_;_=T,T=D}if(_.prev===T){let D=_;_=T,T=D}for(let D=0,G=T.rings.length;D<G;D++){let H=T.rings[D],et=T.windings[D],Q=_.rings.indexOf(H);Q===-1?(_.rings.push(H),_.windings.push(et)):_.windings[Q]+=et}T.rings=null,T.windings=null,T.consumedBy=_,T.leftSE.consumedBy=_.leftSE,T.rightSE.consumedBy=_.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let y=this.prev.consumedBy||this.prev;this._beforeState=y.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let y=this.beforeState();this._afterState={rings:y.rings.slice(0),windings:y.windings.slice(0),multiPolys:[]};let _=this._afterState.rings,T=this._afterState.windings,I=this._afterState.multiPolys;for(let H=0,et=this.rings.length;H<et;H++){let Q=this.rings[H],pt=this.windings[H],C=_.indexOf(Q);C===-1?(_.push(Q),T.push(pt)):T[C]+=pt}let D=[],G=[];for(let H=0,et=_.length;H<et;H++){if(T[H]===0)continue;let Q=_[H],pt=Q.poly;if(G.indexOf(pt)===-1)if(Q.isExterior)D.push(pt);else{G.indexOf(pt)===-1&&G.push(pt);let C=D.indexOf(Q.poly);C!==-1&&D.splice(C,1)}}for(let H=0,et=D.length;H<et;H++){let Q=D[H].multiPoly;I.indexOf(Q)===-1&&I.push(Q)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let y=this.beforeState().multiPolys,_=this.afterState().multiPolys;switch(Gt.type){case"union":{let T=y.length===0,I=_.length===0;this._isInResult=T!==I;break}case"intersection":{let T,I;y.length<_.length?(T=y.length,I=_.length):(T=_.length,I=y.length),this._isInResult=I===Gt.numMultiPolys&&T<I;break}case"xor":{let T=Math.abs(y.length-_.length);this._isInResult=T%2===1;break}case"difference":{let T=I=>I.length===1&&I[0].isSubject;this._isInResult=T(y)!==T(_);break}default:throw new Error(`Unrecognized operation type found ${Gt.type}`)}return this._isInResult}}class yt{constructor(y,_,T){if(!Array.isArray(y)||y.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=_,this.isExterior=T,this.segments=[],typeof y[0][0]!="number"||typeof y[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let I=E.round(y[0][0],y[0][1]);this.bbox={ll:{x:I.x,y:I.y},ur:{x:I.x,y:I.y}};let D=I;for(let G=1,H=y.length;G<H;G++){if(typeof y[G][0]!="number"||typeof y[G][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let et=E.round(y[G][0],y[G][1]);et.x===D.x&&et.y===D.y||(this.segments.push(ht.fromRing(D,et,this)),et.x<this.bbox.ll.x&&(this.bbox.ll.x=et.x),et.y<this.bbox.ll.y&&(this.bbox.ll.y=et.y),et.x>this.bbox.ur.x&&(this.bbox.ur.x=et.x),et.y>this.bbox.ur.y&&(this.bbox.ur.y=et.y),D=et)}(I.x!==D.x||I.y!==D.y)&&this.segments.push(ht.fromRing(D,I,this))}getSweepEvents(){let y=[];for(let _=0,T=this.segments.length;_<T;_++){let I=this.segments[_];y.push(I.leftSE),y.push(I.rightSE)}return y}}class vt{constructor(y,_){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new yt(y[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let T=1,I=y.length;T<I;T++){let D=new yt(y[T],this,!1);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.interiorRings.push(D)}this.multiPoly=_}getSweepEvents(){let y=this.exteriorRing.getSweepEvents();for(let _=0,T=this.interiorRings.length;_<T;_++){let I=this.interiorRings[_].getSweepEvents();for(let D=0,G=I.length;D<G;D++)y.push(I[D])}return y}}class Mt{constructor(y,_){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof y[0][0][0]=="number"&&(y=[y])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let T=0,I=y.length;T<I;T++){let D=new vt(y[T],this);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.polys.push(D)}this.isSubject=_}getSweepEvents(){let y=[];for(let _=0,T=this.polys.length;_<T;_++){let I=this.polys[_].getSweepEvents();for(let D=0,G=I.length;D<G;D++)y.push(I[D])}return y}}class At{static factory(y){let _=[];for(let T=0,I=y.length;T<I;T++){let D=y[T];if(!D.isInResult()||D.ringOut)continue;let G=null,H=D.leftSE,et=D.rightSE,Q=[H],pt=H.point,C=[];for(;G=H,H=et,Q.push(H),H.point!==pt;)for(;;){let j=H.getAvailableLinkedEvents();if(j.length===0){let xt=Q[0].point,ut=Q[Q.length-1].point;throw new Error(`Unable to complete output ring starting at [${xt.x}, ${xt.y}]. Last matching segment found ends at [${ut.x}, ${ut.y}].`)}if(j.length===1){et=j[0].otherSE;break}let W=null;for(let xt=0,ut=C.length;xt<ut;xt++)if(C[xt].point===H.point){W=xt;break}if(W!==null){let xt=C.splice(W)[0],ut=Q.splice(xt.index);ut.unshift(ut[0].otherSE),_.push(new At(ut.reverse()));continue}C.push({index:Q.length,point:H.point});let mt=H.getLeftmostComparator(G);et=j.sort(mt)[0].otherSE;break}_.push(new At(Q))}return _}constructor(y){this.events=y;for(let _=0,T=y.length;_<T;_++)y[_].segment.ringOut=this;this.poly=null}getGeom(){let y=this.events[0].point,_=[y];for(let Q=1,pt=this.events.length-1;Q<pt;Q++){let C=this.events[Q].point,j=this.events[Q+1].point;$t(C,y,j)!==0&&(_.push(C),y=C)}if(_.length===1)return null;let T=_[0],I=_[1];$t(T,y,I)===0&&_.shift(),_.push(_[0]);let D=this.isExteriorRing()?1:-1,G=this.isExteriorRing()?0:_.length-1,H=this.isExteriorRing()?_.length:-1,et=[];for(let Q=G;Q!=H;Q+=D)et.push([_[Q].x,_[Q].y]);return et}isExteriorRing(){if(this._isExteriorRing===void 0){let y=this.enclosingRing();this._isExteriorRing=y?!y.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let y=this.events[0];for(let I=1,D=this.events.length;I<D;I++){let G=this.events[I];gt.compare(y,G)>0&&(y=G)}let _=y.segment.prevInResult(),T=_?_.prevInResult():null;for(;;){if(!_)return null;if(!T)return _.ringOut;if(T.ringOut!==_.ringOut)return T.ringOut.enclosingRing()!==_.ringOut?_.ringOut:_.ringOut.enclosingRing();_=T.prevInResult(),T=_?_.prevInResult():null}}}class Ht{constructor(y){this.exteriorRing=y,y.poly=this,this.interiorRings=[]}addInterior(y){this.interiorRings.push(y),y.poly=this}getGeom(){let y=[this.exteriorRing.getGeom()];if(y[0]===null)return null;for(let _=0,T=this.interiorRings.length;_<T;_++){let I=this.interiorRings[_].getGeom();I!==null&&y.push(I)}return y}}class Bt{constructor(y){this.rings=y,this.polys=this._composePolys(y)}getGeom(){let y=[];for(let _=0,T=this.polys.length;_<T;_++){let I=this.polys[_].getGeom();I!==null&&y.push(I)}return y}_composePolys(y){let _=[];for(let T=0,I=y.length;T<I;T++){let D=y[T];if(!D.poly)if(D.isExteriorRing())_.push(new Ht(D));else{let G=D.enclosingRing();G.poly||_.push(new Ht(G)),G.poly.addInterior(D)}}return _}}class qt{constructor(y){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ht.compare;this.queue=y,this.tree=new c(_),this.segments=[]}process(y){let _=y.segment,T=[];if(y.consumedBy)return y.isLeft?this.queue.remove(y.otherSE):this.tree.remove(_),T;let I=y.isLeft?this.tree.add(_):this.tree.find(_);if(!I)throw new Error(`Unable to find segment #${_.id} [${_.leftSE.point.x}, ${_.leftSE.point.y}] -> [${_.rightSE.point.x}, ${_.rightSE.point.y}] in SweepLine tree.`);let D=I,G=I,H,et;for(;H===void 0;)D=this.tree.prev(D),D===null?H=null:D.key.consumedBy===void 0&&(H=D.key);for(;et===void 0;)G=this.tree.next(G),G===null?et=null:G.key.consumedBy===void 0&&(et=G.key);if(y.isLeft){let Q=null;if(H){let C=H.getIntersection(_);if(C!==null&&(_.isAnEndpoint(C)||(Q=C),!H.isAnEndpoint(C))){let j=this._splitSafely(H,C);for(let W=0,mt=j.length;W<mt;W++)T.push(j[W])}}let pt=null;if(et){let C=et.getIntersection(_);if(C!==null&&(_.isAnEndpoint(C)||(pt=C),!et.isAnEndpoint(C))){let j=this._splitSafely(et,C);for(let W=0,mt=j.length;W<mt;W++)T.push(j[W])}}if(Q!==null||pt!==null){let C=null;Q===null?C=pt:pt===null?C=Q:C=gt.comparePoints(Q,pt)<=0?Q:pt,this.queue.remove(_.rightSE),T.push(_.rightSE);let j=_.split(C);for(let W=0,mt=j.length;W<mt;W++)T.push(j[W])}T.length>0?(this.tree.remove(_),T.push(y)):(this.segments.push(_),_.prev=H)}else{if(H&&et){let Q=H.getIntersection(et);if(Q!==null){if(!H.isAnEndpoint(Q)){let pt=this._splitSafely(H,Q);for(let C=0,j=pt.length;C<j;C++)T.push(pt[C])}if(!et.isAnEndpoint(Q)){let pt=this._splitSafely(et,Q);for(let C=0,j=pt.length;C<j;C++)T.push(pt[C])}}}this.tree.remove(_)}return T}_splitSafely(y,_){this.tree.remove(y);let T=y.rightSE;this.queue.remove(T);let I=y.split(_);return I.push(T),y.consumedBy===void 0&&this.tree.add(y),I}}let te=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,V=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class oe{run(y,_,T){Gt.type=y,E.reset();let I=[new Mt(_,!0)];for(let C=0,j=T.length;C<j;C++)I.push(new Mt(T[C],!1));if(Gt.numMultiPolys=I.length,Gt.type==="difference"){let C=I[0],j=1;for(;j<I.length;)m(I[j].bbox,C.bbox)!==null?j++:I.splice(j,1)}if(Gt.type==="intersection")for(let C=0,j=I.length;C<j;C++){let W=I[C];for(let mt=C+1,xt=I.length;mt<xt;mt++)if(m(W.bbox,I[mt].bbox)===null)return[]}let D=new c(gt.compare);for(let C=0,j=I.length;C<j;C++){let W=I[C].getSweepEvents();for(let mt=0,xt=W.length;mt<xt;mt++)if(D.insert(W[mt]),D.size>te)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let G=new qt(D),H=D.size,et=D.pop();for(;et;){let C=et.key;if(D.size===H){let W=C.segment;throw new Error(`Unable to pop() ${C.isLeft?"left":"right"} SweepEvent [${C.point.x}, ${C.point.y}] from segment #${W.id} [${W.leftSE.point.x}, ${W.leftSE.point.y}] -> [${W.rightSE.point.x}, ${W.rightSE.point.y}] from queue.`)}if(D.size>te)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(G.segments.length>V)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let j=G.process(C);for(let W=0,mt=j.length;W<mt;W++){let xt=j[W];xt.consumedBy===void 0&&D.insert(xt)}H=D.size,et=D.pop()}E.reset();let Q=At.factory(G.segments);return new Bt(Q).getGeom()}}let Gt=new oe;var Z={union:function(L){for(var y=arguments.length,_=new Array(y>1?y-1:0),T=1;T<y;T++)_[T-1]=arguments[T];return Gt.run("union",L,_)},intersection:function(L){for(var y=arguments.length,_=new Array(y>1?y-1:0),T=1;T<y;T++)_[T-1]=arguments[T];return Gt.run("intersection",L,_)},xor:function(L){for(var y=arguments.length,_=new Array(y>1?y-1:0),T=1;T<y;T++)_[T-1]=arguments[T];return Gt.run("xor",L,_)},difference:function(L){for(var y=arguments.length,_=new Array(y>1?y-1:0),T=1;T<y;T++)_[T-1]=arguments[T];return Gt.run("difference",L,_)}};return Z}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var of=0,ou=1,af=2;var gs=1,cf=2,or=3,ji=0,gn=1,bn=2,fi=0,ar=1,po=2,au=3,cu=4,lf=5;var xs=100,uf=101,hf=102,ff=103,df=104,pf=200,mf=201,gf=202,xf=203,lu=204,uu=205,yf=206,_f=207,vf=208,bf=209,Mf=210,Sf=211,Ef=212,wf=213,Tf=214,ma=0,ga=1,xa=2,Ws=3,ya=4,_a=5,va=6,ba=7,ja=0,Af=1,Rf=2,Jn=0,hu=1,fu=2,du=3,mo=4,pu=5,mu=6,gu=7;var xu=300,Qi=301,ys=302,Qa=303,tc=304,go=306,us=1e3,oi=1001,Ma=1002,Ye=1003,Cf=1004;var xo=1005;var Qe=1006,ec=1007;var ts=1008;var Mn=1009,yu=1010,_u=1011,cr=1012,nc=1013,$n=1014,On=1015,Kn=1016,ic=1017,sc=1018,lr=1020,vu=35902,bu=35899,Mu=1021,Su=1022,Bn=1023,ci=1026,es=1027,rc=1028,oc=1029,ns=1030,ac=1031;var cc=1033,yo=33776,_o=33777,vo=33778,bo=33779,lc=35840,uc=35841,hc=35842,fc=35843,dc=36196,pc=37492,mc=37496,gc=37488,xc=37489,Mo=37490,yc=37491,_c=37808,vc=37809,bc=37810,Mc=37811,Sc=37812,Ec=37813,wc=37814,Tc=37815,Ac=37816,Rc=37817,Cc=37818,Ic=37819,Pc=37820,Lc=37821,Dc=36492,Nc=36494,Uc=36495,Fc=36283,Oc=36284,So=36285,Bc=36286;var Nr=2300,Sa=2301,da=2302,ql=2303,Yl=2400,Zl=2401,Jl=2402;var If=3200;var Eo=0,Pf=1,Ci="",Be="srgb",Ur="srgb-linear",Fr="linear",ve="srgb";var pa=7680;var Lf=519,Df=512,Nf=513,Uf=514,zc=515,Ff=516,Of=517,kc=518,Bf=519,Eu=35044,ur=35048;var wu="300 es",qn=2e3,Xs=2001;function cm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zf(){let i=Or("canvas");return i.style.display="block",i}var _h={},qs=null;function Br(...i){let t="THREE."+i.shift();qs?qs("log",t,...i):console.log(t,...i)}function kf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=kf(i);let t="THREE."+i.shift();if(qs)qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=kf(i);let t="THREE."+i.shift();if(qs)qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){let t=i.join(" ");t in _h||(_h[t]=!0,Kt(...i))}function Hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vf={[ma]:ga,[xa]:va,[ya]:ba,[Ws]:_a,[ga]:ma,[va]:xa,[ba]:ya,[_a]:Ws},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,Ir=Math.PI/180,Ys=180/Math.PI;function ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Tu(i,t){return(i%t+t)%t}function um(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hm(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function fm(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function dm(i,t=1){return t-Math.abs(Tu(i,t*2)-t)}function pm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xm(i,t){return i+Math.random()*(t-i)}function ym(i){return i*(.5-Math.random())}function _m(i){i!==void 0&&(vh=i);let t=vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vm(i){return i*Ir}function bm(i){return i*Ys}function Mm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Em(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xe={DEG2RAD:Ir,RAD2DEG:Ys,generateUUID:ai,clamp:se,euclideanModulo:Tu,mapLinear:um,inverseLerp:hm,lerp:Pr,damp:fm,pingpong:dm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:xm,randFloatSpread:ym,seededRandom:_m,degToRad:vm,radToDeg:bm,isPowerOfTwo:Mm,ceilPowerOfTwo:Sm,floorPowerOfTwo:Em,setQuaternionFromProperEuler:wm,normalize:Se,denormalize:Xn},Tt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,a=Math.sin(a*M)/A,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a;let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vl.copy(this).projectOnVector(t),this.sub(vl)}reflect(t){return this.sub(vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vl=new k,bh=new Un,re=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],A=s[4],S=s[7],b=s[2],E=s[5],N=s[8];return r[0]=o*x+a*M+c*b,r[3]=o*m+a*A+c*E,r[6]=o*p+a*S+c*N,r[1]=l*x+u*M+f*b,r[4]=l*m+u*A+f*E,r[7]=l*p+u*S+f*N,r[2]=h*x+d*M+g*b,r[5]=h*m+d*A+g*E,r[8]=h*p+d*S+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bl.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bl.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bl=new re,Mh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){let i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}var de=Tm();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Or("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Am=0,Zs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ml(s[o].image)):r.push(Ml(s[o]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Rm=0,Sl=new k,pn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=Qe,o=ts,a=Bn,c=Mn,l=i.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ai(),this.name="",this.source=new Zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=xu;pn.DEFAULT_ANISOTROPY=1;var be=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,S=(d+1)/2,b=(p+1)/2,E=(u+h)/4,N=(f+x)/4,v=(g+m)/4;return A>S&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=N/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=N/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wa=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new pn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Zs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zr=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ta=class extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var me=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cm,t,Im)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Oi.crossVectors(n,En),Oi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Oi.crossVectors(n,En)),Oi.normalize(),ko.crossVectors(En,Oi),s[0]=Oi.x,s[4]=ko.x,s[8]=En.x,s[1]=Oi.y,s[5]=ko.y,s[9]=En.y,s[2]=Oi.z,s[6]=ko.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],A=n[7],S=n[11],b=n[15],E=s[0],N=s[4],v=s[8],P=s[12],O=s[1],F=s[5],B=s[9],Y=s[13],z=s[2],q=s[6],X=s[10],K=s[14],ft=s[3],nt=s[7],st=s[11],at=s[15];return r[0]=o*E+a*O+c*z+l*ft,r[4]=o*N+a*F+c*q+l*nt,r[8]=o*v+a*B+c*X+l*st,r[12]=o*P+a*Y+c*K+l*at,r[1]=u*E+f*O+h*z+d*ft,r[5]=u*N+f*F+h*q+d*nt,r[9]=u*v+f*B+h*X+d*st,r[13]=u*P+f*Y+h*K+d*at,r[2]=g*E+x*O+m*z+p*ft,r[6]=g*N+x*F+m*q+p*nt,r[10]=g*v+x*B+m*X+p*st,r[14]=g*P+x*Y+m*K+p*at,r[3]=M*E+A*O+S*z+b*ft,r[7]=M*N+A*F+S*q+b*nt,r[11]=M*v+A*B+S*X+b*st,r[15]=M*P+A*Y+S*K+b*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=c*d-l*h,A=a*d-l*f,S=a*h-c*f,b=o*d-l*u,E=o*h-c*u,N=o*f-a*u;return e*(x*M-m*A+p*S)-n*(g*M-m*b+p*E)+s*(g*A-x*b+p*N)-r*(g*S-x*E+m*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*a-n*o,A=e*c-s*o,S=e*l-r*o,b=n*c-s*a,E=n*l-r*a,N=s*l-r*c,v=u*x-f*g,P=u*m-h*g,O=u*p-d*g,F=f*m-h*x,B=f*p-d*x,Y=h*p-d*m,z=M*Y-A*B+S*F+b*O-E*P+N*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/z;return t[0]=(a*Y-c*B+l*F)*q,t[1]=(s*B-n*Y-r*F)*q,t[2]=(x*N-m*E+p*b)*q,t[3]=(h*E-f*N-d*b)*q,t[4]=(c*O-o*Y-l*P)*q,t[5]=(e*Y-s*O+r*P)*q,t[6]=(m*S-g*N-p*A)*q,t[7]=(u*N-h*S+d*A)*q,t[8]=(o*B-a*O+l*v)*q,t[9]=(n*O-e*B-r*v)*q,t[10]=(g*E-x*S+p*M)*q,t[11]=(f*S-u*E-d*M)*q,t[12]=(a*P-o*F-c*v)*q,t[13]=(e*F-n*P+s*v)*q,t[14]=(x*A-g*b-m*M)*q,t[15]=(u*b-f*A+h*M)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,M=c*l,A=c*u,S=c*f,b=n.x,E=n.y,N=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+S)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(d-S)*E,s[5]=(1-(h+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+A)*N,s[9]=(m-M)*N,s[10]=(1-(h+x))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),c=Rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);let l=1/o,u=1/a,f=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=qn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===qn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Xs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Rs=new k,Vn=new me,Cm=new k(0,0,0),Im=new k(1,1,1),Oi=new k,ko=new k,En=new k,Eh=new me,wh=new Un,ui=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pm=0,Th=new k,Cs=new Un,bi=new me,Ho=new k,Mr=new k,Lm=new k,Dm=new Un,Ah=new k(1,0,0),Rh=new k(0,1,0),Ch=new k(0,0,1),Ih={type:"added"},Nm={type:"removed"},Is={type:"childadded",child:null},El={type:"childremoved",child:null},ke=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new ui,n=new Un,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new re}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Mr,Ho,this.up):bi.lookAt(Ho,Mr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(bi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),Is.child=t,this.dispatchEvent(Is),Is.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nm),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,Lm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new k(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fe=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Um={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Tu(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wl(o,r,t+1/3),this.g=wl(o,r,t),this.b=wl(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return de.workingToColorSpace(an.copy(this),t),Math.round(se(an.r*255,0,255))*65536+Math.round(se(an.g*255,0,255))*256+Math.round(se(an.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Be){de.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(Vo);let n=Pr(Bi.h,Vo.h,e),s=Pr(Bi.s,Vo.s,e),r=Pr(Bi.l,Vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Yt;Yt.NAMES=Gf;var Gi=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new k,Mi=new k,Tl=new k,Si=new k,Ps=new k,Ls=new k,Ph=new k,Al=new k,Rl=new k,Cl=new k,Il=new be,Pl=new be,Ll=new be,Vi=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gn.subVectors(t,e),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gn.subVectors(s,e),Mi.subVectors(n,e),Tl.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(Mi),c=Gn.dot(Tl),l=Mi.dot(Mi),u=Mi.dot(Tl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(o,Si.y),c.addScaledVector(a,Si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Il.setScalar(0),Pl.setScalar(0),Ll.setScalar(0),Il.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,n),Ll.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Il,r.x),o.addScaledVector(Pl,r.y),o.addScaledVector(Ll,r.z),o}static isFrontFacing(t,e,n,s){return Gn.subVectors(n,e),Mi.subVectors(t,e),Gn.cross(Mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Gn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Ls.subVectors(r,n),Al.subVectors(t,n);let c=Ps.dot(Al),l=Ls.dot(Al);if(c<=0&&l<=0)return e.copy(n);Rl.subVectors(t,s);let u=Ps.dot(Rl),f=Ls.dot(Rl);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ps,o);Cl.subVectors(t,r);let d=Ps.dot(Cl),g=Ls.dot(Cl);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ls,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Ph.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Ph,a);let p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ne=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Wo.subVectors(this.max,Sr),Ds.subVectors(t.a,Sr),Ns.subVectors(t.b,Sr),Us.subVectors(t.c,Sr),zi.subVectors(Ns,Ds),ki.subVectors(Us,Ns),rs.subVectors(Ds,Us);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-rs.z,rs.y,zi.z,0,-zi.x,ki.z,0,-ki.x,rs.z,0,-rs.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-rs.y,rs.x,0];return!Dl(e,Ds,Ns,Us,Wo)||(e=[1,0,0,0,1,0,0,0,1],!Dl(e,Ds,Ns,Us,Wo))?!1:(Xo.crossVectors(zi,ki),e=[Xo.x,Xo.y,Xo.z],Dl(e,Ds,Ns,Us,Wo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new k,new k,new k,new k,new k,new k,new k,new k],Wn=new k,Go=new Ne,Ds=new k,Ns=new k,Us=new k,zi=new k,ki=new k,rs=new k,Sr=new k,Wo=new k,Xo=new k,os=new k;function Dl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=t.dot(os),l=e.dot(os),u=n.dot(os);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Oe=new k,qo=new Tt,Fm=0,ze=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var kr=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Om=new Ne,Er=new k,Nl=new k,vn=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Om.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(Nl)),this.expandByPoint(Er.copy(t.center).sub(Nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bm=0,Dn=new me,Ul=new ke,Fs=new k,wn=new Ne,wr=new Ne,qe=new k,pe=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cm(t)?Hr:kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(wn.min,wr.min),wn.expandByPoint(qe),qe.addVectors(wn.max,wr.max),wn.expandByPoint(qe)):(wn.expandByPoint(wr.min),wn.expandByPoint(wr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qe.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),qe.add(Fs)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new k,c[v]=new k;let l=new k,u=new k,f=new k,h=new Tt,d=new Tt,g=new Tt,x=new k,m=new k;function p(v,P,O){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,O),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,P),g.fromBufferAttribute(r,O),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(F),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),a[v].add(x),a[P].add(x),a[O].add(x),c[v].add(m),c[P].add(m),c[O].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,P=M.length;v<P;++v){let O=M[v],F=O.start,B=O.count;for(let Y=F,z=F+B;Y<z;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let A=new k,S=new k,b=new k,E=new k;function N(v){b.fromBufferAttribute(s,v),E.copy(b);let P=a[v];A.copy(P),A.sub(b.multiplyScalar(b.dot(P))).normalize(),S.crossVectors(E,P);let F=S.dot(c[v])<0?-1:1;o.setXYZW(v,A.x,A.y,A.z,F)}for(let v=0,P=M.length;v<P;++v){let O=M[v],F=O.start,B=O.count;for(let Y=F,z=F+B;Y<z;Y+=3)N(t.getX(Y+0)),N(t.getX(Y+1)),N(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,u=new k,f=new k;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new ze(h,u,f)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Eu,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},fn=new k,Fn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fl=new k,zm=new k,km=new re,Tn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fl.subVectors(n,e).cross(zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Fl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||km.getNormalMatrix(t),s=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Hm=0,Yn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ar,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=uu,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var wi=new k,Ol=new k,Yo=new k,Zo=new k,hs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ol.copy(t).add(e).multiplyScalar(.5),Yo.copy(e).sub(t).normalize(),Zo.copy(this.origin).sub(Ol);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yo),a=Zo.dot(this.direction),c=-Zo.dot(Yo),l=Zo.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ol).addScaledVector(Yo,h),d}intersectSphere(t,e){if(t.radius<0)return null;wi.subVectors(t.center,this.origin);let n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,M=n.y-o.y,A=n.z-o.z,S=Math.abs(c),b=Math.abs(l),E=Math.abs(u),N,v,P,O,F,B,Y,z,q,X,K,ft;if(S>=b&&S>=E?(P=c,B=f,q=g,ft=p,c>=0?(N=l,v=u,O=h,F=d,Y=x,z=m,X=M,K=A):(N=u,v=l,O=d,F=h,Y=m,z=x,X=A,K=M)):b>=E?(P=l,B=h,q=x,ft=M,l>=0?(N=u,v=c,O=d,F=f,Y=m,z=g,X=A,K=p):(N=c,v=u,O=f,F=d,Y=g,z=m,X=p,K=A)):(P=u,B=d,q=m,ft=A,u>=0?(N=c,v=l,O=f,F=h,Y=g,z=x,X=p,K=M):(N=l,v=c,O=h,F=f,Y=x,z=g,X=M,K=p)),P===0)return null;let nt=N/P,st=v/P,at=1/P,Et=O-nt*B,Ct=F-st*B,Jt=Y-nt*q,$t=z-st*q,Xt=X-nt*ft,ct=K-st*ft,dt=Xt*$t-ct*Jt,wt=Et*ct-Ct*Xt,Dt=Jt*Ct-$t*Et;if(s){if(dt<0||wt<0||Dt<0)return null}else if((dt<0||wt<0||Dt<0)&&(dt>0||wt>0||Dt>0))return null;let _t=dt+wt+Dt;if(_t===0)return null;let gt=at*(dt*B+wt*q+Dt*ft);return(_t>0?gt<0:gt>0)?null:this.at(gt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lh=new me,as=new hs,Jo=new vn,Dh=new k,$o=new k,Ko=new k,jo=new k,Bl=new k,Qo=new k,Nh=new k,ta=new k,ue=class extends ke{constructor(t=new pe,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Bl.fromBufferAttribute(f,t),o?Qo.addScaledVector(Bl,u):Qo.addScaledVector(Bl.sub(e),u))}e.add(Qo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(Jo.containsPoint(as.origin)===!1&&(as.intersectSphere(Jo,Dh)===null||as.origin.distanceToSquared(Dh)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),as.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=A;S<b;S+=3){let E=a.getX(S),N=a.getX(S+1),v=a.getX(S+2);s=ea(this,p,t,n,l,u,f,E,N,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);s=ea(this,o,t,n,l,u,f,M,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=A;S<b;S+=3){let E=S,N=S+1,v=S+2;s=ea(this,p,t,n,l,u,f,E,N,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=m,A=m+1,S=m+2;s=ea(this,o,t,n,l,u,f,M,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vm(i,t,e,n,s,r,o,a){let c;if(t.side===gn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ji,a),c===null)return null;ta.copy(a),ta.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ta);return l<e.near||l>e.far?null:{distance:l,point:ta.clone(),object:i}}function ea(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,$o),i.getVertexPosition(c,Ko),i.getVertexPosition(l,jo);let u=Vm(i,t,e,n,$o,Ko,jo,Nh);if(u){let f=new k;Vi.getBarycoord(Nh,$o,Ko,jo,f),s&&(u.uv=Vi.getInterpolatedAttribute(s,a,c,l,f,new Tt)),r&&(u.uv1=Vi.getInterpolatedAttribute(r,a,c,l,f,new Tt)),o&&(u.normal=Vi.getInterpolatedAttribute(o,a,c,l,f,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new k,materialIndex:0};Vi.getNormal($o,Ko,jo,h.normal),u.face=h,u.barycoord=f}return u}var Gr=class extends pn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ye,u=Ye,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ks=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Os=new me,Uh=new me,na=[],Fh=new Ne,Gm=new me,Tr=new ue,Ar=new vn,Wr=class extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ks(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ne),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Fh.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(Fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Ar.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Uh.multiplyMatrices(n,Os),Tr.matrixWorld=Uh,Tr.raycast(t,na);for(let o=0,a=na.length;o<a;o++){let c=na[o];c.instanceId=r,c.object=this,e.push(c)}na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ks(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gr(new Float32Array(s*this.count),s,this.count,rc,On));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new vn,Wm=new Tt(.5,.5),ia=new k,js=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],A=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,p-g,b-M).normalize(),s[1].setComponents(l+o,d+u,p+g,b+M).normalize(),s[2].setComponents(l+a,d+f,p+x,b+A).normalize(),s[3].setComponents(l-a,d-f,p-x,b-A).normalize(),n)s[4].setComponents(c,h,m,S).normalize(),s[5].setComponents(l-c,d-h,p-m,b-S).normalize();else if(s[4].setComponents(l-c,d-h,p-m,b-S).normalize(),e===qn)s[5].setComponents(l+c,d+h,p+m,b+S).normalize();else if(e===Xs)s[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=Wm.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qs=class extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Aa=new k,Ra=new k,Oh=new me,Rr=new hs,sa=new vn,zl=new k,Bh=new k,Ca=class extends ke{constructor(t=new pe,e=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Aa.fromBufferAttribute(e,s-1),Ra.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Aa.distanceTo(Ra);t.setAttribute("lineDistance",new Qt(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;Oh.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(Oh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=u.getX(x),M=u.getX(x+1),A=ra(this,t,Rr,c,p,M,x);A&&e.push(A)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=ra(this,t,Rr,c,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=ra(this,t,Rr,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=ra(this,t,Rr,c,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ra(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Aa.fromBufferAttribute(a,s),Ra.fromBufferAttribute(a,r),e.distanceSqToSegment(Aa,Ra,zl,Bh)>n)return;zl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(zl);if(!(l<t.near||l>t.far))return{distance:l,point:Bh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var zh=new k,kh=new k,Xr=class extends Ca{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zh.fromBufferAttribute(e,s),kh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zh.distanceTo(kh);t.setAttribute("lineDistance",new Qt(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new me,$l=new hs,oa=new vn,aa=new k,qr=class extends ke{constructor(t=new pe,e=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;Hh.copy(s).invert(),$l.copy(t.ray).applyMatrix4(Hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let m=l.getX(g);aa.fromBufferAttribute(f,m),Vh(aa,m,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)aa.fromBufferAttribute(f,g),Vh(aa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vh(i,t,e,n,s,r,o){let a=$l.distanceSqToPoint(i);if(a<e){let c=new k;$l.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Yr=class extends pn{constructor(t=[],e=Qi,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},er=class extends pn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends pn{constructor(t,e,n=$n,s,r,o,a=Ye,c=Ye,l,u=ci,f=1){if(u!==ci&&u!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ia=class extends Wi{constructor(t,e=$n,n=Qi,s,r,o=Ye,a=Ye,c,l=ci){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zr=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ue=class i extends pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function g(x,m,p,M,A,S,b,E,N,v,P){let O=S/N,F=b/v,B=S/2,Y=b/2,z=E/2,q=N+1,X=v+1,K=0,ft=0,nt=new k;for(let st=0;st<X;st++){let at=st*F-Y;for(let Et=0;Et<q;Et++){let Ct=Et*O-B;nt[x]=Ct*M,nt[m]=at*A,nt[p]=z,l.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=E>0?1:-1,u.push(nt.x,nt.y,nt.z),f.push(Et/N),f.push(1-st/v),K+=1}}for(let st=0;st<v;st++)for(let at=0;at<N;at++){let Et=h+at+q*st,Ct=h+at+q*(st+1),Jt=h+(at+1)+q*(st+1),$t=h+(at+1)+q*st;c.push(Et,Ct,$t),c.push(Ct,Jt,$t),ft+=6}a.addGroup(d,ft,P),d+=ft,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fs=class i extends pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new k,u=new Tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hi=class i extends pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function M(){let S=new k,b=new k,E=0,N=(e-t)/n;for(let v=0;v<=r;v++){let P=[],O=v/r,F=O*(e-t)+t;for(let B=0;B<=s;B++){let Y=B/s,z=Y*c+a,q=Math.sin(z),X=Math.cos(z);b.x=F*q,b.y=-O*n+m,b.z=F*X,f.push(b.x,b.y,b.z),S.set(q,N,X).normalize(),h.push(S.x,S.y,S.z),d.push(Y,1-O),P.push(g++)}x.push(P)}for(let v=0;v<s;v++)for(let P=0;P<r;P++){let O=x[P][v],F=x[P+1][v],B=x[P+1][v+1],Y=x[P][v+1];(t>0||P!==0)&&(u.push(O,F,Y),E+=3),(e>0||P!==r-1)&&(u.push(F,B,Y),E+=3)}l.addGroup(p,E,0),p+=E}function A(S){let b=g,E=new Tt,N=new k,v=0,P=S===!0?t:e,O=S===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*O,0),h.push(0,O,0),d.push(.5,.5),g++;let F=g;for(let B=0;B<=s;B++){let z=B/s*c+a,q=Math.cos(z),X=Math.sin(z);N.x=P*X,N.y=m*O,N.z=P*q,f.push(N.x,N.y,N.z),h.push(0,O,0),E.x=q*.5+.5,E.y=X*.5*O+.5,d.push(E.x,E.y),g++}for(let B=0;B<s;B++){let Y=b+B,z=F+B;S===!0?u.push(z,z+1,Y):u.push(z+1,z,Y),v+=3}l.addGroup(p,v,S===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Jr=class i extends hi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Tt:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new me;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},nr=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pa=class extends nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Au(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Gh=new k,Wh=new k,kl=new Au,Hl=new Au,Vl=new Au,La=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Wh.subVectors(s[0],s[1]).add(s[0]),l=Wh);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Gh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Gh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),kl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),Hl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Vl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Hl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Vl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(kl.calc(c),Hl.calc(c),Vl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Xm(i,t){let e=1-i;return e*e*t}function qm(i,t){return 2*(1-i)*i*t}function Ym(i,t){return i*i*t}function Lr(i,t,e,n){return Xm(i,t)+qm(i,e)+Ym(i,n)}function Zm(i,t){let e=1-i;return e*e*e*t}function Jm(i,t){let e=1-i;return 3*e*e*i*t}function $m(i,t){return 3*(1-i)*i*i*t}function Km(i,t){return i*i*i*t}function Dr(i,t,e,n,s){return Zm(i,t)+Jm(i,e)+$m(i,n)+Km(i,s)}var $r=class extends An{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,s.x,r.x,o.x,a.x),Dr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Da=class extends An{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,s.x,r.x,o.x,a.x),Dr(t,s.y,r.y,o.y,a.y),Dr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends An{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends An{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends An{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends An{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y),Lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Xh(a,c.x,l.x,u.x,f.x),Xh(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},Kl=Object.freeze({__proto__:null,ArcCurve:Pa,CatmullRomCurve3:La,CubicBezierCurve:$r,CubicBezierCurve3:Da,EllipseCurve:nr,LineCurve:Kr,LineCurve3:Na,QuadraticBezierCurve:jr,QuadraticBezierCurve3:Ua,SplineCurve:Qr}),Fa=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}},ds=class extends Fa{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Kr(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new jr(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new $r(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new nr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mn=class extends ds{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ds().fromJSON(s))}return this}};function jm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=ig(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return to(r,o,e,a,c,l,0),o}function Wf(i,t,e,n,s){let r;if(s===pg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=qh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=qh(o/n|0,i[o],i[o+1],r);return r&&ir(r,r.next)&&(no(r),r=r.next),r}function ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ir(e,e.next)||Ie(e.prev,e,e.next)===0)){if(no(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function to(i,t,e,n,s,r,o){if(!i)return;!o&&r&&cg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?tg(i,n,s,r):Qm(i)){t.push(c.i,i.i,l.i),no(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=eg(ps(i),t),to(i,t,e,n,s,r,2)):o===2&&ng(i,t,e,n,s,r):to(ps(i),t,e,n,s,r,1);break}}}function Qm(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Cr(s,a,r,c,o,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(u,f,h),x=Math.max(a,c,l),m=Math.max(u,f,h),p=jl(d,g,t,e,n),M=jl(x,m,t,e,n),A=i.prevZ,S=i.nextZ;for(;A&&A.z>=p&&S&&S.z<=M;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Cr(a,u,c,f,l,h,A.x,A.y)&&Ie(A.prev,A,A.next)>=0||(A=A.prevZ,S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Cr(a,u,c,f,l,h,S.x,S.y)&&Ie(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Cr(a,u,c,f,l,h,A.x,A.y)&&Ie(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;S&&S.z<=M;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Cr(a,u,c,f,l,h,S.x,S.y)&&Ie(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function eg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ir(n,s)&&qf(n,e,e.next,s)&&eo(n,s)&&eo(s,n)&&(t.push(n.i,e.i,s.i),no(e),no(e.next),e=i=s),e=e.next}while(e!==i);return ps(e)}function ng(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hg(o,a)){let c=Yf(o,a);o=ps(o,o.next),c=ps(c,c.next),to(o,t,e,n,s,r,0),to(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ig(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Wf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ug(l))}s.sort(sg);for(let r=0;r<s.length;r++)e=rg(s[r],e);return e}function sg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function rg(i,t){let e=og(i,t);if(!e)return t;let n=Yf(e,i);return ps(n,n.next),ps(e,e.next)}function og(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ir(i,e))return e;do{if(ir(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Xf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);eo(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&ag(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function ag(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function cg(i,t,e,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lg(s)}function lg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ug(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Xf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Cr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Xf(i,t,e,n,s,r,o,a)}function hg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fg(i,t)&&(eo(i,t)&&eo(t,i)&&dg(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||ir(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ir(i,t){return i.x===t.x&&i.y===t.y}function qf(i,t,e,n){let s=la(Ie(i,t,e)),r=la(Ie(i,t,n)),o=la(Ie(e,n,i)),a=la(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&ca(i,e,t)||r===0&&ca(i,n,t)||o===0&&ca(e,i,n)||a===0&&ca(e,t,n))}function ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function la(i){return i>0?1:i<0?-1:0}function fg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function eo(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function dg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yf(i,t){let e=Ql(i.i,i.x,i.y),n=Ql(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qh(i,t,e,n){let s=Ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var tu=class{static triangulate(t,e,n=2){return jm(t,e,n)}},Nn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Yh(t),Zh(n,t);let o=t.length;e.forEach(Yh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Zh(n,e[c]);let a=tu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Yh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Zn=class i extends pe{constructor(t=new mn([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:mg,A,S=!1,b,E,N,v;if(p){A=p.getSpacedPoints(u),S=!0,h=!1;let ht=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,ht),E=new k,N=new k,v=new k}h||(m=0,d=0,g=0,x=0);let P=a.extractPoints(l),O=P.shape,F=P.holes;if(!Nn.isClockWise(O)){O=O.reverse();for(let ht=0,yt=F.length;ht<yt;ht++){let vt=F[ht];Nn.isClockWise(vt)&&(F[ht]=vt.reverse())}}function Y(ht){let vt=10000000000000001e-36,Mt=ht[0];for(let At=1;At<=ht.length;At++){let Ht=At%ht.length,Bt=ht[Ht],qt=Bt.x-Mt.x,te=Bt.y-Mt.y,V=qt*qt+te*te,oe=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(Mt.x),Math.abs(Mt.y)),Gt=vt*oe*oe;if(V<=Gt){ht.splice(Ht,1),At--;continue}Mt=Bt}}Y(O),F.forEach(Y);let z=F.length,q=O;for(let ht=0;ht<z;ht++){let yt=F[ht];O=O.concat(yt)}function X(ht,yt,vt){return yt||ee("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(yt,vt)}let K=O.length;function ft(ht,yt,vt){let Mt,At,Ht,Bt=ht.x-yt.x,qt=ht.y-yt.y,te=vt.x-ht.x,V=vt.y-ht.y,oe=Bt*Bt+qt*qt,Gt=Bt*V-qt*te;if(Math.abs(Gt)>Number.EPSILON){let U=Math.sqrt(oe),w=Math.sqrt(te*te+V*V),tt=yt.x-qt/U,it=yt.y+Bt/U,Z=vt.x-V/w,L=vt.y+te/w,y=((Z-tt)*V-(L-it)*te)/(Bt*V-qt*te);Mt=tt+Bt*y-ht.x,At=it+qt*y-ht.y;let _=Mt*Mt+At*At;if(_<=2)return new Tt(Mt,At);Ht=Math.sqrt(_/2)}else{let U=!1;Bt>Number.EPSILON?te>Number.EPSILON&&(U=!0):Bt<-Number.EPSILON?te<-Number.EPSILON&&(U=!0):Math.sign(qt)===Math.sign(V)&&(U=!0),U?(Mt=-qt,At=Bt,Ht=Math.sqrt(oe)):(Mt=Bt,At=qt,Ht=Math.sqrt(oe/2))}return new Tt(Mt/Ht,At/Ht)}let nt=[];for(let ht=0,yt=q.length,vt=yt-1,Mt=ht+1;ht<yt;ht++,vt++,Mt++)vt===yt&&(vt=0),Mt===yt&&(Mt=0),nt[ht]=ft(q[ht],q[vt],q[Mt]);let st=[],at,Et=nt.concat();for(let ht=0,yt=z;ht<yt;ht++){let vt=F[ht];at=[];for(let Mt=0,At=vt.length,Ht=At-1,Bt=Mt+1;Mt<At;Mt++,Ht++,Bt++)Ht===At&&(Ht=0),Bt===At&&(Bt=0),at[Mt]=ft(vt[Mt],vt[Ht],vt[Bt]);st.push(at),Et=Et.concat(at)}let Ct;if(m===0)Ct=Nn.triangulateShape(q,F);else{let ht=[],yt=[];for(let vt=0;vt<m;vt++){let Mt=vt/m,At=d*Math.cos(Mt*Math.PI/2),Ht=g*Math.sin(Mt*Math.PI/2)+x;for(let Bt=0,qt=q.length;Bt<qt;Bt++){let te=X(q[Bt],nt[Bt],Ht);wt(te.x,te.y,-At),Mt===0&&ht.push(te)}for(let Bt=0,qt=z;Bt<qt;Bt++){let te=F[Bt];at=st[Bt];let V=[];for(let oe=0,Gt=te.length;oe<Gt;oe++){let U=X(te[oe],at[oe],Ht);wt(U.x,U.y,-At),Mt===0&&V.push(U)}Mt===0&&yt.push(V)}}Ct=Nn.triangulateShape(ht,yt)}let Jt=Ct.length,$t=g+x;for(let ht=0;ht<K;ht++){let yt=h?X(O[ht],Et[ht],$t):O[ht];S?(N.copy(b.normals[0]).multiplyScalar(yt.x),E.copy(b.binormals[0]).multiplyScalar(yt.y),v.copy(A[0]).add(N).add(E),wt(v.x,v.y,v.z)):wt(yt.x,yt.y,0)}for(let ht=1;ht<=u;ht++)for(let yt=0;yt<K;yt++){let vt=h?X(O[yt],Et[yt],$t):O[yt];S?(N.copy(b.normals[ht]).multiplyScalar(vt.x),E.copy(b.binormals[ht]).multiplyScalar(vt.y),v.copy(A[ht]).add(N).add(E),wt(v.x,v.y,v.z)):wt(vt.x,vt.y,f/u*ht)}for(let ht=m-1;ht>=0;ht--){let yt=ht/m,vt=d*Math.cos(yt*Math.PI/2),Mt=g*Math.sin(yt*Math.PI/2)+x;for(let At=0,Ht=q.length;At<Ht;At++){let Bt=X(q[At],nt[At],Mt);wt(Bt.x,Bt.y,f+vt)}for(let At=0,Ht=F.length;At<Ht;At++){let Bt=F[At];at=st[At];for(let qt=0,te=Bt.length;qt<te;qt++){let V=X(Bt[qt],at[qt],Mt);S?wt(V.x,V.y+A[u-1].y,A[u-1].x+vt):wt(V.x,V.y,f+vt)}}}Xt(),ct();function Xt(){let ht=s.length/3;if(h){let yt=0,vt=K*yt;for(let Mt=0;Mt<Jt;Mt++){let At=Ct[Mt];Dt(At[2]+vt,At[1]+vt,At[0]+vt)}yt=u+m*2,vt=K*yt;for(let Mt=0;Mt<Jt;Mt++){let At=Ct[Mt];Dt(At[0]+vt,At[1]+vt,At[2]+vt)}}else{for(let yt=0;yt<Jt;yt++){let vt=Ct[yt];Dt(vt[2],vt[1],vt[0])}for(let yt=0;yt<Jt;yt++){let vt=Ct[yt];Dt(vt[0]+K*u,vt[1]+K*u,vt[2]+K*u)}}n.addGroup(ht,s.length/3-ht,0)}function ct(){let ht=s.length/3,yt=0;dt(q,yt),yt+=q.length;for(let vt=0,Mt=F.length;vt<Mt;vt++){let At=F[vt];dt(At,yt),yt+=At.length}n.addGroup(ht,s.length/3-ht,1)}function dt(ht,yt){let vt=ht.length;for(;--vt>=0;){let Mt=vt,At=vt-1;At<0&&(At=ht.length-1);for(let Ht=0,Bt=u+m*2;Ht<Bt;Ht++){let qt=K*Ht,te=K*(Ht+1),V=yt+Mt+qt,oe=yt+At+qt,Gt=yt+At+te,U=yt+Mt+te;_t(V,oe,Gt,U)}}}function wt(ht,yt,vt){c.push(ht),c.push(yt),c.push(vt)}function Dt(ht,yt,vt){gt(ht),gt(yt),gt(vt);let Mt=s.length/3,At=M.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);Nt(At[0]),Nt(At[1]),Nt(At[2])}function _t(ht,yt,vt,Mt){gt(ht),gt(yt),gt(Mt),gt(yt),gt(vt),gt(Mt);let At=s.length/3,Ht=M.generateSideWallUV(n,s,At-6,At-3,At-2,At-1);Nt(Ht[0]),Nt(Ht[1]),Nt(Ht[3]),Nt(Ht[1]),Nt(Ht[2]),Nt(Ht[3])}function gt(ht){s.push(c[ht*3+0]),s.push(c[ht*3+1]),s.push(c[ht*3+2])}function Nt(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Kl[s.type]().fromJSON(s)),new i(n,t.options)}},mg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Tt(r,o),new Tt(a,c),new Tt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Tt(o,1-c),new Tt(l,1-f),new Tt(h,1-g),new Tt(x,1-p)]:[new Tt(a,1-c),new Tt(u,1-f),new Tt(d,1-g),new Tt(m,1-p)]}};function gg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var io=class i extends pe{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new k,h=new Tt,d=new k,g=new k,x=new k,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let M=0;M<=e;M++){let A=n+M*u*s,S=Math.sin(A),b=Math.cos(A);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*S,f.y=t[E].y,f.z=t[E].x*b,o.push(f.x,f.y,f.z),h.x=M/e,h.y=E/(t.length-1),a.push(h.x,h.y);let N=c[3*E+0]*S,v=c[3*E+1],P=c[3*E+0]*b;l.push(N,v,P)}}for(let M=0;M<e;M++)for(let A=0;A<t.length-1;A++){let S=A+M*t.length,b=S,E=S+t.length,N=S+t.length+1,v=S+1;r.push(b,E,v),r.push(N,v,E)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ai=class i extends pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*h-o;for(let A=0;A<l;A++){let S=A*f-r;g.push(S,-M,0),x.push(0,0,1),m.push(A/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let A=M+l*p,S=M+l*(p+1),b=M+1+l*(p+1),E=M+1+l*p;d.push(A,S,E),d.push(S,b,E)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},so=class i extends pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new k,g=new Tt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,A=M,S=M+n+1,b=M+n+2,E=M+1;a.push(A,S,E),a.push(S,b,E)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Xi=class i extends pe{constructor(t=new mn([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,g=h.holes;Nn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Nn.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Nn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){let M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],A=M[0]+f,S=M[1]+f,b=M[2]+f;n.push(A,S,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return xg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function xg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Rn=class i extends pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new k,h=new k,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],A=p/n,S=o+A*a,b=t*Math.cos(S),E=Math.sqrt(t*t-b*b),N=0;p===0&&o===0?N=.5/e:p===n&&c===Math.PI&&(N=-.5/e);for(let v=0;v<=e;v++){let P=v/e,O=s+P*r;f.x=-E*Math.cos(O),f.y=b,f.z=E*Math.sin(O),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(P+N,1-A),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let A=u[p][M+1],S=u[p][M],b=u[p+1][M],E=u[p+1][M+1];(p!==0||o>0)&&d.push(A,S,E),(p!==n-1||c<Math.PI)&&d.push(S,b,E)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ri=class i extends pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new k,d=new k,g=new k;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,S=(s+1)*x+m;c.push(p,M,S),c.push(M,A,S)}this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ro=class extends pe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new k,r=new k;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let g=h,x=h+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),Jh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Jh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Jh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if($h(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($h(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function $h(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ru(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var wo={clone:_s,merge:ln},_g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Oa=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},cn=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sr=class extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=ja,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ba=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},za=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ka=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zl:r=t,a=2*e-n;break;case Jl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:o=t,c=2*n-e;break;case Jl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,M=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,A=(-1-d)*m+(1.5+d)*x+.5*g,S=d*m-d*x;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+M*o[l+b]+A*o[c+b]+S*o[f+b];return r}},Ha=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Va=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ga=class extends qi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=d*h+g*2,M=f[p],A=f[p+1],S=t*h+g*2,b=u[S],E=u[S+1],N=Mg(n,e,M,b,s);r[g]=Zf(N,x,A,E,m)}return r}};function Zf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function bg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Mg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Zf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=bg(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bs(e,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bs(t.times,Array),values:Bs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Gl(t.settings)&&(n.settings={inTangents:Bs(t.settings.inTangents,Array),outTangents:Bs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break;case ql:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return da;case this.InterpolantFactoryMethodBezier:return ql}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Gl(this.settings)&&(Kh(this.settings.inTangents,t),Kh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ee("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ee("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&lm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ee("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Gl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Sa;var Yi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Nr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Wa.prototype.ValueTypeName="color";var Xa=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="number";var qa=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Un.slerpFlat(r,0,o,l-a,o,l,c);return r}},oo=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Nr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Ya.prototype.ValueTypeName="vector";var Za=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jf=new Za,Ja=class{constructor(t){this.manager=t!==void 0?t:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ms=class extends rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wl=new me,jh=new k,Qh=new k,ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),Qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ua=new k,ha=new Un,ri=new k,co=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,ha,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,ha,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new k,tf=new Tt,ef=new Tt,dn=class extends co{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,tf,ef),e.subVectors(ef,tf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var eu=class extends ao{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},lo=class extends rr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ji=class extends co{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nu=class extends ao{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new nu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var uo=class extends pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var zs=-90,ks=1,$a=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(zs,ks,t,e);s.layers=this.layers,this.add(s);let r=new dn(zs,ks,t,e);r.layers=this.layers,this.add(r);let o=new dn(zs,ks,t,e);o.layers=this.layers,this.add(o);let a=new dn(zs,ks,t,e);a.layers=this.layers,this.add(a);let c=new dn(zs,ks,t,e);c.layers=this.layers,this.add(c);let l=new dn(zs,ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ka=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Cu="\\[\\]\\.:\\/",Sg=new RegExp("["+Cu+"]","g"),Iu="[^"+Cu+"]",Eg="[^"+Cu.replace("\\.","")+"]",wg=/((?:WC+[\/:])*)/.source.replace("WC",Iu),Tg=/(WCOD+)?/.source.replace("WCOD",Eg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),Cg=new RegExp("^"+wg+Tg+Ag+Rg+"$"),Ig=["material","materials","bones","map"],iu=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(t){let e=Cg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ig.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=iu;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AM=new Float32Array(1);var Ki=class extends Vr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var nf=new me,ho=class{constructor(t,e,n=0,s=1/0){this.ray=new hs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(t,e=!0,n=[]){return su(t,this,n,e),n.sort(sf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)su(t[s],this,n,e);return n.sort(sf),n}};function sf(i,t){return i.distance-t.distance}function su(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)su(r[o],t,e,!0)}}var ru=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var rf=new k,fa=new k,Hs=new k,Vs=new k,Xl=new k,Pg=new k,Lg=new k,fo=class{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){rf.subVectors(t,this.start),fa.subVectors(this.end,this.start);let n=fa.dot(fa);if(n===0)return 0;let r=fa.dot(rf)/n;return e&&(r=se(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Pg,n=Lg){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;Hs.subVectors(l,a),Vs.subVectors(u,c),Xl.subVectors(a,c);let f=Hs.dot(Hs),h=Vs.dot(Vs),d=Vs.dot(Xl);if(f<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(f<=s)r=0,o=d/h,o=se(o,0,1);else{let g=Hs.dot(Xl);if(h<=s)o=0,r=se(-g/f,0,1);else{let x=Hs.dot(Vs),m=f*h-x*x;m!==0?r=se((x*d-g*h)/m,0,1):r=0,o=(x*r+d)/h,o<0?(o=0,r=se(-g/f,0,1)):o>1&&(o=1,r=se((x-g)/f,0,1))}}return e.copy(a).addScaledVector(Hs,r),n.copy(c).addScaledVector(Vs,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Pu(i,t,e,n){let s=Dg(n);switch(e){case Mu:return i*t;case rc:return i*t/s.components*s.byteLength;case oc:return i*t/s.components*s.byteLength;case ns:return i*t*2/s.components*s.byteLength;case ac:return i*t*2/s.components*s.byteLength;case Su:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case cc:return i*t*4/s.components*s.byteLength;case yo:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uc:case fc:return Math.max(i,16)*Math.max(t,8)/4;case lc:case hc:return Math.max(i,8)*Math.max(t,8)/2;case dc:case pc:case gc:case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mc:case Mo:case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dc:case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case Mn:case yu:return{byteLength:1,components:1};case cr:case _u:case Kn:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case $n:case nc:case On:return{byteLength:4,components:1};case vu:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bg(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#endif`,O0=`uniform sampler2D dfgLUT;
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
}`,B0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
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
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ex=`float getShadowMask() {
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
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kx=`uniform sampler2D t2D;
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
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
}`,qx=`#if DEPTH_PACKING == 3200
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
}`,Yx=`#define DISTANCE
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#define LAMBERT
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define MATCAP
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
}`,sy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,oy=`#define NORMAL
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
}`,ay=`#define PHONG
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
}`,cy=`#define PHONG
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
}`,ly=`#define STANDARD
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
}`,uy=`#define STANDARD
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
}`,hy=`#define TOON
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
}`,fy=`#define TOON
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
}`,dy=`uniform float size;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 color;
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
}`,xy=`uniform float rotation;
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
}`,yy=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:zg,alphahash_pars_fragment:kg,alphamap_fragment:Hg,alphamap_pars_fragment:Vg,alphatest_fragment:Gg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:qg,batching_pars_vertex:Yg,batching_vertex:Zg,begin_vertex:Jg,beginnormal_vertex:$g,bsdfs:Kg,iridescence_fragment:jg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:o0,color_vertex:a0,common:c0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:u0,displacementmap_pars_vertex:h0,displacementmap_vertex:f0,emissivemap_fragment:d0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:x0,envmap_common_pars_fragment:y0,envmap_pars_fragment:_0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:P0,envmap_vertex:b0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:E0,fog_pars_fragment:w0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:I0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:k0,lightprobes_pars_fragment:H0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:Z0,map_particle_pars_fragment:J0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:K0,morphinstance_vertex:j0,morphcolor_vertex:Q0,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:sx,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:hx,iridescence_pars_fragment:fx,opaque_fragment:dx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:xx,dithering_pars_fragment:yx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Mx,shadowmap_vertex:Sx,shadowmask_pars_fragment:Ex,skinbase_vertex:wx,skinning_pars_vertex:Tx,skinning_vertex:Ax,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Ix,tonemapping_fragment:Px,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Nx,uv_pars_fragment:Ux,uv_pars_vertex:Fx,uv_vertex:Ox,worldpos_vertex:Bx,background_vert:zx,background_frag:kx,backgroundCube_vert:Hx,backgroundCube_frag:Vx,cube_vert:Gx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distance_vert:Yx,distance_frag:Zx,equirect_vert:Jx,equirect_frag:$x,linedashed_vert:Kx,linedashed_frag:jx,meshbasic_vert:Qx,meshbasic_frag:ty,meshlambert_vert:ey,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:cy,meshphysical_vert:ly,meshphysical_frag:uy,meshtoon_vert:hy,meshtoon_frag:fy,points_vert:dy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:xy,sprite_frag:yy},Pt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},xn={basic:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:ln([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:ln([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:ln([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:ln([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:ln([Pt.points,Pt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:ln([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:ln([Pt.common,Pt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:ln([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:ln([Pt.sprite,Pt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:ln([Pt.common,Pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:ln([Pt.lights,Pt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};xn.physical={uniforms:ln([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Hc={r:0,b:0,g:0},_y=new me,yd=new re;yd.set(-1,0,0,0,1,0,0,0,1);function vy(i,t,e,n,s,r){let o=new Yt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let S=M.backgroundBlurriness>0;A=t.get(A,S)}return A}function g(M){let A=!1,S=d(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,A){let S=d(A);S&&(S.isCubeTexture||S.mapping===go)?(l===void 0&&(l=new ue(new Ue(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:_s(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yd),l.material.toneMapped=de.getTransfer(S.colorSpace)!==ve,(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ue(new Ai(2,2),new He({name:"BackgroundMaterial",uniforms:_s(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=de.getTransfer(S.colorSpace)!==ve,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(Hc,Ru(i)),e.buffers.color.setClear(Hc.r,Hc.g,Hc.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function by(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(F,B,Y,z,q){let X=!1,K=f(F,z,Y,B);r!==K&&(r=K,l(r.object)),X=d(F,z,Y,q),X&&g(F,z,Y,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(F,B,Y,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function f(F,B,Y,z){let q=z.wireframe===!0,X=n[B.id];X===void 0&&(X={},n[B.id]=X);let K=F.isInstancedMesh===!0?F.id:0,ft=X[K];ft===void 0&&(ft={},X[K]=ft);let nt=ft[Y.id];nt===void 0&&(nt={},ft[Y.id]=nt);let st=nt[q];return st===void 0&&(st=h(c()),nt[q]=st),st}function h(F){let B=[],Y=[],z=[];for(let q=0;q<e;q++)B[q]=0,Y[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:z,object:F,attributes:{},index:null}}function d(F,B,Y,z){let q=r.attributes,X=B.attributes,K=0,ft=Y.getAttributes();for(let nt in ft)if(ft[nt].location>=0){let at=q[nt],Et=X[nt];if(Et===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(Et=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(Et=F.instanceColor)),at===void 0||at.attribute!==Et||Et&&at.data!==Et.data)return!0;K++}return r.attributesNum!==K||r.index!==z}function g(F,B,Y,z){let q={},X=B.attributes,K=0,ft=Y.getAttributes();for(let nt in ft)if(ft[nt].location>=0){let at=X[nt];at===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(at=F.instanceColor));let Et={};Et.attribute=at,at&&at.data&&(Et.data=at.data),q[nt]=Et,K++}r.attributes=q,r.attributesNum=K,r.index=z}function x(){let F=r.newAttributes;for(let B=0,Y=F.length;B<Y;B++)F[B]=0}function m(F){p(F,0)}function p(F,B){let Y=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;Y[F]=1,z[F]===0&&(i.enableVertexAttribArray(F),z[F]=1),q[F]!==B&&(i.vertexAttribDivisor(F,B),q[F]=B)}function M(){let F=r.newAttributes,B=r.enabledAttributes;for(let Y=0,z=B.length;Y<z;Y++)B[Y]!==F[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function A(F,B,Y,z,q,X,K){K===!0?i.vertexAttribIPointer(F,B,Y,q,X):i.vertexAttribPointer(F,B,Y,z,q,X)}function S(F,B,Y,z){x();let q=z.attributes,X=Y.getAttributes(),K=B.defaultAttributeValues;for(let ft in X){let nt=X[ft];if(nt.location>=0){let st=q[ft];if(st===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(st=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(st=F.instanceColor)),st!==void 0){let at=st.normalized,Et=st.itemSize,Ct=t.get(st);if(Ct===void 0)continue;let Jt=Ct.buffer,$t=Ct.type,Xt=Ct.bytesPerElement,ct=$t===i.INT||$t===i.UNSIGNED_INT||st.gpuType===nc;if(st.isInterleavedBufferAttribute){let dt=st.data,wt=dt.stride,Dt=st.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<nt.locationSize;_t++)p(nt.location+_t,dt.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<nt.locationSize;_t++)m(nt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let _t=0;_t<nt.locationSize;_t++)A(nt.location+_t,Et/nt.locationSize,$t,at,wt*Xt,(Dt+Et/nt.locationSize*_t)*Xt,ct)}else{if(st.isInstancedBufferAttribute){for(let dt=0;dt<nt.locationSize;dt++)p(nt.location+dt,st.meshPerAttribute);F.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let dt=0;dt<nt.locationSize;dt++)m(nt.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let dt=0;dt<nt.locationSize;dt++)A(nt.location+dt,Et/nt.locationSize,$t,at,Et*Xt,Et/nt.locationSize*dt*Xt,ct)}}else if(K!==void 0){let at=K[ft];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(nt.location,at);break;case 3:i.vertexAttrib3fv(nt.location,at);break;case 4:i.vertexAttrib4fv(nt.location,at);break;default:i.vertexAttrib1fv(nt.location,at)}}}}M()}function b(){P();for(let F in n){let B=n[F];for(let Y in B){let z=B[Y];for(let q in z){let X=z[q];for(let K in X)u(X[K].object),delete X[K];delete z[q]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let B=n[F.id];for(let Y in B){let z=B[Y];for(let q in z){let X=z[q];for(let K in X)u(X[K].object),delete X[K];delete z[q]}}delete n[F.id]}function N(F){for(let B in n){let Y=n[B];for(let z in Y){let q=Y[z];if(q[F.id]===void 0)continue;let X=q[F.id];for(let K in X)u(X[K].object),delete X[K];delete q[F.id]}}}function v(F){for(let B in n){let Y=n[B],z=F.isInstancedMesh===!0?F.id:0,q=Y[z];if(q!==void 0){for(let X in q){let K=q[X];for(let ft in K)u(K[ft].object),delete K[ft];delete q[X]}delete Y[z],Object.keys(Y).length===0&&delete n[B]}}}function P(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function My(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Bn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){let v=N===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Mn&&N!==On&&!v&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Kt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:S,maxSamples:b,samples:E}}function Ey(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Tn,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let M=r?0:n,A=M*4,S=p.clippingState||null;c.value=S,S=u(g,h,A,d);for(let b=0;b!==A;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=d;A!==x;++A,S+=4)o.copy(f[A]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var fr=4,wy=6,Ty=20,Ay=256,To=new Ji,$f=new Yt,Lu=null,Du=0,Nu=0,Uu=!1,Ry=new k,vs=new k,Gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ry}=r;Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lu,Du,Nu),this._renderer.xr.enabled=Uu,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Kn,format:Bn,colorSpace:Ur,depthBuffer:!1},s=Kf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cy(r)),this._blurMaterial=Py(r,t,e),this._ggxMaterial=Iy(r,t,e)}return s}_compileMaterial(t){let e=new ue(new pe,t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,n,s,r){let c=new dn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor($f),f.toneMapping=Jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new Ue,new tn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy($f),p=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):S===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;hr(s,S*b,A>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qi||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,To)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-fr?n-g+fr:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,hr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,To),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,hr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,To)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-fr?s-this._lodMax+fr:0),h=4*(this._cubeSize-u);hr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,To)}};function Cy(i){let t=[],e=[],n=i,s=i-fr+1+wy;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,A=p>2?0:-1,S=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(S,d*h*p);for(let b=0;b<h;b++){let E=u[b*2]*2-1,N=u[b*2+1]*2-1;p===0?vs.set(1,N,E):p===1?vs.set(-E,1,-N):p===2?vs.set(-E,N,1):p===3?vs.set(-1,N,-E):p===4?vs.set(-E,-1,N):vs.set(E,N,-1),vs.toArray(x,(p*h+b)*d)}}let m=new pe;m.setAttribute("position",new ze(g,d)),m.setAttribute("outputDirection",new ze(x,d)),e.push(new ue(m,null)),n>fr&&n--}return{lodMeshes:e,sizeLods:t}}function Kf(i,t,e){let n=new _n(i,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Iy(i,t,e){return new He({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ay,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Py(i,t,e){return new He({name:"SphericalGaussianBlur",defines:{SAMPLES:Ty,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function jf(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Qf(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wc=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:fi});r.uniforms.tEquirect.value=e;let o=new ue(s,r),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=Qe),new $a(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Ly(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Qa||d===tc)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Wc(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Qa||d===tc,x=d===Qi||d===ys;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Gc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Gc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Qa?h.mapping=Qi:d===tc&&(h.mapping=ys),h}function c(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Dy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function Ny(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let M=d.array;x=d.version;for(let A=0,S=M.length;A<S;A+=3){let b=M[A+0],E=M[A+1],N=M[A+2];h.push(b,E,E,N,N,b)}}else{let M=g.array;x=g.version;for(let A=0,S=M.length/3-1;A<S;A+=3){let b=A+0,E=A+1,N=A+2;h.push(b,E,E,N,N,b)}}let m=new(g.count>=65535?Hr:kr)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Uy(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Oy(i,t,e){let n=new WeakMap,s=new be;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let P=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let S=a.attributes.position.count*A,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*b*4*f),N=new zr(E,S,b,f);N.type=On,N.needsUpdate=!0;let v=A*4;for(let O=0;O<f;O++){let F=m[O],B=p[O],Y=M[O],z=S*b*4*O;for(let q=0;q<F.count;q++){let X=q*v;d===!0&&(s.fromBufferAttribute(F,q),E[z+X+0]=s.x,E[z+X+1]=s.y,E[z+X+2]=s.z,E[z+X+3]=0),g===!0&&(s.fromBufferAttribute(B,q),E[z+X+4]=s.x,E[z+X+5]=s.y,E[z+X+6]=s.z,E[z+X+7]=0),x===!0&&(s.fromBufferAttribute(Y,q),E[z+X+8]=s.x,E[z+X+9]=s.y,E[z+X+10]=s.z,E[z+X+11]=Y.itemSize===4?s.w:1)}}h={count:f,texture:N,size:new Tt(S,b)},n.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function By(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var zy={[hu]:"LINEAR_TONE_MAPPING",[fu]:"REINHARD_TONE_MAPPING",[du]:"CINEON_TONE_MAPPING",[mo]:"ACES_FILMIC_TONE_MAPPING",[mu]:"AGX_TONE_MAPPING",[gu]:"NEUTRAL_TONE_MAPPING",[pu]:"CUSTOM_TONE_MAPPING"};function ky(i,t,e,n,s,r){let o=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new pe;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new Oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ue(l,u),h=new Ji(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,M=[],A=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),c!==null&&c.setSize(S,b);for(let E=0;E<M.length;E++){let N=M[E];N.setSize&&N.setSize(S,b)}},this.setEffects=function(S){M=S,A=M.length>0&&M[0].isRenderPass===!0;let b=o.width,E=o.height;M.length>0&&a===null&&(a=new _n(b,E,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(b,E,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<M.length;N++){let v=M[N];v.setSize&&v.setSize(b,E)}},this.begin=function(S,b){if(x||S.toneMapping===Jn&&M.length===0)return!1;if(p=b,b!==null){let E=b.width,N=b.height;(o.width!==E||o.height!==N)&&this.setSize(E,N)}return A===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=Jn,!0},this.hasRenderPass=function(){return A},this.end=function(S,b){S.toneMapping=m,x=!0;let E=o,N=a;for(let v=0;v<M.length;v++){let P=M[v];P.enabled!==!1&&(P.render(S,N,E,b),P.needsSwap!==!1&&(E=N,N=N===a?c:a))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},de.getTransfer(d)===ve&&(u.defines.SRGB_TRANSFER="");let v=zy[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var _d=new pn,Bu=new Wi(1,1),vd=new zr,bd=new Ta,Md=new Yr,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yc(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Xy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Ge(e,n)}}function qy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Ge(e,n)}}function Yy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Ge(e,n)}}function Zy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function jy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function n_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bu.compareFunction=e.isReversedDepthBuffer()?kc:zc,r=Bu):r=_d,e.setTexture2D(t||r,s)}function i_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bd,s)}function s_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Md,s)}function r_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vd,s)}function o_(i){switch(i){case 5126:return Hy;case 35664:return Vy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return $y;case 35669:case 35673:return Ky;case 5125:return jy;case 36294:return Qy;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function a_(i,t){i.uniform1fv(this.addr,t)}function c_(i,t){let e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function l_(i,t){let e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function u_(i,t){let e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function h_(i,t){let e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function f_(i,t){let e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function d_(i,t){let e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function p_(i,t){i.uniform1iv(this.addr,t)}function m_(i,t){i.uniform2iv(this.addr,t)}function g_(i,t){i.uniform3iv(this.addr,t)}function x_(i,t){i.uniform4iv(this.addr,t)}function y_(i,t){i.uniform1uiv(this.addr,t)}function __(i,t){i.uniform2uiv(this.addr,t)}function v_(i,t){i.uniform3uiv(this.addr,t)}function b_(i,t){i.uniform4uiv(this.addr,t)}function M_(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Bu:o=_d;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function S_(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bd,r[o])}function E_(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Md,r[o])}function w_(i,t,e){let n=this.cache,s=t.length,r=Yc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vd,r[o])}function T_(i){switch(i){case 5126:return a_;case 35664:return c_;case 35665:return l_;case 35666:return u_;case 35674:return h_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return x_;case 5125:return y_;case 36294:return __;case 36295:return v_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return w_}}var zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o_(e.type)}},ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=T_(e.type)}},Hu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function A_(i,t,e){let n=i.name,s=n.length;for(Fu.lastIndex=0;;){let r=Fu.exec(n),o=Fu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rd(e,l===void 0?new zu(a,i,t):new ku(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Hu(a),rd(e,f)),e=f}}}var dr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);A_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var R_=37297,C_=0;function I_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ad=new re;function P_(i){de._getMatrix(ad,de.workingColorSpace,i);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+I_(i.getShaderSource(t),a)}else return r}function L_(i,t){let e=P_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var D_={[hu]:"Linear",[fu]:"Reinhard",[du]:"Cineon",[mo]:"ACESFilmic",[mu]:"AgX",[gu]:"Neutral",[pu]:"Custom"};function N_(i,t){let e=D_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vc=new k;function U_(){de.getLuminanceCoefficients(Vc);let i=Vc.x.toFixed(4),t=Vc.y.toFixed(4),e=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function O_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ro(i){return i!==""}function ld(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ud(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(i){return i.replace(z_,H_)}var k_=new Map;function H_(i,t){let e=ce[t];if(e===void 0){let n=k_.get(t);if(n!==void 0)e=ce[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vu(e)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(i){return i.replace(V_,G_)}function G_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var W_={[gs]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function X_(i){return W_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var q_={[Qi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE_UV"};function Y_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":q_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Z_={[ys]:"ENVMAP_MODE_REFRACTION"};function J_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Z_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $_={[ja]:"ENVMAP_BLENDING_MULTIPLY",[Af]:"ENVMAP_BLENDING_MIX",[Rf]:"ENVMAP_BLENDING_ADD"};function K_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$_[i.combine]||"ENVMAP_BLENDING_NONE"}function j_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Q_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=X_(e),l=Y_(e),u=J_(e),f=K_(e),h=j_(e),d=F_(e),g=O_(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(m=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Jn?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,L_("linearToOutputTexel",e.outputColorSpace),U_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Vu(o),o=ld(o,e),o=ud(o,e),a=Vu(a),a=ld(a,e),a=ud(a,e),o=hd(o),a=hd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=M+m+o,S=M+p+a,b=od(s,s.VERTEX_SHADER,A),E=od(s,s.FRAGMENT_SHADER,S);s.attachShader(x,b),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(F){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",Y=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(E)||"",q=B.trim(),X=Y.trim(),K=z.trim(),ft=!0,nt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,E);else{let st=cd(s,b,"vertex"),at=cd(s,E,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+st+`
`+at)}else q!==""?Kt("WebGLProgram: Program Info Log:",q):(X===""||K==="")&&(nt=!1);nt&&(F.diagnostics={runnable:ft,programLog:q,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(b),s.deleteShader(E),v=new dr(s,x),P=B_(s,x)}let v;this.getUniforms=function(){return v===void 0&&N(this),v};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(x,R_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=C_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}var tv=0,Gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wu(t),e.set(t,n)),n}},Wu=class{constructor(t){this.id=tv++,this.code=t,this.usedTimes=0}};function ev(i){return i===ns||i===Mo||i===So}function nv(i,t,e,n,s,r){let o=new Js,a=new Gu,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,P,O,F,B,Y){let z=F.fog,q=B.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ft=t.get(v.envMap||X,K),nt=ft&&ft.mapping===go?ft.image.height:null,st=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Kt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Et=at!==void 0?at.length:0,Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Jt,$t,Xt,ct;if(st){let ie=xn[st];Jt=ie.vertexShader,$t=ie.fragmentShader}else{Jt=v.vertexShader,$t=v.fragmentShader;let ie=a.getVertexShaderStage(v),Zt=a.getFragmentShaderStage(v);a.update(v,ie,Zt),Xt=ie.id,ct=Zt.id}let dt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,gt=!!v.map,Nt=!!v.matcap,ht=!!ft,yt=!!v.aoMap,vt=!!v.lightMap,Mt=!!v.bumpMap&&v.wireframe===!1,At=!!v.normalMap,Ht=!!v.displacementMap,Bt=!!v.emissiveMap,qt=!!v.metalnessMap,te=!!v.roughnessMap,V=v.anisotropy>0,oe=v.clearcoat>0,Gt=v.dispersion>0,U=v.retroreflectivity>0,w=v.iridescence>0,tt=v.sheen>0,it=v.transmission>0,Z=V&&!!v.anisotropyMap,L=oe&&!!v.clearcoatMap,y=oe&&!!v.clearcoatNormalMap,_=oe&&!!v.clearcoatRoughnessMap,T=w&&!!v.iridescenceMap,I=w&&!!v.iridescenceThicknessMap,D=tt&&!!v.sheenColorMap,G=tt&&!!v.sheenRoughnessMap,H=!!v.specularMap,et=!!v.specularColorMap,Q=!!v.specularIntensityMap,pt=it&&!!v.transmissionMap,C=it&&!!v.thicknessMap,j=!!v.gradientMap,W=!!v.alphaMap,mt=v.alphaTest>0,xt=!!v.alphaHash,ut=!!v.extensions,bt=Jn;v.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(bt=i.toneMapping);let Rt={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:Jt,fragmentShader:$t,defines:v.defines,customVertexShaderID:Xt,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:gt,matcap:Nt,envMap:ht,envMapMode:ht&&ft.mapping,envMapCubeUVHeight:nt,aoMap:yt,lightMap:vt,bumpMap:Mt,normalMap:At,displacementMap:Ht,emissiveMap:Bt,normalMapObjectSpace:At&&v.normalMapType===Pf,normalMapTangentSpace:At&&v.normalMapType===Eo,packedNormalMap:At&&v.normalMapType===Eo&&ev(v.normalMap.format),metalnessMap:qt,roughnessMap:te,anisotropy:V,anisotropyMap:Z,clearcoat:oe,clearcoatMap:L,clearcoatNormalMap:y,clearcoatRoughnessMap:_,dispersion:Gt,retroreflection:U,iridescence:w,iridescenceMap:T,iridescenceThicknessMap:I,sheen:tt,sheenColorMap:D,sheenRoughnessMap:G,specularMap:H,specularColorMap:et,specularIntensityMap:Q,transmission:it,transmissionMap:pt,thicknessMap:C,gradientMap:j,opaque:v.transparent===!1&&v.blending===ar&&v.alphaToCoverage===!1,alphaMap:W,alphaTest:mt,alphaHash:xt,combine:v.combine,mapUv:gt&&g(v.map.channel),aoMapUv:yt&&g(v.aoMap.channel),lightMapUv:vt&&g(v.lightMap.channel),bumpMapUv:Mt&&g(v.bumpMap.channel),normalMapUv:At&&g(v.normalMap.channel),displacementMapUv:Ht&&g(v.displacementMap.channel),emissiveMapUv:Bt&&g(v.emissiveMap.channel),metalnessMapUv:qt&&g(v.metalnessMap.channel),roughnessMapUv:te&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:L&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:y&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:T&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:I&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:D&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:G&&g(v.sheenRoughnessMap.channel),specularMapUv:H&&g(v.specularMap.channel),specularColorMapUv:et&&g(v.specularColorMap.channel),specularIntensityMapUv:Q&&g(v.specularIntensityMap.channel),transmissionMapUv:pt&&g(v.transmissionMap.channel),thicknessMapUv:C&&g(v.thicknessMap.channel),alphaMapUv:W&&g(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(At||V),vertexNormals:!!q.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(gt||W),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||q.attributes.normal===void 0&&At===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ct,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:gt&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&de.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ut&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&v.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function m(v){let P=[];if(v.shaderID?P.push(v.shaderID):(P.push(v.customVertexShaderID),P.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)P.push(O),P.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(p(P,v),M(P,v),P.push(i.outputColorSpace)),P.push(v.customProgramCacheKey),P.join()}function p(v,P){v.push(P.precision),v.push(P.outputColorSpace),v.push(P.envMapMode),v.push(P.envMapCubeUVHeight),v.push(P.mapUv),v.push(P.alphaMapUv),v.push(P.lightMapUv),v.push(P.aoMapUv),v.push(P.bumpMapUv),v.push(P.normalMapUv),v.push(P.displacementMapUv),v.push(P.emissiveMapUv),v.push(P.metalnessMapUv),v.push(P.roughnessMapUv),v.push(P.anisotropyMapUv),v.push(P.clearcoatMapUv),v.push(P.clearcoatNormalMapUv),v.push(P.clearcoatRoughnessMapUv),v.push(P.iridescenceMapUv),v.push(P.iridescenceThicknessMapUv),v.push(P.sheenColorMapUv),v.push(P.sheenRoughnessMapUv),v.push(P.specularMapUv),v.push(P.specularColorMapUv),v.push(P.specularIntensityMapUv),v.push(P.transmissionMapUv),v.push(P.thicknessMapUv),v.push(P.combine),v.push(P.fogExp2),v.push(P.sizeAttenuation),v.push(P.morphTargetsCount),v.push(P.morphAttributeCount),v.push(P.numSunLights),v.push(P.numDirLights),v.push(P.numPointLights),v.push(P.numSpotLights),v.push(P.numSpotLightMaps),v.push(P.numHemiLights),v.push(P.numRectAreaLights),v.push(P.numSunLightShadows),v.push(P.numDirLightShadows),v.push(P.numPointLightShadows),v.push(P.numSpotLightShadows),v.push(P.numSpotLightShadowsWithMaps),v.push(P.numLightProbes),v.push(P.shadowMapType),v.push(P.toneMapping),v.push(P.numClippingPlanes),v.push(P.numClipIntersection),v.push(P.depthPacking)}function M(v,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function A(v){let P=d[v.type],O;if(P){let F=xn[P];O=wo.clone(F.uniforms)}else O=v.uniforms;return O}function S(v,P){let O=u.get(P);return O!==void 0?++O.usedTimes:(O=new Q_(i,P,v,s),l.push(O),u.set(P,O)),O}function b(v){if(--v.usedTimes===0){let P=l.indexOf(v);l[P]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function N(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:N}}function iv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function c(h,d,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let A=a(h,d,g,x,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function l(h,d,g,x,m,p){let M=a(h,d,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,d){e.length>1&&e.sort(h||sv),n.length>1&&n.sort(d||dd),s.length>1&&s.sort(d||dd)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function rv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ov(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Yt};break;case"SpotLight":e={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function av(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cv=0;function lv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function uv(i){let t=new ov,e=av(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new me,o=new me;function a(l){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,A=0,S=0,b=0,E=0,N=0,v=0,P=0,O=0;l.sort(lv);for(let B=0,Y=l.length;B<Y;B++){let z=l[B],q=z.color,X=z.intensity,K=z.distance,ft=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ns?ft=z.shadow.map.texture:ft=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=q.r*X,f+=q.g*X,h+=q.b*X;else if(z.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(z.sh.coefficients[nt],X);O++}else if(z.isSunLight){let nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let st=z.shadow,at=e.get(z);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=ft;let Et=st.getViewportCount();for(let Ct=0;Ct<Et;Ct++)n.sunShadowMatrix[x+Ct]=st.getMatrix(Ct),n.sunShadowCascade[x+Ct]=st._cascadeData[Ct];x+=Et,g++}n.sun[d]=nt,d++}else if(z.isDirectionalLight){let nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let st=z.shadow,at=e.get(z);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=ft,n.directionalShadowMatrix[m]=z.shadow.matrix,b++}n.directional[m]=nt,m++}else if(z.isSpotLight){let nt=t.get(z);nt.position.setFromMatrixPosition(z.matrixWorld),nt.color.copy(q).multiplyScalar(X),nt.distance=K,nt.coneCos=Math.cos(z.angle),nt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),nt.decay=z.decay,n.spot[M]=nt;let st=z.shadow;if(z.map&&(n.spotLightMap[v]=z.map,v++,st.updateMatrices(z),z.castShadow&&P++),n.spotLightMatrix[M]=st.matrix,z.castShadow){let at=e.get(z);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.spotShadow[M]=at,n.spotShadowMap[M]=ft,N++}M++}else if(z.isRectAreaLight){let nt=t.get(z);nt.color.copy(q).multiplyScalar(X),nt.halfWidth.set(z.width*.5,0,0),nt.halfHeight.set(0,z.height*.5,0),n.rectArea[A]=nt,A++}else if(z.isPointLight){let nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),nt.distance=z.distance,nt.decay=z.decay,z.castShadow){let st=z.shadow,at=e.get(z);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=ft,n.pointShadowMatrix[p]=z.shadow.matrix,E++}n.point[p]=nt,p++}else if(z.isHemisphereLight){let nt=t.get(z);nt.skyColor.copy(z.color).multiplyScalar(X),nt.groundColor.copy(z.groundColor).multiplyScalar(X),n.hemi[S]=nt,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let F=n.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==M||F.rectAreaLength!==A||F.hemiLength!==S||F.numSunShadows!==g||F.numDirectionalShadows!==b||F.numPointShadows!==E||F.numSpotShadows!==N||F.numSpotMaps!==v||F.numLightProbes!==O)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+v-P,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=O,F.sunLength=d,F.directionalLength=m,F.pointLength=p,F.spotLength=M,F.rectAreaLength=A,F.hemiLength=S,F.numSunShadows=g,F.numDirectionalShadows=b,F.numPointShadows=E,F.numSpotShadows=N,F.numSpotMaps=v,F.numLightProbes=O,n.version=cv++)}function c(l,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let S=l[M];if(S.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),f++}else if(S.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(S.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function md(i){let t=new uv(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function hv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new md(i),t.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`,pv=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],mv=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],gd=new me,Ao=new k,Ou=new k;function gv(i,t,e){let n=new js,s=new Tt,r=new Tt,o=new be,a=new Ba,c=new za,l={},u=e.maxTextureSize,f={[ji]:gn,[gn]:ji,[bn]:bn},h=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:fv,fragmentShader:dv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new pe;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ue(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(E,N,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===cf&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let P=i.getRenderTarget(),O=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),B=i.state;B.setBlending(fi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Y=p!==this.type;Y&&N.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(q=>q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,q=E.length;z<q;z++){let X=E[z],K=X.shadow;if(K===void 0){Kt("WebGLShadowMap:",X,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ft=K.getFrameExtents();s.multiply(ft),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,K.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=nt,K.map===null||Y===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===or){if(X.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new _n(s.x,s.y,{format:ns,type:Kn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),K.map.texture.name=X.name+".shadowMap",K.map.depthTexture=new Wi(s.x,s.y,On),K.map.depthTexture.name=X.name+".shadowMapDepth",K.map.depthTexture.format=ci,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ye,K.map.depthTexture.magFilter=Ye}else X.isPointLight?(K.map=new Wc(s.x),K.map.depthTexture=new Ia(s.x,$n)):(K.map=new _n(s.x,s.y),K.map.depthTexture=new Wi(s.x,s.y,$n)),K.map.depthTexture.name=X.name+".shadowMap",K.map.depthTexture.format=ci,this.type===gs?(K.map.depthTexture.compareFunction=nt?kc:zc,K.map.depthTexture.minFilter=Qe,K.map.depthTexture.magFilter=Qe):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Ye,K.map.depthTexture.magFilter=Ye);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let st=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();X.isPointLight!==!0&&K.updateMatrices(X,v);for(let at=0;at<st;at++){let Et=K.getCamera(at);if(X.isPointLight){let Ct=K.camera,Jt=K.matrix,$t=X.distance||Ct.far;$t!==Ct.far&&(Ct.far=$t,Ct.updateProjectionMatrix()),Ao.setFromMatrixPosition(X.matrixWorld),Ct.position.copy(Ao),Ou.copy(Ct.position),Ou.add(pv[at]),Ct.up.copy(mv[at]),Ct.lookAt(Ou),Ct.updateMatrixWorld(),Jt.makeTranslation(-Ao.x,-Ao.y,-Ao.z),gd.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),K._frustum.setFromProjectionMatrix(gd,Ct.coordinateSystem,Ct.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,at),i.clear();else{at===0&&(i.setRenderTarget(K.map),i.clear());let Ct=K.getViewport(at);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),B.viewport(o)}n=K.getFrustum(at),S(N,v,Et,X,this.type)}K.isPointLightShadow!==!0&&this.type===or&&M(K,v),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,O,F)};function M(E,N){let v=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new _n(s.x,s.y,{format:ns,type:Kn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(N,null,v,h,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(N,null,v,d,x,null)}function A(E,N,v,P){let O=null,F=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)O=F;else if(O=v.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let B=O.uuid,Y=N.uuid,z=l[B];z===void 0&&(z={},l[B]=z);let q=z[Y];q===void 0&&(q=O.clone(),z[Y]=q,N.addEventListener("dispose",b)),O=q}if(O.visible=N.visible,O.wireframe=N.wireframe,P===or?O.side=N.shadowSide!==null?N.shadowSide:N.side:O.side=N.shadowSide!==null?N.shadowSide:f[N.side],O.alphaMap=N.alphaMap,O.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,O.map=N.map,O.clipShadows=N.clipShadows,O.clippingPlanes=N.clippingPlanes,O.clipIntersection=N.clipIntersection,O.displacementMap=N.displacementMap,O.displacementScale=N.displacementScale,O.displacementBias=N.displacementBias,O.wireframeLinewidth=N.wireframeLinewidth,O.linewidth=N.linewidth,v.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let B=i.properties.get(O);B.light=v}return O}function S(E,N,v,P,O){if(E.visible===!1)return;if(E.layers.test(N.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===or)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),z=E.material;if(Array.isArray(z)){let q=Y.groups;for(let X=0,K=q.length;X<K;X++){let ft=q[X],nt=z[ft.materialIndex];if(nt&&nt.visible){let st=A(E,nt,P,O);E.onBeforeShadow(i,E,N,v,Y,st,ft),i.renderBufferDirect(v,null,Y,st,E,ft),E.onAfterShadow(i,E,N,v,Y,st,ft)}}}else if(z.visible){let q=A(E,z,P,O);E.onBeforeShadow(i,E,N,v,Y,q,null),i.renderBufferDirect(v,null,Y,q,E,null),E.onAfterShadow(i,E,N,v,Y,q,null)}}let B=E.children;for(let Y=0,z=B.length;Y<z;Y++)S(B[Y],N,v,P,O)}function b(E){E.target.removeEventListener("dispose",b);for(let v in l){let P=l[v],O=E.target.uuid;O in P&&(P[O].dispose(),delete P[O])}}}function xv(i,t){function e(){let C=!1,j=new be,W=null,mt=new be(0,0,0,0);return{setMask:function(xt){W!==xt&&!C&&(i.colorMask(xt,xt,xt,xt),W=xt)},setLocked:function(xt){C=xt},setClear:function(xt,ut,bt,Rt,ie){ie===!0&&(xt*=Rt,ut*=Rt,bt*=Rt),j.set(xt,ut,bt,Rt),mt.equals(j)===!1&&(i.clearColor(xt,ut,bt,Rt),mt.copy(j))},reset:function(){C=!1,W=null,mt.set(-1,0,0,0)}}}function n(){let C=!1,j=!1,W=null,mt=null,xt=null;return{setReversed:function(ut){if(j!==ut){let bt=t.get("EXT_clip_control");ut?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),j=ut;let Rt=xt;xt=null,this.setClear(Rt)}},getReversed:function(){return j},setTest:function(ut){ut?dt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ut){W!==ut&&!C&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if(j&&(ut=Vf[ut]),mt!==ut){switch(ut){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=ut}},setLocked:function(ut){C=ut},setClear:function(ut){xt!==ut&&(xt=ut,j&&(ut=1-ut),i.clearDepth(ut))},reset:function(){C=!1,W=null,mt=null,xt=null,j=!1}}}function s(){let C=!1,j=null,W=null,mt=null,xt=null,ut=null,bt=null,Rt=null,ie=null;return{setTest:function(Zt){C||(Zt?dt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Zt){j!==Zt&&!C&&(i.stencilMask(Zt),j=Zt)},setFunc:function(Zt,ye,Me){(W!==Zt||mt!==ye||xt!==Me)&&(i.stencilFunc(Zt,ye,Me),W=Zt,mt=ye,xt=Me)},setOp:function(Zt,ye,Me){(ut!==Zt||bt!==ye||Rt!==Me)&&(i.stencilOp(Zt,ye,Me),ut=Zt,bt=ye,Rt=Me)},setLocked:function(Zt){C=Zt},setClear:function(Zt){ie!==Zt&&(i.clearStencil(Zt),ie=Zt)},reset:function(){C=!1,j=null,W=null,mt=null,xt=null,ut=null,bt=null,Rt=null,ie=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,A=null,S=null,b=null,E=null,N=null,v=new Yt(0,0,0),P=0,O=!1,F=null,B=null,Y=null,z=null,q=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ft=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(nt)[1]),K=ft>=1):nt.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),K=ft>=2);let st=null,at={},Et=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Jt=new be().fromArray(Et),$t=new be().fromArray(Ct);function Xt(C,j,W,mt){let xt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(C,ut),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<W;bt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(j+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ut}let ct={};ct[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(Ws),Mt(!1),At(ou),dt(i.CULL_FACE),yt(fi);function dt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function wt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Dt(C,j){return h[C]!==j?(i.bindFramebuffer(C,j),h[C]=j,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function _t(C,j){let W=g,mt=!1;if(C){W=d.get(j),W===void 0&&(W=[],d.set(j,W));let xt=C.textures;if(W.length!==xt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,bt=xt.length;ut<bt;ut++)W[ut]=i.COLOR_ATTACHMENT0+ut;W.length=xt.length,mt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,mt=!0);mt&&i.drawBuffers(W)}function gt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let Nt={[xs]:i.FUNC_ADD,[uf]:i.FUNC_SUBTRACT,[hf]:i.FUNC_REVERSE_SUBTRACT};Nt[ff]=i.MIN,Nt[df]=i.MAX;let ht={[pf]:i.ZERO,[mf]:i.ONE,[gf]:i.SRC_COLOR,[lu]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[vf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[uu]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[_f]:i.ONE_MINUS_DST_ALPHA,[Sf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[wf]:i.CONSTANT_ALPHA,[Tf]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(C,j,W,mt,xt,ut,bt,Rt,ie,Zt){if(C===fi){m===!0&&(wt(i.BLEND),m=!1);return}if(m===!1&&(dt(i.BLEND),m=!0),C!==lf){if(C!==p||Zt!==O){if((M!==xs||b!==xs)&&(i.blendEquation(i.FUNC_ADD),M=xs,b=xs),Zt)switch(C){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",C);break}else switch(C){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cu:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",C);break}A=null,S=null,E=null,N=null,v.set(0,0,0),P=0,p=C,O=Zt}return}xt=xt||j,ut=ut||W,bt=bt||mt,(j!==M||xt!==b)&&(i.blendEquationSeparate(Nt[j],Nt[xt]),M=j,b=xt),(W!==A||mt!==S||ut!==E||bt!==N)&&(i.blendFuncSeparate(ht[W],ht[mt],ht[ut],ht[bt]),A=W,S=mt,E=ut,N=bt),(Rt.equals(v)===!1||ie!==P)&&(i.blendColor(Rt.r,Rt.g,Rt.b,ie),v.copy(Rt),P=ie),p=C,O=!1}function vt(C,j){C.side===bn?wt(i.CULL_FACE):dt(i.CULL_FACE);let W=C.side===gn;j&&(W=!W),Mt(W),C.blending===ar&&C.transparent===!1?yt(fi):yt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let mt=C.stencilWrite;a.setTest(mt),mt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Bt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(C){F!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),F=C)}function At(C){C!==of?(dt(i.CULL_FACE),C!==B&&(C===ou?i.cullFace(i.BACK):C===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),B=C}function Ht(C){C!==Y&&(K&&i.lineWidth(C),Y=C)}function Bt(C,j,W){C?(dt(i.POLYGON_OFFSET_FILL),(z!==j||q!==W)&&(z=j,q=W,o.getReversed()&&(j=-j),i.polygonOffset(j,W))):wt(i.POLYGON_OFFSET_FILL)}function qt(C){C?dt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function te(C){C===void 0&&(C=i.TEXTURE0+X-1),st!==C&&(i.activeTexture(C),st=C)}function V(C,j,W){W===void 0&&(st===null?W=i.TEXTURE0+X-1:W=st);let mt=at[W];mt===void 0&&(mt={type:void 0,texture:void 0},at[W]=mt),(mt.type!==C||mt.texture!==j)&&(st!==W&&(i.activeTexture(W),st=W),i.bindTexture(C,j||ct[C]),mt.type=C,mt.texture=j)}function oe(){let C=at[st];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function w(){try{i.texSubImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function tt(){try{i.texSubImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function L(){try{i.texStorage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function y(){try{i.texStorage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function _(){try{i.texImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function T(){try{i.texImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function I(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function D(C,j){f[C]!==j&&(i.pixelStorei(C,j),f[C]=j)}function G(C){Jt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Jt.copy(C))}function H(C){$t.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),$t.copy(C))}function et(C,j){let W=l.get(j);W===void 0&&(W=new WeakMap,l.set(j,W));let mt=W.get(C);mt===void 0&&(mt=i.getUniformBlockIndex(j,C.name),W.set(C,mt))}function Q(C,j){let mt=l.get(j).get(C);c.get(j)!==mt&&(i.uniformBlockBinding(j,mt,C.__bindingPointIndex),c.set(j,mt))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},st=null,at={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,A=null,S=null,b=null,E=null,N=null,v=new Yt(0,0,0),P=0,O=!1,F=null,B=null,Y=null,z=null,q=null,Jt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:wt,bindFramebuffer:Dt,drawBuffers:_t,useProgram:gt,setBlending:yt,setMaterial:vt,setFlipSided:Mt,setCullFace:At,setLineWidth:Ht,setPolygonOffset:Bt,setScissorTest:qt,activeTexture:te,bindTexture:V,unbindTexture:oe,compressedTexImage2D:Gt,compressedTexImage3D:U,texImage2D:_,texImage3D:T,pixelStorei:D,getParameter:I,updateUBOMapping:et,uniformBlockBinding:Q,texStorage2D:L,texStorage3D:y,texSubImage2D:w,texSubImage3D:tt,compressedTexSubImage2D:it,compressedTexSubImage3D:Z,scissor:G,viewport:H,reset:pt}}function yv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Tt,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,w){return g?new OffscreenCanvas(U,w):Or("canvas")}function m(U,w,tt){let it=1,Z=Gt(U);if((Z.width>tt||Z.height>tt)&&(it=tt/Math.max(Z.width,Z.height)),it<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let L=Math.floor(it*Z.width),y=Math.floor(it*Z.height);h===void 0&&(h=x(L,y));let _=w?x(L,y):h;return _.width=L,_.height=y,_.getContext("2d").drawImage(U,0,0,L,y),Kt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+L+"x"+y+")."),_}else return"data"in U&&Kt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),U;return U}function p(U){return U.generateMipmaps}function M(U){i.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(U,w,tt,it,Z,L=!1){if(U!==null){if(i[U]!==void 0)return i[U];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let y;it&&(y=t.get("EXT_texture_norm16"),y||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _=w;if(w===i.RED&&(tt===i.FLOAT&&(_=i.R32F),tt===i.HALF_FLOAT&&(_=i.R16F),tt===i.UNSIGNED_BYTE&&(_=i.R8),tt===i.UNSIGNED_SHORT&&y&&(_=y.R16_EXT),tt===i.SHORT&&y&&(_=y.R16_SNORM_EXT)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(_=i.R8UI),tt===i.UNSIGNED_SHORT&&(_=i.R16UI),tt===i.UNSIGNED_INT&&(_=i.R32UI),tt===i.BYTE&&(_=i.R8I),tt===i.SHORT&&(_=i.R16I),tt===i.INT&&(_=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(_=i.RG32F),tt===i.HALF_FLOAT&&(_=i.RG16F),tt===i.UNSIGNED_BYTE&&(_=i.RG8),tt===i.UNSIGNED_SHORT&&y&&(_=y.RG16_EXT),tt===i.SHORT&&y&&(_=y.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(_=i.RG8UI),tt===i.UNSIGNED_SHORT&&(_=i.RG16UI),tt===i.UNSIGNED_INT&&(_=i.RG32UI),tt===i.BYTE&&(_=i.RG8I),tt===i.SHORT&&(_=i.RG16I),tt===i.INT&&(_=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(_=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(_=i.RGB16UI),tt===i.UNSIGNED_INT&&(_=i.RGB32UI),tt===i.BYTE&&(_=i.RGB8I),tt===i.SHORT&&(_=i.RGB16I),tt===i.INT&&(_=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(_=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(_=i.RGBA16UI),tt===i.UNSIGNED_INT&&(_=i.RGBA32UI),tt===i.BYTE&&(_=i.RGBA8I),tt===i.SHORT&&(_=i.RGBA16I),tt===i.INT&&(_=i.RGBA32I)),w===i.RGB&&(tt===i.UNSIGNED_SHORT&&y&&(_=y.RGB16_EXT),tt===i.SHORT&&y&&(_=y.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(_=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(_=i.R11F_G11F_B10F)),w===i.RGBA){let T=L?Fr:de.getTransfer(Z);tt===i.FLOAT&&(_=i.RGBA32F),tt===i.HALF_FLOAT&&(_=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(_=T===ve?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&y&&(_=y.RGBA16_EXT),tt===i.SHORT&&y&&(_=y.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(_=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(_=i.RGB5_A1)}return(_===i.R16F||_===i.R32F||_===i.RG16F||_===i.RG32F||_===i.RGBA16F||_===i.RGBA32F)&&t.get("EXT_color_buffer_float"),_}function b(U,w){let tt;return U?w===null||w===$n||w===lr?tt=i.DEPTH24_STENCIL8:w===On?tt=i.DEPTH32F_STENCIL8:w===cr&&(tt=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$n||w===lr?tt=i.DEPTH_COMPONENT24:w===On?tt=i.DEPTH_COMPONENT32F:w===cr&&(tt=i.DEPTH_COMPONENT16),tt}function E(U,w){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ye&&U.minFilter!==Qe?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function N(U){let w=U.target;w.removeEventListener("dispose",N),P(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&f.delete(w)}function v(U){let w=U.target;w.removeEventListener("dispose",v),F(w)}function P(U){let w=n.get(U);if(w.__webglInit===void 0)return;let tt=U.source,it=d.get(tt);if(it){let Z=it[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(U),Object.keys(it).length===0&&d.delete(tt)}n.remove(U)}function O(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let tt=U.source,it=d.get(tt);delete it[w.__cacheKey],o.memory.textures--}function F(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(w.__webglFramebuffer[it]))for(let Z=0;Z<w.__webglFramebuffer[it].length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[it][Z]);else i.deleteFramebuffer(w.__webglFramebuffer[it]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[it])}else{if(Array.isArray(w.__webglFramebuffer))for(let it=0;it<w.__webglFramebuffer.length;it++)i.deleteFramebuffer(w.__webglFramebuffer[it]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let it=0;it<w.__webglColorRenderbuffer.length;it++)w.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[it]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let tt=U.textures;for(let it=0,Z=tt.length;it<Z;it++){let L=n.get(tt[it]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),o.memory.textures--),n.remove(tt[it])}n.remove(U)}let B=0;function Y(){B=0}function z(){return B}function q(U){B=U}function X(){let U=B;return U>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,U}function K(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function ft(U,w){let tt=n.get(U);if(U.isVideoTexture&&V(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){let it=U.image;if(it===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(tt,U,w);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function nt(U,w){let tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){wt(tt,U,w);return}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function st(U,w){let tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){wt(tt,U,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function at(U,w){let tt=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&tt.__version!==U.version){Dt(tt,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}let Et={[us]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},Ct={[Ye]:i.NEAREST,[Cf]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},Jt={[Df]:i.NEVER,[Bf]:i.ALWAYS,[Nf]:i.LESS,[zc]:i.LEQUAL,[Uf]:i.EQUAL,[kc]:i.GEQUAL,[Ff]:i.GREATER,[Of]:i.NOTEQUAL};function $t(U,w){if(w.type===On&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Qe||w.magFilter===ec||w.magFilter===xo||w.magFilter===ts||w.minFilter===Qe||w.minFilter===ec||w.minFilter===xo||w.minFilter===ts)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Et[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Et[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Et[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ct[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ct[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Jt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ye||w.minFilter!==xo&&w.minFilter!==ts||w.type===On&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Xt(U,w){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",N));let it=w.source,Z=d.get(it);Z===void 0&&(Z={},d.set(it,Z));let L=K(w);if(L!==U.__cacheKey){Z[L]===void 0&&(Z[L]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),Z[L].usedTimes++;let y=Z[U.__cacheKey];y!==void 0&&(Z[U.__cacheKey].usedTimes--,y.usedTimes===0&&O(w)),U.__cacheKey=L,U.__webglTexture=Z[L].texture}return tt}function ct(U,w,tt){return Math.floor(Math.floor(U/tt)/w)}function dt(U,w,tt,it){let L=U.updateRanges;if(L.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,tt,it,w.data);else{L.sort((D,G)=>D.start-G.start);let y=0;for(let D=1;D<L.length;D++){let G=L[y],H=L[D],et=G.start+G.count,Q=ct(H.start,w.width,4),pt=ct(G.start,w.width,4);H.start<=et+1&&Q===pt&&ct(H.start+H.count-1,w.width,4)===Q?G.count=Math.max(G.count,H.start+H.count-G.start):(++y,L[y]=H)}L.length=y+1;let _=e.getParameter(i.UNPACK_ROW_LENGTH),T=e.getParameter(i.UNPACK_SKIP_PIXELS),I=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let D=0,G=L.length;D<G;D++){let H=L[D],et=Math.floor(H.start/4),Q=Math.ceil(H.count/4),pt=et%w.width,C=Math.floor(et/w.width),j=Q,W=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,pt,C,j,W,tt,it,w.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,_),e.pixelStorei(i.UNPACK_SKIP_PIXELS,T),e.pixelStorei(i.UNPACK_SKIP_ROWS,I)}}function wt(U,w,tt){let it=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=i.TEXTURE_3D);let Z=Xt(U,w),L=w.source;e.bindTexture(it,U.__webglTexture,i.TEXTURE0+tt);let y=n.get(L);if(L.version!==y.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let W=de.getPrimaries(de.workingColorSpace),mt=w.colorSpace===Ci?null:de.getPrimaries(w.colorSpace),xt=w.colorSpace===Ci||W===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let T=m(w.image,!1,s.maxTextureSize);T=oe(w,T);let I=r.convert(w.format,w.colorSpace),D=r.convert(w.type),G=S(w.internalFormat,I,D,w.normalized,w.colorSpace,w.isVideoTexture);$t(it,w);let H,et=w.mipmaps,Q=w.isVideoTexture!==!0,pt=y.__version===void 0||Z===!0,C=L.dataReady,j=E(w,T);if(w.isDepthTexture)G=b(w.format===es,w.type),pt&&(Q?e.texStorage2D(i.TEXTURE_2D,1,G,T.width,T.height):e.texImage2D(i.TEXTURE_2D,0,G,T.width,T.height,0,I,D,null));else if(w.isDataTexture)if(et.length>0){Q&&pt&&e.texStorage2D(i.TEXTURE_2D,j,G,et[0].width,et[0].height);for(let W=0,mt=et.length;W<mt;W++)H=et[W],Q?C&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,H.width,H.height,I,D,H.data):e.texImage2D(i.TEXTURE_2D,W,G,H.width,H.height,0,I,D,H.data);w.generateMipmaps=!1}else Q?(pt&&e.texStorage2D(i.TEXTURE_2D,j,G,T.width,T.height),C&&dt(w,T,I,D)):e.texImage2D(i.TEXTURE_2D,0,G,T.width,T.height,0,I,D,T.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Q&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,G,et[0].width,et[0].height,T.depth);for(let W=0,mt=et.length;W<mt;W++)if(H=et[W],w.format!==Bn)if(I!==null)if(Q){if(C)if(w.layerUpdates.size>0){let xt=Pu(H.width,H.height,w.format,w.type);for(let ut of w.layerUpdates){let bt=H.data.subarray(ut*xt/H.data.BYTES_PER_ELEMENT,(ut+1)*xt/H.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ut,H.width,H.height,1,I,bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,H.width,H.height,T.depth,I,H.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,G,H.width,H.height,T.depth,0,H.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,H.width,H.height,T.depth,I,D,H.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,G,H.width,H.height,T.depth,0,I,D,H.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Q&&pt&&e.texStorage2D(i.TEXTURE_2D,j,G,et[0].width,et[0].height);for(let W=0,mt=et.length;W<mt;W++)H=et[W],w.format!==Bn?I!==null?Q?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,H.width,H.height,I,H.data):e.compressedTexImage2D(i.TEXTURE_2D,W,G,H.width,H.height,0,H.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?C&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,H.width,H.height,I,D,H.data):e.texImage2D(i.TEXTURE_2D,W,G,H.width,H.height,0,I,D,H.data)}else if(w.isDataArrayTexture)if(Q){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,G,T.width,T.height,T.depth),C)if(w.layerUpdates.size>0){let W=Pu(T.width,T.height,w.format,w.type);for(let mt of w.layerUpdates){let xt=T.data.subarray(mt*W/T.data.BYTES_PER_ELEMENT,(mt+1)*W/T.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,T.width,T.height,1,I,D,xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,I,D,T.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,G,T.width,T.height,T.depth,0,I,D,T.data);else if(w.isData3DTexture)Q?(pt&&e.texStorage3D(i.TEXTURE_3D,j,G,T.width,T.height,T.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,I,D,T.data)):e.texImage3D(i.TEXTURE_3D,0,G,T.width,T.height,T.depth,0,I,D,T.data);else if(w.isFramebufferTexture){if(pt)if(Q)e.texStorage2D(i.TEXTURE_2D,j,G,T.width,T.height);else{let W=T.width,mt=T.height;for(let xt=0;xt<j;xt++)e.texImage2D(i.TEXTURE_2D,xt,G,W,mt,0,I,D,null),W>>=1,mt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let W=i.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),T.parentNode!==W){W.appendChild(T),f.add(w),W.onpaint=mt=>{let xt=mt.changedElements;for(let ut of f)xt.includes(ut.image)&&(ut.needsUpdate=!0)},W.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,T);else{let xt=i.RGBA,ut=i.RGBA,bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,ut,bt,T)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(et.length>0){if(Q&&pt){let W=Gt(et[0]);e.texStorage2D(i.TEXTURE_2D,j,G,W.width,W.height)}for(let W=0,mt=et.length;W<mt;W++)H=et[W],Q?C&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,I,D,H):e.texImage2D(i.TEXTURE_2D,W,G,I,D,H);w.generateMipmaps=!1}else if(Q){if(pt){let W=Gt(T);e.texStorage2D(i.TEXTURE_2D,j,G,W.width,W.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,I,D,T)}else e.texImage2D(i.TEXTURE_2D,0,G,I,D,T);p(w)&&M(it),y.__version=L.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Dt(U,w,tt){if(w.image.length!==6)return;let it=Xt(U,w),Z=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+tt);let L=n.get(Z);if(Z.version!==L.__version||it===!0){e.activeTexture(i.TEXTURE0+tt);let y=de.getPrimaries(de.workingColorSpace),_=w.colorSpace===Ci?null:de.getPrimaries(w.colorSpace),T=w.colorSpace===Ci||y===_?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,T);let I=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,G=[];for(let ut=0;ut<6;ut++)!I&&!D?G[ut]=m(w.image[ut],!0,s.maxCubemapSize):G[ut]=D?w.image[ut].image:w.image[ut],G[ut]=oe(w,G[ut]);let H=G[0],et=r.convert(w.format,w.colorSpace),Q=r.convert(w.type),pt=S(w.internalFormat,et,Q,w.normalized,w.colorSpace),C=w.isVideoTexture!==!0,j=L.__version===void 0||it===!0,W=Z.dataReady,mt=E(w,H);$t(i.TEXTURE_CUBE_MAP,w);let xt;if(I){C&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,pt,H.width,H.height);for(let ut=0;ut<6;ut++){xt=G[ut].mipmaps;for(let bt=0;bt<xt.length;bt++){let Rt=xt[bt];w.format!==Bn?et!==null?C?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,0,0,Rt.width,Rt.height,et,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,pt,Rt.width,Rt.height,0,Rt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,0,0,Rt.width,Rt.height,et,Q,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt,pt,Rt.width,Rt.height,0,et,Q,Rt.data)}}}else{if(xt=w.mipmaps,C&&j){xt.length>0&&mt++;let ut=Gt(G[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,pt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(D){C?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,G[ut].width,G[ut].height,et,Q,G[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,G[ut].width,G[ut].height,0,et,Q,G[ut].data);for(let bt=0;bt<xt.length;bt++){let ie=xt[bt].image[ut].image;C?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,0,0,ie.width,ie.height,et,Q,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,pt,ie.width,ie.height,0,et,Q,ie.data)}}else{C?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,et,Q,G[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,et,Q,G[ut]);for(let bt=0;bt<xt.length;bt++){let Rt=xt[bt];C?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,0,0,et,Q,Rt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt+1,pt,et,Q,Rt.image[ut])}}}p(w)&&M(i.TEXTURE_CUBE_MAP),L.__version=Z.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function _t(U,w,tt,it,Z,L){let y=r.convert(tt.format,tt.colorSpace),_=r.convert(tt.type),T=S(tt.internalFormat,y,_,tt.normalized,tt.colorSpace),I=n.get(w),D=n.get(tt);if(D.__renderTarget=w,!I.__hasExternalTextures){let G=Math.max(1,w.width>>L),H=Math.max(1,w.height>>L);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,L,T,G,H,w.depth,0,y,_,null):e.texImage2D(Z,L,T,G,H,0,y,_,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Z,D.__webglTexture,0,qt(w)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,Z,D.__webglTexture,L),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(U,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let it=w.depthTexture,Z=it&&it.isDepthTexture?it.type:null,L=b(w.stencilBuffer,Z),y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(w),L,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(w),L,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,L,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,U)}else{let it=w.textures;for(let Z=0;Z<it.length;Z++){let L=it[Z],y=r.convert(L.format,L.colorSpace),_=r.convert(L.type),T=S(L.internalFormat,y,_,L.normalized,L.colorSpace);te(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(w),T,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(w),T,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,T,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(U,w,tt){let it=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(w.depthTexture);if(Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),it){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,w.depthTexture.addEventListener("dispose",N)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),$t(i.TEXTURE_CUBE_MAP,w.depthTexture);let I=r.convert(w.depthTexture.format),D=r.convert(w.depthTexture.type),G;w.depthTexture.format===ci?G=i.DEPTH_COMPONENT24:w.depthTexture.format===es&&(G=i.DEPTH24_STENCIL8);for(let H=0;H<6;H++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,G,w.width,w.height,0,I,D,null)}}else ft(w.depthTexture,0);let L=Z.__webglTexture,y=qt(w),_=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,T=w.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ci)te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,_,L,0,y):i.framebufferTexture2D(i.FRAMEBUFFER,T,_,L,0);else if(w.depthTexture.format===es)te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,_,L,0,y):i.framebufferTexture2D(i.FRAMEBUFFER,T,_,L,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(U){let w=n.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let it=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),it){let Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,it.removeEventListener("dispose",Z)};it.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=it}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(tt)for(let it=0;it<6;it++)Nt(w.__webglFramebuffer[it],U,it);else{let it=U.texture.mipmaps;it&&it.length>0?Nt(w.__webglFramebuffer[0],U,0):Nt(w.__webglFramebuffer,U,0)}else if(tt){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]===void 0)w.__webglDepthbuffer[it]=i.createRenderbuffer(),gt(w.__webglDepthbuffer[it],U,!1);else{let Z=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=w.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,L)}}else{let it=U.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),gt(w.__webglDepthbuffer,U,!1);else{let Z=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,L)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(U,w,tt){let it=n.get(U);w!==void 0&&_t(it.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&ht(U)}function vt(U){let w=U.texture,tt=n.get(U),it=n.get(w);U.addEventListener("dispose",v);let Z=U.textures,L=U.isWebGLCubeRenderTarget===!0,y=Z.length>1;if(y||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=w.version,o.memory.textures++),L){tt.__webglFramebuffer=[];for(let _=0;_<6;_++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[_]=[];for(let T=0;T<w.mipmaps.length;T++)tt.__webglFramebuffer[_][T]=i.createFramebuffer()}else tt.__webglFramebuffer[_]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let _=0;_<w.mipmaps.length;_++)tt.__webglFramebuffer[_]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(y)for(let _=0,T=Z.length;_<T;_++){let I=n.get(Z[_]);I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&te(U)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let _=0;_<Z.length;_++){let T=Z[_];tt.__webglColorRenderbuffer[_]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[_]);let I=r.convert(T.format,T.colorSpace),D=r.convert(T.type),G=S(T.internalFormat,I,D,T.normalized,T.colorSpace,U.isXRRenderTarget===!0),H=qt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,H,G,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_,i.RENDERBUFFER,tt.__webglColorRenderbuffer[_])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(L){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),$t(i.TEXTURE_CUBE_MAP,w);for(let _=0;_<6;_++)if(w.mipmaps&&w.mipmaps.length>0)for(let T=0;T<w.mipmaps.length;T++)_t(tt.__webglFramebuffer[_][T],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,T);else _t(tt.__webglFramebuffer[_],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_,0);p(w)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(y){for(let _=0,T=Z.length;_<T;_++){let I=Z[_],D=n.get(I),G=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(G=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(G,D.__webglTexture),$t(G,I),_t(tt.__webglFramebuffer,U,I,i.COLOR_ATTACHMENT0+_,G,0),p(I)&&M(G)}e.unbindTexture()}else{let _=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(_=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_,it.__webglTexture),$t(_,w),w.mipmaps&&w.mipmaps.length>0)for(let T=0;T<w.mipmaps.length;T++)_t(tt.__webglFramebuffer[T],U,w,i.COLOR_ATTACHMENT0,_,T);else _t(tt.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,_,0);p(w)&&M(_),e.unbindTexture()}U.depthBuffer&&ht(U)}function Mt(U){let w=U.textures;for(let tt=0,it=w.length;tt<it;tt++){let Z=w[tt];if(p(Z)){let L=A(U),y=n.get(Z).__webglTexture;e.bindTexture(L,y),M(L),e.unbindTexture()}}}let At=[],Ht=[];function Bt(U){if(U.samples>0){if(te(U)===!1){let w=U.textures,tt=U.width,it=U.height,Z=i.COLOR_BUFFER_BIT,L=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,y=n.get(U),_=w.length>1;if(_)for(let I=0;I<w.length;I++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,y.__webglMultisampledFramebuffer);let T=U.texture.mipmaps;T&&T.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let I=0;I<w.length;I++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),_){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,y.__webglColorRenderbuffer[I]);let D=n.get(w[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,tt,it,0,0,tt,it,Z,i.NEAREST),c===!0&&(At.length=0,Ht.length=0,At.push(i.COLOR_ATTACHMENT0+I),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(At.push(L),Ht.push(L),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_)for(let I=0;I<w.length;I++){e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,y.__webglColorRenderbuffer[I]);let D=n.get(w[I]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function qt(U){return Math.min(s.maxSamples,U.samples)}function te(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function V(U){let w=o.render.frame;u.get(U)!==w&&(u.set(U,w),U.update())}function oe(U,w){let tt=U.colorSpace,it=U.format,Z=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Ur&&tt!==Ci&&(de.getTransfer(tt)===ve?(it!==Bn||Z!==Mn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",tt)),w}function Gt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.getTextureUnits=z,this.setTextureUnits=q,this.setTexture2D=ft,this.setTexture2DArray=nt,this.setTexture3D=st,this.setTextureCube=at,this.rebindTextures=yt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _v(i,t){function e(n,s=Ci){let r,o=de.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yu)return i.BYTE;if(n===_u)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Mu)return i.ALPHA;if(n===Su)return i.RGB;if(n===Bn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===rc)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===yo||n===_o||n===vo||n===bo)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===uc||n===hc||n===fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===pc||n===mc||n===gc||n===xc||n===Mo||n===yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dc||n===pc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gc)return r.COMPRESSED_R11_EAC;if(n===xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mo)return r.COMPRESSED_RG11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_c||n===vc||n===bc||n===Mc||n===Sc||n===Ec||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_c)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dc||n===Nc||n===Uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dc)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Oc||n===So||n===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
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

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:vv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Xu,p={},M=e.getContextAttributes(),A=null,S=null,b=[],E=[],N=new Tt,v=null,P=null,O=new dn;O.viewport=new be;let F=new dn;F.viewport=new be;let B=[O,F],Y=new Ka,z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let dt=b[ct];return dt===void 0&&(dt=new $s,b[ct]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(ct){let dt=b[ct];return dt===void 0&&(dt=new $s,b[ct]=dt),dt.getGripSpace()},this.getHand=function(ct){let dt=b[ct];return dt===void 0&&(dt=new $s,b[ct]=dt),dt.getHandSpace()};function X(ct){let dt=E.indexOf(ct.inputSource);if(dt===-1)return;let wt=b[dt];wt!==void 0&&(wt.update(ct.inputSource,ct.frame,l||o),wt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ft);for(let ct=0;ct<b.length;ct++){let dt=E[ct];dt!==null&&(E[ct]=null,b[ct].disconnect(dt))}z=null,q=null,m.reset();for(let ct in p)delete p[ct];if(t.setRenderTarget(A),d=null,h=null,f=null,s=null,S=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(N.width,N.height,!1),P!==null){let ct=P.camera;ct.fov=P.fov,ct.zoom=P.zoom,ct.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ct){l=ct},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(N),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Dt=null,_t=null;M.depth&&(_t=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=M.stencil?es:ci,Dt=M.stencil?lr:$n);let gt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new _n(h.textureWidth,h.textureHeight,{format:Bn,type:Mn,depthTexture:new Wi(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let wt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new _n(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft(ct){for(let dt=0;dt<ct.removed.length;dt++){let wt=ct.removed[dt],Dt=E.indexOf(wt);Dt>=0&&(E[Dt]=null,b[Dt].disconnect(wt))}for(let dt=0;dt<ct.added.length;dt++){let wt=ct.added[dt],Dt=E.indexOf(wt);if(Dt===-1){for(let gt=0;gt<b.length;gt++)if(gt>=E.length){E.push(wt),Dt=gt;break}else if(E[gt]===null){E[gt]=wt,Dt=gt;break}if(Dt===-1)break}let _t=b[Dt];_t&&_t.connect(wt)}}let nt=new k,st=new k;function at(ct,dt,wt){nt.setFromMatrixPosition(dt.matrixWorld),st.setFromMatrixPosition(wt.matrixWorld);let Dt=nt.distanceTo(st),_t=dt.projectionMatrix.elements,gt=wt.projectionMatrix.elements,Nt=_t[14]/(_t[10]-1),ht=_t[14]/(_t[10]+1),yt=(_t[9]+1)/_t[5],vt=(_t[9]-1)/_t[5],Mt=(_t[8]-1)/_t[0],At=(gt[8]+1)/gt[0],Ht=Nt*Mt,Bt=Nt*At,qt=Dt/(-Mt+At),te=qt*-Mt;if(dt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(te),ct.translateZ(qt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),_t[10]===-1)ct.projectionMatrix.copy(dt.projectionMatrix),ct.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let V=Nt+qt,oe=ht+qt,Gt=Ht-te,U=Bt+(Dt-te),w=yt*ht/oe*V,tt=vt*ht/oe*V;ct.projectionMatrix.makePerspective(Gt,U,w,tt,V,oe),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function Et(ct,dt){dt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(dt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let dt=ct.near,wt=ct.far;m.texture!==null&&(m.depthNear>0&&(dt=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),Y.near=F.near=O.near=dt,Y.far=F.far=O.far=wt,(z!==Y.near||q!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),z=Y.near,q=Y.far),Y.layers.mask=ct.layers.mask|6,O.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;let Dt=ct.parent,_t=Y.cameras;Et(Y,Dt);for(let gt=0;gt<_t.length;gt++)Et(_t[gt],Dt);_t.length===2?at(Y,O,F):Y.projectionMatrix.copy(O.projectionMatrix),P===null&&ct.isPerspectiveCamera&&(P={camera:ct,fov:ct.fov,zoom:ct.zoom}),Ct(ct,Y,Dt)};function Ct(ct,dt,wt){wt===null?ct.matrix.copy(dt.matrixWorld):(ct.matrix.copy(wt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(dt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(dt.projectionMatrix),ct.projectionMatrixInverse.copy(dt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Ys*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(ct){c=ct,h!==null&&(h.fixedFoveation=ct),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ct)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(ct){return p[ct]};let Jt=null;function $t(ct,dt){if(u=dt.getViewerPose(l||o),g=dt,u!==null){let wt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Dt=!1;wt.length!==Y.cameras.length&&(Y.cameras.length=0,Dt=!0);for(let ht=0;ht<wt.length;ht++){let yt=wt[ht],vt=null;if(d!==null)vt=d.getViewport(yt);else{let At=f.getViewSubImage(h,yt);vt=At.viewport,ht===0&&(t.setRenderTargetTextures(S,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(S))}let Mt=B[ht];Mt===void 0&&(Mt=new dn,Mt.layers.enable(ht),Mt.viewport=new be,B[ht]=Mt),Mt.matrix.fromArray(yt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(yt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(vt.x,vt.y,vt.width,vt.height),ht===0&&(Y.matrix.copy(Mt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Dt===!0&&Y.cameras.push(Mt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ht=f.getDepthInformation(wt[0]);ht&&ht.isValid&&ht.texture&&m.init(ht,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let ht=0;ht<wt.length;ht++){let yt=wt[ht].camera;if(yt){let vt=p[yt];vt||(vt=new Zr,p[yt]=vt);let Mt=f.getCameraImage(yt);vt.sourceTexture=Mt}}}}for(let wt=0;wt<b.length;wt++){let Dt=E[wt],_t=b[wt];Dt!==null&&_t!==void 0&&_t.update(Dt,dt,l||o)}Jt&&Jt(ct,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),g=null}let Xt=new xd;Xt.setAnimationLoop($t),this.setAnimationLoop=function(ct){Jt=ct},this.dispose=function(){}}},Mv=new me,Sd=new re;Sd.set(-1,0,0,0,1,0,0,0,1);function Sv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ru(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),A=M.envMap,S=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ev(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let E=b.program;n.uniformBlockBinding(S,E)}function l(S,b){let E=s[S.id];E===void 0&&(m(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",M));let N=b.program;n.updateUBOMapping(S,N);let v=t.render.frame;r[S.id]!==v&&(h(S),r[S.id]=v)}function u(S){let b=f();S.__bindingPointIndex=b;let E=i.createBuffer(),N=S.__size,v=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,N,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let b=s[S.id],E=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let v=0,P=E.length;v<P;v++){let O=E[v];if(Array.isArray(O))for(let F=0,B=O.length;F<B;F++)d(O[F],v,F,N);else d(O,v,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,b,E,N){if(x(S,b,E,N)===!0){let v=S.__offset,P=S.value;if(Array.isArray(P)){let O=0;for(let F=0;F<P.length;F++){let B=P[F],Y=p(B);g(B,S.__data,O),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(P,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,S.__data)}}function g(S,b,E){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,E)}function x(S,b,E,N){let v=S.value,P=b+"_"+E;if(N[P]===void 0)return typeof v=="number"||typeof v=="boolean"?N[P]=v:ArrayBuffer.isView(v)?N[P]=v.slice():N[P]=v.clone(),!0;{let O=N[P];if(typeof v=="number"||typeof v=="boolean"){if(O!==v)return N[P]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(O.equals(v)===!1)return O.copy(v),!0}}return!1}function m(S){let b=S.uniforms,E=0,N=16;for(let P=0,O=b.length;P<O;P++){let F=Array.isArray(b[P])?b[P]:[b[P]];for(let B=0,Y=F.length;B<Y;B++){let z=F[B],q=Array.isArray(z.value)?z.value:[z.value];for(let X=0,K=q.length;X<K;X++){let ft=q[X],nt=p(ft),st=E%N,at=st%nt.boundary,Et=st+at;E+=at,Et!==0&&N-Et<nt.storage&&(E+=N-Et),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=nt.storage}}}let v=E%N;return v>0&&(E+=N-v),S.__size=E,S.__cache={},this}function p(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",S),b}function M(S){let b=S.target;b.removeEventListener("dispose",M);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}var wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function Tv(){return di===null&&(di=new Gr(wv,16,16,ns,Kn),di.name="DFG_LUT",di.minFilter=Qe,di.magFilter=Qe,di.wrapS=oi,di.wrapT=oi,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Xc=class{constructor(t={}){let{canvas:e=zf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([cc,ac,oc]),p=new Set([Mn,$n,cr,lr,ic,sc]),M=new Uint32Array(4),A=new Int32Array(4),S=new k,b=null,E=null,N=[],v=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,F=!1,B=null,Y=null,z=null,q=null;this._outputColorSpace=Be;let X=0,K=0,ft=null,nt=-1,st=null,at=new be,Et=new be,Ct=null,Jt=new Yt(0),$t=0,Xt=e.width,ct=e.height,dt=1,wt=null,Dt=null,_t=new be(0,0,Xt,ct),gt=new be(0,0,Xt,ct),Nt=!1,ht=new js,yt=!1,vt=!1,Mt=new me,At=new k,Ht=new be,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function te(){return ft===null?dt:1}let V=n;function oe(R,J){return e.getContext(R,J)}let Gt,U,w,tt,it,Z,L,y,_,T,I,D,G,H,et,Q,pt,C,j,W,mt,xt,ut;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",ye,!1),V===null){let J="webgl2";if(V=oe(J,R),V===null)throw oe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}bt()}catch(R){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),ee("WebGLRenderer: "+R.message),R}function bt(){Gt=new Dy(V),Gt.init(),mt=new _v(V,Gt),U=new Sy(V,Gt,t,mt),w=new xv(V,Gt),U.reversedDepthBuffer&&h&&w.buffers.depth.setReversed(!0),Y=V.createFramebuffer(),z=V.createFramebuffer(),q=V.createFramebuffer(),tt=new Fy(V),it=new iv,Z=new yv(V,Gt,w,it,U,mt,tt),L=new Ly(O),y=new Bg(V),xt=new by(V,y),_=new Ny(V,y,tt,xt),T=new By(V,_,y,xt,tt),C=new Oy(V,U,Z),et=new Ey(it),I=new nv(O,L,Gt,U,xt,et),D=new Sv(O,it),G=new rv,H=new hv(Gt),pt=new vy(O,L,w,T,g,c),Q=new gv(O,T,U),ut=new Ev(V,tt,U,w),j=new My(V,Gt,tt),W=new Uy(V,Gt,tt),tt.programs=I.programs,O.capabilities=U,O.extensions=Gt,O.properties=it,O.renderLists=G,O.shadowMap=Q,O.state=w,O.info=tt}x!==Mn&&(P=new ky(x,e.width,e.height,a,s,r));let Rt=new qu(O,V);this.xr=Rt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=Gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(R){R!==void 0&&(dt=R,this.setSize(Xt,ct,!1))},this.getSize=function(R){return R.set(Xt,ct)},this.setSize=function(R,J,lt=!0){if(Rt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=R,ct=J,e.width=Math.floor(R*dt),e.height=Math.floor(J*dt),lt===!0&&(e.style.width=R+"px",e.style.height=J+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(Xt*dt,ct*dt).floor()},this.setDrawingBufferSize=function(R,J,lt){Xt=R,ct=J,dt=lt,e.width=Math.floor(R*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,R,J)},this.setEffects=function(R){if(x===Mn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let J=0;J<R.length;J++)if(R[J].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(at)},this.getViewport=function(R){return R.copy(_t)},this.setViewport=function(R,J,lt,ot){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,J,lt,ot),w.viewport(at.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,J,lt,ot){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,J,lt,ot),w.scissor(Et.copy(gt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){w.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){wt=R},this.setTransparentSort=function(R){Dt=R},this.getClearColor=function(R){return R.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,lt=!0){let ot=0;if(R){let rt=!1;if(ft!==null){let It=ft.texture.format;rt=m.has(It)}if(rt){let It=ft.texture.type,Ut=p.has(It),Lt=pt.getClearColor(),zt=pt.getClearAlpha(),Wt=Lt.r,ae=Lt.g,he=Lt.b;Ut?(M[0]=Wt,M[1]=ae,M[2]=he,M[3]=zt,V.clearBufferuiv(V.COLOR,0,M)):(A[0]=Wt,A[1]=ae,A[2]=he,A[3]=zt,V.clearBufferiv(V.COLOR,0,A))}else ot|=V.COLOR_BUFFER_BIT}J&&(ot|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),B=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),pt.dispose(),G.dispose(),H.dispose(),it.dispose(),L.dispose(),T.dispose(),xt.dispose(),ut.dispose(),I.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Vt),Rt.removeEventListener("sessionend",jt),ne.stop()};function ie(R){R.preventDefault(),Br("WebGLRenderer: Context Lost."),F=!0}function Zt(){Br("WebGLRenderer: Context Restored."),F=!1;let R=tt.autoReset,J=Q.enabled,lt=Q.autoUpdate,ot=Q.needsUpdate,rt=Q.type;bt(),tt.autoReset=R,Q.enabled=J,Q.autoUpdate=lt,Q.needsUpdate=ot,Q.type=rt}function ye(R){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Me(R){let J=R.target;J.removeEventListener("dispose",Me),Je(J)}function Je(R){Le(R),it.remove(R)}function Le(R){let J=it.get(R).programs;J!==void 0&&(J.forEach(function(lt){I.releaseProgram(lt)}),R.isShaderMaterial&&I.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,lt,ot,rt,It){J===null&&(J=Bt);let Ut=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Lt=Es(R,J,lt,ot,rt);w.setMaterial(ot,Ut);let zt=lt.index,Wt=1;if(ot.wireframe===!0){if(zt=_.getWireframeAttribute(lt),zt===void 0)return;Wt=2}let ae=lt.drawRange,he=lt.attributes.position,kt=ae.start*Wt,_e=(ae.start+ae.count)*Wt;It!==null&&(kt=Math.max(kt,It.start*Wt),_e=Math.min(_e,(It.start+It.count)*Wt)),zt!==null?(kt=Math.max(kt,0),_e=Math.min(_e,zt.count)):he!=null&&(kt=Math.max(kt,0),_e=Math.min(_e,he.count));let Fe=_e-kt;if(Fe<0||Fe===1/0)return;xt.setup(rt,ot,Lt,lt,zt);let Re,we=j;if(zt!==null&&(Re=y.get(zt),we=W,we.setIndex(Re)),rt.isMesh)ot.wireframe===!0?(w.setLineWidth(ot.wireframeLinewidth*te()),we.setMode(V.LINES)):we.setMode(V.TRIANGLES);else if(rt.isLine){let rn=ot.linewidth;rn===void 0&&(rn=1),w.setLineWidth(rn*te()),rt.isLineSegments?we.setMode(V.LINES):rt.isLineLoop?we.setMode(V.LINE_LOOP):we.setMode(V.LINE_STRIP)}else rt.isPoints?we.setMode(V.POINTS):rt.isSprite&&we.setMode(V.TRIANGLES);if(rt.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))we.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let rn=rt._multiDrawStarts,Ft=rt._multiDrawCounts,hn=rt._multiDrawCount,ge=zt?y.get(zt).bytesPerElement:1,Ln=it.get(ot).currentProgram.getUniforms();for(let si=0;si<hn;si++)Ln.setValue(V,"_gl_DrawID",si),we.render(rn[si]/ge,Ft[si])}else if(rt.isInstancedMesh)we.renderInstances(kt,Fe,rt.count);else if(lt.isInstancedBufferGeometry){let rn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ft=Math.min(lt.instanceCount,rn);we.renderInstances(kt,Fe,Ft)}else we.render(kt,Fe)};function $e(R,J,lt,ot){B!==null&&R.isNodeMaterial&&B.setObject(ot,R),yt===!0&&et.setState(R,lt,!1),R.transparent===!0&&R.side===bn&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,Ke(R,J,ot),R.side=ji,R.needsUpdate=!0,Ke(R,J,ot),R.side=bn):Ke(R,J,ot)}this.compile=function(R,J,lt=null){lt===null&&(lt=R),B!==null&&B.renderStart(R,J,lt),E=H.get(lt),E.init(J),v.push(E),lt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(J.layers)&&(E.pushLight(rt),rt.castShadow&&E.pushShadow(rt))}),R!==lt&&R.traverseVisible(function(rt){rt.isLight&&rt.layers.test(J.layers)&&(E.pushLight(rt),rt.castShadow&&E.pushShadow(rt))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),vt=this.localClippingEnabled,yt=et.init(this.clippingPlanes,vt),yt===!0&&et.setGlobalState(this.clippingPlanes,J),B!==null&&Q.render(E.state.shadowsArray,lt,J);let ot=new Set;return R.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let It=rt.material;if(It)if(Array.isArray(It))for(let Ut=0;Ut<It.length;Ut++){let Lt=It[Ut];$e(Lt,lt,J,rt),ot.add(Lt)}else $e(It,lt,J,rt),ot.add(It)}),E=v.pop(),B!==null&&B.renderEnd(),ot},this.compileAsync=function(R,J,lt=null){let ot=this.compile(R,J,lt);return new Promise(rt=>{function It(){if(ot.forEach(function(Ut){let zt=it.get(Ut).currentProgram;(zt===void 0||zt.isReady())&&ot.delete(Ut)}),ot.size===0){rt(R);return}setTimeout(It,10)}Gt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Xe=null;function St(R){Xe&&Xe(R)}function Vt(){ne.stop()}function jt(){ne.start()}let ne=new xd;ne.setAnimationLoop(St),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(R){Xe=R,Rt.setAnimationLoop(R),R===null?ne.stop():ne.start()},Rt.addEventListener("sessionstart",Vt),Rt.addEventListener("sessionend",jt),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(R,J);let lt=Rt.enabled===!0&&Rt.isPresenting===!0,ot=P!==null&&(ft===null||lt)&&P.begin(O,ft);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(J),J=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,J,ft),E=H.get(R,v.length),E.init(J),E.state.textureUnits=Z.getTextureUnits(),v.push(E),Mt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ht.setFromProjectionMatrix(Mt,qn,J.reversedDepth),vt=this.localClippingEnabled,yt=et.init(this.clippingPlanes,vt),b=G.get(R,N.length),b.init(),N.push(b),Rt.enabled===!0&&Rt.isPresenting===!0){let Ut=O.xr.getDepthSensingMesh();Ut!==null&&Pe(Ut,J,-1/0,O.sortObjects)}Pe(R,J,0,O.sortObjects),b.finish(),B!==null&&B.updateLights(E.state.lightsArray),O.sortObjects===!0&&b.sort(wt,Dt),qt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,qt&&pt.addToRenderList(b,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&et.beginShadows();let rt=E.state.shadowsArray;if(Q.render(rt,R,J),yt===!0&&et.endShadows(),(ot&&P.hasRenderPass())===!1){let Ut=b.opaque,Lt=b.transmissive;if(E.setupLights(),J.isArrayCamera){let zt=J.cameras;if(Lt.length>0)for(let Wt=0,ae=zt.length;Wt<ae;Wt++){let he=zt[Wt];kn(Ut,Lt,R,he)}qt&&pt.render(R);for(let Wt=0,ae=zt.length;Wt<ae;Wt++){let he=zt[Wt];Sn(b,R,he,he.viewport)}}else Lt.length>0&&kn(Ut,Lt,R,J),qt&&pt.render(R),Sn(b,R,J)}ft!==null&&K===0&&(Z.updateMultisampleRenderTarget(ft),Z.updateRenderTargetMipmap(ft)),ot&&P.end(O),R.isScene===!0&&R.onAfterRender(O,R,J),xt.resetDefaultState(),nt=-1,st=null,v.pop(),v.length>0?(E=v[v.length-1],Z.setTextureUnits(E.state.textureUnits),yt===!0&&et.setGlobalState(O.clippingPlanes,E.state.camera)):E=null,N.pop(),N.length>0?b=N[N.length-1]:b=null,B!==null&&B.renderEnd()};function Pe(R,J,lt,ot){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLightProbeGrid)E.pushLightProbeGrid(R);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ht)){ot&&Ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);let Ut=T.update(R),Lt=R.material;Lt.visible&&b.push(R,Ut,Lt,lt,Ht.z,null,J)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ht))){let Ut=T.update(R),Lt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ht.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ht.copy(Ut.boundingSphere.center)),Ht.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(Lt)){let zt=Ut.groups;for(let Wt=0,ae=zt.length;Wt<ae;Wt++){let he=zt[Wt],kt=Lt[he.materialIndex];kt&&kt.visible&&b.push(R,Ut,kt,lt,Ht.z,he,J)}}else Lt.visible&&b.push(R,Ut,Lt,lt,Ht.z,null,J)}}let It=R.children;for(let Ut=0,Lt=It.length;Ut<Lt;Ut++)Pe(It[Ut],J,lt,ot)}function Sn(R,J,lt,ot){let{opaque:rt,transmissive:It,transparent:Ut}=R;E.setupLightsView(lt),yt===!0&&et.setGlobalState(O.clippingPlanes,lt),ot&&w.viewport(at.copy(ot)),rt.length>0&&Pn(rt,J,lt),It.length>0&&Pn(It,J,lt),Ut.length>0&&Pn(Ut,J,lt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function kn(R,J,lt,ot){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ot.id]===void 0){let kt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ot.id]=new _n(1,1,{generateMipmaps:!0,type:kt?Kn:Mn,minFilter:ts,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let It=E.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||at;It.setSize(Ut.z*O.transmissionResolutionScale,Ut.w*O.transmissionResolutionScale);let Lt=O.getRenderTarget(),zt=O.getActiveCubeFace(),Wt=O.getActiveMipmapLevel();O.setRenderTarget(It),O.getClearColor(Jt),$t=O.getClearAlpha(),$t<1&&O.setClearColor(16777215,.5),O.clear(),qt&&pt.render(lt);let ae=O.toneMapping;O.toneMapping=Jn;let he=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),E.setupLightsView(ot),yt===!0&&et.setGlobalState(O.clippingPlanes,ot),Pn(R,lt,ot),Z.updateMultisampleRenderTarget(It),Z.updateRenderTargetMipmap(It),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let _e=0,Fe=J.length;_e<Fe;_e++){let Re=J[_e],{object:we,geometry:rn,material:Ft,group:hn}=Re;if(Ft.side===bn&&we.layers.test(ot.layers)){let ge=Ft.side;Ft.side=gn,Ft.needsUpdate=!0,ss(we,lt,ot,rn,Ft,hn),Ft.side=ge,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(Z.updateMultisampleRenderTarget(It),Z.updateRenderTargetMipmap(It))}O.setRenderTarget(Lt,zt,Wt),O.setClearColor(Jt,$t),he!==void 0&&(ot.viewport=he),O.toneMapping=ae}function Pn(R,J,lt){let ot=J.isScene===!0?J.overrideMaterial:null;for(let rt=0,It=R.length;rt<It;rt++){let Ut=R[rt],{object:Lt,geometry:zt,group:Wt}=Ut,ae=Ut.material;ae.allowOverride===!0&&ot!==null&&(ae=ot),Lt.layers.test(lt.layers)&&ss(Lt,J,lt,zt,ae,Wt)}}function ss(R,J,lt,ot,rt,It){B!==null&&rt.isNodeMaterial&&B.setObject(R,rt),R.onBeforeRender(O,J,lt,ot,rt,It),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),rt.onBeforeRender(O,J,lt,ot,R,It),rt.transparent===!0&&rt.side===bn&&rt.forceSinglePass===!1?(rt.side=gn,rt.needsUpdate=!0,O.renderBufferDirect(lt,J,ot,rt,R,It),rt.side=ji,rt.needsUpdate=!0,O.renderBufferDirect(lt,J,ot,rt,R,It),rt.side=bn):O.renderBufferDirect(lt,J,ot,rt,R,It),R.onAfterRender(O,J,lt,ot,rt,It)}function Ke(R,J,lt){J.isScene!==!0&&(J=Bt);let ot=it.get(R),rt=E.state.lights,It=E.state.shadowsArray,Ut=rt.state.version,Lt=I.getParameters(R,rt.state,It,J,lt,E.state.lightProbeGridArray),zt=I.getProgramCacheKey(Lt),Wt=ot.programs;ot.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?J.environment:null,ot.fog=J.fog;let ae=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ot.envMap=L.get(R.envMap||ot.environment,ae),ot.envMapRotation=ot.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",Me),Wt=new Map,ot.programs=Wt);let he=Wt.get(zt);if(he!==void 0){if(ot.currentProgram===he&&ot.lightsStateVersion===Ut)return Bo(R,Lt),he}else Lt.uniforms=I.getUniforms(R),B!==null&&R.isNodeMaterial&&B.build(R,lt,Lt),R.onBeforeCompile(Lt,O),he=I.acquireProgram(Lt,zt),Wt.set(zt,he),ot.uniforms=Lt.uniforms;let kt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=et.uniform),Bo(R,Lt),ot.needsLights=yn(R),ot.lightsStateVersion=Ut,ot.needsLights&&(kt.ambientLightColor.value=rt.state.ambient,kt.lightProbe.value=rt.state.probe,kt.sunLights.value=rt.state.sun,kt.sunLightShadows.value=rt.state.sunShadow,kt.directionalLights.value=rt.state.directional,kt.directionalLightShadows.value=rt.state.directionalShadow,kt.spotLights.value=rt.state.spot,kt.spotLightShadows.value=rt.state.spotShadow,kt.rectAreaLights.value=rt.state.rectArea,kt.ltc_1.value=rt.state.rectAreaLTC1,kt.ltc_2.value=rt.state.rectAreaLTC2,kt.pointLights.value=rt.state.point,kt.pointLightShadows.value=rt.state.pointShadow,kt.hemisphereLights.value=rt.state.hemi,kt.sunShadowMatrix.value=rt.state.sunShadowMatrix,kt.sunShadowCascade.value=rt.state.sunShadowCascade,kt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,kt.spotLightMatrix.value=rt.state.spotLightMatrix,kt.spotLightMap.value=rt.state.spotLightMap,kt.pointShadowMatrix.value=rt.state.pointShadowMatrix),ot.lightProbeGrid=E.state.lightProbeGridArray.length>0,ot.currentProgram=he,ot.uniformsList=null,he}function br(R){if(R.uniformsList===null){let J=R.currentProgram.getUniforms();R.uniformsList=dr.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Bo(R,J){let lt=it.get(R);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function zo(R,J){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;S.setFromMatrixPosition(J.matrixWorld);for(let lt=0,ot=R.length;lt<ot;lt++){let rt=R[lt];if(rt.texture!==null&&rt.boundingBox.containsPoint(S))return rt}return null}function Es(R,J,lt,ot,rt){J.isScene!==!0&&(J=Bt),Z.resetTextureUnits();let It=J.fog,Ut=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?J.environment:null,Lt=ft===null?O.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:de.workingColorSpace,zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Wt=L.get(ot.envMap||Ut,zt),ae=ot.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,he=!!lt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),kt=!!lt.morphAttributes.position,_e=!!lt.morphAttributes.normal,Fe=!!lt.morphAttributes.color,Re=Jn;ot.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Re=O.toneMapping);let we=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,rn=we!==void 0?we.length:0,Ft=it.get(ot),hn=E.state.lights;if(yt===!0&&(vt===!0||R!==st)){let Te=R===st&&ot.id===nt;et.setState(ot,R,Te)}let ge=!1;ot.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==hn.state.version||Ft.outputColorSpace!==Lt||rt.isBatchedMesh&&Ft.batching===!1||!rt.isBatchedMesh&&Ft.batching===!0||rt.isBatchedMesh&&Ft.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Ft.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Ft.instancing===!1||!rt.isInstancedMesh&&Ft.instancing===!0||rt.isSkinnedMesh&&Ft.skinning===!1||!rt.isSkinnedMesh&&Ft.skinning===!0||rt.isInstancedMesh&&Ft.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Ft.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Ft.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Ft.instancingMorph===!1&&rt.morphTexture!==null||Ft.envMap!==Wt||ot.fog===!0&&Ft.fog!==It||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==et.numPlanes||Ft.numIntersection!==et.numIntersection)||Ft.vertexAlphas!==ae||Ft.vertexTangents!==he||Ft.morphTargets!==kt||Ft.morphNormals!==_e||Ft.morphColors!==Fe||Ft.toneMapping!==Re||Ft.morphTargetsCount!==rn||!!Ft.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ft.__version=ot.version);let Ln=Ft.currentProgram;ge===!0&&(Ln=Ke(ot,J,rt),B&&ot.isNodeMaterial&&B.onUpdateProgram(ot,Ln,Ft));let si=!1,Ni=!1,ws=!1,Ee=Ln.getUniforms(),De=Ft.uniforms;if(w.useProgram(Ln.program)&&(si=!0,Ni=!0,ws=!0),ot.id!==nt&&(nt=ot.id,Ni=!0),Ft.needsLights){let Te=zo(E.state.lightProbeGridArray,rt);Ft.lightProbeGrid!==Te&&(Ft.lightProbeGrid=Te,Ni=!0)}if(si||st!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ee.setValue(V,"projectionMatrix",R.projectionMatrix),Ee.setValue(V,"viewMatrix",R.matrixWorldInverse);let Fi=Ee.map.cameraPosition;Fi!==void 0&&Fi.setValue(V,At.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Ee.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ee.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),st!==R&&(st=R,Ni=!0,ws=!0)}if(Ft.needsLights&&(hn.state.sunShadowMap.length>0&&Ee.setValue(V,"sunShadowMap",hn.state.sunShadowMap,Z),hn.state.directionalShadowMap.length>0&&Ee.setValue(V,"directionalShadowMap",hn.state.directionalShadowMap,Z),hn.state.spotShadowMap.length>0&&Ee.setValue(V,"spotShadowMap",hn.state.spotShadowMap,Z),hn.state.pointShadowMap.length>0&&Ee.setValue(V,"pointShadowMap",hn.state.pointShadowMap,Z)),rt.isSkinnedMesh){Ee.setOptional(V,rt,"bindMatrix"),Ee.setOptional(V,rt,"bindMatrixInverse");let Te=rt.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Ee.setValue(V,"boneTexture",Te.boneTexture,Z))}rt.isBatchedMesh&&(Ee.setOptional(V,rt,"batchingTexture"),Ee.setValue(V,"batchingTexture",rt._matricesTexture,Z),Ee.setOptional(V,rt,"batchingIdTexture"),Ee.setValue(V,"batchingIdTexture",rt._indirectTexture,Z),Ee.setOptional(V,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Ee.setValue(V,"batchingColorTexture",rt._colorsTexture,Z));let Ui=lt.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&C.update(rt,lt,Ln),(Ni||Ft.receiveShadow!==rt.receiveShadow)&&(Ft.receiveShadow=rt.receiveShadow,Ee.setValue(V,"receiveShadow",rt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&J.environment!==null&&(De.envMapIntensity.value=J.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Tv()),Ni){if(Ee.setValue(V,"toneMappingExposure",O.toneMappingExposure),Ft.needsLights&&je(De,ws),It&&ot.fog===!0&&D.refreshFogUniforms(De,It),D.refreshMaterialUniforms(De,ot,dt,ct,E.state.transmissionRenderTarget[R.id]),Ft.needsLights&&Ft.lightProbeGrid){let Te=Ft.lightProbeGrid;De.probesSH.value=Te.texture,De.probesMin.value.copy(Te.boundingBox.min),De.probesMax.value.copy(Te.boundingBox.max),De.probesResolution.value.copy(Te.resolution)}dr.upload(V,br(Ft),De,Z)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(dr.upload(V,br(Ft),De,Z),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ee.setValue(V,"center",rt.center),Ee.setValue(V,"modelViewMatrix",rt.modelViewMatrix),Ee.setValue(V,"normalMatrix",rt.normalMatrix),Ee.setValue(V,"modelMatrix",rt.matrixWorld),ot.uniformsGroups!==void 0){let Te=ot.uniformsGroups;for(let Fi=0,Ts=Te.length;Fi<Ts;Fi++){let xh=Te[Fi];ut.update(xh,Ln),ut.bind(xh,Ln)}}return Ln}function je(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.sunLights.needsUpdate=J,R.sunLightShadows.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function yn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(R,J,lt){let ot=it.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),it.get(R.texture).__webglTexture=J,it.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:lt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){let lt=it.get(R);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,lt=0){ft=R,X=J,K=lt;let ot=null,rt=!1,It=!1;if(R){let Lt=it.get(R);if(Lt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),at.copy(R.viewport),Et.copy(R.scissor),Ct=R.scissorTest,w.viewport(at),w.scissor(Et),w.setScissorTest(Ct),nt=-1;return}else if(Lt.__webglFramebuffer===void 0)Z.setupRenderTarget(R);else if(Lt.__hasExternalTextures)Z.rebindTextures(R,it.get(R.texture).__webglTexture,it.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ae=R.depthTexture;if(Lt.__boundDepthTexture!==ae){if(ae!==null&&it.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(R)}}let zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(It=!0);let Wt=it.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[J])?ot=Wt[J][lt]:ot=Wt[J],rt=!0):R.samples>0&&Z.useMultisampledRTT(R)===!1?ot=it.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?ot=Wt[lt]:ot=Wt,at.copy(R.viewport),Et.copy(R.scissor),Ct=R.scissorTest}else at.copy(_t).multiplyScalar(dt).floor(),Et.copy(gt).multiplyScalar(dt).floor(),Ct=Nt;if(lt!==0&&(ot=Y),w.bindFramebuffer(V.FRAMEBUFFER,ot)&&w.drawBuffers(R,ot),w.viewport(at),w.scissor(Et),w.setScissorTest(Ct),rt){let Lt=it.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt.__webglTexture,lt)}else if(It){let Lt=J;for(let zt=0;zt<R.textures.length;zt++){let Wt=it.get(R.textures[zt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+zt,Wt.__webglTexture,lt,Lt)}}else if(R!==null&&lt!==0){let Lt=it.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,lt)}nt=-1};function Hn(R){let J=it.get(R);return(J.__readFormat!==R.format||J.__readType!==R.type)&&(J.__readFormat=R.format,J.__readType=R.type,J.__formatReadable=U.textureFormatReadable(R.format),J.__typeReadable=U.textureTypeReadable(R.type)),J}this.readRenderTargetPixels=function(R,J,lt,ot,rt,It,Ut,Lt=0){if(!(R&&R.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){w.bindFramebuffer(V.FRAMEBUFFER,zt);try{let Wt=R.textures[Lt],ae=Wt.format,he=Wt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt);let kt=Hn(Wt);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-ot&&lt>=0&&lt<=R.height-rt&&V.readPixels(J,lt,ot,rt,mt.convert(ae),mt.convert(he),It)}finally{let Wt=ft!==null?it.get(ft).__webglFramebuffer:null;w.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,J,lt,ot,rt,It,Ut,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt)if(J>=0&&J<=R.width-ot&&lt>=0&&lt<=R.height-rt){w.bindFramebuffer(V.FRAMEBUFFER,zt);let Wt=R.textures[Lt],ae=Wt.format,he=Wt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt);let kt=Hn(Wt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,_e),V.bufferData(V.PIXEL_PACK_BUFFER,It.byteLength,V.STREAM_READ),V.readPixels(J,lt,ot,rt,mt.convert(ae),mt.convert(he),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Fe=ft!==null?it.get(ft).__webglFramebuffer:null;w.bindFramebuffer(V.FRAMEBUFFER,Fe);let Re=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Hf(V,Re,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,_e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,It),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(_e),V.deleteSync(Re),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,J=null,lt=0){let ot=Math.pow(2,-lt),rt=Math.floor(R.image.width*ot),It=Math.floor(R.image.height*ot),Ut=J!==null?J.x:0,Lt=J!==null?J.y:0;Z.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,lt,0,0,Ut,Lt,rt,It),w.unbindTexture()},this.copyTextureToTexture=function(R,J,lt=null,ot=null,rt=0,It=0){let Ut,Lt,zt,Wt,ae,he,kt,_e,Fe,Re=R.isCompressedTexture?R.mipmaps[It]:R.image;if(lt!==null)Ut=lt.max.x-lt.min.x,Lt=lt.max.y-lt.min.y,zt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,ae=lt.min.y,he=lt.isBox3?lt.min.z:0;else{let De=Math.pow(2,-rt);Ut=Math.floor(Re.width*De),Lt=Math.floor(Re.height*De),R.isDataArrayTexture?zt=Re.depth:R.isData3DTexture?zt=Math.floor(Re.depth*De):zt=1,Wt=0,ae=0,he=0}ot!==null?(kt=ot.x,_e=ot.y,Fe=ot.z):(kt=0,_e=0,Fe=0);let we=mt.convert(J.format),rn=mt.convert(J.type),Ft;J.isData3DTexture?(Z.setTexture3D(J,0),Ft=V.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Z.setTexture2DArray(J,0),Ft=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(J,0),Ft=V.TEXTURE_2D),w.activeTexture(V.TEXTURE0),w.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),w.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),w.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);let hn=w.getParameter(V.UNPACK_ROW_LENGTH),ge=w.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=w.getParameter(V.UNPACK_SKIP_PIXELS),si=w.getParameter(V.UNPACK_SKIP_ROWS),Ni=w.getParameter(V.UNPACK_SKIP_IMAGES);w.pixelStorei(V.UNPACK_ROW_LENGTH,Re.width),w.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Re.height),w.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),w.pixelStorei(V.UNPACK_SKIP_ROWS,ae),w.pixelStorei(V.UNPACK_SKIP_IMAGES,he);let ws=R.isDataArrayTexture||R.isData3DTexture,Ee=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){let De=it.get(R),Ui=it.get(J),Te=it.get(De.__renderTarget),Fi=it.get(Ui.__renderTarget);w.bindFramebuffer(V.READ_FRAMEBUFFER,Te.__webglFramebuffer),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ts=0;Ts<zt;Ts++)ws&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(R).__webglTexture,rt,he+Ts),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,it.get(J).__webglTexture,It,Fe+Ts)),V.blitFramebuffer(Wt,ae,Ut,Lt,kt,_e,Ut,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);w.bindFramebuffer(V.READ_FRAMEBUFFER,null),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(rt!==0||R.isRenderTargetTexture||it.has(R)){let De=it.get(R),Ui=it.get(J);w.bindFramebuffer(V.READ_FRAMEBUFFER,z),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,q);for(let Te=0;Te<zt;Te++)ws?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,De.__webglTexture,rt,he+Te):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,rt),Ee?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ui.__webglTexture,It,Fe+Te):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ui.__webglTexture,It),rt!==0?V.blitFramebuffer(Wt,ae,Ut,Lt,kt,_e,Ut,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Ee?V.copyTexSubImage3D(Ft,It,kt,_e,Fe+Te,Wt,ae,Ut,Lt):V.copyTexSubImage2D(Ft,It,kt,_e,Wt,ae,Ut,Lt);w.bindFramebuffer(V.READ_FRAMEBUFFER,null),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ee?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ft,It,kt,_e,Fe,Ut,Lt,zt,we,rn,Re.data):J.isCompressedArrayTexture?V.compressedTexSubImage3D(Ft,It,kt,_e,Fe,Ut,Lt,zt,we,Re.data):V.texSubImage3D(Ft,It,kt,_e,Fe,Ut,Lt,zt,we,rn,Re):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,It,kt,_e,Ut,Lt,we,rn,Re.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,It,kt,_e,Re.width,Re.height,we,Re.data):V.texSubImage2D(V.TEXTURE_2D,It,kt,_e,Ut,Lt,we,rn,Re);w.pixelStorei(V.UNPACK_ROW_LENGTH,hn),w.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ge),w.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),w.pixelStorei(V.UNPACK_SKIP_ROWS,si),w.pixelStorei(V.UNPACK_SKIP_IMAGES,Ni),It===0&&J.generateMipmaps&&V.generateMipmap(Ft),w.unbindTexture()},this.initRenderTarget=function(R){it.get(R).__webglFramebuffer===void 0&&Z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Z.setTextureCube(R,0):R.isData3DTexture?Z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Z.setTexture2DArray(R,0):Z.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){X=0,K=0,ft=null,w.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function pi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pe,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Ed(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let g=Ed(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Ed(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new ze(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+f,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Lp=_l(Zc(),1);var Co=new k;function zn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Co.copy(t),Co[n]=0,Co.normalize();let l=.5*o/(o+a),u=1-Co.angleTo(i)/c;return Math.sign(Co[e])===1?u*l:a/(o+a)+l+l*(1-u)}var mr=class i extends Ue{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,l=new k,u=new k(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new k,m=.5/o;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*r,f[p+1]=u.y*Math.sign(c.y)+l.y*r,f[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[M+0]=zn(x,l,"z","y",r,n),d[M+1]=1-zn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[M+0]=1-zn(x,l,"z","y",r,n),d[M+1]=1-zn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[M+0]=1-zn(x,l,"x","z",r,t),d[M+1]=zn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[M+0]=1-zn(x,l,"x","z",r,t),d[M+1]=1-zn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[M+0]=1-zn(x,l,"x","y",r,t),d[M+1]=1-zn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[M+0]=zn(x,l,"x","y",r,t),d[M+1]=1-zn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var wd=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),Av=Math.PI*2;function Rv(){let i=new fe,t=new Ue(1,1,1),e=new Rn(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new cn({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,f,h,d,g,x){let m=new ue(c,typeof l=="string"?s(l):l);return m.position.set(u,f,h),m.scale.set(d,g,x),a.add(m),m}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new ue(pi(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function Cv({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new tn({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:bn});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let d of[-1,1])t(i,s?"#deb181":"#aa785d",d*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",d*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(i,o,d,c,0,l,1.8,n),t(i,u,d,f,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,d,f,g,l,h,l)}for(let d of[-n/2+l/2,n/2-l/2])t(i,o,0,c,d,e-l*2,1.8,l),t(i,u,0,f,d,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function Iv({box:i,oval:t,root:e},n,s,r){let o=new fe;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new fe;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function Pv(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new tn({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new tn({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,m=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,m,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let m=0;m<4;m++){let p=m-1.5,M=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][m],g*t+p*r,n+3+(2+m*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+m*1.12)*Math.min(1.15,r),r*1.15);M.rotation.z=p*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>Iv(i,x,r*(1.72-x*.17),g)),d=Array.from({length:5},(g,x)=>{let m=r*(.45+x%3*.18),p=c(o,f,0,0,0,m,m,m);return p.name="bubble-"+x,p});return g=>{for(let[x,{fish:m,tail:p}]of h.entries()){let M=g*(.43+x*.06)+x*2.07+.5,A=t*(.24+x*.036),S=e*(.17+x*.038);m.position.set(Math.cos(M)*A,n+10+x*3.65+Math.sin(M*1.7)*2.15,Math.sin(M)*S),m.rotation.y=-Math.atan2(Math.cos(M)*S,-Math.sin(M)*A),p.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,m]of d.entries()){let p=(g*.3+x/d.length)%1;m.position.set(t*.33+Math.sin(p*Av+x)*r,n+5+p*20,e*.23),m.visible=p>.08&&p<.94}}}function Lv({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new fe;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new fe;g.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*d*.28;for(let m of[-1,0,1])e(g,"#ecc297",(m*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:g,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,g=Math.cos(d)*n*.13,x=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*n*.13);for(let[m,p]of u.entries()){let M=m+1;p.position.set(-(3.55+M*1.24)*a,-.19*M*a,Math.sin(h*1.75-M*.55)*M*a*.32)}for(let{leg:m,side:p,front:M}of f)m.rotation.y=Math.sin(h*3.6)*p*M*.31}}function Td(i,t,e){if(!Object.hasOwn(wd,i))return null;let n=wd[i],s=Rv(),r=n==="aquarium",{base:o,top:a}=Cv(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?Pv(s,t,e,o,a,c):Lv(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var $=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),Dv=Object.freeze({sage:$.sage,mint:$.aqua,sky:$.blue,peach:$.peach,coral:"#cf8979",lavender:$.lilac,butter:$.honey,cream:$.linen,white:$.cream,oak:$.oakLight,walnut:$.walnut,charcoal:"#505b68",brass:$.brass,terracotta:"#b97d63",forest:$.moss,blush:$.blush,teddy:"#aa8063",slate:"#9b9b9d"}),Nv=new Set([$.oak,$.oakLight,$.walnut]),Uv=new Set([$.sage,$.moss,$.linen,$.lilac,$.lilacLight,$.blush,$.peach,$.oatmeal,$.upholsteryShadow,$.denim]);function Fv(i,t){let e=Nv.has(i)?1:Uv.has(i)?2:0,n=i===$.glass||i===$.darkGlass||i===$.blueWater,s=i===$.brass,r=i===$.steel||i===$.basinSteel,o=new cn({color:i,roughness:s||r?.37:n?.33:i===$.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Ju=class{constructor(t,e){this.root=new fe,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,Fv(e,this.grainDirection));let a=new ue(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new mr(s,r,o,2,u):new Ue(s,r,o);return this.part(f,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new hi(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Rn(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new Ri(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Tt(l,u)),c=new io(a,24);return c.scale(s,r,o),this.part(c,$.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:pi(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ue(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ii(i,t,e,n,s,r,o=$.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function Io(i,t,e,n,s,r,o,a){let c=o===$.linen?$.binding:$.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function Ov(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?$.upholsteryShadow:$.moss,u=a?$.oatmeal:$.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(Ii(i,d,g,f,h,5),i.box(d,5,g,f*.97,22,h*.98,l,8),r){let b=o?t*.52:t*.34,E=o?e*.38:e*.46,N=o?t*.22:-t*.32,v=o?c*e*.3:e*.25;Ii(i,N,v,b,E,5),i.box(N,5,v,b,22,E,l,8),i.box(N,25,v,b*.96,12,E*.9,n,5),o&&i.box(N,29,c*e*.464,b,26,x,u,6)}let m=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let b=e*.88/m;for(let E=0;E<m;E++){let N=-e*.44+b*(E+.5);i.box(d+x*.18,25,N,f*.76,12,b-3,n,5),i.box(d-f*.39,27,N,f*.22,31,b-1,u,8)}i.box(d,29,-c*e*.445,f*.88,20,x,u,6),Io(i,d+f*.13,35,-e*.31,f*.42,b*.49,a?$.sage:$.peach,-.18),Io(i,d+f*.12,35,e*.28,f*.4,b*.45,$.linen,.2)}else{let b=t*.8/m;for(let E=0;E<m;E++){let N=-t*.4+b*(E+.5);i.box(N,25,g+h*.08,b-3,12,h*.7,n,6),i.box(N,27,g-h*.39,b-1,31,h*.24,u,7)}for(let E of[-t*.442,t*.442])i.box(E,26,g,x,22,h*.89,u,6);Io(i,-t*.27,35,g-h*.15,t*.18,h*.34,$.peach,-.18),Io(i,t*.27,35,g-h*.12,t*.17,h*.33,$.linen,.2)}let p=o?f*.67:f*.19,M=o?e*.14:h*.58,A=o?d+f*.06:f*.32,S=o?e*.13:g+h*.1;i.box(A,37.1,S,p,1.7,M,$.lilacLight,.65);for(let b of[-1,1])i.box(A,38.82,S+b*M*.36,p*.9,.25,1.2,$.lilac);return 58}function Qn(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Ii(i,t,e,n,s,c,$.walnut),i.box(t,c,e,n*.9,7,s*.92,$.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(u,c+9,f,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function Bv(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return Qn(i,0,-e*.39,t*.2,e*.23,0,$.denim),Qn(i,0,e*.39,t*.2,e*.23,Math.PI,$.denim),Qn(i,-t*.415,0,t*.17,e*.27,Math.PI/2,$.denim),Qn(i,t*.415,0,t*.17,e*.27,-Math.PI/2,$.denim),Ii(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,$.walnut,3),i.box(0,37,0,t*.79,8,e*.57,$.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,$.linen,.6),46.4;if(r)Qn(i,0,-e*.37,t*.2,e*.2,0,$.sage),Qn(i,0,e*.37,t*.2,e*.2,Math.PI,$.blush),Qn(i,-t*.38,0,t*.2,e*.2,Math.PI/2,$.lilac),Qn(i,t*.38,0,t*.2,e*.2,-Math.PI/2,$.honey),i.disc(0,0,0,t*.13,5,e*.13,$.walnut),i.disc(0,4,0,t*.045,31,e*.045,$.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[$.sage,$.blush,$.lilac,$.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])Qn(i,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Ii(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,$.linen,.5)}return 42}function zv(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,$.ink,.5),i.box(t,e+1,n,s*.1,14,4,$.ink,1),i.box(t,e+12,n,s,25,6,$.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,$.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,$.blue,.2)}function kv(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&i.box(l,37,f+.8,a,7,u-1.6,n,2.4),i.box(l,4,f,a*.81,34,u*.81,$.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;i.box(l,d,f+u*.41,a*.74,8.4,2,$.oak,.7),i.box(l,d+3,f+u*.43,a*.26,2,2,$.brass,.5)}}return zv(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,$.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,$.peach),81}function Ad(i,t,e,n,s,r){let o=new mn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Xi(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function Hv(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ii(i,0,0,t,e,6,$.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,$.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,$.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,$.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,$.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Io(i,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,$.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,g,x,m]of[[-.24,.12,1,$.cream],[.23,.27,.79,$.honey],[.08,.04,.57,$.cream],[-.1,.34,.62,$.honey]])Ad(i,t*d,u+30.8,e*g,h*x,m);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,u+30.71,e*.24,.85,.24,e*.33,$.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,u+30.72,e*d,t*.71,.24,.9,$.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,$.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])i.box(t*.45*u,4,e*.46*f,5,l,6,$.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*u,l-29,e*f*.105,3,20,3,n,.8)}return l}function Vv(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ii(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,$.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,$.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,g=h*(f-(l-1)/2),x=5+u*d;i.box(g,x,e*.46,h-2,d-1.5,2.9,n,1),i.oval(g,x+d*.45,e*.51,2.2,1.7,2.2,$.brass)}return a+2}function Gv(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,$.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,$.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,$.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?$.lilac:$.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,$.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?$.lilacLight:$.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,$.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,$.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,$.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Ad(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,$.cream);return 5}function Wv(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,$.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,$.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,$.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,$.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,$.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,$.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,$.darkGlass);i.box(0,n-4.5,o,s,4.85,u,$.steel,.4);let f=-s/2-u*1.15;i.disc(f,n,o,u*.8,u*2.9,u*.8,$.steel),i.box(f+u,n+u*2.5,o,u*2.8,u*.7,u,$.steel,.6)}function Xv(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?$.sage:$.walnut,2.3),s?Wv(i,t,e,r+2):i.box(0,r-3,0,t,5,e,$.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(d,6,g,f,r*.67,h,a?$.moss:$.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,$.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,$.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,f,f,1,$.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,$.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,$.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,$.brass,1);return r+3}function qv(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,$.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,$.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,$.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,$.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,$.glass),i.disc(0,22,-e*.44,3.5,9,3.5,$.brass),i.box(0,30,-e*.4,5,3.7,e*.1,$.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,$.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,$.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,$.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,$.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,$.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,$.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,$.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,$.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,$.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,$.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,$.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,$.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,$.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,$.blush,1.7),36)}function Yv(i,t,e,n,s){let r=n?$.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,$.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,$.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,$.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,$.linen,3.8),c+o*(n?.37:.28)}function Zv(i,t,e){let s=[$.sage,$.peach,$.honey,$.lilac,$.blue,$.blush];Ii(i,0,0,t*.96,e*.96,22,$.sage),i.box(0,20,0,t*.94,7,e*.93,$.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function Jv(i,t,e,n){let s=[$.linen,n,$.sand,$.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function $v(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,$.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,$.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,f=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,$.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=n?$.sage:[$.blush,$.linen,$.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function Rd(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return Td(t,e,n);let s=Dv[t.split("-").at(-1)],r=new Ju(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=Ov(r,e,n,s||(t==="sofa"?$.linen:$.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,$.walnut,3.5),r.box(0,24,0,e,4,n,$.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,$.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,$.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,$.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,$.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,$.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=Bv(r,e,n,s||$.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=kv(r,e,n,s||$.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))Qn(r,0,0,e,n,0,s||$.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){Qn(r,0,0,e,n,0,s||$.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,$.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=Hv(r,e,n,s||$.lilac,t);else if(t==="rug")o=Gv(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=Xv(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=qv(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=$v(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,$.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,$.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,$.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=Vv(r,e,n,s||$.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Ii(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||$.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,$.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=Yv(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=Jv(r,e,n,s||$.sage);else if(t.startsWith("baby-activities-"))o=Zv(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||$.peach),r.ring(0,a,0,a*.95,a*.95,1.2,$.linen),o=a*2}else return null;return r.finish(o)}var Ot={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Lo=Math.PI,$u=2*Lo,Kv=new Set(["unknown","unavailable"]),ei=(i,t,e)=>Math.max(t,Math.min(e,i)),Po=(i,t)=>Number.isFinite(i)?ei(i,12,480):t,Pd=.96,Ld=.09;function Dd(i,t,e){let n=Po(i.w,42),s=Po(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*Ld)<=s*Pd/2}var le=(i,t={})=>new cn({color:i,roughness:.83,...t}),Ku=i=>String(i?.state??"unknown"),bs=i=>!Kv.has(Ku(i)),xr=i=>bs(i)&&(i.active===!0||i.state==="on"),jv=i=>xr(i)?Number.isFinite(i.attributes?.brightness)?ei(i.attributes.brightness/255,0,1):1:0;function Pi(i,t,e,n=0,s=0,r=0){let o=new ue(t,e);return o.position.set(n,s,r),i.add(o),o}function Ze(i,t,e,n,s,r=0,o=0,a=0){return Pi(i,new Ue(t,e,n),s,r,o,a)}function un(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,f=l-e/2,h=new mn;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new Zn(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),Pi(i,d,s,r,o,a)}function We(i,t,e,n,s,r=0,o=0,a=0,c=16){return Pi(i,new hi(t,e,n,c),s,r,o,a)}function ti(i,t,e,n,s,r){return Pi(i,new Rn(t,10,7),e,n,s,r)}function gr(i,t=0,e=0,n=0){let s=new fe;return s.position.set(t,e,n),i.add(s),s}function Qv(i,t){let e=new He({transparent:!0,depthWrite:!1,blending:po,uniforms:{strength:{value:0},tint:{value:new Yt(Ot.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=Pi(i,new Ai(2*t,2*t),e,0,2.8,0);return n.rotation.x=-Lo/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function tb(i,t,e){let n=new fe,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),h=le(Ot.honey),d=le(Ot.ink),g=le(Ot.brass,{roughness:.36,metalness:.42}),x=le(Ot.cream,{emissive:Ot.warm,emissiveIntensity:0}),m=new Yt(Ot.warm),p=u?46:o?50:a?56:l?40:c?56:36,M=Qv(n,ei(f*(a?1.72:1.35),38,110));if(a){let A=f*(u?.19:.29);We(n,A,A*1.02,3,d,0,p+2),o&&We(n,1.7,1.7,13,h,0,p+9),We(n,A*.82,A,5,h,0,p-1.5),We(n,A*.92,A*.96,1.15,g,0,p+1.1);let S=ti(n,A*.83,x,0,p,0);S.scale.y=o?.88:.52}else if(l)un(n,f*.34,18,4,d,0,35,-4),We(n,f*.12,f*.11,14,h,0,37,3),ti(n,f*.21,x,0,p+3,3);else{let A=p-7,S=c?3:16,b=f*(c?.25:.3);if(We(n,b*.57,b*.67,4,d,0,S),We(n,2,2.9,A-S,h,0,(S+A)/2),c)ti(n,b*.81,x,0,p,0);else{let E=r==="bud_lamp"?12:9;We(n,b*.56,b,14,x,0,p,0,E),We(n,b,b*.99,1.2,g,0,p-6.7,0,E),We(n,b*.55,b*.58,1.1,g,0,p+7.1,0,E)}}return{root:n,anchorY:p+2,animate(A){let S=jv(A),b=A?.attributes?.rgb_color;if(Array.isArray(b)&&b.length===3&&b.every(Number.isFinite)){let[E,N,v]=b.map(P=>ei(P/255,0,1));m.setRGB(E,N,v,Be)}else m.setHex(Ot.warm);M(S,m),x.emissiveIntensity=S*.88,x.emissive.copy(m),S>0?x.color.copy(m):x.color.setHex(Ot.cream)}}}function eb(i){let t=new mn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Zn(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Lo/2)}function Cd(i,t,e,n){let s=new fe,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=gr(s,0,o,0);n&&(a.rotation.x=Lo/2);let c=gr(a,0,-1,0),l=le(Ot.cream),u=le(Ot.ink),f=/(?:white|cream)$/.test(i.type)?Ot.oat:/(?:forest|sage)$/.test(i.type)?Ot.sage:Ot.honey,h=le(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;We(a,r*.18,r*.2,6,u),We(a,r*.174,r*.176,1.4,le(Ot.brass,{roughness:.36,metalness:.42}),0,3.4),We(a,r*.15,r*.17,2.6,l,0,4.9);let g=eb(r);for(let x=0;x<d;x++){let m=gr(c);m.rotation.y=x/d*$u,Pi(m,g,h)}if(n){un(s,r*1.66,6,r*1.02,u,0,3),Ze(s,r*.3,11,6,l,0,10);let x=Pi(s,new Ri(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let m=-1;m<=1;m++){let p=m*r*.5;We(s,.68,.68,2*Math.sqrt(r*r-p*p),u,p,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,m=0){let p=Number.isFinite(x?.attributes?.percentage)?ei(x.attributes.percentage/100,.12,1):.64;c.rotation.y=xr(x)?m*$u*p%$u:0}}}function nb(i,t){let e=new fe,n=t.mountY??39,s=gr(e,0,n),r=ei(i*.72,17,27);un(s,r,31,5,le(Ot.ink),0,0,-.5),un(s,r-1.9,29,4.4,le(Ot.cream),0,.3,1);let o=le(Ot.oat,{emissive:Ot.warm,emissiveIntensity:0}),a=un(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=le(Ot.teal,{emissive:Ot.mint,emissiveIntensity:0});return ti(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=bs(l)?xr(l)?-.16:.16:0,o.emissiveIntensity=xr(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?Ot.mint:Ot.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function Id(i,t,e,n=31){let s=new fe,r=36.5,o=Math.max(12,i-6),a=le(Ot.oat);if(t){let h=le(Ot.glass,{roughness:.32});Ze(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])Ze(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;Ze(s,o,1.8,7,h,0,d+.35);for(let g of[-4.25,4.25])Ze(s,o+2,3.2,1.5,a,0,d,g);Ze(s,o+3,3.8,11,a,0,r-n/2,1.4),Ze(s,o,1.35,.5,le(Ot.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=le(Ot.cream),l=r+n/2-1;un(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>Ze(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h,d,g,x=!1){let m=ju(h),p=m===null?x?0:f:1-m;x||(f=p);let M=Number.isFinite(h?.attributes?.current_tilt_position)?ei(h.attributes.current_tilt_position/100,0,1):0;for(let A=0;A<u.length;A++){let S=ei(p*u.length-A,0,1);u[A].visible=S>.02,u[A].scale.y=S,u[A].rotation.x=M*.9}}}}function ju(i){return bs(i)?Number.isFinite(i.attributes?.current_position)?ei(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function ib(i,t){let e=new fe,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=le(Ot.oat),l=le(Ot.cream),u=le(Ot.plum),f=[le(Ot.tile),le(Ot.paleTile)],h=le(Ot.dark);Ze(e,i,5,t*Pd,l,0,2.5,t*Ld),Ze(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let F of[-i*.42,i*.42])Ze(e,i*.09,o+4,n,c,F,(o+4)/2),un(e,i*.1,o+4,5,l,F,(o+4)/2,r+1,1.5);let d=new mn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new Zn(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Pi(e,g,u,0,o+4);let x=i*.49,m=Math.atan2(a,x),p=Math.hypot(a,x),M=(n+11)/8,A=[[],[]];for(let F of[-1,1])for(let B=0;B<8;B++){let Y=-r-5.5+(B+.5)*M,z=new Ue(p*.97,2.2,M-.62);z.rotateZ(-F*m),z.translate(F*x*.5,o+5.65+a*.5,Y),A[B%2].push(z)}A.forEach((F,B)=>{Pi(e,pi(F),f[B]),F.forEach(Y=>Y.dispose())}),un(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),Ze(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),Ze(e,s,o,1.5,h,0,o/2+4,r-4);for(let F of e.children)F.isMesh&&(F.castShadow=!0);let S=le(Ot.mint),b=le(Ot.sage),N=(o-3)/6,v=Array.from({length:6},(F,B)=>{let Y=gr(e,0,o-(B+.5)*N+2,r+.5);return un(Y,s-2,N-.7,3.4,S,0,0,0,1.2),Ze(Y,s*.91,.68,.7,b,0,N*.23,1.8),B===5&&un(Y,s*.13,2,2.2,l,0,0,2.3,.55),Y}),P=le(Ot.gold,{emissive:Ot.ember,emissiveIntensity:0});ti(e,3.7,P,i*.422,o*.73,r+4.5);let O=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(F,B=0,Y,z=!1){let X=ju(F)??(z?0:O);z||(O=X),S.color.setHex(bs(F)?Ot.mint:Ot.muted),b.color.setHex(bs(F)?Ot.sage:Ot.muted);let K=(1-X)*v.length;v.forEach((nt,st)=>{let at=ei(K-st,0,1);nt.visible=at>.02,nt.scale.y=at,nt.position.y=o-(st+at/2)*N+2});let ft=["opening","closing"].includes(Ku(F));P.emissiveIntensity=ft?.55+(.5+.5*Math.cos(B*6)):0}}}function sb(i){let t=new fe,e=46,n=le(Ot.cream),s=le(Ot.honey),r=Math.min(i*.86,88),o=gr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])Ze(t,3.4,e,5,n,c,e/2);Ze(t,r+4,3,5,n,0,e),un(o,r-2,e-4,4,s,r/2,e/2,0,2),ti(o,2.2,le(Ot.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,f=!1){let d=ju(c)??(f?0:a);f||(a=d),o.rotation.y=-1.32*d,s.color.setHex(bs(c)?Ot.honey:Ot.muted)}}}function rb(i,t,e){let n=new fe,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=ei(t*.85,23,126),a=le(Ot.dark,{emissive:Ot.mint,emissiveIntensity:0});if(un(n,o,s?25:18,8,le(Ot.cream),0,r,0),s){un(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])ti(n,1.35,le(Ot.oat),o*c,r-7,4.3)}else Ze(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=bs(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Ot.warm:Ot.glass),a.emissiveIntensity=f?1.15:xr(c)?.25:0}}}function ob(i,t,e){let n=new fe,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=le(Ot.cream),c=le(r?Ot.glass:Ot.sage),l=le(Ot.teal,{emissive:Ot.mint,emissiveIntensity:0}),u=o-1;if(We(n,s*.46,s*.5,4,le(Ot.ink),0,2),r){let d=ti(n,s/2,c,0,12,0);d.scale.y=.78,We(n,s*.19,s*.22,3.5,a,0,u)}else{un(n,s,24,s*.82,c,0,15,0,5),un(n,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)Ze(n,s*.66,1.2,1.1,l,0,u+2,d*3.5)}ti(n,1.6,l,s*.18,u-2,s*.31);let f=le(Ot.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,g)=>ti(n,2.1+g*.6,f,0,u+3,0));return{root:n,anchorY:u,animate(d,g=0){let x=xr(d);l.emissiveIntensity=x?1.6:0;for(let m=0;m<h.length;m++){h[m].visible=x;let p=(g*.68+m/h.length)%1;h[m].position.set(Math.sin(p*Lo)*3.1,u+4+p*14,0),h[m].scale.setScalar(.7+p*.62)}}}}function ab(i,t){let e=new fe,n=Math.min(i,t)*.42,s=le(Ot.sage,{emissive:Ot.mint,emissiveIntensity:0}),r=le(Ot.ink);We(e,n,n*.95,7,r,0,4.6),We(e,n*.96,n,5.5,le(Ot.cream),0,10.2),We(e,n*.28,n*.33,4,le(Ot.oat),0,14,-n*.23);for(let a of[-.27,.27])ti(e,n*.105,r,n*a,10,n*.88);let o=un(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03,animate(a,c=0,l=!1){let u=["cleaning","returning"].includes(Ku(a));o.material.emissiveIntensity=u?l?.6+.5*Math.cos(c*6):.3:0}}}function Nd(i,t={}){let e=Po(i.w,42),n=Po(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?nb(e,t):s==="garageDoor"?ib(e,n):s==="door"||r==="door"?sb(e):s==="window"?Id(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?Id(Po(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?rb(i,e,t):s==="airPurifier"||s==="humidifier"?ob(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?ab(e,n):s==="windowFan"?Cd(i,e,n,!0):r==="fan"||/^fans-/.test(s)?Cd(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?tb(i,e,n):null}var kd=_l(Zc(),1),{difference:Hd,union:Vd}=kd.default,Kc=18,In=.001,mi=(i,t)=>i[0]*t[0]+i[1]*t[1],Ms=(i,t)=>i[0]*t[1]-i[1]*t[0],gi=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ae=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],Qc=([i,t])=>[-t,i],Ud=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Jc=i=>i.map(({x:t,y:e})=>[t,e]),Li=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Gd=i=>i.length?Vd(...i):[];function jc(i,t,e,n=0){let s=gi(t,i),r=Math.hypot(...s);if(r<In)return null;let o=s.map(u=>u/r),a=Qc(o),c=Ae(i,o,-n),l=Ae(t,o,n);return Li([Ae(c,a,e),Ae(l,a,e),Ae(l,a,-e),Ae(c,a,-e)])}function $c(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function Fd(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=gi(n,t),r=Math.hypot(...s);return r>In?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function cb(i,t,e,n){if(Math.abs(mi(i.tangent,t.tangent))<.9999)return null;let s=Qc(i.tangent),[r,o]=[t.start,t.end].map(x=>gi(x,i.start)),a=mi(r,s);if(Math.abs(a)<.1||Math.abs(a)>Kc||Math.abs(a-mi(o,s))>.1)return null;let c=[mi(r,i.tangent),mi(o,i.tangent)].sort((x,m)=>x-m),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let f=Ae(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!$c(e,Ae(f,s,-h))||!$c(n,Ae(f,s,a+h))||$c(e,Ae(f,s,a/2))||$c(n,Ae(f,s,a/2)))return null;let d=Ae(i.start,i.tangent,l),g=Ae(i.start,i.tangent,u);return Li([Ae(d,s,-h*.05),Ae(g,s,-h*.05),Ae(g,s,a+h*.05),Ae(d,s,a+h*.05)])}function Wd(i){let t=[],e=[];for(let n of[...i].reverse()){let s=Gd(n.polygons);if(!s.length)continue;let r=t.length?Hd(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?Vd(t,s):s}return{footprint:t,regions:e.reverse()}}function Do(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Xd(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:Jc(h.points),polygons:[Li(Jc(h.points))],outdoor:e&&Do(h)})),s=[];for(let[h,d]of n.entries())for(let g of n.slice(h+1))for(let x of Fd(d.points))for(let m of Fd(g.points)){let p=cb(x,m,d.points,g.points);p&&s.push({surface:d.surface,polygons:[p],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:g,deckBottom:x,northDeck:m,southDeck:p,recess:M}=t;r.push({surface:"patio",polygons:[Li(Jc(m)),Li(Jc(p)),Li(Ud(h,g,d+1,x))]}),M.x2>M.x1&&M.z2>M.z1&&o.push({surface:"oak",polygons:[Li(Ud(M.x1,M.z1,M.x2,M.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=Wd([...l,...c]),f=t||e?Gd(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function lb(i,t,e,n){let s=Ms(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Ae(i,Qc(t),r),a=Ae(i,Qc(e),-r),c=Ms(gi(a,o),e)/s,l=Ae(o,t,c);return Math.hypot(...gi(l,i))>n*2.5?Li([i,o,a]):Li([i,o,l,a])}function Od(i,t){let e=Ms(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=gi(t.point,i.point);return[Ms(n,t.tangent)/e,Ms(n,i.tangent)/e]}function ub(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=gi(r.point,s.point);if(Math.hypot(...o)>Kc)continue;let a=Od(s,r);a&&a.every(c=>c>=-Kc&&c<=In)?e.push({a:s,b:r,center:Ae(s.point,s.tangent,a[0])}):!a&&mi(s.tangent,r.tangent)<0&&mi(o,s.tangent)<=In&&mi(o,r.tangent)>=-In&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Od(s,o);if(!a)continue;let[c,l]=a;c<-Kc||c>=-In||l<=In||l>=r.length-In||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:Ae(s.point,s.tangent,c)})}}return e}function Bd({a:i,b:t,center:e},n){return e?[jc(i.point,e,n,.1),t&&jc(t.point,e,n,.1),t&&lb(e,i.tangent,t.tangent,n)].filter(Boolean):[jc(i.point,t.point,n,.1)].filter(Boolean)}function qd(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function hb(i,t){return qd(i).flatMap(([e,n])=>{let s=gi(n,e),r=Math.hypot(...s);if(r<In)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=gi(a,e),u=gi(c,e);if(Math.abs(Ms(l,o))>In||Math.abs(Ms(u,o))>In)return[];let[f,h]=[mi(l,o),mi(u,o)].sort((x,m)=>x-m),d=Math.max(0,f),g=Math.min(r,h);return g-d>In?[[Ae(e,o,d),Ae(e,o,g)]]:[]})})}function zd(i,t){return t?.length?Hd(i,t):i}function Yd(i,t,e,n){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of i){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],g=(M,A,S,b,E,N,v)=>{A-M>In&&r(jc(Ae(h,d,M),Ae(h,d,A),E/2),S,b,N,v)},x=c.openings.length?n:0,m=(M,A)=>{g(M,A,x,e,t,l,2),g(M,A,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let p=0;for(let M of c.openings)m(p,M.start),p=Math.max(p,M.end);m(p,c.length),g(0,c.length,0,3,t+3,f,1)}for(let c of ub(i)){let[l,u,f]=c.a.wall.palette;for(let h of Bd(c,t/2))r(h,0,e,l,2);for(let h of Bd(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of h.sort((x,m)=>x.priority-m.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{...Wd([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=qd(l);return c.map(g=>({...g,bottom:u,top:f,faces:{top:zd(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:zd(g.polygons,a[h-1]?.footprint),sides:hb(g.polygons,d)}}))})}var fb=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),db=3,pb={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},Zd=Object.fromEntries(Object.entries(pb).map(([i,t])=>[i,t.map(e=>new Yt(e))])),mb=new Yt("#ffc38b"),{clamp:gb,lerp:No,smoothstep:Jd}=xe;function $d(i,t,e){i.toneMapping=mo,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=gs,i.shadowMap.autoUpdate=!1;let n=new ms("#fff4e5","#897e91",1.13),s=new $i("#fff0d4",2.15),r=new $i("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:db},()=>new lo("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],x,m,p=!0,M=new Yt;function A(){for(let E of t.children)E.isMesh&&(E.receiveShadow=!0,E.geometry.computeBoundingBox(),E.castShadow=E.geometry.boundingBox.max.y+E.position.y>-99)}function S(E,N){let v=/(light|lamp|sconce)/i.test(E.type),P=!N.animate||v;N.root.traverse(O=>{!O.isMesh||O.material.transparent||O.material.isShaderMaterial||(O.receiveShadow=!0,O.castShadow||=P)}),v&&E.entityId&&g.push({item:E,object:N})}function b(E,N,v){let P=E.night===!0,O=fb.has(E.condition),F=Number.isFinite(E.sunElevation)?Math.round(E.sunElevation*2)/2:P?-12:35,B=Jd(F,-8,19),Y=`${O}:${gb(F,-8,35)}`;if(Y!==x){let z=Zd[O?"overcast":"clear"],q=[n.color,n.groundColor,s.color,v.color,t.background];for(let[K,ft]of q.entries())ft.lerpColors(Zd.night[K],z[K],B);let X=B*(1-Jd(F,8,34));O||s.color.lerp(mb,X*.8),n.intensity=No(.75,O?1.33:1.12,B),s.intensity=No(.28,O?.86:2.14,B),r.intensity=No(.12,.23,B),s.shadow.intensity=No(.65,O?.39:.84,B),x=Y,m=void 0}if(m!==N){let z=g.flatMap(({item:q,object:X})=>{let K=N[q.id];if(K?.state!=="on")return[];let ft=Number.isFinite(K.attributes?.brightness)?xe.clamp(K.attributes.brightness/255,0,1):1;return ft>0?[{object:X,power:ft,color:K.attributes?.rgb_color}]:[]}).sort((q,X)=>X.power-q.power);for(let[q,X]of d.entries()){let K=z[q];if(!K){X.intensity=0;continue}let{object:ft,power:nt,color:st}=K;Array.isArray(st)&&st.length===3&&st.every(Number.isFinite)?(M.setRGB(...st.map(Et=>xe.clamp(Et/255,0,1)),Be),X.color.copy(M)):X.color.set("#ffd5a2"),X.position.copy(ft.root.position),X.position.y+=Math.max(18,ft.anchorY-9),X.intensity=nt*No(2350,1250,B)}m=N}p&&(i.shadowMap.needsUpdate=!0,p=!1)}return{markStructure:A,register:S,update:b,dispose:()=>s.shadow.dispose()}}var xi=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),yr=Object.freeze({default:xi("Default",0,0),top:xi("Top down",0,0),high:xi("High angle",0,15),dollhouse:xi("Dollhouse",2,30),corner:xi("Corner",45,40),north:xi("From north",180,42),east:xi("From east",90,42),south:xi("From south",0,42),west:xi("From west",270,42),free:xi("Free view",0,25)});function Kd(i,t=!1){let e=Object.entries(yr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Di(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(yr,t.preset)?t.preset:"top",n=yr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?xe.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?xe.clamp(t.zoom,.6,2.5):n.zoom}}function jd(i){let t=Di(i);return{...t,preset:"free",tilt:t.tilt||yr.free.tilt}}function Qu(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Di(i)}function th(i){return Di({...Qu(i),preset:"default"})}function Qd(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>Qu(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return Qu(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function eh(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let a=Di(s),c=xe.degToRad(a.azimuth),l=xe.degToRad(a.tilt),u=new k((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),f=new k(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(f,1900),i.lookAt(u),i.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Ne,g=new k;for(let S of[t.minX-37,t.maxX+37]){for(let b of[t.minZ-53,t.maxZ+36])for(let E of[-111,h])d.expandByPoint(g.set(S,E,b).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(g.set(S,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let S=(d.max.y-d.min.y)*.025;d.min.y-=S,d.max.y+=S}let x=e/n,m=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*x),p=m/x,M=(d.min.x+d.max.x)/2,A=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:S,y:b}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),E=Number.isFinite(r.weight)?xe.clamp(r.weight,0,1):1;M=xe.lerp(M,S,E),A=xe.lerp(A,b,E)}return i.left=M-m,i.right=M+m,i.bottom=A-p,i.top=A+p,i.zoom=Number.isFinite(o)?xe.clamp(o,.6,4.5):a.zoom,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Dining table",icon:"\u25B0",w:165,h:108,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=p=>typeof p=="string"&&p.startsWith("ui"),o=p=>String(p??"").toLowerCase(),a=p=>o(p).split(".")[0],c=p=>typeof p=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(p),l=p=>p.type==="window"?"wall":p.mount||"floor";function u(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function f(p,M,A){return!(!p||!M||!A||p.type===A.type||s.has(p.type)||r(p.type)||s.has(A.type)||r(A.type)||l(M)!==l(A)||p.entityId&&!h(p.entityId,A))}function h(p,M){return!c(p)||typeof M?.type!="string"||r(M.type)||M.type==="stairs"||M.type==="window"?!1:M.type==="cameraThumbnail"?a(p)==="camera":M.type==="garageDoor"?a(p)==="cover":a(p)!=="camera"}function d(p,M){let A=a(p.entity_id),S=o(p.name+" "+p.entity_id),b={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},E=v=>{if(v.type==="controlZone")return!0;if(A==="camera")return v.type==="cameraThumbnail";if(A==="cover")return/garage/.test(S)&&v.type==="garageDoor";if(A==="climate")return v.type==="thermostat";if(A==="binary_sensor"&&/presence|occupancy/.test(S))return v.type==="presenceSwitch";if(b[A]?.includes(v.group)||/humidifier/.test(S)&&v.type==="humidifier"||/purifier/.test(S)&&v.type==="airPurifier")return!0;if(A==="switch"){if(/fan/.test(S))return v.group==="fans"||v.type==="windowFan";if(/light|lamp/.test(S))return v.group==="lighting"}return!1},N=M.filter(v=>h(p.entity_id,v));return{recommended:N.filter(E),available:N}}function g(p){return p&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(p.type)&&!r(p.type)}function x(p,M,A,S){if(!["w","h"].includes(M)||!Number.isFinite(A))return null;let b=p.type==="cameraThumbnail"?40:12,E=p.type==="cameraThumbnail"||c(p.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!S)return{[M]:Math.min(E[M],Math.max(b,A))};let N=Math.min(E.w/p.w,E.h/p.h),v=Math.min(N,Math.max(b/p.w,b/p.h)),P=Math.min(N,Math.max(v,A/p[M]));return{w:Math.round(p.w*P*10)/10,h:Math.round(p.h*P*10)/10}}function m(p,M,A){let S=p.ownerDocument,b=(Et,Ct,Jt={})=>{let $t=S.createElement(Et);Ct&&($t.textContent=Ct);for(let[Xt,ct]of Object.entries(Jt))$t.setAttribute(Xt,ct);return $t},E=b("dialog","",{class:"model-library","aria-label":"Objects and models"}),N=b("header"),v=b("h2","Objects & models"),P=b("button","Close",{type:"button"});N.append(v,P);let O=b("div","",{class:"model-library-filters"}),F=b("select","",{"aria-label":"Object library section"});for(let[Et,Ct]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])F.append(b("option",Ct,{value:Et}));let B=b("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});O.append(F,B);let Y=b("div","",{class:"model-library-context"}),z=b("p","",{role:"status",class:"model-library-status"}),q=b("div","",{class:"model-library-list"});E.append(N,O,Y,z,q);let X=b("style");X.textContent=`
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
    `,p.append(X,E);let K,ft=!1,nt=(Et,Ct)=>{let Jt=b("button",Et,{type:"button"});return Jt.addEventListener("click",Ct),Jt};function st(Et){K=Et,ft=!1,F.value="catalog",B.value="",at(),B.focus()}function at(){let{templates:Et,paletteGroups:Ct}=u(),Jt=new Map(Et.map(_t=>[_t.type,_t])),$t=new Map(Ct),{items:Xt,entities:ct}=M(),dt=o(B.value).trim(),wt=(..._t)=>dt.split(/\s+/).every(gt=>o(_t.join(" ")).includes(gt)),Dt=[];if(Y.replaceChildren(),K&&(Y.append(b("strong",K.item?.name||K.entity?.name||K.entity?.entity_id)),K.entity&&Y.append(nt(ft?"Suggested models":"All compatible models",()=>{ft=!ft,at()})),Y.append(nt("Cancel mapping",()=>{F.value=K.entity?"devices":"placed",K=void 0,B.value="",at()}))),F.value==="placed")for(let _t of Xt){let gt=Jt.get(_t.type);if(!wt(_t.name,gt?.label,_t.type,_t.entityId))continue;let Nt=[_t.w,_t.h,_t.modelHeight].filter(Number.isFinite).join(" \xD7 "),ht=[gt?.label||_t.type,Nt&&Nt+" plan px",_t.entityId].filter(Boolean).join(" \xB7 "),yt=[nt("Edit",()=>A({kind:"edit",itemId:_t.id}))];Et.some(vt=>f(_t,gt,vt))&&yt.push(nt("Change model",()=>st({item:_t}))),Dt.push([_t.name||gt?.label||_t.type,ht,yt])}else if(F.value==="devices"){let _t=new Map;for(let gt of Xt)gt.entityId&&!_t.has(gt.entityId)&&_t.set(gt.entityId,gt);for(let gt of ct){if(!c(gt.entity_id)||!wt(gt.name,gt.entity_id,gt.area))continue;let Nt=_t.get(gt.entity_id),ht=[gt.entity_id,gt.area,Nt?"On plan \xB7 "+Nt.name:"Available to map"].filter(Boolean).join(" \xB7 ");Dt.push([gt.name||gt.entity_id,ht,[Nt?nt("Edit mapped object",()=>A({kind:"edit",itemId:Nt.id})):nt("Choose model",()=>st({entity:gt}))]])}}else{let _t=Et;if(K?.item&&(_t=Et.filter(gt=>f(K.item,Jt.get(K.item.type),gt))),K?.entity){let gt=d(K.entity,Et);_t=ft?gt.available:gt.recommended}for(let gt of _t){let Nt=$t.get(gt.group)||gt.group;if(!wt(gt.label,gt.type,gt.tags,Nt))continue;let ht=K?.item?{kind:"replace",itemId:K.item.id,modelId:gt.type}:{kind:"place",modelId:gt.type,...K?.entity?{entityId:K.entity.entity_id}:{}};Dt.push([gt.label,Nt+" \xB7 "+gt.w+" \xD7 "+gt.h+" plan px",[nt(K?"Use model":"Place",()=>A(ht))]])}}q.replaceChildren();for(let[_t,gt,Nt]of Dt.slice(0,48)){let ht=b("div","",{class:"model-library-row"}),yt=b("div");yt.append(b("strong",_t),b("small",gt));let vt=b("div","",{class:"model-library-actions"});vt.append(...Nt),ht.append(yt,vt),q.append(ht)}z.textContent=Dt.length>48?"Showing 48 of "+Dt.length+". Search to narrow the list.":Dt.length?Dt.length+(Dt.length===1?" result":" results"):F.value==="devices"&&!ct.length?"Connect to Home Assistant to list devices.":"No matches."}return F.addEventListener("change",()=>{K=void 0,B.value="",at()}),B.addEventListener("input",at),P.addEventListener("click",()=>E.close()),{open(Et="placed"){K=void 0,ft=!1,F.value=Et,B.value="",at(),E.open||E.showModal()},get isOpen(){return E.open},close(){E.open&&E.close()}}}i.RoomcraftModels=Object.freeze({catalog:u,canMap:h,canReplace:f,suggestions:d,supportsHeight:g,resizeFootprint:x,mount:m,handoffKey:n})})(typeof window>"u"?globalThis:window);function tp(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Ne().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var xb=24,yb=.32,_b=125,vb=24,tl=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function Uo(i,t=.12){return new cn({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function bb(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function nh(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new fe;s.name="tracked-people",i.add(s);let r,o=new Map,a=tl.map(()=>[]),c=!1,l=!1,u=0,f=!1;function h(){return{sphere:new Rn(1,12,8),disc:new fs(1,24).rotateX(-Math.PI/2),groundRing:new so(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new Ri(1,.14,6,16),palette:tl.map(({sweater:M,trim:A,skin:S,hair:b})=>Object.fromEntries(Object.entries({sweater:M,trim:A,skin:S,hair:b}).map(([E,N])=>[E,Uo(N)]))),ink:Uo("#423c50",.09),cheek:Uo("#d78383"),shoes:Uo("#514656"),white:Uo("#fff1dc"),shadow:new tn({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new tn({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function d(M){r??=h();let{role:A,scale:S}=tl[M],{sweater:b,trim:E,skin:N,hair:v}=r.palette[M],P=A==="baby",O=new fe;O.name=`radar-avatar-${A}`;let F=new fe,B=new fe,Y=[],z=[],q=[];s.add(O),O.add(F),F.scale.set(...S);let X=(st,at,Et,Ct,Jt,$t,Xt,ct)=>{let dt=new ue(r.sphere,at);return dt.position.set(Et,Ct,Jt),dt.scale.set($t,Xt,ct),st.add(dt),dt},K=new ue(r.disc,r.shadow);K.position.y=.13,K.scale.set(19,1,19),O.add(K);let ft=new ue(r.groundRing,r.groundMark);ft.position.y=.26,O.add(ft),X(F,b,0,15,0,P?8.2:7.1,8.3,5.4),P?(X(F,E,0,17.5,4.8,4.9,4.1,1.15),X(F,r.white,0,17.4,5.9,1.5,1.5,.35)):(X(F,E,0,20.7,2.4,5.8,2.2,4),X(F,E,A==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let st of[-1,1]){let at=new fe;at.position.set(st*3.4,10.3,.1),F.add(at),X(at,P?b:r.ink,0,-3.2,0,2.65,4.6,2.6),X(at,P?E:r.shoes,0,-8.15,1.25,3.1,2.1,4),X(at,r.white,0,-8.8,3.25,2.75,1.1,2),q.push(at);let Et=new fe;Et.position.set(st*6.25,19.1,0),F.add(Et),X(Et,b,st*.9,-3.7,.15,2.75,5.3,2.7),X(Et,N,st*1.3,-7.8,.5,2.3,2.6,2.2),z.push(Et)}B.position.set(0,P?26:27.2,0),P&&B.scale.set(1.16,1.17,1.12),F.add(B),X(B,v,0,1.3,-1.65,9.2,9.65,8.6),X(B,N,0,0,1.9,8.65,8.45,7.5);let nt=X(B,v,-2.1,7.3,4.25,6.4,3.4,4.35);if(nt.rotation.z=A==="papa"?-.27:.22,A==="mama"&&(X(B,v,-6.7,-1.9,-3.8,3.6,8.1,5.2),X(B,v,6.2,-1.7,-3.9,3.3,7.6,5.4),X(B,v,2.8,10.4,-2.5,5.1,5.1,5.1),X(B,E,4.4,8.7,2.2,2.8,1.1,1.1)),P){X(B,v,-7.3,6.7,-2,3.35,3.7,3.5),X(B,v,7.3,6.7,-2,3.35,3.7,3.5);let st=X(B,E,.9,10,4.2,2.5,1.45,1.25),at=X(B,E,4.1,10,4.2,2.5,1.45,1.25);st.rotation.z=-.4,at.rotation.z=.4,X(B,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let st of[-1,1])if(X(B,N,st*8.2,-.15,1.1,1.85,2.4,1.75),Y.push(X(B,r.ink,st*3,1.2,8.95,.85,.87,.52)),X(B,r.cheek,st*5.05,-1.25,7.95,1.18,.62,.52),A==="papa"){let at=new ue(r.glasses,r.ink);at.position.set(st*3.1,1.25,9.15),at.scale.set(2.5,2.15,1.55),B.add(at)}return A==="papa"&&X(B,r.ink,0,1.6,9.35,1.1,.28,.35),X(B,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:O,body:F,head:B,arms:z,legs:q,eyes:Y,styleIndex:M,baby:P}}function g(M,A){return M.duration>0?xe.clamp((A-M.start)/M.duration,0,1):1}function x(M,A=c){u=Number.isFinite(M)?M:u,l=A||c,f=!1;for(let S of o.values()){let{character:b}=S;l&&(S.duration=0);let E=g(S,u),N=xe.lerp(S.fromX,S.x,E),v=xe.lerp(S.fromZ,S.z,E),P=t(N,v);!Number.isFinite(P)&&E<1&&(S.duration=0,E=1,N=S.x,v=S.z,P=t(N,v));let O=n?Math.min(1,n(N,v)/vb):1;if(b.root.visible=Number.isFinite(P)&&O>0,!b.root.visible)continue;f=!0,b.root.position.set(N,P,v),b.root.rotation.y=S.heading,b.root.scale.setScalar(O);let F=S.walking&&E<1&&!l,B=Math.floor(Math.max(0,u-S.born)*16)/16+.7+b.styleIndex*.62,Y=Math.floor(E*12)/12*Math.PI*4,z=F?Math.sin(Y)*.56:0,q=F?Math.abs(Math.sin(Y))*1.9:(1+Math.sin(B*4.7))*.47;b.body.position.y=l?0:q*(b.baby?1.5:1),b.body.rotation.z=l?0:F?z*.15:Math.sin(B*2.8)*.045;for(let X=0;X<2;X++){let K=X===0?-1:1;b.arms[X].rotation.x=F?-z*K:l?0:Math.sin(B*3.1+X)*.09,b.legs[X].rotation.x=z*K}bb(b,B,l)}}function m(M,A,{reduceMotion:S=!1}={}){c=S;let b=Number.isFinite(A)?A:u,E=new Map;for(let v of Array.isArray(M)?M:[])if(!(typeof v?.id!="string"||!v.id||v.id.length>256||!Number.isFinite(v.x)||!Number.isFinite(v.y)||E.has(v.id)||!Number.isFinite(t(v.x,v.y)))&&(E.set(v.id,v),E.size===xb))break;for(let[v,P]of o)E.has(v)||(P.character.root.visible=!1,a[P.character.styleIndex].push(P.character),o.delete(v));let N=tl.map(()=>0);for(let{character:v}of o.values())N[v.styleIndex]++;for(let v of[...E.keys()].filter(P=>!o.has(P)).sort()){let P=N.indexOf(Math.min(...N));N[P]++;let O=a[P].pop()??d(P),{x:F,y:B}=E.get(v);o.set(v,{character:O,fromX:F,fromZ:B,x:F,z:B,heading:0,born:b,start:b,duration:0})}for(let[v,{x:P,y:O}]of E){let F=o.get(v);if(F.x!==P||F.z!==O){let B=S?1:g(F,b),Y=xe.lerp(F.fromX,F.x,B),z=xe.lerp(F.fromZ,F.z,B),q=Math.hypot(P-Y,O-z),X=q>1?Math.atan2(P-Y,O-z):F.heading,ft=!S&&q>0&&q<=_b&&e?.(Y,z,P,O)?yb:0;Object.assign(F,{fromX:Y,fromZ:z,x:P,z:O,heading:X,start:b,duration:ft,walking:q>2})}}x(b,S)}function p(){if(s.removeFromParent(),!!r){for(let M of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])M.dispose();for(let M of r.palette)for(let A of Object.values(M))A.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let M of a)M.length=0;o.clear(),r=void 0}}return{setTracks:m,render:x,dispose:p,setVisible(M){s.visible=M},get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return f}}}function ep(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var el=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),nl=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function Mb([i,t,e,n],s,r,o,a){let c=el(i,t,e,n,s,r),l=el(i,t,e,n,o,a),u=el(s,r,o,a,i,t),f=el(s,r,o,a,e,n);return Math.abs(u)<1e-7&&nl(s,o,i)&&nl(r,a,t)||Math.abs(f)<1e-7&&nl(s,o,e)&&nl(r,a,n)?!0:c>0!=l>0&&u>0!=f>0}function ih(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>ep(a,r,o)&&!c.some(l=>ep(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,f]of t){let h=u-c,d=f-l,g=h*h+d*d;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*h+(o-l)*d)/g)),m=r-c-x*h,p=o-l-x*d;a=Math.min(a,m*m+p*p)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>Mb(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var np=new Ne,il=new k,_r=class extends uo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Qt(t,3)),this.setAttribute("uv",new Qt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ki(e,6,1);return this.setAttribute("instanceStart",new Fn(n,3,0)),this.setAttribute("instanceEnd",new Fn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ki(e,6,1);return this.setAttribute("instanceColorStart",new Fn(n,3,0)),this.setAttribute("instanceColorEnd",new Fn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ro(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ne);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),np.setFromBufferAttribute(e),this.boundingBox.union(np))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)il.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(il)),il.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(il));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Pt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Tt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};xn.line={uniforms:wo.merge([Pt.common,Pt.fog,Pt.line]),vertexShader:`
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
		`};var is=class extends He{constructor(t){super({type:"LineMaterial",uniforms:wo.clone(xn.line.uniforms),vertexShader:xn.line.vertexShader,fragmentShader:xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var sh=new be,ip=new k,sp=new k,en=new be,nn=new be,yi=new be,rh=new k,oh=new me,sn=new fo,rp=new k,sl=new Ne,rl=new vn,_i=new be,vi,Ss;function op(i,t,e){return _i.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),_i.multiplyScalar(1/_i.w),_i.x=Ss/e.width,_i.y=Ss/e.height,_i.applyMatrix4(i.projectionMatrixInverse),_i.multiplyScalar(1/_i.w),Math.abs(Math.max(_i.x,_i.y))}function Sb(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){sn.start.fromBufferAttribute(s,a),sn.end.fromBufferAttribute(r,a),sn.applyMatrix4(e);let l=new k,u=new k;vi.distanceSqToSegment(sn.start,sn.end,u,l),u.distanceTo(l)<Ss*.5&&t.push({point:u,pointOnLine:l,distance:vi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Eb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;vi.at(1,yi),yi.w=1,yi.applyMatrix4(t.matrixWorldInverse),yi.applyMatrix4(n),yi.multiplyScalar(1/yi.w),yi.x*=r.x/2,yi.y*=r.y/2,yi.z=0,rh.copy(yi),oh.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(en.fromBufferAttribute(c,h),nn.fromBufferAttribute(l,h),en.w=1,nn.w=1,en.applyMatrix4(oh),nn.applyMatrix4(oh),en.z>f&&nn.z>f)continue;if(en.z>f){let A=en.z-nn.z,S=(en.z-f)/A;en.lerp(nn,S)}else if(nn.z>f){let A=nn.z-en.z,S=(nn.z-f)/A;nn.lerp(en,S)}en.applyMatrix4(n),nn.applyMatrix4(n),en.multiplyScalar(1/en.w),nn.multiplyScalar(1/nn.w),en.x*=r.x/2,en.y*=r.y/2,nn.x*=r.x/2,nn.y*=r.y/2,sn.start.copy(en),sn.start.z=0,sn.end.copy(nn),sn.end.z=0;let x=sn.closestPointToPointParameter(rh,!0);sn.at(x,rp);let m=xe.lerp(en.z,nn.z,x),p=m>=-1&&m<=1,M=rh.distanceTo(rp)<Ss*.5;if(p&&M){sn.start.fromBufferAttribute(c,h),sn.end.fromBufferAttribute(l,h),sn.start.applyMatrix4(o),sn.end.applyMatrix4(o);let A=new k,S=new k;vi.distanceSqToSegment(sn.start,sn.end,S,A),e.push({point:S,pointOnLine:A,distance:vi.origin.distanceTo(S),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var ol=class extends ue{constructor(t=new _r,e=new is({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)ip.fromBufferAttribute(e,o),sp.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+ip.distanceTo(sp);let r=new Ki(s,2,1);return t.setAttribute("instanceDistanceStart",new Fn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Fn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;vi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Ss=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),rl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Ss*.5;else{let f=Math.max(s.near,rl.distanceToPoint(vi.origin));l=op(s,f,c.resolution)}if(rl.radius+=l,vi.intersectsSphere(rl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),sl.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Ss*.5;else{let f=Math.max(s.near,sl.distanceToPoint(vi.origin));u=op(s,f,c.resolution)}sl.expandByScalar(u),vi.intersectsBox(sl)!==!1&&(n?Sb(this,e):Eb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(sh),this.material.uniforms.resolution.value.set(sh.z,sh.w))}};var vr=class extends _r{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var al=class extends ol{constructor(t=new vr,e=new is({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var ap="#ffce84",wb="#a8f5ff",ah="#10242e";function cl(i,t,e){return new is({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function ll(i,t,e,n){let s=new vr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new al(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function cp(i,t,e,n){let s=new pe().setFromPoints(t.map(({x:o,y:a})=>new k(o,.5,a)));s.setIndex(Nn.triangulateShape(t.map(({x:o,y:a})=>new Tt(o,a)),[]).flat());let r=new ue(s,e);r.renderOrder=n,i.add(r)}function lp(){let i=new Gi,t={side:bn,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new tn({...t,color:ap,opacity:.13}),n=new tn({...t,color:ah,opacity:.95}),s=cl(ah,4.6,{opacity:.8}),r=cl(ap,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=cl(ah,3.5,{...o,opacity:.65}),c=cl(wb,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let g=(m,p=0)=>({x:h.x+d.x*m-d.y*p,y:h.y+d.y*m+d.x*p}),x=Array.from({length:28},(m,p)=>{let M=p/28*Math.PI*2;return g(10*Math.cos(M),10*Math.sin(M))});ll(i,[g(10),g(56)],[s,r],5),ll(i,[g(45,-7),g(56),g(45,7)],[s,r],5),cp(i,x,n,7),ll(i,[...x,x[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let d=new Map;for(let g of h){let{points:x,kind:m,id:p,origin:M,forward:A}=g;if(x.length<3)continue;let S=m==="nominal";S&&cp(i,x,e,0),ll(i,[...x,x[0]],S?[s,r]:[a,c],S?3:1),M&&A&&d.set(p,g)}for(let g of d.values())l(g)}function f(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:f}}var Tb=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Ab=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),up={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},ul=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"]}).map(([i,t])=>[i,t.map(e=>new Yt(e))])),Rb=new Yt("#ffd59e"),hp=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Cb,smoothstep:fp}=xe;function Ib({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new pe;return o.setAttribute("position",new Qt(n,3)),o.setAttribute("uv",new Qt(s,2)),o.setIndex(r),o}var Pb=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`,Lb=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform float rain;
  uniform float roughness;
  uniform float cloudCover;
  uniform float bodyVisibility;
  uniform float moon;
  uniform vec2 moonLight;
  uniform vec2 bodyPosition;
  uniform vec3 shoreTint;
  uniform vec3 shallowTint;
  uniform vec3 deepTint;
  uniform vec3 foamTint;
  uniform vec3 cloudTint;
  uniform vec3 bodyTint;

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
      vec2 rippleOffset = vec2(rippleA * 4.5, rippleB * 3.8) * roughness;
      vec2 mirror = coastPoint + rippleOffset + vec2(toCamera.x, -toCamera.z) * 18.0;
      float drift = sin(waterTime * 0.064) * 26.0;
      float nearCloud = cloud(mirror, vec2(-186.0 + drift, 49.0), 1.32);
      float farCloud = cloud(mirror, vec2(182.0 + drift * 0.74, 69.0), 1.18);
      float bank = softEllipse(mirror, vec2(drift, 72.0), vec2(372.0, 62.0), 0.86);
      float clouds = max(max(nearCloud, farCloud * 0.9) * cloudCover, bank * max(0.0, cloudCover - 0.5));
      color = mix(color, cloudTint, clouds * (0.66 + slant * 0.12));

      if (bodyVisibility > 0.0) {
        vec2 bodyDistance = mirror - bodyPosition;
        if (abs(bodyDistance.x) < 126.0 && abs(bodyDistance.y) < 73.0) {
          vec2 disc = bodyDistance / vec2(33.0, 14.0 + slant * 5.0);
          float discRadius = dot(disc, disc);
          float hemisphere = sqrt(max(0.0, 1.0 - discRadius));
          float terminator = disc.x * moonLight.x + hemisphere * moonLight.y;
          float dayCore = 1.0 - smoothstep(0.25, 1.12, discRadius);
          float moonCore = (1.0 - smoothstep(0.57, 1.08, discRadius)) * smoothstep(-0.13, 0.18, terminator);
          float core = mix(dayCore * (0.79 + 0.15 * rippleA), moonCore, moon);
          float glow = softEllipse(bodyDistance, vec2(0.0), vec2(78.0, 36.0), 0.96);

          // Shallow, staggered crests scatter the reflection along a tapered path toward shore.
          float towardShore = -bodyDistance.y;
          float pathWidth = mix(24.0, 55.0 + slant * 12.0, smoothstep(0.0, 38.0, towardShore));
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
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;function dp({y:i,farZ:t,shoreline:e,focusX:n}){let s={waterTime:{value:0},rain:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},moon:{value:0},moonLight:{value:new Tt(0,1)},bodyPosition:{value:new Tt}};for(let[c,l]of hp.entries())s[l]={value:ul.clear[c].clone()};let r=new He({uniforms:s,vertexShader:Pb,fragmentShader:Lb,toneMapped:!1}),o=new ue(Ib({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:f,condition:h,moonPhase:d,sunElevation:g,sunRising:x}=l,m=Tb.has(h),p=Number.isFinite(g)?g:u?-19:42,M=fp(p,-8,17),A=ul[m?"overcast":"clear"];for(let[O,F]of hp.entries())s[F].value.lerpColors(ul.night[O],A[O],M);let S=Object.hasOwn(up,d)?up[d]:void 0,b=f?!u:h==="sunny",E=u&&S!==void 0,N=Cb(p/75,0,1),v=M*(1-fp(p,8,34));b&&s.bodyTint.value.lerp(Rb,v*.7),E&&s.bodyTint.value.copy(ul.night[5]);let P=Ab.has(h);if(s.waterTime.value=Number.isFinite(c)&&!l.reduceMotion?c:0,s.rain.value=P?1:0,s.roughness.value=P||h==="windy"||h==="windy-variant"?1.65:1,s.cloudCover.value=m?.94:h==="partlycloudy"?.64:u?.32:.24,s.bodyVisibility.value=m?0:E?.93:b?.97:0,s.moon.value=E?1:0,E)s.moonLight.value.set(Math.sin(S),Math.cos(S)),s.bodyPosition.value.set(46,42);else{let O=x===!0?-107:x===!1?118:-31;s.bodyPosition.value.set(O*(1-N),38+N*20)}}return{mesh:o,update:a}}var fl=26,Db=92,hl=4,Nb=18,Ub=188;function mp(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-Nb,o=r-2*fl-Db;return{nearZ:r,farZ:o,sceneryMinZ:o-Ub}}function gp(i,{nearZ:t,farZ:e},n,s,r){let o=e+fl,a=t-fl,c=(o+a)/2,l=r-s/2,u=r+s/2,f=(h,d,g,x)=>i.box(s,g,d-h,x,r,n+g/2,(h+d)/2);f(o,a,1.2,"#73767c"),f(o,o+3.4,1.4,"#656b71"),f(a-3.4,a,1.4,"#656b71");for(let[h,d,g,x]of[[e,o,o-hl,e],[a,t,a,a+hl]]){f(h,d,5,"#c0b6a7"),f(g,g+hl,6.2,"#d0c3b0");let m=fl-hl;for(let p=l+36;p<u;p+=72)i.box(1.15,.18,m,"#a69c91",p,n+5.04,x+m/2)}for(let h=l+36;h+17<u;h+=72)i.box(34,.2,2.8,"#e9ce91",h,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2]}}function ch(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new pe;o.setAttribute("position",new Qt(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function Fb(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new Jr(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,f=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+f)}}function Ob(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,f=s+.1;i.ball(a,c,13,"#d7bd94",l,f,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,f+.5,u+4);for(let[h,d,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])Fb(i,l+a*h,u+d,f+c*.75,g,h*7)}}function Bb(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function zb(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let f=(m,p,M)=>[Math.cos(m)*p,M,Math.sin(m)*p],h=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],f(h,16*.54,16.6+2.1),f(d,16*.54,16.6+2.1),f(h,16,16.6-.55),f(d,16,16.6-.55),f(h,16,16.6-2),f(d,16,16.6-2)],x=new pe;x.setAttribute("position",new Qt(g.flat(),3)),x.setAttribute("uv",new Qt(g.flatMap(([m,,p])=>[m/32+.5,p/32+.5]),2)),x.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),x.computeVertexNormals(),i.add(x,u%2?r:s,t,n,e)}}function pp(i,t,e,n,s,r){let o=(f,h)=>[t+f*Math.cos(r)+h*Math.sin(r),e-f*Math.sin(r)+h*Math.cos(r)],a=(f,h,d,g,x,m,p)=>{let[M,A]=o(x,p);i.box(f,h,d,g,M,n+m,A,r)};for(let f of[-1,1])a(1.1,1.2,18,"#988679",f*4.5,2.15,0),a(1,2.1,1.2,"#988679",f*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Ue(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function kb(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,f=e+o;zb(i,u,f,s,a,c,l),pp(i,u-13,f-15,s,c,l-.17),pp(i,u+14,f-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,f+7,l*2)}}function xp(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(m,p)=>{let M=l+r*p/c,A=M-a,S=t-108+14*Math.cos((A+110)*.006)+7*Math.sin((A-90)*.013);return{x:M,z:S}}),f=u.map(({x:m})=>[m,e+.28,t+.4]),h=u.map(({x:m,z:p})=>[m,e+.71,p+22]),d=u.map(({x:m,z:p})=>[m,e+.44,p+6]),g=u.map(({x:m,z:p})=>[m,e+.17,p-31]);ch(i,f,h,"#e3cba0"),ch(i,h,d,"#dbbd92"),ch(i,d,g,"#c8a47e");let x=Math.max(940,s-n);Ob(i,a,t,x,e);for(let m of[-1,1])Bb(i,a+m*x*.245,t,e);return kb(i,a,t,x,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var yp=new Map([["clear",{stride:4,speed:86}],["slow",{stride:2,speed:53}],["heavy",{stride:1,speed:24}]]),_p=["#d18570","#72a4a8","#e5b86f","#f2dfbe","#9b91b4","#79977d"].map(i=>new Yt(i));function vp({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,Math.floor(n/242)),o=n/r,a=e.map((d,g)=>Array.from({length:r},(x,m)=>({z:d,lane:g,index:m,x:s,offset:o*(m+(g?.7:.25))+(m*11+g*7)%13-6}))),c=[0,0],l,u,f=[];function h(d,g,x,m=!1){let p=yp.get(g?.severity),M=Number.isFinite(l)&&Number.isFinite(d)?xe.clamp(d-l,0,.25):0;if(l=d,p!==u&&(f=p?a.flatMap((b,E)=>b.filter(({index:N})=>N%p.stride===E%p.stride)):[],u=p),!p)return f;let A=g.speedFactor,S=Number.isFinite(A)&&A>0?yp.get("clear").speed*xe.clamp(A,.22,1):p.speed;if(m){let b=!x&&Number.isFinite(d)?Math.max(0,d)*S:0;c[0]=b%n,c[1]=b*.94%n}else x||(c[0]=(c[0]+M*S)%n,c[1]=(c[1]+M*S*.94)%n);for(let b of f){let E=b.offset+(b.lane?-c[1]:c[0]);b.x=s+(E+n)%n}return f}return{capacity:r*e.length,update:h}}function Fo(i,t,e,n,s,r,o){return new mr(i,t,e,1,n).translate(s,r,o)}function lh(i){let t=i.map(n=>n.index?n.toNonIndexed():n),e=pi(t);for(let n of new Set([...i,...t]))n.dispose();return e}function Hb(){let i=new mn;return i.moveTo(-17,10.9),i.lineTo(-10.6,18.5),i.lineTo(7.6,18.5),i.lineTo(16,10.9),i.closePath(),new Zn(i,{depth:17.8,bevelEnabled:!0,bevelSegments:1,bevelSize:1.3,bevelThickness:.7}).translate(0,0,-8.9)}function bp(i,t,e,n){return lh([-16,16].flatMap(s=>[-n,n].map(r=>new hi(i,i,t,10).rotateX(Math.PI/2).translate(s,e,r))))}function Mp(i){let t=new fe,e=vp(i),n,s=[];function r(x,m){let p=new Wr(x,m,e.capacity);return p.count=0,p.frustumCulled=!1,p.instanceMatrix.setUsage(ur),s.push(p),t.add(p),p}let o=(x,m=.76)=>new cn({color:x,roughness:m});r(new fs(1,18).rotateX(-Math.PI/2).scale(29,1,13.8).translate(0,.02,0),new tn({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1}));let a=r(lh([Fo(52,8.8,22,2.9,0,7.2,0),Fo(21,2,17.5,.85,-1.1,18.9,0),Fo(4,2.4,3.5,.9,9.2,11.5,-11.3),Fo(4,2.4,3.5,.9,9.2,11.5,11.3)]),o("#ffffff",.49));r(Hb(),o("#415665",.37)),r(bp(3.9,2.5,3.95,10.2),o("#403b43")),r(bp(1.85,.48,3.95,11.57),o("#b7a99b"));let c=(x,m)=>new cn({color:x,emissive:m,roughness:.58}),l=c("#fbecd2","#ffe4ab"),u=c("#b95451","#ec6d54");for(let[x,m]of[[24.9,l],[-24.9,u]])r(lh([-7.5,7.5].map(p=>Fo(2.5,2.7,4.7,1.1,x,8.4,p))),m);let f=new ke,h,d;t.visible=!1;function g(x,m,{reduceMotion:p=!1,night:M=!1,transientTelemetry:A=!1}={}){A&&(n??=vp(i));let b=(A?n:e).update(x,m,p,A);if(t.visible=b.length>0,!!t.visible){M!==d&&(l.emissiveIntensity=M?1.65:.26,u.emissiveIntensity=M?.91:.28,d=M);for(let[E,N]of b.entries()){f.position.set(N.x,i.surfaceY,N.z),f.rotation.y=N.lane?Math.PI:0,f.updateMatrix();for(let v of s)v.setMatrixAt(E,f.matrix);b!==h&&a.setColorAt(E,_p[(N.index+N.lane*3)%_p.length])}for(let E of s)E.count=b.length,E.instanceMatrix.needsUpdate=!0;b!==h&&(a.instanceColor.needsUpdate=!0),h=b}}return{root:t,update:g,dispose:()=>s.forEach(x=>x.dispose())}}var ml=Math.PI/180,fh=14,Dp=56,Vb=21,ni=-111,ii=-108,Np=14,Gb=28,Oo=28,Sp={minX:0,maxX:1536,minZ:0,maxZ:1024},uh={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},hh={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},Wb=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),Xb=new Set(["snowy","snowy-rainy","hail"]),Ep={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function xl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function gl(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function Up(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function Fp(i,t,e,n){let s=i.some(o=>gl(o,e-t.dz*23,n+t.dx*23));return i.some(o=>gl(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function qb(i,t,e){if(!Object.hasOwn(Ep,e.type))return null;let n=Up(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):Fp(i,s,r,o),l=(fh/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Ep[e.type],Dp-8)}}function wp(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Tp(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function Yb(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function Ap(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function dl(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function Op(i){return Object.hasOwn(hh,i.finish)?hh[i.finish]:hh.graphite}function Bp(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function Rp(i,t,e){let[n,s]=Bp(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=xe.clamp(s/i.item.h+.5,0,1);return ii-ii*r}function pl(i,t,e){return gl(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?xe.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=fh/2})}function Zb(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(f=>pl(f,n,s)),o=t.some(f=>Do(f)&&pl(f,n,s)&&pl(f,i.x1,i.y1)&&pl(f,i.x2,i.y2)),a=r?0:ni,c=a;if(!o)for(let f of e){let h=Rp(f,i.x1,i.y1),d=Rp(f,i.x2,i.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=Op(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/Gb)))}}function dh(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(b=>b?.points?.length>=3&&b.points.every(E=>Number.isFinite(E?.x)&&Number.isFinite(E?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(b=>!Do(b)):e,s=i.walls.map(wp).filter(Boolean),r=s.filter(b=>b.kind!=="fence"),o=i.items.filter(b=>typeof b?.id=="string"&&typeof b.type=="string"&&[b.x,b.y,b.w,b.h].every(Number.isFinite)&&b.w>0&&b.h>0),a=Ap(),c=Ap(),l=(b,E)=>dl(a,b,E);for(let b of e)for(let E of b.points)l(E.x,E.y);for(let b of s)l(b.x1,b.y1),l(b.x2,b.y2);for(let b of n)for(let E of b.points)dl(c,E.x,E.y);for(let b of r)dl(c,b.x1,b.y1),dl(c,b.x2,b.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:Sp},f=new Map(r.map(b=>[b.id,b])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(b=>f.has(b))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([b,E])=>({x:b,y:E})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([b,E])=>({x:b,y:E})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(b=>h?!(b.id==="w3"&&Tp(b,[400,408,342,468]))&&!(b.id==="w7"&&Tp(b,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:b,x2:E,z1:N}=h.recess;if(E>b){let v=[[b,f.get("w12").y2,b,N],[b,N,E,N]];for(let[P,O]of v.entries()){if(d.some(X=>Yb(X,O)))continue;let[F,B,Y,z]=O,q=wp({id:`reference-recess-${P}`,x1:F,y1:B,x2:Y,y2:z});q&&d.push(q)}}}let g=new Map;for(let b of o.filter(E=>E.type==="window")){let E=Up(d,b.x,b.y,(b.rotation||0)*ml);if(!E||E.distance>27)continue;let{wall:N,t:v,centerX:P,centerZ:O}=E,F=Math.max(1,v-b.w/2+1),B=Math.min(N.length-1,v+b.w/2-1);if(B-F<14)continue;N.openings.push({start:F,end:B});let Y=Fp(n,N,P,O),z=N.angle+(Y<0?Math.PI:0),q=(F+B)/2;g.set(b.id,{x:N.x1+q*N.dx,z:N.y1+q*N.dz,angle:z,window:{...b,w:B-F+2,rotation:z/ml}})}let x=o.filter(b=>b.type==="garageDoor"),m=o.map(b=>{let E=b.type==="cameraThumbnail"&&x.some(q=>oM(b,q))?ni:Hp(b.type),N=b.type==="controlZone"&&(b.visualKind==="window"||b.entityId?.startsWith("cover.")),v=g.get(b.id)??qb(n,d,b);if(N){let q=52;for(let X of g.values()){let K=Math.hypot(X.x-b.x,X.z-b.y);K<q&&(v=X,q=K)}}let P=v?.x??b.x,O=v?.z??b.y,F=v?.angle??(Number.isFinite(b.rotation)?b.rotation*ml:0),B=b.type==="stairs"?1536:300,Y=Math.min(B,(Math.abs(Math.cos(F))*b.w+Math.abs(Math.sin(F))*b.h)/2),z=Math.min(B,(Math.abs(Math.sin(F))*b.w+Math.abs(Math.cos(F))*b.h)/2);return l(P-Y,O-z),l(P+Y,O+z),{item:b,x:P,z:O,baseY:E,angle:F,window:v?.window,mountY:v?.mountY,isBlind:N}});for(let b of d)b.openings.sort((E,N)=>E.start-N.start||E.end-N.end);let p=m.filter(({item:b})=>b.type==="stairs").map(b=>{let{item:E,x:N,z:v,angle:P}=b,O=Number.isInteger(E.steps)&&E.steps>=2&&E.steps<=40?E.steps:Np,F=Math.min(46,Math.max(12,E.w*.47)),B=-E.h/2-F;for(let Y of[-E.w/2,E.w/2])l(N+Y*Math.cos(P)-B*Math.sin(P),v+Y*Math.sin(P)+B*Math.cos(P));return{...b,steps:O,apronDepth:F}}),M=s.filter(b=>b.kind==="fence").map(b=>Zb(b,e,p)),A=Xd(e,h,t),S=Yd(d.map(b=>({...b,palette:Op(b)})),fh,Dp,Vb);return Number.isFinite(a.minX)||Object.assign(a,Sp),{rooms:e,walls:d,fences:M,stairs:p,placements:m,bounds:a,houseBounds:u,reference:h,floorStructure:A,wallStructure:S,editableStructure:t}}function Cp(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function ph([i,...t]){let e=Cp(new mn,i);return e.holes=t.map(n=>Cp(new ds,n)),e}function Jb(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=xl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,x=f+3+c()*27,m=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+m/2,x+c()*2-1,g+m,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new er(n);return l.colorSpace=Be,l.wrapS=l.wrapT=us,l}function zp(i){let t=new Map,e=new me,n=new Un,s=new k,r=new k(0,1,0),o=new k(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new sr({color:d})),a.get(d));function l(d,g,x,m,p,M=0){n.setFromAxisAngle(r,M),e.compose(s.set(x,m,p),n,o),d.applyMatrix4(e);let A=c(g);t.has(A)||t.set(A,[]),t.get(A).push(d)}function u(d,g,x,m,p,M,A,S=0){d>0&&g>0&&x>0&&l(new Ue(d,g,x),m,p,M,A,S)}function f(d,g,x,m,p,M,A){let S=new Rn(1,9,6);S.scale(d,g,x),l(S,m,p,M,A)}function h(){for(let[d,g]of t){let x=pi(g);if(!x){for(let m of g)i.add(new ue(m,d));continue}i.add(new ue(x,d));for(let m of g)m.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function $b(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(uh,r)?r:"oak";if(!s.has(a)){let c=uh[a],l=Jb(n,c,141+Object.keys(uh).indexOf(a)*977);s.set(a,new sr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Xi(ph(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new ue(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)Ip(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)Ip(t,r,ni-1,-22,"#a18e84",!0)}function Kb(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new ze(e,1))}return i}function Ip(i,t,e,n,s,r=!1){let o=new Zn(ph(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(Kb(o),s,0,e,0)}function jb(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new pe;return r.setAttribute("position",new Qt(e,3)),r.setAttribute("uv",new Qt(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function Pp(i,t){let e=new Xi(ph(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function Qb(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(Pp(o,!1),r,0,s,0);for(let o of e.bottom)i.add(Pp(o,!0),r,0,n,0);e.sides.length&&i.add(jb(e.sides,s-n),r,0,n,0)}}function tM(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:g}=n,x=l-c,m=new Ue(Math.hypot(u,x),5,7);m.rotateZ(Math.atan2(x,u)),i.add(m,d,(s+o)/2,(c+l)/2+Oo,(r+a)/2,-f);for(let p=0;p<=h;p++){let M=p/h,A=xe.lerp(s,o,M),S=xe.lerp(r,a,M),b=xe.lerp(c,l,M),E=[A,b,S].map(N=>Math.round(N*1e3)).join(",");e.has(E)||(e.add(E),i.box(5,Oo,5,g,A,b+Oo/2,S,-f))}}}function kp(i,t,e,n,s=0,r=0){let o=e/n,a=-ii/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let f=r-e/2+o*u,h=u===n-1?0:ii+(u+1)*a,d=h-3;i.box(t,d-ni,o,"#a98075",s,(ni+d)/2,f+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,f+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,f+l/2)}}function eM({item:i,steps:t,apronDepth:e}){let n=new fe,s=zp(n);kp(s,i.w,i.h,t);let r=ii-ni;return s.box(i.w,r,e,"#c8b79e",0,ni+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:ii/2}}function nM(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=Np,u=r-s,f=u/l,h=ii,d=-h/l;kp(i,a,u,l,c,(s+r)/2);for(let S=0;S<l;S++){let b=s+f*(S+.5),E=h+(S+1)*d;i.box(5,24,5,"#9f8183",e+4,E+12,b)}let g=f*(l-1),x=d*(l-1),m=new Ue(7,5,Math.hypot(g,x)+5);m.rotateX(-Math.atan2(x,g)),i.add(m,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[p,M]=o,A=Math.max(2,Math.ceil((M.x-p.x)/28));i.box(M.x-p.x,5,7,"#896e79",(M.x+p.x)/2,28,p.y);for(let S=0;S<=A;S++)i.box(5,28,5,"#9f8183",p.x+(M.x-p.x)*S/A,14,p.y)}function iM(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=xl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new er(t);return s.wrapS=s.wrapT=us,s.repeat.set(15,10),s.colorSpace=Be,s.anisotropy=4,s}function sM(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,c=xl(150741);if(!t.editableStructure){let u=Math.min(90,o*.18),f=t.reference?t.reference.left+u/2:e+u/2;i.box(u,4,115,"#c7baa4",f,-109,s-88);for(let h=0;h<5;h++)i.box(u*.85,1.8,13,"#dbceba",f,-106,s-137+h*20)}let l=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,f]of l){let h=e+u*o,d=s+f*a,g=21+c()*24;i.ball(g*.94,9,g*.67,"#6d886a",h,-104,d),i.ball(g*.82,g*.57,g*.69,"#819b76",h+3,-98,d);for(let x=0;x<8;x++){let m=x*2.39996,p=(.2+c()*.5)*g,M=g*(.28+c()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][x%4];i.ball(M*1.15,M*.8,M,A,h+Math.cos(m)*p,-93+12*c(),d+Math.sin(m)*p*.75)}for(let x=0;x<5;x++){let m=x%2?"#e6c4b1":"#fae6a4",p=h+(c()-.5)*g*1.14,M=d+g*(.62+c()*.43);i.ball(2.3,4.6,2.3,"#819765",p,-106,M),i.ball(3.9,1.8,3.3,m,p,-101.5,M),i.ball(1.2,.9,1.2,"#cb9c57",p,-100.3,M)}}}function rM(i,t,e){let n=xl(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(m,p)=>!(o&&m>=o.x1&&m<=o.x2&&p>=o.z1&&p<=o.z2)&&!t.rooms.some(M=>(!t.editableStructure||!Do(M))&&gl(M,m,p)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let m=0;m<210;m++){let p=s.minX-70+(s.maxX-s.minX+140)*n(),M=c+l*n(),A=n()*180,S=8+n()*8,b=112+n()*34;a(p,M)&&r.push({x:p,z:M,phase:A,length:S,speed:b})}let u=new Float32Array(r.length*6),f=new Float32Array(r.length*3),h=new pe,d=new pe;h.setAttribute("position",new ze(u,3).setUsage(ur)),d.setAttribute("position",new ze(f,3).setUsage(ur));let g=new Xr(h,new Qs({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),x=new qr(d,new tr({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return g.frustumCulled=x.frustumCulled=!1,i.add(g,x),(m,p)=>{if(g.visible=Wb.has(p),g.material.opacity=p==="pouring"||p==="lightning-rainy"?.5:.34,x.visible=Xb.has(p),g.visible||x.visible){for(let[M,A]of r.entries()){let S=65-(A.phase+m*A.speed)%170,b=65-(A.phase+m*20)%170,E=M*6;u.set([A.x,S,A.z,A.x-A.length*.18,S+A.length,A.z+2],E),f.set([A.x+Math.sin(m+M)*6,b,A.z],M*3)}h.attributes.position.needsUpdate=g.visible,d.attributes.position.needsUpdate=x.visible}}}function Hp(i){return i==="garageDoor"?ni:0}function oM(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*ml,r=Math.cos(s),o=Math.sin(s);return Dd(t,e*r+n*o,-e*o+n*r)}function aM(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35){let c=e.get(n.item.id);return c?c.root.position.y+(c.anchorY??0)*c.root.scale.y:0}}return 0}function cM(i,t,e,n){let s=new k,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:g})=>o([[l,d,u],[l,d+Oo,u],[f,g,h],[f,g+Oo,h]])),c=i.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let g=Math.cos(f),x=Math.sin(f),m=[];for(let p of[-h.w/2,h.w/2])for(let[M,A]of[[-h.h/2-d,ii],[h.h/2,0]])m.push([l+p*g-M*x,A,u+p*x+M*g]);return o(m)});return[...a,...c]}function lM({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([f,h])=>[i+f*r-h*o,t+f*o+h*r].map(d=>Math.round(d*1e5)/1e5))]}function uM(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=Bp(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return ii;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return ii+-ii/s.steps*l}return null}}function Vp(i,t){let e=dh(t),n=new Xc({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});n.resetState();let s=new Gi;s.background=new Yt("#d7dfcd");let r=new Ji(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:c,maxZ:l}=e.bounds,u=new cn({color:"#e8e8d2",map:iM(i.ownerDocument),roughness:.95}),f=new ue(new Ai(6200,4200),u);f.rotation.x=-Math.PI/2,f.position.set((o+a)/2,ni,(c+l)/2),s.add(f);let h=zp(s),d=mp(e),g=gp(h,d,ni,f.geometry.parameters.width,f.position.x),x,{water:m}=xp(h,d,ni,e.houseBounds,f.geometry.parameters.width,f.position.x),p=m.shoreline.reduce((Z,L)=>Math.abs(L.x-m.focusX)<Math.abs(Z.x-m.focusX)?L:Z),M={road:{x:g.centerX,y:g.surfaceY+8,z:(g.lanes[0]+g.lanes[1])/2},coast:{x:m.focusX+16,y:m.y,z:p.z-36}};sM(h,e),nM(h,e),$b(s,h,e,i.ownerDocument),Qb(h,e),tM(h,e.fences),h.finish();let A=s.children.filter(Z=>Z.isMesh),S=$d(n,s,e.bounds);S.markStructure();let b=dp(m);s.add(b.mesh);let E={},N=rM(s,e,d.sceneryMinZ),v=e.floorStructure.footprint,P=ih(v),O=e.stairs.length?ih(Lp.default.union(v,...e.stairs.map(lM))):P,F=uM(e,P),B=new Gi,Y=lp(),z=new ms("#fff5e1","#c9bfd7",1.8),q=new $i("#fff1d8",1.65);q.position.set(-4,9,6),B.add(z,q);let X={supportsRoute:O.supportsRoute,floorClearance:O.clearance},K=nh(B,F,X),ft,nt=K,st=new Map,at=new Map,Et=new Map,Ct=new Map(e.stairs.map(Z=>[Z.item.id,Z]));for(let Z of e.placements){let{item:L,x:y,z:_,baseY:T,angle:I,window:D,mountY:G,isBlind:H}=Z,et=L.type==="window"&&D?D:L,Q=Ct.get(L.id),pt=Q?eM(Q):Nd(et,{window:H?D:void 0,mountY:G})??Rd(et);if(pt){let C=tp(L,pt.root);pt.root.position.set(y,T+C,_),pt.root.rotation.y=-I,pt.floorRadius&&(pt.dockFits=P.clearance(y,_)>=pt.floorRadius),s.add(pt.root),at.set(L.id,pt),L.type==="garageDoor"&&Et.set(pt.root,L.id),S.register(L,pt)}st.set(L.id,{x:y,z:_,baseY:T,object:pt})}let Jt={...e.bounds,sceneryMinZ:d.sceneryMinZ};for(let Z of e.placements){let L=at.get(Z.item.id);if(L&&(L.root.position.y+=aM(e,Z,at),L.root.scale.y!==1)){let{max:y}=new Ne().setFromObject(L.root);Number.isFinite(y.y)&&(Jt.maxY=Math.max(Jt.maxY??92,y.y))}}let $t=[...at.values()].filter(Z=>Z.ambientMotion),Xt=new k,ct=!1,dt=0,wt=0,Dt=Di(),_t,gt=new ho,Nt=new Tn(new k(0,1,0),0),ht=new k,yt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function vt(Z,L){if(ct||Z<1||L<1||Z===dt&&L===wt)return;dt=Z,wt=L;let y=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(y,1.5,Math.sqrt(27e5/(Z*L)))),n.setSize(Z,L,!1),eh(r,Jt,Z,L,Dt,_t)}function Mt(Z,L){return Dt=Di(Z),_t=L,!ct&&dt>0&&wt>0&&eh(r,Jt,dt,wt,Dt,_t),At()}function At(){return{...Dt}}function Ht(Z){if(typeof Z=="string"){if(Object.hasOwn(M,Z))return{...M[Z]};let L=st.get(Z);if(!L)return null;let{x:y,z:_,baseY:T,object:I}=L;return I?{x:y,y:I.root.position.y+(I.anchorY??0)*I.root.scale.y,z:_}:{x:y,y:T+6,z:_}}return[Z?.x,Z?.y].every(Number.isFinite)?{x:Z.x,y:(F(Z.x,Z.y)??0)+22,z:Z.y}:null}function Bt(Z,L){return ct||!Number.isFinite(Z)||!Number.isFinite(L)||dt<=0||wt<=0?!1:(gt.setFromCamera(new Tt(Z/dt*2-1,1-L/wt*2),r),!0)}function qt(Z,L,y){return Bt(Z,L)?(Nt.constant=-Hp(y),gt.ray.intersectPlane(Nt,ht)?{x:ht.x,y:ht.z}:null):null}function te(Z,L){if(!Et.size||!Bt(Z,L))return null;let y=[];for(let T of Et.keys())T.traverseVisible(I=>{I.isMesh&&y.push(I)});let _=gt.intersectObjects(y,!1)[0];if(!_||gt.intersectObjects(A,!1).some(T=>T.distance<_.distance-.01))return null;for(let T=_.object;T;T=T.parent)if(Et.has(T))return Et.get(T);return null}function V(Z=!1){n.render(s,r);let L=!Z&&Y.scene.children.length>0;if(!(!nt?.hasVisibleTracks&&!L)){n.autoClear=!1;try{n.clearDepth(),L&&n.render(Y.scene,r),nt?.hasVisibleTracks&&n.render(B,r)}finally{n.autoClear=!0}}}function oe(Z=0,L={},y={},{animateTelemetry:_=!0,showTelemetryPosition:T=!0,draftPositions:I,transientTelemetry:D=!1}={}){if(ct||dt<1||wt<1)return;S.update(y,L,u);let G=y.reduceMotion===!0,H=!G&&Number.isFinite(Z)?Z:0,et=_?H:0;!x&&y.traffic&&(x=Mp(g),s.add(x.root)),x?.update(Z,y.traffic,{reduceMotion:G,night:y.night===!0,transientTelemetry:D}),N(et,y.condition),E=y,b.update(H,E);for(let[pt,C]of at){let j=L[pt]??yt,W=j.position,mt=W&&Number.isFinite(W.x)&&Number.isFinite(W.y)&&(!C.floorRadius||P.clearance(W.x,W.y)>=C.floorRadius);mt&&!D&&(C.telemetryPosition=W);let xt=D?mt?W:null:C.telemetryPosition,ut=I?.[pt]?.position??(T?xt:null),bt=st.get(pt);C.root.position.x=ut?.x??bt.x,C.root.position.z=ut?.y??bt.z,C.floorRadius&&(C.root.visible=!!(ut||!T||C.dockFits)),C.animate?.(j,C.ambientMotion?H:et,!!(mt&&T),D)}let Q=D?ft:K;nt!==Q&&(nt?.setVisible(!1),D||ft?.setTracks([],0),nt=Q,nt?.setVisible(!0)),nt?.render(Z,G),V(D)}function Gt(Z,L,y={}){ct||(y.transientTelemetry?(!ft&&Z?.length&&(ft=nh(B,F,X),ft.setVisible(!1)),ft?.setTracks(Z,L,y)):K.setTracks(Z,L,y))}function U(Z){if(!(ct||dt<1||wt<1)){b.update(Z,E);for(let L of $t)L.animate(yt,Z);K.render(Z),V()}}function w(Z){let L=st.get(Z);if(!L||dt<1||wt<1)return null;let{x:y,z:_,baseY:T,object:I}=L;if(I){if(!I.root.visible)return null;Xt.set(I.anchorOffset?.x||0,I.anchorY||0,I.anchorOffset?.z||0),I.root.localToWorld(Xt)}else Xt.set(y,T+6,_);return Xt.project(r),{x:(Xt.x+1)/2,y:(1-Xt.y)/2}}function tt(){if(ct)return;ct=!0,K.dispose(),ft?.dispose(),Y.dispose(),x?.dispose();let Z=new Set,L=new Set,y=new Set;s.traverse(_=>{_.geometry&&Z.add(_.geometry);for(let T of Array.isArray(_.material)?_.material:[_.material])if(T){L.add(T);for(let I of Object.values(T))I?.isTexture&&y.add(I)}});for(let _ of y)_.dispose();for(let _ of Z)_.dispose();for(let _ of L)_.dispose();S.dispose(),n.dispose()}return{resize:vt,render:oe,anchor:w,setView:Mt,getView:At,getDemoFocus:Ht,projectToPlan:qt,pickGarage:te,exteriorClearance:()=>cM(e,r,dt,wt),dispose:tt,hasAmbientMotion:!0,renderAmbient:U,setPeople:Gt,setDetectionZones:Y.setZones,canPlacePerson:(Z,L)=>Number.isFinite(F(Z,L))&&O.clearance(Z,L)>0,get hasPeopleMotion(){return nt?.hasMotion??!1}}}var Gp=.35,yl=7.5,hM=8;function Wp(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let m=t();return m?.preset==="free"?m:null},o=()=>{let[m,p]=s.values();return Math.hypot(m.x-p.x,m.y-p.y)};function a(m,p){let M=Di({...m,...p});(M.azimuth!==m.azimuth||M.tilt!==m.tilt||M.zoom!==m.zoom)&&e(M)}function c(m){i.hasPointerCapture(m)&&i.releasePointerCapture(m)}function l(){for(let m of[...s.keys()])s.delete(m),c(m)}function u(m){if(!r()||m.defaultPrevented||m.button!==0||!n(m))return;let p=m.pointerType==="touch";if(!(s.size>=2||s.size&&(!p||!s.values().next().value.touch))){try{i.setPointerCapture(m.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(m.pointerId,{x:m.clientX,y:m.clientY,touch:p}),m.preventDefault()}}function f(m){let p=s.get(m.pointerId);if(!p)return;let M=r();if(!M){l();return}let A=s.size===2,S=A?o():0,b={x:m.clientX,y:m.clientY,touch:p.touch};if(s.set(m.pointerId,b),m.preventDefault(),A){let E=o();Math.min(S,E)>=hM&&a(M,{zoom:M.zoom*E/S});return}a(M,{azimuth:M.azimuth-(b.x-p.x)*Gp,tilt:M.tilt+(b.y-p.y)*Gp})}function h(m){s.delete(m.pointerId)&&c(m.pointerId)}function d(m){let p=r();if(!p||!Number.isFinite(m.deltaY)||!m.deltaY)return;let M=m.deltaMode===1?16:m.deltaMode===2?i.clientHeight:1,A=Math.max(-350,Math.min(350,m.deltaY*M));m.preventDefault(),m.stopPropagation(),a(p,{zoom:p.zoom*Math.exp(-A*.002)})}function g(m){let p=r();if(!p||m.altKey||m.ctrlKey||m.metaKey||m.defaultPrevented)return;let M;switch(m.key){case"ArrowLeft":M={azimuth:p.azimuth-yl};break;case"ArrowRight":M={azimuth:p.azimuth+yl};break;case"ArrowUp":M={tilt:p.tilt-yl};break;case"ArrowDown":M={tilt:p.tilt+yl};break;case"+":case"=":M={zoom:p.zoom*1.1};break;case"-":M={zoom:p.zoom/1.1};break;default:return}m.preventDefault(),m.stopPropagation(),a(p,M)}let x=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",g]];for(let[m,p,M]of x)i.addEventListener(m,p,M);return{cancel:l,dispose(){l();for(let[m,p,M]of x)i.removeEventListener(m,p,M)}}}var Tw=1200*1e3;function Xp(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,g,x=1/0;for(let p=0;p<=h&&(f||!d);p++)for(let[M,A]of p===0?s.slice(0,1):s.slice(1)){let S=o(a.x+M*p*34,c/2,t-c/2),b=o(a.y+A*p*34,l/2,e-l/2);if(n.some(v=>Math.abs(S-v.x)<(c+v.w)/2+2&&Math.abs(b-v.y)<(l+v.h)/2+2))continue;if(p<=3&&!d&&(d={...a,x:S,y:b,w:c,h:l}),!f)break;if(u.some(v=>S+c/2>v.left&&S-c/2<v.right&&b+l/2>v.top&&b-l/2<v.bottom))continue;let N=Math.hypot(S-a.x,b-a.y);N<x&&(g={...a,x:S,y:b,w:c,h:l},x=N)}let m=g??d;m&&n.push(m)}return n}var Jp=_l(Zc(),1),qp="roomcraft-presence-v1",Yp=4500,$p=/^sensor\.[a-z0-9_]+$/,fM=4,mh=1536,gh=1024,dM=[[[0,0],[mh,0],[mh,gh],[0,gh],[0,0]]],Zp=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],pM=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...Zp.map(([i,t])=>[t,i]),...Zp.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function Kp(i,t){return i>=0&&i<=mh&&t>=0&&t<=gh}function jp(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function mM(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function Qp(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!jp(s))continue;let[r,o,a,c,l,u]=s,f=pM.get(n.presenceTrackProfile),h=Math.hypot(o,l),d=Kp(a,u)?{origin:{x:a,y:u},forward:{x:o/h,y:l/h}}:{},g=t.length;for(let[x,m]of[["configured",mM(n.presenceTrackZone)],["nominal",f?.ring]]){if(!m)continue;let p=m.map(([M,A])=>[r*M+o*A+a,c*M+l*A+u]);for(let[M]of Jp.default.intersection([p],dM))t.push({id:n.id,kind:x,points:M.slice(0,-1).map(([A,S])=>({x:A,y:S})),...d,...x==="nominal"?{rangeMeters:f.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function gM(i={},t=[]){let e={};for(let n of new Set(t)){if(!$p.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==qp)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,fM):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:qp,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function tm(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!$p.test(o||"")||s.has(o)||!jp(a))continue;s.add(o);let c=gM(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=Yp)continue;let[f,h,d,g,x,m]=a;for(let p of u){let M=f*p.x+h*p.y+d,A=g*p.x+x*p.y+m;Kp(M,A)&&n.push({id:o+":"+p.id,x:M,y:A,expiresAt:l+Yp})}}return n}var xM=22,yM=5,_M=1e3/12,vM=1e3,bM=12;function MM(i,t,e){let n=Xp(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>n.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&n.push(l)}return n}function SM(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function EM(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=xM;return!f&&(a.type==="garageDoor"||!SM(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function wM(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Kd(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),f=i.getElementById("sceneDefaultStatus"),h=Qd(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=i.createElement("label");x.className="scene-dashboard-look",x.hidden=!0,x.title="Lighting and device appearance from the last dashboard import";let m=i.createElement("input");m.type="checkbox",m.checked=!0,x.append(m," Dashboard look"),a?.append(x);let p=i.createElement("div");p.className="scene-selection",p.setAttribute("aria-hidden","true"),Object.assign(p.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(p);let M=i.createElement("div");M.className="scene-placeholders",Object.assign(M.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(M);let A=i.createElementNS("http://www.w3.org/2000/svg","svg");A.classList.add("scene-placeholder-leaders"),A.setAttribute("aria-hidden","true"),Object.assign(A.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(A,M);let S=new Map,b=i.getElementById("miniHelp"),E=b?.textContent,N=n.getAttribute("aria-label")??"Editable three-dimensional home view",v,P,O,F=th(null),B=r.value,Y="default",z,q,X,K=-1/0,ft=0,nt=!1,st=!1,at=null,Et=!1,Ct=[],Jt=[],$t="",Xt=0,ct,dt=!1,wt={},Dt={key:"",scene:null,reduceMotion:!1},_t={id:null,scene:null},gt=()=>B!=="plan",Nt=()=>B==="free",ht=()=>n.getBoundingClientRect(),yt=St=>{let Vt=ht();return{x:St.clientX-Vt.left,y:St.clientY-Vt.top}};function vt(St){e.showStatus?.(St)}function Mt(){if(!(!nt&&(v?.hasAmbientMotion||v?.hasPeopleMotion)&&gt()&&!i.hidden&&!d?.matches)){t.cancelAnimationFrame(X),X=void 0;return}X===void 0&&(X=t.requestAnimationFrame(Vt=>{if(X=void 0,Vt-K>=_M-1){K=Vt,ft=Vt/1e3;try{v.renderAmbient(ft)}catch{Z()}}Mt()}))}function At(St=!0){let Vt=gt()?v:null,jt=d?.matches===!0,ne=Ht()?tm(Ct,wt):[],Pe=JSON.stringify(ne);Pe===Dt.key&&Vt===Dt.scene&&jt===Dt.reduceMotion||(Dt={key:Pe,scene:Vt,reduceMotion:jt},Vt&&(Vt.setPeople(ne,(t.performance?.now()??0)/1e3,{reduceMotion:jt}),St&&V()),e.setPersonPreview?.(Vt?[]:ne))}function Ht(){return!!(g?.request&&Jt.length&&!nt&&!i.hidden)}async function Bt(St=!0){if(St&&At(),dt||!Ht())return;dt=!0;let Vt=Xt;try{let jt=await g.request("TRACK_GET",Jt);Vt===Xt&&Ht()&&(wt=jt&&typeof jt=="object"?jt:{},At())}catch{Vt===Xt&&(wt={},At())}finally{dt=!1}}function qt(){Ht()?ct===void 0&&(ct=t.setInterval(Bt,vM),Bt(!1)):ct!==void 0&&(t.clearInterval(ct),ct=void 0,Xt++,wt={})}function te(St){Ct=St.filter(ne=>ne.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ne.presenceTrackEntityId)&&Array.isArray(ne.presenceTrackTransform));let Vt=[...new Set(Ct.map(ne=>ne.presenceTrackEntityId))].slice(0,bM),jt=Vt.join(",");jt!==$t&&($t=jt,Jt=Vt,Xt++,wt={}),qt()}function V(St){if(Mt(),!v||!gt())return;let{width:Vt,height:jt}=ht();if(!Vt||!jt)return;v.resize(Vt,jt);let ne=e.getSelection(),Pe=ne?.kind==="item"?ne.id:null;if(_t.scene!==v||_t.id!==Pe){let je=P.items.find(yn=>yn.id===Pe);v.setDetectionZones(je?Qp([je]):[]),_t={id:Pe,scene:v}}let Sn=e.getPreview?.();x.hidden=!Sn?.environment;let kn=!x.hidden&&m.checked,Pn=Object.create(null);if(kn)for(let je of P.items){let yn=Sn.states?.[je.id];yn&&yn.entityId===je.entityId&&(Pn[je.id]=yn)}let ss=kn?Sn.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(v.render(ft,Pn,{...ss,reduceMotion:d?.matches===!0},{animateTelemetry:!1,showTelemetryPosition:kn,draftPositions:St}),Nt())return;let Ke=[];for(let[je,yn]of S){let Hn=v.anchor(je);yn.hidden=!Hn,Hn&&Ke.push({id:je,marker:yn,x:Hn.x*Vt,y:Hn.y*jt,w:96,h:44})}let br=MM(Ke,Vt,jt),Bo=new Set(br.map(je=>je.id)),zo=[];for(let je of br){let{marker:yn,x:Hn,y:R,w:J,h:lt,id:ot}=je;Object.assign(yn.style,{left:`${Hn}px`,top:`${R}px`,width:`${J}px`,height:`${lt}px`});let rt=Ke.find(It=>It.id===ot);if(Math.hypot(rt.x-Hn,rt.y-R)>8){let It=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[Ut,Lt]of Object.entries({x1:rt.x,y1:rt.y,x2:Hn,y2:R}))It.setAttribute(Ut,Lt);It.setAttribute("stroke","#6f816b"),It.setAttribute("stroke-width","1"),It.setAttribute("stroke-dasharray","3 3"),zo.push(It)}}for(let[je,yn]of S)yn.hidden=!Bo.has(je);A.replaceChildren(...zo);let Es=ne?.kind==="item"?v.anchor(ne.id):null;p.style.display=Es?"block":"none",Es&&(p.style.left=`${Es.x*Vt}px`,p.style.top=`${Es.y*jt}px`)}function oe(){if(!z)return;let St=z;z=void 0;try{n.releasePointerCapture(St.pointerId)}catch{}St.item&&V({[St.item.id]:{position:{x:St.item.x,y:St.item.y}}})}function Gt(){a&&(a.hidden=!gt());for(let St of Object.values(o))St&&(St.disabled=!gt());l&&(l.hidden=!v||!Nt(),l.disabled=Et),u&&(u.hidden=!v||!gt()||!at,u.disabled=Et)}function U(St){f&&(f.textContent=St)}function w(){st=!0,U("")}function tt(){n.tabIndex=Nt()?0:-1,n.style.cursor=Nt()?"grab":"",n.setAttribute("aria-label",Nt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":N)}function it(St,{initial:Vt=!1}={}){Vt||(w(),St==="default"&&(st=!1)),G.cancel(),oe();let jt=v?.getView()??F,ne=Object.hasOwn(yr,St)?St:"plan";ne!=="plan"&&e.useSelectTool?.(),B=ne,gt()&&!Nt()&&(Y=B),r.value=B,n.hidden=!gt(),tt();let Pe=gt()&&!Nt();if(M.style.display=Pe?"block":"none",A.style.display=Pe?"block":"none",Pe||(p.style.display="none"),b&&(Nt()?b.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":b.textContent=gt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":E),s.classList.toggle("scene-3d",gt()),Gt(),!gt()){L(),Mt(),x.hidden=!0,vt("Plan view \xB7 edit rooms, walls, floors and objects");return}let Sn=B==="default"?th(at):Nt()?jd(jt):{preset:B};F=v?v.setView(Sn):Sn,L(),v&&vt(Nt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function Z(){G.cancel(),v?.dispose(),v=void 0,O=void 0,B="plan",Mt(),r.value=B,n.hidden=!0,x.hidden=!0,tt(),M.style.display="none",A.style.display="none",b&&(b.textContent=E),s.classList.remove("scene-3d"),p.style.display="none",Gt(),At(!1),vt("3D view is unavailable on this screen. Plan view is ready.")}function L(){if(nt)return;let St=e.getProject();if(te(St.items),!gt()){At();return}let Vt=JSON.stringify(St);try{if(!v||Vt!==O){oe(),v&&(F=v.getView()),v?.dispose(),v=void 0,P=St,v=Vp(n,P),v.setView(F),O=Vt,S.clear(),M.replaceChildren();for(let jt of P.items.filter(ne=>ne.type==="cameraThumbnail"||ne.type.startsWith("ui"))){let ne=i.createElement("button");ne.type="button",ne.className="scene-placeholder",ne.textContent=jt.name||(jt.type==="cameraThumbnail"?"Camera":"Interface"),ne.setAttribute("aria-label",`Select ${ne.textContent}`),Object.assign(ne.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ne.addEventListener("pointerdown",Pe=>H(Pe,jt.id)),ne.addEventListener("click",Pe=>{!Nt()&&Pe.detail===0&&(e.selectItem(jt.id),V())}),S.set(jt.id,ne),M.append(ne)}}Gt(),At(!1),V()}catch{Z()}}function y(St){!v||!gt()||(w(),oe(),v.setView(St(v.getView())),F=v.getView(),V())}let _=()=>L(),T=()=>{let St=e.getTool();gt()&&St!=="select"?it("plan"):Nt()&&e.hasPlacement()?it(Y):gt()&&V()},I=()=>it(r.value),D=()=>{t.cancelAnimationFrame(q),q=t.requestAnimationFrame(()=>V())},G=Wp(n,{getView:()=>Nt()?v?.getView():null,onChange:St=>{!v||!Nt()||(w(),F=v.setView(St),D())}}),H=(St,Vt=null)=>{if(!gt()||Nt()||!v||St.button!==0||z)return;St.preventDefault(),St.stopPropagation();let jt=yt(St);if(e.hasPlacement()){let Ke=v.projectToPlan(jt.x,jt.y,e.getPlacementType());Ke&&e.placeAt(Ke.x,Ke.y),L();return}let{width:ne,height:Pe}=ht(),Sn=new Map(P.items.map(Ke=>[Ke.id,v.anchor(Ke.id)])),kn=Vt??v.pickGarage(jt.x,jt.y),Pn=kn?P.items.find(Ke=>Ke.id===kn):EM(P.items,jt,v.projectToPlan(jt.x,jt.y),Sn,ne,Pe);if(e.selectItem(Pn?.id??null),!Pn){V();return}let ss=v.projectToPlan(jt.x,jt.y,Pn.type);ss&&(z={item:{...Pn},startScreen:jt,startPlan:ss,pointerId:St.pointerId},n.setPointerCapture(St.pointerId),V())},et=St=>{if(!gt()||Nt()||(St.stopPropagation(),!z||z.pointerId!==St.pointerId||!v))return;let Vt=yt(St);if(!z.moved&&Math.hypot(Vt.x-z.startScreen.x,Vt.y-z.startScreen.y)<yM)return;let jt=v.projectToPlan(Vt.x,Vt.y,z.item.type);jt&&(z.moved=!0,z.position={x:z.item.x+jt.x-z.startPlan.x,y:z.item.y+jt.y-z.startPlan.y},V({[z.item.id]:{position:z.position}}))},Q=St=>{if(!gt()||Nt()||(St.stopPropagation(),!z||z.pointerId!==St.pointerId))return;let Vt=z;z=void 0;try{n.releasePointerCapture(St.pointerId)}catch{}Vt.moved&&Vt.position?(e.moveItem(Vt.item.id,Vt.position.x,Vt.position.y),L()):V()},pt=St=>{Nt()||(z?.pointerId===St.pointerId&&oe(),St.stopPropagation())},C=St=>{!gt()||Nt()||(St.preventDefault(),St.stopPropagation(),y(Vt=>({...Vt,zoom:Vt.zoom*(St.deltaY<0?1.1:1/1.1)})))},j=St=>{Nt()&&St.target===n&&(St.key==="Delete"||St.key==="Backspace")&&(St.preventDefault(),St.stopImmediatePropagation()),St.key==="Escape"&&z&&(St.preventDefault(),St.stopImmediatePropagation(),oe())},W=St=>{St.preventDefault(),Z()},mt=()=>y(St=>({...St,azimuth:St.azimuth-15})),xt=()=>y(St=>({...St,azimuth:St.azimuth+15})),ut=()=>y(St=>({...St,zoom:St.zoom/1.2})),bt=()=>y(St=>({...St,zoom:St.zoom*1.2})),Rt=()=>it("top"),ie=()=>V(),Zt=()=>{At(!1),V()},ye=()=>{qt(),At(),Mt()};i.addEventListener("visibilitychange",ye),d?.addEventListener("change",Zt);async function Me(){Et=!0,Gt();try{at=await h.read(),!nt&&!st&&it("default",{initial:!0})}catch{nt||U("Saved view unavailable")}finally{Et=!1,nt||Gt()}}async function Je(St){if(!(!v||!gt()||Et)){Et=!0,U("Saving view\u2026"),Gt();try{if(await h.write(St),nt)return;at=St,St||it("default"),U(St?"Default view saved":"Top down is the default")}catch{nt||U("Could not save default view")}finally{Et=!1,nt||Gt()}}}let Le=()=>{Nt()&&v&&Je(v.getView())},$e=()=>Je(null);o.left?.addEventListener("click",mt),o.right?.addEventListener("click",xt),o.out?.addEventListener("click",ut),o.in?.addEventListener("click",bt),c?.addEventListener("click",Rt),l?.addEventListener("click",Le),u?.addEventListener("click",$e),m.addEventListener("change",ie),r.addEventListener("change",I),n.addEventListener("pointerdown",H),n.addEventListener("pointermove",et),n.addEventListener("pointerup",Q),n.addEventListener("pointercancel",pt),n.addEventListener("lostpointercapture",pt),n.addEventListener("wheel",C,{passive:!1}),n.addEventListener("webglcontextlost",W),t.addEventListener("keydown",j,!0),t.addEventListener("roomcraft-editor-change",_),t.addEventListener("roomcraft-editor-tool",T);let Xe=new t.ResizeObserver(D);return Xe.observe(s),it(B,{initial:!0}),Me(),{getView:()=>v?.getView()??{...F},setView:it,dispose(){nt=!0,Mt(),qt(),i.removeEventListener("visibilitychange",ye),d?.removeEventListener("change",Zt),oe(),G.dispose(),B="plan",tt(),Xe.disconnect(),t.cancelAnimationFrame(q),v?.dispose(),v=void 0,p.remove(),M.remove(),A.remove(),x.remove(),m.removeEventListener("change",ie),b&&(b.textContent=E),o.left?.removeEventListener("click",mt),o.right?.removeEventListener("click",xt),o.out?.removeEventListener("click",ut),o.in?.removeEventListener("click",bt),c?.removeEventListener("click",Rt),l?.removeEventListener("click",Le),u?.removeEventListener("click",$e),r.removeEventListener("change",I),n.removeEventListener("pointerdown",H),n.removeEventListener("pointermove",et),n.removeEventListener("pointerup",Q),n.removeEventListener("pointercancel",pt),n.removeEventListener("lostpointercapture",pt),n.removeEventListener("wheel",C),n.removeEventListener("webglcontextlost",W),t.removeEventListener("keydown",j,!0),t.removeEventListener("roomcraft-editor-change",_),t.removeEventListener("roomcraft-editor-tool",T)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=dh,wM(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
