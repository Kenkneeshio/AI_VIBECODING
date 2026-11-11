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
"use strict";(()=>{var kg=Object.create;var of=Object.defineProperty;var zg=Object.getOwnPropertyDescriptor;var Hg=Object.getOwnPropertyNames;var Vg=Object.getPrototypeOf,Gg=Object.prototype.hasOwnProperty;var Wg=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Xg=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hg(t))!Gg.call(i,s)&&s!==e&&of(i,s,{get:()=>t[s],enumerable:!(n=zg(t,s))||n.enumerable});return i};var Gl=(i,t,e)=>(e=i!=null?kg(Vg(i)):{},Xg(t||!i||!i.__esModule?of(e,"default",{value:i,enumerable:!0}):e,i));var fl=Wg((xh,yh)=>{(function(i,t){typeof xh=="object"&&typeof yh<"u"?yh.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(xh,(function(){"use strict";/**
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
    ***************************************************************************** */function i(H,b){var M={label:0,sent:function(){if(N[0]&1)throw N[1];return N[1]},trys:[],ops:[]},R,D,N,V;return V={next:Y(0),throw:Y(1),return:Y(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function Y(W){return function(ot){return rt([W,ot])}}function rt(W){if(R)throw new TypeError("Generator is already executing.");for(;M;)try{if(R=1,D&&(N=W[0]&2?D.return:W[0]?D.throw||((N=D.return)&&N.call(D),0):D.next)&&!(N=N.call(D,W[1])).done)return N;switch(D=0,N&&(W=[W[0]&2,N.value]),W[0]){case 0:case 1:N=W;break;case 4:return M.label++,{value:W[1],done:!1};case 5:M.label++,D=W[1],W=[0];continue;case 7:W=M.ops.pop(),M.trys.pop();continue;default:if(N=M.trys,!(N=N.length>0&&N[N.length-1])&&(W[0]===6||W[0]===2)){M=0;continue}if(W[0]===3&&(!N||W[1]>N[0]&&W[1]<N[3])){M.label=W[1];break}if(W[0]===6&&M.label<N[1]){M.label=N[1],N=W;break}if(N&&M.label<N[2]){M.label=N[2],M.ops.push(W);break}N[2]&&M.ops.pop(),M.trys.pop();continue}W=b.call(H,M)}catch(ot){W=[6,ot],D=0}finally{R=N=0}if(W[0]&5)throw W[1];return{value:W[0]?W[1]:void 0,done:!0}}}var t=(function(){function H(b,M){this.next=null,this.key=b,this.data=M,this.left=null,this.right=null}return H})();function e(H,b){return H>b?1:H<b?-1:0}function n(H,b,M){for(var R=new t(null,null),D=R,N=R;;){var V=M(H,b.key);if(V<0){if(b.left===null)break;if(M(H,b.left.key)<0){var Y=b.left;if(b.left=Y.right,Y.right=b,b=Y,b.left===null)break}N.left=b,N=b,b=b.left}else if(V>0){if(b.right===null)break;if(M(H,b.right.key)>0){var Y=b.right;if(b.right=Y.left,Y.left=b,b=Y,b.right===null)break}D.right=b,D=b,b=b.right}else break}return D.right=b.left,N.left=b.right,b.left=R.right,b.right=R.left,b}function s(H,b,M,R){var D=new t(H,b);if(M===null)return D.left=D.right=null,D;M=n(H,M,R);var N=R(H,M.key);return N<0?(D.left=M.left,D.right=M,M.left=null):N>=0&&(D.right=M.right,D.left=M,M.right=null),D}function r(H,b,M){var R=null,D=null;if(b){b=n(H,b,M);var N=M(b.key,H);N===0?(R=b.left,D=b.right):N<0?(D=b.right,b.right=null,R=b):(R=b.left,b.left=null,D=b)}return{left:R,right:D}}function o(H,b,M){return b===null?H:(H===null||(b=n(H.key,b,M),b.left=H),b)}function a(H,b,M,R,D){if(H){R(""+b+(M?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+D(H)+`
`);var N=b+(M?"    ":"\u2502   ");H.left&&a(H.left,N,!1,R,D),H.right&&a(H.right,N,!0,R,D)}}var c=(function(){function H(b){b===void 0&&(b=e),this._root=null,this._size=0,this._comparator=b}return H.prototype.insert=function(b,M){return this._size++,this._root=s(b,M,this._root,this._comparator)},H.prototype.add=function(b,M){var R=new t(b,M);this._root===null&&(R.left=R.right=null,this._size++,this._root=R);var D=this._comparator,N=n(b,this._root,D),V=D(b,N.key);return V===0?this._root=N:(V<0?(R.left=N.left,R.right=N,N.left=null):V>0&&(R.right=N.right,R.left=N,N.right=null),this._size++,this._root=R),this._root},H.prototype.remove=function(b){this._root=this._remove(b,this._root,this._comparator)},H.prototype._remove=function(b,M,R){var D;if(M===null)return null;M=n(b,M,R);var N=R(b,M.key);return N===0?(M.left===null?D=M.right:(D=n(b,M.left,R),D.right=M.right),this._size--,D):M},H.prototype.pop=function(){var b=this._root;if(b){for(;b.left;)b=b.left;return this._root=n(b.key,this._root,this._comparator),this._root=this._remove(b.key,this._root,this._comparator),{key:b.key,data:b.data}}return null},H.prototype.findStatic=function(b){for(var M=this._root,R=this._comparator;M;){var D=R(b,M.key);if(D===0)return M;D<0?M=M.left:M=M.right}return null},H.prototype.find=function(b){return this._root&&(this._root=n(b,this._root,this._comparator),this._comparator(b,this._root.key)!==0)?null:this._root},H.prototype.contains=function(b){for(var M=this._root,R=this._comparator;M;){var D=R(b,M.key);if(D===0)return!0;D<0?M=M.left:M=M.right}return!1},H.prototype.forEach=function(b,M){for(var R=this._root,D=[],N=!1;!N;)R!==null?(D.push(R),R=R.left):D.length!==0?(R=D.pop(),b.call(M,R),R=R.right):N=!0;return this},H.prototype.range=function(b,M,R,D){for(var N=[],V=this._comparator,Y=this._root,rt;N.length!==0||Y;)if(Y)N.push(Y),Y=Y.left;else{if(Y=N.pop(),rt=V(Y.key,M),rt>0)break;if(V(Y.key,b)>=0&&R.call(D,Y))return this;Y=Y.right}return this},H.prototype.keys=function(){var b=[];return this.forEach(function(M){var R=M.key;return b.push(R)}),b},H.prototype.values=function(){var b=[];return this.forEach(function(M){var R=M.data;return b.push(R)}),b},H.prototype.min=function(){return this._root?this.minNode(this._root).key:null},H.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},H.prototype.minNode=function(b){if(b===void 0&&(b=this._root),b)for(;b.left;)b=b.left;return b},H.prototype.maxNode=function(b){if(b===void 0&&(b=this._root),b)for(;b.right;)b=b.right;return b},H.prototype.at=function(b){for(var M=this._root,R=!1,D=0,N=[];!R;)if(M)N.push(M),M=M.left;else if(N.length>0){if(M=N.pop(),D===b)return M;D++,M=M.right}else R=!0;return null},H.prototype.next=function(b){var M=this._root,R=null;if(b.right){for(R=b.right;R.left;)R=R.left;return R}for(var D=this._comparator;M;){var N=D(b.key,M.key);if(N===0)break;N<0?(R=M,M=M.left):M=M.right}return R},H.prototype.prev=function(b){var M=this._root,R=null;if(b.left!==null){for(R=b.left;R.right;)R=R.right;return R}for(var D=this._comparator;M;){var N=D(b.key,M.key);if(N===0)break;N<0?M=M.left:(R=M,M=M.right)}return R},H.prototype.clear=function(){return this._root=null,this._size=0,this},H.prototype.toList=function(){return d(this._root)},H.prototype.load=function(b,M,R){M===void 0&&(M=[]),R===void 0&&(R=!1);var D=b.length,N=this._comparator;if(R&&g(b,M,0,D-1,N),this._root===null)this._root=l(b,M,0,D),this._size=D;else{var V=f(this.toList(),u(b,M),N);D=this._size+D,this._root=h({head:V},0,D)}return this},H.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(H.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(H.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),H.prototype.toString=function(b){b===void 0&&(b=function(R){return String(R.key)});var M=[];return a(this._root,"",!0,function(R){return M.push(R)},b),M.join("")},H.prototype.update=function(b,M,R){var D=this._comparator,N=r(b,this._root,D),V=N.left,Y=N.right;D(b,M)<0?Y=s(M,R,Y,D):V=s(M,R,V,D),this._root=o(V,Y,D)},H.prototype.split=function(b){return r(b,this._root,this._comparator)},H.prototype[Symbol.iterator]=function(){var b,M,R;return i(this,function(D){switch(D.label){case 0:b=this._root,M=[],R=!1,D.label=1;case 1:return R?[3,6]:b===null?[3,2]:(M.push(b),b=b.left,[3,5]);case 2:return M.length===0?[3,4]:(b=M.pop(),[4,b]);case 3:return D.sent(),b=b.right,[3,5];case 4:R=!0,D.label=5;case 5:return[3,1];case 6:return[2]}})},H})();function l(H,b,M,R){var D=R-M;if(D>0){var N=M+Math.floor(D/2),V=H[N],Y=b[N],rt=new t(V,Y);return rt.left=l(H,b,M,N),rt.right=l(H,b,N+1,R),rt}return null}function u(H,b){for(var M=new t(null,null),R=M,D=0;D<H.length;D++)R=R.next=new t(H[D],b[D]);return R.next=null,M.next}function d(H){for(var b=H,M=[],R=!1,D=new t(null,null),N=D;!R;)b?(M.push(b),b=b.left):M.length>0?(b=N=N.next=M.pop(),b=b.right):R=!0;return N.next=null,D.next}function h(H,b,M){var R=M-b;if(R>0){var D=b+Math.floor(R/2),N=h(H,b,D),V=H.head;return V.left=N,H.head=H.head.next,V.right=h(H,D+1,M),V}return null}function f(H,b,M){for(var R=new t(null,null),D=R,N=H,V=b;N!==null&&V!==null;)M(N.key,V.key)<0?(D.next=N,N=N.next):(D.next=V,V=V.next),D=D.next;return N!==null?D.next=N:V!==null&&(D.next=V),R.next}function g(H,b,M,R,D){if(!(M>=R)){for(var N=H[M+R>>1],V=M-1,Y=R+1;;){do V++;while(D(H[V],N)<0);do Y--;while(D(H[Y],N)>0);if(V>=Y)break;var rt=H[V];H[V]=H[Y],H[Y]=rt,rt=b[V],b[V]=b[Y],b[Y]=rt}g(H,b,M,Y,D),g(H,b,Y+1,R,D)}}let x=(H,b)=>H.ll.x<=b.x&&b.x<=H.ur.x&&H.ll.y<=b.y&&b.y<=H.ur.y,p=(H,b)=>{if(b.ur.x<H.ll.x||H.ur.x<b.ll.x||b.ur.y<H.ll.y||H.ur.y<b.ll.y)return null;let M=H.ll.x<b.ll.x?b.ll.x:H.ll.x,R=H.ur.x<b.ur.x?H.ur.x:b.ur.x,D=H.ll.y<b.ll.y?b.ll.y:H.ll.y,N=H.ur.y<b.ur.y?H.ur.y:b.ur.y;return{ll:{x:M,y:D},ur:{x:R,y:N}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let y=m*m,E=(H,b)=>{if(-m<H&&H<m&&-m<b&&b<m)return 0;let M=H-b;return M*M<y*H*b?0:H<b?-1:1};class _{constructor(){this.reset()}reset(){this.xRounder=new v,this.yRounder=new v}round(b,M){return{x:this.xRounder.round(b),y:this.yRounder.round(M)}}}class v{constructor(){this.tree=new c,this.round(0)}round(b){let M=this.tree.add(b),R=this.tree.prev(M);if(R!==null&&E(M.key,R.key)===0)return this.tree.remove(b),R.key;let D=this.tree.next(M);return D!==null&&E(M.key,D.key)===0?(this.tree.remove(b),D.key):b}}let w=new _,A=11102230246251565e-32,S=134217729,P=(3+8*A)*A;function U(H,b,M,R,D){let N,V,Y,rt,W=b[0],ot=R[0],C=0,K=0;ot>W==ot>-W?(N=W,W=b[++C]):(N=ot,ot=R[++K]);let Z=0;if(C<H&&K<M)for(ot>W==ot>-W?(V=W+N,Y=N-(V-W),W=b[++C]):(V=ot+N,Y=N-(V-ot),ot=R[++K]),N=V,Y!==0&&(D[Z++]=Y);C<H&&K<M;)ot>W==ot>-W?(V=N+W,rt=V-N,Y=N-(V-rt)+(W-rt),W=b[++C]):(V=N+ot,rt=V-N,Y=N-(V-rt)+(ot-rt),ot=R[++K]),N=V,Y!==0&&(D[Z++]=Y);for(;C<H;)V=N+W,rt=V-N,Y=N-(V-rt)+(W-rt),W=b[++C],N=V,Y!==0&&(D[Z++]=Y);for(;K<M;)V=N+ot,rt=V-N,Y=N-(V-rt)+(ot-rt),ot=R[++K],N=V,Y!==0&&(D[Z++]=Y);return(N!==0||Z===0)&&(D[Z++]=N),Z}function L(H,b){let M=b[0];for(let R=1;R<H;R++)M+=b[R];return M}function O(H){return new Float64Array(H)}let F=(3+16*A)*A,z=(2+12*A)*A,q=(9+64*A)*A*A,k=O(4),J=O(8),lt=O(12),tt=O(16),it=O(4);function at(H,b,M,R,D,N,V){let Y,rt,W,ot,C,K,Z,mt,bt,gt,It,Dt,ee,Ht,ge,ye,Se,Be,De=H-D,Ge=M-D,Pt=b-N,Xt=R-N;Ht=De*Xt,K=S*De,Z=K-(K-De),mt=De-Z,K=S*Xt,bt=K-(K-Xt),gt=Xt-bt,ge=mt*gt-(Ht-Z*bt-mt*bt-Z*gt),ye=Pt*Ge,K=S*Pt,Z=K-(K-Pt),mt=Pt-Z,K=S*Ge,bt=K-(K-Ge),gt=Ge-bt,Se=mt*gt-(ye-Z*bt-mt*bt-Z*gt),It=ge-Se,C=ge-It,k[0]=ge-(It+C)+(C-Se),Dt=Ht+It,C=Dt-Ht,ee=Ht-(Dt-C)+(It-C),It=ee-ye,C=ee-It,k[1]=ee-(It+C)+(C-ye),Be=Dt+It,C=Be-Dt,k[2]=Dt-(Be-C)+(It-C),k[3]=Be;let te=L(4,k),ie=z*V;if(te>=ie||-te>=ie||(C=H-De,Y=H-(De+C)+(C-D),C=M-Ge,W=M-(Ge+C)+(C-D),C=b-Pt,rt=b-(Pt+C)+(C-N),C=R-Xt,ot=R-(Xt+C)+(C-N),Y===0&&rt===0&&W===0&&ot===0)||(ie=q*V+P*Math.abs(te),te+=De*ot+Xt*Y-(Pt*W+Ge*rt),te>=ie||-te>=ie))return te;Ht=Y*Xt,K=S*Y,Z=K-(K-Y),mt=Y-Z,K=S*Xt,bt=K-(K-Xt),gt=Xt-bt,ge=mt*gt-(Ht-Z*bt-mt*bt-Z*gt),ye=rt*Ge,K=S*rt,Z=K-(K-rt),mt=rt-Z,K=S*Ge,bt=K-(K-Ge),gt=Ge-bt,Se=mt*gt-(ye-Z*bt-mt*bt-Z*gt),It=ge-Se,C=ge-It,it[0]=ge-(It+C)+(C-Se),Dt=Ht+It,C=Dt-Ht,ee=Ht-(Dt-C)+(It-C),It=ee-ye,C=ee-It,it[1]=ee-(It+C)+(C-ye),Be=Dt+It,C=Be-Dt,it[2]=Dt-(Be-C)+(It-C),it[3]=Be;let Ce=U(4,k,4,it,J);Ht=De*ot,K=S*De,Z=K-(K-De),mt=De-Z,K=S*ot,bt=K-(K-ot),gt=ot-bt,ge=mt*gt-(Ht-Z*bt-mt*bt-Z*gt),ye=Pt*W,K=S*Pt,Z=K-(K-Pt),mt=Pt-Z,K=S*W,bt=K-(K-W),gt=W-bt,Se=mt*gt-(ye-Z*bt-mt*bt-Z*gt),It=ge-Se,C=ge-It,it[0]=ge-(It+C)+(C-Se),Dt=Ht+It,C=Dt-Ht,ee=Ht-(Dt-C)+(It-C),It=ee-ye,C=ee-It,it[1]=ee-(It+C)+(C-ye),Be=Dt+It,C=Be-Dt,it[2]=Dt-(Be-C)+(It-C),it[3]=Be;let Vn=U(Ce,J,4,it,lt);Ht=Y*ot,K=S*Y,Z=K-(K-Y),mt=Y-Z,K=S*ot,bt=K-(K-ot),gt=ot-bt,ge=mt*gt-(Ht-Z*bt-mt*bt-Z*gt),ye=rt*W,K=S*rt,Z=K-(K-rt),mt=rt-Z,K=S*W,bt=K-(K-W),gt=W-bt,Se=mt*gt-(ye-Z*bt-mt*bt-Z*gt),It=ge-Se,C=ge-It,it[0]=ge-(It+C)+(C-Se),Dt=Ht+It,C=Dt-Ht,ee=Ht-(Dt-C)+(It-C),It=ee-ye,C=ee-It,it[1]=ee-(It+C)+(C-ye),Be=Dt+It,C=Be-Dt,it[2]=Dt-(Be-C)+(It-C),it[3]=Be;let hi=U(Vn,lt,4,it,tt);return tt[hi-1]}function Ct(H,b,M,R,D,N){let V=(b-N)*(M-D),Y=(H-D)*(R-N),rt=V-Y,W=Math.abs(V+Y);return Math.abs(rt)>=F*W?rt:-at(H,b,M,R,D,N,W)}let Lt=(H,b)=>H.x*b.y-H.y*b.x,Et=(H,b)=>H.x*b.x+H.y*b.y,Tt=(H,b,M)=>{let R=Ct(H.x,H.y,b.x,b.y,M.x,M.y);return R>0?-1:R<0?1:0},$=H=>Math.sqrt(Et(H,H)),X=(H,b,M)=>{let R={x:b.x-H.x,y:b.y-H.y},D={x:M.x-H.x,y:M.y-H.y};return Lt(D,R)/$(D)/$(R)},Q=(H,b,M)=>{let R={x:b.x-H.x,y:b.y-H.y},D={x:M.x-H.x,y:M.y-H.y};return Et(D,R)/$(D)/$(R)},ct=(H,b,M)=>b.y===0?null:{x:H.x+b.x/b.y*(M-H.y),y:M},xt=(H,b,M)=>b.x===0?null:{x:M,y:H.y+b.y/b.x*(M-H.x)},_t=(H,b,M,R)=>{if(b.x===0)return xt(M,R,H.x);if(R.x===0)return xt(H,b,M.x);if(b.y===0)return ct(M,R,H.y);if(R.y===0)return ct(H,b,M.y);let D=Lt(b,R);if(D==0)return null;let N={x:M.x-H.x,y:M.y-H.y},V=Lt(N,b)/D,Y=Lt(N,R)/D,rt=H.x+Y*b.x,W=M.x+V*R.x,ot=H.y+Y*b.y,C=M.y+V*R.y,K=(rt+W)/2,Z=(ot+C)/2;return{x:K,y:Z}};class vt{static compare(b,M){let R=vt.comparePoints(b.point,M.point);return R!==0?R:(b.point!==M.point&&b.link(M),b.isLeft!==M.isLeft?b.isLeft?1:-1:dt.compare(b.segment,M.segment))}static comparePoints(b,M){return b.x<M.x?-1:b.x>M.x?1:b.y<M.y?-1:b.y>M.y?1:0}constructor(b,M){b.events===void 0?b.events=[this]:b.events.push(this),this.point=b,this.isLeft=M}link(b){if(b.point===this.point)throw new Error("Tried to link already linked events");let M=b.point.events;for(let R=0,D=M.length;R<D;R++){let N=M[R];this.point.events.push(N),N.point=this.point}this.checkForConsuming()}checkForConsuming(){let b=this.point.events.length;for(let M=0;M<b;M++){let R=this.point.events[M];if(R.segment.consumedBy===void 0)for(let D=M+1;D<b;D++){let N=this.point.events[D];N.consumedBy===void 0&&R.otherSE.point.events===N.otherSE.point.events&&R.segment.consume(N.segment)}}}getAvailableLinkedEvents(){let b=[];for(let M=0,R=this.point.events.length;M<R;M++){let D=this.point.events[M];D!==this&&!D.segment.ringOut&&D.segment.isInResult()&&b.push(D)}return b}getLeftmostComparator(b){let M=new Map,R=D=>{let N=D.otherSE;M.set(D,{sine:X(this.point,b.point,N.point),cosine:Q(this.point,b.point,N.point)})};return(D,N)=>{M.has(D)||R(D),M.has(N)||R(N);let{sine:V,cosine:Y}=M.get(D),{sine:rt,cosine:W}=M.get(N);return V>=0&&rt>=0?Y<W?1:Y>W?-1:0:V<0&&rt<0?Y<W?-1:Y>W?1:0:rt<V?-1:rt>V?1:0}}}let Rt=0;class dt{static compare(b,M){let R=b.leftSE.point.x,D=M.leftSE.point.x,N=b.rightSE.point.x,V=M.rightSE.point.x;if(V<R)return 1;if(N<D)return-1;let Y=b.leftSE.point.y,rt=M.leftSE.point.y,W=b.rightSE.point.y,ot=M.rightSE.point.y;if(R<D){if(rt<Y&&rt<W)return 1;if(rt>Y&&rt>W)return-1;let C=b.comparePoint(M.leftSE.point);if(C<0)return 1;if(C>0)return-1;let K=M.comparePoint(b.rightSE.point);return K!==0?K:-1}if(R>D){if(Y<rt&&Y<ot)return-1;if(Y>rt&&Y>ot)return 1;let C=M.comparePoint(b.leftSE.point);if(C!==0)return C;let K=b.comparePoint(M.rightSE.point);return K<0?1:K>0?-1:1}if(Y<rt)return-1;if(Y>rt)return 1;if(N<V){let C=M.comparePoint(b.rightSE.point);if(C!==0)return C}if(N>V){let C=b.comparePoint(M.rightSE.point);if(C<0)return 1;if(C>0)return-1}if(N!==V){let C=W-Y,K=N-R,Z=ot-rt,mt=V-D;if(C>K&&Z<mt)return 1;if(C<K&&Z>mt)return-1}return N>V?1:N<V||W<ot?-1:W>ot?1:b.id<M.id?-1:b.id>M.id?1:0}constructor(b,M,R,D){this.id=++Rt,this.leftSE=b,b.segment=this,b.otherSE=M,this.rightSE=M,M.segment=this,M.otherSE=b,this.rings=R,this.windings=D}static fromRing(b,M,R){let D,N,V,Y=vt.comparePoints(b,M);if(Y<0)D=b,N=M,V=1;else if(Y>0)D=M,N=b,V=-1;else throw new Error(`Tried to create degenerate segment at [${b.x}, ${b.y}]`);let rt=new vt(D,!0),W=new vt(N,!1);return new dt(rt,W,[R],[V])}replaceRightSE(b){this.rightSE=b,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let b=this.leftSE.point.y,M=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:b<M?b:M},ur:{x:this.rightSE.point.x,y:b>M?b:M}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(b){return b.x===this.leftSE.point.x&&b.y===this.leftSE.point.y||b.x===this.rightSE.point.x&&b.y===this.rightSE.point.y}comparePoint(b){if(this.isAnEndpoint(b))return 0;let M=this.leftSE.point,R=this.rightSE.point,D=this.vector();if(M.x===R.x)return b.x===M.x?0:b.x<M.x?1:-1;let N=(b.y-M.y)/D.y,V=M.x+N*D.x;if(b.x===V)return 0;let Y=(b.x-M.x)/D.x,rt=M.y+Y*D.y;return b.y===rt?0:b.y<rt?-1:1}getIntersection(b){let M=this.bbox(),R=b.bbox(),D=p(M,R);if(D===null)return null;let N=this.leftSE.point,V=this.rightSE.point,Y=b.leftSE.point,rt=b.rightSE.point,W=x(M,Y)&&this.comparePoint(Y)===0,ot=x(R,N)&&b.comparePoint(N)===0,C=x(M,rt)&&this.comparePoint(rt)===0,K=x(R,V)&&b.comparePoint(V)===0;if(ot&&W)return K&&!C?V:!K&&C?rt:null;if(ot)return C&&N.x===rt.x&&N.y===rt.y?null:N;if(W)return K&&V.x===Y.x&&V.y===Y.y?null:Y;if(K&&C)return null;if(K)return V;if(C)return rt;let Z=_t(N,this.vector(),Y,b.vector());return Z===null||!x(D,Z)?null:w.round(Z.x,Z.y)}split(b){let M=[],R=b.events!==void 0,D=new vt(b,!0),N=new vt(b,!1),V=this.rightSE;this.replaceRightSE(N),M.push(N),M.push(D);let Y=new dt(D,V,this.rings.slice(),this.windings.slice());return vt.comparePoints(Y.leftSE.point,Y.rightSE.point)>0&&Y.swapEvents(),vt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),R&&(D.checkForConsuming(),N.checkForConsuming()),M}swapEvents(){let b=this.rightSE;this.rightSE=this.leftSE,this.leftSE=b,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let M=0,R=this.windings.length;M<R;M++)this.windings[M]*=-1}consume(b){let M=this,R=b;for(;M.consumedBy;)M=M.consumedBy;for(;R.consumedBy;)R=R.consumedBy;let D=dt.compare(M,R);if(D!==0){if(D>0){let N=M;M=R,R=N}if(M.prev===R){let N=M;M=R,R=N}for(let N=0,V=R.rings.length;N<V;N++){let Y=R.rings[N],rt=R.windings[N],W=M.rings.indexOf(Y);W===-1?(M.rings.push(Y),M.windings.push(rt)):M.windings[W]+=rt}R.rings=null,R.windings=null,R.consumedBy=M,R.leftSE.consumedBy=M.leftSE,R.rightSE.consumedBy=M.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let b=this.prev.consumedBy||this.prev;this._beforeState=b.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let b=this.beforeState();this._afterState={rings:b.rings.slice(0),windings:b.windings.slice(0),multiPolys:[]};let M=this._afterState.rings,R=this._afterState.windings,D=this._afterState.multiPolys;for(let Y=0,rt=this.rings.length;Y<rt;Y++){let W=this.rings[Y],ot=this.windings[Y],C=M.indexOf(W);C===-1?(M.push(W),R.push(ot)):R[C]+=ot}let N=[],V=[];for(let Y=0,rt=M.length;Y<rt;Y++){if(R[Y]===0)continue;let W=M[Y],ot=W.poly;if(V.indexOf(ot)===-1)if(W.isExterior)N.push(ot);else{V.indexOf(ot)===-1&&V.push(ot);let C=N.indexOf(W.poly);C!==-1&&N.splice(C,1)}}for(let Y=0,rt=N.length;Y<rt;Y++){let W=N[Y].multiPoly;D.indexOf(W)===-1&&D.push(W)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let b=this.beforeState().multiPolys,M=this.afterState().multiPolys;switch(Yt.type){case"union":{let R=b.length===0,D=M.length===0;this._isInResult=R!==D;break}case"intersection":{let R,D;b.length<M.length?(R=b.length,D=M.length):(R=M.length,D=b.length),this._isInResult=D===Yt.numMultiPolys&&R<D;break}case"xor":{let R=Math.abs(b.length-M.length);this._isInResult=R%2===1;break}case"difference":{let R=D=>D.length===1&&D[0].isSubject;this._isInResult=R(b)!==R(M);break}default:throw new Error(`Unrecognized operation type found ${Yt.type}`)}return this._isInResult}}class St{constructor(b,M,R){if(!Array.isArray(b)||b.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=M,this.isExterior=R,this.segments=[],typeof b[0][0]!="number"||typeof b[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let D=w.round(b[0][0],b[0][1]);this.bbox={ll:{x:D.x,y:D.y},ur:{x:D.x,y:D.y}};let N=D;for(let V=1,Y=b.length;V<Y;V++){if(typeof b[V][0]!="number"||typeof b[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let rt=w.round(b[V][0],b[V][1]);rt.x===N.x&&rt.y===N.y||(this.segments.push(dt.fromRing(N,rt,this)),rt.x<this.bbox.ll.x&&(this.bbox.ll.x=rt.x),rt.y<this.bbox.ll.y&&(this.bbox.ll.y=rt.y),rt.x>this.bbox.ur.x&&(this.bbox.ur.x=rt.x),rt.y>this.bbox.ur.y&&(this.bbox.ur.y=rt.y),N=rt)}(D.x!==N.x||D.y!==N.y)&&this.segments.push(dt.fromRing(N,D,this))}getSweepEvents(){let b=[];for(let M=0,R=this.segments.length;M<R;M++){let D=this.segments[M];b.push(D.leftSE),b.push(D.rightSE)}return b}}class Mt{constructor(b,M){if(!Array.isArray(b))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new St(b[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let R=1,D=b.length;R<D;R++){let N=new St(b[R],this,!1);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.interiorRings.push(N)}this.multiPoly=M}getSweepEvents(){let b=this.exteriorRing.getSweepEvents();for(let M=0,R=this.interiorRings.length;M<R;M++){let D=this.interiorRings[M].getSweepEvents();for(let N=0,V=D.length;N<V;N++)b.push(D[N])}return b}}class wt{constructor(b,M){if(!Array.isArray(b))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof b[0][0][0]=="number"&&(b=[b])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let R=0,D=b.length;R<D;R++){let N=new Mt(b[R],this);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.polys.push(N)}this.isSubject=M}getSweepEvents(){let b=[];for(let M=0,R=this.polys.length;M<R;M++){let D=this.polys[M].getSweepEvents();for(let N=0,V=D.length;N<V;N++)b.push(D[N])}return b}}class At{static factory(b){let M=[];for(let R=0,D=b.length;R<D;R++){let N=b[R];if(!N.isInResult()||N.ringOut)continue;let V=null,Y=N.leftSE,rt=N.rightSE,W=[Y],ot=Y.point,C=[];for(;V=Y,Y=rt,W.push(Y),Y.point!==ot;)for(;;){let K=Y.getAvailableLinkedEvents();if(K.length===0){let bt=W[0].point,gt=W[W.length-1].point;throw new Error(`Unable to complete output ring starting at [${bt.x}, ${bt.y}]. Last matching segment found ends at [${gt.x}, ${gt.y}].`)}if(K.length===1){rt=K[0].otherSE;break}let Z=null;for(let bt=0,gt=C.length;bt<gt;bt++)if(C[bt].point===Y.point){Z=bt;break}if(Z!==null){let bt=C.splice(Z)[0],gt=W.splice(bt.index);gt.unshift(gt[0].otherSE),M.push(new At(gt.reverse()));continue}C.push({index:W.length,point:Y.point});let mt=Y.getLeftmostComparator(V);rt=K.sort(mt)[0].otherSE;break}M.push(new At(W))}return M}constructor(b){this.events=b;for(let M=0,R=b.length;M<R;M++)b[M].segment.ringOut=this;this.poly=null}getGeom(){let b=this.events[0].point,M=[b];for(let W=1,ot=this.events.length-1;W<ot;W++){let C=this.events[W].point,K=this.events[W+1].point;Tt(C,b,K)!==0&&(M.push(C),b=C)}if(M.length===1)return null;let R=M[0],D=M[1];Tt(R,b,D)===0&&M.shift(),M.push(M[0]);let N=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:M.length-1,Y=this.isExteriorRing()?M.length:-1,rt=[];for(let W=V;W!=Y;W+=N)rt.push([M[W].x,M[W].y]);return rt}isExteriorRing(){if(this._isExteriorRing===void 0){let b=this.enclosingRing();this._isExteriorRing=b?!b.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let b=this.events[0];for(let D=1,N=this.events.length;D<N;D++){let V=this.events[D];vt.compare(b,V)>0&&(b=V)}let M=b.segment.prevInResult(),R=M?M.prevInResult():null;for(;;){if(!M)return null;if(!R)return M.ringOut;if(R.ringOut!==M.ringOut)return R.ringOut.enclosingRing()!==M.ringOut?M.ringOut:M.ringOut.enclosingRing();M=R.prevInResult(),R=M?M.prevInResult():null}}}class Ut{constructor(b){this.exteriorRing=b,b.poly=this,this.interiorRings=[]}addInterior(b){this.interiorRings.push(b),b.poly=this}getGeom(){let b=[this.exteriorRing.getGeom()];if(b[0]===null)return null;for(let M=0,R=this.interiorRings.length;M<R;M++){let D=this.interiorRings[M].getGeom();D!==null&&b.push(D)}return b}}class Ot{constructor(b){this.rings=b,this.polys=this._composePolys(b)}getGeom(){let b=[];for(let M=0,R=this.polys.length;M<R;M++){let D=this.polys[M].getGeom();D!==null&&b.push(D)}return b}_composePolys(b){let M=[];for(let R=0,D=b.length;R<D;R++){let N=b[R];if(!N.poly)if(N.isExteriorRing())M.push(new Ut(N));else{let V=N.enclosingRing();V.poly||M.push(new Ut(V)),V.poly.addInterior(N)}}return M}}class Wt{constructor(b){let M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dt.compare;this.queue=b,this.tree=new c(M),this.segments=[]}process(b){let M=b.segment,R=[];if(b.consumedBy)return b.isLeft?this.queue.remove(b.otherSE):this.tree.remove(M),R;let D=b.isLeft?this.tree.add(M):this.tree.find(M);if(!D)throw new Error(`Unable to find segment #${M.id} [${M.leftSE.point.x}, ${M.leftSE.point.y}] -> [${M.rightSE.point.x}, ${M.rightSE.point.y}] in SweepLine tree.`);let N=D,V=D,Y,rt;for(;Y===void 0;)N=this.tree.prev(N),N===null?Y=null:N.key.consumedBy===void 0&&(Y=N.key);for(;rt===void 0;)V=this.tree.next(V),V===null?rt=null:V.key.consumedBy===void 0&&(rt=V.key);if(b.isLeft){let W=null;if(Y){let C=Y.getIntersection(M);if(C!==null&&(M.isAnEndpoint(C)||(W=C),!Y.isAnEndpoint(C))){let K=this._splitSafely(Y,C);for(let Z=0,mt=K.length;Z<mt;Z++)R.push(K[Z])}}let ot=null;if(rt){let C=rt.getIntersection(M);if(C!==null&&(M.isAnEndpoint(C)||(ot=C),!rt.isAnEndpoint(C))){let K=this._splitSafely(rt,C);for(let Z=0,mt=K.length;Z<mt;Z++)R.push(K[Z])}}if(W!==null||ot!==null){let C=null;W===null?C=ot:ot===null?C=W:C=vt.comparePoints(W,ot)<=0?W:ot,this.queue.remove(M.rightSE),R.push(M.rightSE);let K=M.split(C);for(let Z=0,mt=K.length;Z<mt;Z++)R.push(K[Z])}R.length>0?(this.tree.remove(M),R.push(b)):(this.segments.push(M),M.prev=Y)}else{if(Y&&rt){let W=Y.getIntersection(rt);if(W!==null){if(!Y.isAnEndpoint(W)){let ot=this._splitSafely(Y,W);for(let C=0,K=ot.length;C<K;C++)R.push(ot[C])}if(!rt.isAnEndpoint(W)){let ot=this._splitSafely(rt,W);for(let C=0,K=ot.length;C<K;C++)R.push(ot[C])}}}this.tree.remove(M)}return R}_splitSafely(b,M){this.tree.remove(b);let R=b.rightSE;this.queue.remove(R);let D=b.split(M);return D.push(R),b.consumedBy===void 0&&this.tree.add(b),D}}let Ft=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,j=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class Kt{run(b,M,R){Yt.type=b,w.reset();let D=[new wt(M,!0)];for(let C=0,K=R.length;C<K;C++)D.push(new wt(R[C],!1));if(Yt.numMultiPolys=D.length,Yt.type==="difference"){let C=D[0],K=1;for(;K<D.length;)p(D[K].bbox,C.bbox)!==null?K++:D.splice(K,1)}if(Yt.type==="intersection")for(let C=0,K=D.length;C<K;C++){let Z=D[C];for(let mt=C+1,bt=D.length;mt<bt;mt++)if(p(Z.bbox,D[mt].bbox)===null)return[]}let N=new c(vt.compare);for(let C=0,K=D.length;C<K;C++){let Z=D[C].getSweepEvents();for(let mt=0,bt=Z.length;mt<bt;mt++)if(N.insert(Z[mt]),N.size>Ft)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new Wt(N),Y=N.size,rt=N.pop();for(;rt;){let C=rt.key;if(N.size===Y){let Z=C.segment;throw new Error(`Unable to pop() ${C.isLeft?"left":"right"} SweepEvent [${C.point.x}, ${C.point.y}] from segment #${Z.id} [${Z.leftSE.point.x}, ${Z.leftSE.point.y}] -> [${Z.rightSE.point.x}, ${Z.rightSE.point.y}] from queue.`)}if(N.size>Ft)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>j)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let K=V.process(C);for(let Z=0,mt=K.length;Z<mt;Z++){let bt=K[Z];bt.consumedBy===void 0&&N.insert(bt)}Y=N.size,rt=N.pop()}w.reset();let W=At.factory(V.segments);return new Ot(W).getGeom()}}let Yt=new Kt;var pt={union:function(H){for(var b=arguments.length,M=new Array(b>1?b-1:0),R=1;R<b;R++)M[R-1]=arguments[R];return Yt.run("union",H,M)},intersection:function(H){for(var b=arguments.length,M=new Array(b>1?b-1:0),R=1;R<b;R++)M[R-1]=arguments[R];return Yt.run("intersection",H,M)},xor:function(H){for(var b=arguments.length,M=new Array(b>1?b-1:0),R=1;R<b;R++)M[R-1]=arguments[R];return Yt.run("xor",H,M)},difference:function(H){for(var b=arguments.length,M=new Array(b>1?b-1:0),R=1;R<b;R++)M[R-1]=arguments[R];return Yt.run("difference",H,M)}};return pt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var qf=0,Iu=1,Zf=2;var Ps=1,$f=2,wr=3,ds=0,Mn=1,on=2,bi=0,Er=1,Io=2,Pu=3,Lu=4,Jf=5;var Ls=100,jf=101,Kf=102,Qf=103,td=104,ed=200,nd=201,id=202,sd=203,Nu=204,Du=205,rd=206,od=207,ad=208,cd=209,ld=210,ud=211,hd=212,fd=213,dd=214,La=0,Na=1,Da=2,cr=3,Ua=4,Fa=5,Oa=6,Ba=7,mc=0,pd=1,md=2,si=0,Uu=1,Fu=2,Ou=3,Po=4,Bu=5,ku=6,zu=7;var Hu=300,ps=301,Ns=302,gc=303,xc=304,Lo=306,Es=1e3,mi=1001,ka=1002,tn=1003,gd=1004;var No=1005;var rn=1006,yc=1007;var ms=1008;var In=1009,Vu=1010,Gu=1011,Tr=1012,_c=1013,ri=1014,Zn=1015,oi=1016,vc=1017,bc=1018,Ar=1020,Wu=35902,Xu=35899,Yu=1021,qu=1022,$n=1023,xi=1026,gs=1027,Sc=1028,Mc=1029,xs=1030,wc=1031;var Ec=1033,Do=33776,Uo=33777,Fo=33778,Oo=33779,Tc=35840,Ac=35841,Rc=35842,Cc=35843,Ic=36196,Pc=37492,Lc=37496,Nc=37488,Dc=37489,Bo=37490,Uc=37491,Fc=37808,Oc=37809,Bc=37810,kc=37811,zc=37812,Hc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,Yc=37818,qc=37819,Zc=37820,$c=37821,Jc=36492,jc=36494,Kc=36495,Qc=36283,tl=36284,ko=36285,el=36286;var Qr=2300,za=2301,Ia=2302,gu=2303,xu=2400,yu=2401,_u=2402;var xd=3200;var zo=0,yd=1,Vi="",qe="srgb",to="srgb-linear",eo="linear",we="srgb";var Pa=7680;var _d=519,vd=512,bd=513,Sd=514,nl=515,Md=516,wd=517,il=518,Ed=519,Zu=35044,Bn=35048;var $u="300 es",ni=2e3,lr=2001;function Yg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){let i=no("canvas");return i.style.display="block",i}var af={},ur=null;function io(...i){let t="THREE."+i.shift();ur?ur("log",t,...i):console.log(t,...i)}function Ad(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ne(...i){i=Ad(i);let t="THREE."+i.shift();if(ur)ur("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=Ad(i);let t="THREE."+i.shift();if(ur)ur("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ws(...i){let t=i.join(" ");t in af||(af[t]=!0,ne(...i))}function Rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cd={[La]:Na,[Da]:Oa,[Ua]:Ba,[cr]:Fa,[Na]:La,[Oa]:Da,[Ba]:Ua,[Fa]:cr},yi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cf=1234567,$r=Math.PI/180,hr=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Ju(i,t){return(i%t+t)%t}function Zg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $g(i,t,e){return i!==t?(e-i)/(t-i):0}function Jr(i,t,e){return(1-e)*i+e*t}function Jg(i,t,e,n){return Jr(i,t,1-Math.exp(-e*n))}function jg(i,t=1){return t-Math.abs(Ju(i,t*2)-t)}function Kg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function t0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function e0(i,t){return i+Math.random()*(t-i)}function n0(i){return i*(.5-Math.random())}function i0(i){i!==void 0&&(cf=i);let t=cf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function s0(i){return i*$r}function r0(i){return i*hr}function o0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function a0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function c0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function l0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var se={DEG2RAD:$r,RAD2DEG:hr,generateUUID:gi,clamp:le,euclideanModulo:Ju,mapLinear:Zg,inverseLerp:$g,lerp:Jr,damp:Jg,pingpong:jg,smoothstep:Kg,smootherstep:Qg,randInt:t0,randFloat:e0,randFloatSpread:n0,seededRandom:i0,degToRad:s0,radToDeg:r0,isPowerOfTwo:o0,ceilPowerOfTwo:a0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:l0,normalize:Ae,denormalize:ei},Nt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*x;p<0&&(h=-h,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),E=Math.sin(y);m=Math.sin(m*y)/E,a=Math.sin(a*y)/E,c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+x*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+x*a;let y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new G,lf=new en,ue=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],y=s[1],E=s[4],_=s[7],v=s[2],w=s[5],A=s[8];return r[0]=o*x+a*y+c*v,r[3]=o*p+a*E+c*w,r[6]=o*m+a*_+c*A,r[1]=l*x+u*y+d*v,r[4]=l*p+u*E+d*w,r[7]=l*m+u*_+d*A,r[2]=h*x+f*y+g*v,r[5]=h*p+f*E+g*w,r[8]=h*m+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new ue,uf=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u0(){let i={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[to]:{primaries:t,whitePoint:n,transfer:eo,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:we,toXYZ:uf,fromXYZ:hf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}var xe=u0();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xs,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xs===void 0&&(Xs=no("canvas")),Xs.width=t.width,Xs.height=t.height;let s=Xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},h0=0,fr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Yl(s[o].image)):r.push(Yl(s[o]))}else r=Yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var f0=0,ql=new G,Sn=class i extends yi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=rn,o=ms,a=$n,c=In,l=i.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=gi(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Hu;Sn.DEFAULT_ANISOTROPY=1;var Ee=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,_=(f+1)/2,v=(m+1)/2,w=(u+h)/4,A=(d+x)/4,S=(g+p)/4;return E>_&&E>v?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=A/n):_>v?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=S/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va=class extends yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Va{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},so=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ga=class extends Sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){let h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(d0,t,p0)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ji.crossVectors(n,Ln),ji.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ji.crossVectors(n,Ln)),ji.normalize(),ia.crossVectors(Ln,ji),s[0]=ji.x,s[4]=ia.x,s[8]=Ln.x,s[1]=ji.y,s[5]=ia.y,s[9]=Ln.y,s[2]=ji.z,s[6]=ia.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],E=n[7],_=n[11],v=n[15],w=s[0],A=s[4],S=s[8],P=s[12],U=s[1],L=s[5],O=s[9],F=s[13],z=s[2],q=s[6],k=s[10],J=s[14],lt=s[3],tt=s[7],it=s[11],at=s[15];return r[0]=o*w+a*U+c*z+l*lt,r[4]=o*A+a*L+c*q+l*tt,r[8]=o*S+a*O+c*k+l*it,r[12]=o*P+a*F+c*J+l*at,r[1]=u*w+d*U+h*z+f*lt,r[5]=u*A+d*L+h*q+f*tt,r[9]=u*S+d*O+h*k+f*it,r[13]=u*P+d*F+h*J+f*at,r[2]=g*w+x*U+p*z+m*lt,r[6]=g*A+x*L+p*q+m*tt,r[10]=g*S+x*O+p*k+m*it,r[14]=g*P+x*F+p*J+m*at,r[3]=y*w+E*U+_*z+v*lt,r[7]=y*A+E*L+_*q+v*tt,r[11]=y*S+E*O+_*k+v*it,r[15]=y*P+E*F+_*J+v*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],y=c*f-l*h,E=a*f-l*d,_=a*h-c*d,v=o*f-l*u,w=o*h-c*u,A=o*d-a*u;return e*(x*y-p*E+m*_)-n*(g*y-p*v+m*w)+s*(g*E-x*v+m*A)-r*(g*_-x*w+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=e*a-n*o,E=e*c-s*o,_=e*l-r*o,v=n*c-s*a,w=n*l-r*a,A=s*l-r*c,S=u*x-d*g,P=u*p-h*g,U=u*m-f*g,L=d*p-h*x,O=d*m-f*x,F=h*m-f*p,z=y*F-E*O+_*L+v*U-w*P+A*S;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/z;return t[0]=(a*F-c*O+l*L)*q,t[1]=(s*O-n*F-r*L)*q,t[2]=(x*A-p*w+m*v)*q,t[3]=(h*w-d*A-f*v)*q,t[4]=(c*U-o*F-l*P)*q,t[5]=(e*F-s*U+r*P)*q,t[6]=(p*_-g*A-m*E)*q,t[7]=(u*A-h*_+f*E)*q,t[8]=(o*O-a*U+l*S)*q,t[9]=(n*U-e*O-r*S)*q,t[10]=(g*w-x*_+m*y)*q,t[11]=(d*_-u*w-f*y)*q,t[12]=(a*P-o*L-c*S)*q,t[13]=(e*L-n*P+s*S)*q,t[14]=(x*E-g*v-p*y)*q,t[15]=(u*v-d*E+h*y)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,x=o*u,p=o*d,m=a*d,y=c*l,E=c*u,_=c*d,v=n.x,w=n.y,A=n.z;return s[0]=(1-(x+m))*v,s[1]=(f+_)*v,s[2]=(g-E)*v,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(h+m))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(p-y)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ys.set(s[0],s[1],s[2]).length(),a=Ys.set(s[4],s[5],s[6]).length(),c=Ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let l=1/o,u=1/a,d=1/c;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,e.setFromRotationMatrix(Kn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=ni,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ni)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ni,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ni)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===lr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ys=new G,Kn=new _e,d0=new G(0,0,0),p0=new G(1,1,1),ji=new G,ia=new G,Ln=new G,ff=new _e,df=new en,_i=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ff.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ff,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return df.setFromEuler(this),this.setFromQuaternion(df,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},m0=0,pf=new G,qs=new en,Di=new _e,sa=new G,Hr=new G,g0=new G,x0=new en,mf=new G(1,0,0),gf=new G(0,1,0),xf=new G(0,0,1),yf={type:"added"},y0={type:"removed"},Zs={type:"childadded",child:null},Zl={type:"childremoved",child:null},ke=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new _i,n=new en,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ue}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(mf,t)}rotateY(t){return this.rotateOnAxis(gf,t)}rotateZ(t){return this.rotateOnAxis(xf,t)}translateOnAxis(t,e){return pf.copy(t).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mf,t)}translateY(t){return this.translateOnAxis(gf,t)}translateZ(t){return this.translateOnAxis(xf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Hr,sa,this.up):Di.lookAt(sa,Hr,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Di),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(y0),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,g0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,x0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new G(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ra={h:0,s:0,l:0};function $l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Ju(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$l(o,r,t+1/3),this.g=$l(o,r,t),this.b=$l(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return xe.workingToColorSpace(pn.copy(this),t),Math.round(le(pn.r*255,0,255))*65536+Math.round(le(pn.g*255,0,255))*256+Math.round(le(pn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=qe){xe.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(ra);let n=Jr(Ki.h,ra.h,e),s=Jr(Ki.s,ra.s,e),r=Jr(Ki.l,ra.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new qt;qt.NAMES=Id;var is=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new G,Ui=new G,Jl=new G,Fi=new G,$s=new G,Js=new G,_f=new G,jl=new G,Kl=new G,Ql=new G,tu=new Ee,eu=new Ee,nu=new Ee,ns=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Ui.subVectors(n,e),Jl.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Ui),c=Qn.dot(Jl),l=Ui.dot(Ui),u=Ui.dot(Jl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return tu.setScalar(0),eu.setScalar(0),nu.setScalar(0),tu.fromBufferAttribute(t,e),eu.fromBufferAttribute(t,n),nu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tu,r.x),o.addScaledVector(eu,r.y),o.addScaledVector(nu,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Ui.subVectors(t,e),Qn.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Qn.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,n),Js.subVectors(r,n),jl.subVectors(t,n);let c=$s.dot(jl),l=Js.dot(jl);if(c<=0&&l<=0)return e.copy(n);Kl.subVectors(t,s);let u=$s.dot(Kl),d=Js.dot(Kl);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector($s,o);Ql.subVectors(t,r);let f=$s.dot(Ql),g=Js.dot(Ql);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Js,a);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return _f.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(_f,a);let m=1/(p+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector($s,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ze=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),aa.subVectors(this.max,Vr),js.subVectors(t.a,Vr),Ks.subVectors(t.b,Vr),Qs.subVectors(t.c,Vr),Qi.subVectors(Ks,js),ts.subVectors(Qs,Ks),vs.subVectors(js,Qs);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-vs.z,vs.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,vs.z,0,-vs.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-vs.y,vs.x,0];return!iu(e,js,Ks,Qs,aa)||(e=[1,0,0,0,1,0,0,0,1],!iu(e,js,Ks,Qs,aa))?!1:(ca.crossVectors(Qi,ts),e=[ca.x,ca.y,ca.z],iu(e,js,Ks,Qs,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new G,new G,new G,new G,new G,new G,new G,new G],ti=new G,oa=new ze,js=new G,Ks=new G,Qs=new G,Qi=new G,ts=new G,vs=new G,Vr=new G,aa=new G,ca=new G,bs=new G;function iu(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),c=t.dot(bs),l=e.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ye=new G,la=new Nt,v0=0,be=class extends yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zu,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ro=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},b0=new ze,Gr=new G,su=new G,Rn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):b0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(su.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(su)),this.expandByPoint(Gr.copy(t.center).sub(su))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},S0=0,Xn=new _e,ru=new ke,tr=new G,Nn=new ze,Wr=new ze,Qe=new G,ce=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yg(t)?oo:ro)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return ru.lookAt(t),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Nn.min,Wr.min),Nn.expandByPoint(Qe),Qe.addVectors(Nn.max,Wr.max),Nn.expandByPoint(Qe)):(Nn.expandByPoint(Wr.min),Nn.expandByPoint(Wr.max))}Nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qe.fromBufferAttribute(a,l),c&&(tr.fromBufferAttribute(t,l),Qe.add(tr)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new G,c[S]=new G;let l=new G,u=new G,d=new G,h=new Nt,f=new Nt,g=new Nt,x=new G,p=new G;function m(S,P,U){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,U),h.fromBufferAttribute(r,S),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,U),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[S].add(x),a[P].add(x),a[U].add(x),c[S].add(p),c[P].add(p),c[U].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let S=0,P=y.length;S<P;++S){let U=y[S],L=U.start,O=U.count;for(let F=L,z=L+O;F<z;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let E=new G,_=new G,v=new G,w=new G;function A(S){v.fromBufferAttribute(s,S),w.copy(v);let P=a[S];E.copy(P),E.sub(v.multiplyScalar(v.dot(P))).normalize(),_.crossVectors(w,P);let L=_.dot(c[S])<0?-1:1;o.setXYZW(S,E.x,E.y,E.z,L)}for(let S=0,P=y.length;S<P;++S){let U=y[S],L=U.start,O=U.count;for(let F=L,z=L+O;F<z;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,d=new G;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new be(h,u,d)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zu,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},vn=new G,qn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ou=new G,M0=new G,w0=new ue,Dn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ou.subVectors(n,e).cross(M0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ou),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||w0.getNormalMatrix(t),s=this.coplanarPoint(ou).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},E0=0,ii=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Er,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Du,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Bi=new G,au=new G,ua=new G,ha=new G,Ts=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){au.copy(t).add(e).multiplyScalar(.5),ua.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(au);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ua),a=ha.dot(this.direction),c=-ha.dot(ua),l=ha.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(au).addScaledVector(ua,h),f}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=n.x-o.x,y=n.y-o.y,E=n.z-o.z,_=Math.abs(c),v=Math.abs(l),w=Math.abs(u),A,S,P,U,L,O,F,z,q,k,J,lt;if(_>=v&&_>=w?(P=c,O=d,q=g,lt=m,c>=0?(A=l,S=u,U=h,L=f,F=x,z=p,k=y,J=E):(A=u,S=l,U=f,L=h,F=p,z=x,k=E,J=y)):v>=w?(P=l,O=h,q=x,lt=y,l>=0?(A=u,S=c,U=f,L=d,F=p,z=g,k=E,J=m):(A=c,S=u,U=d,L=f,F=g,z=p,k=m,J=E)):(P=u,O=f,q=p,lt=E,u>=0?(A=c,S=l,U=d,L=h,F=g,z=x,k=m,J=y):(A=l,S=c,U=h,L=d,F=x,z=g,k=y,J=m)),P===0)return null;let tt=A/P,it=S/P,at=1/P,Ct=U-tt*O,Lt=L-it*O,Et=F-tt*q,Tt=z-it*q,$=k-tt*lt,X=J-it*lt,Q=$*Tt-X*Et,ct=Ct*X-Lt*$,xt=Et*Lt-Tt*Ct;if(s){if(Q<0||ct<0||xt<0)return null}else if((Q<0||ct<0||xt<0)&&(Q>0||ct>0||xt>0))return null;let _t=Q+ct+xt;if(_t===0)return null;let vt=at*(Q*O+ct*q+xt*lt);return(_t>0?vt<0:vt>0)?null:this.at(vt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},vf=new _e,Ss=new Ts,fa=new Rn,bf=new G,da=new G,pa=new G,ma=new G,cu=new G,ga=new G,Sf=new G,xa=new G,he=class extends ke{constructor(t=new ce,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(cu.fromBufferAttribute(d,t),o?ga.addScaledVector(cu,u):ga.addScaledVector(cu.sub(e),u))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(fa.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(fa,bf)===null||Ss.origin.distanceToSquared(bf)>(t.far-t.near)**2))&&(vf.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(vf),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,v=E;_<v;_+=3){let w=a.getX(_),A=a.getX(_+1),S=a.getX(_+2);s=ya(this,m,t,n,l,u,d,w,A,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),E=a.getX(p+1),_=a.getX(p+2);s=ya(this,o,t,n,l,u,d,y,E,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),E=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,v=E;_<v;_+=3){let w=_,A=_+1,S=_+2;s=ya(this,m,t,n,l,u,d,w,A,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,E=p+1,_=p+2;s=ya(this,o,t,n,l,u,d,y,E,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function T0(i,t,e,n,s,r,o,a){let c;if(t.side===Mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ds,a),c===null)return null;xa.copy(a),xa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:i}}function ya(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,da),i.getVertexPosition(c,pa),i.getVertexPosition(l,ma);let u=T0(i,t,e,n,da,pa,ma,Sf);if(u){let d=new G;ns.getBarycoord(Sf,da,pa,ma,d),s&&(u.uv=ns.getInterpolatedAttribute(s,a,c,l,d,new Nt)),r&&(u.uv1=ns.getInterpolatedAttribute(r,a,c,l,d,new Nt)),o&&(u.normal=ns.getInterpolatedAttribute(o,a,c,l,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new G,materialIndex:0};ns.getNormal(da,pa,ma,h.normal),u.face=h,u.barycoord=d}return u}var co=class extends Sn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=tn,u=tn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},er=new _e,Mf=new _e,_a=[],wf=new ze,A0=new _e,Xr=new he,Yr=new Rn,vi=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,A0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ze),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),wf.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(wf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),Yr.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),Mf.multiplyMatrices(n,er),Xr.matrixWorld=Mf,Xr.raycast(t,_a);for(let o=0,a=_a.length;o<a;o++){let c=_a[o];c.instanceId=r,c.object=this,e.push(c)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(s*this.count),s,this.count,Sc,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new Rn,R0=new Nt(.5,.5),va=new G,gr=class{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],E=r[13],_=r[14],v=r[15];if(s[0].setComponents(l-o,f-u,m-g,v-y).normalize(),s[1].setComponents(l+o,f+u,m+g,v+y).normalize(),s[2].setComponents(l+a,f+d,m+x,v+E).normalize(),s[3].setComponents(l-a,f-d,m-x,v-E).normalize(),n)s[4].setComponents(c,h,p,_).normalize(),s[5].setComponents(l-c,f-h,m-p,v-_).normalize();else if(s[4].setComponents(l-c,f-h,m-p,v-_).normalize(),e===ni)s[5].setComponents(l+c,f+h,m+p,v+_).normalize();else if(e===lr)s[5].setComponents(c,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);let e=R0.distanceTo(t.center);return Ms.radius=.7071067811865476+e,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(va.x=s.normal.x>0?t.max.x:t.min.x,va.y=s.normal.y>0?t.max.y:t.min.y,va.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Wa=new G,Xa=new G,Ef=new _e,qr=new Ts,ba=new Rn,lu=new G,Tf=new G,Ya=class extends ke{constructor(t=new ce,e=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Wa.fromBufferAttribute(e,s-1),Xa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Wa.distanceTo(Xa);t.setAttribute("lineDistance",new jt(n,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;Ef.copy(s).invert(),qr.copy(t.ray).applyMatrix4(Ef);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=u.getX(x),y=u.getX(x+1),E=Sa(this,t,qr,c,m,y,x);E&&e.push(E)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=Sa(this,t,qr,c,x,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=Sa(this,t,qr,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Sa(this,t,qr,c,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Wa.fromBufferAttribute(a,s),Xa.fromBufferAttribute(a,r),e.distanceSqToSegment(Wa,Xa,lu,Tf)>n)return;lu.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(lu);if(!(l<t.near||l>t.far))return{distance:l,point:Tf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Af=new G,Rf=new G,lo=class extends Ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Af.fromBufferAttribute(e,s),Rf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Af.distanceTo(Rf);t.setAttribute("lineDistance",new jt(n,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var As=class extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cf=new _e,vu=new Ts,Ma=new Rn,wa=new G,yr=class extends ke{constructor(t=new ce,e=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;Cf.copy(s).invert(),vu.copy(t.ray).applyMatrix4(Cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,x=f;g<x;g++){let p=l.getX(g);wa.fromBufferAttribute(d,p),If(wa,p,c,s,t,e,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,x=f;g<x;g++)wa.fromBufferAttribute(d,g),If(wa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function If(i,t,e,n,s,r,o){let a=vu.distanceSqToPoint(i);if(a<e){let c=new G;vu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends Sn{constructor(t=[],e=ps,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_r=class extends Sn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ss=class extends Sn{constructor(t,e,n=ri,s,r,o,a=tn,c=tn,l,u=xi,d=1){if(u!==xi&&u!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},qa=class extends ss{constructor(t,e=ri,n=ps,s,r,o=tn,a=tn,c,l=xi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ho=class extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Te=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2));function g(x,p,m,y,E,_,v,w,A,S,P){let U=_/A,L=v/S,O=_/2,F=v/2,z=w/2,q=A+1,k=S+1,J=0,lt=0,tt=new G;for(let it=0;it<k;it++){let at=it*L-F;for(let Ct=0;Ct<q;Ct++){let Lt=Ct*U-O;tt[x]=Lt*y,tt[p]=at*E,tt[m]=z,l.push(tt.x,tt.y,tt.z),tt[x]=0,tt[p]=0,tt[m]=w>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(Ct/A),d.push(1-it/S),J+=1}}for(let it=0;it<S;it++)for(let at=0;at<A;at++){let Ct=h+at+q*it,Lt=h+at+q*(it+1),Et=h+(at+1)+q*(it+1),Tt=h+(at+1)+q*it;c.push(Ct,Lt,Tt),c.push(Lt,Et,Tt),lt+=6}a.addGroup(f,lt,P),f+=lt,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Cn=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new G,u=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nn=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],p=n/2,m=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(f,2));function y(){let _=new G,v=new G,w=0,A=(e-t)/n;for(let S=0;S<=r;S++){let P=[],U=S/r,L=U*(e-t)+t;for(let O=0;O<=s;O++){let F=O/s,z=F*c+a,q=Math.sin(z),k=Math.cos(z);v.x=L*q,v.y=-U*n+p,v.z=L*k,d.push(v.x,v.y,v.z),_.set(q,A,k).normalize(),h.push(_.x,_.y,_.z),f.push(F,1-U),P.push(g++)}x.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let U=x[P][S],L=x[P+1][S],O=x[P+1][S+1],F=x[P][S+1];(t>0||P!==0)&&(u.push(U,L,F),w+=3),(e>0||P!==r-1)&&(u.push(L,O,F),w+=3)}l.addGroup(m,w,0),m+=w}function E(_){let v=g,w=new Nt,A=new G,S=0,P=_===!0?t:e,U=_===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,p*U,0),h.push(0,U,0),f.push(.5,.5),g++;let L=g;for(let O=0;O<=s;O++){let z=O/s*c+a,q=Math.cos(z),k=Math.sin(z);A.x=P*k,A.y=p*U,A.z=P*q,d.push(A.x,A.y,A.z),h.push(0,U,0),w.x=q*.5+.5,w.y=k*.5*U+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){let F=v+O,z=L+O;_===!0?u.push(z,z+1,F):u.push(z+1,z,F),S+=3}l.addGroup(m,S,_===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fo=class i extends nn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Nt:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,c=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Za=class extends vr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ju(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Pf=new G,Lf=new G,uu=new ju,hu=new ju,fu=new ju,$a=class extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Lf.subVectors(s[0],s[1]).add(s[0]),l=Lf);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Pf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),uu.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,p),hu.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,p),fu.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(uu.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),hu.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),fu.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(uu.calc(c),hu.calc(c),fu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function C0(i,t){let e=1-i;return e*e*t}function I0(i,t){return 2*(1-i)*i*t}function P0(i,t){return i*i*t}function jr(i,t,e,n){return C0(i,t)+I0(i,e)+P0(i,n)}function L0(i,t){let e=1-i;return e*e*e*t}function N0(i,t){let e=1-i;return 3*e*e*i*t}function D0(i,t){return 3*(1-i)*i*i*t}function U0(i,t){return i*i*i*t}function Kr(i,t,e,n,s){return L0(i,t)+N0(i,e)+D0(i,n)+U0(i,s)}var po=class extends Un{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends Un{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Kr(t,s.x,r.x,o.x,a.x),Kr(t,s.y,r.y,o.y,a.y),Kr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mo=class extends Un{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends Un{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends Un{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(jr(t,s.x,r.x,o.x),jr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Un{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(jr(t,s.x,r.x,o.x),jr(t,s.y,r.y,o.y),jr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Nf(a,c.x,l.x,u.x,d.x),Nf(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},bu=Object.freeze({__proto__:null,ArcCurve:Za,CatmullRomCurve3:$a,CubicBezierCurve:po,CubicBezierCurve3:Ja,EllipseCurve:vr,LineCurve:mo,LineCurve3:ja,QuadraticBezierCurve:go,QuadraticBezierCurve3:Ka,SplineCurve:xo}),Qa=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new bu[s.type]().fromJSON(s))}return this}},Rs=class extends Qa{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mo(this.currentPoint.clone(),new Nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new go(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new po(this.currentPoint.clone(),new Nt(t,e),new Nt(n,s),new Nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new vr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fn=class extends Rs{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rs().fromJSON(s))}return this}};function F0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Pd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=H0(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,d=c;for(let h=e;h<s;h+=e){let f=i[h],g=i[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return yo(r,o,e,a,c,l,0),o}function Pd(i,t,e,n,s){let r;if(s===K0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Df(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Df(o/n|0,i[o],i[o+1],r);return r&&br(r,r.next)&&(vo(r),r=r.next),r}function Cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(br(e,e.next)||He(e.prev,e,e.next)===0)){if(vo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Y0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?B0(i,n,s,r):O0(i)){t.push(c.i,i.i,l.i),vo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=k0(Cs(i),t),yo(i,t,e,n,s,r,2)):o===2&&z0(i,t,e,n,s,r):yo(Cs(i),t,e,n,s,r,1);break}}}function O0(i){let t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Zr(s,a,r,c,o,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function B0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),x=Math.max(a,c,l),p=Math.max(u,d,h),m=Su(f,g,t,e,n),y=Su(x,p,t,e,n),E=i.prevZ,_=i.nextZ;for(;E&&E.z>=m&&_&&_.z<=y;){if(E.x>=f&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Zr(a,u,c,d,l,h,E.x,E.y)&&He(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Zr(a,u,c,d,l,h,_.x,_.y)&&He(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=x&&E.y>=g&&E.y<=p&&E!==s&&E!==o&&Zr(a,u,c,d,l,h,E.x,E.y)&&He(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&Zr(a,u,c,d,l,h,_.x,_.y)&&He(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function k0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!br(n,s)&&Nd(n,e,e.next,s)&&_o(n,s)&&_o(s,n)&&(t.push(n.i,e.i,s.i),vo(e),vo(e.next),e=i=s),e=e.next}while(e!==i);return Cs(e)}function z0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$0(o,a)){let c=Dd(o,a);o=Cs(o,o.next),c=Cs(c,c.next),yo(o,t,e,n,s,r,0),yo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function H0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Pd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Z0(l))}s.sort(V0);for(let r=0;r<s.length;r++)e=G0(s[r],e);return e}function V0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function G0(i,t){let e=W0(i,t);if(!e)return t;let n=Dd(e,i);return Cs(n,n.next),Cs(e,e.next)}function W0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(br(i,e))return e;do{if(br(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Ld(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);_o(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&X0(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function X0(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function Y0(i,t,e,n){let s=i;do s.z===0&&(s.z=Su(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,q0(s)}function q0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Su(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Z0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ld(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Zr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Ld(i,t,e,n,s,r,o,a)}function $0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!J0(i,t)&&(_o(i,t)&&_o(t,i)&&j0(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||br(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function br(i,t){return i.x===t.x&&i.y===t.y}function Nd(i,t,e,n){let s=Ta(He(i,t,e)),r=Ta(He(i,t,n)),o=Ta(He(e,n,i)),a=Ta(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Ea(i,e,t)||r===0&&Ea(i,n,t)||o===0&&Ea(e,i,n)||a===0&&Ea(e,t,n))}function Ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ta(i){return i>0?1:i<0?-1:0}function J0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _o(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function j0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Dd(i,t){let e=Mu(i.i,i.x,i.y),n=Mu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Df(i,t,e,n){let s=Mu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var wu=class{static triangulate(t,e,n=2){return F0(t,e,n)}},Yn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Uf(t),Ff(n,t);let o=t.length;e.forEach(Uf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ff(n,e[c]);let a=wu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Uf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ff(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zi=class i extends ce{constructor(t=new Fn([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Q0,E,_=!1,v,w,A,S;if(m){E=m.getSpacedPoints(u),_=!0,h=!1;let dt=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(u,dt),w=new G,A=new G,S=new G}h||(p=0,f=0,g=0,x=0);let P=a.extractPoints(l),U=P.shape,L=P.holes;if(!Yn.isClockWise(U)){U=U.reverse();for(let dt=0,St=L.length;dt<St;dt++){let Mt=L[dt];Yn.isClockWise(Mt)&&(L[dt]=Mt.reverse())}}function F(dt){let Mt=10000000000000001e-36,wt=dt[0];for(let At=1;At<=dt.length;At++){let Ut=At%dt.length,Ot=dt[Ut],Wt=Ot.x-wt.x,Ft=Ot.y-wt.y,j=Wt*Wt+Ft*Ft,Kt=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(wt.x),Math.abs(wt.y)),Yt=Mt*Kt*Kt;if(j<=Yt){dt.splice(Ut,1),At--;continue}wt=Ot}}F(U),L.forEach(F);let z=L.length,q=U;for(let dt=0;dt<z;dt++){let St=L[dt];U=U.concat(St)}function k(dt,St,Mt){return St||re("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(St,Mt)}let J=U.length;function lt(dt,St,Mt){let wt,At,Ut,Ot=dt.x-St.x,Wt=dt.y-St.y,Ft=Mt.x-dt.x,j=Mt.y-dt.y,Kt=Ot*Ot+Wt*Wt,Yt=Ot*j-Wt*Ft;if(Math.abs(Yt)>Number.EPSILON){let B=Math.sqrt(Kt),T=Math.sqrt(Ft*Ft+j*j),st=St.x-Wt/B,ut=St.y+Ot/B,pt=Mt.x-j/T,H=Mt.y+Ft/T,b=((pt-st)*j-(H-ut)*Ft)/(Ot*j-Wt*Ft);wt=st+Ot*b-dt.x,At=ut+Wt*b-dt.y;let M=wt*wt+At*At;if(M<=2)return new Nt(wt,At);Ut=Math.sqrt(M/2)}else{let B=!1;Ot>Number.EPSILON?Ft>Number.EPSILON&&(B=!0):Ot<-Number.EPSILON?Ft<-Number.EPSILON&&(B=!0):Math.sign(Wt)===Math.sign(j)&&(B=!0),B?(wt=-Wt,At=Ot,Ut=Math.sqrt(Kt)):(wt=Ot,At=Wt,Ut=Math.sqrt(Kt/2))}return new Nt(wt/Ut,At/Ut)}let tt=[];for(let dt=0,St=q.length,Mt=St-1,wt=dt+1;dt<St;dt++,Mt++,wt++)Mt===St&&(Mt=0),wt===St&&(wt=0),tt[dt]=lt(q[dt],q[Mt],q[wt]);let it=[],at,Ct=tt.concat();for(let dt=0,St=z;dt<St;dt++){let Mt=L[dt];at=[];for(let wt=0,At=Mt.length,Ut=At-1,Ot=wt+1;wt<At;wt++,Ut++,Ot++)Ut===At&&(Ut=0),Ot===At&&(Ot=0),at[wt]=lt(Mt[wt],Mt[Ut],Mt[Ot]);it.push(at),Ct=Ct.concat(at)}let Lt;if(p===0)Lt=Yn.triangulateShape(q,L);else{let dt=[],St=[];for(let Mt=0;Mt<p;Mt++){let wt=Mt/p,At=f*Math.cos(wt*Math.PI/2),Ut=g*Math.sin(wt*Math.PI/2)+x;for(let Ot=0,Wt=q.length;Ot<Wt;Ot++){let Ft=k(q[Ot],tt[Ot],Ut);ct(Ft.x,Ft.y,-At),wt===0&&dt.push(Ft)}for(let Ot=0,Wt=z;Ot<Wt;Ot++){let Ft=L[Ot];at=it[Ot];let j=[];for(let Kt=0,Yt=Ft.length;Kt<Yt;Kt++){let B=k(Ft[Kt],at[Kt],Ut);ct(B.x,B.y,-At),wt===0&&j.push(B)}wt===0&&St.push(j)}}Lt=Yn.triangulateShape(dt,St)}let Et=Lt.length,Tt=g+x;for(let dt=0;dt<J;dt++){let St=h?k(U[dt],Ct[dt],Tt):U[dt];_?(A.copy(v.normals[0]).multiplyScalar(St.x),w.copy(v.binormals[0]).multiplyScalar(St.y),S.copy(E[0]).add(A).add(w),ct(S.x,S.y,S.z)):ct(St.x,St.y,0)}for(let dt=1;dt<=u;dt++)for(let St=0;St<J;St++){let Mt=h?k(U[St],Ct[St],Tt):U[St];_?(A.copy(v.normals[dt]).multiplyScalar(Mt.x),w.copy(v.binormals[dt]).multiplyScalar(Mt.y),S.copy(E[dt]).add(A).add(w),ct(S.x,S.y,S.z)):ct(Mt.x,Mt.y,d/u*dt)}for(let dt=p-1;dt>=0;dt--){let St=dt/p,Mt=f*Math.cos(St*Math.PI/2),wt=g*Math.sin(St*Math.PI/2)+x;for(let At=0,Ut=q.length;At<Ut;At++){let Ot=k(q[At],tt[At],wt);ct(Ot.x,Ot.y,d+Mt)}for(let At=0,Ut=L.length;At<Ut;At++){let Ot=L[At];at=it[At];for(let Wt=0,Ft=Ot.length;Wt<Ft;Wt++){let j=k(Ot[Wt],at[Wt],wt);_?ct(j.x,j.y+E[u-1].y,E[u-1].x+Mt):ct(j.x,j.y,d+Mt)}}}$(),X();function $(){let dt=s.length/3;if(h){let St=0,Mt=J*St;for(let wt=0;wt<Et;wt++){let At=Lt[wt];xt(At[2]+Mt,At[1]+Mt,At[0]+Mt)}St=u+p*2,Mt=J*St;for(let wt=0;wt<Et;wt++){let At=Lt[wt];xt(At[0]+Mt,At[1]+Mt,At[2]+Mt)}}else{for(let St=0;St<Et;St++){let Mt=Lt[St];xt(Mt[2],Mt[1],Mt[0])}for(let St=0;St<Et;St++){let Mt=Lt[St];xt(Mt[0]+J*u,Mt[1]+J*u,Mt[2]+J*u)}}n.addGroup(dt,s.length/3-dt,0)}function X(){let dt=s.length/3,St=0;Q(q,St),St+=q.length;for(let Mt=0,wt=L.length;Mt<wt;Mt++){let At=L[Mt];Q(At,St),St+=At.length}n.addGroup(dt,s.length/3-dt,1)}function Q(dt,St){let Mt=dt.length;for(;--Mt>=0;){let wt=Mt,At=Mt-1;At<0&&(At=dt.length-1);for(let Ut=0,Ot=u+p*2;Ut<Ot;Ut++){let Wt=J*Ut,Ft=J*(Ut+1),j=St+wt+Wt,Kt=St+At+Wt,Yt=St+At+Ft,B=St+wt+Ft;_t(j,Kt,Yt,B)}}}function ct(dt,St,Mt){c.push(dt),c.push(St),c.push(Mt)}function xt(dt,St,Mt){vt(dt),vt(St),vt(Mt);let wt=s.length/3,At=y.generateTopUV(n,s,wt-3,wt-2,wt-1);Rt(At[0]),Rt(At[1]),Rt(At[2])}function _t(dt,St,Mt,wt){vt(dt),vt(St),vt(wt),vt(St),vt(Mt),vt(wt);let At=s.length/3,Ut=y.generateSideWallUV(n,s,At-6,At-3,At-2,At-1);Rt(Ut[0]),Rt(Ut[1]),Rt(Ut[3]),Rt(Ut[1]),Rt(Ut[2]),Rt(Ut[3])}function vt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function Rt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bu[s.type]().fromJSON(s)),new i(n,t.options)}},Q0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Nt(r,o),new Nt(a,c),new Nt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Nt(o,1-c),new Nt(l,1-d),new Nt(h,1-g),new Nt(x,1-m)]:[new Nt(a,1-c),new Nt(u,1-d),new Nt(f,1-g),new Nt(p,1-m)]}};function tx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bo=class i extends ce{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,d=new G,h=new Nt,f=new G,g=new G,x=new G,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let E=n+y*u*s,_=Math.sin(E),v=Math.cos(E);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*_,d.y=t[w].y,d.z=t[w].x*v,o.push(d.x,d.y,d.z),h.x=y/e,h.y=w/(t.length-1),a.push(h.x,h.y);let A=c[3*w+0]*_,S=c[3*w+1],P=c[3*w+0]*v;l.push(A,S,P)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){let _=E+y*t.length,v=_,w=_+t.length,A=_+t.length+1,S=_+1;r.push(v,w,S),r.push(A,S,w)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Hi=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let y=m*h-o;for(let E=0;E<l;E++){let _=E*d-r;g.push(_,-y,0),x.push(0,0,1),p.push(E/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let E=y+l*m,_=y+l*(m+1),v=y+1+l*(m+1),w=y+1+l*m;f.push(E,_,w),f.push(_,v,w)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},So=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],d=t,h=(e-t)/s,f=new G,g=new Nt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let y=m+p,E=y,_=y+n+1,v=y+n+2,w=y+1;a.push(E,_,w),a.push(_,v,w)}}this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},rs=class i extends ce{constructor(t=new Fn([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(o,2));function l(u){let d=s.length/3,h=u.extractPoints(e),f=h.shape,g=h.holes;Yn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];Yn.isClockWise(y)===!0&&(g[p]=y.reverse())}let x=Yn.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){let y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=x.length;p<m;p++){let y=x[p],E=y[0]+d,_=y[1]+d,v=y[2]+d;n.push(E,_,v),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ex(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function ex(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Le=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new G,h=new G,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],E=m/n,_=o+E*a,v=t*Math.cos(_),w=Math.sqrt(t*t-v*v),A=0;m===0&&o===0?A=.5/e:m===n&&c===Math.PI&&(A=-.5/e);for(let S=0;S<=e;S++){let P=S/e,U=s+P*r;d.x=-w*Math.cos(U),d.y=v,d.z=w*Math.sin(U),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(P+A,1-E),y.push(l++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let E=u[m][y+1],_=u[m][y],v=u[m+1][y],w=u[m+1][y+1];(m!==0||o>0)&&f.push(E,_,w),(m!==n-1||c<Math.PI)&&f.push(_,v,w)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mn=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new G,f=new G,g=new G;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,E=(s+1)*(x-1)+p,_=(s+1)*x+p;c.push(m,y,_),c.push(y,E,_)}this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Mo=class extends ce{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new G,r=new G;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let d=c[l],h=d.start,f=d.count;for(let g=h,x=h+f;g<x;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),y=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),Of(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,d=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Of(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Of(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Ds(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Bf(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Bf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Ds(i[e]);for(let s in n)t[s]=n[s]}return t}function Bf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function nx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ku(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Ho={clone:Ds,merge:gn},ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=nx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tc=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oe=class extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Sr=class extends ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ec=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nc=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function nr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function du(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ic=class extends os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xu,endingEnd:xu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yu:r=t,a=2*e-n;break;case _u:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yu:o=t,c=2*n-e;break;case _u:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,y=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,E=(-1-f)*p+(1.5+f)*x+.5*g,_=f*p-f*x;for(let v=0;v!==a;++v)r[v]=m*o[u+v]+y*o[l+v]+E*o[c+v]+_*o[d+v];return r}},sc=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}},rc=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},oc=class extends os{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let h=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=f*h+g*2,y=d[m],E=d[m+1],_=t*h+g*2,v=u[_],w=u[_+1],A=ox(n,e,y,v,s);r[g]=Ud(A,x,E,w,p)}return r}};function Ud(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function rx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ox(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ud(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=rx(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nr(e,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:nr(t.times,Array),values:nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),du(t.settings)&&(n.settings={inTangents:nr(t.settings.inTangents,Array),outTangents:nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case za:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break;case gu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return gu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;du(this.settings)&&(kf(this.settings.inTangents,t),kf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){re("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){re("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&qg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){re("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,du(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function kf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=za;var as=class extends On{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Qr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};ac.prototype.ValueTypeName="color";var cc=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};cc.prototype.ValueTypeName="number";var lc=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},wo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends On{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Qr;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};uc.prototype.ValueTypeName="vector";var hc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fd=new hc,fc=class{constructor(t){this.manager=t!==void 0?t:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Is=class extends Mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},pu=new _e,zf=new G,Hf=new G,Eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(zf),Hf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){pu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(pu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===lr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(pu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Aa=new G,Ra=new en,pi=new G,To=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Aa,Ra,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Aa,Ra,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new G,Vf=new Nt,Gf=new Nt,bn=class extends To{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,Vf,Gf),e.subVectors(Gf,Vf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Eu=class extends Eo{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}},Ao=class extends Mr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ls=class extends To{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tu=class extends Eo{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends Mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ro=class extends ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ir=-90,sr=1,dc=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new bn(ir,sr,t,e);r.layers=this.layers,this.add(r);let o=new bn(ir,sr,t,e);o.layers=this.layers,this.add(o);let a=new bn(ir,sr,t,e);a.layers=this.layers,this.add(a);let c=new bn(ir,sr,t,e);c.layers=this.layers,this.add(c);let l=new bn(ir,sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},pc=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qu="\\[\\]\\.:\\/",ax=new RegExp("["+Qu+"]","g"),th="[^"+Qu+"]",cx="[^"+Qu.replace("\\.","")+"]",lx=/((?:WC+[\/:])*)/.source.replace("WC",th),ux=/(WCOD+)?/.source.replace("WCOD",cx),hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),dx=new RegExp("^"+lx+ux+hx+fx+"$"),px=["material","materials","bones","map"],Au=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(t){let e=dx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;re("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Au;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bw=new Float32Array(1);var hs=class extends ao{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Wf=new _e,fs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ts(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(t,e=!0,n=[]){return Ru(t,this,n,e),n.sort(Xf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ru(t[s],this,n,e);return n.sort(Xf),n}};function Xf(i,t){return i.distance-t.distance}function Ru(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ru(r[o],t,e,!0)}}var Cu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Yf=new G,Ca=new G,rr=new G,or=new G,mu=new G,mx=new G,gx=new G,Co=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Yf.subVectors(t,this.start),Ca.subVectors(this.end,this.start);let n=Ca.dot(Ca);if(n===0)return 0;let r=Ca.dot(Yf)/n;return e&&(r=le(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=mx,n=gx){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;rr.subVectors(l,a),or.subVectors(u,c),mu.subVectors(a,c);let d=rr.dot(rr),h=or.dot(or),f=or.dot(mu);if(d<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(d<=s)r=0,o=f/h,o=le(o,0,1);else{let g=rr.dot(mu);if(h<=s)o=0,r=le(-g/d,0,1);else{let x=rr.dot(or),p=d*h-x*x;p!==0?r=le((x*f-g*h)/p,0,1):r=0,o=(x*r+f)/h,o<0?(o=0,r=le(-g/d,0,1)):o>1&&(o=1,r=le((x-g)/d,0,1))}}return e.copy(a).addScaledVector(rr,r),n.copy(c).addScaledVector(or,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function eh(i,t,e,n){let s=xx(n);switch(e){case Yu:return i*t;case Sc:return i*t/s.components*s.byteLength;case Mc:return i*t/s.components*s.byteLength;case xs:return i*t*2/s.components*s.byteLength;case wc:return i*t*2/s.components*s.byteLength;case qu:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case Ec:return i*t*4/s.components*s.byteLength;case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:case Cc:return Math.max(i,16)*Math.max(t,8)/4;case Tc:case Rc:return Math.max(i,8)*Math.max(t,8)/2;case Ic:case Pc:case Nc:case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Bo:case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jc:case jc:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qc:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ko:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xx(i){switch(i){case In:case Vu:return{byteLength:1,components:1};case Tr:case Gu:case oi:return{byteLength:2,components:1};case vc:case bc:return{byteLength:2,components:4};case ri:case _c:case Zn:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sx(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yx=`#define PI 3.141592653589793
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
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
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
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
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
#endif`,by=`uniform sampler2D dfgLUT;
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
}`,Sy=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ny=`#if defined( USE_POINTS_UV )
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
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,By=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
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
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c_=`float getShadowMask() {
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
}`,l_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
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
#endif`,h_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,I_=`#if DEPTH_PACKING == 3200
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
}`,P_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,F_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,B_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,z_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,V_=`#define MATCAP
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
}`,G_=`#define NORMAL
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
}`,W_=`#define NORMAL
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
}`,X_=`#define PHONG
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
}`,Y_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,Z_=`#define STANDARD
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
}`,$_=`#define TOON
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
}`,J_=`#define TOON
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
}`,j_=`uniform float size;
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
}`,K_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,tv=`uniform vec3 color;
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
}`,ev=`uniform float rotation;
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
}`,nv=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Mx,alphahash_pars_fragment:wx,alphamap_fragment:Ex,alphamap_pars_fragment:Tx,alphatest_fragment:Ax,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:Ix,batching_pars_vertex:Px,batching_vertex:Lx,begin_vertex:Nx,beginnormal_vertex:Dx,bsdfs:Ux,iridescence_fragment:Fx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:Hx,color_fragment:Vx,color_pars_fragment:Gx,color_pars_vertex:Wx,color_vertex:Xx,common:Yx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:$x,displacementmap_vertex:Jx,emissivemap_fragment:jx,emissivemap_pars_fragment:Kx,colorspace_fragment:Qx,colorspace_pars_fragment:ty,envmap_fragment:ey,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:sy,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:oy,fog_pars_vertex:ay,fog_fragment:cy,fog_pars_fragment:ly,gradientmap_pars_fragment:uy,lightmap_pars_fragment:hy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:dy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:xy,lights_phong_fragment:yy,lights_phong_pars_fragment:_y,lights_physical_fragment:vy,lights_physical_pars_fragment:by,lights_fragment_begin:Sy,lights_fragment_maps:My,lights_fragment_end:wy,lightprobes_pars_fragment:Ey,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:Cy,map_fragment:Iy,map_pars_fragment:Py,map_particle_fragment:Ly,map_particle_pars_fragment:Ny,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Fy,morphcolor_vertex:Oy,morphnormal_vertex:By,morphtarget_pars_vertex:ky,morphtarget_vertex:zy,normal_fragment_begin:Hy,normal_fragment_maps:Vy,normal_pars_fragment:Gy,normal_pars_vertex:Wy,normal_vertex:Xy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Jy,opaque_fragment:jy,packing:Ky,premultiplied_alpha_fragment:Qy,project_vertex:t_,dithering_fragment:e_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:c_,skinbase_vertex:l_,skinning_pars_vertex:u_,skinning_vertex:h_,skinnormal_vertex:f_,specularmap_fragment:d_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:x_,transmission_pars_fragment:y_,uv_pars_fragment:__,uv_pars_vertex:v_,uv_vertex:b_,worldpos_vertex:S_,background_vert:M_,background_frag:w_,backgroundCube_vert:E_,backgroundCube_frag:T_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:I_,distance_vert:P_,distance_frag:L_,equirect_vert:N_,equirect_frag:D_,linedashed_vert:U_,linedashed_frag:F_,meshbasic_vert:O_,meshbasic_frag:B_,meshlambert_vert:k_,meshlambert_frag:z_,meshmatcap_vert:H_,meshmatcap_frag:V_,meshnormal_vert:G_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:Y_,meshphysical_vert:q_,meshphysical_frag:Z_,meshtoon_vert:$_,meshtoon_frag:J_,points_vert:j_,points_frag:K_,shadow_vert:Q_,shadow_frag:tv,sprite_vert:ev,sprite_frag:nv},Bt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},wn={basic:{uniforms:gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:gn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:gn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:gn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new qt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:gn([Bt.points,Bt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:gn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:gn([Bt.common,Bt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:gn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:gn([Bt.sprite,Bt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:gn([Bt.common,Bt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:gn([Bt.lights,Bt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};wn.physical={uniforms:gn([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var sl={r:0,b:0,g:0},iv=new _e,rp=new ue;rp.set(-1,0,0,0,1,0,0,0,1);function sv(i,t,e,n,s,r){let o=new qt(0),a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let _=y.backgroundBlurriness>0;E=t.get(E,_)}return E}function g(y){let E=!1,_=f(y);_===null?p(o,a):_&&_.isColor&&(p(_,1),E=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,E){let _=f(E);_&&(_.isCubeTexture||_.mapping===Lo)?(l===void 0&&(l=new he(new Te(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Ds(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rp),l.material.toneMapped=xe.getTransfer(_.colorSpace)!==we,(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new he(new Hi(2,2),new Ze({name:"BackgroundMaterial",uniforms:Ds(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=xe.getTransfer(_.colorSpace)!==we,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(sl,Ku(i)),e.buffers.color.setClear(sl.r,sl.g,sl.b,E,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:x,dispose:m}}function rv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(L,O,F,z,q){let k=!1,J=d(L,z,F,O);r!==J&&(r=J,l(r.object)),k=f(L,z,F,q),k&&g(L,z,F,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(L,O,F,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,O,F,z){let q=z.wireframe===!0,k=n[O.id];k===void 0&&(k={},n[O.id]=k);let J=L.isInstancedMesh===!0?L.id:0,lt=k[J];lt===void 0&&(lt={},k[J]=lt);let tt=lt[F.id];tt===void 0&&(tt={},lt[F.id]=tt);let it=tt[q];return it===void 0&&(it=h(c()),tt[q]=it),it}function h(L){let O=[],F=[],z=[];for(let q=0;q<e;q++)O[q]=0,F[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:z,object:L,attributes:{},index:null}}function f(L,O,F,z){let q=r.attributes,k=O.attributes,J=0,lt=F.getAttributes();for(let tt in lt)if(lt[tt].location>=0){let at=q[tt],Ct=k[tt];if(Ct===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),at===void 0||at.attribute!==Ct||Ct&&at.data!==Ct.data)return!0;J++}return r.attributesNum!==J||r.index!==z}function g(L,O,F,z){let q={},k=O.attributes,J=0,lt=F.getAttributes();for(let tt in lt)if(lt[tt].location>=0){let at=k[tt];at===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(at=L.instanceColor));let Ct={};Ct.attribute=at,at&&at.data&&(Ct.data=at.data),q[tt]=Ct,J++}r.attributes=q,r.attributesNum=J,r.index=z}function x(){let L=r.newAttributes;for(let O=0,F=L.length;O<F;O++)L[O]=0}function p(L){m(L,0)}function m(L,O){let F=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;F[L]=1,z[L]===0&&(i.enableVertexAttribArray(L),z[L]=1),q[L]!==O&&(i.vertexAttribDivisor(L,O),q[L]=O)}function y(){let L=r.newAttributes,O=r.enabledAttributes;for(let F=0,z=O.length;F<z;F++)O[F]!==L[F]&&(i.disableVertexAttribArray(F),O[F]=0)}function E(L,O,F,z,q,k,J){J===!0?i.vertexAttribIPointer(L,O,F,q,k):i.vertexAttribPointer(L,O,F,z,q,k)}function _(L,O,F,z){x();let q=z.attributes,k=F.getAttributes(),J=O.defaultAttributeValues;for(let lt in k){let tt=k[lt];if(tt.location>=0){let it=q[lt];if(it===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&(it=L.instanceColor)),it!==void 0){let at=it.normalized,Ct=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;let Et=Lt.buffer,Tt=Lt.type,$=Lt.bytesPerElement,X=Tt===i.INT||Tt===i.UNSIGNED_INT||it.gpuType===_c;if(it.isInterleavedBufferAttribute){let Q=it.data,ct=Q.stride,xt=it.offset;if(Q.isInstancedInterleavedBuffer){for(let _t=0;_t<tt.locationSize;_t++)m(tt.location+_t,Q.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<tt.locationSize;_t++)p(tt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let _t=0;_t<tt.locationSize;_t++)E(tt.location+_t,Ct/tt.locationSize,Tt,at,ct*$,(xt+Ct/tt.locationSize*_t)*$,X)}else{if(it.isInstancedBufferAttribute){for(let Q=0;Q<tt.locationSize;Q++)m(tt.location+Q,it.meshPerAttribute);L.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Q=0;Q<tt.locationSize;Q++)p(tt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Q=0;Q<tt.locationSize;Q++)E(tt.location+Q,Ct/tt.locationSize,Tt,at,Ct*$,Ct/tt.locationSize*Q*$,X)}}else if(J!==void 0){let at=J[lt];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(tt.location,at);break;case 3:i.vertexAttrib3fv(tt.location,at);break;case 4:i.vertexAttrib4fv(tt.location,at);break;default:i.vertexAttrib1fv(tt.location,at)}}}}y()}function v(){P();for(let L in n){let O=n[L];for(let F in O){let z=O[F];for(let q in z){let k=z[q];for(let J in k)u(k[J].object),delete k[J];delete z[q]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let F in O){let z=O[F];for(let q in z){let k=z[q];for(let J in k)u(k[J].object),delete k[J];delete z[q]}}delete n[L.id]}function A(L){for(let O in n){let F=n[O];for(let z in F){let q=F[z];if(q[L.id]===void 0)continue;let k=q[L.id];for(let J in k)u(k[J].object),delete k[J];delete q[L.id]}}}function S(L){for(let O in n){let F=n[O],z=L.isInstancedMesh===!0?L.id:0,q=F[z];if(q!==void 0){for(let k in q){let J=q[k];for(let lt in J)u(J[lt].object),delete J[lt];delete q[k]}delete F[z],Object.keys(F).length===0&&delete n[O]}}}function P(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:U,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function ov(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function av(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==$n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let S=A===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==In&&A!==Zn&&!S&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:_,maxSamples:v,samples:w}}function cv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Dn,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let y=r?0:n,E=y*4,_=m.clippingState||null;c.value=_,_=u(g,h,E,f);for(let v=0;v!==E;++v)_[v]=e[v];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,_=f;E!==x;++E,_+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Cr=4,lv=6,uv=20,hv=256,Vo=new ls,Od=new qt,nh=null,ih=0,sh=0,rh=!1,fv=new G,Us=new G,ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=fv}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:oi,format:$n,colorSpace:to,depthBuffer:!1},s=Bd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dv(r)),this._blurMaterial=mv(r,t,e),this._ggxMaterial=pv(r,t,e)}return s}_compileMaterial(t){let e=new he(new ce,t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,n,s,r){let c=new bn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Od),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new Te,new Ve({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(Od),m=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):_===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let v=this._cubeSize;Rr(s,_*v,E>2?v:0,v,v),d.setRenderTarget(s),m&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ps||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Rr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-Cr?n-g+Cr:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Rr(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Vo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Rr(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(a,Vo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Cr?s-this._lodMax+Cr:0),h=4*(this._cubeSize-u);Rr(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Vo)}};function dv(i){let t=[],e=[],n=i,s=i-Cr+1+lv;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let m=0;m<d;m++){let y=m%3*2/3-1,E=m>2?0:-1,_=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];g.set(_,f*h*m);for(let v=0;v<h;v++){let w=u[v*2]*2-1,A=u[v*2+1]*2-1;m===0?Us.set(1,A,w):m===1?Us.set(-w,1,-A):m===2?Us.set(-w,A,1):m===3?Us.set(-1,A,-w):m===4?Us.set(-w,-1,A):Us.set(w,A,-1),Us.toArray(x,(m*h+v)*f)}}let p=new ce;p.setAttribute("position",new be(g,f)),p.setAttribute("outputDirection",new be(x,f)),e.push(new he(p,null)),n>Cr&&n--}return{lodMeshes:e,sizeLods:t}}function Bd(i,t,e){let n=new An(i,t,e);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pv(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function mv(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:uv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function kd(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function zd(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var al=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:bi});r.uniforms.tEquirect.value=e;let o=new he(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=rn),new dc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function gv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===gc||f===xc)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new al(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===gc||f===xc,x=f===ps||f===Ns;if(g||x){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ol(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return g&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new ol(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===gc?h.mapping=ps:f===xc&&(h.mapping=Ns),h}function c(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function xv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ws("WebGLRenderer: "+n+" extension not supported."),s}}}function yv(i,t,e,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let E=0,_=y.length;E<_;E+=3){let v=y[E+0],w=y[E+1],A=y[E+2];h.push(v,w,w,A,A,v)}}else{let y=g.array;x=g.version;for(let E=0,_=y.length/3-1;E<_;E+=3){let v=E+0,w=E+1,A=E+2;h.push(v,w,w,A,A,v)}}let p=new(g.count>=65535?oo:ro)(h,1);p.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function _v(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function vv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bv(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let P=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let _=a.attributes.position.count*E,v=1;_>t.maxTextureSize&&(v=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*v*4*d),A=new so(w,_,v,d);A.type=Zn,A.needsUpdate=!0;let S=E*4;for(let U=0;U<d;U++){let L=p[U],O=m[U],F=y[U],z=_*v*4*U;for(let q=0;q<L.count;q++){let k=q*S;f===!0&&(s.fromBufferAttribute(L,q),w[z+k+0]=s.x,w[z+k+1]=s.y,w[z+k+2]=s.z,w[z+k+3]=0),g===!0&&(s.fromBufferAttribute(O,q),w[z+k+4]=s.x,w[z+k+5]=s.y,w[z+k+6]=s.z,w[z+k+7]=0),x===!0&&(s.fromBufferAttribute(F,q),w[z+k+8]=s.x,w[z+k+9]=s.y,w[z+k+10]=s.z,w[z+k+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new Nt(_,v)},n.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Sv(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Mv={[Uu]:"LINEAR_TONE_MAPPING",[Fu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[zu]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function wv(i,t,e,n,s,r){let o=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ce;l.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jt([0,2,0,0,2,0],2));let u=new tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new he(l,u),h=new ls(-1,1,1,-1,0,1),f=null,g=null,x=!1,p,m=null,y=[],E=!1;this.setSize=function(_,v){o.setSize(_,v),a!==null&&a.setSize(_,v),c!==null&&c.setSize(_,v);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(_,v)}},this.setEffects=function(_){y=_,E=y.length>0&&y[0].isRenderPass===!0;let v=o.width,w=o.height;y.length>0&&a===null&&(a=new An(v,w,{type:oi,depthBuffer:!1,stencilBuffer:!1}),c=new An(v,w,{type:oi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let S=y[A];S.setSize&&S.setSize(v,w)}},this.begin=function(_,v){if(x||_.toneMapping===si&&y.length===0)return!1;if(m=v,v!==null){let w=v.width,A=v.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return E===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=si,!0},this.hasRenderPass=function(){return E},this.end=function(_,v){_.toneMapping=p,x=!0;let w=o,A=a;for(let S=0;S<y.length;S++){let P=y[S];P.enabled!==!1&&(P.render(_,A,w,v),P.needsSwap!==!1&&(w=A,A=A===a?c:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,u.defines={},xe.getTransfer(f)===we&&(u.defines.SRGB_TRANSFER="");let S=Mv[g];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(d,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var op=new Sn,ch=new ss(1,1),ap=new so,cp=new Ga,lp=new uo,Hd=[],Vd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hd[s];if(r===void 0&&(r=new Float32Array(s),Hd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ul(i,t){let e=Vd[t];e===void 0&&(e=new Int32Array(t),Vd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ev(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function Rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function Cv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),Je(e,n)}}function Iv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),Je(e,n)}}function Pv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if($e(e,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),Je(e,n)}}function Lv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function Fv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function Bv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function zv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=e.isReversedDepthBuffer()?il:nl,r=ch):r=op,e.setTexture2D(t||r,s)}function Hv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cp,s)}function Vv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lp,s)}function Gv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ap,s)}function Wv(i){switch(i){case 5126:return Ev;case 35664:return Tv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Iv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Nv;case 35668:case 35672:return Dv;case 35669:case 35673:return Uv;case 5125:return Fv;case 36294:return Ov;case 36295:return Bv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}function Xv(i,t){i.uniform1fv(this.addr,t)}function Yv(i,t){let e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function qv(i,t){let e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function Zv(i,t){let e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function $v(i,t){let e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jv(i,t){let e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jv(i,t){let e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kv(i,t){i.uniform1iv(this.addr,t)}function Qv(i,t){i.uniform2iv(this.addr,t)}function tb(i,t){i.uniform3iv(this.addr,t)}function eb(i,t){i.uniform4iv(this.addr,t)}function nb(i,t){i.uniform1uiv(this.addr,t)}function ib(i,t){i.uniform2uiv(this.addr,t)}function sb(i,t){i.uniform3uiv(this.addr,t)}function rb(i,t){i.uniform4uiv(this.addr,t)}function ob(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ch:o=op;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function ab(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cp,r[o])}function cb(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||lp,r[o])}function lb(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ap,r[o])}function ub(i){switch(i){case 5126:return Xv;case 35664:return Yv;case 35665:return qv;case 35666:return Zv;case 35674:return $v;case 35675:return Jv;case 35676:return jv;case 5124:case 35670:return Kv;case 35667:case 35671:return Qv;case 35668:case 35672:return tb;case 35669:case 35673:return eb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return lb}}var lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wv(e.type)}},uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ub(e.type)}},hh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Yd(i,t){i.seq.push(t),i.map[t.id]=t}function hb(i,t,e){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),o=oh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yd(e,l===void 0?new lh(a,i,t):new uh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new hh(a),Yd(e,d)),e=d}}}var Ir=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);hb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function qd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var fb=37297,db=0;function pb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zd=new ue;function mb(i){xe._getMatrix(Zd,xe.workingColorSpace,i);let t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case eo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $d(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+pb(i.getShaderSource(t),a)}else return r}function gb(i,t){let e=mb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var xb={[Uu]:"Linear",[Fu]:"Reinhard",[Ou]:"Cineon",[Po]:"ACESFilmic",[ku]:"AgX",[zu]:"Neutral",[Bu]:"Custom"};function yb(i,t){let e=xb[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rl=new G;function _b(){xe.getLuminanceCoefficients(rl);let i=rl.x.toFixed(4),t=rl.y.toFixed(4),e=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function bb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wo(i){return i!==""}function Jd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(Mb,Eb)}var wb=new Map;function Eb(i,t){let e=de[t];if(e===void 0){let n=wb.get(t);if(n!==void 0)e=de[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fh(e)}var Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(Tb,Ab)}function Ab(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Rb={[Ps]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function Cb(i){return Rb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ib={[ps]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE_UV"};function Pb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ib[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lb={[Ns]:"ENVMAP_MODE_REFRACTION"};function Nb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Db={[mc]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function Ub(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Db[i.combine]||"ENVMAP_BLENDING_NONE"}function Fb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ob(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Cb(e),l=Pb(e),u=Nb(e),d=Ub(e),h=Fb(e),f=vb(e),g=bb(r),x=s.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`)):(p=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),m=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?de.tonemapping_pars_fragment:"",e.toneMapping!==si?yb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,gb("linearToOutputTexel",e.outputColorSpace),_b(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),o=fh(o),o=Jd(o,e),o=jd(o,e),a=fh(a),a=Jd(a,e),a=jd(a,e),o=Kd(o),a=Kd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=y+p+o,_=y+m+a,v=qd(s,s.VERTEX_SHADER,E),w=qd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,v),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(v)||"",z=s.getShaderInfoLog(w)||"",q=O.trim(),k=F.trim(),J=z.trim(),lt=!0,tt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,w);else{let it=$d(s,v,"vertex"),at=$d(s,w,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+it+`
`+at)}else q!==""?ne("WebGLProgram: Program Info Log:",q):(k===""||J==="")&&(tt=!1);tt&&(L.diagnostics={runnable:lt,programLog:q,vertexShader:{log:k,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(v),s.deleteShader(w),S=new Ir(s,x),P=Sb(s,x)}let S;this.getUniforms=function(){return S===void 0&&A(this),S};let P;this.getAttributes=function(){return P===void 0&&A(this),P};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,fb)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=db++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=w,this}var Bb=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ph(t),e.set(t,n)),n}},ph=class{constructor(t){this.id=Bb++,this.code=t,this.usedTimes=0}};function kb(i){return i===xs||i===Bo||i===ko}function zb(i,t,e,n,s,r){let o=new dr,a=new dh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function x(S,P,U,L,O,F){let z=L.fog,q=O.geometry,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,J=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,lt=t.get(S.envMap||k,J),tt=lt&&lt.mapping===Lo?lt.image.height:null,it=f[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&ne("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));let at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ct=at!==void 0?at.length:0,Lt=0;q.morphAttributes.position!==void 0&&(Lt=1),q.morphAttributes.normal!==void 0&&(Lt=2),q.morphAttributes.color!==void 0&&(Lt=3);let Et,Tt,$,X;if(it){let ee=wn[it];Et=ee.vertexShader,Tt=ee.fragmentShader}else{Et=S.vertexShader,Tt=S.fragmentShader;let ee=a.getVertexShaderStage(S),Ht=a.getFragmentShaderStage(S);a.update(S,ee,Ht),$=ee.id,X=Ht.id}let Q=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),xt=O.isInstancedMesh===!0,_t=O.isBatchedMesh===!0,vt=!!S.map,Rt=!!S.matcap,dt=!!lt,St=!!S.aoMap,Mt=!!S.lightMap,wt=!!S.bumpMap&&S.wireframe===!1,At=!!S.normalMap,Ut=!!S.displacementMap,Ot=!!S.emissiveMap,Wt=!!S.metalnessMap,Ft=!!S.roughnessMap,j=S.anisotropy>0,Kt=S.clearcoat>0,Yt=S.dispersion>0,B=S.retroreflectivity>0,T=S.iridescence>0,st=S.sheen>0,ut=S.transmission>0,pt=j&&!!S.anisotropyMap,H=Kt&&!!S.clearcoatMap,b=Kt&&!!S.clearcoatNormalMap,M=Kt&&!!S.clearcoatRoughnessMap,R=T&&!!S.iridescenceMap,D=T&&!!S.iridescenceThicknessMap,N=st&&!!S.sheenColorMap,V=st&&!!S.sheenRoughnessMap,Y=!!S.specularMap,rt=!!S.specularColorMap,W=!!S.specularIntensityMap,ot=ut&&!!S.transmissionMap,C=ut&&!!S.thicknessMap,K=!!S.gradientMap,Z=!!S.alphaMap,mt=S.alphaTest>0,bt=!!S.alphaHash,gt=!!S.extensions,It=si;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(It=i.toneMapping);let Dt={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Et,fragmentShader:Tt,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:_t,batchingColor:_t&&O._colorsTexture!==null,instancing:xt,instancingColor:xt&&O.instanceColor!==null,instancingMorph:xt&&O.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:vt,matcap:Rt,envMap:dt,envMapMode:dt&&lt.mapping,envMapCubeUVHeight:tt,aoMap:St,lightMap:Mt,bumpMap:wt,normalMap:At,displacementMap:Ut,emissiveMap:Ot,normalMapObjectSpace:At&&S.normalMapType===yd,normalMapTangentSpace:At&&S.normalMapType===zo,packedNormalMap:At&&S.normalMapType===zo&&kb(S.normalMap.format),metalnessMap:Wt,roughnessMap:Ft,anisotropy:j,anisotropyMap:pt,clearcoat:Kt,clearcoatMap:H,clearcoatNormalMap:b,clearcoatRoughnessMap:M,dispersion:Yt,retroreflection:B,iridescence:T,iridescenceMap:R,iridescenceThicknessMap:D,sheen:st,sheenColorMap:N,sheenRoughnessMap:V,specularMap:Y,specularColorMap:rt,specularIntensityMap:W,transmission:ut,transmissionMap:ot,thicknessMap:C,gradientMap:K,opaque:S.transparent===!1&&S.blending===Er&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:mt,alphaHash:bt,combine:S.combine,mapUv:vt&&g(S.map.channel),aoMapUv:St&&g(S.aoMap.channel),lightMapUv:Mt&&g(S.lightMap.channel),bumpMapUv:wt&&g(S.bumpMap.channel),normalMapUv:At&&g(S.normalMap.channel),displacementMapUv:Ut&&g(S.displacementMap.channel),emissiveMapUv:Ot&&g(S.emissiveMap.channel),metalnessMapUv:Wt&&g(S.metalnessMap.channel),roughnessMapUv:Ft&&g(S.roughnessMap.channel),anisotropyMapUv:pt&&g(S.anisotropyMap.channel),clearcoatMapUv:H&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:b&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:M&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:D&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:N&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(S.sheenRoughnessMap.channel),specularMapUv:Y&&g(S.specularMap.channel),specularColorMapUv:rt&&g(S.specularColorMap.channel),specularIntensityMapUv:W&&g(S.specularIntensityMap.channel),transmissionMapUv:ot&&g(S.transmissionMap.channel),thicknessMapUv:C&&g(S.thicknessMap.channel),alphaMapUv:Z&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(At||j),vertexNormals:!!q.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(vt||Z),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||q.attributes.normal===void 0&&At===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Lt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:vt&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:Ot&&S.emissiveMap.isVideoTexture===!0&&xe.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===on,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(S){let P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)P.push(U),P.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(m(P,S),y(P,S),P.push(i.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function m(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numSunLights),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numSunLightShadows),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function y(S,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function E(S){let P=f[S.type],U;if(P){let L=wn[P];U=Ho.clone(L.uniforms)}else U=S.uniforms;return U}function _(S,P){let U=u.get(P);return U!==void 0?++U.usedTimes:(U=new Ob(i,P,S,s),l.push(U),u.set(P,U)),U}function v(S){if(--S.usedTimes===0){let P=l.indexOf(S);l[P]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function w(S){a.remove(S)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:E,acquireProgram:_,releaseProgram:v,releaseShaderCache:w,programs:l,dispose:A}}function Hb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ep(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,x,p,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=p,y.group=m),t++,y}function c(h,f,g,x,p,m,y){y.reversedDepth===!0&&(p=-p);let E=a(h,f,g,x,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function l(h,f,g,x,p,m){let y=a(h,f,g,x,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||Vb),n.length>1&&n.sort(f||tp),s.length>1&&s.sort(f||tp)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Gb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ep,i.set(n,[o])):s>=r.length?(o=new ep,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new qt};break;case"SpotLight":e={position:new G,direction:new G,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Xb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Yb=0;function qb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zb(i){let t=new Wb,e=Xb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new _e,o=new _e;function a(l){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,E=0,_=0,v=0,w=0,A=0,S=0,P=0,U=0;l.sort(qb);for(let O=0,F=l.length;O<F;O++){let z=l[O],q=z.color,k=z.intensity,J=z.distance,lt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===xs?lt=z.shadow.map.texture:lt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=q.r*k,d+=q.g*k,h+=q.b*k;else if(z.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(z.sh.coefficients[tt],k);U++}else if(z.isSunLight){let tt=t.get(z);if(tt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let it=z.shadow,at=e.get(z);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=lt;let Ct=it.getViewportCount();for(let Lt=0;Lt<Ct;Lt++)n.sunShadowMatrix[x+Lt]=it.getMatrix(Lt),n.sunShadowCascade[x+Lt]=it._cascadeData[Lt];x+=Ct,g++}n.sun[f]=tt,f++}else if(z.isDirectionalLight){let tt=t.get(z);if(tt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let it=z.shadow,at=e.get(z);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.directionalShadow[p]=at,n.directionalShadowMap[p]=lt,n.directionalShadowMatrix[p]=z.shadow.matrix,v++}n.directional[p]=tt,p++}else if(z.isSpotLight){let tt=t.get(z);tt.position.setFromMatrixPosition(z.matrixWorld),tt.color.copy(q).multiplyScalar(k),tt.distance=J,tt.coneCos=Math.cos(z.angle),tt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),tt.decay=z.decay,n.spot[y]=tt;let it=z.shadow;if(z.map&&(n.spotLightMap[S]=z.map,S++,it.updateMatrices(z),z.castShadow&&P++),n.spotLightMatrix[y]=it.matrix,z.castShadow){let at=e.get(z);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.spotShadow[y]=at,n.spotShadowMap[y]=lt,A++}y++}else if(z.isRectAreaLight){let tt=t.get(z);tt.color.copy(q).multiplyScalar(k),tt.halfWidth.set(z.width*.5,0,0),tt.halfHeight.set(0,z.height*.5,0),n.rectArea[E]=tt,E++}else if(z.isPointLight){let tt=t.get(z);if(tt.color.copy(z.color).multiplyScalar(z.intensity),tt.distance=z.distance,tt.decay=z.decay,z.castShadow){let it=z.shadow,at=e.get(z);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,n.pointShadow[m]=at,n.pointShadowMap[m]=lt,n.pointShadowMatrix[m]=z.shadow.matrix,w++}n.point[m]=tt,m++}else if(z.isHemisphereLight){let tt=t.get(z);tt.skyColor.copy(z.color).multiplyScalar(k),tt.groundColor.copy(z.groundColor).multiplyScalar(k),n.hemi[_]=tt,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==y||L.rectAreaLength!==E||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==v||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==S||L.numLightProbes!==U)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=E,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=y,L.rectAreaLength=E,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=v,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=S,L.numLightProbes=U,n.version=Yb++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let y=0,E=l.length;y<E;y++){let _=l[y];if(_.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function np(i){let t=new Zb(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function $b(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new np(i),t.set(s,[a])):r>=o.length?(a=new np(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jb=`uniform sampler2D shadow_pass;
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
}`,Kb=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Qb=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],ip=new _e,Go=new G,ah=new G;function t1(i,t,e){let n=new gr,s=new Nt,r=new Nt,o=new Ee,a=new ec,c=new nc,l={},u=e.maxTextureSize,d={[ds]:Mn,[Mn]:ds,[on]:on},h=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Jb,fragmentShader:jb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new he(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ps;let m=this.type;this.render=function(w,A,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===$f&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ps);let P=i.getRenderTarget(),U=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=m!==this.type;F&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(q=>q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,q=w.length;z<q;z++){let k=w[z],J=k.shadow;if(J===void 0){ne("WebGLShadowMap:",k,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let lt=J.getFrameExtents();s.multiply(lt),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,J.mapSize.y=r.y));let tt=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=tt,J.map===null||F===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===wr){if(k.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new An(s.x,s.y,{format:xs,type:oi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),J.map.texture.name=k.name+".shadowMap",J.map.depthTexture=new ss(s.x,s.y,Zn),J.map.depthTexture.name=k.name+".shadowMapDepth",J.map.depthTexture.format=xi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn}else k.isPointLight?(J.map=new al(s.x),J.map.depthTexture=new qa(s.x,ri)):(J.map=new An(s.x,s.y),J.map.depthTexture=new ss(s.x,s.y,ri)),J.map.depthTexture.name=k.name+".shadowMap",J.map.depthTexture.format=xi,this.type===Ps?(J.map.depthTexture.compareFunction=tt?il:nl,J.map.depthTexture.minFilter=rn,J.map.depthTexture.magFilter=rn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=tn,J.map.depthTexture.magFilter=tn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let it=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();k.isPointLight!==!0&&J.updateMatrices(k,S);for(let at=0;at<it;at++){let Ct=J.getCamera(at);if(k.isPointLight){let Lt=J.camera,Et=J.matrix,Tt=k.distance||Lt.far;Tt!==Lt.far&&(Lt.far=Tt,Lt.updateProjectionMatrix()),Go.setFromMatrixPosition(k.matrixWorld),Lt.position.copy(Go),ah.copy(Lt.position),ah.add(Kb[at]),Lt.up.copy(Qb[at]),Lt.lookAt(ah),Lt.updateMatrixWorld(),Et.makeTranslation(-Go.x,-Go.y,-Go.z),ip.multiplyMatrices(Lt.projectionMatrix,Lt.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ip,Lt.coordinateSystem,Lt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,at),i.clear();else{at===0&&(i.setRenderTarget(J.map),i.clear());let Lt=J.getViewport(at);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(o)}n=J.getFrustum(at),_(A,S,Ct,k,this.type)}J.isPointLightShadow!==!0&&this.type===wr&&y(J,S),J.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,U,L)};function y(w,A){let S=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new An(s.x,s.y,{format:xs,type:oi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,S,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,S,f,x,null)}function E(w,A,S,P){let U=null,L=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)U=L;else if(U=S.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=U.uuid,F=A.uuid,z=l[O];z===void 0&&(z={},l[O]=z);let q=z[F];q===void 0&&(q=U.clone(),z[F]=q,A.addEventListener("dispose",v)),U=q}if(U.visible=A.visible,U.wireframe=A.wireframe,P===wr?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:d[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let O=i.properties.get(U);O.light=S}return U}function _(w,A,S,P,U){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===wr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let F=t.update(w),z=w.material;if(Array.isArray(z)){let q=F.groups;for(let k=0,J=q.length;k<J;k++){let lt=q[k],tt=z[lt.materialIndex];if(tt&&tt.visible){let it=E(w,tt,P,U);w.onBeforeShadow(i,w,A,S,F,it,lt),i.renderBufferDirect(S,null,F,it,w,lt),w.onAfterShadow(i,w,A,S,F,it,lt)}}}else if(z.visible){let q=E(w,z,P,U);w.onBeforeShadow(i,w,A,S,F,q,null),i.renderBufferDirect(S,null,F,q,w,null),w.onAfterShadow(i,w,A,S,F,q,null)}}let O=w.children;for(let F=0,z=O.length;F<z;F++)_(O[F],A,S,P,U)}function v(w){w.target.removeEventListener("dispose",v);for(let S in l){let P=l[S],U=w.target.uuid;U in P&&(P[U].dispose(),delete P[U])}}}function e1(i,t){function e(){let C=!1,K=new Ee,Z=null,mt=new Ee(0,0,0,0);return{setMask:function(bt){Z!==bt&&!C&&(i.colorMask(bt,bt,bt,bt),Z=bt)},setLocked:function(bt){C=bt},setClear:function(bt,gt,It,Dt,ee){ee===!0&&(bt*=Dt,gt*=Dt,It*=Dt),K.set(bt,gt,It,Dt),mt.equals(K)===!1&&(i.clearColor(bt,gt,It,Dt),mt.copy(K))},reset:function(){C=!1,Z=null,mt.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,Z=null,mt=null,bt=null;return{setReversed:function(gt){if(K!==gt){let It=t.get("EXT_clip_control");gt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),K=gt;let Dt=bt;bt=null,this.setClear(Dt)}},getReversed:function(){return K},setTest:function(gt){gt?Q(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(gt){Z!==gt&&!C&&(i.depthMask(gt),Z=gt)},setFunc:function(gt){if(K&&(gt=Cd[gt]),mt!==gt){switch(gt){case La:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=gt}},setLocked:function(gt){C=gt},setClear:function(gt){bt!==gt&&(bt=gt,K&&(gt=1-gt),i.clearDepth(gt))},reset:function(){C=!1,Z=null,mt=null,bt=null,K=!1}}}function s(){let C=!1,K=null,Z=null,mt=null,bt=null,gt=null,It=null,Dt=null,ee=null;return{setTest:function(Ht){C||(Ht?Q(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Ht){K!==Ht&&!C&&(i.stencilMask(Ht),K=Ht)},setFunc:function(Ht,ge,ye){(Z!==Ht||mt!==ge||bt!==ye)&&(i.stencilFunc(Ht,ge,ye),Z=Ht,mt=ge,bt=ye)},setOp:function(Ht,ge,ye){(gt!==Ht||It!==ge||Dt!==ye)&&(i.stencilOp(Ht,ge,ye),gt=Ht,It=ge,Dt=ye)},setLocked:function(Ht){C=Ht},setClear:function(Ht){ee!==Ht&&(i.clearStencil(Ht),ee=Ht)},reset:function(){C=!1,K=null,Z=null,mt=null,bt=null,gt=null,It=null,Dt=null,ee=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,E=null,_=null,v=null,w=null,A=null,S=new qt(0,0,0),P=0,U=!1,L=null,O=null,F=null,z=null,q=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,lt=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=lt>=1):tt.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=lt>=2);let it=null,at={},Ct=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Et=new Ee().fromArray(Ct),Tt=new Ee().fromArray(Lt);function $(C,K,Z,mt){let bt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(C,gt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<Z;It++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(K+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return gt}let X={};X[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(cr),wt(!1),At(Iu),Q(i.CULL_FACE),St(bi);function Q(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function ct(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function xt(C,K){return h[C]!==K?(i.bindFramebuffer(C,K),h[C]=K,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=K),!0):!1}function _t(C,K){let Z=g,mt=!1;if(C){Z=f.get(K),Z===void 0&&(Z=[],f.set(K,Z));let bt=C.textures;if(Z.length!==bt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,It=bt.length;gt<It;gt++)Z[gt]=i.COLOR_ATTACHMENT0+gt;Z.length=bt.length,mt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,mt=!0);mt&&i.drawBuffers(Z)}function vt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let Rt={[Ls]:i.FUNC_ADD,[jf]:i.FUNC_SUBTRACT,[Kf]:i.FUNC_REVERSE_SUBTRACT};Rt[Qf]=i.MIN,Rt[td]=i.MAX;let dt={[ed]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[Nu]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[rd]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[hd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[dd]:i.ONE_MINUS_CONSTANT_ALPHA};function St(C,K,Z,mt,bt,gt,It,Dt,ee,Ht){if(C===bi){p===!0&&(ct(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),C!==Jf){if(C!==m||Ht!==U){if((y!==Ls||v!==Ls)&&(i.blendEquation(i.FUNC_ADD),y=Ls,v=Ls),Ht)switch(C){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case Pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",C);break}else switch(C){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pu:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",C);break}E=null,_=null,w=null,A=null,S.set(0,0,0),P=0,m=C,U=Ht}return}bt=bt||K,gt=gt||Z,It=It||mt,(K!==y||bt!==v)&&(i.blendEquationSeparate(Rt[K],Rt[bt]),y=K,v=bt),(Z!==E||mt!==_||gt!==w||It!==A)&&(i.blendFuncSeparate(dt[Z],dt[mt],dt[gt],dt[It]),E=Z,_=mt,w=gt,A=It),(Dt.equals(S)===!1||ee!==P)&&(i.blendColor(Dt.r,Dt.g,Dt.b,ee),S.copy(Dt),P=ee),m=C,U=!1}function Mt(C,K){C.side===on?ct(i.CULL_FACE):Q(i.CULL_FACE);let Z=C.side===Mn;K&&(Z=!Z),wt(Z),C.blending===Er&&C.transparent===!1?St(bi):St(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let mt=C.stencilWrite;a.setTest(mt),mt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ot(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function At(C){C!==qf?(Q(i.CULL_FACE),C!==O&&(C===Iu?i.cullFace(i.BACK):C===Zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),O=C}function Ut(C){C!==F&&(J&&i.lineWidth(C),F=C)}function Ot(C,K,Z){C?(Q(i.POLYGON_OFFSET_FILL),(z!==K||q!==Z)&&(z=K,q=Z,o.getReversed()&&(K=-K),i.polygonOffset(K,Z))):ct(i.POLYGON_OFFSET_FILL)}function Wt(C){C?Q(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Ft(C){C===void 0&&(C=i.TEXTURE0+k-1),it!==C&&(i.activeTexture(C),it=C)}function j(C,K,Z){Z===void 0&&(it===null?Z=i.TEXTURE0+k-1:Z=it);let mt=at[Z];mt===void 0&&(mt={type:void 0,texture:void 0},at[Z]=mt),(mt.type!==C||mt.texture!==K)&&(it!==Z&&(i.activeTexture(Z),it=Z),i.bindTexture(C,K||X[C]),mt.type=C,mt.texture=K)}function Kt(){let C=at[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(C){re("WebGLState:",C)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(C){re("WebGLState:",C)}}function T(){try{i.texSubImage2D(...arguments)}catch(C){re("WebGLState:",C)}}function st(){try{i.texSubImage3D(...arguments)}catch(C){re("WebGLState:",C)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(C){re("WebGLState:",C)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){re("WebGLState:",C)}}function H(){try{i.texStorage2D(...arguments)}catch(C){re("WebGLState:",C)}}function b(){try{i.texStorage3D(...arguments)}catch(C){re("WebGLState:",C)}}function M(){try{i.texImage2D(...arguments)}catch(C){re("WebGLState:",C)}}function R(){try{i.texImage3D(...arguments)}catch(C){re("WebGLState:",C)}}function D(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function N(C,K){d[C]!==K&&(i.pixelStorei(C,K),d[C]=K)}function V(C){Et.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Et.copy(C))}function Y(C){Tt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Tt.copy(C))}function rt(C,K){let Z=l.get(K);Z===void 0&&(Z=new WeakMap,l.set(K,Z));let mt=Z.get(C);mt===void 0&&(mt=i.getUniformBlockIndex(K,C.name),Z.set(C,mt))}function W(C,K){let mt=l.get(K).get(C);c.get(K)!==mt&&(i.uniformBlockBinding(K,mt,C.__bindingPointIndex),c.set(K,mt))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},it=null,at={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,E=null,_=null,v=null,w=null,A=null,S=new qt(0,0,0),P=0,U=!1,L=null,O=null,F=null,z=null,q=null,Et.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ct,bindFramebuffer:xt,drawBuffers:_t,useProgram:vt,setBlending:St,setMaterial:Mt,setFlipSided:wt,setCullFace:At,setLineWidth:Ut,setPolygonOffset:Ot,setScissorTest:Wt,activeTexture:Ft,bindTexture:j,unbindTexture:Kt,compressedTexImage2D:Yt,compressedTexImage3D:B,texImage2D:M,texImage3D:R,pixelStorei:N,getParameter:D,updateUBOMapping:rt,uniformBlockBinding:W,texStorage2D:H,texStorage3D:b,texSubImage2D:T,texSubImage3D:st,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:V,viewport:Y,reset:ot}}function n1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,T){return g?new OffscreenCanvas(B,T):no("canvas")}function p(B,T,st){let ut=1,pt=Yt(B);if((pt.width>st||pt.height>st)&&(ut=st/Math.max(pt.width,pt.height)),ut<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let H=Math.floor(ut*pt.width),b=Math.floor(ut*pt.height);h===void 0&&(h=x(H,b));let M=T?x(H,b):h;return M.width=H,M.height=b,M.getContext("2d").drawImage(B,0,0,H,b),ne("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+H+"x"+b+")."),M}else return"data"in B&&ne("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),B;return B}function m(B){return B.generateMipmaps}function y(B){i.generateMipmap(B)}function E(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(B,T,st,ut,pt,H=!1){if(B!==null){if(i[B]!==void 0)return i[B];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let b;ut&&(b=t.get("EXT_texture_norm16"),b||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let M=T;if(T===i.RED&&(st===i.FLOAT&&(M=i.R32F),st===i.HALF_FLOAT&&(M=i.R16F),st===i.UNSIGNED_BYTE&&(M=i.R8),st===i.UNSIGNED_SHORT&&b&&(M=b.R16_EXT),st===i.SHORT&&b&&(M=b.R16_SNORM_EXT)),T===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(M=i.R8UI),st===i.UNSIGNED_SHORT&&(M=i.R16UI),st===i.UNSIGNED_INT&&(M=i.R32UI),st===i.BYTE&&(M=i.R8I),st===i.SHORT&&(M=i.R16I),st===i.INT&&(M=i.R32I)),T===i.RG&&(st===i.FLOAT&&(M=i.RG32F),st===i.HALF_FLOAT&&(M=i.RG16F),st===i.UNSIGNED_BYTE&&(M=i.RG8),st===i.UNSIGNED_SHORT&&b&&(M=b.RG16_EXT),st===i.SHORT&&b&&(M=b.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(M=i.RG8UI),st===i.UNSIGNED_SHORT&&(M=i.RG16UI),st===i.UNSIGNED_INT&&(M=i.RG32UI),st===i.BYTE&&(M=i.RG8I),st===i.SHORT&&(M=i.RG16I),st===i.INT&&(M=i.RG32I)),T===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(M=i.RGB8UI),st===i.UNSIGNED_SHORT&&(M=i.RGB16UI),st===i.UNSIGNED_INT&&(M=i.RGB32UI),st===i.BYTE&&(M=i.RGB8I),st===i.SHORT&&(M=i.RGB16I),st===i.INT&&(M=i.RGB32I)),T===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(M=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(M=i.RGBA16UI),st===i.UNSIGNED_INT&&(M=i.RGBA32UI),st===i.BYTE&&(M=i.RGBA8I),st===i.SHORT&&(M=i.RGBA16I),st===i.INT&&(M=i.RGBA32I)),T===i.RGB&&(st===i.UNSIGNED_SHORT&&b&&(M=b.RGB16_EXT),st===i.SHORT&&b&&(M=b.RGB16_SNORM_EXT),st===i.UNSIGNED_INT_5_9_9_9_REV&&(M=i.RGB9_E5),st===i.UNSIGNED_INT_10F_11F_11F_REV&&(M=i.R11F_G11F_B10F)),T===i.RGBA){let R=H?eo:xe.getTransfer(pt);st===i.FLOAT&&(M=i.RGBA32F),st===i.HALF_FLOAT&&(M=i.RGBA16F),st===i.UNSIGNED_BYTE&&(M=R===we?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT&&b&&(M=b.RGBA16_EXT),st===i.SHORT&&b&&(M=b.RGBA16_SNORM_EXT),st===i.UNSIGNED_SHORT_4_4_4_4&&(M=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(M=i.RGB5_A1)}return(M===i.R16F||M===i.R32F||M===i.RG16F||M===i.RG32F||M===i.RGBA16F||M===i.RGBA32F)&&t.get("EXT_color_buffer_float"),M}function v(B,T){let st;return B?T===null||T===ri||T===Ar?st=i.DEPTH24_STENCIL8:T===Zn?st=i.DEPTH32F_STENCIL8:T===Tr&&(st=i.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ri||T===Ar?st=i.DEPTH_COMPONENT24:T===Zn?st=i.DEPTH_COMPONENT32F:T===Tr&&(st=i.DEPTH_COMPONENT16),st}function w(B,T){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==tn&&B.minFilter!==rn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function A(B){let T=B.target;T.removeEventListener("dispose",A),P(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&d.delete(T)}function S(B){let T=B.target;T.removeEventListener("dispose",S),L(T)}function P(B){let T=n.get(B);if(T.__webglInit===void 0)return;let st=B.source,ut=f.get(st);if(ut){let pt=ut[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&U(B),Object.keys(ut).length===0&&f.delete(st)}n.remove(B)}function U(B){let T=n.get(B);i.deleteTexture(T.__webglTexture);let st=B.source,ut=f.get(st);delete ut[T.__cacheKey],o.memory.textures--}function L(B){let T=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let pt=0;pt<T.__webglFramebuffer[ut].length;pt++)i.deleteFramebuffer(T.__webglFramebuffer[ut][pt]);else i.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)i.deleteFramebuffer(T.__webglFramebuffer[ut]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let st=B.textures;for(let ut=0,pt=st.length;ut<pt;ut++){let H=n.get(st[ut]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(st[ut])}n.remove(B)}let O=0;function F(){O=0}function z(){return O}function q(B){O=B}function k(){let B=O;return B>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,B}function J(B){let T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function lt(B,T){let st=n.get(B);if(B.isVideoTexture&&j(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&st.__version!==B.version){let ut=B.image;if(ut===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(st,B,T);return}}else B.isExternalTexture&&(st.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+T)}function tt(B,T){let st=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&st.__version!==B.version){ct(st,B,T);return}else B.isExternalTexture&&(st.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+T)}function it(B,T){let st=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&st.__version!==B.version){ct(st,B,T);return}e.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+T)}function at(B,T){let st=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&st.__version!==B.version){xt(st,B,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+T)}let Ct={[Es]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},Lt={[tn]:i.NEAREST,[gd]:i.NEAREST_MIPMAP_NEAREST,[No]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[yc]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},Et={[vd]:i.NEVER,[Ed]:i.ALWAYS,[bd]:i.LESS,[nl]:i.LEQUAL,[Sd]:i.EQUAL,[il]:i.GEQUAL,[Md]:i.GREATER,[wd]:i.NOTEQUAL};function Tt(B,T){if(T.type===Zn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===rn||T.magFilter===yc||T.magFilter===No||T.magFilter===ms||T.minFilter===rn||T.minFilter===yc||T.minFilter===No||T.minFilter===ms)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,Ct[T.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,Ct[T.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,Ct[T.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Lt[T.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Lt[T.minFilter]),T.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===tn||T.minFilter!==No&&T.minFilter!==ms||T.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function $(B,T){let st=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",A));let ut=T.source,pt=f.get(ut);pt===void 0&&(pt={},f.set(ut,pt));let H=J(T);if(H!==B.__cacheKey){pt[H]===void 0&&(pt[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,st=!0),pt[H].usedTimes++;let b=pt[B.__cacheKey];b!==void 0&&(pt[B.__cacheKey].usedTimes--,b.usedTimes===0&&U(T)),B.__cacheKey=H,B.__webglTexture=pt[H].texture}return st}function X(B,T,st){return Math.floor(Math.floor(B/st)/T)}function Q(B,T,st,ut){let H=B.updateRanges;if(H.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,st,ut,T.data);else{H.sort((N,V)=>N.start-V.start);let b=0;for(let N=1;N<H.length;N++){let V=H[b],Y=H[N],rt=V.start+V.count,W=X(Y.start,T.width,4),ot=X(V.start,T.width,4);Y.start<=rt+1&&W===ot&&X(Y.start+Y.count-1,T.width,4)===W?V.count=Math.max(V.count,Y.start+Y.count-V.start):(++b,H[b]=Y)}H.length=b+1;let M=e.getParameter(i.UNPACK_ROW_LENGTH),R=e.getParameter(i.UNPACK_SKIP_PIXELS),D=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let N=0,V=H.length;N<V;N++){let Y=H[N],rt=Math.floor(Y.start/4),W=Math.ceil(Y.count/4),ot=rt%T.width,C=Math.floor(rt/T.width),K=W,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,ot,C,K,Z,st,ut,T.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,M),e.pixelStorei(i.UNPACK_SKIP_PIXELS,R),e.pixelStorei(i.UNPACK_SKIP_ROWS,D)}}function ct(B,T,st){let ut=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=i.TEXTURE_3D);let pt=$(B,T),H=T.source;e.bindTexture(ut,B.__webglTexture,i.TEXTURE0+st);let b=n.get(H);if(H.version!==b.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+st),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let Z=xe.getPrimaries(xe.workingColorSpace),mt=T.colorSpace===Vi?null:xe.getPrimaries(T.colorSpace),bt=T.colorSpace===Vi||Z===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let R=p(T.image,!1,s.maxTextureSize);R=Kt(T,R);let D=r.convert(T.format,T.colorSpace),N=r.convert(T.type),V=_(T.internalFormat,D,N,T.normalized,T.colorSpace,T.isVideoTexture);Tt(ut,T);let Y,rt=T.mipmaps,W=T.isVideoTexture!==!0,ot=b.__version===void 0||pt===!0,C=H.dataReady,K=w(T,R);if(T.isDepthTexture)V=v(T.format===gs,T.type),ot&&(W?e.texStorage2D(i.TEXTURE_2D,1,V,R.width,R.height):e.texImage2D(i.TEXTURE_2D,0,V,R.width,R.height,0,D,N,null));else if(T.isDataTexture)if(rt.length>0){W&&ot&&e.texStorage2D(i.TEXTURE_2D,K,V,rt[0].width,rt[0].height);for(let Z=0,mt=rt.length;Z<mt;Z++)Y=rt[Z],W?C&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Y.width,Y.height,D,N,Y.data):e.texImage2D(i.TEXTURE_2D,Z,V,Y.width,Y.height,0,D,N,Y.data);T.generateMipmaps=!1}else W?(ot&&e.texStorage2D(i.TEXTURE_2D,K,V,R.width,R.height),C&&Q(T,R,D,N)):e.texImage2D(i.TEXTURE_2D,0,V,R.width,R.height,0,D,N,R.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,V,rt[0].width,rt[0].height,R.depth);for(let Z=0,mt=rt.length;Z<mt;Z++)if(Y=rt[Z],T.format!==$n)if(D!==null)if(W){if(C)if(T.layerUpdates.size>0){let bt=eh(Y.width,Y.height,T.format,T.type);for(let gt of T.layerUpdates){let It=Y.data.subarray(gt*bt/Y.data.BYTES_PER_ELEMENT,(gt+1)*bt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,gt,Y.width,Y.height,1,D,It)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Y.width,Y.height,R.depth,D,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,V,Y.width,Y.height,R.depth,0,Y.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Y.width,Y.height,R.depth,D,N,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,V,Y.width,Y.height,R.depth,0,D,N,Y.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{W&&ot&&e.texStorage2D(i.TEXTURE_2D,K,V,rt[0].width,rt[0].height);for(let Z=0,mt=rt.length;Z<mt;Z++)Y=rt[Z],T.format!==$n?D!==null?W?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Y.width,Y.height,D,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,V,Y.width,Y.height,0,Y.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?C&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Y.width,Y.height,D,N,Y.data):e.texImage2D(i.TEXTURE_2D,Z,V,Y.width,Y.height,0,D,N,Y.data)}else if(T.isDataArrayTexture)if(W){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,V,R.width,R.height,R.depth),C)if(T.layerUpdates.size>0){let Z=eh(R.width,R.height,T.format,T.type);for(let mt of T.layerUpdates){let bt=R.data.subarray(mt*Z/R.data.BYTES_PER_ELEMENT,(mt+1)*Z/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,R.width,R.height,1,D,N,bt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,D,N,R.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,V,R.width,R.height,R.depth,0,D,N,R.data);else if(T.isData3DTexture)W?(ot&&e.texStorage3D(i.TEXTURE_3D,K,V,R.width,R.height,R.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,D,N,R.data)):e.texImage3D(i.TEXTURE_3D,0,V,R.width,R.height,R.depth,0,D,N,R.data);else if(T.isFramebufferTexture){if(ot)if(W)e.texStorage2D(i.TEXTURE_2D,K,V,R.width,R.height);else{let Z=R.width,mt=R.height;for(let bt=0;bt<K;bt++)e.texImage2D(i.TEXTURE_2D,bt,V,Z,mt,0,D,N,null),Z>>=1,mt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),R.parentNode!==Z){Z.appendChild(R),d.add(T),Z.onpaint=mt=>{let bt=mt.changedElements;for(let gt of d)bt.includes(gt.image)&&(gt.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,R);else{let bt=i.RGBA,gt=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,gt,It,R)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(rt.length>0){if(W&&ot){let Z=Yt(rt[0]);e.texStorage2D(i.TEXTURE_2D,K,V,Z.width,Z.height)}for(let Z=0,mt=rt.length;Z<mt;Z++)Y=rt[Z],W?C&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,D,N,Y):e.texImage2D(i.TEXTURE_2D,Z,V,D,N,Y);T.generateMipmaps=!1}else if(W){if(ot){let Z=Yt(R);e.texStorage2D(i.TEXTURE_2D,K,V,Z.width,Z.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,D,N,R)}else e.texImage2D(i.TEXTURE_2D,0,V,D,N,R);m(T)&&y(ut),b.__version=H.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function xt(B,T,st){if(T.image.length!==6)return;let ut=$(B,T),pt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+st);let H=n.get(pt);if(pt.version!==H.__version||ut===!0){e.activeTexture(i.TEXTURE0+st);let b=xe.getPrimaries(xe.workingColorSpace),M=T.colorSpace===Vi?null:xe.getPrimaries(T.colorSpace),R=T.colorSpace===Vi||b===M?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);let D=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,V=[];for(let gt=0;gt<6;gt++)!D&&!N?V[gt]=p(T.image[gt],!0,s.maxCubemapSize):V[gt]=N?T.image[gt].image:T.image[gt],V[gt]=Kt(T,V[gt]);let Y=V[0],rt=r.convert(T.format,T.colorSpace),W=r.convert(T.type),ot=_(T.internalFormat,rt,W,T.normalized,T.colorSpace),C=T.isVideoTexture!==!0,K=H.__version===void 0||ut===!0,Z=pt.dataReady,mt=w(T,Y);Tt(i.TEXTURE_CUBE_MAP,T);let bt;if(D){C&&K&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ot,Y.width,Y.height);for(let gt=0;gt<6;gt++){bt=V[gt].mipmaps;for(let It=0;It<bt.length;It++){let Dt=bt[It];T.format!==$n?rt!==null?C?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,Dt.width,Dt.height,rt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ot,Dt.width,Dt.height,0,Dt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,Dt.width,Dt.height,rt,W,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ot,Dt.width,Dt.height,0,rt,W,Dt.data)}}}else{if(bt=T.mipmaps,C&&K){bt.length>0&&mt++;let gt=Yt(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(N){C?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,V[gt].width,V[gt].height,rt,W,V[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,V[gt].width,V[gt].height,0,rt,W,V[gt].data);for(let It=0;It<bt.length;It++){let ee=bt[It].image[gt].image;C?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,ee.width,ee.height,rt,W,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ot,ee.width,ee.height,0,rt,W,ee.data)}}else{C?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,rt,W,V[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,rt,W,V[gt]);for(let It=0;It<bt.length;It++){let Dt=bt[It];C?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,rt,W,Dt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ot,rt,W,Dt.image[gt])}}}m(T)&&y(i.TEXTURE_CUBE_MAP),H.__version=pt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function _t(B,T,st,ut,pt,H){let b=r.convert(st.format,st.colorSpace),M=r.convert(st.type),R=_(st.internalFormat,b,M,st.normalized,st.colorSpace),D=n.get(T),N=n.get(st);if(N.__renderTarget=T,!D.__hasExternalTextures){let V=Math.max(1,T.width>>H),Y=Math.max(1,T.height>>H);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,H,R,V,Y,T.depth,0,b,M,null):e.texImage2D(pt,H,R,V,Y,0,b,M,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,pt,N.__webglTexture,0,Wt(T)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,pt,N.__webglTexture,H),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(B,T,st){if(i.bindRenderbuffer(i.RENDERBUFFER,B),T.depthBuffer){let ut=T.depthTexture,pt=ut&&ut.isDepthTexture?ut.type:null,H=v(T.stencilBuffer,pt),b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(T),H,T.width,T.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(T),H,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,H,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,B)}else{let ut=T.textures;for(let pt=0;pt<ut.length;pt++){let H=ut[pt],b=r.convert(H.format,H.colorSpace),M=r.convert(H.type),R=_(H.internalFormat,b,M,H.normalized,H.colorSpace);Ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(T),R,T.width,T.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(T),R,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,R,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(B,T,st){let ut=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(T.depthTexture);if(pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),pt.__webglTexture===void 0){pt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,T.depthTexture);let D=r.convert(T.depthTexture.format),N=r.convert(T.depthTexture.type),V;T.depthTexture.format===xi?V=i.DEPTH_COMPONENT24:T.depthTexture.format===gs&&(V=i.DEPTH24_STENCIL8);for(let Y=0;Y<6;Y++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,V,T.width,T.height,0,D,N,null)}}else lt(T.depthTexture,0);let H=pt.__webglTexture,b=Wt(T),M=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+st:i.TEXTURE_2D,R=T.depthTexture.format===gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===xi)Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,M,H,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,R,M,H,0);else if(T.depthTexture.format===gs)Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,M,H,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,R,M,H,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(B){let T=n.get(B),st=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){let ut=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){let pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",pt)};ut.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=ut}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(st)for(let ut=0;ut<6;ut++)Rt(T.__webglFramebuffer[ut],B,ut);else{let ut=B.texture.mipmaps;ut&&ut.length>0?Rt(T.__webglFramebuffer[0],B,0):Rt(T.__webglFramebuffer,B,0)}else if(st){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=i.createRenderbuffer(),vt(T.__webglDepthbuffer[ut],B,!1);else{let pt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=T.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,H)}}else{let ut=B.texture.mipmaps;if(ut&&ut.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),vt(T.__webglDepthbuffer,B,!1);else{let pt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,H)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(B,T,st){let ut=n.get(B);T!==void 0&&_t(ut.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&dt(B)}function Mt(B){let T=B.texture,st=n.get(B),ut=n.get(T);B.addEventListener("dispose",S);let pt=B.textures,H=B.isWebGLCubeRenderTarget===!0,b=pt.length>1;if(b||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=T.version,o.memory.textures++),H){st.__webglFramebuffer=[];for(let M=0;M<6;M++)if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer[M]=[];for(let R=0;R<T.mipmaps.length;R++)st.__webglFramebuffer[M][R]=i.createFramebuffer()}else st.__webglFramebuffer[M]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer=[];for(let M=0;M<T.mipmaps.length;M++)st.__webglFramebuffer[M]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(b)for(let M=0,R=pt.length;M<R;M++){let D=n.get(pt[M]);D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&Ft(B)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let M=0;M<pt.length;M++){let R=pt[M];st.__webglColorRenderbuffer[M]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[M]);let D=r.convert(R.format,R.colorSpace),N=r.convert(R.type),V=_(R.internalFormat,D,N,R.normalized,R.colorSpace,B.isXRRenderTarget===!0),Y=Wt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,V,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+M,i.RENDERBUFFER,st.__webglColorRenderbuffer[M])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(st.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,T);for(let M=0;M<6;M++)if(T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)_t(st.__webglFramebuffer[M][R],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+M,R);else _t(st.__webglFramebuffer[M],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+M,0);m(T)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(b){for(let M=0,R=pt.length;M<R;M++){let D=pt[M],N=n.get(D),V=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(V=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,N.__webglTexture),Tt(V,D),_t(st.__webglFramebuffer,B,D,i.COLOR_ATTACHMENT0+M,V,0),m(D)&&y(V)}e.unbindTexture()}else{let M=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(M=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(M,ut.__webglTexture),Tt(M,T),T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)_t(st.__webglFramebuffer[R],B,T,i.COLOR_ATTACHMENT0,M,R);else _t(st.__webglFramebuffer,B,T,i.COLOR_ATTACHMENT0,M,0);m(T)&&y(M),e.unbindTexture()}B.depthBuffer&&dt(B)}function wt(B){let T=B.textures;for(let st=0,ut=T.length;st<ut;st++){let pt=T[st];if(m(pt)){let H=E(B),b=n.get(pt).__webglTexture;e.bindTexture(H,b),y(H),e.unbindTexture()}}}let At=[],Ut=[];function Ot(B){if(B.samples>0){if(Ft(B)===!1){let T=B.textures,st=B.width,ut=B.height,pt=i.COLOR_BUFFER_BIT,H=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,b=n.get(B),M=T.length>1;if(M)for(let D=0;D<T.length;D++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,b.__webglMultisampledFramebuffer);let R=B.texture.mipmaps;R&&R.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,b.__webglFramebuffer);for(let D=0;D<T.length;D++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),M){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,b.__webglColorRenderbuffer[D]);let N=n.get(T[D]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,st,ut,0,0,st,ut,pt,i.NEAREST),c===!0&&(At.length=0,Ut.length=0,At.push(i.COLOR_ATTACHMENT0+D),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(At.push(H),Ut.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),M)for(let D=0;D<T.length;D++){e.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,b.__webglColorRenderbuffer[D]);let N=n.get(T[D]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,b.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let T=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Wt(B){return Math.min(s.maxSamples,B.samples)}function Ft(B){let T=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function j(B){let T=o.render.frame;u.get(B)!==T&&(u.set(B,T),B.update())}function Kt(B,T){let st=B.colorSpace,ut=B.format,pt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||st!==to&&st!==Vi&&(xe.getTransfer(st)===we?(ut!==$n||pt!==In)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",st)),T}function Yt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.getTextureUnits=z,this.setTextureUnits=q,this.setTexture2D=lt,this.setTexture2DArray=tt,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=St,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function i1(i,t){function e(n,s=Vi){let r,o=xe.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===qu)return i.RGB;if(n===$n)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Sc)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===xs)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Do||n===Uo||n===Fo||n===Oo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tc||n===Ac||n===Rc||n===Cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Pc||n===Lc||n===Nc||n===Dc||n===Bo||n===Uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ic||n===Pc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nc)return r.COMPRESSED_R11_EAC;if(n===Dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Bo)return r.COMPRESSED_RG11_EAC;if(n===Uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===Yc||n===qc||n===Zc||n===$c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jc||n===jc||n===Kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jc)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===tl||n===ko||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var s1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ho(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:s1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends yi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new mh,m={},y=e.getContextAttributes(),E=null,_=null,v=[],w=[],A=new Nt,S=null,P=null,U=new bn;U.viewport=new Ee;let L=new bn;L.viewport=new Ee;let O=[U,L],F=new pc,z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=v[X];return Q===void 0&&(Q=new pr,v[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=v[X];return Q===void 0&&(Q=new pr,v[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=v[X];return Q===void 0&&(Q=new pr,v[X]=Q),Q.getHandSpace()};function k(X){let Q=w.indexOf(X.inputSource);if(Q===-1)return;let ct=v[Q];ct!==void 0&&(ct.update(X.inputSource,X.frame,l||o),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",lt);for(let X=0;X<v.length;X++){let Q=w[X];Q!==null&&(w[X]=null,v[X].disconnect(Q))}z=null,q=null,p.reset();for(let X in m)delete m[X];if(t.setRenderTarget(E),f=null,h=null,d=null,s=null,_=null,$.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(A.width,A.height,!1),P!==null){let X=P.camera;X.fov=P.fov,X.zoom=P.zoom,X.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,xt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=y.stencil?gs:xi,xt=y.stencil?Ar:ri);let vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new An(h.textureWidth,h.textureHeight,{format:$n,type:In,depthTexture:new ss(h.textureWidth,h.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new An(f.framebufferWidth,f.framebufferHeight,{format:$n,type:In,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function lt(X){for(let Q=0;Q<X.removed.length;Q++){let ct=X.removed[Q],xt=w.indexOf(ct);xt>=0&&(w[xt]=null,v[xt].disconnect(ct))}for(let Q=0;Q<X.added.length;Q++){let ct=X.added[Q],xt=w.indexOf(ct);if(xt===-1){for(let vt=0;vt<v.length;vt++)if(vt>=w.length){w.push(ct),xt=vt;break}else if(w[vt]===null){w[vt]=ct,xt=vt;break}if(xt===-1)break}let _t=v[xt];_t&&_t.connect(ct)}}let tt=new G,it=new G;function at(X,Q,ct){tt.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(ct.matrixWorld);let xt=tt.distanceTo(it),_t=Q.projectionMatrix.elements,vt=ct.projectionMatrix.elements,Rt=_t[14]/(_t[10]-1),dt=_t[14]/(_t[10]+1),St=(_t[9]+1)/_t[5],Mt=(_t[9]-1)/_t[5],wt=(_t[8]-1)/_t[0],At=(vt[8]+1)/vt[0],Ut=Rt*wt,Ot=Rt*At,Wt=xt/(-wt+At),Ft=Wt*-wt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ft),X.translateZ(Wt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),_t[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let j=Rt+Wt,Kt=dt+Wt,Yt=Ut-Ft,B=Ot+(xt-Ft),T=St*dt/Kt*j,st=Mt*dt/Kt*j;X.projectionMatrix.makePerspective(Yt,B,T,st,j,Kt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ct(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,ct=X.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ct=p.depthFar)),F.near=L.near=U.near=Q,F.far=L.far=U.far=ct,(z!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,q=F.far),F.layers.mask=X.layers.mask|6,U.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;let xt=X.parent,_t=F.cameras;Ct(F,xt);for(let vt=0;vt<_t.length;vt++)Ct(_t[vt],xt);_t.length===2?at(F,U,L):F.projectionMatrix.copy(U.projectionMatrix),P===null&&X.isPerspectiveCamera&&(P={camera:X,fov:X.fov,zoom:X.zoom}),Lt(X,F,xt)};function Lt(X,Q,ct){ct===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=hr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(X){return m[X]};let Et=null;function Tt(X,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){let ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let xt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,xt=!0);for(let dt=0;dt<ct.length;dt++){let St=ct[dt],Mt=null;if(f!==null)Mt=f.getViewport(St);else{let At=d.getViewSubImage(h,St);Mt=At.viewport,dt===0&&(t.setRenderTargetTextures(_,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(_))}let wt=O[dt];wt===void 0&&(wt=new bn,wt.layers.enable(dt),wt.viewport=new Ee,O[dt]=wt),wt.matrix.fromArray(St.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(St.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),dt===0&&(F.matrix.copy(wt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),xt===!0&&F.cameras.push(wt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let dt=d.getDepthInformation(ct[0]);dt&&dt.isValid&&dt.texture&&p.init(dt,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let dt=0;dt<ct.length;dt++){let St=ct[dt].camera;if(St){let Mt=m[St];Mt||(Mt=new ho,m[St]=Mt);let wt=d.getCameraImage(St);Mt.sourceTexture=wt}}}}for(let ct=0;ct<v.length;ct++){let xt=w[ct],_t=v[ct];xt!==null&&_t!==void 0&&_t.update(xt,Q,l||o)}Et&&Et(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let $=new sp;$.setAnimationLoop(Tt),this.setAnimationLoop=function(X){Et=X},this.dispose=function(){}}},o1=new _e,up=new ue;up.set(-1,0,0,0,1,0,0,0,1);function a1(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ku(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,E,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,E):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),E=y.envMap,_=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(o1.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(up),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let w=v.program;n.uniformBlockBinding(_,w)}function l(_,v){let w=s[_.id];w===void 0&&(p(_),w=u(_),s[_.id]=w,_.addEventListener("dispose",y));let A=v.program;n.updateUBOMapping(_,A);let S=t.render.frame;r[_.id]!==S&&(h(_),r[_.id]=S)}function u(_){let v=d();_.__bindingPointIndex=v;let w=i.createBuffer(),A=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let v=s[_.id],w=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,P=w.length;S<P;S++){let U=w[S];if(Array.isArray(U))for(let L=0,O=U.length;L<O;L++)f(U[L],S,L,A);else f(U,S,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,w,A){if(x(_,v,w,A)===!0){let S=_.__offset,P=_.value;if(Array.isArray(P)){let U=0;for(let L=0;L<P.length;L++){let O=P[L],F=m(O);g(O,_.__data,U),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(P,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,_.__data)}}function g(_,v,w){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,w)}function x(_,v,w,A){let S=_.value,P=v+"_"+w;if(A[P]===void 0)return typeof S=="number"||typeof S=="boolean"?A[P]=S:ArrayBuffer.isView(S)?A[P]=S.slice():A[P]=S.clone(),!0;{let U=A[P];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return A[P]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(U.equals(S)===!1)return U.copy(S),!0}}return!1}function p(_){let v=_.uniforms,w=0,A=16;for(let P=0,U=v.length;P<U;P++){let L=Array.isArray(v[P])?v[P]:[v[P]];for(let O=0,F=L.length;O<F;O++){let z=L[O],q=Array.isArray(z.value)?z.value:[z.value];for(let k=0,J=q.length;k<J;k++){let lt=q[k],tt=m(lt),it=w%A,at=it%tt.boundary,Ct=it+at;w+=at,Ct!==0&&A-Ct<tt.storage&&(w+=A-Ct),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=tt.storage}}}let S=w%A;return S>0&&(w+=A-S),_.__size=w,_.__cache={},this}function m(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",_),v}function y(_){let v=_.target;v.removeEventListener("dispose",y);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function E(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:E}}var l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function u1(){return Si===null&&(Si=new co(l1,16,16,xs,oi),Si.name="DFG_LUT",Si.minFilter=rn,Si.magFilter=rn,Si.wrapS=mi,Si.wrapT=mi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var cl=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=In}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([Ec,wc,Mc]),m=new Set([In,ri,Tr,Ar,vc,bc]),y=new Uint32Array(4),E=new Int32Array(4),_=new G,v=null,w=null,A=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,L=!1,O=null,F=null,z=null,q=null;this._outputColorSpace=qe;let k=0,J=0,lt=null,tt=-1,it=null,at=new Ee,Ct=new Ee,Lt=null,Et=new qt(0),Tt=0,$=e.width,X=e.height,Q=1,ct=null,xt=null,_t=new Ee(0,0,$,X),vt=new Ee(0,0,$,X),Rt=!1,dt=new gr,St=!1,Mt=!1,wt=new _e,At=new G,Ut=new Ee,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Ft(){return lt===null?Q:1}let j=n;function Kt(I,nt){return e.getContext(I,nt)}let Yt,B,T,st,ut,pt,H,b,M,R,D,N,V,Y,rt,W,ot,C,K,Z,mt,bt,gt;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",ge,!1),j===null){let nt="webgl2";if(j=Kt(nt,I),j===null)throw Kt(nt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(I){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),re("WebGLRenderer: "+I.message),I}function It(){Yt=new xv(j),Yt.init(),mt=new i1(j,Yt),B=new av(j,Yt,t,mt),T=new e1(j,Yt),B.reversedDepthBuffer&&h&&T.buffers.depth.setReversed(!0),F=j.createFramebuffer(),z=j.createFramebuffer(),q=j.createFramebuffer(),st=new vv(j),ut=new Hb,pt=new n1(j,Yt,T,ut,B,mt,st),H=new gv(U),b=new Sx(j),bt=new rv(j,b),M=new yv(j,b,st,bt),R=new Sv(j,M,b,bt,st),C=new bv(j,B,pt),rt=new cv(ut),D=new zb(U,H,Yt,B,bt,rt),N=new a1(U,ut),V=new Gb,Y=new $b(Yt),ot=new sv(U,H,T,R,g,c),W=new t1(U,R,B),gt=new c1(j,st,B,T),K=new ov(j,Yt,st),Z=new _v(j,Yt,st),st.programs=D.programs,U.capabilities=B,U.extensions=Yt,U.properties=ut,U.renderLists=V,U.shadowMap=W,U.state=T,U.info=st}x!==In&&(P=new wv(x,e.width,e.height,a,s,r));let Dt=new gh(U,j);this.xr=Dt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let I=Yt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Yt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(I){I!==void 0&&(Q=I,this.setSize($,X,!1))},this.getSize=function(I){return I.set($,X)},this.setSize=function(I,nt,yt=!0){if(Dt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}$=I,X=nt,e.width=Math.floor(I*Q),e.height=Math.floor(nt*Q),yt===!0&&(e.style.width=I+"px",e.style.height=nt+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,I,nt)},this.getDrawingBufferSize=function(I){return I.set($*Q,X*Q).floor()},this.setDrawingBufferSize=function(I,nt,yt){$=I,X=nt,Q=yt,e.width=Math.floor(I*yt),e.height=Math.floor(nt*yt),this.setViewport(0,0,I,nt)},this.setEffects=function(I){if(x===In){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let nt=0;nt<I.length;nt++)if(I[nt].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(at)},this.getViewport=function(I){return I.copy(_t)},this.setViewport=function(I,nt,yt,ft){I.isVector4?_t.set(I.x,I.y,I.z,I.w):_t.set(I,nt,yt,ft),T.viewport(at.copy(_t).multiplyScalar(Q).round())},this.getScissor=function(I){return I.copy(vt)},this.setScissor=function(I,nt,yt,ft){I.isVector4?vt.set(I.x,I.y,I.z,I.w):vt.set(I,nt,yt,ft),T.scissor(Ct.copy(vt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(I){T.setScissorTest(Rt=I)},this.setOpaqueSort=function(I){ct=I},this.setTransparentSort=function(I){xt=I},this.getClearColor=function(I){return I.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(I=!0,nt=!0,yt=!0){let ft=0;if(I){let ht=!1;if(lt!==null){let kt=lt.texture.format;ht=p.has(kt)}if(ht){let kt=lt.texture.type,Vt=m.has(kt),zt=ot.getClearColor(),$t=ot.getClearAlpha(),Qt=zt.r,fe=zt.g,me=zt.b;Vt?(y[0]=Qt,y[1]=fe,y[2]=me,y[3]=$t,j.clearBufferuiv(j.COLOR,0,y)):(E[0]=Qt,E[1]=fe,E[2]=me,E[3]=$t,j.clearBufferiv(j.COLOR,0,E))}else ft|=j.COLOR_BUFFER_BIT}nt&&(ft|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),yt&&(ft|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft!==0&&j.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),O=I},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ot.dispose(),V.dispose(),Y.dispose(),ut.dispose(),H.dispose(),R.dispose(),bt.dispose(),gt.dispose(),D.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Xt),Dt.removeEventListener("sessionend",te),ie.stop()};function ee(I){I.preventDefault(),io("WebGLRenderer: Context Lost."),L=!0}function Ht(){io("WebGLRenderer: Context Restored."),L=!1;let I=st.autoReset,nt=W.enabled,yt=W.autoUpdate,ft=W.needsUpdate,ht=W.type;It(),st.autoReset=I,W.enabled=nt,W.autoUpdate=yt,W.needsUpdate=ft,W.type=ht}function ge(I){re("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ye(I){let nt=I.target;nt.removeEventListener("dispose",ye),Se(nt)}function Se(I){Be(I),ut.remove(I)}function Be(I){let nt=ut.get(I).programs;nt!==void 0&&(nt.forEach(function(yt){D.releaseProgram(yt)}),I.isShaderMaterial&&D.releaseShaderCache(I))}this.renderBufferDirect=function(I,nt,yt,ft,ht,kt){nt===null&&(nt=Ot);let Vt=ht.isMesh&&ht.matrixWorld.determinantAffine()<0,zt=Ke(I,nt,yt,ft,ht);T.setMaterial(ft,Vt);let $t=yt.index,Qt=1;if(ft.wireframe===!0){if($t=M.getWireframeAttribute(yt),$t===void 0)return;Qt=2}let fe=yt.drawRange,me=yt.attributes.position,Jt=fe.start*Qt,Me=(fe.start+fe.count)*Qt;kt!==null&&(Jt=Math.max(Jt,kt.start*Qt),Me=Math.min(Me,(kt.start+kt.count)*Qt)),$t!==null?(Jt=Math.max(Jt,0),Me=Math.min(Me,$t.count)):me!=null&&(Jt=Math.max(Jt,0),Me=Math.min(Me,me.count));let Xe=Me-Jt;if(Xe<0||Xe===1/0)return;bt.setup(ht,ft,zt,yt,$t);let Ue,Ie=K;if($t!==null&&(Ue=b.get($t),Ie=Z,Ie.setIndex(Ue)),ht.isMesh)ft.wireframe===!0?(T.setLineWidth(ft.wireframeLinewidth*Ft()),Ie.setMode(j.LINES)):Ie.setMode(j.TRIANGLES);else if(ht.isLine){let fn=ft.linewidth;fn===void 0&&(fn=1),T.setLineWidth(fn*Ft()),ht.isLineSegments?Ie.setMode(j.LINES):ht.isLineLoop?Ie.setMode(j.LINE_LOOP):Ie.setMode(j.LINE_STRIP)}else ht.isPoints?Ie.setMode(j.POINTS):ht.isSprite&&Ie.setMode(j.TRIANGLES);if(ht.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{let fn=ht._multiDrawStarts,Gt=ht._multiDrawCounts,_n=ht._multiDrawCount,ve=$t?b.get($t).bytesPerElement:1,Wn=ut.get(ft).currentProgram.getUniforms();for(let di=0;di<_n;di++)Wn.setValue(j,"_gl_DrawID",di),Ie.render(fn[di]/ve,Gt[di])}else if(ht.isInstancedMesh)Ie.renderInstances(Jt,Xe,ht.count);else if(yt.isInstancedBufferGeometry){let fn=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,Gt=Math.min(yt.instanceCount,fn);Ie.renderInstances(Jt,Xe,Gt)}else Ie.render(Jt,Xe)};function De(I,nt,yt,ft){O!==null&&I.isNodeMaterial&&O.setObject(ft,I),St===!0&&rt.setState(I,yt,!1),I.transparent===!0&&I.side===on&&I.forceSinglePass===!1?(I.side=Mn,I.needsUpdate=!0,hn(I,nt,ft),I.side=ds,I.needsUpdate=!0,hn(I,nt,ft),I.side=on):hn(I,nt,ft)}this.compile=function(I,nt,yt=null){yt===null&&(yt=I),O!==null&&O.renderStart(I,nt,yt),w=Y.get(yt),w.init(nt),S.push(w),yt.traverseVisible(function(ht){ht.isLight&&ht.layers.test(nt.layers)&&(w.pushLight(ht),ht.castShadow&&w.pushShadow(ht))}),I!==yt&&I.traverseVisible(function(ht){ht.isLight&&ht.layers.test(nt.layers)&&(w.pushLight(ht),ht.castShadow&&w.pushShadow(ht))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Mt=this.localClippingEnabled,St=rt.init(this.clippingPlanes,Mt),St===!0&&rt.setGlobalState(this.clippingPlanes,nt),O!==null&&W.render(w.state.shadowsArray,yt,nt);let ft=new Set;return I.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;let kt=ht.material;if(kt)if(Array.isArray(kt))for(let Vt=0;Vt<kt.length;Vt++){let zt=kt[Vt];De(zt,yt,nt,ht),ft.add(zt)}else De(kt,yt,nt,ht),ft.add(kt)}),w=S.pop(),O!==null&&O.renderEnd(),ft},this.compileAsync=function(I,nt,yt=null){let ft=this.compile(I,nt,yt);return new Promise(ht=>{function kt(){if(ft.forEach(function(Vt){let $t=ut.get(Vt).currentProgram;($t===void 0||$t.isReady())&&ft.delete(Vt)}),ft.size===0){ht(I);return}setTimeout(kt,10)}Yt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Ge=null;function Pt(I){Ge&&Ge(I)}function Xt(){ie.stop()}function te(){ie.start()}let ie=new sp;ie.setAnimationLoop(Pt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(I){Ge=I,Dt.setAnimationLoop(I),I===null?ie.stop():ie.start()},Dt.addEventListener("sessionstart",Xt),Dt.addEventListener("sessionend",te),this.render=function(I,nt){if(nt!==void 0&&nt.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(I,nt);let yt=Dt.enabled===!0&&Dt.isPresenting===!0,ft=P!==null&&(lt===null||yt)&&P.begin(U,lt);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(nt),nt=Dt.getCamera()),I.isScene===!0&&I.onBeforeRender(U,I,nt,lt),w=Y.get(I,S.length),w.init(nt),w.state.textureUnits=pt.getTextureUnits(),S.push(w),wt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),dt.setFromProjectionMatrix(wt,ni,nt.reversedDepth),Mt=this.localClippingEnabled,St=rt.init(this.clippingPlanes,Mt),v=V.get(I,A.length),v.init(),A.push(v),Dt.enabled===!0&&Dt.isPresenting===!0){let Vt=U.xr.getDepthSensingMesh();Vt!==null&&Ce(Vt,nt,-1/0,U.sortObjects)}Ce(I,nt,0,U.sortObjects),v.finish(),O!==null&&O.updateLights(w.state.lightsArray),U.sortObjects===!0&&v.sort(ct,xt),Wt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Wt&&ot.addToRenderList(v,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&rt.beginShadows();let ht=w.state.shadowsArray;if(W.render(ht,I,nt),St===!0&&rt.endShadows(),(ft&&P.hasRenderPass())===!1){let Vt=v.opaque,zt=v.transmissive;if(w.setupLights(),nt.isArrayCamera){let $t=nt.cameras;if(zt.length>0)for(let Qt=0,fe=$t.length;Qt<fe;Qt++){let me=$t[Qt];hi(Vt,zt,I,me)}Wt&&ot.render(I);for(let Qt=0,fe=$t.length;Qt<fe;Qt++){let me=$t[Qt];Vn(v,I,me,me.viewport)}}else zt.length>0&&hi(Vt,zt,I,nt),Wt&&ot.render(I),Vn(v,I,nt)}lt!==null&&J===0&&(pt.updateMultisampleRenderTarget(lt),pt.updateRenderTargetMipmap(lt)),ft&&P.end(U),I.isScene===!0&&I.onAfterRender(U,I,nt),bt.resetDefaultState(),tt=-1,it=null,S.pop(),S.length>0?(w=S[S.length-1],pt.setTextureUnits(w.state.textureUnits),St===!0&&rt.setGlobalState(U.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,O!==null&&O.renderEnd()};function Ce(I,nt,yt,ft){if(I.visible===!1)return;if(I.layers.test(nt.layers)){if(I.isGroup)yt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(nt);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(dt)){ft&&Ut.setFromMatrixPosition(I.matrixWorld).applyMatrix4(wt);let Vt=R.update(I),zt=I.material;zt.visible&&v.push(I,Vt,zt,yt,Ut.z,null,nt)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(dt))){let Vt=R.update(I),zt=I.material;if(ft&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ut.copy(I.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Ut.copy(Vt.boundingSphere.center)),Ut.applyMatrix4(I.matrixWorld).applyMatrix4(wt)),Array.isArray(zt)){let $t=Vt.groups;for(let Qt=0,fe=$t.length;Qt<fe;Qt++){let me=$t[Qt],Jt=zt[me.materialIndex];Jt&&Jt.visible&&v.push(I,Vt,Jt,yt,Ut.z,me,nt)}}else zt.visible&&v.push(I,Vt,zt,yt,Ut.z,null,nt)}}let kt=I.children;for(let Vt=0,zt=kt.length;Vt<zt;Vt++)Ce(kt[Vt],nt,yt,ft)}function Vn(I,nt,yt,ft){let{opaque:ht,transmissive:kt,transparent:Vt}=I;w.setupLightsView(yt),St===!0&&rt.setGlobalState(U.clippingPlanes,yt),ft&&T.viewport(at.copy(ft)),ht.length>0&&Gn(ht,nt,yt),kt.length>0&&Gn(kt,nt,yt),Vt.length>0&&Gn(Vt,nt,yt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function hi(I,nt,yt,ft){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ft.id]===void 0){let Jt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ft.id]=new An(1,1,{generateMipmaps:!0,type:Jt?oi:In,minFilter:ms,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let kt=w.state.transmissionRenderTarget[ft.id],Vt=ft.viewport||at;kt.setSize(Vt.z*U.transmissionResolutionScale,Vt.w*U.transmissionResolutionScale);let zt=U.getRenderTarget(),$t=U.getActiveCubeFace(),Qt=U.getActiveMipmapLevel();U.setRenderTarget(kt),U.getClearColor(Et),Tt=U.getClearAlpha(),Tt<1&&U.setClearColor(16777215,.5),U.clear(),Wt&&ot.render(yt);let fe=U.toneMapping;U.toneMapping=si;let me=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),w.setupLightsView(ft),St===!0&&rt.setGlobalState(U.clippingPlanes,ft),Gn(I,yt,ft),pt.updateMultisampleRenderTarget(kt),pt.updateRenderTargetMipmap(kt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Me=0,Xe=nt.length;Me<Xe;Me++){let Ue=nt[Me],{object:Ie,geometry:fn,material:Gt,group:_n}=Ue;if(Gt.side===on&&Ie.layers.test(ft.layers)){let ve=Gt.side;Gt.side=Mn,Gt.needsUpdate=!0,Li(Ie,yt,ft,fn,Gt,_n),Gt.side=ve,Gt.needsUpdate=!0,Jt=!0}}Jt===!0&&(pt.updateMultisampleRenderTarget(kt),pt.updateRenderTargetMipmap(kt))}U.setRenderTarget(zt,$t,Qt),U.setClearColor(Et,Tt),me!==void 0&&(ft.viewport=me),U.toneMapping=fe}function Gn(I,nt,yt){let ft=nt.isScene===!0?nt.overrideMaterial:null;for(let ht=0,kt=I.length;ht<kt;ht++){let Vt=I[ht],{object:zt,geometry:$t,group:Qt}=Vt,fe=Vt.material;fe.allowOverride===!0&&ft!==null&&(fe=ft),zt.layers.test(yt.layers)&&Li(zt,nt,yt,$t,fe,Qt)}}function Li(I,nt,yt,ft,ht,kt){O!==null&&ht.isNodeMaterial&&O.setObject(I,ht),I.onBeforeRender(U,nt,yt,ft,ht,kt),I.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ht.onBeforeRender(U,nt,yt,ft,I,kt),ht.transparent===!0&&ht.side===on&&ht.forceSinglePass===!1?(ht.side=Mn,ht.needsUpdate=!0,U.renderBufferDirect(yt,nt,ft,ht,I,kt),ht.side=ds,ht.needsUpdate=!0,U.renderBufferDirect(yt,nt,ft,ht,I,kt),ht.side=on):U.renderBufferDirect(yt,nt,ft,ht,I,kt),I.onAfterRender(U,nt,yt,ft,ht,kt)}function hn(I,nt,yt){nt.isScene!==!0&&(nt=Ot);let ft=ut.get(I),ht=w.state.lights,kt=w.state.shadowsArray,Vt=ht.state.version,zt=D.getParameters(I,ht.state,kt,nt,yt,w.state.lightProbeGridArray),$t=D.getProgramCacheKey(zt),Qt=ft.programs;ft.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?nt.environment:null,ft.fog=nt.fog;let fe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ft.envMap=H.get(I.envMap||ft.environment,fe),ft.envMapRotation=ft.environment!==null&&I.envMap===null?nt.environmentRotation:I.envMapRotation,Qt===void 0&&(I.addEventListener("dispose",ye),Qt=new Map,ft.programs=Qt);let me=Qt.get($t);if(me!==void 0){if(ft.currentProgram===me&&ft.lightsStateVersion===Vt)return zr(I,zt),me}else zt.uniforms=D.getUniforms(I),O!==null&&I.isNodeMaterial&&O.build(I,yt,zt),I.onBeforeCompile(zt,U),me=D.acquireProgram(zt,$t),Qt.set($t,me),ft.uniforms=zt.uniforms;let Jt=ft.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Jt.clippingPlanes=rt.uniform),zr(I,zt),ft.needsLights=fi(I),ft.lightsStateVersion=Vt,ft.needsLights&&(Jt.ambientLightColor.value=ht.state.ambient,Jt.lightProbe.value=ht.state.probe,Jt.sunLights.value=ht.state.sun,Jt.sunLightShadows.value=ht.state.sunShadow,Jt.directionalLights.value=ht.state.directional,Jt.directionalLightShadows.value=ht.state.directionalShadow,Jt.spotLights.value=ht.state.spot,Jt.spotLightShadows.value=ht.state.spotShadow,Jt.rectAreaLights.value=ht.state.rectArea,Jt.ltc_1.value=ht.state.rectAreaLTC1,Jt.ltc_2.value=ht.state.rectAreaLTC2,Jt.pointLights.value=ht.state.point,Jt.pointLightShadows.value=ht.state.pointShadow,Jt.hemisphereLights.value=ht.state.hemi,Jt.sunShadowMatrix.value=ht.state.sunShadowMatrix,Jt.sunShadowCascade.value=ht.state.sunShadowCascade,Jt.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,Jt.spotLightMatrix.value=ht.state.spotLightMatrix,Jt.spotLightMap.value=ht.state.spotLightMap,Jt.pointShadowMatrix.value=ht.state.pointShadowMatrix),ft.lightProbeGrid=w.state.lightProbeGridArray.length>0,ft.currentProgram=me,ft.uniformsList=null,me}function na(I){if(I.uniformsList===null){let nt=I.currentProgram.getUniforms();I.uniformsList=Ir.seqWithValue(nt.seq,I.uniforms)}return I.uniformsList}function zr(I,nt){let yt=ut.get(I);yt.outputColorSpace=nt.outputColorSpace,yt.batching=nt.batching,yt.batchingColor=nt.batchingColor,yt.instancing=nt.instancing,yt.instancingColor=nt.instancingColor,yt.instancingMorph=nt.instancingMorph,yt.skinning=nt.skinning,yt.morphTargets=nt.morphTargets,yt.morphNormals=nt.morphNormals,yt.morphColors=nt.morphColors,yt.morphTargetsCount=nt.morphTargetsCount,yt.numClippingPlanes=nt.numClippingPlanes,yt.numIntersection=nt.numClipIntersection,yt.vertexAlphas=nt.vertexAlphas,yt.vertexTangents=nt.vertexTangents,yt.toneMapping=nt.toneMapping}function Vs(I,nt){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;_.setFromMatrixPosition(nt.matrixWorld);for(let yt=0,ft=I.length;yt<ft;yt++){let ht=I[yt];if(ht.texture!==null&&ht.boundingBox.containsPoint(_))return ht}return null}function Ke(I,nt,yt,ft,ht){nt.isScene!==!0&&(nt=Ot),pt.resetTextureUnits();let kt=nt.fog,Vt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial?nt.environment:null,zt=lt===null?U.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:xe.workingColorSpace,$t=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial&&!ft.envMap||ft.isMeshPhongMaterial&&!ft.envMap,Qt=H.get(ft.envMap||Vt,$t),fe=ft.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,me=!!yt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Jt=!!yt.morphAttributes.position,Me=!!yt.morphAttributes.normal,Xe=!!yt.morphAttributes.color,Ue=si;ft.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ue=U.toneMapping);let Ie=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,fn=Ie!==void 0?Ie.length:0,Gt=ut.get(ft),_n=w.state.lights;if(St===!0&&(Mt===!0||I!==it)){let Pe=I===it&&ft.id===tt;rt.setState(ft,I,Pe)}let ve=!1;ft.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==_n.state.version||Gt.outputColorSpace!==zt||ht.isBatchedMesh&&Gt.batching===!1||!ht.isBatchedMesh&&Gt.batching===!0||ht.isBatchedMesh&&Gt.batchingColor===!0&&ht._colorsTexture===null||ht.isBatchedMesh&&Gt.batchingColor===!1&&ht._colorsTexture!==null||ht.isInstancedMesh&&Gt.instancing===!1||!ht.isInstancedMesh&&Gt.instancing===!0||ht.isSkinnedMesh&&Gt.skinning===!1||!ht.isSkinnedMesh&&Gt.skinning===!0||ht.isInstancedMesh&&Gt.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&Gt.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&Gt.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&Gt.instancingMorph===!1&&ht.morphTexture!==null||Gt.envMap!==Qt||ft.fog===!0&&Gt.fog!==kt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==rt.numPlanes||Gt.numIntersection!==rt.numIntersection)||Gt.vertexAlphas!==fe||Gt.vertexTangents!==me||Gt.morphTargets!==Jt||Gt.morphNormals!==Me||Gt.morphColors!==Xe||Gt.toneMapping!==Ue||Gt.morphTargetsCount!==fn||!!Gt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Gt.__version=ft.version);let Wn=Gt.currentProgram;ve===!0&&(Wn=hn(ft,nt,ht),O&&ft.isNodeMaterial&&O.onUpdateProgram(ft,Wn,Gt));let di=!1,Zi=!1,Gs=!1,Re=Wn.getUniforms(),We=Gt.uniforms;if(T.useProgram(Wn.program)&&(di=!0,Zi=!0,Gs=!0),ft.id!==tt&&(tt=ft.id,Zi=!0),Gt.needsLights){let Pe=Vs(w.state.lightProbeGridArray,ht);Gt.lightProbeGrid!==Pe&&(Gt.lightProbeGrid=Pe,Zi=!0)}if(di||it!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Re.setValue(j,"projectionMatrix",I.projectionMatrix),Re.setValue(j,"viewMatrix",I.matrixWorldInverse);let Ji=Re.map.cameraPosition;Ji!==void 0&&Ji.setValue(j,At.setFromMatrixPosition(I.matrixWorld)),B.logarithmicDepthBuffer&&Re.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Re.setValue(j,"isOrthographic",I.isOrthographicCamera===!0),it!==I&&(it=I,Zi=!0,Gs=!0)}if(Gt.needsLights&&(_n.state.sunShadowMap.length>0&&Re.setValue(j,"sunShadowMap",_n.state.sunShadowMap,pt),_n.state.directionalShadowMap.length>0&&Re.setValue(j,"directionalShadowMap",_n.state.directionalShadowMap,pt),_n.state.spotShadowMap.length>0&&Re.setValue(j,"spotShadowMap",_n.state.spotShadowMap,pt),_n.state.pointShadowMap.length>0&&Re.setValue(j,"pointShadowMap",_n.state.pointShadowMap,pt)),ht.isSkinnedMesh){Re.setOptional(j,ht,"bindMatrix"),Re.setOptional(j,ht,"bindMatrixInverse");let Pe=ht.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Re.setValue(j,"boneTexture",Pe.boneTexture,pt))}ht.isBatchedMesh&&(Re.setOptional(j,ht,"batchingTexture"),Re.setValue(j,"batchingTexture",ht._matricesTexture,pt),Re.setOptional(j,ht,"batchingIdTexture"),Re.setValue(j,"batchingIdTexture",ht._indirectTexture,pt),Re.setOptional(j,ht,"batchingColorTexture"),ht._colorsTexture!==null&&Re.setValue(j,"batchingColorTexture",ht._colorsTexture,pt));let $i=yt.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&C.update(ht,yt,Wn),(Zi||Gt.receiveShadow!==ht.receiveShadow)&&(Gt.receiveShadow=ht.receiveShadow,Re.setValue(j,"receiveShadow",ht.receiveShadow)),(ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial)&&ft.envMap===null&&nt.environment!==null&&(We.envMapIntensity.value=nt.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=u1()),Zi){if(Re.setValue(j,"toneMappingExposure",U.toneMappingExposure),Gt.needsLights&&Tn(We,Gs),kt&&ft.fog===!0&&N.refreshFogUniforms(We,kt),N.refreshMaterialUniforms(We,ft,Q,X,w.state.transmissionRenderTarget[I.id]),Gt.needsLights&&Gt.lightProbeGrid){let Pe=Gt.lightProbeGrid;We.probesSH.value=Pe.texture,We.probesMin.value.copy(Pe.boundingBox.min),We.probesMax.value.copy(Pe.boundingBox.max),We.probesResolution.value.copy(Pe.resolution)}Ir.upload(j,na(Gt),We,pt)}if(ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Ir.upload(j,na(Gt),We,pt),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Re.setValue(j,"center",ht.center),Re.setValue(j,"modelViewMatrix",ht.modelViewMatrix),Re.setValue(j,"normalMatrix",ht.normalMatrix),Re.setValue(j,"modelMatrix",ht.matrixWorld),ft.uniformsGroups!==void 0){let Pe=ft.uniformsGroups;for(let Ji=0,Ws=Pe.length;Ji<Ws;Ji++){let rf=Pe[Ji];gt.update(rf,Wn),gt.bind(rf,Wn)}}return Wn}function Tn(I,nt){I.ambientLightColor.needsUpdate=nt,I.lightProbe.needsUpdate=nt,I.sunLights.needsUpdate=nt,I.sunLightShadows.needsUpdate=nt,I.directionalLights.needsUpdate=nt,I.directionalLightShadows.needsUpdate=nt,I.pointLights.needsUpdate=nt,I.pointLightShadows.needsUpdate=nt,I.spotLights.needsUpdate=nt,I.spotLightShadows.needsUpdate=nt,I.rectAreaLights.needsUpdate=nt,I.hemisphereLights.needsUpdate=nt}function fi(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(I,nt,yt){let ft=ut.get(I);ft.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),ut.get(I.texture).__webglTexture=nt,ut.get(I.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:yt,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,nt){let yt=ut.get(I);yt.__webglFramebuffer=nt,yt.__useDefaultFramebuffer=nt===void 0},this.setRenderTarget=function(I,nt=0,yt=0){lt=I,k=nt,J=yt;let ft=null,ht=!1,kt=!1;if(I){let zt=ut.get(I);if(zt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(j.FRAMEBUFFER,zt.__webglFramebuffer),at.copy(I.viewport),Ct.copy(I.scissor),Lt=I.scissorTest,T.viewport(at),T.scissor(Ct),T.setScissorTest(Lt),tt=-1;return}else if(zt.__webglFramebuffer===void 0)pt.setupRenderTarget(I);else if(zt.__hasExternalTextures)pt.rebindTextures(I,ut.get(I.texture).__webglTexture,ut.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let fe=I.depthTexture;if(zt.__boundDepthTexture!==fe){if(fe!==null&&ut.has(fe)&&(I.width!==fe.image.width||I.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(I)}}let $t=I.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(kt=!0);let Qt=ut.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qt[nt])?ft=Qt[nt][yt]:ft=Qt[nt],ht=!0):I.samples>0&&pt.useMultisampledRTT(I)===!1?ft=ut.get(I).__webglMultisampledFramebuffer:Array.isArray(Qt)?ft=Qt[yt]:ft=Qt,at.copy(I.viewport),Ct.copy(I.scissor),Lt=I.scissorTest}else at.copy(_t).multiplyScalar(Q).floor(),Ct.copy(vt).multiplyScalar(Q).floor(),Lt=Rt;if(yt!==0&&(ft=F),T.bindFramebuffer(j.FRAMEBUFFER,ft)&&T.drawBuffers(I,ft),T.viewport(at),T.scissor(Ct),T.setScissorTest(Lt),ht){let zt=ut.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+nt,zt.__webglTexture,yt)}else if(kt){let zt=nt;for(let $t=0;$t<I.textures.length;$t++){let Qt=ut.get(I.textures[$t]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$t,Qt.__webglTexture,yt,zt)}}else if(I!==null&&yt!==0){let zt=ut.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,zt.__webglTexture,yt)}tt=-1};function Ni(I){let nt=ut.get(I);return(nt.__readFormat!==I.format||nt.__readType!==I.type)&&(nt.__readFormat=I.format,nt.__readType=I.type,nt.__formatReadable=B.textureFormatReadable(I.format),nt.__typeReadable=B.textureTypeReadable(I.type)),nt}this.readRenderTargetPixels=function(I,nt,yt,ft,ht,kt,Vt,zt=0){if(!(I&&I.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=ut.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Vt!==void 0&&($t=$t[Vt]),$t){T.bindFramebuffer(j.FRAMEBUFFER,$t);try{let Qt=I.textures[zt],fe=Qt.format,me=Qt.type;I.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+zt);let Jt=Ni(Qt);if(Jt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=I.width-ft&&yt>=0&&yt<=I.height-ht&&j.readPixels(nt,yt,ft,ht,mt.convert(fe),mt.convert(me),kt)}finally{let Qt=lt!==null?ut.get(lt).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(I,nt,yt,ft,ht,kt,Vt,zt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=ut.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Vt!==void 0&&($t=$t[Vt]),$t)if(nt>=0&&nt<=I.width-ft&&yt>=0&&yt<=I.height-ht){T.bindFramebuffer(j.FRAMEBUFFER,$t);let Qt=I.textures[zt],fe=Qt.format,me=Qt.type;I.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+zt);let Jt=Ni(Qt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Me),j.bufferData(j.PIXEL_PACK_BUFFER,kt.byteLength,j.STREAM_READ),j.readPixels(nt,yt,ft,ht,mt.convert(fe),mt.convert(me),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let Xe=lt!==null?ut.get(lt).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Xe);let Ue=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Rd(j,Ue,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Me),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,kt),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Me),j.deleteSync(Ue),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,nt=null,yt=0){let ft=Math.pow(2,-yt),ht=Math.floor(I.image.width*ft),kt=Math.floor(I.image.height*ft),Vt=nt!==null?nt.x:0,zt=nt!==null?nt.y:0;pt.setTexture2D(I,0),j.copyTexSubImage2D(j.TEXTURE_2D,yt,0,0,Vt,zt,ht,kt),T.unbindTexture()},this.copyTextureToTexture=function(I,nt,yt=null,ft=null,ht=0,kt=0){let Vt,zt,$t,Qt,fe,me,Jt,Me,Xe,Ue=I.isCompressedTexture?I.mipmaps[kt]:I.image;if(yt!==null)Vt=yt.max.x-yt.min.x,zt=yt.max.y-yt.min.y,$t=yt.isBox3?yt.max.z-yt.min.z:1,Qt=yt.min.x,fe=yt.min.y,me=yt.isBox3?yt.min.z:0;else{let We=Math.pow(2,-ht);Vt=Math.floor(Ue.width*We),zt=Math.floor(Ue.height*We),I.isDataArrayTexture?$t=Ue.depth:I.isData3DTexture?$t=Math.floor(Ue.depth*We):$t=1,Qt=0,fe=0,me=0}ft!==null?(Jt=ft.x,Me=ft.y,Xe=ft.z):(Jt=0,Me=0,Xe=0);let Ie=mt.convert(nt.format),fn=mt.convert(nt.type),Gt;nt.isData3DTexture?(pt.setTexture3D(nt,0),Gt=j.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(pt.setTexture2DArray(nt,0),Gt=j.TEXTURE_2D_ARRAY):(pt.setTexture2D(nt,0),Gt=j.TEXTURE_2D),T.activeTexture(j.TEXTURE0),T.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,nt.flipY),T.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),T.pixelStorei(j.UNPACK_ALIGNMENT,nt.unpackAlignment);let _n=T.getParameter(j.UNPACK_ROW_LENGTH),ve=T.getParameter(j.UNPACK_IMAGE_HEIGHT),Wn=T.getParameter(j.UNPACK_SKIP_PIXELS),di=T.getParameter(j.UNPACK_SKIP_ROWS),Zi=T.getParameter(j.UNPACK_SKIP_IMAGES);T.pixelStorei(j.UNPACK_ROW_LENGTH,Ue.width),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ue.height),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Qt),T.pixelStorei(j.UNPACK_SKIP_ROWS,fe),T.pixelStorei(j.UNPACK_SKIP_IMAGES,me);let Gs=I.isDataArrayTexture||I.isData3DTexture,Re=nt.isDataArrayTexture||nt.isData3DTexture;if(I.isDepthTexture){let We=ut.get(I),$i=ut.get(nt),Pe=ut.get(We.__renderTarget),Ji=ut.get($i.__renderTarget);T.bindFramebuffer(j.READ_FRAMEBUFFER,Pe.__webglFramebuffer),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Ws=0;Ws<$t;Ws++)Gs&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ut.get(I).__webglTexture,ht,me+Ws),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ut.get(nt).__webglTexture,kt,Xe+Ws)),j.blitFramebuffer(Qt,fe,Vt,zt,Jt,Me,Vt,zt,j.DEPTH_BUFFER_BIT,j.NEAREST);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ht!==0||I.isRenderTargetTexture||ut.has(I)){let We=ut.get(I),$i=ut.get(nt);T.bindFramebuffer(j.READ_FRAMEBUFFER,z),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,q);for(let Pe=0;Pe<$t;Pe++)Gs?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,We.__webglTexture,ht,me+Pe):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,We.__webglTexture,ht),Re?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,$i.__webglTexture,kt,Xe+Pe):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,$i.__webglTexture,kt),ht!==0?j.blitFramebuffer(Qt,fe,Vt,zt,Jt,Me,Vt,zt,j.COLOR_BUFFER_BIT,j.NEAREST):Re?j.copyTexSubImage3D(Gt,kt,Jt,Me,Xe+Pe,Qt,fe,Vt,zt):j.copyTexSubImage2D(Gt,kt,Jt,Me,Qt,fe,Vt,zt);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Re?I.isDataTexture||I.isData3DTexture?j.texSubImage3D(Gt,kt,Jt,Me,Xe,Vt,zt,$t,Ie,fn,Ue.data):nt.isCompressedArrayTexture?j.compressedTexSubImage3D(Gt,kt,Jt,Me,Xe,Vt,zt,$t,Ie,Ue.data):j.texSubImage3D(Gt,kt,Jt,Me,Xe,Vt,zt,$t,Ie,fn,Ue):I.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,kt,Jt,Me,Vt,zt,Ie,fn,Ue.data):I.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,kt,Jt,Me,Ue.width,Ue.height,Ie,Ue.data):j.texSubImage2D(j.TEXTURE_2D,kt,Jt,Me,Vt,zt,Ie,fn,Ue);T.pixelStorei(j.UNPACK_ROW_LENGTH,_n),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ve),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Wn),T.pixelStorei(j.UNPACK_SKIP_ROWS,di),T.pixelStorei(j.UNPACK_SKIP_IMAGES,Zi),kt===0&&nt.generateMipmaps&&j.generateMipmap(Gt),T.unbindTexture()},this.initRenderTarget=function(I){ut.get(I).__webglFramebuffer===void 0&&pt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?pt.setTextureCube(I,0):I.isData3DTexture?pt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?pt.setTexture2DArray(I,0):pt.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){k=0,J=0,lt=null,T.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};(function(i){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),n=new Set(["left","center","right"]),s=(u,d)=>u==="dockAlignment"?n.has(d):e.has(u)&&typeof d=="boolean",r=u=>n.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([d,h])=>s(d,h)))}function a(u,d){return u?.[d]!==!1}function c(u,d,h){if(!s(d,h)||h===(d==="dockAlignment"?r(u):a(u,d)))return u;let f={...u};return h===(d==="dockAlignment"?"right":!0)?delete f[d]:f[d]=h,Object.keys(f).length?f:void 0}function l(u,d){return a(d,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}i.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var Xo=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,hp=Xo.features,gT=Xo.valid,ai=Xo.enabled,hl=Xo.wind,fp=Xo.dockAlignment;function Pn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ce,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=dp(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let g=dp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function dp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new be(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+d,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var ng=Gl(fl(),1);var Yo=new G;function Jn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Yo.copy(t),Yo[n]=0,Yo.normalize();let l=.5*o/(o+a),u=1-Yo.angleTo(i)/c;return Math.sign(Yo[e])===1?u*l:a/(o+a)+l+l*(1-u)}var dl=class i extends Te{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new G,l=new G,u=new G(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new G,p=.5/o;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*r,d[m+1]=u.y*Math.sign(c.y)+l.y*r,d[m+2]=u.z*Math.sign(c.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[y+0]=Jn(x,l,"z","y",r,n),f[y+1]=1-Jn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[y+0]=1-Jn(x,l,"z","y",r,n),f[y+1]=1-Jn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[y+0]=1-Jn(x,l,"x","z",r,t),f[y+1]=Jn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-Jn(x,l,"x","z",r,t),f[y+1]=1-Jn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-Jn(x,l,"x","y",r,t),f[y+1]=1-Jn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[y+0]=Jn(x,l,"x","y",r,t),f[y+1]=1-Jn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var pp=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),h1=Math.PI*2;function f1(){let i=new ae,t=new Te(1,1,1),e=new Le(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new Oe({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,d,h,f,g,x){let p=new he(c,typeof l=="string"?s(l):l);return p.position.set(u,d,h),p.scale.set(f,g,x),a.add(p),p}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let d=u.map(f=>(f.updateMatrix(),f.geometry.toNonIndexed().applyMatrix4(f.matrix))),h=new he(Pn(d),l);h.castShadow=u.some(f=>f.castShadow),d.forEach(f=>f.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function d1({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new Ve({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:on});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let f of[-1,1])t(i,s?"#deb181":"#aa785d",f*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",f*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let d=(a+c)/2,h=c-a;for(let f of[-e/2+l/2,e/2-l/2]){t(i,o,f,c,0,l,1.8,n),t(i,u,f,d,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,f,d,g,l,h,l)}for(let f of[-n/2+l/2,n/2-l/2])t(i,o,0,c,f,e-l*2,1.8,l),t(i,u,0,d,f,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function p1({box:i,oval:t,root:e},n,s,r){let o=new ae;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ae;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function m1(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new Ve({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),d=new Ve({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,p=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,p,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let m=p-1.5,y=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],g*t+m*r,n+3+(2+p*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);y.rotation.z=m*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>p1(i,x,r*(1.72-x*.17),g)),f=Array.from({length:5},(g,x)=>{let p=r*(.45+x%3*.18),m=c(o,d,0,0,0,p,p,p);return m.name="bubble-"+x,m});return g=>{for(let[x,{fish:p,tail:m}]of h.entries()){let y=g*(.43+x*.06)+x*2.07+.5,E=t*(.24+x*.036),_=e*(.17+x*.038);p.position.set(Math.cos(y)*E,n+10+x*3.65+Math.sin(y*1.7)*2.15,Math.sin(y)*_),p.rotation.y=-Math.atan2(Math.cos(y)*_,-Math.sin(y)*E),m.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,p]of f.entries()){let m=(g*.3+x/f.length)%1;p.position.set(t*.33+Math.sin(m*h1+x)*r,n+5+m*20,e*.23),p.visible=m>.08&&m<.94}}}function g1({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let f=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);f.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ae;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,f)=>{let g=a*(1-f*.16);return e(l,f%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),d=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let f of[-1,1]){let g=new ae;g.position.set(f*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*f*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*f*.28;for(let p of[-1,0,1])e(g,"#ecc297",(p*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);d.push({leg:g,side:h,front:f})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let f=h*.35+.7,g=Math.cos(f)*n*.13,x=Math.sin(f)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(f)*s*.09,-Math.sin(f)*n*.13);for(let[p,m]of u.entries()){let y=p+1;m.position.set(-(3.55+y*1.24)*a,-.19*y*a,Math.sin(h*1.75-y*.55)*y*a*.32)}for(let{leg:p,side:m,front:y}of d)p.rotation.y=Math.sin(h*3.6)*m*y*.31}}function mp(i,t,e){if(!Object.hasOwn(pp,i))return null;let n=pp[i],s=f1(),r=n==="aquarium",{base:o,top:a}=d1(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?m1(s,t,e,o,a,c):g1(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,d){l(Math.max(0,d))}}}var et=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),x1=Object.freeze({sage:et.sage,mint:et.aqua,sky:et.blue,peach:et.peach,coral:"#cf8979",lavender:et.lilac,butter:et.honey,cream:et.linen,white:et.cream,oak:et.oakLight,walnut:et.walnut,charcoal:"#505b68",brass:et.brass,terracotta:"#b97d63",forest:et.moss,blush:et.blush,teddy:"#aa8063",slate:"#9b9b9d"}),y1=new Set([et.oak,et.oakLight,et.walnut]),_1=new Set([et.sage,et.moss,et.linen,et.lilac,et.lilacLight,et.blush,et.peach,et.oatmeal,et.upholsteryShadow,et.denim]);function v1(i,t){let e=y1.has(i)?1:_1.has(i)?2:0,n=i===et.glass||i===et.darkGlass||i===et.blueWater,s=i===et.brass,r=i===et.steel||i===et.basinSteel,o=new Oe({color:i,roughness:s||r?.37:n?.33:i===et.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var _h=class{constructor(t,e){this.root=new ae,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,v1(e,this.grainDirection));let a=new he(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),d=u>.2?new dl(s,r,o,2,u):new Te(s,r,o);return this.part(d,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new nn(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Le(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new mn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Nt(l,u)),c=new bo(a,24);return c.scale(s,r,o),this.part(c,et.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Pn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new he(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Mi(i,t,e,n,s,r,o=et.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function qo(i,t,e,n,s,r,o,a){let c=o===et.linen?et.binding:et.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function b1(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?et.upholsteryShadow:et.moss,u=a?et.oatmeal:et.sage,d=o?t*.5:t,h=r&&!o?e*.57:e,f=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(Mi(i,f,g,d,h,5),i.box(f,5,g,d*.97,22,h*.98,l,8),r){let v=o?t*.52:t*.34,w=o?e*.38:e*.46,A=o?t*.22:-t*.32,S=o?c*e*.3:e*.25;Mi(i,A,S,v,w,5),i.box(A,5,S,v,22,w,l,8),i.box(A,25,S,v*.96,12,w*.9,n,5),o&&i.box(A,29,c*e*.464,v,26,x,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let v=e*.88/p;for(let w=0;w<p;w++){let A=-e*.44+v*(w+.5);i.box(f+x*.18,25,A,d*.76,12,v-3,n,5),i.box(f-d*.39,27,A,d*.22,31,v-1,u,8)}i.box(f,29,-c*e*.445,d*.88,20,x,u,6),qo(i,f+d*.13,35,-e*.31,d*.42,v*.49,a?et.sage:et.peach,-.18),qo(i,f+d*.12,35,e*.28,d*.4,v*.45,et.linen,.2)}else{let v=t*.8/p;for(let w=0;w<p;w++){let A=-t*.4+v*(w+.5);i.box(A,25,g+h*.08,v-3,12,h*.7,n,6),i.box(A,27,g-h*.39,v-1,31,h*.24,u,7)}for(let w of[-t*.442,t*.442])i.box(w,26,g,x,22,h*.89,u,6);qo(i,-t*.27,35,g-h*.15,t*.18,h*.34,et.peach,-.18),qo(i,t*.27,35,g-h*.12,t*.17,h*.33,et.linen,.2)}let m=o?d*.67:d*.19,y=o?e*.14:h*.58,E=o?f+d*.06:d*.32,_=o?e*.13:g+h*.1;i.box(E,37.1,_,m,1.7,y,et.lilacLight,.65);for(let v of[-1,1])i.box(E,38.82,_+v*y*.36,m*.9,.25,1.2,et.lilac);return 58}function ci(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Mi(i,t,e,n,s,c,et.walnut),i.box(t,c,e,n*.9,7,s*.92,et.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,d=e-Math.cos(r)*s*.39;i.box(u,c+9,d,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function S1(i,t,e,n){let s=-e*.39;Mi(i,0,0,t,e,20,et.walnut),i.box(0,20,0,t*.9,6,e*.92,et.walnut,2),i.box(0,24,0,t*.83,6,e*.83,n,2.5);for(let r of[-1,1])i.box(t*.34*r,23,s,t*.075,18,e*.12,et.walnut,1.1);return i.box(0,37,s,t*.84,22,e*.22,n,4),59}function pl(i,t,e,n,s){return s==="round"?(i.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),et.walnut),i.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),et.walnut,1.5),i.disc(0,33,0,t/2,8,e/2,n,.96),41):s==="classic"?(Mi(i,0,0,t*(.69/.79),e*(.49/.57),35),i.box(0,32,0,t*(.72/.79),6,e*(.5/.57),et.walnut,3),i.box(0,37,0,t,8,e,n,4),i.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),et.linen,.6),46.4):(Mi(i,0,0,t*(.69/.79),e*(.47/.56),34),i.box(0,33,0,t,8,e,n,3),i.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),et.linen,.5),42.3)}function M1(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return ci(i,0,-e*.39,t*.2,e*.23,0,et.denim),ci(i,0,e*.39,t*.2,e*.23,Math.PI,et.denim),ci(i,-t*.415,0,t*.17,e*.27,Math.PI/2,et.denim),ci(i,t*.415,0,t*.17,e*.27,-Math.PI/2,et.denim),pl(i,t*.79,e*.57,et.oak,"classic");if(r)ci(i,0,-e*.37,t*.2,e*.2,0,et.sage),ci(i,0,e*.37,t*.2,e*.2,Math.PI,et.blush),ci(i,-t*.38,0,t*.2,e*.2,Math.PI/2,et.lilac),ci(i,t*.38,0,t*.2,e*.2,-Math.PI/2,et.honey),pl(i,t*.58,e*.58,n,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[et.sage,et.blush,et.lilac,et.honey];for(let u=0;u<c.length;u++)for(let d of[-1,1])ci(i,t*c[u],e*.37*d,t*(a?.19:.15),e*.23,d<0?0:Math.PI,l[(u+(d<0?0:2))%l.length]);pl(i,t*.79,e*.56,n,"styled")}return 42}function w1(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,et.ink,.5),i.box(t,e+1,n,s*.1,14,4,et.ink,1),i.box(t,e+12,n,s,25,6,et.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,et.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,et.blue,.2)}function E1(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,d=s?r/2:0;s&&i.box(l,37,d+.8,a,7,u-1.6,n,2.4),i.box(l,4,d,a*.81,34,u*.81,et.walnut,2.8);for(let h=0;h<3;h++){let f=6+h*9.7;i.box(l,f,d+u*.41,a*.74,8.4,2,et.oak,.7),i.box(l,f+3,d+u*.43,a*.26,2,2,et.brass,.5)}}return w1(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,et.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,et.peach),81}function gp(i,t,e,n,s,r){let o=new Fn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,d=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...d):o.lineTo(...d)}o.closePath();let a=new rs(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function T1(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Mi(i,0,0,t,e,6,et.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,et.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,et.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,et.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,et.lilacLight,1);let d=t>=145?[-t*.2,t*.2]:[0];for(let f of d)qo(i,f,u+22,-e*.275,t*(d.length===2?.34:.49),e*.2,et.linen,f<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[f,g,x,p]of[[-.24,.12,1,et.cream],[.23,.27,.79,et.honey],[.08,.04,.57,et.cream],[-.1,.34,.62,et.honey]])gp(i,t*f,u+30.8,e*g,h*x,p);for(let f of[-.32,-.17,0,.17,.32])i.box(t*f,u+30.71,e*.24,.85,.24,e*.33,et.lilacLight,0);for(let f of[.09,.195,.3,.405])i.box(0,u+30.72,e*f,t*.71,.24,.9,et.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,et.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let d of[-1,1])i.box(t*.45*u,4,e*.46*d,5,l,6,et.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let d=-3;d<=3;d++)i.box(t*.45*u,l-29,e*d*.105,3,20,3,n,.8)}return l}function A1(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Mi(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,et.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,et.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let d=0;d<l;d++){let h=t*.89/l,f=(a-8)/c,g=h*(d-(l-1)/2),x=5+u*f;i.box(g,x,e*.46,h-2,f-1.5,2.9,n,1),i.oval(g,x+f*.45,e*.51,2.2,1.7,2.2,et.brass)}return a+2}function R1(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,et.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,et.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,et.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?et.lilac:et.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,et.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?et.lilacLight:et.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,et.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,et.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,et.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])gp(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,et.cream);return 5}function C1(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,et.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,et.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,et.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,et.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,et.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,et.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,et.darkGlass);i.box(0,n-4.5,o,s,4.85,u,et.steel,.4);let d=-s/2-u*1.15;i.disc(d,n,o,u*.8,u*2.9,u*.8,et.steel),i.box(d+u,n+u*2.5,o,u*2.8,u*.7,u,et.steel,.6)}function I1(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?et.sage:et.walnut,2.3),s?C1(i,t,e,r+2):i.box(0,r-3,0,t,5,e,et.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let d=c?2.2:t*.29,h=c?e*.29:2.2,f=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(f,6,g,d,r*.67,h,a?et.moss:et.oak,.8),i.box(f,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,et.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,et.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let d=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,d,d,1,et.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,et.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,et.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,et.brass,1);return r+3}function P1(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,et.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,et.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,et.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,et.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,et.glass),i.disc(0,22,-e*.44,3.5,9,3.5,et.brass),i.box(0,30,-e*.4,5,3.7,e*.1,et.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,et.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,et.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,et.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,et.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,et.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,et.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,et.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,et.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,et.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,et.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,et.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,et.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,et.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,et.blush,1.7),36)}function L1(i,t,e,n,s){let r=n?et.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,et.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,et.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,et.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,et.linen,3.8),c+o*(n?.37:.28)}function N1(i,t,e){let s=[et.sage,et.peach,et.honey,et.lilac,et.blue,et.blush];Mi(i,0,0,t*.96,e*.96,22,et.sage),i.box(0,20,0,t*.94,7,e*.93,et.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function D1(i,t,e,n){let s=[et.linen,n,et.sand,et.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function U1(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,et.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,et.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,d=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,et.moss);d.rotation.z=-c/u,d.rotation.x=l/u;let h=n?et.sage:[et.blush,et.linen,et.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function xp(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return mp(t,e,n);let s=x1[t.split("-").at(-1)],r=new _h(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=b1(r,e,n,s||(t==="sofa"?et.linen:et.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,et.walnut,3.5),r.box(0,24,0,e,4,n,et.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,et.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,et.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,et.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,et.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,et.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=M1(r,e,n,s||et.oakLight,t);else if(t==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(t)){let a=t==="diningTable"?"classic":t.includes("round-dining")?"round":"styled";o=pl(r,e,n,s||(a==="classic"?et.oak:et.oakLight),a)}else if(t==="diningChair"||t.startsWith("living-dining-chair-"))o=S1(r,e,n,s||et.denim);else if(t==="desk"||t.includes("-desk-"))o=E1(r,e,n,s||et.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))ci(r,0,0,e,n,0,s||et.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){ci(r,0,0,e,n,0,s||et.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,et.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=T1(r,e,n,s||et.lilac,t);else if(t==="rug")o=R1(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=I1(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=P1(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=U1(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,et.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,et.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,et.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=A1(r,e,n,s||et.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Mi(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||et.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,et.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=L1(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=D1(r,e,n,s||et.sage);else if(t.startsWith("baby-activities-"))o=N1(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||et.peach),r.ring(0,a,0,a*.95,a*.95,1.2,et.linen),o=a*2}else return null;return r.finish(o)}var Zt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},$o=Math.PI,vh=2*$o,F1=new Set(["unknown","unavailable"]),jn=(i,t,e)=>Math.max(t,Math.min(e,i)),Zo=(i,t)=>Number.isFinite(i)?jn(i,12,480):t,vp=.96,bp=.09;function Sp(i,t,e){let n=Zo(i.w,42),s=Zo(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*bp)<=s*vp/2}var pe=(i,t={})=>new Oe({color:i,roughness:.83,...t}),bh=i=>String(i?.state??"unknown"),Fs=i=>!F1.has(bh(i)),Nr=i=>Fs(i)&&(i.active===!0||i.state==="on"),O1=i=>Nr(i)?Number.isFinite(i.attributes?.brightness)?jn(i.attributes.brightness/255,0,1):1:0;function Gi(i,t,e,n=0,s=0,r=0){let o=new he(t,e);return o.position.set(n,s,r),i.add(o),o}function sn(i,t,e,n,s,r=0,o=0,a=0){return Gi(i,new Te(t,e,n),s,r,o,a)}function yn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,d=l-e/2,h=new Fn;h.moveTo(u,d),h.lineTo(-u,d),h.lineTo(-u,-d),h.lineTo(u,-d),h.closePath();let f=new zi(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return f.translate(0,0,l-n/2),Gi(i,f,s,r,o,a)}function je(i,t,e,n,s,r=0,o=0,a=0,c=16){return Gi(i,new nn(t,e,n,c),s,r,o,a)}function li(i,t,e,n,s,r){return Gi(i,new Le(t,10,7),e,n,s,r)}function Lr(i,t=0,e=0,n=0){let s=new ae;return s.position.set(t,e,n),i.add(s),s}function B1(i,t,e=2.8){let n=new Ze({transparent:!0,depthWrite:!1,blending:Io,uniforms:{strength:{value:0},tint:{value:new qt(Zt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=Gi(i,new Hi(2*t,2*t),n,0,e,0);return s.rotation.x=-$o/2,s.visible=!1,(r,o)=>{s.visible=r>0,n.uniforms.strength.value=r*.29,n.uniforms.tint.value.copy(o)}}function k1(i,t,e){let n=new ae,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),d=Math.min(t,e),h=pe(Zt.honey),f=pe(Zt.ink),g=pe(Zt.brass,{roughness:.36,metalness:.42}),x=pe(Zt.cream,{emissive:Zt.warm,emissiveIntensity:0}),p=new qt(Zt.warm),m=u?46:o?50:a?56:l?40:c?56:36,y=!a&&!c&&!l,E=y?jn(d*.68,15,46):jn(d*(a?1.72:1.35),38,110),_=B1(n,E,y?16.8:2.8);if(a){let v=d*(u?.19:.29);je(n,v,v*1.02,3,f,0,m+2),o&&je(n,1.7,1.7,13,h,0,m+9),je(n,v*.82,v,5,h,0,m-1.5),je(n,v*.92,v*.96,1.15,g,0,m+1.1);let w=li(n,v*.83,x,0,m,0);w.scale.y=o?.88:.52}else if(l)yn(n,d*.34,18,4,f,0,35,-4),je(n,d*.12,d*.11,14,h,0,37,3),li(n,d*.21,x,0,m+3,3);else{let v=m-7,w=c?3:16,A=d*(c?.25:.3);if(je(n,A*.57,A*.67,4,f,0,w),je(n,2,2.9,v-w,h,0,(w+v)/2),c)li(n,A*.81,x,0,m,0);else{let S=r==="bud_lamp"?12:9;je(n,A*.56,A,14,x,0,m,0,S),je(n,A,A*.99,1.2,g,0,m-6.7,0,S),je(n,A*.55,A*.58,1.1,g,0,m+7.1,0,S)}}return{root:n,anchorY:m+2,animate(v){let w=O1(v),A=v?.attributes?.rgb_color;if(Array.isArray(A)&&A.length===3&&A.every(Number.isFinite)){let[S,P,U]=A.map(L=>jn(L/255,0,1));p.setRGB(S,P,U,qe)}else p.setHex(Zt.warm);_(w,p),x.emissiveIntensity=w*.88,x.emissive.copy(p),w>0?x.color.copy(p):x.color.setHex(Zt.cream)}}}function z1(i){let t=new Fn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new zi(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-$o/2)}function yp(i,t,e,n){let s=new ae,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Lr(s,0,o,0);n&&(a.rotation.x=$o/2);let c=Lr(a,0,-1,0),l=pe(Zt.cream),u=pe(Zt.ink),d=/(?:white|cream)$/.test(i.type)?Zt.oat:/(?:forest|sage)$/.test(i.type)?Zt.sage:Zt.honey,h=pe(d),f=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;je(a,r*.18,r*.2,6,u),je(a,r*.174,r*.176,1.4,pe(Zt.brass,{roughness:.36,metalness:.42}),0,3.4),je(a,r*.15,r*.17,2.6,l,0,4.9);let g=z1(r);for(let x=0;x<f;x++){let p=Lr(c);p.rotation.y=x/f*vh,Gi(p,g,h)}if(n){yn(s,r*1.66,6,r*1.02,u,0,3),sn(s,r*.3,11,6,l,0,10);let x=Gi(s,new mn(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let p=-1;p<=1;p++){let m=p*r*.5;je(s,.68,.68,2*Math.sqrt(r*r-m*m),u,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,p=0){let m=Number.isFinite(x?.attributes?.percentage)?jn(x.attributes.percentage/100,.12,1):.64;c.rotation.y=Nr(x)?p*vh*m%vh:0}}}function H1(i,t){let e=new ae,n=t.mountY??39,s=Lr(e,0,n),r=jn(i*.72,17,27);yn(s,r,31,5,pe(Zt.ink),0,0,-.5),yn(s,r-1.9,29,4.4,pe(Zt.cream),0,.3,1);let o=pe(Zt.oat,{emissive:Zt.warm,emissiveIntensity:0}),a=yn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let d=pe(Zt.teal,{emissive:Zt.mint,emissiveIntensity:0});return li(s,1.85,d,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=Fs(l)?Nr(l)?-.16:.16:0,o.emissiveIntensity=Nr(l)?.42:0;let d=l?.presence==="on";for(let h=0;h<c.length;h++){let f=d?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(d?Zt.mint:Zt.teal),c[h].material.emissiveIntensity=d?.75+f*1.9:0,c[h].scale.setScalar(d?1+f*.18:1)}}}}function _p(i,t,e,n=31){let s=new ae,r=36.5,o=Math.max(12,i-6),a=pe(Zt.oat);if(t){let h=pe(Zt.glass,{roughness:.32});sn(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])sn(s,3.2,n+2,7.5,a,g,r);let f=r+n/2;sn(s,o,1.8,7,h,0,f+.35);for(let g of[-4.25,4.25])sn(s,o+2,3.2,1.5,a,0,f,g);sn(s,o+3,3.8,11,a,0,r-n/2,1.4),sn(s,o,1.35,.5,pe(Zt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=pe(Zt.cream),l=r+n/2-1;yn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,f)=>sn(s,o-5,n/8-.45,3,c,0,l-f*(n/8),6.9)),d=0;return{root:s,anchorY:r+1.5,animate(h,f,g,x=!1){let p=Sh(h),m=p===null?x?0:d:1-p;x||(d=m);let y=Number.isFinite(h?.attributes?.current_tilt_position)?jn(h.attributes.current_tilt_position/100,0,1):0;for(let E=0;E<u.length;E++){let _=jn(m*u.length-E,0,1);u[E].visible=_>.02,u[E].scale.y=_,u[E].rotation.x=y*.9}}}}function Sh(i){return Fs(i)?Number.isFinite(i.attributes?.current_position)?jn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function V1(i,t){let e=new ae,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=pe(Zt.oat),l=pe(Zt.cream),u=pe(Zt.plum),d=[pe(Zt.tile),pe(Zt.paleTile)],h=pe(Zt.dark);sn(e,i,5,t*vp,l,0,2.5,t*bp),sn(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let L of[-i*.42,i*.42])sn(e,i*.09,o+4,n,c,L,(o+4)/2),yn(e,i*.1,o+4,5,l,L,(o+4)/2,r+1,1.5);let f=new Fn;f.moveTo(-i*.49,0),f.lineTo(i*.49,0),f.lineTo(0,a),f.closePath();let g=new zi(f,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Gi(e,g,u,0,o+4);let x=i*.49,p=Math.atan2(a,x),m=Math.hypot(a,x),y=(n+11)/8,E=[[],[]];for(let L of[-1,1])for(let O=0;O<8;O++){let F=-r-5.5+(O+.5)*y,z=new Te(m*.97,2.2,y-.62);z.rotateZ(-L*p),z.translate(L*x*.5,o+5.65+a*.5,F),E[O%2].push(z)}E.forEach((L,O)=>{Gi(e,Pn(L),d[O]),L.forEach(F=>F.dispose())}),yn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),sn(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),sn(e,s,o,1.5,h,0,o/2+4,r-4);for(let L of e.children)L.isMesh&&(L.castShadow=!0);let _=pe(Zt.mint),v=pe(Zt.sage),A=(o-3)/6,S=Array.from({length:6},(L,O)=>{let F=Lr(e,0,o-(O+.5)*A+2,r+.5);return yn(F,s-2,A-.7,3.4,_,0,0,0,1.2),sn(F,s*.91,.68,.7,v,0,A*.23,1.8),O===5&&yn(F,s*.13,2,2.2,l,0,0,2.3,.55),F}),P=pe(Zt.gold,{emissive:Zt.ember,emissiveIntensity:0});li(e,3.7,P,i*.422,o*.73,r+4.5);let U=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(L,O=0,F,z=!1){let k=Sh(L)??(z?0:U);z||(U=k),_.color.setHex(Fs(L)?Zt.mint:Zt.muted),v.color.setHex(Fs(L)?Zt.sage:Zt.muted);let J=(1-k)*S.length;S.forEach((tt,it)=>{let at=jn(J-it,0,1);tt.visible=at>.02,tt.scale.y=at,tt.position.y=o-(it+at/2)*A+2});let lt=["opening","closing"].includes(bh(L));P.emissiveIntensity=lt?.55+(.5+.5*Math.cos(O*6)):0}}}function G1(i){let t=new ae,e=46,n=pe(Zt.cream),s=pe(Zt.honey),r=Math.min(i*.86,88),o=Lr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])sn(t,3.4,e,5,n,c,e/2);sn(t,r+4,3,5,n,0,e),yn(o,r-2,e-4,4,s,r/2,e/2,0,2),li(o,2.2,pe(Zt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,d=!1){let f=Sh(c)??(d?0:a);d||(a=f),o.rotation.y=-1.32*f,s.color.setHex(Fs(c)?Zt.honey:Zt.muted)}}}function W1(i,t,e){let n=new ae,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=jn(t*.85,23,126),a=pe(Zt.dark,{emissive:Zt.mint,emissiveIntensity:0});if(yn(n,o,s?25:18,8,pe(Zt.cream),0,r,0),s){yn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])li(n,1.35,pe(Zt.oat),o*c,r-7,4.3)}else sn(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",d=Fs(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Zt.warm:Zt.glass),a.emissiveIntensity=d?1.15:Nr(c)?.25:0}}}function X1(i,t,e){let n=new ae,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=pe(Zt.cream),c=pe(r?Zt.glass:Zt.sage),l=pe(Zt.teal,{emissive:Zt.mint,emissiveIntensity:0}),u=o-1;if(je(n,s*.46,s*.5,4,pe(Zt.ink),0,2),r){let f=li(n,s/2,c,0,13,0);f.scale.y=22/s,je(n,s*.19,s*.22,3.5,a,0,u)}else{yn(n,s,24,s*.82,c,0,15,0,5),yn(n,s*.91,3.8,s*.71,a,0,u);for(let f=-1;f<=1;f++)sn(n,s*.66,1.2,1.1,l,0,u+2,f*3.5)}li(n,1.6,l,s*.18,u-2,s*.31);let d=pe(Zt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(f,g)=>li(n,2.1+g*.6,d,0,u+3,0));return{root:n,anchorY:u,animate(f,g=0){let x=Nr(f);l.emissiveIntensity=x?1.6:0;for(let p=0;p<h.length;p++){h[p].visible=x;let m=(g*.68+p/h.length)%1;h[p].position.set(Math.sin(m*$o)*3.1,u+4+m*14,0),h[p].scale.setScalar(.7+m*.62)}}}}function Y1(i,t){let e=new ae,n=Math.min(i,t)*.42,s=.72;e.scale.setScalar(s);let r=pe(Zt.sage,{emissive:Zt.mint,emissiveIntensity:0}),o=pe(Zt.ink);je(e,n,n*.95,7,o,0,4.6),je(e,n*.96,n,5.5,pe(Zt.cream),0,10.2),je(e,n*.28,n*.33,4,pe(Zt.oat),0,14,-n*.23);for(let c of[-.27,.27])li(e,n*.105,o,n*c,10,n*.88);let a=yn(e,n*.68,1.2,2.5,r,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03*s,animate(c,l=0,u=!1){let d=["cleaning","returning"].includes(bh(c));a.material.emissiveIntensity=d?u?.6+.5*Math.cos(l*6):.3:0}}}function Mp(i,t={}){let e=Zo(i.w,42),n=Zo(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?H1(e,t):s==="garageDoor"?V1(e,n):s==="door"||r==="door"?G1(e):s==="window"?_p(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?_p(Zo(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?W1(i,e,t):s==="airPurifier"||s==="humidifier"?X1(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?Y1(e,n):s==="windowFan"?yp(i,e,n,!0):r==="fan"||/^fans-/.test(s)?yp(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?k1(i,e,n):null}var Cp=Gl(fl(),1),{difference:Ip,union:Pp}=Cp.default,xl=18,kn=.001,wi=(i,t)=>i[0]*t[0]+i[1]*t[1],Os=(i,t)=>i[0]*t[1]-i[1]*t[0],Ei=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ne=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],_l=([i,t])=>[-t,i],wp=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],ml=i=>i.map(({x:t,y:e})=>[t,e]),Wi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Lp=i=>i.length?Pp(...i):[];function yl(i,t,e,n=0){let s=Ei(t,i),r=Math.hypot(...s);if(r<kn)return null;let o=s.map(u=>u/r),a=_l(o),c=Ne(i,o,-n),l=Ne(t,o,n);return Wi([Ne(c,a,e),Ne(l,a,e),Ne(l,a,-e),Ne(c,a,-e)])}function gl(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function Ep(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Ei(n,t),r=Math.hypot(...s);return r>kn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function q1(i,t,e,n){if(Math.abs(wi(i.tangent,t.tangent))<.9999)return null;let s=_l(i.tangent),[r,o]=[t.start,t.end].map(x=>Ei(x,i.start)),a=wi(r,s);if(Math.abs(a)<.1||Math.abs(a)>xl||Math.abs(a-wi(o,s))>.1)return null;let c=[wi(r,i.tangent),wi(o,i.tangent)].sort((x,p)=>x-p),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let d=Ne(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!gl(e,Ne(d,s,-h))||!gl(n,Ne(d,s,a+h))||gl(e,Ne(d,s,a/2))||gl(n,Ne(d,s,a/2)))return null;let f=Ne(i.start,i.tangent,l),g=Ne(i.start,i.tangent,u);return Wi([Ne(f,s,-h*.05),Ne(g,s,-h*.05),Ne(g,s,a+h*.05),Ne(f,s,a+h*.05)])}function Np(i){let t=[],e=[];for(let n of[...i].reverse()){let s=Lp(n.polygons);if(!s.length)continue;let r=t.length?Ip(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?Pp(t,s):s}return{footprint:t,regions:e.reverse()}}function Jo(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Dp(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:ml(h.points),polygons:[Wi(ml(h.points))],outdoor:e&&Jo(h)})),s=[];for(let[h,f]of n.entries())for(let g of n.slice(h+1))for(let x of Ep(f.points))for(let p of Ep(g.points)){let m=q1(x,p,f.points,g.points);m&&s.push({surface:f.surface,polygons:[m],outdoor:f.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:f,stepBottom:g,deckBottom:x,northDeck:p,southDeck:m,recess:y}=t;r.push({surface:"patio",polygons:[Wi(ml(p)),Wi(ml(m)),Wi(wp(h,g,f+1,x))]}),y.x2>y.x1&&y.z2>y.z1&&o.push({surface:"oak",polygons:[Wi(wp(y.x1,y.z1,y.x2,y.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=Np([...l,...c]),d=t||e?Lp(c.flatMap(h=>h.polygons)):[];return{...u,foundation:d}}function Z1(i,t,e,n){let s=Os(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Ne(i,_l(t),r),a=Ne(i,_l(e),-r),c=Os(Ei(a,o),e)/s,l=Ne(o,t,c);return Math.hypot(...Ei(l,i))>n*2.5?Wi([i,o,a]):Wi([i,o,l,a])}function Tp(i,t){let e=Os(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=Ei(t.point,i.point);return[Os(n,t.tangent)/e,Os(n,i.tangent)/e]}function $1(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=Ei(r.point,s.point);if(Math.hypot(...o)>xl)continue;let a=Tp(s,r);a&&a.every(c=>c>=-xl&&c<=kn)?e.push({a:s,b:r,center:Ne(s.point,s.tangent,a[0])}):!a&&wi(s.tangent,r.tangent)<0&&wi(o,s.tangent)<=kn&&wi(o,r.tangent)>=-kn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Tp(s,o);if(!a)continue;let[c,l]=a;c<-xl||c>=-kn||l<=kn||l>=r.length-kn||r.openings.some(({start:u,end:d})=>l>=u&&l<=d)||e.push({a:s,center:Ne(s.point,s.tangent,c)})}}return e}function Ap({a:i,b:t,center:e},n){return e?[yl(i.point,e,n,.1),t&&yl(t.point,e,n,.1),t&&Z1(e,i.tangent,t.tangent,n)].filter(Boolean):[yl(i.point,t.point,n,.1)].filter(Boolean)}function Up(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function J1(i,t){return Up(i).flatMap(([e,n])=>{let s=Ei(n,e),r=Math.hypot(...s);if(r<kn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Ei(a,e),u=Ei(c,e);if(Math.abs(Os(l,o))>kn||Math.abs(Os(u,o))>kn)return[];let[d,h]=[wi(l,o),wi(u,o)].sort((x,p)=>x-p),f=Math.max(0,d),g=Math.min(r,h);return g-f>kn?[[Ne(e,o,f),Ne(e,o,g)]]:[]})})}function Rp(i,t){return t?.length?Ip(i,t):i}function Fp(i,t,e,n){let s=[],r=(c,l,u,d,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:d,priority:h})};for(let c of i){let{palette:[l,u,d]}=c,h=[c.x1,c.y1],f=[c.dx,c.dz],g=(y,E,_,v,w,A,S)=>{E-y>kn&&r(yl(Ne(h,f,y),Ne(h,f,E),w/2),_,v,A,S)},x=c.openings.length?n:0,p=(y,E)=>{g(y,E,x,e,t,l,2),g(y,E,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let m=0;for(let y of c.openings)p(m,y.start),m=Math.max(m,y.end);p(m,c.length),g(0,c.length,0,3,t+3,d,1)}for(let c of $1(i)){let[l,u,d]=c.a.wall.palette;for(let h of Ap(c,t/2))r(h,0,e,l,2);for(let h of Ap(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,d,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],d=new Map,h=s.filter(f=>f.from<=u&&f.to>=c);for(let{surface:f,shape:g}of h.sort((x,p)=>x.priority-p.priority))d.has(f)||d.set(f,{surface:f,polygons:[]}),d.get(f).polygons.push(g);return{...Np([...d.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:d},h)=>{let f=Up(l);return c.map(g=>({...g,bottom:u,top:d,faces:{top:Rp(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:Rp(g.polygons,a[h-1]?.footprint),sides:J1(g.polygons,f)}}))})}var j1=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),K1=3,Q1={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},Op=Object.fromEntries(Object.entries(Q1).map(([i,t])=>[i,t.map(e=>new qt(e))])),tS=new qt("#ffc38b"),{clamp:eS,lerp:jo,smoothstep:Bp}=se;function kp(i,t,e){i.toneMapping=Po,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Ps,i.shadowMap.autoUpdate=!1;let n=new Is("#fff4e5","#897e91",1.13),s=new us("#fff0d4",2.15),r=new us("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,d=(c+l)/2;s.position.set(u-610,1150,d-490),s.target.position.set(u,0,d),r.position.set(u+290,410,d+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let f=Array.from({length:K1},()=>new Ao("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...f);let g=[],x,p,m=!0,y=new qt;function E(){for(let w of t.children)w.isMesh&&(w.receiveShadow=!0,w.geometry.computeBoundingBox(),w.castShadow=w.geometry.boundingBox.max.y+w.position.y>-99)}function _(w,A){let S=/(light|lamp|sconce)/i.test(w.type),P=!A.animate||S;A.root.traverse(U=>{!U.isMesh||U.material.transparent||U.material.isShaderMaterial||(U.receiveShadow=!0,U.castShadow||=P)}),S&&w.entityId&&g.push({item:w,object:A})}function v(w,A,S,P=!1){let U=w.night===!0,L=j1.has(w.condition),O=Number.isFinite(w.sunElevation)?Math.round(w.sunElevation*2)/2:U?-12:35,F=Bp(O,-8,19),z=`${L}:${eS(O,-8,35)}`;if(z!==x){let q=Op[L?"overcast":"clear"],k=[n.color,n.groundColor,s.color,S.color,t.background];for(let[lt,tt]of k.entries())tt.lerpColors(Op.night[lt],q[lt],F);let J=F*(1-Bp(O,8,34));L||s.color.lerp(tS,J*.8),n.intensity=jo(.75,L?1.33:1.12,F),s.intensity=jo(.28,L?.86:2.14,F),r.intensity=jo(.12,.23,F),s.shadow.intensity=jo(.65,L?.39:.84,F),x=z,p=void 0}if(p!==A||P){let q=g.flatMap(({item:k,object:J})=>{let lt=A[k.id];if(lt?.state!=="on")return[];let tt=Number.isFinite(lt.attributes?.brightness)?se.clamp(lt.attributes.brightness/255,0,1):1;return tt>0?[{object:J,power:tt,color:lt.attributes?.rgb_color}]:[]}).sort((k,J)=>J.power-k.power);for(let[k,J]of f.entries()){let lt=q[k];if(!lt){J.intensity=0;continue}let{object:tt,power:it,color:at}=lt;Array.isArray(at)&&at.length===3&&at.every(Number.isFinite)?(y.setRGB(...at.map(Lt=>se.clamp(Lt/255,0,1)),qe),J.color.copy(y)):J.color.set("#ffd5a2"),J.position.copy(tt.root.position),J.position.y+=Math.max(18,(tt.anchorY-9)*tt.root.scale.y),J.intensity=it*jo(2350,1250,F)}p=A}m&&(i.shadowMap.needsUpdate=!0,m=!1)}return{markStructure:E,register:_,update:v,dispose:()=>s.shadow.dispose()}}var Ti=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),Dr=Object.freeze({default:Ti("Default",0,0),top:Ti("Top down",0,0),high:Ti("High angle",0,15),dollhouse:Ti("Dollhouse",2,30),corner:Ti("Corner",45,40),north:Ti("From north",180,42),east:Ti("From east",90,42),south:Ti("From south",0,42),west:Ti("From west",270,42),free:Ti("Free view",0,25)});function zp(i,t=!1){let e=Object.entries(Dr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Xi(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(Dr,t.preset)?t.preset:"top",n=Dr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?se.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?se.clamp(t.zoom,.6,2.5):n.zoom}}function Hp(i){let t=Xi(i);return{...t,preset:"free",tilt:t.tilt||Dr.free.tilt}}function Mh(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Xi(i)}function wh(i){return Xi({...Mh(i),preset:"default"})}function Vp(i,t){let e=Math.max(.4,t/1536*.68),n=se.clamp;return{w:Math.round(n((i?.w||170)*e,58,216)),h:Math.round(n((i?.h||110)*e,44,152))}}function Gp(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>Mh(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return Mh(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function Eh(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let a=Xi(s),c=se.degToRad(a.azimuth),l=se.degToRad(a.tilt),u=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),d=new G(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(d,1900),i.lookAt(u),i.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),f=new ze,g=new G;for(let _ of[t.minX-37,t.maxX+37]){for(let v of[t.minZ-53,t.maxZ+36])for(let w of[-111,h])f.expandByPoint(g.set(_,w,v).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&f.expandByPoint(g.set(_,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let _=(f.max.y-f.min.y)*.025;f.min.y-=_,f.max.y+=_}let x=e/n,p=Math.max((f.max.x-f.min.x)/2,(f.max.y-f.min.y)/2*x),m=p/x,y=(f.min.x+f.max.x)/2,E=(f.min.y+f.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:_,y:v}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),w=Number.isFinite(r.weight)?se.clamp(r.weight,0,1):1;y=se.lerp(y,_,w),E=se.lerp(E,v,w)}return i.left=y-p,i.right=y+p,i.bottom=E-m,i.top=E+m,i.zoom=Number.isFinite(o)?se.clamp(o,.6,4.5):a.zoom,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=$=>typeof $=="string"&&$.startsWith("ui"),o=$=>String($??"").toLowerCase(),a=$=>o($).split(".")[0],c=$=>typeof $=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test($),l=$=>$.type==="window"?"wall":$.mount||"floor",u=$=>$?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test($?.type),d=$=>$?.type==="diningChair"||/^living-dining-chair-/.test($?.type),h=$=>d($)||["chair","armchair","stool"].includes($?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test($?.type),f=$=>Number($.toFixed(6)),g=$=>($%360+360)%360;function x($){let X=$.type==="table",Q=/^living-(petal|round|rectangular)-dining-set-/.exec($.type);if(!X&&!Q)return;let ct=Q?.[1],xt=X?"diningTable":$.type.replace("-dining-set-","-dining-table-"),_t=wt=>X?"diningChair":`living-dining-chair-${wt}`,{w:vt,h:Rt}=$;if(X||ct==="round"){let[wt,At,Ut,Ot,Wt]=X?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:xt,w:(X?.79:.58)*vt,h:(X?.57:.58)*Rt,tableHeight:X?46.4:41,chairs:[[0,-Rt*wt,vt*Ut,Rt*Ot,0,_t("sage")],[vt*At,0,Rt*Wt,vt*(X?.17:Ut),90,_t("butter")],[0,Rt*wt,vt*Ut,Rt*Ot,180,_t("blush")],[-vt*At,0,Rt*Wt,vt*(X?.17:Ut),270,_t("lavender")]]}}let dt=ct==="rectangular",St=dt?[-.32,0,.32]:[-.28,.28],Mt=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:xt,w:.79*vt,h:.56*Rt,tableHeight:42.3,chairs:[-1,1].flatMap((wt,At)=>St.map((Ut,Ot)=>[vt*Ut,Rt*.37*wt,vt*(dt?.15:.19),Rt*.23,At*180,_t(Mt[At][Ot])]))}}function p($){if(!Array.isArray($?.items))return $;let X=new Set($.items.map(_t=>_t.id)),Q=$.items.filter(h),ct=!1,xt=$.items.flatMap(_t=>{let vt=x(_t);if(!vt||![_t.x,_t.y,_t.w,_t.h,_t.rotation].every(Number.isFinite)||_t.w<=0||_t.h<=0)return[_t];ct=!0;let Rt=_t.rotation*Math.PI/180,dt=Math.cos(Rt),St=Math.sin(Rt),Mt=Number.isFinite(_t.modelHeight)?_t.modelHeight:void 0,wt={..._t,type:vt.tableType,w:f(vt.w),h:f(vt.h),...Mt===void 0?{}:{modelHeight:Math.max(6,f(Mt*vt.tableHeight/59))}};return[...vt.chairs.flatMap(([Ut,Ot,Wt,Ft,j,Kt],Yt)=>{let B=f(_t.x+Ut*dt-Ot*St),T=f(_t.y+Ut*St+Ot*dt),st=Math.max(8,Math.min(Wt,Ft)*.52);if(Q.some(M=>Math.hypot(M.x-B,M.y-T)<=st))return[];let ut=`${_t.id}-chair-${Yt+1}`,pt=ut,H=2;for(;X.has(pt);)pt=`${ut}-${H++}`;X.add(pt);let b={id:pt,type:Kt,name:`Dining chair ${Yt+1}`,x:B,y:T,w:f(Wt),h:f(Ft),rotation:g(_t.rotation+j),entityId:"",...Mt===void 0?{}:{modelHeight:Mt},...Number.isFinite(_t.zIndex)?{zIndex:_t.zIndex}:{}};return Q.push(b),[b]}),wt]});return ct?{...$,items:xt}:$}function m(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function y($,X,Q){return!(!$||!X||!Q||$.type===Q.type||Q.legacy||s.has($.type)||r($.type)||s.has(Q.type)||r(Q.type)||l(X)!==l(Q)||$.entityId&&!E($.entityId,Q))}function E($,X){return!c($)||typeof X?.type!="string"||X.legacy||r(X.type)||X.type==="stairs"||X.type==="window"?!1:X.type==="cameraThumbnail"?a($)==="camera":X.type==="garageDoor"?a($)==="cover":a($)!=="camera"}function _($,X){let Q=a($.entity_id),ct=o($.name+" "+$.entity_id),xt={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},_t=Rt=>{if(Rt.type==="controlZone")return!0;if(Q==="camera")return Rt.type==="cameraThumbnail";if(Q==="cover")return/garage/.test(ct)&&Rt.type==="garageDoor";if(Q==="climate")return Rt.type==="thermostat";if(Q==="binary_sensor"&&/presence|occupancy/.test(ct))return Rt.type==="presenceSwitch";if(xt[Q]?.includes(Rt.group)||/humidifier/.test(ct)&&Rt.type==="humidifier"||/purifier/.test(ct)&&Rt.type==="airPurifier")return!0;if(Q==="switch"){if(/fan/.test(ct))return Rt.group==="fans"||Rt.type==="windowFan";if(/light|lamp/.test(ct))return Rt.group==="lighting"}return!1},vt=X.filter(Rt=>E($.entity_id,Rt));return{recommended:vt.filter(_t),available:vt}}function v($){return $&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes($.type)&&!r($.type)}function w($,X,Q,ct){if(!["w","h"].includes(X)||!Number.isFinite(Q))return null;let xt=$.type==="cameraThumbnail"?40:12,_t=$.type==="cameraThumbnail"||c($.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!ct)return{[X]:Math.min(_t[X],Math.max(xt,Q))};let vt=Math.min(_t.w/$.w,_t.h/$.h),Rt=Math.min(vt,Math.max(xt/$.w,xt/$.h)),dt=Math.min(vt,Math.max(Rt,Q/$[X]));return{w:Math.round($.w*dt*10)/10,h:Math.round($.h*dt*10)/10}}let A=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),S=new Set(["lamp","tableLamp","humidifier","plant"]),P=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),U=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,L=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,O=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function F($){let X=$?.type??"";return u($)||A.has(X)||U.test(X)?"surface":S.has(X)||$?.lightForm==="bud_lamp"||X.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function z($){let X=$.type==="humidifier"?.37:$.type==="plant"?.23:.2;return Math.min($.w,$.h)*X}function q($,X=!1){let{type:Q,w:ct,h:xt}=$;if(u($))return[[0,0,ct,xt]];if(Q==="desk"||Q.startsWith("bedroom-corner-desk-"))return[[0,-.33*xt,ct,.34*xt],[-.41*ct,.17*xt,.18*ct,.66*xt],[.41*ct,.17*xt,.18*ct,.66*xt]];if(!X&&(Q==="sofa"||Q.startsWith("living-cloud-sofa-")))return xt>ct?[[-.25*ct,0,.5*ct,xt],[.22*ct,(Q==="sofa"?.3:-.3)*xt,.52*ct,.38*xt]]:[[0,-.215*xt,ct,.57*xt],[-.32*ct,.25*xt,.34*ct,.46*xt]];if(X){if(Q.startsWith("living-round-dining-"))return[[0,0,.58*ct,.58*xt]];if(Q==="table"||/-dining-set-/.test(Q))return[[0,0,.79*ct,.56*xt]];if(Q.includes("-desk-"))return[[0,0,ct,.85*xt]]}if(!X&&F($)==="tabletop"){let _t=2*z($);return[[0,0,_t,_t]]}return[[0,0,ct*.95,xt*.95]]}function k($,X){if(![$?.x,$?.y,$?.w,$?.h].every(Number.isFinite)||$.w<=0||$.h<=0)return[];let Q=(Number.isFinite($.rotation)?$.rotation:0)*Math.PI/180,ct=[Math.cos(Q),Math.sin(Q)],xt=[-ct[1],ct[0]];return q($,X).map(([_t,vt,Rt,dt])=>({x:$.x+_t*ct[0]+vt*xt[0],y:$.y+_t*ct[1]+vt*xt[1],u:ct,v:xt,width:Rt/2,height:dt/2}))}let J=($,X,Q)=>$*Q[0]+X*Q[1];function lt($,X){let Q=X.type.startsWith("living-round-dining-"),ct=k(X,!0),xt=z($)*.9;return O.every(([_t,vt])=>ct.some(Rt=>{let dt=$.x+_t*xt-Rt.x,St=$.y+vt*xt-Rt.y,Mt=Math.abs(J(dt,St,Rt.u))/Rt.width,wt=Math.abs(J(dt,St,Rt.v))/Rt.height;return Q?Math.hypot(Mt,wt)<=1:Mt<=1&&wt<=1}))}function tt($){return d($)||F($)!=="floor"||P.has($.type)||L.test($.type)?k($,!1):[]}function it($,X){let Q=(ct,xt)=>ct.width*Math.abs(J(...ct.u,xt))+ct.height*Math.abs(J(...ct.v,xt));return Math.min(...[$.u,$.v,X.u,X.v].map(ct=>Q($,ct)+Q(X,ct)-Math.abs(J($.x-X.x,$.y-X.y,ct))))}function at($,X){let[Q]=k($,!1),[ct]=k(X,!0);if(!Q||!ct||it(Q,ct)<=0)return!1;let xt=[Q.x-ct.x,Q.y-ct.y],_t=J(...xt,ct.u)/ct.width,vt=J(...xt,ct.v)/ct.height,Rt=X.type.startsWith("living-round-dining-"),dt;if(Rt){if(Math.hypot(_t,vt)<1)return!1;dt=-J(...xt,Q.v)/Math.hypot(...xt)}else{let Ut=Math.abs(_t)>=1,Ot=Math.abs(vt)>=1;if(Ut===Ot)return!1;dt=-Math.sign(Ut?_t:vt)*J(...Q.v,Ut?ct.u:ct.v)}if(dt<.8)return!1;let St=X.type==="diningTable",Mt=St?46.4:Rt?41:42.3,wt=(X.modelHeight??Mt)*(St?32:33)/Mt;return($.modelHeight??59)*30/59<wt}function Ct($,X,Q,ct){let xt=0;for(let Rt of Q)for(let dt of ct)xt=Math.max(xt,it(Rt,dt));if(xt<=2)return xt;let _t=F($),vt=F(X);return _t==="tabletop"&&vt==="surface"&&lt($,X)||_t==="surface"&&vt==="tabletop"&&lt(X,$)||d($)&&u(X)&&at($,X)||u($)&&d(X)&&at(X,$)?0:xt}function Lt($,X,Q){let ct=tt($);if(!ct.length)return;let xt=Q?tt(Q):[],_t,vt=2;for(let Rt of X){if(Rt.id===$.id)continue;let dt=tt(Rt),St=Ct($,Rt,ct,dt);St<=vt||xt.length&&St<=Ct(Q,Rt,xt,dt)+.02||(_t=Rt,vt=St)}return _t}function Et($){let X=$.filter(vt=>F(vt)==="surface"),Q=X.filter(u),ct=new Set,xt=new Map,_t=new Map;for(let vt of $){let Rt=d(vt);if(!Rt&&F(vt)!=="tabletop")continue;let dt=Rt?Q.find(Mt=>at(vt,Mt)):X.find(Mt=>lt(vt,Mt));if(!dt)continue;ct.add(vt.id);let St=Rt?_t:xt;St.has(dt.id)||St.set(dt.id,[]),St.get(dt.id).push(vt)}return ct.size?$.flatMap(vt=>ct.has(vt.id)?[]:[..._t.get(vt.id)??[],vt,...xt.get(vt.id)??[]]):$}function Tt($,X,Q){let ct=$.ownerDocument,xt=(T,st,ut={})=>{let pt=ct.createElement(T);st&&(pt.textContent=st);for(let[H,b]of Object.entries(ut))pt.setAttribute(H,b);return pt},_t=xt("dialog","",{class:"model-library","aria-label":"Objects and models"}),vt=xt("header"),Rt=xt("h2","Objects & models"),dt=xt("button","Close",{type:"button"});vt.append(Rt,dt);let St=xt("div","",{class:"model-library-filters"}),Mt=xt("select","",{"aria-label":"Object library section"});for(let[T,st]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])Mt.append(xt("option",st,{value:T}));let wt=xt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});St.append(Mt,wt);let At=xt("div","",{class:"model-library-context"}),Ut=xt("p","",{role:"status",class:"model-library-status"}),Ot=xt("div","",{class:"model-library-list"});_t.append(vt,St,At,Ut,Ot);let Wt=xt("style");Wt.textContent=`
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
    `,$.append(Wt,_t);let Ft,j=!1,Kt=(T,st)=>{let ut=xt("button",T,{type:"button"});return ut.addEventListener("click",st),ut};function Yt(T){Ft=T,j=!1,Mt.value="catalog",wt.value="",B(),wt.focus()}function B(){let{templates:T,paletteGroups:st}=m(),ut=new Map(T.map(N=>[N.type,N])),pt=new Map(st),{items:H,entities:b}=X(),M=o(wt.value).trim(),R=(...N)=>M.split(/\s+/).every(V=>o(N.join(" ")).includes(V)),D=[];if(At.replaceChildren(),Ft&&(At.append(xt("strong",Ft.item?.name||Ft.entity?.name||Ft.entity?.entity_id)),Ft.entity&&At.append(Kt(j?"Suggested models":"All compatible models",()=>{j=!j,B()})),At.append(Kt("Cancel mapping",()=>{Mt.value=Ft.entity?"devices":"placed",Ft=void 0,wt.value="",B()}))),Mt.value==="placed")for(let N of H){let V=ut.get(N.type);if(!R(N.name,V?.label,N.type,N.entityId))continue;let Y=[N.w,N.h,N.modelHeight].filter(Number.isFinite).join(" \xD7 "),rt=[V?.label||N.type,Y&&Y+" plan px",N.entityId].filter(Boolean).join(" \xB7 "),W=[Kt("Edit",()=>Q({kind:"edit",itemId:N.id}))];T.some(ot=>y(N,V,ot))&&W.push(Kt("Change model",()=>Yt({item:N}))),D.push([N.name||V?.label||N.type,rt,W])}else if(Mt.value==="devices"){let N=new Map;for(let V of H)V.entityId&&!N.has(V.entityId)&&N.set(V.entityId,V);for(let V of b){if(!c(V.entity_id)||!R(V.name,V.entity_id,V.area))continue;let Y=N.get(V.entity_id),rt=[V.entity_id,V.area,Y?"On plan \xB7 "+Y.name:"Available to map"].filter(Boolean).join(" \xB7 ");D.push([V.name||V.entity_id,rt,[Y?Kt("Edit mapped object",()=>Q({kind:"edit",itemId:Y.id})):Kt("Choose model",()=>Yt({entity:V}))]])}}else{let N=T.filter(V=>!V.legacy);if(Ft?.item&&(N=T.filter(V=>y(Ft.item,ut.get(Ft.item.type),V))),Ft?.entity){let V=_(Ft.entity,T);N=j?V.available:V.recommended}for(let V of N){let Y=pt.get(V.group)||V.group;if(!R(V.label,V.type,V.tags,Y))continue;let rt=Ft?.item?{kind:"replace",itemId:Ft.item.id,modelId:V.type}:{kind:"place",modelId:V.type,...Ft?.entity?{entityId:Ft.entity.entity_id}:{}};D.push([V.label,Y+" \xB7 "+V.w+" \xD7 "+V.h+" plan px",[Kt(Ft?"Use model":"Place",()=>Q(rt))]])}}Ot.replaceChildren();for(let[N,V,Y]of D.slice(0,48)){let rt=xt("div","",{class:"model-library-row"}),W=xt("div");W.append(xt("strong",N),xt("small",V));let ot=xt("div","",{class:"model-library-actions"});ot.append(...Y),rt.append(W,ot),Ot.append(rt)}Ut.textContent=D.length>48?"Showing 48 of "+D.length+". Search to narrow the list.":D.length?D.length+(D.length===1?" result":" results"):Mt.value==="devices"&&!b.length?"Connect to Home Assistant to list devices.":"No matches."}return Mt.addEventListener("change",()=>{Ft=void 0,wt.value="",B()}),wt.addEventListener("input",B),dt.addEventListener("click",()=>_t.close()),{open(T="placed"){Ft=void 0,j=!1,Mt.value=T,wt.value="",B(),_t.open||_t.showModal()},get isOpen(){return _t.open},close(){_t.open&&_t.close()}}}i.RoomcraftModels=Object.freeze({catalog:m,canMap:E,canReplace:y,suggestions:_,supportsHeight:v,resizeFootprint:w,splitDiningFurniture:p,placementRole:F,blockingPlacement:Lt,orderMountedObjects:Et,mount:Tt,handoffKey:n})})(typeof window>"u"?globalThis:window);function Wp(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new ze().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var nS=24,iS=.32,sS=125,rS=24,vl=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function Ko(i,t=.12){return new Oe({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function oS(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function Th(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new ae;s.name="tracked-people",i.add(s);let r,o=new Map,a=vl.map(()=>[]),c=!1,l=!1,u=0,d=!1;function h(){return{sphere:new Le(1,12,8),disc:new Cn(1,24).rotateX(-Math.PI/2),groundRing:new So(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new mn(1,.14,6,16),palette:vl.map(({sweater:y,trim:E,skin:_,hair:v})=>Object.fromEntries(Object.entries({sweater:y,trim:E,skin:_,hair:v}).map(([w,A])=>[w,Ko(A)]))),ink:Ko("#423c50",.09),cheek:Ko("#d78383"),shoes:Ko("#514656"),white:Ko("#fff1dc"),shadow:new Ve({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new Ve({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function f(y){r??=h();let{role:E,scale:_}=vl[y],{sweater:v,trim:w,skin:A,hair:S}=r.palette[y],P=E==="baby",U=new ae;U.name=`radar-avatar-${E}`;let L=new ae,O=new ae,F=[],z=[],q=[];s.add(U),U.add(L),L.scale.set(..._);let k=(it,at,Ct,Lt,Et,Tt,$,X)=>{let Q=new he(r.sphere,at);return Q.position.set(Ct,Lt,Et),Q.scale.set(Tt,$,X),it.add(Q),Q},J=new he(r.disc,r.shadow);J.position.y=.13,J.scale.set(19,1,19),U.add(J);let lt=new he(r.groundRing,r.groundMark);lt.position.y=.26,U.add(lt),k(L,v,0,15,0,P?8.2:7.1,8.3,5.4),P?(k(L,w,0,17.5,4.8,4.9,4.1,1.15),k(L,r.white,0,17.4,5.9,1.5,1.5,.35)):(k(L,w,0,20.7,2.4,5.8,2.2,4),k(L,w,E==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let it of[-1,1]){let at=new ae;at.position.set(it*3.4,10.3,.1),L.add(at),k(at,P?v:r.ink,0,-3.2,0,2.65,4.6,2.6),k(at,P?w:r.shoes,0,-8.15,1.25,3.1,2.1,4),k(at,r.white,0,-8.8,3.25,2.75,1.1,2),q.push(at);let Ct=new ae;Ct.position.set(it*6.25,19.1,0),L.add(Ct),k(Ct,v,it*.9,-3.7,.15,2.75,5.3,2.7),k(Ct,A,it*1.3,-7.8,.5,2.3,2.6,2.2),z.push(Ct)}O.position.set(0,P?26:27.2,0),P&&O.scale.set(1.16,1.17,1.12),L.add(O),k(O,S,0,1.3,-1.65,9.2,9.65,8.6),k(O,A,0,0,1.9,8.65,8.45,7.5);let tt=k(O,S,-2.1,7.3,4.25,6.4,3.4,4.35);if(tt.rotation.z=E==="papa"?-.27:.22,E==="mama"&&(k(O,S,-6.7,-1.9,-3.8,3.6,8.1,5.2),k(O,S,6.2,-1.7,-3.9,3.3,7.6,5.4),k(O,S,2.8,10.4,-2.5,5.1,5.1,5.1),k(O,w,4.4,8.7,2.2,2.8,1.1,1.1)),P){k(O,S,-7.3,6.7,-2,3.35,3.7,3.5),k(O,S,7.3,6.7,-2,3.35,3.7,3.5);let it=k(O,w,.9,10,4.2,2.5,1.45,1.25),at=k(O,w,4.1,10,4.2,2.5,1.45,1.25);it.rotation.z=-.4,at.rotation.z=.4,k(O,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let it of[-1,1])if(k(O,A,it*8.2,-.15,1.1,1.85,2.4,1.75),F.push(k(O,r.ink,it*3,1.2,8.95,.85,.87,.52)),k(O,r.cheek,it*5.05,-1.25,7.95,1.18,.62,.52),E==="papa"){let at=new he(r.glasses,r.ink);at.position.set(it*3.1,1.25,9.15),at.scale.set(2.5,2.15,1.55),O.add(at)}return E==="papa"&&k(O,r.ink,0,1.6,9.35,1.1,.28,.35),k(O,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:U,body:L,head:O,arms:z,legs:q,eyes:F,styleIndex:y,baby:P}}function g(y,E){return y.duration>0?se.clamp((E-y.start)/y.duration,0,1):1}function x(y,E=c){u=Number.isFinite(y)?y:u,l=E||c,d=!1;for(let _ of o.values()){let{character:v}=_;l&&(_.duration=0);let w=g(_,u),A=se.lerp(_.fromX,_.x,w),S=se.lerp(_.fromZ,_.z,w),P=t(A,S);!Number.isFinite(P)&&w<1&&(_.duration=0,w=1,A=_.x,S=_.z,P=t(A,S));let U=n?Math.min(1,n(A,S)/rS):1;if(v.root.visible=Number.isFinite(P)&&U>0,!v.root.visible)continue;d=!0,v.root.position.set(A,P,S),v.root.rotation.y=_.heading,v.root.scale.setScalar(U);let L=_.walking&&w<1&&!l,O=Math.floor(Math.max(0,u-_.born)*16)/16+.7+v.styleIndex*.62,F=Math.floor(w*12)/12*Math.PI*4,z=L?Math.sin(F)*.56:0,q=L?Math.abs(Math.sin(F))*1.9:(1+Math.sin(O*4.7))*.47;v.body.position.y=l?0:q*(v.baby?1.5:1),v.body.rotation.z=l?0:L?z*.15:Math.sin(O*2.8)*.045;for(let k=0;k<2;k++){let J=k===0?-1:1;v.arms[k].rotation.x=L?-z*J:l?0:Math.sin(O*3.1+k)*.09,v.legs[k].rotation.x=z*J}oS(v,O,l)}}function p(y,E,{reduceMotion:_=!1}={}){c=_;let v=Number.isFinite(E)?E:u,w=new Map;for(let S of Array.isArray(y)?y:[])if(!(typeof S?.id!="string"||!S.id||S.id.length>256||!Number.isFinite(S.x)||!Number.isFinite(S.y)||w.has(S.id)||!Number.isFinite(t(S.x,S.y)))&&(w.set(S.id,S),w.size===nS))break;for(let[S,P]of o)w.has(S)||(P.character.root.visible=!1,a[P.character.styleIndex].push(P.character),o.delete(S));let A=vl.map(()=>0);for(let{character:S}of o.values())A[S.styleIndex]++;for(let S of[...w.keys()].filter(P=>!o.has(P)).sort()){let P=A.indexOf(Math.min(...A));A[P]++;let U=a[P].pop()??f(P),{x:L,y:O}=w.get(S);o.set(S,{character:U,fromX:L,fromZ:O,x:L,z:O,heading:0,born:v,start:v,duration:0})}for(let[S,{x:P,y:U}]of w){let L=o.get(S);if(L.x!==P||L.z!==U){let O=_?1:g(L,v),F=se.lerp(L.fromX,L.x,O),z=se.lerp(L.fromZ,L.z,O),q=Math.hypot(P-F,U-z),k=q>1?Math.atan2(P-F,U-z):L.heading,lt=!_&&q>0&&q<=sS&&e?.(F,z,P,U)?iS:0;Object.assign(L,{fromX:F,fromZ:z,x:P,z:U,heading:k,start:v,duration:lt,walking:q>2})}}x(v,_)}function m(){if(s.removeFromParent(),!!r){for(let y of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])y.dispose();for(let y of r.palette)for(let E of Object.values(y))E.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let y of a)y.length=0;o.clear(),r=void 0}}return{setTracks:p,render:x,dispose:m,setVisible(y){s.visible=y},get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return d}}}function Xp(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var bl=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),Sl=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function aS([i,t,e,n],s,r,o,a){let c=bl(i,t,e,n,s,r),l=bl(i,t,e,n,o,a),u=bl(s,r,o,a,i,t),d=bl(s,r,o,a,e,n);return Math.abs(u)<1e-7&&Sl(s,o,i)&&Sl(r,a,t)||Math.abs(d)<1e-7&&Sl(s,o,e)&&Sl(r,a,n)?!0:c>0!=l>0&&u>0!=d>0}function Ah(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>Xp(a,r,o)&&!c.some(l=>Xp(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,d]of t){let h=u-c,f=d-l,g=h*h+f*f;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*h+(o-l)*f)/g)),p=r-c-x*h,m=o-l-x*f;a=Math.min(a,p*p+m*m)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>aS(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var Yp=new ze,Ml=new G,Ur=class extends Ro{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new jt(t,3)),this.setAttribute("uv",new jt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new hs(e,6,1);return this.setAttribute("instanceStart",new qn(n,3,0)),this.setAttribute("instanceEnd",new qn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new hs(e,6,1);return this.setAttribute("instanceColorStart",new qn(n,3,0)),this.setAttribute("instanceColorEnd",new qn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Mo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ze);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Yp.setFromBufferAttribute(e),this.boundingBox.union(Yp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ml.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ml)),Ml.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ml));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Bt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Nt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};wn.line={uniforms:Ho.merge([Bt.common,Bt.fog,Bt.line]),vertexShader:`
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
		`};var ys=class extends Ze{constructor(t){super({type:"LineMaterial",uniforms:Ho.clone(wn.line.uniforms),vertexShader:wn.line.vertexShader,fragmentShader:wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Rh=new Ee,qp=new G,Zp=new G,an=new Ee,cn=new Ee,Ai=new Ee,Ch=new G,Ih=new _e,ln=new Co,$p=new G,wl=new ze,El=new Rn,Ri=new Ee,Ci,Bs;function Jp(i,t,e){return Ri.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ri.multiplyScalar(1/Ri.w),Ri.x=Bs/e.width,Ri.y=Bs/e.height,Ri.applyMatrix4(i.projectionMatrixInverse),Ri.multiplyScalar(1/Ri.w),Math.abs(Math.max(Ri.x,Ri.y))}function cS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){ln.start.fromBufferAttribute(s,a),ln.end.fromBufferAttribute(r,a),ln.applyMatrix4(e);let l=new G,u=new G;Ci.distanceSqToSegment(ln.start,ln.end,u,l),u.distanceTo(l)<Bs*.5&&t.push({point:u,pointOnLine:l,distance:Ci.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function lS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),d=-t.near;Ci.at(1,Ai),Ai.w=1,Ai.applyMatrix4(t.matrixWorldInverse),Ai.applyMatrix4(n),Ai.multiplyScalar(1/Ai.w),Ai.x*=r.x/2,Ai.y*=r.y/2,Ai.z=0,Ch.copy(Ai),Ih.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,f=u;h<f;h++){if(an.fromBufferAttribute(c,h),cn.fromBufferAttribute(l,h),an.w=1,cn.w=1,an.applyMatrix4(Ih),cn.applyMatrix4(Ih),an.z>d&&cn.z>d)continue;if(an.z>d){let E=an.z-cn.z,_=(an.z-d)/E;an.lerp(cn,_)}else if(cn.z>d){let E=cn.z-an.z,_=(cn.z-d)/E;cn.lerp(an,_)}an.applyMatrix4(n),cn.applyMatrix4(n),an.multiplyScalar(1/an.w),cn.multiplyScalar(1/cn.w),an.x*=r.x/2,an.y*=r.y/2,cn.x*=r.x/2,cn.y*=r.y/2,ln.start.copy(an),ln.start.z=0,ln.end.copy(cn),ln.end.z=0;let x=ln.closestPointToPointParameter(Ch,!0);ln.at(x,$p);let p=se.lerp(an.z,cn.z,x),m=p>=-1&&p<=1,y=Ch.distanceTo($p)<Bs*.5;if(m&&y){ln.start.fromBufferAttribute(c,h),ln.end.fromBufferAttribute(l,h),ln.start.applyMatrix4(o),ln.end.applyMatrix4(o);let E=new G,_=new G;Ci.distanceSqToSegment(ln.start,ln.end,_,E),e.push({point:_,pointOnLine:E,distance:Ci.origin.distanceTo(_),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var Tl=class extends he{constructor(t=new Ur,e=new ys({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)qp.fromBufferAttribute(e,o),Zp.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+qp.distanceTo(Zp);let r=new hs(s,2,1);return t.setAttribute("instanceDistanceStart",new qn(r,1,0)),t.setAttribute("instanceDistanceEnd",new qn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ci=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Bs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),El.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Bs*.5;else{let d=Math.max(s.near,El.distanceToPoint(Ci.origin));l=Jp(s,d,c.resolution)}if(El.radius+=l,Ci.intersectsSphere(El)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),wl.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Bs*.5;else{let d=Math.max(s.near,wl.distanceToPoint(Ci.origin));u=Jp(s,d,c.resolution)}wl.expandByScalar(u),Ci.intersectsBox(wl)!==!1&&(n?cS(this,e):lS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Rh),this.material.uniforms.resolution.value.set(Rh.z,Rh.w))}};var Fr=class extends Ur{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Al=class extends Tl{constructor(t=new Fr,e=new ys({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var jp="#ffce84",uS="#a8f5ff",Ph="#10242e";function Rl(i,t,e){return new ys({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function Cl(i,t,e,n){let s=new Fr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new Al(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function Kp(i,t,e,n){let s=new ce().setFromPoints(t.map(({x:o,y:a})=>new G(o,.5,a)));s.setIndex(Yn.triangulateShape(t.map(({x:o,y:a})=>new Nt(o,a)),[]).flat());let r=new he(s,e);r.renderOrder=n,i.add(r)}function Qp(){let i=new is,t={side:on,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new Ve({...t,color:jp,opacity:.13}),n=new Ve({...t,color:Ph,opacity:.95}),s=Rl(Ph,4.6,{opacity:.8}),r=Rl(jp,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=Rl(Ph,3.5,{...o,opacity:.65}),c=Rl(uS,1.7,{...o,opacity:.9});function l({origin:h,forward:f}){let g=(p,m=0)=>({x:h.x+f.x*p-f.y*m,y:h.y+f.y*p+f.x*m}),x=Array.from({length:28},(p,m)=>{let y=m/28*Math.PI*2;return g(10*Math.cos(y),10*Math.sin(y))});Cl(i,[g(10),g(56)],[s,r],5),Cl(i,[g(45,-7),g(56),g(45,7)],[s,r],5),Kp(i,x,n,7),Cl(i,[...x,x[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let f=new Map;for(let g of h){let{points:x,kind:p,id:m,origin:y,forward:E}=g;if(x.length<3)continue;let _=p==="nominal";_&&Kp(i,x,e,0),Cl(i,[...x,x[0]],_?[s,r]:[a,c],_?3:1),y&&E&&f.set(m,g)}for(let g of f.values())l(g)}function d(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:d}}var hS=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),fS=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),tm={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},Il=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"]}).map(([i,t])=>[i,t.map(e=>new qt(e))])),dS=new qt("#ffd59e"),em=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Qo,smoothstep:nm}=se;function pS({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new ce;return o.setAttribute("position",new jt(n,3)),o.setAttribute("uv",new jt(s,2)),o.setIndex(r),o}var mS=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`,gS=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;
  uniform float waterTime;
  uniform float rain;
  uniform float fog;
  uniform float reflectedWind;
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
      float drift = sin(waterTime * 0.064) * 26.0 + reflectedWind;
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
    color = mix(color, mix(cloudTint, foamTint, 0.46),
      fog * (0.26 + 0.42 * smoothstep(15.0, 145.0, offshore)));
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;function im({y:i,farZ:t,shoreline:e,focusX:n}){let s={waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},moon:{value:0},moonLight:{value:new Nt(0,1)},bodyPosition:{value:new Nt}};for(let[c,l]of em.entries())s[l]={value:Il.clear[c].clone()};let r=new Ze({uniforms:s,vertexShader:mS,fragmentShader:gS,toneMapped:!1}),o=new he(pS({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:d,condition:h,moonPhase:f,sunElevation:g,sunRising:x,sunAzimuth:p,moonAzimuth:m,moonElevation:y,skyProgress:E,windSpeed:_,windBearing:v,reduceMotion:w,reflections:A=!0}=l,S=hS.has(h),P=Number.isFinite(g)?g:u?-19:42,U=nm(P,-8,17),L=Il[S?"overcast":"clear"];for(let[Tt,$]of em.entries())s[$].value.lerpColors(Il.night[Tt],L[Tt],U);let O=Object.hasOwn(tm,f)?tm[f]:void 0,F=d?!u:h==="sunny",z=u&&O!==void 0,q=Qo(P/75,0,1),k=U*(1-nm(P,8,34));F&&s.bodyTint.value.lerp(dS,k*.7),z&&s.bodyTint.value.copy(Il.night[5]);let J=fS.has(h),lt=Number.isFinite(c)&&!w?c:0;s.waterTime.value=lt,s.rain.value=J?1:0,s.fog.value=h==="fog"?1:0;let tt=Number.isFinite(_)?Qo(_/18,0,1):0,it=Number.isFinite(v)?-Math.sin(se.degToRad(v)):1;s.reflectedWind.value=Math.sin(lt*.09)*it*tt*24;let at=J||h==="windy"||h==="windy-variant";s.roughness.value=1+Math.max(at?.65:0,tt*.65),s.cloudCover.value=A?S?.94:h==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!A||S?0:z?.93:F?.97:0,s.moon.value=z?1:0;let Ct=Number.isFinite(E)?Qo(E,0,1):void 0,Lt=Ct===void 0?void 0:se.lerp(-145,145,Ct),Et=Tt=>Qo((Tt-180)*1.08,-180,180);if(z){s.moonLight.value.set(Math.sin(O),Math.cos(O));let Tt=Lt??(Number.isFinite(m)?Et(m):46+Math.sin(lt*.014)*27),$=Number.isFinite(y)?32+Qo(y/75,0,1)*24:42;s.bodyPosition.value.set(Tt,$)}else{let Tt=x===!0?-107:x===!1?118:-31,$=Lt??(Number.isFinite(p)?Et(p):Tt*(1-q));s.bodyPosition.value.set($,38+q*20)}}return{mesh:o,update:a}}var Pl=26,xS=92,Or=4,yS=18,_S=188;function rm(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-yS,o=r-2*Pl-xS;return{nearZ:r,farZ:o,sceneryMinZ:o-_S}}function om(i,{nearZ:t,farZ:e},n,s,r){let o=e+Pl,a=t-Pl,c=(o+a)/2,l=r-s/2,u=r+s/2,d=(h,f,g,x)=>i.box(s,g,f-h,x,r,n+g/2,(h+f)/2);d(o,a,1.2,"#73767c"),d(o,o+3.4,1.4,"#656b71"),d(a-3.4,a,1.4,"#656b71");for(let[h,f,g,x]of[[e,o,o-Or,e],[a,t,a,a+Or]]){d(h,f,5,"#c0b6a7"),d(g,g+Or,6.2,"#d0c3b0");let p=Pl-Or;for(let m=l+36;m<u;m+=72)i.box(1.15,.18,p,"#a69c91",m,n+5.04,x+p/2)}for(let h=l+36;h+17<u;h+=72)i.box(34,.2,2.8,"#e9ce91",h,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+Or,maxZ:t,surfaceY:n+5},{minZ:e,maxZ:o-Or,surfaceY:n+5}]}}function Lh(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new ce;o.setAttribute("position",new jt(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function vS(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new fo(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,d=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+d)}}function bS(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,d=s+.1;i.ball(a,c,13,"#d7bd94",l,d,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,d+.5,u+4);for(let[h,f,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])vS(i,l+a*h,u+f,d+c*.75,g,h*7)}}function SS(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function MS(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let d=(p,m,y)=>[Math.cos(p)*m,y,Math.sin(p)*m],h=o+u*2*Math.PI/8,f=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],d(h,16*.54,16.6+2.1),d(f,16*.54,16.6+2.1),d(h,16,16.6-.55),d(f,16,16.6-.55),d(h,16,16.6-2),d(f,16,16.6-2)],x=new ce;x.setAttribute("position",new jt(g.flat(),3)),x.setAttribute("uv",new jt(g.flatMap(([p,,m])=>[p/32+.5,m/32+.5]),2)),x.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),x.computeVertexNormals(),i.add(x,u%2?r:s,t,n,e)}}function sm(i,t,e,n,s,r){let o=(d,h)=>[t+d*Math.cos(r)+h*Math.sin(r),e-d*Math.sin(r)+h*Math.cos(r)],a=(d,h,f,g,x,p,m)=>{let[y,E]=o(x,m);i.box(d,h,f,g,y,n+p,E,r)};for(let d of[-1,1])a(1.1,1.2,18,"#988679",d*4.5,2.15,0),a(1,2.1,1.2,"#988679",d*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Te(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function wS(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,d=e+o;MS(i,u,d,s,a,c,l),sm(i,u-13,d-15,s,c,l-.17),sm(i,u+14,d-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,d+7,l*2)}}function am(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,m)=>{let y=l+r*m/c,E=y-a,_=t-108+14*Math.cos((E+110)*.006)+7*Math.sin((E-90)*.013);return{x:y,z:_}}),d=u.map(({x:p})=>[p,e+.28,t+.4]),h=u.map(({x:p,z:m})=>[p,e+.71,m+22]),f=u.map(({x:p,z:m})=>[p,e+.44,m+6]),g=u.map(({x:p,z:m})=>[p,e+.17,m-31]);Lh(i,d,h,"#e3cba0"),Lh(i,h,f,"#dbbd92"),Lh(i,f,g,"#c8a47e");let x=Math.max(940,s-n);bS(i,a,t,x,e);for(let p of[-1,1])SS(i,a+p*x*.245,t,e);return wS(i,a,t,x,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Ii}=se,oe={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},cm=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],ES=new Map(cm.map(i=>[i.id,i])),lm=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],um=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],TS=new Map(lm.map(i=>[i.id,i])),AS=new Map(um.map(i=>[i.id,i])),hm=({id:i,label:t,length:e,width:n,detail:s})=>Object.freeze({id:i,label:t,length:e,width:s==="food"?n+2:n}),Ll=Object.freeze([...cm,...lm].map(hm)),Nl=Object.freeze(um.map(hm));function RS(i){let t=new ce;return t.setAttribute("position",new jt(i.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function Nh(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new qt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new be(a,3)),r}),e=Pn(t);for(let n of t)n.dispose();return e.computeBoundingBox(),e}function fm(i,t){let e=i.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),n=[],s=(i.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;n.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)n.push(0,o,o+1,s,s+o+1,s+o);let r=new ce;return r.setAttribute("position",new jt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function CS(i){let t=[],e=(k,J)=>t.push([k,J]),n=(k,J,lt,tt,it,at,Ct)=>e(new Te(tt,it,at).translate(k,J,lt),Ct),s=(k,J)=>e(RS(k),J),r=(k,J,lt,tt,it,at,Ct)=>{let Lt=[[J,tt,at],[lt,tt,at],[lt,it,at],[J,it,at]];s(k>0?Lt:Lt.reverse(),Ct)},{width:o,tire:a,body:c,roof:l,detail:u}=i,d=i.length-2.8,h=d*.5,f=o*.435,g=a*.78,x=8.25+a*.52,p=x-(u==="sports"||u==="convertible"?1.8:.75);e(fm([[-h,f*.76,x-1.6],[-h+2.4,f*.93,x-.2],[-h+6.2,f,x],[h-6.2,f,x-.24],[h-2.4,f*.92,p+.35],[h,f*.75,p]],g),c);let m=g+.95;for(let k of[-1,1])n(k*(h-.22),m,0,1.42,1.58,f*1.57,oe.bumper),n(k*(h+.05),m+.82,0,1.08,.95,4.5,oe.plate);n(h+.1,p-2.8,0,.65,1.2,f*.64,oe.grille),n(h+.38,p-2.62,0,.24,.35,f*.55,oe.rim);for(let k of[-1,1]){n(0,g+1.3,k*(f+.04),d*.53,.9,.34,oe.bumper);for(let J of[-.323,.323]){let lt=d*J,tt=k*(f+.05);e(new nn(a,a,2.9,10).rotateX(Math.PI/2).translate(lt,a,tt),oe.tire),e(new Cn(a*.57,8).rotateY(k<0?Math.PI:0).translate(lt,a,tt+k*1.46),oe.rim),e(new Cn(a*.28,6).rotateY(k<0?Math.PI:0).translate(lt,a,tt+k*1.48),oe.hub)}}let[y,E,_,v]=i.cabin.map(k=>d*k),w=x-.35,A=i.height-1.25,S=f*.88,P=S*(i.windows>2||u==="camper"||u==="delivery"?.94:.79),U=k=>Ii(S,P,k),L=k=>Ii(w,A,k),O=(k,J,lt,tt=0)=>[Ii(Ii(y,E,J),Ii(v,_,J),k),L(J),lt*(U(J)+tt)];function F(k,J,lt,tt,it=.2,at=.85,Ct=.08){let Lt=[O(J,it,k,Ct),O(lt,it,k,Ct),O(lt,at,k,Ct),O(J,at,k,Ct)];s(k>0?Lt:Lt.reverse(),tt)}function z(k,J,lt,tt,it,at,Ct=0){let[Lt,Et]=k>0?[v,_]:[y,E],Tt=(X,Q)=>[Ii(Lt,Et,Q)+k*Ct,L(Q),X*U(Q)],$=[Tt(lt,tt),Tt(J,tt),Tt(J,it),Tt(lt,it)];s(k>0?$:$.reverse(),at)}function q(k){z(k,-.81,.81,.16,.88,oe.window,.08),z(k,-.72,.73,.23,.82,oe.glass,.13),z(k,-.67,.64,.67,.75,oe.glassGlow,.18)}if(u==="convertible"){z(1,-.88,.88,0,1,l,.08),q(1),n((y+_)/2,w+.2,0,(_-y)*.96,1.05,S*1.92,oe.window);for(let k of[-1,1])n(y+5.7,w+2.35,k*S*.43,7.7,2.5,5.6,oe.upholstery),n(y+2.2,w+3.7,k*S*.43,2,5.2,6,oe.tan)}else{for(let it of[-1,1])F(it,0,1,c,0,1,0);z(1,-1,1,0,1,c),z(-1,-1,1,0,1,c),q(1),["delivery","cargo","food"].includes(u)||q(-1);let k=(_+E)/2,J=_-E+.38;n(k,A+.34,0,J,.84,P*2.05,l),u==="bubble"&&n(k,A+.79,0,J*.88,.52,P*1.67,l),u==="sunroof"&&(n(k,A+.82,0,J*.48,.24,P*1.12,oe.window),n(k-J*.12,A+.98,0,.65,.18,P,oe.glassGlow));let lt=i.windows??2,tt=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:lt},(it,at)=>[(at+.16)/lt,(at+.86)/lt]);for(let it of[-1,1])for(let[at,Ct]of tt)F(it,at,Ct,oe.window),F(it,at+.011,Ct-.009,oe.glass,.29,.79,.13),F(it,at+.023,Ct-.025,oe.glassGlow,.64,.72,.18)}for(let k of[-1,1])n(v-3,w+1.05,k*(f+.2),3.2,1.8,1.75,l),n(Ii(y,v,.36),x-1.45,k*(f+.1),2.8,.46,.24,oe.rim);return{add:e,box:n,sideFace:r,glazingSide:F,bodyParts:t,recipe:i,length:d,outer:f,shoulder:x,nose:h,frontY:p}}function IS(i,t){let{length:e,outer:n,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=i,l=-e*.454,u=e*.105,d=r.height-.4,h=u-l;o(fm([[l,n*.93,d-.7],[l+1.6,n,d],[u-1.6,n,d],[u,n*.93,d-.7]],s-.8),t),a((l+u)/2,d+.1,0,h-3.5,.28,n*1.6,r.roof);for(let f of[-1,1]){let g=f*(n+.1);c(f,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let f of[-.4,0,.4])a(l-.13,(s+d)/2,n*f,.26,d-s-3.1,.4,oe.rim);return{rear:l,front:u,top:d}}function PS(i){let{recipe:t,box:e,sideFace:n,glazingSide:s,length:r,outer:o,shoulder:a}=i,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let d=l+.5;for(let h of[-1,1])e(r*-.18,d,h*o*.51,r*.3,.85,.83,oe.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,d+.55,0,1.05,.75,o*1.18,oe.roofRail);e(r*-.18,d+1.1,0,r*.17,1.65,o*.78,oe.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,oe.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let d=r*-.25;e(d,a+.22,0,r*.35,.42,o*1.43,oe.wood);for(let h of[-1,1])e(d,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(d,a+.48,h*o*.38,r*.33,.25,.4,oe.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,oe.tan)}else if(c==="cargo"||c==="food"){let{rear:d,front:h}=IS(i,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let f=a+7;n(1,d+5.5,h-4.5,f,f+8.4,o+.19,oe.window),e((d+h)/2,f,o+.75,h-d-9.5,.75,2.65,oe.wood);for(let g=0;g<7;g++)e(Ii(d+6,h-4.5,g/6),f+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let d of[-1,1])c==="delivery"?(s(d,.1,.61,"#e5d6e4",.28,.65,.12),s(d,.18,.54,"#b39cc2",.43,.49,.18)):(s(d,.09,.61,"#456575",.29,.68,.12),s(d,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,d*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let d of[-1,1])e(0,a-1.05,d*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,oe.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function dm(i,t,e){return[{role:"body",geometry:Nh(i),material:new Oe({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Oe({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Oe({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function pm(i,t){let{style:e,length:n,paint:s,trim:r,jacket:o,helmet:a}=i,c=[],l=(Et,Tt)=>c.push([Et,Tt]),u=(Et,Tt,$)=>l(new Te(...$).translate(...Tt),Et),d=(Et,Tt,$,X=0)=>l(new Le(1,8,5).scale(...$).rotateZ(X).translate(...Tt),Et);function h(Et,Tt,$,X){let Q=new G(...Tt),ct=new G(...$),xt=new G().subVectors(ct,Q),_t=new en().setFromUnitVectors(new G(0,1,0),xt.clone().normalize());l(new nn(X,X,xt.length(),5,1,!0).applyQuaternion(_t).translate(...Q.lerp(ct,.5).toArray()),Et)}let f=t?1:.75,g=n*(t?.132:.15),x=-n*(e==="longtail"?.309:.326),p=n*.326,m=[n*-.024,g+f*1.25,0],y=[n*(e==="cruiser"?-.16:-.115),n*(e==="trail"?.4:e==="cruiser"?.327:.369),0],E=e==="road"||e==="racer",_=[n*(E?.234:.204),y[1]+(E?.5:3.7)*f,0],v=f*(t?2.2:1.36),w=f*(t?1.04:.65),A=f*(t?.9:.65),S=e!=="road";for(let Et of[x,p]){l(new mn(g-w,w,4,12).translate(Et,g,0),oe.tire),S&&l(new mn(g+f*.37,f*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(Et,g,0),s);for(let Tt of[0,Math.PI/3,Math.PI*2/3]){let $=g-w*1.35,X=Math.cos(Tt)*$,Q=Math.sin(Tt)*$;h(oe.rim,[Et-X,g-Q,0],[Et+X,g+Q,0],f*.23)}l(new nn(f*1.05,f*1.05,v,8).rotateX(Math.PI/2).translate(Et,g,0),oe.hub)}let P=[x,g,0];h(s,P,y,A),h(s,P,m,A),h(s,y,m,A),h(s,m,_,A);let U=e==="basket"||e==="scooter"?[_[0]*.7,m[1]+f*2.65,0]:_;h(s,y,U,A),U!==_&&h(s,U,_,A);for(let Et of[-1,1])h(oe.rim,[_[0],_[1]-f*2.3,Et*v*.38],[p,g,Et*v*.45],A*.7);u(oe.bumper,[y[0]-.25,y[1]+f*.4,0],[f*(t?7.1:4.8),f*1.08,f*3.15]);let L=f*(t?5.05:4.75),O=_[0]+(E?f*1.85:-f*.8),F=_[1]+(E?-f*.6:f*.25);for(let Et of[-1,1]){let Tt=[O,F,Et*L];h(oe.rim,_,Tt,f*.47),h(oe.tire,[O+f*.6,F,Et*L*.82],Tt,f*.63)}if(t){u(oe.bumper,[m[0]+.4,m[1]+1.05,0],[6.4,4.9,5.4]);let Et=e==="scooter"?[_[0]+2.1,y[1]-2.3,0]:[y[0]+5.5,y[1]+.7,0],Tt=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(d(s,Et,Tt,e==="scooter"?.34:-.18),u(r,[Et[0]+.8,Et[1]+.15,Tt[2]*.87],[Tt[0]*1.18,1,.8]),u(r,[Et[0]+.8,Et[1]+.15,-Tt[2]*.87],[Tt[0]*1.18,1,.8]),e==="racer")d(oe.window,[_[0]+2,_[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[x+1.75,y[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,g*2.1+1.05,0],[7.25,.82,3.65]),u(oe.rim,[x+1.55,y[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")d(s,[x+3.7,y[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[m[0],g+1.1,0],[8.2,1.22,6.2]);else for(let $ of[-1,1])h(oe.rim,[x-2.2,g+2.1,$*2.8],[m[0]+4.5,g+.45,$*3.25],.79)}else{let Et=e==="longtail"?[x+1.1,g*2.05+1.8,0]:[p-.98,_[1]-1.55,0];e==="basket"||e==="longtail"?(u(oe.wood,Et,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[Et[0],Et[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(oe.tan,[Et[0],Et[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[x+1.65,g+1.05,2],[4.2,3.4,1.85]),u(oe.roofRail,[x+1.6,g*2.05+.45,0],[5.3,.66,4.3]))}let z=[y[0]-f*.38,y[1]+f*2.05,0],q=[z[0]+(E?3.05:1.05)*f,z[1]+f*3.75,0],k=[q[0]+(E?3.35:.95)*f,q[1]+(E?3.1:4.85)*f,0],J=E?-.57:-.22;d(o,q,[f*2.6,f*4.15,f*3],J),d(a,k,[f*2.94,f*2.68,f*2.62]),d(oe.window,[k[0]+f*2.1,k[1]-f*.4,0],[f*1.08,f*1.05,f*2.2]),(e==="commuter"||e==="trail")&&u(r,[q[0]-f*2.1,q[1]+f*.6,0],[f*1.9,f*3.3,f*3.5]);let lt="#4b4e63",tt="#e2b491";for(let Et of[-1,1]){let Tt=[q[0]+f*1.1,q[1]+f*1.65,Et*f*2.43],$=[Ii(Tt[0],O,.48),Ii(Tt[1],F,.52)-f,Et*f*3.48],X=[O,F,Et*L*.93];h(o,Tt,$,f*.95),h(o,$,X,f*.76),u(tt,X,[f*1.5,f*1.11,f*1.09]);let Q=t?0:Et*f*1.35,ct=[z[0]+f*(t?4.3:4.9)+Q,z[1]-f*3.5,Et*f*2.64],xt=[m[0]+f*(e==="scooter"?2.65:.35)+Q,m[1]+f*.27-Q,Et*f*2.5];h(lt,[z[0],z[1],Et*f*1.86],ct,f*1.12),h(lt,ct,xt,f*.88),u(oe.tire,[xt[0]+f*.25,xt[1],xt[2]],[f*2.15,f*.95,f*1.42])}let it=f*(t?1.34:.84),at=[p+f*.58,g*(t?2.3:2.18),0],Ct=[x-f*.56,g*(t?2.18:2.02),0];h(oe.bumper,[p,g+f*1.5,0],at,f*.58),h(oe.bumper,[x,g*1.6,0],Ct,f*.46);let Lt=Et=>Nh([[new Le(it,6,4).scale(.53,.78,1).translate(...Et),"#ffffff"]]);return dm(c,Lt(at),Lt(Ct))}function mm(i){let t=TS.get(i);if(t)return pm(t,!0);let e=ES.get(i);if(!e)return null;let n=CS(e);PS(n);let{outer:s,nose:r,frontY:o,shoulder:a,bodyParts:c}=n,l=(u,d)=>Nh([-1,1].map(h=>[new Te(1.48,1.8,s*.35).translate(u*(r+.19),d,h*s*.63),"#ffffff"]));return dm(c,l(1,o-1.75),l(-1,a-2.65))}function gm(i){let t=AS.get(i);return t?pm(t,!1):null}var xm=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),Yi={stride:4,crossingSeconds:3.2},LS=242,ym=12,_m=.38,Sm=new Map(Ll.map(i=>[i.id,i])),vm=["seafoam-sedan","blue-wagon","butter-compact","seafoam-sedan","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","seafoam-sedan","indigo-motorcycle"].map(i=>Sm.get(i));function NS({index:i,lane:t}){let e=Math.floor(i/Yi.stride),n=i%Yi.stride;return vm[(2*(e+n)+t)%vm.length]}function bm({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,ym*Math.round(n/(ym*LS))),o=n/r,a=e.map((x,p)=>Array.from({length:r},(m,y)=>({z:x,lane:p,index:y,x:s,offset:o*(y+.25+(r===1&&p?.5:0))}))),c=0,l,u,d,h=!1,f=[];function g(x,p,m,y=!1){let E=p?.severity==="ambient"?Yi:xm.get(p?.severity),_=Number.isFinite(l)&&Number.isFinite(x)?se.clamp(x-l,0,.25):0;if(l=x,E!==u){h=!!(u&&E&&(E===Yi||u===Yi));let A=Math.min(r,E?.stride??1),S=E===Yi?Math.floor(A/2):1;f=E?a.flatMap((P,U)=>P.filter(({index:L})=>L%A===U*S%A)):[],u=E}if(!E)return d=void 0,f;let v=p.speedFactor,w=E===Yi?o*Math.min(r,Yi.stride)/(2*Yi.crossingSeconds):Number.isFinite(v)&&v>0?xm.get("clear").speed*se.clamp(v,.22,1):E.speed;if(y)c=!m&&Number.isFinite(x)?Math.max(0,x)*w:0;else if(!m)if(h&&d!==void 0){let A=Math.exp(-_/_m),S=d-w;c+=_*w+S*_m*(1-A),d=w+S*A,h=Math.abs(d-w)>.1}else c+=_*w,d=w;c%=n;for(let A of f){let S=(A.offset+c)%n;A.x=s+(A.lane?n-S:S)}return f}return{capacity:r*e.length,update:g}}function Mm(i){let t=new ae,e=bm(i),n,s=new Map;function r(f,g){let x=new vi(f,g,e.capacity);return x.count=0,x.frustumCulled=!1,x.instanceMatrix.setUsage(Bn),x}let o=r(new Cn(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new Ve({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1}));t.add(o);let a=new ke,c;t.visible=!1;function l(f,g){for(let{mesh:x,role:p}of f.layers)p==="headlamp"&&(x.material.emissiveIntensity=g?1.65:.26),p==="taillamp"&&(x.material.emissiveIntensity=g?.91:.28)}function u(f){if(s.has(f.id))return s.get(f.id);let g=new ae;g.name=`vehicle-${f.id}`;let x=mm(f.id).map(({geometry:m,material:y,role:E})=>({mesh:r(m,y),role:E}));g.add(...x.map(({mesh:m})=>m)),t.add(g);let p={group:g,layers:x,count:0};return l(p,c),s.set(f.id,p),p}function d(f,g,{reduceMotion:x=!1,night:p=!1,transientTelemetry:m=!1}={}){m&&(n??=bm(i));let E=(m?n:e).update(f,g,x,m);if(t.visible=E.length>0,!t.visible)return;if(p!==c){c=p;for(let v of s.values())l(v,p)}for(let v of s.values())v.count=0;let _=Sm.get(g?.vehicleStyle);for(let[v,w]of E.entries()){let A=_??NS(w),S=u(A);a.position.set(w.x,i.surfaceY,w.z),a.rotation.y=w.lane?Math.PI:0,a.scale.set(1,1,1),a.updateMatrix();for(let{mesh:P}of S.layers)P.setMatrixAt(S.count,a.matrix);S.count++,a.scale.set(A.length*.55,1,A.width*.62),a.updateMatrix(),o.setMatrixAt(v,a.matrix)}o.count=E.length,o.instanceMatrix.needsUpdate=!0;for(let{group:v,layers:w,count:A}of s.values()){v.visible=A>0;for(let{mesh:S}of w)S.count=A,A&&(S.instanceMatrix.needsUpdate=!0)}}function h(){t.traverse(f=>{f.isInstancedMesh&&(f.dispose(),f.geometry.dispose(),f.material.dispose())}),t.clear()}return{root:t,update:d,dispose:h}}var DS=22,US=63,FS=525,OS=1100,BS=22,kS=75,zS=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],wm=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],HS=(i,t)=>(i%t+t)%t;function VS(i){let t=i.width-kS*2,e=[],n=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(i.centerX))return{walkers:e,cyclists:n,sample:()=>({walkers:e,cyclists:n})};let s=i.centerX-t/2,r=Math.max(1,Math.round(t/FS)),o=Math.max(1,Math.round(t/OS)),a=t/r,c=t/o;for(let[u,d]of(i.sidewalks??[]).entries()){let{minZ:h,maxZ:f,surfaceY:g}=d,x=f-h;if(![h,f,g].every(Number.isFinite)||x<=0)continue;let p=u%2?-1:1,m=Math.min(1,x/BS),y=h+x*(p>0?.25:.75),E=h+x*(p>0?.76:.24);for(let _=0;_<r;_++){let v=wm[(_+u*2)%wm.length],w=t/2+(_+u*.42)*a-35,A=`sidewalk-walk-${u}-${_}`;for(let[S,[P,U]]of v.entries())e.push({id:`${A}-${S}`,groupId:A,style:P,child:U<.8,offset:w-p*13.2*S,scale:m*U,direction:p,y:g,z:y+p*.62*(S%2),phase:_*.91+u*.8+S*2.1})}for(let _=0;_<o;_++)n.push({id:`sidewalk-bike-${u}-${_}`,style:Nl[(_+u*2)%Nl.length],offset:t/2+(_+u*.65)*c,scale:m,direction:p,y:g,z:E,phase:_*1.7+u})}function l(u=0,d=!1){let h=Number.isFinite(u)?Math.max(0,u):0,f=(g,x,p)=>g.map(m=>({...m,x:s+HS(m.offset+m.direction*x*h,t),gait:d?0:h*p+m.phase}));return{walkers:f(e,DS,10),cyclists:f(n,US,7)}}return{walkers:e,cyclists:n,sample:l}}var Dl={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function Dh(i,t,e){let{shirt:n,trim:s,pants:r,skin:o,hair:a,accessory:c}=zS[i.style],l=t?0:Math.sin(i.gait),u=Math.abs(l)*.69,d=h=>h+u;e(n,0,d(10.45),0,2.95,4.3,3.4),e(r,-.1,d(7.25),0,2.6,1.7,3.04),e(s,1.1,d(13.35),0,2.14,.69,2.55),e(s,2.68,d(10.4),-.7,.41,.86,1);for(let h of[-1,1]){let f=l*h,g=f*3,x=Math.max(0,f)*1.35;e(r,g*.45,4.5+x*.42+u*.32,h*1.51,1.19,3.2,1.25,-.48*f),e(Dl.shoe,.77+g,1.11+x,h*1.52,2.17,.99,1.34),e(Dl.sole,1.38+g,.49+x,h*1.52,1.64,.43,1.32),e(n,-f*1.07,d(10.16),h*3.15,1.23,2.87,1.15,.38*f),e(o,-f*2.16,d(7.7),h*3.31,.98,1.1,.95)}e(a,-.67,d(17.25),0,4.17,4.32,3.82),e(o,1.05,d(16.63),0,3.76,3.75,3.41),e(a,1.12,d(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,d(16.54),0,.64,.63,.66);for(let h of[-1,1])e(o,.36,d(16.69),h*3.47,1.02,1.07,.64),e(Dl.ink,4.18,d(17.25),h*1.35,.34,.47,.43),e(Dl.blush,3.76,d(16.21),h*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,d(19.68),.72,1.98,1.89,1.89),e(s,-3.51,d(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(n,-.5,d(20.2),0,3.72,1.97,3.45),e(s,2.72,d(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,d(10.2),0,1.48,2.89,2.63),e(n,-4.01,d(10.65),0,.46,1.28,1.77)),c==="curls")for(let h of[-1,1])e(a,-.9,d(18.52),h*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,d(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,d(21.05),2.67,1.51,.92,.65,-.47))}function Em(i){let t=VS(i),e=new ae;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let n=new ke;function s(m,y,E,_){let v=new vi(y,E,_);return v.name=m,v.frustumCulled=!1,v.instanceMatrix.setUsage(Bn),e.add(v),v}let r=new Map,o=0;for(let m of t.walkers)Dh(m,!0,y=>{o++,r.has(y)||r.set(y,new qt(y))});let a=s("sidewalk-walkers",new Le(1,9,6),new Oe({color:"#fff",roughness:.81}),o),c=0;for(let m of t.walkers)Dh(m,!0,y=>a.setColorAt(c++,r.get(y)));let l=s("sidewalk-contact-shadows",new Cn(1,16).rotateX(-Math.PI/2),new Ve({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),u=new Map(Nl.map(m=>{let y=t.cyclists.filter(E=>E.style.id===m.id).length;return[m.id,y?gm(m.id).map(({geometry:E,material:_,role:v})=>({role:v,mesh:s(`sidewalk-bicycle-${m.id}-${v}`,E,_,y)})):[]]})),d,h=0,f,g;function x(m,{reduceMotion:y=!1,night:E=!1,transientTelemetry:_=!1}={}){if(E!==d){for(let L of u.values())for(let{role:O,mesh:F}of L)O==="headlamp"&&(F.material.emissiveIntensity=E?1.05:.16),O==="taillamp"&&(F.material.emissiveIntensity=E?.75:.18);d=E}if(!_){let L=Number.isFinite(f)&&Number.isFinite(m)?se.clamp(m-f,0,.25):0;y||(h+=L),f=m}let v=_?y?0:m:h;if(g?.time===v&&g?.reduceMotion===y&&g?.transientTelemetry===_)return;g={time:v,reduceMotion:y,transientTelemetry:_};let w=t.sample(v,y),A=0,S=0;function P(L,O,F){n.position.set(L.x,L.y+.065,L.z),n.rotation.set(0,0,0),n.scale.set(O*L.scale,1,F*L.scale),n.updateMatrix(),l.setMatrixAt(S++,n.matrix)}for(let L of w.walkers){let{direction:O,scale:F}=L,z=O>0?0:Math.PI;Dh(L,y,(q,k,J,lt,tt,it,at,Ct=0)=>{n.position.set(L.x+k*F*O,L.y+J*F,L.z+lt*F*O),n.rotation.set(0,z,Ct),n.scale.set(tt*F,it*F,at*F),n.updateMatrix(),a.setMatrixAt(A++,n.matrix)}),P(L,5.32,4.1)}let U=new Map;for(let L of w.cyclists){let O=U.get(L.style.id)??0;n.position.set(L.x,L.y,L.z),n.rotation.set(0,L.direction>0?0:Math.PI,0),y||n.rotateX(Math.sin(L.gait)*.028),n.scale.setScalar(L.scale),n.updateMatrix();for(let{mesh:F}of u.get(L.style.id))F.setMatrixAt(O,n.matrix);U.set(L.style.id,O+1),P(L,L.style.length*.52,L.style.width*.58)}for(let L of u.values())for(let{mesh:O}of L)O.instanceMatrix.needsUpdate=!0;a.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0}function p(){for(let m of e.children)m.dispose(),m.geometry.dispose(),m.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:x,dispose:p}}var Fh=Math.PI*2,{clamp:Oh,lerp:ks}=se,GS=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),WS=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7}];function Tm(i,t){let e=0,n=i.length-1;for(;n-e>1;){let o=e+n>>1;t<i[o].x?n=o:e=o}let s=i[e],r=i[n];return ks(s.z,r.z,Oh((t-s.x)/(r.x-s.x),0,1))}function XS(i){if(!Array.isArray(i?.shoreline)||i.shoreline.length<2||![i.y,i.farZ,i.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:n}=i,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:WS.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=Oh(n+o.center,s+c,r-c);function u(d){let h=l+Math.cos(d)*a,f=Math.max(e+65,Tm(t,h)-o.offshore-Math.sin(d)*o.drift);return{x:h,z:f}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*Fh/12);if(Tm(t,c)-l<o.length/2+8)return!1}return!0})}function Rm(i,t,e=.003){let n=i.point(t-e),s=i.point(t+e);return Math.atan2(n.z-s.z,s.x-n.x)}function YS(i,t,{condition:e}={}){let n=Number.isFinite(t)?t:0,s=i.start+n*Fh/i.period,{x:r,z:o}=i.point(s),a=n*1.24+i.start*3,c=GS.has(e)?1.55:1;return{x:r,z:o,angle:s,yaw:Rm(i,s),heave:Math.sin(a)*.55*c,pitch:Math.cos(a*.89)*.017*c,roll:Math.sin(a*.74+.4)*.031*c}}function Cm(i,t){let e=new ce;return e.setAttribute("position",new jt(i.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function Im(i){return Cm(i,i.length===3?[0,1,2]:[0,1,2,0,2,3])}function Uh(i,t,e,n,s=1){let r=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],o=r.flatMap(([u,d])=>{let h=u*i,f=t*d*s/2;return[[h,n,-f*.58],[h,n,f*.58],[h,e-.9,f],[h,e,f*.88],[h,e,-f*.88],[h,e-.9,-f]]}),a=[],c=6,l=(r.length-1)*c;for(let u=0;u<l;u+=c)for(let d=0;d<c;d++){let h=(d+1)%c;a.push(u+d,u+d+c,u+h+c,u+d,u+h+c,u+h)}for(let u=1;u<c-1;u++)a.push(0,u,u+1,l,l+u+1,l+u);return Cm(o,a)}function qS(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new qt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new be(c,3)),r}),e=Pn(t);for(let n of t)n.dispose();return e}function zn(i,t,e,n,s,r){return new Te(i,t,e).translate(n,s,r)}function qi(i,t,e){let n=new G(...i),s=new G(...t).sub(n),r=new en().setFromUnitVectors(new G(0,1,0),s.clone().normalize());return new nn(e,e,s.length(),6).applyQuaternion(r).translate(...n.addScaledVector(s,.5).toArray())}function Am(i,t,e,n,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let d=ks(ks(t[0],e[0],l),n[0],u),h=ks(ks(t[1],e[1],l),n[1],u),f=ks(ks(t[2],e[2],l),n[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[d,h,f]};for(let l=0;l<o.length-1;l++){let u=o[l],d=o[l+1];for(let h=0;h<a;h++){let f=h/a,g=(h+1)/a,x=[c(f,u),c(g,u),c(g,d)];d<1&&x.push(c(f,d)),i.push([Im(x),r[l]])}}}function ZS(i){let t=[3,43,0];i.push([qi([3,4,0],t,.9),"#c6a983"],[qi([3,11,0],[-25,10,-13],.6),"#c6a983"],[qi([28,5,0],t,.33),"#d7c5a8"],[qi([-25,5,0],t,.28),"#d7c5a8"],[zn(15,1.9,10,-13,5.4,0),"#a8886e"],[zn(9,1.5,7.5,-13,6.35,0),"#62797b"]),Am(i,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),Am(i,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function $S(i){i.push([zn(28,8.5,17,-7,9.1,0),"#f1e5cc"],[zn(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[zn(9,.75,7,-9,15.5,0),"#8aa5a5"],[zn(9,2.2,11,-24,5.9,0),"#bc9472"],[Im([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[qi([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])i.push([zn(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);i.push([qi([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[qi([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function JS(i){i.push([zn(15,6.1,13,6,7.9,0),"#e4d7ad"],[zn(17,1.4,14,6,11.65,0),"#71968e"],[zn(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[zn(9,3.4,7,-8,6.8,2.6),"#d7a674"],[zn(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[qi([-19,5,-5],[-28,16,-7],.45),"#907459"],[qi([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])i.push([zn(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new mn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function jS(i,t){let{id:e,length:n,beam:s,paint:r,deck:o}=i,a=new ae;a.name=i.name;let c=[[Uh(n,s,3.7,-2.5),r],[Uh(n,s,4.52,3.55,1.018),"#f4e4c9"],[Uh(n*.92,s,4.75,4.44,.83),o]];return e==="sailboat"?ZS(c):e==="cabin"?$S(c):JS(c),a.add(new he(qS(c),t)),a}var _s=12,KS=new qt("#def5e9");function QS(i,t){let n=_s*3*2,s=new ce,r=new be(new Float32Array(n*3),3).setUsage(Bn),o=new Float32Array(n*4),a=[];for(let d=0;d<3;d++)for(let h=0;h<_s;h++){let f=(d*_s+h)*2,g=h/(_s-1),x=Math.pow(Math.sin((.1+.9*g)*Math.PI),1.15)*(1-.4*g);for(let p=0;p<2;p++)KS.toArray(o,(f+p)*4),o[(f+p)*4+3]=i.wake*x*(d===1?.22:.76);h<_s-1&&a.push(f,f+2,f+1,f+1,f+2,f+3)}s.setAttribute("position",r),s.setAttribute("color",new be(o,4)),s.setIndex(a);let c=new Ve({vertexColors:!0,side:on,transparent:!0,depthWrite:!1,opacity:.82}),l=new he(s,c);l.name=i.name+" wake",l.frustumCulled=!1;function u({angle:d},h){let g=(i.id==="cabin"?4.1:6)*Fh/i.period;for(let x=0;x<_s;x++){let p=x/(_s-1),m=d-g*p,y=Rm(i,m),{x:E,z:_}=i.point(m),v=Math.cos(y),w=Math.sin(y),A=i.length*.48,S=E-v*A,P=_+w*A;for(let U=0;U<3;U++){let L=(U-1)*i.beam*(.19+p*.62),O=(U===1?1.85:.62)*(1+p*.55);for(let F=0;F<2;F++){let z=L+(F?O:-O);r.setXYZ((U*_s+x)*2+F,S+w*z,t+.14,P+v*z)}}}r.needsUpdate=!0,c.opacity=h?.44:.82}return{mesh:l,update:u}}function Pm(i){let t=new ae;t.name="Coastal boats";let e=new Oe({vertexColors:!0,side:on,roughness:.73}),n=XS(i).map(l=>{let u=jS(l,e),d=QS(l,i.y);return t.add(d.mesh,u),{route:l,hull:u,wake:d}}),s=0,r,o=!1;function a(l,{reduceMotion:u=!1,night:d=!1,condition:h,transientTelemetry:f=!1}={}){if(o)return;let g=Number.isFinite(l)?l:void 0;!f&&!u&&g!==void 0&&r!==void 0&&(s+=Oh(g-r,0,.25)),r=f?void 0:g;let x=f?u?0:g??0:s;for(let{route:p,hull:m,wake:y}of n){let E=YS(p,x,{condition:h});m.position.set(E.x,i.y+E.heave,E.z),m.rotation.set(E.roll,E.yaw,E.pitch,"YXZ"),y.update(E,d)}}function c(){if(!o){o=!0;for(let{hull:l,wake:u}of n)l.children[0].geometry.dispose(),u.mesh.geometry.dispose(),u.mesh.material.dispose();e.dispose(),t.clear()}}return a(0),{root:t,update:a,dispose:c}}var tM=26,eM=39,nM=2.25,Nm=2*Math.PI,iM=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function Bh(i,t){let e=i.findIndex(r=>r.x>=t);if(e<1)return i[e===0?0:i.length-1].z;let n=i[e-1],s=i[e];return se.lerp(n.z,s.z,(t-n.x)/(s.x-n.x))}function sM(i,t){let{shoreline:e,focusX:n,y:s}=i??{},r=t?.farZ;if(![n,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,d){let h=l-u,f=l+u,g=e.filter(w=>w.x>h&&w.x<f).map(w=>w.z),x=Math.max(Bh(e,h),Bh(e,f),...g)+tM,p=r-eM;if(p-x<19)return null;let m=Math.min(d,(p-x)/2),y=(p+x)/2,E=Bh(e,l)+22,_=se.clamp((r+.4-y)/(r+.4-E),0,1),v=s-.77+_*.43;return{x:l,y:v,z:y,halfWidth:u,halfDepth:m}}let a=o(n-72,46,18),c=o(n+68,27,15);return a||c?{court:a,castle:c}:null}function Lm(i,t=0,e=!1){let n=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(i.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=i.court,d=n/nM,h=d%1,f=Math.floor(d)%2?1:-1,g=Math.sin(Math.PI*h),x=u-16,p=Math.min(3.3,l*.22);r={x:o+f*x*(1-2*h),y:a+20.9+g*15.7,z:c+Math.sin(Nm*h)*p,rotation:n*2.6,ground:a};for(let m of[-1,1]){let E=1-Math.min(1,(m!==f?1-h:h)/.24),_=e?.32:E*E;s.push({kind:"player",style:m<0?0:1,scale:1,yaw:-m*Math.PI/2,x:o+m*(x+6-_*2),y:a+_*1.65,ground:a,z:c+m*p*(.65+g*.35),reach:_,swing:Math.sin(n*3.15+m*.9)*.42})}}if(i.castle){let{x:o,y:a,z:c}=i.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(n*4.8),swing:e?0:Math.cos(n*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(n*2.5+.9),swing:e?0:Math.cos(n*2.5+.9)*.35})}return{actors:s,ball:r}}function rM(i,t,e,n,s){let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new qt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new be(a,3)),r.translate(e,n,s)}function Dm(i,t){let e=[],n=(c,l,u,d,h)=>e.push(rM(c,l,u,d,h));t({add:n,box:(c,l,u,d,h,f,g)=>n(new Te(c,l,u),d,h,f,g),cylinder:(c,l,u,d,h,f,g)=>n(new nn(c,l,u,12),d,h,f,g)});let o=Pn(e);for(let c of e)c.dispose();let a=new Oe({vertexColors:!0,roughness:.86});i.add(new he(o,a))}function oM({x:i,y:t,z:e,halfWidth:n,halfDepth:s}){let r=new ae;r.name="beach-volleyball-court",r.position.set(i,t,e);let o=s-1;return Dm(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",d="#f4e4bb";for(let h of[-1,1])a(n*2,.1,.56,l,0,.14,h*s),a(.56,.1,s*2,l,h*n,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,h*o),c(.93,.93,1.1,l,0,18.9,h*o),c(.85,.85,.76,d,0,20.48,h*o),a(.76,.54,o*2,d,0,h<0?10.1:19.5,0);for(let h=1;h<5;h++)a(.23,.23,o*2,u,0,10.2+h*1.83,0);for(let h=1;h<12;h++)a(.22,9.25,.24,u,0,14.8,o*(h/6-1))}),r}function aM({x:i,y:t,z:e}){let n=new ae;return n.name="beach-sandcastle",n.position.set(i,t,e),Dm(n,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Le(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Le(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let d of[-1,1]){let h=d*6.15;o(2.44,3.35,7.9,a,h,4.05,-.8),o(2.66,2.52,1.03,c,h,8.03,-.8);for(let[f,g]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,h+f,8.99,-.8+g);r(1.07,.94,.3,l,h,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new ce;u.setAttribute("position",new jt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new mn(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Te(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Le(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),n}function cM(){let i=new Le(3.25,24,12),t=i.toNonIndexed();i.dispose();let e=t.attributes.position,n=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new qt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=d=>(e[d](o)+e[d](o+1)+e[d](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/Nm*n.length)%n.length,u=Math.abs(a("getY"))>2.85?n[1]:n[l];for(let d=0;d<3;d++)u.toArray(s,(o+d)*3)}t.setAttribute("color",new be(s,3));let r=new he(t,new Oe({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function kh(i,t){let{skin:e,hair:n,shirt:s,shorts:r,trim:o,style:a}=iM[i.style],c=i.kind==="builder",l=c?7.8:12.2,u=c?13.6:18.3,d=c?i.reach*1.15+.65:0;t(s,0,l,d*.43,3.72,4.1,2.85,c?.24:0),t(r,0,l-3.4,0,3.34,1.65,2.8),t(o,0,l-1.95,2.45,3.03,.48,.59);for(let h of[-1,1]){let f=c?.8:h*i.swing;t(r,h*1.65,c?3.5:6.4,f,1.55,2.3,1.49,c?.8:0),t(e,h*1.68,c?1.72:3.1,c?2.08:f,1.16,2.13,1.16),t(e,h*1.75,1.02,.88+f,1.28,.76,2.08);let g=c?l+.45:l+1.5+i.reach*2.1,x=c?2.4+i.reach*1.72:i.reach*.8,p=c?-.78-i.reach*.27:.12+i.reach*.62;t(e,h*(4.13-i.reach*.46),g,x,1.04,3.7,1.05,p,h*(c?.1:.24+i.reach*.55)),t(e,h*(4.1-i.reach*.53),g+(c?-1.65:i.reach*5.55-2.92),x+(c?2.7:i.reach*1.9),1.14,1.15,1.13),t(e,h*3.48,u,d+.4,.84,.99,.78),t("#493a41",h*1.46,u+.38,d+3.41,.43,.47,.34),t("#c98878",h*2.22,u-.45,d+3.05,.54,.27,.26)}t(n,0,u+.64,d-.53,3.81,4.12,3.64),t(e,0,u,d+.72,3.25,3.29,2.89),t(e,0,u-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,u-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,u+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,u+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(n,-.99,u+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?n:o,2,u+3.23,d-1.66,1.41,1.43,1.39))}function Um(i,t){let e=new ae;e.name="beach-play";let n=sM(i,t);if(!n)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s=n.court?oM(n.court):null,r=n.castle?aM(n.castle):null,o=s?cM():null;s&&e.add(s,o),r&&e.add(r);let a=Lm(n),c=0;for(let _ of a.actors)kh(_,()=>c++);let l=new vi(new Le(1,10,7),new Oe({color:"#fff",roughness:.76}),c);l.name="beach-recreation-figures",l.frustumCulled=!1,l.instanceMatrix.setUsage(Bn);let u=new vi(new Cn(1,20).rotateX(-Math.PI/2),new Ve({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),a.actors.length+ +!!o);u.name="beach-play-contact-shadows",u.frustumCulled=!1,e.add(l,u);let d=0,h=new Map;for(let _ of a.actors)kh(_,v=>{h.has(v)||h.set(v,new qt(v)),l.setColorAt(d++,h.get(v))});let f=new ke,g,x=0,p,m;function y(_,{reduceMotion:v=!1,transientTelemetry:w=!1}={}){if(!w){let O=Number.isFinite(g)&&Number.isFinite(_)?se.clamp(_-g,0,.25):0;v||(x+=O),g=_}let A=v?.96:w?_:x;if(A===p&&v===m)return;p=A,m=v;let S=Lm(n,A,v),P=0,U=0,L=(O,F,z,q,k)=>{f.position.set(O,F+.16,z),f.rotation.set(0,0,0),f.scale.set(q,1,k),f.updateMatrix(),u.setMatrixAt(U++,f.matrix)};for(let O of S.actors){let{scale:F,yaw:z}=O,q=Math.cos(z),k=Math.sin(z);kh(O,(J,lt,tt,it,at,Ct,Lt,Et=0,Tt=0)=>{f.position.set(O.x+F*(lt*q+it*k),O.y+tt*F,O.z+F*(-lt*k+it*q)),f.rotation.set(0,z,0),f.rotateX(Et),f.rotateZ(Tt),f.scale.set(F*at,F*Ct,F*Lt),f.updateMatrix(),l.setMatrixAt(P++,f.matrix)}),L(O.x,O.ground,O.z,5.25*F,4.47*F)}if(S.ball){let{x:O,y:F,z,rotation:q,ground:k}=S.ball;o.position.set(O,F,z),o.rotation.set(.25,q*.59,q),L(O,k,z,2.82,2.52)}l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0}y(0);function E(){e.traverse(_=>{_.isMesh&&(_.isInstancedMesh&&_.dispose(),_.geometry.dispose(),_.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:E}}var lM=new G(0,-1,0),uM=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],zh=.01;function Fm(i){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(i)}function Bm(i){return!i.isMesh||!i.geometry?!1:(Array.isArray(i.material)?i.material:[i.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function hM(i){i.updateWorldMatrix(!0,!0);let t=[];i.traverseVisible(a=>{if(!Bm(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let n=new ze;for(let a of t)a.min.y<=e+zh&&n.union(a);let s=n.getCenter(new G),r=n.getSize(new G),o=e-i.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-i.position.x,centerZ:s.z-i.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function fM(i,t){let{type:e}=i;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function dM(i,t){let[e,n]=fM(i.item,t);if(![e,n,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new ze().setFromObject(s);return r.isEmpty()?null:{placement:i,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:n*s.scale.y}}function Om(i,t){let e=t?.[i.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:i}function km(i,t){return i.intersectObject(t,!0).find(e=>Bm(e.object))}function zm(i,{low:t,high:e}){return i?.face?.normal.y>=.92&&i.point.y>=t&&i.point.y<=e}function pM(i,t,e,n,s,r){let o=t.x+e.centerX-n.x,a=t.z+e.centerZ-n.z,{bounds:c,probe:l,rootY:u}=i;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let d=-1/0;for(let[h,f]of uM){r.set(o+h*e.radiusX,c.max.y+1,a+f*e.radiusZ),s.set(r,lM);let g=km(s,l);if(!zm(g,i))return null;d=Math.max(d,g.point.y)}return u+d}function Hm(i,t){let e=[],n=[];for(let c of i){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=Fm(c.item);if(u==="surface"){let d=dM(c,l);d&&e.push(d)}else if(u==="tabletop"){let d=hM(l.root);d&&n.push({placement:c,foot:d})}}let s=new fs,r=new G;function o(c){let l=new Map;for(let{placement:u,foot:d}of n){let h=Om(u,c),f=null,g=u.baseY,x=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let m=Om(p.placement,c),y=pM(p,h,d,m,s,r);if(y===null||y<=u.baseY||y<g-zh)continue;let E=p.placement.item.id,_=Math.hypot(h.x-m.x,h.z-m.z);Math.abs(y-g)<zh&&(_>x||_===x&&E>f)||(f=E,g=y,x=_)}l.set(u.item.id,{y:g-d.bottom,supportId:f})}return l}function a(c,l){if(Fm({type:c})!=="tabletop")return null;let u=new fs(void 0,void 0,l.near,l.far),d=new G,h;for(let f of e){let{x:g,z:x}=f.placement;d.copy(l.ray.origin).sub(r.set(g,f.rootY,x)),u.set(d,l.ray.direction);let p=km(u,f.probe);p&&(!h||p.distance<h.hit.distance||p.distance===h.hit.distance&&f.placement.item.id<h.surface.placement.item.id)&&(h={hit:p,surface:f,x:g,z:x})}return!h||!zm(h.hit,h.surface)?null:{x:h.x+h.hit.point.x,y:h.z+h.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:Ul,sin:Hs,cos:Fl}=Math,Pi=Ul*2,mM=new G(0,1,0),zs=["#86684f","#9a7c5b","#735844"],Hh=["#92745a","#ac8f69","#785c49"],Vh=["#537759","#6b8a55","#849a58","#a0ab63"],Gh=["#3e6251","#4d7056","#61815d","#789365"],Wh=["#4a6653","#567552","#6b8659","#819863"],gM=["#517553","#64845a","#799660","#98a869"],xM=["#617d69","#72917a","#8ea17e","#a7b08a"],yM=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],Vm=240,_M=new Set(["windy","windy-variant"]),ta=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function Gm(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function En(i,t,e){return[Fl(i)*t,e,Hs(i)*t]}function un(i,[t,e,n]){return[i[0]+t,i[1]+e,i[2]+n]}function vM(i,t,e,n,s){let r=(c,l)=>i.add(c,l,t,e,n);function o(c,l,u,d,h,f=7){let g=new G(...l),x=new G(...u),p=x.clone().sub(g),m=new en().setFromUnitVectors(mM,p.clone().normalize()),y=new nn(h,d,p.length(),f),E=g.lerp(x,.5);r(y.applyQuaternion(m).translate(E.x,E.y,E.z),c)}function a(c,l,u,d=.13,h=6){let f=new Le(1,9,h),g=f.getAttribute("position"),x=s()*Pi;for(let p=0;p<g.count;p++){let m=g.getX(p),y=g.getY(p),E=g.getZ(p),_=1+d*(Hs(m*5.8+y*3.2+E*2.1+x)*.7+Fl(E*7.8-y*2.2+x)*.3);g.setXYZ(p,m*_*u[0],y*_*u[1],E*_*u[2])}f.computeVertexNormals(),r(f.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function Xh(i,t,e,n,s,r,o){let a=[Fl(e),Hs(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=i.positions.length/3;for(let[d,[h,f]]of l.entries()){let g=s*f,x=t[0]+h*n*a[0],p=t[1]+Hs(h*Ul)*r-o*h*h,m=t[2]+h*n*a[1];for(let E of[-1,0,1])i.positions.push(x+E*g*c[0],p+(E===0?g*.29:0),m+E*g*c[1]),i.uvs.push((E+1)*.5,h);if(d===0)continue;let y=u+(d-1)*3;for(let E of[0,1]){let _=y+E;i.indices.push(_,_+1,_+3,_+1,_+4,_+3)}}}function bM(i,t,e){let n=new ce;n.setAttribute("position",new jt(e.positions,3)),n.setAttribute("uv",new jt(e.uvs,2)),n.setIndex(e.indices),n.computeVertexNormals(),i(n,t)}function SM(i,t,e,n){let{draw:s,branch:r,crown:o,random:a}=i,c=t*(n?.063:.125),l=x=>En(e,c*x*x,t*x*(n?.85:.86)),u=x=>t*(n?.029:.024)*(1-.53*x),d=n?5:6;for(let x=0;x<d;x++){let p=x/d,m=(x+1)/d;r(Hh[0],l(p),l(m),u(p),u(m),9)}for(let x=1;x<=13;x++){let p=x*.067;r(Hh[x%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let h=l(1);o(Vh[0],h,[t*.045,t*.036,t*.048],.08,5);for(let x=0;x<4;x++)o(Hh[2],un(h,En(e+x*Pi/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let f=Vh.map(()=>({positions:[],uvs:[],indices:[]})),g=n?9:10;for(let x=0;x<g;x++){let p=e+x*Pi/g+(a()-.5)*.18,m=x%3===0,y=t*((m?.35:.29)+(a()-.5)*.07),E=t*(m?.026:.077),_=t*(m?.072:.025);if(Xh(f[(x+1)%4],h,p,y,t*.012,E,_),n){let v=un(h,En(p,y*.43,E*.7));for(let w=-3;w<=3;w++)Xh(f[(x+w+4)%4],v,p+w*.19,y*(.58-Math.abs(w)*.055),t*(.016-Math.abs(w)*.0018),E*.32,_*.84)}else for(let v=0;v<7;v++){let w=.19+v*.104,A=un(h,En(p,y*w,Hs(w*Ul)*E-_*w*w));for(let S of[-1,1])Xh(f[(x+v+(S>0?1:0))%4],A,p+S*(.83-w*.37),t*(.095-w*.048),t*(.0095-w*.003),t*.014,t*.025)}}for(let[x,p]of f.entries())bM(s,Vh[x],p)}function Yh(i,t,e,n,s=.84){let{branch:r}=i,o=a=>En(e,t*n*(a*a+.16*Hs(Ul*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(zs[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*Pi/4;r(zs[2],En(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(zs[1],En(c,t*.039,t*.025),un(o(.36),En(c,t*.031,0)),t*.004,t*.002,4)}return o}function MM(i,t,e){let{crown:n,random:s}=i,r=Yh(i,t,e,.018,.94);n(Gh[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let d=0;d<u;d++){let h=e+d*Pi/u+o*2.5,f=un(r(o),En(h,t*a,t*((s()-.5)*.035)));n(Gh[(d+u)%4],f,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}n(Gh[2],un(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function wM(i,t,e){let{branch:n,crown:s,random:r}=i,o=Yh(i,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let d=e+u*Pi/l+a*7+(r()-.5)*.22,h=o(a),f=un(h,En(d,t*c,t*(.02+r()*.028)));n(zs[1],h,f,t*.017,t*.0037,6);let g=un(f,[0,t*.029,0]);s(Wh[u%3],g,[t*c*.46,t*.054,t*c*.45],.21,5),s(Wh[(u+2)%4],un(g,En(d-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(Wh[3],un(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function EM(i,t,e,n){let{branch:s,crown:r,random:o}=i,a=n==="olive",c=n==="jacaranda",l=a?xM:c?yM:gM,u=Yh(i,t,e,a?.1:.034,a?.78:.84),d=a?5:6;for(let f=0;f<d;f++){let g=e+f*Pi/d+(o()-.5)*.33,x=u(.46+o()*.12),p=t*(.16+o()*.07),m=un(x,En(g,t*.12,p*.58)),y=un(x,En(g+.16,t*(.19+o()*.052),p));s(zs[1],x,m,t*.026,t*.016,7),s(zs[0],m,y,t*.0165,t*.0045,6);let E=t*(.092+o()*.03);r(l[f%2],un(y,[0,t*.024,0]),[E,t*(a?.064:.104),E*.87],.21,5);for(let _ of[-1,1]){let v=un(y,En(g+_*1.18,t*.055,t*.05));s(zs[0],m,v,t*.012,t*.003,5);let w=t*(.063+o()*.027);r(l[c?2+(f+(_>0?1:0))%3:1+f%3],un(v,[0,t*.022,0]),[w,w*(a?.63:.88),w*.91],.21,5)}}let h=un(u(1),[0,t*.023,0]);r(l[2],h,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),un(h,En(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function Wm(i,t,e){let n=Math.imul(Math.round(i*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:n}function Xm(i,t){return Number.isFinite(t)?se.clamp(t,32,200):ta[i].height}function TM(i,{kind:t,x:e,z:n,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(ta,t)||![e,n,s].every(Number.isFinite))return!1;let a=Xm(t,r),c=Gm(Wm(e,n,o)),l=c()*Pi,u=vM(i,e,s,n,c);return t==="fan-palm"||t==="date-palm"?SM(u,a,l,t==="fan-palm"):t==="cypress"?MM(u,a,l):t==="shore-pine"?wM(u,a,l):EM(u,a,l,t),!0}function AM(i=0,t={}){let{windSpeed:e,windBearing:n,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?se.clamp(e,0,22):_M.has(r)?6:0,a=Number.isFinite(n)?(n%360+360)%360:270,c=se.degToRad(a),l=Number.isFinite(i)?Math.max(0,i)%Vm:0;return{x:-Hs(c),z:Fl(c),phase:Pi*l/Vm,strength:s?0:o*.0048}}var RM=`
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
`;function Ym(i){let t=new Set,e={roomcraftTreeDirection:{value:new Nt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function n(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${RM}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:d}=o;if(!Object.hasOwn(ta,a))return!1;let h=Xm(a,c),f=Gm(Wm(l,u,d))()*Pi;return TM({add(g,x,...p){let m=g.getAttribute("position"),y=new Float32Array(m.count*3);for(let E=0;E<m.count;E++)y[E*3]=m.getY(E)/h,y[E*3+1]=h,y[E*3+2]=f;g.setAttribute("roomcraftTreeWind",new be(y,3)),n(i.material(x)),i.add(g,x,...p)}},o)}function r(o,a){let c=AM(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var Br=Math.PI/180,Jh=14,ig=56,CM=21,Hn=-111,ui=-108,sg=14,IM=28,ea=28,qm={minX:0,maxX:1536,minZ:0,maxZ:1024},qh={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Zh={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},PM=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),LM=new Set(["snowy","snowy-rainy"]),Zm={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function zl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function kl(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function rg(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function og(i,t,e,n){let s=i.some(o=>kl(o,e-t.dz*23,n+t.dx*23));return i.some(o=>kl(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function NM(i,t,e){if(!Object.hasOwn(Zm,e.type))return null;let n=rg(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):og(i,s,r,o),l=(Jh/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Zm[e.type],ig-8)}}function $m(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Jm(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function DM(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function jm(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function Ol(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function ag(i){return Object.hasOwn(Zh,i.finish)?Zh[i.finish]:Zh.graphite}function cg(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function Km(i,t,e){let[n,s]=cg(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=se.clamp(s/i.item.h+.5,0,1);return ui-ui*r}function Bl(i,t,e){return kl(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?se.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=Jh/2})}function UM(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(d=>Bl(d,n,s)),o=t.some(d=>Jo(d)&&Bl(d,n,s)&&Bl(d,i.x1,i.y1)&&Bl(d,i.x2,i.y2)),a=r?0:Hn,c=a;if(!o)for(let d of e){let h=Km(d,i.x1,i.y1),f=Km(d,i.x2,i.y2);if(h!==null&&f!==null){a=h,c=f;break}}let[,l,u]=ag(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/IM)))}}function jh(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(v=>v?.points?.length>=3&&v.points.every(w=>Number.isFinite(w?.x)&&Number.isFinite(w?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(v=>!Jo(v)):e,s=i.walls.map($m).filter(Boolean),r=s.filter(v=>v.kind!=="fence"),o=i.items.filter(v=>typeof v?.id=="string"&&typeof v.type=="string"&&[v.x,v.y,v.w,v.h].every(Number.isFinite)&&v.w>0&&v.h>0),a=jm(),c=jm(),l=(v,w)=>Ol(a,v,w);for(let v of e)for(let w of v.points)l(w.x,w.y);for(let v of s)l(v.x1,v.y1),l(v.x2,v.y2);for(let v of n)for(let w of v.points)Ol(c,w.x,w.y);for(let v of r)Ol(c,v.x1,v.y1),Ol(c,v.x2,v.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:qm},d=new Map(r.map(v=>[v.id,v])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(v=>d.has(v))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,d.get("w1").y1+57],[d.get("w2").x1,d.get("w1").y1+57],[d.get("w3").x1,d.get("w3").y1],[d.get("w3").x2,d.get("w3").y2],[u.minX-10,d.get("w4").y2]].map(([v,w])=>({x:v,y:w})),southDeck:[[u.minX-10,d.get("w6").y1],[d.get("w7").x1,d.get("w7").y1],[d.get("w7").x2,d.get("w7").y2],[d.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([v,w])=>({x:v,y:w})),recess:{x1:d.get("w12").x2,x2:d.get("w18").x1,z1:Math.min(d.get("w11").y2,d.get("w12").y2),z2:d.get("w13").y2}}:null,f=r.filter(v=>h?!(v.id==="w3"&&Jm(v,[400,408,342,468]))&&!(v.id==="w7"&&Jm(v,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:v,x2:w,z1:A}=h.recess;if(w>v){let S=[[v,d.get("w12").y2,v,A],[v,A,w,A]];for(let[P,U]of S.entries()){if(f.some(k=>DM(k,U)))continue;let[L,O,F,z]=U,q=$m({id:`reference-recess-${P}`,x1:L,y1:O,x2:F,y2:z});q&&f.push(q)}}}let g=new Map;for(let v of o.filter(w=>w.type==="window")){let w=rg(f,v.x,v.y,(v.rotation||0)*Br);if(!w||w.distance>27)continue;let{wall:A,t:S,centerX:P,centerZ:U}=w,L=Math.max(1,S-v.w/2+1),O=Math.min(A.length-1,S+v.w/2-1);if(O-L<14)continue;A.openings.push({start:L,end:O});let F=og(n,A,P,U),z=A.angle+(F<0?Math.PI:0),q=(L+O)/2;g.set(v.id,{x:A.x1+q*A.dx,z:A.y1+q*A.dz,angle:z,window:{...v,w:O-L+2,rotation:z/Br}})}let x=o.filter(v=>v.type==="garageDoor"),p=o.map(v=>{let w=v.type==="cameraThumbnail"&&x.some(q=>qM(v,q))?Hn:ug(v.type),A=v.type==="controlZone"&&(v.visualKind==="window"||v.entityId?.startsWith("cover.")),S=g.get(v.id)??NM(n,f,v);if(A){let q=52;for(let k of g.values()){let J=Math.hypot(k.x-v.x,k.z-v.y);J<q&&(S=k,q=J)}}let P=S?.x??v.x,U=S?.z??v.y,L=S?.angle??(Number.isFinite(v.rotation)?v.rotation*Br:0),O=v.type==="stairs"?1536:300,F=Math.min(O,(Math.abs(Math.cos(L))*v.w+Math.abs(Math.sin(L))*v.h)/2),z=Math.min(O,(Math.abs(Math.sin(L))*v.w+Math.abs(Math.cos(L))*v.h)/2);return l(P-F,U-z),l(P+F,U+z),{item:v,x:P,z:U,baseY:w,angle:L,window:S?.window,mountY:S?.mountY,isBlind:A}});for(let v of f)v.openings.sort((w,A)=>w.start-A.start||w.end-A.end);let m=p.filter(({item:v})=>v.type==="stairs").map(v=>{let{item:w,x:A,z:S,angle:P}=v,U=Number.isInteger(w.steps)&&w.steps>=2&&w.steps<=40?w.steps:sg,L=Math.min(46,Math.max(12,w.w*.47)),O=-w.h/2-L;for(let F of[-w.w/2,w.w/2])l(A+F*Math.cos(P)-O*Math.sin(P),S+F*Math.sin(P)+O*Math.cos(P));return{...v,steps:U,apronDepth:L}}),y=s.filter(v=>v.kind==="fence").map(v=>UM(v,e,m)),E=Dp(e,h,t),_=Fp(f.map(v=>({...v,palette:ag(v)})),Jh,ig,CM);return Number.isFinite(a.minX)||Object.assign(a,qm),{rooms:e,walls:f,fences:y,stairs:m,placements:p,bounds:a,houseBounds:u,reference:h,floorStructure:E,wallStructure:_,editableStructure:t}}function Qm(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Kh([i,...t]){let e=Qm(new Fn,i);return e.holes=t.map(n=>Qm(new Rs,n)),e}function FM(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=zl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let d=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,d,256,32),s.globalAlpha=.48,s.fillRect(0,d,256,1.2);let h=30+u*47%181;s.fillRect(h,d,1,32),s.globalAlpha=.15;for(let f=0;f<15;f++){let g=c()*256,x=d+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+p/2,x+c()*2-1,g+p,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let d=0;d<8;d++)s.globalAlpha=c()*.14,s.fillRect(d*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(d*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new _r(n);return l.colorSpace=qe,l.wrapS=l.wrapT=Es,l}function $h(i){let t=new Map,e=new _e,n=new en,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,c=f=>(a.has(f)||a.set(f,new Sr({color:f})),a.get(f));function l(f,g,x,p,m,y=0){n.setFromAxisAngle(r,y),e.compose(s.set(x,p,m),n,o),f.applyMatrix4(e);let E=c(g);t.has(E)||t.set(E,[]),t.get(E).push(f)}function u(f,g,x,p,m,y,E,_=0){f>0&&g>0&&x>0&&l(new Te(f,g,x),p,m,y,E,_)}function d(f,g,x,p,m,y,E){let _=new Le(1,9,6);_.scale(f,g,x),l(_,p,m,y,E)}function h(){for(let[f,g]of t){let x=Pn(g);if(!x){for(let p of g)i.add(new he(p,f));continue}i.add(new he(x,f));for(let p of g)p.dispose()}t.clear()}return{add:l,ball:d,box:u,material:c,finish:h}}function OM(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(qh,r)?r:"oak";if(!s.has(a)){let c=qh[a],l=FM(n,c,141+Object.keys(qh).indexOf(a)*977);s.set(a,new Sr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new rs(Kh(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),d=l.getAttribute("uv");for(let f=0;f<d.count;f++)d.setXY(f,u.getX(f)/248,u.getZ(f)/248);let h=new he(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)tg(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)tg(t,r,Hn-1,-22,"#a18e84",!0)}function BM(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new be(e,1))}return i}function tg(i,t,e,n,s,r=!1){let o=new zi(Kh(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(BM(o),s,0,e,0)}function kM(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,d=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,d,t,d,0)}let r=new ce;return r.setAttribute("position",new jt(e,3)),r.setAttribute("uv",new jt(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function eg(i,t){let e=new rs(Kh(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function zM(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(eg(o,!1),r,0,s,0);for(let o of e.bottom)i.add(eg(o,!0),r,0,n,0);e.sides.length&&i.add(kM(e.sides,s-n),r,0,n,0)}}function HM(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:d,posts:h,color:f,postColor:g}=n,x=l-c,p=new Te(Math.hypot(u,x),5,7);p.rotateZ(Math.atan2(x,u)),i.add(p,f,(s+o)/2,(c+l)/2+ea,(r+a)/2,-d);for(let m=0;m<=h;m++){let y=m/h,E=se.lerp(s,o,y),_=se.lerp(r,a,y),v=se.lerp(c,l,y),w=[E,v,_].map(A=>Math.round(A*1e3)).join(",");e.has(w)||(e.add(w),i.box(5,ea,5,g,E,v+ea/2,_,-d))}}}function lg(i,t,e,n,s=0,r=0){let o=e/n,a=-ui/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let d=r-e/2+o*u,h=u===n-1?0:ui+(u+1)*a,f=h-3;i.box(t,f-Hn,o,"#a98075",s,(Hn+f)/2,d+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,d+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,f+3.35/2,d+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,f+3.4/2,d+l/2)}}function VM({item:i,steps:t,apronDepth:e}){let n=new ae,s=$h(n);lg(s,i.w,i.h,t);let r=ui-Hn;return s.box(i.w,r,e,"#c8b79e",0,Hn+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:ui/2}}function GM(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=sg,u=r-s,d=u/l,h=ui,f=-h/l;lg(i,a,u,l,c,(s+r)/2);for(let _=0;_<l;_++){let v=s+d*(_+.5),w=h+(_+1)*f;i.box(5,24,5,"#9f8183",e+4,w+12,v)}let g=d*(l-1),x=f*(l-1),p=new Te(7,5,Math.hypot(g,x)+5);p.rotateX(-Math.atan2(x,g)),i.add(p,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[m,y]=o,E=Math.max(2,Math.ceil((y.x-m.x)/28));i.box(y.x-m.x,5,7,"#896e79",(y.x+m.x)/2,28,m.y);for(let _=0;_<=E;_++)i.box(5,28,5,"#9f8183",m.x+(y.x-m.x)*_/E,14,m.y)}function WM(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=zl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let d=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);d.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),d.addColorStop(1,"#b1c3a000"),e.fillStyle=d,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new _r(t);return s.wrapS=s.wrapT=Es,s.repeat.set(15,10),s.colorSpace=qe,s.anisotropy=4,s}function XM(i,t,e,n){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=zl(150741);if(!t.editableStructure){let g=Math.min(90,c*.18),x=t.reference?t.reference.left+g/2:s+g/2;i.box(g,4,115,"#c7baa4",x,-109,o-88);for(let p=0;p<5;p++)i.box(g*.85,1.8,13,"#dbceba",x,-106,o-137+p*20)}let d=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[g,x]of d){let p=s+g*c,m=o+x*l,y=21+u()*24;i.ball(y*.94,9,y*.67,"#6d886a",p,-104,m),i.ball(y*.82,y*.57,y*.69,"#819b76",p+3,-98,m);for(let E=0;E<8;E++){let _=E*2.39996,v=(.2+u()*.5)*y,w=y*(.28+u()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][E%4];i.ball(w*1.15,w*.8,w,A,p+Math.cos(_)*v,-93+12*u(),m+Math.sin(_)*v*.75)}for(let E=0;E<5;E++){let _=E%2?"#e6c4b1":"#fae6a4",v=p+(u()-.5)*y*1.14,w=m+y*(.62+u()*.43);i.ball(2.3,4.6,2.3,"#819765",v,-106,w),i.ball(3.9,1.8,3.3,_,v,-101.5,w),i.ball(1.2,.9,1.2,"#cb9c57",v,-100.3,w)}}let h=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],f=t.placements.filter(({item:g})=>g.type==="garageDoor"||g.type==="stairs");for(let[g,[x,p,m,y]]of h.entries()){let E=y*ta[x].radius+7,_=s+p*c,v=o+m*l,w=v<o?-1:1,A=_<(s+r)/2?-1:1;for(let[S,P]of[[0,0],[A*(E+20),0],[0,w*(E+20)]]){let U=_+S,L=v+P;if(!(L-E<=e.nearZ||U+E>s&&U-E<r&&L+E>o&&L-E<a||f.some(F=>{let z=U-F.x,q=L-F.z,k=z*Math.cos(F.angle)+q*Math.sin(F.angle),J=-z*Math.sin(F.angle)+q*Math.cos(F.angle);return Math.abs(k)<F.item.w/2+E&&Math.abs(J)<F.item.h*.6+E}))){n.add({kind:x,x:U,z:L,groundY:Hn,height:y,seed:7229+g*101});break}}}for(let[g,x,p,m]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])n.add({kind:x,x:s+p*c,z:e.farZ-m,groundY:Hn+.68,seed:g})}function YM(i,t,e){let n=zl(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(E,_)=>!(o&&E>=o.x1&&E<=o.x2&&_>=o.z1&&_<=o.z2)&&!t.rooms.some(v=>(!t.editableStructure||!Jo(v))&&kl(v,E,_)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let E=0;E<210;E++){let _=s.minX-70+(s.maxX-s.minX+140)*n(),v=c+l*n(),w=n()*180,A=8+n()*8,S=112+n()*34;a(_,v)&&r.push({x:_,z:v,phase:w,length:A,speed:S})}let u=new Float32Array(r.length*6),d=new Float32Array(r.length*3),h=new Float32Array(r.length*3),f=new ce,g=new ce,x=new ce;f.setAttribute("position",new be(u,3).setUsage(Bn)),g.setAttribute("position",new be(d,3).setUsage(Bn)),x.setAttribute("position",new be(h,3).setUsage(Bn));let p=new lo(f,new xr({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),m=new yr(g,new As({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),y=new yr(x,new As({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=m.frustumCulled=y.frustumCulled=!1,i.add(p,m,y),(E,{condition:_,windSpeed:v,windBearing:w})=>{p.visible=PM.has(_);let A=_==="pouring"||_==="lightning-rainy";if(p.material.opacity=A?.5:.34,m.visible=LM.has(_),y.visible=_==="hail",p.visible||m.visible||y.visible){let S=Number.isFinite(w)?w*Br:285*Br,P=se.clamp(v??6,0,22)*.028;for(let[U,L]of r.entries()){let O=65-(L.phase+E*L.speed*(A?1.3:1))%170,F=65-(L.phase+E*20)%170,z=65-(L.phase+E*L.speed*1.55)%170,q=U*6;u.set([L.x,O,L.z,L.x+L.length*P*Math.sin(S),O+L.length,L.z-L.length*P*Math.cos(S)],q),d.set([L.x+Math.sin(E+U)*6,F,L.z],U*3),h.set([L.x,z,L.z],U*3)}f.attributes.position.needsUpdate=p.visible,g.attributes.position.needsUpdate=m.visible,x.attributes.position.needsUpdate=y.visible}}}function ug(i){return i==="garageDoor"?Hn:0}function qM(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*Br,r=Math.cos(s),o=Math.sin(s);return Sp(t,e*r+n*o,-e*o+n*r)}function ZM(i,t,e,n){let s=new G,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let d of l){s.set(...d).project(t);let h=(s.x+1)*e/2,f=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,f-r),u.bottom=Math.max(u.bottom,f+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:d,y2:h,base1:f,base2:g})=>o([[l,f,u],[l,f+ea,u],[d,g,h],[d,g+ea,h]])),c=i.stairs.map(({x:l,z:u,angle:d,item:h,apronDepth:f})=>{let g=Math.cos(d),x=Math.sin(d),p=[];for(let m of[-h.w/2,h.w/2])for(let[y,E]of[[-h.h/2-f,ui],[h.h/2,0]])p.push([l+m*g-y*x,E,u+m*x+y*g]);return o(p)});return[...a,...c]}function $M({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([d,h])=>[i+d*r-h*o,t+d*o+h*r].map(f=>Math.round(f*1e5)/1e5))]}function JM(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=cg(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return ui;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return ui+-ui/s.steps*l}return null}}function hg(i,t){let e=jh(t),n=t.sceneSettings,s=new cl({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});s.resetState();let r=new is;r.background=new qt("#d7dfcd");let o=new ls(-800,800,450,-450,1,4400),{minX:a,maxX:c,minZ:l,maxZ:u}=e.bounds,d=new Oe({color:"#e8e8d2",map:WM(i.ownerDocument),roughness:.95}),h=new he(new Hi(6200,4200),d);h.rotation.x=-Math.PI/2,h.position.set((a+c)/2,Hn,(l+u)/2),r.add(h);let f=$h(r),g=$h(r),x=Ym(g),p=rm(e),m=om(f,p,Hn,h.geometry.parameters.width,h.position.x),y,{water:E}=am(f,p,Hn,e.houseBounds,h.geometry.parameters.width,h.position.x),_=E.shoreline.reduce((W,ot)=>Math.abs(ot.x-E.focusX)<Math.abs(W.x-E.focusX)?ot:W),v={road:{x:m.centerX,y:m.surfaceY+8,z:(m.lanes[0]+m.lanes[1])/2},coast:{x:E.focusX+16,y:E.y,z:_.z-36},beach:{x:E.focusX,y:E.y+8,z:_.z+37}};XM(f,e,p,x),GM(f,e),OM(r,f,e,i.ownerDocument),zM(f,e),HM(f,e.fences),f.finish();let w=r.children.length;g.finish();let A=r.children.slice(w),S=r.children.filter(W=>W.isMesh),P=kp(s,r,e.bounds);P.markStructure();let U=im(E),L=Em(m),O=Pm(E),F=Um(E,p);r.add(U.mesh,L.root,O.root,F.root);let z=YM(r,e,p.sceneryMinZ),q=e.floorStructure.footprint,k=Ah(q),J=e.stairs.length?Ah(ng.default.union(q,...e.stairs.map($M))):k,lt=JM(e,k),tt=new is,it=Qp(),at=new Is("#fff5e1","#c9bfd7",1.8),Ct=new us("#fff1d8",1.65);Ct.position.set(-4,9,6),tt.add(at,Ct);let Lt={supportsRoute:J.supportsRoute,floorClearance:J.clearance},Et=Th(tt,lt,Lt),Tt,$=Et,X=new Map,Q=new Map,ct=new Map,xt=new Map(e.stairs.map(W=>[W.item.id,W]));for(let W of e.placements){let{item:ot,x:C,z:K,baseY:Z,angle:mt,window:bt,mountY:gt,isBlind:It}=W,Dt=ot.type==="window"&&bt?bt:ot,ee=xt.get(ot.id),Ht=ee?VM(ee):Mp(Dt,{window:It?bt:void 0,mountY:gt})??xp(Dt);if(Ht){let ge=Wp(ot,Ht.root);Ht.root.position.set(C,Z+ge,K),Ht.root.rotation.y=-mt,Ht.floorRadius&&(Ht.dockFits=k.clearance(C,K)>=Ht.floorRadius),r.add(Ht.root),Q.set(ot.id,Ht),ot.type==="garageDoor"&&ct.set(Ht.root,ot.id),P.register(ot,Ht)}X.set(ot.id,{x:C,z:K,baseY:Z,rootY:Ht?.root.position.y,object:Ht})}let _t=Hm(e.placements,Q),vt=_t.resolve(),Rt=vt,dt,St={...e.bounds,sceneryMinZ:p.sceneryMinZ};for(let W of e.placements){let ot=Q.get(W.item.id);if(!ot)continue;let C=vt.get(W.item.id);if(C&&(ot.root.position.y=C.y),ot.root.scale.y!==1||C?.supportId){let{max:K}=new ze().setFromObject(ot.root);Number.isFinite(K.y)&&(St.maxY=Math.max(St.maxY??92,K.y))}}let Mt=new G,wt=!1,At=0,Ut=0,Ot=Xi(),Wt,Ft=new fs,j=new Dn(new G(0,1,0),0),Kt=new G,Yt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function B(W,ot){if(wt||W<1||ot<1||W===At&&ot===Ut)return;At=W,Ut=ot;let C=i.ownerDocument.defaultView?.devicePixelRatio||1;s.setPixelRatio(Math.min(C,1.5,Math.sqrt(27e5/(W*ot)))),s.setSize(W,ot,!1),Eh(o,St,W,ot,Ot,Wt)}function T(W,ot){return Ot=Xi(W),Wt=ot,!wt&&At>0&&Ut>0&&Eh(o,St,At,Ut,Ot,Wt),st()}function st(){return{...Ot}}function ut(W){if(typeof W=="string"){if(Object.hasOwn(v,W))return{...v[W]};let ot=X.get(W);if(!ot)return null;let{x:C,z:K,baseY:Z,object:mt}=ot;return mt?{x:C,y:mt.root.position.y+(mt.anchorY??0)*mt.root.scale.y,z:K}:{x:C,y:Z+6,z:K}}return[W?.x,W?.y].every(Number.isFinite)?{x:W.x,y:(lt(W.x,W.y)??0)+22,z:W.y}:null}function pt(W,ot){return wt||!Number.isFinite(W)||!Number.isFinite(ot)||At<=0||Ut<=0?!1:(Ft.setFromCamera(new Nt(W/At*2-1,1-ot/Ut*2),o),!0)}function H(W,ot,C,{preferTabletop:K=!1}={}){if(!pt(W,ot))return null;if(K){let Z=_t.projectTabletop(C,Ft);if(Z)return Z}return j.constant=-ug(C),Ft.ray.intersectPlane(j,Kt)?{x:Kt.x,y:Kt.z}:null}function b(W,ot){if(!ct.size||!pt(W,ot))return null;let C=[];for(let Z of ct.keys())Z.traverseVisible(mt=>{mt.isMesh&&C.push(mt)});let K=Ft.intersectObjects(C,!1)[0];if(!K||Ft.intersectObjects(S,!1).some(Z=>Z.distance<K.distance-.01))return null;for(let Z=K.object;Z;Z=Z.parent)if(ct.has(Z))return ct.get(Z);return null}function M(W=!1){s.render(r,o);let ot=!W&&it.scene.children.length>0;if(!(!$?.hasVisibleTracks&&!ot)){s.autoClear=!1;try{s.clearDepth(),ot&&s.render(it.scene,o),$?.hasVisibleTracks&&s.render(tt,o)}finally{s.autoClear=!0}}}function R(W,ot,C=!1){let K={reduceMotion:ot.reduceMotion===!0,night:ot.night===!0,condition:ot.condition,transientTelemetry:C};L.root.visible=C||ai(n,"sidewalk"),O.root.visible=C||ai(n,"boats"),F.root.visible=C||ai(n,"beachPlay"),L.root.visible&&L.update(W,K),O.root.visible&&O.update(W,K),F.root.visible&&F.update(W,K);let Z=C||ai(n,"trees");for(let mt of A)mt.visible=Z;Z&&x.update(W,ot),U.update(W,C||ai(n,"reflections")?ot:{...ot,reflections:!1})}function D(W=0,ot={},C={},{animateTelemetry:K=!0,showTelemetryPosition:Z=!0,draftPositions:mt,transientTelemetry:bt=!1}={}){if(wt||At<1||Ut<1)return;bt||(C=hl(C,n));let gt=C.reduceMotion===!0,It=!gt&&Number.isFinite(W)?W:0,Dt=K?It:0,ee=bt||ai(n,"traffic");ee&&!y&&C.traffic&&(y=Mm(m),r.add(y.root)),y&&(y.root.visible=ee,ee&&y.update(W,C.traffic,{reduceMotion:gt,night:C.night===!0,transientTelemetry:bt})),z(Dt,bt||ai(n,"precipitation")?C:{}),R(W,C,bt);let Ht=dt!==mt;Ht&&(dt=mt,Rt=mt?_t.resolve(mt):vt);for(let[ye,Se]of Q){let Be=ot[ye]??Yt,De=Be.position,Ge=De&&Number.isFinite(De.x)&&Number.isFinite(De.y)&&(!Se.floorRadius||k.clearance(De.x,De.y)>=Se.floorRadius);Ge&&!bt&&(Se.telemetryPosition=De);let Pt=bt?Ge?De:null:Se.telemetryPosition,Xt=mt?.[ye]?.position??(Z?Pt:null),te=X.get(ye);Se.root.position.x=Xt?.x??te.x,Se.root.position.y=Rt.get(ye)?.y??te.rootY,Se.root.position.z=Xt?.y??te.z,Se.floorRadius&&(Se.root.visible=!!(Xt||!Z||Se.dockFits)),Se.animate?.(Be,Se.ambientMotion?It:Dt,!!(Ge&&Z),bt)}P.update(C,ot,d,Ht);let ge=bt?Tt:Et;$!==ge&&($?.setVisible(!1),bt||Tt?.setTracks([],0),$=ge,$?.setVisible(!0)),$?.render(W,gt),M(bt)}function N(W,ot,C={}){wt||(C.transientTelemetry?(!Tt&&W?.length&&(Tt=Th(tt,lt,Lt),Tt.setVisible(!1)),Tt?.setTracks(W,ot,C)):Et.setTracks(W,ot,C))}function V(W){let ot=X.get(W);if(!ot||At<1||Ut<1)return null;let{x:C,z:K,baseY:Z,object:mt}=ot;if(mt){if(!mt.root.visible)return null;Mt.set(mt.anchorOffset?.x||0,mt.anchorY||0,mt.anchorOffset?.z||0),mt.root.localToWorld(Mt)}else Mt.set(C,Z+6,K);return Mt.project(o),{x:(Mt.x+1)/2,y:(1-Mt.y)/2}}function Y(){if(wt)return;wt=!0,Et.dispose(),Tt?.dispose(),it.dispose(),y?.dispose(),L.dispose(),O.dispose(),F.dispose();let W=new Set,ot=new Set,C=new Set;r.traverse(K=>{K.geometry&&W.add(K.geometry);for(let Z of Array.isArray(K.material)?K.material:[K.material])if(Z){ot.add(Z);for(let mt of Object.values(Z))mt?.isTexture&&C.add(mt)}});for(let K of C)K.dispose();for(let K of W)K.dispose();for(let K of ot)K.dispose();P.dispose(),s.dispose()}return{resize:B,render:D,anchor:V,setView:T,getView:st,getDemoFocus:ut,projectToPlan:H,pickGarage:b,exteriorClearance:()=>ZM(e,o,At,Ut),dispose:Y,hasAmbientMotion:!0,setPeople:N,setDetectionZones:it.setZones,canPlacePerson:(W,ot)=>Number.isFinite(lt(W,ot))&&J.clearance(W,ot)>0,get hasPeopleMotion(){return $?.hasMotion??!1}}}var fg=.35,Hl=7.5,jM=8;function dg(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let y=Xi({...p,...m});(y.azimuth!==p.azimuth||y.tilt!==p.tilt||y.zoom!==p.zoom)&&e(y)}function c(p){i.hasPointerCapture(p)&&i.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!n(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{i.setPointerCapture(p.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function d(p){let m=s.get(p.pointerId);if(!m)return;let y=r();if(!y){l();return}let E=s.size===2,_=E?o():0,v={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,v),p.preventDefault(),E){let w=o();Math.min(_,w)>=jM&&a(y,{zoom:y.zoom*w/_});return}a(y,{azimuth:y.azimuth-(v.x-m.x)*fg,tilt:y.tilt+(v.y-m.y)*fg})}function h(p){s.delete(p.pointerId)&&c(p.pointerId)}function f(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let y=p.deltaMode===1?16:p.deltaMode===2?i.clientHeight:1,E=Math.max(-350,Math.min(350,p.deltaY*y));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-E*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let y;switch(p.key){case"ArrowLeft":y={azimuth:m.azimuth-Hl};break;case"ArrowRight":y={azimuth:m.azimuth+Hl};break;case"ArrowUp":y={tilt:m.tilt-Hl};break;case"ArrowDown":y={tilt:m.tilt+Hl};break;case"+":case"=":y={zoom:m.zoom*1.1};break;case"-":y={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,y)}let x=[["pointerdown",u],["pointermove",d],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",f,{passive:!1}],["keydown",g]];for(let[p,m,y]of x)i.addEventListener(p,m,y);return{cancel:l,dispose(){l();for(let[p,m,y]of x)i.removeEventListener(p,m,y)}}}var WA=1200*1e3,XA=new Map([["s",1/60],["min",1],["h",60]]);var KM="roomcraft.traffic-vehicle-style.v1";function pg(i){try{let t=i.localStorage.getItem(KM);return Ll.some(({id:e})=>e===t)?t:""}catch{return""}}var jA=1200*1e3,KA=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function mg(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],d=u.length>0,h=d?5:3,f,g,x=1/0;for(let m=0;m<=h&&(d||!f);m++)for(let[y,E]of m===0?s.slice(0,1):s.slice(1)){let _=o(a.x+y*m*34,c/2,t-c/2),v=o(a.y+E*m*34,l/2,e-l/2);if(n.some(S=>Math.abs(_-S.x)<(c+S.w)/2+2&&Math.abs(v-S.y)<(l+S.h)/2+2))continue;if(m<=3&&!f&&(f={...a,x:_,y:v,w:c,h:l}),!d)break;if(u.some(S=>_+c/2>S.left&&_-c/2<S.right&&v+l/2>S.top&&v-l/2<S.bottom))continue;let A=Math.hypot(_-a.x,v-a.y);A<x&&(g={...a,x:_,y:v,w:c,h:l},x=A)}let p=g??f;p&&n.push(p)}return n}var _g=Gl(fl(),1),gg="roomcraft-presence-v1",xg=4500,vg=/^sensor\.[a-z0-9_]+$/,QM=4,Qh=1536,tf=1024,tw=[[[0,0],[Qh,0],[Qh,tf],[0,tf],[0,0]]],yg=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],ew=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...yg.map(([i,t])=>[t,i]),...yg.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function bg(i,t){return i>=0&&i<=Qh&&t>=0&&t<=tf}function Sg(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function nw(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function Mg(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!Sg(s))continue;let[r,o,a,c,l,u]=s,d=ew.get(n.presenceTrackProfile),h=Math.hypot(o,l),f=bg(a,u)?{origin:{x:a,y:u},forward:{x:o/h,y:l/h}}:{},g=t.length;for(let[x,p]of[["configured",nw(n.presenceTrackZone)],["nominal",d?.ring]]){if(!p)continue;let m=p.map(([y,E])=>[r*y+o*E+a,c*y+l*E+u]);for(let[y]of _g.default.intersection([m],tw))t.push({id:n.id,kind:x,points:y.slice(0,-1).map(([E,_])=>({x:E,y:_})),...f,...x==="nominal"?{rangeMeters:d.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function iw(i={},t=[]){let e={};for(let n of new Set(t)){if(!vg.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==gg)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,QM):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:gg,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function wg(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!vg.test(o||"")||s.has(o)||!Sg(a))continue;s.add(o);let c=iw(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=xg)continue;let[d,h,f,g,x,p]=a;for(let m of u){let y=d*m.x+h*m.y+f,E=g*m.x+x*m.y+p;bg(y,E)&&n.push({id:o+":"+m.id,x:y,y:E,expiresAt:l+xg})}}return n}var ef=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),Tg=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),Ag=Object.freeze([...ef].map(([i,[t]])=>Object.freeze({id:i,label:i==="lightning-rainy"?"Thunderstorms with rain":t}))),Rg=Object.freeze([...Tg]),Eg=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Cg(i={},t=!1){let{condition:e,daylightKnown:n,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:d,moonElevation:h,windSpeed:f,windBearing:g,cloudCoverage:x}=i;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,m,y]=ef.get(e)||["Weather unavailable","unknown","none"],E=n?s:e==="clear-night",_=n?!s:e==="sunny",v=Number.isFinite(f)&&f>=0?f:void 0,w=Number.isFinite(g)?(g%360+360)%360:void 0,A=w===void 0?"":Eg[Math.round(w/22.5)%Eg.length],S=v===void 0?"":v===0?"Calm wind":`Wind ${A?`from ${A} at `:""}${Math.round(v*10)/10} m/s`;return{label:p,sky:E?"night":_?"day":"unknown",effect:m,cloud:y,moon:E&&Tg.has(r)?r:"",reading:ef.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:v,windBearing:w,windReading:S,cloudCoverage:Number.isFinite(x)&&x>=0&&x<=100?x:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:d,moonElevation:h}}var Dg=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-stars"></span>
    <span class="coastal-orb coastal-sun"></span>
    <span class="coastal-orb coastal-moon"></span>
    <span class="coastal-cloud coastal-cloud-high"></span>
    <span class="coastal-cloud coastal-cloud-left"></span>
    <span class="coastal-cloud coastal-cloud-right"></span>
    <span class="coastal-cloud coastal-cloud-bank"></span>
    <span class="coastal-lightning"></span>
  </div>`,kr=(i,t,e)=>Math.max(t,Math.min(e,i)),Ig=i=>Number.isFinite(i)&&Math.abs(i)<=90,nf=i=>Number.isFinite(i)&&i>=0&&i<=360,Vl=75,Pg=i=>76-58*kr(i/Vl,0,1),Lg=i=>12+76*kr((i-90)/180,0,1),sw=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function rw(i,t){let e=[];for(let[n,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+i*50*Math.sin(a)*n,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var ow=new Map([...sw].map(([i,t])=>[i,rw(...t)]));function aw(i={},t=!1){let e=Cg(i,t),{sky:n,effect:s,cloud:r,moon:o,sunElevation:a,sunRising:c,sunAzimuth:l,moonElevation:u,moonAzimuth:d,windSpeed:h,windBearing:f,cloudCoverage:g}=e,{skyTimeSeconds:x,skyProgress:p,reduceMotion:m=!1}=t?{}:i,y=Ig(a),E=y&&(n==="day"?a<13:n==="night"&&a>-8),_=Number.isFinite(x)&&!m?Math.max(0,x):void 0,v=Number.isFinite(p)&&!m?kr(p,0,1):void 0,w=v===void 0?void 0:Math.sin(v*Math.PI)*Vl,A=v??(_===void 0?void 0:.5-.5*Math.cos(_*Math.PI/480)),S=y?a:w??40,P=kr(S/Vl,0,1),U=c===!0?19:c===!1?81:54,L=nf(l)?Lg(l):v===void 0?U+(50-U)*P:17+66*v,O=nf(d)?Lg(d):A===void 0?55:18+64*A,F=A===void 0?38:Math.sin(A*Math.PI)*Vl,z=Pg(Ig(u)?u:F),q=!t&&!m&&!nf(d)&&v===void 0&&_===void 0?"ambient":"fixed",k=f===void 0?void 0:f*Math.PI/180,J=k===void 0?9:-Math.sin(k)*12,lt=k===void 0?-2:Math.cos(k)*4,tt=h===void 0?s==="wind"||s==="wind-clouds"?2.5:1:h===0?0:kr(h*.25,.32,4.8),it=g===void 0?1:kr(g/52,0,1);return{sky:n,effect:s,cloud:r,moon:o,light:E?"twilight":"regular",clock:_,reduceMotion:m,moonMotion:q,sunX:L,sunY:Pg(S),moonX:O,moonY:z,moonOutline:ow.get(o)||"circle(50%)",windX:J,windY:lt,cloudSpeed:tt,cloudOpacity:it}}function Ug(i,t,e=!1){let n=aw(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:d,cloudSpeed:h,cloudOpacity:f}=n,g={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(h===0),skyReduced:String(d)};for(let[p,m]of Object.entries(g))i.dataset[p]!==m&&(i.dataset[p]=m);let x={"--coastal-sun-x":`${n.sunX.toFixed(2)}%`,"--coastal-sun-y":`${n.sunY.toFixed(2)}%`,"--coastal-moon-x":`${n.moonX.toFixed(2)}%`,"--coastal-moon-y":`${n.moonY.toFixed(2)}%`,"--coastal-moon-outline":n.moonOutline,"--coastal-wind-x":`${n.windX.toFixed(3)}vw`,"--coastal-wind-y":`${n.windY.toFixed(3)}px`,"--coastal-wind-speed":String(h||1),"--coastal-cloud-cover":String(f),"--coastal-clock":`${(u??0).toFixed(3)}s`};for(let[p,m]of Object.entries(x))i.style.getPropertyValue(p)!==m&&i.style.setProperty(p,m)}var Ng=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,Fg=`
  .coastal-sky {
    position:relative; isolation:isolate; overflow:hidden; pointer-events:none;
    box-sizing:border-box; height:clamp(54px,7dvh,72px); width:100%;
    border-bottom:3px solid var(--coastal-seam);
    background:linear-gradient(180deg,var(--coastal-top),var(--coastal-mid) 62%,var(--coastal-low));
    --coastal-top:#7c99ab; --coastal-mid:#abc0c8; --coastal-low:#d2dad7;
    --coastal-seam:#426b80; --coastal-cloud-top:#f9f6ea; --coastal-cloud-bottom:#c5d1d6;
    --coastal-orb-size:clamp(27px,4.1dvh,42px);
  }
  .coastal-sky[data-sky=day] {
    --coastal-top:#5b9bc2; --coastal-mid:#a0c8dc; --coastal-low:#d1e1e6;
  }
  .coastal-sky[hidden] {display:none}
  .coastal-sky[data-sky=night] {
    --coastal-top:#142843; --coastal-mid:#293e5b; --coastal-low:#526980;
    --coastal-seam:#839aab; --coastal-cloud-top:#a2b2cb; --coastal-cloud-bottom:#4a5f7e;
  }
  .coastal-sky[data-light=twilight][data-sky=day] {
    --coastal-top:#7399b8; --coastal-mid:#b7beca; --coastal-low:#edc9aa;
    --coastal-seam:#82645e; --coastal-cloud-top:#fff0da; --coastal-cloud-bottom:#d4b9b6;
  }
  .coastal-sky[data-light=twilight][data-sky=night] {
    --coastal-top:#263c5b; --coastal-mid:#677a94; --coastal-low:#cd9d94;
    --coastal-seam:#756b79;
  }
  .coastal-sky[data-sky=day]:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) {
    --coastal-top:#779caf; --coastal-mid:#a3bac4; --coastal-low:#c9d5d3;
    --coastal-seam:#526e7b; --coastal-cloud-top:#eef1ee; --coastal-cloud-bottom:#adbfca;
  }
  .coastal-sky[data-sky=day]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-top:#506b85; --coastal-mid:#8299ab; --coastal-low:#a2b4bb;
    --coastal-seam:#3d596d; --coastal-cloud-top:#c8d3dc; --coastal-cloud-bottom:#8a9eb0;
  }
  .coastal-sky[data-sky=night]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-top:#233550; --coastal-mid:#3b4c65; --coastal-low:#617184;
    --coastal-seam:#9aabb5; --coastal-cloud-top:#97a9bb; --coastal-cloud-bottom:#546880;
  }
  .coastal-stars {
    display:none; position:absolute; inset:0; opacity:.68;
    background:
      radial-gradient(circle at 7% 31%,#dce8ef 0 .6px,transparent 1.4px),
      radial-gradient(circle at 14% 17%,#fff0cc 0 1px,transparent 1.6px),
      radial-gradient(circle at 24% 38%,#dce8ef 0 .6px,transparent 1.3px),
      radial-gradient(circle at 34% 15%,#fff0cc 0 .7px,transparent 1.4px),
      radial-gradient(circle at 44% 51%,#dce8ef 0 .6px,transparent 1.3px),
      radial-gradient(circle at 49% 19%,#fff0cc 0 1px,transparent 1.6px),
      radial-gradient(circle at 74% 24%,#dce8ef 0 .6px,transparent 1.4px),
      radial-gradient(circle at 87% 36%,#fff0cc 0 .7px,transparent 1.4px),
      radial-gradient(circle at 94% 16%,#dce8ef 0 .75px,transparent 1.4px);
  }
  .coastal-sky[data-sky=night]:not([data-light=twilight]) .coastal-stars {display:block}
  .coastal-orb {
    display:none; position:absolute; border-radius:50%;
    width:var(--coastal-orb-size); aspect-ratio:1; translate:-50% -50%;
    transition:left 1.3s ease,top 1.3s ease;
  }
  .coastal-sky[data-sky=day] .coastal-sun {
    display:block; left:var(--coastal-sun-x,52%);
    top:clamp(calc(var(--coastal-orb-size) / 2 + 3px),var(--coastal-sun-y,43%),calc(100% - var(--coastal-orb-size) / 2 - 3px));
    background:radial-gradient(circle at 38% 31%,#fff8d4,#fadd96 88%);
    box-shadow:0 0 9px 3px #fff0bb91,0 0 23px 7px #ffdd9266;
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
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) .coastal-orb {opacity:.48}
  .coastal-sky:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) .coastal-orb {opacity:.17}
  .coastal-cloud {
    position:absolute; top:var(--cloud-y); left:var(--cloud-x); width:var(--cloud-width); height:var(--cloud-height);
    opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1));
    background:linear-gradient(180deg,var(--coastal-cloud-top),var(--coastal-cloud-bottom) 95%);
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
  .coastal-sky[data-sky-clock=sample] .coastal-orb {transition:none}
  .coastal-sky[data-sky-clock=sample] .coastal-lightning {animation:none;opacity:.85}
  .coastal-sky[data-wind-calm=true] .coastal-cloud {animation:none}
  @keyframes coastal-drift ${Ng}
  @keyframes coastal-sampled-drift ${Ng}
  @keyframes coastal-distant-lightning {0%,74%,87%,100%{opacity:0}80%{opacity:.69}}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky :is(.coastal-cloud,.coastal-orb,.coastal-lightning),
  .coastal-sky[data-sky-reduced=true] :is(.coastal-cloud,.coastal-orb,.coastal-lightning) {animation:none;transition:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-lightning,
  .coastal-sky[data-sky-reduced=true] .coastal-lightning {opacity:.66}
  @media (prefers-reduced-motion:reduce) {
    .coastal-sky :is(.coastal-cloud,.coastal-orb,.coastal-lightning) {animation:none;transition:none}
    .coastal-lightning {opacity:.66}
  }
  @media (max-height:600px) and (orientation:landscape) {
    .coastal-sky {height:clamp(38px,8.5dvh,48px);--coastal-orb-size:25px}
  }
`;var cw=2500,sf=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),Og={day:[40,160],dusk:[5,265],night:[-16,290]},lw=i=>i.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function uw({condition:i,daylight:t,moonPhase:e,windSpeed:n,windBearing:s}){let r=i==="clear-night"||t==="night",[o,a]=Og[r?"night":t]??Og.day;return{...sf,condition:i,night:r,sunElevation:o,sunAzimuth:a,moonPhase:e,windSpeed:n,windBearing:s}}function Bg(i,t,{api:e,viewport:n,bridge:s,onChange:r}){let o=i.getElementById("sceneSettingsDialog"),a=i.getElementById("sceneSettingsButton"),c=i.getElementById("sceneFeatures"),l=i.getElementById("sceneDockAlignment"),u=i.getElementById("scenePreviewMode"),d=i.getElementById("scenePreviewMotion"),h=i.getElementById("scenePreviewSource"),f=i.getElementById("scenePreviewWeather"),g=i.createElement("style");g.textContent=Fg,i.head.append(g);let x=i.createElement("template");x.innerHTML=Dg.trim();let p=x.content.firstElementChild;p.hidden=!0,n.before(p);try{d.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let m=hp.map(({key:Et,label:Tt})=>{let $=i.createElement("label");$.className="scene-feature";let X=i.createElement("input");return X.type="checkbox",X.addEventListener("change",()=>e.setSceneSetting(Et,X.checked)),$.append(X,Tt),c.append($),{key:Et,input:X}});function y(Et,Tt){let $=i.createElement("label");return $.textContent=Et,$.append(Tt),f.append($),Tt.addEventListener("change",r),Tt}function E(Et,Tt,$){let X=i.createElement("select");return X.replaceChildren(...Tt.map(([Q,ct])=>new t.Option(ct,Q))),X.value=$,y(Et,X)}function _(Et,Tt,$,X,Q){let ct=i.createElement("input");return Object.assign(ct,{type:"number",min:Tt,max:$,step:X,value:Q}),y(Et,ct)}let v=E("Weather",Ag.map(({id:Et,label:Tt})=>[Et,Tt]),"sunny"),w=E("Time of day",[["day","Day"],["dusk","Dusk"],["night","Night"]],"day"),A=E("Moon phase",Rg.map(Et=>[Et,lw(Et)]),"full_moon"),S=_("Wind speed (m/s)",0,30,1,4),P=_("Wind from (degrees)",0,360,1,270),U,L,O=!1,F=!1,z=!1,q,k=!1,J=()=>{o.open||o.showModal()},lt=()=>e.setSceneSetting("dockAlignment",l.value),tt=()=>{f.hidden=u.value!=="custom",Lt(),r()};a.addEventListener("click",J),l.addEventListener("change",lt),u.addEventListener("change",tt),d.addEventListener("change",r);function it(){return u.value!=="custom"}function at(){let Et=F?it()?k?"Live appearance from Home Assistant.":U||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";h.textContent!==Et&&(h.textContent=Et)}async function Ct(){if(!F||!it()||!s||O||z)return;O=!0;let Et=!1;try{let Tt=await s.request("LOOK_GET");if(z)return;if(Et=k!==!!Tt?.environment,k=!!Tt?.environment,k){let $=JSON.stringify(Tt);$!==L&&(U=Tt,L=$,Et=!0)}}catch{Et=k,k=!1}finally{O=!1,!z&&F&&it()&&Et&&r()}}function Lt(){F&&it()&&s&&!i.hidden?q===void 0&&(q=t.setInterval(Ct,cw),Ct()):q!==void 0&&(t.clearInterval(q),q=void 0)}return i.addEventListener("visibilitychange",Lt),{open:J,motionEnabled:()=>d.checked,sync(Et,Tt,$=!1){F=Et,Lt();for(let{key:xt,input:_t}of m)_t.checked=ai(Tt,xt);l.value=fp(Tt),at();let X=U??e.getPreview?.(),Q=it()?X?.environment??sf:uw({condition:v.value,daylight:w.value,moonPhase:A.value,windSpeed:Math.min(30,Math.max(0,S.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,P.valueAsNumber||0))}),ct={...Q,traffic:{...Q.traffic??sf.traffic,vehicleStyle:pg(t)}};return p.hidden=!F||!ai(Tt,"sky"),p.hidden||Ug(p,{...hl(ct,Tt),reduceMotion:$}),{states:X?.states??{},environment:ct}},dispose(){z=!0,F=!1,Lt(),i.removeEventListener("visibilitychange",Lt),a.removeEventListener("click",J),l.removeEventListener("change",lt),u.removeEventListener("change",tt),d.removeEventListener("change",r),o.close();for(let{input:Et}of m)Et.parentElement.remove();f.replaceChildren(),p.remove(),g.remove()}}}var hw=22,fw=5,dw=1e3/12,pw=1e3,mw=12;function gw(i,t,e){let n=mg(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let d=a/2;d<=e-a/2;d+=a+4)c.push({...r,x:u,y:d,w:o,h:a});c.sort((u,d)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(d.x-r.x,d.y-r.y));let l=c.find(u=>n.every(d=>Math.abs(u.x-d.x)>=(u.w+d.w)/2+2||Math.abs(u.y-d.y)>=(u.h+d.h)/2+2));l&&n.push(l)}return n}function xw(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function yw(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),d=u<=hw;return!d&&(a.type==="garageDoor"||!xw(a,e))?[]:[{item:a,index:c,distance:u,near:d,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function _w(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;zp(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),d=i.getElementById("sceneDefaultStatus"),h=Gp(t),f=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=Bg(i,t,{api:e,viewport:s,bridge:g,onChange:()=>{Kt(F?.item&&F.position?{[F.item.id]:{position:F.position}}:void 0)}}),p=i.createElement("div");p.className="scene-selection",p.setAttribute("aria-hidden","true"),Object.assign(p.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(p);let m=i.createElement("div");m.className="scene-placeholders",Object.assign(m.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(m);let y=i.createElementNS("http://www.w3.org/2000/svg","svg");y.classList.add("scene-placeholder-leaders"),y.setAttribute("aria-hidden","true"),Object.assign(y.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(y,m);let E=new Map,_=i.getElementById("miniHelp"),v=_?.textContent,w=n.getAttribute("aria-label")??"Editable three-dimensional home view",A,S,P,U=wh(null),L=r.value,O="default",F,z,q,k=-1/0,J=0,lt,tt=!1,it=!1,at=null,Ct=!1,Lt=[],Et=[],Tt="",$=0,X,Q=!1,ct={},xt={key:"",scene:null,reduceMotion:!1},_t={id:null,scene:null},vt=()=>L!=="plan",Rt=()=>L==="free",dt=()=>f?.matches===!0||!x.motionEnabled(),St=()=>n.getBoundingClientRect(),Mt=Pt=>{let Xt=St();return{x:Pt.clientX-Xt.left,y:Pt.clientY-Xt.top}};function wt(Pt){e.showStatus?.(Pt)}function At(){if(!(!tt&&(A?.hasAmbientMotion||A?.hasPeopleMotion)&&vt()&&!i.hidden&&!dt())){t.cancelAnimationFrame(q),q=void 0;return}q===void 0&&(q=t.requestAnimationFrame(Xt=>{if(q=void 0,Xt-k>=dw-1){k=Xt,J=Xt/1e3;try{lt&&A.render(J,...lt)}catch{H()}}At()}))}function Ut(Pt=!0){let Xt=vt()?A:null,te=dt(),ie=Ot()?wg(Lt,ct):[],Ce=JSON.stringify(ie);Ce===xt.key&&Xt===xt.scene&&te===xt.reduceMotion||(xt={key:Ce,scene:Xt,reduceMotion:te},Xt&&(Xt.setPeople(ie,(t.performance?.now()??0)/1e3,{reduceMotion:te}),Pt&&Kt()),e.setPersonPreview?.(Xt?[]:ie))}function Ot(){return!!(g?.request&&Et.length&&!tt&&!i.hidden)}async function Wt(Pt=!0){if(Pt&&Ut(),Q||!Ot())return;Q=!0;let Xt=$;try{let te=await g.request("TRACK_GET",Et);Xt===$&&Ot()&&(ct=te&&typeof te=="object"?te:{},Ut())}catch{Xt===$&&(ct={},Ut())}finally{Q=!1}}function Ft(){Ot()?X===void 0&&(X=t.setInterval(Wt,pw),Wt(!1)):X!==void 0&&(t.clearInterval(X),X=void 0,$++,ct={})}function j(Pt){Lt=Pt.filter(ie=>ie.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ie.presenceTrackEntityId)&&Array.isArray(ie.presenceTrackTransform));let Xt=[...new Set(Lt.map(ie=>ie.presenceTrackEntityId))].slice(0,mw),te=Xt.join(",");te!==Tt&&(Tt=te,Et=Xt,$++,ct={}),Ft()}function Kt(Pt){if(At(),!A||!vt())return;let{width:Xt,height:te}=St();if(!Xt||!te)return;A.resize(Xt,te);let ie=e.getSelection(),Ce=ie?.kind==="item"?ie.id:null;if(_t.scene!==A||_t.id!==Ce){let Ke=S.items.find(Tn=>Tn.id===Ce);A.setDetectionZones(Ke?Mg([Ke]):[]),_t={id:Ce,scene:A}}let Vn=dt(),hi=x.sync(!0,S.sceneSettings,Vn),Gn=Object.create(null);for(let Ke of S.items){let Tn=hi.states[Ke.id];Tn&&Tn.entityId===Ke.entityId&&(Gn[Ke.id]=Tn)}if(lt=[Gn,{...hi.environment,reduceMotion:Vn},{showTelemetryPosition:!1,draftPositions:Pt}],A.render(J,...lt),Rt())return;let Li=[];for(let[Ke,Tn]of E){let fi=A.anchor(Ke);if(Tn.hidden=!fi,fi){let Ni=S.items.find(nt=>nt.id===Ke),I=Ni?.type==="cameraThumbnail"?Vp(Ni,Xt):{w:96,h:44};Li.push({id:Ke,marker:Tn,x:fi.x*Xt,y:fi.y*te,...I})}}let hn=gw(Li,Xt,te),na=new Set(hn.map(Ke=>Ke.id)),zr=[];for(let Ke of hn){let{marker:Tn,x:fi,y:Ni,w:I,h:nt,id:yt}=Ke;Object.assign(Tn.style,{left:`${fi}px`,top:`${Ni}px`,width:`${I}px`,height:`${nt}px`});let ft=Li.find(ht=>ht.id===yt);if(Math.hypot(ft.x-fi,ft.y-Ni)>8){let ht=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[kt,Vt]of Object.entries({x1:ft.x,y1:ft.y,x2:fi,y2:Ni}))ht.setAttribute(kt,Vt);ht.setAttribute("stroke","#6f816b"),ht.setAttribute("stroke-width","1"),ht.setAttribute("stroke-dasharray","3 3"),zr.push(ht)}}for(let[Ke,Tn]of E)Tn.hidden=!na.has(Ke);y.replaceChildren(...zr);let Vs=ie?.kind==="item"?A.anchor(ie.id):null;p.style.display=Vs?"block":"none",Vs&&(p.style.left=`${Vs.x*Xt}px`,p.style.top=`${Vs.y*te}px`)}function Yt(){if(!F)return;let Pt=F;F=void 0;try{n.releasePointerCapture(Pt.pointerId)}catch{}Pt.item&&Kt({[Pt.item.id]:{position:{x:Pt.item.x,y:Pt.item.y}}})}function B(){a&&(a.hidden=!vt());for(let Pt of Object.values(o))Pt&&(Pt.disabled=!vt());l&&(l.hidden=!A||!Rt(),l.disabled=Ct),u&&(u.hidden=!A||!vt()||!at,u.disabled=Ct)}function T(Pt){d&&(d.textContent=Pt)}function st(){it=!0,T("")}function ut(){n.tabIndex=Rt()?0:-1,n.style.cursor=Rt()?"grab":"",n.setAttribute("aria-label",Rt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":w)}function pt(Pt,{initial:Xt=!1}={}){Xt||(st(),Pt==="default"&&(it=!1)),Y.cancel(),Yt();let te=A?.getView()??U,ie=Object.hasOwn(Dr,Pt)?Pt:"plan";ie!=="plan"&&e.useSelectTool?.(),L=ie,vt()&&!Rt()&&(O=L),r.value=L,n.hidden=!vt(),ut();let Ce=vt()&&!Rt();if(m.style.display=Ce?"block":"none",y.style.display=Ce?"block":"none",Ce||(p.style.display="none"),_&&(Rt()?_.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":_.textContent=vt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":v),s.classList.toggle("scene-3d",vt()),B(),!vt()){b(),At(),x.sync(!1,e.getProject().sceneSettings),wt("Plan view \xB7 edit rooms, walls, floors and objects");return}let Vn=L==="default"?wh(at):Rt()?Hp(te):{preset:L};U=A?A.setView(Vn):Vn,b(),A&&wt(Rt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function H(){Y.cancel(),A?.dispose(),A=void 0,P=void 0,L="plan",At(),r.value=L,n.hidden=!0,x.sync(!1,e.getProject().sceneSettings),ut(),m.style.display="none",y.style.display="none",_&&(_.textContent=v),s.classList.remove("scene-3d"),p.style.display="none",B(),Ut(!1),wt("3D view is unavailable on this screen. Plan view is ready.")}function b(){if(tt)return;let Pt=e.getProject();if(j(Pt.items),!vt()){x.sync(!1,Pt.sceneSettings),Ut();return}let Xt=JSON.stringify(Pt);try{if(!A||Xt!==P){Yt(),A&&(U=A.getView()),A?.dispose(),A=void 0,S=Pt,A=hg(n,S),A.setView(U),P=Xt,E.clear(),m.replaceChildren();for(let te of S.items.filter(ie=>ie.type==="cameraThumbnail"||ie.type.startsWith("ui"))){let ie=i.createElement("button");ie.type="button",ie.className="scene-placeholder",ie.textContent=te.name||(te.type==="cameraThumbnail"?"Camera":"Interface"),ie.setAttribute("aria-label",`Select ${ie.textContent}`),Object.assign(ie.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ie.addEventListener("pointerdown",Ce=>rt(Ce,te.id)),ie.addEventListener("click",Ce=>{!Rt()&&Ce.detail===0&&(e.selectItem(te.id),Kt())}),E.set(te.id,ie),m.append(ie)}}B(),Ut(!1),Kt()}catch{H()}}function M(Pt){!A||!vt()||(st(),Yt(),A.setView(Pt(A.getView())),U=A.getView(),Kt())}let R=()=>b(),D=()=>{let Pt=e.getTool();vt()&&Pt!=="select"?pt("plan"):Rt()&&e.hasPlacement()?pt(O):vt()&&Kt()},N=()=>pt(r.value),V=()=>{t.cancelAnimationFrame(z),z=t.requestAnimationFrame(()=>Kt())},Y=dg(n,{getView:()=>Rt()?A?.getView():null,onChange:Pt=>{!A||!Rt()||(st(),U=A.setView(Pt),V())}}),rt=(Pt,Xt=null)=>{if(!vt()||Rt()||!A||Pt.button!==0||F)return;Pt.preventDefault(),Pt.stopPropagation();let te=Mt(Pt);if(e.hasPlacement()){let hn=A.projectToPlan(te.x,te.y,e.getPlacementType(),{preferTabletop:!0});hn&&e.placeAt(hn.x,hn.y),b();return}let{width:ie,height:Ce}=St(),Vn=new Map(S.items.map(hn=>[hn.id,A.anchor(hn.id)])),hi=Xt??A.pickGarage(te.x,te.y),Gn=hi?S.items.find(hn=>hn.id===hi):yw(S.items,te,A.projectToPlan(te.x,te.y),Vn,ie,Ce);if(e.selectItem(Gn?.id??null),!Gn){Kt();return}let Li=A.projectToPlan(te.x,te.y,Gn.type);Li&&(F={item:{...Gn},startScreen:te,startPlan:Li,pointerId:Pt.pointerId},n.setPointerCapture(Pt.pointerId),Kt())},W=Pt=>{if(!vt()||Rt()||(Pt.stopPropagation(),!F||F.pointerId!==Pt.pointerId||!A))return;let Xt=Mt(Pt);if(!F.moved&&Math.hypot(Xt.x-F.startScreen.x,Xt.y-F.startScreen.y)<fw)return;let te=A.projectToPlan(Xt.x,Xt.y,F.item.type);if(!te)return;F.moved=!0;let ie={x:F.item.x+te.x-F.startPlan.x,y:F.item.y+te.y-F.startPlan.y},Ce=e.moveItemWarning?.(F.item.id,ie.x,ie.y);if(Ce){Ce!==F.warning&&wt(Ce),F.warning=Ce;return}F.warning&&wt(`Moving ${F.item.name||"object"}`),F.warning=void 0,F.position=ie,Kt({[F.item.id]:{position:F.position}})},ot=Pt=>{if(!vt()||Rt()||(Pt.stopPropagation(),!F||F.pointerId!==Pt.pointerId))return;let Xt=F;F=void 0;try{n.releasePointerCapture(Pt.pointerId)}catch{}Xt.moved&&Xt.position?(e.moveItem(Xt.item.id,Xt.position.x,Xt.position.y),b()):Kt()},C=Pt=>{Rt()||(F?.pointerId===Pt.pointerId&&Yt(),Pt.stopPropagation())},K=Pt=>{!vt()||Rt()||(Pt.preventDefault(),Pt.stopPropagation(),M(Xt=>({...Xt,zoom:Xt.zoom*(Pt.deltaY<0?1.1:1/1.1)})))},Z=Pt=>{Rt()&&Pt.target===n&&(Pt.key==="Delete"||Pt.key==="Backspace")&&(Pt.preventDefault(),Pt.stopImmediatePropagation()),Pt.key==="Escape"&&F&&(Pt.preventDefault(),Pt.stopImmediatePropagation(),Yt())},mt=Pt=>{Pt.preventDefault(),H()},bt=()=>M(Pt=>({...Pt,azimuth:Pt.azimuth-15})),gt=()=>M(Pt=>({...Pt,azimuth:Pt.azimuth+15})),It=()=>M(Pt=>({...Pt,zoom:Pt.zoom/1.2})),Dt=()=>M(Pt=>({...Pt,zoom:Pt.zoom*1.2})),ee=()=>pt("top"),Ht=()=>{Ut(!1),Kt()},ge=()=>{Ft(),Ut(),At()};i.addEventListener("visibilitychange",ge),f?.addEventListener("change",Ht);async function ye(){Ct=!0,B();try{at=await h.read(),!tt&&!it&&pt("default",{initial:!0})}catch{tt||T("Saved view unavailable")}finally{Ct=!1,tt||B()}}async function Se(Pt){if(!(!A||!vt()||Ct)){Ct=!0,T("Saving view\u2026"),B();try{if(await h.write(Pt),tt)return;at=Pt,Pt||pt("default"),T(Pt?"Default view saved":"Top down is the default")}catch{tt||T("Could not save default view")}finally{Ct=!1,tt||B()}}}let Be=()=>{Rt()&&A&&Se(A.getView())},De=()=>Se(null);o.left?.addEventListener("click",bt),o.right?.addEventListener("click",gt),o.out?.addEventListener("click",It),o.in?.addEventListener("click",Dt),c?.addEventListener("click",ee),l?.addEventListener("click",Be),u?.addEventListener("click",De),r.addEventListener("change",N),n.addEventListener("pointerdown",rt),n.addEventListener("pointermove",W),n.addEventListener("pointerup",ot),n.addEventListener("pointercancel",C),n.addEventListener("lostpointercapture",C),n.addEventListener("wheel",K,{passive:!1}),n.addEventListener("webglcontextlost",mt),t.addEventListener("keydown",Z,!0),t.addEventListener("roomcraft-editor-change",R),t.addEventListener("roomcraft-editor-tool",D);let Ge=new t.ResizeObserver(V);Ge.observe(s),pt(L,{initial:!0});try{(t.location.hash==="#scene-settings"||g&&t.parent.location.hash==="#scene-settings")&&x.open()}catch{}return ye(),{getView:()=>A?.getView()??{...U},setView:pt,dispose(){tt=!0,At(),Ft(),i.removeEventListener("visibilitychange",ge),f?.removeEventListener("change",Ht),Yt(),Y.dispose(),L="plan",ut(),Ge.disconnect(),t.cancelAnimationFrame(z),A?.dispose(),A=void 0,p.remove(),m.remove(),y.remove(),x.dispose(),_&&(_.textContent=v),o.left?.removeEventListener("click",bt),o.right?.removeEventListener("click",gt),o.out?.removeEventListener("click",It),o.in?.removeEventListener("click",Dt),c?.removeEventListener("click",ee),l?.removeEventListener("click",Be),u?.removeEventListener("click",De),r.removeEventListener("change",N),n.removeEventListener("pointerdown",rt),n.removeEventListener("pointermove",W),n.removeEventListener("pointerup",ot),n.removeEventListener("pointercancel",C),n.removeEventListener("lostpointercapture",C),n.removeEventListener("wheel",K),n.removeEventListener("webglcontextlost",mt),t.removeEventListener("keydown",Z,!0),t.removeEventListener("roomcraft-editor-change",R),t.removeEventListener("roomcraft-editor-tool",D)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=jh,_w(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
