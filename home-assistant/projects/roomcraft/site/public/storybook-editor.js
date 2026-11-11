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
"use strict";(()=>{var fg=Object.create;var Jh=Object.defineProperty;var dg=Object.getOwnPropertyDescriptor;var pg=Object.getOwnPropertyNames;var mg=Object.getPrototypeOf,gg=Object.prototype.hasOwnProperty;var xg=(i,t)=>()=>{try{return t||i((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var yg=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of pg(t))!gg.call(i,s)&&s!==e&&Jh(i,s,{get:()=>t[s],enumerable:!(n=dg(t,s))||n.enumerable});return i};var Fl=(i,t,e)=>(e=i!=null?fg(mg(i)):{},yg(t||!i||!i.__esModule?Jh(e,"default",{value:i,enumerable:!0}):e,i));var cl=xg((uh,hh)=>{(function(i,t){typeof uh=="object"&&typeof hh<"u"?hh.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(uh,(function(){"use strict";/**
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
    ***************************************************************************** */function i(k,M){var S={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},A,N,D,Q;return Q={next:Z(0),throw:Z(1),return:Z(2)},typeof Symbol=="function"&&(Q[Symbol.iterator]=function(){return this}),Q;function Z(W){return function(ot){return at([W,ot])}}function at(W){if(A)throw new TypeError("Generator is already executing.");for(;S;)try{if(A=1,N&&(D=W[0]&2?N.return:W[0]?N.throw||((D=N.return)&&D.call(N),0):N.next)&&!(D=D.call(N,W[1])).done)return D;switch(N=0,D&&(W=[W[0]&2,D.value]),W[0]){case 0:case 1:D=W;break;case 4:return S.label++,{value:W[1],done:!1};case 5:S.label++,N=W[1],W=[0];continue;case 7:W=S.ops.pop(),S.trys.pop();continue;default:if(D=S.trys,!(D=D.length>0&&D[D.length-1])&&(W[0]===6||W[0]===2)){S=0;continue}if(W[0]===3&&(!D||W[1]>D[0]&&W[1]<D[3])){S.label=W[1];break}if(W[0]===6&&S.label<D[1]){S.label=D[1],D=W;break}if(D&&S.label<D[2]){S.label=D[2],S.ops.push(W);break}D[2]&&S.ops.pop(),S.trys.pop();continue}W=M.call(k,S)}catch(ot){W=[6,ot],N=0}finally{A=D=0}if(W[0]&5)throw W[1];return{value:W[0]?W[1]:void 0,done:!0}}}var t=(function(){function k(M,S){this.next=null,this.key=M,this.data=S,this.left=null,this.right=null}return k})();function e(k,M){return k>M?1:k<M?-1:0}function n(k,M,S){for(var A=new t(null,null),N=A,D=A;;){var Q=S(k,M.key);if(Q<0){if(M.left===null)break;if(S(k,M.left.key)<0){var Z=M.left;if(M.left=Z.right,Z.right=M,M=Z,M.left===null)break}D.left=M,D=M,M=M.left}else if(Q>0){if(M.right===null)break;if(S(k,M.right.key)>0){var Z=M.right;if(M.right=Z.left,Z.left=M,M=Z,M.right===null)break}N.right=M,N=M,M=M.right}else break}return N.right=M.left,D.left=M.right,M.left=A.right,M.right=A.left,M}function s(k,M,S,A){var N=new t(k,M);if(S===null)return N.left=N.right=null,N;S=n(k,S,A);var D=A(k,S.key);return D<0?(N.left=S.left,N.right=S,S.left=null):D>=0&&(N.right=S.right,N.left=S,S.right=null),N}function r(k,M,S){var A=null,N=null;if(M){M=n(k,M,S);var D=S(M.key,k);D===0?(A=M.left,N=M.right):D<0?(N=M.right,M.right=null,A=M):(A=M.left,M.left=null,N=M)}return{left:A,right:N}}function o(k,M,S){return M===null?k:(k===null||(M=n(k.key,M,S),M.left=k),M)}function a(k,M,S,A,N){if(k){A(""+M+(S?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+N(k)+`
`);var D=M+(S?"    ":"\u2502   ");k.left&&a(k.left,D,!1,A,N),k.right&&a(k.right,D,!0,A,N)}}var c=(function(){function k(M){M===void 0&&(M=e),this._root=null,this._size=0,this._comparator=M}return k.prototype.insert=function(M,S){return this._size++,this._root=s(M,S,this._root,this._comparator)},k.prototype.add=function(M,S){var A=new t(M,S);this._root===null&&(A.left=A.right=null,this._size++,this._root=A);var N=this._comparator,D=n(M,this._root,N),Q=N(M,D.key);return Q===0?this._root=D:(Q<0?(A.left=D.left,A.right=D,D.left=null):Q>0&&(A.right=D.right,A.left=D,D.right=null),this._size++,this._root=A),this._root},k.prototype.remove=function(M){this._root=this._remove(M,this._root,this._comparator)},k.prototype._remove=function(M,S,A){var N;if(S===null)return null;S=n(M,S,A);var D=A(M,S.key);return D===0?(S.left===null?N=S.right:(N=n(M,S.left,A),N.right=S.right),this._size--,N):S},k.prototype.pop=function(){var M=this._root;if(M){for(;M.left;)M=M.left;return this._root=n(M.key,this._root,this._comparator),this._root=this._remove(M.key,this._root,this._comparator),{key:M.key,data:M.data}}return null},k.prototype.findStatic=function(M){for(var S=this._root,A=this._comparator;S;){var N=A(M,S.key);if(N===0)return S;N<0?S=S.left:S=S.right}return null},k.prototype.find=function(M){return this._root&&(this._root=n(M,this._root,this._comparator),this._comparator(M,this._root.key)!==0)?null:this._root},k.prototype.contains=function(M){for(var S=this._root,A=this._comparator;S;){var N=A(M,S.key);if(N===0)return!0;N<0?S=S.left:S=S.right}return!1},k.prototype.forEach=function(M,S){for(var A=this._root,N=[],D=!1;!D;)A!==null?(N.push(A),A=A.left):N.length!==0?(A=N.pop(),M.call(S,A),A=A.right):D=!0;return this},k.prototype.range=function(M,S,A,N){for(var D=[],Q=this._comparator,Z=this._root,at;D.length!==0||Z;)if(Z)D.push(Z),Z=Z.left;else{if(Z=D.pop(),at=Q(Z.key,S),at>0)break;if(Q(Z.key,M)>=0&&A.call(N,Z))return this;Z=Z.right}return this},k.prototype.keys=function(){var M=[];return this.forEach(function(S){var A=S.key;return M.push(A)}),M},k.prototype.values=function(){var M=[];return this.forEach(function(S){var A=S.data;return M.push(A)}),M},k.prototype.min=function(){return this._root?this.minNode(this._root).key:null},k.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},k.prototype.minNode=function(M){if(M===void 0&&(M=this._root),M)for(;M.left;)M=M.left;return M},k.prototype.maxNode=function(M){if(M===void 0&&(M=this._root),M)for(;M.right;)M=M.right;return M},k.prototype.at=function(M){for(var S=this._root,A=!1,N=0,D=[];!A;)if(S)D.push(S),S=S.left;else if(D.length>0){if(S=D.pop(),N===M)return S;N++,S=S.right}else A=!0;return null},k.prototype.next=function(M){var S=this._root,A=null;if(M.right){for(A=M.right;A.left;)A=A.left;return A}for(var N=this._comparator;S;){var D=N(M.key,S.key);if(D===0)break;D<0?(A=S,S=S.left):S=S.right}return A},k.prototype.prev=function(M){var S=this._root,A=null;if(M.left!==null){for(A=M.left;A.right;)A=A.right;return A}for(var N=this._comparator;S;){var D=N(M.key,S.key);if(D===0)break;D<0?S=S.left:(A=S,S=S.right)}return A},k.prototype.clear=function(){return this._root=null,this._size=0,this},k.prototype.toList=function(){return d(this._root)},k.prototype.load=function(M,S,A){S===void 0&&(S=[]),A===void 0&&(A=!1);var N=M.length,D=this._comparator;if(A&&g(M,S,0,N-1,D),this._root===null)this._root=l(M,S,0,N),this._size=N;else{var Q=f(this.toList(),u(M,S),D);N=this._size+N,this._root=h({head:Q},0,N)}return this},k.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(k.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(k.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),k.prototype.toString=function(M){M===void 0&&(M=function(A){return String(A.key)});var S=[];return a(this._root,"",!0,function(A){return S.push(A)},M),S.join("")},k.prototype.update=function(M,S,A){var N=this._comparator,D=r(M,this._root,N),Q=D.left,Z=D.right;N(M,S)<0?Z=s(S,A,Z,N):Q=s(S,A,Q,N),this._root=o(Q,Z,N)},k.prototype.split=function(M){return r(M,this._root,this._comparator)},k.prototype[Symbol.iterator]=function(){var M,S,A;return i(this,function(N){switch(N.label){case 0:M=this._root,S=[],A=!1,N.label=1;case 1:return A?[3,6]:M===null?[3,2]:(S.push(M),M=M.left,[3,5]);case 2:return S.length===0?[3,4]:(M=S.pop(),[4,M]);case 3:return N.sent(),M=M.right,[3,5];case 4:A=!0,N.label=5;case 5:return[3,1];case 6:return[2]}})},k})();function l(k,M,S,A){var N=A-S;if(N>0){var D=S+Math.floor(N/2),Q=k[D],Z=M[D],at=new t(Q,Z);return at.left=l(k,M,S,D),at.right=l(k,M,D+1,A),at}return null}function u(k,M){for(var S=new t(null,null),A=S,N=0;N<k.length;N++)A=A.next=new t(k[N],M[N]);return A.next=null,S.next}function d(k){for(var M=k,S=[],A=!1,N=new t(null,null),D=N;!A;)M?(S.push(M),M=M.left):S.length>0?(M=D=D.next=S.pop(),M=M.right):A=!0;return D.next=null,N.next}function h(k,M,S){var A=S-M;if(A>0){var N=M+Math.floor(A/2),D=h(k,M,N),Q=k.head;return Q.left=D,k.head=k.head.next,Q.right=h(k,N+1,S),Q}return null}function f(k,M,S){for(var A=new t(null,null),N=A,D=k,Q=M;D!==null&&Q!==null;)S(D.key,Q.key)<0?(N.next=D,D=D.next):(N.next=Q,Q=Q.next),N=N.next;return D!==null?N.next=D:Q!==null&&(N.next=Q),A.next}function g(k,M,S,A,N){if(!(S>=A)){for(var D=k[S+A>>1],Q=S-1,Z=A+1;;){do Q++;while(N(k[Q],D)<0);do Z--;while(N(k[Z],D)>0);if(Q>=Z)break;var at=k[Q];k[Q]=k[Z],k[Z]=at,at=M[Q],M[Q]=M[Z],M[Z]=at}g(k,M,S,Z,N),g(k,M,Z+1,A,N)}}let x=(k,M)=>k.ll.x<=M.x&&M.x<=k.ur.x&&k.ll.y<=M.y&&M.y<=k.ur.y,p=(k,M)=>{if(M.ur.x<k.ll.x||k.ur.x<M.ll.x||M.ur.y<k.ll.y||k.ur.y<M.ll.y)return null;let S=k.ll.x<M.ll.x?M.ll.x:k.ll.x,A=k.ur.x<M.ur.x?k.ur.x:M.ur.x,N=k.ll.y<M.ll.y?M.ll.y:k.ll.y,D=k.ur.y<M.ur.y?k.ur.y:M.ur.y;return{ll:{x:S,y:N},ur:{x:A,y:D}}},m=Number.EPSILON;m===void 0&&(m=Math.pow(2,-52));let y=m*m,w=(k,M)=>{if(-m<k&&k<m&&-m<M&&M<m)return 0;let S=k-M;return S*S<y*k*M?0:k<M?-1:1};class v{constructor(){this.reset()}reset(){this.xRounder=new b,this.yRounder=new b}round(M,S){return{x:this.xRounder.round(M),y:this.yRounder.round(S)}}}class b{constructor(){this.tree=new c,this.round(0)}round(M){let S=this.tree.add(M),A=this.tree.prev(S);if(A!==null&&w(S.key,A.key)===0)return this.tree.remove(M),A.key;let N=this.tree.next(S);return N!==null&&w(S.key,N.key)===0?(this.tree.remove(M),N.key):M}}let E=new v,C=11102230246251565e-32,_=134217729,P=(3+8*C)*C;function F(k,M,S,A,N){let D,Q,Z,at,W=M[0],ot=A[0],R=0,j=0;ot>W==ot>-W?(D=W,W=M[++R]):(D=ot,ot=A[++j]);let J=0;if(R<k&&j<S)for(ot>W==ot>-W?(Q=W+D,Z=D-(Q-W),W=M[++R]):(Q=ot+D,Z=D-(Q-ot),ot=A[++j]),D=Q,Z!==0&&(N[J++]=Z);R<k&&j<S;)ot>W==ot>-W?(Q=D+W,at=Q-D,Z=D-(Q-at)+(W-at),W=M[++R]):(Q=D+ot,at=Q-D,Z=D-(Q-at)+(ot-at),ot=A[++j]),D=Q,Z!==0&&(N[J++]=Z);for(;R<k;)Q=D+W,at=Q-D,Z=D-(Q-at)+(W-at),W=M[++R],D=Q,Z!==0&&(N[J++]=Z);for(;j<S;)Q=D+ot,at=Q-D,Z=D-(Q-at)+(ot-at),ot=A[++j],D=Q,Z!==0&&(N[J++]=Z);return(D!==0||J===0)&&(N[J++]=D),J}function L(k,M){let S=M[0];for(let A=1;A<k;A++)S+=M[A];return S}function U(k){return new Float64Array(k)}let V=(3+16*C)*C,O=(2+12*C)*C,K=(9+64*C)*C*C,z=U(4),tt=U(8),H=U(12),X=U(16),Y=U(4);function $(k,M,S,A,N,D,Q){let Z,at,W,ot,R,j,J,dt,xt,mt,At,Ct,te,kt,ge,fe,Ge,Te,He=k-N,We=S-N,wt=M-D,Gt=A-D;kt=He*Gt,j=_*He,J=j-(j-He),dt=He-J,j=_*Gt,xt=j-(j-Gt),mt=Gt-xt,ge=dt*mt-(kt-J*xt-dt*xt-J*mt),fe=wt*We,j=_*wt,J=j-(j-wt),dt=wt-J,j=_*We,xt=j-(j-We),mt=We-xt,Ge=dt*mt-(fe-J*xt-dt*xt-J*mt),At=ge-Ge,R=ge-At,z[0]=ge-(At+R)+(R-Ge),Ct=kt+At,R=Ct-kt,te=kt-(Ct-R)+(At-R),At=te-fe,R=te-At,z[1]=te-(At+R)+(R-fe),Te=Ct+At,R=Te-Ct,z[2]=Ct-(Te-R)+(At-R),z[3]=Te;let ee=L(4,z),ne=O*Q;if(ee>=ne||-ee>=ne||(R=k-He,Z=k-(He+R)+(R-N),R=S-We,W=S-(We+R)+(R-N),R=M-wt,at=M-(wt+R)+(R-D),R=A-Gt,ot=A-(Gt+R)+(R-D),Z===0&&at===0&&W===0&&ot===0)||(ne=K*Q+P*Math.abs(ee),ee+=He*ot+Gt*Z-(wt*W+We*at),ee>=ne||-ee>=ne))return ee;kt=Z*Gt,j=_*Z,J=j-(j-Z),dt=Z-J,j=_*Gt,xt=j-(j-Gt),mt=Gt-xt,ge=dt*mt-(kt-J*xt-dt*xt-J*mt),fe=at*We,j=_*at,J=j-(j-at),dt=at-J,j=_*We,xt=j-(j-We),mt=We-xt,Ge=dt*mt-(fe-J*xt-dt*xt-J*mt),At=ge-Ge,R=ge-At,Y[0]=ge-(At+R)+(R-Ge),Ct=kt+At,R=Ct-kt,te=kt-(Ct-R)+(At-R),At=te-fe,R=te-At,Y[1]=te-(At+R)+(R-fe),Te=Ct+At,R=Te-Ct,Y[2]=Ct-(Te-R)+(At-R),Y[3]=Te;let Ce=F(4,z,4,Y,tt);kt=He*ot,j=_*He,J=j-(j-He),dt=He-J,j=_*ot,xt=j-(j-ot),mt=ot-xt,ge=dt*mt-(kt-J*xt-dt*xt-J*mt),fe=wt*W,j=_*wt,J=j-(j-wt),dt=wt-J,j=_*W,xt=j-(j-W),mt=W-xt,Ge=dt*mt-(fe-J*xt-dt*xt-J*mt),At=ge-Ge,R=ge-At,Y[0]=ge-(At+R)+(R-Ge),Ct=kt+At,R=Ct-kt,te=kt-(Ct-R)+(At-R),At=te-fe,R=te-At,Y[1]=te-(At+R)+(R-fe),Te=Ct+At,R=Te-Ct,Y[2]=Ct-(Te-R)+(At-R),Y[3]=Te;let Ln=F(Ce,tt,4,Y,H);kt=Z*ot,j=_*Z,J=j-(j-Z),dt=Z-J,j=_*ot,xt=j-(j-ot),mt=ot-xt,ge=dt*mt-(kt-J*xt-dt*xt-J*mt),fe=at*W,j=_*at,J=j-(j-at),dt=at-J,j=_*W,xt=j-(j-W),mt=W-xt,Ge=dt*mt-(fe-J*xt-dt*xt-J*mt),At=ge-Ge,R=ge-At,Y[0]=ge-(At+R)+(R-Ge),Ct=kt+At,R=Ct-kt,te=kt-(Ct-R)+(At-R),At=te-fe,R=te-At,Y[1]=te-(At+R)+(R-fe),Te=Ct+At,R=Te-Ct,Y[2]=Ct-(Te-R)+(At-R),Y[3]=Te;let jn=F(Ln,H,4,Y,X);return X[jn-1]}function rt(k,M,S,A,N,D){let Q=(M-D)*(S-N),Z=(k-N)*(A-D),at=Q-Z,W=Math.abs(Q+Z);return Math.abs(at)>=V*W?at:-$(k,M,S,A,N,D,W)}let yt=(k,M)=>k.x*M.y-k.y*M.x,_t=(k,M)=>k.x*M.x+k.y*M.y,vt=(k,M,S)=>{let A=rt(k.x,k.y,M.x,M.y,S.x,S.y);return A>0?-1:A<0?1:0},Pt=k=>Math.sqrt(_t(k,k)),ct=(k,M,S)=>{let A={x:M.x-k.x,y:M.y-k.y},N={x:S.x-k.x,y:S.y-k.y};return yt(N,A)/Pt(N)/Pt(A)},ht=(k,M,S)=>{let A={x:M.x-k.x,y:M.y-k.y},N={x:S.x-k.x,y:S.y-k.y};return _t(N,A)/Pt(N)/Pt(A)},Tt=(k,M,S)=>M.y===0?null:{x:k.x+M.x/M.y*(S-k.y),y:S},Ot=(k,M,S)=>M.x===0?null:{x:S,y:k.y+M.y/M.x*(S-k.x)},Lt=(k,M,S,A)=>{if(M.x===0)return Ot(S,A,k.x);if(A.x===0)return Ot(k,M,S.x);if(M.y===0)return Tt(S,A,k.y);if(A.y===0)return Tt(k,M,S.y);let N=yt(M,A);if(N==0)return null;let D={x:S.x-k.x,y:S.y-k.y},Q=yt(D,M)/N,Z=yt(D,A)/N,at=k.x+Z*M.x,W=S.x+Q*A.x,ot=k.y+Z*M.y,R=S.y+Q*A.y,j=(at+W)/2,J=(ot+R)/2;return{x:j,y:J}};class It{static compare(M,S){let A=It.comparePoints(M.point,S.point);return A!==0?A:(M.point!==S.point&&M.link(S),M.isLeft!==S.isLeft?M.isLeft?1:-1:pt.compare(M.segment,S.segment))}static comparePoints(M,S){return M.x<S.x?-1:M.x>S.x?1:M.y<S.y?-1:M.y>S.y?1:0}constructor(M,S){M.events===void 0?M.events=[this]:M.events.push(this),this.point=M,this.isLeft=S}link(M){if(M.point===this.point)throw new Error("Tried to link already linked events");let S=M.point.events;for(let A=0,N=S.length;A<N;A++){let D=S[A];this.point.events.push(D),D.point=this.point}this.checkForConsuming()}checkForConsuming(){let M=this.point.events.length;for(let S=0;S<M;S++){let A=this.point.events[S];if(A.segment.consumedBy===void 0)for(let N=S+1;N<M;N++){let D=this.point.events[N];D.consumedBy===void 0&&A.otherSE.point.events===D.otherSE.point.events&&A.segment.consume(D.segment)}}}getAvailableLinkedEvents(){let M=[];for(let S=0,A=this.point.events.length;S<A;S++){let N=this.point.events[S];N!==this&&!N.segment.ringOut&&N.segment.isInResult()&&M.push(N)}return M}getLeftmostComparator(M){let S=new Map,A=N=>{let D=N.otherSE;S.set(N,{sine:ct(this.point,M.point,D.point),cosine:ht(this.point,M.point,D.point)})};return(N,D)=>{S.has(N)||A(N),S.has(D)||A(D);let{sine:Q,cosine:Z}=S.get(N),{sine:at,cosine:W}=S.get(D);return Q>=0&&at>=0?Z<W?1:Z>W?-1:0:Q<0&&at<0?Z<W?-1:Z>W?1:0:at<Q?-1:at>Q?1:0}}}let Jt=0;class pt{static compare(M,S){let A=M.leftSE.point.x,N=S.leftSE.point.x,D=M.rightSE.point.x,Q=S.rightSE.point.x;if(Q<A)return 1;if(D<N)return-1;let Z=M.leftSE.point.y,at=S.leftSE.point.y,W=M.rightSE.point.y,ot=S.rightSE.point.y;if(A<N){if(at<Z&&at<W)return 1;if(at>Z&&at>W)return-1;let R=M.comparePoint(S.leftSE.point);if(R<0)return 1;if(R>0)return-1;let j=S.comparePoint(M.rightSE.point);return j!==0?j:-1}if(A>N){if(Z<at&&Z<ot)return-1;if(Z>at&&Z>ot)return 1;let R=S.comparePoint(M.leftSE.point);if(R!==0)return R;let j=M.comparePoint(S.rightSE.point);return j<0?1:j>0?-1:1}if(Z<at)return-1;if(Z>at)return 1;if(D<Q){let R=S.comparePoint(M.rightSE.point);if(R!==0)return R}if(D>Q){let R=M.comparePoint(S.rightSE.point);if(R<0)return 1;if(R>0)return-1}if(D!==Q){let R=W-Z,j=D-A,J=ot-at,dt=Q-N;if(R>j&&J<dt)return 1;if(R<j&&J>dt)return-1}return D>Q?1:D<Q||W<ot?-1:W>ot?1:M.id<S.id?-1:M.id>S.id?1:0}constructor(M,S,A,N){this.id=++Jt,this.leftSE=M,M.segment=this,M.otherSE=S,this.rightSE=S,S.segment=this,S.otherSE=M,this.rings=A,this.windings=N}static fromRing(M,S,A){let N,D,Q,Z=It.comparePoints(M,S);if(Z<0)N=M,D=S,Q=1;else if(Z>0)N=S,D=M,Q=-1;else throw new Error(`Tried to create degenerate segment at [${M.x}, ${M.y}]`);let at=new It(N,!0),W=new It(D,!1);return new pt(at,W,[A],[Q])}replaceRightSE(M){this.rightSE=M,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let M=this.leftSE.point.y,S=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:M<S?M:S},ur:{x:this.rightSE.point.x,y:M>S?M:S}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(M){return M.x===this.leftSE.point.x&&M.y===this.leftSE.point.y||M.x===this.rightSE.point.x&&M.y===this.rightSE.point.y}comparePoint(M){if(this.isAnEndpoint(M))return 0;let S=this.leftSE.point,A=this.rightSE.point,N=this.vector();if(S.x===A.x)return M.x===S.x?0:M.x<S.x?1:-1;let D=(M.y-S.y)/N.y,Q=S.x+D*N.x;if(M.x===Q)return 0;let Z=(M.x-S.x)/N.x,at=S.y+Z*N.y;return M.y===at?0:M.y<at?-1:1}getIntersection(M){let S=this.bbox(),A=M.bbox(),N=p(S,A);if(N===null)return null;let D=this.leftSE.point,Q=this.rightSE.point,Z=M.leftSE.point,at=M.rightSE.point,W=x(S,Z)&&this.comparePoint(Z)===0,ot=x(A,D)&&M.comparePoint(D)===0,R=x(S,at)&&this.comparePoint(at)===0,j=x(A,Q)&&M.comparePoint(Q)===0;if(ot&&W)return j&&!R?Q:!j&&R?at:null;if(ot)return R&&D.x===at.x&&D.y===at.y?null:D;if(W)return j&&Q.x===Z.x&&Q.y===Z.y?null:Z;if(j&&R)return null;if(j)return Q;if(R)return at;let J=Lt(D,this.vector(),Z,M.vector());return J===null||!x(N,J)?null:E.round(J.x,J.y)}split(M){let S=[],A=M.events!==void 0,N=new It(M,!0),D=new It(M,!1),Q=this.rightSE;this.replaceRightSE(D),S.push(D),S.push(N);let Z=new pt(N,Q,this.rings.slice(),this.windings.slice());return It.comparePoints(Z.leftSE.point,Z.rightSE.point)>0&&Z.swapEvents(),It.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),A&&(N.checkForConsuming(),D.checkForConsuming()),S}swapEvents(){let M=this.rightSE;this.rightSE=this.leftSE,this.leftSE=M,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let S=0,A=this.windings.length;S<A;S++)this.windings[S]*=-1}consume(M){let S=this,A=M;for(;S.consumedBy;)S=S.consumedBy;for(;A.consumedBy;)A=A.consumedBy;let N=pt.compare(S,A);if(N!==0){if(N>0){let D=S;S=A,A=D}if(S.prev===A){let D=S;S=A,A=D}for(let D=0,Q=A.rings.length;D<Q;D++){let Z=A.rings[D],at=A.windings[D],W=S.rings.indexOf(Z);W===-1?(S.rings.push(Z),S.windings.push(at)):S.windings[W]+=at}A.rings=null,A.windings=null,A.consumedBy=S,A.leftSE.consumedBy=S.leftSE,A.rightSE.consumedBy=S.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let M=this.prev.consumedBy||this.prev;this._beforeState=M.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let M=this.beforeState();this._afterState={rings:M.rings.slice(0),windings:M.windings.slice(0),multiPolys:[]};let S=this._afterState.rings,A=this._afterState.windings,N=this._afterState.multiPolys;for(let Z=0,at=this.rings.length;Z<at;Z++){let W=this.rings[Z],ot=this.windings[Z],R=S.indexOf(W);R===-1?(S.push(W),A.push(ot)):A[R]+=ot}let D=[],Q=[];for(let Z=0,at=S.length;Z<at;Z++){if(A[Z]===0)continue;let W=S[Z],ot=W.poly;if(Q.indexOf(ot)===-1)if(W.isExterior)D.push(ot);else{Q.indexOf(ot)===-1&&Q.push(ot);let R=D.indexOf(W.poly);R!==-1&&D.splice(R,1)}}for(let Z=0,at=D.length;Z<at;Z++){let W=D[Z].multiPoly;N.indexOf(W)===-1&&N.push(W)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let M=this.beforeState().multiPolys,S=this.afterState().multiPolys;switch($t.type){case"union":{let A=M.length===0,N=S.length===0;this._isInResult=A!==N;break}case"intersection":{let A,N;M.length<S.length?(A=M.length,N=S.length):(A=S.length,N=M.length),this._isInResult=N===$t.numMultiPolys&&A<N;break}case"xor":{let A=Math.abs(M.length-S.length);this._isInResult=A%2===1;break}case"difference":{let A=N=>N.length===1&&N[0].isSubject;this._isInResult=A(M)!==A(S);break}default:throw new Error(`Unrecognized operation type found ${$t.type}`)}return this._isInResult}}class bt{constructor(M,S,A){if(!Array.isArray(M)||M.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=S,this.isExterior=A,this.segments=[],typeof M[0][0]!="number"||typeof M[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let N=E.round(M[0][0],M[0][1]);this.bbox={ll:{x:N.x,y:N.y},ur:{x:N.x,y:N.y}};let D=N;for(let Q=1,Z=M.length;Q<Z;Q++){if(typeof M[Q][0]!="number"||typeof M[Q][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let at=E.round(M[Q][0],M[Q][1]);at.x===D.x&&at.y===D.y||(this.segments.push(pt.fromRing(D,at,this)),at.x<this.bbox.ll.x&&(this.bbox.ll.x=at.x),at.y<this.bbox.ll.y&&(this.bbox.ll.y=at.y),at.x>this.bbox.ur.x&&(this.bbox.ur.x=at.x),at.y>this.bbox.ur.y&&(this.bbox.ur.y=at.y),D=at)}(N.x!==D.x||N.y!==D.y)&&this.segments.push(pt.fromRing(D,N,this))}getSweepEvents(){let M=[];for(let S=0,A=this.segments.length;S<A;S++){let N=this.segments[S];M.push(N.leftSE),M.push(N.rightSE)}return M}}class Mt{constructor(M,S){if(!Array.isArray(M))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new bt(M[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let A=1,N=M.length;A<N;A++){let D=new bt(M[A],this,!1);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.interiorRings.push(D)}this.multiPoly=S}getSweepEvents(){let M=this.exteriorRing.getSweepEvents();for(let S=0,A=this.interiorRings.length;S<A;S++){let N=this.interiorRings[S].getSweepEvents();for(let D=0,Q=N.length;D<Q;D++)M.push(N[D])}return M}}class St{constructor(M,S){if(!Array.isArray(M))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof M[0][0][0]=="number"&&(M=[M])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let A=0,N=M.length;A<N;A++){let D=new Mt(M[A],this);D.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=D.bbox.ll.x),D.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=D.bbox.ll.y),D.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=D.bbox.ur.x),D.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=D.bbox.ur.y),this.polys.push(D)}this.isSubject=S}getSweepEvents(){let M=[];for(let S=0,A=this.polys.length;S<A;S++){let N=this.polys[S].getSweepEvents();for(let D=0,Q=N.length;D<Q;D++)M.push(N[D])}return M}}class Et{static factory(M){let S=[];for(let A=0,N=M.length;A<N;A++){let D=M[A];if(!D.isInResult()||D.ringOut)continue;let Q=null,Z=D.leftSE,at=D.rightSE,W=[Z],ot=Z.point,R=[];for(;Q=Z,Z=at,W.push(Z),Z.point!==ot;)for(;;){let j=Z.getAvailableLinkedEvents();if(j.length===0){let xt=W[0].point,mt=W[W.length-1].point;throw new Error(`Unable to complete output ring starting at [${xt.x}, ${xt.y}]. Last matching segment found ends at [${mt.x}, ${mt.y}].`)}if(j.length===1){at=j[0].otherSE;break}let J=null;for(let xt=0,mt=R.length;xt<mt;xt++)if(R[xt].point===Z.point){J=xt;break}if(J!==null){let xt=R.splice(J)[0],mt=W.splice(xt.index);mt.unshift(mt[0].otherSE),S.push(new Et(mt.reverse()));continue}R.push({index:W.length,point:Z.point});let dt=Z.getLeftmostComparator(Q);at=j.sort(dt)[0].otherSE;break}S.push(new Et(W))}return S}constructor(M){this.events=M;for(let S=0,A=M.length;S<A;S++)M[S].segment.ringOut=this;this.poly=null}getGeom(){let M=this.events[0].point,S=[M];for(let W=1,ot=this.events.length-1;W<ot;W++){let R=this.events[W].point,j=this.events[W+1].point;vt(R,M,j)!==0&&(S.push(R),M=R)}if(S.length===1)return null;let A=S[0],N=S[1];vt(A,M,N)===0&&S.shift(),S.push(S[0]);let D=this.isExteriorRing()?1:-1,Q=this.isExteriorRing()?0:S.length-1,Z=this.isExteriorRing()?S.length:-1,at=[];for(let W=Q;W!=Z;W+=D)at.push([S[W].x,S[W].y]);return at}isExteriorRing(){if(this._isExteriorRing===void 0){let M=this.enclosingRing();this._isExteriorRing=M?!M.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let M=this.events[0];for(let N=1,D=this.events.length;N<D;N++){let Q=this.events[N];It.compare(M,Q)>0&&(M=Q)}let S=M.segment.prevInResult(),A=S?S.prevInResult():null;for(;;){if(!S)return null;if(!A)return S.ringOut;if(A.ringOut!==S.ringOut)return A.ringOut.enclosingRing()!==S.ringOut?S.ringOut:S.ringOut.enclosingRing();S=A.prevInResult(),A=S?S.prevInResult():null}}}class Dt{constructor(M){this.exteriorRing=M,M.poly=this,this.interiorRings=[]}addInterior(M){this.interiorRings.push(M),M.poly=this}getGeom(){let M=[this.exteriorRing.getGeom()];if(M[0]===null)return null;for(let S=0,A=this.interiorRings.length;S<A;S++){let N=this.interiorRings[S].getGeom();N!==null&&M.push(N)}return M}}class Bt{constructor(M){this.rings=M,this.polys=this._composePolys(M)}getGeom(){let M=[];for(let S=0,A=this.polys.length;S<A;S++){let N=this.polys[S].getGeom();N!==null&&M.push(N)}return M}_composePolys(M){let S=[];for(let A=0,N=M.length;A<N;A++){let D=M[A];if(!D.poly)if(D.isExteriorRing())S.push(new Dt(D));else{let Q=D.enclosingRing();Q.poly||S.push(new Dt(Q)),Q.poly.addInterior(D)}}return S}}class zt{constructor(M){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:pt.compare;this.queue=M,this.tree=new c(S),this.segments=[]}process(M){let S=M.segment,A=[];if(M.consumedBy)return M.isLeft?this.queue.remove(M.otherSE):this.tree.remove(S),A;let N=M.isLeft?this.tree.add(S):this.tree.find(S);if(!N)throw new Error(`Unable to find segment #${S.id} [${S.leftSE.point.x}, ${S.leftSE.point.y}] -> [${S.rightSE.point.x}, ${S.rightSE.point.y}] in SweepLine tree.`);let D=N,Q=N,Z,at;for(;Z===void 0;)D=this.tree.prev(D),D===null?Z=null:D.key.consumedBy===void 0&&(Z=D.key);for(;at===void 0;)Q=this.tree.next(Q),Q===null?at=null:Q.key.consumedBy===void 0&&(at=Q.key);if(M.isLeft){let W=null;if(Z){let R=Z.getIntersection(S);if(R!==null&&(S.isAnEndpoint(R)||(W=R),!Z.isAnEndpoint(R))){let j=this._splitSafely(Z,R);for(let J=0,dt=j.length;J<dt;J++)A.push(j[J])}}let ot=null;if(at){let R=at.getIntersection(S);if(R!==null&&(S.isAnEndpoint(R)||(ot=R),!at.isAnEndpoint(R))){let j=this._splitSafely(at,R);for(let J=0,dt=j.length;J<dt;J++)A.push(j[J])}}if(W!==null||ot!==null){let R=null;W===null?R=ot:ot===null?R=W:R=It.comparePoints(W,ot)<=0?W:ot,this.queue.remove(S.rightSE),A.push(S.rightSE);let j=S.split(R);for(let J=0,dt=j.length;J<dt;J++)A.push(j[J])}A.length>0?(this.tree.remove(S),A.push(M)):(this.segments.push(S),S.prev=Z)}else{if(Z&&at){let W=Z.getIntersection(at);if(W!==null){if(!Z.isAnEndpoint(W)){let ot=this._splitSafely(Z,W);for(let R=0,j=ot.length;R<j;R++)A.push(ot[R])}if(!at.isAnEndpoint(W)){let ot=this._splitSafely(at,W);for(let R=0,j=ot.length;R<j;R++)A.push(ot[R])}}}this.tree.remove(S)}return A}_splitSafely(M,S){this.tree.remove(M);let A=M.rightSE;this.queue.remove(A);let N=M.split(S);return N.push(A),M.consumedBy===void 0&&this.tree.add(M),N}}let jt=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,q=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class oe{run(M,S,A){$t.type=M,E.reset();let N=[new St(S,!0)];for(let R=0,j=A.length;R<j;R++)N.push(new St(A[R],!1));if($t.numMultiPolys=N.length,$t.type==="difference"){let R=N[0],j=1;for(;j<N.length;)p(N[j].bbox,R.bbox)!==null?j++:N.splice(j,1)}if($t.type==="intersection")for(let R=0,j=N.length;R<j;R++){let J=N[R];for(let dt=R+1,xt=N.length;dt<xt;dt++)if(p(J.bbox,N[dt].bbox)===null)return[]}let D=new c(It.compare);for(let R=0,j=N.length;R<j;R++){let J=N[R].getSweepEvents();for(let dt=0,xt=J.length;dt<xt;dt++)if(D.insert(J[dt]),D.size>jt)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let Q=new zt(D),Z=D.size,at=D.pop();for(;at;){let R=at.key;if(D.size===Z){let J=R.segment;throw new Error(`Unable to pop() ${R.isLeft?"left":"right"} SweepEvent [${R.point.x}, ${R.point.y}] from segment #${J.id} [${J.leftSE.point.x}, ${J.leftSE.point.y}] -> [${J.rightSE.point.x}, ${J.rightSE.point.y}] from queue.`)}if(D.size>jt)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(Q.segments.length>q)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let j=Q.process(R);for(let J=0,dt=j.length;J<dt;J++){let xt=j[J];xt.consumedBy===void 0&&D.insert(xt)}Z=D.size,at=D.pop()}E.reset();let W=Et.factory(Q.segments);return new Bt(W).getGeom()}}let $t=new oe;var ft={union:function(k){for(var M=arguments.length,S=new Array(M>1?M-1:0),A=1;A<M;A++)S[A-1]=arguments[A];return $t.run("union",k,S)},intersection:function(k){for(var M=arguments.length,S=new Array(M>1?M-1:0),A=1;A<M;A++)S[A-1]=arguments[A];return $t.run("intersection",k,S)},xor:function(k){for(var M=arguments.length,S=new Array(M>1?M-1:0),A=1;A<M;A++)S[A-1]=arguments[A];return $t.run("xor",k,S)},difference:function(k){for(var M=arguments.length,S=new Array(M>1?M-1:0),A=1;A<M;A++)S[A-1]=arguments[A];return $t.run("difference",k,S)}};return ft}))});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Of=0,Su=1,Bf=2;var Cs=1,kf=2,Mr=3,us=0,Sn=1,an=2,vi=0,Sr=1,Ao=2,Eu=3,wu=4,zf=5;var Is=100,Hf=101,Vf=102,Gf=103,Wf=104,Xf=200,Yf=201,qf=202,Zf=203,Tu=204,Au=205,Jf=206,$f=207,Kf=208,jf=209,Qf=210,td=211,ed=212,nd=213,id=214,Ca=0,Ia=1,Pa=2,or=3,La=4,Na=5,Da=6,Ua=7,fc=0,sd=1,rd=2,oi=0,Ru=1,Cu=2,Iu=3,Ro=4,Pu=5,Lu=6,Nu=7;var Du=300,hs=301,Ps=302,dc=303,pc=304,Co=306,Ss=1e3,pi=1001,Fa=1002,Qe=1003,od=1004;var Io=1005;var on=1006,mc=1007;var fs=1008;var In=1009,Uu=1010,Fu=1011,Er=1012,gc=1013,ai=1014,Zn=1015,ci=1016,xc=1017,yc=1018,wr=1020,Ou=35902,Bu=35899,ku=1021,zu=1022,Jn=1023,gi=1026,ds=1027,_c=1028,vc=1029,ps=1030,bc=1031;var Mc=1033,Po=33776,Lo=33777,No=33778,Do=33779,Sc=35840,Ec=35841,wc=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Ic=37488,Pc=37489,Uo=37490,Lc=37491,Nc=37808,Dc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,kc=37814,zc=37815,Hc=37816,Vc=37817,Gc=37818,Wc=37819,Xc=37820,Yc=37821,qc=36492,Zc=36494,Jc=36495,$c=36283,Kc=36284,Fo=36285,jc=36286;var $r=2300,Oa=2301,Aa=2302,lu=2303,uu=2400,hu=2401,fu=2402;var ad=3200;var Oo=0,cd=1,Bi="",qe="srgb",Kr="srgb-linear",jr="linear",Se="srgb";var Ra=7680;var ld=519,ud=512,hd=513,fd=514,Qc=515,dd=516,pd=517,tl=518,md=519,Hu=35044,kn=35048;var Vu="300 es",si=2e3,ar=2001;function _g(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){let i=Qr("canvas");return i.style.display="block",i}var $h={},cr=null;function to(...i){let t="THREE."+i.shift();cr?cr("log",t,...i):console.log(t,...i)}function xd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=xd(i);let t="THREE."+i.shift();if(cr)cr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=xd(i);let t="THREE."+i.shift();if(cr)cr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ms(...i){let t=i.join(" ");t in $h||($h[t]=!0,Qt(...i))}function yd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _d={[Ca]:Ia,[Pa]:Da,[La]:Ua,[or]:Na,[Ia]:Ca,[Da]:Pa,[Ua]:La,[Na]:or},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,Yr=Math.PI/180,lr=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Gu(i,t){return(i%t+t)%t}function bg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mg(i,t,e){return i!==t?(e-i)/(t-i):0}function qr(i,t,e){return(1-e)*i+e*t}function Sg(i,t,e,n){return qr(i,t,1-Math.exp(-e*n))}function Eg(i,t=1){return t-Math.abs(Gu(i,t*2)-t)}function wg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ag(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rg(i,t){return i+Math.random()*(t-i)}function Cg(i){return i*(.5-Math.random())}function Ig(i){i!==void 0&&(Kh=i);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pg(i){return i*Yr}function Lg(i){return i*lr}function Ng(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Dg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var se={DEG2RAD:Yr,RAD2DEG:lr,generateUUID:mi,clamp:le,euclideanModulo:Gu,mapLinear:bg,inverseLerp:Mg,lerp:qr,damp:Sg,pingpong:Eg,smoothstep:wg,smootherstep:Tg,randInt:Ag,randFloat:Rg,randFloatSpread:Cg,seededRandom:Ig,degToRad:Pg,radToDeg:Lg,isPowerOfTwo:Ng,ceilPowerOfTwo:Dg,floorPowerOfTwo:Ug,setQuaternionFromProperEuler:Fg,normalize:Ae,denormalize:ii},Rt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*x;p<0&&(h=-h,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),w=Math.sin(y);m=Math.sin(m*y)/w,a=Math.sin(a*y)/w,c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+x*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+x*a;let y=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=y,l*=y,u*=y,d*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new G,jh=new tn,ue=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],y=s[1],w=s[4],v=s[7],b=s[2],E=s[5],C=s[8];return r[0]=o*x+a*y+c*b,r[3]=o*p+a*w+c*E,r[6]=o*m+a*v+c*C,r[1]=l*x+u*y+d*b,r[4]=l*p+u*w+d*E,r[7]=l*m+u*v+d*C,r[2]=h*x+f*y+g*b,r[5]=h*p+f*w+g*E,r[8]=h*m+f*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(t,e)),this}rotate(t){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-t)),this}translate(t,e){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bl=new ue,Qh=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Og(){let i={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kr]:{primaries:t,whitePoint:n,transfer:jr,toXYZ:Qh,fromXYZ:tf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Qh,fromXYZ:tf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}var ye=Og();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,Ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gs===void 0&&(Gs=Qr("canvas")),Gs.width=t.width,Gs.height=t.height;let s=Gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bg=0,ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kl(s[o].image)):r.push(kl(s[o]))}else r=kl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var kg=0,zl=new G,Mn=class i extends xi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=on,o=fs,a=Jn,c=In,l=i.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=mi(),this.name="",this.source=new ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Du;Mn.DEFAULT_ANISOTROPY=1;var Ee=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,v=(f+1)/2,b=(m+1)/2,E=(u+h)/4,C=(d+x)/4,_=(g+p)/4;return w>v&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=C/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=_/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-x)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Mn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ur(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},eo=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ws.setFromMatrixColumn(t,0).length(),r=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){let h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zg,t,Hg)}lookAt(t,e,n){let s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Zi.crossVectors(n,Nn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Zi.crossVectors(n,Nn)),Zi.normalize(),ta.crossVectors(Nn,Zi),s[0]=Zi.x,s[4]=ta.x,s[8]=Nn.x,s[1]=Zi.y,s[5]=ta.y,s[9]=Nn.y,s[2]=Zi.z,s[6]=ta.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],w=n[7],v=n[11],b=n[15],E=s[0],C=s[4],_=s[8],P=s[12],F=s[1],L=s[5],U=s[9],V=s[13],O=s[2],K=s[6],z=s[10],tt=s[14],H=s[3],X=s[7],Y=s[11],$=s[15];return r[0]=o*E+a*F+c*O+l*H,r[4]=o*C+a*L+c*K+l*X,r[8]=o*_+a*U+c*z+l*Y,r[12]=o*P+a*V+c*tt+l*$,r[1]=u*E+d*F+h*O+f*H,r[5]=u*C+d*L+h*K+f*X,r[9]=u*_+d*U+h*z+f*Y,r[13]=u*P+d*V+h*tt+f*$,r[2]=g*E+x*F+p*O+m*H,r[6]=g*C+x*L+p*K+m*X,r[10]=g*_+x*U+p*z+m*Y,r[14]=g*P+x*V+p*tt+m*$,r[3]=y*E+w*F+v*O+b*H,r[7]=y*C+w*L+v*K+b*X,r[11]=y*_+w*U+v*z+b*Y,r[15]=y*P+w*V+v*tt+b*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],y=c*f-l*h,w=a*f-l*d,v=a*h-c*d,b=o*f-l*u,E=o*h-c*u,C=o*d-a*u;return e*(x*y-p*w+m*v)-n*(g*y-p*b+m*E)+s*(g*w-x*b+m*C)-r*(g*v-x*E+p*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=e*a-n*o,w=e*c-s*o,v=e*l-r*o,b=n*c-s*a,E=n*l-r*a,C=s*l-r*c,_=u*x-d*g,P=u*p-h*g,F=u*m-f*g,L=d*p-h*x,U=d*m-f*x,V=h*m-f*p,O=y*V-w*U+v*L+b*F-E*P+C*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/O;return t[0]=(a*V-c*U+l*L)*K,t[1]=(s*U-n*V-r*L)*K,t[2]=(x*C-p*E+m*b)*K,t[3]=(h*E-d*C-f*b)*K,t[4]=(c*F-o*V-l*P)*K,t[5]=(e*V-s*F+r*P)*K,t[6]=(p*v-g*C-m*w)*K,t[7]=(u*C-h*v+f*w)*K,t[8]=(o*U-a*F+l*_)*K,t[9]=(n*F-e*U-r*_)*K,t[10]=(g*E-x*v+m*y)*K,t[11]=(d*v-u*E-f*y)*K,t[12]=(a*P-o*L-c*_)*K,t[13]=(e*L-n*P+s*_)*K,t[14]=(x*w-g*b-p*y)*K,t[15]=(u*b-d*w+h*y)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,x=o*u,p=o*d,m=a*d,y=c*l,w=c*u,v=c*d,b=n.x,E=n.y,C=n.z;return s[0]=(1-(x+m))*b,s[1]=(f+v)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(h+m))*E,s[6]=(p+y)*E,s[7]=0,s[8]=(g+w)*C,s[9]=(p-y)*C,s[10]=(1-(h+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),c=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ti.copy(this);let l=1/o,u=1/a,d=1/c;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,e.setFromRotationMatrix(ti),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=si,c=!1){let l=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===si)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ar)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===si)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ar)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ws=new G,ti=new _e,zg=new G(0,0,0),Hg=new G(1,1,1),Zi=new G,ta=new G,Nn=new G,ef=new _e,nf=new tn,yi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ef.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ef,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nf.setFromEuler(this),this.setFromQuaternion(nf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vg=0,sf=new G,Xs=new tn,Ii=new _e,ea=new G,Br=new G,Gg=new G,Wg=new tn,rf=new G(1,0,0),of=new G(0,1,0),af=new G(0,0,1),cf={type:"added"},Xg={type:"removed"},Ys={type:"childadded",child:null},Hl={type:"childremoved",child:null},Oe=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new yi,n=new tn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ue}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(rf,t)}rotateY(t){return this.rotateOnAxis(of,t)}rotateZ(t){return this.rotateOnAxis(af,t)}translateOnAxis(t,e){return sf.copy(t).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rf,t)}translateY(t){return this.translateOnAxis(of,t)}translateZ(t){return this.translateOnAxis(af,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Br,ea,this.up):Ii.lookAt(ea,Br,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xg),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,Gg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new G(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yg={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},na={h:0,s:0,l:0};function Vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ye.workingColorSpace){if(t=Gu(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Vl(o,r,t+1/3),this.g=Vl(o,r,t),this.b=Vl(o,r,t-1/3)}return ye.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=vd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return ye.workingToColorSpace(pn.copy(this),t),Math.round(le(pn.r*255,0,255))*65536+Math.round(le(pn.g*255,0,255))*256+Math.round(le(pn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=qe){ye.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(na);let n=qr(Ji.h,na.h,e),s=qr(Ji.s,na.s,e),r=qr(Ji.l,na.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Wt;Wt.NAMES=vd;var ts=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new G,Pi=new G,Gl=new G,Li=new G,qs=new G,Zs=new G,lf=new G,Wl=new G,Xl=new G,Yl=new G,ql=new Ee,Zl=new Ee,Jl=new Ee,Qi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ei.subVectors(t,e),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ei.subVectors(s,e),Pi.subVectors(n,e),Gl.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(Pi),c=ei.dot(Gl),l=Pi.dot(Pi),u=Pi.dot(Gl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ql.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),ql.fromBufferAttribute(t,e),Zl.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ql,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(t,e,n,s){return ei.subVectors(n,e),Pi.subVectors(t,e),ei.cross(Pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ei.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,n),Zs.subVectors(r,n),Wl.subVectors(t,n);let c=qs.dot(Wl),l=Zs.dot(Wl);if(c<=0&&l<=0)return e.copy(n);Xl.subVectors(t,s);let u=qs.dot(Xl),d=Zs.dot(Xl);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(qs,o);Yl.subVectors(t,r);let f=qs.dot(Yl),g=Zs.dot(Yl);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Zs,a);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return lf.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(lf,a);let m=1/(p+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(qs,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Be=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(r,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),sa.subVectors(this.max,kr),Js.subVectors(t.a,kr),$s.subVectors(t.b,kr),Ks.subVectors(t.c,kr),$i.subVectors($s,Js),Ki.subVectors(Ks,$s),ys.subVectors(Js,Ks);let e=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-ys.z,ys.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,ys.z,0,-ys.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-ys.y,ys.x,0];return!$l(e,Js,$s,Ks,sa)||(e=[1,0,0,0,1,0,0,0,1],!$l(e,Js,$s,Ks,sa))?!1:(ra.crossVectors($i,Ki),e=[ra.x,ra.y,ra.z],$l(e,Js,$s,Ks,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ni=[new G,new G,new G,new G,new G,new G,new G,new G],ni=new G,ia=new Be,Js=new G,$s=new G,Ks=new G,$i=new G,Ki=new G,ys=new G,kr=new G,sa=new G,ra=new G,_s=new G;function $l(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=t.dot(_s),l=e.dot(_s),u=n.dot(_s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ye=new G,oa=new Rt,qg=0,be=class extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hu,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var no=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var io=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zg=new Be,zr=new G,Kl=new G,Rn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);let e=zr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(Kl)),this.expandByPoint(zr.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jg=0,Xn=new _e,jl=new Oe,js=new G,Dn=new Be,Hr=new Be,je=new G,ce=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_g(t)?io:no)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return jl.lookAt(t),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Dn.min,Hr.min),Dn.expandByPoint(je),je.addVectors(Dn.max,Hr.max),Dn.expandByPoint(je)):(Dn.expandByPoint(Hr.min),Dn.expandByPoint(Hr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)je.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(t,l),je.add(js)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new G,c[_]=new G;let l=new G,u=new G,d=new G,h=new Rt,f=new Rt,g=new Rt,x=new G,p=new G;function m(_,P,F){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,F),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,F),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[_].add(x),a[P].add(x),a[F].add(x),c[_].add(p),c[P].add(p),c[F].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,P=y.length;_<P;++_){let F=y[_],L=F.start,U=F.count;for(let V=L,O=L+U;V<O;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let w=new G,v=new G,b=new G,E=new G;function C(_){b.fromBufferAttribute(s,_),E.copy(b);let P=a[_];w.copy(P),w.sub(b.multiplyScalar(b.dot(P))).normalize(),v.crossVectors(E,P);let L=v.dot(c[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,P=y.length;_<P;++_){let F=y[_],L=F.start,U=F.count;for(let V=L,O=L+U;V<O;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,d=new G;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new be(h,u,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},so=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hu,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},vn=new G,qn=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){to("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){to("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ql=new G,$g=new G,Kg=new ue,Un=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ql.subVectors(n,e).cross($g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kg.getNormalMatrix(t),s=this.coplanarPoint(Ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jg=0,ri=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Sr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Au,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Di=new G,tu=new G,aa=new G,ca=new G,Es=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tu.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(tu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(aa),a=ca.dot(this.direction),c=-ca.dot(aa),l=ca.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tu).addScaledVector(aa,h),f}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=n.x-o.x,y=n.y-o.y,w=n.z-o.z,v=Math.abs(c),b=Math.abs(l),E=Math.abs(u),C,_,P,F,L,U,V,O,K,z,tt,H;if(v>=b&&v>=E?(P=c,U=d,K=g,H=m,c>=0?(C=l,_=u,F=h,L=f,V=x,O=p,z=y,tt=w):(C=u,_=l,F=f,L=h,V=p,O=x,z=w,tt=y)):b>=E?(P=l,U=h,K=x,H=y,l>=0?(C=u,_=c,F=f,L=d,V=p,O=g,z=w,tt=m):(C=c,_=u,F=d,L=f,V=g,O=p,z=m,tt=w)):(P=u,U=f,K=p,H=w,u>=0?(C=c,_=l,F=d,L=h,V=g,O=x,z=m,tt=y):(C=l,_=c,F=h,L=d,V=x,O=g,z=y,tt=m)),P===0)return null;let X=C/P,Y=_/P,$=1/P,rt=F-X*U,yt=L-Y*U,_t=V-X*K,vt=O-Y*K,Pt=z-X*H,ct=tt-Y*H,ht=Pt*vt-ct*_t,Tt=rt*ct-yt*Pt,Ot=_t*yt-vt*rt;if(s){if(ht<0||Tt<0||Ot<0)return null}else if((ht<0||Tt<0||Ot<0)&&(ht>0||Tt>0||Ot>0))return null;let Lt=ht+Tt+Ot;if(Lt===0)return null;let It=$*(ht*U+Tt*K+Ot*H);return(Lt>0?It<0:It>0)?null:this.at(It/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},uf=new _e,vs=new Es,la=new Rn,hf=new G,ua=new G,ha=new G,fa=new G,eu=new G,da=new G,ff=new G,pa=new G,he=class extends Oe{constructor(t=new ce,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){da.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],d=r[c];u!==0&&(eu.fromBufferAttribute(d,t),o?da.addScaledVector(eu,u):da.addScaledVector(eu.sub(e),u))}e.add(da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(la.containsPoint(vs.origin)===!1&&(vs.intersectSphere(la,hf)===null||vs.origin.distanceToSquared(hf)>(t.far-t.near)**2))&&(uf.copy(r).invert(),vs.copy(t.ray).applyMatrix4(uf),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,b=w;v<b;v+=3){let E=a.getX(v),C=a.getX(v+1),_=a.getX(v+2);s=ma(this,m,t,n,l,u,d,E,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),w=a.getX(p+1),v=a.getX(p+2);s=ma(this,o,t,n,l,u,d,y,w,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,b=w;v<b;v+=3){let E=v,C=v+1,_=v+2;s=ma(this,m,t,n,l,u,d,E,C,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,w=p+1,v=p+2;s=ma(this,o,t,n,l,u,d,y,w,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Qg(i,t,e,n,s,r,o,a){let c;if(t.side===Sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===us,a),c===null)return null;pa.copy(a),pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pa);return l<e.near||l>e.far?null:{distance:l,point:pa.clone(),object:i}}function ma(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ua),i.getVertexPosition(c,ha),i.getVertexPosition(l,fa);let u=Qg(i,t,e,n,ua,ha,fa,ff);if(u){let d=new G;Qi.getBarycoord(ff,ua,ha,fa,d),s&&(u.uv=Qi.getInterpolatedAttribute(s,a,c,l,d,new Rt)),r&&(u.uv1=Qi.getInterpolatedAttribute(r,a,c,l,d,new Rt)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,c,l,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new G,materialIndex:0};Qi.getNormal(ua,ha,fa,h.normal),u.face=h,u.barycoord=d}return u}var ro=class extends Mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Qe,u=Qe,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new _e,df=new _e,ga=[],pf=new Be,t0=new _e,Vr=new he,Gr=new Rn,_i=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Be),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),pf.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(pf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Gr.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),df.multiplyMatrices(n,Qs),Vr.matrixWorld=df,Vr.raycast(t,ga);for(let o=0,a=ga.length;o<a;o++){let c=ga[o];c.instanceId=r,c.object=this,e.push(c)}ga.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(s*this.count),s,this.count,_c,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new Rn,e0=new Rt(.5,.5),xa=new G,pr=class{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],w=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,f-u,m-g,b-y).normalize(),s[1].setComponents(l+o,f+u,m+g,b+y).normalize(),s[2].setComponents(l+a,f+d,m+x,b+w).normalize(),s[3].setComponents(l-a,f-d,m-x,b-w).normalize(),n)s[4].setComponents(c,h,p,v).normalize(),s[5].setComponents(l-c,f-h,m-p,b-v).normalize();else if(s[4].setComponents(l-c,f-h,m-p,b-v).normalize(),e===si)s[5].setComponents(l+c,f+h,m+p,b+v).normalize();else if(e===ar)s[5].setComponents(c,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=e0.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ha=new G,Va=new G,mf=new _e,Wr=new Es,ya=new Rn,nu=new G,gf=new G,Ga=class extends Oe{constructor(t=new ce,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ha.fromBufferAttribute(e,s-1),Va.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ha.distanceTo(Va);t.setAttribute("lineDistance",new Zt(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;mf.copy(s).invert(),Wr.copy(t.ray).applyMatrix4(mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=u.getX(x),y=u.getX(x+1),w=_a(this,t,Wr,c,m,y,x);w&&e.push(w)}if(this.isLineLoop){let x=u.getX(g-1),p=u.getX(f),m=_a(this,t,Wr,c,x,p,g-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=_a(this,t,Wr,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=_a(this,t,Wr,c,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _a(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ha.fromBufferAttribute(a,s),Va.fromBufferAttribute(a,r),e.distanceSqToSegment(Ha,Va,nu,gf)>n)return;nu.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(nu);if(!(l<t.near||l>t.far))return{distance:l,point:gf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var xf=new G,yf=new G,oo=class extends Ga{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xf.fromBufferAttribute(e,s),yf.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xf.distanceTo(yf);t.setAttribute("lineDistance",new Zt(n,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ws=class extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_f=new _e,du=new Es,va=new Rn,ba=new G,gr=class extends Oe{constructor(t=new ce,e=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;_f.copy(s).invert(),du.copy(t.ray).applyMatrix4(_f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,x=f;g<x;g++){let p=l.getX(g);ba.fromBufferAttribute(d,p),vf(ba,p,c,s,t,e,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,x=f;g<x;g++)ba.fromBufferAttribute(d,g),vf(ba,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vf(i,t,e,n,s,r,o){let a=du.distanceSqToPoint(i);if(a<e){let c=new G;du.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ao=class extends Mn{constructor(t=[],e=hs,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xr=class extends Mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends Mn{constructor(t,e,n=ai,s,r,o,a=Qe,c=Qe,l,u=gi,d=1){if(u!==gi&&u!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wa=class extends es{constructor(t,e=ai,n=hs,s,r,o=Qe,a=Qe,c,l=gi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},co=class extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},we=class i extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function g(x,p,m,y,w,v,b,E,C,_,P){let F=v/C,L=b/_,U=v/2,V=b/2,O=E/2,K=C+1,z=_+1,tt=0,H=0,X=new G;for(let Y=0;Y<z;Y++){let $=Y*L-V;for(let rt=0;rt<K;rt++){let yt=rt*F-U;X[x]=yt*y,X[p]=$*w,X[m]=O,l.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[m]=E>0?1:-1,u.push(X.x,X.y,X.z),d.push(rt/C),d.push(1-Y/_),tt+=1}}for(let Y=0;Y<_;Y++)for(let $=0;$<C;$++){let rt=h+$+K*Y,yt=h+$+K*(Y+1),_t=h+($+1)+K*(Y+1),vt=h+($+1)+K*Y;c.push(rt,yt,vt),c.push(yt,_t,vt),H+=6}a.addGroup(f,H,P),f+=H,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Cn=class i extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new G,u=new Rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},en=class i extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],p=n/2,m=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(f,2));function y(){let v=new G,b=new G,E=0,C=(e-t)/n;for(let _=0;_<=r;_++){let P=[],F=_/r,L=F*(e-t)+t;for(let U=0;U<=s;U++){let V=U/s,O=V*c+a,K=Math.sin(O),z=Math.cos(O);b.x=L*K,b.y=-F*n+p,b.z=L*z,d.push(b.x,b.y,b.z),v.set(K,C,z).normalize(),h.push(v.x,v.y,v.z),f.push(V,1-F),P.push(g++)}x.push(P)}for(let _=0;_<s;_++)for(let P=0;P<r;P++){let F=x[P][_],L=x[P+1][_],U=x[P+1][_+1],V=x[P][_+1];(t>0||P!==0)&&(u.push(F,L,V),E+=3),(e>0||P!==r-1)&&(u.push(L,U,V),E+=3)}l.addGroup(m,E,0),m+=E}function w(v){let b=g,E=new Rt,C=new G,_=0,P=v===!0?t:e,F=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*F,0),h.push(0,F,0),f.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let O=U/s*c+a,K=Math.cos(O),z=Math.sin(O);C.x=P*z,C.y=p*F,C.z=P*K,d.push(C.x,C.y,C.z),h.push(0,F,0),E.x=K*.5+.5,E.y=z*.5*F+.5,f.push(E.x,E.y),g++}for(let U=0;U<s;U++){let V=b+U,O=L+U;v===!0?u.push(O,O+1,V):u.push(O+1,O,V),_+=3}l.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lo=class i extends en{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Rt:new G);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,c=new _e;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new G)}r[0]=new G,o[0]=new G;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yr=class extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xa=class extends yr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wu(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var bf=new G,Mf=new G,iu=new Wu,su=new Wu,ru=new Wu,Ya=class extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Mf.subVectors(s[0],s[1]).add(s[0]),l=Mf);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(bf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=bf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),iu.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,p),su.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,p),ru.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(iu.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),su.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),ru.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(iu.calc(c),su.calc(c),ru.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function n0(i,t){let e=1-i;return e*e*t}function i0(i,t){return 2*(1-i)*i*t}function s0(i,t){return i*i*t}function Zr(i,t,e,n){return n0(i,t)+i0(i,e)+s0(i,n)}function r0(i,t){let e=1-i;return e*e*e*t}function o0(i,t){let e=1-i;return 3*e*e*i*t}function a0(i,t){return 3*(1-i)*i*i*t}function c0(i,t){return i*i*i*t}function Jr(i,t,e,n,s){return r0(i,t)+o0(i,e)+a0(i,n)+c0(i,s)}var uo=class extends Fn{constructor(t=new Rt,e=new Rt,n=new Rt,s=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends Fn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y),Jr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ho=class extends Fn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends Fn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends Fn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends Fn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zr(t,s.x,r.x,o.x),Zr(t,s.y,r.y,o.y),Zr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Sf(a,c.x,l.x,u.x,d.x),Sf(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Rt().fromArray(s))}return this}},pu=Object.freeze({__proto__:null,ArcCurve:Xa,CatmullRomCurve3:Ya,CubicBezierCurve:uo,CubicBezierCurve3:qa,EllipseCurve:yr,LineCurve:ho,LineCurve3:Za,QuadraticBezierCurve:fo,QuadraticBezierCurve3:Ja,SplineCurve:po}),$a=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new pu[s.type]().fromJSON(s))}return this}},Ts=class extends $a{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ho(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fo(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new uo(this.currentPoint.clone(),new Rt(t,e),new Rt(n,s),new Rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new yr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},On=class extends Ts{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ts().fromJSON(s))}return this}};function l0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=bd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=p0(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,d=c;for(let h=e;h<s;h+=e){let f=i[h],g=i[h+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return mo(r,o,e,a,c,l,0),o}function bd(i,t,e,n,s){let r;if(s===w0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ef(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ef(o/n|0,i[o],i[o+1],r);return r&&_r(r,r.next)&&(xo(r),r=r.next),r}function As(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_r(e,e.next)||ke(e.prev,e,e.next)===0)){if(xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?h0(i,n,s,r):u0(i)){t.push(c.i,i.i,l.i),xo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=f0(As(i),t),mo(i,t,e,n,s,r,2)):o===2&&d0(i,t,e,n,s,r):mo(As(i),t,e,n,s,r,1);break}}}function u0(i){let t=i.prev,e=i,n=i.next;if(ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Xr(s,a,r,c,o,l,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function h0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ke(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),g=Math.min(u,d,h),x=Math.max(a,c,l),p=Math.max(u,d,h),m=mu(f,g,t,e,n),y=mu(x,p,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=m&&v&&v.z<=y;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Xr(a,u,c,d,l,h,w.x,w.y)&&ke(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Xr(a,u,c,d,l,h,v.x,v.y)&&ke(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&Xr(a,u,c,d,l,h,w.x,w.y)&&ke(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Xr(a,u,c,d,l,h,v.x,v.y)&&ke(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function f0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!_r(n,s)&&Sd(n,e,e.next,s)&&go(n,s)&&go(s,n)&&(t.push(n.i,e.i,s.i),xo(e),xo(e.next),e=i=s),e=e.next}while(e!==i);return As(e)}function d0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&M0(o,a)){let c=Ed(o,a);o=As(o,o.next),c=As(c,c.next),mo(o,t,e,n,s,r,0),mo(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function p0(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=bd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(b0(l))}s.sort(m0);for(let r=0;r<s.length;r++)e=g0(s[r],e);return e}function m0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function g0(i,t){let e=x0(i,t);if(!e)return t;let n=Ed(e,i);return As(n,n.next),As(e,e.next)}function x0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(_r(i,e))return e;do{if(_r(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Md(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);go(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&y0(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function y0(i,t){return ke(i.prev,i,t.prev)<0&&ke(t.next,i,i.next)<0}function _0(i,t,e,n){let s=i;do s.z===0&&(s.z=mu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,v0(s)}function v0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function mu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function b0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Md(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Xr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Md(i,t,e,n,s,r,o,a)}function M0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!S0(i,t)&&(go(i,t)&&go(t,i)&&E0(i,t)&&(ke(i.prev,i,t.prev)||ke(i,t.prev,t))||_r(i,t)&&ke(i.prev,i,i.next)>0&&ke(t.prev,t,t.next)>0)}function ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _r(i,t){return i.x===t.x&&i.y===t.y}function Sd(i,t,e,n){let s=Sa(ke(i,t,e)),r=Sa(ke(i,t,n)),o=Sa(ke(e,n,i)),a=Sa(ke(e,n,t));return!!(s!==r&&o!==a||s===0&&Ma(i,e,t)||r===0&&Ma(i,n,t)||o===0&&Ma(e,i,n)||a===0&&Ma(e,t,n))}function Ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Sa(i){return i>0?1:i<0?-1:0}function S0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function go(i,t){return ke(i.prev,i,i.next)<0?ke(i,t,i.next)>=0&&ke(i,i.prev,t)>=0:ke(i,t,i.prev)<0||ke(i,i.next,t)<0}function E0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ed(i,t){let e=gu(i.i,i.x,i.y),n=gu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ef(i,t,e,n){let s=gu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function w0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xu=class{static triangulate(t,e,n=2){return l0(t,e,n)}},Yn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wf(t),Tf(n,t);let o=t.length;e.forEach(wf);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Tf(n,e[c]);let a=xu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function wf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Fi=class i extends ce{constructor(t=new On([new Rt(.5,.5),new Rt(-.5,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:T0,w,v=!1,b,E,C,_;if(m){w=m.getSpacedPoints(u),v=!0,h=!1;let pt=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(u,pt),E=new G,C=new G,_=new G}h||(p=0,f=0,g=0,x=0);let P=a.extractPoints(l),F=P.shape,L=P.holes;if(!Yn.isClockWise(F)){F=F.reverse();for(let pt=0,bt=L.length;pt<bt;pt++){let Mt=L[pt];Yn.isClockWise(Mt)&&(L[pt]=Mt.reverse())}}function V(pt){let Mt=10000000000000001e-36,St=pt[0];for(let Et=1;Et<=pt.length;Et++){let Dt=Et%pt.length,Bt=pt[Dt],zt=Bt.x-St.x,jt=Bt.y-St.y,q=zt*zt+jt*jt,oe=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(St.x),Math.abs(St.y)),$t=Mt*oe*oe;if(q<=$t){pt.splice(Dt,1),Et--;continue}St=Bt}}V(F),L.forEach(V);let O=L.length,K=F;for(let pt=0;pt<O;pt++){let bt=L[pt];F=F.concat(bt)}function z(pt,bt,Mt){return bt||ie("ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(bt,Mt)}let tt=F.length;function H(pt,bt,Mt){let St,Et,Dt,Bt=pt.x-bt.x,zt=pt.y-bt.y,jt=Mt.x-pt.x,q=Mt.y-pt.y,oe=Bt*Bt+zt*zt,$t=Bt*q-zt*jt;if(Math.abs($t)>Number.EPSILON){let B=Math.sqrt(oe),T=Math.sqrt(jt*jt+q*q),et=bt.x-zt/B,nt=bt.y+Bt/B,ft=Mt.x-q/T,k=Mt.y+jt/T,M=((ft-et)*q-(k-nt)*jt)/(Bt*q-zt*jt);St=et+Bt*M-pt.x,Et=nt+zt*M-pt.y;let S=St*St+Et*Et;if(S<=2)return new Rt(St,Et);Dt=Math.sqrt(S/2)}else{let B=!1;Bt>Number.EPSILON?jt>Number.EPSILON&&(B=!0):Bt<-Number.EPSILON?jt<-Number.EPSILON&&(B=!0):Math.sign(zt)===Math.sign(q)&&(B=!0),B?(St=-zt,Et=Bt,Dt=Math.sqrt(oe)):(St=Bt,Et=zt,Dt=Math.sqrt(oe/2))}return new Rt(St/Dt,Et/Dt)}let X=[];for(let pt=0,bt=K.length,Mt=bt-1,St=pt+1;pt<bt;pt++,Mt++,St++)Mt===bt&&(Mt=0),St===bt&&(St=0),X[pt]=H(K[pt],K[Mt],K[St]);let Y=[],$,rt=X.concat();for(let pt=0,bt=O;pt<bt;pt++){let Mt=L[pt];$=[];for(let St=0,Et=Mt.length,Dt=Et-1,Bt=St+1;St<Et;St++,Dt++,Bt++)Dt===Et&&(Dt=0),Bt===Et&&(Bt=0),$[St]=H(Mt[St],Mt[Dt],Mt[Bt]);Y.push($),rt=rt.concat($)}let yt;if(p===0)yt=Yn.triangulateShape(K,L);else{let pt=[],bt=[];for(let Mt=0;Mt<p;Mt++){let St=Mt/p,Et=f*Math.cos(St*Math.PI/2),Dt=g*Math.sin(St*Math.PI/2)+x;for(let Bt=0,zt=K.length;Bt<zt;Bt++){let jt=z(K[Bt],X[Bt],Dt);Tt(jt.x,jt.y,-Et),St===0&&pt.push(jt)}for(let Bt=0,zt=O;Bt<zt;Bt++){let jt=L[Bt];$=Y[Bt];let q=[];for(let oe=0,$t=jt.length;oe<$t;oe++){let B=z(jt[oe],$[oe],Dt);Tt(B.x,B.y,-Et),St===0&&q.push(B)}St===0&&bt.push(q)}}yt=Yn.triangulateShape(pt,bt)}let _t=yt.length,vt=g+x;for(let pt=0;pt<tt;pt++){let bt=h?z(F[pt],rt[pt],vt):F[pt];v?(C.copy(b.normals[0]).multiplyScalar(bt.x),E.copy(b.binormals[0]).multiplyScalar(bt.y),_.copy(w[0]).add(C).add(E),Tt(_.x,_.y,_.z)):Tt(bt.x,bt.y,0)}for(let pt=1;pt<=u;pt++)for(let bt=0;bt<tt;bt++){let Mt=h?z(F[bt],rt[bt],vt):F[bt];v?(C.copy(b.normals[pt]).multiplyScalar(Mt.x),E.copy(b.binormals[pt]).multiplyScalar(Mt.y),_.copy(w[pt]).add(C).add(E),Tt(_.x,_.y,_.z)):Tt(Mt.x,Mt.y,d/u*pt)}for(let pt=p-1;pt>=0;pt--){let bt=pt/p,Mt=f*Math.cos(bt*Math.PI/2),St=g*Math.sin(bt*Math.PI/2)+x;for(let Et=0,Dt=K.length;Et<Dt;Et++){let Bt=z(K[Et],X[Et],St);Tt(Bt.x,Bt.y,d+Mt)}for(let Et=0,Dt=L.length;Et<Dt;Et++){let Bt=L[Et];$=Y[Et];for(let zt=0,jt=Bt.length;zt<jt;zt++){let q=z(Bt[zt],$[zt],St);v?Tt(q.x,q.y+w[u-1].y,w[u-1].x+Mt):Tt(q.x,q.y,d+Mt)}}}Pt(),ct();function Pt(){let pt=s.length/3;if(h){let bt=0,Mt=tt*bt;for(let St=0;St<_t;St++){let Et=yt[St];Ot(Et[2]+Mt,Et[1]+Mt,Et[0]+Mt)}bt=u+p*2,Mt=tt*bt;for(let St=0;St<_t;St++){let Et=yt[St];Ot(Et[0]+Mt,Et[1]+Mt,Et[2]+Mt)}}else{for(let bt=0;bt<_t;bt++){let Mt=yt[bt];Ot(Mt[2],Mt[1],Mt[0])}for(let bt=0;bt<_t;bt++){let Mt=yt[bt];Ot(Mt[0]+tt*u,Mt[1]+tt*u,Mt[2]+tt*u)}}n.addGroup(pt,s.length/3-pt,0)}function ct(){let pt=s.length/3,bt=0;ht(K,bt),bt+=K.length;for(let Mt=0,St=L.length;Mt<St;Mt++){let Et=L[Mt];ht(Et,bt),bt+=Et.length}n.addGroup(pt,s.length/3-pt,1)}function ht(pt,bt){let Mt=pt.length;for(;--Mt>=0;){let St=Mt,Et=Mt-1;Et<0&&(Et=pt.length-1);for(let Dt=0,Bt=u+p*2;Dt<Bt;Dt++){let zt=tt*Dt,jt=tt*(Dt+1),q=bt+St+zt,oe=bt+Et+zt,$t=bt+Et+jt,B=bt+St+jt;Lt(q,oe,$t,B)}}}function Tt(pt,bt,Mt){c.push(pt),c.push(bt),c.push(Mt)}function Ot(pt,bt,Mt){It(pt),It(bt),It(Mt);let St=s.length/3,Et=y.generateTopUV(n,s,St-3,St-2,St-1);Jt(Et[0]),Jt(Et[1]),Jt(Et[2])}function Lt(pt,bt,Mt,St){It(pt),It(bt),It(St),It(bt),It(Mt),It(St);let Et=s.length/3,Dt=y.generateSideWallUV(n,s,Et-6,Et-3,Et-2,Et-1);Jt(Dt[0]),Jt(Dt[1]),Jt(Dt[3]),Jt(Dt[1]),Jt(Dt[2]),Jt(Dt[3])}function It(pt){s.push(c[pt*3+0]),s.push(c[pt*3+1]),s.push(c[pt*3+2])}function Jt(pt){r.push(pt.x),r.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return A0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new pu[s.type]().fromJSON(s)),new i(n,t.options)}},T0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new Rt(r,o),new Rt(a,c),new Rt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Rt(o,1-c),new Rt(l,1-d),new Rt(h,1-g),new Rt(x,1-m)]:[new Rt(a,1-c),new Rt(u,1-d),new Rt(f,1-g),new Rt(p,1-m)]}};function A0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yo=class i extends ce{constructor(t=[new Rt(0,-.5),new Rt(.5,0),new Rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,d=new G,h=new Rt,f=new G,g=new G,x=new G,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let w=n+y*u*s,v=Math.sin(w),b=Math.cos(w);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*v,d.y=t[E].y,d.z=t[E].x*b,o.push(d.x,d.y,d.z),h.x=y/e,h.y=E/(t.length-1),a.push(h.x,h.y);let C=c[3*E+0]*v,_=c[3*E+1],P=c[3*E+0]*b;l.push(C,_,P)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){let v=w+y*t.length,b=v,E=v+t.length,C=v+t.length+1,_=v+1;r.push(b,E,_),r.push(C,_,E)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Oi=class i extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let y=m*h-o;for(let w=0;w<l;w++){let v=w*d-r;g.push(v,-y,0),x.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let w=y+l*m,v=y+l*(m+1),b=y+1+l*(m+1),E=y+1+l*m;f.push(w,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_o=class i extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],d=t,h=(e-t)/s,f=new G,g=new Rt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let y=m+p,w=y,v=y+n+1,b=y+n+2,E=y+1;a.push(w,v,E),a.push(v,b,E)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ns=class i extends ce{constructor(t=new On([new Rt(0,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function l(u){let d=s.length/3,h=u.extractPoints(e),f=h.shape,g=h.holes;Yn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let y=g[p];Yn.isClockWise(y)===!0&&(g[p]=y.reverse())}let x=Yn.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){let y=f[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=x.length;p<m;p++){let y=x[p],w=y[0]+d,v=y[1]+d,b=y[2]+d;n.push(w,v,b),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return R0(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function R0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Le=class i extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new G,h=new G,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],w=m/n,v=o+w*a,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b),C=0;m===0&&o===0?C=.5/e:m===n&&c===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let P=_/e,F=s+P*r;d.x=-E*Math.cos(F),d.y=b,d.z=E*Math.sin(F),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(P+C,1-w),y.push(l++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let w=u[m][y+1],v=u[m][y],b=u[m+1][y],E=u[m+1][y+1];(m!==0||o>0)&&f.push(w,v,E),(m!==n-1||c<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mn=class i extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],d=[],h=new G,f=new G,g=new G;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,w=(s+1)*(x-1)+p,v=(s+1)*x+p;c.push(m,y,v),c.push(y,w,v)}this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var vo=class extends ce{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new G,r=new G;if(t.index!==null){let o=t.attributes.position,a=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let d=c[l],h=d.start,f=d.count;for(let g=h,x=h+f;g<x;g+=3)for(let p=0;p<3;p++){let m=a.getX(g+p),y=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,y),Af(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){let u=3*a+l,d=3*a+(l+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,d),Af(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Zt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Af(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Rf(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function Rf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function C0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var Bo={clone:Ls,merge:gn},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=C0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ka=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fe=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var vr=class extends ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ja=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qa=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function tr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ou(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tc=class extends is{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uu,endingEnd:uu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hu:r=t,a=2*e-n;break;case fu:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hu:o=t,c=2*n-e;break;case fu:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,y=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,w=(-1-f)*p+(1.5+f)*x+.5*g,v=f*p-f*x;for(let b=0;b!==a;++b)r[b]=m*o[u+b]+y*o[l+b]+w*o[c+b]+v*o[d+b];return r}},ec=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}},nc=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ic=class extends is{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let h=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=f*h+g*2,y=d[m],w=d[m+1],v=t*h+g*2,b=u[v],E=u[v+1],C=N0(n,e,y,b,s);r[g]=wd(C,x,w,E,p)}return r}};function wd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function L0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function N0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=wd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=L0(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=tr(e,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:tr(t.times,Array),values:tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ou(t.settings)&&(n.settings={inTangents:tr(t.settings.inTangents,Array),outTangents:tr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ic(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Aa:e=this.InterpolantFactoryMethodSmooth;break;case lu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Aa;case this.InterpolantFactoryMethodBezier:return lu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ou(this.settings)&&(Cf(this.settings.inTangents,t),Cf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ie("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){ie("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&vg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){ie("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Aa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ou(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Cf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Oa;var ss=class extends Bn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=$r;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};sc.prototype.ValueTypeName="color";var rc=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};rc.prototype.ValueTypeName="number";var oc=class extends is{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},bo=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}};bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Bn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=$r;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}};ac.prototype.ValueTypeName="vector";var cc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new cc,lc=class{constructor(t){this.manager=t!==void 0?t:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Rs=class extends br{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},au=new _e,If=new G,Pf=new G,Mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(au,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ar||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(au)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ea=new G,wa=new tn,di=new G,So=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ea,wa,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,wa,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ea,wa,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ea,wa,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new G,Lf=new Rt,Nf=new Rt,bn=class extends So{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,Lf,Nf),e.subVectors(Nf,Lf)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var yu=class extends Mo{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends br{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},os=class extends So{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_u=class extends Mo{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends br{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new _u}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var wo=class extends ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var er=-90,nr=1,uc=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bn(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new bn(er,nr,t,e);r.layers=this.layers,this.add(r);let o=new bn(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new bn(er,nr,t,e);a.layers=this.layers,this.add(a);let c=new bn(er,nr,t,e);c.layers=this.layers,this.add(c);let l=new bn(er,nr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hc=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Yu="\\[\\]\\.:\\/",D0=new RegExp("["+Yu+"]","g"),qu="[^"+Yu+"]",U0="[^"+Yu.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",qu),O0=/(WCOD+)?/.source.replace("WCOD",U0),B0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),k0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),z0=new RegExp("^"+F0+O0+B0+k0+"$"),H0=["material","materials","bones","map"],vu=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(D0,"")}static parseTrackName(t){let e=z0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);H0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=vu;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kS=new Float32Array(1);var cs=class extends so{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Df=new _e,ls=class{constructor(t,e,n=0,s=1/0){this.ray=new Es(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(t,e=!0,n=[]){return bu(t,this,n,e),n.sort(Uf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bu(t[s],this,n,e);return n.sort(Uf),n}};function Uf(i,t){return i.distance-t.distance}function bu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bu(r[o],t,e,!0)}}var Mu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Ff=new G,Ta=new G,ir=new G,sr=new G,cu=new G,V0=new G,G0=new G,To=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ff.subVectors(t,this.start),Ta.subVectors(this.end,this.start);let n=Ta.dot(Ta);if(n===0)return 0;let r=Ta.dot(Ff)/n;return e&&(r=le(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=V0,n=G0){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;ir.subVectors(l,a),sr.subVectors(u,c),cu.subVectors(a,c);let d=ir.dot(ir),h=sr.dot(sr),f=sr.dot(cu);if(d<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(d<=s)r=0,o=f/h,o=le(o,0,1);else{let g=ir.dot(cu);if(h<=s)o=0,r=le(-g/d,0,1);else{let x=ir.dot(sr),p=d*h-x*x;p!==0?r=le((x*f-g*h)/p,0,1):r=0,o=(x*r+f)/h,o<0?(o=0,r=le(-g/d,0,1)):o>1&&(o=1,r=le((x-g)/d,0,1))}}return e.copy(a).addScaledVector(ir,r),n.copy(c).addScaledVector(sr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Zu(i,t,e,n){let s=W0(n);switch(e){case ku:return i*t;case _c:return i*t/s.components*s.byteLength;case vc:return i*t/s.components*s.byteLength;case ps:return i*t*2/s.components*s.byteLength;case bc:return i*t*2/s.components*s.byteLength;case zu:return i*t*3/s.components*s.byteLength;case Jn:return i*t*4/s.components*s.byteLength;case Mc:return i*t*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ec:case Tc:return Math.max(i,16)*Math.max(t,8)/4;case Sc:case wc:return Math.max(i,8)*Math.max(t,8)/2;case Ac:case Rc:case Ic:case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cc:case Uo:case Lc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qc:case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $c:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fo:case jc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W0(i){switch(i){case In:case Uu:return{byteLength:1,components:1};case Er:case Fu:case ci:return{byteLength:2,components:1};case xc:case yc:return{byteLength:2,components:4};case ai:case gc:case Zn:return{byteLength:4,components:1};case Ou:case Bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function J0(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nx=`#ifdef USE_AOMAP
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
#endif`,ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ax=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qx=`PhysicalMaterial material;
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
#endif`,Zx=`uniform sampler2D dfgLUT;
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
}`,Jx=`
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oy=`#if defined( USE_POINTS_UV )
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
#endif`,ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
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
#endif`,vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uy=`float getShadowMask() {
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
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ky=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
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
}`,i_=`#if DEPTH_PACKING == 3200
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
}`,s_=`#define DISTANCE
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
}`,r_=`#define DISTANCE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`uniform float scale;
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
}`,l_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,h_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,d_=`#define LAMBERT
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
}`,p_=`#define MATCAP
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
}`,m_=`#define MATCAP
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
}`,g_=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,y_=`#define PHONG
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
}`,__=`#define PHONG
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
}`,v_=`#define STANDARD
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
}`,b_=`#define STANDARD
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
}`,M_=`#define TOON
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
}`,S_=`#define TOON
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
}`,E_=`uniform float size;
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
}`,w_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,A_=`uniform vec3 color;
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
}`,R_=`uniform float rotation;
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
}`,C_=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:$0,alphahash_pars_fragment:K0,alphamap_fragment:j0,alphamap_pars_fragment:Q0,alphatest_fragment:tx,alphatest_pars_fragment:ex,aomap_fragment:nx,aomap_pars_fragment:ix,batching_pars_vertex:sx,batching_vertex:rx,begin_vertex:ox,beginnormal_vertex:ax,bsdfs:cx,iridescence_fragment:lx,bumpmap_pars_fragment:ux,clipping_planes_fragment:hx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:dx,clipping_planes_vertex:px,color_fragment:mx,color_pars_fragment:gx,color_pars_vertex:xx,color_vertex:yx,common:_x,cube_uv_reflection_fragment:vx,defaultnormal_vertex:bx,displacementmap_pars_vertex:Mx,displacementmap_vertex:Sx,emissivemap_fragment:Ex,emissivemap_pars_fragment:wx,colorspace_fragment:Tx,colorspace_pars_fragment:Ax,envmap_fragment:Rx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Ix,envmap_pars_vertex:Px,envmap_physical_pars_fragment:Vx,envmap_vertex:Lx,fog_vertex:Nx,fog_pars_vertex:Dx,fog_fragment:Ux,fog_pars_fragment:Fx,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Bx,lights_lambert_fragment:kx,lights_lambert_pars_fragment:zx,lights_pars_begin:Hx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Wx,lights_phong_fragment:Xx,lights_phong_pars_fragment:Yx,lights_physical_fragment:qx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:$x,lights_fragment_end:Kx,lightprobes_pars_fragment:jx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ey,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:sy,map_particle_fragment:ry,map_particle_pars_fragment:oy,metalnessmap_fragment:ay,metalnessmap_pars_fragment:cy,morphinstance_vertex:ly,morphcolor_vertex:uy,morphnormal_vertex:hy,morphtarget_pars_vertex:fy,morphtarget_vertex:dy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:xy,normal_vertex:yy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:vy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:My,iridescence_pars_fragment:Sy,opaque_fragment:Ey,packing:wy,premultiplied_alpha_fragment:Ty,project_vertex:Ay,dithering_fragment:Ry,dithering_pars_fragment:Cy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Ny,shadowmap_vertex:Dy,shadowmask_pars_fragment:Uy,skinbase_vertex:Fy,skinning_pars_vertex:Oy,skinning_vertex:By,skinnormal_vertex:ky,specularmap_fragment:zy,specularmap_pars_fragment:Hy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Gy,transmission_fragment:Wy,transmission_pars_fragment:Xy,uv_pars_fragment:Yy,uv_pars_vertex:qy,uv_vertex:Zy,worldpos_vertex:Jy,background_vert:$y,background_frag:Ky,backgroundCube_vert:jy,backgroundCube_frag:Qy,cube_vert:t_,cube_frag:e_,depth_vert:n_,depth_frag:i_,distance_vert:s_,distance_frag:r_,equirect_vert:o_,equirect_frag:a_,linedashed_vert:c_,linedashed_frag:l_,meshbasic_vert:u_,meshbasic_frag:h_,meshlambert_vert:f_,meshlambert_frag:d_,meshmatcap_vert:p_,meshmatcap_frag:m_,meshnormal_vert:g_,meshnormal_frag:x_,meshphong_vert:y_,meshphong_frag:__,meshphysical_vert:v_,meshphysical_frag:b_,meshtoon_vert:M_,meshtoon_frag:S_,points_vert:E_,points_frag:w_,shadow_vert:T_,shadow_frag:A_,sprite_vert:R_,sprite_frag:C_},Ut={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},En={basic:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:gn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:gn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Wt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:gn([Ut.points,Ut.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:gn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:gn([Ut.common,Ut.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:gn([Ut.sprite,Ut.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:gn([Ut.common,Ut.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:gn([Ut.lights,Ut.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};En.physical={uniforms:gn([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var el={r:0,b:0,g:0},I_=new _e,Jd=new ue;Jd.set(-1,0,0,0,1,0,0,0,1);function P_(i,t,e,n,s,r){let o=new Wt(0),a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(y){let w=!1,v=f(y);v===null?p(o,a):v&&v.isColor&&(p(v,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Co)?(l===void 0&&(l=new he(new we(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Ls(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jd),l.material.toneMapped=ye.getTransfer(v.colorSpace)!==Se,(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new he(new Oi(2,2),new Ze({name:"BackgroundMaterial",uniforms:Ls(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ye.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,w){y.getRGB(el,Xu(i)),e.buffers.color.setClear(el.r,el.g,el.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:x,dispose:m}}function L_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(L,U,V,O,K){let z=!1,tt=d(L,O,V,U);r!==tt&&(r=tt,l(r.object)),z=f(L,O,V,K),z&&g(L,O,V,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(L,U,V,O),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,U,V,O){let K=O.wireframe===!0,z=n[U.id];z===void 0&&(z={},n[U.id]=z);let tt=L.isInstancedMesh===!0?L.id:0,H=z[tt];H===void 0&&(H={},z[tt]=H);let X=H[V.id];X===void 0&&(X={},H[V.id]=X);let Y=X[K];return Y===void 0&&(Y=h(c()),X[K]=Y),Y}function h(L){let U=[],V=[],O=[];for(let K=0;K<e;K++)U[K]=0,V[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:O,object:L,attributes:{},index:null}}function f(L,U,V,O){let K=r.attributes,z=U.attributes,tt=0,H=V.getAttributes();for(let X in H)if(H[X].location>=0){let $=K[X],rt=z[X];if(rt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),$===void 0||$.attribute!==rt||rt&&$.data!==rt.data)return!0;tt++}return r.attributesNum!==tt||r.index!==O}function g(L,U,V,O){let K={},z=U.attributes,tt=0,H=V.getAttributes();for(let X in H)if(H[X].location>=0){let $=z[X];$===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let rt={};rt.attribute=$,$&&$.data&&(rt.data=$.data),K[X]=rt,tt++}r.attributes=K,r.attributesNum=tt,r.index=O}function x(){let L=r.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function p(L){m(L,0)}function m(L,U){let V=r.newAttributes,O=r.enabledAttributes,K=r.attributeDivisors;V[L]=1,O[L]===0&&(i.enableVertexAttribArray(L),O[L]=1),K[L]!==U&&(i.vertexAttribDivisor(L,U),K[L]=U)}function y(){let L=r.newAttributes,U=r.enabledAttributes;for(let V=0,O=U.length;V<O;V++)U[V]!==L[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function w(L,U,V,O,K,z,tt){tt===!0?i.vertexAttribIPointer(L,U,V,K,z):i.vertexAttribPointer(L,U,V,O,K,z)}function v(L,U,V,O){x();let K=O.attributes,z=V.getAttributes(),tt=U.defaultAttributeValues;for(let H in z){let X=z[H];if(X.location>=0){let Y=K[H];if(Y===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let $=Y.normalized,rt=Y.itemSize,yt=t.get(Y);if(yt===void 0)continue;let _t=yt.buffer,vt=yt.type,Pt=yt.bytesPerElement,ct=vt===i.INT||vt===i.UNSIGNED_INT||Y.gpuType===gc;if(Y.isInterleavedBufferAttribute){let ht=Y.data,Tt=ht.stride,Ot=Y.offset;if(ht.isInstancedInterleavedBuffer){for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt,ht.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)p(X.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Lt=0;Lt<X.locationSize;Lt++)w(X.location+Lt,rt/X.locationSize,vt,$,Tt*Pt,(Ot+rt/X.locationSize*Lt)*Pt,ct)}else{if(Y.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,Y.meshPerAttribute);L.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ht=0;ht<X.locationSize;ht++)w(X.location+ht,rt/X.locationSize,vt,$,rt*Pt,rt/X.locationSize*ht*Pt,ct)}}else if(tt!==void 0){let $=tt[H];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(X.location,$);break;case 3:i.vertexAttrib3fv(X.location,$);break;case 4:i.vertexAttrib4fv(X.location,$);break;default:i.vertexAttrib1fv(X.location,$)}}}}y()}function b(){P();for(let L in n){let U=n[L];for(let V in U){let O=U[V];for(let K in O){let z=O[K];for(let tt in z)u(z[tt].object),delete z[tt];delete O[K]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let V in U){let O=U[V];for(let K in O){let z=O[K];for(let tt in z)u(z[tt].object),delete z[tt];delete O[K]}}delete n[L.id]}function C(L){for(let U in n){let V=n[U];for(let O in V){let K=V[O];if(K[L.id]===void 0)continue;let z=K[L.id];for(let tt in z)u(z[tt].object),delete z[tt];delete K[L.id]}}}function _(L){for(let U in n){let V=n[U],O=L.isInstancedMesh===!0?L.id:0,K=V[O];if(K!==void 0){for(let z in K){let tt=K[z];for(let H in tt)u(tt[H].object),delete tt[H];delete K[z]}delete V[O],Object.keys(V).length===0&&delete n[U]}}}function P(){F(),o=!0,r!==s&&(r=s,l(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function N_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function D_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let _=C===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==In&&C!==Zn&&!_&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Qt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:E}}function U_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Un,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{let y=r?0:n,w=y*4,v=m.clippingState||null;c.value=v,v=u(g,h,w,f);for(let b=0;b!==w;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,v=f;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Ar=4,F_=6,O_=20,B_=256,ko=new os,Ad=new Wt,Ju=null,$u=0,Ku=0,ju=!1,k_=new G,Ns=new G,il=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=k_}=r;Ju=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ju,$u,Ku),this._renderer.xr.enabled=ju,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ju=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:ci,format:Jn,colorSpace:Kr,depthBuffer:!1},s=Rd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z_(r)),this._blurMaterial=V_(r,t,e),this._ggxMaterial=H_(r,t,e)}return s}_compileMaterial(t){let e=new he(new ce,t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,n,s,r){let c=new bn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Ad),d.toneMapping=oi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new we,new ze({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(Ad),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));let b=this._cubeSize;Tr(s,v*b,w>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Tr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ko)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-Ar?n-g+Ar:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Tr(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,ko),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Tr(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(a,ko)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ar?s-this._lodMax+Ar:0),h=4*(this._cubeSize-u);Tr(e,d,h,3*u,2*u),o.setRenderTarget(e),o.render(c,ko)}};function z_(i){let t=[],e=[],n=i,s=i-Ar+1+F_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let m=0;m<d;m++){let y=m%3*2/3-1,w=m>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(v,f*h*m);for(let b=0;b<h;b++){let E=u[b*2]*2-1,C=u[b*2+1]*2-1;m===0?Ns.set(1,C,E):m===1?Ns.set(-E,1,-C):m===2?Ns.set(-E,C,1):m===3?Ns.set(-1,C,-E):m===4?Ns.set(-E,-1,C):Ns.set(E,C,-1),Ns.toArray(x,(m*h+b)*f)}}let p=new ce;p.setAttribute("position",new be(g,f)),p.setAttribute("outputDirection",new be(x,f)),e.push(new he(p,null)),n>Ar&&n--}return{lodMeshes:e,sizeLods:t}}function Rd(i,t,e){let n=new An(i,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function H_(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:B_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ol(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function V_(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:O_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ol(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Cd(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Id(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sl=class extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ao(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:vi});r.uniforms.tEquirect.value=e;let o=new he(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=on),new uc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function G_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===dc||f===pc)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new sl(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===dc||f===pc,x=f===hs||f===Ps;if(g||x){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new il(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return g&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new il(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===dc?h.mapping=hs:f===pc&&(h.mapping=Ps),h}function c(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function W_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function X_(i,t,e,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let w=0,v=y.length;w<v;w+=3){let b=y[w+0],E=y[w+1],C=y[w+2];h.push(b,E,E,C,C,b)}}else{let y=g.array;x=g.version;for(let w=0,v=y.length/3-1;w<v;w+=3){let b=w+0,E=w+1,C=w+2;h.push(b,E,E,C,C,b)}}let p=new(g.count>=65535?io:no)(h,1);p.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Y_(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function q_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ie("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Z_(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let P=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*b*4*d),C=new eo(E,v,b,d);C.type=Zn,C.needsUpdate=!0;let _=w*4;for(let F=0;F<d;F++){let L=p[F],U=m[F],V=y[F],O=v*b*4*F;for(let K=0;K<L.count;K++){let z=K*_;f===!0&&(s.fromBufferAttribute(L,K),E[O+z+0]=s.x,E[O+z+1]=s.y,E[O+z+2]=s.z,E[O+z+3]=0),g===!0&&(s.fromBufferAttribute(U,K),E[O+z+4]=s.x,E[O+z+5]=s.y,E[O+z+6]=s.z,E[O+z+7]=0),x===!0&&(s.fromBufferAttribute(V,K),E[O+z+8]=s.x,E[O+z+9]=s.y,E[O+z+10]=s.z,E[O+z+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Rt(v,b)},n.set(a,h),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function J_(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var $_={[Ru]:"LINEAR_TONE_MAPPING",[Cu]:"REINHARD_TONE_MAPPING",[Iu]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[Lu]:"AGX_TONE_MAPPING",[Nu]:"NEUTRAL_TONE_MAPPING",[Pu]:"CUSTOM_TONE_MAPPING"};function K_(i,t,e,n,s,r){let o=new An(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ce;l.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let u=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new he(l,u),h=new os(-1,1,1,-1,0,1),f=null,g=null,x=!1,p,m=null,y=[],w=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),c!==null&&c.setSize(v,b);for(let E=0;E<y.length;E++){let C=y[E];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;let b=o.width,E=o.height;y.length>0&&a===null&&(a=new An(b,E,{type:ci,depthBuffer:!1,stencilBuffer:!1}),c=new An(b,E,{type:ci,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let _=y[C];_.setSize&&_.setSize(b,E)}},this.begin=function(v,b){if(x||v.toneMapping===oi&&y.length===0)return!1;if(m=b,b!==null){let E=b.width,C=b.height;(o.width!==E||o.height!==C)&&this.setSize(E,C)}return w===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=oi,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=p,x=!0;let E=o,C=a;for(let _=0;_<y.length;_++){let P=y[_];P.enabled!==!1&&(P.render(v,C,E,b),P.needsSwap!==!1&&(E=C,C=C===a?c:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},ye.getTransfer(f)===Se&&(u.defines.SRGB_TRANSFER="");let _=$_[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(m),v.render(d,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var $d=new Mn,eh=new es(1,1),Kd=new eo,jd=new za,Qd=new ao,Pd=[],Ld=[],Nd=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);function Cr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Pd[s];if(r===void 0&&(r=new Float32Array(s),Pd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function al(i,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function nv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),$e(e,n)}}function iv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),$e(e,n)}}function sv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Je(e,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),$e(e,n)}}function rv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ov(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function lv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function dv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(eh.compareFunction=e.isReversedDepthBuffer()?tl:Qc,r=eh):r=$d,e.setTexture2D(t||r,s)}function pv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jd,s)}function mv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qd,s)}function gv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kd,s)}function xv(i){switch(i){case 5126:return j_;case 35664:return Q_;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return cv;case 5125:return lv;case 36294:return uv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function yv(i,t){i.uniform1fv(this.addr,t)}function _v(i,t){let e=Cr(t,this.size,2);i.uniform2fv(this.addr,e)}function vv(i,t){let e=Cr(t,this.size,3);i.uniform3fv(this.addr,e)}function bv(i,t){let e=Cr(t,this.size,4);i.uniform4fv(this.addr,e)}function Mv(i,t){let e=Cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sv(i,t){let e=Cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ev(i,t){let e=Cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wv(i,t){i.uniform1iv(this.addr,t)}function Tv(i,t){i.uniform2iv(this.addr,t)}function Av(i,t){i.uniform3iv(this.addr,t)}function Rv(i,t){i.uniform4iv(this.addr,t)}function Cv(i,t){i.uniform1uiv(this.addr,t)}function Iv(i,t){i.uniform2uiv(this.addr,t)}function Pv(i,t){i.uniform3uiv(this.addr,t)}function Lv(i,t){i.uniform4uiv(this.addr,t)}function Nv(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=eh:o=$d;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Dv(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jd,r[o])}function Uv(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qd,r[o])}function Fv(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function Ov(i){switch(i){case 5126:return yv;case 35664:return _v;case 35665:return vv;case 35666:return bv;case 35674:return Mv;case 35675:return Sv;case 35676:return Ev;case 5124:case 35670:return wv;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Iv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Fv}}var nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xv(e.type)}},ih=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ov(e.type)}},sh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Qu=/(\w+)(\])?(\[|\.)?/g;function Fd(i,t){i.seq.push(t),i.map[t.id]=t}function Bv(i,t,e){let n=i.name,s=n.length;for(Qu.lastIndex=0;;){let r=Qu.exec(n),o=Qu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Fd(e,l===void 0?new nh(a,i,t):new ih(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new sh(a),Fd(e,d)),e=d}}}var Rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Bv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var kv=37297,zv=0;function Hv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bd=new ue;function Vv(i){ye._getMatrix(Bd,ye.workingColorSpace,i);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Hv(i.getShaderSource(t),a)}else return r}function Gv(i,t){let e=Vv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wv={[Ru]:"Linear",[Cu]:"Reinhard",[Iu]:"Cineon",[Ro]:"ACESFilmic",[Lu]:"AgX",[Nu]:"Neutral",[Pu]:"Custom"};function Xv(i,t){let e=Wv[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nl=new G;function Yv(){ye.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),t=nl.y.toFixed(4),e=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Zv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ho(i){return i!==""}function zd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(i){return i.replace($v,jv)}var Kv=new Map;function jv(i,t){let e=pe[t];if(e===void 0){let n=Kv.get(t);if(n!==void 0)e=pe[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return rh(e)}var Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(i){return i.replace(Qv,tb)}function tb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var eb={[Cs]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function nb(i){return eb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ib={[hs]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};function sb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ib[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var rb={[Ps]:"ENVMAP_MODE_REFRACTION"};function ob(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ab={[fc]:"ENVMAP_BLENDING_MULTIPLY",[sd]:"ENVMAP_BLENDING_MIX",[rd]:"ENVMAP_BLENDING_ADD"};function cb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ab[i.combine]||"ENVMAP_BLENDING_NONE"}function lb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ub(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=nb(e),l=sb(e),u=ob(e),d=cb(e),h=lb(e),f=qv(e),g=Zv(r),x=s.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ho).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ho).join(`
`),m.length>0&&(m+=`
`)):(p=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),m=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?pe.tonemapping_pars_fragment:"",e.toneMapping!==oi?Xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Gv("linearToOutputTexel",e.outputColorSpace),Yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),o=rh(o),o=zd(o,e),o=Hd(o,e),a=rh(a),a=zd(a,e),a=Hd(a,e),o=Vd(o),a=Vd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=y+p+o,v=y+m+a,b=Od(s,s.VERTEX_SHADER,w),E=Od(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(E)||"",K=U.trim(),z=V.trim(),tt=O.trim(),H=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,E);else{let Y=kd(s,b,"vertex"),$=kd(s,E,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+Y+`
`+$)}else K!==""?Qt("WebGLProgram: Program Info Log:",K):(z===""||tt==="")&&(X=!1);X&&(L.diagnostics={runnable:H,programLog:K,vertexShader:{log:z,prefix:p},fragmentShader:{log:tt,prefix:m}})}s.deleteShader(b),s.deleteShader(E),_=new Rr(s,x),P=Jv(s,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let P;this.getAttributes=function(){return P===void 0&&C(this),P};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(x,kv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}var hb=0,oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ah(t),e.set(t,n)),n}},ah=class{constructor(t){this.id=hb++,this.code=t,this.usedTimes=0}};function fb(i){return i===ps||i===Uo||i===Fo}function db(i,t,e,n,s,r){let o=new hr,a=new oh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,P,F,L,U,V){let O=L.fog,K=U.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=t.get(_.envMap||z,tt),X=H&&H.mapping===Co?H.image.height:null,Y=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Qt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let $=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rt=$!==void 0?$.length:0,yt=0;K.morphAttributes.position!==void 0&&(yt=1),K.morphAttributes.normal!==void 0&&(yt=2),K.morphAttributes.color!==void 0&&(yt=3);let _t,vt,Pt,ct;if(Y){let te=En[Y];_t=te.vertexShader,vt=te.fragmentShader}else{_t=_.vertexShader,vt=_.fragmentShader;let te=a.getVertexShaderStage(_),kt=a.getFragmentShaderStage(_);a.update(_,te,kt),Pt=te.id,ct=kt.id}let ht=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,Lt=U.isBatchedMesh===!0,It=!!_.map,Jt=!!_.matcap,pt=!!H,bt=!!_.aoMap,Mt=!!_.lightMap,St=!!_.bumpMap&&_.wireframe===!1,Et=!!_.normalMap,Dt=!!_.displacementMap,Bt=!!_.emissiveMap,zt=!!_.metalnessMap,jt=!!_.roughnessMap,q=_.anisotropy>0,oe=_.clearcoat>0,$t=_.dispersion>0,B=_.retroreflectivity>0,T=_.iridescence>0,et=_.sheen>0,nt=_.transmission>0,ft=q&&!!_.anisotropyMap,k=oe&&!!_.clearcoatMap,M=oe&&!!_.clearcoatNormalMap,S=oe&&!!_.clearcoatRoughnessMap,A=T&&!!_.iridescenceMap,N=T&&!!_.iridescenceThicknessMap,D=et&&!!_.sheenColorMap,Q=et&&!!_.sheenRoughnessMap,Z=!!_.specularMap,at=!!_.specularColorMap,W=!!_.specularIntensityMap,ot=nt&&!!_.transmissionMap,R=nt&&!!_.thicknessMap,j=!!_.gradientMap,J=!!_.alphaMap,dt=_.alphaTest>0,xt=!!_.alphaHash,mt=!!_.extensions,At=oi;_.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(At=i.toneMapping);let Ct={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:vt,defines:_.defines,customVertexShaderID:Pt,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Lt,batchingColor:Lt&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ye.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:It,matcap:Jt,envMap:pt,envMapMode:pt&&H.mapping,envMapCubeUVHeight:X,aoMap:bt,lightMap:Mt,bumpMap:St,normalMap:Et,displacementMap:Dt,emissiveMap:Bt,normalMapObjectSpace:Et&&_.normalMapType===cd,normalMapTangentSpace:Et&&_.normalMapType===Oo,packedNormalMap:Et&&_.normalMapType===Oo&&fb(_.normalMap.format),metalnessMap:zt,roughnessMap:jt,anisotropy:q,anisotropyMap:ft,clearcoat:oe,clearcoatMap:k,clearcoatNormalMap:M,clearcoatRoughnessMap:S,dispersion:$t,retroreflection:B,iridescence:T,iridescenceMap:A,iridescenceThicknessMap:N,sheen:et,sheenColorMap:D,sheenRoughnessMap:Q,specularMap:Z,specularColorMap:at,specularIntensityMap:W,transmission:nt,transmissionMap:ot,thicknessMap:R,gradientMap:j,opaque:_.transparent===!1&&_.blending===Sr&&_.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:xt,combine:_.combine,mapUv:It&&g(_.map.channel),aoMapUv:bt&&g(_.aoMap.channel),lightMapUv:Mt&&g(_.lightMap.channel),bumpMapUv:St&&g(_.bumpMap.channel),normalMapUv:Et&&g(_.normalMap.channel),displacementMapUv:Dt&&g(_.displacementMap.channel),emissiveMapUv:Bt&&g(_.emissiveMap.channel),metalnessMapUv:zt&&g(_.metalnessMap.channel),roughnessMapUv:jt&&g(_.roughnessMap.channel),anisotropyMapUv:ft&&g(_.anisotropyMap.channel),clearcoatMapUv:k&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:S&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:A&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:N&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:D&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&g(_.sheenRoughnessMap.channel),specularMapUv:Z&&g(_.specularMap.channel),specularColorMapUv:at&&g(_.specularColorMap.channel),specularIntensityMapUv:W&&g(_.specularIntensityMap.channel),transmissionMapUv:ot&&g(_.transmissionMap.channel),thicknessMapUv:R&&g(_.thicknessMap.channel),alphaMapUv:J&&g(_.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Et||q),vertexNormals:!!K.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!K.attributes.uv&&(It||J),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||K.attributes.normal===void 0&&Et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Tt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:yt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:It&&_.map.isVideoTexture===!0&&ye.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&ye.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||Lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(_){let P=[];if(_.shaderID?P.push(_.shaderID):(P.push(_.customVertexShaderID),P.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)P.push(F),P.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(m(P,_),y(P,_),P.push(i.outputColorSpace)),P.push(_.customProgramCacheKey),P.join()}function m(_,P){_.push(P.precision),_.push(P.outputColorSpace),_.push(P.envMapMode),_.push(P.envMapCubeUVHeight),_.push(P.mapUv),_.push(P.alphaMapUv),_.push(P.lightMapUv),_.push(P.aoMapUv),_.push(P.bumpMapUv),_.push(P.normalMapUv),_.push(P.displacementMapUv),_.push(P.emissiveMapUv),_.push(P.metalnessMapUv),_.push(P.roughnessMapUv),_.push(P.anisotropyMapUv),_.push(P.clearcoatMapUv),_.push(P.clearcoatNormalMapUv),_.push(P.clearcoatRoughnessMapUv),_.push(P.iridescenceMapUv),_.push(P.iridescenceThicknessMapUv),_.push(P.sheenColorMapUv),_.push(P.sheenRoughnessMapUv),_.push(P.specularMapUv),_.push(P.specularColorMapUv),_.push(P.specularIntensityMapUv),_.push(P.transmissionMapUv),_.push(P.thicknessMapUv),_.push(P.combine),_.push(P.fogExp2),_.push(P.sizeAttenuation),_.push(P.morphTargetsCount),_.push(P.morphAttributeCount),_.push(P.numSunLights),_.push(P.numDirLights),_.push(P.numPointLights),_.push(P.numSpotLights),_.push(P.numSpotLightMaps),_.push(P.numHemiLights),_.push(P.numRectAreaLights),_.push(P.numSunLightShadows),_.push(P.numDirLightShadows),_.push(P.numPointLightShadows),_.push(P.numSpotLightShadows),_.push(P.numSpotLightShadowsWithMaps),_.push(P.numLightProbes),_.push(P.shadowMapType),_.push(P.toneMapping),_.push(P.numClippingPlanes),_.push(P.numClipIntersection),_.push(P.depthPacking)}function y(_,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.retroreflection&&o.enable(24),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),P.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let P=f[_.type],F;if(P){let L=En[P];F=Bo.clone(L.uniforms)}else F=_.uniforms;return F}function v(_,P){let F=u.get(P);return F!==void 0?++F.usedTimes:(F=new ub(i,P,_,s),l.push(F),u.set(P,F)),F}function b(_){if(--_.usedTimes===0){let P=l.indexOf(_);l[P]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function pb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,x,p,m){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},i[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=p,y.group=m),t++,y}function c(h,f,g,x,p,m,y){y.reversedDepth===!0&&(p=-p);let w=a(h,f,g,x,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function l(h,f,g,x,p,m){let y=a(h,f,g,x,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||mb),n.length>1&&n.sort(f||Wd),s.length>1&&s.sort(f||Wd)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function gb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xd,i.set(n,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Wt};break;case"SpotLight":e={position:new G,direction:new G,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function yb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _b=0;function vb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bb(i){let t=new xb,e=yb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new _e,o=new _e;function a(l){let u=0,d=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,w=0,v=0,b=0,E=0,C=0,_=0,P=0,F=0;l.sort(vb);for(let U=0,V=l.length;U<V;U++){let O=l[U],K=O.color,z=O.intensity,tt=O.distance,H=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ps?H=O.shadow.map.texture:H=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=K.r*z,d+=K.g*z,h+=K.b*z;else if(O.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(O.sh.coefficients[X],z);F++}else if(O.isSunLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,$=e.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=$,n.sunShadowMap[g]=H;let rt=Y.getViewportCount();for(let yt=0;yt<rt;yt++)n.sunShadowMatrix[x+yt]=Y.getMatrix(yt),n.sunShadowCascade[x+yt]=Y._cascadeData[yt];x+=rt,g++}n.sun[f]=X,f++}else if(O.isDirectionalLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,$=e.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=O.shadow.matrix,b++}n.directional[p]=X,p++}else if(O.isSpotLight){let X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(K).multiplyScalar(z),X.distance=tt,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,n.spot[y]=X;let Y=O.shadow;if(O.map&&(n.spotLightMap[_]=O.map,_++,Y.updateMatrices(O),O.castShadow&&P++),n.spotLightMatrix[y]=Y.matrix,O.castShadow){let $=e.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=H,C++}y++}else if(O.isRectAreaLight){let X=t.get(O);X.color.copy(K).multiplyScalar(z),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),n.rectArea[w]=X,w++}else if(O.isPointLight){let X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),X.distance=O.distance,X.decay=O.decay,O.castShadow){let Y=O.shadow,$=e.get(O);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=O.shadow.matrix,E++}n.point[m]=X,m++}else if(O.isHemisphereLight){let X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(z),X.groundColor.copy(O.groundColor).multiplyScalar(z),n.hemi[v]=X,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==y||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==C||L.numSpotMaps!==_||L.numLightProbes!==F)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+_-P,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=F,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=y,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=C,L.numSpotMaps=_,L.numLightProbes=F,n.version=_b++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let y=0,w=l.length;y<w;y++){let v=l[y];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Yd(i){let t=new bb(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Mb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yd(i),t.set(s,[a])):r>=o.length?(a=new Yd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
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
}`,wb=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Tb=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],qd=new _e,zo=new G,th=new G;function Ab(i,t,e){let n=new pr,s=new Rt,r=new Rt,o=new Ee,a=new ja,c=new Qa,l={},u=e.maxTextureSize,d={[us]:Sn,[Sn]:us,[an]:an},h=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Sb,fragmentShader:Eb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new he(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let m=this.type;this.render=function(E,C,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===kf&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);let P=i.getRenderTarget(),F=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(vi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=m!==this.type;V&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(K=>K.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,K=E.length;O<K;O++){let z=E[O],tt=z.shadow;if(tt===void 0){Qt("WebGLShadowMap:",z,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let H=tt.getFrameExtents();s.multiply(H),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,tt.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=X,tt.map===null||V===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===Mr){if(z.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new An(s.x,s.y,{format:ps,type:ci,minFilter:on,magFilter:on,generateMipmaps:!1}),tt.map.texture.name=z.name+".shadowMap",tt.map.depthTexture=new es(s.x,s.y,Zn),tt.map.depthTexture.name=z.name+".shadowMapDepth",tt.map.depthTexture.format=gi,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Qe,tt.map.depthTexture.magFilter=Qe}else z.isPointLight?(tt.map=new sl(s.x),tt.map.depthTexture=new Wa(s.x,ai)):(tt.map=new An(s.x,s.y),tt.map.depthTexture=new es(s.x,s.y,ai)),tt.map.depthTexture.name=z.name+".shadowMap",tt.map.depthTexture.format=gi,this.type===Cs?(tt.map.depthTexture.compareFunction=X?tl:Qc,tt.map.depthTexture.minFilter=on,tt.map.depthTexture.magFilter=on):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Qe,tt.map.depthTexture.magFilter=Qe);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==s.x||tt.map.height!==s.y)&&tt.map.setSize(s.x,s.y);let Y=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();z.isPointLight!==!0&&tt.updateMatrices(z,_);for(let $=0;$<Y;$++){let rt=tt.getCamera($);if(z.isPointLight){let yt=tt.camera,_t=tt.matrix,vt=z.distance||yt.far;vt!==yt.far&&(yt.far=vt,yt.updateProjectionMatrix()),zo.setFromMatrixPosition(z.matrixWorld),yt.position.copy(zo),th.copy(yt.position),th.add(wb[$]),yt.up.copy(Tb[$]),yt.lookAt(th),yt.updateMatrixWorld(),_t.makeTranslation(-zo.x,-zo.y,-zo.z),qd.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(qd,yt.coordinateSystem,yt.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)i.setRenderTarget(tt.map,$),i.clear();else{$===0&&(i.setRenderTarget(tt.map),i.clear());let yt=tt.getViewport($);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),U.viewport(o)}n=tt.getFrustum($),v(C,_,rt,z,this.type)}tt.isPointLightShadow!==!0&&this.type===Mr&&y(tt,_),tt.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,F,L)};function y(E,C){let _=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new An(s.x,s.y,{format:ps,type:ci}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,_,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,_,f,x,null)}function w(E,C,_,P){let F=null,L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)F=L;else if(F=_.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=F.uuid,V=C.uuid,O=l[U];O===void 0&&(O={},l[U]=O);let K=O[V];K===void 0&&(K=F.clone(),O[V]=K,C.addEventListener("dispose",b)),F=K}if(F.visible=C.visible,F.wireframe=C.wireframe,P===Mr?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:d[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let U=i.properties.get(F);U.light=_}return F}function v(E,C,_,P,F){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===Mr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let V=t.update(E),O=E.material;if(Array.isArray(O)){let K=V.groups;for(let z=0,tt=K.length;z<tt;z++){let H=K[z],X=O[H.materialIndex];if(X&&X.visible){let Y=w(E,X,P,F);E.onBeforeShadow(i,E,C,_,V,Y,H),i.renderBufferDirect(_,null,V,Y,E,H),E.onAfterShadow(i,E,C,_,V,Y,H)}}}else if(O.visible){let K=w(E,O,P,F);E.onBeforeShadow(i,E,C,_,V,K,null),i.renderBufferDirect(_,null,V,K,E,null),E.onAfterShadow(i,E,C,_,V,K,null)}}let U=E.children;for(let V=0,O=U.length;V<O;V++)v(U[V],C,_,P,F)}function b(E){E.target.removeEventListener("dispose",b);for(let _ in l){let P=l[_],F=E.target.uuid;F in P&&(P[F].dispose(),delete P[F])}}}function Rb(i,t){function e(){let R=!1,j=new Ee,J=null,dt=new Ee(0,0,0,0);return{setMask:function(xt){J!==xt&&!R&&(i.colorMask(xt,xt,xt,xt),J=xt)},setLocked:function(xt){R=xt},setClear:function(xt,mt,At,Ct,te){te===!0&&(xt*=Ct,mt*=Ct,At*=Ct),j.set(xt,mt,At,Ct),dt.equals(j)===!1&&(i.clearColor(xt,mt,At,Ct),dt.copy(j))},reset:function(){R=!1,J=null,dt.set(-1,0,0,0)}}}function n(){let R=!1,j=!1,J=null,dt=null,xt=null;return{setReversed:function(mt){if(j!==mt){let At=t.get("EXT_clip_control");mt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),j=mt;let Ct=xt;xt=null,this.setClear(Ct)}},getReversed:function(){return j},setTest:function(mt){mt?ht(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(mt){J!==mt&&!R&&(i.depthMask(mt),J=mt)},setFunc:function(mt){if(j&&(mt=_d[mt]),dt!==mt){switch(mt){case Ca:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=mt}},setLocked:function(mt){R=mt},setClear:function(mt){xt!==mt&&(xt=mt,j&&(mt=1-mt),i.clearDepth(mt))},reset:function(){R=!1,J=null,dt=null,xt=null,j=!1}}}function s(){let R=!1,j=null,J=null,dt=null,xt=null,mt=null,At=null,Ct=null,te=null;return{setTest:function(kt){R||(kt?ht(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(kt){j!==kt&&!R&&(i.stencilMask(kt),j=kt)},setFunc:function(kt,ge,fe){(J!==kt||dt!==ge||xt!==fe)&&(i.stencilFunc(kt,ge,fe),J=kt,dt=ge,xt=fe)},setOp:function(kt,ge,fe){(mt!==kt||At!==ge||Ct!==fe)&&(i.stencilOp(kt,ge,fe),mt=kt,At=ge,Ct=fe)},setLocked:function(kt){R=kt},setClear:function(kt){te!==kt&&(i.clearStencil(kt),te=kt)},reset:function(){R=!1,j=null,J=null,dt=null,xt=null,mt=null,At=null,Ct=null,te=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,w=null,v=null,b=null,E=null,C=null,_=new Wt(0,0,0),P=0,F=!1,L=null,U=null,V=null,O=null,K=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,H=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(X)[1]),tt=H>=1):X.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),tt=H>=2);let Y=null,$={},rt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),_t=new Ee().fromArray(rt),vt=new Ee().fromArray(yt);function Pt(R,j,J,dt){let xt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(R,mt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<J;At++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(j+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return mt}let ct={};ct[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(or),St(!1),Et(Su),ht(i.CULL_FACE),bt(vi);function ht(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Tt(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function Ot(R,j){return h[R]!==j?(i.bindFramebuffer(R,j),h[R]=j,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Lt(R,j){let J=g,dt=!1;if(R){J=f.get(j),J===void 0&&(J=[],f.set(j,J));let xt=R.textures;if(J.length!==xt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,At=xt.length;mt<At;mt++)J[mt]=i.COLOR_ATTACHMENT0+mt;J.length=xt.length,dt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,dt=!0);dt&&i.drawBuffers(J)}function It(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let Jt={[Is]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[Vf]:i.FUNC_REVERSE_SUBTRACT};Jt[Gf]=i.MIN,Jt[Wf]=i.MAX;let pt={[Xf]:i.ZERO,[Yf]:i.ONE,[qf]:i.SRC_COLOR,[Tu]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Kf]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[Au]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[$f]:i.ONE_MINUS_DST_ALPHA,[td]:i.CONSTANT_COLOR,[ed]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(R,j,J,dt,xt,mt,At,Ct,te,kt){if(R===vi){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(ht(i.BLEND),p=!0),R!==zf){if(R!==m||kt!==F){if((y!==Is||b!==Is)&&(i.blendEquation(i.FUNC_ADD),y=Is,b=Is),kt)switch(R){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.ONE,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",R);break}else switch(R){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eu:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wu:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",R);break}w=null,v=null,E=null,C=null,_.set(0,0,0),P=0,m=R,F=kt}return}xt=xt||j,mt=mt||J,At=At||dt,(j!==y||xt!==b)&&(i.blendEquationSeparate(Jt[j],Jt[xt]),y=j,b=xt),(J!==w||dt!==v||mt!==E||At!==C)&&(i.blendFuncSeparate(pt[J],pt[dt],pt[mt],pt[At]),w=J,v=dt,E=mt,C=At),(Ct.equals(_)===!1||te!==P)&&(i.blendColor(Ct.r,Ct.g,Ct.b,te),_.copy(Ct),P=te),m=R,F=!1}function Mt(R,j){R.side===an?Tt(i.CULL_FACE):ht(i.CULL_FACE);let J=R.side===Sn;j&&(J=!J),St(J),R.blending===Sr&&R.transparent===!1?bt(vi):bt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let dt=R.stencilWrite;a.setTest(dt),dt&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Bt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(R){L!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),L=R)}function Et(R){R!==Of?(ht(i.CULL_FACE),R!==U&&(R===Su?i.cullFace(i.BACK):R===Bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),U=R}function Dt(R){R!==V&&(tt&&i.lineWidth(R),V=R)}function Bt(R,j,J){R?(ht(i.POLYGON_OFFSET_FILL),(O!==j||K!==J)&&(O=j,K=J,o.getReversed()&&(j=-j),i.polygonOffset(j,J))):Tt(i.POLYGON_OFFSET_FILL)}function zt(R){R?ht(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function jt(R){R===void 0&&(R=i.TEXTURE0+z-1),Y!==R&&(i.activeTexture(R),Y=R)}function q(R,j,J){J===void 0&&(Y===null?J=i.TEXTURE0+z-1:J=Y);let dt=$[J];dt===void 0&&(dt={type:void 0,texture:void 0},$[J]=dt),(dt.type!==R||dt.texture!==j)&&(Y!==J&&(i.activeTexture(J),Y=J),i.bindTexture(R,j||ct[R]),dt.type=R,dt.texture=j)}function oe(){let R=$[Y];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function T(){try{i.texSubImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function et(){try{i.texSubImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function ft(){try{i.compressedTexSubImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function k(){try{i.texStorage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function M(){try{i.texStorage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function S(){try{i.texImage2D(...arguments)}catch(R){ie("WebGLState:",R)}}function A(){try{i.texImage3D(...arguments)}catch(R){ie("WebGLState:",R)}}function N(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function D(R,j){d[R]!==j&&(i.pixelStorei(R,j),d[R]=j)}function Q(R){_t.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),_t.copy(R))}function Z(R){vt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),vt.copy(R))}function at(R,j){let J=l.get(j);J===void 0&&(J=new WeakMap,l.set(j,J));let dt=J.get(R);dt===void 0&&(dt=i.getUniformBlockIndex(j,R.name),J.set(R,dt))}function W(R,j){let dt=l.get(j).get(R);c.get(j)!==dt&&(i.uniformBlockBinding(j,dt,R.__bindingPointIndex),c.set(j,dt))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,$={},h={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,w=null,v=null,b=null,E=null,C=null,_=new Wt(0,0,0),P=0,F=!1,L=null,U=null,V=null,O=null,K=null,_t.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Tt,bindFramebuffer:Ot,drawBuffers:Lt,useProgram:It,setBlending:bt,setMaterial:Mt,setFlipSided:St,setCullFace:Et,setLineWidth:Dt,setPolygonOffset:Bt,setScissorTest:zt,activeTexture:jt,bindTexture:q,unbindTexture:oe,compressedTexImage2D:$t,compressedTexImage3D:B,texImage2D:S,texImage3D:A,pixelStorei:D,getParameter:N,updateUBOMapping:at,uniformBlockBinding:W,texStorage2D:k,texStorage3D:M,texSubImage2D:T,texSubImage3D:et,compressedTexSubImage2D:nt,compressedTexSubImage3D:ft,scissor:Q,viewport:Z,reset:ot}}function Cb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,T){return g?new OffscreenCanvas(B,T):Qr("canvas")}function p(B,T,et){let nt=1,ft=$t(B);if((ft.width>et||ft.height>et)&&(nt=et/Math.max(ft.width,ft.height)),nt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let k=Math.floor(nt*ft.width),M=Math.floor(nt*ft.height);h===void 0&&(h=x(k,M));let S=T?x(k,M):h;return S.width=k,S.height=M,S.getContext("2d").drawImage(B,0,0,k,M),Qt("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+k+"x"+M+")."),S}else return"data"in B&&Qt("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),B;return B}function m(B){return B.generateMipmaps}function y(B){i.generateMipmap(B)}function w(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(B,T,et,nt,ft,k=!1){if(B!==null){if(i[B]!==void 0)return i[B];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let M;nt&&(M=t.get("EXT_texture_norm16"),M||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let S=T;if(T===i.RED&&(et===i.FLOAT&&(S=i.R32F),et===i.HALF_FLOAT&&(S=i.R16F),et===i.UNSIGNED_BYTE&&(S=i.R8),et===i.UNSIGNED_SHORT&&M&&(S=M.R16_EXT),et===i.SHORT&&M&&(S=M.R16_SNORM_EXT)),T===i.RED_INTEGER&&(et===i.UNSIGNED_BYTE&&(S=i.R8UI),et===i.UNSIGNED_SHORT&&(S=i.R16UI),et===i.UNSIGNED_INT&&(S=i.R32UI),et===i.BYTE&&(S=i.R8I),et===i.SHORT&&(S=i.R16I),et===i.INT&&(S=i.R32I)),T===i.RG&&(et===i.FLOAT&&(S=i.RG32F),et===i.HALF_FLOAT&&(S=i.RG16F),et===i.UNSIGNED_BYTE&&(S=i.RG8),et===i.UNSIGNED_SHORT&&M&&(S=M.RG16_EXT),et===i.SHORT&&M&&(S=M.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(et===i.UNSIGNED_BYTE&&(S=i.RG8UI),et===i.UNSIGNED_SHORT&&(S=i.RG16UI),et===i.UNSIGNED_INT&&(S=i.RG32UI),et===i.BYTE&&(S=i.RG8I),et===i.SHORT&&(S=i.RG16I),et===i.INT&&(S=i.RG32I)),T===i.RGB_INTEGER&&(et===i.UNSIGNED_BYTE&&(S=i.RGB8UI),et===i.UNSIGNED_SHORT&&(S=i.RGB16UI),et===i.UNSIGNED_INT&&(S=i.RGB32UI),et===i.BYTE&&(S=i.RGB8I),et===i.SHORT&&(S=i.RGB16I),et===i.INT&&(S=i.RGB32I)),T===i.RGBA_INTEGER&&(et===i.UNSIGNED_BYTE&&(S=i.RGBA8UI),et===i.UNSIGNED_SHORT&&(S=i.RGBA16UI),et===i.UNSIGNED_INT&&(S=i.RGBA32UI),et===i.BYTE&&(S=i.RGBA8I),et===i.SHORT&&(S=i.RGBA16I),et===i.INT&&(S=i.RGBA32I)),T===i.RGB&&(et===i.UNSIGNED_SHORT&&M&&(S=M.RGB16_EXT),et===i.SHORT&&M&&(S=M.RGB16_SNORM_EXT),et===i.UNSIGNED_INT_5_9_9_9_REV&&(S=i.RGB9_E5),et===i.UNSIGNED_INT_10F_11F_11F_REV&&(S=i.R11F_G11F_B10F)),T===i.RGBA){let A=k?jr:ye.getTransfer(ft);et===i.FLOAT&&(S=i.RGBA32F),et===i.HALF_FLOAT&&(S=i.RGBA16F),et===i.UNSIGNED_BYTE&&(S=A===Se?i.SRGB8_ALPHA8:i.RGBA8),et===i.UNSIGNED_SHORT&&M&&(S=M.RGBA16_EXT),et===i.SHORT&&M&&(S=M.RGBA16_SNORM_EXT),et===i.UNSIGNED_SHORT_4_4_4_4&&(S=i.RGBA4),et===i.UNSIGNED_SHORT_5_5_5_1&&(S=i.RGB5_A1)}return(S===i.R16F||S===i.R32F||S===i.RG16F||S===i.RG32F||S===i.RGBA16F||S===i.RGBA32F)&&t.get("EXT_color_buffer_float"),S}function b(B,T){let et;return B?T===null||T===ai||T===wr?et=i.DEPTH24_STENCIL8:T===Zn?et=i.DEPTH32F_STENCIL8:T===Er&&(et=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ai||T===wr?et=i.DEPTH_COMPONENT24:T===Zn?et=i.DEPTH_COMPONENT32F:T===Er&&(et=i.DEPTH_COMPONENT16),et}function E(B,T){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==Qe&&B.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function C(B){let T=B.target;T.removeEventListener("dispose",C),P(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&d.delete(T)}function _(B){let T=B.target;T.removeEventListener("dispose",_),L(T)}function P(B){let T=n.get(B);if(T.__webglInit===void 0)return;let et=B.source,nt=f.get(et);if(nt){let ft=nt[T.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&F(B),Object.keys(nt).length===0&&f.delete(et)}n.remove(B)}function F(B){let T=n.get(B);i.deleteTexture(T.__webglTexture);let et=B.source,nt=f.get(et);delete nt[T.__cacheKey],o.memory.textures--}function L(B){let T=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ft=0;ft<T.__webglFramebuffer[nt].length;ft++)i.deleteFramebuffer(T.__webglFramebuffer[nt][ft]);else i.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[nt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let et=B.textures;for(let nt=0,ft=et.length;nt<ft;nt++){let k=n.get(et[nt]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(et[nt])}n.remove(B)}let U=0;function V(){U=0}function O(){return U}function K(B){U=B}function z(){let B=U;return B>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,B}function tt(B){let T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function H(B,T){let et=n.get(B);if(B.isVideoTexture&&q(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&et.__version!==B.version){let nt=B.image;if(nt===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(et,B,T);return}}else B.isExternalTexture&&(et.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,et.__webglTexture,i.TEXTURE0+T)}function X(B,T){let et=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&et.__version!==B.version){Tt(et,B,T);return}else B.isExternalTexture&&(et.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,et.__webglTexture,i.TEXTURE0+T)}function Y(B,T){let et=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&et.__version!==B.version){Tt(et,B,T);return}e.bindTexture(i.TEXTURE_3D,et.__webglTexture,i.TEXTURE0+T)}function $(B,T){let et=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&et.__version!==B.version){Ot(et,B,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture,i.TEXTURE0+T)}let rt={[Ss]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},yt={[Qe]:i.NEAREST,[od]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[mc]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},_t={[ud]:i.NEVER,[md]:i.ALWAYS,[hd]:i.LESS,[Qc]:i.LEQUAL,[fd]:i.EQUAL,[tl]:i.GEQUAL,[dd]:i.GREATER,[pd]:i.NOTEQUAL};function vt(B,T){if(T.type===Zn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===mc||T.magFilter===Io||T.magFilter===fs||T.minFilter===on||T.minFilter===mc||T.minFilter===Io||T.minFilter===fs)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,rt[T.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,rt[T.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,rt[T.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,yt[T.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,_t[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qe||T.minFilter!==Io&&T.minFilter!==fs||T.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pt(B,T){let et=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",C));let nt=T.source,ft=f.get(nt);ft===void 0&&(ft={},f.set(nt,ft));let k=tt(T);if(k!==B.__cacheKey){ft[k]===void 0&&(ft[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,et=!0),ft[k].usedTimes++;let M=ft[B.__cacheKey];M!==void 0&&(ft[B.__cacheKey].usedTimes--,M.usedTimes===0&&F(T)),B.__cacheKey=k,B.__webglTexture=ft[k].texture}return et}function ct(B,T,et){return Math.floor(Math.floor(B/et)/T)}function ht(B,T,et,nt){let k=B.updateRanges;if(k.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,et,nt,T.data);else{k.sort((D,Q)=>D.start-Q.start);let M=0;for(let D=1;D<k.length;D++){let Q=k[M],Z=k[D],at=Q.start+Q.count,W=ct(Z.start,T.width,4),ot=ct(Q.start,T.width,4);Z.start<=at+1&&W===ot&&ct(Z.start+Z.count-1,T.width,4)===W?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++M,k[M]=Z)}k.length=M+1;let S=e.getParameter(i.UNPACK_ROW_LENGTH),A=e.getParameter(i.UNPACK_SKIP_PIXELS),N=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let D=0,Q=k.length;D<Q;D++){let Z=k[D],at=Math.floor(Z.start/4),W=Math.ceil(Z.count/4),ot=at%T.width,R=Math.floor(at/T.width),j=W,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,R),e.texSubImage2D(i.TEXTURE_2D,0,ot,R,j,J,et,nt,T.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,S),e.pixelStorei(i.UNPACK_SKIP_PIXELS,A),e.pixelStorei(i.UNPACK_SKIP_ROWS,N)}}function Tt(B,T,et){let nt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=i.TEXTURE_3D);let ft=Pt(B,T),k=T.source;e.bindTexture(nt,B.__webglTexture,i.TEXTURE0+et);let M=n.get(k);if(k.version!==M.__version||ft===!0){if(e.activeTexture(i.TEXTURE0+et),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let J=ye.getPrimaries(ye.workingColorSpace),dt=T.colorSpace===Bi?null:ye.getPrimaries(T.colorSpace),xt=T.colorSpace===Bi||J===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let A=p(T.image,!1,s.maxTextureSize);A=oe(T,A);let N=r.convert(T.format,T.colorSpace),D=r.convert(T.type),Q=v(T.internalFormat,N,D,T.normalized,T.colorSpace,T.isVideoTexture);vt(nt,T);let Z,at=T.mipmaps,W=T.isVideoTexture!==!0,ot=M.__version===void 0||ft===!0,R=k.dataReady,j=E(T,A);if(T.isDepthTexture)Q=b(T.format===ds,T.type),ot&&(W?e.texStorage2D(i.TEXTURE_2D,1,Q,A.width,A.height):e.texImage2D(i.TEXTURE_2D,0,Q,A.width,A.height,0,N,D,null));else if(T.isDataTexture)if(at.length>0){W&&ot&&e.texStorage2D(i.TEXTURE_2D,j,Q,at[0].width,at[0].height);for(let J=0,dt=at.length;J<dt;J++)Z=at[J],W?R&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Z.width,Z.height,N,D,Z.data):e.texImage2D(i.TEXTURE_2D,J,Q,Z.width,Z.height,0,N,D,Z.data);T.generateMipmaps=!1}else W?(ot&&e.texStorage2D(i.TEXTURE_2D,j,Q,A.width,A.height),R&&ht(T,A,N,D)):e.texImage2D(i.TEXTURE_2D,0,Q,A.width,A.height,0,N,D,A.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,Q,at[0].width,at[0].height,A.depth);for(let J=0,dt=at.length;J<dt;J++)if(Z=at[J],T.format!==Jn)if(N!==null)if(W){if(R)if(T.layerUpdates.size>0){let xt=Zu(Z.width,Z.height,T.format,T.type);for(let mt of T.layerUpdates){let At=Z.data.subarray(mt*xt/Z.data.BYTES_PER_ELEMENT,(mt+1)*xt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,mt,Z.width,Z.height,1,N,At)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Z.width,Z.height,A.depth,N,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Q,Z.width,Z.height,A.depth,0,Z.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Z.width,Z.height,A.depth,N,D,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Q,Z.width,Z.height,A.depth,0,N,D,Z.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{W&&ot&&e.texStorage2D(i.TEXTURE_2D,j,Q,at[0].width,at[0].height);for(let J=0,dt=at.length;J<dt;J++)Z=at[J],T.format!==Jn?N!==null?W?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Z.width,Z.height,N,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Q,Z.width,Z.height,0,Z.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?R&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Z.width,Z.height,N,D,Z.data):e.texImage2D(i.TEXTURE_2D,J,Q,Z.width,Z.height,0,N,D,Z.data)}else if(T.isDataArrayTexture)if(W){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,j,Q,A.width,A.height,A.depth),R)if(T.layerUpdates.size>0){let J=Zu(A.width,A.height,T.format,T.type);for(let dt of T.layerUpdates){let xt=A.data.subarray(dt*J/A.data.BYTES_PER_ELEMENT,(dt+1)*J/A.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,A.width,A.height,1,N,D,xt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,N,D,A.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,A.width,A.height,A.depth,0,N,D,A.data);else if(T.isData3DTexture)W?(ot&&e.texStorage3D(i.TEXTURE_3D,j,Q,A.width,A.height,A.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,N,D,A.data)):e.texImage3D(i.TEXTURE_3D,0,Q,A.width,A.height,A.depth,0,N,D,A.data);else if(T.isFramebufferTexture){if(ot)if(W)e.texStorage2D(i.TEXTURE_2D,j,Q,A.width,A.height);else{let J=A.width,dt=A.height;for(let xt=0;xt<j;xt++)e.texImage2D(i.TEXTURE_2D,xt,Q,J,dt,0,N,D,null),J>>=1,dt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),A.parentNode!==J){J.appendChild(A),d.add(T),J.onpaint=dt=>{let xt=dt.changedElements;for(let mt of d)xt.includes(mt.image)&&(mt.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,A);else{let xt=i.RGBA,mt=i.RGBA,At=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,mt,At,A)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(at.length>0){if(W&&ot){let J=$t(at[0]);e.texStorage2D(i.TEXTURE_2D,j,Q,J.width,J.height)}for(let J=0,dt=at.length;J<dt;J++)Z=at[J],W?R&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,N,D,Z):e.texImage2D(i.TEXTURE_2D,J,Q,N,D,Z);T.generateMipmaps=!1}else if(W){if(ot){let J=$t(A);e.texStorage2D(i.TEXTURE_2D,j,Q,J.width,J.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,N,D,A)}else e.texImage2D(i.TEXTURE_2D,0,Q,N,D,A);m(T)&&y(nt),M.__version=k.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Ot(B,T,et){if(T.image.length!==6)return;let nt=Pt(B,T),ft=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+et);let k=n.get(ft);if(ft.version!==k.__version||nt===!0){e.activeTexture(i.TEXTURE0+et);let M=ye.getPrimaries(ye.workingColorSpace),S=T.colorSpace===Bi?null:ye.getPrimaries(T.colorSpace),A=T.colorSpace===Bi||M===S?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let N=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let mt=0;mt<6;mt++)!N&&!D?Q[mt]=p(T.image[mt],!0,s.maxCubemapSize):Q[mt]=D?T.image[mt].image:T.image[mt],Q[mt]=oe(T,Q[mt]);let Z=Q[0],at=r.convert(T.format,T.colorSpace),W=r.convert(T.type),ot=v(T.internalFormat,at,W,T.normalized,T.colorSpace),R=T.isVideoTexture!==!0,j=k.__version===void 0||nt===!0,J=ft.dataReady,dt=E(T,Z);vt(i.TEXTURE_CUBE_MAP,T);let xt;if(N){R&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ot,Z.width,Z.height);for(let mt=0;mt<6;mt++){xt=Q[mt].mipmaps;for(let At=0;At<xt.length;At++){let Ct=xt[At];T.format!==Jn?at!==null?R?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,0,0,Ct.width,Ct.height,at,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,ot,Ct.width,Ct.height,0,Ct.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,0,0,Ct.width,Ct.height,at,W,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,ot,Ct.width,Ct.height,0,at,W,Ct.data)}}}else{if(xt=T.mipmaps,R&&j){xt.length>0&&dt++;let mt=$t(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ot,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(D){R?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Q[mt].width,Q[mt].height,at,W,Q[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,Q[mt].width,Q[mt].height,0,at,W,Q[mt].data);for(let At=0;At<xt.length;At++){let te=xt[At].image[mt].image;R?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,0,0,te.width,te.height,at,W,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,ot,te.width,te.height,0,at,W,te.data)}}else{R?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,at,W,Q[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ot,at,W,Q[mt]);for(let At=0;At<xt.length;At++){let Ct=xt[At];R?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,0,0,at,W,Ct.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,ot,at,W,Ct.image[mt])}}}m(T)&&y(i.TEXTURE_CUBE_MAP),k.__version=ft.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Lt(B,T,et,nt,ft,k){let M=r.convert(et.format,et.colorSpace),S=r.convert(et.type),A=v(et.internalFormat,M,S,et.normalized,et.colorSpace),N=n.get(T),D=n.get(et);if(D.__renderTarget=T,!N.__hasExternalTextures){let Q=Math.max(1,T.width>>k),Z=Math.max(1,T.height>>k);ft===i.TEXTURE_3D||ft===i.TEXTURE_2D_ARRAY?e.texImage3D(ft,k,A,Q,Z,T.depth,0,M,S,null):e.texImage2D(ft,k,A,Q,Z,0,M,S,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ft,D.__webglTexture,0,zt(T)):(ft===i.TEXTURE_2D||ft>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ft,D.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(B,T,et){if(i.bindRenderbuffer(i.RENDERBUFFER,B),T.depthBuffer){let nt=T.depthTexture,ft=nt&&nt.isDepthTexture?nt.type:null,k=b(T.stencilBuffer,ft),M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;jt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(T),k,T.width,T.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(T),k,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,k,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,M,i.RENDERBUFFER,B)}else{let nt=T.textures;for(let ft=0;ft<nt.length;ft++){let k=nt[ft],M=r.convert(k.format,k.colorSpace),S=r.convert(k.type),A=v(k.internalFormat,M,S,k.normalized,k.colorSpace);jt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(T),A,T.width,T.height):et?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(T),A,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,A,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Jt(B,T,et){let nt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=n.get(T.depthTexture);if(ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),nt){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,T.depthTexture.addEventListener("dispose",C)),ft.__webglTexture===void 0){ft.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(i.TEXTURE_CUBE_MAP,T.depthTexture);let N=r.convert(T.depthTexture.format),D=r.convert(T.depthTexture.type),Q;T.depthTexture.format===gi?Q=i.DEPTH_COMPONENT24:T.depthTexture.format===ds&&(Q=i.DEPTH24_STENCIL8);for(let Z=0;Z<6;Z++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Q,T.width,T.height,0,N,D,null)}}else H(T.depthTexture,0);let k=ft.__webglTexture,M=zt(T),S=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+et:i.TEXTURE_2D,A=T.depthTexture.format===ds?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===gi)jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,S,k,0,M):i.framebufferTexture2D(i.FRAMEBUFFER,A,S,k,0);else if(T.depthTexture.format===ds)jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,S,k,0,M):i.framebufferTexture2D(i.FRAMEBUFFER,A,S,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(B){let T=n.get(B),et=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){let nt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),nt){let ft=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,nt.removeEventListener("dispose",ft)};nt.addEventListener("dispose",ft),T.__depthDisposeCallback=ft}T.__boundDepthTexture=nt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(et)for(let nt=0;nt<6;nt++)Jt(T.__webglFramebuffer[nt],B,nt);else{let nt=B.texture.mipmaps;nt&&nt.length>0?Jt(T.__webglFramebuffer[0],B,0):Jt(T.__webglFramebuffer,B,0)}else if(et){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]===void 0)T.__webglDepthbuffer[nt]=i.createRenderbuffer(),It(T.__webglDepthbuffer[nt],B,!1);else{let ft=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=T.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,k)}}else{let nt=B.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),It(T.__webglDepthbuffer,B,!1);else{let ft=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,k)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(B,T,et){let nt=n.get(B);T!==void 0&&Lt(nt.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),et!==void 0&&pt(B)}function Mt(B){let T=B.texture,et=n.get(B),nt=n.get(T);B.addEventListener("dispose",_);let ft=B.textures,k=B.isWebGLCubeRenderTarget===!0,M=ft.length>1;if(M||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=T.version,o.memory.textures++),k){et.__webglFramebuffer=[];for(let S=0;S<6;S++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[S]=[];for(let A=0;A<T.mipmaps.length;A++)et.__webglFramebuffer[S][A]=i.createFramebuffer()}else et.__webglFramebuffer[S]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let S=0;S<T.mipmaps.length;S++)et.__webglFramebuffer[S]=i.createFramebuffer()}else et.__webglFramebuffer=i.createFramebuffer();if(M)for(let S=0,A=ft.length;S<A;S++){let N=n.get(ft[S]);N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&jt(B)===!1){et.__webglMultisampledFramebuffer=i.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let S=0;S<ft.length;S++){let A=ft[S];et.__webglColorRenderbuffer[S]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,et.__webglColorRenderbuffer[S]);let N=r.convert(A.format,A.colorSpace),D=r.convert(A.type),Q=v(A.internalFormat,N,D,A.normalized,A.colorSpace,B.isXRRenderTarget===!0),Z=zt(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,Q,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+S,i.RENDERBUFFER,et.__webglColorRenderbuffer[S])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(et.__webglDepthRenderbuffer=i.createRenderbuffer(),It(et.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),vt(i.TEXTURE_CUBE_MAP,T);for(let S=0;S<6;S++)if(T.mipmaps&&T.mipmaps.length>0)for(let A=0;A<T.mipmaps.length;A++)Lt(et.__webglFramebuffer[S][A],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+S,A);else Lt(et.__webglFramebuffer[S],B,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+S,0);m(T)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(M){for(let S=0,A=ft.length;S<A;S++){let N=ft[S],D=n.get(N),Q=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Q=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,D.__webglTexture),vt(Q,N),Lt(et.__webglFramebuffer,B,N,i.COLOR_ATTACHMENT0+S,Q,0),m(N)&&y(Q)}e.unbindTexture()}else{let S=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(S=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(S,nt.__webglTexture),vt(S,T),T.mipmaps&&T.mipmaps.length>0)for(let A=0;A<T.mipmaps.length;A++)Lt(et.__webglFramebuffer[A],B,T,i.COLOR_ATTACHMENT0,S,A);else Lt(et.__webglFramebuffer,B,T,i.COLOR_ATTACHMENT0,S,0);m(T)&&y(S),e.unbindTexture()}B.depthBuffer&&pt(B)}function St(B){let T=B.textures;for(let et=0,nt=T.length;et<nt;et++){let ft=T[et];if(m(ft)){let k=w(B),M=n.get(ft).__webglTexture;e.bindTexture(k,M),y(k),e.unbindTexture()}}}let Et=[],Dt=[];function Bt(B){if(B.samples>0){if(jt(B)===!1){let T=B.textures,et=B.width,nt=B.height,ft=i.COLOR_BUFFER_BIT,k=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,M=n.get(B),S=T.length>1;if(S)for(let N=0;N<T.length;N++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer);let A=B.texture.mipmaps;A&&A.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let N=0;N<T.length;N++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ft|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ft|=i.STENCIL_BUFFER_BIT)),S){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,M.__webglColorRenderbuffer[N]);let D=n.get(T[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,et,nt,0,0,et,nt,ft,i.NEAREST),c===!0&&(Et.length=0,Dt.length=0,Et.push(i.COLOR_ATTACHMENT0+N),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Et.push(k),Dt.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),S)for(let N=0;N<T.length;N++){e.bindFramebuffer(i.FRAMEBUFFER,M.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,M.__webglColorRenderbuffer[N]);let D=n.get(T[N]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let T=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function zt(B){return Math.min(s.maxSamples,B.samples)}function jt(B){let T=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function q(B){let T=o.render.frame;u.get(B)!==T&&(u.set(B,T),B.update())}function oe(B,T){let et=B.colorSpace,nt=B.format,ft=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||et!==Kr&&et!==Bi&&(ye.getTransfer(et)===Se?(nt!==Jn||ft!==In)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",et)),T}function $t(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=bt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ib(i,t){function e(n,s=Bi){let r,o=ye.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uu)return i.BYTE;if(n===Fu)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===ku)return i.ALPHA;if(n===zu)return i.RGB;if(n===Jn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===vc)return i.RED_INTEGER;if(n===ps)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Po||n===Lo||n===No||n===Do)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Ec||n===wc||n===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Uo||n===Lc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ic)return r.COMPRESSED_R11_EAC;if(n===Pc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nc||n===Dc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===Yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yc)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qc||n===Zc||n===Jc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qc)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Kc||n===Fo||n===jc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`,ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:Pb,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends xi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new ch,m={},y=e.getContextAttributes(),w=null,v=null,b=[],E=[],C=new Rt,_=null,P=null,F=new bn;F.viewport=new Ee;let L=new bn;L.viewport=new Ee;let U=[F,L],V=new hc,O=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let ht=b[ct];return ht===void 0&&(ht=new fr,b[ct]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(ct){let ht=b[ct];return ht===void 0&&(ht=new fr,b[ct]=ht),ht.getGripSpace()},this.getHand=function(ct){let ht=b[ct];return ht===void 0&&(ht=new fr,b[ct]=ht),ht.getHandSpace()};function z(ct){let ht=E.indexOf(ct.inputSource);if(ht===-1)return;let Tt=b[ht];Tt!==void 0&&(Tt.update(ct.inputSource,ct.frame,l||o),Tt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function tt(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",H);for(let ct=0;ct<b.length;ct++){let ht=E[ct];ht!==null&&(E[ct]=null,b[ct].disconnect(ht))}O=null,K=null,p.reset();for(let ct in m)delete m[ct];if(t.setRenderTarget(w),f=null,h=null,d=null,s=null,v=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),P!==null){let ct=P.camera;ct.fov=P.fov,ct.zoom=P.zoom,ct.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){r=ct,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){a=ct,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ct){l=ct},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ot=null,Lt=null;y.depth&&(Lt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=y.stencil?ds:gi,Ot=y.stencil?wr:ai);let It={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(It),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new An(h.textureWidth,h.textureHeight,{format:Jn,type:In,depthTexture:new es(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Tt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new An(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(ct){for(let ht=0;ht<ct.removed.length;ht++){let Tt=ct.removed[ht],Ot=E.indexOf(Tt);Ot>=0&&(E[Ot]=null,b[Ot].disconnect(Tt))}for(let ht=0;ht<ct.added.length;ht++){let Tt=ct.added[ht],Ot=E.indexOf(Tt);if(Ot===-1){for(let It=0;It<b.length;It++)if(It>=E.length){E.push(Tt),Ot=It;break}else if(E[It]===null){E[It]=Tt,Ot=It;break}if(Ot===-1)break}let Lt=b[Ot];Lt&&Lt.connect(Tt)}}let X=new G,Y=new G;function $(ct,ht,Tt){X.setFromMatrixPosition(ht.matrixWorld),Y.setFromMatrixPosition(Tt.matrixWorld);let Ot=X.distanceTo(Y),Lt=ht.projectionMatrix.elements,It=Tt.projectionMatrix.elements,Jt=Lt[14]/(Lt[10]-1),pt=Lt[14]/(Lt[10]+1),bt=(Lt[9]+1)/Lt[5],Mt=(Lt[9]-1)/Lt[5],St=(Lt[8]-1)/Lt[0],Et=(It[8]+1)/It[0],Dt=Jt*St,Bt=Jt*Et,zt=Ot/(-St+Et),jt=zt*-St;if(ht.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(jt),ct.translateZ(zt),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),Lt[10]===-1)ct.projectionMatrix.copy(ht.projectionMatrix),ct.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let q=Jt+zt,oe=pt+zt,$t=Dt-jt,B=Bt+(Ot-jt),T=bt*pt/oe*q,et=Mt*pt/oe*q;ct.projectionMatrix.makePerspective($t,B,T,et,q,oe),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function rt(ct,ht){ht===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(ht.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let ht=ct.near,Tt=ct.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),V.near=L.near=F.near=ht,V.far=L.far=F.far=Tt,(O!==V.near||K!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,K=V.far),V.layers.mask=ct.layers.mask|6,F.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let Ot=ct.parent,Lt=V.cameras;rt(V,Ot);for(let It=0;It<Lt.length;It++)rt(Lt[It],Ot);Lt.length===2?$(V,F,L):V.projectionMatrix.copy(F.projectionMatrix),P===null&&ct.isPerspectiveCamera&&(P={camera:ct,fov:ct.fov,zoom:ct.zoom}),yt(ct,V,Ot)};function yt(ct,ht,Tt){Tt===null?ct.matrix.copy(ht.matrixWorld):(ct.matrix.copy(Tt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(ht.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(ht.projectionMatrix),ct.projectionMatrixInverse.copy(ht.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=lr*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(ct){c=ct,h!==null&&(h.fixedFoveation=ct),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ct)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(ct){return m[ct]};let _t=null;function vt(ct,ht){if(u=ht.getViewerPose(l||o),g=ht,u!==null){let Tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ot=!1;Tt.length!==V.cameras.length&&(V.cameras.length=0,Ot=!0);for(let pt=0;pt<Tt.length;pt++){let bt=Tt[pt],Mt=null;if(f!==null)Mt=f.getViewport(bt);else{let Et=d.getViewSubImage(h,bt);Mt=Et.viewport,pt===0&&(t.setRenderTargetTextures(v,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(v))}let St=U[pt];St===void 0&&(St=new bn,St.layers.enable(pt),St.viewport=new Ee,U[pt]=St),St.matrix.fromArray(bt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(bt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),pt===0&&(V.matrix.copy(St.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ot===!0&&V.cameras.push(St)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let pt=d.getDepthInformation(Tt[0]);pt&&pt.isValid&&pt.texture&&p.init(pt,s.renderState)}if(Lt&&Lt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let pt=0;pt<Tt.length;pt++){let bt=Tt[pt].camera;if(bt){let Mt=m[bt];Mt||(Mt=new co,m[bt]=Mt);let St=d.getCameraImage(bt);Mt.sourceTexture=St}}}}for(let Tt=0;Tt<b.length;Tt++){let Ot=E[Tt],Lt=b[Tt];Ot!==null&&Lt!==void 0&&Lt.update(Ot,ht,l||o)}_t&&_t(ct,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Pt=new Zd;Pt.setAnimationLoop(vt),this.setAnimationLoop=function(ct){_t=ct},this.dispose=function(){}}},Nb=new _e,tp=new ue;tp.set(-1,0,0,0,1,0,0,0,1);function Db(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),w=y.envMap,v=y.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ub(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let E=b.program;n.uniformBlockBinding(v,E)}function l(v,b){let E=s[v.id];E===void 0&&(p(v),E=u(v),s[v.id]=E,v.addEventListener("dispose",y));let C=b.program;n.updateUBOMapping(v,C);let _=t.render.frame;r[v.id]!==_&&(h(v),r[v.id]=_)}function u(v){let b=d();v.__bindingPointIndex=b;let E=i.createBuffer(),C=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let b=s[v.id],E=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,P=E.length;_<P;_++){let F=E[_];if(Array.isArray(F))for(let L=0,U=F.length;L<U;L++)f(F[L],_,L,C);else f(F,_,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,E,C){if(x(v,b,E,C)===!0){let _=v.__offset,P=v.value;if(Array.isArray(P)){let F=0;for(let L=0;L<P.length;L++){let U=P[L],V=m(U);g(U,v.__data,F),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(F+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(P,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function x(v,b,E,C){let _=v.value,P=b+"_"+E;if(C[P]===void 0)return typeof _=="number"||typeof _=="boolean"?C[P]=_:ArrayBuffer.isView(_)?C[P]=_.slice():C[P]=_.clone(),!0;{let F=C[P];if(typeof _=="number"||typeof _=="boolean"){if(F!==_)return C[P]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(F.equals(_)===!1)return F.copy(_),!0}}return!1}function p(v){let b=v.uniforms,E=0,C=16;for(let P=0,F=b.length;P<F;P++){let L=Array.isArray(b[P])?b[P]:[b[P]];for(let U=0,V=L.length;U<V;U++){let O=L[U],K=Array.isArray(O.value)?O.value:[O.value];for(let z=0,tt=K.length;z<tt;z++){let H=K[z],X=m(H),Y=E%C,$=Y%X.boundary,rt=Y+$;E+=$,rt!==0&&C-rt<X.storage&&(E+=C-rt),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=X.storage}}}let _=E%C;return _>0&&(E+=C-_),v.__size=E,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){let b=v.target;b.removeEventListener("dispose",y);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function Ob(){return bi===null&&(bi=new ro(Fb,16,16,ps,ci),bi.name="DFG_LUT",bi.minFilter=on,bi.magFilter=on,bi.wrapS=pi,bi.wrapT=pi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var rl=class{constructor(t={}){let{canvas:e=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=In}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([Mc,bc,vc]),m=new Set([In,ai,Er,wr,xc,yc]),y=new Uint32Array(4),w=new Int32Array(4),v=new G,b=null,E=null,C=[],_=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,L=!1,U=null,V=null,O=null,K=null;this._outputColorSpace=qe;let z=0,tt=0,H=null,X=-1,Y=null,$=new Ee,rt=new Ee,yt=null,_t=new Wt(0),vt=0,Pt=e.width,ct=e.height,ht=1,Tt=null,Ot=null,Lt=new Ee(0,0,Pt,ct),It=new Ee(0,0,Pt,ct),Jt=!1,pt=new pr,bt=!1,Mt=!1,St=new _e,Et=new G,Dt=new Ee,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function jt(){return H===null?ht:1}let q=n;function oe(I,it){return e.getContext(I,it)}let $t,B,T,et,nt,ft,k,M,S,A,N,D,Q,Z,at,W,ot,R,j,J,dt,xt,mt;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",ge,!1),q===null){let it="webgl2";if(q=oe(it,I),q===null)throw oe(it)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}At()}catch(I){throw e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ie("WebGLRenderer: "+I.message),I}function At(){$t=new W_(q),$t.init(),dt=new Ib(q,$t),B=new D_(q,$t,t,dt),T=new Rb(q,$t),B.reversedDepthBuffer&&h&&T.buffers.depth.setReversed(!0),V=q.createFramebuffer(),O=q.createFramebuffer(),K=q.createFramebuffer(),et=new q_(q),nt=new pb,ft=new Cb(q,$t,T,nt,B,dt,et),k=new G_(F),M=new J0(q),xt=new L_(q,M),S=new X_(q,M,et,xt),A=new J_(q,S,M,xt,et),R=new Z_(q,B,ft),at=new U_(nt),N=new db(F,k,$t,B,xt,at),D=new Db(F,nt),Q=new gb,Z=new Mb($t),ot=new P_(F,k,T,A,g,c),W=new Ab(F,A,B),mt=new Ub(q,et,B,T),j=new N_(q,$t,et),J=new Y_(q,$t,et),et.programs=N.programs,F.capabilities=B,F.extensions=$t,F.properties=nt,F.renderLists=Q,F.shadowMap=W,F.state=T,F.info=et}x!==In&&(P=new K_(x,e.width,e.height,a,s,r));let Ct=new lh(F,q);this.xr=Ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let I=$t.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=$t.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(I){I!==void 0&&(ht=I,this.setSize(Pt,ct,!1))},this.getSize=function(I){return I.set(Pt,ct)},this.setSize=function(I,it,gt=!0){if(Ct.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pt=I,ct=it,e.width=Math.floor(I*ht),e.height=Math.floor(it*ht),gt===!0&&(e.style.width=I+"px",e.style.height=it+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,I,it)},this.getDrawingBufferSize=function(I){return I.set(Pt*ht,ct*ht).floor()},this.setDrawingBufferSize=function(I,it,gt){Pt=I,ct=it,ht=gt,e.width=Math.floor(I*gt),e.height=Math.floor(it*gt),this.setViewport(0,0,I,it)},this.setEffects=function(I){if(x===In){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let it=0;it<I.length;it++)if(I[it].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy($)},this.getViewport=function(I){return I.copy(Lt)},this.setViewport=function(I,it,gt,ut){I.isVector4?Lt.set(I.x,I.y,I.z,I.w):Lt.set(I,it,gt,ut),T.viewport($.copy(Lt).multiplyScalar(ht).round())},this.getScissor=function(I){return I.copy(It)},this.setScissor=function(I,it,gt,ut){I.isVector4?It.set(I.x,I.y,I.z,I.w):It.set(I,it,gt,ut),T.scissor(rt.copy(It).multiplyScalar(ht).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(I){T.setScissorTest(Jt=I)},this.setOpaqueSort=function(I){Tt=I},this.setTransparentSort=function(I){Ot=I},this.getClearColor=function(I){return I.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(I=!0,it=!0,gt=!0){let ut=0;if(I){let lt=!1;if(H!==null){let Nt=H.texture.format;lt=p.has(Nt)}if(lt){let Nt=H.texture.type,Ht=m.has(Nt),Ft=ot.getClearColor(),Yt=ot.getClearAlpha(),Kt=Ft.r,de=Ft.g,xe=Ft.b;Ht?(y[0]=Kt,y[1]=de,y[2]=xe,y[3]=Yt,q.clearBufferuiv(q.COLOR,0,y)):(w[0]=Kt,w[1]=de,w[2]=xe,w[3]=Yt,q.clearBufferiv(q.COLOR,0,w))}else ut|=q.COLOR_BUFFER_BIT}it&&(ut|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),gt&&(ut|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ut!==0&&q.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),U=I},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),ot.dispose(),Q.dispose(),Z.dispose(),nt.dispose(),k.dispose(),A.dispose(),xt.dispose(),mt.dispose(),N.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Gt),Ct.removeEventListener("sessionend",ee),ne.stop()};function te(I){I.preventDefault(),to("WebGLRenderer: Context Lost."),L=!0}function kt(){to("WebGLRenderer: Context Restored."),L=!1;let I=et.autoReset,it=W.enabled,gt=W.autoUpdate,ut=W.needsUpdate,lt=W.type;At(),et.autoReset=I,W.enabled=it,W.autoUpdate=gt,W.needsUpdate=ut,W.type=lt}function ge(I){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function fe(I){let it=I.target;it.removeEventListener("dispose",fe),Ge(it)}function Ge(I){Te(I),nt.remove(I)}function Te(I){let it=nt.get(I).programs;it!==void 0&&(it.forEach(function(gt){N.releaseProgram(gt)}),I.isShaderMaterial&&N.releaseShaderCache(I))}this.renderBufferDirect=function(I,it,gt,ut,lt,Nt){it===null&&(it=Bt);let Ht=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Ft=zs(I,it,gt,ut,lt);T.setMaterial(ut,Ht);let Yt=gt.index,Kt=1;if(ut.wireframe===!0){if(Yt=S.getWireframeAttribute(gt),Yt===void 0)return;Kt=2}let de=gt.drawRange,xe=gt.attributes.position,qt=de.start*Kt,Me=(de.start+de.count)*Kt;Nt!==null&&(qt=Math.max(qt,Nt.start*Kt),Me=Math.min(Me,(Nt.start+Nt.count)*Kt)),Yt!==null?(qt=Math.max(qt,0),Me=Math.min(Me,Yt.count)):xe!=null&&(qt=Math.max(qt,0),Me=Math.min(Me,xe.count));let Xe=Me-qt;if(Xe<0||Xe===1/0)return;xt.setup(lt,ut,Ft,gt,Yt);let De,Ie=j;if(Yt!==null&&(De=M.get(Yt),Ie=J,Ie.setIndex(De)),lt.isMesh)ut.wireframe===!0?(T.setLineWidth(ut.wireframeLinewidth*jt()),Ie.setMode(q.LINES)):Ie.setMode(q.TRIANGLES);else if(lt.isLine){let fn=ut.linewidth;fn===void 0&&(fn=1),T.setLineWidth(fn*jt()),lt.isLineSegments?Ie.setMode(q.LINES):lt.isLineLoop?Ie.setMode(q.LINE_LOOP):Ie.setMode(q.LINE_STRIP)}else lt.isPoints?Ie.setMode(q.POINTS):lt.isSprite&&Ie.setMode(q.TRIANGLES);if(lt.isBatchedMesh)if($t.get("WEBGL_multi_draw"))Ie.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let fn=lt._multiDrawStarts,Vt=lt._multiDrawCounts,_n=lt._multiDrawCount,ve=Yt?M.get(Yt).bytesPerElement:1,Wn=nt.get(ut).currentProgram.getUniforms();for(let fi=0;fi<_n;fi++)Wn.setValue(q,"_gl_DrawID",fi),Ie.render(fn[fi]/ve,Vt[fi])}else if(lt.isInstancedMesh)Ie.renderInstances(qt,Xe,lt.count);else if(gt.isInstancedBufferGeometry){let fn=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Vt=Math.min(gt.instanceCount,fn);Ie.renderInstances(qt,Xe,Vt)}else Ie.render(qt,Xe)};function He(I,it,gt,ut){U!==null&&I.isNodeMaterial&&U.setObject(ut,I),bt===!0&&at.setState(I,gt,!1),I.transparent===!0&&I.side===an&&I.forceSinglePass===!1?(I.side=Sn,I.needsUpdate=!0,sn(I,it,ut),I.side=us,I.needsUpdate=!0,sn(I,it,ut),I.side=an):sn(I,it,ut)}this.compile=function(I,it,gt=null){gt===null&&(gt=I),U!==null&&U.renderStart(I,it,gt),E=Z.get(gt),E.init(it),_.push(E),gt.traverseVisible(function(lt){lt.isLight&&lt.layers.test(it.layers)&&(E.pushLight(lt),lt.castShadow&&E.pushShadow(lt))}),I!==gt&&I.traverseVisible(function(lt){lt.isLight&&lt.layers.test(it.layers)&&(E.pushLight(lt),lt.castShadow&&E.pushShadow(lt))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),Mt=this.localClippingEnabled,bt=at.init(this.clippingPlanes,Mt),bt===!0&&at.setGlobalState(this.clippingPlanes,it),U!==null&&W.render(E.state.shadowsArray,gt,it);let ut=new Set;return I.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Nt=lt.material;if(Nt)if(Array.isArray(Nt))for(let Ht=0;Ht<Nt.length;Ht++){let Ft=Nt[Ht];He(Ft,gt,it,lt),ut.add(Ft)}else He(Nt,gt,it,lt),ut.add(Nt)}),E=_.pop(),U!==null&&U.renderEnd(),ut},this.compileAsync=function(I,it,gt=null){let ut=this.compile(I,it,gt);return new Promise(lt=>{function Nt(){if(ut.forEach(function(Ht){let Yt=nt.get(Ht).currentProgram;(Yt===void 0||Yt.isReady())&&ut.delete(Ht)}),ut.size===0){lt(I);return}setTimeout(Nt,10)}$t.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let We=null;function wt(I){We&&We(I)}function Gt(){ne.stop()}function ee(){ne.start()}let ne=new Zd;ne.setAnimationLoop(wt),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(I){We=I,Ct.setAnimationLoop(I),I===null?ne.stop():ne.start()},Ct.addEventListener("sessionstart",Gt),Ct.addEventListener("sessionend",ee),this.render=function(I,it){if(it!==void 0&&it.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(I,it);let gt=Ct.enabled===!0&&Ct.isPresenting===!0,ut=P!==null&&(H===null||gt)&&P.begin(F,H);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(it),it=Ct.getCamera()),I.isScene===!0&&I.onBeforeRender(F,I,it,H),E=Z.get(I,_.length),E.init(it),E.state.textureUnits=ft.getTextureUnits(),_.push(E),St.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),pt.setFromProjectionMatrix(St,si,it.reversedDepth),Mt=this.localClippingEnabled,bt=at.init(this.clippingPlanes,Mt),b=Q.get(I,C.length),b.init(),C.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let Ht=F.xr.getDepthSensingMesh();Ht!==null&&Ce(Ht,it,-1/0,F.sortObjects)}Ce(I,it,0,F.sortObjects),b.finish(),U!==null&&U.updateLights(E.state.lightsArray),F.sortObjects===!0&&b.sort(Tt,Ot),zt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,zt&&ot.addToRenderList(b,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&at.beginShadows();let lt=E.state.shadowsArray;if(W.render(lt,I,it),bt===!0&&at.endShadows(),(ut&&P.hasRenderPass())===!1){let Ht=b.opaque,Ft=b.transmissive;if(E.setupLights(),it.isArrayCamera){let Yt=it.cameras;if(Ft.length>0)for(let Kt=0,de=Yt.length;Kt<de;Kt++){let xe=Yt[Kt];jn(Ht,Ft,I,xe)}zt&&ot.render(I);for(let Kt=0,de=Yt.length;Kt<de;Kt++){let xe=Yt[Kt];Ln(b,I,xe,xe.viewport)}}else Ft.length>0&&jn(Ht,Ft,I,it),zt&&ot.render(I),Ln(b,I,it)}H!==null&&tt===0&&(ft.updateMultisampleRenderTarget(H),ft.updateRenderTargetMipmap(H)),ut&&P.end(F),I.isScene===!0&&I.onAfterRender(F,I,it),xt.resetDefaultState(),X=-1,Y=null,_.pop(),_.length>0?(E=_[_.length-1],ft.setTextureUnits(E.state.textureUnits),bt===!0&&at.setGlobalState(F.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,U!==null&&U.renderEnd()};function Ce(I,it,gt,ut){if(I.visible===!1)return;if(I.layers.test(it.layers)){if(I.isGroup)gt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(it);else if(I.isLightProbeGrid)E.pushLightProbeGrid(I);else if(I.isLight)E.pushLight(I),I.castShadow&&E.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(pt)){ut&&Dt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(St);let Ht=A.update(I),Ft=I.material;Ft.visible&&b.push(I,Ht,Ft,gt,Dt.z,null,it)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(pt))){let Ht=A.update(I),Ft=I.material;if(ut&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Dt.copy(I.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Dt.copy(Ht.boundingSphere.center)),Dt.applyMatrix4(I.matrixWorld).applyMatrix4(St)),Array.isArray(Ft)){let Yt=Ht.groups;for(let Kt=0,de=Yt.length;Kt<de;Kt++){let xe=Yt[Kt],qt=Ft[xe.materialIndex];qt&&qt.visible&&b.push(I,Ht,qt,gt,Dt.z,xe,it)}}else Ft.visible&&b.push(I,Ht,Ft,gt,Dt.z,null,it)}}let Nt=I.children;for(let Ht=0,Ft=Nt.length;Ht<Ft;Ht++)Ce(Nt[Ht],it,gt,ut)}function Ln(I,it,gt,ut){let{opaque:lt,transmissive:Nt,transparent:Ht}=I;E.setupLightsView(gt),bt===!0&&at.setGlobalState(F.clippingPlanes,gt),ut&&T.viewport($.copy(ut)),lt.length>0&&Gn(lt,it,gt),Nt.length>0&&Gn(Nt,it,gt),Ht.length>0&&Gn(Ht,it,gt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function jn(I,it,gt,ut){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ut.id]===void 0){let qt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ut.id]=new An(1,1,{generateMipmaps:!0,type:qt?ci:In,minFilter:fs,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ye.workingColorSpace})}let Nt=E.state.transmissionRenderTarget[ut.id],Ht=ut.viewport||$;Nt.setSize(Ht.z*F.transmissionResolutionScale,Ht.w*F.transmissionResolutionScale);let Ft=F.getRenderTarget(),Yt=F.getActiveCubeFace(),Kt=F.getActiveMipmapLevel();F.setRenderTarget(Nt),F.getClearColor(_t),vt=F.getClearAlpha(),vt<1&&F.setClearColor(16777215,.5),F.clear(),zt&&ot.render(gt);let de=F.toneMapping;F.toneMapping=oi;let xe=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),E.setupLightsView(ut),bt===!0&&at.setGlobalState(F.clippingPlanes,ut),Gn(I,gt,ut),ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Me=0,Xe=it.length;Me<Xe;Me++){let De=it[Me],{object:Ie,geometry:fn,material:Vt,group:_n}=De;if(Vt.side===an&&Ie.layers.test(ut.layers)){let ve=Vt.side;Vt.side=Sn,Vt.needsUpdate=!0,xs(Ie,gt,ut,fn,Vt,_n),Vt.side=ve,Vt.needsUpdate=!0,qt=!0}}qt===!0&&(ft.updateMultisampleRenderTarget(Nt),ft.updateRenderTargetMipmap(Nt))}F.setRenderTarget(Ft,Yt,Kt),F.setClearColor(_t,vt),xe!==void 0&&(ut.viewport=xe),F.toneMapping=de}function Gn(I,it,gt){let ut=it.isScene===!0?it.overrideMaterial:null;for(let lt=0,Nt=I.length;lt<Nt;lt++){let Ht=I[lt],{object:Ft,geometry:Yt,group:Kt}=Ht,de=Ht.material;de.allowOverride===!0&&ut!==null&&(de=ut),Ft.layers.test(gt.layers)&&xs(Ft,it,gt,Yt,de,Kt)}}function xs(I,it,gt,ut,lt,Nt){U!==null&&lt.isNodeMaterial&&U.setObject(I,lt),I.onBeforeRender(F,it,gt,ut,lt,Nt),I.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),lt.onBeforeRender(F,it,gt,ut,I,Nt),lt.transparent===!0&&lt.side===an&&lt.forceSinglePass===!1?(lt.side=Sn,lt.needsUpdate=!0,F.renderBufferDirect(gt,it,ut,lt,I,Nt),lt.side=us,lt.needsUpdate=!0,F.renderBufferDirect(gt,it,ut,lt,I,Nt),lt.side=an):F.renderBufferDirect(gt,it,ut,lt,I,Nt),I.onAfterRender(F,it,gt,ut,lt,Nt)}function sn(I,it,gt){it.isScene!==!0&&(it=Bt);let ut=nt.get(I),lt=E.state.lights,Nt=E.state.shadowsArray,Ht=lt.state.version,Ft=N.getParameters(I,lt.state,Nt,it,gt,E.state.lightProbeGridArray),Yt=N.getProgramCacheKey(Ft),Kt=ut.programs;ut.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?it.environment:null,ut.fog=it.fog;let de=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ut.envMap=k.get(I.envMap||ut.environment,de),ut.envMapRotation=ut.environment!==null&&I.envMap===null?it.environmentRotation:I.envMapRotation,Kt===void 0&&(I.addEventListener("dispose",fe),Kt=new Map,ut.programs=Kt);let xe=Kt.get(Yt);if(xe!==void 0){if(ut.currentProgram===xe&&ut.lightsStateVersion===Ht)return jo(I,Ft),xe}else Ft.uniforms=N.getUniforms(I),U!==null&&I.isNodeMaterial&&U.build(I,gt,Ft),I.onBeforeCompile(Ft,F),xe=N.acquireProgram(Ft,Yt),Kt.set(Yt,xe),ut.uniforms=Ft.uniforms;let qt=ut.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(qt.clippingPlanes=at.uniform),jo(I,Ft),ut.needsLights=Tn(I),ut.lightsStateVersion=Ht,ut.needsLights&&(qt.ambientLightColor.value=lt.state.ambient,qt.lightProbe.value=lt.state.probe,qt.sunLights.value=lt.state.sun,qt.sunLightShadows.value=lt.state.sunShadow,qt.directionalLights.value=lt.state.directional,qt.directionalLightShadows.value=lt.state.directionalShadow,qt.spotLights.value=lt.state.spot,qt.spotLightShadows.value=lt.state.spotShadow,qt.rectAreaLights.value=lt.state.rectArea,qt.ltc_1.value=lt.state.rectAreaLTC1,qt.ltc_2.value=lt.state.rectAreaLTC2,qt.pointLights.value=lt.state.point,qt.pointLightShadows.value=lt.state.pointShadow,qt.hemisphereLights.value=lt.state.hemi,qt.sunShadowMatrix.value=lt.state.sunShadowMatrix,qt.sunShadowCascade.value=lt.state.sunShadowCascade,qt.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,qt.spotLightMatrix.value=lt.state.spotLightMatrix,qt.spotLightMap.value=lt.state.spotLightMap,qt.pointShadowMatrix.value=lt.state.pointShadowMatrix),ut.lightProbeGrid=E.state.lightProbeGridArray.length>0,ut.currentProgram=xe,ut.uniformsList=null,xe}function Or(I){if(I.uniformsList===null){let it=I.currentProgram.getUniforms();I.uniformsList=Rr.seqWithValue(it.seq,I.uniforms)}return I.uniformsList}function jo(I,it){let gt=nt.get(I);gt.outputColorSpace=it.outputColorSpace,gt.batching=it.batching,gt.batchingColor=it.batchingColor,gt.instancing=it.instancing,gt.instancingColor=it.instancingColor,gt.instancingMorph=it.instancingMorph,gt.skinning=it.skinning,gt.morphTargets=it.morphTargets,gt.morphNormals=it.morphNormals,gt.morphColors=it.morphColors,gt.morphTargetsCount=it.morphTargetsCount,gt.numClippingPlanes=it.numClippingPlanes,gt.numIntersection=it.numClipIntersection,gt.vertexAlphas=it.vertexAlphas,gt.vertexTangents=it.vertexTangents,gt.toneMapping=it.toneMapping}function Qo(I,it){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;v.setFromMatrixPosition(it.matrixWorld);for(let gt=0,ut=I.length;gt<ut;gt++){let lt=I[gt];if(lt.texture!==null&&lt.boundingBox.containsPoint(v))return lt}return null}function zs(I,it,gt,ut,lt){it.isScene!==!0&&(it=Bt),ft.resetTextureUnits();let Nt=it.fog,Ht=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial?it.environment:null,Ft=H===null?F.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ye.workingColorSpace,Yt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial&&!ut.envMap||ut.isMeshPhongMaterial&&!ut.envMap,Kt=k.get(ut.envMap||Ht,Yt),de=ut.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,xe=!!gt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),qt=!!gt.morphAttributes.position,Me=!!gt.morphAttributes.normal,Xe=!!gt.morphAttributes.color,De=oi;ut.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(De=F.toneMapping);let Ie=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,fn=Ie!==void 0?Ie.length:0,Vt=nt.get(ut),_n=E.state.lights;if(bt===!0&&(Mt===!0||I!==Y)){let Pe=I===Y&&ut.id===X;at.setState(ut,I,Pe)}let ve=!1;ut.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==_n.state.version||Vt.outputColorSpace!==Ft||lt.isBatchedMesh&&Vt.batching===!1||!lt.isBatchedMesh&&Vt.batching===!0||lt.isBatchedMesh&&Vt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Vt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Vt.instancing===!1||!lt.isInstancedMesh&&Vt.instancing===!0||lt.isSkinnedMesh&&Vt.skinning===!1||!lt.isSkinnedMesh&&Vt.skinning===!0||lt.isInstancedMesh&&Vt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Vt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Vt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Vt.instancingMorph===!1&&lt.morphTexture!==null||Vt.envMap!==Kt||ut.fog===!0&&Vt.fog!==Nt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==at.numPlanes||Vt.numIntersection!==at.numIntersection)||Vt.vertexAlphas!==de||Vt.vertexTangents!==xe||Vt.morphTargets!==qt||Vt.morphNormals!==Me||Vt.morphColors!==Xe||Vt.toneMapping!==De||Vt.morphTargetsCount!==fn||!!Vt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Vt.__version=ut.version);let Wn=Vt.currentProgram;ve===!0&&(Wn=sn(ut,it,lt),U&&ut.isNodeMaterial&&U.onUpdateProgram(ut,Wn,Vt));let fi=!1,Xi=!1,Hs=!1,Re=Wn.getUniforms(),Ve=Vt.uniforms;if(T.useProgram(Wn.program)&&(fi=!0,Xi=!0,Hs=!0),ut.id!==X&&(X=ut.id,Xi=!0),Vt.needsLights){let Pe=Qo(E.state.lightProbeGridArray,lt);Vt.lightProbeGrid!==Pe&&(Vt.lightProbeGrid=Pe,Xi=!0)}if(fi||Y!==I){T.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Re.setValue(q,"projectionMatrix",I.projectionMatrix),Re.setValue(q,"viewMatrix",I.matrixWorldInverse);let qi=Re.map.cameraPosition;qi!==void 0&&qi.setValue(q,Et.setFromMatrixPosition(I.matrixWorld)),B.logarithmicDepthBuffer&&Re.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Re.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),Y!==I&&(Y=I,Xi=!0,Hs=!0)}if(Vt.needsLights&&(_n.state.sunShadowMap.length>0&&Re.setValue(q,"sunShadowMap",_n.state.sunShadowMap,ft),_n.state.directionalShadowMap.length>0&&Re.setValue(q,"directionalShadowMap",_n.state.directionalShadowMap,ft),_n.state.spotShadowMap.length>0&&Re.setValue(q,"spotShadowMap",_n.state.spotShadowMap,ft),_n.state.pointShadowMap.length>0&&Re.setValue(q,"pointShadowMap",_n.state.pointShadowMap,ft)),lt.isSkinnedMesh){Re.setOptional(q,lt,"bindMatrix"),Re.setOptional(q,lt,"bindMatrixInverse");let Pe=lt.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Re.setValue(q,"boneTexture",Pe.boneTexture,ft))}lt.isBatchedMesh&&(Re.setOptional(q,lt,"batchingTexture"),Re.setValue(q,"batchingTexture",lt._matricesTexture,ft),Re.setOptional(q,lt,"batchingIdTexture"),Re.setValue(q,"batchingIdTexture",lt._indirectTexture,ft),Re.setOptional(q,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Re.setValue(q,"batchingColorTexture",lt._colorsTexture,ft));let Yi=gt.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&R.update(lt,gt,Wn),(Xi||Vt.receiveShadow!==lt.receiveShadow)&&(Vt.receiveShadow=lt.receiveShadow,Re.setValue(q,"receiveShadow",lt.receiveShadow)),(ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial)&&ut.envMap===null&&it.environment!==null&&(Ve.envMapIntensity.value=it.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Ob()),Xi){if(Re.setValue(q,"toneMappingExposure",F.toneMappingExposure),Vt.needsLights&&rn(Ve,Hs),Nt&&ut.fog===!0&&D.refreshFogUniforms(Ve,Nt),D.refreshMaterialUniforms(Ve,ut,ht,ct,E.state.transmissionRenderTarget[I.id]),Vt.needsLights&&Vt.lightProbeGrid){let Pe=Vt.lightProbeGrid;Ve.probesSH.value=Pe.texture,Ve.probesMin.value.copy(Pe.boundingBox.min),Ve.probesMax.value.copy(Pe.boundingBox.max),Ve.probesResolution.value.copy(Pe.resolution)}Rr.upload(q,Or(Vt),Ve,ft)}if(ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Rr.upload(q,Or(Vt),Ve,ft),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Re.setValue(q,"center",lt.center),Re.setValue(q,"modelViewMatrix",lt.modelViewMatrix),Re.setValue(q,"normalMatrix",lt.normalMatrix),Re.setValue(q,"modelMatrix",lt.matrixWorld),ut.uniformsGroups!==void 0){let Pe=ut.uniformsGroups;for(let qi=0,Vs=Pe.length;qi<Vs;qi++){let Zh=Pe[qi];mt.update(Zh,Wn),mt.bind(Zh,Wn)}}return Wn}function rn(I,it){I.ambientLightColor.needsUpdate=it,I.lightProbe.needsUpdate=it,I.sunLights.needsUpdate=it,I.sunLightShadows.needsUpdate=it,I.directionalLights.needsUpdate=it,I.directionalLightShadows.needsUpdate=it,I.pointLights.needsUpdate=it,I.pointLightShadows.needsUpdate=it,I.spotLights.needsUpdate=it,I.spotLightShadows.needsUpdate=it,I.rectAreaLights.needsUpdate=it,I.hemisphereLights.needsUpdate=it}function Tn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(I,it,gt){let ut=nt.get(I);ut.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),nt.get(I.texture).__webglTexture=it,nt.get(I.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:gt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,it){let gt=nt.get(I);gt.__webglFramebuffer=it,gt.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(I,it=0,gt=0){H=I,z=it,tt=gt;let ut=null,lt=!1,Nt=!1;if(I){let Ft=nt.get(I);if(Ft.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(q.FRAMEBUFFER,Ft.__webglFramebuffer),$.copy(I.viewport),rt.copy(I.scissor),yt=I.scissorTest,T.viewport($),T.scissor(rt),T.setScissorTest(yt),X=-1;return}else if(Ft.__webglFramebuffer===void 0)ft.setupRenderTarget(I);else if(Ft.__hasExternalTextures)ft.rebindTextures(I,nt.get(I.texture).__webglTexture,nt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let de=I.depthTexture;if(Ft.__boundDepthTexture!==de){if(de!==null&&nt.has(de)&&(I.width!==de.image.width||I.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(I)}}let Yt=I.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Nt=!0);let Kt=nt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Kt[it])?ut=Kt[it][gt]:ut=Kt[it],lt=!0):I.samples>0&&ft.useMultisampledRTT(I)===!1?ut=nt.get(I).__webglMultisampledFramebuffer:Array.isArray(Kt)?ut=Kt[gt]:ut=Kt,$.copy(I.viewport),rt.copy(I.scissor),yt=I.scissorTest}else $.copy(Lt).multiplyScalar(ht).floor(),rt.copy(It).multiplyScalar(ht).floor(),yt=Jt;if(gt!==0&&(ut=V),T.bindFramebuffer(q.FRAMEBUFFER,ut)&&T.drawBuffers(I,ut),T.viewport($),T.scissor(rt),T.setScissorTest(yt),lt){let Ft=nt.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft.__webglTexture,gt)}else if(Nt){let Ft=it;for(let Yt=0;Yt<I.textures.length;Yt++){let Kt=nt.get(I.textures[Yt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Yt,Kt.__webglTexture,gt,Ft)}}else if(I!==null&&gt!==0){let Ft=nt.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ft.__webglTexture,gt)}X=-1};function Qn(I){let it=nt.get(I);return(it.__readFormat!==I.format||it.__readType!==I.type)&&(it.__readFormat=I.format,it.__readType=I.type,it.__formatReadable=B.textureFormatReadable(I.format),it.__typeReadable=B.textureTypeReadable(I.type)),it}this.readRenderTargetPixels=function(I,it,gt,ut,lt,Nt,Ht,Ft=0){if(!(I&&I.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=nt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(Yt=Yt[Ht]),Yt){T.bindFramebuffer(q.FRAMEBUFFER,Yt);try{let Kt=I.textures[Ft],de=Kt.format,xe=Kt.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft);let qt=Qn(Kt);if(qt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=I.width-ut&&gt>=0&&gt<=I.height-lt&&q.readPixels(it,gt,ut,lt,dt.convert(de),dt.convert(xe),Nt)}finally{let Kt=H!==null?nt.get(H).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(I,it,gt,ut,lt,Nt,Ht,Ft=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=nt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(Yt=Yt[Ht]),Yt)if(it>=0&&it<=I.width-ut&&gt>=0&&gt<=I.height-lt){T.bindFramebuffer(q.FRAMEBUFFER,Yt);let Kt=I.textures[Ft],de=Kt.format,xe=Kt.type;I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft);let qt=Qn(Kt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Me),q.bufferData(q.PIXEL_PACK_BUFFER,Nt.byteLength,q.STREAM_READ),q.readPixels(it,gt,ut,lt,dt.convert(de),dt.convert(xe),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Xe=H!==null?nt.get(H).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Xe);let De=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await yd(q,De,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Me),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Nt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Me),q.deleteSync(De),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,it=null,gt=0){let ut=Math.pow(2,-gt),lt=Math.floor(I.image.width*ut),Nt=Math.floor(I.image.height*ut),Ht=it!==null?it.x:0,Ft=it!==null?it.y:0;ft.setTexture2D(I,0),q.copyTexSubImage2D(q.TEXTURE_2D,gt,0,0,Ht,Ft,lt,Nt),T.unbindTexture()},this.copyTextureToTexture=function(I,it,gt=null,ut=null,lt=0,Nt=0){let Ht,Ft,Yt,Kt,de,xe,qt,Me,Xe,De=I.isCompressedTexture?I.mipmaps[Nt]:I.image;if(gt!==null)Ht=gt.max.x-gt.min.x,Ft=gt.max.y-gt.min.y,Yt=gt.isBox3?gt.max.z-gt.min.z:1,Kt=gt.min.x,de=gt.min.y,xe=gt.isBox3?gt.min.z:0;else{let Ve=Math.pow(2,-lt);Ht=Math.floor(De.width*Ve),Ft=Math.floor(De.height*Ve),I.isDataArrayTexture?Yt=De.depth:I.isData3DTexture?Yt=Math.floor(De.depth*Ve):Yt=1,Kt=0,de=0,xe=0}ut!==null?(qt=ut.x,Me=ut.y,Xe=ut.z):(qt=0,Me=0,Xe=0);let Ie=dt.convert(it.format),fn=dt.convert(it.type),Vt;it.isData3DTexture?(ft.setTexture3D(it,0),Vt=q.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(ft.setTexture2DArray(it,0),Vt=q.TEXTURE_2D_ARRAY):(ft.setTexture2D(it,0),Vt=q.TEXTURE_2D),T.activeTexture(q.TEXTURE0),T.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,it.flipY),T.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),T.pixelStorei(q.UNPACK_ALIGNMENT,it.unpackAlignment);let _n=T.getParameter(q.UNPACK_ROW_LENGTH),ve=T.getParameter(q.UNPACK_IMAGE_HEIGHT),Wn=T.getParameter(q.UNPACK_SKIP_PIXELS),fi=T.getParameter(q.UNPACK_SKIP_ROWS),Xi=T.getParameter(q.UNPACK_SKIP_IMAGES);T.pixelStorei(q.UNPACK_ROW_LENGTH,De.width),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,De.height),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Kt),T.pixelStorei(q.UNPACK_SKIP_ROWS,de),T.pixelStorei(q.UNPACK_SKIP_IMAGES,xe);let Hs=I.isDataArrayTexture||I.isData3DTexture,Re=it.isDataArrayTexture||it.isData3DTexture;if(I.isDepthTexture){let Ve=nt.get(I),Yi=nt.get(it),Pe=nt.get(Ve.__renderTarget),qi=nt.get(Yi.__renderTarget);T.bindFramebuffer(q.READ_FRAMEBUFFER,Pe.__webglFramebuffer),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Vs=0;Vs<Yt;Vs++)Hs&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nt.get(I).__webglTexture,lt,xe+Vs),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nt.get(it).__webglTexture,Nt,Xe+Vs)),q.blitFramebuffer(Kt,de,Ht,Ft,qt,Me,Ht,Ft,q.DEPTH_BUFFER_BIT,q.NEAREST);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(lt!==0||I.isRenderTargetTexture||nt.has(I)){let Ve=nt.get(I),Yi=nt.get(it);T.bindFramebuffer(q.READ_FRAMEBUFFER,O),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,K);for(let Pe=0;Pe<Yt;Pe++)Hs?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ve.__webglTexture,lt,xe+Pe):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ve.__webglTexture,lt),Re?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Yi.__webglTexture,Nt,Xe+Pe):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Yi.__webglTexture,Nt),lt!==0?q.blitFramebuffer(Kt,de,Ht,Ft,qt,Me,Ht,Ft,q.COLOR_BUFFER_BIT,q.NEAREST):Re?q.copyTexSubImage3D(Vt,Nt,qt,Me,Xe+Pe,Kt,de,Ht,Ft):q.copyTexSubImage2D(Vt,Nt,qt,Me,Kt,de,Ht,Ft);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Re?I.isDataTexture||I.isData3DTexture?q.texSubImage3D(Vt,Nt,qt,Me,Xe,Ht,Ft,Yt,Ie,fn,De.data):it.isCompressedArrayTexture?q.compressedTexSubImage3D(Vt,Nt,qt,Me,Xe,Ht,Ft,Yt,Ie,De.data):q.texSubImage3D(Vt,Nt,qt,Me,Xe,Ht,Ft,Yt,Ie,fn,De):I.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Nt,qt,Me,Ht,Ft,Ie,fn,De.data):I.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Nt,qt,Me,De.width,De.height,Ie,De.data):q.texSubImage2D(q.TEXTURE_2D,Nt,qt,Me,Ht,Ft,Ie,fn,De);T.pixelStorei(q.UNPACK_ROW_LENGTH,_n),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ve),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Wn),T.pixelStorei(q.UNPACK_SKIP_ROWS,fi),T.pixelStorei(q.UNPACK_SKIP_IMAGES,Xi),Nt===0&&it.generateMipmaps&&q.generateMipmap(Vt),T.unbindTexture()},this.initRenderTarget=function(I){nt.get(I).__webglFramebuffer===void 0&&ft.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ft.setTextureCube(I,0):I.isData3DTexture?ft.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ft.setTexture2DArray(I,0):ft.setTexture2D(I,0),T.unbindTexture()},this.resetState=function(){z=0,tt=0,H=null,T.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};function Pn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ce,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=ep(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);let g=ep(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function ep(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new be(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);a.setComponent(h+d,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var Wm=Fl(cl(),1);var Vo=new G;function $n(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Vo.copy(t),Vo[n]=0,Vo.normalize();let l=.5*o/(o+a),u=1-Vo.angleTo(i)/c;return Math.sign(Vo[e])===1?u*l:a/(o+a)+l+l*(1-u)}var ll=class i extends we{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new G,l=new G,u=new G(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new G,p=.5/o;for(let m=0,y=0;m<d.length;m+=3,y+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*r,d[m+1]=u.y*Math.sign(c.y)+l.y*r,d[m+2]=u.z*Math.sign(c.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[y+0]=$n(x,l,"z","y",r,n),f[y+1]=1-$n(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),f[y+0]=1-$n(x,l,"z","y",r,n),f[y+1]=1-$n(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),f[y+0]=1-$n(x,l,"x","z",r,t),f[y+1]=$n(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-$n(x,l,"x","z",r,t),f[y+1]=1-$n(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-$n(x,l,"x","y",r,t),f[y+1]=1-$n(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),f[y+0]=$n(x,l,"x","y",r,t),f[y+1]=1-$n(x,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var np=Object.freeze({"pets-fish-aquarium-oak":"aquarium","pets-lizard-terrarium-walnut":"terrarium"}),Bb=Math.PI*2;function kb(){let i=new ae,t=new we(1,1,1),e=new Le(1,12,8),n=new Map;function s(a){return n.has(a)||n.set(a,new Fe({color:a,roughness:.83})),n.get(a)}function r(a,c,l,u,d,h,f,g,x){let p=new he(c,typeof l=="string"?s(l):l);return p.position.set(u,d,h),p.scale.set(f,g,x),a.add(p),p}function o(){let a=new Map;for(let l of i.children){if(!l.isMesh||l.material.transparent)continue;let u=a.get(l.material)??[];u.push(l),a.set(l.material,u)}for(let[l,u]of a){if(u.length<2)continue;let d=u.map(f=>(f.updateMatrix(),f.geometry.toNonIndexed().applyMatrix4(f.matrix))),h=new he(Pn(d),l);h.castShadow=u.some(f=>f.castShadow),d.forEach(f=>f.dispose()),i.remove(...u),i.add(h)}let c=new Set;i.traverse(l=>{l.geometry&&c.add(l.geometry)});for(let l of[t,e])c.has(l)||l.dispose()}return{root:i,batchStaticParts:o,box:(a,...c)=>r(a,t,...c),oval:(a,...c)=>r(a,e,...c)}}function zb({root:i,box:t},e,n,s){let r=s?"#c29365":"#875b47",o=s?"#304b54":"#453c42",a=26,c=s?57:58,l=Math.min(2,e*.065,n*.065),u=new ze({color:s?"#9edcdb":"#d1eadb",transparent:!0,opacity:s?.19:.13,depthWrite:!1,side:an});t(i,o,0,1.8,0,e*.91,3.6,n*.88),t(i,r,0,14,0,e*.95,21,n*.93).castShadow=!0;for(let f of[-1,1])t(i,s?"#deb181":"#aa785d",f*e*.232,14,n*.469,e*.448,17,n*.021),t(i,"#c8a378",f*e*.072,14.5,n*.492,e*.047,1.25,n*.016);t(i,o,0,a,0,e,3,n).castShadow=!0;let d=(a+c)/2,h=c-a;for(let f of[-e/2+l/2,e/2-l/2]){t(i,o,f,c,0,l,1.8,n),t(i,u,f,d,0,l*.17,h,n-l*2);for(let g of[-n/2+l/2,n/2-l/2])t(i,o,f,d,g,l,h,l)}for(let f of[-n/2+l/2,n/2-l/2])t(i,o,0,c,f,e-l*2,1.8,l),t(i,u,0,d,f,e-l*2,h,l*.17);return t(i,o,0,c+1.5,-n*.325,e*.77,2.7,n*.105),t(i,s?"#cde8d3":"#eed59e",0,c+.42,-n*.265,e*.72,.7,n*.016),{base:a,top:c}}function Hb({box:i,oval:t,root:e},n,s,r){let o=new ae;o.name="fish-"+n,e.add(o),t(o,r,0,0,0,s*1.85,s*1.08,s*.79),t(o,"#ffdbb8",s*.07,-s*.44,0,s*1.45,s*.63,s*.71);let a=new ae;a.position.x=-s*1.42,o.add(a);for(let c of[-.43,.43]){let l=t(a,r,-s*.6,Math.sign(c)*s*.4,0,s*.83,s*.42,s*.21);l.rotation.z=c}for(let c of[-1,1])t(o,"#273245",s*.99,s*.14,c*s*.61,s*.235,s*.23,s*.12),i(o,"#fff1d9",s*1.05,s*.21,c*s*.69,s*.11,s*.1,s*.07);return{fish:o,tail:a}}function Vb(i,t,e,n,s,r){let{root:o,box:a,oval:c}=i,l=s-4,u=new ze({color:"#8dd1ce",transparent:!0,opacity:.28,depthWrite:!1}),d=new ze({color:"#d7fff4",transparent:!0,opacity:.62,depthWrite:!1});a(o,"#82a9a1",0,n+2.15,0,t*.94,1.7,e*.9),a(o,u,0,l,0,t*.952,.22,e*.934);for(let g=0;g<18;g++){let x=(g*7%19/19-.5)*t*.83,p=(g*13%19/19-.5)*e*.79;c(o,["#b9c5ad","#72958b","#96ac9f"][g%3],x,n+3,p,r*(1+g%4*.34),.85,r*1.15)}for(let[g,x]of[[-.3,-.22],[-.23,-.27],[.33,-.2],[.37,.02]])for(let p=0;p<4;p++){let m=p-1.5,y=c(o,["#4d8971","#8cab75","#69a18a","#5b9664"][p],g*t+m*r,n+3+(2+p*1.6)*Math.min(1.15,r),x*e,r*1.45,(4+p*1.12)*Math.min(1.15,r),r*1.15);y.rotation.z=m*.22}let h=["#e99660","#ecc56d","#bc92b8"].map((g,x)=>Hb(i,x,r*(1.72-x*.17),g)),f=Array.from({length:5},(g,x)=>{let p=r*(.45+x%3*.18),m=c(o,d,0,0,0,p,p,p);return m.name="bubble-"+x,m});return g=>{for(let[x,{fish:p,tail:m}]of h.entries()){let y=g*(.43+x*.06)+x*2.07+.5,w=t*(.24+x*.036),v=e*(.17+x*.038);p.position.set(Math.cos(y)*w,n+10+x*3.65+Math.sin(y*1.7)*2.15,Math.sin(y)*v),p.rotation.y=-Math.atan2(Math.cos(y)*v,-Math.sin(y)*w),m.rotation.y=Math.sin(g*8.6+x)*.39}for(let[x,p]of f.entries()){let m=(g*.3+x/f.length)%1;p.position.set(t*.33+Math.sin(m*Bb+x)*r,n+5+m*20,e*.23),p.visible=m>.08&&m<.94}}}function Gb({root:i,box:t,oval:e},n,s,r,o,a){t(i,"#d4a675",0,r+2.15,0,n*.93,1.6,s*.9);for(let h=0;h<16;h++)e(i,h%2?"#a98467":"#e1c491",(h*11%17/17-.5)*n*.81,r+3,(h*5%17/17-.5)*s*.76,a*1.5,.66,a);e(i,"#a07c66",-n*.29,r+4.5,-s*.13,n*.15,4.7,s*.19),e(i,"#c8a17c",-n*.29,r+7.1,-s*.17,n*.135,4.8,s*.154),e(i,"#624b45",-n*.29,r+4,-s*.011,n*.069,2.5,s*.063),e(i,"#e8c99b",n*.29,r+3.6,-s*.16,n*.1,2.2,s*.16),e(i,"#89ad9e",n*.29,r+5.1,-s*.16,n*.075,.9,s*.115);let c=t(i,"#936b52",n*.11,r+4,-s*.24,n*.27,2.6,s*.083);c.rotation.y=.25;for(let h=0;h<5;h++){let f=e(i,h%2?"#829468":"#a7ad78",-n*.37+h*a,r+6+h%2,s*.26,a*1.2,3.7*Math.min(1.3,a),a);f.rotation.z=(h-2)*.24}for(let h=0;h<7;h++)t(i,"#746462",(h/6-.5)*n*.7,o+.5,-s*.386,a*.43,.58,s*.112);let l=new ae;l.name="gecko",i.add(l),e(l,"#dca052",0,0,0,4.2*a,2.05*a,2.36*a),e(l,"#eab269",4.6*a,.7*a,0,2.38*a,1.53*a,1.9*a);let u=Array.from({length:5},(h,f)=>{let g=a*(1-f*.16);return e(l,f%2?"#b67950":"#daa15f",0,0,0,1.9*g,1.13*g,1.3*g)}),d=[];for(let h of[-1,1]){e(l,"#463946",5.15*a,1.34*a,h*1.26*a,.49*a,.44*a,.31*a);for(let f of[-1,1]){let g=new ae;g.position.set(f*a*2.1,-.7*a,h*a*1.42),l.add(g);let x=e(g,"#d29861",-.48*f*a,-.13*a,h*1.12*a,.66*a,.54*a,1.43*a);x.rotation.y=h*f*.28;for(let p of[-1,0,1])e(g,"#ecc297",(p*.42+.5)*a,-.55*a,h*2.28*a,.55*a,.22*a,.23*a);d.push({leg:g,side:h,front:f})}}for(let h=0;h<6;h++)e(l,"#96664f",(h%3-1)*2.2*a,1.88*a,(h<3?-.66:.66)*a,.66*a,.25*a,.46*a);return h=>{let f=h*.35+.7,g=Math.cos(f)*n*.13,x=Math.sin(f)*s*.09+s*.139;l.position.set(g,r+5.1+Math.sin(h*3.6)*.25,x),l.rotation.y=-Math.atan2(Math.cos(f)*s*.09,-Math.sin(f)*n*.13);for(let[p,m]of u.entries()){let y=p+1;m.position.set(-(3.55+y*1.24)*a,-.19*y*a,Math.sin(h*1.75-y*.55)*y*a*.32)}for(let{leg:p,side:m,front:y}of d)p.rotation.y=Math.sin(h*3.6)*m*y*.31}}function ip(i,t,e){if(!Object.hasOwn(np,i))return null;let n=np[i],s=kb(),r=n==="aquarium",{base:o,top:a}=zb(s,t,e,r),c=Math.min(t/110,e/63,2.5),l=r?Vb(s,t,e,o,a,c):Gb(s,t,e,o,a,c);return s.batchStaticParts(),l(0),{root:s.root,anchorY:a+3,ambientMotion:!0,animate(u,d){l(Math.max(0,d))}}}var st=Object.freeze({ink:"#493e51",oak:"#c89468",oakLight:"#e1b184",walnut:"#9e715d",sage:"#98ad83",moss:"#708a73",linen:"#f3e6cd",cream:"#fff4df",blush:"#dca3a0",peach:"#edc1a7",honey:"#dcb575",sand:"#e2c5a0",lilac:"#aca0c8",lilacLight:"#d7c9e1",blue:"#81a6b5",aqua:"#b4d6d3",ceramic:"#f2e6e0",shadow:"#a38898",glass:"#577b91",darkGlass:"#344459",brass:"#c39257",binding:"#b29386",blueWater:"#9ac3bf",oatmeal:"#dac3a4",upholsteryShadow:"#bca087",denim:"#58637b",steel:"#bbc9cd",basinSteel:"#879aa4"}),Wb=Object.freeze({sage:st.sage,mint:st.aqua,sky:st.blue,peach:st.peach,coral:"#cf8979",lavender:st.lilac,butter:st.honey,cream:st.linen,white:st.cream,oak:st.oakLight,walnut:st.walnut,charcoal:"#505b68",brass:st.brass,terracotta:"#b97d63",forest:st.moss,blush:st.blush,teddy:"#aa8063",slate:"#9b9b9d"}),Xb=new Set([st.oak,st.oakLight,st.walnut]),Yb=new Set([st.sage,st.moss,st.linen,st.lilac,st.lilacLight,st.blush,st.peach,st.oatmeal,st.upholsteryShadow,st.denim]);function qb(i,t){let e=Xb.has(i)?1:Yb.has(i)?2:0,n=i===st.glass||i===st.darkGlass||i===st.blueWater,s=i===st.brass,r=i===st.steel||i===st.basinSteel,o=new Fe({color:i,roughness:s||r?.37:n?.33:i===st.ceramic?.44:e===1?.64:.89,metalness:s?.42:r?.28:0});return e&&(o.onBeforeCompile=a=>{a.uniforms.furnitureDetail={value:e},a.uniforms.furnitureGrainDirection={value:t},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= 1.0 + grain;`)}),o}var fh=class{constructor(t,e){this.root=new ae,this.materials=new Map,this.grainDirection=e>t?1:0}part(t,e,n,s,r,o=0){this.materials.has(e)||this.materials.set(e,qb(e,this.grainDirection));let a=new he(t,this.materials.get(e));return a.position.set(n,s,r),a.rotation.y=o,this.root.add(a),a}box(t,e,n,s,r,o,a,c=0,l=0){s=Math.max(.1,s),o=Math.max(.1,o);let u=Math.min(c,s*.42,r*.42,o*.42),d=u>.2?new ll(s,r,o,2,u):new we(s,r,o);return this.part(d,a,t,e+r/2,n,l)}disc(t,e,n,s,r,o,a,c=1){let l=new en(1,c,r,20);return l.scale(s,1,o),this.part(l,a,t,e+r/2,n)}oval(t,e,n,s,r,o,a){let c=new Le(1,12,8);return c.scale(s,r,o),this.part(c,a,t,e,n)}ring(t,e,n,s,r,o,a){let c=new mn(1,o/Math.min(s,r),6,24);return c.rotateX(-Math.PI/2),c.scale(s,1.5,r),this.part(c,a,t,e,n)}basin(t,e,n,s,r,o){let a=[[0,0],[.74,0],[.94,.2],[1,.72],[.96,1],[.83,1],[.78,.64],[.56,.28],[.22,.25],[0,.25]].map(([l,u])=>new Rt(l,u)),c=new yo(a,24);return c.scale(s,r,o),this.part(c,st.ceramic,t,e,n)}finish(t){let e=new Map;for(let n of[...this.root.children]){let s=n.geometry,r=s.index?s.toNonIndexed():s;r!==s&&s.dispose(),n.updateMatrix(),r.applyMatrix4(n.matrix),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(r),this.root.remove(n)}for(let[n,s]of e){let r=s.length===1?s[0]:Pn(s);s.length>1&&s.forEach(a=>a.dispose());let o=new he(r,n);o.castShadow=o.receiveShadow=!0,this.root.add(o)}return{root:this.root,anchorY:t}}};function ki(i,t,e,n,s,r,o=st.walnut){let a=Math.min(4.5,n*.07,s*.12);for(let c of[-.36,.36])for(let l of[-.36,.36])i.disc(t+n*c,0,e+s*l,a,r,a,o,.68)}function Go(i,t,e,n,s,r,o,a){let c=o===st.linen?st.binding:st.blush;i.box(t,e,n,s,8,r,c,3.2,a),i.box(t,e+2.1,n,s-2.6,7.4,r-2.6,o,3.2,a)}function Zb(i,t,e,n,s){let r=s==="sofa"||s.includes("cloud-sofa"),o=r&&e>t,a=s==="sofa",c=a?1:-1,l=a?st.upholsteryShadow:st.moss,u=a?st.oatmeal:st.sage,d=o?t*.5:t,h=r&&!o?e*.57:e,f=o?-t*.25:0,g=r&&!o?-e*.215:0,x=Math.min(t,e)*.1;if(ki(i,f,g,d,h,5),i.box(f,5,g,d*.97,22,h*.98,l,8),r){let b=o?t*.52:t*.34,E=o?e*.38:e*.46,C=o?t*.22:-t*.32,_=o?c*e*.3:e*.25;ki(i,C,_,b,E,5),i.box(C,5,_,b,22,E,l,8),i.box(C,25,_,b*.96,12,E*.9,n,5),o&&i.box(C,29,c*e*.464,b,26,x,u,6)}let p=s.includes("loveseat")||s.includes("chaise")?2:3;if(o){let b=e*.88/p;for(let E=0;E<p;E++){let C=-e*.44+b*(E+.5);i.box(f+x*.18,25,C,d*.76,12,b-3,n,5),i.box(f-d*.39,27,C,d*.22,31,b-1,u,8)}i.box(f,29,-c*e*.445,d*.88,20,x,u,6),Go(i,f+d*.13,35,-e*.31,d*.42,b*.49,a?st.sage:st.peach,-.18),Go(i,f+d*.12,35,e*.28,d*.4,b*.45,st.linen,.2)}else{let b=t*.8/p;for(let E=0;E<p;E++){let C=-t*.4+b*(E+.5);i.box(C,25,g+h*.08,b-3,12,h*.7,n,6),i.box(C,27,g-h*.39,b-1,31,h*.24,u,7)}for(let E of[-t*.442,t*.442])i.box(E,26,g,x,22,h*.89,u,6);Go(i,-t*.27,35,g-h*.15,t*.18,h*.34,st.peach,-.18),Go(i,t*.27,35,g-h*.12,t*.17,h*.33,st.linen,.2)}let m=o?d*.67:d*.19,y=o?e*.14:h*.58,w=o?f+d*.06:d*.32,v=o?e*.13:g+h*.1;i.box(w,37.1,v,m,1.7,y,st.lilacLight,.65);for(let b of[-1,1])i.box(w,38.82,v+b*y*.36,m*.9,.25,1.2,st.lilac);return 58}function li(i,t,e,n,s,r,o,a=!1){let c=a?19:28;ki(i,t,e,n,s,c,st.walnut),i.box(t,c,e,n*.9,7,s*.92,st.walnut,2),i.box(t,c+5,e,n*.83,8,s*.83,o,3);let l=Math.abs(r)===Math.PI/2,u=t-Math.sin(r)*(l?n:s)*.39,d=e-Math.cos(r)*s*.39;i.box(u,c+9,d,l?s*.2:n*.84,22,l?s*.82:s*.22,o,4)}function Jb(i,t,e,n,s){let r=s.includes("round-dining"),a=!s.includes("rectangular-dining");if(s==="table")return li(i,0,-e*.39,t*.2,e*.23,0,st.denim),li(i,0,e*.39,t*.2,e*.23,Math.PI,st.denim),li(i,-t*.415,0,t*.17,e*.27,Math.PI/2,st.denim),li(i,t*.415,0,t*.17,e*.27,-Math.PI/2,st.denim),ki(i,0,0,t*.69,e*.49,35),i.box(0,32,0,t*.72,6,e*.5,st.walnut,3),i.box(0,37,0,t*.79,8,e*.57,st.oak,4),i.box(0,45,0,t*.69,1.4,e*.14,st.linen,.6),46.4;if(r)li(i,0,-e*.37,t*.2,e*.2,0,st.sage),li(i,0,e*.37,t*.2,e*.2,Math.PI,st.blush),li(i,-t*.38,0,t*.2,e*.2,Math.PI/2,st.lilac),li(i,t*.38,0,t*.2,e*.2,-Math.PI/2,st.honey),i.disc(0,0,0,t*.13,5,e*.13,st.walnut),i.disc(0,4,0,t*.045,31,e*.045,st.walnut,1.5),i.disc(0,33,0,t*.29,8,e*.29,n,.96);else{let c=a?[-.28,.28]:[-.32,0,.32],l=[st.sage,st.blush,st.lilac,st.honey];for(let u=0;u<c.length;u++)for(let d of[-1,1])li(i,t*c[u],e*.37*d,t*(a?.19:.15),e*.23,d<0?0:Math.PI,l[(u+(d<0?0:2))%l.length]);ki(i,0,0,t*.69,e*.47,34),i.box(0,33,0,t*.79,8,e*.56,n,3),i.box(0,41.1,0,t*.55,1.2,e*.15,st.linen,.5)}return 42}function $b(i,t,e,n,s,r){i.box(t,e,n,s*.31,2,r*.5,st.ink,.5),i.box(t,e+1,n,s*.1,14,4,st.ink,1),i.box(t,e+12,n,s,25,6,st.ink,2),i.box(t,e+14,n+3.1,s*.91,21,1,st.glass,.4),i.box(t-s*.25,e+28,n+3.7,s*.28,2,.5,st.blue,.2)}function Kb(i,t,e,n,s){let r=s?e*.34:e*.85,o=s?-e/2+r/2:0,a=t*.18;i.box(0,37,o,t,7,r,n,2.4);for(let c of[-1,1]){let l=c*(t-a)/2,u=s?e-r:e*.58,d=s?r/2:0;s&&i.box(l,37,d+.8,a,7,u-1.6,n,2.4),i.box(l,4,d,a*.81,34,u*.81,st.walnut,2.8);for(let h=0;h<3;h++){let f=6+h*9.7;i.box(l,f,d+u*.41,a*.74,8.4,2,st.oak,.7),i.box(l,f+3,d+u*.43,a*.26,2,2,st.brass,.5)}}return $b(i,-t*.02,44,o-r*.22,t*.28,r*.43),i.box(-t*.02,44,o+r*.25,t*.25,1.7,r*.18,st.linen,.6),i.oval(t*.18,45,o+r*.23,t*.018,1.9,r*.074,st.peach),81}function sp(i,t,e,n,s,r){let o=new On;for(let c=0;c<10;c++){let l=c*Math.PI/5-Math.PI/2,u=c%2?s*.46:s,d=[Math.cos(l)*u,Math.sin(l)*u];c===0?o.moveTo(...d):o.lineTo(...d)}o.closePath();let a=new ns(o);a.rotateX(-Math.PI/2),i.part(a,r,t,e,n)}function jb(i,t,e,n,s){let r=s.includes("bunk-bed"),o=s.includes("crafted-crib"),a=s.includes("canopy-bed");ki(i,0,0,t,e,6,st.walnut);let c=r?[6,55]:[6];for(let u of c){i.box(0,u,0,t*.97,15,e*.98,st.walnut,5),i.box(0,u+12,0,t*.9,11,e*.92,st.linen,4),i.box(0,u+21.6,e*.15,t*.89,5,e*.62,st.lilac,2.5),i.box(0,u+23.7,e*.15,t*.877,7,e*.605,n,3.4),i.box(0,u+28,-e*.11,t*.88,3,e*.071,st.lilacLight,1);let d=t>=145?[-t*.2,t*.2]:[0];for(let f of d)Go(i,f,u+22,-e*.275,t*(d.length===2?.34:.49),e*.2,st.linen,f<0?-.04:.04);let h=Math.min(t,e)*.045;for(let[f,g,x,p]of[[-.24,.12,1,st.cream],[.23,.27,.79,st.honey],[.08,.04,.57,st.cream],[-.1,.34,.62,st.honey]])sp(i,t*f,u+30.8,e*g,h*x,p);for(let f of[-.32,-.17,0,.17,.32])i.box(t*f,u+30.71,e*.24,.85,.24,e*.33,st.lilacLight,0);for(let f of[.09,.195,.3,.405])i.box(0,u+30.72,e*f,t*.71,.24,.9,st.lilacLight,0)}let l=r||a?93:52;if(i.box(0,4,-e*.46,t*.95,l-4,e*.083,st.walnut,6),i.box(0,18,-e*.417,t*.89,l-23,e*.055,n,4),o||r||a)for(let u of[-1,1]){for(let d of[-1,1])i.box(t*.45*u,4,e*.46*d,5,l,6,st.walnut,2);if(i.box(t*.45*u,l-9,0,5,5,e*.89,n,1.5),o||r)for(let d=-3;d<=3;d++)i.box(t*.45*u,l-29,e*d*.105,3,20,3,n,.8)}return l}function Qb(i,t,e,n,s){let r=/nightstand/.test(s),a=/bookcase|shelf/.test(s)?66:r?29:s==="storageCabinet"?50:38;ki(i,0,0,t,e,5),i.box(0,5,0,t*.96,a-6,e*.9,st.walnut,3),i.box(0,a-2,0,t,4,e,n,1.7),i.box(0,a-3.7,0,t*.985,1.5,e*.967,st.oak,.6);let c=r?2:3,l=t>=95?2:1;for(let u=0;u<c;u++)for(let d=0;d<l;d++){let h=t*.89/l,f=(a-8)/c,g=h*(d-(l-1)/2),x=5+u*f;i.box(g,x,e*.46,h-2,f-1.5,2.9,n,1),i.oval(g,x+f*.45,e*.51,2.2,1.7,2.2,st.brass)}return a+2}function t1(i,t,e,n){if(n==="office-round")return i.disc(0,1,0,t*.5,2.2,e*.5,st.moss),i.disc(0,3.2,0,t*.46,.7,e*.46,st.sage),i.ring(0,3.9,0,t*.4,e*.4,.6,st.linen),4;let s=n==="bedroom-floral";i.box(0,1,0,t,2.4,e,s?st.lilac:st.blush,1),i.box(0,3.5,0,t*.91,.8,e*.91,st.linen),i.box(0,4.3,0,t*.86,.5,e*.86,s?st.lilacLight:st.peach);for(let r of[-1,1])for(let o=-5;o<=5;o++)i.box(o*t*.074,1.3,r*e*.493,t*.025,1.2,e*.047,st.linen);for(let r of[-1,1])i.box(r*t*.398,4.84,0,.6,.32,e*.797,st.linen),i.box(0,4.84,r*e*.398,t*.797,.32,.6,st.linen);if(s)for(let r of[-1,0,1])for(let o of[-1,0,1])sp(i,t*.22*r,4.9,e*.22*o,Math.min(t,e)*.038,st.cream);return 5}function e1(i,t,e,n){let s=t*.58,r=e*.28,o=-e*.04,a=o-r/2,c=o+r/2,l=(t-s)/2;for(let h of[-1,1])i.box(h*(t+s)/4,n-5,0,l,5,e,st.linen);i.box(0,n-5,(a-e/2)/2,s,5,a+e/2,st.linen),i.box(0,n-5,(c+e/2)/2,s,5,e/2-c,st.linen);let u=Math.min(2.6,s*.1);i.box(0,n-4.88,o,s,.72,r,st.basinSteel);for(let h of[-1,1])i.box(h*s/2,n-4.5,o,u,5.25,r+u,st.steel,.4),i.box(0,n-4.5,o+h*r/2,s,5.25,u,st.steel,.4),i.disc(0,n-4.1,o+h*r/4,u,.6,u,st.darkGlass);i.box(0,n-4.5,o,s,4.85,u,st.steel,.4);let d=-s/2-u*1.15;i.disc(d,n,o,u*.8,u*2.9,u*.8,st.steel),i.box(d+u,n+u*2.5,o,u*2.8,u*.7,u,st.steel,.6)}function n1(i,t,e,n,s=!1){let r=n==="doubleVanity"?32:35,o=n==="kitchenWorktop",a=n==="doubleVanity";i.box(0,1,0,t*.91,r-4,e*.93,a?st.sage:st.walnut,2.3),s?e1(i,t,e,r+2):i.box(0,r-3,0,t,5,e,st.linen,1.8);let c=e>t;for(let l of[-1,1])for(let u=-1;u<=1;u++){let d=c?2.2:t*.29,h=c?e*.29:2.2,f=c?t*.46*l:t*.3*u,g=c?e*.3*u:e*.47*l;i.box(f,6,g,d,r*.67,h,a?st.moss:st.oak,.8),i.box(f,r*.63,g,c?3.2:t*.08,2.6,c?e*.05:3.2,st.honey,.7)}if(o){i.box(0,r+2,0,t*.84,2.5,e*.72,st.darkGlass,.8);for(let l of[-.2,.2])for(let u of[-.19,.19]){let d=Math.min(t,e)*(l<0?.12:.092);i.ring(t*l,r+4.8,e*u,d,d,1,st.glass)}}if(a)for(let l of[-t*.24,t*.24])i.basin(l,r+1.9,0,t*.16,5.5,e*.36),i.oval(l,r+3.48,0,2.1,.52,2.1,st.brass),i.disc(l,r+2,-e*.32,2.6,8,2.6,st.brass),i.box(l,r+8.4,-e*.22,4,3,e*.2,st.brass,1);return r+3}function i1(i,t,e,n){if(n==="tub"){i.box(0,0,0,t*.95,19,e*.95,st.ceramic,6),i.box(0,18,0,t*.85,3,e*.86,st.blueWater,1.3);for(let s of[-1,1])i.box(s*t*.44,17,0,t*.11,7,e*.94,st.cream,2.6),i.box(0,17,s*e*.43,t*.82,7,e*.12,st.cream,2.6);return i.disc(0,21,-e*.31,2.4,.9,2.4,st.glass),i.disc(0,22,-e*.44,3.5,9,3.5,st.brass),i.box(0,30,-e*.4,5,3.7,e*.1,st.brass,1.3),i.box(t*.24,21.07,e*.14,t*.014,.18,e*.22,st.aqua,.08),34}return n==="toilet"?(i.disc(0,0,e*.12,t*.28,11,e*.29,st.ceramic,.65),i.disc(0,10,e*.12,t*.43,5,e*.34,st.cream,.81),i.disc(0,15,e*.12,t*.34,1,e*.27,st.linen),i.box(0,4,-e*.32,t*.92,22,e*.31,st.ceramic,4.2),i.box(0,25,-e*.32,t*.93,3,e*.32,st.cream,1.3),i.disc(t*.25,28,-e*.32,2.1,1.1,2.1,st.honey),29):(i.box(-t*.15,0,-e*.14,t*.65,24,e*.58,st.sage,3.8),i.box(-t*.15,23,-e*.14,t*.76,4,e*.68,st.cream,1.6),i.basin(-t*.15,27,-e*.11,t*.28,5.2,e*.22),i.oval(-t*.15,28.56,-e*.11,1.6,.55,1.6,st.brass),i.disc(-t*.15,27,-e*.34,2.5,8,2.5,st.brass),i.box(-t*.15,33,-e*.31,4.7,3,e*.1,st.brass,1.1),i.box(t*.34,2,e*.12,t*.22,17,e*.73,st.walnut,2.1),i.box(t*.34,19,e*.18,t*.24,4.7,e*.34,st.blush,1.7),36)}function s1(i,t,e,n,s){let r=n?st.cream:"#bb9476",o=Math.min(t,e),a=o*(s?.4:.25),c=o*(s?.64:.49);i.oval(0,a*.68,e*.07,t*.35,a*.62,e*.36,r),i.oval(0,c,-e*.13,t*.3,o*.23,e*.27,r);for(let l of[-1,1])i.oval(t*.27*l,c+o*.19,-e*.19,t*.102,o*(n?.19:.1),e*.093,r),i.oval(t*.1*l,c+o*.04,e*.105,o*.026,o*.034,o*.022,st.ink),i.oval(t*.26*l,a*.69,e*.23,t*.14,o*.105,e*.16,r),i.oval(t*.15*l,c-o*.06,e*.094,o*.043,o*.023,o*.023,st.blush);return i.oval(0,c-o*.044,e*.12,o*.033,o*.022,o*.023,st.ink),s&&i.box(0,8,e*.17,t*.57,9,e*.49,st.linen,3.8),c+o*(n?.37:.28)}function r1(i,t,e){let s=[st.sage,st.peach,st.honey,st.lilac,st.blue,st.blush];ki(i,0,0,t*.96,e*.96,22,st.sage),i.box(0,20,0,t*.94,7,e*.93,st.linen,3);for(let r=0;r<s.length;r++){let o=t*(.23*(r%3)-.23),a=e*(r<3?-.18:.18);i.disc(o,27,a,t*.067,2.6+r%3,e*.072,s[r],1.12)}return 31}function o1(i,t,e,n){let s=[st.linen,n,st.sand,st.peach];for(let r=0;r<4;r++)for(let o=0;o<5;o++){let a=t*((o+.5)/5-.5),c=e*((r+.5)/4-.5);i.box(a,1.1,c,t/5-.8,2.6,e/4-.8,s[(r+o)%4],1)}return 4}function a1(i,t,e,n){let s=Math.min(t,e),r=s*(n?.33:.25);i.disc(0,0,0,r,r*.85,r,st.peach,.72),i.disc(0,r*.75,0,r*1.07,r*.18,r*1.07,st.walnut);for(let o=0;o<5;o++){let a=o*Math.PI*.4,c=Math.cos(a)*s*.21,l=Math.sin(a)*s*.21,u=s*(n?.55:.44)+o%2*s*.08,d=i.oval(c*.5,u*.69,l*.5,s*.035,u*.32,s*.035,st.moss);d.rotation.z=-c/u,d.rotation.x=l/u;let h=n?st.sage:[st.blush,st.linen,st.honey][o%3];i.oval(c,u,l,s*.13,s*(n?.18:.085),s*.11,h)}return s*(n?.82:.65)}function rp(i){let{type:t,w:e,h:n}=i||{};if(typeof t!="string"||!Number.isFinite(e)||!Number.isFinite(n)||e<1||n<1)return null;if(t.startsWith("pets-"))return ip(t,e,n);let s=Wb[t.split("-").at(-1)],r=new fh(e,n),o;if(t==="sofa"||/(?:sofa|loveseat|chaise)-/.test(t))o=Zb(r,e,n,s||(t==="sofa"?st.linen:st.sage),t);else if(t==="tv")r.box(0,2,0,e*.94,23,n*.98,st.walnut,3.5),r.box(0,24,0,e,4,n,st.oakLight,1.5),r.box(0,28,0,e*.4,6,n*.32,st.ink,1.4),r.box(0,33,0,e*.29,52,n*.89,st.ink,2.5),r.box(-e*.155,36,0,1.6,46,n*.84,st.darkGlass,.6),r.box(-e*.187,68,-n*.12,.6,6,n*.33,st.glass,.15),r.oval(-e*.173,35,n*.34,1.2,1.2,1.2,st.honey),o=85;else if(t==="table"||t.includes("dining-set"))o=Jb(r,e,n,s||st.oakLight,t);else if(t==="desk"||t.includes("-desk-"))o=Kb(r,e,n,s||st.oakLight,t==="desk"||t.includes("corner-desk"));else if(t==="chair"||t==="stool"||t.includes("desk-chair"))li(r,0,0,e,n,0,s||st.lilac,t==="stool"),o=t==="stool"?50:60;else if(t==="armchair"||t.includes("acorn-armchair")){li(r,0,0,e,n,0,s||st.lilac,!0);for(let a of[-1,1])r.box(a*e*.37,16,0,e*.19,25,n*.83,st.lilac,6.5);o=51}else if(t==="bed"||/(?:bed|crib)-/.test(t))o=jb(r,e,n,s||st.lilac,t);else if(t==="rug")o=t1(r,e,n,i.rugStyle);else if(t==="counter"||t==="kitchenWorktop"||t==="doubleVanity")o=n1(r,e,n,t,t==="counter"&&i.id==="i7");else if(t==="tub"||t==="toilet"||t==="bathFixtures")o=i1(r,e,n,t);else if(t==="plant"||t==="floorPlant"||t.startsWith("balcony-"))o=a1(r,e,n,t!=="plant");else if(t==="wallUnit")r.box(0,48,0,e,17,n*.62,st.linen,4),r.box(0,51,n*.32,e*.89,4,1.8,st.ink,.6),r.box(-e*.34,56,n*.32,e*.11,2.1,2.1,st.blue,.7),o=65;else if(/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(t))o=Qb(r,e,n,s||st.oakLight,t);else if(/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(t)){let a=t==="bedroomBench"?26:30;ki(r,0,0,e,n,a-4),r.box(0,a-5,0,e,8,n,s||st.oakLight,3.4),t==="bedroomBench"&&r.box(0,a+2,0,e*.87,6.2,n*.91,st.lilacLight,2.6),o=a+8}else if(t.includes("bunny-plush")||t.includes("plush-bear")||t.includes("bear-floor-chair"))o=s1(r,e,n,t.includes("bunny"),t.includes("floor-chair"));else if(t.startsWith("baby-mats-"))o=o1(r,e,n,s||st.sage);else if(t.startsWith("baby-activities-"))o=r1(r,e,n);else if(t.startsWith("baby-toys-")){let a=Math.min(e,n)*.2;r.oval(0,a,0,a,a,a,s||st.peach),r.ring(0,a,0,a*.95,a*.95,1.2,st.linen),o=a*2}else return null;return r.finish(o)}var Xt={cream:16049354,oat:13810076,honey:12421984,rose:12023932,ink:5784146,muted:9404799,plum:6706803,sage:9349263,mint:11982271,teal:4353640,glass:12047575,blue:7379366,warm:16767915,gold:14989425,dark:3553100,ember:15640419,tile:7820909,paleTile:8412532,brass:12355671},Xo=Math.PI,dh=2*Xo,c1=new Set(["unknown","unavailable"]),Kn=(i,t,e)=>Math.max(t,Math.min(e,i)),Wo=(i,t)=>Number.isFinite(i)?Kn(i,12,480):t,cp=.96,lp=.09;function up(i,t,e){let n=Wo(i.w,42),s=Wo(i.h,42);return Math.abs(t)<=n/2&&Math.abs(e-s*lp)<=s*cp/2}var me=(i,t={})=>new Fe({color:i,roughness:.83,...t}),ph=i=>String(i?.state??"unknown"),Ds=i=>!c1.has(ph(i)),Pr=i=>Ds(i)&&(i.active===!0||i.state==="on"),l1=i=>Pr(i)?Number.isFinite(i.attributes?.brightness)?Kn(i.attributes.brightness/255,0,1):1:0;function zi(i,t,e,n=0,s=0,r=0){let o=new he(t,e);return o.position.set(n,s,r),i.add(o),o}function nn(i,t,e,n,s,r=0,o=0,a=0){return zi(i,new we(t,e,n),s,r,o,a)}function yn(i,t,e,n,s,r=0,o=0,a=0,c=3){let l=Math.min(c,t/3,e/3,n/3),u=l-t/2,d=l-e/2,h=new On;h.moveTo(u,d),h.lineTo(-u,d),h.lineTo(-u,-d),h.lineTo(u,-d),h.closePath();let f=new Fi(h,{depth:n-2*l,bevelThickness:l,bevelSize:l,bevelSegments:2});return f.translate(0,0,l-n/2),zi(i,f,s,r,o,a)}function Ke(i,t,e,n,s,r=0,o=0,a=0,c=16){return zi(i,new en(t,e,n,c),s,r,o,a)}function ui(i,t,e,n,s,r){return zi(i,new Le(t,10,7),e,n,s,r)}function Ir(i,t=0,e=0,n=0){let s=new ae;return s.position.set(t,e,n),i.add(s),s}function u1(i,t,e=2.8){let n=new Ze({transparent:!0,depthWrite:!1,blending:Ao,uniforms:{strength:{value:0},tint:{value:new Wt(Xt.warm)}},vertexShader:"varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
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
      }`}),s=zi(i,new Oi(2*t,2*t),n,0,e,0);return s.rotation.x=-Xo/2,s.visible=!1,(r,o)=>{s.visible=r>0,n.uniforms.strength.value=r*.29,n.uniforms.tint.value.copy(o)}}function h1(i,t,e){let n=new ae,s=i.type,r=String(i.lightForm??""),o=s==="pendantLight"||r==="star_pendant",a=s==="ceilingLight"||o||r==="bloom_ceiling",c=s==="floorLamp"||r==="cloud_floor_lamp",l=s==="wallSconce"||r==="acorn_sconce",u=a&&/fan light/i.test(i.name??""),d=Math.min(t,e),h=me(Xt.honey),f=me(Xt.ink),g=me(Xt.brass,{roughness:.36,metalness:.42}),x=me(Xt.cream,{emissive:Xt.warm,emissiveIntensity:0}),p=new Wt(Xt.warm),m=u?46:o?50:a?56:l?40:c?56:36,y=!a&&!c&&!l,w=y?Kn(d*.68,15,46):Kn(d*(a?1.72:1.35),38,110),v=u1(n,w,y?16.8:2.8);if(a){let b=d*(u?.19:.29);Ke(n,b,b*1.02,3,f,0,m+2),o&&Ke(n,1.7,1.7,13,h,0,m+9),Ke(n,b*.82,b,5,h,0,m-1.5),Ke(n,b*.92,b*.96,1.15,g,0,m+1.1);let E=ui(n,b*.83,x,0,m,0);E.scale.y=o?.88:.52}else if(l)yn(n,d*.34,18,4,f,0,35,-4),Ke(n,d*.12,d*.11,14,h,0,37,3),ui(n,d*.21,x,0,m+3,3);else{let b=m-7,E=c?3:16,C=d*(c?.25:.3);if(Ke(n,C*.57,C*.67,4,f,0,E),Ke(n,2,2.9,b-E,h,0,(E+b)/2),c)ui(n,C*.81,x,0,m,0);else{let _=r==="bud_lamp"?12:9;Ke(n,C*.56,C,14,x,0,m,0,_),Ke(n,C,C*.99,1.2,g,0,m-6.7,0,_),Ke(n,C*.55,C*.58,1.1,g,0,m+7.1,0,_)}}return{root:n,anchorY:m+2,animate(b){let E=l1(b),C=b?.attributes?.rgb_color;if(Array.isArray(C)&&C.length===3&&C.every(Number.isFinite)){let[_,P,F]=C.map(L=>Kn(L/255,0,1));p.setRGB(_,P,F,qe)}else p.setHex(Xt.warm);v(E,p),x.emissiveIntensity=E*.88,x.emissive.copy(p),E>0?x.color.copy(p):x.color.setHex(Xt.cream)}}}function f1(i){let t=new On;t.moveTo(i*.1,-i*.061),t.bezierCurveTo(i*.39,-i*.094,i*.62,-i*.16,i*.88,-i*.14),t.bezierCurveTo(i*1.01,-i*.11,i*1.03,i*.07,i*.88,i*.13),t.bezierCurveTo(i*.62,i*.2,i*.42,i*.13,i*.1,i*.063),t.closePath();let e=new Fi(t,{depth:1.8,bevelEnabled:!0,bevelSize:.6,bevelThickness:.48,bevelSegments:1,curveSegments:5});return e.translate(0,0,-.9),e.rotateX(-Xo/2)}function op(i,t,e,n){let s=new ae,r=Math.min(t,e)*(n?.37:.46),o=n?r+11:59,a=Ir(s,0,o,0);n&&(a.rotation.x=Xo/2);let c=Ir(a,0,-1,0),l=me(Xt.cream),u=me(Xt.ink),d=/(?:white|cream)$/.test(i.type)?Xt.oat:/(?:forest|sage)$/.test(i.type)?Xt.sage:Xt.honey,h=me(d),f=n||/three-blade/.test(i.type)?3:/four-blade/.test(i.type)?4:5;Ke(a,r*.18,r*.2,6,u),Ke(a,r*.174,r*.176,1.4,me(Xt.brass,{roughness:.36,metalness:.42}),0,3.4),Ke(a,r*.15,r*.17,2.6,l,0,4.9);let g=f1(r);for(let x=0;x<f;x++){let p=Ir(c);p.rotation.y=x/f*dh,zi(p,g,h)}if(n){yn(s,r*1.66,6,r*1.02,u,0,3),nn(s,r*.3,11,6,l,0,10);let x=zi(s,new mn(r,2.6,6,24),l,0,o,3);x.rotation.z=.04;for(let p=-1;p<=1;p++){let m=p*r*.5;Ke(s,.68,.68,2*Math.sqrt(r*r-m*m),u,m,o,5,6)}}return{root:s,anchorY:o,...n?{}:{anchorOffset:{x:r*.76,z:0}},animate(x,p=0){let m=Number.isFinite(x?.attributes?.percentage)?Kn(x.attributes.percentage/100,.12,1):.64;c.rotation.y=Pr(x)?p*dh*m%dh:0}}}function d1(i,t){let e=new ae,n=t.mountY??39,s=Ir(e,0,n),r=Kn(i*.72,17,27);yn(s,r,31,5,me(Xt.ink),0,0,-.5),yn(s,r-1.9,29,4.4,me(Xt.cream),0,.3,1);let o=me(Xt.oat,{emissive:Xt.warm,emissiveIntensity:0}),a=yn(s,r*.55,17.5,3.2,o,0,3.2,3.5),c=Array.from({length:3},(l,u)=>{let d=me(Xt.teal,{emissive:Xt.mint,emissiveIntensity:0});return ui(s,1.85,d,(u-1)*r*.24,-10.3,3.55)});return{root:e,anchorY:n,animate(l,u=0){a.rotation.x=Ds(l)?Pr(l)?-.16:.16:0,o.emissiveIntensity=Pr(l)?.42:0;let d=l?.presence==="on";for(let h=0;h<c.length;h++){let f=d?.5+.5*Math.cos(u*5-h*1.23):0;c[h].material.color.setHex(d?Xt.mint:Xt.teal),c[h].material.emissiveIntensity=d?.75+f*1.9:0,c[h].scale.setScalar(d?1+f*.18:1)}}}}function ap(i,t,e,n=31){let s=new ae,r=36.5,o=Math.max(12,i-6),a=me(Xt.oat);if(t){let h=me(Xt.glass,{roughness:.32});nn(s,o,n,3.2,h,0,r,0);for(let g of[-o/2+1.6,0,o/2-1.6])nn(s,3.2,n+2,7.5,a,g,r);let f=r+n/2;nn(s,o,1.8,7,h,0,f+.35);for(let g of[-4.25,4.25])nn(s,o+2,3.2,1.5,a,0,f,g);nn(s,o+3,3.8,11,a,0,r-n/2,1.4),nn(s,o,1.35,.5,me(Xt.cream),0,r+6.2,2)}if(!e)return{root:s,anchorY:r};let c=me(Xt.cream),l=r+n/2-1;yn(s,o+2,4.6,7,a,0,l+.75,6.7,1.6);let u=Array.from({length:8},(h,f)=>nn(s,o-5,n/8-.45,3,c,0,l-f*(n/8),6.9)),d=0;return{root:s,anchorY:r+1.5,animate(h,f,g,x=!1){let p=mh(h),m=p===null?x?0:d:1-p;x||(d=m);let y=Number.isFinite(h?.attributes?.current_tilt_position)?Kn(h.attributes.current_tilt_position/100,0,1):0;for(let w=0;w<u.length;w++){let v=Kn(m*u.length-w,0,1);u[w].visible=v>.02,u[w].scale.y=v,u[w].rotation.x=y*.9}}}}function mh(i){return Ds(i)?Number.isFinite(i.attributes?.current_position)?Kn(i.attributes.current_position/100,0,1):["open","on"].includes(i.state)?1:["closed","off"].includes(i.state)?0:null:null}function p1(i,t){let e=new ae,n=t*.72,s=i*.74,r=n/2,o=Math.min(48,i*.38),a=Math.min(23,i*.19),c=me(Xt.oat),l=me(Xt.cream),u=me(Xt.plum),d=[me(Xt.tile),me(Xt.paleTile)],h=me(Xt.dark);nn(e,i,5,t*cp,l,0,2.5,t*lp),nn(e,i*.88,o+4,5,c,0,(o+4)/2,-r+2);for(let L of[-i*.42,i*.42])nn(e,i*.09,o+4,n,c,L,(o+4)/2),yn(e,i*.1,o+4,5,l,L,(o+4)/2,r+1,1.5);let f=new On;f.moveTo(-i*.49,0),f.lineTo(i*.49,0),f.lineTo(0,a),f.closePath();let g=new Fi(f,{depth:n+11,bevelThickness:1.5,bevelSize:1.5,bevelSegments:2});g.translate(0,0,-r-5.5),zi(e,g,u,0,o+4);let x=i*.49,p=Math.atan2(a,x),m=Math.hypot(a,x),y=(n+11)/8,w=[[],[]];for(let L of[-1,1])for(let U=0;U<8;U++){let V=-r-5.5+(U+.5)*y,O=new we(m*.97,2.2,y-.62);O.rotateZ(-L*p),O.translate(L*x*.5,o+5.65+a*.5,V),w[U%2].push(O)}w.forEach((L,U)=>{zi(e,Pn(L),d[U]),L.forEach(V=>V.dispose())}),yn(e,4,4.5,n+12,u,0,o+a+5.6,0,1.5),nn(e,i*.95,3.5,3.5,l,0,o+4,r+5.5),nn(e,s,o,1.5,h,0,o/2+4,r-4);for(let L of e.children)L.isMesh&&(L.castShadow=!0);let v=me(Xt.mint),b=me(Xt.sage),C=(o-3)/6,_=Array.from({length:6},(L,U)=>{let V=Ir(e,0,o-(U+.5)*C+2,r+.5);return yn(V,s-2,C-.7,3.4,v,0,0,0,1.2),nn(V,s*.91,.68,.7,b,0,C*.23,1.8),U===5&&yn(V,s*.13,2,2.2,l,0,0,2.3,.55),V}),P=me(Xt.gold,{emissive:Xt.ember,emissiveIntensity:0});ui(e,3.7,P,i*.422,o*.73,r+4.5);let F=0;return{root:e,anchorY:o*.62,anchorOffset:{x:0,z:r},animate(L,U=0,V,O=!1){let z=mh(L)??(O?0:F);O||(F=z),v.color.setHex(Ds(L)?Xt.mint:Xt.muted),b.color.setHex(Ds(L)?Xt.sage:Xt.muted);let tt=(1-z)*_.length;_.forEach((X,Y)=>{let $=Kn(tt-Y,0,1);X.visible=$>.02,X.scale.y=$,X.position.y=o-(Y+$/2)*C+2});let H=["opening","closing"].includes(ph(L));P.emissiveIntensity=H?.55+(.5+.5*Math.cos(U*6)):0}}}function m1(i){let t=new ae,e=46,n=me(Xt.cream),s=me(Xt.honey),r=Math.min(i*.86,88),o=Ir(t,-r/2,0,0);for(let c of[-r/2-1,r/2+1])nn(t,3.4,e,5,n,c,e/2);nn(t,r+4,3,5,n,0,e),yn(o,r-2,e-4,4,s,r/2,e/2,0,2),ui(o,2.2,me(Xt.gold),r-6,e*.47,2.8);let a=0;return{root:t,anchorY:e/2,animate(c,l,u,d=!1){let f=mh(c)??(d?0:a);d||(a=f),o.rotation.y=-1.32*f,s.color.setHex(Ds(c)?Xt.honey:Xt.muted)}}}function g1(i,t,e){let n=new ae,s=i.type!=="wallUnit",r=e.mountY??(s?42:48),o=Kn(t*.85,23,126),a=me(Xt.dark,{emissive:Xt.mint,emissiveIntensity:0});if(yn(n,o,s?25:18,8,me(Xt.cream),0,r,0),s){yn(n,o*.7,11,1.9,a,0,r+2,4.1);for(let c of[-.22,0,.22])ui(n,1.35,me(Xt.oat),o*c,r-7,4.3)}else nn(n,o*.89,2.2,.7,a,0,r-4,4.2);return{root:n,anchorY:r,animate(c){let l=c?.attributes?.hvac_action,u=l==="heating",d=Ds(c)&&["cooling","heating","drying","fan"].includes(l);a.emissive.setHex(u?Xt.warm:Xt.glass),a.emissiveIntensity=d?1.15:Pr(c)?.25:0}}}function x1(i,t,e){let n=new ae,s=Math.min(t,e)*.74,r=i.type==="humidifier",o=r?25:30,a=me(Xt.cream),c=me(r?Xt.glass:Xt.sage),l=me(Xt.teal,{emissive:Xt.mint,emissiveIntensity:0}),u=o-1;if(Ke(n,s*.46,s*.5,4,me(Xt.ink),0,2),r){let f=ui(n,s/2,c,0,13,0);f.scale.y=22/s,Ke(n,s*.19,s*.22,3.5,a,0,u)}else{yn(n,s,24,s*.82,c,0,15,0,5),yn(n,s*.91,3.8,s*.71,a,0,u);for(let f=-1;f<=1;f++)nn(n,s*.66,1.2,1.1,l,0,u+2,f*3.5)}ui(n,1.6,l,s*.18,u-2,s*.31);let d=me(Xt.glass,{transparent:!0,opacity:.54,depthWrite:!1}),h=Array.from({length:3},(f,g)=>ui(n,2.1+g*.6,d,0,u+3,0));return{root:n,anchorY:u,animate(f,g=0){let x=Pr(f);l.emissiveIntensity=x?1.6:0;for(let p=0;p<h.length;p++){h[p].visible=x;let m=(g*.68+p/h.length)%1;h[p].position.set(Math.sin(m*Xo)*3.1,u+4+m*14,0),h[p].scale.setScalar(.7+m*.62)}}}}function y1(i,t){let e=new ae,n=Math.min(i,t)*.42,s=.72;e.scale.setScalar(s);let r=me(Xt.sage,{emissive:Xt.mint,emissiveIntensity:0}),o=me(Xt.ink);Ke(e,n,n*.95,7,o,0,4.6),Ke(e,n*.96,n,5.5,me(Xt.cream),0,10.2),Ke(e,n*.28,n*.33,4,me(Xt.oat),0,14,-n*.23);for(let c of[-.27,.27])ui(e,n*.105,o,n*c,10,n*.88);let a=yn(e,n*.68,1.2,2.5,r,0,13.2,n*.36);return{root:e,anchorY:12,floorRadius:n*1.03*s,animate(c,l=0,u=!1){let d=["cleaning","returning"].includes(ph(c));a.material.emissiveIntensity=d?u?.6+.5*Math.cos(l*6):.3:0}}}function hp(i,t={}){let e=Wo(i.w,42),n=Wo(i.h,42),s=String(i.type??""),r=i.visualKind,o=String(i.entityId??"").split(".")[0];return s==="cameraThumbnail"||s.startsWith("ui")?null:s==="presenceSwitch"?d1(e,t):s==="garageDoor"?p1(e,n):s==="door"||r==="door"?m1(e):s==="window"?ap(e,!0,!!i.entityId):s==="controlZone"?r==="window"||o==="cover"?ap(Wo(t.window?.w,e),!1,!0):null:s==="wallUnit"||s==="thermostat"||r==="climate"?g1(i,e,t):s==="airPurifier"||s==="humidifier"?x1(i,e,n):r==="vacuum"||/^cleaning-.*robot/.test(s)?y1(e,n):s==="windowFan"?op(i,e,n,!0):r==="fan"||/^fans-/.test(s)?op(i,e,n,!1):r==="light"||i.lightForm||/^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(s)?h1(i,e,n):null}var xp=Fl(cl(),1),{difference:yp,union:_p}=xp.default,fl=18,zn=.001,Mi=(i,t)=>i[0]*t[0]+i[1]*t[1],Us=(i,t)=>i[0]*t[1]-i[1]*t[0],Si=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ne=(i,t,e)=>[i[0]+t[0]*e,i[1]+t[1]*e],pl=([i,t])=>[-t,i],fp=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],ul=i=>i.map(({x:t,y:e})=>[t,e]),Hi=i=>[i.map(t=>t.map(e=>Math.round(e*1e5)/1e5))],vp=i=>i.length?_p(...i):[];function dl(i,t,e,n=0){let s=Si(t,i),r=Math.hypot(...s);if(r<zn)return null;let o=s.map(u=>u/r),a=pl(o),c=Ne(i,o,-n),l=Ne(t,o,n);return Hi([Ne(c,a,e),Ne(l,a,e),Ne(l,a,-e),Ne(c,a,-e)])}function hl(i,t){let[e,n]=t,s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let[a,c]=i[r],[l,u]=i[o];c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function dp(i){return i.flatMap((t,e)=>{let n=i[(e+1)%i.length],s=Si(n,t),r=Math.hypot(...s);return r>zn?[{start:t,end:n,length:r,tangent:s.map(o=>o/r)}]:[]})}function _1(i,t,e,n){if(Math.abs(Mi(i.tangent,t.tangent))<.9999)return null;let s=pl(i.tangent),[r,o]=[t.start,t.end].map(x=>Si(x,i.start)),a=Mi(r,s);if(Math.abs(a)<.1||Math.abs(a)>fl||Math.abs(a-Mi(o,s))>.1)return null;let c=[Mi(r,i.tangent),Mi(o,i.tangent)].sort((x,p)=>x-p),l=Math.max(0,c[0]),u=Math.min(i.length,c[1]);if(u-l<8)return null;let d=Ne(i.start,i.tangent,(l+u)/2),h=Math.sign(a);if(!hl(e,Ne(d,s,-h))||!hl(n,Ne(d,s,a+h))||hl(e,Ne(d,s,a/2))||hl(n,Ne(d,s,a/2)))return null;let f=Ne(i.start,i.tangent,l),g=Ne(i.start,i.tangent,u);return Hi([Ne(f,s,-h*.05),Ne(g,s,-h*.05),Ne(g,s,a+h*.05),Ne(f,s,a+h*.05)])}function bp(i){let t=[],e=[];for(let n of[...i].reverse()){let s=vp(n.polygons);if(!s.length)continue;let r=t.length?yp(s,t):s;r.length&&e.push({surface:n.surface,polygons:r}),t=t.length?_p(t,s):s}return{footprint:t,regions:e.reverse()}}function Yo(i){return i.outdoor===!0||i.outdoor!==!1&&i.surface==="patio"}function Mp(i,t,e=!1){let n=i.map(h=>({surface:h.surface,points:ul(h.points),polygons:[Hi(ul(h.points))],outdoor:e&&Yo(h)})),s=[];for(let[h,f]of n.entries())for(let g of n.slice(h+1))for(let x of dp(f.points))for(let p of dp(g.points)){let m=_1(x,p,f.points,g.points);m&&s.push({surface:f.surface,polygons:[m],outdoor:f.outdoor||g.outdoor})}let r=[],o=[];if(t){let{left:h,deckEdge:f,stepBottom:g,deckBottom:x,northDeck:p,southDeck:m,recess:y}=t;r.push({surface:"patio",polygons:[Hi(ul(p)),Hi(ul(m)),Hi(fp(h,g,f+1,x))]}),y.x2>y.x1&&y.z2>y.z1&&o.push({surface:"oak",polygons:[Hi(fp(y.x1,y.z1,y.x2,y.z2))]})}let a=[...s,...n],c=[...o,...a.filter(h=>!h.outdoor)],l=[...r,...a.filter(h=>h.outdoor)],u=bp([...l,...c]),d=t||e?vp(c.flatMap(h=>h.polygons)):[];return{...u,foundation:d}}function v1(i,t,e,n){let s=Us(t,e);if(Math.abs(s)<.13)return null;let r=Math.sign(s)*-n,o=Ne(i,pl(t),r),a=Ne(i,pl(e),-r),c=Us(Si(a,o),e)/s,l=Ne(o,t,c);return Math.hypot(...Si(l,i))>n*2.5?Hi([i,o,a]):Hi([i,o,l,a])}function pp(i,t){let e=Us(i.tangent,t.tangent);if(Math.abs(e)<.13)return null;let n=Si(t.point,i.point);return[Us(n,t.tangent)/e,Us(n,i.tangent)/e]}function b1(i){let t=i.flatMap(n=>[{wall:n,point:[n.x1,n.y1],tangent:[n.dx,n.dz]},{wall:n,point:[n.x2,n.y2],tangent:[-n.dx,-n.dz]}]),e=[];for(let[n,s]of t.entries()){for(let r of t.slice(n+1)){if(s.wall===r.wall)continue;let o=Si(r.point,s.point);if(Math.hypot(...o)>fl)continue;let a=pp(s,r);a&&a.every(c=>c>=-fl&&c<=zn)?e.push({a:s,b:r,center:Ne(s.point,s.tangent,a[0])}):!a&&Mi(s.tangent,r.tangent)<0&&Mi(o,s.tangent)<=zn&&Mi(o,r.tangent)>=-zn&&e.push({a:s,b:r})}for(let r of i){if(s.wall===r)continue;let o={wall:r,point:[r.x1,r.y1],tangent:[r.dx,r.dz]},a=pp(s,o);if(!a)continue;let[c,l]=a;c<-fl||c>=-zn||l<=zn||l>=r.length-zn||r.openings.some(({start:u,end:d})=>l>=u&&l<=d)||e.push({a:s,center:Ne(s.point,s.tangent,c)})}}return e}function mp({a:i,b:t,center:e},n){return e?[dl(i.point,e,n,.1),t&&dl(t.point,e,n,.1),t&&v1(e,i.tangent,t.tangent,n)].filter(Boolean):[dl(i.point,t.point,n,.1)].filter(Boolean)}function Sp(i){return i.flatMap(t=>t.flatMap(e=>e.slice(1).map((n,s)=>[e[s],n])))}function M1(i,t){return Sp(i).flatMap(([e,n])=>{let s=Si(n,e),r=Math.hypot(...s);if(r<zn)return[];let o=s.map(a=>a/r);return t.flatMap(([a,c])=>{let l=Si(a,e),u=Si(c,e);if(Math.abs(Us(l,o))>zn||Math.abs(Us(u,o))>zn)return[];let[d,h]=[Mi(l,o),Mi(u,o)].sort((x,p)=>x-p),f=Math.max(0,d),g=Math.min(r,h);return g-f>zn?[[Ne(e,o,f),Ne(e,o,g)]]:[]})})}function gp(i,t){return t?.length?yp(i,t):i}function Ep(i,t,e,n){let s=[],r=(c,l,u,d,h=0)=>{c&&u>l&&s.push({shape:c,from:l,to:u,surface:d,priority:h})};for(let c of i){let{palette:[l,u,d]}=c,h=[c.x1,c.y1],f=[c.dx,c.dz],g=(y,w,v,b,E,C,_)=>{w-y>zn&&r(dl(Ne(h,f,y),Ne(h,f,w),E/2),v,b,C,_)},x=c.openings.length?n:0,p=(y,w)=>{g(y,w,x,e,t,l,2),g(y,w,e-1,e+2,t+3,u,1)};x&&g(0,c.length,0,x,t,l,2);let m=0;for(let y of c.openings)p(m,y.start),m=Math.max(m,y.end);p(m,c.length),g(0,c.length,0,3,t+3,d,1)}for(let c of b1(i)){let[l,u,d]=c.a.wall.palette;for(let h of mp(c,t/2))r(h,0,e,l,2);for(let h of mp(c,(t+3)/2))r(h,e-1,e+2,u,1),r(h,0,3,d,1)}let o=[...new Set(s.flatMap(({from:c,to:l})=>[c,l]))].sort((c,l)=>c-l),a=o.slice(1).map((c,l)=>{let u=o[l],d=new Map,h=s.filter(f=>f.from<=u&&f.to>=c);for(let{surface:f,shape:g}of h.sort((x,p)=>x.priority-p.priority))d.has(f)||d.set(f,{surface:f,polygons:[]}),d.get(f).polygons.push(g);return{...bp([...d.values()]),bottom:u,top:c}});return a.flatMap(({regions:c,footprint:l,bottom:u,top:d},h)=>{let f=Sp(l);return c.map(g=>({...g,bottom:u,top:d,faces:{top:gp(g.polygons,a[h+1]?.footprint),bottom:u===0?[]:gp(g.polygons,a[h-1]?.footprint),sides:M1(g.polygons,f)}}))})}var S1=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),E1=3,w1={night:["#a8b8f5","#5b536e","#a7b8ed","#97a5c5","#343951"],clear:["#f2f5ff","#998b85","#fff0d9","#f4f1d8","#c0cbb4"],overcast:["#dce6f1","#8c8797","#e9eff9","#ccd6c6","#aebbb4"]},wp=Object.fromEntries(Object.entries(w1).map(([i,t])=>[i,t.map(e=>new Wt(e))])),T1=new Wt("#ffc38b"),{clamp:A1,lerp:qo,smoothstep:Tp}=se;function Ap(i,t,e){i.toneMapping=Ro,i.toneMappingExposure=1.07,i.shadowMap.enabled=!0,i.shadowMap.type=Cs,i.shadowMap.autoUpdate=!1;let n=new Rs("#fff4e5","#897e91",1.13),s=new as("#fff0d4",2.15),r=new as("#dbeaff",.24),{minX:o,maxX:a,minZ:c,maxZ:l}=e,u=(o+a)/2,d=(c+l)/2;s.position.set(u-610,1150,d-490),s.target.position.set(u,0,d),r.position.set(u+290,410,d+410),s.castShadow=!0,s.shadow.mapSize.setScalar(Math.min(2048,i.capabilities.maxTextureSize));let h=Math.hypot(a-o,l-c)/2+175;Object.assign(s.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:20,far:2700}),s.shadow.camera.updateProjectionMatrix(),s.shadow.normalBias=1.15,s.shadow.bias=-12e-5,s.shadow.radius=3.4;let f=Array.from({length:E1},()=>new Eo("#ffd7a5",0,145,2));t.add(n,s,s.target,r,...f);let g=[],x,p,m=!0,y=new Wt;function w(){for(let E of t.children)E.isMesh&&(E.receiveShadow=!0,E.geometry.computeBoundingBox(),E.castShadow=E.geometry.boundingBox.max.y+E.position.y>-99)}function v(E,C){let _=/(light|lamp|sconce)/i.test(E.type),P=!C.animate||_;C.root.traverse(F=>{!F.isMesh||F.material.transparent||F.material.isShaderMaterial||(F.receiveShadow=!0,F.castShadow||=P)}),_&&E.entityId&&g.push({item:E,object:C})}function b(E,C,_,P=!1){let F=E.night===!0,L=S1.has(E.condition),U=Number.isFinite(E.sunElevation)?Math.round(E.sunElevation*2)/2:F?-12:35,V=Tp(U,-8,19),O=`${L}:${A1(U,-8,35)}`;if(O!==x){let K=wp[L?"overcast":"clear"],z=[n.color,n.groundColor,s.color,_.color,t.background];for(let[H,X]of z.entries())X.lerpColors(wp.night[H],K[H],V);let tt=V*(1-Tp(U,8,34));L||s.color.lerp(T1,tt*.8),n.intensity=qo(.75,L?1.33:1.12,V),s.intensity=qo(.28,L?.86:2.14,V),r.intensity=qo(.12,.23,V),s.shadow.intensity=qo(.65,L?.39:.84,V),x=O,p=void 0}if(p!==C||P){let K=g.flatMap(({item:z,object:tt})=>{let H=C[z.id];if(H?.state!=="on")return[];let X=Number.isFinite(H.attributes?.brightness)?se.clamp(H.attributes.brightness/255,0,1):1;return X>0?[{object:tt,power:X,color:H.attributes?.rgb_color}]:[]}).sort((z,tt)=>tt.power-z.power);for(let[z,tt]of f.entries()){let H=K[z];if(!H){tt.intensity=0;continue}let{object:X,power:Y,color:$}=H;Array.isArray($)&&$.length===3&&$.every(Number.isFinite)?(y.setRGB(...$.map(yt=>se.clamp(yt/255,0,1)),qe),tt.color.copy(y)):tt.color.set("#ffd5a2"),tt.position.copy(X.root.position),tt.position.y+=Math.max(18,(X.anchorY-9)*X.root.scale.y),tt.intensity=Y*qo(2350,1250,V)}p=C}m&&(i.shadowMap.needsUpdate=!0,m=!1)}return{markStructure:w,register:v,update:b,dispose:()=>s.shadow.dispose()}}var Ei=(i,t,e)=>Object.freeze({label:i,azimuth:t,tilt:e,zoom:1}),Lr=Object.freeze({default:Ei("Default",0,0),top:Ei("Top down",0,0),high:Ei("High angle",0,15),dollhouse:Ei("Dollhouse",2,30),corner:Ei("Corner",45,40),north:Ei("From north",180,42),east:Ei("From east",90,42),south:Ei("From south",0,42),west:Ei("From west",270,42),free:Ei("Free view",0,25)});function Rp(i,t=!1){let e=Object.entries(Lr).map(([s,{label:r}])=>[s,r]);t&&e.push(["plan","2D plan"]);let n=e.map(([s,r])=>{let o=i.ownerDocument.createElement("option");return o.value=s,o.textContent=r,o});i.replaceChildren(...n),i.value="default",i.disabled=!1}function Vi(i="top"){let t=typeof i=="string"?{preset:i}:i??{},e=Object.hasOwn(Lr,t.preset)?t.preset:"top",n=Lr[e],s=Number.isFinite(t.azimuth)?t.azimuth:n.azimuth;return{preset:e,azimuth:(s%360+360)%360,tilt:Number.isFinite(t.tilt)?se.clamp(t.tilt,0,65):n.tilt,zoom:Number.isFinite(t.zoom)?se.clamp(t.zoom,.6,2.5):n.zoom}}function Cp(i){let t=Vi(i);return{...t,preset:"free",tilt:t.tilt||Lr.free.tilt}}function gh(i){return i?.preset!=="free"||![i.azimuth,i.tilt,i.zoom].every(Number.isFinite)?null:Vi(i)}function xh(i){return Vi({...gh(i),preset:"default"})}function Ip(i){let t=i.RoomcraftDashboardBridge;if(t?.request)return{read:async()=>gh(await t.request("CAMERA_GET")),write:n=>t.request("CAMERA_SET",n)};let e="roomcraft.default-camera.v1";return{async read(){return gh(JSON.parse(i.localStorage.getItem(e)))},async write(n){n?i.localStorage.setItem(e,JSON.stringify(n)):i.localStorage.removeItem(e)}}}function yh(i,t,e,n,s="top",{focus:r,demoZoom:o}={}){if(![t?.minX,t?.maxX,t?.minZ,t?.maxZ,e,n].every(Number.isFinite)||e<=0||n<=0||t.maxX<t.minX||t.maxZ<t.minZ)throw new Error("A finite scene bounding box and viewport are required.");let a=Vi(s),c=se.degToRad(a.azimuth),l=se.degToRad(a.tilt),u=new G((t.minX+t.maxX)/2,-5,(t.minZ+t.maxZ)/2),d=new G(Math.sin(c)*Math.sin(l),Math.cos(l),Math.cos(c)*Math.sin(l));i.up.set(-Math.sin(c)*Math.cos(l),Math.sin(l),-Math.cos(c)*Math.cos(l)),i.position.copy(u).addScaledVector(d,1900),i.lookAt(u),i.updateMatrixWorld(!0);let h=Math.max(92,Number.isFinite(t.maxY)?t.maxY:92),f=new Be,g=new G;for(let v of[t.minX-37,t.maxX+37]){for(let b of[t.minZ-53,t.maxZ+36])for(let E of[-111,h])f.expandByPoint(g.set(v,E,b).applyMatrix4(i.matrixWorldInverse));Number.isFinite(t.sceneryMinZ)&&f.expandByPoint(g.set(v,-106,t.sceneryMinZ-8).applyMatrix4(i.matrixWorldInverse))}if(Number.isFinite(t.sceneryMinZ)){let v=(f.max.y-f.min.y)*.025;f.min.y-=v,f.max.y+=v}let x=e/n,p=Math.max((f.max.x-f.min.x)/2,(f.max.y-f.min.y)/2*x),m=p/x,y=(f.min.x+f.max.x)/2,w=(f.min.y+f.max.y)/2;if([r?.x,r?.y,r?.z].every(Number.isFinite)){let{x:v,y:b}=g.set(r.x,r.y,r.z).applyMatrix4(i.matrixWorldInverse),E=Number.isFinite(r.weight)?se.clamp(r.weight,0,1):1;y=se.lerp(y,v,E),w=se.lerp(w,b,E)}return i.left=y-p,i.right=y+p,i.bottom=w-m,i.top=w+m,i.zoom=Number.isFinite(o)?se.clamp(o,.6,4.5):a.zoom,i.updateProjectionMatrix(),a}(i=>{"use strict";let t=[{type:"sofa",label:"L sofa",icon:"\u{1F6CB}",w:165,h:238,group:"living"},{type:"table",label:"Dining table",icon:"\u25B0",w:165,h:108,group:"living"},{type:"chair",label:"Chair",icon:"\u25D2",w:48,h:48,group:"living"},{type:"armchair",label:"Armchair",icon:"\u25A3",w:86,h:88,group:"living"},{type:"coffeeTable",label:"Coffee table",icon:"\u2B2D",w:105,h:66,group:"living"},{type:"sideTable",label:"Side table",icon:"\u25C9",w:55,h:55,group:"living"},{type:"tv",label:"TV",icon:"\u25AE",w:28,h:130,group:"living"},{type:"rug",label:"Rug",icon:"\u25A7",w:150,h:110,group:"living"},{type:"bed",label:"Bed",icon:"\u25A4",w:210,h:185,group:"bedroom"},{type:"desk",label:"Desk",icon:"\u25A3",w:180,h:78,group:"bedroom"},{type:"dresser",label:"Dresser",icon:"\u25A5",w:122,h:58,group:"bedroom"},{type:"nightstand",label:"Nightstand",icon:"\u25A3",w:56,h:54,group:"bedroom"},{type:"bookcase",label:"Bookcase",icon:"\u25A4",w:58,h:156,group:"bedroom"},{type:"bedroomBench",label:"Bedroom bench",icon:"\u25B0",w:52,h:122,group:"bedroom"},{type:"storageCabinet",label:"Storage cabinet",icon:"\u25A5",w:75,h:92,group:"bedroom"},{type:"counter",label:"Counter",icon:"\u25A5",w:62,h:190,group:"utility"},{type:"stool",label:"Bar stool",icon:"\u25C9",w:42,h:42,group:"utility"},{type:"kitchenWorktop",label:"Kitchen appliance worktop",icon:"\u25A6",w:106,h:127,group:"utility"},{type:"bathFixtures",label:"Bathroom fixture group",icon:"\u25EB",w:73,h:117,group:"utility"},{type:"doubleVanity",label:"Double-sink vanity",icon:"\u25A5",w:202,h:44,group:"utility"},{type:"wallUnit",label:"Wall-mounted unit",icon:"\u25B0",w:139,h:43,group:"systems",mount:"wall"},{type:"tub",label:"Bathtub",icon:"\u25A2",w:65,h:128,group:"utility"},{type:"toilet",label:"Toilet",icon:"\u25CD",w:46,h:60,group:"utility"},{type:"lamp",label:"Bedside lamp",icon:"\u263C",w:40,h:40,group:"lighting"},{type:"ceilingLight",label:"Ceiling light",icon:"\u2600",w:58,h:58,group:"lighting"},{type:"pendantLight",label:"Pendant light",icon:"\u273A",w:70,h:70,group:"lighting"},{type:"floorLamp",label:"Floor lamp",icon:"\u25C9",w:54,h:92,group:"lighting"},{type:"tableLamp",label:"Table lamp",icon:"\u25CC",w:48,h:52,group:"lighting"},{type:"wallSconce",label:"Wall sconce",icon:"\u25D6",w:34,h:48,group:"lighting",mount:"wall"},{type:"thermostat",label:"Wall thermostat / AC",icon:"\u25F4",w:48,h:54,group:"systems",mount:"wall",visualKind:"climate"},{type:"presenceSwitch",label:"Presence dimmer switch",icon:"\u283F",w:30,h:42,group:"systems",mount:"wall",visualKind:"device"},{type:"humidifier",label:"Floor humidifier",icon:"\u2668",w:46,h:58,group:"systems",visualKind:"device"},{type:"airPurifier",label:"Air purifier",icon:"\u224B",w:48,h:62,group:"systems",visualKind:"device"},{type:"windowFan",label:"Window fan",icon:"\u2723",w:46,h:46,group:"systems",visualKind:"fan"},{type:"garageDoor",label:"Garage door control",icon:"\u25A5",w:116,h:52,group:"systems",visualKind:"door"},{type:"cameraThumbnail",label:"Camera thumbnail",icon:"\u25A3",w:170,h:110,group:"security"},{type:"controlZone",label:"Invisible button area",icon:"\u25A7",w:120,h:72,group:"security"},{type:"uiWeatherOrb",label:"Sun / moon",icon:"\u2600",w:64,h:64,group:"interface"},{type:"uiMenu",label:"Device menu",icon:"\u2630",w:48,h:48,group:"interface"},{type:"uiTime",label:"Clock",icon:"\u25F7",w:84,h:42,group:"interface"},{type:"uiEdit",label:"Edit layout button",icon:"\u270E",w:48,h:48,group:"interface"},{type:"uiStatusAir",label:"Indoor air status",icon:"\u25CC",w:48,h:48,group:"interface"},{type:"uiStatusElectrical",label:"Electrical status",icon:"\u03DF",w:48,h:48,group:"interface"},{type:"plant",label:"Flowers",icon:"\u273F",w:44,h:44,group:"decor"},{type:"floorPlant",label:"Floor plant",icon:"\u2740",w:72,h:72,group:"decor"},{type:"artwork",label:"Wall art",icon:"\u25A7",w:94,h:56,group:"decor"},{type:"mirror",label:"Mirror",icon:"\u25C7",w:72,h:52,group:"decor"},{type:"window",label:"Window",icon:"\u25A3",w:100,h:28,group:"build"},{type:"stairs",label:"Exterior stairs",icon:"\u25A4",w:88,h:430,group:"build"}],e=[["living","Living & dining"],["bedroom","Bedroom & storage"],["utility","Kitchen & bath"],["lighting","Lights & lamps"],["systems","Climate, doors & fans"],["decor","Decor"],["build","Build"],["security","Cameras & controls"],["interface","Dashboard interface"]],n="roomcraft.studio-models.v1",s=new Set(["window","stairs","cameraThumbnail","garageDoor","presenceSwitch"]),r=H=>typeof H=="string"&&H.startsWith("ui"),o=H=>String(H??"").toLowerCase(),a=H=>o(H).split(".")[0],c=H=>typeof H=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(H),l=H=>H.type==="window"?"wall":H.mount||"floor";function u(){return{templates:[...t,...i.RoomcraftInventory?.templates||[]],paletteGroups:[...i.RoomcraftInventory?.groups||[],...e]}}function d(H,X,Y){return!(!H||!X||!Y||H.type===Y.type||s.has(H.type)||r(H.type)||s.has(Y.type)||r(Y.type)||l(X)!==l(Y)||H.entityId&&!h(H.entityId,Y))}function h(H,X){return!c(H)||typeof X?.type!="string"||r(X.type)||X.type==="stairs"||X.type==="window"?!1:X.type==="cameraThumbnail"?a(H)==="camera":X.type==="garageDoor"?a(H)==="cover":a(H)!=="camera"}function f(H,X){let Y=a(H.entity_id),$=o(H.name+" "+H.entity_id),rt={light:["lighting"],fan:["fans"],vacuum:["cleaning"],climate:["systems"]},yt=vt=>{if(vt.type==="controlZone")return!0;if(Y==="camera")return vt.type==="cameraThumbnail";if(Y==="cover")return/garage/.test($)&&vt.type==="garageDoor";if(Y==="climate")return vt.type==="thermostat";if(Y==="binary_sensor"&&/presence|occupancy/.test($))return vt.type==="presenceSwitch";if(rt[Y]?.includes(vt.group)||/humidifier/.test($)&&vt.type==="humidifier"||/purifier/.test($)&&vt.type==="airPurifier")return!0;if(Y==="switch"){if(/fan/.test($))return vt.group==="fans"||vt.type==="windowFan";if(/light|lamp/.test($))return vt.group==="lighting"}return!1},_t=X.filter(vt=>h(H.entity_id,vt));return{recommended:_t.filter(yt),available:_t}}function g(H){return H&&!["window","stairs","controlZone","cameraThumbnail","mirror","artwork"].includes(H.type)&&!r(H.type)}function x(H,X,Y,$){if(!["w","h"].includes(X)||!Number.isFinite(Y))return null;let rt=H.type==="cameraThumbnail"?40:12,yt=H.type==="cameraThumbnail"||c(H.entityId)?{w:1536,h:1024}:{w:1/0,h:1/0};if(!$)return{[X]:Math.min(yt[X],Math.max(rt,Y))};let _t=Math.min(yt.w/H.w,yt.h/H.h),vt=Math.min(_t,Math.max(rt/H.w,rt/H.h)),Pt=Math.min(_t,Math.max(vt,Y/H[X]));return{w:Math.round(H.w*Pt*10)/10,h:Math.round(H.h*Pt*10)/10}}let p=new Set(["table","desk","dresser","nightstand","storageCabinet","coffeeTable","sideTable"]),m=new Set(["lamp","tableLamp","humidifier","plant"]),y=new Set(["sofa","bed","armchair","bookcase","bedroomBench","counter","kitchenWorktop","bathFixtures","doubleVanity","tub","toilet","floorPlant"]),w=/^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/,v=/^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/,b=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];function E(H){let X=H?.type??"";return p.has(X)||w.test(X)?"surface":m.has(X)||H?.lightForm==="bud_lamp"||X.startsWith("lighting-bud-table-lamp-")?"tabletop":"floor"}function C(H){let X=H.type==="humidifier"?.37:H.type==="plant"?.23:.2;return Math.min(H.w,H.h)*X}function _(H,X=!1){let{type:Y,w:$,h:rt}=H;if(Y==="desk"||Y.startsWith("bedroom-corner-desk-"))return[[0,-.33*rt,$,.34*rt],[-.41*$,.17*rt,.18*$,.66*rt],[.41*$,.17*rt,.18*$,.66*rt]];if(!X&&(Y==="sofa"||Y.startsWith("living-cloud-sofa-")))return rt>$?[[-.25*$,0,.5*$,rt],[.22*$,(Y==="sofa"?.3:-.3)*rt,.52*$,.38*rt]]:[[0,-.215*rt,$,.57*rt],[-.32*$,.25*rt,.34*$,.46*rt]];if(X){if(Y.startsWith("living-round-dining-"))return[[0,0,.58*$,.58*rt]];if(Y==="table"||/-dining-set-/.test(Y))return[[0,0,.79*$,.56*rt]];if(Y.includes("-desk-"))return[[0,0,$,.85*rt]]}if(!X&&E(H)==="tabletop"){let yt=2*C(H);return[[0,0,yt,yt]]}return[[0,0,$*.95,rt*.95]]}function P(H,X){if(![H?.x,H?.y,H?.w,H?.h].every(Number.isFinite)||H.w<=0||H.h<=0)return[];let Y=(Number.isFinite(H.rotation)?H.rotation:0)*Math.PI/180,$=[Math.cos(Y),Math.sin(Y)],rt=[-$[1],$[0]];return _(H,X).map(([yt,_t,vt,Pt])=>({x:H.x+yt*$[0]+_t*rt[0],y:H.y+yt*$[1]+_t*rt[1],u:$,v:rt,width:vt/2,height:Pt/2}))}let F=(H,X,Y)=>H*Y[0]+X*Y[1];function L(H,X){let Y=X.type.startsWith("living-round-dining-"),$=P(X,!0),rt=C(H)*.9;return b.every(([yt,_t])=>$.some(vt=>{let Pt=H.x+yt*rt-vt.x,ct=H.y+_t*rt-vt.y,ht=Math.abs(F(Pt,ct,vt.u))/vt.width,Tt=Math.abs(F(Pt,ct,vt.v))/vt.height;return Y?Math.hypot(ht,Tt)<=1:ht<=1&&Tt<=1}))}function U(H){return E(H)!=="floor"||y.has(H.type)||v.test(H.type)?P(H,!1):[]}function V(H,X){let Y=($,rt)=>$.width*Math.abs(F(...$.u,rt))+$.height*Math.abs(F(...$.v,rt));return Math.min(...[H.u,H.v,X.u,X.v].map($=>Y(H,$)+Y(X,$)-Math.abs(F(H.x-X.x,H.y-X.y,$))))}function O(H,X,Y,$){let rt=0;for(let vt of Y)for(let Pt of $)rt=Math.max(rt,V(vt,Pt));if(rt<=2)return rt;let yt=E(H),_t=E(X);return yt==="tabletop"&&_t==="surface"&&L(H,X)||yt==="surface"&&_t==="tabletop"&&L(X,H)?0:rt}function K(H,X,Y){let $=U(H);if(!$.length)return;let rt=Y?U(Y):[],yt,_t=2;for(let vt of X){if(vt.id===H.id)continue;let Pt=U(vt),ct=O(H,vt,$,Pt);ct<=_t||rt.length&&ct<=O(Y,vt,rt,Pt)+.02||(yt=vt,_t=ct)}return yt}function z(H){let X=H.filter(rt=>E(rt)==="surface"),Y=new Set,$=new Map;for(let rt of H){if(E(rt)!=="tabletop")continue;let yt=X.find(_t=>L(rt,_t));yt&&(Y.add(rt.id),$.has(yt.id)||$.set(yt.id,[]),$.get(yt.id).push(rt))}return Y.size?H.flatMap(rt=>Y.has(rt.id)?[]:[rt,...$.get(rt.id)??[]]):H}function tt(H,X,Y){let $=H.ownerDocument,rt=(Dt,Bt,zt={})=>{let jt=$.createElement(Dt);Bt&&(jt.textContent=Bt);for(let[q,oe]of Object.entries(zt))jt.setAttribute(q,oe);return jt},yt=rt("dialog","",{class:"model-library","aria-label":"Objects and models"}),_t=rt("header"),vt=rt("h2","Objects & models"),Pt=rt("button","Close",{type:"button"});_t.append(vt,Pt);let ct=rt("div","",{class:"model-library-filters"}),ht=rt("select","",{"aria-label":"Object library section"});for(let[Dt,Bt]of[["placed","On the plan"],["catalog","Add objects"],["devices","Home Assistant devices"]])ht.append(rt("option",Bt,{value:Dt}));let Tt=rt("input","",{type:"search",placeholder:"Search\u2026","aria-label":"Search objects, devices, or models"});ct.append(ht,Tt);let Ot=rt("div","",{class:"model-library-context"}),Lt=rt("p","",{role:"status",class:"model-library-status"}),It=rt("div","",{class:"model-library-list"});yt.append(_t,ct,Ot,Lt,It);let Jt=rt("style");Jt.textContent=`
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
    `,H.append(Jt,yt);let pt,bt=!1,Mt=(Dt,Bt)=>{let zt=rt("button",Dt,{type:"button"});return zt.addEventListener("click",Bt),zt};function St(Dt){pt=Dt,bt=!1,ht.value="catalog",Tt.value="",Et(),Tt.focus()}function Et(){let{templates:Dt,paletteGroups:Bt}=u(),zt=new Map(Dt.map(et=>[et.type,et])),jt=new Map(Bt),{items:q,entities:oe}=X(),$t=o(Tt.value).trim(),B=(...et)=>$t.split(/\s+/).every(nt=>o(et.join(" ")).includes(nt)),T=[];if(Ot.replaceChildren(),pt&&(Ot.append(rt("strong",pt.item?.name||pt.entity?.name||pt.entity?.entity_id)),pt.entity&&Ot.append(Mt(bt?"Suggested models":"All compatible models",()=>{bt=!bt,Et()})),Ot.append(Mt("Cancel mapping",()=>{ht.value=pt.entity?"devices":"placed",pt=void 0,Tt.value="",Et()}))),ht.value==="placed")for(let et of q){let nt=zt.get(et.type);if(!B(et.name,nt?.label,et.type,et.entityId))continue;let ft=[et.w,et.h,et.modelHeight].filter(Number.isFinite).join(" \xD7 "),k=[nt?.label||et.type,ft&&ft+" plan px",et.entityId].filter(Boolean).join(" \xB7 "),M=[Mt("Edit",()=>Y({kind:"edit",itemId:et.id}))];Dt.some(S=>d(et,nt,S))&&M.push(Mt("Change model",()=>St({item:et}))),T.push([et.name||nt?.label||et.type,k,M])}else if(ht.value==="devices"){let et=new Map;for(let nt of q)nt.entityId&&!et.has(nt.entityId)&&et.set(nt.entityId,nt);for(let nt of oe){if(!c(nt.entity_id)||!B(nt.name,nt.entity_id,nt.area))continue;let ft=et.get(nt.entity_id),k=[nt.entity_id,nt.area,ft?"On plan \xB7 "+ft.name:"Available to map"].filter(Boolean).join(" \xB7 ");T.push([nt.name||nt.entity_id,k,[ft?Mt("Edit mapped object",()=>Y({kind:"edit",itemId:ft.id})):Mt("Choose model",()=>St({entity:nt}))]])}}else{let et=Dt;if(pt?.item&&(et=Dt.filter(nt=>d(pt.item,zt.get(pt.item.type),nt))),pt?.entity){let nt=f(pt.entity,Dt);et=bt?nt.available:nt.recommended}for(let nt of et){let ft=jt.get(nt.group)||nt.group;if(!B(nt.label,nt.type,nt.tags,ft))continue;let k=pt?.item?{kind:"replace",itemId:pt.item.id,modelId:nt.type}:{kind:"place",modelId:nt.type,...pt?.entity?{entityId:pt.entity.entity_id}:{}};T.push([nt.label,ft+" \xB7 "+nt.w+" \xD7 "+nt.h+" plan px",[Mt(pt?"Use model":"Place",()=>Y(k))]])}}It.replaceChildren();for(let[et,nt,ft]of T.slice(0,48)){let k=rt("div","",{class:"model-library-row"}),M=rt("div");M.append(rt("strong",et),rt("small",nt));let S=rt("div","",{class:"model-library-actions"});S.append(...ft),k.append(M,S),It.append(k)}Lt.textContent=T.length>48?"Showing 48 of "+T.length+". Search to narrow the list.":T.length?T.length+(T.length===1?" result":" results"):ht.value==="devices"&&!oe.length?"Connect to Home Assistant to list devices.":"No matches."}return ht.addEventListener("change",()=>{pt=void 0,Tt.value="",Et()}),Tt.addEventListener("input",Et),Pt.addEventListener("click",()=>yt.close()),{open(Dt="placed"){pt=void 0,bt=!1,ht.value=Dt,Tt.value="",Et(),yt.open||yt.showModal()},get isOpen(){return yt.open},close(){yt.open&&yt.close()}}}i.RoomcraftModels=Object.freeze({catalog:u,canMap:h,canReplace:d,suggestions:f,supportsHeight:g,resizeFootprint:x,placementRole:E,blockingPlacement:K,orderMountedObjects:z,mount:tt,handoffKey:n})})(typeof window>"u"?globalThis:window);function Pp(i,t){let e=i.modelHeight;if(!(typeof window>"u"?globalThis:window).RoomcraftModels.supportsHeight(i)||!Number.isFinite(e)||e<6||e>300)return 0;let{min:s,max:r}=new Be().setFromObject(t),o=r.y-s.y;if(!Number.isFinite(o)||o<.01)return 0;let a=e/o;return t.scale.y*=a,s.y*(1-a)}var R1=24,C1=.32,I1=125,P1=24,ml=[{role:"papa",scale:[1.26,1.25,1.22],sweater:"#537eaa",trim:"#ffcc81",skin:"#db9f76",hair:"#4b3533"},{role:"mama",scale:[1.09,1.18,1.12],sweater:"#c86587",trim:"#ffdeaf",skin:"#e8af83",hair:"#5a3841"},{role:"baby",scale:[.92,.83,.92],sweater:"#8b78cf",trim:"#ffe492",skin:"#f1b98e",hair:"#674138"}];function Zo(i,t=.12){return new Fe({color:i,roughness:.78,emissive:i,emissiveIntensity:t})}function L1(i,t,e){let n=!e&&t%4.8<.13;i.head.rotation.x=-.62+(e?0:Math.sin(t*1.5)*.047),i.head.rotation.z=e?0:Math.sin(t*3.4)*.047;for(let s of i.eyes)s.scale.y=n?.15:.87}function _h(i,t=()=>0,{supportsRoute:e,floorClearance:n}={}){let s=new ae;s.name="tracked-people",i.add(s);let r,o=new Map,a=ml.map(()=>[]),c=!1,l=!1,u=0,d=!1;function h(){return{sphere:new Le(1,12,8),disc:new Cn(1,24).rotateX(-Math.PI/2),groundRing:new _o(13.8,17.5,32).rotateX(-Math.PI/2),glasses:new mn(1,.14,6,16),palette:ml.map(({sweater:y,trim:w,skin:v,hair:b})=>Object.fromEntries(Object.entries({sweater:y,trim:w,skin:v,hair:b}).map(([E,C])=>[E,Zo(C)]))),ink:Zo("#423c50",.09),cheek:Zo("#d78383"),shoes:Zo("#514656"),white:Zo("#fff1dc"),shadow:new ze({color:"#433849",transparent:!0,opacity:.22,depthWrite:!1}),groundMark:new ze({color:"#fff1cd",depthWrite:!1,toneMapped:!1})}}function f(y){r??=h();let{role:w,scale:v}=ml[y],{sweater:b,trim:E,skin:C,hair:_}=r.palette[y],P=w==="baby",F=new ae;F.name=`radar-avatar-${w}`;let L=new ae,U=new ae,V=[],O=[],K=[];s.add(F),F.add(L),L.scale.set(...v);let z=(Y,$,rt,yt,_t,vt,Pt,ct)=>{let ht=new he(r.sphere,$);return ht.position.set(rt,yt,_t),ht.scale.set(vt,Pt,ct),Y.add(ht),ht},tt=new he(r.disc,r.shadow);tt.position.y=.13,tt.scale.set(19,1,19),F.add(tt);let H=new he(r.groundRing,r.groundMark);H.position.y=.26,F.add(H),z(L,b,0,15,0,P?8.2:7.1,8.3,5.4),P?(z(L,E,0,17.5,4.8,4.9,4.1,1.15),z(L,r.white,0,17.4,5.9,1.5,1.5,.35)):(z(L,E,0,20.7,2.4,5.8,2.2,4),z(L,E,w==="papa"?-2.4:0,15.7,5.2,1.5,3.7,.65));for(let Y of[-1,1]){let $=new ae;$.position.set(Y*3.4,10.3,.1),L.add($),z($,P?b:r.ink,0,-3.2,0,2.65,4.6,2.6),z($,P?E:r.shoes,0,-8.15,1.25,3.1,2.1,4),z($,r.white,0,-8.8,3.25,2.75,1.1,2),K.push($);let rt=new ae;rt.position.set(Y*6.25,19.1,0),L.add(rt),z(rt,b,Y*.9,-3.7,.15,2.75,5.3,2.7),z(rt,C,Y*1.3,-7.8,.5,2.3,2.6,2.2),O.push(rt)}U.position.set(0,P?26:27.2,0),P&&U.scale.set(1.16,1.17,1.12),L.add(U),z(U,_,0,1.3,-1.65,9.2,9.65,8.6),z(U,C,0,0,1.9,8.65,8.45,7.5);let X=z(U,_,-2.1,7.3,4.25,6.4,3.4,4.35);if(X.rotation.z=w==="papa"?-.27:.22,w==="mama"&&(z(U,_,-6.7,-1.9,-3.8,3.6,8.1,5.2),z(U,_,6.2,-1.7,-3.9,3.3,7.6,5.4),z(U,_,2.8,10.4,-2.5,5.1,5.1,5.1),z(U,E,4.4,8.7,2.2,2.8,1.1,1.1)),P){z(U,_,-7.3,6.7,-2,3.35,3.7,3.5),z(U,_,7.3,6.7,-2,3.35,3.7,3.5);let Y=z(U,E,.9,10,4.2,2.5,1.45,1.25),$=z(U,E,4.1,10,4.2,2.5,1.45,1.25);Y.rotation.z=-.4,$.rotation.z=.4,z(U,r.white,2.5,9.8,5.1,1.15,1.2,1)}for(let Y of[-1,1])if(z(U,C,Y*8.2,-.15,1.1,1.85,2.4,1.75),V.push(z(U,r.ink,Y*3,1.2,8.95,.85,.87,.52)),z(U,r.cheek,Y*5.05,-1.25,7.95,1.18,.62,.52),w==="papa"){let $=new he(r.glasses,r.ink);$.position.set(Y*3.1,1.25,9.15),$.scale.set(2.5,2.15,1.55),U.add($)}return w==="papa"&&z(U,r.ink,0,1.6,9.35,1.1,.28,.35),z(U,r.ink,0,-1.95,9.15,1.38,.45,.38),{root:F,body:L,head:U,arms:O,legs:K,eyes:V,styleIndex:y,baby:P}}function g(y,w){return y.duration>0?se.clamp((w-y.start)/y.duration,0,1):1}function x(y,w=c){u=Number.isFinite(y)?y:u,l=w||c,d=!1;for(let v of o.values()){let{character:b}=v;l&&(v.duration=0);let E=g(v,u),C=se.lerp(v.fromX,v.x,E),_=se.lerp(v.fromZ,v.z,E),P=t(C,_);!Number.isFinite(P)&&E<1&&(v.duration=0,E=1,C=v.x,_=v.z,P=t(C,_));let F=n?Math.min(1,n(C,_)/P1):1;if(b.root.visible=Number.isFinite(P)&&F>0,!b.root.visible)continue;d=!0,b.root.position.set(C,P,_),b.root.rotation.y=v.heading,b.root.scale.setScalar(F);let L=v.walking&&E<1&&!l,U=Math.floor(Math.max(0,u-v.born)*16)/16+.7+b.styleIndex*.62,V=Math.floor(E*12)/12*Math.PI*4,O=L?Math.sin(V)*.56:0,K=L?Math.abs(Math.sin(V))*1.9:(1+Math.sin(U*4.7))*.47;b.body.position.y=l?0:K*(b.baby?1.5:1),b.body.rotation.z=l?0:L?O*.15:Math.sin(U*2.8)*.045;for(let z=0;z<2;z++){let tt=z===0?-1:1;b.arms[z].rotation.x=L?-O*tt:l?0:Math.sin(U*3.1+z)*.09,b.legs[z].rotation.x=O*tt}L1(b,U,l)}}function p(y,w,{reduceMotion:v=!1}={}){c=v;let b=Number.isFinite(w)?w:u,E=new Map;for(let _ of Array.isArray(y)?y:[])if(!(typeof _?.id!="string"||!_.id||_.id.length>256||!Number.isFinite(_.x)||!Number.isFinite(_.y)||E.has(_.id)||!Number.isFinite(t(_.x,_.y)))&&(E.set(_.id,_),E.size===R1))break;for(let[_,P]of o)E.has(_)||(P.character.root.visible=!1,a[P.character.styleIndex].push(P.character),o.delete(_));let C=ml.map(()=>0);for(let{character:_}of o.values())C[_.styleIndex]++;for(let _ of[...E.keys()].filter(P=>!o.has(P)).sort()){let P=C.indexOf(Math.min(...C));C[P]++;let F=a[P].pop()??f(P),{x:L,y:U}=E.get(_);o.set(_,{character:F,fromX:L,fromZ:U,x:L,z:U,heading:0,born:b,start:b,duration:0})}for(let[_,{x:P,y:F}]of E){let L=o.get(_);if(L.x!==P||L.z!==F){let U=v?1:g(L,b),V=se.lerp(L.fromX,L.x,U),O=se.lerp(L.fromZ,L.z,U),K=Math.hypot(P-V,F-O),z=K>1?Math.atan2(P-V,F-O):L.heading,H=!v&&K>0&&K<=I1&&e?.(V,O,P,F)?C1:0;Object.assign(L,{fromX:V,fromZ:O,x:P,z:F,heading:z,start:b,duration:H,walking:K>2})}}x(b,v)}function m(){if(s.removeFromParent(),!!r){for(let y of[r.ink,r.cheek,r.shoes,r.white,r.shadow,r.groundMark])y.dispose();for(let y of r.palette)for(let w of Object.values(y))w.dispose();r.sphere.dispose(),r.disc.dispose(),r.groundRing.dispose(),r.glasses.dispose(),s.clear();for(let y of a)y.length=0;o.clear(),r=void 0}}return{setTracks:p,render:x,dispose:m,setVisible(y){s.visible=y},get hasMotion(){return!l&&o.size>0},get hasVisibleTracks(){return d}}}function Lp(i,t,e){let n=!1;for(let s=1;s<i.length;s++){let[r,o]=i[s-1],[a,c]=i[s];o>e!=c>e&&t<(a-r)*(e-o)/(c-o)+r&&(n=!n)}return n}var gl=(i,t,e,n,s,r)=>(e-i)*(r-t)-(n-t)*(s-i),xl=(i,t,e)=>e>=Math.min(i,t)-1e-7&&e<=Math.max(i,t)+1e-7;function N1([i,t,e,n],s,r,o,a){let c=gl(i,t,e,n,s,r),l=gl(i,t,e,n,o,a),u=gl(s,r,o,a,i,t),d=gl(s,r,o,a,e,n);return Math.abs(u)<1e-7&&xl(s,o,i)&&xl(r,a,t)||Math.abs(d)<1e-7&&xl(s,o,e)&&xl(r,a,n)?!0:c>0!=l>0&&u>0!=d>0}function vh(i){let t=i.flatMap(r=>r.flatMap(o=>o.slice(1).map(([a,c],l)=>[...o[l],a,c])));function e(r,o){return i.some(([a,...c])=>Lp(a,r,o)&&!c.some(l=>Lp(l,r,o)))}function n(r,o){if(!e(r,o))return 0;let a=1/0;for(let[c,l,u,d]of t){let h=u-c,f=d-l,g=h*h+f*f;if(!g)continue;let x=Math.max(0,Math.min(1,((r-c)*h+(o-l)*f)/g)),p=r-c-x*h,m=o-l-x*f;a=Math.min(a,p*p+m*m)}return Math.sqrt(a)}function s(r,o,a,c){return n(r,o)>1e-7&&n(a,c)>1e-7&&!t.some(l=>N1(l,r,o,a,c))}return{contains:e,clearance:n,supportsRoute:s}}var Np=new Be,yl=new G,Nr=class extends wo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Zt(t,3)),this.setAttribute("uv",new Zt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new cs(e,6,1);return this.setAttribute("instanceStart",new qn(n,3,0)),this.setAttribute("instanceEnd",new qn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new cs(e,6,1);return this.setAttribute("instanceColorStart",new qn(n,3,0)),this.setAttribute("instanceColorEnd",new qn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new vo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Np.setFromBufferAttribute(e),this.boundingBox.union(Np))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)yl.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(yl)),yl.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ut.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Rt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};En.line={uniforms:Bo.merge([Ut.common,Ut.fog,Ut.line]),vertexShader:`
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
		`};var ms=class extends Ze{constructor(t){super({type:"LineMaterial",uniforms:Bo.clone(En.line.uniforms),vertexShader:En.line.vertexShader,fragmentShader:En.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var bh=new Ee,Dp=new G,Up=new G,cn=new Ee,ln=new Ee,wi=new Ee,Mh=new G,Sh=new _e,un=new To,Fp=new G,_l=new Be,vl=new Rn,Ti=new Ee,Ai,Fs;function Op(i,t,e){return Ti.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ti.multiplyScalar(1/Ti.w),Ti.x=Fs/e.width,Ti.y=Fs/e.height,Ti.applyMatrix4(i.projectionMatrixInverse),Ti.multiplyScalar(1/Ti.w),Math.abs(Math.max(Ti.x,Ti.y))}function D1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){un.start.fromBufferAttribute(s,a),un.end.fromBufferAttribute(r,a),un.applyMatrix4(e);let l=new G,u=new G;Ai.distanceSqToSegment(un.start,un.end,u,l),u.distanceTo(l)<Fs*.5&&t.push({point:u,pointOnLine:l,distance:Ai.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function U1(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,u=Math.min(a.instanceCount,c.count),d=-t.near;Ai.at(1,wi),wi.w=1,wi.applyMatrix4(t.matrixWorldInverse),wi.applyMatrix4(n),wi.multiplyScalar(1/wi.w),wi.x*=r.x/2,wi.y*=r.y/2,wi.z=0,Mh.copy(wi),Sh.multiplyMatrices(t.matrixWorldInverse,o);for(let h=0,f=u;h<f;h++){if(cn.fromBufferAttribute(c,h),ln.fromBufferAttribute(l,h),cn.w=1,ln.w=1,cn.applyMatrix4(Sh),ln.applyMatrix4(Sh),cn.z>d&&ln.z>d)continue;if(cn.z>d){let w=cn.z-ln.z,v=(cn.z-d)/w;cn.lerp(ln,v)}else if(ln.z>d){let w=ln.z-cn.z,v=(ln.z-d)/w;ln.lerp(cn,v)}cn.applyMatrix4(n),ln.applyMatrix4(n),cn.multiplyScalar(1/cn.w),ln.multiplyScalar(1/ln.w),cn.x*=r.x/2,cn.y*=r.y/2,ln.x*=r.x/2,ln.y*=r.y/2,un.start.copy(cn),un.start.z=0,un.end.copy(ln),un.end.z=0;let x=un.closestPointToPointParameter(Mh,!0);un.at(x,Fp);let p=se.lerp(cn.z,ln.z,x),m=p>=-1&&p<=1,y=Mh.distanceTo(Fp)<Fs*.5;if(m&&y){un.start.fromBufferAttribute(c,h),un.end.fromBufferAttribute(l,h),un.start.applyMatrix4(o),un.end.applyMatrix4(o);let w=new G,v=new G;Ai.distanceSqToSegment(un.start,un.end,v,w),e.push({point:v,pointOnLine:w,distance:Ai.origin.distanceTo(v),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var bl=class extends he{constructor(t=new Nr,e=new ms({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Dp.fromBufferAttribute(e,o),Up.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Dp.distanceTo(Up);let r=new cs(s,2,1);return t.setAttribute("instanceDistanceStart",new qn(r,1,0)),t.setAttribute("instanceDistanceEnd",new qn(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ai=t.ray;let o=this.matrixWorld,a=this.geometry,c=this.material;Fs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),vl.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Fs*.5;else{let d=Math.max(s.near,vl.distanceToPoint(Ai.origin));l=Op(s,d,c.resolution)}if(vl.radius+=l,Ai.intersectsSphere(vl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),_l.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=Fs*.5;else{let d=Math.max(s.near,_l.distanceToPoint(Ai.origin));u=Op(s,d,c.resolution)}_l.expandByScalar(u),Ai.intersectsBox(_l)!==!1&&(n?D1(this,e):U1(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(bh),this.material.uniforms.resolution.value.set(bh.z,bh.w))}};var Dr=class extends Nr{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Ml=class extends bl{constructor(t=new Dr,e=new ms({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var Bp="#ffce84",F1="#a8f5ff",Eh="#10242e";function Sl(i,t,e){return new ms({color:i,linewidth:t,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...e})}function El(i,t,e,n){let s=new Dr;s.setPositions(t.flatMap(({x:r,y:o})=>[r,.5,o]));for(let[r,o]of e.entries()){let a=new Ml(s,o);r===0&&o.dashed&&a.computeLineDistances(),a.renderOrder=n+r,i.add(a)}}function kp(i,t,e,n){let s=new ce().setFromPoints(t.map(({x:o,y:a})=>new G(o,.5,a)));s.setIndex(Yn.triangulateShape(t.map(({x:o,y:a})=>new Rt(o,a)),[]).flat());let r=new he(s,e);r.renderOrder=n,i.add(r)}function zp(){let i=new ts,t={side:an,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1},e=new ze({...t,color:Bp,opacity:.13}),n=new ze({...t,color:Eh,opacity:.95}),s=Sl(Eh,4.6,{opacity:.8}),r=Sl(Bp,2.25),o={dashed:!0,dashSize:15,gapSize:8},a=Sl(Eh,3.5,{...o,opacity:.65}),c=Sl(F1,1.7,{...o,opacity:.9});function l({origin:h,forward:f}){let g=(p,m=0)=>({x:h.x+f.x*p-f.y*m,y:h.y+f.y*p+f.x*m}),x=Array.from({length:28},(p,m)=>{let y=m/28*Math.PI*2;return g(10*Math.cos(y),10*Math.sin(y))});El(i,[g(10),g(56)],[s,r],5),El(i,[g(45,-7),g(56),g(45,7)],[s,r],5),kp(i,x,n,7),El(i,[...x,x[0]],[s,r],8)}function u(h){for(let g of new Set(i.children.map(x=>x.geometry)))g.dispose();i.clear();let f=new Map;for(let g of h){let{points:x,kind:p,id:m,origin:y,forward:w}=g;if(x.length<3)continue;let v=p==="nominal";v&&kp(i,x,e,0),El(i,[...x,x[0]],v?[s,r]:[a,c],v?3:1),y&&w&&f.set(m,g)}for(let g of f.values())l(g)}function d(){u([]);for(let h of[e,n,s,r,a,c])h.dispose()}return{scene:i,setZones:u,dispose:d}}var O1=new Set(["cloudy","fog","hail","lightning","lightning-rainy","pouring","rainy","snowy","snowy-rainy","windy-variant"]),B1=new Set(["hail","lightning-rainy","pouring","rainy","snowy-rainy"]),Hp={waxing_crescent:3*Math.PI/4,first_quarter:Math.PI/2,waxing_gibbous:Math.PI/4,full_moon:0,waning_gibbous:-Math.PI/4,last_quarter:-Math.PI/2,waning_crescent:-3*Math.PI/4},wl=Object.fromEntries(Object.entries({clear:["#b7c8a9","#79c6b9","#32768c","#e5f4ea","#dcf1ec","#fff1bd"],overcast:["#a5b9a9","#76aca8","#456e7f","#d0e4df","#b5ced0","#ffe4b0"],night:["#415b66","#2b6678","#16354d","#91b7bf","#68899f","#e4f0f5"]}).map(([i,t])=>[i,t.map(e=>new Wt(e))])),k1=new Wt("#ffd59e"),Vp=["shoreTint","shallowTint","deepTint","foamTint","cloudTint","bodyTint"],{clamp:Jo,smoothstep:Gp}=se;function z1({shoreline:i,farZ:t,focusX:e}){let n=[],s=[],r=[];for(let[a,{x:c,z:l}]of i.entries()){let u=a*2;n.push(c-e,0,l-t,c-e,0,0),s.push(c-e,0,c-e,l-t),u>0&&r.push(u-2,u,u-1,u,u+1,u-1)}let o=new ce;return o.setAttribute("position",new Zt(n,3)),o.setAttribute("uv",new Zt(s,2)),o.setIndex(r),o}var H1=`
  varying vec2 coastPoint;
  varying vec3 surfacePoint;

  void main() {
    coastPoint = uv;
    vec4 worldPoint = modelMatrix * vec4(position, 1.0);
    surfacePoint = worldPoint.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPoint;
  }
`,V1=`
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
`;function Wp({y:i,farZ:t,shoreline:e,focusX:n}){let s={waterTime:{value:0},rain:{value:0},fog:{value:0},reflectedWind:{value:0},roughness:{value:1},cloudCover:{value:.24},bodyVisibility:{value:0},moon:{value:0},moonLight:{value:new Rt(0,1)},bodyPosition:{value:new Rt}};for(let[c,l]of Vp.entries())s[l]={value:wl.clear[c].clone()};let r=new Ze({uniforms:s,vertexShader:H1,fragmentShader:V1,toneMapped:!1}),o=new he(z1({shoreline:e,farZ:t,focusX:n}),r);o.name="Ocean and shore wash",o.position.set(n,i,t);function a(c,l={}){let{night:u,daylightKnown:d,condition:h,moonPhase:f,sunElevation:g,sunRising:x,sunAzimuth:p,moonAzimuth:m,moonElevation:y,skyProgress:w,windSpeed:v,windBearing:b,reduceMotion:E}=l,C=O1.has(h),_=Number.isFinite(g)?g:u?-19:42,P=Gp(_,-8,17),F=wl[C?"overcast":"clear"];for(let[_t,vt]of Vp.entries())s[vt].value.lerpColors(wl.night[_t],F[_t],P);let L=Object.hasOwn(Hp,f)?Hp[f]:void 0,U=d?!u:h==="sunny",V=u&&L!==void 0,O=Jo(_/75,0,1),K=P*(1-Gp(_,8,34));U&&s.bodyTint.value.lerp(k1,K*.7),V&&s.bodyTint.value.copy(wl.night[5]);let z=B1.has(h),tt=Number.isFinite(c)&&!E?c:0;s.waterTime.value=tt,s.rain.value=z?1:0,s.fog.value=h==="fog"?1:0;let H=Number.isFinite(v)?Jo(v/18,0,1):0,X=Number.isFinite(b)?-Math.sin(se.degToRad(b)):1;s.reflectedWind.value=Math.sin(tt*.09)*X*H*24;let Y=z||h==="windy"||h==="windy-variant";s.roughness.value=1+Math.max(Y?.65:0,H*.65),s.cloudCover.value=C?.94:h==="partlycloudy"?.64:u?.32:.24,s.bodyVisibility.value=C?0:V?.93:U?.97:0,s.moon.value=V?1:0;let $=Number.isFinite(w)?Jo(w,0,1):void 0,rt=$===void 0?void 0:se.lerp(-145,145,$),yt=_t=>Jo((_t-180)*1.08,-180,180);if(V){s.moonLight.value.set(Math.sin(L),Math.cos(L));let _t=rt??(Number.isFinite(m)?yt(m):46+Math.sin(tt*.014)*27),vt=Number.isFinite(y)?32+Jo(y/75,0,1)*24:42;s.bodyPosition.value.set(_t,vt)}else{let _t=x===!0?-107:x===!1?118:-31,vt=rt??(Number.isFinite(p)?yt(p):_t*(1-O));s.bodyPosition.value.set(vt,38+O*20)}}return{mesh:o,update:a}}var Tl=26,G1=92,Ur=4,W1=18,X1=188;function Yp(i){let{minZ:t,maxZ:e}=i.houseBounds,n=t-(e-t)*.11-46,s=i.editableStructure?1/0:t-146,r=Math.min(i.bounds.minZ,n,s)-W1,o=r-2*Tl-G1;return{nearZ:r,farZ:o,sceneryMinZ:o-X1}}function qp(i,{nearZ:t,farZ:e},n,s,r){let o=e+Tl,a=t-Tl,c=(o+a)/2,l=r-s/2,u=r+s/2,d=(h,f,g,x)=>i.box(s,g,f-h,x,r,n+g/2,(h+f)/2);d(o,a,1.2,"#73767c"),d(o,o+3.4,1.4,"#656b71"),d(a-3.4,a,1.4,"#656b71");for(let[h,f,g,x]of[[e,o,o-Ur,e],[a,t,a,a+Ur]]){d(h,f,5,"#c0b6a7"),d(g,g+Ur,6.2,"#d0c3b0");let p=Tl-Ur;for(let m=l+36;m<u;m+=72)i.box(1.15,.18,p,"#a69c91",m,n+5.04,x+p/2)}for(let h=l+36;h+17<u;h+=72)i.box(34,.2,2.8,"#e9ce91",h,n+1.24,c);return{centerX:r,width:s,surfaceY:n+1.24,lanes:[(c+a)/2,(o+c)/2],sidewalks:[{minZ:a+Ur,maxZ:t,surfaceY:n+5},{minZ:e,maxZ:o-Ur,surfaceY:n+5}]}}function wh(i,t,e,n){let s=[],r=[];for(let a=0;a<t.length;a++)if(s.push(...t[a],...e[a]),a>0){let c=(a-1)*2,l=a*2;r.push(c,l,c+1,l,l+1,c+1)}let o=new ce;o.setAttribute("position",new Zt(s,3)),o.setIndex(r),o.computeVertexNormals(),i.add(o,n,0,0,0)}function Y1(i,t,e,n,s,r){let o="#9e9c70",a="#bab484";for(let c=0;c<4;c++){let l=new lo(s*(.13+.018*c),s*(1.25-.14*c),3);l.rotateZ(.22+c*.1),l.rotateY(r+c*1.62);let u=Math.cos(r+c*1.62)*s*.21,d=Math.sin(r+c*1.62)*s*.21;i.add(l,c%2?a:o,t+u,n+s*.46,e+d)}}function q1(i,t,e,n,s){for(let[r,o,a,c]of[[-.51,-18,54,5],[-.36,-25,47,6],[-.1,-18,44,4.8],[.12,-24,49,6],[.3,-16,38,5.3],[.49,-24,53,5.6],[.65,-17,60,5.2]]){let l=t+r*n,u=e+o,d=s+.1;i.ball(a,c,13,"#d7bd94",l,d,u),i.ball(a*.62,c*.78,10,"#dfc598",l+a*.28,d+.5,u+4);for(let[h,f,g]of[[-.38,1,4.4],[-.08,-3.5,5.6],[.2,4.5,4.5],[.56,2,3.8]])Y1(i,l+a*h,u+f,d+c*.75,g,h*7)}}function Z1(i,t,e,n){let o=e-13.5+.6;i.box(19,2.5,27,"#ac987e",t,n+1.28,o);for(let a=0;a<7;a++)i.box(20,.7,3.45,a%2?"#c5af8f":"#cdb696",t,n+2.6,e-1.25-a*3.8);for(let a of[-1,1])i.box(.9,.8,27+.6,"#b4a086",t+a*19/2,n+2.8,o)}function J1(i,t,e,n,s,r,o){i.box(1.4,16.6,1.4,"#b5a08a",t,n+16.6/2,e),i.ball(1.6,.95,1.6,r,t,n+16.6+3.6,e);for(let u=0;u<8;u++){let d=(p,m,y)=>[Math.cos(p)*m,y,Math.sin(p)*m],h=o+u*2*Math.PI/8,f=o+(u+1)*2*Math.PI/8,g=[[0,16.6+3.4,0],d(h,16*.54,16.6+2.1),d(f,16*.54,16.6+2.1),d(h,16,16.6-.55),d(f,16,16.6-.55),d(h,16,16.6-2),d(f,16,16.6-2)],x=new ce;x.setAttribute("position",new Zt(g.flat(),3)),x.setAttribute("uv",new Zt(g.flatMap(([p,,m])=>[p/32+.5,m/32+.5]),2)),x.setIndex([0,2,1,1,2,4,1,4,3,3,4,5,4,6,5]),x.computeVertexNormals(),i.add(x,u%2?r:s,t,n,e)}}function Xp(i,t,e,n,s,r){let o=(d,h)=>[t+d*Math.cos(r)+h*Math.sin(r),e-d*Math.sin(r)+h*Math.cos(r)],a=(d,h,f,g,x,p,m)=>{let[y,w]=o(x,m);i.box(d,h,f,g,y,n+p,w,r)};for(let d of[-1,1])a(1.1,1.2,18,"#988679",d*4.5,2.15,0),a(1,2.1,1.2,"#988679",d*4.4,1.08,6.6);a(8.4,.75,12,s,0,2.8,2);let[c,l]=o(0,-5.5),u=new we(8.4,.85,8);u.rotateX(-Math.PI/6),i.add(u,s,c,n+4.4,l,r)}function $1(i,t,e,n,s){for(let[r,o,a,c,l]of[[-.43,-57,"#c87a72","#fae2bd",-.09],[-.16,-67,"#589eab","#e5dfbd",.14],[.14,-54,"#dca658","#f7dfb5",-.19],[.41,-64,"#9c86ae","#ecddc2",.13]]){let u=t+r*n,d=e+o;J1(i,u,d,s,a,c,l),Xp(i,u-13,d-15,s,c,l-.17),Xp(i,u+14,d-14,s,a,l+.12),i.box(8.6,.22,15,"#e9cda5",u+23,s+.99,d+7,l*2)}}function Zp(i,{farZ:t},e,{minX:n,maxX:s},r=6200,o=(n+s)/2){let a=(n+s)/2,c=Math.ceil(r/50),l=o-r/2,u=Array.from({length:c+1},(p,m)=>{let y=l+r*m/c,w=y-a,v=t-108+14*Math.cos((w+110)*.006)+7*Math.sin((w-90)*.013);return{x:y,z:v}}),d=u.map(({x:p})=>[p,e+.28,t+.4]),h=u.map(({x:p,z:m})=>[p,e+.71,m+22]),f=u.map(({x:p,z:m})=>[p,e+.44,m+6]),g=u.map(({x:p,z:m})=>[p,e+.17,m-31]);wh(i,d,h,"#e3cba0"),wh(i,h,f,"#dbbd92"),wh(i,f,g,"#c8a47e");let x=Math.max(940,s-n);q1(i,a,t,x,e);for(let p of[-1,1])Z1(i,a+p*x*.245,t,e);return $1(i,a,t,x,e+.55),{water:{y:e+1.05,farZ:t-1850,shoreline:u,focusX:a}}}var{lerp:Ri}=se,re={window:"#3b596b",glass:"#496c7e",glassGlow:"#7393a1",bumper:"#5a5158",tire:"#37333b",rim:"#a79e9b",hub:"#e8d4b7",grille:"#514651",plate:"#e8d5b1",upholstery:"#aa775d",roofRail:"#766573",tan:"#d2aa7a",wood:"#a77350"},Jp=[{id:"butter-compact",label:"Buttercup compact",length:43,width:23,height:21,tire:4,cabin:[-.39,-.29,.09,.29],body:"#edb857",roof:"#fff0c7",detail:"sunroof"},{id:"blush-beetle",label:"Blush bubble car",length:46,width:24,height:25,tire:4.6,cabin:[-.39,-.17,.025,.33],body:"#da8e8a",roof:"#e4a4a1",detail:"bubble"},{id:"seafoam-sedan",label:"Seafoam sedan",length:54,width:24,height:20,tire:4.4,cabin:[-.31,-.18,.055,.28],body:"#70aea5",roof:"#98c9b6"},{id:"blue-wagon",label:"Bluebird wagon",length:57,width:25,height:23,tire:4.4,cabin:[-.44,-.4,.08,.29],body:"#769bc0",roof:"#a5bbcf",detail:"wagon",windows:3},{id:"coral-convertible",label:"Coral roadster",length:49,width:24,height:17,tire:4.1,cabin:[-.28,-.21,.075,.25],body:"#e4806b",roof:"#ffe0a9",detail:"convertible"},{id:"berry-sports",label:"Berry sports coupe",length:52,width:26,height:17,tire:4.25,cabin:[-.34,-.16,.055,.3],body:"#a3769d",roof:"#c3a2ba",detail:"sports"},{id:"pine-suv",label:"Pinewood SUV",length:59,width:27,height:27,tire:5.2,cabin:[-.43,-.39,.08,.28],body:"#80986e",roof:"#c7bd8d",detail:"trail",windows:3},{id:"sand-pickup",label:"Sandy pickup",length:63,width:27,height:25,tire:5,cabin:[-.075,-.055,.185,.34],body:"#c6a37c",roof:"#e3c09a",detail:"pickup"},{id:"lavender-delivery",label:"Lavender delivery van",length:63,width:27,height:29,tire:4.6,cabin:[-.44,-.43,.21,.42],body:"#ac9ec7",roof:"#d6c5da",detail:"delivery"},{id:"cream-camper",label:"Custard camper van",length:65,width:28,height:31,tire:4.8,cabin:[-.44,-.43,.32,.42],body:"#9bb9a7",roof:"#f5dc9b",detail:"camper"},{id:"peach-food-truck",label:"Peach snack truck",length:67,width:28,height:32,tire:4.8,cabin:[.07,.12,.31,.43],body:"#e8a283",roof:"#f2c5a2",detail:"food"},{id:"cobalt-minibus",label:"Blueberry minibus",length:70,width:29,height:29,tire:4.9,cabin:[-.455,-.43,.34,.44],body:"#7898bc",roof:"#e3dbcc",detail:"bus",windows:4},{id:"honey-box-truck",label:"Honey box truck",length:72,width:29,height:32,tire:5,cabin:[.105,.16,.31,.44],body:"#dca95d",roof:"#f0cf96",detail:"cargo"},{id:"mint-city-bus",label:"Mint city bus",length:78,width:29,height:30,tire:4.9,cabin:[-.458,-.448,.397,.455],body:"#75a99d",roof:"#d8e2bd",detail:"city",windows:5}],K1=new Map(Jp.map(i=>[i.id,i])),$p=[{id:"apricot-scooter",label:"Apricot scooter",length:40,width:14,style:"scooter",paint:"#e19872",trim:"#f7d9ab",jacket:"#547c83",helmet:"#f1e5cb"},{id:"ruby-motorcycle",label:"Ruby sport motorcycle",length:46,width:14,style:"racer",paint:"#b95b66",trim:"#edb9a1",jacket:"#594e70",helmet:"#f4c27d"},{id:"moss-motorcycle",label:"Moss trail motorcycle",length:43,width:14,style:"trail",paint:"#869961",trim:"#ead5a0",jacket:"#b57357",helmet:"#ded5a1"},{id:"indigo-motorcycle",label:"Indigo cruiser motorcycle",length:46,width:15,style:"cruiser",paint:"#657a9a",trim:"#ded3aa",jacket:"#98775e",helmet:"#c5d1d2"}],Kp=[{id:"peach-basket-bicycle",label:"Peach basket bicycle",length:27,width:8.8,style:"basket",paint:"#d98474",trim:"#eac996",jacket:"#708e7f",helmet:"#f8d48a"},{id:"seafoam-commuter-bicycle",label:"Seafoam commuter bicycle",length:28,width:8.8,style:"commuter",paint:"#77aba0",trim:"#c5d8bd",jacket:"#b67479",helmet:"#ece0ba"},{id:"lavender-road-bicycle",label:"Lavender road bicycle",length:28,width:8.8,style:"road",paint:"#9e8abb",trim:"#d9c7e2",jacket:"#5c7292",helmet:"#edc99d"},{id:"honey-cargo-bicycle",label:"Honey cargo bicycle",length:30,width:9,style:"longtail",paint:"#d9a359",trim:"#f2d3a3",jacket:"#917da0",helmet:"#e7c79b"}],j1=new Map($p.map(i=>[i.id,i])),Q1=new Map(Kp.map(i=>[i.id,i])),jp=({id:i,label:t,length:e,width:n,detail:s})=>Object.freeze({id:i,label:t,length:e,width:s==="food"?n+2:n}),Qp=Object.freeze([...Jp,...$p].map(jp)),Al=Object.freeze(Kp.map(jp));function tM(i){let t=new ce;return t.setAttribute("position",new Zt(i.flat(),3)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function Th(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Wt(s),a=new Float32Array(r.getAttribute("position").count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new be(a,3)),r}),e=Pn(t);for(let n of t)n.dispose();return e.computeBoundingBox(),e}function tm(i,t){let e=i.flatMap(([o,a,c])=>[[o,t,-a*.78],[o,t,a*.78],[o,t+1.5,a],[o,c-2.05,a],[o,c,a*.83],[o,c,-a*.83],[o,c-2.05,-a],[o,t+1.5,-a]]).flat(),n=[],s=(i.length-1)*8;for(let o=0;o<s;o+=8)for(let a=0;a<8;a++){let c=(a+1)%8;n.push(o+a,o+a+8,o+c+8,o+a,o+c+8,o+c)}for(let o=1;o<7;o++)n.push(0,o,o+1,s,s+o+1,s+o);let r=new ce;return r.setAttribute("position",new Zt(e,3)),r.setIndex(n),r.computeVertexNormals(),r}function eM(i){let t=[],e=(z,tt)=>t.push([z,tt]),n=(z,tt,H,X,Y,$,rt)=>e(new we(X,Y,$).translate(z,tt,H),rt),s=(z,tt)=>e(tM(z),tt),r=(z,tt,H,X,Y,$,rt)=>{let yt=[[tt,X,$],[H,X,$],[H,Y,$],[tt,Y,$]];s(z>0?yt:yt.reverse(),rt)},{width:o,tire:a,body:c,roof:l,detail:u}=i,d=i.length-2.8,h=d*.5,f=o*.435,g=a*.78,x=8.25+a*.52,p=x-(u==="sports"||u==="convertible"?1.8:.75);e(tm([[-h,f*.76,x-1.6],[-h+2.4,f*.93,x-.2],[-h+6.2,f,x],[h-6.2,f,x-.24],[h-2.4,f*.92,p+.35],[h,f*.75,p]],g),c);let m=g+.95;for(let z of[-1,1])n(z*(h-.22),m,0,1.42,1.58,f*1.57,re.bumper),n(z*(h+.05),m+.82,0,1.08,.95,4.5,re.plate);n(h+.1,p-2.8,0,.65,1.2,f*.64,re.grille),n(h+.38,p-2.62,0,.24,.35,f*.55,re.rim);for(let z of[-1,1]){n(0,g+1.3,z*(f+.04),d*.53,.9,.34,re.bumper);for(let tt of[-.323,.323]){let H=d*tt,X=z*(f+.05);e(new en(a,a,2.9,10).rotateX(Math.PI/2).translate(H,a,X),re.tire),e(new Cn(a*.57,8).rotateY(z<0?Math.PI:0).translate(H,a,X+z*1.46),re.rim),e(new Cn(a*.28,6).rotateY(z<0?Math.PI:0).translate(H,a,X+z*1.48),re.hub)}}let[y,w,v,b]=i.cabin.map(z=>d*z),E=x-.35,C=i.height-1.25,_=f*.88,P=_*(i.windows>2||u==="camper"||u==="delivery"?.94:.79),F=z=>Ri(_,P,z),L=z=>Ri(E,C,z),U=(z,tt,H,X=0)=>[Ri(Ri(y,w,tt),Ri(b,v,tt),z),L(tt),H*(F(tt)+X)];function V(z,tt,H,X,Y=.2,$=.85,rt=.08){let yt=[U(tt,Y,z,rt),U(H,Y,z,rt),U(H,$,z,rt),U(tt,$,z,rt)];s(z>0?yt:yt.reverse(),X)}function O(z,tt,H,X,Y,$,rt=0){let[yt,_t]=z>0?[b,v]:[y,w],vt=(ct,ht)=>[Ri(yt,_t,ht)+z*rt,L(ht),ct*F(ht)],Pt=[vt(H,X),vt(tt,X),vt(tt,Y),vt(H,Y)];s(z>0?Pt:Pt.reverse(),$)}function K(z){O(z,-.81,.81,.16,.88,re.window,.08),O(z,-.72,.73,.23,.82,re.glass,.13),O(z,-.67,.64,.67,.75,re.glassGlow,.18)}if(u==="convertible"){O(1,-.88,.88,0,1,l,.08),K(1),n((y+v)/2,E+.2,0,(v-y)*.96,1.05,_*1.92,re.window);for(let z of[-1,1])n(y+5.7,E+2.35,z*_*.43,7.7,2.5,5.6,re.upholstery),n(y+2.2,E+3.7,z*_*.43,2,5.2,6,re.tan)}else{for(let Y of[-1,1])V(Y,0,1,c,0,1,0);O(1,-1,1,0,1,c),O(-1,-1,1,0,1,c),K(1),["delivery","cargo","food"].includes(u)||K(-1);let z=(v+w)/2,tt=v-w+.38;n(z,C+.34,0,tt,.84,P*2.05,l),u==="bubble"&&n(z,C+.79,0,tt*.88,.52,P*1.67,l),u==="sunroof"&&(n(z,C+.82,0,tt*.48,.24,P*1.12,re.window),n(z-tt*.12,C+.98,0,.65,.18,P,re.glassGlow));let H=i.windows??2,X=u==="delivery"||u==="camper"?[[.7,.94]]:Array.from({length:H},(Y,$)=>[($+.16)/H,($+.86)/H]);for(let Y of[-1,1])for(let[$,rt]of X)V(Y,$,rt,re.window),V(Y,$+.011,rt-.009,re.glass,.29,.79,.13),V(Y,$+.023,rt-.025,re.glassGlow,.64,.72,.18)}for(let z of[-1,1])n(b-3,E+1.05,z*(f+.2),3.2,1.8,1.75,l),n(Ri(y,b,.36),x-1.45,z*(f+.1),2.8,.46,.24,re.rim);return{add:e,box:n,sideFace:r,glazingSide:V,bodyParts:t,recipe:i,length:d,outer:f,shoulder:x,nose:h,frontY:p}}function nM(i,t){let{length:e,outer:n,shoulder:s,recipe:r,add:o,box:a,sideFace:c}=i,l=-e*.454,u=e*.105,d=r.height-.4,h=u-l;o(tm([[l,n*.93,d-.7],[l+1.6,n,d],[u-1.6,n,d],[u,n*.93,d-.7]],s-.8),t),a((l+u)/2,d+.1,0,h-3.5,.28,n*1.6,r.roof);for(let f of[-1,1]){let g=f*(n+.1);c(f,l+3,u-3,s+1.6,s+2.45,g,r.body)}for(let f of[-.4,0,.4])a(l-.13,(s+d)/2,n*f,.26,d-s-3.1,.4,re.rim);return{rear:l,front:u,top:d}}function iM(i){let{recipe:t,box:e,sideFace:n,glazingSide:s,length:r,outer:o,shoulder:a}=i,{detail:c,height:l,roof:u}=t;if(c==="wagon"||c==="trail"){let d=l+.5;for(let h of[-1,1])e(r*-.18,d,h*o*.51,r*.3,.85,.83,re.roofRail);if(c==="trail"){for(let h of[-.29,-.07])e(r*h,d+.55,0,1.05,.75,o*1.18,re.roofRail);e(r*-.18,d+1.1,0,r*.17,1.65,o*.78,re.tan)}}else if(c==="sports")e(r*-.4,a+1.1,0,4.2,1.15,o*1.72,re.window),e(r*.39,a-.65,0,6.5,.28,1.65,"#f6e5cc");else if(c==="pickup"){let d=r*-.25;e(d,a+.22,0,r*.35,.42,o*1.43,re.wood);for(let h of[-1,1])e(d,a+.93,h*o*.84,r*.34,2.28,1.72,u),e(d,a+.48,h*o*.38,r*.33,.25,.4,re.tan);e(r*-.429,a+1.05,0,1.8,2.45,o*1.72,u),e(r*-.17,a+1.75,0,5.5,2.5,8,re.tan)}else if(c==="cargo"||c==="food"){let{rear:d,front:h}=nM(i,c==="food"?"#f6c3a2":"#f0d099");if(c==="food"){let f=a+7;n(1,d+5.5,h-4.5,f,f+8.4,o+.19,re.window),e((d+h)/2,f,o+.75,h-d-9.5,.75,2.65,re.wood);for(let g=0;g<7;g++)e(Ri(d+6,h-4.5,g/6),f+8.6,o+1.4,2.5,1.05,2.75,g%2?"#fff0cc":"#d9867e")}}else if(c==="delivery"||c==="camper")for(let d of[-1,1])c==="delivery"?(s(d,.1,.61,"#e5d6e4",.28,.65,.12),s(d,.18,.54,"#b39cc2",.43,.49,.18)):(s(d,.09,.61,"#456575",.29,.68,.12),s(d,.12,.58,"#dbbf89",.49,.62,.18),e(r*-.18,l+.68,d*o*.32,r*.19,.85,o*.48,"#f6e1b1"));else if(c==="city"||c==="bus"){for(let d of[-1,1])e(0,a-1.05,d*(o+.13),r*.62,.88,.42,c==="city"?"#e0d49a":"#e6c29b");c==="city"&&(e(r*.34,l-.5,0,5.5,.7,o*1.05,re.window),e(r*-.12,l+.28,0,r*.23,.9,o*1.18,u))}}function em(i,t,e){return[{role:"body",geometry:Th(i),material:new Fe({vertexColors:!0,roughness:.65})},{role:"headlamp",geometry:t,material:new Fe({color:"#fff1d7",emissive:"#ffe4ab",emissiveIntensity:.26,roughness:.5})},{role:"taillamp",geometry:e,material:new Fe({color:"#bc5854",emissive:"#ed6b5c",emissiveIntensity:.28,roughness:.5})}]}function nm(i,t){let{style:e,length:n,paint:s,trim:r,jacket:o,helmet:a}=i,c=[],l=(_t,vt)=>c.push([_t,vt]),u=(_t,vt,Pt)=>l(new we(...Pt).translate(...vt),_t),d=(_t,vt,Pt,ct=0)=>l(new Le(1,8,5).scale(...Pt).rotateZ(ct).translate(...vt),_t);function h(_t,vt,Pt,ct){let ht=new G(...vt),Tt=new G(...Pt),Ot=new G().subVectors(Tt,ht),Lt=new tn().setFromUnitVectors(new G(0,1,0),Ot.clone().normalize());l(new en(ct,ct,Ot.length(),5,1,!0).applyQuaternion(Lt).translate(...ht.lerp(Tt,.5).toArray()),_t)}let f=t?1:.75,g=n*(t?.132:.15),x=-n*(e==="longtail"?.309:.326),p=n*.326,m=[n*-.024,g+f*1.25,0],y=[n*(e==="cruiser"?-.16:-.115),n*(e==="trail"?.4:e==="cruiser"?.327:.369),0],w=e==="road"||e==="racer",v=[n*(w?.234:.204),y[1]+(w?.5:3.7)*f,0],b=f*(t?2.2:1.36),E=f*(t?1.04:.65),C=f*(t?.9:.65),_=e!=="road";for(let _t of[x,p]){l(new mn(g-E,E,4,12).translate(_t,g,0),re.tire),_&&l(new mn(g+f*.37,f*.39,4,6,Math.PI*.74).rotateZ(Math.PI*.13).translate(_t,g,0),s);for(let vt of[0,Math.PI/3,Math.PI*2/3]){let Pt=g-E*1.35,ct=Math.cos(vt)*Pt,ht=Math.sin(vt)*Pt;h(re.rim,[_t-ct,g-ht,0],[_t+ct,g+ht,0],f*.23)}l(new en(f*1.05,f*1.05,b,8).rotateX(Math.PI/2).translate(_t,g,0),re.hub)}let P=[x,g,0];h(s,P,y,C),h(s,P,m,C),h(s,y,m,C),h(s,m,v,C);let F=e==="basket"||e==="scooter"?[v[0]*.7,m[1]+f*2.65,0]:v;h(s,y,F,C),F!==v&&h(s,F,v,C);for(let _t of[-1,1])h(re.rim,[v[0],v[1]-f*2.3,_t*b*.38],[p,g,_t*b*.45],C*.7);u(re.bumper,[y[0]-.25,y[1]+f*.4,0],[f*(t?7.1:4.8),f*1.08,f*3.15]);let L=f*(t?5.05:4.75),U=v[0]+(w?f*1.85:-f*.8),V=v[1]+(w?-f*.6:f*.25);for(let _t of[-1,1]){let vt=[U,V,_t*L];h(re.rim,v,vt,f*.47),h(re.tire,[U+f*.6,V,_t*L*.82],vt,f*.63)}if(t){u(re.bumper,[m[0]+.4,m[1]+1.05,0],[6.4,4.9,5.4]);let _t=e==="scooter"?[v[0]+2.1,y[1]-2.3,0]:[y[0]+5.5,y[1]+.7,0],vt=e==="scooter"?[4.1,5.3,4.2]:e==="racer"?[6.8,3.45,4.55]:[5.4,2.8,3.85];if(d(s,_t,vt,e==="scooter"?.34:-.18),u(r,[_t[0]+.8,_t[1]+.15,vt[2]*.87],[vt[0]*1.18,1,.8]),u(r,[_t[0]+.8,_t[1]+.15,-vt[2]*.87],[vt[0]*1.18,1,.8]),e==="racer")d(re.window,[v[0]+2,v[1]+.95,0],[2.75,2.4,3.15],-.52),u(s,[x+1.75,y[1]+1.25,0],[5.6,1.55,4.25]);else if(e==="trail")u(r,[p-2.2,g*2.1+1.05,0],[7.25,.82,3.65]),u(re.rim,[x+1.55,y[1]-1.9,0],[6.7,1.35,4.2]);else if(e==="scooter")d(s,[x+3.7,y[1]-3.1,0],[6.9,3.05,4.05],-.13),u(r,[m[0],g+1.1,0],[8.2,1.22,6.2]);else for(let Pt of[-1,1])h(re.rim,[x-2.2,g+2.1,Pt*2.8],[m[0]+4.5,g+.45,Pt*3.25],.79)}else{let _t=e==="longtail"?[x+1.1,g*2.05+1.8,0]:[p-.98,v[1]-1.55,0];e==="basket"||e==="longtail"?(u(re.wood,_t,[e==="longtail"?7.6:4.1,2.8,4.8]),u(r,[_t[0],_t[1]+1.15,0],[e==="longtail"?8:4.6,.56,5.1]),u(re.tan,[_t[0],_t[1]+1.5,0],[e==="longtail"?6.3:3.6,.34,3.75])):e==="commuter"&&(u(r,[x+1.65,g+1.05,2],[4.2,3.4,1.85]),u(re.roofRail,[x+1.6,g*2.05+.45,0],[5.3,.66,4.3]))}let O=[y[0]-f*.38,y[1]+f*2.05,0],K=[O[0]+(w?3.05:1.05)*f,O[1]+f*3.75,0],z=[K[0]+(w?3.35:.95)*f,K[1]+(w?3.1:4.85)*f,0],tt=w?-.57:-.22;d(o,K,[f*2.6,f*4.15,f*3],tt),d(a,z,[f*2.94,f*2.68,f*2.62]),d(re.window,[z[0]+f*2.1,z[1]-f*.4,0],[f*1.08,f*1.05,f*2.2]),(e==="commuter"||e==="trail")&&u(r,[K[0]-f*2.1,K[1]+f*.6,0],[f*1.9,f*3.3,f*3.5]);let H="#4b4e63",X="#e2b491";for(let _t of[-1,1]){let vt=[K[0]+f*1.1,K[1]+f*1.65,_t*f*2.43],Pt=[Ri(vt[0],U,.48),Ri(vt[1],V,.52)-f,_t*f*3.48],ct=[U,V,_t*L*.93];h(o,vt,Pt,f*.95),h(o,Pt,ct,f*.76),u(X,ct,[f*1.5,f*1.11,f*1.09]);let ht=t?0:_t*f*1.35,Tt=[O[0]+f*(t?4.3:4.9)+ht,O[1]-f*3.5,_t*f*2.64],Ot=[m[0]+f*(e==="scooter"?2.65:.35)+ht,m[1]+f*.27-ht,_t*f*2.5];h(H,[O[0],O[1],_t*f*1.86],Tt,f*1.12),h(H,Tt,Ot,f*.88),u(re.tire,[Ot[0]+f*.25,Ot[1],Ot[2]],[f*2.15,f*.95,f*1.42])}let Y=f*(t?1.34:.84),$=[p+f*.58,g*(t?2.3:2.18),0],rt=[x-f*.56,g*(t?2.18:2.02),0];h(re.bumper,[p,g+f*1.5,0],$,f*.58),h(re.bumper,[x,g*1.6,0],rt,f*.46);let yt=_t=>Th([[new Le(Y,6,4).scale(.53,.78,1).translate(..._t),"#ffffff"]]);return em(c,yt($),yt(rt))}function im(i){let t=j1.get(i);if(t)return nm(t,!0);let e=K1.get(i);if(!e)return null;let n=eM(e);iM(n);let{outer:s,nose:r,frontY:o,shoulder:a,bodyParts:c}=n,l=(u,d)=>Th([-1,1].map(h=>[new we(1.48,1.8,s*.35).translate(u*(r+.19),d,h*s*.63),"#ffffff"]));return em(c,l(1,o-1.75),l(-1,a-2.65))}function sm(i){let t=Q1.get(i);return t?nm(t,!1):null}var rm=new Map([["clear",{stride:4,speed:70}],["slow",{stride:2,speed:44}],["heavy",{stride:1,speed:20}]]),Gi={stride:4,crossingSeconds:3.2},sM=242,om=12,am=.38,um=new Map(Qp.map(i=>[i.id,i])),cm=["seafoam-sedan","blue-wagon","butter-compact","seafoam-sedan","pine-suv","blue-wagon","sand-pickup","butter-compact","lavender-delivery","pine-suv","seafoam-sedan","indigo-motorcycle"].map(i=>um.get(i));function rM({index:i,lane:t}){let e=Math.floor(i/Gi.stride),n=i%Gi.stride;return cm[(2*(e+n)+t)%cm.length]}function lm({centerX:i,width:t,lanes:e}){let n=t-60,s=i-n/2,r=Math.max(1,om*Math.round(n/(om*sM))),o=n/r,a=e.map((x,p)=>Array.from({length:r},(m,y)=>({z:x,lane:p,index:y,x:s,offset:o*(y+.25+(r===1&&p?.5:0))}))),c=0,l,u,d,h=!1,f=[];function g(x,p,m,y=!1){let w=p?.severity==="ambient"?Gi:rm.get(p?.severity),v=Number.isFinite(l)&&Number.isFinite(x)?se.clamp(x-l,0,.25):0;if(l=x,w!==u){h=!!(u&&w&&(w===Gi||u===Gi));let C=Math.min(r,w?.stride??1),_=w===Gi?Math.floor(C/2):1;f=w?a.flatMap((P,F)=>P.filter(({index:L})=>L%C===F*_%C)):[],u=w}if(!w)return d=void 0,f;let b=p.speedFactor,E=w===Gi?o*Math.min(r,Gi.stride)/(2*Gi.crossingSeconds):Number.isFinite(b)&&b>0?rm.get("clear").speed*se.clamp(b,.22,1):w.speed;if(y)c=!m&&Number.isFinite(x)?Math.max(0,x)*E:0;else if(!m)if(h&&d!==void 0){let C=Math.exp(-v/am),_=d-E;c+=v*E+_*am*(1-C),d=E+_*C,h=Math.abs(d-E)>.1}else c+=v*E,d=E;c%=n;for(let C of f){let _=(C.offset+c)%n;C.x=s+(C.lane?n-_:_)}return f}return{capacity:r*e.length,update:g}}function hm(i){let t=new ae,e=lm(i),n,s=new Map;function r(f,g){let x=new _i(f,g,e.capacity);return x.count=0,x.frustumCulled=!1,x.instanceMatrix.setUsage(kn),x}let o=r(new Cn(1,18).rotateX(-Math.PI/2).translate(0,.02,0),new ze({color:"#35323c",opacity:.23,transparent:!0,depthWrite:!1}));t.add(o);let a=new Oe,c;t.visible=!1;function l(f,g){for(let{mesh:x,role:p}of f.layers)p==="headlamp"&&(x.material.emissiveIntensity=g?1.65:.26),p==="taillamp"&&(x.material.emissiveIntensity=g?.91:.28)}function u(f){if(s.has(f.id))return s.get(f.id);let g=new ae;g.name=`vehicle-${f.id}`;let x=im(f.id).map(({geometry:m,material:y,role:w})=>({mesh:r(m,y),role:w}));g.add(...x.map(({mesh:m})=>m)),t.add(g);let p={group:g,layers:x,count:0};return l(p,c),s.set(f.id,p),p}function d(f,g,{reduceMotion:x=!1,night:p=!1,transientTelemetry:m=!1}={}){m&&(n??=lm(i));let w=(m?n:e).update(f,g,x,m);if(t.visible=w.length>0,!t.visible)return;if(p!==c){c=p;for(let b of s.values())l(b,p)}for(let b of s.values())b.count=0;let v=um.get(g?.vehicleStyle);for(let[b,E]of w.entries()){let C=v??rM(E),_=u(C);a.position.set(E.x,i.surfaceY,E.z),a.rotation.y=E.lane?Math.PI:0,a.scale.set(1,1,1),a.updateMatrix();for(let{mesh:P}of _.layers)P.setMatrixAt(_.count,a.matrix);_.count++,a.scale.set(C.length*.55,1,C.width*.62),a.updateMatrix(),o.setMatrixAt(b,a.matrix)}o.count=w.length,o.instanceMatrix.needsUpdate=!0;for(let{group:b,layers:E,count:C}of s.values()){b.visible=C>0;for(let{mesh:_}of E)_.count=C,C&&(_.instanceMatrix.needsUpdate=!0)}}function h(){t.traverse(f=>{f.isInstancedMesh&&(f.dispose(),f.geometry.dispose(),f.material.dispose())}),t.clear()}return{root:t,update:d,dispose:h}}var oM=22,aM=63,cM=525,lM=1100,uM=22,hM=75,fM=[{shirt:"#c87f70",trim:"#f1d19d",pants:"#556072",skin:"#d49876",hair:"#4d3635",accessory:"bun"},{shirt:"#6a988b",trim:"#e8c58d",pants:"#5f666b",skin:"#a86a50",hair:"#382c34",accessory:"cap"},{shirt:"#9082ae",trim:"#f0d8b4",pants:"#6a627f",skin:"#e8af89",hair:"#6a4235",accessory:"pack"},{shirt:"#c79b53",trim:"#f1d39b",pants:"#677c7a",skin:"#a96c59",hair:"#4c3435",accessory:"curls"},{shirt:"#779cb8",trim:"#f4dfb5",pants:"#5a6b83",skin:"#d99871",hair:"#654537",accessory:"pack"},{shirt:"#ba8096",trim:"#f9ddad",pants:"#736583",skin:"#e3a986",hair:"#58403d",accessory:"bow"}],fm=[[[0,1],[5,.7],[1,1]],[[2,.97]],[[3,1],[4,.76]],[[1,.96],[2,1]],[[0,1],[5,.71]],[[3,.98]]],dM=(i,t)=>(i%t+t)%t;function pM(i){let t=i.width-hM*2,e=[],n=[];if(!Number.isFinite(t)||t<=0||!Number.isFinite(i.centerX))return{walkers:e,cyclists:n,sample:()=>({walkers:e,cyclists:n})};let s=i.centerX-t/2,r=Math.max(1,Math.round(t/cM)),o=Math.max(1,Math.round(t/lM)),a=t/r,c=t/o;for(let[u,d]of(i.sidewalks??[]).entries()){let{minZ:h,maxZ:f,surfaceY:g}=d,x=f-h;if(![h,f,g].every(Number.isFinite)||x<=0)continue;let p=u%2?-1:1,m=Math.min(1,x/uM),y=h+x*(p>0?.25:.75),w=h+x*(p>0?.76:.24);for(let v=0;v<r;v++){let b=fm[(v+u*2)%fm.length],E=t/2+(v+u*.42)*a-35,C=`sidewalk-walk-${u}-${v}`;for(let[_,[P,F]]of b.entries())e.push({id:`${C}-${_}`,groupId:C,style:P,child:F<.8,offset:E-p*13.2*_,scale:m*F,direction:p,y:g,z:y+p*.62*(_%2),phase:v*.91+u*.8+_*2.1})}for(let v=0;v<o;v++)n.push({id:`sidewalk-bike-${u}-${v}`,style:Al[(v+u*2)%Al.length],offset:t/2+(v+u*.65)*c,scale:m,direction:p,y:g,z:w,phase:v*1.7+u})}function l(u=0,d=!1){let h=Number.isFinite(u)?Math.max(0,u):0,f=(g,x,p)=>g.map(m=>({...m,x:s+dM(m.offset+m.direction*x*h,t),gait:d?0:h*p+m.phase}));return{walkers:f(e,oM,10),cyclists:f(n,aM,7)}}return{walkers:e,cyclists:n,sample:l}}var Rl={ink:"#4b3e4c",shoe:"#4a4651",sole:"#e2d0b7",blush:"#c88376"};function Ah(i,t,e){let{shirt:n,trim:s,pants:r,skin:o,hair:a,accessory:c}=fM[i.style],l=t?0:Math.sin(i.gait),u=Math.abs(l)*.69,d=h=>h+u;e(n,0,d(10.45),0,2.95,4.3,3.4),e(r,-.1,d(7.25),0,2.6,1.7,3.04),e(s,1.1,d(13.35),0,2.14,.69,2.55),e(s,2.68,d(10.4),-.7,.41,.86,1);for(let h of[-1,1]){let f=l*h,g=f*3,x=Math.max(0,f)*1.35;e(r,g*.45,4.5+x*.42+u*.32,h*1.51,1.19,3.2,1.25,-.48*f),e(Rl.shoe,.77+g,1.11+x,h*1.52,2.17,.99,1.34),e(Rl.sole,1.38+g,.49+x,h*1.52,1.64,.43,1.32),e(n,-f*1.07,d(10.16),h*3.15,1.23,2.87,1.15,.38*f),e(o,-f*2.16,d(7.7),h*3.31,.98,1.1,.95)}e(a,-.67,d(17.25),0,4.17,4.32,3.82),e(o,1.05,d(16.63),0,3.76,3.75,3.41),e(a,1.12,d(19.85),-.89,2.75,1.57,2.82,-.3),e(o,4.48,d(16.54),0,.64,.63,.66);for(let h of[-1,1])e(o,.36,d(16.69),h*3.47,1.02,1.07,.64),e(Rl.ink,4.18,d(17.25),h*1.35,.34,.47,.43),e(Rl.blush,3.76,d(16.21),h*2.12,.37,.29,.55);if(c==="bun"&&(e(a,-3.45,d(19.68),.72,1.98,1.89,1.89),e(s,-3.51,d(20.79),1.35,1.64,.47,.69)),c==="cap"&&(e(n,-.5,d(20.2),0,3.72,1.97,3.45),e(s,2.72,d(19.62),0,2.43,.46,2.89)),c==="pack"&&(e(s,-2.88,d(10.2),0,1.48,2.89,2.63),e(n,-4.01,d(10.65),0,.46,1.28,1.77)),c==="curls")for(let h of[-1,1])e(a,-.9,d(18.52),h*2.68,2.6,2.83,1.33);c==="bow"&&(e(s,.1,d(21.05),2.67,1.56,.92,.65,.47),e(s,1.82,d(21.05),2.67,1.51,.92,.65,-.47))}function dm(i){let t=pM(i),e=new ae;if(e.name="sidewalk-scenery",!t.walkers.length&&!t.cyclists.length)return{root:e,update(){},dispose:()=>e.removeFromParent()};let n=new Oe;function s(m,y,w,v){let b=new _i(y,w,v);return b.name=m,b.frustumCulled=!1,b.instanceMatrix.setUsage(kn),e.add(b),b}let r=new Map,o=0;for(let m of t.walkers)Ah(m,!0,y=>{o++,r.has(y)||r.set(y,new Wt(y))});let a=s("sidewalk-walkers",new Le(1,9,6),new Fe({color:"#fff",roughness:.81}),o),c=0;for(let m of t.walkers)Ah(m,!0,y=>a.setColorAt(c++,r.get(y)));let l=s("sidewalk-contact-shadows",new Cn(1,16).rotateX(-Math.PI/2),new ze({color:"#584b52",opacity:.23,transparent:!0,depthWrite:!1}),t.walkers.length+t.cyclists.length),u=new Map(Al.map(m=>{let y=t.cyclists.filter(w=>w.style.id===m.id).length;return[m.id,y?sm(m.id).map(({geometry:w,material:v,role:b})=>({role:b,mesh:s(`sidewalk-bicycle-${m.id}-${b}`,w,v,y)})):[]]})),d,h=0,f,g;function x(m,{reduceMotion:y=!1,night:w=!1,transientTelemetry:v=!1}={}){if(w!==d){for(let L of u.values())for(let{role:U,mesh:V}of L)U==="headlamp"&&(V.material.emissiveIntensity=w?1.05:.16),U==="taillamp"&&(V.material.emissiveIntensity=w?.75:.18);d=w}if(!v){let L=Number.isFinite(f)&&Number.isFinite(m)?se.clamp(m-f,0,.25):0;y||(h+=L),f=m}let b=v?y?0:m:h;if(g?.time===b&&g?.reduceMotion===y&&g?.transientTelemetry===v)return;g={time:b,reduceMotion:y,transientTelemetry:v};let E=t.sample(b,y),C=0,_=0;function P(L,U,V){n.position.set(L.x,L.y+.065,L.z),n.rotation.set(0,0,0),n.scale.set(U*L.scale,1,V*L.scale),n.updateMatrix(),l.setMatrixAt(_++,n.matrix)}for(let L of E.walkers){let{direction:U,scale:V}=L,O=U>0?0:Math.PI;Ah(L,y,(K,z,tt,H,X,Y,$,rt=0)=>{n.position.set(L.x+z*V*U,L.y+tt*V,L.z+H*V*U),n.rotation.set(0,O,rt),n.scale.set(X*V,Y*V,$*V),n.updateMatrix(),a.setMatrixAt(C++,n.matrix)}),P(L,5.32,4.1)}let F=new Map;for(let L of E.cyclists){let U=F.get(L.style.id)??0;n.position.set(L.x,L.y,L.z),n.rotation.set(0,L.direction>0?0:Math.PI,0),y||n.rotateX(Math.sin(L.gait)*.028),n.scale.setScalar(L.scale),n.updateMatrix();for(let{mesh:V}of u.get(L.style.id))V.setMatrixAt(U,n.matrix);F.set(L.style.id,U+1),P(L,L.style.length*.52,L.style.width*.58)}for(let L of u.values())for(let{mesh:U}of L)U.instanceMatrix.needsUpdate=!0;a.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0}function p(){for(let m of e.children)m.dispose(),m.geometry.dispose(),m.material.dispose();e.clear(),e.removeFromParent()}return{root:e,update:x,dispose:p}}var Ch=Math.PI*2,{clamp:Ih,lerp:Os}=se,mM=new Set(["rainy","pouring","lightning-rainy","windy","windy-variant"]),gM=[{id:"sailboat",name:"Ivory sailboat",length:59,beam:21,paint:"#558e94",deck:"#e1bb86",center:-298,radius:122,offshore:54,drift:6,period:74,start:1.03,wake:.63},{id:"cabin",name:"Coral cabin launch",length:66,beam:24,paint:"#d47960",deck:"#eed3a7",center:270,radius:118,offshore:54,drift:5,period:48,start:-1.32,wake:1},{id:"fishing",name:"Juniper fishing boat",length:52,beam:20,paint:"#689483",deck:"#d4b083",center:31,radius:78,offshore:103,drift:8,period:87,start:2.16,wake:.7}];function pm(i,t){let e=0,n=i.length-1;for(;n-e>1;){let o=e+n>>1;t<i[o].x?n=o:e=o}let s=i[e],r=i[n];return Os(s.z,r.z,Ih((t-s.x)/(r.x-s.x),0,1))}function xM(i){if(!Array.isArray(i?.shoreline)||i.shoreline.length<2||![i.y,i.farZ,i.focusX].every(Number.isFinite))return[];let{shoreline:t,farZ:e,focusX:n}=i,s=t[0].x,r=t.at(-1).x;return!Number.isFinite(s)||!Number.isFinite(r)||r-s<280?[]:gM.map(o=>{let a=Math.min(o.radius,(r-s)/5),c=a+o.length,l=Ih(n+o.center,s+c,r-c);function u(d){let h=l+Math.cos(d)*a,f=Math.max(e+65,pm(t,h)-o.offshore-Math.sin(d)*o.drift);return{x:h,z:f}}return{...o,point:u}}).filter(o=>{for(let a=0;a<12;a++){let{x:c,z:l}=o.point(a*Ch/12);if(pm(t,c)-l<o.length/2+8)return!1}return!0})}function gm(i,t,e=.003){let n=i.point(t-e),s=i.point(t+e);return Math.atan2(n.z-s.z,s.x-n.x)}function yM(i,t,{condition:e}={}){let n=Number.isFinite(t)?t:0,s=i.start+n*Ch/i.period,{x:r,z:o}=i.point(s),a=n*1.24+i.start*3,c=mM.has(e)?1.55:1;return{x:r,z:o,angle:s,yaw:gm(i,s),heave:Math.sin(a)*.55*c,pitch:Math.cos(a*.89)*.017*c,roll:Math.sin(a*.74+.4)*.031*c}}function xm(i,t){let e=new ce;return e.setAttribute("position",new Zt(i.flat(),3)),e.setIndex(t),e.computeVertexNormals(),e}function ym(i){return xm(i,i.length===3?[0,1,2]:[0,1,2,0,2,3])}function Rh(i,t,e,n,s=1){let r=[[-.49,.67],[-.34,.94],[-.1,1],[.2,.84],[.39,.48],[.51,.045]],o=r.flatMap(([u,d])=>{let h=u*i,f=t*d*s/2;return[[h,n,-f*.58],[h,n,f*.58],[h,e-.9,f],[h,e,f*.88],[h,e,-f*.88],[h,e-.9,-f]]}),a=[],c=6,l=(r.length-1)*c;for(let u=0;u<l;u+=c)for(let d=0;d<c;d++){let h=(d+1)%c;a.push(u+d,u+d+c,u+h+c,u+d,u+h+c,u+h)}for(let u=1;u<c-1;u++)a.push(0,u,u+1,l,l+u+1,l+u);return xm(o,a)}function _M(i){let t=i.map(([n,s])=>{let r=n.index?n.toNonIndexed():n;r!==n&&n.dispose(),r.deleteAttribute("uv");let o=new Wt(s),a=r.getAttribute("position").count,c=new Float32Array(a*3);for(let l=0;l<a;l++)o.toArray(c,l*3);return r.setAttribute("color",new be(c,3)),r}),e=Pn(t);for(let n of t)n.dispose();return e}function Hn(i,t,e,n,s,r){return new we(i,t,e).translate(n,s,r)}function Wi(i,t,e){let n=new G(...i),s=new G(...t).sub(n),r=new tn().setFromUnitVectors(new G(0,1,0),s.clone().normalize());return new en(e,e,s.length(),6).applyQuaternion(r).translate(...n.addScaledVector(s,.5).toArray())}function mm(i,t,e,n,s,r){let o=[0,.19,.31,.64,1],a=4,c=(l,u)=>{let d=Os(Os(t[0],e[0],l),n[0],u),h=Os(Os(t[1],e[1],l),n[1],u),f=Os(Os(t[2],e[2],l),n[2],u)+Math.sin(l*Math.PI)*s*(1-u);return[d,h,f]};for(let l=0;l<o.length-1;l++){let u=o[l],d=o[l+1];for(let h=0;h<a;h++){let f=h/a,g=(h+1)/a,x=[c(f,u),c(g,u),c(g,d)];d<1&&x.push(c(f,d)),i.push([ym(x),r[l]])}}}function vM(i){let t=[3,43,0];i.push([Wi([3,4,0],t,.9),"#c6a983"],[Wi([3,11,0],[-25,10,-13],.6),"#c6a983"],[Wi([28,5,0],t,.33),"#d7c5a8"],[Wi([-25,5,0],t,.28),"#d7c5a8"],[Hn(15,1.9,10,-13,5.4,0),"#a8886e"],[Hn(9,1.5,7.5,-13,6.35,0),"#62797b"]),mm(i,[-25,10.5,-13],[3,11.5,0],[3,41,0],-9.5,["#fff5df","#cc7f68","#fff8e6","#f3e2b8"]),mm(i,[4,10,1],[24,8.5,6.5],[5,33,0],4.8,["#eaf1dc","#77ada7","#eff5dd","#f4ecd7"])}function bM(i){i.push([Hn(28,8.5,17,-7,9.1,0),"#f1e5cc"],[Hn(25,1.7,18.4,-8.4,14.4,0),"#d7e1d0"],[Hn(9,.75,7,-9,15.5,0),"#8aa5a5"],[Hn(9,2.2,11,-24,5.9,0),"#bc9472"],[ym([[7.03,6.5,-7],[7.03,12.75,-6.6],[7.03,12.75,6.6],[7.03,6.5,7]]),"#678b99"],[Wi([1,14,0],[1,21,0],.55),"#d5d6cc"]);for(let t of[-1,1]){for(let e of[-15,-5,3])i.push([Hn(e===3?4.2:6.4,4.1,.27,e,10.5,t*8.56),"#507385"]);i.push([Wi([12,5,t*8.6],[24,5,t*4.7],.49),"#f4dec2"],[Wi([12,4,t*8.6],[12,5,t*8.6],.44),"#f4dec2"])}}function MM(i){i.push([Hn(15,6.1,13,6,7.9,0),"#e4d7ad"],[Hn(17,1.4,14,6,11.65,0),"#71968e"],[Hn(.3,3.5,9.5,13.61,8.8,0),"#587a82"],[Hn(9,3.4,7,-8,6.8,2.6),"#d7a674"],[Hn(7.2,.75,5.8,-8,8.7,2.6),"#ebc996"],[Wi([-19,5,-5],[-28,16,-7],.45),"#907459"],[Wi([-28,16,-7],[-34,5.5,-10],.18),"#ccbaa0"]);for(let t of[-5,5])i.push([Hn(7.4,3,.25,6,8.8,t*1.31),"#678c91"],[new mn(2.35,.63,5,10).rotateX(-Math.PI/2).translate(-17,5,t),"#d88761"])}function SM(i,t){let{id:e,length:n,beam:s,paint:r,deck:o}=i,a=new ae;a.name=i.name;let c=[[Rh(n,s,3.7,-2.5),r],[Rh(n,s,4.52,3.55,1.018),"#f4e4c9"],[Rh(n*.92,s,4.75,4.44,.83),o]];return e==="sailboat"?vM(c):e==="cabin"?bM(c):MM(c),a.add(new he(_M(c),t)),a}var gs=12,EM=new Wt("#def5e9");function wM(i,t){let n=gs*3*2,s=new ce,r=new be(new Float32Array(n*3),3).setUsage(kn),o=new Float32Array(n*4),a=[];for(let d=0;d<3;d++)for(let h=0;h<gs;h++){let f=(d*gs+h)*2,g=h/(gs-1),x=Math.pow(Math.sin((.1+.9*g)*Math.PI),1.15)*(1-.4*g);for(let p=0;p<2;p++)EM.toArray(o,(f+p)*4),o[(f+p)*4+3]=i.wake*x*(d===1?.22:.76);h<gs-1&&a.push(f,f+2,f+1,f+1,f+2,f+3)}s.setAttribute("position",r),s.setAttribute("color",new be(o,4)),s.setIndex(a);let c=new ze({vertexColors:!0,side:an,transparent:!0,depthWrite:!1,opacity:.82}),l=new he(s,c);l.name=i.name+" wake",l.frustumCulled=!1;function u({angle:d},h){let g=(i.id==="cabin"?4.1:6)*Ch/i.period;for(let x=0;x<gs;x++){let p=x/(gs-1),m=d-g*p,y=gm(i,m),{x:w,z:v}=i.point(m),b=Math.cos(y),E=Math.sin(y),C=i.length*.48,_=w-b*C,P=v+E*C;for(let F=0;F<3;F++){let L=(F-1)*i.beam*(.19+p*.62),U=(F===1?1.85:.62)*(1+p*.55);for(let V=0;V<2;V++){let O=L+(V?U:-U);r.setXYZ((F*gs+x)*2+V,_+E*O,t+.14,P+b*O)}}}r.needsUpdate=!0,c.opacity=h?.44:.82}return{mesh:l,update:u}}function _m(i){let t=new ae;t.name="Coastal boats";let e=new Fe({vertexColors:!0,side:an,roughness:.73}),n=xM(i).map(l=>{let u=SM(l,e),d=wM(l,i.y);return t.add(d.mesh,u),{route:l,hull:u,wake:d}}),s=0,r,o=!1;function a(l,{reduceMotion:u=!1,night:d=!1,condition:h,transientTelemetry:f=!1}={}){if(o)return;let g=Number.isFinite(l)?l:void 0;!f&&!u&&g!==void 0&&r!==void 0&&(s+=Ih(g-r,0,.25)),r=f?void 0:g;let x=f?u?0:g??0:s;for(let{route:p,hull:m,wake:y}of n){let w=yM(p,x,{condition:h});m.position.set(w.x,i.y+w.heave,w.z),m.rotation.set(w.roll,w.yaw,w.pitch,"YXZ"),y.update(w,d)}}function c(){if(!o){o=!0;for(let{hull:l,wake:u}of n)l.children[0].geometry.dispose(),u.mesh.geometry.dispose(),u.mesh.material.dispose();e.dispose(),t.clear()}}return a(0),{root:t,update:a,dispose:c}}var TM=26,AM=39,RM=2.25,bm=2*Math.PI,CM=[{skin:"#d6a083",hair:"#56413a",shirt:"#df8b72",shorts:"#658e91",trim:"#f7e5bd",style:"cap"},{skin:"#a87761",hair:"#403035",shirt:"#72a79a",shorts:"#77698a",trim:"#f2ce87",style:"bun"},{skin:"#e5ac86",hair:"#684437",shirt:"#e0a95e",shorts:"#7496b1",trim:"#fff0cd",style:"hat"},{skin:"#b98666",hair:"#4e3939",shirt:"#a78cb3",shorts:"#6a8176",trim:"#f0dbb3",style:"fringe"}];function Ph(i,t){let e=i.findIndex(r=>r.x>=t);if(e<1)return i[e===0?0:i.length-1].z;let n=i[e-1],s=i[e];return se.lerp(n.z,s.z,(t-n.x)/(s.x-n.x))}function IM(i,t){let{shoreline:e,focusX:n,y:s}=i??{},r=t?.farZ;if(![n,r,s].every(Number.isFinite)||!Array.isArray(e)||e.length<2||!e.every(l=>Number.isFinite(l?.x)&&Number.isFinite(l?.z)))return null;function o(l,u,d){let h=l-u,f=l+u,g=e.filter(E=>E.x>h&&E.x<f).map(E=>E.z),x=Math.max(Ph(e,h),Ph(e,f),...g)+TM,p=r-AM;if(p-x<19)return null;let m=Math.min(d,(p-x)/2),y=(p+x)/2,w=Ph(e,l)+22,v=se.clamp((r+.4-y)/(r+.4-w),0,1),b=s-.77+v*.43;return{x:l,y:b,z:y,halfWidth:u,halfDepth:m}}let a=o(n-72,46,18),c=o(n+68,27,15);return a||c?{court:a,castle:c}:null}function vm(i,t=0,e=!1){let n=e?.96:Number.isFinite(t)?Math.max(0,t):0,s=[],r;if(i.court){let{x:o,y:a,z:c,halfDepth:l,halfWidth:u}=i.court,d=n/RM,h=d%1,f=Math.floor(d)%2?1:-1,g=Math.sin(Math.PI*h),x=u-16,p=Math.min(3.3,l*.22);r={x:o+f*x*(1-2*h),y:a+20.9+g*15.7,z:c+Math.sin(bm*h)*p,rotation:n*2.6,ground:a};for(let m of[-1,1]){let w=1-Math.min(1,(m!==f?1-h:h)/.24),v=e?.32:w*w;s.push({kind:"player",style:m<0?0:1,scale:1,yaw:-m*Math.PI/2,x:o+m*(x+6-v*2),y:a+v*1.65,ground:a,z:c+m*p*(.65+g*.35),reach:v,swing:Math.sin(n*3.15+m*.9)*.42})}}if(i.castle){let{x:o,y:a,z:c}=i.castle;s.push({kind:"builder",style:2,scale:.72,yaw:-Math.PI/2.55,x:o+14.5,y:a,ground:a,z:c+4.2,reach:e?.57:.55+.45*Math.sin(n*4.8),swing:e?0:Math.cos(n*4.8)*.55},{kind:"builder",style:3,scale:1,yaw:Math.PI/2.65,x:o-15.2,y:a,ground:a,z:c+1.8,reach:e?.37:.44+.33*Math.sin(n*2.5+.9),swing:e?0:Math.cos(n*2.5+.9)*.35})}return{actors:s,ball:r}}function PM(i,t,e,n,s){let r=i.index?i.toNonIndexed():i;r!==i&&i.dispose(),r.deleteAttribute("uv");let o=new Wt(t),a=new Float32Array(r.attributes.position.count*3);for(let c=0;c<a.length;c+=3)o.toArray(a,c);return r.setAttribute("color",new be(a,3)),r.translate(e,n,s)}function Mm(i,t){let e=[],n=(c,l,u,d,h)=>e.push(PM(c,l,u,d,h));t({add:n,box:(c,l,u,d,h,f,g)=>n(new we(c,l,u),d,h,f,g),cylinder:(c,l,u,d,h,f,g)=>n(new en(c,l,u,12),d,h,f,g)});let o=Pn(e);for(let c of e)c.dispose();let a=new Fe({vertexColors:!0,roughness:.86});i.add(new he(o,a))}function LM({x:i,y:t,z:e,halfWidth:n,halfDepth:s}){let r=new ae;r.name="beach-volleyball-court",r.position.set(i,t,e);let o=s-1;return Mm(r,({box:a,cylinder:c})=>{let l="#bd816b",u="#b7a78c",d="#f4e4bb";for(let h of[-1,1])a(n*2,.1,.56,l,0,.14,h*s),a(.56,.1,s*2,l,h*n,.14,0),c(.62,.98,20.2,"#e0c4a0",0,10.1,h*o),c(.93,.93,1.1,l,0,18.9,h*o),c(.85,.85,.76,d,0,20.48,h*o),a(.76,.54,o*2,d,0,h<0?10.1:19.5,0);for(let h=1;h<5;h++)a(.23,.23,o*2,u,0,10.2+h*1.83,0);for(let h=1;h<12;h++)a(.22,9.25,.24,u,0,14.8,o*(h/6-1))}),r}function NM({x:i,y:t,z:e}){let n=new ae;return n.name="beach-sandcastle",n.position.set(i,t,e),Mm(n,({add:s,box:r,cylinder:o})=>{let a="#d9b284",c="#e5c199",l="#ac8466";s(new Le(1,12,6).scale(12.1,1.25,8.1),"#cda77f",0,.45,0),r(12.3,4.6,7.5,a,0,2.45,-.5),r(3.2,2.85,.31,l,0,1.85,3.32),s(new Le(1,8,5).scale(1.61,1.6,.25),l,0,3.11,3.29);for(let d of[-1,1]){let h=d*6.15;o(2.44,3.35,7.9,a,h,4.05,-.8),o(2.66,2.52,1.03,c,h,8.03,-.8);for(let[f,g]of[[-1.75,0],[1.75,0],[0,-1.75],[0,1.75]])r(1.22,1.1,1.22,c,h+f,8.99,-.8+g);r(1.07,.94,.3,l,h,5.42,1.65)}o(1.72,2.44,9.25,c,.3,4.75,-3.55),o(.05,2.07,2.74,a,.3,10.37,-3.55),o(.22,.26,4.1,"#a68968",.3,12.52,-3.55);let u=new ce;u.setAttribute("position",new Zt([0,0,0,4.35,.6,0,0,2.18,0,0,2.18,0,4.35,.6,0,0,0,0],3)),u.computeVertexNormals(),s(u,"#d0816f",.38,13.05,-3.54),o(2.25,1.68,3.5,"#6da69e",-10.7,1.9,5.1),o(2.14,2.14,.44,"#a4c1a7",-10.7,3.71,5.1),o(1.61,1.61,.21,l,-10.7,3.97,5.1),s(new mn(2.06,.21,5,12,Math.PI),"#f1ddac",-10.7,3.85,5.1),s(new we(.62,.42,5.7).rotateY(.53),"#cb8d67",7.7,.42,6.8),s(new Le(1,8,5).scale(1.2,.36,1.5).rotateY(.53),"#d89b66",9.4,.43,9)}),n}function DM(){let i=new Le(3.25,24,12),t=i.toNonIndexed();i.dispose();let e=t.attributes.position,n=["#e68c70","#f4e0ae","#74aba4","#f1c165","#8a96b4","#f7e5bc"].map(o=>new Wt(o)),s=new Float32Array(e.count*3);for(let o=0;o<e.count;o+=3){let a=d=>(e[d](o)+e[d](o+1)+e[d](o+2))/3,c=Math.atan2(a("getZ"),a("getX")),l=Math.floor((c+Math.PI)/bm*n.length)%n.length,u=Math.abs(a("getY"))>2.85?n[1]:n[l];for(let d=0;d<3;d++)u.toArray(s,(o+d)*3)}t.setAttribute("color",new be(s,3));let r=new he(t,new Fe({vertexColors:!0,roughness:.45}));return r.name="beach-volleyball-ball",r}function Lh(i,t){let{skin:e,hair:n,shirt:s,shorts:r,trim:o,style:a}=CM[i.style],c=i.kind==="builder",l=c?7.8:12.2,u=c?13.6:18.3,d=c?i.reach*1.15+.65:0;t(s,0,l,d*.43,3.72,4.1,2.85,c?.24:0),t(r,0,l-3.4,0,3.34,1.65,2.8),t(o,0,l-1.95,2.45,3.03,.48,.59);for(let h of[-1,1]){let f=c?.8:h*i.swing;t(r,h*1.65,c?3.5:6.4,f,1.55,2.3,1.49,c?.8:0),t(e,h*1.68,c?1.72:3.1,c?2.08:f,1.16,2.13,1.16),t(e,h*1.75,1.02,.88+f,1.28,.76,2.08);let g=c?l+.45:l+1.5+i.reach*2.1,x=c?2.4+i.reach*1.72:i.reach*.8,p=c?-.78-i.reach*.27:.12+i.reach*.62;t(e,h*(4.13-i.reach*.46),g,x,1.04,3.7,1.05,p,h*(c?.1:.24+i.reach*.55)),t(e,h*(4.1-i.reach*.53),g+(c?-1.65:i.reach*5.55-2.92),x+(c?2.7:i.reach*1.9),1.14,1.15,1.13),t(e,h*3.48,u,d+.4,.84,.99,.78),t("#493a41",h*1.46,u+.38,d+3.41,.43,.47,.34),t("#c98878",h*2.22,u-.45,d+3.05,.54,.27,.26)}t(n,0,u+.64,d-.53,3.81,4.12,3.64),t(e,0,u,d+.72,3.25,3.29,2.89),t(e,0,u-.22,d+3.59,.53,.54,.59),t("#9b6b66",0,u-1.19,d+3.43,.81,.21,.25),a==="cap"||a==="hat"?(t(o,0,u+3.48,d+.3,3.56,1.47,3.26),t(a==="hat"?"#e7b46d":s,0,u+2.78,d+1.12,a==="hat"?4.56:3.19,.39,a==="hat"?4.26:2.85)):(t(n,-.99,u+2.39,d+1.53,2.47,1.23,2.37),t(a==="bun"?n:o,2,u+3.23,d-1.66,1.41,1.43,1.39))}function Sm(i,t){let e=new ae;e.name="beach-play";let n=IM(i,t);if(!n)return{root:e,update(){},dispose:()=>e.removeFromParent()};let s=n.court?LM(n.court):null,r=n.castle?NM(n.castle):null,o=s?DM():null;s&&e.add(s,o),r&&e.add(r);let a=vm(n),c=0;for(let v of a.actors)Lh(v,()=>c++);let l=new _i(new Le(1,10,7),new Fe({color:"#fff",roughness:.76}),c);l.name="beach-recreation-figures",l.frustumCulled=!1,l.instanceMatrix.setUsage(kn);let u=new _i(new Cn(1,20).rotateX(-Math.PI/2),new ze({color:"#634f55",opacity:.23,transparent:!0,depthWrite:!1}),a.actors.length+ +!!o);u.name="beach-play-contact-shadows",u.frustumCulled=!1,e.add(l,u);let d=0,h=new Map;for(let v of a.actors)Lh(v,b=>{h.has(b)||h.set(b,new Wt(b)),l.setColorAt(d++,h.get(b))});let f=new Oe,g,x=0,p,m;function y(v,{reduceMotion:b=!1,transientTelemetry:E=!1}={}){if(!E){let U=Number.isFinite(g)&&Number.isFinite(v)?se.clamp(v-g,0,.25):0;b||(x+=U),g=v}let C=b?.96:E?v:x;if(C===p&&b===m)return;p=C,m=b;let _=vm(n,C,b),P=0,F=0,L=(U,V,O,K,z)=>{f.position.set(U,V+.16,O),f.rotation.set(0,0,0),f.scale.set(K,1,z),f.updateMatrix(),u.setMatrixAt(F++,f.matrix)};for(let U of _.actors){let{scale:V,yaw:O}=U,K=Math.cos(O),z=Math.sin(O);Lh(U,(tt,H,X,Y,$,rt,yt,_t=0,vt=0)=>{f.position.set(U.x+V*(H*K+Y*z),U.y+X*V,U.z+V*(-H*z+Y*K)),f.rotation.set(0,O,0),f.rotateX(_t),f.rotateZ(vt),f.scale.set(V*$,V*rt,V*yt),f.updateMatrix(),l.setMatrixAt(P++,f.matrix)}),L(U.x,U.ground,U.z,5.25*V,4.47*V)}if(_.ball){let{x:U,y:V,z:O,rotation:K,ground:z}=_.ball;o.position.set(U,V,O),o.rotation.set(.25,K*.59,K),L(U,z,O,2.82,2.52)}l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0}y(0);function w(){e.traverse(v=>{v.isMesh&&(v.isInstancedMesh&&v.dispose(),v.geometry.dispose(),v.material.dispose())}),e.clear(),e.removeFromParent()}return{root:e,update:y,dispose:w}}var UM=new G(0,-1,0),FM=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]],Nh=.01;function Em(i){return(typeof window>"u"?globalThis:window).RoomcraftModels.placementRole(i)}function Tm(i){return!i.isMesh||!i.geometry?!1:(Array.isArray(i.material)?i.material:[i.material]).some(e=>e&&e.visible!==!1&&!e.transparent)}function OM(i){i.updateWorldMatrix(!0,!0);let t=[];i.traverseVisible(a=>{if(!Tm(a))return;let{geometry:c}=a;c.boundingBox||c.computeBoundingBox(),c.boundingBox?.isEmpty()===!1&&t.push(c.boundingBox.clone().applyMatrix4(a.matrixWorld))});let e=Math.min(...t.map(a=>a.min.y));if(!Number.isFinite(e))return null;let n=new Be;for(let a of t)a.min.y<=e+Nh&&n.union(a);let s=n.getCenter(new G),r=n.getSize(new G),o=e-i.position.y;return{bottom:Math.abs(o)<1e-6?0:o,centerX:s.x-i.position.x,centerZ:s.z-i.position.z,radiusX:r.x*.45,radiusZ:r.z*.45}}function BM(i,t){let{type:e}=i;return e==="desk"||e.includes("-desk-")?[43.65,44.4]:e==="table"?[44.65,46.45]:e.includes("dining-set")?[40.65,42.35]:/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(e)?[32.65,33.35]:[t.anchorY-.35,t.anchorY+.35]}function kM(i,t){let[e,n]=BM(i.item,t);if(![e,n,t.root.scale.y].every(Number.isFinite))return null;let s=t.root.clone(!0);s.position.set(0,0,0),s.updateMatrixWorld(!0);let r=new Be().setFromObject(s);return r.isEmpty()?null:{placement:i,probe:s,bounds:r,rootY:t.root.position.y,low:e*s.scale.y,high:n*s.scale.y}}function wm(i,t){let e=t?.[i.item.id]?.position;return[e?.x,e?.y].every(Number.isFinite)?{x:e.x,z:e.y}:i}function Am(i,t){return i.intersectObject(t,!0).find(e=>Tm(e.object))}function Rm(i,{low:t,high:e}){return i?.face?.normal.y>=.92&&i.point.y>=t&&i.point.y<=e}function zM(i,t,e,n,s,r){let o=t.x+e.centerX-n.x,a=t.z+e.centerZ-n.z,{bounds:c,probe:l,rootY:u}=i;if(o-e.radiusX<c.min.x||o+e.radiusX>c.max.x||a-e.radiusZ<c.min.z||a+e.radiusZ>c.max.z)return null;let d=-1/0;for(let[h,f]of FM){r.set(o+h*e.radiusX,c.max.y+1,a+f*e.radiusZ),s.set(r,UM);let g=Am(s,l);if(!Rm(g,i))return null;d=Math.max(d,g.point.y)}return u+d}function Cm(i,t){let e=[],n=[];for(let c of i){let l=t.get(c.item.id);if(!l||Number.isFinite(c.mountY))continue;let u=Em(c.item);if(u==="surface"){let d=kM(c,l);d&&e.push(d)}else if(u==="tabletop"){let d=OM(l.root);d&&n.push({placement:c,foot:d})}}let s=new ls,r=new G;function o(c){let l=new Map;for(let{placement:u,foot:d}of n){let h=wm(u,c),f=null,g=u.baseY,x=1/0;for(let p of e){if(p.placement.baseY!==u.baseY)continue;let m=wm(p.placement,c),y=zM(p,h,d,m,s,r);if(y===null||y<=u.baseY||y<g-Nh)continue;let w=p.placement.item.id,v=Math.hypot(h.x-m.x,h.z-m.z);Math.abs(y-g)<Nh&&(v>x||v===x&&w>f)||(f=w,g=y,x=v)}l.set(u.item.id,{y:g-d.bottom,supportId:f})}return l}function a(c,l){if(Em({type:c})!=="tabletop")return null;let u=new ls(void 0,void 0,l.near,l.far),d=new G,h;for(let f of e){let{x:g,z:x}=f.placement;d.copy(l.ray.origin).sub(r.set(g,f.rootY,x)),u.set(d,l.ray.direction);let p=Am(u,f.probe);p&&(!h||p.distance<h.hit.distance||p.distance===h.hit.distance&&f.placement.item.id<h.surface.placement.item.id)&&(h={hit:p,surface:f,x:g,z:x})}return!h||!Rm(h.hit,h.surface)?null:{x:h.x+h.hit.point.x,y:h.z+h.hit.point.z}}return{resolve:o,projectTabletop:a}}var{PI:Cl,sin:ks,cos:Il}=Math,Ci=Cl*2,HM=new G(0,1,0),Bs=["#86684f","#9a7c5b","#735844"],Dh=["#92745a","#ac8f69","#785c49"],Uh=["#537759","#6b8a55","#849a58","#a0ab63"],Fh=["#3e6251","#4d7056","#61815d","#789365"],Oh=["#4a6653","#567552","#6b8659","#819863"],VM=["#517553","#64845a","#799660","#98a869"],GM=["#617d69","#72917a","#8ea17e","#a7b08a"],WM=["#62785f","#789170","#9479a5","#aa8db4","#c0a6c3"],Im=240,XM=new Set(["windy","windy-variant"]),$o=Object.freeze({"fan-palm":Object.freeze({height:113,radius:.46}),"date-palm":Object.freeze({height:134,radius:.49}),cypress:Object.freeze({height:132,radius:.21}),"shore-pine":Object.freeze({height:109,radius:.33}),"coast-oak":Object.freeze({height:103,radius:.43}),olive:Object.freeze({height:94,radius:.46}),jacaranda:Object.freeze({height:100,radius:.43})});function Pm(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function wn(i,t,e){return[Il(i)*t,e,ks(i)*t]}function hn(i,[t,e,n]){return[i[0]+t,i[1]+e,i[2]+n]}function YM(i,t,e,n,s){let r=(c,l)=>i.add(c,l,t,e,n);function o(c,l,u,d,h,f=7){let g=new G(...l),x=new G(...u),p=x.clone().sub(g),m=new tn().setFromUnitVectors(HM,p.clone().normalize()),y=new en(h,d,p.length(),f),w=g.lerp(x,.5);r(y.applyQuaternion(m).translate(w.x,w.y,w.z),c)}function a(c,l,u,d=.13,h=6){let f=new Le(1,9,h),g=f.getAttribute("position"),x=s()*Ci;for(let p=0;p<g.count;p++){let m=g.getX(p),y=g.getY(p),w=g.getZ(p),v=1+d*(ks(m*5.8+y*3.2+w*2.1+x)*.7+Il(w*7.8-y*2.2+x)*.3);g.setXYZ(p,m*v*u[0],y*v*u[1],w*v*u[2])}f.computeVertexNormals(),r(f.translate(...l),c)}return{draw:r,branch:o,crown:a,random:s}}function Bh(i,t,e,n,s,r,o){let a=[Il(e),ks(e)],c=[-a[1],a[0]],l=[[0,.09],[.25,.68],[.5,1],[.76,.64],[1,.018]],u=i.positions.length/3;for(let[d,[h,f]]of l.entries()){let g=s*f,x=t[0]+h*n*a[0],p=t[1]+ks(h*Cl)*r-o*h*h,m=t[2]+h*n*a[1];for(let w of[-1,0,1])i.positions.push(x+w*g*c[0],p+(w===0?g*.29:0),m+w*g*c[1]),i.uvs.push((w+1)*.5,h);if(d===0)continue;let y=u+(d-1)*3;for(let w of[0,1]){let v=y+w;i.indices.push(v,v+1,v+3,v+1,v+4,v+3)}}}function qM(i,t,e){let n=new ce;n.setAttribute("position",new Zt(e.positions,3)),n.setAttribute("uv",new Zt(e.uvs,2)),n.setIndex(e.indices),n.computeVertexNormals(),i(n,t)}function ZM(i,t,e,n){let{draw:s,branch:r,crown:o,random:a}=i,c=t*(n?.063:.125),l=x=>wn(e,c*x*x,t*x*(n?.85:.86)),u=x=>t*(n?.029:.024)*(1-.53*x),d=n?5:6;for(let x=0;x<d;x++){let p=x/d,m=(x+1)/d;r(Dh[0],l(p),l(m),u(p),u(m),9)}for(let x=1;x<=13;x++){let p=x*.067;r(Dh[x%3?1:2],l(p-.0045),l(p+.0045),u(p)*1.04,u(p)*1.04,9)}let h=l(1);o(Uh[0],h,[t*.045,t*.036,t*.048],.08,5);for(let x=0;x<4;x++)o(Dh[2],hn(h,wn(e+x*Ci/4,t*.034,-t*.017)),[t*.014,t*.019,t*.014],.06,4);let f=Uh.map(()=>({positions:[],uvs:[],indices:[]})),g=n?9:10;for(let x=0;x<g;x++){let p=e+x*Ci/g+(a()-.5)*.18,m=x%3===0,y=t*((m?.35:.29)+(a()-.5)*.07),w=t*(m?.026:.077),v=t*(m?.072:.025);if(Bh(f[(x+1)%4],h,p,y,t*.012,w,v),n){let b=hn(h,wn(p,y*.43,w*.7));for(let E=-3;E<=3;E++)Bh(f[(x+E+4)%4],b,p+E*.19,y*(.58-Math.abs(E)*.055),t*(.016-Math.abs(E)*.0018),w*.32,v*.84)}else for(let b=0;b<7;b++){let E=.19+b*.104,C=hn(h,wn(p,y*E,ks(E*Cl)*w-v*E*E));for(let _ of[-1,1])Bh(f[(x+b+(_>0?1:0))%4],C,p+_*(.83-E*.37),t*(.095-E*.048),t*(.0095-E*.003),t*.014,t*.025)}}for(let[x,p]of f.entries())qM(s,Uh[x],p)}function kh(i,t,e,n,s=.84){let{branch:r}=i,o=a=>wn(e,t*n*(a*a+.16*ks(Cl*a)),t*a*s);for(let a=0;a<4;a++){let c=a*.25,l=c+.25;r(Bs[0],o(c),o(l),t*(.047-c*.032),t*(.047-l*.032),9)}for(let a=0;a<4;a++){let c=e+a*Ci/4;r(Bs[2],wn(c,t*.071,t*.012),o(.125),t*.006,t*.021,5),r(Bs[1],wn(c,t*.039,t*.025),hn(o(.36),wn(c,t*.031,0)),t*.004,t*.002,4)}return o}function JM(i,t,e){let{crown:n,random:s}=i,r=kh(i,t,e,.018,.94);n(Fh[0],r(.655),[t*.12,t*.344,t*.11],.09,6);for(let[o,a,c,l,u]of[[.38,.068,.094,.16,6],[.54,.078,.082,.18,6],[.69,.06,.068,.17,5],[.82,.045,.055,.13,4],[.91,.025,.039,.085,3]])for(let d=0;d<u;d++){let h=e+d*Ci/u+o*2.5,f=hn(r(o),wn(h,t*a,t*((s()-.5)*.035)));n(Fh[(d+u)%4],f,[t*c,t*l*(.87+s()*.18),t*c*.84],.16,5)}n(Fh[2],hn(r(.98),[0,t*.043,0]),[t*.038,t*.038,t*.032],.12,5)}function $M(i,t,e){let{branch:n,crown:s,random:r}=i,o=kh(i,t,e,.045,.95);for(let[a,c,l]of[[.38,.195,6],[.55,.175,6],[.7,.132,5],[.83,.093,4]])for(let u=0;u<l;u++){let d=e+u*Ci/l+a*7+(r()-.5)*.22,h=o(a),f=hn(h,wn(d,t*c,t*(.02+r()*.028)));n(Bs[1],h,f,t*.017,t*.0037,6);let g=hn(f,[0,t*.029,0]);s(Oh[u%3],g,[t*c*.46,t*.054,t*c*.45],.21,5),s(Oh[(u+2)%4],hn(g,wn(d-.18,-t*c*.35,t*.038)),[t*c*.48,t*.057,t*c*.44],.18,5)}s(Oh[3],hn(o(1),[0,t*.012,0]),[t*.082,t*.066,t*.075],.14,5)}function KM(i,t,e,n){let{branch:s,crown:r,random:o}=i,a=n==="olive",c=n==="jacaranda",l=a?GM:c?WM:VM,u=kh(i,t,e,a?.1:.034,a?.78:.84),d=a?5:6;for(let f=0;f<d;f++){let g=e+f*Ci/d+(o()-.5)*.33,x=u(.46+o()*.12),p=t*(.16+o()*.07),m=hn(x,wn(g,t*.12,p*.58)),y=hn(x,wn(g+.16,t*(.19+o()*.052),p));s(Bs[1],x,m,t*.026,t*.016,7),s(Bs[0],m,y,t*.0165,t*.0045,6);let w=t*(.092+o()*.03);r(l[f%2],hn(y,[0,t*.024,0]),[w,t*(a?.064:.104),w*.87],.21,5);for(let v of[-1,1]){let b=hn(y,wn(g+v*1.18,t*.055,t*.05));s(Bs[0],m,b,t*.012,t*.003,5);let E=t*(.063+o()*.027);r(l[c?2+(f+(v>0?1:0))%3:1+f%3],hn(b,[0,t*.022,0]),[E,E*(a?.63:.88),E*.91],.21,5)}}let h=hn(u(1),[0,t*.023,0]);r(l[2],h,[t*.15,t*(a?.11:.12),t*.14],.21,6),r(l.at(-1),hn(h,wn(e+.9,t*.062,t*.058)),[t*.093,t*.074,t*.082],.18,5)}function Lm(i,t,e){let n=Math.imul(Math.round(i*16),374761393)^Math.imul(Math.round(t*16),668265263);return Number.isFinite(e)?e:n}function Nm(i,t){return Number.isFinite(t)?se.clamp(t,32,200):$o[i].height}function jM(i,{kind:t,x:e,z:n,groundY:s,height:r,seed:o}={}){if(!Object.hasOwn($o,t)||![e,n,s].every(Number.isFinite))return!1;let a=Nm(t,r),c=Pm(Lm(e,n,o)),l=c()*Ci,u=YM(i,e,s,n,c);return t==="fan-palm"||t==="date-palm"?ZM(u,a,l,t==="fan-palm"):t==="cypress"?JM(u,a,l):t==="shore-pine"?$M(u,a,l):KM(u,a,l,t),!0}function QM(i=0,t={}){let{windSpeed:e,windBearing:n,reduceMotion:s,condition:r}=t,o=Number.isFinite(e)?se.clamp(e,0,22):XM.has(r)?6:0,a=Number.isFinite(n)?(n%360+360)%360:270,c=se.degToRad(a),l=Number.isFinite(i)?Math.max(0,i)%Im:0;return{x:-ks(c),z:Il(c),phase:Ci*l/Im,strength:s?0:o*.0048}}var tS=`
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
`;function Dm(i){let t=new Set,e={roomcraftTreeDirection:{value:new Rt(1,0)},roomcraftTreeStrength:{value:0},roomcraftTreePhase:{value:0}};function n(o){t.has(o)||(t.add(o),o.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${tS}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          objectNormal.y -= dot(objectNormal.xz, roomcraftTreeDrift()) * roomcraftTreeBend() * (2.0 / 0.84);`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float treeBend = roomcraftTreeBend();
          transformed.xz += roomcraftTreeDrift() * roomcraftTreeWind.y * treeBend * treeBend;`)},o.customProgramCacheKey=()=>"roomcraft-tree-wind-v1")}function s(o={}){let{kind:a,height:c,x:l,z:u,seed:d}=o;if(!Object.hasOwn($o,a))return!1;let h=Nm(a,c),f=Pm(Lm(l,u,d))()*Ci;return jM({add(g,x,...p){let m=g.getAttribute("position"),y=new Float32Array(m.count*3);for(let w=0;w<m.count;w++)y[w*3]=m.getY(w)/h,y[w*3+1]=h,y[w*3+2]=f;g.setAttribute("roomcraftTreeWind",new be(y,3)),n(i.material(x)),i.add(g,x,...p)}},o)}function r(o,a){let c=QM(o,a);e.roomcraftTreeDirection.value.set(c.x,c.z),e.roomcraftTreeStrength.value=c.strength,e.roomcraftTreePhase.value=c.phase}return{add:s,update:r}}var Fr=Math.PI/180,Gh=14,Xm=56,eS=21,Vn=-111,hi=-108,Ym=14,nS=28,Ko=28,Um={minX:0,maxX:1536,minZ:0,maxZ:1024},zh={oak:["#d8ad86","#aa775d","board"],walnut:["#a57b6e","#755952","board"],ash:["#e5caaa","#b79681","board"],ivory:["#eee0cc","#b9a494","tile"],blue:["#b7c9ca","#81999e","tile"],sage:["#b2bd9b","#7f9a82","tile"],terrazzo:["#e0cbba","#a8878b","stone"],patio:["#e5cfb2","#a98d7e","tile"]},Hh={graphite:["#eee0c9","#514855","#725d6d"],plaster:["#f4e6d4","#c3a393","#b18b84"],sage:["#dce0bf","#8fa18c","#667d74"],walnut:["#d0a991","#a47d6f","#755a56"]},iS=new Set(["lightning-rainy","pouring","rainy","snowy-rainy"]),sS=new Set(["snowy","snowy-rainy"]),Fm={presenceSwitch:39,wallSconce:40,wallUnit:48,thermostat:42};function Dl(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Nl(i,t,e){let n=!1;for(let s=0,r=i.points.length-1;s<i.points.length;r=s++){let o=i.points[s],a=i.points[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(n=!n)}return n}function qm(i,t,e,n=null){let s=null;for(let r of i){let o=(t-r.x1)*r.dx+(e-r.y1)*r.dz;if(o<0||o>r.length||n!==null&&Math.abs(Math.cos(n-r.angle))<.82)continue;let a=r.x1+o*r.dx,c=r.y1+o*r.dz,l=Math.hypot(a-t,c-e);l<(s?.distance??1/0)&&(s={wall:r,t:o,centerX:a,centerZ:c,distance:l})}return s}function Zm(i,t,e,n){let s=i.some(o=>Nl(o,e-t.dz*23,n+t.dx*23));return i.some(o=>Nl(o,e+t.dz*23,n-t.dx*23))&&!s?-1:1}function rS(i,t,e){if(!Object.hasOwn(Fm,e.type))return null;let n=qm(t,e.x,e.y);if(!n||n.distance>38)return null;let{wall:s,centerX:r,centerZ:o}=n,a=(e.x-r)*-s.dz+(e.y-o)*s.dx,c=Math.abs(a)>4?Math.sign(a):Zm(i,s,r,o),l=(Gh/2+4)*c;return{x:r-s.dz*l,z:o+s.dx*l,angle:s.angle+(c<0?Math.PI:0),mountY:Math.min(Fm[e.type],Xm-8)}}function Om(i){if(![i?.x1,i?.y1,i?.x2,i?.y2].every(Number.isFinite))return null;let t=i.x2-i.x1,e=i.y2-i.y1,n=Math.hypot(t,e);return n<1?null:{...i,dx:t/n,dz:e/n,length:n,angle:Math.atan2(e,t),openings:[]}}function Bm(i,[t,e,n,s]){return i.x1===t&&i.y1===e&&i.x2===n&&i.y2===s||i.x1===n&&i.y1===s&&i.x2===t&&i.y2===e}function oS(i,[t,e,n,s]){return t===n&&i.x1===t&&i.x2===t?Math.min(i.y1,i.y2)<=Math.min(e,s)&&Math.max(i.y1,i.y2)>=Math.max(e,s):e===s&&i.y1===e&&i.y2===e?Math.min(i.x1,i.x2)<=Math.min(t,n)&&Math.max(i.x1,i.x2)>=Math.max(t,n):!1}function km(){return{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}}function Pl(i,t,e){i.minX=Math.min(i.minX,t),i.maxX=Math.max(i.maxX,t),i.minZ=Math.min(i.minZ,e),i.maxZ=Math.max(i.maxZ,e)}function Jm(i){return Object.hasOwn(Hh,i.finish)?Hh[i.finish]:Hh.graphite}function $m(i,t,e){let n=t-i.x,s=e-i.z,r=Math.cos(i.angle),o=Math.sin(i.angle);return[n*r+s*o,-n*o+s*r]}function zm(i,t,e){let[n,s]=$m(i,t,e);if(Math.abs(n)>i.item.w/2+5||Math.abs(s)>i.item.h/2+5)return null;let r=se.clamp(s/i.item.h+.5,0,1);return hi-hi*r}function Ll(i,t,e){return Nl(i,t,e)?!0:i.points.some((n,s)=>{let r=i.points[(s+1)%i.points.length],o=r.x-n.x,a=r.y-n.y,c=o*o+a*a,l=c?se.clamp(((t-n.x)*o+(e-n.y)*a)/c,0,1):0;return Math.hypot(t-n.x-l*o,e-n.y-l*a)<=Gh/2})}function aS(i,t,e){let n=(i.x1+i.x2)/2,s=(i.y1+i.y2)/2,r=t.some(d=>Ll(d,n,s)),o=t.some(d=>Yo(d)&&Ll(d,n,s)&&Ll(d,i.x1,i.y1)&&Ll(d,i.x2,i.y2)),a=r?0:Vn,c=a;if(!o)for(let d of e){let h=zm(d,i.x1,i.y1),f=zm(d,i.x2,i.y2);if(h!==null&&f!==null){a=h,c=f;break}}let[,l,u]=Jm(i);return{...i,base1:a,base2:c,color:i.finish?l:"#896e79",postColor:i.finish?u:"#9f8183",posts:Math.min(120,Math.max(1,Math.ceil(i.length/nS)))}}function Wh(i){let t=i?.editableReferenceVersion>=8;if(i?.version!==2||!Array.isArray(i.rooms)||!Array.isArray(i.walls)||!Array.isArray(i.items))throw new Error("Storybook requires a Roomcraft v2 layout with rooms, walls and items.");let e=i.rooms.filter(b=>b?.points?.length>=3&&b.points.every(E=>Number.isFinite(E?.x)&&Number.isFinite(E?.y)));if(!e.length&&(!t||i.rooms.length))throw new Error("Storybook could not find a valid room polygon.");let n=t?e.filter(b=>!Yo(b)):e,s=i.walls.map(Om).filter(Boolean),r=s.filter(b=>b.kind!=="fence"),o=i.items.filter(b=>typeof b?.id=="string"&&typeof b.type=="string"&&[b.x,b.y,b.w,b.h].every(Number.isFinite)&&b.w>0&&b.h>0),a=km(),c=km(),l=(b,E)=>Pl(a,b,E);for(let b of e)for(let E of b.points)l(E.x,E.y);for(let b of s)l(b.x1,b.y1),l(b.x2,b.y2);for(let b of n)for(let E of b.points)Pl(c,E.x,E.y);for(let b of r)Pl(c,b.x1,b.y1),Pl(c,b.x2,b.y2);let u={...Number.isFinite(c.minX)?c:Number.isFinite(a.minX)?a:Um},d=new Map(r.map(b=>[b.id,b])),h=!t&&["w1","w2","w3","w4","w5","w6","w7","w8","w9","w11","w12","w13","w18"].every(b=>d.has(b))?{left:u.minX-108,deckEdge:u.minX-10,stepTop:u.minZ+14,stepBottom:u.maxZ+25,deckBottom:u.maxZ+82,northDeck:[[u.minX-10,d.get("w1").y1+57],[d.get("w2").x1,d.get("w1").y1+57],[d.get("w3").x1,d.get("w3").y1],[d.get("w3").x2,d.get("w3").y2],[u.minX-10,d.get("w4").y2]].map(([b,E])=>({x:b,y:E})),southDeck:[[u.minX-10,d.get("w6").y1],[d.get("w7").x1,d.get("w7").y1],[d.get("w7").x2,d.get("w7").y2],[d.get("w8").x1,u.maxZ+82],[u.minX-10,u.maxZ+82]].map(([b,E])=>({x:b,y:E})),recess:{x1:d.get("w12").x2,x2:d.get("w18").x1,z1:Math.min(d.get("w11").y2,d.get("w12").y2),z2:d.get("w13").y2}}:null,f=r.filter(b=>h?!(b.id==="w3"&&Bm(b,[400,408,342,468]))&&!(b.id==="w7"&&Bm(b,[248,590,302,651])):!0);if(h){l(h.left,h.stepTop),l(h.deckEdge,h.deckBottom);let{x1:b,x2:E,z1:C}=h.recess;if(E>b){let _=[[b,d.get("w12").y2,b,C],[b,C,E,C]];for(let[P,F]of _.entries()){if(f.some(z=>oS(z,F)))continue;let[L,U,V,O]=F,K=Om({id:`reference-recess-${P}`,x1:L,y1:U,x2:V,y2:O});K&&f.push(K)}}}let g=new Map;for(let b of o.filter(E=>E.type==="window")){let E=qm(f,b.x,b.y,(b.rotation||0)*Fr);if(!E||E.distance>27)continue;let{wall:C,t:_,centerX:P,centerZ:F}=E,L=Math.max(1,_-b.w/2+1),U=Math.min(C.length-1,_+b.w/2-1);if(U-L<14)continue;C.openings.push({start:L,end:U});let V=Zm(n,C,P,F),O=C.angle+(V<0?Math.PI:0),K=(L+U)/2;g.set(b.id,{x:C.x1+K*C.dx,z:C.y1+K*C.dz,angle:O,window:{...b,w:U-L+2,rotation:O/Fr}})}let x=o.filter(b=>b.type==="garageDoor"),p=o.map(b=>{let E=b.type==="cameraThumbnail"&&x.some(K=>_S(b,K))?Vn:jm(b.type),C=b.type==="controlZone"&&(b.visualKind==="window"||b.entityId?.startsWith("cover.")),_=g.get(b.id)??rS(n,f,b);if(C){let K=52;for(let z of g.values()){let tt=Math.hypot(z.x-b.x,z.z-b.y);tt<K&&(_=z,K=tt)}}let P=_?.x??b.x,F=_?.z??b.y,L=_?.angle??(Number.isFinite(b.rotation)?b.rotation*Fr:0),U=b.type==="stairs"?1536:300,V=Math.min(U,(Math.abs(Math.cos(L))*b.w+Math.abs(Math.sin(L))*b.h)/2),O=Math.min(U,(Math.abs(Math.sin(L))*b.w+Math.abs(Math.cos(L))*b.h)/2);return l(P-V,F-O),l(P+V,F+O),{item:b,x:P,z:F,baseY:E,angle:L,window:_?.window,mountY:_?.mountY,isBlind:C}});for(let b of f)b.openings.sort((E,C)=>E.start-C.start||E.end-C.end);let m=p.filter(({item:b})=>b.type==="stairs").map(b=>{let{item:E,x:C,z:_,angle:P}=b,F=Number.isInteger(E.steps)&&E.steps>=2&&E.steps<=40?E.steps:Ym,L=Math.min(46,Math.max(12,E.w*.47)),U=-E.h/2-L;for(let V of[-E.w/2,E.w/2])l(C+V*Math.cos(P)-U*Math.sin(P),_+V*Math.sin(P)+U*Math.cos(P));return{...b,steps:F,apronDepth:L}}),y=s.filter(b=>b.kind==="fence").map(b=>aS(b,e,m)),w=Mp(e,h,t),v=Ep(f.map(b=>({...b,palette:Jm(b)})),Gh,Xm,eS);return Number.isFinite(a.minX)||Object.assign(a,Um),{rooms:e,walls:f,fences:y,stairs:m,placements:p,bounds:a,houseBounds:u,reference:h,floorStructure:w,wallStructure:v,editableStructure:t}}function Hm(i,t){for(let[e,[n,s]]of t.slice(0,-1).entries())e===0?i.moveTo(n,-s):i.lineTo(n,-s);return i.closePath(),i}function Xh([i,...t]){let e=Hm(new On,i);return e.holes=t.map(n=>Hm(new Ts,n)),e}function cS(i,t,e){let n=i.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d");if(!s)return null;let[r,o,a]=t,c=Dl(e);if(s.fillStyle=r,s.fillRect(0,0,256,256),s.strokeStyle=o,s.fillStyle=o,a==="board")for(let u=0;u<8;u++){let d=u*32;s.globalAlpha=.04+c()*.14,s.fillRect(0,d,256,32),s.globalAlpha=.48,s.fillRect(0,d,256,1.2);let h=30+u*47%181;s.fillRect(h,d,1,32),s.globalAlpha=.15;for(let f=0;f<15;f++){let g=c()*256,x=d+3+c()*27,p=12+c()*46;s.beginPath(),s.moveTo(g,x),s.quadraticCurveTo(g+p/2,x+c()*2-1,g+p,x),s.stroke()}}else if(a==="tile")for(let u=0;u<8;u++)for(let d=0;d<8;d++)s.globalAlpha=c()*.14,s.fillRect(d*32,u*32,32,32),s.globalAlpha=.35,s.strokeRect(d*32+.5,u*32+.5,31,31);else for(let u=0;u<160;u++)s.globalAlpha=.12+c()*.24,s.fillRect(c()*256,c()*256,1+c()*4,1+c()*3);let l=new xr(n);return l.colorSpace=qe,l.wrapS=l.wrapT=Ss,l}function Vh(i){let t=new Map,e=new _e,n=new tn,s=new G,r=new G(0,1,0),o=new G(1,1,1),a=new Map,c=f=>(a.has(f)||a.set(f,new vr({color:f})),a.get(f));function l(f,g,x,p,m,y=0){n.setFromAxisAngle(r,y),e.compose(s.set(x,p,m),n,o),f.applyMatrix4(e);let w=c(g);t.has(w)||t.set(w,[]),t.get(w).push(f)}function u(f,g,x,p,m,y,w,v=0){f>0&&g>0&&x>0&&l(new we(f,g,x),p,m,y,w,v)}function d(f,g,x,p,m,y,w){let v=new Le(1,9,6);v.scale(f,g,x),l(v,p,m,y,w)}function h(){for(let[f,g]of t){let x=Pn(g);if(!x){for(let p of g)i.add(new he(p,f));continue}i.add(new he(x,f));for(let p of g)p.dispose()}t.clear()}return{add:l,ball:d,box:u,material:c,finish:h}}function lS(i,t,e,n){let s=new Map;for(let{surface:r,polygons:o}of e.floorStructure.regions){let a=Object.hasOwn(zh,r)?r:"oak";if(!s.has(a)){let c=zh[a],l=cS(n,c,141+Object.keys(zh).indexOf(a)*977);s.set(a,new vr({color:l?"#fffdf8":c[0],map:l}))}for(let c of o){let l=new ns(Xh(c));l.rotateX(-Math.PI/2);let u=l.getAttribute("position"),d=l.getAttribute("uv");for(let f=0;f<d.count;f++)d.setXY(f,u.getX(f)/248,u.getZ(f)/248);let h=new he(l,s.get(a));h.receiveShadow=!0,i.add(h)}}for(let r of e.floorStructure.footprint)Vm(t,r,-22,0,"#a67e76",!0);for(let r of e.floorStructure.foundation)Vm(t,r,Vn-1,-22,"#a18e84",!0)}function uS(i){if(!i.index){let t=i.getAttribute("position").count,e=new Uint32Array(t);for(let n=0;n<t;n++)e[n]=n;i.setIndex(new be(e,1))}return i}function Vm(i,t,e,n,s,r=!1){let o=new Fi(Xh(t),{depth:n-e,bevelEnabled:!1});if(r){let a=o.getAttribute("position"),c=[];for(let l=0;l<a.count;l+=3)[l,l+1,l+2].some(u=>a.getZ(u)<n-e-.001)&&c.push(l,l+1,l+2);o.setIndex(c)}o.rotateX(-Math.PI/2),i.add(uS(o),s,0,e,0)}function hS(i,t){let e=[],n=[],s=[];for(let[[o,a],[c,l]]of i){let u=e.length/3,d=Math.hypot(c-o,l-a);e.push(o,0,a,o,t,a,c,t,l,c,0,l),n.push(u,u+1,u+2,u,u+2,u+3),s.push(0,0,0,t,d,t,d,0)}let r=new ce;return r.setAttribute("position",new Zt(e,3)),r.setAttribute("uv",new Zt(s,2)),r.setIndex(n),r.computeVertexNormals(),r}function Gm(i,t){let e=new ns(Xh(i));if(e.rotateX(-Math.PI/2),t){let n=e.index.array;for(let s=0;s<n.length;s+=3)[n[s+1],n[s+2]]=[n[s+2],n[s+1]];e.computeVertexNormals()}return e}function fS(i,t){for(let{faces:e,bottom:n,top:s,surface:r}of t.wallStructure){for(let o of e.top)i.add(Gm(o,!1),r,0,s,0);for(let o of e.bottom)i.add(Gm(o,!0),r,0,n,0);e.sides.length&&i.add(hS(e.sides,s-n),r,0,n,0)}}function dS(i,t){let e=new Set;for(let n of t){let{x1:s,y1:r,x2:o,y2:a,base1:c,base2:l,length:u,angle:d,posts:h,color:f,postColor:g}=n,x=l-c,p=new we(Math.hypot(u,x),5,7);p.rotateZ(Math.atan2(x,u)),i.add(p,f,(s+o)/2,(c+l)/2+Ko,(r+a)/2,-d);for(let m=0;m<=h;m++){let y=m/h,w=se.lerp(s,o,y),v=se.lerp(r,a,y),b=se.lerp(c,l,y),E=[w,b,v].map(C=>Math.round(C*1e3)).join(",");e.has(E)||(e.add(E),i.box(5,Ko,5,g,w,b+Ko/2,v,-d))}}}function Km(i,t,e,n,s=0,r=0){let o=e/n,a=-hi/n,c=Math.min(5.5,o*.25),l=Math.min(1.8,c*.38);for(let u=0;u<n;u++){let d=r-e/2+o*u,h=u===n-1?0:hi+(u+1)*a,f=h-3;i.box(t,f-Vn,o,"#a98075",s,(Vn+f)/2,d+o/2),i.box(t,3,o-c,u%2?"#e4c5a8":"#d9b79a",s,h-1.5,d+(o+c)/2),i.box(t,3.35,c-l,"#896254",s,f+3.35/2,d+(c+l)/2),i.box(t,3.4,l,"#f5d8b5",s,f+3.4/2,d+l/2)}}function pS({item:i,steps:t,apronDepth:e}){let n=new ae,s=Vh(n);Km(s,i.w,i.h,t);let r=hi-Vn;return s.box(i.w,r,e,"#c8b79e",0,Vn+r/2,-i.h/2-e/2),s.finish(),{root:n,anchorY:hi/2}}function mS(i,t){if(!t.reference)return;let{left:e,deckEdge:n,stepTop:s,stepBottom:r,northDeck:o}=t.reference,a=n-e,c=(n+e)/2,l=Ym,u=r-s,d=u/l,h=hi,f=-h/l;Km(i,a,u,l,c,(s+r)/2);for(let v=0;v<l;v++){let b=s+d*(v+.5),E=h+(v+1)*f;i.box(5,24,5,"#9f8183",e+4,E+12,b)}let g=d*(l-1),x=f*(l-1),p=new we(7,5,Math.hypot(g,x)+5);p.rotateX(-Math.atan2(x,g)),i.add(p,"#896e79",e+4,24-x/2,(s+r)/2),i.box(a+2,3,80,"#cbbda6",c,h-1.5,s-40);let[m,y]=o,w=Math.max(2,Math.ceil((y.x-m.x)/28));i.box(y.x-m.x,5,7,"#896e79",(y.x+m.x)/2,28,m.y);for(let v=0;v<=w;v++)i.box(5,28,5,"#9f8183",m.x+(y.x-m.x)*v/w,14,m.y)}function gS(i){let t=i.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");if(!e)return null;let n=Dl(71293);e.fillStyle="#b1c3a0",e.fillRect(0,0,512,512);for(let r=0;r<92;r++){let o=n()*512,a=n()*512,c=20+n()*56;for(let l of[-512,0,512])for(let u of[-512,0,512]){let d=e.createRadialGradient(o+l,a+u,0,o+l,a+u,c);d.addColorStop(0,r%3?"#dbe0a730":"#466f5630"),d.addColorStop(1,"#b1c3a000"),e.fillStyle=d,e.fillRect(o+l-c,a+u-c,c*2,c*2)}}for(let r=0;r<4200;r++){let o=n()*512,a=n()*512;e.fillStyle=r%2?"#e3e6b33e":"#5e7b5d30",e.fillRect(o,a,1.4+n()*3,1.2+n()*2.8)}let s=new xr(t);return s.wrapS=s.wrapT=Ss,s.repeat.set(15,10),s.colorSpace=qe,s.anisotropy=4,s}function xS(i,t,e,n){let{minX:s,maxX:r,minZ:o,maxZ:a}=t.houseBounds,c=r-s,l=a-o,u=Dl(150741);if(!t.editableStructure){let g=Math.min(90,c*.18),x=t.reference?t.reference.left+g/2:s+g/2;i.box(g,4,115,"#c7baa4",x,-109,o-88);for(let p=0;p<5;p++)i.box(g*.85,1.8,13,"#dbceba",x,-106,o-137+p*20)}let d=[[.06,-.075],[.32,-.09],[.63,-.11],[.92,-.075],[1.045,.32],[1.035,.74],[.84,1.085],[.51,1.08],[.23,1.075],[-.135,.55]];for(let[g,x]of d){let p=s+g*c,m=o+x*l,y=21+u()*24;i.ball(y*.94,9,y*.67,"#6d886a",p,-104,m),i.ball(y*.82,y*.57,y*.69,"#819b76",p+3,-98,m);for(let w=0;w<8;w++){let v=w*2.39996,b=(.2+u()*.5)*y,E=y*(.28+u()*.2),C=["#94ad7f","#a6ba88","#8da878","#bad09c"][w%4];i.ball(E*1.15,E*.8,E,C,p+Math.cos(v)*b,-93+12*u(),m+Math.sin(v)*b*.75)}for(let w=0;w<5;w++){let v=w%2?"#e6c4b1":"#fae6a4",b=p+(u()-.5)*y*1.14,E=m+y*(.62+u()*.43);i.ball(2.3,4.6,2.3,"#819765",b,-106,E),i.ball(3.9,1.8,3.3,v,b,-101.5,E),i.ball(1.2,.9,1.2,"#cb9c57",b,-100.3,E)}}let h=[["cypress",.1,-.1,126],["shore-pine",.81,-.145,119],["fan-palm",.96,-.1,112],["olive",-.075,.42,97],["cypress",1.055,.64,136],["coast-oak",.21,1.14,112],["jacaranda",.82,1.16,118]],f=t.placements.filter(({item:g})=>g.type==="garageDoor"||g.type==="stairs");for(let[g,[x,p,m,y]]of h.entries()){let w=y*$o[x].radius+7,v=s+p*c,b=o+m*l,E=b<o?-1:1,C=v<(s+r)/2?-1:1;for(let[_,P]of[[0,0],[C*(w+20),0],[0,E*(w+20)]]){let F=v+_,L=b+P;if(!(L-w<=e.nearZ||F+w>s&&F-w<r&&L+w>o&&L-w<a||f.some(V=>{let O=F-V.x,K=L-V.z,z=O*Math.cos(V.angle)+K*Math.sin(V.angle),tt=-O*Math.sin(V.angle)+K*Math.cos(V.angle);return Math.abs(z)<V.item.w/2+w&&Math.abs(tt)<V.item.h*.6+w}))){n.add({kind:x,x:F,z:L,groundY:Vn,height:y,seed:7229+g*101});break}}}for(let[g,x,p,m]of[[5633,"date-palm",.065,21],[2081,"fan-palm",.93,20],[7313,"date-palm",.985,32]])n.add({kind:x,x:s+p*c,z:e.farZ-m,groundY:Vn+.68,seed:g})}function yS(i,t,e){let n=Dl(2912),s=t.bounds,r=[],o=t.reference?.recess,a=(w,v)=>!(o&&w>=o.x1&&w<=o.x2&&v>=o.z1&&v<=o.z2)&&!t.rooms.some(b=>(!t.editableStructure||!Yo(b))&&Nl(b,w,v)),c=Math.min(s.minZ,e)-70,l=s.maxZ+70-c;for(let w=0;w<210;w++){let v=s.minX-70+(s.maxX-s.minX+140)*n(),b=c+l*n(),E=n()*180,C=8+n()*8,_=112+n()*34;a(v,b)&&r.push({x:v,z:b,phase:E,length:C,speed:_})}let u=new Float32Array(r.length*6),d=new Float32Array(r.length*3),h=new Float32Array(r.length*3),f=new ce,g=new ce,x=new ce;f.setAttribute("position",new be(u,3).setUsage(kn)),g.setAttribute("position",new be(d,3).setUsage(kn)),x.setAttribute("position",new be(h,3).setUsage(kn));let p=new oo(f,new mr({color:"#d3e4ec",transparent:!0,opacity:.36,depthWrite:!1})),m=new gr(g,new ws({color:"#fff6eb",size:3.2,transparent:!0,opacity:.8})),y=new gr(x,new ws({color:"#c9edf6",size:2.6,transparent:!0,opacity:.83}));return p.frustumCulled=m.frustumCulled=y.frustumCulled=!1,i.add(p,m,y),(w,{condition:v,windSpeed:b,windBearing:E})=>{p.visible=iS.has(v);let C=v==="pouring"||v==="lightning-rainy";if(p.material.opacity=C?.5:.34,m.visible=sS.has(v),y.visible=v==="hail",p.visible||m.visible||y.visible){let _=Number.isFinite(E)?E*Fr:285*Fr,P=se.clamp(b??6,0,22)*.028;for(let[F,L]of r.entries()){let U=65-(L.phase+w*L.speed*(C?1.3:1))%170,V=65-(L.phase+w*20)%170,O=65-(L.phase+w*L.speed*1.55)%170,K=F*6;u.set([L.x,U,L.z,L.x+L.length*P*Math.sin(_),U+L.length,L.z-L.length*P*Math.cos(_)],K),d.set([L.x+Math.sin(w+F)*6,V,L.z],F*3),h.set([L.x,O,L.z],F*3)}f.attributes.position.needsUpdate=p.visible,g.attributes.position.needsUpdate=m.visible,x.attributes.position.needsUpdate=y.visible}}}function jm(i){return i==="garageDoor"?Vn:0}function _S(i,t){let e=i.x-t.x,n=i.y-t.y,s=(t.rotation??0)*Fr,r=Math.cos(s),o=Math.sin(s);return up(t,e*r+n*o,-e*o+n*r)}function vS(i,t,e,n){let s=new G,r=7,o=l=>{let u={left:1/0,top:1/0,right:-1/0,bottom:-1/0};for(let d of l){s.set(...d).project(t);let h=(s.x+1)*e/2,f=(1-s.y)*n/2;u.left=Math.min(u.left,h-r),u.right=Math.max(u.right,h+r),u.top=Math.min(u.top,f-r),u.bottom=Math.max(u.bottom,f+r)}return u},a=i.fences.map(({x1:l,y1:u,x2:d,y2:h,base1:f,base2:g})=>o([[l,f,u],[l,f+Ko,u],[d,g,h],[d,g+Ko,h]])),c=i.stairs.map(({x:l,z:u,angle:d,item:h,apronDepth:f})=>{let g=Math.cos(d),x=Math.sin(d),p=[];for(let m of[-h.w/2,h.w/2])for(let[y,w]of[[-h.h/2-f,hi],[h.h/2,0]])p.push([l+m*g-y*x,w,u+m*x+y*g]);return o(p)});return[...a,...c]}function bS({x:i,z:t,angle:e,item:n,apronDepth:s}){let r=Math.cos(e),o=Math.sin(e),a=-n.w/2,c=n.w/2,l=-n.h/2-s,u=n.h/2;return[[[a,l],[c,l],[c,u],[a,u]].map(([d,h])=>[i+d*r-h*o,t+d*o+h*r].map(f=>Math.round(f*1e5)/1e5))]}function MS(i,t){return(e,n)=>{if(t.contains(e,n))return 0;for(let s of i.stairs){let{item:r,apronDepth:o}=s,[a,c]=$m(s,e,n);if(Math.abs(a)>r.w/2||c>r.h/2||c<-r.h/2-o)continue;if(c<-r.h/2)return hi;let l=Math.min(s.steps,Math.floor(s.steps*(c/r.h+.5))+1);return hi+-hi/s.steps*l}return null}}function Qm(i,t){let e=Wh(t),n=new rl({canvas:i,antialias:!0,alpha:!1,powerPreference:"low-power"});n.resetState();let s=new ts;s.background=new Wt("#d7dfcd");let r=new os(-800,800,450,-450,1,4400),{minX:o,maxX:a,minZ:c,maxZ:l}=e.bounds,u=new Fe({color:"#e8e8d2",map:gS(i.ownerDocument),roughness:.95}),d=new he(new Oi(6200,4200),u);d.rotation.x=-Math.PI/2,d.position.set((o+a)/2,Vn,(c+l)/2),s.add(d);let h=Vh(s),f=Vh(s),g=Dm(f),x=Yp(e),p=qp(h,x,Vn,d.geometry.parameters.width,d.position.x),m,{water:y}=Zp(h,x,Vn,e.houseBounds,d.geometry.parameters.width,d.position.x),w=y.shoreline.reduce((W,ot)=>Math.abs(ot.x-y.focusX)<Math.abs(W.x-y.focusX)?ot:W),v={road:{x:p.centerX,y:p.surfaceY+8,z:(p.lanes[0]+p.lanes[1])/2},coast:{x:y.focusX+16,y:y.y,z:w.z-36},beach:{x:y.focusX,y:y.y+8,z:w.z+37}};xS(h,e,x,g),mS(h,e),lS(s,h,e,i.ownerDocument),fS(h,e),dS(h,e.fences),h.finish(),f.finish();let b=s.children.filter(W=>W.isMesh),E=Ap(n,s,e.bounds);E.markStructure();let C=Wp(y),_=dm(p),P=_m(y),F=Sm(y,x);s.add(C.mesh,_.root,P.root,F.root);let L={},U=yS(s,e,x.sceneryMinZ),V=e.floorStructure.footprint,O=vh(V),K=e.stairs.length?vh(Wm.default.union(V,...e.stairs.map(bS))):O,z=MS(e,O),tt=new ts,H=zp(),X=new Rs("#fff5e1","#c9bfd7",1.8),Y=new as("#fff1d8",1.65);Y.position.set(-4,9,6),tt.add(X,Y);let $={supportsRoute:K.supportsRoute,floorClearance:K.clearance},rt=_h(tt,z,$),yt,_t=rt,vt=new Map,Pt=new Map,ct=new Map,ht=new Map(e.stairs.map(W=>[W.item.id,W]));for(let W of e.placements){let{item:ot,x:R,z:j,baseY:J,angle:dt,window:xt,mountY:mt,isBlind:At}=W,Ct=ot.type==="window"&&xt?xt:ot,te=ht.get(ot.id),kt=te?pS(te):hp(Ct,{window:At?xt:void 0,mountY:mt})??rp(Ct);if(kt){let ge=Pp(ot,kt.root);kt.root.position.set(R,J+ge,j),kt.root.rotation.y=-dt,kt.floorRadius&&(kt.dockFits=O.clearance(R,j)>=kt.floorRadius),s.add(kt.root),Pt.set(ot.id,kt),ot.type==="garageDoor"&&ct.set(kt.root,ot.id),E.register(ot,kt)}vt.set(ot.id,{x:R,z:j,baseY:J,rootY:kt?.root.position.y,object:kt})}let Tt=Cm(e.placements,Pt),Ot=Tt.resolve(),Lt=Ot,It,Jt={...e.bounds,sceneryMinZ:x.sceneryMinZ};for(let W of e.placements){let ot=Pt.get(W.item.id);if(!ot)continue;let R=Ot.get(W.item.id);if(R&&(ot.root.position.y=R.y),ot.root.scale.y!==1||R?.supportId){let{max:j}=new Be().setFromObject(ot.root);Number.isFinite(j.y)&&(Jt.maxY=Math.max(Jt.maxY??92,j.y))}}let pt=[...Pt.values()].filter(W=>W.ambientMotion),bt=new G,Mt=!1,St=0,Et=0,Dt=Vi(),Bt,zt=new ls,jt=new Un(new G(0,1,0),0),q=new G,oe=Object.freeze({state:"unavailable",attributes:Object.freeze({}),presence:"off",active:!1});function $t(W,ot){if(Mt||W<1||ot<1||W===St&&ot===Et)return;St=W,Et=ot;let R=i.ownerDocument.defaultView?.devicePixelRatio||1;n.setPixelRatio(Math.min(R,1.5,Math.sqrt(27e5/(W*ot)))),n.setSize(W,ot,!1),yh(r,Jt,W,ot,Dt,Bt)}function B(W,ot){return Dt=Vi(W),Bt=ot,!Mt&&St>0&&Et>0&&yh(r,Jt,St,Et,Dt,Bt),T()}function T(){return{...Dt}}function et(W){if(typeof W=="string"){if(Object.hasOwn(v,W))return{...v[W]};let ot=vt.get(W);if(!ot)return null;let{x:R,z:j,baseY:J,object:dt}=ot;return dt?{x:R,y:dt.root.position.y+(dt.anchorY??0)*dt.root.scale.y,z:j}:{x:R,y:J+6,z:j}}return[W?.x,W?.y].every(Number.isFinite)?{x:W.x,y:(z(W.x,W.y)??0)+22,z:W.y}:null}function nt(W,ot){return Mt||!Number.isFinite(W)||!Number.isFinite(ot)||St<=0||Et<=0?!1:(zt.setFromCamera(new Rt(W/St*2-1,1-ot/Et*2),r),!0)}function ft(W,ot,R,{preferTabletop:j=!1}={}){if(!nt(W,ot))return null;if(j){let J=Tt.projectTabletop(R,zt);if(J)return J}return jt.constant=-jm(R),zt.ray.intersectPlane(jt,q)?{x:q.x,y:q.z}:null}function k(W,ot){if(!ct.size||!nt(W,ot))return null;let R=[];for(let J of ct.keys())J.traverseVisible(dt=>{dt.isMesh&&R.push(dt)});let j=zt.intersectObjects(R,!1)[0];if(!j||zt.intersectObjects(b,!1).some(J=>J.distance<j.distance-.01))return null;for(let J=j.object;J;J=J.parent)if(ct.has(J))return ct.get(J);return null}function M(W=!1){n.render(s,r);let ot=!W&&H.scene.children.length>0;if(!(!_t?.hasVisibleTracks&&!ot)){n.autoClear=!1;try{n.clearDepth(),ot&&n.render(H.scene,r),_t?.hasVisibleTracks&&n.render(tt,r)}finally{n.autoClear=!0}}}function S(W,ot,R=!1){let j={reduceMotion:ot.reduceMotion===!0,night:ot.night===!0,condition:ot.condition,transientTelemetry:R};_.update(W,j),P.update(W,j),F.update(W,j),g.update(W,ot),C.update(W,ot)}function A(W=0,ot={},R={},{animateTelemetry:j=!0,showTelemetryPosition:J=!0,draftPositions:dt,transientTelemetry:xt=!1}={}){if(Mt||St<1||Et<1)return;let mt=R.reduceMotion===!0,At=!mt&&Number.isFinite(W)?W:0,Ct=j?At:0;!m&&R.traffic&&(m=hm(p),s.add(m.root)),m?.update(W,R.traffic,{reduceMotion:mt,night:R.night===!0,transientTelemetry:xt}),U(Ct,R),L=R,S(W,R,xt);let te=It!==dt;te&&(It=dt,Lt=dt?Tt.resolve(dt):Ot);for(let[ge,fe]of Pt){let Ge=ot[ge]??oe,Te=Ge.position,He=Te&&Number.isFinite(Te.x)&&Number.isFinite(Te.y)&&(!fe.floorRadius||O.clearance(Te.x,Te.y)>=fe.floorRadius);He&&!xt&&(fe.telemetryPosition=Te);let We=xt?He?Te:null:fe.telemetryPosition,wt=dt?.[ge]?.position??(J?We:null),Gt=vt.get(ge);fe.root.position.x=wt?.x??Gt.x,fe.root.position.y=Lt.get(ge)?.y??Gt.rootY,fe.root.position.z=wt?.y??Gt.z,fe.floorRadius&&(fe.root.visible=!!(wt||!J||fe.dockFits)),fe.animate?.(Ge,fe.ambientMotion?At:Ct,!!(He&&J),xt)}E.update(R,ot,u,te);let kt=xt?yt:rt;_t!==kt&&(_t?.setVisible(!1),xt||yt?.setTracks([],0),_t=kt,_t?.setVisible(!0)),_t?.render(W,mt),M(xt)}function N(W,ot,R={}){Mt||(R.transientTelemetry?(!yt&&W?.length&&(yt=_h(tt,z,$),yt.setVisible(!1)),yt?.setTracks(W,ot,R)):rt.setTracks(W,ot,R))}function D(W){if(!(Mt||St<1||Et<1)){S(W,L);for(let ot of pt)ot.animate(oe,W);rt.render(W),M()}}function Q(W){let ot=vt.get(W);if(!ot||St<1||Et<1)return null;let{x:R,z:j,baseY:J,object:dt}=ot;if(dt){if(!dt.root.visible)return null;bt.set(dt.anchorOffset?.x||0,dt.anchorY||0,dt.anchorOffset?.z||0),dt.root.localToWorld(bt)}else bt.set(R,J+6,j);return bt.project(r),{x:(bt.x+1)/2,y:(1-bt.y)/2}}function Z(){if(Mt)return;Mt=!0,rt.dispose(),yt?.dispose(),H.dispose(),m?.dispose(),_.dispose(),P.dispose(),F.dispose();let W=new Set,ot=new Set,R=new Set;s.traverse(j=>{j.geometry&&W.add(j.geometry);for(let J of Array.isArray(j.material)?j.material:[j.material])if(J){ot.add(J);for(let dt of Object.values(J))dt?.isTexture&&R.add(dt)}});for(let j of R)j.dispose();for(let j of W)j.dispose();for(let j of ot)j.dispose();E.dispose(),n.dispose()}return{resize:$t,render:A,anchor:Q,setView:B,getView:T,getDemoFocus:et,projectToPlan:ft,pickGarage:k,exteriorClearance:()=>vS(e,r,St,Et),dispose:Z,hasAmbientMotion:!0,renderAmbient:D,setPeople:N,setDetectionZones:H.setZones,canPlacePerson:(W,ot)=>Number.isFinite(z(W,ot))&&K.clearance(W,ot)>0,get hasPeopleMotion(){return _t?.hasMotion??!1}}}var tg=.35,Ul=7.5,SS=8;function eg(i,{getView:t,onChange:e,canStart:n=()=>!0}){let s=new Map,r=()=>{let p=t();return p?.preset==="free"?p:null},o=()=>{let[p,m]=s.values();return Math.hypot(p.x-m.x,p.y-m.y)};function a(p,m){let y=Vi({...p,...m});(y.azimuth!==p.azimuth||y.tilt!==p.tilt||y.zoom!==p.zoom)&&e(y)}function c(p){i.hasPointerCapture(p)&&i.releasePointerCapture(p)}function l(){for(let p of[...s.keys()])s.delete(p),c(p)}function u(p){if(!r()||p.defaultPrevented||p.button!==0||!n(p))return;let m=p.pointerType==="touch";if(!(s.size>=2||s.size&&(!m||!s.values().next().value.touch))){try{i.setPointerCapture(p.pointerId)}catch{return}s.size||i.focus({preventScroll:!0}),s.set(p.pointerId,{x:p.clientX,y:p.clientY,touch:m}),p.preventDefault()}}function d(p){let m=s.get(p.pointerId);if(!m)return;let y=r();if(!y){l();return}let w=s.size===2,v=w?o():0,b={x:p.clientX,y:p.clientY,touch:m.touch};if(s.set(p.pointerId,b),p.preventDefault(),w){let E=o();Math.min(v,E)>=SS&&a(y,{zoom:y.zoom*E/v});return}a(y,{azimuth:y.azimuth-(b.x-m.x)*tg,tilt:y.tilt+(b.y-m.y)*tg})}function h(p){s.delete(p.pointerId)&&c(p.pointerId)}function f(p){let m=r();if(!m||!Number.isFinite(p.deltaY)||!p.deltaY)return;let y=p.deltaMode===1?16:p.deltaMode===2?i.clientHeight:1,w=Math.max(-350,Math.min(350,p.deltaY*y));p.preventDefault(),p.stopPropagation(),a(m,{zoom:m.zoom*Math.exp(-w*.002)})}function g(p){let m=r();if(!m||p.altKey||p.ctrlKey||p.metaKey||p.defaultPrevented)return;let y;switch(p.key){case"ArrowLeft":y={azimuth:m.azimuth-Ul};break;case"ArrowRight":y={azimuth:m.azimuth+Ul};break;case"ArrowUp":y={tilt:m.tilt-Ul};break;case"ArrowDown":y={tilt:m.tilt+Ul};break;case"+":case"=":y={zoom:m.zoom*1.1};break;case"-":y={zoom:m.zoom/1.1};break;default:return}p.preventDefault(),p.stopPropagation(),a(m,y)}let x=[["pointerdown",u],["pointermove",d],["pointerup",h],["pointercancel",h],["lostpointercapture",h],["wheel",f,{passive:!1}],["keydown",g]];for(let[p,m,y]of x)i.addEventListener(p,m,y);return{cancel:l,dispose(){l();for(let[p,m,y]of x)i.removeEventListener(p,m,y)}}}var tA=1200*1e3,eA=new Map([["m/s",1],["km/h",1/3.6],["mph",.44704],["kn",.514444],["ft/s",.3048]]);function ng(i,t,e){let n=[],s=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]],r=[...i].sort((a,c)=>(a.priority??0)-(c.priority??0)),o=(a,c,l)=>Math.min(Math.max(a,c),l);for(let a of r){let c=Math.min(a.w,t),l=Math.min(a.h,e),u=a.keepClear??[],d=u.length>0,h=d?5:3,f,g,x=1/0;for(let m=0;m<=h&&(d||!f);m++)for(let[y,w]of m===0?s.slice(0,1):s.slice(1)){let v=o(a.x+y*m*34,c/2,t-c/2),b=o(a.y+w*m*34,l/2,e-l/2);if(n.some(_=>Math.abs(v-_.x)<(c+_.w)/2+2&&Math.abs(b-_.y)<(l+_.h)/2+2))continue;if(m<=3&&!f&&(f={...a,x:v,y:b,w:c,h:l}),!d)break;if(u.some(_=>v+c/2>_.left&&v-c/2<_.right&&b+l/2>_.top&&b-l/2<_.bottom))continue;let C=Math.hypot(v-a.x,b-a.y);C<x&&(g={...a,x:v,y:b,w:c,h:l},x=C)}let p=g??f;p&&n.push(p)}return n}var og=Fl(cl(),1),ig="roomcraft-presence-v1",sg=4500,ag=/^sensor\.[a-z0-9_]+$/,ES=4,Yh=1536,qh=1024,wS=[[[0,0],[Yh,0],[Yh,qh],[0,qh],[0,0]]],rg=[[0,0,0],[25,-135,100],[50,-170,140],[100,-210,210],[150,-240,270],[200,-260,290],[250,-290,310],[300,-320,340],[350,-320,360],[400,-300,340],[450,-290,310],[500,-250,280],[550,-190,200],[580,-100,120],[600,0,0]],TS=new Map([["inovelli-vzm32-sn",{rangeMeters:6,ring:[...rg.map(([i,t])=>[t,i]),...rg.slice(1,-1).reverse().map(([i,,t])=>[t,i])]}]]);function cg(i,t){return i>=0&&i<=Yh&&t>=0&&t<=qh}function lg(i){return Array.isArray(i)&&i.length===6&&i.every(t=>Number.isFinite(t)&&Math.abs(t)<=1e4)&&Math.abs(i[0]*i[4]-i[1]*i[3])>1e-5}function AS(i){if(!Array.isArray(i)||i.length!==4||!i.every(r=>Number.isFinite(r)&&Math.abs(r)<=600))return null;let[t,e,n,s]=i;return t>=e||n>=s?null:[[t,n],[e,n],[e,s],[t,s]]}function ug(i){let t=[],e=0;for(let n of i){let s=n.presenceTrackTransform;if(n.type!=="presenceSwitch"||!lg(s))continue;let[r,o,a,c,l,u]=s,d=TS.get(n.presenceTrackProfile),h=Math.hypot(o,l),f=cg(a,u)?{origin:{x:a,y:u},forward:{x:o/h,y:l/h}}:{},g=t.length;for(let[x,p]of[["configured",AS(n.presenceTrackZone)],["nominal",d?.ring]]){if(!p)continue;let m=p.map(([y,w])=>[r*y+o*w+a,c*y+l*w+u]);for(let[y]of og.default.intersection([m],wS))t.push({id:n.id,kind:x,points:y.slice(0,-1).map(([w,v])=>({x:w,y:v})),...f,...x==="nominal"?{rangeMeters:d.rangeMeters}:{}})}if(t.length>g&&++e===12)break}return t}function RS(i={},t=[]){let e={};for(let n of new Set(t)){if(!ag.test(n))continue;let s=i[n],r=s?.attributes;if(r?.tracking_schema!==ig)continue;let o=new Set,a=[];for(let c of Array.isArray(r.tracks)?r.tracks.slice(0,ES):[]){if(!Number.isInteger(c?.id)||c.id<-128||c.id>255||o.has(c.id)||![c.x,c.y].every(u=>Number.isFinite(u)&&Math.abs(u)<=800))continue;o.add(c.id);let l={id:c.id,x:c.x,y:c.y};Number.isFinite(c.z)&&Math.abs(c.z)<=800&&(l.z=c.z),Number.isFinite(c.speed)&&Math.abs(c.speed)<=32768&&(l.speed=c.speed),a.push(l)}e[n]={state:s.state,attributes:{tracking_schema:ig,observed_at:Number.isFinite(r.observed_at)?r.observed_at:null,zones_observed_at:Number.isFinite(r.zones_observed_at)?r.zones_observed_at:null,zones:Array.isArray(r.zones)?r.zones.slice(0,4).map(c=>typeof c=="boolean"?c:null):[],tracks:a}}}return e}function hg(i,t,e=Date.now()){let n=[],s=new Set;for(let r of i){let o=r.presenceTrackEntityId,a=r.presenceTrackTransform;if(r.type!=="presenceSwitch"||!ag.test(o||"")||s.has(o)||!lg(a))continue;s.add(o);let c=RS(t,[o])[o];if(!c||["unknown","unavailable"].includes(c.state))continue;let{observed_at:l,tracks:u}=c.attributes;if(!Number.isFinite(l)||l>e+1e3||e-l>=sg)continue;let[d,h,f,g,x,p]=a;for(let m of u){let y=d*m.x+h*m.y+f,w=g*m.x+x*m.y+p;cg(y,w)&&n.push({id:o+":"+m.id,x:y,y:w,expiresAt:l+sg})}}return n}var CS=22,IS=5,PS=1e3/12,LS=1e3,NS=12;function DS(i,t,e){let n=ng(i,t,e),s=new Set(n.map(r=>r.id));for(let r of i.filter(o=>!s.has(o.id))){let o=Math.min(r.w,t),a=Math.min(r.h,e),c=[];for(let u=o/2;u<=t-o/2;u+=o+4)for(let d=a/2;d<=e-a/2;d+=a+4)c.push({...r,x:u,y:d,w:o,h:a});c.sort((u,d)=>Math.hypot(u.x-r.x,u.y-r.y)-Math.hypot(d.x-r.x,d.y-r.y));let l=c.find(u=>n.every(d=>Math.abs(u.x-d.x)>=(u.w+d.w)/2+2||Math.abs(u.y-d.y)>=(u.h+d.h)/2+2));l&&n.push(l)}return n}function US(i,t){if(!t)return!1;let e=(Number(i.rotation)||0)*Math.PI/180,n=t.x-i.x,s=t.y-i.y,r=n*Math.cos(e)+s*Math.sin(e),o=-n*Math.sin(e)+s*Math.cos(e);return Math.abs(r)<=i.w/2&&Math.abs(o)<=i.h/2}function FS(i,t,e,n,s,r){let o=i.flatMap((a,c)=>{let l=n.get(a.id);if(!l)return[];let u=Math.hypot(l.x*s-t.x,l.y*r-t.y),d=u<=CS;return!d&&(a.type==="garageDoor"||!US(a,e))?[]:[{item:a,index:c,distance:u,near:d,area:a.w*a.h}]});return o.sort((a,c)=>Number(c.near)-Number(a.near)||(a.near?a.distance-c.distance:a.area-c.area)||c.index-a.index),o[0]?.item??null}function OS(i,t){let e=t.RoomcraftEditorViewport,n=i.getElementById("sceneCanvas"),s=i.getElementById("viewport"),r=i.getElementById("sceneView");if(!e||!n||!s||!r)return null;Rp(r,!0);let o={left:i.getElementById("sceneRotateLeft"),right:i.getElementById("sceneRotateRight"),out:i.getElementById("sceneZoomOut"),in:i.getElementById("sceneZoomIn")},a=i.getElementById("sceneCameraOptions"),c=i.getElementById("sceneReset"),l=i.getElementById("sceneSaveDefault"),u=i.getElementById("sceneClearDefault"),d=i.getElementById("sceneDefaultStatus"),h=Ip(t),f=t.matchMedia?.("(prefers-reduced-motion: reduce)"),g=t.location?.pathname?.startsWith("/local/roomcraft/")?t.RoomcraftDashboardBridge:null,x=i.createElement("label");x.className="scene-dashboard-look",x.hidden=!0,x.title="Lighting and device appearance from the last dashboard import";let p=i.createElement("input");p.type="checkbox",p.checked=!0,x.append(p," Dashboard look"),a?.append(x);let m=i.createElement("div");m.className="scene-selection",m.setAttribute("aria-hidden","true"),Object.assign(m.style,{position:"absolute",width:"32px",height:"32px",border:"2px solid #35756b",borderRadius:"50%",transform:"translate(-50%,-50%)",pointerEvents:"none",boxShadow:"0 0 0 2px #fff6de",zIndex:"2",display:"none"}),s.append(m);let y=i.createElement("div");y.className="scene-placeholders",Object.assign(y.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"1"}),s.append(y);let w=i.createElementNS("http://www.w3.org/2000/svg","svg");w.classList.add("scene-placeholder-leaders"),w.setAttribute("aria-hidden","true"),Object.assign(w.style,{position:"absolute",inset:"0",width:"100%",height:"100%",pointerEvents:"none"}),s.insertBefore(w,y);let v=new Map,b=i.getElementById("miniHelp"),E=b?.textContent,C=n.getAttribute("aria-label")??"Editable three-dimensional home view",_,P,F,L=xh(null),U=r.value,V="default",O,K,z,tt=-1/0,H=0,X=!1,Y=!1,$=null,rt=!1,yt=[],_t=[],vt="",Pt=0,ct,ht=!1,Tt={},Ot={key:"",scene:null,reduceMotion:!1},Lt={id:null,scene:null},It=()=>U!=="plan",Jt=()=>U==="free",pt=()=>n.getBoundingClientRect(),bt=wt=>{let Gt=pt();return{x:wt.clientX-Gt.left,y:wt.clientY-Gt.top}};function Mt(wt){e.showStatus?.(wt)}function St(){if(!(!X&&(_?.hasAmbientMotion||_?.hasPeopleMotion)&&It()&&!i.hidden&&!f?.matches)){t.cancelAnimationFrame(z),z=void 0;return}z===void 0&&(z=t.requestAnimationFrame(Gt=>{if(z=void 0,Gt-tt>=PS-1){tt=Gt,H=Gt/1e3;try{_.renderAmbient(H)}catch{ft()}}St()}))}function Et(wt=!0){let Gt=It()?_:null,ee=f?.matches===!0,ne=Dt()?hg(yt,Tt):[],Ce=JSON.stringify(ne);Ce===Ot.key&&Gt===Ot.scene&&ee===Ot.reduceMotion||(Ot={key:Ce,scene:Gt,reduceMotion:ee},Gt&&(Gt.setPeople(ne,(t.performance?.now()??0)/1e3,{reduceMotion:ee}),wt&&q()),e.setPersonPreview?.(Gt?[]:ne))}function Dt(){return!!(g?.request&&_t.length&&!X&&!i.hidden)}async function Bt(wt=!0){if(wt&&Et(),ht||!Dt())return;ht=!0;let Gt=Pt;try{let ee=await g.request("TRACK_GET",_t);Gt===Pt&&Dt()&&(Tt=ee&&typeof ee=="object"?ee:{},Et())}catch{Gt===Pt&&(Tt={},Et())}finally{ht=!1}}function zt(){Dt()?ct===void 0&&(ct=t.setInterval(Bt,LS),Bt(!1)):ct!==void 0&&(t.clearInterval(ct),ct=void 0,Pt++,Tt={})}function jt(wt){yt=wt.filter(ne=>ne.type==="presenceSwitch"&&/^sensor\.[a-z0-9_]+$/.test(ne.presenceTrackEntityId)&&Array.isArray(ne.presenceTrackTransform));let Gt=[...new Set(yt.map(ne=>ne.presenceTrackEntityId))].slice(0,NS),ee=Gt.join(",");ee!==vt&&(vt=ee,_t=Gt,Pt++,Tt={}),zt()}function q(wt){if(St(),!_||!It())return;let{width:Gt,height:ee}=pt();if(!Gt||!ee)return;_.resize(Gt,ee);let ne=e.getSelection(),Ce=ne?.kind==="item"?ne.id:null;if(Lt.scene!==_||Lt.id!==Ce){let rn=P.items.find(Tn=>Tn.id===Ce);_.setDetectionZones(rn?ug([rn]):[]),Lt={id:Ce,scene:_}}let Ln=e.getPreview?.();x.hidden=!Ln?.environment;let jn=!x.hidden&&p.checked,Gn=Object.create(null);if(jn)for(let rn of P.items){let Tn=Ln.states?.[rn.id];Tn&&Tn.entityId===rn.entityId&&(Gn[rn.id]=Tn)}let xs=jn?Ln.environment:{night:!1,condition:"sunny",daylightKnown:!0};if(_.render(H,Gn,{...xs,reduceMotion:f?.matches===!0},{animateTelemetry:!1,showTelemetryPosition:jn,draftPositions:wt}),Jt())return;let sn=[];for(let[rn,Tn]of v){let Qn=_.anchor(rn);Tn.hidden=!Qn,Qn&&sn.push({id:rn,marker:Tn,x:Qn.x*Gt,y:Qn.y*ee,w:96,h:44})}let Or=DS(sn,Gt,ee),jo=new Set(Or.map(rn=>rn.id)),Qo=[];for(let rn of Or){let{marker:Tn,x:Qn,y:I,w:it,h:gt,id:ut}=rn;Object.assign(Tn.style,{left:`${Qn}px`,top:`${I}px`,width:`${it}px`,height:`${gt}px`});let lt=sn.find(Nt=>Nt.id===ut);if(Math.hypot(lt.x-Qn,lt.y-I)>8){let Nt=i.createElementNS("http://www.w3.org/2000/svg","line");for(let[Ht,Ft]of Object.entries({x1:lt.x,y1:lt.y,x2:Qn,y2:I}))Nt.setAttribute(Ht,Ft);Nt.setAttribute("stroke","#6f816b"),Nt.setAttribute("stroke-width","1"),Nt.setAttribute("stroke-dasharray","3 3"),Qo.push(Nt)}}for(let[rn,Tn]of v)Tn.hidden=!jo.has(rn);w.replaceChildren(...Qo);let zs=ne?.kind==="item"?_.anchor(ne.id):null;m.style.display=zs?"block":"none",zs&&(m.style.left=`${zs.x*Gt}px`,m.style.top=`${zs.y*ee}px`)}function oe(){if(!O)return;let wt=O;O=void 0;try{n.releasePointerCapture(wt.pointerId)}catch{}wt.item&&q({[wt.item.id]:{position:{x:wt.item.x,y:wt.item.y}}})}function $t(){a&&(a.hidden=!It());for(let wt of Object.values(o))wt&&(wt.disabled=!It());l&&(l.hidden=!_||!Jt(),l.disabled=rt),u&&(u.hidden=!_||!It()||!$,u.disabled=rt)}function B(wt){d&&(d.textContent=wt)}function T(){Y=!0,B("")}function et(){n.tabIndex=Jt()?0:-1,n.style.cursor=Jt()?"grab":"",n.setAttribute("aria-label",Jt()?"Free view. Use arrow keys to orbit and plus or minus to zoom.":C)}function nt(wt,{initial:Gt=!1}={}){Gt||(T(),wt==="default"&&(Y=!1)),Q.cancel(),oe();let ee=_?.getView()??L,ne=Object.hasOwn(Lr,wt)?wt:"plan";ne!=="plan"&&e.useSelectTool?.(),U=ne,It()&&!Jt()&&(V=U),r.value=U,n.hidden=!It(),et();let Ce=It()&&!Jt();if(y.style.display=Ce?"block":"none",w.style.display=Ce?"block":"none",Ce||(m.style.display="none"),b&&(Jt()?b.textContent="Drag or swipe to orbit. Pinch or scroll to zoom.":b.textContent=It()?"Drag objects to move them. Scroll to zoom; use the view controls to rotate.":E),s.classList.toggle("scene-3d",It()),$t(),!It()){k(),St(),x.hidden=!0,Mt("Plan view \xB7 edit rooms, walls, floors and objects");return}let Ln=U==="default"?xh($):Jt()?Cp(ee):{preset:U};L=_?_.setView(Ln):Ln,k(),_&&Mt(Jt()?"Free view \xB7 choose an editable view to move objects":"3D view \xB7 select and drag objects, or place an object from the catalog")}function ft(){Q.cancel(),_?.dispose(),_=void 0,F=void 0,U="plan",St(),r.value=U,n.hidden=!0,x.hidden=!0,et(),y.style.display="none",w.style.display="none",b&&(b.textContent=E),s.classList.remove("scene-3d"),m.style.display="none",$t(),Et(!1),Mt("3D view is unavailable on this screen. Plan view is ready.")}function k(){if(X)return;let wt=e.getProject();if(jt(wt.items),!It()){Et();return}let Gt=JSON.stringify(wt);try{if(!_||Gt!==F){oe(),_&&(L=_.getView()),_?.dispose(),_=void 0,P=wt,_=Qm(n,P),_.setView(L),F=Gt,v.clear(),y.replaceChildren();for(let ee of P.items.filter(ne=>ne.type==="cameraThumbnail"||ne.type.startsWith("ui"))){let ne=i.createElement("button");ne.type="button",ne.className="scene-placeholder",ne.textContent=ee.name||(ee.type==="cameraThumbnail"?"Camera":"Interface"),ne.setAttribute("aria-label",`Select ${ne.textContent}`),Object.assign(ne.style,{position:"absolute",transform:"translate(-50%,-50%)",pointerEvents:"auto",minWidth:"44px",minHeight:"44px",maxWidth:"96px",padding:"3px 7px",boxSizing:"border-box",border:"1px dashed #6f816b",borderRadius:"8px",background:"#fff8e5e8",color:"#3a5243",font:"600 11px/1.2 system-ui,sans-serif",touchAction:"none"}),ne.addEventListener("pointerdown",Ce=>Z(Ce,ee.id)),ne.addEventListener("click",Ce=>{!Jt()&&Ce.detail===0&&(e.selectItem(ee.id),q())}),v.set(ee.id,ne),y.append(ne)}}$t(),Et(!1),q()}catch{ft()}}function M(wt){!_||!It()||(T(),oe(),_.setView(wt(_.getView())),L=_.getView(),q())}let S=()=>k(),A=()=>{let wt=e.getTool();It()&&wt!=="select"?nt("plan"):Jt()&&e.hasPlacement()?nt(V):It()&&q()},N=()=>nt(r.value),D=()=>{t.cancelAnimationFrame(K),K=t.requestAnimationFrame(()=>q())},Q=eg(n,{getView:()=>Jt()?_?.getView():null,onChange:wt=>{!_||!Jt()||(T(),L=_.setView(wt),D())}}),Z=(wt,Gt=null)=>{if(!It()||Jt()||!_||wt.button!==0||O)return;wt.preventDefault(),wt.stopPropagation();let ee=bt(wt);if(e.hasPlacement()){let sn=_.projectToPlan(ee.x,ee.y,e.getPlacementType(),{preferTabletop:!0});sn&&e.placeAt(sn.x,sn.y),k();return}let{width:ne,height:Ce}=pt(),Ln=new Map(P.items.map(sn=>[sn.id,_.anchor(sn.id)])),jn=Gt??_.pickGarage(ee.x,ee.y),Gn=jn?P.items.find(sn=>sn.id===jn):FS(P.items,ee,_.projectToPlan(ee.x,ee.y),Ln,ne,Ce);if(e.selectItem(Gn?.id??null),!Gn){q();return}let xs=_.projectToPlan(ee.x,ee.y,Gn.type);xs&&(O={item:{...Gn},startScreen:ee,startPlan:xs,pointerId:wt.pointerId},n.setPointerCapture(wt.pointerId),q())},at=wt=>{if(!It()||Jt()||(wt.stopPropagation(),!O||O.pointerId!==wt.pointerId||!_))return;let Gt=bt(wt);if(!O.moved&&Math.hypot(Gt.x-O.startScreen.x,Gt.y-O.startScreen.y)<IS)return;let ee=_.projectToPlan(Gt.x,Gt.y,O.item.type);if(!ee)return;O.moved=!0;let ne={x:O.item.x+ee.x-O.startPlan.x,y:O.item.y+ee.y-O.startPlan.y},Ce=e.moveItemWarning?.(O.item.id,ne.x,ne.y);if(Ce){Ce!==O.warning&&Mt(Ce),O.warning=Ce;return}O.warning&&Mt(`Moving ${O.item.name||"object"}`),O.warning=void 0,O.position=ne,q({[O.item.id]:{position:O.position}})},W=wt=>{if(!It()||Jt()||(wt.stopPropagation(),!O||O.pointerId!==wt.pointerId))return;let Gt=O;O=void 0;try{n.releasePointerCapture(wt.pointerId)}catch{}Gt.moved&&Gt.position?(e.moveItem(Gt.item.id,Gt.position.x,Gt.position.y),k()):q()},ot=wt=>{Jt()||(O?.pointerId===wt.pointerId&&oe(),wt.stopPropagation())},R=wt=>{!It()||Jt()||(wt.preventDefault(),wt.stopPropagation(),M(Gt=>({...Gt,zoom:Gt.zoom*(wt.deltaY<0?1.1:1/1.1)})))},j=wt=>{Jt()&&wt.target===n&&(wt.key==="Delete"||wt.key==="Backspace")&&(wt.preventDefault(),wt.stopImmediatePropagation()),wt.key==="Escape"&&O&&(wt.preventDefault(),wt.stopImmediatePropagation(),oe())},J=wt=>{wt.preventDefault(),ft()},dt=()=>M(wt=>({...wt,azimuth:wt.azimuth-15})),xt=()=>M(wt=>({...wt,azimuth:wt.azimuth+15})),mt=()=>M(wt=>({...wt,zoom:wt.zoom/1.2})),At=()=>M(wt=>({...wt,zoom:wt.zoom*1.2})),Ct=()=>nt("top"),te=()=>q(),kt=()=>{Et(!1),q()},ge=()=>{zt(),Et(),St()};i.addEventListener("visibilitychange",ge),f?.addEventListener("change",kt);async function fe(){rt=!0,$t();try{$=await h.read(),!X&&!Y&&nt("default",{initial:!0})}catch{X||B("Saved view unavailable")}finally{rt=!1,X||$t()}}async function Ge(wt){if(!(!_||!It()||rt)){rt=!0,B("Saving view\u2026"),$t();try{if(await h.write(wt),X)return;$=wt,wt||nt("default"),B(wt?"Default view saved":"Top down is the default")}catch{X||B("Could not save default view")}finally{rt=!1,X||$t()}}}let Te=()=>{Jt()&&_&&Ge(_.getView())},He=()=>Ge(null);o.left?.addEventListener("click",dt),o.right?.addEventListener("click",xt),o.out?.addEventListener("click",mt),o.in?.addEventListener("click",At),c?.addEventListener("click",Ct),l?.addEventListener("click",Te),u?.addEventListener("click",He),p.addEventListener("change",te),r.addEventListener("change",N),n.addEventListener("pointerdown",Z),n.addEventListener("pointermove",at),n.addEventListener("pointerup",W),n.addEventListener("pointercancel",ot),n.addEventListener("lostpointercapture",ot),n.addEventListener("wheel",R,{passive:!1}),n.addEventListener("webglcontextlost",J),t.addEventListener("keydown",j,!0),t.addEventListener("roomcraft-editor-change",S),t.addEventListener("roomcraft-editor-tool",A);let We=new t.ResizeObserver(D);return We.observe(s),nt(U,{initial:!0}),fe(),{getView:()=>_?.getView()??{...L},setView:nt,dispose(){X=!0,St(),zt(),i.removeEventListener("visibilitychange",ge),f?.removeEventListener("change",kt),oe(),Q.dispose(),U="plan",et(),We.disconnect(),t.cancelAnimationFrame(K),_?.dispose(),_=void 0,m.remove(),y.remove(),w.remove(),x.remove(),p.removeEventListener("change",te),b&&(b.textContent=E),o.left?.removeEventListener("click",dt),o.right?.removeEventListener("click",xt),o.out?.removeEventListener("click",mt),o.in?.removeEventListener("click",At),c?.removeEventListener("click",Ct),l?.removeEventListener("click",Te),u?.removeEventListener("click",He),r.removeEventListener("change",N),n.removeEventListener("pointerdown",Z),n.removeEventListener("pointermove",at),n.removeEventListener("pointerup",W),n.removeEventListener("pointercancel",ot),n.removeEventListener("lostpointercapture",ot),n.removeEventListener("wheel",R),n.removeEventListener("webglcontextlost",J),t.removeEventListener("keydown",j,!0),t.removeEventListener("roomcraft-editor-change",S),t.removeEventListener("roomcraft-editor-tool",A)}}}typeof window<"u"&&typeof document<"u"&&(window.RoomcraftPlanStructure=Wh,OS(document,window),window.dispatchEvent(new Event("roomcraft-asset-loaded")));})();
