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
"use strict";(()=>{var Ep=Object.create;var ih=Object.defineProperty;var wp=Object.getOwnPropertyDescriptor;var Tp=Object.getOwnPropertyNames;var Ap=Object.getPrototypeOf,Rp=Object.prototype.hasOwnProperty;var Cp=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Ip=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tp(t))!Rp.call(i,s)&&s!==e&&ih(i,s,{get:()=>t[s],enumerable:!(n=wp(t,s))||n.enumerable});return i};var ol=(i,t,e)=>(e=i!=null?Ep(Ap(i)):{},Ip(t||!i||!i.__esModule?ih(e,"default",{value:i,enumerable:!0}):e,i));var Oc=Cp((Uu,Fu)=>{(function(i,t){typeof Uu=="object"&&typeof Fu<"u"?Fu.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Uu,(function(){"use strict";/**
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
    ***************************************************************************** */function i(B,_){var v={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},T,P,D,W;return W={next:H(0),throw:H(1),return:H(2)},typeof Symbol=="function"&&(W[Symbol.iterator]=function(){return this}),W;function H(tt){return function(_t){return et([tt,_t])}}function et(tt){if(T)throw new TypeError("Generator is already executing.");for(;v;)try{if(T=1,P&&(D=tt[0]&2?P.return:tt[0]?P.throw||((D=P.return)&&D.call(P),0):P.next)&&!(D=D.call(P,tt[1])).done)return D;switch(P=0,D&&(tt=[tt[0]&2,D.value]),tt[0]){case 0:case 1:D=tt;break;case 4:return v.label++,{value:tt[1],done:!1};case 5:v.label++,P=tt[1],tt=[0];continue;case 7:tt=v.ops.pop(),v.trys.pop();continue;default:if(D=v.trys,!(D=D.length>0&&D[D.length-1])&&(tt[0]===6||tt[0]===2)){v=0;continue}if(tt[0]===3&&(!D||tt[1]>D[0]&&tt[1]<D[3])){v.label=tt[1];break}if(tt[0]===6&&v.label<D[1]){v.label=D[1],D=tt;break}if(D&&v.label<D[2]){v.label=D[2],v.ops.push(tt);break}D[2]&&v.ops.pop(),v.trys.pop();continue}tt=_.call(B,v)}catch(_t){tt=[6,_t],P=0}finally{T=D=0}if(tt[0]&5)throw tt[1];return{value:tt[0]?tt[1]:void 0,done:!0}}}var t=(function(){function B(_,v){this.next=null,this.key=_,this.data=v,this.left=null,this.right=null}return B})();function e(B,_){return B>_?1:B<_?-1:0}function n(B,_,v){for(var T=new t(null,null),P=T,D=T;;){var W=v(B,_.key);if(W<0){if(_.left===null)break;if(v(B,_.left.key)<0){var H=_.left;if(_.left=H.right,H.right=_,_=H,_.left===null)break}D.left=_,D=_,_=_.left}else if(W>0){if(_.right===null)break;if(v(B,_.right.key)>0){var H=_.right;if(_.right=H.left,H.left=_,_=H,_.right===null)break}P.right=_,P=_,_=_.right}else break}return P.right=_.left,D.left=_.right,_.left=T.right,_.right=T.left,_}function s(B,_,v,T){var P=new t(B,_);if(v===null)return P.left=P.right=null,P;v=n(B,v,T);var D=T(B,v.key);return D<0?(P.left=v.left,P.right=v,v.left=null):D>=0&&(P.right=v.right,P.left=v,v.right=null),P}function r(B,_,v){var T=null,P=null;if(_){_=n(B,_,v);var D=v(_.key,B);D===0?(T=_.left,P=_.right):D<0?(P=_.right,_.right=null,T=_):(T=_.left,_.left=null,P=_)}return{left:T,right:P}}function o(B,_,v){return _===null?B:(B===null||(_=n(B.key,_,v),_.left=B),_)}function a(B,_,v,T,P){if(B){T(""+_+(v?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+P(B)+`
`);var D=_+(v?"    ":"\u2502   ");B.left&&a(B.left,D,!1,T,P),B.right&&a(B.right,D,!0,T,P)}}var c=(function(){function B(_){_===void 0&&(_=e),this._root=null,this._size=0,this._comparator=_}return B.prototype.insert=function(_,v){return this._size++,this._root=s(_,v,this._root,this._comparator)},B.prototype.add=function(_,v){var T=new t(_,v);this._root===null&&(T.left=T.right=null,this._size++,this._root=T);var P=this._comparator,D=n(_,this._root,P),W=P(_,D.key);return W===0?this._root=D:(W<0?(T.left=D.left,T.right=D,D.left=null):W>0&&(T.right=D.right,T.left=D,D.right=null),this._size++,this._root=T),this._root},B.prototype.remove=function(_){this._root=this._remove(_,this._root,this._comparator)},B.prototype._remove=function(_,v,T){var P;if(v===null)return null;v=n(_,v,T);var D=T(_,v.key);return D===0?(v.left===null?P=v.right:(P=n(_,v.left,T),P.right=v.right),this._size--,P):v},B.prototype.pop=function(){var _=this._root;if(_){for(;_.left;)_=_.left;return this._root=n(_.key,this._root,this._comparator),this._root=this._remove(_.key,this._root,this._comparator),{key:_.key,data:_.data}}return null},B.prototype.findStatic=function(_){for(var v=this._root,T=this._comparator;v;){var P=T(_,v.key);if(P===0)return v;P<0?v=v.left:v=v.right}return null},B.prototype.find=function(_){return this._root&&(this._root=n(_,this._root,this._comparator),this._comparator(_,this._root.key)!==0)?null:this._root},B.prototype.contains=function(_){for(var v=this._root,T=this._comparator;v;){var P=T(_,v.key);if(P===0)return!0;P<0?v=v.left:v=v.right}return!1},B.prototype.forEach=function(_,v){for(var T=this._root,P=[],D=!1;!D;)T!==null?(P.push(T),T=T.left):P.length!==0?(T=P.pop(),_.call(v,T),T=T.right):D=!0;return this},B.prototype.range=function(_,v,T,P){for(var D=[],W=this._comparator,H=this._root,et;D.length!==0||H;)if(H)D.push(H),H=H.left;else{if(H=D.pop(),et=W(H.key,v),et>0)break;if(W(H.key,_)>=0&&T.call(P,H))return this;H=H.right}return this},B.prototype.keys=function(){var _=[];return this.forEach(function(v){var T=v.key;return _.push(T)}),_},B.prototype.values=function(){var _=[];return this.forEach(function(v){var T=v.data;return _.push(T)}),_},B.prototype.min=function(){return this._root?this.minNode(this._root).key:null},B.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},B.prototype.minNode=function(_){if(_===void 0&&(_=this._root),_)for(;_.left;)_=_.left;return _},B.prototype.maxNode=function(_){if(_===void 0&&(_=this._root),_)for(;_.right;)_=_.right;return _},B.prototype.at=function(_){for(var v=this._root,T=!1,P=0,D=[];!T;)if(v)D.push(v),v=v.left;else if(D.length>0){if(v=D.pop(),P===_)return v;P++,v=v.right}else T=!0;return null},B.prototype.next=function(_){var v=this._root,T=null;if(_.right){for(T=_.right;T.left;)T=T.left;return T}for(var P=this._comparator;v;){var D=P(_.key,v.key);if(D===0)break;D<0?(T=v,v=v.left):v=v.right}return T},B.prototype.prev=function(_){var v=this._root,T=null;if(_.left!==null){for(T=_.left;T.right;)T=T.right;return T}for(var P=this._comparator;v;){var D=P(_.key,v.key);if(D===0)break;D<0?v=v.left:(T=v,v=v.right)}return T},B.prototype.clear=function(){return this._root=null,this._size=0,this},B.prototype.toList=function(){return f(this._root)},B.prototype.load=function(_,v,T){v===void 0&&(v=[]),T===void 0&&(T=!1);var P=_.length,D=this._comparator;if(T&&g(_,v,0,P-1,D),this._root===null)this._root=l(_,v,0,P),this._size=P;else{var W=d(this.toList(),u(_,v),D);P=this._size+P,this._root=h({head:W},0,P)}return this},B.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(B.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(B.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),B.prototype.toString=function(_){_===void 0&&(_=function(T){return String(T.key)});var v=[];return a(this._root,"",!0,function(T){return v.push(T)},_),v.join("")},B.prototype.update=function(_,v,T){var P=this._comparator,D=r(_,this._root,P),W=D.left,H=D.right;P(_,v)<0?H=s(v,T,H,P):W=s(v,T,W,P),this._root=o(W,H,P)},B.prototype.split=function(_){return r(_,this._root,this._comparator)},B.prototype[Symbol.iterator]=function(){var _,v,T;return i(this,function(P){switch(P.label){case 0:_=this._root,v=[],T=!1,P.label=1;case 1:return T?[3,6]:_===null?[3,2]:(v.push(_),_=_.left,[3,5]);case 2:return v.length===0?[3,4]:(_=v.pop(),[4,_]);case 3:return P.sent(),_=_.right,[3,5];case 4:T=!0,P.label=5;case 5:return[3,1];case 6:return[2]}})},B})();function l(B,_,v,T){var P=T-v;if(P>0){var D=v+Math.floor(P/2),W=B[D],H=_[D],et=new t(W,H);return et.left=l(B,_,v,D),et.right=l(B,_,D+1,T),et}return null}function u(B,_){for(var v=new t(null,null),T=v,P=0;P<B.length;P++)T=T.next=new t(B[P],_[P]);return T.next=null,v.next}function f(B){for(var _=B,v=[],T=!1,P=new t(null,null),D=P;!T;)_?(v.push(_),_=_.left):v.length>0?(_=D=D.next=v.pop(),_=_.right):T=!0;return D.next=null,P.next}function h(B,_,v){var T=v-_;if(T>0){var P=_+Math.floor(T/2),D=h(B,_,P),W=B.head;return W.left=D,B.head=B.head.next,W.right=h(B,P+1,v),W}return null}function d(B,_,v){for(var T=new t(null,null),P=T,D=B,W=_;D!==null&&W!==null;)v(D.key,W.key)<0?(P.next=D,D=D.next):(P.next=W,W=W.next),P=P.next;return D!==null?P.next=D:W!==null&&(P.next=W),T.next}function g(B,_,v,T,P){if(!(v>=T)){for(var D=B[v+T>>1],W=v-1,H=T+1;;){do W++;while(P(B[W],D)<0);do H--;while(P(B[H],D)>0);if(W>=H)break;var et=B[W];B[W]=B[H],B[H]=et,et=_[W],_[W]=_[H],_[H]=et}g(B,_,v,H,P),g(B,_,H+1,T,P)}}let x=(B,_)=>B.ll.x<=_.x&&_.x<=B.ur.x&&B.ll.y<=_.y&&_.y<=B.ur.y,m=(B,_)=>{if(_.ur.x<B.ll.x||B.ur.x<_.ll.x||_.ur.y<B.ll.y||B.ur.y<_.ll.y)return null;let v=B.ll.x<_.ll.x?_.ll.x:B.ll.x,T=B.ur.x<_.ur.x?B.ur.x:_.ur.x,P=B.ll.y<_.ll.y?_.ll.y:B.ll.y,D=B.ur.y<_.ur.y?B.ur.y:_.ur.y;return{ll:{x:v,y:P},ur:{x:T,y:D}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let S=p*p,A=(B,_)=>{if(-p<B&&B<p&&-p<_&&_<p)return 0;let v=B-_;return v*v<S*B*_?0:B<_?-1:1};class M{constructor(){this.reset()}reset(){this.xRounder=new b,this.yRounder=new b}round(_,v){return{x:this.xRounder.round(_),y:this.yRounder.round(v)}}}class b{constructor(){this.tree=new c,this.round(0)}round(_){let v=this.tree.add(_),T=this.tree.prev(v);if(T!==null&&A(v.key,T.key)===0)return this.tree.remove(_),T.key;let P=this.tree.next(v);return P!==null&&A(v.key,P.key)===0?(this.tree.remove(_),P.key):_}}let w=new M,L=11102230246251565e-32,y=134217729,C=(3+8*L)*L;function F(B,_,v,T,P){let D,W,H,et,tt=_[0],_t=T[0],I=0,j=0;_t>tt==_t>-tt?(D=tt,tt=_[++I]):(D=_t,_t=T[++j]);let Y=0;if(I<B&&j<v)for(_t>tt==_t>-tt?(W=tt+D,H=D-(W-tt),tt=_[++I]):(W=_t+D,H=D-(W-_t),_t=T[++j]),D=W,H!==0&&(P[Y++]=H);I<B&&j<v;)_t>tt==_t>-tt?(W=D+tt,et=W-D,H=D-(W-et)+(tt-et),tt=_[++I]):(W=D+_t,et=W-D,H=D-(W-et)+(_t-et),_t=T[++j]),D=W,H!==0&&(P[Y++]=H);for(;I<B;)W=D+tt,et=W-D,H=D-(W-et)+(tt-et),tt=_[++I],D=W,H!==0&&(P[Y++]=H);for(;j<v;)W=D+_t,et=W-D,H=D-(W-et)+(_t-et),_t=T[++j],D=W,H!==0&&(P[Y++]=H);return(D!==0||Y===0)&&(P[Y++]=D),Y}function N(B,_){let v=_[0];for(let T=1;T<B;T++)v+=_[T];return v}function z(B){return new Float64Array(B)}let q=(3+16*L)*L,O=(2+12*L)*L,G=(9+64*L)*L*L,X=z(4),K=z(8),ut=z(12),nt=z(16),it=z(4);function ot(B,_,v,T,P,D,W){let H,et,tt,_t,I,j,Y,gt,xt,ft,wt,It,ie,Yt,me,be,Je,Le,$e=B-P,We=v-P,Mt=_-D,Xt=T-D;Yt=$e*Xt,j=y*$e,Y=j-(j-$e),gt=$e-Y,j=y*Xt,xt=j-(j-Xt),ft=Xt-xt,me=gt*ft-(Yt-Y*xt-gt*xt-Y*ft),be=Mt*We,j=y*Mt,Y=j-(j-Mt),gt=Mt-Y,j=y*We,xt=j-(j-We),ft=We-xt,Je=gt*ft-(be-Y*xt-gt*xt-Y*ft),wt=me-Je,I=me-wt,X[0]=me-(wt+I)+(I-Je),It=Yt+wt,I=It-Yt,ie=Yt-(It-I)+(wt-I),wt=ie-be,I=ie-wt,X[1]=ie-(wt+I)+(I-be),Le=It+wt,I=Le-It,X[2]=It-(Le-I)+(wt-I),X[3]=Le;let jt=N(4,X),ne=O*W;if(jt>=ne||-jt>=ne||(I=B-$e,H=B-($e+I)+(I-P),I=v-We,tt=v-(We+I)+(I-P),I=_-Mt,et=_-(Mt+I)+(I-D),I=T-Xt,_t=T-(Xt+I)+(I-D),H===0&&et===0&&tt===0&&_t===0)||(ne=G*W+C*Math.abs(jt),jt+=$e*_t+Xt*H-(Mt*tt+We*et),jt>=ne||-jt>=ne))return jt;Yt=H*Xt,j=y*H,Y=j-(j-H),gt=H-Y,j=y*Xt,xt=j-(j-Xt),ft=Xt-xt,me=gt*ft-(Yt-Y*xt-gt*xt-Y*ft),be=et*We,j=y*et,Y=j-(j-et),gt=et-Y,j=y*We,xt=j-(j-We),ft=We-xt,Je=gt*ft-(be-Y*xt-gt*xt-Y*ft),wt=me-Je,I=me-wt,it[0]=me-(wt+I)+(I-Je),It=Yt+wt,I=It-Yt,ie=Yt-(It-I)+(wt-I),wt=ie-be,I=ie-wt,it[1]=ie-(wt+I)+(I-be),Le=It+wt,I=Le-It,it[2]=It-(Le-I)+(wt-I),it[3]=Le;let Pe=F(4,X,4,it,K);Yt=$e*_t,j=y*$e,Y=j-(j-$e),gt=$e-Y,j=y*_t,xt=j-(j-_t),ft=_t-xt,me=gt*ft-(Yt-Y*xt-gt*xt-Y*ft),be=Mt*tt,j=y*Mt,Y=j-(j-Mt),gt=Mt-Y,j=y*tt,xt=j-(j-tt),ft=tt-xt,Je=gt*ft-(be-Y*xt-gt*xt-Y*ft),wt=me-Je,I=me-wt,it[0]=me-(wt+I)+(I-Je),It=Yt+wt,I=It-Yt,ie=Yt-(It-I)+(wt-I),wt=ie-be,I=ie-wt,it[1]=ie-(wt+I)+(I-be),Le=It+wt,I=Le-It,it[2]=It-(Le-I)+(wt-I),it[3]=Le;let bn=F(Pe,K,4,it,ut);Yt=H*_t,j=y*H,Y=j-(j-H),gt=H-Y,j=y*_t,xt=j-(j-_t),ft=_t-xt,me=gt*ft-(Yt-Y*xt-gt*xt-Y*ft),be=et*tt,j=y*et,Y=j-(j-et),gt=et-Y,j=y*tt,xt=j-(j-tt),ft=tt-xt,Je=gt*ft-(be-Y*xt-gt*xt-Y*ft),wt=me-Je,I=me-wt,it[0]=me-(wt+I)+(I-Je),It=Yt+wt,I=It-Yt,ie=Yt-(It-I)+(wt-I),wt=ie-be,I=ie-wt,it[1]=ie-(wt+I)+(I-be),Le=It+wt,I=Le-It,it[2]=It-(Le-I)+(wt-I),it[3]=Le;let zn=F(bn,ut,4,it,nt);return nt[zn-1]}function Tt(B,_,v,T,P,D){let W=(_-D)*(v-P),H=(B-P)*(T-D),et=W-H,tt=Math.abs(W+H);return Math.abs(et)>=q*tt?et:-ot(B,_,v,T,P,D,tt)}let Rt=(B,_)=>B.x*_.y-B.y*_.x,Zt=(B,_)=>B.x*_.x+B.y*_.y,Jt=(B,_,v)=>{let T=Tt(B.x,B.y,_.x,_.y,v.x,v.y);return T>0?-1:T<0?1:0},$t=B=>Math.sqrt(Zt(B,B)),at=(B,_,v)=>{let T={x:_.x-B.x,y:_.y-B.y},P={x:v.x-B.x,y:v.y-B.y};return Rt(P,T)/$t(P)/$t(T)},pt=(B,_,v)=>{let T={x:_.x-B.x,y:_.y-B.y},P={x:v.x-B.x,y:v.y-B.y};return Zt(P,T)/$t(P)/$t(T)},Ct=(B,_,v)=>_.y===0?null:{x:B.x+_.x/_.y*(v-B.y),y:v},Ot=(B,_,v)=>_.x===0?null:{x:v,y:B.y+_.y/_.x*(v-B.x)},vt=(B,_,v,T)=>{if(_.x===0)return Ot(v,T,B.x);if(T.x===0)return Ot(B,_,v.x);if(_.y===0)return Ct(v,T,B.y);if(T.y===0)return Ct(B,_,v.y);let P=Rt(_,T);if(P==0)return null;let D={x:v.x-B.x,y:v.y-B.y},W=Rt(D,_)/P,H=Rt(D,T)/P,et=B.x+H*_.x,tt=v.x+W*T.x,_t=B.y+H*_.y,I=v.y+W*T.y,j=(et+tt)/2,Y=(_t+I)/2;return{x:j,y:Y}};class mt{static compare(_,v){let T=mt.comparePoints(_.point,v.point);return T!==0?T:(_.point!==v.point&&_.link(v),_.isLeft!==v.isLeft?_.isLeft?1:-1:dt.compare(_.segment,v.segment))}static comparePoints(_,v){return _.x<v.x?-1:_.x>v.x?1:_.y<v.y?-1:_.y>v.y?1:0}constructor(_,v){_.events===void 0?_.events=[this]:_.events.push(this),this.point=_,this.isLeft=v}link(_){if(_.point===this.point)throw new Error("Tried to link already linked events");let v=_.point.events;for(let T=0,P=v.length;T<P;T++){let D=v[T];this.point.events.push(D),D.point=this.point}this.checkForConsuming()}checkForConsuming(){let _=this.point.events.length;for(let v=0;v<_;v++){let T=this.point.events[v];if(T.segment.consumedBy===void 0)for(let P=v+1;P<_;P++){let D=this.point.events[P];D.consumedBy===void 0&&T.otherSE.point.events===D.otherSE.point.events&&T.segment.consume(D.segment)}}}getAvailableLinkedEvents(){let _=[];for(let v=0,T=this.point.events.length;v<T;v++){let P=this.point.events[v];P!==this&&!P.segment.ringOut&&P.segment.isInResult()&&_.push(P)}return _}getLeftmostComparator(_){let v=new Map,T=P=>{let D=P.otherSE;v.set(P,{sine:at(this.point,_.point,D.point),cosine:pt(this.point,_.point,D.point)})};return(P,D)=>{v.has(P)||T(P),v.has(D)||T(D);let{sine:W,cosine:H}=v.get(P),{sine:et,cosine:tt}=v.get(D);return W>=0&&et>=0?H<tt?1:H>tt?-1:0:W<0&&et<0?H<tt?-1:H>tt?1:0:et<W?-1:et>W?1:0}}}let Bt=0;class dt{static compare(_,v){let T=_.leftSE.point.x,P=v.leftSE.point.x,D=_.rightSE.point.x,W=v.rightSE.point.x;if(W<T)return 1;if(D<P)return-1;let H=_.leftSE.point.y,et=v.leftSE.point.y,tt=_.rightSE.point.y,_t=v.rightSE.point.y;if(T<P){if(et<H&&et<tt)return 1;if(et>H&&et>tt)return-1;let I=_.comparePoint(v.leftSE.point);if(I<0)return 1;if(I>0)return-1;let j=v.comparePoint(_.rightSE.point);return j!==0?j:-1}if(T>P){if(H<et&&H<_t)return-1;if(H>et&&H>_t)return 1;let I=v.comparePoint(_.leftSE.point);if(I!==0)return I;let j=_.comparePoint(v.rightSE.point);return j<0?1:j>0?-1:1}if(H<et)return-1;if(H>et)return 1;if(D<W){let I=v.comparePoint(_.rightSE.point);if(I!==0)return I}if(D>W){let I=_.comparePoint(v.rightSE.point);if(I<0)return 1;if(I>0)return-1}if(D!==W){let I=tt-H,j=D-T,Y=_t-et,gt=W-P;if(I>j&&Y<gt)return 1;if(I<j&&Y>gt)return-1}return D>W?1:D<W||tt<_t?-1:tt>_t?1:_.id<v.id?-1:_.id>v.id?1:0}constructor(_,v,T,P){this.id=++Bt,this.leftSE=_,_.segment=this,_.otherSE=v,this.rightSE=v,v.segment=this,v.otherSE=_,this.rings=T,this.windings=P}static fromRing(_,v,T){let P,D,W,H=mt.comparePoints(_,v);if(H<0)P=_,D=v,W=1;else if(H>0)P=v,D=_,W=-1;else throw new Error(`Tried to create degenerate segment at [${_.x}, ${_.y}]`);let et=new mt(P,!0),tt=new mt(D,!1);return new dt(et,tt,[T],[W])}replaceRightSE(_){this.rightSE=_,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let _=this.leftSE.point.y,v=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:_<v?_:v},ur:{x:this.rightSE.point.x,y:_>v?_:v}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(_){return _.x===this.leftSE.point.x&&_.y===this.leftSE.point.y||_.x===this.rightSE.point.x&&_.y===this.rightSE.point.y}comparePoint(_){if(this.isAnEndpoint(_))return 0;let v=this.leftSE.point,T=this.rightSE.point,P=this.vector();if(v.x===T.x)return _.x===v.x?0:_.x<v.x?1:-1;let D=(_.y-v.y)/P.y,W=v.x+D*P.x;if(_.x===W)return 0;let H=(_.x-v.x)/P.x,et=v.y+H*P.y;return _.y===et?0:_.y<et?-1:1}getIntersection(_){let v=this.bbox(),T=_.bbox(),P=m(v,T);if(P===null)return null;let D=this.leftSE.point,W=this.rightSE.point,H=_.leftSE.point,et=_.rightSE.point,tt=x(v,H)&&this.comparePoint(H)===0,_t=x(T,D)&&_.comparePoint(D)===0,I=x(v,et)&&this.comparePoint(et)===0,j=x(T,W)&&_.comparePoint(W)===0;if(_t&&tt)return j&&!I?W:!j&&I?et:null;if(_t)return I&&D.x===et.x&&D.y===et.y?null:D;if(tt)return j&&W.x===H.x&&W.y===H.y?null:H;if(j&&I)return null;if(j)return W;if(I)return et;let Y=vt(D,this.vector(),H,_.vector());return Y===null||!x(P,Y)?null:w.round(Y.x,Y.y)}split(_){let v=[],T=_.events!==void 0,P=new mt(_,!0),D=new mt(_,!1),W=this.rightSE;this.replaceRightSE(D),v.push(D),v.push(P);let H=new dt(P,W,this.rings.slice(),this.windings.slice());return mt.comparePoints(H.leftSE.point,H.rightSE.point)>0&&H.swapEvents(),mt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),T&&(P.checkForConsuming(),D.checkForConsuming()),v}swapEvents(){let _=this.rightSE;this.rightSE=this.leftSE,this.leftSE=_,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let v=0,T=this.windings.length;v<T;v++)this.windings[v]*=-1}consume(_){let v=this,T=_;for(;v.consumedBy;)v=v.consumedBy;for(;T.consumedBy;)T=T.consumedBy;let P=dt.compare(v,T);if(P!==0){if(P>0){let D=v;v=T,T=D}if(v.prev===T){let D=v;v=T,T=D}for(let D=0,W=T.rings.length;D<W;D++){let H=T.rings[D],et=T.windings[D],tt=v.rings.indexOf(H);tt===-1?(v.rings.push(H),v.windings.push(et)):v.windings[tt]+=et}T.rings=null,T.windings=null,T.consumedBy=v,T.leftSE.consumedBy=v.leftSE,T.rightSE.consumedBy=v.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let _=this.prev.consumedBy||this.prev;this._beforeState=_.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let _=this.beforeState();this._afterState={rings:_.rings.slice(0),windings:_.windings.slice(0),multiPolys:[]};let v=this._afterState.rings,T=this._afterState.windings,P=this._afterState.multiPolys;for(let H=0,et=this.rings.length;H<et;H++){let tt=this.rings[H],_t=this.windings[H],I=v.indexOf(tt);I===-1?(v.push(tt),T.push(_t)):T[I]+=_t}let D=[],W=[];for(let H=0,et=v.length;H<et;H++){if(T[H]===0)continue;let tt=v[H],_t=tt.poly;if(W.indexOf(_t)===-1)if(tt.isExterior)D.push(_t);else{W.indexOf(_t)===-1&&W.push(_t);let I=D.indexOf(tt.poly);I!==-1&&D.splice(I,1)}}for(let H=0,et=D.length;H<et;H++){let tt=D[H].multiPoly;P.indexOf(tt)===-1&&P.push(tt)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let _=this.beforeState().multiPolys,v=this.afterState().multiPolys;switch(Ht.type){case"union":{let T=_.length===0,P=v.length===0;this._isInResult=T!==P;break}case"intersection":{let T,P;_.length<v.length?(T=_.length,P=v.length):(T=v.length,P=_.length),this._isInResult=P===Ht.numMultiPolys&&T<P;break}case"xor":{let T=Math.abs(_.length-v.length);this._isInResult=T%2===1;break}case"difference":{let T=P=>P.length===1&&P[0].isSubject;this._isInResult=T(_)!==T(v);break}default:throw new Error(`Unrecognized operation type found ${Ht.type}`)}return this._isInResult}}class yt{constructor(_,v,T){if(!Array.isArray(_)||_.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=v,this.isExterior=T,this.segments=[],typeof _[0][0]!="number"||typeof _[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let P=w.round(_[0][0],_[0][1]);this.bbox={ll:{x:P.x,y:P.y},ur:{x:P.x,y:P.y}};let D=P;for(let W=1,H=_.length;W<H;W++){if(typeof _[W][0]!="number"||typeof _[W][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let et=w.round(_[W][0],_[W][1]);et.x===D.x&&et.y===D.y||(this.segments.push(dt.fromRing(D,et,this)),et.x<this.bbox.ll.x&&(this.bbox.ll.x=et.x),et.y<this.bbox.ll.y&&(this.bbox.ll.y=et.y),et.x>this.bbox.ur.x&&(this.bbox.ur.x=et.x),et.y>this.bbox.ur.y&&(this.bbox.ur.y=et.y),D=et)}(P.x!==D.x||P.y!==D.y)&&this.segments.push(dt.fromRing(D,P,this))}getSweepEvents(){let _=[];for(let v=0,T=this.segments.length;v<T;v++){let P=this.segments[v];_.push(P.leftSE),_.push(P.rightSE)}return _}}class bt{constructor(_,v){if(!Array.isArray(_))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new yt(_[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let T=1,P=_.length;T<P;T++){let D=new yt(_[T],this,!1);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.interiorRings.push(D)}this.multiPoly=v}getSweepEvents(){let _=this.exteriorRing.getSweepEvents();for(let v=0,T=this.interiorRings.length;v<T;v++){let P=this.interiorRings[v].getSweepEvents();for(let D=0,W=P.length;D<W;D++)_.push(P[D])}return _}}class Et{constructor(_,v){if(!Array.isArray(_))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof _[0][0][0]=="number"&&(_=[_])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let T=0,P=_.length;T<P;T++){let D=new bt(_[T],this);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.polys.push(D)}this.isSubject=v}getSweepEvents(){let _=[];for(let v=0,T=this.polys.length;v<T;v++){let P=this.polys[v].getSweepEvents();for(let D=0,W=P.length;D<W;D++)_.push(P[D])}return _}}class ht{static factory(_){let v=[];for(let T=0,P=_.length;T<P;T++){let D=_[T];if(!D.isInResult()||D.ringOut)continue;let W=null,H=D.leftSE,et=D.rightSE,tt=[H],_t=H.point,I=[];for(;W=H,H=et,tt.push(H),H.point!==_t;)for(;;){let j=H.getAvailableLinkedEvents();if(j.length===0){let xt=tt[0].point,ft=tt[tt.length-1].point;throw new Error(`Unable to complete output ring starting at [${xt.x}, ${xt.y}]. Last matching segment found ends at [${ft.x}, ${ft.y}].`)}if(j.length===1){et=j[0].otherSE;break}let Y=null;for(let xt=0,ft=I.length;xt<ft;xt++)if(I[xt].point===H.point){Y=xt;break}if(Y!==null){let xt=I.splice(Y)[0],ft=tt.splice(xt.index);ft.unshift(ft[0].otherSE),v.push(new ht(ft.reverse()));continue}I.push({index:tt.length,point:H.point});let gt=H.getLeftmostComparator(W);et=j.sort(gt)[0].otherSE;break}v.push(new ht(tt))}return v}constructor(_){this.events=_;for(let v=0,T=_.length;v<T;v++)_[v].segment.ringOut=this;this.poly=null}getGeom(){let _=this.events[0].point,v=[_];for(let tt=1,_t=this.events.length-1;tt<_t;tt++){let I=this.events[tt].point,j=this.events[tt+1].point;Jt(I,_,j)!==0&&(v.push(I),_=I)}if(v.length===1)return null;let T=v[0],P=v[1];Jt(T,_,P)===0&&v.shift(),v.push(v[0]);let D=this.isExteriorRing()?1:-1,W=this.isExteriorRing()?0:v.length-1,H=this.isExteriorRing()?v.length:-1,et=[];for(let tt=W;tt!=H;tt+=D)et.push([v[tt].x,v[tt].y]);return et}isExteriorRing(){if(this._isExteriorRing===void 0){let _=this.enclosingRing();this._isExteriorRing=_?!_.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let _=this.events[0];for(let P=1,D=this.events.length;P<D;P++){let W=this.events[P];mt.compare(_,W)>0&&(_=W)}let v=_.segment.prevInResult(),T=v?v.prevInResult():null;for(;;){if(!v)return null;if(!T)return v.ringOut;if(T.ringOut!==v.ringOut)return T.ringOut.enclosingRing()!==v.ringOut?v.ringOut:v.ringOut.enclosingRing();v=T.prevInResult(),T=v?v.prevInResult():null}}}class St{constructor(_){this.exteriorRing=_,_.poly=this,this.interiorRings=[]}addInterior(_){this.interiorRings.push(_),_.poly=this}getGeom(){let _=[this.exteriorRing.getGeom()];if(_[0]===null)return null;for(let v=0,T=this.interiorRings.length;v<T;v++){let P=this.interiorRings[v].getGeom();P!==null&&_.push(P)}return _}}class Pt{constructor(_){this.rings=_,this.polys=this._composePolys(_)}getGeom(){let _=[];for(let v=0,T=this.polys.length;v<T;v++){let P=this.polys[v].getGeom();P!==null&&_.push(P)}return _}_composePolys(_){let v=[];for(let T=0,P=_.length;T<P;T++){let D=_[T];if(!D.poly)if(D.isExteriorRing())v.push(new St(D));else{let W=D.enclosingRing();W.poly||v.push(new St(W)),W.poly.addInterior(D)}}return v}}class Nt{constructor(_){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dt.compare;this.queue=_,this.tree=new c(v),this.segments=[]}process(_){let v=_.segment,T=[];if(_.consumedBy)return _.isLeft?this.queue.remove(_.otherSE):this.tree.remove(v),T;let P=_.isLeft?this.tree.add(v):this.tree.find(v);if(!P)throw new Error(`Unable to find segment #${v.id} [${v.leftSE.point.x}, ${v.leftSE.point.y}] -> [${v.rightSE.point.x}, ${v.rightSE.point.y}] in SweepLine tree.`);let D=P,W=P,H,et;for(;H===void 0;)D=this.tree.prev(D),D===null?H=null:D.key.consumedBy===void 0&&(H=D.key);for(;et===void 0;)W=this.tree.next(W),W===null?et=null:W.key.consumedBy===void 0&&(et=W.key);if(_.isLeft){let tt=null;if(H){let I=H.getIntersection(v);if(I!==null&&(v.isAnEndpoint(I)||(tt=I),!H.isAnEndpoint(I))){let j=this._splitSafely(H,I);for(let Y=0,gt=j.length;Y<gt;Y++)T.push(j[Y])}}let _t=null;if(et){let I=et.getIntersection(v);if(I!==null&&(v.isAnEndpoint(I)||(_t=I),!et.isAnEndpoint(I))){let j=this._splitSafely(et,I);for(let Y=0,gt=j.length;Y<gt;Y++)T.push(j[Y])}}if(tt!==null||_t!==null){let I=null;tt===null?I=_t:_t===null?I=tt:I=mt.comparePoints(tt,_t)<=0?tt:_t,this.queue.remove(v.rightSE),T.push(v.rightSE);let j=v.split(I);for(let Y=0,gt=j.length;Y<gt;Y++)T.push(j[Y])}T.length>0?(this.tree.remove(v),T.push(_)):(this.segments.push(v),v.prev=H)}else{if(H&&et){let tt=H.getIntersection(et);if(tt!==null){if(!H.isAnEndpoint(tt)){let _t=this._splitSafely(H,tt);for(let I=0,j=_t.length;I<j;I++)T.push(_t[I])}if(!et.isAnEndpoint(tt)){let _t=this._splitSafely(et,tt);for(let I=0,j=_t.length;I<j;I++)T.push(_t[I])}}}this.tree.remove(v)}return T}_splitSafely(_,v){this.tree.remove(_);let T=_.rightSE;this.queue.remove(T);let P=_.split(v);return P.push(T),_.consumedBy===void 0&&this.tree.add(_),P}}let Ft=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,k=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class ee{run(_,v,T){Ht.type=_,w.reset();let P=[new Et(v,!0)];for(let I=0,j=T.length;I<j;I++)P.push(new Et(T[I],!1));if(Ht.numMultiPolys=P.length,Ht.type==="difference"){let I=P[0],j=1;for(;j<P.length;)m(P[j].bbox,I.bbox)!==null?j++:P.splice(j,1)}if(Ht.type==="intersection")for(let I=0,j=P.length;I<j;I++){let Y=P[I];for(let gt=I+1,xt=P.length;gt<xt;gt++)if(m(Y.bbox,P[gt].bbox)===null)return[]}let D=new c(mt.compare);for(let I=0,j=P.length;I<j;I++){let Y=P[I].getSweepEvents();for(let gt=0,xt=Y.length;gt<xt;gt++)if(D.insert(Y[gt]),D.size>Ft)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let W=new Nt(D),H=D.size,et=D.pop();for(;et;){let I=et.key;if(D.size===H){let Y=I.segment;throw new Error(`Unable to pop() ${I.isLeft?"left":"right"} SweepEvent [${I.point.x}, ${I.point.y}] from segment #${Y.id} [${Y.leftSE.point.x}, ${Y.leftSE.point.y}] -> [${Y.rightSE.point.x}, ${Y.rightSE.point.y}] from queue.`)}if(D.size>Ft)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(W.segments.length>k)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let j=W.process(I);for(let Y=0,gt=j.length;Y<gt;Y++){let xt=j[Y];xt.consumedBy===void 0&&D.insert(xt)}H=D.size,et=D.pop()}w.reset();let tt=ht.factory(W.segments);return new Pt(tt).getGeom()}}let Ht=new ee;var ct={union:function(B){for(var _=arguments.length,v=new Array(_>1?_-1:0),T=1;T<_;T++)v[T-1]=arguments[T];return Ht.run("union",B,v)},intersection:function(B){for(var _=arguments.length,v=new Array(_>1?_-1:0),T=1;T<_;T++)v[T-1]=arguments[T];return Ht.run("intersection",B,v)},xor:function(B){for(var _=arguments.length,v=new Array(_>1?_-1:0),T=1;T<_;T++)v[T-1]=arguments[T];return Ht.run("xor",B,v)},difference:function(B){for(var _=arguments.length,v=new Array(_>1?_-1:0),T=1;T<_;T++)v[T-1]=arguments[T];return Ht.run("difference",B,v)}};return ct}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Hh=0,Yl=1,Gh=2;var gs=1,Wh=2,ir=3,Ji=0,mn=1,yn=2,ci=0,sr=1,so=2,Zl=3,Jl=4,Xh=5;var xs=100,qh=101,Yh=102,Zh=103,Jh=104,$h=200,Kh=201,jh=202,Qh=203,$l=204,Kl=205,tf=206,ef=207,nf=208,sf=209,rf=210,of=211,af=212,cf=213,lf=214,ia=0,sa=1,ra=2,Gs=3,oa=4,aa=5,ca=6,la=7,Va=0,uf=1,hf=2,Yn=0,jl=1,Ql=2,tu=3,ro=4,eu=5,nu=6,iu=7;var su=300,$i=301,_s=302,Ha=303,Ga=304,oo=306,ls=1e3,ii=1001,ua=1002,qe=1003,ff=1004;var ao=1005;var Qe=1006,Wa=1007;var Ki=1008;var vn=1009,ru=1010,ou=1011,rr=1012,Xa=1013,Zn=1014,Jn=1015,$n=1016,qa=1017,Ya=1018,or=1020,au=35902,cu=35899,lu=1021,uu=1022,On=1023,ri=1026,ji=1027,hu=1028,Za=1029,Qi=1030,Ja=1031;var $a=1033,co=33776,lo=33777,uo=33778,ho=33779,Ka=35840,ja=35841,Qa=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37488,rc=37489,fo=37490,oc=37491,ac=37808,cc=37809,lc=37810,uc=37811,hc=37812,fc=37813,dc=37814,pc=37815,mc=37816,gc=37817,xc=37818,_c=37819,yc=37820,vc=37821,bc=36492,Sc=36494,Mc=36495,Ec=36283,wc=36284,po=36285,Tc=36286;var Ar=2300,ha=2301,ea=2302,Dl=2303,Nl=2400,Ul=2401,Fl=2402;var df=3200;var mo=0,pf=1,wi="",Fe="srgb",Rr="srgb-linear",Cr="linear",_e="srgb";var na=7680;var mf=519,gf=512,xf=513,_f=514,Ac=515,yf=516,vf=517,Rc=518,bf=519,fu=35044,Cc=35048;var du="300 es",Xn=2e3,Ws=2001;function Pp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){let i=Ir("canvas");return i.style.display="block",i}var sh={},Xs=null;function Pr(...i){let t="THREE."+i.shift();Xs?Xs("log",t,...i):console.log(t,...i)}function Mf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=Mf(i);let t="THREE."+i.shift();if(Xs)Xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Mf(i);let t="THREE."+i.shift();if(Xs)Xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function cs(...i){let t=i.join(" ");t in sh||(sh[t]=!0,Kt(...i))}function Ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wf={[ia]:sa,[ra]:ca,[oa]:la,[Gs]:aa,[sa]:ia,[ca]:ra,[la]:oa,[aa]:Gs},oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=1234567,Mr=Math.PI/180,qs=180/Math.PI;function si(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function pu(i,t){return(i%t+t)%t}function Dp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Np(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function Up(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function Fp(i,t=1){return t-Math.abs(pu(i,t*2)-t)}function Op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kp(i,t){return i+Math.random()*(t-i)}function Vp(i){return i*(.5-Math.random())}function Hp(i){i!==void 0&&(rh=i);let t=rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gp(i){return i*Mr}function Wp(i){return i*qs}function Xp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ie={DEG2RAD:Mr,RAD2DEG:qs,generateUUID:si,clamp:se,euclideanModulo:pu,mapLinear:Dp,inverseLerp:Np,lerp:Er,damp:Up,pingpong:Fp,smoothstep:Op,smootherstep:Bp,randInt:zp,randFloat:kp,randFloatSpread:Vp,seededRandom:Hp,degToRad:Gp,radToDeg:Wp,isPowerOfTwo:Xp,ceilPowerOfTwo:qp,floorPowerOfTwo:Yp,setQuaternionFromProperEuler:Zp,normalize:Se,denormalize:Wn},At=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,a=Math.sin(a*S)/A,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a;let S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new V,oh=new Nn,oe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],A=s[4],M=s[7],b=s[2],w=s[5],L=s[8];return r[0]=o*x+a*S+c*b,r[3]=o*m+a*A+c*w,r[6]=o*p+a*M+c*L,r[1]=l*x+u*S+f*b,r[4]=l*m+u*A+f*w,r[7]=l*p+u*M+f*L,r[2]=h*x+d*S+g*b,r[5]=h*m+d*A+g*w,r[8]=h*p+d*M+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cl.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cl.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cl=new oe,ah=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Cr,toXYZ:ah,fromXYZ:ch,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:ah,fromXYZ:ch,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var de=Jp();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Ir("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$p=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ll(s[o].image)):r.push(ll(s[o]))}else r=ll(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var Kp=0,ul=new V,dn=class i extends oi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ii,s=ii,r=Qe,o=Ki,a=On,c=vn,l=i.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=si(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=su;dn.DEFAULT_ANISOTROPY=1;var ye=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,M=(d+1)/2,b=(p+1)/2,w=(u+h)/4,L=(f+x)/4,y=(g+m)/4;return A>M&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=L/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-x)/S,this.z=(h-u)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},da=class extends oi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new dn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lr=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ge=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,Qp)}lookAt(t,e,n){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ni.crossVectors(n,Sn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ni.crossVectors(n,Sn)),Ni.normalize(),Co.crossVectors(Sn,Ni),s[0]=Ni.x,s[4]=Co.x,s[8]=Sn.x,s[1]=Ni.y,s[5]=Co.y,s[9]=Sn.y,s[2]=Ni.z,s[6]=Co.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],A=n[7],M=n[11],b=n[15],w=s[0],L=s[4],y=s[8],C=s[12],F=s[1],N=s[5],z=s[9],q=s[13],O=s[2],G=s[6],X=s[10],K=s[14],ut=s[3],nt=s[7],it=s[11],ot=s[15];return r[0]=o*w+a*F+c*O+l*ut,r[4]=o*L+a*N+c*G+l*nt,r[8]=o*y+a*z+c*X+l*it,r[12]=o*C+a*q+c*K+l*ot,r[1]=u*w+f*F+h*O+d*ut,r[5]=u*L+f*N+h*G+d*nt,r[9]=u*y+f*z+h*X+d*it,r[13]=u*C+f*q+h*K+d*ot,r[2]=g*w+x*F+m*O+p*ut,r[6]=g*L+x*N+m*G+p*nt,r[10]=g*y+x*z+m*X+p*it,r[14]=g*C+x*q+m*K+p*ot,r[3]=S*w+A*F+M*O+b*ut,r[7]=S*L+A*N+M*G+b*nt,r[11]=S*y+A*z+M*X+b*it,r[15]=S*C+A*q+M*K+b*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],S=c*d-l*h,A=a*d-l*f,M=a*h-c*f,b=o*d-l*u,w=o*h-c*u,L=o*f-a*u;return e*(x*S-m*A+p*M)-n*(g*S-m*b+p*w)+s*(g*A-x*b+p*L)-r*(g*M-x*w+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=e*a-n*o,A=e*c-s*o,M=e*l-r*o,b=n*c-s*a,w=n*l-r*a,L=s*l-r*c,y=u*x-f*g,C=u*m-h*g,F=u*p-d*g,N=f*m-h*x,z=f*p-d*x,q=h*p-d*m,O=S*q-A*z+M*N+b*F-w*C+L*y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/O;return t[0]=(a*q-c*z+l*N)*G,t[1]=(s*z-n*q-r*N)*G,t[2]=(x*L-m*w+p*b)*G,t[3]=(h*w-f*L-d*b)*G,t[4]=(c*F-o*q-l*C)*G,t[5]=(e*q-s*F+r*C)*G,t[6]=(m*M-g*L-p*A)*G,t[7]=(u*L-h*M+d*A)*G,t[8]=(o*z-a*F+l*y)*G,t[9]=(n*F-e*z-r*y)*G,t[10]=(g*w-x*M+p*S)*G,t[11]=(f*M-u*w-d*S)*G,t[12]=(a*C-o*N-c*y)*G,t[13]=(e*N-n*C+s*y)*G,t[14]=(x*A-g*b-m*S)*G,t[15]=(u*b-f*A+h*S)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,S=c*l,A=c*u,M=c*f,b=n.x,w=n.y,L=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+M)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(h+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+A)*L,s[9]=(m-S)*L,s[10]=(1-(h+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),c=Rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);let l=1/o,u=1/a,f=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Xn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Xn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Xn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Rs=new V,Vn=new ge,jp=new V(0,0,0),Qp=new V(1,1,1),Ni=new V,Co=new V,Sn=new V,lh=new ge,uh=new Nn,ai=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tm=0,hh=new V,Cs=new Nn,gi=new ge,Io=new V,xr=new V,em=new V,nm=new Nn,fh=new V(1,0,0),dh=new V(0,1,0),ph=new V(0,0,1),mh={type:"added"},im={type:"removed"},Is={type:"childadded",child:null},hl={type:"childremoved",child:null},Ye=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new ai,n=new Nn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new oe}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(xr,Io,this.up):gi.lookAt(Io,xr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(gi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),Is.child=t,this.dispatchEvent(Is),Is.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(im),hl.child=t,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,em),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,nm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new V(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Po={h:0,s:0,l:0};function fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=pu(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return de.workingToColorSpace(an.copy(this),t),Math.round(se(an.r*255,0,255))*65536+Math.round(se(an.g*255,0,255))*256+Math.round(se(an.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Fe){de.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Po);let n=Er(Ui.h,Po.h,e),s=Er(Ui.s,Po.s,e),r=Er(Ui.l,Po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new te;te.NAMES=Tf;var ki=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new V,xi=new V,dl=new V,_i=new V,Ps=new V,Ls=new V,gh=new V,pl=new V,ml=new V,gl=new V,xl=new ye,_l=new ye,yl=new ye,zi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),xi.subVectors(n,e),dl.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(xi),c=Hn.dot(dl),l=xi.dot(xi),u=xi.dot(dl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return xl.setScalar(0),_l.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),yl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),xi.subVectors(t,e),Hn.cross(xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Hn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Ls.subVectors(r,n),pl.subVectors(t,n);let c=Ps.dot(pl),l=Ls.dot(pl);if(c<=0&&l<=0)return e.copy(n);ml.subVectors(t,s);let u=Ps.dot(ml),f=Ls.dot(ml);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ps,o);gl.subVectors(t,r);let d=Ps.dot(gl),g=Ls.dot(gl);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ls,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return gh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(gh,a);let p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Be=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lo.copy(n.boundingBox)),Lo.applyMatrix4(t.matrixWorld),this.union(Lo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Do.subVectors(this.max,_r),Ds.subVectors(t.a,_r),Ns.subVectors(t.b,_r),Us.subVectors(t.c,_r),Fi.subVectors(Ns,Ds),Oi.subVectors(Us,Ns),ss.subVectors(Ds,Us);let e=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-ss.z,ss.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,ss.z,0,-ss.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-ss.y,ss.x,0];return!vl(e,Ds,Ns,Us,Do)||(e=[1,0,0,0,1,0,0,0,1],!vl(e,Ds,Ns,Us,Do))?!1:(No.crossVectors(Fi,Oi),e=[No.x,No.y,No.z],vl(e,Ds,Ns,Us,Do))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new V,new V,new V,new V,new V,new V,new V,new V],Gn=new V,Lo=new Be,Ds=new V,Ns=new V,Us=new V,Fi=new V,Oi=new V,ss=new V,_r=new V,Do=new V,No=new V,rs=new V;function vl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=t.dot(rs),l=e.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ue=new V,Uo=new At,rm=0,Oe=class extends oi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Dr=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Nr=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},om=new Be,yr=new V,bl=new V,Un=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):om.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(bl)),this.expandByPoint(yr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},am=0,Ln=new ge,Sl=new Ye,Fs=new V,Mn=new Be,vr=new Be,Xe=new V,ve=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pp(t)?Nr:Dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Mn.min,vr.min),Mn.expandByPoint(Xe),Xe.addVectors(Mn.max,vr.max),Mn.expandByPoint(Xe)):(Mn.expandByPoint(vr.min),Mn.expandByPoint(vr.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xe.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),Xe.add(Fs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new V,c[y]=new V;let l=new V,u=new V,f=new V,h=new At,d=new At,g=new At,x=new V,m=new V;function p(y,C,F){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,F),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,F),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[y].add(x),a[C].add(x),a[F].add(x),c[y].add(m),c[C].add(m),c[F].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,C=S.length;y<C;++y){let F=S[y],N=F.start,z=F.count;for(let q=N,O=N+z;q<O;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let A=new V,M=new V,b=new V,w=new V;function L(y){b.fromBufferAttribute(s,y),w.copy(b);let C=a[y];A.copy(C),A.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(w,C);let N=M.dot(c[y])<0?-1:1;o.setXYZW(y,A.x,A.y,A.z,N)}for(let y=0,C=S.length;y<C;++y){let F=S[y],N=F.start,z=F.count;for(let q=N,O=N+z;q<O;q+=3)L(t.getX(q+0)),L(t.getX(q+1)),L(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Oe(h,u,f)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ur=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},hn=new V,Fn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Pr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Pr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ml=new V,cm=new V,lm=new oe,En=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lm.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},um=0,qn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=si(),this.name="",this.type="Material",this.blending=sr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Kl,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new V,El=new V,Fo=new V,Oo=new V,us=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){El.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),a=Oo.dot(this.direction),c=-Oo.dot(Fo),l=Oo.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(El).addScaledVector(Fo,h),d}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,S=n.y-o.y,A=n.z-o.z,M=Math.abs(c),b=Math.abs(l),w=Math.abs(u),L,y,C,F,N,z,q,O,G,X,K,ut;if(M>=b&&M>=w?(C=c,z=f,G=g,ut=p,c>=0?(L=l,y=u,F=h,N=d,q=x,O=m,X=S,K=A):(L=u,y=l,F=d,N=h,q=m,O=x,X=A,K=S)):b>=w?(C=l,z=h,G=x,ut=S,l>=0?(L=u,y=c,F=d,N=f,q=m,O=g,X=A,K=p):(L=c,y=u,F=f,N=d,q=g,O=m,X=p,K=A)):(C=u,z=d,G=m,ut=A,u>=0?(L=c,y=l,F=f,N=h,q=g,O=x,X=p,K=S):(L=l,y=c,F=h,N=f,q=x,O=g,X=S,K=p)),C===0)return null;let nt=L/C,it=y/C,ot=1/C,Tt=F-nt*z,Rt=N-it*z,Zt=q-nt*G,Jt=O-it*G,$t=X-nt*ut,at=K-it*ut,pt=$t*Jt-at*Zt,Ct=Tt*at-Rt*$t,Ot=Zt*Rt-Jt*Tt;if(s){if(pt<0||Ct<0||Ot<0)return null}else if((pt<0||Ct<0||Ot<0)&&(pt>0||Ct>0||Ot>0))return null;let vt=pt+Ct+Ot;if(vt===0)return null;let mt=ot*(pt*z+Ct*G+Ot*ut);return(vt>0?mt<0:mt>0)?null:this.at(mt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xh=new ge,os=new us,Bo=new Un,_h=new V,zo=new V,ko=new V,Vo=new V,wl=new V,Ho=new V,yh=new V,Go=new V,he=class extends Ye{constructor(t=new ve,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(wl.fromBufferAttribute(f,t),o?Ho.addScaledVector(wl,u):Ho.addScaledVector(wl.sub(e),u))}e.add(Ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Bo.containsPoint(os.origin)===!1&&(os.intersectSphere(Bo,_h)===null||os.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(xh.copy(r).invert(),os.copy(t.ray).applyMatrix4(xh),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,b=A;M<b;M+=3){let w=a.getX(M),L=a.getX(M+1),y=a.getX(M+2);s=Wo(this,p,t,n,l,u,f,w,L,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Wo(this,o,t,n,l,u,f,S,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,b=A;M<b;M+=3){let w=M,L=M+1,y=M+2;s=Wo(this,p,t,n,l,u,f,w,L,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=m,A=m+1,M=m+2;s=Wo(this,o,t,n,l,u,f,S,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function hm(i,t,e,n,s,r,o,a){let c;if(t.side===mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ji,a),c===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Go);return l<e.near||l>e.far?null:{distance:l,point:Go.clone(),object:i}}function Wo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,zo),i.getVertexPosition(c,ko),i.getVertexPosition(l,Vo);let u=hm(i,t,e,n,zo,ko,Vo,yh);if(u){let f=new V;zi.getBarycoord(yh,zo,ko,Vo,f),s&&(u.uv=zi.getInterpolatedAttribute(s,a,c,l,f,new At)),r&&(u.uv1=zi.getInterpolatedAttribute(r,a,c,l,f,new At)),o&&(u.normal=zi.getInterpolatedAttribute(o,a,c,l,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new V,materialIndex:0};zi.getNormal(zo,ko,Vo,h.normal),u.face=h,u.barycoord=f}return u}var ma=class extends dn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=qe,u=qe,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=new Un,fm=new At(.5,.5),Xo=new V,$s=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],A=r[13],M=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,p-g,b-S).normalize(),s[1].setComponents(l+o,d+u,p+g,b+S).normalize(),s[2].setComponents(l+a,d+f,p+x,b+A).normalize(),s[3].setComponents(l-a,d-f,p-x,b-A).normalize(),n)s[4].setComponents(c,h,m,M).normalize(),s[5].setComponents(l-c,d-h,p-m,b-M).normalize();else if(s[4].setComponents(l-c,d-h,p-m,b-M).normalize(),e===Xn)s[5].setComponents(l+c,d+h,p+m,b+M).normalize();else if(e===Ws)s[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=fm.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Xo.x=s.normal.x>0?t.max.x:t.min.x,Xo.y=s.normal.y>0?t.max.y:t.min.y,Xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new V,xa=new V,vh=new ge,br=new us,qo=new Un,Tl=new V,bh=new V,_a=class extends Ye{constructor(t=new ve,e=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ga.distanceTo(xa);t.setAttribute("lineDistance",new re(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,t.ray.intersectsSphere(qo)===!1)return;vh.copy(s).invert(),br.copy(t.ray).applyMatrix4(vh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=u.getX(x),S=u.getX(x+1),A=Yo(this,t,br,c,p,S,x);A&&e.push(A)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Yo(this,t,br,c,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=Yo(this,t,br,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Yo(this,t,br,c,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ga.fromBufferAttribute(a,s),xa.fromBufferAttribute(a,r),e.distanceSqToSegment(ga,xa,Tl,bh)>n)return;Tl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Tl);if(!(l<t.near||l>t.far))return{distance:l,point:bh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Sh=new V,Mh=new V,Fr=class extends _a{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Sh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sh.distanceTo(Mh);t.setAttribute("lineDistance",new re(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var js=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eh=new ge,Ol=new us,Zo=new Un,Jo=new V,Or=class extends Ye{constructor(t=new ve,e=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;Eh.copy(s).invert(),Ol.copy(t.ray).applyMatrix4(Eh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let m=l.getX(g);Jo.fromBufferAttribute(f,m),wh(Jo,m,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)Jo.fromBufferAttribute(f,g),wh(Jo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wh(i,t,e,n,s,r,o){let a=Ol.distanceSqToPoint(i);if(a<e){let c=new V;Ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Br=class extends dn{constructor(t=[],e=$i,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qs=class extends dn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends dn{constructor(t,e,n=Zn,s,r,o,a=qe,c=qe,l,u=ri,f=1){if(u!==ri&&u!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ya=class extends Vi{constructor(t,e=Zn,n=$i,s,r,o=qe,a=qe,c,l=ri){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ke=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function g(x,m,p,S,A,M,b,w,L,y,C){let F=M/L,N=b/y,z=M/2,q=b/2,O=w/2,G=L+1,X=y+1,K=0,ut=0,nt=new V;for(let it=0;it<X;it++){let ot=it*N-q;for(let Tt=0;Tt<G;Tt++){let Rt=Tt*F-z;nt[x]=Rt*S,nt[m]=ot*A,nt[p]=O,l.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=w>0?1:-1,u.push(nt.x,nt.y,nt.z),f.push(Tt/L),f.push(1-it/y),K+=1}}for(let it=0;it<y;it++)for(let ot=0;ot<L;ot++){let Tt=h+ot+G*it,Rt=h+ot+G*(it+1),Zt=h+(ot+1)+G*(it+1),Jt=h+(ot+1)+G*it;c.push(Tt,Rt,Jt),c.push(Rt,Zt,Jt),ut+=6}a.addGroup(d,ut,C),d+=ut,h+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var kr=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new V,u=new At;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hs=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;S(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function S(){let M=new V,b=new V,w=0,L=(e-t)/n;for(let y=0;y<=r;y++){let C=[],F=y/r,N=F*(e-t)+t;for(let z=0;z<=s;z++){let q=z/s,O=q*c+a,G=Math.sin(O),X=Math.cos(O);b.x=N*G,b.y=-F*n+m,b.z=N*X,f.push(b.x,b.y,b.z),M.set(G,L,X).normalize(),h.push(M.x,M.y,M.z),d.push(q,1-F),C.push(g++)}x.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){let F=x[C][y],N=x[C+1][y],z=x[C+1][y+1],q=x[C][y+1];(t>0||C!==0)&&(u.push(F,N,q),w+=3),(e>0||C!==r-1)&&(u.push(N,z,q),w+=3)}l.addGroup(p,w,0),p+=w}function A(M){let b=g,w=new At,L=new V,y=0,C=M===!0?t:e,F=M===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*F,0),h.push(0,F,0),d.push(.5,.5),g++;let N=g;for(let z=0;z<=s;z++){let O=z/s*c+a,G=Math.cos(O),X=Math.sin(O);L.x=C*X,L.y=m*F,L.z=C*G,f.push(L.x,L.y,L.z),h.push(0,F,0),w.x=G*.5+.5,w.y=X*.5*F+.5,d.push(w.x,w.y),g++}for(let z=0;z<s;z++){let q=b+z,O=N+z;M===!0?u.push(O,O+1,q):u.push(O+1,O,q),y+=3}l.addGroup(p,y,M===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new At:new V);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,s=[],r=[],o=[],a=new V,c=new ge;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tr=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},va=class extends tr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Th=new V,Ah=new V,Al=new mu,Rl=new mu,Cl=new mu,ba=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ah.subVectors(s[0],s[1]).add(s[0]),l=Ah);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Th.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Th),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Al.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),Rl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Cl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Rl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Cl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Al.calc(c),Rl.calc(c),Cl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function dm(i,t){let e=1-i;return e*e*t}function pm(i,t){return 2*(1-i)*i*t}function mm(i,t){return i*i*t}function wr(i,t,e,n){return dm(i,t)+pm(i,e)+mm(i,n)}function gm(i,t){let e=1-i;return e*e*e*t}function xm(i,t){let e=1-i;return 3*e*e*i*t}function _m(i,t){return 3*(1-i)*i*i*t}function ym(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return gm(i,t)+xm(i,e)+_m(i,n)+ym(i,s)}var Vr=class extends wn{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sa=class extends wn{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y),Tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends wn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends wn{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends wn{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ea=class extends wn{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(wr(t,s.x,r.x,o.x),wr(t,s.y,r.y,o.y),wr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Rh(a,c.x,l.x,u.x,f.x),Rh(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:va,CatmullRomCurve3:ba,CubicBezierCurve:Vr,CubicBezierCurve3:Sa,EllipseCurve:tr,LineCurve:Hr,LineCurve3:Ma,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:Ea,SplineCurve:Wr}),wa=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Bl[s.type]().fromJSON(s))}return this}},fs=class extends wa{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hr(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Gr(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Vr(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new tr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tn=class extends fs{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fs().fromJSON(s))}return this}};function vm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Af(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=wm(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Xr(r,o,e,a,c,l,0),o}function Af(i,t,e,n,s){let r;if(s===Fm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ch(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ch(o/n|0,i[o],i[o+1],r);return r&&er(r,r.next)&&(Yr(r),r=r.next),r}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(er(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Im(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Sm(i,n,s,r):bm(i)){t.push(c.i,i.i,l.i),Yr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Mm(ds(i),t),Xr(i,t,e,n,s,r,2)):o===2&&Em(i,t,e,n,s,r):Xr(ds(i),t,e,n,s,r,1);break}}}function bm(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Sr(s,a,r,c,o,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(u,f,h),x=Math.max(a,c,l),m=Math.max(u,f,h),p=zl(d,g,t,e,n),S=zl(x,m,t,e,n),A=i.prevZ,M=i.nextZ;for(;A&&A.z>=p&&M&&M.z<=S;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Sr(a,u,c,f,l,h,A.x,A.y)&&Ce(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Sr(a,u,c,f,l,h,M.x,M.y)&&Ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Sr(a,u,c,f,l,h,A.x,A.y)&&Ce(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Sr(a,u,c,f,l,h,M.x,M.y)&&Ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Mm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!er(n,s)&&Cf(n,e,e.next,s)&&qr(n,s)&&qr(s,n)&&(t.push(n.i,e.i,s.i),Yr(e),Yr(e.next),e=i=s),e=e.next}while(e!==i);return ds(e)}function Em(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dm(o,a)){let c=If(o,a);o=ds(o,o.next),c=ds(c,c.next),Xr(o,t,e,n,s,r,0),Xr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Af(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Lm(l))}s.sort(Tm);for(let r=0;r<s.length;r++)e=Am(s[r],e);return e}function Tm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Am(i,t){let e=Rm(i,t);if(!e)return t;let n=If(e,i);return ds(n,n.next),ds(e,e.next)}function Rm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(er(i,e))return e;do{if(er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Rf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);qr(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Cm(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Cm(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Im(i,t,e,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pm(s)}function Pm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Sr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Rf(i,t,e,n,s,r,o,a)}function Dm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Nm(i,t)&&(qr(i,t)&&qr(t,i)&&Um(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||er(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function er(i,t){return i.x===t.x&&i.y===t.y}function Cf(i,t,e,n){let s=Ko(Ce(i,t,e)),r=Ko(Ce(i,t,n)),o=Ko(Ce(e,n,i)),a=Ko(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&$o(i,e,t)||r===0&&$o(i,n,t)||o===0&&$o(e,i,n)||a===0&&$o(e,t,n))}function $o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ko(i){return i>0?1:i<0?-1:0}function Nm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Um(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function If(i,t){let e=kl(i.i,i.x,i.y),n=kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ch(i,t,e,n){let s=kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vl=class{static triangulate(t,e,n=2){return vm(t,e,n)}},Dn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ih(t),Ph(n,t);let o=t.length;e.forEach(Ih);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ph(n,e[c]);let a=Vl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ih(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Si=class i extends ve{constructor(t=new Tn([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Om,A,M=!1,b,w,L,y;if(p){A=p.getSpacedPoints(u),M=!0,h=!1;let dt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,dt),w=new V,L=new V,y=new V}h||(m=0,d=0,g=0,x=0);let C=a.extractPoints(l),F=C.shape,N=C.holes;if(!Dn.isClockWise(F)){F=F.reverse();for(let dt=0,yt=N.length;dt<yt;dt++){let bt=N[dt];Dn.isClockWise(bt)&&(N[dt]=bt.reverse())}}function q(dt){let bt=10000000000000001e-36,Et=dt[0];for(let ht=1;ht<=dt.length;ht++){let St=ht%dt.length,Pt=dt[St],Nt=Pt.x-Et.x,Ft=Pt.y-Et.y,k=Nt*Nt+Ft*Ft,ee=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(Et.x),Math.abs(Et.y)),Ht=bt*ee*ee;if(k<=Ht){dt.splice(St,1),ht--;continue}Et=Pt}}q(F),N.forEach(q);let O=N.length,G=F;for(let dt=0;dt<O;dt++){let yt=N[dt];F=F.concat(yt)}function X(dt,yt,bt){return yt||Qt("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(yt,bt)}let K=F.length;function ut(dt,yt,bt){let Et,ht,St,Pt=dt.x-yt.x,Nt=dt.y-yt.y,Ft=bt.x-dt.x,k=bt.y-dt.y,ee=Pt*Pt+Nt*Nt,Ht=Pt*k-Nt*Ft;if(Math.abs(Ht)>Number.EPSILON){let U=Math.sqrt(ee),E=Math.sqrt(Ft*Ft+k*k),$=yt.x-Nt/U,Q=yt.y+Pt/U,ct=bt.x-k/E,B=bt.y+Ft/E,_=((ct-$)*k-(B-Q)*Ft)/(Pt*k-Nt*Ft);Et=$+Pt*_-dt.x,ht=Q+Nt*_-dt.y;let v=Et*Et+ht*ht;if(v<=2)return new At(Et,ht);St=Math.sqrt(v/2)}else{let U=!1;Pt>Number.EPSILON?Ft>Number.EPSILON&&(U=!0):Pt<-Number.EPSILON?Ft<-Number.EPSILON&&(U=!0):Math.sign(Nt)===Math.sign(k)&&(U=!0),U?(Et=-Nt,ht=Pt,St=Math.sqrt(ee)):(Et=Pt,ht=Nt,St=Math.sqrt(ee/2))}return new At(Et/St,ht/St)}let nt=[];for(let dt=0,yt=G.length,bt=yt-1,Et=dt+1;dt<yt;dt++,bt++,Et++)bt===yt&&(bt=0),Et===yt&&(Et=0),nt[dt]=ut(G[dt],G[bt],G[Et]);let it=[],ot,Tt=nt.concat();for(let dt=0,yt=O;dt<yt;dt++){let bt=N[dt];ot=[];for(let Et=0,ht=bt.length,St=ht-1,Pt=Et+1;Et<ht;Et++,St++,Pt++)St===ht&&(St=0),Pt===ht&&(Pt=0),ot[Et]=ut(bt[Et],bt[St],bt[Pt]);it.push(ot),Tt=Tt.concat(ot)}let Rt;if(m===0)Rt=Dn.triangulateShape(G,N);else{let dt=[],yt=[];for(let bt=0;bt<m;bt++){let Et=bt/m,ht=d*Math.cos(Et*Math.PI/2),St=g*Math.sin(Et*Math.PI/2)+x;for(let Pt=0,Nt=G.length;Pt<Nt;Pt++){let Ft=X(G[Pt],nt[Pt],St);Ct(Ft.x,Ft.y,-ht),Et===0&&dt.push(Ft)}for(let Pt=0,Nt=O;Pt<Nt;Pt++){let Ft=N[Pt];ot=it[Pt];let k=[];for(let ee=0,Ht=Ft.length;ee<Ht;ee++){let U=X(Ft[ee],ot[ee],St);Ct(U.x,U.y,-ht),Et===0&&k.push(U)}Et===0&&yt.push(k)}}Rt=Dn.triangulateShape(dt,yt)}let Zt=Rt.length,Jt=g+x;for(let dt=0;dt<K;dt++){let yt=h?X(F[dt],Tt[dt],Jt):F[dt];M?(L.copy(b.normals[0]).multiplyScalar(yt.x),w.copy(b.binormals[0]).multiplyScalar(yt.y),y.copy(A[0]).add(L).add(w),Ct(y.x,y.y,y.z)):Ct(yt.x,yt.y,0)}for(let dt=1;dt<=u;dt++)for(let yt=0;yt<K;yt++){let bt=h?X(F[yt],Tt[yt],Jt):F[yt];M?(L.copy(b.normals[dt]).multiplyScalar(bt.x),w.copy(b.binormals[dt]).multiplyScalar(bt.y),y.copy(A[dt]).add(L).add(w),Ct(y.x,y.y,y.z)):Ct(bt.x,bt.y,f/u*dt)}for(let dt=m-1;dt>=0;dt--){let yt=dt/m,bt=d*Math.cos(yt*Math.PI/2),Et=g*Math.sin(yt*Math.PI/2)+x;for(let ht=0,St=G.length;ht<St;ht++){let Pt=X(G[ht],nt[ht],Et);Ct(Pt.x,Pt.y,f+bt)}for(let ht=0,St=N.length;ht<St;ht++){let Pt=N[ht];ot=it[ht];for(let Nt=0,Ft=Pt.length;Nt<Ft;Nt++){let k=X(Pt[Nt],ot[Nt],Et);M?Ct(k.x,k.y+A[u-1].y,A[u-1].x+bt):Ct(k.x,k.y,f+bt)}}}$t(),at();function $t(){let dt=s.length/3;if(h){let yt=0,bt=K*yt;for(let Et=0;Et<Zt;Et++){let ht=Rt[Et];Ot(ht[2]+bt,ht[1]+bt,ht[0]+bt)}yt=u+m*2,bt=K*yt;for(let Et=0;Et<Zt;Et++){let ht=Rt[Et];Ot(ht[0]+bt,ht[1]+bt,ht[2]+bt)}}else{for(let yt=0;yt<Zt;yt++){let bt=Rt[yt];Ot(bt[2],bt[1],bt[0])}for(let yt=0;yt<Zt;yt++){let bt=Rt[yt];Ot(bt[0]+K*u,bt[1]+K*u,bt[2]+K*u)}}n.addGroup(dt,s.length/3-dt,0)}function at(){let dt=s.length/3,yt=0;pt(G,yt),yt+=G.length;for(let bt=0,Et=N.length;bt<Et;bt++){let ht=N[bt];pt(ht,yt),yt+=ht.length}n.addGroup(dt,s.length/3-dt,1)}function pt(dt,yt){let bt=dt.length;for(;--bt>=0;){let Et=bt,ht=bt-1;ht<0&&(ht=dt.length-1);for(let St=0,Pt=u+m*2;St<Pt;St++){let Nt=K*St,Ft=K*(St+1),k=yt+Et+Nt,ee=yt+ht+Nt,Ht=yt+ht+Ft,U=yt+Et+Ft;vt(k,ee,Ht,U)}}}function Ct(dt,yt,bt){c.push(dt),c.push(yt),c.push(bt)}function Ot(dt,yt,bt){mt(dt),mt(yt),mt(bt);let Et=s.length/3,ht=S.generateTopUV(n,s,Et-3,Et-2,Et-1);Bt(ht[0]),Bt(ht[1]),Bt(ht[2])}function vt(dt,yt,bt,Et){mt(dt),mt(yt),mt(Et),mt(yt),mt(bt),mt(Et);let ht=s.length/3,St=S.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);Bt(St[0]),Bt(St[1]),Bt(St[3]),Bt(St[1]),Bt(St[2]),Bt(St[3])}function mt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function Bt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Bl[s.type]().fromJSON(s)),new i(n,t.options)}},Om={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new At(r,o),new At(a,c),new At(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new At(o,1-c),new At(l,1-f),new At(h,1-g),new At(x,1-p)]:[new At(a,1-c),new At(u,1-f),new At(d,1-g),new At(m,1-p)]}};function Bm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Zr=class i extends ve{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new V,h=new At,d=new V,g=new V,x=new V,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let S=0;S<=e;S++){let A=n+S*u*s,M=Math.sin(A),b=Math.cos(A);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*M,f.y=t[w].y,f.z=t[w].x*b,o.push(f.x,f.y,f.z),h.x=S/e,h.y=w/(t.length-1),a.push(h.x,h.y);let L=c[3*w+0]*M,y=c[3*w+1],C=c[3*w+0]*b;l.push(L,y,C)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){let M=A+S*t.length,b=M,w=M+t.length,L=M+t.length+1,y=M+1;r.push(b,w,y),r.push(L,y,w)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mi=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let S=p*h-o;for(let A=0;A<l;A++){let M=A*f-r;g.push(M,-S,0),x.push(0,0,1),m.push(A/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let A=S+l*p,M=S+l*(p+1),b=S+1+l*(p+1),w=S+1+l*p;d.push(A,M,w),d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Jr=class i extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new V,g=new At;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let S=p+m,A=S,M=S+n+1,b=S+n+2,w=S+1;a.push(A,M,w),a.push(M,b,w)}}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Hi=class i extends ve{constructor(t=new Tn([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,g=h.holes;Dn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Dn.isClockWise(S)===!0&&(g[m]=S.reverse())}let x=Dn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){let S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){let S=x[m],A=S[0]+f,M=S[1]+f,b=S[2]+f;n.push(A,M,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return zm(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function zm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pn=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new V,h=new V,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,M=o+A*a,b=t*Math.cos(M),w=Math.sqrt(t*t-b*b),L=0;p===0&&o===0?L=.5/e:p===n&&c===Math.PI&&(L=-.5/e);for(let y=0;y<=e;y++){let C=y/e,F=s+C*r;f.x=-w*Math.cos(F),f.y=b,f.z=w*Math.sin(F),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(C+L,1-A),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let A=u[p][S+1],M=u[p][S],b=u[p+1][S],w=u[p+1][S+1];(p!==0||o>0)&&d.push(A,M,w),(p!==n-1||c<Math.PI)&&d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ei=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new V,d=new V,g=new V;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let S=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(S),d.y=(t+e*Math.cos(m))*Math.sin(S),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,S=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,M=(s+1)*x+m;c.push(p,S,M),c.push(S,A,M)}this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var $r=class extends ve{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new V,r=new V;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let g=h,x=h+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),S=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,S),Lh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Lh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new re(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Lh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dh(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function Dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function km(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var go={clone:ys,merge:cn},Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ta=class extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ps=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Aa=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ra=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Il(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ca=class extends Gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ul:r=t,a=2*e-n;break;case Fl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ul:o=t,c=2*n-e;break;case Fl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,S=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,A=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+S*o[l+b]+A*o[c+b]+M*o[f+b];return r}},Ia=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Pa=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},La=class extends Gi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=d*h+g*2,S=f[p],A=f[p+1],M=t*h+g*2,b=u[M],w=u[M+1],L=Wm(n,e,S,b,s);r[g]=Pf(L,x,A,w,m)}return r}};function Pf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Wm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Pf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Gm(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Il(t.settings)&&(n.settings={inTangents:Os(t.settings.inTangents,Array),outTangents:Os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new La(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break;case Dl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return ea;case this.InterpolantFactoryMethodBezier:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Il(this.settings)&&(Nh(this.settings.inTangents,t),Nh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Qt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Lp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ha;var Wi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ar;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Da.prototype.ValueTypeName="color";var Na=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="number";var Ua=class extends Gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Nn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Kr=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ar;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Rn{constructor(t,e,n,s){super(t,e,n,s)}};Fa.prototype.ValueTypeName="vector";var Oa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lf=new Oa,Ba=class{constructor(t){this.manager=t!==void 0?t:Lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ms=class extends nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Pl=new ge,Uh=new V,Fh=new V,jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Pl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jo=new V,Qo=new Nn,ni=new V,Qr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jo,Qo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Qo,ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(jo,Qo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Qo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new V,Oh=new At,Bh=new At,fn=class extends Qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Bh),e.subVectors(Bh,Oh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hl=class extends jr{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},to=class extends nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qi=class extends Qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gl=class extends jr{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var eo=class extends ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Bs=-90,zs=1,za=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Bs,zs,t,e);s.layers=this.layers,this.add(s);let r=new fn(Bs,zs,t,e);r.layers=this.layers,this.add(r);let o=new fn(Bs,zs,t,e);o.layers=this.layers,this.add(o);let a=new fn(Bs,zs,t,e);a.layers=this.layers,this.add(a);let c=new fn(Bs,zs,t,e);c.layers=this.layers,this.add(c);let l=new fn(Bs,zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ka=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xu="\\[\\]\\.:\\/",Xm=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",qm="[^"+xu.replace("\\.","")+"]",Ym=/((?:WC+[\/:])*)/.source.replace("WC",_u),Zm=/(WCOD+)?/.source.replace("WCOD",qm),Jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),$m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),Km=new RegExp("^"+Ym+Zm+Jm+$m+"$"),jm=["material","materials","bones","map"],Wl=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xm,"")}static parseTrackName(t){let e=Km.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Wl;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Db=new Float32Array(1);var Zi=class extends Ur{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var zh=new ge,no=class{constructor(t,e,n=0,s=1/0){this.ray=new us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(t,e=!0,n=[]){return Xl(t,this,n,e),n.sort(kh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xl(t[s],this,n,e);return n.sort(kh),n}};function kh(i,t){return i.distance-t.distance}function Xl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Xl(r[o],t,e,!0)}}var ql=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Vh=new V,ta=new V,ks=new V,Vs=new V,Ll=new V,Qm=new V,tg=new V,io=class{constructor(t=new V,e=new V){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Vh.subVectors(t,this.start),ta.subVectors(this.end,this.start);let n=ta.dot(ta);if(n===0)return 0;let r=ta.dot(Vh)/n;return e&&(r=se(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Qm,n=tg){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;ks.subVectors(l,a),Vs.subVectors(u,c),Ll.subVectors(a,c);let f=ks.dot(ks),h=Vs.dot(Vs),d=Vs.dot(Ll);if(f<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(f<=s)r=0,o=d/h,o=se(o,0,1);else{let g=ks.dot(Ll);if(h<=s)o=0,r=se(-g/f,0,1);else{let x=ks.dot(Vs),m=f*h-x*x;m!==0?r=se((x*d-g*h)/m,0,1):r=0,o=(x*r+d)/h,o<0?(o=0,r=se(-g/f,0,1)):o>1&&(o=1,r=se((x-g)/f,0,1))}}return e.copy(a).addScaledVector(ks,r),n.copy(c).addScaledVector(Vs,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function yu(i,t,e,n){let s=eg(n);switch(e){case lu:return i*t;case hu:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case Qi:return i*t*2/s.components*s.byteLength;case Ja:return i*t*2/s.components*s.byteLength;case uu:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case $a:return i*t*4/s.components*s.byteLength;case co:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case Qa:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:case sc:case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:case fo:case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case bc:case Sc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ec:case wc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case po:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eg(i){switch(i){case vn:case ru:return{byteLength:1,components:1};case rr:case ou:case $n:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case Zn:case Xa:case Jn:return{byteLength:4,components:1};case au:case cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function td(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ag(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pg=`#ifdef USE_AOMAP
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
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
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
#endif`,xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,Sg=`#ifdef USE_BUMPMAP
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
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pg=`#define PI 3.141592653589793
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
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
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
#endif`,o0=`uniform sampler2D dfgLUT;
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
}`,a0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,h0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,$0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,xx=`#define DISTANCE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`uniform float scale;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Ex=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 color;
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
}`,kx=`uniform float rotation;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:cg,alphahash_pars_fragment:lg,alphamap_fragment:ug,alphamap_pars_fragment:hg,alphatest_fragment:fg,alphatest_pars_fragment:dg,aomap_fragment:pg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:xg,begin_vertex:_g,beginnormal_vertex:yg,bsdfs:vg,iridescence_fragment:bg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:wg,clipping_planes_vertex:Tg,color_fragment:Ag,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Ig,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:Ng,displacementmap_vertex:Ug,emissivemap_fragment:Fg,emissivemap_pars_fragment:Og,colorspace_fragment:Bg,colorspace_pars_fragment:zg,envmap_fragment:kg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:t0,envmap_vertex:Wg,fog_vertex:Xg,fog_pars_vertex:qg,fog_fragment:Yg,fog_pars_fragment:Zg,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:$g,lights_lambert_fragment:Kg,lights_lambert_pars_fragment:jg,lights_pars_begin:Qg,lights_toon_fragment:e0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:c0,lights_fragment_end:l0,lightprobes_pars_fragment:u0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:x0,map_particle_pars_fragment:_0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:v0,morphinstance_vertex:b0,morphcolor_vertex:S0,morphnormal_vertex:M0,morphtarget_pars_vertex:E0,morphtarget_vertex:w0,normal_fragment_begin:T0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:I0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:D0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:U0,opaque_fragment:F0,packing:O0,premultiplied_alpha_fragment:B0,project_vertex:z0,dithering_fragment:k0,dithering_pars_fragment:V0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:G0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:X0,shadowmap_vertex:q0,shadowmask_pars_fragment:Y0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:$0,skinnormal_vertex:K0,specularmap_fragment:j0,specularmap_pars_fragment:Q0,tonemapping_fragment:tx,tonemapping_pars_fragment:ex,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:rx,uv_vertex:ox,worldpos_vertex:ax,background_vert:cx,background_frag:lx,backgroundCube_vert:ux,backgroundCube_frag:hx,cube_vert:fx,cube_frag:dx,depth_vert:px,depth_frag:mx,distance_vert:gx,distance_frag:xx,equirect_vert:_x,equirect_frag:yx,linedashed_vert:vx,linedashed_frag:bx,meshbasic_vert:Sx,meshbasic_frag:Mx,meshlambert_vert:Ex,meshlambert_frag:wx,meshmatcap_vert:Tx,meshmatcap_frag:Ax,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Ix,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Dx,meshtoon_vert:Nx,meshtoon_frag:Ux,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:zx,sprite_vert:kx,sprite_frag:Vx},Dt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},gn={basic:{uniforms:cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:cn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:cn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new te(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:cn([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:cn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:cn([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:cn([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:cn([Dt.common,Dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:cn([Dt.lights,Dt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};gn.physical={uniforms:cn([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Ic={r:0,b:0,g:0},Hx=new ge,ed=new oe;ed.set(-1,0,0,0,1,0,0,0,1);function Gx(i,t,e,n,s,r){let o=new te(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let M=S.backgroundBlurriness>0;A=t.get(A,M)}return A}function g(S){let A=!1,M=d(S);M===null?m(o,a):M&&M.isColor&&(m(M,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,A){let M=d(A);M&&(M.isCubeTexture||M.mapping===oo)?(l===void 0&&(l=new he(new ke(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ys(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ed),l.material.toneMapped=de.getTransfer(M.colorSpace)!==_e,(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new he(new Mi(2,2),new tn({name:"BackgroundMaterial",uniforms:ys(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=de.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,A){S.getRGB(Ic,gu(i)),e.buffers.color.setClear(Ic.r,Ic.g,Ic.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Wx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(N,z,q,O,G){let X=!1,K=f(N,O,q,z);r!==K&&(r=K,l(r.object)),X=d(N,O,q,G),X&&g(N,O,q,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(N,z,q,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function f(N,z,q,O){let G=O.wireframe===!0,X=n[z.id];X===void 0&&(X={},n[z.id]=X);let K=N.isInstancedMesh===!0?N.id:0,ut=X[K];ut===void 0&&(ut={},X[K]=ut);let nt=ut[q.id];nt===void 0&&(nt={},ut[q.id]=nt);let it=nt[G];return it===void 0&&(it=h(c()),nt[G]=it),it}function h(N){let z=[],q=[],O=[];for(let G=0;G<e;G++)z[G]=0,q[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:O,object:N,attributes:{},index:null}}function d(N,z,q,O){let G=r.attributes,X=z.attributes,K=0,ut=q.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let ot=G[nt],Tt=X[nt];if(Tt===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(Tt=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(Tt=N.instanceColor)),ot===void 0||ot.attribute!==Tt||Tt&&ot.data!==Tt.data)return!0;K++}return r.attributesNum!==K||r.index!==O}function g(N,z,q,O){let G={},X=z.attributes,K=0,ut=q.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let ot=X[nt];ot===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor));let Tt={};Tt.attribute=ot,ot&&ot.data&&(Tt.data=ot.data),G[nt]=Tt,K++}r.attributes=G,r.attributesNum=K,r.index=O}function x(){let N=r.newAttributes;for(let z=0,q=N.length;z<q;z++)N[z]=0}function m(N){p(N,0)}function p(N,z){let q=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;q[N]=1,O[N]===0&&(i.enableVertexAttribArray(N),O[N]=1),G[N]!==z&&(i.vertexAttribDivisor(N,z),G[N]=z)}function S(){let N=r.newAttributes,z=r.enabledAttributes;for(let q=0,O=z.length;q<O;q++)z[q]!==N[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function A(N,z,q,O,G,X,K){K===!0?i.vertexAttribIPointer(N,z,q,G,X):i.vertexAttribPointer(N,z,q,O,G,X)}function M(N,z,q,O){x();let G=O.attributes,X=q.getAttributes(),K=z.defaultAttributeValues;for(let ut in X){let nt=X[ut];if(nt.location>=0){let it=G[ut];if(it===void 0&&(ut==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),ut==="instanceColor"&&N.instanceColor&&(it=N.instanceColor)),it!==void 0){let ot=it.normalized,Tt=it.itemSize,Rt=t.get(it);if(Rt===void 0)continue;let Zt=Rt.buffer,Jt=Rt.type,$t=Rt.bytesPerElement,at=Jt===i.INT||Jt===i.UNSIGNED_INT||it.gpuType===Xa;if(it.isInterleavedBufferAttribute){let pt=it.data,Ct=pt.stride,Ot=it.offset;if(pt.isInstancedInterleavedBuffer){for(let vt=0;vt<nt.locationSize;vt++)p(nt.location+vt,pt.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let vt=0;vt<nt.locationSize;vt++)m(nt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let vt=0;vt<nt.locationSize;vt++)A(nt.location+vt,Tt/nt.locationSize,Jt,ot,Ct*$t,(Ot+Tt/nt.locationSize*vt)*$t,at)}else{if(it.isInstancedBufferAttribute){for(let pt=0;pt<nt.locationSize;pt++)p(nt.location+pt,it.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let pt=0;pt<nt.locationSize;pt++)m(nt.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let pt=0;pt<nt.locationSize;pt++)A(nt.location+pt,Tt/nt.locationSize,Jt,ot,Tt*$t,Tt/nt.locationSize*pt*$t,at)}}else if(K!==void 0){let ot=K[ut];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(nt.location,ot);break;case 3:i.vertexAttrib3fv(nt.location,ot);break;case 4:i.vertexAttrib4fv(nt.location,ot);break;default:i.vertexAttrib1fv(nt.location,ot)}}}}S()}function b(){C();for(let N in n){let z=n[N];for(let q in z){let O=z[q];for(let G in O){let X=O[G];for(let K in X)u(X[K].object),delete X[K];delete O[G]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let q in z){let O=z[q];for(let G in O){let X=O[G];for(let K in X)u(X[K].object),delete X[K];delete O[G]}}delete n[N.id]}function L(N){for(let z in n){let q=n[z];for(let O in q){let G=q[O];if(G[N.id]===void 0)continue;let X=G[N.id];for(let K in X)u(X[K].object),delete X[K];delete G[N.id]}}}function y(N){for(let z in n){let q=n[z],O=N.isInstancedMesh===!0?N.id:0,G=q[O];if(G!==void 0){for(let X in G){let K=G[X];for(let ut in K)u(K[ut].object),delete K[ut];delete G[X]}delete q[O],Object.keys(q).length===0&&delete n[z]}}}function C(){F(),o=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Xx(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function qx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==On&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let y=L===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==vn&&L!==Jn&&!y&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Kt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:b,samples:w}}function Yx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,A=S*4,M=p.clippingState||null;c.value=M,M=u(g,h,A,d);for(let b=0;b!==A;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==x;++A,M+=4)o.copy(f[A]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var cr=4,Zx=6,Jx=20,$x=256,xo=new qi,Df=new te,vu=null,bu=0,Su=0,Mu=!1,Kx=new V,vs=new V,Lc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Kx}=r;vu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vu,bu,Su),this._renderer.xr.enabled=Mu,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:$n,format:On,colorSpace:Rr,depthBuffer:!1},s=Nf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jx(r)),this._blurMaterial=t_(r,t,e),this._ggxMaterial=Qx(r,t,e)}return s}_compileMaterial(t){let e=new he(new ve,t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,s,r){let c=new fn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Df),f.toneMapping=Yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new ke,new ze({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Df),p=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;ar(s,M*b,A>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$i||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-cr?n-g+cr:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,ar(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,xo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ar(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,xo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-cr?s-this._lodMax+cr:0),h=4*(this._cubeSize-u);ar(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,xo)}};function jx(i){let t=[],e=[],n=i,s=i-cr+1+Zx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,A=p>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(M,d*h*p);for(let b=0;b<h;b++){let w=u[b*2]*2-1,L=u[b*2+1]*2-1;p===0?vs.set(1,L,w):p===1?vs.set(-w,1,-L):p===2?vs.set(-w,L,1):p===3?vs.set(-1,L,-w):p===4?vs.set(-w,-1,L):vs.set(w,L,-1),vs.toArray(x,(p*h+b)*d)}}let m=new ve;m.setAttribute("position",new Oe(g,d)),m.setAttribute("outputDirection",new Oe(x,d)),e.push(new he(m,null)),n>cr&&n--}return{lodMeshes:e,sizeLods:t}}function Nf(i,t,e){let n=new _n(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qx(i,t,e){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function t_(i,t,e){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Uf(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ff(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Dc=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ke(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ci});r.uniforms.tEquirect.value=e;let o=new he(s,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=Qe),new za(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function e_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ha||d===Ga)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Dc(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Ha||d===Ga,x=d===$i||d===_s;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Lc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||x&&S&&c(S)?(n===null&&(n=new Lc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Ha?h.mapping=$i:d===Ga&&(h.mapping=_s),h}function c(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function n_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let S=d.array;x=d.version;for(let A=0,M=S.length;A<M;A+=3){let b=S[A+0],w=S[A+1],L=S[A+2];h.push(b,w,w,L,L,b)}}else{let S=g.array;x=g.version;for(let A=0,M=S.length/3-1;A<M;A+=3){let b=A+0,w=A+1,L=A+2;h.push(b,w,w,L,L,b)}}let m=new(g.count>=65535?Nr:Dr)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function s_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function r_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let C=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let M=a.attributes.position.count*A,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*b*4*f),L=new Lr(w,M,b,f);L.type=Jn,L.needsUpdate=!0;let y=A*4;for(let F=0;F<f;F++){let N=m[F],z=p[F],q=S[F],O=M*b*4*F;for(let G=0;G<N.count;G++){let X=G*y;d===!0&&(s.fromBufferAttribute(N,G),w[O+X+0]=s.x,w[O+X+1]=s.y,w[O+X+2]=s.z,w[O+X+3]=0),g===!0&&(s.fromBufferAttribute(z,G),w[O+X+4]=s.x,w[O+X+5]=s.y,w[O+X+6]=s.z,w[O+X+7]=0),x===!0&&(s.fromBufferAttribute(q,G),w[O+X+8]=s.x,w[O+X+9]=s.y,w[O+X+10]=s.z,w[O+X+11]=q.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new At(M,b)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function a_(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var c_={[jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[tu]:"CINEON_TONE_MAPPING",[ro]:"ACES_FILMIC_TONE_MAPPING",[nu]:"AGX_TONE_MAPPING",[iu]:"NEUTRAL_TONE_MAPPING",[eu]:"CUSTOM_TONE_MAPPING"};function l_(i,t,e,n,s,r){let o=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ve;l.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new re([0,2,0,0,2,0],2));let u=new Ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new he(l,u),h=new qi(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,S=[],A=!1;this.setSize=function(M,b){o.setSize(M,b),a!==null&&a.setSize(M,b),c!==null&&c.setSize(M,b);for(let w=0;w<S.length;w++){let L=S[w];L.setSize&&L.setSize(M,b)}},this.setEffects=function(M){S=M,A=S.length>0&&S[0].isRenderPass===!0;let b=o.width,w=o.height;S.length>0&&a===null&&(a=new _n(b,w,{type:$n,depthBuffer:!1,stencilBuffer:!1}),c=new _n(b,w,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){let y=S[L];y.setSize&&y.setSize(b,w)}},this.begin=function(M,b){if(x||M.toneMapping===Yn&&S.length===0)return!1;if(p=b,b!==null){let w=b.width,L=b.height;(o.width!==w||o.height!==L)&&this.setSize(w,L)}return A===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=Yn,!0},this.hasRenderPass=function(){return A},this.end=function(M,b){M.toneMapping=m,x=!0;let w=o,L=a;for(let y=0;y<S.length;y++){let C=S[y];C.enabled!==!1&&(C.render(M,L,w,b),C.needsSwap!==!1&&(w=L,L=L===a?c:a))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,u.defines={},de.getTransfer(d)===_e&&(u.defines.SRGB_TRANSFER="");let y=c_[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(p),M.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var nd=new dn,Tu=new Vi(1,1),id=new Lr,sd=new pa,rd=new Br,Of=[],Bf=[],zf=new Float32Array(16),kf=new Float32Array(9),Vf=new Float32Array(4);function ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Of[s];if(r===void 0&&(r=new Float32Array(s),Of[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fc(i,t){let e=Bf[t];e===void 0&&(e=new Int32Array(t),Bf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function u_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function p_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Vf.set(n),i.uniformMatrix2fv(this.addr,!1,Vf),He(e,n)}}function m_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;kf.set(n),i.uniformMatrix3fv(this.addr,!1,kf),He(e,n)}}function g_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;zf.set(n),i.uniformMatrix4fv(this.addr,!1,zf),He(e,n)}}function x_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function v_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function b_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function E_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function w_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tu.compareFunction=e.isReversedDepthBuffer()?Rc:Ac,r=Tu):r=nd,e.setTexture2D(t||r,s)}function T_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sd,s)}function A_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rd,s)}function R_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||id,s)}function C_(i){switch(i){case 5126:return u_;case 35664:return h_;case 35665:return f_;case 35666:return d_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return y_;case 35669:case 35673:return v_;case 5125:return b_;case 36294:return S_;case 36295:return M_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(i,t){i.uniform1fv(this.addr,t)}function P_(i,t){let e=ur(t,this.size,2);i.uniform2fv(this.addr,e)}function L_(i,t){let e=ur(t,this.size,3);i.uniform3fv(this.addr,e)}function D_(i,t){let e=ur(t,this.size,4);i.uniform4fv(this.addr,e)}function N_(i,t){let e=ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function U_(i,t){let e=ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function F_(i,t){let e=ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O_(i,t){i.uniform1iv(this.addr,t)}function B_(i,t){i.uniform2iv(this.addr,t)}function z_(i,t){i.uniform3iv(this.addr,t)}function k_(i,t){i.uniform4iv(this.addr,t)}function V_(i,t){i.uniform1uiv(this.addr,t)}function H_(i,t){i.uniform2uiv(this.addr,t)}function G_(i,t){i.uniform3uiv(this.addr,t)}function W_(i,t){i.uniform4uiv(this.addr,t)}function X_(i,t,e){let n=this.cache,s=t.length,r=Fc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tu:o=nd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function q_(i,t,e){let n=this.cache,s=t.length,r=Fc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sd,r[o])}function Y_(i,t,e){let n=this.cache,s=t.length,r=Fc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rd,r[o])}function Z_(i,t,e){let n=this.cache,s=t.length,r=Fc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||id,r[o])}function J_(i){switch(i){case 5126:return I_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return k_;case 5125:return V_;case 36294:return H_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return Z_}}var Au=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C_(e.type)}},Ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J_(e.type)}},Cu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Eu=/(\w+)(\])?(\[|\.)?/g;function Hf(i,t){i.seq.push(t),i.map[t.id]=t}function $_(i,t,e){let n=i.name,s=n.length;for(Eu.lastIndex=0;;){let r=Eu.exec(n),o=Eu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Hf(e,l===void 0?new Au(a,i,t):new Ru(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Cu(a),Hf(e,f)),e=f}}}var lr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);$_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Gf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var K_=37297,j_=0;function Q_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Wf=new oe;function ty(i){de._getMatrix(Wf,de.workingColorSpace,i);let t=`mat3( ${Wf.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Q_(i.getShaderSource(t),a)}else return r}function ey(i,t){let e=ty(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ny={[jl]:"Linear",[Ql]:"Reinhard",[tu]:"Cineon",[ro]:"ACESFilmic",[nu]:"AgX",[iu]:"Neutral",[eu]:"Custom"};function iy(i,t){let e=ny[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pc=new V;function sy(){de.getLuminanceCoefficients(Pc);let i=Pc.x.toFixed(4),t=Pc.y.toFixed(4),e=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function oy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ay(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yo(i){return i!==""}function qf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(i){return i.replace(cy,uy)}var ly=new Map;function uy(i,t){let e=ce[t];if(e===void 0){let n=ly.get(t);if(n!==void 0)e=ce[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Iu(e)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(i){return i.replace(hy,fy)}function fy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var dy={[gs]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function py(i){return dy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var my={[$i]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE_UV"};function gy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":my[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var xy={[_s]:"ENVMAP_MODE_REFRACTION"};function _y(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yy={[Va]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[hf]:"ENVMAP_BLENDING_ADD"};function vy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yy[i.combine]||"ENVMAP_BLENDING_NONE"}function by(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sy(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=py(e),l=gy(e),u=_y(e),f=vy(e),h=by(e),d=ry(e),g=oy(r),x=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(m=[Jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[Jf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Yn?iy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,ey("linearToOutputTexel",e.outputColorSpace),sy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=Iu(o),o=qf(o,e),o=Yf(o,e),a=Iu(a),a=qf(a,e),a=Yf(a,e),o=Zf(o),a=Zf(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+o,M=S+p+a,b=Gf(s,s.VERTEX_SHADER,A),w=Gf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,b),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(w)||"",G=z.trim(),X=q.trim(),K=O.trim(),ut=!0,nt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,w);else{let it=Xf(s,b,"vertex"),ot=Xf(s,w,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+it+`
`+ot)}else G!==""?Kt("WebGLProgram: Program Info Log:",G):(X===""||K==="")&&(nt=!1);nt&&(N.diagnostics={runnable:ut,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(b),s.deleteShader(w),y=new lr(s,x),C=ay(s,x)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(x,K_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}var My=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lu(t),e.set(t,n)),n}},Lu=class{constructor(t){this.id=My++,this.code=t,this.usedTimes=0}};function Ey(i){return i===Qi||i===fo||i===po}function wy(i,t,e,n,s,r){let o=new Zs,a=new Pu,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,C,F,N,z,q){let O=N.fog,G=z.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ut=t.get(y.envMap||X,K),nt=ut&&ut.mapping===oo?ut.image.height:null,it=d[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&Kt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tt=ot!==void 0?ot.length:0,Rt=0;G.morphAttributes.position!==void 0&&(Rt=1),G.morphAttributes.normal!==void 0&&(Rt=2),G.morphAttributes.color!==void 0&&(Rt=3);let Zt,Jt,$t,at;if(it){let ie=gn[it];Zt=ie.vertexShader,Jt=ie.fragmentShader}else{Zt=y.vertexShader,Jt=y.fragmentShader;let ie=a.getVertexShaderStage(y),Yt=a.getFragmentShaderStage(y);a.update(y,ie,Yt),$t=ie.id,at=Yt.id}let pt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ot=z.isInstancedMesh===!0,vt=z.isBatchedMesh===!0,mt=!!y.map,Bt=!!y.matcap,dt=!!ut,yt=!!y.aoMap,bt=!!y.lightMap,Et=!!y.bumpMap&&y.wireframe===!1,ht=!!y.normalMap,St=!!y.displacementMap,Pt=!!y.emissiveMap,Nt=!!y.metalnessMap,Ft=!!y.roughnessMap,k=y.anisotropy>0,ee=y.clearcoat>0,Ht=y.dispersion>0,U=y.retroreflectivity>0,E=y.iridescence>0,$=y.sheen>0,Q=y.transmission>0,ct=k&&!!y.anisotropyMap,B=ee&&!!y.clearcoatMap,_=ee&&!!y.clearcoatNormalMap,v=ee&&!!y.clearcoatRoughnessMap,T=E&&!!y.iridescenceMap,P=E&&!!y.iridescenceThicknessMap,D=$&&!!y.sheenColorMap,W=$&&!!y.sheenRoughnessMap,H=!!y.specularMap,et=!!y.specularColorMap,tt=!!y.specularIntensityMap,_t=Q&&!!y.transmissionMap,I=Q&&!!y.thicknessMap,j=!!y.gradientMap,Y=!!y.alphaMap,gt=y.alphaTest>0,xt=!!y.alphaHash,ft=!!y.extensions,wt=Yn;y.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(wt=i.toneMapping);let It={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:Jt,defines:y.defines,customVertexShaderID:$t,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:vt,batchingColor:vt&&z._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&z.instanceColor!==null,instancingMorph:Ot&&z.morphTexture!==null,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:mt,matcap:Bt,envMap:dt,envMapMode:dt&&ut.mapping,envMapCubeUVHeight:nt,aoMap:yt,lightMap:bt,bumpMap:Et,normalMap:ht,displacementMap:St,emissiveMap:Pt,normalMapObjectSpace:ht&&y.normalMapType===pf,normalMapTangentSpace:ht&&y.normalMapType===mo,packedNormalMap:ht&&y.normalMapType===mo&&Ey(y.normalMap.format),metalnessMap:Nt,roughnessMap:Ft,anisotropy:k,anisotropyMap:ct,clearcoat:ee,clearcoatMap:B,clearcoatNormalMap:_,clearcoatRoughnessMap:v,dispersion:Ht,retroreflection:U,iridescence:E,iridescenceMap:T,iridescenceThicknessMap:P,sheen:$,sheenColorMap:D,sheenRoughnessMap:W,specularMap:H,specularColorMap:et,specularIntensityMap:tt,transmission:Q,transmissionMap:_t,thicknessMap:I,gradientMap:j,opaque:y.transparent===!1&&y.blending===sr&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:gt,alphaHash:xt,combine:y.combine,mapUv:mt&&g(y.map.channel),aoMapUv:yt&&g(y.aoMap.channel),lightMapUv:bt&&g(y.lightMap.channel),bumpMapUv:Et&&g(y.bumpMap.channel),normalMapUv:ht&&g(y.normalMap.channel),displacementMapUv:St&&g(y.displacementMap.channel),emissiveMapUv:Pt&&g(y.emissiveMap.channel),metalnessMapUv:Nt&&g(y.metalnessMap.channel),roughnessMapUv:Ft&&g(y.roughnessMap.channel),anisotropyMapUv:ct&&g(y.anisotropyMap.channel),clearcoatMapUv:B&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:v&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:T&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:P&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:D&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:W&&g(y.sheenRoughnessMap.channel),specularMapUv:H&&g(y.specularMap.channel),specularColorMapUv:et&&g(y.specularColorMap.channel),specularIntensityMapUv:tt&&g(y.specularIntensityMap.channel),transmissionMapUv:_t&&g(y.transmissionMap.channel),thicknessMapUv:I&&g(y.thicknessMap.channel),alphaMapUv:Y&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ht||k),vertexNormals:!!G.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(mt||Y),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||G.attributes.normal===void 0&&ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Rt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:mt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:Pt&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yn,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&y.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function m(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)C.push(F),C.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(p(C,y),S(C,y),C.push(i.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function p(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numSunLights),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numSunLightShadows),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function S(y,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function A(y){let C=d[y.type],F;if(C){let N=gn[C];F=go.clone(N.uniforms)}else F=y.uniforms;return F}function M(y,C){let F=u.get(C);return F!==void 0?++F.usedTimes:(F=new Sy(i,C,y,s),l.push(F),u.set(C,F)),F}function b(y){if(--y.usedTimes===0){let C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:L}}function Ty(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ay(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $f(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=d,S.material=g,S.materialVariant=o(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function c(h,d,g,x,m,p,S){S.reversedDepth===!0&&(m=-m);let A=a(h,d,g,x,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function l(h,d,g,x,m,p){let S=a(h,d,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,d){e.length>1&&e.sort(h||Ay),n.length>1&&n.sort(d||$f),s.length>1&&s.sort(d||$f)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function Ry(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Kf,i.set(n,[o])):s>=r.length?(o=new Kf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new te};break;case"SpotLight":e={position:new V,direction:new V,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function Iy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Py=0;function Ly(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dy(i){let t=new Cy,e=Iy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new ge,o=new ge;function a(l){let u=0,f=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,A=0,M=0,b=0,w=0,L=0,y=0,C=0,F=0;l.sort(Ly);for(let z=0,q=l.length;z<q;z++){let O=l[z],G=O.color,X=O.intensity,K=O.distance,ut=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Qi?ut=O.shadow.map.texture:ut=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=G.r*X,f+=G.g*X,h+=G.b*X;else if(O.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(O.sh.coefficients[nt],X);F++}else if(O.isSunLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let it=O.shadow,ot=e.get(O);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=ut;let Tt=it.getViewportCount();for(let Rt=0;Rt<Tt;Rt++)n.sunShadowMatrix[x+Rt]=it.getMatrix(Rt),n.sunShadowCascade[x+Rt]=it._cascadeData[Rt];x+=Tt,g++}n.sun[d]=nt,d++}else if(O.isDirectionalLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let it=O.shadow,ot=e.get(O);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=ut,n.directionalShadowMatrix[m]=O.shadow.matrix,b++}n.directional[m]=nt,m++}else if(O.isSpotLight){let nt=t.get(O);nt.position.setFromMatrixPosition(O.matrixWorld),nt.color.copy(G).multiplyScalar(X),nt.distance=K,nt.coneCos=Math.cos(O.angle),nt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),nt.decay=O.decay,n.spot[S]=nt;let it=O.shadow;if(O.map&&(n.spotLightMap[y]=O.map,y++,it.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[S]=it.matrix,O.castShadow){let ot=e.get(O);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.spotShadow[S]=ot,n.spotShadowMap[S]=ut,L++}S++}else if(O.isRectAreaLight){let nt=t.get(O);nt.color.copy(G).multiplyScalar(X),nt.halfWidth.set(O.width*.5,0,0),nt.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=nt,A++}else if(O.isPointLight){let nt=t.get(O);if(nt.color.copy(O.color).multiplyScalar(O.intensity),nt.distance=O.distance,nt.decay=O.decay,O.castShadow){let it=O.shadow,ot=e.get(O);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,ot.shadowCameraNear=it.camera.near,ot.shadowCameraFar=it.camera.far,n.pointShadow[p]=ot,n.pointShadowMap[p]=ut,n.pointShadowMatrix[p]=O.shadow.matrix,w++}n.point[p]=nt,p++}else if(O.isHemisphereLight){let nt=t.get(O);nt.skyColor.copy(O.color).multiplyScalar(X),nt.groundColor.copy(O.groundColor).multiplyScalar(X),n.hemi[M]=nt,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let N=n.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==A||N.hemiLength!==M||N.numSunShadows!==g||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==L||N.numSpotMaps!==y||N.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=F,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=A,N.hemiLength=M,N.numSunShadows=g,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=L,N.numSpotMaps=y,N.numLightProbes=F,n.version=Py++)}function c(l,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let S=0,A=l.length;S<A;S++){let M=l[S];if(M.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(M.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function jf(i){let t=new Dy(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Ny(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new jf(i),t.set(s,[a])):r>=o.length?(a=new jf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`,Oy=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],By=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Qf=new ge,_o=new V,wu=new V;function zy(i,t,e){let n=new $s,s=new At,r=new At,o=new ye,a=new Aa,c=new Ra,l={},u=e.maxTextureSize,f={[Ji]:mn,[mn]:Ji,[yn]:yn},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Uy,fragmentShader:Fy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new ve;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new he(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(w,L,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Wh&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let C=i.getRenderTarget(),F=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ci),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=p!==this.type;q&&L.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(G=>G.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,G=w.length;O<G;O++){let X=w[O],K=X.shadow;if(K===void 0){Kt("WebGLShadowMap:",X,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ut=K.getFrameExtents();s.multiply(ut),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,K.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=nt,K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ir){if(X.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new _n(s.x,s.y,{format:Qi,type:$n,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),K.map.texture.name=X.name+".shadowMap",K.map.depthTexture=new Vi(s.x,s.y,Jn),K.map.depthTexture.name=X.name+".shadowMapDepth",K.map.depthTexture.format=ri,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=qe,K.map.depthTexture.magFilter=qe}else X.isPointLight?(K.map=new Dc(s.x),K.map.depthTexture=new ya(s.x,Zn)):(K.map=new _n(s.x,s.y),K.map.depthTexture=new Vi(s.x,s.y,Zn)),K.map.depthTexture.name=X.name+".shadowMap",K.map.depthTexture.format=ri,this.type===gs?(K.map.depthTexture.compareFunction=nt?Rc:Ac,K.map.depthTexture.minFilter=Qe,K.map.depthTexture.magFilter=Qe):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=qe,K.map.depthTexture.magFilter=qe);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let it=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();X.isPointLight!==!0&&K.updateMatrices(X,y);for(let ot=0;ot<it;ot++){let Tt=K.getCamera(ot);if(X.isPointLight){let Rt=K.camera,Zt=K.matrix,Jt=X.distance||Rt.far;Jt!==Rt.far&&(Rt.far=Jt,Rt.updateProjectionMatrix()),_o.setFromMatrixPosition(X.matrixWorld),Rt.position.copy(_o),wu.copy(Rt.position),wu.add(Oy[ot]),Rt.up.copy(By[ot]),Rt.lookAt(wu),Rt.updateMatrixWorld(),Zt.makeTranslation(-_o.x,-_o.y,-_o.z),Qf.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Qf,Rt.coordinateSystem,Rt.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(K.map),i.clear());let Rt=K.getViewport(ot);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(o)}n=K.getFrustum(ot),M(L,y,Tt,X,this.type)}K.isPointLightShadow!==!0&&this.type===ir&&S(K,y),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(C,F,N)};function S(w,L){let y=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new _n(s.x,s.y,{format:Qi,type:$n}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,y,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,y,d,x,null)}function A(w,L,y,C){let F=null,N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)F=N;else if(F=y.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let z=F.uuid,q=L.uuid,O=l[z];O===void 0&&(O={},l[z]=O);let G=O[q];G===void 0&&(G=F.clone(),O[q]=G,L.addEventListener("dispose",b)),F=G}if(F.visible=L.visible,F.wireframe=L.wireframe,C===ir?F.side=L.shadowSide!==null?L.shadowSide:L.side:F.side=L.shadowSide!==null?L.shadowSide:f[L.side],F.alphaMap=L.alphaMap,F.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,F.map=L.map,F.clipShadows=L.clipShadows,F.clippingPlanes=L.clippingPlanes,F.clipIntersection=L.clipIntersection,F.displacementMap=L.displacementMap,F.displacementScale=L.displacementScale,F.displacementBias=L.displacementBias,F.wireframeLinewidth=L.wireframeLinewidth,F.linewidth=L.linewidth,y.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let z=i.properties.get(F);z.light=y}return F}function M(w,L,y,C,F){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===ir)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let q=t.update(w),O=w.material;if(Array.isArray(O)){let G=q.groups;for(let X=0,K=G.length;X<K;X++){let ut=G[X],nt=O[ut.materialIndex];if(nt&&nt.visible){let it=A(w,nt,C,F);w.onBeforeShadow(i,w,L,y,q,it,ut),i.renderBufferDirect(y,null,q,it,w,ut),w.onAfterShadow(i,w,L,y,q,it,ut)}}}else if(O.visible){let G=A(w,O,C,F);w.onBeforeShadow(i,w,L,y,q,G,null),i.renderBufferDirect(y,null,q,G,w,null),w.onAfterShadow(i,w,L,y,q,G,null)}}let z=w.children;for(let q=0,O=z.length;q<O;q++)M(z[q],L,y,C,F)}function b(w){w.target.removeEventListener("dispose",b);for(let y in l){let C=l[y],F=w.target.uuid;F in C&&(C[F].dispose(),delete C[F])}}}function ky(i,t){function e(){let I=!1,j=new ye,Y=null,gt=new ye(0,0,0,0);return{setMask:function(xt){Y!==xt&&!I&&(i.colorMask(xt,xt,xt,xt),Y=xt)},setLocked:function(xt){I=xt},setClear:function(xt,ft,wt,It,ie){ie===!0&&(xt*=It,ft*=It,wt*=It),j.set(xt,ft,wt,It),gt.equals(j)===!1&&(i.clearColor(xt,ft,wt,It),gt.copy(j))},reset:function(){I=!1,Y=null,gt.set(-1,0,0,0)}}}function n(){let I=!1,j=!1,Y=null,gt=null,xt=null;return{setReversed:function(ft){if(j!==ft){let wt=t.get("EXT_clip_control");ft?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),j=ft;let It=xt;xt=null,this.setClear(It)}},getReversed:function(){return j},setTest:function(ft){ft?pt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!I&&(i.depthMask(ft),Y=ft)},setFunc:function(ft){if(j&&(ft=wf[ft]),gt!==ft){switch(ft){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=ft}},setLocked:function(ft){I=ft},setClear:function(ft){xt!==ft&&(xt=ft,j&&(ft=1-ft),i.clearDepth(ft))},reset:function(){I=!1,Y=null,gt=null,xt=null,j=!1}}}function s(){let I=!1,j=null,Y=null,gt=null,xt=null,ft=null,wt=null,It=null,ie=null;return{setTest:function(Yt){I||(Yt?pt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Yt){j!==Yt&&!I&&(i.stencilMask(Yt),j=Yt)},setFunc:function(Yt,me,be){(Y!==Yt||gt!==me||xt!==be)&&(i.stencilFunc(Yt,me,be),Y=Yt,gt=me,xt=be)},setOp:function(Yt,me,be){(ft!==Yt||wt!==me||It!==be)&&(i.stencilOp(Yt,me,be),ft=Yt,wt=me,It=be)},setLocked:function(Yt){I=Yt},setClear:function(Yt){ie!==Yt&&(i.clearStencil(Yt),ie=Yt)},reset:function(){I=!1,j=null,Y=null,gt=null,xt=null,ft=null,wt=null,It=null,ie=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,S=null,A=null,M=null,b=null,w=null,L=null,y=new te(0,0,0),C=0,F=!1,N=null,z=null,q=null,O=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ut=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(nt)[1]),K=ut>=1):nt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),K=ut>=2);let it=null,ot={},Tt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Zt=new ye().fromArray(Tt),Jt=new ye().fromArray(Rt);function $t(I,j,Y,gt){let xt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(I,ft),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<Y;wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(j+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ft}let at={};at[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(Gs),Et(!1),ht(Yl),pt(i.CULL_FACE),yt(ci);function pt(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Ct(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ot(I,j){return h[I]!==j?(i.bindFramebuffer(I,j),h[I]=j,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function vt(I,j){let Y=g,gt=!1;if(I){Y=d.get(j),Y===void 0&&(Y=[],d.set(j,Y));let xt=I.textures;if(Y.length!==xt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,wt=xt.length;ft<wt;ft++)Y[ft]=i.COLOR_ATTACHMENT0+ft;Y.length=xt.length,gt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Y)}function mt(I){return x!==I?(i.useProgram(I),x=I,!0):!1}let Bt={[xs]:i.FUNC_ADD,[qh]:i.FUNC_SUBTRACT,[Yh]:i.FUNC_REVERSE_SUBTRACT};Bt[Zh]=i.MIN,Bt[Jh]=i.MAX;let dt={[$h]:i.ZERO,[Kh]:i.ONE,[jh]:i.SRC_COLOR,[$l]:i.SRC_ALPHA,[rf]:i.SRC_ALPHA_SATURATE,[nf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[sf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[of]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[cf]:i.CONSTANT_ALPHA,[lf]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(I,j,Y,gt,xt,ft,wt,It,ie,Yt){if(I===ci){m===!0&&(Ct(i.BLEND),m=!1);return}if(m===!1&&(pt(i.BLEND),m=!0),I!==Xh){if(I!==p||Yt!==F){if((S!==xs||b!==xs)&&(i.blendEquation(i.FUNC_ADD),S=xs,b=xs),Yt)switch(I){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",I);break}else switch(I){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",I);break}A=null,M=null,w=null,L=null,y.set(0,0,0),C=0,p=I,F=Yt}return}xt=xt||j,ft=ft||Y,wt=wt||gt,(j!==S||xt!==b)&&(i.blendEquationSeparate(Bt[j],Bt[xt]),S=j,b=xt),(Y!==A||gt!==M||ft!==w||wt!==L)&&(i.blendFuncSeparate(dt[Y],dt[gt],dt[ft],dt[wt]),A=Y,M=gt,w=ft,L=wt),(It.equals(y)===!1||ie!==C)&&(i.blendColor(It.r,It.g,It.b,ie),y.copy(It),C=ie),p=I,F=!1}function bt(I,j){I.side===yn?Ct(i.CULL_FACE):pt(i.CULL_FACE);let Y=I.side===mn;j&&(Y=!Y),Et(Y),I.blending===sr&&I.transparent===!1?yt(ci):yt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let gt=I.stencilWrite;a.setTest(gt),gt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function ht(I){I!==Hh?(pt(i.CULL_FACE),I!==z&&(I===Yl?i.cullFace(i.BACK):I===Gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),z=I}function St(I){I!==q&&(K&&i.lineWidth(I),q=I)}function Pt(I,j,Y){I?(pt(i.POLYGON_OFFSET_FILL),(O!==j||G!==Y)&&(O=j,G=Y,o.getReversed()&&(j=-j),i.polygonOffset(j,Y))):Ct(i.POLYGON_OFFSET_FILL)}function Nt(I){I?pt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Ft(I){I===void 0&&(I=i.TEXTURE0+X-1),it!==I&&(i.activeTexture(I),it=I)}function k(I,j,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+X-1:Y=it);let gt=ot[Y];gt===void 0&&(gt={type:void 0,texture:void 0},ot[Y]=gt),(gt.type!==I||gt.texture!==j)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(I,j||at[I]),gt.type=I,gt.texture=j)}function ee(){let I=ot[it];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function E(){try{i.texSubImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function $(){try{i.texSubImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function B(){try{i.texStorage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function _(){try{i.texStorage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function v(){try{i.texImage2D(...arguments)}catch(I){Qt("WebGLState:",I)}}function T(){try{i.texImage3D(...arguments)}catch(I){Qt("WebGLState:",I)}}function P(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function D(I,j){f[I]!==j&&(i.pixelStorei(I,j),f[I]=j)}function W(I){Zt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function H(I){Jt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Jt.copy(I))}function et(I,j){let Y=l.get(j);Y===void 0&&(Y=new WeakMap,l.set(j,Y));let gt=Y.get(I);gt===void 0&&(gt=i.getUniformBlockIndex(j,I.name),Y.set(I,gt))}function tt(I,j){let gt=l.get(j).get(I);c.get(j)!==gt&&(i.uniformBlockBinding(j,gt,I.__bindingPointIndex),c.set(j,gt))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},it=null,ot={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,S=null,A=null,M=null,b=null,w=null,L=null,y=new te(0,0,0),C=0,F=!1,N=null,z=null,q=null,O=null,G=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Ct,bindFramebuffer:Ot,drawBuffers:vt,useProgram:mt,setBlending:yt,setMaterial:bt,setFlipSided:Et,setCullFace:ht,setLineWidth:St,setPolygonOffset:Pt,setScissorTest:Nt,activeTexture:Ft,bindTexture:k,unbindTexture:ee,compressedTexImage2D:Ht,compressedTexImage3D:U,texImage2D:v,texImage3D:T,pixelStorei:D,getParameter:P,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:B,texStorage3D:_,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:Q,compressedTexSubImage3D:ct,scissor:W,viewport:H,reset:_t}}function Vy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,E){return g?new OffscreenCanvas(U,E):Ir("canvas")}function m(U,E,$){let Q=1,ct=Ht(U);if((ct.width>$||ct.height>$)&&(Q=$/Math.max(ct.width,ct.height)),Q<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let B=Math.floor(Q*ct.width),_=Math.floor(Q*ct.height);h===void 0&&(h=x(B,_));let v=E?x(B,_):h;return v.width=B,v.height=_,v.getContext("2d").drawImage(U,0,0,B,_),Kt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+B+"x"+_+")."),v}else return"data"in U&&Kt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function p(U){return U.generateMipmaps}function S(U){i.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(U,E,$,Q,ct,B=!1){if(U!==null){if(i[U]!==void 0)return i[U];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let _;Q&&(_=t.get("EXT_texture_norm16"),_||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let v=E;if(E===i.RED&&($===i.FLOAT&&(v=i.R32F),$===i.HALF_FLOAT&&(v=i.R16F),$===i.UNSIGNED_BYTE&&(v=i.R8),$===i.UNSIGNED_SHORT&&_&&(v=_.R16_EXT),$===i.SHORT&&_&&(v=_.R16_SNORM_EXT)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(v=i.R8UI),$===i.UNSIGNED_SHORT&&(v=i.R16UI),$===i.UNSIGNED_INT&&(v=i.R32UI),$===i.BYTE&&(v=i.R8I),$===i.SHORT&&(v=i.R16I),$===i.INT&&(v=i.R32I)),E===i.RG&&($===i.FLOAT&&(v=i.RG32F),$===i.HALF_FLOAT&&(v=i.RG16F),$===i.UNSIGNED_BYTE&&(v=i.RG8),$===i.UNSIGNED_SHORT&&_&&(v=_.RG16_EXT),$===i.SHORT&&_&&(v=_.RG16_SNORM_EXT)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(v=i.RG8UI),$===i.UNSIGNED_SHORT&&(v=i.RG16UI),$===i.UNSIGNED_INT&&(v=i.RG32UI),$===i.BYTE&&(v=i.RG8I),$===i.SHORT&&(v=i.RG16I),$===i.INT&&(v=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(v=i.RGB8UI),$===i.UNSIGNED_SHORT&&(v=i.RGB16UI),$===i.UNSIGNED_INT&&(v=i.RGB32UI),$===i.BYTE&&(v=i.RGB8I),$===i.SHORT&&(v=i.RGB16I),$===i.INT&&(v=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(v=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(v=i.RGBA16UI),$===i.UNSIGNED_INT&&(v=i.RGBA32UI),$===i.BYTE&&(v=i.RGBA8I),$===i.SHORT&&(v=i.RGBA16I),$===i.INT&&(v=i.RGBA32I)),E===i.RGB&&($===i.UNSIGNED_SHORT&&_&&(v=_.RGB16_EXT),$===i.SHORT&&_&&(v=_.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(v=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(v=i.R11F_G11F_B10F)),E===i.RGBA){let T=B?Cr:de.getTransfer(ct);$===i.FLOAT&&(v=i.RGBA32F),$===i.HALF_FLOAT&&(v=i.RGBA16F),$===i.UNSIGNED_BYTE&&(v=T===_e?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&_&&(v=_.RGBA16_EXT),$===i.SHORT&&_&&(v=_.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(v=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(v=i.RGB5_A1)}return(v===i.R16F||v===i.R32F||v===i.RG16F||v===i.RG32F||v===i.RGBA16F||v===i.RGBA32F)&&t.get("EXT_color_buffer_float"),v}function b(U,E){let $;return U?E===null||E===Zn||E===or?$=i.DEPTH24_STENCIL8:E===Jn?$=i.DEPTH32F_STENCIL8:E===rr&&($=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zn||E===or?$=i.DEPTH_COMPONENT24:E===Jn?$=i.DEPTH_COMPONENT32F:E===rr&&($=i.DEPTH_COMPONENT16),$}function w(U,E){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==qe&&U.minFilter!==Qe?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function L(U){let E=U.target;E.removeEventListener("dispose",L),C(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function y(U){let E=U.target;E.removeEventListener("dispose",y),N(E)}function C(U){let E=n.get(U);if(E.__webglInit===void 0)return;let $=U.source,Q=d.get($);if(Q){let ct=Q[E.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&F(U),Object.keys(Q).length===0&&d.delete($)}n.remove(U)}function F(U){let E=n.get(U);i.deleteTexture(E.__webglTexture);let $=U.source,Q=d.get($);delete Q[E.__cacheKey],o.memory.textures--}function N(U){let E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ct=0;ct<E.__webglFramebuffer[Q].length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[Q][ct]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let $=U.textures;for(let Q=0,ct=$.length;Q<ct;Q++){let B=n.get($[Q]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),o.memory.textures--),n.remove($[Q])}n.remove(U)}let z=0;function q(){z=0}function O(){return z}function G(U){z=U}function X(){let U=z;return U>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,U}function K(U){let E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ut(U,E){let $=n.get(U);if(U.isVideoTexture&&k(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){let Q=U.image;if(Q===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct($,U,E);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function nt(U,E){let $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Ct($,U,E);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function it(U,E){let $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){Ct($,U,E);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function ot(U,E){let $=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){Ot($,U,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}let Tt={[ls]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},Rt={[qe]:i.NEAREST,[ff]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},Zt={[gf]:i.NEVER,[bf]:i.ALWAYS,[xf]:i.LESS,[Ac]:i.LEQUAL,[_f]:i.EQUAL,[Rc]:i.GEQUAL,[yf]:i.GREATER,[vf]:i.NOTEQUAL};function Jt(U,E){if(E.type===Jn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Qe||E.magFilter===Wa||E.magFilter===ao||E.magFilter===Ki||E.minFilter===Qe||E.minFilter===Wa||E.minFilter===ao||E.minFilter===Ki)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Tt[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Tt[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Tt[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Rt[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Rt[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Zt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qe||E.minFilter!==ao&&E.minFilter!==Ki||E.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function $t(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",L));let Q=E.source,ct=d.get(Q);ct===void 0&&(ct={},d.set(Q,ct));let B=K(E);if(B!==U.__cacheKey){ct[B]===void 0&&(ct[B]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ct[B].usedTimes++;let _=ct[U.__cacheKey];_!==void 0&&(ct[U.__cacheKey].usedTimes--,_.usedTimes===0&&F(E)),U.__cacheKey=B,U.__webglTexture=ct[B].texture}return $}function at(U,E,$){return Math.floor(Math.floor(U/$)/E)}function pt(U,E,$,Q){let B=U.updateRanges;if(B.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,$,Q,E.data);else{B.sort((D,W)=>D.start-W.start);let _=0;for(let D=1;D<B.length;D++){let W=B[_],H=B[D],et=W.start+W.count,tt=at(H.start,E.width,4),_t=at(W.start,E.width,4);H.start<=et+1&&tt===_t&&at(H.start+H.count-1,E.width,4)===tt?W.count=Math.max(W.count,H.start+H.count-W.start):(++_,B[_]=H)}B.length=_+1;let v=e.getParameter(i.UNPACK_ROW_LENGTH),T=e.getParameter(i.UNPACK_SKIP_PIXELS),P=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let D=0,W=B.length;D<W;D++){let H=B[D],et=Math.floor(H.start/4),tt=Math.ceil(H.count/4),_t=et%E.width,I=Math.floor(et/E.width),j=tt,Y=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,_t,I,j,Y,$,Q,E.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,v),e.pixelStorei(i.UNPACK_SKIP_PIXELS,T),e.pixelStorei(i.UNPACK_SKIP_ROWS,P)}}function Ct(U,E,$){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);let ct=$t(U,E),B=E.source;e.bindTexture(Q,U.__webglTexture,i.TEXTURE0+$);let _=n.get(B);if(B.version!==_.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Y=de.getPrimaries(de.workingColorSpace),gt=E.colorSpace===wi?null:de.getPrimaries(E.colorSpace),xt=E.colorSpace===wi||Y===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let T=m(E.image,!1,s.maxTextureSize);T=ee(E,T);let P=r.convert(E.format,E.colorSpace),D=r.convert(E.type),W=M(E.internalFormat,P,D,E.normalized,E.colorSpace,E.isVideoTexture);Jt(Q,E);let H,et=E.mipmaps,tt=E.isVideoTexture!==!0,_t=_.__version===void 0||ct===!0,I=B.dataReady,j=w(E,T);if(E.isDepthTexture)W=b(E.format===ji,E.type),_t&&(tt?e.texStorage2D(i.TEXTURE_2D,1,W,T.width,T.height):e.texImage2D(i.TEXTURE_2D,0,W,T.width,T.height,0,P,D,null));else if(E.isDataTexture)if(et.length>0){tt&&_t&&e.texStorage2D(i.TEXTURE_2D,j,W,et[0].width,et[0].height);for(let Y=0,gt=et.length;Y<gt;Y++)H=et[Y],tt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,H.width,H.height,P,D,H.data):e.texImage2D(i.TEXTURE_2D,Y,W,H.width,H.height,0,P,D,H.data);E.generateMipmaps=!1}else tt?(_t&&e.texStorage2D(i.TEXTURE_2D,j,W,T.width,T.height),I&&pt(E,T,P,D)):e.texImage2D(i.TEXTURE_2D,0,W,T.width,T.height,0,P,D,T.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,W,et[0].width,et[0].height,T.depth);for(let Y=0,gt=et.length;Y<gt;Y++)if(H=et[Y],E.format!==On)if(P!==null)if(tt){if(I)if(E.layerUpdates.size>0){let xt=yu(H.width,H.height,E.format,E.type);for(let ft of E.layerUpdates){let wt=H.data.subarray(ft*xt/H.data.BYTES_PER_ELEMENT,(ft+1)*xt/H.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ft,H.width,H.height,1,P,wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,H.width,H.height,T.depth,P,H.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,W,H.width,H.height,T.depth,0,H.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,H.width,H.height,T.depth,P,D,H.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,W,H.width,H.height,T.depth,0,P,D,H.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{tt&&_t&&e.texStorage2D(i.TEXTURE_2D,j,W,et[0].width,et[0].height);for(let Y=0,gt=et.length;Y<gt;Y++)H=et[Y],E.format!==On?P!==null?tt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,H.width,H.height,P,H.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,W,H.width,H.height,0,H.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,H.width,H.height,P,D,H.data):e.texImage2D(i.TEXTURE_2D,Y,W,H.width,H.height,0,P,D,H.data)}else if(E.isDataArrayTexture)if(tt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,W,T.width,T.height,T.depth),I)if(E.layerUpdates.size>0){let Y=yu(T.width,T.height,E.format,E.type);for(let gt of E.layerUpdates){let xt=T.data.subarray(gt*Y/T.data.BYTES_PER_ELEMENT,(gt+1)*Y/T.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,T.width,T.height,1,P,D,xt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,P,D,T.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,W,T.width,T.height,T.depth,0,P,D,T.data);else if(E.isData3DTexture)tt?(_t&&e.texStorage3D(i.TEXTURE_3D,j,W,T.width,T.height,T.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,P,D,T.data)):e.texImage3D(i.TEXTURE_3D,0,W,T.width,T.height,T.depth,0,P,D,T.data);else if(E.isFramebufferTexture){if(_t)if(tt)e.texStorage2D(i.TEXTURE_2D,j,W,T.width,T.height);else{let Y=T.width,gt=T.height;for(let xt=0;xt<j;xt++)e.texImage2D(i.TEXTURE_2D,xt,W,Y,gt,0,P,D,null),Y>>=1,gt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),T.parentNode!==Y){Y.appendChild(T),f.add(E),Y.onpaint=gt=>{let xt=gt.changedElements;for(let ft of f)xt.includes(ft.image)&&(ft.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,T);else{let xt=i.RGBA,ft=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,ft,wt,T)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(et.length>0){if(tt&&_t){let Y=Ht(et[0]);e.texStorage2D(i.TEXTURE_2D,j,W,Y.width,Y.height)}for(let Y=0,gt=et.length;Y<gt;Y++)H=et[Y],tt?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,P,D,H):e.texImage2D(i.TEXTURE_2D,Y,W,P,D,H);E.generateMipmaps=!1}else if(tt){if(_t){let Y=Ht(T);e.texStorage2D(i.TEXTURE_2D,j,W,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,P,D,T)}else e.texImage2D(i.TEXTURE_2D,0,W,P,D,T);p(E)&&S(Q),_.__version=B.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ot(U,E,$){if(E.image.length!==6)return;let Q=$t(U,E),ct=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);let B=n.get(ct);if(ct.version!==B.__version||Q===!0){e.activeTexture(i.TEXTURE0+$);let _=de.getPrimaries(de.workingColorSpace),v=E.colorSpace===wi?null:de.getPrimaries(E.colorSpace),T=E.colorSpace===wi||_===v?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,T);let P=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,W=[];for(let ft=0;ft<6;ft++)!P&&!D?W[ft]=m(E.image[ft],!0,s.maxCubemapSize):W[ft]=D?E.image[ft].image:E.image[ft],W[ft]=ee(E,W[ft]);let H=W[0],et=r.convert(E.format,E.colorSpace),tt=r.convert(E.type),_t=M(E.internalFormat,et,tt,E.normalized,E.colorSpace),I=E.isVideoTexture!==!0,j=B.__version===void 0||Q===!0,Y=ct.dataReady,gt=w(E,H);Jt(i.TEXTURE_CUBE_MAP,E);let xt;if(P){I&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,_t,H.width,H.height);for(let ft=0;ft<6;ft++){xt=W[ft].mipmaps;for(let wt=0;wt<xt.length;wt++){let It=xt[wt];E.format!==On?et!==null?I?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,0,0,It.width,It.height,et,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,_t,It.width,It.height,0,It.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,0,0,It.width,It.height,et,tt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt,_t,It.width,It.height,0,et,tt,It.data)}}}else{if(xt=E.mipmaps,I&&j){xt.length>0&&gt++;let ft=Ht(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,_t,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(D){I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,W[ft].width,W[ft].height,et,tt,W[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,_t,W[ft].width,W[ft].height,0,et,tt,W[ft].data);for(let wt=0;wt<xt.length;wt++){let ie=xt[wt].image[ft].image;I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,0,0,ie.width,ie.height,et,tt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,_t,ie.width,ie.height,0,et,tt,ie.data)}}else{I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,et,tt,W[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,_t,et,tt,W[ft]);for(let wt=0;wt<xt.length;wt++){let It=xt[wt];I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,0,0,et,tt,It.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt+1,_t,et,tt,It.image[ft])}}}p(E)&&S(i.TEXTURE_CUBE_MAP),B.__version=ct.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function vt(U,E,$,Q,ct,B){let _=r.convert($.format,$.colorSpace),v=r.convert($.type),T=M($.internalFormat,_,v,$.normalized,$.colorSpace),P=n.get(E),D=n.get($);if(D.__renderTarget=E,!P.__hasExternalTextures){let W=Math.max(1,E.width>>B),H=Math.max(1,E.height>>B);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,B,T,W,H,E.depth,0,_,v,null):e.texImage2D(ct,B,T,W,H,0,_,v,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ft(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ct,D.__webglTexture,0,Nt(E)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ct,D.__webglTexture,B),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(U,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){let Q=E.depthTexture,ct=Q&&Q.isDepthTexture?Q.type:null,B=b(E.stencilBuffer,ct),_=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(E),B,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(E),B,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,B,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_,i.RENDERBUFFER,U)}else{let Q=E.textures;for(let ct=0;ct<Q.length;ct++){let B=Q[ct],_=r.convert(B.format,B.colorSpace),v=r.convert(B.type),T=M(B.internalFormat,_,v,B.normalized,B.colorSpace);Ft(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(E),T,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(E),T,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,T,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(U,E,$){let Q=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(E.depthTexture);if(ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,E.depthTexture);let P=r.convert(E.depthTexture.format),D=r.convert(E.depthTexture.type),W;E.depthTexture.format===ri?W=i.DEPTH_COMPONENT24:E.depthTexture.format===ji&&(W=i.DEPTH24_STENCIL8);for(let H=0;H<6;H++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,W,E.width,E.height,0,P,D,null)}}else ut(E.depthTexture,0);let B=ct.__webglTexture,_=Nt(E),v=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,T=E.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ri)Ft(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,v,B,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,T,v,B,0);else if(E.depthTexture.format===ji)Ft(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,v,B,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,T,v,B,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(U){let E=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){let Q=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let ct=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ct)};Q.addEventListener("dispose",ct),E.__depthDisposeCallback=ct}E.__boundDepthTexture=Q}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let Q=0;Q<6;Q++)Bt(E.__webglFramebuffer[Q],U,Q);else{let Q=U.texture.mipmaps;Q&&Q.length>0?Bt(E.__webglFramebuffer[0],U,0):Bt(E.__webglFramebuffer,U,0)}else if($){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),mt(E.__webglDepthbuffer[Q],U,!1);else{let ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,B)}}else{let Q=U.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),mt(E.__webglDepthbuffer,U,!1);else{let ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,B)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(U,E,$){let Q=n.get(U);E!==void 0&&vt(Q.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&dt(U)}function bt(U){let E=U.texture,$=n.get(U),Q=n.get(E);U.addEventListener("dispose",y);let ct=U.textures,B=U.isWebGLCubeRenderTarget===!0,_=ct.length>1;if(_||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),B){$.__webglFramebuffer=[];for(let v=0;v<6;v++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[v]=[];for(let T=0;T<E.mipmaps.length;T++)$.__webglFramebuffer[v][T]=i.createFramebuffer()}else $.__webglFramebuffer[v]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let v=0;v<E.mipmaps.length;v++)$.__webglFramebuffer[v]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(_)for(let v=0,T=ct.length;v<T;v++){let P=n.get(ct[v]);P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Ft(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let v=0;v<ct.length;v++){let T=ct[v];$.__webglColorRenderbuffer[v]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[v]);let P=r.convert(T.format,T.colorSpace),D=r.convert(T.type),W=M(T.internalFormat,P,D,T.normalized,T.colorSpace,U.isXRRenderTarget===!0),H=Nt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,H,W,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+v,i.RENDERBUFFER,$.__webglColorRenderbuffer[v])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),mt($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,E);for(let v=0;v<6;v++)if(E.mipmaps&&E.mipmaps.length>0)for(let T=0;T<E.mipmaps.length;T++)vt($.__webglFramebuffer[v][T],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,T);else vt($.__webglFramebuffer[v],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0);p(E)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_){for(let v=0,T=ct.length;v<T;v++){let P=ct[v],D=n.get(P),W=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(W=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,D.__webglTexture),Jt(W,P),vt($.__webglFramebuffer,U,P,i.COLOR_ATTACHMENT0+v,W,0),p(P)&&S(W)}e.unbindTexture()}else{let v=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(v=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(v,Q.__webglTexture),Jt(v,E),E.mipmaps&&E.mipmaps.length>0)for(let T=0;T<E.mipmaps.length;T++)vt($.__webglFramebuffer[T],U,E,i.COLOR_ATTACHMENT0,v,T);else vt($.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,v,0);p(E)&&S(v),e.unbindTexture()}U.depthBuffer&&dt(U)}function Et(U){let E=U.textures;for(let $=0,Q=E.length;$<Q;$++){let ct=E[$];if(p(ct)){let B=A(U),_=n.get(ct).__webglTexture;e.bindTexture(B,_),S(B),e.unbindTexture()}}}let ht=[],St=[];function Pt(U){if(U.samples>0){if(Ft(U)===!1){let E=U.textures,$=U.width,Q=U.height,ct=i.COLOR_BUFFER_BIT,B=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_=n.get(U),v=E.length>1;if(v)for(let P=0;P<E.length;P++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_.__webglMultisampledFramebuffer);let T=U.texture.mipmaps;T&&T.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglFramebuffer);for(let P=0;P<E.length;P++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),v){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_.__webglColorRenderbuffer[P]);let D=n.get(E[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,$,Q,0,0,$,Q,ct,i.NEAREST),c===!0&&(ht.length=0,St.length=0,ht.push(i.COLOR_ATTACHMENT0+P),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(ht.push(B),St.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),v)for(let P=0;P<E.length;P++){e.bindFramebuffer(i.FRAMEBUFFER,_.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,_.__webglColorRenderbuffer[P]);let D=n.get(E[P]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Nt(U){return Math.min(s.maxSamples,U.samples)}function Ft(U){let E=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(U){let E=o.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function ee(U,E){let $=U.colorSpace,Q=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Rr&&$!==wi&&(de.getTransfer($)===_e?(Q!==On||ct!==vn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",$)),E}function Ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=O,this.setTextureUnits=G,this.setTexture2D=ut,this.setTexture2DArray=nt,this.setTexture3D=it,this.setTextureCube=ot,this.rebindTextures=yt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hy(i,t){function e(n,s=wi){let r,o=de.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ru)return i.BYTE;if(n===ou)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===uu)return i.RGB;if(n===On)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===hu)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===Qi)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===co||n===lo||n===uo||n===ho)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===ja||n===Qa||n===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===fo||n===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===nc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sc)return r.COMPRESSED_R11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ac||n===cc||n===lc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===Sc||n===Mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===bc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===wc||n===po||n===Tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new tn({vertexShader:Gy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends oi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Du,p={},S=e.getContextAttributes(),A=null,M=null,b=[],w=[],L=new At,y=null,C=null,F=new fn;F.viewport=new ye;let N=new fn;N.viewport=new ye;let z=[F,N],q=new ka,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let pt=b[at];return pt===void 0&&(pt=new Js,b[at]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(at){let pt=b[at];return pt===void 0&&(pt=new Js,b[at]=pt),pt.getGripSpace()},this.getHand=function(at){let pt=b[at];return pt===void 0&&(pt=new Js,b[at]=pt),pt.getHandSpace()};function X(at){let pt=w.indexOf(at.inputSource);if(pt===-1)return;let Ct=b[pt];Ct!==void 0&&(Ct.update(at.inputSource,at.frame,l||o),Ct.dispatchEvent({type:at.type,data:at.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ut);for(let at=0;at<b.length;at++){let pt=w[at];pt!==null&&(w[at]=null,b[at].disconnect(pt))}O=null,G=null,m.reset();for(let at in p)delete p[at];if(t.setRenderTarget(A),d=null,h=null,f=null,s=null,M=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(L.width,L.height,!1),C!==null){let at=C.camera;at.fov=C.fov,at.zoom=C.zoom,at.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(at){l=at},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ut),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ot=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=S.stencil?ji:ri,Ot=S.stencil?or:Zn);let mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(mt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new _n(h.textureWidth,h.textureHeight,{format:On,type:vn,depthTexture:new Vi(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ct={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new _n(d.framebufferWidth,d.framebufferHeight,{format:On,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ut(at){for(let pt=0;pt<at.removed.length;pt++){let Ct=at.removed[pt],Ot=w.indexOf(Ct);Ot>=0&&(w[Ot]=null,b[Ot].disconnect(Ct))}for(let pt=0;pt<at.added.length;pt++){let Ct=at.added[pt],Ot=w.indexOf(Ct);if(Ot===-1){for(let mt=0;mt<b.length;mt++)if(mt>=w.length){w.push(Ct),Ot=mt;break}else if(w[mt]===null){w[mt]=Ct,Ot=mt;break}if(Ot===-1)break}let vt=b[Ot];vt&&vt.connect(Ct)}}let nt=new V,it=new V;function ot(at,pt,Ct){nt.setFromMatrixPosition(pt.matrixWorld),it.setFromMatrixPosition(Ct.matrixWorld);let Ot=nt.distanceTo(it),vt=pt.projectionMatrix.elements,mt=Ct.projectionMatrix.elements,Bt=vt[14]/(vt[10]-1),dt=vt[14]/(vt[10]+1),yt=(vt[9]+1)/vt[5],bt=(vt[9]-1)/vt[5],Et=(vt[8]-1)/vt[0],ht=(mt[8]+1)/mt[0],St=Bt*Et,Pt=Bt*ht,Nt=Ot/(-Et+ht),Ft=Nt*-Et;if(pt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ft),at.translateZ(Nt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),vt[10]===-1)at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let k=Bt+Nt,ee=dt+Nt,Ht=St-Ft,U=Pt+(Ot-Ft),E=yt*dt/ee*k,$=bt*dt/ee*k;at.projectionMatrix.makePerspective(Ht,U,E,$,k,ee),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Tt(at,pt){pt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(pt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let pt=at.near,Ct=at.far;m.texture!==null&&(m.depthNear>0&&(pt=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),q.near=N.near=F.near=pt,q.far=N.far=F.far=Ct,(O!==q.near||G!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),O=q.near,G=q.far),q.layers.mask=at.layers.mask|6,F.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;let Ot=at.parent,vt=q.cameras;Tt(q,Ot);for(let mt=0;mt<vt.length;mt++)Tt(vt[mt],Ot);vt.length===2?ot(q,F,N):q.projectionMatrix.copy(F.projectionMatrix),C===null&&at.isPerspectiveCamera&&(C={camera:at,fov:at.fov,zoom:at.zoom}),Rt(at,q,Ot)};function Rt(at,pt,Ct){Ct===null?at.matrix.copy(pt.matrixWorld):(at.matrix.copy(Ct.matrixWorld),at.matrix.invert(),at.matrix.multiply(pt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(pt.projectionMatrix),at.projectionMatrixInverse.copy(pt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=qs*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(at){c=at,h!==null&&(h.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(at){return p[at]};let Zt=null;function Jt(at,pt){if(u=pt.getViewerPose(l||o),g=pt,u!==null){let Ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ot=!1;Ct.length!==q.cameras.length&&(q.cameras.length=0,Ot=!0);for(let dt=0;dt<Ct.length;dt++){let yt=Ct[dt],bt=null;if(d!==null)bt=d.getViewport(yt);else{let ht=f.getViewSubImage(h,yt);bt=ht.viewport,dt===0&&(t.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(M))}let Et=z[dt];Et===void 0&&(Et=new fn,Et.layers.enable(dt),Et.viewport=new ye,z[dt]=Et),Et.matrix.fromArray(yt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(yt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(bt.x,bt.y,bt.width,bt.height),dt===0&&(q.matrix.copy(Et.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ot===!0&&q.cameras.push(Et)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let dt=f.getDepthInformation(Ct[0]);dt&&dt.isValid&&dt.texture&&m.init(dt,s.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let dt=0;dt<Ct.length;dt++){let yt=Ct[dt].camera;if(yt){let bt=p[yt];bt||(bt=new zr,p[yt]=bt);let Et=f.getCameraImage(yt);bt.sourceTexture=Et}}}}for(let Ct=0;Ct<b.length;Ct++){let Ot=w[Ct],vt=b[Ct];Ot!==null&&vt!==void 0&&vt.update(Ot,pt,l||o)}Zt&&Zt(at,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),g=null}let $t=new td;$t.setAnimationLoop(Jt),this.setAnimationLoop=function(at){Zt=at},this.dispose=function(){}}},Xy=new ge,od=new oe;od.set(-1,0,0,0,1,0,0,0,1);function qy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),A=S.envMap,M=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(od),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let w=b.program;n.uniformBlockBinding(M,w)}function l(M,b){let w=s[M.id];w===void 0&&(m(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",S));let L=b.program;n.updateUBOMapping(M,L);let y=t.render.frame;r[M.id]!==y&&(h(M),r[M.id]=y)}function u(M){let b=f();M.__bindingPointIndex=b;let w=i.createBuffer(),L=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],w=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,C=w.length;y<C;y++){let F=w[y];if(Array.isArray(F))for(let N=0,z=F.length;N<z;N++)d(F[N],y,N,L);else d(F,y,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,b,w,L){if(x(M,b,w,L)===!0){let y=M.__offset,C=M.value;if(Array.isArray(C)){let F=0;for(let N=0;N<C.length;N++){let z=C[N],q=p(z);g(z,M.__data,F),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function x(M,b,w,L){let y=M.value,C=b+"_"+w;if(L[C]===void 0)return typeof y=="number"||typeof y=="boolean"?L[C]=y:ArrayBuffer.isView(y)?L[C]=y.slice():L[C]=y.clone(),!0;{let F=L[C];if(typeof y=="number"||typeof y=="boolean"){if(F!==y)return L[C]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(F.equals(y)===!1)return F.copy(y),!0}}return!1}function m(M){let b=M.uniforms,w=0,L=16;for(let C=0,F=b.length;C<F;C++){let N=Array.isArray(b[C])?b[C]:[b[C]];for(let z=0,q=N.length;z<q;z++){let O=N[z],G=Array.isArray(O.value)?O.value:[O.value];for(let X=0,K=G.length;X<K;X++){let ut=G[X],nt=p(ut),it=w%L,ot=it%nt.boundary,Tt=it+ot;w+=ot,Tt!==0&&L-Tt<nt.storage&&(w+=L-Tt),O.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=nt.storage}}}let y=w%L;return y>0&&(w+=L-y),M.__size=w,M.__cache={},this}function p(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){let b=M.target;b.removeEventListener("dispose",S);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}var Zy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function Jy(){return li===null&&(li=new ma(Zy,16,16,Qi,$n),li.name="DFG_LUT",li.minFilter=Qe,li.magFilter=Qe,li.wrapS=ii,li.wrapT=ii,li.generateMipmaps=!1,li.needsUpdate=!0),li}var Nc=class{constructor(t={}){let{canvas:e=Sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([$a,Ja,Za]),p=new Set([vn,Zn,rr,or,qa,Ya]),S=new Uint32Array(4),A=new Int32Array(4),M=new V,b=null,w=null,L=[],y=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,N=!1,z=null,q=null,O=null,G=null;this._outputColorSpace=Fe;let X=0,K=0,ut=null,nt=-1,it=null,ot=new ye,Tt=new ye,Rt=null,Zt=new te(0),Jt=0,$t=e.width,at=e.height,pt=1,Ct=null,Ot=null,vt=new ye(0,0,$t,at),mt=new ye(0,0,$t,at),Bt=!1,dt=new $s,yt=!1,bt=!1,Et=new ge,ht=new V,St=new ye,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Ft(){return ut===null?pt:1}let k=n;function ee(R,Z){return e.getContext(R,Z)}let Ht,U,E,$,Q,ct,B,_,v,T,P,D,W,H,et,tt,_t,I,j,Y,gt,xt,ft;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",me,!1),k===null){let Z="webgl2";if(k=ee(Z,R),k===null)throw ee(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(R){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Qt("WebGLRenderer: "+R.message),R}function wt(){Ht=new n_(k),Ht.init(),gt=new Hy(k,Ht),U=new qx(k,Ht,t,gt),E=new ky(k,Ht),U.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),q=k.createFramebuffer(),O=k.createFramebuffer(),G=k.createFramebuffer(),$=new r_(k),Q=new Ty,ct=new Vy(k,Ht,E,Q,U,gt,$),B=new e_(F),_=new ag(k),xt=new Wx(k,_),v=new i_(k,_,$,xt),T=new a_(k,v,_,xt,$),I=new o_(k,U,ct),et=new Yx(Q),P=new wy(F,B,Ht,U,xt,et),D=new qy(F,Q),W=new Ry,H=new Ny(Ht),_t=new Gx(F,B,E,T,g,c),tt=new zy(F,T,U),ft=new Yy(k,$,U,E),j=new Xx(k,Ht,$),Y=new s_(k,Ht,$),$.programs=P.programs,F.capabilities=U,F.extensions=Ht,F.properties=Q,F.renderLists=W,F.shadowMap=tt,F.state=E,F.info=$}x!==vn&&(C=new l_(x,e.width,e.height,a,s,r));let It=new Nu(F,k);this.xr=It,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let R=Ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(R){R!==void 0&&(pt=R,this.setSize($t,at,!1))},this.getSize=function(R){return R.set($t,at)},this.setSize=function(R,Z,lt=!0){if(It.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=R,at=Z,e.width=Math.floor(R*pt),e.height=Math.floor(Z*pt),lt===!0&&(e.style.width=R+"px",e.style.height=Z+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set($t*pt,at*pt).floor()},this.setDrawingBufferSize=function(R,Z,lt){$t=R,at=Z,pt=lt,e.width=Math.floor(R*lt),e.height=Math.floor(Z*lt),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(x===vn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ot)},this.getViewport=function(R){return R.copy(vt)},this.setViewport=function(R,Z,lt,rt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,Z,lt,rt),E.viewport(ot.copy(vt).multiplyScalar(pt).round())},this.getScissor=function(R){return R.copy(mt)},this.setScissor=function(R,Z,lt,rt){R.isVector4?mt.set(R.x,R.y,R.z,R.w):mt.set(R,Z,lt,rt),E.scissor(Tt.copy(mt).multiplyScalar(pt).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(R){E.setScissorTest(Bt=R)},this.setOpaqueSort=function(R){Ct=R},this.setTransparentSort=function(R){Ot=R},this.getClearColor=function(R){return R.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,lt=!0){let rt=0;if(R){let st=!1;if(ut!==null){let Lt=ut.texture.format;st=m.has(Lt)}if(st){let Lt=ut.texture.type,zt=p.has(Lt),Ut=_t.getClearColor(),Gt=_t.getClearAlpha(),qt=Ut.r,ae=Ut.g,fe=Ut.b;zt?(S[0]=qt,S[1]=ae,S[2]=fe,S[3]=Gt,k.clearBufferuiv(k.COLOR,0,S)):(A[0]=qt,A[1]=ae,A[2]=fe,A[3]=Gt,k.clearBufferiv(k.COLOR,0,A))}else rt|=k.COLOR_BUFFER_BIT}Z&&(rt|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(rt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&k.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),z=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",me,!1),_t.dispose(),W.dispose(),H.dispose(),Q.dispose(),B.dispose(),T.dispose(),xt.dispose(),ft.dispose(),P.dispose(),It.dispose(),It.removeEventListener("sessionstart",Xt),It.removeEventListener("sessionend",jt),ne.stop()};function ie(R){R.preventDefault(),Pr("WebGLRenderer: Context Lost."),N=!0}function Yt(){Pr("WebGLRenderer: Context Restored."),N=!1;let R=$.autoReset,Z=tt.enabled,lt=tt.autoUpdate,rt=tt.needsUpdate,st=tt.type;wt(),$.autoReset=R,tt.enabled=Z,tt.autoUpdate=lt,tt.needsUpdate=rt,tt.type=st}function me(R){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){let Z=R.target;Z.removeEventListener("dispose",be),Je(Z)}function Je(R){Le(R),Q.remove(R)}function Le(R){let Z=Q.get(R).programs;Z!==void 0&&(Z.forEach(function(lt){P.releaseProgram(lt)}),R.isShaderMaterial&&P.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,lt,rt,st,Lt){Z===null&&(Z=Pt);let zt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ut=Es(R,Z,lt,rt,st);E.setMaterial(rt,zt);let Gt=lt.index,qt=1;if(rt.wireframe===!0){if(Gt=v.getWireframeAttribute(lt),Gt===void 0)return;qt=2}let ae=lt.drawRange,fe=lt.attributes.position,Wt=ae.start*qt,xe=(ae.start+ae.count)*qt;Lt!==null&&(Wt=Math.max(Wt,Lt.start*qt),xe=Math.min(xe,(Lt.start+Lt.count)*qt)),Gt!==null?(Wt=Math.max(Wt,0),xe=Math.min(xe,Gt.count)):fe!=null&&(Wt=Math.max(Wt,0),xe=Math.min(xe,fe.count));let Ne=xe-Wt;if(Ne<0||Ne===1/0)return;xt.setup(st,rt,Ut,lt,Gt);let Ae,Ee=j;if(Gt!==null&&(Ae=_.get(Gt),Ee=Y,Ee.setIndex(Ae)),st.isMesh)rt.wireframe===!0?(E.setLineWidth(rt.wireframeLinewidth*Ft()),Ee.setMode(k.LINES)):Ee.setMode(k.TRIANGLES);else if(st.isLine){let rn=rt.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*Ft()),st.isLineSegments?Ee.setMode(k.LINES):st.isLineLoop?Ee.setMode(k.LINE_LOOP):Ee.setMode(k.LINE_STRIP)}else st.isPoints?Ee.setMode(k.POINTS):st.isSprite&&Ee.setMode(k.TRIANGLES);if(st.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))Ee.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let rn=st._multiDrawStarts,kt=st._multiDrawCounts,un=st._multiDrawCount,pe=Gt?_.get(Gt).bytesPerElement:1,Pn=Q.get(rt).currentProgram.getUniforms();for(let ei=0;ei<un;ei++)Pn.setValue(k,"_gl_DrawID",ei),Ee.render(rn[ei]/pe,kt[ei])}else if(st.isInstancedMesh)Ee.renderInstances(Wt,Ne,st.count);else if(lt.isInstancedBufferGeometry){let rn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,kt=Math.min(lt.instanceCount,rn);Ee.renderInstances(Wt,Ne,kt)}else Ee.render(Wt,Ne)};function $e(R,Z,lt,rt){z!==null&&R.isNodeMaterial&&z.setObject(rt,R),yt===!0&&et.setState(R,lt,!1),R.transparent===!0&&R.side===yn&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,Ke(R,Z,rt),R.side=Ji,R.needsUpdate=!0,Ke(R,Z,rt),R.side=yn):Ke(R,Z,rt)}this.compile=function(R,Z,lt=null){lt===null&&(lt=R),z!==null&&z.renderStart(R,Z,lt),w=H.get(lt),w.init(Z),y.push(w),lt.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),R!==lt&&R.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(w.pushLight(st),st.castShadow&&w.pushShadow(st))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),bt=this.localClippingEnabled,yt=et.init(this.clippingPlanes,bt),yt===!0&&et.setGlobalState(this.clippingPlanes,Z),z!==null&&tt.render(w.state.shadowsArray,lt,Z);let rt=new Set;return R.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Lt=st.material;if(Lt)if(Array.isArray(Lt))for(let zt=0;zt<Lt.length;zt++){let Ut=Lt[zt];$e(Ut,lt,Z,st),rt.add(Ut)}else $e(Lt,lt,Z,st),rt.add(Lt)}),w=y.pop(),z!==null&&z.renderEnd(),rt},this.compileAsync=function(R,Z,lt=null){let rt=this.compile(R,Z,lt);return new Promise(st=>{function Lt(){if(rt.forEach(function(zt){let Gt=Q.get(zt).currentProgram;(Gt===void 0||Gt.isReady())&&rt.delete(zt)}),rt.size===0){st(R);return}setTimeout(Lt,10)}Ht.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let We=null;function Mt(R){We&&We(R)}function Xt(){ne.stop()}function jt(){ne.start()}let ne=new td;ne.setAnimationLoop(Mt),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(R){We=R,It.setAnimationLoop(R),R===null?ne.stop():ne.start()},It.addEventListener("sessionstart",Xt),It.addEventListener("sessionend",jt),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(R,Z);let lt=It.enabled===!0&&It.isPresenting===!0,rt=C!==null&&(ut===null||lt)&&C.begin(F,ut);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(Z),Z=It.getCamera()),R.isScene===!0&&R.onBeforeRender(F,R,Z,ut),w=H.get(R,y.length),w.init(Z),w.state.textureUnits=ct.getTextureUnits(),y.push(w),Et.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),dt.setFromProjectionMatrix(Et,Xn,Z.reversedDepth),bt=this.localClippingEnabled,yt=et.init(this.clippingPlanes,bt),b=W.get(R,L.length),b.init(),L.push(b),It.enabled===!0&&It.isPresenting===!0){let zt=F.xr.getDepthSensingMesh();zt!==null&&Pe(zt,Z,-1/0,F.sortObjects)}Pe(R,Z,0,F.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),F.sortObjects===!0&&b.sort(Ct,Ot),Nt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Nt&&_t.addToRenderList(b,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&et.beginShadows();let st=w.state.shadowsArray;if(tt.render(st,R,Z),yt===!0&&et.endShadows(),(rt&&C.hasRenderPass())===!1){let zt=b.opaque,Ut=b.transmissive;if(w.setupLights(),Z.isArrayCamera){let Gt=Z.cameras;if(Ut.length>0)for(let qt=0,ae=Gt.length;qt<ae;qt++){let fe=Gt[qt];zn(zt,Ut,R,fe)}Nt&&_t.render(R);for(let qt=0,ae=Gt.length;qt<ae;qt++){let fe=Gt[qt];bn(b,R,fe,fe.viewport)}}else Ut.length>0&&zn(zt,Ut,R,Z),Nt&&_t.render(R),bn(b,R,Z)}ut!==null&&K===0&&(ct.updateMultisampleRenderTarget(ut),ct.updateRenderTargetMipmap(ut)),rt&&C.end(F),R.isScene===!0&&R.onAfterRender(F,R,Z),xt.resetDefaultState(),nt=-1,it=null,y.pop(),y.length>0?(w=y[y.length-1],ct.setTextureUnits(w.state.textureUnits),yt===!0&&et.setGlobalState(F.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,z!==null&&z.renderEnd()};function Pe(R,Z,lt,rt){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)w.pushLightProbeGrid(R);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(dt)){rt&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);let zt=T.update(R),Ut=R.material;Ut.visible&&b.push(R,zt,Ut,lt,St.z,null,Z)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(dt))){let zt=T.update(R),Ut=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),St.copy(zt.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Ut)){let Gt=zt.groups;for(let qt=0,ae=Gt.length;qt<ae;qt++){let fe=Gt[qt],Wt=Ut[fe.materialIndex];Wt&&Wt.visible&&b.push(R,zt,Wt,lt,St.z,fe,Z)}}else Ut.visible&&b.push(R,zt,Ut,lt,St.z,null,Z)}}let Lt=R.children;for(let zt=0,Ut=Lt.length;zt<Ut;zt++)Pe(Lt[zt],Z,lt,rt)}function bn(R,Z,lt,rt){let{opaque:st,transmissive:Lt,transparent:zt}=R;w.setupLightsView(lt),yt===!0&&et.setGlobalState(F.clippingPlanes,lt),rt&&E.viewport(ot.copy(rt)),st.length>0&&In(st,Z,lt),Lt.length>0&&In(Lt,Z,lt),zt.length>0&&In(zt,Z,lt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function zn(R,Z,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[rt.id]===void 0){let Wt=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[rt.id]=new _n(1,1,{generateMipmaps:!0,type:Wt?$n:vn,minFilter:Ki,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Lt=w.state.transmissionRenderTarget[rt.id],zt=rt.viewport||ot;Lt.setSize(zt.z*F.transmissionResolutionScale,zt.w*F.transmissionResolutionScale);let Ut=F.getRenderTarget(),Gt=F.getActiveCubeFace(),qt=F.getActiveMipmapLevel();F.setRenderTarget(Lt),F.getClearColor(Zt),Jt=F.getClearAlpha(),Jt<1&&F.setClearColor(16777215,.5),F.clear(),Nt&&_t.render(lt);let ae=F.toneMapping;F.toneMapping=Yn;let fe=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),w.setupLightsView(rt),yt===!0&&et.setGlobalState(F.clippingPlanes,rt),In(R,lt,rt),ct.updateMultisampleRenderTarget(Lt),ct.updateRenderTargetMipmap(Lt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let xe=0,Ne=Z.length;xe<Ne;xe++){let Ae=Z[xe],{object:Ee,geometry:rn,material:kt,group:un}=Ae;if(kt.side===yn&&Ee.layers.test(rt.layers)){let pe=kt.side;kt.side=mn,kt.needsUpdate=!0,is(Ee,lt,rt,rn,kt,un),kt.side=pe,kt.needsUpdate=!0,Wt=!0}}Wt===!0&&(ct.updateMultisampleRenderTarget(Lt),ct.updateRenderTargetMipmap(Lt))}F.setRenderTarget(Ut,Gt,qt),F.setClearColor(Zt,Jt),fe!==void 0&&(rt.viewport=fe),F.toneMapping=ae}function In(R,Z,lt){let rt=Z.isScene===!0?Z.overrideMaterial:null;for(let st=0,Lt=R.length;st<Lt;st++){let zt=R[st],{object:Ut,geometry:Gt,group:qt}=zt,ae=zt.material;ae.allowOverride===!0&&rt!==null&&(ae=rt),Ut.layers.test(lt.layers)&&is(Ut,Z,lt,Gt,ae,qt)}}function is(R,Z,lt,rt,st,Lt){z!==null&&st.isNodeMaterial&&z.setObject(R,st),R.onBeforeRender(F,Z,lt,rt,st,Lt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),st.onBeforeRender(F,Z,lt,rt,R,Lt),st.transparent===!0&&st.side===yn&&st.forceSinglePass===!1?(st.side=mn,st.needsUpdate=!0,F.renderBufferDirect(lt,Z,rt,st,R,Lt),st.side=Ji,st.needsUpdate=!0,F.renderBufferDirect(lt,Z,rt,st,R,Lt),st.side=yn):F.renderBufferDirect(lt,Z,rt,st,R,Lt),R.onAfterRender(F,Z,lt,rt,st,Lt)}function Ke(R,Z,lt){Z.isScene!==!0&&(Z=Pt);let rt=Q.get(R),st=w.state.lights,Lt=w.state.shadowsArray,zt=st.state.version,Ut=P.getParameters(R,st.state,Lt,Z,lt,w.state.lightProbeGridArray),Gt=P.getProgramCacheKey(Ut),qt=rt.programs;rt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,rt.fog=Z.fog;let ae=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;rt.envMap=B.get(R.envMap||rt.environment,ae),rt.envMapRotation=rt.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",be),qt=new Map,rt.programs=qt);let fe=qt.get(Gt);if(fe!==void 0){if(rt.currentProgram===fe&&rt.lightsStateVersion===zt)return Ao(R,Ut),fe}else Ut.uniforms=P.getUniforms(R),z!==null&&R.isNodeMaterial&&z.build(R,lt,Ut),R.onBeforeCompile(Ut,F),fe=P.acquireProgram(Ut,Gt),qt.set(Gt,fe),rt.uniforms=Ut.uniforms;let Wt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=et.uniform),Ao(R,Ut),rt.needsLights=xn(R),rt.lightsStateVersion=zt,rt.needsLights&&(Wt.ambientLightColor.value=st.state.ambient,Wt.lightProbe.value=st.state.probe,Wt.sunLights.value=st.state.sun,Wt.sunLightShadows.value=st.state.sunShadow,Wt.directionalLights.value=st.state.directional,Wt.directionalLightShadows.value=st.state.directionalShadow,Wt.spotLights.value=st.state.spot,Wt.spotLightShadows.value=st.state.spotShadow,Wt.rectAreaLights.value=st.state.rectArea,Wt.ltc_1.value=st.state.rectAreaLTC1,Wt.ltc_2.value=st.state.rectAreaLTC2,Wt.pointLights.value=st.state.point,Wt.pointLightShadows.value=st.state.pointShadow,Wt.hemisphereLights.value=st.state.hemi,Wt.sunShadowMatrix.value=st.state.sunShadowMatrix,Wt.sunShadowCascade.value=st.state.sunShadowCascade,Wt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Wt.spotLightMatrix.value=st.state.spotLightMatrix,Wt.spotLightMap.value=st.state.spotLightMap,Wt.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.lightProbeGrid=w.state.lightProbeGridArray.length>0,rt.currentProgram=fe,rt.uniformsList=null,fe}function gr(R){if(R.uniformsList===null){let Z=R.currentProgram.getUniforms();R.uniformsList=lr.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Ao(R,Z){let lt=Q.get(R);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function Ro(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;M.setFromMatrixPosition(Z.matrixWorld);for(let lt=0,rt=R.length;lt<rt;lt++){let st=R[lt];if(st.texture!==null&&st.boundingBox.containsPoint(M))return st}return null}function Es(R,Z,lt,rt,st){Z.isScene!==!0&&(Z=Pt),ct.resetTextureUnits();let Lt=Z.fog,zt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Z.environment:null,Ut=ut===null?F.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:de.workingColorSpace,Gt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,qt=B.get(rt.envMap||zt,Gt),ae=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,fe=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Wt=!!lt.morphAttributes.position,xe=!!lt.morphAttributes.normal,Ne=!!lt.morphAttributes.color,Ae=Yn;rt.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ae=F.toneMapping);let Ee=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,rn=Ee!==void 0?Ee.length:0,kt=Q.get(rt),un=w.state.lights;if(yt===!0&&(bt===!0||R!==it)){let we=R===it&&rt.id===nt;et.setState(rt,R,we)}let pe=!1;rt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==un.state.version||kt.outputColorSpace!==Ut||st.isBatchedMesh&&kt.batching===!1||!st.isBatchedMesh&&kt.batching===!0||st.isBatchedMesh&&kt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&kt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&kt.instancing===!1||!st.isInstancedMesh&&kt.instancing===!0||st.isSkinnedMesh&&kt.skinning===!1||!st.isSkinnedMesh&&kt.skinning===!0||st.isInstancedMesh&&kt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&kt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&kt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&kt.instancingMorph===!1&&st.morphTexture!==null||kt.envMap!==qt||rt.fog===!0&&kt.fog!==Lt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==et.numPlanes||kt.numIntersection!==et.numIntersection)||kt.vertexAlphas!==ae||kt.vertexTangents!==fe||kt.morphTargets!==Wt||kt.morphNormals!==xe||kt.morphColors!==Ne||kt.toneMapping!==Ae||kt.morphTargetsCount!==rn||!!kt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,kt.__version=rt.version);let Pn=kt.currentProgram;pe===!0&&(Pn=Ke(rt,Z,st),z&&rt.isNodeMaterial&&z.onUpdateProgram(rt,Pn,kt));let ei=!1,Pi=!1,ws=!1,Me=Pn.getUniforms(),De=kt.uniforms;if(E.useProgram(Pn.program)&&(ei=!0,Pi=!0,ws=!0),rt.id!==nt&&(nt=rt.id,Pi=!0),kt.needsLights){let we=Ro(w.state.lightProbeGridArray,st);kt.lightProbeGrid!==we&&(kt.lightProbeGrid=we,Pi=!0)}if(ei||it!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(k,"projectionMatrix",R.projectionMatrix),Me.setValue(k,"viewMatrix",R.matrixWorldInverse);let Di=Me.map.cameraPosition;Di!==void 0&&Di.setValue(k,ht.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Me.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Me.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),it!==R&&(it=R,Pi=!0,ws=!0)}if(kt.needsLights&&(un.state.sunShadowMap.length>0&&Me.setValue(k,"sunShadowMap",un.state.sunShadowMap,ct),un.state.directionalShadowMap.length>0&&Me.setValue(k,"directionalShadowMap",un.state.directionalShadowMap,ct),un.state.spotShadowMap.length>0&&Me.setValue(k,"spotShadowMap",un.state.spotShadowMap,ct),un.state.pointShadowMap.length>0&&Me.setValue(k,"pointShadowMap",un.state.pointShadowMap,ct)),st.isSkinnedMesh){Me.setOptional(k,st,"bindMatrix"),Me.setOptional(k,st,"bindMatrixInverse");let we=st.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Me.setValue(k,"boneTexture",we.boneTexture,ct))}st.isBatchedMesh&&(Me.setOptional(k,st,"batchingTexture"),Me.setValue(k,"batchingTexture",st._matricesTexture,ct),Me.setOptional(k,st,"batchingIdTexture"),Me.setValue(k,"batchingIdTexture",st._indirectTexture,ct),Me.setOptional(k,st,"batchingColorTexture"),st._colorsTexture!==null&&Me.setValue(k,"batchingColorTexture",st._colorsTexture,ct));let Li=lt.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&I.update(st,lt,Pn),(Pi||kt.receiveShadow!==st.receiveShadow)&&(kt.receiveShadow=st.receiveShadow,Me.setValue(k,"receiveShadow",st.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Z.environment!==null&&(De.envMapIntensity.value=Z.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Jy()),Pi){if(Me.setValue(k,"toneMappingExposure",F.toneMappingExposure),kt.needsLights&&je(De,ws),Lt&&rt.fog===!0&&D.refreshFogUniforms(De,Lt),D.refreshMaterialUniforms(De,rt,pt,at,w.state.transmissionRenderTarget[R.id]),kt.needsLights&&kt.lightProbeGrid){let we=kt.lightProbeGrid;De.probesSH.value=we.texture,De.probesMin.value.copy(we.boundingBox.min),De.probesMax.value.copy(we.boundingBox.max),De.probesResolution.value.copy(we.resolution)}lr.upload(k,gr(kt),De,ct)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(lr.upload(k,gr(kt),De,ct),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Me.setValue(k,"center",st.center),Me.setValue(k,"modelViewMatrix",st.modelViewMatrix),Me.setValue(k,"normalMatrix",st.normalMatrix),Me.setValue(k,"modelMatrix",st.matrixWorld),rt.uniformsGroups!==void 0){let we=rt.uniformsGroups;for(let Di=0,Ts=we.length;Di<Ts;Di++){let nh=we[Di];ft.update(nh,Pn),ft.bind(nh,Pn)}}return Pn}function je(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.sunLights.needsUpdate=Z,R.sunLightShadows.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function xn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(R,Z,lt){let rt=Q.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Q.get(R.texture).__webglTexture=Z,Q.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){let lt=Q.get(R);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,lt=0){ut=R,X=Z,K=lt;let rt=null,st=!1,Lt=!1;if(R){let Ut=Q.get(R);if(Ut.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(k.FRAMEBUFFER,Ut.__webglFramebuffer),ot.copy(R.viewport),Tt.copy(R.scissor),Rt=R.scissorTest,E.viewport(ot),E.scissor(Tt),E.setScissorTest(Rt),nt=-1;return}else if(Ut.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Ut.__hasExternalTextures)ct.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ae=R.depthTexture;if(Ut.__boundDepthTexture!==ae){if(ae!==null&&Q.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}let Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Lt=!0);let qt=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?rt=qt[Z][lt]:rt=qt[Z],st=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?rt=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?rt=qt[lt]:rt=qt,ot.copy(R.viewport),Tt.copy(R.scissor),Rt=R.scissorTest}else ot.copy(vt).multiplyScalar(pt).floor(),Tt.copy(mt).multiplyScalar(pt).floor(),Rt=Bt;if(lt!==0&&(rt=q),E.bindFramebuffer(k.FRAMEBUFFER,rt)&&E.drawBuffers(R,rt),E.viewport(ot),E.scissor(Tt),E.setScissorTest(Rt),st){let Ut=Q.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ut.__webglTexture,lt)}else if(Lt){let Ut=Z;for(let Gt=0;Gt<R.textures.length;Gt++){let qt=Q.get(R.textures[Gt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Gt,qt.__webglTexture,lt,Ut)}}else if(R!==null&&lt!==0){let Ut=Q.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ut.__webglTexture,lt)}nt=-1};function kn(R){let Z=Q.get(R);return(Z.__readFormat!==R.format||Z.__readType!==R.type)&&(Z.__readFormat=R.format,Z.__readType=R.type,Z.__formatReadable=U.textureFormatReadable(R.format),Z.__typeReadable=U.textureTypeReadable(R.type)),Z}this.readRenderTargetPixels=function(R,Z,lt,rt,st,Lt,zt,Ut=0){if(!(R&&R.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt){E.bindFramebuffer(k.FRAMEBUFFER,Gt);try{let qt=R.textures[Ut],ae=qt.format,fe=qt.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ut);let Wt=kn(qt);if(Wt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-rt&&lt>=0&&lt<=R.height-st&&k.readPixels(Z,lt,rt,st,gt.convert(ae),gt.convert(fe),Lt)}finally{let qt=ut!==null?Q.get(ut).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,lt,rt,st,Lt,zt,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Gt=Gt[zt]),Gt)if(Z>=0&&Z<=R.width-rt&&lt>=0&&lt<=R.height-st){E.bindFramebuffer(k.FRAMEBUFFER,Gt);let qt=R.textures[Ut],ae=qt.format,fe=qt.type;R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ut);let Wt=kn(qt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,xe),k.bufferData(k.PIXEL_PACK_BUFFER,Lt.byteLength,k.STREAM_READ),k.readPixels(Z,lt,rt,st,gt.convert(ae),gt.convert(fe),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ne=ut!==null?Q.get(ut).__webglFramebuffer:null;E.bindFramebuffer(k.FRAMEBUFFER,Ne);let Ae=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ef(k,Ae,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,xe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Lt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(xe),k.deleteSync(Ae),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,lt=0){let rt=Math.pow(2,-lt),st=Math.floor(R.image.width*rt),Lt=Math.floor(R.image.height*rt),zt=Z!==null?Z.x:0,Ut=Z!==null?Z.y:0;ct.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,zt,Ut,st,Lt),E.unbindTexture()},this.copyTextureToTexture=function(R,Z,lt=null,rt=null,st=0,Lt=0){let zt,Ut,Gt,qt,ae,fe,Wt,xe,Ne,Ae=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(lt!==null)zt=lt.max.x-lt.min.x,Ut=lt.max.y-lt.min.y,Gt=lt.isBox3?lt.max.z-lt.min.z:1,qt=lt.min.x,ae=lt.min.y,fe=lt.isBox3?lt.min.z:0;else{let De=Math.pow(2,-st);zt=Math.floor(Ae.width*De),Ut=Math.floor(Ae.height*De),R.isDataArrayTexture?Gt=Ae.depth:R.isData3DTexture?Gt=Math.floor(Ae.depth*De):Gt=1,qt=0,ae=0,fe=0}rt!==null?(Wt=rt.x,xe=rt.y,Ne=rt.z):(Wt=0,xe=0,Ne=0);let Ee=gt.convert(Z.format),rn=gt.convert(Z.type),kt;Z.isData3DTexture?(ct.setTexture3D(Z,0),kt=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ct.setTexture2DArray(Z,0),kt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(Z,0),kt=k.TEXTURE_2D),E.activeTexture(k.TEXTURE0),E.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);let un=E.getParameter(k.UNPACK_ROW_LENGTH),pe=E.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=E.getParameter(k.UNPACK_SKIP_PIXELS),ei=E.getParameter(k.UNPACK_SKIP_ROWS),Pi=E.getParameter(k.UNPACK_SKIP_IMAGES);E.pixelStorei(k.UNPACK_ROW_LENGTH,Ae.width),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ae.height),E.pixelStorei(k.UNPACK_SKIP_PIXELS,qt),E.pixelStorei(k.UNPACK_SKIP_ROWS,ae),E.pixelStorei(k.UNPACK_SKIP_IMAGES,fe);let ws=R.isDataArrayTexture||R.isData3DTexture,Me=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){let De=Q.get(R),Li=Q.get(Z),we=Q.get(De.__renderTarget),Di=Q.get(Li.__renderTarget);E.bindFramebuffer(k.READ_FRAMEBUFFER,we.__webglFramebuffer),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ts=0;Ts<Gt;Ts++)ws&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,st,fe+Ts),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Q.get(Z).__webglTexture,Lt,Ne+Ts)),k.blitFramebuffer(qt,ae,zt,Ut,Wt,xe,zt,Ut,k.DEPTH_BUFFER_BIT,k.NEAREST);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(st!==0||R.isRenderTargetTexture||Q.has(R)){let De=Q.get(R),Li=Q.get(Z);E.bindFramebuffer(k.READ_FRAMEBUFFER,O),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,G);for(let we=0;we<Gt;we++)ws?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.__webglTexture,st,fe+we):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,De.__webglTexture,st),Me?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Li.__webglTexture,Lt,Ne+we):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Li.__webglTexture,Lt),st!==0?k.blitFramebuffer(qt,ae,zt,Ut,Wt,xe,zt,Ut,k.COLOR_BUFFER_BIT,k.NEAREST):Me?k.copyTexSubImage3D(kt,Lt,Wt,xe,Ne+we,qt,ae,zt,Ut):k.copyTexSubImage2D(kt,Lt,Wt,xe,qt,ae,zt,Ut);E.bindFramebuffer(k.READ_FRAMEBUFFER,null),E.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Me?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(kt,Lt,Wt,xe,Ne,zt,Ut,Gt,Ee,rn,Ae.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(kt,Lt,Wt,xe,Ne,zt,Ut,Gt,Ee,Ae.data):k.texSubImage3D(kt,Lt,Wt,xe,Ne,zt,Ut,Gt,Ee,rn,Ae):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Lt,Wt,xe,zt,Ut,Ee,rn,Ae.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Lt,Wt,xe,Ae.width,Ae.height,Ee,Ae.data):k.texSubImage2D(k.TEXTURE_2D,Lt,Wt,xe,zt,Ut,Ee,rn,Ae);E.pixelStorei(k.UNPACK_ROW_LENGTH,un),E.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pe),E.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),E.pixelStorei(k.UNPACK_SKIP_ROWS,ei),E.pixelStorei(k.UNPACK_SKIP_IMAGES,Pi),Lt===0&&Z.generateMipmaps&&k.generateMipmap(kt),E.unbindTexture()},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){X=0,K=0,ut=null,E.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function es(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ve,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=ad(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let g=ad(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function ad(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Oe(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+f,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var ep=ol(Oc(),1);var vo=new V;function Bn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;vo.copy(t),vo[n]=0,vo.normalize();let l=.5*o/(o+a),u=1-vo.angleTo(i)/c;return Math.sign(vo[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Bc=class i extends ke{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new V,l=new V,u=new V(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new V,m=.5/o;for(let p=0,S=0;p<f.length;p+=3,S+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*r,f[p+1]=u.y*Math.sign(c.y)+l.y*r,f[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[S+0]=Bn(x,l,"z","y",r,n),d[S+1]=1-Bn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[S+0]=1-Bn(x,l,"z","y",r,n),d[S+1]=1-Bn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[S+0]=1-Bn(x,l,"x","z",r,t),d[S+1]=Bn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[S+0]=1-Bn(x,l,"x","z",r,t),d[S+1]=1-Bn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[S+0]=1-Bn(x,l,"x","y",r,t),d[S+1]=1-Bn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[S+0]=Bn(x,l,"x","y",r,t),d[S+1]=1-Bn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var cd=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),$y=Math.PI*2;function Ky(){let i=new ue,t=new ke(1,1,1),e=new pn(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new An({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,f,h,d,g,x){let m=new he(c,typeof l=="string"?s(l):l);return m.position.set(u,f,h),m.scale.set(d,g,x),a.add(m),m}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new he(es(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function jy({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new ze({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:yn});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let d of[-1,1])t(i,s?"#deb181":"#aa785d",d*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",d*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(i,o,d,c,0,l,1.8,n),t(i,u,d,f,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,d,f,g,l,h,l)}for(let d of[-n/2+l/2,n/2-l/2])t(i,o,0,c,d,e-l*2,1.8,l),t(i,u,0,f,d,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function Qy({box:i,oval:t,root:e},n,s,r){let o=new ue;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ue;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function tv(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new ze({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new ze({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,m=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,m,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let m=0;m<4;m++){let p=m-1.5,S=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][m],g*t+p*r,n+3+(2+m*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+m*1.12)*Math.min(1.15,r),r*1.15);S.rotation.z=p*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>Qy(i,x,r*(1.72-x*.17),g)),d=Array.from({length:5},(g,x)=>{let m=r*(.45+x%3*.18),p=c(o,f,0,0,0,m,m,m);return p.name="bubble-"+x,p});return g=>{for(let[x,{fish:m,tail:p}]of h.entries()){let S=g*(.43+x*.06)+x*2.07+.5,A=t*(.24+x*.036),M=e*(.17+x*.038);m.position.set(Math.cos(S)*A,n+10+x*3.65+Math.sin(S*1.7)*2.15,Math.sin(S)*M),m.rotation.y=-Math.atan2(Math.cos(S)*M,-Math.sin(S)*A),p.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,m]of d.entries()){let p=(g*.3+x/d.length)%1;m.position.set(t*.33+Math.sin(p*$y+x)*r,n+5+p*20,e*.23),m.visible=p>.08&&p<.94}}}function ev({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ue;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new ue;g.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*d*.28;for(let m of[-1,0,1])e(g,"#ecc297",(m*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:g,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,g=Math.cos(d)*n*.13,x=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*n*.13);for(let[m,p]of u.entries()){let S=m+1;p.position.set(-(3.55+S*1.24)*a,-.19*S*a,Math.sin(h*1.75-S*.55)*S*a*.32)}for(let{leg:m,side:p,front:S}of f)m.rotation.y=Math.sin(h*3.6)*p*S*.31}}function ld(i,t,e){if(!Object.hasOwn(cd,i))return null;let n=cd[i],s=Ky(),r=n==="aquarium",{base:o,top:a}=jy(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?tv(s,t,e,o,a,c):ev(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var J=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),nv=Object.freeze({sage:J.sage,mint:J.aqua,sky:J.blue,peach:J.peach,coral:"#cf8979",lavender:J.lilac,butter:J.honey,cream:J.linen,white:J.cream,oak:J.oakLight,walnut:J.walnut,charcoal:"#505b68",brass:J.brass,terracotta:"#b97d63",forest:J.moss,blush:J.blush,teddy:"#aa8063",slate:"#9b9b9d"}),iv=new Set([J.oak,J.oakLight,J.walnut]),sv=new Set([J.sage,J.moss,J.linen,J.lilac,J.lilacLight,J.blush,J.peach,J.oatmeal,J.upholsteryShadow,J.denim]);function rv(i,t){let e=iv.has(i)?1:sv.has(i)?2:0,n=i===J.glass||i===J.darkGlass||i===J.blueWater,s=i===J.brass,r=i===J.steel||i===J.basinSteel,o=new An({color:i,roughness:s||r?.37:n?.33:i===J.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Ou=class{constructor(t,e){this.root=new ue,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,rv(e,this.grainDirection));let a=new he(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new Bc(s,r,o,2,u):new ke(s,r,o);return this.part(f,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new hs(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new pn(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new Ei(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new At(l,u)),c=new Zr(a,24);return c.scale(s,r,o),this.part(c,J.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:es(s);s.length>1&&s.forEach(a=>a.dispose());let o=new he(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ti(i,t,e,n,s,r,o=J.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function bo(i,t,e,n,s,r,o,a){let c=o===J.linen?J.binding:J.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function ov(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?J.upholsteryShadow:J.moss,u=a?J.oatmeal:J.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(Ti(i,d,g,f,h,5),i.box(d,5,g,f*.97,22,h*.98,l,8),r){let b=o?t*.52:t*.34,w=o?e*.38:e*.46,L=o?t*.22:-t*.32,y=o?c*e*.3:e*.25;Ti(i,L,y,b,w,5),i.box(L,5,y,b,22,w,l,8),i.box(L,25,y,b*.96,12,w*.9,n,5),o&&i.box(L,29,c*e*.464,b,26,x,u,6)}let m=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let b=e*.88/m;for(let w=0;w<m;w++){let L=-e*.44+b*(w+.5);i.box(d+x*.18,25,L,f*.76,12,b-3,n,5),i.box(d-f*.39,27,L,f*.22,31,b-1,u,8)}i.box(d,29,-c*e*.445,f*.88,20,x,u,6),bo(i,d+f*.13,35,-e*.31,f*.42,b*.49,a?J.sage:J.peach,-.18),bo(i,d+f*.12,35,e*.28,f*.4,b*.45,J.linen,.2)}else{let b=t*.8/m;for(let w=0;w<m;w++){let L=-t*.4+b*(w+.5);i.box(L,25,g+h*.08,b-3,12,h*.7,n,6),i.box(L,27,g-h*.39,b-1,31,h*.24,u,7)}for(let w of[-t*.442,t*.442])i.box(w,26,g,x,22,h*.89,u,6);bo(i,-t*.27,35,g-h*.15,t*.18,h*.34,J.peach,-.18),bo(i,t*.27,35,g-h*.12,t*.17,h*.33,J.linen,.2)}let p=o?f*.67:f*.19,S=o?e*.14:h*.58,A=o?d+f*.06:f*.32,M=o?e*.13:g+h*.1;i.box(A,37.1,M,p,1.7,S,J.lilacLight,.65);for(let b of[-1,1])i.box(A,38.82,M+b*S*.36,p*.9,.25,1.2,J.lilac);return 58}function Kn(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Ti(i,t,e,n,s,c,J.walnut),i.box(t,c,e,n*.9,7,s*.92,J.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(u,c+9,f,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function av(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return Kn(i,0,-e*.39,t*.2,e*.23,0,J.denim),Kn(i,0,e*.39,t*.2,e*.23,Math.PI,J.denim),Kn(i,-t*.415,0,t*.17,e*.27,Math.PI/2,J.denim),Kn(i,t*.415,0,t*.17,e*.27,-Math.PI/2,J.denim),Ti(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,J.walnut,3),i.box(0,37,0,t*.79,8,e*.57,J.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,J.linen,.6),46.4;if(r)Kn(i,0,-e*.37,t*.2,e*.2,0,J.sage),Kn(i,0,e*.37,t*.2,e*.2,Math.PI,J.blush),Kn(i,-t*.38,0,t*.2,e*.2,Math.PI/2,J.lilac),Kn(i,t*.38,0,t*.2,e*.2,-Math.PI/2,J.honey),i.disc(0,0,0,t*.13,5,e*.13,J.walnut),i.disc(0,4,0,t*.045,31,e*.045,J.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[J.sage,J.blush,J.lilac,J.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])Kn(i,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Ti(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,J.linen,.5)}return 42}function cv(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,J.ink,.5),i.box(t,e+1,n,s*.1,14,4,J.ink,1),i.box(t,e+12,n,s,25,6,J.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,J.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,J.blue,.2)}function lv(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&i.box(l,37,f+.8,a,7,u-1.6,n,2.4),i.box(l,4,f,a*.81,34,u*.81,J.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;i.box(l,d,f+u*.41,a*.74,8.4,2,J.oak,.7),i.box(l,d+3,f+u*.43,a*.26,2,2,J.brass,.5)}}return cv(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,J.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,J.peach),81}function ud(i,t,e,n,s,r){let o=new Tn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Hi(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function uv(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ti(i,0,0,t,e,6,J.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,J.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,J.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,J.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,J.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)bo(i,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,J.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,g,x,m]of[[-.24,.12,1,J.cream],[.23,.27,.79,J.honey],[.08,.04,.57,J.cream],[-.1,.34,.62,J.honey]])ud(i,t*d,u+30.8,e*g,h*x,m);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,u+30.71,e*.24,.85,.24,e*.33,J.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,u+30.72,e*d,t*.71,.24,.9,J.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,J.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])i.box(t*.45*u,4,e*.46*f,5,l,6,J.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*u,l-29,e*f*.105,3,20,3,n,.8)}return l}function hv(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ti(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,J.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,J.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,g=h*(f-(l-1)/2),x=5+u*d;i.box(g,x,e*.46,h-2,d-1.5,2.9,n,1),i.oval(g,x+d*.45,e*.51,2.2,1.7,2.2,J.brass)}return a+2}function fv(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,J.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,J.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,J.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?J.lilac:J.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,J.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?J.lilacLight:J.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,J.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,J.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,J.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])ud(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,J.cream);return 5}function dv(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,J.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,J.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,J.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,J.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,J.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,J.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,J.darkGlass);i.box(0,n-4.5,o,s,4.85,u,J.steel,.4);let f=-s/2-u*1.15;i.disc(f,n,o,u*.8,u*2.9,u*.8,J.steel),i.box(f+u,n+u*2.5,o,u*2.8,u*.7,u,J.steel,.6)}function pv(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?J.sage:J.walnut,2.3),s?dv(i,t,e,r+2):i.box(0,r-3,0,t,5,e,J.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(d,6,g,f,r*.67,h,a?J.moss:J.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,J.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,J.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,f,f,1,J.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,J.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,J.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,J.brass,1);return r+3}function mv(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,J.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,J.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,J.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,J.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,J.glass),i.disc(0,22,-e*.44,3.5,9,3.5,J.brass),i.box(0,30,-e*.4,5,3.7,e*.1,J.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,J.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,J.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,J.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,J.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,J.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,J.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,J.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,J.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,J.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,J.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,J.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,J.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,J.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,J.blush,1.7),36)}function gv(i,t,e,n,s){let r=n?J.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,J.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,J.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,J.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,J.linen,3.8),c+o*(n?.37:.28)}function xv(i,t,e){let s=[J.sage,J.peach,J.honey,J.lilac,J.blue,J.blush];Ti(i,0,0,t*.96,e*.96,22,J.sage),i.box(0,20,0,t*.94,7,e*.93,J.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function _v(i,t,e,n){let s=[J.linen,n,J.sand,J.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function yv(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,J.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,J.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,f=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,J.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=n?J.sage:[J.blush,J.linen,J.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function hd(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return ld(t,e,n);let s=nv[t.split("-").at(-1)],r=new Ou(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=ov(r,e,n,s||(t==="sofa"?J.linen:J.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,J.walnut,3.5),r.box(0,24,0,e,4,n,J.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,J.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,J.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,J.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,J.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,J.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=av(r,e,n,s||J.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=lv(r,e,n,s||J.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))Kn(r,0,0,e,n,0,s||J.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){Kn(r,0,0,e,n,0,s||J.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,J.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=uv(r,e,n,s||J.lilac,t);else if(t==="rug")o=fv(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=pv(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=mv(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=yv(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,J.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,J.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,J.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=hv(r,e,n,s||J.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Ti(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||J.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,J.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=gv(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=_v(r,e,n,s||J.sage);else if(t.startsWith("baby-activities-"))o=xv(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||J.peach),r.ring(0,a,0,a*.95,a*.95,1.2,J.linen),o=a*2}else return null;return r.finish(o)}var Vt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Mo=Math.PI,Bu=2*Mo,vv=new Set(["unknown","unavailable"]),Qn=(i,t,e)=>Math.max(t,Math.min(e,i)),So=(i,t)=>Number.isFinite(i)?Qn(i,12,480):t,pd=.96,md=.09;function gd(i,t,e){let n=So(i.w,42),s=So(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*md)<=s*pd/2}var le=(i,t={})=>new An({color:i,roughness:.83,...t}),zu=i=>String(i?.state??"unknown"),bs=i=>!vv.has(zu(i)),fr=i=>bs(i)&&(i.active===!0||i.state==="on"),bv=i=>fr(i)?Number.isFinite(i.attributes?.brightness)?Qn(i.attributes.brightness/255,0,1):1:0;function Ai(i,t,e,n=0,s=0,r=0){let o=new he(t,e);return o.position.set(n,s,r),i.add(o),o}function Ze(i,t,e,n,s,r=0,o=0,a=0){return Ai(i,new ke(t,e,n),s,r,o,a)}function ln(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,f=l-e/2,h=new Tn;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new Si(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),Ai(i,d,s,r,o,a)}function Ge(i,t,e,n,s,r=0,o=0,a=0,c=16){return Ai(i,new hs(t,e,n,c),s,r,o,a)}function jn(i,t,e,n,s,r){return Ai(i,new pn(t,10,7),e,n,s,r)}function hr(i,t=0,e=0,n=0){let s=new ue;return s.position.set(t,e,n),i.add(s),s}function Sv(i,t){let e=new tn({transparent:!0,depthWrite:!1,blending:so,uniforms:{strength:{value:0},tint:{value:new te(Vt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=Ai(i,new Mi(2*t,2*t),e,0,2.8,0);return n.rotation.x=-Mo/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function Mv(i,t,e){let n=new ue,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),h=le(Vt.honey),d=le(Vt.ink),g=le(Vt.brass,{roughness:.36,metalness:.42}),x=le(Vt.cream,{emissive:Vt.warm,emissiveIntensity:0}),m=new te(Vt.warm),p=u?46:o?50:a?56:l?40:c?56:36,S=Sv(n,Qn(f*(a?1.72:1.35),38,110));if(a){let A=f*(u?.19:.29);Ge(n,A,A*1.02,3,d,0,p+2),o&&Ge(n,1.7,1.7,13,h,0,p+9),Ge(n,A*.82,A,5,h,0,p-1.5),Ge(n,A*.92,A*.96,1.15,g,0,p+1.1);let M=jn(n,A*.83,x,0,p,0);M.scale.y=o?.88:.52}else if(l)ln(n,f*.34,18,4,d,0,35,-4),Ge(n,f*.12,f*.11,14,h,0,37,3),jn(n,f*.21,x,0,p+3,3);else{let A=p-7,M=c?3:16,b=f*(c?.25:.3);if(Ge(n,b*.57,b*.67,4,d,0,M),Ge(n,2,2.9,A-M,h,0,(M+A)/2),c)jn(n,b*.81,x,0,p,0);else{let w=r==="bud_lamp"?12:9;Ge(n,b*.56,b,14,x,0,p,0,w),Ge(n,b,b*.99,1.2,g,0,p-6.7,0,w),Ge(n,b*.55,b*.58,1.1,g,0,p+7.1,0,w)}}return{root:n,anchorY:p+2,animate(A){let M=bv(A),b=A?.attributes?.rgb_color;if(Array.isArray(b)&&b.length===3&&b.every(Number.isFinite)){let[w,L,y]=b.map(C=>Qn(C/255,0,1));m.setRGB(w,L,y,Fe)}else m.setHex(Vt.warm);S(M,m),x.emissiveIntensity=M*.88,x.emissive.copy(m),M>0?x.color.copy(m):x.color.setHex(Vt.cream)}}}function Ev(i){let t=new Tn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Si(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Mo/2)}function fd(i,t,e,n){let s=new ue,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=hr(s,0,o,0);n&&(a.rotation.x=Mo/2);let c=hr(a,0,-1,0),l=le(Vt.cream),u=le(Vt.ink),f=/(?:white|cream)$/.test(i.type)?Vt.oat:/(?:forest|sage)$/.test(i.type)?Vt.sage:Vt.honey,h=le(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Ge(a,r*.18,r*.2,6,u),Ge(a,r*.174,r*.176,1.4,le(Vt.brass,{roughness:.36,metalness:.42}),0,3.4),Ge(a,r*.15,r*.17,2.6,l,0,4.9);let g=Ev(r);for(let x=0;x<d;x++){let m=hr(c);m.rotation.y=x/d*Bu,Ai(m,g,h)}if(n){ln(s,r*1.66,6,r*1.02,u,0,3),Ze(s,r*.3,11,6,l,0,10);let x=Ai(s,new Ei(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let m=-1;m<=1;m++){let p=m*r*.5;Ge(s,.68,.68,2*Math.sqrt(r*r-p*p),u,p,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,m=0){let p=Number.isFinite(x?.attributes?.percentage)?Qn(x.attributes.percentage/100,.12,1):.64;c.rotation.y=fr(x)?m*Bu*p%Bu:0}}}function wv(i,t){let e=new ue,n=t.mountY??39,s=hr(e,0,n),r=Qn(i*.72,17,27);ln(s,r,31,5,le(Vt.ink),0,0,-.5),ln(s,r-1.9,29,4.4,le(Vt.cream),0,.3,1);let o=le(Vt.oat,{emissive:Vt.warm,emissiveIntensity:0}),a=ln(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=le(Vt.teal,{emissive:Vt.mint,emissiveIntensity:0});return jn(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=bs(l)?fr(l)?-.16:.16:0,o.emissiveIntensity=fr(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?Vt.mint:Vt.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function dd(i,t,e,n=31){let s=new ue,r=36.5,o=Math.max(12,i-6),a=le(Vt.oat);if(t){let h=le(Vt.glass,{roughness:.32});Ze(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])Ze(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;Ze(s,o,1.8,7,h,0,d+.35);for(let g of[-4.25,4.25])Ze(s,o+2,3.2,1.5,a,0,d,g);Ze(s,o+3,3.8,11,a,0,r-n/2,1.4),Ze(s,o,1.35,.5,le(Vt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=le(Vt.cream),l=r+n/2-1;ln(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>Ze(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h){let d=ku(h);d!==null&&(f=1-d);let g=Number.isFinite(h?.attributes?.current_tilt_position)?Qn(h.attributes.current_tilt_position/100,0,1):0;for(let x=0;x<u.length;x++){let m=Qn(f*u.length-x,0,1);u[x].visible=m>.02,u[x].scale.y=m,u[x].rotation.x=g*.9}}}}function ku(i){return bs(i)?Number.isFinite(i.attributes?.current_position)?Qn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function Tv(i,t){let e=new ue,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=le(Vt.oat),l=le(Vt.cream),u=le(Vt.plum),f=[le(Vt.tile),le(Vt.paleTile)],h=le(Vt.dark);Ze(e,i,5,t*pd,l,0,2.5,t*md),Ze(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let N of[-i*.42,i*.42])Ze(e,i*.09,o+4,n,c,N,(o+4)/2),ln(e,i*.1,o+4,5,l,N,(o+4)/2,r+1,1.5);let d=new Tn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new Si(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Ai(e,g,u,0,o+4);let x=i*.49,m=Math.atan2(a,x),p=Math.hypot(a,x),S=(n+11)/8,A=[[],[]];for(let N of[-1,1])for(let z=0;z<8;z++){let q=-r-5.5+(z+.5)*S,O=new ke(p*.97,2.2,S-.62);O.rotateZ(-N*m),O.translate(N*x*.5,o+5.65+a*.5,q),A[z%2].push(O)}A.forEach((N,z)=>{Ai(e,es(N),f[z]),N.forEach(q=>q.dispose())}),ln(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),Ze(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),Ze(e,s,o,1.5,h,0,o/2+4,r-4);for(let N of e.children)N.isMesh&&(N.castShadow=!0);let M=le(Vt.mint),b=le(Vt.sage),L=(o-3)/6,y=Array.from({length:6},(N,z)=>{let q=hr(e,0,o-(z+.5)*L+2,r+.5);return ln(q,s-2,L-.7,3.4,M,0,0,0,1.2),Ze(q,s*.91,.68,.7,b,0,L*.23,1.8),z===5&&ln(q,s*.13,2,2.2,l,0,0,2.3,.55),q}),C=le(Vt.gold,{emissive:Vt.ember,emissiveIntensity:0});jn(e,3.7,C,i*.422,o*.73,r+4.5);let F=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(N,z=0){let q=ku(N);q!==null&&(F=q),M.color.setHex(bs(N)?Vt.mint:Vt.muted),b.color.setHex(bs(N)?Vt.sage:Vt.muted);let O=(1-F)*y.length;y.forEach((X,K)=>{let ut=Qn(O-K,0,1);X.visible=ut>.02,X.scale.y=ut,X.position.y=o-(K+ut/2)*L+2});let G=["opening","closing"].includes(zu(N));C.emissiveIntensity=G?.55+(.5+.5*Math.cos(z*6)):0}}}function Av(i){let t=new ue,e=46,n=le(Vt.cream),s=le(Vt.honey),r=Math.min(i*.86,88),o=hr(t,-r/2,0,0);for(let a of[-r/2-1,r/2+1])Ze(t,3.4,e,5,n,a,e/2);return Ze(t,r+4,3,5,n,0,e),ln(o,r-2,e-4,4,s,r/2,e/2,0,2),jn(o,2.2,le(Vt.gold),r-6,e*.47,2.8),{root:t,anchorY:e/2,animate(a){let c=ku(a);c!==null&&(o.rotation.y=-1.32*c),s.color.setHex(bs(a)?Vt.honey:Vt.muted)}}}function Rv(i,t,e){let n=new ue,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=Qn(t*.85,23,126),a=le(Vt.dark,{emissive:Vt.mint,emissiveIntensity:0});if(ln(n,o,s?25:18,8,le(Vt.cream),0,r,0),s){ln(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])jn(n,1.35,le(Vt.oat),o*c,r-7,4.3)}else Ze(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=bs(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Vt.warm:Vt.glass),a.emissiveIntensity=f?1.15:fr(c)?.25:0}}}function Cv(i,t,e){let n=new ue,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=le(Vt.cream),c=le(r?Vt.glass:Vt.sage),l=le(Vt.teal,{emissive:Vt.mint,emissiveIntensity:0}),u=o-1;if(Ge(n,s*.46,s*.5,4,le(Vt.ink),0,2),r){let d=jn(n,s/2,c,0,12,0);d.scale.y=.78,Ge(n,s*.19,s*.22,3.5,a,0,u)}else{ln(n,s,24,s*.82,c,0,15,0,5),ln(n,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)Ze(n,s*.66,1.2,1.1,l,0,u+2,d*3.5)}jn(n,1.6,l,s*.18,u-2,s*.31);let f=le(Vt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,g)=>jn(n,2.1+g*.6,f,0,u+3,0));return{root:n,anchorY:u,animate(d,g=0){let x=fr(d);l.emissiveIntensity=x?1.6:0;for(let m=0;m<h.length;m++){h[m].visible=x;let p=(g*.68+m/h.length)%1;h[m].position.set(Math.sin(p*Mo)*3.1,u+4+p*14,0),h[m].scale.setScalar(.7+p*.62)}}}}function Iv(i,t){let e=new ue,n=Math.min(i,t)*.42,s=le(Vt.sage,{emissive:Vt.mint,emissiveIntensity:0}),r=le(Vt.ink);Ge(e,n,n*.95,7,r,0,4.6),Ge(e,n*.96,n,5.5,le(Vt.cream),0,10.2),Ge(e,n*.28,n*.33,4,le(Vt.oat),0,14,-n*.23);for(let a of[-.27,.27])jn(e,n*.105,r,n*a,10,n*.88);let o=ln(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03,animate(a,c=0){let l=["cleaning","returning"].includes(zu(a));o.material.emissiveIntensity=l?.6+.5*Math.cos(c*6):0}}}function xd(i,t={}){let e=So(i.w,42),n=So(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?wv(e,t):s==="garageDoor"?Tv(e,n):s==="door"||r==="door"?Av(e):s==="window"?dd(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?dd(So(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?Rv(i,e,t):s==="airPurifier"||s==="humidifier"?Cv(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?Iv(e,n):s==="windowFan"?fd(i,e,n,!0):r==="fan"||/^fans-/.test(s)?fd(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?Mv(i,e,n):null}var Md=ol(Oc(),1),{difference:Ed,union:wd}=Md.default,Vc=18,Cn=.001,ui=(i,t)=>i[0]*t[0]+i[1]*t[1],Ss=(i,t)=>i[0]*t[1]-i[1]*t[0],hi=(i,t)=>[i[0]-t[0],i[1]-t[1]],Te=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],Gc=([i,t])=>[-t,i],_d=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],zc=i=>i.map(({x:t,y:e})=>[t,e]),Ri=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Td=i=>i.length?wd(...i):[];function Hc(i,t,e,n=0){let s=hi(t,i),r=Math.hypot(...s);if(r<Cn)return null;let o=s.map(u=>u/r),a=Gc(o),c=Te(i,o,-n),l=Te(t,o,n);return Ri([Te(c,a,e),Te(l,a,e),Te(l,a,-e),Te(c,a,-e)])}function kc(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function yd(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=hi(n,t),r=Math.hypot(...s);return r>Cn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function Pv(i,t,e,n){if(Math.abs(ui(i.tangent,t.tangent))<.9999)return null;let s=Gc(i.tangent),[r,o]=[t.start,t.end].map(x=>hi(x,i.start)),a=ui(r,s);if(Math.abs(a)<.1||Math.abs(a)>Vc||Math.abs(a-ui(o,s))>.1)return null;let c=[ui(r,i.tangent),ui(o,i.tangent)].sort((x,m)=>x-m),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let f=Te(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!kc(e,Te(f,s,-h))||!kc(n,Te(f,s,a+h))||kc(e,Te(f,s,a/2))||kc(n,Te(f,s,a/2)))return null;let d=Te(i.start,i.tangent,l),g=Te(i.start,i.tangent,u);return Ri([Te(d,s,-h*.05),Te(g,s,-h*.05),Te(g,s,a+h*.05),Te(d,s,a+h*.05)])}function Ad(i){let t=[],e=[];for(let n of[...i].reverse()){let s=Td(n.polygons);if(!s.length)continue;let r=t.length?Ed(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?wd(t,s):s}return{footprint:t,regions:e.reverse()}}function Eo(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Rd(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:zc(h.points),polygons:[Ri(zc(h.points))],outdoor:e&&Eo(h)})),s=[];for(let[h,d]of n.entries())for(let g of n.slice(h+1))for(let x of yd(d.points))for(let m of yd(g.points)){let p=Pv(x,m,d.points,g.points);p&&s.push({surface:d.surface,polygons:[p],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:g,deckBottom:x,northDeck:m,southDeck:p,recess:S}=t;r.push({surface:"patio",polygons:[Ri(zc(m)),Ri(zc(p)),Ri(_d(h,g,d+1,x))]}),S.x2>S.x1&&S.z2>S.z1&&o.push({surface:"oak",polygons:[Ri(_d(S.x1,S.z1,S.x2,S.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=Ad([...l,...c]),f=t||e?Td(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function Lv(i,t,e,n){let s=Ss(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Te(i,Gc(t),r),a=Te(i,Gc(e),-r),c=Ss(hi(a,o),e)/s,l=Te(o,t,c);return Math.hypot(...hi(l,i))>n*2.5?Ri([i,o,a]):Ri([i,o,l,a])}function vd(i,t){let e=Ss(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=hi(t.point,i.point);return[Ss(n,t.tangent)/e,Ss(n,i.tangent)/e]}function Dv(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=hi(r.point,s.point);if(Math.hypot(...o)>Vc)continue;let a=vd(s,r);a&&a.every(c=>c>=-Vc&&c<=Cn)?e.push({a:s,b:r,center:Te(s.point,s.tangent,a[0])}):!a&&ui(s.tangent,r.tangent)<0&&ui(o,s.tangent)<=Cn&&ui(o,r.tangent)>=-Cn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=vd(s,o);if(!a)continue;let[c,l]=a;c<-Vc||c>=-Cn||l<=Cn||l>=r.length-Cn||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:Te(s.point,s.tangent,c)})}}return e}function bd({a:i,b:t,center:e},n){return e?[Hc(i.point,e,n,.1),t&&Hc(t.point,e,n,.1),t&&Lv(e,i.tangent,t.tangent,n)].filter(Boolean):[Hc(i.point,t.point,n,.1)].filter(Boolean)}function Cd(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function Nv(i,t){return Cd(i).flatMap(([e,n])=>{let s=hi(n,e),r=Math.hypot(...s);if(r<Cn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=hi(a,e),u=hi(c,e);if(Math.abs(Ss(l,o))>Cn||Math.abs(Ss(u,o))>Cn)return[];let[f,h]=[ui(l,o),ui(u,o)].sort((x,m)=>x-m),d=Math.max(0,f),g=Math.min(r,h);return g-d>Cn?[[Te(e,o,d),Te(e,o,g)]]:[]})})}function Sd(i,t){return t?.length?Ed(i,t):i}function Id(i,t,e,n){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of i){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],g=(S,A,M,b,w,L,y)=>{A-S>Cn&&r(Hc(Te(h,d,S),Te(h,d,A),w/2),M,b,L,y)},x=c.openings.length?n:0,m=(S,A)=>{g(S,A,x,e,t,l,2),g(S,A,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let p=0;for(let S of c.openings)m(p,S.start),p=Math.max(p,S.end);m(p,c.length),g(0,c.length,0,3,t+3,f,1)}for(let c of Dv(i)){let[l,u,f]=c.a.wall.palette;for(let h of bd(c,t/2))r(h,0,e,l,2);for(let h of bd(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of h.sort((x,m)=>x.priority-m.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{...Ad([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=Cd(l);return c.map(g=>({...g,bottom:u,top:f,faces:{top:Sd(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:Sd(g.polygons,a[h-1]?.footprint),sides:Nv(g.polygons,d)}}))})}var Uv=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Fv=3;function Pd(i,t,e){i.toneMapping=ro,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=gs,i.shadowMap.autoUpdate=!1;let n=new ms("#fff4e5","#897e91",1.13),s=new Yi("#fff0d4",2.15),r=new Yi("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:Fv},()=>new to("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],x,m,p=!0,S=new te;function A(){for(let w of t.children)w.isMesh&&(w.receiveShadow=!0,w.geometry.computeBoundingBox(),w.castShadow=w.geometry.boundingBox.max.y+w.position.y>-99)}function M(w,L){let y=/(light|lamp|sconce)/i.test(w.type),C=!L.animate||y;L.root.traverse(F=>{!F.isMesh||F.material.transparent||F.material.isShaderMaterial||(F.receiveShadow=!0,F.castShadow||=C)}),y&&w.entityId&&g.push({item:w,object:L})}function b(w,L,y){let C=w.night===!0,F=Uv.has(w.condition),N=C?"night":F?"cloud":"day";if(N!==x&&(n.color.set(C?"#a8b8f5":F?"#dce6f1":"#fff4e5"),n.groundColor.set(C?"#5b536e":"#998291"),n.intensity=C?.75:F?1.33:1.12,s.color.set(C?"#a7b8ed":F?"#e9eff9":"#fff0d4"),s.intensity=C?.28:F?.86:2.14,r.intensity=C?.12:.23,s.shadow.intensity=C?.65:F?.39:.84,y.color.set(C?"#97a5c5":F?"#ccd6c6":"#f4f1d8"),t.background.set(C?"#343951":"#c0cbb4"),x=N,m=void 0),m!==L){let z=g.flatMap(({item:q,object:O})=>{let G=L[q.id];if(G?.state!=="on")return[];let X=Number.isFinite(G.attributes?.brightness)?Ie.clamp(G.attributes.brightness/255,0,1):1;return X>0?[{object:O,power:X,color:G.attributes?.rgb_color}]:[]}).sort((q,O)=>O.power-q.power);for(let[q,O]of d.entries()){let G=z[q];if(!G){O.intensity=0;continue}let{object:X,power:K,color:ut}=G;Array.isArray(ut)&&ut.length===3&&ut.every(Number.isFinite)?(S.setRGB(...ut.map(it=>Ie.clamp(it/255,0,1)),Fe),O.color.copy(S)):O.color.set("#ffd5a2"),O.position.copy(X.root.position),O.position.y+=Math.max(18,X.anchorY-9),O.intensity=K*(C?2350:1250)}m=L}p&&(i.shadowMap.needsUpdate=!0,p=!1)}return{markStructure:A,register:M,update:b,dispose:()=>s.shadow.dispose()}}var fi=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),dr=Object.freeze({default:fi("Default",0,0),top:fi("Top down",0,0),high:fi("High angle",0,15),dollhouse:fi("Dollhouse",2,30),corner:fi("Corner",45,40),north:fi("From north",180,42),east:fi("From east",90,42),south:fi("From south",0,42),west:fi("From west",270,42),free:fi("Free view",0,25)});function Ld(i,t=!1){let e=Object.entries(dr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Ci(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(dr,t.preset)?t.preset:"top",n=dr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?Ie.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?Ie.clamp(t.zoom,.6,2.5):n.zoom}}function Dd(i){let t=Ci(i);return{...t,preset:"free",tilt:t.tilt||dr.free.tilt}}function Vu(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Ci(i)}function Hu(i){return Ci({...Vu(i),preset:"default"})}function Nd(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>Vu(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return Vu(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function Gu(i,t,e,n,s="top"){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let r=Ci(s),o=Ie.degToRad(r.azimuth),a=Ie.degToRad(r.tilt),c=new V((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),l=new V(Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a));i.up.set(-Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)),i.position.copy(c).addScaledVector(l,1900),i.lookAt(c),i.updateMatrixWorld(!0);let u=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),f=new Be,h=new V;for(let S of[t.minX-37,t.maxX+37])for(let A of[t.minZ-53,t.maxZ+36])for(let M of[-111,u])f.expandByPoint(h.set(S,M,A).applyMatrix4(i.matrixWorldInverse));let d=e/n,g=Math.max((f.max.x-f.min.x)/2,(f.max.y-f.min.y)/2*d),x=g/d,m=(f.min.x+f.max.x)/2,p=(f.min.y+f.max.y)/2;return i.left=m-g,i.right=m+g,i.bottom=p-x,i.top=p+x,i.zoom=r.zoom,i.updateProjectionMatrix(),r}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Dining table",icon:"\u25B0",w:165,h:108,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=p=>typeof p=="string"&&p.startsWith("ui"),o=p=>String(p??"").toLowerCase(),a=p=>o(p).split(".")[0],c=p=>typeof p=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(p),l=p=>p.type==="window"?"wall":p.mount||"floor";function u(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function f(p,S,A){return!(!p||!S||!A||p.type===A.type||s.has(p.type)||r(p.type)||s.has(A.type)||r(A.type)||l(S)!==l(A)||p.entityId&&!h(p.entityId,A))}function h(p,S){return!c(p)||typeof S?.type!="string"||r(S.type)||S.type==="stairs"||S.type==="window"?!1:S.type==="cameraThumbnail"?a(p)==="camera":S.type==="garageDoor"?a(p)==="cover":a(p)!=="camera"}function d(p,S){let A=a(p.entity_id),M=o(p.name+" "+p.entity_id),b={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},w=y=>{if(y.type==="controlZone")return!0;if(A==="camera")return y.type==="cameraThumbnail";if(A==="cover")return/garage/.test(M)&&y.type==="garageDoor";if(A==="climate")return y.type==="thermostat";if(A==="binary_sensor"&&/presence|occupancy/.test(M))return y.type==="presenceSwitch";if(b[A]?.includes(y.group)||/humidifier/.test(M)&&y.type==="humidifier"||/purifier/.test(M)&&y.type==="airPurifier")return!0;if(A==="switch"){if(/fan/.test(M))return y.group==="fans"||y.type==="windowFan";if(/light|lamp/.test(M))return y.group==="lighting"}return!1},L=S.filter(y=>h(p.entity_id,y));return{recommended:L.filter(w),available:L}}function g(p){return p&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(p.type)&&!r(p.type)}function x(p,S,A,M){if(!["w","h"].includes(S)||!Number.isFinite(A))return null;let b=p.type==="cameraThumbnail"?40:12,w=p.type==="cameraThumbnail"||c(p.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!M)return{[S]:Math.min(w[S],Math.max(b,A))};let L=Math.min(w.w/p.w,w.h/p.h),y=Math.min(L,Math.max(b/p.w,b/p.h)),C=Math.min(L,Math.max(y,A/p[S]));return{w:Math.round(p.w*C*10)/10,h:Math.round(p.h*C*10)/10}}function m(p,S,A){let M=p.ownerDocument,b=(Tt,Rt,Zt={})=>{let Jt=M.createElement(Tt);Rt&&(Jt.textContent=Rt);for(let[$t,at]of Object.entries(Zt))Jt.setAttribute($t,at);return Jt},w=b("dialog","",{class:"model-library","aria-label":"Objects and models"}),L=b("header"),y=b("h2","Objects & models"),C=b("button","Close",{type:"button"});L.append(y,C);let F=b("div","",{class:"model-library-filters"}),N=b("select","",{"aria-label":"Object library section"});for(let[Tt,Rt]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])N.append(b("option",Rt,{value:Tt}));let z=b("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});F.append(N,z);let q=b("div","",{class:"model-library-context"}),O=b("p","",{role:"status",class:"model-library-status"}),G=b("div","",{class:"model-library-list"});w.append(L,F,q,O,G);let X=b("style");X.textContent=`
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
    `,p.append(X,w);let K,ut=!1,nt=(Tt,Rt)=>{let Zt=b("button",Tt,{type:"button"});return Zt.addEventListener("click",Rt),Zt};function it(Tt){K=Tt,ut=!1,N.value="catalog",z.value="",ot(),z.focus()}function ot(){let{templates:Tt,paletteGroups:Rt}=u(),Zt=new Map(Tt.map(vt=>[vt.type,vt])),Jt=new Map(Rt),{items:$t,entities:at}=S(),pt=o(z.value).trim(),Ct=(...vt)=>pt.split(/\s+/).every(mt=>o(vt.join(" ")).includes(mt)),Ot=[];if(q.replaceChildren(),K&&(q.append(b("strong",K.item?.name||K.entity?.name||K.entity?.entity_id)),K.entity&&q.append(nt(ut?"Suggested models":"All compatible models",()=>{ut=!ut,ot()})),q.append(nt("Cancel mapping",()=>{N.value=K.entity?"devices":"placed",K=void 0,z.value="",ot()}))),N.value==="placed")for(let vt of $t){let mt=Zt.get(vt.type);if(!Ct(vt.name,mt?.label,vt.type,vt.entityId))continue;let Bt=[vt.w,vt.h,vt.modelHeight].filter(Number.isFinite).join(" \xD7 "),dt=[mt?.label||vt.type,Bt&&Bt+" plan px",vt.entityId].filter(Boolean).join(" \xB7 "),yt=[nt("Edit",()=>A({kind:"edit",itemId:vt.id}))];Tt.some(bt=>f(vt,mt,bt))&&yt.push(nt("Change model",()=>it({item:vt}))),Ot.push([vt.name||mt?.label||vt.type,dt,yt])}else if(N.value==="devices"){let vt=new Map;for(let mt of $t)mt.entityId&&!vt.has(mt.entityId)&&vt.set(mt.entityId,mt);for(let mt of at){if(!c(mt.entity_id)||!Ct(mt.name,mt.entity_id,mt.area))continue;let Bt=vt.get(mt.entity_id),dt=[mt.entity_id,mt.area,Bt?"On plan \xB7 "+Bt.name:"Available to map"].filter(Boolean).join(" \xB7 ");Ot.push([mt.name||mt.entity_id,dt,[Bt?nt("Edit mapped object",()=>A({kind:"edit",itemId:Bt.id})):nt("Choose model",()=>it({entity:mt}))]])}}else{let vt=Tt;if(K?.item&&(vt=Tt.filter(mt=>f(K.item,Zt.get(K.item.type),mt))),K?.entity){let mt=d(K.entity,Tt);vt=ut?mt.available:mt.recommended}for(let mt of vt){let Bt=Jt.get(mt.group)||mt.group;if(!Ct(mt.label,mt.type,mt.tags,Bt))continue;let dt=K?.item?{kind:"replace",itemId:K.item.id,modelId:mt.type}:{kind:"place",modelId:mt.type,...K?.entity?{entityId:K.entity.entity_id}:{}};Ot.push([mt.label,Bt+" \xB7 "+mt.w+" \xD7 "+mt.h+" plan px",[nt(K?"Use model":"Place",()=>A(dt))]])}}G.replaceChildren();for(let[vt,mt,Bt]of Ot.slice(0,48)){let dt=b("div","",{class:"model-library-row"}),yt=b("div");yt.append(b("strong",vt),b("small",mt));let bt=b("div","",{class:"model-library-actions"});bt.append(...Bt),dt.append(yt,bt),G.append(dt)}O.textContent=Ot.length>48?"Showing 48 of "+Ot.length+". Search to narrow the list.":Ot.length?Ot.length+(Ot.length===1?" result":" results"):N.value==="devices"&&!at.length?"Connect to Home Assistant to list devices.":"No matches."}return N.addEventListener("change",()=>{K=void 0,z.value="",ot()}),z.addEventListener("input",ot),C.addEventListener("click",()=>w.close()),{open(Tt="placed"){K=void 0,ut=!1,N.value=Tt,z.value="",ot(),w.open||w.showModal()},get isOpen(){return w.open},close(){w.open&&w.close()}}}i.RoomcraftModels=Object.freeze({catalog:u,canMap:h,canReplace:f,suggestions:d,supportsHeight:g,resizeFootprint:x,mount:m,handoffKey:n})})(typeof window>"u"?globalThis:window);function Ud(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Be().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var Ov=24,Bv=.32,zv=125,kv=24,Wc=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function wo(i,t=.12){return new An({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function Vv(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function Fd(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new ue;s.name="tracked-people",i.add(s);let r,o=new Map,a=Wc.map(()=>[]),c=!1,l=!1,u=0,f=!1;function h(){return{sphere:new pn(1,12,8),disc:new kr(1,24).rotateX(-Math.PI/2),groundRing:new Jr(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new Ei(1,.14,6,16),palette:Wc.map(({sweater:S,trim:A,skin:M,hair:b})=>Object.fromEntries(Object.entries({sweater:S,trim:A,skin:M,hair:b}).map(([w,L])=>[w,wo(L)]))),ink:wo("#423c50",.09),cheek:wo("#d78383"),shoes:wo("#514656"),white:wo("#fff1dc"),shadow:new ze({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new ze({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function d(S){r??=h();let{role:A,scale:M}=Wc[S],{sweater:b,trim:w,skin:L,hair:y}=r.palette[S],C=A==="baby",F=new ue;F.name=`radar-avatar-${A}`;let N=new ue,z=new ue,q=[],O=[],G=[];s.add(F),F.add(N),N.scale.set(...M);let X=(it,ot,Tt,Rt,Zt,Jt,$t,at)=>{let pt=new he(r.sphere,ot);return pt.position.set(Tt,Rt,Zt),pt.scale.set(Jt,$t,at),it.add(pt),pt},K=new he(r.disc,r.shadow);K.position.y=.13,K.scale.set(19,1,19),F.add(K);let ut=new he(r.groundRing,r.groundMark);ut.position.y=.26,F.add(ut),X(N,b,0,15,0,C?8.2:7.1,8.3,5.4),C?(X(N,w,0,17.5,4.8,4.9,4.1,1.15),X(N,r.white,0,17.4,5.9,1.5,1.5,.35)):(X(N,w,0,20.7,2.4,5.8,2.2,4),X(N,w,A==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let it of[-1,1]){let ot=new ue;ot.position.set(it*3.4,10.3,.1),N.add(ot),X(ot,C?b:r.ink,0,-3.2,0,2.65,4.6,2.6),X(ot,C?w:r.shoes,0,-8.15,1.25,3.1,2.1,4),X(ot,r.white,0,-8.8,3.25,2.75,1.1,2),G.push(ot);let Tt=new ue;Tt.position.set(it*6.25,19.1,0),N.add(Tt),X(Tt,b,it*.9,-3.7,.15,2.75,5.3,2.7),X(Tt,L,it*1.3,-7.8,.5,2.3,2.6,2.2),O.push(Tt)}z.position.set(0,C?26:27.2,0),C&&z.scale.set(1.16,1.17,1.12),N.add(z),X(z,y,0,1.3,-1.65,9.2,9.65,8.6),X(z,L,0,0,1.9,8.65,8.45,7.5);let nt=X(z,y,-2.1,7.3,4.25,6.4,3.4,4.35);if(nt.rotation.z=A==="papa"?-.27:.22,A==="mama"&&(X(z,y,-6.7,-1.9,-3.8,3.6,8.1,5.2),X(z,y,6.2,-1.7,-3.9,3.3,7.6,5.4),X(z,y,2.8,10.4,-2.5,5.1,5.1,5.1),X(z,w,4.4,8.7,2.2,2.8,1.1,1.1)),C){X(z,y,-7.3,6.7,-2,3.35,3.7,3.5),X(z,y,7.3,6.7,-2,3.35,3.7,3.5);let it=X(z,w,.9,10,4.2,2.5,1.45,1.25),ot=X(z,w,4.1,10,4.2,2.5,1.45,1.25);it.rotation.z=-.4,ot.rotation.z=.4,X(z,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let it of[-1,1])if(X(z,L,it*8.2,-.15,1.1,1.85,2.4,1.75),q.push(X(z,r.ink,it*3,1.2,8.95,.85,.87,.52)),X(z,r.cheek,it*5.05,-1.25,7.95,1.18,.62,.52),A==="papa"){let ot=new he(r.glasses,r.ink);ot.position.set(it*3.1,1.25,9.15),ot.scale.set(2.5,2.15,1.55),z.add(ot)}return A==="papa"&&X(z,r.ink,0,1.6,9.35,1.1,.28,.35),X(z,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:F,body:N,head:z,arms:O,legs:G,eyes:q,styleIndex:S,baby:C}}function g(S,A){return S.duration>0?Ie.clamp((A-S.start)/S.duration,0,1):1}function x(S,A=c){u=Number.isFinite(S)?S:u,l=A||c,f=!1;for(let M of o.values()){let{character:b}=M;l&&(M.duration=0);let w=g(M,u),L=Ie.lerp(M.fromX,M.x,w),y=Ie.lerp(M.fromZ,M.z,w),C=t(L,y);!Number.isFinite(C)&&w<1&&(M.duration=0,w=1,L=M.x,y=M.z,C=t(L,y));let F=n?Math.min(1,n(L,y)/kv):1;if(b.root.visible=Number.isFinite(C)&&F>0,!b.root.visible)continue;f=!0,b.root.position.set(L,C,y),b.root.rotation.y=M.heading,b.root.scale.setScalar(F);let N=M.walking&&w<1&&!l,z=Math.floor(Math.max(0,u-M.born)*16)/16+.7+b.styleIndex*.62,q=Math.floor(w*12)/12*Math.PI*4,O=N?Math.sin(q)*.56:0,G=N?Math.abs(Math.sin(q))*1.9:(1+Math.sin(z*4.7))*.47;b.body.position.y=l?0:G*(b.baby?1.5:1),b.body.rotation.z=l?0:N?O*.15:Math.sin(z*2.8)*.045;for(let X=0;X<2;X++){let K=X===0?-1:1;b.arms[X].rotation.x=N?-O*K:l?0:Math.sin(z*3.1+X)*.09,b.legs[X].rotation.x=O*K}Vv(b,z,l)}}function m(S,A,{reduceMotion:M=!1}={}){c=M;let b=Number.isFinite(A)?A:u,w=new Map;for(let y of Array.isArray(S)?S:[])if(!(typeof y?.id!="string"||!y.id||y.id.length>256||!Number.isFinite(y.x)||!Number.isFinite(y.y)||w.has(y.id)||!Number.isFinite(t(y.x,y.y)))&&(w.set(y.id,y),w.size===Ov))break;for(let[y,C]of o)w.has(y)||(C.character.root.visible=!1,a[C.character.styleIndex].push(C.character),o.delete(y));let L=Wc.map(()=>0);for(let{character:y}of o.values())L[y.styleIndex]++;for(let y of[...w.keys()].filter(C=>!o.has(C)).sort()){let C=L.indexOf(Math.min(...L));L[C]++;let F=a[C].pop()??d(C),{x:N,y:z}=w.get(y);o.set(y,{character:F,fromX:N,fromZ:z,x:N,z,heading:0,born:b,start:b,duration:0})}for(let[y,{x:C,y:F}]of w){let N=o.get(y);if(N.x!==C||N.z!==F){let z=M?1:g(N,b),q=Ie.lerp(N.fromX,N.x,z),O=Ie.lerp(N.fromZ,N.z,z),G=Math.hypot(C-q,F-O),X=G>1?Math.atan2(C-q,F-O):N.heading,ut=!M&&G>0&&G<=zv&&e?.(q,O,C,F)?Bv:0;Object.assign(N,{fromX:q,fromZ:O,x:C,z:F,heading:X,start:b,duration:ut,walking:G>2})}}x(b,M)}function p(){if(s.removeFromParent(),!!r){for(let S of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])S.dispose();for(let S of r.palette)for(let A of Object.values(S))A.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let S of a)S.length=0;o.clear(),r=void 0}}return{setTracks:m,render:x,dispose:p,get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return f}}}function Od(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var Xc=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),qc=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function Hv([i,t,e,n],s,r,o,a){let c=Xc(i,t,e,n,s,r),l=Xc(i,t,e,n,o,a),u=Xc(s,r,o,a,i,t),f=Xc(s,r,o,a,e,n);return Math.abs(u)<1e-7&&qc(s,o,i)&&qc(r,a,t)||Math.abs(f)<1e-7&&qc(s,o,e)&&qc(r,a,n)?!0:c>0!=l>0&&u>0!=f>0}function Wu(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>Od(a,r,o)&&!c.some(l=>Od(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,f]of t){let h=u-c,d=f-l,g=h*h+d*d;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*h+(o-l)*d)/g)),m=r-c-x*h,p=o-l-x*d;a=Math.min(a,m*m+p*p)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>Hv(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var Bd=new Be,Yc=new V,pr=class extends eo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new re(t,3)),this.setAttribute("uv",new re(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Zi(e,6,1);return this.setAttribute("instanceStart",new Fn(n,3,0)),this.setAttribute("instanceEnd",new Fn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Zi(e,6,1);return this.setAttribute("instanceColorStart",new Fn(n,3,0)),this.setAttribute("instanceColorEnd",new Fn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new $r(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Bd.setFromBufferAttribute(e),this.boundingBox.union(Bd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Yc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Yc)),Yc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new At},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};gn.line={uniforms:go.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};var ns=class extends tn{constructor(t){super({type:"LineMaterial",uniforms:go.clone(gn.line.uniforms),vertexShader:gn.line.vertexShader,fragmentShader:gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Xu=new ye,zd=new V,kd=new V,en=new ye,nn=new ye,di=new ye,qu=new V,Yu=new ge,sn=new io,Vd=new V,Zc=new Be,Jc=new Un,pi=new ye,mi,Ms;function Hd(i,t,e){return pi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),pi.multiplyScalar(1/pi.w),pi.x=Ms/e.width,pi.y=Ms/e.height,pi.applyMatrix4(i.projectionMatrixInverse),pi.multiplyScalar(1/pi.w),Math.abs(Math.max(pi.x,pi.y))}function Gv(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){sn.start.fromBufferAttribute(s,a),sn.end.fromBufferAttribute(r,a),sn.applyMatrix4(e);let l=new V,u=new V;mi.distanceSqToSegment(sn.start,sn.end,u,l),u.distanceTo(l)<Ms*.5&&t.push({point:u,pointOnLine:l,distance:mi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Wv(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;mi.at(1,di),di.w=1,di.applyMatrix4(t.matrixWorldInverse),di.applyMatrix4(n),di.multiplyScalar(1/di.w),di.x*=r.x/2,di.y*=r.y/2,di.z=0,qu.copy(di),Yu.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(en.fromBufferAttribute(c,h),nn.fromBufferAttribute(l,h),en.w=1,nn.w=1,en.applyMatrix4(Yu),nn.applyMatrix4(Yu),en.z>f&&nn.z>f)continue;if(en.z>f){let A=en.z-nn.z,M=(en.z-f)/A;en.lerp(nn,M)}else if(nn.z>f){let A=nn.z-en.z,M=(nn.z-f)/A;nn.lerp(en,M)}en.applyMatrix4(n),nn.applyMatrix4(n),en.multiplyScalar(1/en.w),nn.multiplyScalar(1/nn.w),en.x*=r.x/2,en.y*=r.y/2,nn.x*=r.x/2,nn.y*=r.y/2,sn.start.copy(en),sn.start.z=0,sn.end.copy(nn),sn.end.z=0;let x=sn.closestPointToPointParameter(qu,!0);sn.at(x,Vd);let m=Ie.lerp(en.z,nn.z,x),p=m>=-1&&m<=1,S=qu.distanceTo(Vd)<Ms*.5;if(p&&S){sn.start.fromBufferAttribute(c,h),sn.end.fromBufferAttribute(l,h),sn.start.applyMatrix4(o),sn.end.applyMatrix4(o);let A=new V,M=new V;mi.distanceSqToSegment(sn.start,sn.end,M,A),e.push({point:M,pointOnLine:A,distance:mi.origin.distanceTo(M),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var $c=class extends he{constructor(t=new pr,e=new ns({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)zd.fromBufferAttribute(e,o),kd.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+zd.distanceTo(kd);let r=new Zi(s,2,1);return t.setAttribute("instanceDistanceStart",new Fn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Fn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;mi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Ms=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Jc.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Ms*.5;else{let f=Math.max(s.near,Jc.distanceToPoint(mi.origin));l=Hd(s,f,c.resolution)}if(Jc.radius+=l,mi.intersectsSphere(Jc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Zc.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Ms*.5;else{let f=Math.max(s.near,Zc.distanceToPoint(mi.origin));u=Hd(s,f,c.resolution)}Zc.expandByScalar(u),mi.intersectsBox(Zc)!==!1&&(n?Gv(this,e):Wv(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Xu),this.material.uniforms.resolution.value.set(Xu.z,Xu.w))}};var mr=class extends pr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Kc=class extends $c{constructor(t=new mr,e=new ns({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var Gd="#ffce84",Xv="#a8f5ff",Zu="#10242e";function jc(i,t,e){return new ns({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function Qc(i,t,e,n){let s=new mr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new Kc(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function Wd(i,t,e,n){let s=new ve().setFromPoints(t.map(({x:o,y:a})=>new V(o,.5,a)));s.setIndex(Dn.triangulateShape(t.map(({x:o,y:a})=>new At(o,a)),[]).flat());let r=new he(s,e);r.renderOrder=n,i.add(r)}function Xd(){let i=new ki,t={side:yn,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new ze({...t,color:Gd,opacity:.13}),n=new ze({...t,color:Zu,opacity:.95}),s=jc(Zu,4.6,{opacity:.8}),r=jc(Gd,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=jc(Zu,3.5,{...o,opacity:.65}),c=jc(Xv,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let g=(m,p=0)=>({x:h.x+d.x*m-d.y*p,y:h.y+d.y*m+d.x*p}),x=Array.from({length:28},(m,p)=>{let S=p/28*Math.PI*2;return g(10*Math.cos(S),10*Math.sin(S))});Qc(i,[g(10),g(56)],[s,r],5),Qc(i,[g(45,-7),g(56),g(45,7)],[s,r],5),Wd(i,x,n,7),Qc(i,[...x,x[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let d=new Map;for(let g of h){let{points:x,kind:m,id:p,origin:S,forward:A}=g;if(x.length<3)continue;let M=m==="nominal";M&&Wd(i,x,e,0),Qc(i,[...x,x[0]],M?[s,r]:[a,c],M?3:1),S&&A&&d.set(p,g)}for(let g of d.values())l(g)}function f(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:f}}var nl=Math.PI/180,Ku=14,np=56,qv=21,Ii=-111,ti=-108,ip=14,Yv=28,To=28,qd={minX:0,maxX:1536,minZ:0,maxZ:1024},Ju={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},$u={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},Zv=new Set(["cloudy","partlycloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Jv=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),$v=new Set(["snowy","snowy-rainy","hail"]),Yd={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42},Kv=new Set(["waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]);function sl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function il(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function sp(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function rp(i,t,e,n){let s=i.some(o=>il(o,e-t.dz*23,n+t.dx*23));return i.some(o=>il(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function jv(i,t,e){if(!Object.hasOwn(Yd,e.type))return null;let n=sp(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):rp(i,s,r,o),l=(Ku/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Yd[e.type],np-8)}}function Zd(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Jd(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function Qv(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function $d(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function tl(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function op(i){return Object.hasOwn($u,i.finish)?$u[i.finish]:$u.graphite}function ap(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function Kd(i,t,e){let[n,s]=ap(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=Ie.clamp(s/i.item.h+.5,0,1);return ti-ti*r}function el(i,t,e){return il(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?Ie.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=Ku/2})}function tb(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(f=>el(f,n,s)),o=t.some(f=>Eo(f)&&el(f,n,s)&&el(f,i.x1,i.y1)&&el(f,i.x2,i.y2)),a=r?0:Ii,c=a;if(!o)for(let f of e){let h=Kd(f,i.x1,i.y1),d=Kd(f,i.x2,i.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=op(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/Yv)))}}function ju(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(b=>b?.points?.length>=3&&b.points.every(w=>Number.isFinite(w?.x)&&Number.isFinite(w?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(b=>!Eo(b)):e,s=i.walls.map(Zd).filter(Boolean),r=s.filter(b=>b.kind!=="fence"),o=i.items.filter(b=>typeof b?.id=="string"&&typeof b.type=="string"&&[b.x,b.y,b.w,b.h].every(Number.isFinite)&&b.w>0&&b.h>0),a=$d(),c=$d(),l=(b,w)=>tl(a,b,w);for(let b of e)for(let w of b.points)l(w.x,w.y);for(let b of s)l(b.x1,b.y1),l(b.x2,b.y2);for(let b of n)for(let w of b.points)tl(c,w.x,w.y);for(let b of r)tl(c,b.x1,b.y1),tl(c,b.x2,b.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:qd},f=new Map(r.map(b=>[b.id,b])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(b=>f.has(b))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([b,w])=>({x:b,y:w})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([b,w])=>({x:b,y:w})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(b=>h?!(b.id==="w3"&&Jd(b,[400,408,342,468]))&&!(b.id==="w7"&&Jd(b,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:b,x2:w,z1:L}=h.recess;if(w>b){let y=[[b,f.get("w12").y2,b,L],[b,L,w,L]];for(let[C,F]of y.entries()){if(d.some(X=>Qv(X,F)))continue;let[N,z,q,O]=F,G=Zd({id:`reference-recess-${C}`,x1:N,y1:z,x2:q,y2:O});G&&d.push(G)}}}let g=new Map;for(let b of o.filter(w=>w.type==="window")){let w=sp(d,b.x,b.y,(b.rotation||0)*nl);if(!w||w.distance>27)continue;let{wall:L,t:y,centerX:C,centerZ:F}=w,N=Math.max(1,y-b.w/2+1),z=Math.min(L.length-1,y+b.w/2-1);if(z-N<14)continue;L.openings.push({start:N,end:z});let q=rp(n,L,C,F),O=L.angle+(q<0?Math.PI:0),G=(N+z)/2;g.set(b.id,{x:L.x1+G*L.dx,z:L.y1+G*L.dz,angle:O,window:{...b,w:z-N+2,rotation:O/nl}})}let x=o.filter(b=>b.type==="garageDoor"),m=o.map(b=>{let w=b.type==="cameraThumbnail"&&x.some(G=>fb(b,G))?Ii:up(b.type),L=b.type==="controlZone"&&(b.visualKind==="window"||b.entityId?.startsWith("cover.")),y=g.get(b.id)??jv(n,d,b);if(L){let G=52;for(let X of g.values()){let K=Math.hypot(X.x-b.x,X.z-b.y);K<G&&(y=X,G=K)}}let C=y?.x??b.x,F=y?.z??b.y,N=y?.angle??(Number.isFinite(b.rotation)?b.rotation*nl:0),z=b.type==="stairs"?1536:300,q=Math.min(z,(Math.abs(Math.cos(N))*b.w+Math.abs(Math.sin(N))*b.h)/2),O=Math.min(z,(Math.abs(Math.sin(N))*b.w+Math.abs(Math.cos(N))*b.h)/2);return l(C-q,F-O),l(C+q,F+O),{item:b,x:C,z:F,baseY:w,angle:N,window:y?.window,mountY:y?.mountY,isBlind:L}});for(let b of d)b.openings.sort((w,L)=>w.start-L.start||w.end-L.end);let p=m.filter(({item:b})=>b.type==="stairs").map(b=>{let{item:w,x:L,z:y,angle:C}=b,F=Number.isInteger(w.steps)&&w.steps>=2&&w.steps<=40?w.steps:ip,N=Math.min(46,Math.max(12,w.w*.47)),z=-w.h/2-N;for(let q of[-w.w/2,w.w/2])l(L+q*Math.cos(C)-z*Math.sin(C),y+q*Math.sin(C)+z*Math.cos(C));return{...b,steps:F,apronDepth:N}}),S=s.filter(b=>b.kind==="fence").map(b=>tb(b,e,p)),A=Rd(e,h,t),M=Id(d.map(b=>({...b,palette:op(b)})),Ku,np,qv);return Number.isFinite(a.minX)||Object.assign(a,qd),{rooms:e,walls:d,fences:S,stairs:p,placements:m,bounds:a,houseBounds:u,reference:h,floorStructure:A,wallStructure:M,editableStructure:t}}function jd(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Qu([i,...t]){let e=jd(new Tn,i);return e.holes=t.map(n=>jd(new fs,n)),e}function eb(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=sl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,x=f+3+c()*27,m=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+m/2,x+c()*2-1,g+m,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new Qs(n);return l.colorSpace=Fe,l.wrapS=l.wrapT=ls,l}function cp(i){let t=new Map,e=new ge,n=new Nn,s=new V,r=new V(0,1,0),o=new V(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new ps({color:d})),a.get(d));function l(d,g,x,m,p,S=0){n.setFromAxisAngle(r,S),e.compose(s.set(x,m,p),n,o),d.applyMatrix4(e);let A=c(g);t.has(A)||t.set(A,[]),t.get(A).push(d)}function u(d,g,x,m,p,S,A,M=0){d>0&&g>0&&x>0&&l(new ke(d,g,x),m,p,S,A,M)}function f(d,g,x,m,p,S,A){let M=new pn(1,9,6);M.scale(d,g,x),l(M,m,p,S,A)}function h(){for(let[d,g]of t){let x=es(g);if(!x){for(let m of g)i.add(new he(m,d));continue}i.add(new he(x,d));for(let m of g)m.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function nb(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Ju,r)?r:"oak";if(!s.has(a)){let c=Ju[a],l=eb(n,c,141+Object.keys(Ju).indexOf(a)*977);s.set(a,new ps({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Hi(Qu(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new he(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)Qd(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)Qd(t,r,Ii-1,-22,"#a18e84",!0)}function ib(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Oe(e,1))}return i}function Qd(i,t,e,n,s,r=!1){let o=new Si(Qu(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(ib(o),s,0,e,0)}function sb(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new ve;return r.setAttribute("position",new re(e,3)),r.setAttribute("uv",new re(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function tp(i,t){let e=new Hi(Qu(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function rb(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(tp(o,!1),r,0,s,0);for(let o of e.bottom)i.add(tp(o,!0),r,0,n,0);e.sides.length&&i.add(sb(e.sides,s-n),r,0,n,0)}}function ob(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:g}=n,x=l-c,m=new ke(Math.hypot(u,x),5,7);m.rotateZ(Math.atan2(x,u)),i.add(m,d,(s+o)/2,(c+l)/2+To,(r+a)/2,-f);for(let p=0;p<=h;p++){let S=p/h,A=Ie.lerp(s,o,S),M=Ie.lerp(r,a,S),b=Ie.lerp(c,l,S),w=[A,b,M].map(L=>Math.round(L*1e3)).join(",");e.has(w)||(e.add(w),i.box(5,To,5,g,A,b+To/2,M,-f))}}}function lp(i,t,e,n,s=0,r=0){let o=e/n,a=-ti/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let f=r-e/2+o*u,h=u===n-1?0:ti+(u+1)*a,d=h-3;i.box(t,d-Ii,o,"#a98075",s,(Ii+d)/2,f+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,f+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,f+l/2)}}function ab({item:i,steps:t,apronDepth:e}){let n=new ue,s=cp(n);lp(s,i.w,i.h,t);let r=ti-Ii;return s.box(i.w,r,e,"#c8b79e",0,Ii+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:ti/2}}function cb(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=ip,u=r-s,f=u/l,h=ti,d=-h/l;lp(i,a,u,l,c,(s+r)/2);for(let M=0;M<l;M++){let b=s+f*(M+.5),w=h+(M+1)*d;i.box(5,24,5,"#9f8183",e+4,w+12,b)}let g=f*(l-1),x=d*(l-1),m=new ke(7,5,Math.hypot(g,x)+5);m.rotateX(-Math.atan2(x,g)),i.add(m,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[p,S]=o,A=Math.max(2,Math.ceil((S.x-p.x)/28));i.box(S.x-p.x,5,7,"#896e79",(S.x+p.x)/2,28,p.y);for(let M=0;M<=A;M++)i.box(5,28,5,"#9f8183",p.x+(S.x-p.x)*M/A,14,p.y)}function lb(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=sl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new Qs(t);return s.wrapS=s.wrapT=ls,s.repeat.set(15,10),s.colorSpace=Fe,s.anisotropy=4,s}function ub(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,c=sl(150741);if(!t.editableStructure){let u=Math.min(90,o*.18),f=t.reference?t.reference.left+u/2:e+u/2;i.box(u,4,115,"#c7baa4",f,-109,s-88);for(let h=0;h<5;h++)i.box(u*.85,1.8,13,"#dbceba",f,-106,s-137+h*20)}let l=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,f]of l){let h=e+u*o,d=s+f*a,g=21+c()*24;i.ball(g*.94,9,g*.67,"#6d886a",h,-104,d),i.ball(g*.82,g*.57,g*.69,"#819b76",h+3,-98,d);for(let x=0;x<8;x++){let m=x*2.39996,p=(.2+c()*.5)*g,S=g*(.28+c()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][x%4];i.ball(S*1.15,S*.8,S,A,h+Math.cos(m)*p,-93+12*c(),d+Math.sin(m)*p*.75)}for(let x=0;x<5;x++){let m=x%2?"#e6c4b1":"#fae6a4",p=h+(c()-.5)*g*1.14,S=d+g*(.62+c()*.43);i.ball(2.3,4.6,2.3,"#819765",p,-106,S),i.ball(3.9,1.8,3.3,m,p,-101.5,S),i.ball(1.2,.9,1.2,"#cb9c57",p,-100.3,S)}}}function hb(i,t,e){let{minX:n,maxX:s,minZ:r}=t.houseBounds,o=sl(2912),a=t.bounds,c=new ue,l=new ps({color:"#f8ebdf",transparent:!0,opacity:.9}),u=new pn(1,12,8),f=s-n;for(let[F,N]of[.19,.53,.82].entries()){let z=n+f*N,q=r-55-F%2*34;for(let O=0;O<3;O++){let G=new he(u,l);G.scale.set(32+o()*21,15+o()*10,25+o()*10),G.position.set(z+O*31,27+5*(O===1),q),c.add(G)}}i.add(c);let h=new ue;h.position.set(n+f*.77,21,r-70);let d=new he(new pn(17,16,10),new ze({color:"#ffe2a1"}));h.add(d);let g=new ue,x=new he(d.geometry,new ze({color:"#f9e5c6"}));g.add(x);let m=new he(d.geometry,new ze({color:"#7d7c97"}));m.position.set(4,4,1),m.scale.setScalar(.96),g.add(m),h.add(g),i.add(h);let p=[],S=t.reference?.recess,A=(F,N)=>!(S&&F>=S.x1&&F<=S.x2&&N>=S.z1&&N<=S.z2)&&!t.rooms.some(z=>(!t.editableStructure||!Eo(z))&&il(z,F,N));for(let F=0;F<190;F++){let N=a.minX-70+(a.maxX-a.minX+140)*o(),z=a.minZ-70+(a.maxZ-a.minZ+140)*o();A(N,z)&&p.push({x:N,z,phase:o()*180})}let M=new Float32Array(p.length*6),b=new Float32Array(p.length*3),w=new ve,L=new ve;w.setAttribute("position",new Oe(M,3).setUsage(Cc)),L.setAttribute("position",new Oe(b,3).setUsage(Cc));let y=new Fr(w,new Ks({color:"#cce5ef",transparent:!0,opacity:.66})),C=new Or(L,new js({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return y.frustumCulled=C.frustumCulled=!1,i.add(y,C),(F,N,z)=>{let{night:q=!1,condition:O="",moonPhase:G="",daylightKnown:X=!0}=N,K=z?0:F;c.visible=e&&Zv.has(O),c.position.x=Math.sin(K*.16)*(O.includes("windy")?48:23),d.visible=e&&X&&!q,g.visible=e&&X&&q&&Kv.has(G),m.visible=G!=="full_moon";let ut=G.startsWith("waxing")||G==="first_quarter",nt=G.endsWith("quarter");if(m.position.x=(ut?-1:1)*(nt?8:G.endsWith("gibbous")?14:5),y.visible=Jv.has(O),C.visible=$v.has(O),y.visible||C.visible){for(let[it,ot]of p.entries()){let Tt=65-(ot.phase+K*150)%170,Rt=65-(ot.phase+K*20)%170,Zt=it*6;M.set([ot.x,Tt,ot.z,ot.x-4,Tt+22,ot.z+3],Zt),b.set([ot.x+Math.sin(K+it)*6,Rt,ot.z],it*3)}w.attributes.position.needsUpdate=y.visible,L.attributes.position.needsUpdate=C.visible}}}function up(i){return i==="garageDoor"?Ii:0}function fb(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*nl,r=Math.cos(s),o=Math.sin(s);return gd(t,e*r+n*o,-e*o+n*r)}function db(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35){let c=e.get(n.item.id);return c?c.root.position.y+(c.anchorY??0)*c.root.scale.y:0}}return 0}function pb(i,t,e,n){let s=new V,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:g})=>o([[l,d,u],[l,d+To,u],[f,g,h],[f,g+To,h]])),c=i.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let g=Math.cos(f),x=Math.sin(f),m=[];for(let p of[-h.w/2,h.w/2])for(let[S,A]of[[-h.h/2-d,ti],[h.h/2,0]])m.push([l+p*g-S*x,A,u+p*x+S*g]);return o(m)});return[...a,...c]}function mb({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([f,h])=>[i+f*r-h*o,t+f*o+h*r].map(d=>Math.round(d*1e5)/1e5))]}function gb(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=ap(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return ti;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return ti+-ti/s.steps*l}return null}}function hp(i,t,{showSkyArt:e=!0}={}){let n=ju(t),s=new Nc({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});s.resetState();let r=new ki;r.background=new te("#d7dfcd");let o=new qi(-800,800,450,-450,1,4400),{minX:a,maxX:c,minZ:l,maxZ:u}=n.bounds,f=new An({color:"#e8e8d2",map:lb(i.ownerDocument),roughness:.95}),h=new he(new Mi(6200,4200),f);h.rotation.x=-Math.PI/2,h.position.set((a+c)/2,Ii,(l+u)/2),r.add(h);let d=cp(r);ub(d,n),cb(d,n),nb(r,d,n,i.ownerDocument),rb(d,n),ob(d,n.fences),d.finish();let g=r.children.filter(ht=>ht.isMesh),x=Pd(s,r,n.bounds);x.markStructure();let m=hb(r,n,e),p=n.floorStructure.footprint,S=Wu(p),A=n.stairs.length?Wu(ep.default.union(p,...n.stairs.map(mb))):S,M=gb(n,S),b=new ki,w=Xd(),L=new ms("#fff5e1","#c9bfd7",1.8),y=new Yi("#fff1d8",1.65);y.position.set(-4,9,6),b.add(L,y);let C=Fd(b,M,{supportsRoute:A.supportsRoute,floorClearance:A.clearance}),F=new Map,N=new Map,z=new Map,q=new Map(n.stairs.map(ht=>[ht.item.id,ht]));for(let ht of n.placements){let{item:St,x:Pt,z:Nt,baseY:Ft,angle:k,window:ee,mountY:Ht,isBlind:U}=ht,E=St.type==="window"&&ee?ee:St,$=q.get(St.id),Q=$?ab($):xd(E,{window:U?ee:void 0,mountY:Ht})??hd(E);if(Q){let ct=Ud(St,Q.root);Q.root.position.set(Pt,Ft+ct,Nt),Q.root.rotation.y=-k,Q.floorRadius&&(Q.dockFits=S.clearance(Pt,Nt)>=Q.floorRadius),r.add(Q.root),N.set(St.id,Q),St.type==="garageDoor"&&z.set(Q.root,St.id),x.register(St,Q)}F.set(St.id,{x:Pt,z:Nt,baseY:Ft,object:Q})}let O={...n.bounds};for(let ht of n.placements){let St=N.get(ht.item.id);if(St&&(St.root.position.y+=db(n,ht,N),St.root.scale.y!==1)){let{max:Pt}=new Be().setFromObject(St.root);Number.isFinite(Pt.y)&&(O.maxY=Math.max(O.maxY??92,Pt.y))}}let G=[...N.values()].filter(ht=>ht.ambientMotion),X=new V,K=!1,ut=0,nt=0,it=Ci(),ot=new no,Tt=new En(new V(0,1,0),0),Rt=new V,Zt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function Jt(ht,St){if(K||ht<1||St<1||ht===ut&&St===nt)return;ut=ht,nt=St;let Pt=i.ownerDocument.defaultView?.devicePixelRatio||1;s.setPixelRatio(Math.min(Pt,1.5,Math.sqrt(27e5/(ht*St)))),s.setSize(ht,St,!1),it=Gu(o,O,ht,St,it)}function $t(ht){return it=Ci(ht),!K&&ut>0&&nt>0&&(it=Gu(o,O,ut,nt,it)),at()}function at(){return{...it}}function pt(ht,St){return K||!Number.isFinite(ht)||!Number.isFinite(St)||ut<=0||nt<=0?!1:(ot.setFromCamera(new At(ht/ut*2-1,1-St/nt*2),o),!0)}function Ct(ht,St,Pt){return pt(ht,St)?(Tt.constant=-up(Pt),ot.ray.intersectPlane(Tt,Rt)?{x:Rt.x,y:Rt.z}:null):null}function Ot(ht,St){if(!z.size||!pt(ht,St))return null;let Pt=[];for(let Ft of z.keys())Ft.traverseVisible(k=>{k.isMesh&&Pt.push(k)});let Nt=ot.intersectObjects(Pt,!1)[0];if(!Nt||ot.intersectObjects(g,!1).some(Ft=>Ft.distance<Nt.distance-.01))return null;for(let Ft=Nt.object;Ft;Ft=Ft.parent)if(z.has(Ft))return z.get(Ft);return null}function vt(){s.render(r,o);let ht=w.scene.children.length>0;if(!(!C.hasVisibleTracks&&!ht)){s.autoClear=!1;try{s.clearDepth(),ht&&s.render(w.scene,o),C.hasVisibleTracks&&s.render(b,o)}finally{s.autoClear=!0}}}function mt(ht=0,St={},Pt={},{animateTelemetry:Nt=!0,showTelemetryPosition:Ft=!0,draftPositions:k}={}){if(K||ut<1||nt<1)return;x.update(Pt,St,f);let ee=Pt.reduceMotion===!0,Ht=!ee&&Number.isFinite(ht)?ht:0,U=Nt?Ht:0;m(U,Pt,ee||!Nt);for(let[E,$]of N){let Q=St[E]??Zt,ct=Q.position;ct&&Number.isFinite(ct.x)&&Number.isFinite(ct.y)&&(!$.floorRadius||S.clearance(ct.x,ct.y)>=$.floorRadius)&&($.telemetryPosition=ct);let B=k?.[E]?.position??(Ft?$.telemetryPosition:null),_=F.get(E);$.root.position.x=B?.x??_.x,$.root.position.z=B?.y??_.z,$.floorRadius&&($.root.visible=!!(B||!Ft||$.dockFits)),$.animate?.(Q,$.ambientMotion?Ht:U)}C.render(ht,ee),vt()}function Bt(ht,St,Pt){K||C.setTracks(ht,St,Pt)}function dt(ht){if(!(K||ut<1||nt<1||!G.length&&!C.hasMotion)){for(let St of G)St.animate(Zt,ht);C.render(ht),vt()}}function yt(ht){let St=F.get(ht);if(!St||ut<1||nt<1)return null;let{x:Pt,z:Nt,baseY:Ft,object:k}=St;if(k){if(!k.root.visible)return null;X.set(k.anchorOffset?.x||0,k.anchorY||0,k.anchorOffset?.z||0),k.root.localToWorld(X)}else X.set(Pt,Ft+6,Nt);return X.project(o),{x:(X.x+1)/2,y:(1-X.y)/2}}function bt(){if(K)return;K=!0,C.dispose(),w.dispose();let ht=new Set,St=new Set,Pt=new Set;r.traverse(Nt=>{Nt.geometry&&ht.add(Nt.geometry);for(let Ft of Array.isArray(Nt.material)?Nt.material:[Nt.material])if(Ft){St.add(Ft);for(let k of Object.values(Ft))k?.isTexture&&Pt.add(k)}});for(let Nt of Pt)Nt.dispose();for(let Nt of ht)Nt.dispose();for(let Nt of St)Nt.dispose();x.dispose(),s.dispose()}return{resize:Jt,render:mt,anchor:yt,setView:$t,getView:at,projectToPlan:Ct,pickGarage:Ot,exteriorClearance:()=>pb(n,o,ut,nt),dispose:bt,hasAmbientMotion:G.length>0,renderAmbient:dt,setPeople:Bt,setDetectionZones:w.setZones,canPlacePerson:(ht,St)=>Number.isFinite(M(ht,St))&&A.clearance(ht,St)>0,get hasPeopleMotion(){return C.hasMotion}}}var fp=.35,rl=7.5,xb=8;function dp(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let m=t();return m?.preset==="free"?m:null},o=()=>{let[m,p]=s.values();return Math.hypot(m.x-p.x,m.y-p.y)};function a(m,p){let S=Ci({...m,...p});(S.azimuth!==m.azimuth||S.tilt!==m.tilt||S.zoom!==m.zoom)&&e(S)}function c(m){i.hasPointerCapture(m)&&i.releasePointerCapture(m)}function l(){for(let m of[...s.keys()])s.delete(m),c(m)}function u(m){if(!r()||m.defaultPrevented||m.button!==0||!n(m))return;let p=m.pointerType==="touch";if(!(s.size>=2||s.size&&(!p||!s.values().next().value.touch))){try{i.setPointerCapture(m.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(m.pointerId,{x:m.clientX,y:m.clientY,touch:p}),m.preventDefault()}}function f(m){let p=s.get(m.pointerId);if(!p)return;let S=r();if(!S){l();return}let A=s.size===2,M=A?o():0,b={x:m.clientX,y:m.clientY,touch:p.touch};if(s.set(m.pointerId,b),m.preventDefault(),A){let w=o();Math.min(M,w)>=xb&&a(S,{zoom:S.zoom*w/M});return}a(S,{azimuth:S.azimuth-(b.x-p.x)*fp,tilt:S.tilt+(b.y-p.y)*fp})}function h(m){s.delete(m.pointerId)&&c(m.pointerId)}function d(m){let p=r();if(!p||!Number.isFinite(m.deltaY)||!m.deltaY)return;let S=m.deltaMode===1?16:m.deltaMode===2?i.clientHeight:1,A=Math.max(-350,Math.min(350,m.deltaY*S));m.preventDefault(),m.stopPropagation(),a(p,{zoom:p.zoom*Math.exp(-A*.002)})}function g(m){let p=r();if(!p||m.altKey||m.ctrlKey||m.metaKey||m.defaultPrevented)return;let S;switch(m.key){case"ArrowLeft":S={azimuth:p.azimuth-rl};break;case"ArrowRight":S={azimuth:p.azimuth+rl};break;case"ArrowUp":S={tilt:p.tilt-rl};break;case"ArrowDown":S={tilt:p.tilt+rl};break;case"+":case"=":S={zoom:p.zoom*1.1};break;case"-":S={zoom:p.zoom/1.1};break;default:return}m.preventDefault(),m.stopPropagation(),a(p,S)}let x=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",g]];for(let[m,p,S]of x)i.addEventListener(m,p,S);return{cancel:l,dispose(){l();for(let[m,p,S]of x)i.removeEventListener(m,p,S)}}}function pp(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,g,x=1/0;for(let p=0;p<=h&&(f||!d);p++)for(let[S,A]of p===0?s.slice(0,1):s.slice(1)){let M=o(a.x+S*p*34,c/2,t-c/2),b=o(a.y+A*p*34,l/2,e-l/2);if(n.some(y=>Math.abs(M-y.x)<(c+y.w)/2+2&&Math.abs(b-y.y)<(l+y.h)/2+2))continue;if(p<=3&&!d&&(d={...a,x:M,y:b,w:c,h:l}),!f)break;if(u.some(y=>M+c/2>y.left&&M-c/2<y.right&&b+l/2>y.top&&b-l/2<y.bottom))continue;let L=Math.hypot(M-a.x,b-a.y);L<x&&(g={...a,x:M,y:b,w:c,h:l},x=L)}let m=g??d;m&&n.push(m)}return n}var _p=ol(Oc(),1),mp="roomcraft-presence-v1",gp=4500,yp=/^sensor\.[a-z0-9_]+$/,_b=4,th=1536,eh=1024,yb=[[[0,0],[th,0],[th,eh],[0,eh],[0,0]]],xp=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],vb=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...xp.map(([i,t])=>[t,i]),...xp.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function vp(i,t){return i>=0&&i<=th&&t>=0&&t<=eh}function bp(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function bb(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function Sp(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!bp(s))continue;let[r,o,a,c,l,u]=s,f=vb.get(n.presenceTrackProfile),h=Math.hypot(o,l),d=vp(a,u)?{origin:{x:a,y:u},forward:{x:o/h,y:l/h}}:{},g=t.length;for(let[x,m]of[["configured",bb(n.presenceTrackZone)],["nominal",f?.ring]]){if(!m)continue;let p=m.map(([S,A])=>[r*S+o*A+a,c*S+l*A+u]);for(let[S]of _p.default.intersection([p],yb))t.push({id:n.id,kind:x,points:S.slice(0,-1).map(([A,M])=>({x:A,y:M})),...d,...x==="nominal"?{rangeMeters:f.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function Sb(i={},t=[]){let e={};for(let n of new Set(t)){if(!yp.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==mp)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,_b):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:mp,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function Mp(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!yp.test(o||"")||s.has(o)||!bp(a))continue;s.add(o);let c=Sb(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=gp)continue;let[f,h,d,g,x,m]=a;for(let p of u){let S=f*p.x+h*p.y+d,A=g*p.x+x*p.y+m;vp(S,A)&&n.push({id:o+":"+p.id,x:S,y:A,expiresAt:l+gp})}}return n}var Mb=22,Eb=5,wb=1e3/12,Tb=1e3,Ab=12;function Rb(i,t,e){let n=pp(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>n.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&n.push(l)}return n}function Cb(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function Ib(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=Mb;return!f&&(a.type==="garageDoor"||!Cb(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function Pb(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Ld(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),f=i.getElementById("sceneDefaultStatus"),h=Nd(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=i.createElement("label");x.className="scene-dashboard-look",x.hidden=!0,x.title="Lighting and device appearance from the last dashboard import";let m=i.createElement("input");m.type="checkbox",m.checked=!0,x.append(m," Dashboard look"),a?.append(x);let p=i.createElement("div");p.className="scene-selection",p.setAttribute("aria-hidden","true"),Object.assign(p.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(p);let S=i.createElement("div");S.className="scene-placeholders",Object.assign(S.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(S);let A=i.createElementNS("http://www.w3.org/2000/svg","svg");A.classList.add("scene-placeholder-leaders"),A.setAttribute("aria-hidden","true"),Object.assign(A.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(A,S);let M=new Map,b=i.getElementById("miniHelp"),w=b?.textContent,L=n.getAttribute("aria-label")??"Editable three-dimensional home view",y,C,F,N=Hu(null),z=r.value,q="default",O,G,X,K=-1/0,ut=0,nt=!1,it=!1,ot=null,Tt=!1,Rt=[],Zt=[],Jt="",$t=0,at,pt=!1,Ct={},Ot={key:"",scene:null,reduceMotion:!1},vt={id:null,scene:null},mt=()=>z!=="plan",Bt=()=>z==="free",dt=()=>n.getBoundingClientRect(),yt=Mt=>{let Xt=dt();return{x:Mt.clientX-Xt.left,y:Mt.clientY-Xt.top}};function bt(Mt){e.showStatus?.(Mt)}function Et(){if(!(!nt&&(y?.hasAmbientMotion||y?.hasPeopleMotion)&&mt()&&!i.hidden&&!d?.matches)){t.cancelAnimationFrame(X),X=void 0;return}X===void 0&&(X=t.requestAnimationFrame(Xt=>{if(X=void 0,Xt-K>=wb-1){K=Xt,ut=Xt/1e3;try{y.renderAmbient(ut)}catch{ct()}}Et()}))}function ht(Mt=!0){let Xt=mt()?y:null,jt=d?.matches===!0,ne=St()?Mp(Rt,Ct):[],Pe=JSON.stringify(ne);Pe===Ot.key&&Xt===Ot.scene&&jt===Ot.reduceMotion||(Ot={key:Pe,scene:Xt,reduceMotion:jt},Xt&&(Xt.setPeople(ne,(t.performance?.now()??0)/1e3,{reduceMotion:jt}),Mt&&k()),e.setPersonPreview?.(Xt?[]:ne))}function St(){return!!(g?.request&&Zt.length&&!nt&&!i.hidden)}async function Pt(Mt=!0){if(Mt&&ht(),pt||!St())return;pt=!0;let Xt=$t;try{let jt=await g.request("TRACK_GET",Zt);Xt===$t&&St()&&(Ct=jt&&typeof jt=="object"?jt:{},ht())}catch{Xt===$t&&(Ct={},ht())}finally{pt=!1}}function Nt(){St()?at===void 0&&(at=t.setInterval(Pt,Tb),Pt(!1)):at!==void 0&&(t.clearInterval(at),at=void 0,$t++,Ct={})}function Ft(Mt){Rt=Mt.filter(ne=>ne.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ne.presenceTrackEntityId)&&Array.isArray(ne.presenceTrackTransform));let Xt=[...new Set(Rt.map(ne=>ne.presenceTrackEntityId))].slice(0,Ab),jt=Xt.join(",");jt!==Jt&&(Jt=jt,Zt=Xt,$t++,Ct={}),Nt()}function k(Mt){if(Et(),!y||!mt())return;let{width:Xt,height:jt}=dt();if(!Xt||!jt)return;y.resize(Xt,jt);let ne=e.getSelection(),Pe=ne?.kind==="item"?ne.id:null;if(vt.scene!==y||vt.id!==Pe){let je=C.items.find(xn=>xn.id===Pe);y.setDetectionZones(je?Sp([je]):[]),vt={id:Pe,scene:y}}let bn=e.getPreview?.();x.hidden=!bn?.environment;let zn=!x.hidden&&m.checked,In=Object.create(null);if(zn)for(let je of C.items){let xn=bn.states?.[je.id];xn&&xn.entityId===je.entityId&&(In[je.id]=xn)}let is=zn?bn.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(y.render(ut,In,{...is,reduceMotion:d?.matches===!0},{animateTelemetry:!1,showTelemetryPosition:zn,draftPositions:Mt}),Bt())return;let Ke=[];for(let[je,xn]of M){let kn=y.anchor(je);xn.hidden=!kn,kn&&Ke.push({id:je,marker:xn,x:kn.x*Xt,y:kn.y*jt,w:96,h:44})}let gr=Rb(Ke,Xt,jt),Ao=new Set(gr.map(je=>je.id)),Ro=[];for(let je of gr){let{marker:xn,x:kn,y:R,w:Z,h:lt,id:rt}=je;Object.assign(xn.style,{left:`${kn}px`,top:`${R}px`,width:`${Z}px`,height:`${lt}px`});let st=Ke.find(Lt=>Lt.id===rt);if(Math.hypot(st.x-kn,st.y-R)>8){let Lt=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[zt,Ut]of Object.entries({x1:st.x,y1:st.y,x2:kn,y2:R}))Lt.setAttribute(zt,Ut);Lt.setAttribute("stroke","#6f816b"),Lt.setAttribute("stroke-width","1"),Lt.setAttribute("stroke-dasharray","3 3"),Ro.push(Lt)}}for(let[je,xn]of M)xn.hidden=!Ao.has(je);A.replaceChildren(...Ro);let Es=ne?.kind==="item"?y.anchor(ne.id):null;p.style.display=Es?"block":"none",Es&&(p.style.left=`${Es.x*Xt}px`,p.style.top=`${Es.y*jt}px`)}function ee(){if(!O)return;let Mt=O;O=void 0;try{n.releasePointerCapture(Mt.pointerId)}catch{}Mt.item&&k({[Mt.item.id]:{position:{x:Mt.item.x,y:Mt.item.y}}})}function Ht(){a&&(a.hidden=!mt());for(let Mt of Object.values(o))Mt&&(Mt.disabled=!mt());l&&(l.hidden=!y||!Bt(),l.disabled=Tt),u&&(u.hidden=!y||!mt()||!ot,u.disabled=Tt)}function U(Mt){f&&(f.textContent=Mt)}function E(){it=!0,U("")}function $(){n.tabIndex=Bt()?0:-1,n.style.cursor=Bt()?"grab":"",n.setAttribute("aria-label",Bt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":L)}function Q(Mt,{initial:Xt=!1}={}){Xt||(E(),Mt==="default"&&(it=!1)),W.cancel(),ee();let jt=y?.getView()??N,ne=Object.hasOwn(dr,Mt)?Mt:"plan";ne!=="plan"&&e.useSelectTool?.(),z=ne,mt()&&!Bt()&&(q=z),r.value=z,n.hidden=!mt(),$();let Pe=mt()&&!Bt();if(S.style.display=Pe?"block":"none",A.style.display=Pe?"block":"none",Pe||(p.style.display="none"),b&&(Bt()?b.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":b.textContent=mt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":w),s.classList.toggle("scene-3d",mt()),Ht(),!mt()){B(),Et(),x.hidden=!0,bt("Plan view \xB7 edit rooms, walls, floors and objects");return}let bn=z==="default"?Hu(ot):Bt()?Dd(jt):{preset:z};N=y?y.setView(bn):bn,B(),y&&bt(Bt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function ct(){W.cancel(),y?.dispose(),y=void 0,F=void 0,z="plan",Et(),r.value=z,n.hidden=!0,x.hidden=!0,$(),S.style.display="none",A.style.display="none",b&&(b.textContent=w),s.classList.remove("scene-3d"),p.style.display="none",Ht(),ht(!1),bt("3D view is unavailable on this screen. Plan view is ready.")}function B(){if(nt)return;let Mt=e.getProject();if(Ft(Mt.items),!mt()){ht();return}let Xt=JSON.stringify(Mt);try{if(!y||Xt!==F){ee(),y&&(N=y.getView()),y?.dispose(),y=void 0,C=Mt,y=hp(n,C),y.setView(N),F=Xt,M.clear(),S.replaceChildren();for(let jt of C.items.filter(ne=>ne.type==="cameraThumbnail"||ne.type.startsWith("ui"))){let ne=i.createElement("button");ne.type="button",ne.className="scene-placeholder",ne.textContent=jt.name||(jt.type==="cameraThumbnail"?"Camera":"Interface"),ne.setAttribute("aria-label",`Select ${ne.textContent}`),Object.assign(ne.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ne.addEventListener("pointerdown",Pe=>H(Pe,jt.id)),ne.addEventListener("click",Pe=>{!Bt()&&Pe.detail===0&&(e.selectItem(jt.id),k())}),M.set(jt.id,ne),S.append(ne)}}Ht(),ht(!1),k()}catch{ct()}}function _(Mt){!y||!mt()||(E(),ee(),y.setView(Mt(y.getView())),N=y.getView(),k())}let v=()=>B(),T=()=>{let Mt=e.getTool();mt()&&Mt!=="select"?Q("plan"):Bt()&&e.hasPlacement()?Q(q):mt()&&k()},P=()=>Q(r.value),D=()=>{t.cancelAnimationFrame(G),G=t.requestAnimationFrame(()=>k())},W=dp(n,{getView:()=>Bt()?y?.getView():null,onChange:Mt=>{!y||!Bt()||(E(),N=y.setView(Mt),D())}}),H=(Mt,Xt=null)=>{if(!mt()||Bt()||!y||Mt.button!==0||O)return;Mt.preventDefault(),Mt.stopPropagation();let jt=yt(Mt);if(e.hasPlacement()){let Ke=y.projectToPlan(jt.x,jt.y,e.getPlacementType());Ke&&e.placeAt(Ke.x,Ke.y),B();return}let{width:ne,height:Pe}=dt(),bn=new Map(C.items.map(Ke=>[Ke.id,y.anchor(Ke.id)])),zn=Xt??y.pickGarage(jt.x,jt.y),In=zn?C.items.find(Ke=>Ke.id===zn):Ib(C.items,jt,y.projectToPlan(jt.x,jt.y),bn,ne,Pe);if(e.selectItem(In?.id??null),!In){k();return}let is=y.projectToPlan(jt.x,jt.y,In.type);is&&(O={item:{...In},startScreen:jt,startPlan:is,pointerId:Mt.pointerId},n.setPointerCapture(Mt.pointerId),k())},et=Mt=>{if(!mt()||Bt()||(Mt.stopPropagation(),!O||O.pointerId!==Mt.pointerId||!y))return;let Xt=yt(Mt);if(!O.moved&&Math.hypot(Xt.x-O.startScreen.x,Xt.y-O.startScreen.y)<Eb)return;let jt=y.projectToPlan(Xt.x,Xt.y,O.item.type);jt&&(O.moved=!0,O.position={x:O.item.x+jt.x-O.startPlan.x,y:O.item.y+jt.y-O.startPlan.y},k({[O.item.id]:{position:O.position}}))},tt=Mt=>{if(!mt()||Bt()||(Mt.stopPropagation(),!O||O.pointerId!==Mt.pointerId))return;let Xt=O;O=void 0;try{n.releasePointerCapture(Mt.pointerId)}catch{}Xt.moved&&Xt.position?(e.moveItem(Xt.item.id,Xt.position.x,Xt.position.y),B()):k()},_t=Mt=>{Bt()||(O?.pointerId===Mt.pointerId&&ee(),Mt.stopPropagation())},I=Mt=>{!mt()||Bt()||(Mt.preventDefault(),Mt.stopPropagation(),_(Xt=>({...Xt,zoom:Xt.zoom*(Mt.deltaY<0?1.1:1/1.1)})))},j=Mt=>{Bt()&&Mt.target===n&&(Mt.key==="Delete"||Mt.key==="Backspace")&&(Mt.preventDefault(),Mt.stopImmediatePropagation()),Mt.key==="Escape"&&O&&(Mt.preventDefault(),Mt.stopImmediatePropagation(),ee())},Y=Mt=>{Mt.preventDefault(),ct()},gt=()=>_(Mt=>({...Mt,azimuth:Mt.azimuth-15})),xt=()=>_(Mt=>({...Mt,azimuth:Mt.azimuth+15})),ft=()=>_(Mt=>({...Mt,zoom:Mt.zoom/1.2})),wt=()=>_(Mt=>({...Mt,zoom:Mt.zoom*1.2})),It=()=>Q("top"),ie=()=>k(),Yt=()=>{ht(!1),k()},me=()=>{Nt(),ht(),Et()};i.addEventListener("visibilitychange",me),d?.addEventListener("change",Yt);async function be(){Tt=!0,Ht();try{ot=await h.read(),!nt&&!it&&Q("default",{initial:!0})}catch{nt||U("Saved view unavailable")}finally{Tt=!1,nt||Ht()}}async function Je(Mt){if(!(!y||!mt()||Tt)){Tt=!0,U("Saving view\u2026"),Ht();try{if(await h.write(Mt),nt)return;ot=Mt,Mt||Q("default"),U(Mt?"Default view saved":"Top down is the default")}catch{nt||U("Could not save default view")}finally{Tt=!1,nt||Ht()}}}let Le=()=>{Bt()&&y&&Je(y.getView())},$e=()=>Je(null);o.left?.addEventListener("click",gt),o.right?.addEventListener("click",xt),o.out?.addEventListener("click",ft),o.in?.addEventListener("click",wt),c?.addEventListener("click",It),l?.addEventListener("click",Le),u?.addEventListener("click",$e),m.addEventListener("change",ie),r.addEventListener("change",P),n.addEventListener("pointerdown",H),n.addEventListener("pointermove",et),n.addEventListener("pointerup",tt),n.addEventListener("pointercancel",_t),n.addEventListener("lostpointercapture",_t),n.addEventListener("wheel",I,{passive:!1}),n.addEventListener("webglcontextlost",Y),t.addEventListener("keydown",j,!0),t.addEventListener("roomcraft-editor-change",v),t.addEventListener("roomcraft-editor-tool",T);let We=new t.ResizeObserver(D);return We.observe(s),Q(z,{initial:!0}),be(),{getView:()=>y?.getView()??{...N},setView:Q,dispose(){nt=!0,Et(),Nt(),i.removeEventListener("visibilitychange",me),d?.removeEventListener("change",Yt),ee(),W.dispose(),z="plan",$(),We.disconnect(),t.cancelAnimationFrame(G),y?.dispose(),y=void 0,p.remove(),S.remove(),A.remove(),x.remove(),m.removeEventListener("change",ie),b&&(b.textContent=w),o.left?.removeEventListener("click",gt),o.right?.removeEventListener("click",xt),o.out?.removeEventListener("click",ft),o.in?.removeEventListener("click",wt),c?.removeEventListener("click",It),l?.removeEventListener("click",Le),u?.removeEventListener("click",$e),r.removeEventListener("change",P),n.removeEventListener("pointerdown",H),n.removeEventListener("pointermove",et),n.removeEventListener("pointerup",tt),n.removeEventListener("pointercancel",_t),n.removeEventListener("lostpointercapture",_t),n.removeEventListener("wheel",I),n.removeEventListener("webglcontextlost",Y),t.removeEventListener("keydown",j,!0),t.removeEventListener("roomcraft-editor-change",v),t.removeEventListener("roomcraft-editor-tool",T)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=ju,Pb(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
