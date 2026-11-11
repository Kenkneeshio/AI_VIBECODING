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
"use strict";(()=>{var Bm=Object.create;var Lh=Object.defineProperty;var km=Object.getOwnPropertyDescriptor;var zm=Object.getOwnPropertyNames;var Hm=Object.getPrototypeOf,Vm=Object.prototype.hasOwnProperty;var Gm=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Wm=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of zm(t))!Vm.call(i,s)&&s!==e&&Lh(i,s,{get:()=>t[s],enumerable:!(n=km(t,s))||n.enumerable});return i};var Rl=(i,t,e)=>(e=i!=null?Bm(Hm(i)):{},Wm(t||!i||!i.__esModule?Lh(e,"default",{value:i,enumerable:!0}):e,i));var tl=Gm((nh,ih)=>{(function(i,t){typeof nh=="object"&&typeof ih<"u"?ih.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(nh,(function(){"use strict";/**
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
    ***************************************************************************** */function i(H,_){var b={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},A,L,D,B;return B={next:F(0),throw:F(1),return:F(2)},typeof Symbol=="function"&&(B[Symbol.iterator]=function(){return this}),B;function F(K){return function(mt){return j([K,mt])}}function j(K){if(A)throw new TypeError("Generator is already executing.");for(;b;)try{if(A=1,L&&(D=K[0]&2?L.return:K[0]?L.throw||((D=L.return)&&D.call(L),0):L.next)&&!(D=D.call(L,K[1])).done)return D;switch(L=0,D&&(K=[K[0]&2,D.value]),K[0]){case 0:case 1:D=K;break;case 4:return b.label++,{value:K[1],done:!1};case 5:b.label++,L=K[1],K=[0];continue;case 7:K=b.ops.pop(),b.trys.pop();continue;default:if(D=b.trys,!(D=D.length>0&&D[D.length-1])&&(K[0]===6||K[0]===2)){b=0;continue}if(K[0]===3&&(!D||K[1]>D[0]&&K[1]<D[3])){b.label=K[1];break}if(K[0]===6&&b.label<D[1]){b.label=D[1],D=K;break}if(D&&b.label<D[2]){b.label=D[2],b.ops.push(K);break}D[2]&&b.ops.pop(),b.trys.pop();continue}K=_.call(H,b)}catch(mt){K=[6,mt],L=0}finally{A=D=0}if(K[0]&5)throw K[1];return{value:K[0]?K[1]:void 0,done:!0}}}var t=(function(){function H(_,b){this.next=null,this.key=_,this.data=b,this.left=null,this.right=null}return H})();function e(H,_){return H>_?1:H<_?-1:0}function n(H,_,b){for(var A=new t(null,null),L=A,D=A;;){var B=b(H,_.key);if(B<0){if(_.left===null)break;if(b(H,_.left.key)<0){var F=_.left;if(_.left=F.right,F.right=_,_=F,_.left===null)break}D.left=_,D=_,_=_.left}else if(B>0){if(_.right===null)break;if(b(H,_.right.key)>0){var F=_.right;if(_.right=F.left,F.left=_,_=F,_.right===null)break}L.right=_,L=_,_=_.right}else break}return L.right=_.left,D.left=_.right,_.left=A.right,_.right=A.left,_}function s(H,_,b,A){var L=new t(H,_);if(b===null)return L.left=L.right=null,L;b=n(H,b,A);var D=A(H,b.key);return D<0?(L.left=b.left,L.right=b,b.left=null):D>=0&&(L.right=b.right,L.left=b,b.right=null),L}function r(H,_,b){var A=null,L=null;if(_){_=n(H,_,b);var D=b(_.key,H);D===0?(A=_.left,L=_.right):D<0?(L=_.right,_.right=null,A=_):(A=_.left,_.left=null,L=_)}return{left:A,right:L}}function o(H,_,b){return _===null?H:(H===null||(_=n(H.key,_,b),_.left=H),_)}function a(H,_,b,A,L){if(H){A(""+_+(b?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+L(H)+`
`);var D=_+(b?"    ":"\u2502   ");H.left&&a(H.left,D,!1,A,L),H.right&&a(H.right,D,!0,A,L)}}var c=(function(){function H(_){_===void 0&&(_=e),this._root=null,this._size=0,this._comparator=_}return H.prototype.insert=function(_,b){return this._size++,this._root=s(_,b,this._root,this._comparator)},H.prototype.add=function(_,b){var A=new t(_,b);this._root===null&&(A.left=A.right=null,this._size++,this._root=A);var L=this._comparator,D=n(_,this._root,L),B=L(_,D.key);return B===0?this._root=D:(B<0?(A.left=D.left,A.right=D,D.left=null):B>0&&(A.right=D.right,A.left=D,D.right=null),this._size++,this._root=A),this._root},H.prototype.remove=function(_){this._root=this._remove(_,this._root,this._comparator)},H.prototype._remove=function(_,b,A){var L;if(b===null)return null;b=n(_,b,A);var D=A(_,b.key);return D===0?(b.left===null?L=b.right:(L=n(_,b.left,A),L.right=b.right),this._size--,L):b},H.prototype.pop=function(){var _=this._root;if(_){for(;_.left;)_=_.left;return this._root=n(_.key,this._root,this._comparator),this._root=this._remove(_.key,this._root,this._comparator),{key:_.key,data:_.data}}return null},H.prototype.findStatic=function(_){for(var b=this._root,A=this._comparator;b;){var L=A(_,b.key);if(L===0)return b;L<0?b=b.left:b=b.right}return null},H.prototype.find=function(_){return this._root&&(this._root=n(_,this._root,this._comparator),this._comparator(_,this._root.key)!==0)?null:this._root},H.prototype.contains=function(_){for(var b=this._root,A=this._comparator;b;){var L=A(_,b.key);if(L===0)return!0;L<0?b=b.left:b=b.right}return!1},H.prototype.forEach=function(_,b){for(var A=this._root,L=[],D=!1;!D;)A!==null?(L.push(A),A=A.left):L.length!==0?(A=L.pop(),_.call(b,A),A=A.right):D=!0;return this},H.prototype.range=function(_,b,A,L){for(var D=[],B=this._comparator,F=this._root,j;D.length!==0||F;)if(F)D.push(F),F=F.left;else{if(F=D.pop(),j=B(F.key,b),j>0)break;if(B(F.key,_)>=0&&A.call(L,F))return this;F=F.right}return this},H.prototype.keys=function(){var _=[];return this.forEach(function(b){var A=b.key;return _.push(A)}),_},H.prototype.values=function(){var _=[];return this.forEach(function(b){var A=b.data;return _.push(A)}),_},H.prototype.min=function(){return this._root?this.minNode(this._root).key:null},H.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},H.prototype.minNode=function(_){if(_===void 0&&(_=this._root),_)for(;_.left;)_=_.left;return _},H.prototype.maxNode=function(_){if(_===void 0&&(_=this._root),_)for(;_.right;)_=_.right;return _},H.prototype.at=function(_){for(var b=this._root,A=!1,L=0,D=[];!A;)if(b)D.push(b),b=b.left;else if(D.length>0){if(b=D.pop(),L===_)return b;L++,b=b.right}else A=!0;return null},H.prototype.next=function(_){var b=this._root,A=null;if(_.right){for(A=_.right;A.left;)A=A.left;return A}for(var L=this._comparator;b;){var D=L(_.key,b.key);if(D===0)break;D<0?(A=b,b=b.left):b=b.right}return A},H.prototype.prev=function(_){var b=this._root,A=null;if(_.left!==null){for(A=_.left;A.right;)A=A.right;return A}for(var L=this._comparator;b;){var D=L(_.key,b.key);if(D===0)break;D<0?b=b.left:(A=b,b=b.right)}return A},H.prototype.clear=function(){return this._root=null,this._size=0,this},H.prototype.toList=function(){return d(this._root)},H.prototype.load=function(_,b,A){b===void 0&&(b=[]),A===void 0&&(A=!1);var L=_.length,D=this._comparator;if(A&&g(_,b,0,L-1,D),this._root===null)this._root=l(_,b,0,L),this._size=L;else{var B=h(this.toList(),u(_,b),D);L=this._size+L,this._root=f({head:B},0,L)}return this},H.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(H.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(H.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),H.prototype.toString=function(_){_===void 0&&(_=function(A){return String(A.key)});var b=[];return a(this._root,"",!0,function(A){return b.push(A)},_),b.join("")},H.prototype.update=function(_,b,A){var L=this._comparator,D=r(_,this._root,L),B=D.left,F=D.right;L(_,b)<0?F=s(b,A,F,L):B=s(b,A,B,L),this._root=o(B,F,L)},H.prototype.split=function(_){return r(_,this._root,this._comparator)},H.prototype[Symbol.iterator]=function(){var _,b,A;return i(this,function(L){switch(L.label){case 0:_=this._root,b=[],A=!1,L.label=1;case 1:return A?[3,6]:_===null?[3,2]:(b.push(_),_=_.left,[3,5]);case 2:return b.length===0?[3,4]:(_=b.pop(),[4,_]);case 3:return L.sent(),_=_.right,[3,5];case 4:A=!0,L.label=5;case 5:return[3,1];case 6:return[2]}})},H})();function l(H,_,b,A){var L=A-b;if(L>0){var D=b+Math.floor(L/2),B=H[D],F=_[D],j=new t(B,F);return j.left=l(H,_,b,D),j.right=l(H,_,D+1,A),j}return null}function u(H,_){for(var b=new t(null,null),A=b,L=0;L<H.length;L++)A=A.next=new t(H[L],_[L]);return A.next=null,b.next}function d(H){for(var _=H,b=[],A=!1,L=new t(null,null),D=L;!A;)_?(b.push(_),_=_.left):b.length>0?(_=D=D.next=b.pop(),_=_.right):A=!0;return D.next=null,L.next}function f(H,_,b){var A=b-_;if(A>0){var L=_+Math.floor(A/2),D=f(H,_,L),B=H.head;return B.left=D,H.head=H.head.next,B.right=f(H,L+1,b),B}return null}function h(H,_,b){for(var A=new t(null,null),L=A,D=H,B=_;D!==null&&B!==null;)b(D.key,B.key)<0?(L.next=D,D=D.next):(L.next=B,B=B.next),L=L.next;return D!==null?L.next=D:B!==null&&(L.next=B),A.next}function g(H,_,b,A,L){if(!(b>=A)){for(var D=H[b+A>>1],B=b-1,F=A+1;;){do B++;while(L(H[B],D)<0);do F--;while(L(H[F],D)>0);if(B>=F)break;var j=H[B];H[B]=H[F],H[F]=j,j=_[B],_[B]=_[F],_[F]=j}g(H,_,b,F,L),g(H,_,F+1,A,L)}}let x=(H,_)=>H.ll.x<=_.x&&_.x<=H.ur.x&&H.ll.y<=_.y&&_.y<=H.ur.y,p=(H,_)=>{if(_.ur.x<H.ll.x||H.ur.x<_.ll.x||_.ur.y<H.ll.y||H.ur.y<_.ll.y)return null;let b=H.ll.x<_.ll.x?_.ll.x:H.ll.x,A=H.ur.x<_.ur.x?H.ur.x:_.ur.x,L=H.ll.y<_.ll.y?_.ll.y:H.ll.y,D=H.ur.y<_.ur.y?H.ur.y:_.ur.y;return{ll:{x:b,y:L},ur:{x:A,y:D}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let v=m*m,T=(H,_)=>{if(-m<H&&H<m&&-m<_&&_<m)return 0;let b=H-_;return b*b<v*H*_?0:H<_?-1:1};class S{constructor(){this.reset()}reset(){this.xRounder=new M,this.yRounder=new M}round(_,b){return{x:this.xRounder.round(_),y:this.yRounder.round(b)}}}class M{constructor(){this.tree=new c,this.round(0)}round(_){let b=this.tree.add(_),A=this.tree.prev(b);if(A!==null&&T(b.key,A.key)===0)return this.tree.remove(_),A.key;let L=this.tree.next(b);return L!==null&&T(b.key,L.key)===0?(this.tree.remove(_),L.key):_}}let E=new S,I=11102230246251565e-32,y=134217729,P=(3+8*I)*I;function U(H,_,b,A,L){let D,B,F,j,K=_[0],mt=A[0],R=0,it=0;mt>K==mt>-K?(D=K,K=_[++R]):(D=mt,mt=A[++it]);let Q=0;if(R<H&&it<b)for(mt>K==mt>-K?(B=K+D,F=D-(B-K),K=_[++R]):(B=mt+D,F=D-(B-mt),mt=A[++it]),D=B,F!==0&&(L[Q++]=F);R<H&&it<b;)mt>K==mt>-K?(B=D+K,j=B-D,F=D-(B-j)+(K-j),K=_[++R]):(B=D+mt,j=B-D,F=D-(B-j)+(mt-j),mt=A[++it]),D=B,F!==0&&(L[Q++]=F);for(;R<H;)B=D+K,j=B-D,F=D-(B-j)+(K-j),K=_[++R],D=B,F!==0&&(L[Q++]=F);for(;it<b;)B=D+mt,j=B-D,F=D-(B-j)+(mt-j),mt=A[++it],D=B,F!==0&&(L[Q++]=F);return(D!==0||Q===0)&&(L[Q++]=D),Q}function N(H,_){let b=_[0];for(let A=1;A<H;A++)b+=_[A];return b}function z(H){return new Float64Array(H)}let q=(3+16*I)*I,k=(2+12*I)*I,$=(9+64*I)*I*I,V=z(4),nt=z(8),G=z(12),X=z(16),Y=z(4);function Z(H,_,b,A,L,D,B){let F,j,K,mt,R,it,Q,gt,xt,dt,vt,Ct,Jt,jt,pe,_e,Xe,Le,Be=H-L,$e=b-L,At=_-D,qt=A-D;jt=Be*qt,it=y*Be,Q=it-(it-Be),gt=Be-Q,it=y*qt,xt=it-(it-qt),dt=qt-xt,pe=gt*dt-(jt-Q*xt-gt*xt-Q*dt),_e=At*$e,it=y*At,Q=it-(it-At),gt=At-Q,it=y*$e,xt=it-(it-$e),dt=$e-xt,Xe=gt*dt-(_e-Q*xt-gt*xt-Q*dt),vt=pe-Xe,R=pe-vt,V[0]=pe-(vt+R)+(R-Xe),Ct=jt+vt,R=Ct-jt,Jt=jt-(Ct-R)+(vt-R),vt=Jt-_e,R=Jt-vt,V[1]=Jt-(vt+R)+(R-_e),Le=Ct+vt,R=Le-Ct,V[2]=Ct-(Le-R)+(vt-R),V[3]=Le;let ee=N(4,V),ne=k*B;if(ee>=ne||-ee>=ne||(R=H-Be,F=H-(Be+R)+(R-L),R=b-$e,K=b-($e+R)+(R-L),R=_-At,j=_-(At+R)+(R-D),R=A-qt,mt=A-(qt+R)+(R-D),F===0&&j===0&&K===0&&mt===0)||(ne=$*B+P*Math.abs(ee),ee+=Be*mt+qt*F-(At*K+$e*j),ee>=ne||-ee>=ne))return ee;jt=F*qt,it=y*F,Q=it-(it-F),gt=F-Q,it=y*qt,xt=it-(it-qt),dt=qt-xt,pe=gt*dt-(jt-Q*xt-gt*xt-Q*dt),_e=j*$e,it=y*j,Q=it-(it-j),gt=j-Q,it=y*$e,xt=it-(it-$e),dt=$e-xt,Xe=gt*dt-(_e-Q*xt-gt*xt-Q*dt),vt=pe-Xe,R=pe-vt,Y[0]=pe-(vt+R)+(R-Xe),Ct=jt+vt,R=Ct-jt,Jt=jt-(Ct-R)+(vt-R),vt=Jt-_e,R=Jt-vt,Y[1]=Jt-(vt+R)+(R-_e),Le=Ct+vt,R=Le-Ct,Y[2]=Ct-(Le-R)+(vt-R),Y[3]=Le;let Te=U(4,V,4,Y,nt);jt=Be*mt,it=y*Be,Q=it-(it-Be),gt=Be-Q,it=y*mt,xt=it-(it-mt),dt=mt-xt,pe=gt*dt-(jt-Q*xt-gt*xt-Q*dt),_e=At*K,it=y*At,Q=it-(it-At),gt=At-Q,it=y*K,xt=it-(it-K),dt=K-xt,Xe=gt*dt-(_e-Q*xt-gt*xt-Q*dt),vt=pe-Xe,R=pe-vt,Y[0]=pe-(vt+R)+(R-Xe),Ct=jt+vt,R=Ct-jt,Jt=jt-(Ct-R)+(vt-R),vt=Jt-_e,R=Jt-vt,Y[1]=Jt-(vt+R)+(R-_e),Le=Ct+vt,R=Le-Ct,Y[2]=Ct-(Le-R)+(vt-R),Y[3]=Le;let Rn=U(Te,nt,4,Y,G);jt=F*mt,it=y*F,Q=it-(it-F),gt=F-Q,it=y*mt,xt=it-(it-mt),dt=mt-xt,pe=gt*dt-(jt-Q*xt-gt*xt-Q*dt),_e=j*K,it=y*j,Q=it-(it-j),gt=j-Q,it=y*K,xt=it-(it-K),dt=K-xt,Xe=gt*dt-(_e-Q*xt-gt*xt-Q*dt),vt=pe-Xe,R=pe-vt,Y[0]=pe-(vt+R)+(R-Xe),Ct=jt+vt,R=Ct-jt,Jt=jt-(Ct-R)+(vt-R),vt=Jt-_e,R=Jt-vt,Y[1]=Jt-(vt+R)+(R-_e),Le=Ct+vt,R=Le-Ct,Y[2]=Ct-(Le-R)+(vt-R),Y[3]=Le;let Zn=U(Rn,G,4,Y,X);return X[Zn-1]}function ot(H,_,b,A,L,D){let B=(_-D)*(b-L),F=(H-L)*(A-D),j=B-F,K=Math.abs(B+F);return Math.abs(j)>=q*K?j:-Z(H,_,b,A,L,D,K)}let yt=(H,_)=>H.x*_.y-H.y*_.x,bt=(H,_)=>H.x*_.x+H.y*_.y,St=(H,_,b)=>{let A=ot(H.x,H.y,_.x,_.y,b.x,b.y);return A>0?-1:A<0?1:0},Pt=H=>Math.sqrt(bt(H,H)),at=(H,_,b)=>{let A={x:_.x-H.x,y:_.y-H.y},L={x:b.x-H.x,y:b.y-H.y};return yt(L,A)/Pt(L)/Pt(A)},ht=(H,_,b)=>{let A={x:_.x-H.x,y:_.y-H.y},L={x:b.x-H.x,y:b.y-H.y};return bt(L,A)/Pt(L)/Pt(A)},Tt=(H,_,b)=>_.y===0?null:{x:H.x+_.x/_.y*(b-H.y),y:b},Ft=(H,_,b)=>_.x===0?null:{x:b,y:H.y+_.y/_.x*(b-H.x)},Lt=(H,_,b,A)=>{if(_.x===0)return Ft(b,A,H.x);if(A.x===0)return Ft(H,_,b.x);if(_.y===0)return Tt(b,A,H.y);if(A.y===0)return Tt(H,_,b.y);let L=yt(_,A);if(L==0)return null;let D={x:b.x-H.x,y:b.y-H.y},B=yt(D,_)/L,F=yt(D,A)/L,j=H.x+F*_.x,K=b.x+B*A.x,mt=H.y+F*_.y,R=b.y+B*A.y,it=(j+K)/2,Q=(mt+R)/2;return{x:it,y:Q}};class It{static compare(_,b){let A=It.comparePoints(_.point,b.point);return A!==0?A:(_.point!==b.point&&_.link(b),_.isLeft!==b.isLeft?_.isLeft?1:-1:ut.compare(_.segment,b.segment))}static comparePoints(_,b){return _.x<b.x?-1:_.x>b.x?1:_.y<b.y?-1:_.y>b.y?1:0}constructor(_,b){_.events===void 0?_.events=[this]:_.events.push(this),this.point=_,this.isLeft=b}link(_){if(_.point===this.point)throw new Error("Tried to link already linked events");let b=_.point.events;for(let A=0,L=b.length;A<L;A++){let D=b[A];this.point.events.push(D),D.point=this.point}this.checkForConsuming()}checkForConsuming(){let _=this.point.events.length;for(let b=0;b<_;b++){let A=this.point.events[b];if(A.segment.consumedBy===void 0)for(let L=b+1;L<_;L++){let D=this.point.events[L];D.consumedBy===void 0&&A.otherSE.point.events===D.otherSE.point.events&&A.segment.consume(D.segment)}}}getAvailableLinkedEvents(){let _=[];for(let b=0,A=this.point.events.length;b<A;b++){let L=this.point.events[b];L!==this&&!L.segment.ringOut&&L.segment.isInResult()&&_.push(L)}return _}getLeftmostComparator(_){let b=new Map,A=L=>{let D=L.otherSE;b.set(L,{sine:at(this.point,_.point,D.point),cosine:ht(this.point,_.point,D.point)})};return(L,D)=>{b.has(L)||A(L),b.has(D)||A(D);let{sine:B,cosine:F}=b.get(L),{sine:j,cosine:K}=b.get(D);return B>=0&&j>=0?F<K?1:F>K?-1:0:B<0&&j<0?F<K?-1:F>K?1:0:j<B?-1:j>B?1:0}}}let Ht=0;class ut{static compare(_,b){let A=_.leftSE.point.x,L=b.leftSE.point.x,D=_.rightSE.point.x,B=b.rightSE.point.x;if(B<A)return 1;if(D<L)return-1;let F=_.leftSE.point.y,j=b.leftSE.point.y,K=_.rightSE.point.y,mt=b.rightSE.point.y;if(A<L){if(j<F&&j<K)return 1;if(j>F&&j>K)return-1;let R=_.comparePoint(b.leftSE.point);if(R<0)return 1;if(R>0)return-1;let it=b.comparePoint(_.rightSE.point);return it!==0?it:-1}if(A>L){if(F<j&&F<mt)return-1;if(F>j&&F>mt)return 1;let R=b.comparePoint(_.leftSE.point);if(R!==0)return R;let it=_.comparePoint(b.rightSE.point);return it<0?1:it>0?-1:1}if(F<j)return-1;if(F>j)return 1;if(D<B){let R=b.comparePoint(_.rightSE.point);if(R!==0)return R}if(D>B){let R=_.comparePoint(b.rightSE.point);if(R<0)return 1;if(R>0)return-1}if(D!==B){let R=K-F,it=D-A,Q=mt-j,gt=B-L;if(R>it&&Q<gt)return 1;if(R<it&&Q>gt)return-1}return D>B?1:D<B||K<mt?-1:K>mt?1:_.id<b.id?-1:_.id>b.id?1:0}constructor(_,b,A,L){this.id=++Ht,this.leftSE=_,_.segment=this,_.otherSE=b,this.rightSE=b,b.segment=this,b.otherSE=_,this.rings=A,this.windings=L}static fromRing(_,b,A){let L,D,B,F=It.comparePoints(_,b);if(F<0)L=_,D=b,B=1;else if(F>0)L=b,D=_,B=-1;else throw new Error(`Tried to create degenerate segment at [${_.x}, ${_.y}]`);let j=new It(L,!0),K=new It(D,!1);return new ut(j,K,[A],[B])}replaceRightSE(_){this.rightSE=_,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let _=this.leftSE.point.y,b=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:_<b?_:b},ur:{x:this.rightSE.point.x,y:_>b?_:b}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(_){return _.x===this.leftSE.point.x&&_.y===this.leftSE.point.y||_.x===this.rightSE.point.x&&_.y===this.rightSE.point.y}comparePoint(_){if(this.isAnEndpoint(_))return 0;let b=this.leftSE.point,A=this.rightSE.point,L=this.vector();if(b.x===A.x)return _.x===b.x?0:_.x<b.x?1:-1;let D=(_.y-b.y)/L.y,B=b.x+D*L.x;if(_.x===B)return 0;let F=(_.x-b.x)/L.x,j=b.y+F*L.y;return _.y===j?0:_.y<j?-1:1}getIntersection(_){let b=this.bbox(),A=_.bbox(),L=p(b,A);if(L===null)return null;let D=this.leftSE.point,B=this.rightSE.point,F=_.leftSE.point,j=_.rightSE.point,K=x(b,F)&&this.comparePoint(F)===0,mt=x(A,D)&&_.comparePoint(D)===0,R=x(b,j)&&this.comparePoint(j)===0,it=x(A,B)&&_.comparePoint(B)===0;if(mt&&K)return it&&!R?B:!it&&R?j:null;if(mt)return R&&D.x===j.x&&D.y===j.y?null:D;if(K)return it&&B.x===F.x&&B.y===F.y?null:F;if(it&&R)return null;if(it)return B;if(R)return j;let Q=Lt(D,this.vector(),F,_.vector());return Q===null||!x(L,Q)?null:E.round(Q.x,Q.y)}split(_){let b=[],A=_.events!==void 0,L=new It(_,!0),D=new It(_,!1),B=this.rightSE;this.replaceRightSE(D),b.push(D),b.push(L);let F=new ut(L,B,this.rings.slice(),this.windings.slice());return It.comparePoints(F.leftSE.point,F.rightSE.point)>0&&F.swapEvents(),It.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),A&&(L.checkForConsuming(),D.checkForConsuming()),b}swapEvents(){let _=this.rightSE;this.rightSE=this.leftSE,this.leftSE=_,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let b=0,A=this.windings.length;b<A;b++)this.windings[b]*=-1}consume(_){let b=this,A=_;for(;b.consumedBy;)b=b.consumedBy;for(;A.consumedBy;)A=A.consumedBy;let L=ut.compare(b,A);if(L!==0){if(L>0){let D=b;b=A,A=D}if(b.prev===A){let D=b;b=A,A=D}for(let D=0,B=A.rings.length;D<B;D++){let F=A.rings[D],j=A.windings[D],K=b.rings.indexOf(F);K===-1?(b.rings.push(F),b.windings.push(j)):b.windings[K]+=j}A.rings=null,A.windings=null,A.consumedBy=b,A.leftSE.consumedBy=b.leftSE,A.rightSE.consumedBy=b.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let _=this.prev.consumedBy||this.prev;this._beforeState=_.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let _=this.beforeState();this._afterState={rings:_.rings.slice(0),windings:_.windings.slice(0),multiPolys:[]};let b=this._afterState.rings,A=this._afterState.windings,L=this._afterState.multiPolys;for(let F=0,j=this.rings.length;F<j;F++){let K=this.rings[F],mt=this.windings[F],R=b.indexOf(K);R===-1?(b.push(K),A.push(mt)):A[R]+=mt}let D=[],B=[];for(let F=0,j=b.length;F<j;F++){if(A[F]===0)continue;let K=b[F],mt=K.poly;if(B.indexOf(mt)===-1)if(K.isExterior)D.push(mt);else{B.indexOf(mt)===-1&&B.push(mt);let R=D.indexOf(K.poly);R!==-1&&D.splice(R,1)}}for(let F=0,j=D.length;F<j;F++){let K=D[F].multiPoly;L.indexOf(K)===-1&&L.push(K)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let _=this.beforeState().multiPolys,b=this.afterState().multiPolys;switch(Yt.type){case"union":{let A=_.length===0,L=b.length===0;this._isInResult=A!==L;break}case"intersection":{let A,L;_.length<b.length?(A=_.length,L=b.length):(A=b.length,L=_.length),this._isInResult=L===Yt.numMultiPolys&&A<L;break}case"xor":{let A=Math.abs(_.length-b.length);this._isInResult=A%2===1;break}case"difference":{let A=L=>L.length===1&&L[0].isSubject;this._isInResult=A(_)!==A(b);break}default:throw new Error(`Unrecognized operation type found ${Yt.type}`)}return this._isInResult}}class _t{constructor(_,b,A){if(!Array.isArray(_)||_.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=b,this.isExterior=A,this.segments=[],typeof _[0][0]!="number"||typeof _[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let L=E.round(_[0][0],_[0][1]);this.bbox={ll:{x:L.x,y:L.y},ur:{x:L.x,y:L.y}};let D=L;for(let B=1,F=_.length;B<F;B++){if(typeof _[B][0]!="number"||typeof _[B][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let j=E.round(_[B][0],_[B][1]);j.x===D.x&&j.y===D.y||(this.segments.push(ut.fromRing(D,j,this)),j.x<this.bbox.ll.x&&(this.bbox.ll.x=j.x),j.y<this.bbox.ll.y&&(this.bbox.ll.y=j.y),j.x>this.bbox.ur.x&&(this.bbox.ur.x=j.x),j.y>this.bbox.ur.y&&(this.bbox.ur.y=j.y),D=j)}(L.x!==D.x||L.y!==D.y)&&this.segments.push(ut.fromRing(D,L,this))}getSweepEvents(){let _=[];for(let b=0,A=this.segments.length;b<A;b++){let L=this.segments[b];_.push(L.leftSE),_.push(L.rightSE)}return _}}class Mt{constructor(_,b){if(!Array.isArray(_))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new _t(_[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let A=1,L=_.length;A<L;A++){let D=new _t(_[A],this,!1);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.interiorRings.push(D)}this.multiPoly=b}getSweepEvents(){let _=this.exteriorRing.getSweepEvents();for(let b=0,A=this.interiorRings.length;b<A;b++){let L=this.interiorRings[b].getSweepEvents();for(let D=0,B=L.length;D<B;D++)_.push(L[D])}return _}}class Et{constructor(_,b){if(!Array.isArray(_))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof _[0][0][0]=="number"&&(_=[_])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let A=0,L=_.length;A<L;A++){let D=new Mt(_[A],this);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.polys.push(D)}this.isSubject=b}getSweepEvents(){let _=[];for(let b=0,A=this.polys.length;b<A;b++){let L=this.polys[b].getSweepEvents();for(let D=0,B=L.length;D<B;D++)_.push(L[D])}return _}}class wt{static factory(_){let b=[];for(let A=0,L=_.length;A<L;A++){let D=_[A];if(!D.isInResult()||D.ringOut)continue;let B=null,F=D.leftSE,j=D.rightSE,K=[F],mt=F.point,R=[];for(;B=F,F=j,K.push(F),F.point!==mt;)for(;;){let it=F.getAvailableLinkedEvents();if(it.length===0){let xt=K[0].point,dt=K[K.length-1].point;throw new Error(`Unable to complete output ring starting at [${xt.x}, ${xt.y}]. Last matching segment found ends at [${dt.x}, ${dt.y}].`)}if(it.length===1){j=it[0].otherSE;break}let Q=null;for(let xt=0,dt=R.length;xt<dt;xt++)if(R[xt].point===F.point){Q=xt;break}if(Q!==null){let xt=R.splice(Q)[0],dt=K.splice(xt.index);dt.unshift(dt[0].otherSE),b.push(new wt(dt.reverse()));continue}R.push({index:K.length,point:F.point});let gt=F.getLeftmostComparator(B);j=it.sort(gt)[0].otherSE;break}b.push(new wt(K))}return b}constructor(_){this.events=_;for(let b=0,A=_.length;b<A;b++)_[b].segment.ringOut=this;this.poly=null}getGeom(){let _=this.events[0].point,b=[_];for(let K=1,mt=this.events.length-1;K<mt;K++){let R=this.events[K].point,it=this.events[K+1].point;St(R,_,it)!==0&&(b.push(R),_=R)}if(b.length===1)return null;let A=b[0],L=b[1];St(A,_,L)===0&&b.shift(),b.push(b[0]);let D=this.isExteriorRing()?1:-1,B=this.isExteriorRing()?0:b.length-1,F=this.isExteriorRing()?b.length:-1,j=[];for(let K=B;K!=F;K+=D)j.push([b[K].x,b[K].y]);return j}isExteriorRing(){if(this._isExteriorRing===void 0){let _=this.enclosingRing();this._isExteriorRing=_?!_.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let _=this.events[0];for(let L=1,D=this.events.length;L<D;L++){let B=this.events[L];It.compare(_,B)>0&&(_=B)}let b=_.segment.prevInResult(),A=b?b.prevInResult():null;for(;;){if(!b)return null;if(!A)return b.ringOut;if(A.ringOut!==b.ringOut)return A.ringOut.enclosingRing()!==b.ringOut?b.ringOut:b.ringOut.enclosingRing();b=A.prevInResult(),A=b?b.prevInResult():null}}}class Ut{constructor(_){this.exteriorRing=_,_.poly=this,this.interiorRings=[]}addInterior(_){this.interiorRings.push(_),_.poly=this}getGeom(){let _=[this.exteriorRing.getGeom()];if(_[0]===null)return null;for(let b=0,A=this.interiorRings.length;b<A;b++){let L=this.interiorRings[b].getGeom();L!==null&&_.push(L)}return _}}class Bt{constructor(_){this.rings=_,this.polys=this._composePolys(_)}getGeom(){let _=[];for(let b=0,A=this.polys.length;b<A;b++){let L=this.polys[b].getGeom();L!==null&&_.push(L)}return _}_composePolys(_){let b=[];for(let A=0,L=_.length;A<L;A++){let D=_[A];if(!D.poly)if(D.isExteriorRing())b.push(new Ut(D));else{let B=D.enclosingRing();B.poly||b.push(new Ut(B)),B.poly.addInterior(D)}}return b}}class Vt{constructor(_){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ut.compare;this.queue=_,this.tree=new c(b),this.segments=[]}process(_){let b=_.segment,A=[];if(_.consumedBy)return _.isLeft?this.queue.remove(_.otherSE):this.tree.remove(b),A;let L=_.isLeft?this.tree.add(b):this.tree.find(b);if(!L)throw new Error(`Unable to find segment #${b.id} [${b.leftSE.point.x}, ${b.leftSE.point.y}] -> [${b.rightSE.point.x}, ${b.rightSE.point.y}] in SweepLine tree.`);let D=L,B=L,F,j;for(;F===void 0;)D=this.tree.prev(D),D===null?F=null:D.key.consumedBy===void 0&&(F=D.key);for(;j===void 0;)B=this.tree.next(B),B===null?j=null:B.key.consumedBy===void 0&&(j=B.key);if(_.isLeft){let K=null;if(F){let R=F.getIntersection(b);if(R!==null&&(b.isAnEndpoint(R)||(K=R),!F.isAnEndpoint(R))){let it=this._splitSafely(F,R);for(let Q=0,gt=it.length;Q<gt;Q++)A.push(it[Q])}}let mt=null;if(j){let R=j.getIntersection(b);if(R!==null&&(b.isAnEndpoint(R)||(mt=R),!j.isAnEndpoint(R))){let it=this._splitSafely(j,R);for(let Q=0,gt=it.length;Q<gt;Q++)A.push(it[Q])}}if(K!==null||mt!==null){let R=null;K===null?R=mt:mt===null?R=K:R=It.comparePoints(K,mt)<=0?K:mt,this.queue.remove(b.rightSE),A.push(b.rightSE);let it=b.split(R);for(let Q=0,gt=it.length;Q<gt;Q++)A.push(it[Q])}A.length>0?(this.tree.remove(b),A.push(_)):(this.segments.push(b),b.prev=F)}else{if(F&&j){let K=F.getIntersection(j);if(K!==null){if(!F.isAnEndpoint(K)){let mt=this._splitSafely(F,K);for(let R=0,it=mt.length;R<it;R++)A.push(mt[R])}if(!j.isAnEndpoint(K)){let mt=this._splitSafely(j,K);for(let R=0,it=mt.length;R<it;R++)A.push(mt[R])}}}this.tree.remove(b)}return A}_splitSafely(_,b){this.tree.remove(_);let A=_.rightSE;this.queue.remove(A);let L=_.split(b);return L.push(A),_.consumedBy===void 0&&this.tree.add(_),L}}let Kt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,J=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class re{run(_,b,A){Yt.type=_,E.reset();let L=[new Et(b,!0)];for(let R=0,it=A.length;R<it;R++)L.push(new Et(A[R],!1));if(Yt.numMultiPolys=L.length,Yt.type==="difference"){let R=L[0],it=1;for(;it<L.length;)p(L[it].bbox,R.bbox)!==null?it++:L.splice(it,1)}if(Yt.type==="intersection")for(let R=0,it=L.length;R<it;R++){let Q=L[R];for(let gt=R+1,xt=L.length;gt<xt;gt++)if(p(Q.bbox,L[gt].bbox)===null)return[]}let D=new c(It.compare);for(let R=0,it=L.length;R<it;R++){let Q=L[R].getSweepEvents();for(let gt=0,xt=Q.length;gt<xt;gt++)if(D.insert(Q[gt]),D.size>Kt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let B=new Vt(D),F=D.size,j=D.pop();for(;j;){let R=j.key;if(D.size===F){let Q=R.segment;throw new Error(`Unable to pop() ${R.isLeft?"left":"right"} SweepEvent [${R.point.x}, ${R.point.y}] from segment #${Q.id} [${Q.leftSE.point.x}, ${Q.leftSE.point.y}] -> [${Q.rightSE.point.x}, ${Q.rightSE.point.y}] from queue.`)}if(D.size>Kt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(B.segments.length>J)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let it=B.process(R);for(let Q=0,gt=it.length;Q<gt;Q++){let xt=it[Q];xt.consumedBy===void 0&&D.insert(xt)}F=D.size,j=D.pop()}E.reset();let K=wt.factory(B.segments);return new Bt(K).getGeom()}}let Yt=new re;var ft={union:function(H){for(var _=arguments.length,b=new Array(_>1?_-1:0),A=1;A<_;A++)b[A-1]=arguments[A];return Yt.run("union",H,b)},intersection:function(H){for(var _=arguments.length,b=new Array(_>1?_-1:0),A=1;A<_;A++)b[A-1]=arguments[A];return Yt.run("intersection",H,b)},xor:function(H){for(var _=arguments.length,b=new Array(_>1?_-1:0),A=1;A<_;A++)b[A-1]=arguments[A];return Yt.run("xor",H,b)},difference:function(H){for(var _=arguments.length,b=new Array(_>1?_-1:0),A=1;A<_;A++)b[A-1]=arguments[A];return Yt.run("difference",H,b)}};return ft}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var vf=0,mu=1,bf=2;var Es=1,Mf=2,mr=3,rs=0,_n=1,rn=2,gi=0,gr=1,bo=2,gu=3,xu=4,Sf=5;var ws=100,Ef=101,wf=102,Tf=103,Af=104,Rf=200,Cf=201,If=202,Pf=203,yu=204,_u=205,Lf=206,Nf=207,Df=208,Uf=209,Ff=210,Of=211,Bf=212,kf=213,zf=214,ba=0,Ma=1,Sa=2,Qs=3,Ea=4,wa=5,Ta=6,Aa=7,sc=0,Hf=1,Vf=2,ni=0,vu=1,bu=2,Mu=3,Mo=4,Su=5,Eu=6,wu=7;var Tu=300,os=301,Ts=302,rc=303,oc=304,So=306,ys=1e3,hi=1001,Ra=1002,je=1003,Gf=1004;var Eo=1005;var sn=1006,ac=1007;var as=1008;var Tn=1009,Au=1010,Ru=1011,xr=1012,cc=1013,ii=1014,Gn=1015,si=1016,lc=1017,uc=1018,yr=1020,Cu=35902,Iu=35899,Pu=1021,Lu=1022,Wn=1023,di=1026,cs=1027,hc=1028,fc=1029,ls=1030,dc=1031;var pc=1033,wo=33776,To=33777,Ao=33778,Ro=33779,mc=35840,gc=35841,xc=35842,yc=35843,_c=36196,vc=37492,bc=37496,Mc=37488,Sc=37489,Co=37490,Ec=37491,wc=37808,Tc=37809,Ac=37810,Rc=37811,Cc=37812,Ic=37813,Pc=37814,Lc=37815,Nc=37816,Dc=37817,Uc=37818,Fc=37819,Oc=37820,Bc=37821,kc=36492,zc=36494,Hc=36495,Vc=36283,Gc=36284,Io=36285,Wc=36286;var Gr=2300,Ca=2301,_a=2302,eu=2303,nu=2400,iu=2401,su=2402;var Wf=3200;var Po=0,Xf=1,Di="",We="srgb",Wr="srgb-linear",Xr="linear",Me="srgb";var va=7680;var Yf=519,qf=512,Zf=513,Jf=514,Xc=515,$f=516,Kf=517,Yc=518,jf=519,Nu=35044,xi=35048;var Du="300 es",ti=2e3,tr=2001;function Xm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ym(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qf(){let i=Yr("canvas");return i.style.display="block",i}var Nh={},er=null;function qr(...i){let t="THREE."+i.shift();er?er("log",t,...i):console.log(t,...i)}function td(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function te(...i){i=td(i);let t="THREE."+i.shift();if(er)er("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=td(i);let t="THREE."+i.shift();if(er)er("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function xs(...i){let t=i.join(" ");t in Nh||(Nh[t]=!0,te(...i))}function ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nd={[ba]:Ma,[Sa]:Ta,[Ea]:Aa,[Qs]:wa,[Ma]:ba,[Ta]:Sa,[Aa]:Ea,[wa]:Qs},pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dh=1234567,kr=Math.PI/180,nr=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function Uu(i,t){return(i%t+t)%t}function qm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zm(i,t,e){return i!==t?(e-i)/(t-i):0}function zr(i,t,e){return(1-e)*i+e*t}function Jm(i,t,e,n){return zr(i,t,1-Math.exp(-e*n))}function $m(i,t=1){return t-Math.abs(Uu(i,t*2)-t)}function Km(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tg(i,t){return i+Math.random()*(t-i)}function eg(i){return i*(.5-Math.random())}function ng(i){i!==void 0&&(Dh=i);let t=Dh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ig(i){return i*kr}function sg(i){return i*nr}function rg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ag(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var me={DEG2RAD:kr,RAD2DEG:nr,generateUUID:fi,clamp:oe,euclideanModulo:Uu,mapLinear:qm,inverseLerp:Zm,lerp:zr,damp:Jm,pingpong:$m,smoothstep:Km,smootherstep:jm,randInt:Qm,randFloat:tg,randFloatSpread:eg,seededRandom:ng,degToRad:ig,radToDeg:sg,isPowerOfTwo:rg,ceilPowerOfTwo:og,floorPowerOfTwo:ag,setQuaternionFromProperEuler:cg,normalize:Ee,denormalize:Qn},Rt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==f||l!==h||u!==g){let p=c*f+l*h+u*g+d*x;p<0&&(f=-f,h=-h,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);m=Math.sin(m*v)/T,a=Math.sin(a*v)/T,c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+x*a}else{c=c*m+f*a,l=l*m+h*a,u=u*m+g*a,d=d*m+x*a;let v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*h-l*f,t[e+1]=c*g+u*f+l*d-a*h,t[e+2]=l*g+u*h+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cl.copy(this).projectOnVector(t),this.sub(Cl)}reflect(t){return this.sub(Cl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cl=new W,Uh=new fn,ae=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],x=s[0],p=s[3],m=s[6],v=s[1],T=s[4],S=s[7],M=s[2],E=s[5],I=s[8];return r[0]=o*x+a*v+c*M,r[3]=o*p+a*T+c*E,r[6]=o*m+a*S+c*I,r[1]=l*x+u*v+d*M,r[4]=l*p+u*T+d*E,r[7]=l*m+u*S+d*I,r[2]=f*x+h*v+g*M,r[5]=f*p+h*T+g*E,r[8]=f*m+h*S+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=e*d+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(t,e)),this}rotate(t){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Il=new ae,Fh=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lg(){let i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wr]:{primaries:t,whitePoint:n,transfer:Xr,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}var xe=lg();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,Ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=Yr("canvas")),Fs.width=t.width,Fs.height=t.height;let s=Fs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ug=0,ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pl(s[o].image)):r.push(Pl(s[o]))}else r=Pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var hg=0,Ll=new W,yn=class i extends pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,s=hi,r=sn,o=as,a=Wn,c=Tn,l=i.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=fi(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Tu;yn.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,S=(h+1)/2,M=(m+1)/2,E=(u+f)/4,I=(d+x)/4,y=(g+p)/4;return T>S&&T>M?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=I/n):S>M?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=I/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new yn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var La=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ye=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,p)}set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=h+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+h*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f+x*a,e[4]=g*a-h,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-h,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=h*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*d,e[8]=g*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*d+g,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+x,e[5]=o*u,e[9]=h*d-g,e[2]=g*d-h,e[6]=a*u,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fg,t,dg)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Gi.crossVectors(n,Cn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Gi.crossVectors(n,Cn)),Gi.normalize(),Yo.crossVectors(Cn,Gi),s[0]=Gi.x,s[4]=Yo.x,s[8]=Cn.x,s[1]=Gi.y,s[5]=Yo.y,s[9]=Cn.y,s[2]=Gi.z,s[6]=Yo.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],T=n[7],S=n[11],M=n[15],E=s[0],I=s[4],y=s[8],P=s[12],U=s[1],N=s[5],z=s[9],q=s[13],k=s[2],$=s[6],V=s[10],nt=s[14],G=s[3],X=s[7],Y=s[11],Z=s[15];return r[0]=o*E+a*U+c*k+l*G,r[4]=o*I+a*N+c*$+l*X,r[8]=o*y+a*z+c*V+l*Y,r[12]=o*P+a*q+c*nt+l*Z,r[1]=u*E+d*U+f*k+h*G,r[5]=u*I+d*N+f*$+h*X,r[9]=u*y+d*z+f*V+h*Y,r[13]=u*P+d*q+f*nt+h*Z,r[2]=g*E+x*U+p*k+m*G,r[6]=g*I+x*N+p*$+m*X,r[10]=g*y+x*z+p*V+m*Y,r[14]=g*P+x*q+p*nt+m*Z,r[3]=v*E+T*U+S*k+M*G,r[7]=v*I+T*N+S*$+M*X,r[11]=v*y+T*z+S*V+M*Y,r[15]=v*P+T*q+S*nt+M*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],h=t[14],g=t[3],x=t[7],p=t[11],m=t[15],v=c*h-l*f,T=a*h-l*d,S=a*f-c*d,M=o*h-l*u,E=o*f-c*u,I=o*d-a*u;return e*(x*v-p*T+m*S)-n*(g*v-p*M+m*E)+s*(g*T-x*M+m*I)-r*(g*S-x*E+p*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],h=t[11],g=t[12],x=t[13],p=t[14],m=t[15],v=e*a-n*o,T=e*c-s*o,S=e*l-r*o,M=n*c-s*a,E=n*l-r*a,I=s*l-r*c,y=u*x-d*g,P=u*p-f*g,U=u*m-h*g,N=d*p-f*x,z=d*m-h*x,q=f*m-h*p,k=v*q-T*z+S*N+M*U-E*P+I*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/k;return t[0]=(a*q-c*z+l*N)*$,t[1]=(s*z-n*q-r*N)*$,t[2]=(x*I-p*E+m*M)*$,t[3]=(f*E-d*I-h*M)*$,t[4]=(c*U-o*q-l*P)*$,t[5]=(e*q-s*U+r*P)*$,t[6]=(p*S-g*I-m*T)*$,t[7]=(u*I-f*S+h*T)*$,t[8]=(o*z-a*U+l*y)*$,t[9]=(n*U-e*z-r*y)*$,t[10]=(g*E-x*S+m*v)*$,t[11]=(d*S-u*E-h*v)*$,t[12]=(a*P-o*N-c*y)*$,t[13]=(e*N-n*P+s*y)*$,t[14]=(x*T-g*M-p*v)*$,t[15]=(u*M-d*T+f*v)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,x=o*u,p=o*d,m=a*d,v=c*l,T=c*u,S=c*d,M=n.x,E=n.y,I=n.z;return s[0]=(1-(x+m))*M,s[1]=(h+S)*M,s[2]=(g-T)*M,s[3]=0,s[4]=(h-S)*E,s[5]=(1-(f+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+T)*I,s[9]=(p-v)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Os.set(s[0],s[1],s[2]).length(),a=Os.set(s[4],s[5],s[6]).length(),c=Os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),$n.copy(this);let l=1/o,u=1/a,d=1/c;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,e.setFromRotationMatrix($n),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=ti,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ti)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===tr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),h=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ti)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===tr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Os=new W,$n=new ye,fg=new W(0,0,0),dg=new W(1,1,1),Gi=new W,Yo=new W,Cn=new W,Bh=new ye,kh=new fn,mi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pg=0,zh=new W,Bs=new fn,Ti=new ye,qo=new W,Pr=new W,mg=new W,gg=new fn,Hh=new W(1,0,0),Vh=new W(0,1,0),Gh=new W(0,0,1),Wh={type:"added"},xg={type:"removed"},ks={type:"childadded",child:null},Nl={type:"childremoved",child:null},Oe=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new mi,n=new fn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new ae}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return zh.copy(t).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qo.copy(t):qo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Pr,qo,this.up):Ti.lookAt(qo,Pr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Ti),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),ks.child=t,this.dispatchEvent(ks),ks.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xg),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,mg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,gg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new W(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ce=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Uu(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dl(o,r,t+1/3),this.g=Dl(o,r,t),this.b=Dl(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return xe.workingToColorSpace(hn.copy(this),t),Math.round(oe(hn.r*255,0,255))*65536+Math.round(oe(hn.g*255,0,255))*256+Math.round(oe(hn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(hn.copy(this),e);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=We){xe.workingToColorSpace(hn.copy(this),t);let e=hn.r,n=hn.g,s=hn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Zo);let n=zr(Wi.h,Zo.h,e),s=zr(Wi.s,Zo.s,e),r=zr(Wi.l,Zo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Zt;Zt.NAMES=id;var Ji=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Kn=new W,Ai=new W,Ul=new W,Ri=new W,zs=new W,Hs=new W,Xh=new W,Fl=new W,Ol=new W,Bl=new W,kl=new Se,zl=new Se,Hl=new Se,Zi=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Kn.subVectors(t,e),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Kn.subVectors(s,e),Ai.subVectors(n,e),Ul.subVectors(t,e);let o=Kn.dot(Kn),a=Kn.dot(Ai),c=Kn.dot(Ul),l=Ai.dot(Ai),u=Ai.dot(Ul),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return kl.setScalar(0),zl.setScalar(0),Hl.setScalar(0),kl.fromBufferAttribute(t,e),zl.fromBufferAttribute(t,n),Hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(kl,r.x),o.addScaledVector(zl,r.y),o.addScaledVector(Hl,r.z),o}static isFrontFacing(t,e,n,s){return Kn.subVectors(n,e),Ai.subVectors(t,e),Kn.cross(Ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Kn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;zs.subVectors(s,n),Hs.subVectors(r,n),Fl.subVectors(t,n);let c=zs.dot(Fl),l=Hs.dot(Fl);if(c<=0&&l<=0)return e.copy(n);Ol.subVectors(t,s);let u=zs.dot(Ol),d=Hs.dot(Ol);if(u>=0&&d<=u)return e.copy(s);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(zs,o);Bl.subVectors(t,r);let h=zs.dot(Bl),g=Hs.dot(Bl);if(g>=0&&h<=g)return e.copy(r);let x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Hs,a);let p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Xh.subVectors(r,s),a=(d-u)/(d-u+(h-g)),e.copy(s).addScaledVector(Xh,a);let m=1/(p+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(zs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ue=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(t.matrixWorld),this.union(Jo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),$o.subVectors(this.max,Lr),Vs.subVectors(t.a,Lr),Gs.subVectors(t.b,Lr),Ws.subVectors(t.c,Lr),Xi.subVectors(Gs,Vs),Yi.subVectors(Ws,Gs),ds.subVectors(Vs,Ws);let e=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-ds.z,ds.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,ds.z,0,-ds.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-ds.y,ds.x,0];return!Vl(e,Vs,Gs,Ws,$o)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,Vs,Gs,Ws,$o))?!1:(Ko.crossVectors(Xi,Yi),e=[Ko.x,Ko.y,Ko.z],Vl(e,Vs,Gs,Ws,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ci=[new W,new W,new W,new W,new W,new W,new W,new W],jn=new W,Jo=new Ue,Vs=new W,Gs=new W,Ws=new W,Xi=new W,Yi=new W,ds=new W,Lr=new W,$o=new W,Ko=new W,ps=new W;function Vl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=t.dot(ps),l=e.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ge=new W,jo=new Rt,_g=0,Ie=class extends pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_g++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jo.fromBufferAttribute(this,e),jo.applyMatrix3(t),this.setXY(e,jo.x,jo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Jr=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $r=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},vg=new Ue,Nr=new W,Gl=new W,Sn=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(Gl)),this.expandByPoint(Nr.copy(t.center).sub(Gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bg=0,kn=new ye,Wl=new Oe,Xs=new W,In=new Ue,Dr=new Ue,Ke=new W,le=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xm(t)?$r:Jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Wl.lookAt(t),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(In.min,Dr.min),In.expandByPoint(Ke),Ke.addVectors(In.max,Dr.max),In.expandByPoint(Ke)):(In.expandByPoint(Dr.min),In.expandByPoint(Dr.max))}In.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ke.fromBufferAttribute(a,l),c&&(Xs.fromBufferAttribute(t,l),Ke.add(Xs)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new W,c[y]=new W;let l=new W,u=new W,d=new W,f=new Rt,h=new Rt,g=new Rt,x=new W,p=new W;function m(y,P,U){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,y),h.fromBufferAttribute(r,P),g.fromBufferAttribute(r,U),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(N),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(N),a[y].add(x),a[P].add(x),a[U].add(x),c[y].add(p),c[P].add(p),c[U].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,P=v.length;y<P;++y){let U=v[y],N=U.start,z=U.count;for(let q=N,k=N+z;q<k;q+=3)m(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let T=new W,S=new W,M=new W,E=new W;function I(y){M.fromBufferAttribute(s,y),E.copy(M);let P=a[y];T.copy(P),T.sub(M.multiplyScalar(M.dot(P))).normalize(),S.crossVectors(E,P);let N=S.dot(c[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,N)}for(let y=0,P=v.length;y<P;++y){let U=v[y],N=U.start,z=U.count;for(let q=N,k=N+z;q<k;q+=3)I(t.getX(q+0)),I(t.getX(q+1)),I(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new W,r=new W,o=new W,a=new W,c=new W,l=new W,u=new W,d=new W;if(t)for(let f=0,h=t.count;f<h;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new Ie(f,u,d)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=t(f,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nu,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},gn=new W,Hn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xl=new W,Mg=new W,Sg=new ae,Pn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xl.subVectors(n,e).cross(Mg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sg.getNormalMatrix(t),s=this.coplanarPoint(Xl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Eg=0,ei=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=gr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=_u,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ii=new W,Yl=new W,Qo=new W,ta=new W,_s=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yl.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),ta.copy(this.origin).sub(Yl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=ta.dot(this.direction),c=-ta.dot(Qo),l=ta.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yl).addScaledVector(Qo,f),h}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,f=t.y-o.y,h=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=n.x-o.x,v=n.y-o.y,T=n.z-o.z,S=Math.abs(c),M=Math.abs(l),E=Math.abs(u),I,y,P,U,N,z,q,k,$,V,nt,G;if(S>=M&&S>=E?(P=c,z=d,$=g,G=m,c>=0?(I=l,y=u,U=f,N=h,q=x,k=p,V=v,nt=T):(I=u,y=l,U=h,N=f,q=p,k=x,V=T,nt=v)):M>=E?(P=l,z=f,$=x,G=v,l>=0?(I=u,y=c,U=h,N=d,q=p,k=g,V=T,nt=m):(I=c,y=u,U=d,N=h,q=g,k=p,V=m,nt=T)):(P=u,z=h,$=p,G=T,u>=0?(I=c,y=l,U=d,N=f,q=g,k=x,V=m,nt=v):(I=l,y=c,U=f,N=d,q=x,k=g,V=v,nt=m)),P===0)return null;let X=I/P,Y=y/P,Z=1/P,ot=U-X*z,yt=N-Y*z,bt=q-X*$,St=k-Y*$,Pt=V-X*G,at=nt-Y*G,ht=Pt*St-at*bt,Tt=ot*at-yt*Pt,Ft=bt*yt-St*ot;if(s){if(ht<0||Tt<0||Ft<0)return null}else if((ht<0||Tt<0||Ft<0)&&(ht>0||Tt>0||Ft>0))return null;let Lt=ht+Tt+Ft;if(Lt===0)return null;let It=Z*(ht*z+Tt*$+Ft*G);return(Lt>0?It<0:It>0)?null:this.at(It/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yh=new ye,ms=new _s,ea=new Sn,qh=new W,na=new W,ia=new W,sa=new W,ql=new W,ra=new W,Zh=new W,oa=new W,ue=class extends Oe{constructor(t=new le,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(ql.fromBufferAttribute(d,t),o?ra.addScaledVector(ql,u):ra.addScaledVector(ql.sub(e),u))}e.add(ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(ea.containsPoint(ms.origin)===!1&&(ms.intersectSphere(ea,qh)===null||ms.origin.distanceToSquared(qh)>(t.far-t.near)**2))&&(Yh.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,h.start),T=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let S=v,M=T;S<M;S+=3){let E=a.getX(S),I=a.getX(S+1),y=a.getX(S+2);s=aa(this,m,t,n,l,u,d,E,I,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),T=a.getX(p+1),S=a.getX(p+2);s=aa(this,o,t,n,l,u,d,v,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let S=v,M=T;S<M;S+=3){let E=S,I=S+1,y=S+2;s=aa(this,m,t,n,l,u,d,E,I,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){let v=p,T=p+1,S=p+2;s=aa(this,o,t,n,l,u,d,v,T,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function wg(i,t,e,n,s,r,o,a){let c;if(t.side===_n?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===rs,a),c===null)return null;oa.copy(a),oa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(oa);return l<e.near||l>e.far?null:{distance:l,point:oa.clone(),object:i}}function aa(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,na),i.getVertexPosition(c,ia),i.getVertexPosition(l,sa);let u=wg(i,t,e,n,na,ia,sa,Zh);if(u){let d=new W;Zi.getBarycoord(Zh,na,ia,sa,d),s&&(u.uv=Zi.getInterpolatedAttribute(s,a,c,l,d,new Rt)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,a,c,l,d,new Rt)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,c,l,d,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new W,materialIndex:0};Zi.getNormal(na,ia,sa,f.normal),u.face=f,u.barycoord=d}return u}var jr=class extends yn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=je,u=je,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new ye,Jh=new ye,ca=[],$h=new Ue,Tg=new ye,Ur=new ue,Fr=new Sn,vs=class extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),$h.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union($h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Fr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),t.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Jh.multiplyMatrices(n,Ys),Ur.matrixWorld=Jh,Ur.raycast(t,ca);for(let o=0,a=ca.length;o<a;o++){let c=ca[o];c.instanceId=r,c.object=this,e.push(c)}ca.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(s*this.count),s,this.count,hc,Gn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Sn,Ag=new Rt(.5,.5),la=new W,ar=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],x=r[9],p=r[10],m=r[11],v=r[12],T=r[13],S=r[14],M=r[15];if(s[0].setComponents(l-o,h-u,m-g,M-v).normalize(),s[1].setComponents(l+o,h+u,m+g,M+v).normalize(),s[2].setComponents(l+a,h+d,m+x,M+T).normalize(),s[3].setComponents(l-a,h-d,m-x,M-T).normalize(),n)s[4].setComponents(c,f,p,S).normalize(),s[5].setComponents(l-c,h-f,m-p,M-S).normalize();else if(s[4].setComponents(l-c,h-f,m-p,M-S).normalize(),e===ti)s[5].setComponents(l+c,h+f,m+p,M+S).normalize();else if(e===tr)s[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=Ag.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(la.x=s.normal.x>0?t.max.x:t.min.x,la.y=s.normal.y>0?t.max.y:t.min.y,la.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cr=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Na=new W,Da=new W,Kh=new ye,Or=new _s,ua=new Sn,Zl=new W,jh=new W,Ua=class extends Oe{constructor(t=new le,e=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Na.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Na.distanceTo(Da);t.setAttribute("lineDistance",new Qt(n,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;Kh.copy(s).invert(),Or.copy(t.ray).applyMatrix4(Kh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=h,p=g-1;x<p;x+=l){let m=u.getX(x),v=u.getX(x+1),T=ha(this,t,Or,c,m,v,x);T&&e.push(T)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(h),m=ha(this,t,Or,c,x,p,g-1);m&&e.push(m)}}else{let h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=h,p=g-1;x<p;x+=l){let m=ha(this,t,Or,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=ha(this,t,Or,c,g-1,h,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ha(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Na.fromBufferAttribute(a,s),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(Na,Da,Zl,jh)>n)return;Zl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Zl);if(!(l<t.near||l>t.far))return{distance:l,point:jh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Qh=new W,tf=new W,Qr=class extends Ua{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Qh.fromBufferAttribute(e,s),tf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qh.distanceTo(tf);t.setAttribute("lineDistance",new Qt(n,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lr=class extends ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ef=new ye,ru=new _s,fa=new Sn,da=new W,to=class extends Oe{constructor(t=new le,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;ef.copy(s).invert(),ru.copy(t.ray).applyMatrix4(ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,x=h;g<x;g++){let p=l.getX(g);da.fromBufferAttribute(d,p),nf(da,p,c,s,t,e,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,x=h;g<x;g++)da.fromBufferAttribute(d,g),nf(da,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nf(i,t,e,n,s,r,o){let a=ru.distanceSqToPoint(i);if(a<e){let c=new W;ru.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var eo=class extends yn{constructor(t=[],e=os,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ur=class extends yn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends yn{constructor(t,e,n=ii,s,r,o,a=je,c=je,l,u=di,d=1){if(u!==di&&u!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fa=class extends $i{constructor(t,e=ii,n=os,s,r,o=je,a=je,c,l=di){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Re=class i extends le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(x,p,m,v,T,S,M,E,I,y,P){let U=S/I,N=M/y,z=S/2,q=M/2,k=E/2,$=I+1,V=y+1,nt=0,G=0,X=new W;for(let Y=0;Y<V;Y++){let Z=Y*N-q;for(let ot=0;ot<$;ot++){let yt=ot*U-z;X[x]=yt*v,X[p]=Z*T,X[m]=k,l.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[m]=E>0?1:-1,u.push(X.x,X.y,X.z),d.push(ot/I),d.push(1-Y/y),nt+=1}}for(let Y=0;Y<y;Y++)for(let Z=0;Z<I;Z++){let ot=f+Z+$*Y,yt=f+Z+$*(Y+1),bt=f+(Z+1)+$*(Y+1),St=f+(Z+1)+$*Y;c.push(ot,yt,St),c.push(yt,bt,St),G+=6}a.addGroup(h,G,P),h+=G,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vn=class i extends le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new W,u=new Rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let h=n+d/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},En=class i extends le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(h,2));function v(){let S=new W,M=new W,E=0,I=(e-t)/n;for(let y=0;y<=r;y++){let P=[],U=y/r,N=U*(e-t)+t;for(let z=0;z<=s;z++){let q=z/s,k=q*c+a,$=Math.sin(k),V=Math.cos(k);M.x=N*$,M.y=-U*n+p,M.z=N*V,d.push(M.x,M.y,M.z),S.set($,I,V).normalize(),f.push(S.x,S.y,S.z),h.push(q,1-U),P.push(g++)}x.push(P)}for(let y=0;y<s;y++)for(let P=0;P<r;P++){let U=x[P][y],N=x[P+1][y],z=x[P+1][y+1],q=x[P][y+1];(t>0||P!==0)&&(u.push(U,N,q),E+=3),(e>0||P!==r-1)&&(u.push(N,z,q),E+=3)}l.addGroup(m,E,0),m+=E}function T(S){let M=g,E=new Rt,I=new W,y=0,P=S===!0?t:e,U=S===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*U,0),f.push(0,U,0),h.push(.5,.5),g++;let N=g;for(let z=0;z<=s;z++){let k=z/s*c+a,$=Math.cos(k),V=Math.sin(k);I.x=P*V,I.y=p*U,I.z=P*$,d.push(I.x,I.y,I.z),f.push(0,U,0),E.x=$*.5+.5,E.y=V*.5*U+.5,h.push(E.x,E.y),g++}for(let z=0;z<s;z++){let q=M+z,k=N+z;S===!0?u.push(k,k+1,q):u.push(k+1,k,q),y+=3}l.addGroup(m,y,S===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},io=class i extends En{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Rt:new W);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new W,s=[],r=[],o=[],a=new W,c=new ye;for(let h=0;h<=t;h++){let g=h/t;s[h]=this.getTangentAt(g,new W)}r[0]=new W,o[0]=new W;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(oe(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(oe(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hr=class extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends hr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var sf=new W,rf=new W,Jl=new Fu,$l=new Fu,Kl=new Fu,Ba=class extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new W){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(rf.subVectors(s[0],s[1]).add(s[0]),l=rf);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(sf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=sf),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),p=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Jl.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,x,p),$l.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,x,p),Kl.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(Jl.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),$l.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Kl.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(Jl.calc(c),$l.calc(c),Kl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function of(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Rg(i,t){let e=1-i;return e*e*t}function Cg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function Hr(i,t,e,n){return Rg(i,t)+Cg(i,e)+Ig(i,n)}function Pg(i,t){let e=1-i;return e*e*e*t}function Lg(i,t){let e=1-i;return 3*e*e*i*t}function Ng(i,t){return 3*(1-i)*i*i*t}function Dg(i,t){return i*i*i*t}function Vr(i,t,e,n,s){return Pg(i,t)+Lg(i,e)+Ng(i,n)+Dg(i,s)}var so=class extends Ln{constructor(t=new Rt,e=new Rt,n=new Rt,s=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,s.x,r.x,o.x,a.x),Vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends Ln{constructor(t=new W,e=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vr(t,s.x,r.x,o.x,a.x),Vr(t,s.y,r.y,o.y,a.y),Vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends Ln{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends Ln{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends Ln{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends Ln{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y),Hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(of(a,c.x,l.x,u.x,d.x),of(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}},ou=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:so,CubicBezierCurve3:ka,EllipseCurve:hr,LineCurve:ro,LineCurve3:za,QuadraticBezierCurve:oo,QuadraticBezierCurve3:Ha,SplineCurve:ao}),Va=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ou[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ou[s.type]().fromJSON(s))}return this}},bs=class extends Va{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ro(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new oo(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new so(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s),new Rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ao(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new hr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Nn=class extends bs{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new bs().fromJSON(s))}return this}};function Ug(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=sd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=zg(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,d=c;for(let f=e;f<s;f+=e){let h=i[f],g=i[f+1];h<a&&(a=h),g<c&&(c=g),h>u&&(u=h),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return co(r,o,e,a,c,l,0),o}function sd(i,t,e,n,s){let r;if(s===Kg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=af(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=af(o/n|0,i[o],i[o+1],r);return r&&fr(r,r.next)&&(uo(r),r=r.next),r}function Ms(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(uo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function co(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Og(i,n,s,r):Fg(i)){t.push(c.i,i.i,l.i),uo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Bg(Ms(i),t),co(i,t,e,n,s,r,2)):o===2&&kg(i,t,e,n,s,r):co(Ms(i),t,e,n,s,r,1);break}}}function Fg(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),f=Math.max(s,r,o),h=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=h&&Br(s,a,r,c,o,l,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Og(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,f=o.y,h=Math.min(a,c,l),g=Math.min(u,d,f),x=Math.max(a,c,l),p=Math.max(u,d,f),m=au(h,g,t,e,n),v=au(x,p,t,e,n),T=i.prevZ,S=i.nextZ;for(;T&&T.z>=m&&S&&S.z<=v;){if(T.x>=h&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&Br(a,u,c,d,l,f,T.x,T.y)&&Fe(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=h&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Br(a,u,c,d,l,f,S.x,S.y)&&Fe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=m;){if(T.x>=h&&T.x<=x&&T.y>=g&&T.y<=p&&T!==s&&T!==o&&Br(a,u,c,d,l,f,T.x,T.y)&&Fe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=v;){if(S.x>=h&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Br(a,u,c,d,l,f,S.x,S.y)&&Fe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Bg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!fr(n,s)&&od(n,e,e.next,s)&&lo(n,s)&&lo(s,n)&&(t.push(n.i,e.i,s.i),uo(e),uo(e.next),e=i=s),e=e.next}while(e!==i);return Ms(e)}function kg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zg(o,a)){let c=ad(o,a);o=Ms(o,o.next),c=Ms(c,c.next),co(o,t,e,n,s,r,0),co(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function zg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=sd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(qg(l))}s.sort(Hg);for(let r=0;r<s.length;r++)e=Vg(s[r],e);return e}function Hg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vg(i,t){let e=Gg(i,t);if(!e)return t;let n=ad(e,i);return Ms(n,n.next),Ms(e,e.next)}function Gg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(fr(i,e))return e;do{if(fr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&rd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);lo(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Wg(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Wg(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function Xg(i,t,e,n){let s=i;do s.z===0&&(s.z=au(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yg(s)}function Yg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function au(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Br(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&rd(i,t,e,n,s,r,o,a)}function Zg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jg(i,t)&&(lo(i,t)&&lo(t,i)&&$g(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||fr(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fr(i,t){return i.x===t.x&&i.y===t.y}function od(i,t,e,n){let s=ma(Fe(i,t,e)),r=ma(Fe(i,t,n)),o=ma(Fe(e,n,i)),a=ma(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&pa(i,e,t)||r===0&&pa(i,n,t)||o===0&&pa(e,i,n)||a===0&&pa(e,t,n))}function pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ma(i){return i>0?1:i<0?-1:0}function Jg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&od(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lo(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function $g(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ad(i,t){let e=cu(i.i,i.x,i.y),n=cu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function af(i,t,e,n){let s=cu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var lu=class{static triangulate(t,e,n=2){return Ug(t,e,n)}},zn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];cf(t),lf(n,t);let o=t.length;e.forEach(cf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,lf(n,e[c]);let a=lu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function cf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Li=class i extends le{constructor(t=new Nn([new Rt(.5,.5),new Rt(-.5,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:h-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:jg,T,S=!1,M,E,I,y;if(m){T=m.getSpacedPoints(u),S=!0,f=!1;let ut=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(u,ut),E=new W,I=new W,y=new W}f||(p=0,h=0,g=0,x=0);let P=a.extractPoints(l),U=P.shape,N=P.holes;if(!zn.isClockWise(U)){U=U.reverse();for(let ut=0,_t=N.length;ut<_t;ut++){let Mt=N[ut];zn.isClockWise(Mt)&&(N[ut]=Mt.reverse())}}function q(ut){let Mt=10000000000000001e-36,Et=ut[0];for(let wt=1;wt<=ut.length;wt++){let Ut=wt%ut.length,Bt=ut[Ut],Vt=Bt.x-Et.x,Kt=Bt.y-Et.y,J=Vt*Vt+Kt*Kt,re=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(Et.x),Math.abs(Et.y)),Yt=Mt*re*re;if(J<=Yt){ut.splice(Ut,1),wt--;continue}Et=Bt}}q(U),N.forEach(q);let k=N.length,$=U;for(let ut=0;ut<k;ut++){let _t=N[ut];U=U.concat(_t)}function V(ut,_t,Mt){return _t||ie("ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(_t,Mt)}let nt=U.length;function G(ut,_t,Mt){let Et,wt,Ut,Bt=ut.x-_t.x,Vt=ut.y-_t.y,Kt=Mt.x-ut.x,J=Mt.y-ut.y,re=Bt*Bt+Vt*Vt,Yt=Bt*J-Vt*Kt;if(Math.abs(Yt)>Number.EPSILON){let O=Math.sqrt(re),w=Math.sqrt(Kt*Kt+J*J),tt=_t.x-Vt/O,et=_t.y+Bt/O,ft=Mt.x-J/w,H=Mt.y+Kt/w,_=((ft-tt)*J-(H-et)*Kt)/(Bt*J-Vt*Kt);Et=tt+Bt*_-ut.x,wt=et+Vt*_-ut.y;let b=Et*Et+wt*wt;if(b<=2)return new Rt(Et,wt);Ut=Math.sqrt(b/2)}else{let O=!1;Bt>Number.EPSILON?Kt>Number.EPSILON&&(O=!0):Bt<-Number.EPSILON?Kt<-Number.EPSILON&&(O=!0):Math.sign(Vt)===Math.sign(J)&&(O=!0),O?(Et=-Vt,wt=Bt,Ut=Math.sqrt(re)):(Et=Bt,wt=Vt,Ut=Math.sqrt(re/2))}return new Rt(Et/Ut,wt/Ut)}let X=[];for(let ut=0,_t=$.length,Mt=_t-1,Et=ut+1;ut<_t;ut++,Mt++,Et++)Mt===_t&&(Mt=0),Et===_t&&(Et=0),X[ut]=G($[ut],$[Mt],$[Et]);let Y=[],Z,ot=X.concat();for(let ut=0,_t=k;ut<_t;ut++){let Mt=N[ut];Z=[];for(let Et=0,wt=Mt.length,Ut=wt-1,Bt=Et+1;Et<wt;Et++,Ut++,Bt++)Ut===wt&&(Ut=0),Bt===wt&&(Bt=0),Z[Et]=G(Mt[Et],Mt[Ut],Mt[Bt]);Y.push(Z),ot=ot.concat(Z)}let yt;if(p===0)yt=zn.triangulateShape($,N);else{let ut=[],_t=[];for(let Mt=0;Mt<p;Mt++){let Et=Mt/p,wt=h*Math.cos(Et*Math.PI/2),Ut=g*Math.sin(Et*Math.PI/2)+x;for(let Bt=0,Vt=$.length;Bt<Vt;Bt++){let Kt=V($[Bt],X[Bt],Ut);Tt(Kt.x,Kt.y,-wt),Et===0&&ut.push(Kt)}for(let Bt=0,Vt=k;Bt<Vt;Bt++){let Kt=N[Bt];Z=Y[Bt];let J=[];for(let re=0,Yt=Kt.length;re<Yt;re++){let O=V(Kt[re],Z[re],Ut);Tt(O.x,O.y,-wt),Et===0&&J.push(O)}Et===0&&_t.push(J)}}yt=zn.triangulateShape(ut,_t)}let bt=yt.length,St=g+x;for(let ut=0;ut<nt;ut++){let _t=f?V(U[ut],ot[ut],St):U[ut];S?(I.copy(M.normals[0]).multiplyScalar(_t.x),E.copy(M.binormals[0]).multiplyScalar(_t.y),y.copy(T[0]).add(I).add(E),Tt(y.x,y.y,y.z)):Tt(_t.x,_t.y,0)}for(let ut=1;ut<=u;ut++)for(let _t=0;_t<nt;_t++){let Mt=f?V(U[_t],ot[_t],St):U[_t];S?(I.copy(M.normals[ut]).multiplyScalar(Mt.x),E.copy(M.binormals[ut]).multiplyScalar(Mt.y),y.copy(T[ut]).add(I).add(E),Tt(y.x,y.y,y.z)):Tt(Mt.x,Mt.y,d/u*ut)}for(let ut=p-1;ut>=0;ut--){let _t=ut/p,Mt=h*Math.cos(_t*Math.PI/2),Et=g*Math.sin(_t*Math.PI/2)+x;for(let wt=0,Ut=$.length;wt<Ut;wt++){let Bt=V($[wt],X[wt],Et);Tt(Bt.x,Bt.y,d+Mt)}for(let wt=0,Ut=N.length;wt<Ut;wt++){let Bt=N[wt];Z=Y[wt];for(let Vt=0,Kt=Bt.length;Vt<Kt;Vt++){let J=V(Bt[Vt],Z[Vt],Et);S?Tt(J.x,J.y+T[u-1].y,T[u-1].x+Mt):Tt(J.x,J.y,d+Mt)}}}Pt(),at();function Pt(){let ut=s.length/3;if(f){let _t=0,Mt=nt*_t;for(let Et=0;Et<bt;Et++){let wt=yt[Et];Ft(wt[2]+Mt,wt[1]+Mt,wt[0]+Mt)}_t=u+p*2,Mt=nt*_t;for(let Et=0;Et<bt;Et++){let wt=yt[Et];Ft(wt[0]+Mt,wt[1]+Mt,wt[2]+Mt)}}else{for(let _t=0;_t<bt;_t++){let Mt=yt[_t];Ft(Mt[2],Mt[1],Mt[0])}for(let _t=0;_t<bt;_t++){let Mt=yt[_t];Ft(Mt[0]+nt*u,Mt[1]+nt*u,Mt[2]+nt*u)}}n.addGroup(ut,s.length/3-ut,0)}function at(){let ut=s.length/3,_t=0;ht($,_t),_t+=$.length;for(let Mt=0,Et=N.length;Mt<Et;Mt++){let wt=N[Mt];ht(wt,_t),_t+=wt.length}n.addGroup(ut,s.length/3-ut,1)}function ht(ut,_t){let Mt=ut.length;for(;--Mt>=0;){let Et=Mt,wt=Mt-1;wt<0&&(wt=ut.length-1);for(let Ut=0,Bt=u+p*2;Ut<Bt;Ut++){let Vt=nt*Ut,Kt=nt*(Ut+1),J=_t+Et+Vt,re=_t+wt+Vt,Yt=_t+wt+Kt,O=_t+Et+Kt;Lt(J,re,Yt,O)}}}function Tt(ut,_t,Mt){c.push(ut),c.push(_t),c.push(Mt)}function Ft(ut,_t,Mt){It(ut),It(_t),It(Mt);let Et=s.length/3,wt=v.generateTopUV(n,s,Et-3,Et-2,Et-1);Ht(wt[0]),Ht(wt[1]),Ht(wt[2])}function Lt(ut,_t,Mt,Et){It(ut),It(_t),It(Et),It(_t),It(Mt),It(Et);let wt=s.length/3,Ut=v.generateSideWallUV(n,s,wt-6,wt-3,wt-2,wt-1);Ht(Ut[0]),Ht(Ut[1]),Ht(Ut[3]),Ht(Ut[1]),Ht(Ut[2]),Ht(Ut[3])}function It(ut){s.push(c[ut*3+0]),s.push(c[ut*3+1]),s.push(c[ut*3+2])}function Ht(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ou[s.type]().fromJSON(s)),new i(n,t.options)}},jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Rt(r,o),new Rt(a,c),new Rt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],f=t[s*3],h=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Rt(o,1-c),new Rt(l,1-d),new Rt(f,1-g),new Rt(x,1-m)]:[new Rt(a,1-c),new Rt(u,1-d),new Rt(h,1-g),new Rt(p,1-m)]}};function Qg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ho=class i extends le{constructor(t=[new Rt(0,-.5),new Rt(.5,0),new Rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,d=new W,f=new Rt,h=new W,g=new W,x=new W,p=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-p,h.z=m*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,h.x=m*1,h.y=-p,h.z=m*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let v=0;v<=e;v++){let T=n+v*u*s,S=Math.sin(T),M=Math.cos(T);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*S,d.y=t[E].y,d.z=t[E].x*M,o.push(d.x,d.y,d.z),f.x=v/e,f.y=E/(t.length-1),a.push(f.x,f.y);let I=c[3*E+0]*S,y=c[3*E+1],P=c[3*E+0]*M;l.push(I,y,P)}}for(let v=0;v<e;v++)for(let T=0;T<t.length-1;T++){let S=T+v*t.length,M=S,E=S+t.length,I=S+t.length+1,y=S+1;r.push(M,E,y),r.push(I,y,E)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ni=class i extends le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,h=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let v=m*f-o;for(let T=0;T<l;T++){let S=T*d-r;g.push(S,-v,0),x.push(0,0,1),p.push(T/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let T=v+l*m,S=v+l*(m+1),M=v+1+l*(m+1),E=v+1+l*m;h.push(T,S,E),h.push(S,M,E)}this.setIndex(h),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fo=class i extends le{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],d=t,f=(e-t)/s,h=new W,g=new Rt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;h.x=d*Math.cos(m),h.y=d*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/e+1)/2,g.y=(h.y/e+1)/2,u.push(g.x,g.y)}d+=f}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let v=m+p,T=v,S=v+n+1,M=v+n+2,E=v+1;a.push(T,S,E),a.push(S,M,E)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ki=class i extends le{constructor(t=new Nn([new Rt(0,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function l(u){let d=s.length/3,f=u.extractPoints(e),h=f.shape,g=f.holes;zn.isClockWise(h)===!1&&(h=h.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];zn.isClockWise(v)===!0&&(g[p]=v.reverse())}let x=zn.triangulateShape(h,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];h=h.concat(v)}for(let p=0,m=h.length;p<m;p++){let v=h[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=x.length;p<m;p++){let v=x[p],T=v[0]+d,S=v[1]+d,M=v[2]+d;n.push(T,S,M),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return t0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function t0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Qe=class i extends le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new W,f=new W,h=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],T=m/n,S=o+T*a,M=t*Math.cos(S),E=Math.sqrt(t*t-M*M),I=0;m===0&&o===0?I=.5/e:m===n&&c===Math.PI&&(I=-.5/e);for(let y=0;y<=e;y++){let P=y/e,U=s+P*r;d.x=-E*Math.cos(U),d.y=M,d.z=E*Math.sin(U),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(P+I,1-T),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let T=u[m][v+1],S=u[m][v],M=u[m+1][v],E=u[m+1][v+1];(m!==0||o>0)&&h.push(T,S,E),(m!==n-1||c<Math.PI)&&h.push(S,M,E)}this.setIndex(h),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wn=class i extends le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],d=[],f=new W,h=new W,g=new W;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=s;m++){let v=m/s*r;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),l.push(h.x,h.y,h.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,v=(s+1)*(x-1)+p-1,T=(s+1)*(x-1)+p,S=(s+1)*x+p;c.push(m,v,S),c.push(v,T,S)}this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var po=class extends le{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new W,r=new W;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let d=c[l],f=d.start,h=d.count;for(let g=f,x=f+h;g<x;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),v=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,v),uf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,d=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),uf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function uf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hf(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function e0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Lo={clone:As,merge:dn},n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=e0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ga=class extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var dr=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wa=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case iu:r=t,a=2*e-n;break;case su:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case iu:o=t,c=2*n-e;break;case su:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,v=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,T=(-1-h)*p+(1.5+h)*x+.5*g,S=h*p-h*x;for(let M=0;M!==a;++M)r[M]=m*o[u+M]+v*o[l+M]+T*o[c+M]+S*o[d+M];return r}},qa=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*u;return r}},Za=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends ji{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let f=a*2,h=t-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=h*f+g*2,v=d[m],T=d[m+1],S=t*f+g*2,M=u[S],E=u[S+1],I=r0(n,e,v,M,s);r[g]=cd(I,x,T,E,p)}return r}};function cd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function s0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function r0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=cd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=s0(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),jl(t.settings)&&(n.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break;case eu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return _a;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;jl(this.settings)&&(ff(this.settings.inTangents,t),ff(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ie("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ie("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ym(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ie("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,f=d-n,h=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[f+g]||x!==e[h+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let h=0;h!==n;++h)e[f+h]=e[d+h]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,jl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ff(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Ca;var Qi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Gr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="color";var Ka=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="number";var ja=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},mo=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Dn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Gr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Dn{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="vector";var tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new tc,ec=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ss=class extends pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ql=new ye,df=new W,pf=new W,go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;df.setFromMatrixPosition(t.matrixWorld),e.position.copy(df),pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ql,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ga=new W,xa=new fn,ui=new W,xo=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ga,xa,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,xa,ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ga,xa,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,xa,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new W,mf=new Rt,gf=new Rt,xn=class extends xo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,mf,gf),e.subVectors(gf,mf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var uu=class extends go{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},yo=class extends pr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},es=class extends xo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hu=class extends go{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new hu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var _o=class extends le{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Zs=-90,Js=1,nc=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(Zs,Js,t,e);s.layers=this.layers,this.add(s);let r=new xn(Zs,Js,t,e);r.layers=this.layers,this.add(r);let o=new xn(Zs,Js,t,e);o.layers=this.layers,this.add(o);let a=new xn(Zs,Js,t,e);a.layers=this.layers,this.add(a);let c=new xn(Zs,Js,t,e);c.layers=this.layers,this.add(c);let l=new xn(Zs,Js,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ic=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bu="\\[\\]\\.:\\/",o0=new RegExp("["+Bu+"]","g"),ku="[^"+Bu+"]",a0="[^"+Bu.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",ku),l0=/(WCOD+)?/.source.replace("WCOD",a0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),f0=new RegExp("^"+c0+l0+u0+h0+"$"),d0=["material","materials","bones","map"],fu=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(t){let e=f0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=fu;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GM=new Float32Array(1);var is=class extends Kr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var xf=new ye,ss=class{constructor(t,e,n=0,s=1/0){this.ray=new _s(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(t,e=!0,n=[]){return du(t,this,n,e),n.sort(yf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)du(t[s],this,n,e);return n.sort(yf),n}};function yf(i,t){return i.distance-t.distance}function du(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)du(r[o],t,e,!0)}}var pu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var _f=new W,ya=new W,$s=new W,Ks=new W,tu=new W,p0=new W,m0=new W,vo=class{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){_f.subVectors(t,this.start),ya.subVectors(this.end,this.start);let n=ya.dot(ya);if(n===0)return 0;let r=ya.dot(_f)/n;return e&&(r=oe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=p0,n=m0){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;$s.subVectors(l,a),Ks.subVectors(u,c),tu.subVectors(a,c);let d=$s.dot($s),f=Ks.dot(Ks),h=Ks.dot(tu);if(d<=s&&f<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(d<=s)r=0,o=h/f,o=oe(o,0,1);else{let g=$s.dot(tu);if(f<=s)o=0,r=oe(-g/d,0,1);else{let x=$s.dot(Ks),p=d*f-x*x;p!==0?r=oe((x*h-g*f)/p,0,1):r=0,o=(x*r+h)/f,o<0?(o=0,r=oe(-g/d,0,1)):o>1&&(o=1,r=oe((x-g)/d,0,1))}}return e.copy(a).addScaledVector($s,r),n.copy(c).addScaledVector(Ks,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function zu(i,t,e,n){let s=g0(n);switch(e){case Pu:return i*t;case hc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case ls:return i*t*2/s.components*s.byteLength;case dc:return i*t*2/s.components*s.byteLength;case Lu:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case wo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:case yc:return Math.max(i,16)*Math.max(t,8)/4;case mc:case xc:return Math.max(i,8)*Math.max(t,8)/2;case _c:case vc:case Mc:case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bc:case Co:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kc:case zc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Io:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g0(i){switch(i){case Tn:case Au:return{byteLength:1,components:1};case xr:case Ru:case si:return{byteLength:2,components:1};case lc:case uc:return{byteLength:2,components:4};case ii:case cc:case Gn:return{byteLength:4,components:1};case Cu:case Iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function b0(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let x=d[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,F0=`#ifdef USE_BUMPMAP
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
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
}`,ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,vx=`uniform sampler2D dfgLUT;
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
}`,bx=`
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lx=`#if defined( USE_POINTS_UV )
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
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
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
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ay=`float getShadowMask() {
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
}`,cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Iy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,ky=`#define LAMBERT
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define MATCAP
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
}`,Vy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define PHONG
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
}`,Yy=`#define STANDARD
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
}`,qy=`#define STANDARD
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
}`,Zy=`#define TOON
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
}`,Jy=`#define TOON
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
}`,$y=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,t_=`uniform float rotation;
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
}`,e_=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:M0,alphahash_pars_fragment:S0,alphamap_fragment:E0,alphamap_pars_fragment:w0,alphatest_fragment:T0,alphatest_pars_fragment:A0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:I0,batching_vertex:P0,begin_vertex:L0,beginnormal_vertex:N0,bsdfs:D0,iridescence_fragment:U0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:z0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Z0,displacementmap_vertex:J0,emissivemap_fragment:$0,emissivemap_pars_fragment:K0,colorspace_fragment:j0,colorspace_pars_fragment:Q0,envmap_fragment:tx,envmap_common_pars_fragment:ex,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:sx,fog_vertex:rx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:cx,gradientmap_pars_fragment:lx,lightmap_pars_fragment:ux,lights_lambert_fragment:hx,lights_lambert_pars_fragment:fx,lights_pars_begin:dx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:xx,lights_phong_pars_fragment:yx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:bx,lights_fragment_maps:Mx,lights_fragment_end:Sx,lightprobes_pars_fragment:Ex,logdepthbuf_fragment:wx,logdepthbuf_pars_fragment:Tx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Rx,map_fragment:Cx,map_pars_fragment:Ix,map_particle_fragment:Px,map_particle_pars_fragment:Lx,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Ux,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:kx,normal_fragment_begin:zx,normal_fragment_maps:Hx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:qx,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:$x,packing:Kx,premultiplied_alpha_fragment:jx,project_vertex:Qx,dithering_fragment:ty,dithering_pars_fragment:ey,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:oy,shadowmask_pars_fragment:ay,skinbase_vertex:cy,skinning_pars_vertex:ly,skinning_vertex:uy,skinnormal_vertex:hy,specularmap_fragment:fy,specularmap_pars_fragment:dy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:xy,uv_pars_fragment:yy,uv_pars_vertex:_y,uv_vertex:vy,worldpos_vertex:by,background_vert:My,background_frag:Sy,backgroundCube_vert:Ey,backgroundCube_frag:wy,cube_vert:Ty,cube_frag:Ay,depth_vert:Ry,depth_frag:Cy,distance_vert:Iy,distance_frag:Py,equirect_vert:Ly,equirect_frag:Ny,linedashed_vert:Dy,linedashed_frag:Uy,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:By,meshlambert_frag:ky,meshmatcap_vert:zy,meshmatcap_frag:Hy,meshnormal_vert:Vy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:Yy,meshphysical_frag:qy,meshtoon_vert:Zy,meshtoon_frag:Jy,points_vert:$y,points_frag:Ky,shadow_vert:jy,shadow_frag:Qy,sprite_vert:t_,sprite_frag:e_},Dt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},vn={basic:{uniforms:dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:dn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:dn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:dn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:dn([Dt.points,Dt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:dn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:dn([Dt.common,Dt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:dn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:dn([Dt.sprite,Dt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:dn([Dt.common,Dt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:dn([Dt.lights,Dt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};vn.physical={uniforms:dn([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var qc={r:0,b:0,g:0},n_=new ye,Ld=new ae;Ld.set(-1,0,0,0,1,0,0,0,1);function i_(i,t,e,n,s,r){let o=new Zt(0),a=s===!0?0:1,c,l,u=null,d=0,f=null;function h(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let S=v.backgroundBlurriness>0;T=t.get(T,S)}return T}function g(v){let T=!1,S=h(v);S===null?p(o,a):S&&S.isColor&&(p(S,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){let S=h(T);S&&(S.isCubeTexture||S.mapping===So)?(l===void 0&&(l=new ue(new Re(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:As(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ld),l.material.toneMapped=xe.getTransfer(S.colorSpace)!==Me,(u!==S||d!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ue(new Ni(2,2),new Ye({name:"BackgroundMaterial",uniforms:As(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=xe.getTransfer(S.colorSpace)!==Me,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,T){v.getRGB(qc,Ou(i)),e.buffers.color.setClear(qc.r,qc.g,qc.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:x,dispose:m}}function s_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(N,z,q,k,$){let V=!1,nt=d(N,k,q,z);r!==nt&&(r=nt,l(r.object)),V=h(N,k,q,$),V&&g(N,k,q,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(N,z,q,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function d(N,z,q,k){let $=k.wireframe===!0,V=n[z.id];V===void 0&&(V={},n[z.id]=V);let nt=N.isInstancedMesh===!0?N.id:0,G=V[nt];G===void 0&&(G={},V[nt]=G);let X=G[q.id];X===void 0&&(X={},G[q.id]=X);let Y=X[$];return Y===void 0&&(Y=f(c()),X[$]=Y),Y}function f(N){let z=[],q=[],k=[];for(let $=0;$<e;$++)z[$]=0,q[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:k,object:N,attributes:{},index:null}}function h(N,z,q,k){let $=r.attributes,V=z.attributes,nt=0,G=q.getAttributes();for(let X in G)if(G[X].location>=0){let Z=$[X],ot=V[X];if(ot===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ot=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ot=N.instanceColor)),Z===void 0||Z.attribute!==ot||ot&&Z.data!==ot.data)return!0;nt++}return r.attributesNum!==nt||r.index!==k}function g(N,z,q,k){let $={},V=z.attributes,nt=0,G=q.getAttributes();for(let X in G)if(G[X].location>=0){let Z=V[X];Z===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let ot={};ot.attribute=Z,Z&&Z.data&&(ot.data=Z.data),$[X]=ot,nt++}r.attributes=$,r.attributesNum=nt,r.index=k}function x(){let N=r.newAttributes;for(let z=0,q=N.length;z<q;z++)N[z]=0}function p(N){m(N,0)}function m(N,z){let q=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;q[N]=1,k[N]===0&&(i.enableVertexAttribArray(N),k[N]=1),$[N]!==z&&(i.vertexAttribDivisor(N,z),$[N]=z)}function v(){let N=r.newAttributes,z=r.enabledAttributes;for(let q=0,k=z.length;q<k;q++)z[q]!==N[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function T(N,z,q,k,$,V,nt){nt===!0?i.vertexAttribIPointer(N,z,q,$,V):i.vertexAttribPointer(N,z,q,k,$,V)}function S(N,z,q,k){x();let $=k.attributes,V=q.getAttributes(),nt=z.defaultAttributeValues;for(let G in V){let X=V[G];if(X.location>=0){let Y=$[G];if(Y===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){let Z=Y.normalized,ot=Y.itemSize,yt=t.get(Y);if(yt===void 0)continue;let bt=yt.buffer,St=yt.type,Pt=yt.bytesPerElement,at=St===i.INT||St===i.UNSIGNED_INT||Y.gpuType===cc;if(Y.isInterleavedBufferAttribute){let ht=Y.data,Tt=ht.stride,Ft=Y.offset;if(ht.isInstancedInterleavedBuffer){for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt,ht.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)p(X.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let Lt=0;Lt<X.locationSize;Lt++)T(X.location+Lt,ot/X.locationSize,St,Z,Tt*Pt,(Ft+ot/X.locationSize*Lt)*Pt,at)}else{if(Y.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,Y.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let ht=0;ht<X.locationSize;ht++)T(X.location+ht,ot/X.locationSize,St,Z,ot*Pt,ot/X.locationSize*ht*Pt,at)}}else if(nt!==void 0){let Z=nt[G];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(X.location,Z);break;case 3:i.vertexAttrib3fv(X.location,Z);break;case 4:i.vertexAttrib4fv(X.location,Z);break;default:i.vertexAttrib1fv(X.location,Z)}}}}v()}function M(){P();for(let N in n){let z=n[N];for(let q in z){let k=z[q];for(let $ in k){let V=k[$];for(let nt in V)u(V[nt].object),delete V[nt];delete k[$]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let q in z){let k=z[q];for(let $ in k){let V=k[$];for(let nt in V)u(V[nt].object),delete V[nt];delete k[$]}}delete n[N.id]}function I(N){for(let z in n){let q=n[z];for(let k in q){let $=q[k];if($[N.id]===void 0)continue;let V=$[N.id];for(let nt in V)u(V[nt].object),delete V[nt];delete $[N.id]}}}function y(N){for(let z in n){let q=n[z],k=N.isInstancedMesh===!0?N.id:0,$=q[k];if($!==void 0){for(let V in $){let nt=$[V];for(let G in nt)u(nt[G].object),delete nt[G];delete $[V]}delete q[k],Object.keys(q).length===0&&delete n[z]}}}function P(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function r_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function o_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Tn&&I!==Gn&&!y&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(te("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:S,maxSamples:M,samples:E}}function a_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Pn,a=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let v=r?0:n,T=v*4,S=m.clippingState||null;c.value=S,S=u(g,f,T,h);for(let M=0;M!==T;++M)S[M]=e[M];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=h+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,S=h;T!==x;++T,S+=4)o.copy(d[T]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var vr=4,c_=6,l_=20,u_=256,No=new es,ud=new Zt,Hu=null,Vu=0,Gu=0,Wu=!1,h_=new W,Rs=new W,Jc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=h_}=r;Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hu,Vu,Gu),this._renderer.xr.enabled=Wu,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:si,format:Wn,colorSpace:Wr,depthBuffer:!1},s=hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=f_(r)),this._blurMaterial=p_(r,t,e),this._ggxMaterial=d_(r,t,e)}return s}_compileMaterial(t){let e=new ue(new le,t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s,r){let c=new xn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(ud),d.toneMapping=ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new Re,new ze({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,m=!0):(p.color.copy(ud),m=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let M=this._cubeSize;_r(s,S*M,T>2?M:0,M,M),d.setRenderTarget(s),m&&d.render(x,c),d.render(t,c)}d.toneMapping=h,d.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,No)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=l*1.25,h=d*f,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-vr?n-g+vr:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=h,c.mipInt.value=g-e,_r(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,No),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,_r(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(a,No)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-vr?s-this._lodMax+vr:0),f=4*(this._cubeSize-u);_r(e,d,f,3*u,2*u),o.setRenderTarget(e),o.render(c,No)}};function f_(i){let t=[],e=[],n=i,s=i-vr+1+c_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,f=6,h=3,g=new Float32Array(h*f*d),x=new Float32Array(h*f*d);for(let m=0;m<d;m++){let v=m%3*2/3-1,T=m>2?0:-1,S=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(S,h*f*m);for(let M=0;M<f;M++){let E=u[M*2]*2-1,I=u[M*2+1]*2-1;m===0?Rs.set(1,I,E):m===1?Rs.set(-E,1,-I):m===2?Rs.set(-E,I,1):m===3?Rs.set(-1,I,-E):m===4?Rs.set(-E,-1,I):Rs.set(E,I,-1),Rs.toArray(x,(m*f+M)*h)}}let p=new le;p.setAttribute("position",new Ie(g,h)),p.setAttribute("outputDirection",new Ie(x,h)),e.push(new ue(p,null)),n>vr&&n--}return{lodMeshes:e,sizeLods:t}}function hd(i,t,e){let n=new Mn(i,t,e);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function d_(i,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function p_(i,t,e){return new Ye({name:"SphericalGaussianBlur",defines:{SAMPLES:l_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function fd(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function dd(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $c=class extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Re(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:gi});r.uniforms.tEquirect.value=e;let o=new ue(s,r),a=e.minFilter;return e.minFilter===as&&(e.minFilter=sn),new nc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function m_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?o(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===rc||h===oc)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new $c(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let h=f.mapping,g=h===rc||h===oc,x=h===os||h===Ts;if(g||x){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Jc(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Jc(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===rc?f.mapping=os:h===oc&&(f.mapping=Ts),f}function c(f){let h=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function g_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function x_(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)t.update(f[h],i.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(h!==null){let v=h.array;x=h.version;for(let T=0,S=v.length;T<S;T+=3){let M=v[T+0],E=v[T+1],I=v[T+2];f.push(M,E,E,I,I,M)}}else{let v=g.array;x=g.version;for(let T=0,S=v.length/3-1;T<S;T+=3){let M=T+0,E=T+1,I=T+2;f.push(M,E,E,I,I,M)}}let p=new(g.count>=65535?$r:Jr)(f,1);p.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function y_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,d*o,h),e.update(f,n,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,h);let x=0;for(let p=0;p<h;p++)x+=f[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function __(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function v_(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let P=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;h===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let S=a.attributes.position.count*T,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*M*4*d),I=new Zr(E,S,M,d);I.type=Gn,I.needsUpdate=!0;let y=T*4;for(let U=0;U<d;U++){let N=p[U],z=m[U],q=v[U],k=S*M*4*U;for(let $=0;$<N.count;$++){let V=$*y;h===!0&&(s.fromBufferAttribute(N,$),E[k+V+0]=s.x,E[k+V+1]=s.y,E[k+V+2]=s.z,E[k+V+3]=0),g===!0&&(s.fromBufferAttribute(z,$),E[k+V+4]=s.x,E[k+V+5]=s.y,E[k+V+6]=s.z,E[k+V+7]=0),x===!0&&(s.fromBufferAttribute(q,$),E[k+V+8]=s.x,E[k+V+9]=s.y,E[k+V+10]=s.z,E[k+V+11]=q.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new Rt(S,M)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];let g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function b_(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var M_={[vu]:"LINEAR_TONE_MAPPING",[bu]:"REINHARD_TONE_MAPPING",[Mu]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[Eu]:"AGX_TONE_MAPPING",[wu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};function S_(i,t,e,n,s,r){let o=new Mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new le;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let u=new Ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ue(l,u),f=new es(-1,1,1,-1,0,1),h=null,g=null,x=!1,p,m=null,v=[],T=!1;this.setSize=function(S,M){o.setSize(S,M),a!==null&&a.setSize(S,M),c!==null&&c.setSize(S,M);for(let E=0;E<v.length;E++){let I=v[E];I.setSize&&I.setSize(S,M)}},this.setEffects=function(S){v=S,T=v.length>0&&v[0].isRenderPass===!0;let M=o.width,E=o.height;v.length>0&&a===null&&(a=new Mn(M,E,{type:si,depthBuffer:!1,stencilBuffer:!1}),c=new Mn(M,E,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<v.length;I++){let y=v[I];y.setSize&&y.setSize(M,E)}},this.begin=function(S,M){if(x||S.toneMapping===ni&&v.length===0)return!1;if(m=M,M!==null){let E=M.width,I=M.height;(o.width!==E||o.height!==I)&&this.setSize(E,I)}return T===!1&&S.setRenderTarget(o),p=S.toneMapping,S.toneMapping=ni,!0},this.hasRenderPass=function(){return T},this.end=function(S,M){S.toneMapping=p,x=!0;let E=o,I=a;for(let y=0;y<v.length;y++){let P=v[y];P.enabled!==!1&&(P.render(S,I,E,M),P.needsSwap!==!1&&(E=I,I=I===a?c:a))}if(h!==S.outputColorSpace||g!==S.toneMapping){h=S.outputColorSpace,g=S.toneMapping,u.defines={},xe.getTransfer(h)===Me&&(u.defines.SRGB_TRANSFER="");let y=M_[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(m),S.render(d,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Nd=new yn,qu=new $i(1,1),Dd=new Zr,Ud=new La,Fd=new eo,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);function Mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qc(i,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function E_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function w_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function T_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function R_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),Ze(e,n)}}function C_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),Ze(e,n)}}function I_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(qe(e,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Ze(e,n)}}function P_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function N_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function U_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function F_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function O_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function B_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function k_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qu.compareFunction=e.isReversedDepthBuffer()?Yc:Xc,r=qu):r=Nd,e.setTexture2D(t||r,s)}function z_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ud,s)}function H_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fd,s)}function V_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dd,s)}function G_(i){switch(i){case 5126:return E_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return I_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return N_;case 35669:case 35673:return D_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}function W_(i,t){i.uniform1fv(this.addr,t)}function X_(i,t){let e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Y_(i,t){let e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function q_(i,t){let e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function Z_(i,t){let e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J_(i,t){let e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $_(i,t){let e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K_(i,t){i.uniform1iv(this.addr,t)}function j_(i,t){i.uniform2iv(this.addr,t)}function Q_(i,t){i.uniform3iv(this.addr,t)}function tv(i,t){i.uniform4iv(this.addr,t)}function ev(i,t){i.uniform1uiv(this.addr,t)}function nv(i,t){i.uniform2uiv(this.addr,t)}function iv(i,t){i.uniform3uiv(this.addr,t)}function sv(i,t){i.uniform4uiv(this.addr,t)}function rv(i,t,e){let n=this.cache,s=t.length,r=Qc(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=qu:o=Nd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function ov(i,t,e){let n=this.cache,s=t.length,r=Qc(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ud,r[o])}function av(i,t,e){let n=this.cache,s=t.length,r=Qc(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fd,r[o])}function cv(i,t,e){let n=this.cache,s=t.length,r=Qc(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dd,r[o])}function lv(i){switch(i){case 5126:return W_;case 35664:return X_;case 35665:return Y_;case 35666:return q_;case 35674:return Z_;case 35675:return J_;case 35676:return $_;case 5124:case 35670:return K_;case 35667:case 35671:return j_;case 35668:case 35672:return Q_;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return cv}}var Zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G_(e.type)}},Ju=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lv(e.type)}},$u=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Xu=/(\w+)(\])?(\[|\.)?/g;function _d(i,t){i.seq.push(t),i.map[t.id]=t}function uv(i,t,e){let n=i.name,s=n.length;for(Xu.lastIndex=0;;){let r=Xu.exec(n),o=Xu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){_d(e,l===void 0?new Zu(a,i,t):new Ju(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new $u(a),_d(e,d)),e=d}}}var br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);uv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function vd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hv=37297,fv=0;function dv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var bd=new ae;function pv(i){xe._getMatrix(bd,xe.workingColorSpace,i);let t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Md(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dv(i.getShaderSource(t),a)}else return r}function mv(i,t){let e=pv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gv={[vu]:"Linear",[bu]:"Reinhard",[Mu]:"Cineon",[Mo]:"ACESFilmic",[Eu]:"AgX",[wu]:"Neutral",[Su]:"Custom"};function xv(i,t){let e=gv[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zc=new W;function yv(){xe.getLuminanceCoefficients(Zc);let i=Zc.x.toFixed(4),t=Zc.y.toFixed(4),e=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function vv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Uo(i){return i!==""}function Sd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(i){return i.replace(Mv,Ev)}var Sv=new Map;function Ev(i,t){let e=fe[t];if(e===void 0){let n=Sv.get(t);if(n!==void 0)e=fe[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ku(e)}var wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(i){return i.replace(wv,Tv)}function Tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Av={[Es]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Rv(i){return Av[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cv={[os]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE_UV"};function Iv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Cv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pv={[Ts]:"ENVMAP_MODE_REFRACTION"};function Lv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Pv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nv={[sc]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function Dv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Nv[i.combine]||"ENVMAP_BLENDING_NONE"}function Uv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Rv(e),l=Iv(e),u=Lv(e),d=Dv(e),f=Uv(e),h=_v(e),g=vv(r),x=s.createProgram(),p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Uo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Uo).join(`
`),m.length>0&&(m+=`
`)):(p=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),m=[Td(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?fe.tonemapping_pars_fragment:"",e.toneMapping!==ni?xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Ku(o),o=Sd(o,e),o=Ed(o,e),a=Ku(a),a=Sd(a,e),a=Ed(a,e),o=wd(o),a=wd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=v+p+o,S=v+m+a,M=vd(s,s.VERTEX_SHADER,T),E=vd(s,s.FRAGMENT_SHADER,S);s.attachShader(x,M),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(N){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(E)||"",$=z.trim(),V=q.trim(),nt=k.trim(),G=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,E);else{let Y=Md(s,M,"vertex"),Z=Md(s,E,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+Y+`
`+Z)}else $!==""?te("WebGLProgram: Program Info Log:",$):(V===""||nt==="")&&(X=!1);X&&(N.diagnostics={runnable:G,programLog:$,vertexShader:{log:V,prefix:p},fragmentShader:{log:nt,prefix:m}})}s.deleteShader(M),s.deleteShader(E),y=new br(s,x),P=bv(s,x)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,hv)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}var Ov=0,ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qu(t),e.set(t,n)),n}},Qu=class{constructor(t){this.id=Ov++,this.code=t,this.usedTimes=0}};function Bv(i){return i===ls||i===Co||i===Io}function kv(i,t,e,n,s,r){let o=new sr,a=new ju,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,P,U,N,z,q){let k=N.fog,$=z.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,nt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=t.get(y.envMap||V,nt),X=G&&G.mapping===So?G.image.height:null,Y=h[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&te("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Z=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ot=Z!==void 0?Z.length:0,yt=0;$.morphAttributes.position!==void 0&&(yt=1),$.morphAttributes.normal!==void 0&&(yt=2),$.morphAttributes.color!==void 0&&(yt=3);let bt,St,Pt,at;if(Y){let Jt=vn[Y];bt=Jt.vertexShader,St=Jt.fragmentShader}else{bt=y.vertexShader,St=y.fragmentShader;let Jt=a.getVertexShaderStage(y),jt=a.getFragmentShaderStage(y);a.update(y,Jt,jt),Pt=Jt.id,at=jt.id}let ht=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Ft=z.isInstancedMesh===!0,Lt=z.isBatchedMesh===!0,It=!!y.map,Ht=!!y.matcap,ut=!!G,_t=!!y.aoMap,Mt=!!y.lightMap,Et=!!y.bumpMap&&y.wireframe===!1,wt=!!y.normalMap,Ut=!!y.displacementMap,Bt=!!y.emissiveMap,Vt=!!y.metalnessMap,Kt=!!y.roughnessMap,J=y.anisotropy>0,re=y.clearcoat>0,Yt=y.dispersion>0,O=y.retroreflectivity>0,w=y.iridescence>0,tt=y.sheen>0,et=y.transmission>0,ft=J&&!!y.anisotropyMap,H=re&&!!y.clearcoatMap,_=re&&!!y.clearcoatNormalMap,b=re&&!!y.clearcoatRoughnessMap,A=w&&!!y.iridescenceMap,L=w&&!!y.iridescenceThicknessMap,D=tt&&!!y.sheenColorMap,B=tt&&!!y.sheenRoughnessMap,F=!!y.specularMap,j=!!y.specularColorMap,K=!!y.specularIntensityMap,mt=et&&!!y.transmissionMap,R=et&&!!y.thicknessMap,it=!!y.gradientMap,Q=!!y.alphaMap,gt=y.alphaTest>0,xt=!!y.alphaHash,dt=!!y.extensions,vt=ni;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(vt=i.toneMapping);let Ct={shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:bt,fragmentShader:St,defines:y.defines,customVertexShaderID:Pt,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&z._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&z.instanceColor!==null,instancingMorph:Ft&&z.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:It,matcap:Ht,envMap:ut,envMapMode:ut&&G.mapping,envMapCubeUVHeight:X,aoMap:_t,lightMap:Mt,bumpMap:Et,normalMap:wt,displacementMap:Ut,emissiveMap:Bt,normalMapObjectSpace:wt&&y.normalMapType===Xf,normalMapTangentSpace:wt&&y.normalMapType===Po,packedNormalMap:wt&&y.normalMapType===Po&&Bv(y.normalMap.format),metalnessMap:Vt,roughnessMap:Kt,anisotropy:J,anisotropyMap:ft,clearcoat:re,clearcoatMap:H,clearcoatNormalMap:_,clearcoatRoughnessMap:b,dispersion:Yt,retroreflection:O,iridescence:w,iridescenceMap:A,iridescenceThicknessMap:L,sheen:tt,sheenColorMap:D,sheenRoughnessMap:B,specularMap:F,specularColorMap:j,specularIntensityMap:K,transmission:et,transmissionMap:mt,thicknessMap:R,gradientMap:it,opaque:y.transparent===!1&&y.blending===gr&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:gt,alphaHash:xt,combine:y.combine,mapUv:It&&g(y.map.channel),aoMapUv:_t&&g(y.aoMap.channel),lightMapUv:Mt&&g(y.lightMap.channel),bumpMapUv:Et&&g(y.bumpMap.channel),normalMapUv:wt&&g(y.normalMap.channel),displacementMapUv:Ut&&g(y.displacementMap.channel),emissiveMapUv:Bt&&g(y.emissiveMap.channel),metalnessMapUv:Vt&&g(y.metalnessMap.channel),roughnessMapUv:Kt&&g(y.roughnessMap.channel),anisotropyMapUv:ft&&g(y.anisotropyMap.channel),clearcoatMapUv:H&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:A&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:L&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:D&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:B&&g(y.sheenRoughnessMap.channel),specularMapUv:F&&g(y.specularMap.channel),specularColorMapUv:j&&g(y.specularColorMap.channel),specularIntensityMapUv:K&&g(y.specularIntensityMap.channel),transmissionMapUv:mt&&g(y.transmissionMap.channel),thicknessMapUv:R&&g(y.thicknessMap.channel),alphaMapUv:Q&&g(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(wt||J),vertexNormals:!!$.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(It||Q),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||$.attributes.normal===void 0&&wt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:yt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:It&&y.map.isVideoTexture===!0&&xe.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&xe.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:dt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&y.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(y){let P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)P.push(U),P.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(m(P,y),v(P,y),P.push(i.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function m(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numSunLights),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numSunLightShadows),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function v(y,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let P=h[y.type],U;if(P){let N=vn[P];U=Lo.clone(N.uniforms)}else U=y.uniforms;return U}function S(y,P){let U=u.get(P);return U!==void 0?++U.usedTimes:(U=new Fv(i,P,y,s),l.push(U),u.set(P,U)),U}function M(y){if(--y.usedTimes===0){let P=l.indexOf(y);l[P]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function I(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:I}}function zv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,x,p,m){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:h,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:m},i[t]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=g,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=p,v.group=m),t++,v}function c(f,h,g,x,p,m,v){v.reversedDepth===!0&&(p=-p);let T=a(f,h,g,x,p,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function l(f,h,g,x,p,m){let v=a(f,h,g,x,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,h){e.length>1&&e.sort(f||Hv),n.length>1&&n.sort(h||Ad),s.length>1&&s.sort(h||Ad)}function d(){for(let f=t,h=i.length;f<h;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Vv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Rd,i.set(n,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Zt};break;case"SpotLight":e={position:new W,direction:new W,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Wv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xv=0;function Yv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qv(i){let t=new Gv,e=Wv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let s=new W,r=new ye,o=new ye;function a(l){let u=0,d=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let h=0,g=0,x=0,p=0,m=0,v=0,T=0,S=0,M=0,E=0,I=0,y=0,P=0,U=0;l.sort(Yv);for(let z=0,q=l.length;z<q;z++){let k=l[z],$=k.color,V=k.intensity,nt=k.distance,G=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ls?G=k.shadow.map.texture:G=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=$.r*V,d+=$.g*V,f+=$.b*V;else if(k.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(k.sh.coefficients[X],V);U++}else if(k.isSunLight){let X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let Y=k.shadow,Z=e.get(k);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=G;let ot=Y.getViewportCount();for(let yt=0;yt<ot;yt++)n.sunShadowMatrix[x+yt]=Y.getMatrix(yt),n.sunShadowCascade[x+yt]=Y._cascadeData[yt];x+=ot,g++}n.sun[h]=X,h++}else if(k.isDirectionalLight){let X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let Y=k.shadow,Z=e.get(k);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=k.shadow.matrix,M++}n.directional[p]=X,p++}else if(k.isSpotLight){let X=t.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy($).multiplyScalar(V),X.distance=nt,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,n.spot[v]=X;let Y=k.shadow;if(k.map&&(n.spotLightMap[y]=k.map,y++,Y.updateMatrices(k),k.castShadow&&P++),n.spotLightMatrix[v]=Y.matrix,k.castShadow){let Z=e.get(k);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=G,I++}v++}else if(k.isRectAreaLight){let X=t.get(k);X.color.copy($).multiplyScalar(V),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),n.rectArea[T]=X,T++}else if(k.isPointLight){let X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity),X.distance=k.distance,X.decay=k.decay,k.castShadow){let Y=k.shadow,Z=e.get(k);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=k.shadow.matrix,E++}n.point[m]=X,m++}else if(k.isHemisphereLight){let X=t.get(k);X.skyColor.copy(k.color).multiplyScalar(V),X.groundColor.copy(k.groundColor).multiplyScalar(V),n.hemi[S]=X,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==h||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==T||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==M||N.numPointShadows!==E||N.numSpotShadows!==I||N.numSpotMaps!==y||N.numLightProbes!==U)&&(n.sun.length=h,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,N.sunLength=h,N.directionalLength=p,N.pointLength=m,N.spotLength=v,N.rectAreaLength=T,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=M,N.numPointShadows=E,N.numSpotShadows=I,N.numSpotMaps=y,N.numLightProbes=U,n.version=Xv++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let v=0,T=l.length;v<T;v++){let S=l[v];if(S.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Cd(i){let t=new qv(i),e=[],n=[],s=[];function r(f){d.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Zv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Cd(i),t.set(s,[a])):r>=o.length?(a=new Cd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`,Kv=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],jv=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Id=new ye,Do=new W,Yu=new W;function Qv(i,t,e){let n=new ar,s=new Rt,r=new Rt,o=new Se,a=new Wa,c=new Xa,l={},u=e.maxTextureSize,d={[rs]:_n,[_n]:rs,[rn]:rn},f=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Jv,fragmentShader:$v}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new le;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ue(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let m=this.type;this.render=function(E,I,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Mf&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Es);let P=i.getRenderTarget(),U=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(gi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=m!==this.type;q&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach($=>$.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,$=E.length;k<$;k++){let V=E[k],nt=V.shadow;if(nt===void 0){te("WebGLShadowMap:",V,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let G=nt.getFrameExtents();s.multiply(G),r.copy(nt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,nt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,nt.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(nt.camera._reversedDepth=X,nt.map===null||q===!0){if(nt.map!==null&&(nt.map.depthTexture!==null&&(nt.map.depthTexture.dispose(),nt.map.depthTexture=null),nt.map.dispose()),this.type===mr){if(V.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}nt.map=new Mn(s.x,s.y,{format:ls,type:si,minFilter:sn,magFilter:sn,generateMipmaps:!1}),nt.map.texture.name=V.name+".shadowMap",nt.map.depthTexture=new $i(s.x,s.y,Gn),nt.map.depthTexture.name=V.name+".shadowMapDepth",nt.map.depthTexture.format=di,nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=je,nt.map.depthTexture.magFilter=je}else V.isPointLight?(nt.map=new $c(s.x),nt.map.depthTexture=new Fa(s.x,ii)):(nt.map=new Mn(s.x,s.y),nt.map.depthTexture=new $i(s.x,s.y,ii)),nt.map.depthTexture.name=V.name+".shadowMap",nt.map.depthTexture.format=di,this.type===Es?(nt.map.depthTexture.compareFunction=X?Yc:Xc,nt.map.depthTexture.minFilter=sn,nt.map.depthTexture.magFilter=sn):(nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=je,nt.map.depthTexture.magFilter=je);nt.camera.updateProjectionMatrix()}nt.map.isWebGLCubeRenderTarget!==!0&&(nt.map.width!==s.x||nt.map.height!==s.y)&&nt.map.setSize(s.x,s.y);let Y=nt.map.isWebGLCubeRenderTarget?6:nt.getViewportCount();V.isPointLight!==!0&&nt.updateMatrices(V,y);for(let Z=0;Z<Y;Z++){let ot=nt.getCamera(Z);if(V.isPointLight){let yt=nt.camera,bt=nt.matrix,St=V.distance||yt.far;St!==yt.far&&(yt.far=St,yt.updateProjectionMatrix()),Do.setFromMatrixPosition(V.matrixWorld),yt.position.copy(Do),Yu.copy(yt.position),Yu.add(Kv[Z]),yt.up.copy(jv[Z]),yt.lookAt(Yu),yt.updateMatrixWorld(),bt.makeTranslation(-Do.x,-Do.y,-Do.z),Id.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),nt._frustum.setFromProjectionMatrix(Id,yt.coordinateSystem,yt.reversedDepth)}if(nt.map.isWebGLCubeRenderTarget)i.setRenderTarget(nt.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(nt.map),i.clear());let yt=nt.getViewport(Z);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),z.viewport(o)}n=nt.getFrustum(Z),S(I,y,ot,V,this.type)}nt.isPointLightShadow!==!0&&this.type===mr&&v(nt,y),nt.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,U,N)};function v(E,I){let y=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null?E.mapPass=new Mn(s.x,s.y,{format:ls,type:si}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,y,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,y,h,x,null)}function T(E,I,y,P){let U=null,N=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)U=N;else if(U=y.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=U.uuid,q=I.uuid,k=l[z];k===void 0&&(k={},l[z]=k);let $=k[q];$===void 0&&($=U.clone(),k[q]=$,I.addEventListener("dispose",M)),U=$}if(U.visible=I.visible,U.wireframe=I.wireframe,P===mr?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:d[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let z=i.properties.get(U);z.light=y}return U}function S(E,I,y,P,U){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===mr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let q=t.update(E),k=E.material;if(Array.isArray(k)){let $=q.groups;for(let V=0,nt=$.length;V<nt;V++){let G=$[V],X=k[G.materialIndex];if(X&&X.visible){let Y=T(E,X,P,U);E.onBeforeShadow(i,E,I,y,q,Y,G),i.renderBufferDirect(y,null,q,Y,E,G),E.onAfterShadow(i,E,I,y,q,Y,G)}}}else if(k.visible){let $=T(E,k,P,U);E.onBeforeShadow(i,E,I,y,q,$,null),i.renderBufferDirect(y,null,q,$,E,null),E.onAfterShadow(i,E,I,y,q,$,null)}}let z=E.children;for(let q=0,k=z.length;q<k;q++)S(z[q],I,y,P,U)}function M(E){E.target.removeEventListener("dispose",M);for(let y in l){let P=l[y],U=E.target.uuid;U in P&&(P[U].dispose(),delete P[U])}}}function tb(i,t){function e(){let R=!1,it=new Se,Q=null,gt=new Se(0,0,0,0);return{setMask:function(xt){Q!==xt&&!R&&(i.colorMask(xt,xt,xt,xt),Q=xt)},setLocked:function(xt){R=xt},setClear:function(xt,dt,vt,Ct,Jt){Jt===!0&&(xt*=Ct,dt*=Ct,vt*=Ct),it.set(xt,dt,vt,Ct),gt.equals(it)===!1&&(i.clearColor(xt,dt,vt,Ct),gt.copy(it))},reset:function(){R=!1,Q=null,gt.set(-1,0,0,0)}}}function n(){let R=!1,it=!1,Q=null,gt=null,xt=null;return{setReversed:function(dt){if(it!==dt){let vt=t.get("EXT_clip_control");dt?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),it=dt;let Ct=xt;xt=null,this.setClear(Ct)}},getReversed:function(){return it},setTest:function(dt){dt?ht(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(dt){Q!==dt&&!R&&(i.depthMask(dt),Q=dt)},setFunc:function(dt){if(it&&(dt=nd[dt]),gt!==dt){switch(dt){case ba:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=dt}},setLocked:function(dt){R=dt},setClear:function(dt){xt!==dt&&(xt=dt,it&&(dt=1-dt),i.clearDepth(dt))},reset:function(){R=!1,Q=null,gt=null,xt=null,it=!1}}}function s(){let R=!1,it=null,Q=null,gt=null,xt=null,dt=null,vt=null,Ct=null,Jt=null;return{setTest:function(jt){R||(jt?ht(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(jt){it!==jt&&!R&&(i.stencilMask(jt),it=jt)},setFunc:function(jt,pe,_e){(Q!==jt||gt!==pe||xt!==_e)&&(i.stencilFunc(jt,pe,_e),Q=jt,gt=pe,xt=_e)},setOp:function(jt,pe,_e){(dt!==jt||vt!==pe||Ct!==_e)&&(i.stencilOp(jt,pe,_e),dt=jt,vt=pe,Ct=_e)},setLocked:function(jt){R=jt},setClear:function(jt){Jt!==jt&&(i.clearStencil(jt),Jt=jt)},reset:function(){R=!1,it=null,Q=null,gt=null,xt=null,dt=null,vt=null,Ct=null,Jt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},f={},h=new WeakMap,g=[],x=null,p=!1,m=null,v=null,T=null,S=null,M=null,E=null,I=null,y=new Zt(0,0,0),P=0,U=!1,N=null,z=null,q=null,k=null,$=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),nt=!1,G=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(X)[1]),nt=G>=1):X.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),nt=G>=2);let Y=null,Z={},ot=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),bt=new Se().fromArray(ot),St=new Se().fromArray(yt);function Pt(R,it,Q,gt){let xt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(R,dt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<Q;vt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(it+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return dt}let at={};at[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Qs),Et(!1),wt(mu),ht(i.CULL_FACE),_t(gi);function ht(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Tt(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function Ft(R,it){return f[R]!==it?(i.bindFramebuffer(R,it),f[R]=it,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Lt(R,it){let Q=g,gt=!1;if(R){Q=h.get(it),Q===void 0&&(Q=[],h.set(it,Q));let xt=R.textures;if(Q.length!==xt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,vt=xt.length;dt<vt;dt++)Q[dt]=i.COLOR_ATTACHMENT0+dt;Q.length=xt.length,gt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,gt=!0);gt&&i.drawBuffers(Q)}function It(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let Ht={[ws]:i.FUNC_ADD,[Ef]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};Ht[Tf]=i.MIN,Ht[Af]=i.MAX;let ut={[Rf]:i.ZERO,[Cf]:i.ONE,[If]:i.SRC_COLOR,[yu]:i.SRC_ALPHA,[Ff]:i.SRC_ALPHA_SATURATE,[Df]:i.DST_COLOR,[Lf]:i.DST_ALPHA,[Pf]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[Uf]:i.ONE_MINUS_DST_COLOR,[Nf]:i.ONE_MINUS_DST_ALPHA,[Of]:i.CONSTANT_COLOR,[Bf]:i.ONE_MINUS_CONSTANT_COLOR,[kf]:i.CONSTANT_ALPHA,[zf]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(R,it,Q,gt,xt,dt,vt,Ct,Jt,jt){if(R===gi){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(ht(i.BLEND),p=!0),R!==Sf){if(R!==m||jt!==U){if((v!==ws||M!==ws)&&(i.blendEquation(i.FUNC_ADD),v=ws,M=ws),jt)switch(R){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",R);break}else switch(R){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gu:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",R);break}T=null,S=null,E=null,I=null,y.set(0,0,0),P=0,m=R,U=jt}return}xt=xt||it,dt=dt||Q,vt=vt||gt,(it!==v||xt!==M)&&(i.blendEquationSeparate(Ht[it],Ht[xt]),v=it,M=xt),(Q!==T||gt!==S||dt!==E||vt!==I)&&(i.blendFuncSeparate(ut[Q],ut[gt],ut[dt],ut[vt]),T=Q,S=gt,E=dt,I=vt),(Ct.equals(y)===!1||Jt!==P)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Jt),y.copy(Ct),P=Jt),m=R,U=!1}function Mt(R,it){R.side===rn?Tt(i.CULL_FACE):ht(i.CULL_FACE);let Q=R.side===_n;it&&(Q=!Q),Et(Q),R.blending===gr&&R.transparent===!1?_t(gi):_t(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let gt=R.stencilWrite;a.setTest(gt),gt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Bt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function wt(R){R!==vf?(ht(i.CULL_FACE),R!==z&&(R===mu?i.cullFace(i.BACK):R===bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),z=R}function Ut(R){R!==q&&(nt&&i.lineWidth(R),q=R)}function Bt(R,it,Q){R?(ht(i.POLYGON_OFFSET_FILL),(k!==it||$!==Q)&&(k=it,$=Q,o.getReversed()&&(it=-it),i.polygonOffset(it,Q))):Tt(i.POLYGON_OFFSET_FILL)}function Vt(R){R?ht(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function Kt(R){R===void 0&&(R=i.TEXTURE0+V-1),Y!==R&&(i.activeTexture(R),Y=R)}function J(R,it,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+V-1:Q=Y);let gt=Z[Q];gt===void 0&&(gt={type:void 0,texture:void 0},Z[Q]=gt),(gt.type!==R||gt.texture!==it)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(R,it||at[R]),gt.type=R,gt.texture=it)}function re(){let R=Z[Y];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function w(){try{i.texSubImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function tt(){try{i.texSubImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function ft(){try{i.compressedTexSubImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function H(){try{i.texStorage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function _(){try{i.texStorage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function b(){try{i.texImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function A(){try{i.texImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function L(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function D(R,it){d[R]!==it&&(i.pixelStorei(R,it),d[R]=it)}function B(R){bt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),bt.copy(R))}function F(R){St.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),St.copy(R))}function j(R,it){let Q=l.get(it);Q===void 0&&(Q=new WeakMap,l.set(it,Q));let gt=Q.get(R);gt===void 0&&(gt=i.getUniformBlockIndex(it,R.name),Q.set(R,gt))}function K(R,it){let gt=l.get(it).get(R);c.get(it)!==gt&&(i.uniformBlockBinding(it,gt,R.__bindingPointIndex),c.set(it,gt))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,Z={},f={},h=new WeakMap,g=[],x=null,p=!1,m=null,v=null,T=null,S=null,M=null,E=null,I=null,y=new Zt(0,0,0),P=0,U=!1,N=null,z=null,q=null,k=null,$=null,bt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Tt,bindFramebuffer:Ft,drawBuffers:Lt,useProgram:It,setBlending:_t,setMaterial:Mt,setFlipSided:Et,setCullFace:wt,setLineWidth:Ut,setPolygonOffset:Bt,setScissorTest:Vt,activeTexture:Kt,bindTexture:J,unbindTexture:re,compressedTexImage2D:Yt,compressedTexImage3D:O,texImage2D:b,texImage3D:A,pixelStorei:D,getParameter:L,updateUBOMapping:j,uniformBlockBinding:K,texStorage2D:H,texStorage3D:_,texSubImage2D:w,texSubImage3D:tt,compressedTexSubImage2D:et,compressedTexSubImage3D:ft,scissor:B,viewport:F,reset:mt}}function eb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,u=new WeakMap,d=new Set,f,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,w){return g?new OffscreenCanvas(O,w):Yr("canvas")}function p(O,w,tt){let et=1,ft=Yt(O);if((ft.width>tt||ft.height>tt)&&(et=tt/Math.max(ft.width,ft.height)),et<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let H=Math.floor(et*ft.width),_=Math.floor(et*ft.height);f===void 0&&(f=x(H,_));let b=w?x(H,_):f;return b.width=H,b.height=_,b.getContext("2d").drawImage(O,0,0,H,_),te("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+H+"x"+_+")."),b}else return"data"in O&&te("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),O;return O}function m(O){return O.generateMipmaps}function v(O){i.generateMipmap(O)}function T(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(O,w,tt,et,ft,H=!1){if(O!==null){if(i[O]!==void 0)return i[O];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _;et&&(_=t.get("EXT_texture_norm16"),_||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let b=w;if(w===i.RED&&(tt===i.FLOAT&&(b=i.R32F),tt===i.HALF_FLOAT&&(b=i.R16F),tt===i.UNSIGNED_BYTE&&(b=i.R8),tt===i.UNSIGNED_SHORT&&_&&(b=_.R16_EXT),tt===i.SHORT&&_&&(b=_.R16_SNORM_EXT)),w===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(b=i.R8UI),tt===i.UNSIGNED_SHORT&&(b=i.R16UI),tt===i.UNSIGNED_INT&&(b=i.R32UI),tt===i.BYTE&&(b=i.R8I),tt===i.SHORT&&(b=i.R16I),tt===i.INT&&(b=i.R32I)),w===i.RG&&(tt===i.FLOAT&&(b=i.RG32F),tt===i.HALF_FLOAT&&(b=i.RG16F),tt===i.UNSIGNED_BYTE&&(b=i.RG8),tt===i.UNSIGNED_SHORT&&_&&(b=_.RG16_EXT),tt===i.SHORT&&_&&(b=_.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(b=i.RG8UI),tt===i.UNSIGNED_SHORT&&(b=i.RG16UI),tt===i.UNSIGNED_INT&&(b=i.RG32UI),tt===i.BYTE&&(b=i.RG8I),tt===i.SHORT&&(b=i.RG16I),tt===i.INT&&(b=i.RG32I)),w===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(b=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(b=i.RGB16UI),tt===i.UNSIGNED_INT&&(b=i.RGB32UI),tt===i.BYTE&&(b=i.RGB8I),tt===i.SHORT&&(b=i.RGB16I),tt===i.INT&&(b=i.RGB32I)),w===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(b=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(b=i.RGBA16UI),tt===i.UNSIGNED_INT&&(b=i.RGBA32UI),tt===i.BYTE&&(b=i.RGBA8I),tt===i.SHORT&&(b=i.RGBA16I),tt===i.INT&&(b=i.RGBA32I)),w===i.RGB&&(tt===i.UNSIGNED_SHORT&&_&&(b=_.RGB16_EXT),tt===i.SHORT&&_&&(b=_.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(b=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(b=i.R11F_G11F_B10F)),w===i.RGBA){let A=H?Xr:xe.getTransfer(ft);tt===i.FLOAT&&(b=i.RGBA32F),tt===i.HALF_FLOAT&&(b=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(b=A===Me?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&_&&(b=_.RGBA16_EXT),tt===i.SHORT&&_&&(b=_.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(b=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(b=i.RGB5_A1)}return(b===i.R16F||b===i.R32F||b===i.RG16F||b===i.RG32F||b===i.RGBA16F||b===i.RGBA32F)&&t.get("EXT_color_buffer_float"),b}function M(O,w){let tt;return O?w===null||w===ii||w===yr?tt=i.DEPTH24_STENCIL8:w===Gn?tt=i.DEPTH32F_STENCIL8:w===xr&&(tt=i.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ii||w===yr?tt=i.DEPTH_COMPONENT24:w===Gn?tt=i.DEPTH_COMPONENT32F:w===xr&&(tt=i.DEPTH_COMPONENT16),tt}function E(O,w){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==je&&O.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function I(O){let w=O.target;w.removeEventListener("dispose",I),P(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function y(O){let w=O.target;w.removeEventListener("dispose",y),N(w)}function P(O){let w=n.get(O);if(w.__webglInit===void 0)return;let tt=O.source,et=h.get(tt);if(et){let ft=et[w.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&U(O),Object.keys(et).length===0&&h.delete(tt)}n.remove(O)}function U(O){let w=n.get(O);i.deleteTexture(w.__webglTexture);let tt=O.source,et=h.get(tt);delete et[w.__cacheKey],o.memory.textures--}function N(O){let w=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let ft=0;ft<w.__webglFramebuffer[et].length;ft++)i.deleteFramebuffer(w.__webglFramebuffer[et][ft]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let tt=O.textures;for(let et=0,ft=tt.length;et<ft;et++){let H=n.get(tt[et]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(tt[et])}n.remove(O)}let z=0;function q(){z=0}function k(){return z}function $(O){z=O}function V(){let O=z;return O>=s.maxTextures&&te("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,O}function nt(O){let w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function G(O,w){let tt=n.get(O);if(O.isVideoTexture&&J(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){let et=O.image;if(et===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(tt,O,w);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+w)}function X(O,w){let tt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Tt(tt,O,w);return}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+w)}function Y(O,w){let tt=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){Tt(tt,O,w);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+w)}function Z(O,w){let tt=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&tt.__version!==O.version){Ft(tt,O,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+w)}let ot={[ys]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},yt={[je]:i.NEAREST,[Gf]:i.NEAREST_MIPMAP_NEAREST,[Eo]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ac]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},bt={[qf]:i.NEVER,[jf]:i.ALWAYS,[Zf]:i.LESS,[Xc]:i.LEQUAL,[Jf]:i.EQUAL,[Yc]:i.GEQUAL,[$f]:i.GREATER,[Kf]:i.NOTEQUAL};function St(O,w){if(w.type===Gn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===sn||w.magFilter===ac||w.magFilter===Eo||w.magFilter===as||w.minFilter===sn||w.minFilter===ac||w.minFilter===Eo||w.minFilter===as)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,ot[w.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,ot[w.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,ot[w.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,yt[w.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,bt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===je||w.minFilter!==Eo&&w.minFilter!==as||w.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Pt(O,w){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",I));let et=w.source,ft=h.get(et);ft===void 0&&(ft={},h.set(et,ft));let H=nt(w);if(H!==O.__cacheKey){ft[H]===void 0&&(ft[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),ft[H].usedTimes++;let _=ft[O.__cacheKey];_!==void 0&&(ft[O.__cacheKey].usedTimes--,_.usedTimes===0&&U(w)),O.__cacheKey=H,O.__webglTexture=ft[H].texture}return tt}function at(O,w,tt){return Math.floor(Math.floor(O/tt)/w)}function ht(O,w,tt,et){let H=O.updateRanges;if(H.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,tt,et,w.data);else{H.sort((D,B)=>D.start-B.start);let _=0;for(let D=1;D<H.length;D++){let B=H[_],F=H[D],j=B.start+B.count,K=at(F.start,w.width,4),mt=at(B.start,w.width,4);F.start<=j+1&&K===mt&&at(F.start+F.count-1,w.width,4)===K?B.count=Math.max(B.count,F.start+F.count-B.start):(++_,H[_]=F)}H.length=_+1;let b=e.getParameter(i.UNPACK_ROW_LENGTH),A=e.getParameter(i.UNPACK_SKIP_PIXELS),L=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let D=0,B=H.length;D<B;D++){let F=H[D],j=Math.floor(F.start/4),K=Math.ceil(F.count/4),mt=j%w.width,R=Math.floor(j/w.width),it=K,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,mt,R,it,Q,tt,et,w.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,b),e.pixelStorei(i.UNPACK_SKIP_PIXELS,A),e.pixelStorei(i.UNPACK_SKIP_ROWS,L)}}function Tt(O,w,tt){let et=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=i.TEXTURE_3D);let ft=Pt(O,w),H=w.source;e.bindTexture(et,O.__webglTexture,i.TEXTURE0+tt);let _=n.get(H);if(H.version!==_.__version||ft===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let Q=xe.getPrimaries(xe.workingColorSpace),gt=w.colorSpace===Di?null:xe.getPrimaries(w.colorSpace),xt=w.colorSpace===Di||Q===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let A=p(w.image,!1,s.maxTextureSize);A=re(w,A);let L=r.convert(w.format,w.colorSpace),D=r.convert(w.type),B=S(w.internalFormat,L,D,w.normalized,w.colorSpace,w.isVideoTexture);St(et,w);let F,j=w.mipmaps,K=w.isVideoTexture!==!0,mt=_.__version===void 0||ft===!0,R=H.dataReady,it=E(w,A);if(w.isDepthTexture)B=M(w.format===cs,w.type),mt&&(K?e.texStorage2D(i.TEXTURE_2D,1,B,A.width,A.height):e.texImage2D(i.TEXTURE_2D,0,B,A.width,A.height,0,L,D,null));else if(w.isDataTexture)if(j.length>0){K&&mt&&e.texStorage2D(i.TEXTURE_2D,it,B,j[0].width,j[0].height);for(let Q=0,gt=j.length;Q<gt;Q++)F=j[Q],K?R&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,F.width,F.height,L,D,F.data):e.texImage2D(i.TEXTURE_2D,Q,B,F.width,F.height,0,L,D,F.data);w.generateMipmaps=!1}else K?(mt&&e.texStorage2D(i.TEXTURE_2D,it,B,A.width,A.height),R&&ht(w,A,L,D)):e.texImage2D(i.TEXTURE_2D,0,B,A.width,A.height,0,L,D,A.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){K&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,B,j[0].width,j[0].height,A.depth);for(let Q=0,gt=j.length;Q<gt;Q++)if(F=j[Q],w.format!==Wn)if(L!==null)if(K){if(R)if(w.layerUpdates.size>0){let xt=zu(F.width,F.height,w.format,w.type);for(let dt of w.layerUpdates){let vt=F.data.subarray(dt*xt/F.data.BYTES_PER_ELEMENT,(dt+1)*xt/F.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,dt,F.width,F.height,1,L,vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,F.width,F.height,A.depth,L,F.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,B,F.width,F.height,A.depth,0,F.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,F.width,F.height,A.depth,L,D,F.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,B,F.width,F.height,A.depth,0,L,D,F.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{K&&mt&&e.texStorage2D(i.TEXTURE_2D,it,B,j[0].width,j[0].height);for(let Q=0,gt=j.length;Q<gt;Q++)F=j[Q],w.format!==Wn?L!==null?K?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,F.width,F.height,L,F.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,B,F.width,F.height,0,F.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?R&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,F.width,F.height,L,D,F.data):e.texImage2D(i.TEXTURE_2D,Q,B,F.width,F.height,0,L,D,F.data)}else if(w.isDataArrayTexture)if(K){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,B,A.width,A.height,A.depth),R)if(w.layerUpdates.size>0){let Q=zu(A.width,A.height,w.format,w.type);for(let gt of w.layerUpdates){let xt=A.data.subarray(gt*Q/A.data.BYTES_PER_ELEMENT,(gt+1)*Q/A.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,A.width,A.height,1,L,D,xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,L,D,A.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,B,A.width,A.height,A.depth,0,L,D,A.data);else if(w.isData3DTexture)K?(mt&&e.texStorage3D(i.TEXTURE_3D,it,B,A.width,A.height,A.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,L,D,A.data)):e.texImage3D(i.TEXTURE_3D,0,B,A.width,A.height,A.depth,0,L,D,A.data);else if(w.isFramebufferTexture){if(mt)if(K)e.texStorage2D(i.TEXTURE_2D,it,B,A.width,A.height);else{let Q=A.width,gt=A.height;for(let xt=0;xt<it;xt++)e.texImage2D(i.TEXTURE_2D,xt,B,Q,gt,0,L,D,null),Q>>=1,gt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),A.parentNode!==Q){Q.appendChild(A),d.add(w),Q.onpaint=gt=>{let xt=gt.changedElements;for(let dt of d)xt.includes(dt.image)&&(dt.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,A);else{let xt=i.RGBA,dt=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,dt,vt,A)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(j.length>0){if(K&&mt){let Q=Yt(j[0]);e.texStorage2D(i.TEXTURE_2D,it,B,Q.width,Q.height)}for(let Q=0,gt=j.length;Q<gt;Q++)F=j[Q],K?R&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,L,D,F):e.texImage2D(i.TEXTURE_2D,Q,B,L,D,F);w.generateMipmaps=!1}else if(K){if(mt){let Q=Yt(A);e.texStorage2D(i.TEXTURE_2D,it,B,Q.width,Q.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,L,D,A)}else e.texImage2D(i.TEXTURE_2D,0,B,L,D,A);m(w)&&v(et),_.__version=H.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Ft(O,w,tt){if(w.image.length!==6)return;let et=Pt(O,w),ft=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+tt);let H=n.get(ft);if(ft.version!==H.__version||et===!0){e.activeTexture(i.TEXTURE0+tt);let _=xe.getPrimaries(xe.workingColorSpace),b=w.colorSpace===Di?null:xe.getPrimaries(w.colorSpace),A=w.colorSpace===Di||_===b?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let L=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,B=[];for(let dt=0;dt<6;dt++)!L&&!D?B[dt]=p(w.image[dt],!0,s.maxCubemapSize):B[dt]=D?w.image[dt].image:w.image[dt],B[dt]=re(w,B[dt]);let F=B[0],j=r.convert(w.format,w.colorSpace),K=r.convert(w.type),mt=S(w.internalFormat,j,K,w.normalized,w.colorSpace),R=w.isVideoTexture!==!0,it=H.__version===void 0||et===!0,Q=ft.dataReady,gt=E(w,F);St(i.TEXTURE_CUBE_MAP,w);let xt;if(L){R&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,mt,F.width,F.height);for(let dt=0;dt<6;dt++){xt=B[dt].mipmaps;for(let vt=0;vt<xt.length;vt++){let Ct=xt[vt];w.format!==Wn?j!==null?R?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt,0,0,Ct.width,Ct.height,j,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt,mt,Ct.width,Ct.height,0,Ct.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt,0,0,Ct.width,Ct.height,j,K,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt,mt,Ct.width,Ct.height,0,j,K,Ct.data)}}}else{if(xt=w.mipmaps,R&&it){xt.length>0&&gt++;let dt=Yt(B[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,mt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(D){R?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,B[dt].width,B[dt].height,j,K,B[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,mt,B[dt].width,B[dt].height,0,j,K,B[dt].data);for(let vt=0;vt<xt.length;vt++){let Jt=xt[vt].image[dt].image;R?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt+1,0,0,Jt.width,Jt.height,j,K,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt+1,mt,Jt.width,Jt.height,0,j,K,Jt.data)}}else{R?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,j,K,B[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,mt,j,K,B[dt]);for(let vt=0;vt<xt.length;vt++){let Ct=xt[vt];R?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt+1,0,0,j,K,Ct.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt+1,mt,j,K,Ct.image[dt])}}}m(w)&&v(i.TEXTURE_CUBE_MAP),H.__version=ft.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Lt(O,w,tt,et,ft,H){let _=r.convert(tt.format,tt.colorSpace),b=r.convert(tt.type),A=S(tt.internalFormat,_,b,tt.normalized,tt.colorSpace),L=n.get(w),D=n.get(tt);if(D.__renderTarget=w,!L.__hasExternalTextures){let B=Math.max(1,w.width>>H),F=Math.max(1,w.height>>H);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,H,A,B,F,w.depth,0,_,b,null):e.texImage2D(ft,H,A,B,F,0,_,b,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Kt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ft,D.__webglTexture,0,Vt(w)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ft,D.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(O,w,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,O),w.depthBuffer){let et=w.depthTexture,ft=et&&et.isDepthTexture?et.type:null,H=M(w.stencilBuffer,ft),_=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(w),H,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(w),H,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,H,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_,i.RENDERBUFFER,O)}else{let et=w.textures;for(let ft=0;ft<et.length;ft++){let H=et[ft],_=r.convert(H.format,H.colorSpace),b=r.convert(H.type),A=S(H.internalFormat,_,b,H.normalized,H.colorSpace);Kt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt(w),A,w.width,w.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt(w),A,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,A,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(O,w,tt){let et=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=n.get(w.depthTexture);if(ft.__renderTarget=w,(!ft.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),et){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,w.depthTexture.addEventListener("dispose",I)),ft.__webglTexture===void 0){ft.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),St(i.TEXTURE_CUBE_MAP,w.depthTexture);let L=r.convert(w.depthTexture.format),D=r.convert(w.depthTexture.type),B;w.depthTexture.format===di?B=i.DEPTH_COMPONENT24:w.depthTexture.format===cs&&(B=i.DEPTH24_STENCIL8);for(let F=0;F<6;F++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,B,w.width,w.height,0,L,D,null)}}else G(w.depthTexture,0);let H=ft.__webglTexture,_=Vt(w),b=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,A=w.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===di)Kt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,b,H,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,A,b,H,0);else if(w.depthTexture.format===cs)Kt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,b,H,0,_):i.framebufferTexture2D(i.FRAMEBUFFER,A,b,H,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(O){let w=n.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){let et=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){let ft=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",ft)};et.addEventListener("dispose",ft),w.__depthDisposeCallback=ft}w.__boundDepthTexture=et}if(O.depthTexture&&!w.__autoAllocateDepthBuffer)if(tt)for(let et=0;et<6;et++)Ht(w.__webglFramebuffer[et],O,et);else{let et=O.texture.mipmaps;et&&et.length>0?Ht(w.__webglFramebuffer[0],O,0):Ht(w.__webglFramebuffer,O,0)}else if(tt){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=i.createRenderbuffer(),It(w.__webglDepthbuffer[et],O,!1);else{let ft=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=w.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,H)}}else{let et=O.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),It(w.__webglDepthbuffer,O,!1);else{let ft=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,H)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(O,w,tt){let et=n.get(O);w!==void 0&&Lt(et.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&ut(O)}function Mt(O){let w=O.texture,tt=n.get(O),et=n.get(w);O.addEventListener("dispose",y);let ft=O.textures,H=O.isWebGLCubeRenderTarget===!0,_=ft.length>1;if(_||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=w.version,o.memory.textures++),H){tt.__webglFramebuffer=[];for(let b=0;b<6;b++)if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer[b]=[];for(let A=0;A<w.mipmaps.length;A++)tt.__webglFramebuffer[b][A]=i.createFramebuffer()}else tt.__webglFramebuffer[b]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){tt.__webglFramebuffer=[];for(let b=0;b<w.mipmaps.length;b++)tt.__webglFramebuffer[b]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(_)for(let b=0,A=ft.length;b<A;b++){let L=n.get(ft[b]);L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Kt(O)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let b=0;b<ft.length;b++){let A=ft[b];tt.__webglColorRenderbuffer[b]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[b]);let L=r.convert(A.format,A.colorSpace),D=r.convert(A.type),B=S(A.internalFormat,L,D,A.normalized,A.colorSpace,O.isXRRenderTarget===!0),F=Vt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,B,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b,i.RENDERBUFFER,tt.__webglColorRenderbuffer[b])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),It(tt.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),St(i.TEXTURE_CUBE_MAP,w);for(let b=0;b<6;b++)if(w.mipmaps&&w.mipmaps.length>0)for(let A=0;A<w.mipmaps.length;A++)Lt(tt.__webglFramebuffer[b][A],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+b,A);else Lt(tt.__webglFramebuffer[b],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+b,0);m(w)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_){for(let b=0,A=ft.length;b<A;b++){let L=ft[b],D=n.get(L),B=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(B=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,D.__webglTexture),St(B,L),Lt(tt.__webglFramebuffer,O,L,i.COLOR_ATTACHMENT0+b,B,0),m(L)&&v(B)}e.unbindTexture()}else{let b=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(b=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(b,et.__webglTexture),St(b,w),w.mipmaps&&w.mipmaps.length>0)for(let A=0;A<w.mipmaps.length;A++)Lt(tt.__webglFramebuffer[A],O,w,i.COLOR_ATTACHMENT0,b,A);else Lt(tt.__webglFramebuffer,O,w,i.COLOR_ATTACHMENT0,b,0);m(w)&&v(b),e.unbindTexture()}O.depthBuffer&&ut(O)}function Et(O){let w=O.textures;for(let tt=0,et=w.length;tt<et;tt++){let ft=w[tt];if(m(ft)){let H=T(O),_=n.get(ft).__webglTexture;e.bindTexture(H,_),v(H),e.unbindTexture()}}}let wt=[],Ut=[];function Bt(O){if(O.samples>0){if(Kt(O)===!1){let w=O.textures,tt=O.width,et=O.height,ft=i.COLOR_BUFFER_BIT,H=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_=n.get(O),b=w.length>1;if(b)for(let L=0;L<w.length;L++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_.__webglMultisampledFramebuffer);let A=O.texture.mipmaps;A&&A.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglFramebuffer);for(let L=0;L<w.length;L++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),b){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_.__webglColorRenderbuffer[L]);let D=n.get(w[L]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,tt,et,0,0,tt,et,ft,i.NEAREST),c===!0&&(wt.length=0,Ut.length=0,wt.push(i.COLOR_ATTACHMENT0+L),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(wt.push(H),Ut.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),b)for(let L=0;L<w.length;L++){e.bindFramebuffer(i.FRAMEBUFFER,_.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.RENDERBUFFER,_.__webglColorRenderbuffer[L]);let D=n.get(w[L]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+L,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let w=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Vt(O){return Math.min(s.maxSamples,O.samples)}function Kt(O){let w=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function J(O){let w=o.render.frame;u.get(O)!==w&&(u.set(O,w),O.update())}function re(O,w){let tt=O.colorSpace,et=O.format,ft=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==Wr&&tt!==Di&&(xe.getTransfer(tt)===Me?(et!==Wn||ft!==Tn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",tt)),w}function Yt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.getTextureUnits=k,this.setTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=_t,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function nb(i,t){function e(n,s=Di){let r,o=xe.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return i.BYTE;if(n===Ru)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Lu)return i.RGB;if(n===Wn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===wo||n===To||n===Ao||n===Ro)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===vc||n===bc||n===Mc||n===Sc||n===Co||n===Ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===vc)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mc)return r.COMPRESSED_R11_EAC;if(n===Sc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Co)return r.COMPRESSED_RG11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Nc||n===Dc||n===Uc||n===Fc||n===Oc||n===Bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===zc||n===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Gc||n===Io||n===Wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
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

}`,th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:ib,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eh=class extends pi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,x=typeof XRWebGLBinding<"u",p=new th,m={},v=e.getContextAttributes(),T=null,S=null,M=[],E=[],I=new Rt,y=null,P=null,U=new xn;U.viewport=new Se;let N=new xn;N.viewport=new Se;let z=[U,N],q=new ic,k=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ht=M[at];return ht===void 0&&(ht=new rr,M[at]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(at){let ht=M[at];return ht===void 0&&(ht=new rr,M[at]=ht),ht.getGripSpace()},this.getHand=function(at){let ht=M[at];return ht===void 0&&(ht=new rr,M[at]=ht),ht.getHandSpace()};function V(at){let ht=E.indexOf(at.inputSource);if(ht===-1)return;let Tt=M[ht];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,l||o),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function nt(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",G);for(let at=0;at<M.length;at++){let ht=E[at];ht!==null&&(E[at]=null,M[at].disconnect(ht))}k=null,$=null,p.reset();for(let at in m)delete m[at];if(t.setRenderTarget(T),h=null,f=null,d=null,s=null,S=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),P!==null){let at=P.camera;at.fov=P.fov,at.zoom=P.zoom,at.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(at){l=at},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ft=null,Lt=null;v.depth&&(Lt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?cs:di,Ft=v.stencil?yr:ii);let It={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Mn(f.textureWidth,f.textureHeight,{format:Wn,type:Tn,depthTexture:new $i(f.textureWidth,f.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Mn(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(at){for(let ht=0;ht<at.removed.length;ht++){let Tt=at.removed[ht],Ft=E.indexOf(Tt);Ft>=0&&(E[Ft]=null,M[Ft].disconnect(Tt))}for(let ht=0;ht<at.added.length;ht++){let Tt=at.added[ht],Ft=E.indexOf(Tt);if(Ft===-1){for(let It=0;It<M.length;It++)if(It>=E.length){E.push(Tt),Ft=It;break}else if(E[It]===null){E[It]=Tt,Ft=It;break}if(Ft===-1)break}let Lt=M[Ft];Lt&&Lt.connect(Tt)}}let X=new W,Y=new W;function Z(at,ht,Tt){X.setFromMatrixPosition(ht.matrixWorld),Y.setFromMatrixPosition(Tt.matrixWorld);let Ft=X.distanceTo(Y),Lt=ht.projectionMatrix.elements,It=Tt.projectionMatrix.elements,Ht=Lt[14]/(Lt[10]-1),ut=Lt[14]/(Lt[10]+1),_t=(Lt[9]+1)/Lt[5],Mt=(Lt[9]-1)/Lt[5],Et=(Lt[8]-1)/Lt[0],wt=(It[8]+1)/It[0],Ut=Ht*Et,Bt=Ht*wt,Vt=Ft/(-Et+wt),Kt=Vt*-Et;if(ht.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Kt),at.translateZ(Vt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Lt[10]===-1)at.projectionMatrix.copy(ht.projectionMatrix),at.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let J=Ht+Vt,re=ut+Vt,Yt=Ut-Kt,O=Bt+(Ft-Kt),w=_t*ut/re*J,tt=Mt*ut/re*J;at.projectionMatrix.makePerspective(Yt,O,w,tt,J,re),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function ot(at,ht){ht===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ht.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let ht=at.near,Tt=at.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),q.near=N.near=U.near=ht,q.far=N.far=U.far=Tt,(k!==q.near||$!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),k=q.near,$=q.far),q.layers.mask=at.layers.mask|6,U.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;let Ft=at.parent,Lt=q.cameras;ot(q,Ft);for(let It=0;It<Lt.length;It++)ot(Lt[It],Ft);Lt.length===2?Z(q,U,N):q.projectionMatrix.copy(U.projectionMatrix),P===null&&at.isPerspectiveCamera&&(P={camera:at,fov:at.fov,zoom:at.zoom}),yt(at,q,Ft)};function yt(at,ht,Tt){Tt===null?at.matrix.copy(ht.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ht.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ht.projectionMatrix),at.projectionMatrixInverse.copy(ht.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=nr*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(at){c=at,f!==null&&(f.fixedFoveation=at),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=at)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(at){return m[at]};let bt=null;function St(at,ht){if(u=ht.getViewerPose(l||o),g=ht,u!==null){let Tt=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let Ft=!1;Tt.length!==q.cameras.length&&(q.cameras.length=0,Ft=!0);for(let ut=0;ut<Tt.length;ut++){let _t=Tt[ut],Mt=null;if(h!==null)Mt=h.getViewport(_t);else{let wt=d.getViewSubImage(f,_t);Mt=wt.viewport,ut===0&&(t.setRenderTargetTextures(S,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(S))}let Et=z[ut];Et===void 0&&(Et=new xn,Et.layers.enable(ut),Et.viewport=new Se,z[ut]=Et),Et.matrix.fromArray(_t.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(_t.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ut===0&&(q.matrix.copy(Et.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ft===!0&&q.cameras.push(Et)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ut=d.getDepthInformation(Tt[0]);ut&&ut.isValid&&ut.texture&&p.init(ut,s.renderState)}if(Lt&&Lt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let ut=0;ut<Tt.length;ut++){let _t=Tt[ut].camera;if(_t){let Mt=m[_t];Mt||(Mt=new no,m[_t]=Mt);let Et=d.getCameraImage(_t);Mt.sourceTexture=Et}}}}for(let Tt=0;Tt<M.length;Tt++){let Ft=E[Tt],Lt=M[Tt];Ft!==null&&Lt!==void 0&&Lt.update(Ft,ht,l||o)}bt&&bt(at,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Pt=new Pd;Pt.setAnimationLoop(St),this.setAnimationLoop=function(at){bt=at},this.dispose=function(){}}},rb=new ye,Od=new ae;Od.set(-1,0,0,0,1,0,0,0,1);function ob(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ou(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,T,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,T):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),T=v.envMap,S=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(rb.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Od),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ab(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let E=M.program;n.uniformBlockBinding(S,E)}function l(S,M){let E=s[S.id];E===void 0&&(p(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",v));let I=M.program;n.updateUBOMapping(S,I);let y=t.render.frame;r[S.id]!==y&&(f(S),r[S.id]=y)}function u(S){let M=d();S.__bindingPointIndex=M;let E=i.createBuffer(),I=S.__size,y=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let M=s[S.id],E=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,P=E.length;y<P;y++){let U=E[y];if(Array.isArray(U))for(let N=0,z=U.length;N<z;N++)h(U[N],y,N,I);else h(U,y,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,M,E,I){if(x(S,M,E,I)===!0){let y=S.__offset,P=S.value;if(Array.isArray(P)){let U=0;for(let N=0;N<P.length;N++){let z=P[N],q=m(z);g(z,S.__data,U),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(P,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,S.__data)}}function g(S,M,E){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,E)}function x(S,M,E,I){let y=S.value,P=M+"_"+E;if(I[P]===void 0)return typeof y=="number"||typeof y=="boolean"?I[P]=y:ArrayBuffer.isView(y)?I[P]=y.slice():I[P]=y.clone(),!0;{let U=I[P];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return I[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(U.equals(y)===!1)return U.copy(y),!0}}return!1}function p(S){let M=S.uniforms,E=0,I=16;for(let P=0,U=M.length;P<U;P++){let N=Array.isArray(M[P])?M[P]:[M[P]];for(let z=0,q=N.length;z<q;z++){let k=N[z],$=Array.isArray(k.value)?k.value:[k.value];for(let V=0,nt=$.length;V<nt;V++){let G=$[V],X=m(G),Y=E%I,Z=Y%X.boundary,ot=Y+Z;E+=Z,ot!==0&&I-ot<X.storage&&(E+=I-ot),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=X.storage}}}let y=E%I;return y>0&&(E+=I-y),S.__size=E,S.__cache={},this}function m(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):te("WebGLRenderer: Unsupported uniform value type.",S),M}function v(S){let M=S.target;M.removeEventListener("dispose",v);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function T(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var cb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function lb(){return yi===null&&(yi=new jr(cb,16,16,ls,si),yi.name="DFG_LUT",yi.minFilter=sn,yi.magFilter=sn,yi.wrapS=hi,yi.wrapT=hi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Kc=class{constructor(t={}){let{canvas:e=Qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=h,p=new Set([pc,dc,fc]),m=new Set([Tn,ii,xr,yr,lc,uc]),v=new Uint32Array(4),T=new Int32Array(4),S=new W,M=null,E=null,I=[],y=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,N=!1,z=null,q=null,k=null,$=null;this._outputColorSpace=We;let V=0,nt=0,G=null,X=-1,Y=null,Z=new Se,ot=new Se,yt=null,bt=new Zt(0),St=0,Pt=e.width,at=e.height,ht=1,Tt=null,Ft=null,Lt=new Se(0,0,Pt,at),It=new Se(0,0,Pt,at),Ht=!1,ut=new ar,_t=!1,Mt=!1,Et=new ye,wt=new W,Ut=new Se,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Kt(){return G===null?ht:1}let J=n;function re(C,st){return e.getContext(C,st)}let Yt,O,w,tt,et,ft,H,_,b,A,L,D,B,F,j,K,mt,R,it,Q,gt,xt,dt;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",pe,!1),J===null){let st="webgl2";if(J=re(st,C),J===null)throw re(st)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}vt()}catch(C){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),ie("WebGLRenderer: "+C.message),C}function vt(){Yt=new g_(J),Yt.init(),gt=new nb(J,Yt),O=new o_(J,Yt,t,gt),w=new tb(J,Yt),O.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),q=J.createFramebuffer(),k=J.createFramebuffer(),$=J.createFramebuffer(),tt=new __(J),et=new zv,ft=new eb(J,Yt,w,et,O,gt,tt),H=new m_(U),_=new b0(J),xt=new s_(J,_),b=new x_(J,_,tt,xt),A=new b_(J,b,_,xt,tt),R=new v_(J,O,ft),j=new a_(et),L=new kv(U,H,Yt,O,xt,j),D=new ob(U,et),B=new Vv,F=new Zv(Yt),mt=new i_(U,H,w,A,g,c),K=new Qv(U,A,O),dt=new ab(J,tt,O,w),it=new r_(J,Yt,tt),Q=new y_(J,Yt,tt),tt.programs=L.programs,U.capabilities=O,U.extensions=Yt,U.properties=et,U.renderLists=B,U.shadowMap=K,U.state=w,U.info=tt}x!==Tn&&(P=new S_(x,e.width,e.height,a,s,r));let Ct=new eh(U,J);this.xr=Ct,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let C=Yt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Yt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(C){C!==void 0&&(ht=C,this.setSize(Pt,at,!1))},this.getSize=function(C){return C.set(Pt,at)},this.setSize=function(C,st,pt=!0){if(Ct.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}Pt=C,at=st,e.width=Math.floor(C*ht),e.height=Math.floor(st*ht),pt===!0&&(e.style.width=C+"px",e.style.height=st+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,C,st)},this.getDrawingBufferSize=function(C){return C.set(Pt*ht,at*ht).floor()},this.setDrawingBufferSize=function(C,st,pt){Pt=C,at=st,ht=pt,e.width=Math.floor(C*pt),e.height=Math.floor(st*pt),this.setViewport(0,0,C,st)},this.setEffects=function(C){if(x===Tn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let st=0;st<C.length;st++)if(C[st].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(Lt)},this.setViewport=function(C,st,pt,lt){C.isVector4?Lt.set(C.x,C.y,C.z,C.w):Lt.set(C,st,pt,lt),w.viewport(Z.copy(Lt).multiplyScalar(ht).round())},this.getScissor=function(C){return C.copy(It)},this.setScissor=function(C,st,pt,lt){C.isVector4?It.set(C.x,C.y,C.z,C.w):It.set(C,st,pt,lt),w.scissor(ot.copy(It).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(C){w.setScissorTest(Ht=C)},this.setOpaqueSort=function(C){Tt=C},this.setTransparentSort=function(C){Ft=C},this.getClearColor=function(C){return C.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(C=!0,st=!0,pt=!0){let lt=0;if(C){let ct=!1;if(G!==null){let Nt=G.texture.format;ct=p.has(Nt)}if(ct){let Nt=G.texture.type,kt=m.has(Nt),Ot=mt.getClearColor(),Wt=mt.getClearAlpha(),$t=Ot.r,he=Ot.g,ge=Ot.b;kt?(v[0]=$t,v[1]=he,v[2]=ge,v[3]=Wt,J.clearBufferuiv(J.COLOR,0,v)):(T[0]=$t,T[1]=he,T[2]=ge,T[3]=Wt,J.clearBufferiv(J.COLOR,0,T))}else lt|=J.COLOR_BUFFER_BIT}st&&(lt|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pt&&(lt|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&J.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),z=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),mt.dispose(),B.dispose(),F.dispose(),et.dispose(),H.dispose(),A.dispose(),xt.dispose(),dt.dispose(),L.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",qt),Ct.removeEventListener("sessionend",ee),ne.stop()};function Jt(C){C.preventDefault(),qr("WebGLRenderer: Context Lost."),N=!0}function jt(){qr("WebGLRenderer: Context Restored."),N=!1;let C=tt.autoReset,st=K.enabled,pt=K.autoUpdate,lt=K.needsUpdate,ct=K.type;vt(),tt.autoReset=C,K.enabled=st,K.autoUpdate=pt,K.needsUpdate=lt,K.type=ct}function pe(C){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _e(C){let st=C.target;st.removeEventListener("dispose",_e),Xe(st)}function Xe(C){Le(C),et.remove(C)}function Le(C){let st=et.get(C).programs;st!==void 0&&(st.forEach(function(pt){L.releaseProgram(pt)}),C.isShaderMaterial&&L.releaseShaderCache(C))}this.renderBufferDirect=function(C,st,pt,lt,ct,Nt){st===null&&(st=Bt);let kt=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,Ot=Ns(C,st,pt,lt,ct);w.setMaterial(lt,kt);let Wt=pt.index,$t=1;if(lt.wireframe===!0){if(Wt=b.getWireframeAttribute(pt),Wt===void 0)return;$t=2}let he=pt.drawRange,ge=pt.attributes.position,Xt=he.start*$t,be=(he.start+he.count)*$t;Nt!==null&&(Xt=Math.max(Xt,Nt.start*$t),be=Math.min(be,(Nt.start+Nt.count)*$t)),Wt!==null?(Xt=Math.max(Xt,0),be=Math.min(be,Wt.count)):ge!=null&&(Xt=Math.max(Xt,0),be=Math.min(be,ge.count));let Ve=be-Xt;if(Ve<0||Ve===1/0)return;xt.setup(ct,lt,Ot,pt,Wt);let Ne,Ae=it;if(Wt!==null&&(Ne=_.get(Wt),Ae=Q,Ae.setIndex(Ne)),ct.isMesh)lt.wireframe===!0?(w.setLineWidth(lt.wireframeLinewidth*Kt()),Ae.setMode(J.LINES)):Ae.setMode(J.TRIANGLES);else if(ct.isLine){let ln=lt.linewidth;ln===void 0&&(ln=1),w.setLineWidth(ln*Kt()),ct.isLineSegments?Ae.setMode(J.LINES):ct.isLineLoop?Ae.setMode(J.LINE_LOOP):Ae.setMode(J.LINE_STRIP)}else ct.isPoints?Ae.setMode(J.POINTS):ct.isSprite&&Ae.setMode(J.TRIANGLES);if(ct.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{let ln=ct._multiDrawStarts,zt=ct._multiDrawCounts,mn=ct._multiDrawCount,ve=Wt?_.get(Wt).bytesPerElement:1,Bn=et.get(lt).currentProgram.getUniforms();for(let li=0;li<mn;li++)Bn.setValue(J,"_gl_DrawID",li),Ae.render(ln[li]/ve,zt[li])}else if(ct.isInstancedMesh)Ae.renderInstances(Xt,Ve,ct.count);else if(pt.isInstancedBufferGeometry){let ln=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,zt=Math.min(pt.instanceCount,ln);Ae.renderInstances(Xt,Ve,zt)}else Ae.render(Xt,Ve)};function Be(C,st,pt,lt){z!==null&&C.isNodeMaterial&&z.setObject(lt,C),_t===!0&&j.setState(C,pt,!1),C.transparent===!0&&C.side===rn&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,en(C,st,lt),C.side=rs,C.needsUpdate=!0,en(C,st,lt),C.side=rn):en(C,st,lt)}this.compile=function(C,st,pt=null){pt===null&&(pt=C),z!==null&&z.renderStart(C,st,pt),E=F.get(pt),E.init(st),y.push(E),pt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(st.layers)&&(E.pushLight(ct),ct.castShadow&&E.pushShadow(ct))}),C!==pt&&C.traverseVisible(function(ct){ct.isLight&&ct.layers.test(st.layers)&&(E.pushLight(ct),ct.castShadow&&E.pushShadow(ct))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Mt=this.localClippingEnabled,_t=j.init(this.clippingPlanes,Mt),_t===!0&&j.setGlobalState(this.clippingPlanes,st),z!==null&&K.render(E.state.shadowsArray,pt,st);let lt=new Set;return C.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;let Nt=ct.material;if(Nt)if(Array.isArray(Nt))for(let kt=0;kt<Nt.length;kt++){let Ot=Nt[kt];Be(Ot,pt,st,ct),lt.add(Ot)}else Be(Nt,pt,st,ct),lt.add(Nt)}),E=y.pop(),z!==null&&z.renderEnd(),lt},this.compileAsync=function(C,st,pt=null){let lt=this.compile(C,st,pt);return new Promise(ct=>{function Nt(){if(lt.forEach(function(kt){let Wt=et.get(kt).currentProgram;(Wt===void 0||Wt.isReady())&&lt.delete(kt)}),lt.size===0){ct(C);return}setTimeout(Nt,10)}Yt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let $e=null;function At(C){$e&&$e(C)}function qt(){ne.stop()}function ee(){ne.start()}let ne=new Pd;ne.setAnimationLoop(At),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(C){$e=C,Ct.setAnimationLoop(C),C===null?ne.stop():ne.start()},Ct.addEventListener("sessionstart",qt),Ct.addEventListener("sessionend",ee),this.render=function(C,st){if(st!==void 0&&st.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(C,st);let pt=Ct.enabled===!0&&Ct.isPresenting===!0,lt=P!==null&&(G===null||pt)&&P.begin(U,G);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(st),st=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,st,G),E=F.get(C,y.length),E.init(st),E.state.textureUnits=ft.getTextureUnits(),y.push(E),Et.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),ut.setFromProjectionMatrix(Et,ti,st.reversedDepth),Mt=this.localClippingEnabled,_t=j.init(this.clippingPlanes,Mt),M=B.get(C,I.length),M.init(),I.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){let kt=U.xr.getDepthSensingMesh();kt!==null&&Te(kt,st,-1/0,U.sortObjects)}Te(C,st,0,U.sortObjects),M.finish(),z!==null&&z.updateLights(E.state.lightsArray),U.sortObjects===!0&&M.sort(Tt,Ft),Vt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Vt&&mt.addToRenderList(M,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&j.beginShadows();let ct=E.state.shadowsArray;if(K.render(ct,C,st),_t===!0&&j.endShadows(),(lt&&P.hasRenderPass())===!1){let kt=M.opaque,Ot=M.transmissive;if(E.setupLights(),st.isArrayCamera){let Wt=st.cameras;if(Ot.length>0)for(let $t=0,he=Wt.length;$t<he;$t++){let ge=Wt[$t];Zn(kt,Ot,C,ge)}Vt&&mt.render(C);for(let $t=0,he=Wt.length;$t<he;$t++){let ge=Wt[$t];Rn(M,C,ge,ge.viewport)}}else Ot.length>0&&Zn(kt,Ot,C,st),Vt&&mt.render(C),Rn(M,C,st)}G!==null&&nt===0&&(ft.updateMultisampleRenderTarget(G),ft.updateRenderTargetMipmap(G)),lt&&P.end(U),C.isScene===!0&&C.onAfterRender(U,C,st),xt.resetDefaultState(),X=-1,Y=null,y.pop(),y.length>0?(E=y[y.length-1],ft.setTextureUnits(E.state.textureUnits),_t===!0&&j.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?M=I[I.length-1]:M=null,z!==null&&z.renderEnd()};function Te(C,st,pt,lt){if(C.visible===!1)return;if(C.layers.test(st.layers)){if(C.isGroup)pt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(st);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(ut)){lt&&Ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Et);let kt=A.update(C),Ot=C.material;Ot.visible&&M.push(C,kt,Ot,pt,Ut.z,null,st)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(ut))){let kt=A.update(C),Ot=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ut.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Ut.copy(kt.boundingSphere.center)),Ut.applyMatrix4(C.matrixWorld).applyMatrix4(Et)),Array.isArray(Ot)){let Wt=kt.groups;for(let $t=0,he=Wt.length;$t<he;$t++){let ge=Wt[$t],Xt=Ot[ge.materialIndex];Xt&&Xt.visible&&M.push(C,kt,Xt,pt,Ut.z,ge,st)}}else Ot.visible&&M.push(C,kt,Ot,pt,Ut.z,null,st)}}let Nt=C.children;for(let kt=0,Ot=Nt.length;kt<Ot;kt++)Te(Nt[kt],st,pt,lt)}function Rn(C,st,pt,lt){let{opaque:ct,transmissive:Nt,transparent:kt}=C;E.setupLightsView(pt),_t===!0&&j.setGlobalState(U.clippingPlanes,pt),lt&&w.viewport(Z.copy(lt)),ct.length>0&&On(ct,st,pt),Nt.length>0&&On(Nt,st,pt),kt.length>0&&On(kt,st,pt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Zn(C,st,pt,lt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[lt.id]===void 0){let Xt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[lt.id]=new Mn(1,1,{generateMipmaps:!0,type:Xt?si:Tn,minFilter:as,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Nt=E.state.transmissionRenderTarget[lt.id],kt=lt.viewport||Z;Nt.setSize(kt.z*U.transmissionResolutionScale,kt.w*U.transmissionResolutionScale);let Ot=U.getRenderTarget(),Wt=U.getActiveCubeFace(),$t=U.getActiveMipmapLevel();U.setRenderTarget(Nt),U.getClearColor(bt),St=U.getClearAlpha(),St<1&&U.setClearColor(16777215,.5),U.clear(),Vt&&mt.render(pt);let he=U.toneMapping;U.toneMapping=ni;let ge=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),E.setupLightsView(lt),_t===!0&&j.setGlobalState(U.clippingPlanes,lt),On(C,pt,lt),ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let be=0,Ve=st.length;be<Ve;be++){let Ne=st[be],{object:Ae,geometry:ln,material:zt,group:mn}=Ne;if(zt.side===rn&&Ae.layers.test(lt.layers)){let ve=zt.side;zt.side=_n,zt.needsUpdate=!0,fs(Ae,pt,lt,ln,zt,mn),zt.side=ve,zt.needsUpdate=!0,Xt=!0}}Xt===!0&&(ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt))}U.setRenderTarget(Ot,Wt,$t),U.setClearColor(bt,St),ge!==void 0&&(lt.viewport=ge),U.toneMapping=he}function On(C,st,pt){let lt=st.isScene===!0?st.overrideMaterial:null;for(let ct=0,Nt=C.length;ct<Nt;ct++){let kt=C[ct],{object:Ot,geometry:Wt,group:$t}=kt,he=kt.material;he.allowOverride===!0&&lt!==null&&(he=lt),Ot.layers.test(pt.layers)&&fs(Ot,st,pt,Wt,he,$t)}}function fs(C,st,pt,lt,ct,Nt){z!==null&&ct.isNodeMaterial&&z.setObject(C,ct),C.onBeforeRender(U,st,pt,lt,ct,Nt),C.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ct.onBeforeRender(U,st,pt,lt,C,Nt),ct.transparent===!0&&ct.side===rn&&ct.forceSinglePass===!1?(ct.side=_n,ct.needsUpdate=!0,U.renderBufferDirect(pt,st,lt,ct,C,Nt),ct.side=rs,ct.needsUpdate=!0,U.renderBufferDirect(pt,st,lt,ct,C,Nt),ct.side=rn):U.renderBufferDirect(pt,st,lt,ct,C,Nt),C.onAfterRender(U,st,pt,lt,ct,Nt)}function en(C,st,pt){st.isScene!==!0&&(st=Bt);let lt=et.get(C),ct=E.state.lights,Nt=E.state.shadowsArray,kt=ct.state.version,Ot=L.getParameters(C,ct.state,Nt,st,pt,E.state.lightProbeGridArray),Wt=L.getProgramCacheKey(Ot),$t=lt.programs;lt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?st.environment:null,lt.fog=st.fog;let he=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;lt.envMap=H.get(C.envMap||lt.environment,he),lt.envMapRotation=lt.environment!==null&&C.envMap===null?st.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",_e),$t=new Map,lt.programs=$t);let ge=$t.get(Wt);if(ge!==void 0){if(lt.currentProgram===ge&&lt.lightsStateVersion===kt)return Wo(C,Ot),ge}else Ot.uniforms=L.getUniforms(C),z!==null&&C.isNodeMaterial&&z.build(C,pt,Ot),C.onBeforeCompile(Ot,U),ge=L.acquireProgram(Ot,Wt),$t.set(Wt,ge),lt.uniforms=Ot.uniforms;let Xt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xt.clippingPlanes=j.uniform),Wo(C,Ot),lt.needsLights=bn(C),lt.lightsStateVersion=kt,lt.needsLights&&(Xt.ambientLightColor.value=ct.state.ambient,Xt.lightProbe.value=ct.state.probe,Xt.sunLights.value=ct.state.sun,Xt.sunLightShadows.value=ct.state.sunShadow,Xt.directionalLights.value=ct.state.directional,Xt.directionalLightShadows.value=ct.state.directionalShadow,Xt.spotLights.value=ct.state.spot,Xt.spotLightShadows.value=ct.state.spotShadow,Xt.rectAreaLights.value=ct.state.rectArea,Xt.ltc_1.value=ct.state.rectAreaLTC1,Xt.ltc_2.value=ct.state.rectAreaLTC2,Xt.pointLights.value=ct.state.point,Xt.pointLightShadows.value=ct.state.pointShadow,Xt.hemisphereLights.value=ct.state.hemi,Xt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Xt.sunShadowCascade.value=ct.state.sunShadowCascade,Xt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Xt.spotLightMatrix.value=ct.state.spotLightMatrix,Xt.spotLightMap.value=ct.state.spotLightMap,Xt.pointShadowMatrix.value=ct.state.pointShadowMatrix),lt.lightProbeGrid=E.state.lightProbeGridArray.length>0,lt.currentProgram=ge,lt.uniformsList=null,ge}function Ir(C){if(C.uniformsList===null){let st=C.currentProgram.getUniforms();C.uniformsList=br.seqWithValue(st.seq,C.uniforms)}return C.uniformsList}function Wo(C,st){let pt=et.get(C);pt.outputColorSpace=st.outputColorSpace,pt.batching=st.batching,pt.batchingColor=st.batchingColor,pt.instancing=st.instancing,pt.instancingColor=st.instancingColor,pt.instancingMorph=st.instancingMorph,pt.skinning=st.skinning,pt.morphTargets=st.morphTargets,pt.morphNormals=st.morphNormals,pt.morphColors=st.morphColors,pt.morphTargetsCount=st.morphTargetsCount,pt.numClippingPlanes=st.numClippingPlanes,pt.numIntersection=st.numClipIntersection,pt.vertexAlphas=st.vertexAlphas,pt.vertexTangents=st.vertexTangents,pt.toneMapping=st.toneMapping}function Xo(C,st){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;S.setFromMatrixPosition(st.matrixWorld);for(let pt=0,lt=C.length;pt<lt;pt++){let ct=C[pt];if(ct.texture!==null&&ct.boundingBox.containsPoint(S))return ct}return null}function Ns(C,st,pt,lt,ct){st.isScene!==!0&&(st=Bt),ft.resetTextureUnits();let Nt=st.fog,kt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?st.environment:null,Ot=G===null?U.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:xe.workingColorSpace,Wt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,$t=H.get(lt.envMap||kt,Wt),he=lt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,ge=!!pt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Xt=!!pt.morphAttributes.position,be=!!pt.morphAttributes.normal,Ve=!!pt.morphAttributes.color,Ne=ni;lt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ne=U.toneMapping);let Ae=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,ln=Ae!==void 0?Ae.length:0,zt=et.get(lt),mn=E.state.lights;if(_t===!0&&(Mt===!0||C!==Y)){let Ce=C===Y&&lt.id===X;j.setState(lt,C,Ce)}let ve=!1;lt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==mn.state.version||zt.outputColorSpace!==Ot||ct.isBatchedMesh&&zt.batching===!1||!ct.isBatchedMesh&&zt.batching===!0||ct.isBatchedMesh&&zt.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&zt.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&zt.instancing===!1||!ct.isInstancedMesh&&zt.instancing===!0||ct.isSkinnedMesh&&zt.skinning===!1||!ct.isSkinnedMesh&&zt.skinning===!0||ct.isInstancedMesh&&zt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&zt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&zt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&zt.instancingMorph===!1&&ct.morphTexture!==null||zt.envMap!==$t||lt.fog===!0&&zt.fog!==Nt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==j.numPlanes||zt.numIntersection!==j.numIntersection)||zt.vertexAlphas!==he||zt.vertexTangents!==ge||zt.morphTargets!==Xt||zt.morphNormals!==be||zt.morphColors!==Ve||zt.toneMapping!==Ne||zt.morphTargetsCount!==ln||!!zt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,zt.__version=lt.version);let Bn=zt.currentProgram;ve===!0&&(Bn=en(lt,st,ct),z&&lt.isNodeMaterial&&z.onUpdateProgram(lt,Bn,zt));let li=!1,zi=!1,Ds=!1,we=Bn.getUniforms(),ke=zt.uniforms;if(w.useProgram(Bn.program)&&(li=!0,zi=!0,Ds=!0),lt.id!==X&&(X=lt.id,zi=!0),zt.needsLights){let Ce=Xo(E.state.lightProbeGridArray,ct);zt.lightProbeGrid!==Ce&&(zt.lightProbeGrid=Ce,zi=!0)}if(li||Y!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),we.setValue(J,"projectionMatrix",C.projectionMatrix),we.setValue(J,"viewMatrix",C.matrixWorldInverse);let Vi=we.map.cameraPosition;Vi!==void 0&&Vi.setValue(J,wt.setFromMatrixPosition(C.matrixWorld)),O.logarithmicDepthBuffer&&we.setValue(J,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&we.setValue(J,"isOrthographic",C.isOrthographicCamera===!0),Y!==C&&(Y=C,zi=!0,Ds=!0)}if(zt.needsLights&&(mn.state.sunShadowMap.length>0&&we.setValue(J,"sunShadowMap",mn.state.sunShadowMap,ft),mn.state.directionalShadowMap.length>0&&we.setValue(J,"directionalShadowMap",mn.state.directionalShadowMap,ft),mn.state.spotShadowMap.length>0&&we.setValue(J,"spotShadowMap",mn.state.spotShadowMap,ft),mn.state.pointShadowMap.length>0&&we.setValue(J,"pointShadowMap",mn.state.pointShadowMap,ft)),ct.isSkinnedMesh){we.setOptional(J,ct,"bindMatrix"),we.setOptional(J,ct,"bindMatrixInverse");let Ce=ct.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),we.setValue(J,"boneTexture",Ce.boneTexture,ft))}ct.isBatchedMesh&&(we.setOptional(J,ct,"batchingTexture"),we.setValue(J,"batchingTexture",ct._matricesTexture,ft),we.setOptional(J,ct,"batchingIdTexture"),we.setValue(J,"batchingIdTexture",ct._indirectTexture,ft),we.setOptional(J,ct,"batchingColorTexture"),ct._colorsTexture!==null&&we.setValue(J,"batchingColorTexture",ct._colorsTexture,ft));let Hi=pt.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&R.update(ct,pt,Bn),(zi||zt.receiveShadow!==ct.receiveShadow)&&(zt.receiveShadow=ct.receiveShadow,we.setValue(J,"receiveShadow",ct.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&st.environment!==null&&(ke.envMapIntensity.value=st.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=lb()),zi){if(we.setValue(J,"toneMappingExposure",U.toneMappingExposure),zt.needsLights&&nn(ke,Ds),Nt&&lt.fog===!0&&D.refreshFogUniforms(ke,Nt),D.refreshMaterialUniforms(ke,lt,ht,at,E.state.transmissionRenderTarget[C.id]),zt.needsLights&&zt.lightProbeGrid){let Ce=zt.lightProbeGrid;ke.probesSH.value=Ce.texture,ke.probesMin.value.copy(Ce.boundingBox.min),ke.probesMax.value.copy(Ce.boundingBox.max),ke.probesResolution.value.copy(Ce.resolution)}br.upload(J,Ir(zt),ke,ft)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(br.upload(J,Ir(zt),ke,ft),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&we.setValue(J,"center",ct.center),we.setValue(J,"modelViewMatrix",ct.modelViewMatrix),we.setValue(J,"normalMatrix",ct.normalMatrix),we.setValue(J,"modelMatrix",ct.matrixWorld),lt.uniformsGroups!==void 0){let Ce=lt.uniformsGroups;for(let Vi=0,Us=Ce.length;Vi<Us;Vi++){let Ph=Ce[Vi];dt.update(Ph,Bn),dt.bind(Ph,Bn)}}return Bn}function nn(C,st){C.ambientLightColor.needsUpdate=st,C.lightProbe.needsUpdate=st,C.sunLights.needsUpdate=st,C.sunLightShadows.needsUpdate=st,C.directionalLights.needsUpdate=st,C.directionalLightShadows.needsUpdate=st,C.pointLights.needsUpdate=st,C.pointLightShadows.needsUpdate=st,C.spotLights.needsUpdate=st,C.spotLightShadows.needsUpdate=st,C.rectAreaLights.needsUpdate=st,C.hemisphereLights.needsUpdate=st}function bn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,st,pt){let lt=et.get(C);lt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),et.get(C.texture).__webglTexture=st,et.get(C.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:pt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,st){let pt=et.get(C);pt.__webglFramebuffer=st,pt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(C,st=0,pt=0){G=C,V=st,nt=pt;let lt=null,ct=!1,Nt=!1;if(C){let Ot=et.get(C);if(Ot.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(J.FRAMEBUFFER,Ot.__webglFramebuffer),Z.copy(C.viewport),ot.copy(C.scissor),yt=C.scissorTest,w.viewport(Z),w.scissor(ot),w.setScissorTest(yt),X=-1;return}else if(Ot.__webglFramebuffer===void 0)ft.setupRenderTarget(C);else if(Ot.__hasExternalTextures)ft.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let he=C.depthTexture;if(Ot.__boundDepthTexture!==he){if(he!==null&&et.has(he)&&(C.width!==he.image.width||C.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(C)}}let Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Nt=!0);let $t=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[st])?lt=$t[st][pt]:lt=$t[st],ct=!0):C.samples>0&&ft.useMultisampledRTT(C)===!1?lt=et.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?lt=$t[pt]:lt=$t,Z.copy(C.viewport),ot.copy(C.scissor),yt=C.scissorTest}else Z.copy(Lt).multiplyScalar(ht).floor(),ot.copy(It).multiplyScalar(ht).floor(),yt=Ht;if(pt!==0&&(lt=q),w.bindFramebuffer(J.FRAMEBUFFER,lt)&&w.drawBuffers(C,lt),w.viewport(Z),w.scissor(ot),w.setScissorTest(yt),ct){let Ot=et.get(C.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ot.__webglTexture,pt)}else if(Nt){let Ot=st;for(let Wt=0;Wt<C.textures.length;Wt++){let $t=et.get(C.textures[Wt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Wt,$t.__webglTexture,pt,Ot)}}else if(C!==null&&pt!==0){let Ot=et.get(C.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ot.__webglTexture,pt)}X=-1};function Jn(C){let st=et.get(C);return(st.__readFormat!==C.format||st.__readType!==C.type)&&(st.__readFormat=C.format,st.__readType=C.type,st.__formatReadable=O.textureFormatReadable(C.format),st.__typeReadable=O.textureTypeReadable(C.type)),st}this.readRenderTargetPixels=function(C,st,pt,lt,ct,Nt,kt,Ot=0){if(!(C&&C.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt){w.bindFramebuffer(J.FRAMEBUFFER,Wt);try{let $t=C.textures[Ot],he=$t.format,ge=$t.type;C.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ot);let Xt=Jn($t);if(Xt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=C.width-lt&&pt>=0&&pt<=C.height-ct&&J.readPixels(st,pt,lt,ct,gt.convert(he),gt.convert(ge),Nt)}finally{let $t=G!==null?et.get(G).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,st,pt,lt,ct,Nt,kt,Ot=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt)if(st>=0&&st<=C.width-lt&&pt>=0&&pt<=C.height-ct){w.bindFramebuffer(J.FRAMEBUFFER,Wt);let $t=C.textures[Ot],he=$t.format,ge=$t.type;C.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ot);let Xt=Jn($t);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,be),J.bufferData(J.PIXEL_PACK_BUFFER,Nt.byteLength,J.STREAM_READ),J.readPixels(st,pt,lt,ct,gt.convert(he),gt.convert(ge),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let Ve=G!==null?et.get(G).__webglFramebuffer:null;w.bindFramebuffer(J.FRAMEBUFFER,Ve);let Ne=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await ed(J,Ne,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,be),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Nt),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(be),J.deleteSync(Ne),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,st=null,pt=0){let lt=Math.pow(2,-pt),ct=Math.floor(C.image.width*lt),Nt=Math.floor(C.image.height*lt),kt=st!==null?st.x:0,Ot=st!==null?st.y:0;ft.setTexture2D(C,0),J.copyTexSubImage2D(J.TEXTURE_2D,pt,0,0,kt,Ot,ct,Nt),w.unbindTexture()},this.copyTextureToTexture=function(C,st,pt=null,lt=null,ct=0,Nt=0){let kt,Ot,Wt,$t,he,ge,Xt,be,Ve,Ne=C.isCompressedTexture?C.mipmaps[Nt]:C.image;if(pt!==null)kt=pt.max.x-pt.min.x,Ot=pt.max.y-pt.min.y,Wt=pt.isBox3?pt.max.z-pt.min.z:1,$t=pt.min.x,he=pt.min.y,ge=pt.isBox3?pt.min.z:0;else{let ke=Math.pow(2,-ct);kt=Math.floor(Ne.width*ke),Ot=Math.floor(Ne.height*ke),C.isDataArrayTexture?Wt=Ne.depth:C.isData3DTexture?Wt=Math.floor(Ne.depth*ke):Wt=1,$t=0,he=0,ge=0}lt!==null?(Xt=lt.x,be=lt.y,Ve=lt.z):(Xt=0,be=0,Ve=0);let Ae=gt.convert(st.format),ln=gt.convert(st.type),zt;st.isData3DTexture?(ft.setTexture3D(st,0),zt=J.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(ft.setTexture2DArray(st,0),zt=J.TEXTURE_2D_ARRAY):(ft.setTexture2D(st,0),zt=J.TEXTURE_2D),w.activeTexture(J.TEXTURE0),w.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,st.flipY),w.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),w.pixelStorei(J.UNPACK_ALIGNMENT,st.unpackAlignment);let mn=w.getParameter(J.UNPACK_ROW_LENGTH),ve=w.getParameter(J.UNPACK_IMAGE_HEIGHT),Bn=w.getParameter(J.UNPACK_SKIP_PIXELS),li=w.getParameter(J.UNPACK_SKIP_ROWS),zi=w.getParameter(J.UNPACK_SKIP_IMAGES);w.pixelStorei(J.UNPACK_ROW_LENGTH,Ne.width),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Ne.height),w.pixelStorei(J.UNPACK_SKIP_PIXELS,$t),w.pixelStorei(J.UNPACK_SKIP_ROWS,he),w.pixelStorei(J.UNPACK_SKIP_IMAGES,ge);let Ds=C.isDataArrayTexture||C.isData3DTexture,we=st.isDataArrayTexture||st.isData3DTexture;if(C.isDepthTexture){let ke=et.get(C),Hi=et.get(st),Ce=et.get(ke.__renderTarget),Vi=et.get(Hi.__renderTarget);w.bindFramebuffer(J.READ_FRAMEBUFFER,Ce.__webglFramebuffer),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Us=0;Us<Wt;Us++)Ds&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,et.get(C).__webglTexture,ct,ge+Us),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,et.get(st).__webglTexture,Nt,Ve+Us)),J.blitFramebuffer($t,he,kt,Ot,Xt,be,kt,Ot,J.DEPTH_BUFFER_BIT,J.NEAREST);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ct!==0||C.isRenderTargetTexture||et.has(C)){let ke=et.get(C),Hi=et.get(st);w.bindFramebuffer(J.READ_FRAMEBUFFER,k),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,$);for(let Ce=0;Ce<Wt;Ce++)Ds?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ke.__webglTexture,ct,ge+Ce):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ke.__webglTexture,ct),we?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Hi.__webglTexture,Nt,Ve+Ce):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Hi.__webglTexture,Nt),ct!==0?J.blitFramebuffer($t,he,kt,Ot,Xt,be,kt,Ot,J.COLOR_BUFFER_BIT,J.NEAREST):we?J.copyTexSubImage3D(zt,Nt,Xt,be,Ve+Ce,$t,he,kt,Ot):J.copyTexSubImage2D(zt,Nt,Xt,be,$t,he,kt,Ot);w.bindFramebuffer(J.READ_FRAMEBUFFER,null),w.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else we?C.isDataTexture||C.isData3DTexture?J.texSubImage3D(zt,Nt,Xt,be,Ve,kt,Ot,Wt,Ae,ln,Ne.data):st.isCompressedArrayTexture?J.compressedTexSubImage3D(zt,Nt,Xt,be,Ve,kt,Ot,Wt,Ae,Ne.data):J.texSubImage3D(zt,Nt,Xt,be,Ve,kt,Ot,Wt,Ae,ln,Ne):C.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Nt,Xt,be,kt,Ot,Ae,ln,Ne.data):C.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Nt,Xt,be,Ne.width,Ne.height,Ae,Ne.data):J.texSubImage2D(J.TEXTURE_2D,Nt,Xt,be,kt,Ot,Ae,ln,Ne);w.pixelStorei(J.UNPACK_ROW_LENGTH,mn),w.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ve),w.pixelStorei(J.UNPACK_SKIP_PIXELS,Bn),w.pixelStorei(J.UNPACK_SKIP_ROWS,li),w.pixelStorei(J.UNPACK_SKIP_IMAGES,zi),Nt===0&&st.generateMipmaps&&J.generateMipmap(zt),w.unbindTexture()},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&ft.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ft.setTextureCube(C,0):C.isData3DTexture?ft.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ft.setTexture2DArray(C,0):ft.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){V=0,nt=0,G=null,w.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};function Xn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new le,l=0;for(let u=0;u<i.length;++u){let d=i[u],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(d.morphAttributes[h])}if(t){let h;if(e)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(e){let u=0,d=[];for(let f=0;f<i.length;++f){let h=i[f].index;for(let g=0;g<h.count;++g)d.push(h.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(d)}for(let u in r){let d=Bd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let x=0;x<o[u].length;++x)h.push(o[u][x][f]);let g=Bd(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Bd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Ie(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let f=0,h=u.count;f<h;f++)for(let g=0;g<e;g++){let x=u.getComponent(f,g);a.setComponent(f+d,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var mm=Rl(tl(),1);var Fo=new W;function Yn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Fo.copy(t),Fo[n]=0,Fo.normalize();let l=.5*o/(o+a),u=1-Fo.angleTo(i)/c;return Math.sign(Fo[e])===1?u*l:a/(o+a)+l+l*(1-u)}var el=class i extends Re{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new W,l=new W,u=new W(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,g=d.length/6,x=new W,p=.5/o;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*r,d[m+1]=u.y*Math.sign(c.y)+l.y*r,d[m+2]=u.z*Math.sign(c.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),h[v+0]=Yn(x,l,"z","y",r,n),h[v+1]=1-Yn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),h[v+0]=1-Yn(x,l,"z","y",r,n),h[v+1]=1-Yn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),h[v+0]=1-Yn(x,l,"x","z",r,t),h[v+1]=Yn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),h[v+0]=1-Yn(x,l,"x","z",r,t),h[v+1]=1-Yn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),h[v+0]=1-Yn(x,l,"x","y",r,t),h[v+1]=1-Yn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),h[v+0]=Yn(x,l,"x","y",r,t),h[v+1]=1-Yn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var kd=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),ub=Math.PI*2;function hb(){let i=new ce,t=new Re(1,1,1),e=new Qe(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new He({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,d,f,h,g,x){let p=new ue(c,typeof l=="string"?s(l):l);return p.position.set(u,d,f),p.scale.set(h,g,x),a.add(p),p}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let d=u.map(h=>(h.updateMatrix(),h.geometry.toNonIndexed().applyMatrix4(h.matrix))),f=new ue(Xn(d),l);f.castShadow=u.some(h=>h.castShadow),d.forEach(h=>h.dispose()),i.remove(...u),i.add(f)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function fb({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new ze({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:rn});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let h of[-1,1])t(i,s?"#deb181":"#aa785d",h*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",h*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let d=(a+c)/2,f=c-a;for(let h of[-e/2+l/2,e/2-l/2]){t(i,o,h,c,0,l,1.8,n),t(i,u,h,d,0,l*.17,f,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,h,d,g,l,f,l)}for(let h of[-n/2+l/2,n/2-l/2])t(i,o,0,c,h,e-l*2,1.8,l),t(i,u,0,d,h,e-l*2,f,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function db({box:i,oval:t,root:e},n,s,r){let o=new ce;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ce;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function pb(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new ze({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),d=new ze({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,p=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,p,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let m=p-1.5,v=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],g*t+m*r,n+3+(2+p*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);v.rotation.z=m*.22}let f=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>db(i,x,r*(1.72-x*.17),g)),h=Array.from({length:5},(g,x)=>{let p=r*(.45+x%3*.18),m=c(o,d,0,0,0,p,p,p);return m.name="bubble-"+x,m});return g=>{for(let[x,{fish:p,tail:m}]of f.entries()){let v=g*(.43+x*.06)+x*2.07+.5,T=t*(.24+x*.036),S=e*(.17+x*.038);p.position.set(Math.cos(v)*T,n+10+x*3.65+Math.sin(v*1.7)*2.15,Math.sin(v)*S),p.rotation.y=-Math.atan2(Math.cos(v)*S,-Math.sin(v)*T),m.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,p]of h.entries()){let m=(g*.3+x/h.length)%1;p.position.set(t*.33+Math.sin(m*ub+x)*r,n+5+m*20,e*.23),p.visible=m>.08&&m<.94}}}function mb({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let f=0;f<16;f++)e(i,f%2?"#a98467":"#e1c491",(f*11%17/17-.5)*n*.81,r+3,(f*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let f=0;f<5;f++){let h=e(i,f%2?"#829468":"#a7ad78",-n*.37+f*a,r+6+f%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);h.rotation.z=(f-2)*.24}for(let f=0;f<7;f++)t(i,"#746462",(f/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ce;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(f,h)=>{let g=a*(1-h*.16);return e(l,h%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),d=[];for(let f of[-1,1]){e(l,"#463946",5.15*a,1.34*a,f*1.26*a,.49*a,.44*a,.31*a);for(let h of[-1,1]){let g=new ce;g.position.set(h*a*2.1,-.7*a,f*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*h*a,-.13*a,f*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=f*h*.28;for(let p of[-1,0,1])e(g,"#ecc297",(p*.42+.5)*a,-.55*a,f*2.28*a,.55*a,.22*a,.23*a);d.push({leg:g,side:f,front:h})}}for(let f=0;f<6;f++)e(l,"#96664f",(f%3-1)*2.2*a,1.88*a,(f<3?-.66:.66)*a,.66*a,.25*a,.46*a);return f=>{let h=f*.35+.7,g=Math.cos(h)*n*.13,x=Math.sin(h)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(f*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(h)*s*.09,-Math.sin(h)*n*.13);for(let[p,m]of u.entries()){let v=p+1;m.position.set(-(3.55+v*1.24)*a,-.19*v*a,Math.sin(f*1.75-v*.55)*v*a*.32)}for(let{leg:p,side:m,front:v}of d)p.rotation.y=Math.sin(f*3.6)*m*v*.31}}function zd(i,t,e){if(!Object.hasOwn(kd,i))return null;let n=kd[i],s=hb(),r=n==="aquarium",{base:o,top:a}=fb(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?pb(s,t,e,o,a,c):mb(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,d){l(Math.max(0,d))}}}var rt=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),gb=Object.freeze({sage:rt.sage,mint:rt.aqua,sky:rt.blue,peach:rt.peach,coral:"#cf8979",lavender:rt.lilac,butter:rt.honey,cream:rt.linen,white:rt.cream,oak:rt.oakLight,walnut:rt.walnut,charcoal:"#505b68",brass:rt.brass,terracotta:"#b97d63",forest:rt.moss,blush:rt.blush,teddy:"#aa8063",slate:"#9b9b9d"}),xb=new Set([rt.oak,rt.oakLight,rt.walnut]),yb=new Set([rt.sage,rt.moss,rt.linen,rt.lilac,rt.lilacLight,rt.blush,rt.peach,rt.oatmeal,rt.upholsteryShadow,rt.denim]);function _b(i,t){let e=xb.has(i)?1:yb.has(i)?2:0,n=i===rt.glass||i===rt.darkGlass||i===rt.blueWater,s=i===rt.brass,r=i===rt.steel||i===rt.basinSteel,o=new He({color:i,roughness:s||r?.37:n?.33:i===rt.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var sh=class{constructor(t,e){this.root=new ce,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,_b(e,this.grainDirection));let a=new ue(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),d=u>.2?new el(s,r,o,2,u):new Re(s,r,o);return this.part(d,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new En(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Qe(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new wn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Rt(l,u)),c=new ho(a,24);return c.scale(s,r,o),this.part(c,rt.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Xn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new ue(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ui(i,t,e,n,s,r,o=rt.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function Oo(i,t,e,n,s,r,o,a){let c=o===rt.linen?rt.binding:rt.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function vb(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?rt.upholsteryShadow:rt.moss,u=a?rt.oatmeal:rt.sage,d=o?t*.5:t,f=r&&!o?e*.57:e,h=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(Ui(i,h,g,d,f,5),i.box(h,5,g,d*.97,22,f*.98,l,8),r){let M=o?t*.52:t*.34,E=o?e*.38:e*.46,I=o?t*.22:-t*.32,y=o?c*e*.3:e*.25;Ui(i,I,y,M,E,5),i.box(I,5,y,M,22,E,l,8),i.box(I,25,y,M*.96,12,E*.9,n,5),o&&i.box(I,29,c*e*.464,M,26,x,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let M=e*.88/p;for(let E=0;E<p;E++){let I=-e*.44+M*(E+.5);i.box(h+x*.18,25,I,d*.76,12,M-3,n,5),i.box(h-d*.39,27,I,d*.22,31,M-1,u,8)}i.box(h,29,-c*e*.445,d*.88,20,x,u,6),Oo(i,h+d*.13,35,-e*.31,d*.42,M*.49,a?rt.sage:rt.peach,-.18),Oo(i,h+d*.12,35,e*.28,d*.4,M*.45,rt.linen,.2)}else{let M=t*.8/p;for(let E=0;E<p;E++){let I=-t*.4+M*(E+.5);i.box(I,25,g+f*.08,M-3,12,f*.7,n,6),i.box(I,27,g-f*.39,M-1,31,f*.24,u,7)}for(let E of[-t*.442,t*.442])i.box(E,26,g,x,22,f*.89,u,6);Oo(i,-t*.27,35,g-f*.15,t*.18,f*.34,rt.peach,-.18),Oo(i,t*.27,35,g-f*.12,t*.17,f*.33,rt.linen,.2)}let m=o?d*.67:d*.19,v=o?e*.14:f*.58,T=o?h+d*.06:d*.32,S=o?e*.13:g+f*.1;i.box(T,37.1,S,m,1.7,v,rt.lilacLight,.65);for(let M of[-1,1])i.box(T,38.82,S+M*v*.36,m*.9,.25,1.2,rt.lilac);return 58}function ri(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Ui(i,t,e,n,s,c,rt.walnut),i.box(t,c,e,n*.9,7,s*.92,rt.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,d=e-Math.cos(r)*s*.39;i.box(u,c+9,d,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function bb(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return ri(i,0,-e*.39,t*.2,e*.23,0,rt.denim),ri(i,0,e*.39,t*.2,e*.23,Math.PI,rt.denim),ri(i,-t*.415,0,t*.17,e*.27,Math.PI/2,rt.denim),ri(i,t*.415,0,t*.17,e*.27,-Math.PI/2,rt.denim),Ui(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,rt.walnut,3),i.box(0,37,0,t*.79,8,e*.57,rt.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,rt.linen,.6),46.4;if(r)ri(i,0,-e*.37,t*.2,e*.2,0,rt.sage),ri(i,0,e*.37,t*.2,e*.2,Math.PI,rt.blush),ri(i,-t*.38,0,t*.2,e*.2,Math.PI/2,rt.lilac),ri(i,t*.38,0,t*.2,e*.2,-Math.PI/2,rt.honey),i.disc(0,0,0,t*.13,5,e*.13,rt.walnut),i.disc(0,4,0,t*.045,31,e*.045,rt.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[rt.sage,rt.blush,rt.lilac,rt.honey];for(let u=0;u<c.length;u++)for(let d of[-1,1])ri(i,t*c[u],e*.37*d,t*(a?.19:.15),e*.23,d<0?0:Math.PI,l[(u+(d<0?0:2))%l.length]);Ui(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,rt.linen,.5)}return 42}function Mb(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,rt.ink,.5),i.box(t,e+1,n,s*.1,14,4,rt.ink,1),i.box(t,e+12,n,s,25,6,rt.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,rt.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,rt.blue,.2)}function Sb(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,d=s?r/2:0;s&&i.box(l,37,d+.8,a,7,u-1.6,n,2.4),i.box(l,4,d,a*.81,34,u*.81,rt.walnut,2.8);for(let f=0;f<3;f++){let h=6+f*9.7;i.box(l,h,d+u*.41,a*.74,8.4,2,rt.oak,.7),i.box(l,h+3,d+u*.43,a*.26,2,2,rt.brass,.5)}}return Mb(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,rt.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,rt.peach),81}function Hd(i,t,e,n,s,r){let o=new Nn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,d=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...d):o.lineTo(...d)}o.closePath();let a=new Ki(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function Eb(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ui(i,0,0,t,e,6,rt.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,rt.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,rt.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,rt.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,rt.lilacLight,1);let d=t>=145?[-t*.2,t*.2]:[0];for(let h of d)Oo(i,h,u+22,-e*.275,t*(d.length===2?.34:.49),e*.2,rt.linen,h<0?-.04:.04);let f=Math.min(t,e)*.045;for(let[h,g,x,p]of[[-.24,.12,1,rt.cream],[.23,.27,.79,rt.honey],[.08,.04,.57,rt.cream],[-.1,.34,.62,rt.honey]])Hd(i,t*h,u+30.8,e*g,f*x,p);for(let h of[-.32,-.17,0,.17,.32])i.box(t*h,u+30.71,e*.24,.85,.24,e*.33,rt.lilacLight,0);for(let h of[.09,.195,.3,.405])i.box(0,u+30.72,e*h,t*.71,.24,.9,rt.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,rt.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let d of[-1,1])i.box(t*.45*u,4,e*.46*d,5,l,6,rt.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let d=-3;d<=3;d++)i.box(t*.45*u,l-29,e*d*.105,3,20,3,n,.8)}return l}function wb(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ui(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,rt.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,rt.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let d=0;d<l;d++){let f=t*.89/l,h=(a-8)/c,g=f*(d-(l-1)/2),x=5+u*h;i.box(g,x,e*.46,f-2,h-1.5,2.9,n,1),i.oval(g,x+h*.45,e*.51,2.2,1.7,2.2,rt.brass)}return a+2}function Tb(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,rt.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,rt.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,rt.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?rt.lilac:rt.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,rt.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?rt.lilacLight:rt.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,rt.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,rt.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,rt.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Hd(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,rt.cream);return 5}function Ab(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let f of[-1,1])i.box(f*(t+s)/4,n-5,0,l,5,e,rt.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,rt.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,rt.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,rt.basinSteel);for(let f of[-1,1])i.box(f*s/2,n-4.5,o,u,5.25,r+u,rt.steel,.4),i.box(0,n-4.5,o+f*r/2,s,5.25,u,rt.steel,.4),i.disc(0,n-4.1,o+f*r/4,u,.6,u,rt.darkGlass);i.box(0,n-4.5,o,s,4.85,u,rt.steel,.4);let d=-s/2-u*1.15;i.disc(d,n,o,u*.8,u*2.9,u*.8,rt.steel),i.box(d+u,n+u*2.5,o,u*2.8,u*.7,u,rt.steel,.6)}function Rb(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?rt.sage:rt.walnut,2.3),s?Ab(i,t,e,r+2):i.box(0,r-3,0,t,5,e,rt.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let d=c?2.2:t*.29,f=c?e*.29:2.2,h=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(h,6,g,d,r*.67,f,a?rt.moss:rt.oak,.8),i.box(h,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,rt.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,rt.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let d=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,d,d,1,rt.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,rt.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,rt.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,rt.brass,1);return r+3}function Cb(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,rt.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,rt.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,rt.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,rt.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,rt.glass),i.disc(0,22,-e*.44,3.5,9,3.5,rt.brass),i.box(0,30,-e*.4,5,3.7,e*.1,rt.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,rt.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,rt.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,rt.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,rt.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,rt.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,rt.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,rt.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,rt.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,rt.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,rt.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,rt.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,rt.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,rt.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,rt.blush,1.7),36)}function Ib(i,t,e,n,s){let r=n?rt.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,rt.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,rt.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,rt.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,rt.linen,3.8),c+o*(n?.37:.28)}function Pb(i,t,e){let s=[rt.sage,rt.peach,rt.honey,rt.lilac,rt.blue,rt.blush];Ui(i,0,0,t*.96,e*.96,22,rt.sage),i.box(0,20,0,t*.94,7,e*.93,rt.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function Lb(i,t,e,n){let s=[rt.linen,n,rt.sand,rt.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function Nb(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,rt.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,rt.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,d=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,rt.moss);d.rotation.z=-c/u,d.rotation.x=l/u;let f=n?rt.sage:[rt.blush,rt.linen,rt.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,f)}return s*(n?.82:.65)}function Vd(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return zd(t,e,n);let s=gb[t.split("-").at(-1)],r=new sh(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=vb(r,e,n,s||(t==="sofa"?rt.linen:rt.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,rt.walnut,3.5),r.box(0,24,0,e,4,n,rt.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,rt.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,rt.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,rt.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,rt.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,rt.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=bb(r,e,n,s||rt.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=Sb(r,e,n,s||rt.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))ri(r,0,0,e,n,0,s||rt.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){ri(r,0,0,e,n,0,s||rt.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,rt.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=Eb(r,e,n,s||rt.lilac,t);else if(t==="rug")o=Tb(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=Rb(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=Cb(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=Nb(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,rt.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,rt.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,rt.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=wb(r,e,n,s||rt.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Ui(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||rt.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,rt.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=Ib(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=Lb(r,e,n,s||rt.sage);else if(t.startsWith("baby-activities-"))o=Pb(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||rt.peach),r.ring(0,a,0,a*.95,a*.95,1.2,rt.linen),o=a*2}else return null;return r.finish(o)}var Gt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},ko=Math.PI,rh=2*ko,Db=new Set(["unknown","unavailable"]),qn=(i,t,e)=>Math.max(t,Math.min(e,i)),Bo=(i,t)=>Number.isFinite(i)?qn(i,12,480):t,Xd=.96,Yd=.09;function qd(i,t,e){let n=Bo(i.w,42),s=Bo(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*Yd)<=s*Xd/2}var de=(i,t={})=>new He({color:i,roughness:.83,...t}),oh=i=>String(i?.state??"unknown"),Cs=i=>!Db.has(oh(i)),Er=i=>Cs(i)&&(i.active===!0||i.state==="on"),Ub=i=>Er(i)?Number.isFinite(i.attributes?.brightness)?qn(i.attributes.brightness/255,0,1):1:0;function Fi(i,t,e,n=0,s=0,r=0){let o=new ue(t,e);return o.position.set(n,s,r),i.add(o),o}function tn(i,t,e,n,s,r=0,o=0,a=0){return Fi(i,new Re(t,e,n),s,r,o,a)}function pn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,d=l-e/2,f=new Nn;f.moveTo(u,d),f.lineTo(-u,d),f.lineTo(-u,-d),f.lineTo(u,-d),f.closePath();let h=new Li(f,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return h.translate(0,0,l-n/2),Fi(i,h,s,r,o,a)}function Je(i,t,e,n,s,r=0,o=0,a=0,c=16){return Fi(i,new En(t,e,n,c),s,r,o,a)}function oi(i,t,e,n,s,r){return Fi(i,new Qe(t,10,7),e,n,s,r)}function Sr(i,t=0,e=0,n=0){let s=new ce;return s.position.set(t,e,n),i.add(s),s}function Fb(i,t,e=2.8){let n=new Ye({transparent:!0,depthWrite:!1,blending:bo,uniforms:{strength:{value:0},tint:{value:new Zt(Gt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=Fi(i,new Ni(2*t,2*t),n,0,e,0);return s.rotation.x=-ko/2,s.visible=!1,(r,o)=>{s.visible=r>0,n.uniforms.strength.value=r*.29,n.uniforms.tint.value.copy(o)}}function Ob(i,t,e){let n=new ce,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),d=Math.min(t,e),f=de(Gt.honey),h=de(Gt.ink),g=de(Gt.brass,{roughness:.36,metalness:.42}),x=de(Gt.cream,{emissive:Gt.warm,emissiveIntensity:0}),p=new Zt(Gt.warm),m=u?46:o?50:a?56:l?40:c?56:36,v=!a&&!c&&!l,T=v?qn(d*.68,15,46):qn(d*(a?1.72:1.35),38,110),S=Fb(n,T,v?16.8:2.8);if(a){let M=d*(u?.19:.29);Je(n,M,M*1.02,3,h,0,m+2),o&&Je(n,1.7,1.7,13,f,0,m+9),Je(n,M*.82,M,5,f,0,m-1.5),Je(n,M*.92,M*.96,1.15,g,0,m+1.1);let E=oi(n,M*.83,x,0,m,0);E.scale.y=o?.88:.52}else if(l)pn(n,d*.34,18,4,h,0,35,-4),Je(n,d*.12,d*.11,14,f,0,37,3),oi(n,d*.21,x,0,m+3,3);else{let M=m-7,E=c?3:16,I=d*(c?.25:.3);if(Je(n,I*.57,I*.67,4,h,0,E),Je(n,2,2.9,M-E,f,0,(E+M)/2),c)oi(n,I*.81,x,0,m,0);else{let y=r==="bud_lamp"?12:9;Je(n,I*.56,I,14,x,0,m,0,y),Je(n,I,I*.99,1.2,g,0,m-6.7,0,y),Je(n,I*.55,I*.58,1.1,g,0,m+7.1,0,y)}}return{root:n,anchorY:m+2,animate(M){let E=Ub(M),I=M?.attributes?.rgb_color;if(Array.isArray(I)&&I.length===3&&I.every(Number.isFinite)){let[y,P,U]=I.map(N=>qn(N/255,0,1));p.setRGB(y,P,U,We)}else p.setHex(Gt.warm);S(E,p),x.emissiveIntensity=E*.88,x.emissive.copy(p),E>0?x.color.copy(p):x.color.setHex(Gt.cream)}}}function Bb(i){let t=new Nn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Li(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-ko/2)}function Gd(i,t,e,n){let s=new ce,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Sr(s,0,o,0);n&&(a.rotation.x=ko/2);let c=Sr(a,0,-1,0),l=de(Gt.cream),u=de(Gt.ink),d=/(?:white|cream)$/.test(i.type)?Gt.oat:/(?:forest|sage)$/.test(i.type)?Gt.sage:Gt.honey,f=de(d),h=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Je(a,r*.18,r*.2,6,u),Je(a,r*.174,r*.176,1.4,de(Gt.brass,{roughness:.36,metalness:.42}),0,3.4),Je(a,r*.15,r*.17,2.6,l,0,4.9);let g=Bb(r);for(let x=0;x<h;x++){let p=Sr(c);p.rotation.y=x/h*rh,Fi(p,g,f)}if(n){pn(s,r*1.66,6,r*1.02,u,0,3),tn(s,r*.3,11,6,l,0,10);let x=Fi(s,new wn(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let p=-1;p<=1;p++){let m=p*r*.5;Je(s,.68,.68,2*Math.sqrt(r*r-m*m),u,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,p=0){let m=Number.isFinite(x?.attributes?.percentage)?qn(x.attributes.percentage/100,.12,1):.64;c.rotation.y=Er(x)?p*rh*m%rh:0}}}function kb(i,t){let e=new ce,n=t.mountY??39,s=Sr(e,0,n),r=qn(i*.72,17,27);pn(s,r,31,5,de(Gt.ink),0,0,-.5),pn(s,r-1.9,29,4.4,de(Gt.cream),0,.3,1);let o=de(Gt.oat,{emissive:Gt.warm,emissiveIntensity:0}),a=pn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let d=de(Gt.teal,{emissive:Gt.mint,emissiveIntensity:0});return oi(s,1.85,d,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=Cs(l)?Er(l)?-.16:.16:0,o.emissiveIntensity=Er(l)?.42:0;let d=l?.presence==="on";for(let f=0;f<c.length;f++){let h=d?.5+.5*Math.cos(u*5-f*1.23):0;c[f].material.color.setHex(d?Gt.mint:Gt.teal),c[f].material.emissiveIntensity=d?.75+h*1.9:0,c[f].scale.setScalar(d?1+h*.18:1)}}}}function Wd(i,t,e,n=31){let s=new ce,r=36.5,o=Math.max(12,i-6),a=de(Gt.oat);if(t){let f=de(Gt.glass,{roughness:.32});tn(s,o,n,3.2,f,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])tn(s,3.2,n+2,7.5,a,g,r);let h=r+n/2;tn(s,o,1.8,7,f,0,h+.35);for(let g of[-4.25,4.25])tn(s,o+2,3.2,1.5,a,0,h,g);tn(s,o+3,3.8,11,a,0,r-n/2,1.4),tn(s,o,1.35,.5,de(Gt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=de(Gt.cream),l=r+n/2-1;pn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(f,h)=>tn(s,o-5,n/8-.45,3,c,0,l-h*(n/8),6.9)),d=0;return{root:s,anchorY:r+1.5,animate(f,h,g,x=!1){let p=ah(f),m=p===null?x?0:d:1-p;x||(d=m);let v=Number.isFinite(f?.attributes?.current_tilt_position)?qn(f.attributes.current_tilt_position/100,0,1):0;for(let T=0;T<u.length;T++){let S=qn(m*u.length-T,0,1);u[T].visible=S>.02,u[T].scale.y=S,u[T].rotation.x=v*.9}}}}function ah(i){return Cs(i)?Number.isFinite(i.attributes?.current_position)?qn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function zb(i,t){let e=new ce,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=de(Gt.oat),l=de(Gt.cream),u=de(Gt.plum),d=[de(Gt.tile),de(Gt.paleTile)],f=de(Gt.dark);tn(e,i,5,t*Xd,l,0,2.5,t*Yd),tn(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let N of[-i*.42,i*.42])tn(e,i*.09,o+4,n,c,N,(o+4)/2),pn(e,i*.1,o+4,5,l,N,(o+4)/2,r+1,1.5);let h=new Nn;h.moveTo(-i*.49,0),h.lineTo(i*.49,0),h.lineTo(0,a),h.closePath();let g=new Li(h,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Fi(e,g,u,0,o+4);let x=i*.49,p=Math.atan2(a,x),m=Math.hypot(a,x),v=(n+11)/8,T=[[],[]];for(let N of[-1,1])for(let z=0;z<8;z++){let q=-r-5.5+(z+.5)*v,k=new Re(m*.97,2.2,v-.62);k.rotateZ(-N*p),k.translate(N*x*.5,o+5.65+a*.5,q),T[z%2].push(k)}T.forEach((N,z)=>{Fi(e,Xn(N),d[z]),N.forEach(q=>q.dispose())}),pn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),tn(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),tn(e,s,o,1.5,f,0,o/2+4,r-4);for(let N of e.children)N.isMesh&&(N.castShadow=!0);let S=de(Gt.mint),M=de(Gt.sage),I=(o-3)/6,y=Array.from({length:6},(N,z)=>{let q=Sr(e,0,o-(z+.5)*I+2,r+.5);return pn(q,s-2,I-.7,3.4,S,0,0,0,1.2),tn(q,s*.91,.68,.7,M,0,I*.23,1.8),z===5&&pn(q,s*.13,2,2.2,l,0,0,2.3,.55),q}),P=de(Gt.gold,{emissive:Gt.ember,emissiveIntensity:0});oi(e,3.7,P,i*.422,o*.73,r+4.5);let U=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(N,z=0,q,k=!1){let V=ah(N)??(k?0:U);k||(U=V),S.color.setHex(Cs(N)?Gt.mint:Gt.muted),M.color.setHex(Cs(N)?Gt.sage:Gt.muted);let nt=(1-V)*y.length;y.forEach((X,Y)=>{let Z=qn(nt-Y,0,1);X.visible=Z>.02,X.scale.y=Z,X.position.y=o-(Y+Z/2)*I+2});let G=["opening","closing"].includes(oh(N));P.emissiveIntensity=G?.55+(.5+.5*Math.cos(z*6)):0}}}function Hb(i){let t=new ce,e=46,n=de(Gt.cream),s=de(Gt.honey),r=Math.min(i*.86,88),o=Sr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])tn(t,3.4,e,5,n,c,e/2);tn(t,r+4,3,5,n,0,e),pn(o,r-2,e-4,4,s,r/2,e/2,0,2),oi(o,2.2,de(Gt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,d=!1){let h=ah(c)??(d?0:a);d||(a=h),o.rotation.y=-1.32*h,s.color.setHex(Cs(c)?Gt.honey:Gt.muted)}}}function Vb(i,t,e){let n=new ce,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=qn(t*.85,23,126),a=de(Gt.dark,{emissive:Gt.mint,emissiveIntensity:0});if(pn(n,o,s?25:18,8,de(Gt.cream),0,r,0),s){pn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])oi(n,1.35,de(Gt.oat),o*c,r-7,4.3)}else tn(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",d=Cs(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Gt.warm:Gt.glass),a.emissiveIntensity=d?1.15:Er(c)?.25:0}}}function Gb(i,t,e){let n=new ce,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=de(Gt.cream),c=de(r?Gt.glass:Gt.sage),l=de(Gt.teal,{emissive:Gt.mint,emissiveIntensity:0}),u=o-1;if(Je(n,s*.46,s*.5,4,de(Gt.ink),0,2),r){let h=oi(n,s/2,c,0,13,0);h.scale.y=22/s,Je(n,s*.19,s*.22,3.5,a,0,u)}else{pn(n,s,24,s*.82,c,0,15,0,5),pn(n,s*.91,3.8,s*.71,a,0,u);for(let h=-1;h<=1;h++)tn(n,s*.66,1.2,1.1,l,0,u+2,h*3.5)}oi(n,1.6,l,s*.18,u-2,s*.31);let d=de(Gt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),f=Array.from({length:3},(h,g)=>oi(n,2.1+g*.6,d,0,u+3,0));return{root:n,anchorY:u,animate(h,g=0){let x=Er(h);l.emissiveIntensity=x?1.6:0;for(let p=0;p<f.length;p++){f[p].visible=x;let m=(g*.68+p/f.length)%1;f[p].position.set(Math.sin(m*ko)*3.1,u+4+m*14,0),f[p].scale.setScalar(.7+m*.62)}}}}function Wb(i,t){let e=new ce,n=Math.min(i,t)*.42,s=de(Gt.sage,{emissive:Gt.mint,emissiveIntensity:0}),r=de(Gt.ink);Je(e,n,n*.95,7,r,0,4.6),Je(e,n*.96,n,5.5,de(Gt.cream),0,10.2),Je(e,n*.28,n*.33,4,de(Gt.oat),0,14,-n*.23);for(let a of[-.27,.27])oi(e,n*.105,r,n*a,10,n*.88);let o=pn(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03,animate(a,c=0,l=!1){let u=["cleaning","returning"].includes(oh(a));o.material.emissiveIntensity=u?l?.6+.5*Math.cos(c*6):.3:0}}}function Zd(i,t={}){let e=Bo(i.w,42),n=Bo(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?kb(e,t):s==="garageDoor"?zb(e,n):s==="door"||r==="door"?Hb(e):s==="window"?Wd(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?Wd(Bo(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?Vb(i,e,t):s==="airPurifier"||s==="humidifier"?Gb(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?Wb(e,n):s==="windowFan"?Gd(i,e,n,!0):r==="fan"||/^fans-/.test(s)?Gd(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?Ob(i,e,n):null}var tp=Rl(tl(),1),{difference:ep,union:np}=tp.default,sl=18,Un=.001,_i=(i,t)=>i[0]*t[0]+i[1]*t[1],Is=(i,t)=>i[0]*t[1]-i[1]*t[0],vi=(i,t)=>[i[0]-t[0],i[1]-t[1]],Pe=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],ol=([i,t])=>[-t,i],Jd=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],nl=i=>i.map(({x:t,y:e})=>[t,e]),Oi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],ip=i=>i.length?np(...i):[];function rl(i,t,e,n=0){let s=vi(t,i),r=Math.hypot(...s);if(r<Un)return null;let o=s.map(u=>u/r),a=ol(o),c=Pe(i,o,-n),l=Pe(t,o,n);return Oi([Pe(c,a,e),Pe(l,a,e),Pe(l,a,-e),Pe(c,a,-e)])}function il(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function $d(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=vi(n,t),r=Math.hypot(...s);return r>Un?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function Xb(i,t,e,n){if(Math.abs(_i(i.tangent,t.tangent))<.9999)return null;let s=ol(i.tangent),[r,o]=[t.start,t.end].map(x=>vi(x,i.start)),a=_i(r,s);if(Math.abs(a)<.1||Math.abs(a)>sl||Math.abs(a-_i(o,s))>.1)return null;let c=[_i(r,i.tangent),_i(o,i.tangent)].sort((x,p)=>x-p),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let d=Pe(i.start,i.tangent,(l+u)/2),f=Math.sign(a);if(!il(e,Pe(d,s,-f))||!il(n,Pe(d,s,a+f))||il(e,Pe(d,s,a/2))||il(n,Pe(d,s,a/2)))return null;let h=Pe(i.start,i.tangent,l),g=Pe(i.start,i.tangent,u);return Oi([Pe(h,s,-f*.05),Pe(g,s,-f*.05),Pe(g,s,a+f*.05),Pe(h,s,a+f*.05)])}function sp(i){let t=[],e=[];for(let n of[...i].reverse()){let s=ip(n.polygons);if(!s.length)continue;let r=t.length?ep(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?np(t,s):s}return{footprint:t,regions:e.reverse()}}function zo(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function rp(i,t,e=!1){let n=i.map(f=>({surface:f.surface,points:nl(f.points),polygons:[Oi(nl(f.points))],outdoor:e&&zo(f)})),s=[];for(let[f,h]of n.entries())for(let g of n.slice(f+1))for(let x of $d(h.points))for(let p of $d(g.points)){let m=Xb(x,p,h.points,g.points);m&&s.push({surface:h.surface,polygons:[m],outdoor:h.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:f,deckEdge:h,stepBottom:g,deckBottom:x,northDeck:p,southDeck:m,recess:v}=t;r.push({surface:"patio",polygons:[Oi(nl(p)),Oi(nl(m)),Oi(Jd(f,g,h+1,x))]}),v.x2>v.x1&&v.z2>v.z1&&o.push({surface:"oak",polygons:[Oi(Jd(v.x1,v.z1,v.x2,v.z2))]})}let a=[...s,...n],c=[...o,...a.filter(f=>!f.outdoor)],l=[...r,...a.filter(f=>f.outdoor)],u=sp([...l,...c]),d=t||e?ip(c.flatMap(f=>f.polygons)):[];return{...u,foundation:d}}function Yb(i,t,e,n){let s=Is(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Pe(i,ol(t),r),a=Pe(i,ol(e),-r),c=Is(vi(a,o),e)/s,l=Pe(o,t,c);return Math.hypot(...vi(l,i))>n*2.5?Oi([i,o,a]):Oi([i,o,l,a])}function Kd(i,t){let e=Is(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=vi(t.point,i.point);return[Is(n,t.tangent)/e,Is(n,i.tangent)/e]}function qb(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=vi(r.point,s.point);if(Math.hypot(...o)>sl)continue;let a=Kd(s,r);a&&a.every(c=>c>=-sl&&c<=Un)?e.push({a:s,b:r,center:Pe(s.point,s.tangent,a[0])}):!a&&_i(s.tangent,r.tangent)<0&&_i(o,s.tangent)<=Un&&_i(o,r.tangent)>=-Un&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Kd(s,o);if(!a)continue;let[c,l]=a;c<-sl||c>=-Un||l<=Un||l>=r.length-Un||r.openings.some(({start:u,end:d})=>l>=u&&l<=d)||e.push({a:s,center:Pe(s.point,s.tangent,c)})}}return e}function jd({a:i,b:t,center:e},n){return e?[rl(i.point,e,n,.1),t&&rl(t.point,e,n,.1),t&&Yb(e,i.tangent,t.tangent,n)].filter(Boolean):[rl(i.point,t.point,n,.1)].filter(Boolean)}function op(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function Zb(i,t){return op(i).flatMap(([e,n])=>{let s=vi(n,e),r=Math.hypot(...s);if(r<Un)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=vi(a,e),u=vi(c,e);if(Math.abs(Is(l,o))>Un||Math.abs(Is(u,o))>Un)return[];let[d,f]=[_i(l,o),_i(u,o)].sort((x,p)=>x-p),h=Math.max(0,d),g=Math.min(r,f);return g-h>Un?[[Pe(e,o,h),Pe(e,o,g)]]:[]})})}function Qd(i,t){return t?.length?ep(i,t):i}function ap(i,t,e,n){let s=[],r=(c,l,u,d,f=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:d,priority:f})};for(let c of i){let{palette:[l,u,d]}=c,f=[c.x1,c.y1],h=[c.dx,c.dz],g=(v,T,S,M,E,I,y)=>{T-v>Un&&r(rl(Pe(f,h,v),Pe(f,h,T),E/2),S,M,I,y)},x=c.openings.length?n:0,p=(v,T)=>{g(v,T,x,e,t,l,2),g(v,T,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let m=0;for(let v of c.openings)p(m,v.start),m=Math.max(m,v.end);p(m,c.length),g(0,c.length,0,3,t+3,d,1)}for(let c of qb(i)){let[l,u,d]=c.a.wall.palette;for(let f of jd(c,t/2))r(f,0,e,l,2);for(let f of jd(c,(t+3)/2))r(f,e-1,e+2,u,1),r(f,0,3,d,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],d=new Map,f=s.filter(h=>h.from<=u&&h.to>=c);for(let{surface:h,shape:g}of f.sort((x,p)=>x.priority-p.priority))d.has(h)||d.set(h,{surface:h,polygons:[]}),d.get(h).polygons.push(g);return{...sp([...d.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:d},f)=>{let h=op(l);return c.map(g=>({...g,bottom:u,top:d,faces:{top:Qd(g.polygons,a[f+1]?.footprint),bottom:u===0?[]:Qd(g.polygons,a[f-1]?.footprint),sides:Zb(g.polygons,h)}}))})}var Jb=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),$b=3,Kb={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},cp=Object.fromEntries(Object.entries(Kb).map(([i,t])=>[i,t.map(e=>new Zt(e))])),jb=new Zt("#ffc38b"),{clamp:Qb,lerp:Ho,smoothstep:lp}=me;function up(i,t,e){i.toneMapping=Mo,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Es,i.shadowMap.autoUpdate=!1;let n=new Ss("#fff4e5","#897e91",1.13),s=new ns("#fff0d4",2.15),r=new ns("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,d=(c+l)/2;s.position.set(u-610,1150,d-490),s.target.position.set(u,0,d),r.position.set(u+290,410,d+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let f=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-f,right:f,top:f,bottom:-f,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let h=Array.from({length:$b},()=>new yo("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...h);let g=[],x,p,m=!0,v=new Zt;function T(){for(let E of t.children)E.isMesh&&(E.receiveShadow=!0,E.geometry.computeBoundingBox(),E.castShadow=E.geometry.boundingBox.max.y+E.position.y>-99)}function S(E,I){let y=/(light|lamp|sconce)/i.test(E.type),P=!I.animate||y;I.root.traverse(U=>{!U.isMesh||U.material.transparent||U.material.isShaderMaterial||(U.receiveShadow=!0,U.castShadow||=P)}),y&&E.entityId&&g.push({item:E,object:I})}function M(E,I,y,P=!1){let U=E.night===!0,N=Jb.has(E.condition),z=Number.isFinite(E.sunElevation)?Math.round(E.sunElevation*2)/2:U?-12:35,q=lp(z,-8,19),k=`${N}:${Qb(z,-8,35)}`;if(k!==x){let $=cp[N?"overcast":"clear"],V=[n.color,n.groundColor,s.color,y.color,t.background];for(let[G,X]of V.entries())X.lerpColors(cp.night[G],$[G],q);let nt=q*(1-lp(z,8,34));N||s.color.lerp(jb,nt*.8),n.intensity=Ho(.75,N?1.33:1.12,q),s.intensity=Ho(.28,N?.86:2.14,q),r.intensity=Ho(.12,.23,q),s.shadow.intensity=Ho(.65,N?.39:.84,q),x=k,p=void 0}if(p!==I||P){let $=g.flatMap(({item:V,object:nt})=>{let G=I[V.id];if(G?.state!=="on")return[];let X=Number.isFinite(G.attributes?.brightness)?me.clamp(G.attributes.brightness/255,0,1):1;return X>0?[{object:nt,power:X,color:G.attributes?.rgb_color}]:[]}).sort((V,nt)=>nt.power-V.power);for(let[V,nt]of h.entries()){let G=$[V];if(!G){nt.intensity=0;continue}let{object:X,power:Y,color:Z}=G;Array.isArray(Z)&&Z.length===3&&Z.every(Number.isFinite)?(v.setRGB(...Z.map(yt=>me.clamp(yt/255,0,1)),We),nt.color.copy(v)):nt.color.set("#ffd5a2"),nt.position.copy(X.root.position),nt.position.y+=Math.max(18,(X.anchorY-9)*X.root.scale.y),nt.intensity=Y*Ho(2350,1250,q)}p=I}m&&(i.shadowMap.needsUpdate=!0,m=!1)}return{markStructure:T,register:S,update:M,dispose:()=>s.shadow.dispose()}}var bi=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),wr=Object.freeze({default:bi("Default",0,0),top:bi("Top down",0,0),high:bi("High angle",0,15),dollhouse:bi("Dollhouse",2,30),corner:bi("Corner",45,40),north:bi("From north",180,42),east:bi("From east",90,42),south:bi("From south",0,42),west:bi("From west",270,42),free:bi("Free view",0,25)});function hp(i,t=!1){let e=Object.entries(wr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Bi(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(wr,t.preset)?t.preset:"top",n=wr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?me.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?me.clamp(t.zoom,.6,2.5):n.zoom}}function fp(i){let t=Bi(i);return{...t,preset:"free",tilt:t.tilt||wr.free.tilt}}function ch(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Bi(i)}function lh(i){return Bi({...ch(i),preset:"default"})}function dp(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>ch(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return ch(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function uh(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let a=Bi(s),c=me.degToRad(a.azimuth),l=me.degToRad(a.tilt),u=new W((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),d=new W(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(d,1900),i.lookAt(u),i.updateMatrixWorld(!0);let f=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),h=new Ue,g=new W;for(let S of[t.minX-37,t.maxX+37]){for(let M of[t.minZ-53,t.maxZ+36])for(let E of[-111,f])h.expandByPoint(g.set(S,E,M).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&h.expandByPoint(g.set(S,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let S=(h.max.y-h.min.y)*.025;h.min.y-=S,h.max.y+=S}let x=e/n,p=Math.max((h.max.x-h.min.x)/2,(h.max.y-h.min.y)/2*x),m=p/x,v=(h.min.x+h.max.x)/2,T=(h.min.y+h.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:S,y:M}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),E=Number.isFinite(r.weight)?me.clamp(r.weight,0,1):1;v=me.lerp(v,S,E),T=me.lerp(T,M,E)}return i.left=v-p,i.right=v+p,i.bottom=T-m,i.top=T+m,i.zoom=Number.isFinite(o)?me.clamp(o,.6,4.5):a.zoom,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Dining table",icon:"\u25B0",w:165,h:108,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=G=>typeof G=="string"&&G.startsWith("ui"),o=G=>String(G??"").toLowerCase(),a=G=>o(G).split(".")[0],c=G=>typeof G=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(G),l=G=>G.type==="window"?"wall":G.mount||"floor";function u(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function d(G,X,Y){return!(!G||!X||!Y||G.type===Y.type||s.has(G.type)||r(G.type)||s.has(Y.type)||r(Y.type)||l(X)!==l(Y)||G.entityId&&!f(G.entityId,Y))}function f(G,X){return!c(G)||typeof X?.type!="string"||r(X.type)||X.type==="stairs"||X.type==="window"?!1:X.type==="cameraThumbnail"?a(G)==="camera":X.type==="garageDoor"?a(G)==="cover":a(G)!=="camera"}function h(G,X){let Y=a(G.entity_id),Z=o(G.name+" "+G.entity_id),ot={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},yt=St=>{if(St.type==="controlZone")return!0;if(Y==="camera")return St.type==="cameraThumbnail";if(Y==="cover")return/garage/.test(Z)&&St.type==="garageDoor";if(Y==="climate")return St.type==="thermostat";if(Y==="binary_sensor"&&/presence|occupancy/.test(Z))return St.type==="presenceSwitch";if(ot[Y]?.includes(St.group)||/humidifier/.test(Z)&&St.type==="humidifier"||/purifier/.test(Z)&&St.type==="airPurifier")return!0;if(Y==="switch"){if(/fan/.test(Z))return St.group==="fans"||St.type==="windowFan";if(/light|lamp/.test(Z))return St.group==="lighting"}return!1},bt=X.filter(St=>f(G.entity_id,St));return{recommended:bt.filter(yt),available:bt}}function g(G){return G&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(G.type)&&!r(G.type)}function x(G,X,Y,Z){if(!["w","h"].includes(X)||!Number.isFinite(Y))return null;let ot=G.type==="cameraThumbnail"?40:12,yt=G.type==="cameraThumbnail"||c(G.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!Z)return{[X]:Math.min(yt[X],Math.max(ot,Y))};let bt=Math.min(yt.w/G.w,yt.h/G.h),St=Math.min(bt,Math.max(ot/G.w,ot/G.h)),Pt=Math.min(bt,Math.max(St,Y/G[X]));return{w:Math.round(G.w*Pt*10)/10,h:Math.round(G.h*Pt*10)/10}}let p=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),m=new Set(["lamp","tableLamp","humidifier","plant"]),v=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),T=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,S=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,M=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function E(G){let X=G?.type??"";return p.has(X)||T.test(X)?"surface":m.has(X)||G?.lightForm==="bud_lamp"||X.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function I(G){let X=G.type==="humidifier"?.37:G.type==="plant"?.23:.2;return Math.min(G.w,G.h)*X}function y(G,X=!1){let{type:Y,w:Z,h:ot}=G;if(Y==="desk"||Y.startsWith("bedroom-corner-desk-"))return[[0,-.33*ot,Z,.34*ot],[-.41*Z,.17*ot,.18*Z,.66*ot],[.41*Z,.17*ot,.18*Z,.66*ot]];if(!X&&(Y==="sofa"||Y.startsWith("living-cloud-sofa-")))return ot>Z?[[-.25*Z,0,.5*Z,ot],[.22*Z,(Y==="sofa"?.3:-.3)*ot,.52*Z,.38*ot]]:[[0,-.215*ot,Z,.57*ot],[-.32*Z,.25*ot,.34*Z,.46*ot]];if(X){if(Y.startsWith("living-round-dining-"))return[[0,0,.58*Z,.58*ot]];if(Y==="table"||/-dining-set-/.test(Y))return[[0,0,.79*Z,.56*ot]];if(Y.includes("-desk-"))return[[0,0,Z,.85*ot]]}if(!X&&E(G)==="tabletop"){let yt=2*I(G);return[[0,0,yt,yt]]}return[[0,0,Z*.95,ot*.95]]}function P(G,X){if(![G?.x,G?.y,G?.w,G?.h].every(Number.isFinite)||G.w<=0||G.h<=0)return[];let Y=(Number.isFinite(G.rotation)?G.rotation:0)*Math.PI/180,Z=[Math.cos(Y),Math.sin(Y)],ot=[-Z[1],Z[0]];return y(G,X).map(([yt,bt,St,Pt])=>({x:G.x+yt*Z[0]+bt*ot[0],y:G.y+yt*Z[1]+bt*ot[1],u:Z,v:ot,width:St/2,height:Pt/2}))}let U=(G,X,Y)=>G*Y[0]+X*Y[1];function N(G,X){let Y=X.type.startsWith("living-round-dining-"),Z=P(X,!0),ot=I(G)*.9;return M.every(([yt,bt])=>Z.some(St=>{let Pt=G.x+yt*ot-St.x,at=G.y+bt*ot-St.y,ht=Math.abs(U(Pt,at,St.u))/St.width,Tt=Math.abs(U(Pt,at,St.v))/St.height;return Y?Math.hypot(ht,Tt)<=1:ht<=1&&Tt<=1}))}function z(G){return E(G)!=="floor"||v.has(G.type)||S.test(G.type)?P(G,!1):[]}function q(G,X){let Y=(Z,ot)=>Z.width*Math.abs(U(...Z.u,ot))+Z.height*Math.abs(U(...Z.v,ot));return Math.min(...[G.u,G.v,X.u,X.v].map(Z=>Y(G,Z)+Y(X,Z)-Math.abs(U(G.x-X.x,G.y-X.y,Z))))}function k(G,X,Y,Z){let ot=0;for(let St of Y)for(let Pt of Z)ot=Math.max(ot,q(St,Pt));if(ot<=2)return ot;let yt=E(G),bt=E(X);return yt==="tabletop"&&bt==="surface"&&N(G,X)||yt==="surface"&&bt==="tabletop"&&N(X,G)?0:ot}function $(G,X,Y){let Z=z(G);if(!Z.length)return;let ot=Y?z(Y):[],yt,bt=2;for(let St of X){if(St.id===G.id)continue;let Pt=z(St),at=k(G,St,Z,Pt);at<=bt||ot.length&&at<=k(Y,St,ot,Pt)+.02||(yt=St,bt=at)}return yt}function V(G){let X=G.filter(ot=>E(ot)==="surface"),Y=new Set,Z=new Map;for(let ot of G){if(E(ot)!=="tabletop")continue;let yt=X.find(bt=>N(ot,bt));yt&&(Y.add(ot.id),Z.has(yt.id)||Z.set(yt.id,[]),Z.get(yt.id).push(ot))}return Y.size?G.flatMap(ot=>Y.has(ot.id)?[]:[ot,...Z.get(ot.id)??[]]):G}function nt(G,X,Y){let Z=G.ownerDocument,ot=(Ut,Bt,Vt={})=>{let Kt=Z.createElement(Ut);Bt&&(Kt.textContent=Bt);for(let[J,re]of Object.entries(Vt))Kt.setAttribute(J,re);return Kt},yt=ot("dialog","",{class:"model-library","aria-label":"Objects and models"}),bt=ot("header"),St=ot("h2","Objects & models"),Pt=ot("button","Close",{type:"button"});bt.append(St,Pt);let at=ot("div","",{class:"model-library-filters"}),ht=ot("select","",{"aria-label":"Object library section"});for(let[Ut,Bt]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])ht.append(ot("option",Bt,{value:Ut}));let Tt=ot("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});at.append(ht,Tt);let Ft=ot("div","",{class:"model-library-context"}),Lt=ot("p","",{role:"status",class:"model-library-status"}),It=ot("div","",{class:"model-library-list"});yt.append(bt,at,Ft,Lt,It);let Ht=ot("style");Ht.textContent=`
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
    `,G.append(Ht,yt);let ut,_t=!1,Mt=(Ut,Bt)=>{let Vt=ot("button",Ut,{type:"button"});return Vt.addEventListener("click",Bt),Vt};function Et(Ut){ut=Ut,_t=!1,ht.value="catalog",Tt.value="",wt(),Tt.focus()}function wt(){let{templates:Ut,paletteGroups:Bt}=u(),Vt=new Map(Ut.map(tt=>[tt.type,tt])),Kt=new Map(Bt),{items:J,entities:re}=X(),Yt=o(Tt.value).trim(),O=(...tt)=>Yt.split(/\s+/).every(et=>o(tt.join(" ")).includes(et)),w=[];if(Ft.replaceChildren(),ut&&(Ft.append(ot("strong",ut.item?.name||ut.entity?.name||ut.entity?.entity_id)),ut.entity&&Ft.append(Mt(_t?"Suggested models":"All compatible models",()=>{_t=!_t,wt()})),Ft.append(Mt("Cancel mapping",()=>{ht.value=ut.entity?"devices":"placed",ut=void 0,Tt.value="",wt()}))),ht.value==="placed")for(let tt of J){let et=Vt.get(tt.type);if(!O(tt.name,et?.label,tt.type,tt.entityId))continue;let ft=[tt.w,tt.h,tt.modelHeight].filter(Number.isFinite).join(" \xD7 "),H=[et?.label||tt.type,ft&&ft+" plan px",tt.entityId].filter(Boolean).join(" \xB7 "),_=[Mt("Edit",()=>Y({kind:"edit",itemId:tt.id}))];Ut.some(b=>d(tt,et,b))&&_.push(Mt("Change model",()=>Et({item:tt}))),w.push([tt.name||et?.label||tt.type,H,_])}else if(ht.value==="devices"){let tt=new Map;for(let et of J)et.entityId&&!tt.has(et.entityId)&&tt.set(et.entityId,et);for(let et of re){if(!c(et.entity_id)||!O(et.name,et.entity_id,et.area))continue;let ft=tt.get(et.entity_id),H=[et.entity_id,et.area,ft?"On plan \xB7 "+ft.name:"Available to map"].filter(Boolean).join(" \xB7 ");w.push([et.name||et.entity_id,H,[ft?Mt("Edit mapped object",()=>Y({kind:"edit",itemId:ft.id})):Mt("Choose model",()=>Et({entity:et}))]])}}else{let tt=Ut;if(ut?.item&&(tt=Ut.filter(et=>d(ut.item,Vt.get(ut.item.type),et))),ut?.entity){let et=h(ut.entity,Ut);tt=_t?et.available:et.recommended}for(let et of tt){let ft=Kt.get(et.group)||et.group;if(!O(et.label,et.type,et.tags,ft))continue;let H=ut?.item?{kind:"replace",itemId:ut.item.id,modelId:et.type}:{kind:"place",modelId:et.type,...ut?.entity?{entityId:ut.entity.entity_id}:{}};w.push([et.label,ft+" \xB7 "+et.w+" \xD7 "+et.h+" plan px",[Mt(ut?"Use model":"Place",()=>Y(H))]])}}It.replaceChildren();for(let[tt,et,ft]of w.slice(0,48)){let H=ot("div","",{class:"model-library-row"}),_=ot("div");_.append(ot("strong",tt),ot("small",et));let b=ot("div","",{class:"model-library-actions"});b.append(...ft),H.append(_,b),It.append(H)}Lt.textContent=w.length>48?"Showing 48 of "+w.length+". Search to narrow the list.":w.length?w.length+(w.length===1?" result":" results"):ht.value==="devices"&&!re.length?"Connect to Home Assistant to list devices.":"No matches."}return ht.addEventListener("change",()=>{ut=void 0,Tt.value="",wt()}),Tt.addEventListener("input",wt),Pt.addEventListener("click",()=>yt.close()),{open(Ut="placed"){ut=void 0,_t=!1,ht.value=Ut,Tt.value="",wt(),yt.open||yt.showModal()},get isOpen(){return yt.open},close(){yt.open&&yt.close()}}}i.RoomcraftModels=Object.freeze({catalog:u,canMap:f,canReplace:d,suggestions:h,supportsHeight:g,resizeFootprint:x,placementRole:E,blockingPlacement:$,orderMountedObjects:V,mount:nt,handoffKey:n})})(typeof window>"u"?globalThis:window);function pp(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Ue().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var t1=24,e1=.32,n1=125,i1=24,al=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function Vo(i,t=.12){return new He({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function s1(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function hh(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new ce;s.name="tracked-people",i.add(s);let r,o=new Map,a=al.map(()=>[]),c=!1,l=!1,u=0,d=!1;function f(){return{sphere:new Qe(1,12,8),disc:new Vn(1,24).rotateX(-Math.PI/2),groundRing:new fo(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new wn(1,.14,6,16),palette:al.map(({sweater:v,trim:T,skin:S,hair:M})=>Object.fromEntries(Object.entries({sweater:v,trim:T,skin:S,hair:M}).map(([E,I])=>[E,Vo(I)]))),ink:Vo("#423c50",.09),cheek:Vo("#d78383"),shoes:Vo("#514656"),white:Vo("#fff1dc"),shadow:new ze({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new ze({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function h(v){r??=f();let{role:T,scale:S}=al[v],{sweater:M,trim:E,skin:I,hair:y}=r.palette[v],P=T==="baby",U=new ce;U.name=`radar-avatar-${T}`;let N=new ce,z=new ce,q=[],k=[],$=[];s.add(U),U.add(N),N.scale.set(...S);let V=(Y,Z,ot,yt,bt,St,Pt,at)=>{let ht=new ue(r.sphere,Z);return ht.position.set(ot,yt,bt),ht.scale.set(St,Pt,at),Y.add(ht),ht},nt=new ue(r.disc,r.shadow);nt.position.y=.13,nt.scale.set(19,1,19),U.add(nt);let G=new ue(r.groundRing,r.groundMark);G.position.y=.26,U.add(G),V(N,M,0,15,0,P?8.2:7.1,8.3,5.4),P?(V(N,E,0,17.5,4.8,4.9,4.1,1.15),V(N,r.white,0,17.4,5.9,1.5,1.5,.35)):(V(N,E,0,20.7,2.4,5.8,2.2,4),V(N,E,T==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let Y of[-1,1]){let Z=new ce;Z.position.set(Y*3.4,10.3,.1),N.add(Z),V(Z,P?M:r.ink,0,-3.2,0,2.65,4.6,2.6),V(Z,P?E:r.shoes,0,-8.15,1.25,3.1,2.1,4),V(Z,r.white,0,-8.8,3.25,2.75,1.1,2),$.push(Z);let ot=new ce;ot.position.set(Y*6.25,19.1,0),N.add(ot),V(ot,M,Y*.9,-3.7,.15,2.75,5.3,2.7),V(ot,I,Y*1.3,-7.8,.5,2.3,2.6,2.2),k.push(ot)}z.position.set(0,P?26:27.2,0),P&&z.scale.set(1.16,1.17,1.12),N.add(z),V(z,y,0,1.3,-1.65,9.2,9.65,8.6),V(z,I,0,0,1.9,8.65,8.45,7.5);let X=V(z,y,-2.1,7.3,4.25,6.4,3.4,4.35);if(X.rotation.z=T==="papa"?-.27:.22,T==="mama"&&(V(z,y,-6.7,-1.9,-3.8,3.6,8.1,5.2),V(z,y,6.2,-1.7,-3.9,3.3,7.6,5.4),V(z,y,2.8,10.4,-2.5,5.1,5.1,5.1),V(z,E,4.4,8.7,2.2,2.8,1.1,1.1)),P){V(z,y,-7.3,6.7,-2,3.35,3.7,3.5),V(z,y,7.3,6.7,-2,3.35,3.7,3.5);let Y=V(z,E,.9,10,4.2,2.5,1.45,1.25),Z=V(z,E,4.1,10,4.2,2.5,1.45,1.25);Y.rotation.z=-.4,Z.rotation.z=.4,V(z,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let Y of[-1,1])if(V(z,I,Y*8.2,-.15,1.1,1.85,2.4,1.75),q.push(V(z,r.ink,Y*3,1.2,8.95,.85,.87,.52)),V(z,r.cheek,Y*5.05,-1.25,7.95,1.18,.62,.52),T==="papa"){let Z=new ue(r.glasses,r.ink);Z.position.set(Y*3.1,1.25,9.15),Z.scale.set(2.5,2.15,1.55),z.add(Z)}return T==="papa"&&V(z,r.ink,0,1.6,9.35,1.1,.28,.35),V(z,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:U,body:N,head:z,arms:k,legs:$,eyes:q,styleIndex:v,baby:P}}function g(v,T){return v.duration>0?me.clamp((T-v.start)/v.duration,0,1):1}function x(v,T=c){u=Number.isFinite(v)?v:u,l=T||c,d=!1;for(let S of o.values()){let{character:M}=S;l&&(S.duration=0);let E=g(S,u),I=me.lerp(S.fromX,S.x,E),y=me.lerp(S.fromZ,S.z,E),P=t(I,y);!Number.isFinite(P)&&E<1&&(S.duration=0,E=1,I=S.x,y=S.z,P=t(I,y));let U=n?Math.min(1,n(I,y)/i1):1;if(M.root.visible=Number.isFinite(P)&&U>0,!M.root.visible)continue;d=!0,M.root.position.set(I,P,y),M.root.rotation.y=S.heading,M.root.scale.setScalar(U);let N=S.walking&&E<1&&!l,z=Math.floor(Math.max(0,u-S.born)*16)/16+.7+M.styleIndex*.62,q=Math.floor(E*12)/12*Math.PI*4,k=N?Math.sin(q)*.56:0,$=N?Math.abs(Math.sin(q))*1.9:(1+Math.sin(z*4.7))*.47;M.body.position.y=l?0:$*(M.baby?1.5:1),M.body.rotation.z=l?0:N?k*.15:Math.sin(z*2.8)*.045;for(let V=0;V<2;V++){let nt=V===0?-1:1;M.arms[V].rotation.x=N?-k*nt:l?0:Math.sin(z*3.1+V)*.09,M.legs[V].rotation.x=k*nt}s1(M,z,l)}}function p(v,T,{reduceMotion:S=!1}={}){c=S;let M=Number.isFinite(T)?T:u,E=new Map;for(let y of Array.isArray(v)?v:[])if(!(typeof y?.id!="string"||!y.id||y.id.length>256||!Number.isFinite(y.x)||!Number.isFinite(y.y)||E.has(y.id)||!Number.isFinite(t(y.x,y.y)))&&(E.set(y.id,y),E.size===t1))break;for(let[y,P]of o)E.has(y)||(P.character.root.visible=!1,a[P.character.styleIndex].push(P.character),o.delete(y));let I=al.map(()=>0);for(let{character:y}of o.values())I[y.styleIndex]++;for(let y of[...E.keys()].filter(P=>!o.has(P)).sort()){let P=I.indexOf(Math.min(...I));I[P]++;let U=a[P].pop()??h(P),{x:N,y:z}=E.get(y);o.set(y,{character:U,fromX:N,fromZ:z,x:N,z,heading:0,born:M,start:M,duration:0})}for(let[y,{x:P,y:U}]of E){let N=o.get(y);if(N.x!==P||N.z!==U){let z=S?1:g(N,M),q=me.lerp(N.fromX,N.x,z),k=me.lerp(N.fromZ,N.z,z),$=Math.hypot(P-q,U-k),V=$>1?Math.atan2(P-q,U-k):N.heading,G=!S&&$>0&&$<=n1&&e?.(q,k,P,U)?e1:0;Object.assign(N,{fromX:q,fromZ:k,x:P,z:U,heading:V,start:M,duration:G,walking:$>2})}}x(M,S)}function m(){if(s.removeFromParent(),!!r){for(let v of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])v.dispose();for(let v of r.palette)for(let T of Object.values(v))T.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let v of a)v.length=0;o.clear(),r=void 0}}return{setTracks:p,render:x,dispose:m,setVisible(v){s.visible=v},get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return d}}}function mp(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var cl=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),ll=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function r1([i,t,e,n],s,r,o,a){let c=cl(i,t,e,n,s,r),l=cl(i,t,e,n,o,a),u=cl(s,r,o,a,i,t),d=cl(s,r,o,a,e,n);return Math.abs(u)<1e-7&&ll(s,o,i)&&ll(r,a,t)||Math.abs(d)<1e-7&&ll(s,o,e)&&ll(r,a,n)?!0:c>0!=l>0&&u>0!=d>0}function fh(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>mp(a,r,o)&&!c.some(l=>mp(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,d]of t){let f=u-c,h=d-l,g=f*f+h*h;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*f+(o-l)*h)/g)),p=r-c-x*f,m=o-l-x*h;a=Math.min(a,p*p+m*m)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>r1(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var gp=new Ue,ul=new W,Tr=class extends _o{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Qt(t,3)),this.setAttribute("uv",new Qt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new is(e,6,1);return this.setAttribute("instanceStart",new Hn(n,3,0)),this.setAttribute("instanceEnd",new Hn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new is(e,6,1);return this.setAttribute("instanceColorStart",new Hn(n,3,0)),this.setAttribute("instanceColorEnd",new Hn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new po(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),gp.setFromBufferAttribute(e),this.boundingBox.union(gp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ul.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ul)),ul.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ul));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Rt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};vn.line={uniforms:Lo.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};var us=class extends Ye{constructor(t){super({type:"LineMaterial",uniforms:Lo.clone(vn.line.uniforms),vertexShader:vn.line.vertexShader,fragmentShader:vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var dh=new Se,xp=new W,yp=new W,on=new Se,an=new Se,Mi=new Se,ph=new W,mh=new ye,cn=new vo,_p=new W,hl=new Ue,fl=new Sn,Si=new Se,Ei,Ps;function vp(i,t,e){return Si.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Si.multiplyScalar(1/Si.w),Si.x=Ps/e.width,Si.y=Ps/e.height,Si.applyMatrix4(i.projectionMatrixInverse),Si.multiplyScalar(1/Si.w),Math.abs(Math.max(Si.x,Si.y))}function o1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){cn.start.fromBufferAttribute(s,a),cn.end.fromBufferAttribute(r,a),cn.applyMatrix4(e);let l=new W,u=new W;Ei.distanceSqToSegment(cn.start,cn.end,u,l),u.distanceTo(l)<Ps*.5&&t.push({point:u,pointOnLine:l,distance:Ei.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function a1(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),d=-t.near;Ei.at(1,Mi),Mi.w=1,Mi.applyMatrix4(t.matrixWorldInverse),Mi.applyMatrix4(n),Mi.multiplyScalar(1/Mi.w),Mi.x*=r.x/2,Mi.y*=r.y/2,Mi.z=0,ph.copy(Mi),mh.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,h=u;f<h;f++){if(on.fromBufferAttribute(c,f),an.fromBufferAttribute(l,f),on.w=1,an.w=1,on.applyMatrix4(mh),an.applyMatrix4(mh),on.z>d&&an.z>d)continue;if(on.z>d){let T=on.z-an.z,S=(on.z-d)/T;on.lerp(an,S)}else if(an.z>d){let T=an.z-on.z,S=(an.z-d)/T;an.lerp(on,S)}on.applyMatrix4(n),an.applyMatrix4(n),on.multiplyScalar(1/on.w),an.multiplyScalar(1/an.w),on.x*=r.x/2,on.y*=r.y/2,an.x*=r.x/2,an.y*=r.y/2,cn.start.copy(on),cn.start.z=0,cn.end.copy(an),cn.end.z=0;let x=cn.closestPointToPointParameter(ph,!0);cn.at(x,_p);let p=me.lerp(on.z,an.z,x),m=p>=-1&&p<=1,v=ph.distanceTo(_p)<Ps*.5;if(m&&v){cn.start.fromBufferAttribute(c,f),cn.end.fromBufferAttribute(l,f),cn.start.applyMatrix4(o),cn.end.applyMatrix4(o);let T=new W,S=new W;Ei.distanceSqToSegment(cn.start,cn.end,S,T),e.push({point:S,pointOnLine:T,distance:Ei.origin.distanceTo(S),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var dl=class extends ue{constructor(t=new Tr,e=new us({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)xp.fromBufferAttribute(e,o),yp.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+xp.distanceTo(yp);let r=new is(s,2,1);return t.setAttribute("instanceDistanceStart",new Hn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Hn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ei=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Ps=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),fl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Ps*.5;else{let d=Math.max(s.near,fl.distanceToPoint(Ei.origin));l=vp(s,d,c.resolution)}if(fl.radius+=l,Ei.intersectsSphere(fl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),hl.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Ps*.5;else{let d=Math.max(s.near,hl.distanceToPoint(Ei.origin));u=vp(s,d,c.resolution)}hl.expandByScalar(u),Ei.intersectsBox(hl)!==!1&&(n?o1(this,e):a1(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(dh),this.material.uniforms.resolution.value.set(dh.z,dh.w))}};var Ar=class extends Tr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var pl=class extends dl{constructor(t=new Ar,e=new us({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var bp="#ffce84",c1="#a8f5ff",gh="#10242e";function ml(i,t,e){return new us({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function gl(i,t,e,n){let s=new Ar;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new pl(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function Mp(i,t,e,n){let s=new le().setFromPoints(t.map(({x:o,y:a})=>new W(o,.5,a)));s.setIndex(zn.triangulateShape(t.map(({x:o,y:a})=>new Rt(o,a)),[]).flat());let r=new ue(s,e);r.renderOrder=n,i.add(r)}function Sp(){let i=new Ji,t={side:rn,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new ze({...t,color:bp,opacity:.13}),n=new ze({...t,color:gh,opacity:.95}),s=ml(gh,4.6,{opacity:.8}),r=ml(bp,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=ml(gh,3.5,{...o,opacity:.65}),c=ml(c1,1.7,{...o,opacity:.9});function l({origin:f,forward:h}){let g=(p,m=0)=>({x:f.x+h.x*p-h.y*m,y:f.y+h.y*p+h.x*m}),x=Array.from({length:28},(p,m)=>{let v=m/28*Math.PI*2;return g(10*Math.cos(v),10*Math.sin(v))});gl(i,[g(10),g(56)],[s,r],5),gl(i,[g(45,-7),g(56),g(45,7)],[s,r],5),Mp(i,x,n,7),gl(i,[...x,x[0]],[s,r],8)}function u(f){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let h=new Map;for(let g of f){let{points:x,kind:p,id:m,origin:v,forward:T}=g;if(x.length<3)continue;let S=p==="nominal";S&&Mp(i,x,e,0),gl(i,[...x,x[0]],S?[s,r]:[a,c],S?3:1),v&&T&&h.set(m,g)}for(let g of h.values())l(g)}function d(){u([]);for(let f of[e,n,s,r,a,c])f.dispose()}return{scene:i,setZones:u,dispose:d}}var l1=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),u1=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),Ep={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},xl=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"]}).map(([i,t])=>[i,t.map(e=>new Zt(e))])),h1=new Zt("#ffd59e"),wp=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:f1,smoothstep:Tp}=me;function d1({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new le;return o.setAttribute("position",new Qt(n,3)),o.setAttribute("uv",new Qt(s,2)),o.setIndex(r),o}var p1=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`,m1=`
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
`;function Ap({y:i,farZ:t,shoreline:e,focusX:n}){let s={waterTime:{value:0},rain:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},moon:{value:0},moonLight:{value:new Rt(0,1)},bodyPosition:{value:new Rt}};for(let[c,l]of wp.entries())s[l]={value:xl.clear[c].clone()};let r=new Ye({uniforms:s,vertexShader:p1,fragmentShader:m1,toneMapped:!1}),o=new ue(d1({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:d,condition:f,moonPhase:h,sunElevation:g,sunRising:x}=l,p=l1.has(f),m=Number.isFinite(g)?g:u?-19:42,v=Tp(m,-8,17),T=xl[p?"overcast":"clear"];for(let[U,N]of wp.entries())s[N].value.lerpColors(xl.night[U],T[U],v);let S=Object.hasOwn(Ep,h)?Ep[h]:void 0,M=d?!u:f==="sunny",E=u&&S!==void 0,I=f1(m/75,0,1),y=v*(1-Tp(m,8,34));M&&s.bodyTint.value.lerp(h1,y*.7),E&&s.bodyTint.value.copy(xl.night[5]);let P=u1.has(f);if(s.waterTime.value=Number.isFinite(c)&&!l.reduceMotion?c:0,s.rain.value=P?1:0,s.roughness.value=P||f==="windy"||f==="windy-variant"?1.65:1,s.cloudCover.value=p?.94:f==="partlycloudy"?.64:u?.32:.24,s.bodyVisibility.value=p?0:E?.93:M?.97:0,s.moon.value=E?1:0,E)s.moonLight.value.set(Math.sin(S),Math.cos(S)),s.bodyPosition.value.set(46,42);else{let U=x===!0?-107:x===!1?118:-31;s.bodyPosition.value.set(U*(1-I),38+I*20)}}return{mesh:o,update:a}}var yl=26,g1=92,Rr=4,x1=18,y1=188;function Cp(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-x1,o=r-2*yl-g1;return{nearZ:r,farZ:o,sceneryMinZ:o-y1}}function Ip(i,{nearZ:t,farZ:e},n,s,r){let o=e+yl,a=t-yl,c=(o+a)/2,l=r-s/2,u=r+s/2,d=(f,h,g,x)=>i.box(s,g,h-f,x,r,n+g/2,(f+h)/2);d(o,a,1.2,"#73767c"),d(o,o+3.4,1.4,"#656b71"),d(a-3.4,a,1.4,"#656b71");for(let[f,h,g,x]of[[e,o,o-Rr,e],[a,t,a,a+Rr]]){d(f,h,5,"#c0b6a7"),d(g,g+Rr,6.2,"#d0c3b0");let p=yl-Rr;for(let m=l+36;m<u;m+=72)i.box(1.15,.18,p,"#a69c91",m,n+5.04,x+p/2)}for(let f=l+36;f+17<u;f+=72)i.box(34,.2,2.8,"#e9ce91",f,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+Rr,maxZ:t,surfaceY:n+5},{minZ:e,maxZ:o-Rr,surfaceY:n+5}]}}function xh(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new le;o.setAttribute("position",new Qt(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function _1(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new io(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,d=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+d)}}function v1(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,d=s+.1;i.ball(a,c,13,"#d7bd94",l,d,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,d+.5,u+4);for(let[f,h,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])_1(i,l+a*f,u+h,d+c*.75,g,f*7)}}function b1(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function M1(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let d=(p,m,v)=>[Math.cos(p)*m,v,Math.sin(p)*m],f=o+u*2*Math.PI/8,h=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],d(f,16*.54,16.6+2.1),d(h,16*.54,16.6+2.1),d(f,16,16.6-.55),d(h,16,16.6-.55),d(f,16,16.6-2),d(h,16,16.6-2)],x=new le;x.setAttribute("position",new Qt(g.flat(),3)),x.setAttribute("uv",new Qt(g.flatMap(([p,,m])=>[p/32+.5,m/32+.5]),2)),x.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),x.computeVertexNormals(),i.add(x,u%2?r:s,t,n,e)}}function Rp(i,t,e,n,s,r){let o=(d,f)=>[t+d*Math.cos(r)+f*Math.sin(r),e-d*Math.sin(r)+f*Math.cos(r)],a=(d,f,h,g,x,p,m)=>{let[v,T]=o(x,m);i.box(d,f,h,g,v,n+p,T,r)};for(let d of[-1,1])a(1.1,1.2,18,"#988679",d*4.5,2.15,0),a(1,2.1,1.2,"#988679",d*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Re(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function S1(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,d=e+o;M1(i,u,d,s,a,c,l),Rp(i,u-13,d-15,s,c,l-.17),Rp(i,u+14,d-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,d+7,l*2)}}function Pp(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,m)=>{let v=l+r*m/c,T=v-a,S=t-108+14*Math.cos((T+110)*.006)+7*Math.sin((T-90)*.013);return{x:v,z:S}}),d=u.map(({x:p})=>[p,e+.28,t+.4]),f=u.map(({x:p,z:m})=>[p,e+.71,m+22]),h=u.map(({x:p,z:m})=>[p,e+.44,m+6]),g=u.map(({x:p,z:m})=>[p,e+.17,m-31]);xh(i,d,f,"#e3cba0"),xh(i,f,h,"#dbbd92"),xh(i,h,g,"#c8a47e");let x=Math.max(940,s-n);v1(i,a,t,x,e);for(let p of[-1,1])b1(i,a+p*x*.245,t,e);return S1(i,a,t,x,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:wi}=me,se={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},Lp=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],E1=new Map(Lp.map(i=>[i.id,i])),Np=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],Dp=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],w1=new Map(Np.map(i=>[i.id,i])),T1=new Map(Dp.map(i=>[i.id,i])),Up=({id:i,label:t,length:e,width:n,detail:s})=>Object.freeze({id:i,label:t,length:e,width:s==="food"?n+2:n}),_l=Object.freeze([...Lp,...Np].map(Up)),vl=Object.freeze(Dp.map(Up));function A1(i){let t=new le;return t.setAttribute("position",new Qt(i.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function yh(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Zt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Ie(a,3)),r}),e=Xn(t);for(let n of t)n.dispose();return e.computeBoundingBox(),e}function Fp(i,t){let e=i.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),n=[],s=(i.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;n.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)n.push(0,o,o+1,s,s+o+1,s+o);let r=new le;return r.setAttribute("position",new Qt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function R1(i){let t=[],e=(V,nt)=>t.push([V,nt]),n=(V,nt,G,X,Y,Z,ot)=>e(new Re(X,Y,Z).translate(V,nt,G),ot),s=(V,nt)=>e(A1(V),nt),r=(V,nt,G,X,Y,Z,ot)=>{let yt=[[nt,X,Z],[G,X,Z],[G,Y,Z],[nt,Y,Z]];s(V>0?yt:yt.reverse(),ot)},{width:o,tire:a,body:c,roof:l,detail:u}=i,d=i.length-2.8,f=d*.5,h=o*.435,g=a*.78,x=8.25+a*.52,p=x-(u==="sports"||u==="convertible"?1.8:.75);e(Fp([[-f,h*.76,x-1.6],[-f+2.4,h*.93,x-.2],[-f+6.2,h,x],[f-6.2,h,x-.24],[f-2.4,h*.92,p+.35],[f,h*.75,p]],g),c);let m=g+.95;for(let V of[-1,1])n(V*(f-.22),m,0,1.42,1.58,h*1.57,se.bumper),n(V*(f+.05),m+.82,0,1.08,.95,4.5,se.plate);n(f+.1,p-2.8,0,.65,1.2,h*.64,se.grille),n(f+.38,p-2.62,0,.24,.35,h*.55,se.rim);for(let V of[-1,1]){n(0,g+1.3,V*(h+.04),d*.53,.9,.34,se.bumper);for(let nt of[-.323,.323]){let G=d*nt,X=V*(h+.05);e(new En(a,a,2.9,10).rotateX(Math.PI/2).translate(G,a,X),se.tire),e(new Vn(a*.57,8).rotateY(V<0?Math.PI:0).translate(G,a,X+V*1.46),se.rim),e(new Vn(a*.28,6).rotateY(V<0?Math.PI:0).translate(G,a,X+V*1.48),se.hub)}}let[v,T,S,M]=i.cabin.map(V=>d*V),E=x-.35,I=i.height-1.25,y=h*.88,P=y*(i.windows>2||u==="camper"||u==="delivery"?.94:.79),U=V=>wi(y,P,V),N=V=>wi(E,I,V),z=(V,nt,G,X=0)=>[wi(wi(v,T,nt),wi(M,S,nt),V),N(nt),G*(U(nt)+X)];function q(V,nt,G,X,Y=.2,Z=.85,ot=.08){let yt=[z(nt,Y,V,ot),z(G,Y,V,ot),z(G,Z,V,ot),z(nt,Z,V,ot)];s(V>0?yt:yt.reverse(),X)}function k(V,nt,G,X,Y,Z,ot=0){let[yt,bt]=V>0?[M,S]:[v,T],St=(at,ht)=>[wi(yt,bt,ht)+V*ot,N(ht),at*U(ht)],Pt=[St(G,X),St(nt,X),St(nt,Y),St(G,Y)];s(V>0?Pt:Pt.reverse(),Z)}function $(V){k(V,-.81,.81,.16,.88,se.window,.08),k(V,-.72,.73,.23,.82,se.glass,.13),k(V,-.67,.64,.67,.75,se.glassGlow,.18)}if(u==="convertible"){k(1,-.88,.88,0,1,l,.08),$(1),n((v+S)/2,E+.2,0,(S-v)*.96,1.05,y*1.92,se.window);for(let V of[-1,1])n(v+5.7,E+2.35,V*y*.43,7.7,2.5,5.6,se.upholstery),n(v+2.2,E+3.7,V*y*.43,2,5.2,6,se.tan)}else{for(let Y of[-1,1])q(Y,0,1,c,0,1,0);k(1,-1,1,0,1,c),k(-1,-1,1,0,1,c),$(1),["delivery","cargo","food"].includes(u)||$(-1);let V=(S+T)/2,nt=S-T+.38;n(V,I+.34,0,nt,.84,P*2.05,l),u==="bubble"&&n(V,I+.79,0,nt*.88,.52,P*1.67,l),u==="sunroof"&&(n(V,I+.82,0,nt*.48,.24,P*1.12,se.window),n(V-nt*.12,I+.98,0,.65,.18,P,se.glassGlow));let G=i.windows??2,X=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:G},(Y,Z)=>[(Z+.16)/G,(Z+.86)/G]);for(let Y of[-1,1])for(let[Z,ot]of X)q(Y,Z,ot,se.window),q(Y,Z+.011,ot-.009,se.glass,.29,.79,.13),q(Y,Z+.023,ot-.025,se.glassGlow,.64,.72,.18)}for(let V of[-1,1])n(M-3,E+1.05,V*(h+.2),3.2,1.8,1.75,l),n(wi(v,M,.36),x-1.45,V*(h+.1),2.8,.46,.24,se.rim);return{add:e,box:n,sideFace:r,glazingSide:q,bodyParts:t,recipe:i,length:d,outer:h,shoulder:x,nose:f,frontY:p}}function C1(i,t){let{length:e,outer:n,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=i,l=-e*.454,u=e*.105,d=r.height-.4,f=u-l;o(Fp([[l,n*.93,d-.7],[l+1.6,n,d],[u-1.6,n,d],[u,n*.93,d-.7]],s-.8),t),a((l+u)/2,d+.1,0,f-3.5,.28,n*1.6,r.roof);for(let h of[-1,1]){let g=h*(n+.1);c(h,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let h of[-.4,0,.4])a(l-.13,(s+d)/2,n*h,.26,d-s-3.1,.4,se.rim);return{rear:l,front:u,top:d}}function I1(i){let{recipe:t,box:e,sideFace:n,glazingSide:s,length:r,outer:o,shoulder:a}=i,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let d=l+.5;for(let f of[-1,1])e(r*-.18,d,f*o*.51,r*.3,.85,.83,se.roofRail);if(c==="trail"){for(let f of[-.29,-.07])e(r*f,d+.55,0,1.05,.75,o*1.18,se.roofRail);e(r*-.18,d+1.1,0,r*.17,1.65,o*.78,se.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,se.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let d=r*-.25;e(d,a+.22,0,r*.35,.42,o*1.43,se.wood);for(let f of[-1,1])e(d,a+.93,f*o*.84,r*.34,2.28,1.72,u),e(d,a+.48,f*o*.38,r*.33,.25,.4,se.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,se.tan)}else if(c==="cargo"||c==="food"){let{rear:d,front:f}=C1(i,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let h=a+7;n(1,d+5.5,f-4.5,h,h+8.4,o+.19,se.window),e((d+f)/2,h,o+.75,f-d-9.5,.75,2.65,se.wood);for(let g=0;g<7;g++)e(wi(d+6,f-4.5,g/6),h+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let d of[-1,1])c==="delivery"?(s(d,.1,.61,"#e5d6e4",.28,.65,.12),s(d,.18,.54,"#b39cc2",.43,.49,.18)):(s(d,.09,.61,"#456575",.29,.68,.12),s(d,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,d*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let d of[-1,1])e(0,a-1.05,d*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,se.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function Op(i,t,e){return[{role:"body",geometry:yh(i),material:new He({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new He({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new He({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function Bp(i,t){let{style:e,length:n,paint:s,trim:r,jacket:o,helmet:a}=i,c=[],l=(bt,St)=>c.push([bt,St]),u=(bt,St,Pt)=>l(new Re(...Pt).translate(...St),bt),d=(bt,St,Pt,at=0)=>l(new Qe(1,8,5).scale(...Pt).rotateZ(at).translate(...St),bt);function f(bt,St,Pt,at){let ht=new W(...St),Tt=new W(...Pt),Ft=new W().subVectors(Tt,ht),Lt=new fn().setFromUnitVectors(new W(0,1,0),Ft.clone().normalize());l(new En(at,at,Ft.length(),5,1,!0).applyQuaternion(Lt).translate(...ht.lerp(Tt,.5).toArray()),bt)}let h=t?1:.75,g=n*(t?.132:.15),x=-n*(e==="longtail"?.309:.326),p=n*.326,m=[n*-.024,g+h*1.25,0],v=[n*(e==="cruiser"?-.16:-.115),n*(e==="trail"?.4:e==="cruiser"?.327:.369),0],T=e==="road"||e==="racer",S=[n*(T?.234:.204),v[1]+(T?.5:3.7)*h,0],M=h*(t?2.2:1.36),E=h*(t?1.04:.65),I=h*(t?.9:.65),y=e!=="road";for(let bt of[x,p]){l(new wn(g-E,E,4,12).translate(bt,g,0),se.tire),y&&l(new wn(g+h*.37,h*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(bt,g,0),s);for(let St of[0,Math.PI/3,Math.PI*2/3]){let Pt=g-E*1.35,at=Math.cos(St)*Pt,ht=Math.sin(St)*Pt;f(se.rim,[bt-at,g-ht,0],[bt+at,g+ht,0],h*.23)}l(new En(h*1.05,h*1.05,M,8).rotateX(Math.PI/2).translate(bt,g,0),se.hub)}let P=[x,g,0];f(s,P,v,I),f(s,P,m,I),f(s,v,m,I),f(s,m,S,I);let U=e==="basket"||e==="scooter"?[S[0]*.7,m[1]+h*2.65,0]:S;f(s,v,U,I),U!==S&&f(s,U,S,I);for(let bt of[-1,1])f(se.rim,[S[0],S[1]-h*2.3,bt*M*.38],[p,g,bt*M*.45],I*.7);u(se.bumper,[v[0]-.25,v[1]+h*.4,0],[h*(t?7.1:4.8),h*1.08,h*3.15]);let N=h*(t?5.05:4.75),z=S[0]+(T?h*1.85:-h*.8),q=S[1]+(T?-h*.6:h*.25);for(let bt of[-1,1]){let St=[z,q,bt*N];f(se.rim,S,St,h*.47),f(se.tire,[z+h*.6,q,bt*N*.82],St,h*.63)}if(t){u(se.bumper,[m[0]+.4,m[1]+1.05,0],[6.4,4.9,5.4]);let bt=e==="scooter"?[S[0]+2.1,v[1]-2.3,0]:[v[0]+5.5,v[1]+.7,0],St=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(d(s,bt,St,e==="scooter"?.34:-.18),u(r,[bt[0]+.8,bt[1]+.15,St[2]*.87],[St[0]*1.18,1,.8]),u(r,[bt[0]+.8,bt[1]+.15,-St[2]*.87],[St[0]*1.18,1,.8]),e==="racer")d(se.window,[S[0]+2,S[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[x+1.75,v[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,g*2.1+1.05,0],[7.25,.82,3.65]),u(se.rim,[x+1.55,v[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")d(s,[x+3.7,v[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[m[0],g+1.1,0],[8.2,1.22,6.2]);else for(let Pt of[-1,1])f(se.rim,[x-2.2,g+2.1,Pt*2.8],[m[0]+4.5,g+.45,Pt*3.25],.79)}else{let bt=e==="longtail"?[x+1.1,g*2.05+1.8,0]:[p-.98,S[1]-1.55,0];e==="basket"||e==="longtail"?(u(se.wood,bt,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[bt[0],bt[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(se.tan,[bt[0],bt[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[x+1.65,g+1.05,2],[4.2,3.4,1.85]),u(se.roofRail,[x+1.6,g*2.05+.45,0],[5.3,.66,4.3]))}let k=[v[0]-h*.38,v[1]+h*2.05,0],$=[k[0]+(T?3.05:1.05)*h,k[1]+h*3.75,0],V=[$[0]+(T?3.35:.95)*h,$[1]+(T?3.1:4.85)*h,0],nt=T?-.57:-.22;d(o,$,[h*2.6,h*4.15,h*3],nt),d(a,V,[h*2.94,h*2.68,h*2.62]),d(se.window,[V[0]+h*2.1,V[1]-h*.4,0],[h*1.08,h*1.05,h*2.2]),(e==="commuter"||e==="trail")&&u(r,[$[0]-h*2.1,$[1]+h*.6,0],[h*1.9,h*3.3,h*3.5]);let G="#4b4e63",X="#e2b491";for(let bt of[-1,1]){let St=[$[0]+h*1.1,$[1]+h*1.65,bt*h*2.43],Pt=[wi(St[0],z,.48),wi(St[1],q,.52)-h,bt*h*3.48],at=[z,q,bt*N*.93];f(o,St,Pt,h*.95),f(o,Pt,at,h*.76),u(X,at,[h*1.5,h*1.11,h*1.09]);let ht=t?0:bt*h*1.35,Tt=[k[0]+h*(t?4.3:4.9)+ht,k[1]-h*3.5,bt*h*2.64],Ft=[m[0]+h*(e==="scooter"?2.65:.35)+ht,m[1]+h*.27-ht,bt*h*2.5];f(G,[k[0],k[1],bt*h*1.86],Tt,h*1.12),f(G,Tt,Ft,h*.88),u(se.tire,[Ft[0]+h*.25,Ft[1],Ft[2]],[h*2.15,h*.95,h*1.42])}let Y=h*(t?1.34:.84),Z=[p+h*.58,g*(t?2.3:2.18),0],ot=[x-h*.56,g*(t?2.18:2.02),0];f(se.bumper,[p,g+h*1.5,0],Z,h*.58),f(se.bumper,[x,g*1.6,0],ot,h*.46);let yt=bt=>yh([[new Qe(Y,6,4).scale(.53,.78,1).translate(...bt),"#ffffff"]]);return Op(c,yt(Z),yt(ot))}function kp(i){let t=w1.get(i);if(t)return Bp(t,!0);let e=E1.get(i);if(!e)return null;let n=R1(e);I1(n);let{outer:s,nose:r,frontY:o,shoulder:a,bodyParts:c}=n,l=(u,d)=>yh([-1,1].map(f=>[new Re(1.48,1.8,s*.35).translate(u*(r+.19),d,f*s*.63),"#ffffff"]));return Op(c,l(1,o-1.75),l(-1,a-2.65))}function zp(i){let t=T1.get(i);return t?Bp(t,!1):null}var Hp=new Map([["clear",{stride:4,speed:86}],["slow",{stride:2,speed:53}],["heavy",{stride:1,speed:24}]]),Cr={stride:3},P1=242,Vp=12,Gp=.38,L1=new Map(_l.map(i=>[i.id,i]));function Wp({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,Vp*Math.round(n/(Vp*P1))),o=n/r,a=e.map((x,p)=>Array.from({length:r},(m,v)=>({z:x,lane:p,index:v,x:s,offset:o*(v+.25+(p?.5:0))}))),c=0,l,u,d,f=!1,h=[];function g(x,p,m,v=!1){let T=p?.severity==="ambient"?Cr:Hp.get(p?.severity),S=Number.isFinite(l)&&Number.isFinite(x)?me.clamp(x-l,0,.25):0;if(l=x,T!==u){f=!!(u&&T&&(T===Cr||u===Cr));let I=Math.min(r,T?.stride??1);h=T?a.flatMap((y,P)=>y.filter(({index:U})=>U%I===P%I)):[],u=T}if(!T)return d=void 0,h;let M=p.speedFactor,E=T===Cr?o*Math.min(r,Cr.stride)/2:Number.isFinite(M)&&M>0?Hp.get("clear").speed*me.clamp(M,.22,1):T.speed;if(v)c=!m&&Number.isFinite(x)?Math.max(0,x)*E:0;else if(!m)if(f&&d!==void 0){let I=Math.exp(-S/Gp),y=d-E;c+=S*E+y*Gp*(1-I),d=E+y*I,f=Math.abs(d-E)>.1}else c+=S*E,d=E;for(let I of h){let y=I.offset+c,P=y%n;I.lap=Math.floor(y/n),I.x=s+(I.lane?n-P:P)}return h}return{capacity:r*e.length,update:g}}function Xp(i){let t=new ce,e=Wp(i),n,s=new Map;function r(h,g){let x=new vs(h,g,e.capacity);return x.count=0,x.frustumCulled=!1,x.instanceMatrix.setUsage(xi),x}let o=r(new Vn(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new ze({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1}));t.add(o);let a=new Oe,c;t.visible=!1;function l(h,g){for(let{mesh:x,role:p}of h.layers)p==="headlamp"&&(x.material.emissiveIntensity=g?1.65:.26),p==="taillamp"&&(x.material.emissiveIntensity=g?.91:.28)}function u(h){if(s.has(h.id))return s.get(h.id);let g=new ce;g.name=`vehicle-${h.id}`;let x=kp(h.id).map(({geometry:m,material:v,role:T})=>({mesh:r(m,v),role:T}));g.add(...x.map(({mesh:m})=>m)),t.add(g);let p={group:g,layers:x,count:0};return l(p,c),s.set(h.id,p),p}function d(h,g,{reduceMotion:x=!1,night:p=!1,transientTelemetry:m=!1}={}){m&&(n??=Wp(i));let T=(m?n:e).update(h,g,x,m);if(t.visible=T.length>0,!t.visible)return;if(p!==c){c=p;for(let M of s.values())l(M,p)}for(let M of s.values())M.count=0;let S=L1.get(g?.vehicleStyle);for(let[M,E]of T.entries()){let I=E.index+Math.floor(E.index/Cr.stride)+E.lane*6+E.lap,y=S??_l[I%_l.length],P=u(y);a.position.set(E.x,i.surfaceY,E.z),a.rotation.y=E.lane?Math.PI:0,a.scale.set(1,1,1),a.updateMatrix();for(let{mesh:U}of P.layers)U.setMatrixAt(P.count,a.matrix);P.count++,a.scale.set(y.length*.55,1,y.width*.62),a.updateMatrix(),o.setMatrixAt(M,a.matrix)}o.count=T.length,o.instanceMatrix.needsUpdate=!0;for(let{group:M,layers:E,count:I}of s.values()){M.visible=I>0;for(let{mesh:y}of E)y.count=I,I&&(y.instanceMatrix.needsUpdate=!0)}}function f(){t.traverse(h=>{h.isInstancedMesh&&(h.dispose(),h.geometry.dispose(),h.material.dispose())}),t.clear()}return{root:t,update:d,dispose:f}}var N1=22,D1=63,U1=525,F1=1100,O1=22,B1=75,k1=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],Yp=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],z1=(i,t)=>(i%t+t)%t;function H1(i){let t=i.width-B1*2,e=[],n=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(i.centerX))return{walkers:e,cyclists:n,sample:()=>({walkers:e,cyclists:n})};let s=i.centerX-t/2,r=Math.max(1,Math.round(t/U1)),o=Math.max(1,Math.round(t/F1)),a=t/r,c=t/o;for(let[u,d]of(i.sidewalks??[]).entries()){let{minZ:f,maxZ:h,surfaceY:g}=d,x=h-f;if(![f,h,g].every(Number.isFinite)||x<=0)continue;let p=u%2?-1:1,m=Math.min(1,x/O1),v=f+x*(p>0?.25:.75),T=f+x*(p>0?.76:.24);for(let S=0;S<r;S++){let M=Yp[(S+u*2)%Yp.length],E=t/2+(S+u*.42)*a-35,I=`sidewalk-walk-${u}-${S}`;for(let[y,[P,U]]of M.entries())e.push({id:`${I}-${y}`,groupId:I,style:P,child:U<.8,offset:E-p*13.2*y,scale:m*U,direction:p,y:g,z:v+p*.62*(y%2),phase:S*.91+u*.8+y*2.1})}for(let S=0;S<o;S++)n.push({id:`sidewalk-bike-${u}-${S}`,style:vl[(S+u*2)%vl.length],offset:t/2+(S+u*.65)*c,scale:m,direction:p,y:g,z:T,phase:S*1.7+u})}function l(u=0,d=!1){let f=Number.isFinite(u)?Math.max(0,u):0,h=(g,x,p)=>g.map(m=>({...m,x:s+z1(m.offset+m.direction*x*f,t),gait:d?0:f*p+m.phase}));return{walkers:h(e,N1,10),cyclists:h(n,D1,7)}}return{walkers:e,cyclists:n,sample:l}}var bl={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function _h(i,t,e){let{shirt:n,trim:s,pants:r,skin:o,hair:a,accessory:c}=k1[i.style],l=t?0:Math.sin(i.gait),u=Math.abs(l)*.69,d=f=>f+u;e(n,0,d(10.45),0,2.95,4.3,3.4),e(r,-.1,d(7.25),0,2.6,1.7,3.04),e(s,1.1,d(13.35),0,2.14,.69,2.55),e(s,2.68,d(10.4),-.7,.41,.86,1);for(let f of[-1,1]){let h=l*f,g=h*3,x=Math.max(0,h)*1.35;e(r,g*.45,4.5+x*.42+u*.32,f*1.51,1.19,3.2,1.25,-.48*h),e(bl.shoe,.77+g,1.11+x,f*1.52,2.17,.99,1.34),e(bl.sole,1.38+g,.49+x,f*1.52,1.64,.43,1.32),e(n,-h*1.07,d(10.16),f*3.15,1.23,2.87,1.15,.38*h),e(o,-h*2.16,d(7.7),f*3.31,.98,1.1,.95)}e(a,-.67,d(17.25),0,4.17,4.32,3.82),e(o,1.05,d(16.63),0,3.76,3.75,3.41),e(a,1.12,d(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,d(16.54),0,.64,.63,.66);for(let f of[-1,1])e(o,.36,d(16.69),f*3.47,1.02,1.07,.64),e(bl.ink,4.18,d(17.25),f*1.35,.34,.47,.43),e(bl.blush,3.76,d(16.21),f*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,d(19.68),.72,1.98,1.89,1.89),e(s,-3.51,d(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(n,-.5,d(20.2),0,3.72,1.97,3.45),e(s,2.72,d(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,d(10.2),0,1.48,2.89,2.63),e(n,-4.01,d(10.65),0,.46,1.28,1.77)),c==="curls")for(let f of[-1,1])e(a,-.9,d(18.52),f*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,d(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,d(21.05),2.67,1.51,.92,.65,-.47))}function qp(i){let t=H1(i),e=new ce;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let n=new Oe;function s(m,v,T,S){let M=new vs(v,T,S);return M.name=m,M.frustumCulled=!1,M.instanceMatrix.setUsage(xi),e.add(M),M}let r=new Map,o=0;for(let m of t.walkers)_h(m,!0,v=>{o++,r.has(v)||r.set(v,new Zt(v))});let a=s("sidewalk-walkers",new Qe(1,9,6),new He({color:"#fff",roughness:.81}),o),c=0;for(let m of t.walkers)_h(m,!0,v=>a.setColorAt(c++,r.get(v)));let l=s("sidewalk-contact-shadows",new Vn(1,16).rotateX(-Math.PI/2),new ze({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),u=new Map(vl.map(m=>{let v=t.cyclists.filter(T=>T.style.id===m.id).length;return[m.id,v?zp(m.id).map(({geometry:T,material:S,role:M})=>({role:M,mesh:s(`sidewalk-bicycle-${m.id}-${M}`,T,S,v)})):[]]})),d,f=0,h,g;function x(m,{reduceMotion:v=!1,night:T=!1,transientTelemetry:S=!1}={}){if(T!==d){for(let N of u.values())for(let{role:z,mesh:q}of N)z==="headlamp"&&(q.material.emissiveIntensity=T?1.05:.16),z==="taillamp"&&(q.material.emissiveIntensity=T?.75:.18);d=T}if(!S){let N=Number.isFinite(h)&&Number.isFinite(m)?me.clamp(m-h,0,.25):0;v||(f+=N),h=m}let M=S?v?0:m:f;if(g?.time===M&&g?.reduceMotion===v&&g?.transientTelemetry===S)return;g={time:M,reduceMotion:v,transientTelemetry:S};let E=t.sample(M,v),I=0,y=0;function P(N,z,q){n.position.set(N.x,N.y+.065,N.z),n.rotation.set(0,0,0),n.scale.set(z*N.scale,1,q*N.scale),n.updateMatrix(),l.setMatrixAt(y++,n.matrix)}for(let N of E.walkers){let{direction:z,scale:q}=N,k=z>0?0:Math.PI;_h(N,v,($,V,nt,G,X,Y,Z,ot=0)=>{n.position.set(N.x+V*q*z,N.y+nt*q,N.z+G*q*z),n.rotation.set(0,k,ot),n.scale.set(X*q,Y*q,Z*q),n.updateMatrix(),a.setMatrixAt(I++,n.matrix)}),P(N,5.32,4.1)}let U=new Map;for(let N of E.cyclists){let z=U.get(N.style.id)??0;n.position.set(N.x,N.y,N.z),n.rotation.set(0,N.direction>0?0:Math.PI,0),v||n.rotateX(Math.sin(N.gait)*.028),n.scale.setScalar(N.scale),n.updateMatrix();for(let{mesh:q}of u.get(N.style.id))q.setMatrixAt(z,n.matrix);U.set(N.style.id,z+1),P(N,N.style.length*.52,N.style.width*.58)}for(let N of u.values())for(let{mesh:z}of N)z.instanceMatrix.needsUpdate=!0;a.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0}function p(){for(let m of e.children)m.dispose(),m.geometry.dispose(),m.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:x,dispose:p}}var bh=Math.PI*2,{clamp:Mh,lerp:Ls}=me,V1=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),G1=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7}];function Zp(i,t){let e=0,n=i.length-1;for(;n-e>1;){let o=e+n>>1;t<i[o].x?n=o:e=o}let s=i[e],r=i[n];return Ls(s.z,r.z,Mh((t-s.x)/(r.x-s.x),0,1))}function W1(i){if(!Array.isArray(i?.shoreline)||i.shoreline.length<2||![i.y,i.farZ,i.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:n}=i,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:G1.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=Mh(n+o.center,s+c,r-c);function u(d){let f=l+Math.cos(d)*a,h=Math.max(e+65,Zp(t,f)-o.offshore-Math.sin(d)*o.drift);return{x:f,z:h}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*bh/12);if(Zp(t,c)-l<o.length/2+8)return!1}return!0})}function $p(i,t,e=.003){let n=i.point(t-e),s=i.point(t+e);return Math.atan2(n.z-s.z,s.x-n.x)}function X1(i,t,{condition:e}={}){let n=Number.isFinite(t)?t:0,s=i.start+n*bh/i.period,{x:r,z:o}=i.point(s),a=n*1.24+i.start*3,c=V1.has(e)?1.55:1;return{x:r,z:o,angle:s,yaw:$p(i,s),heave:Math.sin(a)*.55*c,pitch:Math.cos(a*.89)*.017*c,roll:Math.sin(a*.74+.4)*.031*c}}function Kp(i,t){let e=new le;return e.setAttribute("position",new Qt(i.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function jp(i){return Kp(i,i.length===3?[0,1,2]:[0,1,2,0,2,3])}function vh(i,t,e,n,s=1){let r=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],o=r.flatMap(([u,d])=>{let f=u*i,h=t*d*s/2;return[[f,n,-h*.58],[f,n,h*.58],[f,e-.9,h],[f,e,h*.88],[f,e,-h*.88],[f,e-.9,-h]]}),a=[],c=6,l=(r.length-1)*c;for(let u=0;u<l;u+=c)for(let d=0;d<c;d++){let f=(d+1)%c;a.push(u+d,u+d+c,u+f+c,u+d,u+f+c,u+f)}for(let u=1;u<c-1;u++)a.push(0,u,u+1,l,l+u+1,l+u);return Kp(o,a)}function Y1(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Zt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new Ie(c,3)),r}),e=Xn(t);for(let n of t)n.dispose();return e}function Fn(i,t,e,n,s,r){return new Re(i,t,e).translate(n,s,r)}function ki(i,t,e){let n=new W(...i),s=new W(...t).sub(n),r=new fn().setFromUnitVectors(new W(0,1,0),s.clone().normalize());return new En(e,e,s.length(),6).applyQuaternion(r).translate(...n.addScaledVector(s,.5).toArray())}function Jp(i,t,e,n,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let d=Ls(Ls(t[0],e[0],l),n[0],u),f=Ls(Ls(t[1],e[1],l),n[1],u),h=Ls(Ls(t[2],e[2],l),n[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[d,f,h]};for(let l=0;l<o.length-1;l++){let u=o[l],d=o[l+1];for(let f=0;f<a;f++){let h=f/a,g=(f+1)/a,x=[c(h,u),c(g,u),c(g,d)];d<1&&x.push(c(h,d)),i.push([jp(x),r[l]])}}}function q1(i){let t=[3,43,0];i.push([ki([3,4,0],t,.9),"#c6a983"],[ki([3,11,0],[-25,10,-13],.6),"#c6a983"],[ki([28,5,0],t,.33),"#d7c5a8"],[ki([-25,5,0],t,.28),"#d7c5a8"],[Fn(15,1.9,10,-13,5.4,0),"#a8886e"],[Fn(9,1.5,7.5,-13,6.35,0),"#62797b"]),Jp(i,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),Jp(i,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function Z1(i){i.push([Fn(28,8.5,17,-7,9.1,0),"#f1e5cc"],[Fn(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[Fn(9,.75,7,-9,15.5,0),"#8aa5a5"],[Fn(9,2.2,11,-24,5.9,0),"#bc9472"],[jp([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[ki([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])i.push([Fn(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);i.push([ki([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[ki([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function J1(i){i.push([Fn(15,6.1,13,6,7.9,0),"#e4d7ad"],[Fn(17,1.4,14,6,11.65,0),"#71968e"],[Fn(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[Fn(9,3.4,7,-8,6.8,2.6),"#d7a674"],[Fn(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[ki([-19,5,-5],[-28,16,-7],.45),"#907459"],[ki([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])i.push([Fn(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new wn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function $1(i,t){let{id:e,length:n,beam:s,paint:r,deck:o}=i,a=new ce;a.name=i.name;let c=[[vh(n,s,3.7,-2.5),r],[vh(n,s,4.52,3.55,1.018),"#f4e4c9"],[vh(n*.92,s,4.75,4.44,.83),o]];return e==="sailboat"?q1(c):e==="cabin"?Z1(c):J1(c),a.add(new ue(Y1(c),t)),a}var hs=12,K1=new Zt("#def5e9");function j1(i,t){let n=hs*3*2,s=new le,r=new Ie(new Float32Array(n*3),3).setUsage(xi),o=new Float32Array(n*4),a=[];for(let d=0;d<3;d++)for(let f=0;f<hs;f++){let h=(d*hs+f)*2,g=f/(hs-1),x=Math.pow(Math.sin((.1+.9*g)*Math.PI),1.15)*(1-.4*g);for(let p=0;p<2;p++)K1.toArray(o,(h+p)*4),o[(h+p)*4+3]=i.wake*x*(d===1?.22:.76);f<hs-1&&a.push(h,h+2,h+1,h+1,h+2,h+3)}s.setAttribute("position",r),s.setAttribute("color",new Ie(o,4)),s.setIndex(a);let c=new ze({vertexColors:!0,side:rn,transparent:!0,depthWrite:!1,opacity:.82}),l=new ue(s,c);l.name=i.name+" wake",l.frustumCulled=!1;function u({angle:d},f){let g=(i.id==="cabin"?4.1:6)*bh/i.period;for(let x=0;x<hs;x++){let p=x/(hs-1),m=d-g*p,v=$p(i,m),{x:T,z:S}=i.point(m),M=Math.cos(v),E=Math.sin(v),I=i.length*.48,y=T-M*I,P=S+E*I;for(let U=0;U<3;U++){let N=(U-1)*i.beam*(.19+p*.62),z=(U===1?1.85:.62)*(1+p*.55);for(let q=0;q<2;q++){let k=N+(q?z:-z);r.setXYZ((U*hs+x)*2+q,y+E*k,t+.14,P+M*k)}}}r.needsUpdate=!0,c.opacity=f?.44:.82}return{mesh:l,update:u}}function Qp(i){let t=new ce;t.name="Coastal boats";let e=new He({vertexColors:!0,side:rn,roughness:.73}),n=W1(i).map(l=>{let u=$1(l,e),d=j1(l,i.y);return t.add(d.mesh,u),{route:l,hull:u,wake:d}}),s=0,r,o=!1;function a(l,{reduceMotion:u=!1,night:d=!1,condition:f,transientTelemetry:h=!1}={}){if(o)return;let g=Number.isFinite(l)?l:void 0;!h&&!u&&g!==void 0&&r!==void 0&&(s+=Mh(g-r,0,.25)),r=h?void 0:g;let x=h?u?0:g??0:s;for(let{route:p,hull:m,wake:v}of n){let T=X1(p,x,{condition:f});m.position.set(T.x,i.y+T.heave,T.z),m.rotation.set(T.roll,T.yaw,T.pitch,"YXZ"),v.update(T,d)}}function c(){if(!o){o=!0;for(let{hull:l,wake:u}of n)l.children[0].geometry.dispose(),u.mesh.geometry.dispose(),u.mesh.material.dispose();e.dispose(),t.clear()}}return a(0),{root:t,update:a,dispose:c}}var Q1=new W(0,-1,0),tM=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],Sh=.01;function tm(i){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(i)}function nm(i){return!i.isMesh||!i.geometry?!1:(Array.isArray(i.material)?i.material:[i.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function eM(i){i.updateWorldMatrix(!0,!0);let t=[];i.traverseVisible(a=>{if(!nm(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let n=new Ue;for(let a of t)a.min.y<=e+Sh&&n.union(a);let s=n.getCenter(new W),r=n.getSize(new W),o=e-i.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-i.position.x,centerZ:s.z-i.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function nM(i,t){let{type:e}=i;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"?[44.65,46.45]:e.includes("dining-set")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function iM(i,t){let[e,n]=nM(i.item,t);if(![e,n,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Ue().setFromObject(s);return r.isEmpty()?null:{placement:i,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:n*s.scale.y}}function em(i,t){let e=t?.[i.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:i}function im(i,t){return i.intersectObject(t,!0).find(e=>nm(e.object))}function sm(i,{low:t,high:e}){return i?.face?.normal.y>=.92&&i.point.y>=t&&i.point.y<=e}function sM(i,t,e,n,s,r){let o=t.x+e.centerX-n.x,a=t.z+e.centerZ-n.z,{bounds:c,probe:l,rootY:u}=i;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let d=-1/0;for(let[f,h]of tM){r.set(o+f*e.radiusX,c.max.y+1,a+h*e.radiusZ),s.set(r,Q1);let g=im(s,l);if(!sm(g,i))return null;d=Math.max(d,g.point.y)}return u+d}function rm(i,t){let e=[],n=[];for(let c of i){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=tm(c.item);if(u==="surface"){let d=iM(c,l);d&&e.push(d)}else if(u==="tabletop"){let d=eM(l.root);d&&n.push({placement:c,foot:d})}}let s=new ss,r=new W;function o(c){let l=new Map;for(let{placement:u,foot:d}of n){let f=em(u,c),h=null,g=u.baseY,x=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let m=em(p.placement,c),v=sM(p,f,d,m,s,r);if(v===null||v<=u.baseY||v<g-Sh)continue;let T=p.placement.item.id,S=Math.hypot(f.x-m.x,f.z-m.z);Math.abs(v-g)<Sh&&(S>x||S===x&&T>h)||(h=T,g=v,x=S)}l.set(u.item.id,{y:g-d.bottom,supportId:h})}return l}function a(c,l){if(tm({type:c})!=="tabletop")return null;let u=new ss(void 0,void 0,l.near,l.far),d=new W,f;for(let h of e){let{x:g,z:x}=h.placement;d.copy(l.ray.origin).sub(r.set(g,h.rootY,x)),u.set(d,l.ray.direction);let p=im(u,h.probe);p&&(!f||p.distance<f.hit.distance||p.distance===f.hit.distance&&h.placement.item.id<f.surface.placement.item.id)&&(f={hit:p,surface:h,x:g,z:x})}return!f||!sm(f.hit,f.surface)?null:{x:f.x+f.hit.point.x,y:f.z+f.hit.point.z}}return{resolve:o,projectTabletop:a}}var El=Math.PI/180,Th=14,gm=56,rM=21,ai=-111,ci=-108,xm=14,oM=28,Go=28,om={minX:0,maxX:1536,minZ:0,maxZ:1024},Eh={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},wh={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},aM=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),cM=new Set(["snowy","snowy-rainy","hail"]),am={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function Tl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function wl(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function ym(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function _m(i,t,e,n){let s=i.some(o=>wl(o,e-t.dz*23,n+t.dx*23));return i.some(o=>wl(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function lM(i,t,e){if(!Object.hasOwn(am,e.type))return null;let n=ym(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):_m(i,s,r,o),l=(Th/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(am[e.type],gm-8)}}function cm(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function lm(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function uM(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function um(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function Ml(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function vm(i){return Object.hasOwn(wh,i.finish)?wh[i.finish]:wh.graphite}function bm(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function hm(i,t,e){let[n,s]=bm(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=me.clamp(s/i.item.h+.5,0,1);return ci-ci*r}function Sl(i,t,e){return wl(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?me.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=Th/2})}function hM(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(d=>Sl(d,n,s)),o=t.some(d=>zo(d)&&Sl(d,n,s)&&Sl(d,i.x1,i.y1)&&Sl(d,i.x2,i.y2)),a=r?0:ai,c=a;if(!o)for(let d of e){let f=hm(d,i.x1,i.y1),h=hm(d,i.x2,i.y2);if(f!==null&&h!==null){a=f,c=h;break}}let[,l,u]=vm(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/oM)))}}function Ah(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(M=>M?.points?.length>=3&&M.points.every(E=>Number.isFinite(E?.x)&&Number.isFinite(E?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(M=>!zo(M)):e,s=i.walls.map(cm).filter(Boolean),r=s.filter(M=>M.kind!=="fence"),o=i.items.filter(M=>typeof M?.id=="string"&&typeof M.type=="string"&&[M.x,M.y,M.w,M.h].every(Number.isFinite)&&M.w>0&&M.h>0),a=um(),c=um(),l=(M,E)=>Ml(a,M,E);for(let M of e)for(let E of M.points)l(E.x,E.y);for(let M of s)l(M.x1,M.y1),l(M.x2,M.y2);for(let M of n)for(let E of M.points)Ml(c,E.x,E.y);for(let M of r)Ml(c,M.x1,M.y1),Ml(c,M.x2,M.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:om},d=new Map(r.map(M=>[M.id,M])),f=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(M=>d.has(M))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,d.get("w1").y1+57],[d.get("w2").x1,d.get("w1").y1+57],[d.get("w3").x1,d.get("w3").y1],[d.get("w3").x2,d.get("w3").y2],[u.minX-10,d.get("w4").y2]].map(([M,E])=>({x:M,y:E})),southDeck:[[u.minX-10,d.get("w6").y1],[d.get("w7").x1,d.get("w7").y1],[d.get("w7").x2,d.get("w7").y2],[d.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([M,E])=>({x:M,y:E})),recess:{x1:d.get("w12").x2,x2:d.get("w18").x1,z1:Math.min(d.get("w11").y2,d.get("w12").y2),z2:d.get("w13").y2}}:null,h=r.filter(M=>f?!(M.id==="w3"&&lm(M,[400,408,342,468]))&&!(M.id==="w7"&&lm(M,[248,590,302,651])):!0);if(f){l(f.left,f.stepTop),l(f.deckEdge,f.deckBottom);let{x1:M,x2:E,z1:I}=f.recess;if(E>M){let y=[[M,d.get("w12").y2,M,I],[M,I,E,I]];for(let[P,U]of y.entries()){if(h.some(V=>uM(V,U)))continue;let[N,z,q,k]=U,$=cm({id:`reference-recess-${P}`,x1:N,y1:z,x2:q,y2:k});$&&h.push($)}}}let g=new Map;for(let M of o.filter(E=>E.type==="window")){let E=ym(h,M.x,M.y,(M.rotation||0)*El);if(!E||E.distance>27)continue;let{wall:I,t:y,centerX:P,centerZ:U}=E,N=Math.max(1,y-M.w/2+1),z=Math.min(I.length-1,y+M.w/2-1);if(z-N<14)continue;I.openings.push({start:N,end:z});let q=_m(n,I,P,U),k=I.angle+(q<0?Math.PI:0),$=(N+z)/2;g.set(M.id,{x:I.x1+$*I.dx,z:I.y1+$*I.dz,angle:k,window:{...M,w:z-N+2,rotation:k/El}})}let x=o.filter(M=>M.type==="garageDoor"),p=o.map(M=>{let E=M.type==="cameraThumbnail"&&x.some($=>SM(M,$))?ai:Em(M.type),I=M.type==="controlZone"&&(M.visualKind==="window"||M.entityId?.startsWith("cover.")),y=g.get(M.id)??lM(n,h,M);if(I){let $=52;for(let V of g.values()){let nt=Math.hypot(V.x-M.x,V.z-M.y);nt<$&&(y=V,$=nt)}}let P=y?.x??M.x,U=y?.z??M.y,N=y?.angle??(Number.isFinite(M.rotation)?M.rotation*El:0),z=M.type==="stairs"?1536:300,q=Math.min(z,(Math.abs(Math.cos(N))*M.w+Math.abs(Math.sin(N))*M.h)/2),k=Math.min(z,(Math.abs(Math.sin(N))*M.w+Math.abs(Math.cos(N))*M.h)/2);return l(P-q,U-k),l(P+q,U+k),{item:M,x:P,z:U,baseY:E,angle:N,window:y?.window,mountY:y?.mountY,isBlind:I}});for(let M of h)M.openings.sort((E,I)=>E.start-I.start||E.end-I.end);let m=p.filter(({item:M})=>M.type==="stairs").map(M=>{let{item:E,x:I,z:y,angle:P}=M,U=Number.isInteger(E.steps)&&E.steps>=2&&E.steps<=40?E.steps:xm,N=Math.min(46,Math.max(12,E.w*.47)),z=-E.h/2-N;for(let q of[-E.w/2,E.w/2])l(I+q*Math.cos(P)-z*Math.sin(P),y+q*Math.sin(P)+z*Math.cos(P));return{...M,steps:U,apronDepth:N}}),v=s.filter(M=>M.kind==="fence").map(M=>hM(M,e,m)),T=rp(e,f,t),S=ap(h.map(M=>({...M,palette:vm(M)})),Th,gm,rM);return Number.isFinite(a.minX)||Object.assign(a,om),{rooms:e,walls:h,fences:v,stairs:m,placements:p,bounds:a,houseBounds:u,reference:f,floorStructure:T,wallStructure:S,editableStructure:t}}function fm(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Rh([i,...t]){let e=fm(new Nn,i);return e.holes=t.map(n=>fm(new bs,n)),e}function fM(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=Tl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let d=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,d,256,32),s.globalAlpha=.48,s.fillRect(0,d,256,1.2);let f=30+u*47%181;s.fillRect(f,d,1,32),s.globalAlpha=.15;for(let h=0;h<15;h++){let g=c()*256,x=d+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+p/2,x+c()*2-1,g+p,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let d=0;d<8;d++)s.globalAlpha=c()*.14,s.fillRect(d*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(d*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new ur(n);return l.colorSpace=We,l.wrapS=l.wrapT=ys,l}function Mm(i){let t=new Map,e=new ye,n=new fn,s=new W,r=new W(0,1,0),o=new W(1,1,1),a=new Map,c=h=>(a.has(h)||a.set(h,new dr({color:h})),a.get(h));function l(h,g,x,p,m,v=0){n.setFromAxisAngle(r,v),e.compose(s.set(x,p,m),n,o),h.applyMatrix4(e);let T=c(g);t.has(T)||t.set(T,[]),t.get(T).push(h)}function u(h,g,x,p,m,v,T,S=0){h>0&&g>0&&x>0&&l(new Re(h,g,x),p,m,v,T,S)}function d(h,g,x,p,m,v,T){let S=new Qe(1,9,6);S.scale(h,g,x),l(S,p,m,v,T)}function f(){for(let[h,g]of t){let x=Xn(g);if(!x){for(let p of g)i.add(new ue(p,h));continue}i.add(new ue(x,h));for(let p of g)p.dispose()}t.clear()}return{add:l,ball:d,box:u,material:c,finish:f}}function dM(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(Eh,r)?r:"oak";if(!s.has(a)){let c=Eh[a],l=fM(n,c,141+Object.keys(Eh).indexOf(a)*977);s.set(a,new dr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Ki(Rh(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),d=l.getAttribute("uv");for(let h=0;h<d.count;h++)d.setXY(h,u.getX(h)/248,u.getZ(h)/248);let f=new ue(l,s.get(a));f.receiveShadow=!0,i.add(f)}}for(let r of e.floorStructure.footprint)dm(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)dm(t,r,ai-1,-22,"#a18e84",!0)}function pM(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Ie(e,1))}return i}function dm(i,t,e,n,s,r=!1){let o=new Li(Rh(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(pM(o),s,0,e,0)}function mM(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,d=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,d,t,d,0)}let r=new le;return r.setAttribute("position",new Qt(e,3)),r.setAttribute("uv",new Qt(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function pm(i,t){let e=new Ki(Rh(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function gM(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(pm(o,!1),r,0,s,0);for(let o of e.bottom)i.add(pm(o,!0),r,0,n,0);e.sides.length&&i.add(mM(e.sides,s-n),r,0,n,0)}}function xM(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:d,posts:f,color:h,postColor:g}=n,x=l-c,p=new Re(Math.hypot(u,x),5,7);p.rotateZ(Math.atan2(x,u)),i.add(p,h,(s+o)/2,(c+l)/2+Go,(r+a)/2,-d);for(let m=0;m<=f;m++){let v=m/f,T=me.lerp(s,o,v),S=me.lerp(r,a,v),M=me.lerp(c,l,v),E=[T,M,S].map(I=>Math.round(I*1e3)).join(",");e.has(E)||(e.add(E),i.box(5,Go,5,g,T,M+Go/2,S,-d))}}}function Sm(i,t,e,n,s=0,r=0){let o=e/n,a=-ci/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let d=r-e/2+o*u,f=u===n-1?0:ci+(u+1)*a,h=f-3;i.box(t,h-ai,o,"#a98075",s,(ai+h)/2,d+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,f-1.5,d+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,h+3.35/2,d+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,h+3.4/2,d+l/2)}}function yM({item:i,steps:t,apronDepth:e}){let n=new ce,s=Mm(n);Sm(s,i.w,i.h,t);let r=ci-ai;return s.box(i.w,r,e,"#c8b79e",0,ai+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:ci/2}}function _M(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=xm,u=r-s,d=u/l,f=ci,h=-f/l;Sm(i,a,u,l,c,(s+r)/2);for(let S=0;S<l;S++){let M=s+d*(S+.5),E=f+(S+1)*h;i.box(5,24,5,"#9f8183",e+4,E+12,M)}let g=d*(l-1),x=h*(l-1),p=new Re(7,5,Math.hypot(g,x)+5);p.rotateX(-Math.atan2(x,g)),i.add(p,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,f-1.5,s-40);let[m,v]=o,T=Math.max(2,Math.ceil((v.x-m.x)/28));i.box(v.x-m.x,5,7,"#896e79",(v.x+m.x)/2,28,m.y);for(let S=0;S<=T;S++)i.box(5,28,5,"#9f8183",m.x+(v.x-m.x)*S/T,14,m.y)}function vM(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=Tl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let d=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);d.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),d.addColorStop(1,"#b1c3a000"),e.fillStyle=d,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new ur(t);return s.wrapS=s.wrapT=ys,s.repeat.set(15,10),s.colorSpace=We,s.anisotropy=4,s}function bM(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,c=Tl(150741);if(!t.editableStructure){let u=Math.min(90,o*.18),d=t.reference?t.reference.left+u/2:e+u/2;i.box(u,4,115,"#c7baa4",d,-109,s-88);for(let f=0;f<5;f++)i.box(u*.85,1.8,13,"#dbceba",d,-106,s-137+f*20)}let l=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,d]of l){let f=e+u*o,h=s+d*a,g=21+c()*24;i.ball(g*.94,9,g*.67,"#6d886a",f,-104,h),i.ball(g*.82,g*.57,g*.69,"#819b76",f+3,-98,h);for(let x=0;x<8;x++){let p=x*2.39996,m=(.2+c()*.5)*g,v=g*(.28+c()*.2),T=["#94ad7f","#a6ba88","#8da878","#bad09c"][x%4];i.ball(v*1.15,v*.8,v,T,f+Math.cos(p)*m,-93+12*c(),h+Math.sin(p)*m*.75)}for(let x=0;x<5;x++){let p=x%2?"#e6c4b1":"#fae6a4",m=f+(c()-.5)*g*1.14,v=h+g*(.62+c()*.43);i.ball(2.3,4.6,2.3,"#819765",m,-106,v),i.ball(3.9,1.8,3.3,p,m,-101.5,v),i.ball(1.2,.9,1.2,"#cb9c57",m,-100.3,v)}}}function MM(i,t,e){let n=Tl(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(p,m)=>!(o&&p>=o.x1&&p<=o.x2&&m>=o.z1&&m<=o.z2)&&!t.rooms.some(v=>(!t.editableStructure||!zo(v))&&wl(v,p,m)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let p=0;p<210;p++){let m=s.minX-70+(s.maxX-s.minX+140)*n(),v=c+l*n(),T=n()*180,S=8+n()*8,M=112+n()*34;a(m,v)&&r.push({x:m,z:v,phase:T,length:S,speed:M})}let u=new Float32Array(r.length*6),d=new Float32Array(r.length*3),f=new le,h=new le;f.setAttribute("position",new Ie(u,3).setUsage(xi)),h.setAttribute("position",new Ie(d,3).setUsage(xi));let g=new Qr(f,new cr({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),x=new to(h,new lr({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return g.frustumCulled=x.frustumCulled=!1,i.add(g,x),(p,m)=>{if(g.visible=aM.has(m),g.material.opacity=m==="pouring"||m==="lightning-rainy"?.5:.34,x.visible=cM.has(m),g.visible||x.visible){for(let[v,T]of r.entries()){let S=65-(T.phase+p*T.speed)%170,M=65-(T.phase+p*20)%170,E=v*6;u.set([T.x,S,T.z,T.x-T.length*.18,S+T.length,T.z+2],E),d.set([T.x+Math.sin(p+v)*6,M,T.z],v*3)}f.attributes.position.needsUpdate=g.visible,h.attributes.position.needsUpdate=x.visible}}}function Em(i){return i==="garageDoor"?ai:0}function SM(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*El,r=Math.cos(s),o=Math.sin(s);return qd(t,e*r+n*o,-e*o+n*r)}function EM(i,t,e,n){let s=new W,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let d of l){s.set(...d).project(t);let f=(s.x+1)*e/2,h=(1-s.y)*n/2;u.left=Math.min(u.left,f-r),u.right=Math.max(u.right,f+r),u.top=Math.min(u.top,h-r),u.bottom=Math.max(u.bottom,h+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:d,y2:f,base1:h,base2:g})=>o([[l,h,u],[l,h+Go,u],[d,g,f],[d,g+Go,f]])),c=i.stairs.map(({x:l,z:u,angle:d,item:f,apronDepth:h})=>{let g=Math.cos(d),x=Math.sin(d),p=[];for(let m of[-f.w/2,f.w/2])for(let[v,T]of[[-f.h/2-h,ci],[f.h/2,0]])p.push([l+m*g-v*x,T,u+m*x+v*g]);return o(p)});return[...a,...c]}function wM({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([d,f])=>[i+d*r-f*o,t+d*o+f*r].map(h=>Math.round(h*1e5)/1e5))]}function TM(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=bm(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return ci;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return ci+-ci/s.steps*l}return null}}function wm(i,t){let e=Ah(t),n=new Kc({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});n.resetState();let s=new Ji;s.background=new Zt("#d7dfcd");let r=new es(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:c,maxZ:l}=e.bounds,u=new He({color:"#e8e8d2",map:vM(i.ownerDocument),roughness:.95}),d=new ue(new Ni(6200,4200),u);d.rotation.x=-Math.PI/2,d.position.set((o+a)/2,ai,(c+l)/2),s.add(d);let f=Mm(s),h=Cp(e),g=Ip(f,h,ai,d.geometry.parameters.width,d.position.x),x,{water:p}=Pp(f,h,ai,e.houseBounds,d.geometry.parameters.width,d.position.x),m=p.shoreline.reduce((B,F)=>Math.abs(F.x-p.focusX)<Math.abs(B.x-p.focusX)?F:B),v={road:{x:g.centerX,y:g.surfaceY+8,z:(g.lanes[0]+g.lanes[1])/2},coast:{x:p.focusX+16,y:p.y,z:m.z-36}};bM(f,e),_M(f,e),dM(s,f,e,i.ownerDocument),gM(f,e),xM(f,e.fences),f.finish();let T=s.children.filter(B=>B.isMesh),S=up(n,s,e.bounds);S.markStructure();let M=Ap(p),E=qp(g),I=Qp(p);s.add(M.mesh,E.root,I.root);let y={},P=MM(s,e,h.sceneryMinZ),U=e.floorStructure.footprint,N=fh(U),z=e.stairs.length?fh(mm.default.union(U,...e.stairs.map(wM))):N,q=TM(e,N),k=new Ji,$=Sp(),V=new Ss("#fff5e1","#c9bfd7",1.8),nt=new ns("#fff1d8",1.65);nt.position.set(-4,9,6),k.add(V,nt);let G={supportsRoute:z.supportsRoute,floorClearance:z.clearance},X=hh(k,q,G),Y,Z=X,ot=new Map,yt=new Map,bt=new Map,St=new Map(e.stairs.map(B=>[B.item.id,B]));for(let B of e.placements){let{item:F,x:j,z:K,baseY:mt,angle:R,window:it,mountY:Q,isBlind:gt}=B,xt=F.type==="window"&&it?it:F,dt=St.get(F.id),vt=dt?yM(dt):Zd(xt,{window:gt?it:void 0,mountY:Q})??Vd(xt);if(vt){let Ct=pp(F,vt.root);vt.root.position.set(j,mt+Ct,K),vt.root.rotation.y=-R,vt.floorRadius&&(vt.dockFits=N.clearance(j,K)>=vt.floorRadius),s.add(vt.root),yt.set(F.id,vt),F.type==="garageDoor"&&bt.set(vt.root,F.id),S.register(F,vt)}ot.set(F.id,{x:j,z:K,baseY:mt,rootY:vt?.root.position.y,object:vt})}let Pt=rm(e.placements,yt),at=Pt.resolve(),ht=at,Tt,Ft={...e.bounds,sceneryMinZ:h.sceneryMinZ};for(let B of e.placements){let F=yt.get(B.item.id);if(!F)continue;let j=at.get(B.item.id);if(j&&(F.root.position.y=j.y),F.root.scale.y!==1||j?.supportId){let{max:K}=new Ue().setFromObject(F.root);Number.isFinite(K.y)&&(Ft.maxY=Math.max(Ft.maxY??92,K.y))}}let Lt=[...yt.values()].filter(B=>B.ambientMotion),It=new W,Ht=!1,ut=0,_t=0,Mt=Bi(),Et,wt=new ss,Ut=new Pn(new W(0,1,0),0),Bt=new W,Vt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function Kt(B,F){if(Ht||B<1||F<1||B===ut&&F===_t)return;ut=B,_t=F;let j=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(j,1.5,Math.sqrt(27e5/(B*F)))),n.setSize(B,F,!1),uh(r,Ft,B,F,Mt,Et)}function J(B,F){return Mt=Bi(B),Et=F,!Ht&&ut>0&&_t>0&&uh(r,Ft,ut,_t,Mt,Et),re()}function re(){return{...Mt}}function Yt(B){if(typeof B=="string"){if(Object.hasOwn(v,B))return{...v[B]};let F=ot.get(B);if(!F)return null;let{x:j,z:K,baseY:mt,object:R}=F;return R?{x:j,y:R.root.position.y+(R.anchorY??0)*R.root.scale.y,z:K}:{x:j,y:mt+6,z:K}}return[B?.x,B?.y].every(Number.isFinite)?{x:B.x,y:(q(B.x,B.y)??0)+22,z:B.y}:null}function O(B,F){return Ht||!Number.isFinite(B)||!Number.isFinite(F)||ut<=0||_t<=0?!1:(wt.setFromCamera(new Rt(B/ut*2-1,1-F/_t*2),r),!0)}function w(B,F,j,{preferTabletop:K=!1}={}){if(!O(B,F))return null;if(K){let mt=Pt.projectTabletop(j,wt);if(mt)return mt}return Ut.constant=-Em(j),wt.ray.intersectPlane(Ut,Bt)?{x:Bt.x,y:Bt.z}:null}function tt(B,F){if(!bt.size||!O(B,F))return null;let j=[];for(let mt of bt.keys())mt.traverseVisible(R=>{R.isMesh&&j.push(R)});let K=wt.intersectObjects(j,!1)[0];if(!K||wt.intersectObjects(T,!1).some(mt=>mt.distance<K.distance-.01))return null;for(let mt=K.object;mt;mt=mt.parent)if(bt.has(mt))return bt.get(mt);return null}function et(B=!1){n.render(s,r);let F=!B&&$.scene.children.length>0;if(!(!Z?.hasVisibleTracks&&!F)){n.autoClear=!1;try{n.clearDepth(),F&&n.render($.scene,r),Z?.hasVisibleTracks&&n.render(k,r)}finally{n.autoClear=!0}}}function ft(B,F,j=!1){let K={reduceMotion:F.reduceMotion===!0,night:F.night===!0,condition:F.condition,transientTelemetry:j};E.update(B,K),I.update(B,K),M.update(B,F)}function H(B=0,F={},j={},{animateTelemetry:K=!0,showTelemetryPosition:mt=!0,draftPositions:R,transientTelemetry:it=!1}={}){if(Ht||ut<1||_t<1)return;let Q=j.reduceMotion===!0,gt=!Q&&Number.isFinite(B)?B:0,xt=K?gt:0;!x&&j.traffic&&(x=Xp(g),s.add(x.root)),x?.update(B,j.traffic,{reduceMotion:Q,night:j.night===!0,transientTelemetry:it}),P(xt,j.condition),y=j,ft(B,j,it);let dt=Tt!==R;dt&&(Tt=R,ht=R?Pt.resolve(R):at);for(let[Ct,Jt]of yt){let jt=F[Ct]??Vt,pe=jt.position,_e=pe&&Number.isFinite(pe.x)&&Number.isFinite(pe.y)&&(!Jt.floorRadius||N.clearance(pe.x,pe.y)>=Jt.floorRadius);_e&&!it&&(Jt.telemetryPosition=pe);let Xe=it?_e?pe:null:Jt.telemetryPosition,Le=R?.[Ct]?.position??(mt?Xe:null),Be=ot.get(Ct);Jt.root.position.x=Le?.x??Be.x,Jt.root.position.y=ht.get(Ct)?.y??Be.rootY,Jt.root.position.z=Le?.y??Be.z,Jt.floorRadius&&(Jt.root.visible=!!(Le||!mt||Jt.dockFits)),Jt.animate?.(jt,Jt.ambientMotion?gt:xt,!!(_e&&mt),it)}S.update(j,F,u,dt);let vt=it?Y:X;Z!==vt&&(Z?.setVisible(!1),it||Y?.setTracks([],0),Z=vt,Z?.setVisible(!0)),Z?.render(B,Q),et(it)}function _(B,F,j={}){Ht||(j.transientTelemetry?(!Y&&B?.length&&(Y=hh(k,q,G),Y.setVisible(!1)),Y?.setTracks(B,F,j)):X.setTracks(B,F,j))}function b(B){if(!(Ht||ut<1||_t<1)){ft(B,y);for(let F of Lt)F.animate(Vt,B);X.render(B),et()}}function A(B){let F=ot.get(B);if(!F||ut<1||_t<1)return null;let{x:j,z:K,baseY:mt,object:R}=F;if(R){if(!R.root.visible)return null;It.set(R.anchorOffset?.x||0,R.anchorY||0,R.anchorOffset?.z||0),R.root.localToWorld(It)}else It.set(j,mt+6,K);return It.project(r),{x:(It.x+1)/2,y:(1-It.y)/2}}function L(){if(Ht)return;Ht=!0,X.dispose(),Y?.dispose(),$.dispose(),x?.dispose(),E.dispose(),I.dispose();let B=new Set,F=new Set,j=new Set;s.traverse(K=>{K.geometry&&B.add(K.geometry);for(let mt of Array.isArray(K.material)?K.material:[K.material])if(mt){F.add(mt);for(let R of Object.values(mt))R?.isTexture&&j.add(R)}});for(let K of j)K.dispose();for(let K of B)K.dispose();for(let K of F)K.dispose();S.dispose(),n.dispose()}return{resize:Kt,render:H,anchor:A,setView:J,getView:re,getDemoFocus:Yt,projectToPlan:w,pickGarage:tt,exteriorClearance:()=>EM(e,r,ut,_t),dispose:L,hasAmbientMotion:!0,renderAmbient:b,setPeople:_,setDetectionZones:$.setZones,canPlacePerson:(B,F)=>Number.isFinite(q(B,F))&&z.clearance(B,F)>0,get hasPeopleMotion(){return Z?.hasMotion??!1}}}var Tm=.35,Al=7.5,AM=8;function Am(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let v=Bi({...p,...m});(v.azimuth!==p.azimuth||v.tilt!==p.tilt||v.zoom!==p.zoom)&&e(v)}function c(p){i.hasPointerCapture(p)&&i.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!n(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{i.setPointerCapture(p.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function d(p){let m=s.get(p.pointerId);if(!m)return;let v=r();if(!v){l();return}let T=s.size===2,S=T?o():0,M={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,M),p.preventDefault(),T){let E=o();Math.min(S,E)>=AM&&a(v,{zoom:v.zoom*E/S});return}a(v,{azimuth:v.azimuth-(M.x-m.x)*Tm,tilt:v.tilt+(M.y-m.y)*Tm})}function f(p){s.delete(p.pointerId)&&c(p.pointerId)}function h(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let v=p.deltaMode===1?16:p.deltaMode===2?i.clientHeight:1,T=Math.max(-350,Math.min(350,p.deltaY*v));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-T*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let v;switch(p.key){case"ArrowLeft":v={azimuth:m.azimuth-Al};break;case"ArrowRight":v={azimuth:m.azimuth+Al};break;case"ArrowUp":v={tilt:m.tilt-Al};break;case"ArrowDown":v={tilt:m.tilt+Al};break;case"+":case"=":v={zoom:m.zoom*1.1};break;case"-":v={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,v)}let x=[["pointerdown",u],["pointermove",d],["pointerup",f],["pointercancel",f],["lostpointercapture",f],["wheel",h,{passive:!1}],["keydown",g]];for(let[p,m,v]of x)i.addEventListener(p,m,v);return{cancel:l,dispose(){l();for(let[p,m,v]of x)i.removeEventListener(p,m,v)}}}var QT=1200*1e3;function Rm(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],d=u.length>0,f=d?5:3,h,g,x=1/0;for(let m=0;m<=f&&(d||!h);m++)for(let[v,T]of m===0?s.slice(0,1):s.slice(1)){let S=o(a.x+v*m*34,c/2,t-c/2),M=o(a.y+T*m*34,l/2,e-l/2);if(n.some(y=>Math.abs(S-y.x)<(c+y.w)/2+2&&Math.abs(M-y.y)<(l+y.h)/2+2))continue;if(m<=3&&!h&&(h={...a,x:S,y:M,w:c,h:l}),!d)break;if(u.some(y=>S+c/2>y.left&&S-c/2<y.right&&M+l/2>y.top&&M-l/2<y.bottom))continue;let I=Math.hypot(S-a.x,M-a.y);I<x&&(g={...a,x:S,y:M,w:c,h:l},x=I)}let p=g??h;p&&n.push(p)}return n}var Lm=Rl(tl(),1),Cm="roomcraft-presence-v1",Im=4500,Nm=/^sensor\.[a-z0-9_]+$/,RM=4,Ch=1536,Ih=1024,CM=[[[0,0],[Ch,0],[Ch,Ih],[0,Ih],[0,0]]],Pm=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],IM=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...Pm.map(([i,t])=>[t,i]),...Pm.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function Dm(i,t){return i>=0&&i<=Ch&&t>=0&&t<=Ih}function Um(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function PM(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function Fm(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!Um(s))continue;let[r,o,a,c,l,u]=s,d=IM.get(n.presenceTrackProfile),f=Math.hypot(o,l),h=Dm(a,u)?{origin:{x:a,y:u},forward:{x:o/f,y:l/f}}:{},g=t.length;for(let[x,p]of[["configured",PM(n.presenceTrackZone)],["nominal",d?.ring]]){if(!p)continue;let m=p.map(([v,T])=>[r*v+o*T+a,c*v+l*T+u]);for(let[v]of Lm.default.intersection([m],CM))t.push({id:n.id,kind:x,points:v.slice(0,-1).map(([T,S])=>({x:T,y:S})),...h,...x==="nominal"?{rangeMeters:d.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function LM(i={},t=[]){let e={};for(let n of new Set(t)){if(!Nm.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==Cm)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,RM):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:Cm,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function Om(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!Nm.test(o||"")||s.has(o)||!Um(a))continue;s.add(o);let c=LM(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=Im)continue;let[d,f,h,g,x,p]=a;for(let m of u){let v=d*m.x+f*m.y+h,T=g*m.x+x*m.y+p;Dm(v,T)&&n.push({id:o+":"+m.id,x:v,y:T,expiresAt:l+Im})}}return n}var NM=22,DM=5,UM=1e3/12,FM=1e3,OM=12;function BM(i,t,e){let n=Rm(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let d=a/2;d<=e-a/2;d+=a+4)c.push({...r,x:u,y:d,w:o,h:a});c.sort((u,d)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(d.x-r.x,d.y-r.y));let l=c.find(u=>n.every(d=>Math.abs(u.x-d.x)>=(u.w+d.w)/2+2||Math.abs(u.y-d.y)>=(u.h+d.h)/2+2));l&&n.push(l)}return n}function kM(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function zM(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),d=u<=NM;return!d&&(a.type==="garageDoor"||!kM(a,e))?[]:[{item:a,index:c,distance:u,near:d,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function HM(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;hp(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),d=i.getElementById("sceneDefaultStatus"),f=dp(t),h=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=i.createElement("label");x.className="scene-dashboard-look",x.hidden=!0,x.title="Lighting and device appearance from the last dashboard import";let p=i.createElement("input");p.type="checkbox",p.checked=!0,x.append(p," Dashboard look"),a?.append(x);let m=i.createElement("div");m.className="scene-selection",m.setAttribute("aria-hidden","true"),Object.assign(m.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(m);let v=i.createElement("div");v.className="scene-placeholders",Object.assign(v.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(v);let T=i.createElementNS("http://www.w3.org/2000/svg","svg");T.classList.add("scene-placeholder-leaders"),T.setAttribute("aria-hidden","true"),Object.assign(T.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(T,v);let S=new Map,M=i.getElementById("miniHelp"),E=M?.textContent,I=n.getAttribute("aria-label")??"Editable three-dimensional home view",y,P,U,N=lh(null),z=r.value,q="default",k,$,V,nt=-1/0,G=0,X=!1,Y=!1,Z=null,ot=!1,yt=[],bt=[],St="",Pt=0,at,ht=!1,Tt={},Ft={key:"",scene:null,reduceMotion:!1},Lt={id:null,scene:null},It=()=>z!=="plan",Ht=()=>z==="free",ut=()=>n.getBoundingClientRect(),_t=At=>{let qt=ut();return{x:At.clientX-qt.left,y:At.clientY-qt.top}};function Mt(At){e.showStatus?.(At)}function Et(){if(!(!X&&(y?.hasAmbientMotion||y?.hasPeopleMotion)&&It()&&!i.hidden&&!h?.matches)){t.cancelAnimationFrame(V),V=void 0;return}V===void 0&&(V=t.requestAnimationFrame(qt=>{if(V=void 0,qt-nt>=UM-1){nt=qt,G=qt/1e3;try{y.renderAmbient(G)}catch{ft()}}Et()}))}function wt(At=!0){let qt=It()?y:null,ee=h?.matches===!0,ne=Ut()?Om(yt,Tt):[],Te=JSON.stringify(ne);Te===Ft.key&&qt===Ft.scene&&ee===Ft.reduceMotion||(Ft={key:Te,scene:qt,reduceMotion:ee},qt&&(qt.setPeople(ne,(t.performance?.now()??0)/1e3,{reduceMotion:ee}),At&&J()),e.setPersonPreview?.(qt?[]:ne))}function Ut(){return!!(g?.request&&bt.length&&!X&&!i.hidden)}async function Bt(At=!0){if(At&&wt(),ht||!Ut())return;ht=!0;let qt=Pt;try{let ee=await g.request("TRACK_GET",bt);qt===Pt&&Ut()&&(Tt=ee&&typeof ee=="object"?ee:{},wt())}catch{qt===Pt&&(Tt={},wt())}finally{ht=!1}}function Vt(){Ut()?at===void 0&&(at=t.setInterval(Bt,FM),Bt(!1)):at!==void 0&&(t.clearInterval(at),at=void 0,Pt++,Tt={})}function Kt(At){yt=At.filter(ne=>ne.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ne.presenceTrackEntityId)&&Array.isArray(ne.presenceTrackTransform));let qt=[...new Set(yt.map(ne=>ne.presenceTrackEntityId))].slice(0,OM),ee=qt.join(",");ee!==St&&(St=ee,bt=qt,Pt++,Tt={}),Vt()}function J(At){if(Et(),!y||!It())return;let{width:qt,height:ee}=ut();if(!qt||!ee)return;y.resize(qt,ee);let ne=e.getSelection(),Te=ne?.kind==="item"?ne.id:null;if(Lt.scene!==y||Lt.id!==Te){let nn=P.items.find(bn=>bn.id===Te);y.setDetectionZones(nn?Fm([nn]):[]),Lt={id:Te,scene:y}}let Rn=e.getPreview?.();x.hidden=!Rn?.environment;let Zn=!x.hidden&&p.checked,On=Object.create(null);if(Zn)for(let nn of P.items){let bn=Rn.states?.[nn.id];bn&&bn.entityId===nn.entityId&&(On[nn.id]=bn)}let fs=Zn?Rn.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(y.render(G,On,{...fs,reduceMotion:h?.matches===!0},{animateTelemetry:!1,showTelemetryPosition:Zn,draftPositions:At}),Ht())return;let en=[];for(let[nn,bn]of S){let Jn=y.anchor(nn);bn.hidden=!Jn,Jn&&en.push({id:nn,marker:bn,x:Jn.x*qt,y:Jn.y*ee,w:96,h:44})}let Ir=BM(en,qt,ee),Wo=new Set(Ir.map(nn=>nn.id)),Xo=[];for(let nn of Ir){let{marker:bn,x:Jn,y:C,w:st,h:pt,id:lt}=nn;Object.assign(bn.style,{left:`${Jn}px`,top:`${C}px`,width:`${st}px`,height:`${pt}px`});let ct=en.find(Nt=>Nt.id===lt);if(Math.hypot(ct.x-Jn,ct.y-C)>8){let Nt=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[kt,Ot]of Object.entries({x1:ct.x,y1:ct.y,x2:Jn,y2:C}))Nt.setAttribute(kt,Ot);Nt.setAttribute("stroke","#6f816b"),Nt.setAttribute("stroke-width","1"),Nt.setAttribute("stroke-dasharray","3 3"),Xo.push(Nt)}}for(let[nn,bn]of S)bn.hidden=!Wo.has(nn);T.replaceChildren(...Xo);let Ns=ne?.kind==="item"?y.anchor(ne.id):null;m.style.display=Ns?"block":"none",Ns&&(m.style.left=`${Ns.x*qt}px`,m.style.top=`${Ns.y*ee}px`)}function re(){if(!k)return;let At=k;k=void 0;try{n.releasePointerCapture(At.pointerId)}catch{}At.item&&J({[At.item.id]:{position:{x:At.item.x,y:At.item.y}}})}function Yt(){a&&(a.hidden=!It());for(let At of Object.values(o))At&&(At.disabled=!It());l&&(l.hidden=!y||!Ht(),l.disabled=ot),u&&(u.hidden=!y||!It()||!Z,u.disabled=ot)}function O(At){d&&(d.textContent=At)}function w(){Y=!0,O("")}function tt(){n.tabIndex=Ht()?0:-1,n.style.cursor=Ht()?"grab":"",n.setAttribute("aria-label",Ht()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":I)}function et(At,{initial:qt=!1}={}){qt||(w(),At==="default"&&(Y=!1)),B.cancel(),re();let ee=y?.getView()??N,ne=Object.hasOwn(wr,At)?At:"plan";ne!=="plan"&&e.useSelectTool?.(),z=ne,It()&&!Ht()&&(q=z),r.value=z,n.hidden=!It(),tt();let Te=It()&&!Ht();if(v.style.display=Te?"block":"none",T.style.display=Te?"block":"none",Te||(m.style.display="none"),M&&(Ht()?M.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":M.textContent=It()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":E),s.classList.toggle("scene-3d",It()),Yt(),!It()){H(),Et(),x.hidden=!0,Mt("Plan view \xB7 edit rooms, walls, floors and objects");return}let Rn=z==="default"?lh(Z):Ht()?fp(ee):{preset:z};N=y?y.setView(Rn):Rn,H(),y&&Mt(Ht()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function ft(){B.cancel(),y?.dispose(),y=void 0,U=void 0,z="plan",Et(),r.value=z,n.hidden=!0,x.hidden=!0,tt(),v.style.display="none",T.style.display="none",M&&(M.textContent=E),s.classList.remove("scene-3d"),m.style.display="none",Yt(),wt(!1),Mt("3D view is unavailable on this screen. Plan view is ready.")}function H(){if(X)return;let At=e.getProject();if(Kt(At.items),!It()){wt();return}let qt=JSON.stringify(At);try{if(!y||qt!==U){re(),y&&(N=y.getView()),y?.dispose(),y=void 0,P=At,y=wm(n,P),y.setView(N),U=qt,S.clear(),v.replaceChildren();for(let ee of P.items.filter(ne=>ne.type==="cameraThumbnail"||ne.type.startsWith("ui"))){let ne=i.createElement("button");ne.type="button",ne.className="scene-placeholder",ne.textContent=ee.name||(ee.type==="cameraThumbnail"?"Camera":"Interface"),ne.setAttribute("aria-label",`Select ${ne.textContent}`),Object.assign(ne.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ne.addEventListener("pointerdown",Te=>F(Te,ee.id)),ne.addEventListener("click",Te=>{!Ht()&&Te.detail===0&&(e.selectItem(ee.id),J())}),S.set(ee.id,ne),v.append(ne)}}Yt(),wt(!1),J()}catch{ft()}}function _(At){!y||!It()||(w(),re(),y.setView(At(y.getView())),N=y.getView(),J())}let b=()=>H(),A=()=>{let At=e.getTool();It()&&At!=="select"?et("plan"):Ht()&&e.hasPlacement()?et(q):It()&&J()},L=()=>et(r.value),D=()=>{t.cancelAnimationFrame($),$=t.requestAnimationFrame(()=>J())},B=Am(n,{getView:()=>Ht()?y?.getView():null,onChange:At=>{!y||!Ht()||(w(),N=y.setView(At),D())}}),F=(At,qt=null)=>{if(!It()||Ht()||!y||At.button!==0||k)return;At.preventDefault(),At.stopPropagation();let ee=_t(At);if(e.hasPlacement()){let en=y.projectToPlan(ee.x,ee.y,e.getPlacementType(),{preferTabletop:!0});en&&e.placeAt(en.x,en.y),H();return}let{width:ne,height:Te}=ut(),Rn=new Map(P.items.map(en=>[en.id,y.anchor(en.id)])),Zn=qt??y.pickGarage(ee.x,ee.y),On=Zn?P.items.find(en=>en.id===Zn):zM(P.items,ee,y.projectToPlan(ee.x,ee.y),Rn,ne,Te);if(e.selectItem(On?.id??null),!On){J();return}let fs=y.projectToPlan(ee.x,ee.y,On.type);fs&&(k={item:{...On},startScreen:ee,startPlan:fs,pointerId:At.pointerId},n.setPointerCapture(At.pointerId),J())},j=At=>{if(!It()||Ht()||(At.stopPropagation(),!k||k.pointerId!==At.pointerId||!y))return;let qt=_t(At);if(!k.moved&&Math.hypot(qt.x-k.startScreen.x,qt.y-k.startScreen.y)<DM)return;let ee=y.projectToPlan(qt.x,qt.y,k.item.type);if(!ee)return;k.moved=!0;let ne={x:k.item.x+ee.x-k.startPlan.x,y:k.item.y+ee.y-k.startPlan.y},Te=e.moveItemWarning?.(k.item.id,ne.x,ne.y);if(Te){Te!==k.warning&&Mt(Te),k.warning=Te;return}k.warning&&Mt(`Moving ${k.item.name||"object"}`),k.warning=void 0,k.position=ne,J({[k.item.id]:{position:k.position}})},K=At=>{if(!It()||Ht()||(At.stopPropagation(),!k||k.pointerId!==At.pointerId))return;let qt=k;k=void 0;try{n.releasePointerCapture(At.pointerId)}catch{}qt.moved&&qt.position?(e.moveItem(qt.item.id,qt.position.x,qt.position.y),H()):J()},mt=At=>{Ht()||(k?.pointerId===At.pointerId&&re(),At.stopPropagation())},R=At=>{!It()||Ht()||(At.preventDefault(),At.stopPropagation(),_(qt=>({...qt,zoom:qt.zoom*(At.deltaY<0?1.1:1/1.1)})))},it=At=>{Ht()&&At.target===n&&(At.key==="Delete"||At.key==="Backspace")&&(At.preventDefault(),At.stopImmediatePropagation()),At.key==="Escape"&&k&&(At.preventDefault(),At.stopImmediatePropagation(),re())},Q=At=>{At.preventDefault(),ft()},gt=()=>_(At=>({...At,azimuth:At.azimuth-15})),xt=()=>_(At=>({...At,azimuth:At.azimuth+15})),dt=()=>_(At=>({...At,zoom:At.zoom/1.2})),vt=()=>_(At=>({...At,zoom:At.zoom*1.2})),Ct=()=>et("top"),Jt=()=>J(),jt=()=>{wt(!1),J()},pe=()=>{Vt(),wt(),Et()};i.addEventListener("visibilitychange",pe),h?.addEventListener("change",jt);async function _e(){ot=!0,Yt();try{Z=await f.read(),!X&&!Y&&et("default",{initial:!0})}catch{X||O("Saved view unavailable")}finally{ot=!1,X||Yt()}}async function Xe(At){if(!(!y||!It()||ot)){ot=!0,O("Saving view\u2026"),Yt();try{if(await f.write(At),X)return;Z=At,At||et("default"),O(At?"Default view saved":"Top down is the default")}catch{X||O("Could not save default view")}finally{ot=!1,X||Yt()}}}let Le=()=>{Ht()&&y&&Xe(y.getView())},Be=()=>Xe(null);o.left?.addEventListener("click",gt),o.right?.addEventListener("click",xt),o.out?.addEventListener("click",dt),o.in?.addEventListener("click",vt),c?.addEventListener("click",Ct),l?.addEventListener("click",Le),u?.addEventListener("click",Be),p.addEventListener("change",Jt),r.addEventListener("change",L),n.addEventListener("pointerdown",F),n.addEventListener("pointermove",j),n.addEventListener("pointerup",K),n.addEventListener("pointercancel",mt),n.addEventListener("lostpointercapture",mt),n.addEventListener("wheel",R,{passive:!1}),n.addEventListener("webglcontextlost",Q),t.addEventListener("keydown",it,!0),t.addEventListener("roomcraft-editor-change",b),t.addEventListener("roomcraft-editor-tool",A);let $e=new t.ResizeObserver(D);return $e.observe(s),et(z,{initial:!0}),_e(),{getView:()=>y?.getView()??{...N},setView:et,dispose(){X=!0,Et(),Vt(),i.removeEventListener("visibilitychange",pe),h?.removeEventListener("change",jt),re(),B.dispose(),z="plan",tt(),$e.disconnect(),t.cancelAnimationFrame($),y?.dispose(),y=void 0,m.remove(),v.remove(),T.remove(),x.remove(),p.removeEventListener("change",Jt),M&&(M.textContent=E),o.left?.removeEventListener("click",gt),o.right?.removeEventListener("click",xt),o.out?.removeEventListener("click",dt),o.in?.removeEventListener("click",vt),c?.removeEventListener("click",Ct),l?.removeEventListener("click",Le),u?.removeEventListener("click",Be),r.removeEventListener("change",L),n.removeEventListener("pointerdown",F),n.removeEventListener("pointermove",j),n.removeEventListener("pointerup",K),n.removeEventListener("pointercancel",mt),n.removeEventListener("lostpointercapture",mt),n.removeEventListener("wheel",R),n.removeEventListener("webglcontextlost",Q),t.removeEventListener("keydown",it,!0),t.removeEventListener("roomcraft-editor-change",b),t.removeEventListener("roomcraft-editor-tool",A)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=Ah,HM(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
