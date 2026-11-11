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
"use strict";(()=>{var am=Object.create;var vh=Object.defineProperty;var cm=Object.getOwnPropertyDescriptor;var lm=Object.getOwnPropertyNames;var um=Object.getPrototypeOf,hm=Object.prototype.hasOwnProperty;var fm=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var dm=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of lm(t))!hm.call(i,s)&&s!==e&&vh(i,s,{get:()=>t[s],enumerable:!(n=cm(t,s))||n.enumerable});return i};var Ml=(i,t,e)=>(e=i!=null?am(um(i)):{},dm(t||!i||!i.__esModule?vh(e,"default",{value:i,enumerable:!0}):e,i));var Jc=fm(($u,Ku)=>{(function(i,t){typeof $u=="object"&&typeof Ku<"u"?Ku.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})($u,(function(){"use strict";/**
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
    ***************************************************************************** */function i(D,y){var v={label:0,sent:function(){if(N[0]&1)throw N[1];return N[1]},trys:[],ops:[]},T,P,N,W;return W={next:V(0),throw:V(1),return:V(2)},typeof Symbol=="function"&&(W[Symbol.iterator]=function(){return this}),W;function V(tt){return function(pt){return it([tt,pt])}}function it(tt){if(T)throw new TypeError("Generator is already executing.");for(;v;)try{if(T=1,P&&(N=tt[0]&2?P.return:tt[0]?P.throw||((N=P.return)&&N.call(P),0):P.next)&&!(N=N.call(P,tt[1])).done)return N;switch(P=0,N&&(tt=[tt[0]&2,N.value]),tt[0]){case 0:case 1:N=tt;break;case 4:return v.label++,{value:tt[1],done:!1};case 5:v.label++,P=tt[1],tt=[0];continue;case 7:tt=v.ops.pop(),v.trys.pop();continue;default:if(N=v.trys,!(N=N.length>0&&N[N.length-1])&&(tt[0]===6||tt[0]===2)){v=0;continue}if(tt[0]===3&&(!N||tt[1]>N[0]&&tt[1]<N[3])){v.label=tt[1];break}if(tt[0]===6&&v.label<N[1]){v.label=N[1],N=tt;break}if(N&&v.label<N[2]){v.label=N[2],v.ops.push(tt);break}N[2]&&v.ops.pop(),v.trys.pop();continue}tt=y.call(D,v)}catch(pt){tt=[6,pt],P=0}finally{T=N=0}if(tt[0]&5)throw tt[1];return{value:tt[0]?tt[1]:void 0,done:!0}}}var t=(function(){function D(y,v){this.next=null,this.key=y,this.data=v,this.left=null,this.right=null}return D})();function e(D,y){return D>y?1:D<y?-1:0}function n(D,y,v){for(var T=new t(null,null),P=T,N=T;;){var W=v(D,y.key);if(W<0){if(y.left===null)break;if(v(D,y.left.key)<0){var V=y.left;if(y.left=V.right,V.right=y,y=V,y.left===null)break}N.left=y,N=y,y=y.left}else if(W>0){if(y.right===null)break;if(v(D,y.right.key)>0){var V=y.right;if(y.right=V.left,V.left=y,y=V,y.right===null)break}P.right=y,P=y,y=y.right}else break}return P.right=y.left,N.left=y.right,y.left=T.right,y.right=T.left,y}function s(D,y,v,T){var P=new t(D,y);if(v===null)return P.left=P.right=null,P;v=n(D,v,T);var N=T(D,v.key);return N<0?(P.left=v.left,P.right=v,v.left=null):N>=0&&(P.right=v.right,P.left=v,v.right=null),P}function r(D,y,v){var T=null,P=null;if(y){y=n(D,y,v);var N=v(y.key,D);N===0?(T=y.left,P=y.right):N<0?(P=y.right,y.right=null,T=y):(T=y.left,y.left=null,P=y)}return{left:T,right:P}}function o(D,y,v){return y===null?D:(D===null||(y=n(D.key,y,v),y.left=D),y)}function a(D,y,v,T,P){if(D){T(""+y+(v?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+P(D)+`
`);var N=y+(v?"    ":"\u2502   ");D.left&&a(D.left,N,!1,T,P),D.right&&a(D.right,N,!0,T,P)}}var c=(function(){function D(y){y===void 0&&(y=e),this._root=null,this._size=0,this._comparator=y}return D.prototype.insert=function(y,v){return this._size++,this._root=s(y,v,this._root,this._comparator)},D.prototype.add=function(y,v){var T=new t(y,v);this._root===null&&(T.left=T.right=null,this._size++,this._root=T);var P=this._comparator,N=n(y,this._root,P),W=P(y,N.key);return W===0?this._root=N:(W<0?(T.left=N.left,T.right=N,N.left=null):W>0&&(T.right=N.right,T.left=N,N.right=null),this._size++,this._root=T),this._root},D.prototype.remove=function(y){this._root=this._remove(y,this._root,this._comparator)},D.prototype._remove=function(y,v,T){var P;if(v===null)return null;v=n(y,v,T);var N=T(y,v.key);return N===0?(v.left===null?P=v.right:(P=n(y,v.left,T),P.right=v.right),this._size--,P):v},D.prototype.pop=function(){var y=this._root;if(y){for(;y.left;)y=y.left;return this._root=n(y.key,this._root,this._comparator),this._root=this._remove(y.key,this._root,this._comparator),{key:y.key,data:y.data}}return null},D.prototype.findStatic=function(y){for(var v=this._root,T=this._comparator;v;){var P=T(y,v.key);if(P===0)return v;P<0?v=v.left:v=v.right}return null},D.prototype.find=function(y){return this._root&&(this._root=n(y,this._root,this._comparator),this._comparator(y,this._root.key)!==0)?null:this._root},D.prototype.contains=function(y){for(var v=this._root,T=this._comparator;v;){var P=T(y,v.key);if(P===0)return!0;P<0?v=v.left:v=v.right}return!1},D.prototype.forEach=function(y,v){for(var T=this._root,P=[],N=!1;!N;)T!==null?(P.push(T),T=T.left):P.length!==0?(T=P.pop(),y.call(v,T),T=T.right):N=!0;return this},D.prototype.range=function(y,v,T,P){for(var N=[],W=this._comparator,V=this._root,it;N.length!==0||V;)if(V)N.push(V),V=V.left;else{if(V=N.pop(),it=W(V.key,v),it>0)break;if(W(V.key,y)>=0&&T.call(P,V))return this;V=V.right}return this},D.prototype.keys=function(){var y=[];return this.forEach(function(v){var T=v.key;return y.push(T)}),y},D.prototype.values=function(){var y=[];return this.forEach(function(v){var T=v.data;return y.push(T)}),y},D.prototype.min=function(){return this._root?this.minNode(this._root).key:null},D.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},D.prototype.minNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.left;)y=y.left;return y},D.prototype.maxNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.right;)y=y.right;return y},D.prototype.at=function(y){for(var v=this._root,T=!1,P=0,N=[];!T;)if(v)N.push(v),v=v.left;else if(N.length>0){if(v=N.pop(),P===y)return v;P++,v=v.right}else T=!0;return null},D.prototype.next=function(y){var v=this._root,T=null;if(y.right){for(T=y.right;T.left;)T=T.left;return T}for(var P=this._comparator;v;){var N=P(y.key,v.key);if(N===0)break;N<0?(T=v,v=v.left):v=v.right}return T},D.prototype.prev=function(y){var v=this._root,T=null;if(y.left!==null){for(T=y.left;T.right;)T=T.right;return T}for(var P=this._comparator;v;){var N=P(y.key,v.key);if(N===0)break;N<0?v=v.left:(T=v,v=v.right)}return T},D.prototype.clear=function(){return this._root=null,this._size=0,this},D.prototype.toList=function(){return f(this._root)},D.prototype.load=function(y,v,T){v===void 0&&(v=[]),T===void 0&&(T=!1);var P=y.length,N=this._comparator;if(T&&g(y,v,0,P-1,N),this._root===null)this._root=l(y,v,0,P),this._size=P;else{var W=d(this.toList(),u(y,v),N);P=this._size+P,this._root=h({head:W},0,P)}return this},D.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(D.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(D.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),D.prototype.toString=function(y){y===void 0&&(y=function(T){return String(T.key)});var v=[];return a(this._root,"",!0,function(T){return v.push(T)},y),v.join("")},D.prototype.update=function(y,v,T){var P=this._comparator,N=r(y,this._root,P),W=N.left,V=N.right;P(y,v)<0?V=s(v,T,V,P):W=s(v,T,W,P),this._root=o(W,V,P)},D.prototype.split=function(y){return r(y,this._root,this._comparator)},D.prototype[Symbol.iterator]=function(){var y,v,T;return i(this,function(P){switch(P.label){case 0:y=this._root,v=[],T=!1,P.label=1;case 1:return T?[3,6]:y===null?[3,2]:(v.push(y),y=y.left,[3,5]);case 2:return v.length===0?[3,4]:(y=v.pop(),[4,y]);case 3:return P.sent(),y=y.right,[3,5];case 4:T=!0,P.label=5;case 5:return[3,1];case 6:return[2]}})},D})();function l(D,y,v,T){var P=T-v;if(P>0){var N=v+Math.floor(P/2),W=D[N],V=y[N],it=new t(W,V);return it.left=l(D,y,v,N),it.right=l(D,y,N+1,T),it}return null}function u(D,y){for(var v=new t(null,null),T=v,P=0;P<D.length;P++)T=T.next=new t(D[P],y[P]);return T.next=null,v.next}function f(D){for(var y=D,v=[],T=!1,P=new t(null,null),N=P;!T;)y?(v.push(y),y=y.left):v.length>0?(y=N=N.next=v.pop(),y=y.right):T=!0;return N.next=null,P.next}function h(D,y,v){var T=v-y;if(T>0){var P=y+Math.floor(T/2),N=h(D,y,P),W=D.head;return W.left=N,D.head=D.head.next,W.right=h(D,P+1,v),W}return null}function d(D,y,v){for(var T=new t(null,null),P=T,N=D,W=y;N!==null&&W!==null;)v(N.key,W.key)<0?(P.next=N,N=N.next):(P.next=W,W=W.next),P=P.next;return N!==null?P.next=N:W!==null&&(P.next=W),T.next}function g(D,y,v,T,P){if(!(v>=T)){for(var N=D[v+T>>1],W=v-1,V=T+1;;){do W++;while(P(D[W],N)<0);do V--;while(P(D[V],N)>0);if(W>=V)break;var it=D[W];D[W]=D[V],D[V]=it,it=y[W],y[W]=y[V],y[V]=it}g(D,y,v,V,P),g(D,y,V+1,T,P)}}let x=(D,y)=>D.ll.x<=y.x&&y.x<=D.ur.x&&D.ll.y<=y.y&&y.y<=D.ur.y,m=(D,y)=>{if(y.ur.x<D.ll.x||D.ur.x<y.ll.x||y.ur.y<D.ll.y||D.ur.y<y.ll.y)return null;let v=D.ll.x<y.ll.x?y.ll.x:D.ll.x,T=D.ur.x<y.ur.x?D.ur.x:y.ur.x,P=D.ll.y<y.ll.y?y.ll.y:D.ll.y,N=D.ur.y<y.ur.y?D.ur.y:y.ur.y;return{ll:{x:v,y:P},ur:{x:T,y:N}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let M=p*p,A=(D,y)=>{if(-p<D&&D<p&&-p<y&&y<p)return 0;let v=D-y;return v*v<M*D*y?0:D<y?-1:1};class S{constructor(){this.reset()}reset(){this.xRounder=new b,this.yRounder=new b}round(y,v){return{x:this.xRounder.round(y),y:this.yRounder.round(v)}}}class b{constructor(){this.tree=new c,this.round(0)}round(y){let v=this.tree.add(y),T=this.tree.prev(v);if(T!==null&&A(v.key,T.key)===0)return this.tree.remove(y),T.key;let P=this.tree.next(v);return P!==null&&A(v.key,P.key)===0?(this.tree.remove(y),P.key):y}}let E=new S,L=11102230246251565e-32,_=134217729,I=(3+8*L)*L;function O(D,y,v,T,P){let N,W,V,it,tt=y[0],pt=T[0],C=0,j=0;pt>tt==pt>-tt?(N=tt,tt=y[++C]):(N=pt,pt=T[++j]);let q=0;if(C<D&&j<v)for(pt>tt==pt>-tt?(W=tt+N,V=N-(W-tt),tt=y[++C]):(W=pt+N,V=N-(W-pt),pt=T[++j]),N=W,V!==0&&(P[q++]=V);C<D&&j<v;)pt>tt==pt>-tt?(W=N+tt,it=W-N,V=N-(W-it)+(tt-it),tt=y[++C]):(W=N+pt,it=W-N,V=N-(W-it)+(pt-it),pt=T[++j]),N=W,V!==0&&(P[q++]=V);for(;C<D;)W=N+tt,it=W-N,V=N-(W-it)+(tt-it),tt=y[++C],N=W,V!==0&&(P[q++]=V);for(;j<v;)W=N+pt,it=W-N,V=N-(W-it)+(pt-it),pt=T[++j],N=W,V!==0&&(P[q++]=V);return(N!==0||q===0)&&(P[q++]=N),q}function U(D,y){let v=y[0];for(let T=1;T<D;T++)v+=y[T];return v}function B(D){return new Float64Array(D)}let Y=(3+16*L)*L,z=(2+12*L)*L,Z=(9+64*L)*L*L,k=B(4),X=B(8),ct=B(12),Q=B(16),et=B(4);function st(D,y,v,T,P,N,W){let V,it,tt,pt,C,j,q,mt,xt,ht,Mt,Ct,ie,Kt,ye,Se,$e,Ue,Ke=D-P,qe=v-P,Et=y-N,Gt=T-N;Kt=Ke*Gt,j=_*Ke,q=j-(j-Ke),mt=Ke-q,j=_*Gt,xt=j-(j-Gt),ht=Gt-xt,ye=mt*ht-(Kt-q*xt-mt*xt-q*ht),Se=Et*qe,j=_*Et,q=j-(j-Et),mt=Et-q,j=_*qe,xt=j-(j-qe),ht=qe-xt,$e=mt*ht-(Se-q*xt-mt*xt-q*ht),Mt=ye-$e,C=ye-Mt,k[0]=ye-(Mt+C)+(C-$e),Ct=Kt+Mt,C=Ct-Kt,ie=Kt-(Ct-C)+(Mt-C),Mt=ie-Se,C=ie-Mt,k[1]=ie-(Mt+C)+(C-Se),Ue=Ct+Mt,C=Ue-Ct,k[2]=Ct-(Ue-C)+(Mt-C),k[3]=Ue;let Qt=U(4,k),ne=z*W;if(Qt>=ne||-Qt>=ne||(C=D-Ke,V=D-(Ke+C)+(C-P),C=v-qe,tt=v-(qe+C)+(C-P),C=y-Et,it=y-(Et+C)+(C-N),C=T-Gt,pt=T-(Gt+C)+(C-N),V===0&&it===0&&tt===0&&pt===0)||(ne=Z*W+I*Math.abs(Qt),Qt+=Ke*pt+Gt*V-(Et*tt+qe*it),Qt>=ne||-Qt>=ne))return Qt;Kt=V*Gt,j=_*V,q=j-(j-V),mt=V-q,j=_*Gt,xt=j-(j-Gt),ht=Gt-xt,ye=mt*ht-(Kt-q*xt-mt*xt-q*ht),Se=it*qe,j=_*it,q=j-(j-it),mt=it-q,j=_*qe,xt=j-(j-qe),ht=qe-xt,$e=mt*ht-(Se-q*xt-mt*xt-q*ht),Mt=ye-$e,C=ye-Mt,et[0]=ye-(Mt+C)+(C-$e),Ct=Kt+Mt,C=Ct-Kt,ie=Kt-(Ct-C)+(Mt-C),Mt=ie-Se,C=ie-Mt,et[1]=ie-(Mt+C)+(C-Se),Ue=Ct+Mt,C=Ue-Ct,et[2]=Ct-(Ue-C)+(Mt-C),et[3]=Ue;let De=O(4,k,4,et,X);Kt=Ke*pt,j=_*Ke,q=j-(j-Ke),mt=Ke-q,j=_*pt,xt=j-(j-pt),ht=pt-xt,ye=mt*ht-(Kt-q*xt-mt*xt-q*ht),Se=Et*tt,j=_*Et,q=j-(j-Et),mt=Et-q,j=_*tt,xt=j-(j-tt),ht=tt-xt,$e=mt*ht-(Se-q*xt-mt*xt-q*ht),Mt=ye-$e,C=ye-Mt,et[0]=ye-(Mt+C)+(C-$e),Ct=Kt+Mt,C=Ct-Kt,ie=Kt-(Ct-C)+(Mt-C),Mt=ie-Se,C=ie-Mt,et[1]=ie-(Mt+C)+(C-Se),Ue=Ct+Mt,C=Ue-Ct,et[2]=Ct-(Ue-C)+(Mt-C),et[3]=Ue;let Sn=O(De,X,4,et,ct);Kt=V*pt,j=_*V,q=j-(j-V),mt=V-q,j=_*pt,xt=j-(j-pt),ht=pt-xt,ye=mt*ht-(Kt-q*xt-mt*xt-q*ht),Se=it*tt,j=_*it,q=j-(j-it),mt=it-q,j=_*tt,xt=j-(j-tt),ht=tt-xt,$e=mt*ht-(Se-q*xt-mt*xt-q*ht),Mt=ye-$e,C=ye-Mt,et[0]=ye-(Mt+C)+(C-$e),Ct=Kt+Mt,C=Ct-Kt,ie=Kt-(Ct-C)+(Mt-C),Mt=ie-Se,C=ie-Mt,et[1]=ie-(Mt+C)+(C-Se),Ue=Ct+Mt,C=Ue-Ct,et[2]=Ct-(Ue-C)+(Mt-C),et[3]=Ue;let Vn=O(Sn,ct,4,et,Q);return Q[Vn-1]}function yt(D,y,v,T,P,N){let W=(y-N)*(v-P),V=(D-P)*(T-N),it=W-V,tt=Math.abs(W+V);return Math.abs(it)>=Y*tt?it:-st(D,y,v,T,P,N,tt)}let Rt=(D,y)=>D.x*y.y-D.y*y.x,Zt=(D,y)=>D.x*y.x+D.y*y.y,qt=(D,y,v)=>{let T=yt(D.x,D.y,y.x,y.y,v.x,v.y);return T>0?-1:T<0?1:0},Ht=D=>Math.sqrt(Zt(D,D)),lt=(D,y,v)=>{let T={x:y.x-D.x,y:y.y-D.y},P={x:v.x-D.x,y:v.y-D.y};return Rt(P,T)/Ht(P)/Ht(T)},ft=(D,y,v)=>{let T={x:y.x-D.x,y:y.y-D.y},P={x:v.x-D.x,y:v.y-D.y};return Zt(P,T)/Ht(P)/Ht(T)},wt=(D,y,v)=>y.y===0?null:{x:D.x+y.x/y.y*(v-D.y),y:v},Dt=(D,y,v)=>y.x===0?null:{x:v,y:D.y+y.y/y.x*(v-D.x)},vt=(D,y,v,T)=>{if(y.x===0)return Dt(v,T,D.x);if(T.x===0)return Dt(D,y,v.x);if(y.y===0)return wt(v,T,D.y);if(T.y===0)return wt(D,y,v.y);let P=Rt(y,T);if(P==0)return null;let N={x:v.x-D.x,y:v.y-D.y},W=Rt(N,y)/P,V=Rt(N,T)/P,it=D.x+V*y.x,tt=v.x+W*T.x,pt=D.y+V*y.y,C=v.y+W*T.y,j=(it+tt)/2,q=(pt+C)/2;return{x:j,y:q}};class gt{static compare(y,v){let T=gt.comparePoints(y.point,v.point);return T!==0?T:(y.point!==v.point&&y.link(v),y.isLeft!==v.isLeft?y.isLeft?1:-1:dt.compare(y.segment,v.segment))}static comparePoints(y,v){return y.x<v.x?-1:y.x>v.x?1:y.y<v.y?-1:y.y>v.y?1:0}constructor(y,v){y.events===void 0?y.events=[this]:y.events.push(this),this.point=y,this.isLeft=v}link(y){if(y.point===this.point)throw new Error("Tried to link already linked events");let v=y.point.events;for(let T=0,P=v.length;T<P;T++){let N=v[T];this.point.events.push(N),N.point=this.point}this.checkForConsuming()}checkForConsuming(){let y=this.point.events.length;for(let v=0;v<y;v++){let T=this.point.events[v];if(T.segment.consumedBy===void 0)for(let P=v+1;P<y;P++){let N=this.point.events[P];N.consumedBy===void 0&&T.otherSE.point.events===N.otherSE.point.events&&T.segment.consume(N.segment)}}}getAvailableLinkedEvents(){let y=[];for(let v=0,T=this.point.events.length;v<T;v++){let P=this.point.events[v];P!==this&&!P.segment.ringOut&&P.segment.isInResult()&&y.push(P)}return y}getLeftmostComparator(y){let v=new Map,T=P=>{let N=P.otherSE;v.set(P,{sine:lt(this.point,y.point,N.point),cosine:ft(this.point,y.point,N.point)})};return(P,N)=>{v.has(P)||T(P),v.has(N)||T(N);let{sine:W,cosine:V}=v.get(P),{sine:it,cosine:tt}=v.get(N);return W>=0&&it>=0?V<tt?1:V>tt?-1:0:W<0&&it<0?V<tt?-1:V>tt?1:0:it<W?-1:it>W?1:0}}}let Nt=0;class dt{static compare(y,v){let T=y.leftSE.point.x,P=v.leftSE.point.x,N=y.rightSE.point.x,W=v.rightSE.point.x;if(W<T)return 1;if(N<P)return-1;let V=y.leftSE.point.y,it=v.leftSE.point.y,tt=y.rightSE.point.y,pt=v.rightSE.point.y;if(T<P){if(it<V&&it<tt)return 1;if(it>V&&it>tt)return-1;let C=y.comparePoint(v.leftSE.point);if(C<0)return 1;if(C>0)return-1;let j=v.comparePoint(y.rightSE.point);return j!==0?j:-1}if(T>P){if(V<it&&V<pt)return-1;if(V>it&&V>pt)return 1;let C=v.comparePoint(y.leftSE.point);if(C!==0)return C;let j=y.comparePoint(v.rightSE.point);return j<0?1:j>0?-1:1}if(V<it)return-1;if(V>it)return 1;if(N<W){let C=v.comparePoint(y.rightSE.point);if(C!==0)return C}if(N>W){let C=y.comparePoint(v.rightSE.point);if(C<0)return 1;if(C>0)return-1}if(N!==W){let C=tt-V,j=N-T,q=pt-it,mt=W-P;if(C>j&&q<mt)return 1;if(C<j&&q>mt)return-1}return N>W?1:N<W||tt<pt?-1:tt>pt?1:y.id<v.id?-1:y.id>v.id?1:0}constructor(y,v,T,P){this.id=++Nt,this.leftSE=y,y.segment=this,y.otherSE=v,this.rightSE=v,v.segment=this,v.otherSE=y,this.rings=T,this.windings=P}static fromRing(y,v,T){let P,N,W,V=gt.comparePoints(y,v);if(V<0)P=y,N=v,W=1;else if(V>0)P=v,N=y,W=-1;else throw new Error(`Tried to create degenerate segment at [${y.x}, ${y.y}]`);let it=new gt(P,!0),tt=new gt(N,!1);return new dt(it,tt,[T],[W])}replaceRightSE(y){this.rightSE=y,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let y=this.leftSE.point.y,v=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:y<v?y:v},ur:{x:this.rightSE.point.x,y:y>v?y:v}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(y){return y.x===this.leftSE.point.x&&y.y===this.leftSE.point.y||y.x===this.rightSE.point.x&&y.y===this.rightSE.point.y}comparePoint(y){if(this.isAnEndpoint(y))return 0;let v=this.leftSE.point,T=this.rightSE.point,P=this.vector();if(v.x===T.x)return y.x===v.x?0:y.x<v.x?1:-1;let N=(y.y-v.y)/P.y,W=v.x+N*P.x;if(y.x===W)return 0;let V=(y.x-v.x)/P.x,it=v.y+V*P.y;return y.y===it?0:y.y<it?-1:1}getIntersection(y){let v=this.bbox(),T=y.bbox(),P=m(v,T);if(P===null)return null;let N=this.leftSE.point,W=this.rightSE.point,V=y.leftSE.point,it=y.rightSE.point,tt=x(v,V)&&this.comparePoint(V)===0,pt=x(T,N)&&y.comparePoint(N)===0,C=x(v,it)&&this.comparePoint(it)===0,j=x(T,W)&&y.comparePoint(W)===0;if(pt&&tt)return j&&!C?W:!j&&C?it:null;if(pt)return C&&N.x===it.x&&N.y===it.y?null:N;if(tt)return j&&W.x===V.x&&W.y===V.y?null:V;if(j&&C)return null;if(j)return W;if(C)return it;let q=vt(N,this.vector(),V,y.vector());return q===null||!x(P,q)?null:E.round(q.x,q.y)}split(y){let v=[],T=y.events!==void 0,P=new gt(y,!0),N=new gt(y,!1),W=this.rightSE;this.replaceRightSE(N),v.push(N),v.push(P);let V=new dt(P,W,this.rings.slice(),this.windings.slice());return gt.comparePoints(V.leftSE.point,V.rightSE.point)>0&&V.swapEvents(),gt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),T&&(P.checkForConsuming(),N.checkForConsuming()),v}swapEvents(){let y=this.rightSE;this.rightSE=this.leftSE,this.leftSE=y,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let v=0,T=this.windings.length;v<T;v++)this.windings[v]*=-1}consume(y){let v=this,T=y;for(;v.consumedBy;)v=v.consumedBy;for(;T.consumedBy;)T=T.consumedBy;let P=dt.compare(v,T);if(P!==0){if(P>0){let N=v;v=T,T=N}if(v.prev===T){let N=v;v=T,T=N}for(let N=0,W=T.rings.length;N<W;N++){let V=T.rings[N],it=T.windings[N],tt=v.rings.indexOf(V);tt===-1?(v.rings.push(V),v.windings.push(it)):v.windings[tt]+=it}T.rings=null,T.windings=null,T.consumedBy=v,T.leftSE.consumedBy=v.leftSE,T.rightSE.consumedBy=v.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let y=this.prev.consumedBy||this.prev;this._beforeState=y.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let y=this.beforeState();this._afterState={rings:y.rings.slice(0),windings:y.windings.slice(0),multiPolys:[]};let v=this._afterState.rings,T=this._afterState.windings,P=this._afterState.multiPolys;for(let V=0,it=this.rings.length;V<it;V++){let tt=this.rings[V],pt=this.windings[V],C=v.indexOf(tt);C===-1?(v.push(tt),T.push(pt)):T[C]+=pt}let N=[],W=[];for(let V=0,it=v.length;V<it;V++){if(T[V]===0)continue;let tt=v[V],pt=tt.poly;if(W.indexOf(pt)===-1)if(tt.isExterior)N.push(pt);else{W.indexOf(pt)===-1&&W.push(pt);let C=N.indexOf(tt.poly);C!==-1&&N.splice(C,1)}}for(let V=0,it=N.length;V<it;V++){let tt=N[V].multiPoly;P.indexOf(tt)===-1&&P.push(tt)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let y=this.beforeState().multiPolys,v=this.afterState().multiPolys;switch(Wt.type){case"union":{let T=y.length===0,P=v.length===0;this._isInResult=T!==P;break}case"intersection":{let T,P;y.length<v.length?(T=y.length,P=v.length):(T=v.length,P=y.length),this._isInResult=P===Wt.numMultiPolys&&T<P;break}case"xor":{let T=Math.abs(y.length-v.length);this._isInResult=T%2===1;break}case"difference":{let T=P=>P.length===1&&P[0].isSubject;this._isInResult=T(y)!==T(v);break}default:throw new Error(`Unrecognized operation type found ${Wt.type}`)}return this._isInResult}}class _t{constructor(y,v,T){if(!Array.isArray(y)||y.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=v,this.isExterior=T,this.segments=[],typeof y[0][0]!="number"||typeof y[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let P=E.round(y[0][0],y[0][1]);this.bbox={ll:{x:P.x,y:P.y},ur:{x:P.x,y:P.y}};let N=P;for(let W=1,V=y.length;W<V;W++){if(typeof y[W][0]!="number"||typeof y[W][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let it=E.round(y[W][0],y[W][1]);it.x===N.x&&it.y===N.y||(this.segments.push(dt.fromRing(N,it,this)),it.x<this.bbox.ll.x&&(this.bbox.ll.x=it.x),it.y<this.bbox.ll.y&&(this.bbox.ll.y=it.y),it.x>this.bbox.ur.x&&(this.bbox.ur.x=it.x),it.y>this.bbox.ur.y&&(this.bbox.ur.y=it.y),N=it)}(P.x!==N.x||P.y!==N.y)&&this.segments.push(dt.fromRing(N,P,this))}getSweepEvents(){let y=[];for(let v=0,T=this.segments.length;v<T;v++){let P=this.segments[v];y.push(P.leftSE),y.push(P.rightSE)}return y}}class bt{constructor(y,v){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new _t(y[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let T=1,P=y.length;T<P;T++){let N=new _t(y[T],this,!1);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.interiorRings.push(N)}this.multiPoly=v}getSweepEvents(){let y=this.exteriorRing.getSweepEvents();for(let v=0,T=this.interiorRings.length;v<T;v++){let P=this.interiorRings[v].getSweepEvents();for(let N=0,W=P.length;N<W;N++)y.push(P[N])}return y}}class St{constructor(y,v){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof y[0][0][0]=="number"&&(y=[y])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let T=0,P=y.length;T<P;T++){let N=new bt(y[T],this);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.polys.push(N)}this.isSubject=v}getSweepEvents(){let y=[];for(let v=0,T=this.polys.length;v<T;v++){let P=this.polys[v].getSweepEvents();for(let N=0,W=P.length;N<W;N++)y.push(P[N])}return y}}class At{static factory(y){let v=[];for(let T=0,P=y.length;T<P;T++){let N=y[T];if(!N.isInResult()||N.ringOut)continue;let W=null,V=N.leftSE,it=N.rightSE,tt=[V],pt=V.point,C=[];for(;W=V,V=it,tt.push(V),V.point!==pt;)for(;;){let j=V.getAvailableLinkedEvents();if(j.length===0){let xt=tt[0].point,ht=tt[tt.length-1].point;throw new Error(`Unable to complete output ring starting at [${xt.x}, ${xt.y}]. Last matching segment found ends at [${ht.x}, ${ht.y}].`)}if(j.length===1){it=j[0].otherSE;break}let q=null;for(let xt=0,ht=C.length;xt<ht;xt++)if(C[xt].point===V.point){q=xt;break}if(q!==null){let xt=C.splice(q)[0],ht=tt.splice(xt.index);ht.unshift(ht[0].otherSE),v.push(new At(ht.reverse()));continue}C.push({index:tt.length,point:V.point});let mt=V.getLeftmostComparator(W);it=j.sort(mt)[0].otherSE;break}v.push(new At(tt))}return v}constructor(y){this.events=y;for(let v=0,T=y.length;v<T;v++)y[v].segment.ringOut=this;this.poly=null}getGeom(){let y=this.events[0].point,v=[y];for(let tt=1,pt=this.events.length-1;tt<pt;tt++){let C=this.events[tt].point,j=this.events[tt+1].point;qt(C,y,j)!==0&&(v.push(C),y=C)}if(v.length===1)return null;let T=v[0],P=v[1];qt(T,y,P)===0&&v.shift(),v.push(v[0]);let N=this.isExteriorRing()?1:-1,W=this.isExteriorRing()?0:v.length-1,V=this.isExteriorRing()?v.length:-1,it=[];for(let tt=W;tt!=V;tt+=N)it.push([v[tt].x,v[tt].y]);return it}isExteriorRing(){if(this._isExteriorRing===void 0){let y=this.enclosingRing();this._isExteriorRing=y?!y.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let y=this.events[0];for(let P=1,N=this.events.length;P<N;P++){let W=this.events[P];gt.compare(y,W)>0&&(y=W)}let v=y.segment.prevInResult(),T=v?v.prevInResult():null;for(;;){if(!v)return null;if(!T)return v.ringOut;if(T.ringOut!==v.ringOut)return T.ringOut.enclosingRing()!==v.ringOut?v.ringOut:v.ringOut.enclosingRing();v=T.prevInResult(),T=v?v.prevInResult():null}}}class Vt{constructor(y){this.exteriorRing=y,y.poly=this,this.interiorRings=[]}addInterior(y){this.interiorRings.push(y),y.poly=this}getGeom(){let y=[this.exteriorRing.getGeom()];if(y[0]===null)return null;for(let v=0,T=this.interiorRings.length;v<T;v++){let P=this.interiorRings[v].getGeom();P!==null&&y.push(P)}return y}}class Bt{constructor(y){this.rings=y,this.polys=this._composePolys(y)}getGeom(){let y=[];for(let v=0,T=this.polys.length;v<T;v++){let P=this.polys[v].getGeom();P!==null&&y.push(P)}return y}_composePolys(y){let v=[];for(let T=0,P=y.length;T<P;T++){let N=y[T];if(!N.poly)if(N.isExteriorRing())v.push(new Vt(N));else{let W=N.enclosingRing();W.poly||v.push(new Vt(W)),W.poly.addInterior(N)}}return v}}class Yt{constructor(y){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dt.compare;this.queue=y,this.tree=new c(v),this.segments=[]}process(y){let v=y.segment,T=[];if(y.consumedBy)return y.isLeft?this.queue.remove(y.otherSE):this.tree.remove(v),T;let P=y.isLeft?this.tree.add(v):this.tree.find(v);if(!P)throw new Error(`Unable to find segment #${v.id} [${v.leftSE.point.x}, ${v.leftSE.point.y}] -> [${v.rightSE.point.x}, ${v.rightSE.point.y}] in SweepLine tree.`);let N=P,W=P,V,it;for(;V===void 0;)N=this.tree.prev(N),N===null?V=null:N.key.consumedBy===void 0&&(V=N.key);for(;it===void 0;)W=this.tree.next(W),W===null?it=null:W.key.consumedBy===void 0&&(it=W.key);if(y.isLeft){let tt=null;if(V){let C=V.getIntersection(v);if(C!==null&&(v.isAnEndpoint(C)||(tt=C),!V.isAnEndpoint(C))){let j=this._splitSafely(V,C);for(let q=0,mt=j.length;q<mt;q++)T.push(j[q])}}let pt=null;if(it){let C=it.getIntersection(v);if(C!==null&&(v.isAnEndpoint(C)||(pt=C),!it.isAnEndpoint(C))){let j=this._splitSafely(it,C);for(let q=0,mt=j.length;q<mt;q++)T.push(j[q])}}if(tt!==null||pt!==null){let C=null;tt===null?C=pt:pt===null?C=tt:C=gt.comparePoints(tt,pt)<=0?tt:pt,this.queue.remove(v.rightSE),T.push(v.rightSE);let j=v.split(C);for(let q=0,mt=j.length;q<mt;q++)T.push(j[q])}T.length>0?(this.tree.remove(v),T.push(y)):(this.segments.push(v),v.prev=V)}else{if(V&&it){let tt=V.getIntersection(it);if(tt!==null){if(!V.isAnEndpoint(tt)){let pt=this._splitSafely(V,tt);for(let C=0,j=pt.length;C<j;C++)T.push(pt[C])}if(!it.isAnEndpoint(tt)){let pt=this._splitSafely(it,tt);for(let C=0,j=pt.length;C<j;C++)T.push(pt[C])}}}this.tree.remove(v)}return T}_splitSafely(y,v){this.tree.remove(y);let T=y.rightSE;this.queue.remove(T);let P=y.split(v);return P.push(T),y.consumedBy===void 0&&this.tree.add(y),P}}let te=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,G=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class oe{run(y,v,T){Wt.type=y,E.reset();let P=[new St(v,!0)];for(let C=0,j=T.length;C<j;C++)P.push(new St(T[C],!1));if(Wt.numMultiPolys=P.length,Wt.type==="difference"){let C=P[0],j=1;for(;j<P.length;)m(P[j].bbox,C.bbox)!==null?j++:P.splice(j,1)}if(Wt.type==="intersection")for(let C=0,j=P.length;C<j;C++){let q=P[C];for(let mt=C+1,xt=P.length;mt<xt;mt++)if(m(q.bbox,P[mt].bbox)===null)return[]}let N=new c(gt.compare);for(let C=0,j=P.length;C<j;C++){let q=P[C].getSweepEvents();for(let mt=0,xt=q.length;mt<xt;mt++)if(N.insert(q[mt]),N.size>te)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let W=new Yt(N),V=N.size,it=N.pop();for(;it;){let C=it.key;if(N.size===V){let q=C.segment;throw new Error(`Unable to pop() ${C.isLeft?"left":"right"} SweepEvent [${C.point.x}, ${C.point.y}] from segment #${q.id} [${q.leftSE.point.x}, ${q.leftSE.point.y}] -> [${q.rightSE.point.x}, ${q.rightSE.point.y}] from queue.`)}if(N.size>te)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(W.segments.length>G)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let j=W.process(C);for(let q=0,mt=j.length;q<mt;q++){let xt=j[q];xt.consumedBy===void 0&&N.insert(xt)}V=N.size,it=N.pop()}E.reset();let tt=At.factory(W.segments);return new Bt(tt).getGeom()}}let Wt=new oe;var J={union:function(D){for(var y=arguments.length,v=new Array(y>1?y-1:0),T=1;T<y;T++)v[T-1]=arguments[T];return Wt.run("union",D,v)},intersection:function(D){for(var y=arguments.length,v=new Array(y>1?y-1:0),T=1;T<y;T++)v[T-1]=arguments[T];return Wt.run("intersection",D,v)},xor:function(D){for(var y=arguments.length,v=new Array(y>1?y-1:0),T=1;T<y;T++)v[T-1]=arguments[T];return Wt.run("xor",D,v)},difference:function(D){for(var y=arguments.length,v=new Array(y>1?y-1:0),T=1;T<y;T++)v[T-1]=arguments[T];return Wt.run("difference",D,v)}};return J}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var cf=0,lu=1,lf=2;var ys=1,uf=2,cr=3,ts=0,gn=1,bn=2,di=0,lr=1,mo=2,uu=3,hu=4,hf=5;var _s=100,ff=101,df=102,pf=103,mf=104,gf=200,xf=201,yf=202,_f=203,fu=204,du=205,vf=206,bf=207,Mf=208,Sf=209,Ef=210,wf=211,Tf=212,Af=213,Rf=214,ga=0,xa=1,ya=2,qs=3,_a=4,va=5,ba=6,Ma=7,Qa=0,Cf=1,If=2,$n=0,pu=1,mu=2,gu=3,go=4,xu=5,yu=6,_u=7;var vu=300,es=301,vs=302,tc=303,ec=304,xo=306,ds=1e3,oi=1001,Sa=1002,Ze=1003,Pf=1004;var yo=1005;var tn=1006,nc=1007;var ns=1008;var Mn=1009,bu=1010,Mu=1011,ur=1012,ic=1013,Kn=1014,Bn=1015,jn=1016,sc=1017,rc=1018,hr=1020,Su=35902,Eu=35899,wu=1021,Tu=1022,zn=1023,ci=1026,is=1027,oc=1028,ac=1029,ss=1030,cc=1031;var lc=1033,_o=33776,vo=33777,bo=33778,Mo=33779,uc=35840,hc=35841,fc=35842,dc=35843,pc=36196,mc=37492,gc=37496,xc=37488,yc=37489,So=37490,_c=37491,vc=37808,bc=37809,Mc=37810,Sc=37811,Ec=37812,wc=37813,Tc=37814,Ac=37815,Rc=37816,Cc=37817,Ic=37818,Pc=37819,Lc=37820,Dc=37821,Nc=36492,Uc=36494,Fc=36495,Oc=36283,Bc=36284,Eo=36285,zc=36286;var Ur=2300,Ea=2301,pa=2302,Jl=2303,$l=2400,Kl=2401,jl=2402;var Lf=3200;var wo=0,Df=1,Pi="",ke="srgb",Fr="srgb-linear",Or="linear",be="srgb";var ma=7680;var Nf=519,Uf=512,Ff=513,Of=514,kc=515,Bf=516,zf=517,Hc=518,kf=519,Au=35044,fr=35048;var Ru="300 es",Zn=2e3,Ys=2001;function pm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hf(){let i=Br("canvas");return i.style.display="block",i}var bh={},Zs=null;function zr(...i){let t="THREE."+i.shift();Zs?Zs("log",t,...i):console.log(t,...i)}function Vf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Vf(i);let t="THREE."+i.shift();if(Zs)Zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Vf(i);let t="THREE."+i.shift();if(Zs)Zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in bh||(bh[t]=!0,jt(...i))}function Gf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wf={[ga]:xa,[ya]:ba,[_a]:Ma,[qs]:va,[xa]:ga,[ba]:ya,[Ma]:_a,[va]:qs},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,Pr=Math.PI/180,Js=180/Math.PI;function ai(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Cu(i,t){return(i%t+t)%t}function gm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xm(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function ym(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function _m(i,t=1){return t-Math.abs(Cu(i,t*2)-t)}function vm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sm(i,t){return i+Math.random()*(t-i)}function Em(i){return i*(.5-Math.random())}function wm(i){i!==void 0&&(Mh=i);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tm(i){return i*Pr}function Am(i){return i*Js}function Rm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Cm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Im(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var me={DEG2RAD:Pr,RAD2DEG:Js,generateUUID:ai,clamp:se,euclideanModulo:Cu,mapLinear:gm,inverseLerp:xm,lerp:Lr,damp:ym,pingpong:_m,smoothstep:vm,smootherstep:bm,randInt:Mm,randFloat:Sm,randFloatSpread:Em,seededRandom:wm,degToRad:Tm,radToDeg:Am,isPowerOfTwo:Rm,ceilPowerOfTwo:Cm,floorPowerOfTwo:Im,setQuaternionFromProperEuler:Pm,normalize:Ee,denormalize:Yn},Tt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,a=Math.sin(a*M)/A,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a;let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sl.copy(this).projectOnVector(t),this.sub(Sl)}reflect(t){return this.sub(Sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sl=new H,Sh=new Fn,re=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],A=s[4],S=s[7],b=s[2],E=s[5],L=s[8];return r[0]=o*x+a*M+c*b,r[3]=o*m+a*A+c*E,r[6]=o*p+a*S+c*L,r[1]=l*x+u*M+f*b,r[4]=l*m+u*A+f*E,r[7]=l*p+u*S+f*L,r[2]=h*x+d*M+g*b,r[5]=h*m+d*A+g*E,r[8]=h*p+d*S+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(El.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(El.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(El.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},El=new re,Eh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lm(){let i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:t,whitePoint:n,transfer:Or,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var pe=Lm();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,wa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=Br("canvas")),Cs.width=t.width,Cs.height=t.height;let s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dm=0,$s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wl(s[o].image)):r.push(wl(s[o]))}else r=wl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Nm=0,Tl=new H,mn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=oi,s=oi,r=tn,o=ns,a=zn,c=Mn,l=i.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ai(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=vu;mn.DEFAULT_ANISOTROPY=1;var Me=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,S=(d+1)/2,b=(p+1)/2,E=(u+h)/4,L=(f+x)/4,_=(g+m)/4;return A>S&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=L/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=L/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(h-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new mn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kr=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ge=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Um,t,Fm)}lookAt(t,e,n){let s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),zi.crossVectors(n,En),zi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),zi.crossVectors(n,En)),zi.normalize(),Ho.crossVectors(En,zi),s[0]=zi.x,s[4]=Ho.x,s[8]=En.x,s[1]=zi.y,s[5]=Ho.y,s[9]=En.y,s[2]=zi.z,s[6]=Ho.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],A=n[7],S=n[11],b=n[15],E=s[0],L=s[4],_=s[8],I=s[12],O=s[1],U=s[5],B=s[9],Y=s[13],z=s[2],Z=s[6],k=s[10],X=s[14],ct=s[3],Q=s[7],et=s[11],st=s[15];return r[0]=o*E+a*O+c*z+l*ct,r[4]=o*L+a*U+c*Z+l*Q,r[8]=o*_+a*B+c*k+l*et,r[12]=o*I+a*Y+c*X+l*st,r[1]=u*E+f*O+h*z+d*ct,r[5]=u*L+f*U+h*Z+d*Q,r[9]=u*_+f*B+h*k+d*et,r[13]=u*I+f*Y+h*X+d*st,r[2]=g*E+x*O+m*z+p*ct,r[6]=g*L+x*U+m*Z+p*Q,r[10]=g*_+x*B+m*k+p*et,r[14]=g*I+x*Y+m*X+p*st,r[3]=M*E+A*O+S*z+b*ct,r[7]=M*L+A*U+S*Z+b*Q,r[11]=M*_+A*B+S*k+b*et,r[15]=M*I+A*Y+S*X+b*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=c*d-l*h,A=a*d-l*f,S=a*h-c*f,b=o*d-l*u,E=o*h-c*u,L=o*f-a*u;return e*(x*M-m*A+p*S)-n*(g*M-m*b+p*E)+s*(g*A-x*b+p*L)-r*(g*S-x*E+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*a-n*o,A=e*c-s*o,S=e*l-r*o,b=n*c-s*a,E=n*l-r*a,L=s*l-r*c,_=u*x-f*g,I=u*m-h*g,O=u*p-d*g,U=f*m-h*x,B=f*p-d*x,Y=h*p-d*m,z=M*Y-A*B+S*U+b*O-E*I+L*_;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/z;return t[0]=(a*Y-c*B+l*U)*Z,t[1]=(s*B-n*Y-r*U)*Z,t[2]=(x*L-m*E+p*b)*Z,t[3]=(h*E-f*L-d*b)*Z,t[4]=(c*O-o*Y-l*I)*Z,t[5]=(e*Y-s*O+r*I)*Z,t[6]=(m*S-g*L-p*A)*Z,t[7]=(u*L-h*S+d*A)*Z,t[8]=(o*B-a*O+l*_)*Z,t[9]=(n*O-e*B-r*_)*Z,t[10]=(g*E-x*S+p*M)*Z,t[11]=(f*S-u*E-d*M)*Z,t[12]=(a*I-o*U-c*_)*Z,t[13]=(e*U-n*I+s*_)*Z,t[14]=(x*A-g*b-m*M)*Z,t[15]=(u*b-f*A+h*M)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,M=c*l,A=c*u,S=c*f,b=n.x,E=n.y,L=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+S)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(d-S)*E,s[5]=(1-(h+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+A)*L,s[9]=(m-M)*L,s[10]=(1-(h+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Is.set(s[0],s[1],s[2]).length(),a=Is.set(s[4],s[5],s[6]).length(),c=Is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);let l=1/o,u=1/a,f=1/c;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,e.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Zn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Zn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ys)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Zn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Zn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ys)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Is=new H,Wn=new ge,Um=new H(0,0,0),Fm=new H(1,1,1),zi=new H,Ho=new H,En=new H,Th=new ge,Ah=new Fn,ui=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Om=0,Rh=new H,Ps=new Fn,Mi=new ge,Vo=new H,Sr=new H,Bm=new H,zm=new Fn,Ch=new H(1,0,0),Ih=new H(0,1,0),Ph=new H(0,0,1),Lh={type:"added"},km={type:"removed"},Ls={type:"childadded",child:null},Al={type:"childremoved",child:null},He=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new ui,n=new Fn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new re}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vo.copy(t):Vo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Sr,Vo,this.up):Mi.lookAt(Vo,Sr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(km),Al.child=t,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,Bm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new H(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hm={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Cu(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Rl(o,r,t+1/3),this.g=Rl(o,r,t),this.b=Rl(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return pe.workingToColorSpace(ln.copy(this),t),Math.round(se(ln.r*255,0,255))*65536+Math.round(se(ln.g*255,0,255))*256+Math.round(se(ln.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(ln.copy(this),e);let n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=ke){pe.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,s=ln.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Go);let n=Lr(ki.h,Go.h,e),s=Lr(ki.s,Go.s,e),r=Lr(ki.l,Go.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new $t;$t.NAMES=Xf;var Xi=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Xn=new H,Si=new H,Cl=new H,Ei=new H,Ds=new H,Ns=new H,Dh=new H,Il=new H,Pl=new H,Ll=new H,Dl=new Me,Nl=new Me,Ul=new Me,Wi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),Si.subVectors(n,e),Cl.subVectors(t,e);let o=Xn.dot(Xn),a=Xn.dot(Si),c=Xn.dot(Cl),l=Si.dot(Si),u=Si.dot(Cl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(o,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dl.setScalar(0),Nl.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(t,e),Nl.fromBufferAttribute(t,n),Ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),Si.subVectors(t,e),Xn.cross(Si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Xn.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ds.subVectors(s,n),Ns.subVectors(r,n),Il.subVectors(t,n);let c=Ds.dot(Il),l=Ns.dot(Il);if(c<=0&&l<=0)return e.copy(n);Pl.subVectors(t,s);let u=Ds.dot(Pl),f=Ns.dot(Pl);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ds,o);Ll.subVectors(t,r);let d=Ds.dot(Ll),g=Ns.dot(Ll);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ns,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Dh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Dh,a);let p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(Ds,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oe=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),Xo.subVectors(this.max,Er),Us.subVectors(t.a,Er),Fs.subVectors(t.b,Er),Os.subVectors(t.c,Er),Hi.subVectors(Fs,Us),Vi.subVectors(Os,Fs),cs.subVectors(Us,Os);let e=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-cs.z,cs.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,cs.z,0,-cs.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-cs.y,cs.x,0];return!Fl(e,Us,Fs,Os,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Fl(e,Us,Fs,Os,Xo))?!1:(qo.crossVectors(Hi,Vi),e=[qo.x,qo.y,qo.z],Fl(e,Us,Fs,Os,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wi=[new H,new H,new H,new H,new H,new H,new H,new H],qn=new H,Wo=new Oe,Us=new H,Fs=new H,Os=new H,Hi=new H,Vi=new H,cs=new H,Er=new H,Xo=new H,qo=new H,ls=new H;function Fl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=t.dot(ls),l=e.dot(ls),u=n.dot(ls);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ze=new H,Yo=new Tt,Vm=0,Ne=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hr=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gm=new Oe,wr=new H,Ol=new H,vn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Ol)),this.expandByPoint(wr.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wm=0,Nn=new ge,Bl=new He,Bs=new H,wn=new Oe,Tr=new Oe,Ye=new H,he=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pm(t)?Vr:Hr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,n){return Nn.makeTranslation(t,e,n),this.applyMatrix4(Nn),this}scale(t,e,n){return Nn.makeScale(t,e,n),this.applyMatrix4(Nn),this}lookAt(t){return Bl.lookAt(t),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(wn.min,Tr.min),wn.expandByPoint(Ye),Ye.addVectors(wn.max,Tr.max),wn.expandByPoint(Ye)):(wn.expandByPoint(Tr.min),wn.expandByPoint(Tr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ye.fromBufferAttribute(a,l),c&&(Bs.fromBufferAttribute(t,l),Ye.add(Bs)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new H,c[_]=new H;let l=new H,u=new H,f=new H,h=new Tt,d=new Tt,g=new Tt,x=new H,m=new H;function p(_,I,O){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,O),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,O),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[_].add(x),a[I].add(x),a[O].add(x),c[_].add(m),c[I].add(m),c[O].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,I=M.length;_<I;++_){let O=M[_],U=O.start,B=O.count;for(let Y=U,z=U+B;Y<z;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let A=new H,S=new H,b=new H,E=new H;function L(_){b.fromBufferAttribute(s,_),E.copy(b);let I=a[_];A.copy(I),A.sub(b.multiplyScalar(b.dot(I))).normalize(),S.crossVectors(E,I);let U=S.dot(c[_])<0?-1:1;o.setXYZW(_,A.x,A.y,A.z,U)}for(let _=0,I=M.length;_<I;++_){let O=M[_],U=O.start,B=O.count;for(let Y=U,z=U+B;Y<z;Y+=3)L(t.getX(Y+0)),L(t.getX(Y+1)),L(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new H,r=new H,o=new H,a=new H,c=new H,l=new H,u=new H,f=new H;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Ne(h,u,f)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},dn=new H,On=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zl=new H,Xm=new H,qm=new re,Tn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=zl.subVectors(n,e).cross(Xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(zl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qm.getNormalMatrix(t),s=this.coplanarPoint(zl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ym=0,Jn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=lr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=du,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ti=new H,kl=new H,Zo=new H,Jo=new H,ps=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kl.copy(t).add(e).multiplyScalar(.5),Zo.copy(e).sub(t).normalize(),Jo.copy(this.origin).sub(kl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zo),a=Jo.dot(this.direction),c=-Jo.dot(Zo),l=Jo.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(kl).addScaledVector(Zo,h),d}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,M=n.y-o.y,A=n.z-o.z,S=Math.abs(c),b=Math.abs(l),E=Math.abs(u),L,_,I,O,U,B,Y,z,Z,k,X,ct;if(S>=b&&S>=E?(I=c,B=f,Z=g,ct=p,c>=0?(L=l,_=u,O=h,U=d,Y=x,z=m,k=M,X=A):(L=u,_=l,O=d,U=h,Y=m,z=x,k=A,X=M)):b>=E?(I=l,B=h,Z=x,ct=M,l>=0?(L=u,_=c,O=d,U=f,Y=m,z=g,k=A,X=p):(L=c,_=u,O=f,U=d,Y=g,z=m,k=p,X=A)):(I=u,B=d,Z=m,ct=A,u>=0?(L=c,_=l,O=f,U=h,Y=g,z=x,k=p,X=M):(L=l,_=c,O=h,U=f,Y=x,z=g,k=M,X=p)),I===0)return null;let Q=L/I,et=_/I,st=1/I,yt=O-Q*B,Rt=U-et*B,Zt=Y-Q*Z,qt=z-et*Z,Ht=k-Q*ct,lt=X-et*ct,ft=Ht*qt-lt*Zt,wt=yt*lt-Rt*Ht,Dt=Zt*Rt-qt*yt;if(s){if(ft<0||wt<0||Dt<0)return null}else if((ft<0||wt<0||Dt<0)&&(ft>0||wt>0||Dt>0))return null;let vt=ft+wt+Dt;if(vt===0)return null;let gt=st*(ft*B+wt*Z+Dt*ct);return(vt>0?gt<0:gt>0)?null:this.at(gt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nh=new ge,us=new ps,$o=new vn,Uh=new H,Ko=new H,jo=new H,Qo=new H,Hl=new H,ta=new H,Fh=new H,ea=new H,fe=class extends He{constructor(t=new he,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Hl.fromBufferAttribute(f,t),o?ta.addScaledVector(Hl,u):ta.addScaledVector(Hl.sub(e),u))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),us.copy(t.ray).recast(t.near),!($o.containsPoint(us.origin)===!1&&(us.intersectSphere($o,Uh)===null||us.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),us.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=A;S<b;S+=3){let E=a.getX(S),L=a.getX(S+1),_=a.getX(S+2);s=na(this,p,t,n,l,u,f,E,L,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);s=na(this,o,t,n,l,u,f,M,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),A=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,b=A;S<b;S+=3){let E=S,L=S+1,_=S+2;s=na(this,p,t,n,l,u,f,E,L,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let M=m,A=m+1,S=m+2;s=na(this,o,t,n,l,u,f,M,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zm(i,t,e,n,s,r,o,a){let c;if(t.side===gn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ts,a),c===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ea);return l<e.near||l>e.far?null:{distance:l,point:ea.clone(),object:i}}function na(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ko),i.getVertexPosition(c,jo),i.getVertexPosition(l,Qo);let u=Zm(i,t,e,n,Ko,jo,Qo,Fh);if(u){let f=new H;Wi.getBarycoord(Fh,Ko,jo,Qo,f),s&&(u.uv=Wi.getInterpolatedAttribute(s,a,c,l,f,new Tt)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,a,c,l,f,new Tt)),o&&(u.normal=Wi.getInterpolatedAttribute(o,a,c,l,f,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new H,materialIndex:0};Wi.getNormal(Ko,jo,Qo,h.normal),u.face=h,u.barycoord=f}return u}var Wr=class extends mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ze,u=Ze,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zs=new ge,Oh=new ge,ia=[],Bh=new Oe,Jm=new ge,Ar=new fe,Rr=new vn,Xr=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Bh.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(Bh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Rr.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),Oh.multiplyMatrices(n,zs),Ar.matrixWorld=Oh,Ar.raycast(t,ia);for(let o=0,a=ia.length;o<a;o++){let c=ia[o];c.instanceId=r,c.object=this,e.push(c)}ia.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,oc,Bn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new vn,$m=new Tt(.5,.5),sa=new H,tr=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],A=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,p-g,b-M).normalize(),s[1].setComponents(l+o,d+u,p+g,b+M).normalize(),s[2].setComponents(l+a,d+f,p+x,b+A).normalize(),s[3].setComponents(l-a,d-f,p-x,b-A).normalize(),n)s[4].setComponents(c,h,m,S).normalize(),s[5].setComponents(l-c,d-h,p-m,b-S).normalize();else if(s[4].setComponents(l-c,d-h,p-m,b-S).normalize(),e===Zn)s[5].setComponents(l+c,d+h,p+m,b+S).normalize();else if(e===Ys)s[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=$m.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ra=new H,Ca=new H,zh=new ge,Cr=new ps,ra=new vn,Vl=new H,kh=new H,Ia=class extends He{constructor(t=new he,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ra.fromBufferAttribute(e,s-1),Ca.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ra.distanceTo(Ca);t.setAttribute("lineDistance",new Jt(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;zh.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(zh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=u.getX(x),M=u.getX(x+1),A=oa(this,t,Cr,c,p,M,x);A&&e.push(A)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=oa(this,t,Cr,c,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=oa(this,t,Cr,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=oa(this,t,Cr,c,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ra.fromBufferAttribute(a,s),Ca.fromBufferAttribute(a,r),e.distanceSqToSegment(Ra,Ca,Vl,kh)>n)return;Vl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Vl);if(!(l<t.near||l>t.far))return{distance:l,point:kh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Hh=new H,Vh=new H,qr=class extends Ia{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Hh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hh.distanceTo(Vh);t.setAttribute("lineDistance",new Jt(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nr=class extends Jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gh=new ge,Ql=new ps,aa=new vn,ca=new H,Yr=class extends He{constructor(t=new he,e=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;Gh.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(Gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let m=l.getX(g);ca.fromBufferAttribute(f,m),Wh(ca,m,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)ca.fromBufferAttribute(f,g),Wh(ca,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wh(i,t,e,n,s,r,o){let a=Ql.distanceSqToPoint(i);if(a<e){let c=new H;Ql.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Zr=class extends mn{constructor(t=[],e=es,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ir=class extends mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends mn{constructor(t,e,n=Kn,s,r,o,a=Ze,c=Ze,l,u=ci,f=1){if(u!==ci&&u!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pa=class extends qi{constructor(t,e=Kn,n=es,s,r,o=Ze,a=Ze,c,l=ci){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Jr=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pe=class i extends he{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function g(x,m,p,M,A,S,b,E,L,_,I){let O=S/L,U=b/_,B=S/2,Y=b/2,z=E/2,Z=L+1,k=_+1,X=0,ct=0,Q=new H;for(let et=0;et<k;et++){let st=et*U-Y;for(let yt=0;yt<Z;yt++){let Rt=yt*O-B;Q[x]=Rt*M,Q[m]=st*A,Q[p]=z,l.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(yt/L),f.push(1-et/_),X+=1}}for(let et=0;et<_;et++)for(let st=0;st<L;st++){let yt=h+st+Z*et,Rt=h+st+Z*(et+1),Zt=h+(st+1)+Z*(et+1),qt=h+(st+1)+Z*et;c.push(yt,Rt,qt),c.push(Rt,Zt,qt),ct+=6}a.addGroup(d,ct,I),d+=ct,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hi=class i extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new H,u=new Tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fi=class i extends he{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Jt(f,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function M(){let S=new H,b=new H,E=0,L=(e-t)/n;for(let _=0;_<=r;_++){let I=[],O=_/r,U=O*(e-t)+t;for(let B=0;B<=s;B++){let Y=B/s,z=Y*c+a,Z=Math.sin(z),k=Math.cos(z);b.x=U*Z,b.y=-O*n+m,b.z=U*k,f.push(b.x,b.y,b.z),S.set(Z,L,k).normalize(),h.push(S.x,S.y,S.z),d.push(Y,1-O),I.push(g++)}x.push(I)}for(let _=0;_<s;_++)for(let I=0;I<r;I++){let O=x[I][_],U=x[I+1][_],B=x[I+1][_+1],Y=x[I][_+1];(t>0||I!==0)&&(u.push(O,U,Y),E+=3),(e>0||I!==r-1)&&(u.push(U,B,Y),E+=3)}l.addGroup(p,E,0),p+=E}function A(S){let b=g,E=new Tt,L=new H,_=0,I=S===!0?t:e,O=S===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*O,0),h.push(0,O,0),d.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let z=B/s*c+a,Z=Math.cos(z),k=Math.sin(z);L.x=I*k,L.y=m*O,L.z=I*Z,f.push(L.x,L.y,L.z),h.push(0,O,0),E.x=Z*.5+.5,E.y=k*.5*O+.5,d.push(E.x,E.y),g++}for(let B=0;B<s;B++){let Y=b+B,z=U+B;S===!0?u.push(z,z+1,Y):u.push(z+1,z,Y),_+=3}l.addGroup(p,_,S===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},$r=class i extends fi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Tt:new H);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new H,s=[],r=[],o=[],a=new H,c=new ge;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new H)}r[0]=new H,o[0]=new H;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sr=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},La=class extends sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Iu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Xh=new H,qh=new H,Gl=new Iu,Wl=new Iu,Xl=new Iu,Da=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(qh.subVectors(s[0],s[1]).add(s[0]),l=qh);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Xh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Gl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),Wl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Xl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Wl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Xl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Gl.calc(c),Wl.calc(c),Xl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Km(i,t){let e=1-i;return e*e*t}function jm(i,t){return 2*(1-i)*i*t}function Qm(i,t){return i*i*t}function Dr(i,t,e,n){return Km(i,t)+jm(i,e)+Qm(i,n)}function tg(i,t){let e=1-i;return e*e*e*t}function eg(i,t){let e=1-i;return 3*e*e*i*t}function ng(i,t){return 3*(1-i)*i*i*t}function ig(i,t){return i*i*i*t}function Nr(i,t,e,n,s){return tg(i,t)+eg(i,e)+ng(i,n)+ig(i,s)}var Kr=class extends An{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends An{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y),Nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jr=class extends An{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends An{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends An{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends An{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(t,s.x,r.x,o.x),Dr(t,s.y,r.y,o.y),Dr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Yh(a,c.x,l.x,u.x,f.x),Yh(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},tu=Object.freeze({__proto__:null,ArcCurve:La,CatmullRomCurve3:Da,CubicBezierCurve:Kr,CubicBezierCurve3:Na,EllipseCurve:sr,LineCurve:jr,LineCurve3:Ua,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:Fa,SplineCurve:to}),Oa=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new tu[s.type]().fromJSON(s))}return this}},ms=class extends Oa{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new jr(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Qr(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Kr(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new to(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new sr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rn=class extends ms{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ms().fromJSON(s))}return this}};function sg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=qf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=lg(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return eo(r,o,e,a,c,l,0),o}function qf(i,t,e,n,s){let r;if(s===vg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zh(o/n|0,i[o],i[o+1],r);return r&&rr(r,r.next)&&(io(r),r=r.next),r}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(rr(e,e.next)||Le(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function eo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&pg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?og(i,n,s,r):rg(i)){t.push(c.i,i.i,l.i),io(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ag(gs(i),t),eo(i,t,e,n,s,r,2)):o===2&&cg(i,t,e,n,s,r):eo(gs(i),t,e,n,s,r,1);break}}}function rg(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Ir(s,a,r,c,o,l,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function og(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(u,f,h),x=Math.max(a,c,l),m=Math.max(u,f,h),p=eu(d,g,t,e,n),M=eu(x,m,t,e,n),A=i.prevZ,S=i.nextZ;for(;A&&A.z>=p&&S&&S.z<=M;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Ir(a,u,c,f,l,h,A.x,A.y)&&Le(A.prev,A,A.next)>=0||(A=A.prevZ,S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Ir(a,u,c,f,l,h,S.x,S.y)&&Le(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=x&&A.y>=g&&A.y<=m&&A!==s&&A!==o&&Ir(a,u,c,f,l,h,A.x,A.y)&&Le(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;S&&S.z<=M;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Ir(a,u,c,f,l,h,S.x,S.y)&&Le(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ag(i,t){let e=i;do{let n=e.prev,s=e.next.next;!rr(n,s)&&Zf(n,e,e.next,s)&&no(n,s)&&no(s,n)&&(t.push(n.i,e.i,s.i),io(e),io(e.next),e=i=s),e=e.next}while(e!==i);return gs(e)}function cg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xg(o,a)){let c=Jf(o,a);o=gs(o,o.next),c=gs(c,c.next),eo(o,t,e,n,s,r,0),eo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=qf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(gg(l))}s.sort(ug);for(let r=0;r<s.length;r++)e=hg(s[r],e);return e}function ug(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function hg(i,t){let e=fg(i,t);if(!e)return t;let n=Jf(e,i);return gs(n,n.next),gs(e,e.next)}function fg(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(rr(i,e))return e;do{if(rr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Yf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);no(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&dg(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function dg(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function pg(i,t,e,n){let s=i;do s.z===0&&(s.z=eu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mg(s)}function mg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function eu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ir(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Yf(i,t,e,n,s,r,o,a)}function xg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!yg(i,t)&&(no(i,t)&&no(t,i)&&_g(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||rr(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function rr(i,t){return i.x===t.x&&i.y===t.y}function Zf(i,t,e,n){let s=ua(Le(i,t,e)),r=ua(Le(i,t,n)),o=ua(Le(e,n,i)),a=ua(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&la(i,e,t)||r===0&&la(i,n,t)||o===0&&la(e,i,n)||a===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ua(i){return i>0?1:i<0?-1:0}function yg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function no(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function _g(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Jf(i,t){let e=nu(i.i,i.x,i.y),n=nu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zh(i,t,e,n){let s=nu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var iu=class{static triangulate(t,e,n=2){return sg(t,e,n)}},Un=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jh(t),$h(n,t);let o=t.length;e.forEach(Jh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,$h(n,e[c]);let a=iu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $h(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ri=class i extends he{constructor(t=new Rn([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:bg,A,S=!1,b,E,L,_;if(p){A=p.getSpacedPoints(u),S=!0,h=!1;let dt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(u,dt),E=new H,L=new H,_=new H}h||(m=0,d=0,g=0,x=0);let I=a.extractPoints(l),O=I.shape,U=I.holes;if(!Un.isClockWise(O)){O=O.reverse();for(let dt=0,_t=U.length;dt<_t;dt++){let bt=U[dt];Un.isClockWise(bt)&&(U[dt]=bt.reverse())}}function Y(dt){let bt=10000000000000001e-36,St=dt[0];for(let At=1;At<=dt.length;At++){let Vt=At%dt.length,Bt=dt[Vt],Yt=Bt.x-St.x,te=Bt.y-St.y,G=Yt*Yt+te*te,oe=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(St.x),Math.abs(St.y)),Wt=bt*oe*oe;if(G<=Wt){dt.splice(Vt,1),At--;continue}St=Bt}}Y(O),U.forEach(Y);let z=U.length,Z=O;for(let dt=0;dt<z;dt++){let _t=U[dt];O=O.concat(_t)}function k(dt,_t,bt){return _t||ee("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(_t,bt)}let X=O.length;function ct(dt,_t,bt){let St,At,Vt,Bt=dt.x-_t.x,Yt=dt.y-_t.y,te=bt.x-dt.x,G=bt.y-dt.y,oe=Bt*Bt+Yt*Yt,Wt=Bt*G-Yt*te;if(Math.abs(Wt)>Number.EPSILON){let F=Math.sqrt(oe),w=Math.sqrt(te*te+G*G),nt=_t.x-Yt/F,rt=_t.y+Bt/F,J=bt.x-G/w,D=bt.y+te/w,y=((J-nt)*G-(D-rt)*te)/(Bt*G-Yt*te);St=nt+Bt*y-dt.x,At=rt+Yt*y-dt.y;let v=St*St+At*At;if(v<=2)return new Tt(St,At);Vt=Math.sqrt(v/2)}else{let F=!1;Bt>Number.EPSILON?te>Number.EPSILON&&(F=!0):Bt<-Number.EPSILON?te<-Number.EPSILON&&(F=!0):Math.sign(Yt)===Math.sign(G)&&(F=!0),F?(St=-Yt,At=Bt,Vt=Math.sqrt(oe)):(St=Bt,At=Yt,Vt=Math.sqrt(oe/2))}return new Tt(St/Vt,At/Vt)}let Q=[];for(let dt=0,_t=Z.length,bt=_t-1,St=dt+1;dt<_t;dt++,bt++,St++)bt===_t&&(bt=0),St===_t&&(St=0),Q[dt]=ct(Z[dt],Z[bt],Z[St]);let et=[],st,yt=Q.concat();for(let dt=0,_t=z;dt<_t;dt++){let bt=U[dt];st=[];for(let St=0,At=bt.length,Vt=At-1,Bt=St+1;St<At;St++,Vt++,Bt++)Vt===At&&(Vt=0),Bt===At&&(Bt=0),st[St]=ct(bt[St],bt[Vt],bt[Bt]);et.push(st),yt=yt.concat(st)}let Rt;if(m===0)Rt=Un.triangulateShape(Z,U);else{let dt=[],_t=[];for(let bt=0;bt<m;bt++){let St=bt/m,At=d*Math.cos(St*Math.PI/2),Vt=g*Math.sin(St*Math.PI/2)+x;for(let Bt=0,Yt=Z.length;Bt<Yt;Bt++){let te=k(Z[Bt],Q[Bt],Vt);wt(te.x,te.y,-At),St===0&&dt.push(te)}for(let Bt=0,Yt=z;Bt<Yt;Bt++){let te=U[Bt];st=et[Bt];let G=[];for(let oe=0,Wt=te.length;oe<Wt;oe++){let F=k(te[oe],st[oe],Vt);wt(F.x,F.y,-At),St===0&&G.push(F)}St===0&&_t.push(G)}}Rt=Un.triangulateShape(dt,_t)}let Zt=Rt.length,qt=g+x;for(let dt=0;dt<X;dt++){let _t=h?k(O[dt],yt[dt],qt):O[dt];S?(L.copy(b.normals[0]).multiplyScalar(_t.x),E.copy(b.binormals[0]).multiplyScalar(_t.y),_.copy(A[0]).add(L).add(E),wt(_.x,_.y,_.z)):wt(_t.x,_t.y,0)}for(let dt=1;dt<=u;dt++)for(let _t=0;_t<X;_t++){let bt=h?k(O[_t],yt[_t],qt):O[_t];S?(L.copy(b.normals[dt]).multiplyScalar(bt.x),E.copy(b.binormals[dt]).multiplyScalar(bt.y),_.copy(A[dt]).add(L).add(E),wt(_.x,_.y,_.z)):wt(bt.x,bt.y,f/u*dt)}for(let dt=m-1;dt>=0;dt--){let _t=dt/m,bt=d*Math.cos(_t*Math.PI/2),St=g*Math.sin(_t*Math.PI/2)+x;for(let At=0,Vt=Z.length;At<Vt;At++){let Bt=k(Z[At],Q[At],St);wt(Bt.x,Bt.y,f+bt)}for(let At=0,Vt=U.length;At<Vt;At++){let Bt=U[At];st=et[At];for(let Yt=0,te=Bt.length;Yt<te;Yt++){let G=k(Bt[Yt],st[Yt],St);S?wt(G.x,G.y+A[u-1].y,A[u-1].x+bt):wt(G.x,G.y,f+bt)}}}Ht(),lt();function Ht(){let dt=s.length/3;if(h){let _t=0,bt=X*_t;for(let St=0;St<Zt;St++){let At=Rt[St];Dt(At[2]+bt,At[1]+bt,At[0]+bt)}_t=u+m*2,bt=X*_t;for(let St=0;St<Zt;St++){let At=Rt[St];Dt(At[0]+bt,At[1]+bt,At[2]+bt)}}else{for(let _t=0;_t<Zt;_t++){let bt=Rt[_t];Dt(bt[2],bt[1],bt[0])}for(let _t=0;_t<Zt;_t++){let bt=Rt[_t];Dt(bt[0]+X*u,bt[1]+X*u,bt[2]+X*u)}}n.addGroup(dt,s.length/3-dt,0)}function lt(){let dt=s.length/3,_t=0;ft(Z,_t),_t+=Z.length;for(let bt=0,St=U.length;bt<St;bt++){let At=U[bt];ft(At,_t),_t+=At.length}n.addGroup(dt,s.length/3-dt,1)}function ft(dt,_t){let bt=dt.length;for(;--bt>=0;){let St=bt,At=bt-1;At<0&&(At=dt.length-1);for(let Vt=0,Bt=u+m*2;Vt<Bt;Vt++){let Yt=X*Vt,te=X*(Vt+1),G=_t+St+Yt,oe=_t+At+Yt,Wt=_t+At+te,F=_t+St+te;vt(G,oe,Wt,F)}}}function wt(dt,_t,bt){c.push(dt),c.push(_t),c.push(bt)}function Dt(dt,_t,bt){gt(dt),gt(_t),gt(bt);let St=s.length/3,At=M.generateTopUV(n,s,St-3,St-2,St-1);Nt(At[0]),Nt(At[1]),Nt(At[2])}function vt(dt,_t,bt,St){gt(dt),gt(_t),gt(St),gt(_t),gt(bt),gt(St);let At=s.length/3,Vt=M.generateSideWallUV(n,s,At-6,At-3,At-2,At-1);Nt(Vt[0]),Nt(Vt[1]),Nt(Vt[3]),Nt(Vt[1]),Nt(Vt[2]),Nt(Vt[3])}function gt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function Nt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new tu[s.type]().fromJSON(s)),new i(n,t.options)}},bg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Tt(r,o),new Tt(a,c),new Tt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Tt(o,1-c),new Tt(l,1-f),new Tt(h,1-g),new Tt(x,1-p)]:[new Tt(a,1-c),new Tt(u,1-f),new Tt(d,1-g),new Tt(m,1-p)]}};function Mg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var so=class i extends he{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=se(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new H,h=new Tt,d=new H,g=new H,x=new H,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let M=0;M<=e;M++){let A=n+M*u*s,S=Math.sin(A),b=Math.cos(A);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*S,f.y=t[E].y,f.z=t[E].x*b,o.push(f.x,f.y,f.z),h.x=M/e,h.y=E/(t.length-1),a.push(h.x,h.y);let L=c[3*E+0]*S,_=c[3*E+1],I=c[3*E+0]*b;l.push(L,_,I)}}for(let M=0;M<e;M++)for(let A=0;A<t.length-1;A++){let S=A+M*t.length,b=S,E=S+t.length,L=S+t.length+1,_=S+1;r.push(b,E,_),r.push(L,_,E)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ci=class i extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*h-o;for(let A=0;A<l;A++){let S=A*f-r;g.push(S,-M,0),x.push(0,0,1),m.push(A/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let A=M+l*p,S=M+l*(p+1),b=M+1+l*(p+1),E=M+1+l*p;d.push(A,S,E),d.push(S,b,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ro=class i extends he{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new H,g=new Tt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,A=M,S=M+n+1,b=M+n+2,E=M+1;a.push(A,S,E),a.push(S,b,E)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Yi=class i extends he{constructor(t=new Rn([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,g=h.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Un.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Un.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){let M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],A=M[0]+f,S=M[1]+f,b=M[2]+f;n.push(A,S,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Sg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Sg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Cn=class i extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new H,h=new H,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],A=p/n,S=o+A*a,b=t*Math.cos(S),E=Math.sqrt(t*t-b*b),L=0;p===0&&o===0?L=.5/e:p===n&&c===Math.PI&&(L=-.5/e);for(let _=0;_<=e;_++){let I=_/e,O=s+I*r;f.x=-E*Math.cos(O),f.y=b,f.z=E*Math.sin(O),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(I+L,1-A),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let A=u[p][M+1],S=u[p][M],b=u[p+1][M],E=u[p+1][M+1];(p!==0||o>0)&&d.push(A,S,E),(p!==n-1||c<Math.PI)&&d.push(S,b,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ii=class i extends he{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new H,d=new H,g=new H;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let M=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,A=(s+1)*(x-1)+m,S=(s+1)*x+m;c.push(p,M,S),c.push(M,A,S)}this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var oo=class extends he{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new H,r=new H;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let g=h,x=h+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),Kh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),Kh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Kh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Eg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var To={clone:bs,merge:un},wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Eg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ba=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nn=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var or=class extends Jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Qa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},za=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ka=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ks(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Zi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ha=class extends Zi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:r=t,a=2*e-n;break;case jl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kl:o=t,c=2*n-e;break;case jl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,M=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,A=(-1-d)*m+(1.5+d)*x+.5*g,S=d*m-d*x;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+M*o[l+b]+A*o[c+b]+S*o[f+b];return r}},Va=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Ga=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wa=class extends Zi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=d*h+g*2,M=f[p],A=f[p+1],S=t*h+g*2,b=u[S],E=u[S+1],L=Rg(n,e,M,b,s);r[g]=$f(L,x,A,E,m)}return r}};function $f(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ag(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Rg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=$f(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Ag(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var In=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ql(t.settings)&&(n.settings={inTangents:ks(t.settings.inTangents,Array),outTangents:ks(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Wa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case pa:e=this.InterpolantFactoryMethodSmooth;break;case Jl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return pa;case this.InterpolantFactoryMethodBezier:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ql(this.settings)&&(Qh(this.settings.inTangents,t),Qh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ee("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ee("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&mm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ee("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ea;var Ji=class extends In{constructor(t,e,n){super(t,e,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ur;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="color";var qa=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="number";var Ya=class extends Zi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Fn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ao=class extends In{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};ao.prototype.ValueTypeName="quaternion";ao.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends In{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Ur;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends In{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="vector";var Ja=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kf=new Ja,$a=class{constructor(t){this.manager=t!==void 0?t:Kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$a.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xs=class extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Yl=new ge,tf=new H,ef=new H,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Yl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ha=new H,fa=new Fn,ri=new H,lo=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ha,fa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ha,fa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new H,nf=new Tt,sf=new Tt,pn=class extends lo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,nf,sf),e.subVectors(sf,nf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var su=class extends co{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}},uo=class extends ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ki=class extends lo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ru=class extends co{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ji=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new ru}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ho=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Hs=-90,Vs=1,Ka=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(Hs,Vs,t,e);s.layers=this.layers,this.add(s);let r=new pn(Hs,Vs,t,e);r.layers=this.layers,this.add(r);let o=new pn(Hs,Vs,t,e);o.layers=this.layers,this.add(o);let a=new pn(Hs,Vs,t,e);a.layers=this.layers,this.add(a);let c=new pn(Hs,Vs,t,e);c.layers=this.layers,this.add(c);let l=new pn(Hs,Vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ja=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lu="\\[\\]\\.:\\/",Cg=new RegExp("["+Lu+"]","g"),Du="[^"+Lu+"]",Ig="[^"+Lu.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Du),Lg=/(WCOD+)?/.source.replace("WCOD",Ig),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Du),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Du),Ug=new RegExp("^"+Pg+Lg+Dg+Ng+"$"),Fg=["material","materials","bones","map"],ou=class{constructor(t,e,n){let s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cg,"")}static parseTrackName(t){let e=Ug.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=ou;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zM=new Float32Array(1);var Qi=class extends Gr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var rf=new ge,fo=class{constructor(t,e,n=0,s=1/0){this.ray=new ps(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rf),this}intersectObject(t,e=!0,n=[]){return au(t,this,n,e),n.sort(of),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)au(t[s],this,n,e);return n.sort(of),n}};function of(i,t){return i.distance-t.distance}function au(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)au(r[o],t,e,!0)}}var cu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var af=new H,da=new H,Gs=new H,Ws=new H,Zl=new H,Og=new H,Bg=new H,po=class{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){af.subVectors(t,this.start),da.subVectors(this.end,this.start);let n=da.dot(da);if(n===0)return 0;let r=da.dot(af)/n;return e&&(r=se(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Og,n=Bg){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;Gs.subVectors(l,a),Ws.subVectors(u,c),Zl.subVectors(a,c);let f=Gs.dot(Gs),h=Ws.dot(Ws),d=Ws.dot(Zl);if(f<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(f<=s)r=0,o=d/h,o=se(o,0,1);else{let g=Gs.dot(Zl);if(h<=s)o=0,r=se(-g/f,0,1);else{let x=Gs.dot(Ws),m=f*h-x*x;m!==0?r=se((x*d-g*h)/m,0,1):r=0,o=(x*r+d)/h,o<0?(o=0,r=se(-g/f,0,1)):o>1&&(o=1,r=se((x-g)/f,0,1))}}return e.copy(a).addScaledVector(Gs,r),n.copy(c).addScaledVector(Ws,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Nu(i,t,e,n){let s=zg(n);switch(e){case wu:return i*t;case oc:return i*t/s.components*s.byteLength;case ac:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case cc:return i*t*2/s.components*s.byteLength;case Tu:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case lc:return i*t*4/s.components*s.byteLength;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:case dc:return Math.max(i,16)*Math.max(t,8)/4;case uc:case fc:return Math.max(i,8)*Math.max(t,8)/2;case pc:case mc:case xc:case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gc:case So:case _c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nc:case Uc:case Fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Eo:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zg(i){switch(i){case Mn:case bu:return{byteLength:1,components:1};case ur:case Mu:case jn:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Kn:case ic:case Bn:return{byteLength:4,components:1};case Su:case Eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _d(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wg(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
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
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
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
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
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
#endif`,t0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,p0=`#define PI 3.141592653589793
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
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,O0=`#ifdef USE_ENVMAP
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
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V0=`PhysicalMaterial material;
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
#endif`,G0=`uniform sampler2D dfgLUT;
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
}`,W0=`
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ix=`float getShadowMask() {
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
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,ty=`#define DISTANCE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,oy=`uniform vec3 diffuse;
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
}`,ay=`#define LAMBERT
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
}`,cy=`#define LAMBERT
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
}`,ly=`#define MATCAP
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
}`,uy=`#define MATCAP
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
}`,hy=`#define NORMAL
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
}`,fy=`#define NORMAL
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
}`,dy=`#define PHONG
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
}`,py=`#define PHONG
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
}`,my=`#define STANDARD
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
}`,gy=`#define STANDARD
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
}`,xy=`#define TOON
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
}`,yy=`#define TOON
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
}`,_y=`uniform float size;
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
}`,vy=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,My=`uniform vec3 color;
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
}`,Sy=`uniform float rotation;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Xg,alphahash_pars_fragment:qg,alphamap_fragment:Yg,alphamap_pars_fragment:Zg,alphatest_fragment:Jg,alphatest_pars_fragment:$g,aomap_fragment:Kg,aomap_pars_fragment:jg,batching_pars_vertex:Qg,batching_vertex:t0,begin_vertex:e0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:s0,bumpmap_pars_fragment:r0,clipping_planes_fragment:o0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:l0,color_fragment:u0,color_pars_fragment:h0,color_pars_vertex:f0,color_vertex:d0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:_0,emissivemap_pars_fragment:v0,colorspace_fragment:b0,colorspace_pars_fragment:M0,envmap_fragment:S0,envmap_common_pars_fragment:E0,envmap_pars_fragment:w0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:O0,envmap_vertex:A0,fog_vertex:R0,fog_pars_vertex:C0,fog_fragment:I0,fog_pars_fragment:P0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:D0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:U0,lights_pars_begin:F0,lights_toon_fragment:B0,lights_toon_pars_fragment:z0,lights_phong_fragment:k0,lights_phong_pars_fragment:H0,lights_physical_fragment:V0,lights_physical_pars_fragment:G0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:q0,lightprobes_pars_fragment:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:K0,map_fragment:j0,map_pars_fragment:Q0,map_particle_fragment:tx,map_particle_pars_fragment:ex,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:sx,morphcolor_vertex:rx,morphnormal_vertex:ox,morphtarget_pars_vertex:ax,morphtarget_vertex:cx,normal_fragment_begin:lx,normal_fragment_maps:ux,normal_pars_fragment:hx,normal_pars_vertex:fx,normal_vertex:dx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:yx,opaque_fragment:_x,packing:vx,premultiplied_alpha_fragment:bx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:Ex,roughnessmap_fragment:wx,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:Ax,shadowmap_pars_vertex:Rx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Ix,skinbase_vertex:Px,skinning_pars_vertex:Lx,skinning_vertex:Dx,skinnormal_vertex:Nx,specularmap_fragment:Ux,specularmap_pars_fragment:Fx,tonemapping_fragment:Ox,tonemapping_pars_fragment:Bx,transmission_fragment:zx,transmission_pars_fragment:kx,uv_pars_fragment:Hx,uv_pars_vertex:Vx,uv_vertex:Gx,worldpos_vertex:Wx,background_vert:Xx,background_frag:qx,backgroundCube_vert:Yx,backgroundCube_frag:Zx,cube_vert:Jx,cube_frag:$x,depth_vert:Kx,depth_frag:jx,distance_vert:Qx,distance_frag:ty,equirect_vert:ey,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:sy,meshbasic_vert:ry,meshbasic_frag:oy,meshlambert_vert:ay,meshlambert_frag:cy,meshmatcap_vert:ly,meshmatcap_frag:uy,meshnormal_vert:hy,meshnormal_frag:fy,meshphong_vert:dy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:xy,meshtoon_frag:yy,points_vert:_y,points_frag:vy,shadow_vert:by,shadow_frag:My,sprite_vert:Sy,sprite_frag:Ey},Pt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},xn={basic:{uniforms:un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:un([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:un([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:un([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:un([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:un([Pt.points,Pt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:un([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:un([Pt.common,Pt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:un([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:un([Pt.sprite,Pt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:un([Pt.common,Pt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:un([Pt.lights,Pt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};xn.physical={uniforms:un([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Vc={r:0,b:0,g:0},wy=new ge,vd=new re;vd.set(-1,0,0,0,1,0,0,0,1);function Ty(i,t,e,n,s,r){let o=new $t(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let S=M.backgroundBlurriness>0;A=t.get(A,S)}return A}function g(M){let A=!1,S=d(M);S===null?m(o,a):S&&S.isColor&&(m(S,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,A){let S=d(A);S&&(S.isCubeTexture||S.mapping===xo)?(l===void 0&&(l=new fe(new Pe(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:bs(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wy.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vd),l.material.toneMapped=pe.getTransfer(S.colorSpace)!==be,(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new fe(new Ci(2,2),new Ve({name:"BackgroundMaterial",uniforms:bs(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=pe.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(Vc,Pu(i)),e.buffers.color.setClear(Vc.r,Vc.g,Vc.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Ay(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(U,B,Y,z,Z){let k=!1,X=f(U,z,Y,B);r!==X&&(r=X,l(r.object)),k=d(U,z,Y,Z),k&&g(U,z,Y,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(U,B,Y,z),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function f(U,B,Y,z){let Z=z.wireframe===!0,k=n[B.id];k===void 0&&(k={},n[B.id]=k);let X=U.isInstancedMesh===!0?U.id:0,ct=k[X];ct===void 0&&(ct={},k[X]=ct);let Q=ct[Y.id];Q===void 0&&(Q={},ct[Y.id]=Q);let et=Q[Z];return et===void 0&&(et=h(c()),Q[Z]=et),et}function h(U){let B=[],Y=[],z=[];for(let Z=0;Z<e;Z++)B[Z]=0,Y[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:z,object:U,attributes:{},index:null}}function d(U,B,Y,z){let Z=r.attributes,k=B.attributes,X=0,ct=Y.getAttributes();for(let Q in ct)if(ct[Q].location>=0){let st=Z[Q],yt=k[Q];if(yt===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(yt=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(yt=U.instanceColor)),st===void 0||st.attribute!==yt||yt&&st.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(U,B,Y,z){let Z={},k=B.attributes,X=0,ct=Y.getAttributes();for(let Q in ct)if(ct[Q].location>=0){let st=k[Q];st===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(st=U.instanceColor));let yt={};yt.attribute=st,st&&st.data&&(yt.data=st.data),Z[Q]=yt,X++}r.attributes=Z,r.attributesNum=X,r.index=z}function x(){let U=r.newAttributes;for(let B=0,Y=U.length;B<Y;B++)U[B]=0}function m(U){p(U,0)}function p(U,B){let Y=r.newAttributes,z=r.enabledAttributes,Z=r.attributeDivisors;Y[U]=1,z[U]===0&&(i.enableVertexAttribArray(U),z[U]=1),Z[U]!==B&&(i.vertexAttribDivisor(U,B),Z[U]=B)}function M(){let U=r.newAttributes,B=r.enabledAttributes;for(let Y=0,z=B.length;Y<z;Y++)B[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function A(U,B,Y,z,Z,k,X){X===!0?i.vertexAttribIPointer(U,B,Y,Z,k):i.vertexAttribPointer(U,B,Y,z,Z,k)}function S(U,B,Y,z){x();let Z=z.attributes,k=Y.getAttributes(),X=B.defaultAttributeValues;for(let ct in k){let Q=k[ct];if(Q.location>=0){let et=Z[ct];if(et===void 0&&(ct==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),ct==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),et!==void 0){let st=et.normalized,yt=et.itemSize,Rt=t.get(et);if(Rt===void 0)continue;let Zt=Rt.buffer,qt=Rt.type,Ht=Rt.bytesPerElement,lt=qt===i.INT||qt===i.UNSIGNED_INT||et.gpuType===ic;if(et.isInterleavedBufferAttribute){let ft=et.data,wt=ft.stride,Dt=et.offset;if(ft.isInstancedInterleavedBuffer){for(let vt=0;vt<Q.locationSize;vt++)p(Q.location+vt,ft.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let vt=0;vt<Q.locationSize;vt++)m(Q.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let vt=0;vt<Q.locationSize;vt++)A(Q.location+vt,yt/Q.locationSize,qt,st,wt*Ht,(Dt+yt/Q.locationSize*vt)*Ht,lt)}else{if(et.isInstancedBufferAttribute){for(let ft=0;ft<Q.locationSize;ft++)p(Q.location+ft,et.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<Q.locationSize;ft++)m(Q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ft=0;ft<Q.locationSize;ft++)A(Q.location+ft,yt/Q.locationSize,qt,st,yt*Ht,yt/Q.locationSize*ft*Ht,lt)}}else if(X!==void 0){let st=X[ct];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(Q.location,st);break;case 3:i.vertexAttrib3fv(Q.location,st);break;case 4:i.vertexAttrib4fv(Q.location,st);break;default:i.vertexAttrib1fv(Q.location,st)}}}}M()}function b(){I();for(let U in n){let B=n[U];for(let Y in B){let z=B[Y];for(let Z in z){let k=z[Z];for(let X in k)u(k[X].object),delete k[X];delete z[Z]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let B=n[U.id];for(let Y in B){let z=B[Y];for(let Z in z){let k=z[Z];for(let X in k)u(k[X].object),delete k[X];delete z[Z]}}delete n[U.id]}function L(U){for(let B in n){let Y=n[B];for(let z in Y){let Z=Y[z];if(Z[U.id]===void 0)continue;let k=Z[U.id];for(let X in k)u(k[X].object),delete k[X];delete Z[U.id]}}}function _(U){for(let B in n){let Y=n[B],z=U.isInstancedMesh===!0?U.id:0,Z=Y[z];if(Z!==void 0){for(let k in Z){let X=Z[k];for(let ct in X)u(X[ct].object),delete X[ct];delete Z[k]}delete Y[z],Object.keys(Y).length===0&&delete n[B]}}}function I(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Ry(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==zn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let _=L===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Mn&&L!==Bn&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(jt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:S,maxSamples:b,samples:E}}function Iy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Tn,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let M=r?0:n,A=M*4,S=p.clippingState||null;c.value=S,S=u(g,h,A,d);for(let b=0;b!==A;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=d;A!==x;++A,S+=4)o.copy(f[A]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var pr=4,Py=6,Ly=20,Dy=256,Ao=new Ki,jf=new $t,Uu=null,Fu=0,Ou=0,Bu=!1,Ny=new H,Ms=new H,Wc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ny}=r;Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=Bu,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:jn,format:zn,colorSpace:Fr,depthBuffer:!1},s=Qf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Uy(r)),this._blurMaterial=Oy(r,t,e),this._ggxMaterial=Fy(r,t,e)}return s}_compileMaterial(t){let e=new fe(new he,t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,n,s,r){let c=new pn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(jf),f.toneMapping=$n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new Pe,new en({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(jf),p=!0);for(let A=0;A<6;A++){let S=A%3;S===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):S===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;dr(s,S*b,A>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===es||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;dr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ao)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-pr?n-g+pr:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,dr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Ao),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,dr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Ao)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-pr?s-this._lodMax+pr:0),h=4*(this._cubeSize-u);dr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Ao)}};function Uy(i){let t=[],e=[],n=i,s=i-pr+1+Py;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let M=p%3*2/3-1,A=p>2?0:-1,S=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(S,d*h*p);for(let b=0;b<h;b++){let E=u[b*2]*2-1,L=u[b*2+1]*2-1;p===0?Ms.set(1,L,E):p===1?Ms.set(-E,1,-L):p===2?Ms.set(-E,L,1):p===3?Ms.set(-1,L,-E):p===4?Ms.set(-E,-1,L):Ms.set(E,L,-1),Ms.toArray(x,(p*h+b)*d)}}let m=new he;m.setAttribute("position",new Ne(g,d)),m.setAttribute("outputDirection",new Ne(x,d)),e.push(new fe(m,null)),n>pr&&n--}return{lodMeshes:e,sizeLods:t}}function Qf(i,t,e){let n=new _n(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fy(i,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Oy(i,t,e){return new Ve({name:"SphericalGaussianBlur",defines:{SAMPLES:Ly,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function td(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ed(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xc=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:di});r.uniforms.tEquirect.value=e;let o=new fe(s,r),a=e.minFilter;return e.minFilter===ns&&(e.minFilter=tn),new Ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function By(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===tc||d===ec)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Xc(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===tc||d===ec,x=d===es||d===vs;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Wc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Wc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===tc?h.mapping=es:d===ec&&(h.mapping=vs),h}function c(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function zy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function ky(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let M=d.array;x=d.version;for(let A=0,S=M.length;A<S;A+=3){let b=M[A+0],E=M[A+1],L=M[A+2];h.push(b,E,E,L,L,b)}}else{let M=g.array;x=g.version;for(let A=0,S=M.length/3-1;A<S;A+=3){let b=A+0,E=A+1,L=A+2;h.push(b,E,E,L,L,b)}}let m=new(g.count>=65535?Vr:Hr)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Hy(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Vy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gy(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let I=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let S=a.attributes.position.count*A,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*b*4*f),L=new kr(E,S,b,f);L.type=Bn,L.needsUpdate=!0;let _=A*4;for(let O=0;O<f;O++){let U=m[O],B=p[O],Y=M[O],z=S*b*4*O;for(let Z=0;Z<U.count;Z++){let k=Z*_;d===!0&&(s.fromBufferAttribute(U,Z),E[z+k+0]=s.x,E[z+k+1]=s.y,E[z+k+2]=s.z,E[z+k+3]=0),g===!0&&(s.fromBufferAttribute(B,Z),E[z+k+4]=s.x,E[z+k+5]=s.y,E[z+k+6]=s.z,E[z+k+7]=0),x===!0&&(s.fromBufferAttribute(Y,Z),E[z+k+8]=s.x,E[z+k+9]=s.y,E[z+k+10]=s.z,E[z+k+11]=Y.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new Tt(S,b)},n.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Wy(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Xy={[pu]:"LINEAR_TONE_MAPPING",[mu]:"REINHARD_TONE_MAPPING",[gu]:"CINEON_TONE_MAPPING",[go]:"ACES_FILMIC_TONE_MAPPING",[yu]:"AGX_TONE_MAPPING",[_u]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function qy(i,t,e,n,s,r){let o=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new he;l.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Jt([0,2,0,0,2,0],2));let u=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new fe(l,u),h=new Ki(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,M=[],A=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),c!==null&&c.setSize(S,b);for(let E=0;E<M.length;E++){let L=M[E];L.setSize&&L.setSize(S,b)}},this.setEffects=function(S){M=S,A=M.length>0&&M[0].isRenderPass===!0;let b=o.width,E=o.height;M.length>0&&a===null&&(a=new _n(b,E,{type:jn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(b,E,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){let _=M[L];_.setSize&&_.setSize(b,E)}},this.begin=function(S,b){if(x||S.toneMapping===$n&&M.length===0)return!1;if(p=b,b!==null){let E=b.width,L=b.height;(o.width!==E||o.height!==L)&&this.setSize(E,L)}return A===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=$n,!0},this.hasRenderPass=function(){return A},this.end=function(S,b){S.toneMapping=m,x=!0;let E=o,L=a;for(let _=0;_<M.length;_++){let I=M[_];I.enabled!==!1&&(I.render(S,L,E,b),I.needsSwap!==!1&&(E=L,L=L===a?c:a))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},pe.getTransfer(d)===be&&(u.defines.SRGB_TRANSFER="");let _=Xy[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(p),S.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bd=new mn,Hu=new qi(1,1),Md=new kr,Sd=new Aa,Ed=new Zr,nd=[],id=[],sd=new Float32Array(16),rd=new Float32Array(9),od=new Float32Array(4);function gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nd[s];if(r===void 0&&(r=new Float32Array(s),nd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zc(i,t){let e=id[t];e===void 0&&(e=new Int32Array(t),id[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function Jy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Ky(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;od.set(n),i.uniformMatrix2fv(this.addr,!1,od),We(e,n)}}function jy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;rd.set(n),i.uniformMatrix3fv(this.addr,!1,rd),We(e,n)}}function Qy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;sd.set(n),i.uniformMatrix4fv(this.addr,!1,sd),We(e,n)}}function t_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function s_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function c_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hu.compareFunction=e.isReversedDepthBuffer()?Hc:kc,r=Hu):r=bd,e.setTexture2D(t||r,s)}function l_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sd,s)}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ed,s)}function h_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Md,s)}function f_(i){switch(i){case 5126:return Yy;case 35664:return Zy;case 35665:return Jy;case 35666:return $y;case 35674:return Ky;case 35675:return jy;case 35676:return Qy;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return h_}}function d_(i,t){i.uniform1fv(this.addr,t)}function p_(i,t){let e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function m_(i,t){let e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function g_(i,t){let e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function x_(i,t){let e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function y_(i,t){let e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function __(i,t){let e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function v_(i,t){i.uniform1iv(this.addr,t)}function b_(i,t){i.uniform2iv(this.addr,t)}function M_(i,t){i.uniform3iv(this.addr,t)}function S_(i,t){i.uniform4iv(this.addr,t)}function E_(i,t){i.uniform1uiv(this.addr,t)}function w_(i,t){i.uniform2uiv(this.addr,t)}function T_(i,t){i.uniform3uiv(this.addr,t)}function A_(i,t){i.uniform4uiv(this.addr,t)}function R_(i,t,e){let n=this.cache,s=t.length,r=Zc(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Hu:o=bd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function C_(i,t,e){let n=this.cache,s=t.length,r=Zc(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sd,r[o])}function I_(i,t,e){let n=this.cache,s=t.length,r=Zc(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ed,r[o])}function P_(i,t,e){let n=this.cache,s=t.length,r=Zc(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Md,r[o])}function L_(i){switch(i){case 5126:return d_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return x_;case 35675:return y_;case 35676:return __;case 5124:case 35670:return v_;case 35667:case 35671:return b_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return E_;case 36294:return w_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return P_}}var Vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f_(e.type)}},Gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L_(e.type)}},Wu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},zu=/(\w+)(\])?(\[|\.)?/g;function ad(i,t){i.seq.push(t),i.map[t.id]=t}function D_(i,t,e){let n=i.name,s=n.length;for(zu.lastIndex=0;;){let r=zu.exec(n),o=zu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ad(e,l===void 0?new Vu(a,i,t):new Gu(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Wu(a),ad(e,f)),e=f}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);D_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function cd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var N_=37297,U_=0;function F_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ld=new re;function O_(i){pe._getMatrix(ld,pe.workingColorSpace,i);let t=`mat3( ${ld.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case Or:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ud(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(t),a)}else return r}function B_(i,t){let e=O_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var z_={[pu]:"Linear",[mu]:"Reinhard",[gu]:"Cineon",[go]:"ACESFilmic",[yu]:"AgX",[_u]:"Neutral",[xu]:"Custom"};function k_(i,t){let e=z_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gc=new H;function H_(){pe.getLuminanceCoefficients(Gc);let i=Gc.x.toFixed(4),t=Gc.y.toFixed(4),e=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function G_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Co(i){return i!==""}function hd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(i){return i.replace(X_,Y_)}var q_=new Map;function Y_(i,t){let e=ce[t];if(e===void 0){let n=q_.get(t);if(n!==void 0)e=ce[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xu(e)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(i){return i.replace(Z_,J_)}function J_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var $_={[ys]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function K_(i){return $_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var j_={[es]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function Q_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":j_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var tv={[vs]:"ENVMAP_MODE_REFRACTION"};function ev(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nv={[Qa]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[If]:"ENVMAP_BLENDING_ADD"};function iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nv[i.combine]||"ENVMAP_BLENDING_NONE"}function sv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=K_(e),l=Q_(e),u=ev(e),f=iv(e),h=sv(e),d=V_(e),g=G_(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),p.length>0&&(p+=`
`)):(m=[pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),p=[pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?ce.tonemapping_pars_fragment:"",e.toneMapping!==$n?k_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,B_("linearToOutputTexel",e.outputColorSpace),H_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Co).join(`
`)),o=Xu(o),o=hd(o,e),o=fd(o,e),a=Xu(a),a=hd(a,e),a=fd(a,e),o=dd(o),a=dd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=M+m+o,S=M+p+a,b=cd(s,s.VERTEX_SHADER,A),E=cd(s,s.FRAGMENT_SHADER,S);s.attachShader(x,b),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(U){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",Y=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(E)||"",Z=B.trim(),k=Y.trim(),X=z.trim(),ct=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,E);else{let et=ud(s,b,"vertex"),st=ud(s,E,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+et+`
`+st)}else Z!==""?jt("WebGLProgram: Program Info Log:",Z):(k===""||X==="")&&(Q=!1);Q&&(U.diagnostics={runnable:ct,programLog:Z,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(b),s.deleteShader(E),_=new mr(s,x),I=W_(s,x)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let I;this.getAttributes=function(){return I===void 0&&L(this),I};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(x,N_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}var ov=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yu(t),e.set(t,n)),n}},Yu=class{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}};function av(i){return i===ss||i===So||i===Eo}function cv(i,t,e,n,s,r){let o=new Ks,a=new qu,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,I,O,U,B,Y){let z=U.fog,Z=B.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ct=t.get(_.envMap||k,X),Q=ct&&ct.mapping===xo?ct.image.height:null,et=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let st=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=st!==void 0?st.length:0,Rt=0;Z.morphAttributes.position!==void 0&&(Rt=1),Z.morphAttributes.normal!==void 0&&(Rt=2),Z.morphAttributes.color!==void 0&&(Rt=3);let Zt,qt,Ht,lt;if(et){let ie=xn[et];Zt=ie.vertexShader,qt=ie.fragmentShader}else{Zt=_.vertexShader,qt=_.fragmentShader;let ie=a.getVertexShaderStage(_),Kt=a.getFragmentShaderStage(_);a.update(_,ie,Kt),Ht=ie.id,lt=Kt.id}let ft=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,vt=B.isBatchedMesh===!0,gt=!!_.map,Nt=!!_.matcap,dt=!!ct,_t=!!_.aoMap,bt=!!_.lightMap,St=!!_.bumpMap&&_.wireframe===!1,At=!!_.normalMap,Vt=!!_.displacementMap,Bt=!!_.emissiveMap,Yt=!!_.metalnessMap,te=!!_.roughnessMap,G=_.anisotropy>0,oe=_.clearcoat>0,Wt=_.dispersion>0,F=_.retroreflectivity>0,w=_.iridescence>0,nt=_.sheen>0,rt=_.transmission>0,J=G&&!!_.anisotropyMap,D=oe&&!!_.clearcoatMap,y=oe&&!!_.clearcoatNormalMap,v=oe&&!!_.clearcoatRoughnessMap,T=w&&!!_.iridescenceMap,P=w&&!!_.iridescenceThicknessMap,N=nt&&!!_.sheenColorMap,W=nt&&!!_.sheenRoughnessMap,V=!!_.specularMap,it=!!_.specularColorMap,tt=!!_.specularIntensityMap,pt=rt&&!!_.transmissionMap,C=rt&&!!_.thicknessMap,j=!!_.gradientMap,q=!!_.alphaMap,mt=_.alphaTest>0,xt=!!_.alphaHash,ht=!!_.extensions,Mt=$n;_.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Ct={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Zt,fragmentShader:qt,defines:_.defines,customVertexShaderID:Ht,customFragmentShaderID:lt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:vt,batchingColor:vt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:Nt,envMap:dt,envMapMode:dt&&ct.mapping,envMapCubeUVHeight:Q,aoMap:_t,lightMap:bt,bumpMap:St,normalMap:At,displacementMap:Vt,emissiveMap:Bt,normalMapObjectSpace:At&&_.normalMapType===Df,normalMapTangentSpace:At&&_.normalMapType===wo,packedNormalMap:At&&_.normalMapType===wo&&av(_.normalMap.format),metalnessMap:Yt,roughnessMap:te,anisotropy:G,anisotropyMap:J,clearcoat:oe,clearcoatMap:D,clearcoatNormalMap:y,clearcoatRoughnessMap:v,dispersion:Wt,retroreflection:F,iridescence:w,iridescenceMap:T,iridescenceThicknessMap:P,sheen:nt,sheenColorMap:N,sheenRoughnessMap:W,specularMap:V,specularColorMap:it,specularIntensityMap:tt,transmission:rt,transmissionMap:pt,thicknessMap:C,gradientMap:j,opaque:_.transparent===!1&&_.blending===lr&&_.alphaToCoverage===!1,alphaMap:q,alphaTest:mt,alphaHash:xt,combine:_.combine,mapUv:gt&&g(_.map.channel),aoMapUv:_t&&g(_.aoMap.channel),lightMapUv:bt&&g(_.lightMap.channel),bumpMapUv:St&&g(_.bumpMap.channel),normalMapUv:At&&g(_.normalMap.channel),displacementMapUv:Vt&&g(_.displacementMap.channel),emissiveMapUv:Bt&&g(_.emissiveMap.channel),metalnessMapUv:Yt&&g(_.metalnessMap.channel),roughnessMapUv:te&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:D&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:v&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:T&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:P&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:N&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:W&&g(_.sheenRoughnessMap.channel),specularMapUv:V&&g(_.specularMap.channel),specularColorMapUv:it&&g(_.specularColorMap.channel),specularIntensityMapUv:tt&&g(_.specularIntensityMap.channel),transmissionMapUv:pt&&g(_.transmissionMap.channel),thicknessMapUv:C&&g(_.thicknessMap.channel),alphaMapUv:q&&g(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(At||G),vertexNormals:!!Z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(gt||q),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||Z.attributes.normal===void 0&&At===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Rt,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&_.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function m(_){let I=[];if(_.shaderID?I.push(_.shaderID):(I.push(_.customVertexShaderID),I.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)I.push(O),I.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(p(I,_),M(I,_),I.push(i.outputColorSpace)),I.push(_.customProgramCacheKey),I.join()}function p(_,I){_.push(I.precision),_.push(I.outputColorSpace),_.push(I.envMapMode),_.push(I.envMapCubeUVHeight),_.push(I.mapUv),_.push(I.alphaMapUv),_.push(I.lightMapUv),_.push(I.aoMapUv),_.push(I.bumpMapUv),_.push(I.normalMapUv),_.push(I.displacementMapUv),_.push(I.emissiveMapUv),_.push(I.metalnessMapUv),_.push(I.roughnessMapUv),_.push(I.anisotropyMapUv),_.push(I.clearcoatMapUv),_.push(I.clearcoatNormalMapUv),_.push(I.clearcoatRoughnessMapUv),_.push(I.iridescenceMapUv),_.push(I.iridescenceThicknessMapUv),_.push(I.sheenColorMapUv),_.push(I.sheenRoughnessMapUv),_.push(I.specularMapUv),_.push(I.specularColorMapUv),_.push(I.specularIntensityMapUv),_.push(I.transmissionMapUv),_.push(I.thicknessMapUv),_.push(I.combine),_.push(I.fogExp2),_.push(I.sizeAttenuation),_.push(I.morphTargetsCount),_.push(I.morphAttributeCount),_.push(I.numSunLights),_.push(I.numDirLights),_.push(I.numPointLights),_.push(I.numSpotLights),_.push(I.numSpotLightMaps),_.push(I.numHemiLights),_.push(I.numRectAreaLights),_.push(I.numSunLightShadows),_.push(I.numDirLightShadows),_.push(I.numPointLightShadows),_.push(I.numSpotLightShadows),_.push(I.numSpotLightShadowsWithMaps),_.push(I.numLightProbes),_.push(I.shadowMapType),_.push(I.toneMapping),_.push(I.numClippingPlanes),_.push(I.numClipIntersection),_.push(I.depthPacking)}function M(_,I){o.disableAll(),I.instancing&&o.enable(0),I.instancingColor&&o.enable(1),I.instancingMorph&&o.enable(2),I.matcap&&o.enable(3),I.envMap&&o.enable(4),I.normalMapObjectSpace&&o.enable(5),I.normalMapTangentSpace&&o.enable(6),I.clearcoat&&o.enable(7),I.iridescence&&o.enable(8),I.alphaTest&&o.enable(9),I.vertexColors&&o.enable(10),I.vertexAlphas&&o.enable(11),I.vertexUv1s&&o.enable(12),I.vertexUv2s&&o.enable(13),I.vertexUv3s&&o.enable(14),I.vertexTangents&&o.enable(15),I.anisotropy&&o.enable(16),I.alphaHash&&o.enable(17),I.batching&&o.enable(18),I.dispersion&&o.enable(19),I.retroreflection&&o.enable(24),I.batchingColor&&o.enable(20),I.gradientMap&&o.enable(21),I.packedNormalMap&&o.enable(22),I.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reversedDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),I.numLightProbeGrids>0&&o.enable(22),I.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function A(_){let I=d[_.type],O;if(I){let U=xn[I];O=To.clone(U.uniforms)}else O=_.uniforms;return O}function S(_,I){let O=u.get(I);return O!==void 0?++O.usedTimes:(O=new rv(i,I,_,s),l.push(O),u.set(I,O)),O}function b(_){if(--_.usedTimes===0){let I=l.indexOf(_);l[I]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:A,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:L}}function lv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function uv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function md(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=g,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function c(h,d,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let A=a(h,d,g,x,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function l(h,d,g,x,m,p){let M=a(h,d,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,d){e.length>1&&e.sort(h||uv),n.length>1&&n.sort(d||md),s.length>1&&s.sort(d||md)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function hv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new gd,i.set(n,[o])):s>=r.length?(o=new gd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function fv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new $t};break;case"SpotLight":e={position:new H,direction:new H,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function dv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var pv=0;function mv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gv(i){let t=new fv,e=dv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);let s=new H,r=new ge,o=new ge;function a(l){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,M=0,A=0,S=0,b=0,E=0,L=0,_=0,I=0,O=0;l.sort(mv);for(let B=0,Y=l.length;B<Y;B++){let z=l[B],Z=z.color,k=z.intensity,X=z.distance,ct=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ss?ct=z.shadow.map.texture:ct=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=Z.r*k,f+=Z.g*k,h+=Z.b*k;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(z.sh.coefficients[Q],k);O++}else if(z.isSunLight){let Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let et=z.shadow,st=e.get(z);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[g]=st,n.sunShadowMap[g]=ct;let yt=et.getViewportCount();for(let Rt=0;Rt<yt;Rt++)n.sunShadowMatrix[x+Rt]=et.getMatrix(Rt),n.sunShadowCascade[x+Rt]=et._cascadeData[Rt];x+=yt,g++}n.sun[d]=Q,d++}else if(z.isDirectionalLight){let Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let et=z.shadow,st=e.get(z);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,n.directionalShadow[m]=st,n.directionalShadowMap[m]=ct,n.directionalShadowMatrix[m]=z.shadow.matrix,b++}n.directional[m]=Q,m++}else if(z.isSpotLight){let Q=t.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(Z).multiplyScalar(k),Q.distance=X,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,n.spot[M]=Q;let et=z.shadow;if(z.map&&(n.spotLightMap[_]=z.map,_++,et.updateMatrices(z),z.castShadow&&I++),n.spotLightMatrix[M]=et.matrix,z.castShadow){let st=e.get(z);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,n.spotShadow[M]=st,n.spotShadowMap[M]=ct,L++}M++}else if(z.isRectAreaLight){let Q=t.get(z);Q.color.copy(Z).multiplyScalar(k),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),n.rectArea[A]=Q,A++}else if(z.isPointLight){let Q=t.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){let et=z.shadow,st=e.get(z);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,st.shadowCameraNear=et.camera.near,st.shadowCameraFar=et.camera.far,n.pointShadow[p]=st,n.pointShadowMap[p]=ct,n.pointShadowMatrix[p]=z.shadow.matrix,E++}n.point[p]=Q,p++}else if(z.isHemisphereLight){let Q=t.get(z);Q.skyColor.copy(z.color).multiplyScalar(k),Q.groundColor.copy(z.groundColor).multiplyScalar(k),n.hemi[S]=Q,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let U=n.hash;(U.sunLength!==d||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==M||U.rectAreaLength!==A||U.hemiLength!==S||U.numSunShadows!==g||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==L||U.numSpotMaps!==_||U.numLightProbes!==O)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-I,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=O,U.sunLength=d,U.directionalLength=m,U.pointLength=p,U.spotLength=M,U.rectAreaLength=A,U.hemiLength=S,U.numSunShadows=g,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=L,U.numSpotMaps=_,U.numLightProbes=O,n.version=pv++)}function c(l,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let S=l[M];if(S.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),f++}else if(S.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(S.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(S.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function xd(i){let t=new gv(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function xv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new xd(i),t.set(s,[a])):r>=o.length?(a=new xd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`,vv=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],bv=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],yd=new ge,Ro=new H,ku=new H;function Mv(i,t,e){let n=new tr,s=new Tt,r=new Tt,o=new Me,a=new za,c=new ka,l={},u=e.maxTextureSize,f={[ts]:gn,[gn]:ts,[bn]:bn},h=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:yv,fragmentShader:_v}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let p=this.type;this.render=function(E,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===uf&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let I=i.getRenderTarget(),O=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(di),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Y=p!==this.type;Y&&L.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Z=>Z.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Z=E.length;z<Z;z++){let k=E[z],X=k.shadow;if(X===void 0){jt("WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ct=X.getFrameExtents();s.multiply(ct),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,X.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Q,X.map===null||Y===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===cr){if(k.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new _n(s.x,s.y,{format:ss,type:jn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),X.map.texture.name=k.name+".shadowMap",X.map.depthTexture=new qi(s.x,s.y,Bn),X.map.depthTexture.name=k.name+".shadowMapDepth",X.map.depthTexture.format=ci,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ze,X.map.depthTexture.magFilter=Ze}else k.isPointLight?(X.map=new Xc(s.x),X.map.depthTexture=new Pa(s.x,Kn)):(X.map=new _n(s.x,s.y),X.map.depthTexture=new qi(s.x,s.y,Kn)),X.map.depthTexture.name=k.name+".shadowMap",X.map.depthTexture.format=ci,this.type===ys?(X.map.depthTexture.compareFunction=Q?Hc:kc,X.map.depthTexture.minFilter=tn,X.map.depthTexture.magFilter=tn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ze,X.map.depthTexture.magFilter=Ze);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let et=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();k.isPointLight!==!0&&X.updateMatrices(k,_);for(let st=0;st<et;st++){let yt=X.getCamera(st);if(k.isPointLight){let Rt=X.camera,Zt=X.matrix,qt=k.distance||Rt.far;qt!==Rt.far&&(Rt.far=qt,Rt.updateProjectionMatrix()),Ro.setFromMatrixPosition(k.matrixWorld),Rt.position.copy(Ro),ku.copy(Rt.position),ku.add(vv[st]),Rt.up.copy(bv[st]),Rt.lookAt(ku),Rt.updateMatrixWorld(),Zt.makeTranslation(-Ro.x,-Ro.y,-Ro.z),yd.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(yd,Rt.coordinateSystem,Rt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,st),i.clear();else{st===0&&(i.setRenderTarget(X.map),i.clear());let Rt=X.getViewport(st);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),B.viewport(o)}n=X.getFrustum(st),S(L,_,yt,k,this.type)}X.isPointLightShadow!==!0&&this.type===cr&&M(X,_),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,O,U)};function M(E,L){let _=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new _n(s.x,s.y,{format:ss,type:jn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(L,null,_,h,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(L,null,_,d,x,null)}function A(E,L,_,I){let O=null,U=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)O=U;else if(O=_.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let B=O.uuid,Y=L.uuid,z=l[B];z===void 0&&(z={},l[B]=z);let Z=z[Y];Z===void 0&&(Z=O.clone(),z[Y]=Z,L.addEventListener("dispose",b)),O=Z}if(O.visible=L.visible,O.wireframe=L.wireframe,I===cr?O.side=L.shadowSide!==null?L.shadowSide:L.side:O.side=L.shadowSide!==null?L.shadowSide:f[L.side],O.alphaMap=L.alphaMap,O.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,O.map=L.map,O.clipShadows=L.clipShadows,O.clippingPlanes=L.clippingPlanes,O.clipIntersection=L.clipIntersection,O.displacementMap=L.displacementMap,O.displacementScale=L.displacementScale,O.displacementBias=L.displacementBias,O.wireframeLinewidth=L.wireframeLinewidth,O.linewidth=L.linewidth,_.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let B=i.properties.get(O);B.light=_}return O}function S(E,L,_,I,O){if(E.visible===!1)return;if(E.layers.test(L.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===cr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),z=E.material;if(Array.isArray(z)){let Z=Y.groups;for(let k=0,X=Z.length;k<X;k++){let ct=Z[k],Q=z[ct.materialIndex];if(Q&&Q.visible){let et=A(E,Q,I,O);E.onBeforeShadow(i,E,L,_,Y,et,ct),i.renderBufferDirect(_,null,Y,et,E,ct),E.onAfterShadow(i,E,L,_,Y,et,ct)}}}else if(z.visible){let Z=A(E,z,I,O);E.onBeforeShadow(i,E,L,_,Y,Z,null),i.renderBufferDirect(_,null,Y,Z,E,null),E.onAfterShadow(i,E,L,_,Y,Z,null)}}let B=E.children;for(let Y=0,z=B.length;Y<z;Y++)S(B[Y],L,_,I,O)}function b(E){E.target.removeEventListener("dispose",b);for(let _ in l){let I=l[_],O=E.target.uuid;O in I&&(I[O].dispose(),delete I[O])}}}function Sv(i,t){function e(){let C=!1,j=new Me,q=null,mt=new Me(0,0,0,0);return{setMask:function(xt){q!==xt&&!C&&(i.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){C=xt},setClear:function(xt,ht,Mt,Ct,ie){ie===!0&&(xt*=Ct,ht*=Ct,Mt*=Ct),j.set(xt,ht,Mt,Ct),mt.equals(j)===!1&&(i.clearColor(xt,ht,Mt,Ct),mt.copy(j))},reset:function(){C=!1,q=null,mt.set(-1,0,0,0)}}}function n(){let C=!1,j=!1,q=null,mt=null,xt=null;return{setReversed:function(ht){if(j!==ht){let Mt=t.get("EXT_clip_control");ht?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),j=ht;let Ct=xt;xt=null,this.setClear(Ct)}},getReversed:function(){return j},setTest:function(ht){ht?ft(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!C&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if(j&&(ht=Wf[ht]),mt!==ht){switch(ht){case ga:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case ba:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=ht}},setLocked:function(ht){C=ht},setClear:function(ht){xt!==ht&&(xt=ht,j&&(ht=1-ht),i.clearDepth(ht))},reset:function(){C=!1,q=null,mt=null,xt=null,j=!1}}}function s(){let C=!1,j=null,q=null,mt=null,xt=null,ht=null,Mt=null,Ct=null,ie=null;return{setTest:function(Kt){C||(Kt?ft(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Kt){j!==Kt&&!C&&(i.stencilMask(Kt),j=Kt)},setFunc:function(Kt,ye,Se){(q!==Kt||mt!==ye||xt!==Se)&&(i.stencilFunc(Kt,ye,Se),q=Kt,mt=ye,xt=Se)},setOp:function(Kt,ye,Se){(ht!==Kt||Mt!==ye||Ct!==Se)&&(i.stencilOp(Kt,ye,Se),ht=Kt,Mt=ye,Ct=Se)},setLocked:function(Kt){C=Kt},setClear:function(Kt){ie!==Kt&&(i.clearStencil(Kt),ie=Kt)},reset:function(){C=!1,j=null,q=null,mt=null,xt=null,ht=null,Mt=null,Ct=null,ie=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,A=null,S=null,b=null,E=null,L=null,_=new $t(0,0,0),I=0,O=!1,U=null,B=null,Y=null,z=null,Z=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ct=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=ct>=1):Q.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=ct>=2);let et=null,st={},yt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Zt=new Me().fromArray(yt),qt=new Me().fromArray(Rt);function Ht(C,j,q,mt){let xt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(C,ht),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<q;Mt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(j+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return ht}let lt={};lt[i.TEXTURE_2D]=Ht(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(qs),St(!1),At(lu),ft(i.CULL_FACE),_t(di);function ft(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function wt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Dt(C,j){return h[C]!==j?(i.bindFramebuffer(C,j),h[C]=j,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function vt(C,j){let q=g,mt=!1;if(C){q=d.get(j),q===void 0&&(q=[],d.set(j,q));let xt=C.textures;if(q.length!==xt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Mt=xt.length;ht<Mt;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=xt.length,mt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,mt=!0);mt&&i.drawBuffers(q)}function gt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let Nt={[_s]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[df]:i.FUNC_REVERSE_SUBTRACT};Nt[pf]=i.MIN,Nt[mf]=i.MAX;let dt={[gf]:i.ZERO,[xf]:i.ONE,[yf]:i.SRC_COLOR,[fu]:i.SRC_ALPHA,[Ef]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[bf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(C,j,q,mt,xt,ht,Mt,Ct,ie,Kt){if(C===di){m===!0&&(wt(i.BLEND),m=!1);return}if(m===!1&&(ft(i.BLEND),m=!0),C!==hf){if(C!==p||Kt!==O){if((M!==_s||b!==_s)&&(i.blendEquation(i.FUNC_ADD),M=_s,b=_s),Kt)switch(C){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",C);break}else switch(C){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uu:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",C);break}A=null,S=null,E=null,L=null,_.set(0,0,0),I=0,p=C,O=Kt}return}xt=xt||j,ht=ht||q,Mt=Mt||mt,(j!==M||xt!==b)&&(i.blendEquationSeparate(Nt[j],Nt[xt]),M=j,b=xt),(q!==A||mt!==S||ht!==E||Mt!==L)&&(i.blendFuncSeparate(dt[q],dt[mt],dt[ht],dt[Mt]),A=q,S=mt,E=ht,L=Mt),(Ct.equals(_)===!1||ie!==I)&&(i.blendColor(Ct.r,Ct.g,Ct.b,ie),_.copy(Ct),I=ie),p=C,O=!1}function bt(C,j){C.side===bn?wt(i.CULL_FACE):ft(i.CULL_FACE);let q=C.side===gn;j&&(q=!q),St(q),C.blending===lr&&C.transparent===!1?_t(di):_t(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let mt=C.stencilWrite;a.setTest(mt),mt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Bt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function At(C){C!==cf?(ft(i.CULL_FACE),C!==B&&(C===lu?i.cullFace(i.BACK):C===lf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),B=C}function Vt(C){C!==Y&&(X&&i.lineWidth(C),Y=C)}function Bt(C,j,q){C?(ft(i.POLYGON_OFFSET_FILL),(z!==j||Z!==q)&&(z=j,Z=q,o.getReversed()&&(j=-j),i.polygonOffset(j,q))):wt(i.POLYGON_OFFSET_FILL)}function Yt(C){C?ft(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function te(C){C===void 0&&(C=i.TEXTURE0+k-1),et!==C&&(i.activeTexture(C),et=C)}function G(C,j,q){q===void 0&&(et===null?q=i.TEXTURE0+k-1:q=et);let mt=st[q];mt===void 0&&(mt={type:void 0,texture:void 0},st[q]=mt),(mt.type!==C||mt.texture!==j)&&(et!==q&&(i.activeTexture(q),et=q),i.bindTexture(C,j||lt[C]),mt.type=C,mt.texture=j)}function oe(){let C=st[et];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function w(){try{i.texSubImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function nt(){try{i.texSubImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function D(){try{i.texStorage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function y(){try{i.texStorage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function T(){try{i.texImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function P(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function N(C,j){f[C]!==j&&(i.pixelStorei(C,j),f[C]=j)}function W(C){Zt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Zt.copy(C))}function V(C){qt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),qt.copy(C))}function it(C,j){let q=l.get(j);q===void 0&&(q=new WeakMap,l.set(j,q));let mt=q.get(C);mt===void 0&&(mt=i.getUniformBlockIndex(j,C.name),q.set(C,mt))}function tt(C,j){let mt=l.get(j).get(C);c.get(j)!==mt&&(i.uniformBlockBinding(j,mt,C.__bindingPointIndex),c.set(j,mt))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},et=null,st={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,M=null,A=null,S=null,b=null,E=null,L=null,_=new $t(0,0,0),I=0,O=!1,U=null,B=null,Y=null,z=null,Z=null,Zt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:wt,bindFramebuffer:Dt,drawBuffers:vt,useProgram:gt,setBlending:_t,setMaterial:bt,setFlipSided:St,setCullFace:At,setLineWidth:Vt,setPolygonOffset:Bt,setScissorTest:Yt,activeTexture:te,bindTexture:G,unbindTexture:oe,compressedTexImage2D:Wt,compressedTexImage3D:F,texImage2D:v,texImage3D:T,pixelStorei:N,getParameter:P,updateUBOMapping:it,uniformBlockBinding:tt,texStorage2D:D,texStorage3D:y,texSubImage2D:w,texSubImage3D:nt,compressedTexSubImage2D:rt,compressedTexSubImage3D:J,scissor:W,viewport:V,reset:pt}}function Ev(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Tt,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,w){return g?new OffscreenCanvas(F,w):Br("canvas")}function m(F,w,nt){let rt=1,J=Wt(F);if((J.width>nt||J.height>nt)&&(rt=nt/Math.max(J.width,J.height)),rt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let D=Math.floor(rt*J.width),y=Math.floor(rt*J.height);h===void 0&&(h=x(D,y));let v=w?x(D,y):h;return v.width=D,v.height=y,v.getContext("2d").drawImage(F,0,0,D,y),jt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+D+"x"+y+")."),v}else return"data"in F&&jt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),F;return F}function p(F){return F.generateMipmaps}function M(F){i.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(F,w,nt,rt,J,D=!1){if(F!==null){if(i[F]!==void 0)return i[F];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let y;rt&&(y=t.get("EXT_texture_norm16"),y||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let v=w;if(w===i.RED&&(nt===i.FLOAT&&(v=i.R32F),nt===i.HALF_FLOAT&&(v=i.R16F),nt===i.UNSIGNED_BYTE&&(v=i.R8),nt===i.UNSIGNED_SHORT&&y&&(v=y.R16_EXT),nt===i.SHORT&&y&&(v=y.R16_SNORM_EXT)),w===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(v=i.R8UI),nt===i.UNSIGNED_SHORT&&(v=i.R16UI),nt===i.UNSIGNED_INT&&(v=i.R32UI),nt===i.BYTE&&(v=i.R8I),nt===i.SHORT&&(v=i.R16I),nt===i.INT&&(v=i.R32I)),w===i.RG&&(nt===i.FLOAT&&(v=i.RG32F),nt===i.HALF_FLOAT&&(v=i.RG16F),nt===i.UNSIGNED_BYTE&&(v=i.RG8),nt===i.UNSIGNED_SHORT&&y&&(v=y.RG16_EXT),nt===i.SHORT&&y&&(v=y.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(v=i.RG8UI),nt===i.UNSIGNED_SHORT&&(v=i.RG16UI),nt===i.UNSIGNED_INT&&(v=i.RG32UI),nt===i.BYTE&&(v=i.RG8I),nt===i.SHORT&&(v=i.RG16I),nt===i.INT&&(v=i.RG32I)),w===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(v=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(v=i.RGB16UI),nt===i.UNSIGNED_INT&&(v=i.RGB32UI),nt===i.BYTE&&(v=i.RGB8I),nt===i.SHORT&&(v=i.RGB16I),nt===i.INT&&(v=i.RGB32I)),w===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(v=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(v=i.RGBA16UI),nt===i.UNSIGNED_INT&&(v=i.RGBA32UI),nt===i.BYTE&&(v=i.RGBA8I),nt===i.SHORT&&(v=i.RGBA16I),nt===i.INT&&(v=i.RGBA32I)),w===i.RGB&&(nt===i.UNSIGNED_SHORT&&y&&(v=y.RGB16_EXT),nt===i.SHORT&&y&&(v=y.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(v=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(v=i.R11F_G11F_B10F)),w===i.RGBA){let T=D?Or:pe.getTransfer(J);nt===i.FLOAT&&(v=i.RGBA32F),nt===i.HALF_FLOAT&&(v=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(v=T===be?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&y&&(v=y.RGBA16_EXT),nt===i.SHORT&&y&&(v=y.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(v=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(v=i.RGB5_A1)}return(v===i.R16F||v===i.R32F||v===i.RG16F||v===i.RG32F||v===i.RGBA16F||v===i.RGBA32F)&&t.get("EXT_color_buffer_float"),v}function b(F,w){let nt;return F?w===null||w===Kn||w===hr?nt=i.DEPTH24_STENCIL8:w===Bn?nt=i.DEPTH32F_STENCIL8:w===ur&&(nt=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Kn||w===hr?nt=i.DEPTH_COMPONENT24:w===Bn?nt=i.DEPTH_COMPONENT32F:w===ur&&(nt=i.DEPTH_COMPONENT16),nt}function E(F,w){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ze&&F.minFilter!==tn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function L(F){let w=F.target;w.removeEventListener("dispose",L),I(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&f.delete(w)}function _(F){let w=F.target;w.removeEventListener("dispose",_),U(w)}function I(F){let w=n.get(F);if(w.__webglInit===void 0)return;let nt=F.source,rt=d.get(nt);if(rt){let J=rt[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&O(F),Object.keys(rt).length===0&&d.delete(nt)}n.remove(F)}function O(F){let w=n.get(F);i.deleteTexture(w.__webglTexture);let nt=F.source,rt=d.get(nt);delete rt[w.__cacheKey],o.memory.textures--}function U(F){let w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let J=0;J<w.__webglFramebuffer[rt].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[rt][J]);else i.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[rt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let nt=F.textures;for(let rt=0,J=nt.length;rt<J;rt++){let D=n.get(nt[rt]);D.__webglTexture&&(i.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(nt[rt])}n.remove(F)}let B=0;function Y(){B=0}function z(){return B}function Z(F){B=F}function k(){let F=B;return F>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,F}function X(F){let w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function ct(F,w){let nt=n.get(F);if(F.isVideoTexture&&G(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&nt.__version!==F.version){let rt=F.image;if(rt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(nt,F,w);return}}else F.isExternalTexture&&(nt.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+w)}function Q(F,w){let nt=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&nt.__version!==F.version){wt(nt,F,w);return}else F.isExternalTexture&&(nt.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+w)}function et(F,w){let nt=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&nt.__version!==F.version){wt(nt,F,w);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+w)}function st(F,w){let nt=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&nt.__version!==F.version){Dt(nt,F,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+w)}let yt={[ds]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},Rt={[Ze]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[yo]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[nc]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},Zt={[Uf]:i.NEVER,[kf]:i.ALWAYS,[Ff]:i.LESS,[kc]:i.LEQUAL,[Of]:i.EQUAL,[Hc]:i.GEQUAL,[Bf]:i.GREATER,[zf]:i.NOTEQUAL};function qt(F,w){if(w.type===Bn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===tn||w.magFilter===nc||w.magFilter===yo||w.magFilter===ns||w.minFilter===tn||w.minFilter===nc||w.minFilter===yo||w.minFilter===ns)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,yt[w.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,yt[w.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,yt[w.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Rt[w.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Rt[w.minFilter]),w.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Zt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ze||w.minFilter!==yo&&w.minFilter!==ns||w.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ht(F,w){let nt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",L));let rt=w.source,J=d.get(rt);J===void 0&&(J={},d.set(rt,J));let D=X(w);if(D!==F.__cacheKey){J[D]===void 0&&(J[D]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),J[D].usedTimes++;let y=J[F.__cacheKey];y!==void 0&&(J[F.__cacheKey].usedTimes--,y.usedTimes===0&&O(w)),F.__cacheKey=D,F.__webglTexture=J[D].texture}return nt}function lt(F,w,nt){return Math.floor(Math.floor(F/nt)/w)}function ft(F,w,nt,rt){let D=F.updateRanges;if(D.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,nt,rt,w.data);else{D.sort((N,W)=>N.start-W.start);let y=0;for(let N=1;N<D.length;N++){let W=D[y],V=D[N],it=W.start+W.count,tt=lt(V.start,w.width,4),pt=lt(W.start,w.width,4);V.start<=it+1&&tt===pt&&lt(V.start+V.count-1,w.width,4)===tt?W.count=Math.max(W.count,V.start+V.count-W.start):(++y,D[y]=V)}D.length=y+1;let v=e.getParameter(i.UNPACK_ROW_LENGTH),T=e.getParameter(i.UNPACK_SKIP_PIXELS),P=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let N=0,W=D.length;N<W;N++){let V=D[N],it=Math.floor(V.start/4),tt=Math.ceil(V.count/4),pt=it%w.width,C=Math.floor(it/w.width),j=tt,q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,pt,C,j,q,nt,rt,w.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,v),e.pixelStorei(i.UNPACK_SKIP_PIXELS,T),e.pixelStorei(i.UNPACK_SKIP_ROWS,P)}}function wt(F,w,nt){let rt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=i.TEXTURE_3D);let J=Ht(F,w),D=w.source;e.bindTexture(rt,F.__webglTexture,i.TEXTURE0+nt);let y=n.get(D);if(D.version!==y.__version||J===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let q=pe.getPrimaries(pe.workingColorSpace),mt=w.colorSpace===Pi?null:pe.getPrimaries(w.colorSpace),xt=w.colorSpace===Pi||q===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let T=m(w.image,!1,s.maxTextureSize);T=oe(w,T);let P=r.convert(w.format,w.colorSpace),N=r.convert(w.type),W=S(w.internalFormat,P,N,w.normalized,w.colorSpace,w.isVideoTexture);qt(rt,w);let V,it=w.mipmaps,tt=w.isVideoTexture!==!0,pt=y.__version===void 0||J===!0,C=D.dataReady,j=E(w,T);if(w.isDepthTexture)W=b(w.format===is,w.type),pt&&(tt?e.texStorage2D(i.TEXTURE_2D,1,W,T.width,T.height):e.texImage2D(i.TEXTURE_2D,0,W,T.width,T.height,0,P,N,null));else if(w.isDataTexture)if(it.length>0){tt&&pt&&e.texStorage2D(i.TEXTURE_2D,j,W,it[0].width,it[0].height);for(let q=0,mt=it.length;q<mt;q++)V=it[q],tt?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,V.width,V.height,P,N,V.data):e.texImage2D(i.TEXTURE_2D,q,W,V.width,V.height,0,P,N,V.data);w.generateMipmaps=!1}else tt?(pt&&e.texStorage2D(i.TEXTURE_2D,j,W,T.width,T.height),C&&ft(w,T,P,N)):e.texImage2D(i.TEXTURE_2D,0,W,T.width,T.height,0,P,N,T.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){tt&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,W,it[0].width,it[0].height,T.depth);for(let q=0,mt=it.length;q<mt;q++)if(V=it[q],w.format!==zn)if(P!==null)if(tt){if(C)if(w.layerUpdates.size>0){let xt=Nu(V.width,V.height,w.format,w.type);for(let ht of w.layerUpdates){let Mt=V.data.subarray(ht*xt/V.data.BYTES_PER_ELEMENT,(ht+1)*xt/V.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ht,V.width,V.height,1,P,Mt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,V.width,V.height,T.depth,P,V.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,W,V.width,V.height,T.depth,0,V.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,V.width,V.height,T.depth,P,N,V.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,W,V.width,V.height,T.depth,0,P,N,V.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{tt&&pt&&e.texStorage2D(i.TEXTURE_2D,j,W,it[0].width,it[0].height);for(let q=0,mt=it.length;q<mt;q++)V=it[q],w.format!==zn?P!==null?tt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,V.width,V.height,P,V.data):e.compressedTexImage2D(i.TEXTURE_2D,q,W,V.width,V.height,0,V.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,V.width,V.height,P,N,V.data):e.texImage2D(i.TEXTURE_2D,q,W,V.width,V.height,0,P,N,V.data)}else if(w.isDataArrayTexture)if(tt){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,W,T.width,T.height,T.depth),C)if(w.layerUpdates.size>0){let q=Nu(T.width,T.height,w.format,w.type);for(let mt of w.layerUpdates){let xt=T.data.subarray(mt*q/T.data.BYTES_PER_ELEMENT,(mt+1)*q/T.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,T.width,T.height,1,P,N,xt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,P,N,T.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,W,T.width,T.height,T.depth,0,P,N,T.data);else if(w.isData3DTexture)tt?(pt&&e.texStorage3D(i.TEXTURE_3D,j,W,T.width,T.height,T.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,P,N,T.data)):e.texImage3D(i.TEXTURE_3D,0,W,T.width,T.height,T.depth,0,P,N,T.data);else if(w.isFramebufferTexture){if(pt)if(tt)e.texStorage2D(i.TEXTURE_2D,j,W,T.width,T.height);else{let q=T.width,mt=T.height;for(let xt=0;xt<j;xt++)e.texImage2D(i.TEXTURE_2D,xt,W,q,mt,0,P,N,null),q>>=1,mt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),T.parentNode!==q){q.appendChild(T),f.add(w),q.onpaint=mt=>{let xt=mt.changedElements;for(let ht of f)xt.includes(ht.image)&&(ht.needsUpdate=!0)},q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,T);else{let xt=i.RGBA,ht=i.RGBA,Mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,ht,Mt,T)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(it.length>0){if(tt&&pt){let q=Wt(it[0]);e.texStorage2D(i.TEXTURE_2D,j,W,q.width,q.height)}for(let q=0,mt=it.length;q<mt;q++)V=it[q],tt?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,P,N,V):e.texImage2D(i.TEXTURE_2D,q,W,P,N,V);w.generateMipmaps=!1}else if(tt){if(pt){let q=Wt(T);e.texStorage2D(i.TEXTURE_2D,j,W,q.width,q.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,P,N,T)}else e.texImage2D(i.TEXTURE_2D,0,W,P,N,T);p(w)&&M(rt),y.__version=D.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Dt(F,w,nt){if(w.image.length!==6)return;let rt=Ht(F,w),J=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+nt);let D=n.get(J);if(J.version!==D.__version||rt===!0){e.activeTexture(i.TEXTURE0+nt);let y=pe.getPrimaries(pe.workingColorSpace),v=w.colorSpace===Pi?null:pe.getPrimaries(w.colorSpace),T=w.colorSpace===Pi||y===v?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,T);let P=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,W=[];for(let ht=0;ht<6;ht++)!P&&!N?W[ht]=m(w.image[ht],!0,s.maxCubemapSize):W[ht]=N?w.image[ht].image:w.image[ht],W[ht]=oe(w,W[ht]);let V=W[0],it=r.convert(w.format,w.colorSpace),tt=r.convert(w.type),pt=S(w.internalFormat,it,tt,w.normalized,w.colorSpace),C=w.isVideoTexture!==!0,j=D.__version===void 0||rt===!0,q=J.dataReady,mt=E(w,V);qt(i.TEXTURE_CUBE_MAP,w);let xt;if(P){C&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,pt,V.width,V.height);for(let ht=0;ht<6;ht++){xt=W[ht].mipmaps;for(let Mt=0;Mt<xt.length;Mt++){let Ct=xt[Mt];w.format!==zn?it!==null?C?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,0,0,Ct.width,Ct.height,it,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,pt,Ct.width,Ct.height,0,Ct.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,0,0,Ct.width,Ct.height,it,tt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,pt,Ct.width,Ct.height,0,it,tt,Ct.data)}}}else{if(xt=w.mipmaps,C&&j){xt.length>0&&mt++;let ht=Wt(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,pt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(N){C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,W[ht].width,W[ht].height,it,tt,W[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,W[ht].width,W[ht].height,0,it,tt,W[ht].data);for(let Mt=0;Mt<xt.length;Mt++){let ie=xt[Mt].image[ht].image;C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,0,0,ie.width,ie.height,it,tt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,pt,ie.width,ie.height,0,it,tt,ie.data)}}else{C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,it,tt,W[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,it,tt,W[ht]);for(let Mt=0;Mt<xt.length;Mt++){let Ct=xt[Mt];C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,0,0,it,tt,Ct.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,pt,it,tt,Ct.image[ht])}}}p(w)&&M(i.TEXTURE_CUBE_MAP),D.__version=J.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function vt(F,w,nt,rt,J,D){let y=r.convert(nt.format,nt.colorSpace),v=r.convert(nt.type),T=S(nt.internalFormat,y,v,nt.normalized,nt.colorSpace),P=n.get(w),N=n.get(nt);if(N.__renderTarget=w,!P.__hasExternalTextures){let W=Math.max(1,w.width>>D),V=Math.max(1,w.height>>D);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,D,T,W,V,w.depth,0,y,v,null):e.texImage2D(J,D,T,W,V,0,y,v,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,J,N.__webglTexture,0,Yt(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,J,N.__webglTexture,D),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(F,w,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,F),w.depthBuffer){let rt=w.depthTexture,J=rt&&rt.isDepthTexture?rt.type:null,D=b(w.stencilBuffer,J),y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(w),D,w.width,w.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(w),D,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,D,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,F)}else{let rt=w.textures;for(let J=0;J<rt.length;J++){let D=rt[J],y=r.convert(D.format,D.colorSpace),v=r.convert(D.type),T=S(D.internalFormat,y,v,D.normalized,D.colorSpace);te(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(w),T,w.width,w.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(w),T,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,T,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(F,w,nt){let rt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(w.depthTexture);if(J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),rt){if(J.__webglInit===void 0&&(J.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),qt(i.TEXTURE_CUBE_MAP,w.depthTexture);let P=r.convert(w.depthTexture.format),N=r.convert(w.depthTexture.type),W;w.depthTexture.format===ci?W=i.DEPTH_COMPONENT24:w.depthTexture.format===is&&(W=i.DEPTH24_STENCIL8);for(let V=0;V<6;V++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,W,w.width,w.height,0,P,N,null)}}else ct(w.depthTexture,0);let D=J.__webglTexture,y=Yt(w),v=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,T=w.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ci)te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,v,D,0,y):i.framebufferTexture2D(i.FRAMEBUFFER,T,v,D,0);else if(w.depthTexture.format===is)te(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,v,D,0,y):i.framebufferTexture2D(i.FRAMEBUFFER,T,v,D,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(F){let w=n.get(F),nt=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){let rt=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",J)};rt.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=rt}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(nt)for(let rt=0;rt<6;rt++)Nt(w.__webglFramebuffer[rt],F,rt);else{let rt=F.texture.mipmaps;rt&&rt.length>0?Nt(w.__webglFramebuffer[0],F,0):Nt(w.__webglFramebuffer,F,0)}else if(nt){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=i.createRenderbuffer(),gt(w.__webglDepthbuffer[rt],F,!1);else{let J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=w.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,D)}}else{let rt=F.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),gt(w.__webglDepthbuffer,F,!1);else{let J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,D)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(F,w,nt){let rt=n.get(F);w!==void 0&&vt(rt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&dt(F)}function bt(F){let w=F.texture,nt=n.get(F),rt=n.get(w);F.addEventListener("dispose",_);let J=F.textures,D=F.isWebGLCubeRenderTarget===!0,y=J.length>1;if(y||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=w.version,o.memory.textures++),D){nt.__webglFramebuffer=[];for(let v=0;v<6;v++)if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer[v]=[];for(let T=0;T<w.mipmaps.length;T++)nt.__webglFramebuffer[v][T]=i.createFramebuffer()}else nt.__webglFramebuffer[v]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){nt.__webglFramebuffer=[];for(let v=0;v<w.mipmaps.length;v++)nt.__webglFramebuffer[v]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(y)for(let v=0,T=J.length;v<T;v++){let P=n.get(J[v]);P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&te(F)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let v=0;v<J.length;v++){let T=J[v];nt.__webglColorRenderbuffer[v]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[v]);let P=r.convert(T.format,T.colorSpace),N=r.convert(T.type),W=S(T.internalFormat,P,N,T.normalized,T.colorSpace,F.isXRRenderTarget===!0),V=Yt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,W,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+v,i.RENDERBUFFER,nt.__webglColorRenderbuffer[v])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(nt.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(D){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),qt(i.TEXTURE_CUBE_MAP,w);for(let v=0;v<6;v++)if(w.mipmaps&&w.mipmaps.length>0)for(let T=0;T<w.mipmaps.length;T++)vt(nt.__webglFramebuffer[v][T],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,T);else vt(nt.__webglFramebuffer[v],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0);p(w)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(y){for(let v=0,T=J.length;v<T;v++){let P=J[v],N=n.get(P),W=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(W=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,N.__webglTexture),qt(W,P),vt(nt.__webglFramebuffer,F,P,i.COLOR_ATTACHMENT0+v,W,0),p(P)&&M(W)}e.unbindTexture()}else{let v=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(v=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(v,rt.__webglTexture),qt(v,w),w.mipmaps&&w.mipmaps.length>0)for(let T=0;T<w.mipmaps.length;T++)vt(nt.__webglFramebuffer[T],F,w,i.COLOR_ATTACHMENT0,v,T);else vt(nt.__webglFramebuffer,F,w,i.COLOR_ATTACHMENT0,v,0);p(w)&&M(v),e.unbindTexture()}F.depthBuffer&&dt(F)}function St(F){let w=F.textures;for(let nt=0,rt=w.length;nt<rt;nt++){let J=w[nt];if(p(J)){let D=A(F),y=n.get(J).__webglTexture;e.bindTexture(D,y),M(D),e.unbindTexture()}}}let At=[],Vt=[];function Bt(F){if(F.samples>0){if(te(F)===!1){let w=F.textures,nt=F.width,rt=F.height,J=i.COLOR_BUFFER_BIT,D=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,y=n.get(F),v=w.length>1;if(v)for(let P=0;P<w.length;P++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,y.__webglMultisampledFramebuffer);let T=F.texture.mipmaps;T&&T.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let P=0;P<w.length;P++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),v){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,y.__webglColorRenderbuffer[P]);let N=n.get(w[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,nt,rt,0,0,nt,rt,J,i.NEAREST),c===!0&&(At.length=0,Vt.length=0,At.push(i.COLOR_ATTACHMENT0+P),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(At.push(D),Vt.push(D),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),v)for(let P=0;P<w.length;P++){e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,y.__webglColorRenderbuffer[P]);let N=n.get(w[P]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&c){let w=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Yt(F){return Math.min(s.maxSamples,F.samples)}function te(F){let w=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function G(F){let w=o.render.frame;u.get(F)!==w&&(u.set(F,w),F.update())}function oe(F,w){let nt=F.colorSpace,rt=F.format,J=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||nt!==Fr&&nt!==Pi&&(pe.getTransfer(nt)===be?(rt!==zn||J!==Mn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",nt)),w}function Wt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.getTextureUnits=z,this.setTextureUnits=Z,this.setTexture2D=ct,this.setTexture2DArray=Q,this.setTexture3D=et,this.setTextureCube=st,this.rebindTextures=_t,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function wv(i,t){function e(n,s=Pi){let r,o=pe.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===zn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===_o||n===vo||n===bo||n===Mo)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===hc||n===fc||n===dc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc||n===xc||n===yc||n===So||n===_c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xc)return r.COMPRESSED_R11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===So)return r.COMPRESSED_RG11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vc||n===bc||n===Mc||n===Sc||n===Ec||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nc||n===Uc||n===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nc)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===Bc||n===Eo||n===zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
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

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Jr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:Tv,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ju=class extends li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Zu,p={},M=e.getContextAttributes(),A=null,S=null,b=[],E=[],L=new Tt,_=null,I=null,O=new pn;O.viewport=new Me;let U=new pn;U.viewport=new Me;let B=[O,U],Y=new ja,z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ft=b[lt];return ft===void 0&&(ft=new js,b[lt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(lt){let ft=b[lt];return ft===void 0&&(ft=new js,b[lt]=ft),ft.getGripSpace()},this.getHand=function(lt){let ft=b[lt];return ft===void 0&&(ft=new js,b[lt]=ft),ft.getHandSpace()};function k(lt){let ft=E.indexOf(lt.inputSource);if(ft===-1)return;let wt=b[ft];wt!==void 0&&(wt.update(lt.inputSource,lt.frame,l||o),wt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ct);for(let lt=0;lt<b.length;lt++){let ft=E[lt];ft!==null&&(E[lt]=null,b[lt].disconnect(ft))}z=null,Z=null,m.reset();for(let lt in p)delete p[lt];if(t.setRenderTarget(A),d=null,h=null,f=null,s=null,S=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),I!==null){let lt=I.camera;lt.fov=I.fov,lt.zoom=I.zoom,lt.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(lt){l=lt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ct),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Dt=null,vt=null;M.depth&&(vt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=M.stencil?is:ci,Dt=M.stencil?hr:Kn);let gt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(gt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new _n(h.textureWidth,h.textureHeight,{format:zn,type:Mn,depthTexture:new qi(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let wt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new _n(d.framebufferWidth,d.framebufferHeight,{format:zn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(lt){for(let ft=0;ft<lt.removed.length;ft++){let wt=lt.removed[ft],Dt=E.indexOf(wt);Dt>=0&&(E[Dt]=null,b[Dt].disconnect(wt))}for(let ft=0;ft<lt.added.length;ft++){let wt=lt.added[ft],Dt=E.indexOf(wt);if(Dt===-1){for(let gt=0;gt<b.length;gt++)if(gt>=E.length){E.push(wt),Dt=gt;break}else if(E[gt]===null){E[gt]=wt,Dt=gt;break}if(Dt===-1)break}let vt=b[Dt];vt&&vt.connect(wt)}}let Q=new H,et=new H;function st(lt,ft,wt){Q.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);let Dt=Q.distanceTo(et),vt=ft.projectionMatrix.elements,gt=wt.projectionMatrix.elements,Nt=vt[14]/(vt[10]-1),dt=vt[14]/(vt[10]+1),_t=(vt[9]+1)/vt[5],bt=(vt[9]-1)/vt[5],St=(vt[8]-1)/vt[0],At=(gt[8]+1)/gt[0],Vt=Nt*St,Bt=Nt*At,Yt=Dt/(-St+At),te=Yt*-St;if(ft.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(te),lt.translateZ(Yt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),vt[10]===-1)lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let G=Nt+Yt,oe=dt+Yt,Wt=Vt-te,F=Bt+(Dt-te),w=_t*dt/oe*G,nt=bt*dt/oe*G;lt.projectionMatrix.makePerspective(Wt,F,w,nt,G,oe),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function yt(lt,ft){ft===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ft.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ft=lt.near,wt=lt.far;m.texture!==null&&(m.depthNear>0&&(ft=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),Y.near=U.near=O.near=ft,Y.far=U.far=O.far=wt,(z!==Y.near||Z!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),z=Y.near,Z=Y.far),Y.layers.mask=lt.layers.mask|6,O.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;let Dt=lt.parent,vt=Y.cameras;yt(Y,Dt);for(let gt=0;gt<vt.length;gt++)yt(vt[gt],Dt);vt.length===2?st(Y,O,U):Y.projectionMatrix.copy(O.projectionMatrix),I===null&&lt.isPerspectiveCamera&&(I={camera:lt,fov:lt.fov,zoom:lt.zoom}),Rt(lt,Y,Dt)};function Rt(lt,ft,wt){wt===null?lt.matrix.copy(ft.matrixWorld):(lt.matrix.copy(wt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ft.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Js*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(lt){c=lt,h!==null&&(h.fixedFoveation=lt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=lt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(lt){return p[lt]};let Zt=null;function qt(lt,ft){if(u=ft.getViewerPose(l||o),g=ft,u!==null){let wt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Dt=!1;wt.length!==Y.cameras.length&&(Y.cameras.length=0,Dt=!0);for(let dt=0;dt<wt.length;dt++){let _t=wt[dt],bt=null;if(d!==null)bt=d.getViewport(_t);else{let At=f.getViewSubImage(h,_t);bt=At.viewport,dt===0&&(t.setRenderTargetTextures(S,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(S))}let St=B[dt];St===void 0&&(St=new pn,St.layers.enable(dt),St.viewport=new Me,B[dt]=St),St.matrix.fromArray(_t.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(_t.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(bt.x,bt.y,bt.width,bt.height),dt===0&&(Y.matrix.copy(St.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Dt===!0&&Y.cameras.push(St)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let dt=f.getDepthInformation(wt[0]);dt&&dt.isValid&&dt.texture&&m.init(dt,s.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let dt=0;dt<wt.length;dt++){let _t=wt[dt].camera;if(_t){let bt=p[_t];bt||(bt=new Jr,p[_t]=bt);let St=f.getCameraImage(_t);bt.sourceTexture=St}}}}for(let wt=0;wt<b.length;wt++){let Dt=E[wt],vt=b[wt];Dt!==null&&vt!==void 0&&vt.update(Dt,ft,l||o)}Zt&&Zt(lt,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}let Ht=new _d;Ht.setAnimationLoop(qt),this.setAnimationLoop=function(lt){Zt=lt},this.dispose=function(){}}},Rv=new ge,wd=new re;wd.set(-1,0,0,0,1,0,0,0,1);function Cv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),A=M.envMap,S=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Iv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let E=b.program;n.uniformBlockBinding(S,E)}function l(S,b){let E=s[S.id];E===void 0&&(m(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",M));let L=b.program;n.updateUBOMapping(S,L);let _=t.render.frame;r[S.id]!==_&&(h(S),r[S.id]=_)}function u(S){let b=f();S.__bindingPointIndex=b;let E=i.createBuffer(),L=S.__size,_=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let b=s[S.id],E=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,I=E.length;_<I;_++){let O=E[_];if(Array.isArray(O))for(let U=0,B=O.length;U<B;U++)d(O[U],_,U,L);else d(O,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,b,E,L){if(x(S,b,E,L)===!0){let _=S.__offset,I=S.value;if(Array.isArray(I)){let O=0;for(let U=0;U<I.length;U++){let B=I[U],Y=p(B);g(B,S.__data,O),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,S.__data)}}function g(S,b,E){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,E)}function x(S,b,E,L){let _=S.value,I=b+"_"+E;if(L[I]===void 0)return typeof _=="number"||typeof _=="boolean"?L[I]=_:ArrayBuffer.isView(_)?L[I]=_.slice():L[I]=_.clone(),!0;{let O=L[I];if(typeof _=="number"||typeof _=="boolean"){if(O!==_)return L[I]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(O.equals(_)===!1)return O.copy(_),!0}}return!1}function m(S){let b=S.uniforms,E=0,L=16;for(let I=0,O=b.length;I<O;I++){let U=Array.isArray(b[I])?b[I]:[b[I]];for(let B=0,Y=U.length;B<Y;B++){let z=U[B],Z=Array.isArray(z.value)?z.value:[z.value];for(let k=0,X=Z.length;k<X;k++){let ct=Z[k],Q=p(ct),et=E%L,st=et%Q.boundary,yt=et+st;E+=st,yt!==0&&L-yt<Q.storage&&(E+=L-yt),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=Q.storage}}}let _=E%L;return _>0&&(E+=L-_),S.__size=E,S.__cache={},this}function p(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",S),b}function M(S){let b=S.target;b.removeEventListener("dispose",M);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}var Pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function Lv(){return pi===null&&(pi=new Wr(Pv,16,16,ss,jn),pi.name="DFG_LUT",pi.minFilter=tn,pi.magFilter=tn,pi.wrapS=oi,pi.wrapT=oi,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var qc=class{constructor(t={}){let{canvas:e=Hf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Mn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([lc,cc,ac]),p=new Set([Mn,Kn,ur,hr,sc,rc]),M=new Uint32Array(4),A=new Int32Array(4),S=new H,b=null,E=null,L=[],_=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,U=!1,B=null,Y=null,z=null,Z=null;this._outputColorSpace=ke;let k=0,X=0,ct=null,Q=-1,et=null,st=new Me,yt=new Me,Rt=null,Zt=new $t(0),qt=0,Ht=e.width,lt=e.height,ft=1,wt=null,Dt=null,vt=new Me(0,0,Ht,lt),gt=new Me(0,0,Ht,lt),Nt=!1,dt=new tr,_t=!1,bt=!1,St=new ge,At=new H,Vt=new Me,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function te(){return ct===null?ft:1}let G=n;function oe(R,$){return e.getContext(R,$)}let Wt,F,w,nt,rt,J,D,y,v,T,P,N,W,V,it,tt,pt,C,j,q,mt,xt,ht;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",ye,!1),G===null){let $="webgl2";if(G=oe($,R),G===null)throw oe($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Mt()}catch(R){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),ee("WebGLRenderer: "+R.message),R}function Mt(){Wt=new zy(G),Wt.init(),mt=new wv(G,Wt),F=new Cy(G,Wt,t,mt),w=new Sv(G,Wt),F.reversedDepthBuffer&&h&&w.buffers.depth.setReversed(!0),Y=G.createFramebuffer(),z=G.createFramebuffer(),Z=G.createFramebuffer(),nt=new Vy(G),rt=new lv,J=new Ev(G,Wt,w,rt,F,mt,nt),D=new By(O),y=new Wg(G),xt=new Ay(G,y),v=new ky(G,y,nt,xt),T=new Wy(G,v,y,xt,nt),C=new Gy(G,F,J),it=new Iy(rt),P=new cv(O,D,Wt,F,xt,it),N=new Cv(O,rt),W=new hv,V=new xv(Wt),pt=new Ty(O,D,w,T,g,c),tt=new Mv(O,T,F),ht=new Iv(G,nt,F,w),j=new Ry(G,Wt,nt),q=new Hy(G,Wt,nt),nt.programs=P.programs,O.capabilities=F,O.extensions=Wt,O.properties=rt,O.renderLists=W,O.shadowMap=tt,O.state=w,O.info=nt}x!==Mn&&(I=new qy(x,e.width,e.height,a,s,r));let Ct=new Ju(O,G);this.xr=Ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let R=Wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(R){R!==void 0&&(ft=R,this.setSize(Ht,lt,!1))},this.getSize=function(R){return R.set(Ht,lt)},this.setSize=function(R,$,ut=!0){if(Ct.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ht=R,lt=$,e.width=Math.floor(R*ft),e.height=Math.floor($*ft),ut===!0&&(e.style.width=R+"px",e.style.height=$+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(Ht*ft,lt*ft).floor()},this.setDrawingBufferSize=function(R,$,ut){Ht=R,lt=$,ft=ut,e.width=Math.floor(R*ut),e.height=Math.floor($*ut),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(x===Mn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(st)},this.getViewport=function(R){return R.copy(vt)},this.setViewport=function(R,$,ut,at){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,$,ut,at),w.viewport(st.copy(vt).multiplyScalar(ft).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,$,ut,at){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,$,ut,at),w.scissor(yt.copy(gt).multiplyScalar(ft).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(R){w.setScissorTest(Nt=R)},this.setOpaqueSort=function(R){wt=R},this.setTransparentSort=function(R){Dt=R},this.getClearColor=function(R){return R.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,ut=!0){let at=0;if(R){let ot=!1;if(ct!==null){let It=ct.texture.format;ot=m.has(It)}if(ot){let It=ct.texture.type,Ut=p.has(It),Lt=pt.getClearColor(),zt=pt.getClearAlpha(),Xt=Lt.r,ae=Lt.g,de=Lt.b;Ut?(M[0]=Xt,M[1]=ae,M[2]=de,M[3]=zt,G.clearBufferuiv(G.COLOR,0,M)):(A[0]=Xt,A[1]=ae,A[2]=de,A[3]=zt,G.clearBufferiv(G.COLOR,0,A))}else at|=G.COLOR_BUFFER_BIT}$&&(at|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ut&&(at|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&G.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),B=R},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),pt.dispose(),W.dispose(),V.dispose(),rt.dispose(),D.dispose(),T.dispose(),xt.dispose(),ht.dispose(),P.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Gt),Ct.removeEventListener("sessionend",Qt),ne.stop()};function ie(R){R.preventDefault(),zr("WebGLRenderer: Context Lost."),U=!0}function Kt(){zr("WebGLRenderer: Context Restored."),U=!1;let R=nt.autoReset,$=tt.enabled,ut=tt.autoUpdate,at=tt.needsUpdate,ot=tt.type;Mt(),nt.autoReset=R,tt.enabled=$,tt.autoUpdate=ut,tt.needsUpdate=at,tt.type=ot}function ye(R){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Se(R){let $=R.target;$.removeEventListener("dispose",Se),$e($)}function $e(R){Ue(R),rt.remove(R)}function Ue(R){let $=rt.get(R).programs;$!==void 0&&($.forEach(function(ut){P.releaseProgram(ut)}),R.isShaderMaterial&&P.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ut,at,ot,It){$===null&&($=Bt);let Ut=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Lt=Ts(R,$,ut,at,ot);w.setMaterial(at,Ut);let zt=ut.index,Xt=1;if(at.wireframe===!0){if(zt=v.getWireframeAttribute(ut),zt===void 0)return;Xt=2}let ae=ut.drawRange,de=ut.attributes.position,kt=ae.start*Xt,ve=(ae.start+ae.count)*Xt;It!==null&&(kt=Math.max(kt,It.start*Xt),ve=Math.min(ve,(It.start+It.count)*Xt)),zt!==null?(kt=Math.max(kt,0),ve=Math.min(ve,zt.count)):de!=null&&(kt=Math.max(kt,0),ve=Math.min(ve,de.count));let Be=ve-kt;if(Be<0||Be===1/0)return;xt.setup(ot,at,Lt,ut,zt);let Ce,Te=j;if(zt!==null&&(Ce=y.get(zt),Te=q,Te.setIndex(Ce)),ot.isMesh)at.wireframe===!0?(w.setLineWidth(at.wireframeLinewidth*te()),Te.setMode(G.LINES)):Te.setMode(G.TRIANGLES);else if(ot.isLine){let an=at.linewidth;an===void 0&&(an=1),w.setLineWidth(an*te()),ot.isLineSegments?Te.setMode(G.LINES):ot.isLineLoop?Te.setMode(G.LINE_LOOP):Te.setMode(G.LINE_STRIP)}else ot.isPoints?Te.setMode(G.POINTS):ot.isSprite&&Te.setMode(G.TRIANGLES);if(ot.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))Te.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let an=ot._multiDrawStarts,Ft=ot._multiDrawCounts,fn=ot._multiDrawCount,xe=zt?y.get(zt).bytesPerElement:1,Dn=rt.get(at).currentProgram.getUniforms();for(let si=0;si<fn;si++)Dn.setValue(G,"_gl_DrawID",si),Te.render(an[si]/xe,Ft[si])}else if(ot.isInstancedMesh)Te.renderInstances(kt,Be,ot.count);else if(ut.isInstancedBufferGeometry){let an=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ft=Math.min(ut.instanceCount,an);Te.renderInstances(kt,Be,Ft)}else Te.render(kt,Be)};function Ke(R,$,ut,at){B!==null&&R.isNodeMaterial&&B.setObject(at,R),_t===!0&&it.setState(R,ut,!1),R.transparent===!0&&R.side===bn&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,je(R,$,at),R.side=ts,R.needsUpdate=!0,je(R,$,at),R.side=bn):je(R,$,at)}this.compile=function(R,$,ut=null){ut===null&&(ut=R),B!==null&&B.renderStart(R,$,ut),E=V.get(ut),E.init($),_.push(E),ut.traverseVisible(function(ot){ot.isLight&&ot.layers.test($.layers)&&(E.pushLight(ot),ot.castShadow&&E.pushShadow(ot))}),R!==ut&&R.traverseVisible(function(ot){ot.isLight&&ot.layers.test($.layers)&&(E.pushLight(ot),ot.castShadow&&E.pushShadow(ot))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),bt=this.localClippingEnabled,_t=it.init(this.clippingPlanes,bt),_t===!0&&it.setGlobalState(this.clippingPlanes,$),B!==null&&tt.render(E.state.shadowsArray,ut,$);let at=new Set;return R.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let It=ot.material;if(It)if(Array.isArray(It))for(let Ut=0;Ut<It.length;Ut++){let Lt=It[Ut];Ke(Lt,ut,$,ot),at.add(Lt)}else Ke(It,ut,$,ot),at.add(It)}),E=_.pop(),B!==null&&B.renderEnd(),at},this.compileAsync=function(R,$,ut=null){let at=this.compile(R,$,ut);return new Promise(ot=>{function It(){if(at.forEach(function(Ut){let zt=rt.get(Ut).currentProgram;(zt===void 0||zt.isReady())&&at.delete(Ut)}),at.size===0){ot(R);return}setTimeout(It,10)}Wt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let qe=null;function Et(R){qe&&qe(R)}function Gt(){ne.stop()}function Qt(){ne.start()}let ne=new _d;ne.setAnimationLoop(Et),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(R){qe=R,Ct.setAnimationLoop(R),R===null?ne.stop():ne.start()},Ct.addEventListener("sessionstart",Gt),Ct.addEventListener("sessionend",Qt),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(R,$);let ut=Ct.enabled===!0&&Ct.isPresenting===!0,at=I!==null&&(ct===null||ut)&&I.begin(O,ct);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera($),$=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,$,ct),E=V.get(R,_.length),E.init($),E.state.textureUnits=J.getTextureUnits(),_.push(E),St.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),dt.setFromProjectionMatrix(St,Zn,$.reversedDepth),bt=this.localClippingEnabled,_t=it.init(this.clippingPlanes,bt),b=W.get(R,L.length),b.init(),L.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let Ut=O.xr.getDepthSensingMesh();Ut!==null&&De(Ut,$,-1/0,O.sortObjects)}De(R,$,0,O.sortObjects),b.finish(),B!==null&&B.updateLights(E.state.lightsArray),O.sortObjects===!0&&b.sort(wt,Dt),Yt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Yt&&pt.addToRenderList(b,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&it.beginShadows();let ot=E.state.shadowsArray;if(tt.render(ot,R,$),_t===!0&&it.endShadows(),(at&&I.hasRenderPass())===!1){let Ut=b.opaque,Lt=b.transmissive;if(E.setupLights(),$.isArrayCamera){let zt=$.cameras;if(Lt.length>0)for(let Xt=0,ae=zt.length;Xt<ae;Xt++){let de=zt[Xt];Vn(Ut,Lt,R,de)}Yt&&pt.render(R);for(let Xt=0,ae=zt.length;Xt<ae;Xt++){let de=zt[Xt];Sn(b,R,de,de.viewport)}}else Lt.length>0&&Vn(Ut,Lt,R,$),Yt&&pt.render(R),Sn(b,R,$)}ct!==null&&X===0&&(J.updateMultisampleRenderTarget(ct),J.updateRenderTargetMipmap(ct)),at&&I.end(O),R.isScene===!0&&R.onAfterRender(O,R,$),xt.resetDefaultState(),Q=-1,et=null,_.pop(),_.length>0?(E=_[_.length-1],J.setTextureUnits(E.state.textureUnits),_t===!0&&it.setGlobalState(O.clippingPlanes,E.state.camera)):E=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,B!==null&&B.renderEnd()};function De(R,$,ut,at){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLightProbeGrid)E.pushLightProbeGrid(R);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(dt)){at&&Vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);let Ut=T.update(R),Lt=R.material;Lt.visible&&b.push(R,Ut,Lt,ut,Vt.z,null,$)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(dt))){let Ut=T.update(R),Lt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Vt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Vt.copy(Ut.boundingSphere.center)),Vt.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Lt)){let zt=Ut.groups;for(let Xt=0,ae=zt.length;Xt<ae;Xt++){let de=zt[Xt],kt=Lt[de.materialIndex];kt&&kt.visible&&b.push(R,Ut,kt,ut,Vt.z,de,$)}}else Lt.visible&&b.push(R,Ut,Lt,ut,Vt.z,null,$)}}let It=R.children;for(let Ut=0,Lt=It.length;Ut<Lt;Ut++)De(It[Ut],$,ut,at)}function Sn(R,$,ut,at){let{opaque:ot,transmissive:It,transparent:Ut}=R;E.setupLightsView(ut),_t===!0&&it.setGlobalState(O.clippingPlanes,ut),at&&w.viewport(st.copy(at)),ot.length>0&&Ln(ot,$,ut),It.length>0&&Ln(It,$,ut),Ut.length>0&&Ln(Ut,$,ut),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Vn(R,$,ut,at){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[at.id]===void 0){let kt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[at.id]=new _n(1,1,{generateMipmaps:!0,type:kt?jn:Mn,minFilter:ns,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let It=E.state.transmissionRenderTarget[at.id],Ut=at.viewport||st;It.setSize(Ut.z*O.transmissionResolutionScale,Ut.w*O.transmissionResolutionScale);let Lt=O.getRenderTarget(),zt=O.getActiveCubeFace(),Xt=O.getActiveMipmapLevel();O.setRenderTarget(It),O.getClearColor(Zt),qt=O.getClearAlpha(),qt<1&&O.setClearColor(16777215,.5),O.clear(),Yt&&pt.render(ut);let ae=O.toneMapping;O.toneMapping=$n;let de=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),E.setupLightsView(at),_t===!0&&it.setGlobalState(O.clippingPlanes,at),Ln(R,ut,at),J.updateMultisampleRenderTarget(It),J.updateRenderTargetMipmap(It),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ve=0,Be=$.length;ve<Be;ve++){let Ce=$[ve],{object:Te,geometry:an,material:Ft,group:fn}=Ce;if(Ft.side===bn&&Te.layers.test(at.layers)){let xe=Ft.side;Ft.side=gn,Ft.needsUpdate=!0,as(Te,ut,at,an,Ft,fn),Ft.side=xe,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(J.updateMultisampleRenderTarget(It),J.updateRenderTargetMipmap(It))}O.setRenderTarget(Lt,zt,Xt),O.setClearColor(Zt,qt),de!==void 0&&(at.viewport=de),O.toneMapping=ae}function Ln(R,$,ut){let at=$.isScene===!0?$.overrideMaterial:null;for(let ot=0,It=R.length;ot<It;ot++){let Ut=R[ot],{object:Lt,geometry:zt,group:Xt}=Ut,ae=Ut.material;ae.allowOverride===!0&&at!==null&&(ae=at),Lt.layers.test(ut.layers)&&as(Lt,$,ut,zt,ae,Xt)}}function as(R,$,ut,at,ot,It){B!==null&&ot.isNodeMaterial&&B.setObject(R,ot),R.onBeforeRender(O,$,ut,at,ot,It),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ot.onBeforeRender(O,$,ut,at,R,It),ot.transparent===!0&&ot.side===bn&&ot.forceSinglePass===!1?(ot.side=gn,ot.needsUpdate=!0,O.renderBufferDirect(ut,$,at,ot,R,It),ot.side=ts,ot.needsUpdate=!0,O.renderBufferDirect(ut,$,at,ot,R,It),ot.side=bn):O.renderBufferDirect(ut,$,at,ot,R,It),R.onAfterRender(O,$,ut,at,ot,It)}function je(R,$,ut){$.isScene!==!0&&($=Bt);let at=rt.get(R),ot=E.state.lights,It=E.state.shadowsArray,Ut=ot.state.version,Lt=P.getParameters(R,ot.state,It,$,ut,E.state.lightProbeGridArray),zt=P.getProgramCacheKey(Lt),Xt=at.programs;at.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,at.fog=$.fog;let ae=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;at.envMap=D.get(R.envMap||at.environment,ae),at.envMapRotation=at.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Se),Xt=new Map,at.programs=Xt);let de=Xt.get(zt);if(de!==void 0){if(at.currentProgram===de&&at.lightsStateVersion===Ut)return zo(R,Lt),de}else Lt.uniforms=P.getUniforms(R),B!==null&&R.isNodeMaterial&&B.build(R,ut,Lt),R.onBeforeCompile(Lt,O),de=P.acquireProgram(Lt,zt),Xt.set(zt,de),at.uniforms=Lt.uniforms;let kt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=it.uniform),zo(R,Lt),at.needsLights=yn(R),at.lightsStateVersion=Ut,at.needsLights&&(kt.ambientLightColor.value=ot.state.ambient,kt.lightProbe.value=ot.state.probe,kt.sunLights.value=ot.state.sun,kt.sunLightShadows.value=ot.state.sunShadow,kt.directionalLights.value=ot.state.directional,kt.directionalLightShadows.value=ot.state.directionalShadow,kt.spotLights.value=ot.state.spot,kt.spotLightShadows.value=ot.state.spotShadow,kt.rectAreaLights.value=ot.state.rectArea,kt.ltc_1.value=ot.state.rectAreaLTC1,kt.ltc_2.value=ot.state.rectAreaLTC2,kt.pointLights.value=ot.state.point,kt.pointLightShadows.value=ot.state.pointShadow,kt.hemisphereLights.value=ot.state.hemi,kt.sunShadowMatrix.value=ot.state.sunShadowMatrix,kt.sunShadowCascade.value=ot.state.sunShadowCascade,kt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,kt.spotLightMatrix.value=ot.state.spotLightMatrix,kt.spotLightMap.value=ot.state.spotLightMap,kt.pointShadowMatrix.value=ot.state.pointShadowMatrix),at.lightProbeGrid=E.state.lightProbeGridArray.length>0,at.currentProgram=de,at.uniformsList=null,de}function Mr(R){if(R.uniformsList===null){let $=R.currentProgram.getUniforms();R.uniformsList=mr.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function zo(R,$){let ut=rt.get(R);ut.outputColorSpace=$.outputColorSpace,ut.batching=$.batching,ut.batchingColor=$.batchingColor,ut.instancing=$.instancing,ut.instancingColor=$.instancingColor,ut.instancingMorph=$.instancingMorph,ut.skinning=$.skinning,ut.morphTargets=$.morphTargets,ut.morphNormals=$.morphNormals,ut.morphColors=$.morphColors,ut.morphTargetsCount=$.morphTargetsCount,ut.numClippingPlanes=$.numClippingPlanes,ut.numIntersection=$.numClipIntersection,ut.vertexAlphas=$.vertexAlphas,ut.vertexTangents=$.vertexTangents,ut.toneMapping=$.toneMapping}function ko(R,$){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;S.setFromMatrixPosition($.matrixWorld);for(let ut=0,at=R.length;ut<at;ut++){let ot=R[ut];if(ot.texture!==null&&ot.boundingBox.containsPoint(S))return ot}return null}function Ts(R,$,ut,at,ot){$.isScene!==!0&&($=Bt),J.resetTextureUnits();let It=$.fog,Ut=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?$.environment:null,Lt=ct===null?O.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:pe.workingColorSpace,zt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Xt=D.get(at.envMap||Ut,zt),ae=at.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,de=!!ut.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),kt=!!ut.morphAttributes.position,ve=!!ut.morphAttributes.normal,Be=!!ut.morphAttributes.color,Ce=$n;at.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ce=O.toneMapping);let Te=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,an=Te!==void 0?Te.length:0,Ft=rt.get(at),fn=E.state.lights;if(_t===!0&&(bt===!0||R!==et)){let Ae=R===et&&at.id===Q;it.setState(at,R,Ae)}let xe=!1;at.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==fn.state.version||Ft.outputColorSpace!==Lt||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Xt||at.fog===!0&&Ft.fog!==It||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==it.numPlanes||Ft.numIntersection!==it.numIntersection)||Ft.vertexAlphas!==ae||Ft.vertexTangents!==de||Ft.morphTargets!==kt||Ft.morphNormals!==ve||Ft.morphColors!==Be||Ft.toneMapping!==Ce||Ft.morphTargetsCount!==an||!!Ft.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Ft.__version=at.version);let Dn=Ft.currentProgram;xe===!0&&(Dn=je(at,$,ot),B&&at.isNodeMaterial&&B.onUpdateProgram(at,Dn,Ft));let si=!1,Fi=!1,As=!1,we=Dn.getUniforms(),Fe=Ft.uniforms;if(w.useProgram(Dn.program)&&(si=!0,Fi=!0,As=!0),at.id!==Q&&(Q=at.id,Fi=!0),Ft.needsLights){let Ae=ko(E.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Ae&&(Ft.lightProbeGrid=Ae,Fi=!0)}if(si||et!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),we.setValue(G,"projectionMatrix",R.projectionMatrix),we.setValue(G,"viewMatrix",R.matrixWorldInverse);let Bi=we.map.cameraPosition;Bi!==void 0&&Bi.setValue(G,At.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&we.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&we.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),et!==R&&(et=R,Fi=!0,As=!0)}if(Ft.needsLights&&(fn.state.sunShadowMap.length>0&&we.setValue(G,"sunShadowMap",fn.state.sunShadowMap,J),fn.state.directionalShadowMap.length>0&&we.setValue(G,"directionalShadowMap",fn.state.directionalShadowMap,J),fn.state.spotShadowMap.length>0&&we.setValue(G,"spotShadowMap",fn.state.spotShadowMap,J),fn.state.pointShadowMap.length>0&&we.setValue(G,"pointShadowMap",fn.state.pointShadowMap,J)),ot.isSkinnedMesh){we.setOptional(G,ot,"bindMatrix"),we.setOptional(G,ot,"bindMatrixInverse");let Ae=ot.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),we.setValue(G,"boneTexture",Ae.boneTexture,J))}ot.isBatchedMesh&&(we.setOptional(G,ot,"batchingTexture"),we.setValue(G,"batchingTexture",ot._matricesTexture,J),we.setOptional(G,ot,"batchingIdTexture"),we.setValue(G,"batchingIdTexture",ot._indirectTexture,J),we.setOptional(G,ot,"batchingColorTexture"),ot._colorsTexture!==null&&we.setValue(G,"batchingColorTexture",ot._colorsTexture,J));let Oi=ut.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&C.update(ot,ut,Dn),(Fi||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,we.setValue(G,"receiveShadow",ot.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&$.environment!==null&&(Fe.envMapIntensity.value=$.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=Lv()),Fi){if(we.setValue(G,"toneMappingExposure",O.toneMappingExposure),Ft.needsLights&&Qe(Fe,As),It&&at.fog===!0&&N.refreshFogUniforms(Fe,It),N.refreshMaterialUniforms(Fe,at,ft,lt,E.state.transmissionRenderTarget[R.id]),Ft.needsLights&&Ft.lightProbeGrid){let Ae=Ft.lightProbeGrid;Fe.probesSH.value=Ae.texture,Fe.probesMin.value.copy(Ae.boundingBox.min),Fe.probesMax.value.copy(Ae.boundingBox.max),Fe.probesResolution.value.copy(Ae.resolution)}mr.upload(G,Mr(Ft),Fe,J)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(mr.upload(G,Mr(Ft),Fe,J),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&we.setValue(G,"center",ot.center),we.setValue(G,"modelViewMatrix",ot.modelViewMatrix),we.setValue(G,"normalMatrix",ot.normalMatrix),we.setValue(G,"modelMatrix",ot.matrixWorld),at.uniformsGroups!==void 0){let Ae=at.uniformsGroups;for(let Bi=0,Rs=Ae.length;Bi<Rs;Bi++){let _h=Ae[Bi];ht.update(_h,Dn),ht.bind(_h,Dn)}}return Dn}function Qe(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.sunLights.needsUpdate=$,R.sunLightShadows.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function yn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(R,$,ut){let at=rt.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),rt.get(R.texture).__webglTexture=$,rt.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ut,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){let ut=rt.get(R);ut.__webglFramebuffer=$,ut.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,ut=0){ct=R,k=$,X=ut;let at=null,ot=!1,It=!1;if(R){let Lt=rt.get(R);if(Lt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),st.copy(R.viewport),yt.copy(R.scissor),Rt=R.scissorTest,w.viewport(st),w.scissor(yt),w.setScissorTest(Rt),Q=-1;return}else if(Lt.__webglFramebuffer===void 0)J.setupRenderTarget(R);else if(Lt.__hasExternalTextures)J.rebindTextures(R,rt.get(R.texture).__webglTexture,rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ae=R.depthTexture;if(Lt.__boundDepthTexture!==ae){if(ae!==null&&rt.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(R)}}let zt=R.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(It=!0);let Xt=rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[$])?at=Xt[$][ut]:at=Xt[$],ot=!0):R.samples>0&&J.useMultisampledRTT(R)===!1?at=rt.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?at=Xt[ut]:at=Xt,st.copy(R.viewport),yt.copy(R.scissor),Rt=R.scissorTest}else st.copy(vt).multiplyScalar(ft).floor(),yt.copy(gt).multiplyScalar(ft).floor(),Rt=Nt;if(ut!==0&&(at=Y),w.bindFramebuffer(G.FRAMEBUFFER,at)&&w.drawBuffers(R,at),w.viewport(st),w.scissor(yt),w.setScissorTest(Rt),ot){let Lt=rt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,Lt.__webglTexture,ut)}else if(It){let Lt=$;for(let zt=0;zt<R.textures.length;zt++){let Xt=rt.get(R.textures[zt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+zt,Xt.__webglTexture,ut,Lt)}}else if(R!==null&&ut!==0){let Lt=rt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,ut)}Q=-1};function Gn(R){let $=rt.get(R);return($.__readFormat!==R.format||$.__readType!==R.type)&&($.__readFormat=R.format,$.__readType=R.type,$.__formatReadable=F.textureFormatReadable(R.format),$.__typeReadable=F.textureTypeReadable(R.type)),$}this.readRenderTargetPixels=function(R,$,ut,at,ot,It,Ut,Lt=0){if(!(R&&R.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt){w.bindFramebuffer(G.FRAMEBUFFER,zt);try{let Xt=R.textures[Lt],ae=Xt.format,de=Xt.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);let kt=Gn(Xt);if(kt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-at&&ut>=0&&ut<=R.height-ot&&G.readPixels($,ut,at,ot,mt.convert(ae),mt.convert(de),It)}finally{let Xt=ct!==null?rt.get(ct).__webglFramebuffer:null;w.bindFramebuffer(G.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,$,ut,at,ot,It,Ut,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(zt=zt[Ut]),zt)if($>=0&&$<=R.width-at&&ut>=0&&ut<=R.height-ot){w.bindFramebuffer(G.FRAMEBUFFER,zt);let Xt=R.textures[Lt],ae=Xt.format,de=Xt.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt);let kt=Gn(Xt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ve),G.bufferData(G.PIXEL_PACK_BUFFER,It.byteLength,G.STREAM_READ),G.readPixels($,ut,at,ot,mt.convert(ae),mt.convert(de),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Be=ct!==null?rt.get(ct).__webglFramebuffer:null;w.bindFramebuffer(G.FRAMEBUFFER,Be);let Ce=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Gf(G,Ce,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ve),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,It),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ve),G.deleteSync(Ce),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,ut=0){let at=Math.pow(2,-ut),ot=Math.floor(R.image.width*at),It=Math.floor(R.image.height*at),Ut=$!==null?$.x:0,Lt=$!==null?$.y:0;J.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ut,0,0,Ut,Lt,ot,It),w.unbindTexture()},this.copyTextureToTexture=function(R,$,ut=null,at=null,ot=0,It=0){let Ut,Lt,zt,Xt,ae,de,kt,ve,Be,Ce=R.isCompressedTexture?R.mipmaps[It]:R.image;if(ut!==null)Ut=ut.max.x-ut.min.x,Lt=ut.max.y-ut.min.y,zt=ut.isBox3?ut.max.z-ut.min.z:1,Xt=ut.min.x,ae=ut.min.y,de=ut.isBox3?ut.min.z:0;else{let Fe=Math.pow(2,-ot);Ut=Math.floor(Ce.width*Fe),Lt=Math.floor(Ce.height*Fe),R.isDataArrayTexture?zt=Ce.depth:R.isData3DTexture?zt=Math.floor(Ce.depth*Fe):zt=1,Xt=0,ae=0,de=0}at!==null?(kt=at.x,ve=at.y,Be=at.z):(kt=0,ve=0,Be=0);let Te=mt.convert($.format),an=mt.convert($.type),Ft;$.isData3DTexture?(J.setTexture3D($,0),Ft=G.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(J.setTexture2DArray($,0),Ft=G.TEXTURE_2D_ARRAY):(J.setTexture2D($,0),Ft=G.TEXTURE_2D),w.activeTexture(G.TEXTURE0),w.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);let fn=w.getParameter(G.UNPACK_ROW_LENGTH),xe=w.getParameter(G.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter(G.UNPACK_SKIP_PIXELS),si=w.getParameter(G.UNPACK_SKIP_ROWS),Fi=w.getParameter(G.UNPACK_SKIP_IMAGES);w.pixelStorei(G.UNPACK_ROW_LENGTH,Ce.width),w.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ce.height),w.pixelStorei(G.UNPACK_SKIP_PIXELS,Xt),w.pixelStorei(G.UNPACK_SKIP_ROWS,ae),w.pixelStorei(G.UNPACK_SKIP_IMAGES,de);let As=R.isDataArrayTexture||R.isData3DTexture,we=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){let Fe=rt.get(R),Oi=rt.get($),Ae=rt.get(Fe.__renderTarget),Bi=rt.get(Oi.__renderTarget);w.bindFramebuffer(G.READ_FRAMEBUFFER,Ae.__webglFramebuffer),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Rs=0;Rs<zt;Rs++)As&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rt.get(R).__webglTexture,ot,de+Rs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rt.get($).__webglTexture,It,Be+Rs)),G.blitFramebuffer(Xt,ae,Ut,Lt,kt,ve,Ut,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);w.bindFramebuffer(G.READ_FRAMEBUFFER,null),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ot!==0||R.isRenderTargetTexture||rt.has(R)){let Fe=rt.get(R),Oi=rt.get($);w.bindFramebuffer(G.READ_FRAMEBUFFER,z),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,Z);for(let Ae=0;Ae<zt;Ae++)As?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.__webglTexture,ot,de+Ae):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Fe.__webglTexture,ot),we?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Oi.__webglTexture,It,Be+Ae):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oi.__webglTexture,It),ot!==0?G.blitFramebuffer(Xt,ae,Ut,Lt,kt,ve,Ut,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):we?G.copyTexSubImage3D(Ft,It,kt,ve,Be+Ae,Xt,ae,Ut,Lt):G.copyTexSubImage2D(Ft,It,kt,ve,Xt,ae,Ut,Lt);w.bindFramebuffer(G.READ_FRAMEBUFFER,null),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else we?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ft,It,kt,ve,Be,Ut,Lt,zt,Te,an,Ce.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(Ft,It,kt,ve,Be,Ut,Lt,zt,Te,Ce.data):G.texSubImage3D(Ft,It,kt,ve,Be,Ut,Lt,zt,Te,an,Ce):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,It,kt,ve,Ut,Lt,Te,an,Ce.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,It,kt,ve,Ce.width,Ce.height,Te,Ce.data):G.texSubImage2D(G.TEXTURE_2D,It,kt,ve,Ut,Lt,Te,an,Ce);w.pixelStorei(G.UNPACK_ROW_LENGTH,fn),w.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe),w.pixelStorei(G.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei(G.UNPACK_SKIP_ROWS,si),w.pixelStorei(G.UNPACK_SKIP_IMAGES,Fi),It===0&&$.generateMipmaps&&G.generateMipmap(Ft),w.unbindTexture()},this.initRenderTarget=function(R){rt.get(R).__webglFramebuffer===void 0&&J.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?J.setTextureCube(R,0):R.isData3DTexture?J.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?J.setTexture2DArray(R,0):J.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){k=0,X=0,ct=null,w.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};function mi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new he,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Td(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let g=Td(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Td(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Ne(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+f,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Bp=Ml(Jc(),1);var Io=new H;function Hn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Io.copy(t),Io[n]=0,Io.normalize();let l=.5*o/(o+a),u=1-Io.angleTo(i)/c;return Math.sign(Io[e])===1?u*l:a/(o+a)+l+l*(1-u)}var $c=class i extends Pe{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new H,l=new H,u=new H(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new H,m=.5/o;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*r,f[p+1]=u.y*Math.sign(c.y)+l.y*r,f[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[M+0]=Hn(x,l,"z","y",r,n),d[M+1]=1-Hn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[M+0]=1-Hn(x,l,"z","y",r,n),d[M+1]=1-Hn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[M+0]=1-Hn(x,l,"x","z",r,t),d[M+1]=Hn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[M+0]=1-Hn(x,l,"x","z",r,t),d[M+1]=1-Hn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[M+0]=1-Hn(x,l,"x","y",r,t),d[M+1]=1-Hn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[M+0]=Hn(x,l,"x","y",r,t),d[M+1]=1-Hn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ad=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),Dv=Math.PI*2;function Nv(){let i=new ue,t=new Pe(1,1,1),e=new Cn(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new nn({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,f,h,d,g,x){let m=new fe(c,typeof l=="string"?s(l):l);return m.position.set(u,f,h),m.scale.set(d,g,x),a.add(m),m}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new fe(mi(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function Uv({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new en({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:bn});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let d of[-1,1])t(i,s?"#deb181":"#aa785d",d*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",d*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(i,o,d,c,0,l,1.8,n),t(i,u,d,f,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,d,f,g,l,h,l)}for(let d of[-n/2+l/2,n/2-l/2])t(i,o,0,c,d,e-l*2,1.8,l),t(i,u,0,f,d,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function Fv({box:i,oval:t,root:e},n,s,r){let o=new ue;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ue;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function Ov(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new en({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new en({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,m=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,m,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let m=0;m<4;m++){let p=m-1.5,M=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][m],g*t+p*r,n+3+(2+m*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+m*1.12)*Math.min(1.15,r),r*1.15);M.rotation.z=p*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>Fv(i,x,r*(1.72-x*.17),g)),d=Array.from({length:5},(g,x)=>{let m=r*(.45+x%3*.18),p=c(o,f,0,0,0,m,m,m);return p.name="bubble-"+x,p});return g=>{for(let[x,{fish:m,tail:p}]of h.entries()){let M=g*(.43+x*.06)+x*2.07+.5,A=t*(.24+x*.036),S=e*(.17+x*.038);m.position.set(Math.cos(M)*A,n+10+x*3.65+Math.sin(M*1.7)*2.15,Math.sin(M)*S),m.rotation.y=-Math.atan2(Math.cos(M)*S,-Math.sin(M)*A),p.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,m]of d.entries()){let p=(g*.3+x/d.length)%1;m.position.set(t*.33+Math.sin(p*Dv+x)*r,n+5+p*20,e*.23),m.visible=p>.08&&p<.94}}}function Bv({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ue;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new ue;g.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*d*.28;for(let m of[-1,0,1])e(g,"#ecc297",(m*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:g,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,g=Math.cos(d)*n*.13,x=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*n*.13);for(let[m,p]of u.entries()){let M=m+1;p.position.set(-(3.55+M*1.24)*a,-.19*M*a,Math.sin(h*1.75-M*.55)*M*a*.32)}for(let{leg:m,side:p,front:M}of f)m.rotation.y=Math.sin(h*3.6)*p*M*.31}}function Rd(i,t,e){if(!Object.hasOwn(Ad,i))return null;let n=Ad[i],s=Nv(),r=n==="aquarium",{base:o,top:a}=Uv(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?Ov(s,t,e,o,a,c):Bv(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var K=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),zv=Object.freeze({sage:K.sage,mint:K.aqua,sky:K.blue,peach:K.peach,coral:"#cf8979",lavender:K.lilac,butter:K.honey,cream:K.linen,white:K.cream,oak:K.oakLight,walnut:K.walnut,charcoal:"#505b68",brass:K.brass,terracotta:"#b97d63",forest:K.moss,blush:K.blush,teddy:"#aa8063",slate:"#9b9b9d"}),kv=new Set([K.oak,K.oakLight,K.walnut]),Hv=new Set([K.sage,K.moss,K.linen,K.lilac,K.lilacLight,K.blush,K.peach,K.oatmeal,K.upholsteryShadow,K.denim]);function Vv(i,t){let e=kv.has(i)?1:Hv.has(i)?2:0,n=i===K.glass||i===K.darkGlass||i===K.blueWater,s=i===K.brass,r=i===K.steel||i===K.basinSteel,o=new nn({color:i,roughness:s||r?.37:n?.33:i===K.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var ju=class{constructor(t,e){this.root=new ue,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,Vv(e,this.grainDirection));let a=new fe(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new $c(s,r,o,2,u):new Pe(s,r,o);return this.part(f,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new fi(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Cn(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new Ii(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Tt(l,u)),c=new so(a,24);return c.scale(s,r,o),this.part(c,K.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:mi(s);s.length>1&&s.forEach(a=>a.dispose());let o=new fe(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Li(i,t,e,n,s,r,o=K.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function Po(i,t,e,n,s,r,o,a){let c=o===K.linen?K.binding:K.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function Gv(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?K.upholsteryShadow:K.moss,u=a?K.oatmeal:K.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(Li(i,d,g,f,h,5),i.box(d,5,g,f*.97,22,h*.98,l,8),r){let b=o?t*.52:t*.34,E=o?e*.38:e*.46,L=o?t*.22:-t*.32,_=o?c*e*.3:e*.25;Li(i,L,_,b,E,5),i.box(L,5,_,b,22,E,l,8),i.box(L,25,_,b*.96,12,E*.9,n,5),o&&i.box(L,29,c*e*.464,b,26,x,u,6)}let m=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let b=e*.88/m;for(let E=0;E<m;E++){let L=-e*.44+b*(E+.5);i.box(d+x*.18,25,L,f*.76,12,b-3,n,5),i.box(d-f*.39,27,L,f*.22,31,b-1,u,8)}i.box(d,29,-c*e*.445,f*.88,20,x,u,6),Po(i,d+f*.13,35,-e*.31,f*.42,b*.49,a?K.sage:K.peach,-.18),Po(i,d+f*.12,35,e*.28,f*.4,b*.45,K.linen,.2)}else{let b=t*.8/m;for(let E=0;E<m;E++){let L=-t*.4+b*(E+.5);i.box(L,25,g+h*.08,b-3,12,h*.7,n,6),i.box(L,27,g-h*.39,b-1,31,h*.24,u,7)}for(let E of[-t*.442,t*.442])i.box(E,26,g,x,22,h*.89,u,6);Po(i,-t*.27,35,g-h*.15,t*.18,h*.34,K.peach,-.18),Po(i,t*.27,35,g-h*.12,t*.17,h*.33,K.linen,.2)}let p=o?f*.67:f*.19,M=o?e*.14:h*.58,A=o?d+f*.06:f*.32,S=o?e*.13:g+h*.1;i.box(A,37.1,S,p,1.7,M,K.lilacLight,.65);for(let b of[-1,1])i.box(A,38.82,S+b*M*.36,p*.9,.25,1.2,K.lilac);return 58}function Qn(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Li(i,t,e,n,s,c,K.walnut),i.box(t,c,e,n*.9,7,s*.92,K.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(u,c+9,f,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function Wv(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return Qn(i,0,-e*.39,t*.2,e*.23,0,K.denim),Qn(i,0,e*.39,t*.2,e*.23,Math.PI,K.denim),Qn(i,-t*.415,0,t*.17,e*.27,Math.PI/2,K.denim),Qn(i,t*.415,0,t*.17,e*.27,-Math.PI/2,K.denim),Li(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,K.walnut,3),i.box(0,37,0,t*.79,8,e*.57,K.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,K.linen,.6),46.4;if(r)Qn(i,0,-e*.37,t*.2,e*.2,0,K.sage),Qn(i,0,e*.37,t*.2,e*.2,Math.PI,K.blush),Qn(i,-t*.38,0,t*.2,e*.2,Math.PI/2,K.lilac),Qn(i,t*.38,0,t*.2,e*.2,-Math.PI/2,K.honey),i.disc(0,0,0,t*.13,5,e*.13,K.walnut),i.disc(0,4,0,t*.045,31,e*.045,K.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[K.sage,K.blush,K.lilac,K.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])Qn(i,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Li(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,K.linen,.5)}return 42}function Xv(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,K.ink,.5),i.box(t,e+1,n,s*.1,14,4,K.ink,1),i.box(t,e+12,n,s,25,6,K.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,K.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,K.blue,.2)}function qv(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&i.box(l,37,f+.8,a,7,u-1.6,n,2.4),i.box(l,4,f,a*.81,34,u*.81,K.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;i.box(l,d,f+u*.41,a*.74,8.4,2,K.oak,.7),i.box(l,d+3,f+u*.43,a*.26,2,2,K.brass,.5)}}return Xv(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,K.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,K.peach),81}function Cd(i,t,e,n,s,r){let o=new Rn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Yi(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function Yv(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Li(i,0,0,t,e,6,K.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,K.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,K.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,K.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,K.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Po(i,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,K.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,g,x,m]of[[-.24,.12,1,K.cream],[.23,.27,.79,K.honey],[.08,.04,.57,K.cream],[-.1,.34,.62,K.honey]])Cd(i,t*d,u+30.8,e*g,h*x,m);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,u+30.71,e*.24,.85,.24,e*.33,K.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,u+30.72,e*d,t*.71,.24,.9,K.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,K.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])i.box(t*.45*u,4,e*.46*f,5,l,6,K.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*u,l-29,e*f*.105,3,20,3,n,.8)}return l}function Zv(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Li(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,K.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,K.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,g=h*(f-(l-1)/2),x=5+u*d;i.box(g,x,e*.46,h-2,d-1.5,2.9,n,1),i.oval(g,x+d*.45,e*.51,2.2,1.7,2.2,K.brass)}return a+2}function Jv(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,K.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,K.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,K.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?K.lilac:K.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,K.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?K.lilacLight:K.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,K.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,K.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,K.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Cd(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,K.cream);return 5}function $v(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,K.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,K.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,K.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,K.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,K.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,K.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,K.darkGlass);i.box(0,n-4.5,o,s,4.85,u,K.steel,.4);let f=-s/2-u*1.15;i.disc(f,n,o,u*.8,u*2.9,u*.8,K.steel),i.box(f+u,n+u*2.5,o,u*2.8,u*.7,u,K.steel,.6)}function Kv(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?K.sage:K.walnut,2.3),s?$v(i,t,e,r+2):i.box(0,r-3,0,t,5,e,K.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(d,6,g,f,r*.67,h,a?K.moss:K.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,K.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,K.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,f,f,1,K.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,K.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,K.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,K.brass,1);return r+3}function jv(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,K.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,K.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,K.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,K.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,K.glass),i.disc(0,22,-e*.44,3.5,9,3.5,K.brass),i.box(0,30,-e*.4,5,3.7,e*.1,K.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,K.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,K.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,K.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,K.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,K.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,K.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,K.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,K.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,K.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,K.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,K.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,K.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,K.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,K.blush,1.7),36)}function Qv(i,t,e,n,s){let r=n?K.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,K.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,K.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,K.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,K.linen,3.8),c+o*(n?.37:.28)}function tb(i,t,e){let s=[K.sage,K.peach,K.honey,K.lilac,K.blue,K.blush];Li(i,0,0,t*.96,e*.96,22,K.sage),i.box(0,20,0,t*.94,7,e*.93,K.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function eb(i,t,e,n){let s=[K.linen,n,K.sand,K.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function nb(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,K.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,K.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,f=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,K.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=n?K.sage:[K.blush,K.linen,K.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function Id(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return Rd(t,e,n);let s=zv[t.split("-").at(-1)],r=new ju(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=Gv(r,e,n,s||(t==="sofa"?K.linen:K.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,K.walnut,3.5),r.box(0,24,0,e,4,n,K.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,K.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,K.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,K.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,K.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,K.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=Wv(r,e,n,s||K.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=qv(r,e,n,s||K.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))Qn(r,0,0,e,n,0,s||K.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){Qn(r,0,0,e,n,0,s||K.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,K.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=Yv(r,e,n,s||K.lilac,t);else if(t==="rug")o=Jv(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=Kv(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=jv(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=nb(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,K.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,K.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,K.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=Zv(r,e,n,s||K.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Li(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||K.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,K.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=Qv(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=eb(r,e,n,s||K.sage);else if(t.startsWith("baby-activities-"))o=tb(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||K.peach),r.ring(0,a,0,a*.95,a*.95,1.2,K.linen),o=a*2}else return null;return r.finish(o)}var Ot={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Do=Math.PI,Qu=2*Do,ib=new Set(["unknown","unavailable"]),ei=(i,t,e)=>Math.max(t,Math.min(e,i)),Lo=(i,t)=>Number.isFinite(i)?ei(i,12,480):t,Dd=.96,Nd=.09;function Ud(i,t,e){let n=Lo(i.w,42),s=Lo(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*Nd)<=s*Dd/2}var le=(i,t={})=>new nn({color:i,roughness:.83,...t}),th=i=>String(i?.state??"unknown"),Ss=i=>!ib.has(th(i)),yr=i=>Ss(i)&&(i.active===!0||i.state==="on"),sb=i=>yr(i)?Number.isFinite(i.attributes?.brightness)?ei(i.attributes.brightness/255,0,1):1:0;function Di(i,t,e,n=0,s=0,r=0){let o=new fe(t,e);return o.position.set(n,s,r),i.add(o),o}function Je(i,t,e,n,s,r=0,o=0,a=0){return Di(i,new Pe(t,e,n),s,r,o,a)}function hn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,f=l-e/2,h=new Rn;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new Ri(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),Di(i,d,s,r,o,a)}function Xe(i,t,e,n,s,r=0,o=0,a=0,c=16){return Di(i,new fi(t,e,n,c),s,r,o,a)}function ti(i,t,e,n,s,r){return Di(i,new Cn(t,10,7),e,n,s,r)}function xr(i,t=0,e=0,n=0){let s=new ue;return s.position.set(t,e,n),i.add(s),s}function rb(i,t){let e=new Ve({transparent:!0,depthWrite:!1,blending:mo,uniforms:{strength:{value:0},tint:{value:new $t(Ot.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=Di(i,new Ci(2*t,2*t),e,0,2.8,0);return n.rotation.x=-Do/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function ob(i,t,e){let n=new ue,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),h=le(Ot.honey),d=le(Ot.ink),g=le(Ot.brass,{roughness:.36,metalness:.42}),x=le(Ot.cream,{emissive:Ot.warm,emissiveIntensity:0}),m=new $t(Ot.warm),p=u?46:o?50:a?56:l?40:c?56:36,M=rb(n,ei(f*(a?1.72:1.35),38,110));if(a){let A=f*(u?.19:.29);Xe(n,A,A*1.02,3,d,0,p+2),o&&Xe(n,1.7,1.7,13,h,0,p+9),Xe(n,A*.82,A,5,h,0,p-1.5),Xe(n,A*.92,A*.96,1.15,g,0,p+1.1);let S=ti(n,A*.83,x,0,p,0);S.scale.y=o?.88:.52}else if(l)hn(n,f*.34,18,4,d,0,35,-4),Xe(n,f*.12,f*.11,14,h,0,37,3),ti(n,f*.21,x,0,p+3,3);else{let A=p-7,S=c?3:16,b=f*(c?.25:.3);if(Xe(n,b*.57,b*.67,4,d,0,S),Xe(n,2,2.9,A-S,h,0,(S+A)/2),c)ti(n,b*.81,x,0,p,0);else{let E=r==="bud_lamp"?12:9;Xe(n,b*.56,b,14,x,0,p,0,E),Xe(n,b,b*.99,1.2,g,0,p-6.7,0,E),Xe(n,b*.55,b*.58,1.1,g,0,p+7.1,0,E)}}return{root:n,anchorY:p+2,animate(A){let S=sb(A),b=A?.attributes?.rgb_color;if(Array.isArray(b)&&b.length===3&&b.every(Number.isFinite)){let[E,L,_]=b.map(I=>ei(I/255,0,1));m.setRGB(E,L,_,ke)}else m.setHex(Ot.warm);M(S,m),x.emissiveIntensity=S*.88,x.emissive.copy(m),S>0?x.color.copy(m):x.color.setHex(Ot.cream)}}}function ab(i){let t=new Rn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Ri(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Do/2)}function Pd(i,t,e,n){let s=new ue,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=xr(s,0,o,0);n&&(a.rotation.x=Do/2);let c=xr(a,0,-1,0),l=le(Ot.cream),u=le(Ot.ink),f=/(?:white|cream)$/.test(i.type)?Ot.oat:/(?:forest|sage)$/.test(i.type)?Ot.sage:Ot.honey,h=le(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Xe(a,r*.18,r*.2,6,u),Xe(a,r*.174,r*.176,1.4,le(Ot.brass,{roughness:.36,metalness:.42}),0,3.4),Xe(a,r*.15,r*.17,2.6,l,0,4.9);let g=ab(r);for(let x=0;x<d;x++){let m=xr(c);m.rotation.y=x/d*Qu,Di(m,g,h)}if(n){hn(s,r*1.66,6,r*1.02,u,0,3),Je(s,r*.3,11,6,l,0,10);let x=Di(s,new Ii(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let m=-1;m<=1;m++){let p=m*r*.5;Xe(s,.68,.68,2*Math.sqrt(r*r-p*p),u,p,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,m=0){let p=Number.isFinite(x?.attributes?.percentage)?ei(x.attributes.percentage/100,.12,1):.64;c.rotation.y=yr(x)?m*Qu*p%Qu:0}}}function cb(i,t){let e=new ue,n=t.mountY??39,s=xr(e,0,n),r=ei(i*.72,17,27);hn(s,r,31,5,le(Ot.ink),0,0,-.5),hn(s,r-1.9,29,4.4,le(Ot.cream),0,.3,1);let o=le(Ot.oat,{emissive:Ot.warm,emissiveIntensity:0}),a=hn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=le(Ot.teal,{emissive:Ot.mint,emissiveIntensity:0});return ti(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=Ss(l)?yr(l)?-.16:.16:0,o.emissiveIntensity=yr(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?Ot.mint:Ot.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function Ld(i,t,e,n=31){let s=new ue,r=36.5,o=Math.max(12,i-6),a=le(Ot.oat);if(t){let h=le(Ot.glass,{roughness:.32});Je(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])Je(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;Je(s,o,1.8,7,h,0,d+.35);for(let g of[-4.25,4.25])Je(s,o+2,3.2,1.5,a,0,d,g);Je(s,o+3,3.8,11,a,0,r-n/2,1.4),Je(s,o,1.35,.5,le(Ot.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=le(Ot.cream),l=r+n/2-1;hn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>Je(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h,d,g,x=!1){let m=eh(h),p=m===null?x?0:f:1-m;x||(f=p);let M=Number.isFinite(h?.attributes?.current_tilt_position)?ei(h.attributes.current_tilt_position/100,0,1):0;for(let A=0;A<u.length;A++){let S=ei(p*u.length-A,0,1);u[A].visible=S>.02,u[A].scale.y=S,u[A].rotation.x=M*.9}}}}function eh(i){return Ss(i)?Number.isFinite(i.attributes?.current_position)?ei(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function lb(i,t){let e=new ue,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=le(Ot.oat),l=le(Ot.cream),u=le(Ot.plum),f=[le(Ot.tile),le(Ot.paleTile)],h=le(Ot.dark);Je(e,i,5,t*Dd,l,0,2.5,t*Nd),Je(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let U of[-i*.42,i*.42])Je(e,i*.09,o+4,n,c,U,(o+4)/2),hn(e,i*.1,o+4,5,l,U,(o+4)/2,r+1,1.5);let d=new Rn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new Ri(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Di(e,g,u,0,o+4);let x=i*.49,m=Math.atan2(a,x),p=Math.hypot(a,x),M=(n+11)/8,A=[[],[]];for(let U of[-1,1])for(let B=0;B<8;B++){let Y=-r-5.5+(B+.5)*M,z=new Pe(p*.97,2.2,M-.62);z.rotateZ(-U*m),z.translate(U*x*.5,o+5.65+a*.5,Y),A[B%2].push(z)}A.forEach((U,B)=>{Di(e,mi(U),f[B]),U.forEach(Y=>Y.dispose())}),hn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),Je(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),Je(e,s,o,1.5,h,0,o/2+4,r-4);for(let U of e.children)U.isMesh&&(U.castShadow=!0);let S=le(Ot.mint),b=le(Ot.sage),L=(o-3)/6,_=Array.from({length:6},(U,B)=>{let Y=xr(e,0,o-(B+.5)*L+2,r+.5);return hn(Y,s-2,L-.7,3.4,S,0,0,0,1.2),Je(Y,s*.91,.68,.7,b,0,L*.23,1.8),B===5&&hn(Y,s*.13,2,2.2,l,0,0,2.3,.55),Y}),I=le(Ot.gold,{emissive:Ot.ember,emissiveIntensity:0});ti(e,3.7,I,i*.422,o*.73,r+4.5);let O=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(U,B=0,Y,z=!1){let k=eh(U)??(z?0:O);z||(O=k),S.color.setHex(Ss(U)?Ot.mint:Ot.muted),b.color.setHex(Ss(U)?Ot.sage:Ot.muted);let X=(1-k)*_.length;_.forEach((Q,et)=>{let st=ei(X-et,0,1);Q.visible=st>.02,Q.scale.y=st,Q.position.y=o-(et+st/2)*L+2});let ct=["opening","closing"].includes(th(U));I.emissiveIntensity=ct?.55+(.5+.5*Math.cos(B*6)):0}}}function ub(i){let t=new ue,e=46,n=le(Ot.cream),s=le(Ot.honey),r=Math.min(i*.86,88),o=xr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])Je(t,3.4,e,5,n,c,e/2);Je(t,r+4,3,5,n,0,e),hn(o,r-2,e-4,4,s,r/2,e/2,0,2),ti(o,2.2,le(Ot.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,f=!1){let d=eh(c)??(f?0:a);f||(a=d),o.rotation.y=-1.32*d,s.color.setHex(Ss(c)?Ot.honey:Ot.muted)}}}function hb(i,t,e){let n=new ue,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=ei(t*.85,23,126),a=le(Ot.dark,{emissive:Ot.mint,emissiveIntensity:0});if(hn(n,o,s?25:18,8,le(Ot.cream),0,r,0),s){hn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])ti(n,1.35,le(Ot.oat),o*c,r-7,4.3)}else Je(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=Ss(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Ot.warm:Ot.glass),a.emissiveIntensity=f?1.15:yr(c)?.25:0}}}function fb(i,t,e){let n=new ue,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=le(Ot.cream),c=le(r?Ot.glass:Ot.sage),l=le(Ot.teal,{emissive:Ot.mint,emissiveIntensity:0}),u=o-1;if(Xe(n,s*.46,s*.5,4,le(Ot.ink),0,2),r){let d=ti(n,s/2,c,0,12,0);d.scale.y=.78,Xe(n,s*.19,s*.22,3.5,a,0,u)}else{hn(n,s,24,s*.82,c,0,15,0,5),hn(n,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)Je(n,s*.66,1.2,1.1,l,0,u+2,d*3.5)}ti(n,1.6,l,s*.18,u-2,s*.31);let f=le(Ot.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,g)=>ti(n,2.1+g*.6,f,0,u+3,0));return{root:n,anchorY:u,animate(d,g=0){let x=yr(d);l.emissiveIntensity=x?1.6:0;for(let m=0;m<h.length;m++){h[m].visible=x;let p=(g*.68+m/h.length)%1;h[m].position.set(Math.sin(p*Do)*3.1,u+4+p*14,0),h[m].scale.setScalar(.7+p*.62)}}}}function db(i,t){let e=new ue,n=Math.min(i,t)*.42,s=le(Ot.sage,{emissive:Ot.mint,emissiveIntensity:0}),r=le(Ot.ink);Xe(e,n,n*.95,7,r,0,4.6),Xe(e,n*.96,n,5.5,le(Ot.cream),0,10.2),Xe(e,n*.28,n*.33,4,le(Ot.oat),0,14,-n*.23);for(let a of[-.27,.27])ti(e,n*.105,r,n*a,10,n*.88);let o=hn(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03,animate(a,c=0,l=!1){let u=["cleaning","returning"].includes(th(a));o.material.emissiveIntensity=u?l?.6+.5*Math.cos(c*6):.3:0}}}function Fd(i,t={}){let e=Lo(i.w,42),n=Lo(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?cb(e,t):s==="garageDoor"?lb(e,n):s==="door"||r==="door"?ub(e):s==="window"?Ld(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?Ld(Lo(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?hb(i,e,t):s==="airPurifier"||s==="humidifier"?fb(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?db(e,n):s==="windowFan"?Pd(i,e,n,!0):r==="fan"||/^fans-/.test(s)?Pd(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?ob(i,e,n):null}var Vd=Ml(Jc(),1),{difference:Gd,union:Wd}=Vd.default,Qc=18,Pn=.001,gi=(i,t)=>i[0]*t[0]+i[1]*t[1],Es=(i,t)=>i[0]*t[1]-i[1]*t[0],xi=(i,t)=>[i[0]-t[0],i[1]-t[1]],Re=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],el=([i,t])=>[-t,i],Od=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Kc=i=>i.map(({x:t,y:e})=>[t,e]),Ni=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Xd=i=>i.length?Wd(...i):[];function tl(i,t,e,n=0){let s=xi(t,i),r=Math.hypot(...s);if(r<Pn)return null;let o=s.map(u=>u/r),a=el(o),c=Re(i,o,-n),l=Re(t,o,n);return Ni([Re(c,a,e),Re(l,a,e),Re(l,a,-e),Re(c,a,-e)])}function jc(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function Bd(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=xi(n,t),r=Math.hypot(...s);return r>Pn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function pb(i,t,e,n){if(Math.abs(gi(i.tangent,t.tangent))<.9999)return null;let s=el(i.tangent),[r,o]=[t.start,t.end].map(x=>xi(x,i.start)),a=gi(r,s);if(Math.abs(a)<.1||Math.abs(a)>Qc||Math.abs(a-gi(o,s))>.1)return null;let c=[gi(r,i.tangent),gi(o,i.tangent)].sort((x,m)=>x-m),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let f=Re(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!jc(e,Re(f,s,-h))||!jc(n,Re(f,s,a+h))||jc(e,Re(f,s,a/2))||jc(n,Re(f,s,a/2)))return null;let d=Re(i.start,i.tangent,l),g=Re(i.start,i.tangent,u);return Ni([Re(d,s,-h*.05),Re(g,s,-h*.05),Re(g,s,a+h*.05),Re(d,s,a+h*.05)])}function qd(i){let t=[],e=[];for(let n of[...i].reverse()){let s=Xd(n.polygons);if(!s.length)continue;let r=t.length?Gd(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?Wd(t,s):s}return{footprint:t,regions:e.reverse()}}function No(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Yd(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:Kc(h.points),polygons:[Ni(Kc(h.points))],outdoor:e&&No(h)})),s=[];for(let[h,d]of n.entries())for(let g of n.slice(h+1))for(let x of Bd(d.points))for(let m of Bd(g.points)){let p=pb(x,m,d.points,g.points);p&&s.push({surface:d.surface,polygons:[p],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:g,deckBottom:x,northDeck:m,southDeck:p,recess:M}=t;r.push({surface:"patio",polygons:[Ni(Kc(m)),Ni(Kc(p)),Ni(Od(h,g,d+1,x))]}),M.x2>M.x1&&M.z2>M.z1&&o.push({surface:"oak",polygons:[Ni(Od(M.x1,M.z1,M.x2,M.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=qd([...l,...c]),f=t||e?Xd(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function mb(i,t,e,n){let s=Es(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Re(i,el(t),r),a=Re(i,el(e),-r),c=Es(xi(a,o),e)/s,l=Re(o,t,c);return Math.hypot(...xi(l,i))>n*2.5?Ni([i,o,a]):Ni([i,o,l,a])}function zd(i,t){let e=Es(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=xi(t.point,i.point);return[Es(n,t.tangent)/e,Es(n,i.tangent)/e]}function gb(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=xi(r.point,s.point);if(Math.hypot(...o)>Qc)continue;let a=zd(s,r);a&&a.every(c=>c>=-Qc&&c<=Pn)?e.push({a:s,b:r,center:Re(s.point,s.tangent,a[0])}):!a&&gi(s.tangent,r.tangent)<0&&gi(o,s.tangent)<=Pn&&gi(o,r.tangent)>=-Pn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=zd(s,o);if(!a)continue;let[c,l]=a;c<-Qc||c>=-Pn||l<=Pn||l>=r.length-Pn||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:Re(s.point,s.tangent,c)})}}return e}function kd({a:i,b:t,center:e},n){return e?[tl(i.point,e,n,.1),t&&tl(t.point,e,n,.1),t&&mb(e,i.tangent,t.tangent,n)].filter(Boolean):[tl(i.point,t.point,n,.1)].filter(Boolean)}function Zd(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function xb(i,t){return Zd(i).flatMap(([e,n])=>{let s=xi(n,e),r=Math.hypot(...s);if(r<Pn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=xi(a,e),u=xi(c,e);if(Math.abs(Es(l,o))>Pn||Math.abs(Es(u,o))>Pn)return[];let[f,h]=[gi(l,o),gi(u,o)].sort((x,m)=>x-m),d=Math.max(0,f),g=Math.min(r,h);return g-d>Pn?[[Re(e,o,d),Re(e,o,g)]]:[]})})}function Hd(i,t){return t?.length?Gd(i,t):i}function Jd(i,t,e,n){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of i){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],g=(M,A,S,b,E,L,_)=>{A-M>Pn&&r(tl(Re(h,d,M),Re(h,d,A),E/2),S,b,L,_)},x=c.openings.length?n:0,m=(M,A)=>{g(M,A,x,e,t,l,2),g(M,A,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let p=0;for(let M of c.openings)m(p,M.start),p=Math.max(p,M.end);m(p,c.length),g(0,c.length,0,3,t+3,f,1)}for(let c of gb(i)){let[l,u,f]=c.a.wall.palette;for(let h of kd(c,t/2))r(h,0,e,l,2);for(let h of kd(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of h.sort((x,m)=>x.priority-m.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{...qd([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=Zd(l);return c.map(g=>({...g,bottom:u,top:f,faces:{top:Hd(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:Hd(g.polygons,a[h-1]?.footprint),sides:xb(g.polygons,d)}}))})}var yb=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),_b=3,vb={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},$d=Object.fromEntries(Object.entries(vb).map(([i,t])=>[i,t.map(e=>new $t(e))])),bb=new $t("#ffc38b"),{clamp:Mb,lerp:Uo,smoothstep:Kd}=me;function jd(i,t,e){i.toneMapping=go,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=ys,i.shadowMap.autoUpdate=!1;let n=new xs("#fff4e5","#897e91",1.13),s=new ji("#fff0d4",2.15),r=new ji("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:_b},()=>new uo("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],x,m,p=!0,M=new $t;function A(){for(let E of t.children)E.isMesh&&(E.receiveShadow=!0,E.geometry.computeBoundingBox(),E.castShadow=E.geometry.boundingBox.max.y+E.position.y>-99)}function S(E,L){let _=/(light|lamp|sconce)/i.test(E.type),I=!L.animate||_;L.root.traverse(O=>{!O.isMesh||O.material.transparent||O.material.isShaderMaterial||(O.receiveShadow=!0,O.castShadow||=I)}),_&&E.entityId&&g.push({item:E,object:L})}function b(E,L,_){let I=E.night===!0,O=yb.has(E.condition),U=Number.isFinite(E.sunElevation)?Math.round(E.sunElevation*2)/2:I?-12:35,B=Kd(U,-8,19),Y=`${O}:${Mb(U,-8,35)}`;if(Y!==x){let z=$d[O?"overcast":"clear"],Z=[n.color,n.groundColor,s.color,_.color,t.background];for(let[X,ct]of Z.entries())ct.lerpColors($d.night[X],z[X],B);let k=B*(1-Kd(U,8,34));O||s.color.lerp(bb,k*.8),n.intensity=Uo(.75,O?1.33:1.12,B),s.intensity=Uo(.28,O?.86:2.14,B),r.intensity=Uo(.12,.23,B),s.shadow.intensity=Uo(.65,O?.39:.84,B),x=Y,m=void 0}if(m!==L){let z=g.flatMap(({item:Z,object:k})=>{let X=L[Z.id];if(X?.state!=="on")return[];let ct=Number.isFinite(X.attributes?.brightness)?me.clamp(X.attributes.brightness/255,0,1):1;return ct>0?[{object:k,power:ct,color:X.attributes?.rgb_color}]:[]}).sort((Z,k)=>k.power-Z.power);for(let[Z,k]of d.entries()){let X=z[Z];if(!X){k.intensity=0;continue}let{object:ct,power:Q,color:et}=X;Array.isArray(et)&&et.length===3&&et.every(Number.isFinite)?(M.setRGB(...et.map(yt=>me.clamp(yt/255,0,1)),ke),k.color.copy(M)):k.color.set("#ffd5a2"),k.position.copy(ct.root.position),k.position.y+=Math.max(18,ct.anchorY-9),k.intensity=Q*Uo(2350,1250,B)}m=L}p&&(i.shadowMap.needsUpdate=!0,p=!1)}return{markStructure:A,register:S,update:b,dispose:()=>s.shadow.dispose()}}var yi=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),_r=Object.freeze({default:yi("Default",0,0),top:yi("Top down",0,0),high:yi("High angle",0,15),dollhouse:yi("Dollhouse",2,30),corner:yi("Corner",45,40),north:yi("From north",180,42),east:yi("From east",90,42),south:yi("From south",0,42),west:yi("From west",270,42),free:yi("Free view",0,25)});function Qd(i,t=!1){let e=Object.entries(_r).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Ui(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(_r,t.preset)?t.preset:"top",n=_r[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?me.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?me.clamp(t.zoom,.6,2.5):n.zoom}}function tp(i){let t=Ui(i);return{...t,preset:"free",tilt:t.tilt||_r.free.tilt}}function nh(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Ui(i)}function ih(i){return Ui({...nh(i),preset:"default"})}function ep(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>nh(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return nh(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function sh(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let a=Ui(s),c=me.degToRad(a.azimuth),l=me.degToRad(a.tilt),u=new H((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),f=new H(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(f,1900),i.lookAt(u),i.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),d=new Oe,g=new H;for(let S of[t.minX-37,t.maxX+37]){for(let b of[t.minZ-53,t.maxZ+36])for(let E of[-111,h])d.expandByPoint(g.set(S,E,b).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&d.expandByPoint(g.set(S,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let S=(d.max.y-d.min.y)*.025;d.min.y-=S,d.max.y+=S}let x=e/n,m=Math.max((d.max.x-d.min.x)/2,(d.max.y-d.min.y)/2*x),p=m/x,M=(d.min.x+d.max.x)/2,A=(d.min.y+d.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:S,y:b}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),E=Number.isFinite(r.weight)?me.clamp(r.weight,0,1):1;M=me.lerp(M,S,E),A=me.lerp(A,b,E)}return i.left=M-m,i.right=M+m,i.bottom=A-p,i.top=A+p,i.zoom=Number.isFinite(o)?me.clamp(o,.6,4.5):a.zoom,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Dining table",icon:"\u25B0",w:165,h:108,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=p=>typeof p=="string"&&p.startsWith("ui"),o=p=>String(p??"").toLowerCase(),a=p=>o(p).split(".")[0],c=p=>typeof p=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(p),l=p=>p.type==="window"?"wall":p.mount||"floor";function u(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function f(p,M,A){return!(!p||!M||!A||p.type===A.type||s.has(p.type)||r(p.type)||s.has(A.type)||r(A.type)||l(M)!==l(A)||p.entityId&&!h(p.entityId,A))}function h(p,M){return!c(p)||typeof M?.type!="string"||r(M.type)||M.type==="stairs"||M.type==="window"?!1:M.type==="cameraThumbnail"?a(p)==="camera":M.type==="garageDoor"?a(p)==="cover":a(p)!=="camera"}function d(p,M){let A=a(p.entity_id),S=o(p.name+" "+p.entity_id),b={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},E=_=>{if(_.type==="controlZone")return!0;if(A==="camera")return _.type==="cameraThumbnail";if(A==="cover")return/garage/.test(S)&&_.type==="garageDoor";if(A==="climate")return _.type==="thermostat";if(A==="binary_sensor"&&/presence|occupancy/.test(S))return _.type==="presenceSwitch";if(b[A]?.includes(_.group)||/humidifier/.test(S)&&_.type==="humidifier"||/purifier/.test(S)&&_.type==="airPurifier")return!0;if(A==="switch"){if(/fan/.test(S))return _.group==="fans"||_.type==="windowFan";if(/light|lamp/.test(S))return _.group==="lighting"}return!1},L=M.filter(_=>h(p.entity_id,_));return{recommended:L.filter(E),available:L}}function g(p){return p&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(p.type)&&!r(p.type)}function x(p,M,A,S){if(!["w","h"].includes(M)||!Number.isFinite(A))return null;let b=p.type==="cameraThumbnail"?40:12,E=p.type==="cameraThumbnail"||c(p.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!S)return{[M]:Math.min(E[M],Math.max(b,A))};let L=Math.min(E.w/p.w,E.h/p.h),_=Math.min(L,Math.max(b/p.w,b/p.h)),I=Math.min(L,Math.max(_,A/p[M]));return{w:Math.round(p.w*I*10)/10,h:Math.round(p.h*I*10)/10}}function m(p,M,A){let S=p.ownerDocument,b=(yt,Rt,Zt={})=>{let qt=S.createElement(yt);Rt&&(qt.textContent=Rt);for(let[Ht,lt]of Object.entries(Zt))qt.setAttribute(Ht,lt);return qt},E=b("dialog","",{class:"model-library","aria-label":"Objects and models"}),L=b("header"),_=b("h2","Objects & models"),I=b("button","Close",{type:"button"});L.append(_,I);let O=b("div","",{class:"model-library-filters"}),U=b("select","",{"aria-label":"Object library section"});for(let[yt,Rt]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])U.append(b("option",Rt,{value:yt}));let B=b("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});O.append(U,B);let Y=b("div","",{class:"model-library-context"}),z=b("p","",{role:"status",class:"model-library-status"}),Z=b("div","",{class:"model-library-list"});E.append(L,O,Y,z,Z);let k=b("style");k.textContent=`
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
    `,p.append(k,E);let X,ct=!1,Q=(yt,Rt)=>{let Zt=b("button",yt,{type:"button"});return Zt.addEventListener("click",Rt),Zt};function et(yt){X=yt,ct=!1,U.value="catalog",B.value="",st(),B.focus()}function st(){let{templates:yt,paletteGroups:Rt}=u(),Zt=new Map(yt.map(vt=>[vt.type,vt])),qt=new Map(Rt),{items:Ht,entities:lt}=M(),ft=o(B.value).trim(),wt=(...vt)=>ft.split(/\s+/).every(gt=>o(vt.join(" ")).includes(gt)),Dt=[];if(Y.replaceChildren(),X&&(Y.append(b("strong",X.item?.name||X.entity?.name||X.entity?.entity_id)),X.entity&&Y.append(Q(ct?"Suggested models":"All compatible models",()=>{ct=!ct,st()})),Y.append(Q("Cancel mapping",()=>{U.value=X.entity?"devices":"placed",X=void 0,B.value="",st()}))),U.value==="placed")for(let vt of Ht){let gt=Zt.get(vt.type);if(!wt(vt.name,gt?.label,vt.type,vt.entityId))continue;let Nt=[vt.w,vt.h,vt.modelHeight].filter(Number.isFinite).join(" \xD7 "),dt=[gt?.label||vt.type,Nt&&Nt+" plan px",vt.entityId].filter(Boolean).join(" \xB7 "),_t=[Q("Edit",()=>A({kind:"edit",itemId:vt.id}))];yt.some(bt=>f(vt,gt,bt))&&_t.push(Q("Change model",()=>et({item:vt}))),Dt.push([vt.name||gt?.label||vt.type,dt,_t])}else if(U.value==="devices"){let vt=new Map;for(let gt of Ht)gt.entityId&&!vt.has(gt.entityId)&&vt.set(gt.entityId,gt);for(let gt of lt){if(!c(gt.entity_id)||!wt(gt.name,gt.entity_id,gt.area))continue;let Nt=vt.get(gt.entity_id),dt=[gt.entity_id,gt.area,Nt?"On plan \xB7 "+Nt.name:"Available to map"].filter(Boolean).join(" \xB7 ");Dt.push([gt.name||gt.entity_id,dt,[Nt?Q("Edit mapped object",()=>A({kind:"edit",itemId:Nt.id})):Q("Choose model",()=>et({entity:gt}))]])}}else{let vt=yt;if(X?.item&&(vt=yt.filter(gt=>f(X.item,Zt.get(X.item.type),gt))),X?.entity){let gt=d(X.entity,yt);vt=ct?gt.available:gt.recommended}for(let gt of vt){let Nt=qt.get(gt.group)||gt.group;if(!wt(gt.label,gt.type,gt.tags,Nt))continue;let dt=X?.item?{kind:"replace",itemId:X.item.id,modelId:gt.type}:{kind:"place",modelId:gt.type,...X?.entity?{entityId:X.entity.entity_id}:{}};Dt.push([gt.label,Nt+" \xB7 "+gt.w+" \xD7 "+gt.h+" plan px",[Q(X?"Use model":"Place",()=>A(dt))]])}}Z.replaceChildren();for(let[vt,gt,Nt]of Dt.slice(0,48)){let dt=b("div","",{class:"model-library-row"}),_t=b("div");_t.append(b("strong",vt),b("small",gt));let bt=b("div","",{class:"model-library-actions"});bt.append(...Nt),dt.append(_t,bt),Z.append(dt)}z.textContent=Dt.length>48?"Showing 48 of "+Dt.length+". Search to narrow the list.":Dt.length?Dt.length+(Dt.length===1?" result":" results"):U.value==="devices"&&!lt.length?"Connect to Home Assistant to list devices.":"No matches."}return U.addEventListener("change",()=>{X=void 0,B.value="",st()}),B.addEventListener("input",st),I.addEventListener("click",()=>E.close()),{open(yt="placed"){X=void 0,ct=!1,U.value=yt,B.value="",st(),E.open||E.showModal()},get isOpen(){return E.open},close(){E.open&&E.close()}}}i.RoomcraftModels=Object.freeze({catalog:u,canMap:h,canReplace:f,suggestions:d,supportsHeight:g,resizeFootprint:x,mount:m,handoffKey:n})})(typeof window>"u"?globalThis:window);function np(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Oe().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var Sb=24,Eb=.32,wb=125,Tb=24,nl=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function Fo(i,t=.12){return new nn({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function Ab(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function rh(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new ue;s.name="tracked-people",i.add(s);let r,o=new Map,a=nl.map(()=>[]),c=!1,l=!1,u=0,f=!1;function h(){return{sphere:new Cn(1,12,8),disc:new hi(1,24).rotateX(-Math.PI/2),groundRing:new ro(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new Ii(1,.14,6,16),palette:nl.map(({sweater:M,trim:A,skin:S,hair:b})=>Object.fromEntries(Object.entries({sweater:M,trim:A,skin:S,hair:b}).map(([E,L])=>[E,Fo(L)]))),ink:Fo("#423c50",.09),cheek:Fo("#d78383"),shoes:Fo("#514656"),white:Fo("#fff1dc"),shadow:new en({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new en({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function d(M){r??=h();let{role:A,scale:S}=nl[M],{sweater:b,trim:E,skin:L,hair:_}=r.palette[M],I=A==="baby",O=new ue;O.name=`radar-avatar-${A}`;let U=new ue,B=new ue,Y=[],z=[],Z=[];s.add(O),O.add(U),U.scale.set(...S);let k=(et,st,yt,Rt,Zt,qt,Ht,lt)=>{let ft=new fe(r.sphere,st);return ft.position.set(yt,Rt,Zt),ft.scale.set(qt,Ht,lt),et.add(ft),ft},X=new fe(r.disc,r.shadow);X.position.y=.13,X.scale.set(19,1,19),O.add(X);let ct=new fe(r.groundRing,r.groundMark);ct.position.y=.26,O.add(ct),k(U,b,0,15,0,I?8.2:7.1,8.3,5.4),I?(k(U,E,0,17.5,4.8,4.9,4.1,1.15),k(U,r.white,0,17.4,5.9,1.5,1.5,.35)):(k(U,E,0,20.7,2.4,5.8,2.2,4),k(U,E,A==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let et of[-1,1]){let st=new ue;st.position.set(et*3.4,10.3,.1),U.add(st),k(st,I?b:r.ink,0,-3.2,0,2.65,4.6,2.6),k(st,I?E:r.shoes,0,-8.15,1.25,3.1,2.1,4),k(st,r.white,0,-8.8,3.25,2.75,1.1,2),Z.push(st);let yt=new ue;yt.position.set(et*6.25,19.1,0),U.add(yt),k(yt,b,et*.9,-3.7,.15,2.75,5.3,2.7),k(yt,L,et*1.3,-7.8,.5,2.3,2.6,2.2),z.push(yt)}B.position.set(0,I?26:27.2,0),I&&B.scale.set(1.16,1.17,1.12),U.add(B),k(B,_,0,1.3,-1.65,9.2,9.65,8.6),k(B,L,0,0,1.9,8.65,8.45,7.5);let Q=k(B,_,-2.1,7.3,4.25,6.4,3.4,4.35);if(Q.rotation.z=A==="papa"?-.27:.22,A==="mama"&&(k(B,_,-6.7,-1.9,-3.8,3.6,8.1,5.2),k(B,_,6.2,-1.7,-3.9,3.3,7.6,5.4),k(B,_,2.8,10.4,-2.5,5.1,5.1,5.1),k(B,E,4.4,8.7,2.2,2.8,1.1,1.1)),I){k(B,_,-7.3,6.7,-2,3.35,3.7,3.5),k(B,_,7.3,6.7,-2,3.35,3.7,3.5);let et=k(B,E,.9,10,4.2,2.5,1.45,1.25),st=k(B,E,4.1,10,4.2,2.5,1.45,1.25);et.rotation.z=-.4,st.rotation.z=.4,k(B,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let et of[-1,1])if(k(B,L,et*8.2,-.15,1.1,1.85,2.4,1.75),Y.push(k(B,r.ink,et*3,1.2,8.95,.85,.87,.52)),k(B,r.cheek,et*5.05,-1.25,7.95,1.18,.62,.52),A==="papa"){let st=new fe(r.glasses,r.ink);st.position.set(et*3.1,1.25,9.15),st.scale.set(2.5,2.15,1.55),B.add(st)}return A==="papa"&&k(B,r.ink,0,1.6,9.35,1.1,.28,.35),k(B,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:O,body:U,head:B,arms:z,legs:Z,eyes:Y,styleIndex:M,baby:I}}function g(M,A){return M.duration>0?me.clamp((A-M.start)/M.duration,0,1):1}function x(M,A=c){u=Number.isFinite(M)?M:u,l=A||c,f=!1;for(let S of o.values()){let{character:b}=S;l&&(S.duration=0);let E=g(S,u),L=me.lerp(S.fromX,S.x,E),_=me.lerp(S.fromZ,S.z,E),I=t(L,_);!Number.isFinite(I)&&E<1&&(S.duration=0,E=1,L=S.x,_=S.z,I=t(L,_));let O=n?Math.min(1,n(L,_)/Tb):1;if(b.root.visible=Number.isFinite(I)&&O>0,!b.root.visible)continue;f=!0,b.root.position.set(L,I,_),b.root.rotation.y=S.heading,b.root.scale.setScalar(O);let U=S.walking&&E<1&&!l,B=Math.floor(Math.max(0,u-S.born)*16)/16+.7+b.styleIndex*.62,Y=Math.floor(E*12)/12*Math.PI*4,z=U?Math.sin(Y)*.56:0,Z=U?Math.abs(Math.sin(Y))*1.9:(1+Math.sin(B*4.7))*.47;b.body.position.y=l?0:Z*(b.baby?1.5:1),b.body.rotation.z=l?0:U?z*.15:Math.sin(B*2.8)*.045;for(let k=0;k<2;k++){let X=k===0?-1:1;b.arms[k].rotation.x=U?-z*X:l?0:Math.sin(B*3.1+k)*.09,b.legs[k].rotation.x=z*X}Ab(b,B,l)}}function m(M,A,{reduceMotion:S=!1}={}){c=S;let b=Number.isFinite(A)?A:u,E=new Map;for(let _ of Array.isArray(M)?M:[])if(!(typeof _?.id!="string"||!_.id||_.id.length>256||!Number.isFinite(_.x)||!Number.isFinite(_.y)||E.has(_.id)||!Number.isFinite(t(_.x,_.y)))&&(E.set(_.id,_),E.size===Sb))break;for(let[_,I]of o)E.has(_)||(I.character.root.visible=!1,a[I.character.styleIndex].push(I.character),o.delete(_));let L=nl.map(()=>0);for(let{character:_}of o.values())L[_.styleIndex]++;for(let _ of[...E.keys()].filter(I=>!o.has(I)).sort()){let I=L.indexOf(Math.min(...L));L[I]++;let O=a[I].pop()??d(I),{x:U,y:B}=E.get(_);o.set(_,{character:O,fromX:U,fromZ:B,x:U,z:B,heading:0,born:b,start:b,duration:0})}for(let[_,{x:I,y:O}]of E){let U=o.get(_);if(U.x!==I||U.z!==O){let B=S?1:g(U,b),Y=me.lerp(U.fromX,U.x,B),z=me.lerp(U.fromZ,U.z,B),Z=Math.hypot(I-Y,O-z),k=Z>1?Math.atan2(I-Y,O-z):U.heading,ct=!S&&Z>0&&Z<=wb&&e?.(Y,z,I,O)?Eb:0;Object.assign(U,{fromX:Y,fromZ:z,x:I,z:O,heading:k,start:b,duration:ct,walking:Z>2})}}x(b,S)}function p(){if(s.removeFromParent(),!!r){for(let M of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])M.dispose();for(let M of r.palette)for(let A of Object.values(M))A.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let M of a)M.length=0;o.clear(),r=void 0}}return{setTracks:m,render:x,dispose:p,setVisible(M){s.visible=M},get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return f}}}function ip(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var il=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),sl=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function Rb([i,t,e,n],s,r,o,a){let c=il(i,t,e,n,s,r),l=il(i,t,e,n,o,a),u=il(s,r,o,a,i,t),f=il(s,r,o,a,e,n);return Math.abs(u)<1e-7&&sl(s,o,i)&&sl(r,a,t)||Math.abs(f)<1e-7&&sl(s,o,e)&&sl(r,a,n)?!0:c>0!=l>0&&u>0!=f>0}function oh(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>ip(a,r,o)&&!c.some(l=>ip(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,f]of t){let h=u-c,d=f-l,g=h*h+d*d;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*h+(o-l)*d)/g)),m=r-c-x*h,p=o-l-x*d;a=Math.min(a,m*m+p*p)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>Rb(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var sp=new Oe,rl=new H,vr=class extends ho{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Jt(t,3)),this.setAttribute("uv",new Jt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Qi(e,6,1);return this.setAttribute("instanceStart",new On(n,3,0)),this.setAttribute("instanceEnd",new On(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Qi(e,6,1);return this.setAttribute("instanceColorStart",new On(n,3,0)),this.setAttribute("instanceColorEnd",new On(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new oo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),sp.setFromBufferAttribute(e),this.boundingBox.union(sp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rl.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rl)),rl.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Pt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Tt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};xn.line={uniforms:To.merge([Pt.common,Pt.fog,Pt.line]),vertexShader:`
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
		`};var rs=class extends Ve{constructor(t){super({type:"LineMaterial",uniforms:To.clone(xn.line.uniforms),vertexShader:xn.line.vertexShader,fragmentShader:xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var ah=new Me,rp=new H,op=new H,sn=new Me,rn=new Me,_i=new Me,ch=new H,lh=new ge,on=new po,ap=new H,ol=new Oe,al=new vn,vi=new Me,bi,ws;function cp(i,t,e){return vi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),vi.multiplyScalar(1/vi.w),vi.x=ws/e.width,vi.y=ws/e.height,vi.applyMatrix4(i.projectionMatrixInverse),vi.multiplyScalar(1/vi.w),Math.abs(Math.max(vi.x,vi.y))}function Cb(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){on.start.fromBufferAttribute(s,a),on.end.fromBufferAttribute(r,a),on.applyMatrix4(e);let l=new H,u=new H;bi.distanceSqToSegment(on.start,on.end,u,l),u.distanceTo(l)<ws*.5&&t.push({point:u,pointOnLine:l,distance:bi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Ib(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;bi.at(1,_i),_i.w=1,_i.applyMatrix4(t.matrixWorldInverse),_i.applyMatrix4(n),_i.multiplyScalar(1/_i.w),_i.x*=r.x/2,_i.y*=r.y/2,_i.z=0,ch.copy(_i),lh.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(sn.fromBufferAttribute(c,h),rn.fromBufferAttribute(l,h),sn.w=1,rn.w=1,sn.applyMatrix4(lh),rn.applyMatrix4(lh),sn.z>f&&rn.z>f)continue;if(sn.z>f){let A=sn.z-rn.z,S=(sn.z-f)/A;sn.lerp(rn,S)}else if(rn.z>f){let A=rn.z-sn.z,S=(rn.z-f)/A;rn.lerp(sn,S)}sn.applyMatrix4(n),rn.applyMatrix4(n),sn.multiplyScalar(1/sn.w),rn.multiplyScalar(1/rn.w),sn.x*=r.x/2,sn.y*=r.y/2,rn.x*=r.x/2,rn.y*=r.y/2,on.start.copy(sn),on.start.z=0,on.end.copy(rn),on.end.z=0;let x=on.closestPointToPointParameter(ch,!0);on.at(x,ap);let m=me.lerp(sn.z,rn.z,x),p=m>=-1&&m<=1,M=ch.distanceTo(ap)<ws*.5;if(p&&M){on.start.fromBufferAttribute(c,h),on.end.fromBufferAttribute(l,h),on.start.applyMatrix4(o),on.end.applyMatrix4(o);let A=new H,S=new H;bi.distanceSqToSegment(on.start,on.end,S,A),e.push({point:S,pointOnLine:A,distance:bi.origin.distanceTo(S),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var cl=class extends fe{constructor(t=new vr,e=new rs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)rp.fromBufferAttribute(e,o),op.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+rp.distanceTo(op);let r=new Qi(s,2,1);return t.setAttribute("instanceDistanceStart",new On(r,1,0)),t.setAttribute("instanceDistanceEnd",new On(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;bi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;ws=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),al.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=ws*.5;else{let f=Math.max(s.near,al.distanceToPoint(bi.origin));l=cp(s,f,c.resolution)}if(al.radius+=l,bi.intersectsSphere(al)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ol.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=ws*.5;else{let f=Math.max(s.near,ol.distanceToPoint(bi.origin));u=cp(s,f,c.resolution)}ol.expandByScalar(u),bi.intersectsBox(ol)!==!1&&(n?Cb(this,e):Ib(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(ah),this.material.uniforms.resolution.value.set(ah.z,ah.w))}};var br=class extends vr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var ll=class extends cl{constructor(t=new br,e=new rs({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var lp="#ffce84",Pb="#a8f5ff",uh="#10242e";function ul(i,t,e){return new rs({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function hl(i,t,e,n){let s=new br;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new ll(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function up(i,t,e,n){let s=new he().setFromPoints(t.map(({x:o,y:a})=>new H(o,.5,a)));s.setIndex(Un.triangulateShape(t.map(({x:o,y:a})=>new Tt(o,a)),[]).flat());let r=new fe(s,e);r.renderOrder=n,i.add(r)}function hp(){let i=new Xi,t={side:bn,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new en({...t,color:lp,opacity:.13}),n=new en({...t,color:uh,opacity:.95}),s=ul(uh,4.6,{opacity:.8}),r=ul(lp,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=ul(uh,3.5,{...o,opacity:.65}),c=ul(Pb,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let g=(m,p=0)=>({x:h.x+d.x*m-d.y*p,y:h.y+d.y*m+d.x*p}),x=Array.from({length:28},(m,p)=>{let M=p/28*Math.PI*2;return g(10*Math.cos(M),10*Math.sin(M))});hl(i,[g(10),g(56)],[s,r],5),hl(i,[g(45,-7),g(56),g(45,7)],[s,r],5),up(i,x,n,7),hl(i,[...x,x[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let d=new Map;for(let g of h){let{points:x,kind:m,id:p,origin:M,forward:A}=g;if(x.length<3)continue;let S=m==="nominal";S&&up(i,x,e,0),hl(i,[...x,x[0]],S?[s,r]:[a,c],S?3:1),M&&A&&d.set(p,g)}for(let g of d.values())l(g)}function f(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:f}}var Lb=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Db=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),fp={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},fl=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"]}).map(([i,t])=>[i,t.map(e=>new $t(e))])),Nb=new $t("#ffd59e"),dp=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Ub,smoothstep:pp}=me;function Fb({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new he;return o.setAttribute("position",new Jt(n,3)),o.setAttribute("uv",new Jt(s,2)),o.setIndex(r),o}var Ob=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`,Bb=`
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
`;function mp({y:i,farZ:t,shoreline:e,focusX:n}){let s={waterTime:{value:0},rain:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},moon:{value:0},moonLight:{value:new Tt(0,1)},bodyPosition:{value:new Tt}};for(let[c,l]of dp.entries())s[l]={value:fl.clear[c].clone()};let r=new Ve({uniforms:s,vertexShader:Ob,fragmentShader:Bb,toneMapped:!1}),o=new fe(Fb({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:f,condition:h,moonPhase:d,sunElevation:g,sunRising:x}=l,m=Lb.has(h),p=Number.isFinite(g)?g:u?-19:42,M=pp(p,-8,17),A=fl[m?"overcast":"clear"];for(let[O,U]of dp.entries())s[U].value.lerpColors(fl.night[O],A[O],M);let S=Object.hasOwn(fp,d)?fp[d]:void 0,b=f?!u:h==="sunny",E=u&&S!==void 0,L=Ub(p/75,0,1),_=M*(1-pp(p,8,34));b&&s.bodyTint.value.lerp(Nb,_*.7),E&&s.bodyTint.value.copy(fl.night[5]);let I=Db.has(h);if(s.waterTime.value=Number.isFinite(c)&&!l.reduceMotion?c:0,s.rain.value=I?1:0,s.roughness.value=I||h==="windy"||h==="windy-variant"?1.65:1,s.cloudCover.value=m?.94:h==="partlycloudy"?.64:u?.32:.24,s.bodyVisibility.value=m?0:E?.93:b?.97:0,s.moon.value=E?1:0,E)s.moonLight.value.set(Math.sin(S),Math.cos(S)),s.bodyPosition.value.set(46,42);else{let O=x===!0?-107:x===!1?118:-31;s.bodyPosition.value.set(O*(1-L),38+L*20)}}return{mesh:o,update:a}}var pl=26,zb=92,dl=4,kb=18,Hb=188;function xp(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-kb,o=r-2*pl-zb;return{nearZ:r,farZ:o,sceneryMinZ:o-Hb}}function yp(i,{nearZ:t,farZ:e},n,s,r){let o=e+pl,a=t-pl,c=(o+a)/2,l=r-s/2,u=r+s/2,f=(h,d,g,x)=>i.box(s,g,d-h,x,r,n+g/2,(h+d)/2);f(o,a,1.2,"#73767c"),f(o,o+3.4,1.4,"#656b71"),f(a-3.4,a,1.4,"#656b71");for(let[h,d,g,x]of[[e,o,o-dl,e],[a,t,a,a+dl]]){f(h,d,5,"#c0b6a7"),f(g,g+dl,6.2,"#d0c3b0");let m=pl-dl;for(let p=l+36;p<u;p+=72)i.box(1.15,.18,m,"#a69c91",p,n+5.04,x+m/2)}for(let h=l+36;h+17<u;h+=72)i.box(34,.2,2.8,"#e9ce91",h,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2]}}function hh(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new he;o.setAttribute("position",new Jt(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function Vb(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new $r(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,f=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+f)}}function Gb(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,f=s+.1;i.ball(a,c,13,"#d7bd94",l,f,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,f+.5,u+4);for(let[h,d,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])Vb(i,l+a*h,u+d,f+c*.75,g,h*7)}}function Wb(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function Xb(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let f=(m,p,M)=>[Math.cos(m)*p,M,Math.sin(m)*p],h=o+u*2*Math.PI/8,d=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],f(h,16*.54,16.6+2.1),f(d,16*.54,16.6+2.1),f(h,16,16.6-.55),f(d,16,16.6-.55),f(h,16,16.6-2),f(d,16,16.6-2)],x=new he;x.setAttribute("position",new Jt(g.flat(),3)),x.setAttribute("uv",new Jt(g.flatMap(([m,,p])=>[m/32+.5,p/32+.5]),2)),x.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),x.computeVertexNormals(),i.add(x,u%2?r:s,t,n,e)}}function gp(i,t,e,n,s,r){let o=(f,h)=>[t+f*Math.cos(r)+h*Math.sin(r),e-f*Math.sin(r)+h*Math.cos(r)],a=(f,h,d,g,x,m,p)=>{let[M,A]=o(x,p);i.box(f,h,d,g,M,n+m,A,r)};for(let f of[-1,1])a(1.1,1.2,18,"#988679",f*4.5,2.15,0),a(1,2.1,1.2,"#988679",f*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Pe(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function qb(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,f=e+o;Xb(i,u,f,s,a,c,l),gp(i,u-13,f-15,s,c,l-.17),gp(i,u+14,f-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,f+7,l*2)}}function _p(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(m,p)=>{let M=l+r*p/c,A=M-a,S=t-108+14*Math.cos((A+110)*.006)+7*Math.sin((A-90)*.013);return{x:M,z:S}}),f=u.map(({x:m})=>[m,e+.28,t+.4]),h=u.map(({x:m,z:p})=>[m,e+.71,p+22]),d=u.map(({x:m,z:p})=>[m,e+.44,p+6]),g=u.map(({x:m,z:p})=>[m,e+.17,p-31]);hh(i,f,h,"#e3cba0"),hh(i,h,d,"#dbbd92"),hh(i,d,g,"#c8a47e");let x=Math.max(940,s-n);Gb(i,a,t,x,e);for(let m of[-1,1])Wb(i,a+m*x*.245,t,e);return qb(i,a,t,x,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:os}=me,_e={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},bp=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],Yb=new Map(bp.map(i=>[i.id,i])),ml=Object.freeze(bp.map(({id:i,label:t,length:e,width:n,detail:s})=>Object.freeze({id:i,label:t,length:e,width:s==="food"?n+2:n})));function Zb(i){let t=new he;return t.setAttribute("position",new Jt(i.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function vp(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new $t(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new Ne(a,3)),r}),e=mi(t);for(let n of t)n.dispose();return e.computeBoundingBox(),e}function Mp(i,t){let e=i.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),n=[],s=(i.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;n.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)n.push(0,o,o+1,s,s+o+1,s+o);let r=new he;return r.setAttribute("position",new Jt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function Jb(i){let t=[],e=(k,X)=>t.push([k,X]),n=(k,X,ct,Q,et,st,yt)=>e(new Pe(Q,et,st).translate(k,X,ct),yt),s=(k,X)=>e(Zb(k),X),r=(k,X,ct,Q,et,st,yt)=>{let Rt=[[X,Q,st],[ct,Q,st],[ct,et,st],[X,et,st]];s(k>0?Rt:Rt.reverse(),yt)},{width:o,tire:a,body:c,roof:l,detail:u}=i,f=i.length-2.8,h=f*.5,d=o*.435,g=a*.78,x=8.25+a*.52,m=x-(u==="sports"||u==="convertible"?1.8:.75);e(Mp([[-h,d*.76,x-1.6],[-h+2.4,d*.93,x-.2],[-h+6.2,d,x],[h-6.2,d,x-.24],[h-2.4,d*.92,m+.35],[h,d*.75,m]],g),c);let p=g+.95;for(let k of[-1,1])n(k*(h-.22),p,0,1.42,1.58,d*1.57,_e.bumper),n(k*(h+.05),p+.82,0,1.08,.95,4.5,_e.plate);n(h+.1,m-2.8,0,.65,1.2,d*.64,_e.grille),n(h+.38,m-2.62,0,.24,.35,d*.55,_e.rim);for(let k of[-1,1]){n(0,g+1.3,k*(d+.04),f*.53,.9,.34,_e.bumper);for(let X of[-.323,.323]){let ct=f*X,Q=k*(d+.05);e(new fi(a,a,2.9,10).rotateX(Math.PI/2).translate(ct,a,Q),_e.tire),e(new hi(a*.57,8).rotateY(k<0?Math.PI:0).translate(ct,a,Q+k*1.46),_e.rim),e(new hi(a*.28,6).rotateY(k<0?Math.PI:0).translate(ct,a,Q+k*1.48),_e.hub)}}let[M,A,S,b]=i.cabin.map(k=>f*k),E=x-.35,L=i.height-1.25,_=d*.88,I=_*(i.windows>2||u==="camper"||u==="delivery"?.94:.79),O=k=>os(_,I,k),U=k=>os(E,L,k),B=(k,X,ct,Q=0)=>[os(os(M,A,X),os(b,S,X),k),U(X),ct*(O(X)+Q)];function Y(k,X,ct,Q,et=.2,st=.85,yt=.08){let Rt=[B(X,et,k,yt),B(ct,et,k,yt),B(ct,st,k,yt),B(X,st,k,yt)];s(k>0?Rt:Rt.reverse(),Q)}function z(k,X,ct,Q,et,st,yt=0){let[Rt,Zt]=k>0?[b,S]:[M,A],qt=(lt,ft)=>[os(Rt,Zt,ft)+k*yt,U(ft),lt*O(ft)],Ht=[qt(ct,Q),qt(X,Q),qt(X,et),qt(ct,et)];s(k>0?Ht:Ht.reverse(),st)}function Z(k){z(k,-.81,.81,.16,.88,_e.window,.08),z(k,-.72,.73,.23,.82,_e.glass,.13),z(k,-.67,.64,.67,.75,_e.glassGlow,.18)}if(u==="convertible"){z(1,-.88,.88,0,1,l,.08),Z(1),n((M+S)/2,E+.2,0,(S-M)*.96,1.05,_*1.92,_e.window);for(let k of[-1,1])n(M+5.7,E+2.35,k*_*.43,7.7,2.5,5.6,_e.upholstery),n(M+2.2,E+3.7,k*_*.43,2,5.2,6,_e.tan)}else{for(let et of[-1,1])Y(et,0,1,c,0,1,0);z(1,-1,1,0,1,c),z(-1,-1,1,0,1,c),Z(1),["delivery","cargo","food"].includes(u)||Z(-1);let k=(S+A)/2,X=S-A+.38;n(k,L+.34,0,X,.84,I*2.05,l),u==="bubble"&&n(k,L+.79,0,X*.88,.52,I*1.67,l),u==="sunroof"&&(n(k,L+.82,0,X*.48,.24,I*1.12,_e.window),n(k-X*.12,L+.98,0,.65,.18,I,_e.glassGlow));let ct=i.windows??2,Q=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:ct},(et,st)=>[(st+.16)/ct,(st+.86)/ct]);for(let et of[-1,1])for(let[st,yt]of Q)Y(et,st,yt,_e.window),Y(et,st+.011,yt-.009,_e.glass,.29,.79,.13),Y(et,st+.023,yt-.025,_e.glassGlow,.64,.72,.18)}for(let k of[-1,1])n(b-3,E+1.05,k*(d+.2),3.2,1.8,1.75,l),n(os(M,b,.36),x-1.45,k*(d+.1),2.8,.46,.24,_e.rim);return{add:e,box:n,sideFace:r,glazingSide:Y,bodyParts:t,recipe:i,length:f,outer:d,shoulder:x,nose:h,frontY:m}}function $b(i,t){let{length:e,outer:n,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=i,l=-e*.454,u=e*.105,f=r.height-.4,h=u-l;o(Mp([[l,n*.93,f-.7],[l+1.6,n,f],[u-1.6,n,f],[u,n*.93,f-.7]],s-.8),t),a((l+u)/2,f+.1,0,h-3.5,.28,n*1.6,r.roof);for(let d of[-1,1]){let g=d*(n+.1);c(d,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let d of[-.4,0,.4])a(l-.13,(s+f)/2,n*d,.26,f-s-3.1,.4,_e.rim);return{rear:l,front:u,top:f}}function Kb(i){let{recipe:t,box:e,sideFace:n,glazingSide:s,length:r,outer:o,shoulder:a}=i,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let f=l+.5;for(let h of[-1,1])e(r*-.18,f,h*o*.51,r*.3,.85,.83,_e.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,f+.55,0,1.05,.75,o*1.18,_e.roofRail);e(r*-.18,f+1.1,0,r*.17,1.65,o*.78,_e.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,_e.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let f=r*-.25;e(f,a+.22,0,r*.35,.42,o*1.43,_e.wood);for(let h of[-1,1])e(f,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(f,a+.48,h*o*.38,r*.33,.25,.4,_e.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,_e.tan)}else if(c==="cargo"||c==="food"){let{rear:f,front:h}=$b(i,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let d=a+7;n(1,f+5.5,h-4.5,d,d+8.4,o+.19,_e.window),e((f+h)/2,d,o+.75,h-f-9.5,.75,2.65,_e.wood);for(let g=0;g<7;g++)e(os(f+6,h-4.5,g/6),d+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let f of[-1,1])c==="delivery"?(s(f,.1,.61,"#e5d6e4",.28,.65,.12),s(f,.18,.54,"#b39cc2",.43,.49,.18)):(s(f,.09,.61,"#456575",.29,.68,.12),s(f,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,f*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let f of[-1,1])e(0,a-1.05,f*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,_e.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function Sp(i){let t=Yb.get(i);if(!t)return null;let e=Jb(t);Kb(e);let{outer:n,nose:s,frontY:r,shoulder:o,bodyParts:a}=e,c=(l,u)=>vp([-1,1].map(f=>[new Pe(1.48,1.8,n*.35).translate(l*(s+.19),u,f*n*.63),"#ffffff"]));return[{role:"body",geometry:vp(a),material:new nn({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:c(1,r-1.75),material:new nn({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:c(-1,o-2.65),material:new nn({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}var Ep=new Map([["clear",{stride:4,speed:86}],["slow",{stride:2,speed:53}],["heavy",{stride:1,speed:24}]]),Oo={stride:3},jb=242,wp=12,Tp=.38,Qb=new Map(ml.map(i=>[i.id,i]));function Ap({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,wp*Math.round(n/(wp*jb))),o=n/r,a=e.map((x,m)=>Array.from({length:r},(p,M)=>({z:x,lane:m,index:M,x:s,offset:o*(M+.25+(m?.5:0))}))),c=0,l,u,f,h=!1,d=[];function g(x,m,p,M=!1){let A=m?.severity==="ambient"?Oo:Ep.get(m?.severity),S=Number.isFinite(l)&&Number.isFinite(x)?me.clamp(x-l,0,.25):0;if(l=x,A!==u){h=!!(u&&A&&(A===Oo||u===Oo));let L=Math.min(r,A?.stride??1);d=A?a.flatMap((_,I)=>_.filter(({index:O})=>O%L===I%L)):[],u=A}if(!A)return f=void 0,d;let b=m.speedFactor,E=A===Oo?o*Math.min(r,Oo.stride)/2:Number.isFinite(b)&&b>0?Ep.get("clear").speed*me.clamp(b,.22,1):A.speed;if(M)c=!p&&Number.isFinite(x)?Math.max(0,x)*E%n:0;else if(!p){if(h&&f!==void 0){let L=Math.exp(-S/Tp),_=f-E;c+=S*E+_*Tp*(1-L),f=E+_*L,h=Math.abs(f-E)>.1}else c+=S*E,f=E;c%=n}for(let L of d){let _=(L.offset+c)%n;L.x=s+(L.lane?n-_:_)}return d}return{capacity:r*e.length,update:g}}function Rp(i){let t=new ue,e=Ap(i),n,s=new Map;function r(d,g){let x=new Xr(d,g,e.capacity);return x.count=0,x.frustumCulled=!1,x.instanceMatrix.setUsage(fr),x}let o=r(new hi(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new en({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1}));t.add(o);let a=new He,c;t.visible=!1;function l(d,g){for(let{mesh:x,role:m}of d.layers)m==="headlamp"&&(x.material.emissiveIntensity=g?1.65:.26),m==="taillamp"&&(x.material.emissiveIntensity=g?.91:.28)}function u(d){if(s.has(d.id))return s.get(d.id);let g=new ue;g.name=`vehicle-${d.id}`;let x=Sp(d.id).map(({geometry:p,material:M,role:A})=>({mesh:r(p,M),role:A}));g.add(...x.map(({mesh:p})=>p)),t.add(g);let m={group:g,layers:x,count:0};return l(m,c),s.set(d.id,m),m}function f(d,g,{reduceMotion:x=!1,night:m=!1,transientTelemetry:p=!1}={}){p&&(n??=Ap(i));let A=(p?n:e).update(d,g,x,p);if(t.visible=A.length>0,!t.visible)return;if(m!==c){c=m;for(let b of s.values())l(b,m)}for(let b of s.values())b.count=0;let S=Qb.get(g?.vehicleStyle);for(let[b,E]of A.entries()){let L=S??ml[(E.index+E.lane*3)%ml.length],_=u(L);a.position.set(E.x,i.surfaceY,E.z),a.rotation.y=E.lane?Math.PI:0,a.scale.set(1,1,1),a.updateMatrix();for(let{mesh:I}of _.layers)I.setMatrixAt(_.count,a.matrix);_.count++,a.scale.set(L.length*.55,1,L.width*.62),a.updateMatrix(),o.setMatrixAt(b,a.matrix)}o.count=A.length,o.instanceMatrix.needsUpdate=!0;for(let{group:b,layers:E,count:L}of s.values()){b.visible=L>0;for(let{mesh:_}of E)_.count=L,L&&(_.instanceMatrix.needsUpdate=!0)}}function h(){t.traverse(d=>{d.isInstancedMesh&&(d.dispose(),d.geometry.dispose(),d.material.dispose())}),t.clear()}return{root:t,update:f,dispose:h}}var yl=Math.PI/180,ph=14,zp=56,tM=21,ni=-111,ii=-108,kp=14,eM=28,Bo=28,Cp={minX:0,maxX:1536,minZ:0,maxZ:1024},fh={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},dh={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},nM=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),iM=new Set(["snowy","snowy-rainy","hail"]),Ip={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function vl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function _l(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function Hp(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function Vp(i,t,e,n){let s=i.some(o=>_l(o,e-t.dz*23,n+t.dx*23));return i.some(o=>_l(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function sM(i,t,e){if(!Object.hasOwn(Ip,e.type))return null;let n=Hp(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):Vp(i,s,r,o),l=(ph/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Ip[e.type],zp-8)}}function Pp(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Lp(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function rM(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function Dp(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function gl(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function Gp(i){return Object.hasOwn(dh,i.finish)?dh[i.finish]:dh.graphite}function Wp(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function Np(i,t,e){let[n,s]=Wp(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=me.clamp(s/i.item.h+.5,0,1);return ii-ii*r}function xl(i,t,e){return _l(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?me.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=ph/2})}function oM(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(f=>xl(f,n,s)),o=t.some(f=>No(f)&&xl(f,n,s)&&xl(f,i.x1,i.y1)&&xl(f,i.x2,i.y2)),a=r?0:ni,c=a;if(!o)for(let f of e){let h=Np(f,i.x1,i.y1),d=Np(f,i.x2,i.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=Gp(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/eM)))}}function mh(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(b=>b?.points?.length>=3&&b.points.every(E=>Number.isFinite(E?.x)&&Number.isFinite(E?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(b=>!No(b)):e,s=i.walls.map(Pp).filter(Boolean),r=s.filter(b=>b.kind!=="fence"),o=i.items.filter(b=>typeof b?.id=="string"&&typeof b.type=="string"&&[b.x,b.y,b.w,b.h].every(Number.isFinite)&&b.w>0&&b.h>0),a=Dp(),c=Dp(),l=(b,E)=>gl(a,b,E);for(let b of e)for(let E of b.points)l(E.x,E.y);for(let b of s)l(b.x1,b.y1),l(b.x2,b.y2);for(let b of n)for(let E of b.points)gl(c,E.x,E.y);for(let b of r)gl(c,b.x1,b.y1),gl(c,b.x2,b.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:Cp},f=new Map(r.map(b=>[b.id,b])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(b=>f.has(b))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([b,E])=>({x:b,y:E})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([b,E])=>({x:b,y:E})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(b=>h?!(b.id==="w3"&&Lp(b,[400,408,342,468]))&&!(b.id==="w7"&&Lp(b,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:b,x2:E,z1:L}=h.recess;if(E>b){let _=[[b,f.get("w12").y2,b,L],[b,L,E,L]];for(let[I,O]of _.entries()){if(d.some(k=>rM(k,O)))continue;let[U,B,Y,z]=O,Z=Pp({id:`reference-recess-${I}`,x1:U,y1:B,x2:Y,y2:z});Z&&d.push(Z)}}}let g=new Map;for(let b of o.filter(E=>E.type==="window")){let E=Hp(d,b.x,b.y,(b.rotation||0)*yl);if(!E||E.distance>27)continue;let{wall:L,t:_,centerX:I,centerZ:O}=E,U=Math.max(1,_-b.w/2+1),B=Math.min(L.length-1,_+b.w/2-1);if(B-U<14)continue;L.openings.push({start:U,end:B});let Y=Vp(n,L,I,O),z=L.angle+(Y<0?Math.PI:0),Z=(U+B)/2;g.set(b.id,{x:L.x1+Z*L.dx,z:L.y1+Z*L.dz,angle:z,window:{...b,w:B-U+2,rotation:z/yl}})}let x=o.filter(b=>b.type==="garageDoor"),m=o.map(b=>{let E=b.type==="cameraThumbnail"&&x.some(Z=>yM(b,Z))?ni:Yp(b.type),L=b.type==="controlZone"&&(b.visualKind==="window"||b.entityId?.startsWith("cover.")),_=g.get(b.id)??sM(n,d,b);if(L){let Z=52;for(let k of g.values()){let X=Math.hypot(k.x-b.x,k.z-b.y);X<Z&&(_=k,Z=X)}}let I=_?.x??b.x,O=_?.z??b.y,U=_?.angle??(Number.isFinite(b.rotation)?b.rotation*yl:0),B=b.type==="stairs"?1536:300,Y=Math.min(B,(Math.abs(Math.cos(U))*b.w+Math.abs(Math.sin(U))*b.h)/2),z=Math.min(B,(Math.abs(Math.sin(U))*b.w+Math.abs(Math.cos(U))*b.h)/2);return l(I-Y,O-z),l(I+Y,O+z),{item:b,x:I,z:O,baseY:E,angle:U,window:_?.window,mountY:_?.mountY,isBlind:L}});for(let b of d)b.openings.sort((E,L)=>E.start-L.start||E.end-L.end);let p=m.filter(({item:b})=>b.type==="stairs").map(b=>{let{item:E,x:L,z:_,angle:I}=b,O=Number.isInteger(E.steps)&&E.steps>=2&&E.steps<=40?E.steps:kp,U=Math.min(46,Math.max(12,E.w*.47)),B=-E.h/2-U;for(let Y of[-E.w/2,E.w/2])l(L+Y*Math.cos(I)-B*Math.sin(I),_+Y*Math.sin(I)+B*Math.cos(I));return{...b,steps:O,apronDepth:U}}),M=s.filter(b=>b.kind==="fence").map(b=>oM(b,e,p)),A=Yd(e,h,t),S=Jd(d.map(b=>({...b,palette:Gp(b)})),ph,zp,tM);return Number.isFinite(a.minX)||Object.assign(a,Cp),{rooms:e,walls:d,fences:M,stairs:p,placements:m,bounds:a,houseBounds:u,reference:h,floorStructure:A,wallStructure:S,editableStructure:t}}function Up(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function gh([i,...t]){let e=Up(new Rn,i);return e.holes=t.map(n=>Up(new ms,n)),e}function aM(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=vl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,x=f+3+c()*27,m=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+m/2,x+c()*2-1,g+m,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new ir(n);return l.colorSpace=ke,l.wrapS=l.wrapT=ds,l}function Xp(i){let t=new Map,e=new ge,n=new Fn,s=new H,r=new H(0,1,0),o=new H(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new or({color:d})),a.get(d));function l(d,g,x,m,p,M=0){n.setFromAxisAngle(r,M),e.compose(s.set(x,m,p),n,o),d.applyMatrix4(e);let A=c(g);t.has(A)||t.set(A,[]),t.get(A).push(d)}function u(d,g,x,m,p,M,A,S=0){d>0&&g>0&&x>0&&l(new Pe(d,g,x),m,p,M,A,S)}function f(d,g,x,m,p,M,A){let S=new Cn(1,9,6);S.scale(d,g,x),l(S,m,p,M,A)}function h(){for(let[d,g]of t){let x=mi(g);if(!x){for(let m of g)i.add(new fe(m,d));continue}i.add(new fe(x,d));for(let m of g)m.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function cM(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(fh,r)?r:"oak";if(!s.has(a)){let c=fh[a],l=aM(n,c,141+Object.keys(fh).indexOf(a)*977);s.set(a,new or({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Yi(gh(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new fe(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)Fp(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)Fp(t,r,ni-1,-22,"#a18e84",!0)}function lM(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Ne(e,1))}return i}function Fp(i,t,e,n,s,r=!1){let o=new Ri(gh(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(lM(o),s,0,e,0)}function uM(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new he;return r.setAttribute("position",new Jt(e,3)),r.setAttribute("uv",new Jt(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function Op(i,t){let e=new Yi(gh(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function hM(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(Op(o,!1),r,0,s,0);for(let o of e.bottom)i.add(Op(o,!0),r,0,n,0);e.sides.length&&i.add(uM(e.sides,s-n),r,0,n,0)}}function fM(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:g}=n,x=l-c,m=new Pe(Math.hypot(u,x),5,7);m.rotateZ(Math.atan2(x,u)),i.add(m,d,(s+o)/2,(c+l)/2+Bo,(r+a)/2,-f);for(let p=0;p<=h;p++){let M=p/h,A=me.lerp(s,o,M),S=me.lerp(r,a,M),b=me.lerp(c,l,M),E=[A,b,S].map(L=>Math.round(L*1e3)).join(",");e.has(E)||(e.add(E),i.box(5,Bo,5,g,A,b+Bo/2,S,-f))}}}function qp(i,t,e,n,s=0,r=0){let o=e/n,a=-ii/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let f=r-e/2+o*u,h=u===n-1?0:ii+(u+1)*a,d=h-3;i.box(t,d-ni,o,"#a98075",s,(ni+d)/2,f+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,f+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,f+l/2)}}function dM({item:i,steps:t,apronDepth:e}){let n=new ue,s=Xp(n);qp(s,i.w,i.h,t);let r=ii-ni;return s.box(i.w,r,e,"#c8b79e",0,ni+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:ii/2}}function pM(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=kp,u=r-s,f=u/l,h=ii,d=-h/l;qp(i,a,u,l,c,(s+r)/2);for(let S=0;S<l;S++){let b=s+f*(S+.5),E=h+(S+1)*d;i.box(5,24,5,"#9f8183",e+4,E+12,b)}let g=f*(l-1),x=d*(l-1),m=new Pe(7,5,Math.hypot(g,x)+5);m.rotateX(-Math.atan2(x,g)),i.add(m,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[p,M]=o,A=Math.max(2,Math.ceil((M.x-p.x)/28));i.box(M.x-p.x,5,7,"#896e79",(M.x+p.x)/2,28,p.y);for(let S=0;S<=A;S++)i.box(5,28,5,"#9f8183",p.x+(M.x-p.x)*S/A,14,p.y)}function mM(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=vl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new ir(t);return s.wrapS=s.wrapT=ds,s.repeat.set(15,10),s.colorSpace=ke,s.anisotropy=4,s}function gM(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,c=vl(150741);if(!t.editableStructure){let u=Math.min(90,o*.18),f=t.reference?t.reference.left+u/2:e+u/2;i.box(u,4,115,"#c7baa4",f,-109,s-88);for(let h=0;h<5;h++)i.box(u*.85,1.8,13,"#dbceba",f,-106,s-137+h*20)}let l=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,f]of l){let h=e+u*o,d=s+f*a,g=21+c()*24;i.ball(g*.94,9,g*.67,"#6d886a",h,-104,d),i.ball(g*.82,g*.57,g*.69,"#819b76",h+3,-98,d);for(let x=0;x<8;x++){let m=x*2.39996,p=(.2+c()*.5)*g,M=g*(.28+c()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][x%4];i.ball(M*1.15,M*.8,M,A,h+Math.cos(m)*p,-93+12*c(),d+Math.sin(m)*p*.75)}for(let x=0;x<5;x++){let m=x%2?"#e6c4b1":"#fae6a4",p=h+(c()-.5)*g*1.14,M=d+g*(.62+c()*.43);i.ball(2.3,4.6,2.3,"#819765",p,-106,M),i.ball(3.9,1.8,3.3,m,p,-101.5,M),i.ball(1.2,.9,1.2,"#cb9c57",p,-100.3,M)}}}function xM(i,t,e){let n=vl(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(m,p)=>!(o&&m>=o.x1&&m<=o.x2&&p>=o.z1&&p<=o.z2)&&!t.rooms.some(M=>(!t.editableStructure||!No(M))&&_l(M,m,p)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let m=0;m<210;m++){let p=s.minX-70+(s.maxX-s.minX+140)*n(),M=c+l*n(),A=n()*180,S=8+n()*8,b=112+n()*34;a(p,M)&&r.push({x:p,z:M,phase:A,length:S,speed:b})}let u=new Float32Array(r.length*6),f=new Float32Array(r.length*3),h=new he,d=new he;h.setAttribute("position",new Ne(u,3).setUsage(fr)),d.setAttribute("position",new Ne(f,3).setUsage(fr));let g=new qr(h,new er({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),x=new Yr(d,new nr({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return g.frustumCulled=x.frustumCulled=!1,i.add(g,x),(m,p)=>{if(g.visible=nM.has(p),g.material.opacity=p==="pouring"||p==="lightning-rainy"?.5:.34,x.visible=iM.has(p),g.visible||x.visible){for(let[M,A]of r.entries()){let S=65-(A.phase+m*A.speed)%170,b=65-(A.phase+m*20)%170,E=M*6;u.set([A.x,S,A.z,A.x-A.length*.18,S+A.length,A.z+2],E),f.set([A.x+Math.sin(m+M)*6,b,A.z],M*3)}h.attributes.position.needsUpdate=g.visible,d.attributes.position.needsUpdate=x.visible}}}function Yp(i){return i==="garageDoor"?ni:0}function yM(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*yl,r=Math.cos(s),o=Math.sin(s);return Ud(t,e*r+n*o,-e*o+n*r)}function _M(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35){let c=e.get(n.item.id);return c?c.root.position.y+(c.anchorY??0)*c.root.scale.y:0}}return 0}function vM(i,t,e,n){let s=new H,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:g})=>o([[l,d,u],[l,d+Bo,u],[f,g,h],[f,g+Bo,h]])),c=i.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let g=Math.cos(f),x=Math.sin(f),m=[];for(let p of[-h.w/2,h.w/2])for(let[M,A]of[[-h.h/2-d,ii],[h.h/2,0]])m.push([l+p*g-M*x,A,u+p*x+M*g]);return o(m)});return[...a,...c]}function bM({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([f,h])=>[i+f*r-h*o,t+f*o+h*r].map(d=>Math.round(d*1e5)/1e5))]}function MM(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=Wp(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return ii;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return ii+-ii/s.steps*l}return null}}function Zp(i,t){let e=mh(t),n=new qc({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});n.resetState();let s=new Xi;s.background=new $t("#d7dfcd");let r=new Ki(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:c,maxZ:l}=e.bounds,u=new nn({color:"#e8e8d2",map:mM(i.ownerDocument),roughness:.95}),f=new fe(new Ci(6200,4200),u);f.rotation.x=-Math.PI/2,f.position.set((o+a)/2,ni,(c+l)/2),s.add(f);let h=Xp(s),d=xp(e),g=yp(h,d,ni,f.geometry.parameters.width,f.position.x),x,{water:m}=_p(h,d,ni,e.houseBounds,f.geometry.parameters.width,f.position.x),p=m.shoreline.reduce((J,D)=>Math.abs(D.x-m.focusX)<Math.abs(J.x-m.focusX)?D:J),M={road:{x:g.centerX,y:g.surfaceY+8,z:(g.lanes[0]+g.lanes[1])/2},coast:{x:m.focusX+16,y:m.y,z:p.z-36}};gM(h,e),pM(h,e),cM(s,h,e,i.ownerDocument),hM(h,e),fM(h,e.fences),h.finish();let A=s.children.filter(J=>J.isMesh),S=jd(n,s,e.bounds);S.markStructure();let b=mp(m);s.add(b.mesh);let E={},L=xM(s,e,d.sceneryMinZ),_=e.floorStructure.footprint,I=oh(_),O=e.stairs.length?oh(Bp.default.union(_,...e.stairs.map(bM))):I,U=MM(e,I),B=new Xi,Y=hp(),z=new xs("#fff5e1","#c9bfd7",1.8),Z=new ji("#fff1d8",1.65);Z.position.set(-4,9,6),B.add(z,Z);let k={supportsRoute:O.supportsRoute,floorClearance:O.clearance},X=rh(B,U,k),ct,Q=X,et=new Map,st=new Map,yt=new Map,Rt=new Map(e.stairs.map(J=>[J.item.id,J]));for(let J of e.placements){let{item:D,x:y,z:v,baseY:T,angle:P,window:N,mountY:W,isBlind:V}=J,it=D.type==="window"&&N?N:D,tt=Rt.get(D.id),pt=tt?dM(tt):Fd(it,{window:V?N:void 0,mountY:W})??Id(it);if(pt){let C=np(D,pt.root);pt.root.position.set(y,T+C,v),pt.root.rotation.y=-P,pt.floorRadius&&(pt.dockFits=I.clearance(y,v)>=pt.floorRadius),s.add(pt.root),st.set(D.id,pt),D.type==="garageDoor"&&yt.set(pt.root,D.id),S.register(D,pt)}et.set(D.id,{x:y,z:v,baseY:T,object:pt})}let Zt={...e.bounds,sceneryMinZ:d.sceneryMinZ};for(let J of e.placements){let D=st.get(J.item.id);if(D&&(D.root.position.y+=_M(e,J,st),D.root.scale.y!==1)){let{max:y}=new Oe().setFromObject(D.root);Number.isFinite(y.y)&&(Zt.maxY=Math.max(Zt.maxY??92,y.y))}}let qt=[...st.values()].filter(J=>J.ambientMotion),Ht=new H,lt=!1,ft=0,wt=0,Dt=Ui(),vt,gt=new fo,Nt=new Tn(new H(0,1,0),0),dt=new H,_t=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function bt(J,D){if(lt||J<1||D<1||J===ft&&D===wt)return;ft=J,wt=D;let y=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(y,1.5,Math.sqrt(27e5/(J*D)))),n.setSize(J,D,!1),sh(r,Zt,J,D,Dt,vt)}function St(J,D){return Dt=Ui(J),vt=D,!lt&&ft>0&&wt>0&&sh(r,Zt,ft,wt,Dt,vt),At()}function At(){return{...Dt}}function Vt(J){if(typeof J=="string"){if(Object.hasOwn(M,J))return{...M[J]};let D=et.get(J);if(!D)return null;let{x:y,z:v,baseY:T,object:P}=D;return P?{x:y,y:P.root.position.y+(P.anchorY??0)*P.root.scale.y,z:v}:{x:y,y:T+6,z:v}}return[J?.x,J?.y].every(Number.isFinite)?{x:J.x,y:(U(J.x,J.y)??0)+22,z:J.y}:null}function Bt(J,D){return lt||!Number.isFinite(J)||!Number.isFinite(D)||ft<=0||wt<=0?!1:(gt.setFromCamera(new Tt(J/ft*2-1,1-D/wt*2),r),!0)}function Yt(J,D,y){return Bt(J,D)?(Nt.constant=-Yp(y),gt.ray.intersectPlane(Nt,dt)?{x:dt.x,y:dt.z}:null):null}function te(J,D){if(!yt.size||!Bt(J,D))return null;let y=[];for(let T of yt.keys())T.traverseVisible(P=>{P.isMesh&&y.push(P)});let v=gt.intersectObjects(y,!1)[0];if(!v||gt.intersectObjects(A,!1).some(T=>T.distance<v.distance-.01))return null;for(let T=v.object;T;T=T.parent)if(yt.has(T))return yt.get(T);return null}function G(J=!1){n.render(s,r);let D=!J&&Y.scene.children.length>0;if(!(!Q?.hasVisibleTracks&&!D)){n.autoClear=!1;try{n.clearDepth(),D&&n.render(Y.scene,r),Q?.hasVisibleTracks&&n.render(B,r)}finally{n.autoClear=!0}}}function oe(J=0,D={},y={},{animateTelemetry:v=!0,showTelemetryPosition:T=!0,draftPositions:P,transientTelemetry:N=!1}={}){if(lt||ft<1||wt<1)return;S.update(y,D,u);let W=y.reduceMotion===!0,V=!W&&Number.isFinite(J)?J:0,it=v?V:0;!x&&y.traffic&&(x=Rp(g),s.add(x.root)),x?.update(J,y.traffic,{reduceMotion:W,night:y.night===!0,transientTelemetry:N}),L(it,y.condition),E=y,b.update(V,E);for(let[pt,C]of st){let j=D[pt]??_t,q=j.position,mt=q&&Number.isFinite(q.x)&&Number.isFinite(q.y)&&(!C.floorRadius||I.clearance(q.x,q.y)>=C.floorRadius);mt&&!N&&(C.telemetryPosition=q);let xt=N?mt?q:null:C.telemetryPosition,ht=P?.[pt]?.position??(T?xt:null),Mt=et.get(pt);C.root.position.x=ht?.x??Mt.x,C.root.position.z=ht?.y??Mt.z,C.floorRadius&&(C.root.visible=!!(ht||!T||C.dockFits)),C.animate?.(j,C.ambientMotion?V:it,!!(mt&&T),N)}let tt=N?ct:X;Q!==tt&&(Q?.setVisible(!1),N||ct?.setTracks([],0),Q=tt,Q?.setVisible(!0)),Q?.render(J,W),G(N)}function Wt(J,D,y={}){lt||(y.transientTelemetry?(!ct&&J?.length&&(ct=rh(B,U,k),ct.setVisible(!1)),ct?.setTracks(J,D,y)):X.setTracks(J,D,y))}function F(J){if(!(lt||ft<1||wt<1)){b.update(J,E);for(let D of qt)D.animate(_t,J);X.render(J),G()}}function w(J){let D=et.get(J);if(!D||ft<1||wt<1)return null;let{x:y,z:v,baseY:T,object:P}=D;if(P){if(!P.root.visible)return null;Ht.set(P.anchorOffset?.x||0,P.anchorY||0,P.anchorOffset?.z||0),P.root.localToWorld(Ht)}else Ht.set(y,T+6,v);return Ht.project(r),{x:(Ht.x+1)/2,y:(1-Ht.y)/2}}function nt(){if(lt)return;lt=!0,X.dispose(),ct?.dispose(),Y.dispose(),x?.dispose();let J=new Set,D=new Set,y=new Set;s.traverse(v=>{v.geometry&&J.add(v.geometry);for(let T of Array.isArray(v.material)?v.material:[v.material])if(T){D.add(T);for(let P of Object.values(T))P?.isTexture&&y.add(P)}});for(let v of y)v.dispose();for(let v of J)v.dispose();for(let v of D)v.dispose();S.dispose(),n.dispose()}return{resize:bt,render:oe,anchor:w,setView:St,getView:At,getDemoFocus:Vt,projectToPlan:Yt,pickGarage:te,exteriorClearance:()=>vM(e,r,ft,wt),dispose:nt,hasAmbientMotion:!0,renderAmbient:F,setPeople:Wt,setDetectionZones:Y.setZones,canPlacePerson:(J,D)=>Number.isFinite(U(J,D))&&O.clearance(J,D)>0,get hasPeopleMotion(){return Q?.hasMotion??!1}}}var Jp=.35,bl=7.5,SM=8;function $p(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let m=t();return m?.preset==="free"?m:null},o=()=>{let[m,p]=s.values();return Math.hypot(m.x-p.x,m.y-p.y)};function a(m,p){let M=Ui({...m,...p});(M.azimuth!==m.azimuth||M.tilt!==m.tilt||M.zoom!==m.zoom)&&e(M)}function c(m){i.hasPointerCapture(m)&&i.releasePointerCapture(m)}function l(){for(let m of[...s.keys()])s.delete(m),c(m)}function u(m){if(!r()||m.defaultPrevented||m.button!==0||!n(m))return;let p=m.pointerType==="touch";if(!(s.size>=2||s.size&&(!p||!s.values().next().value.touch))){try{i.setPointerCapture(m.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(m.pointerId,{x:m.clientX,y:m.clientY,touch:p}),m.preventDefault()}}function f(m){let p=s.get(m.pointerId);if(!p)return;let M=r();if(!M){l();return}let A=s.size===2,S=A?o():0,b={x:m.clientX,y:m.clientY,touch:p.touch};if(s.set(m.pointerId,b),m.preventDefault(),A){let E=o();Math.min(S,E)>=SM&&a(M,{zoom:M.zoom*E/S});return}a(M,{azimuth:M.azimuth-(b.x-p.x)*Jp,tilt:M.tilt+(b.y-p.y)*Jp})}function h(m){s.delete(m.pointerId)&&c(m.pointerId)}function d(m){let p=r();if(!p||!Number.isFinite(m.deltaY)||!m.deltaY)return;let M=m.deltaMode===1?16:m.deltaMode===2?i.clientHeight:1,A=Math.max(-350,Math.min(350,m.deltaY*M));m.preventDefault(),m.stopPropagation(),a(p,{zoom:p.zoom*Math.exp(-A*.002)})}function g(m){let p=r();if(!p||m.altKey||m.ctrlKey||m.metaKey||m.defaultPrevented)return;let M;switch(m.key){case"ArrowLeft":M={azimuth:p.azimuth-bl};break;case"ArrowRight":M={azimuth:p.azimuth+bl};break;case"ArrowUp":M={tilt:p.tilt-bl};break;case"ArrowDown":M={tilt:p.tilt+bl};break;case"+":case"=":M={zoom:p.zoom*1.1};break;case"-":M={zoom:p.zoom/1.1};break;default:return}m.preventDefault(),m.stopPropagation(),a(p,M)}let x=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",g]];for(let[m,p,M]of x)i.addEventListener(m,p,M);return{cancel:l,dispose(){l();for(let[m,p,M]of x)i.removeEventListener(m,p,M)}}}var zw=1200*1e3;function Kp(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,g,x=1/0;for(let p=0;p<=h&&(f||!d);p++)for(let[M,A]of p===0?s.slice(0,1):s.slice(1)){let S=o(a.x+M*p*34,c/2,t-c/2),b=o(a.y+A*p*34,l/2,e-l/2);if(n.some(_=>Math.abs(S-_.x)<(c+_.w)/2+2&&Math.abs(b-_.y)<(l+_.h)/2+2))continue;if(p<=3&&!d&&(d={...a,x:S,y:b,w:c,h:l}),!f)break;if(u.some(_=>S+c/2>_.left&&S-c/2<_.right&&b+l/2>_.top&&b-l/2<_.bottom))continue;let L=Math.hypot(S-a.x,b-a.y);L<x&&(g={...a,x:S,y:b,w:c,h:l},x=L)}let m=g??d;m&&n.push(m)}return n}var em=Ml(Jc(),1),jp="roomcraft-presence-v1",Qp=4500,nm=/^sensor\.[a-z0-9_]+$/,EM=4,xh=1536,yh=1024,wM=[[[0,0],[xh,0],[xh,yh],[0,yh],[0,0]]],tm=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],TM=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...tm.map(([i,t])=>[t,i]),...tm.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function im(i,t){return i>=0&&i<=xh&&t>=0&&t<=yh}function sm(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function AM(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function rm(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!sm(s))continue;let[r,o,a,c,l,u]=s,f=TM.get(n.presenceTrackProfile),h=Math.hypot(o,l),d=im(a,u)?{origin:{x:a,y:u},forward:{x:o/h,y:l/h}}:{},g=t.length;for(let[x,m]of[["configured",AM(n.presenceTrackZone)],["nominal",f?.ring]]){if(!m)continue;let p=m.map(([M,A])=>[r*M+o*A+a,c*M+l*A+u]);for(let[M]of em.default.intersection([p],wM))t.push({id:n.id,kind:x,points:M.slice(0,-1).map(([A,S])=>({x:A,y:S})),...d,...x==="nominal"?{rangeMeters:f.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function RM(i={},t=[]){let e={};for(let n of new Set(t)){if(!nm.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==jp)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,EM):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:jp,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function om(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!nm.test(o||"")||s.has(o)||!sm(a))continue;s.add(o);let c=RM(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=Qp)continue;let[f,h,d,g,x,m]=a;for(let p of u){let M=f*p.x+h*p.y+d,A=g*p.x+x*p.y+m;im(M,A)&&n.push({id:o+":"+p.id,x:M,y:A,expiresAt:l+Qp})}}return n}var CM=22,IM=5,PM=1e3/12,LM=1e3,DM=12;function NM(i,t,e){let n=Kp(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>n.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&n.push(l)}return n}function UM(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function FM(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=CM;return!f&&(a.type==="garageDoor"||!UM(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function OM(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Qd(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),f=i.getElementById("sceneDefaultStatus"),h=ep(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=i.createElement("label");x.className="scene-dashboard-look",x.hidden=!0,x.title="Lighting and device appearance from the last dashboard import";let m=i.createElement("input");m.type="checkbox",m.checked=!0,x.append(m," Dashboard look"),a?.append(x);let p=i.createElement("div");p.className="scene-selection",p.setAttribute("aria-hidden","true"),Object.assign(p.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(p);let M=i.createElement("div");M.className="scene-placeholders",Object.assign(M.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(M);let A=i.createElementNS("http://www.w3.org/2000/svg","svg");A.classList.add("scene-placeholder-leaders"),A.setAttribute("aria-hidden","true"),Object.assign(A.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(A,M);let S=new Map,b=i.getElementById("miniHelp"),E=b?.textContent,L=n.getAttribute("aria-label")??"Editable three-dimensional home view",_,I,O,U=ih(null),B=r.value,Y="default",z,Z,k,X=-1/0,ct=0,Q=!1,et=!1,st=null,yt=!1,Rt=[],Zt=[],qt="",Ht=0,lt,ft=!1,wt={},Dt={key:"",scene:null,reduceMotion:!1},vt={id:null,scene:null},gt=()=>B!=="plan",Nt=()=>B==="free",dt=()=>n.getBoundingClientRect(),_t=Et=>{let Gt=dt();return{x:Et.clientX-Gt.left,y:Et.clientY-Gt.top}};function bt(Et){e.showStatus?.(Et)}function St(){if(!(!Q&&(_?.hasAmbientMotion||_?.hasPeopleMotion)&&gt()&&!i.hidden&&!d?.matches)){t.cancelAnimationFrame(k),k=void 0;return}k===void 0&&(k=t.requestAnimationFrame(Gt=>{if(k=void 0,Gt-X>=PM-1){X=Gt,ct=Gt/1e3;try{_.renderAmbient(ct)}catch{J()}}St()}))}function At(Et=!0){let Gt=gt()?_:null,Qt=d?.matches===!0,ne=Vt()?om(Rt,wt):[],De=JSON.stringify(ne);De===Dt.key&&Gt===Dt.scene&&Qt===Dt.reduceMotion||(Dt={key:De,scene:Gt,reduceMotion:Qt},Gt&&(Gt.setPeople(ne,(t.performance?.now()??0)/1e3,{reduceMotion:Qt}),Et&&G()),e.setPersonPreview?.(Gt?[]:ne))}function Vt(){return!!(g?.request&&Zt.length&&!Q&&!i.hidden)}async function Bt(Et=!0){if(Et&&At(),ft||!Vt())return;ft=!0;let Gt=Ht;try{let Qt=await g.request("TRACK_GET",Zt);Gt===Ht&&Vt()&&(wt=Qt&&typeof Qt=="object"?Qt:{},At())}catch{Gt===Ht&&(wt={},At())}finally{ft=!1}}function Yt(){Vt()?lt===void 0&&(lt=t.setInterval(Bt,LM),Bt(!1)):lt!==void 0&&(t.clearInterval(lt),lt=void 0,Ht++,wt={})}function te(Et){Rt=Et.filter(ne=>ne.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ne.presenceTrackEntityId)&&Array.isArray(ne.presenceTrackTransform));let Gt=[...new Set(Rt.map(ne=>ne.presenceTrackEntityId))].slice(0,DM),Qt=Gt.join(",");Qt!==qt&&(qt=Qt,Zt=Gt,Ht++,wt={}),Yt()}function G(Et){if(St(),!_||!gt())return;let{width:Gt,height:Qt}=dt();if(!Gt||!Qt)return;_.resize(Gt,Qt);let ne=e.getSelection(),De=ne?.kind==="item"?ne.id:null;if(vt.scene!==_||vt.id!==De){let Qe=I.items.find(yn=>yn.id===De);_.setDetectionZones(Qe?rm([Qe]):[]),vt={id:De,scene:_}}let Sn=e.getPreview?.();x.hidden=!Sn?.environment;let Vn=!x.hidden&&m.checked,Ln=Object.create(null);if(Vn)for(let Qe of I.items){let yn=Sn.states?.[Qe.id];yn&&yn.entityId===Qe.entityId&&(Ln[Qe.id]=yn)}let as=Vn?Sn.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(_.render(ct,Ln,{...as,reduceMotion:d?.matches===!0},{animateTelemetry:!1,showTelemetryPosition:Vn,draftPositions:Et}),Nt())return;let je=[];for(let[Qe,yn]of S){let Gn=_.anchor(Qe);yn.hidden=!Gn,Gn&&je.push({id:Qe,marker:yn,x:Gn.x*Gt,y:Gn.y*Qt,w:96,h:44})}let Mr=NM(je,Gt,Qt),zo=new Set(Mr.map(Qe=>Qe.id)),ko=[];for(let Qe of Mr){let{marker:yn,x:Gn,y:R,w:$,h:ut,id:at}=Qe;Object.assign(yn.style,{left:`${Gn}px`,top:`${R}px`,width:`${$}px`,height:`${ut}px`});let ot=je.find(It=>It.id===at);if(Math.hypot(ot.x-Gn,ot.y-R)>8){let It=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[Ut,Lt]of Object.entries({x1:ot.x,y1:ot.y,x2:Gn,y2:R}))It.setAttribute(Ut,Lt);It.setAttribute("stroke","#6f816b"),It.setAttribute("stroke-width","1"),It.setAttribute("stroke-dasharray","3 3"),ko.push(It)}}for(let[Qe,yn]of S)yn.hidden=!zo.has(Qe);A.replaceChildren(...ko);let Ts=ne?.kind==="item"?_.anchor(ne.id):null;p.style.display=Ts?"block":"none",Ts&&(p.style.left=`${Ts.x*Gt}px`,p.style.top=`${Ts.y*Qt}px`)}function oe(){if(!z)return;let Et=z;z=void 0;try{n.releasePointerCapture(Et.pointerId)}catch{}Et.item&&G({[Et.item.id]:{position:{x:Et.item.x,y:Et.item.y}}})}function Wt(){a&&(a.hidden=!gt());for(let Et of Object.values(o))Et&&(Et.disabled=!gt());l&&(l.hidden=!_||!Nt(),l.disabled=yt),u&&(u.hidden=!_||!gt()||!st,u.disabled=yt)}function F(Et){f&&(f.textContent=Et)}function w(){et=!0,F("")}function nt(){n.tabIndex=Nt()?0:-1,n.style.cursor=Nt()?"grab":"",n.setAttribute("aria-label",Nt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":L)}function rt(Et,{initial:Gt=!1}={}){Gt||(w(),Et==="default"&&(et=!1)),W.cancel(),oe();let Qt=_?.getView()??U,ne=Object.hasOwn(_r,Et)?Et:"plan";ne!=="plan"&&e.useSelectTool?.(),B=ne,gt()&&!Nt()&&(Y=B),r.value=B,n.hidden=!gt(),nt();let De=gt()&&!Nt();if(M.style.display=De?"block":"none",A.style.display=De?"block":"none",De||(p.style.display="none"),b&&(Nt()?b.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":b.textContent=gt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":E),s.classList.toggle("scene-3d",gt()),Wt(),!gt()){D(),St(),x.hidden=!0,bt("Plan view \xB7 edit rooms, walls, floors and objects");return}let Sn=B==="default"?ih(st):Nt()?tp(Qt):{preset:B};U=_?_.setView(Sn):Sn,D(),_&&bt(Nt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function J(){W.cancel(),_?.dispose(),_=void 0,O=void 0,B="plan",St(),r.value=B,n.hidden=!0,x.hidden=!0,nt(),M.style.display="none",A.style.display="none",b&&(b.textContent=E),s.classList.remove("scene-3d"),p.style.display="none",Wt(),At(!1),bt("3D view is unavailable on this screen. Plan view is ready.")}function D(){if(Q)return;let Et=e.getProject();if(te(Et.items),!gt()){At();return}let Gt=JSON.stringify(Et);try{if(!_||Gt!==O){oe(),_&&(U=_.getView()),_?.dispose(),_=void 0,I=Et,_=Zp(n,I),_.setView(U),O=Gt,S.clear(),M.replaceChildren();for(let Qt of I.items.filter(ne=>ne.type==="cameraThumbnail"||ne.type.startsWith("ui"))){let ne=i.createElement("button");ne.type="button",ne.className="scene-placeholder",ne.textContent=Qt.name||(Qt.type==="cameraThumbnail"?"Camera":"Interface"),ne.setAttribute("aria-label",`Select ${ne.textContent}`),Object.assign(ne.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ne.addEventListener("pointerdown",De=>V(De,Qt.id)),ne.addEventListener("click",De=>{!Nt()&&De.detail===0&&(e.selectItem(Qt.id),G())}),S.set(Qt.id,ne),M.append(ne)}}Wt(),At(!1),G()}catch{J()}}function y(Et){!_||!gt()||(w(),oe(),_.setView(Et(_.getView())),U=_.getView(),G())}let v=()=>D(),T=()=>{let Et=e.getTool();gt()&&Et!=="select"?rt("plan"):Nt()&&e.hasPlacement()?rt(Y):gt()&&G()},P=()=>rt(r.value),N=()=>{t.cancelAnimationFrame(Z),Z=t.requestAnimationFrame(()=>G())},W=$p(n,{getView:()=>Nt()?_?.getView():null,onChange:Et=>{!_||!Nt()||(w(),U=_.setView(Et),N())}}),V=(Et,Gt=null)=>{if(!gt()||Nt()||!_||Et.button!==0||z)return;Et.preventDefault(),Et.stopPropagation();let Qt=_t(Et);if(e.hasPlacement()){let je=_.projectToPlan(Qt.x,Qt.y,e.getPlacementType());je&&e.placeAt(je.x,je.y),D();return}let{width:ne,height:De}=dt(),Sn=new Map(I.items.map(je=>[je.id,_.anchor(je.id)])),Vn=Gt??_.pickGarage(Qt.x,Qt.y),Ln=Vn?I.items.find(je=>je.id===Vn):FM(I.items,Qt,_.projectToPlan(Qt.x,Qt.y),Sn,ne,De);if(e.selectItem(Ln?.id??null),!Ln){G();return}let as=_.projectToPlan(Qt.x,Qt.y,Ln.type);as&&(z={item:{...Ln},startScreen:Qt,startPlan:as,pointerId:Et.pointerId},n.setPointerCapture(Et.pointerId),G())},it=Et=>{if(!gt()||Nt()||(Et.stopPropagation(),!z||z.pointerId!==Et.pointerId||!_))return;let Gt=_t(Et);if(!z.moved&&Math.hypot(Gt.x-z.startScreen.x,Gt.y-z.startScreen.y)<IM)return;let Qt=_.projectToPlan(Gt.x,Gt.y,z.item.type);Qt&&(z.moved=!0,z.position={x:z.item.x+Qt.x-z.startPlan.x,y:z.item.y+Qt.y-z.startPlan.y},G({[z.item.id]:{position:z.position}}))},tt=Et=>{if(!gt()||Nt()||(Et.stopPropagation(),!z||z.pointerId!==Et.pointerId))return;let Gt=z;z=void 0;try{n.releasePointerCapture(Et.pointerId)}catch{}Gt.moved&&Gt.position?(e.moveItem(Gt.item.id,Gt.position.x,Gt.position.y),D()):G()},pt=Et=>{Nt()||(z?.pointerId===Et.pointerId&&oe(),Et.stopPropagation())},C=Et=>{!gt()||Nt()||(Et.preventDefault(),Et.stopPropagation(),y(Gt=>({...Gt,zoom:Gt.zoom*(Et.deltaY<0?1.1:1/1.1)})))},j=Et=>{Nt()&&Et.target===n&&(Et.key==="Delete"||Et.key==="Backspace")&&(Et.preventDefault(),Et.stopImmediatePropagation()),Et.key==="Escape"&&z&&(Et.preventDefault(),Et.stopImmediatePropagation(),oe())},q=Et=>{Et.preventDefault(),J()},mt=()=>y(Et=>({...Et,azimuth:Et.azimuth-15})),xt=()=>y(Et=>({...Et,azimuth:Et.azimuth+15})),ht=()=>y(Et=>({...Et,zoom:Et.zoom/1.2})),Mt=()=>y(Et=>({...Et,zoom:Et.zoom*1.2})),Ct=()=>rt("top"),ie=()=>G(),Kt=()=>{At(!1),G()},ye=()=>{Yt(),At(),St()};i.addEventListener("visibilitychange",ye),d?.addEventListener("change",Kt);async function Se(){yt=!0,Wt();try{st=await h.read(),!Q&&!et&&rt("default",{initial:!0})}catch{Q||F("Saved view unavailable")}finally{yt=!1,Q||Wt()}}async function $e(Et){if(!(!_||!gt()||yt)){yt=!0,F("Saving view\u2026"),Wt();try{if(await h.write(Et),Q)return;st=Et,Et||rt("default"),F(Et?"Default view saved":"Top down is the default")}catch{Q||F("Could not save default view")}finally{yt=!1,Q||Wt()}}}let Ue=()=>{Nt()&&_&&$e(_.getView())},Ke=()=>$e(null);o.left?.addEventListener("click",mt),o.right?.addEventListener("click",xt),o.out?.addEventListener("click",ht),o.in?.addEventListener("click",Mt),c?.addEventListener("click",Ct),l?.addEventListener("click",Ue),u?.addEventListener("click",Ke),m.addEventListener("change",ie),r.addEventListener("change",P),n.addEventListener("pointerdown",V),n.addEventListener("pointermove",it),n.addEventListener("pointerup",tt),n.addEventListener("pointercancel",pt),n.addEventListener("lostpointercapture",pt),n.addEventListener("wheel",C,{passive:!1}),n.addEventListener("webglcontextlost",q),t.addEventListener("keydown",j,!0),t.addEventListener("roomcraft-editor-change",v),t.addEventListener("roomcraft-editor-tool",T);let qe=new t.ResizeObserver(N);return qe.observe(s),rt(B,{initial:!0}),Se(),{getView:()=>_?.getView()??{...U},setView:rt,dispose(){Q=!0,St(),Yt(),i.removeEventListener("visibilitychange",ye),d?.removeEventListener("change",Kt),oe(),W.dispose(),B="plan",nt(),qe.disconnect(),t.cancelAnimationFrame(Z),_?.dispose(),_=void 0,p.remove(),M.remove(),A.remove(),x.remove(),m.removeEventListener("change",ie),b&&(b.textContent=E),o.left?.removeEventListener("click",mt),o.right?.removeEventListener("click",xt),o.out?.removeEventListener("click",ht),o.in?.removeEventListener("click",Mt),c?.removeEventListener("click",Ct),l?.removeEventListener("click",Ue),u?.removeEventListener("click",Ke),r.removeEventListener("change",P),n.removeEventListener("pointerdown",V),n.removeEventListener("pointermove",it),n.removeEventListener("pointerup",tt),n.removeEventListener("pointercancel",pt),n.removeEventListener("lostpointercapture",pt),n.removeEventListener("wheel",C),n.removeEventListener("webglcontextlost",q),t.removeEventListener("keydown",j,!0),t.removeEventListener("roomcraft-editor-change",v),t.removeEventListener("roomcraft-editor-tool",T)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=mh,OM(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
