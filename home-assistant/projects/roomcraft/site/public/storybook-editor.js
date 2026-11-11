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
"use strict";(()=>{var zp=Object.create;var uh=Object.defineProperty;var kp=Object.getOwnPropertyDescriptor;var Vp=Object.getOwnPropertyNames;var Hp=Object.getPrototypeOf,Gp=Object.prototype.hasOwnProperty;var Wp=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Xp=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Vp(t))!Gp.call(i,s)&&s!==e&&uh(i,s,{get:()=>t[s],enumerable:!(n=kp(t,s))||n.enumerable});return i};var hl=(i,t,e)=>(e=i!=null?zp(Hp(i)):{},Xp(t||!i||!i.__esModule?uh(e,"default",{value:i,enumerable:!0}):e,i));var kc=Wp((ku,Vu)=>{(function(i,t){typeof ku=="object"&&typeof Vu<"u"?Vu.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(ku,(function(){"use strict";/**
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
    ***************************************************************************** */function i(F,y){var v={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},A,P,D,G;return G={next:H(0),throw:H(1),return:H(2)},typeof Symbol=="function"&&(G[Symbol.iterator]=function(){return this}),G;function H(Q){return function(xt){return tt([Q,xt])}}function tt(Q){if(A)throw new TypeError("Generator is already executing.");for(;v;)try{if(A=1,P&&(D=Q[0]&2?P.return:Q[0]?P.throw||((D=P.return)&&D.call(P),0):P.next)&&!(D=D.call(P,Q[1])).done)return D;switch(P=0,D&&(Q=[Q[0]&2,D.value]),Q[0]){case 0:case 1:D=Q;break;case 4:return v.label++,{value:Q[1],done:!1};case 5:v.label++,P=Q[1],Q=[0];continue;case 7:Q=v.ops.pop(),v.trys.pop();continue;default:if(D=v.trys,!(D=D.length>0&&D[D.length-1])&&(Q[0]===6||Q[0]===2)){v=0;continue}if(Q[0]===3&&(!D||Q[1]>D[0]&&Q[1]<D[3])){v.label=Q[1];break}if(Q[0]===6&&v.label<D[1]){v.label=D[1],D=Q;break}if(D&&v.label<D[2]){v.label=D[2],v.ops.push(Q);break}D[2]&&v.ops.pop(),v.trys.pop();continue}Q=y.call(F,v)}catch(xt){Q=[6,xt],P=0}finally{A=D=0}if(Q[0]&5)throw Q[1];return{value:Q[0]?Q[1]:void 0,done:!0}}}var t=(function(){function F(y,v){this.next=null,this.key=y,this.data=v,this.left=null,this.right=null}return F})();function e(F,y){return F>y?1:F<y?-1:0}function n(F,y,v){for(var A=new t(null,null),P=A,D=A;;){var G=v(F,y.key);if(G<0){if(y.left===null)break;if(v(F,y.left.key)<0){var H=y.left;if(y.left=H.right,H.right=y,y=H,y.left===null)break}D.left=y,D=y,y=y.left}else if(G>0){if(y.right===null)break;if(v(F,y.right.key)>0){var H=y.right;if(y.right=H.left,H.left=y,y=H,y.right===null)break}P.right=y,P=y,y=y.right}else break}return P.right=y.left,D.left=y.right,y.left=A.right,y.right=A.left,y}function s(F,y,v,A){var P=new t(F,y);if(v===null)return P.left=P.right=null,P;v=n(F,v,A);var D=A(F,v.key);return D<0?(P.left=v.left,P.right=v,v.left=null):D>=0&&(P.right=v.right,P.left=v,v.right=null),P}function r(F,y,v){var A=null,P=null;if(y){y=n(F,y,v);var D=v(y.key,F);D===0?(A=y.left,P=y.right):D<0?(P=y.right,y.right=null,A=y):(A=y.left,y.left=null,P=y)}return{left:A,right:P}}function o(F,y,v){return y===null?F:(F===null||(y=n(F.key,y,v),y.left=F),y)}function a(F,y,v,A,P){if(F){A(""+y+(v?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+P(F)+`
`);var D=y+(v?"    ":"\u2502   ");F.left&&a(F.left,D,!1,A,P),F.right&&a(F.right,D,!0,A,P)}}var c=(function(){function F(y){y===void 0&&(y=e),this._root=null,this._size=0,this._comparator=y}return F.prototype.insert=function(y,v){return this._size++,this._root=s(y,v,this._root,this._comparator)},F.prototype.add=function(y,v){var A=new t(y,v);this._root===null&&(A.left=A.right=null,this._size++,this._root=A);var P=this._comparator,D=n(y,this._root,P),G=P(y,D.key);return G===0?this._root=D:(G<0?(A.left=D.left,A.right=D,D.left=null):G>0&&(A.right=D.right,A.left=D,D.right=null),this._size++,this._root=A),this._root},F.prototype.remove=function(y){this._root=this._remove(y,this._root,this._comparator)},F.prototype._remove=function(y,v,A){var P;if(v===null)return null;v=n(y,v,A);var D=A(y,v.key);return D===0?(v.left===null?P=v.right:(P=n(y,v.left,A),P.right=v.right),this._size--,P):v},F.prototype.pop=function(){var y=this._root;if(y){for(;y.left;)y=y.left;return this._root=n(y.key,this._root,this._comparator),this._root=this._remove(y.key,this._root,this._comparator),{key:y.key,data:y.data}}return null},F.prototype.findStatic=function(y){for(var v=this._root,A=this._comparator;v;){var P=A(y,v.key);if(P===0)return v;P<0?v=v.left:v=v.right}return null},F.prototype.find=function(y){return this._root&&(this._root=n(y,this._root,this._comparator),this._comparator(y,this._root.key)!==0)?null:this._root},F.prototype.contains=function(y){for(var v=this._root,A=this._comparator;v;){var P=A(y,v.key);if(P===0)return!0;P<0?v=v.left:v=v.right}return!1},F.prototype.forEach=function(y,v){for(var A=this._root,P=[],D=!1;!D;)A!==null?(P.push(A),A=A.left):P.length!==0?(A=P.pop(),y.call(v,A),A=A.right):D=!0;return this},F.prototype.range=function(y,v,A,P){for(var D=[],G=this._comparator,H=this._root,tt;D.length!==0||H;)if(H)D.push(H),H=H.left;else{if(H=D.pop(),tt=G(H.key,v),tt>0)break;if(G(H.key,y)>=0&&A.call(P,H))return this;H=H.right}return this},F.prototype.keys=function(){var y=[];return this.forEach(function(v){var A=v.key;return y.push(A)}),y},F.prototype.values=function(){var y=[];return this.forEach(function(v){var A=v.data;return y.push(A)}),y},F.prototype.min=function(){return this._root?this.minNode(this._root).key:null},F.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},F.prototype.minNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.left;)y=y.left;return y},F.prototype.maxNode=function(y){if(y===void 0&&(y=this._root),y)for(;y.right;)y=y.right;return y},F.prototype.at=function(y){for(var v=this._root,A=!1,P=0,D=[];!A;)if(v)D.push(v),v=v.left;else if(D.length>0){if(v=D.pop(),P===y)return v;P++,v=v.right}else A=!0;return null},F.prototype.next=function(y){var v=this._root,A=null;if(y.right){for(A=y.right;A.left;)A=A.left;return A}for(var P=this._comparator;v;){var D=P(y.key,v.key);if(D===0)break;D<0?(A=v,v=v.left):v=v.right}return A},F.prototype.prev=function(y){var v=this._root,A=null;if(y.left!==null){for(A=y.left;A.right;)A=A.right;return A}for(var P=this._comparator;v;){var D=P(y.key,v.key);if(D===0)break;D<0?v=v.left:(A=v,v=v.right)}return A},F.prototype.clear=function(){return this._root=null,this._size=0,this},F.prototype.toList=function(){return f(this._root)},F.prototype.load=function(y,v,A){v===void 0&&(v=[]),A===void 0&&(A=!1);var P=y.length,D=this._comparator;if(A&&g(y,v,0,P-1,D),this._root===null)this._root=l(y,v,0,P),this._size=P;else{var G=d(this.toList(),u(y,v),D);P=this._size+P,this._root=h({head:G},0,P)}return this},F.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(F.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(F.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),F.prototype.toString=function(y){y===void 0&&(y=function(A){return String(A.key)});var v=[];return a(this._root,"",!0,function(A){return v.push(A)},y),v.join("")},F.prototype.update=function(y,v,A){var P=this._comparator,D=r(y,this._root,P),G=D.left,H=D.right;P(y,v)<0?H=s(v,A,H,P):G=s(v,A,G,P),this._root=o(G,H,P)},F.prototype.split=function(y){return r(y,this._root,this._comparator)},F.prototype[Symbol.iterator]=function(){var y,v,A;return i(this,function(P){switch(P.label){case 0:y=this._root,v=[],A=!1,P.label=1;case 1:return A?[3,6]:y===null?[3,2]:(v.push(y),y=y.left,[3,5]);case 2:return v.length===0?[3,4]:(y=v.pop(),[4,y]);case 3:return P.sent(),y=y.right,[3,5];case 4:A=!0,P.label=5;case 5:return[3,1];case 6:return[2]}})},F})();function l(F,y,v,A){var P=A-v;if(P>0){var D=v+Math.floor(P/2),G=F[D],H=y[D],tt=new t(G,H);return tt.left=l(F,y,v,D),tt.right=l(F,y,D+1,A),tt}return null}function u(F,y){for(var v=new t(null,null),A=v,P=0;P<F.length;P++)A=A.next=new t(F[P],y[P]);return A.next=null,v.next}function f(F){for(var y=F,v=[],A=!1,P=new t(null,null),D=P;!A;)y?(v.push(y),y=y.left):v.length>0?(y=D=D.next=v.pop(),y=y.right):A=!0;return D.next=null,P.next}function h(F,y,v){var A=v-y;if(A>0){var P=y+Math.floor(A/2),D=h(F,y,P),G=F.head;return G.left=D,F.head=F.head.next,G.right=h(F,P+1,v),G}return null}function d(F,y,v){for(var A=new t(null,null),P=A,D=F,G=y;D!==null&&G!==null;)v(D.key,G.key)<0?(P.next=D,D=D.next):(P.next=G,G=G.next),P=P.next;return D!==null?P.next=D:G!==null&&(P.next=G),A.next}function g(F,y,v,A,P){if(!(v>=A)){for(var D=F[v+A>>1],G=v-1,H=A+1;;){do G++;while(P(F[G],D)<0);do H--;while(P(F[H],D)>0);if(G>=H)break;var tt=F[G];F[G]=F[H],F[H]=tt,tt=y[G],y[G]=y[H],y[H]=tt}g(F,y,v,H,P),g(F,y,H+1,A,P)}}let x=(F,y)=>F.ll.x<=y.x&&y.x<=F.ur.x&&F.ll.y<=y.y&&y.y<=F.ur.y,m=(F,y)=>{if(y.ur.x<F.ll.x||F.ur.x<y.ll.x||y.ur.y<F.ll.y||F.ur.y<y.ll.y)return null;let v=F.ll.x<y.ll.x?y.ll.x:F.ll.x,A=F.ur.x<y.ur.x?F.ur.x:y.ur.x,P=F.ll.y<y.ll.y?y.ll.y:F.ll.y,D=F.ur.y<y.ur.y?F.ur.y:y.ur.y;return{ll:{x:v,y:P},ur:{x:A,y:D}}},p=Number.EPSILON;p===void 0&&(p=Math.pow(2,-52));let b=p*p,T=(F,y)=>{if(-p<F&&F<p&&-p<y&&y<p)return 0;let v=F-y;return v*v<b*F*y?0:F<y?-1:1};class M{constructor(){this.reset()}reset(){this.xRounder=new S,this.yRounder=new S}round(y,v){return{x:this.xRounder.round(y),y:this.yRounder.round(v)}}}class S{constructor(){this.tree=new c,this.round(0)}round(y){let v=this.tree.add(y),A=this.tree.prev(v);if(A!==null&&T(v.key,A.key)===0)return this.tree.remove(y),A.key;let P=this.tree.next(v);return P!==null&&T(v.key,P.key)===0?(this.tree.remove(y),P.key):y}}let w=new M,L=11102230246251565e-32,_=134217729,I=(3+8*L)*L;function O(F,y,v,A,P){let D,G,H,tt,Q=y[0],xt=A[0],C=0,K=0;xt>Q==xt>-Q?(D=Q,Q=y[++C]):(D=xt,xt=A[++K]);let Y=0;if(C<F&&K<v)for(xt>Q==xt>-Q?(G=Q+D,H=D-(G-Q),Q=y[++C]):(G=xt+D,H=D-(G-xt),xt=A[++K]),D=G,H!==0&&(P[Y++]=H);C<F&&K<v;)xt>Q==xt>-Q?(G=D+Q,tt=G-D,H=D-(G-tt)+(Q-tt),Q=y[++C]):(G=D+xt,tt=G-D,H=D-(G-tt)+(xt-tt),xt=A[++K]),D=G,H!==0&&(P[Y++]=H);for(;C<F;)G=D+Q,tt=G-D,H=D-(G-tt)+(Q-tt),Q=y[++C],D=G,H!==0&&(P[Y++]=H);for(;K<v;)G=D+xt,tt=G-D,H=D-(G-tt)+(xt-tt),xt=A[++K],D=G,H!==0&&(P[Y++]=H);return(D!==0||Y===0)&&(P[Y++]=D),Y}function U(F,y){let v=y[0];for(let A=1;A<F;A++)v+=y[A];return v}function z(F){return new Float64Array(F)}let q=(3+16*L)*L,k=(2+12*L)*L,X=(9+64*L)*L*L,W=z(4),$=z(8),ft=z(12),rt=z(16),it=z(4);function ot(F,y,v,A,P,D,G){let H,tt,Q,xt,C,K,Y,mt,gt,ut,Et,It,se,Kt,ge,be,Je,De,$e=F-P,We=v-P,Mt=y-D,Xt=A-D;Kt=$e*Xt,K=_*$e,Y=K-(K-$e),mt=$e-Y,K=_*Xt,gt=K-(K-Xt),ut=Xt-gt,ge=mt*ut-(Kt-Y*gt-mt*gt-Y*ut),be=Mt*We,K=_*Mt,Y=K-(K-Mt),mt=Mt-Y,K=_*We,gt=K-(K-We),ut=We-gt,Je=mt*ut-(be-Y*gt-mt*gt-Y*ut),Et=ge-Je,C=ge-Et,W[0]=ge-(Et+C)+(C-Je),It=Kt+Et,C=It-Kt,se=Kt-(It-C)+(Et-C),Et=se-be,C=se-Et,W[1]=se-(Et+C)+(C-be),De=It+Et,C=De-It,W[2]=It-(De-C)+(Et-C),W[3]=De;let te=U(4,W),ne=k*G;if(te>=ne||-te>=ne||(C=F-$e,H=F-($e+C)+(C-P),C=v-We,Q=v-(We+C)+(C-P),C=y-Mt,tt=y-(Mt+C)+(C-D),C=A-Xt,xt=A-(Xt+C)+(C-D),H===0&&tt===0&&Q===0&&xt===0)||(ne=X*G+I*Math.abs(te),te+=$e*xt+Xt*H-(Mt*Q+We*tt),te>=ne||-te>=ne))return te;Kt=H*Xt,K=_*H,Y=K-(K-H),mt=H-Y,K=_*Xt,gt=K-(K-Xt),ut=Xt-gt,ge=mt*ut-(Kt-Y*gt-mt*gt-Y*ut),be=tt*We,K=_*tt,Y=K-(K-tt),mt=tt-Y,K=_*We,gt=K-(K-We),ut=We-gt,Je=mt*ut-(be-Y*gt-mt*gt-Y*ut),Et=ge-Je,C=ge-Et,it[0]=ge-(Et+C)+(C-Je),It=Kt+Et,C=It-Kt,se=Kt-(It-C)+(Et-C),Et=se-be,C=se-Et,it[1]=se-(Et+C)+(C-be),De=It+Et,C=De-It,it[2]=It-(De-C)+(Et-C),it[3]=De;let Le=O(4,W,4,it,$);Kt=$e*xt,K=_*$e,Y=K-(K-$e),mt=$e-Y,K=_*xt,gt=K-(K-xt),ut=xt-gt,ge=mt*ut-(Kt-Y*gt-mt*gt-Y*ut),be=Mt*Q,K=_*Mt,Y=K-(K-Mt),mt=Mt-Y,K=_*Q,gt=K-(K-Q),ut=Q-gt,Je=mt*ut-(be-Y*gt-mt*gt-Y*ut),Et=ge-Je,C=ge-Et,it[0]=ge-(Et+C)+(C-Je),It=Kt+Et,C=It-Kt,se=Kt-(It-C)+(Et-C),Et=se-be,C=se-Et,it[1]=se-(Et+C)+(C-be),De=It+Et,C=De-It,it[2]=It-(De-C)+(Et-C),it[3]=De;let bn=O(Le,$,4,it,ft);Kt=H*xt,K=_*H,Y=K-(K-H),mt=H-Y,K=_*xt,gt=K-(K-xt),ut=xt-gt,ge=mt*ut-(Kt-Y*gt-mt*gt-Y*ut),be=tt*Q,K=_*tt,Y=K-(K-tt),mt=tt-Y,K=_*Q,gt=K-(K-Q),ut=Q-gt,Je=mt*ut-(be-Y*gt-mt*gt-Y*ut),Et=ge-Je,C=ge-Et,it[0]=ge-(Et+C)+(C-Je),It=Kt+Et,C=It-Kt,se=Kt-(It-C)+(Et-C),Et=se-be,C=se-Et,it[1]=se-(Et+C)+(C-be),De=It+Et,C=De-It,it[2]=It-(De-C)+(Et-C),it[3]=De;let zn=O(bn,ft,4,it,rt);return rt[zn-1]}function vt(F,y,v,A,P,D){let G=(y-D)*(v-P),H=(F-P)*(A-D),tt=G-H,Q=Math.abs(G+H);return Math.abs(tt)>=q*Q?tt:-ot(F,y,v,A,P,D,Q)}let Rt=(F,y)=>F.x*y.y-F.y*y.x,Zt=(F,y)=>F.x*y.x+F.y*y.y,Yt=(F,y,v)=>{let A=vt(F.x,F.y,y.x,y.y,v.x,v.y);return A>0?-1:A<0?1:0},$t=F=>Math.sqrt(Zt(F,F)),at=(F,y,v)=>{let A={x:y.x-F.x,y:y.y-F.y},P={x:v.x-F.x,y:v.y-F.y};return Rt(P,A)/$t(P)/$t(A)},dt=(F,y,v)=>{let A={x:y.x-F.x,y:y.y-F.y},P={x:v.x-F.x,y:v.y-F.y};return Zt(P,A)/$t(P)/$t(A)},Ct=(F,y,v)=>y.y===0?null:{x:F.x+y.x/y.y*(v-F.y),y:v},Ut=(F,y,v)=>y.x===0?null:{x:v,y:F.y+y.y/y.x*(v-F.x)},_t=(F,y,v,A)=>{if(y.x===0)return Ut(v,A,F.x);if(A.x===0)return Ut(F,y,v.x);if(y.y===0)return Ct(v,A,F.y);if(A.y===0)return Ct(F,y,v.y);let P=Rt(y,A);if(P==0)return null;let D={x:v.x-F.x,y:v.y-F.y},G=Rt(D,y)/P,H=Rt(D,A)/P,tt=F.x+H*y.x,Q=v.x+G*A.x,xt=F.y+H*y.y,C=v.y+G*A.y,K=(tt+Q)/2,Y=(xt+C)/2;return{x:K,y:Y}};class pt{static compare(y,v){let A=pt.comparePoints(y.point,v.point);return A!==0?A:(y.point!==v.point&&y.link(v),y.isLeft!==v.isLeft?y.isLeft?1:-1:ht.compare(y.segment,v.segment))}static comparePoints(y,v){return y.x<v.x?-1:y.x>v.x?1:y.y<v.y?-1:y.y>v.y?1:0}constructor(y,v){y.events===void 0?y.events=[this]:y.events.push(this),this.point=y,this.isLeft=v}link(y){if(y.point===this.point)throw new Error("Tried to link already linked events");let v=y.point.events;for(let A=0,P=v.length;A<P;A++){let D=v[A];this.point.events.push(D),D.point=this.point}this.checkForConsuming()}checkForConsuming(){let y=this.point.events.length;for(let v=0;v<y;v++){let A=this.point.events[v];if(A.segment.consumedBy===void 0)for(let P=v+1;P<y;P++){let D=this.point.events[P];D.consumedBy===void 0&&A.otherSE.point.events===D.otherSE.point.events&&A.segment.consume(D.segment)}}}getAvailableLinkedEvents(){let y=[];for(let v=0,A=this.point.events.length;v<A;v++){let P=this.point.events[v];P!==this&&!P.segment.ringOut&&P.segment.isInResult()&&y.push(P)}return y}getLeftmostComparator(y){let v=new Map,A=P=>{let D=P.otherSE;v.set(P,{sine:at(this.point,y.point,D.point),cosine:dt(this.point,y.point,D.point)})};return(P,D)=>{v.has(P)||A(P),v.has(D)||A(D);let{sine:G,cosine:H}=v.get(P),{sine:tt,cosine:Q}=v.get(D);return G>=0&&tt>=0?H<Q?1:H>Q?-1:0:G<0&&tt<0?H<Q?-1:H>Q?1:0:tt<G?-1:tt>G?1:0}}}let Ft=0;class ht{static compare(y,v){let A=y.leftSE.point.x,P=v.leftSE.point.x,D=y.rightSE.point.x,G=v.rightSE.point.x;if(G<A)return 1;if(D<P)return-1;let H=y.leftSE.point.y,tt=v.leftSE.point.y,Q=y.rightSE.point.y,xt=v.rightSE.point.y;if(A<P){if(tt<H&&tt<Q)return 1;if(tt>H&&tt>Q)return-1;let C=y.comparePoint(v.leftSE.point);if(C<0)return 1;if(C>0)return-1;let K=v.comparePoint(y.rightSE.point);return K!==0?K:-1}if(A>P){if(H<tt&&H<xt)return-1;if(H>tt&&H>xt)return 1;let C=v.comparePoint(y.leftSE.point);if(C!==0)return C;let K=y.comparePoint(v.rightSE.point);return K<0?1:K>0?-1:1}if(H<tt)return-1;if(H>tt)return 1;if(D<G){let C=v.comparePoint(y.rightSE.point);if(C!==0)return C}if(D>G){let C=y.comparePoint(v.rightSE.point);if(C<0)return 1;if(C>0)return-1}if(D!==G){let C=Q-H,K=D-A,Y=xt-tt,mt=G-P;if(C>K&&Y<mt)return 1;if(C<K&&Y>mt)return-1}return D>G?1:D<G||Q<xt?-1:Q>xt?1:y.id<v.id?-1:y.id>v.id?1:0}constructor(y,v,A,P){this.id=++Ft,this.leftSE=y,y.segment=this,y.otherSE=v,this.rightSE=v,v.segment=this,v.otherSE=y,this.rings=A,this.windings=P}static fromRing(y,v,A){let P,D,G,H=pt.comparePoints(y,v);if(H<0)P=y,D=v,G=1;else if(H>0)P=v,D=y,G=-1;else throw new Error(`Tried to create degenerate segment at [${y.x}, ${y.y}]`);let tt=new pt(P,!0),Q=new pt(D,!1);return new ht(tt,Q,[A],[G])}replaceRightSE(y){this.rightSE=y,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let y=this.leftSE.point.y,v=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:y<v?y:v},ur:{x:this.rightSE.point.x,y:y>v?y:v}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(y){return y.x===this.leftSE.point.x&&y.y===this.leftSE.point.y||y.x===this.rightSE.point.x&&y.y===this.rightSE.point.y}comparePoint(y){if(this.isAnEndpoint(y))return 0;let v=this.leftSE.point,A=this.rightSE.point,P=this.vector();if(v.x===A.x)return y.x===v.x?0:y.x<v.x?1:-1;let D=(y.y-v.y)/P.y,G=v.x+D*P.x;if(y.x===G)return 0;let H=(y.x-v.x)/P.x,tt=v.y+H*P.y;return y.y===tt?0:y.y<tt?-1:1}getIntersection(y){let v=this.bbox(),A=y.bbox(),P=m(v,A);if(P===null)return null;let D=this.leftSE.point,G=this.rightSE.point,H=y.leftSE.point,tt=y.rightSE.point,Q=x(v,H)&&this.comparePoint(H)===0,xt=x(A,D)&&y.comparePoint(D)===0,C=x(v,tt)&&this.comparePoint(tt)===0,K=x(A,G)&&y.comparePoint(G)===0;if(xt&&Q)return K&&!C?G:!K&&C?tt:null;if(xt)return C&&D.x===tt.x&&D.y===tt.y?null:D;if(Q)return K&&G.x===H.x&&G.y===H.y?null:H;if(K&&C)return null;if(K)return G;if(C)return tt;let Y=_t(D,this.vector(),H,y.vector());return Y===null||!x(P,Y)?null:w.round(Y.x,Y.y)}split(y){let v=[],A=y.events!==void 0,P=new pt(y,!0),D=new pt(y,!1),G=this.rightSE;this.replaceRightSE(D),v.push(D),v.push(P);let H=new ht(P,G,this.rings.slice(),this.windings.slice());return pt.comparePoints(H.leftSE.point,H.rightSE.point)>0&&H.swapEvents(),pt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),A&&(P.checkForConsuming(),D.checkForConsuming()),v}swapEvents(){let y=this.rightSE;this.rightSE=this.leftSE,this.leftSE=y,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let v=0,A=this.windings.length;v<A;v++)this.windings[v]*=-1}consume(y){let v=this,A=y;for(;v.consumedBy;)v=v.consumedBy;for(;A.consumedBy;)A=A.consumedBy;let P=ht.compare(v,A);if(P!==0){if(P>0){let D=v;v=A,A=D}if(v.prev===A){let D=v;v=A,A=D}for(let D=0,G=A.rings.length;D<G;D++){let H=A.rings[D],tt=A.windings[D],Q=v.rings.indexOf(H);Q===-1?(v.rings.push(H),v.windings.push(tt)):v.windings[Q]+=tt}A.rings=null,A.windings=null,A.consumedBy=v,A.leftSE.consumedBy=v.leftSE,A.rightSE.consumedBy=v.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let y=this.prev.consumedBy||this.prev;this._beforeState=y.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let y=this.beforeState();this._afterState={rings:y.rings.slice(0),windings:y.windings.slice(0),multiPolys:[]};let v=this._afterState.rings,A=this._afterState.windings,P=this._afterState.multiPolys;for(let H=0,tt=this.rings.length;H<tt;H++){let Q=this.rings[H],xt=this.windings[H],C=v.indexOf(Q);C===-1?(v.push(Q),A.push(xt)):A[C]+=xt}let D=[],G=[];for(let H=0,tt=v.length;H<tt;H++){if(A[H]===0)continue;let Q=v[H],xt=Q.poly;if(G.indexOf(xt)===-1)if(Q.isExterior)D.push(xt);else{G.indexOf(xt)===-1&&G.push(xt);let C=D.indexOf(Q.poly);C!==-1&&D.splice(C,1)}}for(let H=0,tt=D.length;H<tt;H++){let Q=D[H].multiPoly;P.indexOf(Q)===-1&&P.push(Q)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let y=this.beforeState().multiPolys,v=this.afterState().multiPolys;switch(Pt.type){case"union":{let A=y.length===0,P=v.length===0;this._isInResult=A!==P;break}case"intersection":{let A,P;y.length<v.length?(A=y.length,P=v.length):(A=v.length,P=y.length),this._isInResult=P===Pt.numMultiPolys&&A<P;break}case"xor":{let A=Math.abs(y.length-v.length);this._isInResult=A%2===1;break}case"difference":{let A=P=>P.length===1&&P[0].isSubject;this._isInResult=A(y)!==A(v);break}default:throw new Error(`Unrecognized operation type found ${Pt.type}`)}return this._isInResult}}class yt{constructor(y,v,A){if(!Array.isArray(y)||y.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=v,this.isExterior=A,this.segments=[],typeof y[0][0]!="number"||typeof y[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let P=w.round(y[0][0],y[0][1]);this.bbox={ll:{x:P.x,y:P.y},ur:{x:P.x,y:P.y}};let D=P;for(let G=1,H=y.length;G<H;G++){if(typeof y[G][0]!="number"||typeof y[G][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let tt=w.round(y[G][0],y[G][1]);tt.x===D.x&&tt.y===D.y||(this.segments.push(ht.fromRing(D,tt,this)),tt.x<this.bbox.ll.x&&(this.bbox.ll.x=tt.x),tt.y<this.bbox.ll.y&&(this.bbox.ll.y=tt.y),tt.x>this.bbox.ur.x&&(this.bbox.ur.x=tt.x),tt.y>this.bbox.ur.y&&(this.bbox.ur.y=tt.y),D=tt)}(P.x!==D.x||P.y!==D.y)&&this.segments.push(ht.fromRing(D,P,this))}getSweepEvents(){let y=[];for(let v=0,A=this.segments.length;v<A;v++){let P=this.segments[v];y.push(P.leftSE),y.push(P.rightSE)}return y}}class bt{constructor(y,v){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new yt(y[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let A=1,P=y.length;A<P;A++){let D=new yt(y[A],this,!1);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.interiorRings.push(D)}this.multiPoly=v}getSweepEvents(){let y=this.exteriorRing.getSweepEvents();for(let v=0,A=this.interiorRings.length;v<A;v++){let P=this.interiorRings[v].getSweepEvents();for(let D=0,G=P.length;D<G;D++)y.push(P[D])}return y}}class St{constructor(y,v){if(!Array.isArray(y))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof y[0][0][0]=="number"&&(y=[y])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let A=0,P=y.length;A<P;A++){let D=new bt(y[A],this);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.polys.push(D)}this.isSubject=v}getSweepEvents(){let y=[];for(let v=0,A=this.polys.length;v<A;v++){let P=this.polys[v].getSweepEvents();for(let D=0,G=P.length;D<G;D++)y.push(P[D])}return y}}class At{static factory(y){let v=[];for(let A=0,P=y.length;A<P;A++){let D=y[A];if(!D.isInResult()||D.ringOut)continue;let G=null,H=D.leftSE,tt=D.rightSE,Q=[H],xt=H.point,C=[];for(;G=H,H=tt,Q.push(H),H.point!==xt;)for(;;){let K=H.getAvailableLinkedEvents();if(K.length===0){let gt=Q[0].point,ut=Q[Q.length-1].point;throw new Error(`Unable to complete output ring starting at [${gt.x}, ${gt.y}]. Last matching segment found ends at [${ut.x}, ${ut.y}].`)}if(K.length===1){tt=K[0].otherSE;break}let Y=null;for(let gt=0,ut=C.length;gt<ut;gt++)if(C[gt].point===H.point){Y=gt;break}if(Y!==null){let gt=C.splice(Y)[0],ut=Q.splice(gt.index);ut.unshift(ut[0].otherSE),v.push(new At(ut.reverse()));continue}C.push({index:Q.length,point:H.point});let mt=H.getLeftmostComparator(G);tt=K.sort(mt)[0].otherSE;break}v.push(new At(Q))}return v}constructor(y){this.events=y;for(let v=0,A=y.length;v<A;v++)y[v].segment.ringOut=this;this.poly=null}getGeom(){let y=this.events[0].point,v=[y];for(let Q=1,xt=this.events.length-1;Q<xt;Q++){let C=this.events[Q].point,K=this.events[Q+1].point;Yt(C,y,K)!==0&&(v.push(C),y=C)}if(v.length===1)return null;let A=v[0],P=v[1];Yt(A,y,P)===0&&v.shift(),v.push(v[0]);let D=this.isExteriorRing()?1:-1,G=this.isExteriorRing()?0:v.length-1,H=this.isExteriorRing()?v.length:-1,tt=[];for(let Q=G;Q!=H;Q+=D)tt.push([v[Q].x,v[Q].y]);return tt}isExteriorRing(){if(this._isExteriorRing===void 0){let y=this.enclosingRing();this._isExteriorRing=y?!y.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let y=this.events[0];for(let P=1,D=this.events.length;P<D;P++){let G=this.events[P];pt.compare(y,G)>0&&(y=G)}let v=y.segment.prevInResult(),A=v?v.prevInResult():null;for(;;){if(!v)return null;if(!A)return v.ringOut;if(A.ringOut!==v.ringOut)return A.ringOut.enclosingRing()!==v.ringOut?v.ringOut:v.ringOut.enclosingRing();v=A.prevInResult(),A=v?v.prevInResult():null}}}class Gt{constructor(y){this.exteriorRing=y,y.poly=this,this.interiorRings=[]}addInterior(y){this.interiorRings.push(y),y.poly=this}getGeom(){let y=[this.exteriorRing.getGeom()];if(y[0]===null)return null;for(let v=0,A=this.interiorRings.length;v<A;v++){let P=this.interiorRings[v].getGeom();P!==null&&y.push(P)}return y}}class Wt{constructor(y){this.rings=y,this.polys=this._composePolys(y)}getGeom(){let y=[];for(let v=0,A=this.polys.length;v<A;v++){let P=this.polys[v].getGeom();P!==null&&y.push(P)}return y}_composePolys(y){let v=[];for(let A=0,P=y.length;A<P;A++){let D=y[A];if(!D.poly)if(D.isExteriorRing())v.push(new Gt(D));else{let G=D.enclosingRing();G.poly||v.push(new Gt(G)),G.poly.addInterior(D)}}return v}}class Jt{constructor(y){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ht.compare;this.queue=y,this.tree=new c(v),this.segments=[]}process(y){let v=y.segment,A=[];if(y.consumedBy)return y.isLeft?this.queue.remove(y.otherSE):this.tree.remove(v),A;let P=y.isLeft?this.tree.add(v):this.tree.find(v);if(!P)throw new Error(`Unable to find segment #${v.id} [${v.leftSE.point.x}, ${v.leftSE.point.y}] -> [${v.rightSE.point.x}, ${v.rightSE.point.y}] in SweepLine tree.`);let D=P,G=P,H,tt;for(;H===void 0;)D=this.tree.prev(D),D===null?H=null:D.key.consumedBy===void 0&&(H=D.key);for(;tt===void 0;)G=this.tree.next(G),G===null?tt=null:G.key.consumedBy===void 0&&(tt=G.key);if(y.isLeft){let Q=null;if(H){let C=H.getIntersection(v);if(C!==null&&(v.isAnEndpoint(C)||(Q=C),!H.isAnEndpoint(C))){let K=this._splitSafely(H,C);for(let Y=0,mt=K.length;Y<mt;Y++)A.push(K[Y])}}let xt=null;if(tt){let C=tt.getIntersection(v);if(C!==null&&(v.isAnEndpoint(C)||(xt=C),!tt.isAnEndpoint(C))){let K=this._splitSafely(tt,C);for(let Y=0,mt=K.length;Y<mt;Y++)A.push(K[Y])}}if(Q!==null||xt!==null){let C=null;Q===null?C=xt:xt===null?C=Q:C=pt.comparePoints(Q,xt)<=0?Q:xt,this.queue.remove(v.rightSE),A.push(v.rightSE);let K=v.split(C);for(let Y=0,mt=K.length;Y<mt;Y++)A.push(K[Y])}A.length>0?(this.tree.remove(v),A.push(y)):(this.segments.push(v),v.prev=H)}else{if(H&&tt){let Q=H.getIntersection(tt);if(Q!==null){if(!H.isAnEndpoint(Q)){let xt=this._splitSafely(H,Q);for(let C=0,K=xt.length;C<K;C++)A.push(xt[C])}if(!tt.isAnEndpoint(Q)){let xt=this._splitSafely(tt,Q);for(let C=0,K=xt.length;C<K;C++)A.push(xt[C])}}}this.tree.remove(v)}return A}_splitSafely(y,v){this.tree.remove(y);let A=y.rightSE;this.queue.remove(A);let P=y.split(v);return P.push(A),y.consumedBy===void 0&&this.tree.add(y),P}}let Tt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,B=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class zt{run(y,v,A){Pt.type=y,w.reset();let P=[new St(v,!0)];for(let C=0,K=A.length;C<K;C++)P.push(new St(A[C],!1));if(Pt.numMultiPolys=P.length,Pt.type==="difference"){let C=P[0],K=1;for(;K<P.length;)m(P[K].bbox,C.bbox)!==null?K++:P.splice(K,1)}if(Pt.type==="intersection")for(let C=0,K=P.length;C<K;C++){let Y=P[C];for(let mt=C+1,gt=P.length;mt<gt;mt++)if(m(Y.bbox,P[mt].bbox)===null)return[]}let D=new c(pt.compare);for(let C=0,K=P.length;C<K;C++){let Y=P[C].getSweepEvents();for(let mt=0,gt=Y.length;mt<gt;mt++)if(D.insert(Y[mt]),D.size>Tt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let G=new Jt(D),H=D.size,tt=D.pop();for(;tt;){let C=tt.key;if(D.size===H){let Y=C.segment;throw new Error(`Unable to pop() ${C.isLeft?"left":"right"} SweepEvent [${C.point.x}, ${C.point.y}] from segment #${Y.id} [${Y.leftSE.point.x}, ${Y.leftSE.point.y}] -> [${Y.rightSE.point.x}, ${Y.rightSE.point.y}] from queue.`)}if(D.size>Tt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(G.segments.length>B)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let K=G.process(C);for(let Y=0,mt=K.length;Y<mt;Y++){let gt=K[Y];gt.consumedBy===void 0&&D.insert(gt)}H=D.size,tt=D.pop()}w.reset();let Q=At.factory(G.segments);return new Wt(Q).getGeom()}}let Pt=new zt;var lt={union:function(F){for(var y=arguments.length,v=new Array(y>1?y-1:0),A=1;A<y;A++)v[A-1]=arguments[A];return Pt.run("union",F,v)},intersection:function(F){for(var y=arguments.length,v=new Array(y>1?y-1:0),A=1;A<y;A++)v[A-1]=arguments[A];return Pt.run("intersection",F,v)},xor:function(F){for(var y=arguments.length,v=new Array(y>1?y-1:0),A=1;A<y;A++)v[A-1]=arguments[A];return Pt.run("xor",F,v)},difference:function(F){for(var y=arguments.length,v=new Array(y>1?y-1:0),A=1;A<y;A++)v[A-1]=arguments[A];return Pt.run("difference",F,v)}};return lt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Jh=0,jl=1,$h=2;var ms=1,Kh=2,sr=3,Ki=0,pn=1,_n=2,ui=0,rr=1,oo=2,Ql=3,tu=4,jh=5;var gs=100,Qh=101,tf=102,ef=103,nf=104,sf=200,rf=201,of=202,af=203,eu=204,nu=205,cf=206,lf=207,uf=208,hf=209,ff=210,df=211,pf=212,mf=213,gf=214,oa=0,aa=1,ca=2,Gs=3,la=4,ua=5,ha=6,fa=7,Wa=0,xf=1,yf=2,Zn=0,iu=1,su=2,ru=3,ao=4,ou=5,au=6,cu=7;var lu=300,ji=301,xs=302,Xa=303,qa=304,co=306,us=1e3,ri=1001,da=1002,qe=1003,_f=1004;var lo=1005;var Qe=1006,Ya=1007;var Qi=1008;var vn=1009,uu=1010,hu=1011,or=1012,Za=1013,Jn=1014,$n=1015,Kn=1016,Ja=1017,$a=1018,ar=1020,fu=35902,du=35899,pu=1021,mu=1022,On=1023,ai=1026,ts=1027,gu=1028,Ka=1029,es=1030,ja=1031;var Qa=1033,uo=33776,ho=33777,fo=33778,po=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37488,cc=37489,mo=37490,lc=37491,uc=37808,hc=37809,fc=37810,dc=37811,pc=37812,mc=37813,gc=37814,xc=37815,yc=37816,_c=37817,vc=37818,bc=37819,Sc=37820,Mc=37821,Ec=36492,wc=36494,Tc=36495,Ac=36283,Rc=36284,go=36285,Cc=36286;var Rr=2300,pa=2301,sa=2302,Bl=2303,zl=2400,kl=2401,Vl=2402;var vf=3200;var xo=0,bf=1,Ai="",Oe="srgb",Cr="srgb-linear",Ir="linear",_e="srgb";var ra=7680;var Sf=519,Mf=512,Ef=513,wf=514,Ic=515,Tf=516,Af=517,Pc=518,Rf=519,xu=35044,Lc=35048;var yu="300 es",Xn=2e3,Ws=2001;function qp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){let i=Pr("canvas");return i.style.display="block",i}var hh={},Xs=null;function Lr(...i){let t="THREE."+i.shift();Xs?Xs("log",t,...i):console.log(t,...i)}function If(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=If(i);let t="THREE."+i.shift();if(Xs)Xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=If(i);let t="THREE."+i.shift();if(Xs)Xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){let t=i.join(" ");t in hh||(hh[t]=!0,jt(...i))}function Pf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Lf={[oa]:aa,[ca]:ha,[la]:fa,[Gs]:ua,[aa]:oa,[ha]:ca,[fa]:la,[ua]:Gs},ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,Er=Math.PI/180,qs=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function _u(i,t){return(i%t+t)%t}function Zp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jp(i,t,e){return i!==t?(e-i)/(t-i):0}function wr(i,t,e){return(1-e)*i+e*t}function $p(i,t,e,n){return wr(i,t,1-Math.exp(-e*n))}function Kp(i,t=1){return t-Math.abs(_u(i,t*2)-t)}function jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function tm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function em(i,t){return i+Math.random()*(t-i)}function nm(i){return i*(.5-Math.random())}function im(i){i!==void 0&&(fh=i);let t=fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sm(i){return i*Er}function rm(i){return i*qs}function om(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function am(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Te={DEG2RAD:Er,RAD2DEG:qs,generateUUID:oi,clamp:re,euclideanModulo:_u,mapLinear:Zp,inverseLerp:Jp,lerp:wr,damp:$p,pingpong:Kp,smoothstep:jp,smootherstep:Qp,randInt:tm,randFloat:em,randFloatSpread:nm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:om,ceilPowerOfTwo:am,floorPowerOfTwo:cm,setQuaternionFromProperEuler:lm,normalize:Se,denormalize:Wn},wt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T,c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+g*a,f=f*p+x*a;let b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fl.copy(this).projectOnVector(t),this.sub(fl)}reflect(t){return this.sub(fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fl=new V,dh=new xn,oe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],T=s[4],M=s[7],S=s[2],w=s[5],L=s[8];return r[0]=o*x+a*b+c*S,r[3]=o*m+a*T+c*w,r[6]=o*p+a*M+c*L,r[1]=l*x+u*b+f*S,r[4]=l*m+u*T+f*w,r[7]=l*p+u*M+f*L,r[2]=h*x+d*b+g*S,r[5]=h*m+d*T+g*w,r[8]=h*p+d*M+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dl.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},dl=new oe,ph=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function um(){let i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var he=um();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,ma=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Pr("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hm=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var fm=0,ml=new V,fn=class i extends ci{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=Qe,o=Qi,a=On,c=vn,l=i.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=oi(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=lu;fn.DEFAULT_ANISOTROPY=1;var ve=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,M=(d+1)/2,S=(p+1)/2,w=(u+h)/4,L=(f+x)/4,_=(g+m)/4;return T>M&&T>S?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=L/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=L/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(h-u)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends ci{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new fn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Dr=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var xe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dm,t,pm)}lookAt(t,e,n){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ui.crossVectors(n,Sn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ui.crossVectors(n,Sn)),Ui.normalize(),Lo.crossVectors(Sn,Ui),s[0]=Ui.x,s[4]=Lo.x,s[8]=Sn.x,s[1]=Ui.y,s[5]=Lo.y,s[9]=Sn.y,s[2]=Ui.z,s[6]=Lo.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],T=n[7],M=n[11],S=n[15],w=s[0],L=s[4],_=s[8],I=s[12],O=s[1],U=s[5],z=s[9],q=s[13],k=s[2],X=s[6],W=s[10],$=s[14],ft=s[3],rt=s[7],it=s[11],ot=s[15];return r[0]=o*w+a*O+c*k+l*ft,r[4]=o*L+a*U+c*X+l*rt,r[8]=o*_+a*z+c*W+l*it,r[12]=o*I+a*q+c*$+l*ot,r[1]=u*w+f*O+h*k+d*ft,r[5]=u*L+f*U+h*X+d*rt,r[9]=u*_+f*z+h*W+d*it,r[13]=u*I+f*q+h*$+d*ot,r[2]=g*w+x*O+m*k+p*ft,r[6]=g*L+x*U+m*X+p*rt,r[10]=g*_+x*z+m*W+p*it,r[14]=g*I+x*q+m*$+p*ot,r[3]=b*w+T*O+M*k+S*ft,r[7]=b*L+T*U+M*X+S*rt,r[11]=b*_+T*z+M*W+S*it,r[15]=b*I+T*q+M*$+S*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],b=c*d-l*h,T=a*d-l*f,M=a*h-c*f,S=o*d-l*u,w=o*h-c*u,L=o*f-a*u;return e*(x*b-m*T+p*M)-n*(g*b-m*S+p*w)+s*(g*T-x*S+p*L)-r*(g*M-x*w+m*L)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],b=e*a-n*o,T=e*c-s*o,M=e*l-r*o,S=n*c-s*a,w=n*l-r*a,L=s*l-r*c,_=u*x-f*g,I=u*m-h*g,O=u*p-d*g,U=f*m-h*x,z=f*p-d*x,q=h*p-d*m,k=b*q-T*z+M*U+S*O-w*I+L*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/k;return t[0]=(a*q-c*z+l*U)*X,t[1]=(s*z-n*q-r*U)*X,t[2]=(x*L-m*w+p*S)*X,t[3]=(h*w-f*L-d*S)*X,t[4]=(c*O-o*q-l*I)*X,t[5]=(e*q-s*O+r*I)*X,t[6]=(m*M-g*L-p*T)*X,t[7]=(u*L-h*M+d*T)*X,t[8]=(o*z-a*O+l*_)*X,t[9]=(n*O-e*z-r*_)*X,t[10]=(g*w-x*M+p*b)*X,t[11]=(f*M-u*w-d*b)*X,t[12]=(a*I-o*U-c*_)*X,t[13]=(e*U-n*I+s*_)*X,t[14]=(x*T-g*S-m*b)*X,t[15]=(u*S-f*T+h*b)*X,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,b=c*l,T=c*u,M=c*f,S=n.x,w=n.y,L=n.z;return s[0]=(1-(x+p))*S,s[1]=(d+M)*S,s[2]=(g-T)*S,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(h+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+T)*L,s[9]=(m-b)*L,s[10]=(1-(h+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),c=Rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);let l=1/o,u=1/a,f=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Xn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===Xn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===Xn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Rs=new V,Vn=new xe,dm=new V(0,0,0),pm=new V(1,1,1),Ui=new V,Lo=new V,Sn=new V,gh=new xe,xh=new xn,li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mm=0,yh=new V,Cs=new xn,_i=new xe,Do=new V,yr=new V,gm=new V,xm=new xn,_h=new V(1,0,0),vh=new V(0,1,0),bh=new V(0,0,1),Sh={type:"added"},ym={type:"removed"},Is={type:"childadded",child:null},gl={type:"childremoved",child:null},Ye=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new li,n=new xn,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new oe}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(yr,Do,this.up):_i.lookAt(Do,yr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(_i),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),Is.child=t,this.dispatchEvent(Is),Is.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ym),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,xm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new V(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var de=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},_m={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},No={h:0,s:0,l:0};function xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=_u(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xl(o,r,t+1/3),this.g=xl(o,r,t),this.b=xl(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return he.workingToColorSpace(on.copy(this),t),Math.round(re(on.r*255,0,255))*65536+Math.round(re(on.g*255,0,255))*256+Math.round(re(on.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Oe){he.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(No);let n=wr(Fi.h,No.h,e),s=wr(Fi.s,No.s,e),r=wr(Fi.l,No.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Qt;Qt.NAMES=Df;var Vi=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hn=new V,vi=new V,yl=new V,bi=new V,Ps=new V,Ls=new V,Mh=new V,_l=new V,vl=new V,bl=new V,Sl=new ve,Ml=new ve,El=new ve,ki=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),vi.subVectors(n,e),yl.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(vi),c=Hn.dot(yl),l=vi.dot(vi),u=vi.dot(yl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bi.x),c.addScaledVector(o,bi.y),c.addScaledVector(a,bi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sl.setScalar(0),Ml.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),vi.subVectors(t,e),Hn.cross(vi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Ls.subVectors(r,n),_l.subVectors(t,n);let c=Ps.dot(_l),l=Ls.dot(_l);if(c<=0&&l<=0)return e.copy(n);vl.subVectors(t,s);let u=Ps.dot(vl),f=Ls.dot(vl);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ps,o);bl.subVectors(t,r);let d=Ps.dot(bl),g=Ls.dot(bl);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ls,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Mh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Mh,a);let p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ze=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Fo.subVectors(this.max,_r),Ds.subVectors(t.a,_r),Ns.subVectors(t.b,_r),Us.subVectors(t.c,_r),Oi.subVectors(Ns,Ds),Bi.subVectors(Us,Ns),rs.subVectors(Ds,Us);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-rs.z,rs.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,rs.z,0,-rs.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-rs.y,rs.x,0];return!wl(e,Ds,Ns,Us,Fo)||(e=[1,0,0,0,1,0,0,0,1],!wl(e,Ds,Ns,Us,Fo))?!1:(Oo.crossVectors(Oi,Bi),e=[Oo.x,Oo.y,Oo.z],wl(e,Ds,Ns,Us,Fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new V,new V,new V,new V,new V,new V,new V,new V],Gn=new V,Uo=new ze,Ds=new V,Ns=new V,Us=new V,Oi=new V,Bi=new V,rs=new V,_r=new V,Fo=new V,Oo=new V,os=new V;function wl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=t.dot(os),l=e.dot(os),u=n.dot(os);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Fe=new V,Bo=new wt,vm=0,Be=class extends ci{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ur=class extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}},bm=new ze,vr=new V,Tl=new V,Un=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);let e=vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(Tl)),this.expandByPoint(vr.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sm=0,Dn=new xe,Al=new Ye,Fs=new V,Mn=new ze,br=new ze,Xe=new V,me=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qp(t)?Ur:Nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Mn.min,br.min),Mn.expandByPoint(Xe),Xe.addVectors(Mn.max,br.max),Mn.expandByPoint(Xe)):(Mn.expandByPoint(br.min),Mn.expandByPoint(br.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xe.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),Xe.add(Fs)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new V,c[_]=new V;let l=new V,u=new V,f=new V,h=new wt,d=new wt,g=new wt,x=new V,m=new V;function p(_,I,O){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,O),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,O),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[_].add(x),a[I].add(x),a[O].add(x),c[_].add(m),c[I].add(m),c[O].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,I=b.length;_<I;++_){let O=b[_],U=O.start,z=O.count;for(let q=U,k=U+z;q<k;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let T=new V,M=new V,S=new V,w=new V;function L(_){S.fromBufferAttribute(s,_),w.copy(S);let I=a[_];T.copy(I),T.sub(S.multiplyScalar(S.dot(I))).normalize(),M.crossVectors(w,I);let U=M.dot(c[_])<0?-1:1;o.setXYZW(_,T.x,T.y,T.z,U)}for(let _=0,I=b.length;_<I;++_){let O=b[_],U=O.start,z=O.count;for(let q=U,k=U+z;q<k;q+=3)L(t.getX(q+0)),L(t.getX(q+1)),L(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new V,r=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Be(h,u,f)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xu,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},un=new V,Fn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rl=new V,Mm=new V,Em=new oe,En=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Rl.subVectors(n,e).cross(Mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Em.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wm=0,qn=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=rr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=nu,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Mi=new V,Cl=new V,zo=new V,ko=new V,hs=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Cl.copy(t).add(e).multiplyScalar(.5),zo.copy(e).sub(t).normalize(),ko.copy(this.origin).sub(Cl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zo),a=ko.dot(this.direction),c=-ko.dot(zo),l=ko.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Cl).addScaledVector(zo,h),d}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,b=n.y-o.y,T=n.z-o.z,M=Math.abs(c),S=Math.abs(l),w=Math.abs(u),L,_,I,O,U,z,q,k,X,W,$,ft;if(M>=S&&M>=w?(I=c,z=f,X=g,ft=p,c>=0?(L=l,_=u,O=h,U=d,q=x,k=m,W=b,$=T):(L=u,_=l,O=d,U=h,q=m,k=x,W=T,$=b)):S>=w?(I=l,z=h,X=x,ft=b,l>=0?(L=u,_=c,O=d,U=f,q=m,k=g,W=T,$=p):(L=c,_=u,O=f,U=d,q=g,k=m,W=p,$=T)):(I=u,z=d,X=m,ft=T,u>=0?(L=c,_=l,O=f,U=h,q=g,k=x,W=p,$=b):(L=l,_=c,O=h,U=f,q=x,k=g,W=b,$=p)),I===0)return null;let rt=L/I,it=_/I,ot=1/I,vt=O-rt*z,Rt=U-it*z,Zt=q-rt*X,Yt=k-it*X,$t=W-rt*ft,at=$-it*ft,dt=$t*Yt-at*Zt,Ct=vt*at-Rt*$t,Ut=Zt*Rt-Yt*vt;if(s){if(dt<0||Ct<0||Ut<0)return null}else if((dt<0||Ct<0||Ut<0)&&(dt>0||Ct>0||Ut>0))return null;let _t=dt+Ct+Ut;if(_t===0)return null;let pt=ot*(dt*z+Ct*X+Ut*ft);return(_t>0?pt<0:pt>0)?null:this.at(pt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Eh=new xe,as=new hs,Vo=new Un,wh=new V,Ho=new V,Go=new V,Wo=new V,Il=new V,Xo=new V,Th=new V,qo=new V,fe=class extends Ye{constructor(t=new me,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Il.fromBufferAttribute(f,t),o?Xo.addScaledVector(Il,u):Xo.addScaledVector(Il.sub(e),u))}e.add(Xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(Vo.containsPoint(as.origin)===!1&&(as.intersectSphere(Vo,wh)===null||as.origin.distanceToSquared(wh)>(t.far-t.near)**2))&&(Eh.copy(r).invert(),as.copy(t.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,S=T;M<S;M+=3){let w=a.getX(M),L=a.getX(M+1),_=a.getX(M+2);s=Yo(this,p,t,n,l,u,f,w,L,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=Yo(this,o,t,n,l,u,f,b,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),T=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,S=T;M<S;M+=3){let w=M,L=M+1,_=M+2;s=Yo(this,p,t,n,l,u,f,w,L,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,T=m+1,M=m+2;s=Yo(this,o,t,n,l,u,f,b,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tm(i,t,e,n,s,r,o,a){let c;if(t.side===pn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ki,a),c===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(qo);return l<e.near||l>e.far?null:{distance:l,point:qo.clone(),object:i}}function Yo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ho),i.getVertexPosition(c,Go),i.getVertexPosition(l,Wo);let u=Tm(i,t,e,n,Ho,Go,Wo,Th);if(u){let f=new V;ki.getBarycoord(Th,Ho,Go,Wo,f),s&&(u.uv=ki.getInterpolatedAttribute(s,a,c,l,f,new wt)),r&&(u.uv1=ki.getInterpolatedAttribute(r,a,c,l,f,new wt)),o&&(u.normal=ki.getInterpolatedAttribute(o,a,c,l,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new V,materialIndex:0};ki.getNormal(Ho,Go,Wo,h.normal),u.face=h,u.barycoord=f}return u}var ya=class extends fn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=qe,u=qe,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cs=new Un,Am=new wt(.5,.5),Zo=new V,$s=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],T=r[13],M=r[14],S=r[15];if(s[0].setComponents(l-o,d-u,p-g,S-b).normalize(),s[1].setComponents(l+o,d+u,p+g,S+b).normalize(),s[2].setComponents(l+a,d+f,p+x,S+T).normalize(),s[3].setComponents(l-a,d-f,p-x,S-T).normalize(),n)s[4].setComponents(c,h,m,M).normalize(),s[5].setComponents(l-c,d-h,p-m,S-M).normalize();else if(s[4].setComponents(l-c,d-h,p-m,S-M).normalize(),e===Xn)s[5].setComponents(l+c,d+h,p+m,S+M).normalize();else if(e===Ws)s[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=Am.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Zo.x=s.normal.x>0?t.max.x:t.min.x,Zo.y=s.normal.y>0?t.max.y:t.min.y,Zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_a=new V,va=new V,Ah=new xe,Sr=new hs,Jo=new Un,Pl=new V,Rh=new V,ba=class extends Ye{constructor(t=new me,e=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_a.fromBufferAttribute(e,s-1),va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_a.distanceTo(va);t.setAttribute("lineDistance",new ie(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,t.ray.intersectsSphere(Jo)===!1)return;Ah.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(Ah);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=u.getX(x),b=u.getX(x+1),T=$o(this,t,Sr,c,p,b,x);T&&e.push(T)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=$o(this,t,Sr,c,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=$o(this,t,Sr,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=$o(this,t,Sr,c,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(_a.fromBufferAttribute(a,s),va.fromBufferAttribute(a,r),e.distanceSqToSegment(_a,va,Pl,Rh)>n)return;Pl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Pl);if(!(l<t.near||l>t.far))return{distance:l,point:Rh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ch=new V,Ih=new V,Or=class extends ba{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ch.fromBufferAttribute(e,s),Ih.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ch.distanceTo(Ih);t.setAttribute("lineDistance",new ie(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var js=class extends qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ph=new xe,Hl=new hs,Ko=new Un,jo=new V,Br=class extends Ye{constructor(t=new me,e=new js){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,t.ray.intersectsSphere(Ko)===!1)return;Ph.copy(s).invert(),Hl.copy(t.ray).applyMatrix4(Ph);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let m=l.getX(g);jo.fromBufferAttribute(f,m),Lh(jo,m,c,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)jo.fromBufferAttribute(f,g),Lh(jo,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lh(i,t,e,n,s,r,o){let a=Hl.distanceSqToPoint(i);if(a<e){let c=new V;Hl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var zr=class extends fn{constructor(t=[],e=ji,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qs=class extends fn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends fn{constructor(t,e,n=Jn,s,r,o,a=qe,c=qe,l,u=ai,f=1){if(u!==ai&&u!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Sa=class extends Hi{constructor(t,e=Jn,n=ji,s,r,o=qe,a=qe,c,l=ai){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},kr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pe=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2));function g(x,m,p,b,T,M,S,w,L,_,I){let O=M/L,U=S/_,z=M/2,q=S/2,k=w/2,X=L+1,W=_+1,$=0,ft=0,rt=new V;for(let it=0;it<W;it++){let ot=it*U-q;for(let vt=0;vt<X;vt++){let Rt=vt*O-z;rt[x]=Rt*b,rt[m]=ot*T,rt[p]=k,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[p]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(vt/L),f.push(1-it/_),$+=1}}for(let it=0;it<_;it++)for(let ot=0;ot<L;ot++){let vt=h+ot+X*it,Rt=h+ot+X*(it+1),Zt=h+(ot+1)+X*(it+1),Yt=h+(ot+1)+X*it;c.push(vt,Rt,Yt),c.push(Rt,Zt,Yt),ft+=6}a.addGroup(d,ft,I),d+=ft,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Vr=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new V,u=new wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gi=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,x=[],m=n/2,p=0;b(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ie(f,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function b(){let M=new V,S=new V,w=0,L=(e-t)/n;for(let _=0;_<=r;_++){let I=[],O=_/r,U=O*(e-t)+t;for(let z=0;z<=s;z++){let q=z/s,k=q*c+a,X=Math.sin(k),W=Math.cos(k);S.x=U*X,S.y=-O*n+m,S.z=U*W,f.push(S.x,S.y,S.z),M.set(X,L,W).normalize(),h.push(M.x,M.y,M.z),d.push(q,1-O),I.push(g++)}x.push(I)}for(let _=0;_<s;_++)for(let I=0;I<r;I++){let O=x[I][_],U=x[I+1][_],z=x[I+1][_+1],q=x[I][_+1];(t>0||I!==0)&&(u.push(O,U,q),w+=3),(e>0||I!==r-1)&&(u.push(U,z,q),w+=3)}l.addGroup(p,w,0),p+=w}function T(M){let S=g,w=new wt,L=new V,_=0,I=M===!0?t:e,O=M===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*O,0),h.push(0,O,0),d.push(.5,.5),g++;let U=g;for(let z=0;z<=s;z++){let k=z/s*c+a,X=Math.cos(k),W=Math.sin(k);L.x=I*W,L.y=m*O,L.z=I*X,f.push(L.x,L.y,L.z),h.push(0,O,0),w.x=X*.5+.5,w.y=W*.5*O+.5,d.push(w.x,w.y),g++}for(let z=0;z<s;z++){let q=S+z,k=U+z;M===!0?u.push(k,k+1,q):u.push(k+1,k,q),_+=3}l.addGroup(p,_,M===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hr=class i extends Gi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new wt:new V);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,s=[],r=[],o=[],a=new V,c=new xe;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new V)}r[0]=new V,o[0]=new V;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(re(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(re(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tr=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ma=class extends tr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Dh=new V,Nh=new V,Ll=new vu,Dl=new vu,Nl=new vu,Ea=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Nh.subVectors(s[0],s[1]).add(s[0]),l=Nh);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Dh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Dh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ll.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),Dl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Nl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Dl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Nl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Ll.calc(c),Dl.calc(c),Nl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Rm(i,t){let e=1-i;return e*e*t}function Cm(i,t){return 2*(1-i)*i*t}function Im(i,t){return i*i*t}function Tr(i,t,e,n){return Rm(i,t)+Cm(i,e)+Im(i,n)}function Pm(i,t){let e=1-i;return e*e*e*t}function Lm(i,t){let e=1-i;return 3*e*e*i*t}function Dm(i,t){return 3*(1-i)*i*i*t}function Nm(i,t){return i*i*i*t}function Ar(i,t,e,n,s){return Pm(i,t)+Lm(i,e)+Dm(i,n)+Nm(i,s)}var Gr=class extends wn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends wn{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(t,s.x,r.x,o.x,a.x),Ar(t,s.y,r.y,o.y,a.y),Ar(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wr=class extends wn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends wn{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xr=class extends wn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends wn{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(t,s.x,r.x,o.x),Tr(t,s.y,r.y,o.y),Tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Uh(a,c.x,l.x,u.x,f.x),Uh(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},Gl=Object.freeze({__proto__:null,ArcCurve:Ma,CatmullRomCurve3:Ea,CubicBezierCurve:Gr,CubicBezierCurve3:wa,EllipseCurve:tr,LineCurve:Wr,LineCurve3:Ta,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:Aa,SplineCurve:qr}),Ra=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gl[s.type]().fromJSON(s))}return this}},fs=class extends Ra{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Wr(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Xr(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Gr(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new qr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new tr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Tn=class extends fs{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fs().fromJSON(s))}return this}};function Um(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Nf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=km(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Yr(r,o,e,a,c,l,0),o}function Nf(i,t,e,n,s){let r;if(s===Km(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Fh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Fh(o/n|0,i[o],i[o+1],r);return r&&er(r,r.next)&&(Jr(r),r=r.next),r}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(er(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Jr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Xm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Om(i,n,s,r):Fm(i)){t.push(c.i,i.i,l.i),Jr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Bm(ds(i),t),Yr(i,t,e,n,s,r,2)):o===2&&zm(i,t,e,n,s,r):Yr(ds(i),t,e,n,s,r,1);break}}}function Fm(i){let t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Mr(s,a,r,c,o,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Om(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),g=Math.min(u,f,h),x=Math.max(a,c,l),m=Math.max(u,f,h),p=Wl(d,g,t,e,n),b=Wl(x,m,t,e,n),T=i.prevZ,M=i.nextZ;for(;T&&T.z>=p&&M&&M.z<=b;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&Mr(a,u,c,f,l,h,T.x,T.y)&&Ie(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Mr(a,u,c,f,l,h,M.x,M.y)&&Ie(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=p;){if(T.x>=d&&T.x<=x&&T.y>=g&&T.y<=m&&T!==s&&T!==o&&Mr(a,u,c,f,l,h,T.x,T.y)&&Ie(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Mr(a,u,c,f,l,h,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Bm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!er(n,s)&&Ff(n,e,e.next,s)&&Zr(n,s)&&Zr(s,n)&&(t.push(n.i,e.i,s.i),Jr(e),Jr(e.next),e=i=s),e=e.next}while(e!==i);return ds(e)}function zm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zm(o,a)){let c=Of(o,a);o=ds(o,o.next),c=ds(c,c.next),Yr(o,t,e,n,s,r,0),Yr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function km(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Nf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ym(l))}s.sort(Vm);for(let r=0;r<s.length;r++)e=Hm(s[r],e);return e}function Vm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hm(i,t){let e=Gm(i,t);if(!e)return t;let n=Of(e,i);return ds(n,n.next),ds(e,e.next)}function Gm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(er(i,e))return e;do{if(er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Uf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Zr(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Wm(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Wm(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Xm(i,t,e,n){let s=i;do s.z===0&&(s.z=Wl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qm(s)}function qm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Wl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Mr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Uf(i,t,e,n,s,r,o,a)}function Zm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jm(i,t)&&(Zr(i,t)&&Zr(t,i)&&$m(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||er(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function er(i,t){return i.x===t.x&&i.y===t.y}function Ff(i,t,e,n){let s=ta(Ie(i,t,e)),r=ta(Ie(i,t,n)),o=ta(Ie(e,n,i)),a=ta(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&Qo(i,e,t)||r===0&&Qo(i,n,t)||o===0&&Qo(e,i,n)||a===0&&Qo(e,t,n))}function Qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ta(i){return i>0?1:i<0?-1:0}function Jm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ff(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function $m(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Of(i,t){let e=Xl(i.i,i.x,i.y),n=Xl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fh(i,t,e,n){let s=Xl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Km(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ql=class{static triangulate(t,e,n=2){return Um(t,e,n)}},Nn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Oh(t),Bh(n,t);let o=t.length;e.forEach(Oh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Bh(n,e[c]);let a=ql.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Oh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var wi=class i extends me{constructor(t=new Tn([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:jm,T,M=!1,S,w,L,_;if(p){T=p.getSpacedPoints(u),M=!0,h=!1;let ht=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(u,ht),w=new V,L=new V,_=new V}h||(m=0,d=0,g=0,x=0);let I=a.extractPoints(l),O=I.shape,U=I.holes;if(!Nn.isClockWise(O)){O=O.reverse();for(let ht=0,yt=U.length;ht<yt;ht++){let bt=U[ht];Nn.isClockWise(bt)&&(U[ht]=bt.reverse())}}function q(ht){let bt=10000000000000001e-36,St=ht[0];for(let At=1;At<=ht.length;At++){let Gt=At%ht.length,Wt=ht[Gt],Jt=Wt.x-St.x,Tt=Wt.y-St.y,B=Jt*Jt+Tt*Tt,zt=Math.max(Math.abs(Wt.x),Math.abs(Wt.y),Math.abs(St.x),Math.abs(St.y)),Pt=bt*zt*zt;if(B<=Pt){ht.splice(Gt,1),At--;continue}St=Wt}}q(O),U.forEach(q);let k=U.length,X=O;for(let ht=0;ht<k;ht++){let yt=U[ht];O=O.concat(yt)}function W(ht,yt,bt){return yt||ee("ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(yt,bt)}let $=O.length;function ft(ht,yt,bt){let St,At,Gt,Wt=ht.x-yt.x,Jt=ht.y-yt.y,Tt=bt.x-ht.x,B=bt.y-ht.y,zt=Wt*Wt+Jt*Jt,Pt=Wt*B-Jt*Tt;if(Math.abs(Pt)>Number.EPSILON){let N=Math.sqrt(zt),E=Math.sqrt(Tt*Tt+B*B),j=yt.x-Jt/N,et=yt.y+Wt/N,lt=bt.x-B/E,F=bt.y+Tt/E,y=((lt-j)*B-(F-et)*Tt)/(Wt*B-Jt*Tt);St=j+Wt*y-ht.x,At=et+Jt*y-ht.y;let v=St*St+At*At;if(v<=2)return new wt(St,At);Gt=Math.sqrt(v/2)}else{let N=!1;Wt>Number.EPSILON?Tt>Number.EPSILON&&(N=!0):Wt<-Number.EPSILON?Tt<-Number.EPSILON&&(N=!0):Math.sign(Jt)===Math.sign(B)&&(N=!0),N?(St=-Jt,At=Wt,Gt=Math.sqrt(zt)):(St=Wt,At=Jt,Gt=Math.sqrt(zt/2))}return new wt(St/Gt,At/Gt)}let rt=[];for(let ht=0,yt=X.length,bt=yt-1,St=ht+1;ht<yt;ht++,bt++,St++)bt===yt&&(bt=0),St===yt&&(St=0),rt[ht]=ft(X[ht],X[bt],X[St]);let it=[],ot,vt=rt.concat();for(let ht=0,yt=k;ht<yt;ht++){let bt=U[ht];ot=[];for(let St=0,At=bt.length,Gt=At-1,Wt=St+1;St<At;St++,Gt++,Wt++)Gt===At&&(Gt=0),Wt===At&&(Wt=0),ot[St]=ft(bt[St],bt[Gt],bt[Wt]);it.push(ot),vt=vt.concat(ot)}let Rt;if(m===0)Rt=Nn.triangulateShape(X,U);else{let ht=[],yt=[];for(let bt=0;bt<m;bt++){let St=bt/m,At=d*Math.cos(St*Math.PI/2),Gt=g*Math.sin(St*Math.PI/2)+x;for(let Wt=0,Jt=X.length;Wt<Jt;Wt++){let Tt=W(X[Wt],rt[Wt],Gt);Ct(Tt.x,Tt.y,-At),St===0&&ht.push(Tt)}for(let Wt=0,Jt=k;Wt<Jt;Wt++){let Tt=U[Wt];ot=it[Wt];let B=[];for(let zt=0,Pt=Tt.length;zt<Pt;zt++){let N=W(Tt[zt],ot[zt],Gt);Ct(N.x,N.y,-At),St===0&&B.push(N)}St===0&&yt.push(B)}}Rt=Nn.triangulateShape(ht,yt)}let Zt=Rt.length,Yt=g+x;for(let ht=0;ht<$;ht++){let yt=h?W(O[ht],vt[ht],Yt):O[ht];M?(L.copy(S.normals[0]).multiplyScalar(yt.x),w.copy(S.binormals[0]).multiplyScalar(yt.y),_.copy(T[0]).add(L).add(w),Ct(_.x,_.y,_.z)):Ct(yt.x,yt.y,0)}for(let ht=1;ht<=u;ht++)for(let yt=0;yt<$;yt++){let bt=h?W(O[yt],vt[yt],Yt):O[yt];M?(L.copy(S.normals[ht]).multiplyScalar(bt.x),w.copy(S.binormals[ht]).multiplyScalar(bt.y),_.copy(T[ht]).add(L).add(w),Ct(_.x,_.y,_.z)):Ct(bt.x,bt.y,f/u*ht)}for(let ht=m-1;ht>=0;ht--){let yt=ht/m,bt=d*Math.cos(yt*Math.PI/2),St=g*Math.sin(yt*Math.PI/2)+x;for(let At=0,Gt=X.length;At<Gt;At++){let Wt=W(X[At],rt[At],St);Ct(Wt.x,Wt.y,f+bt)}for(let At=0,Gt=U.length;At<Gt;At++){let Wt=U[At];ot=it[At];for(let Jt=0,Tt=Wt.length;Jt<Tt;Jt++){let B=W(Wt[Jt],ot[Jt],St);M?Ct(B.x,B.y+T[u-1].y,T[u-1].x+bt):Ct(B.x,B.y,f+bt)}}}$t(),at();function $t(){let ht=s.length/3;if(h){let yt=0,bt=$*yt;for(let St=0;St<Zt;St++){let At=Rt[St];Ut(At[2]+bt,At[1]+bt,At[0]+bt)}yt=u+m*2,bt=$*yt;for(let St=0;St<Zt;St++){let At=Rt[St];Ut(At[0]+bt,At[1]+bt,At[2]+bt)}}else{for(let yt=0;yt<Zt;yt++){let bt=Rt[yt];Ut(bt[2],bt[1],bt[0])}for(let yt=0;yt<Zt;yt++){let bt=Rt[yt];Ut(bt[0]+$*u,bt[1]+$*u,bt[2]+$*u)}}n.addGroup(ht,s.length/3-ht,0)}function at(){let ht=s.length/3,yt=0;dt(X,yt),yt+=X.length;for(let bt=0,St=U.length;bt<St;bt++){let At=U[bt];dt(At,yt),yt+=At.length}n.addGroup(ht,s.length/3-ht,1)}function dt(ht,yt){let bt=ht.length;for(;--bt>=0;){let St=bt,At=bt-1;At<0&&(At=ht.length-1);for(let Gt=0,Wt=u+m*2;Gt<Wt;Gt++){let Jt=$*Gt,Tt=$*(Gt+1),B=yt+St+Jt,zt=yt+At+Jt,Pt=yt+At+Tt,N=yt+St+Tt;_t(B,zt,Pt,N)}}}function Ct(ht,yt,bt){c.push(ht),c.push(yt),c.push(bt)}function Ut(ht,yt,bt){pt(ht),pt(yt),pt(bt);let St=s.length/3,At=b.generateTopUV(n,s,St-3,St-2,St-1);Ft(At[0]),Ft(At[1]),Ft(At[2])}function _t(ht,yt,bt,St){pt(ht),pt(yt),pt(St),pt(yt),pt(bt),pt(St);let At=s.length/3,Gt=b.generateSideWallUV(n,s,At-6,At-3,At-2,At-1);Ft(Gt[0]),Ft(Gt[1]),Ft(Gt[3]),Ft(Gt[1]),Ft(Gt[2]),Ft(Gt[3])}function pt(ht){s.push(c[ht*3+0]),s.push(c[ht*3+1]),s.push(c[ht*3+2])}function Ft(ht){r.push(ht.x),r.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gl[s.type]().fromJSON(s)),new i(n,t.options)}},jm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new wt(r,o),new wt(a,c),new wt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new wt(o,1-c),new wt(l,1-f),new wt(h,1-g),new wt(x,1-p)]:[new wt(a,1-c),new wt(u,1-f),new wt(d,1-g),new wt(m,1-p)]}};function Qm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $r=class i extends me{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new V,h=new wt,d=new V,g=new V,x=new V,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=e;b++){let T=n+b*u*s,M=Math.sin(T),S=Math.cos(T);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*M,f.y=t[w].y,f.z=t[w].x*S,o.push(f.x,f.y,f.z),h.x=b/e,h.y=w/(t.length-1),a.push(h.x,h.y);let L=c[3*w+0]*M,_=c[3*w+1],I=c[3*w+0]*S;l.push(L,_,I)}}for(let b=0;b<e;b++)for(let T=0;T<t.length-1;T++){let M=T+b*t.length,S=M,w=M+t.length,L=M+t.length+1,_=M+1;r.push(S,w,_),r.push(L,_,w)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Yn=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*h-o;for(let T=0;T<l;T++){let M=T*f-r;g.push(M,-b,0),x.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let T=b+l*p,M=b+l*(p+1),S=b+1+l*(p+1),w=b+1+l*p;d.push(T,M,w),d.push(M,S,w)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Kr=class i extends me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],f=t,h=(e-t)/s,d=new V,g=new wt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,T=b,M=b+n+1,S=b+n+2,w=b+1;a.push(T,M,w),a.push(M,S,w)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wi=class i extends me{constructor(t=new Tn([new wt(0,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function l(u){let f=s.length/3,h=u.extractPoints(e),d=h.shape,g=h.holes;Nn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Nn.isClockWise(b)===!0&&(g[m]=b.reverse())}let x=Nn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){let b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,p=x.length;m<p;m++){let b=x[m],T=b[0]+f,M=b[1]+f,S=b[2]+f;n.push(T,M,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var An=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new V,h=new V,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],T=p/n,M=o+T*a,S=t*Math.cos(M),w=Math.sqrt(t*t-S*S),L=0;p===0&&o===0?L=.5/e:p===n&&c===Math.PI&&(L=-.5/e);for(let _=0;_<=e;_++){let I=_/e,O=s+I*r;f.x=-w*Math.cos(O),f.y=S,f.z=w*Math.sin(O),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(I+L,1-T),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let T=u[p][b+1],M=u[p][b],S=u[p+1][b],w=u[p+1][b+1];(p!==0||o>0)&&d.push(T,M,w),(p!==n-1||c<Math.PI)&&d.push(M,S,w)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ti=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new V,d=new V,g=new V;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let b=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(b),d.y=(t+e*Math.cos(m))*Math.sin(b),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),g.subVectors(d,h).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,b=(s+1)*(x-1)+m-1,T=(s+1)*(x-1)+m,M=(s+1)*x+m;c.push(p,b,M),c.push(b,T,M)}this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var jr=class extends me{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new V,r=new V;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let g=h,x=h+d;g<x;g+=3)for(let m=0;m<3;m++){let p=a.getX(g+m),b=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,b),zh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,f=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,f),zh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ie(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function zh(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(kh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(kh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function eg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var yo={clone:ys,merge:an},ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ng,this.fragmentShader=ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=eg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ca=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rn=class extends qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var nr=class extends qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ia=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ul(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},La=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kl:r=t,a=2*e-n;break;case Vl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kl:o=t,c=2*n-e;break;case Vl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,b=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,T=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+b*o[l+S]+T*o[c+S]+M*o[f+S];return r}},Da=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Na=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ua=class extends Xi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=d*h+g*2,b=f[p],T=f[p+1],M=t*h+g*2,S=u[M],w=u[M+1],L=rg(n,e,b,S,s);r[g]=Bf(L,x,T,w,m)}return r}};function Bf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function sg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function rg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Bf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=sg(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ul(t.settings)&&(n.settings={inTangents:Os(t.settings.inTangents,Array),outTangents:Os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case pa:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break;case Bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return pa;case this.InterpolantFactoryMethodSmooth:return sa;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ul(this.settings)&&(Vh(this.settings.inTangents,t),Vh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ee("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ee("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Yp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ee("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ul(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=pa;var qi=class extends Cn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Rr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Fa.prototype.ValueTypeName="color";var Oa=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="number";var Ba=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Qr=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Rr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Cn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="vector";var ka=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zf=new ka,Va=class{constructor(t){this.manager=t!==void 0?t:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ps=class extends ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fl=new xe,Hh=new V,Gh=new V,to=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ea=new V,na=new xn,si=new V,eo=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ea,na,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ea,na,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ea,na,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new V,Wh=new wt,Xh=new wt,hn=class extends eo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Yl=class extends to{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},no=class extends ir{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zi=class extends eo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zl=class extends to{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ji=class extends ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Zl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var io=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Bs=-90,zs=1,Ha=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Bs,zs,t,e);s.layers=this.layers,this.add(s);let r=new hn(Bs,zs,t,e);r.layers=this.layers,this.add(r);let o=new hn(Bs,zs,t,e);o.layers=this.layers,this.add(o);let a=new hn(Bs,zs,t,e);a.layers=this.layers,this.add(a);let c=new hn(Bs,zs,t,e);c.layers=this.layers,this.add(c);let l=new hn(Bs,zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ga=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Su="\\[\\]\\.:\\/",og=new RegExp("["+Su+"]","g"),Mu="[^"+Su+"]",ag="[^"+Su.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",Mu),lg=/(WCOD+)?/.source.replace("WCOD",ag),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mu),hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mu),fg=new RegExp("^"+cg+lg+ug+hg+"$"),dg=["material","materials","bones","map"],Jl=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){let e=fg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Jl;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cS=new Float32Array(1);var $i=class extends Fr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var qh=new xe,so=class{constructor(t,e,n=0,s=1/0){this.ray=new hs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(t,e=!0,n=[]){return $l(t,this,n,e),n.sort(Yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$l(t[s],this,n,e);return n.sort(Yh),n}};function Yh(i,t){return i.distance-t.distance}function $l(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$l(r[o],t,e,!0)}}var Kl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Zh=new V,ia=new V,ks=new V,Vs=new V,Ol=new V,pg=new V,mg=new V,ro=class{constructor(t=new V,e=new V){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Zh.subVectors(t,this.start),ia.subVectors(this.end,this.start);let n=ia.dot(ia);if(n===0)return 0;let r=ia.dot(Zh)/n;return e&&(r=re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=pg,n=mg){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;ks.subVectors(l,a),Vs.subVectors(u,c),Ol.subVectors(a,c);let f=ks.dot(ks),h=Vs.dot(Vs),d=Vs.dot(Ol);if(f<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(f<=s)r=0,o=d/h,o=re(o,0,1);else{let g=ks.dot(Ol);if(h<=s)o=0,r=re(-g/f,0,1);else{let x=ks.dot(Vs),m=f*h-x*x;m!==0?r=re((x*d-g*h)/m,0,1):r=0,o=(x*r+d)/h,o<0?(o=0,r=re(-g/f,0,1)):o>1&&(o=1,r=re((x-g)/f,0,1))}}return e.copy(a).addScaledVector(ks,r),n.copy(c).addScaledVector(Vs,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Eu(i,t,e,n){let s=gg(n);switch(e){case pu:return i*t;case gu:return i*t/s.components*s.byteLength;case Ka:return i*t/s.components*s.byteLength;case es:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case mu:return i*t*3/s.components*s.byteLength;case On:return i*t*4/s.components*s.byteLength;case Qa:return i*t*4/s.components*s.byteLength;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(i,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(i,8)*Math.max(t,8)/2;case sc:case rc:case ac:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oc:case mo:case lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ec:case wc:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case go:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gg(i){switch(i){case vn:case uu:return{byteLength:1,components:1};case or:case hu:case Kn:return{byteLength:2,components:1};case Ja:case $a:return{byteLength:2,components:4};case Jn:case Za:case $n:return{byteLength:4,components:1};case fu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ad(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sg(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
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
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
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
#endif`,Lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
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
#endif`,Og=`#ifdef USE_BUMPMAP
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
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qg=`#define PI 3.141592653589793
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
} // validated`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,b0=`uniform sampler2D dfgLUT;
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
}`,S0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D0=`#if defined( USE_POINTS_UV )
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
#endif`,N0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Px=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,kx=`#define LAMBERT
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
}`,Vx=`#define MATCAP
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
}`,Hx=`#define MATCAP
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
}`,Gx=`#define NORMAL
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define PHONG
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
}`,qx=`#define PHONG
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
}`,Yx=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define TOON
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
}`,$x=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,ty=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:Mg,alphahash_pars_fragment:Eg,alphamap_fragment:wg,alphamap_pars_fragment:Tg,alphatest_fragment:Ag,alphatest_pars_fragment:Rg,aomap_fragment:Cg,aomap_pars_fragment:Ig,batching_pars_vertex:Pg,batching_vertex:Lg,begin_vertex:Dg,beginnormal_vertex:Ng,bsdfs:Ug,iridescence_fragment:Fg,bumpmap_pars_fragment:Og,clipping_planes_fragment:Bg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Vg,color_fragment:Hg,color_pars_fragment:Gg,color_pars_vertex:Wg,color_vertex:Xg,common:qg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:$g,emissivemap_fragment:Kg,emissivemap_pars_fragment:jg,colorspace_fragment:Qg,colorspace_pars_fragment:t0,envmap_fragment:e0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:m0,envmap_vertex:r0,fog_vertex:o0,fog_pars_vertex:a0,fog_fragment:c0,fog_pars_fragment:l0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:h0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:x0,lights_phong_fragment:y0,lights_phong_pars_fragment:_0,lights_physical_fragment:v0,lights_physical_pars_fragment:b0,lights_fragment_begin:S0,lights_fragment_maps:M0,lights_fragment_end:E0,lightprobes_pars_fragment:w0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:R0,logdepthbuf_vertex:C0,map_fragment:I0,map_pars_fragment:P0,map_particle_fragment:L0,map_particle_pars_fragment:D0,metalnessmap_fragment:N0,metalnessmap_pars_fragment:U0,morphinstance_vertex:F0,morphcolor_vertex:O0,morphnormal_vertex:B0,morphtarget_pars_vertex:z0,morphtarget_vertex:k0,normal_fragment_begin:V0,normal_fragment_maps:H0,normal_pars_fragment:G0,normal_pars_vertex:W0,normal_vertex:X0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:$0,opaque_fragment:K0,packing:j0,premultiplied_alpha_fragment:Q0,project_vertex:tx,dithering_fragment:ex,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:cx,skinbase_vertex:lx,skinning_pars_vertex:ux,skinning_vertex:hx,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:xx,transmission_pars_fragment:yx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:bx,worldpos_vertex:Sx,background_vert:Mx,background_frag:Ex,backgroundCube_vert:wx,backgroundCube_frag:Tx,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Ix,distance_vert:Px,distance_frag:Lx,equirect_vert:Dx,equirect_frag:Nx,linedashed_vert:Ux,linedashed_frag:Fx,meshbasic_vert:Ox,meshbasic_frag:Bx,meshlambert_vert:zx,meshlambert_frag:kx,meshmatcap_vert:Vx,meshmatcap_frag:Hx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:qx,meshphysical_vert:Yx,meshphysical_frag:Zx,meshtoon_vert:Jx,meshtoon_frag:$x,points_vert:Kx,points_frag:jx,shadow_vert:Qx,shadow_frag:ty,sprite_vert:ey,sprite_frag:ny},Dt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},mn={basic:{uniforms:an([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:an([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:an([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:an([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:an([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:an([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:an([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:an([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:an([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:an([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:an([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:an([Dt.common,Dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:an([Dt.lights,Dt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};mn.physical={uniforms:an([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var Dc={r:0,b:0,g:0},iy=new xe,cd=new oe;cd.set(-1,0,0,0,1,0,0,0,1);function sy(i,t,e,n,s,r){let o=new Qt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let M=b.backgroundBlurriness>0;T=t.get(T,M)}return T}function g(b){let T=!1,M=d(b);M===null?m(o,a):M&&M.isColor&&(m(M,1),T=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,T){let M=d(T);M&&(M.isCubeTexture||M.mapping===co)?(l===void 0&&(l=new fe(new Pe(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:ys(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cd),l.material.toneMapped=he.getTransfer(M.colorSpace)!==_e,(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new fe(new Yn(2,2),new ke({name:"BackgroundMaterial",uniforms:ys(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=he.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,T){b.getRGB(Dc,bu(i)),e.buffers.color.setClear(Dc.r,Dc.g,Dc.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:x,dispose:p}}function ry(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(U,z,q,k,X){let W=!1,$=f(U,k,q,z);r!==$&&(r=$,l(r.object)),W=d(U,k,q,X),W&&g(U,k,q,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(U,z,q,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function f(U,z,q,k){let X=k.wireframe===!0,W=n[z.id];W===void 0&&(W={},n[z.id]=W);let $=U.isInstancedMesh===!0?U.id:0,ft=W[$];ft===void 0&&(ft={},W[$]=ft);let rt=ft[q.id];rt===void 0&&(rt={},ft[q.id]=rt);let it=rt[X];return it===void 0&&(it=h(c()),rt[X]=it),it}function h(U){let z=[],q=[],k=[];for(let X=0;X<e;X++)z[X]=0,q[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:k,object:U,attributes:{},index:null}}function d(U,z,q,k){let X=r.attributes,W=z.attributes,$=0,ft=q.getAttributes();for(let rt in ft)if(ft[rt].location>=0){let ot=X[rt],vt=W[rt];if(vt===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(vt=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(vt=U.instanceColor)),ot===void 0||ot.attribute!==vt||vt&&ot.data!==vt.data)return!0;$++}return r.attributesNum!==$||r.index!==k}function g(U,z,q,k){let X={},W=z.attributes,$=0,ft=q.getAttributes();for(let rt in ft)if(ft[rt].location>=0){let ot=W[rt];ot===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(ot=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(ot=U.instanceColor));let vt={};vt.attribute=ot,ot&&ot.data&&(vt.data=ot.data),X[rt]=vt,$++}r.attributes=X,r.attributesNum=$,r.index=k}function x(){let U=r.newAttributes;for(let z=0,q=U.length;z<q;z++)U[z]=0}function m(U){p(U,0)}function p(U,z){let q=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;q[U]=1,k[U]===0&&(i.enableVertexAttribArray(U),k[U]=1),X[U]!==z&&(i.vertexAttribDivisor(U,z),X[U]=z)}function b(){let U=r.newAttributes,z=r.enabledAttributes;for(let q=0,k=z.length;q<k;q++)z[q]!==U[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function T(U,z,q,k,X,W,$){$===!0?i.vertexAttribIPointer(U,z,q,X,W):i.vertexAttribPointer(U,z,q,k,X,W)}function M(U,z,q,k){x();let X=k.attributes,W=q.getAttributes(),$=z.defaultAttributeValues;for(let ft in W){let rt=W[ft];if(rt.location>=0){let it=X[ft];if(it===void 0&&(ft==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),ft==="instanceColor"&&U.instanceColor&&(it=U.instanceColor)),it!==void 0){let ot=it.normalized,vt=it.itemSize,Rt=t.get(it);if(Rt===void 0)continue;let Zt=Rt.buffer,Yt=Rt.type,$t=Rt.bytesPerElement,at=Yt===i.INT||Yt===i.UNSIGNED_INT||it.gpuType===Za;if(it.isInterleavedBufferAttribute){let dt=it.data,Ct=dt.stride,Ut=it.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<rt.locationSize;_t++)p(rt.location+_t,dt.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<rt.locationSize;_t++)m(rt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let _t=0;_t<rt.locationSize;_t++)T(rt.location+_t,vt/rt.locationSize,Yt,ot,Ct*$t,(Ut+vt/rt.locationSize*_t)*$t,at)}else{if(it.isInstancedBufferAttribute){for(let dt=0;dt<rt.locationSize;dt++)p(rt.location+dt,it.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let dt=0;dt<rt.locationSize;dt++)m(rt.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let dt=0;dt<rt.locationSize;dt++)T(rt.location+dt,vt/rt.locationSize,Yt,ot,vt*$t,vt/rt.locationSize*dt*$t,at)}}else if($!==void 0){let ot=$[ft];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(rt.location,ot);break;case 3:i.vertexAttrib3fv(rt.location,ot);break;case 4:i.vertexAttrib4fv(rt.location,ot);break;default:i.vertexAttrib1fv(rt.location,ot)}}}}b()}function S(){I();for(let U in n){let z=n[U];for(let q in z){let k=z[q];for(let X in k){let W=k[X];for(let $ in W)u(W[$].object),delete W[$];delete k[X]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let q in z){let k=z[q];for(let X in k){let W=k[X];for(let $ in W)u(W[$].object),delete W[$];delete k[X]}}delete n[U.id]}function L(U){for(let z in n){let q=n[z];for(let k in q){let X=q[k];if(X[U.id]===void 0)continue;let W=X[U.id];for(let $ in W)u(W[$].object),delete W[$];delete X[U.id]}}}function _(U){for(let z in n){let q=n[z],k=U.isInstancedMesh===!0?U.id:0,X=q[k];if(X!==void 0){for(let W in X){let $=X[W];for(let ft in $)u($[ft].object),delete $[ft];delete X[W]}delete q[k],Object.keys(q).length===0&&delete n[z]}}}function I(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function oy(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ay(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==On&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let _=L===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==vn&&L!==$n&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(jt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,maxSamples:S,samples:w}}function cy(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let b=r?0:n,T=b*4,M=p.clippingState||null;c.value=M,M=u(g,h,T,d);for(let S=0;S!==T;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=d;T!==x;++T,M+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var lr=4,ly=6,uy=20,hy=256,_o=new Zi,kf=new Qt,wu=null,Tu=0,Au=0,Ru=!1,fy=new V,_s=new V,Uc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=fy}=r;wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wu,Tu,Au),this._renderer.xr.enabled=Ru,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Kn,format:On,colorSpace:Cr,depthBuffer:!1},s=Vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dy(r)),this._blurMaterial=my(r,t,e),this._ggxMaterial=py(r,t,e)}return s}_compileMaterial(t){let e=new fe(new me,t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,s,r){let c=new hn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(kf),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new Pe,new dn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(kf),p=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):M===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));let S=this._cubeSize;cr(s,M*S,T>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ji||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,_o)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-lr?n-g+lr:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,cr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,_o),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,cr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,_o)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-lr?s-this._lodMax+lr:0),h=4*(this._cubeSize-u);cr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,_o)}};function dy(i){let t=[],e=[],n=i,s=i-lr+1+ly;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let b=p%3*2/3-1,T=p>2?0:-1,M=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];g.set(M,d*h*p);for(let S=0;S<h;S++){let w=u[S*2]*2-1,L=u[S*2+1]*2-1;p===0?_s.set(1,L,w):p===1?_s.set(-w,1,-L):p===2?_s.set(-w,L,1):p===3?_s.set(-1,L,-w):p===4?_s.set(-w,-1,L):_s.set(w,L,-1),_s.toArray(x,(p*h+S)*d)}}let m=new me;m.setAttribute("position",new Be(g,d)),m.setAttribute("outputDirection",new Be(x,d)),e.push(new fe(m,null)),n>lr&&n--}return{lodMeshes:e,sizeLods:t}}function Vf(i,t,e){let n=new yn(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function py(i,t,e){return new ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function my(i,t,e){return new ke({name:"SphericalGaussianBlur",defines:{SAMPLES:uy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Hf(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Gf(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ui});r.uniforms.tEquirect.value=e;let o=new fe(s,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Qe),new Ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function gy(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Xa||d===qa)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Fc(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Xa||d===qa,x=d===ji||d===xs;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Uc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||x&&b&&c(b)?(n===null&&(n=new Uc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Xa?h.mapping=ji:d===qa&&(h.mapping=xs),h}function c(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function xy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function yy(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let b=d.array;x=d.version;for(let T=0,M=b.length;T<M;T+=3){let S=b[T+0],w=b[T+1],L=b[T+2];h.push(S,w,w,L,L,S)}}else{let b=g.array;x=g.version;for(let T=0,M=b.length/3-1;T<M;T+=3){let S=T+0,w=T+1,L=T+2;h.push(S,w,w,L,L,S)}}let m=new(g.count>=65535?Ur:Nr)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function _y(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function vy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function by(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let I=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],T=0;d===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let M=a.attributes.position.count*T,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*S*4*f),L=new Dr(w,M,S,f);L.type=$n,L.needsUpdate=!0;let _=T*4;for(let O=0;O<f;O++){let U=m[O],z=p[O],q=b[O],k=M*S*4*O;for(let X=0;X<U.count;X++){let W=X*_;d===!0&&(s.fromBufferAttribute(U,X),w[k+W+0]=s.x,w[k+W+1]=s.y,w[k+W+2]=s.z,w[k+W+3]=0),g===!0&&(s.fromBufferAttribute(z,X),w[k+W+4]=s.x,w[k+W+5]=s.y,w[k+W+6]=s.z,w[k+W+7]=0),x===!0&&(s.fromBufferAttribute(q,X),w[k+W+8]=s.x,w[k+W+9]=s.y,w[k+W+10]=s.z,w[k+W+11]=q.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new wt(M,S)},n.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sy(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var My={[iu]:"LINEAR_TONE_MAPPING",[su]:"REINHARD_TONE_MAPPING",[ru]:"CINEON_TONE_MAPPING",[ao]:"ACES_FILMIC_TONE_MAPPING",[au]:"AGX_TONE_MAPPING",[cu]:"NEUTRAL_TONE_MAPPING",[ou]:"CUSTOM_TONE_MAPPING"};function Ey(i,t,e,n,s,r){let o=new yn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new me;l.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ie([0,2,0,0,2,0],2));let u=new Ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new fe(l,u),h=new Zi(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,b=[],T=!1;this.setSize=function(M,S){o.setSize(M,S),a!==null&&a.setSize(M,S),c!==null&&c.setSize(M,S);for(let w=0;w<b.length;w++){let L=b[w];L.setSize&&L.setSize(M,S)}},this.setEffects=function(M){b=M,T=b.length>0&&b[0].isRenderPass===!0;let S=o.width,w=o.height;b.length>0&&a===null&&(a=new yn(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new yn(S,w,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<b.length;L++){let _=b[L];_.setSize&&_.setSize(S,w)}},this.begin=function(M,S){if(x||M.toneMapping===Zn&&b.length===0)return!1;if(p=S,S!==null){let w=S.width,L=S.height;(o.width!==w||o.height!==L)&&this.setSize(w,L)}return T===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=Zn,!0},this.hasRenderPass=function(){return T},this.end=function(M,S){M.toneMapping=m,x=!0;let w=o,L=a;for(let _=0;_<b.length;_++){let I=b[_];I.enabled!==!1&&(I.render(M,L,w,S),I.needsSwap!==!1&&(w=L,L=L===a?c:a))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,u.defines={},he.getTransfer(d)===_e&&(u.defines.SRGB_TRANSFER="");let _=My[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(p),M.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ld=new fn,Pu=new Hi(1,1),ud=new Dr,hd=new xa,fd=new zr,Wf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),Zf=new Float32Array(4);function hr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Wf[s];if(r===void 0&&(r=new Float32Array(s),Wf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zc(i,t){let e=Xf[t];e===void 0&&(e=new Int32Array(t),Xf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Cy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Zf.set(n),i.uniformMatrix2fv(this.addr,!1,Zf),He(e,n)}}function Iy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Yf.set(n),i.uniformMatrix3fv(this.addr,!1,Yf),He(e,n)}}function Py(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;qf.set(n),i.uniformMatrix4fv(this.addr,!1,qf),He(e,n)}}function Ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Fy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function ky(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pu.compareFunction=e.isReversedDepthBuffer()?Pc:Ic,r=Pu):r=ld,e.setTexture2D(t||r,s)}function Vy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hd,s)}function Hy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fd,s)}function Gy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ud,s)}function Wy(i){switch(i){case 5126:return wy;case 35664:return Ty;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Iy;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Ny;case 35669:case 35673:return Uy;case 5125:return Fy;case 36294:return Oy;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Xy(i,t){i.uniform1fv(this.addr,t)}function qy(i,t){let e=hr(t,this.size,2);i.uniform2fv(this.addr,e)}function Yy(i,t){let e=hr(t,this.size,3);i.uniform3fv(this.addr,e)}function Zy(i,t){let e=hr(t,this.size,4);i.uniform4fv(this.addr,e)}function Jy(i,t){let e=hr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $y(i,t){let e=hr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ky(i,t){let e=hr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jy(i,t){i.uniform1iv(this.addr,t)}function Qy(i,t){i.uniform2iv(this.addr,t)}function t_(i,t){i.uniform3iv(this.addr,t)}function e_(i,t){i.uniform4iv(this.addr,t)}function n_(i,t){i.uniform1uiv(this.addr,t)}function i_(i,t){i.uniform2uiv(this.addr,t)}function s_(i,t){i.uniform3uiv(this.addr,t)}function r_(i,t){i.uniform4uiv(this.addr,t)}function o_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Pu:o=ld;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function a_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hd,r[o])}function c_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fd,r[o])}function l_(i,t,e){let n=this.cache,s=t.length,r=zc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ud,r[o])}function u_(i){switch(i){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return Zy;case 35674:return Jy;case 35675:return $y;case 35676:return Ky;case 5124:case 35670:return jy;case 35667:case 35671:return Qy;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return l_}}var Lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wy(e.type)}},Du=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u_(e.type)}},Nu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Cu=/(\w+)(\])?(\[|\.)?/g;function Jf(i,t){i.seq.push(t),i.map[t.id]=t}function h_(i,t,e){let n=i.name,s=n.length;for(Cu.lastIndex=0;;){let r=Cu.exec(n),o=Cu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jf(e,l===void 0?new Lu(a,i,t):new Du(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Nu(a),Jf(e,f)),e=f}}}var ur=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);h_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function $f(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var f_=37297,d_=0;function p_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Kf=new oe;function m_(i){he._getMatrix(Kf,he.workingColorSpace,i);let t=`mat3( ${Kf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+p_(i.getShaderSource(t),a)}else return r}function g_(i,t){let e=m_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var x_={[iu]:"Linear",[su]:"Reinhard",[ru]:"Cineon",[ao]:"ACESFilmic",[au]:"AgX",[cu]:"Neutral",[ou]:"Custom"};function y_(i,t){let e=x_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nc=new V;function __(){he.getLuminanceCoefficients(Nc);let i=Nc.x.toFixed(4),t=Nc.y.toFixed(4),e=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function b_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bo(i){return i!==""}function Qf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(i){return i.replace(M_,w_)}var E_=new Map;function w_(i,t){let e=ce[t];if(e===void 0){let n=E_.get(t);if(n!==void 0)e=ce[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Uu(e)}var T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(T_,A_)}function A_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var R_={[ms]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function C_(i){return R_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I_={[ji]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function P_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":I_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var L_={[xs]:"ENVMAP_MODE_REFRACTION"};function D_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":L_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N_={[Wa]:"ENVMAP_BLENDING_MULTIPLY",[xf]:"ENVMAP_BLENDING_MIX",[yf]:"ENVMAP_BLENDING_ADD"};function U_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":N_[i.combine]||"ENVMAP_BLENDING_NONE"}function F_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function O_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=C_(e),l=P_(e),u=D_(e),f=U_(e),h=F_(e),d=v_(e),g=b_(r),x=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(m=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Zn?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,g_("linearToOutputTexel",e.outputColorSpace),__(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bo).join(`
`)),o=Uu(o),o=Qf(o,e),o=td(o,e),a=Uu(a),a=Qf(a,e),a=td(a,e),o=ed(o),a=ed(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=b+m+o,M=b+p+a,S=$f(s,s.VERTEX_SHADER,T),w=$f(s,s.FRAGMENT_SHADER,M);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",q=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(w)||"",X=z.trim(),W=q.trim(),$=k.trim(),ft=!0,rt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{let it=jf(s,S,"vertex"),ot=jf(s,w,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+X+`
`+it+`
`+ot)}else X!==""?jt("WebGLProgram: Program Info Log:",X):(W===""||$==="")&&(rt=!1);rt&&(U.diagnostics={runnable:ft,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(S),s.deleteShader(w),_=new ur(s,x),I=S_(s,x)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let I;this.getAttributes=function(){return I===void 0&&L(this),I};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(x,f_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var B_=0,Fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ou(t),e.set(t,n)),n}},Ou=class{constructor(t){this.id=B_++,this.code=t,this.usedTimes=0}};function z_(i){return i===es||i===mo||i===go}function k_(i,t,e,n,s,r){let o=new Zs,a=new Fu,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,I,O,U,z,q){let k=U.fog,X=z.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ft=t.get(_.envMap||W,$),rt=ft&&ft.mapping===co?ft.image.height:null,it=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&jt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=ot!==void 0?ot.length:0,Rt=0;X.morphAttributes.position!==void 0&&(Rt=1),X.morphAttributes.normal!==void 0&&(Rt=2),X.morphAttributes.color!==void 0&&(Rt=3);let Zt,Yt,$t,at;if(it){let se=mn[it];Zt=se.vertexShader,Yt=se.fragmentShader}else{Zt=_.vertexShader,Yt=_.fragmentShader;let se=a.getVertexShaderStage(_),Kt=a.getFragmentShaderStage(_);a.update(_,se,Kt),$t=se.id,at=Kt.id}let dt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ut=z.isInstancedMesh===!0,_t=z.isBatchedMesh===!0,pt=!!_.map,Ft=!!_.matcap,ht=!!ft,yt=!!_.aoMap,bt=!!_.lightMap,St=!!_.bumpMap&&_.wireframe===!1,At=!!_.normalMap,Gt=!!_.displacementMap,Wt=!!_.emissiveMap,Jt=!!_.metalnessMap,Tt=!!_.roughnessMap,B=_.anisotropy>0,zt=_.clearcoat>0,Pt=_.dispersion>0,N=_.retroreflectivity>0,E=_.iridescence>0,j=_.sheen>0,et=_.transmission>0,lt=B&&!!_.anisotropyMap,F=zt&&!!_.clearcoatMap,y=zt&&!!_.clearcoatNormalMap,v=zt&&!!_.clearcoatRoughnessMap,A=E&&!!_.iridescenceMap,P=E&&!!_.iridescenceThicknessMap,D=j&&!!_.sheenColorMap,G=j&&!!_.sheenRoughnessMap,H=!!_.specularMap,tt=!!_.specularColorMap,Q=!!_.specularIntensityMap,xt=et&&!!_.transmissionMap,C=et&&!!_.thicknessMap,K=!!_.gradientMap,Y=!!_.alphaMap,mt=_.alphaTest>0,gt=!!_.alphaHash,ut=!!_.extensions,Et=Zn;_.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Et=i.toneMapping);let It={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:Zt,fragmentShader:Yt,defines:_.defines,customVertexShaderID:$t,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:_t,batchingColor:_t&&z._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&z.instanceColor!==null,instancingMorph:Ut&&z.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:Ft,envMap:ht,envMapMode:ht&&ft.mapping,envMapCubeUVHeight:rt,aoMap:yt,lightMap:bt,bumpMap:St,normalMap:At,displacementMap:Gt,emissiveMap:Wt,normalMapObjectSpace:At&&_.normalMapType===bf,normalMapTangentSpace:At&&_.normalMapType===xo,packedNormalMap:At&&_.normalMapType===xo&&z_(_.normalMap.format),metalnessMap:Jt,roughnessMap:Tt,anisotropy:B,anisotropyMap:lt,clearcoat:zt,clearcoatMap:F,clearcoatNormalMap:y,clearcoatRoughnessMap:v,dispersion:Pt,retroreflection:N,iridescence:E,iridescenceMap:A,iridescenceThicknessMap:P,sheen:j,sheenColorMap:D,sheenRoughnessMap:G,specularMap:H,specularColorMap:tt,specularIntensityMap:Q,transmission:et,transmissionMap:xt,thicknessMap:C,gradientMap:K,opaque:_.transparent===!1&&_.blending===rr&&_.alphaToCoverage===!1,alphaMap:Y,alphaTest:mt,alphaHash:gt,combine:_.combine,mapUv:pt&&g(_.map.channel),aoMapUv:yt&&g(_.aoMap.channel),lightMapUv:bt&&g(_.lightMap.channel),bumpMapUv:St&&g(_.bumpMap.channel),normalMapUv:At&&g(_.normalMap.channel),displacementMapUv:Gt&&g(_.displacementMap.channel),emissiveMapUv:Wt&&g(_.emissiveMap.channel),metalnessMapUv:Jt&&g(_.metalnessMap.channel),roughnessMapUv:Tt&&g(_.roughnessMap.channel),anisotropyMapUv:lt&&g(_.anisotropyMap.channel),clearcoatMapUv:F&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:v&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:A&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:P&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:D&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&g(_.sheenRoughnessMap.channel),specularMapUv:H&&g(_.specularMap.channel),specularColorMapUv:tt&&g(_.specularColorMap.channel),specularIntensityMapUv:Q&&g(_.specularIntensityMap.channel),transmissionMapUv:xt&&g(_.transmissionMap.channel),thicknessMapUv:C&&g(_.thicknessMap.channel),alphaMapUv:Y&&g(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(At||B),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(pt||Y),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&At===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Rt,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ut&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&_.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function m(_){let I=[];if(_.shaderID?I.push(_.shaderID):(I.push(_.customVertexShaderID),I.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)I.push(O),I.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(p(I,_),b(I,_),I.push(i.outputColorSpace)),I.push(_.customProgramCacheKey),I.join()}function p(_,I){_.push(I.precision),_.push(I.outputColorSpace),_.push(I.envMapMode),_.push(I.envMapCubeUVHeight),_.push(I.mapUv),_.push(I.alphaMapUv),_.push(I.lightMapUv),_.push(I.aoMapUv),_.push(I.bumpMapUv),_.push(I.normalMapUv),_.push(I.displacementMapUv),_.push(I.emissiveMapUv),_.push(I.metalnessMapUv),_.push(I.roughnessMapUv),_.push(I.anisotropyMapUv),_.push(I.clearcoatMapUv),_.push(I.clearcoatNormalMapUv),_.push(I.clearcoatRoughnessMapUv),_.push(I.iridescenceMapUv),_.push(I.iridescenceThicknessMapUv),_.push(I.sheenColorMapUv),_.push(I.sheenRoughnessMapUv),_.push(I.specularMapUv),_.push(I.specularColorMapUv),_.push(I.specularIntensityMapUv),_.push(I.transmissionMapUv),_.push(I.thicknessMapUv),_.push(I.combine),_.push(I.fogExp2),_.push(I.sizeAttenuation),_.push(I.morphTargetsCount),_.push(I.morphAttributeCount),_.push(I.numSunLights),_.push(I.numDirLights),_.push(I.numPointLights),_.push(I.numSpotLights),_.push(I.numSpotLightMaps),_.push(I.numHemiLights),_.push(I.numRectAreaLights),_.push(I.numSunLightShadows),_.push(I.numDirLightShadows),_.push(I.numPointLightShadows),_.push(I.numSpotLightShadows),_.push(I.numSpotLightShadowsWithMaps),_.push(I.numLightProbes),_.push(I.shadowMapType),_.push(I.toneMapping),_.push(I.numClippingPlanes),_.push(I.numClipIntersection),_.push(I.depthPacking)}function b(_,I){o.disableAll(),I.instancing&&o.enable(0),I.instancingColor&&o.enable(1),I.instancingMorph&&o.enable(2),I.matcap&&o.enable(3),I.envMap&&o.enable(4),I.normalMapObjectSpace&&o.enable(5),I.normalMapTangentSpace&&o.enable(6),I.clearcoat&&o.enable(7),I.iridescence&&o.enable(8),I.alphaTest&&o.enable(9),I.vertexColors&&o.enable(10),I.vertexAlphas&&o.enable(11),I.vertexUv1s&&o.enable(12),I.vertexUv2s&&o.enable(13),I.vertexUv3s&&o.enable(14),I.vertexTangents&&o.enable(15),I.anisotropy&&o.enable(16),I.alphaHash&&o.enable(17),I.batching&&o.enable(18),I.dispersion&&o.enable(19),I.retroreflection&&o.enable(24),I.batchingColor&&o.enable(20),I.gradientMap&&o.enable(21),I.packedNormalMap&&o.enable(22),I.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reversedDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),I.numLightProbeGrids>0&&o.enable(22),I.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function T(_){let I=d[_.type],O;if(I){let U=mn[I];O=yo.clone(U.uniforms)}else O=_.uniforms;return O}function M(_,I){let O=u.get(I);return O!==void 0?++O.usedTimes:(O=new O_(i,I,_,s),l.push(O),u.set(I,O)),O}function S(_){if(--_.usedTimes===0){let I=l.indexOf(_);l[I]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:L}}function V_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function H_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=g,b.materialVariant=o(h),b.groupOrder=x,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function c(h,d,g,x,m,p,b){b.reversedDepth===!0&&(m=-m);let T=a(h,d,g,x,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function l(h,d,g,x,m,p){let b=a(h,d,g,x,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function u(h,d){e.length>1&&e.sort(h||H_),n.length>1&&n.sort(d||id),s.length>1&&s.sort(d||id)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function G_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new sd,i.set(n,[o])):s>=r.length?(o=new sd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function W_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Qt};break;case"SpotLight":e={position:new V,direction:new V,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function X_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var q_=0;function Y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z_(i){let t=new W_,e=X_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new xe,o=new xe;function a(l){let u=0,f=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,T=0,M=0,S=0,w=0,L=0,_=0,I=0,O=0;l.sort(Y_);for(let z=0,q=l.length;z<q;z++){let k=l[z],X=k.color,W=k.intensity,$=k.distance,ft=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===es?ft=k.shadow.map.texture:ft=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=X.r*W,f+=X.g*W,h+=X.b*W;else if(k.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(k.sh.coefficients[rt],W);O++}else if(k.isSunLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let it=k.shadow,ot=e.get(k);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=ft;let vt=it.getViewportCount();for(let Rt=0;Rt<vt;Rt++)n.sunShadowMatrix[x+Rt]=it.getMatrix(Rt),n.sunShadowCascade[x+Rt]=it._cascadeData[Rt];x+=vt,g++}n.sun[d]=rt,d++}else if(k.isDirectionalLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let it=k.shadow,ot=e.get(k);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=ft,n.directionalShadowMatrix[m]=k.shadow.matrix,S++}n.directional[m]=rt,m++}else if(k.isSpotLight){let rt=t.get(k);rt.position.setFromMatrixPosition(k.matrixWorld),rt.color.copy(X).multiplyScalar(W),rt.distance=$,rt.coneCos=Math.cos(k.angle),rt.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),rt.decay=k.decay,n.spot[b]=rt;let it=k.shadow;if(k.map&&(n.spotLightMap[_]=k.map,_++,it.updateMatrices(k),k.castShadow&&I++),n.spotLightMatrix[b]=it.matrix,k.castShadow){let ot=e.get(k);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,n.spotShadow[b]=ot,n.spotShadowMap[b]=ft,L++}b++}else if(k.isRectAreaLight){let rt=t.get(k);rt.color.copy(X).multiplyScalar(W),rt.halfWidth.set(k.width*.5,0,0),rt.halfHeight.set(0,k.height*.5,0),n.rectArea[T]=rt,T++}else if(k.isPointLight){let rt=t.get(k);if(rt.color.copy(k.color).multiplyScalar(k.intensity),rt.distance=k.distance,rt.decay=k.decay,k.castShadow){let it=k.shadow,ot=e.get(k);ot.shadowIntensity=it.intensity,ot.shadowBias=it.bias,ot.shadowNormalBias=it.normalBias,ot.shadowRadius=it.radius,ot.shadowMapSize=it.mapSize,ot.shadowCameraNear=it.camera.near,ot.shadowCameraFar=it.camera.far,n.pointShadow[p]=ot,n.pointShadowMap[p]=ft,n.pointShadowMatrix[p]=k.shadow.matrix,w++}n.point[p]=rt,p++}else if(k.isHemisphereLight){let rt=t.get(k);rt.skyColor.copy(k.color).multiplyScalar(W),rt.groundColor.copy(k.groundColor).multiplyScalar(W),n.hemi[M]=rt,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let U=n.hash;(U.sunLength!==d||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==b||U.rectAreaLength!==T||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==S||U.numPointShadows!==w||U.numSpotShadows!==L||U.numSpotMaps!==_||U.numLightProbes!==O)&&(n.sun.length=d,n.directional.length=m,n.spot.length=b,n.rectArea.length=T,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-I,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=O,U.sunLength=d,U.directionalLength=m,U.pointLength=p,U.spotLength=b,U.rectAreaLength=T,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=S,U.numPointShadows=w,U.numSpotShadows=L,U.numSpotMaps=_,U.numLightProbes=O,n.version=q_++)}function c(l,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){let M=l[b];if(M.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(M.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function rd(i){let t=new Z_(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function J_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new rd(i),t.set(s,[a])):r>=o.length?(a=new rd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`,j_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Q_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],od=new xe,vo=new V,Iu=new V;function tv(i,t,e){let n=new $s,s=new wt,r=new wt,o=new ve,a=new Ia,c=new Pa,l={},u=e.maxTextureSize,f={[Ki]:pn,[pn]:Ki,[_n]:_n},h=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:$_,fragmentShader:K_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let p=this.type;this.render=function(w,L,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Kh&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);let I=i.getRenderTarget(),O=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ui),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=p!==this.type;q&&L.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(X=>X.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,X=w.length;k<X;k++){let W=w[k],$=W.shadow;if($===void 0){jt("WebGLShadowMap:",W,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ft=$.getFrameExtents();s.multiply(ft),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,$.mapSize.y=r.y));let rt=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=rt,$.map===null||q===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===sr){if(W.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new yn(s.x,s.y,{format:es,type:Kn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),$.map.texture.name=W.name+".shadowMap",$.map.depthTexture=new Hi(s.x,s.y,$n),$.map.depthTexture.name=W.name+".shadowMapDepth",$.map.depthTexture.format=ai,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=qe,$.map.depthTexture.magFilter=qe}else W.isPointLight?($.map=new Fc(s.x),$.map.depthTexture=new Sa(s.x,Jn)):($.map=new yn(s.x,s.y),$.map.depthTexture=new Hi(s.x,s.y,Jn)),$.map.depthTexture.name=W.name+".shadowMap",$.map.depthTexture.format=ai,this.type===ms?($.map.depthTexture.compareFunction=rt?Pc:Ic,$.map.depthTexture.minFilter=Qe,$.map.depthTexture.magFilter=Qe):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=qe,$.map.depthTexture.magFilter=qe);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let it=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();W.isPointLight!==!0&&$.updateMatrices(W,_);for(let ot=0;ot<it;ot++){let vt=$.getCamera(ot);if(W.isPointLight){let Rt=$.camera,Zt=$.matrix,Yt=W.distance||Rt.far;Yt!==Rt.far&&(Rt.far=Yt,Rt.updateProjectionMatrix()),vo.setFromMatrixPosition(W.matrixWorld),Rt.position.copy(vo),Iu.copy(Rt.position),Iu.add(j_[ot]),Rt.up.copy(Q_[ot]),Rt.lookAt(Iu),Rt.updateMatrixWorld(),Zt.makeTranslation(-vo.x,-vo.y,-vo.z),od.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(od,Rt.coordinateSystem,Rt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ot),i.clear();else{ot===0&&(i.setRenderTarget($.map),i.clear());let Rt=$.getViewport(ot);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(o)}n=$.getFrustum(ot),M(L,_,vt,W,this.type)}$.isPointLightShadow!==!0&&this.type===sr&&b($,_),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,O,U)};function b(w,L){let _=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new yn(s.x,s.y,{format:es,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,_,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,_,d,x,null)}function T(w,L,_,I){let O=null,U=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)O=U;else if(O=_.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let z=O.uuid,q=L.uuid,k=l[z];k===void 0&&(k={},l[z]=k);let X=k[q];X===void 0&&(X=O.clone(),k[q]=X,L.addEventListener("dispose",S)),O=X}if(O.visible=L.visible,O.wireframe=L.wireframe,I===sr?O.side=L.shadowSide!==null?L.shadowSide:L.side:O.side=L.shadowSide!==null?L.shadowSide:f[L.side],O.alphaMap=L.alphaMap,O.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,O.map=L.map,O.clipShadows=L.clipShadows,O.clippingPlanes=L.clippingPlanes,O.clipIntersection=L.clipIntersection,O.displacementMap=L.displacementMap,O.displacementScale=L.displacementScale,O.displacementBias=L.displacementBias,O.wireframeLinewidth=L.wireframeLinewidth,O.linewidth=L.linewidth,_.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let z=i.properties.get(O);z.light=_}return O}function M(w,L,_,I,O){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===sr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let q=t.update(w),k=w.material;if(Array.isArray(k)){let X=q.groups;for(let W=0,$=X.length;W<$;W++){let ft=X[W],rt=k[ft.materialIndex];if(rt&&rt.visible){let it=T(w,rt,I,O);w.onBeforeShadow(i,w,L,_,q,it,ft),i.renderBufferDirect(_,null,q,it,w,ft),w.onAfterShadow(i,w,L,_,q,it,ft)}}}else if(k.visible){let X=T(w,k,I,O);w.onBeforeShadow(i,w,L,_,q,X,null),i.renderBufferDirect(_,null,q,X,w,null),w.onAfterShadow(i,w,L,_,q,X,null)}}let z=w.children;for(let q=0,k=z.length;q<k;q++)M(z[q],L,_,I,O)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let I=l[_],O=w.target.uuid;O in I&&(I[O].dispose(),delete I[O])}}}function ev(i,t){function e(){let C=!1,K=new ve,Y=null,mt=new ve(0,0,0,0);return{setMask:function(gt){Y!==gt&&!C&&(i.colorMask(gt,gt,gt,gt),Y=gt)},setLocked:function(gt){C=gt},setClear:function(gt,ut,Et,It,se){se===!0&&(gt*=It,ut*=It,Et*=It),K.set(gt,ut,Et,It),mt.equals(K)===!1&&(i.clearColor(gt,ut,Et,It),mt.copy(K))},reset:function(){C=!1,Y=null,mt.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,Y=null,mt=null,gt=null;return{setReversed:function(ut){if(K!==ut){let Et=t.get("EXT_clip_control");ut?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),K=ut;let It=gt;gt=null,this.setClear(It)}},getReversed:function(){return K},setTest:function(ut){ut?dt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ut){Y!==ut&&!C&&(i.depthMask(ut),Y=ut)},setFunc:function(ut){if(K&&(ut=Lf[ut]),mt!==ut){switch(ut){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=ut}},setLocked:function(ut){C=ut},setClear:function(ut){gt!==ut&&(gt=ut,K&&(ut=1-ut),i.clearDepth(ut))},reset:function(){C=!1,Y=null,mt=null,gt=null,K=!1}}}function s(){let C=!1,K=null,Y=null,mt=null,gt=null,ut=null,Et=null,It=null,se=null;return{setTest:function(Kt){C||(Kt?dt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Kt){K!==Kt&&!C&&(i.stencilMask(Kt),K=Kt)},setFunc:function(Kt,ge,be){(Y!==Kt||mt!==ge||gt!==be)&&(i.stencilFunc(Kt,ge,be),Y=Kt,mt=ge,gt=be)},setOp:function(Kt,ge,be){(ut!==Kt||Et!==ge||It!==be)&&(i.stencilOp(Kt,ge,be),ut=Kt,Et=ge,It=be)},setLocked:function(Kt){C=Kt},setClear:function(Kt){se!==Kt&&(i.clearStencil(Kt),se=Kt)},reset:function(){C=!1,K=null,Y=null,mt=null,gt=null,ut=null,Et=null,It=null,se=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,b=null,T=null,M=null,S=null,w=null,L=null,_=new Qt(0,0,0),I=0,O=!1,U=null,z=null,q=null,k=null,X=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ft=0,rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(rt)[1]),$=ft>=1):rt.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),$=ft>=2);let it=null,ot={},vt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),Zt=new ve().fromArray(vt),Yt=new ve().fromArray(Rt);function $t(C,K,Y,mt){let gt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(C,ut),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<Y;Et++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(K+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ut}let at={};at[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(Gs),St(!1),At(jl),dt(i.CULL_FACE),yt(ui);function dt(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Ct(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Ut(C,K){return h[C]!==K?(i.bindFramebuffer(C,K),h[C]=K,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=K),!0):!1}function _t(C,K){let Y=g,mt=!1;if(C){Y=d.get(K),Y===void 0&&(Y=[],d.set(K,Y));let gt=C.textures;if(Y.length!==gt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Et=gt.length;ut<Et;ut++)Y[ut]=i.COLOR_ATTACHMENT0+ut;Y.length=gt.length,mt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,mt=!0);mt&&i.drawBuffers(Y)}function pt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let Ft={[gs]:i.FUNC_ADD,[Qh]:i.FUNC_SUBTRACT,[tf]:i.FUNC_REVERSE_SUBTRACT};Ft[ef]=i.MIN,Ft[nf]=i.MAX;let ht={[sf]:i.ZERO,[rf]:i.ONE,[of]:i.SRC_COLOR,[eu]:i.SRC_ALPHA,[ff]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[cf]:i.DST_ALPHA,[af]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[hf]:i.ONE_MINUS_DST_COLOR,[lf]:i.ONE_MINUS_DST_ALPHA,[df]:i.CONSTANT_COLOR,[pf]:i.ONE_MINUS_CONSTANT_COLOR,[mf]:i.CONSTANT_ALPHA,[gf]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(C,K,Y,mt,gt,ut,Et,It,se,Kt){if(C===ui){m===!0&&(Ct(i.BLEND),m=!1);return}if(m===!1&&(dt(i.BLEND),m=!0),C!==jh){if(C!==p||Kt!==O){if((b!==gs||S!==gs)&&(i.blendEquation(i.FUNC_ADD),b=gs,S=gs),Kt)switch(C){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oo:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",C);break}else switch(C){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",C);break}T=null,M=null,w=null,L=null,_.set(0,0,0),I=0,p=C,O=Kt}return}gt=gt||K,ut=ut||Y,Et=Et||mt,(K!==b||gt!==S)&&(i.blendEquationSeparate(Ft[K],Ft[gt]),b=K,S=gt),(Y!==T||mt!==M||ut!==w||Et!==L)&&(i.blendFuncSeparate(ht[Y],ht[mt],ht[ut],ht[Et]),T=Y,M=mt,w=ut,L=Et),(It.equals(_)===!1||se!==I)&&(i.blendColor(It.r,It.g,It.b,se),_.copy(It),I=se),p=C,O=!1}function bt(C,K){C.side===_n?Ct(i.CULL_FACE):dt(i.CULL_FACE);let Y=C.side===pn;K&&(Y=!Y),St(Y),C.blending===rr&&C.transparent===!1?yt(ui):yt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let mt=C.stencilWrite;a.setTest(mt),mt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Wt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(C){U!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),U=C)}function At(C){C!==Jh?(dt(i.CULL_FACE),C!==z&&(C===jl?i.cullFace(i.BACK):C===$h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),z=C}function Gt(C){C!==q&&($&&i.lineWidth(C),q=C)}function Wt(C,K,Y){C?(dt(i.POLYGON_OFFSET_FILL),(k!==K||X!==Y)&&(k=K,X=Y,o.getReversed()&&(K=-K),i.polygonOffset(K,Y))):Ct(i.POLYGON_OFFSET_FILL)}function Jt(C){C?dt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Tt(C){C===void 0&&(C=i.TEXTURE0+W-1),it!==C&&(i.activeTexture(C),it=C)}function B(C,K,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+W-1:Y=it);let mt=ot[Y];mt===void 0&&(mt={type:void 0,texture:void 0},ot[Y]=mt),(mt.type!==C||mt.texture!==K)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(C,K||at[C]),mt.type=C,mt.texture=K)}function zt(){let C=ot[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Pt(){try{i.compressedTexImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function E(){try{i.texSubImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function j(){try{i.texSubImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function F(){try{i.texStorage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function y(){try{i.texStorage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){ee("WebGLState:",C)}}function A(){try{i.texImage3D(...arguments)}catch(C){ee("WebGLState:",C)}}function P(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function D(C,K){f[C]!==K&&(i.pixelStorei(C,K),f[C]=K)}function G(C){Zt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Zt.copy(C))}function H(C){Yt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Yt.copy(C))}function tt(C,K){let Y=l.get(K);Y===void 0&&(Y=new WeakMap,l.set(K,Y));let mt=Y.get(C);mt===void 0&&(mt=i.getUniformBlockIndex(K,C.name),Y.set(C,mt))}function Q(C,K){let mt=l.get(K).get(C);c.get(K)!==mt&&(i.uniformBlockBinding(K,mt,C.__bindingPointIndex),c.set(K,mt))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},it=null,ot={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,b=null,T=null,M=null,S=null,w=null,L=null,_=new Qt(0,0,0),I=0,O=!1,U=null,z=null,q=null,k=null,X=null,Zt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Ct,bindFramebuffer:Ut,drawBuffers:_t,useProgram:pt,setBlending:yt,setMaterial:bt,setFlipSided:St,setCullFace:At,setLineWidth:Gt,setPolygonOffset:Wt,setScissorTest:Jt,activeTexture:Tt,bindTexture:B,unbindTexture:zt,compressedTexImage2D:Pt,compressedTexImage3D:N,texImage2D:v,texImage3D:A,pixelStorei:D,getParameter:P,updateUBOMapping:tt,uniformBlockBinding:Q,texStorage2D:F,texStorage3D:y,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:et,compressedTexSubImage3D:lt,scissor:G,viewport:H,reset:xt}}function nv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,E){return g?new OffscreenCanvas(N,E):Pr("canvas")}function m(N,E,j){let et=1,lt=Pt(N);if((lt.width>j||lt.height>j)&&(et=j/Math.max(lt.width,lt.height)),et<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let F=Math.floor(et*lt.width),y=Math.floor(et*lt.height);h===void 0&&(h=x(F,y));let v=E?x(F,y):h;return v.width=F,v.height=y,v.getContext("2d").drawImage(N,0,0,F,y),jt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+F+"x"+y+")."),v}else return"data"in N&&jt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),N;return N}function p(N){return N.generateMipmaps}function b(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(N,E,j,et,lt,F=!1){if(N!==null){if(i[N]!==void 0)return i[N];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let y;et&&(y=t.get("EXT_texture_norm16"),y||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let v=E;if(E===i.RED&&(j===i.FLOAT&&(v=i.R32F),j===i.HALF_FLOAT&&(v=i.R16F),j===i.UNSIGNED_BYTE&&(v=i.R8),j===i.UNSIGNED_SHORT&&y&&(v=y.R16_EXT),j===i.SHORT&&y&&(v=y.R16_SNORM_EXT)),E===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(v=i.R8UI),j===i.UNSIGNED_SHORT&&(v=i.R16UI),j===i.UNSIGNED_INT&&(v=i.R32UI),j===i.BYTE&&(v=i.R8I),j===i.SHORT&&(v=i.R16I),j===i.INT&&(v=i.R32I)),E===i.RG&&(j===i.FLOAT&&(v=i.RG32F),j===i.HALF_FLOAT&&(v=i.RG16F),j===i.UNSIGNED_BYTE&&(v=i.RG8),j===i.UNSIGNED_SHORT&&y&&(v=y.RG16_EXT),j===i.SHORT&&y&&(v=y.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(v=i.RG8UI),j===i.UNSIGNED_SHORT&&(v=i.RG16UI),j===i.UNSIGNED_INT&&(v=i.RG32UI),j===i.BYTE&&(v=i.RG8I),j===i.SHORT&&(v=i.RG16I),j===i.INT&&(v=i.RG32I)),E===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(v=i.RGB8UI),j===i.UNSIGNED_SHORT&&(v=i.RGB16UI),j===i.UNSIGNED_INT&&(v=i.RGB32UI),j===i.BYTE&&(v=i.RGB8I),j===i.SHORT&&(v=i.RGB16I),j===i.INT&&(v=i.RGB32I)),E===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(v=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(v=i.RGBA16UI),j===i.UNSIGNED_INT&&(v=i.RGBA32UI),j===i.BYTE&&(v=i.RGBA8I),j===i.SHORT&&(v=i.RGBA16I),j===i.INT&&(v=i.RGBA32I)),E===i.RGB&&(j===i.UNSIGNED_SHORT&&y&&(v=y.RGB16_EXT),j===i.SHORT&&y&&(v=y.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(v=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(v=i.R11F_G11F_B10F)),E===i.RGBA){let A=F?Ir:he.getTransfer(lt);j===i.FLOAT&&(v=i.RGBA32F),j===i.HALF_FLOAT&&(v=i.RGBA16F),j===i.UNSIGNED_BYTE&&(v=A===_e?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&y&&(v=y.RGBA16_EXT),j===i.SHORT&&y&&(v=y.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(v=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(v=i.RGB5_A1)}return(v===i.R16F||v===i.R32F||v===i.RG16F||v===i.RG32F||v===i.RGBA16F||v===i.RGBA32F)&&t.get("EXT_color_buffer_float"),v}function S(N,E){let j;return N?E===null||E===Jn||E===ar?j=i.DEPTH24_STENCIL8:E===$n?j=i.DEPTH32F_STENCIL8:E===or&&(j=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Jn||E===ar?j=i.DEPTH_COMPONENT24:E===$n?j=i.DEPTH_COMPONENT32F:E===or&&(j=i.DEPTH_COMPONENT16),j}function w(N,E){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==qe&&N.minFilter!==Qe?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function L(N){let E=N.target;E.removeEventListener("dispose",L),I(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function _(N){let E=N.target;E.removeEventListener("dispose",_),U(E)}function I(N){let E=n.get(N);if(E.__webglInit===void 0)return;let j=N.source,et=d.get(j);if(et){let lt=et[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&O(N),Object.keys(et).length===0&&d.delete(j)}n.remove(N)}function O(N){let E=n.get(N);i.deleteTexture(E.__webglTexture);let j=N.source,et=d.get(j);delete et[E.__cacheKey],o.memory.textures--}function U(N){let E=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let lt=0;lt<E.__webglFramebuffer[et].length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[et][lt]);else i.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)i.deleteFramebuffer(E.__webglFramebuffer[et]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let j=N.textures;for(let et=0,lt=j.length;et<lt;et++){let F=n.get(j[et]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(j[et])}n.remove(N)}let z=0;function q(){z=0}function k(){return z}function X(N){z=N}function W(){let N=z;return N>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,N}function $(N){let E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ft(N,E){let j=n.get(N);if(N.isVideoTexture&&B(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){let et=N.image;if(et===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(j,N,E);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+E)}function rt(N,E){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){Ct(j,N,E);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+E)}function it(N,E){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){Ct(j,N,E);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+E)}function ot(N,E){let j=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){Ut(j,N,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+E)}let vt={[us]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},Rt={[qe]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},Zt={[Mf]:i.NEVER,[Rf]:i.ALWAYS,[Ef]:i.LESS,[Ic]:i.LEQUAL,[wf]:i.EQUAL,[Pc]:i.GEQUAL,[Tf]:i.GREATER,[Af]:i.NOTEQUAL};function Yt(N,E){if(E.type===$n&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Qe||E.magFilter===Ya||E.magFilter===lo||E.magFilter===Qi||E.minFilter===Qe||E.minFilter===Ya||E.minFilter===lo||E.minFilter===Qi)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,vt[E.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,vt[E.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,vt[E.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Rt[E.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Rt[E.minFilter]),E.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Zt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qe||E.minFilter!==lo&&E.minFilter!==Qi||E.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function $t(N,E){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",L));let et=E.source,lt=d.get(et);lt===void 0&&(lt={},d.set(et,lt));let F=$(E);if(F!==N.__cacheKey){lt[F]===void 0&&(lt[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),lt[F].usedTimes++;let y=lt[N.__cacheKey];y!==void 0&&(lt[N.__cacheKey].usedTimes--,y.usedTimes===0&&O(E)),N.__cacheKey=F,N.__webglTexture=lt[F].texture}return j}function at(N,E,j){return Math.floor(Math.floor(N/j)/E)}function dt(N,E,j,et){let F=N.updateRanges;if(F.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,j,et,E.data);else{F.sort((D,G)=>D.start-G.start);let y=0;for(let D=1;D<F.length;D++){let G=F[y],H=F[D],tt=G.start+G.count,Q=at(H.start,E.width,4),xt=at(G.start,E.width,4);H.start<=tt+1&&Q===xt&&at(H.start+H.count-1,E.width,4)===Q?G.count=Math.max(G.count,H.start+H.count-G.start):(++y,F[y]=H)}F.length=y+1;let v=e.getParameter(i.UNPACK_ROW_LENGTH),A=e.getParameter(i.UNPACK_SKIP_PIXELS),P=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let D=0,G=F.length;D<G;D++){let H=F[D],tt=Math.floor(H.start/4),Q=Math.ceil(H.count/4),xt=tt%E.width,C=Math.floor(tt/E.width),K=Q,Y=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,xt,C,K,Y,j,et,E.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,v),e.pixelStorei(i.UNPACK_SKIP_PIXELS,A),e.pixelStorei(i.UNPACK_SKIP_ROWS,P)}}function Ct(N,E,j){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);let lt=$t(N,E),F=E.source;e.bindTexture(et,N.__webglTexture,i.TEXTURE0+j);let y=n.get(F);if(F.version!==y.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Y=he.getPrimaries(he.workingColorSpace),mt=E.colorSpace===Ai?null:he.getPrimaries(E.colorSpace),gt=E.colorSpace===Ai||Y===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let A=m(E.image,!1,s.maxTextureSize);A=zt(E,A);let P=r.convert(E.format,E.colorSpace),D=r.convert(E.type),G=M(E.internalFormat,P,D,E.normalized,E.colorSpace,E.isVideoTexture);Yt(et,E);let H,tt=E.mipmaps,Q=E.isVideoTexture!==!0,xt=y.__version===void 0||lt===!0,C=F.dataReady,K=w(E,A);if(E.isDepthTexture)G=S(E.format===ts,E.type),xt&&(Q?e.texStorage2D(i.TEXTURE_2D,1,G,A.width,A.height):e.texImage2D(i.TEXTURE_2D,0,G,A.width,A.height,0,P,D,null));else if(E.isDataTexture)if(tt.length>0){Q&&xt&&e.texStorage2D(i.TEXTURE_2D,K,G,tt[0].width,tt[0].height);for(let Y=0,mt=tt.length;Y<mt;Y++)H=tt[Y],Q?C&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,H.width,H.height,P,D,H.data):e.texImage2D(i.TEXTURE_2D,Y,G,H.width,H.height,0,P,D,H.data);E.generateMipmaps=!1}else Q?(xt&&e.texStorage2D(i.TEXTURE_2D,K,G,A.width,A.height),C&&dt(E,A,P,D)):e.texImage2D(i.TEXTURE_2D,0,G,A.width,A.height,0,P,D,A.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Q&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,G,tt[0].width,tt[0].height,A.depth);for(let Y=0,mt=tt.length;Y<mt;Y++)if(H=tt[Y],E.format!==On)if(P!==null)if(Q){if(C)if(E.layerUpdates.size>0){let gt=Eu(H.width,H.height,E.format,E.type);for(let ut of E.layerUpdates){let Et=H.data.subarray(ut*gt/H.data.BYTES_PER_ELEMENT,(ut+1)*gt/H.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ut,H.width,H.height,1,P,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,H.width,H.height,A.depth,P,H.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,G,H.width,H.height,A.depth,0,H.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,H.width,H.height,A.depth,P,D,H.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,G,H.width,H.height,A.depth,0,P,D,H.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Q&&xt&&e.texStorage2D(i.TEXTURE_2D,K,G,tt[0].width,tt[0].height);for(let Y=0,mt=tt.length;Y<mt;Y++)H=tt[Y],E.format!==On?P!==null?Q?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,H.width,H.height,P,H.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,G,H.width,H.height,0,H.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?C&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,H.width,H.height,P,D,H.data):e.texImage2D(i.TEXTURE_2D,Y,G,H.width,H.height,0,P,D,H.data)}else if(E.isDataArrayTexture)if(Q){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,G,A.width,A.height,A.depth),C)if(E.layerUpdates.size>0){let Y=Eu(A.width,A.height,E.format,E.type);for(let mt of E.layerUpdates){let gt=A.data.subarray(mt*Y/A.data.BYTES_PER_ELEMENT,(mt+1)*Y/A.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,A.width,A.height,1,P,D,gt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,P,D,A.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,G,A.width,A.height,A.depth,0,P,D,A.data);else if(E.isData3DTexture)Q?(xt&&e.texStorage3D(i.TEXTURE_3D,K,G,A.width,A.height,A.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,P,D,A.data)):e.texImage3D(i.TEXTURE_3D,0,G,A.width,A.height,A.depth,0,P,D,A.data);else if(E.isFramebufferTexture){if(xt)if(Q)e.texStorage2D(i.TEXTURE_2D,K,G,A.width,A.height);else{let Y=A.width,mt=A.height;for(let gt=0;gt<K;gt++)e.texImage2D(i.TEXTURE_2D,gt,G,Y,mt,0,P,D,null),Y>>=1,mt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),A.parentNode!==Y){Y.appendChild(A),f.add(E),Y.onpaint=mt=>{let gt=mt.changedElements;for(let ut of f)gt.includes(ut.image)&&(ut.needsUpdate=!0)},Y.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,A);else{let gt=i.RGBA,ut=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,gt,ut,Et,A)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(Q&&xt){let Y=Pt(tt[0]);e.texStorage2D(i.TEXTURE_2D,K,G,Y.width,Y.height)}for(let Y=0,mt=tt.length;Y<mt;Y++)H=tt[Y],Q?C&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,P,D,H):e.texImage2D(i.TEXTURE_2D,Y,G,P,D,H);E.generateMipmaps=!1}else if(Q){if(xt){let Y=Pt(A);e.texStorage2D(i.TEXTURE_2D,K,G,Y.width,Y.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,P,D,A)}else e.texImage2D(i.TEXTURE_2D,0,G,P,D,A);p(E)&&b(et),y.__version=F.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ut(N,E,j){if(E.image.length!==6)return;let et=$t(N,E),lt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);let F=n.get(lt);if(lt.version!==F.__version||et===!0){e.activeTexture(i.TEXTURE0+j);let y=he.getPrimaries(he.workingColorSpace),v=E.colorSpace===Ai?null:he.getPrimaries(E.colorSpace),A=E.colorSpace===Ai||y===v?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let P=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,G=[];for(let ut=0;ut<6;ut++)!P&&!D?G[ut]=m(E.image[ut],!0,s.maxCubemapSize):G[ut]=D?E.image[ut].image:E.image[ut],G[ut]=zt(E,G[ut]);let H=G[0],tt=r.convert(E.format,E.colorSpace),Q=r.convert(E.type),xt=M(E.internalFormat,tt,Q,E.normalized,E.colorSpace),C=E.isVideoTexture!==!0,K=F.__version===void 0||et===!0,Y=lt.dataReady,mt=w(E,H);Yt(i.TEXTURE_CUBE_MAP,E);let gt;if(P){C&&K&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,xt,H.width,H.height);for(let ut=0;ut<6;ut++){gt=G[ut].mipmaps;for(let Et=0;Et<gt.length;Et++){let It=gt[Et];E.format!==On?tt!==null?C?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,0,0,It.width,It.height,tt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,xt,It.width,It.height,0,It.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,0,0,It.width,It.height,tt,Q,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et,xt,It.width,It.height,0,tt,Q,It.data)}}}else{if(gt=E.mipmaps,C&&K){gt.length>0&&mt++;let ut=Pt(G[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,xt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(D){C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,G[ut].width,G[ut].height,tt,Q,G[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,xt,G[ut].width,G[ut].height,0,tt,Q,G[ut].data);for(let Et=0;Et<gt.length;Et++){let se=gt[Et].image[ut].image;C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,0,0,se.width,se.height,tt,Q,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,xt,se.width,se.height,0,tt,Q,se.data)}}else{C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,tt,Q,G[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,xt,tt,Q,G[ut]);for(let Et=0;Et<gt.length;Et++){let It=gt[Et];C?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,0,0,tt,Q,It.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et+1,xt,tt,Q,It.image[ut])}}}p(E)&&b(i.TEXTURE_CUBE_MAP),F.__version=lt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function _t(N,E,j,et,lt,F){let y=r.convert(j.format,j.colorSpace),v=r.convert(j.type),A=M(j.internalFormat,y,v,j.normalized,j.colorSpace),P=n.get(E),D=n.get(j);if(D.__renderTarget=E,!P.__hasExternalTextures){let G=Math.max(1,E.width>>F),H=Math.max(1,E.height>>F);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,F,A,G,H,E.depth,0,y,v,null):e.texImage2D(lt,F,A,G,H,0,y,v,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Tt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,lt,D.__webglTexture,0,Jt(E)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,lt,D.__webglTexture,F),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(N,E,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),E.depthBuffer){let et=E.depthTexture,lt=et&&et.isDepthTexture?et.type:null,F=S(E.stencilBuffer,lt),y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(E),F,E.width,E.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(E),F,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,F,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,y,i.RENDERBUFFER,N)}else{let et=E.textures;for(let lt=0;lt<et.length;lt++){let F=et[lt],y=r.convert(F.format,F.colorSpace),v=r.convert(F.type),A=M(F.internalFormat,y,v,F.normalized,F.colorSpace);Tt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(E),A,E.width,E.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(E),A,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,A,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(N,E,j){let et=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let lt=n.get(E.depthTexture);if(lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),et){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,E.depthTexture);let P=r.convert(E.depthTexture.format),D=r.convert(E.depthTexture.type),G;E.depthTexture.format===ai?G=i.DEPTH_COMPONENT24:E.depthTexture.format===ts&&(G=i.DEPTH24_STENCIL8);for(let H=0;H<6;H++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,G,E.width,E.height,0,P,D,null)}}else ft(E.depthTexture,0);let F=lt.__webglTexture,y=Jt(E),v=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,A=E.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ai)Tt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,v,F,0,y):i.framebufferTexture2D(i.FRAMEBUFFER,A,v,F,0);else if(E.depthTexture.format===ts)Tt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,v,F,0,y):i.framebufferTexture2D(i.FRAMEBUFFER,A,v,F,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(N){let E=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){let et=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){let lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",lt)};et.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=et}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let et=0;et<6;et++)Ft(E.__webglFramebuffer[et],N,et);else{let et=N.texture.mipmaps;et&&et.length>0?Ft(E.__webglFramebuffer[0],N,0):Ft(E.__webglFramebuffer,N,0)}else if(j){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=i.createRenderbuffer(),pt(E.__webglDepthbuffer[et],N,!1);else{let lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=E.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,F)}}else{let et=N.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),pt(E.__webglDepthbuffer,N,!1);else{let lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,F)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(N,E,j){let et=n.get(N);E!==void 0&&_t(et.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ht(N)}function bt(N){let E=N.texture,j=n.get(N),et=n.get(E);N.addEventListener("dispose",_);let lt=N.textures,F=N.isWebGLCubeRenderTarget===!0,y=lt.length>1;if(y||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,o.memory.textures++),F){j.__webglFramebuffer=[];for(let v=0;v<6;v++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[v]=[];for(let A=0;A<E.mipmaps.length;A++)j.__webglFramebuffer[v][A]=i.createFramebuffer()}else j.__webglFramebuffer[v]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let v=0;v<E.mipmaps.length;v++)j.__webglFramebuffer[v]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(y)for(let v=0,A=lt.length;v<A;v++){let P=n.get(lt[v]);P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Tt(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let v=0;v<lt.length;v++){let A=lt[v];j.__webglColorRenderbuffer[v]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[v]);let P=r.convert(A.format,A.colorSpace),D=r.convert(A.type),G=M(A.internalFormat,P,D,A.normalized,A.colorSpace,N.isXRRenderTarget===!0),H=Jt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,H,G,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+v,i.RENDERBUFFER,j.__webglColorRenderbuffer[v])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(j.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,E);for(let v=0;v<6;v++)if(E.mipmaps&&E.mipmaps.length>0)for(let A=0;A<E.mipmaps.length;A++)_t(j.__webglFramebuffer[v][A],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,A);else _t(j.__webglFramebuffer[v],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+v,0);p(E)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(y){for(let v=0,A=lt.length;v<A;v++){let P=lt[v],D=n.get(P),G=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(G=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(G,D.__webglTexture),Yt(G,P),_t(j.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0+v,G,0),p(P)&&b(G)}e.unbindTexture()}else{let v=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(v=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(v,et.__webglTexture),Yt(v,E),E.mipmaps&&E.mipmaps.length>0)for(let A=0;A<E.mipmaps.length;A++)_t(j.__webglFramebuffer[A],N,E,i.COLOR_ATTACHMENT0,v,A);else _t(j.__webglFramebuffer,N,E,i.COLOR_ATTACHMENT0,v,0);p(E)&&b(v),e.unbindTexture()}N.depthBuffer&&ht(N)}function St(N){let E=N.textures;for(let j=0,et=E.length;j<et;j++){let lt=E[j];if(p(lt)){let F=T(N),y=n.get(lt).__webglTexture;e.bindTexture(F,y),b(F),e.unbindTexture()}}}let At=[],Gt=[];function Wt(N){if(N.samples>0){if(Tt(N)===!1){let E=N.textures,j=N.width,et=N.height,lt=i.COLOR_BUFFER_BIT,F=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,y=n.get(N),v=E.length>1;if(v)for(let P=0;P<E.length;P++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,y.__webglMultisampledFramebuffer);let A=N.texture.mipmaps;A&&A.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglFramebuffer);for(let P=0;P<E.length;P++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),v){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,y.__webglColorRenderbuffer[P]);let D=n.get(E[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,j,et,0,0,j,et,lt,i.NEAREST),c===!0&&(At.length=0,Gt.length=0,At.push(i.COLOR_ATTACHMENT0+P),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(At.push(F),Gt.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),v)for(let P=0;P<E.length;P++){e.bindFramebuffer(i.FRAMEBUFFER,y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,y.__webglColorRenderbuffer[P]);let D=n.get(E[P]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,y.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let E=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Jt(N){return Math.min(s.maxSamples,N.samples)}function Tt(N){let E=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(N){let E=o.render.frame;u.get(N)!==E&&(u.set(N,E),N.update())}function zt(N,E){let j=N.colorSpace,et=N.format,lt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Cr&&j!==Ai&&(he.getTransfer(j)===_e?(et!==On||lt!==vn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",j)),E}function Pt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.getTextureUnits=k,this.setTextureUnits=X,this.setTexture2D=ft,this.setTexture2DArray=rt,this.setTexture3D=it,this.setTextureCube=ot,this.rebindTextures=yt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function iv(i,t){function e(n,s=Ai){let r,o=he.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uu)return i.BYTE;if(n===hu)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===On)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===gu)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===es)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===uo||n===ho||n===fo||n===po)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===rc||n===oc||n===ac||n===cc||n===mo||n===lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sc||n===rc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ac)return r.COMPRESSED_R11_EAC;if(n===cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return r.COMPRESSED_RG11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===yc||n===_c||n===vc||n===bc||n===Sc||n===Mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===wc||n===Tc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Rc||n===go||n===Cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zu=class extends ci{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Bu,p={},b=e.getContextAttributes(),T=null,M=null,S=[],w=[],L=new wt,_=null,I=null,O=new hn;O.viewport=new ve;let U=new hn;U.viewport=new ve;let z=[O,U],q=new Ga,k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=S[at];return dt===void 0&&(dt=new Js,S[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=S[at];return dt===void 0&&(dt=new Js,S[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=S[at];return dt===void 0&&(dt=new Js,S[at]=dt),dt.getHandSpace()};function W(at){let dt=w.indexOf(at.inputSource);if(dt===-1)return;let Ct=S[dt];Ct!==void 0&&(Ct.update(at.inputSource,at.frame,l||o),Ct.dispatchEvent({type:at.type,data:at.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ft);for(let at=0;at<S.length;at++){let dt=w[at];dt!==null&&(w[at]=null,S[at].disconnect(dt))}k=null,X=null,m.reset();for(let at in p)delete p[at];if(t.setRenderTarget(T),d=null,h=null,f=null,s=null,M=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),I!==null){let at=I.camera;at.fov=I.fov,at.zoom=I.zoom,at.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(at){l=at},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ft),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ut=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=b.stencil?ts:ai,Ut=b.stencil?ar:Jn);let pt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new yn(h.textureWidth,h.textureHeight,{format:On,type:vn,depthTexture:new Hi(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new yn(d.framebufferWidth,d.framebufferHeight,{format:On,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft(at){for(let dt=0;dt<at.removed.length;dt++){let Ct=at.removed[dt],Ut=w.indexOf(Ct);Ut>=0&&(w[Ut]=null,S[Ut].disconnect(Ct))}for(let dt=0;dt<at.added.length;dt++){let Ct=at.added[dt],Ut=w.indexOf(Ct);if(Ut===-1){for(let pt=0;pt<S.length;pt++)if(pt>=w.length){w.push(Ct),Ut=pt;break}else if(w[pt]===null){w[pt]=Ct,Ut=pt;break}if(Ut===-1)break}let _t=S[Ut];_t&&_t.connect(Ct)}}let rt=new V,it=new V;function ot(at,dt,Ct){rt.setFromMatrixPosition(dt.matrixWorld),it.setFromMatrixPosition(Ct.matrixWorld);let Ut=rt.distanceTo(it),_t=dt.projectionMatrix.elements,pt=Ct.projectionMatrix.elements,Ft=_t[14]/(_t[10]-1),ht=_t[14]/(_t[10]+1),yt=(_t[9]+1)/_t[5],bt=(_t[9]-1)/_t[5],St=(_t[8]-1)/_t[0],At=(pt[8]+1)/pt[0],Gt=Ft*St,Wt=Ft*At,Jt=Ut/(-St+At),Tt=Jt*-St;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Tt),at.translateZ(Jt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),_t[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let B=Ft+Jt,zt=ht+Jt,Pt=Gt-Tt,N=Wt+(Ut-Tt),E=yt*ht/zt*B,j=bt*ht/zt*B;at.projectionMatrix.makePerspective(Pt,N,E,j,B,zt),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function vt(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let dt=at.near,Ct=at.far;m.texture!==null&&(m.depthNear>0&&(dt=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),q.near=U.near=O.near=dt,q.far=U.far=O.far=Ct,(k!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),k=q.near,X=q.far),q.layers.mask=at.layers.mask|6,O.layers.mask=q.layers.mask&-5,U.layers.mask=q.layers.mask&-3;let Ut=at.parent,_t=q.cameras;vt(q,Ut);for(let pt=0;pt<_t.length;pt++)vt(_t[pt],Ut);_t.length===2?ot(q,O,U):q.projectionMatrix.copy(O.projectionMatrix),I===null&&at.isPerspectiveCamera&&(I={camera:at,fov:at.fov,zoom:at.zoom}),Rt(at,q,Ut)};function Rt(at,dt,Ct){Ct===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(Ct.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=qs*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(at){c=at,h!==null&&(h.fixedFoveation=at),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=at)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(at){return p[at]};let Zt=null;function Yt(at,dt){if(u=dt.getViewerPose(l||o),g=dt,u!==null){let Ct=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ut=!1;Ct.length!==q.cameras.length&&(q.cameras.length=0,Ut=!0);for(let ht=0;ht<Ct.length;ht++){let yt=Ct[ht],bt=null;if(d!==null)bt=d.getViewport(yt);else{let At=f.getViewSubImage(h,yt);bt=At.viewport,ht===0&&(t.setRenderTargetTextures(M,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(M))}let St=z[ht];St===void 0&&(St=new hn,St.layers.enable(ht),St.viewport=new ve,z[ht]=St),St.matrix.fromArray(yt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(yt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(bt.x,bt.y,bt.width,bt.height),ht===0&&(q.matrix.copy(St.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ut===!0&&q.cameras.push(St)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ht=f.getDepthInformation(Ct[0]);ht&&ht.isValid&&ht.texture&&m.init(ht,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let ht=0;ht<Ct.length;ht++){let yt=Ct[ht].camera;if(yt){let bt=p[yt];bt||(bt=new kr,p[yt]=bt);let St=f.getCameraImage(yt);bt.sourceTexture=St}}}}for(let Ct=0;Ct<S.length;Ct++){let Ut=w[Ct],_t=S[Ct];Ut!==null&&_t!==void 0&&_t.update(Ut,dt,l||o)}Zt&&Zt(at,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),g=null}let $t=new ad;$t.setAnimationLoop(Yt),this.setAnimationLoop=function(at){Zt=at},this.dispose=function(){}}},ov=new xe,dd=new oe;dd.set(-1,0,0,0,1,0,0,0,1);function av(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cv(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){let w=S.program;n.uniformBlockBinding(M,w)}function l(M,S){let w=s[M.id];w===void 0&&(m(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",b));let L=S.program;n.updateUBOMapping(M,L);let _=t.render.frame;r[M.id]!==_&&(h(M),r[M.id]=_)}function u(M){let S=f();M.__bindingPointIndex=S;let w=i.createBuffer(),L=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let S=s[M.id],w=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,I=w.length;_<I;_++){let O=w[_];if(Array.isArray(O))for(let U=0,z=O.length;U<z;U++)d(O[U],_,U,L);else d(O,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,w,L){if(x(M,S,w,L)===!0){let _=M.__offset,I=M.value;if(Array.isArray(I)){let O=0;for(let U=0;U<I.length;U++){let z=I[U],q=p(z);g(z,M.__data,O),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function g(M,S,w){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,w)}function x(M,S,w,L){let _=M.value,I=S+"_"+w;if(L[I]===void 0)return typeof _=="number"||typeof _=="boolean"?L[I]=_:ArrayBuffer.isView(_)?L[I]=_.slice():L[I]=_.clone(),!0;{let O=L[I];if(typeof _=="number"||typeof _=="boolean"){if(O!==_)return L[I]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(O.equals(_)===!1)return O.copy(_),!0}}return!1}function m(M){let S=M.uniforms,w=0,L=16;for(let I=0,O=S.length;I<O;I++){let U=Array.isArray(S[I])?S[I]:[S[I]];for(let z=0,q=U.length;z<q;z++){let k=U[z],X=Array.isArray(k.value)?k.value:[k.value];for(let W=0,$=X.length;W<$;W++){let ft=X[W],rt=p(ft),it=w%L,ot=it%rt.boundary,vt=it+ot;w+=ot,vt!==0&&L-vt<rt.storage&&(w+=L-vt),k.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=rt.storage}}}let _=w%L;return _>0&&(w+=L-_),M.__size=w,M.__cache={},this}function p(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",M),S}function b(M){let S=M.target;S.removeEventListener("dispose",b);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function T(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:T}}var lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function uv(){return hi===null&&(hi=new ya(lv,16,16,es,Kn),hi.name="DFG_LUT",hi.minFilter=Qe,hi.magFilter=Qe,hi.wrapS=ri,hi.wrapT=ri,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Oc=class{constructor(t={}){let{canvas:e=Cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Qa,ja,Ka]),p=new Set([vn,Jn,or,ar,Ja,$a]),b=new Uint32Array(4),T=new Int32Array(4),M=new V,S=null,w=null,L=[],_=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,U=!1,z=null,q=null,k=null,X=null;this._outputColorSpace=Oe;let W=0,$=0,ft=null,rt=-1,it=null,ot=new ve,vt=new ve,Rt=null,Zt=new Qt(0),Yt=0,$t=e.width,at=e.height,dt=1,Ct=null,Ut=null,_t=new ve(0,0,$t,at),pt=new ve(0,0,$t,at),Ft=!1,ht=new $s,yt=!1,bt=!1,St=new xe,At=new V,Gt=new ve,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function Tt(){return ft===null?dt:1}let B=n;function zt(R,Z){return e.getContext(R,Z)}let Pt,N,E,j,et,lt,F,y,v,A,P,D,G,H,tt,Q,xt,C,K,Y,mt,gt,ut;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",se,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",ge,!1),B===null){let Z="webgl2";if(B=zt(Z,R),B===null)throw zt(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(R){throw e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ee("WebGLRenderer: "+R.message),R}function Et(){Pt=new xy(B),Pt.init(),mt=new iv(B,Pt),N=new ay(B,Pt,t,mt),E=new ev(B,Pt),N.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),q=B.createFramebuffer(),k=B.createFramebuffer(),X=B.createFramebuffer(),j=new vy(B),et=new V_,lt=new nv(B,Pt,E,et,N,mt,j),F=new gy(O),y=new Sg(B),gt=new ry(B,y),v=new yy(B,y,j,gt),A=new Sy(B,v,y,gt,j),C=new by(B,N,lt),tt=new cy(et),P=new k_(O,F,Pt,N,gt,tt),D=new av(O,et),G=new G_,H=new J_(Pt),xt=new sy(O,F,E,A,g,c),Q=new tv(O,A,N),ut=new cv(B,j,N,E),K=new oy(B,Pt,j),Y=new _y(B,Pt,j),j.programs=P.programs,O.capabilities=N,O.extensions=Pt,O.properties=et,O.renderLists=G,O.shadowMap=Q,O.state=E,O.info=j}x!==vn&&(I=new Ey(x,e.width,e.height,a,s,r));let It=new zu(O,B);this.xr=It,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=Pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(R){R!==void 0&&(dt=R,this.setSize($t,at,!1))},this.getSize=function(R){return R.set($t,at)},this.setSize=function(R,Z,ct=!0){if(It.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=R,at=Z,e.width=Math.floor(R*dt),e.height=Math.floor(Z*dt),ct===!0&&(e.style.width=R+"px",e.style.height=Z+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set($t*dt,at*dt).floor()},this.setDrawingBufferSize=function(R,Z,ct){$t=R,at=Z,dt=ct,e.width=Math.floor(R*ct),e.height=Math.floor(Z*ct),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(x===vn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ot)},this.getViewport=function(R){return R.copy(_t)},this.setViewport=function(R,Z,ct,st){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,Z,ct,st),E.viewport(ot.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(R){return R.copy(pt)},this.setScissor=function(R,Z,ct,st){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,Z,ct,st),E.scissor(vt.copy(pt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(R){E.setScissorTest(Ft=R)},this.setOpaqueSort=function(R){Ct=R},this.setTransparentSort=function(R){Ut=R},this.getClearColor=function(R){return R.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ct=!0){let st=0;if(R){let nt=!1;if(ft!==null){let Lt=ft.texture.format;nt=m.has(Lt)}if(nt){let Lt=ft.texture.type,Ot=p.has(Lt),Nt=xt.getClearColor(),Vt=xt.getClearAlpha(),qt=Nt.r,ae=Nt.g,ue=Nt.b;Ot?(b[0]=qt,b[1]=ae,b[2]=ue,b[3]=Vt,B.clearBufferuiv(B.COLOR,0,b)):(T[0]=qt,T[1]=ae,T[2]=ue,T[3]=Vt,B.clearBufferiv(B.COLOR,0,T))}else st|=B.COLOR_BUFFER_BIT}Z&&(st|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),z=R},this.dispose=function(){e.removeEventListener("webglcontextlost",se,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),xt.dispose(),G.dispose(),H.dispose(),et.dispose(),F.dispose(),A.dispose(),gt.dispose(),ut.dispose(),P.dispose(),It.dispose(),It.removeEventListener("sessionstart",Xt),It.removeEventListener("sessionend",te),ne.stop()};function se(R){R.preventDefault(),Lr("WebGLRenderer: Context Lost."),U=!0}function Kt(){Lr("WebGLRenderer: Context Restored."),U=!1;let R=j.autoReset,Z=Q.enabled,ct=Q.autoUpdate,st=Q.needsUpdate,nt=Q.type;Et(),j.autoReset=R,Q.enabled=Z,Q.autoUpdate=ct,Q.needsUpdate=st,Q.type=nt}function ge(R){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){let Z=R.target;Z.removeEventListener("dispose",be),Je(Z)}function Je(R){De(R),et.remove(R)}function De(R){let Z=et.get(R).programs;Z!==void 0&&(Z.forEach(function(ct){P.releaseProgram(ct)}),R.isShaderMaterial&&P.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ct,st,nt,Lt){Z===null&&(Z=Wt);let Ot=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Nt=Es(R,Z,ct,st,nt);E.setMaterial(st,Ot);let Vt=ct.index,qt=1;if(st.wireframe===!0){if(Vt=v.getWireframeAttribute(ct),Vt===void 0)return;qt=2}let ae=ct.drawRange,ue=ct.attributes.position,Ht=ae.start*qt,ye=(ae.start+ae.count)*qt;Lt!==null&&(Ht=Math.max(Ht,Lt.start*qt),ye=Math.min(ye,(Lt.start+Lt.count)*qt)),Vt!==null?(Ht=Math.max(Ht,0),ye=Math.min(ye,Vt.count)):ue!=null&&(Ht=Math.max(Ht,0),ye=Math.min(ye,ue.count));let Ue=ye-Ht;if(Ue<0||Ue===1/0)return;gt.setup(nt,st,Nt,ct,Vt);let Re,Ee=K;if(Vt!==null&&(Re=y.get(Vt),Ee=Y,Ee.setIndex(Re)),nt.isMesh)st.wireframe===!0?(E.setLineWidth(st.wireframeLinewidth*Tt()),Ee.setMode(B.LINES)):Ee.setMode(B.TRIANGLES);else if(nt.isLine){let sn=st.linewidth;sn===void 0&&(sn=1),E.setLineWidth(sn*Tt()),nt.isLineSegments?Ee.setMode(B.LINES):nt.isLineLoop?Ee.setMode(B.LINE_LOOP):Ee.setMode(B.LINE_STRIP)}else nt.isPoints?Ee.setMode(B.POINTS):nt.isSprite&&Ee.setMode(B.TRIANGLES);if(nt.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let sn=nt._multiDrawStarts,Bt=nt._multiDrawCounts,ln=nt._multiDrawCount,pe=Vt?y.get(Vt).bytesPerElement:1,Ln=et.get(st).currentProgram.getUniforms();for(let ii=0;ii<ln;ii++)Ln.setValue(B,"_gl_DrawID",ii),Ee.render(sn[ii]/pe,Bt[ii])}else if(nt.isInstancedMesh)Ee.renderInstances(Ht,Ue,nt.count);else if(ct.isInstancedBufferGeometry){let sn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Bt=Math.min(ct.instanceCount,sn);Ee.renderInstances(Ht,Ue,Bt)}else Ee.render(Ht,Ue)};function $e(R,Z,ct,st){z!==null&&R.isNodeMaterial&&z.setObject(st,R),yt===!0&&tt.setState(R,ct,!1),R.transparent===!0&&R.side===_n&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,Ke(R,Z,st),R.side=Ki,R.needsUpdate=!0,Ke(R,Z,st),R.side=_n):Ke(R,Z,st)}this.compile=function(R,Z,ct=null){ct===null&&(ct=R),z!==null&&z.renderStart(R,Z,ct),w=H.get(ct),w.init(Z),_.push(w),ct.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),R!==ct&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),bt=this.localClippingEnabled,yt=tt.init(this.clippingPlanes,bt),yt===!0&&tt.setGlobalState(this.clippingPlanes,Z),z!==null&&Q.render(w.state.shadowsArray,ct,Z);let st=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Lt=nt.material;if(Lt)if(Array.isArray(Lt))for(let Ot=0;Ot<Lt.length;Ot++){let Nt=Lt[Ot];$e(Nt,ct,Z,nt),st.add(Nt)}else $e(Lt,ct,Z,nt),st.add(Lt)}),w=_.pop(),z!==null&&z.renderEnd(),st},this.compileAsync=function(R,Z,ct=null){let st=this.compile(R,Z,ct);return new Promise(nt=>{function Lt(){if(st.forEach(function(Ot){let Vt=et.get(Ot).currentProgram;(Vt===void 0||Vt.isReady())&&st.delete(Ot)}),st.size===0){nt(R);return}setTimeout(Lt,10)}Pt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let We=null;function Mt(R){We&&We(R)}function Xt(){ne.stop()}function te(){ne.start()}let ne=new ad;ne.setAnimationLoop(Mt),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(R){We=R,It.setAnimationLoop(R),R===null?ne.stop():ne.start()},It.addEventListener("sessionstart",Xt),It.addEventListener("sessionend",te),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(R,Z);let ct=It.enabled===!0&&It.isPresenting===!0,st=I!==null&&(ft===null||ct)&&I.begin(O,ft);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(Z),Z=It.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,Z,ft),w=H.get(R,_.length),w.init(Z),w.state.textureUnits=lt.getTextureUnits(),_.push(w),St.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ht.setFromProjectionMatrix(St,Xn,Z.reversedDepth),bt=this.localClippingEnabled,yt=tt.init(this.clippingPlanes,bt),S=G.get(R,L.length),S.init(),L.push(S),It.enabled===!0&&It.isPresenting===!0){let Ot=O.xr.getDepthSensingMesh();Ot!==null&&Le(Ot,Z,-1/0,O.sortObjects)}Le(R,Z,0,O.sortObjects),S.finish(),z!==null&&z.updateLights(w.state.lightsArray),O.sortObjects===!0&&S.sort(Ct,Ut),Jt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Jt&&xt.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&tt.beginShadows();let nt=w.state.shadowsArray;if(Q.render(nt,R,Z),yt===!0&&tt.endShadows(),(st&&I.hasRenderPass())===!1){let Ot=S.opaque,Nt=S.transmissive;if(w.setupLights(),Z.isArrayCamera){let Vt=Z.cameras;if(Nt.length>0)for(let qt=0,ae=Vt.length;qt<ae;qt++){let ue=Vt[qt];zn(Ot,Nt,R,ue)}Jt&&xt.render(R);for(let qt=0,ae=Vt.length;qt<ae;qt++){let ue=Vt[qt];bn(S,R,ue,ue.viewport)}}else Nt.length>0&&zn(Ot,Nt,R,Z),Jt&&xt.render(R),bn(S,R,Z)}ft!==null&&$===0&&(lt.updateMultisampleRenderTarget(ft),lt.updateRenderTargetMipmap(ft)),st&&I.end(O),R.isScene===!0&&R.onAfterRender(O,R,Z),gt.resetDefaultState(),rt=-1,it=null,_.pop(),_.length>0?(w=_[_.length-1],lt.setTextureUnits(w.state.textureUnits),yt===!0&&tt.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?S=L[L.length-1]:S=null,z!==null&&z.renderEnd()};function Le(R,Z,ct,st){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)w.pushLightProbeGrid(R);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(ht)){st&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);let Ot=A.update(R),Nt=R.material;Nt.visible&&S.push(R,Ot,Nt,ct,Gt.z,null,Z)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(ht))){let Ot=A.update(R),Nt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Gt.copy(Ot.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Nt)){let Vt=Ot.groups;for(let qt=0,ae=Vt.length;qt<ae;qt++){let ue=Vt[qt],Ht=Nt[ue.materialIndex];Ht&&Ht.visible&&S.push(R,Ot,Ht,ct,Gt.z,ue,Z)}}else Nt.visible&&S.push(R,Ot,Nt,ct,Gt.z,null,Z)}}let Lt=R.children;for(let Ot=0,Nt=Lt.length;Ot<Nt;Ot++)Le(Lt[Ot],Z,ct,st)}function bn(R,Z,ct,st){let{opaque:nt,transmissive:Lt,transparent:Ot}=R;w.setupLightsView(ct),yt===!0&&tt.setGlobalState(O.clippingPlanes,ct),st&&E.viewport(ot.copy(st)),nt.length>0&&Pn(nt,Z,ct),Lt.length>0&&Pn(Lt,Z,ct),Ot.length>0&&Pn(Ot,Z,ct),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function zn(R,Z,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[st.id]===void 0){let Ht=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[st.id]=new yn(1,1,{generateMipmaps:!0,type:Ht?Kn:vn,minFilter:Qi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let Lt=w.state.transmissionRenderTarget[st.id],Ot=st.viewport||ot;Lt.setSize(Ot.z*O.transmissionResolutionScale,Ot.w*O.transmissionResolutionScale);let Nt=O.getRenderTarget(),Vt=O.getActiveCubeFace(),qt=O.getActiveMipmapLevel();O.setRenderTarget(Lt),O.getClearColor(Zt),Yt=O.getClearAlpha(),Yt<1&&O.setClearColor(16777215,.5),O.clear(),Jt&&xt.render(ct);let ae=O.toneMapping;O.toneMapping=Zn;let ue=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),w.setupLightsView(st),yt===!0&&tt.setGlobalState(O.clippingPlanes,st),Pn(R,ct,st),lt.updateMultisampleRenderTarget(Lt),lt.updateRenderTargetMipmap(Lt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ye=0,Ue=Z.length;ye<Ue;ye++){let Re=Z[ye],{object:Ee,geometry:sn,material:Bt,group:ln}=Re;if(Bt.side===_n&&Ee.layers.test(st.layers)){let pe=Bt.side;Bt.side=pn,Bt.needsUpdate=!0,ss(Ee,ct,st,sn,Bt,ln),Bt.side=pe,Bt.needsUpdate=!0,Ht=!0}}Ht===!0&&(lt.updateMultisampleRenderTarget(Lt),lt.updateRenderTargetMipmap(Lt))}O.setRenderTarget(Nt,Vt,qt),O.setClearColor(Zt,Yt),ue!==void 0&&(st.viewport=ue),O.toneMapping=ae}function Pn(R,Z,ct){let st=Z.isScene===!0?Z.overrideMaterial:null;for(let nt=0,Lt=R.length;nt<Lt;nt++){let Ot=R[nt],{object:Nt,geometry:Vt,group:qt}=Ot,ae=Ot.material;ae.allowOverride===!0&&st!==null&&(ae=st),Nt.layers.test(ct.layers)&&ss(Nt,Z,ct,Vt,ae,qt)}}function ss(R,Z,ct,st,nt,Lt){z!==null&&nt.isNodeMaterial&&z.setObject(R,nt),R.onBeforeRender(O,Z,ct,st,nt,Lt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(O,Z,ct,st,R,Lt),nt.transparent===!0&&nt.side===_n&&nt.forceSinglePass===!1?(nt.side=pn,nt.needsUpdate=!0,O.renderBufferDirect(ct,Z,st,nt,R,Lt),nt.side=Ki,nt.needsUpdate=!0,O.renderBufferDirect(ct,Z,st,nt,R,Lt),nt.side=_n):O.renderBufferDirect(ct,Z,st,nt,R,Lt),R.onAfterRender(O,Z,ct,st,nt,Lt)}function Ke(R,Z,ct){Z.isScene!==!0&&(Z=Wt);let st=et.get(R),nt=w.state.lights,Lt=w.state.shadowsArray,Ot=nt.state.version,Nt=P.getParameters(R,nt.state,Lt,Z,ct,w.state.lightProbeGridArray),Vt=P.getProgramCacheKey(Nt),qt=st.programs;st.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,st.fog=Z.fog;let ae=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;st.envMap=F.get(R.envMap||st.environment,ae),st.envMapRotation=st.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",be),qt=new Map,st.programs=qt);let ue=qt.get(Vt);if(ue!==void 0){if(st.currentProgram===ue&&st.lightsStateVersion===Ot)return Io(R,Nt),ue}else Nt.uniforms=P.getUniforms(R),z!==null&&R.isNodeMaterial&&z.build(R,ct,Nt),R.onBeforeCompile(Nt,O),ue=P.acquireProgram(Nt,Vt),qt.set(Vt,ue),st.uniforms=Nt.uniforms;let Ht=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=tt.uniform),Io(R,Nt),st.needsLights=gn(R),st.lightsStateVersion=Ot,st.needsLights&&(Ht.ambientLightColor.value=nt.state.ambient,Ht.lightProbe.value=nt.state.probe,Ht.sunLights.value=nt.state.sun,Ht.sunLightShadows.value=nt.state.sunShadow,Ht.directionalLights.value=nt.state.directional,Ht.directionalLightShadows.value=nt.state.directionalShadow,Ht.spotLights.value=nt.state.spot,Ht.spotLightShadows.value=nt.state.spotShadow,Ht.rectAreaLights.value=nt.state.rectArea,Ht.ltc_1.value=nt.state.rectAreaLTC1,Ht.ltc_2.value=nt.state.rectAreaLTC2,Ht.pointLights.value=nt.state.point,Ht.pointLightShadows.value=nt.state.pointShadow,Ht.hemisphereLights.value=nt.state.hemi,Ht.sunShadowMatrix.value=nt.state.sunShadowMatrix,Ht.sunShadowCascade.value=nt.state.sunShadowCascade,Ht.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ht.spotLightMatrix.value=nt.state.spotLightMatrix,Ht.spotLightMap.value=nt.state.spotLightMap,Ht.pointShadowMatrix.value=nt.state.pointShadowMatrix),st.lightProbeGrid=w.state.lightProbeGridArray.length>0,st.currentProgram=ue,st.uniformsList=null,ue}function xr(R){if(R.uniformsList===null){let Z=R.currentProgram.getUniforms();R.uniformsList=ur.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Io(R,Z){let ct=et.get(R);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function Po(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;M.setFromMatrixPosition(Z.matrixWorld);for(let ct=0,st=R.length;ct<st;ct++){let nt=R[ct];if(nt.texture!==null&&nt.boundingBox.containsPoint(M))return nt}return null}function Es(R,Z,ct,st,nt){Z.isScene!==!0&&(Z=Wt),lt.resetTextureUnits();let Lt=Z.fog,Ot=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?Z.environment:null,Nt=ft===null?O.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:he.workingColorSpace,Vt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,qt=F.get(st.envMap||Ot,Vt),ae=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ue=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Ht=!!ct.morphAttributes.position,ye=!!ct.morphAttributes.normal,Ue=!!ct.morphAttributes.color,Re=Zn;st.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Re=O.toneMapping);let Ee=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,sn=Ee!==void 0?Ee.length:0,Bt=et.get(st),ln=w.state.lights;if(yt===!0&&(bt===!0||R!==it)){let we=R===it&&st.id===rt;tt.setState(st,R,we)}let pe=!1;st.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ln.state.version||Bt.outputColorSpace!==Nt||nt.isBatchedMesh&&Bt.batching===!1||!nt.isBatchedMesh&&Bt.batching===!0||nt.isBatchedMesh&&Bt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Bt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Bt.instancing===!1||!nt.isInstancedMesh&&Bt.instancing===!0||nt.isSkinnedMesh&&Bt.skinning===!1||!nt.isSkinnedMesh&&Bt.skinning===!0||nt.isInstancedMesh&&Bt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Bt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Bt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Bt.instancingMorph===!1&&nt.morphTexture!==null||Bt.envMap!==qt||st.fog===!0&&Bt.fog!==Lt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==tt.numPlanes||Bt.numIntersection!==tt.numIntersection)||Bt.vertexAlphas!==ae||Bt.vertexTangents!==ue||Bt.morphTargets!==Ht||Bt.morphNormals!==ye||Bt.morphColors!==Ue||Bt.toneMapping!==Re||Bt.morphTargetsCount!==sn||!!Bt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Bt.__version=st.version);let Ln=Bt.currentProgram;pe===!0&&(Ln=Ke(st,Z,nt),z&&st.isNodeMaterial&&z.onUpdateProgram(st,Ln,Bt));let ii=!1,Li=!1,ws=!1,Me=Ln.getUniforms(),Ne=Bt.uniforms;if(E.useProgram(Ln.program)&&(ii=!0,Li=!0,ws=!0),st.id!==rt&&(rt=st.id,Li=!0),Bt.needsLights){let we=Po(w.state.lightProbeGridArray,nt);Bt.lightProbeGrid!==we&&(Bt.lightProbeGrid=we,Li=!0)}if(ii||it!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(B,"projectionMatrix",R.projectionMatrix),Me.setValue(B,"viewMatrix",R.matrixWorldInverse);let Ni=Me.map.cameraPosition;Ni!==void 0&&Ni.setValue(B,At.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Me.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),it!==R&&(it=R,Li=!0,ws=!0)}if(Bt.needsLights&&(ln.state.sunShadowMap.length>0&&Me.setValue(B,"sunShadowMap",ln.state.sunShadowMap,lt),ln.state.directionalShadowMap.length>0&&Me.setValue(B,"directionalShadowMap",ln.state.directionalShadowMap,lt),ln.state.spotShadowMap.length>0&&Me.setValue(B,"spotShadowMap",ln.state.spotShadowMap,lt),ln.state.pointShadowMap.length>0&&Me.setValue(B,"pointShadowMap",ln.state.pointShadowMap,lt)),nt.isSkinnedMesh){Me.setOptional(B,nt,"bindMatrix"),Me.setOptional(B,nt,"bindMatrixInverse");let we=nt.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Me.setValue(B,"boneTexture",we.boneTexture,lt))}nt.isBatchedMesh&&(Me.setOptional(B,nt,"batchingTexture"),Me.setValue(B,"batchingTexture",nt._matricesTexture,lt),Me.setOptional(B,nt,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",nt._indirectTexture,lt),Me.setOptional(B,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",nt._colorsTexture,lt));let Di=ct.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&C.update(nt,ct,Ln),(Li||Bt.receiveShadow!==nt.receiveShadow)&&(Bt.receiveShadow=nt.receiveShadow,Me.setValue(B,"receiveShadow",nt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&Z.environment!==null&&(Ne.envMapIntensity.value=Z.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=uv()),Li){if(Me.setValue(B,"toneMappingExposure",O.toneMappingExposure),Bt.needsLights&&je(Ne,ws),Lt&&st.fog===!0&&D.refreshFogUniforms(Ne,Lt),D.refreshMaterialUniforms(Ne,st,dt,at,w.state.transmissionRenderTarget[R.id]),Bt.needsLights&&Bt.lightProbeGrid){let we=Bt.lightProbeGrid;Ne.probesSH.value=we.texture,Ne.probesMin.value.copy(we.boundingBox.min),Ne.probesMax.value.copy(we.boundingBox.max),Ne.probesResolution.value.copy(we.resolution)}ur.upload(B,xr(Bt),Ne,lt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ur.upload(B,xr(Bt),Ne,lt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Me.setValue(B,"center",nt.center),Me.setValue(B,"modelViewMatrix",nt.modelViewMatrix),Me.setValue(B,"normalMatrix",nt.normalMatrix),Me.setValue(B,"modelMatrix",nt.matrixWorld),st.uniformsGroups!==void 0){let we=st.uniformsGroups;for(let Ni=0,Ts=we.length;Ni<Ts;Ni++){let lh=we[Ni];ut.update(lh,Ln),ut.bind(lh,Ln)}}return Ln}function je(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.sunLights.needsUpdate=Z,R.sunLightShadows.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function gn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(R,Z,ct){let st=et.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),et.get(R.texture).__webglTexture=Z,et.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){let ct=et.get(R);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,ct=0){ft=R,W=Z,$=ct;let st=null,nt=!1,Lt=!1;if(R){let Nt=et.get(R);if(Nt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(B.FRAMEBUFFER,Nt.__webglFramebuffer),ot.copy(R.viewport),vt.copy(R.scissor),Rt=R.scissorTest,E.viewport(ot),E.scissor(vt),E.setScissorTest(Rt),rt=-1;return}else if(Nt.__webglFramebuffer===void 0)lt.setupRenderTarget(R);else if(Nt.__hasExternalTextures)lt.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ae=R.depthTexture;if(Nt.__boundDepthTexture!==ae){if(ae!==null&&et.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(R)}}let Vt=R.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Lt=!0);let qt=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[Z])?st=qt[Z][ct]:st=qt[Z],nt=!0):R.samples>0&&lt.useMultisampledRTT(R)===!1?st=et.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?st=qt[ct]:st=qt,ot.copy(R.viewport),vt.copy(R.scissor),Rt=R.scissorTest}else ot.copy(_t).multiplyScalar(dt).floor(),vt.copy(pt).multiplyScalar(dt).floor(),Rt=Ft;if(ct!==0&&(st=q),E.bindFramebuffer(B.FRAMEBUFFER,st)&&E.drawBuffers(R,st),E.viewport(ot),E.scissor(vt),E.setScissorTest(Rt),nt){let Nt=et.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Nt.__webglTexture,ct)}else if(Lt){let Nt=Z;for(let Vt=0;Vt<R.textures.length;Vt++){let qt=et.get(R.textures[Vt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Vt,qt.__webglTexture,ct,Nt)}}else if(R!==null&&ct!==0){let Nt=et.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nt.__webglTexture,ct)}rt=-1};function kn(R){let Z=et.get(R);return(Z.__readFormat!==R.format||Z.__readType!==R.type)&&(Z.__readFormat=R.format,Z.__readType=R.type,Z.__formatReadable=N.textureFormatReadable(R.format),Z.__typeReadable=N.textureTypeReadable(R.type)),Z}this.readRenderTargetPixels=function(R,Z,ct,st,nt,Lt,Ot,Nt=0){if(!(R&&R.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt){E.bindFramebuffer(B.FRAMEBUFFER,Vt);try{let qt=R.textures[Nt],ae=qt.format,ue=qt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt);let Ht=kn(qt);if(Ht.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-st&&ct>=0&&ct<=R.height-nt&&B.readPixels(Z,ct,st,nt,mt.convert(ae),mt.convert(ue),Lt)}finally{let qt=ft!==null?et.get(ft).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ct,st,nt,Lt,Ot,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Vt=Vt[Ot]),Vt)if(Z>=0&&Z<=R.width-st&&ct>=0&&ct<=R.height-nt){E.bindFramebuffer(B.FRAMEBUFFER,Vt);let qt=R.textures[Nt],ae=qt.format,ue=qt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt);let Ht=kn(qt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ye),B.bufferData(B.PIXEL_PACK_BUFFER,Lt.byteLength,B.STREAM_READ),B.readPixels(Z,ct,st,nt,mt.convert(ae),mt.convert(ue),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ue=ft!==null?et.get(ft).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,Ue);let Re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Pf(B,Re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ye),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Lt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ye),B.deleteSync(Re),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ct=0){let st=Math.pow(2,-ct),nt=Math.floor(R.image.width*st),Lt=Math.floor(R.image.height*st),Ot=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;lt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ct,0,0,Ot,Nt,nt,Lt),E.unbindTexture()},this.copyTextureToTexture=function(R,Z,ct=null,st=null,nt=0,Lt=0){let Ot,Nt,Vt,qt,ae,ue,Ht,ye,Ue,Re=R.isCompressedTexture?R.mipmaps[Lt]:R.image;if(ct!==null)Ot=ct.max.x-ct.min.x,Nt=ct.max.y-ct.min.y,Vt=ct.isBox3?ct.max.z-ct.min.z:1,qt=ct.min.x,ae=ct.min.y,ue=ct.isBox3?ct.min.z:0;else{let Ne=Math.pow(2,-nt);Ot=Math.floor(Re.width*Ne),Nt=Math.floor(Re.height*Ne),R.isDataArrayTexture?Vt=Re.depth:R.isData3DTexture?Vt=Math.floor(Re.depth*Ne):Vt=1,qt=0,ae=0,ue=0}st!==null?(Ht=st.x,ye=st.y,Ue=st.z):(Ht=0,ye=0,Ue=0);let Ee=mt.convert(Z.format),sn=mt.convert(Z.type),Bt;Z.isData3DTexture?(lt.setTexture3D(Z,0),Bt=B.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(lt.setTexture2DArray(Z,0),Bt=B.TEXTURE_2D_ARRAY):(lt.setTexture2D(Z,0),Bt=B.TEXTURE_2D),E.activeTexture(B.TEXTURE0),E.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);let ln=E.getParameter(B.UNPACK_ROW_LENGTH),pe=E.getParameter(B.UNPACK_IMAGE_HEIGHT),Ln=E.getParameter(B.UNPACK_SKIP_PIXELS),ii=E.getParameter(B.UNPACK_SKIP_ROWS),Li=E.getParameter(B.UNPACK_SKIP_IMAGES);E.pixelStorei(B.UNPACK_ROW_LENGTH,Re.width),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Re.height),E.pixelStorei(B.UNPACK_SKIP_PIXELS,qt),E.pixelStorei(B.UNPACK_SKIP_ROWS,ae),E.pixelStorei(B.UNPACK_SKIP_IMAGES,ue);let ws=R.isDataArrayTexture||R.isData3DTexture,Me=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){let Ne=et.get(R),Di=et.get(Z),we=et.get(Ne.__renderTarget),Ni=et.get(Di.__renderTarget);E.bindFramebuffer(B.READ_FRAMEBUFFER,we.__webglFramebuffer),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ts=0;Ts<Vt;Ts++)ws&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(R).__webglTexture,nt,ue+Ts),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,et.get(Z).__webglTexture,Lt,Ue+Ts)),B.blitFramebuffer(qt,ae,Ot,Nt,Ht,ye,Ot,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||et.has(R)){let Ne=et.get(R),Di=et.get(Z);E.bindFramebuffer(B.READ_FRAMEBUFFER,k),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,X);for(let we=0;we<Vt;we++)ws?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.__webglTexture,nt,ue+we):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ne.__webglTexture,nt),Me?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Di.__webglTexture,Lt,Ue+we):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Di.__webglTexture,Lt),nt!==0?B.blitFramebuffer(qt,ae,Ot,Nt,Ht,ye,Ot,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):Me?B.copyTexSubImage3D(Bt,Lt,Ht,ye,Ue+we,qt,ae,Ot,Nt):B.copyTexSubImage2D(Bt,Lt,Ht,ye,qt,ae,Ot,Nt);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Me?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Bt,Lt,Ht,ye,Ue,Ot,Nt,Vt,Ee,sn,Re.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(Bt,Lt,Ht,ye,Ue,Ot,Nt,Vt,Ee,Re.data):B.texSubImage3D(Bt,Lt,Ht,ye,Ue,Ot,Nt,Vt,Ee,sn,Re):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Lt,Ht,ye,Ot,Nt,Ee,sn,Re.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Lt,Ht,ye,Re.width,Re.height,Ee,Re.data):B.texSubImage2D(B.TEXTURE_2D,Lt,Ht,ye,Ot,Nt,Ee,sn,Re);E.pixelStorei(B.UNPACK_ROW_LENGTH,ln),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pe),E.pixelStorei(B.UNPACK_SKIP_PIXELS,Ln),E.pixelStorei(B.UNPACK_SKIP_ROWS,ii),E.pixelStorei(B.UNPACK_SKIP_IMAGES,Li),Lt===0&&Z.generateMipmaps&&B.generateMipmap(Bt),E.unbindTexture()},this.initRenderTarget=function(R){et.get(R).__webglFramebuffer===void 0&&lt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){W=0,$=0,ft=null,E.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};function ns(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new me,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=pd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let g=pd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function pd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Be(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+f,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var gp=hl(kc(),1);var So=new V;function Bn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;So.copy(t),So[n]=0,So.normalize();let l=.5*o/(o+a),u=1-So.angleTo(i)/c;return Math.sign(So[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Vc=class i extends Pe{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new V,l=new V,u=new V(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,x=new V,m=.5/o;for(let p=0,b=0;p<f.length;p+=3,b+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=u.x*Math.sign(c.x)+l.x*r,f[p+1]=u.y*Math.sign(c.y)+l.y*r,f[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[b+0]=Bn(x,l,"z","y",r,n),d[b+1]=1-Bn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[b+0]=1-Bn(x,l,"z","y",r,n),d[b+1]=1-Bn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[b+0]=1-Bn(x,l,"x","z",r,t),d[b+1]=Bn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[b+0]=1-Bn(x,l,"x","z",r,t),d[b+1]=1-Bn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[b+0]=1-Bn(x,l,"x","y",r,t),d[b+1]=1-Bn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[b+0]=Bn(x,l,"x","y",r,t),d[b+1]=1-Bn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var md=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),hv=Math.PI*2;function fv(){let i=new de,t=new Pe(1,1,1),e=new An(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new Rn({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,f,h,d,g,x){let m=new fe(c,typeof l=="string"?s(l):l);return m.position.set(u,f,h),m.scale.set(d,g,x),a.add(m),m}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let f=u.map(d=>(d.updateMatrix(),d.geometry.toNonIndexed().applyMatrix4(d.matrix))),h=new fe(ns(f),l);h.castShadow=u.some(d=>d.castShadow),f.forEach(d=>d.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function dv({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new dn({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:_n});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let d of[-1,1])t(i,s?"#deb181":"#aa785d",d*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",d*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let f=(a+c)/2,h=c-a;for(let d of[-e/2+l/2,e/2-l/2]){t(i,o,d,c,0,l,1.8,n),t(i,u,d,f,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,d,f,g,l,h,l)}for(let d of[-n/2+l/2,n/2-l/2])t(i,o,0,c,d,e-l*2,1.8,l),t(i,u,0,f,d,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function pv({box:i,oval:t,root:e},n,s,r){let o=new de;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new de;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function mv(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new dn({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),f=new dn({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,m=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,m,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let m=0;m<4;m++){let p=m-1.5,b=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][m],g*t+p*r,n+3+(2+m*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+m*1.12)*Math.min(1.15,r),r*1.15);b.rotation.z=p*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>pv(i,x,r*(1.72-x*.17),g)),d=Array.from({length:5},(g,x)=>{let m=r*(.45+x%3*.18),p=c(o,f,0,0,0,m,m,m);return p.name="bubble-"+x,p});return g=>{for(let[x,{fish:m,tail:p}]of h.entries()){let b=g*(.43+x*.06)+x*2.07+.5,T=t*(.24+x*.036),M=e*(.17+x*.038);m.position.set(Math.cos(b)*T,n+10+x*3.65+Math.sin(b*1.7)*2.15,Math.sin(b)*M),m.rotation.y=-Math.atan2(Math.cos(b)*M,-Math.sin(b)*T),p.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,m]of d.entries()){let p=(g*.3+x/d.length)%1;m.position.set(t*.33+Math.sin(p*hv+x)*r,n+5+p*20,e*.23),m.visible=p>.08&&p<.94}}}function gv({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let d=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);d.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new de;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,d)=>{let g=a*(1-d*.16);return e(l,d%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),f=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let d of[-1,1]){let g=new de;g.position.set(d*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*d*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*d*.28;for(let m of[-1,0,1])e(g,"#ecc297",(m*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);f.push({leg:g,side:h,front:d})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let d=h*.35+.7,g=Math.cos(d)*n*.13,x=Math.sin(d)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(d)*s*.09,-Math.sin(d)*n*.13);for(let[m,p]of u.entries()){let b=m+1;p.position.set(-(3.55+b*1.24)*a,-.19*b*a,Math.sin(h*1.75-b*.55)*b*a*.32)}for(let{leg:m,side:p,front:b}of f)m.rotation.y=Math.sin(h*3.6)*p*b*.31}}function gd(i,t,e){if(!Object.hasOwn(md,i))return null;let n=md[i],s=fv(),r=n==="aquarium",{base:o,top:a}=dv(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?mv(s,t,e,o,a,c):gv(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,f){l(Math.max(0,f))}}}var J=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),xv=Object.freeze({sage:J.sage,mint:J.aqua,sky:J.blue,peach:J.peach,coral:"#cf8979",lavender:J.lilac,butter:J.honey,cream:J.linen,white:J.cream,oak:J.oakLight,walnut:J.walnut,charcoal:"#505b68",brass:J.brass,terracotta:"#b97d63",forest:J.moss,blush:J.blush,teddy:"#aa8063",slate:"#9b9b9d"}),yv=new Set([J.oak,J.oakLight,J.walnut]),_v=new Set([J.sage,J.moss,J.linen,J.lilac,J.lilacLight,J.blush,J.peach,J.oatmeal,J.upholsteryShadow,J.denim]);function vv(i,t){let e=yv.has(i)?1:_v.has(i)?2:0,n=i===J.glass||i===J.darkGlass||i===J.blueWater,s=i===J.brass,r=i===J.steel||i===J.basinSteel,o=new Rn({color:i,roughness:s||r?.37:n?.33:i===J.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Hu=class{constructor(t,e){this.root=new de,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,vv(e,this.grainDirection));let a=new fe(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),f=u>.2?new Vc(s,r,o,2,u):new Pe(s,r,o);return this.part(f,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new Gi(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new An(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new Ti(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new wt(l,u)),c=new $r(a,24);return c.scale(s,r,o),this.part(c,J.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:ns(s);s.length>1&&s.forEach(a=>a.dispose());let o=new fe(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ri(i,t,e,n,s,r,o=J.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function Mo(i,t,e,n,s,r,o,a){let c=o===J.linen?J.binding:J.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function bv(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?J.upholsteryShadow:J.moss,u=a?J.oatmeal:J.sage,f=o?t*.5:t,h=r&&!o?e*.57:e,d=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(Ri(i,d,g,f,h,5),i.box(d,5,g,f*.97,22,h*.98,l,8),r){let S=o?t*.52:t*.34,w=o?e*.38:e*.46,L=o?t*.22:-t*.32,_=o?c*e*.3:e*.25;Ri(i,L,_,S,w,5),i.box(L,5,_,S,22,w,l,8),i.box(L,25,_,S*.96,12,w*.9,n,5),o&&i.box(L,29,c*e*.464,S,26,x,u,6)}let m=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let S=e*.88/m;for(let w=0;w<m;w++){let L=-e*.44+S*(w+.5);i.box(d+x*.18,25,L,f*.76,12,S-3,n,5),i.box(d-f*.39,27,L,f*.22,31,S-1,u,8)}i.box(d,29,-c*e*.445,f*.88,20,x,u,6),Mo(i,d+f*.13,35,-e*.31,f*.42,S*.49,a?J.sage:J.peach,-.18),Mo(i,d+f*.12,35,e*.28,f*.4,S*.45,J.linen,.2)}else{let S=t*.8/m;for(let w=0;w<m;w++){let L=-t*.4+S*(w+.5);i.box(L,25,g+h*.08,S-3,12,h*.7,n,6),i.box(L,27,g-h*.39,S-1,31,h*.24,u,7)}for(let w of[-t*.442,t*.442])i.box(w,26,g,x,22,h*.89,u,6);Mo(i,-t*.27,35,g-h*.15,t*.18,h*.34,J.peach,-.18),Mo(i,t*.27,35,g-h*.12,t*.17,h*.33,J.linen,.2)}let p=o?f*.67:f*.19,b=o?e*.14:h*.58,T=o?d+f*.06:f*.32,M=o?e*.13:g+h*.1;i.box(T,37.1,M,p,1.7,b,J.lilacLight,.65);for(let S of[-1,1])i.box(T,38.82,M+S*b*.36,p*.9,.25,1.2,J.lilac);return 58}function jn(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Ri(i,t,e,n,s,c,J.walnut),i.box(t,c,e,n*.9,7,s*.92,J.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,f=e-Math.cos(r)*s*.39;i.box(u,c+9,f,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function Sv(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return jn(i,0,-e*.39,t*.2,e*.23,0,J.denim),jn(i,0,e*.39,t*.2,e*.23,Math.PI,J.denim),jn(i,-t*.415,0,t*.17,e*.27,Math.PI/2,J.denim),jn(i,t*.415,0,t*.17,e*.27,-Math.PI/2,J.denim),Ri(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,J.walnut,3),i.box(0,37,0,t*.79,8,e*.57,J.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,J.linen,.6),46.4;if(r)jn(i,0,-e*.37,t*.2,e*.2,0,J.sage),jn(i,0,e*.37,t*.2,e*.2,Math.PI,J.blush),jn(i,-t*.38,0,t*.2,e*.2,Math.PI/2,J.lilac),jn(i,t*.38,0,t*.2,e*.2,-Math.PI/2,J.honey),i.disc(0,0,0,t*.13,5,e*.13,J.walnut),i.disc(0,4,0,t*.045,31,e*.045,J.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[J.sage,J.blush,J.lilac,J.honey];for(let u=0;u<c.length;u++)for(let f of[-1,1])jn(i,t*c[u],e*.37*f,t*(a?.19:.15),e*.23,f<0?0:Math.PI,l[(u+(f<0?0:2))%l.length]);Ri(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,J.linen,.5)}return 42}function Mv(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,J.ink,.5),i.box(t,e+1,n,s*.1,14,4,J.ink,1),i.box(t,e+12,n,s,25,6,J.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,J.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,J.blue,.2)}function Ev(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,f=s?r/2:0;s&&i.box(l,37,f+.8,a,7,u-1.6,n,2.4),i.box(l,4,f,a*.81,34,u*.81,J.walnut,2.8);for(let h=0;h<3;h++){let d=6+h*9.7;i.box(l,d,f+u*.41,a*.74,8.4,2,J.oak,.7),i.box(l,d+3,f+u*.43,a*.26,2,2,J.brass,.5)}}return Mv(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,J.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,J.peach),81}function xd(i,t,e,n,s,r){let o=new Tn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,f=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...f):o.lineTo(...f)}o.closePath();let a=new Wi(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function wv(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ri(i,0,0,t,e,6,J.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,J.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,J.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,J.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,J.lilacLight,1);let f=t>=145?[-t*.2,t*.2]:[0];for(let d of f)Mo(i,d,u+22,-e*.275,t*(f.length===2?.34:.49),e*.2,J.linen,d<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[d,g,x,m]of[[-.24,.12,1,J.cream],[.23,.27,.79,J.honey],[.08,.04,.57,J.cream],[-.1,.34,.62,J.honey]])xd(i,t*d,u+30.8,e*g,h*x,m);for(let d of[-.32,-.17,0,.17,.32])i.box(t*d,u+30.71,e*.24,.85,.24,e*.33,J.lilacLight,0);for(let d of[.09,.195,.3,.405])i.box(0,u+30.72,e*d,t*.71,.24,.9,J.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,J.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let f of[-1,1])i.box(t*.45*u,4,e*.46*f,5,l,6,J.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let f=-3;f<=3;f++)i.box(t*.45*u,l-29,e*f*.105,3,20,3,n,.8)}return l}function Tv(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ri(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,J.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,J.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let f=0;f<l;f++){let h=t*.89/l,d=(a-8)/c,g=h*(f-(l-1)/2),x=5+u*d;i.box(g,x,e*.46,h-2,d-1.5,2.9,n,1),i.oval(g,x+d*.45,e*.51,2.2,1.7,2.2,J.brass)}return a+2}function Av(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,J.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,J.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,J.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?J.lilac:J.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,J.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?J.lilacLight:J.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,J.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,J.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,J.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])xd(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,J.cream);return 5}function Rv(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,J.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,J.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,J.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,J.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,J.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,J.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,J.darkGlass);i.box(0,n-4.5,o,s,4.85,u,J.steel,.4);let f=-s/2-u*1.15;i.disc(f,n,o,u*.8,u*2.9,u*.8,J.steel),i.box(f+u,n+u*2.5,o,u*2.8,u*.7,u,J.steel,.6)}function Cv(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?J.sage:J.walnut,2.3),s?Rv(i,t,e,r+2):i.box(0,r-3,0,t,5,e,J.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let f=c?2.2:t*.29,h=c?e*.29:2.2,d=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(d,6,g,f,r*.67,h,a?J.moss:J.oak,.8),i.box(d,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,J.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,J.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let f=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,f,f,1,J.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,J.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,J.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,J.brass,1);return r+3}function Iv(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,J.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,J.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,J.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,J.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,J.glass),i.disc(0,22,-e*.44,3.5,9,3.5,J.brass),i.box(0,30,-e*.4,5,3.7,e*.1,J.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,J.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,J.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,J.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,J.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,J.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,J.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,J.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,J.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,J.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,J.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,J.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,J.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,J.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,J.blush,1.7),36)}function Pv(i,t,e,n,s){let r=n?J.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,J.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,J.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,J.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,J.linen,3.8),c+o*(n?.37:.28)}function Lv(i,t,e){let s=[J.sage,J.peach,J.honey,J.lilac,J.blue,J.blush];Ri(i,0,0,t*.96,e*.96,22,J.sage),i.box(0,20,0,t*.94,7,e*.93,J.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function Dv(i,t,e,n){let s=[J.linen,n,J.sand,J.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function Nv(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,J.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,J.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,f=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,J.moss);f.rotation.z=-c/u,f.rotation.x=l/u;let h=n?J.sage:[J.blush,J.linen,J.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function yd(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return gd(t,e,n);let s=xv[t.split("-").at(-1)],r=new Hu(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=bv(r,e,n,s||(t==="sofa"?J.linen:J.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,J.walnut,3.5),r.box(0,24,0,e,4,n,J.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,J.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,J.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,J.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,J.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,J.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=Sv(r,e,n,s||J.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=Ev(r,e,n,s||J.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))jn(r,0,0,e,n,0,s||J.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){jn(r,0,0,e,n,0,s||J.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,J.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=wv(r,e,n,s||J.lilac,t);else if(t==="rug")o=Av(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=Cv(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=Iv(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=Nv(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,J.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,J.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,J.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=Tv(r,e,n,s||J.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Ri(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||J.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,J.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=Pv(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=Dv(r,e,n,s||J.sage);else if(t.startsWith("baby-activities-"))o=Lv(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||J.peach),r.ring(0,a,0,a*.95,a*.95,1.2,J.linen),o=a*2}else return null;return r.finish(o)}var kt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},wo=Math.PI,Gu=2*wo,Uv=new Set(["unknown","unavailable"]),ti=(i,t,e)=>Math.max(t,Math.min(e,i)),Eo=(i,t)=>Number.isFinite(i)?ti(i,12,480):t,bd=.96,Sd=.09;function Md(i,t,e){let n=Eo(i.w,42),s=Eo(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*Sd)<=s*bd/2}var le=(i,t={})=>new Rn({color:i,roughness:.83,...t}),Wu=i=>String(i?.state??"unknown"),vs=i=>!Uv.has(Wu(i)),dr=i=>vs(i)&&(i.active===!0||i.state==="on"),Fv=i=>dr(i)?Number.isFinite(i.attributes?.brightness)?ti(i.attributes.brightness/255,0,1):1:0;function Ci(i,t,e,n=0,s=0,r=0){let o=new fe(t,e);return o.position.set(n,s,r),i.add(o),o}function Ze(i,t,e,n,s,r=0,o=0,a=0){return Ci(i,new Pe(t,e,n),s,r,o,a)}function cn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,f=l-e/2,h=new Tn;h.moveTo(u,f),h.lineTo(-u,f),h.lineTo(-u,-f),h.lineTo(u,-f),h.closePath();let d=new wi(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return d.translate(0,0,l-n/2),Ci(i,d,s,r,o,a)}function Ge(i,t,e,n,s,r=0,o=0,a=0,c=16){return Ci(i,new Gi(t,e,n,c),s,r,o,a)}function Qn(i,t,e,n,s,r){return Ci(i,new An(t,10,7),e,n,s,r)}function fr(i,t=0,e=0,n=0){let s=new de;return s.position.set(t,e,n),i.add(s),s}function Ov(i,t){let e=new ke({transparent:!0,depthWrite:!1,blending:oo,uniforms:{strength:{value:0},tint:{value:new Qt(kt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),n=Ci(i,new Yn(2*t,2*t),e,0,2.8,0);return n.rotation.x=-wo/2,n.visible=!1,(s,r)=>{n.visible=s>0,e.uniforms.strength.value=s*.29,e.uniforms.tint.value.copy(r)}}function Bv(i,t,e){let n=new de,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),f=Math.min(t,e),h=le(kt.honey),d=le(kt.ink),g=le(kt.brass,{roughness:.36,metalness:.42}),x=le(kt.cream,{emissive:kt.warm,emissiveIntensity:0}),m=new Qt(kt.warm),p=u?46:o?50:a?56:l?40:c?56:36,b=Ov(n,ti(f*(a?1.72:1.35),38,110));if(a){let T=f*(u?.19:.29);Ge(n,T,T*1.02,3,d,0,p+2),o&&Ge(n,1.7,1.7,13,h,0,p+9),Ge(n,T*.82,T,5,h,0,p-1.5),Ge(n,T*.92,T*.96,1.15,g,0,p+1.1);let M=Qn(n,T*.83,x,0,p,0);M.scale.y=o?.88:.52}else if(l)cn(n,f*.34,18,4,d,0,35,-4),Ge(n,f*.12,f*.11,14,h,0,37,3),Qn(n,f*.21,x,0,p+3,3);else{let T=p-7,M=c?3:16,S=f*(c?.25:.3);if(Ge(n,S*.57,S*.67,4,d,0,M),Ge(n,2,2.9,T-M,h,0,(M+T)/2),c)Qn(n,S*.81,x,0,p,0);else{let w=r==="bud_lamp"?12:9;Ge(n,S*.56,S,14,x,0,p,0,w),Ge(n,S,S*.99,1.2,g,0,p-6.7,0,w),Ge(n,S*.55,S*.58,1.1,g,0,p+7.1,0,w)}}return{root:n,anchorY:p+2,animate(T){let M=Fv(T),S=T?.attributes?.rgb_color;if(Array.isArray(S)&&S.length===3&&S.every(Number.isFinite)){let[w,L,_]=S.map(I=>ti(I/255,0,1));m.setRGB(w,L,_,Oe)}else m.setHex(kt.warm);b(M,m),x.emissiveIntensity=M*.88,x.emissive.copy(m),M>0?x.color.copy(m):x.color.setHex(kt.cream)}}}function zv(i){let t=new Tn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new wi(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-wo/2)}function _d(i,t,e,n){let s=new de,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=fr(s,0,o,0);n&&(a.rotation.x=wo/2);let c=fr(a,0,-1,0),l=le(kt.cream),u=le(kt.ink),f=/(?:white|cream)$/.test(i.type)?kt.oat:/(?:forest|sage)$/.test(i.type)?kt.sage:kt.honey,h=le(f),d=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Ge(a,r*.18,r*.2,6,u),Ge(a,r*.174,r*.176,1.4,le(kt.brass,{roughness:.36,metalness:.42}),0,3.4),Ge(a,r*.15,r*.17,2.6,l,0,4.9);let g=zv(r);for(let x=0;x<d;x++){let m=fr(c);m.rotation.y=x/d*Gu,Ci(m,g,h)}if(n){cn(s,r*1.66,6,r*1.02,u,0,3),Ze(s,r*.3,11,6,l,0,10);let x=Ci(s,new Ti(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let m=-1;m<=1;m++){let p=m*r*.5;Ge(s,.68,.68,2*Math.sqrt(r*r-p*p),u,p,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,m=0){let p=Number.isFinite(x?.attributes?.percentage)?ti(x.attributes.percentage/100,.12,1):.64;c.rotation.y=dr(x)?m*Gu*p%Gu:0}}}function kv(i,t){let e=new de,n=t.mountY??39,s=fr(e,0,n),r=ti(i*.72,17,27);cn(s,r,31,5,le(kt.ink),0,0,-.5),cn(s,r-1.9,29,4.4,le(kt.cream),0,.3,1);let o=le(kt.oat,{emissive:kt.warm,emissiveIntensity:0}),a=cn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let f=le(kt.teal,{emissive:kt.mint,emissiveIntensity:0});return Qn(s,1.85,f,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=vs(l)?dr(l)?-.16:.16:0,o.emissiveIntensity=dr(l)?.42:0;let f=l?.presence==="on";for(let h=0;h<c.length;h++){let d=f?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(f?kt.mint:kt.teal),c[h].material.emissiveIntensity=f?.75+d*1.9:0,c[h].scale.setScalar(f?1+d*.18:1)}}}}function vd(i,t,e,n=31){let s=new de,r=36.5,o=Math.max(12,i-6),a=le(kt.oat);if(t){let h=le(kt.glass,{roughness:.32});Ze(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])Ze(s,3.2,n+2,7.5,a,g,r);let d=r+n/2;Ze(s,o,1.8,7,h,0,d+.35);for(let g of[-4.25,4.25])Ze(s,o+2,3.2,1.5,a,0,d,g);Ze(s,o+3,3.8,11,a,0,r-n/2,1.4),Ze(s,o,1.35,.5,le(kt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=le(kt.cream),l=r+n/2-1;cn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,d)=>Ze(s,o-5,n/8-.45,3,c,0,l-d*(n/8),6.9)),f=0;return{root:s,anchorY:r+1.5,animate(h){let d=Xu(h);d!==null&&(f=1-d);let g=Number.isFinite(h?.attributes?.current_tilt_position)?ti(h.attributes.current_tilt_position/100,0,1):0;for(let x=0;x<u.length;x++){let m=ti(f*u.length-x,0,1);u[x].visible=m>.02,u[x].scale.y=m,u[x].rotation.x=g*.9}}}}function Xu(i){return vs(i)?Number.isFinite(i.attributes?.current_position)?ti(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function Vv(i,t){let e=new de,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=le(kt.oat),l=le(kt.cream),u=le(kt.plum),f=[le(kt.tile),le(kt.paleTile)],h=le(kt.dark);Ze(e,i,5,t*bd,l,0,2.5,t*Sd),Ze(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let U of[-i*.42,i*.42])Ze(e,i*.09,o+4,n,c,U,(o+4)/2),cn(e,i*.1,o+4,5,l,U,(o+4)/2,r+1,1.5);let d=new Tn;d.moveTo(-i*.49,0),d.lineTo(i*.49,0),d.lineTo(0,a),d.closePath();let g=new wi(d,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Ci(e,g,u,0,o+4);let x=i*.49,m=Math.atan2(a,x),p=Math.hypot(a,x),b=(n+11)/8,T=[[],[]];for(let U of[-1,1])for(let z=0;z<8;z++){let q=-r-5.5+(z+.5)*b,k=new Pe(p*.97,2.2,b-.62);k.rotateZ(-U*m),k.translate(U*x*.5,o+5.65+a*.5,q),T[z%2].push(k)}T.forEach((U,z)=>{Ci(e,ns(U),f[z]),U.forEach(q=>q.dispose())}),cn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),Ze(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),Ze(e,s,o,1.5,h,0,o/2+4,r-4);for(let U of e.children)U.isMesh&&(U.castShadow=!0);let M=le(kt.mint),S=le(kt.sage),L=(o-3)/6,_=Array.from({length:6},(U,z)=>{let q=fr(e,0,o-(z+.5)*L+2,r+.5);return cn(q,s-2,L-.7,3.4,M,0,0,0,1.2),Ze(q,s*.91,.68,.7,S,0,L*.23,1.8),z===5&&cn(q,s*.13,2,2.2,l,0,0,2.3,.55),q}),I=le(kt.gold,{emissive:kt.ember,emissiveIntensity:0});Qn(e,3.7,I,i*.422,o*.73,r+4.5);let O=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(U,z=0){let q=Xu(U);q!==null&&(O=q),M.color.setHex(vs(U)?kt.mint:kt.muted),S.color.setHex(vs(U)?kt.sage:kt.muted);let k=(1-O)*_.length;_.forEach((W,$)=>{let ft=ti(k-$,0,1);W.visible=ft>.02,W.scale.y=ft,W.position.y=o-($+ft/2)*L+2});let X=["opening","closing"].includes(Wu(U));I.emissiveIntensity=X?.55+(.5+.5*Math.cos(z*6)):0}}}function Hv(i){let t=new de,e=46,n=le(kt.cream),s=le(kt.honey),r=Math.min(i*.86,88),o=fr(t,-r/2,0,0);for(let a of[-r/2-1,r/2+1])Ze(t,3.4,e,5,n,a,e/2);return Ze(t,r+4,3,5,n,0,e),cn(o,r-2,e-4,4,s,r/2,e/2,0,2),Qn(o,2.2,le(kt.gold),r-6,e*.47,2.8),{root:t,anchorY:e/2,animate(a){let c=Xu(a);c!==null&&(o.rotation.y=-1.32*c),s.color.setHex(vs(a)?kt.honey:kt.muted)}}}function Gv(i,t,e){let n=new de,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=ti(t*.85,23,126),a=le(kt.dark,{emissive:kt.mint,emissiveIntensity:0});if(cn(n,o,s?25:18,8,le(kt.cream),0,r,0),s){cn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])Qn(n,1.35,le(kt.oat),o*c,r-7,4.3)}else Ze(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",f=vs(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?kt.warm:kt.glass),a.emissiveIntensity=f?1.15:dr(c)?.25:0}}}function Wv(i,t,e){let n=new de,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=le(kt.cream),c=le(r?kt.glass:kt.sage),l=le(kt.teal,{emissive:kt.mint,emissiveIntensity:0}),u=o-1;if(Ge(n,s*.46,s*.5,4,le(kt.ink),0,2),r){let d=Qn(n,s/2,c,0,12,0);d.scale.y=.78,Ge(n,s*.19,s*.22,3.5,a,0,u)}else{cn(n,s,24,s*.82,c,0,15,0,5),cn(n,s*.91,3.8,s*.71,a,0,u);for(let d=-1;d<=1;d++)Ze(n,s*.66,1.2,1.1,l,0,u+2,d*3.5)}Qn(n,1.6,l,s*.18,u-2,s*.31);let f=le(kt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(d,g)=>Qn(n,2.1+g*.6,f,0,u+3,0));return{root:n,anchorY:u,animate(d,g=0){let x=dr(d);l.emissiveIntensity=x?1.6:0;for(let m=0;m<h.length;m++){h[m].visible=x;let p=(g*.68+m/h.length)%1;h[m].position.set(Math.sin(p*wo)*3.1,u+4+p*14,0),h[m].scale.setScalar(.7+p*.62)}}}}function Xv(i,t){let e=new de,n=Math.min(i,t)*.42,s=le(kt.sage,{emissive:kt.mint,emissiveIntensity:0}),r=le(kt.ink);Ge(e,n,n*.95,7,r,0,4.6),Ge(e,n*.96,n,5.5,le(kt.cream),0,10.2),Ge(e,n*.28,n*.33,4,le(kt.oat),0,14,-n*.23);for(let a of[-.27,.27])Qn(e,n*.105,r,n*a,10,n*.88);let o=cn(e,n*.68,1.2,2.5,s,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03,animate(a,c=0){let l=["cleaning","returning"].includes(Wu(a));o.material.emissiveIntensity=l?.6+.5*Math.cos(c*6):0}}}function Ed(i,t={}){let e=Eo(i.w,42),n=Eo(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?kv(e,t):s==="garageDoor"?Vv(e,n):s==="door"||r==="door"?Hv(e):s==="window"?vd(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?vd(Eo(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?Gv(i,e,t):s==="airPurifier"||s==="humidifier"?Wv(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?Xv(e,n):s==="windowFan"?_d(i,e,n,!0):r==="fan"||/^fans-/.test(s)?_d(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?Bv(i,e,n):null}var Id=hl(kc(),1),{difference:Pd,union:Ld}=Id.default,Wc=18,In=.001,di=(i,t)=>i[0]*t[0]+i[1]*t[1],bs=(i,t)=>i[0]*t[1]-i[1]*t[0],pi=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ae=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],qc=([i,t])=>[-t,i],wd=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Hc=i=>i.map(({x:t,y:e})=>[t,e]),Ii=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Dd=i=>i.length?Ld(...i):[];function Xc(i,t,e,n=0){let s=pi(t,i),r=Math.hypot(...s);if(r<In)return null;let o=s.map(u=>u/r),a=qc(o),c=Ae(i,o,-n),l=Ae(t,o,n);return Ii([Ae(c,a,e),Ae(l,a,e),Ae(l,a,-e),Ae(c,a,-e)])}function Gc(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function Td(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=pi(n,t),r=Math.hypot(...s);return r>In?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function qv(i,t,e,n){if(Math.abs(di(i.tangent,t.tangent))<.9999)return null;let s=qc(i.tangent),[r,o]=[t.start,t.end].map(x=>pi(x,i.start)),a=di(r,s);if(Math.abs(a)<.1||Math.abs(a)>Wc||Math.abs(a-di(o,s))>.1)return null;let c=[di(r,i.tangent),di(o,i.tangent)].sort((x,m)=>x-m),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let f=Ae(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!Gc(e,Ae(f,s,-h))||!Gc(n,Ae(f,s,a+h))||Gc(e,Ae(f,s,a/2))||Gc(n,Ae(f,s,a/2)))return null;let d=Ae(i.start,i.tangent,l),g=Ae(i.start,i.tangent,u);return Ii([Ae(d,s,-h*.05),Ae(g,s,-h*.05),Ae(g,s,a+h*.05),Ae(d,s,a+h*.05)])}function Nd(i){let t=[],e=[];for(let n of[...i].reverse()){let s=Dd(n.polygons);if(!s.length)continue;let r=t.length?Pd(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?Ld(t,s):s}return{footprint:t,regions:e.reverse()}}function To(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Ud(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:Hc(h.points),polygons:[Ii(Hc(h.points))],outdoor:e&&To(h)})),s=[];for(let[h,d]of n.entries())for(let g of n.slice(h+1))for(let x of Td(d.points))for(let m of Td(g.points)){let p=qv(x,m,d.points,g.points);p&&s.push({surface:d.surface,polygons:[p],outdoor:d.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:d,stepBottom:g,deckBottom:x,northDeck:m,southDeck:p,recess:b}=t;r.push({surface:"patio",polygons:[Ii(Hc(m)),Ii(Hc(p)),Ii(wd(h,g,d+1,x))]}),b.x2>b.x1&&b.z2>b.z1&&o.push({surface:"oak",polygons:[Ii(wd(b.x1,b.z1,b.x2,b.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=Nd([...l,...c]),f=t||e?Dd(c.flatMap(h=>h.polygons)):[];return{...u,foundation:f}}function Yv(i,t,e,n){let s=bs(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Ae(i,qc(t),r),a=Ae(i,qc(e),-r),c=bs(pi(a,o),e)/s,l=Ae(o,t,c);return Math.hypot(...pi(l,i))>n*2.5?Ii([i,o,a]):Ii([i,o,l,a])}function Ad(i,t){let e=bs(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=pi(t.point,i.point);return[bs(n,t.tangent)/e,bs(n,i.tangent)/e]}function Zv(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=pi(r.point,s.point);if(Math.hypot(...o)>Wc)continue;let a=Ad(s,r);a&&a.every(c=>c>=-Wc&&c<=In)?e.push({a:s,b:r,center:Ae(s.point,s.tangent,a[0])}):!a&&di(s.tangent,r.tangent)<0&&di(o,s.tangent)<=In&&di(o,r.tangent)>=-In&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Ad(s,o);if(!a)continue;let[c,l]=a;c<-Wc||c>=-In||l<=In||l>=r.length-In||r.openings.some(({start:u,end:f})=>l>=u&&l<=f)||e.push({a:s,center:Ae(s.point,s.tangent,c)})}}return e}function Rd({a:i,b:t,center:e},n){return e?[Xc(i.point,e,n,.1),t&&Xc(t.point,e,n,.1),t&&Yv(e,i.tangent,t.tangent,n)].filter(Boolean):[Xc(i.point,t.point,n,.1)].filter(Boolean)}function Fd(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function Jv(i,t){return Fd(i).flatMap(([e,n])=>{let s=pi(n,e),r=Math.hypot(...s);if(r<In)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=pi(a,e),u=pi(c,e);if(Math.abs(bs(l,o))>In||Math.abs(bs(u,o))>In)return[];let[f,h]=[di(l,o),di(u,o)].sort((x,m)=>x-m),d=Math.max(0,f),g=Math.min(r,h);return g-d>In?[[Ae(e,o,d),Ae(e,o,g)]]:[]})})}function Cd(i,t){return t?.length?Pd(i,t):i}function Od(i,t,e,n){let s=[],r=(c,l,u,f,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:f,priority:h})};for(let c of i){let{palette:[l,u,f]}=c,h=[c.x1,c.y1],d=[c.dx,c.dz],g=(b,T,M,S,w,L,_)=>{T-b>In&&r(Xc(Ae(h,d,b),Ae(h,d,T),w/2),M,S,L,_)},x=c.openings.length?n:0,m=(b,T)=>{g(b,T,x,e,t,l,2),g(b,T,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let p=0;for(let b of c.openings)m(p,b.start),p=Math.max(p,b.end);m(p,c.length),g(0,c.length,0,3,t+3,f,1)}for(let c of Zv(i)){let[l,u,f]=c.a.wall.palette;for(let h of Rd(c,t/2))r(h,0,e,l,2);for(let h of Rd(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,f,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],f=new Map,h=s.filter(d=>d.from<=u&&d.to>=c);for(let{surface:d,shape:g}of h.sort((x,m)=>x.priority-m.priority))f.has(d)||f.set(d,{surface:d,polygons:[]}),f.get(d).polygons.push(g);return{...Nd([...f.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:f},h)=>{let d=Fd(l);return c.map(g=>({...g,bottom:u,top:f,faces:{top:Cd(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:Cd(g.polygons,a[h-1]?.footprint),sides:Jv(g.polygons,d)}}))})}var $v=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),Kv=3,jv={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},Bd=Object.fromEntries(Object.entries(jv).map(([i,t])=>[i,t.map(e=>new Qt(e))])),Qv=new Qt("#ffc38b"),{clamp:tb,lerp:Ao,smoothstep:zd}=Te;function kd(i,t,e){i.toneMapping=ao,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=ms,i.shadowMap.autoUpdate=!1;let n=new ps("#fff4e5","#897e91",1.13),s=new Ji("#fff0d4",2.15),r=new Ji("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,f=(c+l)/2;s.position.set(u-610,1150,f-490),s.target.position.set(u,0,f),r.position.set(u+290,410,f+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let d=Array.from({length:Kv},()=>new no("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...d);let g=[],x,m,p=!0,b=new Qt;function T(){for(let w of t.children)w.isMesh&&(w.receiveShadow=!0,w.geometry.computeBoundingBox(),w.castShadow=w.geometry.boundingBox.max.y+w.position.y>-99)}function M(w,L){let _=/(light|lamp|sconce)/i.test(w.type),I=!L.animate||_;L.root.traverse(O=>{!O.isMesh||O.material.transparent||O.material.isShaderMaterial||(O.receiveShadow=!0,O.castShadow||=I)}),_&&w.entityId&&g.push({item:w,object:L})}function S(w,L,_){let I=w.night===!0,O=$v.has(w.condition),U=Number.isFinite(w.sunElevation)?Math.round(w.sunElevation*2)/2:I?-12:35,z=zd(U,-8,19),q=`${O}:${tb(U,-8,35)}`;if(q!==x){let k=Bd[O?"overcast":"clear"],X=[n.color,n.groundColor,s.color,_.color,t.background];for(let[$,ft]of X.entries())ft.lerpColors(Bd.night[$],k[$],z);let W=z*(1-zd(U,8,34));O||s.color.lerp(Qv,W*.8),n.intensity=Ao(.75,O?1.33:1.12,z),s.intensity=Ao(.28,O?.86:2.14,z),r.intensity=Ao(.12,.23,z),s.shadow.intensity=Ao(.65,O?.39:.84,z),x=q,m=void 0}if(m!==L){let k=g.flatMap(({item:X,object:W})=>{let $=L[X.id];if($?.state!=="on")return[];let ft=Number.isFinite($.attributes?.brightness)?Te.clamp($.attributes.brightness/255,0,1):1;return ft>0?[{object:W,power:ft,color:$.attributes?.rgb_color}]:[]}).sort((X,W)=>W.power-X.power);for(let[X,W]of d.entries()){let $=k[X];if(!$){W.intensity=0;continue}let{object:ft,power:rt,color:it}=$;Array.isArray(it)&&it.length===3&&it.every(Number.isFinite)?(b.setRGB(...it.map(vt=>Te.clamp(vt/255,0,1)),Oe),W.color.copy(b)):W.color.set("#ffd5a2"),W.position.copy(ft.root.position),W.position.y+=Math.max(18,ft.anchorY-9),W.intensity=rt*Ao(2350,1250,z)}m=L}p&&(i.shadowMap.needsUpdate=!0,p=!1)}return{markStructure:T,register:M,update:S,dispose:()=>s.shadow.dispose()}}var mi=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),pr=Object.freeze({default:mi("Default",0,0),top:mi("Top down",0,0),high:mi("High angle",0,15),dollhouse:mi("Dollhouse",2,30),corner:mi("Corner",45,40),north:mi("From north",180,42),east:mi("From east",90,42),south:mi("From south",0,42),west:mi("From west",270,42),free:mi("Free view",0,25)});function Vd(i,t=!1){let e=Object.entries(pr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Pi(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(pr,t.preset)?t.preset:"top",n=pr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?Te.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?Te.clamp(t.zoom,.6,2.5):n.zoom}}function Hd(i){let t=Pi(i);return{...t,preset:"free",tilt:t.tilt||pr.free.tilt}}function qu(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Pi(i)}function Yu(i){return Pi({...qu(i),preset:"default"})}function Gd(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>qu(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return qu(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function Zu(i,t,e,n,s="top"){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let r=Pi(s),o=Te.degToRad(r.azimuth),a=Te.degToRad(r.tilt),c=new V((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),l=new V(Math.sin(o)*Math.sin(a),Math.cos(a),Math.cos(o)*Math.sin(a));i.up.set(-Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)),i.position.copy(c).addScaledVector(l,1900),i.lookAt(c),i.updateMatrixWorld(!0);let u=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),f=new ze,h=new V;for(let T of[t.minX-37,t.maxX+37]){for(let M of[t.minZ-53,t.maxZ+36])for(let S of[-111,u])f.expandByPoint(h.set(T,S,M).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&f.expandByPoint(h.set(T,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}let d=t.sceneryPeak;[d?.x,d?.y,d?.z].every(Number.isFinite)&&f.expandByPoint(h.set(d.x,d.y+8,d.z).applyMatrix4(i.matrixWorldInverse));let g=e/n,x=Math.max((f.max.x-f.min.x)/2,(f.max.y-f.min.y)/2*g),m=x/g,p=(f.min.x+f.max.x)/2,b=(f.min.y+f.max.y)/2;return i.left=p-x,i.right=p+x,i.bottom=b-m,i.top=b+m,i.zoom=r.zoom,i.updateProjectionMatrix(),r}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Dining table",icon:"\u25B0",w:165,h:108,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=p=>typeof p=="string"&&p.startsWith("ui"),o=p=>String(p??"").toLowerCase(),a=p=>o(p).split(".")[0],c=p=>typeof p=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(p),l=p=>p.type==="window"?"wall":p.mount||"floor";function u(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function f(p,b,T){return!(!p||!b||!T||p.type===T.type||s.has(p.type)||r(p.type)||s.has(T.type)||r(T.type)||l(b)!==l(T)||p.entityId&&!h(p.entityId,T))}function h(p,b){return!c(p)||typeof b?.type!="string"||r(b.type)||b.type==="stairs"||b.type==="window"?!1:b.type==="cameraThumbnail"?a(p)==="camera":b.type==="garageDoor"?a(p)==="cover":a(p)!=="camera"}function d(p,b){let T=a(p.entity_id),M=o(p.name+" "+p.entity_id),S={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},w=_=>{if(_.type==="controlZone")return!0;if(T==="camera")return _.type==="cameraThumbnail";if(T==="cover")return/garage/.test(M)&&_.type==="garageDoor";if(T==="climate")return _.type==="thermostat";if(T==="binary_sensor"&&/presence|occupancy/.test(M))return _.type==="presenceSwitch";if(S[T]?.includes(_.group)||/humidifier/.test(M)&&_.type==="humidifier"||/purifier/.test(M)&&_.type==="airPurifier")return!0;if(T==="switch"){if(/fan/.test(M))return _.group==="fans"||_.type==="windowFan";if(/light|lamp/.test(M))return _.group==="lighting"}return!1},L=b.filter(_=>h(p.entity_id,_));return{recommended:L.filter(w),available:L}}function g(p){return p&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(p.type)&&!r(p.type)}function x(p,b,T,M){if(!["w","h"].includes(b)||!Number.isFinite(T))return null;let S=p.type==="cameraThumbnail"?40:12,w=p.type==="cameraThumbnail"||c(p.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!M)return{[b]:Math.min(w[b],Math.max(S,T))};let L=Math.min(w.w/p.w,w.h/p.h),_=Math.min(L,Math.max(S/p.w,S/p.h)),I=Math.min(L,Math.max(_,T/p[b]));return{w:Math.round(p.w*I*10)/10,h:Math.round(p.h*I*10)/10}}function m(p,b,T){let M=p.ownerDocument,S=(vt,Rt,Zt={})=>{let Yt=M.createElement(vt);Rt&&(Yt.textContent=Rt);for(let[$t,at]of Object.entries(Zt))Yt.setAttribute($t,at);return Yt},w=S("dialog","",{class:"model-library","aria-label":"Objects and models"}),L=S("header"),_=S("h2","Objects & models"),I=S("button","Close",{type:"button"});L.append(_,I);let O=S("div","",{class:"model-library-filters"}),U=S("select","",{"aria-label":"Object library section"});for(let[vt,Rt]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])U.append(S("option",Rt,{value:vt}));let z=S("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});O.append(U,z);let q=S("div","",{class:"model-library-context"}),k=S("p","",{role:"status",class:"model-library-status"}),X=S("div","",{class:"model-library-list"});w.append(L,O,q,k,X);let W=S("style");W.textContent=`
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
    `,p.append(W,w);let $,ft=!1,rt=(vt,Rt)=>{let Zt=S("button",vt,{type:"button"});return Zt.addEventListener("click",Rt),Zt};function it(vt){$=vt,ft=!1,U.value="catalog",z.value="",ot(),z.focus()}function ot(){let{templates:vt,paletteGroups:Rt}=u(),Zt=new Map(vt.map(_t=>[_t.type,_t])),Yt=new Map(Rt),{items:$t,entities:at}=b(),dt=o(z.value).trim(),Ct=(..._t)=>dt.split(/\s+/).every(pt=>o(_t.join(" ")).includes(pt)),Ut=[];if(q.replaceChildren(),$&&(q.append(S("strong",$.item?.name||$.entity?.name||$.entity?.entity_id)),$.entity&&q.append(rt(ft?"Suggested models":"All compatible models",()=>{ft=!ft,ot()})),q.append(rt("Cancel mapping",()=>{U.value=$.entity?"devices":"placed",$=void 0,z.value="",ot()}))),U.value==="placed")for(let _t of $t){let pt=Zt.get(_t.type);if(!Ct(_t.name,pt?.label,_t.type,_t.entityId))continue;let Ft=[_t.w,_t.h,_t.modelHeight].filter(Number.isFinite).join(" \xD7 "),ht=[pt?.label||_t.type,Ft&&Ft+" plan px",_t.entityId].filter(Boolean).join(" \xB7 "),yt=[rt("Edit",()=>T({kind:"edit",itemId:_t.id}))];vt.some(bt=>f(_t,pt,bt))&&yt.push(rt("Change model",()=>it({item:_t}))),Ut.push([_t.name||pt?.label||_t.type,ht,yt])}else if(U.value==="devices"){let _t=new Map;for(let pt of $t)pt.entityId&&!_t.has(pt.entityId)&&_t.set(pt.entityId,pt);for(let pt of at){if(!c(pt.entity_id)||!Ct(pt.name,pt.entity_id,pt.area))continue;let Ft=_t.get(pt.entity_id),ht=[pt.entity_id,pt.area,Ft?"On plan \xB7 "+Ft.name:"Available to map"].filter(Boolean).join(" \xB7 ");Ut.push([pt.name||pt.entity_id,ht,[Ft?rt("Edit mapped object",()=>T({kind:"edit",itemId:Ft.id})):rt("Choose model",()=>it({entity:pt}))]])}}else{let _t=vt;if($?.item&&(_t=vt.filter(pt=>f($.item,Zt.get($.item.type),pt))),$?.entity){let pt=d($.entity,vt);_t=ft?pt.available:pt.recommended}for(let pt of _t){let Ft=Yt.get(pt.group)||pt.group;if(!Ct(pt.label,pt.type,pt.tags,Ft))continue;let ht=$?.item?{kind:"replace",itemId:$.item.id,modelId:pt.type}:{kind:"place",modelId:pt.type,...$?.entity?{entityId:$.entity.entity_id}:{}};Ut.push([pt.label,Ft+" \xB7 "+pt.w+" \xD7 "+pt.h+" plan px",[rt($?"Use model":"Place",()=>T(ht))]])}}X.replaceChildren();for(let[_t,pt,Ft]of Ut.slice(0,48)){let ht=S("div","",{class:"model-library-row"}),yt=S("div");yt.append(S("strong",_t),S("small",pt));let bt=S("div","",{class:"model-library-actions"});bt.append(...Ft),ht.append(yt,bt),X.append(ht)}k.textContent=Ut.length>48?"Showing 48 of "+Ut.length+". Search to narrow the list.":Ut.length?Ut.length+(Ut.length===1?" result":" results"):U.value==="devices"&&!at.length?"Connect to Home Assistant to list devices.":"No matches."}return U.addEventListener("change",()=>{$=void 0,z.value="",ot()}),z.addEventListener("input",ot),I.addEventListener("click",()=>w.close()),{open(vt="placed"){$=void 0,ft=!1,U.value=vt,z.value="",ot(),w.open||w.showModal()},get isOpen(){return w.open},close(){w.open&&w.close()}}}i.RoomcraftModels=Object.freeze({catalog:u,canMap:h,canReplace:f,suggestions:d,supportsHeight:g,resizeFootprint:x,mount:m,handoffKey:n})})(typeof window>"u"?globalThis:window);function Wd(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new ze().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var eb=24,nb=.32,ib=125,sb=24,Yc=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function Ro(i,t=.12){return new Rn({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function rb(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function Xd(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new de;s.name="tracked-people",i.add(s);let r,o=new Map,a=Yc.map(()=>[]),c=!1,l=!1,u=0,f=!1;function h(){return{sphere:new An(1,12,8),disc:new Vr(1,24).rotateX(-Math.PI/2),groundRing:new Kr(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new Ti(1,.14,6,16),palette:Yc.map(({sweater:b,trim:T,skin:M,hair:S})=>Object.fromEntries(Object.entries({sweater:b,trim:T,skin:M,hair:S}).map(([w,L])=>[w,Ro(L)]))),ink:Ro("#423c50",.09),cheek:Ro("#d78383"),shoes:Ro("#514656"),white:Ro("#fff1dc"),shadow:new dn({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new dn({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function d(b){r??=h();let{role:T,scale:M}=Yc[b],{sweater:S,trim:w,skin:L,hair:_}=r.palette[b],I=T==="baby",O=new de;O.name=`radar-avatar-${T}`;let U=new de,z=new de,q=[],k=[],X=[];s.add(O),O.add(U),U.scale.set(...M);let W=(it,ot,vt,Rt,Zt,Yt,$t,at)=>{let dt=new fe(r.sphere,ot);return dt.position.set(vt,Rt,Zt),dt.scale.set(Yt,$t,at),it.add(dt),dt},$=new fe(r.disc,r.shadow);$.position.y=.13,$.scale.set(19,1,19),O.add($);let ft=new fe(r.groundRing,r.groundMark);ft.position.y=.26,O.add(ft),W(U,S,0,15,0,I?8.2:7.1,8.3,5.4),I?(W(U,w,0,17.5,4.8,4.9,4.1,1.15),W(U,r.white,0,17.4,5.9,1.5,1.5,.35)):(W(U,w,0,20.7,2.4,5.8,2.2,4),W(U,w,T==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let it of[-1,1]){let ot=new de;ot.position.set(it*3.4,10.3,.1),U.add(ot),W(ot,I?S:r.ink,0,-3.2,0,2.65,4.6,2.6),W(ot,I?w:r.shoes,0,-8.15,1.25,3.1,2.1,4),W(ot,r.white,0,-8.8,3.25,2.75,1.1,2),X.push(ot);let vt=new de;vt.position.set(it*6.25,19.1,0),U.add(vt),W(vt,S,it*.9,-3.7,.15,2.75,5.3,2.7),W(vt,L,it*1.3,-7.8,.5,2.3,2.6,2.2),k.push(vt)}z.position.set(0,I?26:27.2,0),I&&z.scale.set(1.16,1.17,1.12),U.add(z),W(z,_,0,1.3,-1.65,9.2,9.65,8.6),W(z,L,0,0,1.9,8.65,8.45,7.5);let rt=W(z,_,-2.1,7.3,4.25,6.4,3.4,4.35);if(rt.rotation.z=T==="papa"?-.27:.22,T==="mama"&&(W(z,_,-6.7,-1.9,-3.8,3.6,8.1,5.2),W(z,_,6.2,-1.7,-3.9,3.3,7.6,5.4),W(z,_,2.8,10.4,-2.5,5.1,5.1,5.1),W(z,w,4.4,8.7,2.2,2.8,1.1,1.1)),I){W(z,_,-7.3,6.7,-2,3.35,3.7,3.5),W(z,_,7.3,6.7,-2,3.35,3.7,3.5);let it=W(z,w,.9,10,4.2,2.5,1.45,1.25),ot=W(z,w,4.1,10,4.2,2.5,1.45,1.25);it.rotation.z=-.4,ot.rotation.z=.4,W(z,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let it of[-1,1])if(W(z,L,it*8.2,-.15,1.1,1.85,2.4,1.75),q.push(W(z,r.ink,it*3,1.2,8.95,.85,.87,.52)),W(z,r.cheek,it*5.05,-1.25,7.95,1.18,.62,.52),T==="papa"){let ot=new fe(r.glasses,r.ink);ot.position.set(it*3.1,1.25,9.15),ot.scale.set(2.5,2.15,1.55),z.add(ot)}return T==="papa"&&W(z,r.ink,0,1.6,9.35,1.1,.28,.35),W(z,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:O,body:U,head:z,arms:k,legs:X,eyes:q,styleIndex:b,baby:I}}function g(b,T){return b.duration>0?Te.clamp((T-b.start)/b.duration,0,1):1}function x(b,T=c){u=Number.isFinite(b)?b:u,l=T||c,f=!1;for(let M of o.values()){let{character:S}=M;l&&(M.duration=0);let w=g(M,u),L=Te.lerp(M.fromX,M.x,w),_=Te.lerp(M.fromZ,M.z,w),I=t(L,_);!Number.isFinite(I)&&w<1&&(M.duration=0,w=1,L=M.x,_=M.z,I=t(L,_));let O=n?Math.min(1,n(L,_)/sb):1;if(S.root.visible=Number.isFinite(I)&&O>0,!S.root.visible)continue;f=!0,S.root.position.set(L,I,_),S.root.rotation.y=M.heading,S.root.scale.setScalar(O);let U=M.walking&&w<1&&!l,z=Math.floor(Math.max(0,u-M.born)*16)/16+.7+S.styleIndex*.62,q=Math.floor(w*12)/12*Math.PI*4,k=U?Math.sin(q)*.56:0,X=U?Math.abs(Math.sin(q))*1.9:(1+Math.sin(z*4.7))*.47;S.body.position.y=l?0:X*(S.baby?1.5:1),S.body.rotation.z=l?0:U?k*.15:Math.sin(z*2.8)*.045;for(let W=0;W<2;W++){let $=W===0?-1:1;S.arms[W].rotation.x=U?-k*$:l?0:Math.sin(z*3.1+W)*.09,S.legs[W].rotation.x=k*$}rb(S,z,l)}}function m(b,T,{reduceMotion:M=!1}={}){c=M;let S=Number.isFinite(T)?T:u,w=new Map;for(let _ of Array.isArray(b)?b:[])if(!(typeof _?.id!="string"||!_.id||_.id.length>256||!Number.isFinite(_.x)||!Number.isFinite(_.y)||w.has(_.id)||!Number.isFinite(t(_.x,_.y)))&&(w.set(_.id,_),w.size===eb))break;for(let[_,I]of o)w.has(_)||(I.character.root.visible=!1,a[I.character.styleIndex].push(I.character),o.delete(_));let L=Yc.map(()=>0);for(let{character:_}of o.values())L[_.styleIndex]++;for(let _ of[...w.keys()].filter(I=>!o.has(I)).sort()){let I=L.indexOf(Math.min(...L));L[I]++;let O=a[I].pop()??d(I),{x:U,y:z}=w.get(_);o.set(_,{character:O,fromX:U,fromZ:z,x:U,z,heading:0,born:S,start:S,duration:0})}for(let[_,{x:I,y:O}]of w){let U=o.get(_);if(U.x!==I||U.z!==O){let z=M?1:g(U,S),q=Te.lerp(U.fromX,U.x,z),k=Te.lerp(U.fromZ,U.z,z),X=Math.hypot(I-q,O-k),W=X>1?Math.atan2(I-q,O-k):U.heading,ft=!M&&X>0&&X<=ib&&e?.(q,k,I,O)?nb:0;Object.assign(U,{fromX:q,fromZ:k,x:I,z:O,heading:W,start:S,duration:ft,walking:X>2})}}x(S,M)}function p(){if(s.removeFromParent(),!!r){for(let b of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])b.dispose();for(let b of r.palette)for(let T of Object.values(b))T.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let b of a)b.length=0;o.clear(),r=void 0}}return{setTracks:m,render:x,dispose:p,get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return f}}}function qd(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var Zc=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),Jc=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function ob([i,t,e,n],s,r,o,a){let c=Zc(i,t,e,n,s,r),l=Zc(i,t,e,n,o,a),u=Zc(s,r,o,a,i,t),f=Zc(s,r,o,a,e,n);return Math.abs(u)<1e-7&&Jc(s,o,i)&&Jc(r,a,t)||Math.abs(f)<1e-7&&Jc(s,o,e)&&Jc(r,a,n)?!0:c>0!=l>0&&u>0!=f>0}function Ju(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>qd(a,r,o)&&!c.some(l=>qd(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,f]of t){let h=u-c,d=f-l,g=h*h+d*d;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*h+(o-l)*d)/g)),m=r-c-x*h,p=o-l-x*d;a=Math.min(a,m*m+p*p)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>ob(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var Yd=new ze,$c=new V,mr=class extends io{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ie(t,3)),this.setAttribute("uv",new ie(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new $i(e,6,1);return this.setAttribute("instanceStart",new Fn(n,3,0)),this.setAttribute("instanceEnd",new Fn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new $i(e,6,1);return this.setAttribute("instanceColorStart",new Fn(n,3,0)),this.setAttribute("instanceColorEnd",new Fn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new jr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Yd.setFromBufferAttribute(e),this.boundingBox.union(Yd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$c.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($c)),$c.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($c));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new wt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};mn.line={uniforms:yo.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};var is=class extends ke{constructor(t){super({type:"LineMaterial",uniforms:yo.clone(mn.line.uniforms),vertexShader:mn.line.vertexShader,fragmentShader:mn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var $u=new ve,Zd=new V,Jd=new V,tn=new ve,en=new ve,gi=new ve,Ku=new V,ju=new xe,nn=new ro,$d=new V,Kc=new ze,jc=new Un,xi=new ve,yi,Ss;function Kd(i,t,e){return xi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),xi.multiplyScalar(1/xi.w),xi.x=Ss/e.width,xi.y=Ss/e.height,xi.applyMatrix4(i.projectionMatrixInverse),xi.multiplyScalar(1/xi.w),Math.abs(Math.max(xi.x,xi.y))}function ab(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){nn.start.fromBufferAttribute(s,a),nn.end.fromBufferAttribute(r,a),nn.applyMatrix4(e);let l=new V,u=new V;yi.distanceSqToSegment(nn.start,nn.end,u,l),u.distanceTo(l)<Ss*.5&&t.push({point:u,pointOnLine:l,distance:yi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function cb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),f=-t.near;yi.at(1,gi),gi.w=1,gi.applyMatrix4(t.matrixWorldInverse),gi.applyMatrix4(n),gi.multiplyScalar(1/gi.w),gi.x*=r.x/2,gi.y*=r.y/2,gi.z=0,Ku.copy(gi),ju.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,d=u;h<d;h++){if(tn.fromBufferAttribute(c,h),en.fromBufferAttribute(l,h),tn.w=1,en.w=1,tn.applyMatrix4(ju),en.applyMatrix4(ju),tn.z>f&&en.z>f)continue;if(tn.z>f){let T=tn.z-en.z,M=(tn.z-f)/T;tn.lerp(en,M)}else if(en.z>f){let T=en.z-tn.z,M=(en.z-f)/T;en.lerp(tn,M)}tn.applyMatrix4(n),en.applyMatrix4(n),tn.multiplyScalar(1/tn.w),en.multiplyScalar(1/en.w),tn.x*=r.x/2,tn.y*=r.y/2,en.x*=r.x/2,en.y*=r.y/2,nn.start.copy(tn),nn.start.z=0,nn.end.copy(en),nn.end.z=0;let x=nn.closestPointToPointParameter(Ku,!0);nn.at(x,$d);let m=Te.lerp(tn.z,en.z,x),p=m>=-1&&m<=1,b=Ku.distanceTo($d)<Ss*.5;if(p&&b){nn.start.fromBufferAttribute(c,h),nn.end.fromBufferAttribute(l,h),nn.start.applyMatrix4(o),nn.end.applyMatrix4(o);let T=new V,M=new V;yi.distanceSqToSegment(nn.start,nn.end,M,T),e.push({point:M,pointOnLine:T,distance:yi.origin.distanceTo(M),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var Qc=class extends fe{constructor(t=new mr,e=new is({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Zd.fromBufferAttribute(e,o),Jd.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Zd.distanceTo(Jd);let r=new $i(s,2,1);return t.setAttribute("instanceDistanceStart",new Fn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Fn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;yi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Ss=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),jc.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Ss*.5;else{let f=Math.max(s.near,jc.distanceToPoint(yi.origin));l=Kd(s,f,c.resolution)}if(jc.radius+=l,yi.intersectsSphere(jc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Kc.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Ss*.5;else{let f=Math.max(s.near,Kc.distanceToPoint(yi.origin));u=Kd(s,f,c.resolution)}Kc.expandByScalar(u),yi.intersectsBox(Kc)!==!1&&(n?ab(this,e):cb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport($u),this.material.uniforms.resolution.value.set($u.z,$u.w))}};var gr=class extends mr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var tl=class extends Qc{constructor(t=new gr,e=new is({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var jd="#ffce84",lb="#a8f5ff",Qu="#10242e";function el(i,t,e){return new is({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function nl(i,t,e,n){let s=new gr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new tl(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function Qd(i,t,e,n){let s=new me().setFromPoints(t.map(({x:o,y:a})=>new V(o,.5,a)));s.setIndex(Nn.triangulateShape(t.map(({x:o,y:a})=>new wt(o,a)),[]).flat());let r=new fe(s,e);r.renderOrder=n,i.add(r)}function tp(){let i=new Vi,t={side:_n,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new dn({...t,color:jd,opacity:.13}),n=new dn({...t,color:Qu,opacity:.95}),s=el(Qu,4.6,{opacity:.8}),r=el(jd,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=el(Qu,3.5,{...o,opacity:.65}),c=el(lb,1.7,{...o,opacity:.9});function l({origin:h,forward:d}){let g=(m,p=0)=>({x:h.x+d.x*m-d.y*p,y:h.y+d.y*m+d.x*p}),x=Array.from({length:28},(m,p)=>{let b=p/28*Math.PI*2;return g(10*Math.cos(b),10*Math.sin(b))});nl(i,[g(10),g(56)],[s,r],5),nl(i,[g(45,-7),g(56),g(45,7)],[s,r],5),Qd(i,x,n,7),nl(i,[...x,x[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let d=new Map;for(let g of h){let{points:x,kind:m,id:p,origin:b,forward:T}=g;if(x.length<3)continue;let M=m==="nominal";M&&Qd(i,x,e,0),nl(i,[...x,x[0]],M?[s,r]:[a,c],M?3:1),b&&T&&d.set(p,g)}for(let g of d.values())l(g)}function f(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:f}}var ub=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),hb=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),ep={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},Ms=Object.fromEntries(Object.entries({clear:["#318c9e","#77bec1","#e4f4ec","#fff0ac"],overcast:["#427e90","#78a8af","#b8cdd0","#ffe4b0"],night:["#193a55","#356675","#6f95ae","#dceef2"]}).map(([i,t])=>[i,t.map(e=>new Qt(e))])),fb=new Qt("#ffd49d"),{clamp:db,smoothstep:np}=Te,pb=`
  varying vec2 poolUv;
  varying vec3 surfacePoint;

  void main() {
    poolUv = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`,mb=`
  varying vec2 poolUv;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform vec2 waterSize;
  uniform float daylight;
  uniform float rain;
  uniform float cloudCover;
  uniform float bodyVisibility;
  uniform float moon;
  uniform vec2 moonLight;
  uniform vec2 bodyPosition;
  uniform vec3 deepWater;
  uniform vec3 shallowWater;
  uniform vec3 cloudColor;
  uniform vec3 bodyColor;

  float softEllipse(vec2 point, vec2 center, vec2 radius, float softness) {
    return 1.0 - smoothstep(1.0 - softness, 1.0, length((point - center) / radius));
  }

  float cloud(vec2 point, vec2 center, float scale) {
    vec2 p = (point - center) / scale;
    float bed = softEllipse(p, vec2(0.0, -1.1), vec2(17.5, 3.7), 0.55);
    float puff = softEllipse(p, vec2(-5.2, 0.9), vec2(8.0, 4.4), 0.57);
    float drift = softEllipse(p, vec2(6.7, 1.0), vec2(12.0, 4.5), 0.62);
    return max(bed, max(puff, drift));
  }

  float rainRing(vec2 point, vec2 center, float phase) {
    float radius = mix(0.65, 4.1, phase);
    return (1.0 - phase) * (1.0 - smoothstep(0.12, 0.66, abs(length(point - center) - radius)));
  }

  void main() {
    vec2 point = (poolUv - 0.5) * waterSize;
    vec2 edgeVector = (0.5 - abs(poolUv - 0.5)) * waterSize;
    float edge = min(edgeVector.x, edgeVector.y);
    float shallows = exp(-edge * 0.17);
    vec3 toCamera = normalize(cameraPosition - surfacePoint);
    float glancing = pow(1.0 - clamp(toCamera.y, 0.0, 1.0), 2.0);
    float waveA = sin(point.x * 0.27 + point.y * 0.51 - waterTime * 1.7);
    float waveB = sin(point.x * -0.43 + point.y * 0.23 + waterTime * 1.18);
    float waveC = sin(point.x * 0.09 + point.y * 0.96 + waterTime * 2.1);
    vec2 refraction = vec2(waveA * 1.4 + waveC * 0.32, waveB * 0.68);
    refraction *= 1.0 + rain * 0.68;
    // Keep the imagery in the plane, with a small shift as the view orbits.
    vec2 mirror = point + refraction + vec2(toCamera.x, -toCamera.z) * 2.6;

    float strand = 1.0 - smoothstep(0.035, 0.24, abs(waveA + waveB * 0.45));
    float lightOnFloor = strand * smoothstep(0.19, 0.92, waveC * 0.8 + waveB * 0.23);
    vec3 color = mix(deepWater, shallowWater, 0.15 + shallows * 0.67);
    color = mix(color, shallowWater, lightOnFloor * mix(0.1, 0.27, daylight));
    color = mix(color, cloudColor, glancing * 0.19);

    float breeze = sin(waterTime * 0.12) * 4.6;
    float leftCloud = cloud(mirror, vec2(-0.32 * waterSize.x + breeze, 0.14 * waterSize.y), 1.15);
    float rightCloud = cloud(mirror, vec2(0.27 * waterSize.x + breeze * 0.72, -0.18 * waterSize.y), 0.82);
    float bank = softEllipse(mirror, vec2(breeze, 0.10 * waterSize.y), waterSize * vec2(0.46, 0.34), 0.67);
    float cloudReflection = max(leftCloud, rightCloud * 0.82) * cloudCover;
    cloudReflection = max(cloudReflection, bank * max(0.0, cloudCover - 0.43));
    color = mix(color, cloudColor, cloudReflection * (0.62 + glancing * 0.15));

    vec2 bodyDistance = mirror - bodyPosition * waterSize;
    float bodyScale = clamp(waterSize.x / 146.0, 1.0, 1.48);
    vec2 bodyPoint = bodyDistance / (vec2(8.8, 5.3 + glancing * 2.5) * bodyScale);
    float limb = 1.0 - smoothstep(0.76, 1.0, length(bodyPoint));
    float sphere = sqrt(max(0.0, 1.0 - dot(bodyPoint, bodyPoint)));
    float terminator = bodyPoint.x * moonLight.x + sphere * moonLight.y;
    float moonLimb = limb * smoothstep(-0.1, 0.12, terminator);
    float body = mix(limb, moonLimb, moon);
    float glare = exp(-dot(bodyPoint, bodyPoint) * 0.46) * (0.22 + waveA * 0.07);
    float glint = exp(-abs(bodyDistance.x) * 0.24 - abs(bodyDistance.y) * 0.12);
    float glitter = pow(max(0.0, waveC), 5.0) * glint * 0.29;
    float reflectedLight = (body * 0.83 + glare + glitter) * bodyVisibility;
    color = mix(color, bodyColor, min(0.95, reflectedLight));

    if (rain > 0.0) {
      float ring = rainRing(point, waterSize * vec2(-0.29, -0.18), fract(waterTime * 0.69 + 0.1));
      ring += rainRing(point, waterSize * vec2(0.02, 0.19), fract(waterTime * 0.83 + 0.47));
      ring += rainRing(point, waterSize * vec2(0.32, -0.02), fract(waterTime * 0.71 + 0.78));
      color = mix(color, cloudColor, clamp(ring * rain * 0.33, 0.0, 0.55));
    }

    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;function ip({x:i,z:t,y:e,width:n,depth:s}){let r={waterTime:{value:0},waterSize:{value:new wt(n,s)},daylight:{value:1},rain:{value:0},cloudCover:{value:.18},bodyVisibility:{value:0},moon:{value:0},moonLight:{value:new wt(0,1)},bodyPosition:{value:new wt},deepWater:{value:Ms.clear[0].clone()},shallowWater:{value:Ms.clear[1].clone()},cloudColor:{value:Ms.clear[2].clone()},bodyColor:{value:Ms.clear[3].clone()}},o=new ke({uniforms:r,vertexShader:pb,fragmentShader:mb,toneMapped:!1}),a=new fe(new Yn(n,s),o);a.name="HOA pool water",a.rotation.x=-Math.PI/2,a.position.set(i,e,t);function c(l,u={}){let{night:f,daylightKnown:h,condition:d,moonPhase:g,sunElevation:x,sunRising:m}=u,p=ub.has(d),b=Number.isFinite(x)?x:f?-19:42,T=np(b,-8,17),M=Ms[p?"overcast":"clear"];for(let[O,U]of["deepWater","shallowWater","cloudColor","bodyColor"].entries())r[U].value.lerpColors(Ms.night[O],M[O],T);let S=Object.hasOwn(ep,g)?ep[g]:void 0,w=h?!f:d==="sunny",L=f&&S!==void 0,_=db(b/75,0,1),I=T*(1-np(b,8,34));if(w&&r.bodyColor.value.lerp(fb,I*.7),L&&r.bodyColor.value.copy(Ms.night[3]),r.waterTime.value=Number.isFinite(l)&&!u.reduceMotion?l:0,r.daylight.value=T,r.rain.value=hb.has(d)?1:0,r.cloudCover.value=p?.92:d==="partlycloudy"?.65:f?.33:.24,r.bodyVisibility.value=p?0:L?.93:w?.96:0,r.moon.value=L?1:0,L)r.moonLight.value.set(Math.sin(S),Math.cos(S)),r.bodyPosition.value.set(.06,.02);else{let O=m===!0?-.19:m===!1?.19:-.08;r.bodyPosition.value.set(O*(1-_),-.2+_*.33)}}return{mesh:a,update:c}}var sl=26,gb=92,il=4,xb=18,yb=172;function sp(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-xb,o=r-2*sl-gb;return{nearZ:r,farZ:o,parkMinZ:o-yb}}function rp(i,{nearZ:t,farZ:e},n,s,r){let o=e+sl,a=t-sl,c=(o+a)/2,l=r-s/2,u=r+s/2,f=(h,d,g,x)=>i.box(s,g,d-h,x,r,n+g/2,(h+d)/2);f(o,a,1.2,"#73767c"),f(o,o+3.4,1.4,"#656b71"),f(a-3.4,a,1.4,"#656b71");for(let[h,d,g,x]of[[e,o,o-il,e],[a,t,a,a+il]]){f(h,d,5,"#c0b6a7"),f(g,g+il,6.2,"#d0c3b0");let m=sl-il;for(let p=l+36;p<u;p+=72)i.box(1.15,.18,m,"#a69c91",p,n+5.04,x+m/2)}for(let h=l+36;h+17<u;h+=72)i.box(34,.2,2.8,"#e9ce91",h,n+1.24,c)}function th(i,t,e,n,s){let r=new V(...t),o=new V(...e),a=o.clone().sub(r),c=r.clone().lerp(o,.5),l=new Pe(n,a.length(),n);l.applyQuaternion(new xn().setFromUnitVectors(new V(0,1,0),a.normalize())),i.add(l,s,c.x,c.y,c.z)}function _b(i,{x:t,z:e,width:n,depth:s,y:r},o){let a=n+60,c=s+24,l=a/2,u=c/2,f="#c8bda9";for(let b of[-1,1])i.box(a,2.4,12,f,t,o+1.2,e+b*(s/2+6)),i.box(30,2.4,s,f,t+b*(n/2+15),o+1.2,e),i.box(n+8,2.2,4,"#eadcc5",t,r+.2,e+b*(s/2+2)),i.box(4,2.2,s,"#eadcc5",t+b*(n/2+2),r+.2,e);i.box(n,.65,s,"#67b6b6",t,r-.6,e);let h="#799486",d=(b,T)=>i.box(2.8,11,2.8,"#718779",b,o+5.5,T);for(let b of[-1,1]){let T=t+b*l;i.box(1.9,1.6,c,h,T,o+8.5,e);for(let M=0;M<=4;M++)d(T,e-u+c*M/4)}i.box(a,1.6,1.9,h,t,o+8.5,e-u);for(let b=1;b<8;b++)d(t-l+a*b/8,e-u);let g=25;for(let b of[-1,1]){let T=l-g/2;i.box(T,1.6,1.9,h,t+b*(l+g/2)/2,o+8.5,e+u);for(let M=0;M<4;M++)d(t+b*(g/2+T*M/4),e+u)}let x="#c5917e";for(let b of[-12,4]){let T=t+n/2+15;i.box(16,1.8,6.4,"#9b8d78",T,o+3.25,e+b),i.box(14,.8,5.2,"#e1c59a",T,o+4.5,e+b),i.box(5.2,.65,5.1,x,T+3.8,o+5.2,e+b)}let m=t-n/2-16;i.box(1.3,9,1.3,"#b49371",m,o+6,e+3);let p=new Hr(10,4.4,9);i.add(p,"#d4a17f",m,o+12,e+3),i.ball(1.8,1.3,1.8,"#edc6a3",m,o+14.4,e+3)}function vb(i,t,e,n){let s="#ba927a";i.box(142,1.55,61,"#a89b80",t,n+.78,e),i.box(135,.65,54,s,t,n+1.82,e);let a="#ac795f",c=t-28,l=e-2;for(let S of[-1,1]){let w=c+S*26;for(let L of[-1,1])th(i,[w,n+2,l+L*12],[w,n+20,l],2.7,a)}i.box(56,2.5,2.5,a,c,n+20,l);for(let S of[-12,12]){for(let w of[-1,1]){let L=c+S+w*3.6;th(i,[L,n+7,l+2],[L,n+20,l],.9,"#cfc1a4")}i.box(10,1.35,5.2,"#749385",c+S,n+7,l+2)}let u=t+32,f=e-13,h=n+15;for(let S of[-6,6]){for(let w of[-6,6])i.box(2.2,15,2.2,"#9b8772",u+S,n+8,f+w);th(i,[u+S*.75,n+2.6,f-13],[u+S*.75,h,f-5.8],1.8,"#8c806d")}for(let S=1;S<4;S++)i.box(9,1.2,2.2,"#ac9779",u,n+2.6+3.1*S,f-13+1.8*S);i.box(13,1.8,13,"#aa9272",u,h,f);let d=f+5.8,g=f+27,x=h-n-4,m=Math.atan2(x,g-d),p=Math.hypot(x,g-d),b=new Pe(9,1.65,p);b.rotateX(m);let T=h-x/2,M=(d+g)/2;i.add(b,"#d3ae6e",u,T,M);for(let S of[-1,1]){let w=new Pe(1.5,2.4,p);w.rotateX(m),i.add(w,"#c59b5e",u+S*4.6,T+.8,M)}}var bb=[["#78926d","#859974","#819470"],["#899683","#8f9c83","#95a089"],["#9ea499","#a5a99a","#aeb0a0"],["#b5b7a4","#bfc0ab","#cac9b2"]];function eh(i,t,e,n,s,r,o,a){let c=[1,.76,.53,.28],l=[0,.26,.56,.8],u=15,f=c.map((x,m)=>Array.from({length:u},(p,b)=>{let T=(b/u+m*.024)*2*Math.PI,M=1+.075*Math.cos(T*3+a)+.035*Math.sin(T*7),S=l[m];return[Math.cos(T)*x*s*M+a*S,.2+o*S+(m===0?0:Math.cos(T*4)*2.7),Math.sin(T)*x*r*M-S*4]})),h=[a,o,-4],d=new Map;function g(x,m,p,b){d.has(x)||d.set(x,[]),d.get(x).push(...m,...p,...b)}for(let[x,m]of f.entries()){let p=f[x+1];for(let b=0;b<u;b++){let T=(b+1)%u,M=bb[x],S=M[(b+x*2)%M.length];g(S,m[b],p?p[b]:h,m[T]),p&&g(M[(b+1)%M.length],m[T],p[b],p[T])}}for(let[x,m]of d){let p=new me;p.setAttribute("position",new ie(m,3)),p.computeVertexNormals(),i.add(p,x,t,n,e)}return{x:t+h[0],y:n+h[1],z:e+h[2]}}function Sb(i,t,e,n,s){i.box(2.5,13,2.5,"#93816b",e,t+6.5,n),i.ball(s,s*.81,s*.77,"#79916c",e,t+12,n),i.ball(s*.71,s*.69,s*.74,"#96a57a",e-s*.27,t+16,n+2)}function op(i,{farZ:t},e,{minX:n,maxX:s}){let r=(n+s)/2,o=Math.min(206,Math.max(162,(s-n)*.166)),a={x:r-o,z:t-46,width:216,depth:54,y:e+3.1};_b(i,a,e);let c=r+o;vb(i,c,t-42,e),i.box(19,.85,9,"#c4b699",a.x,e+.45,t-3.5),i.box(13,.85,12,"#c4b699",c,e+.45,t-5),i.box(2*o,.65,8,"#c7ba9d",r,e+.35,t-91),eh(i,r-123,t-120,e,78,30,48,-11),eh(i,r+125,t-120,e,76,28,45,12);let l=eh(i,r-6,t-123,e,125,40,74,16);for(let[u,f,h]of[[-265,-110,11],[-221,-93,12],[-104,-86,10],[88,-84,10],[212,-100,12],[257,-120,11]])Sb(i,e,r+u,t+f,h);return{pool:a,mountainPeak:l}}var al=Math.PI/180,sh=14,xp=56,Mb=21,ei=-111,ni=-108,yp=14,Eb=28,Co=28,ap={minX:0,maxX:1536,minZ:0,maxZ:1024},nh={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},ih={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},wb=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),Tb=new Set(["snowy","snowy-rainy","hail"]),cp={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function ll(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function cl(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function _p(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function vp(i,t,e,n){let s=i.some(o=>cl(o,e-t.dz*23,n+t.dx*23));return i.some(o=>cl(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function Ab(i,t,e){if(!Object.hasOwn(cp,e.type))return null;let n=_p(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):vp(i,s,r,o),l=(sh/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(cp[e.type],xp-8)}}function lp(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function up(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function Rb(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function hp(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function rl(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function bp(i){return Object.hasOwn(ih,i.finish)?ih[i.finish]:ih.graphite}function Sp(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function fp(i,t,e){let[n,s]=Sp(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=Te.clamp(s/i.item.h+.5,0,1);return ni-ni*r}function ol(i,t,e){return cl(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?Te.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=sh/2})}function Cb(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(f=>ol(f,n,s)),o=t.some(f=>To(f)&&ol(f,n,s)&&ol(f,i.x1,i.y1)&&ol(f,i.x2,i.y2)),a=r?0:ei,c=a;if(!o)for(let f of e){let h=fp(f,i.x1,i.y1),d=fp(f,i.x2,i.y2);if(h!==null&&d!==null){a=h,c=d;break}}let[,l,u]=bp(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/Eb)))}}function rh(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(S=>S?.points?.length>=3&&S.points.every(w=>Number.isFinite(w?.x)&&Number.isFinite(w?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(S=>!To(S)):e,s=i.walls.map(lp).filter(Boolean),r=s.filter(S=>S.kind!=="fence"),o=i.items.filter(S=>typeof S?.id=="string"&&typeof S.type=="string"&&[S.x,S.y,S.w,S.h].every(Number.isFinite)&&S.w>0&&S.h>0),a=hp(),c=hp(),l=(S,w)=>rl(a,S,w);for(let S of e)for(let w of S.points)l(w.x,w.y);for(let S of s)l(S.x1,S.y1),l(S.x2,S.y2);for(let S of n)for(let w of S.points)rl(c,w.x,w.y);for(let S of r)rl(c,S.x1,S.y1),rl(c,S.x2,S.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:ap},f=new Map(r.map(S=>[S.id,S])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(S=>f.has(S))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,f.get("w1").y1+57],[f.get("w2").x1,f.get("w1").y1+57],[f.get("w3").x1,f.get("w3").y1],[f.get("w3").x2,f.get("w3").y2],[u.minX-10,f.get("w4").y2]].map(([S,w])=>({x:S,y:w})),southDeck:[[u.minX-10,f.get("w6").y1],[f.get("w7").x1,f.get("w7").y1],[f.get("w7").x2,f.get("w7").y2],[f.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([S,w])=>({x:S,y:w})),recess:{x1:f.get("w12").x2,x2:f.get("w18").x1,z1:Math.min(f.get("w11").y2,f.get("w12").y2),z2:f.get("w13").y2}}:null,d=r.filter(S=>h?!(S.id==="w3"&&up(S,[400,408,342,468]))&&!(S.id==="w7"&&up(S,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:S,x2:w,z1:L}=h.recess;if(w>S){let _=[[S,f.get("w12").y2,S,L],[S,L,w,L]];for(let[I,O]of _.entries()){if(d.some(W=>Rb(W,O)))continue;let[U,z,q,k]=O,X=lp({id:`reference-recess-${I}`,x1:U,y1:z,x2:q,y2:k});X&&d.push(X)}}}let g=new Map;for(let S of o.filter(w=>w.type==="window")){let w=_p(d,S.x,S.y,(S.rotation||0)*al);if(!w||w.distance>27)continue;let{wall:L,t:_,centerX:I,centerZ:O}=w,U=Math.max(1,_-S.w/2+1),z=Math.min(L.length-1,_+S.w/2-1);if(z-U<14)continue;L.openings.push({start:U,end:z});let q=vp(n,L,I,O),k=L.angle+(q<0?Math.PI:0),X=(U+z)/2;g.set(S.id,{x:L.x1+X*L.dx,z:L.y1+X*L.dz,angle:k,window:{...S,w:z-U+2,rotation:k/al}})}let x=o.filter(S=>S.type==="garageDoor"),m=o.map(S=>{let w=S.type==="cameraThumbnail"&&x.some(X=>Vb(S,X))?ei:wp(S.type),L=S.type==="controlZone"&&(S.visualKind==="window"||S.entityId?.startsWith("cover.")),_=g.get(S.id)??Ab(n,d,S);if(L){let X=52;for(let W of g.values()){let $=Math.hypot(W.x-S.x,W.z-S.y);$<X&&(_=W,X=$)}}let I=_?.x??S.x,O=_?.z??S.y,U=_?.angle??(Number.isFinite(S.rotation)?S.rotation*al:0),z=S.type==="stairs"?1536:300,q=Math.min(z,(Math.abs(Math.cos(U))*S.w+Math.abs(Math.sin(U))*S.h)/2),k=Math.min(z,(Math.abs(Math.sin(U))*S.w+Math.abs(Math.cos(U))*S.h)/2);return l(I-q,O-k),l(I+q,O+k),{item:S,x:I,z:O,baseY:w,angle:U,window:_?.window,mountY:_?.mountY,isBlind:L}});for(let S of d)S.openings.sort((w,L)=>w.start-L.start||w.end-L.end);let p=m.filter(({item:S})=>S.type==="stairs").map(S=>{let{item:w,x:L,z:_,angle:I}=S,O=Number.isInteger(w.steps)&&w.steps>=2&&w.steps<=40?w.steps:yp,U=Math.min(46,Math.max(12,w.w*.47)),z=-w.h/2-U;for(let q of[-w.w/2,w.w/2])l(L+q*Math.cos(I)-z*Math.sin(I),_+q*Math.sin(I)+z*Math.cos(I));return{...S,steps:O,apronDepth:U}}),b=s.filter(S=>S.kind==="fence").map(S=>Cb(S,e,p)),T=Ud(e,h,t),M=Od(d.map(S=>({...S,palette:bp(S)})),sh,xp,Mb);return Number.isFinite(a.minX)||Object.assign(a,ap),{rooms:e,walls:d,fences:b,stairs:p,placements:m,bounds:a,houseBounds:u,reference:h,floorStructure:T,wallStructure:M,editableStructure:t}}function dp(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function oh([i,...t]){let e=dp(new Tn,i);return e.holes=t.map(n=>dp(new fs,n)),e}function Ib(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=ll(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let f=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,f,256,32),s.globalAlpha=.48,s.fillRect(0,f,256,1.2);let h=30+u*47%181;s.fillRect(h,f,1,32),s.globalAlpha=.15;for(let d=0;d<15;d++){let g=c()*256,x=f+3+c()*27,m=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+m/2,x+c()*2-1,g+m,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let f=0;f<8;f++)s.globalAlpha=c()*.14,s.fillRect(f*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(f*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new Qs(n);return l.colorSpace=Oe,l.wrapS=l.wrapT=us,l}function Mp(i){let t=new Map,e=new xe,n=new xn,s=new V,r=new V(0,1,0),o=new V(1,1,1),a=new Map,c=d=>(a.has(d)||a.set(d,new nr({color:d})),a.get(d));function l(d,g,x,m,p,b=0){n.setFromAxisAngle(r,b),e.compose(s.set(x,m,p),n,o),d.applyMatrix4(e);let T=c(g);t.has(T)||t.set(T,[]),t.get(T).push(d)}function u(d,g,x,m,p,b,T,M=0){d>0&&g>0&&x>0&&l(new Pe(d,g,x),m,p,b,T,M)}function f(d,g,x,m,p,b,T){let M=new An(1,9,6);M.scale(d,g,x),l(M,m,p,b,T)}function h(){for(let[d,g]of t){let x=ns(g);if(!x){for(let m of g)i.add(new fe(m,d));continue}i.add(new fe(x,d));for(let m of g)m.dispose()}t.clear()}return{add:l,ball:f,box:u,material:c,finish:h}}function Pb(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(nh,r)?r:"oak";if(!s.has(a)){let c=nh[a],l=Ib(n,c,141+Object.keys(nh).indexOf(a)*977);s.set(a,new nr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new Wi(oh(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),f=l.getAttribute("uv");for(let d=0;d<f.count;d++)f.setXY(d,u.getX(d)/248,u.getZ(d)/248);let h=new fe(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)pp(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)pp(t,r,ei-1,-22,"#a18e84",!0)}function Lb(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new Be(e,1))}return i}function pp(i,t,e,n,s,r=!1){let o=new wi(oh(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(Lb(o),s,0,e,0)}function Db(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,f=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,f,t,f,0)}let r=new me;return r.setAttribute("position",new ie(e,3)),r.setAttribute("uv",new ie(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function mp(i,t){let e=new Wi(oh(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function Nb(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(mp(o,!1),r,0,s,0);for(let o of e.bottom)i.add(mp(o,!0),r,0,n,0);e.sides.length&&i.add(Db(e.sides,s-n),r,0,n,0)}}function Ub(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:f,posts:h,color:d,postColor:g}=n,x=l-c,m=new Pe(Math.hypot(u,x),5,7);m.rotateZ(Math.atan2(x,u)),i.add(m,d,(s+o)/2,(c+l)/2+Co,(r+a)/2,-f);for(let p=0;p<=h;p++){let b=p/h,T=Te.lerp(s,o,b),M=Te.lerp(r,a,b),S=Te.lerp(c,l,b),w=[T,S,M].map(L=>Math.round(L*1e3)).join(",");e.has(w)||(e.add(w),i.box(5,Co,5,g,T,S+Co/2,M,-f))}}}function Ep(i,t,e,n,s=0,r=0){let o=e/n,a=-ni/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let f=r-e/2+o*u,h=u===n-1?0:ni+(u+1)*a,d=h-3;i.box(t,d-ei,o,"#a98075",s,(ei+d)/2,f+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,f+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,d+3.35/2,f+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,d+3.4/2,f+l/2)}}function Fb({item:i,steps:t,apronDepth:e}){let n=new de,s=Mp(n);Ep(s,i.w,i.h,t);let r=ni-ei;return s.box(i.w,r,e,"#c8b79e",0,ei+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:ni/2}}function Ob(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=yp,u=r-s,f=u/l,h=ni,d=-h/l;Ep(i,a,u,l,c,(s+r)/2);for(let M=0;M<l;M++){let S=s+f*(M+.5),w=h+(M+1)*d;i.box(5,24,5,"#9f8183",e+4,w+12,S)}let g=f*(l-1),x=d*(l-1),m=new Pe(7,5,Math.hypot(g,x)+5);m.rotateX(-Math.atan2(x,g)),i.add(m,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[p,b]=o,T=Math.max(2,Math.ceil((b.x-p.x)/28));i.box(b.x-p.x,5,7,"#896e79",(b.x+p.x)/2,28,p.y);for(let M=0;M<=T;M++)i.box(5,28,5,"#9f8183",p.x+(b.x-p.x)*M/T,14,p.y)}function Bb(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=ll(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let f=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);f.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),f.addColorStop(1,"#b1c3a000"),e.fillStyle=f,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new Qs(t);return s.wrapS=s.wrapT=us,s.repeat.set(15,10),s.colorSpace=Oe,s.anisotropy=4,s}function zb(i,t){let{minX:e,maxX:n,minZ:s,maxZ:r}=t.houseBounds,o=n-e,a=r-s,c=ll(150741);if(!t.editableStructure){let u=Math.min(90,o*.18),f=t.reference?t.reference.left+u/2:e+u/2;i.box(u,4,115,"#c7baa4",f,-109,s-88);for(let h=0;h<5;h++)i.box(u*.85,1.8,13,"#dbceba",f,-106,s-137+h*20)}let l=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[u,f]of l){let h=e+u*o,d=s+f*a,g=21+c()*24;i.ball(g*.94,9,g*.67,"#6d886a",h,-104,d),i.ball(g*.82,g*.57,g*.69,"#819b76",h+3,-98,d);for(let x=0;x<8;x++){let m=x*2.39996,p=(.2+c()*.5)*g,b=g*(.28+c()*.2),T=["#94ad7f","#a6ba88","#8da878","#bad09c"][x%4];i.ball(b*1.15,b*.8,b,T,h+Math.cos(m)*p,-93+12*c(),d+Math.sin(m)*p*.75)}for(let x=0;x<5;x++){let m=x%2?"#e6c4b1":"#fae6a4",p=h+(c()-.5)*g*1.14,b=d+g*(.62+c()*.43);i.ball(2.3,4.6,2.3,"#819765",p,-106,b),i.ball(3.9,1.8,3.3,m,p,-101.5,b),i.ball(1.2,.9,1.2,"#cb9c57",p,-100.3,b)}}}function kb(i,t,e){let n=ll(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(m,p)=>!(o&&m>=o.x1&&m<=o.x2&&p>=o.z1&&p<=o.z2)&&!t.rooms.some(b=>(!t.editableStructure||!To(b))&&cl(b,m,p)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let m=0;m<210;m++){let p=s.minX-70+(s.maxX-s.minX+140)*n(),b=c+l*n(),T=n()*180,M=8+n()*8,S=112+n()*34;a(p,b)&&r.push({x:p,z:b,phase:T,length:M,speed:S})}let u=new Float32Array(r.length*6),f=new Float32Array(r.length*3),h=new me,d=new me;h.setAttribute("position",new Be(u,3).setUsage(Lc)),d.setAttribute("position",new Be(f,3).setUsage(Lc));let g=new Or(h,new Ks({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),x=new Br(d,new js({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8}));return g.frustumCulled=x.frustumCulled=!1,i.add(g,x),(m,p)=>{if(g.visible=wb.has(p),g.material.opacity=p==="pouring"||p==="lightning-rainy"?.5:.34,x.visible=Tb.has(p),g.visible||x.visible){for(let[b,T]of r.entries()){let M=65-(T.phase+m*T.speed)%170,S=65-(T.phase+m*20)%170,w=b*6;u.set([T.x,M,T.z,T.x-T.length*.18,M+T.length,T.z+2],w),f.set([T.x+Math.sin(m+b)*6,S,T.z],b*3)}h.attributes.position.needsUpdate=g.visible,d.attributes.position.needsUpdate=x.visible}}}function wp(i){return i==="garageDoor"?ei:0}function Vb(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*al,r=Math.cos(s),o=Math.sin(s);return Md(t,e*r+n*o,-e*o+n*r)}function Hb(i,t,e){if(t.item.type!=="plant")return 0;for(let n of i.placements){if(!["table","coffeeTable","sideTable"].includes(n.item.type))continue;let s=t.x-n.x,r=t.z-n.z,o=s*Math.cos(n.angle)+r*Math.sin(n.angle),a=-s*Math.sin(n.angle)+r*Math.cos(n.angle);if(Math.abs(o)<n.item.w*.35&&Math.abs(a)<n.item.h*.35){let c=e.get(n.item.id);return c?c.root.position.y+(c.anchorY??0)*c.root.scale.y:0}}return 0}function Gb(i,t,e,n){let s=new V,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let f of l){s.set(...f).project(t);let h=(s.x+1)*e/2,d=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,d-r),u.bottom=Math.max(u.bottom,d+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:f,y2:h,base1:d,base2:g})=>o([[l,d,u],[l,d+Co,u],[f,g,h],[f,g+Co,h]])),c=i.stairs.map(({x:l,z:u,angle:f,item:h,apronDepth:d})=>{let g=Math.cos(f),x=Math.sin(f),m=[];for(let p of[-h.w/2,h.w/2])for(let[b,T]of[[-h.h/2-d,ni],[h.h/2,0]])m.push([l+p*g-b*x,T,u+p*x+b*g]);return o(m)});return[...a,...c]}function Wb({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([f,h])=>[i+f*r-h*o,t+f*o+h*r].map(d=>Math.round(d*1e5)/1e5))]}function Xb(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=Sp(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return ni;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return ni+-ni/s.steps*l}return null}}function Tp(i,t){let e=rh(t),n=new Oc({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});n.resetState();let s=new Vi;s.background=new Qt("#d7dfcd");let r=new Zi(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:c,maxZ:l}=e.bounds,u=new Rn({color:"#e8e8d2",map:Bb(i.ownerDocument),roughness:.95}),f=new fe(new Yn(6200,4200),u);f.rotation.x=-Math.PI/2,f.position.set((o+a)/2,ei,(c+l)/2),s.add(f);let h=Mp(s),d=sp(e);rp(h,d,ei,f.geometry.parameters.width,f.position.x);let{pool:g,mountainPeak:x}=op(h,d,ei,e.houseBounds);zb(h,e),Ob(h,e),Pb(s,h,e,i.ownerDocument),Nb(h,e),Ub(h,e.fences),h.finish();let m=s.children.filter(Tt=>Tt.isMesh),p=kd(n,s,e.bounds);p.markStructure();let b=ip(g);s.add(b.mesh);let T={},M=kb(s,e,d.parkMinZ),S=e.floorStructure.footprint,w=Ju(S),L=e.stairs.length?Ju(gp.default.union(S,...e.stairs.map(Wb))):w,_=Xb(e,w),I=new Vi,O=tp(),U=new ps("#fff5e1","#c9bfd7",1.8),z=new Ji("#fff1d8",1.65);z.position.set(-4,9,6),I.add(U,z);let q=Xd(I,_,{supportsRoute:L.supportsRoute,floorClearance:L.clearance}),k=new Map,X=new Map,W=new Map,$=new Map(e.stairs.map(Tt=>[Tt.item.id,Tt]));for(let Tt of e.placements){let{item:B,x:zt,z:Pt,baseY:N,angle:E,window:j,mountY:et,isBlind:lt}=Tt,F=B.type==="window"&&j?j:B,y=$.get(B.id),v=y?Fb(y):Ed(F,{window:lt?j:void 0,mountY:et})??yd(F);if(v){let A=Wd(B,v.root);v.root.position.set(zt,N+A,Pt),v.root.rotation.y=-E,v.floorRadius&&(v.dockFits=w.clearance(zt,Pt)>=v.floorRadius),s.add(v.root),X.set(B.id,v),B.type==="garageDoor"&&W.set(v.root,B.id),p.register(B,v)}k.set(B.id,{x:zt,z:Pt,baseY:N,object:v})}let ft={...e.bounds,sceneryMinZ:d.parkMinZ,sceneryPeak:x};for(let Tt of e.placements){let B=X.get(Tt.item.id);if(B&&(B.root.position.y+=Hb(e,Tt,X),B.root.scale.y!==1)){let{max:zt}=new ze().setFromObject(B.root);Number.isFinite(zt.y)&&(ft.maxY=Math.max(ft.maxY??92,zt.y))}}let rt=[...X.values()].filter(Tt=>Tt.ambientMotion),it=new V,ot=!1,vt=0,Rt=0,Zt=Pi(),Yt=new so,$t=new En(new V(0,1,0),0),at=new V,dt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function Ct(Tt,B){if(ot||Tt<1||B<1||Tt===vt&&B===Rt)return;vt=Tt,Rt=B;let zt=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(zt,1.5,Math.sqrt(27e5/(Tt*B)))),n.setSize(Tt,B,!1),Zt=Zu(r,ft,Tt,B,Zt)}function Ut(Tt){return Zt=Pi(Tt),!ot&&vt>0&&Rt>0&&(Zt=Zu(r,ft,vt,Rt,Zt)),_t()}function _t(){return{...Zt}}function pt(Tt,B){return ot||!Number.isFinite(Tt)||!Number.isFinite(B)||vt<=0||Rt<=0?!1:(Yt.setFromCamera(new wt(Tt/vt*2-1,1-B/Rt*2),r),!0)}function Ft(Tt,B,zt){return pt(Tt,B)?($t.constant=-wp(zt),Yt.ray.intersectPlane($t,at)?{x:at.x,y:at.z}:null):null}function ht(Tt,B){if(!W.size||!pt(Tt,B))return null;let zt=[];for(let N of W.keys())N.traverseVisible(E=>{E.isMesh&&zt.push(E)});let Pt=Yt.intersectObjects(zt,!1)[0];if(!Pt||Yt.intersectObjects(m,!1).some(N=>N.distance<Pt.distance-.01))return null;for(let N=Pt.object;N;N=N.parent)if(W.has(N))return W.get(N);return null}function yt(){n.render(s,r);let Tt=O.scene.children.length>0;if(!(!q.hasVisibleTracks&&!Tt)){n.autoClear=!1;try{n.clearDepth(),Tt&&n.render(O.scene,r),q.hasVisibleTracks&&n.render(I,r)}finally{n.autoClear=!0}}}function bt(Tt=0,B={},zt={},{animateTelemetry:Pt=!0,showTelemetryPosition:N=!0,draftPositions:E}={}){if(ot||vt<1||Rt<1)return;p.update(zt,B,u);let j=zt.reduceMotion===!0,et=!j&&Number.isFinite(Tt)?Tt:0,lt=Pt?et:0;M(lt,zt.condition),T=zt,b.update(et,T);for(let[F,y]of X){let v=B[F]??dt,A=v.position;A&&Number.isFinite(A.x)&&Number.isFinite(A.y)&&(!y.floorRadius||w.clearance(A.x,A.y)>=y.floorRadius)&&(y.telemetryPosition=A);let P=E?.[F]?.position??(N?y.telemetryPosition:null),D=k.get(F);y.root.position.x=P?.x??D.x,y.root.position.z=P?.y??D.z,y.floorRadius&&(y.root.visible=!!(P||!N||y.dockFits)),y.animate?.(v,y.ambientMotion?et:lt)}q.render(Tt,j),yt()}function St(Tt,B,zt){ot||q.setTracks(Tt,B,zt)}function At(Tt){if(!(ot||vt<1||Rt<1)){b.update(Tt,T);for(let B of rt)B.animate(dt,Tt);q.render(Tt),yt()}}function Gt(Tt){let B=k.get(Tt);if(!B||vt<1||Rt<1)return null;let{x:zt,z:Pt,baseY:N,object:E}=B;if(E){if(!E.root.visible)return null;it.set(E.anchorOffset?.x||0,E.anchorY||0,E.anchorOffset?.z||0),E.root.localToWorld(it)}else it.set(zt,N+6,Pt);return it.project(r),{x:(it.x+1)/2,y:(1-it.y)/2}}function Wt(){if(ot)return;ot=!0,q.dispose(),O.dispose();let Tt=new Set,B=new Set,zt=new Set;s.traverse(Pt=>{Pt.geometry&&Tt.add(Pt.geometry);for(let N of Array.isArray(Pt.material)?Pt.material:[Pt.material])if(N){B.add(N);for(let E of Object.values(N))E?.isTexture&&zt.add(E)}});for(let Pt of zt)Pt.dispose();for(let Pt of Tt)Pt.dispose();for(let Pt of B)Pt.dispose();p.dispose(),n.dispose()}return{resize:Ct,render:bt,anchor:Gt,setView:Ut,getView:_t,projectToPlan:Ft,pickGarage:ht,exteriorClearance:()=>Gb(e,r,vt,Rt),dispose:Wt,hasAmbientMotion:!0,renderAmbient:At,setPeople:St,setDetectionZones:O.setZones,canPlacePerson:(Tt,B)=>Number.isFinite(_(Tt,B))&&L.clearance(Tt,B)>0,get hasPeopleMotion(){return q.hasMotion}}}var Ap=.35,ul=7.5,qb=8;function Rp(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let m=t();return m?.preset==="free"?m:null},o=()=>{let[m,p]=s.values();return Math.hypot(m.x-p.x,m.y-p.y)};function a(m,p){let b=Pi({...m,...p});(b.azimuth!==m.azimuth||b.tilt!==m.tilt||b.zoom!==m.zoom)&&e(b)}function c(m){i.hasPointerCapture(m)&&i.releasePointerCapture(m)}function l(){for(let m of[...s.keys()])s.delete(m),c(m)}function u(m){if(!r()||m.defaultPrevented||m.button!==0||!n(m))return;let p=m.pointerType==="touch";if(!(s.size>=2||s.size&&(!p||!s.values().next().value.touch))){try{i.setPointerCapture(m.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(m.pointerId,{x:m.clientX,y:m.clientY,touch:p}),m.preventDefault()}}function f(m){let p=s.get(m.pointerId);if(!p)return;let b=r();if(!b){l();return}let T=s.size===2,M=T?o():0,S={x:m.clientX,y:m.clientY,touch:p.touch};if(s.set(m.pointerId,S),m.preventDefault(),T){let w=o();Math.min(M,w)>=qb&&a(b,{zoom:b.zoom*w/M});return}a(b,{azimuth:b.azimuth-(S.x-p.x)*Ap,tilt:b.tilt+(S.y-p.y)*Ap})}function h(m){s.delete(m.pointerId)&&c(m.pointerId)}function d(m){let p=r();if(!p||!Number.isFinite(m.deltaY)||!m.deltaY)return;let b=m.deltaMode===1?16:m.deltaMode===2?i.clientHeight:1,T=Math.max(-350,Math.min(350,m.deltaY*b));m.preventDefault(),m.stopPropagation(),a(p,{zoom:p.zoom*Math.exp(-T*.002)})}function g(m){let p=r();if(!p||m.altKey||m.ctrlKey||m.metaKey||m.defaultPrevented)return;let b;switch(m.key){case"ArrowLeft":b={azimuth:p.azimuth-ul};break;case"ArrowRight":b={azimuth:p.azimuth+ul};break;case"ArrowUp":b={tilt:p.tilt-ul};break;case"ArrowDown":b={tilt:p.tilt+ul};break;case"+":case"=":b={zoom:p.zoom*1.1};break;case"-":b={zoom:p.zoom/1.1};break;default:return}m.preventDefault(),m.stopPropagation(),a(p,b)}let x=[["pointerdown",u],["pointermove",f],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",d,{passive:!1}],["keydown",g]];for(let[m,p,b]of x)i.addEventListener(m,p,b);return{cancel:l,dispose(){l();for(let[m,p,b]of x)i.removeEventListener(m,p,b)}}}function Cp(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],f=u.length>0,h=f?5:3,d,g,x=1/0;for(let p=0;p<=h&&(f||!d);p++)for(let[b,T]of p===0?s.slice(0,1):s.slice(1)){let M=o(a.x+b*p*34,c/2,t-c/2),S=o(a.y+T*p*34,l/2,e-l/2);if(n.some(_=>Math.abs(M-_.x)<(c+_.w)/2+2&&Math.abs(S-_.y)<(l+_.h)/2+2))continue;if(p<=3&&!d&&(d={...a,x:M,y:S,w:c,h:l}),!f)break;if(u.some(_=>M+c/2>_.left&&M-c/2<_.right&&S+l/2>_.top&&S-l/2<_.bottom))continue;let L=Math.hypot(M-a.x,S-a.y);L<x&&(g={...a,x:M,y:S,w:c,h:l},x=L)}let m=g??d;m&&n.push(m)}return n}var Dp=hl(kc(),1),Ip="roomcraft-presence-v1",Pp=4500,Np=/^sensor\.[a-z0-9_]+$/,Yb=4,ah=1536,ch=1024,Zb=[[[0,0],[ah,0],[ah,ch],[0,ch],[0,0]]],Lp=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],Jb=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...Lp.map(([i,t])=>[t,i]),...Lp.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function Up(i,t){return i>=0&&i<=ah&&t>=0&&t<=ch}function Fp(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function $b(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function Op(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!Fp(s))continue;let[r,o,a,c,l,u]=s,f=Jb.get(n.presenceTrackProfile),h=Math.hypot(o,l),d=Up(a,u)?{origin:{x:a,y:u},forward:{x:o/h,y:l/h}}:{},g=t.length;for(let[x,m]of[["configured",$b(n.presenceTrackZone)],["nominal",f?.ring]]){if(!m)continue;let p=m.map(([b,T])=>[r*b+o*T+a,c*b+l*T+u]);for(let[b]of Dp.default.intersection([p],Zb))t.push({id:n.id,kind:x,points:b.slice(0,-1).map(([T,M])=>({x:T,y:M})),...d,...x==="nominal"?{rangeMeters:f.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function Kb(i={},t=[]){let e={};for(let n of new Set(t)){if(!Np.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==Ip)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,Yb):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:Ip,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function Bp(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!Np.test(o||"")||s.has(o)||!Fp(a))continue;s.add(o);let c=Kb(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=Pp)continue;let[f,h,d,g,x,m]=a;for(let p of u){let b=f*p.x+h*p.y+d,T=g*p.x+x*p.y+m;Up(b,T)&&n.push({id:o+":"+p.id,x:b,y:T,expiresAt:l+Pp})}}return n}var jb=22,Qb=5,tS=1e3/12,eS=1e3,nS=12;function iS(i,t,e){let n=Cp(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let f=a/2;f<=e-a/2;f+=a+4)c.push({...r,x:u,y:f,w:o,h:a});c.sort((u,f)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(f.x-r.x,f.y-r.y));let l=c.find(u=>n.every(f=>Math.abs(u.x-f.x)>=(u.w+f.w)/2+2||Math.abs(u.y-f.y)>=(u.h+f.h)/2+2));l&&n.push(l)}return n}function sS(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function rS(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),f=u<=jb;return!f&&(a.type==="garageDoor"||!sS(a,e))?[]:[{item:a,index:c,distance:u,near:f,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function oS(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Vd(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),f=i.getElementById("sceneDefaultStatus"),h=Gd(t),d=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=i.createElement("label");x.className="scene-dashboard-look",x.hidden=!0,x.title="Lighting and device appearance from the last dashboard import";let m=i.createElement("input");m.type="checkbox",m.checked=!0,x.append(m," Dashboard look"),a?.append(x);let p=i.createElement("div");p.className="scene-selection",p.setAttribute("aria-hidden","true"),Object.assign(p.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(p);let b=i.createElement("div");b.className="scene-placeholders",Object.assign(b.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(b);let T=i.createElementNS("http://www.w3.org/2000/svg","svg");T.classList.add("scene-placeholder-leaders"),T.setAttribute("aria-hidden","true"),Object.assign(T.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(T,b);let M=new Map,S=i.getElementById("miniHelp"),w=S?.textContent,L=n.getAttribute("aria-label")??"Editable three-dimensional home view",_,I,O,U=Yu(null),z=r.value,q="default",k,X,W,$=-1/0,ft=0,rt=!1,it=!1,ot=null,vt=!1,Rt=[],Zt=[],Yt="",$t=0,at,dt=!1,Ct={},Ut={key:"",scene:null,reduceMotion:!1},_t={id:null,scene:null},pt=()=>z!=="plan",Ft=()=>z==="free",ht=()=>n.getBoundingClientRect(),yt=Mt=>{let Xt=ht();return{x:Mt.clientX-Xt.left,y:Mt.clientY-Xt.top}};function bt(Mt){e.showStatus?.(Mt)}function St(){if(!(!rt&&(_?.hasAmbientMotion||_?.hasPeopleMotion)&&pt()&&!i.hidden&&!d?.matches)){t.cancelAnimationFrame(W),W=void 0;return}W===void 0&&(W=t.requestAnimationFrame(Xt=>{if(W=void 0,Xt-$>=tS-1){$=Xt,ft=Xt/1e3;try{_.renderAmbient(ft)}catch{lt()}}St()}))}function At(Mt=!0){let Xt=pt()?_:null,te=d?.matches===!0,ne=Gt()?Bp(Rt,Ct):[],Le=JSON.stringify(ne);Le===Ut.key&&Xt===Ut.scene&&te===Ut.reduceMotion||(Ut={key:Le,scene:Xt,reduceMotion:te},Xt&&(Xt.setPeople(ne,(t.performance?.now()??0)/1e3,{reduceMotion:te}),Mt&&B()),e.setPersonPreview?.(Xt?[]:ne))}function Gt(){return!!(g?.request&&Zt.length&&!rt&&!i.hidden)}async function Wt(Mt=!0){if(Mt&&At(),dt||!Gt())return;dt=!0;let Xt=$t;try{let te=await g.request("TRACK_GET",Zt);Xt===$t&&Gt()&&(Ct=te&&typeof te=="object"?te:{},At())}catch{Xt===$t&&(Ct={},At())}finally{dt=!1}}function Jt(){Gt()?at===void 0&&(at=t.setInterval(Wt,eS),Wt(!1)):at!==void 0&&(t.clearInterval(at),at=void 0,$t++,Ct={})}function Tt(Mt){Rt=Mt.filter(ne=>ne.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ne.presenceTrackEntityId)&&Array.isArray(ne.presenceTrackTransform));let Xt=[...new Set(Rt.map(ne=>ne.presenceTrackEntityId))].slice(0,nS),te=Xt.join(",");te!==Yt&&(Yt=te,Zt=Xt,$t++,Ct={}),Jt()}function B(Mt){if(St(),!_||!pt())return;let{width:Xt,height:te}=ht();if(!Xt||!te)return;_.resize(Xt,te);let ne=e.getSelection(),Le=ne?.kind==="item"?ne.id:null;if(_t.scene!==_||_t.id!==Le){let je=I.items.find(gn=>gn.id===Le);_.setDetectionZones(je?Op([je]):[]),_t={id:Le,scene:_}}let bn=e.getPreview?.();x.hidden=!bn?.environment;let zn=!x.hidden&&m.checked,Pn=Object.create(null);if(zn)for(let je of I.items){let gn=bn.states?.[je.id];gn&&gn.entityId===je.entityId&&(Pn[je.id]=gn)}let ss=zn?bn.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(_.render(ft,Pn,{...ss,reduceMotion:d?.matches===!0},{animateTelemetry:!1,showTelemetryPosition:zn,draftPositions:Mt}),Ft())return;let Ke=[];for(let[je,gn]of M){let kn=_.anchor(je);gn.hidden=!kn,kn&&Ke.push({id:je,marker:gn,x:kn.x*Xt,y:kn.y*te,w:96,h:44})}let xr=iS(Ke,Xt,te),Io=new Set(xr.map(je=>je.id)),Po=[];for(let je of xr){let{marker:gn,x:kn,y:R,w:Z,h:ct,id:st}=je;Object.assign(gn.style,{left:`${kn}px`,top:`${R}px`,width:`${Z}px`,height:`${ct}px`});let nt=Ke.find(Lt=>Lt.id===st);if(Math.hypot(nt.x-kn,nt.y-R)>8){let Lt=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[Ot,Nt]of Object.entries({x1:nt.x,y1:nt.y,x2:kn,y2:R}))Lt.setAttribute(Ot,Nt);Lt.setAttribute("stroke","#6f816b"),Lt.setAttribute("stroke-width","1"),Lt.setAttribute("stroke-dasharray","3 3"),Po.push(Lt)}}for(let[je,gn]of M)gn.hidden=!Io.has(je);T.replaceChildren(...Po);let Es=ne?.kind==="item"?_.anchor(ne.id):null;p.style.display=Es?"block":"none",Es&&(p.style.left=`${Es.x*Xt}px`,p.style.top=`${Es.y*te}px`)}function zt(){if(!k)return;let Mt=k;k=void 0;try{n.releasePointerCapture(Mt.pointerId)}catch{}Mt.item&&B({[Mt.item.id]:{position:{x:Mt.item.x,y:Mt.item.y}}})}function Pt(){a&&(a.hidden=!pt());for(let Mt of Object.values(o))Mt&&(Mt.disabled=!pt());l&&(l.hidden=!_||!Ft(),l.disabled=vt),u&&(u.hidden=!_||!pt()||!ot,u.disabled=vt)}function N(Mt){f&&(f.textContent=Mt)}function E(){it=!0,N("")}function j(){n.tabIndex=Ft()?0:-1,n.style.cursor=Ft()?"grab":"",n.setAttribute("aria-label",Ft()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":L)}function et(Mt,{initial:Xt=!1}={}){Xt||(E(),Mt==="default"&&(it=!1)),G.cancel(),zt();let te=_?.getView()??U,ne=Object.hasOwn(pr,Mt)?Mt:"plan";ne!=="plan"&&e.useSelectTool?.(),z=ne,pt()&&!Ft()&&(q=z),r.value=z,n.hidden=!pt(),j();let Le=pt()&&!Ft();if(b.style.display=Le?"block":"none",T.style.display=Le?"block":"none",Le||(p.style.display="none"),S&&(Ft()?S.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":S.textContent=pt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":w),s.classList.toggle("scene-3d",pt()),Pt(),!pt()){F(),St(),x.hidden=!0,bt("Plan view \xB7 edit rooms, walls, floors and objects");return}let bn=z==="default"?Yu(ot):Ft()?Hd(te):{preset:z};U=_?_.setView(bn):bn,F(),_&&bt(Ft()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function lt(){G.cancel(),_?.dispose(),_=void 0,O=void 0,z="plan",St(),r.value=z,n.hidden=!0,x.hidden=!0,j(),b.style.display="none",T.style.display="none",S&&(S.textContent=w),s.classList.remove("scene-3d"),p.style.display="none",Pt(),At(!1),bt("3D view is unavailable on this screen. Plan view is ready.")}function F(){if(rt)return;let Mt=e.getProject();if(Tt(Mt.items),!pt()){At();return}let Xt=JSON.stringify(Mt);try{if(!_||Xt!==O){zt(),_&&(U=_.getView()),_?.dispose(),_=void 0,I=Mt,_=Tp(n,I),_.setView(U),O=Xt,M.clear(),b.replaceChildren();for(let te of I.items.filter(ne=>ne.type==="cameraThumbnail"||ne.type.startsWith("ui"))){let ne=i.createElement("button");ne.type="button",ne.className="scene-placeholder",ne.textContent=te.name||(te.type==="cameraThumbnail"?"Camera":"Interface"),ne.setAttribute("aria-label",`Select ${ne.textContent}`),Object.assign(ne.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ne.addEventListener("pointerdown",Le=>H(Le,te.id)),ne.addEventListener("click",Le=>{!Ft()&&Le.detail===0&&(e.selectItem(te.id),B())}),M.set(te.id,ne),b.append(ne)}}Pt(),At(!1),B()}catch{lt()}}function y(Mt){!_||!pt()||(E(),zt(),_.setView(Mt(_.getView())),U=_.getView(),B())}let v=()=>F(),A=()=>{let Mt=e.getTool();pt()&&Mt!=="select"?et("plan"):Ft()&&e.hasPlacement()?et(q):pt()&&B()},P=()=>et(r.value),D=()=>{t.cancelAnimationFrame(X),X=t.requestAnimationFrame(()=>B())},G=Rp(n,{getView:()=>Ft()?_?.getView():null,onChange:Mt=>{!_||!Ft()||(E(),U=_.setView(Mt),D())}}),H=(Mt,Xt=null)=>{if(!pt()||Ft()||!_||Mt.button!==0||k)return;Mt.preventDefault(),Mt.stopPropagation();let te=yt(Mt);if(e.hasPlacement()){let Ke=_.projectToPlan(te.x,te.y,e.getPlacementType());Ke&&e.placeAt(Ke.x,Ke.y),F();return}let{width:ne,height:Le}=ht(),bn=new Map(I.items.map(Ke=>[Ke.id,_.anchor(Ke.id)])),zn=Xt??_.pickGarage(te.x,te.y),Pn=zn?I.items.find(Ke=>Ke.id===zn):rS(I.items,te,_.projectToPlan(te.x,te.y),bn,ne,Le);if(e.selectItem(Pn?.id??null),!Pn){B();return}let ss=_.projectToPlan(te.x,te.y,Pn.type);ss&&(k={item:{...Pn},startScreen:te,startPlan:ss,pointerId:Mt.pointerId},n.setPointerCapture(Mt.pointerId),B())},tt=Mt=>{if(!pt()||Ft()||(Mt.stopPropagation(),!k||k.pointerId!==Mt.pointerId||!_))return;let Xt=yt(Mt);if(!k.moved&&Math.hypot(Xt.x-k.startScreen.x,Xt.y-k.startScreen.y)<Qb)return;let te=_.projectToPlan(Xt.x,Xt.y,k.item.type);te&&(k.moved=!0,k.position={x:k.item.x+te.x-k.startPlan.x,y:k.item.y+te.y-k.startPlan.y},B({[k.item.id]:{position:k.position}}))},Q=Mt=>{if(!pt()||Ft()||(Mt.stopPropagation(),!k||k.pointerId!==Mt.pointerId))return;let Xt=k;k=void 0;try{n.releasePointerCapture(Mt.pointerId)}catch{}Xt.moved&&Xt.position?(e.moveItem(Xt.item.id,Xt.position.x,Xt.position.y),F()):B()},xt=Mt=>{Ft()||(k?.pointerId===Mt.pointerId&&zt(),Mt.stopPropagation())},C=Mt=>{!pt()||Ft()||(Mt.preventDefault(),Mt.stopPropagation(),y(Xt=>({...Xt,zoom:Xt.zoom*(Mt.deltaY<0?1.1:1/1.1)})))},K=Mt=>{Ft()&&Mt.target===n&&(Mt.key==="Delete"||Mt.key==="Backspace")&&(Mt.preventDefault(),Mt.stopImmediatePropagation()),Mt.key==="Escape"&&k&&(Mt.preventDefault(),Mt.stopImmediatePropagation(),zt())},Y=Mt=>{Mt.preventDefault(),lt()},mt=()=>y(Mt=>({...Mt,azimuth:Mt.azimuth-15})),gt=()=>y(Mt=>({...Mt,azimuth:Mt.azimuth+15})),ut=()=>y(Mt=>({...Mt,zoom:Mt.zoom/1.2})),Et=()=>y(Mt=>({...Mt,zoom:Mt.zoom*1.2})),It=()=>et("top"),se=()=>B(),Kt=()=>{At(!1),B()},ge=()=>{Jt(),At(),St()};i.addEventListener("visibilitychange",ge),d?.addEventListener("change",Kt);async function be(){vt=!0,Pt();try{ot=await h.read(),!rt&&!it&&et("default",{initial:!0})}catch{rt||N("Saved view unavailable")}finally{vt=!1,rt||Pt()}}async function Je(Mt){if(!(!_||!pt()||vt)){vt=!0,N("Saving view\u2026"),Pt();try{if(await h.write(Mt),rt)return;ot=Mt,Mt||et("default"),N(Mt?"Default view saved":"Top down is the default")}catch{rt||N("Could not save default view")}finally{vt=!1,rt||Pt()}}}let De=()=>{Ft()&&_&&Je(_.getView())},$e=()=>Je(null);o.left?.addEventListener("click",mt),o.right?.addEventListener("click",gt),o.out?.addEventListener("click",ut),o.in?.addEventListener("click",Et),c?.addEventListener("click",It),l?.addEventListener("click",De),u?.addEventListener("click",$e),m.addEventListener("change",se),r.addEventListener("change",P),n.addEventListener("pointerdown",H),n.addEventListener("pointermove",tt),n.addEventListener("pointerup",Q),n.addEventListener("pointercancel",xt),n.addEventListener("lostpointercapture",xt),n.addEventListener("wheel",C,{passive:!1}),n.addEventListener("webglcontextlost",Y),t.addEventListener("keydown",K,!0),t.addEventListener("roomcraft-editor-change",v),t.addEventListener("roomcraft-editor-tool",A);let We=new t.ResizeObserver(D);return We.observe(s),et(z,{initial:!0}),be(),{getView:()=>_?.getView()??{...U},setView:et,dispose(){rt=!0,St(),Jt(),i.removeEventListener("visibilitychange",ge),d?.removeEventListener("change",Kt),zt(),G.dispose(),z="plan",j(),We.disconnect(),t.cancelAnimationFrame(X),_?.dispose(),_=void 0,p.remove(),b.remove(),T.remove(),x.remove(),m.removeEventListener("change",se),S&&(S.textContent=w),o.left?.removeEventListener("click",mt),o.right?.removeEventListener("click",gt),o.out?.removeEventListener("click",ut),o.in?.removeEventListener("click",Et),c?.removeEventListener("click",It),l?.removeEventListener("click",De),u?.removeEventListener("click",$e),r.removeEventListener("change",P),n.removeEventListener("pointerdown",H),n.removeEventListener("pointermove",tt),n.removeEventListener("pointerup",Q),n.removeEventListener("pointercancel",xt),n.removeEventListener("lostpointercapture",xt),n.removeEventListener("wheel",C),n.removeEventListener("webglcontextlost",Y),t.removeEventListener("keydown",K,!0),t.removeEventListener("roomcraft-editor-change",v),t.removeEventListener("roomcraft-editor-tool",A)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=rh,oS(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
