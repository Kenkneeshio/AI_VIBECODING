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
"use strict";(()=>{var qg=Object.create;var gf=Object.defineProperty;var Zg=Object.getOwnPropertyDescriptor;var $g=Object.getOwnPropertyNames;var Jg=Object.getPrototypeOf,jg=Object.prototype.hasOwnProperty;var Kg=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var Qg=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of $g(t))!jg.call(i,s)&&s!==e&&gf(i,s,{get:()=>t[s],enumerable:!(n=Zg(t,s))||n.enumerable});return i};var tu=(i,t,e)=>(e=i!=null?qg(Jg(i)):{},Qg(t||!i||!i.__esModule?gf(e,"default",{value:i,enumerable:!0}):e,i));var vl=Kg((Rh,Ch)=>{(function(i,t){typeof Rh=="object"&&typeof Ch<"u"?Ch.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(Rh,(function(){"use strict";/**
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
    ***************************************************************************** */function i(k,M){var w={label:0,sent:function(){if(N[0]&1)throw N[1];return N[1]},trys:[],ops:[]},R,D,N,V;return V={next:Y(0),throw:Y(1),return:Y(2)},typeof Symbol=="function"&&(V[Symbol.iterator]=function(){return this}),V;function Y(W){return function(ot){return rt([W,ot])}}function rt(W){if(R)throw new TypeError("Generator is already executing.");for(;w;)try{if(R=1,D&&(N=W[0]&2?D.return:W[0]?D.throw||((N=D.return)&&N.call(D),0):D.next)&&!(N=N.call(D,W[1])).done)return N;switch(D=0,N&&(W=[W[0]&2,N.value]),W[0]){case 0:case 1:N=W;break;case 4:return w.label++,{value:W[1],done:!1};case 5:w.label++,D=W[1],W=[0];continue;case 7:W=w.ops.pop(),w.trys.pop();continue;default:if(N=w.trys,!(N=N.length>0&&N[N.length-1])&&(W[0]===6||W[0]===2)){w=0;continue}if(W[0]===3&&(!N||W[1]>N[0]&&W[1]<N[3])){w.label=W[1];break}if(W[0]===6&&w.label<N[1]){w.label=N[1],N=W;break}if(N&&w.label<N[2]){w.label=N[2],w.ops.push(W);break}N[2]&&w.ops.pop(),w.trys.pop();continue}W=M.call(k,w)}catch(ot){W=[6,ot],D=0}finally{R=N=0}if(W[0]&5)throw W[1];return{value:W[0]?W[1]:void 0,done:!0}}}var t=(function(){function k(M,w){this.next=null,this.key=M,this.data=w,this.left=null,this.right=null}return k})();function e(k,M){return k>M?1:k<M?-1:0}function n(k,M,w){for(var R=new t(null,null),D=R,N=R;;){var V=w(k,M.key);if(V<0){if(M.left===null)break;if(w(k,M.left.key)<0){var Y=M.left;if(M.left=Y.right,Y.right=M,M=Y,M.left===null)break}N.left=M,N=M,M=M.left}else if(V>0){if(M.right===null)break;if(w(k,M.right.key)>0){var Y=M.right;if(M.right=Y.left,Y.left=M,M=Y,M.right===null)break}D.right=M,D=M,M=M.right}else break}return D.right=M.left,N.left=M.right,M.left=R.right,M.right=R.left,M}function s(k,M,w,R){var D=new t(k,M);if(w===null)return D.left=D.right=null,D;w=n(k,w,R);var N=R(k,w.key);return N<0?(D.left=w.left,D.right=w,w.left=null):N>=0&&(D.right=w.right,D.left=w,w.right=null),D}function r(k,M,w){var R=null,D=null;if(M){M=n(k,M,w);var N=w(M.key,k);N===0?(R=M.left,D=M.right):N<0?(D=M.right,M.right=null,R=M):(R=M.left,M.left=null,D=M)}return{left:R,right:D}}function o(k,M,w){return M===null?k:(k===null||(M=n(k.key,M,w),M.left=k),M)}function a(k,M,w,R,D){if(k){R(""+M+(w?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+D(k)+`
`);var N=M+(w?"    ":"\u2502   ");k.left&&a(k.left,N,!1,R,D),k.right&&a(k.right,N,!0,R,D)}}var c=(function(){function k(M){M===void 0&&(M=e),this._root=null,this._size=0,this._comparator=M}return k.prototype.insert=function(M,w){return this._size++,this._root=s(M,w,this._root,this._comparator)},k.prototype.add=function(M,w){var R=new t(M,w);this._root===null&&(R.left=R.right=null,this._size++,this._root=R);var D=this._comparator,N=n(M,this._root,D),V=D(M,N.key);return V===0?this._root=N:(V<0?(R.left=N.left,R.right=N,N.left=null):V>0&&(R.right=N.right,R.left=N,N.right=null),this._size++,this._root=R),this._root},k.prototype.remove=function(M){this._root=this._remove(M,this._root,this._comparator)},k.prototype._remove=function(M,w,R){var D;if(w===null)return null;w=n(M,w,R);var N=R(M,w.key);return N===0?(w.left===null?D=w.right:(D=n(M,w.left,R),D.right=w.right),this._size--,D):w},k.prototype.pop=function(){var M=this._root;if(M){for(;M.left;)M=M.left;return this._root=n(M.key,this._root,this._comparator),this._root=this._remove(M.key,this._root,this._comparator),{key:M.key,data:M.data}}return null},k.prototype.findStatic=function(M){for(var w=this._root,R=this._comparator;w;){var D=R(M,w.key);if(D===0)return w;D<0?w=w.left:w=w.right}return null},k.prototype.find=function(M){return this._root&&(this._root=n(M,this._root,this._comparator),this._comparator(M,this._root.key)!==0)?null:this._root},k.prototype.contains=function(M){for(var w=this._root,R=this._comparator;w;){var D=R(M,w.key);if(D===0)return!0;D<0?w=w.left:w=w.right}return!1},k.prototype.forEach=function(M,w){for(var R=this._root,D=[],N=!1;!N;)R!==null?(D.push(R),R=R.left):D.length!==0?(R=D.pop(),M.call(w,R),R=R.right):N=!0;return this},k.prototype.range=function(M,w,R,D){for(var N=[],V=this._comparator,Y=this._root,rt;N.length!==0||Y;)if(Y)N.push(Y),Y=Y.left;else{if(Y=N.pop(),rt=V(Y.key,w),rt>0)break;if(V(Y.key,M)>=0&&R.call(D,Y))return this;Y=Y.right}return this},k.prototype.keys=function(){var M=[];return this.forEach(function(w){var R=w.key;return M.push(R)}),M},k.prototype.values=function(){var M=[];return this.forEach(function(w){var R=w.data;return M.push(R)}),M},k.prototype.min=function(){return this._root?this.minNode(this._root).key:null},k.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},k.prototype.minNode=function(M){if(M===void 0&&(M=this._root),M)for(;M.left;)M=M.left;return M},k.prototype.maxNode=function(M){if(M===void 0&&(M=this._root),M)for(;M.right;)M=M.right;return M},k.prototype.at=function(M){for(var w=this._root,R=!1,D=0,N=[];!R;)if(w)N.push(w),w=w.left;else if(N.length>0){if(w=N.pop(),D===M)return w;D++,w=w.right}else R=!0;return null},k.prototype.next=function(M){var w=this._root,R=null;if(M.right){for(R=M.right;R.left;)R=R.left;return R}for(var D=this._comparator;w;){var N=D(M.key,w.key);if(N===0)break;N<0?(R=w,w=w.left):w=w.right}return R},k.prototype.prev=function(M){var w=this._root,R=null;if(M.left!==null){for(R=M.left;R.right;)R=R.right;return R}for(var D=this._comparator;w;){var N=D(M.key,w.key);if(N===0)break;N<0?w=w.left:(R=w,w=w.right)}return R},k.prototype.clear=function(){return this._root=null,this._size=0,this},k.prototype.toList=function(){return d(this._root)},k.prototype.load=function(M,w,R){w===void 0&&(w=[]),R===void 0&&(R=!1);var D=M.length,N=this._comparator;if(R&&g(M,w,0,D-1,N),this._root===null)this._root=l(M,w,0,D),this._size=D;else{var V=f(this.toList(),u(M,w),N);D=this._size+D,this._root=h({head:V},0,D)}return this},k.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(k.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),k.prototype.toString=function(M){M===void 0&&(M=function(R){return String(R.key)});var w=[];return a(this._root,"",!0,function(R){return w.push(R)},M),w.join("")},k.prototype.update=function(M,w,R){var D=this._comparator,N=r(M,this._root,D),V=N.left,Y=N.right;D(M,w)<0?Y=s(w,R,Y,D):V=s(w,R,V,D),this._root=o(V,Y,D)},k.prototype.split=function(M){return r(M,this._root,this._comparator)},k.prototype[Symbol.iterator]=function(){var M,w,R;return i(this,function(D){switch(D.label){case 0:M=this._root,w=[],R=!1,D.label=1;case 1:return R?[3,6]:M===null?[3,2]:(w.push(M),M=M.left,[3,5]);case 2:return w.length===0?[3,4]:(M=w.pop(),[4,M]);case 3:return D.sent(),M=M.right,[3,5];case 4:R=!0,D.label=5;case 5:return[3,1];case 6:return[2]}})},k})();function l(k,M,w,R){var D=R-w;if(D>0){var N=w+Math.floor(D/2),V=k[N],Y=M[N],rt=new t(V,Y);return rt.left=l(k,M,w,N),rt.right=l(k,M,N+1,R),rt}return null}function u(k,M){for(var w=new t(null,null),R=w,D=0;D<k.length;D++)R=R.next=new t(k[D],M[D]);return R.next=null,w.next}function d(k){for(var M=k,w=[],R=!1,D=new t(null,null),N=D;!R;)M?(w.push(M),M=M.left):w.length>0?(M=N=N.next=w.pop(),M=M.right):R=!0;return N.next=null,D.next}function h(k,M,w){var R=w-M;if(R>0){var D=M+Math.floor(R/2),N=h(k,M,D),V=k.head;return V.left=N,k.head=k.head.next,V.right=h(k,D+1,w),V}return null}function f(k,M,w){for(var R=new t(null,null),D=R,N=k,V=M;N!==null&&V!==null;)w(N.key,V.key)<0?(D.next=N,N=N.next):(D.next=V,V=V.next),D=D.next;return N!==null?D.next=N:V!==null&&(D.next=V),R.next}function g(k,M,w,R,D){if(!(w>=R)){for(var N=k[w+R>>1],V=w-1,Y=R+1;;){do V++;while(D(k[V],N)<0);do Y--;while(D(k[Y],N)>0);if(V>=Y)break;var rt=k[V];k[V]=k[Y],k[Y]=rt,rt=M[V],M[V]=M[Y],M[Y]=rt}g(k,M,w,Y,D),g(k,M,Y+1,R,D)}}let x=(k,M)=>k.ll.x<=M.x&&M.x<=k.ur.x&&k.ll.y<=M.y&&M.y<=k.ur.y,p=(k,M)=>{if(M.ur.x<k.ll.x||k.ur.x<M.ll.x||M.ur.y<k.ll.y||k.ur.y<M.ll.y)return null;let w=k.ll.x<M.ll.x?M.ll.x:k.ll.x,R=k.ur.x<M.ur.x?k.ur.x:M.ur.x,D=k.ll.y<M.ll.y?M.ll.y:k.ll.y,N=k.ur.y<M.ur.y?k.ur.y:M.ur.y;return{ll:{x:w,y:D},ur:{x:R,y:N}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let y=m*m,S=(k,M)=>{if(-m<k&&k<m&&-m<M&&M<m)return 0;let w=k-M;return w*w<y*k*M?0:k<M?-1:1};class _{constructor(){this.reset()}reset(){this.xRounder=new v,this.yRounder=new v}round(M,w){return{x:this.xRounder.round(M),y:this.yRounder.round(w)}}}class v{constructor(){this.tree=new c,this.round(0)}round(M){let w=this.tree.add(M),R=this.tree.prev(w);if(R!==null&&S(w.key,R.key)===0)return this.tree.remove(M),R.key;let D=this.tree.next(w);return D!==null&&S(w.key,D.key)===0?(this.tree.remove(M),D.key):M}}let E=new _,A=11102230246251565e-32,b=134217729,I=(3+8*A)*A;function U(k,M,w,R,D){let N,V,Y,rt,W=M[0],ot=R[0],C=0,K=0;ot>W==ot>-W?(N=W,W=M[++C]):(N=ot,ot=R[++K]);let q=0;if(C<k&&K<w)for(ot>W==ot>-W?(V=W+N,Y=N-(V-W),W=M[++C]):(V=ot+N,Y=N-(V-ot),ot=R[++K]),N=V,Y!==0&&(D[q++]=Y);C<k&&K<w;)ot>W==ot>-W?(V=N+W,rt=V-N,Y=N-(V-rt)+(W-rt),W=M[++C]):(V=N+ot,rt=V-N,Y=N-(V-rt)+(ot-rt),ot=R[++K]),N=V,Y!==0&&(D[q++]=Y);for(;C<k;)V=N+W,rt=V-N,Y=N-(V-rt)+(W-rt),W=M[++C],N=V,Y!==0&&(D[q++]=Y);for(;K<w;)V=N+ot,rt=V-N,Y=N-(V-rt)+(ot-rt),ot=R[++K],N=V,Y!==0&&(D[q++]=Y);return(N!==0||q===0)&&(D[q++]=N),q}function L(k,M){let w=M[0];for(let R=1;R<k;R++)w+=M[R];return w}function B(k){return new Float64Array(k)}let F=(3+16*A)*A,H=(2+12*A)*A,$=(9+64*A)*A*A,z=B(4),j=B(8),ut=B(12),nt=B(16),it=B(4);function at(k,M,w,R,D,N,V){let Y,rt,W,ot,C,K,q,mt,bt,gt,It,Dt,ne,Ht,ge,ye,we,ze,Ue=k-D,Xe=w-D,Pt=M-N,Yt=R-N;Ht=Ue*Yt,K=b*Ue,q=K-(K-Ue),mt=Ue-q,K=b*Yt,bt=K-(K-Yt),gt=Yt-bt,ge=mt*gt-(Ht-q*bt-mt*bt-q*gt),ye=Pt*Xe,K=b*Pt,q=K-(K-Pt),mt=Pt-q,K=b*Xe,bt=K-(K-Xe),gt=Xe-bt,we=mt*gt-(ye-q*bt-mt*bt-q*gt),It=ge-we,C=ge-It,z[0]=ge-(It+C)+(C-we),Dt=Ht+It,C=Dt-Ht,ne=Ht-(Dt-C)+(It-C),It=ne-ye,C=ne-It,z[1]=ne-(It+C)+(C-ye),ze=Dt+It,C=ze-Dt,z[2]=Dt-(ze-C)+(It-C),z[3]=ze;let ee=L(4,z),re=H*V;if(ee>=re||-ee>=re||(C=k-Ue,Y=k-(Ue+C)+(C-D),C=w-Xe,W=w-(Xe+C)+(C-D),C=M-Pt,rt=M-(Pt+C)+(C-N),C=R-Yt,ot=R-(Yt+C)+(C-N),Y===0&&rt===0&&W===0&&ot===0)||(re=$*V+I*Math.abs(ee),ee+=Ue*ot+Yt*Y-(Pt*W+Xe*rt),ee>=re||-ee>=re))return ee;Ht=Y*Yt,K=b*Y,q=K-(K-Y),mt=Y-q,K=b*Yt,bt=K-(K-Yt),gt=Yt-bt,ge=mt*gt-(Ht-q*bt-mt*bt-q*gt),ye=rt*Xe,K=b*rt,q=K-(K-rt),mt=rt-q,K=b*Xe,bt=K-(K-Xe),gt=Xe-bt,we=mt*gt-(ye-q*bt-mt*bt-q*gt),It=ge-we,C=ge-It,it[0]=ge-(It+C)+(C-we),Dt=Ht+It,C=Dt-Ht,ne=Ht-(Dt-C)+(It-C),It=ne-ye,C=ne-It,it[1]=ne-(It+C)+(C-ye),ze=Dt+It,C=ze-Dt,it[2]=Dt-(ze-C)+(It-C),it[3]=ze;let Ie=U(4,z,4,it,j);Ht=Ue*ot,K=b*Ue,q=K-(K-Ue),mt=Ue-q,K=b*ot,bt=K-(K-ot),gt=ot-bt,ge=mt*gt-(Ht-q*bt-mt*bt-q*gt),ye=Pt*W,K=b*Pt,q=K-(K-Pt),mt=Pt-q,K=b*W,bt=K-(K-W),gt=W-bt,we=mt*gt-(ye-q*bt-mt*bt-q*gt),It=ge-we,C=ge-It,it[0]=ge-(It+C)+(C-we),Dt=Ht+It,C=Dt-Ht,ne=Ht-(Dt-C)+(It-C),It=ne-ye,C=ne-It,it[1]=ne-(It+C)+(C-ye),ze=Dt+It,C=ze-Dt,it[2]=Dt-(ze-C)+(It-C),it[3]=ze;let Wn=U(Ie,j,4,it,ut);Ht=Y*ot,K=b*Y,q=K-(K-Y),mt=Y-q,K=b*ot,bt=K-(K-ot),gt=ot-bt,ge=mt*gt-(Ht-q*bt-mt*bt-q*gt),ye=rt*W,K=b*rt,q=K-(K-rt),mt=rt-q,K=b*W,bt=K-(K-W),gt=W-bt,we=mt*gt-(ye-q*bt-mt*bt-q*gt),It=ge-we,C=ge-It,it[0]=ge-(It+C)+(C-we),Dt=Ht+It,C=Dt-Ht,ne=Ht-(Dt-C)+(It-C),It=ne-ye,C=ne-It,it[1]=ne-(It+C)+(C-ye),ze=Dt+It,C=ze-Dt,it[2]=Dt-(ze-C)+(It-C),it[3]=ze;let mi=U(Wn,ut,4,it,nt);return nt[mi-1]}function Ct(k,M,w,R,D,N){let V=(M-N)*(w-D),Y=(k-D)*(R-N),rt=V-Y,W=Math.abs(V+Y);return Math.abs(rt)>=F*W?rt:-at(k,M,w,R,D,N,W)}let Nt=(k,M)=>k.x*M.y-k.y*M.x,Et=(k,M)=>k.x*M.x+k.y*M.y,At=(k,M,w)=>{let R=Ct(k.x,k.y,M.x,M.y,w.x,w.y);return R>0?-1:R<0?1:0},Z=k=>Math.sqrt(Et(k,k)),X=(k,M,w)=>{let R={x:M.x-k.x,y:M.y-k.y},D={x:w.x-k.x,y:w.y-k.y};return Nt(D,R)/Z(D)/Z(R)},Q=(k,M,w)=>{let R={x:M.x-k.x,y:M.y-k.y},D={x:w.x-k.x,y:w.y-k.y};return Et(D,R)/Z(D)/Z(R)},ct=(k,M,w)=>M.y===0?null:{x:k.x+M.x/M.y*(w-k.y),y:w},xt=(k,M,w)=>M.x===0?null:{x:w,y:k.y+M.y/M.x*(w-k.x)},_t=(k,M,w,R)=>{if(M.x===0)return xt(w,R,k.x);if(R.x===0)return xt(k,M,w.x);if(M.y===0)return ct(w,R,k.y);if(R.y===0)return ct(k,M,w.y);let D=Nt(M,R);if(D==0)return null;let N={x:w.x-k.x,y:w.y-k.y},V=Nt(N,M)/D,Y=Nt(N,R)/D,rt=k.x+Y*M.x,W=w.x+V*R.x,ot=k.y+Y*M.y,C=w.y+V*R.y,K=(rt+W)/2,q=(ot+C)/2;return{x:K,y:q}};class vt{static compare(M,w){let R=vt.comparePoints(M.point,w.point);return R!==0?R:(M.point!==w.point&&M.link(w),M.isLeft!==w.isLeft?M.isLeft?1:-1:dt.compare(M.segment,w.segment))}static comparePoints(M,w){return M.x<w.x?-1:M.x>w.x?1:M.y<w.y?-1:M.y>w.y?1:0}constructor(M,w){M.events===void 0?M.events=[this]:M.events.push(this),this.point=M,this.isLeft=w}link(M){if(M.point===this.point)throw new Error("Tried to link already linked events");let w=M.point.events;for(let R=0,D=w.length;R<D;R++){let N=w[R];this.point.events.push(N),N.point=this.point}this.checkForConsuming()}checkForConsuming(){let M=this.point.events.length;for(let w=0;w<M;w++){let R=this.point.events[w];if(R.segment.consumedBy===void 0)for(let D=w+1;D<M;D++){let N=this.point.events[D];N.consumedBy===void 0&&R.otherSE.point.events===N.otherSE.point.events&&R.segment.consume(N.segment)}}}getAvailableLinkedEvents(){let M=[];for(let w=0,R=this.point.events.length;w<R;w++){let D=this.point.events[w];D!==this&&!D.segment.ringOut&&D.segment.isInResult()&&M.push(D)}return M}getLeftmostComparator(M){let w=new Map,R=D=>{let N=D.otherSE;w.set(D,{sine:X(this.point,M.point,N.point),cosine:Q(this.point,M.point,N.point)})};return(D,N)=>{w.has(D)||R(D),w.has(N)||R(N);let{sine:V,cosine:Y}=w.get(D),{sine:rt,cosine:W}=w.get(N);return V>=0&&rt>=0?Y<W?1:Y>W?-1:0:V<0&&rt<0?Y<W?-1:Y>W?1:0:rt<V?-1:rt>V?1:0}}}let Rt=0;class dt{static compare(M,w){let R=M.leftSE.point.x,D=w.leftSE.point.x,N=M.rightSE.point.x,V=w.rightSE.point.x;if(V<R)return 1;if(N<D)return-1;let Y=M.leftSE.point.y,rt=w.leftSE.point.y,W=M.rightSE.point.y,ot=w.rightSE.point.y;if(R<D){if(rt<Y&&rt<W)return 1;if(rt>Y&&rt>W)return-1;let C=M.comparePoint(w.leftSE.point);if(C<0)return 1;if(C>0)return-1;let K=w.comparePoint(M.rightSE.point);return K!==0?K:-1}if(R>D){if(Y<rt&&Y<ot)return-1;if(Y>rt&&Y>ot)return 1;let C=w.comparePoint(M.leftSE.point);if(C!==0)return C;let K=M.comparePoint(w.rightSE.point);return K<0?1:K>0?-1:1}if(Y<rt)return-1;if(Y>rt)return 1;if(N<V){let C=w.comparePoint(M.rightSE.point);if(C!==0)return C}if(N>V){let C=M.comparePoint(w.rightSE.point);if(C<0)return 1;if(C>0)return-1}if(N!==V){let C=W-Y,K=N-R,q=ot-rt,mt=V-D;if(C>K&&q<mt)return 1;if(C<K&&q>mt)return-1}return N>V?1:N<V||W<ot?-1:W>ot?1:M.id<w.id?-1:M.id>w.id?1:0}constructor(M,w,R,D){this.id=++Rt,this.leftSE=M,M.segment=this,M.otherSE=w,this.rightSE=w,w.segment=this,w.otherSE=M,this.rings=R,this.windings=D}static fromRing(M,w,R){let D,N,V,Y=vt.comparePoints(M,w);if(Y<0)D=M,N=w,V=1;else if(Y>0)D=w,N=M,V=-1;else throw new Error(`Tried to create degenerate segment at [${M.x}, ${M.y}]`);let rt=new vt(D,!0),W=new vt(N,!1);return new dt(rt,W,[R],[V])}replaceRightSE(M){this.rightSE=M,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let M=this.leftSE.point.y,w=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:M<w?M:w},ur:{x:this.rightSE.point.x,y:M>w?M:w}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(M){return M.x===this.leftSE.point.x&&M.y===this.leftSE.point.y||M.x===this.rightSE.point.x&&M.y===this.rightSE.point.y}comparePoint(M){if(this.isAnEndpoint(M))return 0;let w=this.leftSE.point,R=this.rightSE.point,D=this.vector();if(w.x===R.x)return M.x===w.x?0:M.x<w.x?1:-1;let N=(M.y-w.y)/D.y,V=w.x+N*D.x;if(M.x===V)return 0;let Y=(M.x-w.x)/D.x,rt=w.y+Y*D.y;return M.y===rt?0:M.y<rt?-1:1}getIntersection(M){let w=this.bbox(),R=M.bbox(),D=p(w,R);if(D===null)return null;let N=this.leftSE.point,V=this.rightSE.point,Y=M.leftSE.point,rt=M.rightSE.point,W=x(w,Y)&&this.comparePoint(Y)===0,ot=x(R,N)&&M.comparePoint(N)===0,C=x(w,rt)&&this.comparePoint(rt)===0,K=x(R,V)&&M.comparePoint(V)===0;if(ot&&W)return K&&!C?V:!K&&C?rt:null;if(ot)return C&&N.x===rt.x&&N.y===rt.y?null:N;if(W)return K&&V.x===Y.x&&V.y===Y.y?null:Y;if(K&&C)return null;if(K)return V;if(C)return rt;let q=_t(N,this.vector(),Y,M.vector());return q===null||!x(D,q)?null:E.round(q.x,q.y)}split(M){let w=[],R=M.events!==void 0,D=new vt(M,!0),N=new vt(M,!1),V=this.rightSE;this.replaceRightSE(N),w.push(N),w.push(D);let Y=new dt(D,V,this.rings.slice(),this.windings.slice());return vt.comparePoints(Y.leftSE.point,Y.rightSE.point)>0&&Y.swapEvents(),vt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),R&&(D.checkForConsuming(),N.checkForConsuming()),w}swapEvents(){let M=this.rightSE;this.rightSE=this.leftSE,this.leftSE=M,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let w=0,R=this.windings.length;w<R;w++)this.windings[w]*=-1}consume(M){let w=this,R=M;for(;w.consumedBy;)w=w.consumedBy;for(;R.consumedBy;)R=R.consumedBy;let D=dt.compare(w,R);if(D!==0){if(D>0){let N=w;w=R,R=N}if(w.prev===R){let N=w;w=R,R=N}for(let N=0,V=R.rings.length;N<V;N++){let Y=R.rings[N],rt=R.windings[N],W=w.rings.indexOf(Y);W===-1?(w.rings.push(Y),w.windings.push(rt)):w.windings[W]+=rt}R.rings=null,R.windings=null,R.consumedBy=w,R.leftSE.consumedBy=w.leftSE,R.rightSE.consumedBy=w.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let M=this.prev.consumedBy||this.prev;this._beforeState=M.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let M=this.beforeState();this._afterState={rings:M.rings.slice(0),windings:M.windings.slice(0),multiPolys:[]};let w=this._afterState.rings,R=this._afterState.windings,D=this._afterState.multiPolys;for(let Y=0,rt=this.rings.length;Y<rt;Y++){let W=this.rings[Y],ot=this.windings[Y],C=w.indexOf(W);C===-1?(w.push(W),R.push(ot)):R[C]+=ot}let N=[],V=[];for(let Y=0,rt=w.length;Y<rt;Y++){if(R[Y]===0)continue;let W=w[Y],ot=W.poly;if(V.indexOf(ot)===-1)if(W.isExterior)N.push(ot);else{V.indexOf(ot)===-1&&V.push(ot);let C=N.indexOf(W.poly);C!==-1&&N.splice(C,1)}}for(let Y=0,rt=N.length;Y<rt;Y++){let W=N[Y].multiPoly;D.indexOf(W)===-1&&D.push(W)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let M=this.beforeState().multiPolys,w=this.afterState().multiPolys;switch(Zt.type){case"union":{let R=M.length===0,D=w.length===0;this._isInResult=R!==D;break}case"intersection":{let R,D;M.length<w.length?(R=M.length,D=w.length):(R=w.length,D=M.length),this._isInResult=D===Zt.numMultiPolys&&R<D;break}case"xor":{let R=Math.abs(M.length-w.length);this._isInResult=R%2===1;break}case"difference":{let R=D=>D.length===1&&D[0].isSubject;this._isInResult=R(M)!==R(w);break}default:throw new Error(`Unrecognized operation type found ${Zt.type}`)}return this._isInResult}}class Mt{constructor(M,w,R){if(!Array.isArray(M)||M.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=w,this.isExterior=R,this.segments=[],typeof M[0][0]!="number"||typeof M[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let D=E.round(M[0][0],M[0][1]);this.bbox={ll:{x:D.x,y:D.y},ur:{x:D.x,y:D.y}};let N=D;for(let V=1,Y=M.length;V<Y;V++){if(typeof M[V][0]!="number"||typeof M[V][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let rt=E.round(M[V][0],M[V][1]);rt.x===N.x&&rt.y===N.y||(this.segments.push(dt.fromRing(N,rt,this)),rt.x<this.bbox.ll.x&&(this.bbox.ll.x=rt.x),rt.y<this.bbox.ll.y&&(this.bbox.ll.y=rt.y),rt.x>this.bbox.ur.x&&(this.bbox.ur.x=rt.x),rt.y>this.bbox.ur.y&&(this.bbox.ur.y=rt.y),N=rt)}(D.x!==N.x||D.y!==N.y)&&this.segments.push(dt.fromRing(N,D,this))}getSweepEvents(){let M=[];for(let w=0,R=this.segments.length;w<R;w++){let D=this.segments[w];M.push(D.leftSE),M.push(D.rightSE)}return M}}class St{constructor(M,w){if(!Array.isArray(M))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Mt(M[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let R=1,D=M.length;R<D;R++){let N=new Mt(M[R],this,!1);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.interiorRings.push(N)}this.multiPoly=w}getSweepEvents(){let M=this.exteriorRing.getSweepEvents();for(let w=0,R=this.interiorRings.length;w<R;w++){let D=this.interiorRings[w].getSweepEvents();for(let N=0,V=D.length;N<V;N++)M.push(D[N])}return M}}class wt{constructor(M,w){if(!Array.isArray(M))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof M[0][0][0]=="number"&&(M=[M])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let R=0,D=M.length;R<D;R++){let N=new St(M[R],this);N.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=N.bbox.ll.x),N.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=N.bbox.ll.y),N.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=N.bbox.ur.x),N.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=N.bbox.ur.y),this.polys.push(N)}this.isSubject=w}getSweepEvents(){let M=[];for(let w=0,R=this.polys.length;w<R;w++){let D=this.polys[w].getSweepEvents();for(let N=0,V=D.length;N<V;N++)M.push(D[N])}return M}}class Tt{static factory(M){let w=[];for(let R=0,D=M.length;R<D;R++){let N=M[R];if(!N.isInResult()||N.ringOut)continue;let V=null,Y=N.leftSE,rt=N.rightSE,W=[Y],ot=Y.point,C=[];for(;V=Y,Y=rt,W.push(Y),Y.point!==ot;)for(;;){let K=Y.getAvailableLinkedEvents();if(K.length===0){let bt=W[0].point,gt=W[W.length-1].point;throw new Error(`Unable to complete output ring starting at [${bt.x}, ${bt.y}]. Last matching segment found ends at [${gt.x}, ${gt.y}].`)}if(K.length===1){rt=K[0].otherSE;break}let q=null;for(let bt=0,gt=C.length;bt<gt;bt++)if(C[bt].point===Y.point){q=bt;break}if(q!==null){let bt=C.splice(q)[0],gt=W.splice(bt.index);gt.unshift(gt[0].otherSE),w.push(new Tt(gt.reverse()));continue}C.push({index:W.length,point:Y.point});let mt=Y.getLeftmostComparator(V);rt=K.sort(mt)[0].otherSE;break}w.push(new Tt(W))}return w}constructor(M){this.events=M;for(let w=0,R=M.length;w<R;w++)M[w].segment.ringOut=this;this.poly=null}getGeom(){let M=this.events[0].point,w=[M];for(let W=1,ot=this.events.length-1;W<ot;W++){let C=this.events[W].point,K=this.events[W+1].point;At(C,M,K)!==0&&(w.push(C),M=C)}if(w.length===1)return null;let R=w[0],D=w[1];At(R,M,D)===0&&w.shift(),w.push(w[0]);let N=this.isExteriorRing()?1:-1,V=this.isExteriorRing()?0:w.length-1,Y=this.isExteriorRing()?w.length:-1,rt=[];for(let W=V;W!=Y;W+=N)rt.push([w[W].x,w[W].y]);return rt}isExteriorRing(){if(this._isExteriorRing===void 0){let M=this.enclosingRing();this._isExteriorRing=M?!M.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let M=this.events[0];for(let D=1,N=this.events.length;D<N;D++){let V=this.events[D];vt.compare(M,V)>0&&(M=V)}let w=M.segment.prevInResult(),R=w?w.prevInResult():null;for(;;){if(!w)return null;if(!R)return w.ringOut;if(R.ringOut!==w.ringOut)return R.ringOut.enclosingRing()!==w.ringOut?w.ringOut:w.ringOut.enclosingRing();w=R.prevInResult(),R=w?w.prevInResult():null}}}class Ut{constructor(M){this.exteriorRing=M,M.poly=this,this.interiorRings=[]}addInterior(M){this.interiorRings.push(M),M.poly=this}getGeom(){let M=[this.exteriorRing.getGeom()];if(M[0]===null)return null;for(let w=0,R=this.interiorRings.length;w<R;w++){let D=this.interiorRings[w].getGeom();D!==null&&M.push(D)}return M}}class Ot{constructor(M){this.rings=M,this.polys=this._composePolys(M)}getGeom(){let M=[];for(let w=0,R=this.polys.length;w<R;w++){let D=this.polys[w].getGeom();D!==null&&M.push(D)}return M}_composePolys(M){let w=[];for(let R=0,D=M.length;R<D;R++){let N=M[R];if(!N.poly)if(N.isExteriorRing())w.push(new Ut(N));else{let V=N.enclosingRing();V.poly||w.push(new Ut(V)),V.poly.addInterior(N)}}return w}}class Wt{constructor(M){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dt.compare;this.queue=M,this.tree=new c(w),this.segments=[]}process(M){let w=M.segment,R=[];if(M.consumedBy)return M.isLeft?this.queue.remove(M.otherSE):this.tree.remove(w),R;let D=M.isLeft?this.tree.add(w):this.tree.find(w);if(!D)throw new Error(`Unable to find segment #${w.id} [${w.leftSE.point.x}, ${w.leftSE.point.y}] -> [${w.rightSE.point.x}, ${w.rightSE.point.y}] in SweepLine tree.`);let N=D,V=D,Y,rt;for(;Y===void 0;)N=this.tree.prev(N),N===null?Y=null:N.key.consumedBy===void 0&&(Y=N.key);for(;rt===void 0;)V=this.tree.next(V),V===null?rt=null:V.key.consumedBy===void 0&&(rt=V.key);if(M.isLeft){let W=null;if(Y){let C=Y.getIntersection(w);if(C!==null&&(w.isAnEndpoint(C)||(W=C),!Y.isAnEndpoint(C))){let K=this._splitSafely(Y,C);for(let q=0,mt=K.length;q<mt;q++)R.push(K[q])}}let ot=null;if(rt){let C=rt.getIntersection(w);if(C!==null&&(w.isAnEndpoint(C)||(ot=C),!rt.isAnEndpoint(C))){let K=this._splitSafely(rt,C);for(let q=0,mt=K.length;q<mt;q++)R.push(K[q])}}if(W!==null||ot!==null){let C=null;W===null?C=ot:ot===null?C=W:C=vt.comparePoints(W,ot)<=0?W:ot,this.queue.remove(w.rightSE),R.push(w.rightSE);let K=w.split(C);for(let q=0,mt=K.length;q<mt;q++)R.push(K[q])}R.length>0?(this.tree.remove(w),R.push(M)):(this.segments.push(w),w.prev=Y)}else{if(Y&&rt){let W=Y.getIntersection(rt);if(W!==null){if(!Y.isAnEndpoint(W)){let ot=this._splitSafely(Y,W);for(let C=0,K=ot.length;C<K;C++)R.push(ot[C])}if(!rt.isAnEndpoint(W)){let ot=this._splitSafely(rt,W);for(let C=0,K=ot.length;C<K;C++)R.push(ot[C])}}}this.tree.remove(w)}return R}_splitSafely(M,w){this.tree.remove(M);let R=M.rightSE;this.queue.remove(R);let D=M.split(w);return D.push(R),M.consumedBy===void 0&&this.tree.add(M),D}}let Ft=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,J=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class Kt{run(M,w,R){Zt.type=M,E.reset();let D=[new wt(w,!0)];for(let C=0,K=R.length;C<K;C++)D.push(new wt(R[C],!1));if(Zt.numMultiPolys=D.length,Zt.type==="difference"){let C=D[0],K=1;for(;K<D.length;)p(D[K].bbox,C.bbox)!==null?K++:D.splice(K,1)}if(Zt.type==="intersection")for(let C=0,K=D.length;C<K;C++){let q=D[C];for(let mt=C+1,bt=D.length;mt<bt;mt++)if(p(q.bbox,D[mt].bbox)===null)return[]}let N=new c(vt.compare);for(let C=0,K=D.length;C<K;C++){let q=D[C].getSweepEvents();for(let mt=0,bt=q.length;mt<bt;mt++)if(N.insert(q[mt]),N.size>Ft)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let V=new Wt(N),Y=N.size,rt=N.pop();for(;rt;){let C=rt.key;if(N.size===Y){let q=C.segment;throw new Error(`Unable to pop() ${C.isLeft?"left":"right"} SweepEvent [${C.point.x}, ${C.point.y}] from segment #${q.id} [${q.leftSE.point.x}, ${q.leftSE.point.y}] -> [${q.rightSE.point.x}, ${q.rightSE.point.y}] from queue.`)}if(N.size>Ft)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(V.segments.length>J)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let K=V.process(C);for(let q=0,mt=K.length;q<mt;q++){let bt=K[q];bt.consumedBy===void 0&&N.insert(bt)}Y=N.size,rt=N.pop()}E.reset();let W=Tt.factory(V.segments);return new Ot(W).getGeom()}}let Zt=new Kt;var pt={union:function(k){for(var M=arguments.length,w=new Array(M>1?M-1:0),R=1;R<M;R++)w[R-1]=arguments[R];return Zt.run("union",k,w)},intersection:function(k){for(var M=arguments.length,w=new Array(M>1?M-1:0),R=1;R<M;R++)w[R-1]=arguments[R];return Zt.run("intersection",k,w)},xor:function(k){for(var M=arguments.length,w=new Array(M>1?M-1:0),R=1;R<M;R++)w[R-1]=arguments[R];return Zt.run("xor",k,w)},difference:function(k){for(var M=arguments.length,w=new Array(M>1?M-1:0),R=1;R<M;R++)w[R-1]=arguments[R];return Zt.run("difference",k,w)}};return pt}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var id=0,Hu=1,sd=2;var Ds=1,rd=2,Tr=3,ps=0,An=1,ln=2,wi=0,Ar=1,Do=2,Gu=3,Vu=4,od=5;var Us=100,ad=101,cd=102,ld=103,ud=104,hd=200,fd=201,dd=202,pd=203,Wu=204,Xu=205,md=206,gd=207,xd=208,yd=209,_d=210,vd=211,bd=212,Md=213,Sd=214,ka=0,za=1,Ha=2,ur=3,Ga=4,Va=5,Wa=6,Xa=7,Sc=0,wd=1,Ed=2,ai=0,Yu=1,qu=2,Zu=3,Uo=4,$u=5,Ju=6,ju=7;var Ku=300,ms=301,Fs=302,wc=303,Ec=304,Fo=306,Rs=1e3,_i=1001,Ya=1002,rn=1003,Td=1004;var Oo=1005;var cn=1006,Tc=1007;var gs=1008;var Dn=1009,Qu=1010,th=1011,Rr=1012,Ac=1013,ci=1014,jn=1015,li=1016,Rc=1017,Cc=1018,Cr=1020,eh=35902,nh=35899,ih=1021,sh=1022,Kn=1023,bi=1026,xs=1027,Ic=1028,Pc=1029,ys=1030,Lc=1031;var Nc=1033,Bo=33776,ko=33777,zo=33778,Ho=33779,Dc=35840,Uc=35841,Fc=35842,Oc=35843,Bc=36196,kc=37492,zc=37496,Hc=37488,Gc=37489,Go=37490,Vc=37491,Wc=37808,Xc=37809,Yc=37810,qc=37811,Zc=37812,$c=37813,Jc=37814,jc=37815,Kc=37816,Qc=37817,tl=37818,el=37819,nl=37820,il=37821,sl=36492,rl=36494,ol=36495,al=36283,cl=36284,Vo=36285,ll=36286;var no=2300,qa=2301,Oa=2302,Au=2303,Ru=2400,Cu=2401,Iu=2402;var Ad=3200;var Wo=0,Rd=1,Wi="",je="srgb",io="srgb-linear",so="linear",Te="srgb";var Ba=7680;var Cd=519,Id=512,Pd=513,Ld=514,ul=515,Nd=516,Dd=517,hl=518,Ud=519,rh=35044,Rn=35048;var oh="300 es",ri=2e3,hr=2001;function t0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function e0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fd(){let i=ro("canvas");return i.style.display="block",i}var xf={},fr=null;function oo(...i){let t="THREE."+i.shift();fr?fr("log",t,...i):console.log(t,...i)}function Od(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ie(...i){i=Od(i);let t="THREE."+i.shift();if(fr)fr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Od(i);let t="THREE."+i.shift();if(fr)fr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function As(...i){let t=i.join(" ");t in xf||(xf[t]=!0,ie(...i))}function Bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kd={[ka]:za,[Ha]:Wa,[Ga]:Xa,[ur]:Va,[za]:ka,[Wa]:Ha,[Xa]:Ga,[Va]:ur},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yf=1234567,Kr=Math.PI/180,dr=180/Math.PI;function vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function ah(i,t){return(i%t+t)%t}function n0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function i0(i,t,e){return i!==t?(e-i)/(t-i):0}function Qr(i,t,e){return(1-e)*i+e*t}function s0(i,t,e,n){return Qr(i,t,1-Math.exp(-e*n))}function r0(i,t=1){return t-Math.abs(ah(i,t*2)-t)}function o0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function a0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function c0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function l0(i,t){return i+Math.random()*(t-i)}function u0(i){return i*(.5-Math.random())}function h0(i){i!==void 0&&(yf=i);let t=yf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function f0(i){return i*Kr}function d0(i){return i*dr}function p0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function m0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function x0(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function si(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oe={DEG2RAD:Kr,RAD2DEG:dr,generateUUID:vi,clamp:le,euclideanModulo:ah,mapLinear:n0,inverseLerp:i0,lerp:Qr,damp:s0,pingpong:r0,smoothstep:o0,smootherstep:a0,randInt:c0,randFloat:l0,randFloatSpread:u0,seededRandom:h0,degToRad:f0,radToDeg:d0,isPowerOfTwo:p0,ceilPowerOfTwo:m0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:x0,normalize:Re,denormalize:si},Lt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*x;p<0&&(h=-h,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),S=Math.sin(y);m=Math.sin(m*y)/S,a=Math.sin(a*y)/S,c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+x*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+x*a;let y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_f.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_f.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eu.copy(this).projectOnVector(t),this.sub(eu)}reflect(t){return this.sub(eu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eu=new G,_f=new on,ue=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],y=s[1],S=s[4],_=s[7],v=s[2],E=s[5],A=s[8];return r[0]=o*x+a*y+c*v,r[3]=o*p+a*S+c*E,r[6]=o*m+a*_+c*A,r[1]=l*x+u*y+d*v,r[4]=l*p+u*S+d*E,r[7]=l*m+u*_+d*A,r[2]=h*x+f*y+g*v,r[5]=h*p+f*S+g*E,r[8]=h*m+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nu=new ue,vf=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bf=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let i={enabled:!0,workingColorSpace:io,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?so:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[io]:{primaries:t,whitePoint:n,transfer:so,toXYZ:vf,fromXYZ:bf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:vf,fromXYZ:bf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}var xe=y0();function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qs,Za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qs===void 0&&(qs=ro("canvas")),qs.width=t.width,qs.height=t.height;let s=qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_0=0,pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(iu(s[o].image)):r.push(iu(s[o]))}else r=iu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var v0=0,su=new G,Tn=class i extends Mi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,s=_i,r=cn,o=gs,a=Kn,c=Dn,l=i.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=vi(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Ku;Tn.DEFAULT_ANISOTROPY=1;var Ae=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,_=(f+1)/2,v=(m+1)/2,E=(u+h)/4,A=(d+x)/4,b=(g+p)/4;return S>_&&S>v?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=A/n):_>v?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=b/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=A/r,s=b/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$a=class extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ao=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zs.setFromMatrixColumn(t,0).length(),r=1/Zs.setFromMatrixColumn(t,1).length(),o=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){let h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(b0,t,M0)}lookAt(t,e,n){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ki.crossVectors(n,Fn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ki.crossVectors(n,Fn)),Ki.normalize(),ua.crossVectors(Fn,Ki),s[0]=Ki.x,s[4]=ua.x,s[8]=Fn.x,s[1]=Ki.y,s[5]=ua.y,s[9]=Fn.y,s[2]=Ki.z,s[6]=ua.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],S=n[7],_=n[11],v=n[15],E=s[0],A=s[4],b=s[8],I=s[12],U=s[1],L=s[5],B=s[9],F=s[13],H=s[2],$=s[6],z=s[10],j=s[14],ut=s[3],nt=s[7],it=s[11],at=s[15];return r[0]=o*E+a*U+c*H+l*ut,r[4]=o*A+a*L+c*$+l*nt,r[8]=o*b+a*B+c*z+l*it,r[12]=o*I+a*F+c*j+l*at,r[1]=u*E+d*U+h*H+f*ut,r[5]=u*A+d*L+h*$+f*nt,r[9]=u*b+d*B+h*z+f*it,r[13]=u*I+d*F+h*j+f*at,r[2]=g*E+x*U+p*H+m*ut,r[6]=g*A+x*L+p*$+m*nt,r[10]=g*b+x*B+p*z+m*it,r[14]=g*I+x*F+p*j+m*at,r[3]=y*E+S*U+_*H+v*ut,r[7]=y*A+S*L+_*$+v*nt,r[11]=y*b+S*B+_*z+v*it,r[15]=y*I+S*F+_*j+v*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],y=c*f-l*h,S=a*f-l*d,_=a*h-c*d,v=o*f-l*u,E=o*h-c*u,A=o*d-a*u;return e*(x*y-p*S+m*_)-n*(g*y-p*v+m*E)+s*(g*S-x*v+m*A)-r*(g*_-x*E+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=e*a-n*o,S=e*c-s*o,_=e*l-r*o,v=n*c-s*a,E=n*l-r*a,A=s*l-r*c,b=u*x-d*g,I=u*p-h*g,U=u*m-f*g,L=d*p-h*x,B=d*m-f*x,F=h*m-f*p,H=y*F-S*B+_*L+v*U-E*I+A*b;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/H;return t[0]=(a*F-c*B+l*L)*$,t[1]=(s*B-n*F-r*L)*$,t[2]=(x*A-p*E+m*v)*$,t[3]=(h*E-d*A-f*v)*$,t[4]=(c*U-o*F-l*I)*$,t[5]=(e*F-s*U+r*I)*$,t[6]=(p*_-g*A-m*S)*$,t[7]=(u*A-h*_+f*S)*$,t[8]=(o*B-a*U+l*b)*$,t[9]=(n*U-e*B-r*b)*$,t[10]=(g*E-x*_+m*y)*$,t[11]=(d*_-u*E-f*y)*$,t[12]=(a*I-o*L-c*b)*$,t[13]=(e*L-n*I+s*b)*$,t[14]=(x*S-g*v-p*y)*$,t[15]=(u*v-d*S+h*y)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,x=o*u,p=o*d,m=a*d,y=c*l,S=c*u,_=c*d,v=n.x,E=n.y,A=n.z;return s[0]=(1-(x+m))*v,s[1]=(f+_)*v,s[2]=(g-S)*v,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(h+m))*E,s[6]=(p+y)*E,s[7]=0,s[8]=(g+S)*A,s[9]=(p-y)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),c=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ei.copy(this);let l=1/o,u=1/a,d=1/c;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,e.setFromRotationMatrix(ei),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=ri,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ri)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===hr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ri,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ri)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===hr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zs=new G,ei=new _e,b0=new G(0,0,0),M0=new G(1,1,1),Ki=new G,ua=new G,Fn=new G,Mf=new _e,Sf=new on,Si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},S0=0,wf=new G,$s=new on,Fi=new _e,ha=new G,Wr=new G,w0=new G,E0=new on,Ef=new G(1,0,0),Tf=new G(0,1,0),Af=new G(0,0,1),Rf={type:"added"},T0={type:"removed"},Js={type:"childadded",child:null},ru={type:"childremoved",child:null},Be=class i extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Si,n=new on,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ue}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(Ef,t)}rotateY(t){return this.rotateOnAxis(Tf,t)}rotateZ(t){return this.rotateOnAxis(Af,t)}translateOnAxis(t,e){return wf.copy(t).applyQuaternion(this.quaternion),this.position.add(wf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ef,t)}translateY(t){return this.translateOnAxis(Tf,t)}translateZ(t){return this.translateOnAxis(Af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Wr,ha,this.up):Fi.lookAt(ha,Wr,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Fi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rf),Js.child=t,this.dispatchEvent(Js),Js.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(T0),ru.child=t,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rf),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,w0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,E0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new G(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},A0={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function ou(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=ah(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ou(o,r,t+1/3),this.g=ou(o,r,t),this.b=ou(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=zd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return xe.workingToColorSpace(xn.copy(this),t),Math.round(le(xn.r*255,0,255))*65536+Math.round(le(xn.g*255,0,255))*256+Math.round(le(xn.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(xn.copy(this),e);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=je){xe.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,s=xn.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(fa);let n=Qr(Qi.h,fa.h,e),s=Qr(Qi.s,fa.s,e),r=Qr(Qi.l,fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Xt;Xt.NAMES=zd;var ss=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ni=new G,Oi=new G,au=new G,Bi=new G,js=new G,Ks=new G,Cf=new G,cu=new G,lu=new G,uu=new G,hu=new Ae,fu=new Ae,du=new Ae,is=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ni.subVectors(t,e),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ni.subVectors(s,e),Oi.subVectors(n,e),au.subVectors(t,e);let o=ni.dot(ni),a=ni.dot(Oi),c=ni.dot(au),l=Oi.dot(Oi),u=Oi.dot(au),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bi.x),c.addScaledVector(o,Bi.y),c.addScaledVector(a,Bi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return hu.setScalar(0),fu.setScalar(0),du.setScalar(0),hu.fromBufferAttribute(t,e),fu.fromBufferAttribute(t,n),du.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hu,r.x),o.addScaledVector(fu,r.y),o.addScaledVector(du,r.z),o}static isFrontFacing(t,e,n,s){return ni.subVectors(n,e),Oi.subVectors(t,e),ni.cross(Oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ni.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,n),Ks.subVectors(r,n),cu.subVectors(t,n);let c=js.dot(cu),l=Ks.dot(cu);if(c<=0&&l<=0)return e.copy(n);lu.subVectors(t,s);let u=js.dot(lu),d=Ks.dot(lu);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(js,o);uu.subVectors(t,r);let f=js.dot(uu),g=Ks.dot(uu);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ks,a);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Cf.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Cf,a);let m=1/(p+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(js,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},He=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),pa.subVectors(this.max,Xr),Qs.subVectors(t.a,Xr),tr.subVectors(t.b,Xr),er.subVectors(t.c,Xr),ts.subVectors(tr,Qs),es.subVectors(er,tr),Ss.subVectors(Qs,er);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Ss.z,Ss.y,ts.z,0,-ts.x,es.z,0,-es.x,Ss.z,0,-Ss.x,-ts.y,ts.x,0,-es.y,es.x,0,-Ss.y,Ss.x,0];return!pu(e,Qs,tr,er,pa)||(e=[1,0,0,0,1,0,0,0,1],!pu(e,Qs,tr,er,pa))?!1:(ma.crossVectors(ts,es),e=[ma.x,ma.y,ma.z],pu(e,Qs,tr,er,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ki=[new G,new G,new G,new G,new G,new G,new G,new G],ii=new G,da=new He,Qs=new G,tr=new G,er=new G,ts=new G,es=new G,Ss=new G,Xr=new G,pa=new G,ma=new G,ws=new G;function pu(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),c=t.dot(ws),l=e.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Je=new G,ga=new Lt,R0=0,be=class extends Mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=si(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=si(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=si(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=si(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var co=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lo=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},C0=new He,Yr=new G,mu=new G,Nn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):C0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(mu)),this.expandByPoint(Yr.copy(t.center).sub(mu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},I0=0,qn=new _e,gu=new Be,nr=new G,On=new He,qr=new He,sn=new G,ce=class i extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t0(t)?lo:co)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return gu.lookAt(t),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new He);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(On.min,qr.min),On.expandByPoint(sn),sn.addVectors(On.max,qr.max),On.expandByPoint(sn)):(On.expandByPoint(qr.min),On.expandByPoint(qr.max))}On.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)sn.fromBufferAttribute(a,l),c&&(nr.fromBufferAttribute(t,l),sn.add(nr)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new G,c[b]=new G;let l=new G,u=new G,d=new G,h=new Lt,f=new Lt,g=new Lt,x=new G,p=new G;function m(b,I,U){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,U),h.fromBufferAttribute(r,b),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,U),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[b].add(x),a[I].add(x),a[U].add(x),c[b].add(p),c[I].add(p),c[U].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let b=0,I=y.length;b<I;++b){let U=y[b],L=U.start,B=U.count;for(let F=L,H=L+B;F<H;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new G,_=new G,v=new G,E=new G;function A(b){v.fromBufferAttribute(s,b),E.copy(v);let I=a[b];S.copy(I),S.sub(v.multiplyScalar(v.dot(I))).normalize(),_.crossVectors(E,I);let L=_.dot(c[b])<0?-1:1;o.setXYZW(b,S.x,S.y,S.z,L)}for(let b=0,I=y.length;b<I;++b){let U=y[b],L=U.start,B=U.count;for(let F=L,H=L+B;F<H;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,d=new G;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new be(h,u,d)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},uo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},wn=new G,$n=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=si(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=si(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=si(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=si(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=si(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xu=new G,P0=new G,L0=new ue,Bn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=xu.subVectors(n,e).cross(P0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(xu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||L0.getNormalMatrix(t),s=this.coplanarPoint(xu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},N0=0,oi=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Ar,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var zi=new G,yu=new G,xa=new G,ya=new G,Cs=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yu.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),ya.copy(this.origin).sub(yu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xa),a=ya.dot(this.direction),c=-ya.dot(xa),l=ya.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yu).addScaledVector(xa,h),f}intersectSphere(t,e){if(t.radius<0)return null;zi.subVectors(t.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=n.x-o.x,y=n.y-o.y,S=n.z-o.z,_=Math.abs(c),v=Math.abs(l),E=Math.abs(u),A,b,I,U,L,B,F,H,$,z,j,ut;if(_>=v&&_>=E?(I=c,B=d,$=g,ut=m,c>=0?(A=l,b=u,U=h,L=f,F=x,H=p,z=y,j=S):(A=u,b=l,U=f,L=h,F=p,H=x,z=S,j=y)):v>=E?(I=l,B=h,$=x,ut=y,l>=0?(A=u,b=c,U=f,L=d,F=p,H=g,z=S,j=m):(A=c,b=u,U=d,L=f,F=g,H=p,z=m,j=S)):(I=u,B=f,$=p,ut=S,u>=0?(A=c,b=l,U=d,L=h,F=g,H=x,z=m,j=y):(A=l,b=c,U=h,L=d,F=x,H=g,z=y,j=m)),I===0)return null;let nt=A/I,it=b/I,at=1/I,Ct=U-nt*B,Nt=L-it*B,Et=F-nt*$,At=H-it*$,Z=z-nt*ut,X=j-it*ut,Q=Z*At-X*Et,ct=Ct*X-Nt*Z,xt=Et*Nt-At*Ct;if(s){if(Q<0||ct<0||xt<0)return null}else if((Q<0||ct<0||xt<0)&&(Q>0||ct>0||xt>0))return null;let _t=Q+ct+xt;if(_t===0)return null;let vt=at*(Q*B+ct*$+xt*ut);return(_t>0?vt<0:vt>0)?null:this.at(vt/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},If=new _e,Es=new Cs,_a=new Nn,Pf=new G,va=new G,ba=new G,Ma=new G,_u=new G,Sa=new G,Lf=new G,wa=new G,he=class extends Be{constructor(t=new ce,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(_u.fromBufferAttribute(d,t),o?Sa.addScaledVector(_u,u):Sa.addScaledVector(_u.sub(e),u))}e.add(Sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(_a.containsPoint(Es.origin)===!1&&(Es.intersectSphere(_a,Pf)===null||Es.origin.distanceToSquared(Pf)>(t.far-t.near)**2))&&(If.copy(r).invert(),Es.copy(t.ray).applyMatrix4(If),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,v=S;_<v;_+=3){let E=a.getX(_),A=a.getX(_+1),b=a.getX(_+2);s=Ea(this,m,t,n,l,u,d,E,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),S=a.getX(p+1),_=a.getX(p+2);s=Ea(this,o,t,n,l,u,d,y,S,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,v=S;_<v;_+=3){let E=_,A=_+1,b=_+2;s=Ea(this,m,t,n,l,u,d,E,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,S=p+1,_=p+2;s=Ea(this,o,t,n,l,u,d,y,S,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function D0(i,t,e,n,s,r,o,a){let c;if(t.side===An?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ps,a),c===null)return null;wa.copy(a),wa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(wa);return l<e.near||l>e.far?null:{distance:l,point:wa.clone(),object:i}}function Ea(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,va),i.getVertexPosition(c,ba),i.getVertexPosition(l,Ma);let u=D0(i,t,e,n,va,ba,Ma,Lf);if(u){let d=new G;is.getBarycoord(Lf,va,ba,Ma,d),s&&(u.uv=is.getInterpolatedAttribute(s,a,c,l,d,new Lt)),r&&(u.uv1=is.getInterpolatedAttribute(r,a,c,l,d,new Lt)),o&&(u.normal=is.getInterpolatedAttribute(o,a,c,l,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new G,materialIndex:0};is.getNormal(va,ba,Ma,h.normal),u.face=h,u.barycoord=d}return u}var ho=class extends Tn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=rn,u=rn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ir=new _e,Nf=new _e,Ta=[],Df=new He,U0=new _e,Zr=new he,$r=new Nn,Jn=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,U0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new He),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),Df.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(Df)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),$r.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union($r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),t.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),Nf.multiplyMatrices(n,ir),Zr.matrixWorld=Nf,Zr.raycast(t,Ta);for(let o=0,a=Ta.length;o<a;o++){let c=Ta[o];c.instanceId=r,c.object=this,e.push(c)}Ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ho(new Float32Array(s*this.count),s,this.count,Ic,jn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new Nn,F0=new Lt(.5,.5),Aa=new G,yr=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],S=r[13],_=r[14],v=r[15];if(s[0].setComponents(l-o,f-u,m-g,v-y).normalize(),s[1].setComponents(l+o,f+u,m+g,v+y).normalize(),s[2].setComponents(l+a,f+d,m+x,v+S).normalize(),s[3].setComponents(l-a,f-d,m-x,v-S).normalize(),n)s[4].setComponents(c,h,p,_).normalize(),s[5].setComponents(l-c,f-h,m-p,v-_).normalize();else if(s[4].setComponents(l-c,f-h,m-p,v-_).normalize(),e===ri)s[5].setComponents(l+c,f+h,m+p,v+_).normalize();else if(e===hr)s[5].setComponents(c,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=F0.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Aa.x=s.normal.x>0?t.max.x:t.min.x,Aa.y=s.normal.y>0?t.max.y:t.min.y,Aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _r=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ja=new G,Ka=new G,Uf=new _e,Jr=new Cs,Ra=new Nn,vu=new G,Ff=new G,Qa=class extends Be{constructor(t=new ce,e=new _r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ja.fromBufferAttribute(e,s-1),Ka.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ja.distanceTo(Ka);t.setAttribute("lineDistance",new qt(n,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Uf.copy(s).invert(),Jr.copy(t.ray).applyMatrix4(Uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=u.getX(x),y=u.getX(x+1),S=Ca(this,t,Jr,c,m,y,x);S&&e.push(S)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=Ca(this,t,Jr,c,x,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=Ca(this,t,Jr,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Ca(this,t,Jr,c,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ca(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ja.fromBufferAttribute(a,s),Ka.fromBufferAttribute(a,r),e.distanceSqToSegment(ja,Ka,vu,Ff)>n)return;vu.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(vu);if(!(l<t.near||l>t.far))return{distance:l,point:Ff.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Of=new G,Bf=new G,fo=class extends Qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Of.fromBufferAttribute(e,s),Bf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Of.distanceTo(Bf);t.setAttribute("lineDistance",new qt(n,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Is=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kf=new _e,Pu=new Cs,Ia=new Nn,Pa=new G,vr=class extends Be{constructor(t=new ce,e=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;kf.copy(s).invert(),Pu.copy(t.ray).applyMatrix4(kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,x=f;g<x;g++){let p=l.getX(g);Pa.fromBufferAttribute(d,p),zf(Pa,p,c,s,t,e,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,x=f;g<x;g++)Pa.fromBufferAttribute(d,g),zf(Pa,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zf(i,t,e,n,s,r,o){let a=Pu.distanceSqToPoint(i);if(a<e){let c=new G;Pu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends Tn{constructor(t=[],e=ms,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},br=class extends Tn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rs=class extends Tn{constructor(t,e,n=ci,s,r,o,a=rn,c=rn,l,u=bi,d=1){if(u!==bi&&u!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tc=class extends rs{constructor(t,e=ci,n=ms,s,r,o=rn,a=rn,c,l=bi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Me=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function g(x,p,m,y,S,_,v,E,A,b,I){let U=_/A,L=v/b,B=_/2,F=v/2,H=E/2,$=A+1,z=b+1,j=0,ut=0,nt=new G;for(let it=0;it<z;it++){let at=it*L-F;for(let Ct=0;Ct<$;Ct++){let Nt=Ct*U-B;nt[x]=Nt*y,nt[p]=at*S,nt[m]=H,l.push(nt.x,nt.y,nt.z),nt[x]=0,nt[p]=0,nt[m]=E>0?1:-1,u.push(nt.x,nt.y,nt.z),d.push(Ct/A),d.push(1-it/b),j+=1}}for(let it=0;it<b;it++)for(let at=0;at<A;at++){let Ct=h+at+$*it,Nt=h+at+$*(it+1),Et=h+(at+1)+$*(it+1),At=h+(at+1)+$*it;c.push(Ct,Nt,At),c.push(Nt,Et,At),ut+=6}a.addGroup(f,ut,I),f+=ut,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var yn=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new G,u=new Lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ye=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],p=n/2,m=0;y(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function y(){let _=new G,v=new G,E=0,A=(e-t)/n;for(let b=0;b<=r;b++){let I=[],U=b/r,L=U*(e-t)+t;for(let B=0;B<=s;B++){let F=B/s,H=F*c+a,$=Math.sin(H),z=Math.cos(H);v.x=L*$,v.y=-U*n+p,v.z=L*z,d.push(v.x,v.y,v.z),_.set($,A,z).normalize(),h.push(_.x,_.y,_.z),f.push(F,1-U),I.push(g++)}x.push(I)}for(let b=0;b<s;b++)for(let I=0;I<r;I++){let U=x[I][b],L=x[I+1][b],B=x[I+1][b+1],F=x[I][b+1];(t>0||I!==0)&&(u.push(U,L,F),E+=3),(e>0||I!==r-1)&&(u.push(L,B,F),E+=3)}l.addGroup(m,E,0),m+=E}function S(_){let v=g,E=new Lt,A=new G,b=0,I=_===!0?t:e,U=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*U,0),h.push(0,U,0),f.push(.5,.5),g++;let L=g;for(let B=0;B<=s;B++){let H=B/s*c+a,$=Math.cos(H),z=Math.sin(H);A.x=I*z,A.y=p*U,A.z=I*$,d.push(A.x,A.y,A.z),h.push(0,U,0),E.x=$*.5+.5,E.y=z*.5*U+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){let F=v+B,H=L+B;_===!0?u.push(H,H+1,F):u.push(H+1,H,F),b+=3}l.addGroup(m,b,_===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},go=class i extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ec=class i extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new G,_=new G,v=new G;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],_),f(e[E+2],v),c(S,_,v,y)}function c(y,S,_,v){let E=v+1,A=[];for(let b=0;b<=E;b++){A[b]=[];let I=y.clone().lerp(_,b/E),U=S.clone().lerp(_,b/E),L=E-b;for(let B=0;B<=L;B++)B===0&&b===E?A[b][B]=I:A[b][B]=I.clone().lerp(U,B/L)}for(let b=0;b<E;b++)for(let I=0;I<2*(E-b)-1;I++){let U=Math.floor(I/2);I%2===0?(h(A[b][U+1]),h(A[b+1][U]),h(A[b][U])):(h(A[b][U+1]),h(A[b+1][U+1]),h(A[b+1][U]))}}function l(y){let S=new G;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function u(){let y=new G;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let _=p(y)/2/Math.PI+.5,v=m(y)/Math.PI+.5;o.push(_,1-v)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){let S=o[y+0],_=o[y+2],v=o[y+4],E=Math.max(S,_,v),A=Math.min(S,_,v);E>.9&&A<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,S){let _=y*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){let y=new G,S=new G,_=new G,v=new G,E=new Lt,A=new Lt,b=new Lt;for(let I=0,U=0;I<r.length;I+=9,U+=6){y.set(r[I+0],r[I+1],r[I+2]),S.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),E.set(o[U+0],o[U+1]),A.set(o[U+2],o[U+3]),b.set(o[U+4],o[U+5]),v.copy(y).add(S).add(_).divideScalar(3);let L=p(v);x(E,U+0,y,L),x(A,U+2,S,L),x(b,U+4,_,L)}}function x(y,S,_,v){v<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=v/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},xo=class i extends ec{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Lt:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,c=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends kn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nc=class extends Mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Hf=new G,Gf=new G,bu=new ch,Mu=new ch,Su=new ch,ic=class extends kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Gf.subVectors(s[0],s[1]).add(s[0]),l=Gf);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Hf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Hf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),bu.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,p),Mu.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,p),Su.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(bu.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Mu.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Su.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(bu.calc(c),Mu.calc(c),Su.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function O0(i,t){let e=1-i;return e*e*t}function B0(i,t){return 2*(1-i)*i*t}function k0(i,t){return i*i*t}function to(i,t,e,n){return O0(i,t)+B0(i,e)+k0(i,n)}function z0(i,t){let e=1-i;return e*e*e*t}function H0(i,t){let e=1-i;return 3*e*e*i*t}function G0(i,t){return 3*(1-i)*i*i*t}function V0(i,t){return i*i*i*t}function eo(i,t,e,n,s){return z0(i,t)+H0(i,e)+G0(i,n)+V0(i,s)}var yo=class extends kn{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(eo(t,s.x,r.x,o.x,a.x),eo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sc=class extends kn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(eo(t,s.x,r.x,o.x,a.x),eo(t,s.y,r.y,o.y,a.y),eo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_o=class extends kn{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends kn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends kn{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(to(t,s.x,r.x,o.x),to(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oc=class extends kn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(to(t,s.x,r.x,o.x),to(t,s.y,r.y,o.y),to(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Vf(a,c.x,l.x,u.x,d.x),Vf(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},Lu=Object.freeze({__proto__:null,ArcCurve:nc,CatmullRomCurve3:ic,CubicBezierCurve:yo,CubicBezierCurve3:sc,EllipseCurve:Mr,LineCurve:_o,LineCurve3:rc,QuadraticBezierCurve:vo,QuadraticBezierCurve3:oc,SplineCurve:bo}),ac=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Lu[s.type]().fromJSON(s))}return this}},Ps=class extends ac{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new _o(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new vo(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new yo(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s),new Lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Mr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zn=class extends Ps{constructor(t){super(t),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ps().fromJSON(s))}return this}};function W0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=$0(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,d=c;for(let h=e;h<s;h+=e){let f=i[h],g=i[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Mo(r,o,e,a,c,l,0),o}function Hd(i,t,e,n,s){let r;if(s===ox(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Wf(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Wf(o/n|0,i[o],i[o+1],r);return r&&Sr(r,r.next)&&(wo(r),r=r.next),r}function Ls(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sr(e,e.next)||Ve(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&tx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Y0(i,n,s,r):X0(i)){t.push(c.i,i.i,l.i),wo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=q0(Ls(i),t),Mo(i,t,e,n,s,r,2)):o===2&&Z0(i,t,e,n,s,r):Mo(Ls(i),t,e,n,s,r,1);break}}}function X0(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&jr(s,a,r,c,o,l,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Y0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),x=Math.max(a,c,l),p=Math.max(u,d,h),m=Nu(f,g,t,e,n),y=Nu(x,p,t,e,n),S=i.prevZ,_=i.nextZ;for(;S&&S.z>=m&&_&&_.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&jr(a,u,c,d,l,h,S.x,S.y)&&Ve(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&jr(a,u,c,d,l,h,_.x,_.y)&&Ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&jr(a,u,c,d,l,h,S.x,S.y)&&Ve(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&jr(a,u,c,d,l,h,_.x,_.y)&&Ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function q0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Sr(n,s)&&Vd(n,e,e.next,s)&&So(n,s)&&So(s,n)&&(t.push(n.i,e.i,s.i),wo(e),wo(e.next),e=i=s),e=e.next}while(e!==i);return Ls(e)}function Z0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ix(o,a)){let c=Wd(o,a);o=Ls(o,o.next),c=Ls(c,c.next),Mo(o,t,e,n,s,r,0),Mo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Hd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(nx(l))}s.sort(J0);for(let r=0;r<s.length;r++)e=j0(s[r],e);return e}function J0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function j0(i,t){let e=K0(i,t);if(!e)return t;let n=Wd(e,i);return Ls(n,n.next),Ls(e,e.next)}function K0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Sr(i,e))return e;do{if(Sr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Gd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);So(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Q0(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Q0(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function tx(i,t,e,n){let s=i;do s.z===0&&(s.z=Nu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ex(s)}function ex(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Nu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function nx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function jr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Gd(i,t,e,n,s,r,o,a)}function ix(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!sx(i,t)&&(So(i,t)&&So(t,i)&&rx(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||Sr(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sr(i,t){return i.x===t.x&&i.y===t.y}function Vd(i,t,e,n){let s=Na(Ve(i,t,e)),r=Na(Ve(i,t,n)),o=Na(Ve(e,n,i)),a=Na(Ve(e,n,t));return!!(s!==r&&o!==a||s===0&&La(i,e,t)||r===0&&La(i,n,t)||o===0&&La(e,i,n)||a===0&&La(e,t,n))}function La(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function sx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function So(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function rx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wd(i,t){let e=Du(i.i,i.x,i.y),n=Du(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wf(i,t,e,n){let s=Du(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Du(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ox(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Uu=class{static triangulate(t,e,n=2){return W0(t,e,n)}},Zn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xf(t),Yf(n,t);let o=t.length;e.forEach(Xf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Yf(n,e[c]);let a=Uu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gi=class i extends ce{constructor(t=new zn([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ax,S,_=!1,v,E,A,b;if(m){S=m.getSpacedPoints(u),_=!0,h=!1;let dt=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(u,dt),E=new G,A=new G,b=new G}h||(p=0,f=0,g=0,x=0);let I=a.extractPoints(l),U=I.shape,L=I.holes;if(!Zn.isClockWise(U)){U=U.reverse();for(let dt=0,Mt=L.length;dt<Mt;dt++){let St=L[dt];Zn.isClockWise(St)&&(L[dt]=St.reverse())}}function F(dt){let St=10000000000000001e-36,wt=dt[0];for(let Tt=1;Tt<=dt.length;Tt++){let Ut=Tt%dt.length,Ot=dt[Ut],Wt=Ot.x-wt.x,Ft=Ot.y-wt.y,J=Wt*Wt+Ft*Ft,Kt=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(wt.x),Math.abs(wt.y)),Zt=St*Kt*Kt;if(J<=Zt){dt.splice(Ut,1),Tt--;continue}wt=Ot}}F(U),L.forEach(F);let H=L.length,$=U;for(let dt=0;dt<H;dt++){let Mt=L[dt];U=U.concat(Mt)}function z(dt,Mt,St){return Mt||ae("ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(Mt,St)}let j=U.length;function ut(dt,Mt,St){let wt,Tt,Ut,Ot=dt.x-Mt.x,Wt=dt.y-Mt.y,Ft=St.x-dt.x,J=St.y-dt.y,Kt=Ot*Ot+Wt*Wt,Zt=Ot*J-Wt*Ft;if(Math.abs(Zt)>Number.EPSILON){let O=Math.sqrt(Kt),T=Math.sqrt(Ft*Ft+J*J),st=Mt.x-Wt/O,lt=Mt.y+Ot/O,pt=St.x-J/T,k=St.y+Ft/T,M=((pt-st)*J-(k-lt)*Ft)/(Ot*J-Wt*Ft);wt=st+Ot*M-dt.x,Tt=lt+Wt*M-dt.y;let w=wt*wt+Tt*Tt;if(w<=2)return new Lt(wt,Tt);Ut=Math.sqrt(w/2)}else{let O=!1;Ot>Number.EPSILON?Ft>Number.EPSILON&&(O=!0):Ot<-Number.EPSILON?Ft<-Number.EPSILON&&(O=!0):Math.sign(Wt)===Math.sign(J)&&(O=!0),O?(wt=-Wt,Tt=Ot,Ut=Math.sqrt(Kt)):(wt=Ot,Tt=Wt,Ut=Math.sqrt(Kt/2))}return new Lt(wt/Ut,Tt/Ut)}let nt=[];for(let dt=0,Mt=$.length,St=Mt-1,wt=dt+1;dt<Mt;dt++,St++,wt++)St===Mt&&(St=0),wt===Mt&&(wt=0),nt[dt]=ut($[dt],$[St],$[wt]);let it=[],at,Ct=nt.concat();for(let dt=0,Mt=H;dt<Mt;dt++){let St=L[dt];at=[];for(let wt=0,Tt=St.length,Ut=Tt-1,Ot=wt+1;wt<Tt;wt++,Ut++,Ot++)Ut===Tt&&(Ut=0),Ot===Tt&&(Ot=0),at[wt]=ut(St[wt],St[Ut],St[Ot]);it.push(at),Ct=Ct.concat(at)}let Nt;if(p===0)Nt=Zn.triangulateShape($,L);else{let dt=[],Mt=[];for(let St=0;St<p;St++){let wt=St/p,Tt=f*Math.cos(wt*Math.PI/2),Ut=g*Math.sin(wt*Math.PI/2)+x;for(let Ot=0,Wt=$.length;Ot<Wt;Ot++){let Ft=z($[Ot],nt[Ot],Ut);ct(Ft.x,Ft.y,-Tt),wt===0&&dt.push(Ft)}for(let Ot=0,Wt=H;Ot<Wt;Ot++){let Ft=L[Ot];at=it[Ot];let J=[];for(let Kt=0,Zt=Ft.length;Kt<Zt;Kt++){let O=z(Ft[Kt],at[Kt],Ut);ct(O.x,O.y,-Tt),wt===0&&J.push(O)}wt===0&&Mt.push(J)}}Nt=Zn.triangulateShape(dt,Mt)}let Et=Nt.length,At=g+x;for(let dt=0;dt<j;dt++){let Mt=h?z(U[dt],Ct[dt],At):U[dt];_?(A.copy(v.normals[0]).multiplyScalar(Mt.x),E.copy(v.binormals[0]).multiplyScalar(Mt.y),b.copy(S[0]).add(A).add(E),ct(b.x,b.y,b.z)):ct(Mt.x,Mt.y,0)}for(let dt=1;dt<=u;dt++)for(let Mt=0;Mt<j;Mt++){let St=h?z(U[Mt],Ct[Mt],At):U[Mt];_?(A.copy(v.normals[dt]).multiplyScalar(St.x),E.copy(v.binormals[dt]).multiplyScalar(St.y),b.copy(S[dt]).add(A).add(E),ct(b.x,b.y,b.z)):ct(St.x,St.y,d/u*dt)}for(let dt=p-1;dt>=0;dt--){let Mt=dt/p,St=f*Math.cos(Mt*Math.PI/2),wt=g*Math.sin(Mt*Math.PI/2)+x;for(let Tt=0,Ut=$.length;Tt<Ut;Tt++){let Ot=z($[Tt],nt[Tt],wt);ct(Ot.x,Ot.y,d+St)}for(let Tt=0,Ut=L.length;Tt<Ut;Tt++){let Ot=L[Tt];at=it[Tt];for(let Wt=0,Ft=Ot.length;Wt<Ft;Wt++){let J=z(Ot[Wt],at[Wt],wt);_?ct(J.x,J.y+S[u-1].y,S[u-1].x+St):ct(J.x,J.y,d+St)}}}Z(),X();function Z(){let dt=s.length/3;if(h){let Mt=0,St=j*Mt;for(let wt=0;wt<Et;wt++){let Tt=Nt[wt];xt(Tt[2]+St,Tt[1]+St,Tt[0]+St)}Mt=u+p*2,St=j*Mt;for(let wt=0;wt<Et;wt++){let Tt=Nt[wt];xt(Tt[0]+St,Tt[1]+St,Tt[2]+St)}}else{for(let Mt=0;Mt<Et;Mt++){let St=Nt[Mt];xt(St[2],St[1],St[0])}for(let Mt=0;Mt<Et;Mt++){let St=Nt[Mt];xt(St[0]+j*u,St[1]+j*u,St[2]+j*u)}}n.addGroup(dt,s.length/3-dt,0)}function X(){let dt=s.length/3,Mt=0;Q($,Mt),Mt+=$.length;for(let St=0,wt=L.length;St<wt;St++){let Tt=L[St];Q(Tt,Mt),Mt+=Tt.length}n.addGroup(dt,s.length/3-dt,1)}function Q(dt,Mt){let St=dt.length;for(;--St>=0;){let wt=St,Tt=St-1;Tt<0&&(Tt=dt.length-1);for(let Ut=0,Ot=u+p*2;Ut<Ot;Ut++){let Wt=j*Ut,Ft=j*(Ut+1),J=Mt+wt+Wt,Kt=Mt+Tt+Wt,Zt=Mt+Tt+Ft,O=Mt+wt+Ft;_t(J,Kt,Zt,O)}}}function ct(dt,Mt,St){c.push(dt),c.push(Mt),c.push(St)}function xt(dt,Mt,St){vt(dt),vt(Mt),vt(St);let wt=s.length/3,Tt=y.generateTopUV(n,s,wt-3,wt-2,wt-1);Rt(Tt[0]),Rt(Tt[1]),Rt(Tt[2])}function _t(dt,Mt,St,wt){vt(dt),vt(Mt),vt(wt),vt(Mt),vt(St),vt(wt);let Tt=s.length/3,Ut=y.generateSideWallUV(n,s,Tt-6,Tt-3,Tt-2,Tt-1);Rt(Ut[0]),Rt(Ut[1]),Rt(Ut[3]),Rt(Ut[1]),Rt(Ut[2]),Rt(Ut[3])}function vt(dt){s.push(c[dt*3+0]),s.push(c[dt*3+1]),s.push(c[dt*3+2])}function Rt(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Lu[s.type]().fromJSON(s)),new i(n,t.options)}},ax={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Lt(r,o),new Lt(a,c),new Lt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Lt(o,1-c),new Lt(l,1-d),new Lt(h,1-g),new Lt(x,1-m)]:[new Lt(a,1-c),new Lt(u,1-d),new Lt(f,1-g),new Lt(p,1-m)]}};function cx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Eo=class i extends ce{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,d=new G,h=new Lt,f=new G,g=new G,x=new G,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let S=n+y*u*s,_=Math.sin(S),v=Math.cos(S);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*_,d.y=t[E].y,d.z=t[E].x*v,o.push(d.x,d.y,d.z),h.x=y/e,h.y=E/(t.length-1),a.push(h.x,h.y);let A=c[3*E+0]*_,b=c[3*E+1],I=c[3*E+0]*v;l.push(A,b,I)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let _=S+y*t.length,v=_,E=_+t.length,A=_+t.length+1,b=_+1;r.push(v,E,b),r.push(A,b,E)}this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("uv",new qt(a,2)),this.setAttribute("normal",new qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Vi=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let y=m*h-o;for(let S=0;S<l;S++){let _=S*d-r;g.push(_,-y,0),x.push(0,0,1),p.push(S/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let S=y+l*m,_=y+l*(m+1),v=y+1+l*(m+1),E=y+1+l*m;f.push(S,_,E),f.push(_,v,E)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},To=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],d=t,h=(e-t)/s,f=new G,g=new Lt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let y=m+p,S=y,_=y+n+1,v=y+n+2,E=y+1;a.push(S,_,E),a.push(_,v,E)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},os=class i extends ce{constructor(t=new zn([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function l(u){let d=s.length/3,h=u.extractPoints(e),f=h.shape,g=h.holes;Zn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];Zn.isClockWise(y)===!0&&(g[p]=y.reverse())}let x=Zn.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){let y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=x.length;p<m;p++){let y=x[p],S=y[0]+d,_=y[1]+d,v=y[2]+d;n.push(S,_,v),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return lx(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function lx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Se=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new G,h=new G,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],S=m/n,_=o+S*a,v=t*Math.cos(_),E=Math.sqrt(t*t-v*v),A=0;m===0&&o===0?A=.5/e:m===n&&c===Math.PI&&(A=-.5/e);for(let b=0;b<=e;b++){let I=b/e,U=s+I*r;d.x=-E*Math.cos(U),d.y=v,d.z=E*Math.sin(U),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(I+A,1-S),y.push(l++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let S=u[m][y+1],_=u[m][y],v=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&f.push(S,_,E),(m!==n-1||c<Math.PI)&&f.push(_,v,E)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _n=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new G,f=new G,g=new G;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,S=(s+1)*(x-1)+p,_=(s+1)*x+p;c.push(m,y,_),c.push(y,S,_)}this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ao=class extends ce{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new G,r=new G;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let d=c[l],h=d.start,f=d.count;for(let g=h,x=h+f;g<x;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),y=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),qf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,d=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),qf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new qt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function qf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Zf(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Zf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Zf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ux(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Xo={clone:Os,merge:vn},hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=ux(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},cc=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ke=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var wr=class extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lc=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uc=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var as=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hc=class extends as{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cu:r=t,a=2*e-n;break;case Iu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cu:o=t,c=2*n-e;break;case Iu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,y=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,S=(-1-f)*p+(1.5+f)*x+.5*g,_=f*p-f*x;for(let v=0;v!==a;++v)r[v]=m*o[u+v]+y*o[l+v]+S*o[c+v]+_*o[d+v];return r}},fc=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}},dc=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pc=class extends as{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let h=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=f*h+g*2,y=d[m],S=d[m+1],_=t*h+g*2,v=u[_],E=u[_+1],A=px(n,e,y,v,s);r[g]=Xd(A,x,S,E,p)}return r}};function Xd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function dx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function px(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Xd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=dx(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sr(e,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sr(t.times,Array),values:sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),wu(t.settings)&&(n.settings={inTangents:sr(t.settings.inTangents,Array),outTangents:sr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case qa:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break;case Au:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ie("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return Au}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;wu(this.settings)&&($f(this.settings.inTangents,t),$f(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ae("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ae("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ae("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ae("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&e0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ae("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,wu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $f(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=qa;var cs=class extends Hn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=no;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};mc.prototype.ValueTypeName="color";var gc=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};gc.prototype.ValueTypeName="number";var xc=class extends as{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)on.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ro=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xc(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Hn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=no;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Hn{constructor(t,e,n,s){super(t,e,n,s)}};yc.prototype.ValueTypeName="vector";var _c=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yd=new _c,vc=class{constructor(t){this.manager=t!==void 0?t:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ns=class extends Er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Eu=new _e,Jf=new G,jf=new G,Co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jf),jf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Eu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===hr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Eu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Da=new G,Ua=new on,yi=new G,Io=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Da,Ua,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Ua,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Da,Ua,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Da,Ua,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new G,Kf=new Lt,Qf=new Lt,En=class extends Io{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,Kf,Qf),e.subVectors(Qf,Kf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fu=class extends Co{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},Po=class extends Er{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},us=class extends Io{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ou=class extends Co{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends Er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Ou}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Lo=class extends ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var rr=-90,or=1,bc=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(rr,or,t,e);s.layers=this.layers,this.add(s);let r=new En(rr,or,t,e);r.layers=this.layers,this.add(r);let o=new En(rr,or,t,e);o.layers=this.layers,this.add(o);let a=new En(rr,or,t,e);a.layers=this.layers,this.add(a);let c=new En(rr,or,t,e);c.layers=this.layers,this.add(c);let l=new En(rr,or,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Mc=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var uh="\\[\\]\\.:\\/",mx=new RegExp("["+uh+"]","g"),hh="[^"+uh+"]",gx="[^"+uh.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",hh),yx=/(WCOD+)?/.source.replace("WCOD",gx),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),bx=new RegExp("^"+xx+yx+_x+vx+"$"),Mx=["material","materials","bones","map"],Bu=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(t){let e=bx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ae("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ae("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ae("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ae("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ae("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ae("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ae("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ae("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Bu;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vw=new Float32Array(1);var fs=class extends uo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var td=new _e,ds=class{constructor(t,e,n=0,s=1/0){this.ray=new Cs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return td.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(td),this}intersectObject(t,e=!0,n=[]){return ku(t,this,n,e),n.sort(ed),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ku(t[s],this,n,e);return n.sort(ed),n}};function ed(i,t){return i.distance-t.distance}function ku(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ku(r[o],t,e,!0)}}var zu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var nd=new G,Fa=new G,ar=new G,cr=new G,Tu=new G,Sx=new G,wx=new G,No=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){nd.subVectors(t,this.start),Fa.subVectors(this.end,this.start);let n=Fa.dot(Fa);if(n===0)return 0;let r=Fa.dot(nd)/n;return e&&(r=le(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Sx,n=wx){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;ar.subVectors(l,a),cr.subVectors(u,c),Tu.subVectors(a,c);let d=ar.dot(ar),h=cr.dot(cr),f=cr.dot(Tu);if(d<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(d<=s)r=0,o=f/h,o=le(o,0,1);else{let g=ar.dot(Tu);if(h<=s)o=0,r=le(-g/d,0,1);else{let x=ar.dot(cr),p=d*h-x*x;p!==0?r=le((x*f-g*h)/p,0,1):r=0,o=(x*r+f)/h,o<0?(o=0,r=le(-g/d,0,1)):o>1&&(o=1,r=le((x-g)/d,0,1))}}return e.copy(a).addScaledVector(ar,r),n.copy(c).addScaledVector(cr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function fh(i,t,e,n){let s=Ex(n);switch(e){case ih:return i*t;case Ic:return i*t/s.components*s.byteLength;case Pc:return i*t/s.components*s.byteLength;case ys:return i*t*2/s.components*s.byteLength;case Lc:return i*t*2/s.components*s.byteLength;case sh:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case Nc:return i*t*4/s.components*s.byteLength;case Bo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uc:case Oc:return Math.max(i,16)*Math.max(t,8)/4;case Dc:case Fc:return Math.max(i,8)*Math.max(t,8)/2;case Bc:case kc:case Hc:case Gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zc:case Go:case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $c:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sl:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case al:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vo:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ex(i){switch(i){case Dn:case Qu:return{byteLength:1,components:1};case Rr:case th:case li:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case ci:case Ac:case jn:return{byteLength:4,components:1};case eh:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pp(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ix(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
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
#endif`,Nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
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
#endif`,Bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
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
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Xx=`#ifdef USE_BUMPMAP
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ty=`#define PI 3.141592653589793
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
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ny=`vec3 transformedNormal = objectNormal;
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
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
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
}`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sy=`#ifdef USE_ENVMAP
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
#endif`,wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
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
#endif`,Cy=`uniform sampler2D dfgLUT;
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
}`,Iy=`
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ny=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,By=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hy=`#if defined( USE_POINTS_UV )
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
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t_=`#ifdef USE_NORMALMAP
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
#endif`,e_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g_=`float getShadowMask() {
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
}`,x_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y_=`#ifdef USE_SKINNING
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
#endif`,__=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,b_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#ifdef USE_TRANSMISSION
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L_=`uniform sampler2D t2D;
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
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`#include <common>
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
}`,B_=`#if DEPTH_PACKING == 3200
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
}`,k_=`#define DISTANCE
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
}`,z_=`#define DISTANCE
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#include <common>
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
}`,Y_=`uniform vec3 diffuse;
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
}`,q_=`#define LAMBERT
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
}`,Z_=`#define LAMBERT
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
}`,$_=`#define MATCAP
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
}`,J_=`#define MATCAP
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
}`,j_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,Q_=`#define PHONG
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
}`,tv=`#define PHONG
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
}`,ev=`#define STANDARD
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
}`,nv=`#define STANDARD
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
}`,iv=`#define TOON
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
}`,sv=`#define TOON
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
}`,rv=`uniform float size;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,cv=`uniform vec3 color;
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
}`,lv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Px,alphahash_pars_fragment:Lx,alphamap_fragment:Nx,alphamap_pars_fragment:Dx,alphatest_fragment:Ux,alphatest_pars_fragment:Fx,aomap_fragment:Ox,aomap_pars_fragment:Bx,batching_pars_vertex:kx,batching_vertex:zx,begin_vertex:Hx,beginnormal_vertex:Gx,bsdfs:Vx,iridescence_fragment:Wx,bumpmap_pars_fragment:Xx,clipping_planes_fragment:Yx,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Zx,clipping_planes_vertex:$x,color_fragment:Jx,color_pars_fragment:jx,color_pars_vertex:Kx,color_vertex:Qx,common:ty,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ny,displacementmap_pars_vertex:iy,displacementmap_vertex:sy,emissivemap_fragment:ry,emissivemap_pars_fragment:oy,colorspace_fragment:ay,colorspace_pars_fragment:cy,envmap_fragment:ly,envmap_common_pars_fragment:uy,envmap_pars_fragment:hy,envmap_pars_vertex:fy,envmap_physical_pars_fragment:Sy,envmap_vertex:dy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:gy,fog_pars_fragment:xy,gradientmap_pars_fragment:yy,lightmap_pars_fragment:_y,lights_lambert_fragment:vy,lights_lambert_pars_fragment:by,lights_pars_begin:My,lights_toon_fragment:wy,lights_toon_pars_fragment:Ey,lights_phong_fragment:Ty,lights_phong_pars_fragment:Ay,lights_physical_fragment:Ry,lights_physical_pars_fragment:Cy,lights_fragment_begin:Iy,lights_fragment_maps:Py,lights_fragment_end:Ly,lightprobes_pars_fragment:Ny,logdepthbuf_fragment:Dy,logdepthbuf_pars_fragment:Uy,logdepthbuf_pars_vertex:Fy,logdepthbuf_vertex:Oy,map_fragment:By,map_pars_fragment:ky,map_particle_fragment:zy,map_particle_pars_fragment:Hy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:Vy,morphinstance_vertex:Wy,morphcolor_vertex:Xy,morphnormal_vertex:Yy,morphtarget_pars_vertex:qy,morphtarget_vertex:Zy,normal_fragment_begin:$y,normal_fragment_maps:Jy,normal_pars_fragment:jy,normal_pars_vertex:Ky,normal_vertex:Qy,normalmap_pars_fragment:t_,clearcoat_normal_fragment_begin:e_,clearcoat_normal_fragment_maps:n_,clearcoat_pars_fragment:i_,iridescence_pars_fragment:s_,opaque_fragment:r_,packing:o_,premultiplied_alpha_fragment:a_,project_vertex:c_,dithering_fragment:l_,dithering_pars_fragment:u_,roughnessmap_fragment:h_,roughnessmap_pars_fragment:f_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:p_,shadowmap_vertex:m_,shadowmask_pars_fragment:g_,skinbase_vertex:x_,skinning_pars_vertex:y_,skinning_vertex:__,skinnormal_vertex:v_,specularmap_fragment:b_,specularmap_pars_fragment:M_,tonemapping_fragment:S_,tonemapping_pars_fragment:w_,transmission_fragment:E_,transmission_pars_fragment:T_,uv_pars_fragment:A_,uv_pars_vertex:R_,uv_vertex:C_,worldpos_vertex:I_,background_vert:P_,background_frag:L_,backgroundCube_vert:N_,backgroundCube_frag:D_,cube_vert:U_,cube_frag:F_,depth_vert:O_,depth_frag:B_,distance_vert:k_,distance_frag:z_,equirect_vert:H_,equirect_frag:G_,linedashed_vert:V_,linedashed_frag:W_,meshbasic_vert:X_,meshbasic_frag:Y_,meshlambert_vert:q_,meshlambert_frag:Z_,meshmatcap_vert:$_,meshmatcap_frag:J_,meshnormal_vert:j_,meshnormal_frag:K_,meshphong_vert:Q_,meshphong_frag:tv,meshphysical_vert:ev,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:sv,points_vert:rv,points_frag:ov,shadow_vert:av,shadow_frag:cv,sprite_vert:lv,sprite_frag:uv},Bt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Cn={basic:{uniforms:vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:vn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:vn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:vn([Bt.points,Bt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:vn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:vn([Bt.common,Bt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:vn([Bt.sprite,Bt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:vn([Bt.common,Bt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:vn([Bt.lights,Bt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Cn.physical={uniforms:vn([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var fl={r:0,b:0,g:0},hv=new _e,mp=new ue;mp.set(-1,0,0,0,1,0,0,0,1);function fv(i,t,e,n,s,r){let o=new Xt(0),a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=t.get(S,_)}return S}function g(y){let S=!1,_=f(y);_===null?p(o,a):_&&_.isColor&&(p(_,1),S=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===Fo)?(l===void 0&&(l=new he(new Me(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Os(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hv.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(mp),l.material.toneMapped=xe.getTransfer(_.colorSpace)!==Te,(u!==_||d!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new he(new Vi(2,2),new Ze({name:"BackgroundMaterial",uniforms:Os(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=xe.getTransfer(_.colorSpace)!==Te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(fl,lh(i)),e.buffers.color.setClear(fl.r,fl.g,fl.b,S,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:x,dispose:m}}function dv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(L,B,F,H,$){let z=!1,j=d(L,H,F,B);r!==j&&(r=j,l(r.object)),z=f(L,H,F,$),z&&g(L,H,F,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(L,B,F,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,B,F,H){let $=H.wireframe===!0,z=n[B.id];z===void 0&&(z={},n[B.id]=z);let j=L.isInstancedMesh===!0?L.id:0,ut=z[j];ut===void 0&&(ut={},z[j]=ut);let nt=ut[F.id];nt===void 0&&(nt={},ut[F.id]=nt);let it=nt[$];return it===void 0&&(it=h(c()),nt[$]=it),it}function h(L){let B=[],F=[],H=[];for(let $=0;$<e;$++)B[$]=0,F[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:H,object:L,attributes:{},index:null}}function f(L,B,F,H){let $=r.attributes,z=B.attributes,j=0,ut=F.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let at=$[nt],Ct=z[nt];if(Ct===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),at===void 0||at.attribute!==Ct||Ct&&at.data!==Ct.data)return!0;j++}return r.attributesNum!==j||r.index!==H}function g(L,B,F,H){let $={},z=B.attributes,j=0,ut=F.getAttributes();for(let nt in ut)if(ut[nt].location>=0){let at=z[nt];at===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(at=L.instanceColor));let Ct={};Ct.attribute=at,at&&at.data&&(Ct.data=at.data),$[nt]=Ct,j++}r.attributes=$,r.attributesNum=j,r.index=H}function x(){let L=r.newAttributes;for(let B=0,F=L.length;B<F;B++)L[B]=0}function p(L){m(L,0)}function m(L,B){let F=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;F[L]=1,H[L]===0&&(i.enableVertexAttribArray(L),H[L]=1),$[L]!==B&&(i.vertexAttribDivisor(L,B),$[L]=B)}function y(){let L=r.newAttributes,B=r.enabledAttributes;for(let F=0,H=B.length;F<H;F++)B[F]!==L[F]&&(i.disableVertexAttribArray(F),B[F]=0)}function S(L,B,F,H,$,z,j){j===!0?i.vertexAttribIPointer(L,B,F,$,z):i.vertexAttribPointer(L,B,F,H,$,z)}function _(L,B,F,H){x();let $=H.attributes,z=F.getAttributes(),j=B.defaultAttributeValues;for(let ut in z){let nt=z[ut];if(nt.location>=0){let it=$[ut];if(it===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(it=L.instanceColor)),it!==void 0){let at=it.normalized,Ct=it.itemSize,Nt=t.get(it);if(Nt===void 0)continue;let Et=Nt.buffer,At=Nt.type,Z=Nt.bytesPerElement,X=At===i.INT||At===i.UNSIGNED_INT||it.gpuType===Ac;if(it.isInterleavedBufferAttribute){let Q=it.data,ct=Q.stride,xt=it.offset;if(Q.isInstancedInterleavedBuffer){for(let _t=0;_t<nt.locationSize;_t++)m(nt.location+_t,Q.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<nt.locationSize;_t++)p(nt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let _t=0;_t<nt.locationSize;_t++)S(nt.location+_t,Ct/nt.locationSize,At,at,ct*Z,(xt+Ct/nt.locationSize*_t)*Z,X)}else{if(it.isInstancedBufferAttribute){for(let Q=0;Q<nt.locationSize;Q++)m(nt.location+Q,it.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Q=0;Q<nt.locationSize;Q++)p(nt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Q=0;Q<nt.locationSize;Q++)S(nt.location+Q,Ct/nt.locationSize,At,at,Ct*Z,Ct/nt.locationSize*Q*Z,X)}}else if(j!==void 0){let at=j[ut];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(nt.location,at);break;case 3:i.vertexAttrib3fv(nt.location,at);break;case 4:i.vertexAttrib4fv(nt.location,at);break;default:i.vertexAttrib1fv(nt.location,at)}}}}y()}function v(){I();for(let L in n){let B=n[L];for(let F in B){let H=B[F];for(let $ in H){let z=H[$];for(let j in z)u(z[j].object),delete z[j];delete H[$]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let F in B){let H=B[F];for(let $ in H){let z=H[$];for(let j in z)u(z[j].object),delete z[j];delete H[$]}}delete n[L.id]}function A(L){for(let B in n){let F=n[B];for(let H in F){let $=F[H];if($[L.id]===void 0)continue;let z=$[L.id];for(let j in z)u(z[j].object),delete z[j];delete $[L.id]}}}function b(L){for(let B in n){let F=n[B],H=L.isInstancedMesh===!0?L.id:0,$=F[H];if($!==void 0){for(let z in $){let j=$[z];for(let ut in j)u(j[ut].object),delete j[ut];delete $[z]}delete F[H],Object.keys(F).length===0&&delete n[B]}}}function I(){U(),o=!0,r!==s&&(r=s,l(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:U,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function pv(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function mv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Dn&&A!==jn&&!b&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(ie("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:v,samples:E}}function gv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Bn,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let y=r?0:n,S=y*4,_=m.clippingState||null;c.value=_,_=u(g,h,S,f);for(let v=0;v!==S;++v)_[v]=e[v];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,_=f;S!==x;++S,_+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Pr=4,xv=6,yv=20,_v=256,Yo=new us,qd=new Xt,dh=null,ph=0,mh=0,gh=!1,vv=new G,Bs=new G,pl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=vv}=r;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:li,format:Kn,colorSpace:io,depthBuffer:!1},s=Zd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bv(r)),this._blurMaterial=Sv(r,t,e),this._ggxMaterial=Mv(r,t,e)}return s}_compileMaterial(t){let e=new he(new ce,t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,s,r){let c=new En(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qd),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new Me,new Ge({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(qd),m=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));let v=this._cubeSize;Ir(s,_*v,S>2?v:0,v,v),d.setRenderTarget(s),m&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ms||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-Pr?n-g+Pr:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Ir(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Yo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Ir(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(a,Yo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Pr?s-this._lodMax+Pr:0),h=4*(this._cubeSize-u);Ir(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Yo)}};function bv(i){let t=[],e=[],n=i,s=i-Pr+1+xv;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let m=0;m<d;m++){let y=m%3*2/3-1,S=m>2?0:-1,_=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];g.set(_,f*h*m);for(let v=0;v<h;v++){let E=u[v*2]*2-1,A=u[v*2+1]*2-1;m===0?Bs.set(1,A,E):m===1?Bs.set(-E,1,-A):m===2?Bs.set(-E,A,1):m===3?Bs.set(-1,A,-E):m===4?Bs.set(-E,-1,A):Bs.set(E,A,-1),Bs.toArray(x,(m*h+v)*f)}}let p=new ce;p.setAttribute("position",new be(g,f)),p.setAttribute("outputDirection",new be(x,f)),e.push(new he(p,null)),n>Pr&&n--}return{lodMeshes:e,sizeLods:t}}function Zd(i,t,e){let n=new Ln(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mv(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Sv(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:yv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function $d(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Jd(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ml=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:wi});r.uniforms.tEquirect.value=e;let o=new he(s,r),a=e.minFilter;return e.minFilter===gs&&(e.minFilter=cn),new bc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function wv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===wc||f===Ec)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new ml(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===wc||f===Ec,x=f===ms||f===Fs;if(g||x){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new pl(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return g&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new pl(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===wc?h.mapping=ms:f===Ec&&(h.mapping=Fs),h}function c(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ev(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function Tv(i,t,e,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let S=0,_=y.length;S<_;S+=3){let v=y[S+0],E=y[S+1],A=y[S+2];h.push(v,E,E,A,A,v)}}else{let y=g.array;x=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let v=S+0,E=S+1,A=S+2;h.push(v,E,E,A,A,v)}}let p=new(g.count>=65535?lo:co)(h,1);p.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Av(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Rv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cv(i,t,e){let n=new WeakMap,s=new Ae;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let I=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,v=1;_>t.maxTextureSize&&(v=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*v*4*d),A=new ao(E,_,v,d);A.type=jn,A.needsUpdate=!0;let b=S*4;for(let U=0;U<d;U++){let L=p[U],B=m[U],F=y[U],H=_*v*4*U;for(let $=0;$<L.count;$++){let z=$*b;f===!0&&(s.fromBufferAttribute(L,$),E[H+z+0]=s.x,E[H+z+1]=s.y,E[H+z+2]=s.z,E[H+z+3]=0),g===!0&&(s.fromBufferAttribute(B,$),E[H+z+4]=s.x,E[H+z+5]=s.y,E[H+z+6]=s.z,E[H+z+7]=0),x===!0&&(s.fromBufferAttribute(F,$),E[H+z+8]=s.x,E[H+z+9]=s.y,E[H+z+10]=s.z,E[H+z+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new Lt(_,v)},n.set(a,h),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Iv(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Pv={[Yu]:"LINEAR_TONE_MAPPING",[qu]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[Ju]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[$u]:"CUSTOM_TONE_MAPPING"};function Lv(i,t,e,n,s,r){let o=new Ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ce;l.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qt([0,2,0,0,2,0],2));let u=new cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new he(l,u),h=new us(-1,1,1,-1,0,1),f=null,g=null,x=!1,p,m=null,y=[],S=!1;this.setSize=function(_,v){o.setSize(_,v),a!==null&&a.setSize(_,v),c!==null&&c.setSize(_,v);for(let E=0;E<y.length;E++){let A=y[E];A.setSize&&A.setSize(_,v)}},this.setEffects=function(_){y=_,S=y.length>0&&y[0].isRenderPass===!0;let v=o.width,E=o.height;y.length>0&&a===null&&(a=new Ln(v,E,{type:li,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(v,E,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let b=y[A];b.setSize&&b.setSize(v,E)}},this.begin=function(_,v){if(x||_.toneMapping===ai&&y.length===0)return!1;if(m=v,v!==null){let E=v.width,A=v.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return S===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=ai,!0},this.hasRenderPass=function(){return S},this.end=function(_,v){_.toneMapping=p,x=!0;let E=o,A=a;for(let b=0;b<y.length;b++){let I=y[b];I.enabled!==!1&&(I.render(_,A,E,v),I.needsSwap!==!1&&(E=A,A=A===a?c:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,u.defines={},xe.getTransfer(f)===Te&&(u.defines.SRGB_TRANSFER="");let b=Pv[g];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(m),_.render(d,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var gp=new Tn,_h=new rs(1,1),xp=new ao,yp=new Ja,_p=new po,jd=[],Kd=[],Qd=new Float32Array(16),tp=new Float32Array(9),ep=new Float32Array(4);function Nr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=jd[s];if(r===void 0&&(r=new Float32Array(s),jd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yl(i,t){let e=Kd[t];e===void 0&&(e=new Int32Array(t),Kd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function Fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function Ov(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;ep.set(n),i.uniformMatrix2fv(this.addr,!1,ep),Qe(e,n)}}function Bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;tp.set(n),i.uniformMatrix3fv(this.addr,!1,tp),Qe(e,n)}}function kv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,n))return;Qd.set(n),i.uniformMatrix4fv(this.addr,!1,Qd),Qe(e,n)}}function zv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function Wv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function Yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Zv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=e.isReversedDepthBuffer()?hl:ul,r=_h):r=gp,e.setTexture2D(t||r,s)}function $v(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yp,s)}function Jv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_p,s)}function jv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xp,s)}function Kv(i){switch(i){case 5126:return Nv;case 35664:return Dv;case 35665:return Uv;case 35666:return Fv;case 35674:return Ov;case 35675:return Bv;case 35676:return kv;case 5124:case 35670:return zv;case 35667:case 35671:return Hv;case 35668:case 35672:return Gv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return Yv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return jv}}function Qv(i,t){i.uniform1fv(this.addr,t)}function tb(i,t){let e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function eb(i,t){let e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function nb(i,t){let e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function ib(i,t){let e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sb(i,t){let e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function rb(i,t){let e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ob(i,t){i.uniform1iv(this.addr,t)}function ab(i,t){i.uniform2iv(this.addr,t)}function cb(i,t){i.uniform3iv(this.addr,t)}function lb(i,t){i.uniform4iv(this.addr,t)}function ub(i,t){i.uniform1uiv(this.addr,t)}function hb(i,t){i.uniform2uiv(this.addr,t)}function fb(i,t){i.uniform3uiv(this.addr,t)}function db(i,t){i.uniform4uiv(this.addr,t)}function pb(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_h:o=gp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function mb(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yp,r[o])}function gb(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_p,r[o])}function xb(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xp,r[o])}function yb(i){switch(i){case 5126:return Qv;case 35664:return tb;case 35665:return eb;case 35666:return nb;case 35674:return ib;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return ab;case 35668:case 35672:return cb;case 35669:case 35673:return lb;case 5125:return ub;case 36294:return hb;case 36295:return fb;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return pb;case 35679:case 36299:case 36307:return mb;case 35680:case 36300:case 36308:case 36293:return gb;case 36289:case 36303:case 36311:case 36292:return xb}}var vh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kv(e.type)}},bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yb(e.type)}},Mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function np(i,t){i.seq.push(t),i.map[t.id]=t}function _b(i,t,e){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),o=xh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){np(e,l===void 0?new vh(a,i,t):new bh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Mh(a),np(e,d)),e=d}}}var Lr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);_b(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ip(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vb=37297,bb=0;function Mb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sp=new ue;function Sb(i){xe._getMatrix(sp,xe.workingColorSpace,i);let t=`mat3( ${sp.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case so:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Mb(i.getShaderSource(t),a)}else return r}function wb(i,t){let e=Sb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Eb={[Yu]:"Linear",[qu]:"Reinhard",[Zu]:"Cineon",[Uo]:"ACESFilmic",[Ju]:"AgX",[ju]:"Neutral",[$u]:"Custom"};function Tb(i,t){let e=Eb[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dl=new G;function Ab(){xe.getLuminanceCoefficients(dl);let i=dl.x.toFixed(4),t=dl.y.toFixed(4),e=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function Cb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ib(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zo(i){return i!==""}function op(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ap(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(i){return i.replace(Pb,Nb)}var Lb=new Map;function Nb(i,t){let e=de[t];if(e===void 0){let n=Lb.get(t);if(n!==void 0)e=de[n],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Sh(e)}var Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cp(i){return i.replace(Db,Ub)}function Ub(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Fb={[Ds]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function Ob(i){return Fb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Bb={[ms]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Fo]:"ENVMAP_TYPE_CUBE_UV"};function kb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Bb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zb={[Fs]:"ENVMAP_MODE_REFRACTION"};function Hb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gb={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[wd]:"ENVMAP_BLENDING_MIX",[Ed]:"ENVMAP_BLENDING_ADD"};function Vb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gb[i.combine]||"ENVMAP_BLENDING_NONE"}function Wb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xb(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ob(e),l=kb(e),u=Hb(e),d=Vb(e),h=Wb(e),f=Rb(e),g=Cb(r),x=s.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`)):(p=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),m=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?de.tonemapping_pars_fragment:"",e.toneMapping!==ai?Tb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,wb("linearToOutputTexel",e.outputColorSpace),Ab(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),o=Sh(o),o=op(o,e),o=ap(o,e),a=Sh(a),a=op(a,e),a=ap(a,e),o=cp(o),a=cp(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+p+o,_=y+m+a,v=ip(s,s.VERTEX_SHADER,S),E=ip(s,s.FRAGMENT_SHADER,_);s.attachShader(x,v),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(v)||"",H=s.getShaderInfoLog(E)||"",$=B.trim(),z=F.trim(),j=H.trim(),ut=!0,nt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,E);else{let it=rp(s,v,"vertex"),at=rp(s,E,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+it+`
`+at)}else $!==""?ie("WebGLProgram: Program Info Log:",$):(z===""||j==="")&&(nt=!1);nt&&(L.diagnostics={runnable:ut,programLog:$,vertexShader:{log:z,prefix:p},fragmentShader:{log:j,prefix:m}})}s.deleteShader(v),s.deleteShader(E),b=new Lr(s,x),I=Ib(s,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let I;this.getAttributes=function(){return I===void 0&&A(this),I};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,vb)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=E,this}var Yb=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Eh(t),e.set(t,n)),n}},Eh=class{constructor(t){this.id=Yb++,this.code=t,this.usedTimes=0}};function qb(i){return i===ys||i===Go||i===Vo}function Zb(i,t,e,n,s,r){let o=new mr,a=new wh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,I,U,L,B,F){let H=L.fog,$=B.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?L.environment:null,j=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ut=t.get(b.envMap||z,j),nt=ut&&ut.mapping===Fo?ut.image.height:null,it=f[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&ie("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let at=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ct=at!==void 0?at.length:0,Nt=0;$.morphAttributes.position!==void 0&&(Nt=1),$.morphAttributes.normal!==void 0&&(Nt=2),$.morphAttributes.color!==void 0&&(Nt=3);let Et,At,Z,X;if(it){let ne=Cn[it];Et=ne.vertexShader,At=ne.fragmentShader}else{Et=b.vertexShader,At=b.fragmentShader;let ne=a.getVertexShaderStage(b),Ht=a.getFragmentShaderStage(b);a.update(b,ne,Ht),Z=ne.id,X=Ht.id}let Q=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),xt=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,vt=!!b.map,Rt=!!b.matcap,dt=!!ut,Mt=!!b.aoMap,St=!!b.lightMap,wt=!!b.bumpMap&&b.wireframe===!1,Tt=!!b.normalMap,Ut=!!b.displacementMap,Ot=!!b.emissiveMap,Wt=!!b.metalnessMap,Ft=!!b.roughnessMap,J=b.anisotropy>0,Kt=b.clearcoat>0,Zt=b.dispersion>0,O=b.retroreflectivity>0,T=b.iridescence>0,st=b.sheen>0,lt=b.transmission>0,pt=J&&!!b.anisotropyMap,k=Kt&&!!b.clearcoatMap,M=Kt&&!!b.clearcoatNormalMap,w=Kt&&!!b.clearcoatRoughnessMap,R=T&&!!b.iridescenceMap,D=T&&!!b.iridescenceThicknessMap,N=st&&!!b.sheenColorMap,V=st&&!!b.sheenRoughnessMap,Y=!!b.specularMap,rt=!!b.specularColorMap,W=!!b.specularIntensityMap,ot=lt&&!!b.transmissionMap,C=lt&&!!b.thicknessMap,K=!!b.gradientMap,q=!!b.alphaMap,mt=b.alphaTest>0,bt=!!b.alphaHash,gt=!!b.extensions,It=ai;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(It=i.toneMapping);let Dt={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:At,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:xt,instancingColor:xt&&B.instanceColor!==null,instancingMorph:xt&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:Rt,envMap:dt,envMapMode:dt&&ut.mapping,envMapCubeUVHeight:nt,aoMap:Mt,lightMap:St,bumpMap:wt,normalMap:Tt,displacementMap:Ut,emissiveMap:Ot,normalMapObjectSpace:Tt&&b.normalMapType===Rd,normalMapTangentSpace:Tt&&b.normalMapType===Wo,packedNormalMap:Tt&&b.normalMapType===Wo&&qb(b.normalMap.format),metalnessMap:Wt,roughnessMap:Ft,anisotropy:J,anisotropyMap:pt,clearcoat:Kt,clearcoatMap:k,clearcoatNormalMap:M,clearcoatRoughnessMap:w,dispersion:Zt,retroreflection:O,iridescence:T,iridescenceMap:R,iridescenceThicknessMap:D,sheen:st,sheenColorMap:N,sheenRoughnessMap:V,specularMap:Y,specularColorMap:rt,specularIntensityMap:W,transmission:lt,transmissionMap:ot,thicknessMap:C,gradientMap:K,opaque:b.transparent===!1&&b.blending===Ar&&b.alphaToCoverage===!1,alphaMap:q,alphaTest:mt,alphaHash:bt,combine:b.combine,mapUv:vt&&g(b.map.channel),aoMapUv:Mt&&g(b.aoMap.channel),lightMapUv:St&&g(b.lightMap.channel),bumpMapUv:wt&&g(b.bumpMap.channel),normalMapUv:Tt&&g(b.normalMap.channel),displacementMapUv:Ut&&g(b.displacementMap.channel),emissiveMapUv:Ot&&g(b.emissiveMap.channel),metalnessMapUv:Wt&&g(b.metalnessMap.channel),roughnessMapUv:Ft&&g(b.roughnessMap.channel),anisotropyMapUv:pt&&g(b.anisotropyMap.channel),clearcoatMapUv:k&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:M&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:w&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:D&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:N&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(b.sheenRoughnessMap.channel),specularMapUv:Y&&g(b.specularMap.channel),specularColorMapUv:rt&&g(b.specularColorMap.channel),specularIntensityMapUv:W&&g(b.specularIntensityMap.channel),transmissionMapUv:ot&&g(b.transmissionMap.channel),thicknessMapUv:C&&g(b.thicknessMap.channel),alphaMapUv:q&&g(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Tt||J),vertexNormals:!!$.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(vt||q),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||$.attributes.normal===void 0&&Tt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Nt,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&xe.getTransfer(b.map.colorSpace)===Te,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&xe.getTransfer(b.emissiveMap.colorSpace)===Te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ln,flipSided:b.side===An,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:gt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&b.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(b){let I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)I.push(U),I.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(m(I,b),y(I,b),I.push(i.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function m(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numSunLights),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numSunLightShadows),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function y(b,I){o.disableAll(),I.instancing&&o.enable(0),I.instancingColor&&o.enable(1),I.instancingMorph&&o.enable(2),I.matcap&&o.enable(3),I.envMap&&o.enable(4),I.normalMapObjectSpace&&o.enable(5),I.normalMapTangentSpace&&o.enable(6),I.clearcoat&&o.enable(7),I.iridescence&&o.enable(8),I.alphaTest&&o.enable(9),I.vertexColors&&o.enable(10),I.vertexAlphas&&o.enable(11),I.vertexUv1s&&o.enable(12),I.vertexUv2s&&o.enable(13),I.vertexUv3s&&o.enable(14),I.vertexTangents&&o.enable(15),I.anisotropy&&o.enable(16),I.alphaHash&&o.enable(17),I.batching&&o.enable(18),I.dispersion&&o.enable(19),I.retroreflection&&o.enable(24),I.batchingColor&&o.enable(20),I.gradientMap&&o.enable(21),I.packedNormalMap&&o.enable(22),I.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.reversedDepthBuffer&&o.enable(4),I.skinning&&o.enable(5),I.morphTargets&&o.enable(6),I.morphNormals&&o.enable(7),I.morphColors&&o.enable(8),I.premultipliedAlpha&&o.enable(9),I.shadowMapEnabled&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.decodeVideoTextureEmissive&&o.enable(20),I.alphaToCoverage&&o.enable(21),I.numLightProbeGrids>0&&o.enable(22),I.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function S(b){let I=f[b.type],U;if(I){let L=Cn[I];U=Xo.clone(L.uniforms)}else U=b.uniforms;return U}function _(b,I){let U=u.get(I);return U!==void 0?++U.usedTimes:(U=new Xb(i,I,b,s),l.push(U),u.set(I,U)),U}function v(b){if(--b.usedTimes===0){let I=l.indexOf(b);l[I]=l[l.length-1],l.pop(),u.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:S,acquireProgram:_,releaseProgram:v,releaseShaderCache:E,programs:l,dispose:A}}function $b(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function up(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,x,p,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=p,y.group=m),t++,y}function c(h,f,g,x,p,m,y){y.reversedDepth===!0&&(p=-p);let S=a(h,f,g,x,p,m);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function l(h,f,g,x,p,m){let y=a(h,f,g,x,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||Jb),n.length>1&&n.sort(f||up),s.length>1&&s.sort(f||up)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function jb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new hp,i.set(n,[o])):s>=r.length?(o=new hp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Xt};break;case"SpotLight":e={position:new G,direction:new G,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Qb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var t1=0;function e1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n1(i){let t=new Kb,e=Qb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new _e,o=new _e;function a(l){let u=0,d=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,S=0,_=0,v=0,E=0,A=0,b=0,I=0,U=0;l.sort(e1);for(let B=0,F=l.length;B<F;B++){let H=l[B],$=H.color,z=H.intensity,j=H.distance,ut=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ys?ut=H.shadow.map.texture:ut=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)u+=$.r*z,d+=$.g*z,h+=$.b*z;else if(H.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(H.sh.coefficients[nt],z);U++}else if(H.isSunLight){let nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let it=H.shadow,at=e.get(H);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=ut;let Ct=it.getViewportCount();for(let Nt=0;Nt<Ct;Nt++)n.sunShadowMatrix[x+Nt]=it.getMatrix(Nt),n.sunShadowCascade[x+Nt]=it._cascadeData[Nt];x+=Ct,g++}n.sun[f]=nt,f++}else if(H.isDirectionalLight){let nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let it=H.shadow,at=e.get(H);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.directionalShadow[p]=at,n.directionalShadowMap[p]=ut,n.directionalShadowMatrix[p]=H.shadow.matrix,v++}n.directional[p]=nt,p++}else if(H.isSpotLight){let nt=t.get(H);nt.position.setFromMatrixPosition(H.matrixWorld),nt.color.copy($).multiplyScalar(z),nt.distance=j,nt.coneCos=Math.cos(H.angle),nt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),nt.decay=H.decay,n.spot[y]=nt;let it=H.shadow;if(H.map&&(n.spotLightMap[b]=H.map,b++,it.updateMatrices(H),H.castShadow&&I++),n.spotLightMatrix[y]=it.matrix,H.castShadow){let at=e.get(H);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,n.spotShadow[y]=at,n.spotShadowMap[y]=ut,A++}y++}else if(H.isRectAreaLight){let nt=t.get(H);nt.color.copy($).multiplyScalar(z),nt.halfWidth.set(H.width*.5,0,0),nt.halfHeight.set(0,H.height*.5,0),n.rectArea[S]=nt,S++}else if(H.isPointLight){let nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),nt.distance=H.distance,nt.decay=H.decay,H.castShadow){let it=H.shadow,at=e.get(H);at.shadowIntensity=it.intensity,at.shadowBias=it.bias,at.shadowNormalBias=it.normalBias,at.shadowRadius=it.radius,at.shadowMapSize=it.mapSize,at.shadowCameraNear=it.camera.near,at.shadowCameraFar=it.camera.far,n.pointShadow[m]=at,n.pointShadowMap[m]=ut,n.pointShadowMatrix[m]=H.shadow.matrix,E++}n.point[m]=nt,m++}else if(H.isHemisphereLight){let nt=t.get(H);nt.skyColor.copy(H.color).multiplyScalar(z),nt.groundColor.copy(H.groundColor).multiplyScalar(z),n.hemi[_]=nt,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==_||L.numSunShadows!==g||L.numDirectionalShadows!==v||L.numPointShadows!==E||L.numSpotShadows!==A||L.numSpotMaps!==b||L.numLightProbes!==U)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=S,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=U,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=_,L.numSunShadows=g,L.numDirectionalShadows=v,L.numPointShadows=E,L.numSpotShadows=A,L.numSpotMaps=b,L.numLightProbes=U,n.version=t1++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let y=0,S=l.length;y<S;y++){let _=l[y];if(_.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function fp(i){let t=new n1(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function i1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new fp(i),t.set(s,[a])):r>=o.length?(a=new fp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`,o1=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],a1=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],dp=new _e,qo=new G,yh=new G;function c1(i,t,e){let n=new yr,s=new Lt,r=new Lt,o=new Ae,a=new lc,c=new uc,l={},u=e.maxTextureSize,d={[ps]:An,[An]:ps,[ln]:ln},h=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:s1,fragmentShader:r1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new he(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let m=this.type;this.render=function(E,A,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===rd&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let I=i.getRenderTarget(),U=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(wi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=m!==this.type;F&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach($=>$.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,$=E.length;H<$;H++){let z=E[H],j=z.shadow;if(j===void 0){ie("WebGLShadowMap:",z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ut=j.getFrameExtents();s.multiply(ut),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ut.x),s.x=r.x*ut.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ut.y),s.y=r.y*ut.y,j.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=nt,j.map===null||F===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Tr){if(z.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Ln(s.x,s.y,{format:ys,type:li,minFilter:cn,magFilter:cn,generateMipmaps:!1}),j.map.texture.name=z.name+".shadowMap",j.map.depthTexture=new rs(s.x,s.y,jn),j.map.depthTexture.name=z.name+".shadowMapDepth",j.map.depthTexture.format=bi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=rn,j.map.depthTexture.magFilter=rn}else z.isPointLight?(j.map=new ml(s.x),j.map.depthTexture=new tc(s.x,ci)):(j.map=new Ln(s.x,s.y),j.map.depthTexture=new rs(s.x,s.y,ci)),j.map.depthTexture.name=z.name+".shadowMap",j.map.depthTexture.format=bi,this.type===Ds?(j.map.depthTexture.compareFunction=nt?hl:ul,j.map.depthTexture.minFilter=cn,j.map.depthTexture.magFilter=cn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=rn,j.map.depthTexture.magFilter=rn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let it=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();z.isPointLight!==!0&&j.updateMatrices(z,b);for(let at=0;at<it;at++){let Ct=j.getCamera(at);if(z.isPointLight){let Nt=j.camera,Et=j.matrix,At=z.distance||Nt.far;At!==Nt.far&&(Nt.far=At,Nt.updateProjectionMatrix()),qo.setFromMatrixPosition(z.matrixWorld),Nt.position.copy(qo),yh.copy(Nt.position),yh.add(o1[at]),Nt.up.copy(a1[at]),Nt.lookAt(yh),Nt.updateMatrixWorld(),Et.makeTranslation(-qo.x,-qo.y,-qo.z),dp.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),j._frustum.setFromProjectionMatrix(dp,Nt.coordinateSystem,Nt.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,at),i.clear();else{at===0&&(i.setRenderTarget(j.map),i.clear());let Nt=j.getViewport(at);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),B.viewport(o)}n=j.getFrustum(at),_(A,b,Ct,z,this.type)}j.isPointLightShadow!==!0&&this.type===Tr&&y(j,b),j.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,U,L)};function y(E,A){let b=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ln(s.x,s.y,{format:ys,type:li}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,b,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,b,f,x,null)}function S(E,A,b,I){let U=null,L=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)U=L;else if(U=b.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let B=U.uuid,F=A.uuid,H=l[B];H===void 0&&(H={},l[B]=H);let $=H[F];$===void 0&&($=U.clone(),H[F]=$,A.addEventListener("dispose",v)),U=$}if(U.visible=A.visible,U.wireframe=A.wireframe,I===Tr?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:d[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,b.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let B=i.properties.get(U);B.light=b}return U}function _(E,A,b,I,U){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===Tr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let F=t.update(E),H=E.material;if(Array.isArray(H)){let $=F.groups;for(let z=0,j=$.length;z<j;z++){let ut=$[z],nt=H[ut.materialIndex];if(nt&&nt.visible){let it=S(E,nt,I,U);E.onBeforeShadow(i,E,A,b,F,it,ut),i.renderBufferDirect(b,null,F,it,E,ut),E.onAfterShadow(i,E,A,b,F,it,ut)}}}else if(H.visible){let $=S(E,H,I,U);E.onBeforeShadow(i,E,A,b,F,$,null),i.renderBufferDirect(b,null,F,$,E,null),E.onAfterShadow(i,E,A,b,F,$,null)}}let B=E.children;for(let F=0,H=B.length;F<H;F++)_(B[F],A,b,I,U)}function v(E){E.target.removeEventListener("dispose",v);for(let b in l){let I=l[b],U=E.target.uuid;U in I&&(I[U].dispose(),delete I[U])}}}function l1(i,t){function e(){let C=!1,K=new Ae,q=null,mt=new Ae(0,0,0,0);return{setMask:function(bt){q!==bt&&!C&&(i.colorMask(bt,bt,bt,bt),q=bt)},setLocked:function(bt){C=bt},setClear:function(bt,gt,It,Dt,ne){ne===!0&&(bt*=Dt,gt*=Dt,It*=Dt),K.set(bt,gt,It,Dt),mt.equals(K)===!1&&(i.clearColor(bt,gt,It,Dt),mt.copy(K))},reset:function(){C=!1,q=null,mt.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,q=null,mt=null,bt=null;return{setReversed:function(gt){if(K!==gt){let It=t.get("EXT_clip_control");gt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),K=gt;let Dt=bt;bt=null,this.setClear(Dt)}},getReversed:function(){return K},setTest:function(gt){gt?Q(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(gt){q!==gt&&!C&&(i.depthMask(gt),q=gt)},setFunc:function(gt){if(K&&(gt=kd[gt]),mt!==gt){switch(gt){case ka:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Ga:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=gt}},setLocked:function(gt){C=gt},setClear:function(gt){bt!==gt&&(bt=gt,K&&(gt=1-gt),i.clearDepth(gt))},reset:function(){C=!1,q=null,mt=null,bt=null,K=!1}}}function s(){let C=!1,K=null,q=null,mt=null,bt=null,gt=null,It=null,Dt=null,ne=null;return{setTest:function(Ht){C||(Ht?Q(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Ht){K!==Ht&&!C&&(i.stencilMask(Ht),K=Ht)},setFunc:function(Ht,ge,ye){(q!==Ht||mt!==ge||bt!==ye)&&(i.stencilFunc(Ht,ge,ye),q=Ht,mt=ge,bt=ye)},setOp:function(Ht,ge,ye){(gt!==Ht||It!==ge||Dt!==ye)&&(i.stencilOp(Ht,ge,ye),gt=Ht,It=ge,Dt=ye)},setLocked:function(Ht){C=Ht},setClear:function(Ht){ne!==Ht&&(i.clearStencil(Ht),ne=Ht)},reset:function(){C=!1,K=null,q=null,mt=null,bt=null,gt=null,It=null,Dt=null,ne=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,S=null,_=null,v=null,E=null,A=null,b=new Xt(0,0,0),I=0,U=!1,L=null,B=null,F=null,H=null,$=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ut=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(nt)[1]),j=ut>=1):nt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),j=ut>=2);let it=null,at={},Ct=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Et=new Ae().fromArray(Ct),At=new Ae().fromArray(Nt);function Z(C,K,q,mt){let bt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(C,gt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<q;It++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(K+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return gt}let X={};X[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(ur),wt(!1),Tt(Hu),Q(i.CULL_FACE),Mt(wi);function Q(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function ct(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function xt(C,K){return h[C]!==K?(i.bindFramebuffer(C,K),h[C]=K,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=K),!0):!1}function _t(C,K){let q=g,mt=!1;if(C){q=f.get(K),q===void 0&&(q=[],f.set(K,q));let bt=C.textures;if(q.length!==bt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,It=bt.length;gt<It;gt++)q[gt]=i.COLOR_ATTACHMENT0+gt;q.length=bt.length,mt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,mt=!0);mt&&i.drawBuffers(q)}function vt(C){return x!==C?(i.useProgram(C),x=C,!0):!1}let Rt={[Us]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};Rt[ld]=i.MIN,Rt[ud]=i.MAX;let dt={[hd]:i.ZERO,[fd]:i.ONE,[dd]:i.SRC_COLOR,[Wu]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[Xu]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[vd]:i.CONSTANT_COLOR,[bd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(C,K,q,mt,bt,gt,It,Dt,ne,Ht){if(C===wi){p===!0&&(ct(i.BLEND),p=!1);return}if(p===!1&&(Q(i.BLEND),p=!0),C!==od){if(C!==m||Ht!==U){if((y!==Us||v!==Us)&&(i.blendEquation(i.FUNC_ADD),y=Us,v=Us),Ht)switch(C){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",C);break}else switch(C){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gu:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vu:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",C);break}S=null,_=null,E=null,A=null,b.set(0,0,0),I=0,m=C,U=Ht}return}bt=bt||K,gt=gt||q,It=It||mt,(K!==y||bt!==v)&&(i.blendEquationSeparate(Rt[K],Rt[bt]),y=K,v=bt),(q!==S||mt!==_||gt!==E||It!==A)&&(i.blendFuncSeparate(dt[q],dt[mt],dt[gt],dt[It]),S=q,_=mt,E=gt,A=It),(Dt.equals(b)===!1||ne!==I)&&(i.blendColor(Dt.r,Dt.g,Dt.b,ne),b.copy(Dt),I=ne),m=C,U=!1}function St(C,K){C.side===ln?ct(i.CULL_FACE):Q(i.CULL_FACE);let q=C.side===An;K&&(q=!q),wt(q),C.blending===Ar&&C.transparent===!1?Mt(wi):Mt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let mt=C.stencilWrite;a.setTest(mt),mt&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ot(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(C){L!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),L=C)}function Tt(C){C!==id?(Q(i.CULL_FACE),C!==B&&(C===Hu?i.cullFace(i.BACK):C===sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),B=C}function Ut(C){C!==F&&(j&&i.lineWidth(C),F=C)}function Ot(C,K,q){C?(Q(i.POLYGON_OFFSET_FILL),(H!==K||$!==q)&&(H=K,$=q,o.getReversed()&&(K=-K),i.polygonOffset(K,q))):ct(i.POLYGON_OFFSET_FILL)}function Wt(C){C?Q(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Ft(C){C===void 0&&(C=i.TEXTURE0+z-1),it!==C&&(i.activeTexture(C),it=C)}function J(C,K,q){q===void 0&&(it===null?q=i.TEXTURE0+z-1:q=it);let mt=at[q];mt===void 0&&(mt={type:void 0,texture:void 0},at[q]=mt),(mt.type!==C||mt.texture!==K)&&(it!==q&&(i.activeTexture(q),it=q),i.bindTexture(C,K||X[C]),mt.type=C,mt.texture=K)}function Kt(){let C=at[it];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(C){ae("WebGLState:",C)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(C){ae("WebGLState:",C)}}function T(){try{i.texSubImage2D(...arguments)}catch(C){ae("WebGLState:",C)}}function st(){try{i.texSubImage3D(...arguments)}catch(C){ae("WebGLState:",C)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){ae("WebGLState:",C)}}function pt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){ae("WebGLState:",C)}}function k(){try{i.texStorage2D(...arguments)}catch(C){ae("WebGLState:",C)}}function M(){try{i.texStorage3D(...arguments)}catch(C){ae("WebGLState:",C)}}function w(){try{i.texImage2D(...arguments)}catch(C){ae("WebGLState:",C)}}function R(){try{i.texImage3D(...arguments)}catch(C){ae("WebGLState:",C)}}function D(C){return d[C]!==void 0?d[C]:i.getParameter(C)}function N(C,K){d[C]!==K&&(i.pixelStorei(C,K),d[C]=K)}function V(C){Et.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Et.copy(C))}function Y(C){At.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),At.copy(C))}function rt(C,K){let q=l.get(K);q===void 0&&(q=new WeakMap,l.set(K,q));let mt=q.get(C);mt===void 0&&(mt=i.getUniformBlockIndex(K,C.name),q.set(C,mt))}function W(C,K){let mt=l.get(K).get(C);c.get(K)!==mt&&(i.uniformBlockBinding(K,mt,C.__bindingPointIndex),c.set(K,mt))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},it=null,at={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,S=null,_=null,v=null,E=null,A=null,b=new Xt(0,0,0),I=0,U=!1,L=null,B=null,F=null,H=null,$=null,Et.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:ct,bindFramebuffer:xt,drawBuffers:_t,useProgram:vt,setBlending:Mt,setMaterial:St,setFlipSided:wt,setCullFace:Tt,setLineWidth:Ut,setPolygonOffset:Ot,setScissorTest:Wt,activeTexture:Ft,bindTexture:J,unbindTexture:Kt,compressedTexImage2D:Zt,compressedTexImage3D:O,texImage2D:w,texImage3D:R,pixelStorei:N,getParameter:D,updateUBOMapping:rt,uniformBlockBinding:W,texStorage2D:k,texStorage3D:M,texSubImage2D:T,texSubImage3D:st,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:V,viewport:Y,reset:ot}}function u1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,T){return g?new OffscreenCanvas(O,T):ro("canvas")}function p(O,T,st){let lt=1,pt=Zt(O);if((pt.width>st||pt.height>st)&&(lt=st/Math.max(pt.width,pt.height)),lt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let k=Math.floor(lt*pt.width),M=Math.floor(lt*pt.height);h===void 0&&(h=x(k,M));let w=T?x(k,M):h;return w.width=k,w.height=M,w.getContext("2d").drawImage(O,0,0,k,M),ie("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+k+"x"+M+")."),w}else return"data"in O&&ie("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function m(O){return O.generateMipmaps}function y(O){i.generateMipmap(O)}function S(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(O,T,st,lt,pt,k=!1){if(O!==null){if(i[O]!==void 0)return i[O];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let M;lt&&(M=t.get("EXT_texture_norm16"),M||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let w=T;if(T===i.RED&&(st===i.FLOAT&&(w=i.R32F),st===i.HALF_FLOAT&&(w=i.R16F),st===i.UNSIGNED_BYTE&&(w=i.R8),st===i.UNSIGNED_SHORT&&M&&(w=M.R16_EXT),st===i.SHORT&&M&&(w=M.R16_SNORM_EXT)),T===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(w=i.R8UI),st===i.UNSIGNED_SHORT&&(w=i.R16UI),st===i.UNSIGNED_INT&&(w=i.R32UI),st===i.BYTE&&(w=i.R8I),st===i.SHORT&&(w=i.R16I),st===i.INT&&(w=i.R32I)),T===i.RG&&(st===i.FLOAT&&(w=i.RG32F),st===i.HALF_FLOAT&&(w=i.RG16F),st===i.UNSIGNED_BYTE&&(w=i.RG8),st===i.UNSIGNED_SHORT&&M&&(w=M.RG16_EXT),st===i.SHORT&&M&&(w=M.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(w=i.RG8UI),st===i.UNSIGNED_SHORT&&(w=i.RG16UI),st===i.UNSIGNED_INT&&(w=i.RG32UI),st===i.BYTE&&(w=i.RG8I),st===i.SHORT&&(w=i.RG16I),st===i.INT&&(w=i.RG32I)),T===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(w=i.RGB8UI),st===i.UNSIGNED_SHORT&&(w=i.RGB16UI),st===i.UNSIGNED_INT&&(w=i.RGB32UI),st===i.BYTE&&(w=i.RGB8I),st===i.SHORT&&(w=i.RGB16I),st===i.INT&&(w=i.RGB32I)),T===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),st===i.UNSIGNED_INT&&(w=i.RGBA32UI),st===i.BYTE&&(w=i.RGBA8I),st===i.SHORT&&(w=i.RGBA16I),st===i.INT&&(w=i.RGBA32I)),T===i.RGB&&(st===i.UNSIGNED_SHORT&&M&&(w=M.RGB16_EXT),st===i.SHORT&&M&&(w=M.RGB16_SNORM_EXT),st===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),st===i.UNSIGNED_INT_10F_11F_11F_REV&&(w=i.R11F_G11F_B10F)),T===i.RGBA){let R=k?so:xe.getTransfer(pt);st===i.FLOAT&&(w=i.RGBA32F),st===i.HALF_FLOAT&&(w=i.RGBA16F),st===i.UNSIGNED_BYTE&&(w=R===Te?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT&&M&&(w=M.RGBA16_EXT),st===i.SHORT&&M&&(w=M.RGBA16_SNORM_EXT),st===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return(w===i.R16F||w===i.R32F||w===i.RG16F||w===i.RG32F||w===i.RGBA16F||w===i.RGBA32F)&&t.get("EXT_color_buffer_float"),w}function v(O,T){let st;return O?T===null||T===ci||T===Cr?st=i.DEPTH24_STENCIL8:T===jn?st=i.DEPTH32F_STENCIL8:T===Rr&&(st=i.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ci||T===Cr?st=i.DEPTH_COMPONENT24:T===jn?st=i.DEPTH_COMPONENT32F:T===Rr&&(st=i.DEPTH_COMPONENT16),st}function E(O,T){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==rn&&O.minFilter!==cn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function A(O){let T=O.target;T.removeEventListener("dispose",A),I(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&d.delete(T)}function b(O){let T=O.target;T.removeEventListener("dispose",b),L(T)}function I(O){let T=n.get(O);if(T.__webglInit===void 0)return;let st=O.source,lt=f.get(st);if(lt){let pt=lt[T.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&U(O),Object.keys(lt).length===0&&f.delete(st)}n.remove(O)}function U(O){let T=n.get(O);i.deleteTexture(T.__webglTexture);let st=O.source,lt=f.get(st);delete lt[T.__cacheKey],o.memory.textures--}function L(O){let T=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let pt=0;pt<T.__webglFramebuffer[lt].length;pt++)i.deleteFramebuffer(T.__webglFramebuffer[lt][pt]);else i.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)i.deleteFramebuffer(T.__webglFramebuffer[lt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let st=O.textures;for(let lt=0,pt=st.length;lt<pt;lt++){let k=n.get(st[lt]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(st[lt])}n.remove(O)}let B=0;function F(){B=0}function H(){return B}function $(O){B=O}function z(){let O=B;return O>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,O}function j(O){let T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ut(O,T){let st=n.get(O);if(O.isVideoTexture&&J(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&st.__version!==O.version){let lt=O.image;if(lt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(st,O,T);return}}else O.isExternalTexture&&(st.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+T)}function nt(O,T){let st=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){ct(st,O,T);return}else O.isExternalTexture&&(st.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+T)}function it(O,T){let st=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){ct(st,O,T);return}e.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+T)}function at(O,T){let st=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&st.__version!==O.version){xt(st,O,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+T)}let Ct={[Rs]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},Nt={[rn]:i.NEAREST,[Td]:i.NEAREST_MIPMAP_NEAREST,[Oo]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Tc]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},Et={[Id]:i.NEVER,[Ud]:i.ALWAYS,[Pd]:i.LESS,[ul]:i.LEQUAL,[Ld]:i.EQUAL,[hl]:i.GEQUAL,[Nd]:i.GREATER,[Dd]:i.NOTEQUAL};function At(O,T){if(T.type===jn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===cn||T.magFilter===Tc||T.magFilter===Oo||T.magFilter===gs||T.minFilter===cn||T.minFilter===Tc||T.minFilter===Oo||T.minFilter===gs)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,Ct[T.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,Ct[T.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,Ct[T.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Nt[T.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Nt[T.minFilter]),T.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===rn||T.minFilter!==Oo&&T.minFilter!==gs||T.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Z(O,T){let st=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",A));let lt=T.source,pt=f.get(lt);pt===void 0&&(pt={},f.set(lt,pt));let k=j(T);if(k!==O.__cacheKey){pt[k]===void 0&&(pt[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,st=!0),pt[k].usedTimes++;let M=pt[O.__cacheKey];M!==void 0&&(pt[O.__cacheKey].usedTimes--,M.usedTimes===0&&U(T)),O.__cacheKey=k,O.__webglTexture=pt[k].texture}return st}function X(O,T,st){return Math.floor(Math.floor(O/st)/T)}function Q(O,T,st,lt){let k=O.updateRanges;if(k.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,st,lt,T.data);else{k.sort((N,V)=>N.start-V.start);let M=0;for(let N=1;N<k.length;N++){let V=k[M],Y=k[N],rt=V.start+V.count,W=X(Y.start,T.width,4),ot=X(V.start,T.width,4);Y.start<=rt+1&&W===ot&&X(Y.start+Y.count-1,T.width,4)===W?V.count=Math.max(V.count,Y.start+Y.count-V.start):(++M,k[M]=Y)}k.length=M+1;let w=e.getParameter(i.UNPACK_ROW_LENGTH),R=e.getParameter(i.UNPACK_SKIP_PIXELS),D=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let N=0,V=k.length;N<V;N++){let Y=k[N],rt=Math.floor(Y.start/4),W=Math.ceil(Y.count/4),ot=rt%T.width,C=Math.floor(rt/T.width),K=W,q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,C),e.texSubImage2D(i.TEXTURE_2D,0,ot,C,K,q,st,lt,T.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,w),e.pixelStorei(i.UNPACK_SKIP_PIXELS,R),e.pixelStorei(i.UNPACK_SKIP_ROWS,D)}}function ct(O,T,st){let lt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=i.TEXTURE_3D);let pt=Z(O,T),k=T.source;e.bindTexture(lt,O.__webglTexture,i.TEXTURE0+st);let M=n.get(k);if(k.version!==M.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+st),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let q=xe.getPrimaries(xe.workingColorSpace),mt=T.colorSpace===Wi?null:xe.getPrimaries(T.colorSpace),bt=T.colorSpace===Wi||q===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let R=p(T.image,!1,s.maxTextureSize);R=Kt(T,R);let D=r.convert(T.format,T.colorSpace),N=r.convert(T.type),V=_(T.internalFormat,D,N,T.normalized,T.colorSpace,T.isVideoTexture);At(lt,T);let Y,rt=T.mipmaps,W=T.isVideoTexture!==!0,ot=M.__version===void 0||pt===!0,C=k.dataReady,K=E(T,R);if(T.isDepthTexture)V=v(T.format===xs,T.type),ot&&(W?e.texStorage2D(i.TEXTURE_2D,1,V,R.width,R.height):e.texImage2D(i.TEXTURE_2D,0,V,R.width,R.height,0,D,N,null));else if(T.isDataTexture)if(rt.length>0){W&&ot&&e.texStorage2D(i.TEXTURE_2D,K,V,rt[0].width,rt[0].height);for(let q=0,mt=rt.length;q<mt;q++)Y=rt[q],W?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,D,N,Y.data):e.texImage2D(i.TEXTURE_2D,q,V,Y.width,Y.height,0,D,N,Y.data);T.generateMipmaps=!1}else W?(ot&&e.texStorage2D(i.TEXTURE_2D,K,V,R.width,R.height),C&&Q(T,R,D,N)):e.texImage2D(i.TEXTURE_2D,0,V,R.width,R.height,0,D,N,R.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,V,rt[0].width,rt[0].height,R.depth);for(let q=0,mt=rt.length;q<mt;q++)if(Y=rt[q],T.format!==Kn)if(D!==null)if(W){if(C)if(T.layerUpdates.size>0){let bt=fh(Y.width,Y.height,T.format,T.type);for(let gt of T.layerUpdates){let It=Y.data.subarray(gt*bt/Y.data.BYTES_PER_ELEMENT,(gt+1)*bt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,gt,Y.width,Y.height,1,D,It)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Y.width,Y.height,R.depth,D,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,V,Y.width,Y.height,R.depth,0,Y.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Y.width,Y.height,R.depth,D,N,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,V,Y.width,Y.height,R.depth,0,D,N,Y.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{W&&ot&&e.texStorage2D(i.TEXTURE_2D,K,V,rt[0].width,rt[0].height);for(let q=0,mt=rt.length;q<mt;q++)Y=rt[q],T.format!==Kn?D!==null?W?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,D,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,q,V,Y.width,Y.height,0,Y.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Y.width,Y.height,D,N,Y.data):e.texImage2D(i.TEXTURE_2D,q,V,Y.width,Y.height,0,D,N,Y.data)}else if(T.isDataArrayTexture)if(W){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,K,V,R.width,R.height,R.depth),C)if(T.layerUpdates.size>0){let q=fh(R.width,R.height,T.format,T.type);for(let mt of T.layerUpdates){let bt=R.data.subarray(mt*q/R.data.BYTES_PER_ELEMENT,(mt+1)*q/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,R.width,R.height,1,D,N,bt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,D,N,R.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,V,R.width,R.height,R.depth,0,D,N,R.data);else if(T.isData3DTexture)W?(ot&&e.texStorage3D(i.TEXTURE_3D,K,V,R.width,R.height,R.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,D,N,R.data)):e.texImage3D(i.TEXTURE_3D,0,V,R.width,R.height,R.depth,0,D,N,R.data);else if(T.isFramebufferTexture){if(ot)if(W)e.texStorage2D(i.TEXTURE_2D,K,V,R.width,R.height);else{let q=R.width,mt=R.height;for(let bt=0;bt<K;bt++)e.texImage2D(i.TEXTURE_2D,bt,V,q,mt,0,D,N,null),q>>=1,mt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let q=i.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),R.parentNode!==q){q.appendChild(R),d.add(T),q.onpaint=mt=>{let bt=mt.changedElements;for(let gt of d)bt.includes(gt.image)&&(gt.needsUpdate=!0)},q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,R);else{let bt=i.RGBA,gt=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,gt,It,R)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(rt.length>0){if(W&&ot){let q=Zt(rt[0]);e.texStorage2D(i.TEXTURE_2D,K,V,q.width,q.height)}for(let q=0,mt=rt.length;q<mt;q++)Y=rt[q],W?C&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,D,N,Y):e.texImage2D(i.TEXTURE_2D,q,V,D,N,Y);T.generateMipmaps=!1}else if(W){if(ot){let q=Zt(R);e.texStorage2D(i.TEXTURE_2D,K,V,q.width,q.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,D,N,R)}else e.texImage2D(i.TEXTURE_2D,0,V,D,N,R);m(T)&&y(lt),M.__version=k.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function xt(O,T,st){if(T.image.length!==6)return;let lt=Z(O,T),pt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+st);let k=n.get(pt);if(pt.version!==k.__version||lt===!0){e.activeTexture(i.TEXTURE0+st);let M=xe.getPrimaries(xe.workingColorSpace),w=T.colorSpace===Wi?null:xe.getPrimaries(T.colorSpace),R=T.colorSpace===Wi||M===w?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,R);let D=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,V=[];for(let gt=0;gt<6;gt++)!D&&!N?V[gt]=p(T.image[gt],!0,s.maxCubemapSize):V[gt]=N?T.image[gt].image:T.image[gt],V[gt]=Kt(T,V[gt]);let Y=V[0],rt=r.convert(T.format,T.colorSpace),W=r.convert(T.type),ot=_(T.internalFormat,rt,W,T.normalized,T.colorSpace),C=T.isVideoTexture!==!0,K=k.__version===void 0||lt===!0,q=pt.dataReady,mt=E(T,Y);At(i.TEXTURE_CUBE_MAP,T);let bt;if(D){C&&K&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ot,Y.width,Y.height);for(let gt=0;gt<6;gt++){bt=V[gt].mipmaps;for(let It=0;It<bt.length;It++){let Dt=bt[It];T.format!==Kn?rt!==null?C?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,Dt.width,Dt.height,rt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ot,Dt.width,Dt.height,0,Dt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,0,0,Dt.width,Dt.height,rt,W,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It,ot,Dt.width,Dt.height,0,rt,W,Dt.data)}}}else{if(bt=T.mipmaps,C&&K){bt.length>0&&mt++;let gt=Zt(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(N){C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,V[gt].width,V[gt].height,rt,W,V[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,V[gt].width,V[gt].height,0,rt,W,V[gt].data);for(let It=0;It<bt.length;It++){let ne=bt[It].image[gt].image;C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,ne.width,ne.height,rt,W,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ot,ne.width,ne.height,0,rt,W,ne.data)}}else{C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,rt,W,V[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,rt,W,V[gt]);for(let It=0;It<bt.length;It++){let Dt=bt[It];C?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,0,0,rt,W,Dt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It+1,ot,rt,W,Dt.image[gt])}}}m(T)&&y(i.TEXTURE_CUBE_MAP),k.__version=pt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function _t(O,T,st,lt,pt,k){let M=r.convert(st.format,st.colorSpace),w=r.convert(st.type),R=_(st.internalFormat,M,w,st.normalized,st.colorSpace),D=n.get(T),N=n.get(st);if(N.__renderTarget=T,!D.__hasExternalTextures){let V=Math.max(1,T.width>>k),Y=Math.max(1,T.height>>k);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,k,R,V,Y,T.depth,0,M,w,null):e.texImage2D(pt,k,R,V,Y,0,M,w,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,pt,N.__webglTexture,0,Wt(T)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,pt,N.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(O,T,st){if(i.bindRenderbuffer(i.RENDERBUFFER,O),T.depthBuffer){let lt=T.depthTexture,pt=lt&&lt.isDepthTexture?lt.type:null,k=v(T.stencilBuffer,pt),M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(T),k,T.width,T.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(T),k,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,k,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,M,i.RENDERBUFFER,O)}else{let lt=T.textures;for(let pt=0;pt<lt.length;pt++){let k=lt[pt],M=r.convert(k.format,k.colorSpace),w=r.convert(k.type),R=_(k.internalFormat,M,w,k.normalized,k.colorSpace);Ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(T),R,T.width,T.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(T),R,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,R,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(O,T,st){let lt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(T.depthTexture);if(pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),pt.__webglTexture===void 0){pt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,pt.__webglTexture),At(i.TEXTURE_CUBE_MAP,T.depthTexture);let D=r.convert(T.depthTexture.format),N=r.convert(T.depthTexture.type),V;T.depthTexture.format===bi?V=i.DEPTH_COMPONENT24:T.depthTexture.format===xs&&(V=i.DEPTH24_STENCIL8);for(let Y=0;Y<6;Y++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,V,T.width,T.height,0,D,N,null)}}else ut(T.depthTexture,0);let k=pt.__webglTexture,M=Wt(T),w=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+st:i.TEXTURE_2D,R=T.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===bi)Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,w,k,0,M):i.framebufferTexture2D(i.FRAMEBUFFER,R,w,k,0);else if(T.depthTexture.format===xs)Ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,w,k,0,M):i.framebufferTexture2D(i.FRAMEBUFFER,R,w,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(O){let T=n.get(O),st=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){let lt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){let pt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",pt)};lt.addEventListener("dispose",pt),T.__depthDisposeCallback=pt}T.__boundDepthTexture=lt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(st)for(let lt=0;lt<6;lt++)Rt(T.__webglFramebuffer[lt],O,lt);else{let lt=O.texture.mipmaps;lt&&lt.length>0?Rt(T.__webglFramebuffer[0],O,0):Rt(T.__webglFramebuffer,O,0)}else if(st){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=i.createRenderbuffer(),vt(T.__webglDepthbuffer[lt],O,!1);else{let pt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=T.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,k)}}else{let lt=O.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),vt(T.__webglDepthbuffer,O,!1);else{let pt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,k)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(O,T,st){let lt=n.get(O);T!==void 0&&_t(lt.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&dt(O)}function St(O){let T=O.texture,st=n.get(O),lt=n.get(T);O.addEventListener("dispose",b);let pt=O.textures,k=O.isWebGLCubeRenderTarget===!0,M=pt.length>1;if(M||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=T.version,o.memory.textures++),k){st.__webglFramebuffer=[];for(let w=0;w<6;w++)if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer[w]=[];for(let R=0;R<T.mipmaps.length;R++)st.__webglFramebuffer[w][R]=i.createFramebuffer()}else st.__webglFramebuffer[w]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){st.__webglFramebuffer=[];for(let w=0;w<T.mipmaps.length;w++)st.__webglFramebuffer[w]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(M)for(let w=0,R=pt.length;w<R;w++){let D=n.get(pt[w]);D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Ft(O)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let w=0;w<pt.length;w++){let R=pt[w];st.__webglColorRenderbuffer[w]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[w]);let D=r.convert(R.format,R.colorSpace),N=r.convert(R.type),V=_(R.internalFormat,D,N,R.normalized,R.colorSpace,O.isXRRenderTarget===!0),Y=Wt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,V,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+w,i.RENDERBUFFER,st.__webglColorRenderbuffer[w])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(st.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),At(i.TEXTURE_CUBE_MAP,T);for(let w=0;w<6;w++)if(T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)_t(st.__webglFramebuffer[w][R],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,R);else _t(st.__webglFramebuffer[w],O,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+w,0);m(T)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(M){for(let w=0,R=pt.length;w<R;w++){let D=pt[w],N=n.get(D),V=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(V=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,N.__webglTexture),At(V,D),_t(st.__webglFramebuffer,O,D,i.COLOR_ATTACHMENT0+w,V,0),m(D)&&y(V)}e.unbindTexture()}else{let w=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(w=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(w,lt.__webglTexture),At(w,T),T.mipmaps&&T.mipmaps.length>0)for(let R=0;R<T.mipmaps.length;R++)_t(st.__webglFramebuffer[R],O,T,i.COLOR_ATTACHMENT0,w,R);else _t(st.__webglFramebuffer,O,T,i.COLOR_ATTACHMENT0,w,0);m(T)&&y(w),e.unbindTexture()}O.depthBuffer&&dt(O)}function wt(O){let T=O.textures;for(let st=0,lt=T.length;st<lt;st++){let pt=T[st];if(m(pt)){let k=S(O),M=n.get(pt).__webglTexture;e.bindTexture(k,M),y(k),e.unbindTexture()}}}let Tt=[],Ut=[];function Ot(O){if(O.samples>0){if(Ft(O)===!1){let T=O.textures,st=O.width,lt=O.height,pt=i.COLOR_BUFFER_BIT,k=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,M=n.get(O),w=T.length>1;if(w)for(let D=0;D<T.length;D++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer);let R=O.texture.mipmaps;R&&R.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let D=0;D<T.length;D++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),w){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,M.__webglColorRenderbuffer[D]);let N=n.get(T[D]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,st,lt,0,0,st,lt,pt,i.NEAREST),c===!0&&(Tt.length=0,Ut.length=0,Tt.push(i.COLOR_ATTACHMENT0+D),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Tt.push(k),Ut.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),w)for(let D=0;D<T.length;D++){e.bindFramebuffer(i.FRAMEBUFFER,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,M.__webglColorRenderbuffer[D]);let N=n.get(T[D]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let T=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Wt(O){return Math.min(s.maxSamples,O.samples)}function Ft(O){let T=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function J(O){let T=o.render.frame;u.get(O)!==T&&(u.set(O,T),O.update())}function Kt(O,T){let st=O.colorSpace,lt=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||st!==io&&st!==Wi&&(xe.getTransfer(st)===Te?(lt!==Kn||pt!==Dn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",st)),T}function Zt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=$,this.setTexture2D=ut,this.setTexture2DArray=nt,this.setTexture3D=it,this.setTextureCube=at,this.rebindTextures=Mt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function h1(i,t){function e(n,s=Wi){let r,o=xe.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qu)return i.BYTE;if(n===th)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===sh)return i.RGB;if(n===Kn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Pc)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===Lc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===Bo||n===ko||n===zo||n===Ho)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Uc||n===Fc||n===Oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Go||n===Vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bc||n===kc)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hc)return r.COMPRESSED_R11_EAC;if(n===Gc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Go)return r.COMPRESSED_RG11_EAC;if(n===Vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wc||n===Xc||n===Yc||n===qc||n===Zc||n===$c||n===Jc||n===jc||n===Kc||n===Qc||n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$c)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===cl||n===Vo||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:f1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ah=class extends Mi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new Th,m={},y=e.getContextAttributes(),S=null,_=null,v=[],E=[],A=new Lt,b=null,I=null,U=new En;U.viewport=new Ae;let L=new En;L.viewport=new Ae;let B=[U,L],F=new Mc,H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=v[X];return Q===void 0&&(Q=new gr,v[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=v[X];return Q===void 0&&(Q=new gr,v[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=v[X];return Q===void 0&&(Q=new gr,v[X]=Q),Q.getHandSpace()};function z(X){let Q=E.indexOf(X.inputSource);if(Q===-1)return;let ct=v[Q];ct!==void 0&&(ct.update(X.inputSource,X.frame,l||o),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ut);for(let X=0;X<v.length;X++){let Q=E[X];Q!==null&&(E[X]=null,v[X].disconnect(Q))}H=null,$=null,p.reset();for(let X in m)delete m[X];if(t.setRenderTarget(S),f=null,h=null,d=null,s=null,_=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),I!==null){let X=I.camera;X.fov=I.fov,X.zoom=I.zoom,X.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,xt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=y.stencil?xs:bi,xt=y.stencil?Cr:ci);let vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Ln(h.textureWidth,h.textureHeight,{format:Kn,type:Dn,depthTexture:new rs(h.textureWidth,h.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ln(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ut(X){for(let Q=0;Q<X.removed.length;Q++){let ct=X.removed[Q],xt=E.indexOf(ct);xt>=0&&(E[xt]=null,v[xt].disconnect(ct))}for(let Q=0;Q<X.added.length;Q++){let ct=X.added[Q],xt=E.indexOf(ct);if(xt===-1){for(let vt=0;vt<v.length;vt++)if(vt>=E.length){E.push(ct),xt=vt;break}else if(E[vt]===null){E[vt]=ct,xt=vt;break}if(xt===-1)break}let _t=v[xt];_t&&_t.connect(ct)}}let nt=new G,it=new G;function at(X,Q,ct){nt.setFromMatrixPosition(Q.matrixWorld),it.setFromMatrixPosition(ct.matrixWorld);let xt=nt.distanceTo(it),_t=Q.projectionMatrix.elements,vt=ct.projectionMatrix.elements,Rt=_t[14]/(_t[10]-1),dt=_t[14]/(_t[10]+1),Mt=(_t[9]+1)/_t[5],St=(_t[9]-1)/_t[5],wt=(_t[8]-1)/_t[0],Tt=(vt[8]+1)/vt[0],Ut=Rt*wt,Ot=Rt*Tt,Wt=xt/(-wt+Tt),Ft=Wt*-wt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ft),X.translateZ(Wt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),_t[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let J=Rt+Wt,Kt=dt+Wt,Zt=Ut-Ft,O=Ot+(xt-Ft),T=Mt*dt/Kt*J,st=St*dt/Kt*J;X.projectionMatrix.makePerspective(Zt,O,T,st,J,Kt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Ct(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,ct=X.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(ct=p.depthFar)),F.near=L.near=U.near=Q,F.far=L.far=U.far=ct,(H!==F.near||$!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,$=F.far),F.layers.mask=X.layers.mask|6,U.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;let xt=X.parent,_t=F.cameras;Ct(F,xt);for(let vt=0;vt<_t.length;vt++)Ct(_t[vt],xt);_t.length===2?at(F,U,L):F.projectionMatrix.copy(U.projectionMatrix),I===null&&X.isPerspectiveCamera&&(I={camera:X,fov:X.fov,zoom:X.zoom}),Nt(X,F,xt)};function Nt(X,Q,ct){ct===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(X){return m[X]};let Et=null;function At(X,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){let ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let xt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,xt=!0);for(let dt=0;dt<ct.length;dt++){let Mt=ct[dt],St=null;if(f!==null)St=f.getViewport(Mt);else{let Tt=d.getViewSubImage(h,Mt);St=Tt.viewport,dt===0&&(t.setRenderTargetTextures(_,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(_))}let wt=B[dt];wt===void 0&&(wt=new En,wt.layers.enable(dt),wt.viewport=new Ae,B[dt]=wt),wt.matrix.fromArray(Mt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Mt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(St.x,St.y,St.width,St.height),dt===0&&(F.matrix.copy(wt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),xt===!0&&F.cameras.push(wt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let dt=d.getDepthInformation(ct[0]);dt&&dt.isValid&&dt.texture&&p.init(dt,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let dt=0;dt<ct.length;dt++){let Mt=ct[dt].camera;if(Mt){let St=m[Mt];St||(St=new mo,m[Mt]=St);let wt=d.getCameraImage(Mt);St.sourceTexture=wt}}}}for(let ct=0;ct<v.length;ct++){let xt=E[ct],_t=v[ct];xt!==null&&_t!==void 0&&_t.update(xt,Q,l||o)}Et&&Et(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Z=new pp;Z.setAnimationLoop(At),this.setAnimationLoop=function(X){Et=X},this.dispose=function(){}}},p1=new _e,vp=new ue;vp.set(-1,0,0,0,1,0,0,0,1);function m1(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,lh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,S,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===An&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===An&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),S=y.envMap,_=y.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(p1.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(vp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let E=v.program;n.uniformBlockBinding(_,E)}function l(_,v){let E=s[_.id];E===void 0&&(p(_),E=u(_),s[_.id]=E,_.addEventListener("dispose",y));let A=v.program;n.updateUBOMapping(_,A);let b=t.render.frame;r[_.id]!==b&&(h(_),r[_.id]=b)}function u(_){let v=d();_.__bindingPointIndex=v;let E=i.createBuffer(),A=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let v=s[_.id],E=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,I=E.length;b<I;b++){let U=E[b];if(Array.isArray(U))for(let L=0,B=U.length;L<B;L++)f(U[L],b,L,A);else f(U,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,E,A){if(x(_,v,E,A)===!0){let b=_.__offset,I=_.value;if(Array.isArray(I)){let U=0;for(let L=0;L<I.length;L++){let B=I[L],F=m(B);g(B,_.__data,U),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function g(_,v,E){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,E)}function x(_,v,E,A){let b=_.value,I=v+"_"+E;if(A[I]===void 0)return typeof b=="number"||typeof b=="boolean"?A[I]=b:ArrayBuffer.isView(b)?A[I]=b.slice():A[I]=b.clone(),!0;{let U=A[I];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return A[I]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(U.equals(b)===!1)return U.copy(b),!0}}return!1}function p(_){let v=_.uniforms,E=0,A=16;for(let I=0,U=v.length;I<U;I++){let L=Array.isArray(v[I])?v[I]:[v[I]];for(let B=0,F=L.length;B<F;B++){let H=L[B],$=Array.isArray(H.value)?H.value:[H.value];for(let z=0,j=$.length;z<j;z++){let ut=$[z],nt=m(ut),it=E%A,at=it%nt.boundary,Ct=it+at;E+=at,Ct!==0&&A-Ct<nt.storage&&(E+=A-Ct),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=nt.storage}}}let b=E%A;return b>0&&(E+=A-b),_.__size=E,_.__cache={},this}function m(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",_),v}function y(_){let v=_.target;v.removeEventListener("dispose",y);let E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}var x1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function y1(){return Ei===null&&(Ei=new ho(x1,16,16,ys,li),Ei.name="DFG_LUT",Ei.minFilter=cn,Ei.magFilter=cn,Ei.wrapS=_i,Ei.wrapT=_i,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var gl=class{constructor(t={}){let{canvas:e=Fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([Nc,Lc,Pc]),m=new Set([Dn,ci,Rr,Cr,Rc,Cc]),y=new Uint32Array(4),S=new Int32Array(4),_=new G,v=null,E=null,A=[],b=[],I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,L=!1,B=null,F=null,H=null,$=null;this._outputColorSpace=je;let z=0,j=0,ut=null,nt=-1,it=null,at=new Ae,Ct=new Ae,Nt=null,Et=new Xt(0),At=0,Z=e.width,X=e.height,Q=1,ct=null,xt=null,_t=new Ae(0,0,Z,X),vt=new Ae(0,0,Z,X),Rt=!1,dt=new yr,Mt=!1,St=!1,wt=new _e,Tt=new G,Ut=new Ae,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Ft(){return ut===null?Q:1}let J=n;function Kt(P,et){return e.getContext(P,et)}let Zt,O,T,st,lt,pt,k,M,w,R,D,N,V,Y,rt,W,ot,C,K,q,mt,bt,gt;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",ge,!1),J===null){let et="webgl2";if(J=Kt(et,P),J===null)throw Kt(et)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(P){throw e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ae("WebGLRenderer: "+P.message),P}function It(){Zt=new Ev(J),Zt.init(),mt=new h1(J,Zt),O=new mv(J,Zt,t,mt),T=new l1(J,Zt),O.reversedDepthBuffer&&h&&T.buffers.depth.setReversed(!0),F=J.createFramebuffer(),H=J.createFramebuffer(),$=J.createFramebuffer(),st=new Rv(J),lt=new $b,pt=new u1(J,Zt,T,lt,O,mt,st),k=new wv(U),M=new Ix(J),bt=new dv(J,M),w=new Tv(J,M,st,bt),R=new Iv(J,w,M,bt,st),C=new Cv(J,O,pt),rt=new gv(lt),D=new Zb(U,k,Zt,O,bt,rt),N=new m1(U,lt),V=new jb,Y=new i1(Zt),ot=new fv(U,k,T,R,g,c),W=new c1(U,R,O),gt=new g1(J,st,O,T),K=new pv(J,Zt,st),q=new Av(J,Zt,st),st.programs=D.programs,U.capabilities=O,U.extensions=Zt,U.properties=lt,U.renderLists=V,U.shadowMap=W,U.state=T,U.info=st}x!==Dn&&(I=new Lv(x,e.width,e.height,a,s,r));let Dt=new Ah(U,J);this.xr=Dt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let P=Zt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Zt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(P){P!==void 0&&(Q=P,this.setSize(Z,X,!1))},this.getSize=function(P){return P.set(Z,X)},this.setSize=function(P,et,yt=!0){if(Dt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=P,X=et,e.width=Math.floor(P*Q),e.height=Math.floor(et*Q),yt===!0&&(e.style.width=P+"px",e.style.height=et+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,P,et)},this.getDrawingBufferSize=function(P){return P.set(Z*Q,X*Q).floor()},this.setDrawingBufferSize=function(P,et,yt){Z=P,X=et,Q=yt,e.width=Math.floor(P*yt),e.height=Math.floor(et*yt),this.setViewport(0,0,P,et)},this.setEffects=function(P){if(x===Dn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let et=0;et<P.length;et++)if(P[et].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(at)},this.getViewport=function(P){return P.copy(_t)},this.setViewport=function(P,et,yt,ft){P.isVector4?_t.set(P.x,P.y,P.z,P.w):_t.set(P,et,yt,ft),T.viewport(at.copy(_t).multiplyScalar(Q).round())},this.getScissor=function(P){return P.copy(vt)},this.setScissor=function(P,et,yt,ft){P.isVector4?vt.set(P.x,P.y,P.z,P.w):vt.set(P,et,yt,ft),T.scissor(Ct.copy(vt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(P){T.setScissorTest(Rt=P)},this.setOpaqueSort=function(P){ct=P},this.setTransparentSort=function(P){xt=P},this.getClearColor=function(P){return P.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(P=!0,et=!0,yt=!0){let ft=0;if(P){let ht=!1;if(ut!==null){let kt=ut.texture.format;ht=p.has(kt)}if(ht){let kt=ut.texture.type,Gt=m.has(kt),zt=ot.getClearColor(),Jt=ot.getClearAlpha(),te=zt.r,fe=zt.g,me=zt.b;Gt?(y[0]=te,y[1]=fe,y[2]=me,y[3]=Jt,J.clearBufferuiv(J.COLOR,0,y)):(S[0]=te,S[1]=fe,S[2]=me,S[3]=Jt,J.clearBufferiv(J.COLOR,0,S))}else ft|=J.COLOR_BUFFER_BIT}et&&(ft|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),yt&&(ft|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft!==0&&J.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),B=P},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ot.dispose(),V.dispose(),Y.dispose(),lt.dispose(),k.dispose(),R.dispose(),bt.dispose(),gt.dispose(),D.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Yt),Dt.removeEventListener("sessionend",ee),re.stop()};function ne(P){P.preventDefault(),oo("WebGLRenderer: Context Lost."),L=!0}function Ht(){oo("WebGLRenderer: Context Restored."),L=!1;let P=st.autoReset,et=W.enabled,yt=W.autoUpdate,ft=W.needsUpdate,ht=W.type;It(),st.autoReset=P,W.enabled=et,W.autoUpdate=yt,W.needsUpdate=ft,W.type=ht}function ge(P){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ye(P){let et=P.target;et.removeEventListener("dispose",ye),we(et)}function we(P){ze(P),lt.remove(P)}function ze(P){let et=lt.get(P).programs;et!==void 0&&(et.forEach(function(yt){D.releaseProgram(yt)}),P.isShaderMaterial&&D.releaseShaderCache(P))}this.renderBufferDirect=function(P,et,yt,ft,ht,kt){et===null&&(et=Ot);let Gt=ht.isMesh&&ht.matrixWorld.determinantAffine()<0,zt=nn(P,et,yt,ft,ht);T.setMaterial(ft,Gt);let Jt=yt.index,te=1;if(ft.wireframe===!0){if(Jt=w.getWireframeAttribute(yt),Jt===void 0)return;te=2}let fe=yt.drawRange,me=yt.attributes.position,jt=fe.start*te,Ee=(fe.start+fe.count)*te;kt!==null&&(jt=Math.max(jt,kt.start*te),Ee=Math.min(Ee,(kt.start+kt.count)*te)),Jt!==null?(jt=Math.max(jt,0),Ee=Math.min(Ee,Jt.count)):me!=null&&(jt=Math.max(jt,0),Ee=Math.min(Ee,me.count));let $e=Ee-jt;if($e<0||$e===1/0)return;bt.setup(ht,ft,zt,yt,Jt);let Fe,Pe=K;if(Jt!==null&&(Fe=M.get(Jt),Pe=q,Pe.setIndex(Fe)),ht.isMesh)ft.wireframe===!0?(T.setLineWidth(ft.wireframeLinewidth*Ft()),Pe.setMode(J.LINES)):Pe.setMode(J.TRIANGLES);else if(ht.isLine){let mn=ft.linewidth;mn===void 0&&(mn=1),T.setLineWidth(mn*Ft()),ht.isLineSegments?Pe.setMode(J.LINES):ht.isLineLoop?Pe.setMode(J.LINE_LOOP):Pe.setMode(J.LINE_STRIP)}else ht.isPoints?Pe.setMode(J.POINTS):ht.isSprite&&Pe.setMode(J.TRIANGLES);if(ht.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{let mn=ht._multiDrawStarts,Vt=ht._multiDrawCounts,Sn=ht._multiDrawCount,ve=Jt?M.get(Jt).bytesPerElement:1,Yn=lt.get(ft).currentProgram.getUniforms();for(let xi=0;xi<Sn;xi++)Yn.setValue(J,"_gl_DrawID",xi),Pe.render(mn[xi]/ve,Vt[xi])}else if(ht.isInstancedMesh)Pe.renderInstances(jt,$e,ht.count);else if(yt.isInstancedBufferGeometry){let mn=yt._maxInstanceCount!==void 0?yt._maxInstanceCount:1/0,Vt=Math.min(yt.instanceCount,mn);Pe.renderInstances(jt,$e,Vt)}else Pe.render(jt,$e)};function Ue(P,et,yt,ft){B!==null&&P.isNodeMaterial&&B.setObject(ft,P),Mt===!0&&rt.setState(P,yt,!1),P.transparent===!0&&P.side===ln&&P.forceSinglePass===!1?(P.side=An,P.needsUpdate=!0,pn(P,et,ft),P.side=ps,P.needsUpdate=!0,pn(P,et,ft),P.side=ln):pn(P,et,ft)}this.compile=function(P,et,yt=null){yt===null&&(yt=P),B!==null&&B.renderStart(P,et,yt),E=Y.get(yt),E.init(et),b.push(E),yt.traverseVisible(function(ht){ht.isLight&&ht.layers.test(et.layers)&&(E.pushLight(ht),ht.castShadow&&E.pushShadow(ht))}),P!==yt&&P.traverseVisible(function(ht){ht.isLight&&ht.layers.test(et.layers)&&(E.pushLight(ht),ht.castShadow&&E.pushShadow(ht))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),St=this.localClippingEnabled,Mt=rt.init(this.clippingPlanes,St),Mt===!0&&rt.setGlobalState(this.clippingPlanes,et),B!==null&&W.render(E.state.shadowsArray,yt,et);let ft=new Set;return P.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;let kt=ht.material;if(kt)if(Array.isArray(kt))for(let Gt=0;Gt<kt.length;Gt++){let zt=kt[Gt];Ue(zt,yt,et,ht),ft.add(zt)}else Ue(kt,yt,et,ht),ft.add(kt)}),E=b.pop(),B!==null&&B.renderEnd(),ft},this.compileAsync=function(P,et,yt=null){let ft=this.compile(P,et,yt);return new Promise(ht=>{function kt(){if(ft.forEach(function(Gt){let Jt=lt.get(Gt).currentProgram;(Jt===void 0||Jt.isReady())&&ft.delete(Gt)}),ft.size===0){ht(P);return}setTimeout(kt,10)}Zt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Xe=null;function Pt(P){Xe&&Xe(P)}function Yt(){re.stop()}function ee(){re.start()}let re=new pp;re.setAnimationLoop(Pt),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(P){Xe=P,Dt.setAnimationLoop(P),P===null?re.stop():re.start()},Dt.addEventListener("sessionstart",Yt),Dt.addEventListener("sessionend",ee),this.render=function(P,et){if(et!==void 0&&et.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(P,et);let yt=Dt.enabled===!0&&Dt.isPresenting===!0,ft=I!==null&&(ut===null||yt)&&I.begin(U,ut);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(et),et=Dt.getCamera()),P.isScene===!0&&P.onBeforeRender(U,P,et,ut),E=Y.get(P,b.length),E.init(et),E.state.textureUnits=pt.getTextureUnits(),b.push(E),wt.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),dt.setFromProjectionMatrix(wt,ri,et.reversedDepth),St=this.localClippingEnabled,Mt=rt.init(this.clippingPlanes,St),v=V.get(P,A.length),v.init(),A.push(v),Dt.enabled===!0&&Dt.isPresenting===!0){let Gt=U.xr.getDepthSensingMesh();Gt!==null&&Ie(Gt,et,-1/0,U.sortObjects)}Ie(P,et,0,U.sortObjects),v.finish(),B!==null&&B.updateLights(E.state.lightsArray),U.sortObjects===!0&&v.sort(ct,xt),Wt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Wt&&ot.addToRenderList(v,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&rt.beginShadows();let ht=E.state.shadowsArray;if(W.render(ht,P,et),Mt===!0&&rt.endShadows(),(ft&&I.hasRenderPass())===!1){let Gt=v.opaque,zt=v.transmissive;if(E.setupLights(),et.isArrayCamera){let Jt=et.cameras;if(zt.length>0)for(let te=0,fe=Jt.length;te<fe;te++){let me=Jt[te];mi(Gt,zt,P,me)}Wt&&ot.render(P);for(let te=0,fe=Jt.length;te<fe;te++){let me=Jt[te];Wn(v,P,me,me.viewport)}}else zt.length>0&&mi(Gt,zt,P,et),Wt&&ot.render(P),Wn(v,P,et)}ut!==null&&j===0&&(pt.updateMultisampleRenderTarget(ut),pt.updateRenderTargetMipmap(ut)),ft&&I.end(U),P.isScene===!0&&P.onAfterRender(U,P,et),bt.resetDefaultState(),nt=-1,it=null,b.pop(),b.length>0?(E=b[b.length-1],pt.setTextureUnits(E.state.textureUnits),Mt===!0&&rt.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,B!==null&&B.renderEnd()};function Ie(P,et,yt,ft){if(P.visible===!1)return;if(P.layers.test(et.layers)){if(P.isGroup)yt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(et);else if(P.isLightProbeGrid)E.pushLightProbeGrid(P);else if(P.isLight)E.pushLight(P),P.castShadow&&E.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(dt)){ft&&Ut.setFromMatrixPosition(P.matrixWorld).applyMatrix4(wt);let Gt=R.update(P),zt=P.material;zt.visible&&v.push(P,Gt,zt,yt,Ut.z,null,et)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(dt))){let Gt=R.update(P),zt=P.material;if(ft&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ut.copy(P.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Ut.copy(Gt.boundingSphere.center)),Ut.applyMatrix4(P.matrixWorld).applyMatrix4(wt)),Array.isArray(zt)){let Jt=Gt.groups;for(let te=0,fe=Jt.length;te<fe;te++){let me=Jt[te],jt=zt[me.materialIndex];jt&&jt.visible&&v.push(P,Gt,jt,yt,Ut.z,me,et)}}else zt.visible&&v.push(P,Gt,zt,yt,Ut.z,null,et)}}let kt=P.children;for(let Gt=0,zt=kt.length;Gt<zt;Gt++)Ie(kt[Gt],et,yt,ft)}function Wn(P,et,yt,ft){let{opaque:ht,transmissive:kt,transparent:Gt}=P;E.setupLightsView(yt),Mt===!0&&rt.setGlobalState(U.clippingPlanes,yt),ft&&T.viewport(at.copy(ft)),ht.length>0&&Xn(ht,et,yt),kt.length>0&&Xn(kt,et,yt),Gt.length>0&&Xn(Gt,et,yt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function mi(P,et,yt,ft){if((yt.isScene===!0?yt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ft.id]===void 0){let jt=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ft.id]=new Ln(1,1,{generateMipmaps:!0,type:jt?li:Dn,minFilter:gs,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let kt=E.state.transmissionRenderTarget[ft.id],Gt=ft.viewport||at;kt.setSize(Gt.z*U.transmissionResolutionScale,Gt.w*U.transmissionResolutionScale);let zt=U.getRenderTarget(),Jt=U.getActiveCubeFace(),te=U.getActiveMipmapLevel();U.setRenderTarget(kt),U.getClearColor(Et),At=U.getClearAlpha(),At<1&&U.setClearColor(16777215,.5),U.clear(),Wt&&ot.render(yt);let fe=U.toneMapping;U.toneMapping=ai;let me=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),E.setupLightsView(ft),Mt===!0&&rt.setGlobalState(U.clippingPlanes,ft),Xn(P,yt,ft),pt.updateMultisampleRenderTarget(kt),pt.updateRenderTargetMipmap(kt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ee=0,$e=et.length;Ee<$e;Ee++){let Fe=et[Ee],{object:Pe,geometry:mn,material:Vt,group:Sn}=Fe;if(Vt.side===ln&&Pe.layers.test(ft.layers)){let ve=Vt.side;Vt.side=An,Vt.needsUpdate=!0,Di(Pe,yt,ft,mn,Vt,Sn),Vt.side=ve,Vt.needsUpdate=!0,jt=!0}}jt===!0&&(pt.updateMultisampleRenderTarget(kt),pt.updateRenderTargetMipmap(kt))}U.setRenderTarget(zt,Jt,te),U.setClearColor(Et,At),me!==void 0&&(ft.viewport=me),U.toneMapping=fe}function Xn(P,et,yt){let ft=et.isScene===!0?et.overrideMaterial:null;for(let ht=0,kt=P.length;ht<kt;ht++){let Gt=P[ht],{object:zt,geometry:Jt,group:te}=Gt,fe=Gt.material;fe.allowOverride===!0&&ft!==null&&(fe=ft),zt.layers.test(yt.layers)&&Di(zt,et,yt,Jt,fe,te)}}function Di(P,et,yt,ft,ht,kt){B!==null&&ht.isNodeMaterial&&B.setObject(P,ht),P.onBeforeRender(U,et,yt,ft,ht,kt),P.modelViewMatrix.multiplyMatrices(yt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ht.onBeforeRender(U,et,yt,ft,P,kt),ht.transparent===!0&&ht.side===ln&&ht.forceSinglePass===!1?(ht.side=An,ht.needsUpdate=!0,U.renderBufferDirect(yt,et,ft,ht,P,kt),ht.side=ps,ht.needsUpdate=!0,U.renderBufferDirect(yt,et,ft,ht,P,kt),ht.side=ln):U.renderBufferDirect(yt,et,ft,ht,P,kt),P.onAfterRender(U,et,yt,ft,ht,kt)}function pn(P,et,yt){et.isScene!==!0&&(et=Ot);let ft=lt.get(P),ht=E.state.lights,kt=E.state.shadowsArray,Gt=ht.state.version,zt=D.getParameters(P,ht.state,kt,et,yt,E.state.lightProbeGridArray),Jt=D.getProgramCacheKey(zt),te=ft.programs;ft.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?et.environment:null,ft.fog=et.fog;let fe=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ft.envMap=k.get(P.envMap||ft.environment,fe),ft.envMapRotation=ft.environment!==null&&P.envMap===null?et.environmentRotation:P.envMapRotation,te===void 0&&(P.addEventListener("dispose",ye),te=new Map,ft.programs=te);let me=te.get(Jt);if(me!==void 0){if(ft.currentProgram===me&&ft.lightsStateVersion===Gt)return Vr(P,zt),me}else zt.uniforms=D.getUniforms(P),B!==null&&P.isNodeMaterial&&B.build(P,yt,zt),P.onBeforeCompile(zt,U),me=D.acquireProgram(zt,Jt),te.set(Jt,me),ft.uniforms=zt.uniforms;let jt=ft.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(jt.clippingPlanes=rt.uniform),Vr(P,zt),ft.needsLights=gi(P),ft.lightsStateVersion=Gt,ft.needsLights&&(jt.ambientLightColor.value=ht.state.ambient,jt.lightProbe.value=ht.state.probe,jt.sunLights.value=ht.state.sun,jt.sunLightShadows.value=ht.state.sunShadow,jt.directionalLights.value=ht.state.directional,jt.directionalLightShadows.value=ht.state.directionalShadow,jt.spotLights.value=ht.state.spot,jt.spotLightShadows.value=ht.state.spotShadow,jt.rectAreaLights.value=ht.state.rectArea,jt.ltc_1.value=ht.state.rectAreaLTC1,jt.ltc_2.value=ht.state.rectAreaLTC2,jt.pointLights.value=ht.state.point,jt.pointLightShadows.value=ht.state.pointShadow,jt.hemisphereLights.value=ht.state.hemi,jt.sunShadowMatrix.value=ht.state.sunShadowMatrix,jt.sunShadowCascade.value=ht.state.sunShadowCascade,jt.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,jt.spotLightMatrix.value=ht.state.spotLightMatrix,jt.spotLightMap.value=ht.state.spotLightMap,jt.pointShadowMatrix.value=ht.state.pointShadowMatrix),ft.lightProbeGrid=E.state.lightProbeGridArray.length>0,ft.currentProgram=me,ft.uniformsList=null,me}function la(P){if(P.uniformsList===null){let et=P.currentProgram.getUniforms();P.uniformsList=Lr.seqWithValue(et.seq,P.uniforms)}return P.uniformsList}function Vr(P,et){let yt=lt.get(P);yt.outputColorSpace=et.outputColorSpace,yt.batching=et.batching,yt.batchingColor=et.batchingColor,yt.instancing=et.instancing,yt.instancingColor=et.instancingColor,yt.instancingMorph=et.instancingMorph,yt.skinning=et.skinning,yt.morphTargets=et.morphTargets,yt.morphNormals=et.morphNormals,yt.morphColors=et.morphColors,yt.morphTargetsCount=et.morphTargetsCount,yt.numClippingPlanes=et.numClippingPlanes,yt.numIntersection=et.numClipIntersection,yt.vertexAlphas=et.vertexAlphas,yt.vertexTangents=et.vertexTangents,yt.toneMapping=et.toneMapping}function Ws(P,et){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;_.setFromMatrixPosition(et.matrixWorld);for(let yt=0,ft=P.length;yt<ft;yt++){let ht=P[yt];if(ht.texture!==null&&ht.boundingBox.containsPoint(_))return ht}return null}function nn(P,et,yt,ft,ht){et.isScene!==!0&&(et=Ot),pt.resetTextureUnits();let kt=et.fog,Gt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial?et.environment:null,zt=ut===null?U.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:xe.workingColorSpace,Jt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial&&!ft.envMap||ft.isMeshPhongMaterial&&!ft.envMap,te=k.get(ft.envMap||Gt,Jt),fe=ft.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,me=!!yt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),jt=!!yt.morphAttributes.position,Ee=!!yt.morphAttributes.normal,$e=!!yt.morphAttributes.color,Fe=ai;ft.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Fe=U.toneMapping);let Pe=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,mn=Pe!==void 0?Pe.length:0,Vt=lt.get(ft),Sn=E.state.lights;if(Mt===!0&&(St===!0||P!==it)){let Ne=P===it&&ft.id===nt;rt.setState(ft,P,Ne)}let ve=!1;ft.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Sn.state.version||Vt.outputColorSpace!==zt||ht.isBatchedMesh&&Vt.batching===!1||!ht.isBatchedMesh&&Vt.batching===!0||ht.isBatchedMesh&&Vt.batchingColor===!0&&ht._colorsTexture===null||ht.isBatchedMesh&&Vt.batchingColor===!1&&ht._colorsTexture!==null||ht.isInstancedMesh&&Vt.instancing===!1||!ht.isInstancedMesh&&Vt.instancing===!0||ht.isSkinnedMesh&&Vt.skinning===!1||!ht.isSkinnedMesh&&Vt.skinning===!0||ht.isInstancedMesh&&Vt.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&Vt.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&Vt.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&Vt.instancingMorph===!1&&ht.morphTexture!==null||Vt.envMap!==te||ft.fog===!0&&Vt.fog!==kt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==rt.numPlanes||Vt.numIntersection!==rt.numIntersection)||Vt.vertexAlphas!==fe||Vt.vertexTangents!==me||Vt.morphTargets!==jt||Vt.morphNormals!==Ee||Vt.morphColors!==$e||Vt.toneMapping!==Fe||Vt.morphTargetsCount!==mn||!!Vt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Vt.__version=ft.version);let Yn=Vt.currentProgram;ve===!0&&(Yn=pn(ft,et,ht),B&&ft.isNodeMaterial&&B.onUpdateProgram(ft,Yn,Vt));let xi=!1,$i=!1,Xs=!1,Ce=Yn.getUniforms(),qe=Vt.uniforms;if(T.useProgram(Yn.program)&&(xi=!0,$i=!0,Xs=!0),ft.id!==nt&&(nt=ft.id,$i=!0),Vt.needsLights){let Ne=Ws(E.state.lightProbeGridArray,ht);Vt.lightProbeGrid!==Ne&&(Vt.lightProbeGrid=Ne,$i=!0)}if(xi||it!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ce.setValue(J,"projectionMatrix",P.projectionMatrix),Ce.setValue(J,"viewMatrix",P.matrixWorldInverse);let ji=Ce.map.cameraPosition;ji!==void 0&&ji.setValue(J,Tt.setFromMatrixPosition(P.matrixWorld)),O.logarithmicDepthBuffer&&Ce.setValue(J,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ce.setValue(J,"isOrthographic",P.isOrthographicCamera===!0),it!==P&&(it=P,$i=!0,Xs=!0)}if(Vt.needsLights&&(Sn.state.sunShadowMap.length>0&&Ce.setValue(J,"sunShadowMap",Sn.state.sunShadowMap,pt),Sn.state.directionalShadowMap.length>0&&Ce.setValue(J,"directionalShadowMap",Sn.state.directionalShadowMap,pt),Sn.state.spotShadowMap.length>0&&Ce.setValue(J,"spotShadowMap",Sn.state.spotShadowMap,pt),Sn.state.pointShadowMap.length>0&&Ce.setValue(J,"pointShadowMap",Sn.state.pointShadowMap,pt)),ht.isSkinnedMesh){Ce.setOptional(J,ht,"bindMatrix"),Ce.setOptional(J,ht,"bindMatrixInverse");let Ne=ht.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ce.setValue(J,"boneTexture",Ne.boneTexture,pt))}ht.isBatchedMesh&&(Ce.setOptional(J,ht,"batchingTexture"),Ce.setValue(J,"batchingTexture",ht._matricesTexture,pt),Ce.setOptional(J,ht,"batchingIdTexture"),Ce.setValue(J,"batchingIdTexture",ht._indirectTexture,pt),Ce.setOptional(J,ht,"batchingColorTexture"),ht._colorsTexture!==null&&Ce.setValue(J,"batchingColorTexture",ht._colorsTexture,pt));let Ji=yt.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&C.update(ht,yt,Yn),($i||Vt.receiveShadow!==ht.receiveShadow)&&(Vt.receiveShadow=ht.receiveShadow,Ce.setValue(J,"receiveShadow",ht.receiveShadow)),(ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial)&&ft.envMap===null&&et.environment!==null&&(qe.envMapIntensity.value=et.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=y1()),$i){if(Ce.setValue(J,"toneMappingExposure",U.toneMappingExposure),Vt.needsLights&&Pn(qe,Xs),kt&&ft.fog===!0&&N.refreshFogUniforms(qe,kt),N.refreshMaterialUniforms(qe,ft,Q,X,E.state.transmissionRenderTarget[P.id]),Vt.needsLights&&Vt.lightProbeGrid){let Ne=Vt.lightProbeGrid;qe.probesSH.value=Ne.texture,qe.probesMin.value.copy(Ne.boundingBox.min),qe.probesMax.value.copy(Ne.boundingBox.max),qe.probesResolution.value.copy(Ne.resolution)}Lr.upload(J,la(Vt),qe,pt)}if(ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Lr.upload(J,la(Vt),qe,pt),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ce.setValue(J,"center",ht.center),Ce.setValue(J,"modelViewMatrix",ht.modelViewMatrix),Ce.setValue(J,"normalMatrix",ht.normalMatrix),Ce.setValue(J,"modelMatrix",ht.matrixWorld),ft.uniformsGroups!==void 0){let Ne=ft.uniformsGroups;for(let ji=0,Ys=Ne.length;ji<Ys;ji++){let mf=Ne[ji];gt.update(mf,Yn),gt.bind(mf,Yn)}}return Yn}function Pn(P,et){P.ambientLightColor.needsUpdate=et,P.lightProbe.needsUpdate=et,P.sunLights.needsUpdate=et,P.sunLightShadows.needsUpdate=et,P.directionalLights.needsUpdate=et,P.directionalLightShadows.needsUpdate=et,P.pointLights.needsUpdate=et,P.pointLightShadows.needsUpdate=et,P.spotLights.needsUpdate=et,P.spotLightShadows.needsUpdate=et,P.rectAreaLights.needsUpdate=et,P.hemisphereLights.needsUpdate=et}function gi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(P,et,yt){let ft=lt.get(P);ft.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),lt.get(P.texture).__webglTexture=et,lt.get(P.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:yt,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,et){let yt=lt.get(P);yt.__webglFramebuffer=et,yt.__useDefaultFramebuffer=et===void 0},this.setRenderTarget=function(P,et=0,yt=0){ut=P,z=et,j=yt;let ft=null,ht=!1,kt=!1;if(P){let zt=lt.get(P);if(zt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(J.FRAMEBUFFER,zt.__webglFramebuffer),at.copy(P.viewport),Ct.copy(P.scissor),Nt=P.scissorTest,T.viewport(at),T.scissor(Ct),T.setScissorTest(Nt),nt=-1;return}else if(zt.__webglFramebuffer===void 0)pt.setupRenderTarget(P);else if(zt.__hasExternalTextures)pt.rebindTextures(P,lt.get(P.texture).__webglTexture,lt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let fe=P.depthTexture;if(zt.__boundDepthTexture!==fe){if(fe!==null&&lt.has(fe)&&(P.width!==fe.image.width||P.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(P)}}let Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(kt=!0);let te=lt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(te[et])?ft=te[et][yt]:ft=te[et],ht=!0):P.samples>0&&pt.useMultisampledRTT(P)===!1?ft=lt.get(P).__webglMultisampledFramebuffer:Array.isArray(te)?ft=te[yt]:ft=te,at.copy(P.viewport),Ct.copy(P.scissor),Nt=P.scissorTest}else at.copy(_t).multiplyScalar(Q).floor(),Ct.copy(vt).multiplyScalar(Q).floor(),Nt=Rt;if(yt!==0&&(ft=F),T.bindFramebuffer(J.FRAMEBUFFER,ft)&&T.drawBuffers(P,ft),T.viewport(at),T.scissor(Ct),T.setScissorTest(Nt),ht){let zt=lt.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+et,zt.__webglTexture,yt)}else if(kt){let zt=et;for(let Jt=0;Jt<P.textures.length;Jt++){let te=lt.get(P.textures[Jt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Jt,te.__webglTexture,yt,zt)}}else if(P!==null&&yt!==0){let zt=lt.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,zt.__webglTexture,yt)}nt=-1};function Ui(P){let et=lt.get(P);return(et.__readFormat!==P.format||et.__readType!==P.type)&&(et.__readFormat=P.format,et.__readType=P.type,et.__formatReadable=O.textureFormatReadable(P.format),et.__typeReadable=O.textureTypeReadable(P.type)),et}this.readRenderTargetPixels=function(P,et,yt,ft,ht,kt,Gt,zt=0){if(!(P&&P.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=lt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Jt=Jt[Gt]),Jt){T.bindFramebuffer(J.FRAMEBUFFER,Jt);try{let te=P.textures[zt],fe=te.format,me=te.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+zt);let jt=Ui(te);if(jt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=P.width-ft&&yt>=0&&yt<=P.height-ht&&J.readPixels(et,yt,ft,ht,mt.convert(fe),mt.convert(me),kt)}finally{let te=ut!==null?lt.get(ut).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(P,et,yt,ft,ht,kt,Gt,zt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=lt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Jt=Jt[Gt]),Jt)if(et>=0&&et<=P.width-ft&&yt>=0&&yt<=P.height-ht){T.bindFramebuffer(J.FRAMEBUFFER,Jt);let te=P.textures[zt],fe=te.format,me=te.type;P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+zt);let jt=Ui(te);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Ee),J.bufferData(J.PIXEL_PACK_BUFFER,kt.byteLength,J.STREAM_READ),J.readPixels(et,yt,ft,ht,mt.convert(fe),mt.convert(me),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let $e=ut!==null?lt.get(ut).__webglFramebuffer:null;T.bindFramebuffer(J.FRAMEBUFFER,$e);let Fe=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await Bd(J,Fe,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Ee),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,kt),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Ee),J.deleteSync(Fe),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,et=null,yt=0){let ft=Math.pow(2,-yt),ht=Math.floor(P.image.width*ft),kt=Math.floor(P.image.height*ft),Gt=et!==null?et.x:0,zt=et!==null?et.y:0;pt.setTexture2D(P,0),J.copyTexSubImage2D(J.TEXTURE_2D,yt,0,0,Gt,zt,ht,kt),T.unbindTexture()},this.copyTextureToTexture=function(P,et,yt=null,ft=null,ht=0,kt=0){let Gt,zt,Jt,te,fe,me,jt,Ee,$e,Fe=P.isCompressedTexture?P.mipmaps[kt]:P.image;if(yt!==null)Gt=yt.max.x-yt.min.x,zt=yt.max.y-yt.min.y,Jt=yt.isBox3?yt.max.z-yt.min.z:1,te=yt.min.x,fe=yt.min.y,me=yt.isBox3?yt.min.z:0;else{let qe=Math.pow(2,-ht);Gt=Math.floor(Fe.width*qe),zt=Math.floor(Fe.height*qe),P.isDataArrayTexture?Jt=Fe.depth:P.isData3DTexture?Jt=Math.floor(Fe.depth*qe):Jt=1,te=0,fe=0,me=0}ft!==null?(jt=ft.x,Ee=ft.y,$e=ft.z):(jt=0,Ee=0,$e=0);let Pe=mt.convert(et.format),mn=mt.convert(et.type),Vt;et.isData3DTexture?(pt.setTexture3D(et,0),Vt=J.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(pt.setTexture2DArray(et,0),Vt=J.TEXTURE_2D_ARRAY):(pt.setTexture2D(et,0),Vt=J.TEXTURE_2D),T.activeTexture(J.TEXTURE0),T.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,et.flipY),T.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),T.pixelStorei(J.UNPACK_ALIGNMENT,et.unpackAlignment);let Sn=T.getParameter(J.UNPACK_ROW_LENGTH),ve=T.getParameter(J.UNPACK_IMAGE_HEIGHT),Yn=T.getParameter(J.UNPACK_SKIP_PIXELS),xi=T.getParameter(J.UNPACK_SKIP_ROWS),$i=T.getParameter(J.UNPACK_SKIP_IMAGES);T.pixelStorei(J.UNPACK_ROW_LENGTH,Fe.width),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Fe.height),T.pixelStorei(J.UNPACK_SKIP_PIXELS,te),T.pixelStorei(J.UNPACK_SKIP_ROWS,fe),T.pixelStorei(J.UNPACK_SKIP_IMAGES,me);let Xs=P.isDataArrayTexture||P.isData3DTexture,Ce=et.isDataArrayTexture||et.isData3DTexture;if(P.isDepthTexture){let qe=lt.get(P),Ji=lt.get(et),Ne=lt.get(qe.__renderTarget),ji=lt.get(Ji.__renderTarget);T.bindFramebuffer(J.READ_FRAMEBUFFER,Ne.__webglFramebuffer),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Ys=0;Ys<Jt;Ys++)Xs&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,lt.get(P).__webglTexture,ht,me+Ys),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,lt.get(et).__webglTexture,kt,$e+Ys)),J.blitFramebuffer(te,fe,Gt,zt,jt,Ee,Gt,zt,J.DEPTH_BUFFER_BIT,J.NEAREST);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ht!==0||P.isRenderTargetTexture||lt.has(P)){let qe=lt.get(P),Ji=lt.get(et);T.bindFramebuffer(J.READ_FRAMEBUFFER,H),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,$);for(let Ne=0;Ne<Jt;Ne++)Xs?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,qe.__webglTexture,ht,me+Ne):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,qe.__webglTexture,ht),Ce?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ji.__webglTexture,kt,$e+Ne):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ji.__webglTexture,kt),ht!==0?J.blitFramebuffer(te,fe,Gt,zt,jt,Ee,Gt,zt,J.COLOR_BUFFER_BIT,J.NEAREST):Ce?J.copyTexSubImage3D(Vt,kt,jt,Ee,$e+Ne,te,fe,Gt,zt):J.copyTexSubImage2D(Vt,kt,jt,Ee,te,fe,Gt,zt);T.bindFramebuffer(J.READ_FRAMEBUFFER,null),T.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ce?P.isDataTexture||P.isData3DTexture?J.texSubImage3D(Vt,kt,jt,Ee,$e,Gt,zt,Jt,Pe,mn,Fe.data):et.isCompressedArrayTexture?J.compressedTexSubImage3D(Vt,kt,jt,Ee,$e,Gt,zt,Jt,Pe,Fe.data):J.texSubImage3D(Vt,kt,jt,Ee,$e,Gt,zt,Jt,Pe,mn,Fe):P.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,kt,jt,Ee,Gt,zt,Pe,mn,Fe.data):P.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,kt,jt,Ee,Fe.width,Fe.height,Pe,Fe.data):J.texSubImage2D(J.TEXTURE_2D,kt,jt,Ee,Gt,zt,Pe,mn,Fe);T.pixelStorei(J.UNPACK_ROW_LENGTH,Sn),T.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ve),T.pixelStorei(J.UNPACK_SKIP_PIXELS,Yn),T.pixelStorei(J.UNPACK_SKIP_ROWS,xi),T.pixelStorei(J.UNPACK_SKIP_IMAGES,$i),kt===0&&et.generateMipmaps&&J.generateMipmap(Vt),T.unbindTexture()},this.initRenderTarget=function(P){lt.get(P).__webglFramebuffer===void 0&&pt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?pt.setTextureCube(P,0):P.isData3DTexture?pt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?pt.setTexture2DArray(P,0):pt.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){z=0,j=0,ut=null,T.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};(function(i){"use strict";let t=Object.freeze([Object.freeze({key:"sky",label:"Sky strip"}),Object.freeze({key:"precipitation",label:"Rain, snow and hail"}),Object.freeze({key:"wind",label:"Wind effects"}),Object.freeze({key:"reflections",label:"Sun, moon and cloud reflections"}),Object.freeze({key:"trees",label:"Trees and palms"}),Object.freeze({key:"traffic",label:"Road traffic"}),Object.freeze({key:"sidewalk",label:"Walkers and cyclists"}),Object.freeze({key:"boats",label:"Boats"}),Object.freeze({key:"beachPlay",label:"Beach play"})]),e=new Set(t.map(({key:u})=>u)),n=new Set(["left","center","right"]),s=(u,d)=>u==="dockAlignment"?n.has(d):e.has(u)&&typeof d=="boolean",r=u=>n.has(u?.dockAlignment)?u.dockAlignment:"right";function o(u){return u===void 0||!!(u&&typeof u=="object"&&!Array.isArray(u)&&Object.entries(u).every(([d,h])=>s(d,h)))}function a(u,d){return u?.[d]!==!1}function c(u,d,h){if(!s(d,h)||h===(d==="dockAlignment"?r(u):a(u,d)))return u;let f={...u};return h===(d==="dockAlignment"?"right":!0)?delete f[d]:f[d]=h,Object.keys(f).length?f:void 0}function l(u,d){return a(d,"wind")?u:{...u,windSpeed:0,windBearing:void 0}}i.RoomcraftSceneSettings=Object.freeze({features:t,valid:o,enabled:a,withFeature:c,wind:l,dockAlignment:r})})(typeof window>"u"?globalThis:window);var $o=(typeof window>"u"?globalThis:window).RoomcraftSceneSettings,bp=$o.features,FT=$o.valid,ui=$o.enabled,_l=$o.wind,Mp=$o.dockAlignment;function Un(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ce,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=Sp(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let g=Sp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function Sp(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new be(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+d,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var lg=tu(vl(),1);var Jo=new G;function Qn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Jo.copy(t),Jo[n]=0,Jo.normalize();let l=.5*o/(o+a),u=1-Jo.angleTo(i)/c;return Math.sign(Jo[e])===1?u*l:a/(o+a)+l+l*(1-u)}var bl=class i extends Me{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new G,l=new G,u=new G(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new G,p=.5/o;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*r,d[m+1]=u.y*Math.sign(c.y)+l.y*r,d[m+2]=u.z*Math.sign(c.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[y+0]=Qn(x,l,"z","y",r,n),f[y+1]=1-Qn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[y+0]=1-Qn(x,l,"z","y",r,n),f[y+1]=1-Qn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[y+0]=1-Qn(x,l,"x","z",r,t),f[y+1]=Qn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-Qn(x,l,"x","z",r,t),f[y+1]=1-Qn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-Qn(x,l,"x","y",r,t),f[y+1]=1-Qn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[y+0]=Qn(x,l,"x","y",r,t),f[y+1]=1-Qn(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var wp=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),_1=Math.PI*2;function v1(){let i=new se,t=new Me(1,1,1),e=new Se(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new ke({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,d,h,f,g,x){let p=new he(c,typeof l=="string"?s(l):l);return p.position.set(u,d,h),p.scale.set(f,g,x),a.add(p),p}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let d=u.map(f=>(f.updateMatrix(),f.geometry.toNonIndexed().applyMatrix4(f.matrix))),h=new he(Un(d),l);h.castShadow=u.some(f=>f.castShadow),d.forEach(f=>f.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function b1({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new Ge({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:ln});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let f of[-1,1])t(i,s?"#deb181":"#aa785d",f*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",f*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let d=(a+c)/2,h=c-a;for(let f of[-e/2+l/2,e/2-l/2]){t(i,o,f,c,0,l,1.8,n),t(i,u,f,d,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,f,d,g,l,h,l)}for(let f of[-n/2+l/2,n/2-l/2])t(i,o,0,c,f,e-l*2,1.8,l),t(i,u,0,d,f,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function M1({box:i,oval:t,root:e},n,s,r){let o=new se;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new se;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function S1(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new Ge({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),d=new Ge({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,p=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,p,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let m=p-1.5,y=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],g*t+m*r,n+3+(2+p*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);y.rotation.z=m*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>M1(i,x,r*(1.72-x*.17),g)),f=Array.from({length:5},(g,x)=>{let p=r*(.45+x%3*.18),m=c(o,d,0,0,0,p,p,p);return m.name="bubble-"+x,m});return g=>{for(let[x,{fish:p,tail:m}]of h.entries()){let y=g*(.43+x*.06)+x*2.07+.5,S=t*(.24+x*.036),_=e*(.17+x*.038);p.position.set(Math.cos(y)*S,n+10+x*3.65+Math.sin(y*1.7)*2.15,Math.sin(y)*_),p.rotation.y=-Math.atan2(Math.cos(y)*_,-Math.sin(y)*S),m.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,p]of f.entries()){let m=(g*.3+x/f.length)%1;p.position.set(t*.33+Math.sin(m*_1+x)*r,n+5+m*20,e*.23),p.visible=m>.08&&m<.94}}}function w1({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let f=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);f.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new se;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,f)=>{let g=a*(1-f*.16);return e(l,f%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),d=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let f of[-1,1]){let g=new se;g.position.set(f*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*f*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*f*.28;for(let p of[-1,0,1])e(g,"#ecc297",(p*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);d.push({leg:g,side:h,front:f})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let f=h*.35+.7,g=Math.cos(f)*n*.13,x=Math.sin(f)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(f)*s*.09,-Math.sin(f)*n*.13);for(let[p,m]of u.entries()){let y=p+1;m.position.set(-(3.55+y*1.24)*a,-.19*y*a,Math.sin(h*1.75-y*.55)*y*a*.32)}for(let{leg:p,side:m,front:y}of d)p.rotation.y=Math.sin(h*3.6)*m*y*.31}}function Ep(i,t,e){if(!Object.hasOwn(wp,i))return null;let n=wp[i],s=v1(),r=n==="aquarium",{base:o,top:a}=b1(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?S1(s,t,e,o,a,c):w1(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,d){l(Math.max(0,d))}}}var tt=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),E1=Object.freeze({sage:tt.sage,mint:tt.aqua,sky:tt.blue,peach:tt.peach,coral:"#cf8979",lavender:tt.lilac,butter:tt.honey,cream:tt.linen,white:tt.cream,oak:tt.oakLight,walnut:tt.walnut,charcoal:"#505b68",brass:tt.brass,terracotta:"#b97d63",forest:tt.moss,blush:tt.blush,teddy:"#aa8063",slate:"#9b9b9d"}),T1=new Set([tt.oak,tt.oakLight,tt.walnut]),A1=new Set([tt.sage,tt.moss,tt.linen,tt.lilac,tt.lilacLight,tt.blush,tt.peach,tt.oatmeal,tt.upholsteryShadow,tt.denim]);function R1(i,t){let e=T1.has(i)?1:A1.has(i)?2:0,n=i===tt.glass||i===tt.darkGlass||i===tt.blueWater,s=i===tt.brass,r=i===tt.steel||i===tt.basinSteel,o=new ke({color:i,roughness:s||r?.37:n?.33:i===tt.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var Ih=class{constructor(t,e){this.root=new se,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,R1(e,this.grainDirection));let a=new he(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),d=u>.2?new bl(s,r,o,2,u):new Me(s,r,o);return this.part(d,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new Ye(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Se(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new _n(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Lt(l,u)),c=new Eo(a,24);return c.scale(s,r,o),this.part(c,tt.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Un(s);s.length>1&&s.forEach(a=>a.dispose());let o=new he(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function Ti(i,t,e,n,s,r,o=tt.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function jo(i,t,e,n,s,r,o,a){let c=o===tt.linen?tt.binding:tt.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function C1(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?tt.upholsteryShadow:tt.moss,u=a?tt.oatmeal:tt.sage,d=o?t*.5:t,h=r&&!o?e*.57:e,f=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(Ti(i,f,g,d,h,5),i.box(f,5,g,d*.97,22,h*.98,l,8),r){let v=o?t*.52:t*.34,E=o?e*.38:e*.46,A=o?t*.22:-t*.32,b=o?c*e*.3:e*.25;Ti(i,A,b,v,E,5),i.box(A,5,b,v,22,E,l,8),i.box(A,25,b,v*.96,12,E*.9,n,5),o&&i.box(A,29,c*e*.464,v,26,x,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let v=e*.88/p;for(let E=0;E<p;E++){let A=-e*.44+v*(E+.5);i.box(f+x*.18,25,A,d*.76,12,v-3,n,5),i.box(f-d*.39,27,A,d*.22,31,v-1,u,8)}i.box(f,29,-c*e*.445,d*.88,20,x,u,6),jo(i,f+d*.13,35,-e*.31,d*.42,v*.49,a?tt.sage:tt.peach,-.18),jo(i,f+d*.12,35,e*.28,d*.4,v*.45,tt.linen,.2)}else{let v=t*.8/p;for(let E=0;E<p;E++){let A=-t*.4+v*(E+.5);i.box(A,25,g+h*.08,v-3,12,h*.7,n,6),i.box(A,27,g-h*.39,v-1,31,h*.24,u,7)}for(let E of[-t*.442,t*.442])i.box(E,26,g,x,22,h*.89,u,6);jo(i,-t*.27,35,g-h*.15,t*.18,h*.34,tt.peach,-.18),jo(i,t*.27,35,g-h*.12,t*.17,h*.33,tt.linen,.2)}let m=o?d*.67:d*.19,y=o?e*.14:h*.58,S=o?f+d*.06:d*.32,_=o?e*.13:g+h*.1;i.box(S,37.1,_,m,1.7,y,tt.lilacLight,.65);for(let v of[-1,1])i.box(S,38.82,_+v*y*.36,m*.9,.25,1.2,tt.lilac);return 58}function hi(i,t,e,n,s,r,o,a=!1){let c=a?19:28;Ti(i,t,e,n,s,c,tt.walnut),i.box(t,c,e,n*.9,7,s*.92,tt.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,d=e-Math.cos(r)*s*.39;i.box(u,c+9,d,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function I1(i,t,e,n){let s=-e*.39;Ti(i,0,0,t,e,20,tt.walnut),i.box(0,20,0,t*.9,6,e*.92,tt.walnut,2),i.box(0,24,0,t*.83,6,e*.83,n,2.5);for(let r of[-1,1])i.box(t*.34*r,23,s,t*.075,18,e*.12,tt.walnut,1.1);return i.box(0,37,s,t*.84,22,e*.22,n,4),59}function Ml(i,t,e,n,s){return s==="round"?(i.disc(0,0,0,t*(.13/.58),5,e*(.13/.58),tt.walnut),i.disc(0,4,0,t*(.045/.58),31,e*(.045/.58),tt.walnut,1.5),i.disc(0,33,0,t/2,8,e/2,n,.96),41):s==="classic"?(Ti(i,0,0,t*(.69/.79),e*(.49/.57),35),i.box(0,32,0,t*(.72/.79),6,e*(.5/.57),tt.walnut,3),i.box(0,37,0,t,8,e,n,4),i.box(0,45,0,t*(.69/.79),1.4,e*(.14/.57),tt.linen,.6),46.4):(Ti(i,0,0,t*(.69/.79),e*(.47/.56),34),i.box(0,33,0,t,8,e,n,3),i.box(0,41.1,0,t*(.55/.79),1.2,e*(.15/.56),tt.linen,.5),42.3)}function P1(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return hi(i,0,-e*.39,t*.2,e*.23,0,tt.denim),hi(i,0,e*.39,t*.2,e*.23,Math.PI,tt.denim),hi(i,-t*.415,0,t*.17,e*.27,Math.PI/2,tt.denim),hi(i,t*.415,0,t*.17,e*.27,-Math.PI/2,tt.denim),Ml(i,t*.79,e*.57,tt.oak,"classic");if(r)hi(i,0,-e*.37,t*.2,e*.2,0,tt.sage),hi(i,0,e*.37,t*.2,e*.2,Math.PI,tt.blush),hi(i,-t*.38,0,t*.2,e*.2,Math.PI/2,tt.lilac),hi(i,t*.38,0,t*.2,e*.2,-Math.PI/2,tt.honey),Ml(i,t*.58,e*.58,n,"round");else{let c=a?[-.28,.28]:[-.32,0,.32],l=[tt.sage,tt.blush,tt.lilac,tt.honey];for(let u=0;u<c.length;u++)for(let d of[-1,1])hi(i,t*c[u],e*.37*d,t*(a?.19:.15),e*.23,d<0?0:Math.PI,l[(u+(d<0?0:2))%l.length]);Ml(i,t*.79,e*.56,n,"styled")}return 42}function L1(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,tt.ink,.5),i.box(t,e+1,n,s*.1,14,4,tt.ink,1),i.box(t,e+12,n,s,25,6,tt.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,tt.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,tt.blue,.2)}function N1(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,d=s?r/2:0;s&&i.box(l,37,d+.8,a,7,u-1.6,n,2.4),i.box(l,4,d,a*.81,34,u*.81,tt.walnut,2.8);for(let h=0;h<3;h++){let f=6+h*9.7;i.box(l,f,d+u*.41,a*.74,8.4,2,tt.oak,.7),i.box(l,f+3,d+u*.43,a*.26,2,2,tt.brass,.5)}}return L1(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,tt.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,tt.peach),81}function Tp(i,t,e,n,s,r){let o=new zn;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,d=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...d):o.lineTo(...d)}o.closePath();let a=new os(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function D1(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");Ti(i,0,0,t,e,6,tt.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,tt.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,tt.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,tt.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,tt.lilacLight,1);let d=t>=145?[-t*.2,t*.2]:[0];for(let f of d)jo(i,f,u+22,-e*.275,t*(d.length===2?.34:.49),e*.2,tt.linen,f<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[f,g,x,p]of[[-.24,.12,1,tt.cream],[.23,.27,.79,tt.honey],[.08,.04,.57,tt.cream],[-.1,.34,.62,tt.honey]])Tp(i,t*f,u+30.8,e*g,h*x,p);for(let f of[-.32,-.17,0,.17,.32])i.box(t*f,u+30.71,e*.24,.85,.24,e*.33,tt.lilacLight,0);for(let f of[.09,.195,.3,.405])i.box(0,u+30.72,e*f,t*.71,.24,.9,tt.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,tt.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let d of[-1,1])i.box(t*.45*u,4,e*.46*d,5,l,6,tt.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let d=-3;d<=3;d++)i.box(t*.45*u,l-29,e*d*.105,3,20,3,n,.8)}return l}function U1(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;Ti(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,tt.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,tt.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let d=0;d<l;d++){let h=t*.89/l,f=(a-8)/c,g=h*(d-(l-1)/2),x=5+u*f;i.box(g,x,e*.46,h-2,f-1.5,2.9,n,1),i.oval(g,x+f*.45,e*.51,2.2,1.7,2.2,tt.brass)}return a+2}function F1(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,tt.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,tt.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,tt.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?tt.lilac:tt.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,tt.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?tt.lilacLight:tt.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,tt.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,tt.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,tt.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])Tp(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,tt.cream);return 5}function O1(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,tt.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,tt.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,tt.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,tt.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,tt.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,tt.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,tt.darkGlass);i.box(0,n-4.5,o,s,4.85,u,tt.steel,.4);let d=-s/2-u*1.15;i.disc(d,n,o,u*.8,u*2.9,u*.8,tt.steel),i.box(d+u,n+u*2.5,o,u*2.8,u*.7,u,tt.steel,.6)}function B1(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?tt.sage:tt.walnut,2.3),s?O1(i,t,e,r+2):i.box(0,r-3,0,t,5,e,tt.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let d=c?2.2:t*.29,h=c?e*.29:2.2,f=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(f,6,g,d,r*.67,h,a?tt.moss:tt.oak,.8),i.box(f,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,tt.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,tt.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let d=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,d,d,1,tt.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,tt.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,tt.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,tt.brass,1);return r+3}function k1(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,tt.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,tt.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,tt.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,tt.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,tt.glass),i.disc(0,22,-e*.44,3.5,9,3.5,tt.brass),i.box(0,30,-e*.4,5,3.7,e*.1,tt.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,tt.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,tt.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,tt.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,tt.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,tt.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,tt.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,tt.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,tt.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,tt.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,tt.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,tt.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,tt.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,tt.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,tt.blush,1.7),36)}function z1(i,t,e,n,s){let r=n?tt.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,tt.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,tt.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,tt.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,tt.linen,3.8),c+o*(n?.37:.28)}function H1(i,t,e){let s=[tt.sage,tt.peach,tt.honey,tt.lilac,tt.blue,tt.blush];Ti(i,0,0,t*.96,e*.96,22,tt.sage),i.box(0,20,0,t*.94,7,e*.93,tt.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function G1(i,t,e,n){let s=[tt.linen,n,tt.sand,tt.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function V1(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,tt.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,tt.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,d=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,tt.moss);d.rotation.z=-c/u,d.rotation.x=l/u;let h=n?tt.sage:[tt.blush,tt.linen,tt.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function Ap(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return Ep(t,e,n);let s=E1[t.split("-").at(-1)],r=new Ih(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=C1(r,e,n,s||(t==="sofa"?tt.linen:tt.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,tt.walnut,3.5),r.box(0,24,0,e,4,n,tt.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,tt.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,tt.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,tt.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,tt.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,tt.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=P1(r,e,n,s||tt.oakLight,t);else if(t==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(t)){let a=t==="diningTable"?"classic":t.includes("round-dining")?"round":"styled";o=Ml(r,e,n,s||(a==="classic"?tt.oak:tt.oakLight),a)}else if(t==="diningChair"||t.startsWith("living-dining-chair-"))o=I1(r,e,n,s||tt.denim);else if(t==="desk"||t.includes("-desk-"))o=N1(r,e,n,s||tt.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))hi(r,0,0,e,n,0,s||tt.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){hi(r,0,0,e,n,0,s||tt.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,tt.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=D1(r,e,n,s||tt.lilac,t);else if(t==="rug")o=F1(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=B1(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=k1(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=V1(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,tt.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,tt.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,tt.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=U1(r,e,n,s||tt.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;Ti(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||tt.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,tt.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=z1(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=G1(r,e,n,s||tt.sage);else if(t.startsWith("baby-activities-"))o=H1(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||tt.peach),r.ring(0,a,0,a*.95,a*.95,1.2,tt.linen),o=a*2}else return null;return r.finish(o)}var $t={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Qo=Math.PI,Ph=2*Qo,W1=new Set(["unknown","unavailable"]),ti=(i,t,e)=>Math.max(t,Math.min(e,i)),Ko=(i,t)=>Number.isFinite(i)?ti(i,12,480):t,Ip=.96,Pp=.09;function Lp(i,t,e){let n=Ko(i.w,42),s=Ko(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*Pp)<=s*Ip/2}var pe=(i,t={})=>new ke({color:i,roughness:.83,...t}),Lh=i=>String(i?.state??"unknown"),ks=i=>!W1.has(Lh(i)),Ur=i=>ks(i)&&(i.active===!0||i.state==="on"),X1=i=>Ur(i)?Number.isFinite(i.attributes?.brightness)?ti(i.attributes.brightness/255,0,1):1:0;function Xi(i,t,e,n=0,s=0,r=0){let o=new he(t,e);return o.position.set(n,s,r),i.add(o),o}function an(i,t,e,n,s,r=0,o=0,a=0){return Xi(i,new Me(t,e,n),s,r,o,a)}function Mn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,d=l-e/2,h=new zn;h.moveTo(u,d),h.lineTo(-u,d),h.lineTo(-u,-d),h.lineTo(u,-d),h.closePath();let f=new Gi(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return f.translate(0,0,l-n/2),Xi(i,f,s,r,o,a)}function tn(i,t,e,n,s,r=0,o=0,a=0,c=16){return Xi(i,new Ye(t,e,n,c),s,r,o,a)}function fi(i,t,e,n,s,r){return Xi(i,new Se(t,10,7),e,n,s,r)}function Dr(i,t=0,e=0,n=0){let s=new se;return s.position.set(t,e,n),i.add(s),s}function Y1(i,t,e=2.8){let n=new Ze({transparent:!0,depthWrite:!1,blending:Do,uniforms:{strength:{value:0},tint:{value:new Xt($t.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=Xi(i,new Vi(2*t,2*t),n,0,e,0);return s.rotation.x=-Qo/2,s.visible=!1,(r,o)=>{s.visible=r>0,n.uniforms.strength.value=r*.29,n.uniforms.tint.value.copy(o)}}function q1(i,t,e){let n=new se,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),d=Math.min(t,e),h=pe($t.honey),f=pe($t.ink),g=pe($t.brass,{roughness:.36,metalness:.42}),x=pe($t.cream,{emissive:$t.warm,emissiveIntensity:0}),p=new Xt($t.warm),m=u?46:o?50:a?56:l?40:c?56:36,y=!a&&!c&&!l,S=y?ti(d*.68,15,46):ti(d*(a?1.72:1.35),38,110),_=Y1(n,S,y?16.8:2.8);if(a){let v=d*(u?.19:.29);tn(n,v,v*1.02,3,f,0,m+2),o&&tn(n,1.7,1.7,13,h,0,m+9),tn(n,v*.82,v,5,h,0,m-1.5),tn(n,v*.92,v*.96,1.15,g,0,m+1.1);let E=fi(n,v*.83,x,0,m,0);E.scale.y=o?.88:.52}else if(l)Mn(n,d*.34,18,4,f,0,35,-4),tn(n,d*.12,d*.11,14,h,0,37,3),fi(n,d*.21,x,0,m+3,3);else{let v=m-7,E=c?3:16,A=d*(c?.25:.3);if(tn(n,A*.57,A*.67,4,f,0,E),tn(n,2,2.9,v-E,h,0,(E+v)/2),c)fi(n,A*.81,x,0,m,0);else{let b=r==="bud_lamp"?12:9;tn(n,A*.56,A,14,x,0,m,0,b),tn(n,A,A*.99,1.2,g,0,m-6.7,0,b),tn(n,A*.55,A*.58,1.1,g,0,m+7.1,0,b)}}return{root:n,anchorY:m+2,animate(v){let E=X1(v),A=v?.attributes?.rgb_color;if(Array.isArray(A)&&A.length===3&&A.every(Number.isFinite)){let[b,I,U]=A.map(L=>ti(L/255,0,1));p.setRGB(b,I,U,je)}else p.setHex($t.warm);_(E,p),x.emissiveIntensity=E*.88,x.emissive.copy(p),E>0?x.color.copy(p):x.color.setHex($t.cream)}}}function Z1(i){let t=new zn;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Gi(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Qo/2)}function Rp(i,t,e,n){let s=new se,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Dr(s,0,o,0);n&&(a.rotation.x=Qo/2);let c=Dr(a,0,-1,0),l=pe($t.cream),u=pe($t.ink),d=/(?:white|cream)$/.test(i.type)?$t.oat:/(?:forest|sage)$/.test(i.type)?$t.sage:$t.honey,h=pe(d),f=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;tn(a,r*.18,r*.2,6,u),tn(a,r*.174,r*.176,1.4,pe($t.brass,{roughness:.36,metalness:.42}),0,3.4),tn(a,r*.15,r*.17,2.6,l,0,4.9);let g=Z1(r);for(let x=0;x<f;x++){let p=Dr(c);p.rotation.y=x/f*Ph,Xi(p,g,h)}if(n){Mn(s,r*1.66,6,r*1.02,u,0,3),an(s,r*.3,11,6,l,0,10);let x=Xi(s,new _n(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let p=-1;p<=1;p++){let m=p*r*.5;tn(s,.68,.68,2*Math.sqrt(r*r-m*m),u,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,p=0){let m=Number.isFinite(x?.attributes?.percentage)?ti(x.attributes.percentage/100,.12,1):.64;c.rotation.y=Ur(x)?p*Ph*m%Ph:0}}}function $1(i,t){let e=new se,n=t.mountY??39,s=Dr(e,0,n),r=ti(i*.72,17,27);Mn(s,r,31,5,pe($t.ink),0,0,-.5),Mn(s,r-1.9,29,4.4,pe($t.cream),0,.3,1);let o=pe($t.oat,{emissive:$t.warm,emissiveIntensity:0}),a=Mn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let d=pe($t.teal,{emissive:$t.mint,emissiveIntensity:0});return fi(s,1.85,d,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=ks(l)?Ur(l)?-.16:.16:0,o.emissiveIntensity=Ur(l)?.42:0;let d=l?.presence==="on";for(let h=0;h<c.length;h++){let f=d?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(d?$t.mint:$t.teal),c[h].material.emissiveIntensity=d?.75+f*1.9:0,c[h].scale.setScalar(d?1+f*.18:1)}}}}function Cp(i,t,e,n=31){let s=new se,r=36.5,o=Math.max(12,i-6),a=pe($t.oat);if(t){let h=pe($t.glass,{roughness:.32});an(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])an(s,3.2,n+2,7.5,a,g,r);let f=r+n/2;an(s,o,1.8,7,h,0,f+.35);for(let g of[-4.25,4.25])an(s,o+2,3.2,1.5,a,0,f,g);an(s,o+3,3.8,11,a,0,r-n/2,1.4),an(s,o,1.35,.5,pe($t.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=pe($t.cream),l=r+n/2-1;Mn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,f)=>an(s,o-5,n/8-.45,3,c,0,l-f*(n/8),6.9)),d=0;return{root:s,anchorY:r+1.5,animate(h,f,g,x=!1){let p=Nh(h),m=p===null?x?0:d:1-p;x||(d=m);let y=Number.isFinite(h?.attributes?.current_tilt_position)?ti(h.attributes.current_tilt_position/100,0,1):0;for(let S=0;S<u.length;S++){let _=ti(m*u.length-S,0,1);u[S].visible=_>.02,u[S].scale.y=_,u[S].rotation.x=y*.9}}}}function Nh(i){return ks(i)?Number.isFinite(i.attributes?.current_position)?ti(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function J1(i,t){let e=new se,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=pe($t.oat),l=pe($t.cream),u=pe($t.plum),d=[pe($t.tile),pe($t.paleTile)],h=pe($t.dark);an(e,i,5,t*Ip,l,0,2.5,t*Pp),an(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let L of[-i*.42,i*.42])an(e,i*.09,o+4,n,c,L,(o+4)/2),Mn(e,i*.1,o+4,5,l,L,(o+4)/2,r+1,1.5);let f=new zn;f.moveTo(-i*.49,0),f.lineTo(i*.49,0),f.lineTo(0,a),f.closePath();let g=new Gi(f,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),Xi(e,g,u,0,o+4);let x=i*.49,p=Math.atan2(a,x),m=Math.hypot(a,x),y=(n+11)/8,S=[[],[]];for(let L of[-1,1])for(let B=0;B<8;B++){let F=-r-5.5+(B+.5)*y,H=new Me(m*.97,2.2,y-.62);H.rotateZ(-L*p),H.translate(L*x*.5,o+5.65+a*.5,F),S[B%2].push(H)}S.forEach((L,B)=>{Xi(e,Un(L),d[B]),L.forEach(F=>F.dispose())}),Mn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),an(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),an(e,s,o,1.5,h,0,o/2+4,r-4);for(let L of e.children)L.isMesh&&(L.castShadow=!0);let _=pe($t.mint),v=pe($t.sage),A=(o-3)/6,b=Array.from({length:6},(L,B)=>{let F=Dr(e,0,o-(B+.5)*A+2,r+.5);return Mn(F,s-2,A-.7,3.4,_,0,0,0,1.2),an(F,s*.91,.68,.7,v,0,A*.23,1.8),B===5&&Mn(F,s*.13,2,2.2,l,0,0,2.3,.55),F}),I=pe($t.gold,{emissive:$t.ember,emissiveIntensity:0});fi(e,3.7,I,i*.422,o*.73,r+4.5);let U=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(L,B=0,F,H=!1){let z=Nh(L)??(H?0:U);H||(U=z),_.color.setHex(ks(L)?$t.mint:$t.muted),v.color.setHex(ks(L)?$t.sage:$t.muted);let j=(1-z)*b.length;b.forEach((nt,it)=>{let at=ti(j-it,0,1);nt.visible=at>.02,nt.scale.y=at,nt.position.y=o-(it+at/2)*A+2});let ut=["opening","closing"].includes(Lh(L));I.emissiveIntensity=ut?.55+(.5+.5*Math.cos(B*6)):0}}}function j1(i){let t=new se,e=46,n=pe($t.cream),s=pe($t.honey),r=Math.min(i*.86,88),o=Dr(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])an(t,3.4,e,5,n,c,e/2);an(t,r+4,3,5,n,0,e),Mn(o,r-2,e-4,4,s,r/2,e/2,0,2),fi(o,2.2,pe($t.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,d=!1){let f=Nh(c)??(d?0:a);d||(a=f),o.rotation.y=-1.32*f,s.color.setHex(ks(c)?$t.honey:$t.muted)}}}function K1(i,t,e){let n=new se,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=ti(t*.85,23,126),a=pe($t.dark,{emissive:$t.mint,emissiveIntensity:0});if(Mn(n,o,s?25:18,8,pe($t.cream),0,r,0),s){Mn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])fi(n,1.35,pe($t.oat),o*c,r-7,4.3)}else an(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",d=ks(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?$t.warm:$t.glass),a.emissiveIntensity=d?1.15:Ur(c)?.25:0}}}function Q1(i,t,e){let n=new se,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=pe($t.cream),c=pe(r?$t.glass:$t.sage),l=pe($t.teal,{emissive:$t.mint,emissiveIntensity:0}),u=o-1;if(tn(n,s*.46,s*.5,4,pe($t.ink),0,2),r){let f=fi(n,s/2,c,0,13,0);f.scale.y=22/s,tn(n,s*.19,s*.22,3.5,a,0,u)}else{Mn(n,s,24,s*.82,c,0,15,0,5),Mn(n,s*.91,3.8,s*.71,a,0,u);for(let f=-1;f<=1;f++)an(n,s*.66,1.2,1.1,l,0,u+2,f*3.5)}fi(n,1.6,l,s*.18,u-2,s*.31);let d=pe($t.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(f,g)=>fi(n,2.1+g*.6,d,0,u+3,0));return{root:n,anchorY:u,animate(f,g=0){let x=Ur(f);l.emissiveIntensity=x?1.6:0;for(let p=0;p<h.length;p++){h[p].visible=x;let m=(g*.68+p/h.length)%1;h[p].position.set(Math.sin(m*Qo)*3.1,u+4+m*14,0),h[p].scale.setScalar(.7+m*.62)}}}}function tM(i,t){let e=new se,n=Math.min(i,t)*.42,s=.72;e.scale.setScalar(s);let r=pe($t.sage,{emissive:$t.mint,emissiveIntensity:0}),o=pe($t.ink);tn(e,n,n*.95,7,o,0,4.6),tn(e,n*.96,n,5.5,pe($t.cream),0,10.2),tn(e,n*.28,n*.33,4,pe($t.oat),0,14,-n*.23);for(let c of[-.27,.27])fi(e,n*.105,o,n*c,10,n*.88);let a=Mn(e,n*.68,1.2,2.5,r,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03*s,animate(c,l=0,u=!1){let d=["cleaning","returning"].includes(Lh(c));a.material.emissiveIntensity=d?u?.6+.5*Math.cos(l*6):.3:0}}}function Np(i,t={}){let e=Ko(i.w,42),n=Ko(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?$1(e,t):s==="garageDoor"?J1(e,n):s==="door"||r==="door"?j1(e):s==="window"?Cp(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?Cp(Ko(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?K1(i,e,t):s==="airPurifier"||s==="humidifier"?Q1(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?tM(e,n):s==="windowFan"?Rp(i,e,n,!0):r==="fan"||/^fans-/.test(s)?Rp(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?q1(i,e,n):null}var kp=tu(vl(),1),{difference:zp,union:Hp}=kp.default,El=18,Gn=.001,Ai=(i,t)=>i[0]*t[0]+i[1]*t[1],zs=(i,t)=>i[0]*t[1]-i[1]*t[0],Ri=(i,t)=>[i[0]-t[0],i[1]-t[1]],De=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],Al=([i,t])=>[-t,i],Dp=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Sl=i=>i.map(({x:t,y:e})=>[t,e]),Yi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],Gp=i=>i.length?Hp(...i):[];function Tl(i,t,e,n=0){let s=Ri(t,i),r=Math.hypot(...s);if(r<Gn)return null;let o=s.map(u=>u/r),a=Al(o),c=De(i,o,-n),l=De(t,o,n);return Yi([De(c,a,e),De(l,a,e),De(l,a,-e),De(c,a,-e)])}function wl(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function Up(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Ri(n,t),r=Math.hypot(...s);return r>Gn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function eM(i,t,e,n){if(Math.abs(Ai(i.tangent,t.tangent))<.9999)return null;let s=Al(i.tangent),[r,o]=[t.start,t.end].map(x=>Ri(x,i.start)),a=Ai(r,s);if(Math.abs(a)<.1||Math.abs(a)>El||Math.abs(a-Ai(o,s))>.1)return null;let c=[Ai(r,i.tangent),Ai(o,i.tangent)].sort((x,p)=>x-p),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let d=De(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!wl(e,De(d,s,-h))||!wl(n,De(d,s,a+h))||wl(e,De(d,s,a/2))||wl(n,De(d,s,a/2)))return null;let f=De(i.start,i.tangent,l),g=De(i.start,i.tangent,u);return Yi([De(f,s,-h*.05),De(g,s,-h*.05),De(g,s,a+h*.05),De(f,s,a+h*.05)])}function Vp(i){let t=[],e=[];for(let n of[...i].reverse()){let s=Gp(n.polygons);if(!s.length)continue;let r=t.length?zp(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?Hp(t,s):s}return{footprint:t,regions:e.reverse()}}function ta(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Wp(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:Sl(h.points),polygons:[Yi(Sl(h.points))],outdoor:e&&ta(h)})),s=[];for(let[h,f]of n.entries())for(let g of n.slice(h+1))for(let x of Up(f.points))for(let p of Up(g.points)){let m=eM(x,p,f.points,g.points);m&&s.push({surface:f.surface,polygons:[m],outdoor:f.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:f,stepBottom:g,deckBottom:x,northDeck:p,southDeck:m,recess:y}=t;r.push({surface:"patio",polygons:[Yi(Sl(p)),Yi(Sl(m)),Yi(Dp(h,g,f+1,x))]}),y.x2>y.x1&&y.z2>y.z1&&o.push({surface:"oak",polygons:[Yi(Dp(y.x1,y.z1,y.x2,y.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=Vp([...l,...c]),d=t||e?Gp(c.flatMap(h=>h.polygons)):[];return{...u,foundation:d}}function nM(i,t,e,n){let s=zs(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=De(i,Al(t),r),a=De(i,Al(e),-r),c=zs(Ri(a,o),e)/s,l=De(o,t,c);return Math.hypot(...Ri(l,i))>n*2.5?Yi([i,o,a]):Yi([i,o,l,a])}function Fp(i,t){let e=zs(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=Ri(t.point,i.point);return[zs(n,t.tangent)/e,zs(n,i.tangent)/e]}function iM(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=Ri(r.point,s.point);if(Math.hypot(...o)>El)continue;let a=Fp(s,r);a&&a.every(c=>c>=-El&&c<=Gn)?e.push({a:s,b:r,center:De(s.point,s.tangent,a[0])}):!a&&Ai(s.tangent,r.tangent)<0&&Ai(o,s.tangent)<=Gn&&Ai(o,r.tangent)>=-Gn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=Fp(s,o);if(!a)continue;let[c,l]=a;c<-El||c>=-Gn||l<=Gn||l>=r.length-Gn||r.openings.some(({start:u,end:d})=>l>=u&&l<=d)||e.push({a:s,center:De(s.point,s.tangent,c)})}}return e}function Op({a:i,b:t,center:e},n){return e?[Tl(i.point,e,n,.1),t&&Tl(t.point,e,n,.1),t&&nM(e,i.tangent,t.tangent,n)].filter(Boolean):[Tl(i.point,t.point,n,.1)].filter(Boolean)}function Xp(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function sM(i,t){return Xp(i).flatMap(([e,n])=>{let s=Ri(n,e),r=Math.hypot(...s);if(r<Gn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Ri(a,e),u=Ri(c,e);if(Math.abs(zs(l,o))>Gn||Math.abs(zs(u,o))>Gn)return[];let[d,h]=[Ai(l,o),Ai(u,o)].sort((x,p)=>x-p),f=Math.max(0,d),g=Math.min(r,h);return g-f>Gn?[[De(e,o,f),De(e,o,g)]]:[]})})}function Bp(i,t){return t?.length?zp(i,t):i}function Yp(i,t,e,n){let s=[],r=(c,l,u,d,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:d,priority:h})};for(let c of i){let{palette:[l,u,d]}=c,h=[c.x1,c.y1],f=[c.dx,c.dz],g=(y,S,_,v,E,A,b)=>{S-y>Gn&&r(Tl(De(h,f,y),De(h,f,S),E/2),_,v,A,b)},x=c.openings.length?n:0,p=(y,S)=>{g(y,S,x,e,t,l,2),g(y,S,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let m=0;for(let y of c.openings)p(m,y.start),m=Math.max(m,y.end);p(m,c.length),g(0,c.length,0,3,t+3,d,1)}for(let c of iM(i)){let[l,u,d]=c.a.wall.palette;for(let h of Op(c,t/2))r(h,0,e,l,2);for(let h of Op(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,d,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],d=new Map,h=s.filter(f=>f.from<=u&&f.to>=c);for(let{surface:f,shape:g}of h.sort((x,p)=>x.priority-p.priority))d.has(f)||d.set(f,{surface:f,polygons:[]}),d.get(f).polygons.push(g);return{...Vp([...d.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:d},h)=>{let f=Xp(l);return c.map(g=>({...g,bottom:u,top:d,faces:{top:Bp(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:Bp(g.polygons,a[h-1]?.footprint),sides:sM(g.polygons,f)}}))})}var rM=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),oM=3,aM={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},qp=Object.fromEntries(Object.entries(aM).map(([i,t])=>[i,t.map(e=>new Xt(e))])),cM=new Xt("#ffc38b"),{clamp:lM,lerp:ea,smoothstep:Zp}=oe;function $p(i,t,e){i.toneMapping=Uo,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Ds,i.shadowMap.autoUpdate=!1;let n=new Ns("#fff4e5","#897e91",1.13),s=new hs("#fff0d4",2.15),r=new hs("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,d=(c+l)/2;s.position.set(u-610,1150,d-490),s.target.position.set(u,0,d),r.position.set(u+290,410,d+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let f=Array.from({length:oM},()=>new Po("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...f);let g=[],x,p,m=!0,y=new Xt;function S(){for(let E of t.children)E.isMesh&&(E.receiveShadow=!0,E.geometry.computeBoundingBox(),E.castShadow=E.geometry.boundingBox.max.y+E.position.y>-99)}function _(E,A){let b=/(light|lamp|sconce)/i.test(E.type),I=!A.animate||b;A.root.traverse(U=>{!U.isMesh||U.material.transparent||U.material.isShaderMaterial||(U.receiveShadow=!0,U.castShadow||=I)}),b&&E.entityId&&g.push({item:E,object:A})}function v(E,A,b,I=!1){let U=E.night===!0,L=rM.has(E.condition),B=Number.isFinite(E.sunElevation)?Math.round(E.sunElevation*2)/2:U?-12:35,F=Zp(B,-8,19),H=`${L}:${lM(B,-8,35)}`;if(H!==x){let $=qp[L?"overcast":"clear"],z=[n.color,n.groundColor,s.color,b.color,t.background];for(let[ut,nt]of z.entries())nt.lerpColors(qp.night[ut],$[ut],F);let j=F*(1-Zp(B,8,34));L||s.color.lerp(cM,j*.8),n.intensity=ea(.75,L?1.33:1.12,F),s.intensity=ea(.28,L?.86:2.14,F),r.intensity=ea(.12,.23,F),s.shadow.intensity=ea(.65,L?.39:.84,F),x=H,p=void 0}if(p!==A||I){let $=g.flatMap(({item:z,object:j})=>{let ut=A[z.id];if(ut?.state!=="on")return[];let nt=Number.isFinite(ut.attributes?.brightness)?oe.clamp(ut.attributes.brightness/255,0,1):1;return nt>0?[{object:j,power:nt,color:ut.attributes?.rgb_color}]:[]}).sort((z,j)=>j.power-z.power);for(let[z,j]of f.entries()){let ut=$[z];if(!ut){j.intensity=0;continue}let{object:nt,power:it,color:at}=ut;Array.isArray(at)&&at.length===3&&at.every(Number.isFinite)?(y.setRGB(...at.map(Nt=>oe.clamp(Nt/255,0,1)),je),j.color.copy(y)):j.color.set("#ffd5a2"),j.position.copy(nt.root.position),j.position.y+=Math.max(18,(nt.anchorY-9)*nt.root.scale.y),j.intensity=it*ea(2350,1250,F)}p=A}m&&(i.shadowMap.needsUpdate=!0,m=!1)}return{markStructure:S,register:_,update:v,dispose:()=>s.shadow.dispose()}}var di=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),Fr=Object.freeze({default:di("Default",0,0),top:di("Top down",0,0),high:di("High angle",0,15),dollhouse:di("Dollhouse",2,30),corner:di("Corner",45,40),north:di("From north",180,42),east:di("From east",90,42),south:di("From south",0,42),west:di("From west",270,42),waterfront:di("Waterfront",0,15),free:di("Free view",0,25)});function Jp(i,t=!1){let e=Object.entries(Fr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function qi(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(Fr,t.preset)?t.preset:"top",n=Fr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?oe.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?oe.clamp(t.zoom,.6,2.5):n.zoom}}function jp(i){let t=qi(i);return{...t,preset:"free",tilt:t.tilt||Fr.free.tilt}}function Dh(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:qi(i)}function Uh(i){return qi({...Dh(i),preset:"default"})}function Kp(i,t){let e=Math.max(.4,t/1536*.68),n=oe.clamp;return{w:Math.round(n((i?.w||170)*e,58,216)),h:Math.round(n((i?.h||110)*e,44,152))}}function Qp(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>Dh(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return Dh(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function Fh(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){let a=qi(s);if(a.preset==="waterfront"&&t?.waterfront&&(t=t.waterfront),![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let c=oe.degToRad(a.azimuth),l=oe.degToRad(a.tilt),u=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),d=new G(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(d,1900),i.lookAt(u),i.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),f=new He,g=new G;for(let _ of[t.minX-37,t.maxX+37]){for(let v of[t.minZ-53,t.maxZ+36])for(let E of[-111,h])f.expandByPoint(g.set(_,E,v).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&f.expandByPoint(g.set(_,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let _=(f.max.y-f.min.y)*.025;f.min.y-=_,f.max.y+=_}let x=e/n,p=Math.max((f.max.x-f.min.x)/2,(f.max.y-f.min.y)/2*x),m=p/x,y=(f.min.x+f.max.x)/2,S=(f.min.y+f.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:_,y:v}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),E=Number.isFinite(r.weight)?oe.clamp(r.weight,0,1):1;y=oe.lerp(y,_,E),S=oe.lerp(S,v,E)}return i.left=y-p,i.right=y+p,i.bottom=S-m,i.top=S+m,i.zoom=Number.isFinite(o)?oe.clamp(o,.6,4.5):a.zoom,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Legacy dining set",icon:"\u25B0",w:165,h:108,group:"living",legacy:!0},{type:"diningTable",label:"Dining table",icon:"\u25B0",w:136,h:62,group:"living"},{type:"diningChair",label:"Dining chair",icon:"\u25D2",w:34,h:26,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=Z=>typeof Z=="string"&&Z.startsWith("ui"),o=Z=>String(Z??"").toLowerCase(),a=Z=>o(Z).split(".")[0],c=Z=>typeof Z=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(Z),l=Z=>Z.type==="window"?"wall":Z.mount||"floor",u=Z=>Z?.type==="diningTable"||/^living-(?:petal|round|rectangular)-dining-table-/.test(Z?.type),d=Z=>Z?.type==="diningChair"||/^living-dining-chair-/.test(Z?.type),h=Z=>d(Z)||["chair","armchair","stool"].includes(Z?.type)||/-(?:desk-chair|acorn-armchair|floor-chair)-/.test(Z?.type),f=Z=>Number(Z.toFixed(6)),g=Z=>(Z%360+360)%360;function x(Z){let X=Z.type==="table",Q=/^living-(petal|round|rectangular)-dining-set-/.exec(Z.type);if(!X&&!Q)return;let ct=Q?.[1],xt=X?"diningTable":Z.type.replace("-dining-set-","-dining-table-"),_t=wt=>X?"diningChair":`living-dining-chair-${wt}`,{w:vt,h:Rt}=Z;if(X||ct==="round"){let[wt,Tt,Ut,Ot,Wt]=X?[.39,.415,.2,.23,.27]:[.37,.38,.2,.2,.2];return{tableType:xt,w:(X?.79:.58)*vt,h:(X?.57:.58)*Rt,tableHeight:X?46.4:41,chairs:[[0,-Rt*wt,vt*Ut,Rt*Ot,0,_t("sage")],[vt*Tt,0,Rt*Wt,vt*(X?.17:Ut),90,_t("butter")],[0,Rt*wt,vt*Ut,Rt*Ot,180,_t("blush")],[-vt*Tt,0,Rt*Wt,vt*(X?.17:Ut),270,_t("lavender")]]}}let dt=ct==="rectangular",Mt=dt?[-.32,0,.32]:[-.28,.28],St=[["sage","blush","lavender"],["lavender","butter","sage"]];return{tableType:xt,w:.79*vt,h:.56*Rt,tableHeight:42.3,chairs:[-1,1].flatMap((wt,Tt)=>Mt.map((Ut,Ot)=>[vt*Ut,Rt*.37*wt,vt*(dt?.15:.19),Rt*.23,Tt*180,_t(St[Tt][Ot])]))}}function p(Z){if(!Array.isArray(Z?.items))return Z;let X=new Set(Z.items.map(_t=>_t.id)),Q=Z.items.filter(h),ct=!1,xt=Z.items.flatMap(_t=>{let vt=x(_t);if(!vt||![_t.x,_t.y,_t.w,_t.h,_t.rotation].every(Number.isFinite)||_t.w<=0||_t.h<=0)return[_t];ct=!0;let Rt=_t.rotation*Math.PI/180,dt=Math.cos(Rt),Mt=Math.sin(Rt),St=Number.isFinite(_t.modelHeight)?_t.modelHeight:void 0,wt={..._t,type:vt.tableType,w:f(vt.w),h:f(vt.h),...St===void 0?{}:{modelHeight:Math.max(6,f(St*vt.tableHeight/59))}};return[...vt.chairs.flatMap(([Ut,Ot,Wt,Ft,J,Kt],Zt)=>{let O=f(_t.x+Ut*dt-Ot*Mt),T=f(_t.y+Ut*Mt+Ot*dt),st=Math.max(8,Math.min(Wt,Ft)*.52);if(Q.some(w=>Math.hypot(w.x-O,w.y-T)<=st))return[];let lt=`${_t.id}-chair-${Zt+1}`,pt=lt,k=2;for(;X.has(pt);)pt=`${lt}-${k++}`;X.add(pt);let M={id:pt,type:Kt,name:`Dining chair ${Zt+1}`,x:O,y:T,w:f(Wt),h:f(Ft),rotation:g(_t.rotation+J),entityId:"",...St===void 0?{}:{modelHeight:St},...Number.isFinite(_t.zIndex)?{zIndex:_t.zIndex}:{}};return Q.push(M),[M]}),wt]});return ct?{...Z,items:xt}:Z}function m(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function y(Z,X,Q){return!(!Z||!X||!Q||Z.type===Q.type||Q.legacy||s.has(Z.type)||r(Z.type)||s.has(Q.type)||r(Q.type)||l(X)!==l(Q)||Z.entityId&&!S(Z.entityId,Q))}function S(Z,X){return!c(Z)||typeof X?.type!="string"||X.legacy||r(X.type)||X.type==="stairs"||X.type==="window"?!1:X.type==="cameraThumbnail"?a(Z)==="camera":X.type==="garageDoor"?a(Z)==="cover":a(Z)!=="camera"}function _(Z,X){let Q=a(Z.entity_id),ct=o(Z.name+" "+Z.entity_id),xt={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},_t=Rt=>{if(Rt.type==="controlZone")return!0;if(Q==="camera")return Rt.type==="cameraThumbnail";if(Q==="cover")return/garage/.test(ct)&&Rt.type==="garageDoor";if(Q==="climate")return Rt.type==="thermostat";if(Q==="binary_sensor"&&/presence|occupancy/.test(ct))return Rt.type==="presenceSwitch";if(xt[Q]?.includes(Rt.group)||/humidifier/.test(ct)&&Rt.type==="humidifier"||/purifier/.test(ct)&&Rt.type==="airPurifier")return!0;if(Q==="switch"){if(/fan/.test(ct))return Rt.group==="fans"||Rt.type==="windowFan";if(/light|lamp/.test(ct))return Rt.group==="lighting"}return!1},vt=X.filter(Rt=>S(Z.entity_id,Rt));return{recommended:vt.filter(_t),available:vt}}function v(Z){return Z&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(Z.type)&&!r(Z.type)}function E(Z,X,Q,ct){if(!["w","h"].includes(X)||!Number.isFinite(Q))return null;let xt=Z.type==="cameraThumbnail"?40:12,_t=Z.type==="cameraThumbnail"||c(Z.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!ct)return{[X]:Math.min(_t[X],Math.max(xt,Q))};let vt=Math.min(_t.w/Z.w,_t.h/Z.h),Rt=Math.min(vt,Math.max(xt/Z.w,xt/Z.h)),dt=Math.min(vt,Math.max(Rt,Q/Z[X]));return{w:Math.round(Z.w*dt*10)/10,h:Math.round(Z.h*dt*10)/10}}let A=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),b=new Set(["lamp","tableLamp","humidifier","plant"]),I=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),U=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,L=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,B=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function F(Z){let X=Z?.type??"";return u(Z)||A.has(X)||U.test(X)?"surface":b.has(X)||Z?.lightForm==="bud_lamp"||X.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function H(Z){let X=Z.type==="humidifier"?.37:Z.type==="plant"?.23:.2;return Math.min(Z.w,Z.h)*X}function $(Z,X=!1){let{type:Q,w:ct,h:xt}=Z;if(u(Z))return[[0,0,ct,xt]];if(Q==="desk"||Q.startsWith("bedroom-corner-desk-"))return[[0,-.33*xt,ct,.34*xt],[-.41*ct,.17*xt,.18*ct,.66*xt],[.41*ct,.17*xt,.18*ct,.66*xt]];if(!X&&(Q==="sofa"||Q.startsWith("living-cloud-sofa-")))return xt>ct?[[-.25*ct,0,.5*ct,xt],[.22*ct,(Q==="sofa"?.3:-.3)*xt,.52*ct,.38*xt]]:[[0,-.215*xt,ct,.57*xt],[-.32*ct,.25*xt,.34*ct,.46*xt]];if(X){if(Q.startsWith("living-round-dining-"))return[[0,0,.58*ct,.58*xt]];if(Q==="table"||/-dining-set-/.test(Q))return[[0,0,.79*ct,.56*xt]];if(Q.includes("-desk-"))return[[0,0,ct,.85*xt]]}if(!X&&F(Z)==="tabletop"){let _t=2*H(Z);return[[0,0,_t,_t]]}return[[0,0,ct*.95,xt*.95]]}function z(Z,X){if(![Z?.x,Z?.y,Z?.w,Z?.h].every(Number.isFinite)||Z.w<=0||Z.h<=0)return[];let Q=(Number.isFinite(Z.rotation)?Z.rotation:0)*Math.PI/180,ct=[Math.cos(Q),Math.sin(Q)],xt=[-ct[1],ct[0]];return $(Z,X).map(([_t,vt,Rt,dt])=>({x:Z.x+_t*ct[0]+vt*xt[0],y:Z.y+_t*ct[1]+vt*xt[1],u:ct,v:xt,width:Rt/2,height:dt/2}))}let j=(Z,X,Q)=>Z*Q[0]+X*Q[1];function ut(Z,X){let Q=X.type.startsWith("living-round-dining-"),ct=z(X,!0),xt=H(Z)*.9;return B.every(([_t,vt])=>ct.some(Rt=>{let dt=Z.x+_t*xt-Rt.x,Mt=Z.y+vt*xt-Rt.y,St=Math.abs(j(dt,Mt,Rt.u))/Rt.width,wt=Math.abs(j(dt,Mt,Rt.v))/Rt.height;return Q?Math.hypot(St,wt)<=1:St<=1&&wt<=1}))}function nt(Z){return d(Z)||F(Z)!=="floor"||I.has(Z.type)||L.test(Z.type)?z(Z,!1):[]}function it(Z,X){let Q=(ct,xt)=>ct.width*Math.abs(j(...ct.u,xt))+ct.height*Math.abs(j(...ct.v,xt));return Math.min(...[Z.u,Z.v,X.u,X.v].map(ct=>Q(Z,ct)+Q(X,ct)-Math.abs(j(Z.x-X.x,Z.y-X.y,ct))))}function at(Z,X){let[Q]=z(Z,!1),[ct]=z(X,!0);if(!Q||!ct||it(Q,ct)<=0)return!1;let xt=[Q.x-ct.x,Q.y-ct.y],_t=j(...xt,ct.u)/ct.width,vt=j(...xt,ct.v)/ct.height,Rt=X.type.startsWith("living-round-dining-"),dt;if(Rt){if(Math.hypot(_t,vt)<1)return!1;dt=-j(...xt,Q.v)/Math.hypot(...xt)}else{let Ut=Math.abs(_t)>=1,Ot=Math.abs(vt)>=1;if(Ut===Ot)return!1;dt=-Math.sign(Ut?_t:vt)*j(...Q.v,Ut?ct.u:ct.v)}if(dt<.8)return!1;let Mt=X.type==="diningTable",St=Mt?46.4:Rt?41:42.3,wt=(X.modelHeight??St)*(Mt?32:33)/St;return(Z.modelHeight??59)*30/59<wt}function Ct(Z,X,Q,ct){let xt=0;for(let Rt of Q)for(let dt of ct)xt=Math.max(xt,it(Rt,dt));if(xt<=2)return xt;let _t=F(Z),vt=F(X);return _t==="tabletop"&&vt==="surface"&&ut(Z,X)||_t==="surface"&&vt==="tabletop"&&ut(X,Z)||d(Z)&&u(X)&&at(Z,X)||u(Z)&&d(X)&&at(X,Z)?0:xt}function Nt(Z,X,Q){let ct=nt(Z);if(!ct.length)return;let xt=Q?nt(Q):[],_t,vt=2;for(let Rt of X){if(Rt.id===Z.id)continue;let dt=nt(Rt),Mt=Ct(Z,Rt,ct,dt);Mt<=vt||xt.length&&Mt<=Ct(Q,Rt,xt,dt)+.02||(_t=Rt,vt=Mt)}return _t}function Et(Z){let X=Z.filter(vt=>F(vt)==="surface"),Q=X.filter(u),ct=new Set,xt=new Map,_t=new Map;for(let vt of Z){let Rt=d(vt);if(!Rt&&F(vt)!=="tabletop")continue;let dt=Rt?Q.find(St=>at(vt,St)):X.find(St=>ut(vt,St));if(!dt)continue;ct.add(vt.id);let Mt=Rt?_t:xt;Mt.has(dt.id)||Mt.set(dt.id,[]),Mt.get(dt.id).push(vt)}return ct.size?Z.flatMap(vt=>ct.has(vt.id)?[]:[..._t.get(vt.id)??[],vt,...xt.get(vt.id)??[]]):Z}function At(Z,X,Q){let ct=Z.ownerDocument,xt=(T,st,lt={})=>{let pt=ct.createElement(T);st&&(pt.textContent=st);for(let[k,M]of Object.entries(lt))pt.setAttribute(k,M);return pt},_t=xt("dialog","",{class:"model-library","aria-label":"Objects and models"}),vt=xt("header"),Rt=xt("h2","Objects & models"),dt=xt("button","Close",{type:"button"});vt.append(Rt,dt);let Mt=xt("div","",{class:"model-library-filters"}),St=xt("select","",{"aria-label":"Object library section"});for(let[T,st]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])St.append(xt("option",st,{value:T}));let wt=xt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});Mt.append(St,wt);let Tt=xt("div","",{class:"model-library-context"}),Ut=xt("p","",{role:"status",class:"model-library-status"}),Ot=xt("div","",{class:"model-library-list"});_t.append(vt,Mt,Tt,Ut,Ot);let Wt=xt("style");Wt.textContent=`
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
    `,Z.append(Wt,_t);let Ft,J=!1,Kt=(T,st)=>{let lt=xt("button",T,{type:"button"});return lt.addEventListener("click",st),lt};function Zt(T){Ft=T,J=!1,St.value="catalog",wt.value="",O(),wt.focus()}function O(){let{templates:T,paletteGroups:st}=m(),lt=new Map(T.map(N=>[N.type,N])),pt=new Map(st),{items:k,entities:M}=X(),w=o(wt.value).trim(),R=(...N)=>w.split(/\s+/).every(V=>o(N.join(" ")).includes(V)),D=[];if(Tt.replaceChildren(),Ft&&(Tt.append(xt("strong",Ft.item?.name||Ft.entity?.name||Ft.entity?.entity_id)),Ft.entity&&Tt.append(Kt(J?"Suggested models":"All compatible models",()=>{J=!J,O()})),Tt.append(Kt("Cancel mapping",()=>{St.value=Ft.entity?"devices":"placed",Ft=void 0,wt.value="",O()}))),St.value==="placed")for(let N of k){let V=lt.get(N.type);if(!R(N.name,V?.label,N.type,N.entityId))continue;let Y=[N.w,N.h,N.modelHeight].filter(Number.isFinite).join(" \xD7 "),rt=[V?.label||N.type,Y&&Y+" plan px",N.entityId].filter(Boolean).join(" \xB7 "),W=[Kt("Edit",()=>Q({kind:"edit",itemId:N.id}))];T.some(ot=>y(N,V,ot))&&W.push(Kt("Change model",()=>Zt({item:N}))),D.push([N.name||V?.label||N.type,rt,W])}else if(St.value==="devices"){let N=new Map;for(let V of k)V.entityId&&!N.has(V.entityId)&&N.set(V.entityId,V);for(let V of M){if(!c(V.entity_id)||!R(V.name,V.entity_id,V.area))continue;let Y=N.get(V.entity_id),rt=[V.entity_id,V.area,Y?"On plan \xB7 "+Y.name:"Available to map"].filter(Boolean).join(" \xB7 ");D.push([V.name||V.entity_id,rt,[Y?Kt("Edit mapped object",()=>Q({kind:"edit",itemId:Y.id})):Kt("Choose model",()=>Zt({entity:V}))]])}}else{let N=T.filter(V=>!V.legacy);if(Ft?.item&&(N=T.filter(V=>y(Ft.item,lt.get(Ft.item.type),V))),Ft?.entity){let V=_(Ft.entity,T);N=J?V.available:V.recommended}for(let V of N){let Y=pt.get(V.group)||V.group;if(!R(V.label,V.type,V.tags,Y))continue;let rt=Ft?.item?{kind:"replace",itemId:Ft.item.id,modelId:V.type}:{kind:"place",modelId:V.type,...Ft?.entity?{entityId:Ft.entity.entity_id}:{}};D.push([V.label,Y+" \xB7 "+V.w+" \xD7 "+V.h+" plan px",[Kt(Ft?"Use model":"Place",()=>Q(rt))]])}}Ot.replaceChildren();for(let[N,V,Y]of D.slice(0,48)){let rt=xt("div","",{class:"model-library-row"}),W=xt("div");W.append(xt("strong",N),xt("small",V));let ot=xt("div","",{class:"model-library-actions"});ot.append(...Y),rt.append(W,ot),Ot.append(rt)}Ut.textContent=D.length>48?"Showing 48 of "+D.length+". Search to narrow the list.":D.length?D.length+(D.length===1?" result":" results"):St.value==="devices"&&!M.length?"Connect to Home Assistant to list devices.":"No matches."}return St.addEventListener("change",()=>{Ft=void 0,wt.value="",O()}),wt.addEventListener("input",O),dt.addEventListener("click",()=>_t.close()),{open(T="placed"){Ft=void 0,J=!1,St.value=T,wt.value="",O(),_t.open||_t.showModal()},get isOpen(){return _t.open},close(){_t.open&&_t.close()}}}i.RoomcraftModels=Object.freeze({catalog:m,canMap:S,canReplace:y,suggestions:_,supportsHeight:v,resizeFootprint:E,splitDiningFurniture:p,placementRole:F,blockingPlacement:Nt,orderMountedObjects:Et,mount:At,handoffKey:n})})(typeof window>"u"?globalThis:window);function tm(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new He().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var uM=24,hM=.32,fM=125,dM=24,Rl=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function na(i,t=.12){return new ke({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function pM(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function Oh(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new se;s.name="tracked-people",i.add(s);let r,o=new Map,a=Rl.map(()=>[]),c=!1,l=!1,u=0,d=!1;function h(){return{sphere:new Se(1,12,8),disc:new yn(1,24).rotateX(-Math.PI/2),groundRing:new To(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new _n(1,.14,6,16),palette:Rl.map(({sweater:y,trim:S,skin:_,hair:v})=>Object.fromEntries(Object.entries({sweater:y,trim:S,skin:_,hair:v}).map(([E,A])=>[E,na(A)]))),ink:na("#423c50",.09),cheek:na("#d78383"),shoes:na("#514656"),white:na("#fff1dc"),shadow:new Ge({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new Ge({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function f(y){r??=h();let{role:S,scale:_}=Rl[y],{sweater:v,trim:E,skin:A,hair:b}=r.palette[y],I=S==="baby",U=new se;U.name=`radar-avatar-${S}`;let L=new se,B=new se,F=[],H=[],$=[];s.add(U),U.add(L),L.scale.set(..._);let z=(it,at,Ct,Nt,Et,At,Z,X)=>{let Q=new he(r.sphere,at);return Q.position.set(Ct,Nt,Et),Q.scale.set(At,Z,X),it.add(Q),Q},j=new he(r.disc,r.shadow);j.position.y=.13,j.scale.set(19,1,19),U.add(j);let ut=new he(r.groundRing,r.groundMark);ut.position.y=.26,U.add(ut),z(L,v,0,15,0,I?8.2:7.1,8.3,5.4),I?(z(L,E,0,17.5,4.8,4.9,4.1,1.15),z(L,r.white,0,17.4,5.9,1.5,1.5,.35)):(z(L,E,0,20.7,2.4,5.8,2.2,4),z(L,E,S==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let it of[-1,1]){let at=new se;at.position.set(it*3.4,10.3,.1),L.add(at),z(at,I?v:r.ink,0,-3.2,0,2.65,4.6,2.6),z(at,I?E:r.shoes,0,-8.15,1.25,3.1,2.1,4),z(at,r.white,0,-8.8,3.25,2.75,1.1,2),$.push(at);let Ct=new se;Ct.position.set(it*6.25,19.1,0),L.add(Ct),z(Ct,v,it*.9,-3.7,.15,2.75,5.3,2.7),z(Ct,A,it*1.3,-7.8,.5,2.3,2.6,2.2),H.push(Ct)}B.position.set(0,I?26:27.2,0),I&&B.scale.set(1.16,1.17,1.12),L.add(B),z(B,b,0,1.3,-1.65,9.2,9.65,8.6),z(B,A,0,0,1.9,8.65,8.45,7.5);let nt=z(B,b,-2.1,7.3,4.25,6.4,3.4,4.35);if(nt.rotation.z=S==="papa"?-.27:.22,S==="mama"&&(z(B,b,-6.7,-1.9,-3.8,3.6,8.1,5.2),z(B,b,6.2,-1.7,-3.9,3.3,7.6,5.4),z(B,b,2.8,10.4,-2.5,5.1,5.1,5.1),z(B,E,4.4,8.7,2.2,2.8,1.1,1.1)),I){z(B,b,-7.3,6.7,-2,3.35,3.7,3.5),z(B,b,7.3,6.7,-2,3.35,3.7,3.5);let it=z(B,E,.9,10,4.2,2.5,1.45,1.25),at=z(B,E,4.1,10,4.2,2.5,1.45,1.25);it.rotation.z=-.4,at.rotation.z=.4,z(B,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let it of[-1,1])if(z(B,A,it*8.2,-.15,1.1,1.85,2.4,1.75),F.push(z(B,r.ink,it*3,1.2,8.95,.85,.87,.52)),z(B,r.cheek,it*5.05,-1.25,7.95,1.18,.62,.52),S==="papa"){let at=new he(r.glasses,r.ink);at.position.set(it*3.1,1.25,9.15),at.scale.set(2.5,2.15,1.55),B.add(at)}return S==="papa"&&z(B,r.ink,0,1.6,9.35,1.1,.28,.35),z(B,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:U,body:L,head:B,arms:H,legs:$,eyes:F,styleIndex:y,baby:I}}function g(y,S){return y.duration>0?oe.clamp((S-y.start)/y.duration,0,1):1}function x(y,S=c){u=Number.isFinite(y)?y:u,l=S||c,d=!1;for(let _ of o.values()){let{character:v}=_;l&&(_.duration=0);let E=g(_,u),A=oe.lerp(_.fromX,_.x,E),b=oe.lerp(_.fromZ,_.z,E),I=t(A,b);!Number.isFinite(I)&&E<1&&(_.duration=0,E=1,A=_.x,b=_.z,I=t(A,b));let U=n?Math.min(1,n(A,b)/dM):1;if(v.root.visible=Number.isFinite(I)&&U>0,!v.root.visible)continue;d=!0,v.root.position.set(A,I,b),v.root.rotation.y=_.heading,v.root.scale.setScalar(U);let L=_.walking&&E<1&&!l,B=Math.floor(Math.max(0,u-_.born)*16)/16+.7+v.styleIndex*.62,F=Math.floor(E*12)/12*Math.PI*4,H=L?Math.sin(F)*.56:0,$=L?Math.abs(Math.sin(F))*1.9:(1+Math.sin(B*4.7))*.47;v.body.position.y=l?0:$*(v.baby?1.5:1),v.body.rotation.z=l?0:L?H*.15:Math.sin(B*2.8)*.045;for(let z=0;z<2;z++){let j=z===0?-1:1;v.arms[z].rotation.x=L?-H*j:l?0:Math.sin(B*3.1+z)*.09,v.legs[z].rotation.x=H*j}pM(v,B,l)}}function p(y,S,{reduceMotion:_=!1}={}){c=_;let v=Number.isFinite(S)?S:u,E=new Map;for(let b of Array.isArray(y)?y:[])if(!(typeof b?.id!="string"||!b.id||b.id.length>256||!Number.isFinite(b.x)||!Number.isFinite(b.y)||E.has(b.id)||!Number.isFinite(t(b.x,b.y)))&&(E.set(b.id,b),E.size===uM))break;for(let[b,I]of o)E.has(b)||(I.character.root.visible=!1,a[I.character.styleIndex].push(I.character),o.delete(b));let A=Rl.map(()=>0);for(let{character:b}of o.values())A[b.styleIndex]++;for(let b of[...E.keys()].filter(I=>!o.has(I)).sort()){let I=A.indexOf(Math.min(...A));A[I]++;let U=a[I].pop()??f(I),{x:L,y:B}=E.get(b);o.set(b,{character:U,fromX:L,fromZ:B,x:L,z:B,heading:0,born:v,start:v,duration:0})}for(let[b,{x:I,y:U}]of E){let L=o.get(b);if(L.x!==I||L.z!==U){let B=_?1:g(L,v),F=oe.lerp(L.fromX,L.x,B),H=oe.lerp(L.fromZ,L.z,B),$=Math.hypot(I-F,U-H),z=$>1?Math.atan2(I-F,U-H):L.heading,ut=!_&&$>0&&$<=fM&&e?.(F,H,I,U)?hM:0;Object.assign(L,{fromX:F,fromZ:H,x:I,z:U,heading:z,start:v,duration:ut,walking:$>2})}}x(v,_)}function m(){if(s.removeFromParent(),!!r){for(let y of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])y.dispose();for(let y of r.palette)for(let S of Object.values(y))S.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let y of a)y.length=0;o.clear(),r=void 0}}return{setTracks:p,render:x,dispose:m,setVisible(y){s.visible=y},get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return d}}}function em(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var Cl=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),Il=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function mM([i,t,e,n],s,r,o,a){let c=Cl(i,t,e,n,s,r),l=Cl(i,t,e,n,o,a),u=Cl(s,r,o,a,i,t),d=Cl(s,r,o,a,e,n);return Math.abs(u)<1e-7&&Il(s,o,i)&&Il(r,a,t)||Math.abs(d)<1e-7&&Il(s,o,e)&&Il(r,a,n)?!0:c>0!=l>0&&u>0!=d>0}function Bh(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>em(a,r,o)&&!c.some(l=>em(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,d]of t){let h=u-c,f=d-l,g=h*h+f*f;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*h+(o-l)*f)/g)),p=r-c-x*h,m=o-l-x*f;a=Math.min(a,p*p+m*m)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>mM(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var nm=new He,Pl=new G,Or=class extends Lo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new qt(t,3)),this.setAttribute("uv",new qt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new fs(e,6,1);return this.setAttribute("instanceStart",new $n(n,3,0)),this.setAttribute("instanceEnd",new $n(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new fs(e,6,1);return this.setAttribute("instanceColorStart",new $n(n,3,0)),this.setAttribute("instanceColorEnd",new $n(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ao(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new He);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),nm.setFromBufferAttribute(e),this.boundingBox.union(nm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pl.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pl)),Pl.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Bt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Cn.line={uniforms:Xo.merge([Bt.common,Bt.fog,Bt.line]),vertexShader:`
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
		`};var _s=class extends Ze{constructor(t){super({type:"LineMaterial",uniforms:Xo.clone(Cn.line.uniforms),vertexShader:Cn.line.vertexShader,fragmentShader:Cn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var kh=new Ae,im=new G,sm=new G,un=new Ae,hn=new Ae,Ci=new Ae,zh=new G,Hh=new _e,fn=new No,rm=new G,Ll=new He,Nl=new Nn,Ii=new Ae,Pi,Hs;function om(i,t,e){return Ii.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ii.multiplyScalar(1/Ii.w),Ii.x=Hs/e.width,Ii.y=Hs/e.height,Ii.applyMatrix4(i.projectionMatrixInverse),Ii.multiplyScalar(1/Ii.w),Math.abs(Math.max(Ii.x,Ii.y))}function gM(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){fn.start.fromBufferAttribute(s,a),fn.end.fromBufferAttribute(r,a),fn.applyMatrix4(e);let l=new G,u=new G;Pi.distanceSqToSegment(fn.start,fn.end,u,l),u.distanceTo(l)<Hs*.5&&t.push({point:u,pointOnLine:l,distance:Pi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function xM(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),d=-t.near;Pi.at(1,Ci),Ci.w=1,Ci.applyMatrix4(t.matrixWorldInverse),Ci.applyMatrix4(n),Ci.multiplyScalar(1/Ci.w),Ci.x*=r.x/2,Ci.y*=r.y/2,Ci.z=0,zh.copy(Ci),Hh.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,f=u;h<f;h++){if(un.fromBufferAttribute(c,h),hn.fromBufferAttribute(l,h),un.w=1,hn.w=1,un.applyMatrix4(Hh),hn.applyMatrix4(Hh),un.z>d&&hn.z>d)continue;if(un.z>d){let S=un.z-hn.z,_=(un.z-d)/S;un.lerp(hn,_)}else if(hn.z>d){let S=hn.z-un.z,_=(hn.z-d)/S;hn.lerp(un,_)}un.applyMatrix4(n),hn.applyMatrix4(n),un.multiplyScalar(1/un.w),hn.multiplyScalar(1/hn.w),un.x*=r.x/2,un.y*=r.y/2,hn.x*=r.x/2,hn.y*=r.y/2,fn.start.copy(un),fn.start.z=0,fn.end.copy(hn),fn.end.z=0;let x=fn.closestPointToPointParameter(zh,!0);fn.at(x,rm);let p=oe.lerp(un.z,hn.z,x),m=p>=-1&&p<=1,y=zh.distanceTo(rm)<Hs*.5;if(m&&y){fn.start.fromBufferAttribute(c,h),fn.end.fromBufferAttribute(l,h),fn.start.applyMatrix4(o),fn.end.applyMatrix4(o);let S=new G,_=new G;Pi.distanceSqToSegment(fn.start,fn.end,_,S),e.push({point:_,pointOnLine:S,distance:Pi.origin.distanceTo(_),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var Dl=class extends he{constructor(t=new Or,e=new _s({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)im.fromBufferAttribute(e,o),sm.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+im.distanceTo(sm);let r=new fs(s,2,1);return t.setAttribute("instanceDistanceStart",new $n(r,1,0)),t.setAttribute("instanceDistanceEnd",new $n(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Pi=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Hs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Nl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Hs*.5;else{let d=Math.max(s.near,Nl.distanceToPoint(Pi.origin));l=om(s,d,c.resolution)}if(Nl.radius+=l,Pi.intersectsSphere(Nl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ll.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Hs*.5;else{let d=Math.max(s.near,Ll.distanceToPoint(Pi.origin));u=om(s,d,c.resolution)}Ll.expandByScalar(u),Pi.intersectsBox(Ll)!==!1&&(n?gM(this,e):xM(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(kh),this.material.uniforms.resolution.value.set(kh.z,kh.w))}};var Br=class extends Or{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Ul=class extends Dl{constructor(t=new Br,e=new _s({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var am="#ffce84",yM="#a8f5ff",Gh="#10242e";function Fl(i,t,e){return new _s({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function Ol(i,t,e,n){let s=new Br;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new Ul(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function cm(i,t,e,n){let s=new ce().setFromPoints(t.map(({x:o,y:a})=>new G(o,.5,a)));s.setIndex(Zn.triangulateShape(t.map(({x:o,y:a})=>new Lt(o,a)),[]).flat());let r=new he(s,e);r.renderOrder=n,i.add(r)}function lm(){let i=new ss,t={side:ln,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new Ge({...t,color:am,opacity:.13}),n=new Ge({...t,color:Gh,opacity:.95}),s=Fl(Gh,4.6,{opacity:.8}),r=Fl(am,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=Fl(Gh,3.5,{...o,opacity:.65}),c=Fl(yM,1.7,{...o,opacity:.9});function l({origin:h,forward:f}){let g=(p,m=0)=>({x:h.x+f.x*p-f.y*m,y:h.y+f.y*p+f.x*m}),x=Array.from({length:28},(p,m)=>{let y=m/28*Math.PI*2;return g(10*Math.cos(y),10*Math.sin(y))});Ol(i,[g(10),g(56)],[s,r],5),Ol(i,[g(45,-7),g(56),g(45,7)],[s,r],5),cm(i,x,n,7),Ol(i,[...x,x[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let f=new Map;for(let g of h){let{points:x,kind:p,id:m,origin:y,forward:S}=g;if(x.length<3)continue;let _=p==="nominal";_&&cm(i,x,e,0),Ol(i,[...x,x[0]],_?[s,r]:[a,c],_?3:1),y&&S&&f.set(m,g)}for(let g of f.values())l(g)}function d(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:d}}var _M=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),vM=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),um={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},Bl=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"]}).map(([i,t])=>[i,t.map(e=>new Xt(e))])),bM=new Xt("#ffd59e"),hm=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:ia,smoothstep:fm}=oe;function MM({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new ce;return o.setAttribute("position",new qt(n,3)),o.setAttribute("uv",new qt(s,2)),o.setIndex(r),o}var SM=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`,wM=`
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
`;function dm({y:i,farZ:t,shoreline:e,focusX:n}){let s={waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},moon:{value:0},moonLight:{value:new Lt(0,1)},bodyPosition:{value:new Lt}};for(let[c,l]of hm.entries())s[l]={value:Bl.clear[c].clone()};let r=new Ze({uniforms:s,vertexShader:SM,fragmentShader:wM,toneMapped:!1}),o=new he(MM({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:d,condition:h,moonPhase:f,sunElevation:g,sunRising:x,sunAzimuth:p,moonAzimuth:m,moonElevation:y,skyProgress:S,windSpeed:_,windBearing:v,reduceMotion:E,reflections:A=!0}=l,b=_M.has(h),I=Number.isFinite(g)?g:u?-19:42,U=fm(I,-8,17),L=Bl[b?"overcast":"clear"];for(let[At,Z]of hm.entries())s[Z].value.lerpColors(Bl.night[At],L[At],U);let B=Object.hasOwn(um,f)?um[f]:void 0,F=d?!u:h==="sunny",H=u&&B!==void 0,$=ia(I/75,0,1),z=U*(1-fm(I,8,34));F&&s.bodyTint.value.lerp(bM,z*.7),H&&s.bodyTint.value.copy(Bl.night[5]);let j=vM.has(h),ut=Number.isFinite(c)&&!E?c:0;s.waterTime.value=ut,s.rain.value=j?1:0,s.fog.value=h==="fog"?1:0;let nt=Number.isFinite(_)?ia(_/18,0,1):0,it=Number.isFinite(v)?-Math.sin(oe.degToRad(v)):1;s.reflectedWind.value=Math.sin(ut*.09)*it*nt*24;let at=j||h==="windy"||h==="windy-variant";s.roughness.value=1+Math.max(at?.65:0,nt*.65),s.cloudCover.value=A?b?.94:h==="partlycloudy"?.64:u?.32:.24:0,s.bodyVisibility.value=!A||b?0:H?.93:F?.97:0,s.moon.value=H?1:0;let Ct=Number.isFinite(S)?ia(S,0,1):void 0,Nt=Ct===void 0?void 0:oe.lerp(-145,145,Ct),Et=At=>ia((At-180)*1.08,-180,180);if(H){s.moonLight.value.set(Math.sin(B),Math.cos(B));let At=Nt??(Number.isFinite(m)?Et(m):46+Math.sin(ut*.014)*27),Z=Number.isFinite(y)?32+ia(y/75,0,1)*24:42;s.bodyPosition.value.set(At,Z)}else{let At=x===!0?-107:x===!1?118:-31,Z=Nt??(Number.isFinite(p)?Et(p):At*(1-$));s.bodyPosition.value.set(Z,38+$*20)}}return{mesh:o,update:a}}var kl=26,EM=92,kr=4,TM=18,AM=188;function mm(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-TM,o=r-2*kl-EM;return{nearZ:r,farZ:o,sceneryMinZ:o-AM}}function gm(i,{nearZ:t,farZ:e},n,s,r){let o=e+kl,a=t-kl,c=(o+a)/2,l=r-s/2,u=r+s/2,d=(h,f,g,x)=>i.box(s,g,f-h,x,r,n+g/2,(h+f)/2);d(o,a,1.2,"#73767c"),d(o,o+3.4,1.4,"#656b71"),d(a-3.4,a,1.4,"#656b71");for(let[h,f,g,x]of[[e,o,o-kr,e],[a,t,a,a+kr]]){d(h,f,5,"#c0b6a7"),d(g,g+kr,6.2,"#d0c3b0");let p=kl-kr;for(let m=l+36;m<u;m+=72)i.box(1.15,.18,p,"#a69c91",m,n+5.04,x+p/2)}for(let h=l+36;h+17<u;h+=72)i.box(34,.2,2.8,"#e9ce91",h,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+kr,maxZ:t,surfaceY:n+5},{minZ:e,maxZ:o-kr,surfaceY:n+5}]}}function Vh(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new ce;o.setAttribute("position",new qt(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function RM(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new go(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,d=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+d)}}function CM(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,d=s+.1;i.ball(a,c,13,"#d7bd94",l,d,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,d+.5,u+4);for(let[h,f,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])RM(i,l+a*h,u+f,d+c*.75,g,h*7)}}function IM(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function PM(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let d=(p,m,y)=>[Math.cos(p)*m,y,Math.sin(p)*m],h=o+u*2*Math.PI/8,f=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],d(h,16*.54,16.6+2.1),d(f,16*.54,16.6+2.1),d(h,16,16.6-.55),d(f,16,16.6-.55),d(h,16,16.6-2),d(f,16,16.6-2)],x=new ce;x.setAttribute("position",new qt(g.flat(),3)),x.setAttribute("uv",new qt(g.flatMap(([p,,m])=>[p/32+.5,m/32+.5]),2)),x.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),x.computeVertexNormals(),i.add(x,u%2?r:s,t,n,e)}}function pm(i,t,e,n,s,r){let o=(d,h)=>[t+d*Math.cos(r)+h*Math.sin(r),e-d*Math.sin(r)+h*Math.cos(r)],a=(d,h,f,g,x,p,m)=>{let[y,S]=o(x,m);i.box(d,h,f,g,y,n+p,S,r)};for(let d of[-1,1])a(1.1,1.2,18,"#988679",d*4.5,2.15,0),a(1,2.1,1.2,"#988679",d*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new Me(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function LM(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,d=e+o;PM(i,u,d,s,a,c,l),pm(i,u-13,d-15,s,c,l-.17),pm(i,u+14,d-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,d+7,l*2)}}function xm(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,m)=>{let y=l+r*m/c,S=y-a,_=t-108+14*Math.cos((S+110)*.006)+7*Math.sin((S-90)*.013);return{x:y,z:_}}),d=u.map(({x:p})=>[p,e+.28,t+.4]),h=u.map(({x:p,z:m})=>[p,e+.71,m+22]),f=u.map(({x:p,z:m})=>[p,e+.44,m+6]),g=u.map(({x:p,z:m})=>[p,e+.17,m-31]);Vh(i,d,h,"#e3cba0"),Vh(i,h,f,"#dbbd92"),Vh(i,f,g,"#c8a47e");let x=Math.max(940,s-n);CM(i,a,t,x,e);for(let p of[-1,1])IM(i,a+p*x*.245,t,e);return LM(i,a,t,x,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Li}=oe,Qt={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},ym=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],NM=new Map(ym.map(i=>[i.id,i])),_m=[{id:"teal-semi",label:"Teal semi with box trailer",length:119,width:29,paint:"#61978e",roof:"#9bc0a8",trailer:"#eadcbd",stripe:"#83a89c"},{id:"coral-reefer",label:"Coral semi with refrigerated trailer",length:122,width:29,paint:"#b97c76",roof:"#e2ad95",trailer:"#e4e5d8",stripe:"#7298a7",refrigerated:!0}],DM=new Map(_m.map(i=>[i.id,i])),vm=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],bm=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],UM=new Map(vm.map(i=>[i.id,i])),FM=new Map(bm.map(i=>[i.id,i])),Mm=({id:i,label:t,length:e,width:n,detail:s})=>Object.freeze({id:i,label:t,length:e,width:s==="food"?n+2:n}),zl=Object.freeze([...ym,..._m,...vm].map(Mm)),Hl=Object.freeze(bm.map(Mm));function OM(i){let t=new ce;return t.setAttribute("position",new qt(i.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function Gl(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Xt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new be(a,3)),r}),e=Un(t);for(let n of t)n.dispose();return e.computeBoundingBox(),e}function sa(i,t){let e=i.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),n=[],s=(i.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;n.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)n.push(0,o,o+1,s,s+o+1,s+o);let r=new ce;return r.setAttribute("position",new qt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function BM(i){let t=[],e=(z,j)=>t.push([z,j]),n=(z,j,ut,nt,it,at,Ct)=>e(new Me(nt,it,at).translate(z,j,ut),Ct),s=(z,j)=>e(OM(z),j),r=(z,j,ut,nt,it,at,Ct)=>{let Nt=[[j,nt,at],[ut,nt,at],[ut,it,at],[j,it,at]];s(z>0?Nt:Nt.reverse(),Ct)},{width:o,tire:a,body:c,roof:l,detail:u}=i,d=i.length-2.8,h=d*.5,f=o*.435,g=a*.78,x=8.25+a*.52,p=x-(u==="sports"||u==="convertible"?1.8:.75);e(sa([[-h,f*.76,x-1.6],[-h+2.4,f*.93,x-.2],[-h+6.2,f,x],[h-6.2,f,x-.24],[h-2.4,f*.92,p+.35],[h,f*.75,p]],g),c);let m=g+.95;for(let z of[-1,1])n(z*(h-.22),m,0,1.42,1.58,f*1.57,Qt.bumper),n(z*(h+.05),m+.82,0,1.08,.95,4.5,Qt.plate);n(h+.1,p-2.8,0,.65,1.2,f*.64,Qt.grille),n(h+.38,p-2.62,0,.24,.35,f*.55,Qt.rim);for(let z of[-1,1]){n(0,g+1.3,z*(f+.04),d*.53,.9,.34,Qt.bumper);for(let j of[-.323,.323]){let ut=d*j,nt=z*(f+.05);e(new Ye(a,a,2.9,10).rotateX(Math.PI/2).translate(ut,a,nt),Qt.tire),e(new yn(a*.57,8).rotateY(z<0?Math.PI:0).translate(ut,a,nt+z*1.46),Qt.rim),e(new yn(a*.28,6).rotateY(z<0?Math.PI:0).translate(ut,a,nt+z*1.48),Qt.hub)}}let[y,S,_,v]=i.cabin.map(z=>d*z),E=x-.35,A=i.height-1.25,b=f*.88,I=b*(i.windows>2||u==="camper"||u==="delivery"?.94:.79),U=z=>Li(b,I,z),L=z=>Li(E,A,z),B=(z,j,ut,nt=0)=>[Li(Li(y,S,j),Li(v,_,j),z),L(j),ut*(U(j)+nt)];function F(z,j,ut,nt,it=.2,at=.85,Ct=.08){let Nt=[B(j,it,z,Ct),B(ut,it,z,Ct),B(ut,at,z,Ct),B(j,at,z,Ct)];s(z>0?Nt:Nt.reverse(),nt)}function H(z,j,ut,nt,it,at,Ct=0){let[Nt,Et]=z>0?[v,_]:[y,S],At=(X,Q)=>[Li(Nt,Et,Q)+z*Ct,L(Q),X*U(Q)],Z=[At(ut,nt),At(j,nt),At(j,it),At(ut,it)];s(z>0?Z:Z.reverse(),at)}function $(z){H(z,-.81,.81,.16,.88,Qt.window,.08),H(z,-.72,.73,.23,.82,Qt.glass,.13),H(z,-.67,.64,.67,.75,Qt.glassGlow,.18)}if(u==="convertible"){H(1,-.88,.88,0,1,l,.08),$(1),n((y+_)/2,E+.2,0,(_-y)*.96,1.05,b*1.92,Qt.window);for(let z of[-1,1])n(y+5.7,E+2.35,z*b*.43,7.7,2.5,5.6,Qt.upholstery),n(y+2.2,E+3.7,z*b*.43,2,5.2,6,Qt.tan)}else{for(let it of[-1,1])F(it,0,1,c,0,1,0);H(1,-1,1,0,1,c),H(-1,-1,1,0,1,c),$(1),["delivery","cargo","food"].includes(u)||$(-1);let z=(_+S)/2,j=_-S+.38;n(z,A+.34,0,j,.84,I*2.05,l),u==="bubble"&&n(z,A+.79,0,j*.88,.52,I*1.67,l),u==="sunroof"&&(n(z,A+.82,0,j*.48,.24,I*1.12,Qt.window),n(z-j*.12,A+.98,0,.65,.18,I,Qt.glassGlow));let ut=i.windows??2,nt=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:ut},(it,at)=>[(at+.16)/ut,(at+.86)/ut]);for(let it of[-1,1])for(let[at,Ct]of nt)F(it,at,Ct,Qt.window),F(it,at+.011,Ct-.009,Qt.glass,.29,.79,.13),F(it,at+.023,Ct-.025,Qt.glassGlow,.64,.72,.18)}for(let z of[-1,1])n(v-3,E+1.05,z*(f+.2),3.2,1.8,1.75,l),n(Li(y,v,.36),x-1.45,z*(f+.1),2.8,.46,.24,Qt.rim);return{add:e,box:n,sideFace:r,glazingSide:F,bodyParts:t,recipe:i,length:d,outer:f,shoulder:x,nose:h,frontY:p}}function kM(i,t){let{length:e,outer:n,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=i,l=-e*.454,u=e*.105,d=r.height-.4,h=u-l;o(sa([[l,n*.93,d-.7],[l+1.6,n,d],[u-1.6,n,d],[u,n*.93,d-.7]],s-.8),t),a((l+u)/2,d+.1,0,h-3.5,.28,n*1.6,r.roof);for(let f of[-1,1]){let g=f*(n+.1);c(f,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let f of[-.4,0,.4])a(l-.13,(s+d)/2,n*f,.26,d-s-3.1,.4,Qt.rim);return{rear:l,front:u,top:d}}function zM(i){let{recipe:t,box:e,sideFace:n,glazingSide:s,length:r,outer:o,shoulder:a}=i,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let d=l+.5;for(let h of[-1,1])e(r*-.18,d,h*o*.51,r*.3,.85,.83,Qt.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,d+.55,0,1.05,.75,o*1.18,Qt.roofRail);e(r*-.18,d+1.1,0,r*.17,1.65,o*.78,Qt.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,Qt.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let d=r*-.25;e(d,a+.22,0,r*.35,.42,o*1.43,Qt.wood);for(let h of[-1,1])e(d,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(d,a+.48,h*o*.38,r*.33,.25,.4,Qt.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,Qt.tan)}else if(c==="cargo"||c==="food"){let{rear:d,front:h}=kM(i,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let f=a+7;n(1,d+5.5,h-4.5,f,f+8.4,o+.19,Qt.window),e((d+h)/2,f,o+.75,h-d-9.5,.75,2.65,Qt.wood);for(let g=0;g<7;g++)e(Li(d+6,h-4.5,g/6),f+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let d of[-1,1])c==="delivery"?(s(d,.1,.61,"#e5d6e4",.28,.65,.12),s(d,.18,.54,"#b39cc2",.43,.49,.18)):(s(d,.09,.61,"#456575",.29,.68,.12),s(d,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,d*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let d of[-1,1])e(0,a-1.05,d*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,Qt.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function Wh(i,t,e){return[{role:"body",geometry:Gl(i),material:new ke({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new ke({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new ke({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function HM({length:i,width:t,paint:e,roof:n,trailer:s,stripe:r,refrigerated:o}){let a=[],c=(p,m)=>a.push([p,m]),l=(p,m,y,S,_,v,E)=>c(new Me(S,_,v).translate(p,m,y),E),u=-i/2+1.3,d=i/2-1.3,h=14,f=t/2-1.15,g=f-.7;c(sa([[u,f-1.2,32],[u+2,f,34],[h-2,f,34],[h,f-1,32]],10.2),s),c(sa([[17,g-1,18],[21,g,22],[45,g,22],[d-4,g-1,16],[d,g-2,14]],7),e),c(sa([[27,g-1,28],[31,g-.7,32],[42,g-.7,31],[47,g-1.6,26]],16),n),l(48,23.6,0,.9,6.8,g*1.5,Qt.window),l(48.55,25.8,0,.22,.8,g*1.4,Qt.glassGlow),l(d+.27,11,0,.56,5.9,9,Qt.grille),l(d+.61,8.6,0,.55,1.12,g*1.55,Qt.rim),l(u-.32,10.6,0,.62,1.2,2*f-3,Qt.bumper),l(h+2.8,9.1,0,10,1.5,12,Qt.bumper);for(let p of[-1,1]){l((u+h)/2,15,p*f,h-u-5,2.1,.39,r),l((u+h)/2,26,p*(f+.06),h-u-10,.32,.3,"#f6edd3"),l(40,25,p*(g-.5),7.8,5.25,.32,Qt.window),l(47,21,p*(g+.2),2.1,2.1,1.5,e),l(35,9.5,p*(g+.25),7.2,.85,1.12,Qt.rim),l(u-.1,22,p*f*.41,.48,13.2,.51,Qt.rim);for(let m of[u+9,u+19,23,32,d-8.2]){let y=p*(f-1.42);c(new Ye(4.35,4.35,2.8,8).rotateX(Math.PI/2).translate(m,4.35,y),Qt.tire),c(new yn(2.47,6).rotateY(p<0?Math.PI:0).translate(m,4.35,y+p*1.41),Qt.hub)}}o&&(l(h+1.2,27,0,2.6,7.9,8.8,"#eee5ce"),l(h+2.55,27.8,0,.2,3.9,6.4,r));let x=(p,m)=>Gl([-1,1].map(y=>[new Me(.42,1.3,3.1).translate(p,m,y*(f-3.7)),"#ffffff"]));return Wh(a,x(d+.38,12.25),x(u-.54,12.4))}function Sm(i,t){let{style:e,length:n,paint:s,trim:r,jacket:o,helmet:a}=i,c=[],l=(Et,At)=>c.push([Et,At]),u=(Et,At,Z)=>l(new Me(...Z).translate(...At),Et),d=(Et,At,Z,X=0)=>l(new Se(1,8,5).scale(...Z).rotateZ(X).translate(...At),Et);function h(Et,At,Z,X){let Q=new G(...At),ct=new G(...Z),xt=new G().subVectors(ct,Q),_t=new on().setFromUnitVectors(new G(0,1,0),xt.clone().normalize());l(new Ye(X,X,xt.length(),5,1,!0).applyQuaternion(_t).translate(...Q.lerp(ct,.5).toArray()),Et)}let f=t?1:.75,g=n*(t?.132:.15),x=-n*(e==="longtail"?.309:.326),p=n*.326,m=[n*-.024,g+f*1.25,0],y=[n*(e==="cruiser"?-.16:-.115),n*(e==="trail"?.4:e==="cruiser"?.327:.369),0],S=e==="road"||e==="racer",_=[n*(S?.234:.204),y[1]+(S?.5:3.7)*f,0],v=f*(t?2.2:1.36),E=f*(t?1.04:.65),A=f*(t?.9:.65),b=e!=="road";for(let Et of[x,p]){l(new _n(g-E,E,4,12).translate(Et,g,0),Qt.tire),b&&l(new _n(g+f*.37,f*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(Et,g,0),s);for(let At of[0,Math.PI/3,Math.PI*2/3]){let Z=g-E*1.35,X=Math.cos(At)*Z,Q=Math.sin(At)*Z;h(Qt.rim,[Et-X,g-Q,0],[Et+X,g+Q,0],f*.23)}l(new Ye(f*1.05,f*1.05,v,8).rotateX(Math.PI/2).translate(Et,g,0),Qt.hub)}let I=[x,g,0];h(s,I,y,A),h(s,I,m,A),h(s,y,m,A),h(s,m,_,A);let U=e==="basket"||e==="scooter"?[_[0]*.7,m[1]+f*2.65,0]:_;h(s,y,U,A),U!==_&&h(s,U,_,A);for(let Et of[-1,1])h(Qt.rim,[_[0],_[1]-f*2.3,Et*v*.38],[p,g,Et*v*.45],A*.7);u(Qt.bumper,[y[0]-.25,y[1]+f*.4,0],[f*(t?7.1:4.8),f*1.08,f*3.15]);let L=f*(t?5.05:4.75),B=_[0]+(S?f*1.85:-f*.8),F=_[1]+(S?-f*.6:f*.25);for(let Et of[-1,1]){let At=[B,F,Et*L];h(Qt.rim,_,At,f*.47),h(Qt.tire,[B+f*.6,F,Et*L*.82],At,f*.63)}if(t){u(Qt.bumper,[m[0]+.4,m[1]+1.05,0],[6.4,4.9,5.4]);let Et=e==="scooter"?[_[0]+2.1,y[1]-2.3,0]:[y[0]+5.5,y[1]+.7,0],At=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(d(s,Et,At,e==="scooter"?.34:-.18),u(r,[Et[0]+.8,Et[1]+.15,At[2]*.87],[At[0]*1.18,1,.8]),u(r,[Et[0]+.8,Et[1]+.15,-At[2]*.87],[At[0]*1.18,1,.8]),e==="racer")d(Qt.window,[_[0]+2,_[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[x+1.75,y[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,g*2.1+1.05,0],[7.25,.82,3.65]),u(Qt.rim,[x+1.55,y[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")d(s,[x+3.7,y[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[m[0],g+1.1,0],[8.2,1.22,6.2]);else for(let Z of[-1,1])h(Qt.rim,[x-2.2,g+2.1,Z*2.8],[m[0]+4.5,g+.45,Z*3.25],.79)}else{let Et=e==="longtail"?[x+1.1,g*2.05+1.8,0]:[p-.98,_[1]-1.55,0];e==="basket"||e==="longtail"?(u(Qt.wood,Et,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[Et[0],Et[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(Qt.tan,[Et[0],Et[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[x+1.65,g+1.05,2],[4.2,3.4,1.85]),u(Qt.roofRail,[x+1.6,g*2.05+.45,0],[5.3,.66,4.3]))}let H=[y[0]-f*.38,y[1]+f*2.05,0],$=[H[0]+(S?3.05:1.05)*f,H[1]+f*3.75,0],z=[$[0]+(S?3.35:.95)*f,$[1]+(S?3.1:4.85)*f,0],j=S?-.57:-.22;d(o,$,[f*2.6,f*4.15,f*3],j),d(a,z,[f*2.94,f*2.68,f*2.62]),d(Qt.window,[z[0]+f*2.1,z[1]-f*.4,0],[f*1.08,f*1.05,f*2.2]),(e==="commuter"||e==="trail")&&u(r,[$[0]-f*2.1,$[1]+f*.6,0],[f*1.9,f*3.3,f*3.5]);let ut="#4b4e63",nt="#e2b491";for(let Et of[-1,1]){let At=[$[0]+f*1.1,$[1]+f*1.65,Et*f*2.43],Z=[Li(At[0],B,.48),Li(At[1],F,.52)-f,Et*f*3.48],X=[B,F,Et*L*.93];h(o,At,Z,f*.95),h(o,Z,X,f*.76),u(nt,X,[f*1.5,f*1.11,f*1.09]);let Q=t?0:Et*f*1.35,ct=[H[0]+f*(t?4.3:4.9)+Q,H[1]-f*3.5,Et*f*2.64],xt=[m[0]+f*(e==="scooter"?2.65:.35)+Q,m[1]+f*.27-Q,Et*f*2.5];h(ut,[H[0],H[1],Et*f*1.86],ct,f*1.12),h(ut,ct,xt,f*.88),u(Qt.tire,[xt[0]+f*.25,xt[1],xt[2]],[f*2.15,f*.95,f*1.42])}let it=f*(t?1.34:.84),at=[p+f*.58,g*(t?2.3:2.18),0],Ct=[x-f*.56,g*(t?2.18:2.02),0];h(Qt.bumper,[p,g+f*1.5,0],at,f*.58),h(Qt.bumper,[x,g*1.6,0],Ct,f*.46);let Nt=Et=>Gl([[new Se(it,6,4).scale(.53,.78,1).translate(...Et),"#ffffff"]]);return Wh(c,Nt(at),Nt(Ct))}function wm(i){let t=UM.get(i);if(t)return Sm(t,!0);let e=DM.get(i);if(e)return HM(e);let n=NM.get(i);if(!n)return null;let s=BM(n);zM(s);let{outer:r,nose:o,frontY:a,shoulder:c,bodyParts:l}=s,u=(d,h)=>Gl([-1,1].map(f=>[new Me(1.48,1.8,r*.35).translate(d*(o+.19),h,f*r*.63),"#ffffff"]));return Wh(l,u(1,a-1.75),u(-1,c-2.65))}function Em(i){let t=FM.get(i);return t?Sm(t,!1):null}var Tm=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),Zi={stride:4,crossingSeconds:3.2},GM=242,Am=12,Rm=.38,Pm=new Map(zl.map(i=>[i.id,i])),Cm=["seafoam-sedan","blue-wagon","butter-compact","ruby-motorcycle","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","teal-semi","indigo-motorcycle"].map(i=>Pm.get(i));function VM({index:i,lane:t}){let e=Math.floor(i/Zi.stride),n=i%Zi.stride;return Cm[(2*(e+n)+t)%Cm.length]}function Im({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,Am*Math.round(n/(Am*GM))),o=n/r,a=e.map((x,p)=>Array.from({length:r},(m,y)=>({z:x,lane:p,index:y,x:s,offset:o*(y+.25+(r===1&&p?.5:0))}))),c=0,l,u,d,h=!1,f=[];function g(x,p,m,y=!1){let S=p?.severity==="ambient"?Zi:Tm.get(p?.severity),_=Number.isFinite(l)&&Number.isFinite(x)?oe.clamp(x-l,0,.25):0;if(l=x,S!==u){h=!!(u&&S&&(S===Zi||u===Zi));let A=Math.min(r,S?.stride??1),b=S===Zi?Math.floor(A/2):1;f=S?a.flatMap((I,U)=>I.filter(({index:L})=>L%A===U*b%A)):[],u=S}if(!S)return d=void 0,f;let v=p.speedFactor,E=S===Zi?o*Math.min(r,Zi.stride)/(2*Zi.crossingSeconds):Number.isFinite(v)&&v>0?Tm.get("clear").speed*oe.clamp(v,.22,1):S.speed;if(y)c=!m&&Number.isFinite(x)?Math.max(0,x)*E:0;else if(!m)if(h&&d!==void 0){let A=Math.exp(-_/Rm),b=d-E;c+=_*E+b*Rm*(1-A),d=E+b*A,h=Math.abs(d-E)>.1}else c+=_*E,d=E;c%=n;for(let A of f){let b=(A.offset+c)%n;A.x=s+(A.lane?n-b:b)}return f}return{capacity:r*e.length,update:g}}function Lm(i){let t=new se,e=Im(i),n,s=new Map;function r(f,g){let x=new Jn(f,g,e.capacity);return x.count=0,x.frustumCulled=!1,x.instanceMatrix.setUsage(Rn),x}let o=r(new yn(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new Ge({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1}));t.add(o);let a=new Be,c;t.visible=!1;function l(f,g){for(let{mesh:x,role:p}of f.layers)p==="headlamp"&&(x.material.emissiveIntensity=g?1.65:.26),p==="taillamp"&&(x.material.emissiveIntensity=g?.91:.28)}function u(f){if(s.has(f.id))return s.get(f.id);let g=new se;g.name=`vehicle-${f.id}`;let x=wm(f.id).map(({geometry:m,material:y,role:S})=>({mesh:r(m,y),role:S}));g.add(...x.map(({mesh:m})=>m)),t.add(g);let p={group:g,layers:x,count:0};return l(p,c),s.set(f.id,p),p}function d(f,g,{reduceMotion:x=!1,night:p=!1,transientTelemetry:m=!1}={}){m&&(n??=Im(i));let S=(m?n:e).update(f,g,x,m);if(t.visible=S.length>0,!t.visible)return;if(p!==c){c=p;for(let v of s.values())l(v,p)}for(let v of s.values())v.count=0;let _=Pm.get(g?.vehicleStyle);for(let[v,E]of S.entries()){let A=_??VM(E),b=u(A);a.position.set(E.x,i.surfaceY,E.z),a.rotation.y=E.lane?Math.PI:0,a.scale.set(1,1,1),a.updateMatrix();for(let{mesh:I}of b.layers)I.setMatrixAt(b.count,a.matrix);b.count++,a.scale.set(A.length*.55,1,A.width*.62),a.updateMatrix(),o.setMatrixAt(v,a.matrix)}o.count=S.length,o.instanceMatrix.needsUpdate=!0;for(let{group:v,layers:E,count:A}of s.values()){v.visible=A>0;for(let{mesh:b}of E)b.count=A,A&&(b.instanceMatrix.needsUpdate=!0)}}function h(){t.traverse(f=>{f.isInstancedMesh&&(f.dispose(),f.geometry.dispose(),f.material.dispose())}),t.clear()}return{root:t,update:d,dispose:h}}var WM=22,XM=63,YM=525,qM=1100,ZM=22,$M=75,JM=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],Nm=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],jM=(i,t)=>(i%t+t)%t;function KM(i){let t=i.width-$M*2,e=[],n=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(i.centerX))return{walkers:e,cyclists:n,sample:()=>({walkers:e,cyclists:n})};let s=i.centerX-t/2,r=Math.max(1,Math.round(t/YM)),o=Math.max(1,Math.round(t/qM)),a=t/r,c=t/o;for(let[u,d]of(i.sidewalks??[]).entries()){let{minZ:h,maxZ:f,surfaceY:g}=d,x=f-h;if(![h,f,g].every(Number.isFinite)||x<=0)continue;let p=u%2?-1:1,m=Math.min(1,x/ZM),y=h+x*(p>0?.25:.75),S=h+x*(p>0?.76:.24);for(let _=0;_<r;_++){let v=Nm[(_+u*2)%Nm.length],E=t/2+(_+u*.42)*a-35,A=`sidewalk-walk-${u}-${_}`;for(let[b,[I,U]]of v.entries())e.push({id:`${A}-${b}`,groupId:A,style:I,child:U<.8,offset:E-p*13.2*b,scale:m*U,direction:p,y:g,z:y+p*.62*(b%2),phase:_*.91+u*.8+b*2.1})}for(let _=0;_<o;_++)n.push({id:`sidewalk-bike-${u}-${_}`,style:Hl[(_+u*2)%Hl.length],offset:t/2+(_+u*.65)*c,scale:m,direction:p,y:g,z:S,phase:_*1.7+u})}function l(u=0,d=!1){let h=Number.isFinite(u)?Math.max(0,u):0,f=(g,x,p)=>g.map(m=>({...m,x:s+jM(m.offset+m.direction*x*h,t),gait:d?0:h*p+m.phase}));return{walkers:f(e,WM,10),cyclists:f(n,XM,7)}}return{walkers:e,cyclists:n,sample:l}}var Vl={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function Xh(i,t,e){let{shirt:n,trim:s,pants:r,skin:o,hair:a,accessory:c}=JM[i.style],l=t?0:Math.sin(i.gait),u=Math.abs(l)*.69,d=h=>h+u;e(n,0,d(10.45),0,2.95,4.3,3.4),e(r,-.1,d(7.25),0,2.6,1.7,3.04),e(s,1.1,d(13.35),0,2.14,.69,2.55),e(s,2.68,d(10.4),-.7,.41,.86,1);for(let h of[-1,1]){let f=l*h,g=f*3,x=Math.max(0,f)*1.35;e(r,g*.45,4.5+x*.42+u*.32,h*1.51,1.19,3.2,1.25,-.48*f),e(Vl.shoe,.77+g,1.11+x,h*1.52,2.17,.99,1.34),e(Vl.sole,1.38+g,.49+x,h*1.52,1.64,.43,1.32),e(n,-f*1.07,d(10.16),h*3.15,1.23,2.87,1.15,.38*f),e(o,-f*2.16,d(7.7),h*3.31,.98,1.1,.95)}e(a,-.67,d(17.25),0,4.17,4.32,3.82),e(o,1.05,d(16.63),0,3.76,3.75,3.41),e(a,1.12,d(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,d(16.54),0,.64,.63,.66);for(let h of[-1,1])e(o,.36,d(16.69),h*3.47,1.02,1.07,.64),e(Vl.ink,4.18,d(17.25),h*1.35,.34,.47,.43),e(Vl.blush,3.76,d(16.21),h*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,d(19.68),.72,1.98,1.89,1.89),e(s,-3.51,d(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(n,-.5,d(20.2),0,3.72,1.97,3.45),e(s,2.72,d(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,d(10.2),0,1.48,2.89,2.63),e(n,-4.01,d(10.65),0,.46,1.28,1.77)),c==="curls")for(let h of[-1,1])e(a,-.9,d(18.52),h*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,d(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,d(21.05),2.67,1.51,.92,.65,-.47))}function Dm(i){let t=KM(i),e=new se;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let n=new Be;function s(m,y,S,_){let v=new Jn(y,S,_);return v.name=m,v.frustumCulled=!1,v.instanceMatrix.setUsage(Rn),e.add(v),v}let r=new Map,o=0;for(let m of t.walkers)Xh(m,!0,y=>{o++,r.has(y)||r.set(y,new Xt(y))});let a=s("sidewalk-walkers",new Se(1,9,6),new ke({color:"#fff",roughness:.81}),o),c=0;for(let m of t.walkers)Xh(m,!0,y=>a.setColorAt(c++,r.get(y)));let l=s("sidewalk-contact-shadows",new yn(1,16).rotateX(-Math.PI/2),new Ge({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),u=new Map(Hl.map(m=>{let y=t.cyclists.filter(S=>S.style.id===m.id).length;return[m.id,y?Em(m.id).map(({geometry:S,material:_,role:v})=>({role:v,mesh:s(`sidewalk-bicycle-${m.id}-${v}`,S,_,y)})):[]]})),d,h=0,f,g;function x(m,{reduceMotion:y=!1,night:S=!1,transientTelemetry:_=!1}={}){if(S!==d){for(let L of u.values())for(let{role:B,mesh:F}of L)B==="headlamp"&&(F.material.emissiveIntensity=S?1.05:.16),B==="taillamp"&&(F.material.emissiveIntensity=S?.75:.18);d=S}if(!_){let L=Number.isFinite(f)&&Number.isFinite(m)?oe.clamp(m-f,0,.25):0;y||(h+=L),f=m}let v=_?y?0:m:h;if(g?.time===v&&g?.reduceMotion===y&&g?.transientTelemetry===_)return;g={time:v,reduceMotion:y,transientTelemetry:_};let E=t.sample(v,y),A=0,b=0;function I(L,B,F){n.position.set(L.x,L.y+.065,L.z),n.rotation.set(0,0,0),n.scale.set(B*L.scale,1,F*L.scale),n.updateMatrix(),l.setMatrixAt(b++,n.matrix)}for(let L of E.walkers){let{direction:B,scale:F}=L,H=B>0?0:Math.PI;Xh(L,y,($,z,j,ut,nt,it,at,Ct=0)=>{n.position.set(L.x+z*F*B,L.y+j*F,L.z+ut*F*B),n.rotation.set(0,H,Ct),n.scale.set(nt*F,it*F,at*F),n.updateMatrix(),a.setMatrixAt(A++,n.matrix)}),I(L,5.32,4.1)}let U=new Map;for(let L of E.cyclists){let B=U.get(L.style.id)??0;n.position.set(L.x,L.y,L.z),n.rotation.set(0,L.direction>0?0:Math.PI,0),y||n.rotateX(Math.sin(L.gait)*.028),n.scale.setScalar(L.scale),n.updateMatrix();for(let{mesh:F}of u.get(L.style.id))F.setMatrixAt(B,n.matrix);U.set(L.style.id,B+1),I(L,L.style.length*.52,L.style.width*.58)}for(let L of u.values())for(let{mesh:B}of L)B.instanceMatrix.needsUpdate=!0;a.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0}function p(){for(let m of e.children)m.dispose(),m.geometry.dispose(),m.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:x,dispose:p}}var Yh=Math.PI*2,{clamp:qh,lerp:bs}=oe,QM=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),ra=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],tS=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7},{id:"jet-ski",name:"Lagoon jet ski",length:30,beam:12.2,paint:"#438e90",deck:"#e7b768",center:514,radius:46,offshore:72,drift:6,period:16,start:.47,wake:.96,wakeSeconds:3.7},{id:"cruise-ship",name:"Pearl cruise ship",length:149,beam:41,paint:"#436b84",deck:"#e9c79d",center:76,radius:201,offshore:286,drift:23,period:148,start:1.53,wake:.56,wakeSeconds:8}];function Um(i,t){let e=0,n=i.length-1;for(;n-e>1;){let o=e+n>>1;t<i[o].x?n=o:e=o}let s=i[e],r=i[n];return bs(s.z,r.z,qh((t-s.x)/(r.x-s.x),0,1))}function eS(i){if(!Array.isArray(i?.shoreline)||i.shoreline.length<2||![i.y,i.farZ,i.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:n}=i,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:tS.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=qh(n+o.center,s+c,r-c);function u(d){let h=l+Math.cos(d)*a,f=Math.max(e+65,Um(t,h)-o.offshore-Math.sin(d)*o.drift);return{x:h,z:f}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*Yh/12);if(Um(t,c)-l<o.length/2+8)return!1}return!0})}function Om(i,t,e=.003){let n=i.point(t-e),s=i.point(t+e);return Math.atan2(n.z-s.z,s.x-n.x)}function nS(i,t,{condition:e}={}){let n=Number.isFinite(t)?t:0,s=i.start+n*Yh/i.period,{x:r,z:o}=i.point(s),a=n*1.24+i.start*3,c=i.id==="jet-ski"?1.9:i.id==="cruise-ship"?.55:1,l=(QM.has(e)?1.55:1)*c;return{x:r,z:o,angle:s,yaw:Om(i,s),heave:Math.sin(a)*.55*l,pitch:Math.cos(a*.89)*.017*l,roll:Math.sin(a*.74+.4)*.031*l}}function Bm(i,t){let e=new ce;return e.setAttribute("position",new qt(i.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function km(i){return Bm(i,i.length===3?[0,1,2]:[0,1,2,0,2,3])}function zr(i,t,e,n,s=1){let r=ra.flatMap(([l,u])=>{let d=l*i,h=t*u*s/2;return[[d,n,-h*.58],[d,n,h*.58],[d,e-.9,h],[d,e,h*.88],[d,e,-h*.88],[d,e-.9,-h]]}),o=[],a=6,c=(ra.length-1)*a;for(let l=0;l<c;l+=a)for(let u=0;u<a;u++){let d=(u+1)%a;o.push(l+u,l+u+a,l+d+a,l+u,l+d+a,l+d)}for(let l=1;l<a-1;l++)o.push(0,l,l+1,c,c+l+1,c+l);return Bm(r,o)}function iS(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Xt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new be(c,3)),r}),e=Un(t);for(let n of t)n.dispose();return e}function Le(i,t,e,n,s,r){return new Me(i,t,e).translate(n,s,r)}function We(i,t,e,n,s,r,o=0){return new Se(1,12,7).scale(i/2,t/2,e/2).rotateZ(o).translate(n,s,r)}function en(i,t,e){let n=new G(...i),s=new G(...t).sub(n),r=new on().setFromUnitVectors(new G(0,1,0),s.clone().normalize());return new Ye(e,e,s.length(),6).applyQuaternion(r).translate(...n.addScaledVector(s,.5).toArray())}function Fm(i,t,e,n,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let d=bs(bs(t[0],e[0],l),n[0],u),h=bs(bs(t[1],e[1],l),n[1],u),f=bs(bs(t[2],e[2],l),n[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[d,h,f]};for(let l=0;l<o.length-1;l++){let u=o[l],d=o[l+1];for(let h=0;h<a;h++){let f=h/a,g=(h+1)/a,x=[c(f,u),c(g,u),c(g,d)];d<1&&x.push(c(f,d)),i.push([km(x),r[l]])}}}function sS(i){let t=[3,43,0];i.push([en([3,4,0],t,.9),"#c6a983"],[en([3,11,0],[-25,10,-13],.6),"#c6a983"],[en([28,5,0],t,.33),"#d7c5a8"],[en([-25,5,0],t,.28),"#d7c5a8"],[Le(15,1.9,10,-13,5.4,0),"#a8886e"],[Le(9,1.5,7.5,-13,6.35,0),"#62797b"]),Fm(i,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),Fm(i,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function rS(i){i.push([Le(28,8.5,17,-7,9.1,0),"#f1e5cc"],[Le(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[Le(9,.75,7,-9,15.5,0),"#8aa5a5"],[Le(9,2.2,11,-24,5.9,0),"#bc9472"],[km([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[en([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])i.push([Le(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);i.push([en([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[en([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function oS(i){i.push([Le(15,6.1,13,6,7.9,0),"#e4d7ad"],[Le(17,1.4,14,6,11.65,0),"#71968e"],[Le(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[Le(9,3.4,7,-8,6.8,2.6),"#d7a674"],[Le(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[en([-19,5,-5],[-28,16,-7],.45),"#907459"],[en([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])i.push([Le(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new _n(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function aS(i){i.push([We(15.9,5.4,9,4.7,3.1,0,-.07),"#52a7a6"],[We(11.3,4.9,5.1,4.4,4.6,0,-.33),"#e5ae68"],[We(5.1,2.4,3.15,8.7,6.02,0,-.43),"#f5d591"],[We(3.4,2.5,3.26,3.25,6.15,0,-.3),"#426575"],[We(12.8,3.45,5.9,-4.45,4.76,0,.11),"#40535c"],[Le(5.8,.54,5.4,-11.3,2.88,0),"#7bb3a7"],[en([2.9,5.7,0],[1.9,9.7,0],.52),"#69685d"],[en([2.16,9.57,-3.35],[2.16,9.57,3.35],.4),"#53616a"],[We(5.6,3.4,5.7,-3.8,6.35,0),"#5c738b"],[We(6.06,7.3,5.45,-1.34,10.1,0,-.48),"#db7e59"],[We(4.85,5.4,4.54,.02,11.1,0,-.48),"#efb36c"],[We(4.84,5.2,4.82,1.37,15.38,0,-.15),"#f5dfaf"],[We(2.34,2.04,4.67,2.55,15.37,0,-.12),"#4f637a"],[We(.81,1.36,3.45,3.48,15.63,0,-.14),"#8eafb5"]);for(let t of[-1,1]){let e=t*3.01;i.push([We(13.7,.75,1.52,-4.45,3.18,t*4.19),"#59646b"],[We(6.2,2.32,1.64,-3.75,6.18,e,-.33),"#627a92"],[We(4.25,1.52,1.44,-5.88,4.5,t*3.78,.86),"#51657a"],[We(3.45,1.11,1.48,-5.58,3.43,t*4.05),"#334951"],[en([-.87,11.64,t*2.02],[1.79,9.65,e],.79),"#d68868"],[We(1.51,1.36,1.34,1.92,9.7,t*3.21),"#c98161"])}}function cS(i,{length:t,beam:e}){let n="#f2e9d8",s="#fff3dc",r="#557788",o="#9fbdbe";i.push([Le(109,6.6,29.1,-4,10.27,0),n],[Le(110.2,1.15,31.3,-4,13.75,0),s],[Le(92,5.1,26.2,-3.5,16.7,0),n],[Le(94.7,1.02,28.1,-3.8,19.42,0),s],[Le(66.2,4.5,21.8,2.8,21.9,0),n],[Le(69.7,.91,24.7,2.9,24.44,0),s],[zr(29,24,26.77,20.72,.86).translate(31,0,0),n],[zr(30.3,25,25.6,23.86,.92).translate(31,0,0),r],[zr(28.9,23,27.12,26.39,.9).translate(31,0,0),s],[Le(23.6,.76,15.3,-24.9,25,0),"#d6b18d"],[Le(19.4,.49,11.1,-24.9,25.51,0),"#81b9b5"],[Le(15.1,.16,8.7,-25.8,25.82,0),"#62a9b4"],[Le(12,.14,1.05,-24.6,25.9,2.82),"#a7d6cc"],[We(12,2.13,8.2,15.4,25.76,0),"#dfe6d8"],[en([27,27,0],[26.5,35.4,0],.58),"#e5e4d8"],[en([24.1,33,-3.6],[24.1,33,3.6],.41),"#e5e4d8"],[We(4.21,3.29,3.84,13.4,27.8,0),"#e9e9d9"],[We(3.57,2.86,3.35,9.6,27.12,5.6),"#dedfce"]);for(let a of[-5.9,5.9])i.push([en([1,24.8,a],[-1.47,34,a],2.51),"#dfa179"],[en([-.94,32,a],[-1.62,34.62,a],2.55),"#9d5c54"],[We(4.4,.46,4.62,-1.65,34.66,a),"#514e59"]);for(let a of[-1,1]){for(let[c,l,u,d]of[[101,10.86,14.67,6.4],[89,17.18,13.17,6.2],[61,22.1,10.97,5.9]])for(let h=-c/2;h<=c/2;h+=d)i.push([Le(3.61,2.05,.26,h,l,a*u),r],[Le(3.6,.33,.3,h,l+.61,a*u),o]);for(let c of[-42,-29,-16,-3,10,23])i.push([Le(9.3,.88,2.81,c,13.1,a*14.61),"#b5af9e"],[We(10.53,2.75,3.83,c,13.37,a*15.49),"#dc9164"],[We(9.12,1.04,3,c,14.33,a*15.49),"#f0c285"]);for(let c of[-56,-43,-30,-17,-4,9,22,35,48,57]){let l=c/t,u=ra.findIndex(([p])=>p>=l),[d,h]=ra[u-1],[f,g]=ra[u],x=bs(h,g,(l-d)/(f-d))*e/2;i.push([We(2.1,1.74,.62,c,5,a*(x-.08)),"#78969e"])}i.push([en([-46,19.95,a*13.74],[42,19.95,a*13.74],.4),o],[en([-27,24.95,a*11.67],[26,24.95,a*11.67],.34),o],[en([49,8.13,a*15.2],[67,8.13,a*5.1],.43),s])}}function lS(i,t){let{id:e,length:n,beam:s,paint:r,deck:o}=i,a=new se;a.name=i.name;let c=e==="jet-ski"?1.76:e==="cruise-ship"?6.1:3.7,u=[[zr(n,s,c,e==="jet-ski"?-1.32:e==="cruise-ship"?-4.92:-2.5),r],[zr(n,s,c+.82,c-.15,1.018),"#f4e4c9"],[zr(n*.92,s,c+1.05,c+.74,.83),o]];return e==="sailboat"?sS(u):e==="cabin"?rS(u):e==="jet-ski"?aS(u):e==="cruise-ship"?cS(u,i):oS(u),a.add(new he(iS(u),t)),a}var vs=12,uS=new Xt("#def5e9");function hS(i,t){let n=vs*3*2,s=new ce,r=new be(new Float32Array(n*3),3).setUsage(Rn),o=new Float32Array(n*4),a=[];for(let d=0;d<3;d++)for(let h=0;h<vs;h++){let f=(d*vs+h)*2,g=h/(vs-1),x=Math.pow(Math.sin((.1+.9*g)*Math.PI),1.15)*(1-.4*g);for(let p=0;p<2;p++)uS.toArray(o,(f+p)*4),o[(f+p)*4+3]=i.wake*x*(d===1?.22:.76);h<vs-1&&a.push(f,f+2,f+1,f+1,f+2,f+3)}s.setAttribute("position",r),s.setAttribute("color",new be(o,4)),s.setIndex(a);let c=new Ge({vertexColors:!0,side:ln,transparent:!0,depthWrite:!1,opacity:.82}),l=new he(s,c);l.name=i.name+" wake",l.frustumCulled=!1;function u({angle:d},h){let g=(i.wakeSeconds??(i.id==="cabin"?4.1:6))*Yh/i.period;for(let x=0;x<vs;x++){let p=x/(vs-1),m=d-g*p,y=Om(i,m),{x:S,z:_}=i.point(m),v=Math.cos(y),E=Math.sin(y),A=i.length*.48,b=S-v*A,I=_+E*A;for(let U=0;U<3;U++){let L=(U-1)*i.beam*(.19+p*.62),B=(U===1?1.85:.62)*(1+p*.55);for(let F=0;F<2;F++){let H=L+(F?B:-B);r.setXYZ((U*vs+x)*2+F,b+E*H,t+.14,I+v*H)}}}r.needsUpdate=!0,c.opacity=h?.44:.82}return{mesh:l,update:u}}function zm(i){let t=new se;t.name="Coastal boats";let e=new ke({vertexColors:!0,side:ln,roughness:.73}),n=eS(i).map(l=>{let u=lS(l,e),d=hS(l,i.y);return t.add(d.mesh,u),{route:l,hull:u,wake:d}}),s=0,r,o=!1;function a(l,{reduceMotion:u=!1,night:d=!1,condition:h,transientTelemetry:f=!1,activity:g}={}){if(o)return;let x=Number.isFinite(l)?l:void 0;!f&&!u&&x!==void 0&&r!==void 0&&(s+=qh(x-r,0,.25)),r=f?void 0:x;let p=f?u?0:x??0:s;for(let{route:m,hull:y,wake:S}of n){let _=m.id!=="jet-ski"||g!=="overnight";if(y.visible=_,S.mesh.visible=_,!_)continue;let v=nS(m,p,{condition:h});y.position.set(v.x,i.y+v.heave,v.z),y.rotation.set(v.roll,v.yaw,v.pitch,"YXZ"),S.update(v,d)}}function c(){if(!o){o=!0;for(let{hull:l,wake:u}of n)l.children[0].geometry.dispose(),u.mesh.geometry.dispose(),u.mesh.material.dispose();e.dispose(),t.clear()}}return a(0),{root:t,update:a,dispose:c}}var fS=26,dS=39,pS=2.25,Wl=2*Math.PI,mS=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function Hr(i,t){let e=i.findIndex(r=>r.x>=t);if(e<1)return i[e===0?0:i.length-1].z;let n=i[e-1],s=i[e];return oe.lerp(n.z,s.z,(t-n.x)/(s.x-n.x))}function gS(i,t){let{shoreline:e,focusX:n,y:s}=i??{},r=t?.farZ;if(![n,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,d){let h=l-u,f=l+u,g=e.filter(E=>E.x>h&&E.x<f).map(E=>E.z),x=Math.max(Hr(e,h),Hr(e,f),...g)+fS,p=r-dS;if(p-x<19)return null;let m=Math.min(d,(p-x)/2),y=(p+x)/2,S=Hr(e,l)+22,_=oe.clamp((r+.4-y)/(r+.4-S),0,1),v=s-.77+_*.43;return{x:l,y:v,z:y,halfWidth:u,halfDepth:m}}let a=o(n-72,46,18),c=o(n+68,27,15);return a||c?{court:a,castle:c}:null}function Hm(i,t=0,e=!1){let n=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(i.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=i.court,d=n/pS,h=d%1,f=Math.floor(d)%2?1:-1,g=Math.sin(Math.PI*h),x=u-16,p=Math.min(3.3,l*.22);r={x:o+f*x*(1-2*h),y:a+20.9+g*15.7,z:c+Math.sin(Wl*h)*p,rotation:n*2.6,ground:a};for(let m of[-1,1]){let S=1-Math.min(1,(m!==f?1-h:h)/.24),_=e?.32:S*S;s.push({kind:"player",style:m<0?0:1,scale:1,yaw:-m*Math.PI/2,x:o+m*(x+6-_*2),y:a+_*1.65,ground:a,z:c+m*p*(.65+g*.35),reach:_,swing:Math.sin(n*3.15+m*.9)*.42})}}if(i.castle){let{x:o,y:a,z:c}=i.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(n*4.8),swing:e?0:Math.cos(n*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(n*2.5+.9),swing:e?0:Math.cos(n*2.5+.9)*.35})}return{actors:s,ball:r}}function xS(i,t,e,n,s){let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Xt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new be(a,3)),r.translate(e,n,s)}function Xl(i,t){let e=[],n=(c,l,u,d,h)=>e.push(xS(c,l,u,d,h));t({add:n,box:(c,l,u,d,h,f,g)=>n(new Me(c,l,u),d,h,f,g),cylinder:(c,l,u,d,h,f,g)=>n(new Ye(c,l,u,12),d,h,f,g)});let o=Un(e);for(let c of e)c.dispose();let a=new ke({vertexColors:!0,roughness:.86});i.add(new he(o,a))}function yS({x:i,y:t,z:e,halfWidth:n,halfDepth:s}){let r=new se;r.name="beach-volleyball-court",r.position.set(i,t,e);let o=s-1;return Xl(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",d="#f4e4bb";for(let h of[-1,1])a(n*2,.1,.56,l,0,.14,h*s),a(.56,.1,s*2,l,h*n,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,h*o),c(.93,.93,1.1,l,0,18.9,h*o),c(.85,.85,.76,d,0,20.48,h*o),a(.76,.54,o*2,d,0,h<0?10.1:19.5,0);for(let h=1;h<5;h++)a(.23,.23,o*2,u,0,10.2+h*1.83,0);for(let h=1;h<12;h++)a(.22,9.25,.24,u,0,14.8,o*(h/6-1))}),r}function _S({x:i,y:t,z:e}){let n=new se;return n.name="beach-sandcastle",n.position.set(i,t,e),Xl(n,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Se(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Se(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let d of[-1,1]){let h=d*6.15;o(2.44,3.35,7.9,a,h,4.05,-.8),o(2.66,2.52,1.03,c,h,8.03,-.8);for(let[f,g]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,h+f,8.99,-.8+g);r(1.07,.94,.3,l,h,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new ce;u.setAttribute("position",new qt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new _n(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new Me(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Se(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),n}function vS(){let i=new Se(3.25,24,12),t=i.toNonIndexed();i.dispose();let e=t.attributes.position,n=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new Xt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=d=>(e[d](o)+e[d](o+1)+e[d](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/Wl*n.length)%n.length,u=Math.abs(a("getY"))>2.85?n[1]:n[l];for(let d=0;d<3;d++)u.toArray(s,(o+d)*3)}t.setAttribute("color",new be(s,3));let r=new he(t,new ke({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function Zh(i,t){let{skin:e,hair:n,shirt:s,shorts:r,trim:o,style:a}=mS[i.style],c=i.kind==="beachgoer",l=i.kind==="surfer",u=i.kind==="builder"||c,d=c?9.25:u?7.8:l?10.7:12.2,h=d+(c?5.9:u?5.8:6.1),f=l?i.swing*.95:u?i.reach*1.15+.65:0,g=l?i.swing*.22:c?.11:u?.24:0;t(s,0,d,f*.43,3.72,4.1,2.85,g),t(r,0,d-3.4,0,3.34,1.65,2.8),t(o,0,d-1.95,2.45,3.03,.48,.59);for(let x of[-1,1]){if(l){t(r,x*2.45,5.35,1.26,1.58,2.66,1.49,.67,x*.4),t(e,x*3.76,2.93,.86,1.25,2.45,1.16,-.31,x*.17),t(e,x*4.13,1.01,.5,1.64,.73,1.27,0,x*.07);let p=d+1.2+x*i.swing*1.65;t(e,x*5.26,p,-.1,1.05,3.35,1.06,.22,-x*(1.08+x*i.swing*.28)),t(e,x*8.07,p+.43,.29,1.36,.96,1.02)}else if(c){let p=x<0?i.reach:.23;t(r,x*1.72,5,2.2,1.55,2.7,1.48,1.27),t(e,x*1.82,2.75,4.13,1.17,2.57,1.14,-.16),t(o,x*1.93,.92,5.06,1.25,.72,1.74),t(e,x*3.98,d-.3+p,1.15,1.02,2.45,1.05,-.62-p*.37),t(e,x*3.5,d-1.2+p*1.8,3.17,1.11,1.14,1.13),x<0&&t("#e7c8a1",-3.5,d-.18+p*1.8,3.82,.86,1.19,.86)}else{let p=u?.8:x*i.swing;t(r,x*1.65,u?3.5:6.4,p,1.55,2.3,1.49,u?.8:0),t(e,x*1.68,u?1.72:3.1,u?2.08:p,1.16,2.13,1.16),t(e,x*1.75,1.02,.88+p,1.28,.76,2.08);let m=u?d+.45:d+1.5+i.reach*2.1,y=u?2.4+i.reach*1.72:i.reach*.8,S=u?-.78-i.reach*.27:.12+i.reach*.62;t(e,x*(4.13-i.reach*.46),m,y,1.04,3.7,1.05,S,x*(u?.1:.24+i.reach*.55)),t(e,x*(4.1-i.reach*.53),m+(u?-1.65:i.reach*5.55-2.92),y+(u?2.7:i.reach*1.9),1.14,1.15,1.13)}t(e,x*3.48,h,f+.4,.84,.99,.78),t("#493a41",x*1.46,h+.38,f+3.41,.43,.47,.34),t("#c98878",x*2.22,h-.45,f+3.05,.54,.27,.26)}t(n,0,h+.64,f-.53,3.81,4.12,3.64),t(e,0,h,f+.72,3.25,3.29,2.89),t(e,0,h-.22,f+3.59,.53,.54,.59),t("#9b6b66",0,h-1.19,f+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,h+3.48,f+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,h+2.78,f+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(n,-.99,h+2.39,f+1.53,2.47,1.23,2.37),t(a==="bun"?n:o,2,h+3.23,f-1.66,1.41,1.43,1.39))}function $h(i,t,e,n,s=!1){let r=0;for(let d of t)Zh(d,()=>r++);let o=new Jn(new Se(1,10,7),new ke({color:"#fff",roughness:.76}),r);o.name=e,o.frustumCulled=!1,o.instanceMatrix.setUsage(Rn),i.add(o);let a=n?new Jn(new yn(1,20).rotateX(-Math.PI/2),new Ge({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),t.length+Number(s)):null;a&&(a.name=n,a.frustumCulled=!1,a.instanceMatrix.setUsage(Rn),i.add(a));let c=0,l=new Map;for(let d of t)Zh(d,h=>{l.has(h)||l.set(h,new Xt(h)),o.setColorAt(c++,l.get(h))});let u=new Be;return function(h,f){let g=0,x=0,p=(m,y,S,_,v)=>{a&&(u.position.set(m,y+.16,S),u.rotation.set(0,0,0),u.scale.set(_,1,v),u.updateMatrix(),a.setMatrixAt(x++,u.matrix))};for(let m of h){let{scale:y,yaw:S}=m,_=Math.cos(S),v=Math.sin(S);Zh(m,(E,A,b,I,U,L,B,F=0,H=0)=>{u.position.set(m.x+y*(A*_+I*v),m.y+b*y,m.z+y*(-A*v+I*_)),u.rotation.set(0,S,0),u.rotateX(F),u.rotateZ(H),u.scale.set(y*U,y*L,y*B),u.updateMatrix(),o.setMatrixAt(g++,u.matrix)}),p(m.x,m.ground,m.z,5.25*y,4.47*y)}f&&p(f.x,f.ground,f.z,2.82,2.52),o.instanceMatrix.needsUpdate=!0,a&&(a.instanceMatrix.needsUpdate=!0)}}function bS(i){let t=new se;t.name="beach-day-activities";let e=i.court?yS(i.court):null,n=i.castle?_S(i.castle):null,s=e?vS():null;e&&t.add(e,s),n&&t.add(n);let r=$h(t,Hm(i).actors,"beach-recreation-figures","beach-play-contact-shadows",!!s);return{group:t,render(o,a){let c=Hm(i,o,a);if(r(c.actors,c.ball),!s)return;let{x:l,y:u,z:d,rotation:h}=c.ball;s.position.set(l,u,d),s.rotation.set(.25,h*.59,h)}}}function MS(i){let t=new se;t.name=`beach-surfboard-${i+1}`;let e=i?"#e5ac55":"#d57565",n=i?"#4d8f92":"#f3e5be";return Xl(t,({add:s})=>{let r=(o,a,c,l,u,d,h)=>s(new Se(1,16,8).scale(l,u,d),h,o,a,c);r(0,.22,0,12.9,.78,3.61,"#e9dfc8"),r(.26,.63,0,12.68,.69,3.38,e),r(.45,1.23,0,10.08,.125,.91,n),r(-4.51,1.17,0,2.67,.14,2.47,i?"#e8dfbe":"#759f9d");for(let o=0;o<5;o++){let a=o/4;r(-9.8-a*15.1,-.39,(o%2?-1:1)*(2.6-a*1.58),2.86-a*1.1,.095,.92-a*.5,o%2?"#a4d7cc":"#e5f3de")}r(-17.4,-.44,.24,6.5,.082,.38,"#c4e5d8")}),t}function SS(i){let t=new se;t.name="beach-morning-surfers";let{shoreline:e,focusX:n,y:s,farZ:r}=i,o=[{offset:-82,radius:37,depth:49,drift:13,period:20,phase:.55,style:0,scale:.9},{offset:75,radius:34,depth:58,drift:14,period:22,phase:2.17,style:1,scale:.91}].filter(({offset:u,radius:d,depth:h,drift:f})=>{let g=n+u,x=g-d-26,p=g+d+26;return x>=e[0].x&&p<=e.at(-1).x&&Math.min(Hr(e,x),Hr(e,p),...e.filter(m=>m.x>x&&m.x<p).map(m=>m.z))-h-f-26>r});if(!o.length)return{group:t,render(){}};let a=o.map((u,d)=>MS(d));t.add(...a);function c(u){return o.map(({offset:d,radius:h,depth:f,drift:g,period:x,phase:p,style:m,scale:y})=>{let S=u%x/x*Wl+p,_=n+d+h*Math.sin(S),v=Hr(e,_)-f+g*Math.cos(S),E=Math.atan2(g*Math.sin(S),h*Math.cos(S)),A=Math.sin(S*2+p);return{kind:"surfer",style:m,scale:y,yaw:E,x:_,z:v,y:s+1.7+A*.3,swing:Math.cos(S*2+p)*.5,swell:A}})}let l=$h(t,c(0),"beach-surfers");return{group:t,render(u){let d=c(u);for(let[h,{x:f,y:g,z:x,yaw:p,swell:m}]of d.entries())a[h].position.set(f,g-1.24,x),a[h].rotation.set(0,p,0),a[h].rotateX(m*.075),a[h].rotateZ(-m*.027);l(d)}}}var oa=["#e7713c","#ef9251","#e97e44","#f2a954","#f7b35d","#ffcf79","#ffde91","#ffb34e","#fbc86e","#ffd281","#ffbd72"];function wS(i,t){let e=new se;return e.name=`beach-firepit-${t+1}`,e.position.set(i.x,i.y,i.z),Xl(e,({add:n,box:s})=>{n(new Se(1,14,6).scale(7.15,.51,6.72),"#80605a",0,.14,0);for(let r=0;r<11;r++){let o=r*Wl/11,a=["#ab8b78","#a39288","#bb9c84"][r%3];n(new xo(1).scale(1.91,1.25,1.57).rotateY(o),a,Math.cos(o)*6.82,1.05,Math.sin(o)*6.19)}for(let[r,o,a]of[[.43,1.33,"#9b6147"],[1.42,2.1,"#79473c"],[-.89,2.58,"#a36a4a"]])n(new Ye(1.15,1.38,9.1,7).rotateZ(Math.PI/2).rotateY(r),a,0,o,0);for(let[r,o]of[[-1,1.25],[1,-1.25]])n(new Ye(2.2,2.61,13.9,8).rotateX(Math.PI/2),"#a67e60",r*16.5,2.48,o),n(new Ye(1.61,1.77,.15,8).rotateX(Math.PI/2),"#dab18b",r*16.5,2.48,o+7.01),s(4.84,.83,5.8,t?"#c98673":"#7ea8a1",r*16.23,4.68,o)}),e}function ES(i){let t=new se;t.name="beach-evening-bonfires";let e=[i.court,i.castle].filter(Boolean);t.add(...e.map(wS));function n(l){return e.flatMap(({x:u,y:d,z:h},f)=>[-1,1].map(g=>({kind:"beachgoer",style:f*2+ +(g>0),scale:g>0&&f===1?.82:.95,yaw:-g*Math.PI/2,x:u+g*16.23,y:d,ground:d,z:h-g*1.25,reach:.36+Math.sin(l*1.42+f*1.78+g*1.35)*.27})))}let s=$h(t,n(0),"beach-bonfire-figures","beach-bonfire-contact-shadows"),r=new Jn(new Se(1,9,7),new Ge({toneMapped:!1}),e.length*oa.length);r.name="beach-bonfire-flames",r.frustumCulled=!1,r.instanceMatrix.setUsage(Rn);for(let l=0;l<r.count;l++)r.setColorAt(l,new Xt(oa[l%oa.length]));let o=new Ze({uniforms:{warmth:{value:.86},tint:{value:new Xt("#ffad5f")}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1}),a=new Jn(new yn(1,28).rotateX(-Math.PI/2),o,e.length);a.name="beach-bonfire-sand-glow",a.frustumCulled=!1;let c=new Be;for(let[l,{x:u,y:d,z:h,halfDepth:f}]of e.entries())c.position.set(u,d+.19,h),c.scale.set(23,1,Math.min(19,f+1)),c.updateMatrix(),a.setMatrixAt(l,c.matrix);return a.instanceMatrix.needsUpdate=!0,t.add(a,r),{group:t,render(l){s(n(l));for(let[u,{x:d,y:h,z:f}]of e.entries()){let g=u*1.71;for(let x=0;x<oa.length;x++){let p=l*4.5+x*2.39+g,m=Math.sin(p)*.5+.5,y=x*2.39+g;if(x<7){let S=x<5?2.05:.78,_=x<5?3.18+m*1.58:2.78+m*1.09;c.position.set(d+Math.cos(y)*S,h+_+1.05,f+Math.sin(y)*S),c.rotation.set(Math.sin(y)*.2,y,Math.cos(y)*.24),c.scale.set(1.21+m*.54,_,1.18+m*.46)}else{let S=(l*(.32+x*.019)+x*.234+g)%1,_=.79*(1-S)+.13;c.position.set(d+Math.cos(y+S)*(2.45+S*6.2),h+8.8+S*15,f+Math.sin(y+S)*(1.74+S*4.4)),c.rotation.set(0,0,.2),c.scale.set(_,_*1.33,_)}c.updateMatrix(),r.setMatrixAt(u*oa.length+x,c.matrix)}}r.instanceMatrix.needsUpdate=!0,o.uniforms.warmth.value=.83+Math.sin(l*5.25)*.11}}}function Gm(i,t){let e=new se;e.name="beach-play";let n=gS(i,t);if(!n)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s={morning:SS(i),day:bS(n),evening:ES(n)};e.add(...Object.values(s).map(({group:h})=>h));let r,o=0,a,c,l;function u(h,{reduceMotion:f=!1,transientTelemetry:g=!1,activity:x="day"}={}){let p=Object.hasOwn(s,x)||x==="overnight"?x:"day";if(!g){let y=Number.isFinite(r)&&Number.isFinite(h)?oe.clamp(h-r,0,.25):0;f||(o+=y),r=h}let m=f?.96:g?Number.isFinite(h)?Math.max(0,h):0:o;if(!(m===a&&f===c&&p===l)){if(a=m,c=f,p!==l){for(let[y,{group:S}]of Object.entries(s))S.visible=p===y;l=p}s[p]?.render(m,f)}}u(0);function d(){e.traverse(h=>{h.isMesh&&(h.isInstancedMesh&&h.dispose(),h.geometry.dispose(),h.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:u,dispose:d}}var TS=new G(0,-1,0),AS=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],Jh=.01;function Vm(i){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(i)}function Xm(i){return!i.isMesh||!i.geometry?!1:(Array.isArray(i.material)?i.material:[i.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function RS(i){i.updateWorldMatrix(!0,!0);let t=[];i.traverseVisible(a=>{if(!Xm(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let n=new He;for(let a of t)a.min.y<=e+Jh&&n.union(a);let s=n.getCenter(new G),r=n.getSize(new G),o=e-i.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-i.position.x,centerZ:s.z-i.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function CS(i,t){let{type:e}=i;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"||e==="diningTable"?[44.65,46.45]:e.includes("dining-set")||e.includes("dining-table-")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function IS(i,t){let[e,n]=CS(i.item,t);if(![e,n,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new He().setFromObject(s);return r.isEmpty()?null:{placement:i,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:n*s.scale.y}}function Wm(i,t){let e=t?.[i.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:i}function Ym(i,t){return i.intersectObject(t,!0).find(e=>Xm(e.object))}function qm(i,{low:t,high:e}){return i?.face?.normal.y>=.92&&i.point.y>=t&&i.point.y<=e}function PS(i,t,e,n,s,r){let o=t.x+e.centerX-n.x,a=t.z+e.centerZ-n.z,{bounds:c,probe:l,rootY:u}=i;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let d=-1/0;for(let[h,f]of AS){r.set(o+h*e.radiusX,c.max.y+1,a+f*e.radiusZ),s.set(r,TS);let g=Ym(s,l);if(!qm(g,i))return null;d=Math.max(d,g.point.y)}return u+d}function Zm(i,t){let e=[],n=[];for(let c of i){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=Vm(c.item);if(u==="surface"){let d=IS(c,l);d&&e.push(d)}else if(u==="tabletop"){let d=RS(l.root);d&&n.push({placement:c,foot:d})}}let s=new ds,r=new G;function o(c){let l=new Map;for(let{placement:u,foot:d}of n){let h=Wm(u,c),f=null,g=u.baseY,x=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let m=Wm(p.placement,c),y=PS(p,h,d,m,s,r);if(y===null||y<=u.baseY||y<g-Jh)continue;let S=p.placement.item.id,_=Math.hypot(h.x-m.x,h.z-m.z);Math.abs(y-g)<Jh&&(_>x||_===x&&S>f)||(f=S,g=y,x=_)}l.set(u.item.id,{y:g-d.bottom,supportId:f})}return l}function a(c,l){if(Vm({type:c})!=="tabletop")return null;let u=new ds(void 0,void 0,l.near,l.far),d=new G,h;for(let f of e){let{x:g,z:x}=f.placement;d.copy(l.ray.origin).sub(r.set(g,f.rootY,x)),u.set(d,l.ray.direction);let p=Ym(u,f.probe);p&&(!h||p.distance<h.hit.distance||p.distance===h.hit.distance&&f.placement.item.id<h.surface.placement.item.id)&&(h={hit:p,surface:f,x:g,z:x})}return!h||!qm(h.hit,h.surface)?null:{x:h.x+h.hit.point.x,y:h.z+h.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:Yl,sin:Vs,cos:ql}=Math,Ni=Yl*2,LS=new G(0,1,0),Gs=["#86684f","#9a7c5b","#735844"],jh=["#92745a","#ac8f69","#785c49"],Kh=["#537759","#6b8a55","#849a58","#a0ab63"],Qh=["#3e6251","#4d7056","#61815d","#789365"],tf=["#4a6653","#567552","#6b8659","#819863"],NS=["#517553","#64845a","#799660","#98a869"],DS=["#617d69","#72917a","#8ea17e","#a7b08a"],US=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],$m=240,FS=new Set(["windy","windy-variant"]),aa=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function Jm(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function In(i,t,e){return[ql(i)*t,e,Vs(i)*t]}function dn(i,[t,e,n]){return[i[0]+t,i[1]+e,i[2]+n]}function OS(i,t,e,n,s){let r=(c,l)=>i.add(c,l,t,e,n);function o(c,l,u,d,h,f=7){let g=new G(...l),x=new G(...u),p=x.clone().sub(g),m=new on().setFromUnitVectors(LS,p.clone().normalize()),y=new Ye(h,d,p.length(),f),S=g.lerp(x,.5);r(y.applyQuaternion(m).translate(S.x,S.y,S.z),c)}function a(c,l,u,d=.13,h=6){let f=new Se(1,9,h),g=f.getAttribute("position"),x=s()*Ni;for(let p=0;p<g.count;p++){let m=g.getX(p),y=g.getY(p),S=g.getZ(p),_=1+d*(Vs(m*5.8+y*3.2+S*2.1+x)*.7+ql(S*7.8-y*2.2+x)*.3);g.setXYZ(p,m*_*u[0],y*_*u[1],S*_*u[2])}f.computeVertexNormals(),r(f.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function ef(i,t,e,n,s,r,o){let a=[ql(e),Vs(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=i.positions.length/3;for(let[d,[h,f]]of l.entries()){let g=s*f,x=t[0]+h*n*a[0],p=t[1]+Vs(h*Yl)*r-o*h*h,m=t[2]+h*n*a[1];for(let S of[-1,0,1])i.positions.push(x+S*g*c[0],p+(S===0?g*.29:0),m+S*g*c[1]),i.uvs.push((S+1)*.5,h);if(d===0)continue;let y=u+(d-1)*3;for(let S of[0,1]){let _=y+S;i.indices.push(_,_+1,_+3,_+1,_+4,_+3)}}}function BS(i,t,e){let n=new ce;n.setAttribute("position",new qt(e.positions,3)),n.setAttribute("uv",new qt(e.uvs,2)),n.setIndex(e.indices),n.computeVertexNormals(),i(n,t)}function kS(i,t,e,n){let{draw:s,branch:r,crown:o,random:a}=i,c=t*(n?.063:.125),l=x=>In(e,c*x*x,t*x*(n?.85:.86)),u=x=>t*(n?.029:.024)*(1-.53*x),d=n?5:6;for(let x=0;x<d;x++){let p=x/d,m=(x+1)/d;r(jh[0],l(p),l(m),u(p),u(m),9)}for(let x=1;x<=13;x++){let p=x*.067;r(jh[x%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let h=l(1);o(Kh[0],h,[t*.045,t*.036,t*.048],.08,5);for(let x=0;x<4;x++)o(jh[2],dn(h,In(e+x*Ni/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let f=Kh.map(()=>({positions:[],uvs:[],indices:[]})),g=n?9:10;for(let x=0;x<g;x++){let p=e+x*Ni/g+(a()-.5)*.18,m=x%3===0,y=t*((m?.35:.29)+(a()-.5)*.07),S=t*(m?.026:.077),_=t*(m?.072:.025);if(ef(f[(x+1)%4],h,p,y,t*.012,S,_),n){let v=dn(h,In(p,y*.43,S*.7));for(let E=-3;E<=3;E++)ef(f[(x+E+4)%4],v,p+E*.19,y*(.58-Math.abs(E)*.055),t*(.016-Math.abs(E)*.0018),S*.32,_*.84)}else for(let v=0;v<7;v++){let E=.19+v*.104,A=dn(h,In(p,y*E,Vs(E*Yl)*S-_*E*E));for(let b of[-1,1])ef(f[(x+v+(b>0?1:0))%4],A,p+b*(.83-E*.37),t*(.095-E*.048),t*(.0095-E*.003),t*.014,t*.025)}}for(let[x,p]of f.entries())BS(s,Kh[x],p)}function nf(i,t,e,n,s=.84){let{branch:r}=i,o=a=>In(e,t*n*(a*a+.16*Vs(Yl*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(Gs[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*Ni/4;r(Gs[2],In(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(Gs[1],In(c,t*.039,t*.025),dn(o(.36),In(c,t*.031,0)),t*.004,t*.002,4)}return o}function zS(i,t,e){let{crown:n,random:s}=i,r=nf(i,t,e,.018,.94);n(Qh[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let d=0;d<u;d++){let h=e+d*Ni/u+o*2.5,f=dn(r(o),In(h,t*a,t*((s()-.5)*.035)));n(Qh[(d+u)%4],f,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}n(Qh[2],dn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function HS(i,t,e){let{branch:n,crown:s,random:r}=i,o=nf(i,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let d=e+u*Ni/l+a*7+(r()-.5)*.22,h=o(a),f=dn(h,In(d,t*c,t*(.02+r()*.028)));n(Gs[1],h,f,t*.017,t*.0037,6);let g=dn(f,[0,t*.029,0]);s(tf[u%3],g,[t*c*.46,t*.054,t*c*.45],.21,5),s(tf[(u+2)%4],dn(g,In(d-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(tf[3],dn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function GS(i,t,e,n){let{branch:s,crown:r,random:o}=i,a=n==="olive",c=n==="jacaranda",l=a?DS:c?US:NS,u=nf(i,t,e,a?.1:.034,a?.78:.84),d=a?5:6;for(let f=0;f<d;f++){let g=e+f*Ni/d+(o()-.5)*.33,x=u(.46+o()*.12),p=t*(.16+o()*.07),m=dn(x,In(g,t*.12,p*.58)),y=dn(x,In(g+.16,t*(.19+o()*.052),p));s(Gs[1],x,m,t*.026,t*.016,7),s(Gs[0],m,y,t*.0165,t*.0045,6);let S=t*(.092+o()*.03);r(l[f%2],dn(y,[0,t*.024,0]),[S,t*(a?.064:.104),S*.87],.21,5);for(let _ of[-1,1]){let v=dn(y,In(g+_*1.18,t*.055,t*.05));s(Gs[0],m,v,t*.012,t*.003,5);let E=t*(.063+o()*.027);r(l[c?2+(f+(_>0?1:0))%3:1+f%3],dn(v,[0,t*.022,0]),[E,E*(a?.63:.88),E*.91],.21,5)}}let h=dn(u(1),[0,t*.023,0]);r(l[2],h,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),dn(h,In(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function jm(i,t,e){let n=Math.imul(Math.round(i*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:n}function Km(i,t){return Number.isFinite(t)?oe.clamp(t,32,200):aa[i].height}function VS(i,{kind:t,x:e,z:n,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn(aa,t)||![e,n,s].every(Number.isFinite))return!1;let a=Km(t,r),c=Jm(jm(e,n,o)),l=c()*Ni,u=OS(i,e,s,n,c);return t==="fan-palm"||t==="date-palm"?kS(u,a,l,t==="fan-palm"):t==="cypress"?zS(u,a,l):t==="shore-pine"?HS(u,a,l):GS(u,a,l,t),!0}function WS(i=0,t={}){let{windSpeed:e,windBearing:n,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?oe.clamp(e,0,22):FS.has(r)?6:0,a=Number.isFinite(n)?(n%360+360)%360:270,c=oe.degToRad(a),l=Number.isFinite(i)?Math.max(0,i)%$m:0;return{x:-Vs(c),z:ql(c),phase:Ni*l/$m,strength:s?0:o*.0048}}var XS=`
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
`;function Qm(i){let t=new Set,e={roomcraftTreeDirection:{value:new Lt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function n(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${XS}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:d}=o;if(!Object.hasOwn(aa,a))return!1;let h=Km(a,c),f=Jm(jm(l,u,d))()*Ni;return VS({add(g,x,...p){let m=g.getAttribute("position"),y=new Float32Array(m.count*3);for(let S=0;S<m.count;S++)y[S*3]=m.getY(S)/h,y[S*3+1]=h,y[S*3+2]=f;g.setAttribute("roomcraftTreeWind",new be(y,3)),n(i.material(x)),i.add(g,x,...p)}},o)}function r(o,a){let c=WS(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var Gr=Math.PI/180,af=14,ug=56,YS=21,Vn=-111,pi=-108,hg=14,qS=28,ca=28,tg={minX:0,maxX:1536,minZ:0,maxZ:1024},sf={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},rf={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},ZS=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),$S=new Set(["snowy","snowy-rainy"]),eg={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function jl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Jl(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function fg(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function dg(i,t,e,n){let s=i.some(o=>Jl(o,e-t.dz*23,n+t.dx*23));return i.some(o=>Jl(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function JS(i,t,e){if(!Object.hasOwn(eg,e.type))return null;let n=fg(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):dg(i,s,r,o),l=(af/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(eg[e.type],ug-8)}}function ng(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function ig(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function jS(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function sg(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function Zl(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function pg(i){return Object.hasOwn(rf,i.finish)?rf[i.finish]:rf.graphite}function mg(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function rg(i,t,e){let[n,s]=mg(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=oe.clamp(s/i.item.h+.5,0,1);return pi-pi*r}function $l(i,t,e){return Jl(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?oe.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=af/2})}function KS(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(d=>$l(d,n,s)),o=t.some(d=>ta(d)&&$l(d,n,s)&&$l(d,i.x1,i.y1)&&$l(d,i.x2,i.y2)),a=r?0:Vn,c=a;if(!o)for(let d of e){let h=rg(d,i.x1,i.y1),f=rg(d,i.x2,i.y2);if(h!==null&&f!==null){a=h,c=f;break}}let[,l,u]=pg(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/qS)))}}function cf(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(v=>v?.points?.length>=3&&v.points.every(E=>Number.isFinite(E?.x)&&Number.isFinite(E?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(v=>!ta(v)):e,s=i.walls.map(ng).filter(Boolean),r=s.filter(v=>v.kind!=="fence"),o=i.items.filter(v=>typeof v?.id=="string"&&typeof v.type=="string"&&[v.x,v.y,v.w,v.h].every(Number.isFinite)&&v.w>0&&v.h>0),a=sg(),c=sg(),l=(v,E)=>Zl(a,v,E);for(let v of e)for(let E of v.points)l(E.x,E.y);for(let v of s)l(v.x1,v.y1),l(v.x2,v.y2);for(let v of n)for(let E of v.points)Zl(c,E.x,E.y);for(let v of r)Zl(c,v.x1,v.y1),Zl(c,v.x2,v.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:tg},d=new Map(r.map(v=>[v.id,v])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(v=>d.has(v))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,d.get("w1").y1+57],[d.get("w2").x1,d.get("w1").y1+57],[d.get("w3").x1,d.get("w3").y1],[d.get("w3").x2,d.get("w3").y2],[u.minX-10,d.get("w4").y2]].map(([v,E])=>({x:v,y:E})),southDeck:[[u.minX-10,d.get("w6").y1],[d.get("w7").x1,d.get("w7").y1],[d.get("w7").x2,d.get("w7").y2],[d.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([v,E])=>({x:v,y:E})),recess:{x1:d.get("w12").x2,x2:d.get("w18").x1,z1:Math.min(d.get("w11").y2,d.get("w12").y2),z2:d.get("w13").y2}}:null,f=r.filter(v=>h?!(v.id==="w3"&&ig(v,[400,408,342,468]))&&!(v.id==="w7"&&ig(v,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:v,x2:E,z1:A}=h.recess;if(E>v){let b=[[v,d.get("w12").y2,v,A],[v,A,E,A]];for(let[I,U]of b.entries()){if(f.some(z=>jS(z,U)))continue;let[L,B,F,H]=U,$=ng({id:`reference-recess-${I}`,x1:L,y1:B,x2:F,y2:H});$&&f.push($)}}}let g=new Map;for(let v of o.filter(E=>E.type==="window")){let E=fg(f,v.x,v.y,(v.rotation||0)*Gr);if(!E||E.distance>27)continue;let{wall:A,t:b,centerX:I,centerZ:U}=E,L=Math.max(1,b-v.w/2+1),B=Math.min(A.length-1,b+v.w/2-1);if(B-L<14)continue;A.openings.push({start:L,end:B});let F=dg(n,A,I,U),H=A.angle+(F<0?Math.PI:0),$=(L+B)/2;g.set(v.id,{x:A.x1+$*A.dx,z:A.y1+$*A.dz,angle:H,window:{...v,w:B-L+2,rotation:H/Gr}})}let x=o.filter(v=>v.type==="garageDoor"),p=o.map(v=>{let E=v.type==="cameraThumbnail"&&x.some($=>uw(v,$))?Vn:xg(v.type),A=v.type==="controlZone"&&(v.visualKind==="window"||v.entityId?.startsWith("cover.")),b=g.get(v.id)??JS(n,f,v);if(A){let $=52;for(let z of g.values()){let j=Math.hypot(z.x-v.x,z.z-v.y);j<$&&(b=z,$=j)}}let I=b?.x??v.x,U=b?.z??v.y,L=b?.angle??(Number.isFinite(v.rotation)?v.rotation*Gr:0),B=v.type==="stairs"?1536:300,F=Math.min(B,(Math.abs(Math.cos(L))*v.w+Math.abs(Math.sin(L))*v.h)/2),H=Math.min(B,(Math.abs(Math.sin(L))*v.w+Math.abs(Math.cos(L))*v.h)/2);return l(I-F,U-H),l(I+F,U+H),{item:v,x:I,z:U,baseY:E,angle:L,window:b?.window,mountY:b?.mountY,isBlind:A}});for(let v of f)v.openings.sort((E,A)=>E.start-A.start||E.end-A.end);let m=p.filter(({item:v})=>v.type==="stairs").map(v=>{let{item:E,x:A,z:b,angle:I}=v,U=Number.isInteger(E.steps)&&E.steps>=2&&E.steps<=40?E.steps:hg,L=Math.min(46,Math.max(12,E.w*.47)),B=-E.h/2-L;for(let F of[-E.w/2,E.w/2])l(A+F*Math.cos(I)-B*Math.sin(I),b+F*Math.sin(I)+B*Math.cos(I));return{...v,steps:U,apronDepth:L}}),y=s.filter(v=>v.kind==="fence").map(v=>KS(v,e,m)),S=Wp(e,h,t),_=Yp(f.map(v=>({...v,palette:pg(v)})),af,ug,YS);return Number.isFinite(a.minX)||Object.assign(a,tg),{rooms:e,walls:f,fences:y,stairs:m,placements:p,bounds:a,houseBounds:u,reference:h,floorStructure:S,wallStructure:_,editableStructure:t}}function og(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function lf([i,...t]){let e=og(new zn,i);return e.holes=t.map(n=>og(new Ps,n)),e}function QS(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=jl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let d=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,d,256,32),s.globalAlpha=.48,s.fillRect(0,d,256,1.2);let h=30+u*47%181;s.fillRect(h,d,1,32),s.globalAlpha=.15;for(let f=0;f<15;f++){let g=c()*256,x=d+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+p/2,x+c()*2-1,g+p,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let d=0;d<8;d++)s.globalAlpha=c()*.14,s.fillRect(d*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(d*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new br(n);return l.colorSpace=je,l.wrapS=l.wrapT=Rs,l}function of(i){let t=new Map,e=new _e,n=new on,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,c=f=>(a.has(f)||a.set(f,new wr({color:f})),a.get(f));function l(f,g,x,p,m,y=0){n.setFromAxisAngle(r,y),e.compose(s.set(x,p,m),n,o),f.applyMatrix4(e);let S=c(g);t.has(S)||t.set(S,[]),t.get(S).push(f)}function u(f,g,x,p,m,y,S,_=0){f>0&&g>0&&x>0&&l(new Me(f,g,x),p,m,y,S,_)}function d(f,g,x,p,m,y,S){let _=new Se(1,9,6);_.scale(f,g,x),l(_,p,m,y,S)}function h(){for(let[f,g]of t){let x=Un(g);if(!x){for(let p of g)i.add(new he(p,f));continue}i.add(new he(x,f));for(let p of g)p.dispose()}t.clear()}return{add:l,ball:d,box:u,material:c,finish:h}}function tw(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(sf,r)?r:"oak";if(!s.has(a)){let c=sf[a],l=QS(n,c,141+Object.keys(sf).indexOf(a)*977);s.set(a,new wr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new os(lf(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),d=l.getAttribute("uv");for(let f=0;f<d.count;f++)d.setXY(f,u.getX(f)/248,u.getZ(f)/248);let h=new he(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)ag(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)ag(t,r,Vn-1,-22,"#a18e84",!0)}function ew(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new be(e,1))}return i}function ag(i,t,e,n,s,r=!1){let o=new Gi(lf(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(ew(o),s,0,e,0)}function nw(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,d=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,d,t,d,0)}let r=new ce;return r.setAttribute("position",new qt(e,3)),r.setAttribute("uv",new qt(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function cg(i,t){let e=new os(lf(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function iw(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(cg(o,!1),r,0,s,0);for(let o of e.bottom)i.add(cg(o,!0),r,0,n,0);e.sides.length&&i.add(nw(e.sides,s-n),r,0,n,0)}}function sw(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:d,posts:h,color:f,postColor:g}=n,x=l-c,p=new Me(Math.hypot(u,x),5,7);p.rotateZ(Math.atan2(x,u)),i.add(p,f,(s+o)/2,(c+l)/2+ca,(r+a)/2,-d);for(let m=0;m<=h;m++){let y=m/h,S=oe.lerp(s,o,y),_=oe.lerp(r,a,y),v=oe.lerp(c,l,y),E=[S,v,_].map(A=>Math.round(A*1e3)).join(",");e.has(E)||(e.add(E),i.box(5,ca,5,g,S,v+ca/2,_,-d))}}}function gg(i,t,e,n,s=0,r=0){let o=e/n,a=-pi/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let d=r-e/2+o*u,h=u===n-1?0:pi+(u+1)*a,f=h-3;i.box(t,f-Vn,o,"#a98075",s,(Vn+f)/2,d+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,d+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,f+3.35/2,d+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,f+3.4/2,d+l/2)}}function rw({item:i,steps:t,apronDepth:e}){let n=new se,s=of(n);gg(s,i.w,i.h,t);let r=pi-Vn;return s.box(i.w,r,e,"#c8b79e",0,Vn+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:pi/2}}function ow(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=hg,u=r-s,d=u/l,h=pi,f=-h/l;gg(i,a,u,l,c,(s+r)/2);for(let _=0;_<l;_++){let v=s+d*(_+.5),E=h+(_+1)*f;i.box(5,24,5,"#9f8183",e+4,E+12,v)}let g=d*(l-1),x=f*(l-1),p=new Me(7,5,Math.hypot(g,x)+5);p.rotateX(-Math.atan2(x,g)),i.add(p,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[m,y]=o,S=Math.max(2,Math.ceil((y.x-m.x)/28));i.box(y.x-m.x,5,7,"#896e79",(y.x+m.x)/2,28,m.y);for(let _=0;_<=S;_++)i.box(5,28,5,"#9f8183",m.x+(y.x-m.x)*_/S,14,m.y)}function aw(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=jl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let d=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);d.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),d.addColorStop(1,"#b1c3a000"),e.fillStyle=d,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new br(t);return s.wrapS=s.wrapT=Rs,s.repeat.set(15,10),s.colorSpace=je,s.anisotropy=4,s}function cw(i,t,e,n){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=jl(150741);if(!t.editableStructure){let g=Math.min(90,c*.18),x=t.reference?t.reference.left+g/2:s+g/2;i.box(g,4,115,"#c7baa4",x,-109,o-88);for(let p=0;p<5;p++)i.box(g*.85,1.8,13,"#dbceba",x,-106,o-137+p*20)}let d=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[g,x]of d){let p=s+g*c,m=o+x*l,y=21+u()*24;i.ball(y*.94,9,y*.67,"#6d886a",p,-104,m),i.ball(y*.82,y*.57,y*.69,"#819b76",p+3,-98,m);for(let S=0;S<8;S++){let _=S*2.39996,v=(.2+u()*.5)*y,E=y*(.28+u()*.2),A=["#94ad7f","#a6ba88","#8da878","#bad09c"][S%4];i.ball(E*1.15,E*.8,E,A,p+Math.cos(_)*v,-93+12*u(),m+Math.sin(_)*v*.75)}for(let S=0;S<5;S++){let _=S%2?"#e6c4b1":"#fae6a4",v=p+(u()-.5)*y*1.14,E=m+y*(.62+u()*.43);i.ball(2.3,4.6,2.3,"#819765",v,-106,E),i.ball(3.9,1.8,3.3,_,v,-101.5,E),i.ball(1.2,.9,1.2,"#cb9c57",v,-100.3,E)}}let h=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],f=t.placements.filter(({item:g})=>g.type==="garageDoor"||g.type==="stairs");for(let[g,[x,p,m,y]]of h.entries()){let S=y*aa[x].radius+7,_=s+p*c,v=o+m*l,E=v<o?-1:1,A=_<(s+r)/2?-1:1;for(let[b,I]of[[0,0],[A*(S+20),0],[0,E*(S+20)]]){let U=_+b,L=v+I;if(!(L-S<=e.nearZ||U+S>s&&U-S<r&&L+S>o&&L-S<a||f.some(F=>{let H=U-F.x,$=L-F.z,z=H*Math.cos(F.angle)+$*Math.sin(F.angle),j=-H*Math.sin(F.angle)+$*Math.cos(F.angle);return Math.abs(z)<F.item.w/2+S&&Math.abs(j)<F.item.h*.6+S}))){n.add({kind:x,x:U,z:L,groundY:Vn,height:y,seed:7229+g*101});break}}}for(let[g,x,p,m]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])n.add({kind:x,x:s+p*c,z:e.farZ-m,groundY:Vn+.68,seed:g})}function lw(i,t,e){let n=jl(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(S,_)=>!(o&&S>=o.x1&&S<=o.x2&&_>=o.z1&&_<=o.z2)&&!t.rooms.some(v=>(!t.editableStructure||!ta(v))&&Jl(v,S,_)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let S=0;S<210;S++){let _=s.minX-70+(s.maxX-s.minX+140)*n(),v=c+l*n(),E=n()*180,A=8+n()*8,b=112+n()*34;a(_,v)&&r.push({x:_,z:v,phase:E,length:A,speed:b})}let u=new Float32Array(r.length*6),d=new Float32Array(r.length*3),h=new Float32Array(r.length*3),f=new ce,g=new ce,x=new ce;f.setAttribute("position",new be(u,3).setUsage(Rn)),g.setAttribute("position",new be(d,3).setUsage(Rn)),x.setAttribute("position",new be(h,3).setUsage(Rn));let p=new fo(f,new _r({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),m=new vr(g,new Is({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),y=new vr(x,new Is({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=m.frustumCulled=y.frustumCulled=!1,i.add(p,m,y),(S,{condition:_,windSpeed:v,windBearing:E})=>{p.visible=ZS.has(_);let A=_==="pouring"||_==="lightning-rainy";if(p.material.opacity=A?.5:.34,m.visible=$S.has(_),y.visible=_==="hail",p.visible||m.visible||y.visible){let b=Number.isFinite(E)?E*Gr:285*Gr,I=oe.clamp(v??6,0,22)*.028;for(let[U,L]of r.entries()){let B=65-(L.phase+S*L.speed*(A?1.3:1))%170,F=65-(L.phase+S*20)%170,H=65-(L.phase+S*L.speed*1.55)%170,$=U*6;u.set([L.x,B,L.z,L.x+L.length*I*Math.sin(b),B+L.length,L.z-L.length*I*Math.cos(b)],$),d.set([L.x+Math.sin(S+U)*6,F,L.z],U*3),h.set([L.x,H,L.z],U*3)}f.attributes.position.needsUpdate=p.visible,g.attributes.position.needsUpdate=m.visible,x.attributes.position.needsUpdate=y.visible}}}function xg(i){return i==="garageDoor"?Vn:0}function uw(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*Gr,r=Math.cos(s),o=Math.sin(s);return Lp(t,e*r+n*o,-e*o+n*r)}function hw(i,t,e,n){let s=new G,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let d of l){s.set(...d).project(t);let h=(s.x+1)*e/2,f=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,f-r),u.bottom=Math.max(u.bottom,f+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:d,y2:h,base1:f,base2:g})=>o([[l,f,u],[l,f+ca,u],[d,g,h],[d,g+ca,h]])),c=i.stairs.map(({x:l,z:u,angle:d,item:h,apronDepth:f})=>{let g=Math.cos(d),x=Math.sin(d),p=[];for(let m of[-h.w/2,h.w/2])for(let[y,S]of[[-h.h/2-f,pi],[h.h/2,0]])p.push([l+m*g-y*x,S,u+m*x+y*g]);return o(p)});return[...a,...c]}function fw({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([d,h])=>[i+d*r-h*o,t+d*o+h*r].map(f=>Math.round(f*1e5)/1e5))]}function dw(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=mg(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return pi;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return pi+-pi/s.steps*l}return null}}function yg(i,t){let e=cf(t),n=t.sceneSettings,s=new gl({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});s.resetState();let r=new ss;r.background=new Xt("#d7dfcd");let o=new us(-800,800,450,-450,1,4400),{minX:a,maxX:c,minZ:l,maxZ:u}=e.bounds,d=new ke({color:"#e8e8d2",map:aw(i.ownerDocument),roughness:.95}),h=new he(new Vi(6200,4200),d);h.rotation.x=-Math.PI/2,h.position.set((a+c)/2,Vn,(l+u)/2),r.add(h);let f=of(r),g=of(r),x=Qm(g),p=mm(e),m=gm(f,p,Vn,h.geometry.parameters.width,h.position.x),y,{water:S}=xm(f,p,Vn,e.houseBounds,h.geometry.parameters.width,h.position.x),_=S.shoreline.reduce((W,ot)=>Math.abs(ot.x-S.focusX)<Math.abs(W.x-S.focusX)?ot:W),v={road:{x:m.centerX,y:m.surfaceY+8,z:(m.lanes[0]+m.lanes[1])/2},coast:{x:S.focusX+16,y:S.y,z:_.z-36},beach:{x:S.focusX,y:S.y+8,z:_.z+37}};cw(f,e,p,x),ow(f,e),tw(r,f,e,i.ownerDocument),iw(f,e),sw(f,e.fences),f.finish();let E=r.children.length;g.finish();let A=r.children.slice(E),b=r.children.filter(W=>W.isMesh),I=$p(s,r,e.bounds);I.markStructure();let U=dm(S),L=Dm(m),B=zm(S),F=Gm(S,p);r.add(U.mesh,L.root,B.root,F.root);let H=lw(r,e,p.sceneryMinZ),$=e.floorStructure.footprint,z=Bh($),j=e.stairs.length?Bh(lg.default.union($,...e.stairs.map(fw))):z,ut=dw(e,z),nt=new ss,it=lm(),at=new Ns("#fff5e1","#c9bfd7",1.8),Ct=new hs("#fff1d8",1.65);Ct.position.set(-4,9,6),nt.add(at,Ct);let Nt={supportsRoute:j.supportsRoute,floorClearance:j.clearance},Et=Oh(nt,ut,Nt),At,Z=Et,X=new Map,Q=new Map,ct=new Map,xt=new Map(e.stairs.map(W=>[W.item.id,W]));for(let W of e.placements){let{item:ot,x:C,z:K,baseY:q,angle:mt,window:bt,mountY:gt,isBlind:It}=W,Dt=ot.type==="window"&&bt?bt:ot,ne=xt.get(ot.id),Ht=ne?rw(ne):Np(Dt,{window:It?bt:void 0,mountY:gt})??Ap(Dt);if(Ht){let ge=tm(ot,Ht.root);Ht.root.position.set(C,q+ge,K),Ht.root.rotation.y=-mt,Ht.floorRadius&&(Ht.dockFits=z.clearance(C,K)>=Ht.floorRadius),r.add(Ht.root),Q.set(ot.id,Ht),ot.type==="garageDoor"&&ct.set(Ht.root,ot.id),I.register(ot,Ht)}X.set(ot.id,{x:C,z:K,baseY:q,rootY:Ht?.root.position.y,object:Ht})}let _t=Zm(e.placements,Q),vt=_t.resolve(),Rt=vt,dt,Mt={...e.bounds,sceneryMinZ:p.sceneryMinZ,waterfront:{minX:S.focusX-475,maxX:S.focusX+605,minZ:_.z-352,maxZ:_.z+88}};for(let W of e.placements){let ot=Q.get(W.item.id);if(!ot)continue;let C=vt.get(W.item.id);if(C&&(ot.root.position.y=C.y),ot.root.scale.y!==1||C?.supportId){let{max:K}=new He().setFromObject(ot.root);Number.isFinite(K.y)&&(Mt.maxY=Math.max(Mt.maxY??92,K.y))}}let St=new G,wt=!1,Tt=0,Ut=0,Ot=qi(),Wt,Ft=new ds,J=new Bn(new G(0,1,0),0),Kt=new G,Zt=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function O(W,ot){if(wt||W<1||ot<1||W===Tt&&ot===Ut)return;Tt=W,Ut=ot;let C=i.ownerDocument.defaultView?.devicePixelRatio||1;s.setPixelRatio(Math.min(C,1.5,Math.sqrt(27e5/(W*ot)))),s.setSize(W,ot,!1),Fh(o,Mt,W,ot,Ot,Wt)}function T(W,ot){return Ot=qi(W),Wt=ot,!wt&&Tt>0&&Ut>0&&Fh(o,Mt,Tt,Ut,Ot,Wt),st()}function st(){return{...Ot}}function lt(W){if(typeof W=="string"){if(Object.hasOwn(v,W))return{...v[W]};let ot=X.get(W);if(!ot)return null;let{x:C,z:K,baseY:q,object:mt}=ot;return mt?{x:C,y:mt.root.position.y+(mt.anchorY??0)*mt.root.scale.y,z:K}:{x:C,y:q+6,z:K}}return[W?.x,W?.y].every(Number.isFinite)?{x:W.x,y:(ut(W.x,W.y)??0)+22,z:W.y}:null}function pt(W,ot){return wt||!Number.isFinite(W)||!Number.isFinite(ot)||Tt<=0||Ut<=0?!1:(Ft.setFromCamera(new Lt(W/Tt*2-1,1-ot/Ut*2),o),!0)}function k(W,ot,C,{preferTabletop:K=!1}={}){if(!pt(W,ot))return null;if(K){let q=_t.projectTabletop(C,Ft);if(q)return q}return J.constant=-xg(C),Ft.ray.intersectPlane(J,Kt)?{x:Kt.x,y:Kt.z}:null}function M(W,ot){if(!ct.size||!pt(W,ot))return null;let C=[];for(let q of ct.keys())q.traverseVisible(mt=>{mt.isMesh&&C.push(mt)});let K=Ft.intersectObjects(C,!1)[0];if(!K||Ft.intersectObjects(b,!1).some(q=>q.distance<K.distance-.01))return null;for(let q=K.object;q;q=q.parent)if(ct.has(q))return ct.get(q);return null}function w(W=!1){s.render(r,o);let ot=!W&&it.scene.children.length>0;if(!(!Z?.hasVisibleTracks&&!ot)){s.autoClear=!1;try{s.clearDepth(),ot&&s.render(it.scene,o),Z?.hasVisibleTracks&&s.render(nt,o)}finally{s.autoClear=!0}}}function R(W,ot,C=!1){let K=ot.beachActivity??(ot.night?"overnight":"day"),q={reduceMotion:ot.reduceMotion===!0,night:ot.night===!0,condition:ot.condition,transientTelemetry:C,activity:K};L.root.visible=K!=="overnight"&&(C||ui(n,"sidewalk")),B.root.visible=C||ui(n,"boats"),F.root.visible=C||ui(n,"beachPlay"),L.root.visible&&L.update(W,q),B.root.visible&&B.update(W,q),F.root.visible&&F.update(W,q);let mt=C||ui(n,"trees");for(let bt of A)bt.visible=mt;mt&&x.update(W,ot),U.update(W,C||ui(n,"reflections")?ot:{...ot,reflections:!1})}function D(W=0,ot={},C={},{animateTelemetry:K=!0,showTelemetryPosition:q=!0,draftPositions:mt,transientTelemetry:bt=!1}={}){if(wt||Tt<1||Ut<1)return;bt||(C=_l(C,n));let gt=C.reduceMotion===!0,It=!gt&&Number.isFinite(W)?W:0,Dt=K?It:0,ne=bt||ui(n,"traffic");ne&&!y&&C.traffic&&(y=Lm(m),r.add(y.root)),y&&(y.root.visible=ne,ne&&y.update(W,C.traffic,{reduceMotion:gt,night:C.night===!0,transientTelemetry:bt})),H(Dt,bt||ui(n,"precipitation")?C:{}),R(W,C,bt);let Ht=dt!==mt;Ht&&(dt=mt,Rt=mt?_t.resolve(mt):vt);for(let[ye,we]of Q){let ze=ot[ye]??Zt,Ue=ze.position,Xe=Ue&&Number.isFinite(Ue.x)&&Number.isFinite(Ue.y)&&(!we.floorRadius||z.clearance(Ue.x,Ue.y)>=we.floorRadius);Xe&&!bt&&(we.telemetryPosition=Ue);let Pt=bt?Xe?Ue:null:we.telemetryPosition,Yt=mt?.[ye]?.position??(q?Pt:null),ee=X.get(ye);we.root.position.x=Yt?.x??ee.x,we.root.position.y=Rt.get(ye)?.y??ee.rootY,we.root.position.z=Yt?.y??ee.z,we.floorRadius&&(we.root.visible=!!(Yt||!q||we.dockFits)),we.animate?.(ze,we.ambientMotion?It:Dt,!!(Xe&&q),bt)}I.update(C,ot,d,Ht);let ge=bt?At:Et;Z!==ge&&(Z?.setVisible(!1),bt||At?.setTracks([],0),Z=ge,Z?.setVisible(!0)),Z?.render(W,gt),w(bt)}function N(W,ot,C={}){wt||(C.transientTelemetry?(!At&&W?.length&&(At=Oh(nt,ut,Nt),At.setVisible(!1)),At?.setTracks(W,ot,C)):Et.setTracks(W,ot,C))}function V(W){let ot=X.get(W);if(!ot||Tt<1||Ut<1)return null;let{x:C,z:K,baseY:q,object:mt}=ot;if(mt){if(!mt.root.visible)return null;St.set(mt.anchorOffset?.x||0,mt.anchorY||0,mt.anchorOffset?.z||0),mt.root.localToWorld(St)}else St.set(C,q+6,K);return St.project(o),{x:(St.x+1)/2,y:(1-St.y)/2}}function Y(){if(wt)return;wt=!0,Et.dispose(),At?.dispose(),it.dispose(),y?.dispose(),L.dispose(),B.dispose(),F.dispose();let W=new Set,ot=new Set,C=new Set;r.traverse(K=>{K.geometry&&W.add(K.geometry);for(let q of Array.isArray(K.material)?K.material:[K.material])if(q){ot.add(q);for(let mt of Object.values(q))mt?.isTexture&&C.add(mt)}});for(let K of C)K.dispose();for(let K of W)K.dispose();for(let K of ot)K.dispose();I.dispose(),s.dispose()}return{resize:O,render:D,anchor:V,setView:T,getView:st,getDemoFocus:lt,projectToPlan:k,pickGarage:M,exteriorClearance:()=>hw(e,o,Tt,Ut),dispose:Y,hasAmbientMotion:!0,setPeople:N,setDetectionZones:it.setZones,canPlacePerson:(W,ot)=>Number.isFinite(ut(W,ot))&&j.clearance(W,ot)>0,get hasPeopleMotion(){return Z?.hasMotion??!1}}}var _g=.35,Kl=7.5,pw=8;function vg(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let y=qi({...p,...m});(y.azimuth!==p.azimuth||y.tilt!==p.tilt||y.zoom!==p.zoom)&&e(y)}function c(p){i.hasPointerCapture(p)&&i.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!n(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{i.setPointerCapture(p.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function d(p){let m=s.get(p.pointerId);if(!m)return;let y=r();if(!y){l();return}let S=s.size===2,_=S?o():0,v={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,v),p.preventDefault(),S){let E=o();Math.min(_,E)>=pw&&a(y,{zoom:y.zoom*E/_});return}a(y,{azimuth:y.azimuth-(v.x-m.x)*_g,tilt:y.tilt+(v.y-m.y)*_g})}function h(p){s.delete(p.pointerId)&&c(p.pointerId)}function f(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let y=p.deltaMode===1?16:p.deltaMode===2?i.clientHeight:1,S=Math.max(-350,Math.min(350,p.deltaY*y));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-S*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let y;switch(p.key){case"ArrowLeft":y={azimuth:m.azimuth-Kl};break;case"ArrowRight":y={azimuth:m.azimuth+Kl};break;case"ArrowUp":y={tilt:m.tilt-Kl};break;case"ArrowDown":y={tilt:m.tilt+Kl};break;case"+":case"=":y={zoom:m.zoom*1.1};break;case"-":y={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,y)}let x=[["pointerdown",u],["pointermove",d],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",f,{passive:!1}],["keydown",g]];for(let[p,m,y]of x)i.addEventListener(p,m,y);return{cancel:l,dispose(){l();for(let[p,m,y]of x)i.removeEventListener(p,m,y)}}}var uA=1200*1e3,hA=new Map([["s",1/60],["min",1],["h",60]]);var mw="roomcraft.traffic-vehicle-style.v1";function bg(i){try{let t=i.localStorage.getItem(mw);return zl.some(({id:e})=>e===t)?t:""}catch{return""}}var xA=1200*1e3,yA=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function Mg(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],d=u.length>0,h=d?5:3,f,g,x=1/0;for(let m=0;m<=h&&(d||!f);m++)for(let[y,S]of m===0?s.slice(0,1):s.slice(1)){let _=o(a.x+y*m*34,c/2,t-c/2),v=o(a.y+S*m*34,l/2,e-l/2);if(n.some(b=>Math.abs(_-b.x)<(c+b.w)/2+2&&Math.abs(v-b.y)<(l+b.h)/2+2))continue;if(m<=3&&!f&&(f={...a,x:_,y:v,w:c,h:l}),!d)break;if(u.some(b=>_+c/2>b.left&&_-c/2<b.right&&v+l/2>b.top&&v-l/2<b.bottom))continue;let A=Math.hypot(_-a.x,v-a.y);A<x&&(g={...a,x:_,y:v,w:c,h:l},x=A)}let p=g??f;p&&n.push(p)}return n}var Tg=tu(vl(),1),Sg="roomcraft-presence-v1",wg=4500,Ag=/^sensor\.[a-z0-9_]+$/,gw=4,uf=1536,hf=1024,xw=[[[0,0],[uf,0],[uf,hf],[0,hf],[0,0]]],Eg=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],yw=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...Eg.map(([i,t])=>[t,i]),...Eg.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function Rg(i,t){return i>=0&&i<=uf&&t>=0&&t<=hf}function Cg(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function _w(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function Ig(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!Cg(s))continue;let[r,o,a,c,l,u]=s,d=yw.get(n.presenceTrackProfile),h=Math.hypot(o,l),f=Rg(a,u)?{origin:{x:a,y:u},forward:{x:o/h,y:l/h}}:{},g=t.length;for(let[x,p]of[["configured",_w(n.presenceTrackZone)],["nominal",d?.ring]]){if(!p)continue;let m=p.map(([y,S])=>[r*y+o*S+a,c*y+l*S+u]);for(let[y]of Tg.default.intersection([m],xw))t.push({id:n.id,kind:x,points:y.slice(0,-1).map(([S,_])=>({x:S,y:_})),...f,...x==="nominal"?{rangeMeters:d.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function vw(i={},t=[]){let e={};for(let n of new Set(t)){if(!Ag.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==Sg)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,gw):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:Sg,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function Pg(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!Ag.test(o||"")||s.has(o)||!Cg(a))continue;s.add(o);let c=vw(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=wg)continue;let[d,h,f,g,x,p]=a;for(let m of u){let y=d*m.x+h*m.y+f,S=g*m.x+x*m.y+p;Rg(y,S)&&n.push({id:o+":"+m.id,x:y,y:S,expiresAt:l+wg})}}return n}var ff=new Map([["sunny",["Sunny","clear","cirrus"]],["clear-night",["Clear night","clear","cirrus"]],["partlycloudy",["Partly cloudy","partial","cumulus"]],["cloudy",["Cloudy","clouds","stratus"]],["rainy",["Rain","rain","nimbostratus"]],["pouring",["Heavy rain","rain","nimbostratus"]],["lightning",["Thunderstorms","thunder","cumulonimbus"]],["lightning-rainy",["Thunderstorms","storm","cumulonimbus"]],["snowy",["Snow","snow","stratus"]],["snowy-rainy",["Sleet","sleet","nimbostratus"]],["hail",["Hail","sleet","cumulonimbus"]],["fog",["Fog","fog","fog"]],["windy",["Windy","wind","cirrus"]],["windy-variant",["Windy and cloudy","wind-clouds","altocumulus"]],["exceptional",["Unusual weather","unknown","none"]]]),Ng=new Set(["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"]),Dg=Object.freeze([...ff].map(([i,[t]])=>Object.freeze({id:i,label:i==="lightning-rainy"?"Thunderstorms with rain":t}))),Ug=Object.freeze([...Ng]),Lg=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function Fg(i={},t=!1){let{condition:e,daylightKnown:n,night:s,moonPhase:r,temperature:o,unit:a,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:d,moonElevation:h,windSpeed:f,windBearing:g,cloudCoverage:x}=i;if(t)return{label:"Weather offline",sky:"unknown",effect:"unknown",cloud:"none",moon:"",reading:"",windReading:""};let[p,m,y]=ff.get(e)||["Weather unavailable","unknown","none"],S=n?s:e==="clear-night",_=n?!s:e==="sunny",v=Number.isFinite(f)&&f>=0?f:void 0,E=Number.isFinite(g)?(g%360+360)%360:void 0,A=E===void 0?"":Lg[Math.round(E/22.5)%Lg.length],b=v===void 0?"":v===0?"Calm wind":`Wind ${A?`from ${A} at `:""}${Math.round(v*10)/10} m/s`;return{label:p,sky:S?"night":_?"day":"unknown",effect:m,cloud:y,moon:S&&Ng.has(r)?r:"",reading:ff.has(e)&&Number.isFinite(o)?`${Math.round(o)}${a||"\xB0"}`:"",windSpeed:v,windBearing:E,windReading:b,cloudCoverage:Number.isFinite(x)&&x>=0&&x<=100?x:void 0,sunElevation:c,sunRising:l,sunAzimuth:u,moonAzimuth:d,moonElevation:h}}var bw=[["dipper",[[7,9],[27,15],[46,22],[63,28],[93,23],[89,42],[65,43]],"M7 9L27 15 46 22 63 28 93 23 89 42 65 43 63 28"],["cassiopeia",[[8,35],[28,17],[47,31],[67,10],[91,24]],"M8 35L28 17 47 31 67 10 91 24"],["orion",[[30,6],[68,8],[44,25],[50,28],[56,31],[29,46],[67,47]],"M30 6L44 25 50 28 56 31 68 8M44 25L29 46M56 31L67 47"]],Mw=bw.map(([i,t,e])=>`
  <svg class="coastal-constellation coastal-${i}" viewBox="0 0 100 52" focusable="false">
    <path d="${e}"/>
    ${t.map(([n,s],r)=>`<circle cx="${n}" cy="${s}" r="${r%3===0?2.15:1.55}"/>`).join("")}
  </svg>`).join(""),Sw=["#c2d7ed","#e4edff","#fff0d2"];function Og(i,t){let e=t?11939:30391,n=()=>(e=e*48271%2147483647)/2147483647;return Array.from({length:i},(s,r)=>{let o=1+(r+n())*98/i,a=5+n()*79,c=t?.85+r%3*.18:.48+r%4*.12;return`radial-gradient(circle at ${o.toFixed(1)}% ${a.toFixed(1)}%,${Sw[r%3]} 0 ${c.toFixed(2)}px,transparent ${(c+.6).toFixed(2)}px)`}).join(",")}var Gg=`
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <div class="coastal-stars">
      <span class="coastal-star-field"></span>
      <span class="coastal-star-sparkle"></span>
      ${Mw}
      <span class="coastal-meteor coastal-meteor-first"></span>
      <span class="coastal-meteor coastal-meteor-second"></span>
    </div>
    <span class="coastal-orb coastal-sun"></span>
    <span class="coastal-orb coastal-moon"></span>
    <span class="coastal-cloud coastal-cloud-high"></span>
    <span class="coastal-cloud coastal-cloud-left"></span>
    <span class="coastal-cloud coastal-cloud-right"></span>
    <span class="coastal-cloud coastal-cloud-bank"></span>
    <span class="coastal-lightning"></span>
  </div>`,Ms=(i,t,e)=>Math.max(t,Math.min(e,i)),Bg=i=>Number.isFinite(i)&&Math.abs(i)<=90,df=i=>Number.isFinite(i)&&i>=0&&i<=360,Ql=75,kg=i=>76-58*Ms(i/Ql,0,1),zg=i=>12+76*Ms((i-90)/180,0,1),ww=new Map([["waxing_crescent",[1,.48]],["first_quarter",[1,0]],["waxing_gibbous",[1,-.48]],["waning_crescent",[-1,.48]],["last_quarter",[-1,0]],["waning_gibbous",[-1,-.48]]]);function Ew(i,t){let e=[];for(let[n,s,r]of[[1,0,1],[t,16,-1]])for(let o=0;o<=16;o++){let a=(s+o*r)*Math.PI/16,c=50+i*50*Math.sin(a)*n,l=50-50*Math.cos(a);e.push(`${c.toFixed(2)}% ${l.toFixed(2)}%`)}return`polygon(${e.join(",")})`}var Tw=new Map([...ww].map(([i,t])=>[i,Ew(...t)])),Aw=new Map([["clear",1],["wind",.9],["partial",.66],["wind-clouds",.43]]);function Rw(i,t,e,n,s,r,o){let c=(i==="night"&&!t?Aw.get(e)??0:0)*Ms(1-(n??0)/80,0,1);if(o||c<.55||e!=="clear"&&e!=="wind")return{starOpacity:c,meteor:"off",meteorProgress:0,meteorOpacity:0};if(s===void 0&&r===void 0)return{starOpacity:c,meteor:"live",meteorProgress:0,meteorOpacity:0};let l=r===void 0?(s%58-12)/1.4:(r-.36)/.29,u=Ms(l,0,1),d=Math.min(1,u*5,(1-u)*2)*.9;return{starOpacity:c,meteor:"sample",meteorProgress:u,meteorOpacity:d}}function Cw(i={},t=!1){let e=Fg(i,t),{sky:n,effect:s,cloud:r,moon:o,sunElevation:a,sunRising:c,sunAzimuth:l,moonElevation:u,moonAzimuth:d,windSpeed:h,windBearing:f,cloudCoverage:g}=e,{skyTimeSeconds:x,skyProgress:p,reduceMotion:m=!1}=t?{}:i,y=Bg(a),S=y&&(n==="day"?a<13:n==="night"&&a>-8),_=Number.isFinite(x)&&!m?Math.max(0,x):void 0,v=Number.isFinite(p)&&!m?Ms(p,0,1):void 0,E=v===void 0?void 0:Math.sin(v*Math.PI)*Ql,A=v??(_===void 0?void 0:.5-.5*Math.cos(_*Math.PI/480)),b=y?a:E??40,I=Ms(b/Ql,0,1),U=c===!0?19:c===!1?81:54,L=df(l)?zg(l):v===void 0?U+(50-U)*I:17+66*v,B=df(d)?zg(d):A===void 0?55:18+64*A,F=A===void 0?38:Math.sin(A*Math.PI)*Ql,H=kg(Bg(u)?u:F),$=!t&&!m&&!df(d)&&v===void 0&&_===void 0?"ambient":"fixed",z=f===void 0?void 0:f*Math.PI/180,j=z===void 0?9:-Math.sin(z)*12,ut=z===void 0?-2:Math.cos(z)*4,nt=h===void 0?s==="wind"||s==="wind-clouds"?2.5:1:h===0?0:Ms(h*.25,.32,4.8),it=g===void 0?1:Ms(g/52,0,1);return{sky:n,effect:s,cloud:r,moon:o,light:S?"twilight":"regular",clock:_,reduceMotion:m,moonMotion:$,sunX:L,sunY:kg(b),moonX:B,moonY:H,moonOutline:Tw.get(o)||"circle(50%)",windX:j,windY:ut,cloudSpeed:nt,cloudOpacity:it,...Rw(n,S,s,g,_,v,m)}}function Vg(i,t,e=!1){let n=Cw(t,e),{sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,clock:u,reduceMotion:d,cloudSpeed:h,cloudOpacity:f,starOpacity:g,meteor:x,meteorProgress:p,meteorOpacity:m}=n,y={sky:s,effect:r,cloud:o,moon:a,light:c,moonMotion:l,skyClock:u===void 0?"live":"sample",windCalm:String(h===0),skyReduced:String(d),stars:g>0?"visible":"hidden",meteor:x};for(let[_,v]of Object.entries(y))i.dataset[_]!==v&&(i.dataset[_]=v);let S={"--coastal-sun-x":`${n.sunX.toFixed(2)}%`,"--coastal-sun-y":`${n.sunY.toFixed(2)}%`,"--coastal-moon-x":`${n.moonX.toFixed(2)}%`,"--coastal-moon-y":`${n.moonY.toFixed(2)}%`,"--coastal-moon-outline":n.moonOutline,"--coastal-wind-x":`${n.windX.toFixed(3)}vw`,"--coastal-wind-y":`${n.windY.toFixed(3)}px`,"--coastal-wind-speed":String(h||1),"--coastal-cloud-cover":String(f),"--coastal-clock":`${(u??0).toFixed(3)}s`,"--coastal-star-opacity":g.toFixed(3),"--coastal-meteor-progress":p.toFixed(3),"--coastal-meteor-opacity":m.toFixed(3)};for(let[_,v]of Object.entries(S))i.style.getPropertyValue(_)!==v&&i.style.setProperty(_,v)}var Hg=`{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`,Wg=`
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
    display:none; position:absolute; inset:0; opacity:var(--coastal-star-opacity,0);
    transition:opacity 1.2s ease;
  }
  .coastal-sky[data-stars=visible] .coastal-stars {display:block}
  .coastal-star-field, .coastal-star-sparkle {position:absolute;inset:0}
  .coastal-star-field {
    opacity:.67;
    background:${Og(39,!1)},
      radial-gradient(ellipse 31% 97% at 34% 0%,#b0c3f522,transparent 100%);
  }
  .coastal-star-sparkle {
    opacity:.85;
    background:${Og(13,!0)};
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
  .coastal-sky:is([data-sky-clock=sample],[data-meteor=sample]) .coastal-star-sparkle {animation:none}
  .coastal-sky[data-wind-calm=true] .coastal-cloud {animation:none}
  @keyframes coastal-drift ${Hg}
  @keyframes coastal-sampled-drift ${Hg}
  @keyframes coastal-distant-lightning {0%,74%,87%,100%{opacity:0}80%{opacity:.69}}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky
    :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle),
  .coastal-sky[data-sky-reduced=true]
    :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle) {animation:none;transition:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky .coastal-meteor,
  .coastal-sky[data-sky-reduced=true] .coastal-meteor {display:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-lightning,
  .coastal-sky[data-sky-reduced=true] .coastal-lightning {opacity:.66}
  @media (prefers-reduced-motion:reduce) {
    .coastal-sky :is(.coastal-cloud,.coastal-orb,.coastal-lightning,.coastal-stars,.coastal-star-sparkle) {animation:none;transition:none}
    .coastal-sky[data-meteor] .coastal-meteor {display:none}
    .coastal-lightning {opacity:.66}
  }
  @media (max-height:600px) and (orientation:landscape) {
    .coastal-sky {height:clamp(38px,8.5dvh,48px);--coastal-orb-size:25px}
  }
`;var Iw=2500,pf=Object.freeze({condition:"sunny",daylightKnown:!0,night:!1,sunElevation:40,sunAzimuth:160,traffic:Object.freeze({severity:"ambient"})}),Xg={morning:[14,95],day:[40,160],dusk:[5,265],night:[-16,290],overnight:[-30,290]},Pw=i=>i.replaceAll("_"," ").replace(/^./,t=>t.toUpperCase());function Lw({condition:i,daylight:t,moonPhase:e,windSpeed:n,windBearing:s}){let r=i==="clear-night"||t==="night"||t==="overnight",o=t==="overnight"?t:r?"night":t,[a,c]=Xg[o]??Xg.day;return{...pf,condition:i,night:r,sunElevation:a,sunAzimuth:c,moonPhase:e,windSpeed:n,windBearing:s,beachActivity:o==="night"?"evening":o==="dusk"?"day":o}}function Yg(i,t,{api:e,viewport:n,bridge:s,onChange:r}){let o=i.getElementById("sceneSettingsDialog"),a=i.getElementById("sceneSettingsButton"),c=i.getElementById("sceneFeatures"),l=i.getElementById("sceneDockAlignment"),u=i.getElementById("scenePreviewMode"),d=i.getElementById("scenePreviewMotion"),h=i.getElementById("scenePreviewSource"),f=i.getElementById("scenePreviewWeather"),g=i.createElement("style");g.textContent=Wg,i.head.append(g);let x=i.createElement("template");x.innerHTML=Gg.trim();let p=x.content.firstElementChild;p.hidden=!0,n.before(p);try{d.checked=t.localStorage.getItem("roomcraft.reduce-motion.v1")!=="true"}catch{}let m=bp.map(({key:Et,label:At})=>{let Z=i.createElement("label");Z.className="scene-feature";let X=i.createElement("input");return X.type="checkbox",X.addEventListener("change",()=>e.setSceneSetting(Et,X.checked)),Z.append(X,At),c.append(Z),{key:Et,input:X}});function y(Et,At){let Z=i.createElement("label");return Z.textContent=Et,Z.append(At),f.append(Z),At.addEventListener("change",r),At}function S(Et,At,Z){let X=i.createElement("select");return X.replaceChildren(...At.map(([Q,ct])=>new t.Option(ct,Q))),X.value=Z,y(Et,X)}function _(Et,At,Z,X,Q){let ct=i.createElement("input");return Object.assign(ct,{type:"number",min:At,max:Z,step:X,value:Q}),y(Et,ct)}let v=S("Weather",Dg.map(({id:Et,label:At})=>[Et,At]),"sunny"),E=S("Time of day",[["morning","Morning"],["day","Day"],["dusk","Dusk"],["night","Evening"],["overnight","Overnight"]],"day"),A=S("Moon phase",Ug.map(Et=>[Et,Pw(Et)]),"full_moon"),b=_("Wind speed (m/s)",0,30,1,4),I=_("Wind from (degrees)",0,360,1,270),U,L,B=!1,F=!1,H=!1,$,z=!1,j=()=>{o.open||o.showModal()},ut=()=>e.setSceneSetting("dockAlignment",l.value),nt=()=>{f.hidden=u.value!=="custom",Nt(),r()};a.addEventListener("click",j),l.addEventListener("change",ut),u.addEventListener("change",nt),d.addEventListener("change",r);function it(){return u.value!=="custom"}function at(){let Et=F?it()?z?"Live appearance from Home Assistant.":U||e.getPreview?.()?.environment?"Showing the last available dashboard appearance.":"Connect to Home Assistant to match the dashboard appearance.":"Preview changes stay in this Studio tab.":"Choose a 3D view to see the preview.";h.textContent!==Et&&(h.textContent=Et)}async function Ct(){if(!F||!it()||!s||B||H)return;B=!0;let Et=!1;try{let At=await s.request("LOOK_GET");if(H)return;if(Et=z!==!!At?.environment,z=!!At?.environment,z){let Z=JSON.stringify(At);Z!==L&&(U=At,L=Z,Et=!0)}}catch{Et=z,z=!1}finally{B=!1,!H&&F&&it()&&Et&&r()}}function Nt(){F&&it()&&s&&!i.hidden?$===void 0&&($=t.setInterval(Ct,Iw),Ct()):$!==void 0&&(t.clearInterval($),$=void 0)}return i.addEventListener("visibilitychange",Nt),{open:j,motionEnabled:()=>d.checked,sync(Et,At,Z=!1){F=Et,Nt();for(let{key:xt,input:_t}of m)_t.checked=ui(At,xt);l.value=Mp(At),at();let X=U??e.getPreview?.(),Q=it()?X?.environment??pf:Lw({condition:v.value,daylight:E.value,moonPhase:A.value,windSpeed:Math.min(30,Math.max(0,b.valueAsNumber||0)),windBearing:Math.min(360,Math.max(0,I.valueAsNumber||0))}),ct={...Q,traffic:{...Q.traffic??pf.traffic,vehicleStyle:bg(t)}};return p.hidden=!F||!ui(At,"sky"),p.hidden||Vg(p,{..._l(ct,At),reduceMotion:Z}),{states:X?.states??{},environment:ct}},dispose(){H=!0,F=!1,Nt(),i.removeEventListener("visibilitychange",Nt),a.removeEventListener("click",j),l.removeEventListener("change",ut),u.removeEventListener("change",nt),d.removeEventListener("change",r),o.close();for(let{input:Et}of m)Et.parentElement.remove();f.replaceChildren(),p.remove(),g.remove()}}}var Nw=22,Dw=5,Uw=1e3/12,Fw=1e3,Ow=12;function Bw(i,t,e){let n=Mg(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let d=a/2;d<=e-a/2;d+=a+4)c.push({...r,x:u,y:d,w:o,h:a});c.sort((u,d)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(d.x-r.x,d.y-r.y));let l=c.find(u=>n.every(d=>Math.abs(u.x-d.x)>=(u.w+d.w)/2+2||Math.abs(u.y-d.y)>=(u.h+d.h)/2+2));l&&n.push(l)}return n}function kw(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function zw(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),d=u<=Nw;return!d&&(a.type==="garageDoor"||!kw(a,e))?[]:[{item:a,index:c,distance:u,near:d,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function Hw(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Jp(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),d=i.getElementById("sceneDefaultStatus"),h=Qp(t),f=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=Yg(i,t,{api:e,viewport:s,bridge:g,onChange:()=>{Kt(F?.item&&F.position?{[F.item.id]:{position:F.position}}:void 0)}}),p=i.createElement("div");p.className="scene-selection",p.setAttribute("aria-hidden","true"),Object.assign(p.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(p);let m=i.createElement("div");m.className="scene-placeholders",Object.assign(m.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(m);let y=i.createElementNS("http://www.w3.org/2000/svg","svg");y.classList.add("scene-placeholder-leaders"),y.setAttribute("aria-hidden","true"),Object.assign(y.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(y,m);let S=new Map,_=i.getElementById("miniHelp"),v=_?.textContent,E=n.getAttribute("aria-label")??"Editable three-dimensional home view",A,b,I,U=Uh(null),L=r.value,B="default",F,H,$,z=-1/0,j=0,ut,nt=!1,it=!1,at=null,Ct=!1,Nt=[],Et=[],At="",Z=0,X,Q=!1,ct={},xt={key:"",scene:null,reduceMotion:!1},_t={id:null,scene:null},vt=()=>L!=="plan",Rt=()=>L==="free",dt=()=>f?.matches===!0||!x.motionEnabled(),Mt=()=>n.getBoundingClientRect(),St=Pt=>{let Yt=Mt();return{x:Pt.clientX-Yt.left,y:Pt.clientY-Yt.top}};function wt(Pt){e.showStatus?.(Pt)}function Tt(){if(!(!nt&&(A?.hasAmbientMotion||A?.hasPeopleMotion)&&vt()&&!i.hidden&&!dt())){t.cancelAnimationFrame($),$=void 0;return}$===void 0&&($=t.requestAnimationFrame(Yt=>{if($=void 0,Yt-z>=Uw-1){z=Yt,j=Yt/1e3;try{ut&&A.render(j,...ut)}catch{k()}}Tt()}))}function Ut(Pt=!0){let Yt=vt()?A:null,ee=dt(),re=Ot()?Pg(Nt,ct):[],Ie=JSON.stringify(re);Ie===xt.key&&Yt===xt.scene&&ee===xt.reduceMotion||(xt={key:Ie,scene:Yt,reduceMotion:ee},Yt&&(Yt.setPeople(re,(t.performance?.now()??0)/1e3,{reduceMotion:ee}),Pt&&Kt()),e.setPersonPreview?.(Yt?[]:re))}function Ot(){return!!(g?.request&&Et.length&&!nt&&!i.hidden)}async function Wt(Pt=!0){if(Pt&&Ut(),Q||!Ot())return;Q=!0;let Yt=Z;try{let ee=await g.request("TRACK_GET",Et);Yt===Z&&Ot()&&(ct=ee&&typeof ee=="object"?ee:{},Ut())}catch{Yt===Z&&(ct={},Ut())}finally{Q=!1}}function Ft(){Ot()?X===void 0&&(X=t.setInterval(Wt,Fw),Wt(!1)):X!==void 0&&(t.clearInterval(X),X=void 0,Z++,ct={})}function J(Pt){Nt=Pt.filter(re=>re.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(re.presenceTrackEntityId)&&Array.isArray(re.presenceTrackTransform));let Yt=[...new Set(Nt.map(re=>re.presenceTrackEntityId))].slice(0,Ow),ee=Yt.join(",");ee!==At&&(At=ee,Et=Yt,Z++,ct={}),Ft()}function Kt(Pt){if(Tt(),!A||!vt())return;let{width:Yt,height:ee}=Mt();if(!Yt||!ee)return;A.resize(Yt,ee);let re=e.getSelection(),Ie=re?.kind==="item"?re.id:null;if(_t.scene!==A||_t.id!==Ie){let nn=b.items.find(Pn=>Pn.id===Ie);A.setDetectionZones(nn?Ig([nn]):[]),_t={id:Ie,scene:A}}let Wn=dt(),mi=x.sync(!0,b.sceneSettings,Wn),Xn=Object.create(null);for(let nn of b.items){let Pn=mi.states[nn.id];Pn&&Pn.entityId===nn.entityId&&(Xn[nn.id]=Pn)}if(ut=[Xn,{...mi.environment,reduceMotion:Wn},{showTelemetryPosition:!1,draftPositions:Pt}],A.render(j,...ut),Rt())return;let Di=[];for(let[nn,Pn]of S){let gi=A.anchor(nn);if(Pn.hidden=!gi,gi){let Ui=b.items.find(et=>et.id===nn),P=Ui?.type==="cameraThumbnail"?Kp(Ui,Yt):{w:96,h:44};Di.push({id:nn,marker:Pn,x:gi.x*Yt,y:gi.y*ee,...P})}}let pn=Bw(Di,Yt,ee),la=new Set(pn.map(nn=>nn.id)),Vr=[];for(let nn of pn){let{marker:Pn,x:gi,y:Ui,w:P,h:et,id:yt}=nn;Object.assign(Pn.style,{left:`${gi}px`,top:`${Ui}px`,width:`${P}px`,height:`${et}px`});let ft=Di.find(ht=>ht.id===yt);if(Math.hypot(ft.x-gi,ft.y-Ui)>8){let ht=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[kt,Gt]of Object.entries({x1:ft.x,y1:ft.y,x2:gi,y2:Ui}))ht.setAttribute(kt,Gt);ht.setAttribute("stroke","#6f816b"),ht.setAttribute("stroke-width","1"),ht.setAttribute("stroke-dasharray","3 3"),Vr.push(ht)}}for(let[nn,Pn]of S)Pn.hidden=!la.has(nn);y.replaceChildren(...Vr);let Ws=re?.kind==="item"?A.anchor(re.id):null;p.style.display=Ws?"block":"none",Ws&&(p.style.left=`${Ws.x*Yt}px`,p.style.top=`${Ws.y*ee}px`)}function Zt(){if(!F)return;let Pt=F;F=void 0;try{n.releasePointerCapture(Pt.pointerId)}catch{}Pt.item&&Kt({[Pt.item.id]:{position:{x:Pt.item.x,y:Pt.item.y}}})}function O(){a&&(a.hidden=!vt());for(let Pt of Object.values(o))Pt&&(Pt.disabled=!vt());l&&(l.hidden=!A||!Rt(),l.disabled=Ct),u&&(u.hidden=!A||!vt()||!at,u.disabled=Ct)}function T(Pt){d&&(d.textContent=Pt)}function st(){it=!0,T("")}function lt(){n.tabIndex=Rt()?0:-1,n.style.cursor=Rt()?"grab":"",n.setAttribute("aria-label",Rt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":E)}function pt(Pt,{initial:Yt=!1}={}){Yt||(st(),Pt==="default"&&(it=!1)),Y.cancel(),Zt();let ee=A?.getView()??U,re=Object.hasOwn(Fr,Pt)?Pt:"plan";re!=="plan"&&e.useSelectTool?.(),L=re,vt()&&!Rt()&&(B=L),r.value=L,n.hidden=!vt(),lt();let Ie=vt()&&!Rt();if(m.style.display=Ie?"block":"none",y.style.display=Ie?"block":"none",Ie||(p.style.display="none"),_&&(Rt()?_.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":_.textContent=vt()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":v),s.classList.toggle("scene-3d",vt()),O(),!vt()){M(),Tt(),x.sync(!1,e.getProject().sceneSettings),wt("Plan view \xB7 edit rooms, walls, floors and objects");return}let Wn=L==="default"?Uh(at):Rt()?jp(ee):{preset:L};U=A?A.setView(Wn):Wn,M(),A&&wt(Rt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function k(){Y.cancel(),A?.dispose(),A=void 0,I=void 0,L="plan",Tt(),r.value=L,n.hidden=!0,x.sync(!1,e.getProject().sceneSettings),lt(),m.style.display="none",y.style.display="none",_&&(_.textContent=v),s.classList.remove("scene-3d"),p.style.display="none",O(),Ut(!1),wt("3D view is unavailable on this screen. Plan view is ready.")}function M(){if(nt)return;let Pt=e.getProject();if(J(Pt.items),!vt()){x.sync(!1,Pt.sceneSettings),Ut();return}let Yt=JSON.stringify(Pt);try{if(!A||Yt!==I){Zt(),A&&(U=A.getView()),A?.dispose(),A=void 0,b=Pt,A=yg(n,b),A.setView(U),I=Yt,S.clear(),m.replaceChildren();for(let ee of b.items.filter(re=>re.type==="cameraThumbnail"||re.type.startsWith("ui"))){let re=i.createElement("button");re.type="button",re.className="scene-placeholder",re.textContent=ee.name||(ee.type==="cameraThumbnail"?"Camera":"Interface"),re.setAttribute("aria-label",`Select ${re.textContent}`),Object.assign(re.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),re.addEventListener("pointerdown",Ie=>rt(Ie,ee.id)),re.addEventListener("click",Ie=>{!Rt()&&Ie.detail===0&&(e.selectItem(ee.id),Kt())}),S.set(ee.id,re),m.append(re)}}O(),Ut(!1),Kt()}catch{k()}}function w(Pt){!A||!vt()||(st(),Zt(),A.setView(Pt(A.getView())),U=A.getView(),Kt())}let R=()=>M(),D=()=>{let Pt=e.getTool();vt()&&Pt!=="select"?pt("plan"):Rt()&&e.hasPlacement()?pt(B):vt()&&Kt()},N=()=>pt(r.value),V=()=>{t.cancelAnimationFrame(H),H=t.requestAnimationFrame(()=>Kt())},Y=vg(n,{getView:()=>Rt()?A?.getView():null,onChange:Pt=>{!A||!Rt()||(st(),U=A.setView(Pt),V())}}),rt=(Pt,Yt=null)=>{if(!vt()||Rt()||!A||Pt.button!==0||F)return;Pt.preventDefault(),Pt.stopPropagation();let ee=St(Pt);if(e.hasPlacement()){let pn=A.projectToPlan(ee.x,ee.y,e.getPlacementType(),{preferTabletop:!0});pn&&e.placeAt(pn.x,pn.y),M();return}let{width:re,height:Ie}=Mt(),Wn=new Map(b.items.map(pn=>[pn.id,A.anchor(pn.id)])),mi=Yt??A.pickGarage(ee.x,ee.y),Xn=mi?b.items.find(pn=>pn.id===mi):zw(b.items,ee,A.projectToPlan(ee.x,ee.y),Wn,re,Ie);if(e.selectItem(Xn?.id??null),!Xn){Kt();return}let Di=A.projectToPlan(ee.x,ee.y,Xn.type);Di&&(F={item:{...Xn},startScreen:ee,startPlan:Di,pointerId:Pt.pointerId},n.setPointerCapture(Pt.pointerId),Kt())},W=Pt=>{if(!vt()||Rt()||(Pt.stopPropagation(),!F||F.pointerId!==Pt.pointerId||!A))return;let Yt=St(Pt);if(!F.moved&&Math.hypot(Yt.x-F.startScreen.x,Yt.y-F.startScreen.y)<Dw)return;let ee=A.projectToPlan(Yt.x,Yt.y,F.item.type);if(!ee)return;F.moved=!0;let re={x:F.item.x+ee.x-F.startPlan.x,y:F.item.y+ee.y-F.startPlan.y},Ie=e.moveItemWarning?.(F.item.id,re.x,re.y);if(Ie){Ie!==F.warning&&wt(Ie),F.warning=Ie;return}F.warning&&wt(`Moving ${F.item.name||"object"}`),F.warning=void 0,F.position=re,Kt({[F.item.id]:{position:F.position}})},ot=Pt=>{if(!vt()||Rt()||(Pt.stopPropagation(),!F||F.pointerId!==Pt.pointerId))return;let Yt=F;F=void 0;try{n.releasePointerCapture(Pt.pointerId)}catch{}Yt.moved&&Yt.position?(e.moveItem(Yt.item.id,Yt.position.x,Yt.position.y),M()):Kt()},C=Pt=>{Rt()||(F?.pointerId===Pt.pointerId&&Zt(),Pt.stopPropagation())},K=Pt=>{!vt()||Rt()||(Pt.preventDefault(),Pt.stopPropagation(),w(Yt=>({...Yt,zoom:Yt.zoom*(Pt.deltaY<0?1.1:1/1.1)})))},q=Pt=>{Rt()&&Pt.target===n&&(Pt.key==="Delete"||Pt.key==="Backspace")&&(Pt.preventDefault(),Pt.stopImmediatePropagation()),Pt.key==="Escape"&&F&&(Pt.preventDefault(),Pt.stopImmediatePropagation(),Zt())},mt=Pt=>{Pt.preventDefault(),k()},bt=()=>w(Pt=>({...Pt,azimuth:Pt.azimuth-15})),gt=()=>w(Pt=>({...Pt,azimuth:Pt.azimuth+15})),It=()=>w(Pt=>({...Pt,zoom:Pt.zoom/1.2})),Dt=()=>w(Pt=>({...Pt,zoom:Pt.zoom*1.2})),ne=()=>pt("top"),Ht=()=>{Ut(!1),Kt()},ge=()=>{Ft(),Ut(),Tt()};i.addEventListener("visibilitychange",ge),f?.addEventListener("change",Ht);async function ye(){Ct=!0,O();try{at=await h.read(),!nt&&!it&&pt("default",{initial:!0})}catch{nt||T("Saved view unavailable")}finally{Ct=!1,nt||O()}}async function we(Pt){if(!(!A||!vt()||Ct)){Ct=!0,T("Saving view\u2026"),O();try{if(await h.write(Pt),nt)return;at=Pt,Pt||pt("default"),T(Pt?"Default view saved":"Top down is the default")}catch{nt||T("Could not save default view")}finally{Ct=!1,nt||O()}}}let ze=()=>{Rt()&&A&&we(A.getView())},Ue=()=>we(null);o.left?.addEventListener("click",bt),o.right?.addEventListener("click",gt),o.out?.addEventListener("click",It),o.in?.addEventListener("click",Dt),c?.addEventListener("click",ne),l?.addEventListener("click",ze),u?.addEventListener("click",Ue),r.addEventListener("change",N),n.addEventListener("pointerdown",rt),n.addEventListener("pointermove",W),n.addEventListener("pointerup",ot),n.addEventListener("pointercancel",C),n.addEventListener("lostpointercapture",C),n.addEventListener("wheel",K,{passive:!1}),n.addEventListener("webglcontextlost",mt),t.addEventListener("keydown",q,!0),t.addEventListener("roomcraft-editor-change",R),t.addEventListener("roomcraft-editor-tool",D);let Xe=new t.ResizeObserver(V);Xe.observe(s),pt(L,{initial:!0});try{(t.location.hash==="#scene-settings"||g&&t.parent.location.hash==="#scene-settings")&&x.open()}catch{}return ye(),{getView:()=>A?.getView()??{...U},setView:pt,dispose(){nt=!0,Tt(),Ft(),i.removeEventListener("visibilitychange",ge),f?.removeEventListener("change",Ht),Zt(),Y.dispose(),L="plan",lt(),Xe.disconnect(),t.cancelAnimationFrame(H),A?.dispose(),A=void 0,p.remove(),m.remove(),y.remove(),x.dispose(),_&&(_.textContent=v),o.left?.removeEventListener("click",bt),o.right?.removeEventListener("click",gt),o.out?.removeEventListener("click",It),o.in?.removeEventListener("click",Dt),c?.removeEventListener("click",ne),l?.removeEventListener("click",ze),u?.removeEventListener("click",Ue),r.removeEventListener("change",N),n.removeEventListener("pointerdown",rt),n.removeEventListener("pointermove",W),n.removeEventListener("pointerup",ot),n.removeEventListener("pointercancel",C),n.removeEventListener("lostpointercapture",C),n.removeEventListener("wheel",K),n.removeEventListener("webglcontextlost",mt),t.removeEventListener("keydown",q,!0),t.removeEventListener("roomcraft-editor-change",R),t.removeEventListener("roomcraft-editor-tool",D)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=cf,Hw(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
